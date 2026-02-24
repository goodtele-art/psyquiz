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
      title: '이상심리학 주요 관점의 등장 순서',
      category: 'FOUND',
      items: ['초자연적 모형', '생물의학적 모형', '정신분석 모형', '행동주의 모형', '인지 모형', '통합적 모형']
    },
    {
      title: 'DSM 분류체계의 역사',
      category: 'ASSESS',
      items: ['DSM-I (1952)', 'DSM-II (1968)', 'DSM-III (1980)', 'DSM-III-R (1987)', 'DSM-IV (1994)', 'DSM-5 (2013)', 'DSM-5-TR (2022)']
    },
    {
      title: '공포증 습득의 학습 과정',
      category: 'ANXIETY',
      items: ['외상적 사건 경험', '고전적 조건형성 (공포 습득)', '조작적 조건형성 (회피 강화)', '자극 일반화', '공포 유지·만성화']
    },
    {
      title: 'OCD 노출 및 반응방지(ERP) 치료 단계',
      category: 'OBSESS',
      items: ['심리교육', '불안 위계 작성', '점진적 노출 시작', '반응 방지 실행', '상위 항목 노출', '재발 방지 계획']
    },
    {
      title: '외상 후 스트레스 반응의 과정',
      category: 'TRAUMA',
      items: ['외상 사건 노출', '급성 스트레스 반응', '침습적 재경험', '회피와 정서적 마비', '과각성 상태', 'PTSD 진단 (1개월 이후)']
    },
    {
      title: 'Kubler-Ross 애도의 5단계',
      category: 'MOOD',
      items: ['부정', '분노', '타협', '우울', '수용']
    },
    {
      title: '조현병의 발병 과정',
      category: 'SCHIZO',
      items: ['전구기 (사회적 위축)', '급성기 (양성증상 출현)', '활성기 (증상 최고조)', '잔류기 (음성증상 지속)', '회복 또는 만성화']
    },
    {
      title: '성격장애의 발달 경로',
      category: 'PERSON',
      items: ['생물학적 기질', '초기 애착 경험', '핵심 도식 형성', '부적응적 대처 전략', '대인관계 패턴 고착']
    },
    {
      title: '물질 사용의 진행 과정',
      category: 'SUBST',
      items: ['실험적 사용', '사회적·오락적 사용', '습관적 남용', '신체적 의존', '중독 (강박적 사용)']
    },
    {
      title: '해리의 연속체 (경미→심각)',
      category: 'SOMDIS',
      items: ['정상적 몰입 (백일몽)', '이인증/비현실감', '해리성 기억상실', '해리성 둔주', '해리성 정체감 장애']
    },
    {
      title: '신경성 폭식증의 인지행동 모형',
      category: 'EATING',
      items: ['낮은 자존감', '체형·체중 과대평가', '극단적 식이 제한', '폭식 삽화', '보상 행동 (구토 등)', '죄책감·자기비난']
    },
    {
      title: '성반응 주기 (Masters & Johnson + Kaplan)',
      category: 'SEXUAL',
      items: ['욕구 단계 (Kaplan)', '흥분 단계', '고조 단계', '절정 단계', '해소 단계']
    },
    {
      title: '알츠하이머병의 진행 단계',
      category: 'NEURO',
      items: ['전임상 단계', '경도인지장애 (MCI)', '초기 치매', '중기 치매', '말기 치매']
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
