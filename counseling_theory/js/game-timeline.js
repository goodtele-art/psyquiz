/* ========================================
   Game: 순서 배열 (Timeline)
   상담 이론/과정 순서 배열 — 3라운드 연속
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
      title: '상담 이론의 역사적 발전 순서',
      category: 'FOUND',
      items: ['정신분석 (Freud)', '개인심리학 (Adler)', '행동치료 (Wolpe)', '인간중심 상담 (Rogers)', '인지치료 (Beck)', '3세대 인지행동치료']
    },
    {
      title: 'Freud의 심리성적 발달 단계',
      category: 'PSYCHOD',
      items: ['구강기', '항문기', '남근기', '잠복기', '생식기']
    },
    {
      title: '상담과정의 단계',
      category: 'PROCESS',
      items: ['관계 형성', '문제 탐색', '목표 설정', '개입 전략 실행', '평가 및 종결']
    },
    {
      title: '체계적 둔감화의 절차',
      category: 'BEHAV',
      items: ['이완 훈련', '불안 위계 작성', '낮은 불안 장면 제시', '이완 상태 유지', '높은 불안 장면 점진적 노출']
    },
    {
      title: 'Glasser 현실치료의 WDEP 체계',
      category: 'REALITY',
      items: ['W: 바람 탐색 (Wants)', 'D: 행동 탐색 (Doing)', 'E: 평가 (Evaluation)', 'P: 계획 수립 (Planning)']
    },
    {
      title: 'Beck의 인지치료에서 인지 수준',
      category: 'CBT',
      items: ['자동적 사고', '인지적 오류', '중간 신념 (규칙/태도/가정)', '핵심 신념 (스키마)']
    },
    {
      title: 'Yalom의 집단상담 발달 단계',
      category: 'GROUP',
      items: ['초기 단계 (오리엔테이션)', '과도기 단계 (갈등)', '작업 단계 (응집력)', '종결 단계']
    },
    {
      title: 'Bowen의 가족치료 핵심 개념 발전',
      category: 'FAMILY',
      items: ['자기분화', '삼각관계', '핵가족 정서체계', '가족 투사 과정', '다세대 전수 과정']
    },
    {
      title: '게슈탈트 상담의 알아차림 단계',
      category: 'GESTALT',
      items: ['감각', '알아차림', '에너지 동원', '행동/접촉', '철수']
    },
    {
      title: '윤리적 의사결정 모델 단계',
      category: 'ETHICS',
      items: ['윤리적 딜레마 인식', '관련 윤리 규정 확인', '대안 탐색', '결과 예측', '최선의 행동 선택 및 실행']
    },
    {
      title: 'ACT의 심리적 유연성 과정',
      category: 'THIRDW',
      items: ['현재 순간 접촉', '수용', '인지적 탈융합', '맥락으로서의 자기', '가치 명료화', '전념 행동']
    },
    {
      title: '실존주의 상담의 궁극적 관심사',
      category: 'EXIST',
      items: ['죽음', '자유', '고립', '무의미']
    },
    {
      title: 'Rogers의 인간중심 상담 핵심 조건',
      category: 'PERSON',
      items: ['무조건적 긍정적 존중', '공감적 이해', '일치성/진솔성']
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
