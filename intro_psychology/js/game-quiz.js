/* ========================================
   Game: 4지선다 퀴즈 (Multiple Choice Quiz)
   정의→용어, 용어→정의, 연구자→개념 등
   ======================================== */

const QuizGame = (() => {
  let container = null;
  let config = {};
  let questions = [];
  let currentIndex = 0;
  let answered = false;
  let termResults = [];

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    currentIndex = 0;
    answered = false;
    termResults = [];

    questions = generateQuestions(config.terms);
    ScoreManager.total = questions.length;

    renderQuestion();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    questions = [];
  }

  function generateQuestions(terms) {
    return terms.map(term => {
      const type = pickQuestionType(term);
      return buildQuestion(term, type);
    });
  }

  function pickQuestionType(term) {
    const types = ['def_to_term', 'term_to_def'];
    if (term.key_researchers && term.key_researchers.length > 0) {
      types.push('researcher');
    }
    if (term.quiz_hints && term.quiz_hints.differential) {
      types.push('differential');
    }
    return types[Math.floor(Math.random() * types.length)];
  }

  function buildQuestion(term, type) {
    const distractors = getDistractors(term, 3);

    switch (type) {
      case 'def_to_term': {
        const options = App.shuffle([
          { text: term.terminology_ko, correct: true },
          ...distractors.map(d => ({ text: d.terminology_ko, correct: false }))
        ]);
        return {
          term,
          type: '정의 → 용어',
          question: term.definition,
          options: options.map((o, i) => ({ label: String.fromCharCode(65 + i), ...o })),
          explanation: term.quiz_hints?.key_point || term.significance
        };
      }
      case 'term_to_def': {
        // 정의 첫 문장만 사용 (마침표 기준)
        const defFirst = s => {
          const dot = s.indexOf('.');
          if (dot > 0 && dot < s.length - 1) return s.substring(0, dot + 1);
          return s;
        };
        const options = App.shuffle([
          { text: defFirst(term.definition), correct: true },
          ...distractors.map(d => ({ text: defFirst(d.definition), correct: false }))
        ]);
        return {
          term,
          type: '용어 → 정의',
          question: `"${term.terminology}" 의 정의로 가장 적절한 것은?`,
          options: options.map((o, i) => ({ label: String.fromCharCode(65 + i), ...o })),
          explanation: term.quiz_hints?.differential || term.significance
        };
      }
      case 'researcher': {
        const r = term.key_researchers[0];
        const options = App.shuffle([
          { text: term.terminology_ko, correct: true },
          ...distractors.map(d => ({ text: d.terminology_ko, correct: false }))
        ]);
        return {
          term,
          type: '연구자 → 개념',
          question: `${r.name_ko} (${r.name_en})의 주요 공헌과 관련된 개념은?`,
          options: options.map((o, i) => ({ label: String.fromCharCode(65 + i), ...o })),
          explanation: r.contribution
        };
      }
      case 'differential': {
        // 정답 용어를 ___으로 가려서 빈칸 채우기 형식
        const diffText = term.quiz_hints.differential;
        const blanked = diffText
          .replace(new RegExp(term.terminology_ko, 'g'), '___')
          .replace(new RegExp(term.terminology_en, 'gi'), '___');
        const options = App.shuffle([
          { text: term.terminology_ko, correct: true },
          ...distractors.map(d => ({ text: d.terminology_ko, correct: false }))
        ]);
        return {
          term,
          type: '구분 문제',
          question: `빈칸 ___에 들어갈 개념은?\n\n"${blanked}"`,
          options: options.map((o, i) => ({ label: String.fromCharCode(65 + i), ...o })),
          explanation: term.quiz_hints.differential
        };
      }
      default:
        return buildQuestion(term, 'def_to_term');
    }
  }

  function getDistractors(term, count) {
    // related_concepts에서 먼저 시도
    let candidates = [];
    if (term.related_concepts) {
      term.related_concepts.forEach(rc => {
        const found = App.findTermById(rc.id);
        if (found && found.id !== term.id) candidates.push(found);
      });
    }

    // 같은 카테고리에서 보충
    if (candidates.length < count) {
      const sameCat = App.getTermsByCategory(term.category)
        .filter(t => t.id !== term.id && !candidates.find(c => c.id === t.id));
      candidates.push(...App.shuffle(sameCat));
    }

    // 전체에서 보충
    if (candidates.length < count) {
      const others = App.allTerms
        .filter(t => t.id !== term.id && !candidates.find(c => c.id === t.id));
      candidates.push(...App.shuffle(others));
    }

    return candidates.slice(0, count);
  }

  function renderQuestion() {
    if (currentIndex >= questions.length) {
      finishGame();
      return;
    }

    answered = false;
    const q = questions[currentIndex];

    App.updateHUD(currentIndex + 1, questions.length, ScoreManager.score);

    container.innerHTML = `
      <div class="quiz-question-card">
        <span class="quiz-question-type">${q.type}</span>
        <p class="quiz-question-text">${q.question}</p>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}" onclick="QuizGame.answer(${i})">
            <span class="option-label">${opt.label}</span>
            <span class="option-text">${opt.text}</span>
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
    const selected = q.options[optIndex];
    const isCorrect = selected.correct;
    const correctIdx = q.options.findIndex(o => o.correct);

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

    // 용어 결과 기록
    termResults.push({ id: q.term.id, correct: isCorrect });

    // 해설 표시
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.innerHTML = `
      <div class="quiz-explanation">
        <h4>💡 해설</h4>
        <p>${q.explanation}</p>
      </div>
      <button class="quiz-next-btn" onclick="QuizGame.next()">
        ${currentIndex < questions.length - 1 ? '다음 문제 →' : '결과 보기 🎉'}
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
