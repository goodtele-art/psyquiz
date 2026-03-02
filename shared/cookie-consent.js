/**
 * cookie-consent.js
 * PsyQuiz 쿠키 동의 배너 + GA4 Consent Mode v2
 *
 * 사용법: 각 HTML 페이지에 <script src="/shared/cookie-consent.js" defer></script> 추가
 *         (또는 상대 경로: ../shared/cookie-consent.js)
 *
 * 동작:
 * 1. localStorage 'psyquiz_consent' 키로 동의 상태 관리
 * 2. 미동의 시 하단 고정 배너 표시
 * 3. "모두 동의" → analytics_storage, ad_storage granted
 * 4. "필수만" → analytics_storage, ad_storage denied
 * 5. GA4 consent mode v2 시그널 자동 업데이트
 */
(function () {
  'use strict';

  var CONSENT_KEY = 'psyquiz_consent';
  var CONSENT_ALL = 'all';
  var CONSENT_ESSENTIAL = 'essential';

  // GA4 consent mode helper
  function updateConsent(granted) {
    if (typeof gtag !== 'function') return;
    var state = granted ? 'granted' : 'denied';
    gtag('consent', 'update', {
      'analytics_storage': state,
      'ad_storage': state,
      'ad_user_data': state,
      'ad_personalization': state
    });
  }

  // Check existing consent
  var saved = null;
  try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) { /* private mode */ }

  if (saved === CONSENT_ALL) {
    updateConsent(true);
    return; // Already consented, no banner needed
  }
  if (saved === CONSENT_ESSENTIAL) {
    updateConsent(false);
    return; // Already declined, no banner needed
  }

  // No consent stored → show banner after DOM ready
  function showBanner() {
    // Inject styles
    var style = document.createElement('style');
    style.textContent = [
      '.cc-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;',
      'background:rgba(26,26,46,0.97);color:#e8e8f0;padding:16px 20px;',
      'display:flex;align-items:center;gap:16px;flex-wrap:wrap;justify-content:center;',
      'font-family:"Pretendard Variable",-apple-system,BlinkMacSystemFont,sans-serif;',
      'font-size:0.9rem;line-height:1.5;box-shadow:0 -2px 12px rgba(0,0,0,0.3);',
      'animation:cc-slide-up 0.3s ease-out}',
      '@keyframes cc-slide-up{from{transform:translateY(100%)}to{transform:translateY(0)}}',
      '.cc-banner a{color:#8B83FF;text-decoration:none}',
      '.cc-banner a:hover{text-decoration:underline}',
      '.cc-btns{display:flex;gap:8px;flex-shrink:0}',
      '.cc-btn{border:none;border-radius:20px;padding:10px 20px;font-size:0.85rem;',
      'font-weight:600;cursor:pointer;font-family:inherit;transition:opacity 0.15s}',
      '.cc-btn:hover{opacity:0.85}',
      '.cc-btn-all{background:#6C63FF;color:#fff}',
      '.cc-btn-ess{background:rgba(255,255,255,0.15);color:#e8e8f0}',
      '@media(max-width:600px){.cc-banner{flex-direction:column;text-align:center;padding:14px 16px}',
      '.cc-btns{width:100%;justify-content:center}}'
    ].join('');
    document.head.appendChild(style);

    // Create banner
    var banner = document.createElement('div');
    banner.className = 'cc-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', '쿠키 동의');
    banner.innerHTML =
      '<span>이 사이트는 서비스 개선을 위해 쿠키와 분석 도구를 사용합니다. ' +
      '<a href="/privacy.html">개인정보 처리방침</a></span>' +
      '<div class="cc-btns">' +
      '<button class="cc-btn cc-btn-all" type="button">모두 동의</button>' +
      '<button class="cc-btn cc-btn-ess" type="button">필수만</button>' +
      '</div>';

    document.body.appendChild(banner);

    // Button handlers
    banner.querySelector('.cc-btn-all').addEventListener('click', function () {
      try { localStorage.setItem(CONSENT_KEY, CONSENT_ALL); } catch (e) { /* ignore */ }
      updateConsent(true);
      banner.remove();
    });

    banner.querySelector('.cc-btn-ess').addEventListener('click', function () {
      try { localStorage.setItem(CONSENT_KEY, CONSENT_ESSENTIAL); } catch (e) { /* ignore */ }
      updateConsent(false);
      banner.remove();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
