임상심리학 전문가로서 용어 데이터를 기반으로 퀴즈 문제를 생성하라.

## 입력

$ARGUMENTS (퀴즈 유형 + 카테고리 + 수량)

예시:
- `INTRO` — 임상심리학은 어떤 학문인가 카테고리, 기본 유형(4지선다) 20문제
- `CBT 30문제` — 인지행동치료, 4지선다 30문제
- `multiple-choice PSYCHOD 20문제` — 정신역동, 4지선다 20문제
- `true-false BEHAV 15문제` — 행동평가, O/X 15문제
- `researcher PERSONA 10문제` — 성격평가, 연구자 매칭 10문제
- `mixed INTRO 30문제` — 임상심리학 개관, 모든 유형 혼합 30문제
- `ALL mixed 50문제` — 전 카테고리 혼합 50문제

## 카테고리 코드표

| 코드 | 한국어 | 영어 |
|------|--------|------|
| INTRO | 임상심리학은 어떤 학문인가 | What is Clinical Psychology |
| HISTORY | 임상심리학의 역사 | History of Clinical Psychology |
| RESEARCH | 임상심리학의 연구방법 | Research Methods |
| DIAGN | 진단 | Diagnosis |
| INTVIEW | 임상면접 | Clinical Interview |
| INTELL | 지능평가 | Intellectual Assessment |
| PERSONA | 성격평가 | Personality Assessment |
| BEHAV | 행동평가 | Behavioral Assessment |
| NEUROAS | 신경심리평가 | Neuropsychological Assessment |
| PSYCHOD | 정신역동 심리치료 | Psychodynamic Psychotherapy |
| CBT | 인지행동치료 | Cognitive-Behavioral Therapy |
| PHENOM | 현상학적 치료 | Phenomenological Therapy |
| GROUP | 집단치료 | Group Therapy |
| HEALTH | 건강심리학 및 긍정심리학 | Health & Positive Psychology |
| CHILD | 아동임상심리학 | Child Clinical Psychology |
| SPECIAL | 전문 영역 | Specialty Areas |

## 레퍼런스

1. `CLAUDE.md`의 카테고리 코드표와 스키마를 **반드시** 참조
2. `data/terms/{category}.json` 파일을 읽어 용어 데이터를 기반으로 문제 생성
3. `data/quiz/` 폴더의 기존 퀴즈 파일을 읽어 **중복 문제 방지**
4. 기존 파일이 있으면 해당 파일에 추가 (없으면 새로 생성)

## 퀴즈 유형별 스키마

### 유형 1: 4지선다 (multiple-choice)

```json
{
  "id": "Q_INTRO_MC_001",
  "type": "multiple-choice",
  "category": "INTRO",
  "difficulty": "medium",
  "term_id": "INTRO_CP_001",
  "question": "심리적 장애의 평가, 진단, 치료, 예방 및 과학적 연구를 수행하는 심리학의 한 분야는?",
  "options": [
    {"label": "A", "text": "임상심리학", "is_correct": true},
    {"label": "B", "text": "상담심리학", "is_correct": false},
    {"label": "C", "text": "산업심리학", "is_correct": false},
    {"label": "D", "text": "발달심리학", "is_correct": false}
  ],
  "answer": "A",
  "explanation": "임상심리학은 심리적 장애의 평가, 진단, 치료, 예방 및 과학적 연구를 수행하는 분야이다.",
  "hint": "평가 + 진단 + 치료 + 연구 = ?"
}
```

### 유형 2: O/X (true-false)

```json
{
  "id": "Q_INTRO_TF_001",
  "type": "true-false",
  "category": "INTRO",
  "difficulty": "easy",
  "term_id": "INTRO_CP_001",
  "question": "임상심리학자는 약물 처방권을 모든 주에서 가지고 있다.",
  "answer": false,
  "explanation": "미국에서 일부 주에서만 특별 훈련을 받은 심리학자에게 처방권이 부여되며, 대부분의 국가에서 심리학자는 처방권이 없다.",
  "hint": "약물 처방은 전통적으로 의사의 영역입니다."
}
```

### 유형 3: 연구자 매칭 (researcher)

```json
{
  "id": "Q_INTRO_RS_001",
  "type": "researcher",
  "category": "INTRO",
  "difficulty": "medium",
  "term_id": "INTRO_CP_001",
  "question": "1896년 최초의 심리클리닉을 설립하고 '임상심리학'이라는 용어를 처음 사용한 학자는?",
  "options": [
    {"label": "A", "text": "라이트너 위트머 (Lightner Witmer)", "is_correct": true},
    {"label": "B", "text": "빌헬름 분트 (Wilhelm Wundt)", "is_correct": false},
    {"label": "C", "text": "지그문트 프로이트 (Sigmund Freud)", "is_correct": false},
    {"label": "D", "text": "윌리엄 제임스 (William James)", "is_correct": false}
  ],
  "answer": "A",
  "explanation": "Lightner Witmer는 1896년 펜실베이니아 대학에서 최초의 심리클리닉을 설립하고, 임상심리학이라는 용어를 처음 사용했다."
}
```

## 문제 생성 규칙

### 공통
1. **ID 형식**: `Q_{CATEGORY}_{유형코드}_{3자리숫자}` (MC/TF/MT/RS)
2. **난이도 분포**: easy 30% / medium 40% / hard 30%
3. **term_id**: 문제가 기반하는 용어의 ID (추적 가능하도록)
4. **explanation**: 정답 이유 + 오답이 왜 틀렸는지 간략 설명

### 4지선다 (multiple-choice) 규칙
1. **문제 출제 방향** (다양하게 혼합):
   - 정의→용어: 정의를 주고 용어 선택
   - 용어→정의: 용어를 주고 정의 선택
   - 사례→개념: 구체적 사례를 주고 해당 개념 선택
   - 구분→차이: 두 개념의 차이점을 묻는 문제
2. **오답 선택지**: `quiz_hints.differential`과 `related_concepts`에서 혼동 가능한 유사 개념 활용
3. **선택지 순서**: 정답 위치를 A/B/C/D에 균등 분배
4. **선택지 길이**: 4개 선택지의 길이가 비슷하게

### O/X (true-false) 규칙
1. 정답 비율: true 50% / false 50%
2. false 문제는 `quiz_hints.common_mistake`에서 착안
3. 미묘하게 틀린 진술 (명백한 거짓 지양)
4. 이중 부정 사용 금지

### 연구자 매칭 (researcher) 규칙
1. `key_researchers` 데이터 활용
2. 오답 연구자는 같은/유사 카테고리의 다른 연구자에서 선택
3. 연구자의 주요 공헌을 묻는 문제

## 난이도 기준

- **easy**: 핵심 용어의 기본 정의, 대표적 연구자 매칭
- **medium**: 유사 개념 구분, 사례 적용, 세부 특성 파악
- **hard**: 미묘한 차이 구분, 예외 상황, 복합 개념 통합

## 출력

- `data/quiz/{category}.json` 파일로 저장
- 파일명은 소문자: `intro.json`, `cbt.json` 등
- mixed/ALL인 경우 각 카테고리별 파일에 분배
- JSON 배열 형식: `[ {...}, {...}, ... ]`
- UTF-8 인코딩, 들여쓰기 2칸
- 생성 후 통계 출력:
  - 유형별 문제 수
  - 난이도별 분포
  - 정답 위치 분포 (4지선다의 경우)
  - 참조 용어 수 (전체 용어 대비 커버리지)
