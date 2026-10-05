/* ========================================
   Game: 순서 배열 (Timeline)
   임상심리학 이론/과정 순서 배열 — 3라운드 연속
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
      title: '임상심리학의 역사적 발전 순서',
      category: 'HISTORY',
      items: ['Lightner Witmer 최초 심리클리닉 (1896)', '세계대전 기간 심리검사 확대', 'Boulder 모델: 과학자-실무자 (1949)', 'Vail 모델: 실무자-학자 (1973)', '처방권 운동 시작 (1990년대)', '근거기반 실무(EBP) 강조']
    },
    {
      title: 'DSM 진단체계의 발전',
      category: 'DIAGN',
      items: ['DSM-I (1952)', 'DSM-II (1968)', 'DSM-III: 조작적 진단기준 도입 (1980)', 'DSM-III-R (1987)', 'DSM-IV: 다축 체계 (1994)', 'DSM-5: 차원적 접근 (2013)']
    },
    {
      title: '임상 면접의 진행 순서',
      category: 'INTVIEW',
      items: ['라포 형성', '주호소 문제 파악', '현 병력 탐색', '과거력 및 발달력 청취', '정신상태검사(MSE)', '사례개념화 및 치료 계획']
    },
    {
      title: 'Wechsler 지능검사의 발전',
      category: 'INTELL',
      items: ['Wechsler-Bellevue 척도 (1939)', 'WAIS 초판 (1955)', 'WISC 초판 (1949)', 'WAIS-R (1981)', 'WAIS-IV: CHC 이론 반영 (2008)', 'K-WAIS-IV 한국판 표준화']
    },
    {
      title: 'MMPI의 발전 과정',
      category: 'PERSONA',
      items: ['MMPI 개발: Hathaway & McKinley (1943)', 'MMPI-2 개정 (1989)', 'MMPI-2-RF: RC 척도 중심 (2008)', 'MMPI-3 출판 (2020)']
    },
    {
      title: '행동평가의 ABC 모델',
      category: 'BEHAV',
      items: ['A: 선행사건 (Antecedent) 파악', 'B: 행동 (Behavior) 관찰·기록', 'C: 결과 (Consequence) 분석', '기능분석 완성', '개입 전략 수립']
    },
    {
      title: '신경심리평가 배터리 실시 순서',
      category: 'NEUROAS',
      items: ['임상 면접 및 행동 관찰', '주의력/집중력 검사', '기억력 검사', '언어 기능 검사', '시공간/구성 능력 검사', '관리 기능(executive function) 검사']
    },
    {
      title: 'Freud 정신분석의 발전 단계',
      category: 'PSYCHOD',
      items: ['정동 외상 모델 (1890년대)', '지형학적 모델: 의식/전의식/무의식', '구조 모델: 원초아/자아/초자아 (1923)', '자아심리학: Anna Freud, Hartmann', '대상관계이론: Klein, Winnicott', '자기심리학: Kohut (1970년대)']
    },
    {
      title: 'Beck 인지치료의 인지 수준',
      category: 'CBT',
      items: ['자동적 사고 (automatic thoughts)', '인지적 오류 (cognitive distortions)', '중간 신념: 규칙/태도/가정', '핵심 신념 / 스키마 (core beliefs)']
    },
    {
      title: '인간중심치료의 핵심 조건 (Rogers)',
      category: 'PHENOM',
      items: ['치료자의 일치성(congruence)', '무조건적 긍정적 존중', '공감적 이해', '내담자의 경험적 변화']
    },
    {
      title: '집단치료 발달 단계',
      category: 'GROUP',
      items: ['초기 단계: 오리엔테이션/탐색', '과도기 단계: 갈등/저항', '작업 단계: 응집력/생산성', '종결 단계: 통합/이별']
    },
    {
      title: 'Selye의 일반적응증후군(GAS) 단계',
      category: 'HEALTH',
      items: ['경고 반응 (alarm reaction)', '저항 단계 (resistance)', '소진 단계 (exhaustion)']
    },
    {
      title: '아동 인지발달 단계 (Piaget)',
      category: 'CHILD',
      items: ['감각운동기 (0~2세)', '전조작기 (2~7세)', '구체적 조작기 (7~11세)', '형식적 조작기 (11세~)']
    },
    {
      title: '법정심리학에서 형사책임능력 평가 절차',
      category: 'SPECIAL',
      items: ['의뢰 및 고지된 동의', '임상 면접', '심리검사 실시', '기록 및 부수적 정보 검토', '감정 의견서 작성']
    },
    {
      title: '임상 연구의 근거 수준 (높은 순)',
      category: 'RESEARCH',
      items: ['체계적 문헌고찰/메타분석', '무선화 통제 실험(RCT)', '준실험 설계', '사례-통제 연구', '사례 연구/전문가 의견']
    },
    {
      title: 'CBT 치료의 전형적 회기 구조',
      category: 'CBT',
      items: ['기분 점검 및 안건 설정', '지난 회기 이후 변화 검토', '과제 검토', '주요 안건 작업', '새 과제 설정', '요약 및 피드백']
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

    let candidates = TIMELINE_SETS.map((s, i) => ({ ...s, idx: i }));
    if (config.category !== 'all') {
      const filtered = candidates.filter(s => s.category === config.category);
      if (filtered.length > 0) candidates = filtered;
    }
    candidates = candidates.filter(s => !usedSets.includes(s.idx));
    if (candidates.length === 0) {
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
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const listItems = (submitted ? items : shuffledItems).map((item, i) => {
      let statusClass = '';
      if (submitted) {
        statusClass = shuffledItems[i] === items[i] ? 'correct' : 'wrong';
      }
      return `
        <div class="timeline-item ${statusClass}" data-index="${i}" draggable="${!submitted && !isMobile}"
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
               <p style="font-size:0.8rem;color:var(--text-muted);margin-top:8px;">${isMobile ? '두 항목을 차례로 눌러 순서를 바꾸세요' : '드래그 또는 클릭으로 순서를 변경하세요'}</p>`
            : round < maxRounds - 1
              ? `<button class="btn-primary" onclick="TimelineGame.nextRound()">다음 문제 →</button>`
              : `<button class="btn-primary" onclick="TimelineGame.finish()">결과 보기</button>`
          }
        </div>
      </div>
    `;

    container.querySelectorAll('.timeline-item').forEach((el, i) => {
      el.setAttribute('data-index', i + 1);
      el.style.setProperty('--idx', i + 1);
    });

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
