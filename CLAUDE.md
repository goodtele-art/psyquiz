# PsyQuiz — 심리학 용어 게임 학습 플랫폼

심리학 전공자를 위한 게임 기반 용어 학습 웹앱. 6개 과목 / 3,192개 용어 / 10종 게임.

- **URL**: https://psyquiz.ebpkorea.com
- **배포**: GitHub Pages (master 브랜치 루트 → 자동 배포)
- **기술 스택**: Vanilla HTML5 + CSS3 + JS (프레임워크 없음)

---

## 디렉토리 구조

```
psyquiz/
├── index.html                    # 포털 메인 페이지
├── privacy.html                  # 개인정보 처리방침
├── favicon.svg
├── og-image.svg                  # 소셜 미디어 프리뷰
├── robots.txt
├── sitemap.xml
├── firebase.json                 # Firebase Hosting 설정
├── CNAME                         # psyquiz.ebpkorea.com

├── css/
│   └── style.css                 # 포털 전용 스타일 (CSS 변수, 다크모드)
├── js/
│   └── app.js                    # 포털 로직 (Firebase 게시판, 다크모드, GA4)
├── shared/
│   └── cookie-consent.js         # GA4 Consent Mode v2 + 쿠키 배너 (전 과목 공유)

├── abnormal_psychology/          # 이상심리학 (1,874개 용어, 13개 카테고리)
├── clinical_psychology/          # 임상심리학  (515개 용어,  16개 카테고리)
├── counseling_theory/            # 상담 이론   (445개 용어, 13개 카테고리)
├── intro_psychology/             # 심리학개론  (456개 용어, 15개 카테고리)
├── psy_statistics/               # 심리통계    (489개 용어, 14개 카테고리)
└── psy_testing/                  # 심리검사    (413개 용어, 14개 카테고리)
```

---

## 포털 (index.html / js/app.js / css/style.css)

### 주요 섹션
- **Hero**: 플랫폼 소개 (10종 게임, 3,000+ 용어, 다크모드)
- **과목 카드**: 6개 과목 링크 그리드
- **신청 게시판**: Firebase Realtime DB 기반 실시간 과목 신청 + 동의 투표
- **광고**: 카카오 애드핏 320×100 + 쿠팡 파트너스
- **플랫폼 소개**: PSYDA, EBP Study, EBP Letter 연결

### Firebase (신청 게시판)
- **Project ID**: `psyquiz-portal-1acfe`
- **DB URL**: `https://psyquiz-portal-1acfe-default-rtdb.firebaseio.com`
- **DB 경로**: `psyquiz-requests/{requestId}`
- **스키마**: `{ title, description, createdAt, agreeCount, voters }`
- **중복 방지**: localStorage `psyquiz_uuid` (UUID v4) + Firebase transaction

### localStorage 키 (포털)
| 키 | 값 |
|----|----|
| `psyquiz_uuid` | 사용자 고유 UUID |
| `psyquiz_theme` | `'light'` \| `'dark'` |
| `psyquiz_consent` | `'all'` \| `'essential'` |

### 포털 CSS 주요 변수
```css
--bg: #F0F4FF;              /* 라이트 배경 */
--card-bg: #FFFFFF;
--brand-primary: #3498DB;
--brand-secondary: #9B59B6;
--brand-gradient: linear-gradient(135deg, #3498DB, #9B59B6);
--font-family: 'Pretendard Variable', 'Pretendard', sans-serif;

/* 다크모드 */
[data-theme="dark"] --bg: #0F0F23;
[data-theme="dark"] --card-bg: #1E1E3F;
```

---

## 각 과목 공통 구조

모든 과목 디렉토리는 동일한 패턴을 따른다.

```
{subject}/
├── index.html                    # SPA 셸 (라우터, 헤더, 5개 페이지 섹션)
├── glossary.html                 # 전체 용어 사전
├── sw.js                         # Service Worker (오프라인 캐싱, v3)
├── og-image.svg
├── CLAUDE.md                     # 과목별 상세 문서

├── css/
│   └── style.css                 # 과목 스타일 + 게임별 색상 변수

├── js/
│   ├── app.js                    # SPA 라우터, 데이터 로더
│   ├── components.js             # 점수판, 타이머, 콤보, 별점, 컨페티
│   ├── firebase-config.js        # 리더보드용 Firebase 설정
│   ├── sound.js                  # Web Audio API 합성 사운드
│   ├── game-quiz.js              # 게임 1: 4지선다 퀴즈
│   ├── game-card.js              # 게임 2: 카드 매칭
│   ├── game-typing.js            # 게임 3: 타이핑 낙하
│   ├── game-swipe.js             # 게임 4: 스와이프 분류
│   ├── game-connect.js           # 게임 5: 선 잇기 (별자리)
│   ├── game-crossword.js         # 게임 6: 십자말 퍼즐
│   ├── game-hierarchy.js         # 게임 7: 계층 분류
│   ├── game-timeline.js          # 게임 8: 순서 배열
│   ├── game-exam.js              # 게임 9: 실전문제 풀기
│   └── game-english.js           # 게임 10: 영어공부하기

└── data/
    ├── terms-data.js             # 전체 용어 통합 (TERMS_DATA 전역 객체)
    ├── terms/                    # 카테고리별 용어 JSON (과목마다 다름)
    │   └── {category}.json
    └── exam/
        └── exam-data.js          # 기출문제 데이터 (EXAM_DATA)
```

### SPA 라우팅 (index.html 내 5개 섹션)
| 섹션 ID | 역할 |
|---------|------|
| `#page-home` | 과목 홈 (카테고리 버튼 그리드) |
| `#page-game-select` | 게임 선택 (10종) |
| `#page-category-select` | 카테고리 선택 |
| `#page-game` | 게임 플레이 영역 |
| `#page-glossary` | 용어사전 |

