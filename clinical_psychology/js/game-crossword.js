/* ========================================
   Game: 십자말 퍼즐 (Crossword)
   심리학 용어 한글 십자말 퍼즐
   — Hidden single input 방식으로 한글 IME 완벽 대응
   ======================================== */

const CrosswordGame = (() => {
  let container = null;
  let config = {};
  let grid = [];
  let gridSize = 0;
  let words = [];          // { word, clue, direction, row, col, number }
  let selectedCell = null;
  let selectedDir = 'across';
  let completedWords = new Set();
  let termResults = [];
  let vvHandler = null;
  let composing = false;
  let gameEnded = false;

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    completedWords = new Set();
    termResults = [];
    composing = false;
    gameEnded = false;
    selectedCell = null;

    // 난이도별 그리드 크기와 단어 수
    const sizes = { easy: { grid: 9, words: 4 }, medium: { grid: 11, words: 6 }, hard: { grid: 13, words: 8 } };
    const s = sizes[config.difficulty] || sizes.easy;
    gridSize = s.grid;

    // 단어 준비 (짧은 한글 용어 우선, 더 넓은 풀에서 선택)
    let allCandidates = config.terms
      .map(t => ({ word: t.terminology_ko, clue: t.definition, term: t }))
      .filter(w => w.word.length >= 2 && w.word.length <= 6);

    // 후보가 부족하면 같은 카테고리에서 보충
    if (allCandidates.length < s.words * 3) {
      const extras = App.getTermsByCategory(config.category || 'all')
        .filter(t => t.terminology_ko.length >= 2 && t.terminology_ko.length <= 6
          && !allCandidates.find(c => c.term.id === t.id))
        .map(t => ({ word: t.terminology_ko, clue: t.definition, term: t }));
      allCandidates.push(...App.shuffle(extras));
    }

    // 짧은 단어 우선 (교차 배치 확률 높임)
    allCandidates.sort((a, b) => a.word.length - b.word.length);

    words = [];
    placeWords(allCandidates.slice(0, s.words * 4), s.words);

    ScoreManager.total = words.length;
    render();
    setupMobileKeyboard();
    return { cleanup };
  }

  function cleanup() {
    cleanupMobileKeyboard();
    container = null;
    words = [];
    grid = [];
  }

  /* --- 모바일 키보드 대응 --- */
  function setupMobileKeyboard() {
    const vv = window.visualViewport;
    if (!vv) return;

    const pageEl = container?.closest('.page');
    if (!pageEl) return;

    let isCompact = false;

    vvHandler = () => {
      const keyboardOpen = vv.height < window.innerHeight * 0.7;

      if (keyboardOpen) {
        if (!isCompact) isCompact = true;
        pageEl.classList.add('keyboard-game-active');
        pageEl.style.top = vv.offsetTop + 'px';
        pageEl.style.height = vv.height + 'px';
        // 선택된 셀이 보이도록 스크롤
        const activeCell = container.querySelector('.crossword-cell.selected');
        if (activeCell) {
          requestAnimationFrame(() => {
            activeCell.scrollIntoView({ block: 'center', behavior: 'instant' });
          });
        }
      } else if (isCompact) {
        isCompact = false;
        pageEl.classList.remove('keyboard-game-active');
        pageEl.style.top = '';
        pageEl.style.height = '';
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

  /* --- 단어 배치 --- */
  function placeWords(candidates, maxWords) {
    let bestWords = [];
    let bestGrid = [];

    for (let attempt = 0; attempt < 8; attempt++) {
      grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
      words = [];
      let number = 1;

      const shuffled = attempt === 0 ? candidates : App.shuffle([...candidates]);

      for (const cand of shuffled) {
        if (words.length >= maxWords) break;
        if (tryPlace(cand, number)) number++;
      }

      if (words.length > bestWords.length) {
        bestWords = words.map(w => ({ ...w }));
        bestGrid = grid.map(row => [...row]);
      }

      if (words.length >= maxWords || words.length >= Math.min(maxWords, 3)) break;
    }

    words = bestWords;
    grid = bestGrid;
  }

  function tryPlace(cand, number) {
    const word = cand.word;
    const len = word.length;

    if (words.length === 0) {
      const row = Math.floor(gridSize / 2);
      const col = Math.floor((gridSize - len) / 2);
      if (col < 0) return false;
      placeOnGrid(word, row, col, 'across');
      words.push({ ...cand, direction: 'across', row, col, number });
      return true;
    }

    for (const existingWord of words) {
      for (let ei = 0; ei < existingWord.word.length; ei++) {
        for (let wi = 0; wi < word.length; wi++) {
          if (existingWord.word[ei] === word[wi]) {
            const newDir = existingWord.direction === 'across' ? 'down' : 'across';
            let row, col;

            if (newDir === 'down') {
              row = existingWord.row - wi;
              col = existingWord.col + ei;
            } else {
              row = existingWord.row + ei;
              col = existingWord.col - wi;
            }

            if (canPlace(word, row, col, newDir)) {
              placeOnGrid(word, row, col, newDir);
              words.push({ ...cand, direction: newDir, row, col, number });
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  function canPlace(word, row, col, direction) {
    const len = word.length;
    for (let i = 0; i < len; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;

      if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return false;

      const existing = grid[r][c];
      if (existing !== null && existing !== word[i]) return false;
    }
    return true;
  }

  function placeOnGrid(word, row, col, direction) {
    for (let i = 0; i < word.length; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;
      grid[r][c] = word[i];
    }
  }

  function isIntersection(row, col) {
    const matching = words.filter(w => {
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        if (r === row && c === col) return true;
      }
      return false;
    });
    return matching.some(w => w.direction === 'across') && matching.some(w => w.direction === 'down');
  }

  /* --- 셀 글자 읽기/쓰기 헬퍼 --- */
  function getCellChar(row, col) {
    const span = container.querySelector(`.crossword-cell[data-row="${row}"][data-col="${col}"] .cell-char`);
    return span ? span.textContent : '';
  }

  function setCellChar(row, col, char) {
    const span = container.querySelector(`.crossword-cell[data-row="${row}"][data-col="${col}"] .cell-char`);
    if (span) span.textContent = char;
  }

  /* --- 히든 인풋 위치 업데이트 --- */
  function positionHiddenInput(row, col) {
    const hiddenInput = document.getElementById('cw-input');
    if (!hiddenInput) return;
    // 그리드 gap = 2px, cell = 36px → stride = 38px
    hiddenInput.style.left = (col * 38) + 'px';
    hiddenInput.style.top = (row * 38) + 'px';
  }

  /* --- 렌더링 --- */
  function render() {
    // 그리드 렌더링 (셀에 <input> 대신 <span class="cell-char"> 사용)
    let gridHTML = `<div class="crossword-grid-wrapper">`;
    gridHTML += `<div class="crossword-grid" style="grid-template-columns: repeat(${gridSize}, 36px);">`;

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const cellChar = grid[r][c];
        const wordStart = words.find(w => w.row === r && w.col === c);

        if (cellChar !== null) {
          gridHTML += `<div class="crossword-cell active" data-row="${r}" data-col="${c}">
            ${wordStart ? `<span class="cell-number">${wordStart.number}</span>` : ''}
            <span class="cell-char"></span>
          </div>`;
        } else {
          gridHTML += `<div class="crossword-cell empty"></div>`;
        }
      }
    }
    gridHTML += '</div>';

    // 히든 인풋 (그리드 wrapper 내부, absolute 위치)
    gridHTML += `<input id="cw-input" class="cw-hidden-input" type="text"
      autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" inputmode="text">`;
    gridHTML += '</div>';

    // 힌트 렌더링
    const acrossClues = words.filter(w => w.direction === 'across');
    const downClues = words.filter(w => w.direction === 'down');

    container.innerHTML = `
      <div class="crossword-container">
        ${gridHTML}
        <div class="crossword-actions" style="text-align:center;margin:12px 0;display:flex;gap:10px;justify-content:center;">
          <button class="btn-secondary btn-sm" onclick="CrosswordGame.submitAnswers()">제출하기</button>
          <button class="btn-secondary btn-sm" onclick="CrosswordGame.revealAll()">정답 보기</button>
        </div>
        <div class="crossword-clues">
          <div class="crossword-clue-section">
            <h4>→ 가로</h4>
            ${acrossClues.map(w => `
              <div class="crossword-clue" data-number="${w.number}" data-dir="across" onclick="CrosswordGame.focusWord(${w.number})">
                <strong>${w.number}.</strong> ${firstSentence(w.clue)}
              </div>
            `).join('')}
          </div>
          <div class="crossword-clue-section">
            <h4>↓ 세로</h4>
            ${downClues.map(w => `
              <div class="crossword-clue" data-number="${w.number}" data-dir="down" onclick="CrosswordGame.focusWord(${w.number})">
                <strong>${w.number}.</strong> ${firstSentence(w.clue)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // 셀 클릭 이벤트
    container.querySelectorAll('.crossword-cell.active').forEach(cell => {
      const r = parseInt(cell.dataset.row);
      const c = parseInt(cell.dataset.col);
      cell.addEventListener('click', () => selectCell(r, c));
    });

    // 히든 인풋 이벤트 바인딩
    const hiddenInput = document.getElementById('cw-input');
    if (hiddenInput) {
      hiddenInput.addEventListener('compositionstart', () => {
        composing = true;
      });

      hiddenInput.addEventListener('compositionend', (e) => {
        // composing 해제를 setTimeout 내에서 수행하여
        // compositionend 직후 발생하는 input 이벤트의 중복 처리 방지
        setTimeout(() => {
          composing = false;
          if (gameEnded || !selectedCell) return;
          const chars = e.data || hiddenInput.value || '';
          hiddenInput.value = '';
          if (!chars) return;

          // 복수 글자 조합 (예: 한글 → 2글자) 처리
          for (const char of chars) {
            if (!selectedCell) break;
            const curRow = selectedCell.row;
            const curCol = selectedCell.col;
            setCellChar(curRow, curCol, char);
            moveToNext(curRow, curCol);
            // 다음 셀이 없으면 (moveToNext가 위치를 변경하지 못했으면) 중단
            if (selectedCell.row === curRow && selectedCell.col === curCol) break;
          }
          checkWordCompletion();
        }, 0);
      });

      hiddenInput.addEventListener('input', (e) => {
        if (gameEnded || !selectedCell) return;
        // iOS Safari: compositionstart가 발생하지 않아도 e.isComposing으로 감지
        if (composing || e.isComposing) {
          // 조합 중: 현재 셀에 중간 상태 표시 (다음 셀로 이동하지 않음)
          const val = hiddenInput.value;
          if (val) {
            setCellChar(selectedCell.row, selectedCell.col, val.slice(-1));
          }
          return;
        }
        const val = hiddenInput.value;
        if (val.length > 0) {
          const char = val.slice(-1);
          setCellChar(selectedCell.row, selectedCell.col, char);
          hiddenInput.value = '';
          moveToNext(selectedCell.row, selectedCell.col);
          checkWordCompletion();
        }
      });

      hiddenInput.addEventListener('keydown', (e) => {
        if (composing || gameEnded || !selectedCell) return;
        const { row, col } = selectedCell;

        if (e.key === 'Backspace') {
          e.preventDefault();
          const currentChar = getCellChar(row, col);
          if (currentChar) {
            setCellChar(row, col, '');
          } else {
            moveToPrev(row, col);
            if (selectedCell) setCellChar(selectedCell.row, selectedCell.col, '');
          }
        } else if (e.key === 'Tab') {
          e.preventDefault();
          if (e.shiftKey) moveToPrev(row, col);
          else moveToNext(row, col);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          selectedDir = 'across';
          moveToNext(row, col);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          selectedDir = 'across';
          moveToPrev(row, col);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedDir = 'down';
          moveToNext(row, col);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedDir = 'down';
          moveToPrev(row, col);
        }
      });
    }

    App.updateHUD(completedWords.size, words.length, ScoreManager.score);
  }

  function firstSentence(str) {
    const sentenceEnd = str.search(/(?<!\d)\.(?!\d)/);
    if (sentenceEnd > 0 && sentenceEnd < str.length - 1) return str.substring(0, sentenceEnd + 1);
    return str;
  }

  /* --- 셀 선택 --- */
  function selectCell(row, col) {
    if (gameEnded) return;

    // 같은 셀 재클릭 시(교차점이면) 방향 토글
    if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
      if (isIntersection(row, col)) {
        selectedDir = selectedDir === 'across' ? 'down' : 'across';
      }
    } else {
      selectedCell = { row, col };
      // 새 셀 선택: 해당 셀이 속한 단어 방향으로 자동 설정
      const wordAtCell = findWordsAt(row, col);
      if (wordAtCell.length === 1) {
        selectedDir = wordAtCell[0].direction;
      }
    }

    highlightWord(row, col);
    positionHiddenInput(row, col);

    // 히든 인풋 포커스 (키보드 활성화)
    const hiddenInput = document.getElementById('cw-input');
    if (hiddenInput) {
      hiddenInput.value = '';
      hiddenInput.focus();
    }
  }

  function highlightWord(row, col) {
    // 모든 하이라이트 초기화
    container.querySelectorAll('.crossword-cell.active').forEach(cell => {
      cell.classList.remove('selected', 'highlighted');
    });

    // 선택된 셀 표시
    const cell = container.querySelector(`.crossword-cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) cell.classList.add('selected');

    // 현재 방향의 단어 전체 하이라이트
    const word = findWordAtDir(row, col, selectedDir);
    if (word) {
      for (let i = 0; i < word.word.length; i++) {
        const r = word.direction === 'across' ? word.row : word.row + i;
        const c = word.direction === 'across' ? word.col + i : word.col;
        const wCell = container.querySelector(`.crossword-cell[data-row="${r}"][data-col="${c}"]`);
        if (wCell && !(r === row && c === col)) wCell.classList.add('highlighted');
      }

      // 힌트 하이라이트
      container.querySelectorAll('.crossword-clue').forEach(el => el.classList.remove('active-clue'));
      const clueEl = container.querySelector(`.crossword-clue[data-number="${word.number}"]`);
      if (clueEl) clueEl.classList.add('active-clue');
    }
  }

  /* --- 셀 이동 --- */
  function moveToNext(row, col) {
    let nextR = row;
    let nextC = col;
    if (selectedDir === 'across') nextC++;
    else nextR++;

    const nextCell = container.querySelector(`.crossword-cell.active[data-row="${nextR}"][data-col="${nextC}"]`);
    if (nextCell) {
      selectedCell = { row: nextR, col: nextC };
      highlightWord(nextR, nextC);
      positionHiddenInput(nextR, nextC);
    }
  }

  function moveToPrev(row, col) {
    let prevR = row;
    let prevC = col;
    if (selectedDir === 'across') prevC--;
    else prevR--;

    const prevCell = container.querySelector(`.crossword-cell.active[data-row="${prevR}"][data-col="${prevC}"]`);
    if (prevCell) {
      selectedCell = { row: prevR, col: prevC };
      highlightWord(prevR, prevC);
      positionHiddenInput(prevR, prevC);
    }
  }

  /* --- 단어 검색 --- */
  function findWordsAt(row, col) {
    return words.filter(w => {
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        if (r === row && c === col) return true;
      }
      return false;
    });
  }

  function findWordAtDir(row, col, dir) {
    const all = findWordsAt(row, col);
    return all.find(w => w.direction === dir) || all[0] || null;
  }

  /* --- 정답 확인 --- */
  function checkWordCompletion() {
    words.forEach(w => {
      if (completedWords.has(w.number)) return;

      let completed = true;
      let correct = true;

      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        const char = getCellChar(r, c);
        if (!char) {
          completed = false;
          break;
        }
        if (char !== w.word[i]) {
          correct = false;
        }
      }

      if (completed && correct) {
        completedWords.add(w.number);
        for (let i = 0; i < w.word.length; i++) {
          const r = w.direction === 'across' ? w.row : w.row + i;
          const c = w.direction === 'across' ? w.col + i : w.col;
          const cell = container.querySelector(`.crossword-cell[data-row="${r}"][data-col="${c}"]`);
          if (cell) cell.classList.add('correct');
        }
        ScoreManager.addCorrect();
        termResults.push({ id: w.term.id, correct: true });

        const clueEl = container.querySelector(`.crossword-clue[data-number="${w.number}"]`);
        if (clueEl) clueEl.style.textDecoration = 'line-through';

        App.updateHUD(completedWords.size, words.length, ScoreManager.score);

        if (completedWords.size === words.length) {
          setTimeout(() => finish(), 600);
        }
      }
    });
  }

  function focusWord(number) {
    if (gameEnded) return;
    const word = words.find(w => w.number === number);
    if (!word) return;
    selectedDir = word.direction;
    selectedCell = { row: word.row, col: word.col };
    highlightWord(word.row, word.col);
    positionHiddenInput(word.row, word.col);
    const hiddenInput = document.getElementById('cw-input');
    if (hiddenInput) {
      hiddenInput.value = '';
      hiddenInput.focus();
    }
    Sound.click();
  }

  /* --- 제출/공개 --- */
  function submitAnswers() {
    gameEnded = true;

    words.forEach(w => {
      if (completedWords.has(w.number)) return;

      let correct = true;
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        const char = getCellChar(r, c);
        if (char !== w.word[i]) { correct = false; break; }
      }

      if (correct) {
        completedWords.add(w.number);
        ScoreManager.addCorrect();
        termResults.push({ id: w.term.id, correct: true });
      } else {
        termResults.push({ id: w.term.id, correct: false });
      }

      // 모든 셀에 정답 표시
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        const cell = container.querySelector(`.crossword-cell[data-row="${r}"][data-col="${c}"]`);
        if (cell) cell.classList.add(correct ? 'correct' : 'wrong');
        setCellChar(r, c, w.word[i]);
      }
    });

    // 히든 인풋 비활성화
    const hiddenInput = document.getElementById('cw-input');
    if (hiddenInput) hiddenInput.disabled = true;

    // 버튼 영역을 결과 보기로 교체
    const actionsEl = container.querySelector('.crossword-actions');
    if (actionsEl) {
      actionsEl.innerHTML = `<button class="btn-primary" onclick="CrosswordGame.finish()">결과 보기</button>`;
    }

    App.updateHUD(completedWords.size, words.length, ScoreManager.score);
  }

  function revealAll() {
    gameEnded = true;

    words.forEach(w => {
      if (completedWords.has(w.number)) return;
      termResults.push({ id: w.term.id, correct: false });

      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        const cell = container.querySelector(`.crossword-cell[data-row="${r}"][data-col="${c}"]`);
        if (cell) cell.classList.add('revealed');
        setCellChar(r, c, w.word[i]);
      }
    });

    // 히든 인풋 비활성화
    const hiddenInput = document.getElementById('cw-input');
    if (hiddenInput) hiddenInput.disabled = true;

    // 버튼 영역을 결과 보기로 교체
    const actionsEl = container.querySelector('.crossword-actions');
    if (actionsEl) {
      actionsEl.innerHTML = `<button class="btn-primary" onclick="CrosswordGame.finish()">결과 보기</button>`;
    }

    App.updateHUD(completedWords.size, words.length, ScoreManager.score);
  }

  function finish() {
    App.completeGame({
      termResults,
      correct: ScoreManager.correct,
      total: words.length
    });
  }

  return { create, cleanup, selectCell, focusWord, submitAnswers, revealAll, finish };
})();
