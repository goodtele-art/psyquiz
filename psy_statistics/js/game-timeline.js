/* ========================================
   Game: 순서 배열 (Timeline)
   심리통계와 연구방법론 — 3라운드 연속
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
      title: '연구의 과학적 방법 단계',
      category: 'FOUND',
      items: ['문제 인식', '가설 수립', '연구 설계', '자료 수집', '자료 분석', '결론 및 보고']
    },
    {
      title: '측정 수준 (낮→높)',
      category: 'MEASURE',
      items: ['명명척도', '서열척도', '등간척도', '비율척도']
    },
    {
      title: '기술통계 분석 순서',
      category: 'DESCRIP',
      items: ['자료 정리', '도수분포표 작성', '중심경향치 계산', '변산성 측정', '그래프 시각화']
    },
    {
      title: '가설검정의 절차',
      category: 'HYPO',
      items: ['가설 설정 (H₀, H₁)', '유의수준 결정 (α)', '검정통계량 계산', '기각역 또는 p값 확인', '통계적 결정']
    },
    {
      title: 't검정의 종류 (단순→복잡)',
      category: 'TTEST',
      items: ['단일표본 t검정', '독립표본 t검정', '대응표본 t검정']
    },
    {
      title: 'ANOVA 분석 절차',
      category: 'ANOVA',
      items: ['총변량 계산 (SS_total)', '집단간 변량 (SS_between)', '집단내 변량 (SS_within)', 'F비 계산', 'F분포에서 유의성 판단', '사후검정 실시']
    },
    {
      title: '상관분석에서 회귀분석으로의 발전',
      category: 'CORR',
      items: ['산점도 그리기', 'Pearson 상관계수 계산', '상관의 유의성 검정', '단순회귀식 도출', '회귀 모형 검증']
    },
    {
      title: '통계학의 역사적 발전',
      category: 'FOUND',
      items: ['Gauss의 정규분포 (1809)', 'Galton의 상관 개념 (1888)', 'Pearson의 카이제곱 (1900)', 'Fisher의 분산분석 (1925)', 'Neyman-Pearson 가설검정 (1933)', 'Cohen의 효과크기 (1962)']
    },
    {
      title: '표본추출 과정',
      category: 'SAMPLE',
      items: ['모집단 정의', '표집틀 작성', '표본추출법 선택', '표본크기 결정', '표본 추출', '표본 대표성 검토']
    },
    {
      title: '회귀분석의 단계',
      category: 'REGRESS',
      items: ['산점도 검토', '회귀모형 설정', '회귀계수 추정 (최소제곱법)', '모형 적합도 검증 (R²)', '잔차 분석', '예측 및 해석']
    },
    {
      title: '효과크기 해석 기준 (Cohen, 작→큼)',
      category: 'EFFECT',
      items: ['d = 0.2 (작은 효과)', 'd = 0.5 (중간 효과)', 'd = 0.8 (큰 효과)']
    },
    {
      title: '연구 보고서 구성 (APA 형식)',
      category: 'ETHICS',
      items: ['제목 및 초록', '서론', '방법', '결과', '논의', '참고문헌']
    },
    {
      title: '비모수 검정 선택 흐름',
      category: 'NONPARA',
      items: ['정규성 검정 실패', '데이터 유형 확인', '독립/대응 표본 구분', '적절한 비모수 검정 선택', '검정통계량 계산', '유의성 판단']
    },
    {
      title: '실험설계의 내적타당도 위협 (Campbell 순서)',
      category: 'DESIGN',
      items: ['역사 효과', '성숙 효과', '검사 효과', '도구 효과', '통계적 회귀', '선택 편향', '피험자 탈락']
    },
    {
      title: '확률분포의 발전 순서',
      category: 'PROB',
      items: ['균일분포', '이항분포', '정규분포', 't분포', '카이제곱 분포', 'F분포']
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