### localStorage 키 (과목별 접두사)
| 과목 | 접두사 |
|------|--------|
| 이상심리학 | `abnpsy_` |
| 임상심리학 | `clinpsy_` |
| 상담 이론 | `counsel_` |
| 심리학개론 | `intropsy_` |
| 심리통계 | `psy_stat_` |
| 심리검사 | `psy_test_` |

각 과목의 키: `{접두사}theme`, `{접두사}leaderboard`, `{접두사}progress`, `{접두사}settings`

---

## 10가지 게임

| # | 게임 | 파일 | 난이도 | 데이터 활용 |
|---|------|------|--------|------------|
| 1 | 4지선다 퀴즈 | game-quiz.js | 쉬움 | definition, quiz_hints, key_researchers |
| 2 | 카드 매칭 | game-card.js | 쉬움 | terminology_ko, terminology_en |
| 3 | 타이핑 낙하 | game-typing.js | 보통 | definition, terminology |
| 4 | 스와이프 분류 | game-swipe.js | 보통 | category, terminology |
| 5 | 선 잇기 (별자리) | game-connect.js | 보통 | key_researchers, terminology |
| 6 | 십자말 퍼즐 | game-crossword.js | 어려움 | terminology_ko, definition |
| 7 | 계층 분류 | game-hierarchy.js | 어려움 | sub_types, category |
| 8 | 순서 배열 | game-timeline.js | 어려움 | 사전 정의 TIMELINE_SETS |
| 9 | 실전문제 풀기 | game-exam.js | 어려움 | EXAM_DATA (별도 파일) |
| 10 | 영어공부하기 | game-english.js | 보통 | terminology_ko, terminology_en |

---

## 용어 데이터 스키마 (12필드 필수)

```json
{
  "id": "{CATEGORY}_{ABBR}_{###}",
  "terminology": "한국어 (English)",
  "terminology_ko": "한국어",
  "terminology_en": "English",
  "category": "CATEGORY_CODE",
  "category_name": "카테고리명 (English Name)",
  "definition": "한국어 정의",
  "definition_en": "English definition",
  "significance": "해당 분야에서의 의의",
  "key_researchers": [{ "name_ko": "", "name_en": "", "contribution": "" }],
  "related_concepts": [{ "name_ko": "", "name_en": "", "id": "" }],
  "sub_types": [{ "name": "", "description": "" }],
  "quiz_hints": { "mnemonic": "", "differential": "", "key_point": "", "common_mistake": "" }
}
```

**terms-data.js 컴파일 패턴:**
```js
const TERMS_DATA = {};
TERMS_DATA.CATEGORY1 = [ /* JSON 배열 */ ];
TERMS_DATA.CATEGORY2 = [ /* JSON 배열 */ ];
```

---

## 과목별 현황

| 과목 | 디렉토리 | 용어 수 | 카테고리 수 | CLAUDE.md |
|------|----------|---------|------------|-----------|
| 이상심리학 | `abnormal_psychology/` | 1,874 | 13 | 없음 |
| 임상심리학 | `clinical_psychology/` | 515 | 16 | ✅ 있음 |
| 상담 이론 | `counseling_theory/` | 445 | 13 | 없음 |
| 심리학개론 | `intro_psychology/` | 456 | 15 | 없음 |
| 심리통계 | `psy_statistics/` | 489 | 14 | 없음 |
| 심리검사 | `psy_testing/` | 413 | 14 | 없음 |

---

## 공통 모듈: shared/cookie-consent.js

모든 과목 index.html에서 `<script src="../shared/cookie-consent.js">` 로 로드.

- **GA4 Consent Mode v2** 구현
- 배너 표시 → "모두 동의" (`analytics_storage`, `ad_storage` granted) / "필수만" (denied)
- localStorage `psyquiz_consent` 저장 (`'all'` | `'essential'`)
- 기 동의 시 배너 미표시

---

## 광고 / 분석

| 서비스 | 코드 | 위치 |
|--------|------|------|
| Google Analytics 4 | `G-PSMJ68DD0P` | 전 페이지 (Consent Mode v2) |
| 카카오 애드핏 | `DAN-DM6cesY6QzDPJTH3` | 포털 하단 (320×100) |
| 쿠팡 파트너스 | — | 포털 교재 추천 섹션 |

---

## CSP (Content-Security-Policy) 메타 태그

각 페이지 `<head>`에 인라인 CSP 메타 태그 사용 (Firebase Hosting 헤더 아님).

허용 도메인 요약:
- `script-src`: gstatic.com, firebaseio.com, googletagmanager.com, daumcdn.net, kakao.com
- `connect-src`: Firebase DB, Google Analytics, Kakao
- `img-src`: coupangcdn.com, analytics, daumcdn.net, kakao
- `font-src`: cdn.jsdelivr.net (Pretendard)
- `frame-src`: https: (애드핏 도메인 로테이션 대응)

> CSP를 변경할 때는 카카오/Firebase 도메인 누락에 주의.

---

## 배포

```bash
git add .
git commit -m "..."
git push origin master   # GitHub Pages 자동 배포
```

`firebase.json`의 `public: "."` 설정은 Firebase Hosting 참고용이며, 실제 배포는 GitHub Pages.

---

## SEO

- **포털**: Schema.org `Organization`, `WebSite`, `ItemList`
- **각 과목**: Schema.org `Course`, `BreadcrumbList`, `FAQPage`
- **Canonical**: `https://psyquiz.ebpkorea.com/{subject}/`
- **sitemap.xml**: 루트에 위치, 전 과목 URL 포함
