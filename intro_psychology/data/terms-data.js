const TERMS_DATA = {};

TERMS_DATA.INTRO = [
  {
    "id": "INTRO_PSY_001",
    "terminology": "심리학 (Psychology)",
    "terminology_ko": "심리학",
    "terminology_en": "Psychology",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "행동과 정신과정을 과학적으로 연구하는 학문으로, 관찰 가능한 행동뿐만 아니라 사고, 감정, 지각 등 내적 과정까지 포함한다.",
    "definition_en": "The scientific study of behavior and mental processes, encompassing not only observable behavior but also internal processes such as thoughts, feelings, and perceptions.",
    "significance": "모든 심리학 하위 분야의 토대가 되는 학문 정의로, 과학적 방법론을 통해 인간의 마음과 행동을 이해하고자 하는 체계적 노력을 대표한다.",
    "key_researchers": [
      {
        "name_ko": "빌헬름 분트",
        "name_en": "Wilhelm Wundt",
        "contribution": "1879년 최초의 심리학 실험실을 라이프치히 대학에 설립하여 심리학을 독립적인 과학으로 정립했다."
      },
      {
        "name_ko": "윌리엄 제임스",
        "name_en": "William James",
        "contribution": "미국 심리학의 아버지로, 'Principles of Psychology'를 저술하여 심리학의 학문적 기틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조주의",
        "name_en": "Structuralism",
        "id": "INTRO_STRU_002"
      },
      {
        "name_ko": "기능주의",
        "name_en": "Functionalism",
        "id": "INTRO_FUNC_003"
      },
      {
        "name_ko": "내성법",
        "name_en": "Introspection",
        "id": "INTRO_INTR_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Psyche(영혼) + Logos(학문) = 마음의 학문",
      "differential": "정신의학(Psychiatry)은 의학 분야로 치료에 초점을 두지만, 심리학은 행동과 정신과정의 과학적 연구에 초점을 둔다.",
      "key_point": "심리학은 '행동'과 '정신과정' 모두를 연구 대상으로 한다는 점이 핵심이다.",
      "common_mistake": "심리학을 마음을 읽는 학문이나 상담만 하는 학문으로 오해하는 경우가 많으나, 과학적 방법론에 기반한 광범위한 학문이다."
    }
  },
  {
    "id": "INTRO_STRU_002",
    "terminology": "구조주의 (Structuralism)",
    "terminology_ko": "구조주의",
    "terminology_en": "Structuralism",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "의식 경험을 가장 기본적인 요소로 분해하여 그 구조를 밝히고자 한 초기 심리학 학파로, 내성법을 주된 연구 방법으로 사용했다.",
    "definition_en": "An early school of psychology that sought to identify the basic elements of conscious experience by breaking it down into its simplest components, primarily using the method of introspection.",
    "significance": "심리학을 철학에서 분리하여 독립적 과학으로 출발시킨 최초의 학파로, 체계적 실험 방법의 도입이라는 역사적 의의가 있다.",
    "key_researchers": [
      {
        "name_ko": "빌헬름 분트",
        "name_en": "Wilhelm Wundt",
        "contribution": "구조주의의 창시자로, 의식 경험의 기본 요소를 분석하기 위해 실험적 내성법을 도입했다."
      },
      {
        "name_ko": "에드워드 티치너",
        "name_en": "Edward Titchener",
        "contribution": "분트의 제자로, 구조주의라는 용어를 만들고 미국에서 이 학파를 체계적으로 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기능주의",
        "name_en": "Functionalism",
        "id": "INTRO_FUNC_003"
      },
      {
        "name_ko": "내성법",
        "name_en": "Introspection",
        "id": "INTRO_INTR_008"
      },
      {
        "name_ko": "심리학",
        "name_en": "Psychology",
        "id": "INTRO_PSY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구조(Structure)를 분석 = 의식의 기본 요소를 쪼개서 분석",
      "differential": "구조주의는 의식의 '구조(무엇)'에, 기능주의는 의식의 '기능(왜, 어떻게)'에 관심을 둔다.",
      "key_point": "내성법이라는 방법론적 한계로 인해 쇠퇴했지만, 심리학을 과학으로 정립한 역사적 의의가 크다.",
      "common_mistake": "분트가 '구조주의'라는 용어를 직접 사용한 것이 아니라, 제자 티치너가 명명했다."
    }
  },
  {
    "id": "INTRO_FUNC_003",
    "terminology": "기능주의 (Functionalism)",
    "terminology_ko": "기능주의",
    "terminology_en": "Functionalism",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "의식의 구조보다 기능에 초점을 맞추어, 정신과정이 유기체의 환경 적응에 어떻게 기여하는지를 연구한 심리학 학파이다.",
    "definition_en": "A school of psychology that focused on the function rather than structure of consciousness, studying how mental processes help organisms adapt to their environment.",
    "significance": "다윈의 진화론에 영향을 받아 심리학의 연구 범위를 확장하였으며, 응용심리학과 교육심리학 발전의 토대가 되었다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 제임스",
        "name_en": "William James",
        "contribution": "기능주의의 핵심 인물로, 의식의 흐름(stream of consciousness) 개념을 제시하고 실용적 관점을 강조했다."
      },
      {
        "name_ko": "존 듀이",
        "name_en": "John Dewey",
        "contribution": "기능주의를 교육 분야에 적용하여 진보적 교육운동의 이론적 기반을 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조주의",
        "name_en": "Structuralism",
        "id": "INTRO_STRU_002"
      },
      {
        "name_ko": "진화심리학",
        "name_en": "Evolutionary Psychology",
        "id": "INTRO_EVOL_021"
      },
      {
        "name_ko": "심리학",
        "name_en": "Psychology",
        "id": "INTRO_PSY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기능(Function) = '왜' 그런 마음이 존재하는가에 초점",
      "differential": "구조주의가 의식의 '내용'을 분석한 반면, 기능주의는 의식의 '목적과 기능'을 탐구했다.",
      "key_point": "다윈의 자연선택 이론에 영향을 받아 적응적 기능을 강조한 점이 핵심이다.",
      "common_mistake": "기능주의가 하나의 통합된 이론 체계였다고 오해하기 쉽지만, 실제로는 다양한 관점의 느슨한 연합이었다."
    }
  },
  {
    "id": "INTRO_BEHV_004",
    "terminology": "행동주의 (Behaviorism)",
    "terminology_ko": "행동주의",
    "terminology_en": "Behaviorism",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "관찰 가능한 행동만을 심리학의 연구 대상으로 삼고, 자극과 반응의 관계를 통해 행동을 설명하고자 한 심리학 학파이다.",
    "definition_en": "A school of psychology that defines psychology as the scientific study of observable behavior, explaining behavior through stimulus-response relationships while rejecting the study of unobservable mental processes.",
    "significance": "심리학을 주관적 내성에서 객관적 과학으로 전환시키는 데 기여했으며, 학습이론 및 행동치료의 발전에 결정적 역할을 했다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "행동주의의 창시자로, 1913년 '행동주의자가 본 심리학' 선언문을 발표하여 관찰 가능한 행동만을 연구 대상으로 주장했다."
      },
      {
        "name_ko": "버러스 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "급진적 행동주의를 발전시키고, 조작적 조건형성의 원리를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조주의",
        "name_en": "Structuralism",
        "id": "INTRO_STRU_002"
      },
      {
        "name_ko": "인지심리학",
        "name_en": "Cognitive Psychology",
        "id": "INTRO_COGN_007"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "INTRO_OPDF_020"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_BEHV_SUB_01",
        "name": "고전적 행동주의 (Classical Behaviorism)",
        "name_ko": "고전적 행동주의",
        "name_en": "Classical Behaviorism",
        "definition": "왓슨이 주창한 초기 행동주의로, 모든 행동을 자극-반응(S-R) 관계로 설명한다."
      },
      {
        "id": "INTRO_BEHV_SUB_02",
        "name": "급진적 행동주의 (Radical Behaviorism)",
        "name_ko": "급진적 행동주의",
        "name_en": "Radical Behaviorism",
        "definition": "스키너가 발전시킨 행동주의로, 사적 사건(private events)도 행동으로 간주하되 내적 원인으로 보지 않는다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "Behavior(행동)만 본다 = 관찰 가능한 것만 과학적 연구 대상",
      "differential": "행동주의는 관찰 가능한 '행동'에만, 인지심리학은 관찰 불가능한 '정신과정'에도 관심을 둔다.",
      "key_point": "왓슨(1913)의 선언이 시작점이며, 스키너의 조작적 조건형성으로 정점에 이르렀다.",
      "common_mistake": "스키너의 급진적 행동주의는 내적 사건의 '존재'를 부정한 것이 아니라, 그것이 행동의 '원인'이라는 설명을 거부한 것이다."
    }
  },
  {
    "id": "INTRO_PSYA_005",
    "terminology": "정신분석 (Psychoanalysis)",
    "terminology_ko": "정신분석",
    "terminology_en": "Psychoanalysis",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "무의식적 동기와 갈등이 인간의 행동, 사고, 감정을 결정한다고 보는 이론 체계이자 치료법으로, 자유연상, 꿈의 해석 등을 통해 무의식을 탐색한다.",
    "definition_en": "A theory and therapeutic approach that emphasizes the role of unconscious motives and conflicts in determining behavior, thoughts, and feelings, using techniques such as free association and dream interpretation to explore the unconscious.",
    "significance": "무의식의 개념을 체계화하여 심리학, 정신의학, 문화 전반에 걸쳐 지대한 영향을 미쳤으며, 심리치료의 기원이 되었다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석의 창시자로, 무의식, 이드-자아-초자아 구조, 심리성적 발달단계 등의 핵심 개념을 제시했다."
      },
      {
        "name_ko": "카를 융",
        "name_en": "Carl Jung",
        "contribution": "분석심리학을 창시하여 집단무의식과 원형 개념을 도입했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인본주의 심리학",
        "name_en": "Humanistic Psychology",
        "id": "INTRO_HUMN_006"
      },
      {
        "name_ko": "행동주의",
        "name_en": "Behaviorism",
        "id": "INTRO_BEHV_004"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "INTRO_CASE_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Psycho(마음) + Analysis(분석) = 무의식의 마음을 분석",
      "differential": "행동주의가 관찰 가능한 행동에 초점을 둔 반면, 정신분석은 관찰 불가능한 무의식적 과정에 초점을 둔다.",
      "key_point": "프로이트가 제시한 '무의식'의 개념이 핵심이며, 과학적 검증 가능성에 대한 비판이 주요 논쟁점이다.",
      "common_mistake": "정신분석을 단순한 상담 기법으로 오해하기 쉽지만, 인간 본성에 대한 포괄적 이론 체계이다."
    }
  },
  {
    "id": "INTRO_HUMN_006",
    "terminology": "인본주의 심리학 (Humanistic Psychology)",
    "terminology_ko": "인본주의 심리학",
    "terminology_en": "Humanistic Psychology",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "인간의 자유의지, 자아실현 욕구, 개인적 성장 가능성을 강조하며, 행동주의와 정신분석에 대한 대안으로 등장한 '제3세력' 심리학이다.",
    "definition_en": "A psychological perspective emphasizing free will, self-actualization, and personal growth potential, emerging as the 'third force' in psychology as an alternative to behaviorism and psychoanalysis.",
    "significance": "인간의 긍정적 측면과 잠재력에 주목하여 상담심리학, 긍정심리학의 발전에 기여했으며, 내담자 중심 치료의 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "욕구위계이론과 자아실현(self-actualization) 개념을 제시하여 인본주의 심리학의 이론적 토대를 마련했다."
      },
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심 치료(person-centered therapy)를 개발하고, 무조건적 긍정적 존중의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신분석",
        "name_en": "Psychoanalysis",
        "id": "INTRO_PSYA_005"
      },
      {
        "name_ko": "행동주의",
        "name_en": "Behaviorism",
        "id": "INTRO_BEHV_004"
      },
      {
        "name_ko": "심리학",
        "name_en": "Psychology",
        "id": "INTRO_PSY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "제3세력: (1)정신분석 → (2)행동주의 → (3)인본주의",
      "differential": "정신분석이 무의식적 갈등을, 행동주의가 환경적 조건을 강조한 반면, 인본주의는 의식적 경험과 자유의지를 강조한다.",
      "key_point": "'제3세력(third force)'으로서 행동주의와 정신분석 모두에 대한 반발로 등장했다는 역사적 맥락이 핵심이다.",
      "common_mistake": "인본주의가 과학적 연구를 완전히 거부한 것은 아니지만, 주관적 경험 강조로 인해 실증 연구가 상대적으로 부족하다는 비판을 받는다."
    }
  },
  {
    "id": "INTRO_COGN_007",
    "terminology": "인지심리학 (Cognitive Psychology)",
    "terminology_ko": "인지심리학",
    "terminology_en": "Cognitive Psychology",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "지각, 기억, 사고, 언어, 문제해결 등 정신적 과정을 과학적으로 연구하는 심리학 분야로, 인간의 마음을 정보처리 체계로 이해한다.",
    "definition_en": "The scientific study of mental processes including perception, memory, thinking, language, and problem-solving, understanding the human mind as an information-processing system.",
    "significance": "1950~60년대 '인지 혁명'을 통해 행동주의의 한계를 극복하고 현대 심리학의 지배적 패러다임이 되었으며, 인지과학의 핵심 분야이다.",
    "key_researchers": [
      {
        "name_ko": "울릭 나이서",
        "name_en": "Ulric Neisser",
        "contribution": "1967년 'Cognitive Psychology'를 출간하여 인지심리학이라는 분야의 이름과 정체성을 확립했다."
      },
      {
        "name_ko": "노엄 촘스키",
        "name_en": "Noam Chomsky",
        "contribution": "스키너의 언어행동론을 비판하여 인지 혁명의 촉발에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동주의",
        "name_en": "Behaviorism",
        "id": "INTRO_BEHV_004"
      },
      {
        "name_ko": "내성법",
        "name_en": "Introspection",
        "id": "INTRO_INTR_008"
      },
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지(Cognition) = 정보를 처리하는 마음의 과정",
      "differential": "행동주의가 '블랙박스' 내부를 무시한 반면, 인지심리학은 자극과 반응 사이의 '정신과정'을 과학적으로 연구한다.",
      "key_point": "1950~60년대 '인지 혁명(cognitive revolution)'을 통해 행동주의를 대체한 패러다임이라는 점이 핵심이다.",
      "common_mistake": "인지심리학은 내성법으로의 회귀가 아니라, 실험적 방법으로 정신과정을 '간접적으로' 연구한다는 점에서 구조주의와 다르다."
    }
  },
  {
    "id": "INTRO_INTR_008",
    "terminology": "내성법 (Introspection)",
    "terminology_ko": "내성법",
    "terminology_en": "Introspection",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "자신의 의식적 경험을 체계적으로 관찰하고 보고하는 연구 방법으로, 구조주의 심리학의 주된 연구 도구였다.",
    "definition_en": "A research method involving the systematic observation and reporting of one's own conscious experiences, used as the primary tool of structuralist psychology.",
    "significance": "심리학 초기에 의식 연구의 유일한 방법이었으나, 주관성과 재현 불가능성이라는 한계로 인해 행동주의 대두의 계기가 되었다.",
    "key_researchers": [
      {
        "name_ko": "빌헬름 분트",
        "name_en": "Wilhelm Wundt",
        "contribution": "훈련된 관찰자에 의한 실험적 내성법을 도입하여 의식의 요소를 분석하고자 했다."
      },
      {
        "name_ko": "에드워드 티치너",
        "name_en": "Edward Titchener",
        "contribution": "분석적 내성법을 더욱 엄격하게 체계화하여 의식 경험의 기본 요소를 분류하고자 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조주의",
        "name_en": "Structuralism",
        "id": "INTRO_STRU_002"
      },
      {
        "name_ko": "행동주의",
        "name_en": "Behaviorism",
        "id": "INTRO_BEHV_004"
      },
      {
        "name_ko": "심리학",
        "name_en": "Psychology",
        "id": "INTRO_PSY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내성(內省) = 안(內)을 살핀다(省) = 자기 마음속을 들여다봄",
      "differential": "내성법은 '주관적 자기보고'에 의존하는 반면, 실험법은 '객관적 관찰과 측정'에 기반한다.",
      "key_point": "주관성, 비재현성이라는 방법론적 한계가 행동주의 등장의 직접적 계기가 되었다.",
      "common_mistake": "내성법은 단순한 자기성찰이 아니라, 훈련된 관찰자가 통제된 조건에서 수행하는 '체계적 방법'이었다."
    }
  },
  {
    "id": "INTRO_INDV_009",
    "terminology": "독립변인 (Independent Variable)",
    "terminology_ko": "독립변인",
    "terminology_en": "Independent Variable",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "실험에서 연구자가 의도적으로 조작하거나 변화시키는 변인으로, 종속변인에 미치는 효과를 검증하기 위해 체계적으로 변경된다.",
    "definition_en": "The variable in an experiment that the researcher deliberately manipulates or changes to examine its effect on the dependent variable.",
    "significance": "실험 설계의 핵심 요소로, 독립변인의 적절한 조작이 인과관계 추론의 전제조건이 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "현대 실험설계법과 통계적 추론의 기틀을 마련하여 변인 통제의 체계적 방법론을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "INTRO_DEPV_010"
      },
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "INTRO_CTRL_011"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "INTRO_OPDF_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립변인 = 연구자가 '독립적으로' 조작하는 변인 (원인)",
      "differential": "독립변인은 연구자가 '조작'하는 것이고, 종속변인은 그에 따라 '측정'되는 것이다.",
      "key_point": "독립변인은 '원인'에 해당하며, 연구자가 능동적으로 조작한다는 점이 핵심이다.",
      "common_mistake": "상관연구에서는 변인을 직접 조작하지 않으므로 엄밀한 의미의 독립변인이 아니다. 이 경우 '예측변인(predictor variable)'이라는 용어가 더 적절하다."
    }
  },
  {
    "id": "INTRO_DEPV_010",
    "terminology": "종속변인 (Dependent Variable)",
    "terminology_ko": "종속변인",
    "terminology_en": "Dependent Variable",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "실험에서 독립변인의 변화에 따라 측정되는 반응 또는 결과 변인으로, 독립변인의 효과를 반영한다.",
    "definition_en": "The variable in an experiment that is measured as a response or outcome, reflecting the effect of the independent variable.",
    "significance": "연구 가설의 검증 결과를 직접 보여주는 측정치로, 정확하고 신뢰로운 측정이 연구의 질을 좌우한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "실험설계에서 변인 간 관계를 체계적으로 분석하는 분산분석(ANOVA) 등의 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "INTRO_INDV_009"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "INTRO_OPDF_020"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTRO_RELI_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "종속변인 = 독립변인에 '종속'되어 변하는 변인 (결과)",
      "differential": "종속변인은 '측정'하는 것이고, 독립변인은 '조작'하는 것이다.",
      "key_point": "종속변인의 조작적 정의가 명확해야 측정이 정확하고, 연구 결과의 해석이 타당해진다.",
      "common_mistake": "종속변인이 여러 개인 경우, 각각에 대해 별도의 분석이 필요하며 다중비교 문제에 유의해야 한다."
    }
  },
  {
    "id": "INTRO_CTRL_011",
    "terminology": "통제집단 (Control Group)",
    "terminology_ko": "통제집단",
    "terminology_en": "Control Group",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "실험에서 독립변인의 처치를 받지 않는 비교 집단으로, 실험집단과 비교하여 독립변인의 효과를 평가하는 기준선을 제공한다.",
    "definition_en": "The group in an experiment that does not receive the experimental treatment, serving as a baseline for comparison to evaluate the effect of the independent variable.",
    "significance": "실험 결과가 독립변인에 의한 것인지 다른 요인에 의한 것인지를 구분하는 데 필수적인 비교 기준을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "실험설계에서 통제집단의 필요성을 통계적으로 정당화하고 무선화(randomization) 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험집단",
        "name_en": "Experimental Group",
        "id": "INTRO_EXPG_012"
      },
      {
        "name_ko": "무선배정",
        "name_en": "Random Assignment",
        "id": "INTRO_RAND_013"
      },
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "INTRO_PLAC_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통제(Control) = 처치 없이 '통제'된 상태의 기준선",
      "differential": "통제집단은 처치를 받지 '않는' 집단이고, 실험집단은 처치를 '받는' 집단이다.",
      "key_point": "통제집단이 없으면 실험 결과가 처치 효과인지 자연적 변화인지 구분할 수 없다.",
      "common_mistake": "통제집단에 아무것도 하지 않는 것이 아니라, 위약(placebo) 처치를 하는 경우도 많다."
    }
  },
  {
    "id": "INTRO_EXPG_012",
    "terminology": "실험집단 (Experimental Group)",
    "terminology_ko": "실험집단",
    "terminology_en": "Experimental Group",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "실험에서 독립변인의 처치를 받는 집단으로, 통제집단과 비교하여 처치의 효과를 검증하는 데 사용된다.",
    "definition_en": "The group in an experiment that receives the experimental treatment, used to test the effect of the treatment by comparison with the control group.",
    "significance": "독립변인의 효과를 직접 검증하는 대상 집단으로, 통제집단과의 체계적 비교를 통해 인과관계를 추론할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "실험집단과 통제집단의 비교를 위한 통계적 검증 방법론을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "INTRO_CTRL_011"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "INTRO_INDV_009"
      },
      {
        "name_ko": "무선배정",
        "name_en": "Random Assignment",
        "id": "INTRO_RAND_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실험집단 = 실험 처치를 '실제로' 받는 집단",
      "differential": "실험집단은 독립변인의 처치를 '받고', 통제집단은 받지 '않는다'.",
      "key_point": "실험집단과 통제집단은 독립변인 처치 여부만 다르고 나머지 조건은 동일해야 한다.",
      "common_mistake": "실험 설계에 따라 실험집단이 여러 개일 수 있다(예: 저용량, 고용량 집단 등)."
    }
  },
  {
    "id": "INTRO_RAND_013",
    "terminology": "무선배정 (Random Assignment)",
    "terminology_ko": "무선배정",
    "terminology_en": "Random Assignment",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "연구 참여자를 실험집단과 통제집단에 무작위로 배정하는 절차로, 집단 간 사전 차이를 최소화하여 내적 타당도를 확보한다.",
    "definition_en": "The procedure of assigning participants to experimental and control groups by chance, minimizing pre-existing differences between groups to ensure internal validity.",
    "significance": "혼입변인의 영향을 통제하여 인과관계 추론을 가능하게 하는 실험 설계의 핵심 원리이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "무선화(randomization)의 통계적 원리를 확립하여 현대 실험설계의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험집단",
        "name_en": "Experimental Group",
        "id": "INTRO_EXPG_012"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "INTRO_CTRL_011"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "INTRO_SAMP_017"
      },
      {
        "name_ko": "이중맹검법",
        "name_en": "Double-Blind Procedure",
        "id": "INTRO_DBLB_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무선(Random) 배정 = '무'작위로 '선'택하여 배정",
      "differential": "무선배정(random assignment)은 집단 '배정'의 무작위화이고, 무선표집(random sampling)은 표본 '선발'의 무작위화이다.",
      "key_point": "무선배정은 '내적 타당도'를, 무선표집은 '외적 타당도(일반화 가능성)'를 높인다.",
      "common_mistake": "무선배정(random assignment)과 무선표집(random sampling)을 혼동하는 것이 가장 흔한 실수이다."
    }
  },
  {
    "id": "INTRO_CORR_014",
    "terminology": "상관연구 (Correlational Study)",
    "terminology_ko": "상관연구",
    "terminology_en": "Correlational Study",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "두 변인 간의 관련성(상관관계)의 방향과 강도를 측정하는 연구 방법으로, 변인을 직접 조작하지 않고 자연적으로 발생하는 관계를 관찰한다.",
    "definition_en": "A research method that measures the direction and strength of the relationship (correlation) between two variables without manipulating them, observing naturally occurring relationships.",
    "significance": "윤리적 또는 현실적으로 실험이 불가능한 상황에서 변인 간 관계를 파악할 수 있게 하며, 예측에 유용하다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "피어슨 상관계수(r)를 개발하여 두 변인 간의 선형 관계를 수량화하는 방법을 제공했다."
      },
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "회귀와 상관의 기본 개념을 도입하여 상관연구의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "INTRO_INDV_009"
      },
      {
        "name_ko": "통계적 유의성",
        "name_en": "Statistical Significance",
        "id": "INTRO_STAT_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상관 = '서로(相) 관련(關)' → 관련성만 확인, 인과관계는 NO",
      "differential": "상관연구는 변인 간 '관계'만 파악하고 '인과관계'를 추론할 수 없지만, 실험법은 인과관계 추론이 가능하다.",
      "key_point": "'상관은 인과가 아니다(Correlation does not imply causation)'는 대원칙을 반드시 기억해야 한다.",
      "common_mistake": "높은 상관이 발견되면 인과관계가 있다고 결론짓는 오류를 범하기 쉽다. 제3변인의 존재 가능성을 항상 고려해야 한다."
    }
  },
  {
    "id": "INTRO_DBLB_015",
    "terminology": "이중맹검법 (Double-Blind Procedure)",
    "terminology_ko": "이중맹검법",
    "terminology_en": "Double-Blind Procedure",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "연구 참여자와 연구자 모두가 각 참여자의 실험/통제 집단 배정 여부를 모르게 하는 실험 절차로, 기대 효과와 실험자 편향을 통제한다.",
    "definition_en": "An experimental procedure in which neither the participants nor the researchers know which participants are in the experimental or control group, controlling for expectancy effects and experimenter bias.",
    "significance": "위약효과와 실험자 편향을 동시에 통제하여 연구 결과의 내적 타당도를 높이는 가장 강력한 방법 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "오스틴 브래드포드 힐",
        "name_en": "Austin Bradford Hill",
        "contribution": "임상시험에서 이중맹검법의 체계적 적용을 확립하여 연구 방법론의 표준을 높였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "INTRO_PLAC_016"
      },
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      },
      {
        "name_ko": "무선배정",
        "name_en": "Random Assignment",
        "id": "INTRO_RAND_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이중(Double) 맹검(Blind) = 두 쪽 다 눈을 가림 → 참여자도 연구자도 모름",
      "differential": "단일맹검법은 참여자만 모르지만, 이중맹검법은 참여자와 연구자 '모두' 모른다.",
      "key_point": "참여자의 기대효과(위약효과)와 연구자의 편향(실험자 효과)을 '동시에' 통제한다.",
      "common_mistake": "이중맹검이 항상 가능한 것은 아니다. 예를 들어 심리치료 연구에서는 치료자가 치료 방법을 알 수밖에 없다."
    }
  },
  {
    "id": "INTRO_PLAC_016",
    "terminology": "위약효과 (Placebo Effect)",
    "terminology_ko": "위약효과",
    "terminology_en": "Placebo Effect",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "치료 효과가 없는 가짜 처치(위약)를 받았음에도 참여자의 기대나 믿음으로 인해 실제 증상이 호전되는 현상이다.",
    "definition_en": "A phenomenon in which participants experience real improvement in symptoms after receiving an inert treatment (placebo), due to their expectations or beliefs about the treatment.",
    "significance": "인간의 기대와 신념이 실제 신체적, 심리적 변화를 일으킬 수 있음을 보여주며, 이를 통제하는 것이 과학적 연구의 필수 과제이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 비처",
        "name_en": "Henry K. Beecher",
        "contribution": "1955년 'The Powerful Placebo'를 발표하여 위약효과의 보편성과 중요성을 학술적으로 부각시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이중맹검법",
        "name_en": "Double-Blind Procedure",
        "id": "INTRO_DBLB_015"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "INTRO_CTRL_011"
      },
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "위약(Placebo, '기쁘게 하리라') = 가짜 약인데 효과가 나타남",
      "differential": "위약효과는 참여자의 '기대'에서 비롯되고, 실험자 효과는 연구자의 '기대'에서 비롯된다.",
      "key_point": "위약효과를 통제하기 위해 통제집단에 위약을 투여하고, 이중맹검법을 사용한다.",
      "common_mistake": "위약효과가 '가짜 효과'라고 생각하기 쉽지만, 참여자가 경험하는 증상 개선은 실제로 발생한다."
    }
  },
  {
    "id": "INTRO_SAMP_017",
    "terminology": "표본 (Sample)",
    "terminology_ko": "표본",
    "terminology_en": "Sample",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "연구를 위해 모집단에서 선택된 하위 집합으로, 이 표본에서 얻은 결과를 모집단 전체로 일반화하고자 한다.",
    "definition_en": "A subset selected from a population for the purpose of research, from which findings are intended to be generalized to the broader population.",
    "significance": "모집단 전체를 연구하는 것이 현실적으로 불가능하기 때문에 표본 추출은 모든 연구의 기본이며, 표본의 대표성이 연구 결과의 일반화 가능성을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "표본조사 이론을 체계화하고, 신뢰구간 개념을 도입하여 표본에서 모집단을 추론하는 방법론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선배정",
        "name_en": "Random Assignment",
        "id": "INTRO_RAND_013"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTRO_VALD_019"
      },
      {
        "name_ko": "통계적 유의성",
        "name_en": "Statistical Significance",
        "id": "INTRO_STAT_028"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_SAMP_SUB_01",
        "name": "무선표본 (Random Sample)",
        "name_ko": "무선표본",
        "name_en": "Random Sample",
        "definition": "모집단의 모든 구성원이 표본에 선발될 동등한 확률을 갖는 표본 추출 방법이다."
      },
      {
        "id": "INTRO_SAMP_SUB_02",
        "name": "편의표본 (Convenience Sample)",
        "name_ko": "편의표본",
        "name_en": "Convenience Sample",
        "definition": "접근이 용이한 대상을 선발하는 비확률 표집 방법으로, 대표성이 제한될 수 있다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "표본(Sample) = 모집단(Population)의 '작은 대표'",
      "differential": "표본은 '일부'이고, 모집단은 연구자가 일반화하고자 하는 '전체'이다.",
      "key_point": "대표성 있는 표본을 위해서는 무선표집(random sampling)이 이상적이다.",
      "common_mistake": "무선표집(random sampling)과 무선배정(random assignment)은 다른 개념이다. 전자는 표본 '선발', 후자는 집단 '배정'에 관한 것이다."
    }
  },
  {
    "id": "INTRO_RELI_018",
    "terminology": "신뢰도 (Reliability)",
    "terminology_ko": "신뢰도",
    "terminology_en": "Reliability",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "측정 도구가 동일한 대상을 반복 측정했을 때 일관된 결과를 산출하는 정도로, 측정의 안정성과 일관성을 나타낸다.",
    "definition_en": "The degree to which a measurement instrument yields consistent results when repeatedly measuring the same target, indicating the stability and consistency of measurement.",
    "significance": "타당한 측정의 필수 전제 조건으로, 신뢰도가 낮으면 타당도도 확보할 수 없다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "고전검사이론(CTT)을 발전시키고, 스피어만-브라운 공식 등 신뢰도 추정 방법을 개발했다."
      },
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "크론바흐 알파 계수를 개발하여 내적 일관성 신뢰도 추정의 표준 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTRO_VALD_019"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "INTRO_OPDF_020"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "INTRO_DEPV_010"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_RELI_SUB_01",
        "name": "검사-재검사 신뢰도 (Test-Retest Reliability)",
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "definition": "동일한 검사를 동일한 대상에게 시간 간격을 두고 두 번 실시하여 두 점수 간의 상관으로 추정하는 신뢰도이다."
      },
      {
        "id": "INTRO_RELI_SUB_02",
        "name": "내적 일관성 신뢰도 (Internal Consistency Reliability)",
        "name_ko": "내적 일관성 신뢰도",
        "name_en": "Internal Consistency Reliability",
        "definition": "검사 문항들이 동일한 구성개념을 얼마나 일관되게 측정하는지를 나타내는 신뢰도로, 크론바흐 알파 등으로 추정한다."
      },
      {
        "id": "INTRO_RELI_SUB_03",
        "name": "평정자 간 신뢰도 (Inter-Rater Reliability)",
        "name_ko": "평정자 간 신뢰도",
        "name_en": "Inter-Rater Reliability",
        "definition": "두 명 이상의 평정자가 동일 대상을 평가할 때 평정 결과의 일치도를 나타내는 신뢰도이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "신뢰(Trust) = 일관(Consistent) → 반복해도 같은 결과 = 신뢰할 수 있는 측정",
      "differential": "신뢰도는 '일관성(consistency)'의 문제이고, 타당도는 '정확성(accuracy)'의 문제이다.",
      "key_point": "신뢰도는 타당도의 '필요조건'이지만 '충분조건'은 아니다. 즉, 신뢰도가 높아도 타당도가 낮을 수 있다.",
      "common_mistake": "신뢰도가 높으면 자동으로 타당도도 높다고 착각하는 경우가 많다. 신뢰롭게 '잘못된 것'을 측정할 수도 있다."
    }
  },
  {
    "id": "INTRO_VALD_019",
    "terminology": "타당도 (Validity)",
    "terminology_ko": "타당도",
    "terminology_en": "Validity",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "측정 도구나 연구가 측정하고자 하는 것을 실제로 정확하게 측정하는 정도로, 연구 결과의 의미와 해석의 적절성을 나타낸다.",
    "definition_en": "The degree to which a measurement instrument or study actually measures what it intends to measure, indicating the appropriateness of the meaning and interpretation of research results.",
    "significance": "연구 결과의 의미와 적용 가능성을 결정하는 가장 중요한 기준으로, 내적 타당도와 외적 타당도 모두 확보해야 한다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "구성타당도 개념을 체계화하고, 타당도를 단일 수치가 아닌 지속적 검증 과정으로 재개념화했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "내적 타당도와 외적 타당도의 구분을 명확히 하고, 타당도 위협 요인을 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTRO_RELI_018"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "INTRO_OPDF_020"
      },
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_VALD_SUB_01",
        "name": "내적 타당도 (Internal Validity)",
        "name_ko": "내적 타당도",
        "name_en": "Internal Validity",
        "definition": "연구에서 독립변인의 조작이 종속변인의 변화를 실제로 유발했다고 확신할 수 있는 정도이다."
      },
      {
        "id": "INTRO_VALD_SUB_02",
        "name": "외적 타당도 (External Validity)",
        "name_ko": "외적 타당도",
        "name_en": "External Validity",
        "definition": "연구 결과를 다른 상황, 사람, 시간으로 일반화할 수 있는 정도이다."
      },
      {
        "id": "INTRO_VALD_SUB_03",
        "name": "구성타당도 (Construct Validity)",
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "definition": "측정 도구가 이론적 구성개념을 실제로 측정하고 있는 정도이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "타당(Valid) = 과녁의 '중심'을 맞추는 것 → 측정하려는 것을 '정확히' 측정",
      "differential": "신뢰도는 '일관성(과녁에 모여 있음)'이고, 타당도는 '정확성(과녁 중심에 맞음)'이다.",
      "key_point": "내적 타당도(인과관계)와 외적 타당도(일반화)의 구분이 시험에서 자주 출제된다.",
      "common_mistake": "타당도가 높으면 신뢰도도 높지만, 신뢰도가 높다고 타당도가 높은 것은 아니다(과녁 비유)."
    }
  },
  {
    "id": "INTRO_OPDF_020",
    "terminology": "조작적 정의 (Operational Definition)",
    "terminology_ko": "조작적 정의",
    "terminology_en": "Operational Definition",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "추상적 개념을 측정 가능한 절차나 조작으로 구체적으로 정의하는 것으로, 연구에서 변인을 어떻게 측정하거나 조작할 것인지를 명시한다.",
    "definition_en": "The concrete definition of an abstract concept in terms of measurable procedures or operations, specifying how variables will be measured or manipulated in research.",
    "significance": "연구의 재현 가능성과 객관성을 보장하는 핵심 절차로, 다른 연구자가 동일한 방법으로 변인을 측정할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "퍼시 브리지먼",
        "name_en": "Percy Bridgman",
        "contribution": "조작주의(operationism)를 제안하여, 과학적 개념은 그것을 측정하는 조작으로 정의되어야 한다고 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "INTRO_INDV_009"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "INTRO_DEPV_010"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTRO_RELI_018"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTRO_VALD_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조작적(Operational) = '조작(操作, 실제 행하는 절차)'으로 정의",
      "differential": "개념적 정의는 사전적/이론적 설명이고, 조작적 정의는 '어떻게 측정할 것인가'에 대한 구체적 절차이다.",
      "key_point": "예: '불안'의 조작적 정의 → '상태-특성 불안 척도(STAI)의 총점'으로 구체화.",
      "common_mistake": "하나의 개념에 대해 여러 조작적 정의가 가능하다. 예를 들어 '공격성'을 관찰된 때리기 횟수, 자기보고 척도 점수, 호르몬 수치 등으로 다양하게 정의할 수 있다."
    }
  },
  {
    "id": "INTRO_EVOL_021",
    "terminology": "진화심리학 (Evolutionary Psychology)",
    "terminology_ko": "진화심리학",
    "terminology_en": "Evolutionary Psychology",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "자연선택의 원리를 적용하여 인간의 심리적 특성과 행동이 적응적 기능을 위해 진화했다고 설명하는 심리학적 관점이다.",
    "definition_en": "A psychological perspective that applies principles of natural selection to explain human psychological traits and behaviors as having evolved for adaptive functions.",
    "significance": "인간 행동의 보편적 패턴을 진화적 맥락에서 설명함으로써, 짝짓기 전략, 공포, 사회적 행동 등에 대한 새로운 이해를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "레다 코스미데스",
        "name_en": "Leda Cosmides",
        "contribution": "존 투비와 함께 진화심리학의 이론적 틀을 체계화하고, 인간 마음이 영역 특수적 모듈로 구성된다고 주장했다."
      },
      {
        "name_ko": "데이비드 버스",
        "name_en": "David Buss",
        "contribution": "진화심리학적 관점에서 인간의 짝짓기 전략, 질투, 공격성에 대한 실증 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기능주의",
        "name_en": "Functionalism",
        "id": "INTRO_FUNC_003"
      },
      {
        "name_ko": "심리학",
        "name_en": "Psychology",
        "id": "INTRO_PSY_001"
      },
      {
        "name_ko": "관찰법",
        "name_en": "Observational Method",
        "id": "INTRO_OBSV_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "진화(Evolution) + 심리학 = 다윈의 자연선택으로 마음을 설명",
      "differential": "기능주의가 심리적 기능의 '개인적 적응'에 초점을 두었다면, 진화심리학은 '종의 진화적 적응'에 초점을 둔다.",
      "key_point": "인간의 심리 기제가 현재 환경이 아닌 '진화적 적응 환경(EEA)'에서 형성되었다는 점이 핵심 전제이다.",
      "common_mistake": "진화심리학이 모든 행동을 유전으로 결정된다고 주장하는 것이 아니라, 유전과 환경의 상호작용을 전제로 한다."
    }
  },
  {
    "id": "INTRO_EXPM_022",
    "terminology": "실험법 (Experimental Method)",
    "terminology_ko": "실험법",
    "terminology_en": "Experimental Method",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "독립변인을 체계적으로 조작하고, 외생변인을 통제하면서, 종속변인의 변화를 측정하여 변인 간 인과관계를 검증하는 연구 방법이다.",
    "definition_en": "A research method that systematically manipulates independent variables while controlling extraneous variables and measuring changes in dependent variables to test causal relationships.",
    "significance": "인과관계를 추론할 수 있는 유일한 연구 방법으로, 과학적 심리학의 핵심 방법론이다.",
    "key_researchers": [
      {
        "name_ko": "빌헬름 분트",
        "name_en": "Wilhelm Wundt",
        "contribution": "심리학에 실험법을 최초로 도입하여 심리학을 실험과학으로 정립했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "현대 실험설계의 통계적 기초를 확립하고, 무선화와 요인 설계 등의 방법론을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "INTRO_INDV_009"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "INTRO_DEPV_010"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "INTRO_CORR_014"
      },
      {
        "name_ko": "무선배정",
        "name_en": "Random Assignment",
        "id": "INTRO_RAND_013"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_EXPM_SUB_01",
        "name": "실험실 실험 (Laboratory Experiment)",
        "name_ko": "실험실 실험",
        "name_en": "Laboratory Experiment",
        "definition": "통제된 실험실 환경에서 수행하는 실험으로, 내적 타당도가 높지만 외적 타당도가 제한될 수 있다."
      },
      {
        "id": "INTRO_EXPM_SUB_02",
        "name": "현장 실험 (Field Experiment)",
        "name_ko": "현장 실험",
        "name_en": "Field Experiment",
        "definition": "자연스러운 환경에서 수행하는 실험으로, 외적 타당도는 높지만 변인 통제가 어려울 수 있다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "실험 = 조작(Manipulate) + 통제(Control) + 측정(Measure) → 인과관계",
      "differential": "실험법은 변인을 '조작'하여 인과관계를 검증하고, 상관연구는 변인을 '관찰'하여 관련성만 파악한다.",
      "key_point": "인과관계 추론이 가능한 유일한 방법이며, 이를 위해 조작, 통제, 무선배정이 필수적이다.",
      "common_mistake": "준실험(quasi-experiment)은 무선배정이 없으므로 엄밀한 의미의 실험이 아니며, 인과 추론에 제한이 있다."
    }
  },
  {
    "id": "INTRO_OBSV_023",
    "terminology": "관찰법 (Observational Method)",
    "terminology_ko": "관찰법",
    "terminology_en": "Observational Method",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "연구자가 행동을 자연 상태에서 체계적으로 관찰하고 기록하는 연구 방법으로, 변인을 조작하지 않고 있는 그대로의 행동을 연구한다.",
    "definition_en": "A research method in which the researcher systematically observes and records behavior in natural settings without manipulating variables, studying behavior as it naturally occurs.",
    "significance": "실제 환경에서의 자연스러운 행동을 연구할 수 있어 외적 타당도가 높으며, 실험이 불가능하거나 비윤리적인 주제에 대한 연구를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "제인 구달",
        "name_en": "Jane Goodall",
        "contribution": "침팬지의 자연관찰 연구를 통해 자연적 관찰법의 과학적 가치를 입증했다."
      },
      {
        "name_ko": "콘라트 로렌츠",
        "name_en": "Konrad Lorenz",
        "contribution": "동물행동의 자연관찰을 통해 각인(imprinting) 등의 현상을 발견하고 동물행동학을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "INTRO_CASE_024"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "INTRO_CORR_014"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_OBSV_SUB_01",
        "name": "자연관찰 (Naturalistic Observation)",
        "name_ko": "자연관찰",
        "name_en": "Naturalistic Observation",
        "definition": "자연적 환경에서 연구 대상의 행동을 관찰자가 개입 없이 관찰하고 기록하는 방법이다."
      },
      {
        "id": "INTRO_OBSV_SUB_02",
        "name": "참여관찰 (Participant Observation)",
        "name_ko": "참여관찰",
        "name_en": "Participant Observation",
        "definition": "연구자가 관찰 대상 집단에 직접 참여하면서 행동을 관찰하는 방법이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "관찰 = '보기만' 한다 → 조작 없이 있는 그대로",
      "differential": "관찰법은 변인을 '조작하지 않고' 행동을 관찰하지만, 실험법은 변인을 '조작'하여 효과를 검증한다.",
      "key_point": "외적 타당도는 높지만, 인과관계를 추론할 수 없고 관찰자 편향의 위험이 있다.",
      "common_mistake": "자연관찰에서 연구자의 존재가 관찰 대상의 행동을 변화시킬 수 있다(반응성, reactivity)."
    }
  },
  {
    "id": "INTRO_CASE_024",
    "terminology": "사례연구 (Case Study)",
    "terminology_ko": "사례연구",
    "terminology_en": "Case Study",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "하나의 개인, 집단, 또는 사건을 심층적으로 조사하는 연구 방법으로, 면담, 관찰, 검사 등 다양한 자료를 종합하여 분석한다.",
    "definition_en": "A research method involving an in-depth investigation of a single individual, group, or event, combining various sources of data such as interviews, observations, and tests.",
    "significance": "드문 현상이나 독특한 사례에 대한 풍부하고 상세한 정보를 제공하며, 새로운 가설 생성의 원천이 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "안나 O., 꼬마 한스 등의 임상 사례 연구를 통해 정신분석 이론을 발전시켰다."
      },
      {
        "name_ko": "폴 브로카",
        "name_en": "Paul Broca",
        "contribution": "환자 탕(Tan)의 사례 연구를 통해 언어 산출과 좌반구 전두엽의 관계를 발견했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰법",
        "name_en": "Observational Method",
        "id": "INTRO_OBSV_023"
      },
      {
        "name_ko": "정신분석",
        "name_en": "Psychoanalysis",
        "id": "INTRO_PSYA_005"
      },
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "INTRO_LONG_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사례(Case) = 한 건(件)을 깊이 파고든다",
      "differential": "사례연구는 소수 사례의 '심층' 분석이고, 실험/조사 연구는 다수 참여자의 '체계적' 분석이다.",
      "key_point": "풍부한 질적 정보를 제공하지만, 일반화의 한계와 연구자의 주관적 해석 개입 가능성이 있다.",
      "common_mistake": "사례연구의 결과를 일반화하는 오류를 범하기 쉽다. 한 사례에서 발견된 것이 모든 사람에게 적용되지 않을 수 있다."
    }
  },
  {
    "id": "INTRO_LONG_025",
    "terminology": "종단연구 (Longitudinal Study)",
    "terminology_ko": "종단연구",
    "terminology_en": "Longitudinal Study",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "동일한 참여자 집단을 장기간에 걸쳐 반복적으로 관찰하거나 측정하여 시간에 따른 변화와 발달을 추적하는 연구 방법이다.",
    "definition_en": "A research method that repeatedly observes or measures the same group of participants over an extended period to track changes and development over time.",
    "significance": "개인 내 변화의 궤적을 직접 추적할 수 있는 유일한 방법으로, 발달심리학과 건강심리학에서 특히 중요하다.",
    "key_researchers": [
      {
        "name_ko": "루이스 터먼",
        "name_en": "Lewis Terman",
        "contribution": "1921년부터 영재 아동을 성인기까지 추적한 터먼 연구를 수행하여 대표적 종단연구의 사례를 남겼다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "횡단연구",
        "name_en": "Cross-Sectional Study",
        "id": "INTRO_CRSS_026"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "INTRO_CASE_024"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "INTRO_CORR_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "종단(縱斷) = 세로(縱)로 자르기 = 시간축을 따라 '같은 사람'을 추적",
      "differential": "종단연구는 '같은 사람'을 시간에 걸쳐 추적하고, 횡단연구는 '다른 연령대'를 한 시점에 비교한다.",
      "key_point": "개인 내 변화를 직접 관찰할 수 있지만, 시간과 비용이 많이 들고 참여자 탈락(attrition)의 문제가 있다.",
      "common_mistake": "종단연구가 반드시 수십 년에 걸칠 필요는 없으며, 수주~수개월의 단기 종단연구도 가능하다."
    }
  },
  {
    "id": "INTRO_CRSS_026",
    "terminology": "횡단연구 (Cross-Sectional Study)",
    "terminology_ko": "횡단연구",
    "terminology_en": "Cross-Sectional Study",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "서로 다른 연령이나 특성을 가진 집단을 동일한 시점에서 비교하여 차이를 분석하는 연구 방법이다.",
    "definition_en": "A research method that compares groups of different ages or characteristics at a single point in time to analyze differences.",
    "significance": "종단연구에 비해 시간과 비용이 적게 들어 발달적 차이를 효율적으로 연구할 수 있는 현실적 대안이다.",
    "key_researchers": [
      {
        "name_ko": "K. 워너 샤이",
        "name_en": "K. Warner Schaie",
        "contribution": "시애틀 종단연구에서 횡단적 설계와 종단적 설계를 결합한 순차설계(sequential design)를 활용하여 지능 발달을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "INTRO_LONG_025"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "INTRO_CORR_014"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "INTRO_SAMP_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "횡단(橫斷) = 가로(橫)로 자르기 = 한 시점에서 '다른 집단'을 비교",
      "differential": "횡단연구는 '한 시점'에 다른 집단을 비교하고, 종단연구는 '여러 시점'에 같은 집단을 추적한다.",
      "key_point": "동시대 효과(cohort effect)를 통제할 수 없어, 연령 차이가 실제 발달적 변화인지 세대 차이인지 구분하기 어렵다.",
      "common_mistake": "횡단연구에서 발견된 연령 집단 간 차이를 자동으로 '발달적 변화'로 해석하는 것은 동시대 효과를 무시한 오류이다."
    }
  },
  {
    "id": "INTRO_ETHC_027",
    "terminology": "연구 윤리 (Research Ethics)",
    "terminology_ko": "연구 윤리",
    "terminology_en": "Research Ethics",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "연구 참여자의 권리와 복지를 보호하기 위한 도덕적 원칙과 규범의 체계로, 충분한 설명에 근거한 동의, 비밀보장, 해로움 최소화 등을 포함한다.",
    "definition_en": "A system of moral principles and standards designed to protect the rights and welfare of research participants, including informed consent, confidentiality, and minimization of harm.",
    "significance": "과거 비윤리적 연구(밀그램 실험, 터스키기 매독 연구 등)의 반성에서 발전했으며, 현대 연구의 필수 전제조건으로서 기관생명윤리위원회(IRB) 심의를 통해 제도화되었다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회(APA)",
        "name_en": "American Psychological Association",
        "contribution": "심리학 연구의 윤리 강령을 제정하고 지속적으로 개정하여 연구 윤리의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험법",
        "name_en": "Experimental Method",
        "id": "INTRO_EXPM_022"
      },
      {
        "name_ko": "이중맹검법",
        "name_en": "Double-Blind Procedure",
        "id": "INTRO_DBLB_015"
      },
      {
        "name_ko": "관찰법",
        "name_en": "Observational Method",
        "id": "INTRO_OBSV_023"
      }
    ],
    "sub_types": [
      {
        "id": "INTRO_ETHC_SUB_01",
        "name": "충분한 설명에 근거한 동의 (Informed Consent)",
        "name_ko": "충분한 설명에 근거한 동의",
        "name_en": "Informed Consent",
        "definition": "연구 참여 전에 연구의 목적, 절차, 위험, 자유로운 철회 권리 등을 충분히 설명하고 자발적 동의를 구하는 절차이다."
      },
      {
        "id": "INTRO_ETHC_SUB_02",
        "name": "사후 설명 (Debriefing)",
        "name_ko": "사후 설명",
        "name_en": "Debriefing",
        "definition": "연구 종료 후 참여자에게 연구의 실제 목적과 절차를 설명하고, 속임이 있었을 경우 이를 밝히는 절차이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "윤리 = 참여자 보호의 3대 원칙: 동의(Consent), 비밀(Confidentiality), 최소피해(Minimize harm)",
      "differential": "연구 윤리는 연구 수행 과정에서의 '참여자 보호'에, 출판 윤리는 연구 결과의 '정직한 보고'에 관한 것이다.",
      "key_point": "충분한 설명에 근거한 동의(informed consent), 속임 최소화, 사후설명(debriefing), 비밀보장이 핵심 원칙이다.",
      "common_mistake": "연구 윤리가 연구를 '제한'하는 것이 아니라, 참여자를 '보호'하면서 과학 발전을 가능하게 하는 것이다."
    }
  },
  {
    "id": "INTRO_STAT_028",
    "terminology": "통계적 유의성 (Statistical Significance)",
    "terminology_ko": "통계적 유의성",
    "terminology_en": "Statistical Significance",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "관찰된 연구 결과가 우연에 의한 것일 확률이 매우 낮아(보통 p < .05), 실제 효과가 존재한다고 판단하는 통계적 기준이다.",
    "definition_en": "A statistical criterion indicating that the probability of observed results occurring by chance alone is very low (typically p < .05), suggesting a real effect exists.",
    "significance": "연구 결과의 신뢰성을 판단하는 핵심 기준으로, 심리학 연구에서 가설 검증의 표준적 방법으로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "p값과 유의수준의 개념을 도입하여 통계적 유의성 검증의 기틀을 마련했다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "에곤 피어슨과 함께 가설검증 이론을 체계화하여 제1종/제2종 오류의 개념을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "INTRO_SAMP_017"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "INTRO_STDE_029"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "INTRO_META_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "p < .05 = 우연에 의한 확률이 5% 미만 → '유의미한' 결과",
      "differential": "통계적 유의성은 '효과의 존재'를 말하고, 효과크기(effect size)는 '효과의 크기'를 말한다.",
      "key_point": "통계적으로 유의하다고 해서 반드시 실질적으로 중요한 것은 아니다(통계적 유의성 vs. 실질적 유의성).",
      "common_mistake": "p값은 효과의 '크기'를 나타내는 것이 아니라, 귀무가설이 참일 때 관찰된 결과(또는 더 극단적 결과)가 나올 확률이다."
    }
  },
  {
    "id": "INTRO_STDE_029",
    "terminology": "표준편차 (Standard Deviation)",
    "terminology_ko": "표준편차",
    "terminology_en": "Standard Deviation",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "데이터의 산포도를 나타내는 통계량으로, 각 관찰값이 평균에서 얼마나 떨어져 있는지를 나타내는 평균적 편차이다.",
    "definition_en": "A statistical measure of the spread of data, representing the average deviation of each observation from the mean, indicating how much scores typically differ from the average.",
    "significance": "연구 결과의 변산성을 이해하고, 정규분포에서의 상대적 위치를 해석하며, 통계적 검증의 기초가 되는 핵심 통계량이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "표준편차라는 용어를 도입하고, 이를 기술통계학의 핵심 개념으로 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 유의성",
        "name_en": "Statistical Significance",
        "id": "INTRO_STAT_028"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "INTRO_SAMP_017"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTRO_RELI_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표준편차 = 평균에서 '표준적으로' 얼마나 '편차(벗어남)'가 있는지",
      "differential": "표준편차는 원래 단위와 동일한 단위를 사용하고, 분산(variance)은 편차를 제곱한 값이다.",
      "key_point": "정규분포에서 평균 ± 1SD에 약 68%, ± 2SD에 약 95%, ± 3SD에 약 99.7%의 데이터가 포함된다.",
      "common_mistake": "표준편차가 작다고 반드시 좋은 것이 아니며, 연구 맥락에 따라 해석이 달라진다."
    }
  },
  {
    "id": "INTRO_META_030",
    "terminology": "메타분석 (Meta-Analysis)",
    "terminology_ko": "메타분석",
    "terminology_en": "Meta-Analysis",
    "category": "INTRO",
    "category_name": "심리학의 본질과 연구방법 (Introduction & Research Methods)",
    "definition": "동일 주제에 대한 다수의 독립적 연구 결과를 통계적으로 종합하여 전반적인 효과크기를 산출하는 양적 연구 방법이다.",
    "definition_en": "A quantitative research method that statistically combines the results of multiple independent studies on the same topic to calculate an overall effect size.",
    "significance": "개별 연구의 한계를 극복하고 누적된 증거를 종합적으로 평가할 수 있어, 근거기반 심리학(evidence-based psychology)의 핵심 도구이다.",
    "key_researchers": [
      {
        "name_ko": "진 글래스",
        "name_en": "Gene V. Glass",
        "contribution": "1976년 '메타분석(meta-analysis)'이라는 용어를 처음 사용하고, 심리치료 효과에 대한 최초의 대규모 메타분석을 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 유의성",
        "name_en": "Statistical Significance",
        "id": "INTRO_STAT_028"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "INTRO_SAMP_017"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "INTRO_CORR_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "메타(Meta, '초월') + 분석 = 연구들을 '초월'하여 종합 분석",
      "differential": "문헌고찰(literature review)은 연구들을 '서술적'으로 정리하지만, 메타분석은 '통계적'으로 종합한다.",
      "key_point": "효과크기(effect size)를 통합하여 전반적 결론을 도출하며, 개별 연구의 표본크기 한계를 극복한다.",
      "common_mistake": "메타분석의 질은 포함된 개별 연구의 질에 의존한다. 질 낮은 연구들을 모아도 질 높은 결론이 나오지 않는다(GIGO: Garbage In, Garbage Out)."
    }
  }
];

TERMS_DATA.BIO = [
  {
    "id": "BIO_NEURON_001",
    "terminology": "뉴런 (Neuron)",
    "terminology_ko": "뉴런",
    "terminology_en": "Neuron",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "신경계의 기본 단위로, 전기적 및 화학적 신호를 통해 정보를 수신하고 처리하며 전달하는 세포이다. 세포체, 수상돌기, 축삭으로 구성된다.",
    "definition_en": "The basic building block of the nervous system; a cell that receives, processes, and transmits information through electrical and chemical signals. It consists of a cell body, dendrites, and an axon.",
    "significance": "뉴런은 모든 심리적 과정(사고, 감정, 행동)의 생물학적 기초이며, 약 860억 개의 뉴런이 인간의 신경계를 구성하여 복잡한 정보 처리를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "산티아고 라몬 이 카할",
        "name_en": "Santiago Ramón y Cajal",
        "contribution": "뉴런 독트린(Neuron Doctrine)을 확립하여 신경계가 개별 세포(뉴런)로 구성됨을 증명하였다 (노벨상 1906)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "시냅스",
        "name_en": "Synapse",
        "id": "BIO_SYNAPSE_002"
      },
      {
        "name_ko": "수상돌기",
        "name_en": "Dendrite",
        "id": "BIO_DENDRITE_019"
      },
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      },
      {
        "name_ko": "활동전위",
        "name_en": "Action Potential",
        "id": "BIO_ACTPOT_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "감각뉴런",
        "name_en": "Sensory Neuron",
        "definition": "감각 수용기에서 중추신경계로 정보를 전달하는 뉴런"
      },
      {
        "name_ko": "운동뉴런",
        "name_en": "Motor Neuron",
        "definition": "중추신경계에서 근육이나 분비선으로 명령을 전달하는 뉴런"
      },
      {
        "name_ko": "사이뉴런(개재뉴런)",
        "name_en": "Interneuron",
        "definition": "감각뉴런과 운동뉴런 사이에서 정보를 중개하는 뉴런으로, 중추신경계에 가장 많이 존재한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "뉴런 = New + Run: 새로운 정보가 달려가는 통로",
      "differential": "뉴런은 신경계의 기능적 단위이고, 신경교세포(glia)는 뉴런을 지지하고 보호하는 세포이다",
      "key_point": "뉴런의 3구조(세포체, 수상돌기, 축삭)와 3종류(감각, 운동, 사이뉴런)를 구분할 것",
      "common_mistake": "뇌세포가 모두 뉴런인 것은 아니다. 신경교세포가 뉴런보다 수적으로 더 많다"
    }
  },
  {
    "id": "BIO_SYNAPSE_002",
    "terminology": "시냅스 (Synapse)",
    "terminology_ko": "시냅스",
    "terminology_en": "Synapse",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "한 뉴런의 축삭 말단과 다른 뉴런의 수상돌기(또는 세포체) 사이의 접합 부위로, 신경전달물질을 통해 화학적 신호가 전달되는 미세한 틈(시냅스 간극)을 포함한다.",
    "definition_en": "The junction between the axon terminal of one neuron and the dendrite (or cell body) of another, including the tiny gap (synaptic cleft) across which chemical signals are transmitted via neurotransmitters.",
    "significance": "시냅스는 학습과 기억의 신경학적 기초이며, 시냅스 연결의 강화(장기강화, LTP)가 기억 형성의 핵심 메커니즘으로 알려져 있다.",
    "key_researchers": [
      {
        "name_ko": "찰스 셰링턴",
        "name_en": "Charles Sherrington",
        "contribution": "'시냅스'라는 용어를 처음 도입하고 시냅스 전달의 기본 원리를 규명하였다 (노벨상 1932)"
      },
      {
        "name_ko": "오토 뢰비",
        "name_en": "Otto Loewi",
        "contribution": "시냅스에서 화학적 신경전달이 일어남을 최초로 실험적으로 증명하였다 (노벨상 1936)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "BIO_NT_003"
      },
      {
        "name_ko": "뉴런",
        "name_en": "Neuron",
        "id": "BIO_NEURON_001"
      },
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      },
      {
        "name_ko": "가소성",
        "name_en": "Neuroplasticity",
        "id": "BIO_PLAST_017"
      }
    ],
    "sub_types": [
      {
        "name_ko": "흥분성 시냅스",
        "name_en": "Excitatory Synapse",
        "definition": "수신 뉴런의 발화 가능성을 높이는 시냅스"
      },
      {
        "name_ko": "억제성 시냅스",
        "name_en": "Inhibitory Synapse",
        "definition": "수신 뉴런의 발화 가능성을 낮추는 시냅스"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Synapse = Syn(함께) + Hapse(연결): 뉴런을 함께 연결하는 지점",
      "differential": "시냅스는 뉴런 간 접합 '부위'이고, 신경전달물질은 시냅스에서 신호를 전달하는 '화학물질'이다",
      "key_point": "시냅스 간극(synaptic cleft)에서 신경전달물질이 방출되어 화학적 신호 전달이 이루어진다",
      "common_mistake": "시냅스에서 전기 신호가 직접 전달되는 것이 아니라, 화학적 전달(신경전달물질)로 변환된다"
    }
  },
  {
    "id": "BIO_NT_003",
    "terminology": "신경전달물질 (Neurotransmitter)",
    "terminology_ko": "신경전달물질",
    "terminology_en": "Neurotransmitter",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "시냅스 간극을 가로질러 신호를 전달하는 화학적 전령물질이다. 시냅스전 뉴런의 시냅스 소포에서 방출되어 시냅스후 뉴런의 수용체에 결합함으로써 신경 신호를 전달한다.",
    "definition_en": "Chemical messengers that cross the synaptic gap to transmit signals. Released from synaptic vesicles in the presynaptic neuron, they bind to receptors on the postsynaptic neuron to relay neural signals.",
    "significance": "신경전달물질의 불균형은 우울증, 조현병, 파킨슨병 등 다양한 심리적/신경학적 장애와 관련되며, 대부분의 향정신성 약물은 신경전달물질 체계에 작용한다.",
    "key_researchers": [
      {
        "name_ko": "오토 뢰비",
        "name_en": "Otto Loewi",
        "contribution": "최초의 신경전달물질인 아세틸콜린의 작용을 실험적으로 증명하였다"
      },
      {
        "name_ko": "줄리어스 액설로드",
        "name_en": "Julius Axelrod",
        "contribution": "노르에피네프린의 방출과 재흡수 메커니즘을 발견하였다 (노벨상 1970)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "시냅스",
        "name_en": "Synapse",
        "id": "BIO_SYNAPSE_002"
      },
      {
        "name_ko": "도파민",
        "name_en": "Dopamine",
        "id": "BIO_DOPA_023"
      },
      {
        "name_ko": "세로토닌",
        "name_en": "Serotonin",
        "id": "BIO_SERO_024"
      }
    ],
    "sub_types": [
      {
        "name_ko": "흥분성 신경전달물질",
        "name_en": "Excitatory Neurotransmitter",
        "definition": "시냅스후 뉴런의 발화를 촉진하는 신경전달물질 (예: 글루타메이트)"
      },
      {
        "name_ko": "억제성 신경전달물질",
        "name_en": "Inhibitory Neurotransmitter",
        "definition": "시냅스후 뉴런의 발화를 억제하는 신경전달물질 (예: GABA)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "신경전달물질 = 뉴런의 '우편배달부': 시냅스라는 틈을 건너 메시지를 전달",
      "differential": "신경전달물질은 시냅스 간극에서 작용하는 '국소적' 전달물질이고, 호르몬은 혈류를 통해 '전신적'으로 작용한다",
      "key_point": "주요 신경전달물질(도파민, 세로토닌, 아세틸콜린, GABA, 글루타메이트, 엔도르핀)의 기능을 각각 구분할 것",
      "common_mistake": "신경전달물질이 '부족'하면 항상 장애가 생기는 것이 아니라, '과잉'도 문제를 일으킬 수 있다 (예: 도파민 과잉과 조현병)"
    }
  },
  {
    "id": "BIO_ACTPOT_004",
    "terminology": "활동전위 (Action Potential)",
    "terminology_ko": "활동전위",
    "terminology_en": "Action Potential",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "뉴런이 역치 이상의 자극을 받으면 축삭을 따라 전파되는 짧은 전기적 충격이다. 나트륨과 칼륨 이온의 급격한 이동으로 발생하며, 전무율(all-or-none)의 법칙을 따른다.",
    "definition_en": "A brief electrical impulse that travels along the axon when a neuron is stimulated beyond its threshold. It is generated by the rapid movement of sodium and potassium ions and follows the all-or-none law.",
    "significance": "활동전위는 신경계 내 정보 전달의 기본 메커니즘이며, 전무율 원리는 자극 강도가 발화 빈도로 부호화됨을 의미한다.",
    "key_researchers": [
      {
        "name_ko": "앨런 호지킨",
        "name_en": "Alan Hodgkin",
        "contribution": "앤드루 헉슬리와 함께 활동전위의 이온 메커니즘을 수학적으로 설명하였다 (노벨상 1963)"
      },
      {
        "name_ko": "앤드루 헉슬리",
        "name_en": "Andrew Huxley",
        "contribution": "호지킨-헉슬리 모델을 개발하여 활동전위 발생 과정을 정량적으로 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뉴런",
        "name_en": "Neuron",
        "id": "BIO_NEURON_001"
      },
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      },
      {
        "name_ko": "수초",
        "name_en": "Myelin Sheath",
        "id": "BIO_MYELIN_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "활동전위 = 뉴런의 '발사(firing)': 역치를 넘으면 발사하고, 안 넘으면 발사하지 않는다",
      "differential": "활동전위는 축삭을 따라 전파되는 '전기적' 신호이고, 시냅스 전달은 시냅스 간극에서 이루어지는 '화학적' 신호이다",
      "key_point": "전무율(all-or-none): 역치 이상이면 항상 동일한 크기로 발화하며, 자극 강도는 발화 빈도로 부호화된다",
      "common_mistake": "활동전위의 '크기'가 자극 강도에 따라 달라지는 것이 아니라, '빈도'가 달라진다"
    }
  },
  {
    "id": "BIO_CORTEX_005",
    "terminology": "대뇌피질 (Cerebral Cortex)",
    "terminology_ko": "대뇌피질",
    "terminology_en": "Cerebral Cortex",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌 반구의 표면을 덮고 있는 2~4mm 두께의 신경세포층으로, 고등 정신기능(사고, 언어, 계획, 의식적 지각 등)을 담당한다. 주름(뇌회와 뇌구)이 발달하여 표면적을 넓힌다.",
    "definition_en": "The thin (2-4mm) layer of neural cells covering the surface of the cerebral hemispheres, responsible for higher mental functions such as thinking, language, planning, and conscious perception. Its folds (gyri and sulci) increase the surface area.",
    "significance": "대뇌피질은 인간의 고등인지기능의 핵심 구조로, 다른 동물에 비해 인간에서 가장 발달되어 있으며 인간 고유의 복잡한 사고와 행동을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "코르비니안 브로드만",
        "name_en": "Korbinian Brodmann",
        "contribution": "대뇌피질을 세포 구조에 따라 52개 영역(브로드만 영역)으로 분류하였다"
      },
      {
        "name_ko": "와일더 펜필드",
        "name_en": "Wilder Penfield",
        "contribution": "전기 자극을 통해 대뇌피질의 기능 지도(운동/감각 호문쿨루스)를 작성하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전두엽",
        "name_en": "Frontal Lobe",
        "id": "BIO_FRONTAL_010"
      },
      {
        "name_ko": "측두엽",
        "name_en": "Temporal Lobe",
        "id": "BIO_TEMPORAL_025"
      },
      {
        "name_ko": "두정엽",
        "name_en": "Parietal Lobe",
        "id": "BIO_PARIETAL_026"
      },
      {
        "name_ko": "후두엽",
        "name_en": "Occipital Lobe",
        "id": "BIO_OCCIPITAL_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "운동피질",
        "name_en": "Motor Cortex",
        "definition": "수의적 운동 명령을 생성하는 전두엽 후방 영역"
      },
      {
        "name_ko": "감각피질",
        "name_en": "Sensory Cortex",
        "definition": "체감각 정보를 처리하는 두정엽 전방 영역"
      },
      {
        "name_ko": "연합피질",
        "name_en": "Association Cortex",
        "definition": "감각 및 운동 영역 외의 피질로, 고등인지기능(통합, 해석, 계획)을 담당한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대뇌피질 = 뇌의 '껍질(cortex=bark)': 얇지만 가장 고등한 기능을 담당",
      "differential": "대뇌피질은 뇌의 바깥 '회백질'층이고, 그 안의 백질은 뉴런들을 연결하는 축삭 다발이다",
      "key_point": "4개 엽(전두엽, 두정엽, 측두엽, 후두엽)의 위치와 주요 기능을 구분할 것",
      "common_mistake": "대뇌피질이 뇌 전체를 의미하는 것이 아니라, 뇌의 '표면층'만을 가리킨다"
    }
  },
  {
    "id": "BIO_LIMBIC_006",
    "terminology": "변연계 (Limbic System)",
    "terminology_ko": "변연계",
    "terminology_en": "Limbic System",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌피질과 뇌간 사이에 위치한 구조물 집합으로, 정서, 동기, 기억 형성에 핵심적 역할을 한다. 편도체, 해마, 시상하부 등을 포함한다.",
    "definition_en": "A set of structures located between the cerebral cortex and the brainstem, playing key roles in emotion, motivation, and memory formation. It includes the amygdala, hippocampus, and hypothalamus, among others.",
    "significance": "변연계는 정서와 인지의 상호작용을 이해하는 데 핵심적이며, 정서적 기억, 공포 반응, 보상 체계 등 심리학의 주요 연구 주제와 밀접하게 관련된다.",
    "key_researchers": [
      {
        "name_ko": "폴 맥클린",
        "name_en": "Paul MacLean",
        "contribution": "변연계(limbic system)라는 개념을 체계화하고 삼위일체 뇌(triune brain) 이론을 제안하였다"
      },
      {
        "name_ko": "제임스 파페즈",
        "name_en": "James Papez",
        "contribution": "정서 회로(Papez circuit)를 제안하여 변연계 구조들의 정서 기능을 처음 체계적으로 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "BIO_AMYG_007"
      },
      {
        "name_ko": "해마",
        "name_en": "Hippocampus",
        "id": "BIO_HIPPO_008"
      },
      {
        "name_ko": "시상하부",
        "name_en": "Hypothalamus",
        "id": "BIO_HYPOTH_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Limbic = Limbus(경계): 뇌의 '경계' 지역에서 정서를 관장",
      "differential": "변연계는 정서/동기/기억의 '체계'이고, 대뇌피질은 고등인지(사고/언어)의 '구조'이다",
      "key_point": "변연계의 3대 핵심 구조: 편도체(공포/정서), 해마(기억), 시상하부(항상성/동기)",
      "common_mistake": "변연계가 정서'만' 담당하는 것이 아니라, 기억 형성과 동기에도 핵심적 역할을 한다"
    }
  },
  {
    "id": "BIO_AMYG_007",
    "terminology": "편도체 (Amygdala)",
    "terminology_ko": "편도체",
    "terminology_en": "Amygdala",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "측두엽 내측에 위치한 아몬드 모양의 신경핵 집합으로, 공포와 같은 정서적 반응의 처리 및 정서적 기억의 형성에 핵심적 역할을 한다.",
    "definition_en": "An almond-shaped cluster of nuclei located deep within the medial temporal lobe, playing a central role in processing emotional responses such as fear and in the formation of emotional memories.",
    "significance": "편도체는 공포 조건형성, 위협 탐지, 정서적 의사결정에 핵심적이며, PTSD, 불안장애 등의 신경학적 기초를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "조지프 르두",
        "name_en": "Joseph LeDoux",
        "contribution": "편도체가 공포 조건형성에서 핵심적 역할을 함을 밝히고, '저위로(low road)'와 '고위로(high road)' 공포 처리 경로를 규명하였다"
      },
      {
        "name_ko": "하인리히 클뤼버",
        "name_en": "Heinrich Klüver",
        "contribution": "폴 뷔시와 함께 편도체 손상이 정서 반응에 미치는 영향을 연구하였다 (Klüver-Bucy 증후군)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변연계",
        "name_en": "Limbic System",
        "id": "BIO_LIMBIC_006"
      },
      {
        "name_ko": "해마",
        "name_en": "Hippocampus",
        "id": "BIO_HIPPO_008"
      },
      {
        "name_ko": "시상하부",
        "name_en": "Hypothalamus",
        "id": "BIO_HYPOTH_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Amygdala = '아몬드(almond)' 모양의 '공포 경보기'",
      "differential": "편도체는 '정서적 반응'(특히 공포)을 처리하고, 해마는 '기억 형성'을 담당한다",
      "key_point": "편도체는 위협 자극에 대한 빠른 무의식적 반응(저위로)을 가능하게 한다",
      "common_mistake": "편도체가 공포'만' 담당하는 것이 아니라, 분노, 기쁨 등 전반적인 정서 처리에 관여한다"
    }
  },
  {
    "id": "BIO_HIPPO_008",
    "terminology": "해마 (Hippocampus)",
    "terminology_ko": "해마",
    "terminology_en": "Hippocampus",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "측두엽 내측에 위치한 해마 모양의 구조로, 새로운 외현적 기억(서술적 기억)의 형성과 공간 기억에 핵심적 역할을 한다.",
    "definition_en": "A seahorse-shaped structure located in the medial temporal lobe, playing a critical role in the formation of new explicit (declarative) memories and spatial memory.",
    "significance": "해마는 단기기억을 장기기억으로 전환하는 공고화(consolidation) 과정의 핵심 구조이며, 알츠하이머병에서 가장 먼저 손상되는 영역이다.",
    "key_researchers": [
      {
        "name_ko": "브렌다 밀너",
        "name_en": "Brenda Milner",
        "contribution": "환자 H.M.(헨리 몰래슨)의 해마 절제 후 기억 상실 사례를 연구하여 해마의 기억 기능을 규명하였다"
      },
      {
        "name_ko": "존 오키프",
        "name_en": "John O'Keefe",
        "contribution": "해마에서 장소세포(place cells)를 발견하여 공간 기억의 신경 기초를 밝혔다 (노벨상 2014)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변연계",
        "name_en": "Limbic System",
        "id": "BIO_LIMBIC_006"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "BIO_AMYG_007"
      },
      {
        "name_ko": "가소성",
        "name_en": "Neuroplasticity",
        "id": "BIO_PLAST_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Hippocampus = 'Hippo(하마)+Campus(캠퍼스)': 캠퍼스에서 하마가 새로운 것을 배우는 장면 상상",
      "differential": "해마는 새로운 '외현적 기억'의 형성을 담당하고, 편도체는 '정서적 기억'을 처리한다",
      "key_point": "해마가 손상되면 새로운 기억을 형성하지 못하지만(전행성 기억상실), 이전 기억은 남아 있을 수 있다",
      "common_mistake": "해마가 기억을 '저장'하는 곳이 아니라, 기억의 '형성과 공고화'를 담당하는 곳이다. 장기기억은 대뇌피질에 분산 저장된다"
    }
  },
  {
    "id": "BIO_HYPOTH_009",
    "terminology": "시상하부 (Hypothalamus)",
    "terminology_ko": "시상하부",
    "terminology_en": "Hypothalamus",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "시상 아래에 위치한 작은 구조로, 체온, 배고픔, 갈증, 성적 행동 등 신체 항상성을 조절하며 내분비계(뇌하수체)를 통제하여 신경계와 내분비계를 연결한다.",
    "definition_en": "A small structure below the thalamus that regulates body homeostasis including temperature, hunger, thirst, and sexual behavior, and controls the endocrine system via the pituitary gland, linking the nervous system and endocrine system.",
    "significance": "시상하부는 생존에 필수적인 동기적 행동(섭식, 음수, 성행동)과 정서적 각성을 조절하며, 스트레스 반응(HPA 축)의 시작점으로서 건강심리학에서도 중요하다.",
    "key_researchers": [
      {
        "name_ko": "제임스 올즈",
        "name_en": "James Olds",
        "contribution": "피터 밀너와 함께 시상하부에서 '쾌락 중추(pleasure center)'를 발견하였다"
      },
      {
        "name_ko": "한스 셀리에",
        "name_en": "Hans Selye",
        "contribution": "스트레스 반응에서 시상하부-뇌하수체-부신 축(HPA axis)의 역할을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변연계",
        "name_en": "Limbic System",
        "id": "BIO_LIMBIC_006"
      },
      {
        "name_ko": "내분비계",
        "name_en": "Endocrine System",
        "id": "BIO_ENDOCRINE_016"
      },
      {
        "name_ko": "시상",
        "name_en": "Thalamus",
        "id": "BIO_THALAMUS_028"
      },
      {
        "name_ko": "자율신경계",
        "name_en": "Autonomic Nervous System",
        "id": "BIO_ANS_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "시상하부의 4F: Fighting(투쟁), Fleeing(도주), Feeding(섭식), mating(짝짓기) - 생존의 핵심",
      "differential": "시상하부는 항상성과 동기를 '조절'하고, 시상은 감각 정보를 피질로 '중계'한다",
      "key_point": "시상하부는 신경계와 내분비계의 연결 지점(뇌하수체 통제)이자 항상성 유지의 중심이다",
      "common_mistake": "시상(thalamus)과 시상하부(hypothalamus)는 이름이 비슷하지만 기능이 전혀 다르다"
    }
  },
  {
    "id": "BIO_FRONTAL_010",
    "terminology": "전두엽 (Frontal Lobe)",
    "terminology_ko": "전두엽",
    "terminology_en": "Frontal Lobe",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌피질의 전방에 위치한 가장 큰 엽으로, 중심구(central sulcus) 앞쪽에 위치한다. 계획, 의사결정, 성격, 수의적 운동, 언어 산출(브로카 영역) 등을 담당한다.",
    "definition_en": "The largest lobe of the cerebral cortex, located anterior to the central sulcus. It is responsible for planning, decision-making, personality, voluntary movement, and speech production (Broca's area).",
    "significance": "전두엽은 인간의 고등인지기능과 성격의 신경학적 기초이며, 전두엽 손상 사례(피니어스 게이지)는 뇌와 행동의 관계를 이해하는 역사적 전환점이 되었다.",
    "key_researchers": [
      {
        "name_ko": "존 할로",
        "name_en": "John Harlow",
        "contribution": "피니어스 게이지(Phineas Gage) 사례를 보고하여 전두엽과 성격/행동의 관계를 최초로 기록하였다"
      },
      {
        "name_ko": "안토니오 다마지오",
        "name_en": "Antonio Damasio",
        "contribution": "전두엽 손상 환자 연구를 통해 정서와 의사결정의 관계(somatic marker hypothesis)를 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "브로카 영역",
        "name_en": "Broca's Area",
        "id": "BIO_BROCA_011"
      },
      {
        "name_ko": "측두엽",
        "name_en": "Temporal Lobe",
        "id": "BIO_TEMPORAL_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "전전두피질",
        "name_en": "Prefrontal Cortex",
        "definition": "전두엽의 가장 앞부분으로, 계획, 의사결정, 사회적 행동, 작업기억을 담당한다"
      },
      {
        "name_ko": "일차운동피질",
        "name_en": "Primary Motor Cortex",
        "definition": "전두엽의 후방(중심전회)에 위치하며 수의적 운동 명령을 생성한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전두엽 = 이마(front) 뒤의 'CEO': 계획하고 결정하고 실행하는 뇌의 최고경영자",
      "differential": "전두엽은 '운동/계획/성격'을 담당하고, 두정엽은 '체감각/공간인지'를 담당한다",
      "key_point": "피니어스 게이지 사례: 전두엽 손상 후 성격이 극적으로 변화 - 뇌와 행동의 관계 입증",
      "common_mistake": "전두엽이 가장 마지막에 발달 완료되며(25세경), 청소년의 충동적 행동은 전두엽 미성숙과 관련된다"
    }
  },
  {
    "id": "BIO_BROCA_011",
    "terminology": "브로카 영역 (Broca's Area)",
    "terminology_ko": "브로카 영역",
    "terminology_en": "Broca's Area",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "좌반구 전두엽의 하전두회(inferior frontal gyrus)에 위치한 영역으로, 언어의 산출(말하기)과 문법적 처리를 담당한다. 이 영역의 손상은 브로카 실어증(표현성 실어증)을 유발한다.",
    "definition_en": "A region in the inferior frontal gyrus of the left frontal lobe responsible for speech production and grammatical processing. Damage to this area causes Broca's aphasia (expressive aphasia).",
    "significance": "브로카 영역의 발견은 뇌의 기능적 국재화(localization of function)를 입증한 최초의 주요 증거 중 하나이며, 신경심리학의 발전에 기여하였다.",
    "key_researchers": [
      {
        "name_ko": "폴 브로카",
        "name_en": "Paul Broca",
        "contribution": "언어 산출 장애 환자('탕(Tan)')의 뇌를 부검하여 좌측 전두엽 병변을 발견하고, 언어 산출 영역을 최초로 규명하였다 (1861)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "베르니케 영역",
        "name_en": "Wernicke's Area",
        "id": "BIO_WERNICK_012"
      },
      {
        "name_ko": "전두엽",
        "name_en": "Frontal Lobe",
        "id": "BIO_FRONTAL_010"
      },
      {
        "name_ko": "좌반구/우반구",
        "name_en": "Cerebral Lateralization",
        "id": "BIO_LATERAL_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Broca = Broken speech: 브로카 영역 손상 시 말이 '끊어진다(broken)'",
      "differential": "브로카 영역은 언어 '산출(말하기)'을 담당하고, 베르니케 영역은 언어 '이해(듣기)'를 담당한다",
      "key_point": "브로카 실어증: 이해는 되지만 말을 유창하게 하지 못함 (비유창성 실어증)",
      "common_mistake": "브로카 실어증 환자가 언어를 '이해하지 못하는' 것이 아니라, '표현하지 못하는' 것이다"
    }
  },
  {
    "id": "BIO_WERNICK_012",
    "terminology": "베르니케 영역 (Wernicke's Area)",
    "terminology_ko": "베르니케 영역",
    "terminology_en": "Wernicke's Area",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "좌반구 측두엽의 상측두회(superior temporal gyrus) 후방에 위치한 영역으로, 언어의 이해(듣기/읽기 이해)를 담당한다. 이 영역의 손상은 베르니케 실어증(수용성 실어증)을 유발한다.",
    "definition_en": "A region in the posterior part of the superior temporal gyrus of the left hemisphere responsible for language comprehension (auditory and reading). Damage to this area causes Wernicke's aphasia (receptive aphasia).",
    "significance": "베르니케 영역의 발견은 언어 처리가 뇌의 여러 영역에 분산되어 있음을 보여주었으며, 브로카 영역과의 연결(궁상다발)은 언어 신경 회로의 이해에 기여하였다.",
    "key_researchers": [
      {
        "name_ko": "카를 베르니케",
        "name_en": "Carl Wernicke",
        "contribution": "좌측 측두엽 손상 환자에서 언어 이해 장애를 발견하고, 언어 이해 영역을 규명하였다 (1874)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "브로카 영역",
        "name_en": "Broca's Area",
        "id": "BIO_BROCA_011"
      },
      {
        "name_ko": "측두엽",
        "name_en": "Temporal Lobe",
        "id": "BIO_TEMPORAL_025"
      },
      {
        "name_ko": "좌반구/우반구",
        "name_en": "Cerebral Lateralization",
        "id": "BIO_LATERAL_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Wernicke = Word comprehension: 단어(Word) 이해를 담당",
      "differential": "베르니케 실어증은 말은 유창하지만 의미 없는 말(word salad)을 하고, 브로카 실어증은 말이 끊기지만 의미는 있다",
      "key_point": "베르니케 실어증: 유창하게 말하지만 내용이 의미 없음 (유창성 실어증/수용성 실어증)",
      "common_mistake": "베르니케 실어증 환자는 '말을 못하는' 것이 아니라 오히려 유창하게 말하지만, '이해하지 못하고' 의미 없는 말을 한다"
    }
  },
  {
    "id": "BIO_ANS_013",
    "terminology": "자율신경계 (Autonomic Nervous System)",
    "terminology_ko": "자율신경계",
    "terminology_en": "Autonomic Nervous System",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "말초신경계의 한 부분으로, 의식적 통제 없이 자동적으로 내장 기관(심장, 소화기관, 분비선 등)의 활동을 조절한다. 교감신경계와 부교감신경계로 구성된다.",
    "definition_en": "A division of the peripheral nervous system that automatically regulates the activity of internal organs (heart, digestive organs, glands, etc.) without conscious control. It consists of the sympathetic and parasympathetic nervous systems.",
    "significance": "자율신경계는 정서적 각성, 스트레스 반응, 이완 반응의 생리적 기초이며, 정서 이론(제임스-랑게 이론 등)에서 핵심적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "존 뉴포트 랭글리",
        "name_en": "John Newport Langley",
        "contribution": "자율신경계라는 용어를 도입하고 교감/부교감 구분을 체계화하였다"
      },
      {
        "name_ko": "월터 캐넌",
        "name_en": "Walter Cannon",
        "contribution": "투쟁-도주 반응(fight-or-flight response)의 개념을 정립하여 교감신경계의 기능을 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "교감신경계",
        "name_en": "Sympathetic Nervous System",
        "id": "BIO_SYMPA_014"
      },
      {
        "name_ko": "부교감신경계",
        "name_en": "Parasympathetic Nervous System",
        "id": "BIO_PARASYM_015"
      },
      {
        "name_ko": "시상하부",
        "name_en": "Hypothalamus",
        "id": "BIO_HYPOTH_009"
      }
    ],
    "sub_types": [
      {
        "name_ko": "교감신경계",
        "name_en": "Sympathetic Nervous System",
        "definition": "위험 상황에서 신체를 각성시키는 '투쟁-도주(fight-or-flight)' 반응을 담당"
      },
      {
        "name_ko": "부교감신경계",
        "name_en": "Parasympathetic Nervous System",
        "definition": "신체를 이완시키고 에너지를 보존하는 '휴식-소화(rest-and-digest)' 반응을 담당"
      }
    ],
    "quiz_hints": {
      "mnemonic": "자율신경계 = '자동(auto)' 조종: 의식적 노력 없이 자동으로 작동",
      "differential": "자율신경계는 '불수의적'으로 내장 기관을 조절하고, 체성신경계는 '수의적'으로 골격근을 조절한다",
      "key_point": "교감(각성/투쟁-도주)과 부교감(이완/휴식-소화)의 길항적 작용을 이해할 것",
      "common_mistake": "자율신경계가 '완전히' 의식적 통제를 벗어나는 것은 아니다 (바이오피드백, 명상 등으로 일부 조절 가능)"
    }
  },
  {
    "id": "BIO_SYMPA_014",
    "terminology": "교감신경계 (Sympathetic Nervous System)",
    "terminology_ko": "교감신경계",
    "terminology_en": "Sympathetic Nervous System",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "자율신경계의 한 부분으로, 위협이나 스트레스 상황에서 신체를 각성시키는 '투쟁-도주(fight-or-flight)' 반응을 담당한다. 심박수 증가, 동공 확대, 소화 억제 등의 반응을 유발한다.",
    "definition_en": "A division of the autonomic nervous system responsible for the 'fight-or-flight' response, arousing the body during threat or stress. It triggers increased heart rate, pupil dilation, and suppression of digestion.",
    "significance": "교감신경계의 각성 반응은 스트레스, 불안, 공포의 생리적 기초이며, 만성적 교감신경 활성화는 스트레스 관련 질환(고혈압, 심장병 등)과 관련된다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐넌",
        "name_en": "Walter Cannon",
        "contribution": "투쟁-도주 반응(fight-or-flight response) 개념을 정립하여 교감신경계의 기능을 체계적으로 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자율신경계",
        "name_en": "Autonomic Nervous System",
        "id": "BIO_ANS_013"
      },
      {
        "name_ko": "부교감신경계",
        "name_en": "Parasympathetic Nervous System",
        "id": "BIO_PARASYM_015"
      },
      {
        "name_ko": "내분비계",
        "name_en": "Endocrine System",
        "id": "BIO_ENDOCRINE_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교감신경 = 'Sympathetic = S = Stress': 스트레스 상황에서 활성화",
      "differential": "교감신경계는 에너지를 '소비'하여 신체를 각성시키고, 부교감신경계는 에너지를 '보존'하여 이완시킨다",
      "key_point": "교감신경 활성화 시: 심박수 증가, 동공 확대, 소화 억제, 발한 증가, 기관지 확장",
      "common_mistake": "교감신경계가 '나쁜' 것이 아니라 생존에 필수적이며, 문제는 '만성적' 활성화이다"
    }
  },
  {
    "id": "BIO_PARASYM_015",
    "terminology": "부교감신경계 (Parasympathetic Nervous System)",
    "terminology_ko": "부교감신경계",
    "terminology_en": "Parasympathetic Nervous System",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "자율신경계의 한 부분으로, 위협이 사라진 후 신체를 이완시키고 에너지를 보존하는 '휴식-소화(rest-and-digest)' 반응을 담당한다. 심박수 감소, 소화 촉진 등의 반응을 유발한다.",
    "definition_en": "A division of the autonomic nervous system responsible for the 'rest-and-digest' response, calming the body and conserving energy after a threat has passed. It triggers decreased heart rate, promotion of digestion, etc.",
    "significance": "부교감신경계는 신체 회복과 항상성 유지에 필수적이며, 이완 반응(relaxation response)과 관련하여 스트레스 관리 및 명상 연구에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "오토 뢰비",
        "name_en": "Otto Loewi",
        "contribution": "미주신경(부교감신경)의 화학적 전달 물질(아세틸콜린)을 발견하여 부교감신경 작용 메커니즘을 규명하였다"
      },
      {
        "name_ko": "허버트 벤슨",
        "name_en": "Herbert Benson",
        "contribution": "이완 반응(relaxation response) 개념을 제안하여 부교감신경 활성화의 건강 효과를 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자율신경계",
        "name_en": "Autonomic Nervous System",
        "id": "BIO_ANS_013"
      },
      {
        "name_ko": "교감신경계",
        "name_en": "Sympathetic Nervous System",
        "id": "BIO_SYMPA_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부교감 = Parasympathetic = P = Peace: 평화로울 때 활성화",
      "differential": "부교감신경계는 '이완/회복'을 담당하고, 교감신경계는 '각성/동원'을 담당한다",
      "key_point": "부교감신경 활성화 시: 심박수 감소, 동공 수축, 소화 촉진, 타액 분비 증가",
      "common_mistake": "교감과 부교감이 '교대로' 작용하는 것이 아니라, 양쪽 모두 항상 어느 정도 활성화되어 있으며 '균형'을 이룬다"
    }
  },
  {
    "id": "BIO_ENDOCRINE_016",
    "terminology": "내분비계 (Endocrine System)",
    "terminology_ko": "내분비계",
    "terminology_en": "Endocrine System",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "호르몬을 분비하는 분비선(뇌하수체, 갑상선, 부신 등)의 체계로, 혈류를 통해 호르몬을 전달하여 성장, 대사, 기분, 성적 발달, 스트레스 반응 등 신체 기능을 조절한다.",
    "definition_en": "The system of glands (pituitary, thyroid, adrenal, etc.) that secrete hormones into the bloodstream to regulate body functions including growth, metabolism, mood, sexual development, and stress response.",
    "significance": "내분비계는 행동과 정신 상태에 광범위한 영향을 미치며, 호르몬 불균형은 우울증, 불안, 성적 기능 장애 등 다양한 심리적 문제와 관련된다.",
    "key_researchers": [
      {
        "name_ko": "어니스트 스탈링",
        "name_en": "Ernest Starling",
        "contribution": "'호르몬'이라는 용어를 최초로 사용하고 내분비 신호 전달 개념을 확립하였다"
      },
      {
        "name_ko": "한스 셀리에",
        "name_en": "Hans Selye",
        "contribution": "일반적응증후군(GAS)을 통해 스트레스와 내분비계(HPA축)의 관계를 체계적으로 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "시상하부",
        "name_en": "Hypothalamus",
        "id": "BIO_HYPOTH_009"
      },
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "BIO_NT_003"
      },
      {
        "name_ko": "자율신경계",
        "name_en": "Autonomic Nervous System",
        "id": "BIO_ANS_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "뇌하수체",
        "name_en": "Pituitary Gland",
        "definition": "'주인 분비선(master gland)'으로 불리며 다른 내분비선의 활동을 조절한다"
      },
      {
        "name_ko": "부신",
        "name_en": "Adrenal Gland",
        "definition": "스트레스 호르몬(코르티솔, 에피네프린)을 분비하여 투쟁-도주 반응을 지원한다"
      },
      {
        "name_ko": "갑상선",
        "name_en": "Thyroid Gland",
        "definition": "대사율을 조절하는 갑상선 호르몬을 분비하며, 에너지 수준과 기분에 영향을 미친다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "내분비계 = 신체의 '우편 시스템': 혈류라는 우편 경로를 통해 호르몬 메시지를 전달",
      "differential": "내분비계는 호르몬을 통해 '느리지만 지속적'으로 작용하고, 신경계는 신경전달물질로 '빠르지만 순간적'으로 작용한다",
      "key_point": "시상하부 → 뇌하수체 → 표적 내분비선의 위계적 조절 구조를 이해할 것",
      "common_mistake": "내분비계가 신경계와 '독립적'으로 작동하는 것이 아니라, 시상하부를 통해 긴밀하게 연결되어 있다"
    }
  },
  {
    "id": "BIO_PLAST_017",
    "terminology": "가소성 (Neuroplasticity)",
    "terminology_ko": "가소성",
    "terminology_en": "Neuroplasticity",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "경험, 학습, 손상 등에 반응하여 뇌가 구조적, 기능적으로 변화하는 능력이다. 새로운 시냅스 연결의 형성, 기존 연결의 강화/약화, 신경 경로의 재조직을 포함한다.",
    "definition_en": "The brain's ability to change structurally and functionally in response to experience, learning, or injury. It includes the formation of new synaptic connections, strengthening/weakening of existing connections, and reorganization of neural pathways.",
    "significance": "가소성은 학습, 기억, 뇌 손상 후 회복의 신경학적 기초이며, 뇌가 고정된 것이 아니라 평생 변화할 수 있다는 현대 신경과학의 핵심 원리이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 헵",
        "name_en": "Donald Hebb",
        "contribution": "'함께 발화하는 뉴런은 함께 연결된다(Hebb's rule)'는 원리를 제안하여 시냅스 가소성의 이론적 기초를 마련하였다"
      },
      {
        "name_ko": "에릭 캔델",
        "name_en": "Eric Kandel",
        "contribution": "바다달팽이(Aplysia)를 통해 학습의 시냅스 수준 메커니즘을 규명하였다 (노벨상 2000)"
      },
      {
        "name_ko": "마이클 메르체니치",
        "name_en": "Michael Merzenich",
        "contribution": "성인 뇌에서도 경험에 의한 대뇌피질 지도 재조직이 가능함을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "시냅스",
        "name_en": "Synapse",
        "id": "BIO_SYNAPSE_002"
      },
      {
        "name_ko": "해마",
        "name_en": "Hippocampus",
        "id": "BIO_HIPPO_008"
      },
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      }
    ],
    "sub_types": [
      {
        "name_ko": "시냅스 가소성",
        "name_en": "Synaptic Plasticity",
        "definition": "시냅스 연결의 강도가 활동에 따라 변화하는 것 (장기강화 LTP, 장기억압 LTD)"
      },
      {
        "name_ko": "구조적 가소성",
        "name_en": "Structural Plasticity",
        "definition": "뇌의 물리적 구조(뉴런 수, 수상돌기 가지)가 변화하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "가소성 = '플라스틱(plastic)처럼 유연한 뇌': 모양을 바꿀 수 있다",
      "differential": "가소성은 뇌의 '변화 능력'이고, 결정적 시기(critical period)는 가소성이 특히 높은 '발달 시기'이다",
      "key_point": "Hebb's rule: '함께 발화하는 뉴런은 함께 연결된다' - 반복 학습이 신경 회로를 강화하는 원리",
      "common_mistake": "가소성이 어린 시기에만 가능한 것이 아니라 성인기에도 지속되며, 다만 나이가 들수록 감소한다"
    }
  },
  {
    "id": "BIO_LATERAL_018",
    "terminology": "좌반구/우반구 (Cerebral Lateralization)",
    "terminology_ko": "좌반구/우반구",
    "terminology_en": "Cerebral Lateralization",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌가 좌반구와 우반구로 나뉘며 각 반구가 특정 기능에 상대적으로 더 특화되어 있는 현상이다. 좌반구는 언어, 논리적 사고에, 우반구는 공간 지각, 정서 처리에 상대적으로 우세하다.",
    "definition_en": "The phenomenon in which the cerebral hemispheres are relatively specialized for certain functions. The left hemisphere is relatively dominant for language and logical thinking, while the right hemisphere is relatively dominant for spatial perception and emotional processing.",
    "significance": "편재화 연구는 뇌의 기능적 분업과 통합을 이해하는 데 핵심적이며, 분리뇌(split-brain) 연구는 의식과 인지의 본질에 대한 근본적 질문을 제기하였다.",
    "key_researchers": [
      {
        "name_ko": "로저 스페리",
        "name_en": "Roger Sperry",
        "contribution": "분리뇌(split-brain) 환자 연구를 통해 좌우 반구의 기능적 특화를 밝혔다 (노벨상 1981)"
      },
      {
        "name_ko": "마이클 가자니가",
        "name_en": "Michael Gazzaniga",
        "contribution": "스페리와 함께 분리뇌 연구를 수행하고, 좌반구의 '해석자(interpreter)' 기능을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뇌량",
        "name_en": "Corpus Callosum",
        "id": "BIO_CORPUS_031"
      },
      {
        "name_ko": "브로카 영역",
        "name_en": "Broca's Area",
        "id": "BIO_BROCA_011"
      },
      {
        "name_ko": "베르니케 영역",
        "name_en": "Wernicke's Area",
        "id": "BIO_WERNICK_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "좌반구 = Left = Language(언어), 우반구 = Right = aRt(예술/공간)",
      "differential": "편재화는 기능의 '상대적 우세'이지 '독점적 담당'이 아니다",
      "key_point": "분리뇌(split-brain) 연구: 뇌량 절단 시 좌우 반구가 독립적으로 정보를 처리함이 밝혀졌다",
      "common_mistake": "'좌뇌형 인간/우뇌형 인간'이라는 대중적 구분은 과학적 근거가 부족하다. 정상적으로 양쪽 반구가 협력한다"
    }
  },
  {
    "id": "BIO_DENDRITE_019",
    "terminology": "수상돌기 (Dendrite)",
    "terminology_ko": "수상돌기",
    "terminology_en": "Dendrite",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "뉴런의 세포체에서 나뭇가지처럼 뻗어나온 짧은 돌기로, 다른 뉴런으로부터 신호(신경전달물질)를 수신하여 세포체로 전달하는 역할을 한다.",
    "definition_en": "Short, branching extensions from the neuron's cell body that receive signals (neurotransmitters) from other neurons and transmit them to the cell body.",
    "significance": "수상돌기의 가지 수와 시냅스 연결 밀도는 학습과 경험에 따라 증가하며, 이는 신경 가소성의 구조적 기초를 이룬다.",
    "key_researchers": [
      {
        "name_ko": "산티아고 라몬 이 카할",
        "name_en": "Santiago Ramón y Cajal",
        "contribution": "골지 염색법을 활용하여 뉴런의 수상돌기 구조를 상세하게 관찰하고 기록하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뉴런",
        "name_en": "Neuron",
        "id": "BIO_NEURON_001"
      },
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      },
      {
        "name_ko": "시냅스",
        "name_en": "Synapse",
        "id": "BIO_SYNAPSE_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Dendrite = 나무(dendron): 나뭇가지처럼 뻗어 '받아들이는' 안테나",
      "differential": "수상돌기는 신호를 '수신'하고, 축삭은 신호를 '전달'한다",
      "key_point": "수상돌기의 표면에 있는 수용체에 신경전달물질이 결합하여 시냅스 전달이 이루어진다",
      "common_mistake": "수상돌기가 하나만 있는 것이 아니라, 하나의 뉴런에 여러 개의 수상돌기가 있어 수천 개의 시냅스를 형성할 수 있다"
    }
  },
  {
    "id": "BIO_AXON_020",
    "terminology": "축삭 (Axon)",
    "terminology_ko": "축삭",
    "terminology_en": "Axon",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "뉴런의 세포체에서 길게 뻗어나온 하나의 긴 돌기로, 활동전위를 세포체로부터 축삭 말단까지 전달하여 다른 뉴런, 근육, 분비선에 신호를 보내는 역할을 한다.",
    "definition_en": "A single long extension from the neuron's cell body that conducts action potentials from the cell body to the axon terminals, sending signals to other neurons, muscles, or glands.",
    "significance": "축삭은 신경계 내 장거리 정보 전달의 핵심 구조이며, 수초(myelin sheath)로 감싸인 축삭은 전달 속도를 크게 높여 신경계의 효율적 작동을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "산티아고 라몬 이 카할",
        "name_en": "Santiago Ramón y Cajal",
        "contribution": "뉴런의 축삭 구조와 신호 전달 방향(세포체→축삭)을 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뉴런",
        "name_en": "Neuron",
        "id": "BIO_NEURON_001"
      },
      {
        "name_ko": "수상돌기",
        "name_en": "Dendrite",
        "id": "BIO_DENDRITE_019"
      },
      {
        "name_ko": "수초",
        "name_en": "Myelin Sheath",
        "id": "BIO_MYELIN_021"
      },
      {
        "name_ko": "활동전위",
        "name_en": "Action Potential",
        "id": "BIO_ACTPOT_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Axon = '축(axis)' 같은 하나의 긴 줄기: 신호를 멀리 보내는 전선",
      "differential": "축삭은 뉴런당 '하나'이며 신호를 '보내고', 수상돌기는 '여러 개'이며 신호를 '받는다'",
      "key_point": "축삭은 수초로 감싸여 도약전도(saltatory conduction)를 통해 빠른 신호 전달이 가능하다",
      "common_mistake": "축삭이 짧다고 생각할 수 있지만, 척수의 운동뉴런 축삭은 1m 이상 될 수 있다"
    }
  },
  {
    "id": "BIO_MYELIN_021",
    "terminology": "수초 (Myelin Sheath)",
    "terminology_ko": "수초",
    "terminology_en": "Myelin Sheath",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "축삭을 감싸는 지방질 절연층으로, 신경교세포(중추신경계의 희소돌기아교세포, 말초신경계의 슈반세포)에 의해 형성된다. 도약전도를 통해 활동전위의 전달 속도를 크게 높인다.",
    "definition_en": "A fatty insulating layer that wraps around the axon, formed by glial cells (oligodendrocytes in the CNS, Schwann cells in the PNS). It greatly increases the speed of action potential transmission through saltatory conduction.",
    "significance": "수초의 손상은 다발성 경화증(MS) 등의 신경 질환을 유발하며, 수초화(myelination)는 아동기 뇌 발달에서 인지 기능 성숙의 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "루돌프 피르호",
        "name_en": "Rudolf Virchow",
        "contribution": "수초(myelin)라는 용어를 최초로 사용하고 그 구조를 기술하였다"
      },
      {
        "name_ko": "루이 앙투안 랑비에",
        "name_en": "Louis-Antoine Ranvier",
        "contribution": "수초 사이의 틈(랑비에 결절, Nodes of Ranvier)을 발견하여 도약전도의 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      },
      {
        "name_ko": "활동전위",
        "name_en": "Action Potential",
        "id": "BIO_ACTPOT_004"
      },
      {
        "name_ko": "뉴런",
        "name_en": "Neuron",
        "id": "BIO_NEURON_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수초 = 전선의 '절연 피복': 전기(활동전위)가 빠르고 안전하게 전달되도록 감싸는 피복",
      "differential": "수초는 축삭을 감싸는 '구조'이고, 도약전도는 수초 덕분에 가능한 빠른 신호 전달 '방식'이다",
      "key_point": "수초 사이의 틈(랑비에 결절)에서만 이온 교환이 일어나 활동전위가 '도약'하듯 빠르게 전달된다",
      "common_mistake": "수초가 모든 뉴런에 있는 것이 아니라, 무수초 신경섬유도 존재하며 전달 속도가 느리다"
    }
  },
  {
    "id": "BIO_DOPA_023",
    "terminology": "도파민 (Dopamine)",
    "terminology_ko": "도파민",
    "terminology_en": "Dopamine",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "보상, 동기, 쾌락, 운동 조절에 관여하는 주요 신경전달물질이다. 중뇌의 복측피개영역(VTA)과 흑질(substantia nigra)에서 주로 생성된다.",
    "definition_en": "A major neurotransmitter involved in reward, motivation, pleasure, and motor control. It is primarily produced in the ventral tegmental area (VTA) and substantia nigra of the midbrain.",
    "significance": "도파민 체계의 이상은 조현병(과잉), 파킨슨병(부족), 약물 중독(보상회로 과활성화) 등 다양한 정신적/신경학적 장애와 관련된다.",
    "key_researchers": [
      {
        "name_ko": "아르비드 칼슨",
        "name_en": "Arvid Carlsson",
        "contribution": "도파민이 독립적인 신경전달물질임을 발견하고 파킨슨병과의 관계를 규명하였다 (노벨상 2000)"
      },
      {
        "name_ko": "올레 호르니키비츠",
        "name_en": "Oleh Hornykiewicz",
        "contribution": "파킨슨병 환자의 뇌에서 도파민 부족을 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "BIO_NT_003"
      },
      {
        "name_ko": "세로토닌",
        "name_en": "Serotonin",
        "id": "BIO_SERO_024"
      },
      {
        "name_ko": "시냅스",
        "name_en": "Synapse",
        "id": "BIO_SYNAPSE_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도파민 = 'Do-pa-mine = Do(하다)+Pa(보상)': 무언가를 하도록 동기를 부여하는 보상 물질",
      "differential": "도파민은 '보상/동기/운동'에 관여하고, 세로토닌은 '기분/수면/식욕'에 관여한다",
      "key_point": "도파민 가설: 조현병은 도파민 과잉, 파킨슨병은 도파민 부족과 관련된다",
      "common_mistake": "도파민이 '쾌락 자체'의 물질이 아니라 '보상 예측과 동기'에 관여하는 물질이다 (wanting vs. liking)"
    }
  },
  {
    "id": "BIO_SERO_024",
    "terminology": "세로토닌 (Serotonin)",
    "terminology_ko": "세로토닌",
    "terminology_en": "Serotonin",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "기분 조절, 수면, 식욕, 통증 조절에 관여하는 신경전달물질이다. 뇌간의 봉선핵(raphe nuclei)에서 주로 생성되며, 체내 세로토닌의 약 90%는 장(腸)에 존재한다.",
    "definition_en": "A neurotransmitter involved in mood regulation, sleep, appetite, and pain modulation. It is primarily produced in the raphe nuclei of the brainstem; approximately 90% of the body's serotonin is found in the gut.",
    "significance": "세로토닌 부족은 우울증과 관련되며, 선택적 세로토닌 재흡수 억제제(SSRI)는 가장 널리 처방되는 항우울제이다.",
    "key_researchers": [
      {
        "name_ko": "비토리오 에르스파머",
        "name_en": "Vittorio Erspamer",
        "contribution": "세로토닌(5-HT)을 처음 발견하고 분리하였다"
      },
      {
        "name_ko": "베티 투이테스",
        "name_en": "Betty Twarog",
        "contribution": "세로토닌이 뇌에 존재하며 신경전달물질로 기능함을 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "BIO_NT_003"
      },
      {
        "name_ko": "도파민",
        "name_en": "Dopamine",
        "id": "BIO_DOPA_023"
      },
      {
        "name_ko": "뇌간",
        "name_en": "Brainstem",
        "id": "BIO_BSTEM_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "세로토닌 = 'Sero-tone-in = 기분(tone)을 조절(in)': 기분의 조율자",
      "differential": "세로토닌은 '기분/수면/식욕'에 관여하고, 도파민은 '보상/동기/운동'에 관여한다",
      "key_point": "SSRI(선택적 세로토닌 재흡수 억제제)는 시냅스에서 세로토닌의 재흡수를 막아 세로토닌 수준을 높인다",
      "common_mistake": "세로토닌 부족이 우울증의 '유일한 원인'이 아니며, 우울증의 원인은 다요인적이다"
    }
  },
  {
    "id": "BIO_TEMPORAL_025",
    "terminology": "측두엽 (Temporal Lobe)",
    "terminology_ko": "측두엽",
    "terminology_en": "Temporal Lobe",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌피질의 양쪽 측면(귀 위쪽)에 위치한 엽으로, 청각 처리, 언어 이해(베르니케 영역), 시각적 대상 인식, 기억(해마)을 담당한다.",
    "definition_en": "The lobe located on each side of the cerebral cortex (above the ears), responsible for auditory processing, language comprehension (Wernicke's area), visual object recognition, and memory (hippocampus).",
    "significance": "측두엽은 언어 이해, 청각, 기억의 핵심 영역이며, 측두엽 간질은 심리학에서 의식과 기억 연구의 중요한 임상 사례를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "카를 베르니케",
        "name_en": "Carl Wernicke",
        "contribution": "측두엽의 언어 이해 영역(베르니케 영역)을 발견하였다"
      },
      {
        "name_ko": "브렌다 밀너",
        "name_en": "Brenda Milner",
        "contribution": "내측 측두엽과 기억의 관계를 H.M. 사례를 통해 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "베르니케 영역",
        "name_en": "Wernicke's Area",
        "id": "BIO_WERNICK_012"
      },
      {
        "name_ko": "해마",
        "name_en": "Hippocampus",
        "id": "BIO_HIPPO_008"
      },
      {
        "name_ko": "전두엽",
        "name_en": "Frontal Lobe",
        "id": "BIO_FRONTAL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Temporal = 관자놀이(temple) 근처: 귀 위쪽 = 소리(청각)를 처리",
      "differential": "측두엽은 '청각/언어이해/기억'을, 두정엽은 '체감각/공간인지'를, 후두엽은 '시각'을 담당한다",
      "key_point": "측두엽의 4대 기능: 청각 처리, 언어 이해(베르니케), 시각 대상 인식, 기억(해마)",
      "common_mistake": "측두엽이 '청각만' 담당하는 것이 아니라 언어 이해, 기억, 정서(편도체) 등 다양한 기능을 수행한다"
    }
  },
  {
    "id": "BIO_PARIETAL_026",
    "terminology": "두정엽 (Parietal Lobe)",
    "terminology_ko": "두정엽",
    "terminology_en": "Parietal Lobe",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌피질의 상부 중앙에 위치한 엽으로, 중심구 뒤쪽에 있다. 체감각(촉각, 온도, 통증, 고유감각) 처리, 공간 인지, 주의, 수리적 사고를 담당한다.",
    "definition_en": "The lobe located in the upper central part of the cerebral cortex, posterior to the central sulcus. It is responsible for processing somatosensory information (touch, temperature, pain, proprioception), spatial awareness, attention, and mathematical thinking.",
    "significance": "두정엽은 신체 지각과 공간 인지의 핵심 영역이며, 편측 무시(neglect) 증후군은 두정엽 손상의 대표적 사례로 주의와 의식 연구에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "와일더 펜필드",
        "name_en": "Wilder Penfield",
        "contribution": "두정엽의 체감각피질 지도(감각 호문쿨루스)를 작성하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "전두엽",
        "name_en": "Frontal Lobe",
        "id": "BIO_FRONTAL_010"
      },
      {
        "name_ko": "후두엽",
        "name_en": "Occipital Lobe",
        "id": "BIO_OCCIPITAL_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "일차체감각피질",
        "name_en": "Primary Somatosensory Cortex",
        "definition": "중심후회에 위치하며, 신체 각 부위의 촉각/통증/온도 감각을 처리한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Parietal = 정수리(paries=wall): 머리 꼭대기 근처에서 신체 감각을 처리",
      "differential": "두정엽은 '체감각/공간인지'를 담당하고, 전두엽은 '운동/계획'을 담당한다",
      "key_point": "감각 호문쿨루스(sensory homunculus): 신체 부위의 감각 민감도에 따라 피질 면적이 다르다 (손, 입술 영역이 넓다)",
      "common_mistake": "두정엽 손상으로 나타나는 편측 무시(neglect)는 시각 장애가 아니라 '주의'의 장애이다"
    }
  },
  {
    "id": "BIO_OCCIPITAL_027",
    "terminology": "후두엽 (Occipital Lobe)",
    "terminology_ko": "후두엽",
    "terminology_en": "Occipital Lobe",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌피질의 가장 후방에 위치한 엽으로, 시각 정보의 처리를 담당한다. 일차시각피질(V1)이 위치하며, 색채, 형태, 움직임, 깊이 등 시각의 다양한 요소를 처리한다.",
    "definition_en": "The lobe located at the very back of the cerebral cortex, responsible for visual information processing. It contains the primary visual cortex (V1) and processes various visual features including color, shape, motion, and depth.",
    "significance": "후두엽은 시각 인지의 신경학적 기초이며, 후두엽 손상 사례는 맹시(blindsight) 등 의식적 지각과 무의식적 처리의 분리를 보여주는 중요한 연구 주제이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 휴벨",
        "name_en": "David Hubel",
        "contribution": "토르스텐 비젤과 함께 시각피질에서 특정 자극에 반응하는 뉴런(특징 탐지기)을 발견하였다 (노벨상 1981)"
      },
      {
        "name_ko": "토르스텐 비젤",
        "name_en": "Torsten Wiesel",
        "contribution": "시각피질의 기둥 구조와 시각 발달의 결정적 시기를 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "측두엽",
        "name_en": "Temporal Lobe",
        "id": "BIO_TEMPORAL_025"
      },
      {
        "name_ko": "두정엽",
        "name_en": "Parietal Lobe",
        "id": "BIO_PARIETAL_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Occipital = 뒤통수(occiput): 뒤통수에서 눈으로 들어온 시각 정보를 처리",
      "differential": "후두엽은 '시각' 전문이고, 측두엽은 '청각/언어이해'를, 두정엽은 '체감각/공간'을 담당한다",
      "key_point": "시각 정보는 눈(망막) → 시상(LGN) → 후두엽(V1)의 경로로 전달된다",
      "common_mistake": "눈 바로 뒤가 아니라 뒤통수에 시각 처리 영역이 있다는 점이 직관에 반한다"
    }
  },
  {
    "id": "BIO_THALAMUS_028",
    "terminology": "시상 (Thalamus)",
    "terminology_ko": "시상",
    "terminology_en": "Thalamus",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "대뇌의 중심부에 위치한 달걀 모양의 구조로, 후각을 제외한 모든 감각 정보를 대뇌피질의 적절한 영역으로 중계하는 '중계소' 역할을 한다.",
    "definition_en": "An egg-shaped structure at the center of the brain that serves as a relay station, directing all sensory information (except smell) to the appropriate areas of the cerebral cortex.",
    "significance": "시상은 감각 처리의 핵심 관문으로, 의식적 지각이 이루어지기 위해 감각 정보가 반드시 거쳐야 하는 구조이며, 수면-각성 주기 조절에도 관여한다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 존스",
        "name_en": "Edward Jones",
        "contribution": "시상의 세부 핵 구조와 감각 중계 기능을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "시상하부",
        "name_en": "Hypothalamus",
        "id": "BIO_HYPOTH_009"
      },
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "후두엽",
        "name_en": "Occipital Lobe",
        "id": "BIO_OCCIPITAL_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "시상(Thalamus) = 뇌의 '교환대(switchboard)': 감각 정보를 올바른 피질 영역으로 연결",
      "differential": "시상은 감각 정보를 '중계'하고, 시상하부는 항상성과 동기를 '조절'한다",
      "key_point": "후각만 시상을 거치지 않고 대뇌피질로 직접 전달된다는 예외를 기억할 것",
      "common_mistake": "시상이 단순한 '수동적 전달소'가 아니라 감각 정보를 선별하고 조절하는 '능동적' 기능도 수행한다"
    }
  },
  {
    "id": "BIO_CEREBELLUM_029",
    "terminology": "소뇌 (Cerebellum)",
    "terminology_ko": "소뇌",
    "terminology_en": "Cerebellum",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "뇌간의 뒤쪽에 위치한 구조로, 수의적 운동의 조정(coordination), 균형 유지, 자세 조절, 운동 학습을 담당한다. 뇌 전체 부피의 약 10%이지만 뉴런의 약 50% 이상을 포함한다.",
    "definition_en": "A structure located at the back of the brainstem, responsible for the coordination of voluntary movement, balance, posture, and motor learning. It comprises about 10% of brain volume but contains over 50% of the brain's neurons.",
    "significance": "소뇌는 복잡한 운동 기술(악기 연주, 스포츠 등)의 학습과 자동화에 핵심적이며, 최근 연구에서는 인지 기능과 정서 조절에도 관여함이 밝혀지고 있다.",
    "key_researchers": [
      {
        "name_ko": "루이지 롤란도",
        "name_en": "Luigi Rolando",
        "contribution": "소뇌 손상 실험을 통해 소뇌가 운동 조정에 관여함을 초기에 입증하였다"
      },
      {
        "name_ko": "마사오 이토",
        "name_en": "Masao Ito",
        "contribution": "소뇌의 시냅스 가소성(장기억압, LTD)과 운동 학습의 메커니즘을 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뇌간",
        "name_en": "Brainstem",
        "id": "BIO_BSTEM_030"
      },
      {
        "name_ko": "전두엽",
        "name_en": "Frontal Lobe",
        "id": "BIO_FRONTAL_010"
      },
      {
        "name_ko": "가소성",
        "name_en": "Neuroplasticity",
        "id": "BIO_PLAST_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Cerebellum = 'little brain(작은 뇌)': 뇌 뒤에 달린 작은 뇌가 운동을 조율",
      "differential": "소뇌는 운동의 '조정/균형'을, 전두엽의 운동피질은 운동의 '시작/계획'을 담당한다",
      "key_point": "소뇌 손상 시 마비가 아니라 '운동 실조(ataxia)'가 나타난다 (움직이지 못하는 게 아니라 움직임이 부정확해진다)",
      "common_mistake": "소뇌가 운동'만' 담당하는 것이 아니라 언어, 주의, 정서 조절에도 관여한다는 최근 연구 결과가 있다"
    }
  },
  {
    "id": "BIO_BSTEM_030",
    "terminology": "뇌간 (Brainstem)",
    "terminology_ko": "뇌간",
    "terminology_en": "Brainstem",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "뇌의 가장 아래 부분으로 척수와 연결되며, 중뇌, 교뇌(뇌교), 연수로 구성된다. 호흡, 심박, 의식/각성, 수면 등 생명 유지에 필수적인 기능을 자동으로 조절한다.",
    "definition_en": "The lowest part of the brain, connecting to the spinal cord, composed of the midbrain, pons, and medulla. It automatically regulates vital life functions including breathing, heart rate, consciousness/arousal, and sleep.",
    "significance": "뇌간은 생존에 가장 기본적인 기능을 담당하며, 뇌간 손상은 의식 상실이나 사망을 유발할 수 있다. 뇌사 판정의 핵심 기준이 뇌간 기능의 소실이다.",
    "key_researchers": [
      {
        "name_ko": "주세페 모루치",
        "name_en": "Giuseppe Moruzzi",
        "contribution": "호레이스 매군과 함께 뇌간의 망상활성계(reticular activating system)를 발견하여 각성과 의식의 신경 기초를 규명하였다"
      },
      {
        "name_ko": "호레이스 매군",
        "name_en": "Horace Magoun",
        "contribution": "뇌간 망상체의 각성 기능을 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소뇌",
        "name_en": "Cerebellum",
        "id": "BIO_CEREBELLUM_029"
      },
      {
        "name_ko": "시상",
        "name_en": "Thalamus",
        "id": "BIO_THALAMUS_028"
      },
      {
        "name_ko": "자율신경계",
        "name_en": "Autonomic Nervous System",
        "id": "BIO_ANS_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "연수",
        "name_en": "Medulla Oblongata",
        "definition": "호흡, 심박, 혈압 조절 등 가장 기본적인 생명 기능을 담당하는 뇌간의 최하부"
      },
      {
        "name_ko": "교뇌(뇌교)",
        "name_en": "Pons",
        "definition": "소뇌와 대뇌를 연결하며, 수면과 꿈(REM 수면)의 조절에 관여한다"
      },
      {
        "name_ko": "중뇌",
        "name_en": "Midbrain",
        "definition": "시각 및 청각 반사, 안구 운동, 도파민 생성(흑질, VTA)을 담당한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "뇌간 = 뇌의 '줄기(stem)': 나무의 줄기처럼 생명 유지의 기초를 담당",
      "differential": "뇌간은 '생존 기능(호흡/심박/각성)'을 자동 조절하고, 대뇌피질은 '고등인지기능'을 담당한다",
      "key_point": "뇌간의 3부분(연수-교뇌-중뇌) 중 연수가 가장 하위이며 호흡/심박 등 가장 기본적 기능을 담당한다",
      "common_mistake": "뇌간이 '원시적'이라고 해서 중요하지 않은 것이 아니다. 뇌간 손상은 즉각적인 생명 위험을 초래한다"
    }
  },
  {
    "id": "BIO_CORPUS_031",
    "terminology": "뇌량 (Corpus Callosum)",
    "terminology_ko": "뇌량",
    "terminology_en": "Corpus Callosum",
    "category": "BIO",
    "category_name": "생물심리학 (Biological Psychology)",
    "definition": "좌반구와 우반구를 연결하는 약 2억 개의 신경섬유(축삭) 다발로, 양쪽 반구 간의 정보 교환과 협력적 기능 수행을 가능하게 하는 뇌에서 가장 큰 백질 구조이다.",
    "definition_en": "A thick bundle of approximately 200 million nerve fibers (axons) connecting the left and right hemispheres, enabling information exchange and cooperative functioning between the two hemispheres. It is the largest white matter structure in the brain.",
    "significance": "뇌량 절단(분리뇌 수술) 연구는 좌우 반구의 기능적 특화를 밝히는 데 결정적 역할을 하였으며, 의식의 통합적 본질에 대한 중요한 통찰을 제공하였다.",
    "key_researchers": [
      {
        "name_ko": "로저 스페리",
        "name_en": "Roger Sperry",
        "contribution": "뇌량 절단(분리뇌) 환자 연구를 통해 양반구의 독립적 기능과 협력을 규명하였다 (노벨상 1981)"
      },
      {
        "name_ko": "마이클 가자니가",
        "name_en": "Michael Gazzaniga",
        "contribution": "분리뇌 연구의 선구자로 뇌량 절단 후 좌우 반구의 독립적 정보 처리를 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "좌반구/우반구",
        "name_en": "Cerebral Lateralization",
        "id": "BIO_LATERAL_018"
      },
      {
        "name_ko": "대뇌피질",
        "name_en": "Cerebral Cortex",
        "id": "BIO_CORTEX_005"
      },
      {
        "name_ko": "축삭",
        "name_en": "Axon",
        "id": "BIO_AXON_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Corpus Callosum = '단단한(callosum) 몸체(corpus)': 좌우 뇌를 연결하는 단단한 다리",
      "differential": "뇌량은 좌우 반구를 연결하는 '교량'이고, 편재화는 각 반구가 특정 기능에 특화된 '현상'이다",
      "key_point": "분리뇌(split-brain) 실험: 뇌량 절단 후 좌시야 정보는 우반구만, 우시야 정보는 좌반구만 처리한다",
      "common_mistake": "뇌량이 절단되어도 일상생활에서는 큰 문제가 없어 보일 수 있지만, 통제된 실험에서 양반구 간 정보 단절이 드러난다"
    }
  }
];

TERMS_DATA.CONSCIOUS = [
  {
    "id": "CONSCIOUS_CONSC_001",
    "terminology": "의식 (Consciousness)",
    "terminology_ko": "의식",
    "terminology_en": "Consciousness",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "자기 자신과 환경을 인식하는 주관적 자각 상태이다. 감각, 사고, 감정 등 내적 경험과 외부 세계에 대한 알아차림을 포괄한다.",
    "definition_en": "The subjective state of awareness of oneself and the environment. It encompasses the awareness of internal experiences such as sensations, thoughts, and emotions, as well as the external world.",
    "significance": "의식은 심리학에서 가장 근본적인 연구 주제 중 하나로, Wilhelm Wundt가 구성주의 심리학에서 의식의 구조를 분석한 이래 인지과학과 신경과학의 핵심 탐구 대상이 되었다. 의식의 본질에 관한 연구는 주의, 수면, 약물 등 다양한 하위 영역과 직결된다.",
    "key_researchers": [
      {
        "name_ko": "빌헬름 분트",
        "name_en": "Wilhelm Wundt",
        "contribution": "최초의 심리학 실험실을 설립하고 내성법을 통해 의식의 구조를 분석하고자 하였다."
      },
      {
        "name_ko": "윌리엄 제임스",
        "name_en": "William James",
        "contribution": "'의식의 흐름(stream of consciousness)' 개념을 제안하여, 의식이 고정된 요소가 아닌 연속적 흐름임을 강조하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잠재의식",
        "name_en": "Subconscious",
        "id": "CONSCIOUS_SUBCO_002"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "CONSCIOUS_UNCON_003"
      },
      {
        "name_ko": "변성의식상태",
        "name_en": "Altered States of Consciousness",
        "id": "CONSCIOUS_ASC_024"
      }
    ],
    "sub_types": [
      {
        "name_ko": "초점 의식",
        "name_en": "Focal Awareness",
        "description": "주의를 기울이고 있는 대상에 대한 명확한 자각 상태"
      },
      {
        "name_ko": "주변 의식",
        "name_en": "Peripheral Awareness",
        "description": "초점 밖에 있지만 희미하게 인식되는 자각 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "의식 = '알아차림(awareness)'. Conscious의 어원은 라틴어 'conscius'(함께 알다)이다.",
      "differential": "의식은 현재 자각하는 경험 전체이고, 주의(attention)는 그중 특정 자극에 집중하는 과정이다.",
      "key_point": "William James는 의식을 고정된 상태가 아닌 끊임없이 흘러가는 '의식의 흐름'으로 묘사하였다.",
      "common_mistake": "의식을 단순히 '깨어 있는 상태'로만 이해하는 것. 의식은 자각의 수준과 내용을 모두 포함하는 넓은 개념이다."
    }
  },
  {
    "id": "CONSCIOUS_SUBCO_002",
    "terminology": "잠재의식 (Subconscious)",
    "terminology_ko": "잠재의식",
    "terminology_en": "Subconscious",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "현재 의식적으로 자각하고 있지는 않지만 주의를 기울이면 의식으로 떠올릴 수 있는 정신 활동의 수준이다. 자동화된 습관, 배경 사고 등이 이에 해당한다.",
    "definition_en": "A level of mental activity that is not currently in conscious awareness but can be brought into awareness with directed attention. Automated habits and background thoughts belong to this level.",
    "significance": "잠재의식은 의식과 무의식 사이의 중간 수준으로, 일상에서 자동화된 행동(예: 운전 중 무의식적 조작)이 가능한 이유를 설명한다. 현대 인지심리학에서는 자동 처리(automatic processing)의 기반으로 연구된다.",
    "key_researchers": [
      {
        "name_ko": "피에르 자네",
        "name_en": "Pierre Janet",
        "contribution": "잠재의식(subconscious) 개념을 체계적으로 사용하여 해리 현상과 자동적 행동을 설명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "CONSCIOUS_UNCON_003"
      },
      {
        "name_ko": "선택적 주의",
        "name_en": "Selective Attention",
        "id": "CONSCIOUS_SELAT_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "잠재의식 = '잠자고(잠재) 있지만 깨울 수 있는 의식'. Sub(아래) + conscious(의식) = 의식 바로 아래.",
      "differential": "잠재의식은 노력하면 의식으로 가져올 수 있지만, 무의식은 일반적으로 직접 접근이 불가능하다.",
      "key_point": "Freud는 잠재의식이라는 용어 대신 '전의식(preconscious)'을 선호하였다. 잠재의식과 전의식은 유사한 개념이다.",
      "common_mistake": "잠재의식과 무의식을 같은 것으로 혼동하는 것. 잠재의식은 접근 가능하지만 무의식은 접근이 어렵다."
    }
  },
  {
    "id": "CONSCIOUS_UNCON_003",
    "terminology": "무의식 (Unconscious)",
    "terminology_ko": "무의식",
    "terminology_en": "Unconscious",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "의식적 자각 밖에 있으며 일반적인 노력으로는 의식으로 가져올 수 없는 정신 과정의 영역이다. 억압된 기억, 근본적 욕구, 자동적 정보 처리 등이 포함된다.",
    "definition_en": "A realm of mental processes that lies outside conscious awareness and generally cannot be brought into consciousness through ordinary effort. It includes repressed memories, fundamental drives, and automatic information processing.",
    "significance": "Freud는 무의식이 인간 행동의 가장 강력한 동기를 포함한다고 주장하여 정신분석학의 기초를 놓았다. 현대 심리학에서는 암묵 기억, 점화 효과, 맹시(blindsight) 등의 연구를 통해 무의식적 정보 처리의 존재가 실험적으로 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석학을 창시하여 무의식이 인간 행동과 정신질환의 근본적 원인임을 주장하였다."
      },
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "개인 무의식 외에 집단무의식(collective unconscious) 개념을 제안하여 무의식의 범위를 확장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      },
      {
        "name_ko": "잠재의식",
        "name_en": "Subconscious",
        "id": "CONSCIOUS_SUBCO_002"
      },
      {
        "name_ko": "역치하 자극",
        "name_en": "Subliminal Stimulus",
        "id": "CONSCIOUS_SUBLM_030"
      }
    ],
    "sub_types": [
      {
        "name_ko": "개인 무의식",
        "name_en": "Personal Unconscious",
        "description": "개인의 억압된 경험과 잊힌 기억으로 구성된 무의식 영역 (Jung의 분류)"
      },
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "description": "인류 전체가 공유하는 원형(archetype)을 포함하는 보편적 무의식 (Jung의 개념)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "무의식 = '빙산의 수면 아래 부분'. Freud는 의식은 빙산의 일각이고 무의식이 대부분을 차지한다고 비유하였다.",
      "differential": "무의식은 자각 밖에 있고 직접 접근이 어렵지만, 잠재의식(전의식)은 노력하면 의식으로 가져올 수 있다.",
      "key_point": "현대 심리학에서 무의식적 처리는 점화(priming), 암묵 학습 등의 실험을 통해 Freud와는 다른 방식으로 입증되었다.",
      "common_mistake": "무의식 = Freud의 성적 억압이라고만 한정하는 것. 현대적 무의식 개념은 자동적 인지 처리까지 포괄한다."
    }
  },
  {
    "id": "CONSCIOUS_CIRCAD_004",
    "terminology": "일주기 리듬 (Circadian Rhythm)",
    "terminology_ko": "일주기 리듬",
    "terminology_en": "Circadian Rhythm",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "약 24시간을 주기로 반복되는 생물학적 리듬으로, 수면-각성 주기, 체온, 호르몬 분비 등 신체의 다양한 기능을 조절한다.",
    "definition_en": "A biological rhythm that repeats approximately every 24 hours, regulating various bodily functions including the sleep-wake cycle, body temperature, and hormone secretion.",
    "significance": "일주기 리듬은 시상하부의 시교차상핵(SCN)에 의해 조절되며, 빛이 주요 동조 인자(zeitgeber)로 작용한다. 시차적응(jet lag), 교대 근무 장애, 계절성 정동 장애 등 다양한 현상을 이해하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "미셸 시프레",
        "name_en": "Michel Siffre",
        "contribution": "동굴 격리 실험을 통해 외부 시간 단서 없이도 약 25시간의 내인성 일주기 리듬이 유지됨을 입증하였다."
      },
      {
        "name_ko": "제프리 홀",
        "name_en": "Jeffrey Hall",
        "contribution": "Michael Rosbash, Michael Young과 함께 일주기 리듬의 분자적 메커니즘을 밝혀 2017년 노벨 생리의학상을 수상하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수면주기",
        "name_en": "Sleep Cycle",
        "id": "CONSCIOUS_SLCYC_006"
      },
      {
        "name_ko": "렘수면",
        "name_en": "REM Sleep",
        "id": "CONSCIOUS_REM_005"
      },
      {
        "name_ko": "불면증",
        "name_en": "Insomnia",
        "id": "CONSCIOUS_INSOM_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Circadian = 'circa(약) + diem(하루)' = '약 하루'. 24시간 주기 생체시계.",
      "differential": "일주기 리듬은 약 24시간 주기이고, 초일주기 리듬(ultradian rhythm)은 24시간보다 짧은 주기(예: 90분 수면주기)이다.",
      "key_point": "시교차상핵(SCN)이 생체시계의 중추이며, 빛이 가장 강력한 동조 인자(zeitgeber)이다.",
      "common_mistake": "일주기 리듬이 정확히 24시간이라고 생각하는 것. 실제로는 약 24.2시간이며, 빛에 의해 매일 24시간으로 재설정된다."
    }
  },
  {
    "id": "CONSCIOUS_REM_005",
    "terminology": "렘수면 (REM Sleep)",
    "terminology_ko": "렘수면",
    "terminology_en": "REM Sleep",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "빠른 안구 운동(Rapid Eye Movement)이 나타나는 수면 단계로, 생생한 꿈이 주로 발생하며 뇌파가 각성 시와 유사하게 활성화된다. 신체 근육은 일시적으로 마비된다.",
    "definition_en": "A sleep stage characterized by rapid eye movements, during which vivid dreaming primarily occurs and brain waves resemble those of waking. Voluntary muscles are temporarily paralyzed.",
    "significance": "REM 수면은 기억 공고화, 정서 조절, 학습에 핵심적 역할을 한다. REM 수면 중 뇌는 낮 동안의 경험을 재조직하며, REM 수면 박탈은 집중력 저하, 정서 불안정 등을 초래한다.",
    "key_researchers": [
      {
        "name_ko": "유진 아세린스키",
        "name_en": "Eugene Aserinsky",
        "contribution": "Nathaniel Kleitman과 함께 수면 중 빠른 안구 운동(REM)을 최초로 발견하였다(1953)."
      },
      {
        "name_ko": "나다니엘 클라이트먼",
        "name_en": "Nathaniel Kleitman",
        "contribution": "수면 연구의 아버지로 불리며, Aserinsky와 함께 REM 수면을 발견하였다."
      },
      {
        "name_ko": "윌리엄 디멘트",
        "name_en": "William Dement",
        "contribution": "REM 수면과 꿈의 관계를 체계적으로 연구하고 수면의학 분야를 개척하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      },
      {
        "name_ko": "수면주기",
        "name_en": "Sleep Cycle",
        "id": "CONSCIOUS_SLCYC_006"
      },
      {
        "name_ko": "자각몽",
        "name_en": "Lucid Dreaming",
        "id": "CONSCIOUS_LUCID_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "REM = Rapid Eye Movement. 'R'은 '꿈(dReam)'의 R로 기억하면 좋다.",
      "differential": "REM 수면은 뇌가 활성화되지만 신체는 마비되고, 비렘수면은 뇌 활동이 감소하지만 신체 움직임이 가능하다.",
      "key_point": "REM 수면은 밤이 갈수록 길어지며, 수면 후반부에 가장 많이 나타난다. REM 중 근육 마비는 꿈 행동을 방지한다.",
      "common_mistake": "REM 수면만 꿈이 나타난다고 생각하는 것. 비렘수면에서도 꿈이 발생하지만 덜 생생하다."
    }
  },
  {
    "id": "CONSCIOUS_SLCYC_006",
    "terminology": "수면주기 (Sleep Cycle)",
    "terminology_ko": "수면주기",
    "terminology_en": "Sleep Cycle",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "비렘수면(NREM 1~3단계)과 렘수면(REM)이 순차적으로 반복되는 약 90분 주기의 수면 패턴이다. 하룻밤에 보통 4~5회 반복된다.",
    "definition_en": "A roughly 90-minute cyclical pattern of sleep in which NREM stages (1 through 3) and REM sleep occur sequentially. This cycle typically repeats 4 to 5 times per night.",
    "significance": "수면주기를 이해하면 수면의 구조와 질을 평가할 수 있다. 초반 주기에는 서파수면(깊은 수면)의 비중이 크고, 후반 주기에는 REM 수면의 비중이 커져 꿈이 많아진다. 수면주기의 교란은 다양한 수면장애의 원인이 된다.",
    "key_researchers": [
      {
        "name_ko": "나다니엘 클라이트먼",
        "name_en": "Nathaniel Kleitman",
        "contribution": "수면 단계와 주기적 패턴을 체계적으로 기술하여 현대 수면 연구의 기틀을 마련하였다."
      },
      {
        "name_ko": "윌리엄 디멘트",
        "name_en": "William Dement",
        "contribution": "수면주기의 구조와 REM-NREM 교대 패턴을 상세히 기술하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "렘수면",
        "name_en": "REM Sleep",
        "id": "CONSCIOUS_REM_005"
      },
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      },
      {
        "name_ko": "서파수면",
        "name_en": "Slow-Wave Sleep",
        "id": "CONSCIOUS_SWS_020"
      },
      {
        "name_ko": "수면 방추파",
        "name_en": "Sleep Spindle",
        "id": "CONSCIOUS_SPNDL_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수면주기 = '90분 엘리베이터'. NREM 1층→2층→3층(깊은 수면)→다시 올라와서→REM(꿈의 층)을 반복.",
      "differential": "수면주기는 약 90분의 초일주기 리듬(ultradian rhythm)이고, 수면-각성 주기는 약 24시간의 일주기 리듬이다.",
      "key_point": "하룻밤에 4~5회 반복되며, 초반 주기는 깊은 수면(서파수면)이, 후반 주기는 REM 수면이 우세하다.",
      "common_mistake": "수면주기가 항상 동일하다고 생각하는 것. 밤이 깊어질수록 REM 수면은 길어지고 서파수면은 줄어든다."
    }
  },
  {
    "id": "CONSCIOUS_NREM_007",
    "terminology": "비렘수면 (NREM Sleep)",
    "terminology_ko": "비렘수면",
    "terminology_en": "NREM Sleep",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "빠른 안구 운동이 나타나지 않는 수면 단계의 총칭으로, N1(입면기), N2(경수면), N3(서파수면, 깊은 수면)의 세 단계로 구분된다. 전체 수면의 약 75~80%를 차지한다.",
    "definition_en": "A collective term for sleep stages without rapid eye movements, divided into three stages: N1 (light sleep onset), N2 (light sleep), and N3 (slow-wave sleep, deep sleep). It comprises approximately 75-80% of total sleep.",
    "significance": "비렘수면은 신체 회복, 성장호르몬 분비, 면역 기능 강화에 핵심적 역할을 한다. 특히 N3(서파수면)은 신체적 피로 회복과 선언적 기억의 공고화에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "앨런 렉트샤펜",
        "name_en": "Allan Rechtschaffen",
        "contribution": "Anthony Kales와 함께 수면 단계 분류의 표준 체계(R&K 매뉴얼)를 확립하였다(1968)."
      },
      {
        "name_ko": "앤서니 케일스",
        "name_en": "Anthony Kales",
        "contribution": "Rechtschaffen과 함께 수면 단계 채점 기준을 표준화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "렘수면",
        "name_en": "REM Sleep",
        "id": "CONSCIOUS_REM_005"
      },
      {
        "name_ko": "서파수면",
        "name_en": "Slow-Wave Sleep",
        "id": "CONSCIOUS_SWS_020"
      },
      {
        "name_ko": "수면 방추파",
        "name_en": "Sleep Spindle",
        "id": "CONSCIOUS_SPNDL_019"
      }
    ],
    "sub_types": [
      {
        "name_ko": "N1 (입면기)",
        "name_en": "N1 (Sleep Onset)",
        "description": "각성에서 수면으로 전환되는 가장 얕은 수면 단계로, 세타파가 나타나며 5~10분 지속된다"
      },
      {
        "name_ko": "N2 (경수면)",
        "name_en": "N2 (Light Sleep)",
        "description": "수면 방추파와 K-복합체가 나타나는 단계로, 전체 수면의 약 50%를 차지한다"
      },
      {
        "name_ko": "N3 (서파수면)",
        "name_en": "N3 (Slow-Wave Sleep)",
        "description": "델타파가 우세한 가장 깊은 수면 단계로, 신체 회복과 성장호르몬 분비가 집중적으로 이루어진다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "NREM = Non-REM. 'N'은 단계 번호와 함께 N1, N2, N3으로 기억. 숫자가 클수록 깊은 수면.",
      "differential": "NREM은 뇌 활동이 점진적으로 감소하고 신체 회복이 주 기능이지만, REM은 뇌가 활성화되고 정서/기억 처리가 주 기능이다.",
      "key_point": "N2 단계가 전체 수면의 약 50%로 가장 큰 비중을 차지하며, N3(서파수면)은 수면 전반부에 집중된다.",
      "common_mistake": "비렘수면이 '쉬는 수면'이라서 덜 중요하다고 생각하는 것. 서파수면은 신체 회복과 기억 공고화에 필수적이다."
    }
  },
  {
    "id": "CONSCIOUS_SLDEBT_008",
    "terminology": "수면 부채 (Sleep Debt)",
    "terminology_ko": "수면 부채",
    "terminology_en": "Sleep Debt",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "필요한 수면량을 충족하지 못해 누적된 수면 부족 상태이다. 수면 부채가 쌓이면 인지 능력, 주의력, 정서 조절이 저하되며, 짧은 낮잠으로는 완전히 해소되지 않는다.",
    "definition_en": "A cumulative state of sleep insufficiency resulting from not meeting one's required sleep amount. Accumulated sleep debt impairs cognitive function, attention, and emotional regulation, and cannot be fully resolved by brief naps.",
    "significance": "수면 부채 연구는 현대 사회에서 만성적 수면 부족의 심각성을 과학적으로 입증하였다. 수면 부채는 사고 위험 증가, 면역력 저하, 비만, 심혈관 질환 등과 관련되어 공중보건의 중요 의제이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 디멘트",
        "name_en": "William Dement",
        "contribution": "수면 부채(sleep debt) 개념을 대중화하고, 수면 부족의 누적 효과를 체계적으로 연구하였다."
      },
      {
        "name_ko": "데이비드 딩게스",
        "name_en": "David Dinges",
        "contribution": "수면 제한 실험을 통해 만성적 수면 부족이 인지 수행에 미치는 누적 효과를 실증하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불면증",
        "name_en": "Insomnia",
        "id": "CONSCIOUS_INSOM_009"
      },
      {
        "name_ko": "일주기 리듬",
        "name_en": "Circadian Rhythm",
        "id": "CONSCIOUS_CIRCAD_004"
      },
      {
        "name_ko": "기면증",
        "name_en": "Narcolepsy",
        "id": "CONSCIOUS_NARCO_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수면 부채 = '잠의 빚'. 빚은 갚지 않으면 이자처럼 누적되어 인지 능력의 파산을 초래한다.",
      "differential": "수면 부채는 누적된 수면 부족량이고, 불면증은 수면을 취하기 어려운 수면장애이다.",
      "key_point": "하루 6시간 수면을 2주 지속하면 이틀 밤을 완전히 새운 것과 비슷한 인지 저하가 나타난다.",
      "common_mistake": "주말에 몰아서 자면 수면 부채가 완전히 해소된다고 생각하는 것. 만성 수면 부채는 쉽게 회복되지 않는다."
    }
  },
  {
    "id": "CONSCIOUS_INSOM_009",
    "terminology": "불면증 (Insomnia)",
    "terminology_ko": "불면증",
    "terminology_en": "Insomnia",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "잠들기 어렵거나, 수면을 유지하기 어렵거나, 너무 일찍 깨어나는 것이 반복되는 수면장애이다. 주간 기능 저하를 동반할 때 임상적으로 진단된다.",
    "definition_en": "A sleep disorder characterized by persistent difficulty initiating sleep, maintaining sleep, or early morning awakening, accompanied by daytime functional impairment.",
    "significance": "불면증은 가장 흔한 수면장애로 성인의 약 10~15%가 만성 불면증을 경험한다. 불안, 우울증과 높은 공병률을 보이며, 인지행동치료(CBT-I)가 약물치료보다 장기적으로 효과적인 치료법으로 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "찰스 모린",
        "name_en": "Charles Morin",
        "contribution": "불면증에 대한 인지행동치료(CBT-I)의 효과를 체계적으로 연구하고 표준화하였다."
      },
      {
        "name_ko": "아서 스필먼",
        "name_en": "Arthur Spielman",
        "contribution": "불면증의 3P 모형(소인-촉발-지속 요인)을 제안하여 만성 불면증의 발달 과정을 설명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수면 부채",
        "name_en": "Sleep Debt",
        "id": "CONSCIOUS_SLDEBT_008"
      },
      {
        "name_ko": "수면무호흡증",
        "name_en": "Sleep Apnea",
        "id": "CONSCIOUS_APNEA_010"
      },
      {
        "name_ko": "일주기 리듬",
        "name_en": "Circadian Rhythm",
        "id": "CONSCIOUS_CIRCAD_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "입면 불면증",
        "name_en": "Sleep-Onset Insomnia",
        "description": "잠들기까지 30분 이상 걸리는 유형으로, 불안과 관련이 깊다"
      },
      {
        "name_ko": "수면 유지 불면증",
        "name_en": "Sleep Maintenance Insomnia",
        "description": "자주 깨거나 다시 잠들기 어려운 유형으로, 우울증과 관련이 깊다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "불면증 = '不眠(잠 못 자는) 症'. Insomnia의 'In'(없다) + 'somnia'(잠) = 잠이 없는 상태.",
      "differential": "불면증은 잠을 자려고 해도 못 자는 것이고, 수면 부채는 스스로 수면 시간을 줄여서 생기는 부족이다.",
      "key_point": "불면증의 가장 효과적인 장기 치료법은 약물이 아닌 인지행동치료(CBT-I)이다.",
      "common_mistake": "불면증 환자에게 수면제가 최선의 치료라고 생각하는 것. 수면제는 단기적 효과만 있고 의존 위험이 있다."
    }
  },
  {
    "id": "CONSCIOUS_APNEA_010",
    "terminology": "수면무호흡증 (Sleep Apnea)",
    "terminology_ko": "수면무호흡증",
    "terminology_en": "Sleep Apnea",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "수면 중 기도가 반복적으로 막히거나 호흡 조절 중추의 이상으로 호흡이 일시적으로 정지되는 수면장애이다. 코골이, 주간 졸음, 피로를 유발한다.",
    "definition_en": "A sleep disorder in which breathing repeatedly stops during sleep due to airway obstruction or impaired central respiratory control. It causes snoring, daytime sleepiness, and fatigue.",
    "significance": "수면무호흡증은 고혈압, 심장질환, 뇌졸중의 위험을 높이는 심각한 건강 문제이다. 폐쇄성 수면무호흡은 성인의 약 2~9%에서 발생하며, 비만이 주요 위험 요인이다. CPAP(지속적 양압 환기)이 표준 치료법이다.",
    "key_researchers": [
      {
        "name_ko": "콜린 설리번",
        "name_en": "Colin Sullivan",
        "contribution": "폐쇄성 수면무호흡증 치료를 위한 CPAP(지속적 양압 환기) 장치를 개발하였다(1981)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불면증",
        "name_en": "Insomnia",
        "id": "CONSCIOUS_INSOM_009"
      },
      {
        "name_ko": "수면 부채",
        "name_en": "Sleep Debt",
        "id": "CONSCIOUS_SLDEBT_008"
      },
      {
        "name_ko": "기면증",
        "name_en": "Narcolepsy",
        "id": "CONSCIOUS_NARCO_018"
      }
    ],
    "sub_types": [
      {
        "name_ko": "폐쇄성 수면무호흡",
        "name_en": "Obstructive Sleep Apnea (OSA)",
        "description": "인후부 근육의 이완으로 기도가 물리적으로 막히는 가장 흔한 유형"
      },
      {
        "name_ko": "중추성 수면무호흡",
        "name_en": "Central Sleep Apnea",
        "description": "뇌의 호흡 조절 중추가 호흡 근육에 적절한 신호를 보내지 못하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Apnea = 'a(없다) + pnea(호흡)' = 호흡이 없는 상태. 수면 중 숨이 멈추는 것.",
      "differential": "수면무호흡증은 호흡 정지가 핵심이고, 불면증은 잠들기 어려운 것이 핵심이다.",
      "key_point": "폐쇄성 수면무호흡의 표준 치료는 CPAP이며, 비만이 가장 큰 위험 요인이다.",
      "common_mistake": "수면무호흡증을 단순한 코골이로 무시하는 것. 치료하지 않으면 심혈관 질환 위험이 크게 높아진다."
    }
  },
  {
    "id": "CONSCIOUS_HYPNO_011",
    "terminology": "최면 (Hypnosis)",
    "terminology_ko": "최면",
    "terminology_en": "Hypnosis",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "암시에 대한 반응성이 높아진 상태에서 주의가 집중되고 주변 자각이 감소하는 사회적 상호작용 또는 의식 상태이다. 통증 관리, 습관 변화 등에 임상적으로 활용된다.",
    "definition_en": "A social interaction or state of consciousness in which attention is focused, peripheral awareness is reduced, and responsiveness to suggestion is heightened. It is clinically used for pain management and habit change.",
    "significance": "최면은 의식의 본질과 암시의 힘에 대한 중요한 연구 도구이다. Hilgard의 해리 이론과 사회인지 이론 사이의 논쟁은 최면의 본질에 대한 이해를 심화시켰으며, 현대 의학에서는 통증 관리와 심리치료에 근거 기반 기법으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "어니스트 힐가드",
        "name_en": "Ernest Hilgard",
        "contribution": "최면의 해리 이론(dissociation theory)을 제안하여 최면 상태에서 의식이 분리된다고 주장하였다."
      },
      {
        "name_ko": "니콜라스 스패노스",
        "name_en": "Nicholas Spanos",
        "contribution": "최면의 사회인지 이론을 제안하여 최면이 특별한 의식 상태가 아닌 사회적 역할 수행이라고 주장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변성의식상태",
        "name_en": "Altered States of Consciousness",
        "id": "CONSCIOUS_ASC_024"
      },
      {
        "name_ko": "명상",
        "name_en": "Meditation",
        "id": "CONSCIOUS_MEDIT_012"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Hypnosis = 그리스 수면의 신 'Hypnos'에서 유래. 하지만 최면은 수면이 아닌 집중된 각성 상태이다.",
      "differential": "최면은 암시에 의한 집중 상태이고, 명상은 자기 주도적 주의 훈련이다. 둘 다 변성의식상태이지만 기제가 다르다.",
      "key_point": "최면에 대한 두 이론: 해리 이론(Hilgard) - 의식 분리 / 사회인지 이론(Spanos) - 역할 수행.",
      "common_mistake": "최면에 걸리면 의지를 완전히 잃는다고 생각하는 것. 최면 상태에서도 자신의 가치관에 반하는 행동은 거부할 수 있다."
    }
  },
  {
    "id": "CONSCIOUS_MEDIT_012",
    "terminology": "명상 (Meditation)",
    "terminology_ko": "명상",
    "terminology_en": "Meditation",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "주의를 조절하는 체계적인 정신 훈련으로, 특정 대상에 집중하거나 현재 경험을 비판단적으로 관찰함으로써 평온함과 자각을 증진시키는 수련이다.",
    "definition_en": "A systematic mental practice of regulating attention by focusing on a specific object or non-judgmentally observing present-moment experience, promoting calmness and heightened awareness.",
    "significance": "명상은 스트레스 감소, 주의력 향상, 정서 조절 개선 등 다양한 심리적 효과가 과학적으로 입증되었다. 마음챙김 명상(MBSR)은 불안, 우울, 만성 통증 치료에 효과적이며, 뇌영상 연구에서 전전두엽 피질의 두께 증가와 편도체 활동 감소가 확인되었다.",
    "key_researchers": [
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "마음챙김 기반 스트레스 감소(MBSR) 프로그램을 개발하여 명상의 임상적 활용을 개척하였다."
      },
      {
        "name_ko": "리처드 데이비슨",
        "name_en": "Richard Davidson",
        "contribution": "명상이 뇌 구조와 기능에 미치는 영향을 신경과학적으로 연구하여, 명상 훈련이 신경가소성을 촉진함을 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "최면",
        "name_en": "Hypnosis",
        "id": "CONSCIOUS_HYPNO_011"
      },
      {
        "name_ko": "변성의식상태",
        "name_en": "Altered States of Consciousness",
        "id": "CONSCIOUS_ASC_024"
      },
      {
        "name_ko": "선택적 주의",
        "name_en": "Selective Attention",
        "id": "CONSCIOUS_SELAT_028"
      }
    ],
    "sub_types": [
      {
        "name_ko": "집중 명상",
        "name_en": "Focused Attention Meditation",
        "description": "호흡이나 만트라 등 특정 대상에 주의를 집중하는 명상 방식"
      },
      {
        "name_ko": "열린 관찰 명상",
        "name_en": "Open Monitoring Meditation",
        "description": "특정 대상 없이 현재 경험을 비판단적으로 관찰하는 마음챙김 명상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "명상 = '밝을 명(明) + 생각할 상(想)' = 밝게 생각하기. 주의를 조절하여 마음을 밝히는 훈련.",
      "differential": "명상은 자기 주도적 주의 훈련이고, 최면은 외부 암시에 의한 주의 집중이다.",
      "key_point": "마음챙김 명상(MBSR)은 전전두엽 피질 두께 증가, 편도체 활동 감소 등 뇌의 구조적/기능적 변화를 유도한다.",
      "common_mistake": "명상을 단순히 '아무 생각 안 하는 것'으로 이해하는 것. 명상은 주의를 능동적으로 조절하는 적극적 과정이다."
    }
  },
  {
    "id": "CONSCIOUS_TOLER_013",
    "terminology": "내성 (Tolerance)",
    "terminology_ko": "내성",
    "terminology_en": "Tolerance",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "약물을 반복적으로 사용함에 따라 동일한 효과를 얻기 위해 점점 더 많은 양이 필요해지는 현상이다. 신체가 약물에 적응하여 반응성이 감소한 결과이다.",
    "definition_en": "A phenomenon in which repeated use of a substance leads to a diminished response, requiring progressively larger doses to achieve the same effect. It results from the body's adaptation to the substance.",
    "significance": "내성은 약물 의존과 중독으로 이어지는 핵심 메커니즘이다. 내성이 발달하면 사용량이 증가하여 과다복용의 위험이 높아진다. 교차내성 현상은 유사한 약물군에 대한 치료 전략 수립에 중요한 고려 사항이다.",
    "key_researchers": [
      {
        "name_ko": "루이스 세이델",
        "name_en": "Louis Seiden",
        "contribution": "약물 내성의 신경약리학적 메커니즘을 연구하여 수용체 하향조절의 역할을 규명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의존",
        "name_en": "Dependence",
        "id": "CONSCIOUS_DEPEN_014"
      },
      {
        "name_ko": "금단증상",
        "name_en": "Withdrawal Symptoms",
        "id": "CONSCIOUS_WDRWL_026"
      },
      {
        "name_ko": "교차내성",
        "name_en": "Cross-Tolerance",
        "id": "CONSCIOUS_CRTOL_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "약리학적 내성",
        "name_en": "Pharmacological Tolerance",
        "description": "약물 대사가 빨라지거나 수용체 수가 감소하여 발생하는 생물학적 적응"
      },
      {
        "name_ko": "행동적 내성",
        "name_en": "Behavioral Tolerance",
        "description": "약물 효과에도 불구하고 행동을 보상적으로 조절하여 기능을 유지하는 학습된 적응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "내성 = '내(耐, 견디다) + 성(性)' = 약물을 견디는 성질이 생기는 것. 같은 양으로는 효과가 부족해진다.",
      "differential": "내성은 '더 많이 필요해지는 것'이고, 의존은 '없으면 안 되는 것'이다. 내성이 의존으로 이어질 수 있다.",
      "key_point": "내성은 수용체 하향조절(down-regulation)로 발생하며, 약물 사용 중단 후 내성이 사라진 상태에서 이전 용량을 투여하면 과다복용 위험이 있다.",
      "common_mistake": "내성이 생겼다는 것이 약물에 더 강해졌다는 의미라고 생각하는 것. 오히려 중독과 과다복용의 위험이 높아진 상태이다."
    }
  },
  {
    "id": "CONSCIOUS_DEPEN_014",
    "terminology": "의존 (Dependence)",
    "terminology_ko": "의존",
    "terminology_en": "Dependence",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "약물을 지속적으로 사용하여 신체적 또는 심리적으로 약물 없이는 정상적 기능을 유지하기 어려운 상태이다. 약물 중단 시 금단증상이 나타나는 것이 주요 특징이다.",
    "definition_en": "A state in which continued substance use has made the body or mind unable to function normally without the substance. The hallmark is the emergence of withdrawal symptoms upon cessation.",
    "significance": "의존은 약물 남용(substance abuse)에서 물질사용장애(substance use disorder)로의 전환을 이해하는 핵심 개념이다. 신체적 의존과 심리적 의존의 구분은 치료 전략 수립에 중요하며, 많은 약물이 두 가지 의존을 모두 유발한다.",
    "key_researchers": [
      {
        "name_ko": "조지 쿱",
        "name_en": "George Koob",
        "contribution": "약물 의존의 신경생물학적 메커니즘을 연구하여, 보상 회로와 스트레스 회로의 불균형이 의존을 유발함을 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "CONSCIOUS_TOLER_013"
      },
      {
        "name_ko": "금단증상",
        "name_en": "Withdrawal Symptoms",
        "id": "CONSCIOUS_WDRWL_026"
      },
      {
        "name_ko": "억제제",
        "name_en": "Depressant",
        "id": "CONSCIOUS_DEPRS_016"
      }
    ],
    "sub_types": [
      {
        "name_ko": "신체적 의존",
        "name_en": "Physical Dependence",
        "description": "약물 중단 시 신체적 금단증상(떨림, 발한, 구역 등)이 나타나는 상태"
      },
      {
        "name_ko": "심리적 의존",
        "name_en": "Psychological Dependence",
        "description": "약물에 대한 강렬한 갈망과 정서적 필요가 있는 상태로, 신체적 증상 없이도 발생 가능"
      }
    ],
    "quiz_hints": {
      "mnemonic": "의존 = 약물에 '의지하여 존재'하는 상태. 약물이 없으면 정상 기능이 불가능해진다.",
      "differential": "의존은 약물 없이 기능할 수 없는 상태이고, 내성은 같은 효과를 위해 더 많은 양이 필요한 현상이다.",
      "key_point": "신체적 의존은 금단증상으로 확인되며, 심리적 의존은 갈망(craving)으로 나타난다. 많은 약물이 두 유형 모두 유발한다.",
      "common_mistake": "카페인이나 처방약에는 의존이 생기지 않는다고 생각하는 것. 카페인도 신체적 의존(두통 등 금단증상)을 유발할 수 있다."
    }
  },
  {
    "id": "CONSCIOUS_HALLUC_015",
    "terminology": "환각제 (Hallucinogen)",
    "terminology_ko": "환각제",
    "terminology_en": "Hallucinogen",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "지각, 사고, 감정을 현저하게 왜곡시켜 환각이나 비현실적 경험을 유발하는 약물군이다. LSD, 실로시빈(psilocybin), 메스칼린 등이 대표적이다.",
    "definition_en": "A class of drugs that significantly distort perception, thought, and emotion, producing hallucinations and surreal experiences. LSD, psilocybin, and mescaline are representative examples.",
    "significance": "환각제는 세로토닌 수용체(특히 5-HT2A)에 작용하여 의식의 본질에 대한 신경과학적 연구에 중요한 도구가 되었다. 최근 실로시빈은 치료저항성 우울증과 PTSD에 대한 치료 가능성이 임상시험에서 보고되고 있다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 호프만",
        "name_en": "Albert Hofmann",
        "contribution": "LSD(리세르그산 디에틸아미드)를 합성하고 그 환각 효과를 최초로 발견하였다(1943)."
      },
      {
        "name_ko": "티머시 리어리",
        "name_en": "Timothy Leary",
        "contribution": "하버드 대학에서 실로시빈 실험을 수행하여 환각제의 의식 확장 가능성을 연구하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변성의식상태",
        "name_en": "Altered States of Consciousness",
        "id": "CONSCIOUS_ASC_024"
      },
      {
        "name_ko": "억제제",
        "name_en": "Depressant",
        "id": "CONSCIOUS_DEPRS_016"
      },
      {
        "name_ko": "각성제",
        "name_en": "Stimulant",
        "id": "CONSCIOUS_STIML_017"
      }
    ],
    "sub_types": [
      {
        "name_ko": "고전적 환각제",
        "name_en": "Classic Hallucinogens",
        "description": "세로토닌 수용체에 작용하는 LSD, 실로시빈, 메스칼린 등"
      },
      {
        "name_ko": "해리성 환각제",
        "name_en": "Dissociative Hallucinogens",
        "description": "NMDA 수용체를 차단하는 PCP, 케타민 등으로, 신체와 환경으로부터의 분리감을 유발"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Hallucinogen = 'hallucination(환각) + gen(만들다)' = 환각을 만드는 물질.",
      "differential": "환각제는 지각을 왜곡하고, 억제제는 신경계를 둔화시키며, 각성제는 신경계를 활성화한다.",
      "key_point": "환각제는 주로 세로토닌(5-HT2A) 수용체에 작용하며, 신체적 의존보다 심리적 효과가 강하다.",
      "common_mistake": "대마(마리화나)를 환각제로만 분류하는 것. 대마는 환각제, 억제제, 각성제의 특성을 모두 가진 복합 약물이다."
    }
  },
  {
    "id": "CONSCIOUS_DEPRS_016",
    "terminology": "억제제 (Depressant)",
    "terminology_ko": "억제제",
    "terminology_en": "Depressant",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "중추신경계의 활동을 억제하여 신경 기능을 둔화시키는 약물군이다. 불안 감소, 이완, 졸음을 유발하며, 알코올, 바르비투르산염, 벤조디아제핀 등이 포함된다.",
    "definition_en": "A class of drugs that inhibit central nervous system activity, slowing neural function. They produce anxiety reduction, relaxation, and drowsiness. Examples include alcohol, barbiturates, and benzodiazepines.",
    "significance": "억제제는 GABA 수용체를 활성화시켜 신경 전달을 억제한다. 가장 널리 사용되는 억제제인 알코올은 판단력 저하, 운동 기능 장애, 기억 상실을 유발하며, 과다 복용 시 호흡 억제로 사망에 이를 수 있다.",
    "key_researchers": [
      {
        "name_ko": "어네스트 노블",
        "name_en": "Ernest Noble",
        "contribution": "알코올이 뇌의 도파민 보상 시스템에 미치는 영향과 알코올 의존의 유전적 취약성을 연구하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "각성제",
        "name_en": "Stimulant",
        "id": "CONSCIOUS_STIML_017"
      },
      {
        "name_ko": "환각제",
        "name_en": "Hallucinogen",
        "id": "CONSCIOUS_HALLUC_015"
      },
      {
        "name_ko": "의존",
        "name_en": "Dependence",
        "id": "CONSCIOUS_DEPEN_014"
      },
      {
        "name_ko": "마약성 진통제",
        "name_en": "Opioid",
        "id": "CONSCIOUS_OPIOD_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "알코올",
        "name_en": "Alcohol",
        "description": "가장 흔히 사용되는 억제제로, 낮은 용량에서는 탈억제로 인해 흥분 행동이 나타남"
      },
      {
        "name_ko": "바르비투르산염",
        "name_en": "Barbiturates",
        "description": "수면 유도와 불안 감소에 사용되었으나, 높은 의존성과 과다복용 위험 때문에 사용이 줄어듦"
      },
      {
        "name_ko": "벤조디아제핀",
        "name_en": "Benzodiazepines",
        "description": "바르비투르산염보다 안전한 항불안제로, 발리움(Valium), 자낙스(Xanax) 등이 대표적"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Depressant = 'depress(억누르다)' = 신경계를 눌러서 둔화시키는 약물. '기분의 우울(depression)'과 혼동하지 말 것.",
      "differential": "억제제는 신경계를 '둔화'시키고, 각성제는 신경계를 '활성화'시킨다. 억제제 = 브레이크, 각성제 = 엑셀.",
      "key_point": "알코올은 억제제이지만, 낮은 용량에서 '흥분'하는 이유는 억제 기능을 먼저 억제(탈억제)하기 때문이다.",
      "common_mistake": "억제제를 기분을 우울하게 만드는 약물로 오해하는 것. 억제제는 '중추신경계 기능'을 억제하는 것이지 기분이 아니다."
    }
  },
  {
    "id": "CONSCIOUS_STIML_017",
    "terminology": "각성제 (Stimulant)",
    "terminology_ko": "각성제",
    "terminology_en": "Stimulant",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "중추신경계의 활동을 촉진하여 각성, 에너지, 주의력을 높이는 약물군이다. 카페인, 니코틴, 암페타민, 코카인 등이 포함된다.",
    "definition_en": "A class of drugs that enhance central nervous system activity, increasing arousal, energy, and attention. Examples include caffeine, nicotine, amphetamines, and cocaine.",
    "significance": "각성제는 도파민과 노르에피네프린의 활성을 증가시켜 보상 회로를 강하게 자극한다. ADHD 치료에 역설적으로 사용되며(메틸페니데이트), 남용 시 심혈관 문제, 정신증, 심한 의존을 유발할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로버트 히스",
        "name_en": "Robert Heath",
        "contribution": "뇌의 쾌락 중추를 연구하여 각성제가 도파민 보상 경로에 미치는 영향의 신경학적 기반을 제공하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "억제제",
        "name_en": "Depressant",
        "id": "CONSCIOUS_DEPRS_016"
      },
      {
        "name_ko": "환각제",
        "name_en": "Hallucinogen",
        "id": "CONSCIOUS_HALLUC_015"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "CONSCIOUS_TOLER_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "카페인",
        "name_en": "Caffeine",
        "description": "세계에서 가장 널리 사용되는 각성제로, 아데노신 수용체를 차단하여 졸음을 억제한다"
      },
      {
        "name_ko": "암페타민",
        "name_en": "Amphetamines",
        "description": "도파민과 노르에피네프린 방출을 촉진하는 강력한 각성제로, ADHD 치료제(예: 애더럴)로 사용"
      },
      {
        "name_ko": "코카인",
        "name_en": "Cocaine",
        "description": "도파민 재흡수를 차단하여 강한 쾌감을 유발하는 불법 각성제"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Stimulant = 'stimulate(자극하다)' = 신경계를 자극하여 깨워주는 약물. 커피(카페인)가 대표적.",
      "differential": "각성제는 신경계를 '활성화'시키고, 억제제는 신경계를 '둔화'시킨다.",
      "key_point": "카페인은 아데노신 수용체 차단으로, 코카인은 도파민 재흡수 차단으로, 암페타민은 도파민 방출 촉진으로 작용한다.",
      "common_mistake": "ADHD에 각성제를 처방하면 더 흥분할 것이라고 생각하는 것. 각성제가 전전두엽의 주의 조절 기능을 활성화하여 오히려 집중력이 개선된다."
    }
  },
  {
    "id": "CONSCIOUS_NARCO_018",
    "terminology": "기면증 (Narcolepsy)",
    "terminology_ko": "기면증",
    "terminology_en": "Narcolepsy",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "주간에 갑작스럽고 억제할 수 없는 수면 발작이 반복되는 신경학적 수면장애이다. 탈력발작(cataplexy), 수면 마비, 입면 시 환각 등을 동반할 수 있다.",
    "definition_en": "A neurological sleep disorder characterized by recurring, uncontrollable episodes of sudden sleep during the day. It may be accompanied by cataplexy, sleep paralysis, and hypnagogic hallucinations.",
    "significance": "기면증은 시상하부에서 오렉신(하이포크레틴)을 생산하는 신경세포의 소실과 관련이 있다. 이 발견은 수면-각성 조절의 신경생물학적 메커니즘을 이해하는 데 핵심적 기여를 하였으며, 오렉신 수용체를 표적으로 하는 새로운 치료제 개발로 이어졌다.",
    "key_researchers": [
      {
        "name_ko": "에마뉘엘 미뇨",
        "name_en": "Emmanuel Mignot",
        "contribution": "기면증이 오렉신(하이포크레틴) 결핍과 관련됨을 발견하여 질환의 생물학적 기반을 규명하였다."
      },
      {
        "name_ko": "마사시 야나기사와",
        "name_en": "Masashi Yanagisawa",
        "contribution": "오렉신(하이포크레틴) 신경펩타이드를 발견하여 수면-각성 조절 기제의 이해에 기여하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "렘수면",
        "name_en": "REM Sleep",
        "id": "CONSCIOUS_REM_005"
      },
      {
        "name_ko": "수면 부채",
        "name_en": "Sleep Debt",
        "id": "CONSCIOUS_SLDEBT_008"
      },
      {
        "name_ko": "수면무호흡증",
        "name_en": "Sleep Apnea",
        "id": "CONSCIOUS_APNEA_010"
      }
    ],
    "sub_types": [
      {
        "name_ko": "제1형 기면증",
        "name_en": "Narcolepsy Type 1",
        "description": "탈력발작을 동반하며 오렉신 수치가 저하된 유형"
      },
      {
        "name_ko": "제2형 기면증",
        "name_en": "Narcolepsy Type 2",
        "description": "탈력발작 없이 과도한 주간 졸림증만 나타나며 오렉신 수치가 정상인 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Narcolepsy = 'narco(마비, 졸음) + lepsy(발작)' = 졸음 발작. 기면증의 '기(嗜)'는 탐닉한다는 뜻, '면(眠)'은 잠.",
      "differential": "기면증은 신경학적 질환으로 갑작스러운 수면 발작이 특징이고, 수면무호흡증은 호흡 장애로 인한 수면 분절이 특징이다.",
      "key_point": "기면증의 핵심 원인은 오렉신(하이포크레틴) 생산 신경세포의 소실이다. 탈력발작은 강한 감정에 의해 유발된다.",
      "common_mistake": "기면증을 단순한 졸림이나 게으름으로 오해하는 것. 기면증은 오렉신 신경세포 손상에 의한 신경학적 질환이다."
    }
  },
  {
    "id": "CONSCIOUS_SPNDL_019",
    "terminology": "수면 방추파 (Sleep Spindle)",
    "terminology_ko": "수면 방추파",
    "terminology_en": "Sleep Spindle",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "NREM 수면 2단계(N2)에서 나타나는 12~14Hz의 짧은(0.5~2초) 빠른 뇌파 폭발이다. 시상에서 생성되며 외부 자극으로부터 수면을 보호하는 역할을 한다.",
    "definition_en": "Brief (0.5-2 second) bursts of rapid brain wave activity at 12-14 Hz that occur during NREM stage 2 (N2) sleep. Generated by the thalamus, they help protect sleep from external stimuli.",
    "significance": "수면 방추파는 기억 공고화, 특히 선언적 기억과 절차적 기억의 야간 공고화에 중요한 역할을 한다. 수면 방추파의 밀도는 지능 및 학습 능력과 양의 상관을 보이며, 수면의 질을 평가하는 중요한 지표이다.",
    "key_researchers": [
      {
        "name_ko": "미르체아 스테리아데",
        "name_en": "Mircea Steriade",
        "contribution": "수면 방추파의 시상-피질 생성 메커니즘을 규명하여 수면 중 뇌파 활동의 신경 기전을 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      },
      {
        "name_ko": "서파수면",
        "name_en": "Slow-Wave Sleep",
        "id": "CONSCIOUS_SWS_020"
      },
      {
        "name_ko": "수면주기",
        "name_en": "Sleep Cycle",
        "id": "CONSCIOUS_SLCYC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "방추파 = '방추(실패) 모양'의 뇌파. EEG에서 가운데가 두텁고 양 끝이 가늘어 방추(spindle)처럼 보인다.",
      "differential": "수면 방추파는 N2에서 나타나는 빠른 파동이고, 서파(델타파)는 N3에서 나타나는 느린 고진폭 파동이다.",
      "key_point": "수면 방추파는 시상에서 생성되어 외부 자극을 차단하고, 기억 공고화를 촉진한다. 방추파 밀도는 학습 능력과 상관된다.",
      "common_mistake": "수면 방추파가 잠이 깨려는 신호라고 오해하는 것. 오히려 외부 소음으로부터 수면을 보호하는 역할을 한다."
    }
  },
  {
    "id": "CONSCIOUS_SWS_020",
    "terminology": "서파수면 (Slow-Wave Sleep)",
    "terminology_ko": "서파수면",
    "terminology_en": "Slow-Wave Sleep",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "NREM 수면 3단계(N3)에 해당하는 가장 깊은 수면 단계로, 0.5~2Hz의 고진폭 델타파가 특징적이다. 이 단계에서 깨우면 강한 수면 관성(sleep inertia)이 나타난다.",
    "definition_en": "The deepest stage of sleep, corresponding to NREM stage 3 (N3), characterized by high-amplitude delta waves at 0.5-2 Hz. Awakening from this stage produces significant sleep inertia.",
    "significance": "서파수면은 신체 회복, 성장호르몬 분비, 면역 강화, 선언적 기억 공고화에 필수적이다. 노화에 따라 서파수면이 감소하며, 이는 노인의 기억력 저하 및 건강 문제와 관련된다. 몽유병과 야경증은 이 단계에서 발생한다.",
    "key_researchers": [
      {
        "name_ko": "매슈 워커",
        "name_en": "Matthew Walker",
        "contribution": "서파수면이 기억 공고화와 정서 처리에 미치는 역할을 연구하고, 수면 부족의 위험성을 대중에게 알렸다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      },
      {
        "name_ko": "수면 방추파",
        "name_en": "Sleep Spindle",
        "id": "CONSCIOUS_SPNDL_019"
      },
      {
        "name_ko": "몽유병",
        "name_en": "Sleepwalking",
        "id": "CONSCIOUS_SLWLK_021"
      },
      {
        "name_ko": "야경증",
        "name_en": "Night Terror",
        "id": "CONSCIOUS_NTERR_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "서파(徐波) = '느린(徐) 파동(波)'. Slow-Wave = 느린 파동. 뇌가 아주 느리고 크게 파동치는 깊은 수면.",
      "differential": "서파수면(N3)은 델타파가 우세한 가장 깊은 수면이고, N2는 수면 방추파가 특징인 얕은 수면이다.",
      "key_point": "서파수면은 성장호르몬 분비의 70~80%가 이루어지는 시기이며, 수면 전반부에 집중된다. 몽유병과 야경증이 이 단계에서 발생한다.",
      "common_mistake": "가장 깊은 수면(서파수면)에서 꿈을 꾼다고 생각하는 것. 생생한 꿈은 주로 REM 수면에서 발생한다."
    }
  },
  {
    "id": "CONSCIOUS_SLWLK_021",
    "terminology": "몽유병 (Sleepwalking)",
    "terminology_ko": "몽유병",
    "terminology_en": "Sleepwalking",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "서파수면(N3) 중에 의식 없이 일어나 걸어 다니거나 복잡한 행동을 하는 수면장애이다. 사건 후 기억하지 못하는 것이 특징이며, 아동기에 가장 흔하다.",
    "definition_en": "A sleep disorder occurring during slow-wave sleep (N3) in which the person rises and walks or performs complex behaviors without conscious awareness. The individual typically has no memory of the episode. It is most common in childhood.",
    "significance": "몽유병은 NREM 사건수면(parasomnia)의 대표적 유형으로, 서파수면에서 불완전한 각성이 일어나 운동 피질은 활성화되지만 의식적 자각은 부재한 상태이다. 유전적 요인이 강하며 수면 박탈, 스트레스, 발열이 유발 요인이다.",
    "key_researchers": [
      {
        "name_ko": "안토니오 자디라",
        "name_en": "Antonio Zadra",
        "contribution": "몽유병의 유발 요인과 불완전 각성 메커니즘을 연구하여 사건수면의 이해에 기여하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서파수면",
        "name_en": "Slow-Wave Sleep",
        "id": "CONSCIOUS_SWS_020"
      },
      {
        "name_ko": "야경증",
        "name_en": "Night Terror",
        "id": "CONSCIOUS_NTERR_022"
      },
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "몽유병 = '꿈(夢)속에서 유(遊, 돌아다닌다)'. Sleepwalking = 'sleep(수면) + walking(걷기)'.",
      "differential": "몽유병은 서파수면(NREM)에서 발생하고 꿈 내용과 무관하지만, REM 수면 행동 장애는 REM 수면 중 꿈을 행동으로 옮기는 것이다.",
      "key_point": "몽유병은 서파수면(N3)에서 발생하며 REM 수면의 꿈과는 관련이 없다. 아동의 약 15%가 경험하며 대부분 성장하면 호전된다.",
      "common_mistake": "몽유병 환자를 깨우면 위험하다는 속설. 깨우는 것이 위험한 것이 아니라, 혼란 상태에서의 부상이 위험한 것이다. 안전하게 침대로 안내하는 것이 최선이다."
    }
  },
  {
    "id": "CONSCIOUS_NTERR_022",
    "terminology": "야경증 (Night Terror)",
    "terminology_ko": "야경증",
    "terminology_en": "Night Terror",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "서파수면(N3) 중에 갑자기 공포에 질려 비명을 지르고 격렬한 자율신경 반응(빠른 심박, 발한)을 보이는 수면장애이다. 사건 후 기억이 없으며 아동기에 흔하다.",
    "definition_en": "A sleep disorder occurring during slow-wave sleep (N3) characterized by sudden episodes of intense fear with screaming and vigorous autonomic responses (rapid heart rate, sweating). The individual has no memory of the event and it is common in childhood.",
    "significance": "야경증은 몽유병과 마찬가지로 NREM 사건수면에 속하며, 서파수면에서의 불완전 각성으로 발생한다. 악몽(nightmare)과 달리 REM 수면이 아닌 깊은 수면에서 발생하며, 꿈 내용을 보고하지 않는다는 점에서 구별된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 피셔",
        "name_en": "Charles Fisher",
        "contribution": "수면 중 공포 반응의 생리학적 특성을 연구하여 야경증과 악몽의 차이를 체계적으로 규명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서파수면",
        "name_en": "Slow-Wave Sleep",
        "id": "CONSCIOUS_SWS_020"
      },
      {
        "name_ko": "몽유병",
        "name_en": "Sleepwalking",
        "id": "CONSCIOUS_SLWLK_021"
      },
      {
        "name_ko": "비렘수면",
        "name_en": "NREM Sleep",
        "id": "CONSCIOUS_NREM_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "야경증 = '밤(夜)에 놀란다(驚)'. Night Terror = 밤의 공포. 서파수면에서 갑자기 비명을 지른다.",
      "differential": "야경증은 서파수면(N3)에서 발생하고 사건 기억이 없지만, 악몽(nightmare)은 REM 수면에서 발생하고 꿈 내용을 기억한다.",
      "key_point": "야경증 vs 악몽: 야경증 = NREM, 기억 없음, 격렬한 자율신경 반응 / 악몽 = REM, 꿈 기억, 각성 후 의식 명료.",
      "common_mistake": "야경증을 '무서운 꿈(악몽)'과 같은 것으로 혼동하는 것. 야경증은 깊은 수면에서 발생하며 꿈 내용이 없다."
    }
  },
  {
    "id": "CONSCIOUS_LUCID_023",
    "terminology": "자각몽 (Lucid Dreaming)",
    "terminology_ko": "자각몽",
    "terminology_en": "Lucid Dreaming",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "꿈을 꾸는 동안 자신이 꿈을 꾸고 있음을 자각하는 상태이다. 자각몽 상태에서는 꿈의 내용을 의도적으로 조절할 수 있는 경우도 있다.",
    "definition_en": "A state of dreaming in which the dreamer is aware that they are dreaming. In a lucid dream, the dreamer may sometimes be able to deliberately control the dream content.",
    "significance": "자각몽은 의식의 본질을 탐구하는 독특한 창을 제공한다. 잠들어 있으면서도 메타인지(자기 상태에 대한 인식)가 가능하다는 점에서 의식-무의식의 경계에 대한 이론적 논의에 기여한다. 악몽 치료와 창의성 연구에 활용 가능성이 연구되고 있다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 라버지",
        "name_en": "Stephen LaBerge",
        "contribution": "자각몽의 과학적 연구를 개척하여, REM 수면 중 미리 약속된 안구 운동 신호를 통해 자각몽의 실재를 실험적으로 입증하였다."
      },
      {
        "name_ko": "키스 허른",
        "name_en": "Keith Hearne",
        "contribution": "LaBerge와 독립적으로 자각몽 중 안구 운동 신호를 이용한 의사소통 실험을 수행하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "렘수면",
        "name_en": "REM Sleep",
        "id": "CONSCIOUS_REM_005"
      },
      {
        "name_ko": "변성의식상태",
        "name_en": "Altered States of Consciousness",
        "id": "CONSCIOUS_ASC_024"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자각몽 = '자각(自覺, 스스로 깨닫다) + 몽(夢, 꿈)' = 꿈속에서 꿈임을 깨닫는 것. Lucid = 맑은, 명료한.",
      "differential": "자각몽은 꿈속에서 '꿈임을 아는' 것이고, 일반 꿈은 꿈인지 모르는 상태이다. 자각몽은 REM 수면 중 발생한다.",
      "key_point": "LaBerge는 자각몽 중 미리 약속된 안구 운동 패턴을 실행하게 하여, 의식적 자각이 REM 수면 중에도 가능함을 증명하였다.",
      "common_mistake": "자각몽을 수면과 무관한 공상이나 백일몽과 혼동하는 것. 자각몽은 실제 REM 수면 중에 발생하는 수면 현상이다."
    }
  },
  {
    "id": "CONSCIOUS_ASC_024",
    "terminology": "변성의식상태 (Altered States of Consciousness)",
    "terminology_ko": "변성의식상태",
    "terminology_en": "Altered States of Consciousness",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "일상적 깨어 있는 의식과 질적으로 다른 의식 상태의 총칭이다. 수면, 최면, 명상, 약물 사용, 감각 차단 등에 의해 유발될 수 있다.",
    "definition_en": "A general term for states of consciousness that are qualitatively different from ordinary waking awareness. They can be induced by sleep, hypnosis, meditation, substance use, or sensory deprivation.",
    "significance": "변성의식상태 연구는 의식의 다양한 층위와 유연성을 보여준다. 서로 다른 유발 요인(약물, 명상, 수면)이 유사한 의식 변화를 일으킬 수 있다는 점은 의식의 신경 기반에 대한 중요한 단서를 제공하며, 임상적 활용(명상 치료, 환각제 보조 치료 등)에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 타트",
        "name_en": "Charles Tart",
        "contribution": "변성의식상태(ASC)의 체계적 분류와 연구를 개척하여 이 분야의 과학적 기틀을 마련하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "최면",
        "name_en": "Hypnosis",
        "id": "CONSCIOUS_HYPNO_011"
      },
      {
        "name_ko": "명상",
        "name_en": "Meditation",
        "id": "CONSCIOUS_MEDIT_012"
      },
      {
        "name_ko": "환각제",
        "name_en": "Hallucinogen",
        "id": "CONSCIOUS_HALLUC_015"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "약물 유도 변성의식",
        "name_en": "Drug-Induced ASC",
        "description": "환각제, 억제제, 각성제 등 약물에 의해 유발되는 의식 변화"
      },
      {
        "name_ko": "비약물 유도 변성의식",
        "name_en": "Non-Drug-Induced ASC",
        "description": "명상, 최면, 감각 차단, 극한 운동 등에 의해 유발되는 의식 변화"
      }
    ],
    "quiz_hints": {
      "mnemonic": "변성의식 = '변(變, 바뀐) + 성(性, 성질) + 의식' = 성질이 바뀐 의식. ASC = Altered States of Consciousness.",
      "differential": "변성의식상태는 의식의 질적 변화를 포괄하는 상위 개념이며, 최면, 명상, 약물 효과 등은 그 하위 유형이다.",
      "key_point": "변성의식상태는 병리적 상태만이 아니다. 수면, 명상, 몰입(flow) 등도 일상적인 변성의식상태에 해당한다.",
      "common_mistake": "변성의식상태를 반드시 약물이나 비정상적 경험과만 연결짓는 것. 수면과 꿈도 대표적 변성의식상태이다."
    }
  },
  {
    "id": "CONSCIOUS_OPIOD_025",
    "terminology": "마약성 진통제 (Opioid)",
    "terminology_ko": "마약성 진통제",
    "terminology_en": "Opioid",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "뇌와 신체의 오피오이드 수용체에 결합하여 통증을 감소시키고 쾌감을 유발하는 약물군이다. 모르핀, 헤로인, 옥시코돈, 펜타닐 등이 포함되며, 강한 의존성을 지닌다.",
    "definition_en": "A class of drugs that bind to opioid receptors in the brain and body, reducing pain and producing euphoria. Examples include morphine, heroin, oxycodone, and fentanyl. They carry a high risk of dependence.",
    "significance": "오피오이드는 내인성 엔도르핀 시스템을 모방하여 강력한 진통과 쾌감을 제공하지만, 높은 내성과 의존성 위험이 있다. 미국의 오피오이드 위기(opioid crisis)는 처방 진통제 남용에서 시작되어 심각한 공중보건 문제가 되었다.",
    "key_researchers": [
      {
        "name_ko": "캔더스 퍼트",
        "name_en": "Candace Pert",
        "contribution": "Solomon Snyder와 함께 뇌의 오피오이드 수용체를 발견하여 통증과 쾌감의 신경화학적 기전을 규명하였다(1973)."
      },
      {
        "name_ko": "솔로몬 스나이더",
        "name_en": "Solomon Snyder",
        "contribution": "Pert와 함께 오피오이드 수용체를 발견하여 약물 작용 메커니즘의 이해에 기여하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "억제제",
        "name_en": "Depressant",
        "id": "CONSCIOUS_DEPRS_016"
      },
      {
        "name_ko": "의존",
        "name_en": "Dependence",
        "id": "CONSCIOUS_DEPEN_014"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "CONSCIOUS_TOLER_013"
      },
      {
        "name_ko": "금단증상",
        "name_en": "Withdrawal Symptoms",
        "id": "CONSCIOUS_WDRWL_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "천연 오피오이드",
        "name_en": "Natural Opioids",
        "description": "양귀비에서 추출된 모르핀, 코데인 등"
      },
      {
        "name_ko": "합성 오피오이드",
        "name_en": "Synthetic Opioids",
        "description": "화학적으로 합성된 펜타닐, 메타돈 등으로, 모르핀보다 수십~수백 배 강력"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Opioid = 'opium(아편)에서 유래'. 양귀비 → 아편 → 모르핀 → 헤로인으로 이어지는 약물 계열.",
      "differential": "오피오이드는 오피오이드 수용체에 작용하여 통증을 차단하고, 억제제(예: 알코올)는 GABA 수용체를 활성화하여 신경계를 둔화시킨다.",
      "key_point": "오피오이드는 내인성 엔도르핀을 모방하며, 내성이 빠르게 발달하여 과다복용 위험이 높다. 과다복용 시 호흡 억제가 치명적이다.",
      "common_mistake": "처방된 진통제(예: 옥시코돈)는 안전하다고 생각하는 것. 처방 오피오이드도 남용하면 헤로인과 동일한 수준의 의존을 유발한다."
    }
  },
  {
    "id": "CONSCIOUS_WDRWL_026",
    "terminology": "금단증상 (Withdrawal Symptoms)",
    "terminology_ko": "금단증상",
    "terminology_en": "Withdrawal Symptoms",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "의존이 형성된 약물의 사용을 갑자기 중단하거나 감량할 때 나타나는 신체적, 심리적 불편 증상이다. 약물의 효과와 반대 방향의 증상이 나타나는 것이 특징이다.",
    "definition_en": "Physical and psychological discomfort symptoms that occur when a substance on which dependence has formed is abruptly discontinued or reduced. Symptoms typically manifest as the opposite of the drug's effects.",
    "significance": "금단증상의 존재는 신체적 의존의 핵심 증거이다. Solomon의 상대 과정 이론은 약물 효과와 반대되는 보상적 반응이 금단의 메커니즘이라고 설명하며, 금단증상의 심각성(예: 알코올 금단 시 진전섬망)은 의료적 관리가 필수적임을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "리처드 솔로몬",
        "name_en": "Richard Solomon",
        "contribution": "상대 과정 이론(Opponent-Process Theory)을 제안하여 약물 사용 후 반대 방향의 보상적 반응이 금단을 유발함을 설명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의존",
        "name_en": "Dependence",
        "id": "CONSCIOUS_DEPEN_014"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "CONSCIOUS_TOLER_013"
      },
      {
        "name_ko": "마약성 진통제",
        "name_en": "Opioid",
        "id": "CONSCIOUS_OPIOD_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "신체적 금단",
        "name_en": "Physical Withdrawal",
        "description": "떨림, 발한, 구역, 경련, 발열 등 신체적 증상이 주를 이루는 금단 (알코올, 오피오이드 등)"
      },
      {
        "name_ko": "심리적 금단",
        "name_en": "Psychological Withdrawal",
        "description": "불안, 우울, 갈망, 초조함 등 정서적 증상이 주를 이루는 금단 (코카인, 대마 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "금단 = '끊을 금(禁) + 끊을 단(斷)' = 약물을 끊었을 때. Withdrawal = 약물을 '철수'시키면 나타나는 반응.",
      "differential": "금단증상은 약물 '중단' 후 나타나고, 부작용(side effect)은 약물 '사용 중'에 나타난다.",
      "key_point": "금단증상은 대체로 약물 효과의 반대 방향으로 나타난다. 예: 억제제(알코올) 금단 → 과각성, 경련 / 각성제 금단 → 피로, 우울.",
      "common_mistake": "모든 약물의 금단증상이 같다고 생각하는 것. 알코올과 벤조디아제핀의 금단은 생명을 위협할 수 있지만, 카페인 금단은 비교적 경미하다."
    }
  },
  {
    "id": "CONSCIOUS_CRTOL_027",
    "terminology": "교차내성 (Cross-Tolerance)",
    "terminology_ko": "교차내성",
    "terminology_en": "Cross-Tolerance",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "한 약물에 대한 내성이 형성되면 유사한 작용 메커니즘을 가진 다른 약물에 대해서도 내성이 나타나는 현상이다. 같은 수용체 계열에 작용하는 약물 간에 발생한다.",
    "definition_en": "A phenomenon in which tolerance to one substance extends to other substances with similar mechanisms of action. It occurs between drugs that act on the same receptor systems.",
    "significance": "교차내성은 약물 치료와 남용 관리에 중요한 임상적 함의를 가진다. 예를 들어, 알코올에 내성이 있는 사람은 바르비투르산염에도 내성을 보이므로 마취 용량 조절이 필요하다. 또한 LSD와 실로시빈 간의 교차내성은 이들이 같은 수용체에 작용함을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "해럴드 칼런트",
        "name_en": "Harold Kalant",
        "contribution": "교차내성과 교차의존의 약리학적 메커니즘을 연구하여 약물 상호작용의 이해에 기여하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "CONSCIOUS_TOLER_013"
      },
      {
        "name_ko": "억제제",
        "name_en": "Depressant",
        "id": "CONSCIOUS_DEPRS_016"
      },
      {
        "name_ko": "환각제",
        "name_en": "Hallucinogen",
        "id": "CONSCIOUS_HALLUC_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교차내성 = '교차(交叉, 서로 넘나드는) + 내성' = 내성이 약물 간에 교차하여 넘어간다.",
      "differential": "교차내성은 내성이 다른 약물로 '전이'되는 것이고, 단순 내성은 한 약물에 대한 반응 감소이다.",
      "key_point": "교차내성의 대표적 예: 알코올 ↔ 바르비투르산염 ↔ 벤조디아제핀 (모두 GABA 수용체 작용), LSD ↔ 실로시빈 (모두 5-HT2A 수용체 작용).",
      "common_mistake": "교차내성이 모든 약물 간에 발생한다고 생각하는 것. 동일한 수용체 계열에 작용하는 약물 간에만 교차내성이 나타난다."
    }
  },
  {
    "id": "CONSCIOUS_SELAT_028",
    "terminology": "선택적 주의 (Selective Attention)",
    "terminology_ko": "선택적 주의",
    "terminology_en": "Selective Attention",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "여러 자극 중 특정 자극에 의식적 주의를 집중하고 나머지 자극은 무시하는 능력이다. 제한된 인지 자원을 효율적으로 배분하는 핵심 기제이다.",
    "definition_en": "The ability to focus conscious attention on a specific stimulus among many while ignoring others. It is a core mechanism for efficiently allocating limited cognitive resources.",
    "significance": "선택적 주의는 의식적 경험의 범위를 결정하는 핵심 과정이다. Broadbent의 초기 선택 모형에서 시작된 주의 연구는 Treisman의 감쇠 모형, Deutsch의 후기 선택 모형 등으로 발전하였으며, 비주의 맹시(inattentional blindness) 연구로 의식과 주의의 관계가 재조명되었다.",
    "key_researchers": [
      {
        "name_ko": "도널드 브로드벤트",
        "name_en": "Donald Broadbent",
        "contribution": "여과기 모형(Filter Model)을 제안하여 선택적 주의가 처리 초기에 정보를 여과한다고 주장하였다(1958)."
      },
      {
        "name_ko": "앤 트레이스만",
        "name_en": "Anne Treisman",
        "contribution": "감쇠 모형(Attenuation Model)을 제안하여 무시된 정보도 약화되어 처리된다고 수정하였다."
      },
      {
        "name_ko": "대니얼 사이먼스",
        "name_en": "Daniel Simons",
        "contribution": "Christopher Chabris와 함께 보이지 않는 고릴라 실험으로 비주의 맹시를 극적으로 시연하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "칵테일파티 효과",
        "name_en": "Cocktail Party Effect",
        "id": "CONSCIOUS_CKTL_029"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      },
      {
        "name_ko": "역치하 자극",
        "name_en": "Subliminal Stimulus",
        "id": "CONSCIOUS_SUBLM_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "선택적 주의 = '스포트라이트'. 무대 위 많은 배우 중 조명이 비추는 한 명에게만 주의를 집중하는 것.",
      "differential": "선택적 주의는 특정 자극에 '집중'하는 것이고, 분할 주의(divided attention)는 여러 자극에 '동시에' 주의를 나누는 것이다.",
      "key_point": "Broadbent의 여과기 모형(초기 선택) vs Treisman의 감쇠 모형(약화) vs Deutsch의 후기 선택 모형의 차이를 구분해야 한다.",
      "common_mistake": "선택적 주의에서 무시된 정보가 전혀 처리되지 않는다고 생각하는 것. Treisman의 감쇠 모형에 따르면 무시된 정보도 약화되어 일부 처리된다."
    }
  },
  {
    "id": "CONSCIOUS_CKTL_029",
    "terminology": "칵테일파티 효과 (Cocktail Party Effect)",
    "terminology_ko": "칵테일파티 효과",
    "terminology_en": "Cocktail Party Effect",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "소음이 가득한 환경에서도 자신의 이름이나 관심 있는 정보가 언급되면 자동적으로 주의가 전환되는 현상이다. 선택적 주의의 대표적 예시이다.",
    "definition_en": "The phenomenon of automatically shifting attention when one's name or personally relevant information is mentioned in a noisy environment. It is a classic example of selective attention.",
    "significance": "칵테일파티 효과는 무시된 채널의 정보도 어느 정도 처리된다는 증거로, Broadbent의 엄격한 여과기 모형에 대한 반론이 되었다. Treisman의 감쇠 모형은 이 현상을 설명하기 위해 제안되었으며, 주의와 의식의 관계를 이해하는 데 핵심적 사례이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 콜린 체리",
        "name_en": "Edward Colin Cherry",
        "contribution": "양이 분리 청취(dichotic listening) 실험을 통해 칵테일파티 효과를 최초로 과학적으로 기술하였다(1953)."
      },
      {
        "name_ko": "나빌 모레이",
        "name_en": "Neville Moray",
        "contribution": "양이 분리 청취 실험에서 무시된 채널의 자기 이름이 탐지됨을 실증하여 칵테일파티 효과를 확인하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택적 주의",
        "name_en": "Selective Attention",
        "id": "CONSCIOUS_SELAT_028"
      },
      {
        "name_ko": "잠재의식",
        "name_en": "Subconscious",
        "id": "CONSCIOUS_SUBCO_002"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "칵테일파티 효과 = 시끄러운 파티에서도 누가 내 이름을 부르면 들린다! 수많은 대화 중 '나'에게 관련된 정보에 귀가 쏠린다.",
      "differential": "칵테일파티 효과는 무시된 정보의 일부 처리를 보여주고, 비주의 맹시는 주의하지 않은 시각 자극을 못 보는 것을 보여준다.",
      "key_point": "Cherry의 양이 분리 청취 실험이 원조이며, 이 현상은 Broadbent의 초기 선택 모형에 대한 도전이 되었다.",
      "common_mistake": "칵테일파티 효과가 의식적으로 모든 대화를 동시에 듣는 것이라고 생각하는 것. 실제로는 무시된 채널의 특정 자극(자기 이름)에만 자동 반응하는 것이다."
    }
  },
  {
    "id": "CONSCIOUS_SUBLM_030",
    "terminology": "역치하 자극 (Subliminal Stimulus)",
    "terminology_ko": "역치하 자극",
    "terminology_en": "Subliminal Stimulus",
    "category": "CONSCIOUS",
    "category_name": "의식 (Consciousness)",
    "definition": "의식적으로 지각할 수 있는 절대 역치(absolute threshold) 아래의 자극으로, 자각하지 못하지만 행동이나 판단에 미묘한 영향을 미칠 수 있다.",
    "definition_en": "A stimulus below the absolute threshold of conscious perception that cannot be consciously detected but may subtly influence behavior or judgment.",
    "significance": "역치하 자극은 의식적 자각 없이도 정보가 처리될 수 있는지를 검증하는 핵심 연구 주제이다. 역치하 점화(subliminal priming) 연구에서 미약하지만 측정 가능한 효과가 확인되었으나, 역치하 광고가 행동을 크게 변화시킨다는 주장은 과학적으로 지지되지 않는다.",
    "key_researchers": [
      {
        "name_ko": "필립 메리클",
        "name_en": "Philip Merikle",
        "contribution": "역치하 지각의 실재를 엄격한 실험 방법론으로 검증하여, 의식적 자각 없이도 정보 처리가 가능함을 입증하였다."
      },
      {
        "name_ko": "앤서니 마르셀",
        "name_en": "Anthony Marcel",
        "contribution": "역치하 점화 실험을 통해 의식적 지각 없이도 의미적 처리가 이루어짐을 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "CONSCIOUS_UNCON_003"
      },
      {
        "name_ko": "선택적 주의",
        "name_en": "Selective Attention",
        "id": "CONSCIOUS_SELAT_028"
      },
      {
        "name_ko": "의식",
        "name_en": "Consciousness",
        "id": "CONSCIOUS_CONSC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역치하 = '역치(threshold) 아래(下)'. Subliminal = 'sub(아래) + limen(역치)' = 역치 아래. 의식의 문턱 아래 자극.",
      "differential": "역치하 자극은 절대 역치 '아래'여서 자각할 수 없고, 역치상 자극(supraliminal)은 역치 '위'여서 자각 가능하다.",
      "key_point": "역치하 점화는 실험실에서 미약한 효과가 확인되지만, 역치하 광고가 소비 행동을 크게 바꾼다는 속설은 과학적 근거가 부족하다.",
      "common_mistake": "영화관에서 역치하 메시지를 삽입하면 관객의 행동을 조종할 수 있다는 속설(Vicary의 팝콘 실험). 이 실험은 조작된 것으로 밝혀졌다."
    }
  }
];

TERMS_DATA.SENSORY = [
  {
    "id": "SENSORY_SENS_001",
    "terminology": "감각 (Sensation)",
    "terminology_ko": "감각",
    "terminology_en": "Sensation",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "감각수용기가 외부 자극 에너지를 탐지하여 신경 신호로 변환하는 과정. 자극의 물리적 속성을 있는 그대로 수용하는 초기 단계이다.",
    "definition_en": "The process by which sensory receptors detect physical stimulus energy from the environment and convert it into neural signals. It represents the initial, bottom-up stage of receiving raw sensory information.",
    "significance": "지각의 원재료를 제공하는 기초 과정으로, 감각 없이는 외부 세계에 대한 어떤 심리적 경험도 불가능하다. 감각과 지각의 구분은 심리학의 핵심 주제이다.",
    "key_researchers": [
      {
        "name_ko": "구스타프 페히너",
        "name_en": "Gustav Fechner",
        "contribution": "정신물리학을 창시하여 물리적 자극과 감각 경험 간의 수학적 관계를 최초로 체계화"
      },
      {
        "name_ko": "에른스트 베버",
        "name_en": "Ernst Weber",
        "contribution": "감각 변별에 관한 최초의 체계적 연구를 수행하여 베버의 법칙 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      },
      {
        "name_ko": "절대역",
        "name_en": "Absolute Threshold",
        "id": "SENSORY_AT_003"
      },
      {
        "name_ko": "변환",
        "name_en": "Transduction",
        "id": "SENSORY_TRANS_017"
      }
    ],
    "sub_types": [
      {
        "name": "시각 (Vision)",
        "description": "빛 에너지를 수용하는 감각"
      },
      {
        "name": "청각 (Audition)",
        "description": "소리 파동을 수용하는 감각"
      },
      {
        "name": "촉각 (Touch)",
        "description": "피부의 기계적 자극을 수용하는 감각"
      },
      {
        "name": "미각 (Gustation)",
        "description": "화학적 자극에 의한 맛 감각"
      },
      {
        "name": "후각 (Olfaction)",
        "description": "화학적 자극에 의한 냄새 감각"
      }
    ],
    "quiz_hints": {
      "mnemonic": "감각 = 원재료(raw data) 수집, 지각 = 원재료 해석(interpretation)",
      "differential": "감각은 자극의 탐지(detection)이고, 지각은 자극의 해석(interpretation)이다",
      "key_point": "감각은 상향처리(bottom-up)의 시작점이다",
      "common_mistake": "감각과 지각을 동의어로 혼동하는 것 — 감각은 수용, 지각은 조직화 및 해석"
    }
  },
  {
    "id": "SENSORY_PERC_002",
    "terminology": "지각 (Perception)",
    "terminology_ko": "지각",
    "terminology_en": "Perception",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "감각 정보를 선택, 조직화, 해석하여 의미 있는 경험으로 구성하는 과정. 기존 지식과 기대가 영향을 미치는 능동적 과정이다.",
    "definition_en": "The process of selecting, organizing, and interpreting sensory information to form meaningful experiences. It is an active process influenced by prior knowledge, expectations, and context.",
    "significance": "동일한 감각 입력에서도 서로 다른 지각이 형성될 수 있음을 보여주며, 인간 인지의 구성적(constructive) 특성을 드러낸다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 폰 헬름홀츠",
        "name_en": "Hermann von Helmholtz",
        "contribution": "지각을 '무의식적 추론(unconscious inference)'으로 설명"
      },
      {
        "name_ko": "제임스 깁슨",
        "name_en": "James J. Gibson",
        "contribution": "직접 지각 이론(직접 지각)과 행동유도성(affordance) 개념 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      },
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      },
      {
        "name_ko": "지각적 세트",
        "name_en": "Perceptual Set",
        "id": "SENSORY_PS_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "지각 = 뇌의 '해석 공장' — 원재료(감각)를 완제품(경험)으로 가공",
      "differential": "감각은 수동적 수용, 지각은 능동적 해석이다",
      "key_point": "지각은 상향처리와 하향처리의 상호작용으로 이루어진다",
      "common_mistake": "지각이 순전히 자극에 의해 결정된다고 생각하는 것 — 실제로는 기대와 맥락이 큰 영향을 미침"
    }
  },
  {
    "id": "SENSORY_AT_003",
    "terminology": "절대역 (Absolute Threshold)",
    "terminology_ko": "절대역",
    "terminology_en": "Absolute Threshold",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "특정 감각 자극을 50%의 확률로 탐지할 수 있는 최소 자극 강도. 이 수준 이하의 자극은 역하자극(subliminal stimulus)이라 한다.",
    "definition_en": "The minimum stimulus intensity needed to detect a particular stimulus 50% of the time. Stimuli below this level are called subliminal stimuli.",
    "significance": "감각 체계의 민감도를 정량적으로 측정하는 기준이 되며, 역하 지각(subliminal perception) 연구의 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "구스타프 페히너",
        "name_en": "Gustav Fechner",
        "contribution": "절대역의 개념을 체계화하고 측정 방법(정신물리학적 방법)을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "차이역",
        "name_en": "Difference Threshold",
        "id": "SENSORY_DT_004"
      },
      {
        "name_ko": "신호탐지이론",
        "name_en": "Signal Detection Theory",
        "id": "SENSORY_SDT_006"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절대역 = '50% 탐지 라인' — 조용한 방에서 시계 똑딱 소리가 들릴 확률 반반인 거리",
      "differential": "절대역은 자극의 '유무' 판단, 차이역(JND)은 두 자극의 '차이' 판단",
      "key_point": "50%라는 기준이 핵심 — 100%가 아님에 주의",
      "common_mistake": "절대역을 '반드시 감지되는 최소 자극'으로 오해하는 것 — 실제로는 50% 확률의 기준"
    }
  },
  {
    "id": "SENSORY_DT_004",
    "terminology": "차이역 (Difference Threshold)",
    "terminology_ko": "차이역",
    "terminology_en": "Difference Threshold",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "두 자극 간의 차이를 50%의 확률로 탐지할 수 있는 최소 자극 차이. '최소식별차이(Just Noticeable Difference, JND)'라고도 한다.",
    "definition_en": "The minimum difference between two stimuli required for detection 50% of the time. Also known as the Just Noticeable Difference (JND).",
    "significance": "베버의 법칙의 기초가 되며, 감각 체계가 절대적 차이가 아닌 상대적 비율에 반응함을 보여주는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "에른스트 베버",
        "name_en": "Ernst Weber",
        "contribution": "차이역이 기준 자극의 일정 비율임을 발견 (베버의 법칙)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "절대역",
        "name_en": "Absolute Threshold",
        "id": "SENSORY_AT_003"
      },
      {
        "name_ko": "웨버의 법칙",
        "name_en": "Weber's Law",
        "id": "SENSORY_WL_005"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "JND = Just Noticeable Difference, '겨우 알아차릴 수 있는 차이'",
      "differential": "절대역은 '있다/없다'의 문제, 차이역은 '같다/다르다'의 문제",
      "key_point": "차이역은 고정된 양이 아니라 기준 자극에 비례하여 변한다",
      "common_mistake": "차이역을 고정된 절대값으로 생각하는 것 — 실제로는 비율(웨버 분수)로 결정됨"
    }
  },
  {
    "id": "SENSORY_WL_005",
    "terminology": "웨버의 법칙 (Weber's Law)",
    "terminology_ko": "웨버의 법칙",
    "terminology_en": "Weber's Law",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "차이역(JND)은 기준 자극 강도의 일정 비율(상수 k)이라는 법칙. 즉 ΔI/I = k로 표현되며, 자극이 클수록 차이를 느끼려면 더 큰 변화가 필요하다.",
    "definition_en": "The principle that the just noticeable difference (JND) for any given sense is a constant proportion (k) of the stimulus being judged, expressed as ΔI/I = k.",
    "significance": "정신물리학의 기본 법칙으로, 인간 감각 체계가 절대적 차이가 아닌 상대적 비율에 반응함을 정량적으로 증명하였다.",
    "key_researchers": [
      {
        "name_ko": "에른스트 베버",
        "name_en": "Ernst Weber",
        "contribution": "무게 판별 실험에서 차이역이 기준 자극의 일정 비율임을 최초로 발견"
      },
      {
        "name_ko": "구스타프 페히너",
        "name_en": "Gustav Fechner",
        "contribution": "베버의 발견을 수학적으로 정식화하고 '베버의 법칙'이라 명명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "차이역",
        "name_en": "Difference Threshold",
        "id": "SENSORY_DT_004"
      },
      {
        "name_ko": "절대역",
        "name_en": "Absolute Threshold",
        "id": "SENSORY_AT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "10kg에 1kg 추가 → 느낌, 100kg에 1kg 추가 → 못 느낌 (비율이 핵심!)",
      "differential": "베버의 법칙은 비율 원리, 페히너의 법칙(S = k log I)은 감각 크기의 로그 관계",
      "key_point": "공식 ΔI/I = k에서 k는 감각 양식마다 다르다 (시각 ≈ 1/60, 무게 ≈ 1/50)",
      "common_mistake": "모든 감각 범위에서 법칙이 완벽히 성립한다고 생각하는 것 — 극단적 자극에서는 위반됨"
    }
  },
  {
    "id": "SENSORY_SDT_006",
    "terminology": "신호탐지이론 (Signal Detection Theory)",
    "terminology_ko": "신호탐지이론",
    "terminology_en": "Signal Detection Theory",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "자극 탐지가 자극의 물리적 강도뿐 아니라 심리적 요인(기대, 동기, 경험, 피로 등)에 의해서도 결정된다는 이론. 적중(hit), 오경보(false alarm), 누락(miss), 정기각(correct rejection)의 네 가지 결과를 분석한다.",
    "definition_en": "A theory predicting how and when we detect the presence of a faint stimulus amid background noise, considering not only stimulus intensity but also psychological factors such as expectations, motivation, experience, and fatigue.",
    "significance": "고전적 역 개념의 한계를 극복하여 감각 민감도(d')와 반응 편향(β)을 분리하며, 의료 진단, 레이더 탐지 등 실용 분야에 광범위하게 적용된다.",
    "key_researchers": [
      {
        "name_ko": "존 스웨츠",
        "name_en": "John Swets",
        "contribution": "신호탐지이론의 심리학적 적용을 체계화"
      },
      {
        "name_ko": "데이비드 그린",
        "name_en": "David Green",
        "contribution": "스웨츠와 함께 『Signal Detection Theory and Psychophysics』를 저술하여 이론 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "절대역",
        "name_en": "Absolute Threshold",
        "id": "SENSORY_AT_003"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      }
    ],
    "sub_types": [
      {
        "name": "적중 (Hit)",
        "description": "신호가 있을 때 '있다'고 정확히 반응"
      },
      {
        "name": "오경보 (False Alarm)",
        "description": "신호가 없을 때 '있다'고 잘못 반응"
      },
      {
        "name": "누락 (Miss)",
        "description": "신호가 있을 때 '없다'고 잘못 반응"
      },
      {
        "name": "정기각 (Correct Rejection)",
        "description": "신호가 없을 때 '없다'고 정확히 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SDT = 역(threshold) + 심리(마음) — 탐지는 물리적 강도와 심리적 기준의 합작",
      "differential": "고전적 역 이론은 고정된 역을 가정하나, SDT는 반응 기준이 상황에 따라 변한다고 봄",
      "key_point": "민감도(d')와 반응 편향(β)을 분리하여 측정할 수 있다는 것이 핵심",
      "common_mistake": "신호탐지이론이 역(threshold) 개념을 완전히 대체한다고 생각하는 것 — 보완적 관계"
    }
  },
  {
    "id": "SENSORY_SA_007",
    "terminology": "감각순응 (Sensory Adaptation)",
    "terminology_ko": "감각순응",
    "terminology_en": "Sensory Adaptation",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "일정한 자극에 지속적으로 노출될 때 그 자극에 대한 감각 민감도가 점차 감소하는 현상. 변화하는 자극에 더 주의를 기울이도록 하는 적응적 기능이 있다.",
    "definition_en": "The diminished sensitivity to a constant, unchanging stimulus over time. It serves an adaptive function by allowing us to focus on new or changing stimuli in the environment.",
    "significance": "감각 체계가 절대적 자극 수준보다 변화(change)에 더 민감하게 반응하도록 설계되어 있음을 보여주며, 생존에 유리한 적응적 기제이다.",
    "key_researchers": [
      {
        "name_ko": "게오르크 폰 베케시",
        "name_en": "Georg von Békésy",
        "contribution": "청각의 순응 과정에 관한 연구를 통해 감각순응의 신경 기제 탐구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      },
      {
        "name_ko": "절대역",
        "name_en": "Absolute Threshold",
        "id": "SENSORY_AT_003"
      },
      {
        "name_ko": "수용기",
        "name_en": "Sensory Receptors",
        "id": "SENSORY_REC_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수영장 물에 처음엔 차갑지만 금방 익숙해지는 것 = 감각순응",
      "differential": "감각순응은 말초 수용기 수준의 현상이고, 습관화(habituation)는 중추신경계 수준의 반응 감소이다",
      "key_point": "변화하지 않는 자극에 대한 민감도 감소 — 통증 감각은 순응이 거의 일어나지 않는다는 점 주의",
      "common_mistake": "감각순응과 습관화(habituation)를 같은 개념으로 혼동하는 것"
    }
  },
  {
    "id": "SENSORY_BUP_008",
    "terminology": "상향처리 (Bottom-Up Processing)",
    "terminology_ko": "상향처리",
    "terminology_en": "Bottom-Up Processing",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "감각 수용기에서 시작하여 뇌의 고차 영역으로 올라가는 정보처리 방식. 원시 감각 데이터에 의해 주도되며, 사전 지식이나 기대 없이 자극 자체의 특성을 분석한다.",
    "definition_en": "Information processing that begins with sensory receptors and works up to the brain's higher-level integration. It is data-driven, analyzing stimulus features without the influence of prior knowledge or expectations.",
    "significance": "감각 정보가 어떻게 물리적 특성에서 점진적으로 복잡한 표상으로 구축되는지를 설명하며, 하향처리와 함께 지각의 두 축을 형성한다.",
    "key_researchers": [
      {
        "name_ko": "제임스 깁슨",
        "name_en": "James J. Gibson",
        "contribution": "환경이 제공하는 자극 정보만으로 지각이 가능하다는 직접 지각 이론(생태학적 접근) 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Bottom-Up = 바닥(감각)에서 위(뇌)로 → 데이터가 이끄는 처리",
      "differential": "상향처리는 자극 주도(data-driven), 하향처리는 개념 주도(concept-driven)",
      "key_point": "상향처리는 특히 새롭고 익숙하지 않은 자극을 처리할 때 우세하다",
      "common_mistake": "상향처리만으로 지각이 완성된다고 생각하는 것 — 대부분의 지각은 두 처리의 상호작용"
    }
  },
  {
    "id": "SENSORY_TDP_009",
    "terminology": "하향처리 (Top-Down Processing)",
    "terminology_ko": "하향처리",
    "terminology_en": "Top-Down Processing",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "기존 지식, 기대, 경험, 맥락 등 고차 인지 과정이 감각 정보의 해석을 이끄는 처리 방식. 불완전하거나 모호한 자극을 해석할 때 특히 중요한 역할을 한다.",
    "definition_en": "Information processing guided by higher-level cognitive processes such as existing knowledge, expectations, experience, and context. It is particularly important when interpreting incomplete or ambiguous stimuli.",
    "significance": "동일한 감각 입력이 맥락에 따라 다르게 지각될 수 있음을 설명하며, 지각의 구성적(constructive) 본질을 증명한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 그레고리",
        "name_en": "Richard Gregory",
        "contribution": "지각을 가설 검증 과정으로 설명하며 하향처리의 역할을 강조"
      },
      {
        "name_ko": "어빙 비더만",
        "name_en": "Irving Biederman",
        "contribution": "기하학적 구성요소(geon) 기반의 물체 인식 이론을 통해 하향처리의 기제 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상향처리",
        "name_en": "Bottom-Up Processing",
        "id": "SENSORY_BUP_008"
      },
      {
        "name_ko": "지각적 세트",
        "name_en": "Perceptual Set",
        "id": "SENSORY_PS_030"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Top-Down = 위(뇌/지식)에서 아래(감각)로 → 기대가 이끄는 처리",
      "differential": "하향처리는 개념 주도(concept-driven), 상향처리는 자극 주도(data-driven)",
      "key_point": "교정(proofreading)이 어려운 이유 = 하향처리가 오타를 '수정'하여 읽게 만들기 때문",
      "common_mistake": "하향처리가 왜곡만 초래한다고 생각하는 것 — 실제로는 효율적 지각에 필수적"
    }
  },
  {
    "id": "SENSORY_GEST_010",
    "terminology": "게슈탈트 원리 (Gestalt Principles)",
    "terminology_ko": "게슈탈트 원리",
    "terminology_en": "Gestalt Principles",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "지각 체계가 감각 정보를 의미 있는 전체로 조직화하는 규칙들의 집합. '전체는 부분의 합보다 크다(The whole is greater than the sum of its parts)'는 원리에 기반한다.",
    "definition_en": "A set of rules describing how the perceptual system organizes sensory elements into meaningful wholes. Based on the principle that 'the whole is greater than the sum of its parts.'",
    "significance": "지각이 단순한 감각의 합이 아닌 능동적 조직화 과정임을 증명하였으며, 디자인, UX, 시각예술 등에 광범위하게 적용된다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "게슈탈트 심리학의 창시자, 가현운동(phi phenomenon) 연구"
      },
      {
        "name_ko": "쿠르트 코프카",
        "name_en": "Kurt Koffka",
        "contribution": "게슈탈트 원리를 체계화하고 『Principles of Gestalt Psychology』 저술"
      },
      {
        "name_ko": "볼프강 쾰러",
        "name_en": "Wolfgang Köhler",
        "contribution": "통찰 학습 연구를 통해 게슈탈트 원리의 인지적 적용 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "근접성",
        "name_en": "Proximity",
        "id": "SENSORY_PROX_019"
      },
      {
        "name_ko": "유사성",
        "name_en": "Similarity",
        "id": "SENSORY_SIM_020"
      },
      {
        "name_ko": "폐쇄성",
        "name_en": "Closure",
        "id": "SENSORY_CLOS_021"
      },
      {
        "name_ko": "연속성",
        "name_en": "Continuity",
        "id": "SENSORY_CONT_022"
      },
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "SENSORY_FG_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "게슈탈트 = '형태/전체' → 부분이 아닌 전체로 본다",
      "differential": "구조주의(분석적 접근)가 요소를 분해하는 반면, 게슈탈트는 전체적 조직화를 강조",
      "key_point": "핵심 원리: 근접성, 유사성, 폐쇄성, 연속성, 전경/배경",
      "common_mistake": "게슈탈트 원리가 시각에만 적용된다고 생각하는 것 — 청각 등 다른 감각에도 적용됨"
    }
  },
  {
    "id": "SENSORY_BIN_011",
    "terminology": "양안단서 (Binocular Cues)",
    "terminology_ko": "양안단서",
    "terminology_en": "Binocular Cues",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "깊이를 지각하기 위해 두 눈의 협응에 의존하는 단서. 양안부등(retinal disparity)과 폭주(convergence)가 대표적이다.",
    "definition_en": "Depth cues that depend on the coordinated use of both eyes. The two main types are retinal disparity and convergence.",
    "significance": "3D 입체 시각의 기초를 제공하며, 가까운 거리의 깊이 지각에 특히 중요하다. 3D 영화와 VR 기술의 원리적 기반이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 휘트스톤",
        "name_en": "Charles Wheatstone",
        "contribution": "입체경(stereoscope)을 발명하여 양안부등에 의한 깊이 지각을 최초로 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단안단서",
        "name_en": "Monocular Cues",
        "id": "SENSORY_MON_012"
      },
      {
        "name_ko": "깊이지각",
        "name_en": "Depth Perception",
        "id": "SENSORY_DP_024"
      },
      {
        "name_ko": "양안부등",
        "name_en": "Retinal Disparity",
        "id": "SENSORY_RD_025"
      }
    ],
    "sub_types": [
      {
        "name": "양안부등 (Retinal Disparity)",
        "description": "두 눈의 망막에 맺히는 상의 차이에 의한 깊이 단서"
      },
      {
        "name": "폭주 (Convergence)",
        "description": "가까운 물체를 볼 때 두 눈이 안쪽으로 모이는 정도에 의한 깊이 단서"
      }
    ],
    "quiz_hints": {
      "mnemonic": "양안(兩眼) = 두 눈 → 두 눈이 있어야 작동하는 깊이 단서",
      "differential": "양안단서는 두 눈 필요(근거리 유효), 단안단서는 한 눈으로 충분(원거리에도 유효)",
      "key_point": "양안부등과 폭주 두 가지가 핵심이며, 약 8m 이내에서 효과적",
      "common_mistake": "양안단서가 모든 거리에서 유효하다고 생각하는 것 — 먼 거리에서는 효과가 급감"
    }
  },
  {
    "id": "SENSORY_MON_012",
    "terminology": "단안단서 (Monocular Cues)",
    "terminology_ko": "단안단서",
    "terminology_en": "Monocular Cues",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "한쪽 눈만으로도 사용할 수 있는 깊이 지각 단서. 상대적 크기, 중첩, 선형원근법, 결 기울기, 상대적 높이, 대기원근법, 운동시차 등이 포함된다.",
    "definition_en": "Depth cues available to either eye alone, including relative size, interposition, linear perspective, texture gradient, relative height, aerial perspective, and motion parallax.",
    "significance": "2차원 이미지(그림, 사진)에서도 깊이감을 만들어내며, 원거리 깊이 지각에서 양안단서보다 더 중요한 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "레오나르도 다 빈치",
        "name_en": "Leonardo da Vinci",
        "contribution": "대기원근법, 중첩 등 단안단서를 회화에 체계적으로 적용한 선구자"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양안단서",
        "name_en": "Binocular Cues",
        "id": "SENSORY_BIN_011"
      },
      {
        "name_ko": "깊이지각",
        "name_en": "Depth Perception",
        "id": "SENSORY_DP_024"
      },
      {
        "name_ko": "운동시차",
        "name_en": "Motion Parallax",
        "id": "SENSORY_MP_026"
      }
    ],
    "sub_types": [
      {
        "name": "상대적 크기 (Relative Size)",
        "description": "같은 크기의 물체 중 작게 보이는 것이 더 먼 것으로 지각"
      },
      {
        "name": "중첩 (Interposition)",
        "description": "한 물체가 다른 물체를 가리면 가리는 물체가 더 가까운 것으로 지각"
      },
      {
        "name": "선형원근법 (Linear Perspective)",
        "description": "평행선이 멀어질수록 수렴하는 경향"
      },
      {
        "name": "결 기울기 (Texture Gradient)",
        "description": "표면의 결이 멀수록 조밀해지는 현상"
      },
      {
        "name": "대기원근법 (Aerial Perspective)",
        "description": "먼 물체일수록 흐리고 푸르게 보이는 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "단안(單眼) = 한 눈 → 한 눈으로도 되는 깊이 단서, 그림에서도 작동!",
      "differential": "단안단서는 한 눈 + 원거리에 유효, 양안단서는 두 눈 + 근거리에 유효",
      "key_point": "화가들이 2D 캔버스에 3D 느낌을 주기 위해 사용하는 기법 = 단안단서의 활용",
      "common_mistake": "단안단서는 양안단서보다 열등하다고 생각하는 것 — 실제로 먼 거리에서는 단안단서가 더 유효"
    }
  },
  {
    "id": "SENSORY_PC_013",
    "terminology": "지각항등성 (Perceptual Constancy)",
    "terminology_ko": "지각항등성",
    "terminology_en": "Perceptual Constancy",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "조명, 거리, 각도 등 관찰 조건이 변해도 대상의 크기, 형태, 밝기, 색상 등을 안정적으로 지각하는 능력. 망막상의 변화에도 불구하고 대상을 일관되게 인식한다.",
    "definition_en": "The ability to perceive objects as unchanging in size, shape, brightness, and color despite changes in viewing conditions such as lighting, distance, and angle.",
    "significance": "끊임없이 변하는 감각 입력 속에서 세계를 안정적으로 지각할 수 있게 하는 핵심 기제이며, 지각의 능동적 구성 과정을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 폰 헬름홀츠",
        "name_en": "Hermann von Helmholtz",
        "contribution": "지각항등성을 무의식적 추론(unconscious inference)으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      },
      {
        "name_ko": "착시",
        "name_en": "Illusion",
        "id": "SENSORY_ILL_014"
      },
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      }
    ],
    "sub_types": [
      {
        "name": "크기 항등성 (Size Constancy)",
        "description": "거리가 변해도 대상의 크기를 안정적으로 지각"
      },
      {
        "name": "형태 항등성 (Shape Constancy)",
        "description": "각도가 변해도 대상의 형태를 안정적으로 지각"
      },
      {
        "name": "밝기 항등성 (Brightness Constancy)",
        "description": "조명이 변해도 대상의 밝기를 안정적으로 지각"
      },
      {
        "name": "색상 항등성 (Color Constancy)",
        "description": "조명의 색이 변해도 대상의 색상을 안정적으로 지각"
      }
    ],
    "quiz_hints": {
      "mnemonic": "문이 열리면 망막상은 사다리꼴이지만 우리는 여전히 '직사각형 문'으로 본다 = 형태 항등성",
      "differential": "지각항등성은 '올바른' 지각을 유지하는 것이고, 착시는 지각항등성이 실패하거나 오적용된 결과",
      "key_point": "지각항등성은 맥락 정보(context)에 의존하며, 맥락이 제거되면 항등성이 무너진다",
      "common_mistake": "지각항등성이 완벽하다고 생각하는 것 — 에임즈 방(Ames room) 같은 조건에서는 실패"
    }
  },
  {
    "id": "SENSORY_ILL_014",
    "terminology": "착시 (Illusion)",
    "terminology_ko": "착시",
    "terminology_en": "Illusion",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "실제 물리적 자극과 지각된 경험 간에 체계적인 불일치가 발생하는 현상. 지각 체계의 정상적 작동 원리가 특정 조건에서 오류를 일으킬 때 나타난다.",
    "definition_en": "A systematic discrepancy between the actual physical stimulus and the perceived experience. Illusions arise when the normal operating principles of the perceptual system produce errors under certain conditions.",
    "significance": "지각이 단순한 자극 복사가 아닌 능동적 구성 과정임을 가장 명확히 보여주며, 지각 체계의 작동 원리를 역으로 추론하는 연구 도구이다.",
    "key_researchers": [
      {
        "name_ko": "리처드 그레고리",
        "name_en": "Richard Gregory",
        "contribution": "착시를 부적절한 항등성 조정(misapplied constancy scaling)으로 설명"
      },
      {
        "name_ko": "프란츠 뮐러-라이어",
        "name_en": "Franz Müller-Lyer",
        "contribution": "뮐러-라이어 착시를 발견하여 착시 연구의 고전적 사례 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지각항등성",
        "name_en": "Perceptual Constancy",
        "id": "SENSORY_PC_013"
      },
      {
        "name_ko": "뮐러-라이어 착시",
        "name_en": "Müller-Lyer Illusion",
        "id": "SENSORY_ML_028"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      }
    ],
    "sub_types": [
      {
        "name": "기하학적 착시 (Geometric Illusion)",
        "description": "크기, 길이, 방향 등에서 발생하는 착시"
      },
      {
        "name": "운동 착시 (Motion Illusion)",
        "description": "정지된 자극이 움직이는 것처럼 보이는 착시"
      },
      {
        "name": "밝기/색상 착시 (Brightness/Color Illusion)",
        "description": "밝기나 색상이 맥락에 의해 왜곡되는 착시"
      }
    ],
    "quiz_hints": {
      "mnemonic": "착시 = 지각 체계의 '합리적 오류' — 보통은 맞는 규칙이 특정 조건에서 실패",
      "differential": "착시(illusion)는 실제 자극이 존재하고 왜곡되는 것, 환각(hallucination)은 자극 없이 지각이 생기는 것",
      "key_point": "착시는 지각의 결함이 아니라 정상적 지각 원리의 부산물이다",
      "common_mistake": "착시를 '비정상적' 지각으로 취급하는 것 — 실제로는 정상적 지각 메커니즘의 자연스러운 결과"
    }
  },
  {
    "id": "SENSORY_VC_015",
    "terminology": "시각절벽 (Visual Cliff)",
    "terminology_ko": "시각절벽",
    "terminology_en": "Visual Cliff",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "깊이 지각의 발달을 연구하기 위해 고안된 실험 장치. 유리판 아래에 바닥이 깊어 보이는 면과 얕아 보이는 면을 만들어, 영아가 깊은 쪽을 회피하는지 관찰한다.",
    "definition_en": "A laboratory apparatus designed to study depth perception in infants and young animals. It features a glass-covered platform with a shallow side and a deep side, testing whether subjects avoid the deep side.",
    "significance": "기어 다니는 영아도 깊이를 지각하고 회피한다는 것을 보여주어, 깊이 지각에 선천적 요소가 있음을 시사하는 고전적 연구이다.",
    "key_researchers": [
      {
        "name_ko": "엘리너 깁슨",
        "name_en": "Eleanor Gibson",
        "contribution": "리처드 워크와 함께 시각절벽 실험을 설계하여 영아의 깊이 지각 능력을 최초로 체계적으로 입증"
      },
      {
        "name_ko": "리처드 워크",
        "name_en": "Richard Walk",
        "contribution": "엘리너 깁슨과 함께 시각절벽 실험을 공동으로 수행(1960)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "깊이지각",
        "name_en": "Depth Perception",
        "id": "SENSORY_DP_024"
      },
      {
        "name_ko": "양안단서",
        "name_en": "Binocular Cues",
        "id": "SENSORY_BIN_011"
      },
      {
        "name_ko": "단안단서",
        "name_en": "Monocular Cues",
        "id": "SENSORY_MON_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "시각절벽 = 유리 테이블 위의 '가짜 낭떠러지' — 아기가 깊은 쪽으로 기어가지 않으면 깊이 지각이 있다는 증거",
      "differential": "시각절벽은 깊이 지각의 '존재'를 검증하는 실험이지, 선천/후천의 결론을 내리는 실험이 아님",
      "key_point": "6~14개월 영아 대부분이 깊은 쪽을 회피 → 깊이 지각의 초기 발달을 시사",
      "common_mistake": "시각절벽 실험이 깊이 지각이 100% 선천적임을 증명했다고 생각하는 것 — 기어 다니는 나이(약 6개월)에서 테스트되므로 경험의 역할을 완전히 배제할 수 없음"
    }
  },
  {
    "id": "SENSORY_REC_016",
    "terminology": "수용기 (Sensory Receptors)",
    "terminology_ko": "수용기",
    "terminology_en": "Sensory Receptors",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "특정 유형의 자극 에너지를 탐지하여 신경 충동(전기적 신호)으로 변환하는 특수한 신경세포 또는 구조물. 각 감각 양식에 따라 특화된 수용기가 존재한다.",
    "definition_en": "Specialized neural cells or structures that detect specific types of stimulus energy and convert them into neural impulses. Each sensory modality has its own specialized receptors.",
    "significance": "외부 세계와 신경계를 연결하는 관문으로, 수용기의 특성이 감각 경험의 범위와 한계를 결정한다.",
    "key_researchers": [
      {
        "name_ko": "요하네스 뮐러",
        "name_en": "Johannes Müller",
        "contribution": "특수 신경 에너지 법칙을 제안하여 각 감각 신경이 고유한 감각을 전달함을 주장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변환",
        "name_en": "Transduction",
        "id": "SENSORY_TRANS_017"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      },
      {
        "name_ko": "감각순응",
        "name_en": "Sensory Adaptation",
        "id": "SENSORY_SA_007"
      }
    ],
    "sub_types": [
      {
        "name": "광수용기 (Photoreceptors)",
        "description": "빛을 탐지하는 수용기 (간상체, 원추체)"
      },
      {
        "name": "기계수용기 (Mechanoreceptors)",
        "description": "압력, 진동 등 기계적 자극을 탐지"
      },
      {
        "name": "화학수용기 (Chemoreceptors)",
        "description": "화학물질을 탐지 (미각, 후각)"
      },
      {
        "name": "열수용기 (Thermoreceptors)",
        "description": "온도 변화를 탐지"
      },
      {
        "name": "통각수용기 (Nociceptors)",
        "description": "통증 자극을 탐지"
      }
    ],
    "quiz_hints": {
      "mnemonic": "수용기 = 자극 에너지의 '번역기' — 빛→전기, 소리→전기, 냄새→전기",
      "differential": "수용기는 변환(transduction)을 수행하는 '장치', 변환은 수용기가 수행하는 '과정'",
      "key_point": "요하네스 뮐러의 특수 신경 에너지 법칙: 감각의 차이는 수용기가 아니라 신경 경로에 의해 결정된다",
      "common_mistake": "수용기가 직접 '감각'을 만든다고 생각하는 것 — 수용기는 변환만 하고, 감각 경험은 뇌에서 구성됨"
    }
  },
  {
    "id": "SENSORY_TRANS_017",
    "terminology": "변환 (Transduction)",
    "terminology_ko": "변환",
    "terminology_en": "Transduction",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "감각수용기가 한 형태의 에너지(빛, 소리, 화학물질 등)를 신경 신호(전기적 충동)로 변환하는 과정. 모든 감각 경험의 필수적 첫 단계이다.",
    "definition_en": "The process by which sensory receptors convert one form of energy (light, sound, chemical, etc.) into neural signals (electrical impulses). It is the essential first step for all sensory experience.",
    "significance": "다양한 물리적 에너지가 어떻게 공통의 신경 언어(전기 신호)로 번역되는지를 설명하며, 감각 체계의 가장 근본적인 기능이다.",
    "key_researchers": [
      {
        "name_ko": "조지 월드",
        "name_en": "George Wald",
        "contribution": "망막에서의 광화학적 변환 과정(로돕신의 역할)을 밝혀 노벨상 수상(1967)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용기",
        "name_en": "Sensory Receptors",
        "id": "SENSORY_REC_016"
      },
      {
        "name_ko": "감각",
        "name_en": "Sensation",
        "id": "SENSORY_SENS_001"
      },
      {
        "name_ko": "상향처리",
        "name_en": "Bottom-Up Processing",
        "id": "SENSORY_BUP_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변환 = 에너지 '번역' — 빛(전자기파)이 눈에서 전기 신호로 '번역'되는 것",
      "differential": "변환은 에너지 형태의 전환이고, 부호화(encoding)는 신경 신호에 자극 정보를 담는 것",
      "key_point": "변환이 일어나는 구체적 위치: 눈 = 망막, 귀 = 코르티 기관, 코 = 후각 상피",
      "common_mistake": "변환을 신호의 '전달'과 혼동하는 것 — 변환은 에너지 형태의 전환, 전달은 신경을 통한 정보 이동"
    }
  },
  {
    "id": "SENSORY_AC_018",
    "terminology": "연합피질 (Association Cortex)",
    "terminology_ko": "연합피질",
    "terminology_en": "Association Cortex",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "일차 감각피질에서 처리된 정보를 통합하고 고차원적 해석을 수행하는 대뇌피질 영역. 여러 감각 양식의 정보를 결합하고 기억, 주의 등과 연계하여 의미 있는 지각을 구성한다.",
    "definition_en": "Cortical areas that integrate information processed by primary sensory cortices and perform higher-order interpretation. They combine information from multiple sensory modalities with memory, attention, and other cognitive processes to construct meaningful perception.",
    "significance": "단순한 감각 특성(색, 모양)이 어떻게 '물체', '장면', '사건'이라는 통합된 지각으로 구성되는지를 설명하는 신경 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "모르투지 메숈람",
        "name_en": "M. Marsel Mesulam",
        "contribution": "연합피질의 네트워크 조직과 주의 기능에서의 역할을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      },
      {
        "name_ko": "상향처리",
        "name_en": "Bottom-Up Processing",
        "id": "SENSORY_BUP_008"
      },
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      }
    ],
    "sub_types": [
      {
        "name": "두정 연합피질 (Parietal Association Cortex)",
        "description": "공간 지각과 주의를 담당 (배측 경로, 'where' pathway)"
      },
      {
        "name": "측두 연합피질 (Temporal Association Cortex)",
        "description": "대상 인식을 담당 (복측 경로, 'what' pathway)"
      },
      {
        "name": "전두 연합피질 (Frontal Association Cortex)",
        "description": "계획, 의사결정 등 실행 기능 담당"
      }
    ],
    "quiz_hints": {
      "mnemonic": "연합피질 = 감각의 '편집실' — 개별 감각 조각을 의미 있는 '영화'로 편집",
      "differential": "일차 감각피질은 특정 감각의 기본 특성 처리, 연합피질은 감각 간 통합과 고차 해석 담당",
      "key_point": "연합피질 손상 → 감각은 정상이지만 인식/해석에 문제 발생 (실인증 등)",
      "common_mistake": "연합피질이 하나의 영역이라고 생각하는 것 — 실제로는 뇌 전반에 분산된 여러 영역"
    }
  },
  {
    "id": "SENSORY_PROX_019",
    "terminology": "근접성 (Proximity)",
    "terminology_ko": "근접성",
    "terminology_en": "Proximity",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "서로 가까이 위치한 요소들을 하나의 집단으로 묶어서 지각하는 게슈탈트 조직화 원리. 공간적으로 인접한 자극들이 함께 속하는 것으로 인식된다.",
    "definition_en": "The Gestalt grouping principle stating that elements close to each other tend to be perceived as belonging together. Spatially adjacent stimuli are grouped as a unified whole.",
    "significance": "가장 강력하고 기본적인 게슈탈트 원리 중 하나로, 시각 디자인과 인터페이스 설계에서 정보를 효과적으로 구조화하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "근접성을 포함한 게슈탈트 조직화 법칙을 최초로 체계적으로 기술(1923)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "유사성",
        "name_en": "Similarity",
        "id": "SENSORY_SIM_020"
      },
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "SENSORY_FG_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "● ●  ● ●  ● ● → 간격에 따라 세 쌍으로 묶여 보인다 = 근접성",
      "differential": "근접성은 '거리'에 의한 집단화, 유사성은 '특성(색, 모양 등)'에 의한 집단화",
      "key_point": "근접성과 유사성이 충돌하면 일반적으로 근접성이 우세한 경우가 많다",
      "common_mistake": "근접성이 시각에만 적용된다고 생각하는 것 — 청각에서도 시간적으로 가까운 음이 묶여 들린다"
    }
  },
  {
    "id": "SENSORY_SIM_020",
    "terminology": "유사성 (Similarity)",
    "terminology_ko": "유사성",
    "terminology_en": "Similarity",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "색, 크기, 형태, 방향 등의 특성이 유사한 요소들을 같은 집단으로 묶어 지각하는 게슈탈트 조직화 원리.",
    "definition_en": "The Gestalt grouping principle stating that elements sharing similar features (color, size, shape, orientation) tend to be perceived as belonging together.",
    "significance": "시각적 정보를 빠르고 효율적으로 범주화하는 기제로, 데이터 시각화와 UI 디자인에서 핵심적으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "유사성을 포함한 게슈탈트 조직화 법칙을 체계적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "근접성",
        "name_en": "Proximity",
        "id": "SENSORY_PROX_019"
      },
      {
        "name_ko": "연속성",
        "name_en": "Continuity",
        "id": "SENSORY_CONT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "●○●○●○ → 검은 점과 흰 점이 각각 묶여 보인다 = 유사성",
      "differential": "유사성은 '특성의 닮음'에 의한 집단화, 근접성은 '공간적 거리'에 의한 집단화",
      "key_point": "유사성은 색, 크기, 형태, 방향, 운동 방향 등 다양한 차원에서 작동한다",
      "common_mistake": "유사성이 형태에만 적용된다고 생각하는 것 — 색, 크기, 운동 방향 등 모든 시각적 특성에 적용"
    }
  },
  {
    "id": "SENSORY_CLOS_021",
    "terminology": "폐쇄성 (Closure)",
    "terminology_ko": "폐쇄성",
    "terminology_en": "Closure",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "불완전하거나 끊어진 자극을 완성된 전체로 채워서 지각하는 게슈탈트 조직화 원리. 빠진 부분을 자동으로 보충하여 의미 있는 형태를 구성한다.",
    "definition_en": "The Gestalt grouping principle stating that the perceptual system tends to fill in gaps and perceive incomplete figures as complete, whole forms.",
    "significance": "지각이 수동적 수용이 아닌 능동적 구성 과정임을 잘 보여주며, 불완전한 정보로부터 의미를 추출하는 지각 체계의 효율성을 드러낸다.",
    "key_researchers": [
      {
        "name_ko": "쿠르트 코프카",
        "name_en": "Kurt Koffka",
        "contribution": "폐쇄성을 포함한 게슈탈트 조직화 원리를 이론적으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "SENSORY_FG_023"
      },
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불완전한 원(∘)을 보면 '완전한 원'으로 지각한다 = 폐쇄성이 빈틈을 채움",
      "differential": "폐쇄성은 '빈 부분을 채우는' 것, 연속성은 '끊어진 선을 이어서 보는' 것",
      "key_point": "WWF 팬더 로고처럼 끊어진 형태를 완전한 이미지로 인식하는 것이 대표적 예",
      "common_mistake": "폐쇄성을 단순한 '추측'으로 보는 것 — 실제로는 자동적이고 즉각적인 지각 과정"
    }
  },
  {
    "id": "SENSORY_CONT_022",
    "terminology": "연속성 (Continuity)",
    "terminology_ko": "연속성",
    "terminology_en": "Continuity",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "매끄럽게 연속되는 패턴이나 방향을 따라 요소들을 하나의 집단으로 묶어 지각하는 게슈탈트 조직화 원리. 갑작스러운 방향 전환보다 부드러운 연속을 선호한다.",
    "definition_en": "The Gestalt grouping principle stating that elements arranged in a smooth, continuous pattern or direction tend to be perceived as belonging together, favoring smooth continuation over abrupt changes.",
    "significance": "선, 윤곽, 경로 등의 지각에서 핵심적 역할을 하며, 부분적으로 가려진 물체의 연속성을 유지하는 데 기여한다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "좋은 연속(good continuation) 원리를 게슈탈트 조직화 법칙으로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "폐쇄성",
        "name_en": "Closure",
        "id": "SENSORY_CLOS_021"
      },
      {
        "name_ko": "근접성",
        "name_en": "Proximity",
        "id": "SENSORY_PROX_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "두 선이 X로 교차할 때, 'X'가 아닌 '/ \\'로 본다 = 부드러운 연속을 선호",
      "differential": "연속성은 '방향의 부드러운 이어짐', 폐쇄성은 '빈 부분의 채움'",
      "key_point": "교차하는 선들을 각각 독립적인 연속 선으로 지각하는 것이 핵심 예시",
      "common_mistake": "연속성과 폐쇄성을 같은 원리로 혼동하는 것 — 연속성은 방향, 폐쇄성은 완성에 관한 것"
    }
  },
  {
    "id": "SENSORY_FG_023",
    "terminology": "전경과 배경 (Figure and Ground)",
    "terminology_ko": "전경과 배경",
    "terminology_en": "Figure and Ground",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "시각 장면을 초점이 되는 형상(전경, figure)과 그 뒤의 배경(ground)으로 분리하여 지각하는 조직화 원리. 가역적 도형에서는 전경과 배경이 교대로 지각될 수 있다.",
    "definition_en": "The perceptual organization of the visual field into a dominant figure (object of focus) against a less distinct background (ground). In reversible figures, figure and ground can alternate.",
    "significance": "지각적 조직화의 가장 기본적 단계로, 대상 인식의 전제 조건이다. 루빈의 꽃병과 같은 양의적 도형은 이 과정의 능동적 특성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "에드가 루빈",
        "name_en": "Edgar Rubin",
        "contribution": "전경-배경 분리 현상을 체계적으로 연구하고 유명한 루빈의 꽃병(얼굴) 도형을 고안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      },
      {
        "name_ko": "폐쇄성",
        "name_en": "Closure",
        "id": "SENSORY_CLOS_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "루빈의 꽃병: 꽃병으로 보면 검은 부분이 배경, 얼굴로 보면 흰 부분이 배경 → 전경/배경 교대",
      "differential": "전경/배경은 '무엇이 대상이고 무엇이 배경인가'의 분리, 근접성 등은 '대상들이 어떻게 묶이는가'의 문제",
      "key_point": "전경은 형태가 있고, 배경보다 앞에 있으며, 더 작고 의미 있는 것으로 지각되는 경향이 있다",
      "common_mistake": "전경과 배경이 항상 고정되어 있다고 생각하는 것 — 양의적 도형에서는 교대됨"
    }
  },
  {
    "id": "SENSORY_DP_024",
    "terminology": "깊이지각 (Depth Perception)",
    "terminology_ko": "깊이지각",
    "terminology_en": "Depth Perception",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "2차원 망막 이미지로부터 3차원 공간에서 대상까지의 거리와 깊이를 지각하는 능력. 양안단서와 단안단서를 통합적으로 활용하여 이루어진다.",
    "definition_en": "The ability to perceive the distance and three-dimensional structure of objects from two-dimensional retinal images. It is achieved through the integration of binocular and monocular depth cues.",
    "significance": "일상생활에서 물체를 잡고, 장애물을 피하고, 안전하게 이동하는 데 필수적이며, 지각 체계의 놀라운 구성 능력을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "엘리너 깁슨",
        "name_en": "Eleanor Gibson",
        "contribution": "시각절벽 실험으로 깊이 지각의 발달적 기초 연구"
      },
      {
        "name_ko": "찰스 휘트스톤",
        "name_en": "Charles Wheatstone",
        "contribution": "양안부등에 의한 입체 시각의 실험적 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양안단서",
        "name_en": "Binocular Cues",
        "id": "SENSORY_BIN_011"
      },
      {
        "name_ko": "단안단서",
        "name_en": "Monocular Cues",
        "id": "SENSORY_MON_012"
      },
      {
        "name_ko": "시각절벽",
        "name_en": "Visual Cliff",
        "id": "SENSORY_VC_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "2D 망막 → 3D 세계 = 깊이지각이 '차원의 마법'을 수행",
      "differential": "깊이지각은 '거리'에 관한 것, 지각항등성은 '크기/형태의 안정성'에 관한 것",
      "key_point": "양안단서(근거리)와 단안단서(원거리)가 상보적으로 작용한다",
      "common_mistake": "깊이지각이 전적으로 양안 시각에 의존한다고 생각하는 것 — 한 눈으로도 단안단서를 통해 깊이 지각 가능"
    }
  },
  {
    "id": "SENSORY_RD_025",
    "terminology": "양안부등 (Retinal Disparity)",
    "terminology_ko": "양안부등",
    "terminology_en": "Retinal Disparity",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "두 눈이 약 6.5cm 떨어져 있어 각 눈의 망막에 약간 다른 이미지가 맺히는 현상. 이 차이를 뇌가 비교하여 깊이와 입체감을 계산한다.",
    "definition_en": "The slightly different images cast on each eye's retina due to the approximately 6.5 cm separation between the eyes. The brain compares these differences to compute depth and stereoscopic vision.",
    "significance": "입체 시각(stereopsis)의 주요 기제이며, 3D 영화, VR, 입체경 등 기술의 원리적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 휘트스톤",
        "name_en": "Charles Wheatstone",
        "contribution": "입체경을 발명하여 양안부등이 입체 시각의 기초임을 최초로 실험적으로 입증(1838)"
      },
      {
        "name_ko": "벨라 줄레즈",
        "name_en": "Bela Julesz",
        "contribution": "무선점 입체도(random-dot stereogram)를 개발하여 양안부등만으로도 깊이 지각이 가능함을 증명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양안단서",
        "name_en": "Binocular Cues",
        "id": "SENSORY_BIN_011"
      },
      {
        "name_ko": "깊이지각",
        "name_en": "Depth Perception",
        "id": "SENSORY_DP_024"
      },
      {
        "name_ko": "단안단서",
        "name_en": "Monocular Cues",
        "id": "SENSORY_MON_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "왼손 엄지를 세우고 한 눈씩 감으면 위치가 달라 보인다 = 양안부등의 체험",
      "differential": "양안부등은 망막상의 '이미지 차이', 폭주(convergence)는 안구가 안쪽으로 '모이는 정도'",
      "key_point": "대상이 가까울수록 양안부등이 크고, 멀수록 작다 → 약 8m 이상에서는 거의 무효",
      "common_mistake": "양안부등과 폭주를 혼동하는 것 — 양안부등은 망막상 이미지의 차이, 폭주는 안구 근육의 긴장"
    }
  },
  {
    "id": "SENSORY_MP_026",
    "terminology": "운동시차 (Motion Parallax)",
    "terminology_ko": "운동시차",
    "terminology_en": "Motion Parallax",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "관찰자가 움직일 때, 가까운 물체는 빠르게, 먼 물체는 느리게 움직이는 것처럼 보이는 현상. 한 눈으로도 사용할 수 있는 단안 깊이 단서이다.",
    "definition_en": "A monocular depth cue in which objects closer to the observer appear to move faster across the visual field than distant objects when the observer is in motion.",
    "significance": "양안 시각 없이도 효과적인 깊이 지각을 가능하게 하는 역동적 단서로, 운전, 보행 등 일상적 깊이 판단에 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "헬름홀츠",
        "name_en": "Hermann von Helmholtz",
        "contribution": "운동시차를 깊이 지각의 주요 단서로 체계적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단안단서",
        "name_en": "Monocular Cues",
        "id": "SENSORY_MON_012"
      },
      {
        "name_ko": "깊이지각",
        "name_en": "Depth Perception",
        "id": "SENSORY_DP_024"
      },
      {
        "name_ko": "양안부등",
        "name_en": "Retinal Disparity",
        "id": "SENSORY_RD_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기차 창밖을 보면 가까운 나무는 쌩쌩, 먼 산은 천천히 = 운동시차",
      "differential": "운동시차는 '관찰자의 움직임'에 의한 단서, 양안부등은 '두 눈의 위치 차이'에 의한 단서",
      "key_point": "관찰자가 반드시 움직여야 작동하는 역동적(dynamic) 단서이다",
      "common_mistake": "운동시차를 양안단서로 분류하는 것 — 한 눈으로도 작동하는 단안단서"
    }
  },
  {
    "id": "SENSORY_FL_027",
    "terminology": "피검빈도의 법칙 (Frequency Law / Law of Prägnanz)",
    "terminology_ko": "피검빈도의 법칙",
    "terminology_en": "Law of Prägnanz (Good Figure)",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "지각 체계는 가능한 한 가장 단순하고, 규칙적이며, 안정적인 형태로 자극을 조직화하려는 경향이 있다는 게슈탈트의 기본 법칙. '좋은 형태(good figure)'의 법칙이라고도 한다.",
    "definition_en": "The fundamental Gestalt law stating that the perceptual system tends to organize stimuli into the simplest, most regular, and most stable configuration possible. Also known as the law of good figure or simplicity.",
    "significance": "모든 게슈탈트 조직화 원리의 상위 법칙으로, 근접성, 유사성, 폐쇄성, 연속성 등이 이 법칙의 구체적 표현이다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "프레그난츠 법칙을 게슈탈트 조직화의 핵심 원리로 제안"
      },
      {
        "name_ko": "쿠르트 코프카",
        "name_en": "Kurt Koffka",
        "contribution": "프레그난츠 법칙을 이론적으로 정교화하고 다양한 현상에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "폐쇄성",
        "name_en": "Closure",
        "id": "SENSORY_CLOS_021"
      },
      {
        "name_ko": "연속성",
        "name_en": "Continuity",
        "id": "SENSORY_CONT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Prägnanz = '간결함/좋은 형태' → 뇌는 항상 '가장 깔끔한 해석'을 선호",
      "differential": "프레그난츠 법칙은 모든 게슈탈트 원리의 '상위 법칙', 근접성/유사성 등은 그 '하위 원리'",
      "key_point": "올림픽 오륜기를 5개의 원으로 보는 것이 수십 개의 호(arc)로 보는 것보다 '좋은 형태'",
      "common_mistake": "프레그난츠 법칙을 다른 게슈탈트 원리와 동급으로 놓는 것 — 실제로는 가장 상위의 통합 법칙"
    }
  },
  {
    "id": "SENSORY_ML_028",
    "terminology": "뮐러-라이어 착시 (Müller-Lyer Illusion)",
    "terminology_ko": "뮐러-라이어 착시",
    "terminology_en": "Müller-Lyer Illusion",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "동일한 길이의 두 선분이 화살표 방향에 따라 다른 길이로 지각되는 착시. 바깥쪽 화살표(><)가 달린 선분이 안쪽 화살표(<>)가 달린 선분보다 짧아 보인다.",
    "definition_en": "A visual illusion in which two lines of equal length appear different in length due to the direction of arrowheads (fins) at their ends. Lines with outward-pointing fins (><) appear shorter than lines with inward-pointing fins (<>).",
    "significance": "지각항등성의 부적절한 적용(misapplied constancy scaling) 이론의 대표적 증거이며, 문화 간 차이 연구를 통해 지각에 대한 경험의 영향을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "프란츠 뮐러-라이어",
        "name_en": "Franz Müller-Lyer",
        "contribution": "1889년에 이 착시 현상을 최초로 보고"
      },
      {
        "name_ko": "리처드 그레고리",
        "name_en": "Richard Gregory",
        "contribution": "뮐러-라이어 착시를 부적절한 항등성 조정(잘못된 크기 항등성)으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "착시",
        "name_en": "Illusion",
        "id": "SENSORY_ILL_014"
      },
      {
        "name_ko": "지각항등성",
        "name_en": "Perceptual Constancy",
        "id": "SENSORY_PC_013"
      },
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "><(짧아 보임) vs <>(길어 보임) — 방의 안쪽 모서리(><)와 바깥 모서리(<>)로 연상",
      "differential": "뮐러-라이어 착시는 '길이' 착시, 폰초 착시(Ponzo)는 '크기' 착시",
      "key_point": "세갈족(San) 등 목조건물이 없는 문화권에서는 착시 효과가 약함 → 경험의 영향",
      "common_mistake": "이 착시가 순전히 생리적 현상이라고 생각하는 것 — 문화 간 차이가 있어 경험적 요인이 작용"
    }
  },
  {
    "id": "SENSORY_PHI_029",
    "terminology": "파이 현상 (Phi Phenomenon)",
    "terminology_ko": "파이 현상",
    "terminology_en": "Phi Phenomenon",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "순차적으로 점멸하는 두 개 이상의 정지 자극이 마치 하나의 물체가 움직이는 것처럼 지각되는 가현운동(apparent motion) 현상. 영화와 애니메이션의 원리적 기초이다.",
    "definition_en": "An illusion of apparent motion created when two or more stationary stimuli are presented in rapid succession, perceived as a single object moving from one location to another. It is the perceptual basis for movies and animation.",
    "significance": "게슈탈트 심리학의 출발점이 된 현상으로, 지각이 단순한 감각 요소의 합이 아니라 전체로서의 경험임을 증명하는 핵심 사례이다.",
    "key_researchers": [
      {
        "name_ko": "막스 베르트하이머",
        "name_en": "Max Wertheimer",
        "contribution": "1912년 파이 현상에 대한 실험적 연구를 발표하여 게슈탈트 심리학을 창시하는 계기를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 원리",
        "name_en": "Gestalt Principles",
        "id": "SENSORY_GEST_010"
      },
      {
        "name_ko": "착시",
        "name_en": "Illusion",
        "id": "SENSORY_ILL_014"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      }
    ],
    "sub_types": [
      {
        "name": "베타 운동 (Beta Movement)",
        "description": "두 자극의 교대 제시로 물체가 이동하는 것처럼 보이는 가현운동"
      },
      {
        "name": "순수 파이 현상 (Pure Phi)",
        "description": "물체 이동 없이 운동감 자체만 지각되는 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "네온사인의 화살표 불빛이 '달리는' 것처럼 보이는 것 = 파이 현상",
      "differential": "파이 현상은 '움직이는 것처럼 보이는' 가현운동, 자동운동(autokinetic effect)은 정지 빛점이 '혼자 움직이는 것처럼 보이는' 현상",
      "key_point": "게슈탈트 심리학의 탄생 계기가 된 역사적으로 중요한 현상",
      "common_mistake": "파이 현상과 스트로보스코프 효과를 완전히 동일시하는 것 — 엄밀히는 베르트하이머가 구분"
    }
  },
  {
    "id": "SENSORY_PS_030",
    "terminology": "지각적 세트 (Perceptual Set)",
    "terminology_ko": "지각적 세트",
    "terminology_en": "Perceptual Set",
    "category": "SENSORY",
    "category_name": "감각과 지각 (Sensation & Perception)",
    "definition": "기대, 동기, 정서, 문화적 배경, 맥락 등에 의해 형성된 심리적 준비 상태가 지각을 특정 방향으로 이끄는 경향. 같은 자극도 지각적 세트에 따라 다르게 해석될 수 있다.",
    "definition_en": "A mental predisposition or readiness to perceive stimuli in a particular way, shaped by expectations, motivations, emotions, cultural background, and context. The same stimulus can be interpreted differently depending on one's perceptual set.",
    "significance": "지각이 순수한 감각 데이터만으로 결정되지 않고 관찰자의 심리적 상태에 크게 영향받음을 보여주는 대표적 현상이며, 편향과 고정관념 연구와도 연결된다.",
    "key_researchers": [
      {
        "name_ko": "제롬 브루너",
        "name_en": "Jerome Bruner",
        "contribution": "지각적 세트와 기대가 지각에 미치는 영향을 체계적으로 연구 ('New Look' 운동)"
      },
      {
        "name_ko": "레오 포스트만",
        "name_en": "Leo Postman",
        "contribution": "브루너와 함께 가치와 욕구가 지각에 미치는 영향(perceptual defense, perceptual sensitization)을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "하향처리",
        "name_en": "Top-Down Processing",
        "id": "SENSORY_TDP_009"
      },
      {
        "name_ko": "지각",
        "name_en": "Perception",
        "id": "SENSORY_PERC_002"
      },
      {
        "name_ko": "착시",
        "name_en": "Illusion",
        "id": "SENSORY_ILL_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'B'와 '13'의 중간에 있는 모호한 기호 — 문자 맥락에서는 B, 숫자 맥락에서는 13으로 읽힘",
      "differential": "지각적 세트는 '지각 이전의 심리적 준비', 착시는 '지각 과정의 결과적 오류'",
      "key_point": "스키마(schema), 기대, 동기, 정서, 문화가 지각적 세트를 형성하는 주요 요인",
      "common_mistake": "지각적 세트가 항상 왜곡을 초래한다고 생각하는 것 — 대부분의 경우 효율적 지각을 돕는다"
    }
  }
];

TERMS_DATA.LEARN = [
  {
    "id": "LEARN_CC_001",
    "terminology": "고전적 조건형성 (Classical Conditioning)",
    "terminology_ko": "고전적 조건형성",
    "terminology_en": "Classical Conditioning",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "중성 자극이 무조건 자극과 반복적으로 짝지어 제시됨으로써, 중성 자극만으로도 무조건 자극에 의해 유발되던 반응과 유사한 반응을 일으키게 되는 학습 과정이다. Pavlov의 개 실험에서 종소리(중성 자극)가 먹이(무조건 자극)와 반복 짝지어져 종소리만으로 타액 분비가 일어난 것이 대표적 사례이다.",
    "definition_en": "A type of learning in which a neutral stimulus comes to elicit a response after being repeatedly paired with an unconditioned stimulus that naturally produces that response. Pavlov's classic experiment demonstrated this when a bell (neutral stimulus) paired with food (unconditioned stimulus) eventually elicited salivation on its own.",
    "significance": "행동주의 심리학의 기초를 형성하며, 공포증, 광고, 약물 내성 등 다양한 현상을 설명하는 핵심 학습 원리이다. 행동치료의 이론적 토대를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "개의 타액 분비 실험을 통해 고전적 조건형성의 기본 원리를 발견하였다"
      },
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "Little Albert 실험을 통해 인간의 정서 반응도 고전적 조건형성으로 학습됨을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건 자극",
        "name_en": "Unconditioned Stimulus",
        "id": "LEARN_US_002"
      },
      {
        "name_ko": "무조건 반응",
        "name_en": "Unconditioned Response",
        "id": "LEARN_UR_003"
      },
      {
        "name_ko": "조건 자극",
        "name_en": "Conditioned Stimulus",
        "id": "LEARN_CS_004"
      },
      {
        "name_ko": "조건 반응",
        "name_en": "Conditioned Response",
        "id": "LEARN_CR_005"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Pavlov의 개: 종소리(CS) + 먹이(US) -> 종소리만으로 침(CR)",
      "differential": "조작적 조건형성은 행동의 결과(강화/처벌)에 의한 학습이고, 고전적 조건형성은 자극 간 연합에 의한 자동적 반응 학습이다",
      "key_point": "유기체의 자발적 행동이 아닌 자동적/반사적 반응이 학습되는 과정이다",
      "common_mistake": "고전적 조건형성과 조작적 조건형성을 혼동하는 경우가 많다. 고전적 조건형성은 자극-자극 연합이고 조작적 조건형성은 행동-결과 연합이다"
    }
  },
  {
    "id": "LEARN_US_002",
    "terminology": "무조건 자극 (Unconditioned Stimulus, US)",
    "terminology_ko": "무조건 자극",
    "terminology_en": "Unconditioned Stimulus (US)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "사전 학습 없이도 자연적으로, 자동적으로 반응을 유발하는 자극이다. 예를 들어, 먹이는 별도의 학습 없이도 타액 분비를 유발하는 무조건 자극이다.",
    "definition_en": "A stimulus that naturally and automatically triggers a response without any prior learning. For example, food naturally triggers salivation without any conditioning.",
    "significance": "고전적 조건형성의 출발점으로, 생물학적으로 의미 있는 자극이 학습의 기반이 됨을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "고전적 조건형성 실험에서 무조건 자극의 개념을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건 반응",
        "name_en": "Unconditioned Response",
        "id": "LEARN_UR_003"
      },
      {
        "name_ko": "조건 자극",
        "name_en": "Conditioned Stimulus",
        "id": "LEARN_CS_004"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "US = Unlearned Stimulus, 배우지 않아도(Un-) 반응을 일으키는 자극",
      "differential": "조건 자극(CS)은 학습을 통해 반응을 유발하게 된 자극이고, 무조건 자극(US)은 학습 없이 자연적으로 반응을 유발한다",
      "key_point": "무조건 자극은 생물학적으로 의미 있는 자극으로, 학습 이전에 이미 반응을 유발하는 능력이 있다",
      "common_mistake": "조건형성 이후에도 US는 여전히 US이다. US가 CS로 바뀌는 것이 아니다"
    }
  },
  {
    "id": "LEARN_UR_003",
    "terminology": "무조건 반응 (Unconditioned Response, UR)",
    "terminology_ko": "무조건 반응",
    "terminology_en": "Unconditioned Response (UR)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "무조건 자극에 의해 자연적으로, 자동적으로 유발되는 학습되지 않은 반응이다. 예를 들어, 먹이에 대한 타액 분비는 학습 없이 자연적으로 일어나는 무조건 반응이다.",
    "definition_en": "An unlearned, naturally occurring response to an unconditioned stimulus. For example, salivation in response to food is a natural, unlearned reaction.",
    "significance": "고전적 조건형성에서 학습의 기준선(baseline)이 되는 반응으로, 조건 반응(CR)과 비교하여 학습의 발생 여부를 판단하는 기준이 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "조건형성 실험에서 무조건 반응과 조건 반응을 구분하는 개념 체계를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건 자극",
        "name_en": "Unconditioned Stimulus",
        "id": "LEARN_US_002"
      },
      {
        "name_ko": "조건 반응",
        "name_en": "Conditioned Response",
        "id": "LEARN_CR_005"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "UR = Unlearned Response, 배우지 않아도(Un-) 나타나는 반응",
      "differential": "UR은 US에 의해 자동적으로 유발되고, CR은 CS에 의해 학습을 통해 유발된다. UR과 CR은 유사하지만 동일하지 않을 수 있다",
      "key_point": "UR과 CR은 형태가 유사하지만, CR은 보통 UR보다 약한 강도로 나타난다",
      "common_mistake": "UR과 CR이 항상 동일한 반응이라고 오해하기 쉽지만, CR은 UR보다 약하거나 형태가 다소 다를 수 있다"
    }
  },
  {
    "id": "LEARN_CS_004",
    "terminology": "조건 자극 (Conditioned Stimulus, CS)",
    "terminology_ko": "조건 자극",
    "terminology_en": "Conditioned Stimulus (CS)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "원래 중성 자극이었으나 무조건 자극과 반복적으로 짝지어진 후, 그 자체만으로 조건 반응을 유발하게 된 자극이다. Pavlov 실험에서 종소리가 대표적인 조건 자극이다.",
    "definition_en": "An originally neutral stimulus that, after repeated pairing with an unconditioned stimulus, comes to trigger a conditioned response. In Pavlov's experiment, the bell served as the conditioned stimulus.",
    "significance": "환경의 중성 자극이 학습을 통해 행동에 영향을 미칠 수 있음을 보여주며, 공포증, 광고 효과, 약물 갈망 등 다양한 현상의 설명에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "조건 자극의 개념을 정립하고 조건형성 과정을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건 자극",
        "name_en": "Unconditioned Stimulus",
        "id": "LEARN_US_002"
      },
      {
        "name_ko": "조건 반응",
        "name_en": "Conditioned Response",
        "id": "LEARN_CR_005"
      },
      {
        "name_ko": "자극일반화",
        "name_en": "Stimulus Generalization",
        "id": "LEARN_SG_008"
      },
      {
        "name_ko": "자극변별",
        "name_en": "Stimulus Discrimination",
        "id": "LEARN_SD_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CS = Conditioned(조건화된) Stimulus, 학습을 통해 반응을 유발하게 '된' 자극",
      "differential": "US는 선천적으로 반응을 유발하지만, CS는 US와의 연합을 통해 후천적으로 반응을 유발하게 된다",
      "key_point": "조건형성 전에는 중성 자극(NS)이었다가, US와의 반복적 짝짓기를 통해 CS가 된다",
      "common_mistake": "CS는 US와 짝지어지기 전에는 반응을 유발하지 않는 중성 자극이다. 처음부터 CS인 것이 아니다"
    }
  },
  {
    "id": "LEARN_CR_005",
    "terminology": "조건 반응 (Conditioned Response, CR)",
    "terminology_ko": "조건 반응",
    "terminology_en": "Conditioned Response (CR)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "조건 자극에 의해 유발되는 학습된 반응이다. 고전적 조건형성의 결과로 나타나며, 무조건 반응과 유사하지만 보통 그보다 약한 강도로 나타난다.",
    "definition_en": "A learned response to a previously neutral stimulus (now a conditioned stimulus). It is the result of classical conditioning and is typically similar to, but often weaker than, the unconditioned response.",
    "significance": "학습이 실제로 일어났음을 확인하는 지표 반응이며, 적응적 행동뿐 아니라 공포증, 중독 등 부적응적 반응의 형성도 설명한다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "조건 반응의 형성, 소거, 자발적 회복 등의 과정을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조건 자극",
        "name_en": "Conditioned Stimulus",
        "id": "LEARN_CS_004"
      },
      {
        "name_ko": "무조건 반응",
        "name_en": "Unconditioned Response",
        "id": "LEARN_UR_003"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "LEARN_EXT_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CR = Conditioned(조건화된) Response, 학습을 통해 나타나게 '된' 반응",
      "differential": "CR은 CS에 의해 유발되는 학습된 반응이고, UR은 US에 의해 자연적으로 유발되는 비학습 반응이다",
      "key_point": "CR의 출현이 곧 조건형성(학습)이 일어났음을 의미한다",
      "common_mistake": "CR과 UR은 종종 동일한 행동(예: 타액 분비)이지만, CR은 학습에 의해 유발된 것이고 UR은 자연적으로 유발된 것이다"
    }
  },
  {
    "id": "LEARN_EXT_006",
    "terminology": "소거 (Extinction)",
    "terminology_ko": "소거",
    "terminology_en": "Extinction",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "고전적 조건형성에서 조건 자극을 무조건 자극 없이 반복적으로 제시할 때 조건 반응이 점차 약화되어 사라지는 현상이다. 조작적 조건형성에서는 강화가 더 이상 주어지지 않을 때 행동 빈도가 감소하는 것을 의미한다.",
    "definition_en": "In classical conditioning, the diminishing of a conditioned response when the conditioned stimulus is repeatedly presented without the unconditioned stimulus. In operant conditioning, it refers to the decrease in behavior when reinforcement is no longer provided.",
    "significance": "학습된 반응이 영구적이지 않으며 환경 변화에 따라 수정될 수 있음을 보여준다. 행동치료에서 불안, 공포증 치료(체계적 둔감법, 노출치료)의 이론적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "고전적 조건형성에서 소거 현상을 최초로 체계적으로 기술하였다"
      },
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "조작적 조건형성에서의 소거 과정을 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자발적 회복",
        "name_en": "Spontaneous Recovery",
        "id": "LEARN_SR_007"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소거 = 소(消, 사라질 소) + 거(去, 갈 거): 반응이 사라져 감",
      "differential": "소거는 반응이 '삭제'되는 것이 아니라 '억제'되는 것이다. 자발적 회복이 이를 증명한다",
      "key_point": "소거 시 일시적으로 반응이 증가하는 '소거 폭발(extinction burst)'이 나타날 수 있다",
      "common_mistake": "소거가 학습의 완전한 제거를 의미한다고 오해하기 쉽지만, 자발적 회복 현상은 원래 학습이 완전히 사라지지 않았음을 보여준다"
    }
  },
  {
    "id": "LEARN_SR_007",
    "terminology": "자발적 회복 (Spontaneous Recovery)",
    "terminology_ko": "자발적 회복",
    "terminology_en": "Spontaneous Recovery",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "소거 절차 이후 일정 시간이 경과한 뒤, 조건 자극을 다시 제시했을 때 소거되었던 조건 반응이 다시 나타나는 현상이다. 이는 소거가 학습의 완전한 제거가 아님을 시사한다.",
    "definition_en": "The reappearance of an extinguished conditioned response after a rest period following extinction. This phenomenon suggests that extinction does not completely erase the original learning.",
    "significance": "학습된 연합이 소거 후에도 완전히 사라지지 않고 잠재적으로 유지됨을 보여주며, 중독 재발이나 공포증 재발을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "소거된 조건 반응이 시간 경과 후 자발적으로 회복됨을 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "LEARN_EXT_006"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자발적 회복 = 추가 훈련 없이 '자발적으로' 반응이 '회복'됨",
      "differential": "자발적 회복은 소거 후 시간 경과만으로 나타나는 반면, 재조건형성(reconditioning)은 CS-US를 다시 짝지어야 한다",
      "key_point": "자발적 회복된 반응은 보통 원래 조건 반응보다 약하며, 반복 소거-회복 주기를 거치면 점차 약해진다",
      "common_mistake": "자발적 회복이 원래 강도의 CR을 되살린다고 오해하기 쉬우나, 회복된 CR은 보통 원래보다 약하다"
    }
  },
  {
    "id": "LEARN_SG_008",
    "terminology": "자극일반화 (Stimulus Generalization)",
    "terminology_ko": "자극일반화",
    "terminology_en": "Stimulus Generalization",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "조건 자극과 유사한 자극에 대해서도 조건 반응이 나타나는 현상이다. 자극이 원래 CS와 유사할수록 더 강한 반응이 나타나며, 이를 일반화 기울기(generalization gradient)라 한다.",
    "definition_en": "The tendency to respond to stimuli similar to the conditioned stimulus. The more similar the stimulus is to the original CS, the stronger the response, forming a generalization gradient.",
    "significance": "새로운 상황에 대한 적응적 반응을 가능하게 하며, 공포증의 확산을 설명한다. Watson의 Little Albert 실험에서 흰 쥐에 대한 공포가 토끼, 털코트 등으로 일반화된 것이 대표적이다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "자극일반화 현상을 체계적으로 기술하였다"
      },
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "Little Albert 실험에서 공포의 자극일반화를 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자극변별",
        "name_en": "Stimulus Discrimination",
        "id": "LEARN_SD_009"
      },
      {
        "name_ko": "조건 자극",
        "name_en": "Conditioned Stimulus",
        "id": "LEARN_CS_004"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일반화 = CS와 '비슷한' 자극에도 반응이 '일반적으로' 나타남",
      "differential": "자극일반화는 유사 자극에도 반응하는 것이고, 자극변별은 유사 자극들을 구분하여 특정 자극에만 반응하는 것이다",
      "key_point": "일반화 기울기(generalization gradient): 원래 CS와 유사할수록 강한 CR이 나타난다",
      "common_mistake": "자극일반화는 항상 부적응적인 것이 아니라, 생존에 필요한 적응적 기능도 한다 (뱀과 유사한 모든 것을 피하는 것)"
    }
  },
  {
    "id": "LEARN_SD_009",
    "terminology": "자극변별 (Stimulus Discrimination)",
    "terminology_ko": "자극변별",
    "terminology_en": "Stimulus Discrimination",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "조건 자극과 유사하지만 다른 자극을 구분하여, 조건 자극에만 반응하고 유사한 다른 자극에는 반응하지 않는 학습된 능력이다. 자극일반화의 반대 과정이다.",
    "definition_en": "The learned ability to distinguish between the conditioned stimulus and other similar stimuli, responding only to the CS and not to similar stimuli. It is the opposite process of stimulus generalization.",
    "significance": "환경 자극을 정확히 변별하는 능력은 적응적 행동에 필수적이다. 과도한 일반화를 제한하여 적절한 상황에서만 반응하도록 한다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "변별 훈련 절차를 개발하고 자극변별의 원리를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자극일반화",
        "name_en": "Stimulus Generalization",
        "id": "LEARN_SG_008"
      },
      {
        "name_ko": "조건 자극",
        "name_en": "Conditioned Stimulus",
        "id": "LEARN_CS_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변별 = '변(다를 변)'별(구별할 별): 다른 것을 구별함",
      "differential": "자극일반화는 유사 자극에 같은 반응을 보이는 것이고, 자극변별은 유사 자극들 간의 차이를 구분하는 것이다",
      "key_point": "변별 훈련: CS에는 US를 짝짓고, 유사 자극에는 US를 짝짓지 않으면 변별이 형성된다",
      "common_mistake": "자극변별은 자극일반화의 '실패'가 아니라 별도의 학습 과정이다"
    }
  },
  {
    "id": "LEARN_OC_010",
    "terminology": "조작적 조건형성 (Operant Conditioning)",
    "terminology_ko": "조작적 조건형성",
    "terminology_en": "Operant Conditioning",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "행동의 결과(강화 또는 처벌)에 의해 그 행동의 발생 빈도가 변화하는 학습 유형이다. 유기체가 환경을 능동적으로 '조작'하고 그 결과로부터 학습하는 과정으로, Skinner가 체계화하였다.",
    "definition_en": "A type of learning in which behavior is strengthened or weakened by its consequences (reinforcement or punishment). The organism actively 'operates' on the environment and learns from the consequences, as systematized by Skinner.",
    "significance": "교육, 양육, 동물 훈련, 행동치료, 조직관리 등 거의 모든 행동 변화 영역에서 적용되는 핵심 학습 원리이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "스키너 상자(Skinner box)를 개발하고 조작적 조건형성의 원리를 체계적으로 연구하였다"
      },
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "효과의 법칙을 통해 조작적 조건형성의 이론적 토대를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "LEARN_PUN_014"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      },
      {
        "name_ko": "효과의 법칙",
        "name_en": "Law of Effect",
        "id": "LEARN_LOE_019"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조작적 = 유기체가 환경을 '조작(operate)'하여 학습. Skinner의 쥐가 지렛대를 '조작'함",
      "differential": "고전적 조건형성은 자극-자극 연합(S-S)이고, 조작적 조건형성은 반응-결과 연합(R-S)이다",
      "key_point": "행동의 결과가 미래 행동을 결정한다: 강화는 행동을 증가시키고, 처벌은 행동을 감소시킨다",
      "common_mistake": "조작적 조건형성에서 '부적 강화'를 '처벌'로 혼동하는 경우가 매우 흔하다"
    }
  },
  {
    "id": "LEARN_REINF_011",
    "terminology": "강화 (Reinforcement)",
    "terminology_ko": "강화",
    "terminology_en": "Reinforcement",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "행동 뒤에 따르는 결과가 그 행동의 발생 빈도를 증가시키는 과정이다. 쾌적한 자극의 제시(정적 강화) 또는 불쾌한 자극의 제거(부적 강화)를 통해 이루어진다.",
    "definition_en": "Any event that follows a behavior and increases the likelihood that the behavior will be repeated. It can occur through the presentation of a pleasant stimulus (positive reinforcement) or the removal of an unpleasant stimulus (negative reinforcement).",
    "significance": "행동의 형성과 유지에 가장 핵심적인 원리로, 교육, 치료, 양육, 조직관리 등 모든 행동 변화 전략의 기초이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "강화의 원리를 체계적으로 연구하고 다양한 강화계획의 효과를 밝혔다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정적 강화",
        "name_en": "Positive Reinforcement",
        "id": "LEARN_PR_012"
      },
      {
        "name_ko": "부적 강화",
        "name_en": "Negative Reinforcement",
        "id": "LEARN_NR_013"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "LEARN_PUN_014"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      }
    ],
    "sub_types": [
      {
        "name_ko": "일차 강화물",
        "name_en": "Primary Reinforcer",
        "definition": "생물학적 욕구를 충족시키는 선천적 강화물 (음식, 물, 안전 등)"
      },
      {
        "name_ko": "이차 강화물",
        "name_en": "Secondary (Conditioned) Reinforcer",
        "definition": "일차 강화물과의 연합을 통해 강화력을 획득한 학습된 강화물 (돈, 칭찬, 성적 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "강화(强化) = 행동을 '강'하게 '화'(만든다). 행동을 증가시키면 무조건 강화이다",
      "differential": "강화는 행동을 '증가'시키고, 처벌은 행동을 '감소'시킨다. 정적/부적은 자극의 제시/제거를 의미한다",
      "key_point": "강화의 핵심 정의는 '행동의 빈도를 증가시키는 것'이다. 정적이든 부적이든 행동이 증가하면 강화이다",
      "common_mistake": "부적 강화를 처벌로 혼동하는 것이 가장 흔한 오류이다. 부적 강화도 행동을 '증가'시킨다"
    }
  },
  {
    "id": "LEARN_PR_012",
    "terminology": "정적 강화 (Positive Reinforcement)",
    "terminology_ko": "정적 강화",
    "terminology_en": "Positive Reinforcement",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "행동 뒤에 쾌적한 자극(강화물)을 제시함으로써 그 행동의 발생 빈도를 증가시키는 과정이다. 예를 들어, 아이가 공부를 하면 칭찬(쾌적 자극)을 주어 공부 행동을 증가시키는 것이다.",
    "definition_en": "Increasing the frequency of a behavior by presenting a desirable stimulus after the behavior occurs. For example, praising a child for studying increases the likelihood of future studying.",
    "significance": "가장 효과적이고 윤리적인 행동 변화 방법으로, 교육과 치료 현장에서 가장 많이 권장되는 강화 유형이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "정적 강화의 효과를 실험적으로 입증하고 그 원리를 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부적 강화",
        "name_en": "Negative Reinforcement",
        "id": "LEARN_NR_013"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "LEARN_PUN_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정적(+) 강화 = 좋은 것을 '+더해서(positive)' 행동을 '강화'함",
      "differential": "정적 강화는 좋은 자극을 '제시'하여 행동을 증가시키고, 부적 강화는 나쁜 자극을 '제거'하여 행동을 증가시킨다",
      "key_point": "'정적(positive)'은 '좋다'는 의미가 아니라 자극을 '제시(+)'한다는 의미이다",
      "common_mistake": "'정적'을 '긍정적'으로 해석하면 안 된다. 정적은 자극의 '제시(addition)'를 의미한다"
    }
  },
  {
    "id": "LEARN_NR_013",
    "terminology": "부적 강화 (Negative Reinforcement)",
    "terminology_ko": "부적 강화",
    "terminology_en": "Negative Reinforcement",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "행동 뒤에 불쾌한 자극(혐오 자극)을 제거함으로써 그 행동의 발생 빈도를 증가시키는 과정이다. 예를 들어, 두통약을 먹으면 두통(불쾌 자극)이 사라지므로 두통약을 먹는 행동이 증가한다.",
    "definition_en": "Increasing the frequency of a behavior by removing an aversive stimulus after the behavior occurs. For example, taking aspirin removes a headache, increasing the likelihood of taking aspirin in the future.",
    "significance": "회피 행동, 도피 행동의 형성과 유지를 설명하는 핵심 원리이며, 불안장애의 유지 기제를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "부적 강화의 원리를 실험적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정적 강화",
        "name_en": "Positive Reinforcement",
        "id": "LEARN_PR_012"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "LEARN_PUN_014"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "도피 학습",
        "name_en": "Escape Learning",
        "definition": "이미 존재하는 혐오 자극을 제거하기 위한 행동을 학습하는 것"
      },
      {
        "name_ko": "회피 학습",
        "name_en": "Avoidance Learning",
        "definition": "혐오 자극이 나타나기 전에 미리 행동하여 그것을 피하는 것을 학습하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "부적(-) 강화 = 나쁜 것을 '-빼서(negative)' 행동을 '강화'함. 결과: 행동 증가!",
      "differential": "부적 강화는 불쾌한 자극을 '제거'하여 행동을 '증가'시키고, 처벌은 불쾌한 자극을 '제시'하여 행동을 '감소'시킨다",
      "key_point": "부적 강화도 '강화'이므로 행동을 증가시킨다. '부적'은 자극의 '제거(-)'를 의미한다",
      "common_mistake": "부적 강화를 처벌과 동일시하는 것이 심리학 입문에서 가장 빈번한 오류이다. 부적 강화는 행동을 '증가'시키고, 처벌은 행동을 '감소'시킨다"
    }
  },
  {
    "id": "LEARN_PUN_014",
    "terminology": "처벌 (Punishment)",
    "terminology_ko": "처벌",
    "terminology_en": "Punishment",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "행동 뒤에 따르는 결과가 그 행동의 발생 빈도를 감소시키는 과정이다. 불쾌한 자극의 제시(정적 처벌) 또는 쾌적한 자극의 제거(부적 처벌)를 통해 이루어진다.",
    "definition_en": "Any consequence that follows a behavior and decreases the likelihood of that behavior being repeated. It can involve presenting an aversive stimulus (positive punishment) or removing a pleasant stimulus (negative punishment).",
    "significance": "행동을 억제하는 기제를 설명하지만, 부작용(공격성, 회피, 공포, 모방)으로 인해 강화보다 제한적으로 사용이 권장된다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "처벌의 효과와 한계를 실험적으로 연구하고, 강화가 처벌보다 효과적임을 주장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      },
      {
        "name_ko": "정적 강화",
        "name_en": "Positive Reinforcement",
        "id": "LEARN_PR_012"
      },
      {
        "name_ko": "부적 강화",
        "name_en": "Negative Reinforcement",
        "id": "LEARN_NR_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정적 처벌",
        "name_en": "Positive Punishment",
        "definition": "불쾌한 자극을 제시하여 행동을 감소시키는 것 (예: 체벌, 벌금)"
      },
      {
        "name_ko": "부적 처벌",
        "name_en": "Negative Punishment",
        "definition": "쾌적한 자극을 제거하여 행동을 감소시키는 것 (예: 외출 금지, 용돈 삭감)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "처벌 = 행동을 '줄이는' 결과. 강화와 반대 방향",
      "differential": "강화(행동 증가) vs 처벌(행동 감소). 정적(자극 제시) vs 부적(자극 제거)",
      "key_point": "2x2 매트릭스: 정적 강화(+자극, 행동↑), 부적 강화(-자극, 행동↑), 정적 처벌(+자극, 행동↓), 부적 처벌(-자극, 행동↓)",
      "common_mistake": "정적 처벌과 부적 강화를 혼동하기 쉽다. 둘 다 혐오 자극과 관련되지만, 정적 처벌은 혐오 자극을 '제시'하고 부적 강화는 혐오 자극을 '제거'한다"
    }
  },
  {
    "id": "LEARN_RS_015",
    "terminology": "강화계획 (Reinforcement Schedule)",
    "terminology_ko": "강화계획",
    "terminology_en": "Reinforcement Schedule",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "강화가 어떤 규칙에 따라 제공되는지를 정의하는 패턴이다. 매 반응마다 강화하는 연속 강화와, 일부 반응에만 강화하는 부분 강화(간헐 강화)로 크게 나뉘며, 부분 강화는 비율/간격, 고정/변동의 조합으로 4가지 유형이 있다.",
    "definition_en": "A pattern that defines how and when reinforcement is delivered. It is divided into continuous reinforcement (every response reinforced) and partial (intermittent) reinforcement (only some responses reinforced), with partial schedules further classified into four types based on ratio/interval and fixed/variable combinations.",
    "significance": "행동의 학습 속도, 반응 비율, 소거에 대한 저항성을 결정하는 핵심 변인이다. 부분 강화 효과(partial reinforcement effect)는 간헐 강화가 소거에 더 강한 저항을 보임을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "다양한 강화계획의 효과를 체계적으로 연구하였다"
      },
      {
        "name_ko": "찰스 페르스터",
        "name_en": "Charles Ferster",
        "contribution": "Skinner와 함께 강화계획에 관한 대표적 저서 'Schedules of Reinforcement'를 저술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정비율계획",
        "name_en": "Fixed-Ratio Schedule",
        "id": "LEARN_FR_021"
      },
      {
        "name_ko": "변동비율계획",
        "name_en": "Variable-Ratio Schedule",
        "id": "LEARN_VR_022"
      },
      {
        "name_ko": "고정간격계획",
        "name_en": "Fixed-Interval Schedule",
        "id": "LEARN_FI_023"
      },
      {
        "name_ko": "변동간격계획",
        "name_en": "Variable-Interval Schedule",
        "id": "LEARN_VI_024"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "연속 강화",
        "name_en": "Continuous Reinforcement",
        "definition": "매 반응마다 강화하는 계획. 학습이 빠르지만 소거도 빠르다"
      },
      {
        "name_ko": "부분(간헐) 강화",
        "name_en": "Partial (Intermittent) Reinforcement",
        "definition": "일부 반응에만 강화하는 계획. 학습은 느리지만 소거에 대한 저항이 높다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "강화계획 4종: FR(고정비율), VR(변동비율), FI(고정간격), VI(변동간격)",
      "differential": "비율(ratio) 계획은 반응 횟수 기반, 간격(interval) 계획은 시간 경과 기반이다",
      "key_point": "부분 강화 효과: 간헐 강화로 학습된 행동이 연속 강화로 학습된 행동보다 소거에 더 저항적이다",
      "common_mistake": "연속 강화가 항상 더 좋다고 오해하기 쉬우나, 부분 강화가 소거 저항이 높아 행동 유지에 더 효과적이다"
    }
  },
  {
    "id": "LEARN_SHAP_016",
    "terminology": "조성 (Shaping)",
    "terminology_ko": "조성",
    "terminology_en": "Shaping",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "목표 행동에 점점 더 가까워지는 연속적 근사치(successive approximations)를 강화하여 점진적으로 목표 행동을 형성해 가는 절차이다. 자연적으로 발생하지 않는 복잡한 행동을 학습시키는 데 사용된다.",
    "definition_en": "A procedure in which reinforcers guide behavior toward closer and closer approximations of a desired goal behavior. It is used to teach complex behaviors that would not naturally occur through successive approximations.",
    "significance": "자연적으로 발생하지 않는 복잡한 행동을 가르치는 핵심 기법으로, 동물 훈련, 언어 발달, 행동치료, 특수교육 등에서 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "조성 절차를 개발하고 비둘기의 탁구 치기 등 복잡한 행동 형성에 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      },
      {
        "name_ko": "행동수정",
        "name_en": "Behavior Modification",
        "id": "LEARN_BM_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조성(造成) = 행동을 '만들어(造) 이룸(成)'. 점토를 빚듯 행동을 점차 빚어감",
      "differential": "조성은 목표 행동에 '점진적으로' 접근하는 것이고, 연쇄(chaining)는 여러 행동을 '순서대로' 연결하는 것이다",
      "key_point": "핵심 원리는 '연속적 근사치의 강화(reinforcement of successive approximations)'이다",
      "common_mistake": "조성은 최종 목표 행동만 강화하는 것이 아니라, 목표에 점점 가까운 중간 단계 행동들도 강화한다"
    }
  },
  {
    "id": "LEARN_OL_017",
    "terminology": "관찰학습 (Observational Learning)",
    "terminology_ko": "관찰학습",
    "terminology_en": "Observational Learning",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "다른 사람(모델)의 행동과 그 결과를 관찰함으로써 새로운 행동을 학습하는 과정이다. 직접 경험하지 않고도 타인의 경험을 통해 학습이 이루어지며, Bandura의 사회학습이론의 핵심 개념이다.",
    "definition_en": "Learning that occurs by observing others' behavior and its consequences, without direct personal experience. It is the core concept of Bandura's social learning theory, demonstrating that people can learn new behaviors by watching models.",
    "significance": "직접 경험 없이도 학습이 가능함을 보여주어 행동주의의 한계를 극복하였다. 미디어 폭력, 사회화, 문화 전달 등을 설명하는 핵심 이론이다.",
    "key_researchers": [
      {
        "name_ko": "알버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "보보 인형 실험(Bobo doll experiment)을 통해 관찰학습을 입증하고 사회학습이론(후에 사회인지이론)을 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "LEARN_MOD_018"
      },
      {
        "name_ko": "대리강화",
        "name_en": "Vicarious Reinforcement",
        "id": "LEARN_VIC_029"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Bandura의 보보 인형 실험: 아이들이 어른의 공격 행동을 '관찰'하고 '모방'함",
      "differential": "관찰학습은 직접 강화 없이 타인의 행동을 관찰하여 학습하는 것이고, 조작적 조건형성은 자신의 행동 결과를 통해 직접 학습하는 것이다",
      "key_point": "관찰학습의 4단계: 주의(attention) → 파지(retention) → 재생(reproduction) → 동기(motivation)",
      "common_mistake": "관찰학습은 단순 모방이 아니다. 관찰한 행동을 실제로 수행할지는 동기(강화 기대)에 따라 결정된다(학습-수행 구분)"
    }
  },
  {
    "id": "LEARN_MOD_018",
    "terminology": "모델링 (Modeling)",
    "terminology_ko": "모델링",
    "terminology_en": "Modeling",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "관찰자가 모델(다른 사람)의 행동을 관찰한 후 그 행동을 모방하거나 학습하는 과정이다. 모델의 특성(지위, 유사성, 매력도)이 모델링 효과에 영향을 미친다.",
    "definition_en": "The process by which an observer watches a model's behavior and then imitates or learns from it. The effectiveness of modeling is influenced by model characteristics such as status, similarity, and attractiveness.",
    "significance": "사회적 학습의 핵심 기제이며, 치료(모델링 기법), 교육(시범), 광고(유명인 모델) 등에서 광범위하게 응용된다.",
    "key_researchers": [
      {
        "name_ko": "알버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "모델링의 원리와 조건을 체계적으로 연구하고, 치료적 모델링 기법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "LEARN_OL_017"
      },
      {
        "name_ko": "대리강화",
        "name_en": "Vicarious Reinforcement",
        "id": "LEARN_VIC_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "실제 모델링",
        "name_en": "Live Modeling",
        "definition": "실제 사람이 직접 행동을 시범 보이는 것"
      },
      {
        "name_ko": "상징적 모델링",
        "name_en": "Symbolic Modeling",
        "definition": "TV, 영화, 책 등 매체를 통해 행동을 관찰하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "모델링 = 모델을 보고 따라 하기. 보보 인형 실험이 대표적",
      "differential": "모델링은 특정 모델의 행동을 관찰하고 모방하는 것이고, 관찰학습은 모델링을 포함하는 더 넓은 개념이다",
      "key_point": "효과적 모델의 조건: 관찰자와 유사한, 존경받는, 매력적인, 강화받는 모델이 더 효과적이다",
      "common_mistake": "모델링이 항상 의도적 모방을 의미하지 않는다. 무의식적으로 모델의 행동을 습득할 수도 있다"
    }
  },
  {
    "id": "LEARN_LOE_019",
    "terminology": "효과의 법칙 (Law of Effect)",
    "terminology_ko": "효과의 법칙",
    "terminology_en": "Law of Effect",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "만족스러운 결과를 가져오는 행동은 반복될 가능성이 높아지고, 불만족스러운 결과를 가져오는 행동은 반복될 가능성이 낮아진다는 Thorndike의 원리이다. 퍼즐 상자 실험을 통해 발견되었다.",
    "definition_en": "Thorndike's principle stating that behaviors followed by satisfying consequences tend to be repeated, while behaviors followed by unsatisfying consequences tend not to be repeated. It was discovered through puzzle box experiments.",
    "significance": "조작적 조건형성의 이론적 선구자로, 행동의 결과가 학습을 결정한다는 핵심 원리를 최초로 제시하였다. Skinner의 조작적 조건형성은 이 법칙을 정교하게 발전시킨 것이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "고양이 퍼즐 상자 실험을 통해 효과의 법칙을 발견하고, 시행착오 학습의 원리를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Thorndike의 고양이: 퍼즐 상자 탈출 → 먹이(만족 결과) → 탈출 행동 반복",
      "differential": "효과의 법칙은 Thorndike의 초기 원리이고, 조작적 조건형성은 Skinner가 이를 정교화한 체계이다",
      "key_point": "행동의 '결과'가 그 행동의 미래 발생 확률을 결정한다는 것이 핵심이다",
      "common_mistake": "효과의 법칙과 조작적 조건형성을 동일시하기 쉬우나, 효과의 법칙은 조작적 조건형성의 이론적 기초/전신이다"
    }
  },
  {
    "id": "LEARN_LH_020",
    "terminology": "학습된 무기력 (Learned Helplessness)",
    "terminology_ko": "학습된 무기력",
    "terminology_en": "Learned Helplessness",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "통제 불가능한 혐오 사건을 반복적으로 경험한 후, 실제로 통제가 가능한 상황에서도 도피하거나 회피하려는 시도를 하지 않게 되는 현상이다. Seligman의 개 실험에서 발견되었다.",
    "definition_en": "A condition in which a person or animal, after repeated exposure to uncontrollable aversive events, fails to attempt escape or avoidance even when such actions are possible. It was discovered in Seligman's experiments with dogs.",
    "significance": "우울증의 인지적 모형을 제시하였으며, 통제감의 상실이 심리적 건강에 미치는 영향을 이해하는 데 중요한 기여를 하였다. 긍정심리학의 출발점이 되었다.",
    "key_researchers": [
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "학습된 무기력 현상을 발견하고 이를 우울증의 모형으로 발전시켰으며, 이후 긍정심리학을 창시하였다"
      },
      {
        "name_ko": "스티븐 마이어",
        "name_en": "Steven Maier",
        "contribution": "Seligman과 함께 학습된 무기력의 초기 실험 연구를 수행하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      },
      {
        "name_ko": "부적 강화",
        "name_en": "Negative Reinforcement",
        "id": "LEARN_NR_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Seligman의 개 실험: 피할 수 없는 전기 충격 경험 → 피할 수 있는 상황에서도 포기",
      "differential": "학습된 무기력은 '통제 불가능성'의 학습이고, 소거는 '강화 부재'에 의한 반응 감소이다",
      "key_point": "핵심은 '통제 불가능성(uncontrollability)'의 학습이다. 결과가 나쁜 것이 아니라 자신의 행동과 결과 간 연결이 없다는 것을 학습하는 것이다",
      "common_mistake": "학습된 무기력을 단순한 '의욕 상실'로 이해하면 안 된다. 핵심은 '자신의 행동이 결과를 통제할 수 없다'는 인지적 학습이다"
    }
  },
  {
    "id": "LEARN_FR_021",
    "terminology": "고정비율계획 (Fixed-Ratio Schedule, FR)",
    "terminology_ko": "고정비율계획",
    "terminology_en": "Fixed-Ratio Schedule (FR)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "일정한 횟수의 반응을 완료할 때마다 강화가 제공되는 강화계획이다. 예를 들어, FR-5는 매 5번째 반응마다 강화가 주어진다. 높은 반응률을 보이며 강화 후 일시적 휴지(post-reinforcement pause)가 특징적이다.",
    "definition_en": "A reinforcement schedule in which reinforcement is delivered after a fixed number of responses. For example, FR-5 provides reinforcement after every 5th response. It produces high response rates with characteristic post-reinforcement pauses.",
    "significance": "성과급, 수당(piece-rate pay) 등 실생활에서 널리 사용되는 강화계획이며, 근면한 행동을 유발하지만 강화 직후 휴지가 나타난다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "고정비율계획을 포함한 4가지 강화계획의 효과를 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변동비율계획",
        "name_en": "Variable-Ratio Schedule",
        "id": "LEARN_VR_022"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      },
      {
        "name_ko": "고정간격계획",
        "name_en": "Fixed-Interval Schedule",
        "id": "LEARN_FI_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FR = Fixed Ratio: '고정된' '비율(횟수)'마다 강화. 예: 커피 10잔 스탬프 모으면 1잔 무료",
      "differential": "고정비율은 반응 '횟수' 기준이고 고정간격은 '시간' 기준이다. 고정비율은 고정간격보다 높은 반응률을 보인다",
      "key_point": "강화 직후 일시적 휴지(post-reinforcement pause)가 나타나는 것이 특징이다",
      "common_mistake": "고정비율을 고정간격과 혼동하기 쉽다. 비율은 '횟수' 기준, 간격은 '시간' 기준이다"
    }
  },
  {
    "id": "LEARN_VR_022",
    "terminology": "변동비율계획 (Variable-Ratio Schedule, VR)",
    "terminology_ko": "변동비율계획",
    "terminology_en": "Variable-Ratio Schedule (VR)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "평균적으로 일정한 횟수의 반응 후에 강화가 제공되지만, 각 강화 사이의 필요 반응 수가 변동하는 강화계획이다. 가장 높고 일정한 반응률을 보이며, 소거에 가장 강한 저항을 나타낸다.",
    "definition_en": "A reinforcement schedule in which reinforcement is delivered after an average number of responses, but the exact number varies. It produces the highest and most steady response rates and greatest resistance to extinction.",
    "significance": "도박, 영업, 낚시 등의 행동 패턴을 설명하며, 소거 저항이 가장 높아 행동을 지속시키는 데 가장 효과적인 강화계획이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "변동비율계획이 가장 높은 반응률과 소거 저항을 보임을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정비율계획",
        "name_en": "Fixed-Ratio Schedule",
        "id": "LEARN_FR_021"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      },
      {
        "name_ko": "변동간격계획",
        "name_en": "Variable-Interval Schedule",
        "id": "LEARN_VI_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "VR = Variable Ratio: '변동하는' '비율(횟수)'. 슬롯머신이 대표적 예 - 언제 당첨될지 모르므로 계속 함",
      "differential": "변동비율은 고정비율과 달리 강화 후 휴지가 거의 없어 일정하고 높은 반응률을 보인다",
      "key_point": "4가지 강화계획 중 가장 높은 반응률과 가장 높은 소거 저항을 보인다",
      "common_mistake": "변동비율과 변동간격을 혼동하기 쉽다. 변동비율은 반응 '횟수' 기준(슬롯머신), 변동간격은 '시간' 기준(이메일 확인)"
    }
  },
  {
    "id": "LEARN_FI_023",
    "terminology": "고정간격계획 (Fixed-Interval Schedule, FI)",
    "terminology_ko": "고정간격계획",
    "terminology_en": "Fixed-Interval Schedule (FI)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "일정한 시간이 경과한 후 첫 번째 반응에 강화가 제공되는 강화계획이다. 강화 직후에는 반응률이 낮다가 강화 시점이 가까워지면 반응률이 급격히 증가하는 부채꼴 패턴(scallop pattern)이 특징적이다.",
    "definition_en": "A reinforcement schedule in which reinforcement is delivered for the first response after a fixed time period has elapsed. It produces a characteristic scallop pattern with low response rates just after reinforcement and increasing rates as the next reinforcement approaches.",
    "significance": "월급, 정기 시험 등의 행동 패턴을 설명한다. 시험 전에만 열심히 공부하는 학생의 패턴이 고정간격계획의 부채꼴 패턴에 해당한다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "고정간격계획의 특징적 반응 패턴(부채꼴 패턴)을 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변동간격계획",
        "name_en": "Variable-Interval Schedule",
        "id": "LEARN_VI_024"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      },
      {
        "name_ko": "고정비율계획",
        "name_en": "Fixed-Ratio Schedule",
        "id": "LEARN_FR_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FI = Fixed Interval: '고정된' '간격(시간)'. 예: 매월 월급 → 월말에 근무 열심, 월초에 느슨",
      "differential": "고정간격(시간 기준)은 부채꼴 패턴, 고정비율(횟수 기준)은 강화 후 휴지 패턴을 보인다",
      "key_point": "부채꼴 패턴(scallop pattern): 강화 직후 낮은 반응률 → 시간 경과에 따라 반응률 점차 증가",
      "common_mistake": "고정간격계획에서는 시간이 지나면 '자동으로' 강화되는 것이 아니라, 시간 경과 '후' 첫 반응에 강화된다"
    }
  },
  {
    "id": "LEARN_VI_024",
    "terminology": "변동간격계획 (Variable-Interval Schedule, VI)",
    "terminology_ko": "변동간격계획",
    "terminology_en": "Variable-Interval Schedule (VI)",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "평균적으로 일정한 시간 간격 후 첫 번째 반응에 강화가 제공되지만, 실제 간격이 변동하는 강화계획이다. 느리지만 꾸준하고 일정한 반응률을 보인다.",
    "definition_en": "A reinforcement schedule in which reinforcement is delivered for the first response after an average time interval that varies. It produces slow but steady and consistent response rates.",
    "significance": "이메일 확인, 낚시 등 불규칙한 간격으로 보상이 주어지는 상황을 설명하며, 일정하고 꾸준한 행동 패턴을 유지하는 데 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "변동간격계획의 반응 특성을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정간격계획",
        "name_en": "Fixed-Interval Schedule",
        "id": "LEARN_FI_023"
      },
      {
        "name_ko": "강화계획",
        "name_en": "Reinforcement Schedule",
        "id": "LEARN_RS_015"
      },
      {
        "name_ko": "변동비율계획",
        "name_en": "Variable-Ratio Schedule",
        "id": "LEARN_VR_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "VI = Variable Interval: '변동하는' '간격(시간)'. 예: 이메일/SNS 확인 - 언제 새 메시지가 올지 몰라 수시로 확인",
      "differential": "변동간격은 느리지만 꾸준한 반응률을, 변동비율은 빠르고 꾸준한 반응률을 보인다",
      "key_point": "고정간격의 부채꼴 패턴 없이 일정한 반응률을 유지하는 것이 특징이다",
      "common_mistake": "변동간격에서의 느린 반응률을 변동비율의 높은 반응률과 혼동하지 않도록 주의해야 한다"
    }
  },
  {
    "id": "LEARN_TE_025",
    "terminology": "토큰경제 (Token Economy)",
    "terminology_ko": "토큰경제",
    "terminology_en": "Token Economy",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "바람직한 행동에 대해 토큰(점수, 스티커, 칩 등)을 강화물로 제공하고, 축적된 토큰을 나중에 실제 보상(음식, 활동, 특권 등)과 교환할 수 있게 하는 행동수정 프로그램이다.",
    "definition_en": "A behavior modification system in which tokens (points, stickers, chips, etc.) are given as reinforcers for desirable behaviors and can later be exchanged for actual rewards (food, activities, privileges, etc.).",
    "significance": "조작적 조건형성의 원리를 실제 환경에 체계적으로 적용한 대표적 기법으로, 학교, 정신병원, 교정시설 등에서 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "테오도르 에일론",
        "name_en": "Teodoro Ayllon",
        "contribution": "정신병원에서 토큰경제 시스템을 최초로 체계적으로 적용하였다"
      },
      {
        "name_ko": "나탄 아즈린",
        "name_en": "Nathan Azrin",
        "contribution": "Ayllon과 함께 정신병원에서의 토큰경제 연구를 수행하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      },
      {
        "name_ko": "정적 강화",
        "name_en": "Positive Reinforcement",
        "id": "LEARN_PR_012"
      },
      {
        "name_ko": "행동수정",
        "name_en": "Behavior Modification",
        "id": "LEARN_BM_030"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "토큰경제 = '토큰(이차 강화물)'으로 운영되는 '경제' 시스템",
      "differential": "토큰경제는 이차 강화물(토큰)을 사용하는 체계적 프로그램이고, 단순 보상은 일차 강화물을 직접 제공하는 것이다",
      "key_point": "토큰은 이차(조건) 강화물로, 다양한 일차 강화물(backup reinforcer)과 교환될 수 있어 강화 효과가 높다",
      "common_mistake": "토큰경제가 '뇌물'이라는 비판이 있지만, 체계적 강화를 통해 바람직한 행동을 형성하는 것이 목적이다"
    }
  },
  {
    "id": "LEARN_GTA_026",
    "terminology": "미각혐오학습 (Taste Aversion Learning)",
    "terminology_ko": "미각혐오학습",
    "terminology_en": "Taste Aversion Learning",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "특정 음식을 먹은 후 메스꺼움이나 구토를 경험하면, 한 번의 경험만으로도 그 음식에 대한 강한 혐오가 형성되는 학습이다. CS(맛)와 US(메스꺼움) 사이에 수 시간의 긴 지연이 있어도 학습이 이루어진다는 점에서 고전적 조건형성의 일반 원칙에 예외가 된다.",
    "definition_en": "A learned aversion to a particular taste that develops after consuming a food followed by nausea or illness. Remarkably, it can form after just a single pairing and even with long delays (hours) between the taste (CS) and illness (US), challenging general principles of classical conditioning.",
    "significance": "생물학적 준비성(biological preparedness)의 개념을 지지하며, 유기체가 진화적으로 특정 연합을 더 쉽게 학습하도록 준비되어 있음을 보여준다. 암 환자의 화학요법 부작용 관리에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "존 가르시아",
        "name_en": "John Garcia",
        "contribution": "Garcia 효과를 발견하여, 고전적 조건형성에서 자극 간 긴 시간 지연에도 학습이 가능함을 입증하였다"
      },
      {
        "name_ko": "로버트 쾰링",
        "name_en": "Robert Koelling",
        "contribution": "Garcia와 함께 미각혐오학습과 생물학적 준비성에 관한 핵심 실험을 수행하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      },
      {
        "name_ko": "자극일반화",
        "name_en": "Stimulus Generalization",
        "id": "LEARN_SG_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Garcia 효과: 음식 맛(CS) → 수 시간 후 메스꺼움(US) → 한 번만에 혐오 형성",
      "differential": "일반적 고전적 조건형성은 CS-US 간격이 짧아야 효과적이지만, 미각혐오학습은 수 시간 지연에도 학습이 일어난다",
      "key_point": "생물학적 준비성: 맛-메스꺼움 연합은 쉽게 형성되지만, 소리-메스꺼움 연합은 잘 형성되지 않는다",
      "common_mistake": "미각혐오학습이 고전적 조건형성의 '반례'라고 생각하기 쉬우나, 고전적 조건형성의 '특수한 형태'로 보는 것이 더 정확하다"
    }
  },
  {
    "id": "LEARN_LL_027",
    "terminology": "잠재학습 (Latent Learning)",
    "terminology_ko": "잠재학습",
    "terminology_en": "Latent Learning",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "명시적 강화 없이도 학습이 일어나지만, 적절한 동기(강화)가 주어질 때까지 행동으로 표현되지 않는 학습이다. Tolman의 쥐 미로 실험에서 강화 없이 미로를 탐색한 쥐가 강화를 받기 시작하자 즉시 높은 수행을 보여 잠재학습을 입증하였다.",
    "definition_en": "Learning that occurs without apparent reinforcement but is not demonstrated until an incentive is provided. Tolman's rat maze experiments showed that rats who explored a maze without reinforcement quickly performed as well as reinforced rats once a reward was introduced.",
    "significance": "학습과 수행의 구분을 최초로 입증하여, 순수 행동주의의 한계를 드러내고 인지적 요인의 중요성을 보여주었다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 톨먼",
        "name_en": "Edward Tolman",
        "contribution": "잠재학습 실험을 통해 학습과 수행의 구분을 입증하고, 인지도(cognitive map)의 개념을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지도",
        "name_en": "Cognitive Map",
        "id": "LEARN_CM_028"
      },
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "LEARN_OL_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "잠재(潛在) = 숨어있는 학습. 배웠지만 강화가 주어질 때까지 숨어있다가 나타남",
      "differential": "잠재학습은 강화 없이도 학습이 일어남을 보여주고, 조작적 조건형성은 강화가 학습의 필수 요소라고 본다",
      "key_point": "학습(learning)과 수행(performance)은 다르다. 학습은 되었지만 동기가 없으면 수행으로 나타나지 않을 수 있다",
      "common_mistake": "잠재학습이 '학습이 안 일어난 것'이 아니라, 학습은 되었지만 표현되지 않았을 뿐이다"
    }
  },
  {
    "id": "LEARN_CM_028",
    "terminology": "인지도 (Cognitive Map)",
    "terminology_ko": "인지도",
    "terminology_en": "Cognitive Map",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "환경의 공간적 배치에 대한 내적 표상(심적 지도)이다. Tolman이 제안한 개념으로, 쥐가 미로의 공간적 구조를 내적으로 표상하여 다양한 경로로 목표에 도달할 수 있음을 보여주었다.",
    "definition_en": "A mental representation of the spatial layout of an environment. Proposed by Tolman, it explains how organisms form internal spatial representations, enabling flexible navigation through different routes to reach a goal.",
    "significance": "학습이 단순한 자극-반응 연합이 아니라 인지적 표상의 형성을 포함함을 보여주어, 행동주의에서 인지심리학으로의 전환에 기여하였다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 톨먼",
        "name_en": "Edward Tolman",
        "contribution": "쥐 미로 실험을 통해 인지도의 존재를 입증하고, 학습의 인지적 측면을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잠재학습",
        "name_en": "Latent Learning",
        "id": "LEARN_LL_027"
      },
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "LEARN_OL_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지도 = 머릿속 지도(map). Tolman의 쥐가 미로의 '심적 지도'를 가지고 있었다",
      "differential": "인지도는 공간적 환경의 내적 표상이고, 잠재학습은 강화 없이 일어나는 학습 과정 자체를 가리킨다",
      "key_point": "인지도는 단순 자극-반응 연합을 넘어서는 인지적 학습의 증거이다",
      "common_mistake": "인지도가 실제 정확한 '지도'를 의미하는 것이 아니라, 환경에 대한 대략적 내적 표상을 의미한다"
    }
  },
  {
    "id": "LEARN_VIC_029",
    "terminology": "대리강화 (Vicarious Reinforcement)",
    "terminology_ko": "대리강화",
    "terminology_en": "Vicarious Reinforcement",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "타인(모델)이 특정 행동으로 강화받는 것을 관찰함으로써, 관찰자 자신도 그 행동을 수행할 가능성이 높아지는 현상이다. 직접 강화를 받지 않아도 타인의 강화를 통해 행동이 영향받는다.",
    "definition_en": "An increase in the likelihood of performing a behavior after observing a model being reinforced for that behavior. The observer's behavior is influenced by the consequences experienced by the model, without direct personal reinforcement.",
    "significance": "직접 경험하지 않고도 타인의 결과를 통해 행동이 변화할 수 있음을 보여주며, 관찰학습의 동기적 요소를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "알버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "보보 인형 실험의 변형에서 모델이 보상받는 것을 본 아이들이 공격 행동을 더 많이 모방함을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "LEARN_OL_017"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "LEARN_MOD_018"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "LEARN_REINF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대리(代理) 강화 = 남이 '대신' 강화받는 것을 보고 내 행동이 변화함",
      "differential": "직접 강화는 본인이 직접 강화를 받는 것이고, 대리강화는 타인이 강화받는 것을 관찰하는 것이다",
      "key_point": "관찰학습에서 학습과 수행을 결정하는 핵심 동기적 요인이다",
      "common_mistake": "대리강화만으로 학습이 일어나는 것이 아니라, 이미 관찰을 통해 학습된 행동의 '수행' 여부에 영향을 미치는 것이다"
    }
  },
  {
    "id": "LEARN_BM_030",
    "terminology": "행동수정 (Behavior Modification)",
    "terminology_ko": "행동수정",
    "terminology_en": "Behavior Modification",
    "category": "LEARN",
    "category_name": "학습 (Learning)",
    "definition": "학습 원리(특히 조작적 조건형성과 고전적 조건형성)를 체계적으로 적용하여 바람직하지 않은 행동을 감소시키고 바람직한 행동을 증가시키는 치료적 접근이다.",
    "definition_en": "A therapeutic approach that systematically applies learning principles (especially operant and classical conditioning) to decrease undesirable behaviors and increase desirable ones.",
    "significance": "학습 이론의 대표적 실제 응용 분야로, 교육, 임상, 조직, 건강 등 다양한 영역에서 증거 기반 행동 변화 기법으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "버러스 F. 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "조작적 조건형성 원리를 실제 행동 변화에 적용하는 이론적 기초를 제공하였다"
      },
      {
        "name_ko": "조셉 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "체계적 둔감법 등 고전적 조건형성 기반의 행동치료 기법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "LEARN_OC_010"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "LEARN_CC_001"
      },
      {
        "name_ko": "토큰경제",
        "name_en": "Token Economy",
        "id": "LEARN_TE_025"
      },
      {
        "name_ko": "조성",
        "name_en": "Shaping",
        "id": "LEARN_SHAP_016"
      }
    ],
    "sub_types": [
      {
        "name_ko": "체계적 둔감법",
        "name_en": "Systematic Desensitization",
        "definition": "이완 훈련과 점진적 노출을 결합하여 공포와 불안을 감소시키는 기법"
      },
      {
        "name_ko": "혐오치료",
        "name_en": "Aversion Therapy",
        "definition": "바람직하지 않은 행동에 혐오 자극을 짝지어 그 행동을 감소시키는 기법"
      },
      {
        "name_ko": "바이오피드백",
        "name_en": "Biofeedback",
        "definition": "생리적 반응에 대한 피드백을 통해 자율신경계 반응을 조절하도록 학습시키는 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "행동수정 = 학습 원리로 행동을 '수정'하는 실천적 접근",
      "differential": "행동수정은 관찰 가능한 행동의 변화에 초점을 맞추고, 인지행동치료(CBT)는 사고의 변화도 함께 다룬다",
      "key_point": "핵심 원칙: 구체적 행동 목표 설정, 기저선 측정, 학습 원리 적용, 행동 변화의 객관적 측정",
      "common_mistake": "행동수정이 기계적이고 비인간적이라는 편견이 있지만, 과학적 원리에 기반한 체계적이고 효과적인 접근이다"
    }
  }
];

TERMS_DATA.MEMORY = [
  {
    "id": "MEMORY_ENCODE_001",
    "terminology": "부호화 (Encoding)",
    "terminology_ko": "부호화",
    "terminology_en": "Encoding",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "외부로부터 들어온 정보를 기억 체계에 저장할 수 있는 형태로 변환하는 최초의 처리 과정이다. 시각적, 음향적, 의미적 부호화 등 다양한 수준에서 이루어진다.",
    "definition_en": "The initial process of converting incoming information into a form that can be stored in the memory system. It occurs at various levels, including visual, acoustic, and semantic encoding.",
    "significance": "부호화는 기억의 3단계(부호화-저장-인출) 중 첫 번째 단계로, 정보가 어떤 방식으로 부호화되느냐에 따라 이후 기억의 지속성과 인출 가능성이 결정된다. Craik과 Lockhart의 처리 수준 이론에서 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "퍼거스 크레이크",
        "name_en": "Fergus Craik",
        "contribution": "Robert Lockhart와 함께 처리 수준 이론(Levels of Processing Theory)을 제안하여, 깊은 수준의 부호화가 더 나은 기억을 만든다고 주장하였다."
      },
      {
        "name_ko": "로버트 록하트",
        "name_en": "Robert Lockhart",
        "contribution": "Craik과 함께 처리 수준 이론을 공동 발표하였다(1972)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "저장",
        "name_en": "Storage",
        "id": "MEMORY_STORE_002"
      },
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "정교화 부호화",
        "name_en": "Elaborative Encoding",
        "id": "MEMORY_ELAB_010"
      }
    ],
    "sub_types": [
      {
        "name_ko": "시각적 부호화",
        "name_en": "Visual Encoding",
        "description": "정보를 시각적 이미지로 변환하여 저장하는 방식"
      },
      {
        "name_ko": "음향적 부호화",
        "name_en": "Acoustic Encoding",
        "description": "정보를 소리 형태로 변환하여 저장하는 방식으로, 단기기억에서 주로 사용된다"
      },
      {
        "name_ko": "의미적 부호화",
        "name_en": "Semantic Encoding",
        "description": "정보를 의미 단위로 변환하여 저장하는 방식으로, 장기기억에 가장 효과적이다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "부호화 = 정보를 '암호(코드)'로 바꾸는 과정. Encoding의 'En'은 '안으로 넣다'를 뜻한다.",
      "differential": "부호화는 정보의 '입력' 과정이고, 인출은 정보의 '출력' 과정이다. 저장은 그 사이의 '유지' 과정이다.",
      "key_point": "의미적 부호화가 시각적, 음향적 부호화보다 장기기억에 더 효과적이다(처리 수준 이론).",
      "common_mistake": "부호화를 단순히 '외우기'로 이해하는 것. 부호화는 정보 변환 과정이지 반복 암기가 아니다."
    }
  },
  {
    "id": "MEMORY_STORE_002",
    "terminology": "저장 (Storage)",
    "terminology_ko": "저장",
    "terminology_en": "Storage",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "부호화된 정보를 시간이 경과해도 유지하는 과정이다. 감각기억, 단기기억, 장기기억의 각 저장소에서 서로 다른 용량과 지속 시간으로 정보가 보존된다.",
    "definition_en": "The process of maintaining encoded information over time. Information is retained with different capacities and durations in sensory memory, short-term memory, and long-term memory stores.",
    "significance": "저장은 기억의 3단계 중 두 번째 단계로, 부호화된 정보가 얼마나 오래, 얼마나 정확하게 유지되는지를 결정한다. Atkinson과 Shiffrin의 다중저장소 모형에서 각 저장소의 특성이 체계적으로 설명되었다.",
    "key_researchers": [
      {
        "name_ko": "리처드 앳킨슨",
        "name_en": "Richard Atkinson",
        "contribution": "Shiffrin과 함께 다중저장소 모형(Multi-Store Model)을 제안하여 기억의 세 가지 저장소를 구분하였다(1968)."
      },
      {
        "name_ko": "리처드 쉬프린",
        "name_en": "Richard Shiffrin",
        "contribution": "Atkinson과 함께 감각기억-단기기억-장기기억으로 이어지는 기억 모형을 공동 제안하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      },
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "장기기억",
        "name_en": "Long-Term Memory",
        "id": "MEMORY_LTM_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "저장 = '창고에 물건을 보관'하는 것. 기억의 창고에 정보를 넣어두는 단계.",
      "differential": "저장은 정보의 '유지' 과정이며, 부호화(입력)나 인출(출력)과는 구분된다.",
      "key_point": "단기기억의 저장 용량은 약 7±2개 항목이며, 장기기억의 용량은 사실상 무제한으로 간주된다.",
      "common_mistake": "저장된 정보가 그대로 보존된다고 생각하는 것. 실제로 저장 과정에서 정보가 변형되거나 소실될 수 있다."
    }
  },
  {
    "id": "MEMORY_RETRIEV_003",
    "terminology": "인출 (Retrieval)",
    "terminology_ko": "인출",
    "terminology_en": "Retrieval",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "저장된 정보를 필요할 때 다시 의식으로 가져오는 과정이다. 인출 단서의 유무와 질에 따라 기억의 성공 여부가 크게 달라진다.",
    "definition_en": "The process of accessing and bringing stored information back into conscious awareness when needed. The success of retrieval heavily depends on the availability and quality of retrieval cues.",
    "significance": "기억 실패의 상당 부분은 저장 자체의 문제가 아니라 인출 실패에 기인한다. Tulving의 부호화 특수성 원리는 부호화 시의 맥락이 인출 단서로 작용함을 보여주었으며, 이는 효과적 학습 전략 설계의 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "부호화 특수성 원리(Encoding Specificity Principle)를 제안하여, 부호화 시의 맥락이 인출에 결정적 역할을 한다고 주장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      },
      {
        "name_ko": "회상",
        "name_en": "Recall",
        "id": "MEMORY_RECALL_024"
      },
      {
        "name_ko": "재인",
        "name_en": "Recognition",
        "id": "MEMORY_RECOG_023"
      },
      {
        "name_ko": "맥락의존 기억",
        "name_en": "Context-Dependent Memory",
        "id": "MEMORY_CTXDEP_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인출 = '은행에서 돈을 인출'하듯, 기억 저장소에서 정보를 꺼내오는 것.",
      "differential": "인출은 저장된 정보를 '꺼내는' 과정이지, 정보를 '넣는' 부호화 과정과 구분된다.",
      "key_point": "인출 실패는 정보가 사라진 것이 아니라 적절한 인출 단서가 없어 접근하지 못하는 상태이다.",
      "common_mistake": "기억하지 못하는 것을 곧 '잊어버린 것'으로 동일시하는 오류. 인출 단서만 주어지면 기억이 되살아나는 경우가 많다."
    }
  },
  {
    "id": "MEMORY_SENSORY_004",
    "terminology": "감각기억 (Sensory Memory)",
    "terminology_ko": "감각기억",
    "terminology_en": "Sensory Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "감각 기관을 통해 들어온 정보를 아주 짧은 시간(1초 미만~수 초) 동안 거의 원형 그대로 보존하는 기억 저장소이다. 영상기억(iconic memory)과 잔향기억(echoic memory)이 대표적이다.",
    "definition_en": "A memory store that preserves incoming sensory information in a nearly raw form for a very brief duration (less than 1 second to a few seconds). Iconic memory (visual) and echoic memory (auditory) are the primary types.",
    "significance": "감각기억은 Atkinson-Shiffrin 모형의 첫 번째 저장소로, 환경의 방대한 감각 정보 중 주의를 기울인 정보만이 단기기억으로 전달되는 관문 역할을 한다. Sperling의 부분보고법 실험이 감각기억의 존재를 실증적으로 입증하였다.",
    "key_researchers": [
      {
        "name_ko": "조지 스펄링",
        "name_en": "George Sperling",
        "contribution": "부분보고법(Partial Report Method) 실험을 통해 영상기억의 용량이 매우 크지만 지속 시간이 극히 짧음을 입증하였다(1960)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "장기기억",
        "name_en": "Long-Term Memory",
        "id": "MEMORY_LTM_006"
      }
    ],
    "sub_types": [
      {
        "name_ko": "영상기억 (아이코닉 메모리)",
        "name_en": "Iconic Memory",
        "description": "시각 정보를 약 0.5초간 보존하는 감각기억으로, 용량이 크지만 매우 빠르게 소멸한다"
      },
      {
        "name_ko": "잔향기억 (에코익 메모리)",
        "name_en": "Echoic Memory",
        "description": "청각 정보를 약 3-4초간 보존하는 감각기억으로, 영상기억보다 지속 시간이 길다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "감각기억 = 감각 '잔상'. 눈을 감아도 잠깐 보이는 잔상이 영상기억, 소리가 귓가에 맴도는 것이 잔향기억.",
      "differential": "감각기억은 수초 이내의 '자동적' 보존이고, 단기기억은 주의를 기울여 선별된 정보를 수십 초간 유지하는 것이다.",
      "key_point": "Sperling의 부분보고법은 전체보고법보다 더 많은 항목을 보고할 수 있음을 보여, 감각기억의 대용량-단시간 특성을 입증하였다.",
      "common_mistake": "감각기억을 '주의를 기울인 기억'으로 혼동하는 것. 감각기억은 주의 이전 단계의 자동적 보존이다."
    }
  },
  {
    "id": "MEMORY_STM_005",
    "terminology": "단기기억 (Short-Term Memory)",
    "terminology_ko": "단기기억",
    "terminology_en": "Short-Term Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "주의를 기울인 정보를 약 15-30초 동안 일시적으로 유지하는 기억 저장소이다. 용량은 약 7±2개 항목으로 제한되며, 시연(rehearsal)을 통해 유지되거나 장기기억으로 전환된다.",
    "definition_en": "A memory store that temporarily holds attended information for approximately 15-30 seconds. Its capacity is limited to about 7±2 items and information is maintained through rehearsal or transferred to long-term memory.",
    "significance": "Miller의 '마법의 숫자 7±2' 논문은 단기기억의 용량 제한을 밝힌 고전적 연구이다. 단기기억의 제한된 용량은 청킹, 시연 등의 기억 전략 발달의 배경이 되었으며, 이후 Baddeley의 작업기억 모형으로 발전하였다.",
    "key_researchers": [
      {
        "name_ko": "조지 밀러",
        "name_en": "George A. Miller",
        "contribution": "'마법의 숫자 7±2(The Magical Number Seven, Plus or Minus Two)' 논문을 통해 단기기억의 용량 제한을 체계적으로 규명하였다(1956)."
      },
      {
        "name_ko": "피터슨 부부",
        "name_en": "Lloyd & Margaret Peterson",
        "contribution": "Peterson & Peterson 실험을 통해 시연이 방해될 경우 단기기억의 정보가 약 18초 내에 급격히 소실됨을 보여주었다(1959)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각기억",
        "name_en": "Sensory Memory",
        "id": "MEMORY_SENSORY_004"
      },
      {
        "name_ko": "장기기억",
        "name_en": "Long-Term Memory",
        "id": "MEMORY_LTM_006"
      },
      {
        "name_ko": "작업기억",
        "name_en": "Working Memory",
        "id": "MEMORY_WM_007"
      },
      {
        "name_ko": "청킹",
        "name_en": "Chunking",
        "id": "MEMORY_CHUNK_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단기기억 = '칠판에 적은 메모'. 잠깐 쓰여 있다가 지워진다. 용량은 '7±2'.",
      "differential": "단기기억은 '일시적 보관'에 초점이 있고, 작업기억은 정보의 '조작과 처리'에 초점이 있다.",
      "key_point": "단기기억 용량 7±2는 '항목(chunk)' 단위이므로, 청킹을 통해 실질적으로 더 많은 정보를 담을 수 있다.",
      "common_mistake": "단기기억과 작업기억을 동의어로 사용하는 것. 작업기억은 단기기억을 포함하되 능동적 처리 기능을 강조하는 확장된 개념이다."
    }
  },
  {
    "id": "MEMORY_LTM_006",
    "terminology": "장기기억 (Long-Term Memory)",
    "terminology_ko": "장기기억",
    "terminology_en": "Long-Term Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "부호화된 정보를 수 분에서 평생에 걸쳐 비교적 영구적으로 저장하는 기억 체계이다. 용량은 사실상 무제한이며, 서술기억과 비서술기억(절차기억 등)으로 대별된다.",
    "definition_en": "A memory system that stores encoded information relatively permanently, from minutes to a lifetime. Its capacity is virtually unlimited and it is broadly divided into declarative (explicit) and nondeclarative (implicit) memory.",
    "significance": "장기기억은 개인의 지식, 경험, 기술의 총체적 저장소이다. Tulving의 서술기억-비서술기억 구분, Squire의 기억 분류 체계 등을 통해 장기기억의 다양한 하위 유형이 밝혀졌으며, 이는 기억 장애의 신경심리학적 이해에 핵심적 틀을 제공하였다.",
    "key_researchers": [
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "장기기억을 일화기억과 의미기억으로 구분하는 이론을 제안하였다(1972)."
      },
      {
        "name_ko": "래리 스콰이어",
        "name_en": "Larry Squire",
        "contribution": "서술기억과 비서술기억의 신경학적 기반을 밝히고 기억의 포괄적 분류 체계를 제시하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      },
      {
        "name_ko": "절차기억",
        "name_en": "Procedural Memory",
        "id": "MEMORY_PROC_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "서술기억 (외현기억)",
        "name_en": "Declarative (Explicit) Memory",
        "description": "의식적으로 회상할 수 있는 사실과 사건에 대한 기억"
      },
      {
        "name_ko": "비서술기억 (암묵기억)",
        "name_en": "Nondeclarative (Implicit) Memory",
        "description": "의식적 자각 없이 행동에 영향을 미치는 기억으로, 절차기억, 점화 등을 포함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "장기기억 = '하드디스크'. 용량이 거의 무한하고 오래 보존된다.",
      "differential": "장기기억은 용량이 무제한이고 지속 시간이 긴 반면, 단기기억은 약 7개 항목을 약 30초간 유지한다.",
      "key_point": "장기기억은 서술기억(일화+의미)과 비서술기억(절차+점화+조건화)으로 나뉜다.",
      "common_mistake": "장기기억에 저장된 정보가 영원히 변하지 않는다고 생각하는 것. 장기기억의 내용도 재구성, 왜곡될 수 있다."
    }
  },
  {
    "id": "MEMORY_WM_007",
    "terminology": "작업기억 (Working Memory)",
    "terminology_ko": "작업기억",
    "terminology_en": "Working Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정보를 일시적으로 저장하면서 동시에 인지적 과제를 수행하기 위해 정보를 능동적으로 조작하고 처리하는 기억 체계이다. Baddeley 모형에서는 중앙집행기, 음운루프, 시공간 스케치패드, 일화적 완충기의 네 구성요소로 설명된다.",
    "definition_en": "A memory system that temporarily stores information while simultaneously manipulating and processing it for cognitive tasks. Baddeley's model describes it with four components: the central executive, phonological loop, visuospatial sketchpad, and episodic buffer.",
    "significance": "작업기억은 단순한 수동적 저장소 개념을 넘어, 추론, 이해, 학습, 문제 해결 등 고차 인지 기능의 기반이 되는 핵심 체계이다. 작업기억 용량은 지능, 학업 성취도 등과 높은 상관을 보이며, 개인차 연구의 주요 변인이다.",
    "key_researchers": [
      {
        "name_ko": "앨런 배들리",
        "name_en": "Alan Baddeley",
        "contribution": "Graham Hitch와 함께 다중요소 작업기억 모형을 제안하고(1974), 이후 일화적 완충기를 추가하여 모형을 확장하였다(2000)."
      },
      {
        "name_ko": "그레이엄 히치",
        "name_en": "Graham Hitch",
        "contribution": "Baddeley와 함께 작업기억 모형을 공동 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "청킹",
        "name_en": "Chunking",
        "id": "MEMORY_CHUNK_008"
      },
      {
        "name_ko": "시연",
        "name_en": "Rehearsal",
        "id": "MEMORY_REHEAR_009"
      }
    ],
    "sub_types": [
      {
        "name_ko": "중앙집행기",
        "name_en": "Central Executive",
        "description": "주의를 통제하고 하위 체계들을 조율하는 핵심 관리 요소"
      },
      {
        "name_ko": "음운루프",
        "name_en": "Phonological Loop",
        "description": "언어적/음향적 정보를 일시적으로 저장하고 시연하는 하위 체계"
      },
      {
        "name_ko": "시공간 스케치패드",
        "name_en": "Visuospatial Sketchpad",
        "description": "시각적, 공간적 정보를 일시적으로 저장하고 처리하는 하위 체계"
      },
      {
        "name_ko": "일화적 완충기",
        "name_en": "Episodic Buffer",
        "description": "다양한 출처의 정보를 통합하여 일시적으로 저장하는 하위 체계(2000년 추가)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "작업기억 = '작업대(workbench)'. 재료(정보)를 올려놓고 가공(처리)하는 곳.",
      "differential": "단기기억은 정보의 '수동적 보관'에 초점, 작업기억은 정보의 '능동적 처리와 조작'에 초점이 있다.",
      "key_point": "Baddeley 모형의 4요소: 중앙집행기, 음운루프, 시공간 스케치패드, 일화적 완충기.",
      "common_mistake": "작업기억을 단기기억의 단순한 다른 이름으로 취급하는 것. 작업기억은 처리 기능이 포함된 확장 개념이다."
    }
  },
  {
    "id": "MEMORY_CHUNK_008",
    "terminology": "청킹 (Chunking)",
    "terminology_ko": "청킹",
    "terminology_en": "Chunking",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "개별 정보 단위들을 의미 있는 더 큰 단위(chunk)로 묶어 단기기억의 제한된 용량을 효과적으로 활용하는 기억 전략이다.",
    "definition_en": "A memory strategy that groups individual units of information into larger meaningful units (chunks) to effectively utilize the limited capacity of short-term memory.",
    "significance": "Miller(1956)가 단기기억 용량의 기본 단위가 '청크'임을 밝힌 이후, 청킹은 기억 용량의 제한을 극복하는 가장 기본적인 전략으로 인정받았다. 전문가와 초보자의 기억 차이를 설명하는 데에도 핵심적 개념이다.",
    "key_researchers": [
      {
        "name_ko": "조지 밀러",
        "name_en": "George A. Miller",
        "contribution": "단기기억의 용량 단위가 개별 항목이 아니라 '청크'임을 밝혀, 청킹의 이론적 기반을 마련하였다(1956)."
      },
      {
        "name_ko": "허버트 사이먼",
        "name_en": "Herbert Simon",
        "contribution": "체스 전문가 연구를 통해 전문성과 청킹의 관계를 규명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "작업기억",
        "name_en": "Working Memory",
        "id": "MEMORY_WM_007"
      },
      {
        "name_ko": "기억술",
        "name_en": "Mnemonics",
        "id": "MEMORY_MNEM_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "청킹 = '묶음 포장'. 낱개로 들면 7개뿐이지만, 묶으면 훨씬 많이 들 수 있다.",
      "differential": "청킹은 '정보 묶기' 전략이고, 시연은 '반복하기' 전략이다. 둘 다 단기기억 유지에 도움을 주지만 방식이 다르다.",
      "key_point": "전화번호 01012345678을 010-1234-5678로 나누는 것이 청킹의 대표적 예이다. 11자리를 3개 청크로 줄인다.",
      "common_mistake": "청킹이 기억 용량 자체를 늘린다고 생각하는 것. 실제로는 청크의 수(7±2)는 변하지 않고 각 청크의 정보량이 늘어나는 것이다."
    }
  },
  {
    "id": "MEMORY_REHEAR_009",
    "terminology": "시연 (Rehearsal)",
    "terminology_ko": "시연",
    "terminology_en": "Rehearsal",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정보를 반복적으로 되뇌어 단기기억에서 유지하거나 장기기억으로 전환시키는 인지적 과정이다. 유지시연과 정교화시연으로 구분된다.",
    "definition_en": "A cognitive process of repeatedly reviewing information to maintain it in short-term memory or transfer it to long-term memory. It is divided into maintenance rehearsal and elaborative rehearsal.",
    "significance": "Atkinson-Shiffrin 모형에서 시연은 단기기억의 정보를 장기기억으로 전환하는 핵심 메커니즘으로 제안되었다. 그러나 Craik과 Watkins(1973)의 연구는 단순 반복(유지시연)만으로는 장기기억 형성에 부족하며, 정교화시연이 필요함을 보여주었다.",
    "key_researchers": [
      {
        "name_ko": "퍼거스 크레이크",
        "name_en": "Fergus Craik",
        "contribution": "Michael Watkins와 함께 유지시연과 정교화시연의 구분을 실증적으로 입증하였다(1973)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정교화 부호화",
        "name_en": "Elaborative Encoding",
        "id": "MEMORY_ELAB_010"
      },
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "유지시연",
        "name_en": "Maintenance Rehearsal",
        "description": "정보를 단순 반복하여 단기기억에 유지하는 방식. 장기기억 형성에는 비효율적이다."
      },
      {
        "name_ko": "정교화시연",
        "name_en": "Elaborative Rehearsal",
        "description": "정보에 의미를 부여하고 기존 지식과 연결하여 깊이 처리하는 방식. 장기기억 형성에 효과적이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "시연 = '리허설'. 연극 리허설처럼 반복 연습하는 것. 유지시연은 '대사만 읽기', 정교화시연은 '감정을 넣어 연기하기'.",
      "differential": "유지시연은 기계적 반복이고, 정교화시연은 의미를 부여하는 깊은 처리이다.",
      "key_point": "단순히 반복하는 유지시연보다 의미와 연결짓는 정교화시연이 장기기억 형성에 훨씬 효과적이다.",
      "common_mistake": "모든 시연이 장기기억으로 이어진다고 생각하는 것. 유지시연만으로는 장기기억 전환이 어렵다."
    }
  },
  {
    "id": "MEMORY_ELAB_010",
    "terminology": "정교화 부호화 (Elaborative Encoding)",
    "terminology_ko": "정교화 부호화",
    "terminology_en": "Elaborative Encoding",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "새로운 정보를 기존 지식, 경험, 이미지 등과 의미적으로 연결하여 깊은 수준에서 처리함으로써 기억을 강화하는 부호화 방식이다.",
    "definition_en": "An encoding method that strengthens memory by processing new information at a deep level through meaningful connections with existing knowledge, experiences, and images.",
    "significance": "Craik과 Tulving(1975)의 실험은 정교화 부호화가 단순 반복보다 훨씬 효과적임을 입증하였다. 이는 처리 수준 이론의 핵심 증거이며, 자기참조 효과(self-reference effect) 등 실용적 학습 전략의 이론적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "퍼거스 크레이크",
        "name_en": "Fergus Craik",
        "contribution": "Endel Tulving과의 공동 연구에서 정교화 부호화의 우월성을 실험적으로 입증하였다(1975)."
      },
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "Craik과 함께 정교화 부호화 실험을 수행하여 처리 수준의 효과를 검증하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      },
      {
        "name_ko": "시연",
        "name_en": "Rehearsal",
        "id": "MEMORY_REHEAR_009"
      },
      {
        "name_ko": "기억술",
        "name_en": "Mnemonics",
        "id": "MEMORY_MNEM_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정교화 = '정성스럽게 교묘하게 가공'. 원재료(정보)에 디자인(의미)을 입히는 것.",
      "differential": "정교화 부호화는 의미적 연결을 통한 '깊은 처리'이고, 유지시연은 단순 반복을 통한 '얕은 처리'이다.",
      "key_point": "자기참조 효과: 정보를 자신과 관련지어 정교화하면 기억이 더욱 강화된다.",
      "common_mistake": "정교화가 단순히 '더 많이 외우기'라고 생각하는 것. 핵심은 양이 아니라 '의미적 연결의 깊이'이다."
    }
  },
  {
    "id": "MEMORY_CTXDEP_011",
    "terminology": "맥락의존 기억 (Context-Dependent Memory)",
    "terminology_ko": "맥락의존 기억",
    "terminology_en": "Context-Dependent Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정보가 부호화된 당시의 외부 환경(장소, 소리, 냄새 등)이 인출 시에도 동일하게 주어질 때 기억이 더 잘 되는 현상이다.",
    "definition_en": "The phenomenon in which memory retrieval is enhanced when the external environmental context (place, sounds, smells, etc.) at the time of retrieval matches that present during encoding.",
    "significance": "Godden과 Baddeley(1975)의 잠수부 실험은 맥락의존 기억의 고전적 증거이다. 이 현상은 Tulving의 부호화 특수성 원리를 지지하며, 학습 환경과 시험 환경의 일치가 수행에 미치는 영향을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "던컨 고든",
        "name_en": "Duncan Godden",
        "contribution": "Baddeley와 함께 육지 vs. 수중에서의 학습-인출 실험을 통해 맥락의존 기억 효과를 입증하였다(1975)."
      },
      {
        "name_ko": "앨런 배들리",
        "name_en": "Alan Baddeley",
        "contribution": "Godden과의 잠수부 실험에서 맥락의존 기억의 실험적 증거를 제공하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "상태의존 기억",
        "name_en": "State-Dependent Memory",
        "id": "MEMORY_STDEP_028"
      },
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "맥락의존 = '그 장소에 가면 떠오르는 기억'. 어릴 때 살던 동네에 가면 옛 기억이 떠오르는 것.",
      "differential": "맥락의존은 '외부 환경' 단서에 의존, 상태의존은 '내적 상태(기분, 약물)' 단서에 의존.",
      "key_point": "공부한 장소와 시험 보는 장소가 같으면 성적이 더 좋을 수 있다(Godden & Baddeley 잠수부 실험).",
      "common_mistake": "맥락의존과 상태의존을 혼동하는 것. 맥락 = 외부 환경, 상태 = 내적 생리/심리 상태."
    }
  },
  {
    "id": "MEMORY_DECL_012",
    "terminology": "서술기억 (Declarative Memory)",
    "terminology_ko": "서술기억",
    "terminology_en": "Declarative Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "의식적으로 회상하고 언어로 서술할 수 있는 사실과 사건에 대한 기억이다. 외현기억(explicit memory)이라고도 하며, 일화기억과 의미기억으로 구분된다.",
    "definition_en": "Memory for facts and events that can be consciously recalled and verbally declared. Also called explicit memory, it is subdivided into episodic memory and semantic memory.",
    "significance": "Tulving(1972)이 제안한 서술기억의 하위 구분(일화기억/의미기억)은 기억 연구의 기본 틀이 되었다. 해마 손상 환자(H.M. 사례)의 연구는 서술기억과 비서술기억이 서로 다른 뇌 체계에 의존함을 보여주었다.",
    "key_researchers": [
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "서술기억을 일화기억과 의미기억으로 구분하는 이론적 틀을 제안하였다(1972)."
      },
      {
        "name_ko": "래리 스콰이어",
        "name_en": "Larry Squire",
        "contribution": "서술기억의 신경학적 기반(특히 해마 의존성)을 체계적으로 연구하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일화기억",
        "name_en": "Episodic Memory",
        "id": "MEMORY_EPIS_014"
      },
      {
        "name_ko": "의미기억",
        "name_en": "Semantic Memory",
        "id": "MEMORY_SEMAN_015"
      },
      {
        "name_ko": "절차기억",
        "name_en": "Procedural Memory",
        "id": "MEMORY_PROC_013"
      },
      {
        "name_ko": "암묵기억",
        "name_en": "Implicit Memory",
        "id": "MEMORY_IMPL_030"
      }
    ],
    "sub_types": [
      {
        "name_ko": "일화기억",
        "name_en": "Episodic Memory",
        "description": "개인이 경험한 특정 사건과 그 시공간적 맥락에 대한 기억"
      },
      {
        "name_ko": "의미기억",
        "name_en": "Semantic Memory",
        "description": "일반적 지식, 개념, 사실에 대한 기억으로 특정 맥락과 무관하다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "서술기억 = '말로 서술할 수 있는 기억'. '나는 어제 카페에 갔다(일화)' / '파리는 프랑스의 수도다(의미)'.",
      "differential": "서술기억은 '의식적으로 말할 수 있는' 기억이고, 절차기억은 '행동으로 보여주는' 기억이다.",
      "key_point": "서술기억 = 외현기억(explicit memory). 일화기억 + 의미기억으로 구성된다.",
      "common_mistake": "서술기억과 절차기억을 장기기억의 전부라고 생각하는 것. 비서술기억에는 절차기억 외에도 점화, 조건화 등이 포함된다."
    }
  },
  {
    "id": "MEMORY_PROC_013",
    "terminology": "절차기억 (Procedural Memory)",
    "terminology_ko": "절차기억",
    "terminology_en": "Procedural Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "자전거 타기, 악기 연주, 타이핑 등 운동 기술과 인지적 절차에 대한 기억으로, 의식적 자각 없이 자동적으로 수행된다. 비서술기억(암묵기억)의 대표적 유형이다.",
    "definition_en": "Memory for motor skills and cognitive procedures such as riding a bicycle, playing instruments, and typing, which are performed automatically without conscious awareness. It is a primary type of nondeclarative (implicit) memory.",
    "significance": "H.M. 사례 연구에서 심각한 기억상실에도 불구하고 거울 그리기 등의 절차기억이 보존됨이 확인되어, 서술기억과 절차기억이 서로 다른 신경 기반을 가진다는 강력한 증거가 되었다.",
    "key_researchers": [
      {
        "name_ko": "브렌다 밀너",
        "name_en": "Brenda Milner",
        "contribution": "환자 H.M. 연구를 통해 해마 손상에도 절차적 학습이 가능함을 발견하여, 기억의 다중 체계를 입증하였다."
      },
      {
        "name_ko": "래리 스콰이어",
        "name_en": "Larry Squire",
        "contribution": "절차기억이 선조체(striatum)에 의존함을 밝히는 등 비서술기억의 신경학적 기반을 규명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      },
      {
        "name_ko": "암묵기억",
        "name_en": "Implicit Memory",
        "id": "MEMORY_IMPL_030"
      },
      {
        "name_ko": "장기기억",
        "name_en": "Long-Term Memory",
        "id": "MEMORY_LTM_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절차기억 = '몸이 기억하는 것'. 자전거 타기를 잊지 않는 이유.",
      "differential": "절차기억은 '어떻게(how)' 하는지에 대한 기억, 서술기억은 '무엇(what)'을 아는지에 대한 기억이다.",
      "key_point": "H.M. 환자 사례: 해마 제거 후 새로운 서술기억을 형성하지 못했지만, 거울 그리기 과제의 절차적 학습은 가능하였다.",
      "common_mistake": "절차기억을 단순히 '운동기술 기억'으로 한정하는 것. 인지적 절차(문법 규칙 적용 등)도 절차기억에 포함된다."
    }
  },
  {
    "id": "MEMORY_EPIS_014",
    "terminology": "일화기억 (Episodic Memory)",
    "terminology_ko": "일화기억",
    "terminology_en": "Episodic Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "개인이 직접 경험한 특정 사건(에피소드)과 그 시공간적 맥락(언제, 어디서)에 대한 기억이다. 자서전적 특성을 가지며 주관적 시간 여행의 느낌을 동반한다.",
    "definition_en": "Memory for specific personally experienced events (episodes) and their spatiotemporal context (when and where). It has autobiographical characteristics and involves the subjective sense of mental time travel.",
    "significance": "Tulving은 일화기억이 인간 고유의 능력일 수 있다고 제안하였으며, '정신적 시간 여행(mental time travel)'이라는 독특한 의식적 경험을 수반한다고 강조하였다. 알츠하이머병에서 일화기억이 가장 먼저 손상되는 것으로 알려져 있다.",
    "key_researchers": [
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "일화기억을 의미기억과 구분되는 독립적 기억 체계로 최초 제안하였으며(1972), 자각적 의식(autonoetic consciousness)과의 관련성을 강조하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의미기억",
        "name_en": "Semantic Memory",
        "id": "MEMORY_SEMAN_015"
      },
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      },
      {
        "name_ko": "섬광기억",
        "name_en": "Flashbulb Memory",
        "id": "MEMORY_FLASH_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일화기억 = '에피소드 기억'. TV 드라마의 각 에피소드처럼, 내 인생의 특정 장면을 기억하는 것.",
      "differential": "일화기억은 '개인적 경험(언제, 어디서)'에 관한 것이고, 의미기억은 '일반적 지식'에 관한 것이다.",
      "key_point": "'어제 점심에 김치찌개를 먹었다'는 일화기억, '김치찌개는 한국 음식이다'는 의미기억.",
      "common_mistake": "일화기억을 '중요한 기억'으로 혼동하는 것. 사소한 일상 경험도 일화기억에 해당한다."
    }
  },
  {
    "id": "MEMORY_SEMAN_015",
    "terminology": "의미기억 (Semantic Memory)",
    "terminology_ko": "의미기억",
    "terminology_en": "Semantic Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "일반적 지식, 개념, 사실, 언어의 의미 등 세상에 대한 체계적 지식의 저장소이다. 특정 시공간적 맥락과 분리되어 있으며 개인적 경험에 의존하지 않는다.",
    "definition_en": "A store of systematic knowledge about the world, including general facts, concepts, and word meanings. It is detached from specific spatiotemporal contexts and does not depend on personal experience.",
    "significance": "의미기억은 언어 이해, 추론, 범주화 등 거의 모든 고차 인지 활동의 기반이 된다. Collins와 Quillian의 위계적 네트워크 모형, Collins와 Loftus의 활성화 확산 모형 등이 의미기억의 구조를 설명하는 대표적 이론이다.",
    "key_researchers": [
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "의미기억을 일화기억과 구분되는 독립적 기억 체계로 제안하였다(1972)."
      },
      {
        "name_ko": "앨런 콜린스",
        "name_en": "Allan Collins",
        "contribution": "Quillian과 위계적 네트워크 모형(1969), Loftus와 활성화 확산 모형(1975)을 제안하여 의미기억의 조직 구조를 설명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일화기억",
        "name_en": "Episodic Memory",
        "id": "MEMORY_EPIS_014"
      },
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      },
      {
        "name_ko": "점화효과",
        "name_en": "Priming Effect",
        "id": "MEMORY_PRIME_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "의미기억 = '사전/백과사전'. 세상에 대한 일반 지식의 저장소.",
      "differential": "의미기억은 '지구는 태양 주위를 돈다' 같은 일반 지식, 일화기억은 '어제 과학 시험을 봤다' 같은 개인 경험.",
      "key_point": "의미기억은 처음 학습한 맥락(언제, 어디서)과 분리된 순수한 지식이다.",
      "common_mistake": "의미기억은 한 번 형성되면 변하지 않는다고 생각하는 것. 새로운 정보에 의해 수정, 확장될 수 있다."
    }
  },
  {
    "id": "MEMORY_INTERF_016",
    "terminology": "간섭 (Interference)",
    "terminology_ko": "간섭",
    "terminology_en": "Interference",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "기존 기억이나 새로운 학습이 다른 기억의 인출을 방해하는 현상이다. 순행간섭과 역행간섭으로 구분되며, 망각의 주요 원인 중 하나로 간주된다.",
    "definition_en": "A phenomenon in which existing memories or new learning disrupts the retrieval of other memories. It is divided into proactive and retroactive interference and is considered one of the major causes of forgetting.",
    "significance": "간섭 이론은 소멸 이론과 함께 망각의 주요 원인을 설명하는 양대 이론이다. McGeoch(1932)의 연구 이후 간섭이 망각의 핵심 원인으로 인정받았으며, 학습 계획, 수면 학습 효과 등 실용적 시사점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "존 맥기오치",
        "name_en": "John McGeoch",
        "contribution": "간섭 이론을 체계화하여 망각이 시간의 경과가 아니라 경쟁하는 기억들 간의 간섭에 의한 것임을 주장하였다(1932)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "순행간섭",
        "name_en": "Proactive Interference",
        "id": "MEMORY_PI_021"
      },
      {
        "name_ko": "역행간섭",
        "name_en": "Retroactive Interference",
        "id": "MEMORY_RI_022"
      },
      {
        "name_ko": "망각곡선",
        "name_en": "Forgetting Curve",
        "id": "MEMORY_FORGET_017"
      }
    ],
    "sub_types": [
      {
        "name_ko": "순행간섭",
        "name_en": "Proactive Interference",
        "description": "이전에 학습한 정보가 새로운 정보의 학습이나 인출을 방해하는 현상"
      },
      {
        "name_ko": "역행간섭",
        "name_en": "Retroactive Interference",
        "description": "새롭게 학습한 정보가 이전에 학습한 정보의 인출을 방해하는 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "간섭 = '전파 간섭'. 여러 라디오 주파수가 서로 방해하듯, 기억들이 서로 방해한다.",
      "differential": "간섭은 기억 '간의 방해'이고, 소멸(decay)은 시간 경과에 따른 '자연적 약화'이다.",
      "key_point": "유사한 정보끼리 간섭이 더 크다. 스페인어를 배운 후 이탈리아어를 배우면 간섭이 심하다.",
      "common_mistake": "간섭과 망각을 동일시하는 것. 간섭은 망각의 원인 중 하나이며, 소멸, 인출 실패 등 다른 원인도 있다."
    }
  },
  {
    "id": "MEMORY_FORGET_017",
    "terminology": "망각곡선 (Forgetting Curve)",
    "terminology_ko": "망각곡선",
    "terminology_en": "Forgetting Curve",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "학습 후 시간이 경과함에 따라 기억의 파지량이 감소하는 양상을 나타내는 곡선이다. Ebbinghaus가 발견한 것으로, 학습 직후 급격히 망각되고 이후 점차 안정되는 특징적인 지수적 감소 패턴을 보인다.",
    "definition_en": "A curve depicting the decline of memory retention over time after learning. Discovered by Ebbinghaus, it shows a characteristic exponential decay pattern with rapid forgetting immediately after learning, followed by gradual stabilization.",
    "significance": "Ebbinghaus(1885)의 망각곡선은 기억 연구 최초의 실증적 실험 결과로, 학습 후 1시간 이내에 약 56%, 하루 후에는 약 66%가 망각됨을 보여주었다. 이는 간격 효과(spacing effect)와 분산 학습의 이론적 근거가 되었다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 에빙하우스",
        "name_en": "Hermann Ebbinghaus",
        "contribution": "무의미 음절(nonsense syllables)을 사용하여 기억과 망각의 시간적 경과를 최초로 실증적으로 측정하고 망각곡선을 도출하였다(1885)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "간섭",
        "name_en": "Interference",
        "id": "MEMORY_INTERF_016"
      },
      {
        "name_ko": "재학습",
        "name_en": "Relearning",
        "id": "MEMORY_RELEARN_025"
      },
      {
        "name_ko": "시연",
        "name_en": "Rehearsal",
        "id": "MEMORY_REHEAR_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "망각곡선 = '에빙하우스 곡선'. 급강하 후 완만해지는 스키 슬로프 모양.",
      "differential": "망각곡선은 '시간에 따른 기억 감소 패턴'을 보여주고, 학습곡선은 '반복에 따른 기억 증가 패턴'을 보여준다.",
      "key_point": "학습 후 1시간 이내에 가장 많이 망각되므로, 학습 직후 첫 번째 복습이 가장 중요하다(분산 학습/간격 반복).",
      "common_mistake": "망각곡선이 모든 유형의 기억에 동일하게 적용된다고 생각하는 것. 의미 있는 자료는 무의미 음절보다 훨씬 느리게 망각된다."
    }
  },
  {
    "id": "MEMORY_MISERR_018",
    "terminology": "기억 오류 (Memory Errors / False Memory)",
    "terminology_ko": "기억 오류",
    "terminology_en": "Memory Errors",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "실제 경험과 다르게 기억하거나, 일어나지 않은 사건을 실제로 경험한 것처럼 기억하는 현상이다. 기억의 재구성적 특성에서 비롯되며, 오정보 효과, 출처 감시 오류 등 다양한 형태로 나타난다.",
    "definition_en": "The phenomenon of remembering events differently from actual experience or remembering events that never occurred as if they actually happened. It stems from the reconstructive nature of memory and manifests in various forms such as the misinformation effect and source monitoring errors.",
    "significance": "Loftus의 연구는 기억이 녹화 테이프처럼 정확하게 재생되는 것이 아니라 재구성되는 과정임을 입증하였다. 이는 목격자 증언의 신뢰성, 억압된 기억 논쟁 등 법심리학적으로 중대한 함의를 가진다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 로프터스",
        "name_en": "Elizabeth Loftus",
        "contribution": "오정보 효과(misinformation effect)와 거짓 기억 이식(lost in the mall) 실험을 통해 기억의 왜곡 가능성을 실증적으로 입증하였다."
      },
      {
        "name_ko": "다니엘 샥터",
        "name_en": "Daniel Schacter",
        "contribution": "'기억의 일곱 가지 죄(Seven Sins of Memory)'를 제안하여 기억 오류의 체계적 분류를 제공하였다(2001)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "초두효과/최신효과",
        "name_en": "Primacy/Recency Effect",
        "id": "MEMORY_SERIAL_019"
      }
    ],
    "sub_types": [
      {
        "name_ko": "오정보 효과",
        "name_en": "Misinformation Effect",
        "description": "사건 후 제시된 오도하는 정보가 원래 기억을 왜곡하는 현상"
      },
      {
        "name_ko": "출처 감시 오류",
        "name_en": "Source Monitoring Error",
        "description": "기억의 출처(어디서, 어떻게 알게 되었는지)를 잘못 귀인하는 오류"
      },
      {
        "name_ko": "거짓 기억",
        "name_en": "False Memory",
        "description": "일어나지 않은 사건을 실제 경험한 것처럼 기억하는 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기억 오류 = '기억은 카메라가 아니다'. 기억은 녹화가 아니라 재구성이다.",
      "differential": "기억 오류는 '비의도적 왜곡'이고, 거짓말은 '의도적 조작'이다. 기억 오류자는 자신의 기억이 정확하다고 확신한다.",
      "key_point": "Loftus의 자동차 충돌 실험: '부딪혔다(hit)' vs. '박살났다(smashed)'라는 질문 단어에 따라 목격 증언이 달라졌다.",
      "common_mistake": "기억 오류가 기억력이 나쁜 사람에게만 발생한다고 생각하는 것. 모든 사람의 기억은 재구성적 특성을 가진다."
    }
  },
  {
    "id": "MEMORY_SERIAL_019",
    "terminology": "초두효과/최신효과 (Primacy Effect / Recency Effect)",
    "terminology_ko": "초두효과/최신효과",
    "terminology_en": "Primacy Effect / Recency Effect",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "계열위치 효과(serial position effect)의 두 구성 요소이다. 초두효과는 목록의 처음 항목이, 최신효과는 목록의 마지막 항목이 중간 항목보다 더 잘 기억되는 현상이다.",
    "definition_en": "Two components of the serial position effect. The primacy effect is the tendency to better remember items at the beginning of a list, while the recency effect is the tendency to better remember items at the end, both compared to middle items.",
    "significance": "계열위치 효과는 Atkinson-Shiffrin의 다중저장소 모형을 지지하는 핵심 증거이다. 초두효과는 장기기억으로의 전환(충분한 시연 기회)으로, 최신효과는 단기기억에서의 즉각 인출로 설명된다. Murdock(1962)의 자유회상 실험이 대표적이다.",
    "key_researchers": [
      {
        "name_ko": "벤넷 머독",
        "name_en": "Bennet Murdock",
        "contribution": "자유회상 과제에서 계열위치 효과를 체계적으로 실험, 문서화하였다(1962)."
      },
      {
        "name_ko": "머리 글랜저",
        "name_en": "Murray Glanzer",
        "contribution": "Anita Cunitz와 함께 지연 조건에서 최신효과가 사라지는 것을 보여 이중저장 모형을 지지하였다(1966)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단기기억",
        "name_en": "Short-Term Memory",
        "id": "MEMORY_STM_005"
      },
      {
        "name_ko": "장기기억",
        "name_en": "Long-Term Memory",
        "id": "MEMORY_LTM_006"
      },
      {
        "name_ko": "시연",
        "name_en": "Rehearsal",
        "id": "MEMORY_REHEAR_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "초두효과 = '첫인상'. 최신효과 = '마지막 인상'. U자형 곡선으로 기억한다.",
      "differential": "초두효과는 장기기억 기반(충분한 시연), 최신효과는 단기기억 기반(아직 단기기억에 남아 있음).",
      "key_point": "방해 과제(지연 인출)를 주면 최신효과는 사라지지만 초두효과는 유지된다 → 두 효과의 기반이 다름을 증명.",
      "common_mistake": "초두효과와 최신효과가 같은 메커니즘에 의한 것이라고 생각하는 것. 각각 장기기억과 단기기억에 기반한다."
    }
  },
  {
    "id": "MEMORY_PRIME_020",
    "terminology": "점화효과 (Priming Effect)",
    "terminology_ko": "점화효과",
    "terminology_en": "Priming Effect",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "선행 자극(점화 자극)에 대한 노출이 후속 자극의 처리를 촉진하거나 억제하는 현상이다. 의식적 자각 없이도 발생하며, 암묵기억의 대표적 증거이다.",
    "definition_en": "A phenomenon in which exposure to a prior stimulus (prime) facilitates or inhibits the processing of a subsequent stimulus. It occurs without conscious awareness and is a primary demonstration of implicit memory.",
    "significance": "점화효과는 기억이 반드시 의식적 회상을 수반하지 않음을 보여주는 핵심 증거이다. 기억상실 환자에서도 점화효과가 보존되는 것은 명시적 기억과 암묵적 기억의 독립적 신경 체계를 지지한다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 샥터",
        "name_en": "Daniel Schacter",
        "contribution": "점화효과와 암묵기억 연구를 통해 기억의 무의식적 측면을 체계적으로 연구하였다."
      },
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "Daniel Schacter와 함께 점화효과가 독립적 기억 체계에 의존함을 주장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "암묵기억",
        "name_en": "Implicit Memory",
        "id": "MEMORY_IMPL_030"
      },
      {
        "name_ko": "의미기억",
        "name_en": "Semantic Memory",
        "id": "MEMORY_SEMAN_015"
      },
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      }
    ],
    "sub_types": [
      {
        "name_ko": "반복 점화",
        "name_en": "Repetition Priming",
        "description": "동일한 자극에 반복 노출되어 처리가 촉진되는 현상"
      },
      {
        "name_ko": "의미 점화",
        "name_en": "Semantic Priming",
        "description": "의미적으로 관련된 자극에 의해 처리가 촉진되는 현상(예: '의사' → '간호사')"
      }
    ],
    "quiz_hints": {
      "mnemonic": "점화 = '불을 붙이다(prime the pump)'. 먼저 본 것이 다음 반응에 '불을 지핀다'.",
      "differential": "점화효과는 '무의식적' 기억 영향이고, 회상이나 재인은 '의식적' 기억 인출이다.",
      "key_point": "'노란'이라는 단어를 본 후 '바나나'를 더 빨리 인식하는 것이 의미 점화의 예이다.",
      "common_mistake": "점화를 의식적인 연상과 동일시하는 것. 점화는 의식적 자각 없이 자동적으로 발생한다."
    }
  },
  {
    "id": "MEMORY_PI_021",
    "terminology": "순행간섭 (Proactive Interference)",
    "terminology_ko": "순행간섭",
    "terminology_en": "Proactive Interference",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "이전에 학습한 정보가 새로운 정보의 학습이나 인출을 방해하는 현상이다. 오래된 기억이 새 기억을 '앞으로(proactive)' 간섭한다.",
    "definition_en": "A phenomenon in which previously learned information interferes with the learning or retrieval of new information. Old memories interfere 'forward' (proactively) with new memories.",
    "significance": "Underwood(1957)는 이전에 학습한 목록의 수가 많을수록 새 목록의 망각률이 높아짐을 발견하여, 순행간섭이 일상적 망각의 주요 원인임을 입증하였다. 이는 누적 학습 상황에서의 망각 원인을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "벤턴 언더우드",
        "name_en": "Benton Underwood",
        "contribution": "이전 학습 횟수와 망각률의 관계를 체계적으로 연구하여 순행간섭이 일상 망각의 주요 원인임을 밝혔다(1957)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역행간섭",
        "name_en": "Retroactive Interference",
        "id": "MEMORY_RI_022"
      },
      {
        "name_ko": "간섭",
        "name_en": "Interference",
        "id": "MEMORY_INTERF_016"
      },
      {
        "name_ko": "망각곡선",
        "name_en": "Forgetting Curve",
        "id": "MEMORY_FORGET_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "순행간섭 = '선배가 후배를 괴롭힘'. 먼저(순) 학습한 것이 나중 학습을 행(行)하여 방해.",
      "differential": "순행간섭은 '옛 → 새' 방향의 방해, 역행간섭은 '새 → 옛' 방향의 방해.",
      "key_point": "예: 옛 전화번호가 자꾸 떠올라서 새 전화번호를 외우기 어려운 경우.",
      "common_mistake": "순행간섭과 역행간섭의 방향을 혼동하는 것. '순행 = 앞으로(과거→현재)', '역행 = 뒤로(현재→과거)'."
    }
  },
  {
    "id": "MEMORY_RI_022",
    "terminology": "역행간섭 (Retroactive Interference)",
    "terminology_ko": "역행간섭",
    "terminology_en": "Retroactive Interference",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "새롭게 학습한 정보가 이전에 학습한 정보의 인출을 방해하는 현상이다. 새 기억이 옛 기억을 '뒤로(retroactive)' 간섭한다.",
    "definition_en": "A phenomenon in which newly learned information interferes with the retrieval of previously learned information. New memories interfere 'backward' (retroactively) with old memories.",
    "significance": "Müller와 Pilzecker(1900)가 역행간섭 현상을 처음 보고한 이래, 이는 기억 통합(consolidation) 과정의 취약성을 보여주는 증거로 활용되었다. 수면 직전 학습이 효과적인 이유도 역행간섭 감소로 설명된다.",
    "key_researchers": [
      {
        "name_ko": "게오르크 뮐러",
        "name_en": "Georg Müller",
        "contribution": "Alfons Pilzecker와 함께 역행간섭 현상을 최초로 실험적으로 보고하였다(1900)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "순행간섭",
        "name_en": "Proactive Interference",
        "id": "MEMORY_PI_021"
      },
      {
        "name_ko": "간섭",
        "name_en": "Interference",
        "id": "MEMORY_INTERF_016"
      },
      {
        "name_ko": "저장",
        "name_en": "Storage",
        "id": "MEMORY_STORE_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역행간섭 = '후배가 선배를 괴롭힘'. 나중에 학습한 것이 이전 학습을 역(逆)행하여 방해.",
      "differential": "역행간섭은 '새 → 옛' 방향의 방해, 순행간섭은 '옛 → 새' 방향의 방해.",
      "key_point": "예: 새 비밀번호를 외운 후 이전 비밀번호가 생각나지 않는 경우. 수면이 역행간섭을 줄여주어 학습에 유리하다.",
      "common_mistake": "역행간섭이 이전 기억을 '삭제'한다고 생각하는 것. 기억 자체는 남아 있되 인출이 방해받는 것이다."
    }
  },
  {
    "id": "MEMORY_RECOG_023",
    "terminology": "재인 (Recognition)",
    "terminology_ko": "재인",
    "terminology_en": "Recognition",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "이전에 접한 정보를 다시 제시받았을 때 그것이 이전에 경험한 것임을 식별하는 기억 인출 방식이다. 회상보다 일반적으로 더 쉽고 정확하다.",
    "definition_en": "A mode of memory retrieval in which previously encountered information is identified as familiar when presented again. It is generally easier and more accurate than recall.",
    "significance": "재인은 회상에 비해 인출 단서가 풍부하게 제공되므로 더 쉽다는 점에서 기억의 부호화-인출 관계를 이해하는 데 중요한 개념이다. 객관식 시험이 주관식보다 쉬운 이유가 재인과 회상의 차이로 설명된다.",
    "key_researchers": [
      {
        "name_ko": "존 앤더슨",
        "name_en": "John Anderson",
        "contribution": "ACT-R 이론을 통해 재인과 회상의 인지적 차이를 모형화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "회상",
        "name_en": "Recall",
        "id": "MEMORY_RECALL_024"
      },
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "재학습",
        "name_en": "Relearning",
        "id": "MEMORY_RELEARN_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재인 = '다시(再) 알아보기(認)'. 얼굴을 보고 '아, 이 사람 본 적 있다!'고 느끼는 것.",
      "differential": "재인은 '제시된 것을 알아보기(객관식)', 회상은 '스스로 떠올리기(주관식)'.",
      "key_point": "재인 > 회상 > 재학습 순으로 기억 측정의 민감도가 다르다. 재학습이 가장 민감한 기억 측정법이다.",
      "common_mistake": "재인을 완전한 기억과 동일시하는 것. 재인은 '친숙함' 수준일 수 있으며 세부 사항을 기억하지 못할 수 있다."
    }
  },
  {
    "id": "MEMORY_RECALL_024",
    "terminology": "회상 (Recall)",
    "terminology_ko": "회상",
    "terminology_en": "Recall",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "외부 단서 없이 또는 최소한의 단서만으로 저장된 정보를 능동적으로 인출하여 재생하는 기억 인출 방식이다. 자유회상, 단서회상, 계열회상 등으로 구분된다.",
    "definition_en": "A mode of memory retrieval in which stored information is actively reproduced with no or minimal external cues. It is divided into free recall, cued recall, and serial recall.",
    "significance": "회상은 재인보다 더 깊은 수준의 기억 처리를 반영하므로 기억 강도의 중요한 지표가 된다. 시험에서 주관식(회상) 문제가 객관식(재인)보다 어려운 이유가 여기에 있다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 에빙하우스",
        "name_en": "Hermann Ebbinghaus",
        "contribution": "체계적인 회상 실험을 통해 망각곡선을 도출한 기억 연구의 선구자이다."
      },
      {
        "name_ko": "엔델 툴빙",
        "name_en": "Endel Tulving",
        "contribution": "단서회상과 부호화 특수성 원리의 관계를 규명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "재인",
        "name_en": "Recognition",
        "id": "MEMORY_RECOG_023"
      },
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "재학습",
        "name_en": "Relearning",
        "id": "MEMORY_RELEARN_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "자유회상",
        "name_en": "Free Recall",
        "description": "단서 없이 순서에 관계없이 기억나는 대로 인출하는 방식"
      },
      {
        "name_ko": "단서회상",
        "name_en": "Cued Recall",
        "description": "특정 단서가 주어진 상태에서 관련 정보를 인출하는 방식"
      },
      {
        "name_ko": "계열회상",
        "name_en": "Serial Recall",
        "description": "정보를 학습된 순서대로 인출하는 방식"
      }
    ],
    "quiz_hints": {
      "mnemonic": "회상 = '돌이켜 생각하기'. 주관식 시험처럼 답을 스스로 떠올려야 한다.",
      "differential": "회상은 '스스로 만들어내기(주관식)', 재인은 '보기에서 골라내기(객관식)'.",
      "key_point": "회상은 재인보다 어렵지만, 학습 시 회상 연습(인출 연습)을 하면 기억이 더 강화된다(시험 효과/testing effect).",
      "common_mistake": "회상하지 못하면 기억이 완전히 사라진 것이라고 생각하는 것. 재인이나 재학습으로 확인하면 잔존 기억이 있을 수 있다."
    }
  },
  {
    "id": "MEMORY_RELEARN_025",
    "terminology": "재학습 (Relearning / Savings Method)",
    "terminology_ko": "재학습",
    "terminology_en": "Relearning",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "이전에 학습한 내용을 다시 학습할 때 처음 학습할 때보다 시간과 시행 횟수가 적게 드는 현상이다. 절약법(savings method)이라고도 하며, 가장 민감한 기억 측정법으로 간주된다.",
    "definition_en": "The phenomenon in which relearning previously studied material requires less time and fewer trials than original learning. Also called the savings method, it is considered the most sensitive measure of memory retention.",
    "significance": "Ebbinghaus가 고안한 절약법은 회상이나 재인으로는 탐지할 수 없는 잔존 기억의 흔적까지 측정할 수 있는 가장 민감한 기억 측정 방법이다. 이는 '완전히 잊었다'고 느끼는 정보에도 기억의 흔적이 남아 있음을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 에빙하우스",
        "name_en": "Hermann Ebbinghaus",
        "contribution": "절약법(savings method)을 고안하여 기억 파지량을 정량적으로 측정하는 방법을 최초로 개발하였다(1885)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "망각곡선",
        "name_en": "Forgetting Curve",
        "id": "MEMORY_FORGET_017"
      },
      {
        "name_ko": "회상",
        "name_en": "Recall",
        "id": "MEMORY_RECALL_024"
      },
      {
        "name_ko": "재인",
        "name_en": "Recognition",
        "id": "MEMORY_RECOG_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재학습 = '두 번째는 더 빠르다'. 한번 배운 건 다시 배울 때 훨씬 빨리 익힌다.",
      "differential": "재학습(절약법)은 기억 측정의 세 가지 방법(회상, 재인, 재학습) 중 가장 민감한 측정법이다.",
      "key_point": "절약률 = (최초 학습 시행 - 재학습 시행) / 최초 학습 시행 × 100. 높을수록 잔존 기억이 많다.",
      "common_mistake": "재학습이 단순히 '복습'과 같다고 생각하는 것. 재학습은 기억 측정 방법론으로서의 의미가 핵심이다."
    }
  },
  {
    "id": "MEMORY_MNEM_026",
    "terminology": "기억술 (Mnemonics)",
    "terminology_ko": "기억술",
    "terminology_en": "Mnemonics",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정보를 보다 효율적으로 부호화하고 인출하기 위해 사용하는 체계적인 기억 보조 전략의 총칭이다. 이미지, 두문자어, 운율, 장소법 등 다양한 기법이 포함된다.",
    "definition_en": "A collective term for systematic memory-aiding strategies used to encode and retrieve information more efficiently. It includes various techniques such as imagery, acronyms, rhymes, and the method of loci.",
    "significance": "기억술은 고대 그리스 시대부터 사용된 가장 오래된 기억 전략으로, 정교화 부호화의 원리에 기반한다. 기억력 대회 챔피언들의 탁월한 수행은 선천적 능력보다 기억술 훈련의 결과임이 밝혀져, 기억 향상의 가능성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "앨런 패비오",
        "name_en": "Allan Paivio",
        "contribution": "이중 부호화 이론(Dual Coding Theory)을 제안하여 시각 이미지와 언어의 결합이 기억을 강화하는 메커니즘을 설명하였다(1971)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정교화 부호화",
        "name_en": "Elaborative Encoding",
        "id": "MEMORY_ELAB_010"
      },
      {
        "name_ko": "청킹",
        "name_en": "Chunking",
        "id": "MEMORY_CHUNK_008"
      },
      {
        "name_ko": "장소법",
        "name_en": "Method of Loci",
        "id": "MEMORY_LOCI_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "두문자어법",
        "name_en": "Acronym Method",
        "description": "각 항목의 첫 글자를 조합하여 기억하는 방법(예: 무지개색 = 'ROY G. BIV')"
      },
      {
        "name_ko": "핵심어법",
        "name_en": "Keyword Method",
        "description": "외국어 학습 시 발음이 유사한 모국어 단어를 매개로 이미지를 형성하는 방법"
      },
      {
        "name_ko": "이야기법",
        "name_en": "Narrative Method",
        "description": "기억할 항목들을 하나의 이야기로 엮어 기억하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기억술(Mnemonics) = 그리스 기억의 여신 므네모시네(Mnemosyne)에서 유래.",
      "differential": "기억술은 부호화 '전략'이고, 기억 자체는 인지적 '과정'이다.",
      "key_point": "효과적인 기억술은 정교화 부호화(의미 연결)와 이중 부호화(시각+언어)의 원리에 기반한다.",
      "common_mistake": "기억술이 기억 용량 자체를 증가시킨다고 생각하는 것. 기억술은 부호화와 인출의 효율성을 높이는 것이다."
    }
  },
  {
    "id": "MEMORY_LOCI_027",
    "terminology": "장소법 (Method of Loci)",
    "terminology_ko": "장소법",
    "terminology_en": "Method of Loci",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "친숙한 장소(집, 통학로 등)의 특정 위치에 기억할 항목을 시각적으로 배치한 후, 그 경로를 따라 걸으며 항목을 인출하는 기억술이다. '기억의 궁전(memory palace)'이라고도 불린다.",
    "definition_en": "A mnemonic technique in which items to be remembered are visually placed at specific locations along a familiar route (home, commute, etc.), and then mentally walked through to retrieve the items. Also known as the 'memory palace.'",
    "significance": "장소법은 고대 그리스의 시인 시모니데스에게서 유래한 가장 오래된 기억술로, 공간 기억과 시각 이미지의 결합이 기억을 강화한다는 원리에 기반한다. 현대 기억력 대회 챔피언들이 가장 많이 사용하는 기법이다.",
    "key_researchers": [
      {
        "name_ko": "시모니데스",
        "name_en": "Simonides of Ceos",
        "contribution": "고대 그리스의 시인으로, 연회장 붕괴 사건에서 자리 위치로 시신을 식별한 일화가 장소법의 기원으로 전해진다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기억술",
        "name_en": "Mnemonics",
        "id": "MEMORY_MNEM_026"
      },
      {
        "name_ko": "정교화 부호화",
        "name_en": "Elaborative Encoding",
        "id": "MEMORY_ELAB_010"
      },
      {
        "name_ko": "맥락의존 기억",
        "name_en": "Context-Dependent Memory",
        "id": "MEMORY_CTXDEP_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "장소법 = '기억의 궁전'. 익숙한 장소를 따라 걸으며 기억할 것들을 배치하는 상상.",
      "differential": "장소법은 '공간+이미지' 기반, 두문자어법은 '언어' 기반의 기억술이다.",
      "key_point": "장소법은 공간 기억(해마 의존)과 시각 이미지의 결합으로 강력한 기억 효과를 만든다.",
      "common_mistake": "장소법을 사용하려면 실제 그 장소에 가야 한다고 생각하는 것. 상상만으로 충분히 효과적이다."
    }
  },
  {
    "id": "MEMORY_STDEP_028",
    "terminology": "상태의존 기억 (State-Dependent Memory)",
    "terminology_ko": "상태의존 기억",
    "terminology_en": "State-Dependent Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정보 부호화 시의 내적 생리적 또는 심리적 상태(기분, 각성 수준, 약물 상태 등)가 인출 시에도 동일할 때 기억이 더 잘 되는 현상이다.",
    "definition_en": "The phenomenon in which memory retrieval is enhanced when the internal physiological or psychological state (mood, arousal level, drug state, etc.) at retrieval matches that during encoding.",
    "significance": "Goodwin 등(1969)의 알코올 상태의존 기억 실험, Bower(1981)의 기분일치 기억 연구 등이 상태의존 효과를 입증하였다. 이는 부호화 특수성 원리의 내적 맥락 버전으로 이해되며, 우울증의 기억 편향 등 임상적 현상 설명에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "도널드 굿윈",
        "name_en": "Donald Goodwin",
        "contribution": "알코올 상태에서 학습한 정보가 동일한 알코올 상태에서 더 잘 인출됨을 실험적으로 보여주었다(1969)."
      },
      {
        "name_ko": "고든 바워",
        "name_en": "Gordon Bower",
        "contribution": "기분일치 기억(mood-congruent memory) 연구를 통해 정서 상태와 기억의 관계를 체계적으로 연구하였다(1981)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "맥락의존 기억",
        "name_en": "Context-Dependent Memory",
        "id": "MEMORY_CTXDEP_011"
      },
      {
        "name_ko": "인출",
        "name_en": "Retrieval",
        "id": "MEMORY_RETRIEV_003"
      },
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상태의존 = '같은 상태에서 더 잘 기억'. 커피 마시고 공부하면, 커피 마시고 시험 볼 때 더 잘 기억.",
      "differential": "상태의존은 '내적 상태(기분, 약물)' 일치, 맥락의존은 '외부 환경(장소, 소리)' 일치.",
      "key_point": "기분일치 기억: 슬플 때는 슬픈 기억이, 기쁠 때는 기쁜 기억이 더 잘 떠오른다.",
      "common_mistake": "상태의존과 맥락의존을 구분하지 못하는 것. 상태 = 내부(기분, 약물), 맥락 = 외부(환경, 장소)."
    }
  },
  {
    "id": "MEMORY_FLASH_029",
    "terminology": "섬광기억 (Flashbulb Memory)",
    "terminology_ko": "섬광기억",
    "terminology_en": "Flashbulb Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "정서적으로 매우 강렬하고 놀랍거나 중대한 사건이 발생한 순간의 상황(장소, 활동, 감정 등)을 사진처럼 선명하게 기억하는 현상이다. 그러나 그 정확성은 과대평가되는 경향이 있다.",
    "definition_en": "The vivid, photograph-like memory of the circumstances (place, activity, emotions, etc.) at the moment when a highly emotional, surprising, or significant event occurred. However, its accuracy tends to be overestimated.",
    "significance": "Brown과 Kulik(1977)이 섬광기억 개념을 최초로 제안한 이후, 9/11 테러 등 대형 사건에 대한 후속 연구들은 섬광기억의 생생함과 정확성이 반드시 일치하지 않음을 보여주었다. 이는 정서와 기억의 관계, 기억의 재구성적 특성을 이해하는 데 중요한 사례이다.",
    "key_researchers": [
      {
        "name_ko": "로저 브라운",
        "name_en": "Roger Brown",
        "contribution": "James Kulik과 함께 섬광기억(flashbulb memory) 개념을 최초로 제안하고 명명하였다(1977)."
      },
      {
        "name_ko": "제임스 쿨릭",
        "name_en": "James Kulik",
        "contribution": "Brown과 함께 케네디 대통령 암살 사건에 대한 기억 연구를 통해 섬광기억 이론을 공동 발표하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일화기억",
        "name_en": "Episodic Memory",
        "id": "MEMORY_EPIS_014"
      },
      {
        "name_ko": "기억 오류",
        "name_en": "Memory Errors",
        "id": "MEMORY_MISERR_018"
      },
      {
        "name_ko": "부호화",
        "name_en": "Encoding",
        "id": "MEMORY_ENCODE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "섬광기억 = '카메라 플래시'. 강렬한 순간을 찍은 사진처럼 선명하게 기억.",
      "differential": "섬광기억은 '생생함에 대한 주관적 확신'이 특징이지만, '정확성'은 보장되지 않는다.",
      "key_point": "9/11 연구: 사람들은 그 순간의 기억이 매우 정확하다고 확신했지만, 실제 세부 내용은 시간이 지나면서 상당히 변했다.",
      "common_mistake": "섬광기억이 사진처럼 정확하다고 생각하는 것. 생생하게 느껴지지만 실제로는 왜곡과 재구성이 발생한다."
    }
  },
  {
    "id": "MEMORY_IMPL_030",
    "terminology": "암묵기억 (Implicit Memory)",
    "terminology_ko": "암묵기억",
    "terminology_en": "Implicit Memory",
    "category": "MEMORY",
    "category_name": "기억 (Memory)",
    "definition": "의식적 자각이나 의도적 회상 없이 이전 경험이 현재의 행동이나 수행에 영향을 미치는 기억이다. 절차기억, 점화효과, 고전적 조건화 등이 포함된다.",
    "definition_en": "Memory in which previous experiences influence current behavior or performance without conscious awareness or intentional recollection. It includes procedural memory, priming, and classical conditioning.",
    "significance": "Graf와 Schacter(1985)가 명시적/암묵적 기억의 구분을 명확히 한 이래, 이 개념은 기억상실 환자 연구에서 핵심적 역할을 하였다. 해마 손상 환자에서 암묵기억이 보존됨은 기억이 단일 체계가 아닌 다중 체계로 구성됨을 입증하는 결정적 증거이다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 샥터",
        "name_en": "Daniel Schacter",
        "contribution": "Peter Graf와 함께 명시적(explicit) 기억과 암묵적(implicit) 기억의 구분을 명확히 하였다(1985)."
      },
      {
        "name_ko": "피터 그라프",
        "name_en": "Peter Graf",
        "contribution": "Schacter와 함께 기억상실 환자에서 암묵기억이 보존됨을 실험적으로 입증하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서술기억",
        "name_en": "Declarative Memory",
        "id": "MEMORY_DECL_012"
      },
      {
        "name_ko": "절차기억",
        "name_en": "Procedural Memory",
        "id": "MEMORY_PROC_013"
      },
      {
        "name_ko": "점화효과",
        "name_en": "Priming Effect",
        "id": "MEMORY_PRIME_020"
      }
    ],
    "sub_types": [
      {
        "name_ko": "절차기억",
        "name_en": "Procedural Memory",
        "description": "운동 기술과 인지적 절차에 대한 무의식적 기억"
      },
      {
        "name_ko": "점화",
        "name_en": "Priming",
        "description": "선행 자극에 대한 노출이 후속 처리에 무의식적으로 영향을 미치는 현상"
      },
      {
        "name_ko": "고전적 조건화",
        "name_en": "Classical Conditioning",
        "description": "학습된 자극-반응 연합이 무의식적으로 유지되는 기억"
      }
    ],
    "quiz_hints": {
      "mnemonic": "암묵기억 = '숨겨진(암묵적) 기억'. 의식하지 못하지만 행동에 영향을 미친다.",
      "differential": "암묵기억은 '무의식적' 기억(행동으로 드러남), 외현기억(서술기억)은 '의식적' 기억(말로 표현 가능).",
      "key_point": "기억상실 환자도 절차기억과 점화효과는 정상적으로 보여, 암묵기억과 외현기억이 별도 체계임을 증명한다.",
      "common_mistake": "암묵기억을 '약한 기억' 또는 '잘 기억 못하는 것'으로 혼동하는 것. 암묵기억은 매우 강하고 지속적이다."
    }
  }
];

TERMS_DATA.COGN = [
  {
    "id": "COGN_CONCEPT_001",
    "terminology": "개념 (Concept)",
    "terminology_ko": "개념",
    "terminology_en": "Concept",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "공통된 속성을 가진 대상, 사건, 아이디어 등을 하나의 범주로 묶어주는 심적 표상으로, 사고의 기본 단위이다",
    "definition_en": "A mental grouping of similar objects, events, ideas, or people that share common properties, serving as the building blocks of thinking",
    "significance": "개념은 인지적 경제성을 제공하여, 매번 새로운 자극을 처음부터 분석하지 않고도 세상을 효율적으로 이해하고 범주화할 수 있게 한다",
    "key_researchers": [
      {
        "name_ko": "엘리너 로쉬",
        "name_en": "Eleanor Rosch",
        "contribution": "자연 범주의 내적 구조와 원형이론을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Prototype",
        "id": "COGN_PROTO_002"
      },
      {
        "name_ko": "범주화",
        "name_en": "Categorization",
        "id": "COGN_CATEG_003"
      }
    ],
    "sub_types": [
      {
        "name_ko": "자연 개념",
        "name_en": "Natural Concept",
        "definition": "일상 경험에서 자연스럽게 형성되며 경계가 모호한 개념"
      },
      {
        "name_ko": "인공 개념",
        "name_en": "Artificial Concept",
        "definition": "명확한 규칙이나 특성에 의해 정의되는 개념"
      }
    ],
    "quiz_hints": {
      "mnemonic": "개념 = 생각의 폴더: 비슷한 것끼리 묶어 정리하는 머릿속 파일 시스템",
      "differential": "개념은 범주 자체를 의미하고, 원형은 그 범주의 가장 전형적인 사례를 의미한다",
      "key_point": "개념 형성은 추상화 과정이며, 사고의 효율성을 위해 필수적이다",
      "common_mistake": "개념을 단순한 단어의 의미로 한정하는 것 — 개념은 언어 이전에도 존재하는 심적 표상이다"
    }
  },
  {
    "id": "COGN_PROTO_002",
    "terminology": "원형 (Prototype)",
    "terminology_ko": "원형",
    "terminology_en": "Prototype",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "특정 범주를 가장 잘 대표하는 전형적인 사례로, 범주 판단의 기준점 역할을 한다",
    "definition_en": "The best or most typical example of a particular category, used as a cognitive reference point for categorization judgments",
    "significance": "원형이론은 인간이 범주를 고전적 정의가 아닌 유사성에 기반하여 판단한다는 것을 보여주며, 인지심리학의 범주화 연구에 핵심적 토대를 제공한다",
    "key_researchers": [
      {
        "name_ko": "엘리너 로쉬",
        "name_en": "Eleanor Rosch",
        "contribution": "원형이론을 제안하고, 범주 구성원 간 전형성 등급이 존재함을 실증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개념",
        "name_en": "Concept",
        "id": "COGN_CONCEPT_001"
      },
      {
        "name_ko": "전형성 효과",
        "name_en": "Typicality Effect",
        "id": "COGN_TYPIC_004"
      },
      {
        "name_ko": "범주화",
        "name_en": "Categorization",
        "id": "COGN_CATEG_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'새'의 원형 = 참새(전형적) vs. 펭귄(비전형적)",
      "differential": "원형은 '가장 전형적인 사례'이고, 본보기(exemplar)는 '실제 기억된 개별 사례'이다",
      "key_point": "원형에 가까울수록 범주 판단이 빠르고 정확하다",
      "common_mistake": "원형이 범주의 평균이라고 생각하는 것 — 원형은 가장 전형적인 사례이지 통계적 평균이 아니다"
    }
  },
  {
    "id": "COGN_CATEG_003",
    "terminology": "범주화 (Categorization)",
    "terminology_ko": "범주화",
    "terminology_en": "Categorization",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "대상이나 사건을 공통 속성에 따라 범주로 분류하는 인지 과정으로, 복잡한 세상을 단순화하여 이해할 수 있게 한다",
    "definition_en": "The cognitive process of classifying objects or events into categories based on shared features, simplifying the complexity of the world for efficient understanding",
    "significance": "범주화는 인지적 경제성의 핵심으로, 새로운 자극을 기존 지식 구조에 연결하여 빠른 추론과 예측을 가능하게 한다",
    "key_researchers": [
      {
        "name_ko": "엘리너 로쉬",
        "name_en": "Eleanor Rosch",
        "contribution": "기본 수준 범주(basic-level category)의 인지적 우위를 밝혀냈다"
      },
      {
        "name_ko": "제롬 브루너",
        "name_en": "Jerome Bruner",
        "contribution": "개념 형성 전략에 관한 초기 실험적 연구를 수행하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개념",
        "name_en": "Concept",
        "id": "COGN_CONCEPT_001"
      },
      {
        "name_ko": "원형",
        "name_en": "Prototype",
        "id": "COGN_PROTO_002"
      },
      {
        "name_ko": "전형성 효과",
        "name_en": "Typicality Effect",
        "id": "COGN_TYPIC_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "상위 범주",
        "name_en": "Superordinate Category",
        "definition": "가장 넓은 범위의 범주 (예: 동물)"
      },
      {
        "name_ko": "기본 수준 범주",
        "name_en": "Basic-Level Category",
        "definition": "일상적으로 가장 자주 사용되는 범주 (예: 개)"
      },
      {
        "name_ko": "하위 범주",
        "name_en": "Subordinate Category",
        "definition": "가장 구체적인 범주 (예: 골든 리트리버)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "범주화 = 머릿속 서랍장 정리: 비슷한 것끼리 같은 서랍에",
      "differential": "범주화는 '분류 과정'이고, 개념은 '분류의 결과물(심적 표상)'이다",
      "key_point": "기본 수준 범주(예: '의자')가 인지적으로 가장 효율적이며 가장 먼저 습득된다",
      "common_mistake": "범주화가 항상 의식적 과정이라고 생각하는 것 — 대부분 자동적으로 일어난다"
    }
  },
  {
    "id": "COGN_TYPIC_004",
    "terminology": "전형성 효과 (Typicality Effect)",
    "terminology_ko": "전형성 효과",
    "terminology_en": "Typicality Effect",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "범주의 전형적인 구성원이 비전형적인 구성원보다 더 빠르고 정확하게 범주에 속하는 것으로 판단되는 현상이다",
    "definition_en": "The phenomenon that typical members of a category are recognized more quickly and accurately as belonging to that category than atypical members",
    "significance": "인간의 범주 표상이 고정된 정의가 아니라 등급화된 구조를 가지고 있음을 보여주며, 원형이론의 핵심 증거이다",
    "key_researchers": [
      {
        "name_ko": "엘리너 로쉬",
        "name_en": "Eleanor Rosch",
        "contribution": "범주 구성원의 전형성 등급을 실험적으로 측정하고 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Prototype",
        "id": "COGN_PROTO_002"
      },
      {
        "name_ko": "범주화",
        "name_en": "Categorization",
        "id": "COGN_CATEG_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'새'라고 하면 참새가 먼저 떠오르는 이유 = 전형성 효과",
      "differential": "전형성 효과는 '반응 속도/정확도의 차이'이고, 원형은 '가장 전형적인 사례 자체'이다",
      "key_point": "전형적 구성원일수록 범주 판단이 빠르다 — 이는 범주 구조가 등급화되어 있음을 시사한다",
      "common_mistake": "전형성이 빈도와 동일하다고 생각하는 것 — 빈도도 영향을 주지만 전형성은 속성의 대표성에 더 관련된다"
    }
  },
  {
    "id": "COGN_ALGO_005",
    "terminology": "알고리즘 (Algorithm)",
    "terminology_ko": "알고리즘",
    "terminology_en": "Algorithm",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "문제 해결을 보장하는 체계적이고 논리적인 절차로, 모든 가능한 해결책을 단계적으로 탐색한다",
    "definition_en": "A methodical, logical rule or procedure that guarantees solving a particular problem by exhaustively exploring all possible solutions step by step",
    "significance": "알고리즘은 정확한 해답을 보장하지만 시간과 자원이 많이 소요되므로, 인간은 일상에서 이보다 휴리스틱에 더 많이 의존한다",
    "key_researchers": [
      {
        "name_ko": "앨런 뉴웰",
        "name_en": "Allen Newell",
        "contribution": "허버트 사이먼과 함께 인간의 문제 해결 과정을 정보처리 관점에서 분석하였다"
      },
      {
        "name_ko": "허버트 사이먼",
        "name_en": "Herbert Simon",
        "contribution": "제한된 합리성 개념을 통해 인간이 알고리즘 대신 휴리스틱을 사용하는 이유를 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발견법(휴리스틱)",
        "name_en": "Heuristic",
        "id": "COGN_HEUR_006"
      },
      {
        "name_ko": "문제해결 전략",
        "name_en": "Problem-Solving Strategy",
        "id": "COGN_PROBSOLV_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "알고리즘 = 모든 열쇠를 하나씩 다 시도해서 반드시 문을 여는 방법",
      "differential": "알고리즘은 해답을 '보장'하지만 느리고, 휴리스틱은 '빠르지만' 오류 가능성이 있다",
      "key_point": "알고리즘 vs. 휴리스틱 비교는 시험 단골 문제이다",
      "common_mistake": "알고리즘이 항상 효율적이라고 생각하는 것 — 복잡한 문제에서는 비현실적으로 오래 걸릴 수 있다"
    }
  },
  {
    "id": "COGN_HEUR_006",
    "terminology": "발견법/휴리스틱 (Heuristic)",
    "terminology_ko": "발견법",
    "terminology_en": "Heuristic",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "빠른 판단과 의사결정을 가능하게 하는 간편한 심적 지름길로, 대체로 유용하지만 체계적 오류(편향)를 유발할 수 있다",
    "definition_en": "A simple thinking strategy or mental shortcut that allows quick judgments and decisions; generally useful but can lead to systematic errors (biases)",
    "significance": "인간이 제한된 인지 자원으로 복잡한 세상에서 효율적으로 판단하는 방식을 설명하며, 행동경제학과 의사결정 연구의 핵심 개념이다",
    "key_researchers": [
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "아모스 트버스키와 함께 휴리스틱과 편향 연구 프로그램을 개척하였다"
      },
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "카너먼과 함께 가용성, 대표성, 앵커링 휴리스틱을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알고리즘",
        "name_en": "Algorithm",
        "id": "COGN_ALGO_005"
      },
      {
        "name_ko": "가용성 휴리스틱",
        "name_en": "Availability Heuristic",
        "id": "COGN_AVAIL_007"
      },
      {
        "name_ko": "대표성 휴리스틱",
        "name_en": "Representativeness Heuristic",
        "id": "COGN_REPRES_008"
      }
    ],
    "sub_types": [
      {
        "name_ko": "가용성 휴리스틱",
        "name_en": "Availability Heuristic",
        "definition": "쉽게 떠오르는 사례에 기반하여 빈도나 확률을 판단하는 방법"
      },
      {
        "name_ko": "대표성 휴리스틱",
        "name_en": "Representativeness Heuristic",
        "definition": "특정 원형이나 범주와의 유사성에 기반하여 판단하는 방법"
      },
      {
        "name_ko": "앵커링과 조정",
        "name_en": "Anchoring and Adjustment",
        "definition": "초기 기준점에서 출발하여 불충분하게 조정하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "휴리스틱 = 심적 지름길(빠르지만 가끔 잘못된 길로)",
      "differential": "휴리스틱은 '전략/지름길' 자체이고, 편향은 휴리스틱으로 인해 발생하는 '체계적 오류'이다",
      "key_point": "카너먼과 트버스키가 제안한 3대 휴리스틱: 가용성, 대표성, 앵커링",
      "common_mistake": "휴리스틱이 항상 나쁜 것이라고 생각하는 것 — 대부분의 상황에서는 효율적이고 적응적이다"
    }
  },
  {
    "id": "COGN_AVAIL_007",
    "terminology": "가용성 휴리스틱 (Availability Heuristic)",
    "terminology_ko": "가용성 휴리스틱",
    "terminology_en": "Availability Heuristic",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "어떤 사건의 빈도나 확률을 판단할 때, 관련 사례가 기억에서 얼마나 쉽게 떠오르는지에 의존하는 판단 전략이다",
    "definition_en": "The tendency to estimate the likelihood or frequency of an event based on how easily instances come to mind, rather than on actual statistical probability",
    "significance": "미디어에 의해 과대 보도되는 사건(비행기 사고, 상어 공격 등)의 위험을 과대 추정하는 현상을 설명하며, 위험 인지 연구의 핵심이다",
    "key_researchers": [
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "카너먼과 함께 가용성 휴리스틱의 개념을 제안하고 실험적으로 입증하였다"
      },
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "가용성 휴리스틱이 빈도 판단에 미치는 체계적 편향을 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발견법(휴리스틱)",
        "name_en": "Heuristic",
        "id": "COGN_HEUR_006"
      },
      {
        "name_ko": "대표성 휴리스틱",
        "name_en": "Representativeness Heuristic",
        "id": "COGN_REPRES_008"
      },
      {
        "name_ko": "프레이밍 효과",
        "name_en": "Framing Effect",
        "id": "COGN_FRAME_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "뉴스에서 비행기 사고를 많이 보면 → 비행기가 자동차보다 위험하다고 오판",
      "differential": "가용성은 '떠올리기 쉬운 것'에 의존, 대표성은 '전형적인 것과의 유사성'에 의존한다",
      "key_point": "생생하고 감정적인 사건일수록 가용성이 높아져 빈도를 과대 추정한다",
      "common_mistake": "가용성 휴리스틱과 대표성 휴리스틱을 혼동하는 것 — 가용성은 '쉽게 떠오르는 정도', 대표성은 '전형과의 유사성'"
    }
  },
  {
    "id": "COGN_REPRES_008",
    "terminology": "대표성 휴리스틱 (Representativeness Heuristic)",
    "terminology_ko": "대표성 휴리스틱",
    "terminology_en": "Representativeness Heuristic",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "대상이 특정 범주의 전형적인 구성원과 얼마나 유사한지에 기반하여 그 범주에 속할 확률을 판단하는 전략이다",
    "definition_en": "The tendency to judge the probability that something belongs to a category by how well it matches the prototype of that category, often ignoring base-rate information",
    "significance": "기저율 무시(base-rate neglect)와 결합 오류(conjunction fallacy) 등 체계적 판단 오류를 설명하며, 고정관념의 인지적 기제를 이해하는 데 기여한다",
    "key_researchers": [
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "대표성 휴리스틱에 의한 기저율 무시 현상을 실험적으로 입증하였다"
      },
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "린다 문제(Linda problem)로 결합 오류를 보여주었다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발견법(휴리스틱)",
        "name_en": "Heuristic",
        "id": "COGN_HEUR_006"
      },
      {
        "name_ko": "가용성 휴리스틱",
        "name_en": "Availability Heuristic",
        "id": "COGN_AVAIL_007"
      },
      {
        "name_ko": "확인 편향",
        "name_en": "Confirmation Bias",
        "id": "COGN_CONFBIAS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "린다 문제: 린다가 은행원일 확률 vs. 페미니스트 은행원일 확률 → 후자가 더 높다고 오판",
      "differential": "대표성은 '전형과의 유사성'에 의존, 가용성은 '기억에서 떠오르는 쉬움'에 의존한다",
      "key_point": "대표성 휴리스틱은 기저율(base rate)을 무시하게 만든다",
      "common_mistake": "대표성 판단이 항상 틀리다고 생각하는 것 — 전형성은 종종 실제 확률과 상관이 있다"
    }
  },
  {
    "id": "COGN_CONFBIAS_009",
    "terminology": "확인 편향 (Confirmation Bias)",
    "terminology_ko": "확인 편향",
    "terminology_en": "Confirmation Bias",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "자신의 기존 신념이나 가설을 지지하는 정보를 선택적으로 탐색, 해석, 기억하고, 반대 증거는 무시하거나 과소평가하는 경향이다",
    "definition_en": "The tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses, while giving disproportionately less attention to disconfirming evidence",
    "significance": "과학적 사고, 의사결정, 정치적 판단 등 거의 모든 영역에 영향을 미치며, 비판적 사고 교육의 핵심 주제이다",
    "key_researchers": [
      {
        "name_ko": "피터 웨이슨",
        "name_en": "Peter Wason",
        "contribution": "웨이슨 선택 과제(Wason selection task)를 통해 확인 편향을 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과신 편향",
        "name_en": "Overconfidence Bias",
        "id": "COGN_OVERCONF_014"
      },
      {
        "name_ko": "기능적 고착",
        "name_en": "Functional Fixedness",
        "id": "COGN_FUNCFIX_012"
      },
      {
        "name_ko": "심적 고착",
        "name_en": "Mental Set",
        "id": "COGN_MENTSET_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내 생각이 맞다는 증거만 골라보는 '편식적 사고'",
      "differential": "확인 편향은 '증거 탐색/해석의 편향'이고, 과신 편향은 '자기 판단에 대한 과도한 확신'이다",
      "key_point": "과학적 방법론은 확인 편향을 극복하기 위해 반증(falsification)을 강조한다",
      "common_mistake": "확인 편향이 의도적 행동이라고 생각하는 것 — 대부분 무의식적으로 작동한다"
    }
  },
  {
    "id": "COGN_ANCHOR_010",
    "terminology": "고정효과/앵커링 (Anchoring Effect)",
    "terminology_ko": "고정효과",
    "terminology_en": "Anchoring Effect",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "처음에 제시된 정보(닻/기준점)에 과도하게 의존하여 이후의 판단이나 추정에서 불충분하게 조정하는 경향이다",
    "definition_en": "The cognitive bias of relying too heavily on the first piece of information encountered (the 'anchor') when making subsequent judgments, leading to insufficient adjustment",
    "significance": "협상, 가격 책정, 법적 판결 등 실생활의 다양한 의사결정에 큰 영향을 미치며, 행동경제학의 핵심 개념이다",
    "key_researchers": [
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "카너먼과 함께 앵커링과 조정 휴리스틱을 체계적으로 기술하였다"
      },
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "앵커링 효과의 메커니즘과 광범위한 영향을 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발견법(휴리스틱)",
        "name_en": "Heuristic",
        "id": "COGN_HEUR_006"
      },
      {
        "name_ko": "프레이밍 효과",
        "name_en": "Framing Effect",
        "id": "COGN_FRAME_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "배의 닻(anchor)처럼 처음 정보에 '고정'되어 멀리 못 감",
      "differential": "앵커링은 '초기 기준점에 고착'되는 것이고, 프레이밍은 '동일 정보의 제시 방식'에 영향받는 것이다",
      "key_point": "앵커가 무관한 숫자(예: 무작위 숫자)여도 판단에 영향을 미친다",
      "common_mistake": "앵커링이 관련 정보에서만 발생한다고 생각하는 것 — 완전히 무관한 숫자도 앵커 역할을 한다"
    }
  },
  {
    "id": "COGN_INSIGHT_011",
    "terminology": "통찰 (Insight)",
    "terminology_ko": "통찰",
    "terminology_en": "Insight",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "문제 해결 과정에서 갑자기 해답이 떠오르는 순간적 깨달음으로, 문제의 구조를 새롭게 재구성하는 것을 수반한다",
    "definition_en": "A sudden realization of the solution to a problem, often described as an 'aha' moment, involving a restructuring of the problem representation",
    "significance": "형태주의 심리학에서 강조되었으며, 점진적 시행착오 학습과 대비되는 문제 해결 방식으로 창의성 연구의 중요한 주제이다",
    "key_researchers": [
      {
        "name_ko": "볼프강 쾰러",
        "name_en": "Wolfgang Köhler",
        "contribution": "침팬지의 문제 해결 실험을 통해 통찰 학습의 개념을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "창의성",
        "name_en": "Creativity",
        "id": "COGN_CREAT_019"
      },
      {
        "name_ko": "기능적 고착",
        "name_en": "Functional Fixedness",
        "id": "COGN_FUNCFIX_012"
      },
      {
        "name_ko": "심적 고착",
        "name_en": "Mental Set",
        "id": "COGN_MENTSET_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "쾰러의 침팬지: 막대를 이어 바나나를 따는 '아하!' 순간",
      "differential": "통찰은 '갑작스러운 깨달음'이고, 알고리즘이나 휴리스틱은 '단계적 접근'이다",
      "key_point": "통찰은 부화기(incubation period) 이후에 자주 발생한다",
      "common_mistake": "통찰이 완전히 무의식적이라고 생각하는 것 — 사전 지식과 노력이 통찰의 기반이 된다"
    }
  },
  {
    "id": "COGN_FUNCFIX_012",
    "terminology": "기능적 고착 (Functional Fixedness)",
    "terminology_ko": "기능적 고착",
    "terminology_en": "Functional Fixedness",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "대상의 통상적인 기능에만 고착되어, 새로운 용도나 방식으로 사용하는 것을 생각하지 못하는 인지적 제한이다",
    "definition_en": "The tendency to perceive an object only in terms of its most common use, which impedes the ability to see it as having alternative functions needed for problem solving",
    "significance": "창의적 문제 해결의 주요 장애물로 연구되며, 기능적 고착을 극복하는 능력이 창의성의 핵심 요소이다",
    "key_researchers": [
      {
        "name_ko": "칼 둥커",
        "name_en": "Karl Duncker",
        "contribution": "초 문제(candle problem)를 통해 기능적 고착 현상을 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심적 고착",
        "name_en": "Mental Set",
        "id": "COGN_MENTSET_017"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "COGN_INSIGHT_011"
      },
      {
        "name_ko": "창의성",
        "name_en": "Creativity",
        "id": "COGN_CREAT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "둥커의 초 문제: 압정 상자를 '상자'로만 보고 선반으로 쓸 생각을 못 함",
      "differential": "기능적 고착은 '사물의 용도'에 한정된 고착이고, 심적 고착은 '문제 해결 방법'에 대한 고착이다",
      "key_point": "사물의 기존 기능에 대한 고정관념이 창의적 해결을 방해한다",
      "common_mistake": "기능적 고착과 심적 고착(mental set)을 동일시하는 것 — 기능적 고착은 사물의 용도에 국한된 하위 유형이다"
    }
  },
  {
    "id": "COGN_FRAME_013",
    "terminology": "프레이밍 효과 (Framing Effect)",
    "terminology_ko": "프레이밍 효과",
    "terminology_en": "Framing Effect",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "동일한 정보라도 제시되는 방식(틀, 프레임)에 따라 판단이나 의사결정이 달라지는 현상이다",
    "definition_en": "The cognitive bias in which people react differently to a particular choice depending on how it is presented, even though the underlying information is objectively identical",
    "significance": "합리적 선택이론의 한계를 드러내며, 광고, 의료 커뮤니케이션, 정치 등에서 정보 제시 방식의 중요성을 보여준다",
    "key_researchers": [
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "트버스키와 함께 전망이론(Prospect Theory)에서 프레이밍 효과를 체계적으로 설명하였다"
      },
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "아시아 질병 문제로 프레이밍 효과를 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정효과(앵커링)",
        "name_en": "Anchoring Effect",
        "id": "COGN_ANCHOR_010"
      },
      {
        "name_ko": "가용성 휴리스틱",
        "name_en": "Availability Heuristic",
        "id": "COGN_AVAIL_007"
      },
      {
        "name_ko": "언어결정론",
        "name_en": "Linguistic Determinism",
        "id": "COGN_LINGDET_021"
      }
    ],
    "sub_types": [
      {
        "name_ko": "이득 프레임",
        "name_en": "Gain Frame",
        "definition": "긍정적 결과를 강조하는 제시 방식 (예: '200명이 살 것이다')"
      },
      {
        "name_ko": "손실 프레임",
        "name_en": "Loss Frame",
        "definition": "부정적 결과를 강조하는 제시 방식 (예: '400명이 죽을 것이다')"
      }
    ],
    "quiz_hints": {
      "mnemonic": "같은 수술인데 '성공률 90%' vs. '사망률 10%' → 선택이 달라진다",
      "differential": "프레이밍은 '같은 정보의 다른 제시 방식'이고, 앵커링은 '초기 기준점에 대한 고착'이다",
      "key_point": "이득 프레임에서는 위험 회피적, 손실 프레임에서는 위험 추구적 선택을 하는 경향이 있다",
      "common_mistake": "프레이밍 효과를 단순한 속임수로 치부하는 것 — 인간 인지의 근본적인 특성에서 비롯된다"
    }
  },
  {
    "id": "COGN_OVERCONF_014",
    "terminology": "과신 편향 (Overconfidence Bias)",
    "terminology_ko": "과신 편향",
    "terminology_en": "Overconfidence Bias",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "자신의 지식, 판단, 예측의 정확성을 실제보다 과대평가하는 경향으로, 판단과 의사결정의 가장 보편적인 편향 중 하나이다",
    "definition_en": "The tendency to overestimate the accuracy of one's knowledge, judgments, and predictions, often resulting in poorly calibrated confidence that exceeds actual performance",
    "significance": "투자 실패, 프로젝트 계획 실패, 잘못된 진단 등 다양한 영역에서 부정적 결과를 초래하며, 메타인지 연구의 주요 주제이다",
    "key_researchers": [
      {
        "name_ko": "다니엘 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "과신 편향이 전문가 판단에도 광범위하게 나타남을 보여주었다"
      },
      {
        "name_ko": "필립 테틀록",
        "name_en": "Philip Tetlock",
        "contribution": "전문가의 정치적 예측이 비전문가와 크게 다르지 않음을 20년간의 종단 연구로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확인 편향",
        "name_en": "Confirmation Bias",
        "id": "COGN_CONFBIAS_009"
      },
      {
        "name_ko": "매몰비용 오류",
        "name_en": "Sunk Cost Fallacy",
        "id": "COGN_SUNK_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내가 90% 확신할 때, 실제 정답률은 70~75% 정도밖에 안 됨",
      "differential": "과신 편향은 '자기 확신의 과대평가'이고, 확인 편향은 '확인 증거의 선택적 탐색'이다",
      "key_point": "과신은 지식이 늘어나도 비례적으로 줄어들지 않으며, 전문가도 예외가 아니다",
      "common_mistake": "과신이 자신감이 높은 사람에게만 나타난다고 생각하는 것 — 거의 모든 사람에게 보편적으로 나타난다"
    }
  },
  {
    "id": "COGN_SUNK_015",
    "terminology": "매몰비용 오류 (Sunk Cost Fallacy)",
    "terminology_ko": "매몰비용 오류",
    "terminology_en": "Sunk Cost Fallacy",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "이미 투자한 시간, 비용, 노력을 회수할 수 없음에도 불구하고, 과거 투자를 근거로 비합리적인 결정을 계속 유지하는 오류이다",
    "definition_en": "The tendency to continue an endeavor because of previously invested resources (time, money, effort) that cannot be recovered, rather than evaluating the current and future value of the decision",
    "significance": "경제적 의사결정뿐 아니라 인간관계, 진로 선택 등 일상의 다양한 결정에서 나타나며, 합리적 의사결정을 방해하는 주요 요인이다",
    "key_researchers": [
      {
        "name_ko": "할 아크스",
        "name_en": "Hal Arkes",
        "contribution": "매몰비용 효과의 심리적 메커니즘을 체계적으로 연구하였다"
      },
      {
        "name_ko": "리처드 탈러",
        "name_en": "Richard Thaler",
        "contribution": "행동경제학 관점에서 매몰비용 오류를 분석하고 일상 사례를 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과신 편향",
        "name_en": "Overconfidence Bias",
        "id": "COGN_OVERCONF_014"
      },
      {
        "name_ko": "프레이밍 효과",
        "name_en": "Framing Effect",
        "id": "COGN_FRAME_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재미없는 영화인데 '표 값이 아까워서' 끝까지 보는 것",
      "differential": "매몰비용 오류는 '과거 투자에 대한 미련'이고, 고정효과는 '초기 정보에 대한 과의존'이다",
      "key_point": "합리적 결정은 미래 가치만을 고려해야 하지만, 인간은 과거 투자에 끌려다닌다",
      "common_mistake": "매몰비용 오류가 감정적 사람에게만 나타난다고 생각하는 것 — 훈련된 전문가에게도 나타난다"
    }
  },
  {
    "id": "COGN_CONV_016",
    "terminology": "수렴적 사고 (Convergent Thinking)",
    "terminology_ko": "수렴적 사고",
    "terminology_en": "Convergent Thinking",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "주어진 정보를 종합하여 하나의 최적 해답에 도달하는 사고 방식으로, 논리적·분석적 추론을 중심으로 한다",
    "definition_en": "A type of thinking that focuses on coming up with a single, correct solution to a problem by synthesizing information through logical and analytical reasoning",
    "significance": "표준화 시험에서 측정하는 전통적 지능과 관련되며, 확산적 사고와 상호보완적으로 작용하여 효과적 문제 해결과 창의적 산출에 기여한다",
    "key_researchers": [
      {
        "name_ko": "조이 폴 길포드",
        "name_en": "J. P. Guilford",
        "contribution": "수렴적 사고와 확산적 사고의 구분을 제안하여 창의성 연구의 기틀을 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확산적 사고",
        "name_en": "Divergent Thinking",
        "id": "COGN_DIV_020"
      },
      {
        "name_ko": "알고리즘",
        "name_en": "Algorithm",
        "id": "COGN_ALGO_005"
      },
      {
        "name_ko": "창의성",
        "name_en": "Creativity",
        "id": "COGN_CREAT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수렴 = '하나로 모인다' → 정답이 하나인 문제에 적합",
      "differential": "수렴적 사고는 '하나의 정답'을 찾고, 확산적 사고는 '여러 가능성'을 탐색한다",
      "key_point": "길포드가 제안한 수렴적 vs. 확산적 사고 구분은 창의성 연구의 출발점이다",
      "common_mistake": "수렴적 사고가 열등한 사고방식이라고 생각하는 것 — 정확한 문제 해결에 필수적이다"
    }
  },
  {
    "id": "COGN_MENTSET_017",
    "terminology": "심적 고착/사고의 틀 (Mental Set)",
    "terminology_ko": "심적 고착",
    "terminology_en": "Mental Set",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "이전에 성공했던 문제 해결 방법에 고착되어 새로운 상황에서도 같은 방법을 적용하려는 경향으로, 유연한 사고를 방해할 수 있다",
    "definition_en": "The tendency to approach a problem in a particular way, especially a way that has been successful in the past, which can hinder the ability to find more effective solutions in new situations",
    "significance": "문제 해결의 장애물로 작용하며, 과거 성공 경험이 오히려 새로운 상황에서의 적응을 방해할 수 있음을 보여준다",
    "key_researchers": [
      {
        "name_ko": "아브라함 루친스",
        "name_en": "Abraham Luchins",
        "contribution": "물병 문제(water jar problem)를 통해 심적 고착 현상을 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기능적 고착",
        "name_en": "Functional Fixedness",
        "id": "COGN_FUNCFIX_012"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "COGN_INSIGHT_011"
      },
      {
        "name_ko": "확인 편향",
        "name_en": "Confirmation Bias",
        "id": "COGN_CONFBIAS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "루친스의 물병 문제: 복잡한 방법에 익숙해져서 간단한 방법을 못 보는 것",
      "differential": "심적 고착은 '문제 해결 방법'에 대한 고착이고, 기능적 고착은 '사물의 용도'에 대한 고착이다",
      "key_point": "심적 고착은 기능적 고착의 상위 개념으로, 더 넓은 범위의 사고 경직성을 포함한다",
      "common_mistake": "심적 고착과 기능적 고착을 동의어로 사용하는 것 — 기능적 고착은 심적 고착의 한 유형이다"
    }
  },
  {
    "id": "COGN_PROBSOLV_018",
    "terminology": "문제해결 전략 (Problem-Solving Strategies)",
    "terminology_ko": "문제해결 전략",
    "terminology_en": "Problem-Solving Strategies",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "문제를 효과적으로 해결하기 위해 사용하는 다양한 인지적 접근법으로, 알고리즘, 휴리스틱, 통찰, 시행착오 등이 포함된다",
    "definition_en": "Various cognitive approaches used to solve problems effectively, including algorithms, heuristics, insight, trial and error, and means-ends analysis",
    "significance": "인지심리학과 교육심리학의 핵심 연구 주제로, 효과적인 문제 해결 능력의 향상 방법에 대한 이해를 제공한다",
    "key_researchers": [
      {
        "name_ko": "앨런 뉴웰",
        "name_en": "Allen Newell",
        "contribution": "허버트 사이먼과 함께 일반 문제 해결자(GPS) 모형을 개발하였다"
      },
      {
        "name_ko": "허버트 사이먼",
        "name_en": "Herbert Simon",
        "contribution": "문제 공간(problem space) 개념을 제안하고 수단-목표 분석을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알고리즘",
        "name_en": "Algorithm",
        "id": "COGN_ALGO_005"
      },
      {
        "name_ko": "발견법(휴리스틱)",
        "name_en": "Heuristic",
        "id": "COGN_HEUR_006"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "COGN_INSIGHT_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "시행착오",
        "name_en": "Trial and Error",
        "definition": "가능한 해결책을 하나씩 시도하여 올바른 답을 찾는 방법"
      },
      {
        "name_ko": "수단-목표 분석",
        "name_en": "Means-Ends Analysis",
        "definition": "현재 상태와 목표 상태의 차이를 줄이는 하위 목표를 설정하는 방법"
      },
      {
        "name_ko": "역행적 작업",
        "name_en": "Working Backward",
        "definition": "목표 상태에서 출발하여 초기 상태로 거슬러 올라가는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "문제 해결 도구상자: 알고리즘(꼼꼼), 휴리스틱(빠른), 통찰(번뜩)",
      "differential": "문제해결 전략은 '방법론의 총칭'이고, 알고리즘/휴리스틱은 각각 그 하위 유형이다",
      "key_point": "뉴웰과 사이먼의 문제 공간 이론: 초기 상태 → 연산자 적용 → 목표 상태",
      "common_mistake": "하나의 문제에 하나의 전략만 사용해야 한다고 생각하는 것 — 실제로는 여러 전략을 병행 사용한다"
    }
  },
  {
    "id": "COGN_CREAT_019",
    "terminology": "창의성 (Creativity)",
    "terminology_ko": "창의성",
    "terminology_en": "Creativity",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "새롭고 유용한 아이디어, 산출물, 문제 해결 방법을 생성하는 능력으로, 확산적 사고, 유연성, 독창성을 핵심 요소로 포함한다",
    "definition_en": "The ability to produce ideas, solutions, or products that are both novel and valuable, involving divergent thinking, flexibility, and originality as core components",
    "significance": "지능과는 구분되는 독립적 인지 능력으로 연구되며, 교육과 혁신의 핵심 역량으로 중요성이 강조된다",
    "key_researchers": [
      {
        "name_ko": "조이 폴 길포드",
        "name_en": "J. P. Guilford",
        "contribution": "확산적 사고 개념을 통해 창의성 연구의 기틀을 마련하였다"
      },
      {
        "name_ko": "로버트 스턴버그",
        "name_en": "Robert Sternberg",
        "contribution": "창의성의 투자이론(Investment Theory of Creativity)을 제안하였다"
      },
      {
        "name_ko": "미하이 칙센트미하이",
        "name_en": "Mihaly Csikszentmihalyi",
        "contribution": "창의성의 체계 모형(systems model)과 몰입(flow) 개념을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확산적 사고",
        "name_en": "Divergent Thinking",
        "id": "COGN_DIV_020"
      },
      {
        "name_ko": "수렴적 사고",
        "name_en": "Convergent Thinking",
        "id": "COGN_CONV_016"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "COGN_INSIGHT_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "창의성 = 새로움(novelty) + 유용성(usefulness)",
      "differential": "창의성은 '새롭고 유용한 산출'이고, 확산적 사고는 '여러 가능성을 생성하는 사고 과정'이다",
      "key_point": "창의성은 지능의 문턱 가설(threshold hypothesis): IQ 약 120까지는 상관이 있지만 그 이상에서는 관계가 약해진다",
      "common_mistake": "창의성이 타고나는 것이라고 생각하는 것 — 환경, 훈련, 동기 등이 모두 영향을 미친다"
    }
  },
  {
    "id": "COGN_DIV_020",
    "terminology": "확산적 사고 (Divergent Thinking)",
    "terminology_ko": "확산적 사고",
    "terminology_en": "Divergent Thinking",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "하나의 문제에서 출발하여 다양한 방향으로 여러 가지 가능한 해결책을 생성하는 사고 방식으로, 창의성의 핵심 요소이다",
    "definition_en": "A thought process used to generate creative ideas by exploring many possible solutions from a single starting point, considered a key component of creativity",
    "significance": "창의성 측정(예: 토런스 창의성 검사)의 기본 개념이며, 유창성, 유연성, 독창성, 정교성으로 평가된다",
    "key_researchers": [
      {
        "name_ko": "조이 폴 길포드",
        "name_en": "J. P. Guilford",
        "contribution": "확산적 사고 개념을 제안하고 수렴적 사고와 구분하였다"
      },
      {
        "name_ko": "엘리스 폴 토런스",
        "name_en": "E. Paul Torrance",
        "contribution": "토런스 창의적 사고 검사(TTCT)를 개발하여 확산적 사고를 측정하는 도구를 제공하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수렴적 사고",
        "name_en": "Convergent Thinking",
        "id": "COGN_CONV_016"
      },
      {
        "name_ko": "창의성",
        "name_en": "Creativity",
        "id": "COGN_CREAT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "벽돌의 용도를 최대한 많이 생각해 보세요 → 확산적 사고 과제",
      "differential": "확산적 사고는 '여러 답을 생성'하고, 수렴적 사고는 '하나의 정답을 수렴'한다",
      "key_point": "확산적 사고의 4가지 평가 기준: 유창성(fluency), 유연성(flexibility), 독창성(originality), 정교성(elaboration)",
      "common_mistake": "확산적 사고만이 창의성에 필요하다고 생각하는 것 — 수렴적 사고를 통한 평가와 정교화도 필수적이다"
    }
  },
  {
    "id": "COGN_LINGDET_021",
    "terminology": "언어결정론 (Linguistic Determinism)",
    "terminology_ko": "언어결정론",
    "terminology_en": "Linguistic Determinism",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "언어가 사고를 결정한다는 가설로, 사피어-워프 가설의 강한 형태이다. 언어의 구조가 세상을 인식하고 사고하는 방식을 근본적으로 규정한다고 주장한다",
    "definition_en": "The strong form of the Sapir-Whorf hypothesis, proposing that the structure of a language fundamentally determines its speakers' cognition and worldview",
    "significance": "언어와 사고의 관계에 대한 근본적 질문을 제기하며, 현대 연구에서는 강한 형태는 부정되고 약한 형태(언어상대성)는 부분적으로 지지된다",
    "key_researchers": [
      {
        "name_ko": "벤저민 리 워프",
        "name_en": "Benjamin Lee Whorf",
        "contribution": "호피족 언어 연구를 통해 언어가 시간 개념에 미치는 영향을 주장하였다"
      },
      {
        "name_ko": "에드워드 사피어",
        "name_en": "Edward Sapir",
        "contribution": "언어가 사고에 미치는 영향에 대한 이론적 기초를 제공하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "언어상대성 가설",
        "name_en": "Linguistic Relativity Hypothesis",
        "id": "COGN_LINGREL_022"
      },
      {
        "name_ko": "비고츠키의 언어와 사고",
        "name_en": "Vygotsky's Language and Thought",
        "id": "COGN_VYGLAN_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사피어-워프 강한 형태: '언어 없이는 그 사고 자체가 불가능하다'",
      "differential": "언어결정론(강한 형태)은 '언어가 사고를 결정한다', 언어상대성(약한 형태)은 '언어가 사고에 영향을 미친다'",
      "key_point": "강한 형태(결정론)는 대체로 부정되었으나, 약한 형태(상대성)는 색채 인식 등의 연구에서 부분적으로 지지된다",
      "common_mistake": "사피어-워프 가설이 완전히 반증되었다고 생각하는 것 — 약한 형태는 여전히 유효한 연구 주제이다"
    }
  },
  {
    "id": "COGN_LINGREL_022",
    "terminology": "언어상대성 가설 (Linguistic Relativity Hypothesis)",
    "terminology_ko": "언어상대성 가설",
    "terminology_en": "Linguistic Relativity Hypothesis",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "사피어-워프 가설의 약한 형태로, 언어가 사고를 결정하지는 않지만 인식, 기억, 사고 과정에 영향을 미친다는 입장이다",
    "definition_en": "The weaker form of the Sapir-Whorf hypothesis, proposing that language influences but does not determine thought, perception, and memory",
    "significance": "색채 인식, 공간 인지, 시간 개념 등에서 언어에 따른 인지적 차이가 실험적으로 확인되어, 현대 인지언어학의 주요 연구 주제로 남아 있다",
    "key_researchers": [
      {
        "name_ko": "레라 보로디츠키",
        "name_en": "Lera Boroditsky",
        "contribution": "언어에 따른 시간·공간 인지의 차이를 현대적 실험 방법으로 입증하였다"
      },
      {
        "name_ko": "존 루시",
        "name_en": "John Lucy",
        "contribution": "유카테크 마야어와 영어 화자의 물질 범주화 차이를 밝혀냈다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "언어결정론",
        "name_en": "Linguistic Determinism",
        "id": "COGN_LINGDET_021"
      },
      {
        "name_ko": "음소",
        "name_en": "Phoneme",
        "id": "COGN_PHONE_023"
      },
      {
        "name_ko": "의미론",
        "name_en": "Semantics",
        "id": "COGN_SEMAN_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "러시아어에는 '밝은 파랑'과 '짙은 파랑'이 별도 단어 → 색 구분이 더 빨라진다",
      "differential": "언어상대성은 '영향'을 주장하고, 언어결정론은 '결정'을 주장한다 — 정도의 차이이다",
      "key_point": "현대 연구에서는 강한 결정론은 부정되고, 약한 상대성은 부분적으로 지지된다",
      "common_mistake": "언어상대성과 언어결정론을 같은 것으로 취급하는 것 — 강도에서 결정적 차이가 있다"
    }
  },
  {
    "id": "COGN_PHONE_023",
    "terminology": "음소 (Phoneme)",
    "terminology_ko": "음소",
    "terminology_en": "Phoneme",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "언어에서 의미를 구별해주는 가장 작은 소리의 단위로, 음소의 변화만으로도 단어의 의미가 달라진다",
    "definition_en": "The smallest unit of sound in a language that can distinguish one word from another; changing a phoneme changes the meaning of a word",
    "significance": "음소는 언어의 가장 기본적인 구성 요소로, 언어 발달, 읽기 학습, 언어장애 연구의 기초가 된다",
    "key_researchers": [
      {
        "name_ko": "노엄 촘스키",
        "name_en": "Noam Chomsky",
        "contribution": "음운론의 체계적 분석에 기여하고, 언어 구조의 생성 원리를 제안하였다"
      },
      {
        "name_ko": "모리스 할레",
        "name_en": "Morris Halle",
        "contribution": "촘스키와 함께 생성음운론의 기초를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "형태소",
        "name_en": "Morpheme",
        "id": "COGN_MORPH_024"
      },
      {
        "name_ko": "통사론",
        "name_en": "Syntax",
        "id": "COGN_SYNTAX_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'bat'과 'pat'의 차이 = 첫 음소(/b/ vs. /p/)만 다름",
      "differential": "음소는 '소리의 최소 단위'이고, 형태소는 '의미의 최소 단위'이다",
      "key_point": "영어에는 약 40개, 한국어에는 약 40개의 음소가 있다. 음소는 언어마다 다르다",
      "common_mistake": "음소를 글자(letter)와 혼동하는 것 — 음소는 소리 단위이지 문자 단위가 아니다"
    }
  },
  {
    "id": "COGN_MORPH_024",
    "terminology": "형태소 (Morpheme)",
    "terminology_ko": "형태소",
    "terminology_en": "Morpheme",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "언어에서 의미를 가지는 가장 작은 단위로, 더 이상 분해하면 의미를 잃게 되는 기본 의미 요소이다",
    "definition_en": "The smallest unit of language that carries meaning; it cannot be broken down further without losing its semantic content",
    "significance": "언어 구조의 기본 단위로서 어휘 발달, 문법 이해, 언어장애 진단에 핵심적 개념이다",
    "key_researchers": [
      {
        "name_ko": "레너드 블룸필드",
        "name_en": "Leonard Bloomfield",
        "contribution": "구조주의 언어학에서 형태소 분석의 체계적 방법론을 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음소",
        "name_en": "Phoneme",
        "id": "COGN_PHONE_023"
      },
      {
        "name_ko": "통사론",
        "name_en": "Syntax",
        "id": "COGN_SYNTAX_025"
      },
      {
        "name_ko": "의미론",
        "name_en": "Semantics",
        "id": "COGN_SEMAN_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "자유 형태소",
        "name_en": "Free Morpheme",
        "definition": "독립적으로 사용할 수 있는 형태소 (예: book, 나무)"
      },
      {
        "name_ko": "구속 형태소",
        "name_en": "Bound Morpheme",
        "definition": "다른 형태소에 붙어야만 사용되는 형태소 (예: -ed, -s, -ing)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "'unbreakable' = un(부정) + break(부수다) + able(가능한) = 3개의 형태소",
      "differential": "음소는 '의미 구별 소리 단위'이고, 형태소는 '의미를 가진 최소 단위'이다",
      "key_point": "형태소는 음소와 달리 반드시 의미를 가진다 — 이것이 핵심 차이이다",
      "common_mistake": "형태소를 음절과 혼동하는 것 — 음절은 소리의 단위이고, 형태소는 의미의 단위이다"
    }
  },
  {
    "id": "COGN_SYNTAX_025",
    "terminology": "통사론/구문론 (Syntax)",
    "terminology_ko": "통사론",
    "terminology_en": "Syntax",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "문장에서 단어를 배열하여 의미 있는 구와 문장을 만드는 규칙 체계로, 언어의 문법 구조를 규정한다",
    "definition_en": "The set of rules that govern how words are combined to form grammatically correct and meaningful phrases and sentences in a language",
    "significance": "촘스키의 변형생성문법을 통해 인간 언어 능력의 보편적 구조가 제안되었으며, 언어 습득과 처리의 핵심 연구 영역이다",
    "key_researchers": [
      {
        "name_ko": "노엄 촘스키",
        "name_en": "Noam Chomsky",
        "contribution": "변형생성문법(Transformational-Generative Grammar)을 제안하여 통사론 연구를 혁신하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음소",
        "name_en": "Phoneme",
        "id": "COGN_PHONE_023"
      },
      {
        "name_ko": "형태소",
        "name_en": "Morpheme",
        "id": "COGN_MORPH_024"
      },
      {
        "name_ko": "의미론",
        "name_en": "Semantics",
        "id": "COGN_SEMAN_026"
      },
      {
        "name_ko": "언어습득장치(LAD)",
        "name_en": "Language Acquisition Device",
        "id": "COGN_LAD_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'개가 고양이를 쫓았다' vs. '고양이를 개가 쫓았다' — 어순(통사)이 의미를 결정한다",
      "differential": "통사론은 '문장 구조/어순 규칙'이고, 의미론은 '단어와 문장의 의미 규칙'이다",
      "key_point": "촘스키: 문법적으로 올바르지만 무의미한 문장이 가능하다 — 'Colorless green ideas sleep furiously'",
      "common_mistake": "통사론과 의미론을 구분하지 못하는 것 — 문법적으로 맞아도 의미가 없을 수 있고, 그 반대도 가능하다"
    }
  },
  {
    "id": "COGN_SEMAN_026",
    "terminology": "의미론 (Semantics)",
    "terminology_ko": "의미론",
    "terminology_en": "Semantics",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "단어, 구, 문장의 의미를 연구하는 언어학의 분야로, 언어 표현이 어떻게 의미를 전달하는지를 다룬다",
    "definition_en": "The branch of linguistics concerned with the meaning of words, phrases, and sentences, studying how linguistic expressions convey meaning",
    "significance": "언어 이해와 의사소통의 핵심 요소로, 자연언어처리, 언어 발달, 의미 기억 연구의 기초가 된다",
    "key_researchers": [
      {
        "name_ko": "페르디낭 드 소쉬르",
        "name_en": "Ferdinand de Saussure",
        "contribution": "기호학적 관점에서 기표(signifier)와 기의(signified)의 관계를 분석하여 의미 연구의 기초를 놓았다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통사론",
        "name_en": "Syntax",
        "id": "COGN_SYNTAX_025"
      },
      {
        "name_ko": "화용론",
        "name_en": "Pragmatics",
        "id": "COGN_PRAGMA_029"
      },
      {
        "name_ko": "형태소",
        "name_en": "Morpheme",
        "id": "COGN_MORPH_024"
      }
    ],
    "sub_types": [
      {
        "name_ko": "어휘 의미론",
        "name_en": "Lexical Semantics",
        "definition": "개별 단어의 의미와 단어 간 의미 관계(동의어, 반의어 등)를 연구한다"
      },
      {
        "name_ko": "문장 의미론",
        "name_en": "Sentential Semantics",
        "definition": "문장 전체의 의미와 진리 조건을 연구한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "의미론 = '무엇을 뜻하는가'를 연구하는 분야",
      "differential": "의미론은 '단어/문장의 의미'를 다루고, 화용론은 '맥락에서의 사용과 의도'를 다룬다",
      "key_point": "언어의 4대 구성 요소: 음소(소리) → 형태소(의미 단위) → 통사론(문법) → 의미론(의미)",
      "common_mistake": "의미론과 화용론을 혼동하는 것 — '오늘 춥다'의 사전적 의미는 의미론, '창문 좀 닫아줘'라는 숨은 의도는 화용론"
    }
  },
  {
    "id": "COGN_VYGLAN_027",
    "terminology": "비고츠키의 언어와 사고 (Vygotsky's Language and Thought)",
    "terminology_ko": "비고츠키의 언어와 사고",
    "terminology_en": "Vygotsky's Language and Thought",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "언어와 사고가 초기에는 독립적으로 발달하다가 약 2세경 합류하여 언어적 사고가 형성된다는 비고츠키의 이론으로, 내적 언어(inner speech)가 사고의 도구가 된다고 본다",
    "definition_en": "Vygotsky's theory that language and thought develop independently in early life and merge around age two, with inner speech becoming a tool for thought and self-regulation",
    "significance": "피아제의 자기중심적 언어 해석과 대비되며, 사회적 상호작용이 인지 발달의 핵심이라는 사회문화적 관점의 기초가 된다",
    "key_researchers": [
      {
        "name_ko": "레프 비고츠키",
        "name_en": "Lev Vygotsky",
        "contribution": "『사고와 언어(Thought and Language)』에서 언어와 사고의 발달적 관계를 체계적으로 이론화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "언어결정론",
        "name_en": "Linguistic Determinism",
        "id": "COGN_LINGDET_021"
      },
      {
        "name_ko": "언어발달 단계",
        "name_en": "Stages of Language Development",
        "id": "COGN_LANGDEV_030"
      },
      {
        "name_ko": "언어습득장치(LAD)",
        "name_en": "Language Acquisition Device",
        "id": "COGN_LAD_028"
      }
    ],
    "sub_types": [
      {
        "name_ko": "사적 언어",
        "name_en": "Private Speech",
        "definition": "아동이 자기 행동을 조절하기 위해 혼잣말하는 것으로, 이후 내적 언어로 내면화된다"
      },
      {
        "name_ko": "내적 언어",
        "name_en": "Inner Speech",
        "definition": "사적 언어가 내면화된 것으로, 사고의 도구로 기능하는 소리 없는 언어"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비고츠키: 아이의 혼잣말은 미숙함이 아니라 사고의 도구로 가는 과정",
      "differential": "비고츠키는 자기중심적 말을 '사고 발달의 도구'로, 피아제는 '인지적 미성숙의 표현'으로 보았다",
      "key_point": "언어 → 사고(비고츠키) vs. 사고 → 언어(피아제): 인과 방향이 핵심 차이이다",
      "common_mistake": "비고츠키가 언어결정론을 지지했다고 오해하는 것 — 비고츠키는 언어와 사고의 '상호작용적 발달'을 강조했다"
    }
  },
  {
    "id": "COGN_LAD_028",
    "terminology": "언어습득장치 (Language Acquisition Device, LAD)",
    "terminology_ko": "언어습득장치",
    "terminology_en": "Language Acquisition Device (LAD)",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "촘스키가 제안한 언어 습득의 생득적 메커니즘으로, 아동이 보편문법(universal grammar)에 대한 선천적 지식을 가지고 태어난다는 가설이다",
    "definition_en": "A hypothetical innate mechanism proposed by Chomsky that enables children to acquire language, based on the assumption that humans are born with an innate knowledge of universal grammar",
    "significance": "행동주의적 언어 학습 이론(스키너)에 대한 강력한 반론으로, 생득론적 언어 습득 관점을 확립하였다",
    "key_researchers": [
      {
        "name_ko": "노엄 촘스키",
        "name_en": "Noam Chomsky",
        "contribution": "언어습득장치와 보편문법 개념을 제안하여, 언어가 학습이 아니라 생물학적으로 결정된 능력임을 주장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통사론",
        "name_en": "Syntax",
        "id": "COGN_SYNTAX_025"
      },
      {
        "name_ko": "언어발달 단계",
        "name_en": "Stages of Language Development",
        "id": "COGN_LANGDEV_030"
      },
      {
        "name_ko": "비고츠키의 언어와 사고",
        "name_en": "Vygotsky's Language and Thought",
        "id": "COGN_VYGLAN_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "촘스키 vs. 스키너: '언어는 타고나는 것(LAD)' vs. '언어는 강화로 배우는 것'",
      "differential": "LAD는 '생득론적' 입장이고, 스키너의 언어 학습 이론은 '경험론적(행동주의)' 입장이다",
      "key_point": "자극의 빈곤(poverty of the stimulus): 아동이 듣는 언어 입력만으로는 복잡한 문법 규칙을 학습하기 불가능하다는 것이 LAD의 핵심 논거이다",
      "common_mistake": "LAD를 뇌의 특정 영역과 동일시하는 것 — LAD는 실체적 기관이 아니라 기능적 가설이다"
    }
  },
  {
    "id": "COGN_PRAGMA_029",
    "terminology": "화용론 (Pragmatics)",
    "terminology_ko": "화용론",
    "terminology_en": "Pragmatics",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "언어가 사회적 맥락에서 실제로 어떻게 사용되는지를 연구하는 분야로, 발화의 의도, 함축, 대화 규칙 등을 다룬다",
    "definition_en": "The branch of linguistics that studies how language is used in social contexts, including speaker intentions, conversational implicature, and discourse rules",
    "significance": "언어의 문자적 의미를 넘어 맥락 의존적 의사소통을 이해하는 데 필수적이며, 자폐 스펙트럼 장애의 언어적 특성 이해에도 중요하다",
    "key_researchers": [
      {
        "name_ko": "폴 그라이스",
        "name_en": "Paul Grice",
        "contribution": "대화의 협력 원리(cooperative principle)와 대화 격률(conversational maxims)을 제안하였다"
      },
      {
        "name_ko": "존 오스틴",
        "name_en": "John Austin",
        "contribution": "화행 이론(speech act theory)을 제안하여 발화의 수행적 기능을 분석하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의미론",
        "name_en": "Semantics",
        "id": "COGN_SEMAN_026"
      },
      {
        "name_ko": "통사론",
        "name_en": "Syntax",
        "id": "COGN_SYNTAX_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'여기 좀 춥지 않아?' = 사전적 질문이 아니라 '창문 닫아줘'라는 화용적 의미",
      "differential": "의미론은 '사전적/문자적 의미'를 다루고, 화용론은 '맥락에서의 실제 의도와 해석'을 다룬다",
      "key_point": "그라이스의 4대 대화 격률: 양(quantity), 질(quality), 관련성(relation), 태도(manner)",
      "common_mistake": "화용론을 비언어적 의사소통과 혼동하는 것 — 화용론은 언어적 표현의 맥락적 사용에 관한 것이다"
    }
  },
  {
    "id": "COGN_LANGDEV_030",
    "terminology": "언어발달 단계 (Stages of Language Development)",
    "terminology_ko": "언어발달 단계",
    "terminology_en": "Stages of Language Development",
    "category": "COGN",
    "category_name": "사고와 언어 (Thinking & Language)",
    "definition": "아동의 언어 능력이 옹알이 → 한 단어 → 두 단어(전보문) → 복잡한 문장으로 보편적 순서를 따라 발달하는 과정이다",
    "definition_en": "The universal progression of language acquisition in children, from babbling to one-word (holophrastic) stage, to two-word (telegraphic) stage, and finally to complex sentences",
    "significance": "언어 발달의 보편적 순서는 언어 능력의 생물학적 기초를 지지하며, 언어 발달 지연의 조기 발견과 개입에 중요한 기준이 된다",
    "key_researchers": [
      {
        "name_ko": "로저 브라운",
        "name_en": "Roger Brown",
        "contribution": "아동의 평균 발화 길이(MLU)를 기준으로 언어 발달 단계를 체계화하였다"
      },
      {
        "name_ko": "노엄 촘스키",
        "name_en": "Noam Chomsky",
        "contribution": "언어 발달의 보편적 순서가 생득적 언어 능력을 반영한다고 주장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "언어습득장치(LAD)",
        "name_en": "Language Acquisition Device",
        "id": "COGN_LAD_028"
      },
      {
        "name_ko": "비고츠키의 언어와 사고",
        "name_en": "Vygotsky's Language and Thought",
        "id": "COGN_VYGLAN_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "옹알이 단계",
        "name_en": "Babbling Stage",
        "definition": "약 4개월부터 시작되며, 모든 언어의 음소를 포함하는 소리를 산출한다"
      },
      {
        "name_ko": "한 단어 단계 (전언어기)",
        "name_en": "One-Word (Holophrastic) Stage",
        "definition": "약 12개월경, 하나의 단어로 전체 문장의 의미를 전달한다"
      },
      {
        "name_ko": "두 단어 단계 (전보문)",
        "name_en": "Two-Word (Telegraphic) Stage",
        "definition": "약 24개월경, 내용어만으로 구성된 짧은 문장을 산출한다 (예: '엄마 우유')"
      },
      {
        "name_ko": "문법 폭발기",
        "name_en": "Grammar Explosion",
        "definition": "약 2-3세 이후 문법 규칙이 급격히 습득되어 복잡한 문장을 구성하기 시작한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "옹알이(4개월) → 한 단어(12개월) → 전보문(24개월) → 문법 폭발(2-3세)",
      "differential": "전보문은 '기능어 생략'이 특징이고, 한 단어 단계는 '단어 하나로 문장 의미 전달'이 특징이다",
      "key_point": "과잉규칙화(overregularization): 'goed', 'mouses' 같은 오류는 문법 규칙을 학습하고 있다는 증거이다",
      "common_mistake": "아동의 문법 오류를 단순한 실수로 보는 것 — 과잉규칙화는 규칙을 능동적으로 적용하는 증거이다"
    }
  }
];

TERMS_DATA.INTELL = [
  {
    "id": "INTELL_INTEL_001",
    "terminology": "지능 (Intelligence)",
    "terminology_ko": "지능",
    "terminology_en": "Intelligence",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "새로운 상황에 적응하고, 경험으로부터 학습하며, 추상적 사고를 활용하여 문제를 해결하는 정신적 능력의 총체이다",
    "definition_en": "The global capacity to think rationally, act purposefully, adapt to new situations, learn from experience, and deal effectively with the environment",
    "significance": "심리학의 핵심 구인 중 하나로, 학업 성취, 직업 수행, 건강 등 다양한 삶의 영역을 예측하는 가장 강력한 심리적 변인이다",
    "key_researchers": [
      {
        "name_ko": "데이비드 웩슬러",
        "name_en": "David Wechsler",
        "contribution": "지능을 '합목적적으로 행동하고, 합리적으로 사고하며, 환경을 효과적으로 다루는 총체적 능력'으로 정의"
      },
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "최초의 실용적 지능검사를 개발하여 현대 지능 측정의 토대를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      },
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "정서지능",
        "name_en": "Emotional Intelligence",
        "id": "INTELL_EI_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "지능 = 적응 + 학습 + 추상적 사고 + 문제해결",
      "differential": "지능은 단일 능력이 아니라 여러 능력의 복합체라는 점에서 학자마다 정의가 다르다",
      "key_point": "지능의 정의에 대한 학자 간 합의가 완전하지 않으며, 조작적 정의(검사가 측정하는 것)로 사용되기도 한다",
      "common_mistake": "지능을 단순히 IQ 점수와 동일시하는 것 — IQ는 지능의 조작적 측정치일 뿐이다"
    }
  },
  {
    "id": "INTELL_IQ_002",
    "terminology": "지능지수 (Intelligence Quotient, IQ)",
    "terminology_ko": "지능지수",
    "terminology_en": "Intelligence Quotient (IQ)",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "표준화된 지능검사를 통해 산출되는 수치로, 개인의 인지 능력 수준을 동일 연령 집단과 비교하여 나타낸 점수이다",
    "definition_en": "A numerical score derived from standardized intelligence tests that represents an individual's cognitive ability level relative to the same-age population",
    "significance": "교육 배치, 임상 진단(지적장애, 영재 판별), 연구에서 지능을 정량적으로 비교하는 가장 보편적인 지표이다",
    "key_researchers": [
      {
        "name_ko": "윌리엄 슈테른",
        "name_en": "William Stern",
        "contribution": "정신연령/생활연령의 비율로서 지능지수(IQ) 개념을 최초로 제안"
      },
      {
        "name_ko": "데이비드 웩슬러",
        "name_en": "David Wechsler",
        "contribution": "비율 IQ 대신 편차 IQ 개념을 도입하여 현대적 IQ 산출 방식을 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신연령",
        "name_en": "Mental Age",
        "id": "INTELL_MA_019"
      },
      {
        "name_ko": "편차지능",
        "name_en": "Deviation IQ",
        "id": "INTELL_DIQ_020"
      },
      {
        "name_ko": "정상분포",
        "name_en": "Normal Distribution",
        "id": "INTELL_NORM_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "비율 IQ",
        "name_en": "Ratio IQ",
        "definition": "정신연령(MA) ÷ 생활연령(CA) × 100으로 산출하는 전통적 IQ 계산 방식"
      },
      {
        "name_ko": "편차 IQ",
        "name_en": "Deviation IQ",
        "definition": "동일 연령 집단의 평균과 표준편차를 기준으로 상대적 위치를 나타내는 현대적 IQ 산출 방식"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비율 IQ = MA/CA × 100, 편차 IQ = 평균 100 + 표준편차 15",
      "differential": "비율 IQ는 아동에게만 적용 가능하고, 편차 IQ는 모든 연령에 적용 가능하다",
      "key_point": "현대 지능검사는 모두 편차 IQ를 사용하며, 평균 100, 표준편차 15(웩슬러) 또는 16(스탠포드-비네)이다",
      "common_mistake": "IQ가 절대적이고 불변하는 수치라고 생각하는 것 — 실제로는 상대적 위치를 나타내는 점수이다"
    }
  },
  {
    "id": "INTELL_GFACT_003",
    "terminology": "일반지능 (General Intelligence, g factor)",
    "terminology_ko": "일반지능",
    "terminology_en": "General Intelligence (g factor)",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "모든 인지 과제 수행의 기저에 있는 공통적인 정신 능력으로, 다양한 지능검사 점수 간의 정적 상관을 설명하는 단일한 일반 요인이다",
    "definition_en": "A single general factor of mental ability that underlies performance on all cognitive tasks, explaining the positive correlations observed among diverse intelligence test scores",
    "significance": "스피어만이 요인분석을 통해 발견한 개념으로, 지능의 구조에 대한 논쟁(단일 vs. 다중)의 출발점이며, 현대 인지능력 연구의 핵심 구인이다",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "요인분석을 통해 g요인(일반지능)과 s요인(특수지능)의 2요인 이론을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "s요인",
        "name_en": "Specific Factor",
        "id": "INTELL_SFACT_022"
      },
      {
        "name_ko": "요인분석",
        "name_en": "Factor Analysis",
        "id": "INTELL_FA_021"
      },
      {
        "name_ko": "유동지능",
        "name_en": "Fluid Intelligence",
        "id": "INTELL_GF_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "g = general = 모든 인지과제에 공통으로 작용하는 '일반' 능력",
      "differential": "g요인은 단일 일반 능력, 다중지능은 독립적인 여러 능력을 가정한다는 점에서 대립된다",
      "key_point": "스피어만은 여러 검사 점수 간 정적 상관이 나타나는 이유를 g요인으로 설명했다",
      "common_mistake": "g요인이 뇌의 특정 영역에 위치한다고 생각하는 것 — g는 통계적 추출 개념이다"
    }
  },
  {
    "id": "INTELL_MI_004",
    "terminology": "다중지능 (Multiple Intelligences)",
    "terminology_ko": "다중지능",
    "terminology_en": "Multiple Intelligences",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "인간의 지능은 단일한 능력이 아니라 서로 독립적인 최소 8가지 유형의 지능으로 구성되어 있다는 이론이다",
    "definition_en": "A theory proposing that intelligence is not a single general ability but consists of at least eight independent types of intelligence, each representing a different way of processing information",
    "significance": "전통적 IQ 개념을 넘어 인간 능력의 다양성을 강조하며, 교육 현장에서 개별화 교육과 다양한 학습 스타일에 대한 인식을 확산시켰다",
    "key_researchers": [
      {
        "name_ko": "하워드 가드너",
        "name_en": "Howard Gardner",
        "contribution": "1983년 '마음의 틀(Frames of Mind)'에서 다중지능 이론을 제안, 이후 8가지 지능 유형을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "삼원지능이론",
        "name_en": "Triarchic Theory",
        "id": "INTELL_TRI_005"
      },
      {
        "name_ko": "정서지능",
        "name_en": "Emotional Intelligence",
        "id": "INTELL_EI_006"
      }
    ],
    "sub_types": [
      {
        "name_ko": "언어 지능",
        "name_en": "Linguistic Intelligence",
        "definition": "언어를 효과적으로 사용하는 능력 (예: 작가, 연설가)"
      },
      {
        "name_ko": "논리-수학 지능",
        "name_en": "Logical-Mathematical Intelligence",
        "definition": "논리적 분석, 수학적 연산, 과학적 탐구 능력 (예: 과학자, 수학자)"
      },
      {
        "name_ko": "음악 지능",
        "name_en": "Musical Intelligence",
        "definition": "음악적 패턴의 수행, 작곡, 감상 능력 (예: 음악가)"
      },
      {
        "name_ko": "신체-운동감각 지능",
        "name_en": "Bodily-Kinesthetic Intelligence",
        "definition": "신체를 사용하여 문제를 해결하거나 표현하는 능력 (예: 운동선수, 무용가)"
      },
      {
        "name_ko": "공간 지능",
        "name_en": "Spatial Intelligence",
        "definition": "공간적 세계를 정확히 지각하고 변형하는 능력 (예: 항해사, 건축가)"
      },
      {
        "name_ko": "대인관계 지능",
        "name_en": "Interpersonal Intelligence",
        "definition": "타인의 의도, 동기, 욕구를 이해하는 능력 (예: 상담사, 교사)"
      },
      {
        "name_ko": "자기이해 지능",
        "name_en": "Intrapersonal Intelligence",
        "definition": "자신의 감정, 동기, 강점, 약점을 이해하는 능력"
      },
      {
        "name_ko": "자연탐구 지능",
        "name_en": "Naturalist Intelligence",
        "definition": "자연 세계의 패턴을 인식하고 분류하는 능력 (예: 생물학자)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "가드너의 8가지: 언(어), 논(리수학), 음(악), 신(체운동), 공(간), 대(인), 자(기이해), 자(연탐구)",
      "differential": "다중지능은 서로 독립적인 8개 유형, 삼원지능은 3개 하위요소(분석/창의/실용)로 구분된다",
      "key_point": "가드너는 전통적 IQ 검사가 언어와 논리-수학 지능만 측정한다고 비판했다",
      "common_mistake": "다중지능 이론이 실증적으로 완전히 검증되었다고 생각하는 것 — 요인분석적 지지는 부족하다"
    }
  },
  {
    "id": "INTELL_TRI_005",
    "terminology": "삼원지능이론 (Triarchic Theory of Intelligence)",
    "terminology_ko": "삼원지능이론",
    "terminology_en": "Triarchic Theory of Intelligence",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "지능은 분석적 지능, 창의적 지능, 실용적 지능의 세 가지 상호작용하는 하위요소로 구성된다는 이론이다",
    "definition_en": "A theory proposing that intelligence comprises three interacting aspects: analytical intelligence, creative intelligence, and practical intelligence",
    "significance": "전통적 IQ 검사가 분석적 지능만 측정한다는 한계를 지적하며, 창의성과 실용적 문제해결 능력도 지능의 핵심 요소임을 강조했다",
    "key_researchers": [
      {
        "name_ko": "로버트 스턴버그",
        "name_en": "Robert Sternberg",
        "contribution": "1985년 삼원지능이론을 제안하여 지능의 분석적, 창의적, 실용적 측면을 통합적으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중지능",
        "name_en": "Multiple Intelligences",
        "id": "INTELL_MI_004"
      },
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "분석적 지능",
        "name_en": "Analytical Intelligence",
        "definition": "문제를 분석하고, 비교하며, 평가하는 능력으로 전통적 IQ 검사가 주로 측정하는 영역"
      },
      {
        "name_ko": "창의적 지능",
        "name_en": "Creative Intelligence",
        "definition": "새로운 상황에 대처하고 참신한 아이디어를 생성하는 능력"
      },
      {
        "name_ko": "실용적 지능",
        "name_en": "Practical Intelligence",
        "definition": "일상생활의 문제를 해결하고 환경에 적응하는 능력, '거리의 지혜'라고도 불린다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "삼원 = 분석(Academic) + 창의(Creative) + 실용(Practical) → ACP",
      "differential": "삼원지능은 3개 하위요소의 상호작용을 강조하고, 다중지능은 8개 독립 유형을 가정한다",
      "key_point": "스턴버그는 실용적 지능(암묵적 지식)이 학교 밖에서의 성공을 더 잘 예측한다고 주장했다",
      "common_mistake": "삼원지능의 세 요소가 완전히 독립적이라고 생각하는 것 — 실제로는 상호작용한다"
    }
  },
  {
    "id": "INTELL_EI_006",
    "terminology": "정서지능 (Emotional Intelligence)",
    "terminology_ko": "정서지능",
    "terminology_en": "Emotional Intelligence",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "자신과 타인의 감정을 인식하고, 이해하며, 조절하고, 효과적으로 활용하는 능력이다",
    "definition_en": "The ability to perceive, understand, manage, and effectively use emotions in oneself and others",
    "significance": "IQ만으로 설명되지 않는 대인관계 성공, 리더십, 심리적 적응을 설명하며, 정서적 역량이 삶의 성공에 중요하다는 인식을 확산시켰다",
    "key_researchers": [
      {
        "name_ko": "피터 샐러베이",
        "name_en": "Peter Salovey",
        "contribution": "존 메이어와 함께 정서지능의 학술적 개념을 최초로 정의(1990)"
      },
      {
        "name_ko": "존 메이어",
        "name_en": "John D. Mayer",
        "contribution": "샐러베이와 함께 정서지능의 4가지 능력 모형을 개발"
      },
      {
        "name_ko": "대니얼 골먼",
        "name_en": "Daniel Goleman",
        "contribution": "1995년 저서 'Emotional Intelligence'로 정서지능 개념을 대중화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중지능",
        "name_en": "Multiple Intelligences",
        "id": "INTELL_MI_004"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "감정 인식",
        "name_en": "Perceiving Emotions",
        "definition": "자신과 타인의 감정을 정확히 지각하고 표현하는 능력"
      },
      {
        "name_ko": "감정 활용",
        "name_en": "Using Emotions",
        "definition": "사고와 문제해결을 촉진하기 위해 감정을 활용하는 능력"
      },
      {
        "name_ko": "감정 이해",
        "name_en": "Understanding Emotions",
        "definition": "감정의 원인과 변화 과정을 이해하는 능력"
      },
      {
        "name_ko": "감정 조절",
        "name_en": "Managing Emotions",
        "definition": "자신과 타인의 감정을 효과적으로 조절하는 능력"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정서지능 4요소: 인식 → 활용 → 이해 → 조절 (인활이조)",
      "differential": "정서지능은 감정 처리 능력이고, 가드너의 대인관계/자기이해 지능과 관련되지만 별개의 구인이다",
      "key_point": "학술적 정의(Salovey & Mayer)와 대중적 정의(Goleman)의 범위가 다르다는 점을 구분해야 한다",
      "common_mistake": "정서지능이 IQ보다 항상 더 중요하다고 과장하는 것 — 실제 연구 결과는 그보다 제한적이다"
    }
  },
  {
    "id": "INTELL_GF_007",
    "terminology": "유동지능 (Fluid Intelligence)",
    "terminology_ko": "유동지능",
    "terminology_en": "Fluid Intelligence",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "이전 학습이나 경험에 의존하지 않고 새로운 문제를 논리적으로 추론하고 해결하는 능력으로, 추상적 사고와 패턴 인식 능력을 반영한다",
    "definition_en": "The ability to reason logically and solve novel problems independent of previously acquired knowledge, reflecting abstract thinking and pattern recognition",
    "significance": "문화적 편향이 적은 지능의 핵심 요소로, 청소년기에 정점에 도달한 후 성인기 이후 점차 감소하는 발달적 패턴을 보인다",
    "key_researchers": [
      {
        "name_ko": "레이먼드 캐텔",
        "name_en": "Raymond Cattell",
        "contribution": "유동지능(Gf)과 결정지능(Gc)의 구분을 최초로 제안(1963)"
      },
      {
        "name_ko": "존 혼",
        "name_en": "John Horn",
        "contribution": "캐텔의 이론을 발전시켜 유동-결정 지능의 발달적 변화 양상을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결정지능",
        "name_en": "Crystallized Intelligence",
        "id": "INTELL_GC_008"
      },
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "레이번 행렬 추론 검사",
        "name_en": "Raven's Progressive Matrices",
        "id": "INTELL_CFTEST_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "유동 = 흐르는 물처럼 유연한 사고 → 새로운 문제해결, 패턴 인식",
      "differential": "유동지능은 새로운 문제해결 능력이고, 결정지능은 축적된 지식과 경험에 기반한 능력이다",
      "key_point": "유동지능은 20대 이후 감소하지만, 결정지능은 노년기까지 유지되거나 증가할 수 있다",
      "common_mistake": "유동지능이 떨어지면 전반적 지능이 반드시 저하된다고 생각하는 것 — 결정지능이 보상할 수 있다"
    }
  },
  {
    "id": "INTELL_GC_008",
    "terminology": "결정지능 (Crystallized Intelligence)",
    "terminology_ko": "결정지능",
    "terminology_en": "Crystallized Intelligence",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "교육과 경험을 통해 축적된 지식, 어휘력, 사실적 정보 등을 활용하는 능력으로, 문화적 학습의 산물이다",
    "definition_en": "The ability to use acquired knowledge, vocabulary, and factual information accumulated through education and experience; it is a product of cultural learning",
    "significance": "노년기까지 비교적 안정적으로 유지되거나 증가할 수 있어, 유동지능의 감소를 보상하는 역할을 한다",
    "key_researchers": [
      {
        "name_ko": "레이먼드 캐텔",
        "name_en": "Raymond Cattell",
        "contribution": "유동-결정 지능 이론에서 결정지능을 문화적 학습의 산물로 개념화"
      },
      {
        "name_ko": "존 혼",
        "name_en": "John Horn",
        "contribution": "결정지능이 노화에 따라 비교적 안정적으로 유지됨을 실증적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유동지능",
        "name_en": "Fluid Intelligence",
        "id": "INTELL_GF_007"
      },
      {
        "name_ko": "성취검사",
        "name_en": "Achievement Test",
        "id": "INTELL_ACHV_013"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "결정 = 결정(crystal)처럼 굳어진 지식 → 어휘, 상식, 학습된 기술",
      "differential": "결정지능은 '무엇을 아는가(what)', 유동지능은 '어떻게 생각하는가(how)'의 차이",
      "key_point": "결정지능은 어휘력 검사, 일반상식 검사 등으로 측정되며, 교육 수준과 높은 상관을 보인다",
      "common_mistake": "결정지능이 단순 암기력과 같다고 생각하는 것 — 축적된 지식을 적용하는 능력도 포함한다"
    }
  },
  {
    "id": "INTELL_STAND_009",
    "terminology": "표준화 (Standardization)",
    "terminology_ko": "표준화",
    "terminology_en": "Standardization",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사의 실시 절차, 채점 방법, 해석 기준을 통일하고, 대표적 표본(표준화 집단)의 수행 결과를 기준으로 규준(norms)을 설정하는 과정이다",
    "definition_en": "The process of establishing uniform procedures for test administration, scoring, and interpretation, and developing norms based on a representative standardization sample",
    "significance": "검사 결과의 객관적 비교를 가능하게 하며, 검사의 신뢰도와 타당도를 확보하기 위한 필수적 전제 조건이다",
    "key_researchers": [
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "최초의 표준화된 지능검사를 개발하여 체계적 규준 설정의 모범을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정상분포",
        "name_en": "Normal Distribution",
        "id": "INTELL_NORM_011"
      },
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "id": "INTELL_TRR_028"
      },
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "INTELL_PV_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표준화 = 절차 통일 + 규준 설정 → 공정한 비교의 토대",
      "differential": "표준화는 검사 절차와 규준 설정 과정이고, 신뢰도/타당도는 검사 품질의 평가 기준이다",
      "key_point": "표준화 집단이 대표성을 갖추어야 검사 결과를 일반화할 수 있다",
      "common_mistake": "표준화된 검사가 반드시 편향이 없다고 생각하는 것 — 표준화 집단의 구성에 따라 편향이 존재할 수 있다"
    }
  },
  {
    "id": "INTELL_REL_010",
    "terminology": "신뢰도 (Reliability)",
    "terminology_ko": "신뢰도",
    "terminology_en": "Reliability",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사가 측정하고자 하는 것을 얼마나 일관되게 측정하는지를 나타내는 정도로, 동일한 조건에서 반복 측정 시 결과의 안정성을 의미한다",
    "definition_en": "The degree to which a test consistently measures what it is intended to measure, reflecting the stability of scores across repeated measurements under the same conditions",
    "significance": "타당도의 필수 전제조건으로, 신뢰도가 낮은 검사는 어떤 것도 정확히 측정할 수 없다",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "크론바흐 알파 계수를 개발하여 내적 일관성 신뢰도 측정 방법을 표준화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "id": "INTELL_TRR_028"
      },
      {
        "name_ko": "측정의 표준오차",
        "name_en": "Standard Error of Measurement",
        "id": "INTELL_SEM_027"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTELL_VAL_012"
      }
    ],
    "sub_types": [
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "definition": "동일한 검사를 동일 집단에게 시간 간격을 두고 두 번 실시하여 점수 간 상관을 산출"
      },
      {
        "name_ko": "반분 신뢰도",
        "name_en": "Split-Half Reliability",
        "definition": "검사를 두 부분으로 나누어 각 부분 점수 간 상관을 산출"
      },
      {
        "name_ko": "내적 일관성 신뢰도",
        "name_en": "Internal Consistency Reliability",
        "definition": "검사 문항들 간의 일관성을 측정 (예: 크론바흐 알파)"
      },
      {
        "name_ko": "채점자 간 신뢰도",
        "name_en": "Inter-Rater Reliability",
        "definition": "두 명 이상의 채점자가 동일한 응답에 대해 부여한 점수 간의 일치도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "신뢰도 = 일관성(Consistency) → 같은 사람을 여러 번 재면 같은 결과가 나오는가?",
      "differential": "신뢰도는 '일관성', 타당도는 '정확성' — 신뢰도가 높아도 타당도가 낮을 수 있다",
      "key_point": "신뢰도는 타당도의 필요조건이지만 충분조건은 아니다",
      "common_mistake": "신뢰도가 높으면 타당도도 자동으로 높다고 생각하는 것 — 일관되게 잘못 측정할 수 있다"
    }
  },
  {
    "id": "INTELL_NORM_011",
    "terminology": "정상분포 (Normal Distribution)",
    "terminology_ko": "정상분포",
    "terminology_en": "Normal Distribution",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "평균을 중심으로 좌우 대칭인 종 모양(bell curve)의 확률 분포로, 대부분의 사례가 평균 근처에 집중되고 극단값으로 갈수록 빈도가 줄어드는 분포이다",
    "definition_en": "A symmetric, bell-shaped probability distribution in which most cases cluster around the mean and frequency decreases progressively toward the extremes",
    "significance": "IQ 점수의 분포가 정상분포를 따르도록 설계되어 있어, 개인의 상대적 위치를 해석하고 지적장애/영재 판별의 기준을 설정하는 데 핵심적이다",
    "key_researchers": [
      {
        "name_ko": "카를 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "정상분포의 수학적 공식을 정립하여 '가우스 분포'로도 불린다"
      },
      {
        "name_ko": "아돌프 케틀레",
        "name_en": "Adolphe Quetelet",
        "contribution": "인간의 신체적·심리적 특성이 정상분포를 따른다는 것을 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      },
      {
        "name_ko": "표준화",
        "name_en": "Standardization",
        "id": "INTELL_STAND_009"
      },
      {
        "name_ko": "편차지능",
        "name_en": "Deviation IQ",
        "id": "INTELL_DIQ_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "68-95-99.7 법칙: 평균 ±1SD에 68%, ±2SD에 95%, ±3SD에 99.7%",
      "differential": "정상분포는 이론적 분포이고, 실제 데이터가 항상 완벽한 정상분포를 따르지는 않는다",
      "key_point": "IQ 분포에서 평균 100, SD 15 기준으로 IQ 70 이하(약 2.2%)가 지적장애, 130 이상(약 2.2%)이 영재에 해당한다",
      "common_mistake": "모든 심리적 특성이 정상분포를 따른다고 가정하는 것 — 일부 변인은 편포된 분포를 보인다"
    }
  },
  {
    "id": "INTELL_VAL_012",
    "terminology": "타당도 (Validity)",
    "terminology_ko": "타당도",
    "terminology_en": "Validity",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사가 측정하고자 의도한 것을 실제로 얼마나 정확하게 측정하고 있는지의 정도이다",
    "definition_en": "The degree to which a test actually measures what it is intended to measure",
    "significance": "검사의 가장 중요한 속성으로, 검사 결과에 기반한 해석과 의사결정의 적절성을 좌우한다",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "구인타당도 개념의 체계화에 기여하고 타당도를 검사 점수 해석의 적절성으로 재정의"
      },
      {
        "name_ko": "사무엘 메식",
        "name_en": "Samuel Messick",
        "contribution": "타당도를 단일한 통합적 개념으로 재개념화하여 현대 타당도 이론을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTELL_REL_010"
      },
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "INTELL_PV_029"
      },
      {
        "name_ko": "구인타당도",
        "name_en": "Construct Validity",
        "id": "INTELL_CV_030"
      }
    ],
    "sub_types": [
      {
        "name_ko": "내용타당도",
        "name_en": "Content Validity",
        "definition": "검사 문항이 측정하려는 내용 영역을 얼마나 충실히 대표하는지의 정도"
      },
      {
        "name_ko": "준거타당도",
        "name_en": "Criterion Validity",
        "definition": "검사 점수가 외부 준거(기준)와 얼마나 관련되는지의 정도 (예측타당도와 공인타당도 포함)"
      },
      {
        "name_ko": "구인타당도",
        "name_en": "Construct Validity",
        "definition": "검사가 이론적으로 정의된 심리적 구인을 실제로 측정하는지의 정도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "타당도 = 정확성(Accuracy) → 과녁의 중심을 맞추고 있는가?",
      "differential": "신뢰도는 '같은 결과를 반복하는가(일관성)', 타당도는 '올바른 것을 측정하는가(정확성)'",
      "key_point": "타당도 없는 신뢰도는 가능하지만, 신뢰도 없는 타당도는 불가능하다",
      "common_mistake": "타당도를 한 가지 유형만으로 확인할 수 있다고 생각하는 것 — 다양한 증거의 축적이 필요하다"
    }
  },
  {
    "id": "INTELL_ACHV_013",
    "terminology": "성취검사 (Achievement Test)",
    "terminology_ko": "성취검사",
    "terminology_en": "Achievement Test",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "특정 교육 과정이나 훈련을 통해 학습한 지식과 기술의 현재 수준을 측정하는 검사이다",
    "definition_en": "A test designed to measure the current level of knowledge and skills acquired through specific educational programs or training",
    "significance": "학업 성취 수준의 평가, 교육 프로그램의 효과 검증, 학생의 학습 진행도 모니터링에 활용된다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "적성검사",
        "name_en": "Aptitude Test",
        "id": "INTELL_APT_014"
      },
      {
        "name_ko": "결정지능",
        "name_en": "Crystallized Intelligence",
        "id": "INTELL_GC_008"
      },
      {
        "name_ko": "성취도 격차",
        "name_en": "Achievement Gap",
        "id": "INTELL_AG_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성취검사 = 과거에 '배운 것'을 측정 → 기말고사, 수능이 대표적 예",
      "differential": "성취검사는 '이미 배운 것'을, 적성검사는 '앞으로의 잠재력'을 측정한다",
      "key_point": "성취검사와 적성검사의 구분은 이론적이며, 실제로 두 검사는 상당한 중복이 있다",
      "common_mistake": "성취검사가 순수하게 학습만 반영한다고 생각하는 것 — 지능, 동기 등도 영향을 미친다"
    }
  },
  {
    "id": "INTELL_APT_014",
    "terminology": "적성검사 (Aptitude Test)",
    "terminology_ko": "적성검사",
    "terminology_en": "Aptitude Test",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "미래의 학습이나 수행 능력, 즉 잠재적 역량을 예측하기 위해 설계된 검사이다",
    "definition_en": "A test designed to predict future learning ability or performance potential, measuring what an individual can learn to do rather than what has already been learned",
    "significance": "교육 배치, 직업 선택, 진로 상담에서 개인의 잠재력을 예측하는 데 활용되며, 지능검사 자체가 넓은 의미의 적성검사에 해당한다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "성취검사",
        "name_en": "Achievement Test",
        "id": "INTELL_ACHV_013"
      },
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "INTELL_PV_029"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "적성검사 = 미래 '잠재력' 예측 → 무엇을 배울 수 있는가?",
      "differential": "적성검사는 미래 수행을 예측하고, 성취검사는 과거 학습 결과를 측정한다",
      "key_point": "적성검사와 성취검사의 구분은 절대적이지 않다 — 과거 성취가 미래 적성을 예측하기도 한다",
      "common_mistake": "적성검사가 타고난 능력만 측정한다고 생각하는 것 — 환경과 경험의 영향도 반영된다"
    }
  },
  {
    "id": "INTELL_ST_015",
    "terminology": "고정관념 위협 (Stereotype Threat)",
    "terminology_ko": "고정관념 위협",
    "terminology_en": "Stereotype Threat",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "특정 집단에 대한 부정적 고정관념이 활성화될 때, 해당 집단 구성원이 그 고정관념을 확인시킬 수 있다는 불안감으로 인해 실제 수행이 저하되는 현상이다",
    "definition_en": "A situational predicament in which individuals feel at risk of confirming a negative stereotype about their group, leading to anxiety and impaired performance on the stereotyped domain",
    "significance": "집단 간 검사 점수 차이가 능력의 차이가 아닌 검사 상황의 심리적 요인에 의해 발생할 수 있음을 보여주어, 검사의 공정성 논의에 중요한 기여를 했다",
    "key_researchers": [
      {
        "name_ko": "클로드 스틸",
        "name_en": "Claude Steele",
        "contribution": "고정관념 위협 개념을 최초로 제안하고 실험적으로 입증(1995)"
      },
      {
        "name_ko": "조슈아 애런슨",
        "name_en": "Joshua Aronson",
        "contribution": "스틸과 함께 아프리카계 미국인 학생들의 검사 수행에 대한 고정관념 위협 효과를 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "문화공정 검사",
        "name_en": "Culture-Fair Test",
        "id": "INTELL_CFTEST_023"
      },
      {
        "name_ko": "성취도 격차",
        "name_en": "Achievement Gap",
        "id": "INTELL_AG_024"
      },
      {
        "name_ko": "검사 편향",
        "name_en": "Test Bias",
        "id": "INTELL_BIAS_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "고정관념 위협 = '나는 이 집단이니까 못할 거야'라는 불안 → 실제 수행 저하",
      "differential": "고정관념 위협은 상황적·일시적 현상이고, 검사 편향은 검사 자체의 구조적 문제이다",
      "key_point": "검사 전에 '이 검사는 인종/성별 차이가 없다'고 알려주면 고정관념 위협 효과가 줄어든다",
      "common_mistake": "고정관념 위협이 모든 집단 간 점수 차이를 설명한다고 생각하는 것 — 설명력은 일부분이다"
    }
  },
  {
    "id": "INTELL_BIAS_016",
    "terminology": "검사 편향 (Test Bias)",
    "terminology_ko": "검사 편향",
    "terminology_en": "Test Bias",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사가 특정 집단에게 체계적으로 유리하거나 불리하게 작용하여, 실제 능력과 무관한 점수 차이를 만들어내는 검사의 구조적 문제이다",
    "definition_en": "A systematic error in a test that consistently favors or disadvantages particular groups, producing score differences unrelated to actual ability differences",
    "significance": "검사의 공정성과 형평성 확보에 핵심적 문제로, 문항 편향 분석(DIF) 등의 통계적 방법을 통해 검증하고 최소화해야 한다",
    "key_researchers": [
      {
        "name_ko": "아서 젠슨",
        "name_en": "Arthur Jensen",
        "contribution": "검사 편향 논쟁을 촉발하여 지능검사의 문화적 공정성에 대한 학술적 논의를 활성화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정관념 위협",
        "name_en": "Stereotype Threat",
        "id": "INTELL_ST_015"
      },
      {
        "name_ko": "문화공정 검사",
        "name_en": "Culture-Fair Test",
        "id": "INTELL_CFTEST_023"
      },
      {
        "name_ko": "표준화",
        "name_en": "Standardization",
        "id": "INTELL_STAND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "검사 편향 = 검사 자체가 기울어진 운동장 → 특정 집단에게 불공정",
      "differential": "검사 편향은 검사의 구조적 문제이고, 고정관념 위협은 검사 상황의 심리적 효과이다",
      "key_point": "점수 차이가 존재하는 것 자체가 편향은 아니다 — 편향은 점수가 능력을 동등하게 예측하지 못할 때 성립한다",
      "common_mistake": "집단 간 점수 차이가 곧 검사 편향이라고 생각하는 것 — 차이와 편향은 구분해야 한다"
    }
  },
  {
    "id": "INTELL_ID_017",
    "terminology": "지적장애 (Intellectual Disability)",
    "terminology_ko": "지적장애",
    "terminology_en": "Intellectual Disability",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "발달기(18세 이전)에 시작되며, IQ 70 이하의 지적 기능과 적응행동(개념적, 사회적, 실용적 기술)의 유의미한 결함이 함께 나타나는 상태이다",
    "definition_en": "A condition originating during the developmental period (before age 18), characterized by significant limitations in both intellectual functioning (IQ below approximately 70) and adaptive behavior across conceptual, social, and practical domains",
    "significance": "DSM-5에서 '정신지체(Mental Retardation)'에서 '지적장애'로 명칭이 변경되었으며, 진단 시 IQ 점수뿐 아니라 적응행동 평가가 필수적이다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "정상분포",
        "name_en": "Normal Distribution",
        "id": "INTELL_NORM_011"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      },
      {
        "name_ko": "영재성",
        "name_en": "Giftedness",
        "id": "INTELL_GIFT_018"
      }
    ],
    "sub_types": [
      {
        "name_ko": "경도 지적장애",
        "name_en": "Mild Intellectual Disability",
        "definition": "IQ 50-70 범위, 전체 지적장애의 약 85%를 차지하며 적절한 지원으로 독립적 생활 가능"
      },
      {
        "name_ko": "중등도 지적장애",
        "name_en": "Moderate Intellectual Disability",
        "definition": "IQ 35-49 범위, 기본적 자기관리 가능하나 감독하에 생활"
      },
      {
        "name_ko": "중도 지적장애",
        "name_en": "Severe Intellectual Disability",
        "definition": "IQ 20-34 범위, 일상생활에 상당한 도움이 필요"
      },
      {
        "name_ko": "최중도 지적장애",
        "name_en": "Profound Intellectual Disability",
        "definition": "IQ 20 미만, 전반적인 생활 영역에서 지속적이고 집중적인 지원이 필요"
      }
    ],
    "quiz_hints": {
      "mnemonic": "지적장애 진단 = IQ 70 이하 + 적응행동 결함 + 18세 이전 발현 (3가지 모두 충족)",
      "differential": "지적장애는 발달기 시작, 치매는 정상 발달 후 인지기능 퇴행이라는 점에서 다르다",
      "key_point": "DSM-5에서는 중증도를 IQ 점수가 아닌 적응기능 수준에 따라 결정한다",
      "common_mistake": "IQ 70 이하이면 자동으로 지적장애라고 생각하는 것 — 적응행동 결함과 발달기 발현도 필수이다"
    }
  },
  {
    "id": "INTELL_GIFT_018",
    "terminology": "영재성 (Giftedness)",
    "terminology_ko": "영재성",
    "terminology_en": "Giftedness",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "한 가지 이상의 영역에서 뛰어난 능력이나 잠재력을 보이는 것으로, 전통적으로 IQ 130 이상(상위 약 2%)을 기준으로 하지만 현대에는 창의성, 과제집착력 등 다차원적 기준을 적용한다",
    "definition_en": "Outstanding ability or potential in one or more domains, traditionally defined as an IQ of 130 or above (top ~2%), though modern conceptions incorporate creativity, task commitment, and multidimensional criteria",
    "significance": "영재 교육 프로그램의 선발 기준과 교육 방법에 대한 논쟁을 촉발하며, 지능의 상한과 극단적 재능의 본질에 대한 이해를 돕는다",
    "key_researchers": [
      {
        "name_ko": "루이스 터먼",
        "name_en": "Lewis Terman",
        "contribution": "IQ 135 이상 영재 아동 1,528명을 대상으로 한 종단연구(Terman Study)를 수행"
      },
      {
        "name_ko": "조셉 렌줄리",
        "name_en": "Joseph Renzulli",
        "contribution": "영재성의 세 고리 모형(능력, 과제집착력, 창의성)을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "INTELL_ID_017"
      },
      {
        "name_ko": "정상분포",
        "name_en": "Normal Distribution",
        "id": "INTELL_NORM_011"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "렌줄리의 세 고리: 평균 이상 능력 + 과제집착력 + 창의성 = 영재성",
      "differential": "영재성은 높은 IQ만이 아니라 창의성과 동기도 포함하는 다차원적 개념이다",
      "key_point": "터먼의 종단연구는 영재 아동이 대체로 건강하고 사회적으로 잘 적응한다는 것을 보여주었다",
      "common_mistake": "영재가 모든 영역에서 뛰어나다고 생각하는 것 — 영역 특수적 영재성이 일반적이다"
    }
  },
  {
    "id": "INTELL_MA_019",
    "terminology": "정신연령 (Mental Age)",
    "terminology_ko": "정신연령",
    "terminology_en": "Mental Age",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "특정 연령 집단의 평균적 아동이 해결할 수 있는 검사 문제의 수준으로 개인의 지적 발달 수준을 나타내는 개념으로, 비네-시몽 검사에서 최초로 사용되었다",
    "definition_en": "A concept introduced in the Binet-Simon test representing an individual's intellectual developmental level, defined as the age level of problems that an average child of that age can solve",
    "significance": "최초의 지능 측정 단위로서 역사적 의의가 크지만, 성인에게 적용하기 어렵다는 한계로 인해 현대에는 편차 IQ로 대체되었다",
    "key_researchers": [
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "테오도르 시몽과 함께 정신연령 개념을 도입한 최초의 지능검사를 개발"
      },
      {
        "name_ko": "테오도르 시몽",
        "name_en": "Théodore Simon",
        "contribution": "비네와 함께 비네-시몽 검사를 공동 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      },
      {
        "name_ko": "비네-시몽 검사",
        "name_en": "Binet-Simon Test",
        "id": "INTELL_BS_025"
      },
      {
        "name_ko": "편차지능",
        "name_en": "Deviation IQ",
        "id": "INTELL_DIQ_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정신연령 8세 = 평균적인 8세 아동 수준의 문제를 풀 수 있다",
      "differential": "정신연령은 절대적 발달 수준이고, IQ는 동년배 대비 상대적 위치를 나타낸다",
      "key_point": "정신연령은 아동에게는 유용하지만, 성인의 지적 수준을 구분하기에는 부적절하다",
      "common_mistake": "정신연령이 높으면 IQ가 항상 높다고 생각하는 것 — 생활연령도 고려해야 한다 (MA 10, CA 10이면 IQ 100)"
    }
  },
  {
    "id": "INTELL_DIQ_020",
    "terminology": "편차지능 (Deviation IQ)",
    "terminology_ko": "편차지능",
    "terminology_en": "Deviation IQ",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "동일 연령 집단의 평균(100)과 표준편차(15 또는 16)를 기준으로 개인의 상대적 위치를 나타내는 현대적 IQ 산출 방식이다",
    "definition_en": "A modern method of calculating IQ that indicates an individual's relative position based on the mean (100) and standard deviation (15 or 16) of the same-age reference group",
    "significance": "비율 IQ의 한계(성인 적용 불가, 연령별 IQ 변동성)를 극복하여 모든 연령에서 동일한 기준으로 비교할 수 있게 했다",
    "key_researchers": [
      {
        "name_ko": "데이비드 웩슬러",
        "name_en": "David Wechsler",
        "contribution": "비율 IQ 대신 편차 IQ 개념을 최초로 도입하여 웩슬러 지능검사에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신연령",
        "name_en": "Mental Age",
        "id": "INTELL_MA_019"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      },
      {
        "name_ko": "정상분포",
        "name_en": "Normal Distribution",
        "id": "INTELL_NORM_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편차 IQ = 100 + 15 × (개인점수 - 집단평균) / 표준편차",
      "differential": "편차 IQ는 동년배 대비 상대적 위치이고, 비율 IQ는 정신연령/생활연령의 비율이다",
      "key_point": "웩슬러 검사는 SD=15, 스탠포드-비네 5판은 SD=15(이전에는 SD=16)를 사용한다",
      "common_mistake": "편차 IQ가 절대적 능력치라고 생각하는 것 — 동년배 집단 내의 상대적 순위이다"
    }
  },
  {
    "id": "INTELL_FA_021",
    "terminology": "요인분석 (Factor Analysis)",
    "terminology_ko": "요인분석",
    "terminology_en": "Factor Analysis",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "다수의 관찰 변인들 간의 상관 패턴을 분석하여 그 기저에 있는 소수의 잠재 요인(공통 요인)을 추출하는 통계적 방법이다",
    "definition_en": "A statistical method that analyzes patterns of correlations among multiple observed variables to identify a smaller number of underlying latent factors",
    "significance": "스피어만의 g요인 발견, 서스톤의 기본정신능력 도출 등 지능의 구조를 밝히는 핵심 방법론으로, 심리검사 개발과 구인타당도 검증에 필수적이다",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "요인분석 기법을 개발하고 이를 통해 g요인을 추출"
      },
      {
        "name_ko": "루이스 서스톤",
        "name_en": "Louis Thurstone",
        "contribution": "다중요인분석을 통해 7가지 기본정신능력(Primary Mental Abilities)을 도출"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "s요인",
        "name_en": "Specific Factor",
        "id": "INTELL_SFACT_022"
      },
      {
        "name_ko": "구인타당도",
        "name_en": "Construct Validity",
        "id": "INTELL_CV_030"
      }
    ],
    "sub_types": [
      {
        "name_ko": "탐색적 요인분석",
        "name_en": "Exploratory Factor Analysis (EFA)",
        "definition": "사전 가설 없이 데이터에서 요인 구조를 탐색하는 방법"
      },
      {
        "name_ko": "확인적 요인분석",
        "name_en": "Confirmatory Factor Analysis (CFA)",
        "definition": "이론적으로 가정한 요인 구조가 데이터에 부합하는지 검증하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "요인분석 = 많은 변인 → 소수의 숨겨진 요인 추출 (데이터 축소)",
      "differential": "요인분석은 변인 간 상관에서 잠재 요인을 추출하고, 군집분석은 사례(사람)를 유사 집단으로 분류한다",
      "key_point": "스피어만은 요인분석으로 단일 g요인을, 서스톤은 다중요인을 추출하여 지능 구조 논쟁이 시작되었다",
      "common_mistake": "요인분석이 인과관계를 증명한다고 생각하는 것 — 상관 패턴에 기반한 통계적 도구일 뿐이다"
    }
  },
  {
    "id": "INTELL_SFACT_022",
    "terminology": "특수요인 (Specific Factor, s factor)",
    "terminology_ko": "특수요인",
    "terminology_en": "Specific Factor (s factor)",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "스피어만의 2요인 이론에서 특정 과제에만 고유하게 작용하는 능력 요인으로, 각 인지 과제에는 고유한 s요인이 존재한다",
    "definition_en": "In Spearman's two-factor theory, a factor unique to a particular cognitive task; each specific test has its own s factor that contributes to performance only on that test",
    "significance": "g요인과 함께 스피어만의 2요인 이론을 구성하며, 이후 서스톤의 기본정신능력, 캐텔의 유동-결정 지능 등 다요인 이론 발전의 토대가 되었다",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "일반지능(g)과 특수지능(s)의 2요인 이론을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일반지능",
        "name_en": "General Intelligence",
        "id": "INTELL_GFACT_003"
      },
      {
        "name_ko": "요인분석",
        "name_en": "Factor Analysis",
        "id": "INTELL_FA_021"
      },
      {
        "name_ko": "다중지능",
        "name_en": "Multiple Intelligences",
        "id": "INTELL_MI_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "s = specific = 특정 과제에만 '특수하게' 작용하는 능력",
      "differential": "g요인은 모든 과제에 공통, s요인은 각 과제에 고유하다",
      "key_point": "스피어만은 g요인이 s요인보다 더 중요하다고 보았지만, 서스톤은 개별 능력(s와 유사)의 독립성을 강조했다",
      "common_mistake": "s요인이 서스톤의 기본정신능력과 동일하다고 생각하는 것 — s는 과제 수준, 기본정신능력은 능력 군 수준이다"
    }
  },
  {
    "id": "INTELL_CFTEST_023",
    "terminology": "문화공정 검사 (Culture-Fair Test)",
    "terminology_ko": "문화공정 검사",
    "terminology_en": "Culture-Fair Test",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "특정 문화적 배경이나 언어 능력의 영향을 최소화하도록 설계된 지능검사로, 주로 비언어적 과제(도형 추론, 패턴 완성 등)를 사용한다",
    "definition_en": "An intelligence test designed to minimize the influence of specific cultural backgrounds and language abilities, typically using nonverbal tasks such as figural reasoning and pattern completion",
    "significance": "문화적 다양성이 증가하는 사회에서 공정한 지능 평가를 위한 대안으로 개발되었으나, 완전히 문화적 영향을 제거하는 것은 불가능하다는 한계가 있다",
    "key_researchers": [
      {
        "name_ko": "레이먼드 캐텔",
        "name_en": "Raymond Cattell",
        "contribution": "Culture Fair Intelligence Test(CFIT)를 개발"
      },
      {
        "name_ko": "존 레이번",
        "name_en": "John C. Raven",
        "contribution": "레이번 누진행렬검사(Raven's Progressive Matrices)를 개발하여 비언어적 지능 측정의 표준을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검사 편향",
        "name_en": "Test Bias",
        "id": "INTELL_BIAS_016"
      },
      {
        "name_ko": "유동지능",
        "name_en": "Fluid Intelligence",
        "id": "INTELL_GF_007"
      },
      {
        "name_ko": "고정관념 위협",
        "name_en": "Stereotype Threat",
        "id": "INTELL_ST_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "문화공정 = 언어 없이 도형/패턴으로 → 문화 편향 최소화",
      "differential": "문화공정 검사는 유동지능 측정에 가깝고, 전통적 IQ 검사는 결정지능도 포함한다",
      "key_point": "레이번 행렬 추론 검사가 대표적이며, 완전히 문화 무관한 검사는 존재하지 않는다",
      "common_mistake": "문화공정 검사가 문화적 영향을 완전히 제거한다고 생각하는 것 — '최소화'할 뿐이다"
    }
  },
  {
    "id": "INTELL_AG_024",
    "terminology": "성취도 격차 (Achievement Gap)",
    "terminology_ko": "성취도 격차",
    "terminology_en": "Achievement Gap",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "인종, 민족, 성별, 사회경제적 지위 등 집단 간에 나타나는 학업 성취나 표준화 검사 점수의 체계적 차이이다",
    "definition_en": "Systematic differences in academic achievement or standardized test scores observed between groups defined by race, ethnicity, gender, or socioeconomic status",
    "significance": "교육 형평성의 핵심 지표로, 유전-환경 논쟁, 검사 편향, 교육 기회의 불평등 등 복합적인 요인에 대한 논의를 촉발한다",
    "key_researchers": [
      {
        "name_ko": "제임스 콜먼",
        "name_en": "James Coleman",
        "contribution": "1966년 콜먼 보고서를 통해 교육 기회의 불평등과 성취도 격차의 관계를 최초로 대규모 조사"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정관념 위협",
        "name_en": "Stereotype Threat",
        "id": "INTELL_ST_015"
      },
      {
        "name_ko": "검사 편향",
        "name_en": "Test Bias",
        "id": "INTELL_BIAS_016"
      },
      {
        "name_ko": "유전-환경 논쟁",
        "name_en": "Nature-Nurture Debate",
        "id": "INTELL_NN_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성취도 격차 = 집단 간 검사 점수 차이 → 원인은 복합적(환경, 기회, 편향 등)",
      "differential": "성취도 격차는 집단 수준의 현상이고, 검사 편향은 검사 자체의 속성이다",
      "key_point": "성취도 격차는 집단 간 '평균'의 차이이며, 집단 내 변산이 집단 간 변산보다 항상 더 크다",
      "common_mistake": "성취도 격차를 유전적 차이로만 설명하려는 것 — 환경적 요인(교육 기회, 빈곤, 차별)이 주된 원인이다"
    }
  },
  {
    "id": "INTELL_NN_025",
    "terminology": "유전-환경 논쟁 (Nature-Nurture Debate)",
    "terminology_ko": "유전-환경 논쟁",
    "terminology_en": "Nature-Nurture Debate",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "지능이 주로 유전적 요인에 의해 결정되는지, 환경적 요인에 의해 결정되는지에 대한 오랜 학문적 논쟁으로, 현대에는 양자의 상호작용을 강조한다",
    "definition_en": "The longstanding scholarly debate over whether intelligence is primarily determined by genetic or environmental factors; modern consensus emphasizes the interaction between both",
    "significance": "지능 연구의 핵심 논쟁으로, 교육 정책, 사회 불평등 해소, 지능 향상 가능성에 대한 이해에 직결된다",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "유전적 결정론의 초기 주창자로 'nature vs. nurture' 용어를 대중화"
      },
      {
        "name_ko": "아서 젠슨",
        "name_en": "Arthur Jensen",
        "contribution": "지능의 유전율이 약 80%라고 주장하여 논쟁을 촉발(1969)"
      },
      {
        "name_ko": "에릭 터크하이머",
        "name_en": "Eric Turkheimer",
        "contribution": "사회경제적 지위에 따라 유전율이 달라진다는 것을 발견(유전-환경 상호작용)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "쌍생아 연구",
        "name_en": "Twin Studies",
        "id": "INTELL_TWIN_026"
      },
      {
        "name_ko": "성취도 격차",
        "name_en": "Achievement Gap",
        "id": "INTELL_AG_024"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Nature(유전) + Nurture(양육/환경) → 현대 답: 상호작용(interaction)",
      "differential": "유전율(heritability)은 집단 수준의 통계치이고, 개인의 지능이 얼마나 유전되었는지를 의미하지 않는다",
      "key_point": "유전율이 높다는 것은 유전이 집단 내 변산의 많은 부분을 설명한다는 의미이지, 환경이 중요하지 않다는 의미가 아니다",
      "common_mistake": "유전율 80%가 '지능의 80%가 유전에 의해 결정된다'는 의미로 해석하는 것 — 유전율은 집단의 변산 설명 비율이다"
    }
  },
  {
    "id": "INTELL_TWIN_026",
    "terminology": "쌍생아 연구 (Twin Studies)",
    "terminology_ko": "쌍생아 연구",
    "terminology_en": "Twin Studies",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "일란성 쌍생아와 이란성 쌍생아의 유사성을 비교하여 특정 특성에 대한 유전과 환경의 상대적 기여도를 추정하는 연구 방법이다",
    "definition_en": "A research method that compares the similarity between identical (monozygotic) and fraternal (dizygotic) twins to estimate the relative contributions of genetic and environmental factors to a particular trait",
    "significance": "지능의 유전율 추정에 가장 중요한 증거를 제공하며, 따로 자란 일란성 쌍생아 연구는 유전적 영향의 강력한 증거로 활용된다",
    "key_researchers": [
      {
        "name_ko": "토머스 보처드",
        "name_en": "Thomas Bouchard",
        "contribution": "미네소타 쌍생아 연구(MISTRA)를 수행하여 따로 자란 일란성 쌍생아의 IQ 상관(약 .70)을 보고"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유전-환경 논쟁",
        "name_en": "Nature-Nurture Debate",
        "id": "INTELL_NN_025"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일란성(MZ) > 이란성(DZ) 상관 → 유전적 영향 존재, 격차 크기 → 유전율 추정",
      "differential": "쌍생아 연구는 유전율을 추정하고, 입양 연구는 공유 환경의 효과를 분리한다",
      "key_point": "따로 자란 일란성 쌍생아의 IQ 상관은 약 .70으로, 같이 자란 이란성 쌍생아(.60)보다 높다",
      "common_mistake": "쌍생아 연구가 유전과 환경을 완벽히 분리할 수 있다고 생각하는 것 — 가정(동일 환경 가정 등)의 한계가 있다"
    }
  },
  {
    "id": "INTELL_SEM_027",
    "terminology": "측정의 표준오차 (Standard Error of Measurement)",
    "terminology_ko": "측정의 표준오차",
    "terminology_en": "Standard Error of Measurement (SEM)",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "개인의 검사 점수가 진점수(true score)로부터 얼마나 벗어날 수 있는지를 나타내는 통계치로, 검사 점수의 불확실성 범위를 추정한다",
    "definition_en": "A statistic indicating how much an individual's observed test score may deviate from their true score, providing an estimate of the range of uncertainty around a test score",
    "significance": "검사 점수를 단일 점수가 아닌 신뢰구간으로 해석해야 함을 보여주며, 임상적 판단과 교육적 배치에서 점수 해석의 신중함을 요구한다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTELL_REL_010"
      },
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "id": "INTELL_TRR_028"
      },
      {
        "name_ko": "표준화",
        "name_en": "Standardization",
        "id": "INTELL_STAND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SEM = SD × √(1 - 신뢰도) → 신뢰도가 높을수록 SEM은 작아진다",
      "differential": "표준편차는 집단 점수의 분산이고, SEM은 개인 점수의 측정 오차 범위이다",
      "key_point": "IQ 점수 100, SEM 3이면, 95% 신뢰구간은 약 94-106 (100 ± 2×SEM)이다",
      "common_mistake": "IQ 점수를 정확한 고정값으로 해석하는 것 — 항상 SEM을 고려한 범위로 해석해야 한다"
    }
  },
  {
    "id": "INTELL_TRR_028",
    "terminology": "검사-재검사 신뢰도 (Test-Retest Reliability)",
    "terminology_ko": "검사-재검사 신뢰도",
    "terminology_en": "Test-Retest Reliability",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "동일한 검사를 동일한 집단에게 일정 시간 간격을 두고 두 번 실시한 뒤, 두 점수 간의 상관계수를 산출하여 검사의 시간적 안정성을 평가하는 방법이다",
    "definition_en": "A method of assessing a test's temporal stability by administering the same test to the same group on two occasions separated by a time interval and calculating the correlation between the two sets of scores",
    "significance": "검사 결과가 시간에 걸쳐 안정적인지를 확인하는 가장 직접적인 방법으로, 특히 지능검사와 같은 안정적 특성 측정에 중요하다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "INTELL_REL_010"
      },
      {
        "name_ko": "측정의 표준오차",
        "name_en": "Standard Error of Measurement",
        "id": "INTELL_SEM_027"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTELL_VAL_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "검사-재검사 = 같은 시험을 두 번 → 점수 상관이 높으면 안정적(신뢰로운)",
      "differential": "검사-재검사는 시간적 안정성, 반분 신뢰도는 내적 일관성을 측정한다",
      "key_point": "재검사 간격이 너무 짧으면 연습 효과, 너무 길면 실제 변화가 결과에 영향을 준다",
      "common_mistake": "검사-재검사 신뢰도가 높으면 검사의 모든 측면이 신뢰롭다고 생각하는 것 — 시간적 안정성 한 측면만 평가한다"
    }
  },
  {
    "id": "INTELL_PV_029",
    "terminology": "예측타당도 (Predictive Validity)",
    "terminology_ko": "예측타당도",
    "terminology_en": "Predictive Validity",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사 점수가 미래의 행동이나 수행을 얼마나 정확하게 예측하는지를 나타내는 타당도의 한 유형으로, 준거타당도의 하위 유형이다",
    "definition_en": "A type of criterion validity indicating how accurately test scores predict future behavior or performance, assessed by correlating test scores with a criterion measured at a later time",
    "significance": "지능검사가 학업 성취, 직업 수행 등 실제 결과를 얼마나 잘 예측하는지를 평가하는 핵심 지표이다",
    "key_researchers": [],
    "related_concepts": [
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTELL_VAL_012"
      },
      {
        "name_ko": "적성검사",
        "name_en": "Aptitude Test",
        "id": "INTELL_APT_014"
      },
      {
        "name_ko": "구인타당도",
        "name_en": "Construct Validity",
        "id": "INTELL_CV_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "예측타당도 = 검사(지금) → 준거(미래) 상관 → 미래를 예측하는가?",
      "differential": "예측타당도는 미래 준거와의 상관이고, 공인타당도는 현재 준거와의 동시적 상관이다",
      "key_point": "IQ 검사의 학업 성취 예측타당도는 약 .50으로, 의미 있지만 완벽하지는 않다",
      "common_mistake": "예측타당도가 높으면 모든 개인의 미래를 정확히 예측할 수 있다고 생각하는 것 — 집단 수준의 통계적 관계이다"
    }
  },
  {
    "id": "INTELL_CV_030",
    "terminology": "구인타당도 (Construct Validity)",
    "terminology_ko": "구인타당도",
    "terminology_en": "Construct Validity",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "검사가 이론적으로 정의된 심리적 구인(construct)을 실제로 측정하고 있는지를 다양한 증거를 통해 검증하는 타당도의 유형이다",
    "definition_en": "A type of validity that examines whether a test actually measures the theoretically defined psychological construct it is intended to measure, verified through multiple lines of evidence",
    "significance": "지능검사가 '지능'이라는 추상적 구인을 실제로 측정하는지를 확인하는 가장 포괄적인 타당도 유형으로, 수렴타당도와 변별타당도를 포함한다",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "폴 밀과 함께 구인타당도의 개념적 틀을 정립(1955)"
      },
      {
        "name_ko": "폴 밀",
        "name_en": "Paul Meehl",
        "contribution": "크론바흐와 함께 구인타당도 검증을 위한 법칙학적 네트워크(nomological network) 개념을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "INTELL_VAL_012"
      },
      {
        "name_ko": "요인분석",
        "name_en": "Factor Analysis",
        "id": "INTELL_FA_021"
      },
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "INTELL_PV_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "수렴타당도",
        "name_en": "Convergent Validity",
        "definition": "동일한 구인을 측정하는 서로 다른 방법의 검사 점수 간 높은 상관"
      },
      {
        "name_ko": "변별타당도",
        "name_en": "Discriminant Validity",
        "definition": "서로 다른 구인을 측정하는 검사 점수 간 낮은 상관"
      }
    ],
    "quiz_hints": {
      "mnemonic": "구인타당도 = 이 검사가 정말 '지능'을 재는가? → 수렴(같으면 높은 상관) + 변별(다르면 낮은 상관)",
      "differential": "구인타당도는 이론적 구인과의 일치성이고, 내용타당도는 문항이 영역을 대표하는지의 문제이다",
      "key_point": "구인타당도는 단일 연구로 확립되지 않으며, 다양한 증거(요인분석, 수렴/변별 타당도, 실험적 조작 등)의 축적이 필요하다",
      "common_mistake": "하나의 상관계수로 구인타당도가 확립된다고 생각하는 것 — 다양한 증거의 종합이 필요하다"
    }
  },
  {
    "id": "INTELL_BS_025",
    "terminology": "비네-시몽 검사 (Binet-Simon Test)",
    "terminology_ko": "비네-시몽 검사",
    "terminology_en": "Binet-Simon Test",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "1905년 프랑스의 비네와 시몽이 학습부진아를 선별하기 위해 개발한 최초의 실용적 지능검사로, 정신연령 개념을 사용하여 아동의 지적 수준을 평가했다",
    "definition_en": "The first practical intelligence test, developed in 1905 by Binet and Simon in France to identify children who needed academic assistance, using the concept of mental age to assess children's intellectual level",
    "significance": "현대 지능검사의 시초로서 역사적으로 가장 중요한 검사이며, 이후 스탠포드-비네 검사와 웩슬러 검사 등 모든 개인지능검사의 토대가 되었다",
    "key_researchers": [
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "프랑스 교육부의 요청으로 학습부진아 선별을 위한 최초의 지능검사를 개발"
      },
      {
        "name_ko": "테오도르 시몽",
        "name_en": "Théodore Simon",
        "contribution": "비네와 함께 검사를 공동 개발하고 표준화 작업을 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신연령",
        "name_en": "Mental Age",
        "id": "INTELL_MA_019"
      },
      {
        "name_ko": "스탠포드-비네 검사",
        "name_en": "Stanford-Binet Test",
        "id": "INTELL_SB_026"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비네(1905, 프랑스) → 학습부진아 선별 → 정신연령 개념 도입 → 최초의 지능검사",
      "differential": "비네-시몽 검사는 최초의 지능검사이고, 스탠포드-비네는 이를 미국에서 표준화한 것이다",
      "key_point": "비네는 지능이 고정적이지 않으며 교육을 통해 향상될 수 있다고 믿었다",
      "common_mistake": "비네가 지능의 유전적 결정을 주장했다고 생각하는 것 — 비네는 지능의 가변성과 교육의 중요성을 강조했다"
    }
  },
  {
    "id": "INTELL_SB_026",
    "terminology": "스탠포드-비네 검사 (Stanford-Binet Intelligence Scales)",
    "terminology_ko": "스탠포드-비네 검사",
    "terminology_en": "Stanford-Binet Intelligence Scales",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "비네-시몽 검사를 미국 스탠포드 대학교의 터먼이 영어로 번역·표준화하고 비율 IQ를 도입한 개인 지능검사로, 현재 5판까지 개정되었다",
    "definition_en": "An individual intelligence test adapted and standardized at Stanford University by Terman from the Binet-Simon test, introducing the ratio IQ; currently in its fifth edition",
    "significance": "미국에서 최초로 표준화된 지능검사로, 비율 IQ 개념의 도입과 이후 수차례 개정을 통해 현대 지능 측정의 발전에 핵심적 역할을 했다",
    "key_researchers": [
      {
        "name_ko": "루이스 터먼",
        "name_en": "Lewis Terman",
        "contribution": "1916년 비네-시몽 검사를 미국에서 표준화하고 IQ 개념을 본격적으로 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비네-시몽 검사",
        "name_en": "Binet-Simon Test",
        "id": "INTELL_BS_025"
      },
      {
        "name_ko": "웩슬러 검사",
        "name_en": "Wechsler Intelligence Scales",
        "id": "INTELL_WAIS_027A"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "터먼(스탠포드) + 비네(프랑스) = 스탠포드-비네 → 1916년 미국 표준화, IQ 도입",
      "differential": "스탠포드-비네는 단일 점수(IQ) 중심이었고, 웩슬러는 언어성/동작성 분리 점수를 제공한다",
      "key_point": "현대 5판(SB5)은 유동추론, 지식, 양적추론, 시공간, 작업기억의 5개 요인을 측정한다",
      "common_mistake": "스탠포드-비네가 여전히 비율 IQ를 사용한다고 생각하는 것 — 현대판은 편차 IQ를 사용한다"
    }
  },
  {
    "id": "INTELL_WAIS_027A",
    "terminology": "웩슬러 지능검사 (Wechsler Intelligence Scales)",
    "terminology_ko": "웩슬러 지능검사",
    "terminology_en": "Wechsler Intelligence Scales",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "웩슬러가 개발한 세계에서 가장 널리 사용되는 개인용 지능검사 시리즈로, 연령대별로 WAIS(성인), WISC(아동), WPPSI(유아)로 구분된다",
    "definition_en": "The world's most widely used individual intelligence test series developed by Wechsler, divided by age group into WAIS (adults), WISC (children), and WPPSI (preschoolers)",
    "significance": "편차 IQ를 최초로 도입하고, 언어적 능력과 비언어적 능력을 분리 측정하는 체계를 확립하여 현대 지능검사의 표준이 되었다",
    "key_researchers": [
      {
        "name_ko": "데이비드 웩슬러",
        "name_en": "David Wechsler",
        "contribution": "1939년 웩슬러-벨뷰 검사를 시작으로 연령대별 지능검사 시리즈를 개발하고 편차 IQ를 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편차지능",
        "name_en": "Deviation IQ",
        "id": "INTELL_DIQ_020"
      },
      {
        "name_ko": "스탠포드-비네 검사",
        "name_en": "Stanford-Binet Test",
        "id": "INTELL_SB_026"
      },
      {
        "name_ko": "지능지수",
        "name_en": "Intelligence Quotient",
        "id": "INTELL_IQ_002"
      }
    ],
    "sub_types": [
      {
        "name_ko": "WAIS (웩슬러 성인 지능검사)",
        "name_en": "Wechsler Adult Intelligence Scale",
        "definition": "16세 이상 성인을 대상으로 한 지능검사, 현재 WAIS-IV까지 개정"
      },
      {
        "name_ko": "WISC (웩슬러 아동 지능검사)",
        "name_en": "Wechsler Intelligence Scale for Children",
        "definition": "6-16세 아동을 대상으로 한 지능검사, 현재 WISC-V까지 개정"
      },
      {
        "name_ko": "WPPSI (웩슬러 유아 지능검사)",
        "name_en": "Wechsler Preschool and Primary Scale of Intelligence",
        "definition": "2.5-7세 유아를 대상으로 한 지능검사"
      }
    ],
    "quiz_hints": {
      "mnemonic": "웩슬러 3종 세트: WPPSI(유아) → WISC(아동) → WAIS(성인), 모두 편차 IQ(평균100, SD15)",
      "differential": "웩슬러는 언어/비언어 분리 측정이 강점이고, 스탠포드-비네는 단일 IQ 점수 중심이었다(현재는 유사해짐)",
      "key_point": "WAIS-IV는 언어이해, 지각추론, 작업기억, 처리속도의 4개 지표 점수를 산출한다",
      "common_mistake": "웩슬러 검사가 g요인만 측정한다고 생각하는 것 — 하위 지표별 프로파일 분석이 핵심이다"
    }
  },
  {
    "id": "INTELL_FLYNN_028A",
    "terminology": "플린 효과 (Flynn Effect)",
    "terminology_ko": "플린 효과",
    "terminology_en": "Flynn Effect",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "전 세계적으로 세대가 지남에 따라 IQ 점수가 지속적으로 상승하는 현상으로, 10년당 약 3점씩 증가하는 추세가 관찰된다",
    "definition_en": "The worldwide phenomenon of sustained increases in IQ scores over successive generations, with gains of approximately 3 points per decade observed across many countries",
    "significance": "IQ 점수의 상승이 환경적 요인(교육, 영양, 건강 등)의 중요성을 시사하며, 지능검사의 정기적 재표준화가 필요함을 보여준다",
    "key_researchers": [
      {
        "name_ko": "제임스 플린",
        "name_en": "James Flynn",
        "contribution": "14개국의 IQ 데이터를 분석하여 세대 간 IQ 상승 현상을 체계적으로 문서화(1984, 1987)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준화",
        "name_en": "Standardization",
        "id": "INTELL_STAND_009"
      },
      {
        "name_ko": "유전-환경 논쟁",
        "name_en": "Nature-Nurture Debate",
        "id": "INTELL_NN_025"
      },
      {
        "name_ko": "유동지능",
        "name_en": "Fluid Intelligence",
        "id": "INTELL_GF_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "플린 효과 = 세대 ↑ → IQ ↑ (10년에 약 3점) → 환경이 중요하다는 증거",
      "differential": "플린 효과는 세대 간 IQ 상승 현상이고, 연습 효과는 개인의 반복 검사에 의한 점수 상승이다",
      "key_point": "유동지능(비언어적 추론)에서의 상승이 결정지능보다 더 두드러지게 나타난다",
      "common_mistake": "플린 효과가 사람들이 실제로 더 똑똑해졌다는 것을 의미한다고 단정하는 것 — 검사 점수 상승의 원인은 아직 논쟁 중이다"
    }
  },
  {
    "id": "INTELL_SAV_029A",
    "terminology": "서번트 증후군 (Savant Syndrome)",
    "terminology_ko": "서번트 증후군",
    "terminology_en": "Savant Syndrome",
    "category": "INTELL",
    "category_name": "지능과 심리검사 (Intelligence & Testing)",
    "definition": "전반적인 지적 능력은 낮거나 발달장애가 있으면서도 음악, 미술, 계산, 기억 등 특정 영역에서 놀라운 수준의 능력을 보이는 상태이다",
    "definition_en": "A condition in which individuals with overall intellectual disabilities or developmental disorders demonstrate remarkable abilities in specific domains such as music, art, calculation, or memory",
    "significance": "지능이 단일한 능력이 아니라 다양한 독립적 능력의 복합체일 수 있다는 증거를 제공하며, 다중지능 이론을 지지하는 사례로 자주 인용된다",
    "key_researchers": [
      {
        "name_ko": "대럴드 트레퍼트",
        "name_en": "Darold Treffert",
        "contribution": "서번트 증후군을 체계적으로 연구하고 분류하여 이 분야의 세계적 권위자로 인정"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중지능",
        "name_en": "Multiple Intelligences",
        "id": "INTELL_MI_004"
      },
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "INTELL_ID_017"
      },
      {
        "name_ko": "지능",
        "name_en": "Intelligence",
        "id": "INTELL_INTEL_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "서번트 = 전반적 능력↓ + 특정 능력↑↑↑ → 지능의 모듈적 특성 시사",
      "differential": "서번트 증후군은 전반적 장애 + 특정 재능이고, 영재성은 전반적 또는 특정 영역의 높은 능력이다",
      "key_point": "서번트 증후군은 자폐 스펙트럼 장애 환자의 약 10%에서 관찰되며, 남성에게 더 흔하다",
      "common_mistake": "모든 자폐인이 서번트 능력을 가지고 있다고 생각하는 것 — 실제로는 소수에서만 관찰된다"
    }
  }
];

TERMS_DATA.MOTIV = [
  {
    "id": "MOTIV_MOTIV_001",
    "terminology": "동기 (Motivation)",
    "terminology_ko": "동기",
    "terminology_en": "Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "행동을 시작하고, 방향을 정하며, 지속시키는 내적 상태 또는 과정. 생물학적 욕구, 심리적 욕구, 환경적 요인 등이 복합적으로 작용한다.",
    "definition_en": "An internal state or process that initiates, directs, and sustains behavior. It involves a complex interplay of biological needs, psychological desires, and environmental factors.",
    "significance": "심리학의 핵심 주제로, 인간 행동의 '왜'를 설명하는 기초 개념이다. 학습, 임상, 산업/조직 심리학 등 거의 모든 분야에 적용된다.",
    "key_researchers": [
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "욕구위계이론을 통해 동기의 단계적 구조를 제시"
      },
      {
        "name_ko": "클라크 헐",
        "name_en": "Clark Hull",
        "contribution": "추동감소이론으로 동기의 생물학적 기반을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "외재적 동기",
        "name_en": "Extrinsic Motivation",
        "id": "MOTIV_EXTMOT_008"
      }
    ],
    "sub_types": [
      {
        "name_ko": "생리적 동기",
        "name_en": "Physiological Motivation",
        "description": "생존에 필수적인 생물학적 욕구에 기반한 동기"
      },
      {
        "name_ko": "심리적 동기",
        "name_en": "Psychological Motivation",
        "description": "사회적 소속감, 성취감 등 심리적 욕구에 기반한 동기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "동기 = 動(움직일 동) + 機(틀 기) → 행동을 움직이게 하는 기제",
      "differential": "동기(행동의 원인)와 정서(행동에 수반되는 감정 상태)를 구분할 것",
      "key_point": "동기는 행동의 시작, 방향, 지속이라는 세 가지 기능을 수행한다",
      "common_mistake": "동기를 단순히 '의지력'과 동일시하는 오류 — 동기는 생물학적, 심리적, 사회적 요인의 복합체이다"
    }
  },
  {
    "id": "MOTIV_INSTINCT_002",
    "terminology": "본능 (Instinct)",
    "terminology_ko": "본능",
    "terminology_en": "Instinct",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "학습 없이 타고나는 고정된 행동 양식으로, 종(species) 전체에 공통적으로 나타나는 복잡한 행동 패턴. 초기 동기 이론에서 행동의 근본 원인으로 제시되었다.",
    "definition_en": "An innate, fixed pattern of behavior that is universal within a species and occurs without prior learning. Early motivation theories proposed instincts as the fundamental cause of all behavior.",
    "significance": "윌리엄 제임스와 윌리엄 맥두걸이 인간 행동을 본능으로 설명하려 했으나, 본능 목록이 무한히 늘어나는 순환논리 문제로 쇠퇴하고 추동이론 등으로 대체되었다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 제임스",
        "name_en": "William James",
        "contribution": "인간의 본능 목록을 체계적으로 정리하려 시도"
      },
      {
        "name_ko": "윌리엄 맥두걸",
        "name_en": "William McDougall",
        "contribution": "18가지 본능 목록을 제안하여 인간 행동을 설명하려 함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "동기",
        "name_en": "Motivation",
        "id": "MOTIV_MOTIV_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "본능이론 → '본래 타고난 능력'으로 행동을 설명",
      "differential": "본능(선천적, 종 전체에 공통)과 습관(후천적, 개인차 존재)을 구분",
      "key_point": "본능이론은 '왜?'에 대한 답이 되지 못하는 순환논리(tautology) 문제로 비판받았다",
      "common_mistake": "현대 심리학에서 본능이론이 완전히 폐기된 것은 아니며, 진화심리학에서 부분적으로 계승된다"
    }
  },
  {
    "id": "MOTIV_DRT_003",
    "terminology": "추동감소이론 (Drive-Reduction Theory)",
    "terminology_ko": "추동감소이론",
    "terminology_en": "Drive-Reduction Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "생리적 욕구가 충족되지 않으면 내적 긴장 상태인 추동(drive)이 발생하고, 유기체는 이 추동을 감소시키기 위해 행동한다는 이론. 항상성(homeostasis) 개념에 기반한다.",
    "definition_en": "A theory proposing that unmet physiological needs create an internal tension state called a drive, and organisms are motivated to engage in behaviors that reduce this drive. Based on the concept of homeostasis.",
    "significance": "클라크 헐이 체계화한 이론으로, 동기의 생물학적 기반을 설명하는 데 기여했다. 그러나 호기심이나 탐험 동기처럼 긴장을 증가시키는 행동을 설명하지 못하는 한계가 있다.",
    "key_researchers": [
      {
        "name_ko": "클라크 헐",
        "name_en": "Clark Hull",
        "contribution": "추동감소이론을 체계적으로 정립, 수학적 행동 공식 제안"
      },
      {
        "name_ko": "월터 캐논",
        "name_en": "Walter Cannon",
        "contribution": "항상성(homeostasis) 개념을 도입하여 추동이론의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "MOTIV_HOMEO_004"
      },
      {
        "name_ko": "각성이론",
        "name_en": "Arousal Theory",
        "id": "MOTIV_AROUSAL_017"
      },
      {
        "name_ko": "본능",
        "name_en": "Instinct",
        "id": "MOTIV_INSTINCT_002"
      }
    ],
    "sub_types": [
      {
        "name_ko": "일차 추동",
        "name_en": "Primary Drive",
        "description": "배고픔, 갈증 등 생물학적 욕구에서 비롯되는 추동"
      },
      {
        "name_ko": "이차 추동",
        "name_en": "Secondary Drive",
        "description": "학습을 통해 일차 추동과 연합된 추동 (예: 돈)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "추동(Drive) = 밀어내는 힘. 배고프면(욕구) → 긴장(추동) → 먹기(행동) → 긴장 해소",
      "differential": "추동감소이론(내적 밀기, push)과 유인이론(외적 끌기, pull)을 대비하여 이해",
      "key_point": "추동감소이론은 항상성에 기반하며, 일차 추동과 이차 추동을 구분한다",
      "common_mistake": "추동감소이론이 모든 동기를 설명할 수 있다고 오해 — 호기심이나 스릴 추구 같은 각성 증가 행동은 설명하지 못한다"
    }
  },
  {
    "id": "MOTIV_HOMEO_004",
    "terminology": "항상성 (Homeostasis)",
    "terminology_ko": "항상성",
    "terminology_en": "Homeostasis",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "신체가 체온, 혈당, 수분 등 내적 환경을 일정한 균형 상태로 유지하려는 자동 조절 경향. 추동감소이론의 핵심 개념으로, 균형이 깨지면 이를 회복하려는 동기가 발생한다.",
    "definition_en": "The body's automatic tendency to maintain a constant and balanced internal environment (e.g., temperature, blood sugar, hydration). A core concept of drive-reduction theory; when balance is disrupted, motivation arises to restore it.",
    "significance": "생리학에서 유래한 개념이 심리학의 동기 이론에 적용된 대표적 사례이다. 생물학적 동기뿐 아니라 심리적 균형 유지로도 확장 해석된다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐논",
        "name_en": "Walter Cannon",
        "contribution": "항상성 개념을 공식적으로 명명하고 체계화"
      },
      {
        "name_ko": "클로드 베르나르",
        "name_en": "Claude Bernard",
        "contribution": "내부 환경(milieu intérieur)의 안정성 개념을 최초 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "체중설정점",
        "name_en": "Set Point Theory",
        "id": "MOTIV_SETPT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "항상성 = '항상 같은 성질'을 유지 → 체내 온도계처럼 자동 조절",
      "differential": "항상성(생리적 균형 유지)과 적응(환경 변화에 대한 반응)을 구분",
      "key_point": "항상성은 추동감소이론의 생물학적 기반이 되는 개념이다",
      "common_mistake": "항상성이 완벽한 균형을 의미한다고 오해 — 실제로는 일정 범위 내의 동적 균형이다"
    }
  },
  {
    "id": "MOTIV_HIERARCHY_005",
    "terminology": "욕구위계이론 (Hierarchy of Needs)",
    "terminology_ko": "욕구위계이론",
    "terminology_en": "Hierarchy of Needs",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "매슬로가 제안한 이론으로, 인간의 욕구가 생리적 욕구 → 안전 욕구 → 소속과 사랑의 욕구 → 존경 욕구 → 자아실현 욕구의 5단계 위계로 구성되며, 하위 욕구가 충족되어야 상위 욕구로 이행한다고 본다.",
    "definition_en": "Maslow's theory proposing that human needs are arranged in a five-level hierarchy: physiological → safety → belongingness and love → esteem → self-actualization. Lower-level needs must be substantially met before higher-level needs become motivating.",
    "significance": "인본주의 심리학의 대표 이론으로, 동기의 다층적 구조를 제시하여 교육, 경영, 상담 등 다양한 분야에 광범위하게 적용된다. 다만 문화적 보편성과 엄격한 위계 순서에 대한 비판도 존재한다.",
    "key_researchers": [
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "욕구위계이론 창시자, 인본주의 심리학의 핵심 인물"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아실현",
        "name_en": "Self-Actualization",
        "id": "MOTIV_SELFACT_006"
      },
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "소속동기",
        "name_en": "Need for Affiliation",
        "id": "MOTIV_AFFIL_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "결핍 욕구",
        "name_en": "Deficiency Needs (D-needs)",
        "description": "생리적, 안전, 소속, 존경 욕구 — 결핍 시 동기 유발"
      },
      {
        "name_ko": "성장 욕구",
        "name_en": "Being Needs (B-needs)",
        "description": "자아실현 욕구 — 성장과 잠재력 실현을 위한 동기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "피라미드 아래서 위로: 밥(생리) → 집(안전) → 친구(소속) → 칭찬(존경) → 꿈(자아실현)",
      "differential": "매슬로의 위계이론(단계적)과 알더퍼의 ERG이론(동시 추구 가능)을 비교",
      "key_point": "5단계 순서와 결핍욕구/성장욕구 구분을 정확히 기억할 것",
      "common_mistake": "하위 욕구가 100% 충족되어야 상위 욕구로 이행한다고 오해 — 매슬로는 '대체로 충족'이면 된다고 했다"
    }
  },
  {
    "id": "MOTIV_SELFACT_006",
    "terminology": "자아실현 (Self-Actualization)",
    "terminology_ko": "자아실현",
    "terminology_en": "Self-Actualization",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "자신의 잠재력을 최대한 발휘하고 실현하려는 욕구. 매슬로 욕구위계의 최상위 단계로, 창의성, 문제 해결, 도덕성 발달 등으로 표현된다.",
    "definition_en": "The desire to fulfill one's potential and become the best version of oneself. It is the highest level in Maslow's hierarchy, expressed through creativity, problem-solving, and moral development.",
    "significance": "인본주의 심리학의 핵심 개념으로, 인간을 결핍 존재가 아닌 성장 존재로 보는 관점을 제공한다. 긍정심리학의 이론적 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "자아실현 개념을 욕구위계의 정점으로 위치시킴"
      },
      {
        "name_ko": "쿠르트 골드슈타인",
        "name_en": "Kurt Goldstein",
        "contribution": "자아실현(self-actualization) 용어의 원래 제안자"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "욕구위계이론",
        "name_en": "Hierarchy of Needs",
        "id": "MOTIV_HIERARCHY_005"
      },
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자아실현 = 나(자아)의 꿈을 현실(실현)로 → 욕구위계의 꼭대기",
      "differential": "자아실현(매슬로, 잠재력 발휘)과 자기효능감(반두라, 과제 수행 능력에 대한 믿음)을 구분",
      "key_point": "매슬로에 따르면 자아실현에 도달하는 사람은 소수이며, '절정경험(peak experience)'을 동반한다",
      "common_mistake": "자아실현이 이기적인 목표 달성을 의미한다고 오해 — 실제로는 타인에 대한 배려와 도덕성을 포함한다"
    }
  },
  {
    "id": "MOTIV_INTMOT_007",
    "terminology": "내재적 동기 (Intrinsic Motivation)",
    "terminology_ko": "내재적 동기",
    "terminology_en": "Intrinsic Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "활동 자체에서 오는 즐거움, 흥미, 만족감에 의해 행동이 유발되는 동기. 외부 보상이 아닌 활동 그 자체가 목적이다.",
    "definition_en": "Motivation driven by the inherent enjoyment, interest, or satisfaction derived from the activity itself, rather than by external rewards or pressures.",
    "significance": "교육과 직업 심리학에서 핵심적인 개념으로, 내재적 동기가 높을수록 창의성, 학습의 질, 지속성이 향상된다. 자기결정이론의 중심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 데시",
        "name_en": "Edward Deci",
        "contribution": "내재적 동기 연구의 선구자, 자기결정이론 공동 창시"
      },
      {
        "name_ko": "리처드 라이언",
        "name_en": "Richard Ryan",
        "contribution": "데시와 함께 자기결정이론을 발전시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외재적 동기",
        "name_en": "Extrinsic Motivation",
        "id": "MOTIV_EXTMOT_008"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      },
      {
        "name_ko": "과잉정당화효과",
        "name_en": "Overjustification Effect",
        "id": "MOTIV_OVERJUST_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내재적 = 내(안)에서 재(미)있어서 적(극적)으로 → 스스로 즐거워서 하는 것",
      "differential": "내재적 동기(활동 자체가 보상)와 외재적 동기(외부 보상이 목적)의 구분이 핵심",
      "key_point": "외부 보상이 내재적 동기를 감소시킬 수 있다 (과잉정당화효과)",
      "common_mistake": "내재적 동기와 외재적 동기가 항상 대립한다고 오해 — 실제로는 공존할 수 있다"
    }
  },
  {
    "id": "MOTIV_EXTMOT_008",
    "terminology": "외재적 동기 (Extrinsic Motivation)",
    "terminology_ko": "외재적 동기",
    "terminology_en": "Extrinsic Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "활동 외부의 보상(돈, 성적, 칭찬, 처벌 회피 등)을 얻기 위해 행동이 유발되는 동기. 활동 자체가 아닌 결과가 목적이다.",
    "definition_en": "Motivation driven by external rewards (money, grades, praise) or avoidance of punishment, rather than by the inherent satisfaction of the activity itself.",
    "significance": "행동수정, 교육, 조직 관리 등에서 광범위하게 활용되지만, 내재적 동기를 약화시킬 수 있다는 점에서 적용에 주의가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 데시",
        "name_en": "Edward Deci",
        "contribution": "외재적 보상이 내재적 동기를 약화시키는 현상을 실험적으로 입증"
      },
      {
        "name_ko": "마크 레퍼",
        "name_en": "Mark Lepper",
        "contribution": "과잉정당화효과 실험을 통해 외재적 보상의 역효과를 증명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "과잉정당화효과",
        "name_en": "Overjustification Effect",
        "id": "MOTIV_OVERJUST_020"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      }
    ],
    "sub_types": [
      {
        "name_ko": "외적 조절",
        "name_en": "External Regulation",
        "description": "순수하게 외부 보상/처벌에 의해 행동하는 단계"
      },
      {
        "name_ko": "내사된 조절",
        "name_en": "Introjected Regulation",
        "description": "죄책감이나 자존심에 의해 부분적으로 내면화된 동기"
      },
      {
        "name_ko": "확인된 조절",
        "name_en": "Identified Regulation",
        "description": "활동의 가치를 인식하고 수용한 동기"
      },
      {
        "name_ko": "통합된 조절",
        "name_en": "Integrated Regulation",
        "description": "자기 정체성과 가치관에 완전히 통합된 외재적 동기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "외재적 = 밖(외)에 있(재)는 적(당한) 보상 → 보상을 위해 하는 것",
      "differential": "외재적 동기도 내면화 정도에 따라 4단계로 나뉜다 (자기결정이론의 연속선)",
      "key_point": "외재적 동기가 반드시 나쁜 것은 아니며, 내면화 정도에 따라 자율적일 수 있다",
      "common_mistake": "외재적 동기는 항상 효과적이라고 오해 — 과잉정당화효과로 내재적 동기를 감소시킬 수 있다"
    }
  },
  {
    "id": "MOTIV_SELFEFF_009",
    "terminology": "자기효능감 (Self-Efficacy)",
    "terminology_ko": "자기효능감",
    "terminology_en": "Self-Efficacy",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "특정 과제를 성공적으로 수행할 수 있다는 자신의 능력에 대한 믿음. 자기효능감이 높을수록 도전적인 목표를 설정하고 역경에서도 지속적으로 노력한다.",
    "definition_en": "An individual's belief in their capacity to successfully perform a specific task. Higher self-efficacy leads to setting more challenging goals and persisting through adversity.",
    "significance": "반두라의 사회인지이론의 핵심 개념으로, 학업 성취, 건강 행동, 직업 수행 등을 예측하는 강력한 변인이다. 자존감(전반적 자기 평가)과 구분된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감 개념을 창시하고 사회인지이론 내에서 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성취동기",
        "name_en": "Achievement Motivation",
        "id": "MOTIV_ACHMOT_015"
      },
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감 = '나는 이것을 할 수 있다'는 믿음 (Can I do it?)",
      "differential": "자기효능감(특정 과제에 대한 능력 믿음)과 자존감(자기 자신에 대한 전반적 평가)을 구분",
      "key_point": "자기효능감의 4가지 원천: 성공 경험, 대리 경험, 언어적 설득, 정서적 각성",
      "common_mistake": "자기효능감이 높으면 모든 영역에서 자신감이 높다고 오해 — 자기효능감은 과제 특수적(task-specific)이다"
    }
  },
  {
    "id": "MOTIV_EMOTION_010",
    "terminology": "정서 (Emotion)",
    "terminology_ko": "정서",
    "terminology_en": "Emotion",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "특정 자극이나 상황에 대한 반응으로 발생하는 주관적 경험, 생리적 각성, 인지적 평가, 행동 표현이 결합된 복합적인 심리 상태.",
    "definition_en": "A complex psychological state involving a subjective experience, physiological arousal, cognitive appraisal, and behavioral expression, arising in response to a specific stimulus or situation.",
    "significance": "정서는 적응적 기능(위험 회피, 사회적 소통), 동기적 기능(행동 유발), 인지적 기능(의사결정 보조)을 수행하며, 심리학의 핵심 연구 주제이다.",
    "key_researchers": [
      {
        "name_ko": "폴 에크먼",
        "name_en": "Paul Ekman",
        "contribution": "기본 정서와 미세표정의 보편성 연구"
      },
      {
        "name_ko": "리처드 라자루스",
        "name_en": "Richard Lazarus",
        "contribution": "정서의 인지적 평가이론 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 정서",
        "name_en": "Basic Emotions",
        "id": "MOTIV_BASICEMO_014"
      },
      {
        "name_ko": "제임스-랑게 이론",
        "name_en": "James-Lange Theory",
        "id": "MOTIV_JL_011"
      },
      {
        "name_ko": "정서지능",
        "name_en": "Emotional Intelligence",
        "id": "MOTIV_EI_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "일차 정서",
        "name_en": "Primary Emotion",
        "description": "기본적이고 보편적인 정서 (기쁨, 슬픔, 분노, 공포 등)"
      },
      {
        "name_ko": "이차 정서",
        "name_en": "Secondary Emotion",
        "description": "일차 정서가 결합되거나 인지적으로 정교화된 복합 정서 (죄책감, 수치심, 질투 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정서의 3요소: 주관적 경험 + 생리적 각성 + 행동 표현",
      "differential": "정서(emotion, 단기적·특정 대상)와 기분(mood, 장기적·비특정적)을 구분",
      "key_point": "정서 이론의 핵심 쟁점은 생리적 각성, 인지적 평가, 주관적 경험의 순서와 관계이다",
      "common_mistake": "정서와 기분(mood)을 동일시하는 오류 — 정서는 특정 대상에 대한 단기적 반응이다"
    }
  },
  {
    "id": "MOTIV_JL_011",
    "terminology": "제임스-랑게 이론 (James-Lange Theory)",
    "terminology_ko": "제임스-랑게 이론",
    "terminology_en": "James-Lange Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "정서적 자극이 먼저 신체적 반응(생리적 각성과 행동)을 일으키고, 이 신체 반응을 인식함으로써 정서 경험이 발생한다는 이론. '울기 때문에 슬프다'로 요약된다.",
    "definition_en": "A theory proposing that emotional stimuli first trigger physiological and behavioral responses, and the conscious experience of emotion arises from perceiving these bodily changes. Summarized as 'We feel sad because we cry.'",
    "significance": "정서 연구의 출발점이 된 고전 이론으로, 신체 반응이 정서 경험에 선행한다는 주장은 이후 안면피드백가설 등에 영향을 주었다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 제임스",
        "name_en": "William James",
        "contribution": "정서의 신체적 기원을 주장한 이론 제안 (1884)"
      },
      {
        "name_ko": "카를 랑게",
        "name_en": "Carl Lange",
        "contribution": "제임스와 독립적으로 유사한 이론 제안, 혈관 변화에 초점"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "캐논-바드 이론",
        "name_en": "Cannon-Bard Theory",
        "id": "MOTIV_CB_012"
      },
      {
        "name_ko": "샤흐터-싱어 이론",
        "name_en": "Schachter-Singer Theory",
        "id": "MOTIV_SS_013"
      },
      {
        "name_ko": "안면피드백가설",
        "name_en": "Facial Feedback Hypothesis",
        "id": "MOTIV_FFH_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "제임스-랑게 = '몸이 먼저' → 곰을 봄 → 심장 뜀(신체 반응) → '나 무섭구나'(정서 경험)",
      "differential": "제임스-랑게(신체→정서)와 캐논-바드(동시 발생)와 샤흐터-싱어(각성+인지 해석)를 비교",
      "key_point": "신체 반응이 정서 경험에 선행한다는 점이 핵심 — '울기 때문에 슬프다'",
      "common_mistake": "제임스-랑게 이론이 인지의 역할을 완전히 부정한다고 오해 — 신체 반응의 '인식'이라는 인지 과정은 포함한다"
    }
  },
  {
    "id": "MOTIV_CB_012",
    "terminology": "캐논-바드 이론 (Cannon-Bard Theory)",
    "terminology_ko": "캐논-바드 이론",
    "terminology_en": "Cannon-Bard Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "정서적 자극이 시상(thalamus)을 통해 대뇌피질과 자율신경계에 동시에 전달되어, 정서 경험과 신체 반응이 동시에(independently) 발생한다는 이론.",
    "definition_en": "A theory proposing that emotional stimuli are processed through the thalamus, which simultaneously sends signals to the cerebral cortex (producing emotional experience) and the autonomic nervous system (producing physiological arousal), so that emotional experience and bodily response occur simultaneously and independently.",
    "significance": "제임스-랑게 이론에 대한 비판으로 등장했으며, 정서의 신경학적 기반(시상의 역할)에 주목한 최초의 이론 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐논",
        "name_en": "Walter Cannon",
        "contribution": "제임스-랑게 이론을 비판하고 시상의 역할을 강조"
      },
      {
        "name_ko": "필립 바드",
        "name_en": "Philip Bard",
        "contribution": "캐논의 동물 실험 연구를 확장하여 이론을 정교화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제임스-랑게 이론",
        "name_en": "James-Lange Theory",
        "id": "MOTIV_JL_011"
      },
      {
        "name_ko": "샤흐터-싱어 이론",
        "name_en": "Schachter-Singer Theory",
        "id": "MOTIV_SS_013"
      },
      {
        "name_ko": "정서",
        "name_en": "Emotion",
        "id": "MOTIV_EMOTION_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "캐논-바드 = '동시에' → 곰을 봄 → 심장 뜀 + '무섭다' 동시 발생",
      "differential": "캐논-바드(동시 발생)는 제임스-랑게(신체→정서)에 대한 반론으로 등장",
      "key_point": "시상(thalamus)이 핵심 역할을 하며, 정서 경험과 신체 반응이 동시적이고 독립적이다",
      "common_mistake": "캐논-바드 이론이 신체 반응의 중요성을 완전히 부정한다고 오해 — 신체 반응은 발생하되 정서 경험의 원인은 아니라는 것"
    }
  },
  {
    "id": "MOTIV_SS_013",
    "terminology": "샤흐터-싱어 이론 / 2요인 이론 (Schachter-Singer Two-Factor Theory)",
    "terminology_ko": "샤흐터-싱어 이론 / 2요인 이론",
    "terminology_en": "Schachter-Singer Two-Factor Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "정서 경험은 생리적 각성(1요인)과 그 각성에 대한 인지적 해석/명명(2요인)의 두 가지 요인이 결합하여 발생한다는 이론. 동일한 각성도 상황에 따라 다른 정서로 해석될 수 있다.",
    "definition_en": "A theory proposing that emotional experience results from the combination of physiological arousal (factor 1) and cognitive labeling/interpretation of that arousal (factor 2). The same arousal can be interpreted as different emotions depending on the situational context.",
    "significance": "정서에 인지적 요인을 도입한 획기적인 이론으로, 에피네프린 주사 실험(1962)으로 유명하다. 정서의 구성주의적 관점의 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 샤흐터",
        "name_en": "Stanley Schachter",
        "contribution": "2요인 이론 제안 및 에피네프린 주사 실험 수행"
      },
      {
        "name_ko": "제롬 싱어",
        "name_en": "Jerome Singer",
        "contribution": "샤흐터와 함께 고전적인 정서 실험 공동 설계"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제임스-랑게 이론",
        "name_en": "James-Lange Theory",
        "id": "MOTIV_JL_011"
      },
      {
        "name_ko": "캐논-바드 이론",
        "name_en": "Cannon-Bard Theory",
        "id": "MOTIV_CB_012"
      },
      {
        "name_ko": "정서의 인지적 평가",
        "name_en": "Cognitive Appraisal of Emotion",
        "id": "MOTIV_COGAPP_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "2요인 = 각성(몸) + 명명(머리) → 심장이 뛰는데(각성), 왜 뛰지?(인지 해석) → 정서 결정",
      "differential": "2요인 이론은 제임스-랑게(신체만)와 캐논-바드(동시)를 절충 — 각성 + 인지 해석의 조합",
      "key_point": "에피네프린 주사 실험: 동일한 생리적 각성도 상황(행복한 조건 vs 화난 조건)에 따라 다른 정서로 경험됨",
      "common_mistake": "2요인 이론에서 각성이 먼저 오고 인지가 나중이라고 순서를 고정하는 오류 — 핵심은 두 요인의 '결합'이다"
    }
  },
  {
    "id": "MOTIV_BASICEMO_014",
    "terminology": "기본 정서 (Basic Emotions)",
    "terminology_ko": "기본 정서",
    "terminology_en": "Basic Emotions",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "문화와 관계없이 보편적으로 나타나는 선천적인 정서. 에크먼은 행복, 슬픔, 분노, 공포, 혐오, 놀라움의 6가지를 기본 정서로 제안했다.",
    "definition_en": "Innate emotions that appear universally across cultures. Ekman proposed six basic emotions: happiness, sadness, anger, fear, disgust, and surprise.",
    "significance": "정서의 보편성과 진화적 기원을 입증한 중요한 연구 결과이다. 다만, 기본 정서의 수와 종류, 문화적 보편성에 대한 논쟁이 지속되고 있다.",
    "key_researchers": [
      {
        "name_ko": "폴 에크먼",
        "name_en": "Paul Ekman",
        "contribution": "교차 문화 연구를 통해 6가지 기본 정서의 보편적 표정을 입증"
      },
      {
        "name_ko": "캐럴 이자드",
        "name_en": "Carroll Izard",
        "contribution": "차별적 정서 이론(Differential Emotions Theory)을 통해 10가지 기본 정서를 제안"
      },
      {
        "name_ko": "로버트 플루칙",
        "name_en": "Robert Plutchik",
        "contribution": "정서의 바퀴(Wheel of Emotions) 모델로 8가지 기본 정서를 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정서",
        "name_en": "Emotion",
        "id": "MOTIV_EMOTION_010"
      },
      {
        "name_ko": "미세표정",
        "name_en": "Microexpression",
        "id": "MOTIV_MICROEXP_028"
      },
      {
        "name_ko": "안면피드백가설",
        "name_en": "Facial Feedback Hypothesis",
        "id": "MOTIV_FFH_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "행복",
        "name_en": "Happiness",
        "description": "긍정적 사건에 대한 쾌감과 만족감"
      },
      {
        "name_ko": "슬픔",
        "name_en": "Sadness",
        "description": "상실이나 실패에 대한 고통스러운 정서"
      },
      {
        "name_ko": "분노",
        "name_en": "Anger",
        "description": "좌절이나 위협에 대한 적대적 정서"
      },
      {
        "name_ko": "공포",
        "name_en": "Fear",
        "description": "위험이나 위협에 대한 회피 정서"
      },
      {
        "name_ko": "혐오",
        "name_en": "Disgust",
        "description": "오염이나 불쾌한 대상에 대한 거부 정서"
      },
      {
        "name_ko": "놀라움",
        "name_en": "Surprise",
        "description": "예상치 못한 사건에 대한 순간적 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기본 정서 6가지: '행슬분공혐놀' → 행복, 슬픔, 분노, 공포, 혐오, 놀라움",
      "differential": "에크먼(6가지)과 플루칙(8가지)과 이자드(10가지)의 기본 정서 수 차이에 주의",
      "key_point": "에크먼은 교차 문화 연구(파푸아뉴기니 포레 부족 등)를 통해 표정의 보편성을 입증했다",
      "common_mistake": "기본 정서가 6가지로 '확정'되었다고 오해 — 연구자에 따라 수가 다르며 여전히 논쟁 중이다"
    }
  },
  {
    "id": "MOTIV_ACHMOT_015",
    "terminology": "성취동기 (Achievement Motivation)",
    "terminology_ko": "성취동기",
    "terminology_en": "Achievement Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "어려운 과제를 수행하고, 높은 기준을 달성하며, 타인보다 뛰어나고자 하는 욕구. 성취동기가 높은 사람은 적절히 도전적인 과제를 선호하고 피드백을 적극적으로 활용한다.",
    "definition_en": "The desire to accomplish difficult tasks, meet high standards of excellence, and surpass others. Individuals high in achievement motivation prefer moderately challenging tasks and actively seek performance feedback.",
    "significance": "머레이가 개념을 제안하고 맥클리랜드가 체계화한 이론으로, 교육과 산업/조직 심리학에서 중요한 개인차 변인이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 머레이",
        "name_en": "Henry Murray",
        "contribution": "성취 욕구(need for achievement, nAch) 개념을 최초 제안, TAT 개발"
      },
      {
        "name_ko": "데이비드 맥클리랜드",
        "name_en": "David McClelland",
        "contribution": "성취동기이론을 체계화하고 TAT를 이용한 측정 연구 수행"
      },
      {
        "name_ko": "존 앳킨슨",
        "name_en": "John Atkinson",
        "contribution": "기대-가치 모델을 통해 성취동기를 수학적으로 모형화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "MOTIV_SELFEFF_009"
      },
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "소속동기",
        "name_en": "Need for Affiliation",
        "id": "MOTIV_AFFIL_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "nAch = need for Achievement → 성취를 향한 욕구",
      "differential": "성취동기(탁월한 수행 지향)와 소속동기(관계 지향)와 권력동기(영향력 지향)를 비교",
      "key_point": "성취동기가 높은 사람은 너무 쉽거나 너무 어려운 과제가 아닌 중간 난이도를 선호한다",
      "common_mistake": "성취동기가 높은 사람이 항상 가장 어려운 과제를 선택한다고 오해 — 실제로는 적절히 도전적인(50% 성공 확률) 과제를 선호"
    }
  },
  {
    "id": "MOTIV_EATING_016",
    "terminology": "섭식장애 (Eating Disorders)",
    "terminology_ko": "섭식장애",
    "terminology_en": "Eating Disorders",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "음식 섭취와 관련된 행동, 사고, 정서에 심각한 장해가 있는 정신 장애. 신경성 식욕부진증, 신경성 폭식증, 폭식장애 등이 포함되며, 생물학적·심리적·사회문화적 요인이 복합적으로 작용한다.",
    "definition_en": "Mental disorders characterized by severe disturbances in eating behaviors, thoughts, and emotions. Includes anorexia nervosa, bulimia nervosa, and binge-eating disorder, caused by a complex interplay of biological, psychological, and sociocultural factors.",
    "significance": "동기심리학에서 생리적 동기(배고픔)가 심리적·사회문화적 요인에 의해 왜곡되는 대표적 사례이다. 사망률이 높은 심각한 정신 장애이다.",
    "key_researchers": [
      {
        "name_ko": "힐데 브루흐",
        "name_en": "Hilde Bruch",
        "contribution": "섭식장애의 심리적 기제에 대한 선구적 임상 연구"
      },
      {
        "name_ko": "제럴드 러셀",
        "name_en": "Gerald Russell",
        "contribution": "신경성 폭식증(bulimia nervosa)을 독립 진단 범주로 최초 기술 (1979)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비만",
        "name_en": "Obesity",
        "id": "MOTIV_OBESITY_022"
      },
      {
        "name_ko": "체중설정점",
        "name_en": "Set Point Theory",
        "id": "MOTIV_SETPT_023"
      },
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "MOTIV_HOMEO_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "description": "극단적인 음식 제한과 체중 증가에 대한 강렬한 두려움이 특징"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "description": "폭식 후 구토, 하제 사용 등 보상 행동이 반복되는 장애"
      },
      {
        "name_ko": "폭식장애",
        "name_en": "Binge-Eating Disorder",
        "description": "반복적 폭식이 있으나 보상 행동이 없는 장애"
      }
    ],
    "quiz_hints": {
      "mnemonic": "섭식장애 3대 유형: 거식(Anorexia) - 폭식+구토(Bulimia) - 폭식만(Binge-Eating)",
      "differential": "식욕부진증(체중 감소 추구)과 폭식증(정상 체중 유지 시도)과 폭식장애(체중 증가 경향)를 구분",
      "key_point": "섭식장애는 생물학적(유전, 세로토닌), 심리적(완벽주의, 통제감), 사회문화적(마른 체형 이상화) 요인의 상호작용",
      "common_mistake": "섭식장애가 단순한 다이어트 문제라고 오해 — 심각한 정신 장애이며 의학적 합병증과 높은 사망률을 동반한다"
    }
  },
  {
    "id": "MOTIV_AROUSAL_017",
    "terminology": "각성이론 (Arousal Theory)",
    "terminology_ko": "각성이론",
    "terminology_en": "Arousal Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "인간은 최적의 각성 수준을 유지하려는 동기를 가지며, 각성이 너무 낮으면 자극을 추구하고 너무 높으면 자극을 회피한다는 이론. 추동감소이론이 설명하지 못하는 자극 추구 행동을 설명한다.",
    "definition_en": "A theory proposing that people are motivated to maintain an optimal level of arousal; when arousal is too low, they seek stimulation, and when too high, they avoid it. Explains stimulus-seeking behaviors that drive-reduction theory cannot account for.",
    "significance": "추동감소이론의 한계를 보완하는 동기 이론으로, 감각추구(sensation seeking) 연구 및 여키스-도슨 법칙과 연결된다.",
    "key_researchers": [
      {
        "name_ko": "도널드 헵",
        "name_en": "Donald Hebb",
        "contribution": "최적 각성 수준 개념을 제안하여 각성이론의 기초를 마련"
      },
      {
        "name_ko": "마빈 저커먼",
        "name_en": "Marvin Zuckerman",
        "contribution": "감각추구(Sensation Seeking) 특성을 연구하여 개인차를 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "여키스-도슨 법칙",
        "name_en": "Yerkes-Dodson Law",
        "id": "MOTIV_YD_021"
      },
      {
        "name_ko": "동기",
        "name_en": "Motivation",
        "id": "MOTIV_MOTIV_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "각성이론 = 너무 심심해도, 너무 긴장해도 안 됨 → '딱 적당한' 각성 수준을 추구",
      "differential": "각성이론(최적 각성 추구)과 추동감소이론(긴장 감소 추구)의 차이점을 명확히",
      "key_point": "추동감소이론은 긴장 감소만 설명하지만, 각성이론은 긴장 증가(스릴, 호기심)도 설명한다",
      "common_mistake": "최적 각성 수준이 모든 사람에게 동일하다고 오해 — 감각추구 성향 등 개인차가 크다"
    }
  },
  {
    "id": "MOTIV_INCENTIVE_018",
    "terminology": "유인이론 (Incentive Theory)",
    "terminology_ko": "유인이론",
    "terminology_en": "Incentive Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "행동은 내적 추동(push)이 아니라 외부 자극(유인, incentive)의 끌어당김(pull)에 의해 동기화된다는 이론. 보상의 가치와 기대가 행동의 방향을 결정한다.",
    "definition_en": "A theory proposing that behavior is motivated by the pull of external stimuli (incentives) rather than internal drives (push). The value and expectation of rewards determine the direction of behavior.",
    "significance": "추동감소이론의 내적 결핍 중심 관점을 보완하며, 목표 지향적 행동과 환경적 요인의 역할을 강조한다. 행동경제학과 조직심리학의 보상 체계 설계에 영향을 주었다.",
    "key_researchers": [
      {
        "name_ko": "클라크 헐",
        "name_en": "Clark Hull",
        "contribution": "유인 개념을 추동이론에 통합하려 시도 (SER = D × H × K)"
      },
      {
        "name_ko": "케네스 스펜스",
        "name_en": "Kenneth Spence",
        "contribution": "유인동기(K)의 역할을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "외재적 동기",
        "name_en": "Extrinsic Motivation",
        "id": "MOTIV_EXTMOT_008"
      },
      {
        "name_ko": "동기",
        "name_en": "Motivation",
        "id": "MOTIV_MOTIV_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "긍정적 유인",
        "name_en": "Positive Incentive",
        "description": "접근 행동을 유발하는 보상적 자극 (음식, 칭찬 등)"
      },
      {
        "name_ko": "부정적 유인",
        "name_en": "Negative Incentive",
        "description": "회피 행동을 유발하는 혐오적 자극 (처벌, 고통 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "유인이론 = '당근'이 앞에서 끌어당김 (pull) ↔ 추동이론 = '채찍'이 뒤에서 밀어냄 (push)",
      "differential": "유인이론(외부→내부, pull)과 추동감소이론(내부→외부, push)의 방향성 차이",
      "key_point": "유인이론은 동일한 생리 상태에서도 유인 가치에 따라 행동이 달라질 수 있음을 설명한다",
      "common_mistake": "유인이론이 외재적 동기와 동일하다고 오해 — 유인에는 내적 만족(내재적 유인)도 포함될 수 있다"
    }
  },
  {
    "id": "MOTIV_SDT_019",
    "terminology": "자기결정이론 (Self-Determination Theory)",
    "terminology_ko": "자기결정이론",
    "terminology_en": "Self-Determination Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "인간에게는 자율성(autonomy), 유능감(competence), 관계성(relatedness)이라는 세 가지 기본 심리 욕구가 있으며, 이 욕구가 충족될 때 내재적 동기와 심리적 안녕이 증진된다는 이론.",
    "definition_en": "A theory proposing that humans have three basic psychological needs — autonomy, competence, and relatedness — and that satisfaction of these needs promotes intrinsic motivation and psychological well-being.",
    "significance": "동기의 질적 차이(자율적 vs. 통제적)를 강조한 현대 동기이론의 대표적 프레임워크로, 교육, 건강, 스포츠, 조직 등 다양한 분야에 적용된다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 데시",
        "name_en": "Edward Deci",
        "contribution": "자기결정이론 공동 창시자, 인지적 평가이론(CET) 제안"
      },
      {
        "name_ko": "리처드 라이언",
        "name_en": "Richard Ryan",
        "contribution": "데시와 함께 자기결정이론을 발전, 유기적 통합이론(OIT) 정교화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "외재적 동기",
        "name_en": "Extrinsic Motivation",
        "id": "MOTIV_EXTMOT_008"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "MOTIV_SELFEFF_009"
      }
    ],
    "sub_types": [
      {
        "name_ko": "인지적 평가이론",
        "name_en": "Cognitive Evaluation Theory (CET)",
        "description": "외부 사건이 내재적 동기에 미치는 영향을 설명하는 하위 이론"
      },
      {
        "name_ko": "유기적 통합이론",
        "name_en": "Organismic Integration Theory (OIT)",
        "description": "외재적 동기의 내면화 과정을 연속선으로 설명하는 하위 이론"
      },
      {
        "name_ko": "기본 심리 욕구이론",
        "name_en": "Basic Psychological Needs Theory (BPNT)",
        "description": "자율성, 유능감, 관계성의 충족과 심리적 안녕의 관계를 설명"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SDT의 3대 욕구: 자(자율성) + 유(유능감) + 관(관계성) = '자유관'",
      "differential": "자기결정이론(3가지 기본 욕구)과 욕구위계이론(5단계 위계)을 비교",
      "key_point": "핵심은 동기의 양(얼마나)이 아니라 질(얼마나 자율적인가)이다",
      "common_mistake": "자기결정이론이 외재적 동기를 전부 부정한다고 오해 — 외재적 동기도 내면화 수준에 따라 긍정적일 수 있다"
    }
  },
  {
    "id": "MOTIV_OVERJUST_020",
    "terminology": "과잉정당화효과 (Overjustification Effect)",
    "terminology_ko": "과잉정당화효과",
    "terminology_en": "Overjustification Effect",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "원래 내재적으로 동기화된 활동에 외부 보상을 제공하면, 보상 제거 후 해당 활동에 대한 내재적 동기가 감소하는 현상. 행동의 원인을 내적 흥미에서 외적 보상으로 재귀인하기 때문에 발생한다.",
    "definition_en": "The phenomenon where providing external rewards for an intrinsically motivated activity decreases intrinsic motivation after the reward is removed, because the person re-attributes the cause of behavior from internal interest to external reward.",
    "significance": "교육 현장에서의 보상 사용에 대한 중요한 시사점을 제공한다. 레퍼 등의 '마커펜 연구'가 대표적이며, 보상의 역설(paradox of reward)로 불린다.",
    "key_researchers": [
      {
        "name_ko": "마크 레퍼",
        "name_en": "Mark Lepper",
        "contribution": "마커펜 연구(아이들에게 그림 그리기 보상)를 통해 과잉정당화효과를 실증"
      },
      {
        "name_ko": "에드워드 데시",
        "name_en": "Edward Deci",
        "contribution": "퍼즐 실험을 통해 금전 보상이 내재적 동기를 감소시킴을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내재적 동기",
        "name_en": "Intrinsic Motivation",
        "id": "MOTIV_INTMOT_007"
      },
      {
        "name_ko": "외재적 동기",
        "name_en": "Extrinsic Motivation",
        "id": "MOTIV_EXTMOT_008"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과잉정당화 = '과하게 정당한 이유를 붙이면' 원래의 즐거움이 사라진다",
      "differential": "과잉정당화효과는 '기대된 유형적 보상'에서 주로 발생 — 예상치 못한 보상이나 칭찬은 해당 안 됨",
      "key_point": "레퍼의 마커펜 연구: 그림 그리기를 좋아하는 아이들에게 상을 약속하자, 나중에 상 없이는 그림을 덜 그리게 됨",
      "common_mistake": "모든 외적 보상이 내재적 동기를 감소시킨다고 오해 — 예기치 않은 보상이나 구두 칭찬은 내재적 동기를 오히려 증가시킬 수 있다"
    }
  },
  {
    "id": "MOTIV_YD_021",
    "terminology": "여키스-도슨 법칙 (Yerkes-Dodson Law)",
    "terminology_ko": "여키스-도슨 법칙",
    "terminology_en": "Yerkes-Dodson Law",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "각성 수준과 수행 간의 관계를 나타내는 법칙. 적절한 수준의 각성에서 수행이 최고이며(역U자 곡선), 과제 난이도에 따라 최적 각성 수준이 달라진다. 쉬운 과제는 높은 각성, 어려운 과제는 낮은 각성에서 최적 수행이 나온다.",
    "definition_en": "A law describing the relationship between arousal and performance as an inverted U-curve: performance peaks at moderate arousal levels. The optimal arousal level varies with task difficulty — easy tasks benefit from higher arousal, while difficult tasks require lower arousal.",
    "significance": "시험 불안, 스포츠 수행, 직무 스트레스 등 다양한 맥락에서 각성과 수행의 관계를 설명하는 데 널리 활용되는 기본 원리이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 여키스",
        "name_en": "Robert Yerkes",
        "contribution": "도슨과 함께 쥐 실험을 통해 각성-수행 관계를 발견 (1908)"
      },
      {
        "name_ko": "존 도슨",
        "name_en": "John Dodson",
        "contribution": "여키스와 함께 과제 난이도에 따른 최적 각성 수준 차이를 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "각성이론",
        "name_en": "Arousal Theory",
        "id": "MOTIV_AROUSAL_017"
      },
      {
        "name_ko": "추동감소이론",
        "name_en": "Drive-Reduction Theory",
        "id": "MOTIV_DRT_003"
      },
      {
        "name_ko": "성취동기",
        "name_en": "Achievement Motivation",
        "id": "MOTIV_ACHMOT_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역U자 곡선: 각성 너무 낮으면(졸림) ↓수행, 적당하면 ↑최고 수행, 너무 높으면(패닉) ↓수행",
      "differential": "역U자 곡선의 정점은 과제 난이도에 따라 이동한다는 점이 핵심 구분",
      "key_point": "어려운 과제일수록 최적 각성 수준은 낮고, 쉬운 과제일수록 최적 각성 수준은 높다",
      "common_mistake": "최적 각성 수준이 항상 '중간'이라고 오해 — 과제 특성에 따라 최적점이 달라진다"
    }
  },
  {
    "id": "MOTIV_OBESITY_022",
    "terminology": "비만 (Obesity)",
    "terminology_ko": "비만",
    "terminology_en": "Obesity",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "체질량지수(BMI)가 30 이상인 상태로, 유전, 신경화학(렙틴·그렐린), 심리적 요인(정서적 식이), 환경적 요인(식품 접근성)이 복합적으로 작용하여 발생한다.",
    "definition_en": "A condition defined by a BMI of 30 or above, resulting from a complex interaction of genetic factors, neurochemistry (leptin, ghrelin), psychological factors (emotional eating), and environmental factors (food availability).",
    "significance": "동기심리학에서 배고픔의 생리적·심리적 조절 실패를 보여주는 주요 주제이다. 체중설정점 이론, 외부신호이론 등과 연결된다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 샤흐터",
        "name_en": "Stanley Schachter",
        "contribution": "비만의 외부성 가설(externality hypothesis) 제안 — 비만인은 외부 음식 단서에 더 민감"
      },
      {
        "name_ko": "제프리 프리드먼",
        "name_en": "Jeffrey Friedman",
        "contribution": "렙틴(leptin) 호르몬 발견으로 체중 조절의 생물학적 기제 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체중설정점",
        "name_en": "Set Point Theory",
        "id": "MOTIV_SETPT_023"
      },
      {
        "name_ko": "섭식장애",
        "name_en": "Eating Disorders",
        "id": "MOTIV_EATING_016"
      },
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "MOTIV_HOMEO_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비만의 다요인 모델: 유전 × 호르몬(렙틴·그렐린) × 심리(정서적 식이) × 환경(식품 접근성)",
      "differential": "비만(BMI 30+, 의학적 상태)과 섭식장애(정신 장애, 폭식장애 등)를 구분",
      "key_point": "렙틴(포만 신호)과 그렐린(배고픔 신호)의 역할을 기억할 것",
      "common_mistake": "비만이 단순히 의지력 부족 때문이라고 오해 — 유전, 호르몬, 환경의 복합 요인이다"
    }
  },
  {
    "id": "MOTIV_SETPT_023",
    "terminology": "체중설정점 (Set Point Theory)",
    "terminology_ko": "체중설정점",
    "terminology_en": "Set Point Theory",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "신체에 유전적으로 결정된 기본 체중 범위(설정점)가 있어, 시상하부가 대사율과 식욕을 조절하여 이 범위를 유지하려 한다는 이론. 다이어트 후 체중이 다시 돌아오는 현상을 설명한다.",
    "definition_en": "A theory proposing that the body has a genetically predetermined weight range (set point), and the hypothalamus regulates metabolism and appetite to maintain this range. Explains why weight tends to return to baseline after dieting.",
    "significance": "다이어트의 장기적 실패와 요요 현상을 설명하는 생물학적 기제로, 비만 치료 전략 수립에 중요한 시사점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 키시",
        "name_en": "Richard Keesey",
        "contribution": "동물 실험을 통해 체중설정점 이론의 경험적 근거를 제공"
      },
      {
        "name_ko": "테리 파울리",
        "name_en": "Terry Powley",
        "contribution": "시상하부의 체중 조절 기전과 설정점 개념을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "MOTIV_HOMEO_004"
      },
      {
        "name_ko": "비만",
        "name_en": "Obesity",
        "id": "MOTIV_OBESITY_022"
      },
      {
        "name_ko": "섭식장애",
        "name_en": "Eating Disorders",
        "id": "MOTIV_EATING_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "설정점 = 체내 체중 '온도계' → 설정 온도처럼 신체가 특정 체중을 유지하려 함",
      "differential": "설정점이론(유전적 고정)과 안정점이론(settling point, 환경과 상호작용하여 변동 가능)을 비교",
      "key_point": "시상하부가 대사율과 식욕을 조절하여 설정점을 유지한다",
      "common_mistake": "설정점이 절대 변하지 않는다고 오해 — 장기적 생활 습관 변화로 어느 정도 조정 가능하다는 안정점 이론도 있다"
    }
  },
  {
    "id": "MOTIV_SEXMOT_024",
    "terminology": "성동기 (Sexual Motivation)",
    "terminology_ko": "성동기",
    "terminology_en": "Sexual Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "성적 행동을 유발하고 방향 짓는 동기. 생물학적 요인(호르몬: 테스토스테론, 에스트로겐), 심리적 요인(성적 환상, 자극에 대한 인지적 평가), 사회문화적 요인(성 규범, 가치관)이 복합적으로 작용한다.",
    "definition_en": "The motivation that drives and directs sexual behavior, involving a complex interaction of biological factors (hormones: testosterone, estrogen), psychological factors (sexual fantasies, cognitive appraisal), and sociocultural factors (sexual norms, values).",
    "significance": "생존 동기(배고픔, 갈증)와 달리 생리적 결핍이 아니더라도 발생하는 특수한 동기로, 인간의 성적 행동은 호르몬 외에 심리적·문화적 요인에 크게 영향받는다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 마스터스",
        "name_en": "William Masters",
        "contribution": "존슨과 함께 인간 성 반응 주기(흥분→고조→절정→해소)를 과학적으로 연구"
      },
      {
        "name_ko": "버지니아 존슨",
        "name_en": "Virginia Johnson",
        "contribution": "마스터스와 함께 성 반응에 대한 최초의 체계적 실험 연구 수행"
      },
      {
        "name_ko": "앨프리드 킨제이",
        "name_en": "Alfred Kinsey",
        "contribution": "대규모 설문 조사를 통해 인간 성행동의 다양성을 과학적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "호르몬과 동기",
        "name_en": "Hormones and Motivation",
        "id": "MOTIV_HORMONE_030"
      },
      {
        "name_ko": "동기",
        "name_en": "Motivation",
        "id": "MOTIV_MOTIV_001"
      },
      {
        "name_ko": "각성이론",
        "name_en": "Arousal Theory",
        "id": "MOTIV_AROUSAL_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성 반응 주기 4단계: 흥분(Excitement) → 고조(Plateau) → 절정(Orgasm) → 해소(Resolution) = 'EPOR'",
      "differential": "성동기는 항상성(homeostatic) 동기가 아닌 비항상성(non-homeostatic) 동기이다",
      "key_point": "인간의 성동기는 동물과 달리 호르몬보다 심리적·사회적 요인의 영향이 크다",
      "common_mistake": "성동기가 순전히 생물학적이라고 오해 — 인간의 성동기는 인지, 학습, 문화적 요인에 크게 좌우된다"
    }
  },
  {
    "id": "MOTIV_AFFIL_025",
    "terminology": "소속동기 (Need for Affiliation)",
    "terminology_ko": "소속동기",
    "terminology_en": "Need for Affiliation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "타인과 친밀한 관계를 형성하고 유지하며, 사회적 집단에 소속되고자 하는 욕구. 사회적 고립은 신체적·심리적 건강에 부정적 영향을 미친다.",
    "definition_en": "The desire to form and maintain close interpersonal relationships and belong to social groups. Social isolation has detrimental effects on both physical and psychological health.",
    "significance": "매슬로의 욕구위계에서 3단계(소속과 사랑의 욕구)에 해당하며, 볼비의 애착이론, 소속 욕구의 진화적 기원과도 연결된다. 사회적 배제 연구에서 핵심 변인이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 머레이",
        "name_en": "Henry Murray",
        "contribution": "소속 욕구(nAff)를 인간의 기본 심리적 욕구 목록에 포함"
      },
      {
        "name_ko": "로이 바우마이스터",
        "name_en": "Roy Baumeister",
        "contribution": "소속 욕구(need to belong)가 인간의 근본적 동기임을 이론적으로 정립"
      },
      {
        "name_ko": "마크 리어리",
        "name_en": "Mark Leary",
        "contribution": "바우마이스터와 함께 소속 욕구의 보편성과 중요성을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "욕구위계이론",
        "name_en": "Hierarchy of Needs",
        "id": "MOTIV_HIERARCHY_005"
      },
      {
        "name_ko": "성취동기",
        "name_en": "Achievement Motivation",
        "id": "MOTIV_ACHMOT_015"
      },
      {
        "name_ko": "자기결정이론",
        "name_en": "Self-Determination Theory",
        "id": "MOTIV_SDT_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소속동기 = '어딘가에 속하고 싶은' 마음 → 매슬로 3단계, 자기결정이론의 관계성",
      "differential": "소속동기(관계 형성 욕구)와 성취동기(탁월성 추구)와 권력동기(영향력 추구)를 구분 (머레이/맥클리랜드)",
      "key_point": "소속 욕구가 좌절되면 불안, 우울, 공격성이 증가한다는 연구 결과가 있다",
      "common_mistake": "소속동기가 단순한 외향성이나 사교성과 같다고 오해 — 내향적인 사람도 소속 욕구를 가진다"
    }
  },
  {
    "id": "MOTIV_FFH_026",
    "terminology": "안면피드백가설 (Facial Feedback Hypothesis)",
    "terminology_ko": "안면피드백가설",
    "terminology_en": "Facial Feedback Hypothesis",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "얼굴 표정이 정서 경험에 영향을 미친다는 가설. 웃는 표정을 지으면 실제로 기분이 좋아지고, 찡그리면 기분이 나빠질 수 있다. 제임스-랑게 이론의 연장선에 있다.",
    "definition_en": "The hypothesis that facial expressions can influence emotional experience. Smiling can make you feel happier, while frowning can worsen your mood. An extension of the James-Lange theory.",
    "significance": "신체 반응이 정서에 미치는 영향을 보여주는 대표적 연구 주제이다. 스트랙의 펜 물기 실험이 유명하지만, 재현 논쟁이 있었다.",
    "key_researchers": [
      {
        "name_ko": "실반 톰킨스",
        "name_en": "Silvan Tomkins",
        "contribution": "안면 피드백의 이론적 기초를 제안한 정서-표정 연구의 선구자"
      },
      {
        "name_ko": "프리츠 스트랙",
        "name_en": "Fritz Strack",
        "contribution": "펜 물기 실험(1988)으로 안면피드백가설을 실험적으로 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제임스-랑게 이론",
        "name_en": "James-Lange Theory",
        "id": "MOTIV_JL_011"
      },
      {
        "name_ko": "기본 정서",
        "name_en": "Basic Emotions",
        "id": "MOTIV_BASICEMO_014"
      },
      {
        "name_ko": "미세표정",
        "name_en": "Microexpression",
        "id": "MOTIV_MICROEXP_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안면피드백 = 얼굴이 뇌에 피드백 → '웃으면 복이 온다'의 심리학적 근거",
      "differential": "안면피드백가설(표정→정서)과 정서 표현 규칙(사회적 규칙에 따라 표정 조절)을 구분",
      "key_point": "스트랙의 펜 물기 실험: 이빨로 펜을 무는 그룹(웃는 근육 활성화)이 만화를 더 재미있다고 평가",
      "common_mistake": "안면피드백효과가 완전히 입증된 사실이라고 오해 — 대규모 재현 연구에서 논쟁이 지속되고 있다"
    }
  },
  {
    "id": "MOTIV_COGAPP_027",
    "terminology": "정서의 인지적 평가 (Cognitive Appraisal of Emotion)",
    "terminology_ko": "정서의 인지적 평가",
    "terminology_en": "Cognitive Appraisal of Emotion",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "정서는 사건 자체가 아니라 사건에 대한 개인의 인지적 평가(해석)에 의해 결정된다는 이론. 라자루스는 1차 평가(위협 여부)와 2차 평가(대처 자원)를 구분했다.",
    "definition_en": "A theory proposing that emotions are determined not by events themselves but by the individual's cognitive appraisal (interpretation) of events. Lazarus distinguished primary appraisal (threat assessment) from secondary appraisal (coping resources).",
    "significance": "정서에 인지의 역할을 강조한 대표적 이론으로, 인지행동치료(CBT)의 이론적 기반이 된다. 자이언스의 정서 선행론(감정이 인지보다 먼저)과 논쟁을 벌였다.",
    "key_researchers": [
      {
        "name_ko": "리처드 라자루스",
        "name_en": "Richard Lazarus",
        "contribution": "인지적 평가이론을 정립하고 1차/2차 평가를 구분"
      },
      {
        "name_ko": "로버트 자이언스",
        "name_en": "Robert Zajonc",
        "contribution": "정서가 인지 없이도 발생할 수 있다고 주장하여 라자루스와 논쟁 (affective primacy)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "샤흐터-싱어 이론",
        "name_en": "Schachter-Singer Theory",
        "id": "MOTIV_SS_013"
      },
      {
        "name_ko": "정서",
        "name_en": "Emotion",
        "id": "MOTIV_EMOTION_010"
      },
      {
        "name_ko": "정서지능",
        "name_en": "Emotional Intelligence",
        "id": "MOTIV_EI_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "1차 평가",
        "name_en": "Primary Appraisal",
        "description": "사건이 자신에게 위협적인지, 유익한지, 무관한지를 평가"
      },
      {
        "name_ko": "2차 평가",
        "name_en": "Secondary Appraisal",
        "description": "자신의 대처 자원과 능력이 충분한지를 평가"
      },
      {
        "name_ko": "재평가",
        "name_en": "Reappraisal",
        "description": "새로운 정보에 기반하여 초기 평가를 수정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "라자루스: 사건 → '이게 위험한가?'(1차) → '내가 대처할 수 있나?'(2차) → 정서 결정",
      "differential": "라자루스(인지가 정서에 선행)와 자이언스(정서가 인지에 선행)의 논쟁을 이해",
      "key_point": "같은 사건도 인지적 평가에 따라 다른 정서를 유발한다 — '해석이 정서를 결정한다'",
      "common_mistake": "인지적 평가가 항상 의식적이고 느린 과정이라고 오해 — 자동적이고 무의식적인 평가도 가능하다"
    }
  },
  {
    "id": "MOTIV_MICROEXP_028",
    "terminology": "미세표정 (Microexpression)",
    "terminology_ko": "미세표정",
    "terminology_en": "Microexpression",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "1/25초에서 1/5초 사이에 나타났다 사라지는 매우 짧은 얼굴 표정으로, 감추려는 진짜 감정을 무의식적으로 드러낸다. 의식적으로 통제하기 어렵다.",
    "definition_en": "A very brief facial expression lasting between 1/25 and 1/5 of a second that reveals a concealed emotion involuntarily. It is extremely difficult to consciously control.",
    "significance": "거짓말 탐지, 범죄 수사, 임상 면담 등에서 비언어적 단서로 주목받는다. 다만, 미세표정만으로 거짓말을 정확히 탐지할 수 있다는 주장에는 과학적 논쟁이 있다.",
    "key_researchers": [
      {
        "name_ko": "폴 에크먼",
        "name_en": "Paul Ekman",
        "contribution": "미세표정 연구의 선구자, FACS(얼굴 움직임 부호화 체계) 개발"
      },
      {
        "name_ko": "월리스 프리슨",
        "name_en": "Wallace Friesen",
        "contribution": "에크먼과 함께 FACS를 공동 개발하고 미세표정을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 정서",
        "name_en": "Basic Emotions",
        "id": "MOTIV_BASICEMO_014"
      },
      {
        "name_ko": "안면피드백가설",
        "name_en": "Facial Feedback Hypothesis",
        "id": "MOTIV_FFH_026"
      },
      {
        "name_ko": "정서",
        "name_en": "Emotion",
        "id": "MOTIV_EMOTION_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "미세표정 = '마이크로(micro) + 표정' → 1초도 안 되는 순간 나타나는 진짜 감정",
      "differential": "미세표정(무의식적, 1/25~1/5초)과 일반 표정(의식적 조절 가능, 더 오래 지속)을 구분",
      "key_point": "FACS(Facial Action Coding System)는 얼굴 근육의 움직임을 체계적으로 분류하는 도구이다",
      "common_mistake": "미세표정 읽기로 확실하게 거짓말을 탐지할 수 있다고 오해 — 맥락 없이 표정만으로는 정확도가 제한적이다"
    }
  },
  {
    "id": "MOTIV_EI_029",
    "terminology": "정서지능 (Emotional Intelligence)",
    "terminology_ko": "정서지능",
    "terminology_en": "Emotional Intelligence",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "자신과 타인의 정서를 정확히 인식하고, 이해하며, 조절하고, 효과적으로 활용하는 능력. 살로비와 메이어가 학술적으로 정의하고, 골먼이 대중화시켰다.",
    "definition_en": "The ability to accurately perceive, understand, regulate, and effectively utilize emotions in oneself and others. Academically defined by Salovey and Mayer, and popularized by Goleman.",
    "significance": "전통적 지능(IQ)만으로는 설명하지 못하는 사회적 성공, 리더십, 대인관계 능력을 설명하는 개념으로, 교육과 조직 분야에서 큰 관심을 받고 있다.",
    "key_researchers": [
      {
        "name_ko": "피터 살로비",
        "name_en": "Peter Salovey",
        "contribution": "메이어와 함께 정서지능의 학술적 개념을 최초 제안 (1990)"
      },
      {
        "name_ko": "존 메이어",
        "name_en": "John Mayer",
        "contribution": "살로비와 함께 정서지능의 4가지 영역(인식, 활용, 이해, 조절) 모델 제안"
      },
      {
        "name_ko": "대니얼 골먼",
        "name_en": "Daniel Goleman",
        "contribution": "《Emotional Intelligence》(1995) 출간으로 정서지능 개념을 대중화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정서",
        "name_en": "Emotion",
        "id": "MOTIV_EMOTION_010"
      },
      {
        "name_ko": "정서의 인지적 평가",
        "name_en": "Cognitive Appraisal of Emotion",
        "id": "MOTIV_COGAPP_027"
      },
      {
        "name_ko": "미세표정",
        "name_en": "Microexpression",
        "id": "MOTIV_MICROEXP_028"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정서 인식",
        "name_en": "Perceiving Emotions",
        "description": "자신과 타인의 정서를 정확하게 인식하는 능력"
      },
      {
        "name_ko": "정서 활용",
        "name_en": "Using Emotions",
        "description": "사고와 문제 해결에 정서를 효과적으로 활용하는 능력"
      },
      {
        "name_ko": "정서 이해",
        "name_en": "Understanding Emotions",
        "description": "정서의 의미, 변화, 복합성을 이해하는 능력"
      },
      {
        "name_ko": "정서 조절",
        "name_en": "Managing Emotions",
        "description": "자신과 타인의 정서를 적절히 조절하는 능력"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정서지능 4영역: 인(인식) → 활(활용) → 이(이해) → 조(조절) = '인활이조'",
      "differential": "살로비-메이어 모델(능력 기반, 4영역)과 골먼 모델(혼합 모델, 5영역)의 차이를 구분",
      "key_point": "정서지능은 IQ와 독립적으로 학업 성취, 직무 성과, 대인관계 질을 예측한다",
      "common_mistake": "정서지능이 IQ보다 중요하다고 과장하는 오류 — 둘 다 중요하며 상호보완적이다"
    }
  },
  {
    "id": "MOTIV_HORMONE_030",
    "terminology": "호르몬과 동기 (Hormones and Motivation)",
    "terminology_ko": "호르몬과 동기",
    "terminology_en": "Hormones and Motivation",
    "category": "MOTIV",
    "category_name": "동기와 정서 (Motivation & Emotion)",
    "definition": "호르몬은 내분비계를 통해 분비되어 동기와 행동에 영향을 미치는 화학적 전달 물질이다. 렙틴(포만), 그렐린(배고픔), 테스토스테론(성동기/공격성), 옥시토신(사회적 유대), 코르티솔(스트레스 반응) 등이 동기의 생물학적 기반을 형성한다.",
    "definition_en": "Hormones are chemical messengers secreted through the endocrine system that influence motivation and behavior. Leptin (satiety), ghrelin (hunger), testosterone (sexual motivation/aggression), oxytocin (social bonding), and cortisol (stress response) form the biological basis of motivation.",
    "significance": "동기의 생물학적 기반을 이해하는 데 필수적인 주제이다. 호르몬은 동기를 직접 유발하기보다 행동의 역치(threshold)를 조절하여 동기에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "제프리 프리드먼",
        "name_en": "Jeffrey Friedman",
        "contribution": "렙틴(leptin) 발견으로 체중 조절의 호르몬 기전 규명"
      },
      {
        "name_ko": "코지마 마사유키",
        "name_en": "Masayuki Kojima",
        "contribution": "그렐린(ghrelin) 발견으로 배고픔의 호르몬 조절 기전 규명"
      },
      {
        "name_ko": "수 카터",
        "name_en": "C. Sue Carter",
        "contribution": "옥시토신과 사회적 유대/짝결합(pair bonding)의 관계를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성동기",
        "name_en": "Sexual Motivation",
        "id": "MOTIV_SEXMOT_024"
      },
      {
        "name_ko": "비만",
        "name_en": "Obesity",
        "id": "MOTIV_OBESITY_022"
      },
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "MOTIV_HOMEO_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "렙틴",
        "name_en": "Leptin",
        "description": "지방세포에서 분비되어 포만감을 신호하고 음식 섭취를 억제하는 호르몬"
      },
      {
        "name_ko": "그렐린",
        "name_en": "Ghrelin",
        "description": "위에서 분비되어 배고픔을 신호하고 음식 섭취를 촉진하는 호르몬"
      },
      {
        "name_ko": "테스토스테론",
        "name_en": "Testosterone",
        "description": "성동기, 공격성, 지배 행동에 관여하는 성호르몬"
      },
      {
        "name_ko": "옥시토신",
        "name_en": "Oxytocin",
        "description": "사회적 유대, 신뢰, 애착에 관여하는 호르몬"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "description": "스트레스 반응에 관여하며 에너지 동원을 촉진하는 호르몬"
      }
    ],
    "quiz_hints": {
      "mnemonic": "주요 호르몬: 렙틴(배부름) ↔ 그렐린(배고픔), 옥시토신(사랑), 테스토스테론(성/공격), 코르티솔(스트레스)",
      "differential": "렙틴(포만 신호, 지방세포)과 그렐린(배고픔 신호, 위)의 반대 기능을 구분",
      "key_point": "호르몬은 동기를 '유발'하기보다 행동의 역치를 '조절'한다",
      "common_mistake": "테스토스테론이 공격성을 직접 '유발'한다고 오해 — 실제로는 사회적 맥락에서 지배 행동의 역치를 낮추는 역할을 한다"
    }
  }
];

TERMS_DATA.DEVELOP = [
  {
    "id": "DEVELOP_MATURATION_001",
    "terminology": "성숙 (Maturation)",
    "terminology_ko": "성숙",
    "terminology_en": "Maturation",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "유전적으로 결정된 생물학적 성장 과정으로, 학습이나 경험과 무관하게 일정한 순서와 시기에 따라 나타나는 신체적·심리적 변화를 말한다.",
    "definition_en": "A biologically driven process of growth determined by genetics, involving physical and psychological changes that unfold in an orderly sequence and timing regardless of learning or experience.",
    "significance": "발달에서 유전(자연)과 환경(양육)의 상대적 기여를 이해하는 데 핵심적인 개념이며, 특정 능력이 나타나는 시기와 준비도를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "아놀드 게젤",
        "name_en": "Arnold Gesell",
        "contribution": "성숙이론을 체계화하고 아동발달의 규범적 이정표를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결정적 시기",
        "name_en": "Critical Period",
        "id": "DEVELOP_CRITPRD_020"
      },
      {
        "name_ko": "기질",
        "name_en": "Temperament",
        "id": "DEVELOP_TEMPER_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성숙 = 생물학적 시계에 따라 자연스럽게 '익어가는' 과정",
      "differential": "학습은 경험에 의한 변화이고, 성숙은 유전적 프로그램에 의한 변화이다",
      "key_point": "성숙은 환경 자극 없이도 유전적 설계에 따라 진행되는 발달 과정이다",
      "common_mistake": "성숙과 발달을 동일시하는 오류 — 발달은 성숙과 학습을 모두 포함하는 상위 개념이다"
    }
  },
  {
    "id": "DEVELOP_TEMPER_002",
    "terminology": "기질 (Temperament)",
    "terminology_ko": "기질",
    "terminology_en": "Temperament",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "출생 시부터 나타나는 개인의 정서적 반응성과 자기조절 양식의 생물학적 기반으로, 활동수준, 정서성, 사회성 등에서의 개인차를 반영한다.",
    "definition_en": "The biologically based individual differences in emotional reactivity and self-regulation present from birth, reflected in variations in activity level, emotionality, and sociability.",
    "significance": "기질은 이후 성격 발달의 생물학적 토대가 되며, 양육 환경과의 상호작용(적합도 모델)을 통해 적응에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "알렉산더 토머스",
        "name_en": "Alexander Thomas",
        "contribution": "뉴욕종단연구(NYLS)를 통해 순한 아이, 까다로운 아이, 느린 아이 세 유형을 분류하였다"
      },
      {
        "name_ko": "스텔라 체스",
        "name_en": "Stella Chess",
        "contribution": "토머스와 함께 기질의 9개 차원과 적합도(goodness-of-fit) 모델을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "성숙",
        "name_en": "Maturation",
        "id": "DEVELOP_MATURATION_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "순한 기질",
        "name_en": "Easy temperament",
        "definition": "규칙적인 생체리듬, 긍정적 정서, 새로운 상황에 대한 적응이 빠른 유형"
      },
      {
        "name_ko": "까다로운 기질",
        "name_en": "Difficult temperament",
        "definition": "불규칙적 생체리듬, 부정적 정서, 새로운 자극에 강하게 반응하는 유형"
      },
      {
        "name_ko": "느린 기질",
        "name_en": "Slow-to-warm-up temperament",
        "definition": "낮은 활동수준, 초기에 약한 부정적 반응을 보이나 반복 노출 후 서서히 적응하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기질 = 태어날 때부터 가지고 나오는 성격의 '씨앗'",
      "differential": "기질은 생물학적·선천적인 반면, 성격은 기질과 환경의 상호작용으로 형성된 후천적 산물이다",
      "key_point": "토머스와 체스의 세 가지 기질 유형(순한, 까다로운, 느린)을 구분할 수 있어야 한다",
      "common_mistake": "기질이 고정불변하다고 오해 — 기질은 비교적 안정적이나 환경과의 상호작용으로 조절 가능하다"
    }
  },
  {
    "id": "DEVELOP_ATTACH_003",
    "terminology": "애착 (Attachment)",
    "terminology_ko": "애착",
    "terminology_en": "Attachment",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "영아와 주 양육자 사이에 형성되는 강하고 지속적인 정서적 유대로, 영아의 생존과 정서 조절에 기여하며 이후 대인관계의 내적 작동 모델을 형성한다.",
    "definition_en": "A strong, enduring emotional bond between an infant and primary caregiver that contributes to the infant's survival and emotional regulation, forming an internal working model for later relationships.",
    "significance": "애착의 질은 이후 정서 발달, 사회적 관계, 자아 개념 형성에 광범위한 영향을 미치며, 발달심리학의 가장 핵심적 주제 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "존 볼비",
        "name_en": "John Bowlby",
        "contribution": "애착이론을 창시하고 내적 작동 모델 개념을 제안하였다"
      },
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "낯선 상황 실험(Strange Situation)을 통해 애착 유형을 체계적으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "낯가림",
        "name_en": "Stranger Anxiety",
        "id": "DEVELOP_STRANG_004"
      },
      {
        "name_ko": "안전기지",
        "name_en": "Secure Base",
        "id": "DEVELOP_SECBASE_005"
      },
      {
        "name_ko": "안전애착",
        "name_en": "Secure Attachment",
        "id": "DEVELOP_SECATT_021"
      },
      {
        "name_ko": "불안정애착",
        "name_en": "Insecure Attachment",
        "id": "DEVELOP_INSATT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "애착 = 아기가 양육자에게 '달라붙는' 정서적 끈",
      "differential": "애착은 특정 대상에 대한 지속적 정서 유대이고, 의존은 도움이 필요한 일시적 상태이다",
      "key_point": "볼비의 애착이론과 에인스워스의 낯선 상황 실험을 연결하여 이해해야 한다",
      "common_mistake": "애착이 영아기에만 중요하다는 오해 — 애착은 전 생애에 걸쳐 대인관계에 영향을 미친다"
    }
  },
  {
    "id": "DEVELOP_STRANG_004",
    "terminology": "낯가림 (Stranger Anxiety)",
    "terminology_ko": "낯가림",
    "terminology_en": "Stranger Anxiety",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "생후 6~8개월경 나타나는 낯선 사람에 대한 두려움과 불안 반응으로, 영아가 친숙한 양육자와 낯선 사람을 구별할 수 있게 되었음을 의미한다.",
    "definition_en": "Fear and anxiety toward unfamiliar people that typically emerges around 6-8 months of age, indicating the infant's ability to distinguish between familiar caregivers and strangers.",
    "significance": "낯가림은 인지 발달(재인 기억)과 애착 형성의 지표로, 정상적인 사회정서 발달의 이정표이다.",
    "key_researchers": [
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "낯선 상황 실험에서 낯가림 반응을 애착 유형 평가에 활용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "대상영속성",
        "name_en": "Object Permanence",
        "id": "DEVELOP_OBJPER_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "낯가림 = 낯선 얼굴 → 울음 (6~8개월)",
      "differential": "낯가림은 낯선 사람에 대한 반응이고, 분리불안은 양육자와의 분리에 대한 반응이다",
      "key_point": "생후 6~8개월에 시작되어 12~15개월에 최고조에 달한 후 점차 감소한다",
      "common_mistake": "낯가림을 부정적 발달 신호로 오해 — 실제로는 정상적인 인지·정서 발달의 증거이다"
    }
  },
  {
    "id": "DEVELOP_SECBASE_005",
    "terminology": "안전기지 (Secure Base)",
    "terminology_ko": "안전기지",
    "terminology_en": "Secure Base",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "영아가 환경을 탐색할 때 심리적 안정감의 원천이 되는 애착 대상으로, 영아는 안전기지를 기점으로 탐색과 귀환을 반복하며 세상을 배워간다.",
    "definition_en": "The attachment figure who serves as a source of psychological security from which the infant ventures out to explore the environment and returns to for comfort and reassurance.",
    "significance": "안전기지 개념은 애착과 탐색 행동의 균형을 설명하며, 안정 애착이 건강한 발달의 토대가 되는 이유를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "안전기지 현상을 체계적으로 관찰·기술하고 애착 이론에 통합하였다"
      },
      {
        "name_ko": "존 볼비",
        "name_en": "John Bowlby",
        "contribution": "애착 대상이 안전기지 역할을 한다는 이론적 틀을 제공하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "안전애착",
        "name_en": "Secure Attachment",
        "id": "DEVELOP_SECATT_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안전기지 = 엄마라는 '베이스캠프'에서 출발해 세상 탐험",
      "differential": "안전기지는 양육자의 기능적 역할이고, 애착은 아이와 양육자 간의 관계적 유대이다",
      "key_point": "안정 애착 영아만이 양육자를 효과적인 안전기지로 활용하여 적극적 탐색 행동을 보인다",
      "common_mistake": "안전기지가 물리적 장소를 뜻한다는 오해 — 사람(애착 대상)이 안전기지이다"
    }
  },
  {
    "id": "DEVELOP_SCHEMA_006",
    "terminology": "도식 (Schema)",
    "terminology_ko": "도식",
    "terminology_en": "Schema",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "피아제 이론에서 세상을 이해하고 상호작용하기 위해 사용하는 정신적 구조 또는 틀로, 경험을 조직하고 해석하는 데 사용된다.",
    "definition_en": "In Piaget's theory, a mental structure or framework used to organize and interpret experiences, serving as the building blocks of intellectual development.",
    "significance": "도식은 피아제 인지발달이론의 기본 단위로, 동화와 조절을 통한 인지 발달 과정을 이해하는 출발점이다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "도식 개념을 제안하고 이를 인지발달이론의 핵심 구성 요소로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "동화",
        "name_en": "Assimilation",
        "id": "DEVELOP_ASSIM_007"
      },
      {
        "name_ko": "조절",
        "name_en": "Accommodation",
        "id": "DEVELOP_ACCOM_008"
      }
    ],
    "sub_types": [
      {
        "name_ko": "행동 도식",
        "name_en": "Behavioral schema",
        "definition": "감각운동기에 주로 사용되는 행동 패턴 기반의 도식(예: 빨기, 잡기)"
      },
      {
        "name_ko": "인지 도식",
        "name_en": "Cognitive schema",
        "definition": "전조작기 이후 발달하는 개념적·상징적 사고의 틀"
      }
    ],
    "quiz_hints": {
      "mnemonic": "도식 = 세상을 이해하는 '정신적 서랍장' — 새 경험을 기존 서랍에 넣거나(동화), 서랍을 고치거나(조절)",
      "differential": "도식은 정적인 지식 구조이고, 동화·조절은 도식이 변화하는 동적 과정이다",
      "key_point": "피아제의 도식은 감각운동적 행동에서 시작해 점차 추상적·개념적 표상으로 발달한다",
      "common_mistake": "도식을 단순한 '개념'과 혼동 — 도식은 행동 패턴부터 추상적 사고까지 포괄하는 조직화된 정신 구조이다"
    }
  },
  {
    "id": "DEVELOP_ASSIM_007",
    "terminology": "동화 (Assimilation)",
    "terminology_ko": "동화",
    "terminology_en": "Assimilation",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "새로운 경험이나 정보를 기존의 도식에 맞추어 해석하고 통합하는 인지 과정으로, 기존 인지 구조를 변경하지 않고 새 정보를 흡수한다.",
    "definition_en": "The cognitive process of interpreting and incorporating new experiences or information into existing schemas without modifying the current cognitive structure.",
    "significance": "동화는 인지적 안정성을 유지하는 기능을 하며, 조절과 함께 인지 발달의 두 가지 핵심 적응 기제를 구성한다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "동화와 조절의 균형(평형화)을 통한 인지 발달 모델을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도식",
        "name_en": "Schema",
        "id": "DEVELOP_SCHEMA_006"
      },
      {
        "name_ko": "조절",
        "name_en": "Accommodation",
        "id": "DEVELOP_ACCOM_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "동화 = '네 모양 블록'을 기존 '네모 구멍'에 끼워 넣기",
      "differential": "동화는 기존 도식에 맞추는 것이고, 조절은 도식 자체를 바꾸는 것이다",
      "key_point": "아이가 처음 본 동물을 모두 '멍멍이'라 부르는 것이 동화의 전형적 예시이다",
      "common_mistake": "동화와 조절을 순차적 과정으로 오해 — 두 과정은 동시에 일어나며 서로 보완적이다"
    }
  },
  {
    "id": "DEVELOP_ACCOM_008",
    "terminology": "조절 (Accommodation)",
    "terminology_ko": "조절",
    "terminology_en": "Accommodation",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "기존 도식으로는 새로운 경험을 설명할 수 없을 때, 도식을 수정하거나 새로운 도식을 만들어 적응하는 인지 과정이다.",
    "definition_en": "The cognitive process of modifying existing schemas or creating new ones when existing schemas cannot adequately explain new experiences.",
    "significance": "조절은 인지 구조의 질적 변화를 이끌며, 동화와의 균형(평형화)이 인지 발달의 원동력이 된다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "조절을 인지 발달의 핵심 적응 기제로 설명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도식",
        "name_en": "Schema",
        "id": "DEVELOP_SCHEMA_006"
      },
      {
        "name_ko": "동화",
        "name_en": "Assimilation",
        "id": "DEVELOP_ASSIM_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조절 = 새 열쇠에 맞게 '자물쇠(도식)를 바꾸는' 과정",
      "differential": "동화는 새 정보를 기존 틀에 맞추고, 조절은 틀 자체를 새 정보에 맞게 변형한다",
      "key_point": "고양이를 처음 보고 '멍멍이'라 불렀다가(동화), 나중에 '고양이'라는 새 범주를 만드는 것(조절)이 전형적 예시이다",
      "common_mistake": "조절을 단순 수정으로 이해 — 조절은 기존 도식의 근본적 재구조화나 새 도식 생성을 포함한다"
    }
  },
  {
    "id": "DEVELOP_SENSMO_009",
    "terminology": "감각운동기 (Sensorimotor Stage)",
    "terminology_ko": "감각운동기",
    "terminology_en": "Sensorimotor Stage",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "피아제 인지발달의 첫 단계(출생~2세)로, 영아가 감각 경험과 운동 활동을 통해 세상을 이해하며, 이 시기 말에 대상영속성과 표상적 사고가 출현한다.",
    "definition_en": "The first stage of Piaget's cognitive development (birth to age 2), during which infants understand the world through sensory experiences and motor actions, culminating in the emergence of object permanence and representational thought.",
    "significance": "감각운동기는 이후 모든 인지 발달의 토대가 되며, 영아가 반사적 행동에서 의도적·상징적 사고로 전환하는 과정을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "자신의 세 자녀에 대한 체계적 관찰을 통해 감각운동기의 6개 하위 단계를 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대상영속성",
        "name_en": "Object Permanence",
        "id": "DEVELOP_OBJPER_013"
      },
      {
        "name_ko": "전조작기",
        "name_en": "Preoperational Stage",
        "id": "DEVELOP_PREOP_010"
      },
      {
        "name_ko": "도식",
        "name_en": "Schema",
        "id": "DEVELOP_SCHEMA_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감각운동기 = 0~2세, 감각(보고 듣고) + 운동(만지고 빨고)으로 세상을 배우는 시기",
      "differential": "감각운동기는 감각·운동적 경험에 의존하고, 전조작기는 상징적 표상을 사용한다",
      "key_point": "감각운동기의 핵심 성취는 대상영속성의 획득이다",
      "common_mistake": "감각운동기의 영아를 완전히 수동적 존재로 오해 — 영아는 능동적으로 환경을 탐색한다"
    }
  },
  {
    "id": "DEVELOP_PREOP_010",
    "terminology": "전조작기 (Preoperational Stage)",
    "terminology_ko": "전조작기",
    "terminology_en": "Preoperational Stage",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "피아제 인지발달의 두 번째 단계(2~7세)로, 상징적 사고와 언어가 급격히 발달하지만, 논리적 조작 능력이 아직 형성되지 않아 자기중심성과 보존개념 실패 등의 특성을 보인다.",
    "definition_en": "The second stage of Piaget's cognitive development (ages 2-7), characterized by rapid growth in symbolic thought and language, but limited by egocentrism, lack of conservation, and inability to perform logical operations.",
    "significance": "전조작기는 상징적 표상 능력의 출현과 논리적 사고의 한계를 동시에 보여주며, 아동의 사고가 질적으로 성인과 다름을 입증한다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "전조작기 아동의 사고 특성(자기중심성, 물활론, 비가역성 등)을 체계적으로 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기중심성",
        "name_en": "Egocentrism",
        "id": "DEVELOP_EGOCEN_015"
      },
      {
        "name_ko": "보존개념",
        "name_en": "Conservation",
        "id": "DEVELOP_CONSERV_014"
      },
      {
        "name_ko": "감각운동기",
        "name_en": "Sensorimotor Stage",
        "id": "DEVELOP_SENSMO_009"
      },
      {
        "name_ko": "구체적 조작기",
        "name_en": "Concrete Operational Stage",
        "id": "DEVELOP_CONCOP_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "전개념적 사고기",
        "name_en": "Preconceptual thought",
        "definition": "2~4세, 상징 기능이 출현하나 개념이 불완전하여 물활론, 인공론적 사고를 보인다"
      },
      {
        "name_ko": "직관적 사고기",
        "name_en": "Intuitive thought",
        "definition": "4~7세, 논리가 아닌 직관에 의존하며 겉보기에 따라 판단한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전조작기 = 2~7세, 말은 하지만 '논리(조작)'가 아직 '전(前)' 단계",
      "differential": "전조작기는 상징적 사고는 가능하나 논리적 조작이 불가하고, 구체적 조작기는 구체적 사물에 대해 논리적 사고가 가능하다",
      "key_point": "자기중심성, 물활론, 보존개념 실패가 이 시기의 핵심 특성이다",
      "common_mistake": "'전조작기'의 '전'을 '이전에 조작을 했다'로 오해 — '조작 이전' 즉 아직 논리적 조작이 불가능한 단계라는 뜻이다"
    }
  },
  {
    "id": "DEVELOP_CONCOP_011",
    "terminology": "구체적 조작기 (Concrete Operational Stage)",
    "terminology_ko": "구체적 조작기",
    "terminology_en": "Concrete Operational Stage",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "피아제 인지발달의 세 번째 단계(7~11세)로, 구체적이고 실제적인 대상에 대해 논리적 사고(보존, 분류, 서열화)가 가능해지지만, 추상적·가설적 사고는 아직 어렵다.",
    "definition_en": "The third stage of Piaget's cognitive development (ages 7-11), in which children can think logically about concrete objects and events (conservation, classification, seriation) but struggle with abstract and hypothetical reasoning.",
    "significance": "구체적 조작기는 아동이 직관적 사고에서 논리적 사고로 전환하는 결정적 시기이며, 학교 교육의 기초가 되는 인지 능력이 형성된다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "구체적 조작기의 핵심 인지 능력인 보존, 분류, 서열화 과제를 고안하여 이 단계의 특성을 밝혔다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보존개념",
        "name_en": "Conservation",
        "id": "DEVELOP_CONSERV_014"
      },
      {
        "name_ko": "전조작기",
        "name_en": "Preoperational Stage",
        "id": "DEVELOP_PREOP_010"
      },
      {
        "name_ko": "형식적 조작기",
        "name_en": "Formal Operational Stage",
        "id": "DEVELOP_FORMOP_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구체적 조작기 = 7~11세, 눈앞에 '구체적'으로 있는 것에 대해서만 논리적 사고 가능",
      "differential": "구체적 조작기는 실제 사물에 대한 논리가 가능하고, 형식적 조작기는 추상적·가설적 사고까지 가능하다",
      "key_point": "보존개념의 획득, 분류와 서열화 능력의 발달이 이 시기의 핵심이다",
      "common_mistake": "구체적 조작기 아동이 모든 논리적 사고가 가능하다고 오해 — 추상적·가설적 사고는 형식적 조작기에서야 가능하다"
    }
  },
  {
    "id": "DEVELOP_FORMOP_012",
    "terminology": "형식적 조작기 (Formal Operational Stage)",
    "terminology_ko": "형식적 조작기",
    "terminology_en": "Formal Operational Stage",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "피아제 인지발달의 네 번째이자 마지막 단계(11세 이후)로, 추상적·가설적·체계적 사고가 가능해지며, 가설-연역적 추론과 명제적 사고가 나타난다.",
    "definition_en": "The fourth and final stage of Piaget's cognitive development (age 11 onward), characterized by the ability to think abstractly, hypothetically, and systematically, including hypothetico-deductive reasoning and propositional thought.",
    "significance": "형식적 조작기는 과학적 사고와 도덕적 추론 등 고차원 인지 능력의 토대가 되며, 청소년기 인지 발달의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "형식적 조작기의 가설-연역적 추론 능력을 진자 과제 등으로 실험적으로 입증하였다"
      },
      {
        "name_ko": "바벨 인헬더",
        "name_en": "Bärbel Inhelder",
        "contribution": "피아제와 함께 형식적 조작적 사고의 발달을 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구체적 조작기",
        "name_en": "Concrete Operational Stage",
        "id": "DEVELOP_CONCOP_011"
      },
      {
        "name_ko": "청소년기 정체성 위기",
        "name_en": "Adolescent Identity Crisis",
        "id": "DEVELOP_IDCRISIS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "형식적 조작기 = 11세+, 눈에 안 보이는 것도 논리적으로 생각 가능 ('만약에~라면' 사고)",
      "differential": "구체적 조작기는 실제 사물에 국한되나, 형식적 조작기는 추상적·가설적 상황까지 논리적 사고 가능",
      "key_point": "가설-연역적 추론과 체계적 문제 해결이 이 단계의 핵심 능력이다",
      "common_mistake": "모든 성인이 형식적 조작에 도달한다는 오해 — 문화적·교육적 요인에 따라 도달하지 못하는 경우도 많다"
    }
  },
  {
    "id": "DEVELOP_OBJPER_013",
    "terminology": "대상영속성 (Object Permanence)",
    "terminology_ko": "대상영속성",
    "terminology_en": "Object Permanence",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "물체가 시야에서 사라져도 계속 존재한다는 것을 이해하는 인지 능력으로, 피아제에 의하면 감각운동기(약 8~12개월) 동안 점진적으로 획득된다.",
    "definition_en": "The cognitive understanding that objects continue to exist even when they are out of sight, gradually acquired during the sensorimotor stage (around 8-12 months) according to Piaget.",
    "significance": "대상영속성은 표상적 사고의 시작을 알리는 중요한 인지적 이정표이며, 이후 상징 놀이와 언어 발달의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "대상영속성 개념을 제안하고 숨기기 과제를 통해 발달 단계를 밝혔다"
      },
      {
        "name_ko": "르네 바이야르종",
        "name_en": "Renée Baillargeon",
        "contribution": "기대위반 패러다임을 사용하여 피아제보다 이른 시기에 대상영속성이 나타남을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각운동기",
        "name_en": "Sensorimotor Stage",
        "id": "DEVELOP_SENSMO_009"
      },
      {
        "name_ko": "낯가림",
        "name_en": "Stranger Anxiety",
        "id": "DEVELOP_STRANG_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대상영속성 = 까꿍 놀이! 엄마 얼굴이 가려져도 엄마가 없어진 게 아니라는 것을 아는 것",
      "differential": "대상영속성은 물체의 존재에 대한 인지이고, 보존개념은 물체의 속성 불변에 대한 인지이다",
      "key_point": "피아제는 8~12개월이라 했지만, 바이야르종의 연구에 의하면 3.5~5개월에도 원초적 형태가 존재한다",
      "common_mistake": "대상영속성이 한 번에 완전히 획득된다는 오해 — 여러 하위 단계를 거쳐 점진적으로 완성된다"
    }
  },
  {
    "id": "DEVELOP_CONSERV_014",
    "terminology": "보존개념 (Conservation)",
    "terminology_ko": "보존개념",
    "terminology_en": "Conservation",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "물체의 외형이 변해도 그 양, 수, 부피, 무게 등 본질적 속성은 변하지 않는다는 것을 이해하는 인지 능력으로, 구체적 조작기(7세 이후)에 획득된다.",
    "definition_en": "The cognitive understanding that certain properties of objects (quantity, number, volume, weight) remain unchanged despite changes in their appearance, acquired during the concrete operational stage (after age 7).",
    "significance": "보존개념의 획득은 아동의 사고가 지각적 특성에 좌우되는 직관적 단계를 벗어나 논리적 사고 단계로 진입했음을 나타낸다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "보존 과제(액체, 수, 무게 등)를 고안하여 인지 발달 단계를 실험적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구체적 조작기",
        "name_en": "Concrete Operational Stage",
        "id": "DEVELOP_CONCOP_011"
      },
      {
        "name_ko": "전조작기",
        "name_en": "Preoperational Stage",
        "id": "DEVELOP_PREOP_010"
      },
      {
        "name_ko": "자기중심성",
        "name_en": "Egocentrism",
        "id": "DEVELOP_EGOCEN_015"
      }
    ],
    "sub_types": [
      {
        "name_ko": "수 보존",
        "name_en": "Number conservation",
        "definition": "배열이 달라져도 수가 변하지 않음을 이해하는 것 (약 6~7세)"
      },
      {
        "name_ko": "액체량 보존",
        "name_en": "Liquid conservation",
        "definition": "용기 모양이 바뀌어도 액체의 양이 변하지 않음을 이해하는 것 (약 7~8세)"
      },
      {
        "name_ko": "무게 보존",
        "name_en": "Weight conservation",
        "definition": "형태가 변해도 무게가 변하지 않음을 이해하는 것 (약 9~10세)"
      },
      {
        "name_ko": "부피 보존",
        "name_en": "Volume conservation",
        "definition": "형태가 변해도 부피가 변하지 않음을 이해하는 것 (약 11~12세)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "보존 = 같은 양의 물을 얇은 컵에 부어도 양은 '보존'된다!",
      "differential": "보존개념은 속성의 불변에 대한 이해이고, 대상영속성은 물체 존재의 지속에 대한 이해이다",
      "key_point": "보존개념은 한꺼번에 획득되지 않고 수→액체량→무게→부피 순서로 점진적으로 획득된다(수평적 격차)",
      "common_mistake": "보존개념을 하나의 단일 능력으로 이해 — 실제로는 영역별로 다른 시기에 획득된다(수평적 격차)"
    }
  },
  {
    "id": "DEVELOP_EGOCEN_015",
    "terminology": "자기중심성 (Egocentrism)",
    "terminology_ko": "자기중심성",
    "terminology_en": "Egocentrism",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "자신의 관점에서만 세상을 이해하고 다른 사람의 관점을 취하지 못하는 인지적 한계로, 피아제의 전조작기(2~7세) 아동에게서 두드러지게 나타난다.",
    "definition_en": "The cognitive limitation of understanding the world only from one's own perspective and being unable to take another's viewpoint, particularly prominent in Piaget's preoperational stage (ages 2-7).",
    "significance": "자기중심성은 전조작기 사고의 핵심적 한계를 보여주며, 이 한계의 극복이 이후 사회인지 발달(마음이론 등)의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "세 산 모형 과제(three-mountain task)를 통해 전조작기 아동의 자기중심성을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전조작기",
        "name_en": "Preoperational Stage",
        "id": "DEVELOP_PREOP_010"
      },
      {
        "name_ko": "마음이론",
        "name_en": "Theory of Mind",
        "id": "DEVELOP_TOM_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기중심성 = 아이가 전화로 '이거 봐!'라며 장난감을 보여주는 것 — 상대방이 못 본다는 걸 모름",
      "differential": "자기중심성은 인지적 한계이지 이기적(selfish)이라는 도덕적 판단이 아니다",
      "key_point": "피아제의 세 산 과제: 아동은 산 모형의 다른 쪽에서 보는 사람도 자신과 같은 장면을 본다고 답한다",
      "common_mistake": "자기중심성을 '이기심'과 혼동 — 자기중심성은 타인의 시각을 취하는 인지 능력의 부재이지 도덕적 결함이 아니다"
    }
  },
  {
    "id": "DEVELOP_TOM_016",
    "terminology": "마음이론 (Theory of Mind)",
    "terminology_ko": "마음이론",
    "terminology_en": "Theory of Mind",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "타인이 자신과는 다른 믿음, 의도, 감정, 지식을 가질 수 있음을 이해하는 인지 능력으로, 일반적으로 4~5세경에 발달한다.",
    "definition_en": "The cognitive ability to understand that others may have beliefs, intentions, emotions, and knowledge different from one's own, typically developing around ages 4-5.",
    "significance": "마음이론은 사회적 상호작용, 공감, 속임, 의사소통의 기초가 되며, 자폐스펙트럼장애의 핵심 결함으로 알려져 심리학과 발달정신병리학에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 프리맥",
        "name_en": "David Premack",
        "contribution": "침팬지 연구를 통해 '마음이론'이라는 용어를 최초로 사용하였다"
      },
      {
        "name_ko": "가이 우드러프",
        "name_en": "Guy Woodruff",
        "contribution": "프리맥과 함께 마음이론 개념을 학계에 도입하였다"
      },
      {
        "name_ko": "하인츠 비머",
        "name_en": "Heinz Wimmer",
        "contribution": "틀린 믿음 과제(false belief task)를 개발하여 마음이론의 발달을 실험적으로 검증하였다"
      },
      {
        "name_ko": "요제프 퍼너",
        "name_en": "Josef Perner",
        "contribution": "비머와 함께 틀린 믿음 과제를 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기중심성",
        "name_en": "Egocentrism",
        "id": "DEVELOP_EGOCEN_015"
      },
      {
        "name_ko": "전조작기",
        "name_en": "Preoperational Stage",
        "id": "DEVELOP_PREOP_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마음이론 = 틀린 믿음 과제 — '샐리가 공이 바구니에 있다고 생각할까, 상자에 있다고 생각할까?'",
      "differential": "자기중심성은 타인 관점 이해의 실패이고, 마음이론은 타인의 정신 상태를 추론하는 능력이다",
      "key_point": "틀린 믿음 과제(Sally-Anne task)를 통과하면 마음이론이 발달한 것으로 본다(약 4~5세)",
      "common_mistake": "마음이론을 단일 능력으로 이해 — 실제로는 1차(타인의 믿음), 2차(타인이 제3자의 믿음에 대해 아는 것) 등 수준이 있다"
    }
  },
  {
    "id": "DEVELOP_ZPD_017",
    "terminology": "근접발달영역 (Zone of Proximal Development, ZPD)",
    "terminology_ko": "근접발달영역",
    "terminology_en": "Zone of Proximal Development",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "아동이 혼자서는 해결할 수 없지만 성인이나 유능한 또래의 도움을 받으면 해결할 수 있는 과제의 범위로, 실제 발달 수준과 잠재적 발달 수준 사이의 영역이다.",
    "definition_en": "The range of tasks that a child cannot yet perform independently but can accomplish with guidance from a more knowledgeable other, representing the gap between actual and potential developmental levels.",
    "significance": "ZPD는 교육과 발달의 관계를 재정의하였으며, 교육이 발달을 이끌어야 한다는 비고츠키의 핵심 주장을 뒷받침한다. 비계(scaffolding) 교수법의 이론적 근거이다.",
    "key_researchers": [
      {
        "name_ko": "레프 비고츠키",
        "name_en": "Lev Vygotsky",
        "contribution": "근접발달영역 개념을 제안하여 사회적 상호작용이 인지 발달에 필수적임을 주장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도식",
        "name_en": "Schema",
        "id": "DEVELOP_SCHEMA_006"
      },
      {
        "name_ko": "형식적 조작기",
        "name_en": "Formal Operational Stage",
        "id": "DEVELOP_FORMOP_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ZPD = 혼자는 못 하지만 '도움 받으면 할 수 있는' 영역 (비계 = 건물 짓는 임시 구조물처럼 도움을 제공)",
      "differential": "ZPD는 비고츠키의 사회문화적 이론이고, 피아제의 인지발달 단계론은 개인의 내적 구성을 강조한다",
      "key_point": "비고츠키는 교육이 발달을 '이끌어야' 한다고 주장하며, ZPD 내에서의 교수가 가장 효과적이라고 보았다",
      "common_mistake": "ZPD를 고정된 영역으로 오해 — ZPD는 아동의 발달에 따라 계속 변화하는 동적 영역이다"
    }
  },
  {
    "id": "DEVELOP_IDENT_018",
    "terminology": "정체성 (Identity)",
    "terminology_ko": "정체성",
    "terminology_en": "Identity",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "자기 자신에 대한 일관되고 통합된 감각으로, '나는 누구인가'에 대한 답을 포함하며, 에릭슨에 의하면 청소년기의 핵심 발달 과제이다.",
    "definition_en": "A coherent and integrated sense of self, encompassing the answer to 'Who am I?', identified by Erikson as the central developmental task of adolescence.",
    "significance": "정체성 형성은 이후 성인기의 친밀한 관계, 직업 선택, 가치관 확립의 기초가 되며, 정체성 혼란은 심리적 부적응의 원인이 될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "에릭 에릭슨",
        "name_en": "Erik Erikson",
        "contribution": "정체성 대 역할 혼란(Identity vs. Role Confusion)을 청소년기의 핵심 심리사회적 위기로 제안하였다"
      },
      {
        "name_ko": "제임스 마르시아",
        "name_en": "James Marcia",
        "contribution": "정체성 지위 이론(identity status theory)을 통해 정체성 형성의 네 가지 상태를 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에릭슨의 심리사회적 발달단계",
        "name_en": "Erikson's Psychosocial Stages",
        "id": "DEVELOP_ERIKSON_023"
      },
      {
        "name_ko": "청소년기 정체성 위기",
        "name_en": "Adolescent Identity Crisis",
        "id": "DEVELOP_IDCRISIS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정체성 = 청소년기 핵심 질문 '나는 누구인가?'에 대한 답 찾기",
      "differential": "정체성은 자기 인식의 통합체이고, 자아개념(self-concept)은 자신에 대한 인지적 이해이다",
      "key_point": "마르시아의 4가지 정체성 지위: 정체성 성취, 유예, 유실, 혼미를 구분할 수 있어야 한다",
      "common_mistake": "정체성이 청소년기에 완성된다는 오해 — 정체성은 전 생애에 걸쳐 재구성될 수 있다"
    }
  },
  {
    "id": "DEVELOP_MORAL_019",
    "terminology": "도덕발달 (Moral Development)",
    "terminology_ko": "도덕발달",
    "terminology_en": "Moral Development",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "옳고 그름에 대한 판단 능력과 도덕적 행동이 발달하는 과정으로, 콜버그는 전인습, 인습, 후인습의 세 수준으로 이를 체계화하였다.",
    "definition_en": "The process through which the ability to judge right from wrong and engage in moral behavior develops, systematized by Kohlberg into three levels: preconventional, conventional, and postconventional.",
    "significance": "도덕발달 이론은 교육, 법, 윤리 분야에 광범위한 영향을 미쳤으며, 인지 발달과 도덕적 추론의 관계를 밝히는 데 기여하였다.",
    "key_researchers": [
      {
        "name_ko": "로렌스 콜버그",
        "name_en": "Lawrence Kohlberg",
        "contribution": "하인츠 딜레마를 사용하여 도덕 추론의 세 수준 여섯 단계 이론을 제안하였다"
      },
      {
        "name_ko": "장 피아제",
        "name_en": "Jean Piaget",
        "contribution": "타율적 도덕성에서 자율적 도덕성으로의 발달을 처음 기술하였다"
      },
      {
        "name_ko": "캐럴 길리건",
        "name_en": "Carol Gilligan",
        "contribution": "콜버그의 이론이 남성 중심적임을 비판하고 돌봄의 윤리(ethics of care)를 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전인습적 도덕",
        "name_en": "Preconventional Morality",
        "id": "DEVELOP_PRECONV_024"
      },
      {
        "name_ko": "인습적 도덕",
        "name_en": "Conventional Morality",
        "id": "DEVELOP_CONV_025"
      },
      {
        "name_ko": "후인습적 도덕",
        "name_en": "Postconventional Morality",
        "id": "DEVELOP_POSTCONV_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도덕발달 = 콜버그의 하인츠 딜레마 — '약을 훔쳐야 할까?'에 대한 추론 수준의 변화",
      "differential": "피아제는 도덕 판단의 2단계(타율→자율)를, 콜버그는 3수준 6단계를 제안하였다",
      "key_point": "콜버그의 이론은 '무엇을' 결정했느냐가 아니라 '왜' 그렇게 결정했느냐(추론 과정)에 초점을 둔다",
      "common_mistake": "도덕 발달 단계를 연령에 엄격히 대응시키는 오류 — 콜버그는 단계의 순서는 불변이나 연령은 가변적이라고 하였다"
    }
  },
  {
    "id": "DEVELOP_CRITPRD_020",
    "terminology": "결정적 시기 (Critical Period)",
    "terminology_ko": "결정적 시기",
    "terminology_en": "Critical Period",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "특정 발달이 이루어지기 위해 적절한 환경 자극이 반드시 주어져야 하는 제한된 시간 창으로, 이 시기를 놓치면 해당 발달이 이루어지기 극히 어렵다.",
    "definition_en": "A limited time window during which appropriate environmental stimulation must be provided for specific development to occur; if this period is missed, the development becomes extremely difficult to achieve.",
    "significance": "결정적 시기 개념은 언어 습득, 시각 발달, 애착 형성 등에서 환경 자극의 시기적 중요성을 강조하며, 조기 개입의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "콘라트 로렌츠",
        "name_en": "Konrad Lorenz",
        "contribution": "거위의 각인(imprinting) 현상을 통해 결정적 시기의 존재를 처음 입증하였다"
      },
      {
        "name_ko": "에릭 레너버그",
        "name_en": "Eric Lenneberg",
        "contribution": "언어 습득의 결정적 시기 가설을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성숙",
        "name_en": "Maturation",
        "id": "DEVELOP_MATURATION_001"
      },
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "태내기 위험요인",
        "name_en": "Teratogen",
        "id": "DEVELOP_TERATO_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "결정적 시기 = 열차가 지나가는 '시간표' — 놓치면 다음 열차가 없다",
      "differential": "결정적 시기(critical period)는 절대적 제한을, 민감기(sensitive period)는 최적이지만 유연한 시기를 의미한다",
      "key_point": "로렌츠의 각인 연구와 레너버그의 언어 습득 결정적 시기 가설이 대표적 사례이다",
      "common_mistake": "결정적 시기와 민감기(sensitive period)를 혼동 — 민감기는 더 유연하여 시기를 놓쳐도 부분적 발달이 가능하다"
    }
  },
  {
    "id": "DEVELOP_SECATT_021",
    "terminology": "안전애착 (Secure Attachment)",
    "terminology_ko": "안전애착",
    "terminology_en": "Secure Attachment",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "에인스워스의 낯선 상황 실험에서 분류된 애착 유형으로, 양육자를 안전기지로 활용하여 적극적으로 탐색하며, 분리 시 적절한 불안을 보이고 재회 시 쉽게 안정을 되찾는 유형이다.",
    "definition_en": "An attachment pattern classified through Ainsworth's Strange Situation, in which the child uses the caregiver as a secure base for exploration, shows appropriate distress upon separation, and is easily comforted upon reunion.",
    "significance": "안전애착은 가장 적응적인 애착 유형으로, 이후 높은 자존감, 긍정적 또래관계, 효과적 정서 조절과 연관된다.",
    "key_researchers": [
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "낯선 상황 실험을 통해 안전애착(B유형)을 포함한 애착 유형 체계를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "불안정애착",
        "name_en": "Insecure Attachment",
        "id": "DEVELOP_INSATT_022"
      },
      {
        "name_ko": "안전기지",
        "name_en": "Secure Base",
        "id": "DEVELOP_SECBASE_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안전애착 = 엄마가 '안전한 기지' → 떨어지면 울지만 다시 만나면 금방 안정",
      "differential": "안전애착은 분리-재회 시 적절한 반응을 보이고, 불안정애착은 과도하거나 부족한 반응을 보인다",
      "key_point": "안전애착 아동의 양육자는 일관되고 민감한 반응성(sensitive responsiveness)을 보인다",
      "common_mistake": "안전애착 아동은 분리 시 전혀 울지 않는다는 오해 — 적절한 분리 불안을 보이는 것이 정상이다"
    }
  },
  {
    "id": "DEVELOP_INSATT_022",
    "terminology": "불안정애착 (Insecure Attachment)",
    "terminology_ko": "불안정애착",
    "terminology_en": "Insecure Attachment",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "에인스워스의 낯선 상황 실험에서 안전애착이 형성되지 않은 유형으로, 회피형, 저항/양가형, 혼란형(후에 추가)으로 구분되며, 양육자의 비일관적이거나 부적절한 반응과 관련된다.",
    "definition_en": "Attachment patterns classified in Ainsworth's Strange Situation where secure attachment is not formed, including avoidant, resistant/ambivalent, and disorganized types (added later), associated with inconsistent or inappropriate caregiver responsiveness.",
    "significance": "불안정애착은 이후 정서 조절 어려움, 대인관계 문제, 정신건강 취약성과 연관되며, 조기 개입의 필요성을 알리는 중요한 위험 요인이다.",
    "key_researchers": [
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "회피형(A유형)과 저항/양가형(C유형)을 분류하였다"
      },
      {
        "name_ko": "메리 메인",
        "name_en": "Mary Main",
        "contribution": "혼란형(D유형) 애착을 추가로 분류하고 성인 애착 면접(AAI)을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "애착",
        "name_en": "Attachment",
        "id": "DEVELOP_ATTACH_003"
      },
      {
        "name_ko": "안전애착",
        "name_en": "Secure Attachment",
        "id": "DEVELOP_SECATT_021"
      }
    ],
    "sub_types": [
      {
        "name_ko": "회피형 애착",
        "name_en": "Avoidant attachment (Type A)",
        "definition": "분리 시 무관심하고 재회 시 양육자를 회피하는 유형"
      },
      {
        "name_ko": "저항/양가형 애착",
        "name_en": "Resistant/Ambivalent attachment (Type C)",
        "definition": "분리 시 극도의 불안을 보이고 재회 시 접근과 저항을 동시에 나타내는 유형"
      },
      {
        "name_ko": "혼란형 애착",
        "name_en": "Disorganized attachment (Type D)",
        "definition": "일관된 대처 전략이 없이 혼란스럽고 모순적인 행동을 보이는 유형, 학대·방임과 관련"
      }
    ],
    "quiz_hints": {
      "mnemonic": "불안정 = 회피(무관심), 저항(매달림+밀침), 혼란(갈팡질팡) — A, C, D 유형",
      "differential": "회피형은 양육자에게 무관심, 저항형은 과도한 매달림, 혼란형은 비일관적 행동이 특징이다",
      "key_point": "각 유형의 양육 특성: 회피형 — 거부적 양육, 저항형 — 비일관적 양육, 혼란형 — 학대/공포 유발",
      "common_mistake": "불안정애착을 병리적 상태로 단정 — 불안정애착은 위험 요인이지 그 자체가 정신장애는 아니다"
    }
  },
  {
    "id": "DEVELOP_ERIKSON_023",
    "terminology": "에릭슨의 심리사회적 발달단계 (Erikson's Psychosocial Stages)",
    "terminology_ko": "에릭슨의 심리사회적 발달단계",
    "terminology_en": "Erikson's Psychosocial Stages",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "에릭 에릭슨이 제안한 전 생애에 걸친 8단계의 심리사회적 발달 이론으로, 각 단계마다 고유한 위기(crisis)가 있으며 이를 성공적으로 해결하면 긍정적 자아 특질이 형성된다.",
    "definition_en": "Erik Erikson's theory of eight psychosocial stages spanning the entire lifespan, each presenting a unique crisis whose successful resolution leads to the development of a positive ego quality.",
    "significance": "에릭슨의 이론은 프로이트의 정신성적 발달이론을 전 생애로 확장하고, 사회적 맥락의 중요성을 강조한 최초의 전생애 발달 이론이다.",
    "key_researchers": [
      {
        "name_ko": "에릭 에릭슨",
        "name_en": "Erik Erikson",
        "contribution": "8단계 심리사회적 발달이론을 제안하고 정체성, 생성감 등의 핵심 개념을 도입하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정체성",
        "name_en": "Identity",
        "id": "DEVELOP_IDENT_018"
      },
      {
        "name_ko": "청소년기 정체성 위기",
        "name_en": "Adolescent Identity Crisis",
        "id": "DEVELOP_IDCRISIS_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "1단계: 신뢰 대 불신 (영아기)",
        "name_en": "Trust vs. Mistrust (Infancy)",
        "definition": "양육자의 일관된 돌봄을 통해 세상에 대한 기본적 신뢰감을 형성하는 단계"
      },
      {
        "name_ko": "2단계: 자율성 대 수치심 (유아기)",
        "name_en": "Autonomy vs. Shame & Doubt (Early Childhood)",
        "definition": "자기 통제와 독립심을 발달시키는 단계"
      },
      {
        "name_ko": "3단계: 주도성 대 죄책감 (학령전기)",
        "name_en": "Initiative vs. Guilt (Preschool Age)",
        "definition": "목적 지향적 행동을 주도적으로 시작하는 능력을 발달시키는 단계"
      },
      {
        "name_ko": "4단계: 근면성 대 열등감 (학령기)",
        "name_en": "Industry vs. Inferiority (School Age)",
        "definition": "학교와 사회에서 유능감을 개발하는 단계"
      },
      {
        "name_ko": "5단계: 정체성 대 역할 혼란 (청소년기)",
        "name_en": "Identity vs. Role Confusion (Adolescence)",
        "definition": "자아 정체성을 확립하는 핵심적 단계"
      },
      {
        "name_ko": "6단계: 친밀성 대 고립 (성인 초기)",
        "name_en": "Intimacy vs. Isolation (Young Adulthood)",
        "definition": "깊은 대인관계와 친밀한 유대를 형성하는 단계"
      },
      {
        "name_ko": "7단계: 생성감 대 침체 (성인 중기)",
        "name_en": "Generativity vs. Stagnation (Middle Adulthood)",
        "definition": "다음 세대를 양육하고 사회에 기여하는 단계"
      },
      {
        "name_ko": "8단계: 자아 통합 대 절망 (노년기)",
        "name_en": "Ego Integrity vs. Despair (Late Adulthood)",
        "definition": "삶을 돌아보며 의미와 만족감을 찾는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "신자주근 정친생통 — 신뢰, 자율, 주도, 근면, 정체성, 친밀, 생성, 통합",
      "differential": "프로이트는 성적 에너지(리비도) 중심의 아동기 5단계, 에릭슨은 사회적 위기 중심의 전생애 8단계",
      "key_point": "각 단계의 위기는 긍정적/부정적 극 사이의 갈등이며, 건강한 발달은 양극의 균형된 해결이다",
      "common_mistake": "위기(crisis)를 부정적 사건으로 오해 — 에릭슨의 '위기'는 전환점(turning point)이라는 의미이다"
    }
  },
  {
    "id": "DEVELOP_PRECONV_024",
    "terminology": "전인습적 도덕 (Preconventional Morality)",
    "terminology_ko": "전인습적 도덕",
    "terminology_en": "Preconventional Morality",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "콜버그 도덕발달의 첫 번째 수준으로, 도덕 판단이 처벌 회피와 보상 추구 등 자기 이익에 기반하며, 주로 아동기에 나타난다.",
    "definition_en": "The first level of Kohlberg's moral development, in which moral judgments are based on self-interest such as avoiding punishment and seeking rewards, typically seen in childhood.",
    "significance": "전인습적 도덕은 도덕 추론의 가장 기초적 단계로, 외적 결과에 의존하는 도덕 판단의 특성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "로렌스 콜버그",
        "name_en": "Lawrence Kohlberg",
        "contribution": "전인습 수준의 두 하위 단계(처벌 지향, 도구적 목적 지향)를 구분하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도덕발달",
        "name_en": "Moral Development",
        "id": "DEVELOP_MORAL_019"
      },
      {
        "name_ko": "인습적 도덕",
        "name_en": "Conventional Morality",
        "id": "DEVELOP_CONV_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "1단계: 처벌과 복종 지향",
        "name_en": "Stage 1: Punishment and Obedience Orientation",
        "definition": "처벌을 피하기 위해 규칙을 따르며, 권위에 복종하는 것이 옳다고 판단하는 단계"
      },
      {
        "name_ko": "2단계: 도구적 목적과 교환 지향",
        "name_en": "Stage 2: Instrumental Purpose and Exchange",
        "definition": "자신의 이익을 충족하는 것이 올바르며, '네가 나에게 해주면 나도 해줄게'식의 상호 교환 논리"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전인습 = '벌 받을까 봐' (1단계) + '나한테 뭐가 이득이지?' (2단계)",
      "differential": "전인습은 자기 이익 중심, 인습은 사회적 기대·법률 중심, 후인습은 보편적 원리 중심이다",
      "key_point": "콜버그의 하인츠 딜레마에서 '감옥에 갈까 봐 훔치면 안 된다'는 전인습적 추론이다",
      "common_mistake": "전인습적 도덕이 '비도덕적'이라는 오해 — 도덕 추론의 초기 단계이지 도덕성의 부재가 아니다"
    }
  },
  {
    "id": "DEVELOP_CONV_025",
    "terminology": "인습적 도덕 (Conventional Morality)",
    "terminology_ko": "인습적 도덕",
    "terminology_en": "Conventional Morality",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "콜버그 도덕발달의 두 번째 수준으로, 도덕 판단이 사회적 기대, 타인의 승인, 법과 질서의 유지에 기반하며, 청소년기와 성인기에 가장 흔하다.",
    "definition_en": "The second level of Kohlberg's moral development, in which moral judgments are based on social expectations, others' approval, and maintenance of law and order, most common in adolescence and adulthood.",
    "significance": "인습적 도덕은 대다수 성인의 도덕 추론 수준이며, 사회적 규범과 법률의 내면화를 반영한다.",
    "key_researchers": [
      {
        "name_ko": "로렌스 콜버그",
        "name_en": "Lawrence Kohlberg",
        "contribution": "인습 수준의 두 하위 단계(대인관계 기대, 사회 체계와 양심)를 구분하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도덕발달",
        "name_en": "Moral Development",
        "id": "DEVELOP_MORAL_019"
      },
      {
        "name_ko": "전인습적 도덕",
        "name_en": "Preconventional Morality",
        "id": "DEVELOP_PRECONV_024"
      },
      {
        "name_ko": "후인습적 도덕",
        "name_en": "Postconventional Morality",
        "id": "DEVELOP_POSTCONV_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "3단계: 대인관계 기대와 동조 지향",
        "name_en": "Stage 3: Interpersonal Expectations and Conformity",
        "definition": "'착한 아이'가 되기 위해 타인의 기대에 부응하고 승인을 얻으려는 단계"
      },
      {
        "name_ko": "4단계: 사회 체계와 양심 지향",
        "name_en": "Stage 4: Social System and Conscience",
        "definition": "법과 사회질서를 유지하는 것이 옳다고 판단하며, 의무와 권위를 존중하는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인습 = '좋은 사람이 되려고' (3단계) + '법을 지켜야 하니까' (4단계)",
      "differential": "인습적 도덕은 사회적 기준을 그대로 수용하고, 후인습적 도덕은 사회 규범 너머의 보편 원리를 추구한다",
      "key_point": "대부분의 성인은 인습적 수준에 머물며, 후인습적 수준에 도달하는 사람은 소수이다",
      "common_mistake": "'인습적'이라는 명칭 때문에 부정적으로 이해 — 사회 유지에 필요한 건전한 도덕 추론 수준이다"
    }
  },
  {
    "id": "DEVELOP_POSTCONV_026",
    "terminology": "후인습적 도덕 (Postconventional Morality)",
    "terminology_ko": "후인습적 도덕",
    "terminology_en": "Postconventional Morality",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "콜버그 도덕발달의 세 번째이자 최상위 수준으로, 도덕 판단이 사회적 계약, 개인의 권리, 보편적 윤리 원칙에 기반하며, 법보다 상위의 도덕 원리를 인식한다.",
    "definition_en": "The third and highest level of Kohlberg's moral development, in which moral judgments are based on social contracts, individual rights, and universal ethical principles, recognizing moral principles that transcend law.",
    "significance": "후인습적 도덕은 시민 불복종, 인권 운동 등 사회 변혁의 도덕적 기반을 설명하며, 가장 성숙한 도덕 추론을 대표한다.",
    "key_researchers": [
      {
        "name_ko": "로렌스 콜버그",
        "name_en": "Lawrence Kohlberg",
        "contribution": "후인습 수준의 두 하위 단계(사회계약, 보편적 윤리원칙)를 이론화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도덕발달",
        "name_en": "Moral Development",
        "id": "DEVELOP_MORAL_019"
      },
      {
        "name_ko": "인습적 도덕",
        "name_en": "Conventional Morality",
        "id": "DEVELOP_CONV_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "5단계: 사회계약과 개인 권리 지향",
        "name_en": "Stage 5: Social Contract and Individual Rights",
        "definition": "법은 사회적 합의에 의한 것이며, 개인의 권리가 침해될 때 법을 변경할 수 있다고 보는 단계"
      },
      {
        "name_ko": "6단계: 보편적 윤리 원칙 지향",
        "name_en": "Stage 6: Universal Ethical Principles",
        "definition": "정의, 평등, 인간 존엄 등 보편적 도덕 원칙에 따라 판단하며, 필요시 법에 불복종할 수 있다고 보는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "후인습 = '합의는 바뀔 수 있어' (5단계) + '정의가 법보다 우선' (6단계)",
      "differential": "인습적은 사회 규칙 준수, 후인습적은 규칙 너머의 보편적 원리에 따른 판단이다",
      "key_point": "마틴 루터 킹 Jr.의 시민 불복종은 후인습적 도덕 추론(6단계)의 대표적 사례이다",
      "common_mistake": "6단계에 도달해야 '도덕적'이라는 오해 — 콜버그 자신도 6단계의 실증적 존재에 대해 회의적이었다"
    }
  },
  {
    "id": "DEVELOP_PRENDEV_027",
    "terminology": "태아기 발달 (Prenatal Development)",
    "terminology_ko": "태아기 발달",
    "terminology_en": "Prenatal Development",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "수정에서 출생까지의 약 38주간의 발달 과정으로, 발아기(수정~2주), 배아기(2~8주), 태아기(8주~출생)의 세 단계로 구분된다.",
    "definition_en": "The approximately 38-week developmental process from conception to birth, divided into three periods: germinal (conception to 2 weeks), embryonic (2-8 weeks), and fetal (8 weeks to birth).",
    "significance": "태내 환경은 이후 발달의 생물학적 토대를 형성하며, 기형유발물질 등 태내 위험요인이 발달에 미치는 영향에 대한 이해는 예방적 개입에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "K. L. 무어",
        "name_en": "Keith L. Moore",
        "contribution": "태내 발달의 단계별 형태학적 변화를 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "태내기 위험요인",
        "name_en": "Teratogen",
        "id": "DEVELOP_TERATO_028"
      },
      {
        "name_ko": "결정적 시기",
        "name_en": "Critical Period",
        "id": "DEVELOP_CRITPRD_020"
      }
    ],
    "sub_types": [
      {
        "name_ko": "발아기",
        "name_en": "Germinal period",
        "definition": "수정~2주, 수정란의 세포 분열과 자궁벽 착상이 이루어지는 시기"
      },
      {
        "name_ko": "배아기",
        "name_en": "Embryonic period",
        "definition": "2~8주, 주요 기관과 신체 구조가 형성되는 시기로 기형유발물질에 가장 취약하다"
      },
      {
        "name_ko": "태아기",
        "name_en": "Fetal period",
        "definition": "8주~출생, 기관의 성숙과 성장이 이루어지며 생존 가능성이 점차 높아지는 시기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "태내 3단계: 발(발아)배(배아)태(태아) — 수정 → 착상 → 기관형성 → 성장",
      "differential": "배아기는 기관 형성기(기형유발물질에 가장 취약), 태아기는 성장·성숙기이다",
      "key_point": "배아기(2~8주)가 기형유발물질에 가장 취약한 시기이다",
      "common_mistake": "태아기와 태내기를 혼용 — '태내기(prenatal period)'는 전체 기간, '태아기(fetal period)'는 8주 이후만을 지칭한다"
    }
  },
  {
    "id": "DEVELOP_TERATO_028",
    "terminology": "태내기 위험요인 / 기형유발물질 (Teratogen)",
    "terminology_ko": "태내기 위험요인",
    "terminology_en": "Teratogen",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "태내 발달 중 구조적·기능적 이상을 유발할 수 있는 환경적 요인으로, 약물, 알코올, 감염, 방사선, 환경오염물질 등이 포함되며, 노출 시기와 양에 따라 영향이 달라진다.",
    "definition_en": "An environmental agent that can cause structural or functional abnormalities during prenatal development, including drugs, alcohol, infections, radiation, and environmental pollutants, with effects varying by timing and dosage of exposure.",
    "significance": "기형유발물질에 대한 이해는 태내 위험 예방과 건강한 임신 관리의 과학적 근거를 제공하며, 태아알코올스펙트럼장애(FASD) 등의 예방에 직결된다.",
    "key_researchers": [
      {
        "name_ko": "렌즈 & 맥브라이드",
        "name_en": "Lenz & McBride",
        "contribution": "1960년대 탈리도마이드 사건을 통해 약물의 기형유발 효과를 최초로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "태아기 발달",
        "name_en": "Prenatal Development",
        "id": "DEVELOP_PRENDEV_027"
      },
      {
        "name_ko": "결정적 시기",
        "name_en": "Critical Period",
        "id": "DEVELOP_CRITPRD_020"
      }
    ],
    "sub_types": [
      {
        "name_ko": "태아알코올스펙트럼장애 (FASD)",
        "name_en": "Fetal Alcohol Spectrum Disorders",
        "definition": "임신 중 알코올 노출로 인한 안면 기형, 인지 장애, 행동 문제를 포함하는 증후군"
      },
      {
        "name_ko": "약물성 기형유발",
        "name_en": "Drug-induced teratogenesis",
        "definition": "탈리도마이드, 특정 항경련제 등 약물에 의한 선천적 기형 유발"
      },
      {
        "name_ko": "감염성 기형유발",
        "name_en": "Infectious teratogenesis",
        "definition": "풍진, 거대세포바이러스, 지카바이러스 등 태내 감염에 의한 발달 이상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "테라토젠 = '테라(기형)'를 유발하는 '젠(물질/요인)'",
      "differential": "기형유발물질은 환경적 위험요인이고, 유전적 이상은 내적 요인에 의한 발달 문제이다",
      "key_point": "배아기(2~8주)가 기형유발물질에 가장 취약하며, 같은 물질도 노출 시기에 따라 영향이 다르다",
      "common_mistake": "소량의 알코올은 안전하다는 오해 — 안전한 음주량의 역치는 확립되지 않았으므로 임신 중 금주가 권장된다"
    }
  },
  {
    "id": "DEVELOP_IDCRISIS_029",
    "terminology": "청소년기 정체성 위기 (Adolescent Identity Crisis)",
    "terminology_ko": "청소년기 정체성 위기",
    "terminology_en": "Adolescent Identity Crisis",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "청소년기에 '나는 누구인가'라는 질문과 씨름하며 다양한 역할, 가치, 신념을 탐색하고 시험해보는 심리적 과정으로, 에릭슨의 5단계(정체성 대 역할 혼란)에 해당한다.",
    "definition_en": "The psychological process during adolescence of grappling with the question 'Who am I?', exploring and experimenting with various roles, values, and beliefs, corresponding to Erikson's fifth stage (Identity vs. Role Confusion).",
    "significance": "정체성 위기는 건강한 자아 정체성 형성의 필수적 과정이며, 이 시기의 적절한 탐색과 해결이 성인기 적응의 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "에릭 에릭슨",
        "name_en": "Erik Erikson",
        "contribution": "청소년기 정체성 위기를 정상적 발달 과정으로 개념화하였다"
      },
      {
        "name_ko": "제임스 마르시아",
        "name_en": "James Marcia",
        "contribution": "탐색과 전념의 두 차원으로 4가지 정체성 지위(성취, 유예, 유실, 혼미)를 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정체성",
        "name_en": "Identity",
        "id": "DEVELOP_IDENT_018"
      },
      {
        "name_ko": "에릭슨의 심리사회적 발달단계",
        "name_en": "Erikson's Psychosocial Stages",
        "id": "DEVELOP_ERIKSON_023"
      },
      {
        "name_ko": "형식적 조작기",
        "name_en": "Formal Operational Stage",
        "id": "DEVELOP_FORMOP_012"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정체성 성취",
        "name_en": "Identity Achievement",
        "definition": "충분한 탐색 후 자신의 가치와 목표에 전념한 상태 (마르시아)"
      },
      {
        "name_ko": "정체성 유예",
        "name_en": "Identity Moratorium",
        "definition": "적극적으로 탐색 중이나 아직 전념에 이르지 못한 상태"
      },
      {
        "name_ko": "정체성 유실",
        "name_en": "Identity Foreclosure",
        "definition": "탐색 없이 부모나 권위자의 가치를 그대로 수용하여 전념한 상태"
      },
      {
        "name_ko": "정체성 혼미",
        "name_en": "Identity Diffusion",
        "definition": "탐색도 전념도 하지 않은 상태로, 방향감 없이 표류하는 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "마르시아의 4지위: 탐색(O/X) x 전념(O/X) = 성취(OO), 유예(OX), 유실(XO), 혼미(XX)",
      "differential": "정체성 유예(탐색 중)와 정체성 혼미(탐색도 안 함)를 혼동하지 말 것",
      "key_point": "정체성 '위기'는 병리가 아니라 건강한 발달의 필수적 전환점이다",
      "common_mistake": "정체성 유실을 건강한 상태로 오해 — 탐색 없는 전념은 이후 정체성 재위기(identity crisis)의 가능성이 높다"
    }
  },
  {
    "id": "DEVELOP_AGING_030",
    "terminology": "노화와 인지 (Aging and Cognition)",
    "terminology_ko": "노화와 인지",
    "terminology_en": "Aging and Cognition",
    "category": "DEVELOP",
    "category_name": "발달심리 (Developmental Psychology)",
    "definition": "노화에 따른 인지 기능의 변화로, 유동성 지능(처리 속도, 작업기억)은 감퇴하는 반면 결정성 지능(어휘, 일반지식)은 비교적 유지되거나 향상되는 패턴을 보인다.",
    "definition_en": "Cognitive changes associated with aging, characterized by a pattern in which fluid intelligence (processing speed, working memory) declines while crystallized intelligence (vocabulary, general knowledge) is relatively maintained or even improves.",
    "significance": "노화와 인지 연구는 성공적 노화의 조건을 밝히고, 치매 등 병리적 노화와 정상 노화를 구분하는 기준을 제공하며, 전생애 발달의 관점을 완성한다.",
    "key_researchers": [
      {
        "name_ko": "레이먼드 캐텔",
        "name_en": "Raymond Cattell",
        "contribution": "유동성 지능과 결정성 지능의 구분을 제안하였다"
      },
      {
        "name_ko": "존 혼",
        "name_en": "John Horn",
        "contribution": "캐텔의 이론을 발전시켜 노화에 따른 유동성·결정성 지능의 차별적 변화를 실증하였다"
      },
      {
        "name_ko": "폴 발테스",
        "name_en": "Paul Baltes",
        "contribution": "전생애 발달 관점과 보상을 수반한 선택적 최적화(SOC) 모델을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에릭슨의 심리사회적 발달단계",
        "name_en": "Erikson's Psychosocial Stages",
        "id": "DEVELOP_ERIKSON_023"
      },
      {
        "name_ko": "결정적 시기",
        "name_en": "Critical Period",
        "id": "DEVELOP_CRITPRD_020"
      }
    ],
    "sub_types": [
      {
        "name_ko": "유동성 지능",
        "name_en": "Fluid intelligence",
        "definition": "새로운 문제를 해결하는 능력으로, 처리 속도와 작업기억에 의존하며 20대 이후 점진적으로 감퇴한다"
      },
      {
        "name_ko": "결정성 지능",
        "name_en": "Crystallized intelligence",
        "definition": "축적된 지식과 경험에 기반한 능력으로, 노년기까지 비교적 유지되거나 증가한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "노화 = 유동성(물처럼 흐르는 능력) ↓ + 결정성(결정처럼 굳건한 지식) ↑ 또는 유지",
      "differential": "정상 노화는 유동성 지능의 점진적 감퇴이고, 치매는 결정성 지능을 포함한 전반적·급격한 인지 저하이다",
      "key_point": "발테스의 SOC 모델: 노인은 선택(Selection), 최적화(Optimization), 보상(Compensation)을 통해 기능 저하에 적응한다",
      "common_mistake": "노화하면 모든 인지 능력이 동일하게 저하된다는 오해 — 유동성과 결정성 지능은 서로 다른 노화 궤적을 보인다"
    }
  }
];

TERMS_DATA.PERSON = [
  {
    "id": "PERSON_PERSONALITY_001",
    "terminology": "성격 (Personality)",
    "terminology_ko": "성격",
    "terminology_en": "Personality",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "개인이 환경에 적응하는 과정에서 나타나는 비교적 일관되고 독특한 사고, 감정, 행동 양식의 총체로, 시간과 상황에 걸쳐 안정적인 개인차를 반영한다.",
    "definition_en": "The relatively stable and distinctive patterns of thinking, feeling, and behaving that characterize an individual's adaptation to the environment, reflecting consistent individual differences across time and situations.",
    "significance": "심리학의 핵심 연구 주제로, 인간 행동의 예측과 이해의 기초가 되며 임상, 산업, 교육 등 모든 응용 분야의 토대를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "성격의 특질 이론을 체계화하고 성격심리학을 독립 학문으로 확립"
      },
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석 이론을 통해 성격의 무의식적 역동을 최초로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "특질",
        "name_en": "Trait",
        "id": "PERSON_TRAIT_012"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SELFCON_011"
      },
      {
        "name_ko": "기질",
        "name_en": "Temperament",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성격 = '성'질 + '격'식 -> 일관된 성질과 격식(패턴)",
      "differential": "기질(temperament)은 생물학적/유전적 기반의 반응 양식이고, 성격(personality)은 기질 위에 환경적 경험이 더해진 총체적 개념이다.",
      "key_point": "성격은 '일관성'과 '독특성'이라는 두 가지 핵심 속성을 가진다.",
      "common_mistake": "성격을 고정불변한 것으로 오해하는 경우가 있으나, 비교적 안정적이지만 변화 가능하다."
    }
  },
  {
    "id": "PERSON_ID_002",
    "terminology": "원본능/이드 (Id)",
    "terminology_ko": "원본능",
    "terminology_en": "Id",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 성격 구조 모형에서 가장 원초적인 부분으로, 쾌락 원칙에 따라 작동하며 본능적 욕구와 충동의 즉각적 충족을 추구하는 무의식적 정신 에너지의 저장소이다.",
    "definition_en": "In Freud's structural model of personality, the most primitive component that operates on the pleasure principle, seeking immediate gratification of instinctual drives and impulses as an unconscious reservoir of psychic energy.",
    "significance": "성격의 에너지 원천으로서 리비도(libido)를 포함하며, 자아와 초자아의 발달 기반이 되는 가장 근본적인 심리 구조이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "원본능(이드) 개념을 제안하고 성격의 구조 모형(이드-자아-초자아)을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아(에고)",
        "name_en": "Ego",
        "id": "PERSON_EGO_003"
      },
      {
        "name_ko": "초자아(슈퍼에고)",
        "name_en": "Superego",
        "id": "PERSON_SUPEREGO_004"
      },
      {
        "name_ko": "쾌락 원칙",
        "name_en": "Pleasure Principle",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Id = '나(I)의 욕망(d=desire)' -> 본능적 욕구의 즉각 충족",
      "differential": "이드는 '쾌락 원칙', 자아는 '현실 원칙', 초자아는 '도덕 원칙'으로 각각 구분된다.",
      "key_point": "이드는 출생 시부터 존재하는 유일한 성격 구조이며, 1차 과정 사고(primary process thinking)를 사용한다.",
      "common_mistake": "이드를 단순히 '나쁜 것'으로 오해하지만, 이드는 생존에 필수적인 에너지의 원천이다."
    }
  },
  {
    "id": "PERSON_EGO_003",
    "terminology": "자아/에고 (Ego)",
    "terminology_ko": "자아",
    "terminology_en": "Ego",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 성격 구조 모형에서 현실 원칙에 따라 작동하며, 이드의 욕구와 초자아의 도덕적 요구, 그리고 외부 현실 간의 중재 역할을 수행하는 성격의 실행 기관이다.",
    "definition_en": "In Freud's structural model, the executive component of personality that operates on the reality principle, mediating among the demands of the id, the superego, and external reality.",
    "significance": "현실 적응과 합리적 의사결정의 중심으로, 방어기제를 통해 불안을 관리하며 건강한 성격 기능의 핵심이 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "자아 개념을 성격 구조의 중재자로 정립"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "자아의 방어기제를 체계적으로 분류하고 자아심리학 발전에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원본능(이드)",
        "name_en": "Id",
        "id": "PERSON_ID_002"
      },
      {
        "name_ko": "초자아(슈퍼에고)",
        "name_en": "Superego",
        "id": "PERSON_SUPEREGO_004"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Ego = 현실의 '에이전트' -> 현실 원칙에 따라 중재",
      "differential": "자아(에고)는 '현실 원칙'에 따르며, 이드의 충동을 현실적으로 충족시킬 방법을 찾는 반면, 이드는 즉각적 충족만을 추구한다.",
      "key_point": "자아는 2차 과정 사고(secondary process thinking)를 사용하며, 의식-전의식-무의식에 걸쳐 작동한다.",
      "common_mistake": "자아를 '자기 자신'이라는 일상적 의미와 혼동하는 경우가 많다. 프로이트의 자아는 성격의 '실행 기관'이다."
    }
  },
  {
    "id": "PERSON_SUPEREGO_004",
    "terminology": "초자아/슈퍼에고 (Superego)",
    "terminology_ko": "초자아",
    "terminology_en": "Superego",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 성격 구조 모형에서 도덕 원칙에 따라 작동하며, 부모와 사회로부터 내면화된 도덕적 기준과 이상을 대표하는 성격 구조로, 양심과 자아이상으로 구성된다.",
    "definition_en": "In Freud's structural model, the component of personality that operates on the moral principle, representing internalized moral standards and ideals from parents and society, consisting of the conscience and the ego ideal.",
    "significance": "도덕적 판단과 죄책감의 근원이 되며, 자아에 대한 도덕적 감시 역할을 통해 사회화된 행동을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "초자아 개념을 양심과 자아이상의 두 하위 체계로 구분하여 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원본능(이드)",
        "name_en": "Id",
        "id": "PERSON_ID_002"
      },
      {
        "name_ko": "자아(에고)",
        "name_en": "Ego",
        "id": "PERSON_EGO_003"
      },
      {
        "name_ko": "남근기",
        "name_en": "Phallic Stage",
        "id": "PERSON_PHALLIC_021"
      }
    ],
    "sub_types": [
      {
        "name": "양심 (Conscience)",
        "name_ko": "양심",
        "name_en": "Conscience",
        "definition": "처벌과 관련된 도덕적 금지 사항을 내면화한 부분으로, 잘못된 행동에 대해 죄책감을 유발한다."
      },
      {
        "name": "자아이상 (Ego Ideal)",
        "name_ko": "자아이상",
        "name_en": "Ego Ideal",
        "definition": "이상적인 행동 기준을 내면화한 부분으로, 이상에 부합할 때 자부심을 유발한다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "Super-ego = '슈퍼' 도덕 경찰 -> 도덕 원칙의 감시자",
      "differential": "초자아는 '완벽주의적 도덕 기준'이고, 자아는 '현실적 타협자'이다.",
      "key_point": "초자아는 남근기(3-6세)에 오이디푸스 콤플렉스의 해결 과정에서 형성되며, 양심과 자아이상의 두 하위 체계로 구성된다.",
      "common_mistake": "초자아가 항상 올바른 판단을 한다고 오해하지만, 과도하게 엄격한 초자아는 신경증적 죄책감과 불안을 유발할 수 있다."
    }
  },
  {
    "id": "PERSON_DEFENSE_005",
    "terminology": "방어기제 (Defense Mechanism)",
    "terminology_ko": "방어기제",
    "terminology_en": "Defense Mechanism",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "자아가 이드의 충동, 초자아의 요구, 외부 현실 간의 갈등에서 발생하는 불안으로부터 자신을 보호하기 위해 무의식적으로 사용하는 심리적 전략이다.",
    "definition_en": "Unconscious psychological strategies employed by the ego to protect itself from anxiety arising from conflicts among the id's impulses, the superego's demands, and external reality.",
    "significance": "정상적인 적응 과정에서도 사용되지만, 과도하거나 경직된 방어기제 사용은 심리적 부적응과 정신병리의 원인이 될 수 있어 임상심리학에서 핵심적으로 다루어진다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "방어기제 개념을 최초로 제안"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "저서 '자아와 방어기제(The Ego and the Mechanisms of Defence)'에서 방어기제를 체계적으로 분류"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아(에고)",
        "name_en": "Ego",
        "id": "PERSON_EGO_003"
      },
      {
        "name_ko": "억압",
        "name_en": "Repression",
        "id": "PERSON_REPRESSION_006"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "PERSON_PROJECTION_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "방어기제 = 마음의 '방패' -> 불안으로부터 자아를 보호하는 무의식적 전략",
      "differential": "대처(coping)는 의식적이고 의도적인 스트레스 관리 전략인 반면, 방어기제는 무의식적으로 작동한다.",
      "key_point": "방어기제는 모두 '무의식적'으로 작동하며, 현실을 왜곡하는 공통점이 있다.",
      "common_mistake": "방어기제를 모두 병적인 것으로 오해하지만, 승화 같은 성숙한 방어기제는 건강한 적응에 기여한다."
    }
  },
  {
    "id": "PERSON_REPRESSION_006",
    "terminology": "억압 (Repression)",
    "terminology_ko": "억압",
    "terminology_en": "Repression",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "위협적이거나 고통스러운 생각, 기억, 감정을 의식에서 무의식으로 밀어내어 자각하지 못하게 하는 가장 기본적인 방어기제이다.",
    "definition_en": "The most fundamental defense mechanism that unconsciously pushes threatening or painful thoughts, memories, and feelings from consciousness into the unconscious to prevent awareness.",
    "significance": "프로이트가 '방어의 초석(cornerstone of defense)'이라 칭한 가장 기본적인 방어기제로, 다른 모든 방어기제의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "억압을 모든 방어기제의 기초이자 핵심으로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "부정",
        "name_en": "Denial",
        "id": "PERSON_DENIAL_017"
      },
      {
        "name_ko": "억제",
        "name_en": "Suppression",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "억압 = 마음속 '잠금 장치' -> 고통스러운 내용을 무의식에 가둠",
      "differential": "억압(repression)은 무의식적 과정이고, 억제(suppression)는 의식적으로 생각을 밀어내는 것이다.",
      "key_point": "억압은 모든 방어기제의 기초(cornerstone)이며, 억압된 내용은 꿈, 실언, 증상 등으로 간접 표현된다.",
      "common_mistake": "억압(repression)과 억제(suppression)를 혼동하는 경우가 많다. 억압은 무의식적, 억제는 의식적이다."
    }
  },
  {
    "id": "PERSON_PROJECTION_007",
    "terminology": "투사 (Projection)",
    "terminology_ko": "투사",
    "terminology_en": "Projection",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "자신이 받아들이기 어려운 충동, 감정, 생각을 다른 사람에게 귀인시키는 방어기제로, 자신의 내면적 갈등을 외부 대상의 문제로 전환한다.",
    "definition_en": "A defense mechanism in which unacceptable impulses, feelings, or thoughts are attributed to others, transforming internal conflicts into problems perceived as belonging to external objects.",
    "significance": "투사적 검사(로르샤흐, TAT)의 이론적 기초가 되며, 편견과 희생양 현상의 심리적 기제를 설명하는 데에도 활용된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "투사 개념을 방어기제로 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "투사적 검사",
        "name_en": "Projective Test",
        "id": "PERSON_PROJTEST_018"
      },
      {
        "name_ko": "전위",
        "name_en": "Displacement",
        "id": "PERSON_DISPLACE_018A"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "투사 = '프로젝터' -> 자신의 내면을 타인이라는 스크린에 비추는 것",
      "differential": "투사는 자신의 감정을 '타인에게' 귀인시키는 것이고, 전위는 감정의 '대상을' 바꾸는 것이다.",
      "key_point": "투사는 '나는 그를 미워해'를 '그가 나를 미워해'로 바꾸는 것이다.",
      "common_mistake": "투사를 의도적인 비난과 혼동하지만, 투사는 무의식적 과정이므로 본인은 자각하지 못한다."
    }
  },
  {
    "id": "PERSON_PSYCHOSEXUAL_008",
    "terminology": "심리성적 발달단계 (Psychosexual Stages of Development)",
    "terminology_ko": "심리성적 발달단계",
    "terminology_en": "Psychosexual Stages of Development",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트가 제안한 성격 발달 이론으로, 리비도(성적 에너지)가 집중되는 신체 부위에 따라 구강기, 항문기, 남근기, 잠복기, 생식기의 5단계로 구분되며, 각 단계의 갈등 해결이 성격 형성에 결정적 영향을 미친다.",
    "definition_en": "Freud's theory of personality development proposing five stages (oral, anal, phallic, latency, genital) defined by the body area where libido is focused, with conflict resolution at each stage critically shaping personality formation.",
    "significance": "아동기 경험이 성인 성격에 미치는 영향을 최초로 체계적으로 이론화한 발달 모형으로, 이후 에릭슨의 심리사회적 발달이론 등에 영향을 주었다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "심리성적 발달단계 이론을 최초로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구강기",
        "name_en": "Oral Stage",
        "id": "PERSON_ORAL_019"
      },
      {
        "name_ko": "항문기",
        "name_en": "Anal Stage",
        "id": "PERSON_ANAL_020"
      },
      {
        "name_ko": "남근기",
        "name_en": "Phallic Stage",
        "id": "PERSON_PHALLIC_021"
      }
    ],
    "sub_types": [
      {
        "name": "구강기 (Oral Stage, 0-1세)",
        "name_ko": "구강기",
        "name_en": "Oral Stage",
        "definition": "출생~약 1세. 리비도가 입에 집중되며, 빨기와 먹기 활동이 주요 만족의 원천이다."
      },
      {
        "name": "항문기 (Anal Stage, 1-3세)",
        "name_ko": "항문기",
        "name_en": "Anal Stage",
        "definition": "약 1~3세. 리비도가 항문에 집중되며, 배변 훈련이 주요 갈등의 원천이다."
      },
      {
        "name": "남근기 (Phallic Stage, 3-6세)",
        "name_ko": "남근기",
        "name_en": "Phallic Stage",
        "definition": "약 3~6세. 리비도가 성기에 집중되며, 오이디푸스/엘렉트라 콤플렉스가 발생한다."
      },
      {
        "name": "잠복기 (Latency Stage, 6-12세)",
        "name_ko": "잠복기",
        "name_en": "Latency Stage",
        "definition": "약 6~12세. 성적 충동이 잠복하며, 또래 관계와 학업 등 사회적 기술 발달에 집중한다."
      },
      {
        "name": "생식기 (Genital Stage, 12세~)",
        "name_ko": "생식기",
        "name_en": "Genital Stage",
        "definition": "사춘기 이후. 성적 관심이 성숙한 형태로 재등장하며, 이성 관계에서 만족을 추구한다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "구-항-남-잠-생 = '구황남잠생' -> 순서를 외우는 핵심",
      "differential": "프로이트의 심리성적 발달은 '리비도의 신체 부위'에 초점을 맞추고, 에릭슨의 심리사회적 발달은 '사회적 갈등'에 초점을 맞춘다.",
      "key_point": "각 단계에서 고착(fixation)이 발생하면 해당 단계의 특성이 성인 성격에 남는다.",
      "common_mistake": "잠복기를 '성적 발달이 없는 시기'로 오해하지만, 성적 충동이 '잠복'하는 것이지 사라지는 것이 아니다."
    }
  },
  {
    "id": "PERSON_SELFACTUAL_009",
    "terminology": "자아실현 경향성 (Self-Actualizing Tendency)",
    "terminology_ko": "자아실현 경향성",
    "terminology_en": "Self-Actualizing Tendency",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "칼 로저스가 제안한 개념으로, 모든 인간에게 내재된 자신의 잠재력을 최대한 실현하고 성장하려는 선천적이고 근본적인 동기적 경향성이다.",
    "definition_en": "A concept proposed by Carl Rogers referring to the innate and fundamental motivational tendency inherent in all humans to realize their full potential and to grow toward fulfillment.",
    "significance": "인본주의 심리학의 핵심 개념으로, 인간 본성에 대한 긍정적 관점을 제공하며 내담자 중심 치료의 이론적 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "자아실현 경향성을 인간의 유일한 근본적 동기로 제안"
      },
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "자아실현(self-actualization)을 욕구 위계의 최상위에 배치"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SELFCON_011"
      },
      {
        "name_ko": "완전히 기능하는 사람",
        "name_en": "Fully Functioning Person",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자아실현 경향성 = 씨앗이 나무로 자라려는 '성장 본능'",
      "differential": "로저스의 '자아실현 경향성'은 모든 사람의 근본 동기이고, 매슬로의 '자아실현'은 욕구 위계의 최상위 단계로서 기본 욕구 충족 후에만 추구된다.",
      "key_point": "로저스는 자아실현 경향성을 인간의 '유일한' 근본적 동기로 보았다.",
      "common_mistake": "매슬로의 자아실현(욕구 위계 최상위)과 로저스의 자아실현 경향성(선천적 성장 동기)을 혼동하는 경우가 많다."
    }
  },
  {
    "id": "PERSON_UPR_010",
    "terminology": "무조건적 긍정적 존중 (Unconditional Positive Regard)",
    "terminology_ko": "무조건적 긍정적 존중",
    "terminology_en": "Unconditional Positive Regard",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "칼 로저스가 제안한 개념으로, 어떤 조건이나 평가 없이 한 사람을 있는 그대로 수용하고 존중하는 태도로, 건강한 성격 발달과 내담자 중심 치료의 핵심 조건이다.",
    "definition_en": "A concept by Carl Rogers referring to the attitude of accepting and valuing a person without any conditions or evaluations, a core condition for healthy personality development and client-centered therapy.",
    "significance": "조건부 존중이 가치의 조건(conditions of worth)을 형성하여 자기개념과 경험 간의 불일치를 초래하는 반면, 무조건적 긍정적 존중은 자아실현을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "치료적 변화의 핵심 조건으로 무조건적 긍정적 존중을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아실현 경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "PERSON_SELFACTUAL_009"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SELFCON_011"
      },
      {
        "name_ko": "가치의 조건",
        "name_en": "Conditions of Worth",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "UPR = '무한 긍정 리스펙트' -> 조건 없이 존중",
      "differential": "무조건적 긍정적 존중은 '사람 자체'를 존중하는 것이지, 모든 '행동'을 허용하는 것이 아니다.",
      "key_point": "로저스의 치료 3대 핵심 조건: 무조건적 긍정적 존중, 공감적 이해(empathic understanding), 진솔성(genuineness/congruence)이다.",
      "common_mistake": "무조건적 긍정적 존중을 '무조건적 허용'으로 오해하지만, 행동에 대한 제한은 가능하면서도 사람 자체는 존중하는 것이다."
    }
  },
  {
    "id": "PERSON_SELFCON_011",
    "terminology": "자기개념 (Self-Concept)",
    "terminology_ko": "자기개념",
    "terminology_en": "Self-Concept",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "개인이 자기 자신에 대해 가지고 있는 지각, 신념, 감정의 조직화된 총체로, 로저스 이론에서는 자기개념과 실제 경험 간의 일치 정도가 심리적 적응의 핵심 지표이다.",
    "definition_en": "The organized totality of perceptions, beliefs, and feelings an individual holds about oneself; in Rogers' theory, the degree of congruence between self-concept and actual experience is a key indicator of psychological adjustment.",
    "significance": "자기개념과 경험 간의 불일치(incongruence)가 심리적 부적응의 원인이 되며, 치료의 목표는 이러한 불일치를 줄여 일치(congruence)를 증진하는 것이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "자기개념의 일치/불일치를 심리적 적응의 핵심으로 제안"
      },
      {
        "name_ko": "해이젤 마커스",
        "name_en": "Hazel Markus",
        "contribution": "자기도식(self-schema) 개념을 통해 자기개념의 인지적 구조를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아실현 경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "PERSON_SELFACTUAL_009"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "자기존중감",
        "name_en": "Self-Esteem",
        "id": "PERSON_SELFESTEEM_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기개념 = '나는 어떤 사람인가'에 대한 나의 생각 총체",
      "differential": "자기개념(self-concept)은 '나에 대한 인식의 총체'이고, 자기존중감(self-esteem)은 그에 대한 '평가적 측면'이다.",
      "key_point": "로저스에 따르면, 자기개념과 실제 경험 사이의 '불일치(incongruence)'가 심리적 부적응의 근본 원인이다.",
      "common_mistake": "자기개념을 고정적인 것으로 오해하지만, 경험과 상호작용을 통해 지속적으로 변화한다."
    }
  },
  {
    "id": "PERSON_TRAIT_012",
    "terminology": "특질 (Trait)",
    "terminology_ko": "특질",
    "terminology_en": "Trait",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "다양한 상황에 걸쳐 비교적 일관되게 나타나는 사고, 감정, 행동의 지속적인 성향으로, 특질 이론에서는 이를 성격을 설명하고 측정하는 기본 단위로 본다.",
    "definition_en": "A relatively consistent and enduring disposition of thinking, feeling, and behaving across various situations, regarded as the fundamental unit for describing and measuring personality in trait theories.",
    "significance": "성격의 개인차를 기술하고 측정하는 가장 널리 사용되는 접근으로, 성격 검사 도구 개발과 행동 예측의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "특질을 공통 특질과 개인 특질로 구분하고 사전에서 약 18,000개의 특질 용어를 추출"
      },
      {
        "name_ko": "레이먼드 캐텔",
        "name_en": "Raymond Cattell",
        "contribution": "요인분석을 통해 16개 근원 특질(16PF)을 도출"
      },
      {
        "name_ko": "한스 아이젱크",
        "name_en": "Hans Eysenck",
        "contribution": "외향성-내향성, 신경증 차원 등 소수의 상위 특질 차원을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "5요인 모형",
        "name_en": "Big Five Model",
        "id": "PERSON_BIGFIVE_013"
      },
      {
        "name_ko": "성격",
        "name_en": "Personality",
        "id": "PERSON_PERSONALITY_001"
      },
      {
        "name_ko": "외향성-내향성",
        "name_en": "Extraversion-Introversion",
        "id": "PERSON_EITYPE_022"
      }
    ],
    "sub_types": [
      {
        "name": "주요 특질 (Cardinal Trait)",
        "name_ko": "주요 특질",
        "name_en": "Cardinal Trait",
        "definition": "올포트가 제안한 개념으로, 개인의 거의 모든 행동을 지배하는 매우 지배적인 특질이다. 모든 사람에게 있는 것은 아니다."
      },
      {
        "name": "중심 특질 (Central Trait)",
        "name_ko": "중심 특질",
        "name_en": "Central Trait",
        "definition": "성격의 핵심을 이루는 5-10개 정도의 주요 특질로, 타인을 묘사할 때 사용하는 형용사에 해당한다."
      },
      {
        "name": "이차 특질 (Secondary Trait)",
        "name_ko": "이차 특질",
        "name_en": "Secondary Trait",
        "definition": "특정 상황에서만 나타나는 덜 일관적인 특질로, 특정 음식 선호나 특정 상황에서의 태도 등이 해당한다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "특질 = 성격의 '빌딩 블록' -> 성격을 구성하는 기본 단위",
      "differential": "특질(trait)은 지속적이고 안정적인 성향이고, 상태(state)는 일시적인 조건이다.",
      "key_point": "올포트는 주요 특질-중심 특질-이차 특질로, 캐텔은 표면 특질-근원 특질로 특질을 위계적으로 분류했다.",
      "common_mistake": "특질이 모든 상황에서 동일한 행동을 예측한다고 오해하지만, 상황적 요인과의 상호작용이 중요하다(인간-상황 논쟁)."
    }
  },
  {
    "id": "PERSON_BIGFIVE_013",
    "terminology": "5요인 모형/빅 파이브 (Big Five Model)",
    "terminology_ko": "5요인 모형",
    "terminology_en": "Big Five Model",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "성격을 개방성(Openness), 성실성(Conscientiousness), 외향성(Extraversion), 우호성(Agreeableness), 신경증(Neuroticism)의 5가지 광범위한 차원으로 기술하는 특질 모형으로, 다양한 문화권에서 반복 검증되었다.",
    "definition_en": "A trait model describing personality along five broad dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN), which have been replicated across diverse cultures.",
    "significance": "현대 성격심리학에서 가장 널리 인정받는 성격 구조 모형으로, 성격 연구의 공통 언어를 제공하며 직업 수행, 건강, 대인관계 등 다양한 영역에서의 예측 타당도가 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "폴 코스타",
        "name_en": "Paul Costa",
        "contribution": "로버트 맥크레이와 함께 NEO-PI-R을 개발하여 5요인 모형을 체계적으로 측정"
      },
      {
        "name_ko": "로버트 맥크레이",
        "name_en": "Robert McCrae",
        "contribution": "폴 코스타와 함께 5요인 모형의 교차 문화적 보편성을 입증"
      },
      {
        "name_ko": "루이스 골드버그",
        "name_en": "Lewis Goldberg",
        "contribution": "'Big Five'라는 명칭을 대중화하고 어휘적 접근을 통해 5요인 구조를 확인"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "특질",
        "name_en": "Trait",
        "id": "PERSON_TRAIT_012"
      },
      {
        "name_ko": "외향성-내향성",
        "name_en": "Extraversion-Introversion",
        "id": "PERSON_EITYPE_022"
      },
      {
        "name_ko": "MMPI",
        "name_en": "MMPI",
        "id": "PERSON_MMPI_030"
      }
    ],
    "sub_types": [
      {
        "name": "개방성 (Openness to Experience)",
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "definition": "지적 호기심, 상상력, 예술적 감수성, 새로운 경험에 대한 선호를 반영하는 차원이다."
      },
      {
        "name": "성실성 (Conscientiousness)",
        "name_ko": "성실성",
        "name_en": "Conscientiousness",
        "definition": "조직화, 근면, 자기통제, 목표 지향적 행동을 반영하는 차원이다."
      },
      {
        "name": "외향성 (Extraversion)",
        "name_ko": "외향성",
        "name_en": "Extraversion",
        "definition": "사교성, 활동성, 자기주장, 긍정 정서를 반영하는 차원이다."
      },
      {
        "name": "우호성 (Agreeableness)",
        "name_ko": "우호성",
        "name_en": "Agreeableness",
        "definition": "타인에 대한 신뢰, 이타성, 협조성, 공감을 반영하는 차원이다."
      },
      {
        "name": "신경증 (Neuroticism)",
        "name_ko": "신경증(정서적 불안정성)",
        "name_en": "Neuroticism",
        "definition": "불안, 우울, 정서적 불안정, 스트레스에 대한 취약성을 반영하는 차원이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "OCEAN = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
      "differential": "5요인 모형은 '정상 성격의 기술적 모형'이고, MMPI는 '정신병리의 진단적 도구'이다.",
      "key_point": "OCEAN 약어로 5요인을 기억하며, 다양한 문화권에서 반복 검증된 보편적 구조이다.",
      "common_mistake": "5요인이 성격의 '모든 것'을 설명한다고 오해하지만, 이는 가장 넓은 수준의 성격 구조이며 더 세부적인 하위 측면(facets)이 존재한다."
    }
  },
  {
    "id": "PERSON_INTLOC_014",
    "terminology": "내적 통제소재 (Internal Locus of Control)",
    "terminology_ko": "내적 통제소재",
    "terminology_en": "Internal Locus of Control",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "자신의 행동, 노력, 능력이 사건의 결과를 결정한다고 믿는 일반화된 기대로, 자신이 삶의 결과를 통제할 수 있다는 신념을 의미한다.",
    "definition_en": "A generalized expectancy that one's own behavior, efforts, and abilities determine outcomes, reflecting the belief that one has control over life events.",
    "significance": "내적 통제소재를 가진 사람은 학업 성취, 직업 만족, 건강 행동, 스트레스 대처에서 더 긍정적인 결과를 보이는 경향이 있다.",
    "key_researchers": [
      {
        "name_ko": "줄리안 로터",
        "name_en": "Julian Rotter",
        "contribution": "사회학습이론에 기반하여 통제소재(locus of control) 개념과 I-E 척도를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외적 통제소재",
        "name_en": "External Locus of Control",
        "id": "PERSON_EXTLOC_015"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": ""
      },
      {
        "name_ko": "상호결정론",
        "name_en": "Reciprocal Determinism",
        "id": "PERSON_RECIPDET_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내적 통제소재 = '내가 한 만큼 결과가 나온다' -> 통제의 원천이 '나' 안에 있음",
      "differential": "내적 통제소재는 '자신의 노력/능력'이 결과를 결정한다고 믿는 것이고, 외적 통제소재는 '운/타인/환경'이 결정한다고 믿는 것이다.",
      "key_point": "로터의 통제소재는 '사회학습이론'에서 나온 개념으로, 학습을 통해 형성된 '일반화된 기대'이다.",
      "common_mistake": "내적 통제소재가 항상 좋은 것으로 오해하지만, 통제 불가능한 상황에서 지나친 내적 통제소재는 자기비난으로 이어질 수 있다."
    }
  },
  {
    "id": "PERSON_EXTLOC_015",
    "terminology": "외적 통제소재 (External Locus of Control)",
    "terminology_ko": "외적 통제소재",
    "terminology_en": "External Locus of Control",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "운, 타인, 운명 등 외부 요인이 사건의 결과를 결정한다고 믿는 일반화된 기대로, 자신이 삶의 결과를 통제할 수 없다는 신념을 의미한다.",
    "definition_en": "A generalized expectancy that external factors such as luck, other people, or fate determine outcomes, reflecting the belief that one cannot control life events.",
    "significance": "외적 통제소재의 과도한 경향은 학습된 무기력, 우울, 낮은 동기와 관련되며, 문화적 요인도 통제소재에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "줄리안 로터",
        "name_en": "Julian Rotter",
        "contribution": "내적-외적 통제소재의 연속선 개념을 제안하고 측정 도구를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적 통제소재",
        "name_en": "Internal Locus of Control",
        "id": "PERSON_INTLOC_014"
      },
      {
        "name_ko": "학습된 무기력",
        "name_en": "Learned Helplessness",
        "id": ""
      },
      {
        "name_ko": "상호결정론",
        "name_en": "Reciprocal Determinism",
        "id": "PERSON_RECIPDET_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외적 통제소재 = '팔자 탓' -> 통제의 원천이 '밖'에 있음",
      "differential": "외적 통제소재는 통제의 원천을 외부로 보는 '신념'이고, 학습된 무기력은 반복된 실패 경험 후 통제 시도 자체를 포기하는 '상태'이다.",
      "key_point": "통제소재는 '이분법'이 아니라 내적-외적의 '연속선(continuum)'이며, 영역에 따라 다를 수 있다.",
      "common_mistake": "외적 통제소재를 가진 사람이 모두 부적응적인 것은 아니다. 실제로 통제 불가능한 상황에서는 외적 귀인이 적응적일 수 있다."
    }
  },
  {
    "id": "PERSON_RECIPDET_016",
    "terminology": "상호결정론 (Reciprocal Determinism)",
    "terminology_ko": "상호결정론",
    "terminology_en": "Reciprocal Determinism",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "반두라가 제안한 개념으로, 개인(인지/정서), 행동, 환경이 서로 양방향으로 영향을 미치며 상호작용하여 성격과 행동을 결정한다는 원리이다.",
    "definition_en": "A concept proposed by Bandura stating that personal factors (cognitive/affective), behavior, and the environment all mutually influence one another in a bidirectional manner to determine personality and behavior.",
    "significance": "환경 결정론과 개인 결정론의 일방적 관점을 넘어, 인간이 환경의 수동적 산물이 아니라 환경과 능동적으로 상호작용하는 존재임을 강조하는 사회인지적 관점이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "상호결정론을 사회인지이론의 핵심 원리로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적 통제소재",
        "name_en": "Internal Locus of Control",
        "id": "PERSON_INTLOC_014"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": ""
      },
      {
        "name_ko": "자기존중감",
        "name_en": "Self-Esteem",
        "id": "PERSON_SELFESTEEM_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상호결정론 = '삼각형 화살표' -> 개인-행동-환경이 서로 영향을 주고받는 삼각 관계",
      "differential": "상호결정론은 '세 요인의 양방향 상호작용'이고, 행동주의의 환경결정론은 '환경->행동의 일방향 결정'이다.",
      "key_point": "개인(P)-행동(B)-환경(E)의 세 요소가 '삼자 상호작용(triadic reciprocality)'하는 것이 핵심이다.",
      "common_mistake": "세 요인이 동시에 같은 강도로 영향을 미친다고 오해하지만, 상황에 따라 특정 요인의 영향력이 더 클 수 있다."
    }
  },
  {
    "id": "PERSON_DENIAL_017",
    "terminology": "부정 (Denial)",
    "terminology_ko": "부정",
    "terminology_en": "Denial",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "고통스럽거나 위협적인 외부 현실 자체를 인정하지 않고 마치 존재하지 않는 것처럼 거부하는 방어기제이다.",
    "definition_en": "A defense mechanism in which a person refuses to acknowledge painful or threatening external reality, behaving as though it does not exist.",
    "significance": "심각한 질병 진단이나 상실에 대한 초기 반응으로 흔히 나타나며, 퀴블러-로스의 애도 5단계 중 첫 번째 단계에 해당한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "부정 개념을 방어기제로 기술"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "부정을 방어기제의 체계적 분류에 포함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "억압",
        "name_en": "Repression",
        "id": "PERSON_REPRESSION_006"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "합리화",
        "name_en": "Rationalization",
        "id": "PERSON_RATIONAL_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부정 = '그런 일은 없었어!' -> 현실 자체를 부인",
      "differential": "부정(denial)은 외부 '현실' 자체를 거부하는 것이고, 억압(repression)은 내부의 '생각/감정'을 무의식으로 밀어내는 것이다.",
      "key_point": "부정은 '외부 현실'을, 억압은 '내적 경험'을 다룬다는 점에서 구분된다.",
      "common_mistake": "부정과 억압을 같은 것으로 혼동하는 경우가 많다. 부정의 대상은 외부 현실, 억압의 대상은 내부의 생각/감정이다."
    }
  },
  {
    "id": "PERSON_PROJTEST_018",
    "terminology": "투사적 검사 (Projective Test)",
    "terminology_ko": "투사적 검사",
    "terminology_en": "Projective Test",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "모호한 자극을 제시하고 그에 대한 반응을 분석하여 무의식적 동기, 갈등, 성격 특성을 파악하는 심리검사 유형으로, 정신분석적 투사 개념에 기초한다.",
    "definition_en": "A type of psychological assessment based on the psychoanalytic concept of projection, in which ambiguous stimuli are presented and responses are analyzed to reveal unconscious motives, conflicts, and personality characteristics.",
    "significance": "객관적 검사로 측정하기 어려운 무의식적 측면을 탐색할 수 있으나, 신뢰도와 타당도에 대한 논란이 존재한다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 로르샤흐",
        "name_en": "Hermann Rorschach",
        "contribution": "로르샤흐 잉크반점 검사(Rorschach Inkblot Test)를 개발"
      },
      {
        "name_ko": "헨리 머레이",
        "name_en": "Henry Murray",
        "contribution": "주제통각검사(TAT: Thematic Apperception Test)를 크리스티나 모건과 함께 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "PERSON_PROJECTION_007"
      },
      {
        "name_ko": "MMPI",
        "name_en": "MMPI",
        "id": "PERSON_MMPI_030"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      }
    ],
    "sub_types": [
      {
        "name": "로르샤흐 잉크반점 검사 (Rorschach Inkblot Test)",
        "name_ko": "로르샤흐 잉크반점 검사",
        "name_en": "Rorschach Inkblot Test",
        "definition": "10장의 대칭적 잉크반점 카드에 대한 반응을 분석하여 성격과 사고 과정을 평가한다."
      },
      {
        "name": "주제통각검사 (TAT: Thematic Apperception Test)",
        "name_ko": "주제통각검사",
        "name_en": "Thematic Apperception Test (TAT)",
        "definition": "모호한 장면이 그려진 그림을 보고 이야기를 구성하게 하여 내면의 욕구와 갈등을 파악한다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "투사적 검사 = '잉크 얼룩에서 나비를 본다' -> 모호한 자극에 자신을 투사",
      "differential": "투사적 검사는 '모호한 자극'에 대한 자유 반응이고, 객관적 검사(예: MMPI)는 '표준화된 문항'에 대한 선택 반응이다.",
      "key_point": "대표적 투사적 검사: 로르샤흐(잉크반점), TAT(그림 이야기). 자극이 모호할수록 투사가 많이 일어난다고 가정한다.",
      "common_mistake": "투사적 검사가 MMPI와 같은 수준의 신뢰도/타당도를 가진다고 오해하지만, 채점과 해석의 주관성이 높아 심리측정적 한계가 있다."
    }
  },
  {
    "id": "PERSON_DISPLACE_018A",
    "terminology": "전위 (Displacement)",
    "terminology_ko": "전위",
    "terminology_en": "Displacement",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "원래 대상에게 향했던 감정이나 충동을 덜 위협적이거나 더 안전한 대체 대상에게로 옮기는 방어기제이다.",
    "definition_en": "A defense mechanism in which emotions or impulses originally directed toward one object are redirected toward a less threatening or safer substitute target.",
    "significance": "일상생활에서 흔히 관찰되는 방어기제로, 승화의 기초가 되며 공격성의 전치 현상을 설명하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "전위를 꿈의 작업(dream-work)과 방어기제의 핵심 개념으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "승화",
        "name_en": "Sublimation",
        "id": "PERSON_SUBLIM_025"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "PERSON_PROJECTION_007"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "전위 = '화풀이' -> 상사에게 받은 화를 가족에게 풀기",
      "differential": "전위는 감정의 '대상'을 바꾸는 것이고, 투사는 자신의 감정을 '타인의 것'으로 귀인시키는 것이다.",
      "key_point": "전위는 감정의 대상만 바뀌고 감정 자체는 그대로 유지된다. 승화는 전위의 특수한 형태로, 사회적으로 수용 가능한 방향으로의 전위이다.",
      "common_mistake": "전위와 승화를 같은 것으로 오해하지만, 승화는 전위 중에서도 '사회적으로 가치 있는' 방향으로의 전환만을 의미한다."
    }
  },
  {
    "id": "PERSON_ORAL_019",
    "terminology": "구강기 (Oral Stage)",
    "terminology_ko": "구강기",
    "terminology_en": "Oral Stage",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 심리성적 발달단계 중 첫 번째 단계(출생~약 1세)로, 리비도가 입에 집중되며 빨기, 먹기, 물기 등의 구강 활동이 주된 쾌감의 원천이 된다.",
    "definition_en": "The first stage in Freud's psychosexual development (birth to ~1 year), where libido is centered on the mouth and oral activities such as sucking, eating, and biting are the primary sources of pleasure.",
    "significance": "이 시기의 고착은 과식, 흡연, 수다, 손톱 물어뜯기 등 구강적 성격 특성과 관련되며, 기본적 신뢰감 형성과 연결된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "구강기를 심리성적 발달의 첫 번째 단계로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달단계",
        "name_en": "Psychosexual Stages",
        "id": "PERSON_PSYCHOSEXUAL_008"
      },
      {
        "name_ko": "항문기",
        "name_en": "Anal Stage",
        "id": "PERSON_ANAL_020"
      },
      {
        "name_ko": "퇴행",
        "name_en": "Regression",
        "id": "PERSON_REGRESS_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구강기 = '입'이 세상의 중심 -> 0-1세, 빨기와 먹기로 세상을 탐색",
      "differential": "구강기는 '수동적 수용(빨기)'이 중심이고, 항문기는 '능동적 통제(배변 훈련)'가 중심이다.",
      "key_point": "구강기 고착 시 구강적 성격이 나타난다: 과식, 흡연, 수다, 의존적 성격 등.",
      "common_mistake": "구강기를 단순히 '먹는 것을 좋아하는 시기'로 오해하지만, 입을 통한 세상 탐색과 기본 신뢰감 형성이 핵심이다."
    }
  },
  {
    "id": "PERSON_ANAL_020",
    "terminology": "항문기 (Anal Stage)",
    "terminology_ko": "항문기",
    "terminology_en": "Anal Stage",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 심리성적 발달단계 중 두 번째 단계(약 1~3세)로, 리비도가 항문에 집중되며 배변 훈련이 주요 갈등의 원천이 되고 자율성 발달의 시기이다.",
    "definition_en": "The second stage in Freud's psychosexual development (~1-3 years), where libido is centered on the anus, toilet training is the primary source of conflict, and autonomy development occurs.",
    "significance": "항문기 고착은 '항문 보유적 성격(인색, 완벽주의, 고집)' 또는 '항문 배출적 성격(무질서, 낭비, 반항)'으로 나타날 수 있다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "항문기를 심리성적 발달의 두 번째 단계로 제안하고 항문적 성격 유형을 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달단계",
        "name_en": "Psychosexual Stages",
        "id": "PERSON_PSYCHOSEXUAL_008"
      },
      {
        "name_ko": "구강기",
        "name_en": "Oral Stage",
        "id": "PERSON_ORAL_019"
      },
      {
        "name_ko": "남근기",
        "name_en": "Phallic Stage",
        "id": "PERSON_PHALLIC_021"
      }
    ],
    "sub_types": [
      {
        "name": "항문 보유적 성격 (Anal-Retentive Personality)",
        "name_ko": "항문 보유적 성격",
        "name_en": "Anal-Retentive Personality",
        "definition": "배변 훈련에서 과도한 통제를 경험한 결과로, 인색함, 완벽주의, 강박적 질서정연함이 특징이다."
      },
      {
        "name": "항문 배출적 성격 (Anal-Expulsive Personality)",
        "name_ko": "항문 배출적 성격",
        "name_en": "Anal-Expulsive Personality",
        "definition": "배변 훈련이 너무 관대한 경우 나타나며, 무질서, 낭비, 반항적 행동이 특징이다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "항문기 = '배변 훈련의 전쟁터' -> 1-3세, 통제 vs 자율성의 갈등",
      "differential": "항문 보유적은 '지나친 통제 -> 완벽주의/인색', 항문 배출적은 '관대한 훈련 -> 무질서/낭비'이다.",
      "key_point": "항문기의 핵심 갈등은 배변 훈련을 통한 '사회적 통제 vs 자율성'이며, 두 가지 성격 유형(보유적/배출적)을 구분해야 한다.",
      "common_mistake": "항문 보유적 성격과 항문 배출적 성격을 혼동하는 경우가 많다."
    }
  },
  {
    "id": "PERSON_PHALLIC_021",
    "terminology": "남근기 (Phallic Stage)",
    "terminology_ko": "남근기",
    "terminology_en": "Phallic Stage",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "프로이트의 심리성적 발달단계 중 세 번째 단계(약 3~6세)로, 리비도가 성기에 집중되며 오이디푸스 콤플렉스가 발생하고 성 정체감과 초자아가 형성되는 시기이다.",
    "definition_en": "The third stage in Freud's psychosexual development (~3-6 years), where libido is centered on the genitals, the Oedipus complex emerges, and gender identity and the superego are formed.",
    "significance": "성 정체감, 초자아(도덕성), 동일시(identification)가 이 시기에 형성되며, 오이디푸스 콤플렉스의 해결이 핵심 발달 과제이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "남근기와 오이디푸스 콤플렉스 개념을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달단계",
        "name_en": "Psychosexual Stages",
        "id": "PERSON_PSYCHOSEXUAL_008"
      },
      {
        "name_ko": "초자아(슈퍼에고)",
        "name_en": "Superego",
        "id": "PERSON_SUPEREGO_004"
      },
      {
        "name_ko": "항문기",
        "name_en": "Anal Stage",
        "id": "PERSON_ANAL_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "남근기 = '오이디푸스의 시대' -> 3-6세, 이성 부모에 대한 욕구와 동성 부모와의 경쟁",
      "differential": "남근기는 '성 정체감과 도덕성'이 형성되는 시기이고, 생식기(genital stage)는 성적 관심이 '성숙한 이성 관계'로 향하는 시기이다.",
      "key_point": "남근기의 핵심은 오이디푸스 콤플렉스의 해결이며, 이 과정에서 동성 부모에 대한 '동일시'를 통해 초자아가 형성된다.",
      "common_mistake": "남근기를 단순히 '성기에 관심을 갖는 시기'로만 이해하지만, 핵심은 오이디푸스 콤플렉스와 그 해결을 통한 초자아 형성이다."
    }
  },
  {
    "id": "PERSON_EITYPE_022",
    "terminology": "외향성-내향성 (Extraversion-Introversion)",
    "terminology_ko": "외향성-내향성",
    "terminology_en": "Extraversion-Introversion",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "융이 제안한 성격 유형론의 핵심 차원으로, 심리적 에너지(리비도)가 외부 세계를 향하는가(외향성) 내면 세계를 향하는가(내향성)에 따라 구분되는 태도 유형이다.",
    "definition_en": "A core dimension of Jung's personality typology distinguishing between attitudes based on whether psychic energy (libido) is directed toward the external world (extraversion) or the inner world (introversion).",
    "significance": "현대 성격심리학의 가장 중요한 성격 차원 중 하나로 자리잡았으며, MBTI, 5요인 모형, 아이젱크 모형 등 다양한 성격 이론에 통합되었다.",
    "key_researchers": [
      {
        "name_ko": "카를 구스타프 융",
        "name_en": "Carl Gustav Jung",
        "contribution": "외향성-내향성 개념을 심리학적 유형론의 핵심으로 제안"
      },
      {
        "name_ko": "한스 아이젱크",
        "name_en": "Hans Eysenck",
        "contribution": "외향성-내향성의 생물학적 기초(피질 각성 수준)를 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "5요인 모형",
        "name_en": "Big Five Model",
        "id": "PERSON_BIGFIVE_013"
      },
      {
        "name_ko": "특질",
        "name_en": "Trait",
        "id": "PERSON_TRAIT_012"
      },
      {
        "name_ko": "성격",
        "name_en": "Personality",
        "id": "PERSON_PERSONALITY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외향 = 에너지가 '밖으로', 내향 = 에너지가 '안으로'",
      "differential": "융의 외향-내향은 '리비도의 방향성' 개념이고, 아이젱크의 외향-내향은 '피질 각성 수준'에 기반한 생물학적 개념이다.",
      "key_point": "외향성-내향성은 융이 최초로 개념화했으며, 이후 아이젱크가 생물학적 기초를 제시하고, Big Five에서도 핵심 요인으로 포함되었다.",
      "common_mistake": "내향적 = 사교적이지 않다고 오해하지만, 내향성은 에너지 충전 방식의 차이이지 사회적 능력의 결핍이 아니다."
    }
  },
  {
    "id": "PERSON_RATIONAL_023",
    "terminology": "합리화 (Rationalization)",
    "terminology_ko": "합리화",
    "terminology_en": "Rationalization",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "자신의 행동, 생각, 감정에 대해 진짜 이유 대신 그럴듯하고 사회적으로 수용 가능한 이유를 만들어내어 자존심을 보호하는 방어기제이다.",
    "definition_en": "A defense mechanism in which plausible and socially acceptable reasons are constructed for one's behavior, thoughts, or feelings in place of the true underlying reasons, thereby protecting self-esteem.",
    "significance": "일상생활에서 가장 흔하게 관찰되는 방어기제 중 하나로, 인지부조화 이론과도 관련이 깊다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "합리화를 자아 보호적 방어기제로 기술"
      },
      {
        "name_ko": "어니스트 존스",
        "name_en": "Ernest Jones",
        "contribution": "'합리화(rationalization)'라는 용어를 최초로 사용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "부정",
        "name_en": "Denial",
        "id": "PERSON_DENIAL_017"
      },
      {
        "name_ko": "지적화",
        "name_en": "Intellectualization",
        "id": ""
      }
    ],
    "sub_types": [
      {
        "name": "신포도 합리화 (Sour Grapes Rationalization)",
        "name_ko": "신포도 합리화",
        "name_en": "Sour Grapes Rationalization",
        "definition": "얻지 못한 것의 가치를 깎아내리는 합리화이다. 이솝 우화에서 유래: '어차피 저 포도는 시었을 거야.'"
      },
      {
        "name": "달콤한 레몬 합리화 (Sweet Lemon Rationalization)",
        "name_ko": "달콤한 레몬 합리화",
        "name_en": "Sweet Lemon Rationalization",
        "definition": "어쩔 수 없이 받아들인 것의 가치를 부풀리는 합리화이다: '이것이 사실 더 나은 거야.'"
      }
    ],
    "quiz_hints": {
      "mnemonic": "합리화 = 이솝 우화의 '여우와 포도' -> 진짜 이유 대신 그럴듯한 변명을 만듦",
      "differential": "합리화는 '그럴듯한 이유를 만들어내는 것'이고, 지적화(intellectualization)는 '감정을 배제하고 지적으로만 다루는 것'이다.",
      "key_point": "합리화에는 '신포도(못 얻은 것 평가절하)'와 '달콤한 레몬(얻은 것 과대평가)' 두 유형이 있다.",
      "common_mistake": "합리화를 의식적인 '거짓말'이나 '변명'과 혼동하지만, 합리화는 무의식적 과정으로 본인도 자신의 변명을 진심으로 믿는다."
    }
  },
  {
    "id": "PERSON_REACTFORM_024",
    "terminology": "반동형성 (Reaction Formation)",
    "terminology_ko": "반동형성",
    "terminology_en": "Reaction Formation",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "받아들이기 어려운 충동이나 욕구와 정반대되는 행동, 태도, 감정을 과장되게 표현함으로써 원래의 충동을 위장하는 방어기제이다.",
    "definition_en": "A defense mechanism in which unacceptable impulses or desires are disguised by exaggerated expression of the opposite behavior, attitude, or feeling.",
    "significance": "과도하게 강조되는 태도나 행동의 이면에 숨겨진 무의식적 동기를 이해하는 데 중요하며, 강박증의 심리역동적 이해에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "반동형성을 자아의 핵심 방어기제로 기술"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "반동형성을 자아의 방어기제 분류 체계에 포함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "억압",
        "name_en": "Repression",
        "id": "PERSON_REPRESSION_006"
      },
      {
        "name_ko": "승화",
        "name_en": "Sublimation",
        "id": "PERSON_SUBLIM_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반동형성 = '180도 반대로' -> 미움을 과도한 친절로 위장",
      "differential": "반동형성은 원래 감정의 '정반대'를 과장 표현하는 것이고, 승화는 충동을 '사회적으로 가치 있는 활동'으로 전환하는 것이다.",
      "key_point": "반동형성의 단서는 '과장됨'이다. 진짜 감정이면 자연스러운데, 반동형성은 지나치게 강하고 과도하다.",
      "common_mistake": "반동형성을 '위선'이나 의도적인 가장과 혼동하지만, 반동형성은 무의식적 과정이므로 본인은 자각하지 못한다."
    }
  },
  {
    "id": "PERSON_SUBLIM_025",
    "terminology": "승화 (Sublimation)",
    "terminology_ko": "승화",
    "terminology_en": "Sublimation",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "사회적으로 수용되지 않는 충동이나 욕구를 사회적으로 가치 있고 건설적인 활동으로 전환하는 가장 성숙한 방어기제이다.",
    "definition_en": "The most mature defense mechanism in which socially unacceptable impulses or desires are transformed into socially valued and constructive activities.",
    "significance": "프로이트가 가장 건강하고 성숙한 방어기제로 간주했으며, 예술, 과학, 스포츠 등 문명의 발전을 설명하는 개념으로도 활용된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "승화를 가장 성숙한 방어기제로 제안하고 문명 발전의 원동력으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전위",
        "name_en": "Displacement",
        "id": "PERSON_DISPLACE_018A"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "반동형성",
        "name_en": "Reaction Formation",
        "id": "PERSON_REACTFORM_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "승화 = 공격성을 권투 챔피언으로 '업그레이드' -> 충동을 가치 있는 활동으로 변환",
      "differential": "승화는 충동을 '사회적으로 가치 있는 활동'으로 전환하는 것이고, 전위는 충동의 '대상'만 바꾸는 것이다.",
      "key_point": "승화는 유일하게 '항상 적응적'인 방어기제이며, 전위의 특수한 형태이다.",
      "common_mistake": "모든 생산적 활동을 승화로 보는 것은 오류이다. 승화는 '수용 불가능한 충동'이 '전환'될 때만 해당한다."
    }
  },
  {
    "id": "PERSON_REGRESS_026",
    "terminology": "퇴행 (Regression)",
    "terminology_ko": "퇴행",
    "terminology_en": "Regression",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "스트레스나 불안 상황에서 심리성적 발달의 이전 단계로 되돌아가 그 단계에 특징적인 미성숙한 행동 양식을 보이는 방어기제이다.",
    "definition_en": "A defense mechanism in which an individual reverts to an earlier stage of psychosexual development under stress or anxiety, exhibiting immature behavior patterns characteristic of that stage.",
    "significance": "스트레스 상황에서 흔히 관찰되며, 입원 아동이 이미 습득한 배변 훈련을 상실하는 것이 대표적 예이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "퇴행을 심리성적 발달 이론과 연결하여 방어기제로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달단계",
        "name_en": "Psychosexual Stages",
        "id": "PERSON_PSYCHOSEXUAL_008"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanism",
        "id": "PERSON_DEFENSE_005"
      },
      {
        "name_ko": "고착",
        "name_en": "Fixation",
        "id": ""
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "퇴행 = '시간 거꾸로' -> 스트레스받으면 어린아이처럼 행동",
      "differential": "퇴행은 '이전 발달 단계'로 돌아가는 것이고, 고착(fixation)은 특정 단계에서 '발달이 멈추는' 것이다.",
      "key_point": "퇴행은 고착이 일어난 단계로 되돌아가는 경향이 있다.",
      "common_mistake": "퇴행을 '유치한 행동'과 혼동하지만, 퇴행은 이전 발달 단계의 '특정한' 행동 양식으로의 회귀를 의미한다."
    }
  },
  {
    "id": "PERSON_SELFFULPRO_027",
    "terminology": "자기실현예언/자기충족적 예언 (Self-Fulfilling Prophecy)",
    "terminology_ko": "자기실현예언",
    "terminology_en": "Self-Fulfilling Prophecy",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "처음에는 거짓이었던 기대나 예측이 그 기대에 맞는 행동을 유발함으로써 결국 현실이 되는 현상으로, 자기개념과 성격 형성에 중요한 영향을 미친다.",
    "definition_en": "A phenomenon in which an initially false expectation or prediction leads to behavior that causes the expectation to become true, significantly influencing self-concept and personality formation.",
    "significance": "교육 장면(교사의 기대 효과/피그말리온 효과), 대인관계, 자기개념 형성 등에서 기대가 현실을 형성하는 메커니즘을 설명하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 머튼",
        "name_en": "Robert K. Merton",
        "contribution": "'자기실현예언(self-fulfilling prophecy)'이라는 용어를 1948년 논문에서 공식화"
      },
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "피그말리온 효과(Pygmalion effect) 연구를 통해 교사 기대가 학생 수행에 미치는 영향을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SELFCON_011"
      },
      {
        "name_ko": "자기존중감",
        "name_en": "Self-Esteem",
        "id": "PERSON_SELFESTEEM_029"
      },
      {
        "name_ko": "내적 통제소재",
        "name_en": "Internal Locus of Control",
        "id": "PERSON_INTLOC_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기실현예언 = '피그말리온 효과' -> 기대가 현실을 만든다",
      "differential": "자기실현예언은 '타인 또는 자신의 기대'가 현실을 만드는 것이고, 피그말리온 효과는 그 중 '교사의 기대'가 학생의 수행에 미치는 영향을 특정한 것이다.",
      "key_point": "로젠탈과 제이콥슨의 '교실 속 피그말리온' 실험이 대표적이며, '기대 -> 행동 변화 -> 결과 변화'의 순환 과정이 핵심이다.",
      "common_mistake": "자기실현예언을 '긍정적 사고의 힘'과 혼동하지만, 부정적 기대도 자기실현예언이 될 수 있다(예: '나는 실패할 것이다' -> 노력 감소 -> 실패)."
    }
  },
  {
    "id": "PERSON_SELFEFF_028",
    "terminology": "자기효능감 (Self-Efficacy)",
    "terminology_ko": "자기효능감",
    "terminology_en": "Self-Efficacy",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "특정 과제를 성공적으로 수행할 수 있다는 자신의 능력에 대한 개인적 신념으로, 반두라의 사회인지이론의 핵심 개념이다.",
    "definition_en": "An individual's belief in their capacity to successfully perform a specific task, a core concept in Bandura's social cognitive theory.",
    "significance": "자기효능감은 과제 선택, 노력의 양, 지속성, 스트레스 반응 등 행동과 동기의 강력한 예측 변인으로, 교육, 건강, 직업 수행 등 다양한 영역에서 그 중요성이 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감 이론을 사회인지이론의 핵심으로 제안하고 4가지 효능감 원천을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호결정론",
        "name_en": "Reciprocal Determinism",
        "id": "PERSON_RECIPDET_016"
      },
      {
        "name_ko": "자기존중감",
        "name_en": "Self-Esteem",
        "id": "PERSON_SELFESTEEM_029"
      },
      {
        "name_ko": "내적 통제소재",
        "name_en": "Internal Locus of Control",
        "id": "PERSON_INTLOC_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감 = '나는 이것을 할 수 있다!' -> 특정 과제에 대한 '능력 신념'",
      "differential": "자기효능감은 '특정 과제'에 대한 능력 신념이고, 자기존중감은 자기 자신에 대한 '전반적 가치' 평가이다.",
      "key_point": "자기효능감의 4가지 원천: (1) 성공 경험(mastery experience), (2) 대리 경험(vicarious experience), (3) 언어적 설득(verbal persuasion), (4) 정서적/생리적 상태(emotional/physiological states). 이 중 성공 경험이 가장 강력하다.",
      "common_mistake": "자기효능감과 자기존중감을 같은 개념으로 혼동하지만, 자기효능감은 '과제 특수적'이고 자기존중감은 '전반적'이다."
    }
  },
  {
    "id": "PERSON_SELFESTEEM_029",
    "terminology": "자기존중감/자존감 (Self-Esteem)",
    "terminology_ko": "자기존중감",
    "terminology_en": "Self-Esteem",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "자기 자신의 가치에 대한 전반적이고 평가적인 태도로, 자신을 얼마나 가치 있고 유능하며 사랑받을 만한 존재로 여기는가에 대한 주관적 판단이다.",
    "definition_en": "An overall evaluative attitude toward oneself, reflecting the subjective judgment of how worthy, competent, and lovable one considers oneself to be.",
    "significance": "정신건강, 대인관계, 학업 및 직업 수행에 광범위한 영향을 미치며, 우울증과 불안장애의 위험 요인으로도 연구된다.",
    "key_researchers": [
      {
        "name_ko": "모리스 로젠버그",
        "name_en": "Morris Rosenberg",
        "contribution": "로젠버그 자존감 척도(Rosenberg Self-Esteem Scale)를 개발하여 자존감 측정의 표준을 확립"
      },
      {
        "name_ko": "나다니엘 브란든",
        "name_en": "Nathaniel Branden",
        "contribution": "자기존중감의 6가지 기둥(Six Pillars of Self-Esteem) 이론을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SELFCON_011"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "PERSON_SELFEFF_028"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기존중감 = '나는 가치 있는 사람이다'에 대한 나의 평가",
      "differential": "자기존중감은 자기 가치에 대한 '전반적 평가'이고, 자기효능감은 특정 과제에 대한 '능력 신념'이며, 자기개념은 자신에 대한 '인식의 총체'이다.",
      "key_point": "로젠버그 자존감 척도가 가장 널리 사용되는 측정 도구이며, 자존감은 안정적이면서도 경험에 의해 변화할 수 있다.",
      "common_mistake": "높은 자존감이 항상 긍정적이라고 오해하지만, 과도하거나 불안정한 높은 자존감은 자기애적 특성이나 공격성과 관련될 수 있다."
    }
  },
  {
    "id": "PERSON_MMPI_030",
    "terminology": "미네소타 다면적 인성검사 (MMPI: Minnesota Multiphasic Personality Inventory)",
    "terminology_ko": "미네소타 다면적 인성검사",
    "terminology_en": "Minnesota Multiphasic Personality Inventory (MMPI)",
    "category": "PERSON",
    "category_name": "성격심리 (Personality)",
    "definition": "567개 문항으로 구성된 자기보고식 객관적 성격검사로, 10개의 임상 척도와 타당도 척도를 통해 성격 특성과 정신병리를 평가하는 세계에서 가장 널리 사용되는 표준화된 성격검사 도구이다.",
    "definition_en": "A self-report objective personality assessment consisting of 567 items that evaluates personality characteristics and psychopathology through 10 clinical scales and validity scales, the most widely used standardized personality inventory in the world.",
    "significance": "임상, 법정, 직업 장면 등에서 가장 광범위하게 사용되며 연구되는 성격검사로, 경험적 준거 집단 비교(empirical criterion keying) 방식으로 개발되어 높은 타당도를 가진다.",
    "key_researchers": [
      {
        "name_ko": "스타크 해서웨이",
        "name_en": "Starke Hathaway",
        "contribution": "미네소타 대학에서 J.C. 맥킨리와 함께 MMPI를 최초로 개발(1943)"
      },
      {
        "name_ko": "J.C. 맥킨리",
        "name_en": "J.C. McKinley",
        "contribution": "해서웨이와 함께 경험적 준거 집단 비교 방식으로 MMPI를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투사적 검사",
        "name_en": "Projective Test",
        "id": "PERSON_PROJTEST_018"
      },
      {
        "name_ko": "5요인 모형",
        "name_en": "Big Five Model",
        "id": "PERSON_BIGFIVE_013"
      },
      {
        "name_ko": "성격",
        "name_en": "Personality",
        "id": "PERSON_PERSONALITY_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MMPI = '가장 많이 쓰이는(Most) 다면적(Multiphasic) 성격(Personality) 검사(Inventory)'",
      "differential": "MMPI는 '객관적/자기보고식' 검사이고, 로르샤흐/TAT는 '투사적' 검사이다. MMPI는 정신병리 진단에, Big Five(NEO-PI-R)는 정상 성격 기술에 초점을 맞춘다.",
      "key_point": "MMPI는 '경험적 준거 집단 비교(empirical criterion keying)' 방식으로 개발되었다는 점이 시험 핵심. 현재 MMPI-2, MMPI-2-RF, MMPI-3가 사용된다.",
      "common_mistake": "MMPI를 단순히 '성격 유형 분류 도구'로 오해하지만, 원래 정신병리 진단을 위해 개발되었으며, 타당도 척도를 통해 검사 태도까지 평가할 수 있다."
    }
  }
];

TERMS_DATA.SOCIAL = [
  {
    "id": "SOCIAL_ATTR_001",
    "terminology": "귀인 (Attribution)",
    "terminology_ko": "귀인",
    "terminology_en": "Attribution",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "타인이나 자신의 행동 원인을 추론하고 설명하는 인지적 과정으로, 내적 귀인(성격, 능력 등 개인 요인)과 외적 귀인(상황, 환경 요인)으로 구분된다.",
    "definition_en": "The cognitive process of inferring and explaining the causes of one's own or others' behavior, divided into internal attribution (personal factors such as personality and ability) and external attribution (situational or environmental factors).",
    "significance": "인간이 사회적 세계를 이해하고 예측하려는 근본적 동기를 반영하며, 대인관계 판단과 의사결정의 기초를 형성한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 하이더",
        "name_en": "Fritz Heider",
        "contribution": "귀인이론(Attribution Theory)의 창시자로, 소박한 심리학자(naive psychologist) 개념을 제안하여 사람들이 일상에서 행동의 원인을 추론하는 과정을 체계화했다."
      },
      {
        "name_ko": "해럴드 켈리",
        "name_en": "Harold Kelley",
        "contribution": "공변 모형(Covariation Model)을 제안하여 합의성, 특이성, 일관성 정보를 통한 귀인 과정을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본적 귀인 오류",
        "name_en": "Fundamental Attribution Error",
        "id": "SOCIAL_FAE_002"
      },
      {
        "name_ko": "자기봉사 편향",
        "name_en": "Self-Serving Bias",
        "id": "SOCIAL_SSB_003"
      }
    ],
    "sub_types": [
      {
        "name_ko": "내적 귀인",
        "name_en": "Internal Attribution",
        "description": "행동의 원인을 개인의 성격, 능력, 동기 등 내적 요인에서 찾는 것"
      },
      {
        "name_ko": "외적 귀인",
        "name_en": "External Attribution",
        "description": "행동의 원인을 상황, 환경, 사회적 압력 등 외적 요인에서 찾는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "귀(돌아갈 귀) + 인(원인 인) → 원인을 돌려 찾는다",
      "differential": "귀인은 원인 추론의 전체 과정을 뜻하고, 귀인 오류는 그 과정에서 발생하는 체계적 편향을 의미한다.",
      "key_point": "Kelley의 공변 모형에서 합의성(consensus), 특이성(distinctiveness), 일관성(consistency) 세 정보가 귀인 유형을 결정한다.",
      "common_mistake": "귀인은 항상 의식적으로 이루어진다고 오해하지만, 실제로는 많은 귀인이 자동적이고 무의식적으로 발생한다."
    }
  },
  {
    "id": "SOCIAL_FAE_002",
    "terminology": "기본적 귀인 오류 (Fundamental Attribution Error)",
    "terminology_ko": "기본적 귀인 오류",
    "terminology_en": "Fundamental Attribution Error",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "타인의 행동을 설명할 때 상황적 요인의 영향은 과소평가하고 개인의 내적 성향(성격, 태도 등)의 영향은 과대평가하는 경향이다.",
    "definition_en": "The tendency to overestimate the influence of personal dispositional factors and underestimate the impact of situational factors when explaining others' behavior.",
    "significance": "대인지각과 사회적 판단에서 가장 보편적으로 나타나는 편향으로, 편견과 오해의 주요 원인이 된다.",
    "key_researchers": [
      {
        "name_ko": "리 로스",
        "name_en": "Lee Ross",
        "contribution": "1977년 이 현상에 '기본적 귀인 오류'라는 명칭을 부여하고, 사회적 판단에서의 보편적 편향으로 개념화했다."
      },
      {
        "name_ko": "에드워드 존스",
        "name_en": "Edward E. Jones",
        "contribution": "행위자-관찰자 편향(Actor-Observer Bias) 연구를 통해 귀인 편향의 방향성 차이를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀인",
        "name_en": "Attribution",
        "id": "SOCIAL_ATTR_001"
      },
      {
        "name_ko": "자기봉사 편향",
        "name_en": "Self-Serving Bias",
        "id": "SOCIAL_SSB_003"
      },
      {
        "name_ko": "후광효과",
        "name_en": "Halo Effect",
        "id": "SOCIAL_HALO_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FAE = '성격 탓(Fault of Actor's Essence)'으로 기억 — 타인의 행동은 성격 탓으로 돌린다",
      "differential": "자기봉사 편향은 자신에 대한 귀인 편향이고, 기본적 귀인 오류는 타인에 대한 귀인 편향이다.",
      "key_point": "서양 개인주의 문화에서 더 강하게 나타나며, 집단주의 문화에서는 상대적으로 약하다.",
      "common_mistake": "'기본적'이란 말 때문에 모든 문화에서 동일하게 발생한다고 오해하지만, 문화에 따라 강도가 다르다."
    }
  },
  {
    "id": "SOCIAL_SSB_003",
    "terminology": "자기봉사 편향 (Self-Serving Bias)",
    "terminology_ko": "자기봉사 편향",
    "terminology_en": "Self-Serving Bias",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "성공은 자신의 능력이나 노력(내적 요인)에 귀인하고, 실패는 운이나 상황(외적 요인)에 귀인하는 경향으로, 자존감을 보호하고 유지하는 기능을 한다.",
    "definition_en": "The tendency to attribute successes to internal factors (ability, effort) and failures to external factors (luck, circumstances), serving to protect and maintain self-esteem.",
    "significance": "자기개념의 유지와 심리적 적응에 기여하지만, 과도할 경우 현실 인식을 왜곡하고 대인관계에서 갈등을 유발할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "데일 밀러",
        "name_en": "Dale T. Miller",
        "contribution": "자기봉사 편향에 대한 메타분석을 수행하여 이 편향의 보편성과 조절 변인을 체계적으로 정리했다."
      },
      {
        "name_ko": "리 로스",
        "name_en": "Lee Ross",
        "contribution": "귀인 편향 연구의 맥락에서 자기봉사 편향의 동기적 기반을 탐구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀인",
        "name_en": "Attribution",
        "id": "SOCIAL_ATTR_001"
      },
      {
        "name_ko": "기본적 귀인 오류",
        "name_en": "Fundamental Attribution Error",
        "id": "SOCIAL_FAE_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기봉사 = 자기(self)에게 봉사(serving) → 자존감에 봉사하는 편향",
      "differential": "기본적 귀인 오류는 타인 행동에 대한 편향이고, 자기봉사 편향은 자신의 성공/실패에 대한 비대칭적 귀인이다.",
      "key_point": "우울증 환자에서는 이 편향이 역전되어, 실패를 내적 요인에 귀인하고 성공을 외적 요인에 귀인하는 경향이 나타난다.",
      "common_mistake": "단순한 자기중심성과 혼동하기 쉬우나, 자기봉사 편향은 구체적으로 성공/실패의 귀인 비대칭을 지칭한다."
    }
  },
  {
    "id": "SOCIAL_ATT_004",
    "terminology": "태도 (Attitude)",
    "terminology_ko": "태도",
    "terminology_en": "Attitude",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "특정 대상(사람, 사물, 사건 등)에 대해 호의적이거나 비호의적으로 반응하려는 학습된 심리적 경향성으로, 인지적, 정서적, 행동적 요소로 구성된다.",
    "definition_en": "A learned predisposition to respond favorably or unfavorably toward a particular object, person, or event, consisting of cognitive, affective, and behavioral components.",
    "significance": "태도는 행동의 예측 변인으로 작용하며, 태도 변화 연구는 설득, 광고, 건강 행동 촉진 등 다양한 응용 영역의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "태도를 사회심리학의 가장 핵심적이고 필수불가결한 개념으로 규정하고 체계적 정의를 제시했다."
      },
      {
        "name_ko": "리처드 페티",
        "name_en": "Richard Petty",
        "contribution": "정교화 가능성 모형(ELM)을 개발하여 태도 변화의 이중 경로를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지부조화",
        "name_en": "Cognitive Dissonance",
        "id": "SOCIAL_CD_005"
      },
      {
        "name_ko": "설득",
        "name_en": "Persuasion",
        "id": "SOCIAL_PERS_018"
      },
      {
        "name_ko": "정교화 가능성 모형",
        "name_en": "Elaboration Likelihood Model",
        "id": "SOCIAL_ELM_021"
      }
    ],
    "sub_types": [
      {
        "name_ko": "명시적 태도",
        "name_en": "Explicit Attitude",
        "description": "의식적으로 인지하고 보고할 수 있는 태도"
      },
      {
        "name_ko": "암묵적 태도",
        "name_en": "Implicit Attitude",
        "description": "의식적 인식 없이 자동적으로 활성화되는 태도로, 암묵적 연합 검사(IAT)로 측정한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "태도의 ABC: Affective(정서), Behavioral(행동), Cognitive(인지)",
      "differential": "태도는 평가적 경향성이고, 가치(value)는 더 추상적이고 포괄적인 신념 체계이며, 의견(opinion)은 태도의 언어적 표현이다.",
      "key_point": "태도와 행동의 일치도는 태도의 강도, 구체성, 접근성에 따라 달라진다(LaPiere 연구).",
      "common_mistake": "태도가 항상 행동을 예측한다고 오해하지만, 태도-행동 불일치가 빈번하게 발생한다."
    }
  },
  {
    "id": "SOCIAL_CD_005",
    "terminology": "인지부조화 (Cognitive Dissonance)",
    "terminology_ko": "인지부조화",
    "terminology_en": "Cognitive Dissonance",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "개인이 가진 두 가지 이상의 인지(신념, 태도, 행동)가 서로 모순될 때 경험하는 심리적 불편감으로, 이 불편감을 해소하기 위해 태도나 행동을 변화시키려는 동기가 발생한다.",
    "definition_en": "The psychological discomfort experienced when an individual holds two or more contradictory cognitions (beliefs, attitudes, behaviors), which motivates attitude or behavior change to reduce the inconsistency.",
    "significance": "태도 변화의 동기적 기반을 설명하는 가장 영향력 있는 이론으로, 의사결정 후 합리화, 자기정당화 등 다양한 현상을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "레온 페스팅거",
        "name_en": "Leon Festinger",
        "contribution": "1957년 인지부조화 이론을 최초로 제안하고, $1/$20 실험(강제적 순응 패러다임)을 통해 부조화 해소 과정을 실증적으로 검증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "태도",
        "name_en": "Attitude",
        "id": "SOCIAL_ATT_004"
      },
      {
        "name_ko": "설득",
        "name_en": "Persuasion",
        "id": "SOCIAL_PERS_018"
      },
      {
        "name_ko": "자기봉사 편향",
        "name_en": "Self-Serving Bias",
        "id": "SOCIAL_SSB_003"
      }
    ],
    "sub_types": [
      {
        "name_ko": "결정 후 부조화",
        "name_en": "Post-Decisional Dissonance",
        "description": "선택 후 선택하지 않은 대안의 장점과 선택한 대안의 단점 사이에서 발생하는 부조화"
      },
      {
        "name_ko": "노력 정당화",
        "name_en": "Effort Justification",
        "description": "많은 노력을 들인 대상의 가치를 높게 평가하여 투자한 노력을 정당화하려는 경향"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지(생각) + 부조화(안 맞음) → 생각이 안 맞으면 불편 → 바꿔야 편함",
      "differential": "인지부조화는 자신의 내적 모순에서 오는 불편이고, 사회적 압력에 의한 동조(conformity)와는 기제가 다르다.",
      "key_point": "Festinger의 $1/$20 실험에서 $1을 받은 집단이 $20 집단보다 과제를 더 즐거웠다고 보고했다 — 적은 보상 = 더 큰 부조화 = 더 많은 태도 변화.",
      "common_mistake": "$20을 받은 집단이 더 큰 부조화를 경험했다고 착각하기 쉬우나, 충분한 외적 정당화가 있으면 부조화가 적다."
    }
  },
  {
    "id": "SOCIAL_CONF_006",
    "terminology": "동조 (Conformity)",
    "terminology_ko": "동조",
    "terminology_en": "Conformity",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "집단의 규범, 기대, 의견에 맞추어 자신의 행동이나 태도를 변화시키는 현상으로, 실제로 집단의 명시적 요구가 없더라도 발생할 수 있다.",
    "definition_en": "The act of changing one's behavior or attitudes to align with group norms, expectations, or opinions, which can occur even without explicit demands from the group.",
    "significance": "사회적 영향력의 가장 기본적인 형태로, 문화적 규범의 전파, 집단 내 질서 유지, 그리고 때로는 비합리적 집단 행동의 원인이 된다.",
    "key_researchers": [
      {
        "name_ko": "솔로몬 애쉬",
        "name_en": "Solomon Asch",
        "contribution": "1951년 선분 판단 실험을 통해 명백한 사실에 대해서도 집단 압력에 의해 동조가 발생할 수 있음을 입증했다."
      },
      {
        "name_ko": "무자퍼 셰리프",
        "name_en": "Muzafer Sherif",
        "contribution": "자동운동 효과(autokinetic effect) 실험을 통해 모호한 상황에서 집단 규범이 형성되는 과정을 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "복종",
        "name_en": "Obedience",
        "id": "SOCIAL_OBED_007"
      },
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      },
      {
        "name_ko": "정보적 사회영향",
        "name_en": "Informational Social Influence",
        "id": "SOCIAL_ISI_026"
      },
      {
        "name_ko": "집단사고",
        "name_en": "Groupthink",
        "id": "SOCIAL_GT_010"
      }
    ],
    "sub_types": [
      {
        "name_ko": "순응",
        "name_en": "Compliance",
        "description": "내면적으로는 동의하지 않으면서 외적으로만 집단에 따르는 것"
      },
      {
        "name_ko": "내면화",
        "name_en": "Internalization",
        "description": "집단의 의견을 진정으로 수용하여 자신의 신념으로 받아들이는 것"
      },
      {
        "name_ko": "동일시",
        "name_en": "Identification",
        "description": "특정 인물이나 집단과의 관계를 유지하기 위해 동조하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Asch의 선분 실험: 선(line) 하나 못 고르게 만드는 집단의 힘",
      "differential": "동조는 명시적 명령 없이 집단 압력에 의해 발생하고, 복종은 권위자의 직접적 명령에 따르는 것이다.",
      "key_point": "Asch 실험에서 참가자의 약 75%가 최소 한 번 이상 동조했으며, 동조율은 집단 크기가 3-5명일 때 최대에 도달한다.",
      "common_mistake": "동조를 항상 부정적 현상으로 보는 것은 오류이며, 사회적 협력과 문화 유지에 필수적인 기능도 한다."
    }
  },
  {
    "id": "SOCIAL_OBED_007",
    "terminology": "복종 (Obedience)",
    "terminology_ko": "복종",
    "terminology_en": "Obedience",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "권위 있는 인물의 직접적 명령이나 지시에 따라 행동하는 것으로, 개인의 도덕적 판단과 상충하는 경우에도 발생할 수 있다.",
    "definition_en": "Behavior change in response to a direct command or order from an authority figure, which can occur even when it conflicts with one's moral judgment.",
    "significance": "권위에 대한 복종이 잔학 행위를 야기할 수 있음을 보여주어, 홀로코스트 등 역사적 잔학행위의 심리적 기제를 이해하는 데 핵심적인 개념이다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 밀그램",
        "name_en": "Stanley Milgram",
        "contribution": "1963년 전기 충격 실험을 통해 일반인도 권위자의 명령에 따라 타인에게 해를 가할 수 있음을 증명했다. 참가자의 약 65%가 최대 전압(450V)까지 복종했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      },
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      },
      {
        "name_ko": "몰개성화",
        "name_en": "Deindividuation",
        "id": "SOCIAL_DEIND_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "밀그램 = 밀어붙인(push) + 그램(gram, 무게감 있는 권위) → 권위가 밀어붙여 복종시킨다",
      "differential": "복종은 권위자의 직접적 명령에 따르는 것이고, 동조는 또래 집단의 암묵적 압력에 의한 것이며, 순응(compliance)은 요청에 의한 것이다.",
      "key_point": "Milgram 실험에서 복종을 증가시키는 요인: 권위자의 물리적 근접성, 피해자의 물리적 거리, 권위적 기관의 정당성, 반대자의 부재.",
      "common_mistake": "복종한 참가자들이 가학적 성격이었다고 오해하지만, 상황적 요인이 결정적이었다(상황주의적 해석)."
    }
  },
  {
    "id": "SOCIAL_SF_008",
    "terminology": "사회적 촉진 (Social Facilitation)",
    "terminology_ko": "사회적 촉진",
    "terminology_en": "Social Facilitation",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "타인의 존재가 단순하거나 잘 학습된 과제의 수행을 향상시키는 현상으로, 반대로 복잡하거나 새로운 과제에서는 수행이 저하(사회적 억제)될 수 있다.",
    "definition_en": "The tendency for people to perform better on simple or well-learned tasks in the presence of others, while performance on complex or novel tasks may be impaired (social inhibition).",
    "significance": "타인의 존재가 수행에 미치는 가장 기본적인 사회적 영향을 설명하며, 스포츠, 교육, 직장 환경 설계에 실용적으로 적용된다.",
    "key_researchers": [
      {
        "name_ko": "노먼 트리플렛",
        "name_en": "Norman Triplett",
        "contribution": "1898년 자전거 경주 연구를 통해 타인의 존재가 수행을 향상시킬 수 있음을 최초로 실험적으로 입증했다. 사회심리학 최초의 실험으로 간주된다."
      },
      {
        "name_ko": "로버트 자이언스",
        "name_en": "Robert Zajonc",
        "contribution": "각성 가설(arousal hypothesis)을 제안하여 타인의 존재가 각성을 높이고, 이것이 우세 반응을 촉진함을 이론화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회적 태만",
        "name_en": "Social Loafing",
        "id": "SOCIAL_SL_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사촉: 쉬운 건 사람 앞에서 촉진, 어려운 건 억제 — 관객 앞 농구 자유투(쉬움)는 잘 되지만 새 기술은 떨린다",
      "differential": "사회적 촉진은 개인 수행이 평가 가능할 때 발생하고, 사회적 태만은 개인 기여가 식별되지 않을 때 발생한다.",
      "key_point": "Zajonc의 설명: 타인의 존재 → 각성 증가 → 우세 반응(dominant response) 촉진 → 쉬운 과제는 향상, 어려운 과제는 저하.",
      "common_mistake": "타인의 존재가 항상 수행을 촉진한다고 오해하지만, 과제 난이도에 따라 촉진 또는 억제가 결정된다."
    }
  },
  {
    "id": "SOCIAL_SL_009",
    "terminology": "사회적 태만 (Social Loafing)",
    "terminology_ko": "사회적 태만",
    "terminology_en": "Social Loafing",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "집단으로 작업할 때 개인이 혼자 할 때보다 덜 노력하는 현상으로, 개인의 기여가 식별되지 않을수록 강하게 나타난다.",
    "definition_en": "The tendency for individuals to exert less effort when working collectively than when working individually, especially when individual contributions cannot be identified.",
    "significance": "집단 작업의 비효율성을 설명하며, 팀 운영과 조직 관리에서 개인 책임 부여의 중요성을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "비브 라타네",
        "name_en": "Bibb Latané",
        "contribution": "줄다리기 및 박수 치기 실험 등을 통해 사회적 태만 현상을 체계적으로 연구하고 개념화했다."
      },
      {
        "name_ko": "키플링 윌리엄스",
        "name_en": "Kipling Williams",
        "contribution": "사회적 태만을 줄이는 조건들(개인 식별 가능성, 과제 중요성 등)을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회적 촉진",
        "name_en": "Social Facilitation",
        "id": "SOCIAL_SF_008"
      },
      {
        "name_ko": "방관자 효과",
        "name_en": "Bystander Effect",
        "id": "SOCIAL_BYST_014"
      },
      {
        "name_ko": "몰개성화",
        "name_en": "Deindividuation",
        "id": "SOCIAL_DEIND_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사태: 사람이 많으면 태만해진다 — '누군가 하겠지'",
      "differential": "사회적 태만은 집단 내에서 개인 노력이 줄어드는 것이고, 무임승차(free-riding)는 의도적으로 노력을 회피하는 것이다.",
      "key_point": "사회적 태만을 줄이는 조건: 개인 기여의 식별 가능성, 과제의 개인적 중요성, 집단 크기 축소, 집단 응집력 향상.",
      "common_mistake": "사회적 태만이 모든 문화에서 동일하게 나타난다고 가정하지만, 집단주의 문화에서는 상대적으로 약하게 나타난다."
    }
  },
  {
    "id": "SOCIAL_GT_010",
    "terminology": "집단사고 (Groupthink)",
    "terminology_ko": "집단사고",
    "terminology_en": "Groupthink",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "집단의 조화와 합의를 유지하려는 욕구가 비판적 사고와 현실적 대안 평가를 억압하여 비합리적이거나 잘못된 의사결정을 초래하는 현상이다.",
    "definition_en": "A phenomenon in which the desire for group harmony and consensus overrides critical thinking and realistic evaluation of alternatives, leading to irrational or flawed decision-making.",
    "significance": "피그만 침공, 챌린저호 폭발 등 역사적 의사결정 실패 사례를 설명하며, 조직 의사결정 과정 개선에 핵심적인 시사점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어빙 재니스",
        "name_en": "Irving Janis",
        "contribution": "1972년 집단사고 개념을 제안하고, 8가지 증상(무적의 환상, 합리화, 도덕성 신념, 외집단 고정관념, 동조 압력, 자기검열, 만장일치 환상, 자칭 마음지킴이)을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      },
      {
        "name_ko": "집단극화",
        "name_en": "Group Polarization",
        "id": "SOCIAL_GP_024"
      },
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단사고 = 집단이 '사고(thinking)'를 멈추고 '사고(accident)'를 낸다",
      "differential": "집단사고는 합의 지향적 집단에서 발생하는 의사결정 결함이고, 집단극화는 토론 후 입장이 극단화되는 현상이다.",
      "key_point": "Janis가 제시한 8가지 증상: 무적의 환상, 집단적 합리화, 도덕성에 대한 신념, 외집단에 대한 고정관념, 동조 압력, 자기검열, 만장일치 환상, 자칭 마음지킴이(self-appointed mindguards).",
      "common_mistake": "집단사고가 단순히 '집단이 생각한다'는 뜻이라고 오해하지만, 실제로는 집단의 결함 있는 의사결정 과정을 뜻한다."
    }
  },
  {
    "id": "SOCIAL_PREJ_011",
    "terminology": "편견 (Prejudice)",
    "terminology_ko": "편견",
    "terminology_en": "Prejudice",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "특정 집단과 그 집단 구성원에 대해 충분한 근거 없이 형성된 부정적(때로는 긍정적) 태도로, 인지적(고정관념), 정서적(편견), 행동적(차별) 요소를 포함한다.",
    "definition_en": "A negative (or sometimes positive) attitude toward a group and its members, formed without sufficient evidence, encompassing cognitive (stereotypes), affective (prejudice), and behavioral (discrimination) components.",
    "significance": "사회적 불평등과 집단 간 갈등의 심리적 근원을 설명하며, 인종차별, 성차별 등 다양한 사회 문제의 이해와 해결에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "1954년 저서 《편견의 본질(The Nature of Prejudice)》에서 편견의 심리학적 분석을 체계화하고, 접촉 가설을 제안했다."
      },
      {
        "name_ko": "앙리 타지펠",
        "name_en": "Henri Tajfel",
        "contribution": "최소 집단 패러다임(Minimal Group Paradigm) 실험을 통해 단순한 집단 범주화만으로도 내집단 편향이 발생함을 증명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "내집단 편향",
        "name_en": "In-Group Bias",
        "id": "SOCIAL_IGB_013"
      },
      {
        "name_ko": "차별",
        "name_en": "Discrimination",
        "id": "SOCIAL_DISC_028"
      },
      {
        "name_ko": "접촉가설",
        "name_en": "Contact Hypothesis",
        "id": "SOCIAL_CH_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "노골적 편견",
        "name_en": "Explicit Prejudice",
        "description": "의식적으로 인식하고 표현하는 직접적 편견"
      },
      {
        "name_ko": "암묵적 편견",
        "name_en": "Implicit Prejudice",
        "description": "무의식적으로 작용하는 자동적 편향으로, IAT 등으로 측정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "편견 = 편향된(biased) 견해(view) → 한쪽으로 치우친 시각",
      "differential": "편견은 부정적 태도(정서적), 고정관념은 일반화된 신념(인지적), 차별은 부당한 행위(행동적)이다.",
      "key_point": "편견, 고정관념, 차별은 각각 태도의 정서적, 인지적, 행동적 요소에 대응한다.",
      "common_mistake": "편견과 차별을 동일시하지만, 편견은 태도이고 차별은 행동이다. 편견을 가져도 차별하지 않을 수 있고, 편견 없이 구조적 차별에 참여할 수도 있다."
    }
  },
  {
    "id": "SOCIAL_STER_012",
    "terminology": "고정관념 (Stereotype)",
    "terminology_ko": "고정관념",
    "terminology_en": "Stereotype",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "특정 사회집단의 구성원 모두가 특정 특성을 공유한다는 과도하게 일반화된 신념으로, 인지적 범주화의 산물이며 정확성과 무관하게 자동적으로 활성화될 수 있다.",
    "definition_en": "An overgeneralized belief that all members of a particular social group share certain characteristics, which is a product of cognitive categorization and can be activated automatically regardless of its accuracy.",
    "significance": "사회적 인지의 효율성을 제공하지만 동시에 편견과 차별의 인지적 기반이 되며, 고정관념 위협(stereotype threat)을 통해 피해 대상의 수행을 직접 저하시킬 수 있다.",
    "key_researchers": [
      {
        "name_ko": "월터 리프먼",
        "name_en": "Walter Lippmann",
        "contribution": "1922년 저서에서 '고정관념'이라는 용어를 사회과학에 최초로 도입하여 '머릿속의 그림(pictures in our heads)' 개념을 제안했다."
      },
      {
        "name_ko": "클로드 스틸",
        "name_en": "Claude Steele",
        "contribution": "고정관념 위협(Stereotype Threat) 개념을 제안하여, 부정적 고정관념의 대상이 해당 영역에서 수행 저하를 경험하는 현상을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편견",
        "name_en": "Prejudice",
        "id": "SOCIAL_PREJ_011"
      },
      {
        "name_ko": "내집단 편향",
        "name_en": "In-Group Bias",
        "id": "SOCIAL_IGB_013"
      },
      {
        "name_ko": "후광효과",
        "name_en": "Halo Effect",
        "id": "SOCIAL_HALO_019"
      },
      {
        "name_ko": "차별",
        "name_en": "Discrimination",
        "id": "SOCIAL_DISC_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "고정(fixed) + 관념(notion) → 특정 집단에 대한 고정된 생각의 틀",
      "differential": "고정관념은 인지적 요소(신념)이고, 편견은 정서적 요소(감정)이며, 차별은 행동적 요소이다.",
      "key_point": "고정관념 위협(Stereotype Threat): 부정적 고정관념을 인식하는 것만으로도 해당 영역의 수행이 저하된다(예: '여성은 수학을 못한다'는 고정관념을 활성화하면 여성의 수학 점수가 하락).",
      "common_mistake": "고정관념이 반드시 부정적이라고 오해하지만, '아시아인은 수학을 잘한다' 같은 긍정적 고정관념도 존재하며, 이 역시 해로울 수 있다."
    }
  },
  {
    "id": "SOCIAL_IGB_013",
    "terminology": "내집단 편향 (In-Group Bias)",
    "terminology_ko": "내집단 편향",
    "terminology_en": "In-Group Bias",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "자신이 속한 집단(내집단)의 구성원을 외집단 구성원보다 더 호의적으로 평가하고 대우하는 경향으로, 단순한 범주화만으로도 발생할 수 있다.",
    "definition_en": "The tendency to evaluate and treat members of one's own group (in-group) more favorably than members of other groups (out-groups), which can occur through mere categorization alone.",
    "significance": "사회적 정체성 이론의 핵심 개념으로, 집단 간 갈등, 편견, 차별의 기본적 심리 기제를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "앙리 타지펠",
        "name_en": "Henri Tajfel",
        "contribution": "최소 집단 패러다임을 통해 무의미한 기준으로 집단을 나누어도 내집단 편향이 발생함을 증명했다."
      },
      {
        "name_ko": "존 터너",
        "name_en": "John Turner",
        "contribution": "자기범주화 이론(Self-Categorization Theory)을 발전시켜 내집단 편향의 인지적 기제를 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편견",
        "name_en": "Prejudice",
        "id": "SOCIAL_PREJ_011"
      },
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "차별",
        "name_en": "Discrimination",
        "id": "SOCIAL_DISC_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내집단 편향 = 우리 편(my team) 감싸기 — 월드컵 때 자국 팀 응원하듯",
      "differential": "내집단 편향은 내집단을 더 좋게 보는 것이고, 외집단 비하(out-group derogation)는 외집단을 적극적으로 폄하하는 것이다. 두 개는 별개이다.",
      "key_point": "Tajfel의 최소 집단 실험: 동전 던지기로 집단을 나누어도 자기 집단에 더 많은 자원을 배분한다.",
      "common_mistake": "내집단 편향이 외집단에 대한 적대감을 반드시 수반한다고 오해하지만, 내집단 선호와 외집단 적대는 독립적으로 작동할 수 있다."
    }
  },
  {
    "id": "SOCIAL_BYST_014",
    "terminology": "방관자 효과 (Bystander Effect)",
    "terminology_ko": "방관자 효과",
    "terminology_en": "Bystander Effect",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "긴급 상황에서 주변에 다른 사람이 많을수록 개인이 도움을 제공할 가능성이 낮아지는 현상으로, 책임 분산과 다원적 무지가 주요 기제이다.",
    "definition_en": "The phenomenon in which the presence of others reduces an individual's likelihood of helping in an emergency, primarily explained by diffusion of responsibility and pluralistic ignorance.",
    "significance": "키티 제노비스 사건(1964)을 계기로 연구가 시작되었으며, 긴급상황 대응 교육과 도시계획에 실용적 시사점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "비브 라타네",
        "name_en": "Bibb Latané",
        "contribution": "John Darley와 함께 방관자 효과를 실험적으로 연구하고 사회적 영향 이론을 통해 이를 설명했다."
      },
      {
        "name_ko": "존 달리",
        "name_en": "John Darley",
        "contribution": "Bibb Latané와 함께 5단계 의사결정 모형(알아차림→해석→책임감→방법 결정→실행)을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이타행동",
        "name_en": "Altruism",
        "id": "SOCIAL_ALT_015"
      },
      {
        "name_ko": "사회적 태만",
        "name_en": "Social Loafing",
        "id": "SOCIAL_SL_009"
      },
      {
        "name_ko": "몰개성화",
        "name_en": "Deindividuation",
        "id": "SOCIAL_DEIND_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "방관자 효과: 사람이 많으면 '누군가 신고하겠지' → 아무도 안 함",
      "differential": "방관자 효과는 돕지 않는 현상이고, 사회적 태만은 집단 과제에서 노력이 줄어드는 현상이다. 둘 다 책임 분산이 관여하지만 맥락이 다르다.",
      "key_point": "Latané와 Darley의 5단계 모형: (1) 사건 인식 (2) 긴급 상황 해석 (3) 개인적 책임 수용 (4) 적절한 도움 방법 결정 (5) 실행. 각 단계에서 도움이 차단될 수 있다.",
      "common_mistake": "방관자들이 냉담한 성격이라고 오해하지만, 핵심은 상황적 요인(사람 수)이 행동을 결정한다는 것이다."
    }
  },
  {
    "id": "SOCIAL_ALT_015",
    "terminology": "이타행동 (Altruism)",
    "terminology_ko": "이타행동",
    "terminology_en": "Altruism",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "외적 보상을 기대하지 않고 타인의 복지를 위해 자발적으로 행하는 친사회적 행동으로, 순수한 이타주의의 존재 여부는 심리학에서 오랜 논쟁 주제이다.",
    "definition_en": "Voluntary prosocial behavior performed to benefit others without expectation of external reward; whether pure altruism exists remains a longstanding debate in psychology.",
    "significance": "인간 본성의 이기성/이타성 논쟁과 관련되며, 자원봉사, 기부, 응급구조 행동 등의 촉진 요인을 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 배트슨",
        "name_en": "C. Daniel Batson",
        "contribution": "공감-이타 가설(Empathy-Altruism Hypothesis)을 제안하여 공감적 관심이 순수한 이타적 동기를 유발할 수 있음을 주장했다."
      },
      {
        "name_ko": "로버트 칠디니",
        "name_en": "Robert Cialdini",
        "contribution": "부정적 상태 해소 모형(Negative-State Relief Model)을 제안하여 이타행동이 자신의 부정적 감정을 해소하려는 이기적 동기에서 비롯될 수 있음을 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방관자 효과",
        "name_en": "Bystander Effect",
        "id": "SOCIAL_BYST_014"
      },
      {
        "name_ko": "공격성",
        "name_en": "Aggression",
        "id": "SOCIAL_AGG_016"
      },
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "SOCIAL_SLT_017"
      }
    ],
    "sub_types": [
      {
        "name_ko": "친족 이타주의",
        "name_en": "Kin Altruism",
        "description": "유전자를 공유하는 친족을 돕는 행동으로, 포괄 적합도(inclusive fitness) 이론으로 설명"
      },
      {
        "name_ko": "호혜적 이타주의",
        "name_en": "Reciprocal Altruism",
        "description": "미래에 상호 도움을 주고받을 것이라는 기대에 기반한 이타행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "이타(利他) = 남을 이롭게 한다 ↔ 이기(利己) = 자기를 이롭게 한다",
      "differential": "이타행동은 보상 기대 없이 타인을 돕는 것이고, 친사회적 행동(prosocial behavior)은 보상 기대 여부와 관계없이 타인을 돕는 모든 행동을 포괄하는 상위 개념이다.",
      "key_point": "Batson의 공감-이타 가설 vs Cialdini의 부정적 상태 해소 모형 — 이타행동의 동기가 순수한가(Batson) 아니면 궁극적으로 이기적인가(Cialdini)의 논쟁.",
      "common_mistake": "이타행동과 친사회적 행동을 동일시하지만, 이타행동은 친사회적 행동의 하위 유형이다."
    }
  },
  {
    "id": "SOCIAL_AGG_016",
    "terminology": "공격성 (Aggression)",
    "terminology_ko": "공격성",
    "terminology_en": "Aggression",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "타인에게 의도적으로 해를 가하려는 신체적 또는 언어적 행동으로, 적대적 공격성(감정 표출)과 도구적 공격성(목적 달성 수단)으로 구분된다.",
    "definition_en": "Physical or verbal behavior intended to harm another person, categorized into hostile aggression (emotional expression) and instrumental aggression (goal-directed means).",
    "significance": "폭력, 전쟁, 가정폭력 등 사회적 문제의 심리적 기원을 이해하고, 공격성 감소를 위한 개입 전략을 수립하는 데 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "존 돌라드",
        "name_en": "John Dollard",
        "contribution": "좌절-공격 가설(Frustration-Aggression Hypothesis)을 제안하여 좌절이 항상 공격을 유발한다고 주장했다."
      },
      {
        "name_ko": "레너드 버코위츠",
        "name_en": "Leonard Berkowitz",
        "contribution": "좌절-공격 가설을 수정하여, 좌절이 공격의 준비 상태(각성)를 만들고 공격적 단서가 있을 때 공격이 발현된다는 인지-신연합 모형을 제안했다."
      },
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "보보 인형 실험을 통해 공격행동이 관찰학습을 통해 습득될 수 있음을 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "SOCIAL_SLT_017"
      },
      {
        "name_ko": "이타행동",
        "name_en": "Altruism",
        "id": "SOCIAL_ALT_015"
      },
      {
        "name_ko": "몰개성화",
        "name_en": "Deindividuation",
        "id": "SOCIAL_DEIND_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "적대적 공격성",
        "name_en": "Hostile Aggression",
        "description": "분노나 적대감에 의해 동기화된 공격으로, 상대에게 고통을 주는 것 자체가 목적"
      },
      {
        "name_ko": "도구적 공격성",
        "name_en": "Instrumental Aggression",
        "description": "다른 목적(돈, 지위 등)을 달성하기 위한 수단으로 사용되는 공격"
      },
      {
        "name_ko": "관계적 공격성",
        "name_en": "Relational Aggression",
        "description": "타인의 사회적 관계를 손상시키는 것을 목표로 하는 공격(소문, 따돌림 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "공격성의 두 얼굴: 적대적(Hot, 감정) vs 도구적(Cool, 계산)",
      "differential": "적대적 공격성은 감정적이고 반응적이며, 도구적 공격성은 계획적이고 목표지향적이다.",
      "key_point": "좌절-공격 가설(Dollard)은 '좌절 → 항상 공격'을 주장했으나, Berkowitz가 수정하여 '좌절 → 공격 준비 → 공격적 단서가 있을 때 공격 발현'으로 보완했다.",
      "common_mistake": "공격성이 전적으로 본능이라고(Freud의 타나토스) 또는 전적으로 학습이라고 양극단으로 이해하지만, 생물학적·심리적·사회적 요인이 복합적으로 작용한다."
    }
  },
  {
    "id": "SOCIAL_SLT_017",
    "terminology": "사회학습이론 (Social Learning Theory)",
    "terminology_ko": "사회학습이론",
    "terminology_en": "Social Learning Theory",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "직접 경험뿐 아니라 타인의 행동을 관찰하고 모방함으로써 새로운 행동을 학습할 수 있다는 이론으로, 관찰학습(모델링)과 대리강화를 핵심 기제로 제시한다.",
    "definition_en": "A theory proposing that new behaviors can be acquired not only through direct experience but also by observing and imitating others, with observational learning (modeling) and vicarious reinforcement as key mechanisms.",
    "significance": "행동주의와 인지심리학을 연결하는 이론적 다리 역할을 하며, 미디어 폭력의 영향, 교육, 심리치료 등 광범위한 영역에 적용된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "사회학습이론을 체계화하고, 보보 인형 실험(1961)을 통해 공격행동의 관찰학습을 실증적으로 입증했다. 이후 사회인지이론으로 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공격성",
        "name_en": "Aggression",
        "id": "SOCIAL_AGG_016"
      },
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      },
      {
        "name_ko": "이타행동",
        "name_en": "Altruism",
        "id": "SOCIAL_ALT_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "보보(Bobo) 인형 실험: 아이들이 어른의 공격 행동을 '보고 보고(보보)' 따라한다",
      "differential": "사회학습이론은 관찰을 통한 행동 습득을 강조하고, 고전적/조작적 조건형성은 직접 경험을 통한 학습을 강조한다.",
      "key_point": "관찰학습의 4단계: 주의(attention) → 파지(retention) → 재생(reproduction) → 동기화(motivation). 모방이 일어나려면 네 단계 모두 충족되어야 한다.",
      "common_mistake": "관찰하면 반드시 모방한다고 오해하지만, 동기화 단계에서 강화/처벌에 대한 기대가 모방 여부를 결정한다."
    }
  },
  {
    "id": "SOCIAL_PERS_018",
    "terminology": "설득 (Persuasion)",
    "terminology_ko": "설득",
    "terminology_en": "Persuasion",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "의사소통을 통해 타인의 태도, 신념, 행동을 의도적으로 변화시키는 과정으로, 전달자, 메시지, 수용자, 채널의 요소가 효과에 영향을 미친다.",
    "definition_en": "The process of intentionally changing others' attitudes, beliefs, or behaviors through communication, influenced by factors related to the source, message, audience, and channel.",
    "significance": "광고, 정치 캠페인, 건강 캠페인, 교육 등 다양한 영역에서 효과적인 의사소통 전략의 이론적 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "칼 호블랜드",
        "name_en": "Carl Hovland",
        "contribution": "예일 태도 변화 접근법을 개발하여 전달자의 신뢰성, 메시지 구조, 수용자 특성 등 설득의 체계적 요인을 연구했다."
      },
      {
        "name_ko": "로버트 칠디니",
        "name_en": "Robert Cialdini",
        "contribution": "설득의 6가지 원리(상호성, 일관성, 사회적 증거, 호감, 권위, 희소성)를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "태도",
        "name_en": "Attitude",
        "id": "SOCIAL_ATT_004"
      },
      {
        "name_ko": "인지부조화",
        "name_en": "Cognitive Dissonance",
        "id": "SOCIAL_CD_005"
      },
      {
        "name_ko": "정교화 가능성 모형",
        "name_en": "Elaboration Likelihood Model",
        "id": "SOCIAL_ELM_021"
      },
      {
        "name_ko": "후광효과",
        "name_en": "Halo Effect",
        "id": "SOCIAL_HALO_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Cialdini의 6원리: '상일사호권희' — 상호성, 일관성, 사회적 증거, 호감, 권위, 희소성",
      "differential": "설득은 논리적/감성적 의사소통을 통한 태도 변화이고, 복종은 권위적 명령에 의한 행동 변화이며, 동조는 집단 압력에 의한 변화이다.",
      "key_point": "Hovland의 예일 접근법 — 설득 효과는 누가(전달자 신뢰성·매력), 무엇을(메시지 내용·구조), 누구에게(수용자 특성), 어떻게(채널) 전하느냐에 따라 결정된다.",
      "common_mistake": "설득이 항상 조작적이거나 비윤리적이라고 오해하지만, 건강 캠페인 등 긍정적 목적의 설득도 있다."
    }
  },
  {
    "id": "SOCIAL_HALO_019",
    "terminology": "후광효과 (Halo Effect)",
    "terminology_ko": "후광효과",
    "terminology_en": "Halo Effect",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "어떤 사람의 한 가지 긍정적(또는 부정적) 특성이 그 사람의 다른 관련 없는 특성에 대한 판단에까지 영향을 미치는 인지적 편향이다.",
    "definition_en": "A cognitive bias in which one positive (or negative) trait of a person influences the perception of their other unrelated traits.",
    "significance": "채용 면접, 교사의 학생 평가, 소비자 행동 등에서 광범위하게 작용하며, 대인지각의 체계적 왜곡을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "1920년 군 장교의 병사 평가 연구에서 후광효과를 최초로 발견하고 명명했다. 한 특성에 대한 평가가 다른 특성 평가와 높은 상관을 보임을 확인했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "기본적 귀인 오류",
        "name_en": "Fundamental Attribution Error",
        "id": "SOCIAL_FAE_002"
      },
      {
        "name_ko": "자기충족적 예언",
        "name_en": "Self-Fulfilling Prophecy",
        "id": "SOCIAL_SFP_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "후광(halo) = 성인의 머리 위 빛 → 하나가 빛나면(좋으면) 전부 빛나 보인다",
      "differential": "후광효과는 개인의 한 특성이 전체 인상에 영향을 주는 것이고, 고정관념은 집단 소속에 기반한 일반화이다.",
      "key_point": "신체적 매력의 후광효과: 외모가 매력적인 사람은 성격, 지능, 능력 등도 더 좋을 것이라고 판단하는 경향(Dion 등, 1972 '아름다운 것이 좋은 것' 연구).",
      "common_mistake": "후광효과가 긍정적 방향으로만 작용한다고 오해하지만, 부정적 특성이 전반적 인상을 나쁘게 만드는 역후광효과(Horn Effect)도 있다."
    }
  },
  {
    "id": "SOCIAL_SFP_020",
    "terminology": "자기충족적 예언 (Self-Fulfilling Prophecy)",
    "terminology_ko": "자기충족적 예언",
    "terminology_en": "Self-Fulfilling Prophecy",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "어떤 사람이나 상황에 대한 기대나 신념이 그 기대에 부합하는 행동을 유발하여 결과적으로 원래의 기대가 실현되는 현상이다.",
    "definition_en": "A phenomenon in which an expectation or belief about a person or situation elicits behaviors that cause the expectation to be fulfilled.",
    "significance": "교육(피그말리온 효과), 의료(위약 효과), 대인관계, 경제(은행 뱅크런) 등 다양한 영역에서 기대의 자기실현적 특성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "Lenore Jacobson과 함께 피그말리온 효과(Pygmalion Effect) 연구를 수행하여, 교사의 기대가 학생의 실제 학업 성취에 영향을 미침을 입증했다(1968)."
      },
      {
        "name_ko": "로버트 머튼",
        "name_en": "Robert K. Merton",
        "contribution": "사회학에서 '자기충족적 예언'이라는 용어를 최초로 사용하고 개념을 체계화했다(1948)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "후광효과",
        "name_en": "Halo Effect",
        "id": "SOCIAL_HALO_019"
      },
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "기본적 귀인 오류",
        "name_en": "Fundamental Attribution Error",
        "id": "SOCIAL_FAE_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피그말리온(Pygmalion): 조각가가 자기 작품을 사랑하니 진짜 사람이 됨 → 기대하면 현실이 된다",
      "differential": "자기충족적 예언은 타인에 대한 기대가 타인의 행동을 바꾸는 것이고, 확증편향은 기존 신념을 확인하는 정보만 선택적으로 처리하는 것이다.",
      "key_point": "Rosenthal-Jacobson 실험: 무작위로 선정된 학생을 '지적 성장 잠재력이 높다'고 교사에게 알리자, 해당 학생의 IQ가 실제로 유의미하게 상승했다.",
      "common_mistake": "자기충족적 예언이 항상 긍정적이라고 오해하지만, 부정적 기대도 자기실현될 수 있다(골렘 효과: 낮은 기대 → 낮은 성취)."
    }
  },
  {
    "id": "SOCIAL_ELM_021",
    "terminology": "정교화 가능성 모형 (Elaboration Likelihood Model)",
    "terminology_ko": "정교화 가능성 모형",
    "terminology_en": "Elaboration Likelihood Model",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "설득이 두 가지 경로를 통해 이루어진다는 이론으로, 중심 경로(메시지 내용의 논리적 분석)와 주변 경로(전달자 매력, 메시지 수 등 피상적 단서에 의한 판단)를 구분한다.",
    "definition_en": "A theory proposing that persuasion occurs through two routes: the central route (logical analysis of message content) and the peripheral route (reliance on superficial cues such as source attractiveness or number of arguments).",
    "significance": "효과적인 설득 메시지 설계의 이론적 틀을 제공하며, 광고, 건강 캠페인, 정치 캠페인의 전략 수립에 직접적으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "리처드 페티",
        "name_en": "Richard Petty",
        "contribution": "John Cacioppo와 함께 1986년 정교화 가능성 모형(ELM)을 제안하여 설득의 이중 경로를 체계화했다."
      },
      {
        "name_ko": "존 카시오포",
        "name_en": "John Cacioppo",
        "contribution": "Richard Petty와 함께 ELM을 공동 개발하고, 인지욕구(Need for Cognition)가 경로 선택에 미치는 영향을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "설득",
        "name_en": "Persuasion",
        "id": "SOCIAL_PERS_018"
      },
      {
        "name_ko": "태도",
        "name_en": "Attitude",
        "id": "SOCIAL_ATT_004"
      },
      {
        "name_ko": "인지부조화",
        "name_en": "Cognitive Dissonance",
        "id": "SOCIAL_CD_005"
      }
    ],
    "sub_types": [
      {
        "name_ko": "중심 경로",
        "name_en": "Central Route",
        "description": "메시지의 논거와 증거를 주의 깊게 분석하여 태도를 형성하는 경로. 동기와 능력이 높을 때 사용되며, 지속적인 태도 변화를 유발한다."
      },
      {
        "name_ko": "주변 경로",
        "name_en": "Peripheral Route",
        "description": "전달자의 매력, 논거의 수, 감정적 호소 등 피상적 단서에 기반하여 태도를 형성하는 경로. 동기나 능력이 낮을 때 사용되며, 일시적인 태도 변화를 유발한다."
      }
    ],
    "quiz_hints": {
      "mnemonic": "ELM의 두 길: 중심(Central) = 꼼꼼히 읽기, 주변(Peripheral) = 대충 넘기기",
      "differential": "ELM은 설득 경로를 설명하고, 인지부조화 이론은 내적 모순에 의한 태도 변화를 설명한다.",
      "key_point": "중심 경로로 형성된 태도는 더 지속적이고 행동과 일관적이며 반박에 강하지만, 주변 경로로 형성된 태도는 일시적이고 변화하기 쉽다.",
      "common_mistake": "두 경로가 완전히 독립적이라고 오해하지만, 실제로는 동시에 작용하거나 상호작용할 수 있으며 연속선상에 있다."
    }
  },
  {
    "id": "SOCIAL_FITD_022",
    "terminology": "문앞에발들여놓기기법 (Foot-in-the-Door Technique)",
    "terminology_ko": "문앞에발들여놓기기법",
    "terminology_en": "Foot-in-the-Door Technique",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "작은 요청에 먼저 동의하게 한 뒤 점차 더 큰 요청을 하여 수락을 이끌어내는 순응 기법으로, 자기지각이론과 일관성 원리에 기반한다.",
    "definition_en": "A compliance technique involving first gaining agreement to a small request, then gradually escalating to a larger request, based on self-perception theory and the principle of consistency.",
    "significance": "판매, 기부 요청, 건강 행동 촉진 등 다양한 실용 영역에서 효과적인 설득 전략으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "조너선 프리드먼",
        "name_en": "Jonathan Freedman",
        "contribution": "Scott Fraser와 함께 1966년 문앞에발들여놓기기법의 효과를 최초로 실험적으로 입증했다."
      },
      {
        "name_ko": "스콧 프레이저",
        "name_en": "Scott Fraser",
        "contribution": "Jonathan Freedman과 공동으로 가정 방문 실험을 통해 작은 요청 수락이 이후 큰 요청 수락 가능성을 높임을 확인했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발밑에문넣기기법",
        "name_en": "Door-in-the-Face Technique",
        "id": "SOCIAL_DITF_023"
      },
      {
        "name_ko": "설득",
        "name_en": "Persuasion",
        "id": "SOCIAL_PERS_018"
      },
      {
        "name_ko": "인지부조화",
        "name_en": "Cognitive Dissonance",
        "id": "SOCIAL_CD_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FITD: 발(foot)을 문(door) 안에 넣으면 → 작은 것부터 시작 → 점점 커진다",
      "differential": "문앞에발들여놓기는 작은 요청 → 큰 요청(상향식)이고, 발밑에문넣기는 큰 요청 → 작은 요청(하향식)이다.",
      "key_point": "작동 원리: 작은 요청 수락 → '나는 도움을 주는 사람'이라는 자기지각 형성 → 일관성 유지를 위해 후속 큰 요청도 수락.",
      "common_mistake": "단순히 요청 크기만 관계된다고 오해하지만, 첫 번째 요청과 두 번째 요청의 관련성이 기법의 효과에 중요하다."
    }
  },
  {
    "id": "SOCIAL_DITF_023",
    "terminology": "발밑에문넣기기법 (Door-in-the-Face Technique)",
    "terminology_ko": "발밑에문넣기기법",
    "terminology_en": "Door-in-the-Face Technique",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "처음에 거절당할 것이 확실한 매우 큰 요청을 한 뒤, 실제 목표인 더 작은 요청을 제시하여 수락을 이끌어내는 순응 기법으로, 상호성 규범과 양보의 원리에 기반한다.",
    "definition_en": "A compliance technique involving first making a large request that is certain to be rejected, then presenting a smaller target request, based on the norm of reciprocity and the principle of reciprocal concessions.",
    "significance": "협상, 외교, 판매 등에서 널리 사용되는 전략으로, 상호성 규범의 강력한 영향력을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "로버트 칠디니",
        "name_en": "Robert Cialdini",
        "contribution": "1975년 실험을 통해 발밑에문넣기기법의 효과를 최초로 입증하고, 상호적 양보(reciprocal concessions) 원리로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "문앞에발들여놓기기법",
        "name_en": "Foot-in-the-Door Technique",
        "id": "SOCIAL_FITD_022"
      },
      {
        "name_ko": "설득",
        "name_en": "Persuasion",
        "id": "SOCIAL_PERS_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DITF: 문(door)이 얼굴(face)에 닫힘 → 거절당한 후 → 양보해서 작은 것 요청",
      "differential": "발밑에문넣기는 큰 요청 → 작은 요청(하향식)이고, 문앞에발들여놓기는 작은 요청 → 큰 요청(상향식)이다.",
      "key_point": "작동 원리: 상대가 큰 요청을 거절 → 요청자가 작은 요청으로 양보 → 상대도 상호성 규범에 따라 양보(수락)해야 한다고 느낀다.",
      "common_mistake": "두 요청 사이의 시간 간격이 길어도 효과가 유지된다고 오해하지만, 시간이 지나면 상호성 의무감이 줄어들어 효과가 감소한다."
    }
  },
  {
    "id": "SOCIAL_GP_024",
    "terminology": "집단극화 (Group Polarization)",
    "terminology_ko": "집단극화",
    "terminology_en": "Group Polarization",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "집단 토론 후 구성원들의 의견이 토론 전보다 더 극단적인 방향으로 이동하는 현상으로, 토론이 기존 입장을 강화하는 효과를 가진다.",
    "definition_en": "The tendency for group discussion to shift members' opinions toward more extreme positions than they held before discussion, such that discussion strengthens the prevailing initial tendency.",
    "significance": "배심원 평의, 정치적 의사결정, 온라인 커뮤니티 등에서 극단화가 발생하는 기제를 설명하며, 민주적 의사결정의 잠재적 위험을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "제임스 스토너",
        "name_en": "James Stoner",
        "contribution": "1961년 집단 의사결정에서 위험 이동(risky shift) 현상을 발견하여 집단극화 연구의 시초를 마련했다."
      },
      {
        "name_ko": "데이비드 마이어스",
        "name_en": "David Myers",
        "contribution": "집단극화 현상을 체계적으로 연구하고, 사회비교 설명과 설득적 논거 설명을 통합하여 이론화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단사고",
        "name_en": "Groupthink",
        "id": "SOCIAL_GT_010"
      },
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      },
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "극화(polarization) = 양극(pole)으로 이동 → 토론하면 더 극단적이 된다",
      "differential": "집단극화는 개인의 기존 입장이 극단화되는 것이고, 집단사고는 합의 추구가 비판적 사고를 억압하는 것이다.",
      "key_point": "두 가지 설명 기제: (1) 설득적 논거 이론 — 토론에서 자기 입장을 지지하는 새로운 논거를 접함, (2) 사회비교 이론 — 집단 규범에 맞추거나 더 나아가려는 동기.",
      "common_mistake": "집단극화가 항상 위험한 방향으로만 작용한다고 오해하지만, 기존 입장이 보수적이면 더 보수적으로, 진보적이면 더 진보적으로 극화된다."
    }
  },
  {
    "id": "SOCIAL_NSI_025",
    "terminology": "규범적 사회영향 (Normative Social Influence)",
    "terminology_ko": "규범적 사회영향",
    "terminology_en": "Normative Social Influence",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "집단에 소속되고 수용받기 위해, 또는 거부나 처벌을 피하기 위해 집단의 기대에 맞추어 행동을 변화시키는 사회적 영향이다.",
    "definition_en": "Social influence that involves conforming to group expectations in order to gain acceptance, belong to the group, or avoid rejection and punishment.",
    "significance": "유행, 또래 압력, 집단 내 규범 준수 등 다양한 사회적 동조 행동의 동기적 기반을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "모턴 도이치",
        "name_en": "Morton Deutsch",
        "contribution": "Harold Gerard와 함께 1955년 규범적 사회영향과 정보적 사회영향의 구분을 체계화했다."
      },
      {
        "name_ko": "해럴드 제라드",
        "name_en": "Harold Gerard",
        "contribution": "Morton Deutsch와 공동으로 두 가지 사회적 영향의 유형을 구분하는 이론적 틀을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정보적 사회영향",
        "name_en": "Informational Social Influence",
        "id": "SOCIAL_ISI_026"
      },
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      },
      {
        "name_ko": "복종",
        "name_en": "Obedience",
        "id": "SOCIAL_OBED_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "규범적 = 규범(norm)에 맞추기 = '끼어들고 싶어서(소속)' 따라간다",
      "differential": "규범적 사회영향은 소속 욕구에 의한 것이고, 정보적 사회영향은 정확한 판단 욕구에 의한 것이다.",
      "key_point": "Asch의 선분 실험은 주로 규범적 사회영향을 보여주고(답을 알면서도 동조), Sherif의 자동운동 실험은 주로 정보적 사회영향을 보여준다(답을 모르니 타인 참조).",
      "common_mistake": "규범적 영향이 항상 피상적 순응만 낳는다고 오해하지만, 장기간 규범적 영향을 받으면 내면화(internalization)로 이어질 수 있다."
    }
  },
  {
    "id": "SOCIAL_ISI_026",
    "terminology": "정보적 사회영향 (Informational Social Influence)",
    "terminology_ko": "정보적 사회영향",
    "terminology_en": "Informational Social Influence",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "정확한 판단이나 행동을 하기 위해 타인의 의견이나 행동을 정보의 원천으로 활용하여 자신의 행동이나 태도를 변화시키는 사회적 영향이다.",
    "definition_en": "Social influence that involves using others' opinions or behaviors as a source of information in order to make accurate judgments or behave correctly.",
    "significance": "모호하거나 불확실한 상황에서의 의사결정 과정을 설명하며, 전문가 의견 수용, 구전 효과 등의 기제를 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "모턴 도이치",
        "name_en": "Morton Deutsch",
        "contribution": "Harold Gerard와 함께 정보적 사회영향 개념을 규범적 사회영향과 구분하여 체계화했다."
      },
      {
        "name_ko": "무자퍼 셰리프",
        "name_en": "Muzafer Sherif",
        "contribution": "자동운동 효과 실험을 통해 모호한 상황에서 타인의 판단이 정보적 기준으로 기능함을 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      },
      {
        "name_ko": "동조",
        "name_en": "Conformity",
        "id": "SOCIAL_CONF_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정보적 = 정보(info)가 필요해서 = '모르니까' 타인을 참고한다",
      "differential": "정보적 사회영향은 '정확하고 싶어서' 따르는 것이고, 규범적 사회영향은 '소속되고 싶어서' 따르는 것이다.",
      "key_point": "Sherif의 자동운동 실험에서 참가자들은 모호한 상황(실제로는 정지해 있는 빛점)에서 타인의 판단을 참고하여 자신의 판단을 수정했다.",
      "common_mistake": "정보적 영향은 합리적이므로 편향이 없다고 오해하지만, 다원적 무지(pluralistic ignorance)처럼 잘못된 정보에 기반한 동조도 발생할 수 있다."
    }
  },
  {
    "id": "SOCIAL_DEIND_027",
    "terminology": "몰개성화 (Deindividuation)",
    "terminology_ko": "몰개성화",
    "terminology_en": "Deindividuation",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "개인이 집단 속에서 익명성을 느끼며 자기인식과 자기규제가 약화되어 평소와 다른 충동적이거나 반규범적 행동을 보이는 현상이다.",
    "definition_en": "A psychological state in which individuals within a group feel anonymous, leading to diminished self-awareness and self-regulation, resulting in impulsive or counternormative behavior.",
    "significance": "군중 폭력, 온라인 악성 댓글, 폭동 등 집단 내 반사회적 행동의 심리적 기제를 설명하며, 익명성이 행동에 미치는 영향을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "필립 짐바르도",
        "name_en": "Philip Zimbardo",
        "contribution": "몰개성화 개념을 발전시키고, 스탠퍼드 감옥 실험(1971)을 통해 역할과 상황이 개인 행동에 미치는 강력한 영향을 보여주었다."
      },
      {
        "name_ko": "레온 페스팅거",
        "name_en": "Leon Festinger",
        "contribution": "1952년 몰개성화(deindividuation)라는 용어를 최초로 사용했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회적 태만",
        "name_en": "Social Loafing",
        "id": "SOCIAL_SL_009"
      },
      {
        "name_ko": "공격성",
        "name_en": "Aggression",
        "id": "SOCIAL_AGG_016"
      },
      {
        "name_ko": "방관자 효과",
        "name_en": "Bystander Effect",
        "id": "SOCIAL_BYST_014"
      },
      {
        "name_ko": "복종",
        "name_en": "Obedience",
        "id": "SOCIAL_OBED_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "몰개성화 = 개성(individuality)이 몰(없어짐) → 집단 속에서 '나'가 사라진다",
      "differential": "몰개성화는 자기인식의 저하로 인한 행동 변화이고, 사회적 태만은 노력 감소 현상이다. 둘 다 집단 내에서 발생하지만 기제가 다르다.",
      "key_point": "Zimbardo의 스탠퍼드 감옥 실험: 정상적인 대학생들이 '교도관' 역할을 맡자 가학적 행동을 보여, 상황의 힘과 몰개성화의 효과를 극적으로 보여주었다.",
      "common_mistake": "몰개성화가 반드시 반사회적 행동으로 이어진다고 오해하지만, 집단 규범이 친사회적일 경우 친사회적 행동이 촉진될 수도 있다."
    }
  },
  {
    "id": "SOCIAL_DISC_028",
    "terminology": "차별 (Discrimination)",
    "terminology_ko": "차별",
    "terminology_en": "Discrimination",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "특정 집단 소속을 이유로 그 집단의 구성원에게 부당한 부정적 행동을 취하는 것으로, 편견의 행동적 표현이다.",
    "definition_en": "Unjustified negative behavior toward members of a group based solely on their group membership, representing the behavioral expression of prejudice.",
    "significance": "인종차별, 성차별, 연령차별 등 사회적 불평등의 직접적 표현이며, 법적 규제와 사회적 개입의 대상이 된다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "편견에서 차별까지의 5단계 모형(반감 표현, 회피, 차별, 물리적 공격, 학살)을 제안했다."
      },
      {
        "name_ko": "제인 엘리엇",
        "name_en": "Jane Elliott",
        "contribution": "1968년 '파란 눈/갈색 눈' 수업을 통해 차별의 자의성과 해로움을 체험적으로 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편견",
        "name_en": "Prejudice",
        "id": "SOCIAL_PREJ_011"
      },
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "내집단 편향",
        "name_en": "In-Group Bias",
        "id": "SOCIAL_IGB_013"
      },
      {
        "name_ko": "접촉가설",
        "name_en": "Contact Hypothesis",
        "id": "SOCIAL_CH_029"
      }
    ],
    "sub_types": [
      {
        "name_ko": "개인적 차별",
        "name_en": "Individual Discrimination",
        "description": "개인이 의도적으로 특정 집단 구성원에게 불리한 행동을 취하는 것"
      },
      {
        "name_ko": "제도적 차별",
        "name_en": "Institutional Discrimination",
        "description": "법률, 관행, 정책 등 사회 구조에 내재된 체계적 차별"
      }
    ],
    "quiz_hints": {
      "mnemonic": "편견(태도) → 차별(행동): 마음의 편향이 행동으로 나오면 차별",
      "differential": "편견은 태도(정서적 경향)이고, 차별은 행동(실제 부당한 대우)이다. 편견 없이도 제도적 차별에 참여할 수 있다.",
      "key_point": "Allport의 5단계: (1) 반감 표현(antilocution) (2) 회피(avoidance) (3) 차별(discrimination) (4) 물리적 공격(physical attack) (5) 학살(extermination).",
      "common_mistake": "차별이 항상 의도적이라고 오해하지만, 비의도적·무의식적 차별(미시적 공격, microaggression)도 존재하며 누적적 해를 끼칠 수 있다."
    }
  },
  {
    "id": "SOCIAL_CH_029",
    "terminology": "접촉가설 (Contact Hypothesis)",
    "terminology_ko": "접촉가설",
    "terminology_en": "Contact Hypothesis",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "특정 조건(동등한 지위, 공동 목표, 협력, 제도적 지지)을 충족하는 집단 간 접촉이 편견을 감소시킬 수 있다는 가설이다.",
    "definition_en": "The hypothesis that intergroup contact under specific conditions (equal status, common goals, cooperation, institutional support) can reduce prejudice between groups.",
    "significance": "인종 통합 정책, 다문화 교육, 평화 구축 프로그램 등의 이론적 기반이 되며, 편견 감소를 위한 가장 널리 연구된 전략이다.",
    "key_researchers": [
      {
        "name_ko": "고든 올포트",
        "name_en": "Gordon Allport",
        "contribution": "1954년 《편견의 본질》에서 접촉가설을 최초로 체계적으로 제안하고, 효과적인 접촉의 조건을 명시했다."
      },
      {
        "name_ko": "토마스 페티그류",
        "name_en": "Thomas Pettigrew",
        "contribution": "접촉가설에 대한 대규모 메타분석을 수행하여, 접촉이 편견 감소에 효과적이며 Allport의 조건이 효과를 촉진하지만 필수적이지는 않음을 확인했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편견",
        "name_en": "Prejudice",
        "id": "SOCIAL_PREJ_011"
      },
      {
        "name_ko": "차별",
        "name_en": "Discrimination",
        "id": "SOCIAL_DISC_028"
      },
      {
        "name_ko": "고정관념",
        "name_en": "Stereotype",
        "id": "SOCIAL_STER_012"
      },
      {
        "name_ko": "내집단 편향",
        "name_en": "In-Group Bias",
        "id": "SOCIAL_IGB_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "접촉 4조건: '동공협제' — 동등한 지위, 공동 목표, 협력, 제도적 지지",
      "differential": "접촉가설은 편견 감소를 위한 상호작용 전략이고, 다문화 교육은 지식·인식을 통한 편견 감소 전략이다.",
      "key_point": "Allport의 4가지 최적 조건: (1) 동등한 지위(equal status) (2) 공동 목표(common goals) (3) 집단 간 협력(intergroup cooperation) (4) 권위의 지지(authority sanction).",
      "common_mistake": "단순한 접촉만으로 편견이 줄어든다고 오해하지만, 조건이 충족되지 않은 접촉은 오히려 편견을 강화할 수 있다."
    }
  },
  {
    "id": "SOCIAL_PD_030",
    "terminology": "죄수의 딜레마 (Prisoner's Dilemma)",
    "terminology_ko": "죄수의 딜레마",
    "terminology_en": "Prisoner's Dilemma",
    "category": "SOCIAL",
    "category_name": "사회심리 (Social Psychology)",
    "definition": "두 사람이 각자의 이익만을 추구하면 모두에게 불리한 결과가 초래되고, 협력하면 모두에게 유리한 결과를 얻을 수 있는 사회적 딜레마 상황의 대표적 모형이다.",
    "definition_en": "A classic model of social dilemma in which two individuals pursuing their own self-interest each produce a worse outcome for both, while mutual cooperation would yield a better outcome for both.",
    "significance": "협력과 갈등, 신뢰의 형성, 국제관계, 환경문제 등 다양한 사회적 딜레마 상황의 분석 틀을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "메릴 플러드",
        "name_en": "Merrill Flood",
        "contribution": "Melvin Dresher와 함께 1950년 RAND 연구소에서 죄수의 딜레마 게임을 최초로 고안했다."
      },
      {
        "name_ko": "로버트 액설로드",
        "name_en": "Robert Axelrod",
        "contribution": "반복적 죄수의 딜레마 토너먼트를 통해 '팃포탯(Tit-for-Tat)' 전략의 효과성을 입증하고, 협력의 진화를 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이타행동",
        "name_en": "Altruism",
        "id": "SOCIAL_ALT_015"
      },
      {
        "name_ko": "규범적 사회영향",
        "name_en": "Normative Social Influence",
        "id": "SOCIAL_NSI_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "죄수 A, B 모두 배신하면 둘 다 감옥, 모두 협력하면 둘 다 이익 — '서로 믿으면 이긴다'",
      "differential": "죄수의 딜레마는 2인 간 갈등 모형이고, 공유지의 비극(Tragedy of the Commons)은 다수의 공유 자원 딜레마이다.",
      "key_point": "Axelrod의 토너먼트에서 가장 성공적인 전략은 '팃포탯(Tit-for-Tat)': 첫 수에서 협력하고, 이후 상대의 이전 행동을 그대로 따라하는 단순 전략.",
      "common_mistake": "항상 배신이 합리적이라고 오해하지만, 반복적 상호작용에서는 협력이 장기적으로 더 유리하다."
    }
  }
];

TERMS_DATA.ABNORM = [
  {
    "id": "ABNORM_AB_001",
    "terminology": "이상행동 (Abnormal Behavior)",
    "terminology_ko": "이상행동",
    "terminology_en": "Abnormal Behavior",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "통계적 비정상성, 사회적 규범 일탈, 주관적 고통, 기능 손상 등의 기준에 의해 정상 범주에서 벗어난 것으로 판단되는 행동으로, 문화와 시대에 따라 그 기준이 달라질 수 있다.",
    "definition_en": "Behavior judged to deviate from the normal range based on criteria such as statistical infrequency, violation of social norms, subjective distress, and functional impairment, with standards varying across cultures and historical periods.",
    "significance": "이상심리학의 핵심 개념으로, 무엇을 '이상'으로 규정할 것인가의 문제는 진단, 치료, 사회적 낙인과 직결되며, 정상과 이상의 경계에 대한 지속적 논의를 촉발한다.",
    "key_researchers": [
      {
        "name_ko": "토머스 사스",
        "name_en": "Thomas Szasz",
        "contribution": "『정신질환이라는 신화(The Myth of Mental Illness)』에서 이상행동의 사회적 구성 측면을 비판적으로 분석했다."
      },
      {
        "name_ko": "데이비드 로젠한",
        "name_en": "David Rosenhan",
        "contribution": "로젠한 실험(1973)을 통해 정상과 이상의 구분이 얼마나 맥락 의존적인지를 실증적으로 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신장애",
        "name_en": "Mental Disorder",
        "id": "ABNORM_MD_002"
      },
      {
        "name_ko": "DSM",
        "name_en": "DSM",
        "id": "ABNORM_DSM_003"
      },
      {
        "name_ko": "낙인",
        "name_en": "Stigma",
        "id": "ABNORM_STIG_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이상행동의 4D: Deviance(일탈), Distress(고통), Dysfunction(기능장애), Danger(위험)",
      "differential": "이상행동은 넓은 상위 개념이고, 정신장애는 진단 기준을 충족하는 구체적 분류이다.",
      "key_point": "이상행동의 판단은 단일 기준이 아닌 통계적, 사회적, 주관적, 기능적 기준의 복합적 적용이 필요하다.",
      "common_mistake": "이상행동이 곧 정신장애를 의미한다고 오해하지만, 모든 이상행동이 정신장애로 진단되는 것은 아니다."
    }
  },
  {
    "id": "ABNORM_MD_002",
    "terminology": "정신장애 (Mental Disorder)",
    "terminology_ko": "정신장애",
    "terminology_en": "Mental Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "인지, 정서 조절, 행동에서의 임상적으로 유의미한 장해로, 심리적·생물학적·발달적 과정의 기능 이상을 반영하며, 사회적·직업적 기능에 중대한 고통이나 손상을 초래하는 증후군이다.",
    "definition_en": "A syndrome characterized by clinically significant disturbance in cognition, emotion regulation, or behavior that reflects a dysfunction in psychological, biological, or developmental processes and causes significant distress or impairment in social or occupational functioning.",
    "significance": "정신건강 분야의 기본 단위로, 진단 체계(DSM, ICD)의 대상이 되며, 치료 계획, 보험 적용, 법적 판단의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "현대 정신장애 분류 체계의 토대를 마련하여, 조발성 치매(현 조현병)와 조울병을 구분하는 등 체계적 분류를 시도했다."
      },
      {
        "name_ko": "제롬 웨이크필드",
        "name_en": "Jerome Wakefield",
        "contribution": "'유해한 기능장애(harmful dysfunction)' 개념을 제안하여 정신장애의 정의에 대한 이론적 논의를 심화시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "ABNORM_AB_001"
      },
      {
        "name_ko": "DSM",
        "name_en": "DSM",
        "id": "ABNORM_DSM_003"
      },
      {
        "name_ko": "의학 모형",
        "name_en": "Medical Model",
        "id": "ABNORM_MEDM_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정신장애 = 고통(Distress) + 기능 손상(Disability) + 기능 이상(Dysfunction)의 3D",
      "differential": "정신장애는 공식 진단 체계에 의해 분류되는 개념이고, 이상행동은 보다 넓고 비공식적인 개념이다.",
      "key_point": "DSM-5에서의 정신장애 정의는 '개인 내부의 기능 이상'을 강조하여, 단순한 사회적 일탈이나 갈등은 정신장애에 해당하지 않는다.",
      "common_mistake": "정신장애가 반드시 생물학적 원인에 의한 '질병'이라고 단정하는 오류를 범하기 쉬우나, 심리사회적 요인도 중요한 역할을 한다."
    }
  },
  {
    "id": "ABNORM_DSM_003",
    "terminology": "DSM (Diagnostic and Statistical Manual of Mental Disorders)",
    "terminology_ko": "DSM",
    "terminology_en": "Diagnostic and Statistical Manual of Mental Disorders",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "미국정신의학회(APA)가 발행하는 정신장애의 진단 및 통계 편람으로, 정신장애의 분류 기준과 진단 코드를 제공하며, 현재 DSM-5-TR(2022)이 최신판이다.",
    "definition_en": "The Diagnostic and Statistical Manual of Mental Disorders published by the American Psychiatric Association (APA), providing classification criteria and diagnostic codes for mental disorders, with DSM-5-TR (2022) being the current edition.",
    "significance": "전 세계적으로 가장 널리 사용되는 정신장애 진단 체계로, 임상 실무, 연구, 교육의 공통 언어를 제공하며, 보험 체계와 법률에도 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "DSM-III(1980)의 주편집자로서 조작적 진단 기준과 다축 체계를 도입하여 현대 정신과 진단의 패러다임을 확립했다."
      },
      {
        "name_ko": "앨런 프랜시스",
        "name_en": "Allen Frances",
        "contribution": "DSM-IV의 편집위원장을 역임했으며, 이후 DSM-5의 진단 범위 확대에 대해 비판적 논의를 이끌었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신장애",
        "name_en": "Mental Disorder",
        "id": "ABNORM_MD_002"
      },
      {
        "name_ko": "의학 모형",
        "name_en": "Medical Model",
        "id": "ABNORM_MEDM_017"
      },
      {
        "name_ko": "생물심리사회 모형",
        "name_en": "Biopsychosocial Model",
        "id": "ABNORM_BPS_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DSM = Diagnostic(진단) + Statistical(통계) + Manual(편람) — APA가 발행하는 정신장애의 '분류 사전'",
      "differential": "DSM은 미국정신의학회 발행이고, ICD(국제질병분류)는 WHO가 발행하는 국제 표준이다.",
      "key_point": "DSM-5(2013)에서 다축 체계를 폐지하고 차원적 평가를 도입하여, 범주적 진단과 차원적 접근을 통합하려 시도했다.",
      "common_mistake": "DSM이 정신장애의 원인을 설명한다고 오해하지만, DSM은 증상 기반의 기술적(descriptive) 분류 체계이다."
    }
  },
  {
    "id": "ABNORM_GAD_004",
    "terminology": "범불안장애 (Generalized Anxiety Disorder)",
    "terminology_ko": "범불안장애",
    "terminology_en": "Generalized Anxiety Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "다양한 사건이나 활동에 대해 과도하고 통제하기 어려운 걱정이 최소 6개월 이상 지속되며, 근육 긴장, 수면장애, 안절부절못함 등의 신체 증상을 동반하는 불안장애이다.",
    "definition_en": "An anxiety disorder characterized by excessive, difficult-to-control worry about a variety of events or activities persisting for at least six months, accompanied by physical symptoms such as muscle tension, sleep disturbance, and restlessness.",
    "significance": "불안장애 중 가장 만성적인 경과를 보이며, 다른 불안장애나 우울장애와의 높은 공존이환율로 인해 감별진단과 통합적 치료 접근이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "토머스 보코벡",
        "name_en": "Thomas Borkovec",
        "contribution": "걱정의 인지적 회피 이론을 제안하여 범불안장애에서 걱정이 정서적 처리를 회피하는 기능을 한다고 설명했다."
      },
      {
        "name_ko": "미셸 뒤가",
        "name_en": "Michel Dugas",
        "contribution": "불확실성에 대한 인내력 부족(intolerance of uncertainty)을 범불안장애의 핵심 인지적 취약성으로 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ABNORM_PD_005"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ABNORM_SAD_020"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "ABNORM_MDD_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "GAD = General(광범위한) + Anxiety(불안) + Disorder(장애) — '무엇이든 걱정하는 장애'",
      "differential": "공황장애는 갑작스러운 공황발작이 특징인 반면, 범불안장애는 만성적이고 광범위한 걱정이 지속된다.",
      "key_point": "범불안장애의 진단에서 '통제하기 어려운 걱정'이 핵심이며, 6개월 이상의 지속 기간이 요구된다.",
      "common_mistake": "일상적인 걱정과 범불안장애를 혼동하기 쉬우나, 범불안장애는 걱정의 강도, 빈도, 통제 불능성에서 질적으로 다르다."
    }
  },
  {
    "id": "ABNORM_PD_005",
    "terminology": "공황장애 (Panic Disorder)",
    "terminology_ko": "공황장애",
    "terminology_en": "Panic Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "예기치 않은 반복적 공황발작(심계항진, 호흡곤란, 어지러움, 죽을 것 같은 공포 등)이 나타나며, 추가 발작에 대한 지속적 걱정이나 발작과 관련된 행동 변화를 동반하는 불안장애이다.",
    "definition_en": "An anxiety disorder characterized by recurrent unexpected panic attacks (palpitations, shortness of breath, dizziness, fear of dying, etc.) accompanied by persistent concern about additional attacks or significant behavioral changes related to the attacks.",
    "significance": "급성 불안의 극단적 형태로, 광장공포증과의 공존이 흔하며, 인지행동치료(CBT)의 효과가 가장 잘 입증된 장애 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "공황장애의 인지 모형을 제안하여, 신체 감각에 대한 파국적 해석이 공황발작을 유발하고 유지시킨다고 설명했다."
      },
      {
        "name_ko": "데이비드 발로",
        "name_en": "David H. Barlow",
        "contribution": "공황 통제 치료(Panic Control Treatment)를 개발하여 인지 재구성, 호흡 재훈련, 내부감각 노출을 통합한 치료법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ABNORM_GAD_004"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ABNORM_AGOR_021"
      },
      {
        "name_ko": "공포증",
        "name_en": "Phobia",
        "id": "ABNORM_PHO_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공황발작의 핵심 = PUSH: Palpitations(심계항진), Unreality(비현실감), Shortness of breath(호흡곤란), Hot flashes(열감)",
      "differential": "공황장애는 '예기치 않은' 발작이 핵심이고, 특정공포증의 공황은 특정 자극에 의해 '예상 가능하게' 유발된다.",
      "key_point": "공황발작 자체가 공황장애는 아니며, 반복적 발작 + 발작에 대한 지속적 걱정/행동 변화가 있어야 진단된다.",
      "common_mistake": "공황발작을 심장마비로 오인하여 응급실을 방문하는 경우가 많으나, 공황발작은 의학적으로 위험하지 않다."
    }
  },
  {
    "id": "ABNORM_PHO_006",
    "terminology": "공포증 (Phobia)",
    "terminology_ko": "공포증",
    "terminology_en": "Phobia",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "특정 대상, 상황, 활동에 대한 비합리적이고 과도한 공포로, 공포 대상을 적극적으로 회피하거나 극심한 불안 속에서 견디며, 일상 기능에 유의미한 지장을 초래하는 장애이다.",
    "definition_en": "A disorder involving irrational and excessive fear of a specific object, situation, or activity, leading to active avoidance or endurance with intense anxiety, causing significant impairment in daily functioning.",
    "significance": "가장 흔한 불안장애로, 체계적 둔감화, 노출 치료 등 행동주의 치료 기법의 효과가 잘 입증되어 있으며, 학습 이론의 임상적 적용을 대표한다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "리틀 앨버트 실험(1920)을 통해 공포 반응이 고전적 조건형성으로 학습될 수 있음을 실증했다."
      },
      {
        "name_ko": "조지프 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "체계적 둔감화(systematic desensitization) 기법을 개발하여 공포증의 행동주의적 치료법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ABNORM_SP_019"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ABNORM_SAD_020"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ABNORM_AGOR_021"
      }
    ],
    "sub_types": [
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "description": "특정 대상이나 상황(동물, 높이, 혈액 등)에 대한 공포"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "description": "사회적 상황에서의 평가에 대한 공포"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "description": "탈출이 어렵거나 도움을 받기 힘든 상황에 대한 공포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "공포증의 3요소: 비합리적 공포(Fear) + 회피(Avoidance) + 기능 손상(Impairment)",
      "differential": "정상적 공포는 적응적이고 비례적인 반면, 공포증은 비합리적이고 과도하며 기능 손상을 야기한다.",
      "key_point": "Mowrer의 2요인 이론에 의하면, 공포는 고전적 조건형성으로 학습되고 조작적 조건형성(회피의 부적 강화)으로 유지된다.",
      "common_mistake": "모든 강한 공포가 공포증인 것은 아니며, 진단을 위해서는 비합리성, 회피 행동, 일상 기능 저해가 동반되어야 한다."
    }
  },
  {
    "id": "ABNORM_OCD_007",
    "terminology": "강박장애 (Obsessive-Compulsive Disorder, OCD)",
    "terminology_ko": "강박장애",
    "terminology_en": "Obsessive-Compulsive Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "반복적이고 침습적인 사고(강박사고)와 그에 따른 불안을 줄이기 위해 수행하는 반복적 행동이나 정신적 행위(강박행동)를 특징으로 하며, 상당한 시간을 소모하거나 심각한 고통을 유발하는 장애이다.",
    "definition_en": "A disorder characterized by recurrent, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce the resulting anxiety, consuming significant time or causing marked distress.",
    "significance": "DSM-5에서 불안장애에서 분리되어 '강박 및 관련 장애' 범주로 독립 분류되었으며, 신경생물학적 기반(기저핵-전두엽 회로)이 비교적 잘 규명된 장애이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 래포포트",
        "name_en": "Judith Rapoport",
        "contribution": "아동기 강박장애 연구의 선구자로, OCD의 신경생물학적 기반을 탐구했다."
      },
      {
        "name_ko": "폴 살코브스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "강박사고에 대한 과도한 책임감(inflated responsibility)이 OCD의 핵심 인지 요인이라는 인지 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ABNORM_GAD_004"
      },
      {
        "name_ko": "외상후 스트레스장애",
        "name_en": "PTSD",
        "id": "ABNORM_PTSD_008"
      }
    ],
    "sub_types": [
      {
        "name_ko": "오염 강박",
        "name_en": "Contamination OCD",
        "description": "오염에 대한 강박사고와 과도한 씻기/청소 강박행동"
      },
      {
        "name_ko": "확인 강박",
        "name_en": "Checking OCD",
        "description": "위험에 대한 의심과 반복적 확인 행동"
      },
      {
        "name_ko": "대칭/정리 강박",
        "name_en": "Symmetry/Ordering OCD",
        "description": "대칭, 정확성, 순서에 대한 강박과 정렬 행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "OCD = Obsession(강박사고: 침습적 생각) → Compulsion(강박행동: 불안 감소 위한 행동) → Distress(고통)",
      "differential": "OCPD(강박성 성격장애)는 자아동조적(ego-syntonic)이고 완벽주의가 주된 특징인 반면, OCD는 자아이질적(ego-dystonic)이며 침습적 사고에 고통을 느낀다.",
      "key_point": "DSM-5에서 OCD는 불안장애가 아닌 '강박 및 관련 장애'로 독립 분류되었다.",
      "common_mistake": "'깔끔한 것을 좋아하면 OCD'라는 일상적 표현은 부정확하며, 진정한 OCD는 침습적이고 고통스러운 강박사고가 핵심이다."
    }
  },
  {
    "id": "ABNORM_PTSD_008",
    "terminology": "외상후 스트레스장애 (Post-Traumatic Stress Disorder, PTSD)",
    "terminology_ko": "외상후 스트레스장애",
    "terminology_en": "Post-Traumatic Stress Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "실제 또는 위협적인 죽음, 심각한 부상, 성폭력에 노출된 후 침습적 재경험(플래시백, 악몽), 회피, 인지·감정의 부정적 변화, 과각성 증상이 1개월 이상 지속되는 외상 관련 장애이다.",
    "definition_en": "A trauma-related disorder following exposure to actual or threatened death, serious injury, or sexual violence, characterized by intrusive re-experiencing (flashbacks, nightmares), avoidance, negative alterations in cognition and mood, and hyperarousal symptoms lasting more than one month.",
    "significance": "전쟁, 재난, 성폭력 등 외상 경험의 심리적 영향을 체계화한 진단으로, 외상 중심 인지행동치료와 EMDR의 효과가 잘 입증되어 있다.",
    "key_researchers": [
      {
        "name_ko": "주디스 허먼",
        "name_en": "Judith Herman",
        "contribution": "『트라우마와 회복(Trauma and Recovery)』에서 복합 PTSD 개념을 제안하고, 외상의 사회정치적 맥락을 강조했다."
      },
      {
        "name_ko": "프랜신 샤피로",
        "name_en": "Francine Shapiro",
        "contribution": "EMDR(안구운동 둔감화 및 재처리) 치료법을 개발하여 PTSD 치료의 새로운 접근을 열었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "OCD",
        "id": "ABNORM_OCD_007"
      },
      {
        "name_ko": "해리장애",
        "name_en": "Dissociative Disorder",
        "id": "ABNORM_DISS_014"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "ABNORM_MDD_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PTSD의 4대 증상군: RAIN — Re-experiencing(재경험), Avoidance(회피), negative alterations In cognition/mood(인지·감정 변화), hyperarousal/Nervous system(과각성)",
      "differential": "급성 스트레스 장애(ASD)는 외상 후 3일~1개월의 증상이고, PTSD는 1개월 이상 지속될 때 진단된다.",
      "key_point": "DSM-5에서 PTSD는 불안장애에서 분리되어 '외상 및 스트레스 관련 장애'로 재분류되었다.",
      "common_mistake": "외상 경험을 한 모든 사람이 PTSD를 발병하는 것은 아니며, 대다수는 자연적 회복을 보인다."
    }
  },
  {
    "id": "ABNORM_MDD_009",
    "terminology": "주요우울장애 (Major Depressive Disorder)",
    "terminology_ko": "주요우울장애",
    "terminology_en": "Major Depressive Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "우울한 기분 또는 흥미·쾌감의 상실이 최소 2주 이상 지속되며, 식욕·수면 변화, 피로, 무가치감, 집중력 저하, 자살 사고 등의 증상을 동반하는 기분장애이다.",
    "definition_en": "A mood disorder characterized by depressed mood or loss of interest/pleasure persisting for at least two weeks, accompanied by changes in appetite and sleep, fatigue, feelings of worthlessness, difficulty concentrating, and suicidal ideation.",
    "significance": "세계적으로 장애 부담이 가장 높은 정신장애 중 하나로, 자살의 주요 위험 요인이며, 약물치료와 심리치료의 통합적 접근이 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "우울증의 인지 삼제(자신, 세계, 미래에 대한 부정적 사고)와 인지적 왜곡 개념을 제안하여 인지치료의 기반을 확립했다."
      },
      {
        "name_ko": "마틴 셀리그먼",
        "name_en": "Martin Seligman",
        "contribution": "학습된 무기력(learned helplessness) 이론을 제안하여 우울증의 원인에 대한 실험적 모형을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지속성 우울장애",
        "name_en": "Persistent Depressive Disorder",
        "id": "ABNORM_PDD_027"
      },
      {
        "name_ko": "양극성 장애",
        "name_en": "Bipolar Disorder",
        "id": "ABNORM_BD_010"
      },
      {
        "name_ko": "계절성 정동장애",
        "name_en": "Seasonal Affective Disorder",
        "id": "ABNORM_SEAS_028"
      }
    ],
    "sub_types": [
      {
        "name_ko": "멜랑콜리아형",
        "name_en": "Melancholic Features",
        "description": "뚜렷한 쾌감 상실, 이른 아침 기상, 정신운동 초조/지체가 두드러지는 하위 유형"
      },
      {
        "name_ko": "비정형",
        "name_en": "Atypical Features",
        "description": "기분 반응성, 과식, 과수면, 납 같은 마비감이 특징적인 하위 유형"
      },
      {
        "name_ko": "정신병적 양상 동반",
        "name_en": "With Psychotic Features",
        "description": "우울 삽화에 망상이나 환각이 동반되는 하위 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "MDD 증상 = SIG E CAPS: Sleep(수면), Interest(흥미), Guilt(죄책감), Energy(에너지), Concentration(집중), Appetite(식욕), Psychomotor(정신운동), Suicidal ideation(자살사고)",
      "differential": "지속성 우울장애(기분저하증)는 경도지만 2년 이상 지속되고, 주요우울장애는 더 심하지만 삽화적이다.",
      "key_point": "진단에는 우울 기분 또는 흥미 상실 중 최소 하나가 반드시 포함되어야 하며, 9개 증상 중 5개 이상이 2주간 지속되어야 한다.",
      "common_mistake": "일시적 슬픔이나 애도 반응을 주요우울장애로 오진하는 오류에 주의해야 한다."
    }
  },
  {
    "id": "ABNORM_BD_010",
    "terminology": "양극성 장애 (Bipolar Disorder)",
    "terminology_ko": "양극성 장애",
    "terminology_en": "Bipolar Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "조증(또는 경조증) 삽화와 우울 삽화가 교대로 나타나는 기분장애로, 조증 삽화에서는 비정상적으로 고양되거나 과민한 기분, 에너지 증가, 수면 욕구 감소, 과대성 등이 나타난다.",
    "definition_en": "A mood disorder characterized by alternating manic (or hypomanic) and depressive episodes, with manic episodes featuring abnormally elevated or irritable mood, increased energy, decreased need for sleep, and grandiosity.",
    "significance": "유전적 기여가 높은 장애(유전율 약 80%)로, 리튬 등 기분안정제가 핵심 치료이며, 단극성 우울증과의 감별이 치료 방향에 중요한 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "조울병(manic-depressive illness)을 조발성 치매(조현병)와 구분하는 이분법적 분류를 확립했다."
      },
      {
        "name_ko": "케이 레드필드 재미슨",
        "name_en": "Kay Redfield Jamison",
        "contribution": "양극성 장애와 창의성의 관계를 탐구하고, 자신의 경험을 토대로 이 장애에 대한 이해를 높이는 데 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "ABNORM_MDD_009"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "ABNORM_SCZ_011"
      },
      {
        "name_ko": "계절성 정동장애",
        "name_en": "Seasonal Affective Disorder",
        "id": "ABNORM_SEAS_028"
      }
    ],
    "sub_types": [
      {
        "name_ko": "양극성 I형 장애",
        "name_en": "Bipolar I Disorder",
        "description": "완전한 조증 삽화가 최소 1회 이상 발생하며, 우울 삽화는 필수가 아님"
      },
      {
        "name_ko": "양극성 II형 장애",
        "name_en": "Bipolar II Disorder",
        "description": "경조증 삽화와 주요우울 삽화가 번갈아 나타나며, 완전한 조증은 없음"
      },
      {
        "name_ko": "순환성 장애",
        "name_en": "Cyclothymic Disorder",
        "description": "경조증과 경도 우울 증상이 2년 이상 만성적으로 교대하는 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "양극성 = 두 극(조증 극 + 우울 극)을 오가는 기분의 시소",
      "differential": "양극성 I형은 조증 삽화가 필수이고, II형은 경조증+주요우울 삽화가 특징이다. 조현병은 기분 삽화 외에 사고장애가 핵심이다.",
      "key_point": "양극성 장애 환자에게 항우울제를 단독 투여하면 조증 전환(manic switch)의 위험이 있어 기분안정제 병용이 필수적이다.",
      "common_mistake": "'기분이 자주 변하면 양극성 장애'라는 인식은 부정확하며, 양극성 장애의 삽화는 일반적으로 수일~수주간 지속된다."
    }
  },
  {
    "id": "ABNORM_SCZ_011",
    "terminology": "조현병 (Schizophrenia)",
    "terminology_ko": "조현병",
    "terminology_en": "Schizophrenia",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "망상, 환각, 와해된 언어, 와해된 행동, 음성증상 중 2개 이상이 1개월 이상 존재하고 전체 장해가 6개월 이상 지속되는 정신병적 장애로, 현실 검증력의 심각한 손상을 특징으로 한다.",
    "definition_en": "A psychotic disorder characterized by two or more of the following—delusions, hallucinations, disorganized speech, disorganized behavior, or negative symptoms—present for at least one month with overall disturbance persisting for six months, involving severe impairment in reality testing.",
    "significance": "정신의학과 이상심리학에서 가장 중요하게 연구되는 장애 중 하나로, 도파민 가설, 신경발달 모형 등 다양한 이론적 모형이 제안되어 왔으며, 약물치료와 심리사회적 재활의 통합이 강조된다.",
    "key_researchers": [
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "'조현병(schizophrenia)'이라는 용어를 처음 사용하고, 4A 증상(연상이완, 정동둔마, 양가감정, 자폐적 사고)을 핵심 특징으로 제안했다."
      },
      {
        "name_ko": "커트 슈나이더",
        "name_en": "Kurt Schneider",
        "contribution": "1급 증상(first-rank symptoms)을 제안하여 조현병의 진단적 특이성을 높이려 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "ABNORM_POS_012"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "ABNORM_NEG_013"
      },
      {
        "name_ko": "양극성 장애",
        "name_en": "Bipolar Disorder",
        "id": "ABNORM_BD_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조현(調絃) = 현악기의 줄을 고르다 → 뇌의 신경 회로 조율이 깨진 상태",
      "differential": "조현병은 6개월 이상 지속되어야 하고, 단기 정신병적 장애는 1일~1개월, 조현양상장애는 1~6개월이다.",
      "key_point": "도파민 가설에 따르면 중변연계(mesolimbic) 도파민 과잉은 양성증상과, 전두엽(mesocortical) 도파민 저하는 음성증상과 관련된다.",
      "common_mistake": "조현병을 '다중인격(해리성 정체감 장애)'과 혼동하는 것은 매우 흔한 오류이다. 조현병은 인격의 분리가 아니라 현실 검증력의 손상이다."
    }
  },
  {
    "id": "ABNORM_POS_012",
    "terminology": "양성증상 (Positive Symptoms)",
    "terminology_ko": "양성증상",
    "terminology_en": "Positive Symptoms",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "정상적으로 존재하지 않는 경험이나 행동이 추가로 나타나는 증상으로, 망상(사고 내용의 장애), 환각(지각의 장애), 와해된 언어, 와해된 또는 긴장증적 행동이 포함된다.",
    "definition_en": "Symptoms reflecting an excess or distortion of normal functions, including delusions (thought content disturbance), hallucinations (perceptual disturbance), disorganized speech, and disorganized or catatonic behavior.",
    "significance": "항정신병 약물(특히 전형적 항정신병 약물)이 양성증상에 효과적이며, 이는 도파민 D2 수용체 차단과 관련된다.",
    "key_researchers": [
      {
        "name_ko": "팀 크로",
        "name_en": "Tim Crow",
        "contribution": "양성증상과 음성증상을 구분하는 Type I/Type II 분류를 제안하여, 양성증상(Type I)이 도파민 과잉과 관련됨을 주장했다."
      },
      {
        "name_ko": "낸시 안드레아센",
        "name_en": "Nancy Andreasen",
        "contribution": "양성 및 음성 증상 평가 척도(SAPS/SANS)를 개발하여 조현병 증상의 체계적 측정에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "ABNORM_NEG_013"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "ABNORM_SCZ_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "망상",
        "name_en": "Delusions",
        "description": "현실과 부합하지 않는 확고한 잘못된 믿음(피해망상, 과대망상, 관계망상 등)"
      },
      {
        "name_ko": "환각",
        "name_en": "Hallucinations",
        "description": "외부 자극 없이 경험하는 감각적 지각(환청이 가장 흔함)"
      },
      {
        "name_ko": "와해된 언어",
        "name_en": "Disorganized Speech",
        "description": "논리적 연결이 깨진 언어(탈선, 지리멸렬, 음향연상 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "양성(Positive) = 정상에 '더해진(+)' 것 — 없어야 할 것이 있는 상태",
      "differential": "양성증상은 '추가된' 이상 경험(환각, 망상)이고, 음성증상은 '결여된' 정상 기능(감정둔마, 의욕 저하)이다.",
      "key_point": "전형적(1세대) 항정신병 약물은 양성증상에 주로 효과적이며, 음성증상에는 제한적이다.",
      "common_mistake": "'양성'이 '좋다'는 의미가 아니라, 정상에 비해 '추가된' 증상이라는 뜻임을 주의해야 한다."
    }
  },
  {
    "id": "ABNORM_NEG_013",
    "terminology": "음성증상 (Negative Symptoms)",
    "terminology_ko": "음성증상",
    "terminology_en": "Negative Symptoms",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "정상적으로 존재해야 할 기능이 감소하거나 소실되는 증상으로, 정서적 둔마(blunted affect), 무의지증(avolition), 무언증(alogia), 무쾌감증(anhedonia), 사회적 위축 등이 포함된다.",
    "definition_en": "Symptoms reflecting a diminution or loss of normal functions, including blunted affect, avolition, alogia, anhedonia, and social withdrawal.",
    "significance": "양성증상에 비해 치료 반응이 저조하고 장기 예후와 기능적 결과에 더 큰 영향을 미치며, 비정형(2세대) 항정신병 약물과 심리사회적 재활이 병행되어야 한다.",
    "key_researchers": [
      {
        "name_ko": "낸시 안드레아센",
        "name_en": "Nancy Andreasen",
        "contribution": "음성증상 평가 척도(SANS)를 개발하고, 음성증상이 조현병의 핵심 특징이라고 주장했다."
      },
      {
        "name_ko": "팀 크로",
        "name_en": "Tim Crow",
        "contribution": "Type II 조현병 개념을 통해 음성증상이 구조적 뇌 이상(뇌실 확대 등)과 관련됨을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "ABNORM_POS_012"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "ABNORM_SCZ_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정서적 둔마",
        "name_en": "Blunted Affect",
        "description": "정서적 표현의 범위와 강도가 현저히 감소한 상태"
      },
      {
        "name_ko": "무의지증",
        "name_en": "Avolition",
        "description": "목표 지향적 활동을 시작하거나 지속하는 동기의 현저한 감소"
      },
      {
        "name_ko": "무쾌감증",
        "name_en": "Anhedonia",
        "description": "이전에 즐거움을 주던 활동에서 쾌감을 경험하지 못하는 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "음성(Negative) = 정상에서 '빼진(-)' 것 — 있어야 할 것이 없는 상태. 5A: Affect(정서둔마), Alogia(무언), Avolition(무의지), Anhedonia(무쾌감), Asociality(비사회성)",
      "differential": "음성증상의 정서 둔마는 우울증의 정서적 고통과 다르다. 우울증은 슬픔을 느끼지만, 음성증상은 감정 자체가 감소한다.",
      "key_point": "음성증상은 조현병의 장기 기능적 예후를 가장 잘 예측하는 지표이며, 치료가 가장 어려운 영역이다.",
      "common_mistake": "음성증상을 우울증이나 약물 부작용과 혼동하기 쉬우며, 정확한 감별이 치료 방향에 중요하다."
    }
  },
  {
    "id": "ABNORM_DISS_014",
    "terminology": "해리장애 (Dissociative Disorder)",
    "terminology_ko": "해리장애",
    "terminology_en": "Dissociative Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "의식, 기억, 정체감, 지각의 통합 기능에 붕괴가 발생하는 장애군으로, 극심한 스트레스나 외상과 관련하여 정상적인 심리 기능의 통합이 깨지는 것을 특징으로 한다.",
    "definition_en": "A group of disorders involving disruptions in the normally integrated functions of consciousness, memory, identity, and perception, typically associated with extreme stress or trauma.",
    "significance": "외상과 방어기제의 관계를 이해하는 데 핵심적인 진단군이며, 해리가 고통스러운 경험으로부터 심리적으로 벗어나려는 방어 기능을 한다는 이론적 관점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "피에르 자네",
        "name_en": "Pierre Janet",
        "contribution": "해리(dissociation) 개념의 선구자로, 외상적 경험이 의식의 분열을 유발한다는 이론을 발전시켰다."
      },
      {
        "name_ko": "에르네스트 힐가드",
        "name_en": "Ernest Hilgard",
        "contribution": "신해리 이론(neodissociation theory)을 통해 의식의 다중 수준과 해리의 메커니즘을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 정체감 장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "ABNORM_DID_029"
      },
      {
        "name_ko": "외상후 스트레스장애",
        "name_en": "PTSD",
        "id": "ABNORM_PTSD_008"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "ABNORM_CONV_024"
      }
    ],
    "sub_types": [
      {
        "name_ko": "해리성 기억상실증",
        "name_en": "Dissociative Amnesia",
        "description": "외상적 또는 스트레스성 사건에 대한 중요한 자전적 정보를 회상하지 못하는 상태"
      },
      {
        "name_ko": "이인증/비현실감 장애",
        "name_en": "Depersonalization/Derealization Disorder",
        "description": "자신이나 주변 환경이 비현실적이거나 낯설게 느껴지는 상태"
      },
      {
        "name_ko": "해리성 정체감 장애",
        "name_en": "Dissociative Identity Disorder",
        "description": "두 개 이상의 뚜렷한 인격 상태가 존재하며, 기억의 불연속이 동반되는 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "해리(解離) = 풀어서(解) 떨어지다(離) → 통합된 심리 기능이 풀어져 분리되는 것",
      "differential": "해리장애는 의식/기억/정체감의 통합 실패이고, 조현병은 현실 검증력의 손상이다. 이 둘은 자주 혼동되지만 근본적으로 다르다.",
      "key_point": "해리는 외상에 대한 방어기제로 기능할 수 있으며, 해리 증상의 심각도는 외상의 중증도와 상관관계를 보인다.",
      "common_mistake": "해리장애를 꾸며내는 것(malingering)으로 오해하는 경우가 있으나, 신경생물학적 연구로 뇌 기능의 실제 변화가 확인되었다."
    }
  },
  {
    "id": "ABNORM_PERS_015",
    "terminology": "성격장애 (Personality Disorder)",
    "terminology_ko": "성격장애",
    "terminology_en": "Personality Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "내적 경험과 행동의 지속적 패턴이 문화적 기대에서 현저히 벗어나며, 인지, 정동, 대인관계 기능, 충동 통제 영역에서 광범위하고 경직된 양상을 보여 유의미한 고통이나 기능 손상을 초래하는 장애이다.",
    "definition_en": "A disorder characterized by an enduring pattern of inner experience and behavior that deviates markedly from cultural expectations, manifesting as pervasive and inflexible patterns in cognition, affectivity, interpersonal functioning, and impulse control, causing significant distress or impairment.",
    "significance": "다른 정신장애와 빈번히 공존이환하며, 치료적 관계 형성과 치료 반응에 영향을 미치기 때문에 임상에서 중요한 진단 영역이다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀론",
        "name_en": "Theodore Millon",
        "contribution": "성격장애의 다축적 분류와 이론적 틀을 체계화하고, 밀론 임상 다축 성격검사(MCMI)를 개발했다."
      },
      {
        "name_ko": "토마스 위디거",
        "name_en": "Thomas Widiger",
        "contribution": "성격장애의 범주적 모형에서 차원적 모형으로의 전환을 주장하며, Big Five 성격 특성과의 연결을 탐구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반사회성 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "ABNORM_ASPD_016"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "ABNORM_BPD_025"
      }
    ],
    "sub_types": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "description": "기이하고 괴벽한 유형(편집성, 조현성, 조현형 성격장애)"
      },
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "description": "극적이고 감정적이며 변덕스러운 유형(반사회성, 경계선, 연극성, 자기애성 성격장애)"
      },
      {
        "name_ko": "C군 성격장애",
        "name_en": "Cluster C Personality Disorders",
        "description": "불안하고 두려움이 많은 유형(회피성, 의존성, 강박성 성격장애)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "성격장애 3군: A=기이(Weird), B=극적(Wild), C=걱정(Worried)",
      "differential": "성격장애는 지속적이고 광범위한 패턴이며, 임상 증후군(Axis I 장애)은 삽화적이고 특정 증상 중심이다.",
      "key_point": "DSM-5에서 성격장애의 대안적 모형(차원적 접근)이 Section III에 포함되어, 기존 범주적 진단의 한계를 보완하려 했다.",
      "common_mistake": "성격장애를 단순히 '성격이 나쁜 것'과 혼동하지만, 이는 임상적으로 유의미한 기능 손상을 동반하는 정신장애이다."
    }
  },
  {
    "id": "ABNORM_ASPD_016",
    "terminology": "반사회성 성격장애 (Antisocial Personality Disorder)",
    "terminology_ko": "반사회성 성격장애",
    "terminology_en": "Antisocial Personality Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "타인의 권리를 무시하고 침해하는 지속적 패턴으로, 사기, 충동성, 공격성, 무책임성, 양심의 가책 결여를 특징으로 하며, 15세 이전 품행장애 증거가 있고 18세 이후 진단되는 B군 성격장애이다.",
    "definition_en": "A Cluster B personality disorder characterized by a pervasive pattern of disregard for and violation of the rights of others, including deceitfulness, impulsivity, aggressiveness, irresponsibility, and lack of remorse, with evidence of conduct disorder before age 15 and diagnosed after age 18.",
    "significance": "범죄학과 법심리학에서 중요한 개념으로, 사이코패시(psychopathy)와의 관계가 활발히 연구되며, 치료에 가장 저항적인 성격장애로 간주된다.",
    "key_researchers": [
      {
        "name_ko": "허비 클레클리",
        "name_en": "Hervey Cleckley",
        "contribution": "『정상의 가면(The Mask of Sanity)』에서 사이코패시의 임상적 특성을 체계적으로 기술했다."
      },
      {
        "name_ko": "로버트 헤어",
        "name_en": "Robert Hare",
        "contribution": "사이코패시 체크리스트(PCL-R)를 개발하여 사이코패시의 평가를 표준화하고, ASPD와의 차이를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격장애",
        "name_en": "Personality Disorder",
        "id": "ABNORM_PERS_015"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "ABNORM_BPD_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ASPD = CORRUPT: Conformity lacks(규범 무시), Obligations ignored(의무 무시), Reckless(무모), Remorseless(양심 부재), Underhanded(사기), Planning lacks(충동적), Temper(공격성)",
      "differential": "ASPD는 DSM의 공식 진단으로 행동 중심이고, 사이코패시는 Hare의 PCL-R에 기반한 개념으로 정서·대인관계적 특성(피상적 매력, 공감 결여)을 더 강조한다.",
      "key_point": "진단을 위해 15세 이전의 품행장애(conduct disorder) 증거가 필수적이며, 18세 이상이어야 진단 가능하다.",
      "common_mistake": "반사회성 성격장애와 사이코패시를 동일시하는 오류가 흔하다. 대부분의 사이코패스는 ASPD 기준을 충족하지만, 모든 ASPD 진단자가 사이코패스인 것은 아니다."
    }
  },
  {
    "id": "ABNORM_MEDM_017",
    "terminology": "의학 모형 (Medical Model)",
    "terminology_ko": "의학 모형",
    "terminology_en": "Medical Model",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "정신장애를 신체 질환과 유사한 생물학적 원인에 의한 '질병'으로 개념화하는 관점으로, 진단, 원인(병인), 예후, 치료(약물치료)의 틀을 의학적 패러다임에서 적용한다.",
    "definition_en": "A perspective that conceptualizes mental disorders as 'diseases' caused by biological factors analogous to physical illness, applying the medical paradigm of diagnosis, etiology, prognosis, and treatment (pharmacotherapy).",
    "significance": "정신장애의 생물학적 기반에 대한 연구를 촉진하고 약물치료 발전에 기여했으나, 심리사회적 요인의 과소평가와 낙인 강화라는 비판을 받는다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "정신장애의 체계적 분류와 생물학적 원인론을 주창하여 의학 모형의 토대를 마련했다."
      },
      {
        "name_ko": "토머스 사스",
        "name_en": "Thomas Szasz",
        "contribution": "의학 모형에 대한 가장 영향력 있는 비판자로, 정신질환을 '생활의 문제'로 재개념화해야 한다고 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생물심리사회 모형",
        "name_en": "Biopsychosocial Model",
        "id": "ABNORM_BPS_018"
      },
      {
        "name_ko": "DSM",
        "name_en": "DSM",
        "id": "ABNORM_DSM_003"
      },
      {
        "name_ko": "낙인",
        "name_en": "Stigma",
        "id": "ABNORM_STIG_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "의학 모형 = 정신장애도 '몸의 병'처럼 진단·치료한다는 관점",
      "differential": "의학 모형은 생물학적 원인을 강조하고, 심리학적 모형은 학습·인지·정서 과정을 강조하며, 사회문화적 모형은 사회적 맥락을 강조한다.",
      "key_point": "의학 모형의 강점은 생물학적 연구의 촉진과 약물치료의 발전이며, 한계는 환원주의적 접근과 환자 역할의 수동화이다.",
      "common_mistake": "의학 모형이 심리사회적 요인을 완전히 무시한다고 단정하는 것은 과장이며, 현대 의학 모형은 점차 통합적 관점을 수용하고 있다."
    }
  },
  {
    "id": "ABNORM_BPS_018",
    "terminology": "생물심리사회 모형 (Biopsychosocial Model)",
    "terminology_ko": "생물심리사회 모형",
    "terminology_en": "Biopsychosocial Model",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "정신장애의 발생과 경과를 생물학적(유전, 신경화학), 심리학적(인지, 정서, 행동), 사회적(가족, 문화, 사회경제적 지위) 요인의 상호작용으로 이해하는 통합적 관점이다.",
    "definition_en": "An integrative perspective that understands the onset and course of mental disorders through the interaction of biological (genetics, neurochemistry), psychological (cognition, emotion, behavior), and social (family, culture, socioeconomic status) factors.",
    "significance": "단일 원인론의 한계를 극복하고 다양한 이론적 관점을 통합하는 현대 이상심리학의 지배적 패러다임으로, 다학제적 치료 접근의 이론적 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "조지 엥겔",
        "name_en": "George Engel",
        "contribution": "1977년 Science지 논문에서 생물심리사회 모형을 공식 제안하여, 의학 모형의 환원주의적 한계를 극복하려 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의학 모형",
        "name_en": "Medical Model",
        "id": "ABNORM_MEDM_017"
      },
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "ABNORM_AB_001"
      },
      {
        "name_ko": "정신장애",
        "name_en": "Mental Disorder",
        "id": "ABNORM_MD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BPS = Bio(몸) + Psycho(마음) + Social(사회) → 세 요인의 삼각 상호작용",
      "differential": "의학 모형은 생물학적 요인에 초점을 맞추지만, 생물심리사회 모형은 생물·심리·사회적 요인의 통합적 상호작용을 강조한다.",
      "key_point": "Engel(1977)이 의학에서의 환원주의적 접근을 비판하며 제안했으며, 현대 이상심리학의 가장 널리 수용되는 틀이다.",
      "common_mistake": "세 요인이 동등한 비중을 가진다는 의미가 아니라, 장애에 따라 요인 간 상대적 기여가 달라진다."
    }
  },
  {
    "id": "ABNORM_SP_019",
    "terminology": "특정공포증 (Specific Phobia)",
    "terminology_ko": "특정공포증",
    "terminology_en": "Specific Phobia",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "특정 대상이나 상황(동물, 자연환경, 혈액-주사-부상, 상황적, 기타)에 대한 뚜렷하고 지속적인 공포 또는 불안으로, 해당 자극에 노출되면 즉각적인 공포 반응이 유발되며 적극적으로 회피하는 장애이다.",
    "definition_en": "A disorder characterized by marked and persistent fear or anxiety about a specific object or situation (animals, natural environment, blood-injection-injury, situational, other) that provokes an immediate fear response upon exposure and is actively avoided.",
    "significance": "가장 유병률이 높은 불안장애 중 하나이며, 노출 치료(exposure therapy)의 효과가 가장 명확히 입증된 장애이다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 래크먼",
        "name_en": "Stanley Rachman",
        "contribution": "공포 습득의 세 경로(직접 조건형성, 대리학습, 정보 전달)를 제안하여 공포증의 다양한 발생 기제를 설명했다."
      },
      {
        "name_ko": "마틴 셀리그먼",
        "name_en": "Martin Seligman",
        "contribution": "준비성(preparedness) 이론을 통해 진화적으로 위협적이었던 자극에 대한 공포가 더 쉽게 학습된다고 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공포증",
        "name_en": "Phobia",
        "id": "ABNORM_PHO_006"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ABNORM_SAD_020"
      },
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ABNORM_PD_005"
      }
    ],
    "sub_types": [
      {
        "name_ko": "동물형",
        "name_en": "Animal Type",
        "description": "뱀, 거미, 개 등 특정 동물에 대한 공포"
      },
      {
        "name_ko": "자연환경형",
        "name_en": "Natural Environment Type",
        "description": "높이, 폭풍, 물 등 자연 현상에 대한 공포"
      },
      {
        "name_ko": "혈액-주사-부상형",
        "name_en": "Blood-Injection-Injury Type",
        "description": "혈액, 주사, 부상 장면에 대한 공포로, 미주신경성 실신 반응이 특징적"
      },
      {
        "name_ko": "상황형",
        "name_en": "Situational Type",
        "description": "비행기, 엘리베이터, 밀폐 공간 등 특정 상황에 대한 공포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "특정공포증 유형 = ANBS: Animal(동물), Natural environment(자연환경), Blood-injection-injury(혈액), Situational(상황)",
      "differential": "특정공포증은 단일한 구체적 자극에 대한 공포이고, 사회불안장애는 사회적 평가 상황에 대한 공포이다.",
      "key_point": "혈액-주사-부상형은 다른 공포증과 달리 이상성 생리 반응(서맥, 혈압 저하, 실신)을 보이는 독특한 유형이다.",
      "common_mistake": "단순히 싫어하는 것(예: 거미를 싫어함)과 특정공포증을 혼동하지만, 임상적 진단을 위해서는 과도한 공포와 회피로 인한 기능 손상이 있어야 한다."
    }
  },
  {
    "id": "ABNORM_SAD_020",
    "terminology": "사회불안장애 (Social Anxiety Disorder)",
    "terminology_ko": "사회불안장애",
    "terminology_en": "Social Anxiety Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "타인에 의해 관찰되거나 부정적으로 평가받을 수 있는 사회적 상황에서 뚜렷한 공포나 불안을 경험하며, 이러한 상황을 회피하거나 극심한 불안 속에서 견디는 장애이다.",
    "definition_en": "A disorder characterized by marked fear or anxiety in social situations where one may be observed or negatively evaluated by others, leading to avoidance of or endurance of such situations with intense anxiety.",
    "significance": "일반 인구의 약 7~12%에 영향을 미치는 높은 유병률의 장애로, 학업·직업·대인관계에 광범위한 영향을 미치며, 우울증의 위험 요인으로 작용한다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "사회불안장애의 인지 모형을 제안하여, 자기 초점 주의(self-focused attention)와 부정적 자기 이미지가 핵심 유지 요인이라고 설명했다."
      },
      {
        "name_ko": "리처드 하임버그",
        "name_en": "Richard Heimberg",
        "contribution": "인지행동 집단치료(CBGT) 프로그램을 개발하여 사회불안장애의 근거 기반 치료에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ABNORM_SP_019"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ABNORM_GAD_004"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ABNORM_AGOR_021"
      }
    ],
    "sub_types": [
      {
        "name_ko": "수행 상황 한정형",
        "name_en": "Performance Only",
        "description": "발표, 공연 등 수행 상황에서만 불안이 나타나는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사회불안 = '남들이 나를 어떻게 볼까'에 대한 과도한 두려움",
      "differential": "사회불안장애는 부정적 평가에 대한 공포가 핵심이고, 광장공포증은 탈출이 어려운 상황에 대한 공포가 핵심이다.",
      "key_point": "이전 명칭인 '사회공포증(social phobia)'에서 '사회불안장애'로 변경된 것은 단순 공포를 넘어선 광범위한 불안 양상을 반영한다.",
      "common_mistake": "단순한 수줍음(shyness)과 사회불안장애를 동일시하는 오류가 흔하며, 임상적 진단을 위해서는 현저한 기능 손상이 동반되어야 한다."
    }
  },
  {
    "id": "ABNORM_AGOR_021",
    "terminology": "광장공포증 (Agoraphobia)",
    "terminology_ko": "광장공포증",
    "terminology_en": "Agoraphobia",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "대중교통, 열린 공간, 밀폐된 장소, 줄 서기/군중, 집 밖에 혼자 있기 등 5가지 상황 중 2가지 이상에서 뚜렷한 공포나 불안을 경험하며, 이를 탈출이 어렵거나 도움을 받을 수 없다고 두려워하는 장애이다.",
    "definition_en": "A disorder characterized by marked fear or anxiety about two or more of five situations—public transportation, open spaces, enclosed places, standing in line or being in a crowd, and being outside the home alone—due to fear that escape might be difficult or help unavailable.",
    "significance": "DSM-5에서 공황장애와 독립적으로 진단 가능해졌으며, 치료하지 않을 경우 심한 회피로 인해 외출이 불가능해질 정도로 기능이 제한될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "카를 베스트팔",
        "name_en": "Carl Westphal",
        "contribution": "1871년 광장공포증(Agoraphobie)을 최초로 임상적으로 기술했다."
      },
      {
        "name_ko": "데이비드 발로",
        "name_en": "David H. Barlow",
        "contribution": "광장공포증과 공황장애의 관계를 체계화하고 인지행동치료 프로토콜을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ABNORM_PD_005"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ABNORM_SAD_020"
      },
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ABNORM_SP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "광장(agora=광장) + 공포(phobia) → 원래는 '시장이나 광장에 대한 공포'에서 유래. 핵심은 '탈출 불가능'에 대한 두려움",
      "differential": "광장공포증은 '탈출 곤란/도움 불가' 상황에 대한 공포이고, 사회불안장애는 '부정적 평가'에 대한 공포이다.",
      "key_point": "DSM-5에서 광장공포증은 공황장애와 독립적으로 진단 가능하게 변경되었다(이전에는 공황장애의 하위 유형).",
      "common_mistake": "'광장'이라는 이름 때문에 넓은 장소만 두려워하는 것으로 오해하지만, 밀폐 공간, 줄 서기 등 다양한 상황이 포함된다."
    }
  },
  {
    "id": "ABNORM_SSD_022",
    "terminology": "신체증상장애 (Somatic Symptom Disorder)",
    "terminology_ko": "신체증상장애",
    "terminology_en": "Somatic Symptom Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "하나 이상의 고통스러운 신체 증상이 존재하며, 이에 대한 과도한 사고, 감정, 행동(건강 불안, 과도한 시간·에너지 투자)이 동반되어 일상 기능에 유의미한 지장을 초래하는 장애이다.",
    "definition_en": "A disorder characterized by one or more distressing somatic symptoms accompanied by excessive thoughts, feelings, or behaviors related to the symptoms (health anxiety, disproportionate time and energy devoted to symptoms), causing significant disruption in daily functioning.",
    "significance": "DSM-5에서 기존의 신체화 장애, 건강염려증 등을 통합·재편한 진단으로, 의학적으로 설명되지 않는 증상에 대한 심리적 접근의 필요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "아서 발스키",
        "name_en": "Arthur Barsky",
        "contribution": "신체감각 증폭(somatosensory amplification) 개념을 제안하여, 정상 신체감각을 병적으로 해석하는 인지 과정을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "ABNORM_CONV_024"
      },
      {
        "name_ko": "해리장애",
        "name_en": "Dissociative Disorder",
        "id": "ABNORM_DISS_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SSD = Somatic(신체) + Symptom(증상) + Disorder(장애) — 신체 증상 + 과도한 심리적 반응",
      "differential": "전환장애는 감각·운동 기능의 상실이 특징이고, 신체증상장애는 실제 신체 증상에 대한 과도한 심리적 반응이 핵심이다.",
      "key_point": "DSM-5에서 '의학적으로 설명되지 않는 증상'이라는 기준을 제거하고, 신체 증상에 대한 과도한 심리적 반응 자체를 핵심 기준으로 전환했다.",
      "common_mistake": "신체증상장애 환자의 증상이 '꾸민 것'이라고 오해하지만, 이들의 고통은 실제적이며 의도적 가장과는 전혀 다르다."
    }
  },
  {
    "id": "ABNORM_CONV_024",
    "terminology": "전환장애 (Conversion Disorder)",
    "terminology_ko": "전환장애",
    "terminology_en": "Conversion Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "신경학적 질환으로 설명되지 않는 운동 또는 감각 기능의 변화(마비, 시력 상실, 발작 등)가 나타나며, 심리적 갈등이나 스트레스가 신체 증상으로 '전환'되는 것으로 이해되는 장애이다.",
    "definition_en": "A disorder characterized by alterations in motor or sensory function (paralysis, blindness, seizures, etc.) not explained by neurological disease, understood as psychological conflicts or stress being 'converted' into somatic symptoms.",
    "significance": "Freud의 히스테리 연구에서 기원한 역사적으로 중요한 진단으로, 심리적 갈등과 신체 증상 간의 관계에 대한 이해를 발전시켰다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "히스테리 환자들의 분석을 통해 무의식적 갈등이 신체 증상으로 전환된다는 이론을 발전시켰다."
      },
      {
        "name_ko": "장-마르탱 샤르코",
        "name_en": "Jean-Martin Charcot",
        "contribution": "히스테리의 신경학적 연구를 선도하고, 최면과 히스테리의 관계를 연구하여 이 분야의 과학적 탐구를 촉진했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "ABNORM_SSD_022"
      },
      {
        "name_ko": "해리장애",
        "name_en": "Dissociative Disorder",
        "id": "ABNORM_DISS_014"
      }
    ],
    "sub_types": [
      {
        "name_ko": "운동 증상형",
        "name_en": "Motor Symptoms",
        "description": "사지 마비, 보행 장애, 연하곤란 등 운동 기능의 변화"
      },
      {
        "name_ko": "감각 증상형",
        "name_en": "Sensory Symptoms",
        "description": "시력 상실, 청력 상실, 감각 이상 등 감각 기능의 변화"
      },
      {
        "name_ko": "발작형",
        "name_en": "Seizure-like Symptoms",
        "description": "간질 발작과 유사한 비간질성 발작(PNES)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전환(Conversion) = 심리적 갈등이 신체 증상으로 '변환'되는 것 (Freud의 용어)",
      "differential": "전환장애는 신경학적으로 설명되지 않는 기능 상실이고, 신체증상장애는 실제 증상에 대한 과도한 심리적 반응이다.",
      "key_point": "DSM-5에서 공식 명칭은 '기능적 신경증상장애(Functional Neurological Symptom Disorder)'이며, 전환장애는 대안 명칭이다.",
      "common_mistake": "'la belle indifférence'(아름다운 무관심)가 전환장애의 진단적 특징이라고 배우지만, 이는 신뢰할 수 있는 진단 지표가 아니다."
    }
  },
  {
    "id": "ABNORM_BPD_025",
    "terminology": "경계선 성격장애 (Borderline Personality Disorder)",
    "terminology_ko": "경계선 성격장애",
    "terminology_en": "Borderline Personality Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "대인관계, 자기상, 정동의 불안정성과 현저한 충동성을 특징으로 하는 B군 성격장애로, 유기에 대한 극심한 두려움, 이상화-평가절하의 교대, 만성적 공허감, 자해 행동 등이 나타난다.",
    "definition_en": "A Cluster B personality disorder characterized by instability in interpersonal relationships, self-image, and affects, along with marked impulsivity, including frantic efforts to avoid abandonment, alternation between idealization and devaluation, chronic emptiness, and self-harm behaviors.",
    "significance": "가장 활발히 연구되는 성격장애로, 변증법적 행동치료(DBT)의 개발 계기가 되었으며, 외상 경험과 정서 조절의 관계를 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha Linehan",
        "contribution": "경계선 성격장애를 위한 변증법적 행동치료(DBT)를 개발하여 효과적인 근거 기반 치료법을 확립했다."
      },
      {
        "name_ko": "오토 컨버그",
        "name_en": "Otto Kernberg",
        "contribution": "경계선 인격 구조(borderline personality organization) 개념을 정교화하고, 전이 초점 심리치료(TFP)를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격장애",
        "name_en": "Personality Disorder",
        "id": "ABNORM_PERS_015"
      },
      {
        "name_ko": "반사회성 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "ABNORM_ASPD_016"
      },
      {
        "name_ko": "해리장애",
        "name_en": "Dissociative Disorder",
        "id": "ABNORM_DISS_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BPD의 핵심 = IMPULSIVE: Instability(불안정), Mood swings(기분 변동), Paranoid ideation(편집 사고), Unstable relationships(불안정한 관계), Loneliness/emptiness(공허감), Suicidal behavior(자살 행동), Identity disturbance(정체감 장해), Violent anger(분노), Efforts to avoid abandonment(유기 회피)",
      "differential": "경계선 성격장애는 대인관계와 정서의 불안정성이 핵심이고, 양극성 장애는 삽화적 기분 변동이 핵심이다.",
      "key_point": "Linehan의 생물사회적 이론에 따르면, 생물학적 정서적 취약성과 비수용적 양육환경의 상호작용이 BPD 발생의 핵심이다.",
      "common_mistake": "BPD를 '조작적'이라는 부정적 틀로만 이해하는 것은 낙인을 강화하며, 정서 조절의 어려움으로 이해하는 것이 임상적으로 더 정확하다."
    }
  },
  {
    "id": "ABNORM_ASD_026",
    "terminology": "자폐스펙트럼장애 (Autism Spectrum Disorder)",
    "terminology_ko": "자폐스펙트럼장애",
    "terminology_en": "Autism Spectrum Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "사회적 의사소통 및 상호작용의 지속적 결함과 제한적이고 반복적인 행동·흥미·활동 패턴을 특징으로 하는 신경발달장애로, 증상은 발달 초기에 시작되나 사회적 요구 증가 시 명확해질 수 있다.",
    "definition_en": "A neurodevelopmental disorder characterized by persistent deficits in social communication and interaction and restricted, repetitive patterns of behavior, interests, or activities, with symptoms beginning in early development but potentially becoming apparent when social demands increase.",
    "significance": "DSM-5에서 자폐성 장애, 아스퍼거 장애, PDD-NOS를 통합한 스펙트럼 개념으로 재편되었으며, 신경다양성(neurodiversity) 관점에서의 논의가 활발하다.",
    "key_researchers": [
      {
        "name_ko": "레오 카너",
        "name_en": "Leo Kanner",
        "contribution": "1943년 '초기 유아 자폐증(early infantile autism)'을 최초로 체계적으로 기술했다."
      },
      {
        "name_ko": "한스 아스퍼거",
        "name_en": "Hans Asperger",
        "contribution": "1944년 자폐적 정신병질(autistic psychopathy)을 기술하여, 이후 아스퍼거 증후군의 명칭 유래가 되었다."
      },
      {
        "name_ko": "사이먼 배런-코헨",
        "name_en": "Simon Baron-Cohen",
        "contribution": "마음이론(Theory of Mind) 결함 가설과 극단 남성 뇌(extreme male brain) 이론을 제안하여 자폐증의 인지적 기반을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "ABNORM_ADHD_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ASD의 2대 축: Social(사회적 의사소통 결함) + Repetitive(제한·반복적 행동) = 'S+R'",
      "differential": "ASD는 사회적 의사소통 결함 + 반복 행동이 핵심이고, ADHD는 부주의 + 과잉행동/충동성이 핵심이다(공존이환 가능).",
      "key_point": "DSM-5에서 자폐성 장애, 아스퍼거 장애, PDD-NOS가 '자폐스펙트럼장애'로 통합되어 단일 진단으로 재편되었다.",
      "common_mistake": "모든 자폐인이 지적 장애를 동반한다는 것은 오해이며, 지적 수준은 심한 지적 장애부터 평균 이상까지 광범위한 스펙트럼을 보인다."
    }
  },
  {
    "id": "ABNORM_ADHD_023",
    "terminology": "ADHD (주의력결핍 과잉행동장애, Attention-Deficit/Hyperactivity Disorder)",
    "terminology_ko": "ADHD",
    "terminology_en": "Attention-Deficit/Hyperactivity Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "부주의(집중 유지 곤란, 조직화 어려움), 과잉행동(가만히 못 앉아 있음, 과도한 활동), 충동성(차례를 기다리지 못함, 성급한 행동)이 기능을 저해하는 수준으로 나타나는 신경발달장애로, 12세 이전에 증상이 시작된다.",
    "definition_en": "A neurodevelopmental disorder characterized by functionally impairing levels of inattention (difficulty sustaining focus, poor organization), hyperactivity (inability to sit still, excessive activity), and impulsivity (difficulty waiting turns, hasty actions), with onset before age 12.",
    "significance": "아동기 정신장애 중 가장 유병률이 높은 장애 중 하나로(약 5~7%), 성인기까지 지속되는 경우가 많으며, 학업·직업·대인관계에 광범위한 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "러셀 바클리",
        "name_en": "Russell Barkley",
        "contribution": "ADHD를 행동 억제(behavioral inhibition)와 실행 기능(executive function)의 결함으로 이론화하여, 자기조절 결핍 모형을 제안했다."
      },
      {
        "name_ko": "버지니아 더글라스",
        "name_en": "Virginia Douglas",
        "contribution": "ADHD의 핵심 결함이 과잉행동보다 주의력 결함에 있다는 연구를 통해 진단 기준의 변화에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "ABNORM_ASD_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "주로 부주의한 표현형",
        "name_en": "Predominantly Inattentive Presentation",
        "description": "부주의 증상이 과잉행동-충동성 증상보다 우세한 유형"
      },
      {
        "name_ko": "주로 과잉행동-충동적 표현형",
        "name_en": "Predominantly Hyperactive-Impulsive Presentation",
        "description": "과잉행동-충동성 증상이 부주의 증상보다 우세한 유형"
      },
      {
        "name_ko": "복합 표현형",
        "name_en": "Combined Presentation",
        "description": "부주의와 과잉행동-충동성 증상이 모두 현저한 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ADHD의 3대 핵심 = IAH: Inattention(부주의), Activity excess(과잉행동), Haste(충동성/성급함)",
      "differential": "ADHD의 부주의는 지속적 패턴이고, 불안이나 우울로 인한 주의 곤란은 삽화적이다.",
      "key_point": "DSM-5에서 발병 연령 기준이 7세에서 12세 이전으로 변경되었고, 성인 ADHD의 공식 인정이 강화되었다.",
      "common_mistake": "ADHD가 단순히 '산만한 아이'의 문제라는 인식은 부정확하며, 성인의 약 60%가 증상이 지속되어 평생에 걸친 기능 저해를 경험한다."
    }
  },
  {
    "id": "ABNORM_PDD_027",
    "terminology": "지속성 우울장애 (Persistent Depressive Disorder)",
    "terminology_ko": "지속성 우울장애",
    "terminology_en": "Persistent Depressive Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "우울한 기분이 하루의 대부분, 거의 매일, 최소 2년 이상 지속되며(아동·청소년은 1년), 식욕 변화, 수면 장애, 피로, 낮은 자존감, 집중력 저하, 절망감 중 2개 이상을 동반하는 만성 기분장애이다.",
    "definition_en": "A chronic mood disorder characterized by depressed mood for most of the day, nearly every day, for at least two years (one year for children and adolescents), accompanied by two or more of the following: changes in appetite, sleep disturbance, fatigue, low self-esteem, poor concentration, or feelings of hopelessness.",
    "significance": "이전의 기분저하증(dysthymia)과 만성 주요우울장애를 통합한 DSM-5 진단으로, 만성적 경과로 인한 누적적 기능 손상이 임상적으로 중요하다.",
    "key_researchers": [
      {
        "name_ko": "제임스 코인",
        "name_en": "James Coyne",
        "contribution": "우울증의 대인관계적 모형을 제안하여, 만성 우울이 대인관계 패턴에 의해 유지되는 악순환을 설명했다."
      },
      {
        "name_ko": "제임스 매컬러",
        "name_en": "James McCullough",
        "contribution": "만성 우울증을 위한 인지행동분석 체계(CBASP)를 개발하여 지속성 우울장애의 치료에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "ABNORM_MDD_009"
      },
      {
        "name_ko": "계절성 정동장애",
        "name_en": "Seasonal Affective Disorder",
        "id": "ABNORM_SEAS_028"
      },
      {
        "name_ko": "양극성 장애",
        "name_en": "Bipolar Disorder",
        "id": "ABNORM_BD_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PDD = Persistent(지속적) + Depressive(우울) + Disorder(장애) — '2년 이상 이어지는 낮은 수준의 우울'",
      "differential": "주요우울장애는 증상이 더 심하지만 삽화적(최소 2주)이고, 지속성 우울장애는 더 경하지만 만성적(최소 2년)이다.",
      "key_point": "지속성 우울장애는 기분저하증(dysthymia) + 만성 주요우울장애를 통합한 DSM-5의 새 진단이다.",
      "common_mistake": "'그냥 원래 성격이 어두운 사람'으로 치부하기 쉬우나, 지속성 우울장애는 치료가 필요한 임상적 상태이다."
    }
  },
  {
    "id": "ABNORM_SEAS_028",
    "terminology": "계절성 정동장애 (Seasonal Affective Disorder, SAD)",
    "terminology_ko": "계절성 정동장애",
    "terminology_en": "Seasonal Affective Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "특정 계절(주로 가을~겨울)에 반복적으로 우울 삽화가 발생하고, 해당 계절이 끝나면 자연적으로 호전되는 패턴을 보이는 기분장애로, DSM-5에서는 주요우울장애의 '계절성 패턴 명시자'로 분류된다.",
    "definition_en": "A mood disorder with recurrent depressive episodes occurring in a specific season (typically fall/winter) and remitting naturally when the season ends, classified in DSM-5 as a 'seasonal pattern specifier' for Major Depressive Disorder.",
    "significance": "일조량과 기분의 관계를 밝히는 생물학적 연구의 출발점이 되었으며, 광선치료(light therapy)라는 특화된 치료법의 개발로 이어졌다.",
    "key_researchers": [
      {
        "name_ko": "노먼 로젠탈",
        "name_en": "Norman Rosenthal",
        "contribution": "1984년 계절성 정동장애 개념을 최초로 체계화하고, 광선치료의 효과를 입증하는 연구를 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "ABNORM_MDD_009"
      },
      {
        "name_ko": "지속성 우울장애",
        "name_en": "Persistent Depressive Disorder",
        "id": "ABNORM_PDD_027"
      }
    ],
    "sub_types": [
      {
        "name_ko": "겨울형",
        "name_en": "Winter Pattern",
        "description": "가을~겨울에 우울이 시작되고 봄에 호전. 과식, 과수면, 탄수화물 갈망이 특징적"
      },
      {
        "name_ko": "여름형",
        "name_en": "Summer Pattern",
        "description": "봄~여름에 우울이 시작. 식욕감소, 불면이 더 흔하며, 겨울형보다 드묾"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SAD = Seasonal(계절) + Affective(정동) + Disorder(장애) — '겨울이 되면 슬퍼지는 장애'",
      "differential": "SAD는 계절과 연동된 반복적 패턴이 핵심이고, 일반 주요우울장애는 계절과 무관하게 삽화가 발생한다.",
      "key_point": "광선치료(10,000 lux, 매일 30분)가 1차 치료법으로 권장되며, 멜라토닌과 세로토닌 경로의 계절적 변화가 병인에 관여한다.",
      "common_mistake": "SAD는 독립 진단이 아니라 주요우울장애의 '계절성 패턴 명시자(seasonal pattern specifier)'임을 기억해야 한다."
    }
  },
  {
    "id": "ABNORM_DID_029",
    "terminology": "해리성 정체감 장애 (Dissociative Identity Disorder, DID)",
    "terminology_ko": "해리성 정체감 장애",
    "terminology_en": "Dissociative Identity Disorder",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "두 개 이상의 뚜렷한 인격 상태(정체감의 붕괴)가 존재하며, 일상적 사건, 중요한 개인 정보, 외상적 사건에 대한 기억의 반복적 공백이 동반되는 해리장애로, 이전에는 다중인격장애(Multiple Personality Disorder)로 불렸다.",
    "definition_en": "A dissociative disorder characterized by the presence of two or more distinct personality states (identity disruption) accompanied by recurrent gaps in recall of everyday events, important personal information, and/or traumatic events, previously known as Multiple Personality Disorder.",
    "significance": "정신의학에서 가장 논쟁적인 진단 중 하나로, 실체 여부에 대한 학술적 논쟁이 계속되며, 외상-해리 모형과 사회인지 모형 간의 이론적 대립이 활발하다.",
    "key_researchers": [
      {
        "name_ko": "리처드 클럽트",
        "name_en": "Richard Kluft",
        "contribution": "DID의 임상 연구와 치료의 선구자로, 단계적 외상 치료 모형을 제안했다."
      },
      {
        "name_ko": "이안 해킹",
        "name_en": "Ian Hacking",
        "contribution": "다중인격의 역사적·사회적 구성에 대한 철학적 분석을 통해 이 진단의 문화적 맥락을 탐구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리장애",
        "name_en": "Dissociative Disorder",
        "id": "ABNORM_DISS_014"
      },
      {
        "name_ko": "외상후 스트레스장애",
        "name_en": "PTSD",
        "id": "ABNORM_PTSD_008"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "ABNORM_SCZ_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DID = Dissociative(해리적) + Identity(정체감) + Disorder(장애) → 정체감이 분리되어 여러 '자기'가 존재",
      "differential": "DID는 정체감의 분리와 기억 공백이 핵심이고, 조현병은 현실 검증력 손상(망상, 환각)이 핵심이다. 이 둘은 매우 다른 장애이다.",
      "key_point": "외상-해리 모형은 심각한 아동기 외상(주로 학대)이 원인이라고 보고, 사회인지 모형은 암시성과 치료자 영향이 증상을 형성한다고 본다.",
      "common_mistake": "대중매체에서 DID를 극적으로 묘사하지만, 실제 임상에서의 인격 전환은 대개 미묘하고 관찰하기 어려우며, 기억 공백이 더 두드러지는 특징이다."
    }
  },
  {
    "id": "ABNORM_STIG_030",
    "terminology": "낙인 (Stigma)",
    "terminology_ko": "낙인",
    "terminology_en": "Stigma",
    "category": "ABNORM",
    "category_name": "이상심리 (Abnormal Psychology)",
    "definition": "정신장애를 가진 개인에 대해 부여되는 부정적 고정관념, 편견, 차별로, 공적 낙인(타인의 편견), 자기낙인(내면화된 부정적 자기관), 구조적 낙인(제도적 차별)을 포함하며, 도움추구 행동을 저해한다.",
    "definition_en": "Negative stereotypes, prejudice, and discrimination directed toward individuals with mental disorders, encompassing public stigma (others' prejudice), self-stigma (internalized negative self-concept), and structural stigma (institutional discrimination), which impedes help-seeking behavior.",
    "significance": "정신건강 서비스 이용의 가장 큰 장벽 중 하나로, 낙인 감소는 공중보건의 핵심 과제이며, 정신건강 리터러시와 접촉 기반 중재가 효과적인 전략으로 연구된다.",
    "key_researchers": [
      {
        "name_ko": "어빙 고프먼",
        "name_en": "Erving Goffman",
        "contribution": "『스티그마(Stigma, 1963)』에서 낙인의 사회학적 분석을 체계화하여, 손상된 정체성(spoiled identity) 개념을 제안했다."
      },
      {
        "name_ko": "패트릭 코리건",
        "name_en": "Patrick Corrigan",
        "contribution": "정신장애 낙인의 유형(공적 낙인, 자기낙인)을 구분하고, 낙인 감소를 위한 근거 기반 전략(교육, 접촉, 항의)을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "ABNORM_AB_001"
      },
      {
        "name_ko": "의학 모형",
        "name_en": "Medical Model",
        "id": "ABNORM_MEDM_017"
      },
      {
        "name_ko": "정신장애",
        "name_en": "Mental Disorder",
        "id": "ABNORM_MD_002"
      }
    ],
    "sub_types": [
      {
        "name_ko": "공적 낙인",
        "name_en": "Public Stigma",
        "description": "일반 대중이 정신장애를 가진 사람에 대해 갖는 부정적 태도와 차별 행동"
      },
      {
        "name_ko": "자기낙인",
        "name_en": "Self-Stigma",
        "description": "정신장애를 가진 개인이 사회적 편견을 내면화하여 자존감과 자기효능감이 저하되는 현상"
      },
      {
        "name_ko": "구조적 낙인",
        "name_en": "Structural Stigma",
        "description": "법률, 정책, 제도 수준에서 정신장애를 가진 사람에 대한 체계적 불이익"
      }
    ],
    "quiz_hints": {
      "mnemonic": "낙인(Stigma) = 고대 그리스에서 노예나 범죄자에게 찍던 '표시(stigma)'에서 유래 → 부정적 '꼬리표'",
      "differential": "편견(prejudice)은 부정적 태도이고, 차별(discrimination)은 그에 따른 행동이며, 낙인(stigma)은 이 둘과 고정관념을 포괄하는 상위 개념이다.",
      "key_point": "낙인 감소를 위해 가장 효과적인 전략은 정신장애를 가진 사람과의 직접 접촉(contact-based intervention)이다.",
      "common_mistake": "정신질환에 대한 생물학적 설명이 낙인을 줄인다고 기대하지만, 연구에 따르면 오히려 '다름'을 강조하여 사회적 거리감을 증가시킬 수 있다."
    }
  }
];

TERMS_DATA.THERAPY = [
  {
    "id": "THERAPY_PSY_001",
    "terminology": "심리치료 (Psychotherapy)",
    "terminology_ko": "심리치료",
    "terminology_en": "Psychotherapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "심리적 문제나 정신장애를 치료하기 위해 치료자와 내담자 간의 전문적 관계 속에서 심리학적 원리와 기법을 활용하는 체계적 치료 과정이다. 약물이 아닌 대화, 행동 변화, 인지 재구성 등 심리적 수단을 주된 치료 도구로 사용한다.",
    "definition_en": "A systematic treatment process that uses psychological principles and techniques within a professional relationship between a therapist and client to address psychological problems or mental disorders. It employs psychological means such as dialogue, behavior change, and cognitive restructuring rather than medication as primary therapeutic tools.",
    "significance": "정신건강 치료의 핵심 축으로, 약물치료와 함께 또는 단독으로 다양한 정신장애와 심리적 문제를 다루는 근거 기반 치료법이다. 수백 가지 이상의 심리치료 접근법이 존재하며, 공통 요인(치료적 동맹, 공감, 긍정적 기대)이 치료 효과의 상당 부분을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석을 창시하여 최초의 체계적 심리치료 이론과 실천 모델을 확립하였다"
      },
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심 치료를 개발하여 치료적 관계의 핵심 조건을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      },
      {
        "name_ko": "인간중심 치료",
        "name_en": "Person-Centered Therapy",
        "id": "THERAPY_PCT_005"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "THERAPY_CBT_008"
      },
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      }
    ],
    "sub_types": [
      "정신역동적 치료",
      "인본주의적 치료",
      "행동주의적 치료",
      "인지적 치료",
      "통합적 치료"
    ],
    "quiz_hints": {
      "mnemonic": "심리(心理) + 치료(治療): 마음의 이치를 다스려 고치는 것",
      "differential": "약물치료는 생물학적 수단(약물)을, 심리치료는 심리학적 수단(대화, 행동 변화 등)을 주된 도구로 사용한다",
      "key_point": "모든 심리치료의 공통 요인으로 치료적 동맹, 공감, 긍정적 기대가 있으며, 이것이 치료 효과의 상당 부분을 설명한다",
      "common_mistake": "심리치료를 단순한 '상담'이나 '조언'으로 오해하기 쉬우나, 심리학적 이론에 기반한 체계적 치료 과정이다"
    }
  },
  {
    "id": "THERAPY_PA_002",
    "terminology": "정신분석 치료 (Psychoanalytic Therapy)",
    "terminology_ko": "정신분석 치료",
    "terminology_en": "Psychoanalytic Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "프로이트가 창시한 치료법으로, 무의식적 갈등과 억압된 기억이 현재의 심리적 문제를 유발한다고 보고, 자유연상, 꿈 해석, 전이 분석 등을 통해 무의식을 의식화하여 통찰을 얻게 하는 치료 접근이다.",
    "definition_en": "A therapeutic approach founded by Freud, based on the premise that unconscious conflicts and repressed memories cause current psychological problems. It uses free association, dream interpretation, and transference analysis to bring unconscious material into conscious awareness and achieve insight.",
    "significance": "최초의 체계적 심리치료 이론으로, 무의식의 역할과 초기 경험의 중요성을 강조하여 이후 모든 심리치료 발전의 토대를 마련하였다. 현대 정신역동적 치료의 원형이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석의 이론과 기법을 체계화하고 자유연상, 꿈 해석 등 핵심 치료 기법을 개발하였다"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "자아 방어기제 이론을 체계화하고 아동 정신분석을 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유연상",
        "name_en": "Free Association",
        "id": "THERAPY_FA_003"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "THERAPY_TF_004"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "THERAPY_RES_017"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "THERAPY_INT_018"
      },
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "THERAPY_CTF_019"
      }
    ],
    "sub_types": [
      "고전적 정신분석",
      "자아심리학",
      "대상관계이론",
      "자기심리학",
      "단기 정신역동 치료"
    ],
    "quiz_hints": {
      "mnemonic": "정신분석 = 무의식 탐구: 자유연상으로 무의식을 '분석'하여 통찰을 얻는다",
      "differential": "인지치료는 의식적 사고 패턴을 수정하지만, 정신분석은 무의식적 갈등을 의식화하는 것에 초점을 둔다",
      "key_point": "핵심 가정: 현재의 심리적 문제는 무의식적 갈등과 초기 경험에 뿌리를 두고 있다",
      "common_mistake": "정신분석을 단순히 '소파에 누워서 이야기하는 것'으로 오해하기 쉬우나, 전이, 저항, 해석 등 체계적 기법을 사용하는 구조화된 치료이다"
    }
  },
  {
    "id": "THERAPY_FA_003",
    "terminology": "자유연상 (Free Association)",
    "terminology_ko": "자유연상",
    "terminology_en": "Free Association",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "정신분석의 핵심 기법으로, 내담자가 마음에 떠오르는 생각, 감정, 이미지를 검열이나 편집 없이 있는 그대로 말하도록 하는 방법이다. 이를 통해 무의식적 갈등과 억압된 내용이 의식으로 떠오를 수 있다.",
    "definition_en": "A fundamental psychoanalytic technique in which the client is encouraged to verbalize whatever comes to mind without censorship or editing. Through this process, unconscious conflicts and repressed material can surface into conscious awareness.",
    "significance": "프로이트가 최면 대신 도입한 방법으로, 무의식에 접근하는 정신분석의 기본 규칙(fundamental rule)이다. 내담자의 자유로운 연상 흐름 속에서 무의식적 주제와 갈등이 드러난다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "최면술을 대체하여 자유연상법을 정신분석의 핵심 기법으로 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "THERAPY_RES_017"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "THERAPY_INT_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자유(Free) + 연상(Association): 마음의 검열관을 해고하고 자유롭게 떠오르는 것을 말한다",
      "differential": "꿈 해석은 꿈의 내용을 분석하지만, 자유연상은 깨어 있는 상태에서 의식의 흐름을 따라가는 기법이다",
      "key_point": "정신분석의 '기본 규칙'으로, 내담자가 어떤 생각이든 검열 없이 말하도록 요청한다",
      "common_mistake": "자유연상이 아무 말이나 하는 것이 아니라, 검열을 최소화하여 무의식적 내용이 자연스럽게 드러나게 하는 구조화된 기법이다"
    }
  },
  {
    "id": "THERAPY_TF_004",
    "terminology": "전이 (Transference)",
    "terminology_ko": "전이",
    "terminology_en": "Transference",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "내담자가 과거 중요한 인물(부모 등)에 대해 가졌던 감정, 태도, 기대를 치료자에게 무의식적으로 투사하는 현상이다. 예를 들어, 권위적인 아버지에 대한 분노를 치료자에게 표현하는 것이 전이에 해당한다.",
    "definition_en": "The phenomenon in which the client unconsciously projects feelings, attitudes, and expectations originally directed toward significant past figures (such as parents) onto the therapist. For example, expressing anger toward the therapist that was originally felt toward an authoritarian father.",
    "significance": "정신분석에서 전이 분석은 치료의 핵심 도구로, 내담자의 무의식적 관계 패턴을 '여기-지금(here and now)'에서 직접 관찰하고 작업할 수 있게 해준다. 전이의 해석을 통해 내담자는 반복적 관계 패턴에 대한 통찰을 얻는다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "전이 현상을 발견하고 이를 치료의 핵심 도구로 개념화하였다"
      },
      {
        "name_ko": "하인즈 코헛",
        "name_en": "Heinz Kohut",
        "contribution": "자기대상 전이(이상화 전이, 거울 전이 등)의 개념을 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "THERAPY_CTF_019"
      },
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "THERAPY_RES_017"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "THERAPY_INT_018"
      }
    ],
    "sub_types": [
      "긍정적 전이 (Positive Transference)",
      "부정적 전이 (Negative Transference)",
      "이상화 전이 (Idealizing Transference)",
      "거울 전이 (Mirror Transference)"
    ],
    "quiz_hints": {
      "mnemonic": "전이(轉移) = 감정의 '이동': 과거 인물에 대한 감정이 치료자에게로 '옮겨진다'",
      "differential": "전이는 내담자가 치료자에게 과거 감정을 투사하는 것이고, 역전이는 치료자가 내담자에게 자신의 무의식적 감정을 투사하는 것이다",
      "key_point": "전이는 단순한 오류가 아니라 치료에서 활용되는 핵심 도구로, 내담자의 무의식적 관계 패턴을 드러낸다",
      "common_mistake": "전이를 단순히 '좋아하거나 싫어하는 감정'으로 축소하기 쉬우나, 과거 중요 인물에 대한 감정이 무의식적으로 재현되는 것이다"
    }
  },
  {
    "id": "THERAPY_PCT_005",
    "terminology": "인간중심 치료 (Person-Centered Therapy)",
    "terminology_ko": "인간중심 치료",
    "terminology_en": "Person-Centered Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "칼 로저스가 개발한 인본주의적 치료 접근으로, 무조건적 긍정적 존중, 공감적 이해, 진정성(일치성)이라는 치료자의 세 가지 핵심 조건이 충족되면 내담자가 스스로 성장하고 문제를 해결할 수 있다고 본다.",
    "definition_en": "A humanistic therapeutic approach developed by Carl Rogers, based on the premise that when the therapist provides three core conditions — unconditional positive regard, empathic understanding, and genuineness (congruence) — the client can achieve self-directed growth and problem resolution.",
    "significance": "치료 관계의 질이 치료 효과의 핵심이라는 관점을 확립하였으며, 이후 모든 심리치료에서 치료적 관계의 중요성을 인식하게 하는 데 결정적 기여를 하였다. 상담심리학 발전의 토대이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심 치료를 창시하고 치료적 관계의 세 가지 핵심 조건(무조건적 긍정적 존중, 공감, 진정성)을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "THERAPY_AL_020"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "THERAPY_EMP_021"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "THERAPY_REF_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "로저스의 3대 조건: UEG — Unconditional positive regard, Empathy, Genuineness (무조건적 긍정적 존중, 공감, 진정성)",
      "differential": "정신분석은 치료자가 해석을 통해 통찰을 제공하지만, 인간중심 치료는 내담자의 자기 탐색을 촉진하는 비지시적 접근이다",
      "key_point": "치료의 핵심은 기법이 아니라 치료적 관계이며, 내담자에게 성장의 잠재력이 내재해 있다고 본다",
      "common_mistake": "인간중심 치료가 단순히 '듣기만 하는 것'이라고 오해하기 쉬우나, 깊은 공감과 진정성을 바탕으로 한 적극적 개입이다"
    }
  },
  {
    "id": "THERAPY_BT_006",
    "terminology": "행동치료 (Behavior Therapy)",
    "terminology_ko": "행동치료",
    "terminology_en": "Behavior Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "학습 이론(고전적 조건형성, 조작적 조건형성)의 원리를 적용하여 부적응적 행동을 소거하고 적응적 행동을 학습시키는 치료 접근이다. 관찰 가능한 행동의 변화에 초점을 맞추며, 무의식이나 내적 갈등보다 현재의 행동 문제를 직접 다룬다.",
    "definition_en": "A therapeutic approach that applies principles of learning theory (classical and operant conditioning) to eliminate maladaptive behaviors and teach adaptive ones. It focuses on observable behavioral change and directly addresses current behavioral problems rather than unconscious conflicts.",
    "significance": "심리치료에 과학적 방법론을 도입한 핵심 접근으로, 공포증, 강박장애, 물질남용 등 다양한 장애에 대해 경험적으로 검증된 치료 기법들을 제공한다. 인지행동치료의 행동적 토대이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "체계적 둔감화를 개발하여 불안장애의 행동치료 기법을 확립하였다"
      },
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "조작적 조건형성 원리를 치료에 적용하여 행동수정의 이론적 기반을 제공하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "THERAPY_SD_007"
      },
      {
        "name_ko": "토큰경제",
        "name_en": "Token Economy",
        "id": "THERAPY_TE_016"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "THERAPY_EXP_015"
      },
      {
        "name_ko": "혐오치료",
        "name_en": "Aversion Therapy",
        "id": "THERAPY_AVT_023"
      },
      {
        "name_ko": "홍수법",
        "name_en": "Flooding",
        "id": "THERAPY_FLD_024"
      }
    ],
    "sub_types": [
      "체계적 둔감화",
      "노출 치료",
      "혐오 치료",
      "토큰 경제",
      "행동 활성화"
    ],
    "quiz_hints": {
      "mnemonic": "행동치료 = 학습으로 배운 문제 행동은 학습으로 고칠 수 있다",
      "differential": "인지치료는 사고 패턴을 변화시키지만, 행동치료는 관찰 가능한 행동 자체를 변화시키는 데 초점을 둔다",
      "key_point": "학습 이론에 기반하여 부적응적 행동을 소거하고 적응적 행동을 강화하는 것이 핵심 원리이다",
      "common_mistake": "행동치료가 사고나 감정을 무시한다고 오해하기 쉬우나, 행동 변화를 통해 사고와 감정의 변화도 이끌어낼 수 있다"
    }
  },
  {
    "id": "THERAPY_SD_007",
    "terminology": "체계적 둔감화 (Systematic Desensitization)",
    "terminology_ko": "체계적 둔감화",
    "terminology_en": "Systematic Desensitization",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "조셉 울프가 개발한 행동치료 기법으로, 불안을 유발하는 자극을 약한 것부터 강한 것까지 위계적으로 배열한 후, 이완 상태에서 점진적으로 노출시켜 불안 반응을 소거하는 방법이다. 상호억제 원리에 기반한다.",
    "definition_en": "A behavior therapy technique developed by Joseph Wolpe in which anxiety-provoking stimuli are arranged hierarchically from least to most threatening, and the client is gradually exposed to them while maintaining a relaxed state, thereby extinguishing the anxiety response. It is based on the principle of reciprocal inhibition.",
    "significance": "공포증 치료에 높은 효과가 입증된 대표적 행동치료 기법으로, 고전적 조건형성의 역조건형성 원리를 임상에 성공적으로 적용한 사례이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "상호억제 원리에 기반하여 체계적 둔감화 기법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "THERAPY_EXP_015"
      },
      {
        "name_ko": "홍수법",
        "name_en": "Flooding",
        "id": "THERAPY_FLD_024"
      }
    ],
    "sub_types": [
      "실제적 둔감화 (In Vivo Desensitization)",
      "상상적 둔감화 (Imaginal Desensitization)"
    ],
    "quiz_hints": {
      "mnemonic": "체계적(Systematic) = 단계별로 + 둔감화(Desensitization) = 무감각하게: '단계적으로 무감각하게 만든다'",
      "differential": "홍수법은 가장 강한 불안 자극에 즉시 노출시키지만, 체계적 둔감화는 약한 자극부터 점진적으로 노출시킨다",
      "key_point": "3단계 절차: (1) 이완 훈련 (2) 불안 위계 작성 (3) 이완 상태에서 점진적 노출",
      "common_mistake": "체계적 둔감화와 홍수법을 혼동하기 쉬운데, 체계적 둔감화는 '점진적' 노출이고 홍수법은 '즉각적이고 강렬한' 노출이다"
    }
  },
  {
    "id": "THERAPY_CBT_008",
    "terminology": "인지행동치료 (Cognitive-Behavioral Therapy, CBT)",
    "terminology_ko": "인지행동치료",
    "terminology_en": "Cognitive-Behavioral Therapy (CBT)",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "인지치료와 행동치료를 통합한 치료 접근으로, 부적응적 사고 패턴(인지 왜곡)과 행동 패턴을 함께 수정하여 정서적 문제를 해결하는 구조화된 단기 치료이다. 우울증, 불안장애 등에 대해 가장 광범위한 경험적 지지를 받고 있다.",
    "definition_en": "An integrative therapeutic approach combining cognitive and behavioral therapies that addresses emotional problems by modifying both maladaptive thought patterns (cognitive distortions) and behavioral patterns. It is a structured, time-limited therapy with the most extensive empirical support for disorders such as depression and anxiety.",
    "significance": "현재 가장 널리 연구되고 실천되는 근거 기반 심리치료로, 우울증, 불안장애, PTSD, 섭식장애 등 다양한 장애에 대한 치료 효과가 메타분석을 통해 반복적으로 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지치료를 개발하고 이를 행동적 기법과 통합하여 CBT의 기틀을 마련하였다"
      },
      {
        "name_ko": "도널드 마이켄바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "인지행동수정 및 스트레스 면역 훈련을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "THERAPY_CT_009"
      },
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      },
      {
        "name_ko": "합리적 정서행동 치료",
        "name_en": "REBT",
        "id": "THERAPY_REBT_010"
      }
    ],
    "sub_types": [
      "벡의 인지치료",
      "변증법적 행동치료 (DBT)",
      "수용전념치료 (ACT)",
      "마음챙김 기반 인지치료 (MBCT)",
      "스키마 치료"
    ],
    "quiz_hints": {
      "mnemonic": "CBT = Cognition(인지) + Behavior(행동) + Therapy(치료): 생각과 행동을 함께 바꾼다",
      "differential": "순수 인지치료는 사고 패턴 수정에 집중하고, 순수 행동치료는 행동 변화에 집중하지만, CBT는 둘을 통합한다",
      "key_point": "핵심 원리: 상황 자체가 아니라 상황에 대한 '해석(인지)'이 정서와 행동을 결정한다",
      "common_mistake": "CBT를 단순히 '긍정적으로 생각하기'로 오해하기 쉬우나, 비합리적 사고를 현실적이고 균형 잡힌 사고로 재구성하는 것이다"
    }
  },
  {
    "id": "THERAPY_CT_009",
    "terminology": "인지치료 (Cognitive Therapy)",
    "terminology_ko": "인지치료",
    "terminology_en": "Cognitive Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "아론 벡이 개발한 치료 접근으로, 우울증과 불안을 유발하는 부정적 자동적 사고와 인지 왜곡을 식별하고 이를 보다 현실적이고 적응적인 사고로 대체하여 정서적 문제를 치료한다. 인지 삼제(자기, 세상, 미래에 대한 부정적 관점)가 핵심 개념이다.",
    "definition_en": "A therapeutic approach developed by Aaron Beck that treats emotional problems by identifying negative automatic thoughts and cognitive distortions that contribute to depression and anxiety, and replacing them with more realistic and adaptive thinking. The cognitive triad (negative views of self, world, and future) is a core concept.",
    "significance": "인지적 관점에서 정신장애를 이해하는 혁신적 틀을 제공하였으며, 특히 우울증 치료에서 약물치료에 필적하는 효과가 입증되어 심리치료의 패러다임 전환을 이끌었다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지치료를 창시하고 우울증의 인지 모델(인지 삼제, 인지 왜곡, 자동적 사고)을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "THERAPY_CBT_008"
      },
      {
        "name_ko": "합리적 정서행동 치료",
        "name_en": "REBT",
        "id": "THERAPY_REBT_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "벡의 인지 삼제(Cognitive Triad): 자기(Self), 세상(World), 미래(Future)에 대한 부정적 사고가 우울증을 만든다",
      "differential": "REBT(엘리스)는 비합리적 '신념'을 논박하는 데 초점을 맞추고, 인지치료(벡)는 '자동적 사고'와 '인지 왜곡'을 식별하고 검증하는 데 초점을 맞춘다",
      "key_point": "핵심 개념: 자동적 사고 → 인지 왜곡 → 핵심 신념의 3수준 구조",
      "common_mistake": "벡의 인지치료와 엘리스의 REBT를 혼동하기 쉬운데, 벡은 소크라테스식 질문으로 사고를 검증하고 엘리스는 직접적 논박으로 신념을 도전한다"
    }
  },
  {
    "id": "THERAPY_REBT_010",
    "terminology": "합리적 정서행동 치료 (Rational Emotive Behavior Therapy, REBT)",
    "terminology_ko": "합리적 정서행동 치료",
    "terminology_en": "Rational Emotive Behavior Therapy (REBT)",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "앨버트 엘리스가 개발한 인지적 치료 접근으로, ABC 모델(A: 선행사건, B: 신념, C: 결과)에 기반하여 비합리적 신념을 적극적으로 논박(D: Disputing)하고 합리적 신념으로 대체하여 정서적 문제를 해결한다.",
    "definition_en": "A cognitive therapeutic approach developed by Albert Ellis, based on the ABC model (A: Activating event, B: Belief, C: Consequence). It actively disputes (D: Disputing) irrational beliefs and replaces them with rational beliefs to resolve emotional problems.",
    "significance": "인지치료의 선구적 모델로, 사건이 아닌 사건에 대한 '신념'이 정서적 반응을 결정한다는 핵심 원리를 제시하여 인지행동치료 발전의 토대를 마련하였다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "합리적 정서행동 치료(REBT)를 창시하고 ABC 모델과 비합리적 신념 체계를 개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "THERAPY_CT_009"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "THERAPY_CBT_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ABCDE 모델: A(사건) → B(신념) → C(결과/감정) → D(논박) → E(효과/새로운 감정)",
      "differential": "벡의 인지치료는 자동적 사고를 소크라테스식 질문으로 검증하지만, REBT는 비합리적 신념을 직접적이고 적극적으로 논박한다",
      "key_point": "핵심 원리: 사건(A)이 감정(C)을 직접 만드는 것이 아니라, 사건에 대한 신념(B)이 감정을 결정한다",
      "common_mistake": "REBT의 'Rational'을 '이성적으로만 생각하라'는 뜻으로 오해하기 쉬우나, 현실적이고 유연하며 자기 도움적인 사고를 의미한다"
    }
  },
  {
    "id": "THERAPY_GT_011",
    "terminology": "집단치료 (Group Therapy)",
    "terminology_ko": "집단치료",
    "terminology_en": "Group Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "한 명 이상의 치료자가 여러 명의 내담자를 동시에 치료하는 형태로, 집단 내 상호작용을 치료적 도구로 활용한다. 보편성, 이타심, 대인관계 학습 등 집단 고유의 치료적 요인이 작용한다.",
    "definition_en": "A form of therapy in which one or more therapists treat several clients simultaneously, utilizing group interactions as therapeutic tools. Unique therapeutic factors of groups operate, including universality, altruism, and interpersonal learning.",
    "significance": "비용 효율적이면서도 대인관계 문제를 직접 다룰 수 있는 치료 형태로, 얼럼(Yalom)이 제시한 11가지 치료적 요인은 집단치료의 이론적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얼럼",
        "name_en": "Irvin Yalom",
        "contribution": "집단치료의 11가지 치료적 요인(보편성, 이타심, 희망 고취 등)을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "THERAPY_FT_026"
      },
      {
        "name_ko": "부부치료",
        "name_en": "Couples Therapy",
        "id": "THERAPY_CPT_027"
      }
    ],
    "sub_types": [
      "정신역동적 집단치료",
      "인지행동 집단치료",
      "지지적 집단치료",
      "자조 집단 (Self-Help Group)"
    ],
    "quiz_hints": {
      "mnemonic": "얼럼의 치료적 요인 중 핵심 3가지: 보편성(나만 그런 게 아니다), 이타심(남을 도우며 나도 성장), 대인관계 학습",
      "differential": "개인치료는 치료자-내담자 1:1 관계에 초점을 맞추지만, 집단치료는 집단원 간 상호작용 자체를 치료 도구로 활용한다",
      "key_point": "얼럼의 11가지 치료적 요인: 보편성, 이타심, 희망 고취, 정보 제공, 일차 가족집단의 교정적 재현, 사회화 기법 발달, 모방 행동, 대인관계 학습, 집단 응집력, 카타르시스, 실존적 요인",
      "common_mistake": "집단치료를 단순히 '비용 절감을 위한 개인치료의 대안'으로 보기 쉬우나, 집단 고유의 치료적 요인이 개인치료에서 얻을 수 없는 독특한 치료적 가치를 제공한다"
    }
  },
  {
    "id": "THERAPY_APM_012",
    "terminology": "항정신병 약물 (Antipsychotic Medications)",
    "terminology_ko": "항정신병 약물",
    "terminology_en": "Antipsychotic Medications",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "조현병 등 정신병적 증상(망상, 환각, 사고장애)을 치료하기 위해 사용되는 약물이다. 주로 도파민 수용체를 차단하여 양성 증상을 감소시킨다. 1세대(전형적)와 2세대(비전형적) 항정신병 약물로 구분된다.",
    "definition_en": "Medications used to treat psychotic symptoms such as delusions, hallucinations, and thought disorders in conditions like schizophrenia. They primarily work by blocking dopamine receptors to reduce positive symptoms. They are classified into first-generation (typical) and second-generation (atypical) antipsychotics.",
    "significance": "1950년대 클로르프로마진의 도입으로 정신병원의 탈원화 운동이 가능해졌으며, 조현병 등 중증 정신장애의 치료에 혁명적 변화를 가져왔다. 생물학적 정신의학의 발전을 촉진하였다.",
    "key_researchers": [
      {
        "name_ko": "장 들레이",
        "name_en": "Jean Delay",
        "contribution": "피에르 드니케르와 함께 클로르프로마진(최초의 항정신병 약물)의 정신과적 효과를 발견하였다"
      },
      {
        "name_ko": "피에르 드니케르",
        "name_en": "Pierre Deniker",
        "contribution": "장 들레이와 함께 클로르프로마진의 항정신병 효과를 임상적으로 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항우울제",
        "name_en": "Antidepressants",
        "id": "THERAPY_AD_013"
      },
      {
        "name_ko": "항불안제",
        "name_en": "Anxiolytics",
        "id": "THERAPY_AX_014"
      }
    ],
    "sub_types": [
      "1세대(전형적) 항정신병 약물: 클로르프로마진, 할로페리돌",
      "2세대(비전형적) 항정신병 약물: 클로자핀, 리스페리돈, 올란자핀"
    ],
    "quiz_hints": {
      "mnemonic": "항(Anti) + 정신병(Psychotic): 정신병적 증상을 막는 약물. 도파민 차단이 핵심 기전",
      "differential": "항우울제는 세로토닌/노르에피네프린 계통에 작용하여 기분을 개선하고, 항정신병 약물은 도파민 계통에 작용하여 정신병적 증상을 감소시킨다",
      "key_point": "1세대는 양성 증상에 효과적이나 추체외로 부작용이 크고, 2세대는 양성 및 음성 증상 모두에 효과적이나 대사 부작용이 있다",
      "common_mistake": "항정신병 약물이 정신병을 '완치'한다고 오해하기 쉬우나, 증상을 관리하는 것이며 장기 복용이 필요한 경우가 많다"
    }
  },
  {
    "id": "THERAPY_AD_013",
    "terminology": "항우울제 (Antidepressants)",
    "terminology_ko": "항우울제",
    "terminology_en": "Antidepressants",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "우울증을 비롯한 기분장애를 치료하기 위해 사용되는 약물이다. 주로 세로토닌, 노르에피네프린, 도파민 등 신경전달물질의 가용성을 증가시켜 기분을 개선한다. SSRI, SNRI, 삼환계 항우울제, MAO 억제제 등의 종류가 있다.",
    "definition_en": "Medications used to treat depression and other mood disorders. They primarily work by increasing the availability of neurotransmitters such as serotonin, norepinephrine, and dopamine to improve mood. Types include SSRIs, SNRIs, tricyclic antidepressants, and MAO inhibitors.",
    "significance": "우울증의 생물학적 치료에 핵심적 역할을 하며, 심리치료와 병행 시 치료 효과가 극대화된다. SSRI의 개발은 부작용을 줄이면서 항우울 효과를 유지하는 혁신이었다.",
    "key_researchers": [
      {
        "name_ko": "롤란드 쿤",
        "name_en": "Roland Kuhn",
        "contribution": "최초의 삼환계 항우울제인 이미프라민의 항우울 효과를 발견하였다"
      },
      {
        "name_ko": "레이 풀러",
        "name_en": "Ray Fuller",
        "contribution": "브라이언 몰로이, 데이비드 웡과 함께 최초의 SSRI인 플루옥세틴(프로작)을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "SSRI",
        "name_en": "Selective Serotonin Reuptake Inhibitors",
        "id": "THERAPY_SSRI_028"
      },
      {
        "name_ko": "항정신병 약물",
        "name_en": "Antipsychotic Medications",
        "id": "THERAPY_APM_012"
      },
      {
        "name_ko": "항불안제",
        "name_en": "Anxiolytics",
        "id": "THERAPY_AX_014"
      }
    ],
    "sub_types": [
      "선택적 세로토닌 재흡수 억제제 (SSRI)",
      "세로토닌-노르에피네프린 재흡수 억제제 (SNRI)",
      "삼환계 항우울제 (TCA)",
      "모노아민 산화효소 억제제 (MAOI)"
    ],
    "quiz_hints": {
      "mnemonic": "항우울제의 세대별 진화: MAOI → TCA → SSRI → SNRI (부작용은 줄고 선택성은 높아진다)",
      "differential": "항불안제(벤조디아제핀)는 즉각적으로 불안을 줄이지만, 항우울제는 치료 효과가 나타나기까지 보통 2-4주가 소요된다",
      "key_point": "항우울제의 치료 효과는 보통 복용 시작 후 2-4주 후에 나타나며, 이 지연 기간 동안 환자 교육이 중요하다",
      "common_mistake": "항우울제가 복용 즉시 기분을 좋게 만든다고 오해하기 쉬우나, 2-4주의 지연 기간이 있다"
    }
  },
  {
    "id": "THERAPY_AX_014",
    "terminology": "항불안제 (Anxiolytics)",
    "terminology_ko": "항불안제",
    "terminology_en": "Anxiolytics",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "불안 증상을 감소시키기 위해 사용되는 약물이다. 대표적으로 벤조디아제핀 계열(디아제팜, 알프라졸람 등)이 있으며, GABA 수용체에 작용하여 중추신경계의 활동을 억제함으로써 진정 효과를 나타낸다.",
    "definition_en": "Medications used to reduce anxiety symptoms. The most common class is benzodiazepines (diazepam, alprazolam, etc.), which act on GABA receptors to inhibit central nervous system activity, producing a calming effect.",
    "significance": "불안장애의 급성 증상 관리에 효과적이나, 의존성과 남용의 위험이 있어 장기 사용에 주의가 필요하다. 현재는 SSRI가 불안장애의 1차 약물치료로 더 많이 사용된다.",
    "key_researchers": [
      {
        "name_ko": "레오 스턴바크",
        "name_en": "Leo Sternbach",
        "contribution": "최초의 벤조디아제핀인 클로르디아제폭시드(리브리움)를 합성하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항우울제",
        "name_en": "Antidepressants",
        "id": "THERAPY_AD_013"
      },
      {
        "name_ko": "항정신병 약물",
        "name_en": "Antipsychotic Medications",
        "id": "THERAPY_APM_012"
      },
      {
        "name_ko": "SSRI",
        "name_en": "Selective Serotonin Reuptake Inhibitors",
        "id": "THERAPY_SSRI_028"
      }
    ],
    "sub_types": [
      "벤조디아제핀: 디아제팜(발리움), 알프라졸람(자낙스), 로라제팜",
      "비벤조디아제핀: 부스피론"
    ],
    "quiz_hints": {
      "mnemonic": "항(Anti) + 불안(Anxiety): GABA 증강 → 신경 억제 → 불안 감소. '가바가 불안을 잠재운다'",
      "differential": "항우울제(SSRI)도 불안장애에 사용되지만 효과 발현에 수주가 걸리고, 항불안제(벤조디아제핀)는 즉각적 효과가 있으나 의존성 위험이 있다",
      "key_point": "벤조디아제핀은 빠른 효과가 장점이나, 의존성과 내성 위험으로 단기 사용이 권장된다",
      "common_mistake": "항불안제를 장기적 해결책으로 오해하기 쉬우나, 벤조디아제핀의 장기 사용은 의존성 위험이 크며 근본적 치료(심리치료, SSRI)와 병행해야 한다"
    }
  },
  {
    "id": "THERAPY_EXP_015",
    "terminology": "노출치료 (Exposure Therapy)",
    "terminology_ko": "노출치료",
    "terminology_en": "Exposure Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "불안이나 공포를 유발하는 자극에 내담자를 체계적으로 노출시켜, 회피 행동을 줄이고 불안 반응을 소거하는 행동치료 기법이다. 실제 노출(in vivo), 상상 노출(imaginal), 가상현실 노출 등 다양한 형태가 있다.",
    "definition_en": "A behavioral therapy technique that systematically exposes clients to anxiety- or fear-provoking stimuli to reduce avoidance behaviors and extinguish anxiety responses. Various forms include in vivo exposure, imaginal exposure, and virtual reality exposure.",
    "significance": "공포증, PTSD, 강박장애, 사회불안장애 등 불안 관련 장애에 대해 가장 강력한 경험적 근거를 가진 치료 기법 중 하나이다. 습관화와 소거의 원리에 기반한다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "지속 노출치료(Prolonged Exposure)를 개발하여 PTSD 치료에 획기적 기여를 하였다"
      },
      {
        "name_ko": "조셉 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "체계적 둔감화를 통해 노출 기반 치료의 기초를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "THERAPY_SD_007"
      },
      {
        "name_ko": "홍수법",
        "name_en": "Flooding",
        "id": "THERAPY_FLD_024"
      },
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      }
    ],
    "sub_types": [
      "실제 노출 (In Vivo Exposure)",
      "상상 노출 (Imaginal Exposure)",
      "가상현실 노출 (Virtual Reality Exposure)",
      "내수용감각 노출 (Interoceptive Exposure)"
    ],
    "quiz_hints": {
      "mnemonic": "노출(Exposure) = 두려운 것에 '드러내다': 회피 대신 직면하여 불안을 이긴다",
      "differential": "체계적 둔감화는 이완과 함께 점진적 노출을 하지만, 노출치료는 이완 없이도 노출 자체의 효과에 초점을 맞출 수 있다",
      "key_point": "불안의 핵심 유지 요인인 '회피'를 직접 다루며, 충분한 시간 동안 노출을 유지하여 습관화를 달성하는 것이 중요하다",
      "common_mistake": "노출치료가 환자에게 무조건 두려운 상황을 강요하는 것으로 오해하기 쉬우나, 내담자의 동의와 치료 계획 하에 체계적으로 진행된다"
    }
  },
  {
    "id": "THERAPY_TE_016",
    "terminology": "토큰경제 (Token Economy)",
    "terminology_ko": "토큰경제",
    "terminology_en": "Token Economy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "조작적 조건형성의 원리에 기반한 행동수정 기법으로, 바람직한 행동을 할 때 토큰(대리 강화물)을 제공하고 이를 나중에 실제 보상(특권, 물품 등)으로 교환할 수 있게 하여 적응 행동을 증가시키는 체계이다.",
    "definition_en": "A behavior modification technique based on operant conditioning principles in which tokens (secondary reinforcers) are given for desired behaviors and can later be exchanged for actual rewards (privileges, goods, etc.) to increase adaptive behaviors.",
    "significance": "정신병원, 학교, 교정시설 등 다양한 기관 환경에서 행동 변화를 체계적으로 촉진하는 데 효과적인 것으로 입증되었다. 조작적 조건형성의 대표적 임상 적용 사례이다.",
    "key_researchers": [
      {
        "name_ko": "테오도르 에일론",
        "name_en": "Teodoro Ayllon",
        "contribution": "네이선 에이즈린과 함께 정신병원에서 토큰경제 프로그램을 최초로 체계적으로 적용하였다"
      },
      {
        "name_ko": "네이선 에이즈린",
        "name_en": "Nathan Azrin",
        "contribution": "에일론과 함께 토큰경제의 이론적 틀과 실행 지침을 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "THERAPY_CBT_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "토큰 = 화폐처럼 사용되는 '보상 교환권': 좋은 행동 → 토큰 획득 → 원하는 보상으로 교환",
      "differential": "토큰경제는 2차 강화물(토큰)을 사용하는 체계적 프로그램이고, 단순 강화는 1차 강화물을 직접 제공하는 것이다",
      "key_point": "토큰은 2차(조건) 강화물로 기능하며, 다양한 1차 강화물과 교환될 수 있어 유연성이 높다",
      "common_mistake": "토큰경제가 '뇌물'과 같다고 오해하기 쉬우나, 내적 동기와 자기 관리 능력을 점진적으로 발달시키는 치료적 도구이다"
    }
  },
  {
    "id": "THERAPY_RES_017",
    "terminology": "저항 (Resistance)",
    "terminology_ko": "저항",
    "terminology_en": "Resistance",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "정신분석에서 내담자가 무의식적으로 치료 과정을 방해하는 현상으로, 억압된 갈등이 의식으로 떠오르는 것을 막으려는 방어기제의 표현이다. 주제를 바꾸거나, 침묵하거나, 약속을 잊는 등 다양한 형태로 나타난다.",
    "definition_en": "In psychoanalysis, the phenomenon in which the client unconsciously obstructs the therapeutic process as a defense mechanism to prevent repressed conflicts from reaching consciousness. It manifests in various forms such as changing subjects, silence, or forgetting appointments.",
    "significance": "저항은 단순한 방해가 아니라 치료적으로 중요한 정보를 제공한다. 내담자가 어떤 주제에서 저항을 보이는지 분석하면 무의식적 갈등의 핵심에 접근할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "저항의 개념을 정립하고 이를 무의식적 갈등의 지표로 활용하는 방법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유연상",
        "name_en": "Free Association",
        "id": "THERAPY_FA_003"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "THERAPY_TF_004"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "THERAPY_INT_018"
      },
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      }
    ],
    "sub_types": [
      "억압 저항 (Repression Resistance)",
      "전이 저항 (Transference Resistance)",
      "이득 저항 (Secondary Gain Resistance)"
    ],
    "quiz_hints": {
      "mnemonic": "저항(Resistance) = 무의식의 '문지기': 억압된 내용이 의식으로 나오지 못하게 막는다",
      "differential": "저항은 무의식적 방어의 표현이고, 비순응(noncompliance)은 의식적 치료 거부이다",
      "key_point": "저항이 나타나는 지점이 곧 무의식적 갈등의 핵심이 있는 곳이므로, 치료적으로 중요한 정보이다",
      "common_mistake": "저항을 내담자의 의도적 비협조로 오해하기 쉬우나, 무의식적 방어기제의 표현으로 치료적으로 다루어야 할 현상이다"
    }
  },
  {
    "id": "THERAPY_INT_018",
    "terminology": "해석 (Interpretation)",
    "terminology_ko": "해석",
    "terminology_en": "Interpretation",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "정신분석에서 치료자가 내담자의 자유연상, 꿈, 행동, 저항, 전이 등에 숨겨진 무의식적 의미를 내담자에게 설명하여 통찰을 촉진하는 핵심 치료 기법이다.",
    "definition_en": "A core psychoanalytic technique in which the therapist explains the unconscious meanings hidden in the client's free associations, dreams, behaviors, resistance, and transference to promote insight.",
    "significance": "정신분석 치료에서 변화를 이끌어내는 핵심 도구로, 적절한 시기에 정확한 해석이 제공될 때 내담자는 무의식적 갈등에 대한 통찰을 얻고 심리적 변화를 경험한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "해석을 정신분석 치료의 핵심 기법으로 체계화하고 꿈의 해석, 전이 해석 등의 방법을 개발하였다"
      },
      {
        "name_ko": "제임스 스트래치",
        "name_en": "James Strachey",
        "contribution": "전이 해석이 치료에서 가장 중요한 '돌연변이적 해석(mutative interpretation)'임을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유연상",
        "name_en": "Free Association",
        "id": "THERAPY_FA_003"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "THERAPY_TF_004"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "THERAPY_RES_017"
      },
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      }
    ],
    "sub_types": [
      "전이 해석 (Transference Interpretation)",
      "꿈 해석 (Dream Interpretation)",
      "저항 해석 (Resistance Interpretation)"
    ],
    "quiz_hints": {
      "mnemonic": "해석 = 무의식의 '번역가': 내담자가 모르는 무의식의 의미를 의식의 언어로 번역해준다",
      "differential": "반영(Reflection)은 내담자의 감정을 그대로 되돌려주지만, 해석은 무의식적 의미를 새롭게 제시하여 통찰을 촉진한다",
      "key_point": "적절한 타이밍(timing)이 중요하며, 내담자가 받아들일 준비가 되었을 때 해석을 제공해야 효과적이다",
      "common_mistake": "해석을 치료자가 일방적으로 '진단'을 내리는 것으로 오해하기 쉬우나, 내담자와의 협력적 탐색 과정에서 이루어진다"
    }
  },
  {
    "id": "THERAPY_CTF_019",
    "terminology": "역전이 (Countertransference)",
    "terminology_ko": "역전이",
    "terminology_en": "Countertransference",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "치료자가 내담자에 대해 갖는 무의식적 감정 반응으로, 치료자 자신의 미해결된 갈등이나 과거 경험이 내담자와의 관계에서 활성화되는 현상이다. 현대적 관점에서는 내담자에 대한 치료자의 모든 감정 반응을 포함하며, 이를 치료적 도구로 활용할 수 있다.",
    "definition_en": "The therapist's unconscious emotional reactions to the client, in which the therapist's own unresolved conflicts or past experiences become activated in the therapeutic relationship. In modern perspectives, it encompasses all of the therapist's emotional reactions to the client and can be utilized as a therapeutic tool.",
    "significance": "초기에는 치료의 방해 요인으로만 여겨졌으나, 현대 정신역동적 관점에서는 내담자의 대인관계 패턴을 이해하는 귀중한 정보원으로 활용된다. 치료자의 자기 분석과 수퍼비전의 필요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "역전이 개념을 처음 제시하고 이를 치료의 방해 요인으로 인식하였다"
      },
      {
        "name_ko": "파울라 하이만",
        "name_en": "Paula Heimann",
        "contribution": "역전이를 내담자를 이해하는 치료적 도구로 재개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "THERAPY_TF_004"
      },
      {
        "name_ko": "정신분석 치료",
        "name_en": "Psychoanalytic Therapy",
        "id": "THERAPY_PA_002"
      }
    ],
    "sub_types": [
      "일치적 역전이 (Concordant Countertransference)",
      "보충적 역전이 (Complementary Countertransference)"
    ],
    "quiz_hints": {
      "mnemonic": "역(Counter) + 전이(Transference): 전이의 '역방향', 치료자가 내담자에게 느끼는 무의식적 감정",
      "differential": "전이는 내담자 → 치료자 방향의 감정 투사이고, 역전이는 치료자 → 내담자 방향의 감정 반응이다",
      "key_point": "현대적 관점: 역전이는 제거해야 할 오류가 아니라, 내담자의 대인관계 패턴을 이해하는 치료적 정보원이다",
      "common_mistake": "역전이를 단순히 치료자의 '실수'로 보기 쉬우나, 이를 인식하고 활용하는 것이 숙련된 치료의 핵심이다"
    }
  },
  {
    "id": "THERAPY_AL_020",
    "terminology": "적극적 경청 (Active Listening)",
    "terminology_ko": "적극적 경청",
    "terminology_en": "Active Listening",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "내담자의 말과 감정에 완전히 집중하여 듣고, 이해한 내용을 반영, 요약, 명료화 등을 통해 내담자에게 되돌려줌으로써 내담자가 충분히 이해받고 있음을 경험하게 하는 상담 기법이다.",
    "definition_en": "A counseling technique of fully concentrating on the client's words and emotions, and communicating understanding back through reflection, summarization, and clarification, so the client experiences being fully heard and understood.",
    "significance": "칼 로저스의 인간중심 치료에서 핵심적 치료 기술로, 치료적 관계 형성의 기본이 되며 거의 모든 치료 접근에서 필수적인 기초 기술로 인정된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심 치료에서 적극적 경청을 핵심 치료 기술로 확립하였다"
      },
      {
        "name_ko": "토마스 고든",
        "name_en": "Thomas Gordon",
        "contribution": "적극적 경청 기술을 대인관계 훈련 프로그램으로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 치료",
        "name_en": "Person-Centered Therapy",
        "id": "THERAPY_PCT_005"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "THERAPY_EMP_021"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "THERAPY_REF_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "적극적(Active) + 경청(Listening): 수동적으로 듣기만 하는 것이 아니라 '적극적으로' 이해를 전달한다",
      "differential": "단순 경청은 조용히 듣는 것이지만, 적극적 경청은 반영, 요약, 명료화 등으로 이해를 '적극적으로' 확인하고 전달한다",
      "key_point": "말의 내용뿐 아니라 감정, 비언어적 메시지까지 포착하여 전체적으로 이해하고 이를 내담자에게 전달하는 것이 핵심이다",
      "common_mistake": "적극적 경청을 단순히 '잘 듣는 것'으로 축소하기 쉬우나, 반영과 요약을 통해 이해를 능동적으로 확인하는 기술이다"
    }
  },
  {
    "id": "THERAPY_EMP_021",
    "terminology": "공감 (Empathy)",
    "terminology_ko": "공감",
    "terminology_en": "Empathy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "치료자가 내담자의 내적 경험(감정, 생각, 관점)을 마치 자신의 것인 것처럼 이해하면서도 '마치 ~인 것처럼(as if)' 조건을 유지하는 것이다. 로저스는 이를 치료적 변화의 핵심 조건 중 하나로 제시하였다.",
    "definition_en": "The therapist's ability to understand the client's inner experience (feelings, thoughts, perspective) as if it were their own, while maintaining the 'as if' condition. Rogers identified this as one of the core conditions for therapeutic change.",
    "significance": "치료적 관계의 핵심 요소로, 거의 모든 심리치료 접근에서 치료 효과에 기여하는 공통 요인으로 인정된다. 내담자의 자기 탐색을 촉진하고 치료 동맹을 강화한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "공감적 이해를 치료적 변화의 필요충분조건 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 치료",
        "name_en": "Person-Centered Therapy",
        "id": "THERAPY_PCT_005"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "THERAPY_AL_020"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "THERAPY_REF_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공감 = '마치(as if)' 조건: 상대의 입장이 '되어' 보되, 나를 '잃지' 않는 것",
      "differential": "동정(sympathy)은 상대의 감정에 대해 안타까움을 느끼는 것이고, 공감(empathy)은 상대의 입장에서 그 감정을 이해하는 것이다",
      "key_point": "로저스의 'as if' 조건이 핵심: 내담자의 감정에 빠져드는 것(동일시)이 아니라, 그 감정을 이해하면서 치료자 자신을 유지하는 것이다",
      "common_mistake": "공감을 '동의'나 '동정'으로 혼동하기 쉬우나, 공감은 상대의 경험을 이해하는 것이지 반드시 동의하거나 안쓰러워하는 것이 아니다"
    }
  },
  {
    "id": "THERAPY_REF_022",
    "terminology": "반영 (Reflection)",
    "terminology_ko": "반영",
    "terminology_en": "Reflection",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "치료자가 내담자가 표현한 감정이나 의미를 자신의 말로 다시 되돌려주는 상담 기법이다. 내담자의 감정을 거울처럼 비추어 줌으로써 내담자가 자신의 감정을 더 명확하게 인식하고 탐색할 수 있도록 돕는다.",
    "definition_en": "A counseling technique in which the therapist mirrors back the feelings or meanings expressed by the client in the therapist's own words. By reflecting the client's emotions like a mirror, it helps the client more clearly recognize and explore their own feelings.",
    "significance": "인간중심 치료의 핵심 기법으로, 내담자가 자신의 감정을 외부에서 들어봄으로써 자기 이해를 심화하고 감정을 정리할 수 있게 해준다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "반영을 인간중심 치료의 핵심 상담 기법으로 개발하고 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 치료",
        "name_en": "Person-Centered Therapy",
        "id": "THERAPY_PCT_005"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "THERAPY_EMP_021"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "THERAPY_AL_020"
      }
    ],
    "sub_types": [
      "감정 반영 (Reflection of Feeling)",
      "내용 반영 (Reflection of Content)",
      "의미 반영 (Reflection of Meaning)"
    ],
    "quiz_hints": {
      "mnemonic": "반영 = '감정의 거울': 내담자의 감정을 거울처럼 비추어 되돌려준다",
      "differential": "해석은 무의식적 의미를 새롭게 제시하지만, 반영은 내담자가 이미 표현한 감정이나 의미를 치료자의 말로 되돌려주는 것이다",
      "key_point": "반영은 단순한 '앵무새 따라하기'가 아니라, 내담자의 감정의 본질을 포착하여 정확하게 되돌려주는 기술이다",
      "common_mistake": "반영을 내담자의 말을 그대로 반복하는 것(단순 반복)으로 오해하기 쉬우나, 감정의 핵심을 치료자의 언어로 재구성하여 전달하는 것이다"
    }
  },
  {
    "id": "THERAPY_AVT_023",
    "terminology": "혐오치료 (Aversion Therapy)",
    "terminology_ko": "혐오치료",
    "terminology_en": "Aversion Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "고전적 조건형성 원리를 이용하여 제거하고자 하는 행동이나 자극을 불쾌한 자극(혐오 자극)과 반복적으로 짝지어 제시함으로써, 해당 행동에 대한 혐오 반응을 형성시키는 행동치료 기법이다.",
    "definition_en": "A behavior therapy technique using classical conditioning principles to pair an unwanted behavior or stimulus repeatedly with an unpleasant (aversive) stimulus, thereby creating an aversive response to the targeted behavior.",
    "significance": "알코올 의존, 흡연 등 중독 행동의 치료에 활용되어 왔으나, 윤리적 문제와 장기 효과의 한계로 현재는 제한적으로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "조건형성을 통한 정서 반응 학습을 실험적으로 입증하여 혐오치료의 이론적 기반을 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "THERAPY_SD_007"
      }
    ],
    "sub_types": [
      "화학적 혐오치료 (약물 이용)",
      "전기 혐오치료 (전기 자극 이용)",
      "은밀한 감작 (Covert Sensitization, 상상 이용)"
    ],
    "quiz_hints": {
      "mnemonic": "혐오(Aversion) + 치료: 나쁜 행동을 '혐오스러운 것'과 연결시켜 그만두게 만든다",
      "differential": "체계적 둔감화는 공포를 줄이기 위해 불안 자극을 이완과 짝짓지만, 혐오치료는 원치 않는 행동을 줄이기 위해 그 행동을 불쾌 자극과 짝짓는다",
      "key_point": "역조건형성의 원리: 쾌락을 주던 자극이 혐오 자극과 짝지어져 불쾌한 반응을 유발하게 된다",
      "common_mistake": "혐오치료가 처벌과 같다고 오해하기 쉬우나, 처벌은 조작적 조건형성이고 혐오치료는 고전적 조건형성 원리에 기반한다"
    }
  },
  {
    "id": "THERAPY_FLD_024",
    "terminology": "홍수법 (Flooding)",
    "terminology_ko": "홍수법",
    "terminology_en": "Flooding",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "불안을 유발하는 가장 강렬한 자극에 내담자를 즉각적이고 장시간 노출시켜, 불안 반응이 소거될 때까지 유지하는 행동치료 기법이다. 점진적 접근 없이 가장 두려운 상황에 직면하게 한다.",
    "definition_en": "A behavior therapy technique that immediately and prolongedly exposes the client to the most intense anxiety-provoking stimulus until the anxiety response is extinguished, without gradual approach to the most feared situation.",
    "significance": "불안 소거의 원리를 가장 직접적으로 적용한 기법으로, 특정 공포증 치료에 빠른 효과를 보일 수 있으나 내담자에게 심한 스트레스를 줄 수 있어 신중한 적용이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "토마스 스탬플",
        "name_en": "Thomas Stampfl",
        "contribution": "내파법(implosive therapy)을 개발하여 홍수법의 이론적 기반을 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "THERAPY_SD_007"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "THERAPY_EXP_015"
      },
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      }
    ],
    "sub_types": [
      "실제 홍수법 (In Vivo Flooding)",
      "상상 홍수법 (Imaginal Flooding / Implosive Therapy)"
    ],
    "quiz_hints": {
      "mnemonic": "홍수(Flooding) = 불안의 '홍수'에 빠뜨린다: 가장 강한 공포에 즉시 노출시킨다",
      "differential": "체계적 둔감화는 약한 불안부터 점진적으로 노출하지만, 홍수법은 가장 강한 불안 자극에 즉시 노출시킨다",
      "key_point": "핵심 원리: 불안이 최고조에 달해도 실제 위험이 없으므로, 충분한 시간이 지나면 불안은 자연적으로 소거된다(습관화)",
      "common_mistake": "홍수법을 중간에 중단하면 오히려 불안이 강화(감작)될 수 있으므로, 불안이 충분히 감소할 때까지 노출을 유지해야 한다"
    }
  },
  {
    "id": "THERAPY_MDL_025",
    "terminology": "모델링 (Modeling)",
    "terminology_ko": "모델링",
    "terminology_en": "Modeling",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "관찰학습(사회학습)의 원리를 치료에 적용한 기법으로, 치료자나 다른 모델이 적응적 행동을 시범 보이면 내담자가 이를 관찰하고 모방하여 새로운 행동을 습득하거나 공포를 감소시키는 방법이다.",
    "definition_en": "A therapeutic technique applying principles of observational (social) learning, in which the therapist or another model demonstrates adaptive behaviors that the client observes and imitates, thereby acquiring new behaviors or reducing fears.",
    "significance": "반두라의 사회학습이론에 기반하며, 특히 아동의 공포 치료, 사회기술 훈련 등에 효과적이다. 직접 경험 없이도 행동 변화를 이끌어낼 수 있는 효율적 방법이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "사회학습이론을 개발하고 관찰학습을 통한 행동 변화의 원리를 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동치료",
        "name_en": "Behavior Therapy",
        "id": "THERAPY_BT_006"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "THERAPY_SD_007"
      }
    ],
    "sub_types": [
      "실제 모델링 (Live Modeling)",
      "상징적 모델링 (Symbolic Modeling)",
      "참여 모델링 (Participant Modeling)",
      "은밀한 모델링 (Covert Modeling)"
    ],
    "quiz_hints": {
      "mnemonic": "모델링 = '보고 배우기': 반두라의 보보 인형 실험처럼 관찰만으로도 행동을 학습할 수 있다",
      "differential": "체계적 둔감화는 직접 노출과 이완을 결합하지만, 모델링은 다른 사람의 행동을 관찰하여 간접적으로 학습하는 것이다",
      "key_point": "참여 모델링은 모델의 시범 관찰 후 내담자가 직접 행동을 연습하는 것으로, 가장 효과적인 형태이다",
      "common_mistake": "모델링을 단순한 '따라하기'로 축소하기 쉬우나, 인지적 과정(주의, 파지, 재생, 동기)이 관여하는 복합적 학습 과정이다"
    }
  },
  {
    "id": "THERAPY_FT_026",
    "terminology": "가족치료 (Family Therapy)",
    "terminology_ko": "가족치료",
    "terminology_en": "Family Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "개인의 문제를 가족 체계의 맥락에서 이해하고, 가족 구성원 간의 상호작용 패턴, 의사소통 방식, 가족 구조를 변화시켜 문제를 해결하는 치료 접근이다. 가족 전체를 하나의 치료 단위로 본다.",
    "definition_en": "A therapeutic approach that understands individual problems within the context of the family system and resolves issues by changing interaction patterns, communication styles, and family structures among family members. The entire family is viewed as the unit of treatment.",
    "significance": "개인의 증상을 가족 체계의 기능 문제로 재개념화한 혁신적 관점으로, 아동/청소년 문제, 섭식장애, 물질남용 등의 치료에서 높은 효과가 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "구조적 가족치료를 개발하여 가족 구조와 경계의 개념을 정립하였다"
      },
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "다세대 가족치료를 개발하고 자기분화(differentiation of self) 개념을 제시하였다"
      },
      {
        "name_ko": "버지니아 사티어",
        "name_en": "Virginia Satir",
        "contribution": "경험적 가족치료를 개발하고 가족 의사소통 유형을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부부치료",
        "name_en": "Couples Therapy",
        "id": "THERAPY_CPT_027"
      },
      {
        "name_ko": "집단치료",
        "name_en": "Group Therapy",
        "id": "THERAPY_GT_011"
      }
    ],
    "sub_types": [
      "구조적 가족치료 (Structural Family Therapy)",
      "전략적 가족치료 (Strategic Family Therapy)",
      "다세대 가족치료 (Multigenerational Family Therapy)",
      "경험적 가족치료 (Experiential Family Therapy)"
    ],
    "quiz_hints": {
      "mnemonic": "가족치료 = '개인이 아닌 가족이 환자': IP(확인된 환자)의 증상은 가족 체계의 문제를 반영한다",
      "differential": "개인치료는 개인 내적 문제에 초점을 맞추지만, 가족치료는 가족 구성원 간 상호작용과 체계의 변화에 초점을 맞춘다",
      "key_point": "IP(identified patient)의 증상은 가족 체계의 역기능을 반영하므로, 개인이 아닌 가족 전체를 치료 단위로 다룬다",
      "common_mistake": "가족치료를 '가족 모두가 모여 이야기하는 것'으로 단순화하기 쉬우나, 체계이론에 기반한 가족 구조와 상호작용 패턴의 변화를 목표로 하는 전문적 치료이다"
    }
  },
  {
    "id": "THERAPY_CPT_027",
    "terminology": "부부치료 (Couples Therapy)",
    "terminology_ko": "부부치료",
    "terminology_en": "Couples Therapy",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "부부 또는 커플 간의 관계 문제를 다루는 치료 접근으로, 의사소통 패턴 개선, 갈등 해결 기술 향상, 정서적 유대 강화를 통해 관계의 질을 향상시킨다.",
    "definition_en": "A therapeutic approach addressing relationship issues between couples by improving communication patterns, enhancing conflict resolution skills, and strengthening emotional bonds to improve relationship quality.",
    "significance": "관계 갈등이 개인의 정신건강에 미치는 영향이 크다는 연구 결과를 바탕으로, 우울증, 불안장애 등의 치료에서도 부부치료의 효과가 입증되고 있다.",
    "key_researchers": [
      {
        "name_ko": "존 가트만",
        "name_en": "John Gottman",
        "contribution": "부부 관계의 과학적 연구를 통해 관계 성공과 실패를 예측하는 요인을 밝히고 가트만 부부치료를 개발하였다"
      },
      {
        "name_ko": "수 존슨",
        "name_en": "Sue Johnson",
        "contribution": "정서중심 부부치료(EFT)를 개발하여 애착이론을 부부치료에 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "THERAPY_FT_026"
      },
      {
        "name_ko": "집단치료",
        "name_en": "Group Therapy",
        "id": "THERAPY_GT_011"
      }
    ],
    "sub_types": [
      "정서중심 부부치료 (Emotionally Focused Therapy, EFT)",
      "가트만 부부치료 (Gottman Method Couples Therapy)",
      "행동적 부부치료 (Behavioral Couples Therapy)",
      "통합적 행동 부부치료 (Integrative Behavioral Couple Therapy)"
    ],
    "quiz_hints": {
      "mnemonic": "가트만의 관계 파괴 4기사: 비난(Criticism), 경멸(Contempt), 방어(Defensiveness), 담쌓기(Stonewalling)",
      "differential": "가족치료는 가족 전체의 체계를 다루지만, 부부치료는 두 사람 간의 관계 역학에 초점을 맞춘다",
      "key_point": "가트만 연구에 따르면, 긍정적 상호작용과 부정적 상호작용의 비율이 5:1 이상일 때 관계가 안정적이다",
      "common_mistake": "부부치료의 목표가 항상 '관계 유지'라고 오해하기 쉬우나, 경우에 따라 건강한 이별을 돕는 것도 치료 목표가 될 수 있다"
    }
  },
  {
    "id": "THERAPY_SSRI_028",
    "terminology": "SSRI (Selective Serotonin Reuptake Inhibitors)",
    "terminology_ko": "선택적 세로토닌 재흡수 억제제",
    "terminology_en": "Selective Serotonin Reuptake Inhibitors (SSRI)",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "세로토닌의 재흡수를 선택적으로 차단하여 시냅스 간극의 세로토닌 농도를 증가시키는 항우울제이다. 기존 항우울제보다 부작용이 적어 우울증, 불안장애, 강박장애 등의 1차 치료 약물로 가장 널리 사용된다. 대표 약물로 플루옥세틴(프로작), 설트랄린(졸로프트) 등이 있다.",
    "definition_en": "Antidepressants that selectively block the reuptake of serotonin, increasing serotonin levels in the synaptic cleft. With fewer side effects than older antidepressants, they are the most widely used first-line medications for depression, anxiety disorders, and OCD. Representative drugs include fluoxetine (Prozac) and sertraline (Zoloft).",
    "significance": "1980년대 도입 이후 항우울제 사용의 패러다임을 변화시켰으며, 부작용이 적고 안전성이 높아 우울증과 불안장애의 약물치료 접근성을 크게 향상시켰다.",
    "key_researchers": [
      {
        "name_ko": "레이 풀러",
        "name_en": "Ray Fuller",
        "contribution": "플루옥세틴(프로작)의 개발에 핵심적으로 기여하였다"
      },
      {
        "name_ko": "데이비드 웡",
        "name_en": "David T. Wong",
        "contribution": "플루옥세틴의 세로토닌 재흡수 억제 기전을 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항우울제",
        "name_en": "Antidepressants",
        "id": "THERAPY_AD_013"
      },
      {
        "name_ko": "항불안제",
        "name_en": "Anxiolytics",
        "id": "THERAPY_AX_014"
      }
    ],
    "sub_types": [
      "플루옥세틴 (Fluoxetine, 프로작)",
      "설트랄린 (Sertraline, 졸로프트)",
      "파록세틴 (Paroxetine, 팍실)",
      "에스시탈로프람 (Escitalopram, 렉사프로)"
    ],
    "quiz_hints": {
      "mnemonic": "SSRI = Selective(선택적) Serotonin(세로토닌) Reuptake(재흡수) Inhibitors(억제제): 세로토닌만 '선택적'으로 골라서 재흡수를 '억제'한다",
      "differential": "SNRI는 세로토닌과 노르에피네프린 모두의 재흡수를 차단하지만, SSRI는 세로토닌의 재흡수만 선택적으로 차단한다",
      "key_point": "현재 우울증과 불안장애의 1차 약물치료로 가장 널리 사용되며, 효과 발현까지 2-4주 소요된다",
      "common_mistake": "SSRI가 세로토닌을 '생성'한다고 오해하기 쉬우나, 이미 분비된 세로토닌의 '재흡수를 차단'하여 시냅스 간극에 더 오래 머물게 하는 것이다"
    }
  },
  {
    "id": "THERAPY_LI_029",
    "terminology": "리튬 (Lithium)",
    "terminology_ko": "리튬",
    "terminology_en": "Lithium",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "양극성 장애(조울증)의 치료와 예방에 사용되는 대표적인 기분안정제이다. 조증 삽화를 감소시키고 기분 변동을 안정화하는 효과가 있으며, 치료 범위가 좁아 정기적인 혈중 농도 모니터링이 필수적이다.",
    "definition_en": "A primary mood stabilizer used for the treatment and prevention of bipolar disorder. It reduces manic episodes and stabilizes mood fluctuations. Due to its narrow therapeutic window, regular blood level monitoring is essential.",
    "significance": "양극성 장애 치료의 골드 스탠다드로, 1949년 존 케이드의 발견 이후 기분안정제 치료의 시대를 열었다. 자살 예방 효과도 입증되어 있다.",
    "key_researchers": [
      {
        "name_ko": "존 케이드",
        "name_en": "John Cade",
        "contribution": "1949년 리튬의 항조증 효과를 발견하여 양극성 장애의 약물치료를 개척하였다"
      },
      {
        "name_ko": "모겐스 쇼우",
        "name_en": "Mogens Schou",
        "contribution": "리튬의 예방적 효과를 체계적으로 연구하고 임상적 사용을 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항우울제",
        "name_en": "Antidepressants",
        "id": "THERAPY_AD_013"
      },
      {
        "name_ko": "항정신병 약물",
        "name_en": "Antipsychotic Medications",
        "id": "THERAPY_APM_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "리튬 = 양극성 장애의 '균형추': 조증의 높은 기분과 우울증의 낮은 기분을 안정시킨다",
      "differential": "항우울제는 우울증을 치료하고, 항정신병 약물은 정신병적 증상을 치료하지만, 리튬은 기분의 극단적 변동(양극성 장애)을 안정시킨다",
      "key_point": "치료 범위(therapeutic window)가 매우 좁아 혈중 리튬 농도를 정기적으로 모니터링해야 하며, 독성 위험에 주의해야 한다",
      "common_mistake": "리튬이 즉시 효과를 나타낸다고 오해하기 쉬우나, 완전한 치료 효과가 나타나기까지 수일~수주가 소요된다"
    }
  },
  {
    "id": "THERAPY_ECT_030",
    "terminology": "전기경련요법 (Electroconvulsive Therapy, ECT)",
    "terminology_ko": "전기경련요법",
    "terminology_en": "Electroconvulsive Therapy (ECT)",
    "category": "THERAPY",
    "category_name": "심리치료 (Therapy & Treatment)",
    "definition": "전신마취와 근이완제 투여 후 두피에 전기 자극을 가하여 뇌에 통제된 경련을 유도하는 생물학적 치료법이다. 약물에 반응하지 않는 중증 우울증, 자살 위험이 높은 경우, 긴장증 등에 효과적이다.",
    "definition_en": "A biological treatment that induces controlled seizures in the brain by applying electrical stimulation to the scalp after general anesthesia and muscle relaxants. It is effective for severe depression unresponsive to medication, high suicide risk, and catatonia.",
    "significance": "약물 저항성 중증 우울증에 대한 가장 효과적인 치료법 중 하나로, 현대 ECT는 안전하게 시행되며 빠른 효과를 보인다. 과거의 부정적 이미지와 달리 잘 연구된 근거 기반 치료법이다.",
    "key_researchers": [
      {
        "name_ko": "우고 체를레티",
        "name_en": "Ugo Cerletti",
        "contribution": "루치오 비니와 함께 1938년 최초의 전기경련요법을 시행하였다"
      },
      {
        "name_ko": "루치오 비니",
        "name_en": "Lucio Bini",
        "contribution": "체를레티와 함께 ECT 장비를 개발하고 최초로 인간에게 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항우울제",
        "name_en": "Antidepressants",
        "id": "THERAPY_AD_013"
      },
      {
        "name_ko": "항정신병 약물",
        "name_en": "Antipsychotic Medications",
        "id": "THERAPY_APM_012"
      }
    ],
    "sub_types": [
      "일측성 ECT (Unilateral ECT)",
      "양측성 ECT (Bilateral ECT)"
    ],
    "quiz_hints": {
      "mnemonic": "ECT = Electric(전기) + Convulsive(경련) + Therapy(치료): 통제된 전기 경련으로 뇌를 '리셋'한다",
      "differential": "경두개자기자극(TMS)은 비침습적이고 경련을 유발하지 않지만, ECT는 마취 하에 경련을 유도하며 중증 사례에 더 효과적이다",
      "key_point": "현대 ECT는 전신마취와 근이완제를 사용하여 안전하게 시행되며, 약물 저항성 중증 우울증에 가장 효과적인 치료법이다",
      "common_mistake": "ECT를 '잔인한' 또는 '비과학적' 치료로 오해하기 쉬우나, 현대 ECT는 안전하고 효과적인 근거 기반 치료법으로, 대중문화의 부정적 묘사와 다르다"
    }
  }
];

TERMS_DATA.HEALTH = [
  {
    "id": "HEALTH_STRESS_001",
    "terminology": "스트레스 (Stress)",
    "terminology_ko": "스트레스",
    "terminology_en": "Stress",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "환경의 요구가 개인의 적응 자원을 초과한다고 평가될 때 발생하는 심리적·생리적 긴장 상태. 외적 사건(스트레서) 자체가 아니라, 개인의 인지적 평가에 의해 결정된다.",
    "definition_en": "A state of psychological and physiological tension that occurs when environmental demands are appraised as exceeding one's adaptive resources. Stress is determined not by external events alone but by the individual's cognitive appraisal.",
    "significance": "건강심리학의 핵심 개념으로, 정신건강과 신체건강 모두에 광범위한 영향을 미친다. Lazarus의 인지적 평가 모형은 스트레스를 주관적 경험으로 재정의하여 현대 스트레스 연구의 패러다임을 전환했다.",
    "key_researchers": [
      {
        "name_ko": "한스 셀리에",
        "name_en": "Hans Selye",
        "contribution": "스트레스 개념을 의학·심리학에 도입하고, 일반적응증후군(GAS)을 제안하여 스트레스 반응의 단계적 모형을 정립"
      },
      {
        "name_ko": "리처드 래저러스",
        "name_en": "Richard Lazarus",
        "contribution": "스트레스의 인지적 평가 이론(transactional model)을 제안하여, 스트레스가 개인과 환경의 상호작용에서 발생함을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레서",
        "name_en": "Stressor",
        "id": "HEALTH_STRESSOR_002"
      },
      {
        "name_ko": "일반적응증후군",
        "name_en": "General Adaptation Syndrome",
        "id": "HEALTH_GAS_003"
      },
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      }
    ],
    "sub_types": [
      {
        "name_ko": "유스트레스",
        "name_en": "Eustress",
        "description": "적절한 수준의 긍정적 스트레스로, 수행을 향상시키고 성장을 촉진하는 기능을 한다"
      },
      {
        "name_ko": "디스트레스",
        "name_en": "Distress",
        "description": "과도하거나 지속적인 부정적 스트레스로, 심리적·신체적 건강을 해치는 유해한 스트레스"
      }
    ],
    "quiz_hints": {
      "mnemonic": "스트레스 = '요구 > 자원'이라는 인지적 평가의 결과",
      "differential": "스트레스(반응 상태)와 스트레서(스트레스를 유발하는 자극/사건)를 구분할 것",
      "key_point": "Lazarus의 모형에서 1차 평가(위협 여부)와 2차 평가(대처 자원)가 스트레스 경험을 결정한다",
      "common_mistake": "스트레스가 항상 해롭다고 오해하지만, 적절한 수준의 스트레스(유스트레스)는 수행과 동기를 촉진한다"
    }
  },
  {
    "id": "HEALTH_STRESSOR_002",
    "terminology": "스트레서 (Stressor)",
    "terminology_ko": "스트레서",
    "terminology_en": "Stressor",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "스트레스 반응을 유발하는 외적 또는 내적 자극이나 사건. 주요 생활 변화, 일상적 번거로움, 외상적 사건, 만성적 상황 등 다양한 형태가 있다.",
    "definition_en": "An external or internal stimulus or event that triggers a stress response. Stressors can take various forms including major life changes, daily hassles, traumatic events, and chronic conditions.",
    "significance": "스트레스 연구에서 원인 변인을 명확히 구분하기 위한 핵심 개념이다. 스트레서의 유형(급성 vs. 만성, 통제 가능 vs. 불가능)에 따라 건강에 미치는 영향이 달라진다.",
    "key_researchers": [
      {
        "name_ko": "토머스 홈스",
        "name_en": "Thomas Holmes",
        "contribution": "리처드 라헤와 함께 사회재적응평가척도(SRRS)를 개발하여 생활사건 스트레서를 정량화"
      },
      {
        "name_ko": "리처드 라헤",
        "name_en": "Richard Rahe",
        "contribution": "홈스와 함께 SRRS를 개발하고, 생활 변화 단위(LCU)와 질병 발생의 상관을 실증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "생활사건 스트레스",
        "name_en": "Life Events Stress",
        "id": "HEALTH_LIFE_018"
      },
      {
        "name_ko": "일상적 번거로움",
        "name_en": "Daily Hassles",
        "id": "HEALTH_HASSLE_019"
      }
    ],
    "sub_types": [
      {
        "name_ko": "급성 스트레서",
        "name_en": "Acute Stressor",
        "description": "갑자기 발생하며 단기간 지속되는 스트레서 (예: 시험, 교통사고)"
      },
      {
        "name_ko": "만성 스트레서",
        "name_en": "Chronic Stressor",
        "description": "장기간 지속되는 스트레서 (예: 빈곤, 만성 질환, 직장 갈등)"
      },
      {
        "name_ko": "외상적 스트레서",
        "name_en": "Traumatic Stressor",
        "description": "생명 위협이나 극심한 공포를 유발하는 압도적 사건 (예: 자연재해, 전쟁)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "스트레서(stressor) = stress + -or(유발자) → 스트레스를 유발하는 것",
      "differential": "스트레서(자극/원인)와 스트레스(반응/상태)는 구분되는 개념이다",
      "key_point": "같은 스트레서라도 개인의 인지적 평가에 따라 스트레스 수준이 다르게 경험된다",
      "common_mistake": "스트레서가 항상 부정적 사건이라고 오해하지만, 결혼이나 승진 같은 긍정적 사건도 적응을 요구하는 스트레서가 될 수 있다"
    }
  },
  {
    "id": "HEALTH_GAS_003",
    "terminology": "일반적응증후군 (General Adaptation Syndrome, GAS)",
    "terminology_ko": "일반적응증후군",
    "terminology_en": "General Adaptation Syndrome",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "한스 셀리에가 제안한 스트레스에 대한 신체의 비특이적 반응 모형으로, 경고 반응기(alarm), 저항기(resistance), 소진기(exhaustion)의 세 단계로 구성된다.",
    "definition_en": "A three-stage model of the body's nonspecific response to stress proposed by Hans Selye, consisting of the alarm reaction, resistance stage, and exhaustion stage.",
    "significance": "스트레스가 신체에 미치는 생리적 영향을 최초로 체계화한 모형이다. 만성 스트레스가 면역력 저하와 질병으로 이어지는 메커니즘을 설명하며, 스트레스-질병 관계 연구의 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "한스 셀리에",
        "name_en": "Hans Selye",
        "contribution": "1936년 GAS 모형을 제안하여, 스트레서의 종류와 무관하게 신체가 동일한 생리적 반응 패턴을 보임을 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "HEALTH_FF_004"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "id": "HEALTH_CORT_020"
      },
      {
        "name_ko": "소진",
        "name_en": "Burnout",
        "id": "HEALTH_BURN_012"
      }
    ],
    "sub_types": [
      {
        "name_ko": "경고 반응기",
        "name_en": "Alarm Reaction",
        "description": "교감신경계가 활성화되어 투쟁-도피 반응이 나타나는 초기 단계"
      },
      {
        "name_ko": "저항기",
        "name_en": "Resistance Stage",
        "description": "신체가 스트레서에 적응하려 시도하며, 겉으로는 정상으로 보이지만 내부 자원이 소모되는 단계"
      },
      {
        "name_ko": "소진기",
        "name_en": "Exhaustion Stage",
        "description": "적응 에너지가 고갈되어 면역 기능이 저하되고 질병에 취약해지는 최종 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "GAS = 경고(Alarm) → 저항(Resistance) → 소진(Exhaustion) → ARE 순서로 기억",
      "differential": "GAS는 신체의 생리적 반응 단계이고, Lazarus 모형은 인지적 평가 과정이다. 전자는 보편적 반응, 후자는 개인차를 강조",
      "key_point": "셀리에의 핵심 통찰: 스트레서의 종류가 달라도 신체 반응 패턴은 동일하다(비특이적 반응)",
      "common_mistake": "GAS가 심리적 스트레스를 무시한다고 비판받지만, 셀리에의 원래 모형은 생리적 반응에 초점을 맞춘 것이다"
    }
  },
  {
    "id": "HEALTH_FF_004",
    "terminology": "투쟁-도피 반응 (Fight-or-Flight Response)",
    "terminology_ko": "투쟁-도피 반응",
    "terminology_en": "Fight-or-Flight Response",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "위협적 상황에서 교감신경계가 활성화되어 신체를 위협에 맞서 싸우거나(fight) 도망칠(flight) 수 있도록 준비시키는 급성 생리적 각성 반응. 아드레날린과 노르아드레날린이 분비되어 심박수, 호흡, 근육 긴장이 증가한다.",
    "definition_en": "An acute physiological arousal response in which the sympathetic nervous system is activated to prepare the body to either confront (fight) or flee from (flight) a perceived threat. Adrenaline and noradrenaline are released, increasing heart rate, respiration, and muscle tension.",
    "significance": "진화적으로 생존에 필수적인 적응 반응이었으나, 현대 사회에서는 만성적으로 활성화되어 심혈관 질환 등 건강 문제를 유발할 수 있다. GAS의 경고 반응기에 해당한다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐논",
        "name_en": "Walter Cannon",
        "contribution": "1929년 투쟁-도피 반응 개념을 최초로 명명하고, 교감신경-부신 축의 역할을 규명"
      },
      {
        "name_ko": "셸리 테일러",
        "name_en": "Shelley Taylor",
        "contribution": "여성의 스트레스 반응으로 돌봄-친교 반응(tend-and-befriend)을 제안하여 투쟁-도피 모형을 보완"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일반적응증후군",
        "name_en": "General Adaptation Syndrome",
        "id": "HEALTH_GAS_003"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "id": "HEALTH_CORT_020"
      },
      {
        "name_ko": "심혈관 질환과 스트레스",
        "name_en": "Cardiovascular Disease & Stress",
        "id": "HEALTH_CVD_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Fight or Flight = 싸우거나(Fight) 도망가거나(Flight) → 월터 캐논이 명명",
      "differential": "투쟁-도피 반응(급성 위협 대응)과 일반적응증후군(장기적 스트레스 반응 단계)을 구분할 것",
      "key_point": "Taylor의 돌봄-친교 반응(tend-and-befriend)은 투쟁-도피가 주로 남성의 반응 패턴일 수 있음을 시사한다",
      "common_mistake": "투쟁-도피 반응이 공포에서만 발생한다고 오해하지만, 분노, 긴급 상황 등 다양한 위협에서 활성화된다"
    }
  },
  {
    "id": "HEALTH_TYPEA_005",
    "terminology": "A형 행동양식 (Type A Behavior Pattern)",
    "terminology_ko": "A형 행동양식",
    "terminology_en": "Type A Behavior Pattern",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "경쟁심, 시간 긴박감, 적대감, 공격성을 특징으로 하는 행동 패턴으로, 관상동맥 심장질환과의 관련성이 연구되어 왔다. 특히 적대감 요소가 심혈관 질환의 핵심 위험 요인으로 밝혀졌다.",
    "definition_en": "A behavior pattern characterized by competitiveness, time urgency, hostility, and aggression, studied for its association with coronary heart disease. Hostility has been identified as the key component linked to cardiovascular risk.",
    "significance": "성격과 신체 질환의 관계를 최초로 체계적으로 연구한 사례로, 행동의학과 건강심리학의 발전에 크게 기여했다. 후속 연구에서 적대감이 핵심 병인 요소로 분리되었다.",
    "key_researchers": [
      {
        "name_ko": "메이어 프리드먼",
        "name_en": "Meyer Friedman",
        "contribution": "레이 로젠만과 함께 A형 행동양식 개념을 제안하고 관상동맥 질환과의 관련성을 실증"
      },
      {
        "name_ko": "레이 로젠만",
        "name_en": "Ray Rosenman",
        "contribution": "프리드먼과 공동으로 Western Collaborative Group Study를 수행하여 A형-심장질환 연결을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B형 행동양식",
        "name_en": "Type B Behavior Pattern",
        "id": "HEALTH_TYPEB_006"
      },
      {
        "name_ko": "심혈관 질환과 스트레스",
        "name_en": "Cardiovascular Disease & Stress",
        "id": "HEALTH_CVD_030"
      },
      {
        "name_ko": "건강심리학",
        "name_en": "Health Psychology",
        "id": "HEALTH_HPSY_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "A형 = Aggressive(공격적), Ambitious(야심적), Angry(분노), Always in a hurry(항상 바쁨)",
      "differential": "A형(경쟁적, 적대적, 시간 압박감)과 B형(여유롭고 느긋한)은 행동 양식의 양극단이다",
      "key_point": "후속 연구에서 A형의 모든 요소가 아닌 '적대감(hostility)' 요소만이 심장질환의 독립적 위험 요인으로 확인되었다",
      "common_mistake": "A형 행동양식이 곧 심장병을 유발한다고 단정짓는 오류 — 적대감이라는 특정 요소가 핵심이며, A형 전체가 위험 요인은 아니다"
    }
  },
  {
    "id": "HEALTH_TYPEB_006",
    "terminology": "B형 행동양식 (Type B Behavior Pattern)",
    "terminology_ko": "B형 행동양식",
    "terminology_en": "Type B Behavior Pattern",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "여유롭고, 느긋하며, 비경쟁적인 행동 패턴으로, A형 행동양식과 대비되는 개념이다. 시간 압박감이 적고 적대감이 낮아 심혈관 질환의 위험이 상대적으로 낮은 것으로 알려져 있다.",
    "definition_en": "A relaxed, easygoing, and noncompetitive behavior pattern, contrasted with Type A. Characterized by low time urgency and low hostility, associated with relatively lower risk of cardiovascular disease.",
    "significance": "A형 행동양식의 대조 개념으로, 성격-건강 관계 연구에서 기준점 역할을 한다. 그러나 B형이 반드시 건강한 것은 아니며, 다양한 성격 차원이 건강에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "메이어 프리드먼",
        "name_en": "Meyer Friedman",
        "contribution": "A형과 대비되는 B형 행동양식을 함께 개념화"
      },
      {
        "name_ko": "레이 로젠만",
        "name_en": "Ray Rosenman",
        "contribution": "A형/B형 분류 체계를 공동 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A형 행동양식",
        "name_en": "Type A Behavior Pattern",
        "id": "HEALTH_TYPEA_005"
      },
      {
        "name_ko": "심혈관 질환과 스트레스",
        "name_en": "Cardiovascular Disease & Stress",
        "id": "HEALTH_CVD_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "B형 = Be relaxed(여유롭게), Be calm(차분하게) → 느긋한 행동양식",
      "differential": "A형(경쟁적·적대적·시간압박)과 B형(여유롭고·비경쟁적)은 연속선상의 양극단이다",
      "key_point": "A형/B형 구분은 이분법이 아닌 연속선(continuum)으로 이해해야 한다",
      "common_mistake": "B형이 '게으른' 성격이라고 오해하지만, 여유로움과 게으름은 다른 개념이다"
    }
  },
  {
    "id": "HEALTH_PNI_007",
    "terminology": "심리신경면역학 (Psychoneuroimmunology)",
    "terminology_ko": "심리신경면역학",
    "terminology_en": "Psychoneuroimmunology",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "심리적 과정(스트레스, 정서, 인지)이 신경계와 내분비계를 매개로 면역 기능에 미치는 영향을 연구하는 학제간 분야. 스트레스가 면역력을 저하시키는 경로를 과학적으로 규명한다.",
    "definition_en": "An interdisciplinary field studying how psychological processes (stress, emotion, cognition) influence immune function through the nervous and endocrine systems. It scientifically elucidates the pathways through which stress suppresses immunity.",
    "significance": "마음과 몸의 연결을 실증적으로 입증한 분야로, 스트레스가 감기, 암, 자가면역 질환 등 다양한 질병의 발병과 경과에 영향을 미치는 메커니즘을 밝혔다.",
    "key_researchers": [
      {
        "name_ko": "로버트 아더",
        "name_en": "Robert Ader",
        "contribution": "1981년 '심리신경면역학(Psychoneuroimmunology)'이라는 용어를 창안하고, 면역 반응이 조건화될 수 있음을 실험으로 증명"
      },
      {
        "name_ko": "자니스 키콜트-글레이저",
        "name_en": "Janice Kiecolt-Glaser",
        "contribution": "시험 스트레스가 의대생의 면역 기능을 저하시킨다는 연구 등 스트레스-면역 관계에 대한 핵심적 실증 연구 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "면역계",
        "name_en": "Immune System",
        "id": "HEALTH_IMMUNE_021"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "id": "HEALTH_CORT_020"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PNI = Psycho(심리) + Neuro(신경) + Immunology(면역학) → 세 체계의 연결",
      "differential": "심리신경면역학(마음→면역)과 건강심리학(행동→건강 전반)은 범위가 다르다. PNI는 면역 메커니즘에 초점",
      "key_point": "Robert Ader의 고전 실험: 쥐에게 면역억제제와 사카린 용액을 짝지어 제시하자, 나중에 사카린만으로도 면역 반응이 억제됨",
      "common_mistake": "PNI가 스트레스의 면역 억제만 연구한다고 오해하지만, 긍정적 심리 상태가 면역 기능을 강화하는 과정도 포함한다"
    }
  },
  {
    "id": "HEALTH_COPE_008",
    "terminology": "대처 (Coping)",
    "terminology_ko": "대처",
    "terminology_en": "Coping",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "스트레스 상황의 요구를 관리하기 위해 개인이 사용하는 인지적·행동적 노력. 문제중심 대처와 정서중심 대처로 크게 구분되며, 상황에 따라 적응적이거나 부적응적일 수 있다.",
    "definition_en": "Cognitive and behavioral efforts used by an individual to manage the demands of a stressful situation. Broadly categorized into problem-focused and emotion-focused coping, which can be adaptive or maladaptive depending on the situation.",
    "significance": "Lazarus와 Folkman의 스트레스 이론에서 핵심 개념으로, 스트레스 자체보다 대처 방식이 적응 결과를 결정한다. 임상심리학과 건강심리학의 핵심 중재 표적이다.",
    "key_researchers": [
      {
        "name_ko": "리처드 래저러스",
        "name_en": "Richard Lazarus",
        "contribution": "수전 폴크만과 함께 대처의 인지적 평가 모형을 제안하고 문제중심/정서중심 대처의 분류 체계를 정립"
      },
      {
        "name_ko": "수전 폴크만",
        "name_en": "Susan Folkman",
        "contribution": "Lazarus와 공동으로 스트레스 대처 이론을 발전시키고, 의미중심 대처(meaning-focused coping)를 추가 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "문제중심 대처",
        "name_en": "Problem-Focused Coping",
        "id": "HEALTH_PFC_009"
      },
      {
        "name_ko": "정서중심 대처",
        "name_en": "Emotion-Focused Coping",
        "id": "HEALTH_EFC_010"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "문제중심 대처",
        "name_en": "Problem-Focused Coping",
        "description": "스트레스 원인을 직접 해결하려는 대처 전략"
      },
      {
        "name_ko": "정서중심 대처",
        "name_en": "Emotion-Focused Coping",
        "description": "스트레스로 인한 부정적 정서를 조절하려는 대처 전략"
      },
      {
        "name_ko": "의미중심 대처",
        "name_en": "Meaning-Focused Coping",
        "description": "역경에서 긍정적 의미를 발견하고 가치를 재정립하는 대처 전략"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대처 = 對(맞설 대) + 處(곳 처) → 스트레스에 맞서는 방법",
      "differential": "대처(의식적 노력)와 방어기제(무의식적 기제)를 구분할 것. 대처는 인지적으로 자각된 전략이다",
      "key_point": "통제 가능한 상황에서는 문제중심 대처가, 통제 불가능한 상황에서는 정서중심 대처가 더 적응적이다",
      "common_mistake": "정서중심 대처가 항상 비효과적이라고 오해하지만, 상황에 따라 가장 적응적인 전략일 수 있다"
    }
  },
  {
    "id": "HEALTH_PFC_009",
    "terminology": "문제중심 대처 (Problem-Focused Coping)",
    "terminology_ko": "문제중심 대처",
    "terminology_en": "Problem-Focused Coping",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "스트레스의 원인이 되는 문제를 직접 해결하거나 변화시키려는 대처 전략. 정보 수집, 계획 수립, 직접 행동, 도움 요청 등이 포함된다.",
    "definition_en": "A coping strategy aimed at directly addressing or changing the source of stress. Includes information gathering, planning, direct action, and seeking instrumental help.",
    "significance": "스트레서가 통제 가능한 상황에서 가장 효과적인 대처 방식으로, 스트레스의 근본 원인을 제거함으로써 장기적 적응에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 래저러스",
        "name_en": "Richard Lazarus",
        "contribution": "문제중심 대처와 정서중심 대처의 이원적 분류 체계를 제안"
      },
      {
        "name_ko": "수전 폴크만",
        "name_en": "Susan Folkman",
        "contribution": "대처 방식 질문지(Ways of Coping Questionnaire)를 개발하여 대처 유형을 측정"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      },
      {
        "name_ko": "정서중심 대처",
        "name_en": "Emotion-Focused Coping",
        "id": "HEALTH_EFC_010"
      },
      {
        "name_ko": "통제감",
        "name_en": "Perceived Control",
        "id": "HEALTH_CTRL_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "문제중심 = 문제를 직접 해결 → Problem을 Fix하는 대처",
      "differential": "문제중심(원인 해결)과 정서중심(감정 조절)은 동시에 사용 가능하며, 상호배타적이지 않다",
      "key_point": "통제 가능한 상황(예: 시험 준비 부족)에서는 문제중심 대처가 더 적응적이다",
      "common_mistake": "문제중심 대처가 항상 최선이라고 오해하지만, 통제 불가능한 상황(예: 사별)에서는 오히려 비효과적일 수 있다"
    }
  },
  {
    "id": "HEALTH_EFC_010",
    "terminology": "정서중심 대처 (Emotion-Focused Coping)",
    "terminology_ko": "정서중심 대처",
    "terminology_en": "Emotion-Focused Coping",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "스트레스로 인한 부정적 감정을 조절하고 완화하기 위한 대처 전략. 재평가, 정서적 지지 추구, 이완, 수용, 회피 등이 포함된다.",
    "definition_en": "A coping strategy aimed at regulating and alleviating negative emotions caused by stress. Includes reappraisal, seeking emotional support, relaxation, acceptance, and avoidance.",
    "significance": "통제 불가능한 상황에서 심리적 안녕을 유지하는 데 핵심적 역할을 한다. 적응적 정서중심 대처(재평가, 수용)와 부적응적 정서중심 대처(회피, 부인)를 구분하는 것이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "수전 폴크만",
        "name_en": "Susan Folkman",
        "contribution": "정서중심 대처의 적응적 기능을 강조하고, 긍정적 재평가의 효과를 실증"
      },
      {
        "name_ko": "리처드 래저러스",
        "name_en": "Richard Lazarus",
        "contribution": "정서중심 대처를 문제중심 대처와 대등한 독립적 대처 유형으로 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      },
      {
        "name_ko": "문제중심 대처",
        "name_en": "Problem-Focused Coping",
        "id": "HEALTH_PFC_009"
      },
      {
        "name_ko": "사회적 지지",
        "name_en": "Social Support",
        "id": "HEALTH_SOCSUP_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "적응적 정서중심 대처",
        "name_en": "Adaptive Emotion-Focused Coping",
        "description": "인지적 재평가, 수용, 정서적 지지 추구 등 건강한 정서 조절 전략"
      },
      {
        "name_ko": "부적응적 정서중심 대처",
        "name_en": "Maladaptive Emotion-Focused Coping",
        "description": "회피, 부인, 약물 남용 등 장기적으로 해로운 정서 조절 전략"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정서중심 = 감정(Emotion)을 다스리는 대처 → 원인이 아닌 감정에 초점",
      "differential": "정서중심 대처 중 재평가·수용은 적응적이지만, 회피·부인은 부적응적이다. 같은 범주 내에서도 효과가 다르다",
      "key_point": "사별, 불치병 진단 등 통제 불가능한 상황에서는 정서중심 대처가 가장 적응적인 전략이 된다",
      "common_mistake": "정서중심 대처를 '약한' 대처 방식으로 평가하는 오류 — 상황 적합성이 효과를 결정한다"
    }
  },
  {
    "id": "HEALTH_SOCSUP_011",
    "terminology": "사회적 지지 (Social Support)",
    "terminology_ko": "사회적 지지",
    "terminology_en": "Social Support",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "타인으로부터 받는 정서적, 도구적, 정보적, 평가적 도움으로, 스트레스의 부정적 영향을 완충하는 보호 요인이다. 지각된 사회적 지지가 실제 지지보다 건강에 더 강한 영향을 미친다.",
    "definition_en": "Emotional, instrumental, informational, and appraisal assistance received from others, serving as a protective buffer against the negative effects of stress. Perceived social support has a stronger impact on health than actual support received.",
    "significance": "스트레스 완충 모형(buffering hypothesis)에서 핵심 매개 변인으로, 사회적 지지가 높은 사람은 스트레스 상황에서도 건강을 더 잘 유지한다. 면역 기능, 심혈관 건강, 정신건강 모두에 보호 효과가 있다.",
    "key_researchers": [
      {
        "name_ko": "셀던 코헨",
        "name_en": "Sheldon Cohen",
        "contribution": "사회적 지지의 스트레스 완충 효과를 실증하고, 사회적 통합이 감기 바이러스 저항력을 높인다는 실험 연구 수행"
      },
      {
        "name_ko": "하우스",
        "name_en": "James House",
        "contribution": "사회적 지지의 네 가지 유형(정서적, 도구적, 정보적, 평가적)을 분류하고 직업 스트레스에서의 완충 효과를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "HEALTH_RESIL_023"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정서적 지지",
        "name_en": "Emotional Support",
        "description": "공감, 돌봄, 사랑 등 정서적 위로와 안정감을 제공하는 지지"
      },
      {
        "name_ko": "도구적 지지",
        "name_en": "Instrumental Support",
        "description": "금전적 도움, 물자 제공 등 실질적·물질적 도움"
      },
      {
        "name_ko": "정보적 지지",
        "name_en": "Informational Support",
        "description": "조언, 안내, 정보 제공 등 문제 해결에 도움이 되는 지식 제공"
      },
      {
        "name_ko": "평가적 지지",
        "name_en": "Appraisal Support",
        "description": "자기평가에 도움이 되는 피드백과 사회적 비교 정보 제공"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사회적 지지의 4유형: 정서적·도구적·정보적·평가적 → 정·도·정·평",
      "differential": "스트레스 완충 모형(사회적 지지가 스트레스 영향을 완충)과 직접 효과 모형(사회적 지지가 항상 건강에 이로움)을 구분",
      "key_point": "Cohen의 연구: 사회적 네트워크가 다양한 사람들이 감기 바이러스에 노출되어도 감기에 걸릴 확률이 낮았다",
      "common_mistake": "사회적 지지를 양적으로만 판단하는 오류 — 관계의 수보다 지각된 지지의 질이 건강에 더 중요하다"
    }
  },
  {
    "id": "HEALTH_BURN_012",
    "terminology": "소진 (Burnout)",
    "terminology_ko": "소진",
    "terminology_en": "Burnout",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "만성적 직무 스트레스에 대한 반응으로 나타나는 심리적 증후군. 정서적 고갈(emotional exhaustion), 비인격화(depersonalization), 개인적 성취감 저하(reduced personal accomplishment)의 세 요소로 구성된다.",
    "definition_en": "A psychological syndrome resulting from chronic occupational stress, consisting of three components: emotional exhaustion, depersonalization (cynicism), and reduced personal accomplishment.",
    "significance": "현대 산업사회에서 주요 직업 건강 문제로 인식되며, 의료·교육·사회서비스 종사자에게 특히 높은 유병률을 보인다. WHO가 ICD-11에 직업 관련 현상으로 포함시켰다.",
    "key_researchers": [
      {
        "name_ko": "크리스티나 매슬랙",
        "name_en": "Christina Maslach",
        "contribution": "소진의 3요소 모형을 제안하고, 매슬랙 소진 척도(MBI)를 개발하여 소진 연구의 표준을 확립"
      },
      {
        "name_ko": "허버트 프로이덴버거",
        "name_en": "Herbert Freudenberger",
        "contribution": "1974년 '번아웃(burnout)'이라는 용어를 심리학에 최초로 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "일반적응증후군",
        "name_en": "General Adaptation Syndrome",
        "id": "HEALTH_GAS_003"
      },
      {
        "name_ko": "통제감",
        "name_en": "Perceived Control",
        "id": "HEALTH_CTRL_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소진 3요소: 정서적 고갈·비인격화·성취감 저하 → '정비성' 또는 'EDA(Exhaustion-Depersonalization-Accomplishment↓)'",
      "differential": "소진(직무 관련 만성 스트레스)과 우울증(전반적 기능 저하)은 원인과 범위가 다르다",
      "key_point": "소진은 개인의 취약성보다 직무 환경(과도한 업무량, 통제 부족, 보상 부족)이 주요 원인이다",
      "common_mistake": "소진을 단순한 '피로'와 동일시하는 오류 — 소진은 정서적 고갈, 냉소주의, 효능감 저하를 포함하는 복합 증후군이다"
    }
  },
  {
    "id": "HEALTH_CTRL_013",
    "terminology": "통제감 (Perceived Control)",
    "terminology_ko": "통제감",
    "terminology_en": "Perceived Control",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "자신이 환경이나 사건에 영향을 미칠 수 있다고 지각하는 주관적 믿음. 통제감이 높을수록 스트레스의 부정적 영향이 감소하며, 신체적·심리적 건강이 향상된다.",
    "definition_en": "The subjective belief that one can influence events and outcomes in one's environment. Higher perceived control is associated with reduced negative effects of stress and improved physical and psychological health.",
    "significance": "학습된 무기력 이론과 연결되어, 통제감 상실이 우울, 무기력, 면역 기능 저하를 초래함을 보여준다. 노인 건강, 직업 스트레스, 환자 회복 등 다양한 영역에서 중요한 보호 요인이다.",
    "key_researchers": [
      {
        "name_ko": "엘런 랭어",
        "name_en": "Ellen Langer",
        "contribution": "요양원 연구를 통해 통제감이 노인의 건강과 생존율에 미치는 극적 효과를 실증"
      },
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "학습된 무기력(learned helplessness) 이론으로 통제감 상실의 부정적 결과를 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "자기효능감과 건강",
        "name_en": "Self-Efficacy & Health",
        "id": "HEALTH_SE_029"
      },
      {
        "name_ko": "낙관주의",
        "name_en": "Optimism",
        "id": "HEALTH_OPT_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통제감 = 내가 변화시킬 수 있다는 믿음 → Langer의 요양원 화분 실험",
      "differential": "통제감(내가 영향을 미칠 수 있다는 믿음)과 자기효능감(특정 과제를 수행할 수 있다는 믿음)은 범위가 다르다",
      "key_point": "Langer & Rodin(1976) 요양원 연구: 화분을 돌보는 선택권을 가진 노인들이 그렇지 않은 노인보다 더 건강하고 오래 생존했다",
      "common_mistake": "실제 통제력보다 '지각된' 통제감이 건강에 더 중요하다는 점을 놓치는 경우가 많다"
    }
  },
  {
    "id": "HEALTH_OPT_014",
    "terminology": "낙관주의 (Optimism)",
    "terminology_ko": "낙관주의",
    "terminology_en": "Optimism",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "미래에 좋은 결과가 일어날 것이라고 기대하는 일반화된 경향성. 낙관주의자는 스트레스 상황에서 더 적극적인 대처 전략을 사용하고, 더 나은 신체적·심리적 건강 결과를 보인다.",
    "definition_en": "A generalized tendency to expect positive outcomes. Optimists tend to use more active coping strategies under stress and demonstrate better physical and psychological health outcomes.",
    "significance": "긍정심리학의 핵심 개념으로, Scheier와 Carver의 성향적 낙관주의 연구와 Seligman의 학습된 낙관주의 연구가 건강에 대한 낙관주의의 보호 효과를 폭넓게 입증했다.",
    "key_researchers": [
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "학습된 낙관주의(learned optimism) 개념을 제안하고, 설명양식(explanatory style)이 건강에 미치는 영향을 연구"
      },
      {
        "name_ko": "마이클 셰이어",
        "name_en": "Michael Scheier",
        "contribution": "찰스 카버와 함께 성향적 낙관주의(dispositional optimism) 개념과 LOT(Life Orientation Test) 척도를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "긍정심리학",
        "name_en": "Positive Psychology",
        "id": "HEALTH_POSPSYCH_022"
      },
      {
        "name_ko": "통제감",
        "name_en": "Perceived Control",
        "id": "HEALTH_CTRL_013"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "HEALTH_RESIL_023"
      }
    ],
    "sub_types": [
      {
        "name_ko": "성향적 낙관주의",
        "name_en": "Dispositional Optimism",
        "description": "미래에 대해 일반적으로 긍정적 결과를 기대하는 안정적 성격 특성"
      },
      {
        "name_ko": "학습된 낙관주의",
        "name_en": "Learned Optimism",
        "description": "설명양식을 변화시켜 훈련으로 습득 가능한 낙관적 사고 방식"
      }
    ],
    "quiz_hints": {
      "mnemonic": "낙관주의 = 좋은 일은 '내 덕', 나쁜 일은 '일시적·상황적' → 설명양식의 차이",
      "differential": "낙관주의(미래 결과에 대한 기대)와 자기효능감(특정 과제 수행 능력에 대한 믿음)을 구분",
      "key_point": "Seligman의 설명양식: 낙관주의자는 나쁜 사건을 일시적·특수적·외적 원인으로, 좋은 사건을 영구적·보편적·내적 원인으로 설명한다",
      "common_mistake": "비현실적 낙관주의(unrealistic optimism)는 오히려 위험 행동을 증가시킬 수 있다는 점을 간과하는 오류"
    }
  },
  {
    "id": "HEALTH_PSY_015",
    "terminology": "심신장애 (Psychosomatic Disorder)",
    "terminology_ko": "심신장애",
    "terminology_en": "Psychosomatic Disorder",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "심리적 요인(스트레스, 정서, 성격 등)이 발병이나 악화에 중요한 역할을 하는 신체 질환. 실제 기질적 병변이 존재하며, 단순한 꾀병이나 상상이 아니다.",
    "definition_en": "Physical illness in which psychological factors (stress, emotion, personality) play a significant role in onset or exacerbation. Actual organic pathology exists; it is not malingering or imaginary.",
    "significance": "마음-몸 이원론을 극복하고 생물심리사회 모형의 필요성을 보여주는 대표적 개념이다. 위궤양, 고혈압, 천식, 습진 등이 초기 심신의학의 주요 연구 대상이었다.",
    "key_researchers": [
      {
        "name_ko": "프란츠 알렉산더",
        "name_en": "Franz Alexander",
        "contribution": "시카고학파의 심신의학을 이끌며, 특정 심리적 갈등이 특정 신체 질환과 연결된다는 특이성 가설(specificity hypothesis)을 제안"
      },
      {
        "name_ko": "헬렌 플랜더스 던바",
        "name_en": "Helen Flanders Dunbar",
        "contribution": "심신의학(psychosomatic medicine) 분야의 선구자로, 성격 유형과 질병의 관계를 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "건강심리학",
        "name_en": "Health Psychology",
        "id": "HEALTH_HPSY_016"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      },
      {
        "name_ko": "심리신경면역학",
        "name_en": "Psychoneuroimmunology",
        "id": "HEALTH_PNI_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심신(心身)장애 = 마음(心/psycho) + 몸(身/somatic) → 마음이 몸에 영향",
      "differential": "심신장애(실제 기질적 병변 존재)와 전환장애(conversion disorder, 신경학적 원인 없는 신체 증상)를 구분",
      "key_point": "현대에는 '심신장애'보다 '심리적 요인이 영향을 미치는 의학적 상태(psychological factors affecting medical condition)'라는 표현이 선호된다",
      "common_mistake": "심신장애를 '마음의 병'이나 '가짜 질병'으로 오해하지만, 실제 신체적 손상이 존재하는 진짜 질환이다"
    }
  },
  {
    "id": "HEALTH_HPSY_016",
    "terminology": "건강심리학 (Health Psychology)",
    "terminology_ko": "건강심리학",
    "terminology_en": "Health Psychology",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "건강의 증진과 유지, 질병의 예방과 치료, 건강 관련 행동의 이해에 심리학 원리를 적용하는 분야. 생물심리사회 모형(biopsychosocial model)에 기반한다.",
    "definition_en": "A field that applies psychological principles to the promotion and maintenance of health, prevention and treatment of illness, and understanding of health-related behaviors. Based on the biopsychosocial model.",
    "significance": "생의학적 모형(biomedical model)의 한계를 극복하고, 건강과 질병에 대한 다차원적 접근을 제공한다. 행동 변화, 환자 순응, 통증 관리, 만성질환 대처 등을 연구한다.",
    "key_researchers": [
      {
        "name_ko": "조지프 마타라초",
        "name_en": "Joseph Matarazzo",
        "contribution": "건강심리학을 독립적 학문 분야로 확립하는 데 주도적 역할을 하고, 행동건강(behavioral health) 개념을 정의"
      },
      {
        "name_ko": "조지 엥겔",
        "name_en": "George Engel",
        "contribution": "생물심리사회 모형(biopsychosocial model)을 제안하여 건강심리학의 이론적 토대를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동의학",
        "name_en": "Behavioral Medicine",
        "id": "HEALTH_BMED_017"
      },
      {
        "name_ko": "심신장애",
        "name_en": "Psychosomatic Disorder",
        "id": "HEALTH_PSY_015"
      },
      {
        "name_ko": "건강행동",
        "name_en": "Health Behavior",
        "id": "HEALTH_HBEHAV_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "건강심리학 = 심리학 + 건강 → 생물심리사회(BPS) 모형이 핵심 프레임워크",
      "differential": "건강심리학(심리학 내 분과)과 행동의학(의학·심리학 통합 학제간 분야)의 범위 차이를 이해",
      "key_point": "Engel(1977)의 생물심리사회 모형: 건강과 질병은 생물학적·심리적·사회적 요인의 상호작용으로 결정된다",
      "common_mistake": "건강심리학이 정신건강만 다룬다고 오해하지만, 신체 질환의 예방·치료·재활에서의 심리적 요인을 폭넓게 연구한다"
    }
  },
  {
    "id": "HEALTH_BMED_017",
    "terminology": "행동의학 (Behavioral Medicine)",
    "terminology_ko": "행동의학",
    "terminology_en": "Behavioral Medicine",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "건강과 질병에 관련된 행동과학적 지식과 기법을 의학에 통합하여 적용하는 학제간 분야. 질병 예방, 진단, 치료, 재활에서 행동적 접근을 활용한다.",
    "definition_en": "An interdisciplinary field that integrates behavioral science knowledge and techniques with medicine for application to health and illness. It utilizes behavioral approaches in disease prevention, diagnosis, treatment, and rehabilitation.",
    "significance": "심리학, 의학, 공중보건, 사회학 등을 통합하는 광범위한 학제간 접근으로, 만성질환 관리, 건강행동 변화, 통증 관리 등에서 핵심적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "닐 밀러",
        "name_en": "Neal Miller",
        "contribution": "바이오피드백 연구의 선구자로, 자율신경계 반응의 조건화 가능성을 증명하여 행동의학의 기초를 마련"
      },
      {
        "name_ko": "오블 폼로",
        "name_en": "Ovide Pomerleau",
        "contribution": "행동의학의 정의와 범위를 체계화하는 데 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "건강심리학",
        "name_en": "Health Psychology",
        "id": "HEALTH_HPSY_016"
      },
      {
        "name_ko": "바이오피드백",
        "name_en": "Biofeedback",
        "id": "HEALTH_BIO_026"
      },
      {
        "name_ko": "건강행동",
        "name_en": "Health Behavior",
        "id": "HEALTH_HBEHAV_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동의학 = 행동과학 + 의학의 통합 → 건강심리학보다 넓은 학제간 분야",
      "differential": "행동의학(학제간 통합 분야, 의학 포함)과 건강심리학(심리학 내 하위 분야)은 범위가 다르다",
      "key_point": "행동의학은 심리학자뿐 아니라 의사, 간호사, 공중보건 전문가 등이 함께 참여하는 통합적 분야이다",
      "common_mistake": "행동의학과 건강심리학을 동의어로 사용하는 오류 — 행동의학이 더 넓은 학제간 개념이다"
    }
  },
  {
    "id": "HEALTH_LIFE_018",
    "terminology": "생활사건 스트레스 (Life Events Stress)",
    "terminology_ko": "생활사건 스트레스",
    "terminology_en": "Life Events Stress",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "결혼, 이혼, 해고, 이사 등 중요한 생활 변화가 적응을 요구하여 유발하는 스트레스. Holmes와 Rahe의 사회재적응평가척도(SRRS)로 측정하며, 누적된 생활 변화 단위(LCU)가 높을수록 질병 위험이 증가한다.",
    "definition_en": "Stress caused by major life changes (marriage, divorce, job loss, relocation) that require adaptation. Measured by Holmes and Rahe's Social Readjustment Rating Scale (SRRS); higher accumulated Life Change Units (LCU) are associated with increased illness risk.",
    "significance": "스트레스를 정량화하려는 최초의 체계적 시도로, 생활사건과 건강의 상관을 실증했다. 그러나 개인차를 무시하고 사건의 객관적 가중치만 고려한다는 비판을 받는다.",
    "key_researchers": [
      {
        "name_ko": "토머스 홈스",
        "name_en": "Thomas Holmes",
        "contribution": "리처드 라헤와 사회재적응평가척도(SRRS)를 개발하여 43가지 생활사건에 스트레스 점수를 부여"
      },
      {
        "name_ko": "리처드 라헤",
        "name_en": "Richard Rahe",
        "contribution": "해군 연구를 통해 LCU 점수와 질병 발생률의 상관을 실증적으로 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레서",
        "name_en": "Stressor",
        "id": "HEALTH_STRESSOR_002"
      },
      {
        "name_ko": "일상적 번거로움",
        "name_en": "Daily Hassles",
        "id": "HEALTH_HASSLE_019"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SRRS = Social Readjustment Rating Scale → 사회재적응평가척도. 배우자 사망(100점)이 최고 점수",
      "differential": "생활사건 스트레스(주요 사건)와 일상적 번거로움(사소한 반복 스트레스)은 다른 유형의 스트레서이다",
      "key_point": "SRRS에서 배우자 사망(100), 이혼(73), 결혼(50)의 점수를 기억할 것 — 긍정적 사건도 적응을 요구하므로 스트레스를 유발한다",
      "common_mistake": "생활사건 점수가 높으면 반드시 질병에 걸린다고 오해하지만, 상관관계이지 인과관계가 아니며 개인차가 크다"
    }
  },
  {
    "id": "HEALTH_HASSLE_019",
    "terminology": "일상적 번거로움 (Daily Hassles)",
    "terminology_ko": "일상적 번거로움",
    "terminology_en": "Daily Hassles",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "교통 체증, 업무 마감, 가사 부담 등 일상생활에서 반복적으로 경험하는 사소하지만 짜증스러운 사건들. 연구에 따르면, 주요 생활사건보다 일상적 번거로움의 누적이 건강에 더 큰 영향을 미칠 수 있다.",
    "definition_en": "Minor but irritating events experienced repeatedly in daily life, such as traffic jams, work deadlines, and household chores. Research suggests that accumulated daily hassles may have a greater impact on health than major life events.",
    "significance": "Kanner 등의 연구는 일상적 번거로움이 주요 생활사건보다 심리적 안녕과 신체 건강의 더 강력한 예측 변인임을 보여주었다. 스트레스 측정의 정교화에 기여했다.",
    "key_researchers": [
      {
        "name_ko": "앨런 캐너",
        "name_en": "Allen Kanner",
        "contribution": "일상적 번거로움 척도(Hassles Scale)를 개발하고, 번거로움이 건강에 미치는 영향을 실증"
      },
      {
        "name_ko": "리처드 래저러스",
        "name_en": "Richard Lazarus",
        "contribution": "일상적 번거로움이 주요 생활사건보다 건강의 더 나은 예측 변인이라는 주장을 뒷받침하는 이론적 틀을 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생활사건 스트레스",
        "name_en": "Life Events Stress",
        "id": "HEALTH_LIFE_018"
      },
      {
        "name_ko": "스트레서",
        "name_en": "Stressor",
        "id": "HEALTH_STRESSOR_002"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일상적 번거로움 = 작지만 쌓이면 큰 스트레스 → '티끌 모아 태산'",
      "differential": "일상적 번거로움(사소하지만 반복적)과 생활사건(드물지만 중대한) — 전자가 건강을 더 잘 예측한다는 연구가 있다",
      "key_point": "Kanner 등(1981): 일상적 번거로움의 빈도와 강도가 심리적·신체적 증상의 더 강력한 예측 변인이었다",
      "common_mistake": "사소한 일이라서 건강에 영향을 미치지 않는다고 간과하지만, 누적 효과가 심각할 수 있다"
    }
  },
  {
    "id": "HEALTH_CORT_020",
    "terminology": "코르티솔 (Cortisol)",
    "terminology_ko": "코르티솔",
    "terminology_en": "Cortisol",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "부신피질에서 분비되는 주요 스트레스 호르몬(글루코코르티코이드)으로, HPA축(시상하부-뇌하수체-부신 축)에 의해 조절된다. 단기적으로는 에너지 동원과 면역 조절에 기여하지만, 만성적 분비 시 면역 억제, 해마 손상, 체지방 축적 등을 초래한다.",
    "definition_en": "A major stress hormone (glucocorticoid) secreted by the adrenal cortex, regulated by the HPA (hypothalamic-pituitary-adrenal) axis. Acutely, it mobilizes energy and modulates immune function, but chronic elevation can suppress immunity, damage the hippocampus, and increase body fat.",
    "significance": "스트레스의 생리적 메커니즘을 이해하는 핵심 바이오마커이다. 만성 스트레스 → 코르티솔 상승 → 면역 억제 → 질병 취약성 증가의 경로가 심리신경면역학의 중심 모형이다.",
    "key_researchers": [
      {
        "name_ko": "브루스 매큐언",
        "name_en": "Bruce McEwen",
        "contribution": "알로스타틱 부하(allostatic load) 개념을 제안하여, 만성적 코르티솔 상승이 신체에 미치는 누적적 마모를 설명"
      },
      {
        "name_ko": "로버트 사폴스키",
        "name_en": "Robert Sapolsky",
        "contribution": "영장류 연구를 통해 만성 스트레스로 인한 코르티솔 상승이 해마 뉴런을 손상시킴을 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "HEALTH_FF_004"
      },
      {
        "name_ko": "심리신경면역학",
        "name_en": "Psychoneuroimmunology",
        "id": "HEALTH_PNI_007"
      },
      {
        "name_ko": "면역계",
        "name_en": "Immune System",
        "id": "HEALTH_IMMUNE_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "코르티솔 = '스트레스 호르몬' → HPA축(시상하부→뇌하수체→부신피질) 경로로 분비",
      "differential": "아드레날린(급성 투쟁-도피, 교감신경계)과 코르티솔(지속적 스트레스 반응, HPA축)의 경로와 시간 차이를 구분",
      "key_point": "Sapolsky: 만성적 코르티솔 상승은 해마의 신경세포를 손상시켜 기억력 저하를 유발한다",
      "common_mistake": "코르티솔이 항상 해롭다고 오해하지만, 정상 수준의 코르티솔은 에너지 동원, 항염증, 면역 조절에 필수적이다"
    }
  },
  {
    "id": "HEALTH_IMMUNE_021",
    "terminology": "면역계 (Immune System)",
    "terminology_ko": "면역계",
    "terminology_en": "Immune System",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "세균, 바이러스 등 병원체와 이상 세포로부터 신체를 방어하는 생물학적 체계. 심리적 스트레스가 면역 기능을 저하시켜 감염과 질병에 대한 취약성을 높인다는 것이 심리신경면역학의 핵심 발견이다.",
    "definition_en": "A biological system that defends the body against pathogens such as bacteria and viruses, as well as abnormal cells. A central finding of psychoneuroimmunology is that psychological stress suppresses immune function, increasing vulnerability to infection and disease.",
    "significance": "스트레스-건강 관계의 핵심 매개 체계로, T세포, B세포, 자연살해세포(NK cell) 등의 기능이 스트레스에 의해 변화한다. 건강심리학 연구에서 면역 기능은 스트레스의 객관적 생리적 지표로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "자니스 키콜트-글레이저",
        "name_en": "Janice Kiecolt-Glaser",
        "contribution": "만성 스트레스(간병인 스트레스)가 면역 기능을 저하시키고 상처 치유를 지연시킨다는 연구 수행"
      },
      {
        "name_ko": "로버트 아더",
        "name_en": "Robert Ader",
        "contribution": "면역 반응의 고전적 조건화 가능성을 증명하여 심리신경면역학의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리신경면역학",
        "name_en": "Psychoneuroimmunology",
        "id": "HEALTH_PNI_007"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "id": "HEALTH_CORT_020"
      },
      {
        "name_ko": "스트레스",
        "name_en": "Stress",
        "id": "HEALTH_STRESS_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "선천면역",
        "name_en": "Innate Immunity",
        "description": "비특이적 방어 체계로, 피부, 점막, 자연살해세포, 식세포 등이 포함된다"
      },
      {
        "name_ko": "적응면역",
        "name_en": "Adaptive Immunity",
        "description": "특정 병원체에 대한 특이적 방어 체계로, T세포와 B세포에 의해 매개된다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "면역계 = 신체의 방어군 → 스트레스가 이 방어군을 약화시킨다",
      "differential": "선천면역(비특이적, 즉각 반응)과 적응면역(특이적, 학습된 반응)을 구분할 것",
      "key_point": "Kiecolt-Glaser 연구: 알츠하이머 환자를 돌보는 간병인은 대조군보다 면역 기능이 유의하게 저하되었다",
      "common_mistake": "면역 기능은 이분법적(강하다/약하다)이 아니라, 다양한 면역 세포와 경로가 각각 다르게 영향받는다"
    }
  },
  {
    "id": "HEALTH_POSPSYCH_022",
    "terminology": "긍정심리학 (Positive Psychology)",
    "terminology_ko": "긍정심리학",
    "terminology_en": "Positive Psychology",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "인간의 강점, 미덕, 최적 기능, 웰빙을 과학적으로 연구하는 심리학 분야. 정신병리와 약점에 초점을 맞추던 전통적 접근에서 벗어나, 행복, 몰입, 의미, 긍정적 관계 등을 탐구한다.",
    "definition_en": "A branch of psychology that scientifically studies human strengths, virtues, optimal functioning, and well-being. Moving beyond the traditional focus on psychopathology and weakness, it explores happiness, flow, meaning, and positive relationships.",
    "significance": "스트레스와 건강 분야에서 회복탄력성, 외상 후 성장, 긍정 정서의 건강 보호 효과 등을 연구함으로써, 질병 예방과 건강 증진의 새로운 관점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "1998년 APA 회장 취임 연설에서 긍정심리학 운동을 공식 발족시키고 PERMA 모형을 제안"
      },
      {
        "name_ko": "미하이 칙센트미하이",
        "name_en": "Mihaly Csikszentmihalyi",
        "contribution": "몰입(flow) 이론을 통해 최적 경험의 심리적 조건을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "낙관주의",
        "name_en": "Optimism",
        "id": "HEALTH_OPT_014"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "HEALTH_RESIL_023"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "HEALTH_MIND_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "긍정심리학 = Seligman의 PERMA → Positive Emotion, Engagement, Relationships, Meaning, Accomplishment",
      "differential": "긍정심리학(과학적 연구)과 자기계발서(일반 대중 조언)를 구분 — 긍정심리학은 실증적 근거에 기반한다",
      "key_point": "Seligman은 심리학이 '마음의 질병 치료'에서 '마음의 강점 발견과 증진'으로 패러다임을 전환해야 한다고 주장했다",
      "common_mistake": "긍정심리학이 '항상 긍정적이어야 한다'는 메시지라고 오해하지만, 부정적 정서의 적응적 기능도 인정한다"
    }
  },
  {
    "id": "HEALTH_RESIL_023",
    "terminology": "회복탄력성 (Resilience)",
    "terminology_ko": "회복탄력성",
    "terminology_en": "Resilience",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "역경, 외상, 스트레스에 직면했을 때 이를 효과적으로 극복하고 적응적으로 기능할 수 있는 능력. 고정된 특성이 아니라 학습과 경험을 통해 발달할 수 있는 역동적 과정이다.",
    "definition_en": "The capacity to effectively overcome adversity, trauma, or stress and maintain adaptive functioning. Not a fixed trait but a dynamic process that can develop through learning and experience.",
    "significance": "외상 후 스트레스 연구에서 대부분의 사람이 외상 후 회복한다는 발견이 회복탄력성 연구를 촉발했다. 위험 요인뿐 아니라 보호 요인을 규명하여 예방적 개입의 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "에미 워너",
        "name_en": "Emmy Werner",
        "contribution": "카우아이 종단연구를 통해 고위험 환경의 아동 중 1/3이 회복탄력성을 보여 성공적으로 적응함을 발견"
      },
      {
        "name_ko": "조지 보나노",
        "name_en": "George Bonanno",
        "contribution": "외상 경험 후 회복탄력성이 가장 흔한 반응 경로임을 실증하여, 회복탄력성의 보편성을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      },
      {
        "name_ko": "사회적 지지",
        "name_en": "Social Support",
        "id": "HEALTH_SOCSUP_011"
      },
      {
        "name_ko": "긍정심리학",
        "name_en": "Positive Psychology",
        "id": "HEALTH_POSPSYCH_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회복탄력성 = 고무공처럼 눌러도 다시 튀어오르는 힘(bounce back)",
      "differential": "회복탄력성(역경 후 적응적 기능 유지)과 외상 후 성장(역경을 통해 이전보다 더 발전)을 구분",
      "key_point": "Werner의 카우아이 연구: 보호 요인(따뜻한 양육자 1명, 사회적 지지, 자기효능감)이 회복탄력성의 핵심이었다",
      "common_mistake": "회복탄력성을 타고나는 고정 특성이라고 오해하지만, 환경적 보호 요인과 학습을 통해 강화될 수 있는 역동적 과정이다"
    }
  },
  {
    "id": "HEALTH_MIND_024",
    "terminology": "마음챙김 (Mindfulness)",
    "terminology_ko": "마음챙김",
    "terminology_en": "Mindfulness",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "현재 순간의 경험에 대해 판단 없이 의도적으로 주의를 기울이는 심리적 과정. 불교 명상 전통에서 유래하여 현대 심리학과 의학에서 스트레스 감소와 웰빙 증진을 위한 과학적 접근으로 발전했다.",
    "definition_en": "A psychological process of intentionally paying attention to present-moment experience without judgment. Originating from Buddhist meditation traditions, it has evolved into a scientific approach in modern psychology and medicine for stress reduction and well-being enhancement.",
    "significance": "Kabat-Zinn의 마음챙김 기반 스트레스 감소(MBSR) 프로그램이 만성통증, 불안, 우울, 면역 기능 등에 효과가 있음이 다수의 임상 연구에서 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "마음챙김 기반 스트레스 감소(MBSR) 프로그램을 개발하여 마음챙김을 현대 의학과 심리학에 도입"
      },
      {
        "name_ko": "엘런 랭어",
        "name_en": "Ellen Langer",
        "contribution": "사회심리학적 관점에서 마음챙김(mindfulness)의 인지적 측면을 연구하여 주의적 유연성 개념을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이완훈련",
        "name_en": "Relaxation Training",
        "id": "HEALTH_RELAX_025"
      },
      {
        "name_ko": "대처",
        "name_en": "Coping",
        "id": "HEALTH_COPE_008"
      },
      {
        "name_ko": "긍정심리학",
        "name_en": "Positive Psychology",
        "id": "HEALTH_POSPSYCH_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마음챙김 = 마음(mind)을 챙기다(fulness) → 현재에 주의를 기울이되, 판단하지 않는다",
      "differential": "마음챙김(현재 경험에 비판단적 주의)과 명상(마음을 훈련하는 다양한 기법들의 총칭)을 구분",
      "key_point": "Kabat-Zinn(1990): MBSR 8주 프로그램은 만성통증 환자의 통증 감소, 불안·우울 완화, 면역 기능 향상을 보여주었다",
      "common_mistake": "마음챙김이 생각을 비우는 것이라고 오해하지만, 실제로는 현재 경험을 있는 그대로 관찰하는 것이다"
    }
  },
  {
    "id": "HEALTH_RELAX_025",
    "terminology": "이완훈련 (Relaxation Training)",
    "terminology_ko": "이완훈련",
    "terminology_en": "Relaxation Training",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "교감신경계의 각성을 감소시키고 부교감신경계의 활동을 증가시켜 신체적·심리적 이완 상태를 유도하는 체계적 기법. 점진적 근육 이완, 자율훈련법, 호흡법, 명상 등이 포함된다.",
    "definition_en": "Systematic techniques designed to reduce sympathetic nervous system arousal and increase parasympathetic activity, inducing a state of physical and psychological relaxation. Includes progressive muscle relaxation, autogenic training, breathing exercises, and meditation.",
    "significance": "스트레스 관리와 건강 증진을 위한 비약물적 개입으로 널리 사용된다. 불안, 고혈압, 불면증, 만성통증 등에 효과가 실증적으로 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "에드먼드 제이콥슨",
        "name_en": "Edmund Jacobson",
        "contribution": "1930년대 점진적 근육 이완법(progressive muscle relaxation)을 개발"
      },
      {
        "name_ko": "허버트 벤슨",
        "name_en": "Herbert Benson",
        "contribution": "이완반응(relaxation response) 개념을 제안하여, 명상과 이완이 투쟁-도피 반응의 생리적 반대 효과를 가짐을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "바이오피드백",
        "name_en": "Biofeedback",
        "id": "HEALTH_BIO_026"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "HEALTH_MIND_024"
      },
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "HEALTH_FF_004"
      }
    ],
    "sub_types": [
      {
        "name_ko": "점진적 근육 이완법",
        "name_en": "Progressive Muscle Relaxation",
        "description": "신체 각 근육군을 체계적으로 긴장시킨 후 이완하여 전신 이완을 유도하는 기법"
      },
      {
        "name_ko": "자율훈련법",
        "name_en": "Autogenic Training",
        "description": "자기암시를 통해 사지의 무거움, 따뜻함 등을 느끼며 이완 상태에 도달하는 기법"
      },
      {
        "name_ko": "복식호흡",
        "name_en": "Diaphragmatic Breathing",
        "description": "횡격막을 이용한 느리고 깊은 호흡으로 부교감신경계를 활성화하는 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "이완훈련 = 투쟁-도피의 '반대 스위치' → 교감신경 ↓, 부교감신경 ↑",
      "differential": "이완훈련(신체적 이완에 초점)과 마음챙김(인지적 비판단적 관찰에 초점)은 접근 방식이 다르다",
      "key_point": "Jacobson의 점진적 근육 이완: 긴장(5-10초) → 이완(15-30초)을 반복하여 근육의 이완 감각을 학습한다",
      "common_mistake": "이완훈련이 단순히 '쉬는 것'이라고 오해하지만, 체계적으로 학습해야 하는 기술(skill)이다"
    }
  },
  {
    "id": "HEALTH_BIO_026",
    "terminology": "바이오피드백 (Biofeedback)",
    "terminology_ko": "바이오피드백",
    "terminology_en": "Biofeedback",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "심박수, 근전도, 피부전도, 뇌파 등 자율적 생리적 과정에 대한 실시간 정보를 전자 장비로 제공하여, 개인이 이러한 과정을 의식적으로 조절할 수 있도록 훈련하는 기법.",
    "definition_en": "A technique that uses electronic instruments to provide real-time information about autonomic physiological processes (heart rate, muscle tension, skin conductance, brain waves), enabling individuals to learn to consciously regulate these processes.",
    "significance": "자율신경계 반응이 의지적 통제가 불가능하다는 기존 관념을 뒤집고, 학습을 통한 생리적 자기조절의 가능성을 입증했다. 두통, 고혈압, 만성통증 등의 치료에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "닐 밀러",
        "name_en": "Neal Miller",
        "contribution": "내장 반응의 도구적 조건화 가능성을 제안하여 바이오피드백의 이론적 기초를 마련"
      },
      {
        "name_ko": "조 카미야",
        "name_en": "Joe Kamiya",
        "contribution": "알파파(alpha wave) 뇌파 피드백의 선구적 연구를 수행하여 뉴로피드백 분야를 개척"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이완훈련",
        "name_en": "Relaxation Training",
        "id": "HEALTH_RELAX_025"
      },
      {
        "name_ko": "행동의학",
        "name_en": "Behavioral Medicine",
        "id": "HEALTH_BMED_017"
      },
      {
        "name_ko": "통제감",
        "name_en": "Perceived Control",
        "id": "HEALTH_CTRL_013"
      }
    ],
    "sub_types": [
      {
        "name_ko": "근전도(EMG) 바이오피드백",
        "name_en": "EMG Biofeedback",
        "description": "근육 긴장도를 측정하여 근이완을 훈련하는 기법 (두통, 만성통증에 활용)"
      },
      {
        "name_ko": "뉴로피드백",
        "name_en": "Neurofeedback",
        "description": "뇌파(EEG)를 측정하여 특정 뇌파 패턴을 훈련하는 기법 (ADHD, 불안에 활용)"
      },
      {
        "name_ko": "심박변이도(HRV) 바이오피드백",
        "name_en": "HRV Biofeedback",
        "description": "심박변이도를 조절하여 자율신경계 균형을 훈련하는 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "바이오피드백 = Bio(생체) + Feedback(되먹임) → 생체 신호를 보고 스스로 조절 학습",
      "differential": "바이오피드백(장비를 통한 생리적 자기조절)과 이완훈련(장비 없이 근육/호흡을 직접 이완)의 방법적 차이",
      "key_point": "핵심 원리: 보통 자각하지 못하는 생리적 과정을 측정 장비로 '가시화'하여 조작적 조건화(operant conditioning)를 가능하게 한다",
      "common_mistake": "바이오피드백이 장비가 치료하는 것이라고 오해하지만, 장비는 정보를 제공할 뿐이며 실제 변화는 학습자의 자기조절 능력에 의한 것이다"
    }
  },
  {
    "id": "HEALTH_HBEHAV_027",
    "terminology": "건강행동 (Health Behavior)",
    "terminology_ko": "건강행동",
    "terminology_en": "Health Behavior",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "건강을 유지, 증진하거나 질병을 예방하기 위해 개인이 취하는 행동. 운동, 균형 잡힌 식사, 금연, 절주, 정기 검진 등이 포함되며, 건강행동의 채택과 유지에는 심리적 요인이 크게 작용한다.",
    "definition_en": "Actions taken by individuals to maintain, promote health, or prevent disease. Includes exercise, balanced diet, smoking cessation, moderate drinking, and regular check-ups. Psychological factors play a major role in the adoption and maintenance of health behaviors.",
    "significance": "만성질환의 주요 원인이 흡연, 운동 부족, 불건전한 식습관 등 생활양식과 관련되면서, 건강행동의 변화가 예방의학과 건강심리학의 핵심 목표가 되었다.",
    "key_researchers": [
      {
        "name_ko": "제임스 프로차스카",
        "name_en": "James Prochaska",
        "contribution": "변화단계 모형(Transtheoretical Model)을 개발하여 건강행동 변화의 단계적 과정을 체계화"
      },
      {
        "name_ko": "아이작 아젠",
        "name_en": "Icek Ajzen",
        "contribution": "계획행동이론(Theory of Planned Behavior)을 통해 건강행동의 의도와 실행을 예측하는 모형 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "건강신념모형",
        "name_en": "Health Belief Model",
        "id": "HEALTH_HBM_028"
      },
      {
        "name_ko": "자기효능감과 건강",
        "name_en": "Self-Efficacy & Health",
        "id": "HEALTH_SE_029"
      },
      {
        "name_ko": "건강심리학",
        "name_en": "Health Psychology",
        "id": "HEALTH_HPSY_016"
      }
    ],
    "sub_types": [
      {
        "name_ko": "건강증진 행동",
        "name_en": "Health-Promoting Behavior",
        "description": "운동, 건강한 식사, 충분한 수면 등 건강을 적극적으로 향상시키는 행동"
      },
      {
        "name_ko": "건강위험 행동",
        "name_en": "Health-Risk Behavior",
        "description": "흡연, 과음, 약물 남용, 불안전 성행위 등 건강을 해치는 행동"
      },
      {
        "name_ko": "질병행동",
        "name_en": "Illness Behavior",
        "description": "증상을 경험한 후 도움을 구하거나 치료를 받는 행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "건강행동 변화 단계: 전숙고→숙고→준비→행동→유지 → Prochaska의 5단계 모형",
      "differential": "건강행동(의도적 건강 관련 행동)과 건강신념(건강에 대한 인지적 평가)은 행동 vs. 인지의 차이",
      "key_point": "Prochaska의 변화단계: 전숙고기(precontemplation) → 숙고기(contemplation) → 준비기(preparation) → 행동기(action) → 유지기(maintenance)",
      "common_mistake": "건강행동 변화가 '의지력'만으로 가능하다고 오해하지만, 환경적 지지, 자기효능감, 사회적 규범 등 복합 요인이 작용한다"
    }
  },
  {
    "id": "HEALTH_HBM_028",
    "terminology": "건강신념모형 (Health Belief Model)",
    "terminology_ko": "건강신념모형",
    "terminology_en": "Health Belief Model",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "개인이 건강 관련 행동을 취할지 여부를 예측하는 인지적 모형. 지각된 취약성(susceptibility), 지각된 심각성(severity), 지각된 이득(benefits), 지각된 장벽(barriers), 행동 계기(cues to action), 자기효능감의 요소로 구성된다.",
    "definition_en": "A cognitive model predicting whether individuals will engage in health-related behaviors. Comprises perceived susceptibility, perceived severity, perceived benefits, perceived barriers, cues to action, and self-efficacy.",
    "significance": "건강 관련 의사결정을 설명하는 가장 영향력 있는 이론적 모형 중 하나로, 예방접종, 건강검진, 금연 등 다양한 건강행동 중재 프로그램의 이론적 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어윈 로젠스톡",
        "name_en": "Irwin Rosenstock",
        "contribution": "1966년 건강신념모형을 최초로 제안하여 예방적 건강행동의 심리적 결정 요인을 체계화"
      },
      {
        "name_ko": "마셜 베커",
        "name_en": "Marshall Becker",
        "contribution": "건강신념모형을 질병행동과 환자역할 행동으로 확장하고 모형의 경험적 검증에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "건강행동",
        "name_en": "Health Behavior",
        "id": "HEALTH_HBEHAV_027"
      },
      {
        "name_ko": "자기효능감과 건강",
        "name_en": "Self-Efficacy & Health",
        "id": "HEALTH_SE_029"
      },
      {
        "name_ko": "건강심리학",
        "name_en": "Health Psychology",
        "id": "HEALTH_HPSY_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "건강신념모형의 핵심 4요소: 취약성·심각성·이득·장벽 → '취심이장'",
      "differential": "건강신념모형(개인의 신념 중심)과 계획행동이론(의도와 사회적 규범 포함)은 강조점이 다르다",
      "key_point": "핵심 공식: 행동 가능성 = (지각된 위협: 취약성 × 심각성) + (행동 평가: 이득 - 장벽) + 행동 계기",
      "common_mistake": "건강신념모형이 모든 건강행동을 설명할 수 있다고 과대평가하지만, 습관적 행동이나 사회문화적 요인을 충분히 반영하지 못한다는 한계가 있다"
    }
  },
  {
    "id": "HEALTH_SE_029",
    "terminology": "자기효능감과 건강 (Self-Efficacy & Health)",
    "terminology_ko": "자기효능감과 건강",
    "terminology_en": "Self-Efficacy & Health",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "특정 건강행동을 성공적으로 수행할 수 있다는 자신의 능력에 대한 신념으로, 건강행동의 시작, 유지, 변화를 예측하는 가장 강력한 심리적 요인 중 하나이다.",
    "definition_en": "The belief in one's ability to successfully perform specific health behaviors. It is one of the most powerful psychological predictors of health behavior initiation, maintenance, and change.",
    "significance": "Bandura의 자기효능감 이론이 건강 분야에 적용되어, 금연, 운동, 식이 조절, 만성질환 관리 등 거의 모든 건강행동 영역에서 자기효능감의 예측력이 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 밴듀라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감(self-efficacy) 개념을 제안하고, 건강행동 변화에서의 핵심적 역할을 이론화"
      },
      {
        "name_ko": "케이트 로리그",
        "name_en": "Kate Lorig",
        "contribution": "만성질환 자기관리 프로그램을 개발하여 자기효능감 강화가 환자의 건강 결과를 향상시킴을 실증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "건강행동",
        "name_en": "Health Behavior",
        "id": "HEALTH_HBEHAV_027"
      },
      {
        "name_ko": "건강신념모형",
        "name_en": "Health Belief Model",
        "id": "HEALTH_HBM_028"
      },
      {
        "name_ko": "통제감",
        "name_en": "Perceived Control",
        "id": "HEALTH_CTRL_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감 = '나는 할 수 있다'는 믿음 → Bandura의 사회인지이론에서 유래",
      "differential": "자기효능감(특정 행동 수행 능력에 대한 믿음)과 자존감(자신에 대한 전반적 가치 평가)은 범위가 다르다",
      "key_point": "자기효능감의 4가지 원천: 성공 경험(가장 강력), 대리 경험, 언어적 설득, 생리적/정서적 상태",
      "common_mistake": "자기효능감이 높으면 모든 건강행동을 잘 한다고 과대해석하지만, 자기효능감은 행동 영역별로 특수적(domain-specific)이다"
    }
  },
  {
    "id": "HEALTH_CVD_030",
    "terminology": "심혈관 질환과 스트레스 (Cardiovascular Disease & Stress)",
    "terminology_ko": "심혈관 질환과 스트레스",
    "terminology_en": "Cardiovascular Disease & Stress",
    "category": "HEALTH",
    "category_name": "스트레스와 건강 (Stress, Health, & Coping)",
    "definition": "만성적 스트레스가 교감신경계 과활성화, 코르티솔 상승, 혈압 증가, 동맥경화 촉진 등을 통해 관상동맥 심장질환, 고혈압, 뇌졸중 등 심혈관계 질환의 발병과 악화에 기여하는 관계.",
    "definition_en": "The relationship in which chronic stress contributes to the onset and exacerbation of cardiovascular diseases (coronary heart disease, hypertension, stroke) through sympathetic overactivation, elevated cortisol, increased blood pressure, and accelerated atherosclerosis.",
    "significance": "스트레스-질병 관계에서 가장 많이 연구된 영역으로, A형 행동양식(특히 적대감)과 심장질환의 관계가 대표적이다. 심리사회적 중재가 심혈관 건강을 개선할 수 있음이 임상 연구로 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "메이어 프리드먼",
        "name_en": "Meyer Friedman",
        "contribution": "A형 행동양식과 관상동맥 심장질환의 관련성을 최초로 체계적으로 연구"
      },
      {
        "name_ko": "레드포드 윌리엄스",
        "name_en": "Redford Williams",
        "contribution": "A형 행동양식 중 '적대감(hostility)' 요소만이 심장질환의 독립적 위험 요인임을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A형 행동양식",
        "name_en": "Type A Behavior Pattern",
        "id": "HEALTH_TYPEA_005"
      },
      {
        "name_ko": "코르티솔",
        "name_en": "Cortisol",
        "id": "HEALTH_CORT_020"
      },
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "HEALTH_FF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "스트레스 → 교감신경 활성화 → 혈압↑, 심박↑, 동맥경화 → 심혈관 질환",
      "differential": "심혈관 질환에서 A형 행동양식 전체보다 '적대감(hostility)'이 핵심 위험 요인이라는 점을 구분",
      "key_point": "Williams: A형의 구성 요소 중 적대감(cynical hostility)이 관상동맥 질환의 가장 강력한 독립 예측 변인이다",
      "common_mistake": "스트레스만으로 심혈관 질환이 발생한다고 단순화하는 오류 — 유전, 식습관, 운동, 흡연 등 다중 위험 요인이 상호작용한다"
    }
  }
];
