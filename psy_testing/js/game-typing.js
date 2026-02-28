/* ========================================
   Game: 타이핑 낙하 (Typing Fall)
   문제(정의)가 상단에 고정, 첫글자 힌트 답이 낙하
   공백 무시, 7글자 이내 용어만 출제
   ======================================== */

const TypingGame = (() => {
  let container = null;
  let config = {};
  let terms = [];
  let currentIndex = 0;
  let fallPosition = 0;
  let fallSpeed = 0.4;
  let arenaHeight = 350;
  let inputEl = null;
  let blockEl = null;
  let questionEl = null;
  let animFrame = null;
  let termResults = [];
  let gameActive = false;
  let vvHandler = null;

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    currentIndex = 0;
    termResults = [];
    gameActive = true;

    // 7글자 이내 용어만 필터 (공백 제거 후 카운트)
    const shortTerms = gameConfig.terms.filter(t =>
      stripSpaces(t.terminology_ko).length <= 7 &&
      stripSpaces(t.terminology_ko).length >= 2
    );

    // 부족하면 전체에서 보충
    if (shortTerms.length < 5) {
      const extras = App.getTermsByCategory(gameConfig.category || 'all')
        .filter(t =>
          stripSpaces(t.terminology_ko).length <= 7 &&
          stripSpaces(t.terminology_ko).length >= 2 &&
          !shortTerms.find(s => s.id === t.id)
        );
      shortTerms.push(...App.shuffle(extras));
    }

    terms = App.shuffle(shortTerms).slice(0, gameConfig.count || 10);
    ScoreManager.total = terms.length;

    // 난이도별 속도 (느릴수록 시간 여유)
    const speeds = { easy: 0.12, medium: 0.2, hard: 0.35 };
    fallSpeed = speeds[config.difficulty] || 0.12;

    render();

    // 모바일: 고정 레이아웃 즉시 적용 (키보드 감지 불필요)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) {
      const pageEl = container.closest('.page');
      if (pageEl) pageEl.classList.add('typing-mobile-fixed');
    } else {
      setupMobileKeyboard();
    }

    showQuestion();
    startFall();

    return { cleanup };
  }

  function cleanup() {
    gameActive = false;
    if (animFrame) cancelAnimationFrame(animFrame);
    cleanupMobileKeyboard();
    const pageEl = document.getElementById('page-game');
    if (pageEl) pageEl.classList.remove('typing-mobile-fixed');
    container = null;
  }

  /* --- 모바일 키보드 대응 --- */
  function setupMobileKeyboard() {
    const vv = window.visualViewport;
    if (!vv) return;

    const pageEl = container?.closest('.page');
    if (!pageEl) return;

    let isCompact = false;

    vvHandler = () => {
      if (!gameActive) { cleanupMobileKeyboard(); return; }

      const keyboardOpen = vv.height < window.innerHeight * 0.7;

      if (keyboardOpen) {
        if (!isCompact) isCompact = true;
        pageEl.classList.add('keyboard-game-active');
        pageEl.style.top = vv.offsetTop + 'px';
        pageEl.style.height = vv.height + 'px';
        requestAnimationFrame(() => {
          const arena = document.getElementById('typing-arena');
          if (arena) arenaHeight = arena.offsetHeight;
        });
      } else if (isCompact) {
        isCompact = false;
        pageEl.classList.remove('keyboard-game-active');
        pageEl.style.top = '';
        pageEl.style.height = '';
        requestAnimationFrame(() => {
          const arena = document.getElementById('typing-arena');
          if (arena) arenaHeight = arena.offsetHeight || 280;
        });
      }
    };

    vv.addEventListener('resize', vvHandler);
    vv.addEventListener('scroll', vvHandler);
  }

  function cleanupMobileKeyboard() {
    if (vvHandler && window.visualViewport) {
      window.visualViewport.removeEventListener('resize', vvHandler);
      window.visualViewport.removeEventListener('scroll', vvHandler);
      vvHandler = null;
    }
    const pageEl = document.getElementById('page-game');
    if (pageEl) {
      pageEl.classList.remove('keyboard-game-active');
      pageEl.style.top = '';
      pageEl.style.height = '';
    }
  }

  function stripSpaces(str) {
    return str.replace(/\s/g, '');
  }

  function render() {
    container.innerHTML = `
      <div class="typing-row-layout">
        <div class="typing-question-box" id="typing-question">
          <span class="typing-question-label">문제</span>
          <p class="typing-question-text" id="typing-question-text"></p>
        </div>
        <div class="typing-arena" id="typing-arena">
          <div class="typing-scanlines"></div>
          <div class="typing-falling-block" id="typing-block" style="top: 0px"></div>
        </div>
      </div>
      <div class="typing-input-area">
        <input type="text" class="typing-input" id="typing-input"
               placeholder="답을 입력하고 Enter..."
               autocomplete="off" autocapitalize="off" spellcheck="false">
      </div>
      <div class="typing-hint" id="typing-hint"></div>
    `;

    inputEl = document.getElementById('typing-input');
    blockEl = document.getElementById('typing-block');
    questionEl = document.getElementById('typing-question-text');
    arenaHeight = document.getElementById('typing-arena').offsetHeight || 350;

    inputEl.focus();
    inputEl.addEventListener('keydown', handleKeydown);

    App.updateHUD(currentIndex + 1, terms.length, ScoreManager.score);
  }

  function showQuestion() {
    if (currentIndex >= terms.length) return;
    const term = terms[currentIndex];

    // 문제: 정의 표시 (첫 문장, 소수점·괄호 내 마침표 제외)
    const def = term.definition;
    const sentenceEnd = def.search(/(?<!\d)\.(?!\d)/);
    const question = (sentenceEnd > 0 && sentenceEnd < def.length - 1) ? def.substring(0, sentenceEnd + 1) : def;
    if (questionEl) questionEl.textContent = question;

    // 낙하 블록: 첫글자 + 나머지 가림
    const answer = stripSpaces(term.terminology_ko);
    const masked = answer[0] + ' ' + Array(answer.length - 1).fill('_').join(' ');
    if (blockEl) {
      blockEl.textContent = masked;
      blockEl.className = 'typing-falling-block';
    }
  }

  function startFall() {
    fallPosition = 0;

    function animate() {
      if (!gameActive) return;
      fallPosition += fallSpeed;

      if (blockEl) {
        blockEl.style.top = fallPosition + 'px';
      }

      // 바닥 도달 = 오답
      if (fallPosition >= arenaHeight - 50) {
        handleMiss();
        return;
      }

      animFrame = requestAnimationFrame(animate);
    }

    animFrame = requestAnimationFrame(animate);
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  }

  function checkAnswer() {
    if (currentIndex >= terms.length) return;

    const term = terms[currentIndex];
    const userRaw = inputEl.value.trim();
    if (!userRaw) return;

    // 공백 제거 후 비교
    const userClean = stripSpaces(userRaw).toLowerCase();
    const answerKo = stripSpaces(term.terminology_ko).toLowerCase();
    const answerEn = stripSpaces(term.terminology_en).toLowerCase();

    const isCorrect = userClean === answerKo || userClean === answerEn;

    const rect = blockEl ? blockEl.getBoundingClientRect() : inputEl.getBoundingClientRect();

    if (isCorrect) {
      ScoreManager.addCorrect(rect.left + rect.width / 2, rect.top);
      termResults.push({ id: term.id, correct: true });
      // 블록에 정답 표시 후 사라지는 효과
      if (blockEl) {
        blockEl.textContent = stripSpaces(term.terminology_ko);
        blockEl.classList.add('correct-pop');
      }
      Sound.correct && Sound.correct();
    } else {
      ScoreManager.addWrong(rect.left + rect.width / 2, rect.top);
      termResults.push({ id: term.id, correct: false });
      showHint(`오답! 정답: ${term.terminology_ko} (${term.terminology_en})`);
      if (blockEl) blockEl.classList.add('wrong-shake');
    }

    setTimeout(() => advanceToNext(), isCorrect ? 400 : 1200);
  }

  function handleMiss() {
    if (currentIndex >= terms.length) return;

    const term = terms[currentIndex];
    ScoreManager.addWrong();
    termResults.push({ id: term.id, correct: false });

    // 블록에 정답 공개
    if (blockEl) {
      blockEl.textContent = stripSpaces(term.terminology_ko);
      blockEl.classList.add('wrong-shake');
    }
    showHint(`시간 초과! 정답: ${term.terminology_ko}`);

    setTimeout(() => advanceToNext(), 1200);
  }

  function showHint(text) {
    const hintEl = document.getElementById('typing-hint');
    if (hintEl) {
      hintEl.textContent = text;
      hintEl.classList.add('visible');
      setTimeout(() => {
        if (hintEl) {
          hintEl.textContent = '';
          hintEl.classList.remove('visible');
        }
      }, 2000);
    }
  }

  function advanceToNext() {
    currentIndex++;
    if (animFrame) cancelAnimationFrame(animFrame);

    if (currentIndex >= terms.length) {
      setTimeout(() => finishGame(), 500);
      return;
    }

    // 다음 문제
    fallPosition = 0;
    if (blockEl) blockEl.style.top = '0px';
    if (inputEl) {
      inputEl.value = '';
      inputEl.focus();
    }

    showQuestion();
    App.updateHUD(currentIndex + 1, terms.length, ScoreManager.score);
    startFall();
  }

  function finishGame() {
    gameActive = false;
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: terms.length
    });
  }

  return { create, cleanup };
})();
