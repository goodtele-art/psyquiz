/* ========================================
   Game: 계층 분류 (Hierarchy)
   용어를 올바른 카테고리/하위유형에 배치
   ======================================== */

const HierarchyGame = (() => {
  let container = null;
  let config = {};
  let branches = [];       // { label, code, items: [term...] }
  let pool = [];           // 배치해야 할 용어들 (셔플)
  let placed = {};         // { branchIndex: [term...] }
  let totalItems = 0;
  let correctCount = 0;
  let termResults = [];

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    placed = {};
    correctCount = 0;
    termResults = [];

    buildHierarchy();
    ScoreManager.total = totalItems;
    render();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    branches = [];
    pool = [];
  }

  function buildHierarchy() {
    if (config.category !== 'all') {
      // 단일 카테고리: sub_types 기반 분류
      const terms = config.terms;
      const withSubs = terms.filter(t => t.sub_types && t.sub_types.length > 0);
      const withoutSubs = terms.filter(t => !t.sub_types || t.sub_types.length === 0);

      if (withSubs.length >= 2) {
        branches = withSubs.map(t => ({
          label: t.terminology_ko,
          code: t.id,
          items: [] // 이 하위에 배치할 항목은 없으므로 빈 배열
        }));
        // related_concepts를 기반으로 분류
        pool = App.shuffle(withoutSubs.slice(0, config.count));
      } else {
        // sub_types가 부족하면 2~3개 카테고리로 분류
        buildMultiCategoryHierarchy();
        return;
      }
    } else {
      buildMultiCategoryHierarchy();
    }

    totalItems = pool.length;
    branches.forEach((_, i) => { placed[i] = []; });
  }

  function buildMultiCategoryHierarchy() {
    // 2~3개 카테고리 선택 (INTRO 제외 — 너무 포괄적이라 구분이 모호)
    const catKeys = Object.keys(App.termsData).filter(k => App.termsData[k].length >= 3 && k !== 'INTRO');
    const selected = App.shuffle(catKeys).slice(0, config.difficulty === 'hard' ? 3 : 2);

    branches = selected.map(code => ({
      label: App.CATEGORIES[code]?.short || code,
      code,
      items: App.termsData[code] || []
    }));

    const countEach = Math.min(Math.floor(config.count / selected.length), 5);
    pool = [];
    branches.forEach(b => {
      const picked = App.shuffle(b.items).slice(0, countEach);
      pool.push(...picked);
    });
    pool = App.shuffle(pool);

    totalItems = pool.length;
    branches.forEach((_, i) => { placed[i] = []; });
  }

  function render() {
    container.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--game-hierarchy);">
          🌳 올바른 카테고리에 용어를 배치하세요
        </h3>
        <div class="hierarchy-tree" id="hierarchy-tree">
          ${branches.map((branch, i) => `
            <div class="hierarchy-branch" data-branch="${i}">
              <div class="hierarchy-node fixed">${branch.label}</div>
              <div class="hierarchy-node dropzone" data-branch="${i}"
                   ondragover="event.preventDefault(); this.classList.add('over')"
                   ondragleave="this.classList.remove('over')"
                   ondrop="HierarchyGame.onDrop(event, ${i})">
                ${placed[i] && placed[i].length > 0
                  ? placed[i].map(t => `<div style="padding: 4px 8px; font-size: 0.8rem; color: var(--correct);">✓ ${t.terminology_ko}</div>`).join('')
                  : '<span style="font-size: 0.8rem; color: var(--text-muted);">여기에 놓으세요</span>'
                }
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 10px; color: var(--text-secondary);">
          배치할 용어 (${pool.length}개 남음)
        </h4>
        <div class="hierarchy-pool" id="hierarchy-pool">
          ${pool.map((term, i) => `
            <div class="hierarchy-chip" draggable="true" data-pool-index="${i}" data-term-id="${term.id}"
                 ondragstart="HierarchyGame.onDragStart(event, ${i})">
              ${term.terminology_ko}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // 터치 지원: 칩 클릭 시 드롭존 선택 모달
    container.querySelectorAll('.hierarchy-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const poolIdx = parseInt(chip.dataset.poolIndex);
        showBranchSelector(poolIdx);
      });
    });

    App.updateHUD(correctCount, totalItems, ScoreManager.score);
  }

  function showBranchSelector(poolIndex) {
    const term = pool[poolIndex];
    if (!term) return;

    // 브랜치 선택 버튼 표시
    const existing = container.querySelector('.hierarchy-selector');
    if (existing) existing.remove();

    const selector = document.createElement('div');
    selector.className = 'hierarchy-selector';
    selector.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;padding:12px;background:var(--card-bg);border-radius:var(--radius-lg);box-shadow:var(--shadow-md);';
    selector.innerHTML = `
      <span style="width:100%;font-size:0.85rem;font-weight:600;margin-bottom:4px;">"${term.terminology_ko}" → 어디에?</span>
      ${branches.map((b, i) => `
        <button class="chip" onclick="HierarchyGame.placeTerm(${poolIndex}, ${i})" style="flex:1;">${b.label}</button>
      `).join('')}
    `;

    container.appendChild(selector);
    Sound.click();
  }

  function onDragStart(event, poolIndex) {
    event.dataTransfer.setData('text/plain', poolIndex.toString());
  }

  function onDrop(event, branchIndex) {
    event.preventDefault();
    event.target.classList.remove('over');
    const poolIndex = parseInt(event.dataTransfer.getData('text/plain'));
    placeTerm(poolIndex, branchIndex);
  }

  function placeTerm(poolIndex, branchIndex) {
    const term = pool[poolIndex];
    if (!term) return;

    const branch = branches[branchIndex];
    const isCorrect = term.category === branch.code;

    if (isCorrect) {
      correctCount++;
      placed[branchIndex].push(term);
      pool.splice(poolIndex, 1);
      ScoreManager.addCorrect();
      termResults.push({ id: term.id, correct: true });
    } else {
      ScoreManager.addWrong();
      termResults.push({ id: term.id, correct: false });
    }

    // 기존 selector 제거
    const existing = container.querySelector('.hierarchy-selector');
    if (existing) existing.remove();

    render();

    if (pool.length === 0) {
      setTimeout(() => finishGame(), 600);
    }
  }

  function finishGame() {
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: totalItems
    });
  }

  return { create, cleanup, onDragStart, onDrop, placeTerm };
})();
