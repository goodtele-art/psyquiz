/* ========================================
   App Core — SPA 라우터, 데이터 로더, 유틸
   ======================================== */

const App = (() => {
  // --- State ---
  let termsData = {};      // { FOUND: [...], RELI: [...], ... }
  let allTerms = [];       // flat array of all terms
  let currentGame = null;  // 현재 게임 타입
  let currentConfig = {};  // { category, difficulty, count }
  let gameInstance = null;  // 현재 게임 인스턴스

  // --- Category Metadata ---
  const CATEGORIES = {
    FOUND:   { name: '심리검사의 기초와 역사', short: '기초역사', en: 'Foundations & History', color: '#6C5CE7', icon: '📚' },
    NORMS:   { name: '규준과 점수 해석', short: '규준점수', en: 'Norms & Scores', color: '#00B894', icon: '📊' },
    RELI:    { name: '신뢰도', short: '신뢰도', en: 'Reliability', color: '#0984E3', icon: '🔒' },
    VALI:    { name: '타당도', short: '타당도', en: 'Validity', color: '#E17055', icon: '🎯' },
    ITEM:    { name: '문항분석과 검사개발', short: '문항분석', en: 'Item Analysis', color: '#FDCB6E', icon: '🔍' },
    INTELL:  { name: '지능검사', short: '지능검사', en: 'Intelligence Testing', color: '#74B9FF', icon: '🧠' },
    ACHIEVE: { name: '적성과 성취검사', short: '적성성취', en: 'Aptitude & Achievement', color: '#A29BFE', icon: '🏆' },
    PERSON:  { name: '성격검사 (객관적)', short: '성격검사', en: 'Personality Tests', color: '#FF7675', icon: '🎭' },
    PROJ:    { name: '투사검사', short: '투사검사', en: 'Projective Tests', color: '#636E72', icon: '🖼️' },
    NEURO:   { name: '신경심리검사', short: '신경심리', en: 'Neuropsychological', color: '#00CEC9', icon: '🧬' },
    CLINIC:  { name: '임상면접과 행동평가', short: '임상평가', en: 'Clinical Assessment', color: '#D63031', icon: '🏥' },
    DEVELOP: { name: '발달/교육검사', short: '발달교육', en: 'Developmental & Educational', color: '#55EFC4', icon: '🌱' },
    INDUST:  { name: '산업/조직 심리검사', short: '산업조직', en: 'I/O Testing', color: '#FAB1A0', icon: '🏢' },
    ETHICS:  { name: '검사 윤리와 공정성', short: '윤리공정', en: 'Ethics & Fairness', color: '#81ECEC', icon: '⚖️' }
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
      setupSections.forEach(s => s.classList.add('hidden'));
      if (directionSection) directionSection.classList.add('hidden');
      if (examInfo) examInfo.classList.remove('hidden');
    } else {
      setupSections.forEach(s => s.classList.remove('hidden'));
      if (examInfo) examInfo.classList.add('hidden');

      if (directionSection) {
        if (gameType === 'english') {
          directionSection.classList.remove('hidden');
        } else {
          directionSection.classList.add('hidden');
        }
      }

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

    currentConfig = { category: 'all', difficulty: 'easy', count: 20, direction: 'ko2en' };

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
      if (typeof EXAM_DATA === 'undefined' || !EXAM_DATA.questions) {
        alert('기출문제 데이터를 찾을 수 없습니다.');
        return;
      }
      config.terms = [];
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

    let terms = getTermsByCategory(config.category);
    if (terms.length === 0) {
      alert('해당 카테고리의 용어가 없습니다.');
      return;
    }

    terms = shuffle(terms).slice(0, config.count);
    config.terms = terms;

    document.getElementById('hud-progress').textContent = `0/${terms.length}`;
    document.getElementById('hud-bar-fill').style.width = '0%';
    document.getElementById('hud-score').textContent = '0';
    document.getElementById('header-title').textContent = GAMES[gameType]?.name || '';

    ScoreManager.reset(config.difficulty, terms.length);
    Combo.reset();

    showPage('game');
    Timer.startElapsed();

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
    localStorage.setItem('psytest_theme', next);
    document.querySelectorAll('#theme-icon, .home-theme-icon').forEach(el => {
      el.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    Sound.click();
  }

  function initTheme() {
    const saved = localStorage.getItem('psytest_theme');
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
    updateHomeStats();

    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('mouseenter', () => {});
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
