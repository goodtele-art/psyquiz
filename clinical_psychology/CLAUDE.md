# 임상심리학 게임 학습 (Clinical Psychology Game Learning)

임상심리학 용어를 8가지 게임 + 실전문제로 학습하는 웹앱. 16개 카테고리.

## 프로젝트 구조

```
clinical_psychology/
├── index.html                  # 메인 SPA 셸 (라우터, 공통 UI)
├── css/
│   └── style.css               # 전체 스타일 (CSS 변수, 다크모드, 애니메이션)
├── js/
│   ├── app.js                  # SPA 라우터, 데이터 로더, 유틸
│   ├── sound.js                # 사운드 시스템 (Web Audio API 합성)
│   ├── components.js           # 공통 컴포넌트 (점수, 타이머, 콤보, 별점, 컨페티)
│   ├── firebase-config.js      # Firebase 리더보드 설정
│   ├── game-quiz.js            # 게임 1: 4지선다 퀴즈
│   ├── game-card.js            # 게임 2: 카드 매칭
│   ├── game-typing.js          # 게임 3: 타이핑 낙하
│   ├── game-swipe.js           # 게임 4: 스와이프 분류
│   ├── game-connect.js         # 게임 5: 선 잇기
│   ├── game-crossword.js       # 게임 6: 십자말 퍼즐
│   ├── game-hierarchy.js       # 게임 7: 계층 분류
│   ├── game-timeline.js        # 게임 8: 순서 배열
│   ├── game-exam.js            # 실전문제
│   └── game-english.js         # 영어공부하기
├── .claude/commands/           # 스킬 (슬래시 커맨드)
│   ├── generate-terms.md       # /generate-terms — 카테고리별 용어 JSON 생성
│   ├── validate-terms.md       # /validate-terms — 12항목 품질 검증
│   └── generate-quiz.md        # /generate-quiz — 퀴즈 문제 JSON 생성
├── data/
│   ├── terms/                  # 카테고리별 용어 JSON (16개 파일)
│   │   ├── intro.json          # INTRO — 임상심리학은 어떤 학문인가
│   │   ├── history.json        # HISTORY — 임상심리학의 역사
│   │   ├── research.json       # RESEARCH — 임상심리학의 연구방법
│   │   ├── diagn.json          # DIAGN — 진단
│   │   ├── intview.json        # INTVIEW — 임상면접
│   │   ├── intell.json         # INTELL — 지능평가
│   │   ├── persona.json        # PERSONA — 성격평가
│   │   ├── behav.json          # BEHAV — 행동평가
│   │   ├── neuroas.json        # NEUROAS — 신경심리평가
│   │   ├── psychod.json        # PSYCHOD — 정신역동 심리치료
│   │   ├── cbt.json            # CBT — 인지행동치료
│   │   ├── phenom.json         # PHENOM — 현상학적 치료
│   │   ├── group.json          # GROUP — 집단치료
│   │   ├── health.json         # HEALTH — 건강심리학 및 긍정심리학
│   │   ├── child.json          # CHILD — 아동임상심리학
│   │   └── special.json        # SPECIAL — 전문 영역
│   ├── terms-data.js           # 전체 용어 통합 파일
│   ├── exam/
│   │   └── exam-data.js        # 기출문제 데이터 (TBD)
│   ├── quiz/                   # 퀴즈 문제 JSON (선택적)
│   └── game/                   # 게임 데이터 JSON (선택적)
└── CLAUDE.md
```

## 기술 스택

- **프론트엔드**: HTML5 + CSS3 + Vanilla JS (프레임워크 없음)
- **SPA**: 해시 기반 라우팅 (index.html 단일 진입점)
- **사운드**: Web Audio API 프로그래밍 합성 (외부 파일 불필요)
- **저장**: localStorage 기반 진행도 추적
- **리더보드**: Firebase Realtime DB (글로벌) + localStorage (오프라인 폴백)
- **상위 프로젝트**: `psy-study/` (심리학 과목 통합 관리)
- **localStorage 접두사**: `clinpsy_` (theme, leaderboard, progress)

## 10가지 게임

