용어 데이터의 품질을 검증하라.

## 대상

$ARGUMENTS

- 파일명이 주어지면 해당 파일만 검증 (예: `intro.json`, `cbt`)
- `ALL` 또는 인자 없으면 `data/terms/` 전체 16개 파일 검증

## 검증 항목 (12개 체크리스트)

### 1. 스키마 완전성
모든 용어 객체에 필수 12필드가 존재하는지 확인:
`id`, `terminology`, `terminology_ko`, `terminology_en`, `category`, `category_name`, `definition`, `definition_en`, `significance`, `key_researchers`, `related_concepts`, `sub_types`, `quiz_hints`

quiz_hints 내부 4필드: `mnemonic`, `differential`, `key_point`, `common_mistake`

### 2. ID 형식
`{CATEGORY}_{약어}_{3자리숫자}` 패턴 준수 (예: `INTRO_CP_001`)
- 카테고리 코드가 ID 접두사와 일치하는지
- 숫자 부분이 3자리 0-패딩인지

### 3. 카테고리 유효성
category 필드가 허용 목록에 포함:
`INTRO|HISTORY|RESEARCH|DIAGN|INTVIEW|INTELL|PERSONA|BEHAV|NEUROAS|PSYCHOD|CBT|PHENOM|GROUP|HEALTH|CHILD|SPECIAL`

### 4. category_name 매칭
category 코드와 category_name이 정확히 매칭:
| category | category_name |
|----------|--------------|
| INTRO | 임상심리학은 어떤 학문인가 (What is Clinical Psychology) |
| HISTORY | 임상심리학의 역사 (History of Clinical Psychology) |
| RESEARCH | 임상심리학의 연구방법 (Research Methods) |
| DIAGN | 진단 (Diagnosis) |
| INTVIEW | 임상면접 (Clinical Interview) |
| INTELL | 지능평가 (Intellectual Assessment) |
| PERSONA | 성격평가 (Personality Assessment) |
| BEHAV | 행동평가 (Behavioral Assessment) |
| NEUROAS | 신경심리평가 (Neuropsychological Assessment) |
| PSYCHOD | 정신역동 심리치료 (Psychodynamic Psychotherapy) |
| CBT | 인지행동치료 (Cognitive-Behavioral Therapy) |
| PHENOM | 현상학적 치료 (Phenomenological Therapy) |
| GROUP | 집단치료 (Group Therapy) |
| HEALTH | 건강심리학 및 긍정심리학 (Health & Positive Psychology) |
| CHILD | 아동임상심리학 (Child Clinical Psychology) |
| SPECIAL | 전문 영역 (Specialty Areas) |

### 5. ID 중복 검사
- 파일 내 중복 없음
- 전체 파일 간 중복 없음 (ALL 검증 시)

### 6. 빈 문자열 필드
다음 필드에 빈 문자열("") 없음:
- `terminology`, `terminology_ko`, `terminology_en`
- `definition`, `definition_en`, `significance`
- `quiz_hints.differential`, `quiz_hints.key_point`, `quiz_hints.common_mistake`
- (mnemonic은 빈 문자열 허용)

### 7. terminology 형식
`terminology` 필드가 `"한국어 (English)"` 형식인지 확인

### 8. key_researchers 검증
- 배열이 1개 이상의 객체를 포함
- 각 객체에 `name_ko`, `name_en`, `contribution` 필드 존재
- 빈 문자열 없음

### 9. related_concepts 검증
- 배열이 1개 이상의 객체를 포함
- 각 객체에 `name_ko`, `name_en`, `id` 필드 존재
- 참조된 id가 실제 존재하는지 교차 검증 (ALL 검증 시)

### 10. sub_types 형식
- 배열 타입인지 (빈 배열 허용)

### 11. definition 길이
- `definition`: 20자 이상
- `definition_en`: 20자 이상
- `significance`: 15자 이상

### 12. JSON 유효성
- 파일이 유효한 JSON인지
- UTF-8 인코딩
- 최상위가 배열(`[...]`)인지

## 통계 출력

검증 후 다음 통계를 테이블로 출력하라:

### 카테고리별 용어 수
| 카테고리 | 코드 | 용어 수 |
|---------|------|--------|

### 전체 요약
| 항목 | 값 |
|------|---|
| 총 용어 수 | |
| sub_types 포함 용어 수 | |
| related_concepts 총 참조 수 | |
| key_researchers 총 수 | |
| 교차 참조 유효율 | |

## 출력 형식

각 검증 항목을 다음과 같이 표시:
- PASS: 항목명
- FAIL: 항목명 — 실패 위치(파일명, id)와 원인

마지막에 종합 결과: `12/12 PASS` 또는 `10/12 PASS, 2 FAIL`

FAIL 항목이 있으면 수정 방법을 구체적으로 제안하라.
