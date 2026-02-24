/* ========================================
   Firebase Config — 리더보드 동기화용
   ======================================== */

const FirebaseConfig = (() => {
  const CONFIG = {
    apiKey: "AIzaSyAdu8Yz4vJQzJ2kjTEQ8cz7KM7Bu2mGTgg",
    authDomain: "psyquiz-portal-1acfe.firebaseapp.com",
    databaseURL: "https://psyquiz-portal-1acfe-default-rtdb.firebaseio.com",
    projectId: "psyquiz-portal-1acfe",
    storageBucket: "psyquiz-portal-1acfe.firebasestorage.app",
    messagingSenderId: "737272529800",
    appId: "1:737272529800:web:d546eda54b3a0b6fbb703d",
    measurementId: "G-PSMJ68DD0P"
  };

  const COURSE_ID = 'intro_psychology';
  const DB_ROOT = 'psyquiz-leaderboards';

  let db = null;
  let ready = false;

  function init() {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(CONFIG);
      }
      db = firebase.database();
      ready = true;
    } catch (e) {
      console.warn('[Firebase] 초기화 실패, 오프라인 모드:', e.message);
    }
  }

  function isReady() { return ready; }
  function getDb() { return db; }
  function getRef(gameType) { return db ? db.ref(`${DB_ROOT}/${COURSE_ID}/${gameType}`) : null; }
  function getCourseRef() { return db ? db.ref(`${DB_ROOT}/${COURSE_ID}`) : null; }

  return { init, isReady, getDb, getRef, getCourseRef, COURSE_ID };
})();
