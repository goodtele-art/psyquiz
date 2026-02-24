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
      title: '기억의 처리 과정',
      category: 'MEMORY',
      items: ['감각기억', '단기기억', '작업기억', '부호화', '장기기억', '인출']
    },
    {
      title: 'Piaget의 인지발달 단계',
      category: 'DEVELOP',
      items: ['감각운동기', '전조작기', '구체적 조작기', '형식적 조작기']
    },
    {
      title: 'Erikson의 심리사회적 발달 (전반)',
      category: 'DEVELOP',
      items: ['신뢰 vs 불신', '자율성 vs 수치심', '주도성 vs 죄책감', '근면성 vs 열등감', '정체감 vs 역할혼란']
    },
    {
      title: 'Kohlberg의 도덕 발달 단계',
      category: 'DEVELOP',
      items: ['벌과 복종 지향', '도구적 상대주의', '착한 아이 지향', '법과 질서 지향', '사회계약 지향', '보편적 윤리 지향']
    },
    {
      title: '심리학의 주요 학파 등장 순서',
      category: 'INTRO',
      items: ['구조주의 (Wundt)', '기능주의 (James)', '정신분석 (Freud)', '행동주의 (Watson)', '인본주의 (Maslow)', '인지심리학']
    },
    {
      title: 'Maslow의 욕구 위계 (하→상)',
      category: 'MOTIV',
      items: ['생리적 욕구', '안전 욕구', '소속감과 사랑의 욕구', '존경 욕구', '자아실현 욕구']
    },
    {
      title: '고전적 조건형성 과정',
      category: 'LEARN',
      items: ['무조건 자극 제시', '중성 자극 + 무조건 자극 반복', '조건 자극 형성', '조건 반응 획득', '소거 (조건 자극만 제시)']
    },
    {
      title: 'Freud의 심리성적 발달 단계',
      category: 'PERSON',
      items: ['구강기', '항문기', '남근기', '잠복기', '생식기']
    },
    {
      title: '스트레스 반응의 일반적응증후군 (GAS)',
      category: 'HEALTH',
      items: ['경고 반응', '저항 단계', '소진 단계']
    },
    {
      title: '감각 처리 과정',
      category: 'SENSORY',
      items: ['자극 수용', '변환 (에너지 변환)', '신경 전달', '뇌의 처리', '지각 형성']
    },
    {
      title: '심리치료의 역사적 발전',
      category: 'THERAPY',
      items: ['정신분석 치료', '행동치료', '인지치료', '인지행동치료', '마음챙김 기반 치료']
    },
    {
      title: '문제 해결의 단계',
      category: 'COGN',
      items: ['문제 인식', '문제 정의', '해결 전략 수립', '전략 실행', '결과 평가']
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
