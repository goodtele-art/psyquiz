const CACHE_VERSION = 'v2';
const CACHE_NAME = 'psyquiz-abnpsy-' + CACHE_VERSION;

const STATIC_ASSETS = [
  './',
  './index.html',
  './glossary.html',
  './og-image.svg',
  './css/style.css',
  './data/terms-data.js',
  './data/exam/exam-data.js',
  './js/sound.js',
  './js/firebase-config.js',
  './js/components.js',
  './js/app.js',
  './js/game-quiz.js',
  './js/game-card.js',
  './js/game-typing.js',
  './js/game-swipe.js',
  './js/game-connect.js',
  './js/game-crossword.js',
  './js/game-hierarchy.js',
  './js/game-timeline.js',
  './js/game-exam.js',
  './js/game-english.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  if (e.request.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      });
    })
  );
});
