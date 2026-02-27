/* ========================================
   Game: 실전문제 풀기 (Real Exam Practice)
   청소년상담사 2급 기출문제 랜덤 10문제
   ======================================== */

const ExamGame = (() => {
  let container = null;
  let questions = [];
  let currentIndex = 0;
  let answered = false;
  let termResults = [];

  function create(gameArea, gameConfig) {
    container = gameArea;
    currentIndex = 0;
    answered = false;
    termResults = [];

    // EXAM_DATA에서 랜덤 10문제 추출
    const pool = EXAM_DATA.questions;
    questions = App.shuffle([...pool]).slice(0, 10);
    ScoreManager.total = questions.length;

    renderQuestion();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    questions = [];
  }

  function renderQuestion() {
    if (currentIndex >= questions.length) {
      finishGame();
      return;
    }

    answered = false;
    const q = questions[currentIndex];

    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);

    const labels = ['\u2460', '\u2461', '\u2462', '\u2463', '\u2464']; // ①②③④⑤

    container.innerHTML = `
      <div class="quiz-question-card">
        <span class="quiz-question-type exam-source">${q.exam} \uC2DC\uD5D8</span>
        <p class="quiz-question-text">${q.question}</p>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}" onclick="ExamGame.answer(${i})">
            <span class="option-label">${labels[i]}</span>
            <span class="option-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback"></div>
    `;
  }

  function answer(optIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentIndex];
    const isCorrect = optIndex === q.answer;
    const correctIdx = q.answer;

    const labels = ['\u2460', '\u2461', '\u2462', '\u2463', '\u2464'];

    // 모든 옵션 비활성화
    const optionEls = container.querySelectorAll('.quiz-option');
    optionEls.forEach(el => el.classList.add('disabled'));

    // 정답/오답 표시
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

    // 결과 기록
    termResults.push({ id: q.id, correct: isCorrect });

    // 피드백: 정답 표시
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.innerHTML = `
      <div class="quiz-explanation">
        <h4>${isCorrect ? '\u2705 \uC815\uB2F5!' : '\u274C \uC624\uB2F5'}</h4>
        <p>\uC815\uB2F5: ${labels[correctIdx]} ${q.options[correctIdx]}</p>
      </div>
      <button class="quiz-next-btn" onclick="ExamGame.next()">
        ${currentIndex < questions.length - 1 ? '\uB2E4\uC74C \uBB38\uC81C \u2192' : '\uACB0\uACFC \uBCF4\uAE30 \uD83C\uDF89'}
      </button>
    `;

    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);
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

  return { create, cleanup, answer, next };
})();
