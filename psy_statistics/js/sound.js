/* ========================================
   Sound System — Web Audio API 합성
   외부 파일 없이 프로그래밍으로 사운드 생성
   ======================================== */

const Sound = (() => {
  let ctx = null;
  let enabled = true;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function playTone(freq, type, duration, volume = 0.3, delay = 0) {
    if (!enabled) return;
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + duration + 0.05);
    } catch (e) { /* ignore audio errors */ }
  }

  function playNoise(duration, volume = 0.1) {
    if (!enabled) return;
    try {
      const c = getCtx();
      const bufferSize = c.sampleRate * duration;
      const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * volume;
      }
      const source = c.createBufferSource();
      const gain = c.createGain();
      source.buffer = buffer;
      gain.gain.setValueAtTime(volume, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
      source.connect(gain);
      gain.connect(c.destination);
      source.start();
    } catch (e) { /* ignore */ }
  }

  return {
    get enabled() { return enabled; },

    toggle() {
      enabled = !enabled;
      document.querySelectorAll('#sound-icon, .home-sound-icon').forEach(el => {
        el.textContent = enabled ? '🔊' : '🔇';
      });
      if (enabled) Sound.click();
    },

    // 정답: 높은 2음 "띵띵"
    correct() {
      playTone(523.25, 'sine', 0.15, 0.25);       // C5
      playTone(659.25, 'sine', 0.2, 0.25, 0.12);  // E5
    },

    // 오답: 낮은 "뿌"
    wrong() {
      playTone(130.81, 'triangle', 0.3, 0.2);  // C3
    },

    // 콤보: 아르페지오
    combo() {
      playTone(523.25, 'sine', 0.12, 0.2);        // C5
      playTone(659.25, 'sine', 0.12, 0.2, 0.08);  // E5
      playTone(783.99, 'sine', 0.12, 0.2, 0.16);  // G5
      playTone(1046.5, 'sine', 0.2, 0.25, 0.24);  // C6
    },

    // 카드 플립
    flip() {
      playNoise(0.05, 0.08);
    },

    // 게임 완료 팡파레
    fanfare() {
      playTone(261.63, 'sine', 0.3, 0.2);         // C4
      playTone(329.63, 'sine', 0.3, 0.2, 0.1);    // E4
      playTone(392.00, 'sine', 0.3, 0.2, 0.2);    // G4
      playTone(523.25, 'sine', 0.5, 0.3, 0.3);    // C5
    },

    // 타이머 경고
    tick() {
      playTone(440, 'square', 0.05, 0.08);  // A4
    },

    // 버튼 클릭
    click() {
      playNoise(0.02, 0.05);
    },

    // 별 획득 (글리산도)
    star() {
      for (let i = 0; i < 5; i++) {
        playTone(800 + i * 200, 'sine', 0.08, 0.12, i * 0.05);
      }
    },

    // 컨페티
    confetti() {
      playNoise(0.15, 0.12);
      playTone(523.25, 'sine', 0.15, 0.15, 0.05);
      playTone(659.25, 'sine', 0.15, 0.15, 0.05);
      playTone(783.99, 'sine', 0.15, 0.15, 0.05);
    }
  };
})();