| 게임 | 파일 | 메커니즘 | 데이터 활용 |
|------|------|---------|------------|
| 4지선다 퀴즈 | game-quiz.js | 정의→용어, 용어→정의, 연구자→개념 | definition, quiz_hints, related_concepts |
| 카드 매칭 | game-card.js | 메모리 게임, 한↔영 짝 맞추기 | terminology_ko, terminology_en |
| 타이핑 낙하 | game-typing.js | 떨어지는 정의, 용어 타이핑 | definition, terminology_ko/en |
| 스와이프 분류 | game-swipe.js | Tinder 스타일 2개 카테고리 분류 | category, terminology |
| 선 잇기 | game-connect.js | 별자리 테마, 연구자↔개념 연결 | key_researchers, terminology |
| 십자말 퍼즐 | game-crossword.js | 한글 십자말, 정의=힌트 | terminology_ko, definition |
| 계층 분류 | game-hierarchy.js | 트리 구조 드래그 배치 | category, sub_types |
| 순서 배열 | game-timeline.js | 이론/과정 순서 정렬 | 사전 정의 순서 세트 |
| 실전문제 풀기 | game-exam.js | 기출 랜덤 10문제 | EXAM_DATA (별도 데이터) |
| 영어공부하기 | game-english.js | ko2en 타이핑 + en2ko 4지선다 | terminology_ko, terminology_en |

## 카테고리 코드표

| # | 코드 | 한국어 | 영어 | 축약 | 아이콘 | 색상 |
|---|------|--------|------|------|--------|------|
| 1 | INTRO | 임상심리학은 어떤 학문인가 | What is Clinical Psychology | 개관 | 🏛️ | #5C6BC0 |
| 2 | HISTORY | 임상심리학의 역사 | History of Clinical Psychology | 역사 | 📜 | #8D6E63 |
| 3 | RESEARCH | 임상심리학의 연구방법 | Research Methods | 연구 | 📊 | #78909C |
| 4 | DIAGN | 진단 | Diagnosis | 진단 | 🔍 | #E53935 |
| 5 | INTVIEW | 임상면접 | Clinical Interview | 면접 | 🎤 | #00897B |
| 6 | INTELL | 지능평가 | Intellectual Assessment | 지능 | 🧮 | #1E88E5 |
| 7 | PERSONA | 성격평가 | Personality Assessment | 성격 | 📋 | #8E24AA |
| 8 | BEHAV | 행동평가 | Behavioral Assessment | 행동 | 🎯 | #43A047 |
| 9 | NEUROAS | 신경심리평가 | Neuropsychological Assessment | 신경 | 🧬 | #00ACC1 |
| 10 | PSYCHOD | 정신역동 심리치료 | Psychodynamic Psychotherapy | 역동 | 🛋️ | #D81B60 |
| 11 | CBT | 인지행동치료 | Cognitive-Behavioral Therapy | CBT | 🧠 | #FB8C00 |
| 12 | PHENOM | 현상학적 치료 | Phenomenological Therapy | 현상학 | 🌊 | #7CB342 |
| 13 | GROUP | 집단치료 | Group Therapy | 집단 | 👥 | #5E35B1 |
| 14 | HEALTH | 건강심리학 및 긍정심리학 | Health & Positive Psychology | 건강 | ❤️‍🩹 | #EF5350 |
| 15 | CHILD | 아동임상심리학 | Child Clinical Psychology | 아동 | 👧 | #FFB300 |
| 16 | SPECIAL | 전문 영역 | Specialty Areas | 전문 | ⚖️ | #546E7A |

## 용어 객체 스키마 (필수 12필드)

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
  "significance": "임상심리학에서의 의의",
  "key_researchers": [{ "name_ko": "", "name_en": "", "contribution": "" }],
  "related_concepts": [{ "name_ko": "", "name_en": "", "id": "" }],
  "sub_types": [],
  "quiz_hints": { "mnemonic": "", "differential": "", "key_point": "", "common_mistake": "" }
}
```

## 데이터 작업 워크플로우

1. `/generate-terms {CATEGORY}` — 카테고리별 용어 JSON 생성
2. `/validate-terms ALL` — 12항목 품질 검증
3. terms-data.js 컴파일: 각 카테고리 JSON을 합쳐 `data/terms-data.js` 생성

## 참고 교재

- 신민섭 외 (2025). *최신 임상심리학* (2판). 사회평론아카데미.
- Pomerantz, A. M. (2023). *Clinical Psychology: Science, Practice, and Diversity* (6th ed.). Sage.
- Trull, T. J. & Prinstein, M. J. (2022). *Clinical Psychology* (9th ed.). Cengage.

## 변경 이력

### 2026-02-27
- 프로젝트 초기 생성 (Phase 1: 스캐폴딩)
- 16개 카테고리 설계 (교재 목차 기반)
- 10종 게임 템플릿 적용
- TIMELINE_SETS 16개 구성
- 515개 용어 데이터 생성 (Phase 2: 16개 카테고리 × 30~45개)
- 12항목 품질 검증 ALL PASS
- terms-data.js 컴파일 완료 (1,448KB)
- 통합 테스트 통과 (Phase 4)
