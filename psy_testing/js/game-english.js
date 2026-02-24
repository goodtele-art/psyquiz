/* ========================================
   Game: 영어공부하기 (English Study)
   한글→영어 타이핑, 영어→한글 4지선다
   ======================================== */

const EnglishGame = (() => {
  let container = null;
  let config = {};
  let questions = [];
  let currentIndex = 0;
  let answered = false;
  let termResults = [];
  let nextKeyHandler = null;

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    currentIndex = 0;
    answered = false;
    termResults = [];

    // 영어 2단어 이하 용어만 필터
    const filtered = config.terms.filter(t =>
      t.terminology_en && t.terminology_en.trim().split(/\s+/).length <= 2
    );

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted)">
        <p style="font-size:3rem;margin-bottom:16px">😅</p>
        <p>2단어 이하 영어 용어가 없습니다.<br>다른 카테고리를 선택해 보세요.</p>
      </div>`;
      return { cleanup };
    }

    questions = generateQuestions(filtered);
    ScoreManager.total = questions.length;
    renderQuestion();
    return { cleanup };
  }

  function cleanup() {
    removeNextKeyHandler();
    container = null;
    questions = [];
  }

  function bindNextKeyHandler() {
    removeNextKeyHandler();
    nextKeyHandler = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && answered) {
        e.preventDefault();
        EnglishGame.next();
      }
    };
    document.addEventListener('keydown', nextKeyHandler);
  }

  function removeNextKeyHandler() {
    if (nextKeyHandler) {
      document.removeEventListener('keydown', nextKeyHandler);
      nextKeyHandler = null;
    }
  }

  function generateQuestions(terms) {
    const direction = config.direction || 'ko2en';
    return terms.map(term => {
      let mode;
      if (direction === 'random') {
        mode = Math.random() < 0.5 ? 'ko2en' : 'en2ko';
      } else {
        mode = direction;
      }
      return { term, mode };
    });
  }

  // --- 오답 선택지 생성 (en2ko 모드용) ---
  function getDistractors(term, count) {
    let candidates = [];

    // 같은 카테고리에서 우선
    const sameCat = App.getTermsByCategory(term.category)
      .filter(t => t.id !== term.id && t.terminology_en.trim().split(/\s+/).length <= 2);
    candidates.push(...App.shuffle(sameCat));

    // 전체에서 보충
    if (candidates.length < count) {
      const others = App.allTerms
        .filter(t => t.id !== term.id &&
          t.terminology_en && t.terminology_en.trim().split(/\s+/).length <= 2 &&
          !candidates.find(c => c.id === t.id));
      candidates.push(...App.shuffle(others));
    }

    return candidates.slice(0, count);
  }

  // --- 렌더링 ---
  function renderQuestion() {
    if (currentIndex >= questions.length) {
      finishGame();
      return;
    }

    answered = false;
    removeNextKeyHandler();
    const q = questions[currentIndex];
    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);

    if (q.mode === 'ko2en') {
      renderTyping(q);
    } else {
      renderMultipleChoice(q);
    }
  }

  // --- 한글→영어 타이핑 ---
  function renderTyping(q) {
    const term = q.term;
    const wordCount = term.terminology_en.trim().split(/\s+/).length;
    const hint = wordCount === 1 ? '1단어' : '2단어';

    container.innerHTML = `
      <div class="english-card">
        <span class="english-direction-badge">한글 → 영어</span>
        <p class="english-prompt">${term.terminology_ko}</p>
        <p class="english-hint">영어 용어를 입력하세요 (${hint})</p>
        <div class="english-input-area">
          <input type="text" class="english-input" id="english-typing-input"
                 placeholder="English term..." autocomplete="off" spellcheck="false">
          <br>
          <button class="english-submit-btn" id="english-submit-btn"
                  onclick="EnglishGame.submitTyping()">확인</button>
        </div>
        <div id="english-feedback"></div>
      </div>
    `;

    const input = document.getElementById('english-typing-input');
    input.focus();
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !answered) {
        EnglishGame.submitTyping();
      }
    });
  }

  function submitTyping() {
    if (answered) return;
    answered = true;

    const q = questions[currentIndex];
    const term = q.term;
    const input = document.getElementById('english-typing-input');
    const userAnswer = input.value.trim();
    const correctAnswer = term.terminology_en.trim();

    const isCorrect = checkTypingAnswer(userAnswer, correctAnswer);

    // 시각 피드백
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    input.disabled = true;
    document.getElementById('english-submit-btn').disabled = true;

    // 점수
    const rect = input.getBoundingClientRect();
    if (isCorrect) {
      ScoreManager.addCorrect(rect.left + rect.width / 2, rect.top);
    } else {
      ScoreManager.addWrong(rect.left + rect.width / 2, rect.top);
    }

    termResults.push({ id: term.id, correct: isCorrect });

    // 피드백
    const feedbackEl = document.getElementById('english-feedback');
    feedbackEl.innerHTML = `
      ${!isCorrect ? `<p class="english-answer-reveal">정답: ${correctAnswer}</p>` : ''}
      <button class="english-next-btn" onclick="EnglishGame.next()">
        ${currentIndex < questions.length - 1 ? '다음 문제 →' : '결과 보기 🎉'}
      </button>
    `;

    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);
    bindNextKeyHandler();
  }

  function checkTypingAnswer(user, correct) {
    if (!user) return false;
    const normalize = s => s.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
    return normalize(user) === normalize(correct);
  }

  // --- 영어→한글 4지선다 ---
  function renderMultipleChoice(q) {
    const term = q.term;
    const distractors = getDistractors(term, 3);
    const options = App.shuffle([
      { text: term.terminology_ko, correct: true },
      ...distractors.map(d => ({ text: d.terminology_ko, correct: false }))
    ]).map((o, i) => ({ label: String.fromCharCode(65 + i), ...o }));

    // 현재 문제에 옵션 저장 (answer에서 사용)
    q.options = options;

    container.innerHTML = `
      <div class="english-card">
        <span class="english-direction-badge">영어 → 한글</span>
        <p class="english-prompt">${term.terminology_en}</p>
        <p class="english-hint">올바른 한글 용어를 선택하세요</p>
      </div>
      <div class="quiz-options">
        ${options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}" onclick="EnglishGame.answerMC(${i})">
            <span class="option-label">${opt.label}</span>
            <span class="option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
      <div id="english-feedback"></div>
    `;
  }

  function answerMC(optIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentIndex];
    const term = q.term;
    const selected = q.options[optIndex];
    const isCorrect = selected.correct;
    const correctIdx = q.options.findIndex(o => o.correct);

    // 옵션 비활성화 + 정답/오답 표시
    const optionEls = container.querySelectorAll('.quiz-option');
    optionEls.forEach(el => el.classList.add('disabled'));
    optionEls[optIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
      optionEls[correctIdx].classList.add('correct');
    }

    // 점수
    const rect = optionEls[optIndex].getBoundingClientRect();
    if (isCorrect) {
      ScoreManager.addCorrect(rect.left + rect.width / 2, rect.top);
    } else {
      ScoreManager.addWrong(rect.left + rect.width / 2, rect.top);
    }

    termResults.push({ id: term.id, correct: isCorrect });

    // 피드백
    const feedbackEl = document.getElementById('english-feedback');
    feedbackEl.innerHTML = `
      <div style="text-align:center;margin-top:16px">
        <button class="english-next-btn" onclick="EnglishGame.next()">
          ${currentIndex < questions.length - 1 ? '다음 문제 →' : '결과 보기 🎉'}
        </button>
      </div>
    `;

    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);
    bindNextKeyHandler();
  }

  function next() {
    currentIndex++;
    renderQuestion();
    Sound.click();
  }

  function finishGame() {
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: questions.length
    });
  }

  return { create, cleanup, submitTyping, answerMC, next };
})();
