임상심리학 전문가로서 지정된 카테고리의 임상심리학 용어 JSON 데이터를 생성하라.

## 입력

$ARGUMENTS (카테고리 코드 + 옵션)

예시:
- `INTRO` — 임상심리학은 어떤 학문인가 카테고리 전체 생성
- `CBT 30개` — 인지행동치료 30개 용어 생성
- `PSYCHOD,CBT` — 정신역동 + 인지행동 2개 카테고리 동시 생성

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

## 용어 객체 스키마 (필수 12필드)

```json
{
  "id": "INTRO_CP_001",
  "terminology": "임상심리학 (Clinical Psychology)",
  "terminology_ko": "임상심리학",
  "terminology_en": "Clinical Psychology",
  "category": "INTRO",
  "category_name": "임상심리학은 어떤 학문인가 (What is Clinical Psychology)",
  "definition": "심리적 장애의 평가, 진단, 치료, 예방 및 과학적 연구를 수행하는 심리학의 한 분야",
  "definition_en": "A branch of psychology that involves the assessment, diagnosis, treatment, prevention, and scientific study of psychological disorders",
  "significance": "임상심리학은 과학적 연구와 임상 실무를 통합하여 인간의 심리적 고통을 이해하고 완화하는 데 기여한다",
  "key_researchers": [
    {"name_ko": "라이트너 위트머", "name_en": "Lightner Witmer", "contribution": "1896년 최초의 심리클리닉 설립, 임상심리학이라는 용어 처음 사용"}
  ],
  "related_concepts": [
    {"name_ko": "과학자-실무자 모델", "name_en": "Scientist-Practitioner Model", "id": "INTRO_SP_002"}
  ],
  "sub_types": [],
  "quiz_hints": {
    "mnemonic": "임상심리학 = 평가 + 진단 + 치료 + 연구",
    "differential": "임상심리학은 연구와 실무를 모두 포함, 상담심리학은 정상 범위의 적응 문제에 초점",
    "key_point": "과학과 실무의 통합이 핵심 정체성",
    "common_mistake": "임상심리학자와 정신건강의학과 의사의 역할을 혼동하는 것"
  }
}
```

## 레퍼런스

1. `CLAUDE.md`의 카테고리 코드표를 **반드시** 참조
2. `data/terms/` 폴더의 기존 파일을 읽어 **중복 ID 방지**
3. 기존 파일이 있으면 해당 카테고리의 마지막 ID 번호 이후부터 시작

## 작성 규칙

1. **ID 형식**: `{CATEGORY}_{약어}_{3자리숫자}` (예: `INTRO_CP_001`)
2. **한/영 병기**: terminology 필드는 `"한국어 (English)"` 형식
3. **정의(definition)**: 1~2문장, 학술적이되 이해 가능한 수준
4. **definition_en**: 영어 정의 (임상심리학 교과서 수준)
5. **significance**: 임상심리학에서의 의의/중요성 1~2문장
6. **key_researchers**: 핵심 연구자 1~3명 (이름, 공헌)
7. **related_concepts**: 관련 개념 2~5개 (같은 과목 내 ID 참조)
8. **sub_types**: 하위 유형이 있는 개념만 포함 (없으면 빈 배열 `[]`)
9. **quiz_hints.mnemonic**: 암기 팁 (있으면 기재, 없으면 빈 문자열)
10. **quiz_hints.differential**: 유사 개념과의 구분점
11. **quiz_hints.key_point**: 시험/퀴즈 핵심 포인트
12. **quiz_hints.common_mistake**: 흔한 오답/오해

## 품질 기준

- 모든 필드가 빈 문자열 없이 채워질 것 (mnemonic 제외)
- 한국어 정의는 임상심리학 교과서 수준의 정확성
- 영어 용어는 APA / Pomerantz / Trull 기준
- 핵심 연구자(key_researchers)는 실제 해당 분야 대표 학자
- 대표 이론/기법이 있는 개념은 반드시 key_researchers에 포함
- 각 카테고리당 최소 30개 용어 생성

## 출력

- `data/terms/{category_code}.json` 파일로 저장
- 파일명은 소문자: `intro.json`, `cbt.json` 등
- JSON 배열 형식: `[ {...}, {...}, ... ]`
- UTF-8 인코딩, 들여쓰기 2칸
- 생성 후 용어 수, 하위유형 포함 용어 수, 관련 개념 총 수 통계 출력
