/* ========================================
   PsyQuiz Portal — App Logic
   Firebase 연동, 신청 게시판, 다크모드
   ======================================== */

const Portal = (() => {
  // --- Firebase Config ---
  // TODO: 실제 Firebase 프로젝트 생성 후 아래 값을 교체하세요.
  // 1. https://console.firebase.google.com 에서 새 프로젝트 생성
  // 2. Realtime Database 활성화 (테스트 모드로 시작)
  // 3. 프로젝트 설정 > 웹 앱 추가 > config 값 복사
  const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "YOUR_APP_ID"
  };

  const DB_PATH = 'psyquiz-requests';
  const LS_UUID_KEY = 'psyquiz_uuid';
  const LS_THEME_KEY = 'psyquiz_theme';

  let db = null;
  let userId = null;
  let requests = [];
  let firebaseReady = false;

  // --- UUID ---
  function getOrCreateUserId() {
    let id = localStorage.getItem(LS_UUID_KEY);
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : generateUUID();
      localStorage.setItem(LS_UUID_KEY, id);
    }
    return id;
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  // --- Theme ---
  function initTheme() {
    const saved = localStorage.getItem(LS_THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(LS_THEME_KEY, next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // --- Firebase Init ---
  function initFirebase() {
    if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
      console.warn('[Portal] Firebase 미설정 — 로컬 모드로 동작합니다. js/app.js의 FIREBASE_CONFIG를 설정하세요.');
      showFallbackMode();
      return;
    }

    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
      firebaseReady = true;
      listenRequests();
    } catch (e) {
      console.error('[Portal] Firebase 초기화 실패:', e);
      showFallbackMode();
    }
  }

  function showFallbackMode() {
    const loading = document.getElementById('request-loading');
    if (loading) {
      loading.innerHTML = '<div class="request-empty">⚠️ Firebase가 아직 설정되지 않았습니다.<br>관리자가 설정을 완료하면 신청 게시판이 활성화됩니다.</div>';
    }
    const form = document.getElementById('request-form');
    if (form) {
      const btn = form.querySelector('.btn-submit');
      if (btn) {
        btn.disabled = true;
        btn.textContent = '⚠️ Firebase 설정 필요';
      }
    }
  }

  // --- Request CRUD ---
  function listenRequests() {
    if (!db) return;

    const ref = db.ref(DB_PATH).orderByChild('agreeCount');
    ref.on('value', snapshot => {
      requests = [];
      snapshot.forEach(child => {
        requests.push({ id: child.key, ...child.val() });
      });
      // 동의 수 내림차순
      requests.sort((a, b) => (b.agreeCount || 0) - (a.agreeCount || 0));
      renderRequests();
    }, err => {
      console.error('[Portal] 데이터 로드 실패:', err);
      const loading = document.getElementById('request-loading');
      if (loading) {
        loading.innerHTML = '<div class="request-empty">데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</div>';
      }
    });
  }

  function submitRequest(title, description) {
    if (!db || !firebaseReady) return;

    const data = {
      title: sanitize(title.trim()),
      description: sanitize(description.trim()),
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      agreeCount: 0
    };

    return db.ref(DB_PATH).push(data);
  }

  function toggleAgree(requestId) {
    if (!db || !firebaseReady) return;

    const voterRef = db.ref(`${DB_PATH}/${requestId}/voters/${userId}`);
    const countRef = db.ref(`${DB_PATH}/${requestId}/agreeCount`);

    voterRef.once('value').then(snap => {
      if (snap.exists()) {
        // 이미 동의함 — 무시
        return;
      }
      // 트랜잭션으로 카운트 증가 + 투표 기록
      const updates = {};
      updates[`${DB_PATH}/${requestId}/voters/${userId}`] = true;
      db.ref().update(updates);
      countRef.transaction(count => (count || 0) + 1);
    });
  }

  // --- Rendering ---
  function renderRequests() {
    const container = document.getElementById('request-list');
    if (!container) return;

    if (requests.length === 0) {
      container.innerHTML = '<div class="request-empty">아직 신청된 과목이 없습니다.<br>첫 번째 신청을 남겨보세요! 🎉</div>';
      return;
    }

    container.innerHTML = requests.map((req, i) => {
      const hasVoted = req.voters && req.voters[userId];
      const date = req.createdAt ? formatDate(req.createdAt) : '';

      return `
        <div class="request-card" style="animation-delay: ${i * 0.05}s">
          <div class="request-card-body">
            <div class="request-card-title">${escapeHtml(req.title)}</div>
            ${req.description ? `<div class="request-card-desc">${escapeHtml(req.description)}</div>` : ''}
            <div class="request-card-date">${date}</div>
          </div>
          <button class="agree-btn ${hasVoted ? 'agreed' : ''}"
                  data-id="${req.id}"
                  ${hasVoted ? 'disabled' : ''}
                  aria-label="동의 ${req.agreeCount || 0}명">
            <span class="agree-btn-icon">${hasVoted ? '👍' : '👆'}</span>
            <span class="agree-btn-count">${req.agreeCount || 0}</span>
          </button>
        </div>
      `;
    }).join('');

    // 동의 버튼 이벤트
    container.querySelectorAll('.agree-btn:not(.agreed)').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        toggleAgree(id);
      });
    });
  }

  // --- Utilities ---
  function sanitize(str) {
    return str.replace(/[<>"'&]/g, '').substring(0, 200);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatDate(timestamp) {
    const d = new Date(timestamp);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  }

  // --- Event Binding ---
  function bindEvents() {
    // 다크모드 토글
    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // 신청 폼
    const form = document.getElementById('request-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const titleInput = document.getElementById('request-title');
        const descInput = document.getElementById('request-desc');
        const title = titleInput.value.trim();

        if (!title) return;
        if (!firebaseReady) return;

        const btn = document.getElementById('btn-submit');
        btn.disabled = true;
        btn.textContent = '전송 중...';

        submitRequest(title, descInput.value).then(() => {
          titleInput.value = '';
          descInput.value = '';
          btn.disabled = false;
          btn.textContent = '📮 신청하기';
        }).catch(err => {
          console.error('[Portal] 신청 실패:', err);
          btn.disabled = false;
          btn.textContent = '📮 신청하기';
          alert('신청에 실패했습니다. 다시 시도해주세요.');
        });
      });
    }
  }

  // --- Init ---
  function init() {
    userId = getOrCreateUserId();
    initTheme();
    bindEvents();
    initFirebase();
  }

  document.addEventListener('DOMContentLoaded', init);

  return { toggleTheme };
})();
