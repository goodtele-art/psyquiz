/* ========================================
   Game: 선 잇기 (Connect Lines)
   별자리 테마, 왼쪽-오른쪽 항목 선 연결
   ======================================== */

const ConnectGame = (() => {
  let container = null;
  let config = {};
  let pairs = [];
  let leftItems = [];
  let rightItems = [];
  let selectedLeft = null;
  let connections = [];
  let matchedCount = 0;
  let termResults = [];

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    selectedLeft = null;
    connections = [];
    matchedCount = 0;
    termResults = [];

    const count = Math.min(config.difficulty === 'easy' ? 4 : config.difficulty === 'medium' ? 5 : 6, config.terms.length);
    const terms = config.terms.slice(0, count);

    ScoreManager.total = terms.length;

    // 매칭 타입 선택 (연구자↔개념 우선, 없으면 한↔영)
    const hasResearchers = terms.some(t => t.key_researchers && t.key_researchers.length > 0);
    const matchType = hasResearchers && Math.random() > 0.4 ? 'researcher' : 'ko_en';

    generatePairs(terms, matchType);
    render();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    pairs = [];
  }

  function generatePairs(terms, matchType) {
    pairs = terms.map((term, i) => {
      if (matchType === 'researcher' && term.key_researchers && term.key_researchers.length > 0) {
        return {
          id: i,
          left: term.key_researchers[0].name_ko + '\n(' + term.key_researchers[0].name_en + ')',
          right: term.terminology_ko,
          term
        };
      }
      return {
        id: i,
        left: term.terminology_ko,
        right: term.terminology_en,
        term
      };
    });

    leftItems = pairs.map(p => ({ id: p.id, display: p.left }));
    rightItems = App.shuffle(pairs.map(p => ({ id: p.id, display: p.right })));
  }

  function render() {
    // 별 생성
    let stars = '';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 2;
      const size = 1 + Math.random() * 2;
      stars += `<div class="connect-star" style="left:${x}%;top:${y}%;animation-delay:${delay}s;width:${size}px;height:${size}px"></div>`;
    }

    container.innerHTML = `
      <div class="connect-guide" id="connect-guide">
        <span>👆</span> 왼쪽 항목을 클릭한 뒤, 짝이 되는 오른쪽 항목을 클릭하세요
      </div>
      <div class="connect-arena" id="connect-arena">
        <div class="connect-stars">${stars}</div>
        <svg class="connect-svg" id="connect-svg"></svg>
        <div class="connect-columns">
          <div class="connect-column" id="connect-left">
            ${leftItems.map(item => `
              <div class="connect-item" data-side="left" data-id="${item.id}"
                   onclick="ConnectGame.selectItem('left', ${item.id})">${item.display}</div>
            `).join('')}
          </div>
          <div class="connect-column" id="connect-right">
            ${rightItems.map(item => `
              <div class="connect-item" data-side="right" data-id="${item.id}"
                   onclick="ConnectGame.selectItem('right', ${item.id})">${item.display}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    App.updateHUD(matchedCount, pairs.length, ScoreManager.score);
  }

  function selectItem(side, id) {
    if (side === 'left') {
      // 왼쪽 선택
      container.querySelectorAll('.connect-item[data-side="left"]').forEach(el => el.classList.remove('selected'));
      const el = container.querySelector(`.connect-item[data-side="left"][data-id="${id}"]`);
      if (el) el.classList.add('selected');
      selectedLeft = id;
      Sound.click();
    } else if (side === 'right' && selectedLeft !== null) {
      // 오른쪽 선택 → 매칭 시도
      checkConnection(selectedLeft, id);
    }
  }

  function checkConnection(leftId, rightId) {
    const isCorrect = leftId === rightId;

    const leftEl = container.querySelector(`.connect-item[data-side="left"][data-id="${leftId}"]`);
    const rightEl = container.querySelector(`.connect-item[data-side="right"][data-id="${rightId}"]`);

    if (!leftEl || !rightEl) return;

    // SVG 선 그리기
    drawLine(leftEl, rightEl, isCorrect);

    if (isCorrect) {
      matchedCount++;
      leftEl.classList.remove('selected');
      leftEl.classList.add('matched');
      rightEl.classList.add('matched');
      leftEl.style.pointerEvents = 'none';
      rightEl.style.pointerEvents = 'none';

      // 첫 매칭 성공 시 안내 문구 숨김
      const guide = document.getElementById('connect-guide');
      if (guide) guide.classList.add('fade-out');

      const rect = rightEl.getBoundingClientRect();
      ScoreManager.addCorrect(rect.left, rect.top);
      termResults.push({ id: pairs[leftId].term.id, correct: true });

      App.updateHUD(matchedCount, pairs.length, ScoreManager.score);

      if (matchedCount === pairs.length) {
        setTimeout(() => finishGame(), 600);
      }
    } else {
      ScoreManager.addWrong();
      termResults.push({ id: pairs[leftId].term.id, correct: false });

      // 잘못된 선은 잠시 후 제거
      setTimeout(() => {
        const svg = document.getElementById('connect-svg');
        const wrongLines = svg.querySelectorAll('.connect-line.wrong');
        wrongLines.forEach(l => l.remove());
      }, 500);
    }

    selectedLeft = null;
    container.querySelectorAll('.connect-item[data-side="left"]').forEach(el => el.classList.remove('selected'));
  }

  function drawLine(leftEl, rightEl, isCorrect) {
    const svg = document.getElementById('connect-svg');
    const arena = document.getElementById('connect-arena');
    if (!svg || !arena) return;

    const arenaRect = arena.getBoundingClientRect();
    const leftRect = leftEl.getBoundingClientRect();
    const rightRect = rightEl.getBoundingClientRect();

    const x1 = leftRect.right - arenaRect.left;
    const y1 = leftRect.top + leftRect.height / 2 - arenaRect.top;
    const x2 = rightRect.left - arenaRect.left;
    const y2 = rightRect.top + rightRect.height / 2 - arenaRect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.classList.add('connect-line');
    line.classList.add(isCorrect ? 'correct' : 'wrong');
    svg.appendChild(line);
  }

  function finishGame() {
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: pairs.length
    });
  }

  return { create, cleanup, selectItem };
})();
