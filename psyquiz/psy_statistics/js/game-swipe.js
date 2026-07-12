/* ========================================
   Game: 스와이프 분류 (Swipe Sort)
   Tinder 스타일 좌/우 카테고리 분류
   ======================================== */

const SwipeGame = (() => {
  let container = null;
  let config = {};
  let items = [];
  let currentIndex = 0;
  let catA = null;
  let catB = null;
  let isDragging = false;
  let startX = 0;
  let currentOffsetX = 0;
  let termResults = [];
  let cardEl = null;

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    currentIndex = 0;
    termResults = [];

    // 2개 카테고리 선택
    if (config.category !== 'all') {
      // 특정 카테고리와 가장 관련 있는 다른 카테고리
      catA = config.category;
      const catKeys = Object.keys(App.CATEGORIES).filter(k => k !== catA);
      catB = catKeys[Math.floor(Math.random() * catKeys.length)];
    } else {
      const catKeys = App.shuffle(Object.keys(App.termsData).filter(k => App.termsData[k].length >= 5));
      catA = catKeys[0];
      catB = catKeys[1];
    }

    // 양쪽 카테고리에서 용어 추출
    const countEach = Math.min(Math.floor(config.count / 2), 10);
    const termsA = App.shuffle(App.getTermsByCategory(catA)).slice(0, countEach);
    const termsB = App.shuffle(App.getTermsByCategory(catB)).slice(0, countEach);

    items = App.shuffle([
      ...termsA.map(t => ({ term: t, correctDir: 'left' })),
      ...termsB.map(t => ({ term: t, correctDir: 'right' }))
    ]);

    ScoreManager.total = items.length;
    render();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    items = [];
    removeListeners();
  }

  function render() {
    const catAInfo = App.CATEGORIES[catA] || { short: catA };
    const catBInfo = App.CATEGORIES[catB] || { short: catB };

    container.innerHTML = `
      <div class="swipe-container">
        <div class="swipe-labels">
          <span class="swipe-label left" id="swipe-label-left">← ${catAInfo.short}</span>
          <span class="swipe-label right" id="swipe-label-right">${catBInfo.short} →</span>
        </div>
        <div class="swipe-card-stack" id="swipe-stack">
          ${renderCards()}
        </div>
        <div class="swipe-buttons">
          <button class="swipe-btn left" onclick="SwipeGame.swipe('left')" aria-label="${catAInfo.short}">👈</button>
          <button class="swipe-btn right" onclick="SwipeGame.swipe('right')" aria-label="${catBInfo.short}">👉</button>
        </div>
      </div>
    `;

    App.updateHUD(currentIndex + 1, items.length, ScoreManager.score);
    setupDragListeners();
  }

  function renderCards() {
    let html = '';
    // 뒤에 있는 카드들 (최대 2장)
    for (let i = Math.min(currentIndex + 2, items.length - 1); i > currentIndex; i--) {
      const item = items[i];
      const offset = (i - currentIndex);
      html += `<div class="swipe-card" style="transform: scale(${1 - offset * 0.05}) translateY(${offset * 8}px); opacity: ${1 - offset * 0.2}; z-index: ${10 - offset}; pointer-events: none;">
        <div class="swipe-card-term">${item.term.terminology}</div>
        <div class="swipe-card-desc">${firstSentence(item.term.definition)}</div>
      </div>`;
    }

    // 현재 카드
    if (currentIndex < items.length) {
      const item = items[currentIndex];
      html += `<div class="swipe-card" id="swipe-current" style="z-index: 20;">
        <div class="swipe-card-term">${item.term.terminology}</div>
        <div class="swipe-card-desc">${firstSentence(item.term.definition)}</div>
      </div>`;
    }

    return html;
  }

  function firstSentence(str) {
    const dot = str.indexOf('.');
    if (dot > 0 && dot < str.length - 1) return str.substring(0, dot + 1);
    return str;
  }

  function setupDragListeners() {
    cardEl = document.getElementById('swipe-current');
    if (!cardEl) return;

    cardEl.addEventListener('pointerdown', onPointerDown);
    cardEl.addEventListener('pointermove', onPointerMove);
    cardEl.addEventListener('pointerup', onPointerUp);
    cardEl.addEventListener('pointercancel', onPointerUp);
  }

  function removeListeners() {
    if (cardEl) {
      cardEl.removeEventListener('pointerdown', onPointerDown);
      cardEl.removeEventListener('pointermove', onPointerMove);
      cardEl.removeEventListener('pointerup', onPointerUp);
      cardEl.removeEventListener('pointercancel', onPointerUp);
    }
  }

  function onPointerDown(e) {
    isDragging = true;
    startX = e.clientX;
    currentOffsetX = 0;
    cardEl.setPointerCapture(e.pointerId);
    cardEl.style.transition = 'none';
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    currentOffsetX = e.clientX - startX;
    const rotation = currentOffsetX * 0.08;
    cardEl.style.transform = `translateX(${currentOffsetX}px) rotate(${rotation}deg)`;

    // 라벨 불투명도
    const leftLabel = document.getElementById('swipe-label-left');
    const rightLabel = document.getElementById('swipe-label-right');
    if (leftLabel) leftLabel.style.opacity = currentOffsetX < -30 ? 1 : 0.5;
    if (rightLabel) rightLabel.style.opacity = currentOffsetX > 30 ? 1 : 0.5;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;

    const threshold = 80;
    if (currentOffsetX > threshold) {
      animateSwipe('right');
    } else if (currentOffsetX < -threshold) {
      animateSwipe('left');
    } else {
      // 되돌아가기
      cardEl.style.transition = 'transform 0.3s ease';
      cardEl.style.transform = 'translateX(0) rotate(0deg)';
    }

    // 라벨 복원
    const leftLabel = document.getElementById('swipe-label-left');
    const rightLabel = document.getElementById('swipe-label-right');
    if (leftLabel) leftLabel.style.opacity = 0.5;
    if (rightLabel) rightLabel.style.opacity = 0.5;
  }

  function swipe(direction) {
    animateSwipe(direction);
  }

  function animateSwipe(direction) {
    if (currentIndex >= items.length) return;

    const card = document.getElementById('swipe-current');
    if (!card) return;

    const xTarget = direction === 'left' ? -400 : 400;
    const rotation = direction === 'left' ? -30 : 30;
    card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    card.style.transform = `translateX(${xTarget}px) rotate(${rotation}deg)`;
    card.style.opacity = '0';

    // 판정
    const item = items[currentIndex];
    const isCorrect = item.correctDir === direction;
    const rect = card.getBoundingClientRect();

    if (isCorrect) {
      ScoreManager.addCorrect(rect.left + rect.width / 2, rect.top + rect.height / 2);
      termResults.push({ id: item.term.id, correct: true });
    } else {
      ScoreManager.addWrong(rect.left + rect.width / 2, rect.top + rect.height / 2);
      termResults.push({ id: item.term.id, correct: false });
    }

    currentIndex++;

    setTimeout(() => {
      if (currentIndex >= items.length) {
        finishGame();
      } else {
        const stack = document.getElementById('swipe-stack');
        if (stack) {
          stack.innerHTML = renderCards();
          App.updateHUD(currentIndex + 1, items.length, ScoreManager.score);
          setupDragListeners();
        }
      }
    }, 400);
  }

  function finishGame() {
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: items.length
    });
  }

  return { create, cleanup, swipe };
})();
