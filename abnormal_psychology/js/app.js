/* ========================================
   App Core — SPA 라우터, 데이터 로더, 유틸
   ======================================== */

const App = (() => {
  // --- State ---
  let termsData = {};      // { FOUND: [...], ANXIETY: [...], ... }
  let allTerms = [];       // flat array of all terms
  let currentGame = null;  // 현재 게임 타입
  let currentConfig = {};  // { category, difficulty, count }
  let gameInstance = null;  // 현재 게임 인스턴스

  // --- Category Metadata ---
  const CATEGORIES = {
    FOUND:   { name: '이상심리학 기초와 모형', short: '기초', en: 'Foundations', color: '#5C6BC0', icon: '📚' },
    ASSESS:  { name: '평가와 진단분류', short: '평가', en: 'Assessment', color: '#26A69A', icon: '📋' },
    ANXIETY: { name: '불안장애', short: '불안', en: 'Anxiety', color: '#EF5350', icon: '😰' },
    OBSESS:  { name: '강박 및 관련 장애', short: '강박', en: 'OCD', color: '#AB47BC', icon: '🔄' },
    TRAUMA:  { name: '외상 및 스트레스 관련 장애', short: '외상', en: 'Trauma', color: '#FF7043', icon: '💔' },
    MOOD:    { name: '우울장애와 양극성 장애', short: '기분', en: 'Mood', color: '#42A5F5', icon: '🌧️' },
    SCHIZO:  { name: '조현병 스펙트럼 장애', short: '조현', en: 'Schizophrenia', color: '#7E57C2', icon: '🔮' },
    PERSON:  { name: '성격장애', short: '성격', en: 'Personality', color: '#EC407A', icon: '🎭' },
    SUBST:   { name: '물질관련 및 중독 장애', short: '물질', en: 'Substance', color: '#66BB6A', icon: '💊' },
    SOMDIS:  { name: '신체증상 및 해리장애', short: '신체', en: 'Somatic', color: '#FFA726', icon: '🫀' },
    EATING:  { name: '섭식장애', short: '섭식', en: 'Eating', color: '#FFCA28', icon: '🍽️' },
    SEXUAL:  { name: '성관련 및 충동조절 장애', short: '성·충동', en: 'Sexual & Impulse', color: '#26C6DA', icon: '⚡' },
    NEURO:   { name: '신경발달 및 신경인지장애', short: '신경', en: 'Neuro', color: '#78909C', icon: '🧠' }
  };

  const GAMES = {
    quiz:      { name: '4지선다 퀴즈', icon: '📝', color: '--game-quiz' },
    card:      { name: '카드 매칭', icon: '🃏', color: '--game-card' },
    typing:    { name: '타이핑 낙하', icon: '⌨️', color: '--game-typing' },
    swipe:     { name: '스와이프 분류', icon: '👆', color: '--game-swipe' },
    connect:   { name: '선 잇기', icon: '🔗', color: '--game-connect' },
    crossword: { name: '십자말 퍼즐', icon: '🧩', color: '--game-crossword' },
    hierarchy: { name: '계층 분류', icon: '🌳', color: '--game-hierarchy' },
    timeline:  { name: '순서 배열', icon: '📅', color: '--game-timeline' },
    exam:      { name: '실전문제 풀기', icon: '📋', color: '--game-exam' },
    english:   { name: '영어공부하기', icon: '🔤', color: '--game-english' }
  };

  // --- Data Loading ---
  function loadTerms() {
    // TERMS_DATA는 data/terms-data.js에서 <script> 태그로 로드됨
    // file:// 프로토콜에서도 작동
    if (typeof TERMS_DATA === 'undefined') {
      console.error('[App] TERMS_DATA를 찾을 수 없습니다. data/terms-data.js가 로드되었는지 확인하세요.');
      return;
    }

    allTerms = [];
    Object.entries(TERMS_DATA).forEach(([catCode, terms]) => {
      if (Array.isArray(terms) && terms.length > 0) {
        termsData[catCode] = terms;
        allTerms.push(...terms);
      }
    });

    console.log(`[App] ${allTerms.length}개 용어 로드 완료 (${Object.keys(termsData).length}개 카테고리)`);
  }

  // --- Utilities ---
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getTermsByCategory(category) {
    if (category === 'all') return allTerms;
    return termsData[category] || [];
  }

  function findTermById(id) {
    return allTerms.find(t => t.id === id);
  }

  function getRandomTerms(count, category = 'all', exclude = []) {
    let pool = getTermsByCategory(category).filter(t => !exclude.includes(t.id));
    return shuffle(pool).slice(0, count);
  }

  // --- Page Navigation ---
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.remove('hidden');

    const header = document.getElementById('global-header');
    if (page === 'home') {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    window.scrollTo(0, 0);
  }

  function navigate(page, gameType) {
    if (page === 'setup' && gameType) {
      currentGame = gameType;
      showSetupPage(gameType);
    } else if (page === 'home') {
      currentGame = null;
      showPage('home');
      updateHomeStats();
    } else {
      showPage(page);
    }
    Sound.click();
  }

  function goBack() {
    if (gameInstance && gameInstance.cleanup) gameInstance.cleanup();
    Timer.stop();
    navigate('home');
  }

  // --- Setup Page ---
  function showSetupPage(gameType) {
    const game = GAMES[gameType];
    if (!game) return;

    document.getElementById('setup-game-icon').textContent = game.icon;
    document.getElementById('setup-game-title').textContent = game.name;
    document.getElementById('header-title').textContent = game.name;

    const setupSections = document.querySelectorAll('.setup-section');
    const examInfo = document.getElementById('exam-info');

    const directionSection = document.getElementById('setup-direction-section');

    if (gameType === 'exam') {
      // 실전문제: 카테고리/난이도/문제수 숨기고 안내 표시
      setupSections.forEach(s => s.classList.add('hidden'));
      if (directionSection) directionSection.classList.add('hidden');
      if (examInfo) examInfo.classList.remove('hidden');
    } else {
      // 일반 게임: 설정 표시, exam 안내 숨기기
      setupSections.forEach(s => s.classList.remove('hidden'));
      if (examInfo) examInfo.classList.add('hidden');

      // 방향 선택: english 게임만 표시
      if (directionSection) {
        if (gameType === 'english') {
          directionSection.classList.remove('hidden');
        } else {
          directionSection.classList.add('hidden');
        }
      }

      // 카테고리 칩 생성
      const catContainer = document.getElementById('setup-categories');
      catContainer.innerHTML = '<button class="chip active" data-value="all" onclick="App.selectCategory(this)">전체</button>';

      Object.entries(CATEGORIES).forEach(([code, cat]) => {
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.dataset.value = code;
        btn.textContent = cat.short;
        btn.onclick = function() { App.selectCategory(this); };
        catContainer.appendChild(btn);
      });
    }

    // 기본 설정
    currentConfig = { category: 'all', difficulty: 'easy', count: 20, direction: 'ko2en' };

    // 리더보드 표시
    const lbSetup = document.getElementById('setup-leaderboard');
    if (lbSetup) {
      const entries = Leaderboard.getForGame(gameType);
      if (entries.length > 0) {
        lbSetup.innerHTML = `
          <h3 class="setup-lb-title">🏆 순위표</h3>
          ${Leaderboard.renderTable(gameType)}
        `;
      } else {
        lbSetup.innerHTML = '';
      }
    }

    showPage('setup');
  }

  function selectCategory(el) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentConfig.category = el.dataset.value;
    Sound.click();
  }

  function selectDifficulty(el) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentConfig.difficulty = el.dataset.value;
    Sound.click();
  }

  function selectCount(el) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentConfig.count = parseInt(el.dataset.value);
    Sound.click();
  }

  function selectDirection(el) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentConfig.direction = el.dataset.value;
    Sound.click();
  }

  // --- Game Start ---
  function startGame() {
    const gameType = currentGame;
    const config = { ...currentConfig };

    if (gameType === 'exam') {
      // 실전문제: EXAM_DATA에서 직접 로드 (용어 불필요)
      if (typeof EXAM_DATA === 'undefined' || !EXAM_DATA.questions) {
        alert('기출문제 데이터를 찾을 수 없습니다.');
        return;
      }
      config.terms = []; // dummy
      config.count = 10;
      config.difficulty = 'medium';

      document.getElementById('hud-progress').textContent = '0/10';
      document.getElementById('hud-bar-fill').style.width = '0%';
      document.getElementById('hud-score').textContent = '0';
      document.getElementById('header-title').textContent = GAMES[gameType]?.name || '';

      ScoreManager.reset(config.difficulty, 10);
      Combo.reset();

      showPage('game');
      Timer.startElapsed();

      const gameArea = document.getElementById('game-area');
      gameArea.innerHTML = '';

      if (typeof ExamGame !== 'undefined') {
        gameInstance = ExamGame.create(gameArea, config);
      }
      return;
    }

    // 용어 추출
    let terms = getTermsByCategory(config.category);
    if (terms.length === 0) {
      alert('해당 카테고리의 용어가 없습니다.');
      return;
    }

    terms = shuffle(terms).slice(0, config.count);
    config.terms = terms;

    // HUD 초기화
    document.getElementById('hud-progress').textContent = `0/${terms.length}`;
    document.getElementById('hud-bar-fill').style.width = '0%';
    document.getElementById('hud-score').textContent = '0';
    document.getElementById('header-title').textContent = GAMES[gameType]?.name || '';

    ScoreManager.reset(config.difficulty, terms.length);
    Combo.reset();

    showPage('game');
    Timer.startElapsed();

    // 게임 인스턴스 생성
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = '';

    const gameMap = {
      quiz: typeof QuizGame !== 'undefined' ? QuizGame : null,
      card: typeof CardGame !== 'undefined' ? CardGame : null,
      typing: typeof TypingGame !== 'undefined' ? TypingGame : null,
      swipe: typeof SwipeGame !== 'undefined' ? SwipeGame : null,
      connect: typeof ConnectGame !== 'undefined' ? ConnectGame : null,
      crossword: typeof CrosswordGame !== 'undefined' ? CrosswordGame : null,
      hierarchy: typeof HierarchyGame !== 'undefined' ? HierarchyGame : null,
      timeline: typeof TimelineGame !== 'undefined' ? TimelineGame : null,
      english: typeof EnglishGame !== 'undefined' ? EnglishGame : null
    };

    const GameClass = gameMap[gameType];
    if (GameClass) {
      gameInstance = GameClass.create(gameArea, config);
    } else {
      gameArea.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted)">
        <p style="font-size:3rem;margin-bottom:16px">🚧</p>
        <p>이 게임은 곧 출시됩니다!</p>
      </div>`;
    }
  }

  // --- Game Completion ---
  function completeGame(data) {
    Timer.stop();
    const elapsed = Timer.getElapsed();

    ResultScreen.show({
      score: ScoreManager.score,
      maxScore: ScoreManager.maxScore,
      correct: ScoreManager.correct,
      total: ScoreManager.total,
      elapsed,
      maxCombo: Combo.max,
      difficulty: currentConfig.difficulty,
      gameType: currentGame,
      ...data
    });
  }

  function restartGame() {
    if (gameInstance && gameInstance.cleanup) gameInstance.cleanup();
    startGame();
  }

  // --- Progress ---
  function saveProgress(data) {
    Progress.record(
      currentGame,
      currentConfig.category,
      data.score,
      ScoreManager.getStars(),
      data.elapsed,
      data.termResults
    );
  }

  function updateHomeStats() {
    const stats = Progress.getStats();
    document.getElementById('stats-games').textContent = stats.totalGames;
    document.getElementById('stats-terms').textContent = stats.totalTerms;

    const mastery = allTerms.length > 0 ? Math.round((stats.masteredTerms / allTerms.length) * 100) : 0;
    document.getElementById('stats-percent').textContent = mastery + '%';
    document.getElementById('stats-bar-fill').style.width = mastery + '%';

    const avgStarsRound = Math.round(stats.avgStars);
    const starStr = '★'.repeat(avgStarsRound) + '☆'.repeat(3 - avgStarsRound);
    document.getElementById('stats-stars').textContent = starStr;
  }

  // --- HUD Update ---
  function updateHUD(current, total, score) {
    document.getElementById('hud-progress').textContent = `${current}/${total}`;
    document.getElementById('hud-bar-fill').style.width = `${(current / total) * 100}%`;
    if (score !== undefined) document.getElementById('hud-score').textContent = score;
  }

  // --- Theme ---
  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('abnpsy_theme', next);
    document.querySelectorAll('#theme-icon, .home-theme-icon').forEach(el => {
      el.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    Sound.click();
  }

  function initTheme() {
    const saved = localStorage.getItem('abnpsy_theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.querySelectorAll('#theme-icon, .home-theme-icon').forEach(el => {
        el.textContent = '☀️';
      });
    }
  }

  // --- Init ---
  function init() {
    initTheme();
    loadTerms();
    if (typeof FirebaseConfig !== 'undefined') FirebaseConfig.init();
    Leaderboard.init();
    ItemStats.init();
    updateHomeStats();

    // 카드 호버 사운드
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        // 호버 시 미세한 효과는 생략 (모바일 호환)
      });
    });

    console.log('[App] 초기화 완료');
  }

  // --- Public API ---
  return {
    init,
    navigate,
    goBack,
    showPage,
    startGame,
    completeGame,
    restartGame,
    selectCategory,
    selectDifficulty,
    selectCount,
    selectDirection,
    toggleTheme,
    saveProgress,
    updateHUD,

    // 유틸
    shuffle,
    getTermsByCategory,
    findTermById,
    getRandomTerms,
    get allTerms() { return allTerms; },
    get termsData() { return termsData; },
    get currentGame() { return currentGame; },
    get currentConfig() { return currentConfig; },
    CATEGORIES,
    GAMES
  };
})();

// 앱 시작
document.addEventListener('DOMContentLoaded', () => App.init());
