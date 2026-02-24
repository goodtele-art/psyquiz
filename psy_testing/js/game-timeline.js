/* ========================================
   Game: 순서 배열 (Timeline)
   심리학 역사/개념 순서 배열 — 3라운드 연속
   ======================================== */

const TimelineGame = (() => {
  let container = null;
  let config = {};
  let items = [];            // 정답 순서
  let shuffledItems = [];    // 사용자가 재정렬할 셔플된 배열
  let submitted = false;
  let termResults = [];
  let dragIdx = null;
  let round = 0;             // 현재 라운드 (0-based)
  let maxRounds = 3;
  let usedSets = [];         // 이미 사용한 세트 인덱스
  let totalCorrect = 0;
  let totalItems = 0;

  // 사전 정의된 순서 세트
  const TIMELINE_SETS = [
    {
      title: '심리검사 역사의 주요 사건',
      category: 'FOUND',
      items: ['Galton 개인차 연구 (1884)', 'Binet-Simon 지능검사 (1905)', 'Army Alpha/Beta (1917)', 'Wechsler-Bellevue (1939)', 'MMPI 출판 (1943)', 'APA 검사 표준 초판 (1966)']
    },
    {
      title: '검사 개발 절차',
      category: 'ITEM',
      items: ['구인 정의', '문항 작성', '예비검사 실시', '문항분석 (난이도/변별도)', '본검사 실시', '신뢰도/타당도 검증', '규준 설정']
    },
    {
      title: '지능검사의 발전 순서',
      category: 'INTELL',
      items: ['Binet-Simon (1905)', 'Stanford-Binet (1916)', 'Army Alpha/Beta (1917)', 'Wechsler-Bellevue (1939)', 'WISC (1949)', 'K-ABC (1983)', 'WAIS-IV (2008)']
    },
    {
      title: '원점수에서 해석까지의 과정',
      category: 'NORMS',
      items: ['원점수 산출', 'Z점수 변환', 'T점수 또는 표준점수 변환', '백분위 산출', '규준표 참조', '프로파일 해석']
    },
    {
      title: '타당도 개념의 발전',
      category: 'VALI',
      items: ['내용 타당도 (1950s)', '준거 타당도 (1950s)', '구인 타당도 (Cronbach & Meehl, 1955)', '통합적 타당도 (Messick, 1989)', '결과 타당도 포함 (1990s)', '근거 기반 타당도 (Standards 2014)']
    },
    {
      title: 'MMPI의 발전 과정',
      category: 'PERSON',
      items: ['MMPI 원판 (Hathaway & McKinley, 1943)', 'MMPI-2 (Butcher et al., 1989)', 'MMPI-2-RF (Ben-Porath & Tellegen, 2008)', 'MMPI-3 (Ben-Porath & Tellegen, 2020)']
    },
    {
      title: 'Rorschach 반응 과정',
      category: 'PROJ',
      items: ['카드 제시', '자유 반응 단계', '질문 단계 (반응 위치/결정인)', '코딩 (Exner 체계)', '구조적 요약 산출', '해석']
    },
    {
      title: '신뢰도 추정 방법 (오차원별)',
      category: 'RELI',
      items: ['검사-재검사 (시간 오차)', '동형검사 (내용 표집 오차)', '반분 신뢰도 (내적 일관성)', 'Cronbach α (일반화)', '평정자간 신뢰도 (평가자 오차)']
    },
    {
      title: '문항반응이론(IRT) 모형의 발전',
      category: 'ITEM',
      items: ['Thurstone 태도 측정 (1920s)', 'Guttman 척도 (1940s)', 'Rasch 1모수 모형 (1960)', 'Birnbaum 2모수 모형', '3모수 모형 (추측 포함)', '다분 문항 IRT']
    },
    {
      title: 'Wechsler 지능검사 실시 순서 (WAIS-IV)',
      category: 'INTELL',
      items: ['토막짜기', '공통성', '숫자', '행렬추리', '어휘', '산수', '기호찾기', '퍼즐', '상식', '동형찾기']
    },
    {
      title: '신경심리 평가 과정',
      category: 'NEURO',
      items: ['의뢰 사유 확인', '배경 정보 수집', '검사 배터리 선정', '검사 실시', '결과 통합 해석', '보고서 작성 및 피드백']
    },
    {
      title: '임상 면접의 단계',
      category: 'CLINIC',
      items: ['라포 형성', '주호소 확인', '현병력 탐색', '과거력/가족력 수집', '정신상태검사(MSE)', '진단적 인상 형성', '치료 계획 수립']
    }
  ];

  function create(gameArea, gameConfig) {
    container = gameArea;
    config = gameConfig;
    round = 0;
    usedSets = [];
    totalCorrect = 0;
    totalItems = 0;
    termResults = [];

    startRound();
    return { cleanup };
  }

  function cleanup() {
    container = null;
    items = [];
    shuffledItems = [];
  }

  function startRound() {
    submitted = false;
    dragIdx = null;

    // 적절한 타임라인 세트 선택 (중복 방지)
    let candidates = TIMELINE_SETS.map((s, i) => ({ ...s, idx: i }));
    if (config.category !== 'all') {
      const filtered = candidates.filter(s => s.category === config.category);
      if (filtered.length > 0) candidates = filtered;
    }
    candidates = candidates.filter(s => !usedSets.includes(s.idx));
    if (candidates.length === 0) {
      // 모든 세트 사용 → 초기화
      usedSets = [];
      candidates = TIMELINE_SETS.map((s, i) => ({ ...s, idx: i }));
      if (config.category !== 'all') {
        const filtered = candidates.filter(s => s.category === config.category);
        if (filtered.length > 0) candidates = filtered;
      }
    }

    const set = candidates[Math.floor(Math.random() * candidates.length)];
    usedSets.push(set.idx);
    items = [...set.items];
    shuffledItems = App.shuffle([...items]);

    totalItems += items.length;
    ScoreManager.total = totalItems;

    render();
    App.updateHUD(round + 1, maxRounds, ScoreManager.score);
  }

  function render() {
    const listItems = (submitted ? items : shuffledItems).map((item, i) => {
      let statusClass = '';
      if (submitted) {
        statusClass = shuffledItems[i] === items[i] ? 'correct' : 'wrong';
      }
      return `
        <div class="timeline-item ${statusClass}" data-index="${i}" draggable="${!submitted}"
             ondragstart="TimelineGame.dragStart(event, ${i})"
             ondragover="event.preventDefault()"
             ondrop="TimelineGame.drop(event, ${i})"
             data-index-display="${i + 1}">
          <span class="timeline-item-text">${submitted ? items[i] : shuffledItems[i]}</span>
          ${submitted && shuffledItems[i] !== items[i] ? `<span style="font-size:0.75rem;color:var(--wrong);margin-left:8px;">(내 답: ${shuffledItems[i]})</span>` : ''}
        </div>
      `;
    }).join('');

    const roundLabel = `라운드 ${round + 1}/${maxRounds}`;

    container.innerHTML = `
      <div class="timeline-container">
        <div class="timeline-round-badge">${roundLabel}</div>
        <div class="timeline-title">${getCurrentTitle()}</div>
        <div class="timeline-items" id="timeline-items">
          ${listItems}
        </div>
        <div class="timeline-submit">
          ${!submitted
            ? `<button class="btn-primary" onclick="TimelineGame.submit()">제출하기</button>
               <p style="font-size:0.8rem;color:var(--text-muted);margin-top:8px;">드래그 또는 클릭으로 순서를 변경하세요</p>`
            : round < maxRounds - 1
              ? `<button class="btn-primary" onclick="TimelineGame.nextRound()">다음 문제 →</button>`
              : `<button class="btn-primary" onclick="TimelineGame.finish()">결과 보기</button>`
          }
        </div>
      </div>
    `;

    // 번호 속성 설정
    container.querySelectorAll('.timeline-item').forEach((el, i) => {
      el.setAttribute('data-index', i + 1);
      el.style.setProperty('--idx', i + 1);
    });

    // 터치 지원: 클릭으로 이동
    if (!submitted) {
      setupTouchReorder();
    }
  }

  function getCurrentTitle() {
    let candidates = TIMELINE_SETS;
    if (config.category !== 'all') {
      const filtered = TIMELINE_SETS.filter(s => s.category === config.category);
      if (filtered.length > 0) candidates = filtered;
    }
    const set = candidates.find(s => JSON.stringify(s.items) === JSON.stringify(items));
    return set ? set.title : '순서를 맞춰보세요';
  }

  function setupTouchReorder() {
    let selectedIdx = null;
    container.querySelectorAll('.timeline-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index) - 1;
        if (selectedIdx === null) {
          selectedIdx = idx;
          item.style.borderColor = 'var(--game-timeline)';
          item.style.background = 'var(--game-timeline-light)';
          Sound.click();
        } else {
          [shuffledItems[selectedIdx], shuffledItems[idx]] = [shuffledItems[idx], shuffledItems[selectedIdx]];
          selectedIdx = null;
          Sound.flip();
          render();
        }
      });
    });
  }

  function dragStart(event, index) {
    dragIdx = index;
    event.dataTransfer.effectAllowed = 'move';
    event.target.classList.add('dragging');
  }

  function drop(event, targetIndex) {
    event.preventDefault();
    if (dragIdx === null || dragIdx === targetIndex) return;

    const [moved] = shuffledItems.splice(dragIdx, 1);
    shuffledItems.splice(targetIndex, 0, moved);
    dragIdx = null;
    Sound.flip();
    render();
  }

  function submit() {
    submitted = true;

    for (let i = 0; i < items.length; i++) {
      if (shuffledItems[i] === items[i]) {
        totalCorrect++;
        ScoreManager.addCorrect();
      } else {
        ScoreManager.addWrong();
      }
      termResults.push({
        id: `timeline_r${round}_${i}`,
        correct: shuffledItems[i] === items[i]
      });
    }

    render();
    App.updateHUD(round + 1, maxRounds, ScoreManager.score);
  }

  function nextRound() {
    round++;
    Sound.click();
    startRound();
  }

  function finish() {
    App.completeGame({
      termResults,
      correct: totalCorrect,
      total: totalItems
    });
  }

  return { create, cleanup, dragStart, drop, submit, nextRound, finish };
})();
