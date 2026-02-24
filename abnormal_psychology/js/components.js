/* ========================================
   Common Components
   점수, 타이머, 콤보, 별점, 컨페티, 결과
   ======================================== */

/* --- Floating Score --- */
const FloatingScore = {
  show(x, y, text, type = 'correct') {
    const container = document.getElementById('floating-scores');
    const el = document.createElement('div');
    el.className = `floating-score ${type}`;
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    container.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
};

/* --- Flash Overlay --- */
const Flash = {
  show(type = 'correct') {
    const el = document.createElement('div');
    el.className = `flash-overlay ${type}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 300);
  }
};

/* --- Combo Counter --- */
const Combo = {
  current: 0,
  max: 0,

  reset() {
    this.current = 0;
    this.max = 0;
  },

  hit() {
    this.current++;
    if (this.current > this.max) this.max = this.current;

    if (this.current >= 2) {
      const multiplier = this.current >= 5 ? 5 : this.current;
      this.showBadge(multiplier);
      if (this.current === 3 || this.current === 5) {
        Sound.combo();
      }
    }
    return this.getMultiplier();
  },

  miss() {
    this.current = 0;
    return 1;
  },

  getMultiplier() {
    if (this.current >= 5) return 5;
    if (this.current >= 3) return 3;
    if (this.current >= 2) return 2;
    return 1;
  },

  showBadge(multiplier) {
    const colors = { 2: '#3498DB', 3: '#F39C12', 4: '#E91E63', 5: '#E74C3C' };
    const el = document.createElement('div');
    el.className = 'combo-badge';
    el.textContent = `x${multiplier}!`;
    el.style.color = colors[multiplier] || colors[5];
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
};

/* --- Score Manager --- */
const ScoreManager = {
  score: 0,
  maxScore: 0,
  correct: 0,
  total: 0,
  difficulty: 'easy',

  reset(difficulty = 'easy', totalQuestions = 10) {
    this.score = 0;
    this.correct = 0;
    this.total = totalQuestions;
    this.difficulty = difficulty;
    this.maxScore = totalQuestions * 10 * this.getDifficultyMultiplier();
    Combo.reset();
    this.updateHUD();
  },

  getDifficultyMultiplier() {
    return { easy: 1, medium: 1.5, hard: 2 }[this.difficulty] || 1;
  },

  addCorrect(x, y) {
    this.correct++;
    const comboMult = Combo.hit();
    const points = Math.round(10 * this.getDifficultyMultiplier() * comboMult);
    this.score += points;
    Sound.correct();
    Flash.show('correct');
    FloatingScore.show(x || window.innerWidth / 2, y || window.innerHeight / 2, `+${points}`, comboMult >= 3 ? 'combo' : 'correct');
    this.updateHUD();
  },

  addWrong(x, y) {
    Combo.miss();
    Sound.wrong();
    Flash.show('wrong');
    FloatingScore.show(x || window.innerWidth / 2, y || window.innerHeight / 2, '✗', 'wrong');
    this.updateHUD();
  },

  updateHUD() {
    const idx = this.correct + (this.total - this.correct - (this.total - this.getCurrentIndex()));
    document.getElementById('hud-score').textContent = this.score;
  },

  getCurrentIndex() {
    // 각 게임에서 오버라이드
    return 0;
  },

  getAccuracy() {
    const attempted = this.correct + (this.total - this.correct);
    return attempted > 0 ? Math.round((this.correct / this.total) * 100) : 0;
  },

  getStars() {
    const acc = this.getAccuracy();
    if (acc === 100) return 3;
    if (acc >= 80) return 2;
    if (acc >= 60) return 1;
    return 0;
  }
};

/* --- Timer --- */
const Timer = {
  interval: null,
  elapsed: 0,
  countdown: 0,
  mode: 'elapsed', // 'elapsed' | 'countdown'
  onTick: null,
  onExpire: null,

  startElapsed() {
    this.stop();
    this.elapsed = 0;
    this.mode = 'elapsed';
    this.interval = setInterval(() => {
      this.elapsed++;
      this.updateDisplay();
    }, 1000);
  },

  startCountdown(seconds, onExpire) {
    this.stop();
    this.countdown = seconds;
    this.mode = 'countdown';
    this.onExpire = onExpire;
    this.updateDisplay();
    this.interval = setInterval(() => {
      this.countdown--;
      this.updateDisplay();
      if (this.countdown <= 5 && this.countdown > 0) Sound.tick();
      if (this.countdown <= 0) {
        this.stop();
        if (this.onExpire) this.onExpire();
      }
    }, 1000);
  },

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },

  getElapsed() {
    return this.mode === 'elapsed' ? this.elapsed : 0;
  },

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  },

  updateDisplay() {
    const el = document.getElementById('hud-timer');
    if (!el) return;
    if (this.mode === 'elapsed') {
      el.textContent = this.formatTime(this.elapsed);
      el.className = 'hud-timer';
    } else {
      el.textContent = this.formatTime(this.countdown);
      el.className = 'hud-timer';
      if (this.countdown <= 5) el.classList.add('danger');
      else if (this.countdown <= 10) el.classList.add('warning');
    }
  }
};

/* --- Confetti Effect --- */
const Confetti = {
  launch() {
    Sound.confetti();
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C', '#F1C40F', '#E91E63'];
    const shapes = ['circle', 'rect', 'triangle'];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6 + Math.random() * 8;

      piece.style.left = Math.random() * 100 + '%';
      piece.style.animationDelay = Math.random() * 0.5 + 's';
      piece.style.animationDuration = (2 + Math.random() * 2) + 's';

      if (shape === 'circle') {
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';
        piece.style.borderRadius = '50%';
        piece.style.background = color;
      } else if (shape === 'rect') {
        piece.style.width = size + 'px';
        piece.style.height = size * 0.6 + 'px';
        piece.style.background = color;
      } else {
        piece.style.width = '0';
        piece.style.height = '0';
        piece.style.borderLeft = size/2 + 'px solid transparent';
        piece.style.borderRight = size/2 + 'px solid transparent';
        piece.style.borderBottom = size + 'px solid ' + color;
        piece.style.background = 'transparent';
      }

      container.appendChild(piece);
    }

    setTimeout(() => { container.innerHTML = ''; }, 4000);
  }
};

/* --- Star Rating Display --- */
const StarRating = {
  render(stars, container) {
    container.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      span.textContent = i < stars ? '★' : '☆';
      span.style.color = i < stars ? 'var(--star)' : 'var(--text-muted)';
      span.style.animationDelay = (i * 0.2) + 's';
      if (i < stars) {
        span.style.animation = 'popIn 0.3s ease ' + (i * 0.2) + 's both';
      }
      container.appendChild(span);
    }
  }
};

/* --- Leaderboard --- */
const Leaderboard = {
  KEY: 'abnpsy_leaderboard',
  MAX_ENTRIES: 10,

  load() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch { return {}; }
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  getForGame(gameType) {
    const all = this.load();
    return (all[gameType] || []).sort((a, b) => b.score - a.score || (a.elapsed || 0) - (b.elapsed || 0));
  },

  qualifies(gameType, score, elapsed) {
    const entries = this.getForGame(gameType);
    if (entries.length < this.MAX_ENTRIES) return true;
    const last = entries[entries.length - 1];
    if (score !== last.score) return score > last.score;
    return elapsed != null && elapsed < (last.elapsed || 0);
  },

  addEntry(gameType, entry) {
    const all = this.load();
    if (!all[gameType]) all[gameType] = [];
    all[gameType].push(entry);
    all[gameType].sort((a, b) => b.score - a.score || (a.elapsed || 0) - (b.elapsed || 0));
    all[gameType] = all[gameType].slice(0, this.MAX_ENTRIES);
    this.save(all);
  },

  renderTable(gameType, highlightScore) {
    const entries = this.getForGame(gameType);
    if (entries.length === 0) {
      return '<p style="text-align:center;color:var(--text-muted);font-size:0.85rem;padding:12px 0;">아직 기록이 없습니다</p>';
    }
    return `<table class="leaderboard-table">
      <thead><tr><th>#</th><th>이름</th><th>점수</th><th>정확도</th><th>시간</th></tr></thead>
      <tbody>
        ${entries.map((e, i) => {
          const isNew = highlightScore && e.score === highlightScore.score && e.date === highlightScore.date;
          return `<tr class="${isNew ? 'highlight' : ''} ${i < 3 ? 'top3' : ''}">
            <td>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</td>
            <td>${e.name}</td>
            <td><strong>${e.score}</strong></td>
            <td>${e.accuracy}%</td>
            <td>${Timer.formatTime(e.elapsed || 0)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;
  }
};

/* --- Result Screen --- */
const ResultScreen = {
  lastData: null,

  show(data) {
    this.lastData = data;
    const accuracy = Math.round((data.correct / data.total) * 100);
    const stars = accuracy === 100 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0;

    document.getElementById('result-score-value').textContent = data.score;
    document.getElementById('result-score-max').textContent = `/ ${data.maxScore}점`;
    document.getElementById('result-accuracy').textContent = accuracy + '%';
    document.getElementById('result-correct').textContent = `${data.correct}/${data.total}`;
    document.getElementById('result-time').textContent = Timer.formatTime(data.elapsed || 0);
    document.getElementById('result-combo').textContent = `x${data.maxCombo || 0}`;
    document.getElementById('result-difficulty').textContent = { easy: '쉬움', medium: '보통', hard: '어려움' }[data.difficulty] || data.difficulty;

    StarRating.render(stars, document.getElementById('result-stars'));

    // 리더보드 영역
    const lbArea = document.getElementById('result-leaderboard');
    if (lbArea) {
      if (Leaderboard.qualifies(data.gameType, data.score, data.elapsed)) {
        // Top 10 진입! 이름 입력
        lbArea.innerHTML = `
          <div class="leaderboard-entry-form">
            <p class="leaderboard-congrats">🏆 Top 10 진입!</p>
            <div style="display:flex;gap:8px;justify-content:center;align-items:center;">
              <input type="text" id="leaderboard-name" class="leaderboard-input"
                     placeholder="이름을 입력하세요" maxlength="10" autocomplete="off">
              <button class="btn-primary btn-sm" onclick="ResultScreen.submitScore()">등록</button>
            </div>
          </div>
          <div id="leaderboard-table">${Leaderboard.renderTable(data.gameType)}</div>
        `;
        setTimeout(() => {
          const nameInput = document.getElementById('leaderboard-name');
          if (nameInput) nameInput.focus();
        }, 600);
      } else {
        lbArea.innerHTML = `
          <div id="leaderboard-table">${Leaderboard.renderTable(data.gameType)}</div>
        `;
      }
    }

    App.showPage('result');

    if (accuracy >= 90) {
      setTimeout(() => Confetti.launch(), 300);
    }

    Sound.fanfare();

    setTimeout(() => {
      for (let i = 0; i < stars; i++) {
        setTimeout(() => Sound.star(), i * 300);
      }
    }, 500);

    App.saveProgress(data);
  },

  submitScore() {
    const nameInput = document.getElementById('leaderboard-name');
    const name = (nameInput && nameInput.value.trim()) || '익명';
    const data = this.lastData;
    if (!data) return;

    const accuracy = Math.round((data.correct / data.total) * 100);
    const entry = {
      name,
      score: data.score,
      accuracy,
      elapsed: data.elapsed || 0,
      date: new Date().toISOString()
    };

    Leaderboard.addEntry(data.gameType, entry);

    // 입력 폼 숨기고 테이블 갱신
    const form = document.querySelector('.leaderboard-entry-form');
    if (form) form.remove();
    const tableEl = document.getElementById('leaderboard-table');
    if (tableEl) tableEl.innerHTML = Leaderboard.renderTable(data.gameType, entry);

    Sound.star();
  }
};

/* --- Progress Manager --- */
const Progress = {
  KEY: 'abnpsy_progress',

  load() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || this.defaultData();
    } catch { return this.defaultData(); }
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  defaultData() {
    return {
      gamesPlayed: {},
      bestScores: {},
      starRatings: {},
      termMastery: {},
      totalPlayTime: 0,
      lastPlayed: null
    };
  },

  record(gameType, category, score, stars, elapsed, termResults) {
    const p = this.load();

    // 게임 수
    p.gamesPlayed[gameType] = (p.gamesPlayed[gameType] || 0) + 1;

    // 최고 점수
    if (!p.bestScores[gameType]) p.bestScores[gameType] = {};
    const key = category || 'all';
    if (!p.bestScores[gameType][key] || score > p.bestScores[gameType][key]) {
      p.bestScores[gameType][key] = score;
    }

    // 별점
    if (!p.starRatings[gameType]) p.starRatings[gameType] = {};
    if (!p.starRatings[gameType][key] || stars > p.starRatings[gameType][key]) {
      p.starRatings[gameType][key] = stars;
    }

    // 용어별 정답률
    if (termResults) {
      termResults.forEach(({ id, correct }) => {
        if (!p.termMastery[id]) p.termMastery[id] = { correct: 0, total: 0 };
        p.termMastery[id].total++;
        if (correct) p.termMastery[id].correct++;
      });
    }

    // 시간
    p.totalPlayTime += elapsed || 0;
    p.lastPlayed = new Date().toISOString();

    this.save(p);
    return p;
  },

  getStats() {
    const p = this.load();
    const totalGames = Object.values(p.gamesPlayed).reduce((a, b) => a + b, 0);
    const masteredTerms = Object.values(p.termMastery).filter(t => t.total >= 3 && (t.correct / t.total) >= 0.8).length;
    const allStars = [];
    Object.values(p.starRatings).forEach(game => {
      Object.values(game).forEach(s => allStars.push(s));
    });
    const avgStars = allStars.length > 0 ? (allStars.reduce((a, b) => a + b, 0) / allStars.length) : 0;

    return { totalGames, masteredTerms, avgStars, totalTerms: Object.keys(p.termMastery).length };
  }
};
