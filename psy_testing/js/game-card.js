/* ========================================
   Game: 카드 매칭 (Card Match)
   한-영, 용어-정의, 연구자-개념 짝 맞추기
   ======================================== */

const CardGame = (() => {
  let container = null;
  let config = {};
  let cards = [];
  let flipped = [];
  let matched = new Set();
  let attempts = 0;
  let totalPairs = 0;
  let isChecking = false;
  let termResults = [];

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    flipped = [];
    matched = new Set();
    attempts = 0;
    isChecking = false;
    termResults = [];

    const pairCount = getPairCount(config.difficulty);
    const terms = config.terms.slice(0, pairCount);
    totalPairs = terms.length;

    ScoreManager.total = totalPairs;

    cards = generateCards(terms);
    render();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    cards = [];
  }

  function getPairCount(difficulty) {
    switch (difficulty) {
      case 'easy': return 6;   // 3x2 → 6 pairs = 12 cards → actually 3x4
      case 'medium': return 8; // 4x4
      case 'hard': return 10;  // 4x5
      default: return 6;
    }
  }

  function getGridClass(pairCount) {
    if (pairCount <= 6) return 'grid-3x2';
    if (pairCount <= 8) return 'grid-4x3';
    return 'grid-4x4';
  }

  function generateCards(terms) {
    const pairs = [];
    terms.forEach((term, i) => {
      // 한국어-영어 매칭
      pairs.push(
        { id: i, pairId: i, display: term.terminology_ko, type: 'korean', term },
        { id: i + 100, pairId: i, display: term.terminology_en, type: 'english', term }
      );
    });
    return App.shuffle(pairs);
  }

  function render() {
    const pairCount = totalPairs;
    // 그리드 열 수 계산
    const totalCards = pairCount * 2;
    let cols = 4;
    if (totalCards <= 12) cols = 3;
    if (totalCards <= 8) cols = 4;

    container.innerHTML = `
      <div class="card-match-grid" style="grid-template-columns: repeat(${cols}, 1fr);">
        ${cards.map((card, i) => `
          <div class="match-card ${matched.has(card.pairId) ? 'matched flipped' : ''}"
               data-index="${i}" onclick="CardGame.flipCard(${i})">
            <div class="match-card-face match-card-front">❓</div>
            <div class="match-card-face match-card-back">${card.display}</div>
          </div>
        `).join('')}
      </div>
    `;

    App.updateHUD(matched.size, totalPairs, ScoreManager.score);
  }

  function flipCard(index) {
    if (isChecking) return;
    if (flipped.includes(index)) return;
    if (matched.has(cards[index].pairId)) return;

    Sound.flip();
    flipped.push(index);

    const cardEl = container.querySelectorAll('.match-card')[index];
    cardEl.classList.add('flipped');

    if (flipped.length === 2) {
      isChecking = true;
      attempts++;
      checkMatch();
    }
  }

  function checkMatch() {
    const [i1, i2] = flipped;
    const c1 = cards[i1];
    const c2 = cards[i2];
    const isMatch = c1.pairId === c2.pairId && c1.id !== c2.id;

    setTimeout(() => {
      const cardEls = container.querySelectorAll('.match-card');

      if (isMatch) {
        matched.add(c1.pairId);
        cardEls[i1].classList.add('matched');
        cardEls[i2].classList.add('matched');

        const rect = cardEls[i1].getBoundingClientRect();
        ScoreManager.addCorrect(rect.left + rect.width / 2, rect.top);
        termResults.push({ id: c1.term.id, correct: true });

        App.updateHUD(matched.size, totalPairs, ScoreManager.score);

        if (matched.size === totalPairs) {
          setTimeout(() => finishGame(), 500);
        }
      } else {
        cardEls[i1].classList.remove('flipped');
        cardEls[i2].classList.remove('flipped');
        // 오답 시에는 ScoreManager.addWrong 하지 않음 (시도 횟수만 기록)
      }

      flipped = [];
      isChecking = false;
    }, isMatch ? 300 : 800);
  }

  function finishGame() {
    // 효율성 기반 점수 보정: 최소 시도(totalPairs)에 가까울수록 높은 점수
    ScoreManager.correct = matched.size;
    App.completeGame({
      termResults,
      correct: matched.size,
      total: totalPairs
    });
  }

  return { create, cleanup, flipCard };
})();
