const TERMS_DATA = {};

TERMS_DATA.FOUND = [
  {
    "id": "FOUND_SM_001",
    "terminology": "과학적 방법 (Scientific Method)",
    "terminology_ko": "과학적 방법",
    "terminology_en": "Scientific Method",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "체계적 관찰, 가설 설정, 실험적 검증, 결론 도출의 단계를 거쳐 현상을 이해하고 설명하는 논리적이고 체계적인 탐구 절차이다.",
    "definition_en": "A logical and systematic procedure for understanding and explaining phenomena through systematic observation, hypothesis formation, empirical testing, and drawing conclusions.",
    "significance": "심리학을 일상적 직관이나 상식과 구별짓는 핵심 기반으로, 객관적이고 반복 가능한 지식의 축적을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "반증주의를 제안하여 과학적 방법의 핵심 기준으로 반증가능성을 확립했다."
      },
      {
        "name_ko": "프랜시스 베이컨",
        "name_en": "Francis Bacon",
        "contribution": "경험적 관찰과 귀납적 추론에 기반한 근대 과학적 방법의 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      },
      {
        "name_ko": "경험주의",
        "name_en": "Empiricism",
        "id": "FOUND_EM_028"
      },
      {
        "name_ko": "반증가능성",
        "name_en": "Falsifiability",
        "id": "FOUND_FA_018"
      }
    ],
    "sub_types": [
      {
        "name": "관찰",
        "description": "현상을 체계적으로 관찰하여 패턴을 발견하는 단계"
      },
      {
        "name": "가설 설정",
        "description": "관찰된 패턴에 대한 잠정적 설명을 수립하는 단계"
      },
      {
        "name": "검증",
        "description": "가설을 실험이나 관찰로 검증하는 단계"
      },
      {
        "name": "결론",
        "description": "데이터를 분석하여 가설의 지지 여부를 판단하는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "관(관찰)→가(가설)→검(검증)→결(결론)의 4단계 순환",
      "differential": "과학적 방법은 체계적이고 반복 검증 가능한 절차인 반면, 일상적 추론은 비체계적이고 확증편향에 취약하다.",
      "key_point": "과학적 방법의 핵심은 객관성, 체계성, 반복검증 가능성이다.",
      "common_mistake": "과학적 방법이 항상 실험만을 의미한다고 오해하기 쉽지만, 관찰연구와 상관연구도 과학적 방법에 포함된다."
    }
  },
  {
    "id": "FOUND_HY_002",
    "terminology": "가설 (Hypothesis)",
    "terminology_ko": "가설",
    "terminology_en": "Hypothesis",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "둘 이상의 변인 간 관계에 대한 검증 가능한 잠정적 진술로, 연구를 통해 지지되거나 기각될 수 있는 예측을 포함한다.",
    "definition_en": "A testable tentative statement about the relationship between two or more variables, containing predictions that can be supported or refuted through research.",
    "significance": "연구의 방향을 설정하고 경험적 검증의 대상을 명확히 함으로써, 과학적 지식의 체계적 축적을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "가설은 반증 가능해야 과학적이라는 기준을 제시하여 가설의 과학적 지위를 명확히 했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "귀무가설과 대립가설의 통계적 검증 체계를 확립하여 가설검증의 수리적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      },
      {
        "name_ko": "연구가설",
        "name_en": "Research Hypothesis",
        "id": "FOUND_RH_014"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      }
    ],
    "sub_types": [
      {
        "name": "연구가설",
        "description": "연구자가 예측하는 변인 간 관계에 대한 진술"
      },
      {
        "name": "귀무가설",
        "description": "변인 간 관계가 없다는 통계적 검증의 기본 가설"
      },
      {
        "name": "대립가설",
        "description": "귀무가설에 반대되는, 변인 간 관계가 있다는 가설"
      }
    ],
    "quiz_hints": {
      "mnemonic": "가설 = '가정'하여 '설명'하는 검증 가능한 예측",
      "differential": "가설은 특정 변인 간 관계에 대한 구체적 예측인 반면, 이론은 여러 가설을 통합하는 포괄적 설명 체계이다.",
      "key_point": "좋은 가설은 구체적이고, 검증 가능하며, 반증 가능해야 한다.",
      "common_mistake": "가설이 '증명'된다고 표현하는 것은 부적절하며, '지지'된다거나 '기각'된다고 해야 한다."
    }
  },
  {
    "id": "FOUND_TH_003",
    "terminology": "이론 (Theory)",
    "terminology_ko": "이론",
    "terminology_en": "Theory",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "관련된 사실과 원리를 체계적으로 조직하여 현상을 설명하고 예측하는 포괄적인 개념적 틀로, 다수의 연구 결과에 의해 지지된 설명 체계이다.",
    "definition_en": "A comprehensive conceptual framework that systematically organizes related facts and principles to explain and predict phenomena, supported by numerous research findings.",
    "significance": "개별 연구 결과를 통합하고, 새로운 가설을 생성하며, 현상에 대한 깊이 있는 이해를 제공하여 과학적 지식의 발전을 이끈다.",
    "key_researchers": [
      {
        "name_ko": "토마스 쿤",
        "name_en": "Thomas Kuhn",
        "contribution": "패러다임 개념을 제시하여 이론의 역할과 과학적 혁명의 구조를 설명했다."
      },
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "이론은 반증 시도를 견뎌낸 정도에 따라 과학적 가치가 결정된다고 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "법칙",
        "name_en": "Law",
        "id": "FOUND_LW_022"
      },
      {
        "name_ko": "패러다임",
        "name_en": "Paradigm",
        "id": "FOUND_PD_023"
      },
      {
        "name_ko": "구성개념",
        "name_en": "Construct",
        "id": "FOUND_CT_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이론 = 여러 가설들의 '이'야기를 '론'리적으로 엮은 체계",
      "differential": "이론은 광범위한 현상을 설명하는 포괄적 체계인 반면, 가설은 이론에서 도출된 구체적이고 검증 가능한 예측이다.",
      "key_point": "좋은 이론은 설명력, 예측력, 간결성(절약성), 반증가능성을 갖추어야 한다.",
      "common_mistake": "'그건 그냥 이론일 뿐'이라는 일상 용법과 달리, 과학적 이론은 많은 경험적 증거에 의해 지지된 체계적 설명이다."
    }
  },
  {
    "id": "FOUND_VR_004",
    "terminology": "변인 (Variable)",
    "terminology_ko": "변인",
    "terminology_en": "Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구 대상이 되는 특성이나 속성으로, 둘 이상의 값을 가질 수 있어 측정과 관찰의 대상이 되는 요인을 말한다.",
    "definition_en": "A characteristic or attribute that is the subject of research, capable of taking on two or more values and serving as the target of measurement and observation.",
    "significance": "심리학 연구의 핵심 단위로, 변인 간 관계를 규명하는 것이 행동과학 연구의 근본 목표이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "실험설계에서 변인의 통제와 조작에 관한 체계적 방법론을 확립했다."
      },
      {
        "name_ko": "프레드 커링거",
        "name_en": "Fred Kerlinger",
        "contribution": "행동과학 연구에서 변인의 유형과 역할을 체계적으로 분류하고 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "FOUND_DV_006"
      },
      {
        "name_ko": "매개변인",
        "name_en": "Mediating Variable",
        "id": "FOUND_MV_007"
      },
      {
        "name_ko": "조절변인",
        "name_en": "Moderating Variable",
        "id": "FOUND_MOD_008"
      }
    ],
    "sub_types": [
      {
        "name": "독립변인",
        "description": "연구자가 조작하거나 선택하는 변인"
      },
      {
        "name": "종속변인",
        "description": "독립변인의 영향을 받아 변화하는 결과 변인"
      },
      {
        "name": "매개변인",
        "description": "독립변인이 종속변인에 영향을 미치는 과정을 설명하는 변인"
      },
      {
        "name": "조절변인",
        "description": "독립변인과 종속변인 간 관계의 방향이나 강도를 변화시키는 변인"
      }
    ],
    "quiz_hints": {
      "mnemonic": "변(변하는) + 인(요인) = 값이 변할 수 있는 연구 요인",
      "differential": "변인은 값이 변할 수 있는 요인이고, 상수(constant)는 연구에서 값이 고정된 요인이다.",
      "key_point": "변인의 올바른 식별과 분류는 연구설계의 첫 번째 핵심 단계이다.",
      "common_mistake": "변인(variable)과 변수를 같은 개념으로 혼용하나, 행동과학에서는 '변인'이 표준 용어이다."
    }
  },
  {
    "id": "FOUND_IV_005",
    "terminology": "독립변인 (Independent Variable)",
    "terminology_ko": "독립변인",
    "terminology_en": "Independent Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구자가 의도적으로 조작하거나 선택하여 그 효과를 관찰하고자 하는 변인으로, 원인으로 가정되는 변인이다.",
    "definition_en": "A variable that the researcher deliberately manipulates or selects to observe its effect, presumed to be the causal factor in the study.",
    "significance": "실험연구에서 인과관계를 규명하기 위한 핵심 요소로, 독립변인의 적절한 조작이 내적 타당도의 기본 조건이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "실험설계에서 독립변인의 체계적 조작과 무선할당 원리를 확립했다."
      },
      {
        "name_ko": "존 스튜어트 밀",
        "name_en": "John Stuart Mill",
        "contribution": "차이법과 일치법을 통해 원인 변인을 식별하는 논리적 원리를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "FOUND_DV_006"
      },
      {
        "name_ko": "외생변인",
        "name_en": "Extraneous Variable",
        "id": "FOUND_EV_009"
      },
      {
        "name_ko": "조작",
        "name_en": "Manipulation",
        "id": "FOUND_MN_026"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      }
    ],
    "sub_types": [
      {
        "name": "조작된 독립변인",
        "description": "연구자가 실험 상황에서 직접 조작하는 변인 (예: 약물 용량)"
      },
      {
        "name": "선택된 독립변인",
        "description": "참가자의 기존 특성을 기준으로 선택하는 변인 (예: 성별, 연령)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "독립변인 = '독(립적으로)' 연구자가 '립(조립/조작)'하는 원인 변인",
      "differential": "독립변인은 원인으로 가정되어 조작되는 변인이고, 종속변인은 그 결과로 측정되는 변인이다.",
      "key_point": "실험연구에서 독립변인은 연구자가 직접 조작하지만, 준실험이나 상관연구에서는 선택할 수만 있다.",
      "common_mistake": "모든 연구에서 독립변인을 조작할 수 있다고 오해하나, 윤리적·실질적 이유로 조작이 불가능한 변인(예: 성별, 학대 경험)도 많다."
    }
  },
  {
    "id": "FOUND_DV_006",
    "terminology": "종속변인 (Dependent Variable)",
    "terminology_ko": "종속변인",
    "terminology_en": "Dependent Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "독립변인의 조작이나 변화에 따라 영향을 받는 것으로 가정되는 변인으로, 연구에서 측정되는 결과 변인이다.",
    "definition_en": "A variable presumed to be affected by the manipulation or change of the independent variable, serving as the measured outcome in research.",
    "significance": "연구의 결과를 수량화하고 평가하는 핵심 지표로, 적절한 종속변인의 선정은 연구 결론의 타당성을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "클라크 헐",
        "name_en": "Clark Hull",
        "contribution": "행동주의 연구에서 종속변인으로서의 반응 측정을 체계화했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "분산분석을 통해 종속변인의 변동을 독립변인의 효과와 오차로 분리하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "FOUND_OD_011"
      },
      {
        "name_ko": "측정",
        "name_en": "Measurement",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "종속변인 = 독립변인에 '종속'되어 변하는 '결과' 변인",
      "differential": "종속변인은 측정되는 결과 변인이고, 독립변인은 조작되는 원인 변인이다. 종속변인은 독립변인에 '의존(depend)'한다.",
      "key_point": "하나의 연구에서 여러 개의 종속변인을 측정할 수 있으며, 이를 다변량 분석으로 처리한다.",
      "common_mistake": "종속변인이 반드시 하나여야 한다고 오해하기 쉬우나, 다변량 설계에서는 여러 종속변인을 동시에 분석할 수 있다."
    }
  },
  {
    "id": "FOUND_MV_007",
    "terminology": "매개변인 (Mediating Variable)",
    "terminology_ko": "매개변인",
    "terminology_en": "Mediating Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "독립변인이 종속변인에 영향을 미치는 과정이나 메커니즘을 설명하는 중간 변인으로, 인과 경로의 '왜' 또는 '어떻게'를 밝힌다.",
    "definition_en": "An intermediate variable that explains the process or mechanism through which the independent variable affects the dependent variable, revealing the 'why' or 'how' of the causal pathway.",
    "significance": "단순한 인과관계를 넘어 심리적 과정의 메커니즘을 이해하게 함으로써, 이론적 설명력을 높이고 효과적인 개입 전략 수립에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "루벤 바론",
        "name_en": "Reuben Baron",
        "contribution": "Baron과 Kenny(1986)의 매개효과 검증 절차를 제시하여 매개분석의 표준 방법론을 확립했다."
      },
      {
        "name_ko": "데이비드 케니",
        "name_en": "David Kenny",
        "contribution": "Baron과 함께 매개효과 분석의 4단계 인과 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조절변인",
        "name_en": "Moderating Variable",
        "id": "FOUND_MOD_008"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "FOUND_DV_006"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      }
    ],
    "sub_types": [
      {
        "name": "완전매개",
        "description": "독립변인이 종속변인에 미치는 효과가 매개변인을 통해서만 발생하는 경우"
      },
      {
        "name": "부분매개",
        "description": "독립변인의 효과 중 일부만 매개변인을 통해 전달되는 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "매개 = 중간에서 '매(매개)' '개(개입)'하여 과정을 설명하는 변인",
      "differential": "매개변인은 '왜/어떻게' 효과가 발생하는지를 설명하고, 조절변인은 '언제/누구에게' 효과가 달라지는지를 설명한다.",
      "key_point": "매개효과 검증은 Baron & Kenny(1986)의 4단계 절차 또는 Sobel 검정, 부트스트래핑 방법을 사용한다.",
      "common_mistake": "매개변인과 조절변인을 혼동하기 쉬우나, 매개는 '과정'을, 조절은 '조건'을 설명한다는 점이 핵심 차이이다."
    }
  },
  {
    "id": "FOUND_MOD_008",
    "terminology": "조절변인 (Moderating Variable)",
    "terminology_ko": "조절변인",
    "terminology_en": "Moderating Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "독립변인과 종속변인 간 관계의 방향이나 강도에 영향을 미치는 변인으로, 효과의 '조건'을 규명하는 역할을 한다.",
    "definition_en": "A variable that affects the direction or strength of the relationship between independent and dependent variables, identifying the 'conditions' under which effects occur.",
    "significance": "연구 결과의 일반화 가능성과 경계 조건을 이해하는 데 필수적이며, 개인차나 맥락 효과를 설명하는 데 핵심 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "루벤 바론",
        "name_en": "Reuben Baron",
        "contribution": "Baron과 Kenny(1986)에서 조절변인과 매개변인의 개념적·분석적 구분을 명확히 제시했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "상호작용 효과의 통계적 분석 방법을 체계화하여 조절효과 검증의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "매개변인",
        "name_en": "Mediating Variable",
        "id": "FOUND_MV_007"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "상호작용 효과",
        "name_en": "Interaction Effect",
        "id": "DESIGN_IE_031"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-way ANOVA",
        "id": "ANOVA_TW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조절 = '조(조건을)' '절(절대적으로)' 바꾸는 변인",
      "differential": "조절변인은 '언제/누구에게' 효과가 다른지를 설명하고, 매개변인은 '왜/어떻게' 효과가 발생하는지를 설명한다.",
      "key_point": "조절효과는 통계적으로 상호작용 효과(interaction effect)로 검증되며, 회귀분석에서는 곱항(product term)을 포함하여 분석한다.",
      "common_mistake": "조절변인을 통제변인과 혼동하기 쉬우나, 조절변인은 관심의 대상이며 통제변인은 영향을 제거해야 할 대상이다."
    }
  },
  {
    "id": "FOUND_EV_009",
    "terminology": "외생변인 (Extraneous Variable)",
    "terminology_ko": "외생변인",
    "terminology_en": "Extraneous Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구에서 관심 대상이 아니면서 종속변인에 영향을 미칠 수 있는 변인으로, 통제하지 않으면 연구 결과를 혼란시킬 수 있다.",
    "definition_en": "A variable not of primary interest in the study that can affect the dependent variable, potentially confounding research results if not controlled.",
    "significance": "외생변인의 적절한 통제는 내적 타당도 확보의 핵심이며, 독립변인과 종속변인 간 인과관계 추론의 정확성을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "내적 타당도를 위협하는 외생변인의 유형을 체계적으로 분류했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화를 통한 외생변인 통제 방법을 제안하여 실험설계의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통제변인",
        "name_en": "Control Variable",
        "id": "FOUND_CV_010"
      },
      {
        "name_ko": "혼입변인",
        "name_en": "Confounding Variable",
        "id": "FOUND_CF_030"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      }
    ],
    "sub_types": [
      {
        "name": "혼입변인",
        "description": "독립변인과 체계적으로 공변하여 인과 추론을 방해하는 외생변인"
      },
      {
        "name": "잡음변인",
        "description": "종속변인에 무선적으로 영향을 미쳐 오차 변량을 증가시키는 외생변인"
      }
    ],
    "quiz_hints": {
      "mnemonic": "외생 = '외(외부에서)' '생(생겨난)' 원치 않는 영향 변인",
      "differential": "외생변인은 통제가 필요한 모든 비관심 변인의 총칭이고, 혼입변인은 독립변인과 체계적으로 공변하는 특수한 외생변인이다.",
      "key_point": "외생변인을 통제하는 방법에는 무선할당, 짝짓기, 통계적 통제(ANCOVA) 등이 있다.",
      "common_mistake": "외생변인이 존재하면 연구 자체가 무의미해진다고 오해하나, 적절한 통제를 통해 영향을 최소화할 수 있다."
    }
  },
  {
    "id": "FOUND_CV_010",
    "terminology": "통제변인 (Control Variable)",
    "terminology_ko": "통제변인",
    "terminology_en": "Control Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구에서 그 효과를 일정하게 유지하거나 제거하기 위해 의도적으로 통제하는 변인으로, 결과 해석의 명확성을 높이기 위해 사용된다.",
    "definition_en": "A variable intentionally kept constant or removed in a study to enhance the clarity of result interpretation by controlling its potential effects.",
    "significance": "독립변인의 순수한 효과를 분리하여 관찰할 수 있게 함으로써, 연구의 내적 타당도를 확보하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "실험설계에서 변인 통제의 원리와 방법을 체계화했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "준실험 설계에서 통제의 한계와 대안적 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외생변인",
        "name_en": "Extraneous Variable",
        "id": "FOUND_EV_009"
      },
      {
        "name_ko": "통제",
        "name_en": "Control",
        "id": "FOUND_CO_027"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통제변인 = '통(통제하여)' '제(제거하거나 일정하게)' 유지하는 변인",
      "differential": "통제변인은 연구자가 의도적으로 일정하게 유지하는 변인이고, 조절변인은 오히려 그 효과를 분석의 대상으로 삼는 변인이다.",
      "key_point": "통제 방법에는 실험적 통제(무선할당, 짝짓기)와 통계적 통제(공변량분석) 두 가지 접근이 있다.",
      "common_mistake": "통제변인과 통제집단을 혼동하기 쉬우나, 통제변인은 변인 수준의 개념이고 통제집단은 집단 수준의 개념이다."
    }
  },
  {
    "id": "FOUND_OD_011",
    "terminology": "조작적 정의 (Operational Definition)",
    "terminology_ko": "조작적 정의",
    "terminology_en": "Operational Definition",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "추상적인 개념이나 구성개념을 관찰 가능하고 측정 가능한 구체적인 절차나 조작으로 정의하는 것을 말한다.",
    "definition_en": "The definition of an abstract concept or construct in terms of specific, observable, and measurable procedures or operations.",
    "significance": "추상적 심리학적 개념을 경험적으로 검증 가능하게 만드는 핵심 과정으로, 연구의 객관성과 반복검증 가능성을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "퍼시 브리지먼",
        "name_en": "Percy Bridgman",
        "contribution": "조작주의(operationism)를 제안하여 과학적 개념은 측정 조작으로 정의되어야 한다고 주장했다."
      },
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "S. S. Stevens",
        "contribution": "측정 척도 이론을 통해 조작적 정의의 체계적 적용 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개념적 정의",
        "name_en": "Conceptual Definition",
        "id": "FOUND_CD_012"
      },
      {
        "name_ko": "구성개념",
        "name_en": "Construct",
        "id": "FOUND_CT_021"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조작적 정의 = '조작(절차)'으로 '정의'한다",
      "differential": "조작적 정의는 '어떻게 측정할 것인가'를 규정하고, 개념적 정의는 '무엇인가'를 사전적으로 규정한다.",
      "key_point": "동일한 구성개념도 다양한 조작적 정의가 가능하며, 어떤 조작적 정의를 채택하느냐에 따라 연구 결과가 달라질 수 있다.",
      "common_mistake": "하나의 조작적 정의가 개념 전체를 완벽히 대표한다고 오해하기 쉬우나, 조작적 정의는 개념의 일부 측면만 포착할 수 있다."
    }
  },
  {
    "id": "FOUND_CD_012",
    "terminology": "개념적 정의 (Conceptual Definition)",
    "terminology_ko": "개념적 정의",
    "terminology_en": "Conceptual Definition",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구하고자 하는 변인이나 구성개념의 의미를 다른 개념이나 이론적 용어를 사용하여 추상적으로 정의하는 것이다.",
    "definition_en": "An abstract definition of a variable or construct using other concepts or theoretical terms to specify its meaning.",
    "significance": "연구의 이론적 기반을 명확히 하고, 조작적 정의의 적절성을 평가하는 기준이 되어 연구의 구성타당도 확보에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "구성타당도 개념을 통해 개념적 정의와 조작적 정의 간의 일치도 평가 방법을 발전시켰다."
      },
      {
        "name_ko": "폴 미엘",
        "name_en": "Paul Meehl",
        "contribution": "Cronbach와 함께 구성타당도의 이론적 틀을 제시하여 개념적 정의의 중요성을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "FOUND_OD_011"
      },
      {
        "name_ko": "구성개념",
        "name_en": "Construct",
        "id": "FOUND_CT_021"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_VD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "개념적 정의 = 사전에서 찾을 수 있는 '개념' 수준의 정의",
      "differential": "개념적 정의는 이론적·추상적 수준에서 '무엇인가'를 정의하고, 조작적 정의는 실제 연구에서 '어떻게 측정하는가'를 정의한다.",
      "key_point": "개념적 정의가 명확하지 않으면 적절한 조작적 정의를 도출할 수 없으므로, 연구의 출발점이 된다.",
      "common_mistake": "개념적 정의만으로는 연구를 수행할 수 없으며, 반드시 측정 가능한 조작적 정의로 전환해야 한다."
    }
  },
  {
    "id": "FOUND_RQ_013",
    "terminology": "연구문제 (Research Question)",
    "terminology_ko": "연구문제",
    "terminology_en": "Research Question",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구를 통해 답하고자 하는 구체적인 질문으로, 변인 간의 관계나 현상에 대한 탐구적 의문을 체계적으로 진술한 것이다.",
    "definition_en": "A specific question that research aims to answer, systematically stating an exploratory inquiry about the relationships between variables or about phenomena.",
    "significance": "연구의 방향과 범위를 결정하고, 적절한 연구설계와 분석 방법의 선택을 안내하는 연구 전체의 출발점이다.",
    "key_researchers": [
      {
        "name_ko": "존 크레스웰",
        "name_en": "John Creswell",
        "contribution": "양적·질적·혼합방법 연구에서의 연구문제 작성 지침을 체계적으로 제시했다."
      },
      {
        "name_ko": "프레드 커링거",
        "name_en": "Fred Kerlinger",
        "contribution": "좋은 연구문제의 기준(변인 간 관계, 검증 가능성)을 명확히 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연구가설",
        "name_en": "Research Hypothesis",
        "id": "FOUND_RH_014"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "변인",
        "name_en": "Variable",
        "id": "FOUND_VR_004"
      }
    ],
    "sub_types": [
      {
        "name": "기술적 연구문제",
        "description": "현상의 현재 상태나 특성을 기술하려는 질문"
      },
      {
        "name": "관계적 연구문제",
        "description": "변인 간의 관계나 상관을 탐구하는 질문"
      },
      {
        "name": "인과적 연구문제",
        "description": "변인 간의 인과관계를 밝히려는 질문"
      }
    ],
    "quiz_hints": {
      "mnemonic": "연구문제 = 연구의 '문'을 여는 핵심 '제(질문)'",
      "differential": "연구문제는 질문 형태의 탐구적 진술이고, 가설은 연구문제에 대한 예측적 답변이다.",
      "key_point": "좋은 연구문제는 구체적이고, 경험적으로 검증 가능하며, 변인 간 관계를 포함해야 한다.",
      "common_mistake": "너무 광범위하거나 모호한 연구문제를 설정하면 적절한 연구설계와 통계 분석을 선택하기 어렵다."
    }
  },
  {
    "id": "FOUND_RH_014",
    "terminology": "연구가설 (Research Hypothesis)",
    "terminology_ko": "연구가설",
    "terminology_en": "Research Hypothesis",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구문제에 대한 잠정적 답변으로, 변인 간의 예상되는 관계를 구체적이고 검증 가능하게 진술한 것이다.",
    "definition_en": "A tentative answer to a research question that specifically and testably states the expected relationship between variables.",
    "significance": "연구의 예측을 명시화하여 경험적 검증의 대상을 분명히 하고, 자료 수집과 분석의 방향을 안내한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "연구가설을 통계적으로 검증하는 귀무가설 검정 절차를 확립했다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "Neyman-Pearson 가설검정 이론을 통해 연구가설 검증의 수리적 기초를 강화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연구문제",
        "name_en": "Research Question",
        "id": "FOUND_RQ_013"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      }
    ],
    "sub_types": [
      {
        "name": "방향성 가설",
        "description": "관계의 방향을 구체적으로 예측하는 가설 (예: A > B)"
      },
      {
        "name": "비방향성 가설",
        "description": "관계의 존재만 예측하고 방향은 지정하지 않는 가설 (예: A ≠ B)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "연구가설 = '연구'자가 예측하는 '가설' (귀무가설의 반대)",
      "differential": "연구가설은 차이나 관계가 '있다'고 예측하고, 귀무가설은 '없다'고 가정한다.",
      "key_point": "연구가설은 통계적으로는 대립가설(H₁)로 표현되며, 직접 검증되는 것이 아니라 귀무가설의 기각을 통해 간접적으로 지지된다.",
      "common_mistake": "연구가설이 직접 '증명'된다고 오해하나, 귀무가설을 기각함으로써 간접적으로 '지지'되는 것이다."
    }
  },
  {
    "id": "FOUND_CA_015",
    "terminology": "인과관계 (Causation)",
    "terminology_ko": "인과관계",
    "terminology_en": "Causation",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "한 변인(원인)의 변화가 다른 변인(결과)의 변화를 직접적으로 초래하는 관계로, 공변, 시간적 선행, 제3변인 배제의 세 조건이 충족되어야 한다.",
    "definition_en": "A relationship in which a change in one variable (cause) directly brings about a change in another variable (effect), requiring covariation, temporal precedence, and elimination of alternative explanations.",
    "significance": "심리학 연구의 궁극적 목표 중 하나로, 인과관계 규명을 통해 행동의 원인을 이해하고 효과적인 개입과 예측이 가능해진다.",
    "key_researchers": [
      {
        "name_ko": "존 스튜어트 밀",
        "name_en": "John Stuart Mill",
        "contribution": "일치법, 차이법, 공변법 등 인과 추론의 논리적 원리를 체계화했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "내적 타당도 개념을 통해 인과 추론의 조건과 위협요인을 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상관관계",
        "name_en": "Correlation",
        "id": "FOUND_CR_016"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "혼입변인",
        "name_en": "Confounding Variable",
        "id": "FOUND_CF_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인과관계 3조건: 공(공변)-시(시간선행)-제(제3변인 배제)",
      "differential": "인과관계는 한 변인이 다른 변인을 '초래'하는 관계이고, 상관관계는 두 변인이 '함께 변하는' 관계일 뿐 원인을 의미하지 않는다.",
      "key_point": "인과관계를 주장하려면 (1) 공변, (2) 시간적 선행, (3) 대안적 설명의 배제라는 세 가지 조건을 모두 충족해야 한다.",
      "common_mistake": "상관관계가 높으면 인과관계가 있다고 오해하기 쉬우나, '상관은 인과를 함의하지 않는다(correlation does not imply causation)'."
    }
  },
  {
    "id": "FOUND_CR_016",
    "terminology": "상관관계 (Correlation)",
    "terminology_ko": "상관관계",
    "terminology_en": "Correlation",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "두 변인이 함께 변화하는 관계로, 한 변인의 변화가 다른 변인의 변화와 체계적으로 관련되어 있는 정도를 나타낸다.",
    "definition_en": "A relationship in which two variables change together, indicating the degree to which changes in one variable are systematically related to changes in another.",
    "significance": "변인 간 관계의 방향과 강도를 파악하는 기초적 방법으로, 예측 연구와 이론 검증의 출발점이 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "피어슨 적률상관계수(r)를 개발하여 상관관계의 정량적 측정을 가능하게 했다."
      },
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "회귀와 상관의 기본 개념을 도입하여 상관분석의 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      },
      {
        "name_ko": "피어슨상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "스피어만상관",
        "name_en": "Spearman Correlation",
        "id": "CORR_SR_002"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "DESIGN_CS_028"
      }
    ],
    "sub_types": [
      {
        "name": "정적 상관",
        "description": "한 변인이 증가할 때 다른 변인도 증가하는 관계 (+)"
      },
      {
        "name": "부적 상관",
        "description": "한 변인이 증가할 때 다른 변인은 감소하는 관계 (-)"
      },
      {
        "name": "영 상관",
        "description": "두 변인 간에 체계적 관계가 없는 상태 (0에 근접)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상관 = '상(서로)' '관(관련)'되어 함께 변하는 관계",
      "differential": "상관관계는 두 변인의 '공변' 정도만 나타내고, 인과관계는 한 변인이 다른 변인을 '초래'함을 의미한다.",
      "key_point": "상관계수(r)는 -1에서 +1 사이의 값을 가지며, 절대값이 클수록 관계가 강하다.",
      "common_mistake": "상관관계가 높으면 인과관계가 있다고 오해하는 것이 가장 흔한 실수이다. 제3변인이 두 변인 모두에 영향을 미칠 수 있다."
    }
  },
  {
    "id": "FOUND_PS_017",
    "terminology": "실증주의 (Positivism)",
    "terminology_ko": "실증주의",
    "terminology_en": "Positivism",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "관찰 가능하고 측정 가능한 현상만이 과학적 지식의 대상이 될 수 있다고 보는 철학적 입장으로, 경험적 증거에 기반한 객관적 지식을 강조한다.",
    "definition_en": "A philosophical position asserting that only observable and measurable phenomena can be the subject of scientific knowledge, emphasizing objective knowledge based on empirical evidence.",
    "significance": "심리학이 철학에서 독립하여 과학으로 성립하는 데 핵심적 토대를 제공했으며, 행동주의와 실험심리학 발전의 철학적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "오귀스트 콩트",
        "name_en": "Auguste Comte",
        "contribution": "실증주의를 체계적으로 정립하여 과학적 방법론의 철학적 기반을 마련했다."
      },
      {
        "name_ko": "루돌프 카르나프",
        "name_en": "Rudolf Carnap",
        "contribution": "논리실증주의를 발전시켜 과학적 진술의 검증 가능성 기준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경험주의",
        "name_en": "Empiricism",
        "id": "FOUND_EM_028"
      },
      {
        "name_ko": "반증가능성",
        "name_en": "Falsifiability",
        "id": "FOUND_FA_018"
      },
      {
        "name_ko": "객관성",
        "name_en": "Objectivity",
        "id": "FOUND_OB_029"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      }
    ],
    "sub_types": [
      {
        "name": "논리실증주의",
        "description": "검증 가능성 원리를 핵심으로 하는 20세기 초 실증주의 학파"
      },
      {
        "name": "후기실증주의",
        "description": "완전한 객관성의 한계를 인정하면서도 과학적 방법의 가치를 수용하는 입장"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실증 = '실(실제로)' '증(증거를 통해)' 확인할 수 있는 것만 과학",
      "differential": "실증주의는 관찰 가능한 것만 과학의 대상으로 보지만, 구성주의는 주관적 경험과 의미 구성도 연구 대상으로 인정한다.",
      "key_point": "현대 심리학은 순수 실증주의보다 후기실증주의 입장을 취하여, 완전한 객관성의 한계를 인정하면서도 과학적 방법의 가치를 수용한다.",
      "common_mistake": "실증주의가 모든 심리학 연구의 유일한 철학적 기반이라고 오해하나, 질적 연구는 해석학이나 구성주의에 기반한다."
    }
  },
  {
    "id": "FOUND_FA_018",
    "terminology": "반증가능성 (Falsifiability)",
    "terminology_ko": "반증가능성",
    "terminology_en": "Falsifiability",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "과학적 이론이나 가설이 경험적 관찰이나 실험에 의해 틀렸음이 입증될 수 있는 가능성으로, 과학과 비과학을 구분하는 핵심 기준이다.",
    "definition_en": "The possibility that a scientific theory or hypothesis can be proven wrong through empirical observation or experimentation, serving as the key criterion for demarcating science from non-science.",
    "significance": "과학적 주장의 논리적 기준을 명확히 하여, 과학과 사이비과학을 구분하고 이론의 발전 방향을 안내한다.",
    "key_researchers": [
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "반증주의를 제안하여 과학적 이론의 핵심 기준으로 반증가능성을 확립했다."
      },
      {
        "name_ko": "임레 라카토슈",
        "name_en": "Imre Lakatos",
        "contribution": "연구 프로그램 방법론을 통해 반증가능성 개념을 정교화하고 보완했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "실증주의",
        "name_en": "Positivism",
        "id": "FOUND_PS_017"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반증가능성 = '반(반대)' 증거가 '가능(가능)' 해야 과학",
      "differential": "반증가능성은 '틀릴 수 있는 가능성'을 의미하며, '틀렸다'는 뜻이 아니다. 반증 가능하되 아직 반증되지 않은 이론이 가장 강력한 이론이다.",
      "key_point": "반증 불가능한 주장(예: '모든 행동에는 무의식적 동기가 있다')은 과학적 가설로 부적절하다.",
      "common_mistake": "반증가능성을 '이론이 잘못되었다'는 의미로 오해하기 쉬우나, 이는 '원칙적으로 틀릴 수 있는 가능성이 있어야 한다'는 구분 기준이다."
    }
  },
  {
    "id": "FOUND_DD_019",
    "terminology": "연역법 (Deduction)",
    "terminology_ko": "연역법",
    "terminology_en": "Deduction",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "일반적 원리나 이론에서 구체적인 예측이나 가설을 도출하는 논리적 추론 방법으로, 전제가 참이면 결론도 반드시 참이 되는 하향식 추론이다.",
    "definition_en": "A logical reasoning method that derives specific predictions or hypotheses from general principles or theories, a top-down approach where true premises necessarily lead to true conclusions.",
    "significance": "이론에서 검증 가능한 가설을 도출하는 과정으로, 가설-연역적 방법의 핵심 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "아리스토텔레스",
        "name_en": "Aristotle",
        "contribution": "삼단논법을 체계화하여 형식 논리학과 연역적 추론의 기초를 확립했다."
      },
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "가설-연역적 방법을 과학의 핵심 절차로 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀납법",
        "name_en": "Induction",
        "id": "FOUND_IN_020"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      },
      {
        "name_ko": "반증가능성",
        "name_en": "Falsifiability",
        "id": "FOUND_FA_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "연역 = 일반 → 특수 (위에서 아래로, 이론 → 가설)",
      "differential": "연역법은 일반 → 특수(이론에서 가설을 도출)이고, 귀납법은 특수 → 일반(관찰에서 이론을 구성)이다.",
      "key_point": "연역법의 강점은 논리적 필연성이지만, 전제(이론)가 잘못되면 결론도 잘못될 수 있다.",
      "common_mistake": "연역법만으로 새로운 지식을 생산할 수 있다고 오해하나, 새로운 이론의 형성에는 귀납적 관찰이 필수적이다."
    }
  },
  {
    "id": "FOUND_IN_020",
    "terminology": "귀납법 (Induction)",
    "terminology_ko": "귀납법",
    "terminology_en": "Induction",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "구체적인 관찰이나 사례로부터 일반적인 원리나 법칙을 도출하는 상향식 추론 방법으로, 결론이 개연적이지만 필연적이지는 않다.",
    "definition_en": "A bottom-up reasoning method that derives general principles or laws from specific observations or cases, where conclusions are probable but not necessarily certain.",
    "significance": "새로운 이론과 가설의 생성에 핵심적 역할을 하며, 관찰과 자료 수집을 통한 과학적 발견의 출발점이 된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 베이컨",
        "name_en": "Francis Bacon",
        "contribution": "귀납적 방법론을 체계화하여 경험적 과학의 방법론적 기초를 확립했다."
      },
      {
        "name_ko": "데이비드 흄",
        "name_en": "David Hume",
        "contribution": "귀납의 문제를 제기하여 귀납적 추론의 논리적 한계를 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연역법",
        "name_en": "Deduction",
        "id": "FOUND_DD_019"
      },
      {
        "name_ko": "경험주의",
        "name_en": "Empiricism",
        "id": "FOUND_EM_028"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "귀납 = 특수 → 일반 (아래에서 위로, 관찰 → 이론)",
      "differential": "귀납법은 관찰에서 이론을 구성하는 상향식 추론이고, 연역법은 이론에서 가설을 도출하는 하향식 추론이다.",
      "key_point": "귀납법의 한계는 아무리 많은 관찰이 있어도 결론이 100% 확실하지 않다는 '귀납의 문제'이다.",
      "common_mistake": "귀납법으로 도출된 결론이 절대적 진리라고 오해하기 쉬우나, 항상 반례의 가능성이 남아있다."
    }
  },
  {
    "id": "FOUND_CT_021",
    "terminology": "구성개념 (Construct)",
    "terminology_ko": "구성개념",
    "terminology_en": "Construct",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "직접 관찰할 수 없지만 관찰 가능한 행동으로부터 추론되는 추상적인 개념으로, 지능, 불안, 성격 특성 등이 대표적이다.",
    "definition_en": "An abstract concept that cannot be directly observed but is inferred from observable behavior, with intelligence, anxiety, and personality traits as representative examples.",
    "significance": "심리학의 핵심 연구 대상으로, 구성개념의 명확한 정의와 타당한 측정은 심리학 이론과 연구의 질을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "Meehl과 함께 구성타당도 개념을 제안하여 구성개념 측정의 이론적 틀을 확립했다."
      },
      {
        "name_ko": "폴 미엘",
        "name_en": "Paul Meehl",
        "contribution": "구성타당도 검증을 위한 법칙적 연결망(nomological network) 개념을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "FOUND_OD_011"
      },
      {
        "name_ko": "개념적 정의",
        "name_en": "Conceptual Definition",
        "id": "FOUND_CD_012"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구성개념 = 머릿속에서 '구성'한 추상적 '개념' (직접 못 봄)",
      "differential": "구성개념은 직접 관찰 불가능한 추상적 개념이고, 변인은 측정 가능한 관찰의 대상이다. 구성개념을 변인으로 만드는 것이 조작적 정의이다.",
      "key_point": "동일한 구성개념도 다양한 방식으로 조작적으로 정의될 수 있으며, 이것이 구성타당도 문제를 야기한다.",
      "common_mistake": "구성개념이 실제로 존재하는 '실체'라고 오해하기 쉬우나, 행동을 설명하기 위해 '구성'한 추상적 개념이다."
    }
  },
  {
    "id": "FOUND_LW_022",
    "terminology": "법칙 (Law)",
    "terminology_ko": "법칙",
    "terminology_en": "Law",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "광범위한 경험적 증거에 의해 반복적으로 확인된 변인 간의 일관된 관계를 기술하는 일반화된 진술로, 예외가 거의 없는 규칙성을 나타낸다.",
    "definition_en": "A generalized statement describing consistent relationships between variables that have been repeatedly confirmed by extensive empirical evidence, indicating regularity with virtually no exceptions.",
    "significance": "과학적 지식의 가장 확립된 형태로, 현상의 예측과 설명에 높은 신뢰성을 제공하며, 이론의 핵심 구성요소가 된다.",
    "key_researchers": [
      {
        "name_ko": "구스타프 페히너",
        "name_en": "Gustav Fechner",
        "contribution": "베버-페히너 법칙을 확립하여 심리학 최초의 양적 법칙을 수립했다."
      },
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "효과의 법칙을 발견하여 학습심리학의 핵심 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      },
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "법칙 = 수많은 연구로 확인된 '변하지 않는 규칙'",
      "differential": "법칙은 '무엇이 일어나는가'를 기술하고, 이론은 '왜 그런 일이 일어나는가'를 설명한다.",
      "key_point": "심리학에서는 자연과학만큼 절대적인 법칙은 드물고, 대부분 확률적 일반화(probabilistic generalization)에 해당한다.",
      "common_mistake": "법칙이 이론보다 상위 개념이라고 오해하기 쉬우나, 법칙은 현상의 기술이고 이론은 법칙을 포함한 포괄적 설명 체계이다."
    }
  },
  {
    "id": "FOUND_PD_023",
    "terminology": "패러다임 (Paradigm)",
    "terminology_ko": "패러다임",
    "terminology_en": "Paradigm",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "특정 시기의 과학자 공동체가 공유하는 이론, 방법론, 가치, 세계관의 총체로, 과학적 탐구의 틀과 방향을 결정한다.",
    "definition_en": "The totality of theories, methods, values, and worldviews shared by a scientific community at a given time, determining the framework and direction of scientific inquiry.",
    "significance": "심리학의 역사를 이해하는 핵심 개념으로, 행동주의에서 인지혁명으로의 전환 등 패러다임 전환이 학문 발전을 이끌어왔다.",
    "key_researchers": [
      {
        "name_ko": "토마스 쿤",
        "name_en": "Thomas Kuhn",
        "contribution": "『과학혁명의 구조』에서 패러다임 개념을 제시하여 과학 발전의 비연속적 성격을 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정상과학",
        "name_en": "Normal Science",
        "id": "FOUND_NS_024"
      },
      {
        "name_ko": "과학적 혁명",
        "name_en": "Scientific Revolution",
        "id": "FOUND_SR_025"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "패러다임 = 과학자 집단의 '안경'(세상을 보는 틀)",
      "differential": "패러다임은 이론, 방법론, 가치를 포괄하는 총체적 세계관이고, 이론은 특정 현상을 설명하는 하나의 체계이다.",
      "key_point": "쿤에 따르면 과학은 패러다임 → 정상과학 → 이상현상 축적 → 위기 → 혁명 → 새 패러다임의 순환적 과정을 거친다.",
      "common_mistake": "패러다임이 단순히 '이론'과 같은 의미로 사용되기 쉬우나, 실제로는 이론을 포함한 훨씬 넓은 개념이다."
    }
  },
  {
    "id": "FOUND_NS_024",
    "terminology": "정상과학 (Normal Science)",
    "terminology_ko": "정상과학",
    "terminology_en": "Normal Science",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "기존 패러다임의 틀 안에서 수행되는 일상적 과학 활동으로, 퍼즐 풀기에 비유되며 패러다임의 세부 사항을 정교화하고 확장하는 작업이다.",
    "definition_en": "Routine scientific activity conducted within an existing paradigm, likened to puzzle-solving, involving the refinement and extension of the paradigm's details.",
    "significance": "대부분의 과학적 연구는 정상과학의 형태로 이루어지며, 패러다임 내에서의 지식 축적과 정교화가 과학 발전의 기본 동력이 된다.",
    "key_researchers": [
      {
        "name_ko": "토마스 쿤",
        "name_en": "Thomas Kuhn",
        "contribution": "정상과학 개념을 통해 일상적 과학 활동의 성격과 기능을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "패러다임",
        "name_en": "Paradigm",
        "id": "FOUND_PD_023"
      },
      {
        "name_ko": "과학적 혁명",
        "name_en": "Scientific Revolution",
        "id": "FOUND_SR_025"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정상과학 = '정상적으로' 패러다임 안에서 '퍼즐 풀기'",
      "differential": "정상과학은 기존 패러다임 내에서의 점진적 연구이고, 과학적 혁명은 패러다임 자체가 교체되는 급격한 전환이다.",
      "key_point": "정상과학에서 이상현상(anomaly)이 축적되면 기존 패러다임에 대한 위기가 발생하고, 이것이 과학적 혁명의 전조가 된다.",
      "common_mistake": "정상과학이 혁신적이지 않다고 과소평가하기 쉬우나, 과학 지식의 대부분은 정상과학을 통해 축적된다."
    }
  },
  {
    "id": "FOUND_SR_025",
    "terminology": "과학적 혁명 (Scientific Revolution)",
    "terminology_ko": "과학적 혁명",
    "terminology_en": "Scientific Revolution",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "기존 패러다임이 새로운 패러다임으로 대체되는 과학의 근본적 전환으로, 이상현상의 축적과 위기를 거쳐 발생하는 비연속적 변화이다.",
    "definition_en": "A fundamental shift in science where an existing paradigm is replaced by a new one, occurring as a discontinuous change through the accumulation of anomalies and subsequent crisis.",
    "significance": "심리학에서 행동주의에서 인지혁명으로의 전환이 대표적 사례이며, 학문의 비연속적 발전 과정을 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "토마스 쿤",
        "name_en": "Thomas Kuhn",
        "contribution": "『과학혁명의 구조』(1962)에서 과학 발전의 혁명적 성격을 체계적으로 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "패러다임",
        "name_en": "Paradigm",
        "id": "FOUND_PD_023"
      },
      {
        "name_ko": "정상과학",
        "name_en": "Normal Science",
        "id": "FOUND_NS_024"
      },
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과학적 혁명 = 패러다임이 '확' 바뀌는 혁명적 전환",
      "differential": "과학적 혁명은 패러다임의 교체(비연속적)이고, 정상과학은 패러다임 내의 점진적 축적이다.",
      "key_point": "심리학에서의 과학적 혁명 사례: 구조주의→행동주의, 행동주의→인지심리학(인지혁명).",
      "common_mistake": "과학적 혁명이 단순한 이론 교체라고 오해하기 쉬우나, 세계관, 방법론, 가치관 전체의 전환을 포함한다."
    }
  },
  {
    "id": "FOUND_MN_026",
    "terminology": "조작 (Manipulation)",
    "terminology_ko": "조작",
    "terminology_en": "Manipulation",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "실험에서 연구자가 독립변인의 수준이나 조건을 의도적으로 변화시키는 행위로, 인과관계 추론의 핵심 절차이다.",
    "definition_en": "The deliberate alteration of the levels or conditions of an independent variable by the researcher in an experiment, serving as a core procedure for causal inference.",
    "significance": "실험연구에서 인과관계를 확립하기 위한 필수 조건으로, 조작 없이는 독립변인의 효과를 확인할 수 없다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "체계적 실험 조작과 무선화의 결합을 통한 인과 추론 방법론을 확립했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "조작의 적절성과 내적 타당도 간의 관계를 분석하여 실험설계 이론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      },
      {
        "name_ko": "통제",
        "name_en": "Control",
        "id": "FOUND_CO_027"
      }
    ],
    "sub_types": [
      {
        "name": "환경 조작",
        "description": "실험 상황이나 환경 조건을 변화시키는 조작"
      },
      {
        "name": "지시 조작",
        "description": "참가자에게 주어지는 지시사항을 변화시키는 조작"
      },
      {
        "name": "과제 조작",
        "description": "참가자가 수행하는 과제의 특성을 변화시키는 조작"
      }
    ],
    "quiz_hints": {
      "mnemonic": "조작 = 연구자가 독립변인을 '조(조절하여)' '작(작동시키는)' 행위",
      "differential": "조작(manipulation)은 독립변인을 의도적으로 변화시키는 것이고, 측정(measurement)은 종속변인의 변화를 관찰하는 것이다.",
      "key_point": "효과적인 조작은 독립변인의 수준 간 차이가 충분히 크고, 의도한 것만 변화시켜야 한다(조작 검증 필요).",
      "common_mistake": "조작이라는 용어를 부정적 의미(속임수)로 오해하기 쉬우나, 연구에서의 조작은 과학적 절차의 핵심 부분이다."
    }
  },
  {
    "id": "FOUND_CO_027",
    "terminology": "통제 (Control)",
    "terminology_ko": "통제",
    "terminology_en": "Control",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구에서 외생변인의 영향을 제거하거나 일정하게 유지하여 독립변인의 순수한 효과를 관찰할 수 있게 하는 절차나 방법의 총칭이다.",
    "definition_en": "The general term for procedures or methods used in research to eliminate or keep constant the influence of extraneous variables, enabling observation of the pure effect of the independent variable.",
    "significance": "내적 타당도 확보의 핵심 원리로, 적절한 통제 없이는 연구 결과에 대한 인과적 해석이 불가능하다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화를 통한 실험 통제의 원리를 체계적으로 확립했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "준실험 설계에서의 통제 방법과 한계를 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통제변인",
        "name_en": "Control Variable",
        "id": "FOUND_CV_010"
      },
      {
        "name_ko": "외생변인",
        "name_en": "Extraneous Variable",
        "id": "FOUND_EV_009"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      }
    ],
    "sub_types": [
      {
        "name": "실험적 통제",
        "description": "무선할당, 짝짓기, 역균형화 등 실험 절차를 통한 통제"
      },
      {
        "name": "통계적 통제",
        "description": "공변량분석(ANCOVA) 등 통계 기법을 통한 통제"
      }
    ],
    "quiz_hints": {
      "mnemonic": "통제 = 외생변인의 영향을 '통(통제하여)' '제(제거)'하는 절차",
      "differential": "실험적 통제는 연구 설계 단계에서 외생변인을 사전에 제거하고, 통계적 통제는 자료 분석 단계에서 외생변인의 영향을 사후에 제거한다.",
      "key_point": "통제 방법에는 무선할당, 짝짓기, 일정하게 유지, 역균형화, 통계적 통제 등 다양한 방법이 있다.",
      "common_mistake": "통제집단을 두는 것만이 통제라고 오해하기 쉬우나, 통제는 외생변인 관리를 위한 다양한 방법의 총칭이다."
    }
  },
  {
    "id": "FOUND_EM_028",
    "terminology": "경험주의 (Empiricism)",
    "terminology_ko": "경험주의",
    "terminology_en": "Empiricism",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "지식은 감각 경험과 관찰을 통해 획득된다는 철학적 입장으로, 과학적 방법의 핵심 원리인 경험적 증거에 기반한 탐구를 강조한다.",
    "definition_en": "A philosophical position holding that knowledge is acquired through sensory experience and observation, emphasizing inquiry based on empirical evidence as the core principle of the scientific method.",
    "significance": "심리학을 과학으로 성립시키는 철학적 기반으로, 주관적 사변이 아닌 관찰과 데이터에 기반한 연구를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "존 로크",
        "name_en": "John Locke",
        "contribution": "백지설(tabula rasa)을 통해 모든 지식이 경험에서 비롯된다는 경험론의 기초를 확립했다."
      },
      {
        "name_ko": "데이비드 흄",
        "name_en": "David Hume",
        "contribution": "경험주의를 극단까지 밀고 나가 인과관계의 관찰 불가능성을 논증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실증주의",
        "name_en": "Positivism",
        "id": "FOUND_PS_017"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      },
      {
        "name_ko": "객관성",
        "name_en": "Objectivity",
        "id": "FOUND_OB_029"
      },
      {
        "name_ko": "귀납법",
        "name_en": "Induction",
        "id": "FOUND_IN_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경험주의 = '경험'으로 '주의(주로 알게 되는)' 지식관",
      "differential": "경험주의는 지식의 원천이 감각 경험이라고 보고, 합리주의는 이성과 논리가 지식의 원천이라고 본다.",
      "key_point": "현대 과학은 경험주의와 합리주의를 통합하여 경험적 관찰과 논리적 추론을 모두 활용한다.",
      "common_mistake": "경험주의가 직관이나 개인적 체험을 중시한다고 오해하기 쉬우나, 과학적 맥락에서 경험주의는 체계적 관찰과 측정을 의미한다."
    }
  },
  {
    "id": "FOUND_OB_029",
    "terminology": "객관성 (Objectivity)",
    "terminology_ko": "객관성",
    "terminology_en": "Objectivity",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "연구자의 개인적 편향, 가치관, 기대가 연구 과정과 결과 해석에 영향을 미치지 않도록 하는 과학적 탐구의 핵심 원리이다.",
    "definition_en": "A core principle of scientific inquiry that ensures the researcher's personal biases, values, and expectations do not influence the research process or interpretation of results.",
    "significance": "과학적 지식의 신뢰성과 타당성의 기반으로, 연구 결과가 누가, 언제 수행하더라도 동일하게 재현될 수 있도록 보장한다.",
    "key_researchers": [
      {
        "name_ko": "막스 베버",
        "name_en": "Max Weber",
        "contribution": "가치중립성 개념을 통해 사회과학에서의 객관성 문제를 체계적으로 논의했다."
      },
      {
        "name_ko": "칼 포퍼",
        "name_en": "Karl Popper",
        "contribution": "과학적 객관성은 상호주관적 검증 가능성에 기반한다고 주장하여 객관성의 실천적 기준을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      },
      {
        "name_ko": "경험주의",
        "name_en": "Empiricism",
        "id": "FOUND_EM_028"
      },
      {
        "name_ko": "동료심사",
        "name_en": "Peer Review",
        "id": "FOUND_PR_032"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "객관성 = '객(객관적으로)' '관(관찰)'하여 편향을 배제",
      "differential": "객관성은 연구자의 편향을 배제하는 원리이고, 신뢰도는 측정의 일관성을 의미한다. 둘 다 과학적 연구의 필수 요건이다.",
      "key_point": "완전한 객관성은 실현하기 어렵지만, 표준화된 절차, 이중맹검, 동료심사 등을 통해 최대한 확보할 수 있다.",
      "common_mistake": "객관성이 연구자의 관점이 전혀 없어야 한다는 의미가 아니라, 편향이 결과에 체계적으로 영향을 미치지 않도록 하는 것이다."
    }
  },
  {
    "id": "FOUND_CF_030",
    "terminology": "혼입변인 (Confounding Variable)",
    "terminology_ko": "혼입변인",
    "terminology_en": "Confounding Variable",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "독립변인과 체계적으로 공변하면서 동시에 종속변인에도 영향을 미치는 외생변인으로, 인과관계 추론을 방해하는 대표적 위협요인이다.",
    "definition_en": "An extraneous variable that systematically covaries with the independent variable while also affecting the dependent variable, representing a primary threat to causal inference.",
    "significance": "내적 타당도를 위협하는 가장 심각한 문제로, 혼입변인의 존재는 독립변인의 효과와 혼입변인의 효과를 구분할 수 없게 만든다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "내적 타당도 위협요인으로서의 혼입변인 유형을 체계적으로 분류했다."
      },
      {
        "name_ko": "토마스 쿡",
        "name_en": "Thomas Cook",
        "contribution": "Campbell과 함께 준실험 설계에서 혼입변인을 통제하는 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외생변인",
        "name_en": "Extraneous Variable",
        "id": "FOUND_EV_009"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "혼입 = 독립변인에 '혼(섞여)' '입(들어와)' 결과를 오염시키는 변인",
      "differential": "혼입변인은 독립변인과 '체계적으로' 공변하는 외생변인이고, 단순 외생변인은 무선적으로 오차를 증가시킨다.",
      "key_point": "혼입변인을 통제하는 가장 강력한 방법은 무선할당(random assignment)이다.",
      "common_mistake": "혼입변인을 단순히 '노이즈'로 오해하기 쉬우나, 체계적으로 공변하기 때문에 결과를 편향되게 만든다는 점이 핵심이다."
    }
  },
  {
    "id": "FOUND_RP_031",
    "terminology": "반복검증 (Replication)",
    "terminology_ko": "반복검증",
    "terminology_en": "Replication",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "동일하거나 유사한 절차를 사용하여 연구를 반복 수행함으로써 원래 연구 결과의 신뢰성과 일반화 가능성을 확인하는 과정이다.",
    "definition_en": "The process of repeating a study using identical or similar procedures to verify the reliability and generalizability of original research findings.",
    "significance": "과학적 지식의 자기교정 기능을 대표하며, 반복검증을 통해 우연적 결과를 걸러내고 견고한 지식을 축적할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "브라이언 노섹",
        "name_en": "Brian Nosek",
        "contribution": "Open Science Collaboration(2015)을 이끌어 심리학 연구의 반복검증 위기를 실증적으로 밝혔다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "통계적 유의성 검정을 통한 연구 결과의 반복 가능성 평가 틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "객관성",
        "name_en": "Objectivity",
        "id": "FOUND_OB_029"
      },
      {
        "name_ko": "동료심사",
        "name_en": "Peer Review",
        "id": "FOUND_PR_032"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-analysis",
        "id": "FOUND_MA_033"
      },
      {
        "name_ko": "외적타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      }
    ],
    "sub_types": [
      {
        "name": "직접 반복검증",
        "description": "원래 연구와 동일한 절차를 사용하여 결과를 재현하는 반복"
      },
      {
        "name": "개념적 반복검증",
        "description": "다른 방법이나 맥락에서 동일한 가설을 검증하는 반복"
      },
      {
        "name": "체계적 반복검증",
        "description": "원래 연구의 특정 측면을 의도적으로 변경하여 결과의 경계 조건을 탐색하는 반복"
      }
    ],
    "quiz_hints": {
      "mnemonic": "반복검증 = '반복'해서 '검증'하여 확인되어야 진짜 과학",
      "differential": "직접 반복검증은 동일 절차의 재현이고, 개념적 반복검증은 다른 방법으로 같은 가설을 검증하는 것이다.",
      "key_point": "2015년 Open Science Collaboration 연구에서 심리학 연구의 반복검증 성공률이 약 36%에 불과하여 '재현 위기(replication crisis)'가 대두되었다.",
      "common_mistake": "반복검증 실패가 원래 연구가 반드시 잘못되었음을 의미한다고 오해하나, 맥락적 차이나 표본 차이도 원인이 될 수 있다."
    }
  },
  {
    "id": "FOUND_PR_032",
    "terminology": "동료심사 (Peer Review)",
    "terminology_ko": "동료심사",
    "terminology_en": "Peer Review",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "전문가 동료들이 연구의 방법론, 결과, 해석의 질과 적절성을 평가하는 과정으로, 학술지 게재 전 연구의 질을 보증하는 자기교정 메커니즘이다.",
    "definition_en": "A process in which expert peers evaluate the quality and appropriateness of research methodology, findings, and interpretations, serving as a self-correcting mechanism to ensure research quality before journal publication.",
    "significance": "과학적 지식의 질적 관리 체계로, 연구자의 편향을 검출하고 방법론적 오류를 교정하여 학문적 진실성을 유지한다.",
    "key_researchers": [
      {
        "name_ko": "헨리 올든버그",
        "name_en": "Henry Oldenburg",
        "contribution": "1665년 Philosophical Transactions 창간 시 동료심사 제도를 도입한 초기 선구자이다."
      },
      {
        "name_ko": "로버트 머턴",
        "name_en": "Robert Merton",
        "contribution": "과학의 규범 구조 분석을 통해 동료심사의 사회적·제도적 기능을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      },
      {
        "name_ko": "객관성",
        "name_en": "Objectivity",
        "id": "FOUND_OB_029"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      }
    ],
    "sub_types": [
      {
        "name": "단일맹검 심사",
        "description": "심사자는 저자를 알지만, 저자는 심사자를 모르는 형태"
      },
      {
        "name": "이중맹검 심사",
        "description": "심사자와 저자 모두 서로의 신원을 모르는 형태"
      },
      {
        "name": "공개 심사",
        "description": "심사자와 저자의 신원이 모두 공개되는 형태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "동료심사 = 같은 분야 '동료'가 '심사'하여 질을 보증",
      "differential": "동료심사는 연구 게재 전의 질적 평가이고, 반복검증은 게재 후 결과의 재현 가능성을 확인하는 과정이다.",
      "key_point": "동료심사의 핵심 기능은 연구의 방법론적 타당성, 결과 해석의 적절성, 학문적 기여도를 평가하는 것이다.",
      "common_mistake": "동료심사를 통과한 연구가 반드시 '올바르다'고 오해하기 쉬우나, 동료심사는 완벽한 품질 보증이 아닌 최소한의 질적 관리 장치이다."
    }
  },
  {
    "id": "FOUND_MA_033",
    "terminology": "메타분석 (Meta-analysis)",
    "terminology_ko": "메타분석",
    "terminology_en": "Meta-analysis",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "동일하거나 유사한 연구 주제에 대한 여러 독립적 연구 결과를 통계적으로 통합하여 전반적인 효과 크기를 산출하는 양적 분석 방법이다.",
    "definition_en": "A quantitative analytical method that statistically integrates results from multiple independent studies on the same or similar research topics to calculate an overall effect size.",
    "significance": "개별 연구의 제한된 표본 크기와 맥락적 한계를 극복하고, 누적된 증거에 기반한 더 정확하고 일반화 가능한 결론을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "진 글래스",
        "name_en": "Gene Glass",
        "contribution": "1976년 '메타분석'이라는 용어를 처음 사용하고 이 방법론을 심리치료 효과 연구에 적용했다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry Hedges",
        "contribution": "메타분석의 통계적 방법론을 정교화하고, 효과 크기 추정의 수학적 기초를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      }
    ],
    "sub_types": [
      {
        "name": "고정효과 모형",
        "description": "모든 연구가 동일한 모집단 효과를 추정한다고 가정하는 모형"
      },
      {
        "name": "무선효과 모형",
        "description": "연구들 간 효과 크기의 변동을 허용하는 모형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "메타 = '초월(meta)'하여 여러 연구를 통합 분석하는 '분석'",
      "differential": "메타분석은 기존 연구들의 결과를 통계적으로 통합하는 양적 방법이고, 문헌고찰은 연구 결과를 서술적으로 정리하는 질적 방법이다.",
      "key_point": "메타분석의 결과는 출판편향(publication bias)에 영향을 받을 수 있으므로, 깔때기 그림(funnel plot) 등으로 이를 검증해야 한다.",
      "common_mistake": "메타분석이 원래 연구들의 질적 한계를 자동으로 극복한다고 오해하기 쉬우나, '쓰레기를 넣으면 쓰레기가 나온다(garbage in, garbage out)' 원칙이 적용된다."
    }
  },
  {
    "id": "FOUND_PA_034",
    "terminology": "절약의 원리 (Parsimony)",
    "terminology_ko": "절약의 원리",
    "terminology_en": "Parsimony",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "동일한 현상을 설명할 수 있는 여러 이론 중에서 가장 단순하고 적은 가정을 사용하는 이론을 선호해야 한다는 과학적 원리이다.",
    "definition_en": "A scientific principle stating that among multiple theories explaining the same phenomenon, the simplest theory using the fewest assumptions should be preferred.",
    "significance": "이론 선택의 핵심 기준으로, 불필요한 복잡성을 피하고 과학적 설명의 효율성과 명확성을 높이는 데 기여한다.",
    "key_researchers": [
      {
        "name_ko": "오컴의 윌리엄",
        "name_en": "William of Ockham",
        "contribution": "오컴의 면도날(Ockham's Razor) 원리를 통해 절약성의 논리적 기초를 제시했다."
      },
      {
        "name_ko": "코니 로이드 모건",
        "name_en": "C. Lloyd Morgan",
        "contribution": "모건의 공준(Morgan's Canon)을 통해 동물 행동 설명에서 절약의 원리를 적용했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이론",
        "name_en": "Theory",
        "id": "FOUND_TH_003"
      },
      {
        "name_ko": "반증가능성",
        "name_en": "Falsifiability",
        "id": "FOUND_FA_018"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절약의 원리 = 오컴의 면도날: 불필요한 가정을 '면도'로 깎아내라",
      "differential": "절약의 원리는 설명의 단순성을 추구하는 것이고, 환원주의는 복잡한 현상을 더 기본적인 수준으로 설명하려는 것이다.",
      "key_point": "절약의 원리가 항상 가장 단순한 설명이 맞다는 의미는 아니며, 동등한 설명력을 가진 이론 중에서 더 간결한 것을 선호한다는 원리이다.",
      "common_mistake": "절약의 원리를 적용하여 지나치게 단순한 설명만을 고집하면, 현상의 복잡성을 간과할 수 있다."
    }
  },
  {
    "id": "FOUND_DT_035",
    "terminology": "결정론 (Determinism)",
    "terminology_ko": "결정론",
    "terminology_en": "Determinism",
    "category": "FOUND",
    "category_name": "과학적 연구의 기초 (Foundations of Scientific Research)",
    "definition": "모든 행동과 정신적 사건에는 원인이 있으며, 동일한 조건에서는 동일한 결과가 발생한다는 과학적 탐구의 기본 가정이다.",
    "definition_en": "A fundamental assumption of scientific inquiry that all behaviors and mental events have causes, and identical conditions lead to identical outcomes.",
    "significance": "심리학이 행동의 원인을 탐구하고 예측할 수 있다는 과학적 낙관주의의 철학적 기반으로, 인과적 연구의 정당성을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "기계론적 결정론을 체계화하여 과학적 예측의 이론적 토대를 마련했다."
      },
      {
        "name_ko": "버러스 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "행동주의에서 환경적 결정론을 강조하여 행동의 원인을 환경 변인에서 찾았다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      },
      {
        "name_ko": "과학적 방법",
        "name_en": "Scientific Method",
        "id": "FOUND_SM_001"
      },
      {
        "name_ko": "실증주의",
        "name_en": "Positivism",
        "id": "FOUND_PS_017"
      }
    ],
    "sub_types": [
      {
        "name": "기계론적 결정론",
        "description": "모든 사건이 선행 원인에 의해 완전히 결정된다는 입장"
      },
      {
        "name": "확률론적 결정론",
        "description": "원인이 결과의 발생 확률을 높이지만 완전히 결정하지는 않는다는 입장"
      },
      {
        "name": "상호 결정론",
        "description": "행동, 개인, 환경이 상호 영향을 미친다는 Bandura의 입장"
      }
    ],
    "quiz_hints": {
      "mnemonic": "결정론 = 모든 행동은 원인에 의해 '결정'된다는 '론(이론)'",
      "differential": "기계론적 결정론은 완전한 인과적 예측을 가정하지만, 현대 심리학은 확률론적 결정론을 채택하여 행동의 확률적 예측을 목표로 한다.",
      "key_point": "심리학에서 결정론은 절대적 예측이 아니라 확률적 예측을 의미하며, 자유의지와의 관계는 철학적 논쟁의 대상이다.",
      "common_mistake": "결정론이 자유의지를 완전히 부정한다고 오해하기 쉬우나, 현대 심리학은 연성 결정론(soft determinism) 입장을 취하는 경우가 많다."
    }
  }
];

TERMS_DATA.DESIGN = [
  {
    "id": "DESIGN_ED_001",
    "terminology": "실험설계 (Experimental Design)",
    "terminology_ko": "실험설계",
    "terminology_en": "Experimental Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "독립변인을 의도적으로 조작하고, 참가자를 무선할당하며, 외생변인을 통제하여 인과관계를 규명하는 연구설계의 가장 엄격한 형태이다.",
    "definition_en": "The most rigorous form of research design that establishes causation through deliberate manipulation of independent variables, random assignment of participants, and control of extraneous variables.",
    "significance": "인과관계 추론이 가능한 유일한 연구설계로, 심리학에서 변인 간 원인-결과 관계를 확립하는 데 핵심적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화와 분산분석을 결합한 현대 실험설계의 이론적·통계적 기초를 확립했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "실험설계의 타당도 체계를 정립하고 준실험설계와의 비교 분석을 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "준실험설계",
        "name_en": "Quasi-experimental Design",
        "id": "DESIGN_QE_002"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      }
    ],
    "sub_types": [
      {
        "name": "피험자간설계",
        "description": "각 참가자가 하나의 실험 조건에만 참여하는 설계"
      },
      {
        "name": "피험자내설계",
        "description": "모든 참가자가 모든 실험 조건에 참여하는 설계"
      },
      {
        "name": "혼합설계",
        "description": "피험자간설계와 피험자내설계를 결합한 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실험설계 3요소: 조(조작)-무(무선할당)-통(통제)",
      "differential": "실험설계는 무선할당이 가능하고 독립변인을 조작하지만, 준실험설계는 무선할당이 불가능하거나 독립변인 조작이 제한된다.",
      "key_point": "실험설계의 3대 요소는 독립변인의 조작, 무선할당, 외생변인의 통제이다.",
      "common_mistake": "실험설계에서 무선할당을 무선표집과 혼동하기 쉬우나, 무선할당은 참가자를 조건에 배치하는 것이고 무선표집은 모집단에서 참가자를 선발하는 것이다."
    }
  },
  {
    "id": "DESIGN_QE_002",
    "terminology": "준실험설계 (Quasi-experimental Design)",
    "terminology_ko": "준실험설계",
    "terminology_en": "Quasi-experimental Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "독립변인의 조작은 가능하지만 참가자를 실험 조건에 무선으로 할당할 수 없는 상황에서 사용되는 연구설계이다.",
    "definition_en": "A research design used when manipulation of the independent variable is possible but random assignment of participants to experimental conditions is not feasible.",
    "significance": "윤리적·실질적 이유로 진실험이 불가능한 현장 연구에서 인과관계에 대한 근사적 추론을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "준실험설계의 개념을 정립하고 다양한 유형을 체계적으로 분류했다."
      },
      {
        "name_ko": "토마스 쿡",
        "name_en": "Thomas Cook",
        "contribution": "Campbell과 함께 준실험설계의 타당도 위협과 대안을 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "비실험설계",
        "name_en": "Non-experimental Design",
        "id": "DESIGN_NE_003"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "선택편향",
        "name_en": "Selection Bias",
        "id": "DESIGN_SB_019"
      }
    ],
    "sub_types": [
      {
        "name": "비동등통제집단설계",
        "description": "무선할당 없이 기존 집단을 실험·통제집단으로 사용하는 설계"
      },
      {
        "name": "시계열설계",
        "description": "처치 전후로 여러 시점에서 반복 측정하는 설계"
      },
      {
        "name": "회귀불연속설계",
        "description": "절단점(cutoff)을 기준으로 처치 집단을 결정하는 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "준실험 = '준(準, 가까운)' 실험, 무선할당만 빠진 거의 실험",
      "differential": "준실험설계는 독립변인을 조작하지만 무선할당이 없고, 비실험설계는 독립변인의 조작도 무선할당도 없다.",
      "key_point": "준실험설계의 가장 큰 약점은 무선할당의 부재로 인한 선택편향(selection bias)이다.",
      "common_mistake": "준실험설계의 결과로 인과관계를 확정적으로 주장할 수 있다고 오해하나, 대안적 설명을 완전히 배제할 수 없다."
    }
  },
  {
    "id": "DESIGN_NE_003",
    "terminology": "비실험설계 (Non-experimental Design)",
    "terminology_ko": "비실험설계",
    "terminology_en": "Non-experimental Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "독립변인의 조작이나 무선할당 없이 변인 간의 관계를 관찰하고 기술하는 연구설계로, 상관연구와 조사연구가 대표적이다.",
    "definition_en": "A research design that observes and describes relationships between variables without manipulation of independent variables or random assignment, with correlational and survey studies as representative examples.",
    "significance": "조작이 불가능하거나 비윤리적인 변인의 연구에 필수적이며, 자연적 상태에서의 변인 간 관계를 파악하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "존 크레스웰",
        "name_en": "John Creswell",
        "contribution": "양적·질적·혼합방법 연구설계의 체계적 분류와 가이드라인을 제시했다."
      },
      {
        "name_ko": "프레드 커링거",
        "name_en": "Fred Kerlinger",
        "contribution": "비실험연구의 방법론적 특성과 한계를 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "DESIGN_CS_028"
      },
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "DESIGN_LS_029"
      },
      {
        "name_ko": "상관관계",
        "name_en": "Correlation",
        "id": "FOUND_CR_016"
      }
    ],
    "sub_types": [
      {
        "name": "상관연구",
        "description": "두 변인 간의 관계 방향과 강도를 측정하는 연구"
      },
      {
        "name": "조사연구",
        "description": "설문이나 면접을 통해 집단의 특성을 파악하는 연구"
      },
      {
        "name": "관찰연구",
        "description": "자연적 상황에서 행동을 체계적으로 관찰하는 연구"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비실험 = '비(非, 아닌)' 실험, 조작도 무선할당도 없는 관찰 중심 연구",
      "differential": "비실험설계는 조작과 무선할당이 없어 인과관계를 주장할 수 없고, 실험설계는 둘 다 포함하여 인과관계 추론이 가능하다.",
      "key_point": "비실험설계는 인과관계를 주장할 수 없지만, 변인 간 관계의 존재와 강도를 파악하는 데 매우 유용하다.",
      "common_mistake": "비실험설계가 실험설계보다 열등하다고 오해하기 쉬우나, 연구 목적에 따라 가장 적합한 설계가 다르다."
    }
  },
  {
    "id": "DESIGN_RA_004",
    "terminology": "무선할당 (Random Assignment)",
    "terminology_ko": "무선할당",
    "terminology_en": "Random Assignment",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 참가자를 실험 조건이나 집단에 무작위로 배치하는 절차로, 집단 간 사전 차이를 최소화하여 내적 타당도를 확보하는 핵심 방법이다.",
    "definition_en": "A procedure of randomly placing research participants into experimental conditions or groups, a key method for securing internal validity by minimizing pre-existing differences between groups.",
    "significance": "혼입변인의 체계적 영향을 제거하여 독립변인의 순수한 효과를 추정할 수 있게 하는 실험설계의 가장 강력한 통제 수단이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화 원리를 실험설계의 핵심으로 도입하여 현대 실험방법론의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "혼입변인",
        "name_en": "Confounding Variable",
        "id": "FOUND_CF_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무선할당 = '무선(랜덤)'으로 '할당(배치)'하여 집단 동등화",
      "differential": "무선할당은 참가자를 조건에 배치하는 것(내적 타당도)이고, 무선표집은 모집단에서 참가자를 선발하는 것(외적 타당도)이다.",
      "key_point": "무선할당의 핵심 기능은 알려진·알려지지 않은 모든 혼입변인을 집단 간에 균등하게 분배하는 것이다.",
      "common_mistake": "무선할당과 무선표집을 같은 개념으로 혼동하는 것이 가장 흔한 실수이다. 둘은 목적과 절차가 완전히 다르다."
    }
  },
  {
    "id": "DESIGN_CG_005",
    "terminology": "통제집단 (Control Group)",
    "terminology_ko": "통제집단",
    "terminology_en": "Control Group",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "실험에서 독립변인의 처치를 받지 않거나 기준 조건에 노출되는 집단으로, 실험집단과의 비교를 통해 처치 효과를 평가하는 기준이 된다.",
    "definition_en": "A group in an experiment that does not receive the treatment or is exposed to the baseline condition, serving as the standard for evaluating treatment effects through comparison with the experimental group.",
    "significance": "처치 효과를 시간 경과, 성숙, 역사 효과 등 대안적 설명과 분리하여 평가할 수 있게 하는 실험 통제의 핵심 장치이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "통제집단 설정과 무선할당의 결합을 실험설계의 표준으로 확립했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "통제집단의 역할과 다양한 유형을 내적 타당도 관점에서 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험집단",
        "name_en": "Experimental Group",
        "id": "DESIGN_EG_006"
      },
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "DESIGN_PE_022"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "대조군",
        "name_en": "Comparison Group",
        "id": "DESIGN_CM_021"
      }
    ],
    "sub_types": [
      {
        "name": "무처치 통제집단",
        "description": "어떤 처치도 받지 않는 집단"
      },
      {
        "name": "위약 통제집단",
        "description": "실제 효과 없는 가짜 처치를 받는 집단"
      },
      {
        "name": "대기자 통제집단",
        "description": "실험 후 처치를 받는 조건으로, 윤리적 배려를 겸한 통제집단"
      }
    ],
    "quiz_hints": {
      "mnemonic": "통제집단 = 처치를 받지 않고 '통제(비교 기준)'가 되는 집단",
      "differential": "통제집단은 처치를 받지 않는 비교 기준 집단이고, 실험집단은 처치를 받는 관심 대상 집단이다.",
      "key_point": "통제집단이 없으면 관찰된 변화가 처치 때문인지 다른 요인 때문인지 구분할 수 없다.",
      "common_mistake": "통제집단이 반드시 '아무것도 하지 않는' 집단이라고 오해하나, 위약 통제나 활성 통제(active control) 등 다양한 형태가 있다."
    }
  },
  {
    "id": "DESIGN_EG_006",
    "terminology": "실험집단 (Experimental Group)",
    "terminology_ko": "실험집단",
    "terminology_en": "Experimental Group",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "실험에서 연구자가 관심을 가진 독립변인의 처치나 조작을 받는 집단으로, 통제집단과의 비교를 통해 처치 효과를 평가한다.",
    "definition_en": "A group in an experiment that receives the treatment or manipulation of the independent variable of interest, with treatment effects evaluated through comparison with the control group.",
    "significance": "독립변인의 효과를 직접 관찰하는 대상으로, 실험 연구의 핵심 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "실험집단과 통제집단의 비교를 통한 효과 평가 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실험집단 = '실험' 처치를 받는 '집단'",
      "differential": "실험집단은 처치를 받고, 통제집단은 받지 않는다. 처치의 유무가 두 집단을 구분하는 핵심이다.",
      "key_point": "하나의 실험에서 여러 수준의 처치를 비교하기 위해 여러 실험집단을 둘 수 있다.",
      "common_mistake": "실험집단이 반드시 하나여야 한다고 오해하나, 독립변인의 여러 수준에 따라 복수의 실험집단이 가능하다."
    }
  },
  {
    "id": "DESIGN_WS_007",
    "terminology": "피험자내설계 (Within-subjects Design)",
    "terminology_ko": "피험자내설계",
    "terminology_en": "Within-subjects Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "동일한 참가자가 모든 실험 조건에 참여하는 설계로, 개인차 변량을 제거하여 처치 효과의 민감한 탐지가 가능하다.",
    "definition_en": "A design in which the same participants participate in all experimental conditions, enabling sensitive detection of treatment effects by removing individual difference variance.",
    "significance": "개인차에 의한 오차 변량을 제거하여 통계적 검정력을 높이고, 적은 참가자로도 효과를 탐지할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "반복측정 설계의 통계적 분석 방법(반복측정 ANOVA)의 기초를 마련했다."
      },
      {
        "name_ko": "빌 그린하우스",
        "name_en": "Bill Greenhouse",
        "contribution": "Greenhouse-Geisser 교정을 통해 반복측정 설계의 구형성 위반 문제를 해결했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피험자간설계",
        "name_en": "Between-subjects Design",
        "id": "DESIGN_BS_008"
      },
      {
        "name_ko": "이월효과",
        "name_en": "Carryover Effect",
        "id": "DESIGN_CE_014"
      },
      {
        "name_ko": "역균형화",
        "name_en": "Counterbalancing",
        "id": "DESIGN_CB_013"
      },
      {
        "name_ko": "순서효과",
        "name_en": "Order Effect",
        "id": "DESIGN_OE_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피험자'내' = 한 사람 '안에서' 모든 조건을 비교",
      "differential": "피험자내설계는 같은 사람이 모든 조건에 참여하고, 피험자간설계는 다른 사람들이 각 조건에 참여한다.",
      "key_point": "피험자내설계의 가장 큰 장점은 개인차 제거, 가장 큰 단점은 순서효과와 이월효과이다.",
      "common_mistake": "피험자내설계가 항상 피험자간설계보다 우월하다고 오해하나, 순서효과와 이월효과가 심각한 경우 부적절할 수 있다."
    }
  },
  {
    "id": "DESIGN_BS_008",
    "terminology": "피험자간설계 (Between-subjects Design)",
    "terminology_ko": "피험자간설계",
    "terminology_en": "Between-subjects Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "각 참가자가 하나의 실험 조건에만 참여하는 설계로, 서로 다른 참가자 집단 간의 비교를 통해 처치 효과를 평가한다.",
    "definition_en": "A design in which each participant participates in only one experimental condition, evaluating treatment effects through comparison between different groups of participants.",
    "significance": "순서효과와 이월효과의 위험이 없고, 조건 간 독립성이 보장되어 많은 실험 상황에서 기본 설계로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "독립표본 비교를 위한 통계적 검정 방법(독립표본 t검정, ANOVA)을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "혼합설계",
        "name_en": "Mixed Design",
        "id": "DESIGN_MD_009"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "독립표본t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피험자'간' = 다른 사람들 '사이에서' 조건을 비교",
      "differential": "피험자간설계는 조건 간 독립성은 높지만 개인차 변량이 오차에 포함되고, 피험자내설계는 개인차를 제거하지만 순서효과 위험이 있다.",
      "key_point": "피험자간설계는 더 많은 참가자가 필요하며, 무선할당을 통해 집단 간 동등성을 확보해야 한다.",
      "common_mistake": "피험자간설계에서 집단 간 사전 차이가 없다고 가정하기 쉬우나, 무선할당으로도 소규모 표본에서는 우연적 차이가 발생할 수 있다."
    }
  },
  {
    "id": "DESIGN_MD_009",
    "terminology": "혼합설계 (Mixed Design)",
    "terminology_ko": "혼합설계",
    "terminology_en": "Mixed Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "피험자간 변인과 피험자내 변인을 동시에 포함하는 설계로, 두 설계의 장점을 결합하여 복합적 연구 문제를 탐구할 수 있다.",
    "definition_en": "A design that simultaneously includes between-subjects and within-subjects variables, combining the advantages of both designs to explore complex research questions.",
    "significance": "실제 심리학 연구에서 매우 빈번하게 사용되며, 집단 차이와 시간 변화를 동시에 분석할 수 있는 유연한 설계이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "분할구획법(split-plot design) 원리를 통해 혼합설계의 통계적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피험자간설계",
        "name_en": "Between-subjects Design",
        "id": "DESIGN_BS_008"
      },
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "요인설계",
        "name_en": "Factorial Design",
        "id": "DESIGN_FD_010"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-way ANOVA",
        "id": "ANOVA_TW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "혼합설계 = 피험자'간'과 피험자'내'를 '혼합'한 설계",
      "differential": "혼합설계는 피험자간과 피험자내 변인을 모두 포함하고, 요인설계는 두 개 이상의 독립변인을 포함하는 설계의 총칭이다.",
      "key_point": "혼합설계의 분석에는 혼합 ANOVA(mixed ANOVA)가 사용되며, 구형성 가정 충족 여부를 확인해야 한다.",
      "common_mistake": "혼합설계를 혼합방법(mixed methods)연구와 혼동하기 쉬우나, 전자는 양적 실험설계이고 후자는 양적·질적 방법의 결합이다."
    }
  },
  {
    "id": "DESIGN_FD_010",
    "terminology": "요인설계 (Factorial Design)",
    "terminology_ko": "요인설계",
    "terminology_en": "Factorial Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "두 개 이상의 독립변인을 동시에 조작하여 각 변인의 주효과와 변인 간 상호작용 효과를 분석하는 실험설계이다.",
    "definition_en": "An experimental design that simultaneously manipulates two or more independent variables to analyze both the main effects of each variable and the interaction effects between variables.",
    "significance": "단일 변인 연구의 한계를 극복하고, 변인 간 상호작용을 통해 현상의 복잡한 역동을 이해할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "요인설계와 분산분석의 통계적 기초를 확립하여 다변인 실험의 분석을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "DESIGN_IE_031"
      },
      {
        "name_ko": "주효과",
        "name_en": "Main Effect",
        "id": "DESIGN_ME_032"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-way ANOVA",
        "id": "ANOVA_TW_002"
      },
      {
        "name_ko": "혼합설계",
        "name_en": "Mixed Design",
        "id": "DESIGN_MD_009"
      }
    ],
    "sub_types": [
      {
        "name": "2×2 요인설계",
        "description": "두 독립변인 각각 2수준으로 구성된 가장 기본적인 요인설계"
      },
      {
        "name": "2×3 요인설계",
        "description": "하나는 2수준, 다른 하나는 3수준인 요인설계"
      },
      {
        "name": "고차 요인설계",
        "description": "3개 이상의 독립변인을 포함하는 요인설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "요인설계 = 여러 '요인(독립변인)'을 동시에 '설계'에 포함",
      "differential": "요인설계는 여러 독립변인의 동시 효과를 분석하고, 단일변인설계는 하나의 독립변인만 조작한다.",
      "key_point": "요인설계의 가장 큰 장점은 주효과와 함께 상호작용 효과를 분석할 수 있다는 것이다. 2×3은 '2 by 3'으로 읽는다.",
      "common_mistake": "요인설계에서 주효과가 유의하면 상호작용 효과를 무시하기 쉬우나, 상호작용이 유의하면 주효과 해석에 주의가 필요하다."
    }
  },
  {
    "id": "DESIGN_IV_011",
    "terminology": "내적타당도 (Internal Validity)",
    "terminology_ko": "내적타당도",
    "terminology_en": "Internal Validity",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "독립변인의 조작이 종속변인의 변화를 초래했다고 결론지을 수 있는 정도, 즉 인과적 추론의 정확성을 나타내는 연구설계의 질적 기준이다.",
    "definition_en": "The degree to which one can conclude that manipulation of the independent variable caused changes in the dependent variable, a quality criterion of research design indicating the accuracy of causal inference.",
    "significance": "실험연구의 가장 핵심적 타당도로, 내적 타당도가 확보되지 않으면 어떤 인과적 결론도 의미가 없다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "내적 타당도 개념을 정립하고 이를 위협하는 8가지 요인을 체계적으로 분류했다."
      },
      {
        "name_ko": "토마스 쿡",
        "name_en": "Thomas Cook",
        "contribution": "Campbell과 함께 내적 타당도 위협요인의 분류를 확장하고 대안을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외적타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "혼입변인",
        "name_en": "Confounding Variable",
        "id": "FOUND_CF_030"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내적타당도 = '내적(인과관계 내부)' 추론이 '타당'한 정도",
      "differential": "내적타당도는 '인과관계를 확신할 수 있는가'이고, 외적타당도는 '결과를 일반화할 수 있는가'이다.",
      "key_point": "내적타당도 위협요인: 역사, 성숙, 검사, 도구, 통계적 회귀, 선택, 탈락, 선택-성숙 상호작용.",
      "common_mistake": "내적타당도와 외적타당도를 동시에 최대화할 수 있다고 오해하나, 둘은 종종 상충 관계(trade-off)에 있다."
    }
  },
  {
    "id": "DESIGN_EV_012",
    "terminology": "외적타당도 (External Validity)",
    "terminology_ko": "외적타당도",
    "terminology_en": "External Validity",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 결과를 다른 사람, 장소, 시간, 상황으로 일반화할 수 있는 정도를 나타내는 연구의 질적 기준이다.",
    "definition_en": "A quality criterion of research indicating the extent to which findings can be generalized to other people, places, times, and situations.",
    "significance": "연구 결과의 실용적 가치와 적용 범위를 결정하며, 실험실 연구의 현실 세계 적용 가능성을 평가하는 핵심 기준이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "외적 타당도의 개념과 유형을 체계적으로 분류하고 내적 타당도와의 관계를 분석했다."
      },
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "실험자 효과 연구를 통해 외적 타당도 위협 요인의 이해를 확장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      },
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      },
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      }
    ],
    "sub_types": [
      {
        "name": "모집단 타당도",
        "description": "연구 결과가 더 넓은 모집단에 일반화될 수 있는 정도"
      },
      {
        "name": "생태학적 타당도",
        "description": "연구 결과가 실제 생활 환경에 일반화될 수 있는 정도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "외적타당도 = '외적(외부 세계)'으로 '일반화'할 수 있는 정도",
      "differential": "외적타당도는 결과의 일반화 가능성이고, 내적타당도는 인과 추론의 정확성이다.",
      "key_point": "외적타당도를 높이려면 대표적 표본, 다양한 상황에서의 반복검증, 현실적 실험 조건이 필요하다.",
      "common_mistake": "대학생 표본으로 얻은 결과를 전체 인구에 일반화할 수 있다고 오해하기 쉽다."
    }
  },
  {
    "id": "DESIGN_CB_013",
    "terminology": "역균형화 (Counterbalancing)",
    "terminology_ko": "역균형화",
    "terminology_en": "Counterbalancing",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "피험자내설계에서 실험 조건의 제시 순서를 참가자마다 다르게 배열하여 순서효과와 이월효과를 통제하는 방법이다.",
    "definition_en": "A method in within-subjects designs that controls for order and carryover effects by varying the sequence of experimental conditions across participants.",
    "significance": "피험자내설계의 가장 큰 약점인 순서효과를 체계적으로 통제하여, 처치 효과의 순수한 추정을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "베리 위너",
        "name_en": "B. J. Winer",
        "contribution": "역균형화 설계의 통계적 분석 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "순서효과",
        "name_en": "Order Effect",
        "id": "DESIGN_OE_015"
      },
      {
        "name_ko": "이월효과",
        "name_en": "Carryover Effect",
        "id": "DESIGN_CE_014"
      },
      {
        "name_ko": "연습효과",
        "name_en": "Practice Effect",
        "id": "DESIGN_PR_016"
      }
    ],
    "sub_types": [
      {
        "name": "완전역균형화",
        "description": "모든 가능한 순서 조합을 사용하는 방법 (n! 가지)"
      },
      {
        "name": "라틴스퀘어",
        "description": "각 조건이 각 순서 위치에 동일한 횟수로 배치되는 효율적 방법"
      },
      {
        "name": "ABBA 역균형화",
        "description": "두 조건을 A-B-B-A 순서로 배열하는 간단한 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "역균형화 = 순서를 '역(바꾸어)' '균형(균등하게)' 맞추기",
      "differential": "역균형화는 순서를 체계적으로 변경하는 것이고, 무선화는 순서를 무작위로 배정하는 것이다.",
      "key_point": "완전역균형화는 조건 수가 많으면 비현실적(n! 조합)이므로, 라틴스퀘어가 실용적 대안이다.",
      "common_mistake": "역균형화가 이월효과를 '제거'한다고 오해하나, 실제로는 효과를 '균등하게 분배'하여 상쇄시키는 것이다."
    }
  },
  {
    "id": "DESIGN_CE_014",
    "terminology": "이월효과 (Carryover Effect)",
    "terminology_ko": "이월효과",
    "terminology_en": "Carryover Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "피험자내설계에서 앞선 실험 조건의 경험이 이후 조건의 수행에 영향을 미치는 현상으로, 조건 간 독립성을 위협한다.",
    "definition_en": "A phenomenon in within-subjects designs where the experience of an earlier experimental condition affects performance in subsequent conditions, threatening independence between conditions.",
    "significance": "피험자내설계의 주요 약점으로, 처치 효과와 이월효과를 구분하지 못하면 잘못된 결론에 도달할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "베리 위너",
        "name_en": "B. J. Winer",
        "contribution": "이월효과의 통계적 탐지와 통제 방법을 반복측정 설계 내에서 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "순서효과",
        "name_en": "Order Effect",
        "id": "DESIGN_OE_015"
      },
      {
        "name_ko": "역균형화",
        "name_en": "Counterbalancing",
        "id": "DESIGN_CB_013"
      },
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "연습효과",
        "name_en": "Practice Effect",
        "id": "DESIGN_PR_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이월효과 = 앞 조건의 영향이 다음 조건으로 '이월(넘어감)'",
      "differential": "이월효과는 특정 조건의 경험이 다음 조건에 미치는 특수한 영향이고, 순서효과는 조건의 위치(몇 번째) 자체에 의한 일반적 영향이다.",
      "key_point": "이월효과가 비대칭적(A→B 영향 ≠ B→A 영향)이면 역균형화로도 완전히 통제할 수 없다.",
      "common_mistake": "이월효과와 순서효과를 같은 개념으로 혼동하기 쉬우나, 이월효과는 조건 특이적이고 순서효과는 위치 효과이다."
    }
  },
  {
    "id": "DESIGN_OE_015",
    "terminology": "순서효과 (Order Effect)",
    "terminology_ko": "순서효과",
    "terminology_en": "Order Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "피험자내설계에서 실험 조건이 제시되는 순서 자체가 참가자의 수행에 영향을 미치는 현상으로, 연습, 피로, 지루함 등에 의해 발생한다.",
    "definition_en": "A phenomenon in within-subjects designs where the order in which experimental conditions are presented affects participant performance, caused by practice, fatigue, boredom, and similar factors.",
    "significance": "피험자내설계의 타당도를 위협하는 주요 요인으로, 역균형화를 통해 통제해야 한다.",
    "key_researchers": [
      {
        "name_ko": "허먼 에빙하우스",
        "name_en": "Hermann Ebbinghaus",
        "contribution": "기억 실험에서 순서효과를 처음 체계적으로 관찰하고 통제 방법을 적용했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이월효과",
        "name_en": "Carryover Effect",
        "id": "DESIGN_CE_014"
      },
      {
        "name_ko": "역균형화",
        "name_en": "Counterbalancing",
        "id": "DESIGN_CB_013"
      },
      {
        "name_ko": "연습효과",
        "name_en": "Practice Effect",
        "id": "DESIGN_PR_016"
      },
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      }
    ],
    "sub_types": [
      {
        "name": "연습효과",
        "description": "반복 수행으로 인해 이후 조건에서 수행이 향상되는 효과"
      },
      {
        "name": "피로효과",
        "description": "과제 수행이 계속되면서 수행이 저하되는 효과"
      },
      {
        "name": "민감화 효과",
        "description": "반복 노출로 인해 자극에 대한 민감성이 변화하는 효과"
      }
    ],
    "quiz_hints": {
      "mnemonic": "순서효과 = '순서(몇 번째냐)'에 따라 수행이 달라지는 '효과'",
      "differential": "순서효과는 조건의 위치(1번째, 2번째)에 의한 일반적 영향이고, 이월효과는 앞 조건의 특수한 내용이 다음 조건에 미치는 영향이다.",
      "key_point": "순서효과는 역균형화로 통제할 수 있지만, 이월효과가 비대칭적이면 역균형화만으로 불충분하다.",
      "common_mistake": "순서효과가 항상 부정적이라고 오해하나, 연습에 의한 수행 향상도 순서효과의 일종이다."
    }
  },
  {
    "id": "DESIGN_PR_016",
    "terminology": "연습효과 (Practice Effect)",
    "terminology_ko": "연습효과",
    "terminology_en": "Practice Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "동일하거나 유사한 과제를 반복 수행함으로써 수행이 향상되는 현상으로, 피험자내설계에서 처치 효과를 오염시킬 수 있다.",
    "definition_en": "A phenomenon where performance improves through repeated execution of identical or similar tasks, which can contaminate treatment effects in within-subjects designs.",
    "significance": "사전-사후 검사 설계와 피험자내설계에서 처치 효과와 혼입될 수 있어, 연구 결론의 타당성에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "허먼 에빙하우스",
        "name_en": "Hermann Ebbinghaus",
        "contribution": "기억 연구에서 반복 학습에 의한 수행 변화를 체계적으로 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "순서효과",
        "name_en": "Order Effect",
        "id": "DESIGN_OE_015"
      },
      {
        "name_ko": "역균형화",
        "name_en": "Counterbalancing",
        "id": "DESIGN_CB_013"
      },
      {
        "name_ko": "피험자내설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "사전-사후검사설계",
        "name_en": "Pretest-Posttest Design",
        "id": "DESIGN_PP_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "연습효과 = '연습'하면 나아지는 '효과'가 처치 효과와 혼입",
      "differential": "연습효과는 과제 수행 경험에 의한 향상이고, 성숙효과는 시간 경과에 따른 자연적 발달이다.",
      "key_point": "연습효과를 통제하기 위해 역균형화, 충분한 연습 시행, 동형검사 사용 등의 방법이 활용된다.",
      "common_mistake": "연습효과를 항상 수행의 '향상'으로만 오해하나, 지루함이나 피로에 의한 수행 저하도 반복 수행의 결과일 수 있다."
    }
  },
  {
    "id": "DESIGN_MT_017",
    "terminology": "성숙효과 (Maturation Effect)",
    "terminology_ko": "성숙효과",
    "terminology_en": "Maturation Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 기간 동안 참가자 내부에서 자연적으로 발생하는 생물학적·심리학적 변화로, 처치와 무관하게 종속변인에 영향을 미칠 수 있는 내적 타당도 위협요인이다.",
    "definition_en": "Naturally occurring biological and psychological changes within participants during the research period that can affect the dependent variable independent of treatment, threatening internal validity.",
    "significance": "발달 연구와 장기 종단연구에서 특히 중요한 위협요인으로, 처치 효과와 자연적 변화를 구분하지 못하면 잘못된 결론에 도달한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "성숙효과를 내적 타당도 위협요인의 하나로 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "역사효과",
        "name_en": "History Effect",
        "id": "DESIGN_HE_018"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      },
      {
        "name_ko": "사전-사후검사설계",
        "name_en": "Pretest-Posttest Design",
        "id": "DESIGN_PP_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성숙효과 = 시간이 지나며 자연히 '성숙(성장)'하여 나타나는 변화",
      "differential": "성숙효과는 참가자 '내부'의 자연적 변화이고, 역사효과는 '외부' 사건에 의한 변화이다.",
      "key_point": "통제집단을 사용하면 성숙효과를 통제할 수 있는데, 두 집단 모두 동일하게 성숙하므로 차이는 처치 효과로 해석할 수 있다.",
      "common_mistake": "성숙효과가 아동 연구에서만 문제가 된다고 오해하나, 성인 대상 연구에서도 피로, 배고픔, 기분 변화 등의 단기 성숙이 영향을 미칠 수 있다."
    }
  },
  {
    "id": "DESIGN_HE_018",
    "terminology": "역사효과 (History Effect)",
    "terminology_ko": "역사효과",
    "terminology_en": "History Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 기간 중 처치 이외의 외부 사건이 종속변인에 영향을 미치는 현상으로, 내적 타당도를 위협하는 주요 요인이다.",
    "definition_en": "A phenomenon where external events other than the treatment affect the dependent variable during the research period, a major threat to internal validity.",
    "significance": "현장 연구와 장기 연구에서 특히 중요한 위협요인으로, 처치 효과와 외부 사건의 효과를 구분하지 못하게 한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "역사효과를 내적 타당도 위협요인으로 명명하고 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "성숙효과",
        "name_en": "Maturation Effect",
        "id": "DESIGN_MT_017"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역사효과 = 연구 중 '역사적(외부)' 사건이 결과에 영향",
      "differential": "역사효과는 '외부 사건'에 의한 영향이고, 성숙효과는 참가자 '내부'의 자연적 변화에 의한 영향이다.",
      "key_point": "통제집단이 있으면 두 집단이 동일한 외부 사건을 경험하므로 역사효과를 통제할 수 있다.",
      "common_mistake": "역사효과를 과거 역사적 사건의 영향으로 오해하기 쉬우나, '연구 기간 중' 발생한 외부 사건을 의미한다."
    }
  },
  {
    "id": "DESIGN_SB_019",
    "terminology": "선택편향 (Selection Bias)",
    "terminology_ko": "선택편향",
    "terminology_en": "Selection Bias",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "실험집단과 통제집단의 참가자가 체계적으로 다른 특성을 가질 때 발생하는 편향으로, 집단 간 차이가 처치가 아닌 사전 차이 때문일 수 있다.",
    "definition_en": "A bias occurring when participants in experimental and control groups systematically differ in characteristics, where group differences may be due to pre-existing differences rather than treatment.",
    "significance": "준실험설계에서 가장 심각한 내적 타당도 위협요인으로, 무선할당의 부재가 주요 원인이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "선택편향을 내적 타당도 위협요인으로 분류하고 통제 방법을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "준실험설계",
        "name_en": "Quasi-experimental Design",
        "id": "DESIGN_QE_002"
      },
      {
        "name_ko": "혼입변인",
        "name_en": "Confounding Variable",
        "id": "FOUND_CF_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "선택편향 = 참가자 '선택' 과정에서 생기는 집단 간 '편향'",
      "differential": "선택편향은 집단 간 사전 차이에 의한 위협이고, 탈락(mortality)은 연구 진행 중 참가자 이탈에 의한 위협이다.",
      "key_point": "선택편향을 통제하는 가장 효과적인 방법은 무선할당이며, 불가능한 경우 짝짓기나 통계적 통제를 사용한다.",
      "common_mistake": "대규모 표본이면 선택편향이 자동으로 해결된다고 오해하나, 무선할당 없이는 표본 크기와 관계없이 체계적 차이가 존재할 수 있다."
    }
  },
  {
    "id": "DESIGN_SR_020",
    "terminology": "통계적 회귀 (Statistical Regression)",
    "terminology_ko": "통계적 회귀",
    "terminology_en": "Statistical Regression",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "극단적인 점수를 보인 참가자가 재검사 시 평균 방향으로 회귀하는 통계적 현상으로, 처치 효과를 과대 또는 과소 추정하게 할 수 있다.",
    "definition_en": "A statistical phenomenon where participants with extreme scores tend to regress toward the mean upon retesting, potentially leading to overestimation or underestimation of treatment effects.",
    "significance": "극단 집단을 대상으로 한 연구에서 특히 문제가 되며, 처치 효과와 자연적 회귀를 구분하지 못하면 허위 결론에 도달한다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "평균으로의 회귀(regression toward the mean) 현상을 처음 발견하고 명명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통계적 회귀 = 극단 점수가 '회(돌아)' '귀(가는)' 평균으로의 자연적 이동",
      "differential": "통계적 회귀는 극단 점수의 자연적 평균 회귀이고, 성숙효과는 시간 경과에 따른 참가자 내부의 변화이다.",
      "key_point": "극단 점수로 선발된 집단(예: 가장 우울한 환자들)을 대상으로 할 때 특히 주의해야 한다.",
      "common_mistake": "통계적 회귀를 처치 효과로 오해하는 것이 가장 흔한 실수이다. 통제집단 없이 극단 집단에 처치 후 호전되면 회귀 효과일 수 있다."
    }
  },
  {
    "id": "DESIGN_CM_021",
    "terminology": "대조군 (Comparison Group)",
    "terminology_ko": "대조군",
    "terminology_en": "Comparison Group",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "실험에서 처치의 효과를 비교하기 위한 기준이 되는 집단으로, 무선할당 여부에 따라 통제집단과 구분되기도 한다.",
    "definition_en": "A group serving as the standard for comparing treatment effects in an experiment, sometimes distinguished from a control group based on whether random assignment was used.",
    "significance": "준실험설계에서 무선할당이 불가능할 때 비교 기준을 제공하여, 제한적이나마 처치 효과의 평가를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "준실험설계에서 비동등 대조군의 개념과 활용 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      },
      {
        "name_ko": "준실험설계",
        "name_en": "Quasi-experimental Design",
        "id": "DESIGN_QE_002"
      },
      {
        "name_ko": "선택편향",
        "name_en": "Selection Bias",
        "id": "DESIGN_SB_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대조군 = '대조(비교)'를 위한 '군(집단)'",
      "differential": "통제집단은 무선할당에 의해 구성된 비교 집단이고, 대조군은 무선할당 없이 비교 목적으로 사용되는 집단을 포함하는 더 넓은 개념이다.",
      "key_point": "준실험설계에서 비동등 대조군(nonequivalent comparison group)은 사전 차이의 가능성을 항상 고려해야 한다.",
      "common_mistake": "대조군과 통제집단을 완전히 같은 개념으로 사용하기 쉬우나, 엄밀히 구분하면 무선할당 여부에 차이가 있다."
    }
  },
  {
    "id": "DESIGN_PE_022",
    "terminology": "위약효과 (Placebo Effect)",
    "terminology_ko": "위약효과",
    "terminology_en": "Placebo Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "효과가 없는 가짜 처치를 받은 참가자가 처치를 받았다는 기대나 믿음만으로 실제 변화를 경험하는 현상이다.",
    "definition_en": "A phenomenon where participants who receive an inactive sham treatment experience actual changes solely due to their expectation or belief that they have received treatment.",
    "significance": "처치의 실제 효과와 기대 효과를 분리하기 위해 위약 통제집단이 필요한 근거가 되며, 심리치료 연구에서 특히 중요하다.",
    "key_researchers": [
      {
        "name_ko": "헨리 비처",
        "name_en": "Henry Beecher",
        "contribution": "1955년 'The Powerful Placebo' 논문에서 위약효과의 체계적 증거를 제시했다."
      },
      {
        "name_ko": "어빙 커쉬",
        "name_en": "Irving Kirsch",
        "contribution": "항우울제 연구에서 위약효과의 크기와 메커니즘을 분석하여 큰 논쟁을 촉발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이중맹검",
        "name_en": "Double-blind",
        "id": "DESIGN_DB_023"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      },
      {
        "name_ko": "요구특성",
        "name_en": "Demand Characteristics",
        "id": "DESIGN_DC_033"
      },
      {
        "name_ko": "단일맹검",
        "name_en": "Single-blind",
        "id": "DESIGN_SG_024"
      }
    ],
    "sub_types": [
      {
        "name": "노시보 효과",
        "description": "부정적 기대가 실제 부작용을 유발하는 위약효과의 역방향 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "위약효과 = '위(가짜)' '약(약)'이지만 '효과'가 나타나는 현상",
      "differential": "위약효과는 참가자의 '기대'에 의한 변화이고, 호손효과는 '관찰받고 있다'는 인식에 의한 변화이다.",
      "key_point": "위약효과를 통제하려면 위약 통제집단을 두고, 참가자가 자신이 어느 집단인지 모르게 해야 한다(맹검).",
      "common_mistake": "위약효과가 '진짜가 아닌' 효과라고 생각하기 쉬우나, 신경과학 연구에 따르면 실제 생리적 변화를 수반한다."
    }
  },
  {
    "id": "DESIGN_DB_023",
    "terminology": "이중맹검 (Double-blind)",
    "terminology_ko": "이중맹검",
    "terminology_en": "Double-blind",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 참가자와 연구자(실험자) 모두 각 참가자가 어떤 실험 조건에 속하는지 모르는 상태로 실험을 수행하는 절차이다.",
    "definition_en": "A procedure in which both participants and researchers are unaware of which experimental condition each participant is assigned to during the experiment.",
    "significance": "참가자의 기대 효과와 실험자 편향을 동시에 통제하여, 처치의 순수한 효과를 평가할 수 있게 하는 가장 엄격한 맹검 절차이다.",
    "key_researchers": [
      {
        "name_ko": "오스틴 힐",
        "name_en": "Austin Bradford Hill",
        "contribution": "임상시험에서 이중맹검 절차를 체계적으로 도입하고 확산시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단일맹검",
        "name_en": "Single-blind",
        "id": "DESIGN_SG_024"
      },
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "DESIGN_PE_022"
      },
      {
        "name_ko": "실험자 편향",
        "name_en": "Experimenter Bias",
        "id": "DESIGN_EB_034"
      },
      {
        "name_ko": "요구특성",
        "name_en": "Demand Characteristics",
        "id": "DESIGN_DC_033"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이중맹검 = '이중(참가자+연구자)' 모두 '맹(모르는)' 상태로 '검(검사)'",
      "differential": "이중맹검은 참가자와 연구자 모두 조건을 모르고, 단일맹검은 참가자만 모른다.",
      "key_point": "심리치료 연구에서는 완전한 이중맹검이 어려운 경우가 많아(치료자가 치료법을 알아야 하므로), 평가자 맹검 등의 대안을 사용한다.",
      "common_mistake": "이중맹검이 모든 연구에서 가능하다고 오해하나, 수술이나 심리치료처럼 처치의 성격상 맹검이 불가능한 경우가 있다."
    }
  },
  {
    "id": "DESIGN_SG_024",
    "terminology": "단일맹검 (Single-blind)",
    "terminology_ko": "단일맹검",
    "terminology_en": "Single-blind",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구 참가자만 자신이 어떤 실험 조건에 속하는지 모르는 상태로 실험을 수행하는 절차로, 참가자의 기대 효과를 통제한다.",
    "definition_en": "A procedure in which only participants are unaware of which experimental condition they are assigned to, controlling for participant expectancy effects.",
    "significance": "이중맹검이 불가능한 상황에서 참가자의 기대 편향을 최소화하는 대안적 방법이다.",
    "key_researchers": [
      {
        "name_ko": "오스틴 힐",
        "name_en": "Austin Bradford Hill",
        "contribution": "임상시험에서 맹검 절차의 중요성을 확립하고 적용 기준을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이중맹검",
        "name_en": "Double-blind",
        "id": "DESIGN_DB_023"
      },
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "DESIGN_PE_022"
      },
      {
        "name_ko": "요구특성",
        "name_en": "Demand Characteristics",
        "id": "DESIGN_DC_033"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단일맹검 = '단일(참가자만)' '맹(모르는)' 상태로 실험",
      "differential": "단일맹검은 참가자만 조건을 모르고, 이중맹검은 참가자와 연구자 모두 모른다.",
      "key_point": "단일맹검은 참가자의 기대 효과는 통제하지만 실험자 편향은 통제하지 못한다.",
      "common_mistake": "단일맹검과 이중맹검의 차이를 간과하여 단일맹검으로 충분하다고 판단하기 쉬우나, 실험자 편향의 영향도 상당히 크다."
    }
  },
  {
    "id": "DESIGN_SL_025",
    "terminology": "솔로몬4집단설계 (Solomon Four-Group Design)",
    "terminology_ko": "솔로몬4집단설계",
    "terminology_en": "Solomon Four-Group Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "사전검사가 있는 실험·통제집단과 사전검사가 없는 실험·통제집단 총 4개 집단을 사용하여 검사효과와 처치효과를 분리하는 설계이다.",
    "definition_en": "A design using four groups—experimental and control groups with pretests, and experimental and control groups without pretests—to separate testing effects from treatment effects.",
    "significance": "사전검사의 민감화 효과를 통제할 수 있는 가장 완전한 실험설계로, 내적 타당도와 외적 타당도를 동시에 높인다.",
    "key_researchers": [
      {
        "name_ko": "리처드 솔로몬",
        "name_en": "Richard Solomon",
        "contribution": "1949년 사전검사 효과를 통제하기 위한 4집단 설계를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전-사후검사설계",
        "name_en": "Pretest-Posttest Design",
        "id": "DESIGN_PP_026"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "외적타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      },
      {
        "name_ko": "통제집단",
        "name_en": "Control Group",
        "id": "DESIGN_CG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "솔로몬 4집단 = 사전O실험 / 사전O통제 / 사전X실험 / 사전X통제",
      "differential": "솔로몬 4집단설계는 사전검사 효과를 분리할 수 있지만, 사전-사후검사설계는 사전검사 효과와 처치 효과를 분리할 수 없다.",
      "key_point": "이론적으로 가장 우수한 설계이지만, 4개 집단이 필요하여 실용적 제약(비용, 시간, 참가자 수)이 크다.",
      "common_mistake": "솔로몬 4집단설계가 항상 최선이라고 오해하나, 자원 제약을 고려하면 사전-사후 통제집단설계로도 충분한 경우가 많다."
    }
  },
  {
    "id": "DESIGN_PP_026",
    "terminology": "사전-사후검사설계 (Pretest-Posttest Design)",
    "terminology_ko": "사전-사후검사설계",
    "terminology_en": "Pretest-Posttest Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "처치 전(사전검사)과 후(사후검사)에 종속변인을 측정하여, 처치에 의한 변화를 평가하는 설계로, 통제집단 유무에 따라 강도가 달라진다.",
    "definition_en": "A design that measures the dependent variable before (pretest) and after (posttest) treatment to evaluate treatment-induced change, with strength varying based on presence of a control group.",
    "significance": "변화를 직접 측정할 수 있어 처치 효과의 크기를 파악하기 용이하며, 교육 및 임상 연구에서 가장 흔히 사용되는 설계 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "사전-사후검사설계의 다양한 변형과 각각의 타당도 위협을 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "솔로몬4집단설계",
        "name_en": "Solomon Four-Group Design",
        "id": "DESIGN_SL_025"
      },
      {
        "name_ko": "내적타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      },
      {
        "name_ko": "연습효과",
        "name_en": "Practice Effect",
        "id": "DESIGN_PR_016"
      },
      {
        "name_ko": "대응표본t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      }
    ],
    "sub_types": [
      {
        "name": "단일집단 사전-사후검사설계",
        "description": "통제집단 없이 한 집단만 사전·사후 측정하는 약한 설계"
      },
      {
        "name": "사전-사후 통제집단설계",
        "description": "무선할당된 실험·통제 두 집단을 사전·사후 측정하는 강한 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사전-사후 = 처치 '전(前)'과 '후(後)'를 비교하는 설계",
      "differential": "사전-사후검사설계는 처치 전후를 비교하고, 사후검사만 설계는 처치 후 집단 간만 비교한다.",
      "key_point": "통제집단 없는 단일집단 사전-사후설계는 역사, 성숙, 검사 효과 등을 통제할 수 없어 내적 타당도가 낮다.",
      "common_mistake": "사전검사 자체가 참가자를 민감하게 만들어(검사 효과) 사후 수행에 영향을 미칠 수 있다는 점을 간과하기 쉽다."
    }
  },
  {
    "id": "DESIGN_TS_027",
    "terminology": "시계열설계 (Time-series Design)",
    "terminology_ko": "시계열설계",
    "terminology_en": "Time-series Design",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "처치 전후로 여러 시점에서 종속변인을 반복 측정하여, 처치로 인한 변화 패턴을 자연적 변동과 분리하여 분석하는 준실험설계이다.",
    "definition_en": "A quasi-experimental design that repeatedly measures the dependent variable at multiple time points before and after treatment to distinguish treatment-induced change patterns from natural variation.",
    "significance": "통제집단 구성이 어려운 상황에서 처치 효과를 평가할 수 있으며, 정책 평가와 단일사례 연구에서 특히 유용하다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald Campbell",
        "contribution": "중단된 시계열설계(interrupted time-series design)를 준실험설계의 주요 유형으로 확립했다."
      },
      {
        "name_ko": "조지 박스",
        "name_en": "George Box",
        "contribution": "ARIMA 모형 등 시계열 자료의 통계적 분석 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "준실험설계",
        "name_en": "Quasi-experimental Design",
        "id": "DESIGN_QE_002"
      },
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "DESIGN_LS_029"
      },
      {
        "name_ko": "사전-사후검사설계",
        "name_en": "Pretest-Posttest Design",
        "id": "DESIGN_PP_026"
      }
    ],
    "sub_types": [
      {
        "name": "단순 중단 시계열설계",
        "description": "하나의 집단에서 처치 전후의 반복 측정을 분석하는 설계"
      },
      {
        "name": "통제집단 시계열설계",
        "description": "처치 집단과 비교 집단 모두에서 반복 측정하는 강화된 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "시계열 = '시(시간)' '계(계속)' '열(연달아)' 측정하여 변화 패턴 분석",
      "differential": "시계열설계는 여러 시점에서 반복 측정하는 반면, 사전-사후설계는 처치 전후 2시점만 측정한다.",
      "key_point": "시계열설계의 강점은 처치 시점 전후의 추세 변화를 시각적으로 분명히 파악할 수 있다는 것이다.",
      "common_mistake": "시계열 자료의 자기상관(autocorrelation)을 무시하고 일반적인 통계 검정을 적용하는 실수가 흔하다."
    }
  },
  {
    "id": "DESIGN_CS_028",
    "terminology": "상관연구 (Correlational Study)",
    "terminology_ko": "상관연구",
    "terminology_en": "Correlational Study",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "변인을 조작하지 않고 자연적 상태에서 두 변인 간의 관계 방향과 강도를 측정하여 분석하는 비실험 연구설계이다.",
    "definition_en": "A non-experimental research design that measures and analyzes the direction and strength of the relationship between two variables in their natural state without manipulation.",
    "significance": "조작이 불가능하거나 비윤리적인 변인의 관계를 탐구할 수 있으며, 예측 연구와 이론 검증의 기초 자료를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "상관계수를 개발하여 상관연구의 핵심 분석 도구를 제공했다."
      },
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "상관과 회귀의 기본 개념을 도입하여 상관연구의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상관관계",
        "name_en": "Correlation",
        "id": "FOUND_CR_016"
      },
      {
        "name_ko": "비실험설계",
        "name_en": "Non-experimental Design",
        "id": "DESIGN_NE_003"
      },
      {
        "name_ko": "피어슨상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causation",
        "id": "FOUND_CA_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상관연구 = 변인을 '조작 없이' 자연 상태에서 '상관(관계)'을 '연구'",
      "differential": "상관연구는 변인 간 관계를 관찰하는 것이고, 실험연구는 변인을 조작하여 인과관계를 규명하는 것이다.",
      "key_point": "상관연구의 가장 큰 한계는 인과관계를 주장할 수 없다는 것이다. 제3변인 문제와 방향성 문제가 항상 존재한다.",
      "common_mistake": "상관연구에서 높은 상관이 나오면 인과관계가 있다고 해석하는 실수가 가장 흔하다."
    }
  },
  {
    "id": "DESIGN_LS_029",
    "terminology": "종단연구 (Longitudinal Study)",
    "terminology_ko": "종단연구",
    "terminology_en": "Longitudinal Study",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "동일한 참가자 집단을 장기간에 걸쳐 여러 시점에서 반복 관찰하여, 시간에 따른 변화와 발달 과정을 추적하는 연구설계이다.",
    "definition_en": "A research design that repeatedly observes the same group of participants over an extended period at multiple time points to track changes and developmental processes over time.",
    "significance": "개인 내 변화와 발달 궤적을 직접 관찰할 수 있는 유일한 방법으로, 인과적 시간 선행 조건을 확인하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "루이스 터먼",
        "name_en": "Lewis Terman",
        "contribution": "영재아 종단연구(Genetic Studies of Genius)를 1921년부터 수십 년간 수행한 종단연구의 선구자이다."
      },
      {
        "name_ko": "글렌 엘더",
        "name_en": "Glen Elder",
        "contribution": "생애과정 관점에서 종단연구의 이론적·방법론적 기반을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "횡단연구",
        "name_en": "Cross-sectional Study",
        "id": "DESIGN_XS_030"
      },
      {
        "name_ko": "코호트연구",
        "name_en": "Cohort Study",
        "id": "DESIGN_CH_035"
      },
      {
        "name_ko": "시계열설계",
        "name_en": "Time-series Design",
        "id": "DESIGN_TS_027"
      },
      {
        "name_ko": "성숙효과",
        "name_en": "Maturation Effect",
        "id": "DESIGN_MT_017"
      }
    ],
    "sub_types": [
      {
        "name": "패널 연구",
        "description": "동일한 표본을 반복 측정하는 종단연구"
      },
      {
        "name": "추세 연구",
        "description": "동일 모집단에서 시점마다 새로운 표본을 선택하는 종단연구"
      },
      {
        "name": "코호트 연구",
        "description": "특정 시기에 태어난 집단을 추적하는 종단연구"
      }
    ],
    "quiz_hints": {
      "mnemonic": "종단 = '종(세로, 시간축)' 방향으로 '단(잘라서)' 장기 추적",
      "differential": "종단연구는 같은 사람을 시간 경과에 따라 반복 관찰하고, 횡단연구는 서로 다른 연령대를 한 시점에서 비교한다.",
      "key_point": "종단연구의 주요 단점은 시간·비용이 많이 들고, 참가자 탈락(attrition)이 결과를 편향시킬 수 있다는 것이다.",
      "common_mistake": "종단연구가 항상 횡단연구보다 우수하다고 오해하나, 연구 목적과 자원에 따라 적합한 설계가 다르다."
    }
  },
  {
    "id": "DESIGN_XS_030",
    "terminology": "횡단연구 (Cross-sectional Study)",
    "terminology_ko": "횡단연구",
    "terminology_en": "Cross-sectional Study",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "서로 다른 연령이나 특성을 가진 집단을 동일한 시점에서 비교 관찰하는 연구설계로, 집단 간 차이를 통해 발달적 변화를 추정한다.",
    "definition_en": "A research design that compares and observes groups of different ages or characteristics at the same point in time, estimating developmental changes through between-group differences.",
    "significance": "종단연구에 비해 시간과 비용이 적게 들어 실용적이며, 다양한 연령 집단 간의 차이를 신속하게 파악할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "K. 워너 샤이",
        "name_en": "K. Warner Schaie",
        "contribution": "횡단-순차 설계를 제안하여 횡단연구의 코호트 효과 문제를 해결하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "DESIGN_LS_029"
      },
      {
        "name_ko": "코호트연구",
        "name_en": "Cohort Study",
        "id": "DESIGN_CH_035"
      },
      {
        "name_ko": "비실험설계",
        "name_en": "Non-experimental Design",
        "id": "DESIGN_NE_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "횡단 = '횡(가로, 한 시점)' 방향으로 '단(잘라서)' 여러 집단 비교",
      "differential": "횡단연구는 한 시점에서 다른 집단을 비교하고, 종단연구는 같은 집단을 여러 시점에서 추적한다.",
      "key_point": "횡단연구의 가장 큰 한계는 코호트 효과(세대 차이)와 연령 효과를 구분할 수 없다는 것이다.",
      "common_mistake": "횡단연구에서 연령 집단 간 차이를 발달적 변화로 해석하기 쉬우나, 코호트(세대) 차이일 수 있다."
    }
  },
  {
    "id": "DESIGN_IE_031",
    "terminology": "상호작용효과 (Interaction Effect)",
    "terminology_ko": "상호작용효과",
    "terminology_en": "Interaction Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "한 독립변인의 효과가 다른 독립변인의 수준에 따라 달라지는 현상으로, 요인설계에서 변인 간 결합 효과를 나타낸다.",
    "definition_en": "A phenomenon where the effect of one independent variable differs depending on the level of another independent variable, representing the combined effect between variables in factorial designs.",
    "significance": "변인 간의 복잡한 관계를 이해하게 하며, 단순 주효과 분석만으로는 놓칠 수 있는 중요한 패턴을 발견할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "요인설계와 분산분석을 통해 상호작용 효과의 통계적 검정 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주효과",
        "name_en": "Main Effect",
        "id": "DESIGN_ME_032"
      },
      {
        "name_ko": "요인설계",
        "name_en": "Factorial Design",
        "id": "DESIGN_FD_010"
      },
      {
        "name_ko": "조절변인",
        "name_en": "Moderating Variable",
        "id": "FOUND_MOD_008"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-way ANOVA",
        "id": "ANOVA_TW_002"
      }
    ],
    "sub_types": [
      {
        "name": "서수적 상호작용",
        "description": "두 독립변인의 효과 방향은 같지만 크기가 다른 상호작용"
      },
      {
        "name": "비서수적 상호작용",
        "description": "독립변인의 효과 방향이 다른 독립변인의 수준에 따라 역전되는 상호작용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상호작용 = 두 변인이 '상호(서로)' '작용(영향)'하여 효과가 달라짐",
      "differential": "상호작용효과는 변인 간 결합 효과이고, 주효과는 각 변인의 독립적 효과이다.",
      "key_point": "상호작용이 유의하면 주효과의 해석에 주의해야 하며, 단순 주효과 분석이 필요하다.",
      "common_mistake": "주효과가 유의하면 상호작용을 무시하기 쉬우나, 유의한 상호작용이 있으면 주효과의 해석이 오도될 수 있다."
    }
  },
  {
    "id": "DESIGN_ME_032",
    "terminology": "주효과 (Main Effect)",
    "terminology_ko": "주효과",
    "terminology_en": "Main Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "요인설계에서 다른 독립변인의 수준에 관계없이, 하나의 독립변인이 종속변인에 미치는 전반적인 평균 효과를 말한다.",
    "definition_en": "In factorial designs, the overall average effect of one independent variable on the dependent variable, regardless of the levels of other independent variables.",
    "significance": "각 독립변인의 독립적 효과를 파악하는 기본 분석으로, 상호작용효과와 함께 요인설계의 핵심 결과를 구성한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "분산분석을 통해 주효과와 상호작용 효과를 분리하여 분석하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "DESIGN_IE_031"
      },
      {
        "name_ko": "요인설계",
        "name_en": "Factorial Design",
        "id": "DESIGN_FD_010"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "주효과 = 각 변인의 '주(주된, 독립적)' '효과'",
      "differential": "주효과는 한 변인의 독립적 효과이고, 상호작용효과는 두 변인이 결합했을 때 나타나는 추가적 효과이다.",
      "key_point": "2×2 요인설계에서는 2개의 주효과와 1개의 상호작용효과를 분석할 수 있다.",
      "common_mistake": "상호작용이 유의할 때 주효과만으로 결과를 해석하면 오도될 수 있다. 반드시 상호작용을 먼저 확인해야 한다."
    }
  },
  {
    "id": "DESIGN_DC_033",
    "terminology": "요구특성 (Demand Characteristics)",
    "terminology_ko": "요구특성",
    "terminology_en": "Demand Characteristics",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "참가자가 연구의 목적이나 가설을 추측하고, 이에 맞추어 의도적으로 행동을 변화시키는 현상으로, 연구 결과를 왜곡할 수 있다.",
    "definition_en": "A phenomenon where participants guess the purpose or hypothesis of the study and intentionally alter their behavior accordingly, potentially distorting research results.",
    "significance": "참가자의 반응이 처치 효과가 아닌 기대에 기반할 수 있어, 연구 결과의 내적 타당도를 위협하는 주요 요인이다.",
    "key_researchers": [
      {
        "name_ko": "마틴 온",
        "name_en": "Martin Orne",
        "contribution": "1962년 요구특성 개념을 처음 제안하고, 참가자가 '좋은 피험자'가 되려는 경향을 실증적으로 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "DESIGN_PE_022"
      },
      {
        "name_ko": "이중맹검",
        "name_en": "Double-blind",
        "id": "DESIGN_DB_023"
      },
      {
        "name_ko": "실험자 편향",
        "name_en": "Experimenter Bias",
        "id": "DESIGN_EB_034"
      },
      {
        "name_ko": "호손효과",
        "name_en": "Hawthorne Effect",
        "id": "DESIGN_HW_037"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "요구특성 = 실험 상황이 참가자에게 '요구'하는 것처럼 느껴지는 '특성'",
      "differential": "요구특성은 참가자가 연구 가설을 추측하여 행동하는 것이고, 사회적 바람직성 편향은 사회적으로 좋게 보이려는 일반적 경향이다.",
      "key_point": "요구특성을 통제하기 위해 기만(deception), 맹검, 후향적 질문(debriefing) 등의 방법이 사용된다.",
      "common_mistake": "요구특성이 항상 연구자의 가설을 지지하는 방향으로 작용한다고 오해하나, 일부 참가자는 반대로 행동하기도 한다."
    }
  },
  {
    "id": "DESIGN_EB_034",
    "terminology": "실험자 편향 (Experimenter Bias)",
    "terminology_ko": "실험자 편향",
    "terminology_en": "Experimenter Bias",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구자의 기대나 선호가 무의식적으로 실험 절차, 자료 수집, 결과 해석에 영향을 미치는 현상으로, 연구 결과를 왜곡할 수 있다.",
    "definition_en": "A phenomenon where the researcher's expectations or preferences unconsciously influence experimental procedures, data collection, and result interpretation, potentially distorting findings.",
    "significance": "연구자의 주관적 편향이 객관적 결과에 체계적으로 영향을 미칠 수 있어, 이중맹검 등 엄격한 통제가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "실험자 기대효과(Rosenthal effect)를 실증적으로 입증하여 실험자 편향의 체계적 연구를 개척했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이중맹검",
        "name_en": "Double-blind",
        "id": "DESIGN_DB_023"
      },
      {
        "name_ko": "요구특성",
        "name_en": "Demand Characteristics",
        "id": "DESIGN_DC_033"
      },
      {
        "name_ko": "객관성",
        "name_en": "Objectivity",
        "id": "FOUND_OB_029"
      }
    ],
    "sub_types": [
      {
        "name": "실험자 기대효과",
        "description": "연구자의 기대가 참가자의 수행에 무의식적으로 영향을 미치는 현상"
      },
      {
        "name": "관찰자 편향",
        "description": "연구자의 기대가 행동의 관찰과 기록에 영향을 미치는 현상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실험자 편향 = 연구자의 기대가 결과를 '편향'시키는 현상 (Rosenthal 효과)",
      "differential": "실험자 편향은 연구자의 기대에 의한 왜곡이고, 요구특성은 참가자의 추측에 의한 왜곡이다.",
      "key_point": "Rosenthal의 연구에서 쥐 실험자에게 '영리한 쥐'라고 알려주면 실제로 그 쥐가 더 잘 수행하는 것으로 나타났다.",
      "common_mistake": "실험자 편향이 의도적 조작이라고 오해하기 쉬우나, 대부분 무의식적으로 발생하는 미묘한 단서(톤, 표정 등)를 통해 전달된다."
    }
  },
  {
    "id": "DESIGN_CH_035",
    "terminology": "코호트연구 (Cohort Study)",
    "terminology_ko": "코호트연구",
    "terminology_en": "Cohort Study",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "동일한 시기에 태어나거나 특정 경험을 공유하는 집단(코호트)을 시간에 따라 추적 관찰하는 종단연구의 한 형태이다.",
    "definition_en": "A form of longitudinal study that tracks a group (cohort) of individuals born at the same time or sharing a specific experience over time.",
    "significance": "세대 효과와 연령 효과를 분리하여 분석할 수 있으며, 위험요인과 결과 간의 시간적 선후관계를 파악하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "K. 워너 샤이",
        "name_en": "K. Warner Schaie",
        "contribution": "시애틀 종단 연구(Seattle Longitudinal Study)를 통해 코호트 효과와 연령 효과를 분리하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "DESIGN_LS_029"
      },
      {
        "name_ko": "횡단연구",
        "name_en": "Cross-sectional Study",
        "id": "DESIGN_XS_030"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "DESIGN_CA_036"
      }
    ],
    "sub_types": [
      {
        "name": "전향적 코호트연구",
        "description": "현재 시점에서 미래를 향해 추적 관찰하는 연구"
      },
      {
        "name": "후향적 코호트연구",
        "description": "과거 기록을 바탕으로 코호트를 재구성하여 분석하는 연구"
      }
    ],
    "quiz_hints": {
      "mnemonic": "코호트 = 같은 시대에 태어난 '동(同)기(期)' 집단을 추적",
      "differential": "코호트연구는 같은 세대를 시간 경과에 따라 추적하고, 횡단연구는 서로 다른 세대를 한 시점에서 비교한다.",
      "key_point": "코호트 효과란 특정 시대에 태어난 집단이 공유하는 독특한 경험(전쟁, 경제 위기 등)에 의한 차이를 말한다.",
      "common_mistake": "코호트연구에서 관찰된 변화가 모두 연령 효과라고 해석하기 쉬우나, 시대 효과(time of measurement)도 영향을 미칠 수 있다."
    }
  },
  {
    "id": "DESIGN_CA_036",
    "terminology": "사례연구 (Case Study)",
    "terminology_ko": "사례연구",
    "terminology_en": "Case Study",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "하나의 개인, 집단, 사건을 심층적이고 다각적으로 조사하는 연구방법으로, 풍부한 질적 자료를 통해 현상을 깊이 이해한다.",
    "definition_en": "A research method that conducts an in-depth, multifaceted investigation of a single individual, group, or event, providing deep understanding through rich qualitative data.",
    "significance": "희귀한 현상이나 새로운 가설의 발견에 유용하며, 브로카, 피니어스 게이지 등 심리학 역사의 중요한 발견이 사례연구에서 비롯되었다.",
    "key_researchers": [
      {
        "name_ko": "로버트 인",
        "name_en": "Robert Yin",
        "contribution": "사례연구 방법론의 체계적 가이드라인을 확립하여 연구의 엄격성을 높였다."
      },
      {
        "name_ko": "로버트 스테이크",
        "name_en": "Robert Stake",
        "contribution": "사례연구의 유형을 분류하고 질적 사례연구의 방법론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비실험설계",
        "name_en": "Non-experimental Design",
        "id": "DESIGN_NE_003"
      },
      {
        "name_ko": "외적타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      },
      {
        "name_ko": "종단연구",
        "name_en": "Longitudinal Study",
        "id": "DESIGN_LS_029"
      }
    ],
    "sub_types": [
      {
        "name": "내재적 사례연구",
        "description": "사례 자체가 흥미롭거나 독특하여 그 자체를 이해하려는 연구"
      },
      {
        "name": "도구적 사례연구",
        "description": "특정 이론이나 주제를 이해하기 위한 수단으로 사례를 선택한 연구"
      },
      {
        "name": "집합적 사례연구",
        "description": "여러 사례를 비교 분석하여 일반적 패턴을 도출하는 연구"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사례연구 = 하나의 '사례'를 깊이 파는 '연구'",
      "differential": "사례연구는 소수를 깊이 분석하고, 조사연구는 다수를 넓게 조사한다. 깊이 vs. 너비의 차이이다.",
      "key_point": "사례연구의 가장 큰 한계는 일반화(외적 타당도)가 어렵다는 것이지만, 이론 생성과 반증에는 매우 유용하다.",
      "common_mistake": "사례연구가 과학적이지 않다고 평가절하하기 쉬우나, 체계적으로 수행된 사례연구는 가설 생성과 이론 발전에 큰 기여를 한다."
    }
  },
  {
    "id": "DESIGN_HW_037",
    "terminology": "호손효과 (Hawthorne Effect)",
    "terminology_ko": "호손효과",
    "terminology_en": "Hawthorne Effect",
    "category": "DESIGN",
    "category_name": "연구설계 (Research Design)",
    "definition": "연구에 참여하고 있다는 사실 자체나 관찰받고 있다는 인식이 참가자의 행동을 변화시키는 현상으로, 처치 효과와 혼입될 수 있다.",
    "definition_en": "A phenomenon where the mere fact of participating in research or awareness of being observed changes participant behavior, potentially confounding treatment effects.",
    "significance": "연구 참여 자체의 반응성이 결과를 왜곡할 수 있으므로, 통제집단 설정과 맹검 절차의 필요성을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "엘턴 메이요",
        "name_en": "Elton Mayo",
        "contribution": "웨스턴 일렉트릭의 호손 공장 연구(1924-1932)에서 이 현상을 처음 관찰했다."
      },
      {
        "name_ko": "프리츠 뢰틀리스버거",
        "name_en": "Fritz Roethlisberger",
        "contribution": "호손 연구의 결과를 분석하고 작업자의 심리적 요인의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "요구특성",
        "name_en": "Demand Characteristics",
        "id": "DESIGN_DC_033"
      },
      {
        "name_ko": "위약효과",
        "name_en": "Placebo Effect",
        "id": "DESIGN_PE_022"
      },
      {
        "name_ko": "실험자 편향",
        "name_en": "Experimenter Bias",
        "id": "DESIGN_EB_034"
      },
      {
        "name_ko": "외적타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "호손효과 = '호손 공장'에서 발견된 '관찰 = 행동 변화' 효과",
      "differential": "호손효과는 '관찰받고 있다'는 인식에 의한 변화이고, 위약효과는 '처치를 받았다'는 기대에 의한 변화이다.",
      "key_point": "호손효과를 통제하기 위해 비참여 관찰, 자연적 환경 연구, 적응 기간(habituation period) 등의 방법이 사용된다.",
      "common_mistake": "호손효과의 원래 연구 결과가 재분석에서 의문이 제기되었지만, 관찰에 의한 행동 변화 자체는 널리 인정되는 현상이다."
    }
  }
];

TERMS_DATA.MEASURE = [
  {
    "id": "MEASURE_MS_001",
    "terminology": "측정 (Measurement)",
    "terminology_ko": "측정",
    "terminology_en": "Measurement",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "일정한 규칙에 따라 관찰 대상의 속성에 수치를 부여하는 과정으로, 추상적 개념을 경험적으로 관찰 가능한 형태로 변환하는 것이다.",
    "definition_en": "The process of assigning numbers to objects or events according to a set of rules, transforming abstract constructs into empirically observable forms.",
    "significance": "심리학 연구에서 추상적인 심리적 구성개념을 과학적으로 다룰 수 있게 하는 기본 과정으로, 모든 양적 연구의 출발점이다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "측정을 '규칙에 따라 대상에 수치를 부여하는 것'으로 정의하고 측정 수준(척도 유형)을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      },
      {
        "name_ko": "조작화",
        "name_en": "Operationalization",
        "id": "MEASURE_OP_026"
      },
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "FOUND_OD_011"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "측정 = '규칙 + 수치 부여' (Stevens의 정의)",
      "differential": "측정(measurement)은 수치 부여 과정 자체이고, 척도(scale)는 측정에 사용되는 도구나 체계이다.",
      "key_point": "측정은 반드시 일정한 '규칙'에 따라야 하며, 규칙 없는 수치 부여는 측정이 아니다.",
      "common_mistake": "측정과 평가를 동일시하는 것. 측정은 수량화이고, 평가는 가치 판단을 포함한다."
    }
  },
  {
    "id": "MEASURE_SC_002",
    "terminology": "척도 (Scale)",
    "terminology_ko": "척도",
    "terminology_en": "Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 대상의 속성을 체계적으로 수량화하기 위해 사용하는 일련의 숫자 또는 기호 체계로, 측정의 정밀도와 허용 가능한 통계 분석을 결정한다.",
    "definition_en": "A systematic framework of numbers or symbols used to quantify attributes of objects, which determines the precision of measurement and the permissible statistical analyses.",
    "significance": "어떤 척도를 사용하느냐에 따라 적용 가능한 통계 기법이 달라지므로, 연구 설계와 분석의 기본 전제가 된다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "1946년 Science 논문에서 명명·서열·등간·비율의 4가지 측정 척도를 분류하는 체계를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "측정",
        "name_en": "Measurement",
        "id": "MEASURE_MS_001"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "등간척도",
        "name_en": "Interval Scale",
        "id": "MEASURE_IT_005"
      },
      {
        "name_ko": "비율척도",
        "name_en": "Ratio Scale",
        "id": "MEASURE_RT_006"
      }
    ],
    "sub_types": [
      {
        "name": "명명척도 (Nominal Scale)",
        "description": "범주 분류만 가능한 가장 낮은 수준의 척도"
      },
      {
        "name": "서열척도 (Ordinal Scale)",
        "description": "순서 관계를 나타내는 척도"
      },
      {
        "name": "등간척도 (Interval Scale)",
        "description": "동일한 간격을 갖는 척도"
      },
      {
        "name": "비율척도 (Ratio Scale)",
        "description": "절대 영점을 갖는 가장 높은 수준의 척도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "척도 4단계: 명(名)→서(序)→등(等)→비(比), 갈수록 정보가 많아진다",
      "differential": "척도(scale)는 측정 체계이고, 검사(test)는 그 척도를 사용하는 구체적 도구이다.",
      "key_point": "척도의 수준이 높을수록 더 다양한 통계 분석이 가능하며, 비율척도가 가장 많은 정보를 담는다.",
      "common_mistake": "리커트 척도를 등간척도로 무조건 간주하는 것. 엄밀히 서열척도이나, 연구에서 등간으로 가정하는 경우가 많다."
    }
  },
  {
    "id": "MEASURE_NM_003",
    "terminology": "명명척도 (Nominal Scale)",
    "terminology_ko": "명명척도",
    "terminology_en": "Nominal Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 대상을 상호배타적인 범주로 분류하기 위해 이름이나 숫자를 부여하는 가장 기본적인 척도로, 숫자 간에 크기나 순서의 의미가 없다.",
    "definition_en": "The most basic level of measurement that classifies objects into mutually exclusive categories using labels or numbers, where the numbers carry no quantitative meaning or order.",
    "significance": "성별, 진단 범주 등 질적 변인을 체계적으로 분류하여 빈도 분석이나 카이제곱검정 등 비모수 통계를 적용할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "측정 수준 분류 체계에서 명명척도를 가장 기본적 수준으로 정의했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "카이제곱검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "명명(命名) = 이름을 붙인다 → 숫자는 '이름표'일 뿐 크기 의미 없음",
      "differential": "명명척도는 분류만 가능, 서열척도는 순서 비교도 가능하다.",
      "key_point": "명명척도의 숫자(예: 남=1, 여=2)는 크기가 아닌 범주 식별용이므로, 평균을 구하는 것은 무의미하다.",
      "common_mistake": "명명척도에 부여된 숫자로 평균이나 합계를 계산하는 것은 통계적으로 의미가 없다."
    }
  },
  {
    "id": "MEASURE_OR_004",
    "terminology": "서열척도 (Ordinal Scale)",
    "terminology_ko": "서열척도",
    "terminology_en": "Ordinal Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 대상을 순서에 따라 배열할 수 있는 척도로, 범주 간 순위는 알 수 있지만 범주 간 간격이 동일하다고 보장할 수 없다.",
    "definition_en": "A scale that ranks objects in order along some dimension, where the intervals between ranks are not necessarily equal.",
    "significance": "심리학에서 만족도 순위, 선호 순서 등 순서 정보가 있는 변인을 다룰 때 사용하며, 중앙값이나 비모수검정이 적절한 통계 방법이다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "서열척도를 명명척도와 등간척도 사이의 측정 수준으로 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "등간척도",
        "name_en": "Interval Scale",
        "id": "MEASURE_IT_005"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "스피어만 상관",
        "name_en": "Spearman Correlation",
        "id": "CORR_SR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "서열(序列) = 차례로 늘어놓는다 → 1등, 2등, 3등 순서는 알지만 점수 차이는 모른다",
      "differential": "서열척도는 순서만 알 수 있고, 등간척도는 순서 + 동일 간격까지 보장된다.",
      "key_point": "서열척도에서는 '1위와 2위의 차이'와 '2위와 3위의 차이'가 같다고 할 수 없다.",
      "common_mistake": "서열척도 데이터에 산술평균을 구하는 것은 간격이 동일하지 않으므로 엄밀히 부적절하다."
    }
  },
  {
    "id": "MEASURE_IT_005",
    "terminology": "등간척도 (Interval Scale)",
    "terminology_ko": "등간척도",
    "terminology_en": "Interval Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 단위 간 간격이 동일하여 차이를 수량적으로 비교할 수 있지만, 절대적 영점(true zero)이 존재하지 않는 척도이다.",
    "definition_en": "A scale with equal intervals between values that allows meaningful comparison of differences, but lacks a true zero point.",
    "significance": "IQ 점수, 온도(섭씨) 등 심리학에서 흔히 사용하는 표준화 점수들이 등간척도에 해당하며, 평균과 표준편차 등 모수통계를 적용할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "등간척도를 동일 간격과 영점 부재 특성으로 정의하고 허용 가능한 통계 연산을 규정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "비율척도",
        "name_en": "Ratio Scale",
        "id": "MEASURE_RT_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "등간(等間) = 같은 간격 → 섭씨 온도처럼 10°와 20°의 차이 = 20°와 30°의 차이",
      "differential": "등간척도는 절대 영점이 없어 비율 비교(2배, 3배)가 불가능하고, 비율척도는 영점이 있어 비율 비교가 가능하다.",
      "key_point": "등간척도에서 0은 '해당 속성이 없음'을 의미하지 않는다 (예: 섭씨 0도 ≠ 온도 없음).",
      "common_mistake": "IQ 200이 IQ 100의 2배 지능이라고 해석하는 것. 등간척도이므로 비율 해석은 부적절하다."
    }
  },
  {
    "id": "MEASURE_RT_006",
    "terminology": "비율척도 (Ratio Scale)",
    "terminology_ko": "비율척도",
    "terminology_en": "Ratio Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "등간척도의 특성에 더해 절대적 영점(true zero)을 갖는 가장 높은 수준의 척도로, 비율 비교가 가능하다.",
    "definition_en": "The highest level of measurement that has all properties of an interval scale plus a true zero point, allowing meaningful ratio comparisons.",
    "significance": "반응시간, 정답 수 등 심리학 실험에서 수집되는 많은 변인이 비율척도에 해당하며, 모든 산술 연산과 통계 분석이 허용된다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Smith Stevens",
        "contribution": "비율척도를 측정 수준 위계에서 가장 높은 수준으로 정의하고, 모든 산술 연산이 가능함을 명시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "등간척도",
        "name_en": "Interval Scale",
        "id": "MEASURE_IT_005"
      },
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비율(比率) = 비교 가능 → '2배, 3배' 표현이 의미 있는 척도",
      "differential": "비율척도는 절대 영점이 있어 '0 = 속성 없음'이지만, 등간척도의 0은 임의적이다.",
      "key_point": "비율척도에서는 0이 해당 속성의 완전한 부재를 의미하므로, 값의 비율 비교(A는 B의 2배)가 타당하다.",
      "common_mistake": "심리검사 점수를 비율척도로 간주하여 '2배 더 우울하다'고 해석하는 것은 잘못이다."
    }
  },
  {
    "id": "MEASURE_RL_007",
    "terminology": "신뢰도 (Reliability)",
    "terminology_ko": "신뢰도",
    "terminology_en": "Reliability",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 도구가 동일한 대상을 반복 측정했을 때 일관된 결과를 산출하는 정도로, 측정의 안정성과 일관성을 나타낸다.",
    "definition_en": "The degree to which a measurement instrument yields consistent and stable results when measuring the same construct repeatedly.",
    "significance": "신뢰도가 낮은 도구로 수집한 데이터는 연구 결과의 재현성을 보장할 수 없으므로, 타당도의 필요조건이 되는 핵심 측정 속성이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "고전검사이론에서 신뢰도의 수학적 모형(참점수 + 오차)을 처음 제안했다."
      },
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "내적 합치도 지표인 크론바흐 알파(α)를 개발하여 신뢰도 추정의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "크론바흐 알파",
        "name_en": "Cronbach's Alpha",
        "id": "MEASURE_CA_015"
      },
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "id": "MEASURE_TR_016"
      },
      {
        "name_ko": "측정의 표준오차",
        "name_en": "Standard Error of Measurement",
        "id": "MEASURE_SEM_019"
      }
    ],
    "sub_types": [
      {
        "name": "검사-재검사 신뢰도 (Test-Retest Reliability)",
        "description": "동일 검사를 시간 간격을 두고 두 번 실시하여 상관을 구하는 방법"
      },
      {
        "name": "동형검사 신뢰도 (Parallel Forms Reliability)",
        "description": "동등한 두 검사를 실시하여 상관을 구하는 방법"
      },
      {
        "name": "반분 신뢰도 (Split-Half Reliability)",
        "description": "검사를 절반으로 나누어 두 부분의 상관을 구하는 방법"
      },
      {
        "name": "내적 합치도 (Internal Consistency)",
        "description": "문항 간 일관성을 측정하는 방법 (크론바흐 α 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "신뢰도 = 일관성 → 같은 것을 다시 재면 같은 결과가 나오는가?",
      "differential": "신뢰도는 '일관성'(같은 결과 반복), 타당도는 '정확성'(측정하려는 것을 측정하는가)이다.",
      "key_point": "신뢰도는 타당도의 필요조건이지만 충분조건은 아니다. 일관적이어도 엉뚱한 것을 측정할 수 있다.",
      "common_mistake": "신뢰도가 높으면 자동으로 타당도도 높다고 생각하는 것. 신뢰도는 타당도의 상한선을 결정할 뿐이다."
    }
  },
  {
    "id": "MEASURE_VD_012",
    "terminology": "타당도 (Validity)",
    "terminology_ko": "타당도",
    "terminology_en": "Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 도구가 측정하고자 하는 구성개념을 실제로 정확하게 측정하고 있는 정도를 나타내는 개념이다.",
    "definition_en": "The degree to which a measurement instrument accurately measures the construct it is intended to measure.",
    "significance": "아무리 신뢰롭게 측정하더라도 측정하려는 것을 정확히 측정하지 못하면 연구 결론이 무의미하므로, 측정의 가장 중요한 속성이다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "구성타당도 개념을 체계화하고 타당도의 통합적 관점을 제시했다."
      },
      {
        "name_ko": "폴 미흘",
        "name_en": "Paul Meehl",
        "contribution": "크론바흐와 함께 구성타당도의 이론적 토대를 마련한 1955년 논문을 공동 저술했다."
      },
      {
        "name_ko": "사무엘 메식",
        "name_en": "Samuel Messick",
        "contribution": "타당도를 단일 개념으로 통합하여 구성타당도 중심의 현대적 타당도 이론을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      },
      {
        "name_ko": "내용타당도",
        "name_en": "Content Validity",
        "id": "MEASURE_CNV_009"
      },
      {
        "name_ko": "준거타당도",
        "name_en": "Criterion Validity",
        "id": "MEASURE_CRV_010"
      }
    ],
    "sub_types": [
      {
        "name": "내용타당도 (Content Validity)",
        "description": "검사 문항이 측정 영역을 적절히 대표하는 정도"
      },
      {
        "name": "준거타당도 (Criterion Validity)",
        "description": "외부 준거와의 관련성 정도"
      },
      {
        "name": "구성타당도 (Construct Validity)",
        "description": "이론적 구성개념을 측정하는 정도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "타당도 = '과녁 맞추기' → 화살이 정중앙(측정 목표)에 맞는가?",
      "differential": "신뢰도는 화살이 한 곳에 모이는 것(일관성), 타당도는 화살이 과녁 중앙에 맞는 것(정확성)이다.",
      "key_point": "현대 측정이론에서 타당도는 검사 자체의 속성이 아니라 '검사 점수의 해석과 사용'에 대한 것이다.",
      "common_mistake": "타당도가 검사 자체에 내재된 고정 속성이라고 보는 것. 타당도는 특정 목적과 맥락에서의 점수 해석에 대한 것이다."
    }
  },
  {
    "id": "MEASURE_CV_008",
    "terminology": "구성타당도 (Construct Validity)",
    "terminology_ko": "구성타당도",
    "terminology_en": "Construct Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정 도구가 이론적으로 정의된 심리적 구성개념(construct)을 실제로 측정하고 있는 정도로, 수렴타당도와 변별타당도를 통해 확인한다.",
    "definition_en": "The degree to which a test measures the theoretical construct it claims to measure, evaluated through convergent and discriminant evidence.",
    "significance": "심리학에서 직접 관찰할 수 없는 추상적 개념(지능, 성격, 불안 등)을 측정할 때 가장 핵심적인 타당도 유형이다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "구성타당도의 개념을 최초로 체계적으로 정의한 1955년 논문을 공동 저술했다."
      },
      {
        "name_ko": "폴 미흘",
        "name_en": "Paul Meehl",
        "contribution": "구성타당도 검증을 위한 법칙학적 네트워크(nomological network) 개념을 제안했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "다특성-다방법 행렬(MTMM)을 통한 구성타당도 검증 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수렴타당도",
        "name_en": "Convergent Validity",
        "id": "MEASURE_COV_011"
      },
      {
        "name_ko": "변별타당도",
        "name_en": "Discriminant Validity",
        "id": "MEASURE_DV_013"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "요인분석",
        "name_en": "Factor Analysis",
        "id": "MEASURE_CV_008"
      }
    ],
    "sub_types": [
      {
        "name": "수렴타당도 (Convergent Validity)",
        "description": "동일 구성개념을 측정하는 다른 도구와 높은 상관을 보이는 정도"
      },
      {
        "name": "변별타당도 (Discriminant Validity)",
        "description": "다른 구성개념을 측정하는 도구와 낮은 상관을 보이는 정도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "구성(構成)타당도 = 구성개념(construct)을 제대로 구성(측정)했는가?",
      "differential": "구성타당도는 '이론적 개념 측정 여부'이고, 내용타당도는 '측정 영역의 대표성'이며, 준거타당도는 '외부 기준과의 관계'이다.",
      "key_point": "현대 측정이론에서 구성타당도는 모든 타당도의 상위 개념으로, 타당도의 핵심이 된다.",
      "common_mistake": "구성타당도를 다른 타당도 유형과 병렬적으로 취급하는 것. 현대 관점에서 모든 타당도는 구성타당도의 증거이다."
    }
  },
  {
    "id": "MEASURE_CNV_009",
    "terminology": "내용타당도 (Content Validity)",
    "terminology_ko": "내용타당도",
    "terminology_en": "Content Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사 문항이 측정하고자 하는 내용 영역(content domain)을 적절하게 대표하고 있는 정도를 나타낸다.",
    "definition_en": "The degree to which test items adequately represent the content domain that the test is designed to measure.",
    "significance": "특히 학업성취 검사나 자격시험에서 중요하며, 문항이 해당 영역을 골고루 다루는지를 체계적으로 평가한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 로쉐",
        "name_en": "Charles H. Lawshe",
        "contribution": "내용타당도비(CVR)를 개발하여 전문가 판단의 합의 정도를 수량화하는 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "안면타당도",
        "name_en": "Face Validity",
        "id": "MEASURE_FV_014"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내용타당도 = '시험 범위를 골고루 냈는가?'",
      "differential": "내용타당도는 전문가의 체계적 판단에 의존하고, 안면타당도는 비전문가의 피상적 인상이다.",
      "key_point": "내용타당도는 통계적 지표가 아닌 전문가 판단(expert judgment)에 의해 평가된다.",
      "common_mistake": "내용타당도와 안면타당도를 혼동하는 것. 내용타당도는 전문가가, 안면타당도는 일반인이 판단한다."
    }
  },
  {
    "id": "MEASURE_CRV_010",
    "terminology": "준거타당도 (Criterion Validity)",
    "terminology_ko": "준거타당도",
    "terminology_en": "Criterion Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사 점수가 외부의 독립적 준거(criterion)와 어느 정도 관련이 있는지를 나타내는 타당도 유형이다.",
    "definition_en": "The degree to which test scores are related to an independent external criterion, indicating the test's practical utility for prediction or classification.",
    "significance": "선발, 배치, 진단 등 실제적 의사결정에서 검사의 실용적 가치를 판단하는 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward L. Thorndike",
        "contribution": "교육 및 심리 측정에서 준거 개념을 체계적으로 도입하고 예측타당도 연구의 기틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "MEASURE_PV_021"
      },
      {
        "name_ko": "동시타당도",
        "name_en": "Concurrent Validity",
        "id": "MEASURE_CCV_022"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      }
    ],
    "sub_types": [
      {
        "name": "예측타당도 (Predictive Validity)",
        "description": "검사 점수가 미래 행동/수행을 예측하는 정도"
      },
      {
        "name": "동시타당도 (Concurrent Validity)",
        "description": "검사 점수가 현재의 준거와 동시에 관련되는 정도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "준거(準據) = 기준, 근거 → 외부 기준과 비교하여 검증하는 타당도",
      "differential": "준거타당도는 외부 기준과의 상관으로, 구성타당도는 이론적 구성개념과의 부합으로 검증한다.",
      "key_point": "준거타당도의 핵심은 적절한 '준거'의 선택이며, 준거 오염(criterion contamination)을 방지해야 한다.",
      "common_mistake": "준거타당도를 높이려면 좋은 준거가 필요한데, 적절한 준거 선택 자체가 어려운 경우가 많다."
    }
  },
  {
    "id": "MEASURE_COV_011",
    "terminology": "수렴타당도 (Convergent Validity)",
    "terminology_ko": "수렴타당도",
    "terminology_en": "Convergent Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "동일한 구성개념을 측정하는 서로 다른 방법으로 측정한 결과가 높은 상관을 보이는 정도를 나타낸다.",
    "definition_en": "The degree to which measures of the same construct obtained through different methods are highly correlated with each other.",
    "significance": "구성타당도의 핵심 증거로, 동일한 개념을 다양한 방법으로 측정했을 때 결과가 수렴해야 해당 구성개념을 제대로 측정하고 있다고 판단할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "피스크와 함께 다특성-다방법 행렬(MTMM)을 개발하여 수렴·변별 타당도 검증 방법을 체계화했다."
      },
      {
        "name_ko": "도널드 피스크",
        "name_en": "Donald W. Fiske",
        "contribution": "캠벨과 공동으로 MTMM 방법론을 통한 타당도 검증 프레임워크를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변별타당도",
        "name_en": "Discriminant Validity",
        "id": "MEASURE_DV_013"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      },
      {
        "name_ko": "다특성-다방법 행렬",
        "name_en": "MTMM Matrix",
        "id": "MEASURE_MT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수렴(收斂) = 모여든다 → 같은 개념을 다르게 재도 결과가 '모여든다'",
      "differential": "수렴타당도는 같은 개념끼리 높은 상관, 변별타당도는 다른 개념끼리 낮은 상관을 기대한다.",
      "key_point": "수렴타당도와 변별타당도는 항상 쌍으로 확인해야 구성타당도의 완전한 증거가 된다.",
      "common_mistake": "수렴타당도만 확인하고 변별타당도를 검증하지 않으면 구성타당도 증거가 불완전하다."
    }
  },
  {
    "id": "MEASURE_DV_013",
    "terminology": "변별타당도 (Discriminant Validity)",
    "terminology_ko": "변별타당도",
    "terminology_en": "Discriminant Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "서로 다른 구성개념을 측정하는 도구들 간에 낮은 상관이 나타나는 정도로, 측정이 개념적으로 구별되는 것을 실제로 구별하고 있음을 보여준다.",
    "definition_en": "The degree to which measures of different constructs show low correlations, demonstrating that conceptually distinct constructs are measured distinctly.",
    "significance": "측정 도구가 특정 개념만을 순수하게 측정하고 있는지를 확인하는 데 필수적이며, 수렴타당도와 함께 구성타당도의 핵심 증거이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "변별타당도 개념을 수렴타당도와 짝지어 제안하고 MTMM 행렬로 검증하는 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수렴타당도",
        "name_en": "Convergent Validity",
        "id": "MEASURE_COV_011"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      },
      {
        "name_ko": "다특성-다방법 행렬",
        "name_en": "MTMM Matrix",
        "id": "MEASURE_MT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변별(辨別) = 구별한다 → 다른 개념은 '구별'되어 낮은 상관을 보여야 한다",
      "differential": "변별타당도는 '다른 것은 다르게' 측정됨을, 수렴타당도는 '같은 것은 같게' 측정됨을 확인한다.",
      "key_point": "변별타당도가 낮으면 검사가 의도하지 않은 다른 개념까지 측정하고 있을 가능성이 있다.",
      "common_mistake": "변별타당도와 변별도(discrimination)를 혼동하는 것. 변별타당도는 구성개념 수준, 변별도는 문항 수준의 개념이다."
    }
  },
  {
    "id": "MEASURE_FV_014",
    "terminology": "안면타당도 (Face Validity)",
    "terminology_ko": "안면타당도",
    "terminology_en": "Face Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사가 겉보기에 측정하려는 것을 측정하는 것처럼 보이는 정도로, 비전문가의 주관적 인상에 기반한다.",
    "definition_en": "The degree to which a test appears, on its surface, to measure what it claims to measure, based on subjective impressions of non-experts.",
    "significance": "엄밀한 의미의 타당도는 아니지만, 수검자의 검사 수용도와 동기에 영향을 미치므로 검사 개발 시 고려해야 하는 실용적 요소이다.",
    "key_researchers": [
      {
        "name_ko": "앤 아나스타시",
        "name_en": "Anne Anastasi",
        "contribution": "안면타당도가 엄밀한 타당도가 아님을 지적하면서도 실용적 중요성을 인정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내용타당도",
        "name_en": "Content Validity",
        "id": "MEASURE_CNV_009"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안면(顔面) = 얼굴 → 겉모습(얼굴)만 보고 판단하는 타당도",
      "differential": "안면타당도는 비전문가의 '인상', 내용타당도는 전문가의 '체계적 판단'이다.",
      "key_point": "안면타당도는 기술적 의미의 타당도가 아니며, 수검자 동기와 검사 수용성에 관한 것이다.",
      "common_mistake": "안면타당도가 높으면 검사가 타당하다고 결론짓는 것. 겉보기와 실제 측정 내용은 다를 수 있다."
    }
  },
  {
    "id": "MEASURE_CA_015",
    "terminology": "크론바흐 알파 (Cronbach's Alpha)",
    "terminology_ko": "크론바흐 알파",
    "terminology_en": "Cronbach's Alpha",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사 문항 간의 내적 합치도를 나타내는 신뢰도 계수로, 0에서 1 사이의 값을 가지며 문항들이 동일한 구성개념을 일관되게 측정하는 정도를 표시한다.",
    "definition_en": "A reliability coefficient indicating internal consistency among test items, ranging from 0 to 1, representing the extent to which items consistently measure the same construct.",
    "significance": "가장 널리 사용되는 신뢰도 추정 방법으로, 단 한 번의 검사 실시로 내적 합치도를 추정할 수 있어 실용적이다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "1951년 Psychometrika 논문에서 계수 α를 제안하여 내적 합치도 추정의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "반분 신뢰도",
        "name_en": "Split-Half Reliability",
        "id": "MEASURE_SH_017"
      },
      {
        "name_ko": "내적 합치도",
        "name_en": "Internal Consistency",
        "id": "MEASURE_IC_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "α(알파) = '알'(All)파 → 모든 문항의 합치도를 한 번에 측정",
      "differential": "크론바흐 α는 문항 간 일관성, 검사-재검사 신뢰도는 시간적 안정성을 측정한다.",
      "key_point": "일반적으로 α ≥ .70이면 수용 가능, ≥ .80이면 양호, ≥ .90이면 우수한 신뢰도로 간주한다.",
      "common_mistake": "α가 높으면 검사가 단일 차원(unidimensional)이라고 결론짓는 것. α는 다차원 검사에서도 높을 수 있다."
    }
  },
  {
    "id": "MEASURE_TR_016",
    "terminology": "검사-재검사 신뢰도 (Test-Retest Reliability)",
    "terminology_ko": "검사-재검사 신뢰도",
    "terminology_en": "Test-Retest Reliability",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "동일한 검사를 동일한 집단에게 일정한 시간 간격을 두고 두 번 실시한 후, 두 검사 점수 간 상관계수로 추정하는 신뢰도이다.",
    "definition_en": "A reliability estimate obtained by administering the same test to the same group at two different time points and calculating the correlation between the two sets of scores.",
    "significance": "측정의 시간적 안정성(temporal stability)을 평가하는 기본적 방법으로, 특히 성격 특성 같은 안정적 구성개념 측정에 적합하다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "검사-재검사 패러다임의 이론적 기초인 고전검사이론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "반분 신뢰도",
        "name_en": "Split-Half Reliability",
        "id": "MEASURE_SH_017"
      },
      {
        "name_ko": "크론바흐 알파",
        "name_en": "Cronbach's Alpha",
        "id": "MEASURE_CA_015"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "검사→시간 경과→재검사 → 두 점수의 상관 = 안정성 계수",
      "differential": "검사-재검사는 '시간 안정성', 반분 신뢰도/크론바흐 α는 '내적 일관성'을 측정한다.",
      "key_point": "시간 간격이 너무 짧으면 기억 효과, 너무 길면 실제 변화가 반영되어 신뢰도 추정이 왜곡된다.",
      "common_mistake": "적절한 시간 간격을 고려하지 않는 것. 측정하는 구성개념의 안정성에 따라 간격을 결정해야 한다."
    }
  },
  {
    "id": "MEASURE_SH_017",
    "terminology": "반분 신뢰도 (Split-Half Reliability)",
    "terminology_ko": "반분 신뢰도",
    "terminology_en": "Split-Half Reliability",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사를 두 부분(보통 홀수-짝수 문항)으로 나누어 각 부분의 점수 간 상관을 구한 뒤, 스피어만-브라운 공식으로 전체 검사의 신뢰도를 추정하는 방법이다.",
    "definition_en": "A reliability estimation method that divides a test into two halves (usually odd-even items), calculates the correlation between halves, and applies the Spearman-Brown formula to estimate full-test reliability.",
    "significance": "한 번의 검사 실시로 신뢰도를 추정할 수 있어, 재검사가 어려운 상황에서 실용적인 대안이 된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "스피어만-브라운 예언 공식을 개발하여 반분 상관에서 전체 검사 신뢰도를 추정하는 방법을 제공했다."
      },
      {
        "name_ko": "윌리엄 브라운",
        "name_en": "William Brown",
        "contribution": "스피어만과 독립적으로 동일한 예언 공식을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "크론바흐 알파",
        "name_en": "Cronbach's Alpha",
        "id": "MEASURE_CA_015"
      },
      {
        "name_ko": "검사-재검사 신뢰도",
        "name_en": "Test-Retest Reliability",
        "id": "MEASURE_TR_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반분(半分) = 반으로 나눈다 → 검사를 반으로 쪼개서 상관 비교",
      "differential": "반분 신뢰도는 검사를 2등분하여 비교, 크론바흐 α는 가능한 모든 반분의 평균과 같다.",
      "key_point": "반분 방법에 따라 결과가 달라질 수 있으며, 이를 해결한 것이 크론바흐 α이다.",
      "common_mistake": "검사를 전반부/후반부로 나누면 피로나 연습 효과가 반영될 수 있으므로, 홀수-짝수 분할이 권장된다."
    }
  },
  {
    "id": "MEASURE_IR_018",
    "terminology": "평정자간 신뢰도 (Inter-Rater Reliability)",
    "terminology_ko": "평정자간 신뢰도",
    "terminology_en": "Inter-Rater Reliability",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "둘 이상의 평정자(관찰자, 채점자)가 동일한 대상을 독립적으로 평가했을 때 평정 결과 간의 일치도를 나타내는 신뢰도이다.",
    "definition_en": "The degree of agreement among two or more raters who independently evaluate the same subjects, indicating consistency of scoring or observation across judges.",
    "significance": "행동 관찰, 면접 평가, 주관식 채점 등 판단이 개입되는 측정에서 결과의 객관성을 보장하는 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "우연 일치를 보정한 평정자 일치도 계수인 코헨의 카파(κ)를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "코헨의 카파",
        "name_en": "Cohen's Kappa",
        "id": "MEASURE_CK_025"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "평정자간(inter-rater) = 평가자 '사이'의 일치도",
      "differential": "평정자간 신뢰도는 평가자 간 일치도, 평정자내 신뢰도(intra-rater)는 동일 평가자의 시간적 일관성이다.",
      "key_point": "단순 일치율(percent agreement)보다 우연 일치를 보정한 코헨의 κ가 더 엄밀한 지표이다.",
      "common_mistake": "단순 일치율만으로 평정자간 신뢰도를 보고하는 것. 우연에 의한 일치를 보정해야 한다."
    }
  },
  {
    "id": "MEASURE_SEM_019",
    "terminology": "측정의 표준오차 (Standard Error of Measurement)",
    "terminology_ko": "측정의 표준오차",
    "terminology_en": "Standard Error of Measurement",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "동일한 개인을 동일한 검사로 반복 측정했을 때 관찰점수가 참값 주위에서 변동하는 정도를 나타내는 표준편차로, SEM = SD × √(1 - r)로 계산한다.",
    "definition_en": "The standard deviation of observed scores around a person's true score upon repeated testing, calculated as SEM = SD × √(1 - r), where SD is the score standard deviation and r is reliability.",
    "significance": "개인의 관찰점수가 참점수에서 얼마나 벗어날 수 있는지를 추정하여 점수 해석의 정밀도를 제공하는 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "고전검사이론에서 참점수와 오차점수의 관계를 정립하여 SEM 산출의 이론적 기초를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "참값",
        "name_en": "True Score",
        "id": "MEASURE_TS_030"
      },
      {
        "name_ko": "관찰점수",
        "name_en": "Observed Score",
        "id": "MEASURE_OS_031"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SEM = SD × √(1-r) → 신뢰도(r)가 높으면 SEM은 작아진다",
      "differential": "측정의 표준오차(SEM)는 개인 점수의 오차, 표본의 표준오차(SE)는 통계량의 변동성이다.",
      "key_point": "SEM이 작을수록 개인 점수의 해석이 정밀하며, 이를 이용해 점수의 신뢰구간(신뢰대)을 구할 수 있다.",
      "common_mistake": "SEM과 표준오차(standard error of the mean)를 혼동하는 것. SEM은 측정 오차, SE는 표집 오차이다."
    }
  },
  {
    "id": "MEASURE_LK_020",
    "terminology": "리커트 척도 (Likert Scale)",
    "terminology_ko": "리커트 척도",
    "terminology_en": "Likert Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "태도나 의견의 강도를 측정하기 위해 진술문에 대한 동의 정도를 일반적으로 5점 또는 7점의 등급으로 응답하게 하는 자기보고식 평정 척도이다.",
    "definition_en": "A self-report rating scale that measures the intensity of attitudes or opinions by asking respondents to indicate their level of agreement with statements, typically on a 5-point or 7-point scale.",
    "significance": "심리학 설문 연구에서 가장 널리 사용되는 측정 도구로, 태도, 만족도, 성격 등 주관적 구성개념을 효율적으로 수량화할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "렌시스 리커트",
        "name_en": "Rensis Likert",
        "contribution": "1932년 논문에서 태도 측정을 위한 총합 평정법(method of summated ratings)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "의미변별 척도",
        "name_en": "Semantic Differential Scale",
        "id": "MEASURE_SD_028"
      },
      {
        "name_ko": "서스톤 척도",
        "name_en": "Thurstone Scale",
        "id": "MEASURE_TH_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "리커트 = '동의 정도' → 매우 동의~매우 반대의 5단계(또는 7단계) 선택",
      "differential": "리커트 척도는 동의 정도를 묻고, 의미변별 척도는 양극 형용사 사이 위치를 묻는다.",
      "key_point": "엄밀히 서열척도이지만, 연구에서는 등간척도로 가정하여 평균 등의 모수통계를 적용하는 것이 관행이다.",
      "common_mistake": "리커트 '척도(scale)'와 리커트 '문항(item)'을 혼동하는 것. 척도는 여러 문항의 합, 문항은 개별 질문이다."
    }
  },
  {
    "id": "MEASURE_PV_021",
    "terminology": "예측타당도 (Predictive Validity)",
    "terminology_ko": "예측타당도",
    "terminology_en": "Predictive Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사 점수가 미래의 행동이나 수행을 얼마나 정확하게 예측할 수 있는지를 나타내는 준거타당도의 하위 유형이다.",
    "definition_en": "A subtype of criterion validity indicating how accurately test scores predict future behavior, performance, or outcomes measured at a later time.",
    "significance": "대학 입학 시험, 직업 적성 검사 등에서 미래 수행을 예측하는 데 핵심적인 지표로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward L. Thorndike",
        "contribution": "교육 측정에서 예측 타당화 연구의 초기 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "준거타당도",
        "name_en": "Criterion Validity",
        "id": "MEASURE_CRV_010"
      },
      {
        "name_ko": "동시타당도",
        "name_en": "Concurrent Validity",
        "id": "MEASURE_CCV_022"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "예측(豫測) = 미리 헤아린다 → 검사가 미래 결과를 미리 알려주는 정도",
      "differential": "예측타당도는 검사 후 '시간 경과' 뒤 준거를 측정하고, 동시타당도는 검사와 준거를 '동시에' 측정한다.",
      "key_point": "예측타당도 연구에서는 검사 실시와 준거 측정 사이에 반드시 시간 간격이 있어야 한다.",
      "common_mistake": "예측타당도와 동시타당도를 구분하지 않는 것. 핵심 차이는 준거 측정 시점이다."
    }
  },
  {
    "id": "MEASURE_CCV_022",
    "terminology": "동시타당도 (Concurrent Validity)",
    "terminology_ko": "동시타당도",
    "terminology_en": "Concurrent Validity",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사 점수와 현재 시점의 외부 준거 간의 상관으로 평가되는 준거타당도의 하위 유형으로, 검사와 준거를 거의 동시에 측정한다.",
    "definition_en": "A subtype of criterion validity assessed by correlating test scores with a criterion measured at approximately the same time.",
    "significance": "새로 개발된 검사가 기존의 확립된 검사와 동등한 측정 능력을 가지는지 빠르게 확인하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "앤 아나스타시",
        "name_en": "Anne Anastasi",
        "contribution": "동시타당도와 예측타당도를 준거타당도의 두 하위 유형으로 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "준거타당도",
        "name_en": "Criterion Validity",
        "id": "MEASURE_CRV_010"
      },
      {
        "name_ko": "예측타당도",
        "name_en": "Predictive Validity",
        "id": "MEASURE_PV_021"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "동시(同時) = 같은 시점 → 검사와 준거를 '동시에' 측정하여 비교",
      "differential": "동시타당도는 현재의 준거와 비교, 예측타당도는 미래의 준거와 비교한다.",
      "key_point": "기존 검사를 대체할 새 검사를 개발할 때, 두 검사 점수의 상관이 동시타당도의 증거가 된다.",
      "common_mistake": "동시타당도만으로 검사의 예측력을 주장하는 것. 동시타당도가 높아도 미래 예측력은 별도로 확인해야 한다."
    }
  },
  {
    "id": "MEASURE_MT_023",
    "terminology": "다특성-다방법 행렬 (Multitrait-Multimethod Matrix)",
    "terminology_ko": "다특성-다방법 행렬",
    "terminology_en": "Multitrait-Multimethod Matrix",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "여러 특성(trait)을 여러 방법(method)으로 측정한 결과를 상관 행렬로 조직하여, 수렴타당도와 변별타당도를 동시에 평가하는 체계적 방법이다.",
    "definition_en": "A systematic approach organizing correlations from measuring multiple traits with multiple methods into a matrix to simultaneously evaluate convergent and discriminant validity.",
    "significance": "구성타당도를 검증하는 가장 체계적인 방법으로, 특성 분산과 방법 분산을 분리하여 측정의 질을 종합적으로 평가할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "1959년 피스크와 함께 MTMM 행렬을 제안하여 구성타당도 검증의 표준 방법을 확립했다."
      },
      {
        "name_ko": "도널드 피스크",
        "name_en": "Donald W. Fiske",
        "contribution": "캠벨과 공동으로 MTMM 방법론을 제안하여 특성과 방법 효과를 분리하는 틀을 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수렴타당도",
        "name_en": "Convergent Validity",
        "id": "MEASURE_COV_011"
      },
      {
        "name_ko": "변별타당도",
        "name_en": "Discriminant Validity",
        "id": "MEASURE_DV_013"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MTMM = Multi-Trait Multi-Method → 여러 특성 × 여러 방법의 상관 행렬",
      "differential": "MTMM은 수렴+변별 타당도를 동시에 평가하지만, 확인적 요인분석(CFA)이 더 정교한 대안이 될 수 있다.",
      "key_point": "같은 특성-다른 방법의 상관(수렴)이 다른 특성-같은 방법의 상관(방법 효과)보다 커야 한다.",
      "common_mistake": "방법 효과(method effect)를 무시하고 수렴 상관만 확인하는 것. 방법 분산도 반드시 고려해야 한다."
    }
  },
  {
    "id": "MEASURE_IC_024",
    "terminology": "내적 합치도 (Internal Consistency)",
    "terminology_ko": "내적 합치도",
    "terminology_en": "Internal Consistency",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사를 구성하는 문항들이 동일한 구성개념을 얼마나 일관되게 측정하고 있는지를 나타내는 신뢰도의 한 유형이다.",
    "definition_en": "A type of reliability indicating the extent to which test items consistently measure the same construct, reflecting the homogeneity of the items.",
    "significance": "한 번의 검사 실시로 추정 가능하여 실용적이며, 검사 문항의 동질성과 구성개념의 단일성을 평가하는 기본 지표이다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바흐",
        "name_en": "Lee Cronbach",
        "contribution": "내적 합치도의 대표 지표인 계수 α를 개발하여 이 개념을 측정의 핵심 속성으로 확립했다."
      },
      {
        "name_ko": "조지 쿠더",
        "name_en": "George Kuder",
        "contribution": "리처드슨과 함께 KR-20 공식을 개발하여 이분 문항의 내적 합치도 추정 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "크론바흐 알파",
        "name_en": "Cronbach's Alpha",
        "id": "MEASURE_CA_015"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "반분 신뢰도",
        "name_en": "Split-Half Reliability",
        "id": "MEASURE_SH_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내적 합치(合致) = 안쪽(문항들)이 서로 맞아떨어진다",
      "differential": "내적 합치도는 문항 간 일관성(한 시점), 검사-재검사 신뢰도는 시간 간 안정성(두 시점)이다.",
      "key_point": "내적 합치도가 높다는 것은 문항들이 동질적으로 같은 것을 측정하고 있다는 의미이다.",
      "common_mistake": "내적 합치도만으로 검사의 전체 신뢰도가 충분하다고 판단하는 것. 시간적 안정성도 별도로 확인해야 한다."
    }
  },
  {
    "id": "MEASURE_CK_025",
    "terminology": "코헨의 카파 (Cohen's Kappa)",
    "terminology_ko": "코헨의 카파",
    "terminology_en": "Cohen's Kappa",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "두 평정자가 범주형 데이터를 분류할 때 우연에 의한 일치를 보정하여 실제 일치도를 나타내는 계수로, -1에서 1 사이의 값을 갖는다.",
    "definition_en": "A coefficient measuring inter-rater agreement for categorical data, correcting for chance agreement, with values ranging from -1 to 1.",
    "significance": "임상 진단, 행동 코딩, 내용분석 등에서 평가자 간 일치도의 표준 지표로 사용되며, 단순 일치율보다 엄밀한 평가를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "1960년 논문에서 우연 일치를 보정한 일치도 계수 κ를 제안하여 평정자 일치도 연구의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평정자간 신뢰도",
        "name_en": "Inter-Rater Reliability",
        "id": "MEASURE_IR_018"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "κ(카파) = 실제 일치 - 우연 일치 → 우연을 빼고 남은 '진짜 일치'",
      "differential": "코헨의 κ는 범주형 데이터의 일치도, 급내상관계수(ICC)는 연속형 데이터의 일치도이다.",
      "key_point": "일반적으로 κ ≥ .80이면 우수, .60~.79이면 상당, .40~.59이면 보통 수준의 일치도로 해석한다.",
      "common_mistake": "코헨의 카파(κ, 일치도)와 코헨의 d(효과크기)를 혼동하는 것. 이름은 같은 Jacob Cohen이 만들었지만 전혀 다른 지표이다."
    }
  },
  {
    "id": "MEASURE_OP_026",
    "terminology": "조작화 (Operationalization)",
    "terminology_ko": "조작화",
    "terminology_en": "Operationalization",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "추상적인 이론적 구성개념을 구체적이고 측정 가능한 지표나 절차로 변환하는 과정이다.",
    "definition_en": "The process of translating abstract theoretical constructs into specific, measurable indicators or procedures that can be observed and quantified.",
    "significance": "추상적 개념과 경험적 관찰을 연결하는 다리 역할을 하며, 조작화 없이는 심리적 구성개념을 과학적으로 연구할 수 없다.",
    "key_researchers": [
      {
        "name_ko": "퍼시 브리지먼",
        "name_en": "Percy W. Bridgman",
        "contribution": "조작주의(operationism)를 제안하여 개념을 측정 절차로 정의하는 철학적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 정의",
        "name_en": "Operational Definition",
        "id": "FOUND_OD_011"
      },
      {
        "name_ko": "측정",
        "name_en": "Measurement",
        "id": "MEASURE_MS_001"
      },
      {
        "name_ko": "구성타당도",
        "name_en": "Construct Validity",
        "id": "MEASURE_CV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조작화 = 추상→구체 → '불안'을 '심박수 증가, STAI 점수'로 바꾸는 것",
      "differential": "조작화는 개념→측정 절차로의 변환 과정, 조작적 정의는 그 변환의 결과물(정의문)이다.",
      "key_point": "하나의 구성개념에 여러 조작화가 가능하며, 조작화 방법에 따라 연구 결과가 달라질 수 있다.",
      "common_mistake": "하나의 조작화가 구성개념의 전체를 완벽히 포착한다고 생각하는 것. 조작화는 항상 개념의 일부만을 반영한다."
    }
  },
  {
    "id": "MEASURE_ME_027",
    "terminology": "측정오차 (Measurement Error)",
    "terminology_ko": "측정오차",
    "terminology_en": "Measurement Error",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정된 관찰값과 참값 사이의 차이로, 모든 측정에는 어느 정도의 오차가 수반된다.",
    "definition_en": "The difference between an observed measurement and the true value of what is being measured, inherent in all measurement processes.",
    "significance": "측정오차의 크기와 유형을 이해하는 것은 신뢰도 향상과 정확한 결과 해석의 기본 전제이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "고전검사이론에서 관찰점수 = 참점수 + 오차점수(X = T + E) 모형을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 오차",
        "name_en": "Systematic Error",
        "id": "MEASURE_SE_033"
      },
      {
        "name_ko": "무선오차",
        "name_en": "Random Error",
        "id": "MEASURE_RE_034"
      },
      {
        "name_ko": "참값",
        "name_en": "True Score",
        "id": "MEASURE_TS_030"
      },
      {
        "name_ko": "관찰점수",
        "name_en": "Observed Score",
        "id": "MEASURE_OS_031"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      }
    ],
    "sub_types": [
      {
        "name": "체계적 오차 (Systematic Error)",
        "description": "일정한 방향으로 편향되는 오차"
      },
      {
        "name": "무선오차 (Random Error)",
        "description": "무작위적으로 변동하는 오차"
      }
    ],
    "quiz_hints": {
      "mnemonic": "X = T + E (관찰점수 = 참점수 + 오차) → 고전검사이론의 기본 공식",
      "differential": "측정오차는 측정 도구의 불완전성에서 오고, 표본오차는 표본추출의 불완전성에서 온다.",
      "key_point": "무선오차는 신뢰도를 낮추고, 체계적 오차는 타당도를 위협한다.",
      "common_mistake": "측정오차를 완전히 제거할 수 있다고 생각하는 것. 측정오차는 줄일 수 있지만 완전히 없앨 수는 없다."
    }
  },
  {
    "id": "MEASURE_SD_028",
    "terminology": "의미변별 척도 (Semantic Differential Scale)",
    "terminology_ko": "의미변별 척도",
    "terminology_en": "Semantic Differential Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "양극의 형용사 쌍(예: 좋은-나쁜, 강한-약한) 사이에 일반적으로 7점 척도를 두어 대상에 대한 의미적 인상이나 태도를 측정하는 도구이다.",
    "definition_en": "A rating scale using bipolar adjective pairs (e.g., good-bad, strong-weak) typically with 7 points, designed to measure the semantic meaning or attitude toward an object.",
    "significance": "태도, 이미지, 개념의 내포적 의미를 체계적으로 측정할 수 있으며, 평가(evaluation), 잠재력(potency), 활동성(activity)의 3차원으로 분석된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 오스굿",
        "name_en": "Charles E. Osgood",
        "contribution": "1957년 의미변별법을 개발하고, EPA(평가-잠재력-활동성) 3차원 모형을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "리커트 척도",
        "name_en": "Likert Scale",
        "id": "MEASURE_LK_020"
      },
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      },
      {
        "name_ko": "서스톤 척도",
        "name_en": "Thurstone Scale",
        "id": "MEASURE_TH_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SD척도 = 양극 형용사 사이에서 위치 선택 (예: 좋은 ①②③④⑤⑥⑦ 나쁜)",
      "differential": "의미변별 척도는 양극 형용사 쌍을 사용하고, 리커트 척도는 진술문에 대한 동의 정도를 묻는다.",
      "key_point": "오스굿의 연구에서 의미 공간의 3대 차원은 평가(evaluation), 잠재력(potency), 활동성(activity)이다.",
      "common_mistake": "의미변별 척도를 단순한 양극 평정 도구로만 이해하는 것. 다차원적 의미 분석 도구이다."
    }
  },
  {
    "id": "MEASURE_TH_029",
    "terminology": "서스톤 척도 (Thurstone Scale)",
    "terminology_ko": "서스톤 척도",
    "terminology_en": "Thurstone Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "전문가 판단을 거쳐 동일 간격으로 배열된 진술문들로 구성되는 태도 측정 척도로, 응답자가 동의하는 진술문의 척도값 중앙값이 태도 점수가 된다.",
    "definition_en": "An attitude measurement scale consisting of statements arranged at equal intervals by expert judges, where a respondent's attitude score is the median scale value of endorsed statements.",
    "significance": "최초의 체계적 태도 측정 방법으로, 등간척도 수준의 태도 측정을 목표로 한 선구적 접근이었다.",
    "key_researchers": [
      {
        "name_ko": "루이스 서스턴",
        "name_en": "Louis Leon Thurstone",
        "contribution": "1928년 등현간격법(method of equal-appearing intervals)을 개발하여 태도의 양적 측정 방법을 최초로 확립했다."
      },
      {
        "name_ko": "어니스트 체이브",
        "name_en": "Ernest J. Chave",
        "contribution": "서스턴과 함께 태도 척도 제작의 구체적 절차를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "리커트 척도",
        "name_en": "Likert Scale",
        "id": "MEASURE_LK_020"
      },
      {
        "name_ko": "의미변별 척도",
        "name_en": "Semantic Differential Scale",
        "id": "MEASURE_SD_028"
      },
      {
        "name_ko": "거트만 척도",
        "name_en": "Guttman Scale",
        "id": "MEASURE_GT_035"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "서스톤 = '전문가가 등간격으로 배열한' 진술문 → 등현간격법",
      "differential": "서스톤 척도는 전문가가 문항을 등간격 배열, 리커트 척도는 응답자가 동의 정도를 평정한다.",
      "key_point": "제작에 많은 시간과 전문가가 필요하여 리커트 척도보다 실용성이 떨어지지만, 이론적으로 등간척도에 더 가깝다.",
      "common_mistake": "서스톤 척도가 리커트 척도처럼 동의-반대 연속선에서 응답하는 것으로 오해하는 것."
    }
  },
  {
    "id": "MEASURE_TS_030",
    "terminology": "참값 (True Score)",
    "terminology_ko": "참값",
    "terminology_en": "True Score",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "동일한 검사를 무한히 반복 실시했을 때 얻어지는 관찰점수들의 이론적 평균으로, 오차가 제거된 순수한 점수를 의미한다.",
    "definition_en": "The theoretical average of an infinite number of repeated measurements of the same attribute, representing the error-free score in classical test theory.",
    "significance": "고전검사이론(CTT)의 핵심 개념으로, X = T + E(관찰점수 = 참점수 + 오차) 모형의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "참점수 모형(true score model)을 제안하여 고전검사이론의 수학적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰점수",
        "name_en": "Observed Score",
        "id": "MEASURE_OS_031"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "측정의 표준오차",
        "name_en": "Standard Error of Measurement",
        "id": "MEASURE_SEM_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "참값 = 무한 반복의 평균 → 오차가 모두 상쇄되어 남은 '진짜 점수'",
      "differential": "참값은 이론적 개념(직접 관찰 불가), 관찰점수는 실제로 얻어지는 측정값이다.",
      "key_point": "참값은 직접 관찰할 수 없는 이론적 개념이며, 신뢰도를 통해 간접적으로 추정한다.",
      "common_mistake": "참값이 실제로 관찰하거나 측정할 수 있다고 생각하는 것. 참값은 이론적 구성 개념이다."
    }
  },
  {
    "id": "MEASURE_OS_031",
    "terminology": "관찰점수 (Observed Score)",
    "terminology_ko": "관찰점수",
    "terminology_en": "Observed Score",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사를 실시하여 실제로 얻어지는 점수로, 고전검사이론에서 참점수와 오차점수의 합(X = T + E)으로 정의된다.",
    "definition_en": "The actual score obtained from administering a test, defined in classical test theory as the sum of the true score and error score (X = T + E).",
    "significance": "모든 실제 연구에서 분석되는 데이터는 관찰점수이며, 이것이 참점수에 얼마나 가까운지가 측정의 질을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "관찰점수를 참점수와 오차의 합으로 분해하는 고전검사이론 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "참값",
        "name_en": "True Score",
        "id": "MEASURE_TS_030"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관찰점수 X = T(참) + E(오차) → 우리가 실제로 '관찰'하는 점수",
      "differential": "관찰점수는 실제 측정값(오차 포함), 참값은 이론적 순수 점수(오차 제거)이다.",
      "key_point": "관찰점수에는 항상 측정오차가 포함되어 있으므로, 단일 관찰점수를 참점수와 동일시해서는 안 된다.",
      "common_mistake": "관찰점수를 곧바로 참값으로 해석하는 것. 관찰점수에는 항상 오차가 포함되어 있다."
    }
  },
  {
    "id": "MEASURE_ST_032",
    "terminology": "표준화 (Standardization)",
    "terminology_ko": "표준화",
    "terminology_en": "Standardization",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "검사의 실시, 채점, 해석 절차를 일관되게 통일하여 모든 수검자에게 동일한 조건을 보장하는 과정이며, 규준 집단의 점수 분포를 확립하는 것을 포함한다.",
    "definition_en": "The process of establishing uniform procedures for administering, scoring, and interpreting a test, ensuring all examinees are tested under the same conditions, including establishing norm group score distributions.",
    "significance": "서로 다른 시간, 장소, 검사자에 의해 실시되어도 비교 가능한 결과를 산출할 수 있게 하여 검사의 객관성을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "최초의 표준화된 지능검사를 개발하여 검사 표준화의 실질적 선례를 만들었다."
      },
      {
        "name_ko": "루이스 터만",
        "name_en": "Lewis Terman",
        "contribution": "스탠포드-비네 지능검사를 미국에서 표준화하여 대규모 규준 확립의 모범을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "측정",
        "name_en": "Measurement",
        "id": "MEASURE_MS_001"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표준화 = '같은 조건, 같은 절차' → 누가, 언제 실시해도 동일한 조건 보장",
      "differential": "표준화는 절차의 통일과 규준 확립 과정이고, 표준점수(z점수 등)는 표준화된 점수 변환이다.",
      "key_point": "표준화에는 실시 절차의 통일(검사 표준화)과 규준 집단 확립(규준 표준화) 두 가지 측면이 있다.",
      "common_mistake": "표준화와 정규화(normalization)를 혼동하는 것. 표준화는 절차 통일, 정규화는 분포 변환이다."
    }
  },
  {
    "id": "MEASURE_SE_033",
    "terminology": "체계적 오차 (Systematic Error)",
    "terminology_ko": "체계적 오차",
    "terminology_en": "Systematic Error",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정값을 특정 방향으로 일관되게 편향시키는 오차로, 반복 측정해도 상쇄되지 않고 동일한 방향으로 영향을 미친다.",
    "definition_en": "An error that consistently biases measurements in one direction, remaining constant across repeated measurements and not canceling out.",
    "significance": "체계적 오차는 신뢰도에는 영향을 주지 않지만 타당도를 직접적으로 위협하므로, 연구 설계와 측정 도구에서 통제해야 한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "측정 오차를 체계적 오차와 무선 오차로 구분하는 고전검사이론의 틀을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선오차",
        "name_en": "Random Error",
        "id": "MEASURE_RE_034"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      },
      {
        "name_ko": "타당도",
        "name_en": "Validity",
        "id": "MEASURE_VD_012"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체계적 = '한 방향으로만' → 저울이 항상 50g 더 무겁게 재는 것",
      "differential": "체계적 오차는 일정 방향 편향(타당도 위협), 무선오차는 무작위 변동(신뢰도 위협)이다.",
      "key_point": "체계적 오차는 반복 측정으로 줄일 수 없으며, 오차 원인을 찾아 제거해야 한다.",
      "common_mistake": "표본 크기를 늘리면 체계적 오차가 줄어든다고 생각하는 것. 체계적 오차는 표본 크기와 무관하다."
    }
  },
  {
    "id": "MEASURE_RE_034",
    "terminology": "무선오차 (Random Error)",
    "terminology_ko": "무선오차",
    "terminology_en": "Random Error",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "측정값을 예측 불가능한 방향으로 변동시키는 오차로, 반복 측정 시 양의 방향과 음의 방향으로 무작위적으로 나타나 장기적으로 상쇄된다.",
    "definition_en": "Unpredictable fluctuations in measurement that vary randomly in both positive and negative directions, tending to cancel out over many repeated measurements.",
    "significance": "무선오차는 측정의 신뢰도를 낮추는 주요 원인이며, 반복 측정이나 문항 수 증가를 통해 영향을 줄일 수 있다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "고전검사이론에서 무선오차의 속성(평균 0, 참점수와 독립)을 수학적으로 정의했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 오차",
        "name_en": "Systematic Error",
        "id": "MEASURE_SE_033"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      },
      {
        "name_ko": "신뢰도",
        "name_en": "Reliability",
        "id": "MEASURE_RL_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무선(無線/random) = '무작위' → 이리저리 흔들리는 오차, 평균 내면 0에 수렴",
      "differential": "무선오차는 신뢰도를 낮추고, 체계적 오차는 타당도를 낮춘다.",
      "key_point": "고전검사이론에서 무선오차의 기대값은 0이고, 참점수와 상관이 없다고 가정한다.",
      "common_mistake": "무선오차가 곧 부정확함이라고 생각하는 것. 무선오차는 평균적으로 상쇄되므로 많은 관찰의 평균은 참값에 수렴한다."
    }
  },
  {
    "id": "MEASURE_GT_035",
    "terminology": "거트만 척도 (Guttman Scale)",
    "terminology_ko": "거트만 척도",
    "terminology_en": "Guttman Scale",
    "category": "MEASURE",
    "category_name": "측정과 척도 (Measurement & Scales)",
    "definition": "문항들이 누적적 계층 구조를 이루어, 어려운 문항에 동의하면 쉬운 문항에도 반드시 동의하게 되는 단일 차원의 누적 척도이다.",
    "definition_en": "A cumulative scale in which items form a hierarchical order, such that endorsement of a more difficult item implies endorsement of all easier items, representing a unidimensional construct.",
    "significance": "측정의 단일차원성(unidimensionality)을 검증하는 데 유용하며, 재현계수를 통해 척도의 누적 구조를 확인할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "루이스 거트만",
        "name_en": "Louis Guttman",
        "contribution": "1950년 누적 척도법(scalogram analysis)을 개발하여 단일 차원 측정의 엄격한 기준을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "리커트 척도",
        "name_en": "Likert Scale",
        "id": "MEASURE_LK_020"
      },
      {
        "name_ko": "서스톤 척도",
        "name_en": "Thurstone Scale",
        "id": "MEASURE_TH_029"
      },
      {
        "name_ko": "척도",
        "name_en": "Scale",
        "id": "MEASURE_SC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "거트만 = '누적 계단' → 3단계 올라갔으면 1, 2단계는 이미 올라간 것",
      "differential": "거트만 척도는 누적적 계층 구조(어려운 것에 동의→쉬운 것도 동의), 리커트 척도는 동의 정도 평정이다.",
      "key_point": "재현계수(coefficient of reproducibility)가 .90 이상이면 거트만 척도 구조가 성립한다고 판단한다.",
      "common_mistake": "모든 태도가 누적 구조를 가진다고 가정하는 것. 거트만 척도는 단일차원적 개념에만 적합하다."
    }
  }
];

TERMS_DATA.SAMPLE = [
  {
    "id": "SAMPLE_PO_001",
    "terminology": "모집단 (Population)",
    "terminology_ko": "모집단",
    "terminology_en": "Population",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "연구자가 관심을 갖고 결론을 일반화하고자 하는 대상 전체의 집합으로, 특정 특성을 공유하는 모든 개체를 포함한다.",
    "definition_en": "The entire set of individuals or objects that share a defined characteristic and to which the researcher intends to generalize research findings.",
    "significance": "통계적 추론의 목표가 되는 대상 전체를 정의하며, 모집단의 명확한 규정 없이는 연구 결과의 일반화 범위를 판단할 수 없다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "모집단과 표본의 구분을 체계화하고 표본에서 모집단을 추론하는 통계적 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      },
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "모평균",
        "name_en": "Population Mean",
        "id": "SAMPLE_PM_022"
      },
      {
        "name_ko": "외적 타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      }
    ],
    "sub_types": [
      {
        "name": "목표 모집단 (Target Population)",
        "description": "연구자가 궁극적으로 결론을 적용하고자 하는 전체 집단"
      },
      {
        "name": "접근 가능 모집단 (Accessible Population)",
        "description": "연구자가 실제로 접근하여 표본을 추출할 수 있는 집단"
      }
    ],
    "quiz_hints": {
      "mnemonic": "모집단(母集團) = 어머니 집단 → 표본의 '모체'가 되는 전체 집단",
      "differential": "모집단은 관심 대상 전체, 표본은 모집단에서 선택된 부분집합이다.",
      "key_point": "모집단은 연구 목적에 따라 정의되며, 목표 모집단과 접근 가능 모집단이 다를 수 있다.",
      "common_mistake": "모집단을 항상 매우 큰 집단으로만 생각하는 것. 모집단은 연구 질문에 따라 작을 수도 있다."
    }
  },
  {
    "id": "SAMPLE_SM_002",
    "terminology": "표본 (Sample)",
    "terminology_ko": "표본",
    "terminology_en": "Sample",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단에서 실제로 선택된 개체들의 부분집합으로, 이를 통해 모집단의 특성을 추론하기 위한 연구 대상이 된다.",
    "definition_en": "A subset of individuals selected from a population, used to make inferences about the characteristics of the entire population.",
    "significance": "모집단 전체를 조사하는 것은 대부분 비현실적이므로, 표본을 통한 추론이 심리학 연구의 기본 방법론이 된다.",
    "key_researchers": [
      {
        "name_ko": "예르지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "표본 기반 모집단 추론의 이론적 기초인 신뢰구간 개념을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      },
      {
        "name_ko": "표집",
        "name_en": "Sampling",
        "id": "SAMPLE_SP_003"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      },
      {
        "name_ko": "통계량",
        "name_en": "Statistic",
        "id": "SAMPLE_ST_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표본(標本) = 대표 본보기 → 모집단의 특성을 보여주는 '본보기'",
      "differential": "표본은 실제 선택된 대상들, 표집은 대상을 선택하는 과정이다.",
      "key_point": "표본은 모집단을 대표해야 하며, 대표성이 없는 표본에서 얻은 결론은 일반화할 수 없다.",
      "common_mistake": "표본 크기만 크면 대표성이 보장된다고 생각하는 것. 표집 방법이 편향되면 큰 표본도 대표적이지 않다."
    }
  },
  {
    "id": "SAMPLE_SP_003",
    "terminology": "표집 (Sampling)",
    "terminology_ko": "표집",
    "terminology_en": "Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단에서 표본을 선택하는 체계적인 과정으로, 확률표집과 비확률표집으로 크게 구분된다.",
    "definition_en": "The systematic process of selecting a subset of individuals from a population, broadly categorized into probability and non-probability sampling methods.",
    "significance": "표집 방법에 따라 연구 결과의 일반화 가능성과 통계적 추론의 타당성이 결정되므로, 연구 설계의 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "예르지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "확률 표집에 기반한 추론 이론을 발전시켜 현대 표집 방법론의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      },
      {
        "name_ko": "비확률표집",
        "name_en": "Non-Probability Sampling",
        "id": "SAMPLE_NP_009"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      },
      {
        "name_ko": "표본추출틀",
        "name_en": "Sampling Frame",
        "id": "SAMPLE_SF_031"
      }
    ],
    "sub_types": [
      {
        "name": "확률표집 (Probability Sampling)",
        "description": "모집단의 각 개체가 선택될 확률이 알려진 표집 방법"
      },
      {
        "name": "비확률표집 (Non-Probability Sampling)",
        "description": "선택 확률이 알려지지 않은 표집 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "표집(標集) = 표본을 모으는 것 → 모집단에서 표본을 '뽑는' 과정",
      "differential": "표집(sampling)은 표본을 선택하는 과정, 표본(sample)은 선택된 결과물이다.",
      "key_point": "확률표집만이 통계적 추론의 정당한 근거를 제공하며, 비확률표집은 일반화에 제한이 있다.",
      "common_mistake": "표집과 표본을 혼용하는 것. 표집은 '과정', 표본은 '결과'이다."
    }
  },
  {
    "id": "SAMPLE_RS_004",
    "terminology": "무선표집 (Random Sampling)",
    "terminology_ko": "무선표집",
    "terminology_en": "Random Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 모든 개체가 표본에 선택될 동일한 확률을 갖도록 하는 표집 방법으로, 표본의 대표성을 확보하는 가장 기본적인 방법이다.",
    "definition_en": "A sampling method in which every member of the population has an equal probability of being selected, serving as the fundamental approach for ensuring sample representativeness.",
    "significance": "통계적 추론의 기본 가정을 충족하며, 표집 편향을 최소화하여 연구 결과의 일반화 가능성을 극대화한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화 원리를 실험 설계와 표집에 도입하여 통계적 추론의 기반을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순무선표집",
        "name_en": "Simple Random Sampling",
        "id": "SAMPLE_SR_005"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "표집",
        "name_en": "Sampling",
        "id": "SAMPLE_SP_003"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무선(無線/random) = 규칙 없이 무작위 → 모든 개체에게 같은 기회 부여",
      "differential": "무선표집(random sampling)은 모집단→표본 선택, 무선할당(random assignment)은 표본→조건 배정이다.",
      "key_point": "무선표집은 외적 타당도(일반화), 무선할당은 내적 타당도(인과관계)와 관련된다.",
      "common_mistake": "무선표집과 무선할당을 혼동하는 것. 표집은 '누구를 뽑을까', 할당은 '누구를 어디에 넣을까'이다."
    }
  },
  {
    "id": "SAMPLE_SR_005",
    "terminology": "단순무선표집 (Simple Random Sampling)",
    "terminology_ko": "단순무선표집",
    "terminology_en": "Simple Random Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 모든 개체와 모든 가능한 표본 조합이 동일한 선택 확률을 갖는 가장 기본적인 확률표집 방법이다.",
    "definition_en": "The most basic probability sampling method in which every individual and every possible combination of individuals has an equal chance of being selected from the population.",
    "significance": "다른 표집 방법의 기준이 되는 기본 방법으로, 표본분포 이론의 수학적 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화 원리에 기반한 표집 방법의 이론적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      },
      {
        "name_ko": "층화표집",
        "name_en": "Stratified Sampling",
        "id": "SAMPLE_SS_007"
      },
      {
        "name_ko": "체계적 표집",
        "name_en": "Systematic Sampling",
        "id": "SAMPLE_SY_006"
      },
      {
        "name_ko": "표본추출틀",
        "name_en": "Sampling Frame",
        "id": "SAMPLE_SF_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단순무선 = 가장 '단순'한 무작위 뽑기 → 모든 조합이 같은 확률",
      "differential": "단순무선표집은 모든 개체가 독립적으로 동일 확률, 층화표집은 하위집단별로 표집한다.",
      "key_point": "난수표나 컴퓨터 난수 생성기를 사용하며, 모집단 목록(표본추출틀)이 반드시 필요하다.",
      "common_mistake": "편의적으로 선택한 표본을 '무작위'라고 주장하는 것. 체계적 절차 없이는 단순무선표집이 아니다."
    }
  },
  {
    "id": "SAMPLE_SY_006",
    "terminology": "체계적 표집 (Systematic Sampling)",
    "terminology_ko": "체계적 표집",
    "terminology_en": "Systematic Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단 목록에서 무선적 시작점을 정한 후, 일정한 간격(k번째)마다 개체를 선택하는 표집 방법이다.",
    "definition_en": "A sampling method in which individuals are selected at regular intervals (every kth individual) from a population list, starting from a randomly chosen point.",
    "significance": "단순무선표집보다 실행이 간편하면서도 유사한 대표성을 확보할 수 있어 실무에서 많이 사용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 코크런",
        "name_en": "William G. Cochran",
        "contribution": "체계적 표집의 통계적 특성과 적용 조건을 체계적으로 분석하여 표집 이론에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순무선표집",
        "name_en": "Simple Random Sampling",
        "id": "SAMPLE_SR_005"
      },
      {
        "name_ko": "표집",
        "name_en": "Sampling",
        "id": "SAMPLE_SP_003"
      },
      {
        "name_ko": "표본추출틀",
        "name_en": "Sampling Frame",
        "id": "SAMPLE_SF_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체계적 = '규칙적 간격' → 매 k번째 사람을 뽑는 방법 (예: 10번째마다)",
      "differential": "체계적 표집은 일정 간격으로 추출, 단순무선표집은 완전히 무작위로 추출한다.",
      "key_point": "모집단 목록에 주기적 패턴이 있으면 편향된 표본이 될 수 있으므로, 목록의 배열을 사전에 확인해야 한다.",
      "common_mistake": "모집단 목록이 특정 패턴으로 정렬되어 있을 때 체계적 표집을 사용하면 편향이 발생할 수 있다."
    }
  },
  {
    "id": "SAMPLE_SS_007",
    "terminology": "층화표집 (Stratified Sampling)",
    "terminology_ko": "층화표집",
    "terminology_en": "Stratified Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단을 상호배타적인 하위집단(층, stratum)으로 나눈 후, 각 층에서 독립적으로 무선표집하는 방법이다.",
    "definition_en": "A sampling method that divides the population into mutually exclusive subgroups (strata) and independently draws random samples from each stratum.",
    "significance": "주요 하위집단이 표본에 적절히 대표되도록 보장하며, 단순무선표집보다 표집 오차를 줄일 수 있다.",
    "key_researchers": [
      {
        "name_ko": "예르지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "최적 배분법(optimal allocation)을 개발하여 층화표집의 효율성을 극대화하는 이론을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순무선표집",
        "name_en": "Simple Random Sampling",
        "id": "SAMPLE_SR_005"
      },
      {
        "name_ko": "군집표집",
        "name_en": "Cluster Sampling",
        "id": "SAMPLE_CS_008"
      },
      {
        "name_ko": "할당표집",
        "name_en": "Quota Sampling",
        "id": "SAMPLE_QS_011"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      }
    ],
    "sub_types": [
      {
        "name": "비례층화표집 (Proportional Stratified Sampling)",
        "description": "각 층의 모집단 비율에 맞게 표본 수를 배분하는 방법"
      },
      {
        "name": "불비례층화표집 (Disproportional Stratified Sampling)",
        "description": "특정 층의 표본 수를 의도적으로 늘리거나 줄이는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "층화(層化) = 층(layer)으로 나눈다 → 성별, 연령 등으로 '층'을 나눠 각 층에서 뽑기",
      "differential": "층화표집은 각 '층 안에서' 무선 추출, 군집표집은 '군집 자체를' 무선 추출한다.",
      "key_point": "층화 변인은 연구 변인과 관련이 있어야 효과적이며, 층 간 이질성이 크고 층 내 동질성이 높을 때 유리하다.",
      "common_mistake": "층화표집과 할당표집을 혼동하는 것. 층화표집은 확률표집(각 층 내 무선), 할당표집은 비확률표집이다."
    }
  },
  {
    "id": "SAMPLE_CS_008",
    "terminology": "군집표집 (Cluster Sampling)",
    "terminology_ko": "군집표집",
    "terminology_en": "Cluster Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단을 자연적 집단(군집)으로 나눈 후, 군집 자체를 무선적으로 선택하고 선택된 군집의 모든 개체를 조사하는 표집 방법이다.",
    "definition_en": "A sampling method that divides the population into naturally occurring groups (clusters), randomly selects entire clusters, and surveys all individuals within the chosen clusters.",
    "significance": "모집단이 광범위하게 분포되어 있을 때 경제적이고 실용적인 표집 방법으로, 대규모 조사 연구에서 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 코크런",
        "name_en": "William G. Cochran",
        "contribution": "군집표집의 이론적 기초와 설계 효과(design effect) 개념을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "층화표집",
        "name_en": "Stratified Sampling",
        "id": "SAMPLE_SS_007"
      },
      {
        "name_ko": "단순무선표집",
        "name_en": "Simple Random Sampling",
        "id": "SAMPLE_SR_005"
      },
      {
        "name_ko": "표집",
        "name_en": "Sampling",
        "id": "SAMPLE_SP_003"
      }
    ],
    "sub_types": [
      {
        "name": "단일단계 군집표집 (Single-Stage Cluster Sampling)",
        "description": "선택된 군집의 모든 개체를 조사"
      },
      {
        "name": "다단계 군집표집 (Multi-Stage Cluster Sampling)",
        "description": "선택된 군집에서 다시 하위 표집을 실시"
      }
    ],
    "quiz_hints": {
      "mnemonic": "군집(群集) = 무리 → 학교, 병원 등 '무리(군집)' 단위로 통째로 선택",
      "differential": "군집표집은 군집 자체를 무선 선택(군집 간 추출), 층화표집은 모든 층에서 개체를 추출(층 내 추출)한다.",
      "key_point": "군집 내 이질성이 크고 군집 간 동질성이 높을 때 효율적이다 (층화표집과 정반대).",
      "common_mistake": "군집표집이 층화표집과 같다고 생각하는 것. 둘은 추출 단위와 논리가 정반대이다."
    }
  },
  {
    "id": "SAMPLE_NP_009",
    "terminology": "비확률표집 (Non-Probability Sampling)",
    "terminology_ko": "비확률표집",
    "terminology_en": "Non-Probability Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 각 개체가 표본에 선택될 확률이 알려지지 않거나 동일하지 않은 표집 방법의 총칭이다.",
    "definition_en": "A general term for sampling methods in which the probability of each population member being selected is unknown or unequal.",
    "significance": "확률표집이 어려운 현실적 상황에서 자주 사용되지만, 통계적 추론의 기본 가정을 충족하지 않아 일반화에 제한이 있다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 코크런",
        "name_en": "William G. Cochran",
        "contribution": "확률표집과 비확률표집의 통계적 특성 차이를 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편의표집",
        "name_en": "Convenience Sampling",
        "id": "SAMPLE_CV_010"
      },
      {
        "name_ko": "할당표집",
        "name_en": "Quota Sampling",
        "id": "SAMPLE_QS_011"
      },
      {
        "name_ko": "눈덩이표집",
        "name_en": "Snowball Sampling",
        "id": "SAMPLE_SB_012"
      },
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      }
    ],
    "sub_types": [
      {
        "name": "편의표집 (Convenience Sampling)",
        "description": "접근하기 쉬운 대상을 선택하는 방법"
      },
      {
        "name": "할당표집 (Quota Sampling)",
        "description": "하위집단 비율에 맞춰 비무선적으로 선택하는 방법"
      },
      {
        "name": "눈덩이표집 (Snowball Sampling)",
        "description": "참여자가 다른 참여자를 소개하는 방법"
      },
      {
        "name": "목적적 표집 (Purposive Sampling)",
        "description": "연구 목적에 부합하는 대상을 의도적으로 선택하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비(非)확률 = 확률이 '아닌' → 선택 확률을 모르거나 동일하지 않은 표집",
      "differential": "비확률표집은 선택 확률 불명, 확률표집은 모든 개체의 선택 확률이 알려져 있다.",
      "key_point": "비확률표집으로 수집한 데이터에 확률 기반 추론 통계를 적용하면 엄밀히 논리적 근거가 부족하다.",
      "common_mistake": "비확률표집 결과를 모집단 전체에 일반화하는 것. 표집 편향의 가능성을 항상 고려해야 한다."
    }
  },
  {
    "id": "SAMPLE_CV_010",
    "terminology": "편의표집 (Convenience Sampling)",
    "terminology_ko": "편의표집",
    "terminology_en": "Convenience Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "연구자가 접근하기 쉽고 이용 가능한 대상을 편의적으로 선택하는 비확률표집 방법이다.",
    "definition_en": "A non-probability sampling method in which participants are selected based on their availability and accessibility to the researcher.",
    "significance": "심리학 연구에서 가장 흔히 사용되지만 표집 편향의 위험이 가장 높으며, 특히 대학생 표본에 대한 비판이 지속되고 있다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 시어스",
        "name_en": "David O. Sears",
        "contribution": "1986년 논문에서 심리학 연구의 대학생 편의표집 편향 문제를 체계적으로 비판했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비확률표집",
        "name_en": "Non-Probability Sampling",
        "id": "SAMPLE_NP_009"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      },
      {
        "name_ko": "외적 타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편의(便宜) = 편하고 쉬운 → 가까이 있는 사람을 '편하게' 뽑는 것",
      "differential": "편의표집은 접근성만 고려, 목적적 표집은 연구 목적에 맞는 특성을 의도적으로 선택한다.",
      "key_point": "심리학 연구의 약 70%가 대학생 편의표본을 사용하며, 이는 일반화의 심각한 제한이다.",
      "common_mistake": "편의표집의 한계를 인식하지 않고 결과를 일반 인구에 무조건 일반화하는 것."
    }
  },
  {
    "id": "SAMPLE_QS_011",
    "terminology": "할당표집 (Quota Sampling)",
    "terminology_ko": "할당표집",
    "terminology_en": "Quota Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 주요 특성(성별, 연령 등)의 비율에 맞추어 각 하위집단에서 일정 수의 대상을 비무선적으로 선택하는 표집 방법이다.",
    "definition_en": "A non-probability sampling method in which predetermined quotas are set for key demographic categories to match population proportions, with individuals selected non-randomly within each category.",
    "significance": "층화표집이 불가능할 때 모집단의 인구통계학적 구성을 반영하려는 실용적 대안이지만, 각 층 내에서의 편향은 통제하지 못한다.",
    "key_researchers": [
      {
        "name_ko": "조지 갤럽",
        "name_en": "George Gallup",
        "contribution": "여론조사에서 할당표집 방법론을 체계화하고 대중화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "층화표집",
        "name_en": "Stratified Sampling",
        "id": "SAMPLE_SS_007"
      },
      {
        "name_ko": "비확률표집",
        "name_en": "Non-Probability Sampling",
        "id": "SAMPLE_NP_009"
      },
      {
        "name_ko": "편의표집",
        "name_en": "Convenience Sampling",
        "id": "SAMPLE_CV_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "할당(割當) = 몫을 나눈다 → 남:여 = 50:50처럼 '몫'을 정해놓고 채우는 방식",
      "differential": "할당표집은 비확률표집(층 내 비무선), 층화표집은 확률표집(층 내 무선)이다.",
      "key_point": "인구통계학적 비율은 맞출 수 있지만, 각 할당 내에서의 선택이 무선적이지 않아 편향이 발생할 수 있다.",
      "common_mistake": "할당표집을 층화표집과 같다고 생각하는 것. 가장 큰 차이는 층 내에서의 무선 추출 여부이다."
    }
  },
  {
    "id": "SAMPLE_SB_012",
    "terminology": "눈덩이표집 (Snowball Sampling)",
    "terminology_ko": "눈덩이표집",
    "terminology_en": "Snowball Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "초기 참여자가 동일 특성을 가진 다른 잠재적 참여자를 소개하는 방식으로 표본을 점차 확대해 나가는 비확률표집 방법이다.",
    "definition_en": "A non-probability sampling method in which existing participants recruit additional participants who share the same characteristics, gradually expanding the sample like a growing snowball.",
    "significance": "약물 사용자, 성소수자 등 접근이 어려운 은닉 모집단(hidden population)을 연구할 때 특히 유용한 방법이다.",
    "key_researchers": [
      {
        "name_ko": "레오 굿맨",
        "name_en": "Leo A. Goodman",
        "contribution": "1961년 논문에서 눈덩이표집의 수학적 모형을 제시하고 분석 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비확률표집",
        "name_en": "Non-Probability Sampling",
        "id": "SAMPLE_NP_009"
      },
      {
        "name_ko": "편의표집",
        "name_en": "Convenience Sampling",
        "id": "SAMPLE_CV_010"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "눈덩이(snowball) = 굴릴수록 커진다 → 소개를 통해 표본이 '눈덩이'처럼 불어남",
      "differential": "눈덩이표집은 참여자가 참여자를 소개, 편의표집은 연구자가 접근 가능한 대상을 직접 선택한다.",
      "key_point": "사회적 네트워크에 기반하므로, 네트워크 밖의 고립된 개체는 포함되기 어렵다는 한계가 있다.",
      "common_mistake": "눈덩이표집으로 모집단 전체를 대표할 수 있다고 생각하는 것. 네트워크 편향이 불가피하다."
    }
  },
  {
    "id": "SAMPLE_SD_013",
    "terminology": "표본분포 (Sampling Distribution)",
    "terminology_ko": "표본분포",
    "terminology_en": "Sampling Distribution",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "동일한 모집단에서 동일한 크기의 표본을 무한히 반복 추출했을 때 얻어지는 통계량(예: 표본평균)의 이론적 확률분포이다.",
    "definition_en": "The theoretical probability distribution of a statistic (e.g., sample mean) obtained from all possible samples of the same size drawn from the same population.",
    "significance": "통계적 추론의 핵심 개념으로, 표본에서 계산한 통계량이 모수를 얼마나 잘 추정하는지를 판단하는 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "표본분포의 이론적 특성을 활용하여 현대 추론 통계학의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "표본평균",
        "name_en": "Sample Mean",
        "id": "SAMPLE_XB_023"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표본분포 = '통계량'의 분포 → 표본 자체의 분포가 아니라 '표본에서 구한 값(예: 평균)'의 분포",
      "differential": "표본분포는 통계량의 분포(이론적), 표본의 분포(data distribution)는 실제 표본 관찰값의 분포이다.",
      "key_point": "표본분포는 실제 데이터의 분포가 아닌, 반복 표집 시 통계량이 어떻게 분포하는지를 나타낸다.",
      "common_mistake": "표본분포를 표본 데이터 자체의 분포와 혼동하는 것. 표본분포는 '통계량'의 이론적 분포이다."
    }
  },
  {
    "id": "SAMPLE_SE_014",
    "terminology": "표준오차 (Standard Error)",
    "terminology_ko": "표준오차",
    "terminology_en": "Standard Error",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본분포의 표준편차로, 표본 통계량이 모수 주위에서 변동하는 정도를 나타내며, 표본평균의 경우 SE = σ/√n으로 계산한다.",
    "definition_en": "The standard deviation of a sampling distribution, indicating how much a sample statistic varies around the population parameter; for sample means, SE = σ/√n.",
    "significance": "통계적 검정과 신뢰구간 구성의 기초가 되며, 표본 크기가 커질수록 작아져 추정의 정밀도가 높아진다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "표준오차 개념을 통계적 추론의 핵심 요소로 체계화하고 다양한 통계량의 표준오차 공식을 도출했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SE = σ/√n → 표본 크기(n)의 제곱근에 반비례 → n이 4배면 SE는 반으로",
      "differential": "표준편차(SD)는 개별 관찰값의 변동성, 표준오차(SE)는 통계량의 변동성이다.",
      "key_point": "표준오차는 표본 크기의 제곱근에 반비례하므로, 정밀도를 2배로 높이려면 표본 크기를 4배로 늘려야 한다.",
      "common_mistake": "표준편차와 표준오차를 혼동하는 것. SD는 데이터의 퍼짐, SE는 추정값의 불확실성이다."
    }
  },
  {
    "id": "SAMPLE_CL_015",
    "terminology": "중심극한정리 (Central Limit Theorem)",
    "terminology_ko": "중심극한정리",
    "terminology_en": "Central Limit Theorem",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 분포 형태에 관계없이, 충분히 큰 표본(일반적으로 n ≥ 30)에서 추출한 표본평균의 분포는 정규분포에 근사한다는 정리이다.",
    "definition_en": "A theorem stating that the sampling distribution of the sample mean approaches a normal distribution as sample size increases, regardless of the population distribution shape, typically when n ≥ 30.",
    "significance": "모집단 분포를 모르더라도 표본 크기가 충분하면 정규분포 기반의 추론 통계를 적용할 수 있게 하는 통계학의 가장 중요한 정리이다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "중심극한정리의 초기 형태를 증명하여 큰 표본에서 합의 분포가 정규분포에 수렴함을 보였다."
      },
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "이항분포의 정규근사를 증명하여 중심극한정리의 선구적 연구를 수행했다."
      },
      {
        "name_ko": "알렉산드르 랴푸노프",
        "name_en": "Aleksandr Lyapunov",
        "contribution": "중심극한정리의 일반적 증명을 완성하여 현대적 형태를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CLT: 어떤 분포든 n이 크면 평균의 분포는 '중심'(정규분포)으로 '극한' 수렴",
      "differential": "중심극한정리는 표본평균의 분포가 정규분포에 근사한다는 것이며, 원래 데이터가 정규분포라는 뜻이 아니다.",
      "key_point": "n ≥ 30은 경험적 기준이며, 모집단이 극단적 비대칭이면 더 큰 표본이 필요할 수 있다.",
      "common_mistake": "중심극한정리가 '표본 크기가 크면 데이터 자체가 정규분포를 따른다'는 의미라고 오해하는 것."
    }
  },
  {
    "id": "SAMPLE_SZ_016",
    "terminology": "표본크기 (Sample Size)",
    "terminology_ko": "표본크기",
    "terminology_en": "Sample Size",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본에 포함된 개체(관찰값)의 수로, 통상 n으로 표기하며 통계적 검정력과 추정의 정밀도를 결정하는 핵심 요소이다.",
    "definition_en": "The number of observations or individuals included in a sample, denoted as n, which is a crucial factor determining statistical power and estimation precision.",
    "significance": "적절한 표본크기는 충분한 검정력을 확보하고 표준오차를 줄여 모수의 정밀한 추정을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "검정력 분석을 통한 사전 표본크기 결정 방법을 체계화하여 적절한 표본크기 계획의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "SAMPLE_DF_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "n = 표본크기 → n이 클수록 SE가 작아지고 검정력이 높아진다",
      "differential": "표본크기(n)는 표본 내 개체 수, 모집단크기(N)는 모집단 전체 개체 수이다.",
      "key_point": "표본크기는 효과크기, 유의수준, 검정력을 고려한 검정력 분석(power analysis)으로 사전에 계획해야 한다.",
      "common_mistake": "표본크기가 크기만 하면 좋다고 생각하는 것. 과도한 표본은 비용 낭비이고, 사소한 효과도 유의하게 만든다."
    }
  },
  {
    "id": "SAMPLE_BI_017",
    "terminology": "편향 (Bias)",
    "terminology_ko": "편향",
    "terminology_en": "Bias",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 통계량이 모집단 모수를 체계적으로 과대추정하거나 과소추정하는 경향으로, 표본이 모집단을 정확히 반영하지 못할 때 발생한다.",
    "definition_en": "A systematic tendency for a sample statistic to overestimate or underestimate the population parameter, occurring when the sample does not accurately represent the population.",
    "significance": "편향된 표본에서는 표본 크기를 아무리 늘려도 정확한 추정이 불가능하므로, 표집 방법의 설계 단계에서 편향을 방지해야 한다.",
    "key_researchers": [
      {
        "name_ko": "예르지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "표본 편향의 개념을 통계적으로 엄밀하게 정의하고 불편추정량(unbiased estimator)의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본오차",
        "name_en": "Sampling Error",
        "id": "SAMPLE_ER_018"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      },
      {
        "name_ko": "편의표집",
        "name_en": "Convenience Sampling",
        "id": "SAMPLE_CV_010"
      },
      {
        "name_ko": "체계적 오차",
        "name_en": "Systematic Error",
        "id": "MEASURE_SE_033"
      }
    ],
    "sub_types": [
      {
        "name": "선택 편향 (Selection Bias)",
        "description": "특정 유형의 개체가 표본에 과대/과소 대표되는 편향"
      },
      {
        "name": "응답 편향 (Response Bias)",
        "description": "응답자의 체계적 왜곡(사회적 바람직성 등)"
      },
      {
        "name": "생존자 편향 (Survivorship Bias)",
        "description": "탈락 없이 남은 대상만 분석하여 발생하는 편향"
      }
    ],
    "quiz_hints": {
      "mnemonic": "편향(偏向) = 한쪽으로 치우친다 → 추정값이 참값에서 체계적으로 빗나가는 것",
      "differential": "편향은 체계적 오차(방향성 있음), 표본오차는 무선적 변동(방향성 없음)이다.",
      "key_point": "편향은 표본 크기를 늘려도 해결되지 않으며, 표집 설계 자체를 개선해야 한다.",
      "common_mistake": "큰 표본이면 편향이 줄어든다고 생각하는 것. 표집 방법이 편향되면 표본 크기와 무관하게 편향이 존재한다."
    }
  },
  {
    "id": "SAMPLE_ER_018",
    "terminology": "표본오차 (Sampling Error)",
    "terminology_ko": "표본오차",
    "terminology_en": "Sampling Error",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 통계량과 모집단 모수 사이의 자연스러운 차이로, 모집단의 일부만을 관찰하기 때문에 필연적으로 발생하는 무선적 변동이다.",
    "definition_en": "The natural discrepancy between a sample statistic and the population parameter, inevitably arising from observing only a portion of the population.",
    "significance": "표본오차는 표본 연구의 본질적 한계이며, 표본 크기를 늘리면 줄일 수 있지만 완전히 제거할 수는 없다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "표본오차를 통계적 추론의 기본 개념으로 정립하고, 이를 다루는 수학적 방법론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비표본오차",
        "name_en": "Non-Sampling Error",
        "id": "SAMPLE_NE_019"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표본오차 = 표본이기 때문에 생기는 '자연스러운' 오차 → 뽑을 때마다 달라지는 것",
      "differential": "표본오차는 표본추출의 무선적 변동이고, 비표본오차는 측정, 응답, 처리 과정의 오류이다.",
      "key_point": "표본오차는 표본 크기를 늘리면 줄일 수 있지만, 비표본오차는 표본 크기와 무관하다.",
      "common_mistake": "표본오차를 연구자의 실수로 인한 오류와 혼동하는 것. 표본오차는 표집의 본질적 불확실성이다."
    }
  },
  {
    "id": "SAMPLE_NE_019",
    "terminology": "비표본오차 (Non-Sampling Error)",
    "terminology_ko": "비표본오차",
    "terminology_en": "Non-Sampling Error",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본추출 이외의 원인으로 발생하는 오차로, 측정 오류, 응답 거부, 데이터 입력 실수, 면접자 효과 등이 포함된다.",
    "definition_en": "Errors arising from sources other than sampling, including measurement mistakes, non-response, data entry errors, and interviewer effects.",
    "significance": "비표본오차는 표본 크기를 늘려도 줄어들지 않으며, 오히려 대규모 조사에서 관리가 어려워 증가할 수 있어 특별한 주의가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 코크런",
        "name_en": "William G. Cochran",
        "contribution": "표본오차와 비표본오차의 구분을 체계화하고 총 조사 오차(total survey error) 관점을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본오차",
        "name_en": "Sampling Error",
        "id": "SAMPLE_ER_018"
      },
      {
        "name_ko": "측정오차",
        "name_en": "Measurement Error",
        "id": "MEASURE_ME_027"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      }
    ],
    "sub_types": [
      {
        "name": "무응답 오차 (Non-Response Error)",
        "description": "응답을 거부한 대상과 응답한 대상의 차이에서 발생하는 오차"
      },
      {
        "name": "응답 오차 (Response Error)",
        "description": "부정확한 응답이나 기억 오류에서 발생하는 오차"
      },
      {
        "name": "처리 오차 (Processing Error)",
        "description": "데이터 입력, 코딩, 분석 과정에서 발생하는 오차"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비(非)표본오차 = 표집이 '아닌' 다른 원인의 오차 → 측정, 응답, 처리 문제",
      "differential": "비표본오차는 표본 크기와 무관하고 체계적일 수 있지만, 표본오차는 표본 크기가 커지면 감소한다.",
      "key_point": "비표본오차는 전수조사(census)에서도 발생할 수 있으며, 조사 품질 관리로 통제해야 한다.",
      "common_mistake": "표본 크기를 늘리면 모든 오차가 줄어든다고 생각하는 것. 비표본오차는 오히려 증가할 수 있다."
    }
  },
  {
    "id": "SAMPLE_PR_020",
    "terminology": "모수 (Parameter)",
    "terminology_ko": "모수",
    "terminology_en": "Parameter",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 특성을 나타내는 수치적 요약값으로, 일반적으로 고정된 상수이며 그리스 문자(μ, σ, ρ 등)로 표기한다.",
    "definition_en": "A numerical summary describing a characteristic of the population, typically a fixed constant denoted by Greek letters (μ, σ, ρ, etc.).",
    "significance": "통계적 추론의 궁극적 관심 대상으로, 표본에서 계산한 통계량을 통해 모수를 추정하거나 모수에 대한 가설을 검정한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "모수와 통계량의 개념을 체계적으로 구분하고 최대우도추정법 등 모수 추정 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계량",
        "name_en": "Statistic",
        "id": "SAMPLE_ST_021"
      },
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      },
      {
        "name_ko": "모평균",
        "name_en": "Population Mean",
        "id": "SAMPLE_PM_022"
      },
      {
        "name_ko": "모분산",
        "name_en": "Population Variance",
        "id": "SAMPLE_PV_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모수(母數) = 모집단의 수치 → μ(뮤), σ(시그마) 등 그리스 문자로 표기",
      "differential": "모수는 모집단의 고정된 값(보통 미지), 통계량은 표본에서 계산한 변동하는 값이다.",
      "key_point": "모수는 대부분 알 수 없는 값이며, 통계적 추론을 통해 추정하거나 검정한다.",
      "common_mistake": "모수를 표본 통계량과 혼동하는 것. 모수는 모집단 수준, 통계량은 표본 수준이다."
    }
  },
  {
    "id": "SAMPLE_ST_021",
    "terminology": "통계량 (Statistic)",
    "terminology_ko": "통계량",
    "terminology_en": "Statistic",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 데이터에서 계산된 수치적 요약값으로, 모수를 추정하는 데 사용되며 표본마다 다른 값을 가질 수 있다.",
    "definition_en": "A numerical summary calculated from sample data, used to estimate population parameters and varying from sample to sample.",
    "significance": "표본에서 직접 계산할 수 있는 유일한 수치로, 모수 추정과 가설 검정의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "충분통계량(sufficient statistic)의 개념을 도입하여 통계량의 효율적 추정 이론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "표본평균",
        "name_en": "Sample Mean",
        "id": "SAMPLE_XB_023"
      },
      {
        "name_ko": "표본분산",
        "name_en": "Sample Variance",
        "id": "SAMPLE_SV_025"
      },
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통계량 = 표본에서 '계산'한 수치 → x̄, s², r 등 로마 문자로 표기",
      "differential": "통계량은 표본에서 계산(변동값), 모수는 모집단의 특성(고정값)이다.",
      "key_point": "좋은 통계량(추정량)은 불편성, 효율성, 일치성, 충분성의 특성을 갖추어야 한다.",
      "common_mistake": "통계량이 항상 모수와 같다고 가정하는 것. 통계량은 표본마다 달라지는 변수이다."
    }
  },
  {
    "id": "SAMPLE_PM_022",
    "terminology": "모평균 (Population Mean)",
    "terminology_ko": "모평균",
    "terminology_en": "Population Mean",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단에 속한 모든 개체의 측정값의 산술평균으로, μ(뮤)로 표기하며 일반적으로 알 수 없는 고정된 모수이다.",
    "definition_en": "The arithmetic average of all values in the population, denoted by μ (mu), typically an unknown fixed parameter.",
    "significance": "가설검정에서 검정하고자 하는 핵심 모수이며, 표본평균을 통해 추정한다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "최소제곱법을 개발하여 모평균 추정의 수학적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본평균",
        "name_en": "Sample Mean",
        "id": "SAMPLE_XB_023"
      },
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "모분산",
        "name_en": "Population Variance",
        "id": "SAMPLE_PV_024"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모평균 = μ(뮤) → 모(母)집단의 평균, 그리스 문자로 표기",
      "differential": "모평균(μ)은 모집단 전체의 평균(고정값), 표본평균(x̄)은 표본에서 계산한 평균(변동값)이다.",
      "key_point": "모평균은 대부분 직접 알 수 없으며, 표본평균(x̄)이 모평균(μ)의 불편추정량이다.",
      "common_mistake": "모평균과 표본평균을 동일시하는 것. 표본평균은 모평균의 추정치일 뿐이다."
    }
  },
  {
    "id": "SAMPLE_XB_023",
    "terminology": "표본평균 (Sample Mean)",
    "terminology_ko": "표본평균",
    "terminology_en": "Sample Mean",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본에 포함된 관찰값들의 산술평균으로, x̄(x-bar)로 표기하며 모평균(μ)의 불편추정량이다.",
    "definition_en": "The arithmetic average of observed values in a sample, denoted as x̄ (x-bar), which serves as an unbiased estimator of the population mean (μ).",
    "significance": "모평균을 추정하는 가장 기본적인 통계량이며, 그 표본분포가 중심극한정리에 의해 정규분포에 근사한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "표본평균이 정규 모집단에서 모평균의 최대우도추정량이자 충분통계량임을 증명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모평균",
        "name_en": "Population Mean",
        "id": "SAMPLE_PM_022"
      },
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "x̄(x-bar) = 표본평균 → 로마 문자에 윗줄 = 표본 수준 통계량",
      "differential": "표본평균(x̄)은 표본에서 계산한 추정값, 모평균(μ)은 모집단의 참값이다.",
      "key_point": "표본평균의 기대값은 모평균과 같으므로(E(x̄) = μ) 불편추정량이다.",
      "common_mistake": "특정 표본평균이 반드시 모평균과 같다고 생각하는 것. 개별 표본평균은 모평균과 다를 수 있다."
    }
  },
  {
    "id": "SAMPLE_PV_024",
    "terminology": "모분산 (Population Variance)",
    "terminology_ko": "모분산",
    "terminology_en": "Population Variance",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단 내 모든 개체의 측정값이 모평균에서 벗어난 정도를 제곱하여 평균한 값으로, σ²(시그마 제곱)으로 표기한다.",
    "definition_en": "The average of squared deviations of all population values from the population mean, denoted as σ² (sigma squared).",
    "significance": "모집단의 변산성을 나타내는 기본 모수로, 표본분산을 통해 추정하며 분산분석 등 많은 통계 기법의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "분산의 개념을 처음 체계적으로 도입하고, 분산분석(ANOVA) 방법론을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본분산",
        "name_en": "Sample Variance",
        "id": "SAMPLE_SV_025"
      },
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "모평균",
        "name_en": "Population Mean",
        "id": "SAMPLE_PM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모분산 = σ² → N으로 나눈다 (모집단 전체이므로 N으로 나눔)",
      "differential": "모분산(σ²)은 N으로 나누고, 표본분산(s²)은 n-1로 나눈다(불편추정을 위해).",
      "key_point": "모분산은 대부분 알 수 없으며, 표본분산(s²)이 모분산의 불편추정량이 되려면 n-1로 나누어야 한다.",
      "common_mistake": "표본분산에서 n 대신 n-1로 나누는 이유를 이해하지 못하는 것. n으로 나누면 모분산을 체계적으로 과소추정한다."
    }
  },
  {
    "id": "SAMPLE_SV_025",
    "terminology": "표본분산 (Sample Variance)",
    "terminology_ko": "표본분산",
    "terminology_en": "Sample Variance",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 관찰값들이 표본평균에서 벗어난 정도를 제곱하여 합한 후 자유도(n-1)로 나눈 값으로, s²으로 표기하며 모분산의 불편추정량이다.",
    "definition_en": "The sum of squared deviations of sample values from the sample mean divided by degrees of freedom (n-1), denoted as s², serving as an unbiased estimator of population variance.",
    "significance": "모분산의 불편추정량으로서, t검정, 분산분석 등 대부분의 추론 통계에서 모분산 대신 사용된다.",
    "key_researchers": [
      {
        "name_ko": "프리드리히 베셀",
        "name_en": "Friedrich Bessel",
        "contribution": "표본분산에서 n-1로 나누는 베셀의 보정(Bessel's correction)을 제안하여 불편추정의 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모분산",
        "name_en": "Population Variance",
        "id": "SAMPLE_PV_024"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "SAMPLE_DF_027"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "표본평균",
        "name_en": "Sample Mean",
        "id": "SAMPLE_XB_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "s² = SS/(n-1) → 편차제곱합을 자유도로 나눈 것 (n이 아니라 n-1!)",
      "differential": "표본분산은 n-1로 나누어 불편추정, 모분산은 N으로 나눈다.",
      "key_point": "n-1로 나누는 이유는 표본평균을 사용하면서 자유도가 하나 줄어들기 때문이다(베셀의 보정).",
      "common_mistake": "표본분산을 구할 때 n으로 나누는 것. n으로 나누면 모분산을 체계적으로 과소추정하는 편향추정량이 된다."
    }
  },
  {
    "id": "SAMPLE_PP_026",
    "terminology": "모비율 (Population Proportion)",
    "terminology_ko": "모비율",
    "terminology_en": "Population Proportion",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단에서 특정 특성을 가진 개체의 비율로, p로 표기하며 표본비율(p̂)을 통해 추정한다.",
    "definition_en": "The proportion of individuals in the population possessing a specific characteristic, denoted as p and estimated by the sample proportion (p̂).",
    "significance": "여론조사, 역학 연구, 품질관리 등에서 특정 속성의 발생 빈도를 추정할 때 핵심적인 모수이다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "이항분포와 대수의 법칙을 통해 표본비율이 모비율에 수렴함을 최초로 증명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "통계량",
        "name_en": "Statistic",
        "id": "SAMPLE_ST_021"
      },
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모비율 p = 모집단에서의 '비율' → 예: 유권자 중 찬성 비율",
      "differential": "모비율(p)은 모집단 모수(고정), 표본비율(p̂)은 표본에서 계산한 통계량(변동)이다.",
      "key_point": "np ≥ 5이고 n(1-p) ≥ 5일 때 표본비율의 분포는 정규분포로 근사할 수 있다.",
      "common_mistake": "작은 표본에서 표본비율을 모비율과 같다고 단정하는 것. 표본 크기가 작으면 추정이 매우 불안정하다."
    }
  },
  {
    "id": "SAMPLE_DF_027",
    "terminology": "자유도 (Degrees of Freedom)",
    "terminology_ko": "자유도",
    "terminology_en": "Degrees of Freedom",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "통계량 계산 시 자유롭게 변할 수 있는 독립적인 관찰값의 수로, 일반적으로 표본크기에서 추정한 모수의 수를 뺀 값이다.",
    "definition_en": "The number of independent observations free to vary when computing a statistic, generally calculated as the sample size minus the number of estimated parameters.",
    "significance": "t분포, 카이제곱분포, F분포 등 주요 표본분포의 형태를 결정하며, 적절한 통계표 값을 찾는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William Sealy Gosset",
        "contribution": "t분포를 도출하면서 자유도 개념을 실질적으로 활용하는 기초를 마련했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "자유도 개념을 분산분석 등 다양한 통계 검정에 체계적으로 적용하고 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본분산",
        "name_en": "Sample Variance",
        "id": "SAMPLE_SV_025"
      },
      {
        "name_ko": "t검정",
        "name_en": "t-Test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "df = n - k (k = 제약 수) → 5개 값의 합이 정해지면 4개만 자유롭게 변할 수 있다",
      "differential": "자유도는 '자유롭게 변할 수 있는 수', 표본크기는 '전체 관찰값의 수'이다.",
      "key_point": "자유도가 클수록 t분포는 정규분포에 가까워지며, 검정의 정밀도가 높아진다.",
      "common_mistake": "자유도를 항상 n-1로 계산하는 것. 분석 유형에 따라 자유도 공식이 다르다."
    }
  },
  {
    "id": "SAMPLE_RP_028",
    "terminology": "대표성 (Representativeness)",
    "terminology_ko": "대표성",
    "terminology_en": "Representativeness",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본이 모집단의 주요 특성(인구통계, 분포, 다양성 등)을 얼마나 정확하게 반영하고 있는지를 나타내는 개념이다.",
    "definition_en": "The extent to which a sample accurately reflects the key characteristics (demographics, distribution, diversity) of the population from which it was drawn.",
    "significance": "대표성이 없는 표본에서 얻은 결과는 모집단에 일반화할 수 없으므로, 외적 타당도의 핵심 전제 조건이다.",
    "key_researchers": [
      {
        "name_ko": "아모스 트버스키",
        "name_en": "Amos Tversky",
        "contribution": "대표성 휴리스틱 연구를 통해 사람들이 소표본에서 대표성을 과대평가하는 인지적 편향을 규명했다."
      },
      {
        "name_ko": "대니얼 카너먼",
        "name_en": "Daniel Kahneman",
        "contribution": "트버스키와 함께 대표성 휴리스틱과 소수의 법칙에 관한 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      },
      {
        "name_ko": "외적 타당도",
        "name_en": "External Validity",
        "id": "DESIGN_EV_012"
      },
      {
        "name_ko": "무선표집",
        "name_en": "Random Sampling",
        "id": "SAMPLE_RS_004"
      },
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대표성 = 표본이 모집단의 '축소판' → 모집단의 특성을 잘 대표하는가?",
      "differential": "대표성은 표본이 모집단을 반영하는 정도이고, 일반화는 표본 결과를 모집단에 적용하는 과정이다.",
      "key_point": "무선표집이 대표성을 확보하는 가장 확실한 방법이지만, 무선표집도 우연에 의해 비대표적 표본이 나올 수 있다.",
      "common_mistake": "소표본에서도 당연히 대표성이 있다고 가정하는 것(소수의 법칙 오류)."
    }
  },
  {
    "id": "SAMPLE_OV_029",
    "terminology": "과대표집 (Oversampling)",
    "terminology_ko": "과대표집",
    "terminology_en": "Oversampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단에서 특정 하위집단을 그 실제 비율보다 더 많이 표집하는 방법으로, 소수 집단의 충분한 분석을 위해 의도적으로 사용된다.",
    "definition_en": "A sampling strategy that deliberately selects a disproportionately large number of individuals from a specific subgroup to ensure sufficient representation for analysis.",
    "significance": "소수 집단이나 희귀 특성을 가진 집단을 충분히 분석하기 위해 필요하며, 분석 시 가중치 보정을 통해 전체 모집단 추정에 반영한다.",
    "key_researchers": [
      {
        "name_ko": "레슬리 키시",
        "name_en": "Leslie Kish",
        "contribution": "복잡한 표집 설계에서 과대표집과 가중치 보정의 이론적 기초를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과소표집",
        "name_en": "Undersampling",
        "id": "SAMPLE_UN_030"
      },
      {
        "name_ko": "층화표집",
        "name_en": "Stratified Sampling",
        "id": "SAMPLE_SS_007"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과대(過大)표집 = '과하게 많이' 뽑기 → 소수 집단을 일부러 더 많이 뽑는 것",
      "differential": "과대표집은 의도적으로 특정 집단을 많이 뽑는 것, 표집 편향은 비의도적으로 특정 집단이 많아지는 것이다.",
      "key_point": "과대표집 후 전체 모집단 추정 시에는 반드시 가중치를 적용하여 비율을 보정해야 한다.",
      "common_mistake": "과대표집한 데이터를 가중치 보정 없이 분석하면 모집단 추정이 편향된다."
    }
  },
  {
    "id": "SAMPLE_UN_030",
    "terminology": "과소표집 (Undersampling)",
    "terminology_ko": "과소표집",
    "terminology_en": "Undersampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 특정 하위집단이 그 실제 비율보다 더 적게 표본에 포함되는 현상으로, 해당 집단에 대한 분석의 정밀도를 저하시킨다.",
    "definition_en": "A situation in which a specific subgroup is represented in the sample at a lower rate than its actual proportion in the population, reducing analytical precision for that group.",
    "significance": "과소표집된 집단에 대한 통계적 검정력이 부족해지며, 해당 집단의 특성이 연구 결과에 제대로 반영되지 않을 수 있다.",
    "key_researchers": [
      {
        "name_ko": "레슬리 키시",
        "name_en": "Leslie Kish",
        "contribution": "표집 설계에서 과소표집 문제와 그 보정 방법을 체계적으로 다루었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과대표집",
        "name_en": "Oversampling",
        "id": "SAMPLE_OV_029"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과소(過少)표집 = '과하게 적게' 포함 → 소수 집단이 표본에 너무 적게 반영됨",
      "differential": "과소표집은 특정 집단이 '적게' 포함되는 것, 과대표집은 '많이' 포함되는 것이다.",
      "key_point": "과소표집된 집단에 대한 분석은 검정력이 낮아 의미 있는 결과를 발견하기 어렵다.",
      "common_mistake": "과소표집된 집단에 대한 결과가 유의하지 않을 때 실제 효과가 없다고 결론짓는 것. 검정력 부족일 수 있다."
    }
  },
  {
    "id": "SAMPLE_SF_031",
    "terminology": "표본추출틀 (Sampling Frame)",
    "terminology_ko": "표본추출틀",
    "terminology_en": "Sampling Frame",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "모집단의 개체들을 나열한 실제 목록으로, 표본을 추출하는 기초가 되며 이 목록의 완전성이 표본의 대표성에 직접적으로 영향을 미친다.",
    "definition_en": "The actual list of all members of the population from which a sample is drawn, whose completeness directly affects the representativeness of the selected sample.",
    "significance": "표본추출틀이 모집단을 완전히 포함하지 못하면(포괄 오차) 표본이 편향될 수 있으므로, 표집 설계의 첫 번째 고려 사항이다.",
    "key_researchers": [
      {
        "name_ko": "레슬리 키시",
        "name_en": "Leslie Kish",
        "contribution": "표본추출틀의 오류 유형(불완전, 중복, 누락)을 체계적으로 분류하고 보정 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      },
      {
        "name_ko": "표집",
        "name_en": "Sampling",
        "id": "SAMPLE_SP_003"
      },
      {
        "name_ko": "대표성",
        "name_en": "Representativeness",
        "id": "SAMPLE_RP_028"
      },
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "추출틀 = 뽑기 위한 '틀(frame)' → 학생 명부, 전화번호부 등 실제 목록",
      "differential": "표본추출틀은 모집단의 실제 '목록'이고, 모집단은 이론적 '정의'이다.",
      "key_point": "표본추출틀과 모집단이 일치하지 않으면 포괄 오차(coverage error)가 발생한다.",
      "common_mistake": "표본추출틀이 모집단 전체를 완벽히 반영한다고 가정하는 것. 누락이나 중복이 흔하다."
    }
  },
  {
    "id": "SAMPLE_UB_032",
    "terminology": "불편추정량 (Unbiased Estimator)",
    "terminology_ko": "불편추정량",
    "terminology_en": "Unbiased Estimator",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "추정량의 기대값이 추정하려는 모수와 정확히 같은 통계량으로, 체계적 과대추정이나 과소추정 없이 모수를 추정한다.",
    "definition_en": "A statistic whose expected value equals the parameter it estimates, producing no systematic overestimation or underestimation of the true parameter value.",
    "significance": "모수 추정의 기본 요건 중 하나로, 표본평균은 모평균의, 표본분산(n-1로 나눈)은 모분산의 불편추정량이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "추정량의 바람직한 속성(불편성, 효율성, 충분성)을 체계적으로 정의했다."
      },
      {
        "name_ko": "예르지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "불편추정의 개념을 구간추정 이론에 적용하여 신뢰구간 방법론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편향",
        "name_en": "Bias",
        "id": "SAMPLE_BI_017"
      },
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "통계량",
        "name_en": "Statistic",
        "id": "SAMPLE_ST_021"
      },
      {
        "name_ko": "표본분산",
        "name_en": "Sample Variance",
        "id": "SAMPLE_SV_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불편(不偏) = 편향되지 않은 → E(추정량) = 모수, 평균적으로 정확하다",
      "differential": "불편추정량은 기대값이 모수와 같고, 편향추정량은 체계적으로 모수와 차이가 있다.",
      "key_point": "표본분산에서 n-1로 나누는 것은 불편추정량을 만들기 위한 베셀의 보정이다.",
      "common_mistake": "불편추정량이 항상 가장 좋은 추정량이라고 생각하는 것. 효율성이 낮은 불편추정량보다 약간 편향된 효율적 추정량이 나을 수 있다."
    }
  },
  {
    "id": "SAMPLE_LN_033",
    "terminology": "대수의 법칙 (Law of Large Numbers)",
    "terminology_ko": "대수의 법칙",
    "terminology_en": "Law of Large Numbers",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 크기가 증가할수록 표본평균이 모평균에 점점 더 가까워진다는 확률 이론의 기본 정리이다.",
    "definition_en": "A fundamental theorem in probability theory stating that as sample size increases, the sample mean converges to the population mean.",
    "significance": "표본에 기반한 추론의 이론적 정당성을 제공하며, 큰 표본일수록 모수 추정이 정확해짐을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "약한 대수의 법칙을 최초로 증명하여(1713년 사후 출판) 확률론의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "표본평균",
        "name_en": "Sample Mean",
        "id": "SAMPLE_XB_023"
      },
      {
        "name_ko": "모평균",
        "name_en": "Population Mean",
        "id": "SAMPLE_PM_022"
      }
    ],
    "sub_types": [
      {
        "name": "약한 대수의 법칙 (Weak Law)",
        "description": "표본평균이 모평균에 확률적으로 수렴함"
      },
      {
        "name": "강한 대수의 법칙 (Strong Law)",
        "description": "표본평균이 모평균에 거의 확실하게 수렴함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대수(大數) = 큰 수 → 표본이 '크면' 평균이 모평균에 가까워진다",
      "differential": "대수의 법칙은 표본평균이 모평균에 '수렴'한다는 것, 중심극한정리는 표본평균의 '분포'가 정규분포에 근사한다는 것이다.",
      "key_point": "대수의 법칙은 수렴(정확도), 중심극한정리는 분포 형태(정규성)에 관한 정리이다.",
      "common_mistake": "소수의 법칙(gambler's fallacy)과 혼동하는 것. 작은 표본에서도 대수의 법칙이 적용된다고 오해하면 안 된다."
    }
  },
  {
    "id": "SAMPLE_PS_034",
    "terminology": "목적적 표집 (Purposive Sampling)",
    "terminology_ko": "목적적 표집",
    "terminology_en": "Purposive Sampling",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "연구 목적에 부합하는 특정 특성을 가진 대상을 연구자가 의도적으로 선택하는 비확률표집 방법이다.",
    "definition_en": "A non-probability sampling method in which the researcher deliberately selects participants who meet specific criteria relevant to the research purpose.",
    "significance": "질적 연구나 특수 집단 연구에서 정보가 풍부한 사례를 확보하는 데 유용하며, 연구자의 전문적 판단에 의존한다.",
    "key_researchers": [
      {
        "name_ko": "마이클 패튼",
        "name_en": "Michael Quinn Patton",
        "contribution": "질적 연구에서 목적적 표집의 다양한 전략(최대 변량, 동질적, 극단 사례 등)을 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비확률표집",
        "name_en": "Non-Probability Sampling",
        "id": "SAMPLE_NP_009"
      },
      {
        "name_ko": "편의표집",
        "name_en": "Convenience Sampling",
        "id": "SAMPLE_CV_010"
      },
      {
        "name_ko": "눈덩이표집",
        "name_en": "Snowball Sampling",
        "id": "SAMPLE_SB_012"
      }
    ],
    "sub_types": [
      {
        "name": "극단사례표집 (Extreme Case Sampling)",
        "description": "극단적이거나 특이한 사례를 의도적으로 선택"
      },
      {
        "name": "동질적 표집 (Homogeneous Sampling)",
        "description": "유사한 특성을 가진 대상만 선택"
      },
      {
        "name": "최대변량 표집 (Maximum Variation Sampling)",
        "description": "다양한 특성을 가진 대상을 광범위하게 선택"
      }
    ],
    "quiz_hints": {
      "mnemonic": "목적적 = '목적'에 맞게 골라 뽑는다 → 연구자가 기준에 맞는 대상을 선택",
      "differential": "목적적 표집은 연구 기준에 맞는 대상을 '의도적' 선택, 편의표집은 접근 용이성에 따른 '편의적' 선택이다.",
      "key_point": "목적적 표집의 질은 연구자의 전문적 판단에 크게 의존하며, 선택 기준을 명확히 보고해야 한다.",
      "common_mistake": "목적적 표집으로 선택한 사례의 결과를 모집단 전체에 일반화하는 것."
    }
  },
  {
    "id": "SAMPLE_PT_035",
    "terminology": "점추정 (Point Estimation)",
    "terminology_ko": "점추정",
    "terminology_en": "Point Estimation",
    "category": "SAMPLE",
    "category_name": "표본과 표본분포 (Sampling & Sampling Distributions)",
    "definition": "표본 통계량을 사용하여 모집단 모수의 값을 하나의 단일 값으로 추정하는 통계적 방법이다.",
    "definition_en": "A statistical method that uses a sample statistic to estimate the value of a population parameter as a single numerical value.",
    "significance": "모수에 대한 가장 직관적인 추정 방법이지만, 추정의 불확실성을 표현하지 못하므로 구간추정과 함께 사용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "최대우도추정법(MLE)을 개발하여 점추정의 체계적 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불편추정량",
        "name_en": "Unbiased Estimator",
        "id": "SAMPLE_UB_032"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      },
      {
        "name_ko": "모수",
        "name_en": "Parameter",
        "id": "SAMPLE_PR_020"
      },
      {
        "name_ko": "통계량",
        "name_en": "Statistic",
        "id": "SAMPLE_ST_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "점(點)추정 = '한 점'으로 추정 → 모평균 μ를 x̄ = 75.3이라고 추정하는 것",
      "differential": "점추정은 단일 값 추정, 구간추정은 구간(범위)으로 추정하며 불확실성을 표현한다.",
      "key_point": "점추정만으로는 추정의 정밀도를 알 수 없으므로, 표준오차나 신뢰구간을 함께 보고해야 한다.",
      "common_mistake": "점추정 값이 모수의 정확한 값이라고 확신하는 것. 점추정에는 항상 표본오차가 수반된다."
    }
  }
];

TERMS_DATA.DESCRIP = [
  {
    "id": "DESCRIP_MN_001",
    "terminology": "평균 (Mean)",
    "terminology_ko": "평균",
    "terminology_en": "Mean",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "모든 관측값의 합을 관측값의 개수로 나눈 값으로, 분포의 중심을 나타내는 가장 대표적인 중심경향치이다.",
    "definition_en": "The sum of all observed values divided by the number of observations, serving as the most commonly used measure of central tendency.",
    "significance": "심리학 연구에서 집단의 전형적인 수행 수준을 요약하고, 집단 간 비교의 기초 통계량으로 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "최소제곱법을 통해 평균의 수학적 최적성을 증명하였다"
      },
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "정규분포와 평균의 관계를 최초로 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "최빈값",
        "name_en": "Mode",
        "id": "DESCRIP_MO_003"
      },
      {
        "name_ko": "중심경향치",
        "name_en": "Central Tendency",
        "id": "DESCRIP_CT_017"
      },
      {
        "name_ko": "가중평균",
        "name_en": "Weighted Mean",
        "id": "DESCRIP_WM_020"
      }
    ],
    "sub_types": [
      {
        "name_ko": "산술평균",
        "name_en": "Arithmetic Mean",
        "definition": "모든 값의 합을 개수로 나눈 가장 일반적인 형태의 평균"
      },
      {
        "name_ko": "기하평균",
        "name_en": "Geometric Mean",
        "definition": "n개의 양수 값을 모두 곱한 후 n제곱근을 취한 평균으로, 비율 데이터에 적합하다"
      },
      {
        "name_ko": "조화평균",
        "name_en": "Harmonic Mean",
        "definition": "관측값의 역수의 산술평균의 역수로, 속도나 비율의 평균에 사용된다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Mean = 모든 값의 '평(평등하게)균(고르게)' 나누기",
      "differential": "평균은 모든 값을 사용하므로 극단값에 민감하고, 중앙값은 순서만 고려하므로 극단값에 강건하다",
      "key_point": "평균은 편차의 합이 항상 0이 되는 균형점(balance point)이다",
      "common_mistake": "극단값(이상치)이 있는 분포에서도 평균이 항상 최선의 대표값이라고 생각하는 것"
    }
  },
  {
    "id": "DESCRIP_MD_002",
    "terminology": "중앙값 (Median)",
    "terminology_ko": "중앙값",
    "terminology_en": "Median",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "관측값을 크기 순서로 배열했을 때 정확히 가운데에 위치하는 값으로, 분포를 상위 50%와 하위 50%로 나누는 중심경향치이다.",
    "definition_en": "The middle value in a set of observations arranged in order of magnitude, dividing the distribution into two equal halves.",
    "significance": "극단값이나 비대칭 분포에서 평균보다 안정적인 중심 위치를 제공하여, 심리학의 반응시간 등 편포된 데이터 분석에 유용하다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 라이트",
        "name_en": "Edward Wright",
        "contribution": "항해학에서 중앙값 개념의 초기 적용을 시도하였다"
      },
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "중앙값을 통계적 대표값으로 체계화하고 개인차 연구에 활용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "최빈값",
        "name_en": "Mode",
        "id": "DESCRIP_MO_003"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      },
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "중앙값 = '줄 세운' 데이터의 '한가운데'",
      "differential": "중앙값은 순위(서열)만 고려하고, 평균은 실제 값의 크기를 모두 반영한다",
      "key_point": "관측값이 짝수개일 때는 가운데 두 값의 평균이 중앙값이 된다",
      "common_mistake": "중앙값이 자료의 물리적 중간(최소+최대/2)이라고 착각하는 것 — 그것은 중간범위(midrange)이다"
    }
  },
  {
    "id": "DESCRIP_MO_003",
    "terminology": "최빈값 (Mode)",
    "terminology_ko": "최빈값",
    "terminology_en": "Mode",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "자료에서 가장 빈번하게 나타나는 값으로, 명명척도 수준에서도 사용할 수 있는 유일한 중심경향치이다.",
    "definition_en": "The most frequently occurring value in a dataset, and the only measure of central tendency applicable to nominal-scale data.",
    "significance": "범주형 데이터의 대표값으로 사용되며, 심리학에서 가장 흔한 반응 양식이나 진단 범주를 파악하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "최빈값이라는 용어를 최초로 사용하고 분포의 비대칭성과 연결지었다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "최빈(最頻) = 가장(最) 빈번한(頻) 값",
      "differential": "최빈값은 하나의 분포에 여러 개 존재할 수 있지만(쌍봉분포 등), 평균과 중앙값은 항상 하나이다",
      "key_point": "최빈값은 명명척도에서도 사용 가능한 유일한 중심경향치이다",
      "common_mistake": "최빈값이 항상 분포의 중심에 있다고 생각하는 것 — 편포된 분포에서는 꼬리 반대쪽에 치우칠 수 있다"
    }
  },
  {
    "id": "DESCRIP_RG_004",
    "terminology": "범위 (Range)",
    "terminology_ko": "범위",
    "terminology_en": "Range",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "자료에서 최대값과 최소값의 차이로, 분포의 전체 산포 정도를 가장 간단하게 나타내는 변산성 측정치이다.",
    "definition_en": "The difference between the maximum and minimum values in a dataset, providing the simplest measure of variability.",
    "significance": "자료의 전반적 산포를 빠르게 파악할 수 있으나, 극단값에 크게 영향을 받아 심리학 연구에서는 보조적 지표로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "레너드 틸리 하디",
        "name_en": "Leonard Tippett",
        "contribution": "범위의 표본분포 이론을 개발하여 품질관리 분야에 기여하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "변산성",
        "name_en": "Variability",
        "id": "DESCRIP_VB_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "범위 = 최대 - 최소, 가장 '넓은 폭'",
      "differential": "범위는 양 극단값 2개만 사용하고, 사분위범위(IQR)는 중앙 50%의 폭을 나타낸다",
      "key_point": "범위는 계산이 간편하지만 이상치 하나에 크게 왜곡될 수 있다",
      "common_mistake": "범위가 자료의 분산을 충분히 대표한다고 생각하는 것 — 범위는 극단값 두 개만 반영할 뿐이다"
    }
  },
  {
    "id": "DESCRIP_IQR_005",
    "terminology": "사분위범위 (Interquartile Range)",
    "terminology_ko": "사분위범위",
    "terminology_en": "Interquartile Range",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "제3사분위수(Q3)와 제1사분위수(Q1)의 차이로, 자료의 중앙 50%가 차지하는 범위를 나타내는 변산성 측정치이다.",
    "definition_en": "The difference between the third quartile (Q3) and the first quartile (Q1), representing the spread of the middle 50% of the data.",
    "significance": "극단값에 강건한 변산성 지표로, 심리학에서 이상치가 흔한 반응시간 데이터나 편포된 분포의 산포를 기술할 때 유용하다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "사분위수 개념을 통계 분석에 도입하고 개인차 연구의 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범위",
        "name_en": "Range",
        "id": "DESCRIP_RG_004"
      },
      {
        "name_ko": "상자그림",
        "name_en": "Box Plot",
        "id": "DESCRIP_BP_016"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "IQR = Q3 - Q1 = '중앙 50%의 폭'",
      "differential": "범위(Range)는 전체 데이터의 폭이고, IQR은 중앙 50%의 폭이므로 극단값에 영향받지 않는다",
      "key_point": "상자그림(box plot)에서 상자의 길이가 바로 IQR이다",
      "common_mistake": "IQR이 Q1부터 Q3까지의 데이터 개수를 의미한다고 착각하는 것 — IQR은 값의 차이(범위)이다"
    }
  },
  {
    "id": "DESCRIP_VAR_006",
    "terminology": "분산 (Variance)",
    "terminology_ko": "분산",
    "terminology_en": "Variance",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "각 관측값과 평균의 편차를 제곱한 값들의 평균으로, 데이터가 평균으로부터 얼마나 흩어져 있는지를 나타내는 변산성의 핵심 측정치이다.",
    "definition_en": "The average of the squared deviations from the mean, quantifying the degree to which data points are spread out from the mean.",
    "significance": "분산은 t검정, ANOVA 등 추론통계의 기초가 되며, 심리학 연구에서 개인차와 집단 간 차이를 분석하는 핵심 통계량이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산 개념을 공식화하고 분산분석(ANOVA)을 개발하였다"
      },
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "편차 제곱합을 기반으로 한 변이성 측정 체계를 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "DESCRIP_SS_024"
      },
      {
        "name_ko": "편차점수",
        "name_en": "Deviation Score",
        "id": "DESCRIP_DS_025"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "모분산",
        "name_en": "Population Variance",
        "definition": "모집단 전체의 분산으로, SS를 N으로 나누어 계산한다 (σ²)"
      },
      {
        "name_ko": "표본분산",
        "name_en": "Sample Variance",
        "definition": "표본에서 추정한 분산으로, SS를 n-1로 나누어 불편 추정량을 구한다 (s²)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "분산 = '분(나누어)산(흩어진)' 정도, 편차²의 평균",
      "differential": "분산은 편차 제곱의 평균이므로 단위가 원래 단위의 제곱이고, 표준편차는 분산의 제곱근으로 원래 단위와 동일하다",
      "key_point": "표본분산에서 n-1로 나누는 이유는 자유도를 반영하여 불편 추정량을 만들기 위함이다",
      "common_mistake": "모분산 공식(÷N)과 표본분산 공식(÷n-1)을 혼동하는 것"
    }
  },
  {
    "id": "DESCRIP_SD_007",
    "terminology": "표준편차 (Standard Deviation)",
    "terminology_ko": "표준편차",
    "terminology_en": "Standard Deviation",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "분산의 제곱근으로, 데이터가 평균으로부터 평균적으로 얼마나 떨어져 있는지를 원래 측정 단위로 나타내는 변산성 측정치이다.",
    "definition_en": "The square root of the variance, expressing the average distance of data points from the mean in the original unit of measurement.",
    "significance": "심리학 연구에서 가장 널리 사용되는 산포 지표로, z점수 산출과 정규분포 해석의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "표준편차(standard deviation)라는 용어를 최초로 도입하였다"
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "표본 표준편차의 편향 보정과 소표본 이론을 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SD = √분산 → 원래 단위로 '얼마나 퍼졌나'",
      "differential": "표준편차는 개별 점수의 산포를 나타내고, 표준오차(SE)는 표본평균의 산포를 나타낸다",
      "key_point": "정규분포에서 평균 ±1SD 안에 약 68%, ±2SD 안에 약 95%, ±3SD 안에 약 99.7%의 데이터가 포함된다",
      "common_mistake": "표준편차와 표준오차(SE)를 혼동하는 것 — 표준오차는 표준편차를 √n으로 나눈 값이다"
    }
  },
  {
    "id": "DESCRIP_SK_008",
    "terminology": "왜도 (Skewness)",
    "terminology_ko": "왜도",
    "terminology_en": "Skewness",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "분포의 비대칭 정도와 방향을 나타내는 통계량으로, 양의 왜도는 오른쪽 꼬리가 긴 분포를, 음의 왜도는 왼쪽 꼬리가 긴 분포를 의미한다.",
    "definition_en": "A measure of the asymmetry of a probability distribution, where positive skewness indicates a longer right tail and negative skewness indicates a longer left tail.",
    "significance": "심리학 데이터의 분포 형태를 판단하여 적절한 통계 기법(모수적 vs. 비모수적)을 선택하는 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "왜도의 계수를 정의하고 분포의 비대칭성을 체계적으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "첨도",
        "name_en": "Kurtosis",
        "id": "DESCRIP_KT_009"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      }
    ],
    "sub_types": [
      {
        "name_ko": "양의 왜도 (정적 편포)",
        "name_en": "Positive Skewness",
        "definition": "오른쪽 꼬리가 길고, 평균 > 중앙값 > 최빈값 순서의 분포"
      },
      {
        "name_ko": "음의 왜도 (부적 편포)",
        "name_en": "Negative Skewness",
        "definition": "왼쪽 꼬리가 길고, 최빈값 > 중앙값 > 평균 순서의 분포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "왜도 = '왜(비뚤어진) 도(정도)' → 꼬리가 긴 쪽이 왜도 부호의 방향",
      "differential": "왜도는 좌우 비대칭(수평 방향)을 측정하고, 첨도는 봉우리의 뾰족함(수직 방향)을 측정한다",
      "key_point": "양의 왜도 분포에서는 평균 > 중앙값, 음의 왜도 분포에서는 평균 < 중앙값이다",
      "common_mistake": "꼬리가 긴 방향과 데이터가 많이 몰린 방향을 혼동하는 것 — 양의 왜도에서 대부분의 데이터는 왼쪽(낮은 값)에 몰려 있다"
    }
  },
  {
    "id": "DESCRIP_KT_009",
    "terminology": "첨도 (Kurtosis)",
    "terminology_ko": "첨도",
    "terminology_en": "Kurtosis",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "분포의 꼬리 두께와 봉우리의 뾰족한 정도를 나타내는 통계량으로, 정규분포 대비 극단값의 출현 경향을 반영한다.",
    "definition_en": "A measure of the tailedness and peakedness of a probability distribution, reflecting the tendency for extreme values relative to a normal distribution.",
    "significance": "심리학 데이터의 분포 형태를 진단하여 극단값의 존재 여부를 파악하고, 정규성 가정의 충족 여부를 판단하는 데 사용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "첨도를 포함한 분포의 형태 기술을 위한 적률 체계를 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "왜도",
        "name_en": "Skewness",
        "id": "DESCRIP_SK_008"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정규첨도 (중첨분포)",
        "name_en": "Mesokurtic",
        "definition": "정규분포와 동일한 첨도(첨도 = 3, 초과첨도 = 0)"
      },
      {
        "name_ko": "급첨분포",
        "name_en": "Leptokurtic",
        "definition": "정규분포보다 꼬리가 두텁고 봉우리가 뾰족한 분포(초과첨도 > 0)"
      },
      {
        "name_ko": "완첨분포",
        "name_en": "Platykurtic",
        "definition": "정규분포보다 꼬리가 얇고 봉우리가 완만한 분포(초과첨도 < 0)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "첨도 = '첨(뾰족할 첨) 도(정도)' → Lepto(가늘고 뾰족) vs. Platy(넓고 평평)",
      "differential": "첨도는 주로 꼬리의 두께(극단값 빈도)를 반영하며, 봉우리의 높이만을 의미하는 것은 아니다",
      "key_point": "초과첨도(excess kurtosis) = 첨도 - 3으로, 정규분포를 기준(0)으로 비교한다",
      "common_mistake": "첨도가 단순히 '봉우리의 뾰족함'만을 의미한다고 생각하는 것 — 실제로는 꼬리의 무거움(극단값 빈도)이 더 중요하다"
    }
  },
  {
    "id": "DESCRIP_ZS_010",
    "terminology": "z점수 (z-Score)",
    "terminology_ko": "z점수",
    "terminology_en": "z-Score",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "원점수에서 평균을 빼고 표준편차로 나눈 표준화 점수로, 평균으로부터 표준편차 단위로 떨어진 정도를 나타낸다.",
    "definition_en": "A standardized score calculated by subtracting the mean from a raw score and dividing by the standard deviation, expressing the distance from the mean in standard deviation units.",
    "significance": "서로 다른 척도나 검사의 점수를 동일한 기준으로 비교할 수 있게 하여, 심리검사 해석과 연구 결과 통합에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "표준화된 점수의 개념을 개인차 비교에 최초로 적용하였다"
      },
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "z점수를 정규분포와 연결하여 통계적 추론의 기반을 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "T점수",
        "name_en": "T-Score",
        "id": "DESCRIP_TS_027"
      },
      {
        "name_ko": "원점수",
        "name_en": "Raw Score",
        "id": "DESCRIP_RS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "z = (X - μ) / σ → '원점수가 평균에서 몇 SD만큼 떨어졌나'",
      "differential": "z점수는 평균=0, SD=1로 표준화하고, T점수는 평균=50, SD=10으로 변환한다",
      "key_point": "z점수가 양수이면 평균 이상, 음수이면 평균 이하이며, 절대값이 클수록 평균에서 멀다",
      "common_mistake": "z점수 자체가 백분위라고 생각하는 것 — z점수는 정규분포표를 통해 확률/백분위로 변환해야 한다"
    }
  },
  {
    "id": "DESCRIP_PC_011",
    "terminology": "백분위 (Percentile)",
    "terminology_ko": "백분위",
    "terminology_en": "Percentile",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "전체 분포에서 해당 점수 이하에 있는 사례의 비율을 백분율로 나타낸 값으로, 상대적 위치를 표현하는 지표이다.",
    "definition_en": "A value indicating the percentage of cases in a distribution that fall at or below a given score, expressing relative standing within a group.",
    "significance": "심리검사 결과를 규준 집단 내에서 상대적으로 해석할 수 있게 하여, 지능검사, 성격검사 등의 임상적 해석에 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "백분위 순위 개념을 도입하여 개인의 상대적 위치를 체계적으로 비교하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      },
      {
        "name_ko": "누적빈도",
        "name_en": "Cumulative Frequency",
        "id": "DESCRIP_CF_030"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      }
    ],
    "sub_types": [
      {
        "name_ko": "사분위수",
        "name_en": "Quartile",
        "definition": "분포를 4등분하는 점수로, Q1(25%), Q2(50%=중앙값), Q3(75%)"
      },
      {
        "name_ko": "십분위수",
        "name_en": "Decile",
        "definition": "분포를 10등분하는 점수"
      }
    ],
    "quiz_hints": {
      "mnemonic": "백분위 75 = '나보다 아래가 75%' → 상위 25%에 해당",
      "differential": "백분위는 순위 기반(서열)이고, z점수는 평균과 표준편차 기반(등간)의 상대적 위치 지표이다",
      "key_point": "백분위는 등간척도가 아니므로, 백분위 간의 차이가 능력 차이를 동일하게 반영하지 않는다",
      "common_mistake": "백분위 90이 100점 만점에 90점이라는 의미라고 착각하는 것 — 백분위는 점수가 아니라 상대적 순위이다"
    }
  },
  {
    "id": "DESCRIP_FD_012",
    "terminology": "도수분포 (Frequency Distribution)",
    "terminology_ko": "도수분포",
    "terminology_en": "Frequency Distribution",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "자료의 각 값 또는 급간에 해당하는 사례의 수(도수)를 체계적으로 정리한 표로, 데이터의 분포 패턴을 파악하는 기본 도구이다.",
    "definition_en": "An organized tabulation showing the number of cases (frequencies) falling into each category or class interval, used to reveal the pattern of data distribution.",
    "significance": "수집된 데이터의 전체적인 분포 형태를 한눈에 파악할 수 있게 하여, 심리학 연구에서 자료 탐색의 첫 단계로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "도수분포를 그래픽으로 표현하는 히스토그램을 도입하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "히스토그램",
        "name_en": "Histogram",
        "id": "DESCRIP_HG_013"
      },
      {
        "name_ko": "급간",
        "name_en": "Class Interval",
        "id": "DESCRIP_CI_032"
      },
      {
        "name_ko": "상대빈도",
        "name_en": "Relative Frequency",
        "id": "DESCRIP_RF_031"
      },
      {
        "name_ko": "누적빈도",
        "name_en": "Cumulative Frequency",
        "id": "DESCRIP_CF_030"
      }
    ],
    "sub_types": [
      {
        "name_ko": "단순도수분포",
        "name_en": "Simple Frequency Distribution",
        "definition": "각 개별 값에 대한 도수를 나열한 분포표"
      },
      {
        "name_ko": "급간도수분포",
        "name_en": "Grouped Frequency Distribution",
        "definition": "값들을 일정한 급간으로 묶어 도수를 정리한 분포표"
      }
    ],
    "quiz_hints": {
      "mnemonic": "도수분포 = '몇 번(도수)씩 나타나는지 분류(분포)한 표'",
      "differential": "도수분포는 빈도의 수치적 정리이고, 히스토그램은 이를 시각적으로 표현한 그래프이다",
      "key_point": "급간의 크기에 따라 분포의 모습이 달라질 수 있으므로, 적절한 급간 설정이 중요하다",
      "common_mistake": "도수분포표의 급간 경계에서 겹치는 값을 어디에 포함시킬지 혼동하는 것"
    }
  },
  {
    "id": "DESCRIP_HG_013",
    "terminology": "히스토그램 (Histogram)",
    "terminology_ko": "히스토그램",
    "terminology_en": "Histogram",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "연속형 자료의 도수분포를 막대의 높이로 나타낸 그래프로, 막대가 서로 붙어 있어 연속적 변인임을 표현한다.",
    "definition_en": "A graphical representation of a frequency distribution for continuous data using adjacent bars whose heights represent frequencies.",
    "significance": "자료의 분포 형태(정규성, 왜도, 이상치 등)를 직관적으로 파악할 수 있어, 심리학 연구의 자료 탐색 단계에서 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "히스토그램이라는 용어와 기법을 현대 통계학에 도입하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "줄기-잎 그림",
        "name_en": "Stem-and-Leaf Plot",
        "id": "DESCRIP_SL_014"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "급간",
        "name_en": "Class Interval",
        "id": "DESCRIP_CI_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "히스토그램 = 막대가 '붙어있는' 그래프 → 연속 변인",
      "differential": "히스토그램은 연속 변인의 막대가 붙어 있고, 막대그래프(bar chart)는 범주형 변인의 막대가 떨어져 있다",
      "key_point": "막대의 면적이 빈도에 비례하므로, 급간 너비가 다를 경우 높이가 아닌 면적으로 비교해야 한다",
      "common_mistake": "히스토그램과 막대그래프를 같은 것으로 취급하는 것 — 히스토그램은 연속 변인, 막대그래프는 범주 변인용이다"
    }
  },
  {
    "id": "DESCRIP_SL_014",
    "terminology": "줄기-잎 그림 (Stem-and-Leaf Plot)",
    "terminology_ko": "줄기-잎 그림",
    "terminology_en": "Stem-and-Leaf Plot",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "각 데이터 값을 줄기(앞자리)와 잎(끝자리)으로 분리하여 분포 형태와 개별 값을 동시에 보여주는 탐색적 그래프이다.",
    "definition_en": "An exploratory display that splits each data value into a stem (leading digits) and a leaf (trailing digit), showing both the distribution shape and individual values.",
    "significance": "소규모 데이터셋의 분포 형태를 빠르게 파악하면서도 원래 값을 보존할 수 있어, 심리학 실험 데이터의 초기 탐색에 유용하다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "탐색적 자료분석(EDA)의 일환으로 줄기-잎 그림을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "히스토그램",
        "name_en": "Histogram",
        "id": "DESCRIP_HG_013"
      },
      {
        "name_ko": "상자그림",
        "name_en": "Box Plot",
        "id": "DESCRIP_BP_016"
      },
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "줄기(10의 자리) | 잎(1의 자리) → 히스토그램처럼 보이면서 원래 값도 보존",
      "differential": "줄기-잎 그림은 원래 데이터 값을 보존하지만, 히스토그램은 급간 내 개별 값 정보를 잃는다",
      "key_point": "줄기-잎 그림을 옆으로 회전하면 히스토그램과 유사한 모양이 된다",
      "common_mistake": "큰 데이터셋에 줄기-잎 그림을 적용하려는 것 — 데이터가 많으면 히스토그램이 더 적합하다"
    }
  },
  {
    "id": "DESCRIP_SP_015",
    "terminology": "산점도 (Scatter Plot)",
    "terminology_ko": "산점도",
    "terminology_en": "Scatter Plot",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "두 변인의 관계를 좌표 평면에 점으로 나타낸 그래프로, 변인 간 상관의 방향과 강도를 시각적으로 표현한다.",
    "definition_en": "A graph displaying the relationship between two variables as a set of points on a coordinate plane, visually representing the direction and strength of correlation.",
    "significance": "심리학 연구에서 두 변인(예: 불안과 수행, 지능과 학업성취) 간의 관계 패턴을 직관적으로 탐색하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "회귀 분석 연구에서 산점도를 체계적으로 활용하고 발전시켰다"
      },
      {
        "name_ko": "존 허셜",
        "name_en": "John Herschel",
        "contribution": "과학적 데이터 표현에서 산점도의 초기 형태를 사용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "단순선형회귀",
        "name_en": "Simple Linear Regression",
        "id": "REGRESS_SLR_001"
      },
      {
        "name_ko": "변인",
        "name_en": "Variable",
        "id": "FOUND_VR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "산(scatter)점(dot)도(plot) = 점이 '흩뿌려진' 그래프",
      "differential": "산점도는 두 변인의 관계를 보여주고, 히스토그램은 한 변인의 분포를 보여준다",
      "key_point": "점들이 직선에 가까울수록 상관이 강하고, 타원 형태이면 약한 상관을 나타낸다",
      "common_mistake": "산점도에서 관찰된 패턴을 인과관계로 해석하는 것 — 상관은 인과가 아니다"
    }
  },
  {
    "id": "DESCRIP_BP_016",
    "terminology": "상자그림 (Box Plot)",
    "terminology_ko": "상자그림",
    "terminology_en": "Box Plot",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "최소값, Q1, 중앙값, Q3, 최대값의 다섯 수치 요약을 시각화한 그래프로, 분포의 중심, 산포, 왜도, 이상치를 한눈에 보여준다.",
    "definition_en": "A graphical display of the five-number summary (minimum, Q1, median, Q3, maximum) that simultaneously shows center, spread, skewness, and outliers.",
    "significance": "여러 집단의 분포를 동시에 비교할 수 있어, 심리학 실험에서 조건 간 차이를 시각적으로 탐색하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "탐색적 자료분석(EDA)의 일환으로 상자-수염 그림(box-and-whisker plot)을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "줄기-잎 그림",
        "name_en": "Stem-and-Leaf Plot",
        "id": "DESCRIP_SL_014"
      },
      {
        "name_ko": "왜도",
        "name_en": "Skewness",
        "id": "DESCRIP_SK_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Box = 상자(Q1~Q3) + Whisker = 수염(최소~최대) + 점 = 이상치",
      "differential": "상자그림은 다섯 수치 요약을 보여주고, 히스토그램은 전체 분포의 형태를 보여준다",
      "key_point": "IQR의 1.5배를 벗어나는 값은 이상치(outlier)로 표시된다",
      "common_mistake": "상자 안의 선이 평균이라고 착각하는 것 — 상자그림의 중앙선은 중앙값(median)이다"
    }
  },
  {
    "id": "DESCRIP_CT_017",
    "terminology": "중심경향치 (Central Tendency)",
    "terminology_ko": "중심경향치",
    "terminology_en": "Central Tendency",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "분포에서 데이터가 집중되는 중심 위치를 나타내는 대표값의 총칭으로, 평균, 중앙값, 최빈값이 대표적이다.",
    "definition_en": "A generic term for statistical measures that identify the center or typical value of a distribution, including the mean, median, and mode.",
    "significance": "심리학 연구에서 집단의 전형적 특성을 하나의 값으로 요약하여 집단 간 비교를 가능하게 하는 기술통계의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "개인차 측정에서 중심경향치의 통계적 활용을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "최빈값",
        "name_en": "Mode",
        "id": "DESCRIP_MO_003"
      },
      {
        "name_ko": "변산성",
        "name_en": "Variability",
        "id": "DESCRIP_VB_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "중심경향치 3총사: Mean(평균), Median(중앙값), Mode(최빈값)",
      "differential": "중심경향치는 '어디에 모이나'를 나타내고, 변산성은 '얼마나 퍼져 있나'를 나타낸다",
      "key_point": "측정 수준에 따라 적합한 중심경향치가 달라진다 — 명명척도는 최빈값, 서열척도는 중앙값, 등간/비율척도는 평균",
      "common_mistake": "모든 상황에서 평균이 최선의 대표값이라고 가정하는 것 — 편포된 분포에서는 중앙값이 더 적합하다"
    }
  },
  {
    "id": "DESCRIP_VB_018",
    "terminology": "변산성 (Variability)",
    "terminology_ko": "변산성",
    "terminology_en": "Variability",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "데이터가 중심으로부터 얼마나 퍼져 있는지를 나타내는 산포 정도의 총칭으로, 범위, 분산, 표준편차가 대표적이다.",
    "definition_en": "A general term for measures describing how spread out data values are from the center, including range, variance, and standard deviation.",
    "significance": "심리학에서 개인차의 크기를 파악하고, 집단 내 동질성을 평가하며, 통계적 검정력에 영향을 미치는 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산 개념의 공식화와 분산분석 기법을 통해 변산성 분석의 체계를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "중심경향치",
        "name_en": "Central Tendency",
        "id": "DESCRIP_CT_017"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "범위",
        "name_en": "Range",
        "id": "DESCRIP_RG_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변산성 = '변(변하는) 산(흩어지는)' 정도, 데이터의 '퍼짐' 크기",
      "differential": "변산성은 데이터의 퍼짐(산포)을 총칭하는 개념이고, 분산과 표준편차는 그 구체적 측정치이다",
      "key_point": "변산성이 크면 개인차가 크고, 변산성이 작으면 집단이 동질적이라는 의미이다",
      "common_mistake": "변산성이 크다는 것을 '나쁜 것'으로만 해석하는 것 — 개인차 연구에서 변산성은 연구의 핵심 대상이다"
    }
  },
  {
    "id": "DESCRIP_ND_019",
    "terminology": "정규분포 (Normal Distribution)",
    "terminology_ko": "정규분포",
    "terminology_en": "Normal Distribution",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "평균을 중심으로 좌우 대칭인 종 모양의 확률분포로, 평균, 중앙값, 최빈값이 일치하며 68-95-99.7 규칙을 따른다.",
    "definition_en": "A symmetric, bell-shaped probability distribution centered at the mean where mean, median, and mode coincide, following the 68-95-99.7 rule.",
    "significance": "많은 심리학 변인(지능, 성격 특성 등)이 근사적으로 정규분포를 따르며, 모수 통계의 핵심 가정으로 작용한다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "측정 오차의 분포로 정규분포를 체계화하여 가우스 분포라고도 불린다"
      },
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "이항분포의 근사로서 정규분포의 수학적 형태를 최초로 발견하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "왜도",
        "name_en": "Skewness",
        "id": "DESCRIP_SK_008"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정규분포 = '종(bell) 모양' + 68-95-99.7 법칙",
      "differential": "정규분포는 연속적 이론 분포이고, 히스토그램은 실제 데이터의 경험적 분포이다",
      "key_point": "평균과 표준편차 두 모수만으로 분포가 완전히 결정된다",
      "common_mistake": "모든 심리학 데이터가 정규분포를 따른다고 가정하는 것 — 반응시간 등은 흔히 정적으로 편포된다"
    }
  },
  {
    "id": "DESCRIP_WM_020",
    "terminology": "가중평균 (Weighted Mean)",
    "terminology_ko": "가중평균",
    "terminology_en": "Weighted Mean",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "각 관측값에 중요도나 빈도에 따른 가중치를 부여한 후 계산하는 평균으로, 하위집단의 크기가 다를 때 전체 평균을 구하는 데 사용된다.",
    "definition_en": "A mean calculated by assigning weights to each value based on importance or frequency, used to compute the overall mean when subgroup sizes differ.",
    "significance": "심리학 메타분석에서 연구별 표본 크기를 가중치로 사용하여 전체 효과크기를 산출할 때 핵심적으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "진 글래스",
        "name_en": "Gene V. Glass",
        "contribution": "메타분석에서 가중평균 효과크기 방법을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "총평균",
        "name_en": "Grand Mean",
        "id": "DESCRIP_GM_023"
      },
      {
        "name_ko": "집단평균",
        "name_en": "Group Mean",
        "id": "DESCRIP_GRM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가중평균 = 각 값에 '무게(가중치)' 다르게 달아서 구한 평균",
      "differential": "단순평균은 모든 값을 동등하게 취급하고, 가중평균은 값마다 다른 비중을 부여한다",
      "key_point": "가중평균 = Σ(w × X) / Σw, 가중치의 합으로 나눈다",
      "common_mistake": "하위집단 평균을 단순 산술평균하면 집단크기가 다를 때 전체 평균과 달라진다"
    }
  },
  {
    "id": "DESCRIP_TM_021",
    "terminology": "절사평균 (Trimmed Mean)",
    "terminology_ko": "절사평균",
    "terminology_en": "Trimmed Mean",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "분포의 양 극단에서 일정 비율의 관측값을 제거한 후 나머지 값들의 평균을 구한 것으로, 극단값에 강건한 중심경향치이다.",
    "definition_en": "A mean calculated after removing a specified percentage of observations from both tails of the distribution, providing a robust measure of central tendency.",
    "significance": "이상치에 민감한 산술평균의 한계를 보완하여, 심리학에서 반응시간이나 편포된 데이터의 대표값으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "강건 통계(robust statistics) 분야에서 절사평균의 유용성을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "왜도",
        "name_en": "Skewness",
        "id": "DESCRIP_SK_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절사(切捨) = 양쪽 꼬리를 '잘라내고(절)' '버린(사)' 평균",
      "differential": "절사평균은 극단값 일부를 제거한 평균이고, 윈저화 평균(Winsorized mean)은 극단값을 가장 가까운 비극단값으로 대체한 평균이다",
      "key_point": "보통 5% 또는 10% 절사가 사용되며, 50% 절사평균은 중앙값과 동일하다",
      "common_mistake": "절사 비율을 임의로 크게 설정하면 유효한 데이터까지 제거될 수 있다"
    }
  },
  {
    "id": "DESCRIP_GRM_022",
    "terminology": "집단평균 (Group Mean)",
    "terminology_ko": "집단평균",
    "terminology_en": "Group Mean",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "특정 집단이나 조건에 속하는 관측값들의 산술평균으로, 실험 조건 간 비교의 기본 단위가 된다.",
    "definition_en": "The arithmetic mean of observations within a specific group or condition, serving as the basic unit for comparing experimental conditions.",
    "significance": "심리학 실험에서 처치 조건별 효과를 비교하기 위한 기본 통계량이며, 분산분석의 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "실험설계에서 집단평균 비교를 위한 분산분석 기법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "총평균",
        "name_en": "Grand Mean",
        "id": "DESCRIP_GM_023"
      },
      {
        "name_ko": "가중평균",
        "name_en": "Weighted Mean",
        "id": "DESCRIP_WM_020"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단평균 = 해당 '집단만의' 대표 값",
      "differential": "집단평균은 한 조건 내의 평균이고, 총평균(grand mean)은 모든 조건을 합친 전체 평균이다",
      "key_point": "분산분석에서 F비는 집단평균 간 차이(집단 간 변산)와 집단 내 변산의 비율이다",
      "common_mistake": "집단크기가 다를 때 집단평균들을 단순 평균하면 총평균과 달라질 수 있다"
    }
  },
  {
    "id": "DESCRIP_GM_023",
    "terminology": "총평균 (Grand Mean)",
    "terminology_ko": "총평균",
    "terminology_en": "Grand Mean",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "모든 집단의 모든 관측값을 합산하여 전체 관측값 수로 나눈 평균으로, 분산분석에서 전체 기준선 역할을 한다.",
    "definition_en": "The overall mean of all observations across all groups, calculated by dividing the total sum of scores by the total number of observations.",
    "significance": "분산분석에서 각 집단평균의 편차를 계산하는 기준점이 되며, 집단 간 효과를 평가하는 기초 통계량이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산분석의 수학적 체계에서 총평균의 역할을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단평균",
        "name_en": "Group Mean",
        "id": "DESCRIP_GRM_022"
      },
      {
        "name_ko": "가중평균",
        "name_en": "Weighted Mean",
        "id": "DESCRIP_WM_020"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "총평균 = '전체(Grand)' 데이터의 평균, ANOVA의 기준선",
      "differential": "총평균은 모든 데이터를 하나로 합쳐 계산하고, 집단평균의 평균은 집단크기가 같을 때만 총평균과 동일하다",
      "key_point": "ANOVA에서 SS_total = Σ(개별값 - 총평균)²으로 총변산을 계산한다",
      "common_mistake": "집단크기가 다를 때 집단평균의 단순 평균을 총평균이라고 착각하는 것"
    }
  },
  {
    "id": "DESCRIP_SS_024",
    "terminology": "제곱합 (Sum of Squares)",
    "terminology_ko": "제곱합",
    "terminology_en": "Sum of Squares",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "각 관측값과 평균 간 편차를 제곱하여 모두 합한 값으로, 분산과 표준편차를 계산하는 기초가 되는 변산성 지표이다.",
    "definition_en": "The sum of the squared deviations of each observation from the mean, serving as the foundation for calculating variance and standard deviation.",
    "significance": "분산분석(ANOVA)에서 변산의 원천을 분해(SS_total = SS_between + SS_within)하는 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "최소제곱법(least squares method)을 통해 SS 최소화 원리를 정립하였다"
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "제곱합의 분해를 분산분석의 수학적 기초로 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "편차점수",
        "name_en": "Deviation Score",
        "id": "DESCRIP_DS_025"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "집단간 제곱합",
        "name_en": "Between-Groups SS",
        "definition": "각 집단평균과 총평균 간 편차의 제곱합 (처치 효과 반영)"
      },
      {
        "name_ko": "집단내 제곱합",
        "name_en": "Within-Groups SS",
        "definition": "각 관측값과 해당 집단평균 간 편차의 제곱합 (오차 변산 반영)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SS = Σ(X - M)² → '편차 제곱의 총합'",
      "differential": "SS는 편차 제곱의 '합계'이고, 분산(MS)은 SS를 자유도로 나눈 '평균'이다",
      "key_point": "SS = ΣX² - (ΣX)²/N 라는 계산 공식으로 편리하게 구할 수 있다",
      "common_mistake": "SS와 분산을 혼동하는 것 — SS를 자유도(df)로 나누어야 분산(MS)이 된다"
    }
  },
  {
    "id": "DESCRIP_DS_025",
    "terminology": "편차점수 (Deviation Score)",
    "terminology_ko": "편차점수",
    "terminology_en": "Deviation Score",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "개별 관측값에서 평균을 뺀 값으로, 각 데이터가 평균으로부터 얼마나, 어떤 방향으로 벗어나 있는지를 나타낸다.",
    "definition_en": "The difference between an individual observation and the mean, indicating how far and in which direction each data point deviates from the average.",
    "significance": "분산, 표준편차, z점수 등 모든 산포 지표의 기초가 되며, 데이터의 상대적 위치를 이해하는 출발점이다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "오차 이론에서 편차의 수학적 성질을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "DESCRIP_SS_024"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편차 = X - M → 양수면 평균 위, 음수면 평균 아래",
      "differential": "편차점수는 원래 단위이고, z점수는 편차를 표준편차로 나누어 표준화한 값이다",
      "key_point": "모든 편차점수의 합은 반드시 0이 된다: Σ(X - M) = 0",
      "common_mistake": "편차의 합으로 산포를 측정하려는 것 — 편차의 합은 항상 0이므로 제곱합(SS)을 사용해야 한다"
    }
  },
  {
    "id": "DESCRIP_CV_026",
    "terminology": "변동계수 (Coefficient of Variation)",
    "terminology_ko": "변동계수",
    "terminology_en": "Coefficient of Variation",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "표준편차를 평균으로 나누어 백분율로 표현한 상대적 변산성 지표로, 단위나 평균이 다른 분포의 변산성을 비교할 때 사용된다.",
    "definition_en": "A relative measure of variability expressed as the ratio of the standard deviation to the mean, used to compare variability across distributions with different units or means.",
    "significance": "서로 다른 심리측정 도구나 다른 척도의 변산성을 동일한 기준으로 비교할 수 있게 해준다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "변동계수(CV)를 상대적 변산성 측정치로 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "변산성",
        "name_en": "Variability",
        "id": "DESCRIP_VB_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CV = (SD / M) × 100% → '평균 대비 몇 %나 퍼져 있나'",
      "differential": "표준편차는 절대적 산포(원래 단위)이고, 변동계수는 상대적 산포(비율)이므로 단위가 없다",
      "key_point": "평균이 0에 가까우면 CV가 매우 커져 해석이 어려워진다",
      "common_mistake": "평균이 0이거나 음수인 경우에 변동계수를 적용하려는 것 — CV는 비율척도에서만 의미 있다"
    }
  },
  {
    "id": "DESCRIP_TS_027",
    "terminology": "T점수 (T-Score)",
    "terminology_ko": "T점수",
    "terminology_en": "T-Score",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "z점수를 평균 50, 표준편차 10의 척도로 변환한 표준화 점수로, 음수와 소수를 피하여 해석과 소통을 용이하게 한다.",
    "definition_en": "A standardized score derived by transforming z-scores to a scale with a mean of 50 and standard deviation of 10, eliminating negative numbers and decimals.",
    "significance": "MMPI 등 주요 심리검사에서 프로파일 해석의 표준 척도로 사용되며, 임상적 절단점 설정에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 맥콜",
        "name_en": "William A. McCall",
        "contribution": "T점수 체계를 고안하여 교육 및 심리 측정에 도입하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "표준점수",
        "name_en": "Standard Score",
        "id": "DESCRIP_STD_028"
      },
      {
        "name_ko": "원점수",
        "name_en": "Raw Score",
        "id": "DESCRIP_RS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "T = 10z + 50 → z=0이면 T=50, z=1이면 T=60",
      "differential": "z점수는 평균=0, SD=1이고, T점수는 평균=50, SD=10이다 — MMPI에서 T≥65는 임상적 유의 수준",
      "key_point": "T점수 70 = z점수 2.0 = 평균에서 2 표준편차 위 = 상위 약 2.3%",
      "common_mistake": "T점수가 100점 만점의 백분율 점수라고 오해하는 것 — T점수는 표준화 점수이다"
    }
  },
  {
    "id": "DESCRIP_STD_028",
    "terminology": "표준점수 (Standard Score)",
    "terminology_ko": "표준점수",
    "terminology_en": "Standard Score",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "원점수를 평균과 표준편차를 이용하여 변환한 점수의 총칭으로, 서로 다른 분포의 점수를 공통 척도에서 비교할 수 있게 한다.",
    "definition_en": "A general term for scores transformed using the mean and standard deviation, enabling comparison of scores from different distributions on a common scale.",
    "significance": "심리검사에서 다양한 하위검사 점수를 동일한 기준으로 비교하고 프로파일을 작성하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "개인차 측정에서 표준화된 점수 비교의 필요성을 최초로 제기하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "T점수",
        "name_en": "T-Score",
        "id": "DESCRIP_TS_027"
      },
      {
        "name_ko": "원점수",
        "name_en": "Raw Score",
        "id": "DESCRIP_RS_029"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "definition": "평균=0, 표준편차=1로 변환한 가장 기본적인 표준점수"
      },
      {
        "name_ko": "T점수",
        "name_en": "T-Score",
        "definition": "평균=50, 표준편차=10으로 변환한 점수 (MMPI 등)"
      },
      {
        "name_ko": "IQ 편차점수",
        "name_en": "Deviation IQ",
        "definition": "평균=100, 표준편차=15로 변환한 지능검사 점수"
      },
      {
        "name_ko": "스태나인",
        "name_en": "Stanine",
        "definition": "1~9의 9단계로 구분한 표준점수 (평균=5, SD≈2)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "표준점수 = '표준화된(standardized)' 점수 → z, T, IQ, stanine 등 모두 포함",
      "differential": "표준점수는 선형 변환(z, T)과 비선형 변환(정규화 점수)으로 나뉜다",
      "key_point": "모든 표준점수는 z점수로부터 변환 가능하다: 새 점수 = z × (새 SD) + (새 평균)",
      "common_mistake": "서로 다른 표준점수 체계(z, T, IQ)를 직접 비교하는 것 — 반드시 같은 척도로 변환 후 비교해야 한다"
    }
  },
  {
    "id": "DESCRIP_RS_029",
    "terminology": "원점수 (Raw Score)",
    "terminology_ko": "원점수",
    "terminology_en": "Raw Score",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "통계적 변환 없이 측정 도구에서 직접 얻어진 점수로, 표준화나 변환의 기초가 되는 원래 측정값이다.",
    "definition_en": "The original, untransformed score obtained directly from a measurement instrument, serving as the basis for standardization and other transformations.",
    "significance": "심리검사의 원점수 자체는 의미 해석이 어려우므로, 규준과 비교하거나 표준점수로 변환하여 해석해야 한다.",
    "key_researchers": [
      {
        "name_ko": "리 크론바크",
        "name_en": "Lee Cronbach",
        "contribution": "검사 점수의 해석 틀에서 원점수와 규준 점수의 구분을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준점수",
        "name_en": "Standard Score",
        "id": "DESCRIP_STD_028"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "원(原)점수 = '원래 그대로의' 점수, 변환 전 출발점",
      "differential": "원점수는 검사에서 직접 얻은 값이고, 표준점수는 규준 집단의 평균·SD로 변환한 값이다",
      "key_point": "동일한 원점수라도 규준 집단이 다르면 표준점수(상대적 위치)가 달라진다",
      "common_mistake": "원점수가 높으면 무조건 우수하다고 판단하는 것 — 검사의 난이도와 규준에 따라 의미가 달라진다"
    }
  },
  {
    "id": "DESCRIP_CF_030",
    "terminology": "누적빈도 (Cumulative Frequency)",
    "terminology_ko": "누적빈도",
    "terminology_en": "Cumulative Frequency",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "특정 값 이하에 해당하는 모든 도수를 순차적으로 합산한 값으로, 분포에서 해당 값까지의 누적 사례 수를 나타낸다.",
    "definition_en": "The running total of frequencies up to and including a given value, showing the cumulative number of cases at or below that value.",
    "significance": "백분위 산출과 누적분포함수의 기초가 되어, 심리검사 규준 작성 시 점수 분포의 누적적 특성을 파악하는 데 사용된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "누적빈도를 이용한 오자이브(ogive) 곡선을 통계 분석에 도입하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "상대빈도",
        "name_en": "Relative Frequency",
        "id": "DESCRIP_RF_031"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      },
      {
        "name_ko": "누적분포함수",
        "name_en": "Cumulative Distribution Function",
        "id": "PROB_CDF_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "누적빈도 = 아래에서부터 '쌓아올린' 빈도",
      "differential": "누적빈도는 '이하 사례 수'이고, 누적상대빈도는 '이하 비율(%)'이다",
      "key_point": "누적빈도의 마지막 값은 전체 관측값의 수(N)와 같아야 한다",
      "common_mistake": "누적빈도와 단순 도수를 혼동하는 것 — 누적빈도는 항상 증가하거나 유지되며 감소하지 않는다"
    }
  },
  {
    "id": "DESCRIP_RF_031",
    "terminology": "상대빈도 (Relative Frequency)",
    "terminology_ko": "상대빈도",
    "terminology_en": "Relative Frequency",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "특정 값의 도수를 전체 관측값 수로 나눈 비율로, 해당 값이 전체에서 차지하는 비중을 나타낸다.",
    "definition_en": "The proportion of observations falling into a particular category, calculated by dividing the frequency by the total number of observations.",
    "significance": "표본 크기가 다른 분포를 비교할 때 유용하며, 확률의 경험적 추정치로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "리하르트 폰 미제스",
        "name_en": "Richard von Mises",
        "contribution": "상대빈도를 확률의 경험적 정의로 체계화한 빈도주의 확률론을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "누적빈도",
        "name_en": "Cumulative Frequency",
        "id": "DESCRIP_CF_030"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      },
      {
        "name_ko": "히스토그램",
        "name_en": "Histogram",
        "id": "DESCRIP_HG_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상대빈도 = f / N → '전체 중 몇 %인가'",
      "differential": "상대빈도는 비율(proportion)이고, 도수(frequency)는 절대적 횟수이다",
      "key_point": "모든 상대빈도의 합은 반드시 1(또는 100%)이 된다",
      "common_mistake": "상대빈도를 확률과 완전히 동일시하는 것 — 상대빈도는 확률의 추정치일 뿐이다"
    }
  },
  {
    "id": "DESCRIP_CI_032",
    "terminology": "급간 (Class Interval)",
    "terminology_ko": "급간",
    "terminology_en": "Class Interval",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "도수분포표에서 연속형 자료를 일정한 폭의 구간으로 나누는 단위로, 분포의 요약 수준을 결정한다.",
    "definition_en": "A defined range of values used to group continuous data in a frequency distribution table, determining the level of summarization.",
    "significance": "급간의 크기에 따라 히스토그램의 형태와 분포 해석이 달라지므로, 적절한 급간 설정이 자료 탐색의 정확성에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "허버트 스터지스",
        "name_en": "Herbert Sturges",
        "contribution": "급간 수를 결정하는 스터지스 공식(k = 1 + 3.322 log N)을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "히스토그램",
        "name_en": "Histogram",
        "id": "DESCRIP_HG_013"
      },
      {
        "name_ko": "상대빈도",
        "name_en": "Relative Frequency",
        "id": "DESCRIP_RF_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "급간 = '계급의 간격(폭)', 데이터를 담는 '구간 바구니'",
      "differential": "급간은 구간의 폭이고, 급간 수는 구간의 개수이다 — 급간이 좁으면 세밀하고, 넓으면 요약적이다",
      "key_point": "스터지스 공식: 급간 수 ≈ 1 + 3.322 × log₁₀(N)으로 대략적 급간 수를 결정한다",
      "common_mistake": "급간을 너무 좁게 설정하면 불규칙한 변동이 과도하게 드러나고, 너무 넓게 설정하면 분포의 세부 형태가 사라진다"
    }
  },
  {
    "id": "DESCRIP_FNS_033",
    "terminology": "다섯 수치 요약 (Five-Number Summary)",
    "terminology_ko": "다섯 수치 요약",
    "terminology_en": "Five-Number Summary",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "최소값, 제1사분위수(Q1), 중앙값(Q2), 제3사분위수(Q3), 최대값으로 구성된 분포 요약 방법으로, 상자그림의 기초가 된다.",
    "definition_en": "A set of five descriptive statistics—minimum, Q1, median, Q3, and maximum—that summarize a distribution and form the basis for box plots.",
    "significance": "복잡한 분포를 다섯 개 값으로 간결하게 요약하여 집단 간 빠른 비교를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "탐색적 자료분석에서 다섯 수치 요약과 상자그림을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상자그림",
        "name_en": "Box Plot",
        "id": "DESCRIP_BP_016"
      },
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      },
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "5수치 = Min, Q1, Median, Q3, Max → 상자그림의 5개 기준점",
      "differential": "다섯 수치 요약은 순서 통계량 기반이므로 극단값에 비교적 강건하고, 평균·표준편차 요약은 극단값에 민감하다",
      "key_point": "5수치 요약만으로 분포의 중심, 산포, 대칭성, 꼬리를 대략 파악할 수 있다",
      "common_mistake": "다섯 수치 요약이 분포의 모든 정보를 담고 있다고 생각하는 것 — 쌍봉 분포 등은 5수치 요약만으로 파악이 어렵다"
    }
  },
  {
    "id": "DESCRIP_OL_034",
    "terminology": "이상치 (Outlier)",
    "terminology_ko": "이상치",
    "terminology_en": "Outlier",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "나머지 데이터와 현저하게 다른 극단적인 관측값으로, 분포의 대표값과 변산성에 큰 영향을 미칠 수 있다.",
    "definition_en": "An observation that is markedly different from the rest of the data, potentially having a large influence on measures of central tendency and variability.",
    "significance": "심리학 연구에서 이상치는 측정 오류, 부주의한 응답, 또는 이질적 하위집단의 존재를 나타낼 수 있어, 자료 정제의 핵심 판단 대상이다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "IQR × 1.5 기준을 이용한 이상치 탐지 방법(Tukey's fences)을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상자그림",
        "name_en": "Box Plot",
        "id": "DESCRIP_BP_016"
      },
      {
        "name_ko": "사분위범위",
        "name_en": "Interquartile Range",
        "id": "DESCRIP_IQR_005"
      },
      {
        "name_ko": "절사평균",
        "name_en": "Trimmed Mean",
        "id": "DESCRIP_TM_021"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이상치 = '이상하게 동떨어진(out + lier)' 값",
      "differential": "이상치는 단순히 극단값이 아니라, 분포의 패턴에서 벗어난 값이다 — 비대칭 분포에서 한쪽만 이상치일 수 있다",
      "key_point": "Tukey 기준: Q1 - 1.5×IQR 미만이거나 Q3 + 1.5×IQR 초과하는 값을 이상치로 분류한다",
      "common_mistake": "이상치를 무조건 제거해야 한다고 생각하는 것 — 이상치가 연구적으로 의미 있는 발견일 수 있다"
    }
  },
  {
    "id": "DESCRIP_FP_035",
    "terminology": "도수다각형 (Frequency Polygon)",
    "terminology_ko": "도수다각형",
    "terminology_en": "Frequency Polygon",
    "category": "DESCRIP",
    "category_name": "기술통계 (Descriptive Statistics)",
    "definition": "각 급간의 중간값에 도수를 점으로 표시한 후 직선으로 연결한 그래프로, 분포의 형태를 연속적 곡선으로 나타낸다.",
    "definition_en": "A graph formed by connecting points plotted at the midpoint of each class interval at the corresponding frequency, displaying the distribution as a continuous line.",
    "significance": "여러 분포를 하나의 그래프에 겹쳐서 비교할 수 있어, 심리학 실험에서 조건 간 분포 형태의 차이를 시각적으로 파악하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "도수다각형을 히스토그램과 함께 통계적 시각화의 표준 도구로 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "히스토그램",
        "name_en": "Histogram",
        "id": "DESCRIP_HG_013"
      },
      {
        "name_ko": "도수분포",
        "name_en": "Frequency Distribution",
        "id": "DESCRIP_FD_012"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도수다각형 = 급간 중간점을 '점-선-점'으로 연결한 꺾은선",
      "differential": "히스토그램은 막대(면적)로 빈도를 표현하고, 도수다각형은 선(높이)으로 표현하여 겹쳐 그리기에 유리하다",
      "key_point": "그래프의 양 끝을 x축까지 연결하여 닫힌 다각형을 만들면 면적이 전체 빈도(N)에 비례한다",
      "common_mistake": "도수다각형의 점을 급간의 시작점이나 끝점에 찍는 것 — 반드시 급간의 중간값에 찍어야 한다"
    }
  }
];

TERMS_DATA.PROB = [
  {
    "id": "PROB_PR_001",
    "terminology": "확률 (Probability)",
    "terminology_ko": "확률",
    "terminology_en": "Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "특정 사건이 발생할 가능성을 0과 1 사이의 수치로 표현한 것으로, 0은 불가능, 1은 확실한 사건을 의미한다.",
    "definition_en": "A numerical measure between 0 and 1 expressing the likelihood that an event will occur, where 0 indicates impossibility and 1 indicates certainty.",
    "significance": "심리학 연구에서 통계적 추론의 기초가 되며, p값 해석과 가설검정의 논리적 토대를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "고전적 확률 이론을 체계화하고 확률론적 추론의 수학적 기초를 정립하였다"
      },
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률의 공리적 체계를 완성하여 현대 확률론의 기반을 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      },
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      },
      {
        "name_ko": "사건",
        "name_en": "Event",
        "id": "PROB_EV_027"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [
      {
        "name_ko": "고전적 확률",
        "name_en": "Classical Probability",
        "definition": "동일한 가능성의 결과들 중 관심 사건의 비율로 확률을 정의 (a priori)"
      },
      {
        "name_ko": "경험적 확률",
        "name_en": "Empirical Probability",
        "definition": "반복 시행에서 관찰된 상대빈도로 확률을 추정 (빈도주의)"
      },
      {
        "name_ko": "주관적 확률",
        "name_en": "Subjective Probability",
        "definition": "개인의 신념이나 경험에 기반한 확률 판단 (베이즈주의)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "확률 P = 원하는 결과 수 / 가능한 전체 결과 수 (고전적 정의)",
      "differential": "확률은 이론적 예측값이고, 상대빈도는 실제 관찰된 경험적 비율이다",
      "key_point": "모든 확률은 0 ≤ P(A) ≤ 1이며, 전체 표본공간의 확률은 1이다",
      "common_mistake": "확률이 1보다 클 수 있다고 생각하거나, 확률과 가능성(odds)을 혼동하는 것"
    }
  },
  {
    "id": "PROB_SND_002",
    "terminology": "표준정규분포 (Standard Normal Distribution)",
    "terminology_ko": "표준정규분포",
    "terminology_en": "Standard Normal Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "평균이 0이고 표준편차가 1인 특수한 정규분포로, z점수를 확률로 변환하는 기준 분포 역할을 한다.",
    "definition_en": "A special case of the normal distribution with a mean of 0 and standard deviation of 1, serving as the reference distribution for converting z-scores to probabilities.",
    "significance": "모든 정규분포를 하나의 공통 기준으로 변환할 수 있게 하여, 심리검사 점수 해석과 통계적 추론의 보편적 도구가 된다.",
    "key_researchers": [
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "표준정규분포의 수학적 함수를 최초로 유도하였다"
      },
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "오차의 분포로서 정규분포를 체계화하여 가우스 분포라는 이름의 기원이 되었다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "표준정규분포표",
        "name_en": "Standard Normal Table",
        "id": "PROB_SNT_018"
      },
      {
        "name_ko": "확률밀도함수",
        "name_en": "Probability Density Function",
        "id": "PROB_PDF_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표준정규 = N(0, 1) → 평균=0, SD=1인 '표준화된 종 모양'",
      "differential": "표준정규분포는 평균=0, SD=1로 고정된 하나의 분포이고, 일반 정규분포는 다양한 평균과 SD를 가질 수 있다",
      "key_point": "어떤 정규분포든 z = (X - μ) / σ 변환을 통해 표준정규분포로 변환할 수 있다",
      "common_mistake": "표준정규분포에서만 68-95-99.7 규칙이 적용된다고 생각하는 것 — 이 규칙은 모든 정규분포에 적용된다"
    }
  },
  {
    "id": "PROB_BN_003",
    "terminology": "이항분포 (Binomial Distribution)",
    "terminology_ko": "이항분포",
    "terminology_en": "Binomial Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "독립적인 n번의 시행에서 성공 확률이 p로 일정할 때, 성공 횟수의 확률분포로, 두 가지 결과만 존재하는 상황을 모형화한다.",
    "definition_en": "The probability distribution of the number of successes in n independent trials, each with a constant probability p of success, modeling binary outcome situations.",
    "significance": "심리학에서 이분적 반응(정답/오답, 예/아니오)의 확률을 분석하고, 신호탐지론이나 검정력 분석의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "베르누이 시행과 이항분포의 수학적 기초를 정립하였다"
      },
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "이항분포의 정규 근사를 발견하여 중심극한정리의 선구적 업적을 이루었다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "DESCRIP_ND_019"
      },
      {
        "name_ko": "기대값",
        "name_en": "Expected Value",
        "id": "PROB_EV_015"
      },
      {
        "name_ko": "이산확률분포",
        "name_en": "Discrete Probability Distribution",
        "id": "PROB_DPD_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이항(二項) = '두 가지(성공/실패)' 결과, B(n, p) = n번 시행, 성공확률 p",
      "differential": "이항분포는 고정된 n번 시행의 성공 횟수이고, 포아송분포는 일정 구간에서의 발생 횟수이다",
      "key_point": "이항분포의 평균 = np, 분산 = np(1-p)이고, n이 크면 정규분포로 근사된다",
      "common_mistake": "성공 확률이 시행마다 변하는 상황에 이항분포를 적용하는 것 — 이항분포는 p가 일정해야 한다"
    }
  },
  {
    "id": "PROB_PO_004",
    "terminology": "포아송분포 (Poisson Distribution)",
    "terminology_ko": "포아송분포",
    "terminology_en": "Poisson Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "일정한 시간이나 공간 단위에서 드물게 발생하는 사건의 횟수에 대한 확률분포로, 평균 발생률(λ)로 특성화된다.",
    "definition_en": "A probability distribution describing the number of rare events occurring in a fixed interval of time or space, characterized by the mean rate parameter (λ).",
    "significance": "심리학에서 사고, 극단 행동 등 희소한 사건의 발생 빈도를 모형화하고, 이항분포의 근사치로도 활용된다.",
    "key_researchers": [
      {
        "name_ko": "시메옹 드니 푸아송",
        "name_en": "Siméon Denis Poisson",
        "contribution": "대수의 법칙 연구에서 포아송분포를 최초로 유도하고 발표하였다"
      },
      {
        "name_ko": "라디슬라프 보르트키에비치",
        "name_en": "Ladislaus Bortkiewicz",
        "contribution": "프로이센 군대의 말 발차기 사망 데이터로 포아송분포의 실제 적용을 입증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이항분포",
        "name_en": "Binomial Distribution",
        "id": "PROB_BN_003"
      },
      {
        "name_ko": "이산확률분포",
        "name_en": "Discrete Probability Distribution",
        "id": "PROB_DPD_014"
      },
      {
        "name_ko": "기대값",
        "name_en": "Expected Value",
        "id": "PROB_EV_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "포아송 = '드문 사건의 횟수' 분포, λ(람다) 하나로 결정",
      "differential": "이항분포는 시행 횟수(n)가 정해져 있고, 포아송분포는 정해진 구간 내 발생 횟수에 상한이 없다",
      "key_point": "포아송분포의 평균 = 분산 = λ이며, λ가 클수록 정규분포에 근사한다",
      "common_mistake": "포아송분포를 적용할 때 사건의 독립성 가정을 확인하지 않는 것 — 사건 간 독립이어야 한다"
    }
  },
  {
    "id": "PROB_CP_005",
    "terminology": "조건부 확률 (Conditional Probability)",
    "terminology_ko": "조건부 확률",
    "terminology_en": "Conditional Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "한 사건이 이미 발생한 것으로 알려졌을 때 다른 사건이 발생할 확률로, P(A|B) = P(A∩B) / P(B)로 계산된다.",
    "definition_en": "The probability of an event occurring given that another event has already occurred, calculated as P(A|B) = P(A∩B) / P(B).",
    "significance": "심리학에서 진단 정확도(민감도, 특이도), 기저율 문제, 베이즈 추론의 핵심 개념으로 임상적 의사결정에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "조건부 확률의 역전(사후확률 추정)을 위한 베이즈 정리의 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "베이즈 정리",
        "name_en": "Bayes' Theorem",
        "id": "PROB_BT_010"
      },
      {
        "name_ko": "독립사건",
        "name_en": "Independent Events",
        "id": "PROB_IE_007"
      },
      {
        "name_ko": "결합확률",
        "name_en": "Joint Probability",
        "id": "PROB_JP_022"
      },
      {
        "name_ko": "확률의 곱셈법칙",
        "name_en": "Multiplication Rule",
        "id": "PROB_MR_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "P(A|B) = 'B가 일어났다는 조건 하에(|) A의 확률'",
      "differential": "조건부 확률 P(A|B)는 B가 주어진 상태에서 A의 확률이고, 결합확률 P(A∩B)는 A와 B가 동시에 일어날 확률이다",
      "key_point": "P(A|B) ≠ P(B|A) — 이 둘을 혼동하는 것이 '역확률 오류(inverse fallacy)'이다",
      "common_mistake": "P(질병|양성반응)과 P(양성반응|질병)를 같다고 착각하는 것 — 기저율을 고려해야 한다"
    }
  },
  {
    "id": "PROB_ME_006",
    "terminology": "배반사건 (Mutually Exclusive Events)",
    "terminology_ko": "배반사건",
    "terminology_en": "Mutually Exclusive Events",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "두 사건이 동시에 발생할 수 없는 관계로, 한 사건이 일어나면 다른 사건은 발생하지 않는다. P(A∩B) = 0이다.",
    "definition_en": "Events that cannot occur simultaneously — if one event occurs, the other cannot. Mathematically, P(A∩B) = 0.",
    "significance": "확률의 덧셈법칙을 적용할 때 배반 여부에 따라 공식이 달라지므로, 확률 계산의 정확성에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률 공리 체계에서 배반사건의 가법성을 공식화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립사건",
        "name_en": "Independent Events",
        "id": "PROB_IE_007"
      },
      {
        "name_ko": "확률의 덧셈법칙",
        "name_en": "Addition Rule",
        "id": "PROB_AR_019"
      },
      {
        "name_ko": "여사건",
        "name_en": "Complement",
        "id": "PROB_CM_021"
      },
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "배반 = '서로 배(排)척하여 반(反)대' → 겹침 = 0",
      "differential": "배반사건은 동시 발생 불가(교집합=0)이고, 독립사건은 한 사건이 다른 사건의 확률에 영향을 주지 않는 것이다",
      "key_point": "배반사건이면 P(A∪B) = P(A) + P(B)로 단순 합산이 가능하다",
      "common_mistake": "배반사건과 독립사건을 같은 개념으로 혼동하는 것 — 배반사건은 독립이 아니다(한쪽이 일어나면 다른 쪽은 반드시 불가능)"
    }
  },
  {
    "id": "PROB_IE_007",
    "terminology": "독립사건 (Independent Events)",
    "terminology_ko": "독립사건",
    "terminology_en": "Independent Events",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "한 사건의 발생이 다른 사건의 발생 확률에 영향을 주지 않는 관계로, P(A|B) = P(A)가 성립한다.",
    "definition_en": "Events where the occurrence of one does not affect the probability of the other, satisfying P(A|B) = P(A).",
    "significance": "심리학 실험에서 관측치의 독립성은 대부분의 통계 분석의 기본 가정이며, 이를 위반하면 결과가 왜곡될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "독립 사건의 확률 곱셈 법칙을 수학적으로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "배반사건",
        "name_en": "Mutually Exclusive Events",
        "id": "PROB_ME_006"
      },
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "확률의 곱셈법칙",
        "name_en": "Multiplication Rule",
        "id": "PROB_MR_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립 = A가 일어나든 안 일어나든 B의 확률은 '변함없다'",
      "differential": "독립사건은 한 사건이 다른 사건의 확률을 변화시키지 않고, 배반사건은 동시 발생이 불가능하다 — 이 둘은 서로 다른 개념이다",
      "key_point": "독립사건이면 P(A∩B) = P(A) × P(B)로 결합확률을 간단히 구할 수 있다",
      "common_mistake": "두 사건이 배반이면 독립이라고 생각하는 것 — 사실 배반사건은 독립이 아니다(확률이 0이 아닌 한)"
    }
  },
  {
    "id": "PROB_LLN_008",
    "terminology": "큰 수의 법칙 (Law of Large Numbers)",
    "terminology_ko": "큰 수의 법칙",
    "terminology_en": "Law of Large Numbers",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "표본 크기가 충분히 커지면 표본 평균이 모집단 평균에 점점 더 가까워진다는 확률 이론의 기본 법칙이다.",
    "definition_en": "A fundamental theorem stating that as sample size increases, the sample mean converges to the population mean with increasing precision.",
    "significance": "심리학 연구에서 충분한 표본 크기의 필요성을 정당화하고, 반복 실험의 결과가 안정적 추정치로 수렴함을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "큰 수의 법칙을 최초로 수학적으로 증명하였다(약한 법칙)"
      },
      {
        "name_ko": "에밀 보렐",
        "name_en": "Émile Borel",
        "contribution": "큰 수의 강한 법칙의 정립에 기여하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "모집단",
        "name_en": "Population",
        "id": "SAMPLE_PO_001"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "약한 큰 수의 법칙",
        "name_en": "Weak Law of Large Numbers",
        "definition": "표본 평균이 모평균에 확률적으로 수렴한다 (확률 수렴)"
      },
      {
        "name_ko": "강한 큰 수의 법칙",
        "name_en": "Strong Law of Large Numbers",
        "definition": "표본 평균이 모평균에 거의 확실하게 수렴한다 (거의 확실한 수렴)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "큰 수(大數)의 법칙 = 시행을 '많이' 할수록 결과가 '이론값에 수렴'",
      "differential": "큰 수의 법칙은 '평균의 수렴'이고, 중심극한정리는 '표본평균의 분포 형태(정규)'에 관한 것이다",
      "key_point": "이 법칙은 개별 결과가 아닌 평균이 수렴한다는 것이며, 개별 시행은 여전히 변동할 수 있다",
      "common_mistake": "도박사의 오류 — 이전 결과가 특정 방향이면 다음에 반대 결과가 나올 '확률이 높다'고 잘못 생각하는 것"
    }
  },
  {
    "id": "PROB_ND_009",
    "terminology": "정규분포 (Normal Distribution)",
    "terminology_ko": "정규분포",
    "terminology_en": "Normal Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "평균(μ)과 표준편차(σ)의 두 모수로 정의되는 좌우 대칭 종 모양의 연속확률분포로, 자연 현상과 심리 변인의 분포를 설명하는 핵심 모형이다.",
    "definition_en": "A continuous probability distribution defined by two parameters — mean (μ) and standard deviation (σ) — forming a symmetric bell-shaped curve that models many natural and psychological variables.",
    "significance": "중심극한정리에 의해 표본평균의 분포가 정규분포에 근사하므로, 거의 모든 모수적 추론통계의 이론적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "측정 오차 분포로 정규분포를 체계화하여 가우스 분포라고도 불린다"
      },
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "이항분포의 근사로서 정규분포의 수학적 형태를 최초로 유도하였다"
      },
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "중심극한정리를 통해 정규분포의 보편적 중요성을 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "확률밀도함수",
        "name_en": "Probability Density Function",
        "id": "PROB_PDF_016"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정규분포 N(μ, σ²) = 종 모양 + 68-95-99.7 규칙",
      "differential": "정규분포는 이론적 모형이고, 실제 데이터는 정규분포에 '근사'할 뿐 완전히 일치하지는 않는다",
      "key_point": "평균과 표준편차 두 모수만 알면 분포 전체가 결정되고, 곡선 아래 전체 면적 = 1이다",
      "common_mistake": "정규분포의 꼬리가 x축에 닿는다고 생각하는 것 — 이론적으로 꼬리는 무한히 뻗어 x축에 닿지 않는다(점근선)"
    }
  },
  {
    "id": "PROB_BT_010",
    "terminology": "베이즈 정리 (Bayes' Theorem)",
    "terminology_ko": "베이즈 정리",
    "terminology_en": "Bayes' Theorem",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "새로운 증거(데이터)가 주어졌을 때 사전확률을 사후확률로 갱신하는 공식으로, P(A|B) = P(B|A)·P(A) / P(B)이다.",
    "definition_en": "A formula for updating prior probability to posterior probability given new evidence: P(A|B) = P(B|A)·P(A) / P(B).",
    "significance": "심리학에서 임상 진단의 정확도(기저율 문제), 의사결정 연구, 베이즈 통계의 이론적 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "사후확률 추정의 수학적 기초를 담은 논문을 남겼다(사후 출판)"
      },
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "베이즈의 아이디어를 독립적으로 발전시키고 수학적으로 정교화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "PROB_PP_011"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "베이즈 = '사전(prior) + 증거(likelihood) → 사후(posterior)' 업데이트",
      "differential": "빈도주의 통계는 p값(데이터|가설)을 계산하고, 베이즈 통계는 사후확률(가설|데이터)을 직접 추정한다",
      "key_point": "기저율(사전확률)을 무시하면 잘못된 판단을 내릴 수 있다(기저율 무시 편향)",
      "common_mistake": "P(A|B)와 P(B|A)가 같다고 착각하는 것 — 베이즈 정리는 이 둘의 관계를 명확히 한다"
    }
  },
  {
    "id": "PROB_PP_011",
    "terminology": "사전확률 (Prior Probability)",
    "terminology_ko": "사전확률",
    "terminology_en": "Prior Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "새로운 데이터를 관찰하기 전에 기존 지식이나 경험에 기반하여 가설에 부여하는 초기 확률이다.",
    "definition_en": "The initial probability assigned to a hypothesis based on existing knowledge or experience before observing new data.",
    "significance": "베이즈 통계에서 분석의 출발점이 되며, 임상 심리학에서 유병률(기저율)이 진단적 추론에 미치는 영향을 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "사전확률에서 사후확률로의 갱신 원리를 최초로 정립하였다"
      },
      {
        "name_ko": "해럴드 제프리스",
        "name_en": "Harold Jeffreys",
        "contribution": "무정보 사전확률(non-informative prior)의 체계를 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "베이즈 정리",
        "name_en": "Bayes' Theorem",
        "id": "PROB_BT_010"
      },
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [
      {
        "name_ko": "정보적 사전확률",
        "name_en": "Informative Prior",
        "definition": "이전 연구나 전문가 지식에 기반한 구체적인 사전 분포"
      },
      {
        "name_ko": "무정보 사전확률",
        "name_en": "Non-informative Prior",
        "definition": "특정 가설을 선호하지 않는 균등하거나 모호한 사전 분포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사전(事前) 확률 = '데이터를 보기 전(前)에' 알고 있는 확률",
      "differential": "사전확률은 데이터 관찰 전의 믿음이고, 사후확률은 데이터 관찰 후 갱신된 믿음이다",
      "key_point": "사전확률이 극단적이면(예: 0 또는 1에 가까우면) 새로운 데이터로도 크게 변하지 않는다",
      "common_mistake": "사전확률을 주관적이라는 이유로 무시하는 것 — 기저율(유병률)은 객관적 사전확률의 대표적 예이다"
    }
  },
  {
    "id": "PROB_PD_012",
    "terminology": "확률분포 (Probability Distribution)",
    "terminology_ko": "확률분포",
    "terminology_en": "Probability Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률변수가 취할 수 있는 모든 값과 각 값에 대응하는 확률을 체계적으로 나타낸 함수 또는 표이다.",
    "definition_en": "A function or table that systematically describes all possible values of a random variable and their corresponding probabilities.",
    "significance": "심리학 연구에서 이론적 분포 모형(정규, t, F, 카이제곱 등)을 통해 검정 통계량의 유의성을 판단하는 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "현대 확률론의 측도론적 기초 위에 확률분포 이론을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이산확률분포",
        "name_en": "Discrete Probability Distribution",
        "id": "PROB_DPD_014"
      },
      {
        "name_ko": "연속확률분포",
        "name_en": "Continuous Probability Distribution",
        "id": "PROB_CPD_013"
      },
      {
        "name_ko": "확률밀도함수",
        "name_en": "Probability Density Function",
        "id": "PROB_PDF_016"
      },
      {
        "name_ko": "기대값",
        "name_en": "Expected Value",
        "id": "PROB_EV_015"
      }
    ],
    "sub_types": [
      {
        "name_ko": "이산확률분포",
        "name_en": "Discrete Probability Distribution",
        "definition": "셀 수 있는 값들에 대한 확률분포 (이항, 포아송 등)"
      },
      {
        "name_ko": "연속확률분포",
        "name_en": "Continuous Probability Distribution",
        "definition": "연속적인 값 범위에 대한 확률분포 (정규, t, F 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "확률분포 = '모든 가능한 값 + 각각의 확률'을 정리한 지도",
      "differential": "도수분포는 실제 데이터의 경험적 분포이고, 확률분포는 이론적/수학적 모형이다",
      "key_point": "유효한 확률분포의 조건: 모든 확률이 0 이상이고, 전체 합(또는 적분)이 1이다",
      "common_mistake": "확률분포의 y축 값(밀도)을 확률로 직접 해석하는 것 — 연속분포에서 확률은 면적(구간)으로 계산해야 한다"
    }
  },
  {
    "id": "PROB_CPD_013",
    "terminology": "연속확률분포 (Continuous Probability Distribution)",
    "terminology_ko": "연속확률분포",
    "terminology_en": "Continuous Probability Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률변수가 연속적인 값을 취하는 확률분포로, 특정 구간의 확률은 곡선 아래 면적으로 계산된다.",
    "definition_en": "A probability distribution for a continuous random variable where probabilities are calculated as areas under the curve over specified intervals.",
    "significance": "심리학에서 사용되는 정규분포, t분포, F분포, 카이제곱분포 등 주요 검정 분포가 모두 연속확률분포에 속한다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "연속확률분포의 대표적 예인 정규분포의 수학적 형태를 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이산확률분포",
        "name_en": "Discrete Probability Distribution",
        "id": "PROB_DPD_014"
      },
      {
        "name_ko": "확률밀도함수",
        "name_en": "Probability Density Function",
        "id": "PROB_PDF_016"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "누적분포함수",
        "name_en": "Cumulative Distribution Function",
        "id": "PROB_CDF_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "연속 = '끊김 없는' 변수 → 확률 = '곡선 아래 면적'",
      "differential": "이산분포에서는 P(X=x)가 확률이지만, 연속분포에서는 P(X=x)=0이고 P(a≤X≤b)가 의미 있는 확률이다",
      "key_point": "연속분포에서 특정 한 점의 확률은 정확히 0이다 — 확률은 반드시 구간으로 계산한다",
      "common_mistake": "연속분포에서 P(X=3) 같은 점 확률을 0이 아닌 값으로 생각하는 것"
    }
  },
  {
    "id": "PROB_DPD_014",
    "terminology": "이산확률분포 (Discrete Probability Distribution)",
    "terminology_ko": "이산확률분포",
    "terminology_en": "Discrete Probability Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률변수가 셀 수 있는 유한하거나 가산무한한 값을 취하는 확률분포로, 각 값에 직접 확률이 대응된다.",
    "definition_en": "A probability distribution for a random variable that takes countable (finite or countably infinite) values, with probabilities assigned directly to each value.",
    "significance": "심리학에서 정답 수, 선택 빈도 등 셀 수 있는 결과 변인의 분포를 모형화하는 데 사용된다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "이산확률분포의 대표적 예인 이항분포의 수학적 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연속확률분포",
        "name_en": "Continuous Probability Distribution",
        "id": "PROB_CPD_013"
      },
      {
        "name_ko": "이항분포",
        "name_en": "Binomial Distribution",
        "id": "PROB_BN_003"
      },
      {
        "name_ko": "포아송분포",
        "name_en": "Poisson Distribution",
        "id": "PROB_PO_004"
      },
      {
        "name_ko": "기대값",
        "name_en": "Expected Value",
        "id": "PROB_EV_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이산(離散) = '떨어져 있는(셀 수 있는)' 값들의 분포",
      "differential": "이산분포는 막대그래프로 표현하고, 연속분포는 매끄러운 곡선으로 표현한다",
      "key_point": "이산분포에서 모든 가능한 값의 확률 합은 정확히 1이다: ΣP(X=x) = 1",
      "common_mistake": "이산변수라도 값의 종류가 매우 많으면 연속변수처럼 취급할 수 있다는 점을 간과하는 것"
    }
  },
  {
    "id": "PROB_EV_015",
    "terminology": "기대값 (Expected Value)",
    "terminology_ko": "기대값",
    "terminology_en": "Expected Value",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률변수의 모든 가능한 값에 해당 확률을 곱하여 합산한 값으로, 장기적으로 기대되는 평균값을 나타낸다.",
    "definition_en": "The sum of all possible values of a random variable weighted by their probabilities, representing the long-run average expected outcome.",
    "significance": "심리학에서 의사결정 이론, 효용 함수, 기대효용 이론의 핵심 개념으로 합리적 선택의 기준을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "크리스티안 하위헌스",
        "name_en": "Christiaan Huygens",
        "contribution": "기대값(기댓값)의 개념을 확률 이론에 최초로 도입하였다"
      },
      {
        "name_ko": "다니엘 베르누이",
        "name_en": "Daniel Bernoulli",
        "contribution": "기대효용 이론을 통해 기대값의 심리적 해석을 확장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      },
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "E(X) = ΣxP(x) → '각 결과 × 확률'의 총합 = 장기적 평균",
      "differential": "기대값은 이론적 확률분포의 평균(모평균 μ)이고, 표본평균은 실제 데이터의 산술평균이다",
      "key_point": "기대값이 반드시 실제로 관찰 가능한 값일 필요는 없다 (예: 주사위 기대값 = 3.5)",
      "common_mistake": "기대값이 가장 흔히 나타나는 값(최빈값)이라고 생각하는 것 — 기대값은 확률 가중 평균이다"
    }
  },
  {
    "id": "PROB_PDF_016",
    "terminology": "확률밀도함수 (Probability Density Function)",
    "terminology_ko": "확률밀도함수",
    "terminology_en": "Probability Density Function",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "연속확률변수에서 각 값 근처의 확률 밀도를 나타내는 함수로, 특정 구간의 확률은 함수 곡선 아래의 면적으로 구한다.",
    "definition_en": "A function describing the relative likelihood of a continuous random variable taking on a given value, where probability is calculated as the area under the curve over an interval.",
    "significance": "정규분포, t분포, F분포 등 심리학 통계에서 사용되는 연속분포의 수학적 표현이며, 확률 계산의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "정규분포의 확률밀도함수를 명시적으로 정의하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "누적분포함수",
        "name_en": "Cumulative Distribution Function",
        "id": "PROB_CDF_017"
      },
      {
        "name_ko": "연속확률분포",
        "name_en": "Continuous Probability Distribution",
        "id": "PROB_CPD_013"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PDF = 확률의 '밀도(농도)' → 곡선이 높은 곳 = 값이 나올 가능성이 '밀집'",
      "differential": "PDF는 확률 밀도(미분 형태)이고, CDF는 누적 확률(적분 형태)이다",
      "key_point": "f(x) 자체는 확률이 아니라 밀도이므로 1보다 클 수 있다 — 확률은 면적(적분값)이다",
      "common_mistake": "f(x)의 값을 직접 확률로 해석하는 것 — PDF의 y축 값은 밀도이지 확률이 아니다"
    }
  },
  {
    "id": "PROB_CDF_017",
    "terminology": "누적분포함수 (Cumulative Distribution Function)",
    "terminology_ko": "누적분포함수",
    "terminology_en": "Cumulative Distribution Function",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률변수가 특정 값 이하일 확률을 나타내는 함수로, F(x) = P(X ≤ x)이며, 0에서 1까지 단조증가한다.",
    "definition_en": "A function giving the probability that a random variable is less than or equal to a given value: F(x) = P(X ≤ x), monotonically increasing from 0 to 1.",
    "significance": "p값 계산, 백분위 결정, 신뢰구간 산출 등 통계적 추론의 핵심 도구로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률론의 공리적 체계에서 분포함수의 수학적 성질을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률밀도함수",
        "name_en": "Probability Density Function",
        "id": "PROB_PDF_016"
      },
      {
        "name_ko": "백분위",
        "name_en": "Percentile",
        "id": "DESCRIP_PC_011"
      },
      {
        "name_ko": "누적빈도",
        "name_en": "Cumulative Frequency",
        "id": "DESCRIP_CF_030"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CDF = F(x) = 'x 이하일 확률' → 왼쪽에서부터 쌓아가는 확률",
      "differential": "CDF는 P(X ≤ x)로 확률 자체를 나타내고, PDF는 f(x)로 밀도를 나타낸다 — CDF는 PDF의 적분",
      "key_point": "CDF는 항상 0에서 시작하여 1로 수렴하며, 절대로 감소하지 않는다(단조증가)",
      "common_mistake": "CDF의 기울기가 확률이라고 생각하는 것 — CDF의 기울기는 PDF(밀도)이고, CDF의 값 자체가 누적확률이다"
    }
  },
  {
    "id": "PROB_SNT_018",
    "terminology": "표준정규분포표 (Standard Normal Table)",
    "terminology_ko": "표준정규분포표",
    "terminology_en": "Standard Normal Table",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "z점수에 대응하는 누적확률(또는 면적)을 정리한 표로, z값을 확률로, 확률을 z값으로 변환하는 데 사용된다.",
    "definition_en": "A table listing cumulative probabilities (areas under the curve) corresponding to z-scores, used to convert between z-values and probabilities.",
    "significance": "컴퓨터 이전 시대 통계 분석의 필수 도구였으며, 현재도 z점수와 확률의 관계를 이해하는 교육적 목적으로 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "통계 표의 편찬 사업을 주도하여 표준정규분포표를 포함한 주요 통계 표를 체계화하였다"
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "「연구자를 위한 통계적 방법」에서 널리 사용되는 통계 표를 보급하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "누적분포함수",
        "name_en": "Cumulative Distribution Function",
        "id": "PROB_CDF_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "z표 = 'z점수 → 확률' 또는 '확률 → z점수'로 변환하는 사전",
      "differential": "z표는 표준정규분포(N(0,1))에만 적용되고, t표나 F표는 각각 해당 분포에 적용된다",
      "key_point": "z = 1.96에 대응하는 양쪽 꼬리 면적이 0.05이므로, 95% 신뢰구간에서 핵심 값이다",
      "common_mistake": "z표의 확률값이 양쪽 꼬리인지 한쪽 꼬리인지 혼동하는 것 — 표의 유형을 반드시 확인해야 한다"
    }
  },
  {
    "id": "PROB_AR_019",
    "terminology": "확률의 덧셈법칙 (Addition Rule of Probability)",
    "terminology_ko": "확률의 덧셈법칙",
    "terminology_en": "Addition Rule of Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "두 사건 A 또는 B가 발생할 확률을 구하는 법칙으로, P(A∪B) = P(A) + P(B) - P(A∩B)이다.",
    "definition_en": "A rule for calculating the probability of event A or event B occurring: P(A∪B) = P(A) + P(B) - P(A∩B).",
    "significance": "심리학 연구에서 복합 사건의 확률을 정확하게 계산하기 위한 기본 규칙으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률의 공리적 체계에서 덧셈법칙의 수학적 기초를 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률의 곱셈법칙",
        "name_en": "Multiplication Rule",
        "id": "PROB_MR_020"
      },
      {
        "name_ko": "배반사건",
        "name_en": "Mutually Exclusive Events",
        "id": "PROB_ME_006"
      },
      {
        "name_ko": "결합확률",
        "name_en": "Joint Probability",
        "id": "PROB_JP_022"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "P(A 또는 B) = P(A) + P(B) - P(A 그리고 B) → '겹치는 부분 빼기'",
      "differential": "덧셈법칙은 'A 또는 B(합사건)'의 확률이고, 곱셈법칙은 'A 그리고 B(곱사건)'의 확률이다",
      "key_point": "배반사건이면 P(A∩B)=0이므로 단순히 P(A)+P(B)로 계산할 수 있다",
      "common_mistake": "중복 부분(교집합)을 빼지 않고 단순히 확률을 더하는 것 — 배반이 아니면 겹침을 빼야 한다"
    }
  },
  {
    "id": "PROB_MR_020",
    "terminology": "확률의 곱셈법칙 (Multiplication Rule of Probability)",
    "terminology_ko": "확률의 곱셈법칙",
    "terminology_en": "Multiplication Rule of Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "두 사건 A와 B가 동시에 발생할 확률을 구하는 법칙으로, P(A∩B) = P(A) × P(B|A)이다.",
    "definition_en": "A rule for calculating the probability of both events A and B occurring: P(A∩B) = P(A) × P(B|A).",
    "significance": "심리학에서 연속적 사건의 결합확률을 구하거나, 검사의 교차타당도를 평가하는 데 적용된다.",
    "key_researchers": [
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "독립사건에 대한 곱셈법칙의 수학적 기초를 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률의 덧셈법칙",
        "name_en": "Addition Rule",
        "id": "PROB_AR_019"
      },
      {
        "name_ko": "독립사건",
        "name_en": "Independent Events",
        "id": "PROB_IE_007"
      },
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "결합확률",
        "name_en": "Joint Probability",
        "id": "PROB_JP_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "P(A 그리고 B) = P(A) × P(B|A) → 'A가 일어난 후 B도 일어날 확률'",
      "differential": "독립사건이면 P(A∩B)=P(A)×P(B)로 단순화되고, 종속사건이면 조건부확률을 반드시 사용해야 한다",
      "key_point": "독립사건의 곱셈법칙: P(A∩B)=P(A)×P(B) — 조건부확률이 원래 확률과 같으므로 단순 곱셈",
      "common_mistake": "종속사건에서도 단순히 P(A)×P(B)를 계산하는 것 — 독립이 아니면 조건부확률을 써야 한다"
    }
  },
  {
    "id": "PROB_CM_021",
    "terminology": "여사건 (Complement)",
    "terminology_ko": "여사건",
    "terminology_en": "Complement",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "특정 사건 A가 발생하지 않는 사건으로, P(A') = 1 - P(A)이다. 사건 A와 여사건 A'는 전체 표본공간을 구성한다.",
    "definition_en": "The event consisting of all outcomes not in event A, with P(A') = 1 - P(A). Event A and its complement together comprise the entire sample space.",
    "significance": "복잡한 확률 문제에서 직접 계산이 어려울 때 '1에서 빼기' 전략으로 확률을 간편하게 구하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률 공리에서 여사건의 성질을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      },
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      },
      {
        "name_ko": "배반사건",
        "name_en": "Mutually Exclusive Events",
        "id": "PROB_ME_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "여사건 = 'A가 아닌 나머지 전부' → P(A') = 1 - P(A)",
      "differential": "여사건은 A의 반대(전체에서 A를 뺀 것)이고, 배반사건은 A와 동시에 일어날 수 없는 사건이다",
      "key_point": "'적어도 하나' 문제는 여사건을 이용하면 쉽다: P(적어도 1개) = 1 - P(하나도 없음)",
      "common_mistake": "여사건과 반대 결과를 혼동하는 것 — 주사위에서 {1,2}의 여사건은 {3,4,5,6}이지 {6}만이 아니다"
    }
  },
  {
    "id": "PROB_JP_022",
    "terminology": "결합확률 (Joint Probability)",
    "terminology_ko": "결합확률",
    "terminology_en": "Joint Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "두 개 이상의 사건이 동시에 발생할 확률로, P(A∩B)로 표기한다.",
    "definition_en": "The probability of two or more events occurring simultaneously, denoted as P(A∩B).",
    "significance": "심리학에서 두 진단이 동시에 나타날 확률(공병률), 공변 패턴의 분석 등에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "확률론에서 결합확률의 체계적 계산법을 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "주변확률",
        "name_en": "Marginal Probability",
        "id": "PROB_MP_023"
      },
      {
        "name_ko": "확률의 곱셈법칙",
        "name_en": "Multiplication Rule",
        "id": "PROB_MR_020"
      },
      {
        "name_ko": "독립사건",
        "name_en": "Independent Events",
        "id": "PROB_IE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "결합확률 = P(A 그리고 B) = 두 사건의 '교집합' 확률",
      "differential": "결합확률은 P(A∩B)로 두 사건의 동시 발생이고, 주변확률은 P(A) 또는 P(B)로 한 사건만의 확률이다",
      "key_point": "결합확률표(contingency table)에서 셀 내부의 값이 결합확률이고, 행/열 합계가 주변확률이다",
      "common_mistake": "결합확률 P(A∩B)와 조건부확률 P(A|B)를 혼동하는 것"
    }
  },
  {
    "id": "PROB_MP_023",
    "terminology": "주변확률 (Marginal Probability)",
    "terminology_ko": "주변확률",
    "terminology_en": "Marginal Probability",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "결합확률표에서 한 변인에 대해 다른 변인의 모든 수준을 합산한 확률로, 해당 변인 단독의 확률을 나타낸다.",
    "definition_en": "The probability of a single event obtained by summing joint probabilities over all levels of the other variable, representing the unconditional probability of that event.",
    "significance": "심리학에서 기저율(base rate) 파악, 진단 정확도 평가 시 개별 사건의 전반적 확률을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "확률론에서 주변확률과 결합확률의 관계를 수학적으로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결합확률",
        "name_en": "Joint Probability",
        "id": "PROB_JP_022"
      },
      {
        "name_ko": "조건부 확률",
        "name_en": "Conditional Probability",
        "id": "PROB_CP_005"
      },
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "PROB_PP_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "주변(marginal) = 결합확률표의 '가장자리(margin)' 합계",
      "differential": "주변확률은 한 변인만의 무조건 확률이고, 조건부확률은 다른 사건을 전제로 한 확률이다",
      "key_point": "P(A) = ΣP(A∩Bᵢ) — 모든 B의 수준에 걸쳐 결합확률을 합하면 주변확률이 된다(전체 확률 법칙)",
      "common_mistake": "주변확률을 결합확률의 일부로 혼동하는 것 — 주변확률은 한 변인에 대한 전체 합계이다"
    }
  },
  {
    "id": "PROB_PM_024",
    "terminology": "순열 (Permutation)",
    "terminology_ko": "순열",
    "terminology_en": "Permutation",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "n개 원소에서 r개를 선택하여 순서를 고려하여 나열하는 경우의 수로, nPr = n! / (n-r)!로 계산된다.",
    "definition_en": "The number of ways to arrange r items selected from n items where order matters, calculated as nPr = n! / (n-r)!.",
    "significance": "확률 계산에서 순서가 의미 있는 사건의 경우의 수를 구하는 기초가 되며, 실험설계에서 조건 제시 순서를 결정하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "블레즈 파스칼",
        "name_en": "Blaise Pascal",
        "contribution": "조합론과 순열의 체계적 연구를 확률론의 기초로 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조합",
        "name_en": "Combination",
        "id": "PROB_CB_025"
      },
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "순열 = '순서(順)가 있는 배열(列)' → ABC ≠ BAC",
      "differential": "순열은 순서가 중요하고(ABC≠BAC), 조합은 순서가 중요하지 않다(ABC=BAC)",
      "key_point": "nPr = n! / (n-r)!, 특히 nPn = n!(모든 원소의 전체 배열)",
      "common_mistake": "순열과 조합을 구분하지 않는 것 — 순서가 의미 있으면 순열, 없으면 조합을 사용한다"
    }
  },
  {
    "id": "PROB_CB_025",
    "terminology": "조합 (Combination)",
    "terminology_ko": "조합",
    "terminology_en": "Combination",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "n개 원소에서 순서를 고려하지 않고 r개를 선택하는 경우의 수로, nCr = n! / [r!(n-r)!]로 계산된다.",
    "definition_en": "The number of ways to select r items from n items without regard to order, calculated as nCr = n! / [r!(n-r)!].",
    "significance": "이항분포의 확률 계산에서 핵심 계수이며, 심리학 실험에서 조건 조합을 설계하는 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "블레즈 파스칼",
        "name_en": "Blaise Pascal",
        "contribution": "파스칼의 삼각형을 통해 조합 수의 체계적 계산법을 발전시켰다"
      },
      {
        "name_ko": "피에르 드 페르마",
        "name_en": "Pierre de Fermat",
        "contribution": "파스칼과의 서신에서 조합론을 확률 문제에 적용하는 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "순열",
        "name_en": "Permutation",
        "id": "PROB_PM_024"
      },
      {
        "name_ko": "이항분포",
        "name_en": "Binomial Distribution",
        "id": "PROB_BN_003"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조합 = '조(짜맞추기)합(합치기)' → 순서 무관, 구성만 중요",
      "differential": "nCr = nPr / r! → 순열에서 순서를 무시(r!로 나누기)하면 조합이 된다",
      "key_point": "이항계수 nCr은 이항분포에서 성공 r회의 경우의 수를 나타낸다",
      "common_mistake": "조합 문제에서 순서를 고려하여 과대 계산하는 것 — {A,B,C}와 {C,B,A}는 같은 조합이다"
    }
  },
  {
    "id": "PROB_SS_026",
    "terminology": "표본공간 (Sample Space)",
    "terminology_ko": "표본공간",
    "terminology_en": "Sample Space",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률 실험에서 발생할 수 있는 모든 가능한 결과의 집합으로, 기호 S 또는 Ω로 표기한다.",
    "definition_en": "The set of all possible outcomes of a probability experiment, denoted by S or Ω.",
    "significance": "확률을 정의하고 계산하는 출발점으로, 심리학 연구에서 가능한 결과를 체계적으로 파악하는 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "공리적 확률론에서 표본공간을 확률 체계의 기본 요소로 정의하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사건",
        "name_en": "Event",
        "id": "PROB_EV_027"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      },
      {
        "name_ko": "여사건",
        "name_en": "Complement",
        "id": "PROB_CM_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "표본공간 S = '가능한 모든 결과의 목록', 주사위 S = {1,2,3,4,5,6}",
      "differential": "표본공간은 모든 가능한 결과의 전체 집합이고, 사건은 표본공간의 부분집합이다",
      "key_point": "P(S) = 1 — 표본공간 전체의 확률은 항상 1이다",
      "common_mistake": "표본공간의 원소를 빠뜨리는 것 — 모든 가능한 결과를 빠짐없이 포함해야 한다"
    }
  },
  {
    "id": "PROB_EV_027",
    "terminology": "사건 (Event)",
    "terminology_ko": "사건",
    "terminology_en": "Event",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "표본공간의 부분집합으로, 관심 있는 하나 이상의 결과로 구성된 집합이다.",
    "definition_en": "A subset of the sample space consisting of one or more outcomes of interest.",
    "significance": "확률의 대상이 되는 기본 단위로, 심리학 연구에서 특정 결과 패턴의 발생 가능성을 분석하는 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률론의 공리적 체계에서 사건을 측정 가능한 집합으로 정의하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      },
      {
        "name_ko": "확률",
        "name_en": "Probability",
        "id": "PROB_PR_001"
      },
      {
        "name_ko": "배반사건",
        "name_en": "Mutually Exclusive Events",
        "id": "PROB_ME_006"
      },
      {
        "name_ko": "독립사건",
        "name_en": "Independent Events",
        "id": "PROB_IE_007"
      }
    ],
    "sub_types": [
      {
        "name_ko": "단순사건",
        "name_en": "Simple Event",
        "definition": "표본공간의 원소 하나로 구성된 사건 (더 이상 분해 불가)"
      },
      {
        "name_ko": "복합사건",
        "name_en": "Compound Event",
        "definition": "두 개 이상의 단순사건으로 구성된 사건"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사건 = 표본공간(S)의 '부분집합', 예: 주사위 짝수 = {2,4,6}",
      "differential": "사건은 관심 있는 결과의 집합이고, 표본공간은 모든 가능한 결과의 전체 집합이다",
      "key_point": "사건의 확률 = 사건에 포함된 결과의 확률 합 (동일확률 가정 시: 사건 원소 수 / 전체 원소 수)",
      "common_mistake": "사건(event)과 결과(outcome)를 구분하지 않는 것 — 결과는 개별 원소이고, 사건은 원소들의 집합이다"
    }
  },
  {
    "id": "PROB_TD_028",
    "terminology": "t분포 (t-Distribution)",
    "terminology_ko": "t분포",
    "terminology_en": "t-Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "모집단 표준편차를 모를 때 표본 통계량의 분포를 기술하는 연속확률분포로, 자유도에 의해 형태가 결정되며 정규분포보다 꼬리가 두텁다.",
    "definition_en": "A continuous probability distribution describing the distribution of sample statistics when the population standard deviation is unknown, with heavier tails than the normal distribution and shape determined by degrees of freedom.",
    "significance": "심리학의 대부분의 연구에서 모표준편차를 모르므로, t분포는 t검정과 회귀분석 등 추론통계의 핵심 분포이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William Sealy Gosset",
        "contribution": "'Student'라는 필명으로 소표본에서의 t분포를 발견하고 발표하였다"
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "t분포의 수학적 성질을 엄밀히 증명하고 자유도 개념을 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "독립표본t검정",
        "name_en": "Independent-Samples t-Test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "t분포 = '정규분포의 두꺼운 꼬리 버전', df↑ → 정규분포에 근접",
      "differential": "t분포는 모 σ를 모를 때(s로 추정) 사용하고, z분포(표준정규)는 모 σ를 알 때 사용한다",
      "key_point": "자유도가 증가할수록 t분포는 정규분포에 수렴하며, df≥30이면 거의 동일하다",
      "common_mistake": "t분포가 항상 정규분포와 같다고 가정하는 것 — 소표본에서는 꼬리가 상당히 두텁다"
    }
  },
  {
    "id": "PROB_FD_029",
    "terminology": "F분포 (F-Distribution)",
    "terminology_ko": "F분포",
    "terminology_en": "F-Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "두 독립적인 카이제곱 변수의 비율로 정의되는 연속확률분포로, 분산분석(ANOVA)과 회귀분석에서 분산 비교에 사용된다.",
    "definition_en": "A continuous probability distribution defined as the ratio of two independent chi-square variables, used in ANOVA and regression analysis for comparing variances.",
    "significance": "심리학 실험에서 집단 간 차이를 검정하는 ANOVA의 핵심 검정분포이며, 회귀모형의 전체 유의성 검정에도 사용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산분석과 함께 F분포의 이론적 기초를 확립하였다(F는 Fisher의 첫 글자)"
      },
      {
        "name_ko": "조지 스네데커",
        "name_en": "George W. Snedecor",
        "contribution": "피셔를 기리며 F비(F-ratio)라는 명칭을 도입하고 통계 교육에 보급하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "카이제곱 분포",
        "name_en": "Chi-Square Distribution",
        "id": "PROB_CS_030"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "F = Fisher의 F, 두 분산의 비(MS_between / MS_within)",
      "differential": "t분포는 평균 차이를 검정하고, F분포는 분산의 비를 검정한다 — 사실 t² = F (df₁=1일 때)",
      "key_point": "F분포는 항상 양수이고 오른쪽으로 치우친 비대칭 분포이며, 두 개의 자유도(df₁, df₂)로 결정된다",
      "common_mistake": "F값이 음수가 될 수 있다고 생각하는 것 — F는 분산의 비율이므로 항상 0 이상이다"
    }
  },
  {
    "id": "PROB_CS_030",
    "terminology": "카이제곱 분포 (Chi-Square Distribution)",
    "terminology_ko": "카이제곱 분포",
    "terminology_en": "Chi-Square Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "독립적인 표준정규 변수들의 제곱합으로 정의되는 연속확률분포로, 적합도 검정과 독립성 검정에 사용된다.",
    "definition_en": "A continuous probability distribution defined as the sum of squares of independent standard normal variables, used for goodness-of-fit and independence tests.",
    "significance": "범주형 데이터의 분석에서 핵심적인 검정분포이며, 심리학의 설문 응답 패턴, 진단 범주 간 연관성 분석에 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "카이제곱 적합도 검정을 개발하여 범주형 데이터 분석의 기초를 마련하였다"
      },
      {
        "name_ko": "프리드리히 헬메르트",
        "name_en": "Friedrich Helmert",
        "contribution": "카이제곱 분포의 수학적 성질을 초기에 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "F분포",
        "name_en": "F-Distribution",
        "id": "PROB_FD_029"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "χ² = z₁² + z₂² + ... → '표준정규 변수의 제곱합'",
      "differential": "카이제곱 검정은 범주형 데이터(빈도)에 사용하고, t검정과 F검정은 연속형 데이터(평균/분산)에 사용한다",
      "key_point": "카이제곱 분포는 항상 양수이고 오른쪽으로 치우치며, 자유도가 증가하면 정규분포에 근사한다",
      "common_mistake": "카이제곱 검정에서 기대빈도가 5 미만인 셀이 많을 때에도 그대로 적용하는 것 — 피셔의 정확 검정을 고려해야 한다"
    }
  },
  {
    "id": "PROB_UD_031",
    "terminology": "균일분포 (Uniform Distribution)",
    "terminology_ko": "균일분포",
    "terminology_en": "Uniform Distribution",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "모든 가능한 값이 동일한 확률로 발생하는 확률분포로, 이산형과 연속형이 모두 존재한다.",
    "definition_en": "A probability distribution in which all possible values are equally likely to occur, existing in both discrete and continuous forms.",
    "significance": "무작위 배정, 난수 생성, 무정보 사전확률의 기초가 되며, 다른 분포와의 비교 기준으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "이유불충분의 원리를 통해 균일분포를 무정보 상태의 확률 모형으로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "PROB_PP_011"
      }
    ],
    "sub_types": [
      {
        "name_ko": "이산균일분포",
        "name_en": "Discrete Uniform Distribution",
        "definition": "유한한 수의 값 각각이 동일한 확률을 갖는 분포 (예: 공정한 주사위)"
      },
      {
        "name_ko": "연속균일분포",
        "name_en": "Continuous Uniform Distribution",
        "definition": "구간 [a, b]에서 모든 값이 동일한 밀도를 갖는 분포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "균일 = '고르게 동일한' 확률 → 주사위의 각 면이 1/6인 것처럼",
      "differential": "균일분포는 모든 값이 동등한 확률이고, 정규분포는 중앙에 집중되는 불균등한 확률이다",
      "key_point": "연속균일분포의 확률밀도함수: f(x) = 1/(b-a), 구간 [a,b]에서 일정",
      "common_mistake": "모든 '공정한' 상황이 균일분포라고 생각하는 것 — 동전 10번 던지기에서 앞면 횟수는 이항분포이지 균일분포가 아니다"
    }
  },
  {
    "id": "PROB_CLT_032",
    "terminology": "중심극한정리 (Central Limit Theorem)",
    "terminology_ko": "중심극한정리",
    "terminology_en": "Central Limit Theorem",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "모집단의 분포 형태와 관계없이, 충분히 큰 표본에서 추출한 표본평균의 분포가 정규분포에 근사한다는 정리이다.",
    "definition_en": "A theorem stating that the distribution of sample means approximates a normal distribution as sample size increases, regardless of the shape of the population distribution.",
    "significance": "모집단이 정규분포가 아니더라도 추론통계를 적용할 수 있는 이론적 근거를 제공하여, 심리학 연구의 통계적 추론을 정당화한다.",
    "key_researchers": [
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "중심극한정리의 초기 형태를 증명하고 그 보편적 중요성을 인식하였다"
      },
      {
        "name_ko": "알렉산드르 랴푸노프",
        "name_en": "Aleksandr Lyapunov",
        "contribution": "특성함수를 이용하여 중심극한정리의 일반적 증명을 완성하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "큰 수의 법칙",
        "name_en": "Law of Large Numbers",
        "id": "PROB_LLN_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CLT = 표본크기↑ → 표본평균의 분포가 '종(bell) 모양'에 근접",
      "differential": "큰 수의 법칙은 표본평균이 모평균으로 '수렴'하는 것이고, 중심극한정리는 표본평균의 '분포 형태'가 정규분포가 된다는 것이다",
      "key_point": "일반적으로 n≥30이면 중심극한정리가 잘 작동하지만, 모집단이 극단적으로 편포되면 더 큰 표본이 필요하다",
      "common_mistake": "중심극한정리가 개별 관측값의 분포를 정규화한다고 생각하는 것 — 정규화되는 것은 '표본평균'의 분포이다"
    }
  },
  {
    "id": "PROB_6895_033",
    "terminology": "68-95-99.7 규칙 (Empirical Rule)",
    "terminology_ko": "68-95-99.7 규칙",
    "terminology_en": "Empirical Rule",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "정규분포에서 평균 ±1SD 안에 약 68%, ±2SD 안에 약 95%, ±3SD 안에 약 99.7%의 데이터가 포함된다는 경험 규칙이다.",
    "definition_en": "A rule stating that in a normal distribution, approximately 68% of data falls within ±1 SD, 95% within ±2 SD, and 99.7% within ±3 SD of the mean.",
    "significance": "심리검사 점수의 상대적 위치를 빠르게 해석하고, 이상치 탐지의 대략적 기준을 제공하는 실용적 도구이다.",
    "key_researchers": [
      {
        "name_ko": "아브라함 드 무아브르",
        "name_en": "Abraham de Moivre",
        "contribution": "정규분포 곡선의 면적 계산을 통해 이 규칙의 수학적 기초를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-Score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "이상치",
        "name_en": "Outlier",
        "id": "DESCRIP_OL_034"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "68-95-99.7 = ±1σ에 68%, ±2σ에 95%, ±3σ에 거의 전부(99.7%)",
      "differential": "68-95-99.7 규칙은 정규분포에만 적용되고, 체비셰프 정리는 모든 분포에 적용되는 더 일반적 규칙이다",
      "key_point": "이 규칙에서 '95%'는 ±1.96 SD가 아닌 ±2 SD의 근사값이다 — 정확한 95%는 ±1.96 SD",
      "common_mistake": "정규분포가 아닌 데이터에 이 규칙을 그대로 적용하는 것"
    }
  },
  {
    "id": "PROB_RV_034",
    "terminology": "확률변수 (Random Variable)",
    "terminology_ko": "확률변수",
    "terminology_en": "Random Variable",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "확률 실험의 각 결과에 수치를 대응시키는 함수로, 표본공간의 원소를 실수 값으로 변환한다.",
    "definition_en": "A function that assigns a numerical value to each outcome of a probability experiment, mapping elements of the sample space to real numbers.",
    "significance": "심리학 측정값(점수, 반응시간 등)을 확률분포의 틀에서 분석할 수 있게 하는 이론적 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "확률론의 공리적 기초에서 확률변수를 측정 가능한 함수로 엄밀히 정의하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "확률분포",
        "name_en": "Probability Distribution",
        "id": "PROB_PD_012"
      },
      {
        "name_ko": "기대값",
        "name_en": "Expected Value",
        "id": "PROB_EV_015"
      },
      {
        "name_ko": "표본공간",
        "name_en": "Sample Space",
        "id": "PROB_SS_026"
      }
    ],
    "sub_types": [
      {
        "name_ko": "이산확률변수",
        "name_en": "Discrete Random Variable",
        "definition": "셀 수 있는 값을 취하는 확률변수 (예: 정답 수, 선택 횟수)"
      },
      {
        "name_ko": "연속확률변수",
        "name_en": "Continuous Random Variable",
        "definition": "구간 내 모든 실수 값을 취할 수 있는 확률변수 (예: 반응시간, 체온)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "확률변수 = '실험 결과에 숫자 붙이기' 함수, X: S → R",
      "differential": "확률변수는 수학적 함수이고, 변인(variable)은 연구 맥락에서 측정 대상을 일반적으로 지칭하는 용어이다",
      "key_point": "확률변수는 대문자(X)로, 그것이 취하는 특정 값은 소문자(x)로 표기하는 것이 관례이다",
      "common_mistake": "확률변수를 '변하는 숫자'로만 이해하는 것 — 정확하게는 표본공간에서 실수로의 함수이다"
    }
  },
  {
    "id": "PROB_CT_035",
    "terminology": "체비셰프 정리 (Chebyshev's Theorem)",
    "terminology_ko": "체비셰프 정리",
    "terminology_en": "Chebyshev's Theorem",
    "category": "PROB",
    "category_name": "확률과 정규분포 (Probability & Normal Distribution)",
    "definition": "분포의 형태와 관계없이, 평균에서 k 표준편차 이내에 최소 1 - 1/k²의 비율의 데이터가 포함된다는 정리이다 (k > 1).",
    "definition_en": "A theorem stating that for any distribution, at least 1 - 1/k² of the data falls within k standard deviations of the mean (for k > 1), regardless of distribution shape.",
    "significance": "정규분포 가정이 불가능할 때에도 산포에 대한 최소한의 보장을 제공하여, 비정규 심리학 데이터의 해석에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "파프누티 체비셰프",
        "name_en": "Pafnuty Chebyshev",
        "contribution": "분포 무관 부등식을 증명하여 확률론의 기초를 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "68-95-99.7 규칙",
        "name_en": "Empirical Rule",
        "id": "PROB_6895_033"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체비셰프: k=2이면 최소 75%, k=3이면 최소 89% → 정규분포(95%, 99.7%)보다 보수적",
      "differential": "체비셰프 정리는 모든 분포에 적용되는 '최소 보장'이고, 68-95-99.7 규칙은 정규분포에서의 '정확한 비율'이다",
      "key_point": "체비셰프 정리는 분포 형태에 대한 가정이 없으므로, 결과가 보수적(하한)이다",
      "common_mistake": "체비셰프 정리를 정규분포에만 적용되는 것으로 한정하는 것 — 이 정리는 모든 분포에 적용된다"
    }
  }
];

TERMS_DATA.HYPO = [
  {
    "id": "HYPO_NH_001",
    "terminology": "귀무가설 (Null Hypothesis)",
    "terminology_ko": "귀무가설",
    "terminology_en": "Null Hypothesis",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "처리 효과나 집단 간 차이가 없다고 진술하는 통계적 가설로, 관찰된 차이가 표집 오차에 의한 것이라고 가정한다.",
    "definition_en": "A statistical hypothesis stating that there is no effect or no difference between populations, assuming any observed difference is due to sampling error.",
    "significance": "통계적 가설검정의 출발점으로, 귀무가설을 기각할 충분한 증거가 있는지를 판단하는 것이 검정의 핵심 논리이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "유의성 검정 프레임워크를 개발하며 귀무가설 개념을 체계화하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "피어슨과 함께 가설검정의 의사결정 체계를 정립하여 귀무가설과 대립가설의 쌍대 구조를 확립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "귀무(歸無) = 무(無)로 돌아간다 → 효과가 '없다'는 가설",
      "differential": "귀무가설은 '차이 없음'을 주장하고, 대립가설은 '차이 있음'을 주장한다. 귀무가설은 H₀, 대립가설은 H₁으로 표기한다.",
      "key_point": "연구자가 증명하고 싶은 것이 아니라, 기각하고 싶은 가설이다. 직접 증명이 아닌 간접 반증의 논리를 사용한다.",
      "common_mistake": "귀무가설이 기각되지 않았다고 해서 귀무가설이 '참'이라는 의미가 아니라, 기각할 충분한 증거가 없다는 것이다."
    }
  },
  {
    "id": "HYPO_AH_002",
    "terminology": "대립가설 (Alternative Hypothesis)",
    "terminology_ko": "대립가설",
    "terminology_en": "Alternative Hypothesis",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "귀무가설에 반대되는 가설로, 처리 효과가 존재하거나 집단 간 차이가 있다고 진술하는 통계적 가설이다.",
    "definition_en": "A statistical hypothesis that contradicts the null hypothesis, stating that there is a real effect or a true difference between populations.",
    "significance": "연구자가 실제로 지지하고자 하는 가설로, 연구 가설과 직접적으로 대응하여 연구의 방향성을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "에곤 피어슨과 함께 귀무가설 대 대립가설의 쌍대 검정 체계를 공식화하였다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 가설검정에서 대립가설의 명시적 설정 필요성을 주장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "단측검정",
        "name_en": "One-tailed Test",
        "id": "HYPO_OT_010"
      },
      {
        "name_ko": "양측검정",
        "name_en": "Two-tailed Test",
        "id": "HYPO_TT_011"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      }
    ],
    "sub_types": [
      {
        "name": "방향성 대립가설 (Directional)",
        "description": "특정 방향의 차이를 예측 (μ₁ > μ₂ 또는 μ₁ < μ₂)"
      },
      {
        "name": "비방향성 대립가설 (Non-directional)",
        "description": "차이의 존재만 예측하고 방향은 특정하지 않음 (μ₁ ≠ μ₂)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대립(對立) = 귀무가설에 맞서는(對) 가설 → 연구자의 주장",
      "differential": "연구가설(research hypothesis)은 개념적 수준이고, 대립가설은 이를 통계적으로 표현한 것이다.",
      "key_point": "H₁ 또는 Hₐ로 표기하며, 방향성(>, <) 또는 비방향성(≠)으로 설정할 수 있다.",
      "common_mistake": "대립가설이 '증명'되는 것이 아니라, 귀무가설이 기각됨으로써 간접적으로 '지지'되는 것이다."
    }
  },
  {
    "id": "HYPO_T1_003",
    "terminology": "제1종 오류 (Type I Error)",
    "terminology_ko": "제1종 오류",
    "terminology_en": "Type I Error",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "귀무가설이 실제로 참임에도 불구하고 이를 기각하는 오류로, 존재하지 않는 효과를 있다고 잘못 결론내리는 것이다.",
    "definition_en": "The error of rejecting a true null hypothesis, incorrectly concluding that an effect exists when it actually does not.",
    "significance": "거짓 양성(false positive)에 해당하며, 유의수준(α)으로 그 확률을 통제하여 잘못된 연구 결론의 위험을 관리한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "피어슨과 함께 제1종 오류와 제2종 오류의 구분을 공식화하고, 오류율 통제 개념을 도입하였다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 두 종류 오류의 상충 관계를 수학적으로 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "1종 오류 = '늑대가 왔다!(거짓 경보)' → 실제로는 없는데 있다고 외침",
      "differential": "제1종 오류는 '없는 효과를 있다고' (거짓 양성), 제2종 오류는 '있는 효과를 못 찾음' (거짓 음성)이다.",
      "key_point": "제1종 오류의 확률은 유의수준(α)과 같으며, 연구자가 사전에 설정한다.",
      "common_mistake": "α = .05라고 해서 결과가 5% 확률로 틀리다는 것이 아니라, 귀무가설이 참일 때 기각할 확률이 5%라는 것이다."
    }
  },
  {
    "id": "HYPO_T2_004",
    "terminology": "제2종 오류 (Type II Error)",
    "terminology_ko": "제2종 오류",
    "terminology_en": "Type II Error",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "귀무가설이 실제로 거짓임에도 불구하고 이를 기각하지 못하는 오류로, 실제 존재하는 효과를 탐지하지 못하는 것이다.",
    "definition_en": "The error of failing to reject a false null hypothesis, missing a real effect that actually exists in the population.",
    "significance": "거짓 음성(false negative)에 해당하며, 그 확률(β)은 표본크기와 효과크기에 의해 결정되어 연구 설계의 적절성을 평가하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "제2종 오류 확률(β)과 검정력(1-β) 개념을 정립하였다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "검정력 분석을 통해 제2종 오류를 사전에 통제하는 방법론을 체계화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      },
      {
        "name_ko": "베타",
        "name_en": "Beta",
        "id": "HYPO_BT_015"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "2종 오류 = '아무 일 없어~(놓침)' → 실제 효과가 있는데 못 찾음",
      "differential": "제1종 오류(α)는 연구자가 직접 설정하지만, 제2종 오류(β)는 표본크기, 효과크기, α에 의해 간접적으로 결정된다.",
      "key_point": "β의 확률이며, 검정력(1-β)을 높이면 제2종 오류가 감소한다.",
      "common_mistake": "표본크기가 작으면 제2종 오류가 증가한다는 점을 간과하여, 유의하지 않은 결과를 '효과 없음'으로 성급하게 해석하는 경우가 많다."
    }
  },
  {
    "id": "HYPO_PV_005",
    "terminology": "p값 (p-value)",
    "terminology_ko": "p값",
    "terminology_en": "p-value",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "귀무가설이 참이라는 가정 하에, 관찰된 검정통계량 값 이상으로 극단적인 결과를 얻을 확률이다.",
    "definition_en": "The probability of obtaining a test statistic as extreme as or more extreme than the observed value, assuming the null hypothesis is true.",
    "significance": "통계적 유의성을 판단하는 핵심 지표로, α보다 작으면 귀무가설을 기각하는 의사결정의 기준이 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "p값을 유의성 검정의 핵심 도구로 도입하고, 데이터가 귀무가설과 양립하는 정도를 나타내는 연속적 측도로 사용하였다."
      },
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "카이제곱 적합도 검정을 통해 p값 활용의 초기 사례를 제공하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "검정통계량",
        "name_en": "Test Statistic",
        "id": "HYPO_TS_008"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-hacking",
        "id": "ETHICS_PH_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "p = probability(확률) → 귀무가설 하에서 이 결과가 나올 확률",
      "differential": "p값은 귀무가설이 참일 확률이 아니라, 귀무가설이 참일 때 현재 데이터(또는 더 극단적 데이터)가 관찰될 확률이다.",
      "key_point": "p < α이면 '통계적으로 유의하다'고 판단하지만, p값 자체가 효과의 크기나 실질적 중요성을 나타내지는 않는다.",
      "common_mistake": "p값을 '귀무가설이 참일 확률'이나 '결과가 우연일 확률'로 해석하는 것은 대표적인 오해이다."
    }
  },
  {
    "id": "HYPO_AL_006",
    "terminology": "유의수준 (Significance Level)",
    "terminology_ko": "유의수준",
    "terminology_en": "Significance Level",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "제1종 오류를 범할 최대 허용 확률로, 귀무가설을 기각하기 위한 기준값이며, 관례적으로 α = .05를 사용한다.",
    "definition_en": "The maximum probability of committing a Type I error that a researcher is willing to accept, conventionally set at α = .05.",
    "significance": "연구자가 데이터 수집 전에 사전 설정하는 의사결정 기준으로, 통계적 유의성 판단의 엄격함을 조절한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "α = .05를 '편리한 기준'으로 제안하여 통계적 유의성의 관례적 기준을 확립하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "유의수준을 장기적 오류율 통제의 관점에서 재해석하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "알파",
        "name_en": "Alpha",
        "id": "HYPO_AP_014"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "α(알파) = 허용 오류 한계 → '이 정도 위험은 감수하겠다'는 기준",
      "differential": "유의수준(α)은 사전에 설정하는 기준이고, p값은 데이터에서 계산되는 값이다. p ≤ α이면 유의하다고 판단한다.",
      "key_point": "α = .05는 절대적 규칙이 아니라 관례이며, 연구 맥락에 따라 .01이나 .001 등으로 조정할 수 있다.",
      "common_mistake": "유의수준을 데이터 분석 후에 결과에 맞게 변경하는 것은 p-해킹의 일종으로 부적절하다."
    }
  },
  {
    "id": "HYPO_PW_007",
    "terminology": "검정력 (Statistical Power)",
    "terminology_ko": "검정력",
    "terminology_en": "Statistical Power",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "귀무가설이 실제로 거짓일 때 이를 올바르게 기각할 확률로, 1 - β로 계산되며, 실제 존재하는 효과를 탐지할 수 있는 검정의 능력을 나타낸다.",
    "definition_en": "The probability of correctly rejecting a false null hypothesis, calculated as 1 - β, representing the ability of a test to detect a real effect.",
    "significance": "연구 설계 단계에서 적절한 표본크기를 결정하는 핵심 기준이며, .80 이상을 권장하여 충분한 탐지력을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "검정력 분석(power analysis) 방법론을 체계화하고, 효과크기별 필요 표본크기 산출표를 제공하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "검정력 개념을 가설검정 이론에 공식적으로 도입하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "검정력 = 1 - β → 효과가 있을 때 찾아낼 확률, 높을수록 좋다",
      "differential": "검정력은 '실제 효과를 탐지할 확률'이고, 유의수준은 '거짓 효과를 보고할 확률 한계'이다.",
      "key_point": "검정력에 영향을 미치는 4가지 요소: 효과크기, 표본크기, 유의수준(α), 검정 방향(단측/양측)이다.",
      "common_mistake": "검정력이 낮은 연구에서 유의하지 않은 결과를 얻었을 때, 이를 '효과 없음'으로 해석하는 것은 제2종 오류의 위험이 크다."
    }
  },
  {
    "id": "HYPO_TS_008",
    "terminology": "검정통계량 (Test Statistic)",
    "terminology_ko": "검정통계량",
    "terminology_en": "Test Statistic",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "표본 데이터로부터 계산되는 수치로, 귀무가설의 타당성을 평가하기 위해 표본 결과와 귀무가설의 예측 간 차이를 표준화한 값이다.",
    "definition_en": "A numerical value computed from sample data that standardizes the difference between observed results and what is expected under the null hypothesis, used to evaluate the validity of the null hypothesis.",
    "significance": "z, t, F, χ² 등 다양한 검정통계량이 검정 방법에 따라 사용되며, 임계값과의 비교를 통해 의사결정을 내린다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산분석의 F통계량을 개발하고, 다양한 검정통계량의 분포 이론을 정립하였다."
      },
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "'Student'라는 필명으로 t통계량과 t분포를 개발하여 소표본 검정을 가능하게 하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "임계값",
        "name_en": "Critical Value",
        "id": "HYPO_CV_009"
      },
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-score",
        "id": "DESCRIP_ZS_010"
      }
    ],
    "sub_types": [
      {
        "name": "z통계량",
        "description": "모분산이 알려진 경우 또는 대표본에서 사용"
      },
      {
        "name": "t통계량",
        "description": "모분산이 미지이고 표본분산을 사용할 때 사용"
      },
      {
        "name": "F통계량",
        "description": "분산분석에서 집단 간 변동과 집단 내 변동의 비율"
      },
      {
        "name": "χ²통계량",
        "description": "범주형 자료의 관찰빈도와 기대빈도 간 차이"
      }
    ],
    "quiz_hints": {
      "mnemonic": "검정통계량 = (관찰값 - 기대값) / 표준오차 → 표준화된 차이",
      "differential": "검정통계량은 표본에서 계산한 값이고, 임계값은 분포표에서 찾는 기준값이다.",
      "key_point": "검정통계량의 절대값이 클수록 귀무가설과 더 멀리 떨어진 관찰 결과를 의미한다.",
      "common_mistake": "검정통계량의 크기 자체가 효과크기를 의미하지 않는다. 표본크기가 크면 작은 효과도 큰 검정통계량을 산출할 수 있다."
    }
  },
  {
    "id": "HYPO_CV_009",
    "terminology": "임계값 (Critical Value)",
    "terminology_ko": "임계값",
    "terminology_en": "Critical Value",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "기각역과 비기각역의 경계를 정의하는 검정통계량의 값으로, 유의수준과 자유도에 의해 결정된다.",
    "definition_en": "The value of a test statistic that defines the boundary between the rejection region and the non-rejection region, determined by the significance level and degrees of freedom.",
    "significance": "전통적 가설검정에서 의사결정의 기준점 역할을 하며, 검정통계량이 임계값을 초과하면 귀무가설을 기각한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "통계 분포표를 작성하여 다양한 유의수준에서의 임계값을 연구자들이 쉽게 참조할 수 있도록 하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "기각역 개념과 함께 임계값의 의사결정 기준 역할을 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      },
      {
        "name_ko": "검정통계량",
        "name_en": "Test Statistic",
        "id": "HYPO_TS_008"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "임계(臨界) = 경계에 임한다 → 기각과 비기각의 경계선",
      "differential": "임계값은 분포표에서 사전에 결정되고, 검정통계량은 실제 데이터에서 계산된다.",
      "key_point": "단측검정의 임계값은 한쪽 꼬리에, 양측검정의 임계값은 양쪽 꼬리에 위치한다.",
      "common_mistake": "컴퓨터 통계 프로그램이 p값을 직접 계산해주므로 임계값 비교는 덜 사용되지만, 검정 논리 이해에는 필수적이다."
    }
  },
  {
    "id": "HYPO_OT_010",
    "terminology": "단측검정 (One-tailed Test)",
    "terminology_ko": "단측검정",
    "terminology_en": "One-tailed Test",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "대립가설이 특정 방향의 차이만을 예측하는 검정으로, 분포의 한쪽 꼬리에만 기각역을 설정한다.",
    "definition_en": "A hypothesis test in which the alternative hypothesis predicts the direction of the difference, placing the rejection region in only one tail of the distribution.",
    "significance": "효과의 방향에 대한 선행 이론이나 강한 근거가 있을 때 사용하며, 양측검정보다 검정력이 높지만 반대 방향 효과는 탐지하지 못한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "유의성 검정에서 방향적 검정의 적절한 사용 조건을 논의하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "단측 대 양측 검정의 검정력 차이를 수학적으로 분석하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양측검정",
        "name_en": "Two-tailed Test",
        "id": "HYPO_TT_011"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      },
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단측 = 한쪽(one tail)만 본다 → 방향 예측이 확실할 때",
      "differential": "단측검정은 한쪽 방향만 검정하므로 검정력이 높지만, 양측검정은 양방향을 모두 검정하므로 더 보수적이다.",
      "key_point": "단측검정의 p값은 양측검정 p값의 절반이다. 단, 효과 방향이 반대이면 유의하다고 결론내릴 수 없다.",
      "common_mistake": "결과를 본 후에 단측/양측을 선택하는 것은 부적절하며, 반드시 데이터 수집 전에 결정해야 한다."
    }
  },
  {
    "id": "HYPO_TT_011",
    "terminology": "양측검정 (Two-tailed Test)",
    "terminology_ko": "양측검정",
    "terminology_en": "Two-tailed Test",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "대립가설이 차이의 방향을 특정하지 않고 차이의 존재만을 예측하는 검정으로, 분포의 양쪽 꼬리에 기각역을 설정한다.",
    "definition_en": "A hypothesis test in which the alternative hypothesis does not specify the direction of the difference, placing the rejection region in both tails of the distribution.",
    "significance": "효과의 방향에 대한 사전 예측이 없거나 양방향 효과를 모두 탐지하고자 할 때 사용하며, 더 보수적이고 안전한 접근이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "방향성 예측이 불확실한 경우 양측검정의 사용을 기본으로 권장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단측검정",
        "name_en": "One-tailed Test",
        "id": "HYPO_OT_010"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      },
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "양측 = 양쪽(two tails) 다 본다 → H₁: μ ≠ μ₀",
      "differential": "양측검정은 α를 두 꼬리에 나누어(각 α/2) 배분하므로, 동일 α에서 단측검정보다 기각이 어렵다.",
      "key_point": "양측검정이 기본(default)으로 권장되며, 효과 방향에 대한 강한 이론적 근거가 있을 때만 단측을 사용한다.",
      "common_mistake": "양측검정의 임계값은 α/2 기준으로 구하는 것이지, α 전체를 한쪽에 두는 것이 아니다."
    }
  },
  {
    "id": "HYPO_RR_012",
    "terminology": "기각역 (Rejection Region)",
    "terminology_ko": "기각역",
    "terminology_en": "Rejection Region",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "표집분포에서 귀무가설을 기각하게 되는 검정통계량 값들의 범위로, 임계값에 의해 경계가 정해진다.",
    "definition_en": "The range of values of a test statistic in the sampling distribution that leads to rejection of the null hypothesis, bounded by the critical value.",
    "significance": "가설검정의 의사결정 영역을 시각적으로 표현하며, 검정통계량이 이 영역에 속하면 귀무가설을 기각한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "가설검정의 기각역 개념을 체계적 의사결정 절차로 정립하였다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 최적 기각역의 수학적 이론을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비기각역",
        "name_en": "Non-rejection Region",
        "id": "HYPO_NR_013"
      },
      {
        "name_ko": "임계값",
        "name_en": "Critical Value",
        "id": "HYPO_CV_009"
      },
      {
        "name_ko": "검정통계량",
        "name_en": "Test Statistic",
        "id": "HYPO_TS_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기각역 = 분포 꼬리의 극단적 영역 → 여기 들어오면 H₀ 기각",
      "differential": "기각역은 H₀를 기각하는 영역이고, 비기각역은 H₀를 기각하지 않는(유지하는) 영역이다.",
      "key_point": "단측검정은 한쪽 꼬리에만, 양측검정은 양쪽 꼬리에 기각역이 위치한다.",
      "common_mistake": "기각역의 면적이 α와 같다. 양측검정에서는 각 꼬리의 면적이 α/2이다."
    }
  },
  {
    "id": "HYPO_NR_013",
    "terminology": "비기각역 (Non-rejection Region)",
    "terminology_ko": "비기각역",
    "terminology_en": "Non-rejection Region",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "표집분포에서 귀무가설을 기각하지 않는 검정통계량 값들의 범위로, 관찰된 결과가 귀무가설과 양립 가능함을 의미한다.",
    "definition_en": "The range of values of a test statistic in the sampling distribution that does not lead to rejection of the null hypothesis, indicating the observed result is compatible with H₀.",
    "significance": "검정통계량이 이 영역에 위치하면 귀무가설을 유지하되, 이는 귀무가설이 참임을 증명하는 것이 아니라 기각할 증거가 부족하다는 것이다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "기각역과 비기각역의 상보적 관계를 가설검정 체계에서 정의하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      },
      {
        "name_ko": "임계값",
        "name_en": "Critical Value",
        "id": "HYPO_CV_009"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비기각역 = 분포의 중심 영역 → 여기 있으면 H₀ 유지",
      "differential": "'채택역(acceptance region)'이라는 용어는 H₀가 참이라고 받아들이는 것처럼 오해를 줄 수 있어, '비기각역'이 더 정확한 표현이다.",
      "key_point": "비기각역에 있다는 것은 귀무가설을 기각할 충분한 증거가 없다는 의미이지, 귀무가설이 참이라는 증거가 아니다.",
      "common_mistake": "비기각역을 '채택역'이라고 부르며 귀무가설을 적극적으로 수용하는 것은 논리적 오류이다."
    }
  },
  {
    "id": "HYPO_AP_014",
    "terminology": "알파 (Alpha, α)",
    "terminology_ko": "알파",
    "terminology_en": "Alpha",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "제1종 오류의 확률을 나타내는 기호로, 유의수준과 동일한 의미이며 귀무가설이 참일 때 잘못 기각할 확률이다.",
    "definition_en": "The symbol representing the probability of Type I error, synonymous with the significance level, indicating the probability of incorrectly rejecting a true null hypothesis.",
    "significance": "연구자가 허용하는 위양성 비율의 상한으로, 통계적 의사결정의 엄격성을 결정하는 핵심 매개변수이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": ".05 수준을 유의성의 관례적 기준으로 제안하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "α를 장기적 오류율 통제 관점에서 체계화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "베타",
        "name_en": "Beta",
        "id": "HYPO_BT_015"
      },
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "α = 알파 = '알(아봤더니) 파(거짓)' → 참인데 거짓이라 판단할 확률",
      "differential": "α(알파)는 제1종 오류 확률이고, β(베타)는 제2종 오류 확률이다. 그리스 알파벳 순서와 오류 번호가 대응한다.",
      "key_point": "α를 낮추면 제1종 오류는 줄지만, 다른 조건이 동일하면 제2종 오류(β)는 증가한다.",
      "common_mistake": "α = .05는 피셔가 '편의상의 기준'으로 제안한 것이며, 연구 분야나 상황에 따라 더 엄격한 기준(.01, .001)이 필요할 수 있다."
    }
  },
  {
    "id": "HYPO_BT_015",
    "terminology": "베타 (Beta, β)",
    "terminology_ko": "베타",
    "terminology_en": "Beta",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "제2종 오류의 확률을 나타내는 기호로, 귀무가설이 거짓일 때 기각하지 못할 확률이며, 1 - β가 검정력이다.",
    "definition_en": "The symbol representing the probability of Type II error, indicating the probability of failing to reject a false null hypothesis; 1 - β equals statistical power.",
    "significance": "검정력(1-β)과 직접적으로 연결되어, 연구 설계 시 적절한 표본크기를 결정하는 데 핵심적인 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "β 확률과 검정력 개념을 가설검정 이론에 공식적으로 도입하였다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "β ≤ .20(검정력 ≥ .80)을 권장 기준으로 제안하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알파",
        "name_en": "Alpha",
        "id": "HYPO_AP_014"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      },
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "β = 베타 = '베(어물쩍) 타(넘김)' → 있는 효과를 그냥 넘겨버림",
      "differential": "β는 고정된 값이 아니라 효과크기, 표본크기, α에 따라 달라지는 조건부 확률이다.",
      "key_point": "코헨은 β = .20(검정력 .80)을 관례적 기준으로 제안했으나, 중요한 연구에서는 .10(검정력 .90)이 권장되기도 한다.",
      "common_mistake": "β는 α처럼 연구자가 직접 설정하는 것이 아니라, 효과크기와 표본크기에 의해 결정되며 사전 검정력 분석을 통해 간접적으로 조절한다."
    }
  },
  {
    "id": "HYPO_ES_016",
    "terminology": "효과크기 (Effect Size)",
    "terminology_ko": "효과크기",
    "terminology_en": "Effect Size",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "처리 효과의 실질적인 크기를 나타내는 표준화된 측도로, 표본크기에 독립적이어서 연구 간 비교와 메타분석에 유용하다.",
    "definition_en": "A standardized measure of the practical magnitude of a treatment effect, independent of sample size, useful for cross-study comparisons and meta-analyses.",
    "significance": "통계적 유의성만으로는 알 수 없는 실질적 중요성을 평가하며, APA 매뉴얼에서 보고를 권고하는 핵심 통계치이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기의 체계적 분류(소·중·대)와 다양한 효과크기 지표(d, f, r, w)를 정립하였다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "편향 보정 효과크기(Hedges' g)를 개발하고 메타분석에서의 효과크기 활용을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [
      {
        "name": "d 계열 (차이 기반)",
        "description": "평균 차이를 표준편차로 나눈 값 (Cohen's d, Hedges' g)"
      },
      {
        "name": "r 계열 (관계 기반)",
        "description": "상관계수 또는 상관계수의 변환 (r, r², η²)"
      },
      {
        "name": "승산비 (OR)",
        "description": "범주형 결과의 효과크기 지표"
      }
    ],
    "quiz_hints": {
      "mnemonic": "효과크기 = p값이 '유의한가?'라면, 효과크기는 '얼마나 큰가?'",
      "differential": "p값은 효과의 존재 여부(유무)를 판단하고, 효과크기는 효과의 크기(양)를 나타낸다.",
      "key_point": "코헨의 기준: d = 0.2(소), 0.5(중), 0.8(대). 이는 행동과학에서의 일반적 지침이며, 분야별로 다를 수 있다.",
      "common_mistake": "큰 표본에서는 아주 작은 효과도 통계적으로 유의할 수 있으므로, 효과크기 없이 p값만 보고하는 것은 불완전하다."
    }
  },
  {
    "id": "HYPO_CI_017",
    "terminology": "신뢰구간 (Confidence Interval)",
    "terminology_ko": "신뢰구간",
    "terminology_en": "Confidence Interval",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "모수의 참값이 포함될 것으로 기대되는 값들의 범위로, 점추정에 대한 불확실성의 정도를 함께 제시한다.",
    "definition_en": "A range of values within which the true population parameter is expected to fall, providing information about the precision and uncertainty of a point estimate.",
    "significance": "가설검정의 이분법적 결론(유의/비유의)을 보완하여 추정의 정밀도를 함께 보고하며, 효과크기의 불확실성을 평가하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "신뢰구간의 빈도주의적 해석과 수학적 이론을 정립하였다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "가설검정 대안으로서 효과크기와 신뢰구간 보고의 중요성을 강조하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "점추정",
        "name_en": "Point Estimation",
        "id": "HYPO_PE_018"
      },
      {
        "name_ko": "구간추정",
        "name_en": "Interval Estimation",
        "id": "HYPO_IE_019"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "95% CI = 같은 방법으로 100번 반복하면 95번은 참값을 포함 → 방법의 신뢰도",
      "differential": "신뢰구간은 모수가 특정 구간에 있을 확률이 아니라, 반복 표집 시 그 비율의 구간이 모수를 포함하는 것이다.",
      "key_point": "신뢰구간이 좁을수록 추정이 정밀하며, 0을 포함하지 않으면 유의수준 α에서 통계적으로 유의하다.",
      "common_mistake": "'95% 신뢰구간'을 '모수가 이 구간에 있을 확률이 95%'로 해석하는 것은 빈도주의 관점에서 오류이다."
    }
  },
  {
    "id": "HYPO_PE_018",
    "terminology": "점추정 (Point Estimation)",
    "terminology_ko": "점추정",
    "terminology_en": "Point Estimation",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "모수의 값을 하나의 수치(점)로 추정하는 방법으로, 표본통계량을 모수의 최선의 추정값으로 사용한다.",
    "definition_en": "A method of estimating a population parameter with a single value (point), using a sample statistic as the best estimate of the parameter.",
    "significance": "통계적 추론의 가장 기본적인 형태이나, 추정의 불확실성을 반영하지 못하므로 구간추정과 함께 사용한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "최대우도추정(MLE)을 비롯한 점추정의 수리적 이론과 추정량의 바람직한 성질을 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구간추정",
        "name_en": "Interval Estimation",
        "id": "HYPO_IE_019"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "점(點) 추정 = 점 하나로 찍는다 → 예: 표본평균 X̄ = 72점",
      "differential": "점추정은 '하나의 값'을 제시하고, 구간추정은 '값의 범위'를 제시한다.",
      "key_point": "좋은 점추정량의 성질: 불편성(unbiasedness), 효율성(efficiency), 일치성(consistency).",
      "common_mistake": "점추정값만 보고하면 추정의 정밀도를 알 수 없으므로, 반드시 표준오차나 신뢰구간을 함께 보고해야 한다."
    }
  },
  {
    "id": "HYPO_IE_019",
    "terminology": "구간추정 (Interval Estimation)",
    "terminology_ko": "구간추정",
    "terminology_en": "Interval Estimation",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "모수의 참값이 포함될 가능성이 높은 값들의 범위를 제시하는 추정 방법으로, 추정의 불확실성을 명시적으로 반영한다.",
    "definition_en": "An estimation method that provides a range of values likely to contain the true parameter, explicitly reflecting the uncertainty of the estimate.",
    "significance": "점추정의 한계를 보완하여 추정의 정밀성에 대한 정보를 제공하며, 현대 통계학에서 가설검정을 보완하는 주요 접근이다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "신뢰구간 이론을 수학적으로 정립하여 구간추정의 기초를 확립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "점추정",
        "name_en": "Point Estimation",
        "id": "HYPO_PE_018"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구간 추정 = 범위로 추정 → 예: 평균 = 72 ± 3 (69~75)",
      "differential": "구간추정은 불확실성을 포함한 범위이고, 점추정은 단일 값이다. 구간추정이 더 많은 정보를 제공한다.",
      "key_point": "신뢰수준(90%, 95%, 99%)이 높을수록 구간이 넓어지고, 표본크기가 클수록 구간이 좁아진다.",
      "common_mistake": "넓은 신뢰구간이 '나쁜' 것은 아니며, 추정의 불확실성이 크다는 정보를 정직하게 전달하는 것이다."
    }
  },
  {
    "id": "HYPO_NH_020",
    "terminology": "귀무가설 유의성 검정 (Null Hypothesis Significance Testing, NHST)",
    "terminology_ko": "귀무가설 유의성 검정",
    "terminology_en": "Null Hypothesis Significance Testing",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "피셔의 유의성 검정과 네이만-피어슨의 가설검정을 혼합한 현대 통계적 가설검정의 표준 절차로, p값을 유의수준과 비교하여 의사결정을 내린다.",
    "definition_en": "The standard modern procedure for statistical hypothesis testing that blends Fisher's significance testing with Neyman-Pearson's decision framework, comparing p-values against a significance level.",
    "significance": "심리학 연구의 지배적 통계 분석 패러다임이나, 재현성 위기와 함께 그 한계에 대한 비판이 증가하고 있다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "유의성 검정의 연속적 증거 접근을 개발하였다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "이분법적 의사결정 틀과 오류율 통제 접근을 개발하였다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "NHST의 한계를 비판하고 효과크기와 검정력의 중요성을 강조하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피셔의 유의성 검정",
        "name_en": "Fisher's Significance Testing",
        "id": "HYPO_FS_022"
      },
      {
        "name_ko": "네이만-피어슨 접근",
        "name_en": "Neyman-Pearson Approach",
        "id": "HYPO_NP_021"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-hacking",
        "id": "ETHICS_PH_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "NHST = Null Hypothesis Significance Testing → 현대 가설검정의 혼합 패러다임",
      "differential": "NHST는 피셔와 네이만-피어슨 접근의 혼합이며, 두 접근의 철학적 차이를 인식하지 못한 채 기계적으로 사용되는 경우가 많다.",
      "key_point": "NHST는 '귀무가설이 참이라면' 이라는 조건부 확률에 기반하며, 효과크기와 신뢰구간으로 보완해야 한다.",
      "common_mistake": "p < .05를 기계적으로 적용하고, p ≥ .05이면 '효과 없음'으로 결론내리는 이분법적 사고는 NHST의 대표적 오용이다."
    }
  },
  {
    "id": "HYPO_NP_021",
    "terminology": "네이만-피어슨 접근 (Neyman-Pearson Approach)",
    "terminology_ko": "네이만-피어슨 접근",
    "terminology_en": "Neyman-Pearson Approach",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "가설검정을 두 가설(H₀ vs H₁) 간의 의사결정 문제로 보고, 제1종과 제2종 오류율을 장기적으로 통제하는 행동 규칙을 제공하는 접근이다.",
    "definition_en": "An approach that frames hypothesis testing as a decision problem between two hypotheses (H₀ vs H₁), providing a behavioral rule that controls long-run Type I and Type II error rates.",
    "significance": "가설검정에 형식적 의사결정 이론을 도입하여, 검정력과 오류율의 상충 관계를 체계적으로 분석할 수 있게 하였다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "가설검정을 반복적 의사결정 문제로 정의하고, 오류율 통제의 수학적 틀을 제시하였다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 최강력 검정(most powerful test)의 레마를 증명하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피셔의 유의성 검정",
        "name_en": "Fisher's Significance Testing",
        "id": "HYPO_FS_022"
      },
      {
        "name_ko": "NHST",
        "name_en": "NHST",
        "id": "HYPO_NH_020"
      },
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "네이만-피어슨 = '결정' 중심 → H₀ vs H₁ 중 하나를 선택하는 의사결정 규칙",
      "differential": "피셔는 p값을 증거의 강도로 본 반면, 네이만-피어슨은 기각/비기각의 이분법적 의사결정에 초점을 둔다.",
      "key_point": "대립가설을 명시적으로 설정하고, 두 종류 오류의 균형을 고려하는 것이 핵심이다.",
      "common_mistake": "네이만-피어슨 접근은 개별 실험이 아닌 장기적·반복적 의사결정에서의 오류율 통제를 목표로 한다."
    }
  },
  {
    "id": "HYPO_FS_022",
    "terminology": "피셔의 유의성 검정 (Fisher's Significance Testing)",
    "terminology_ko": "피셔의 유의성 검정",
    "terminology_en": "Fisher's Significance Testing",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "대립가설을 명시적으로 설정하지 않고, p값을 데이터와 귀무가설 간의 불일치 정도를 나타내는 연속적 증거 척도로 사용하는 접근이다.",
    "definition_en": "An approach that does not explicitly specify an alternative hypothesis, using the p-value as a continuous measure of the degree of inconsistency between the data and the null hypothesis.",
    "significance": "현대 NHST의 한 축을 형성하며, p값을 이분법적으로 사용하기보다 증거의 강도로 해석하는 원래 취지를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "귀무가설만을 설정하고 p값으로 데이터의 '놀라움(surprise)' 정도를 평가하는 검정 프레임워크를 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "네이만-피어슨 접근",
        "name_en": "Neyman-Pearson Approach",
        "id": "HYPO_NP_021"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "NHST",
        "name_en": "NHST",
        "id": "HYPO_NH_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피셔 = '증거의 강도' → p값이 작을수록 귀무가설에 반하는 증거가 강함",
      "differential": "피셔의 접근은 대립가설 없이 귀무가설만 검정하며, 네이만-피어슨 접근은 H₀ vs H₁의 이분법적 선택을 요구한다.",
      "key_point": "피셔는 p값을 연속적 증거 척도로 사용했지, .05 기준으로 기계적 결정을 하라고 한 것은 아니다.",
      "common_mistake": "피셔와 네이만-피어슨의 접근은 철학적으로 다르지만, 현대 NHST에서는 혼합되어 사용된다."
    }
  },
  {
    "id": "HYPO_BY_023",
    "terminology": "베이즈 추론 (Bayesian Inference)",
    "terminology_ko": "베이즈 추론",
    "terminology_en": "Bayesian Inference",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "사전확률과 관찰된 데이터(우도)를 결합하여 사후확률을 계산하는 통계적 추론 방법으로, NHST의 대안적 패러다임이다.",
    "definition_en": "A statistical inference method that combines prior probabilities with observed data (likelihood) to calculate posterior probabilities, serving as an alternative paradigm to NHST.",
    "significance": "NHST의 한계를 보완하는 대안적 접근으로 주목받으며, 누적 증거의 업데이트와 가설의 직접적 확률 평가를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "조건부 확률의 역 관계를 기술한 베이즈 정리를 제시하였다."
      },
      {
        "name_ko": "해럴드 제프리스",
        "name_en": "Harold Jeffreys",
        "contribution": "베이즈 정리를 과학적 추론에 체계적으로 적용하는 방법론을 개발하였다."
      },
      {
        "name_ko": "데니스 린들리",
        "name_en": "Dennis V. Lindley",
        "contribution": "베이즈 통계학의 이론적 토대를 발전시키고 빈도주의와의 차이를 명확히 하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "HYPO_PP_024"
      },
      {
        "name_ko": "사후확률",
        "name_en": "Posterior Probability",
        "id": "HYPO_PO_025"
      },
      {
        "name_ko": "우도비",
        "name_en": "Likelihood Ratio",
        "id": "HYPO_LR_026"
      },
      {
        "name_ko": "NHST",
        "name_en": "NHST",
        "id": "HYPO_NH_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "베이즈 = 사전(prior) × 우도(likelihood) → 사후(posterior) → 믿음의 업데이트",
      "differential": "빈도주의(NHST)는 '데이터가 가설에 비추어 얼마나 놀라운가'를 묻고, 베이즈 접근은 '데이터를 고려할 때 가설이 얼마나 타당한가'를 묻는다.",
      "key_point": "사전확률의 설정이 결과에 영향을 미치므로, 사전확률의 선택이 주관적이라는 비판이 있다.",
      "common_mistake": "베이즈 추론은 '주관적'이라서 과학적이지 않다는 것은 오해이며, 사전확률의 민감도 분석 등을 통해 견고성을 확보할 수 있다."
    }
  },
  {
    "id": "HYPO_PP_024",
    "terminology": "사전확률 (Prior Probability)",
    "terminology_ko": "사전확률",
    "terminology_en": "Prior Probability",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "데이터를 관찰하기 전에 가설이 참일 것으로 기대되는 확률로, 선행 연구나 이론적 지식에 기반하여 설정한다.",
    "definition_en": "The probability that a hypothesis is true before observing the data, set based on prior research or theoretical knowledge.",
    "significance": "베이즈 추론의 핵심 구성요소로, 연구자의 사전 지식을 분석에 명시적으로 반영할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "사전확률에서 사후확률로의 갱신 원리를 제시하였다."
      },
      {
        "name_ko": "피에르시몽 라플라스",
        "name_en": "Pierre-Simon Laplace",
        "contribution": "베이즈 정리를 일반화하고 무정보 사전확률의 원리를 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후확률",
        "name_en": "Posterior Probability",
        "id": "HYPO_PO_025"
      },
      {
        "name_ko": "베이즈 추론",
        "name_en": "Bayesian Inference",
        "id": "HYPO_BY_023"
      },
      {
        "name_ko": "우도비",
        "name_en": "Likelihood Ratio",
        "id": "HYPO_LR_026"
      }
    ],
    "sub_types": [
      {
        "name": "정보적 사전확률 (Informative prior)",
        "description": "선행 연구에 기반한 구체적 사전확률"
      },
      {
        "name": "무정보 사전확률 (Non-informative prior)",
        "description": "사전 지식이 없을 때 사용하는 균등 사전확률"
      },
      {
        "name": "약정보 사전확률 (Weakly informative prior)",
        "description": "넓은 범위에서 약한 제약만 주는 사전확률"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사전(事前) = 데이터 '전'의 믿음 → prior belief",
      "differential": "사전확률은 데이터 이전의 기대이고, 사후확률은 데이터를 본 후 업데이트된 기대이다.",
      "key_point": "무정보 사전확률을 사용하면 빈도주의 결과와 유사한 결과를 얻을 수 있다.",
      "common_mistake": "사전확률이 '주관적'이라는 이유로 베이즈 접근을 비과학적으로 보는 것은 편견이며, 빈도주의도 암묵적 가정이 있다."
    }
  },
  {
    "id": "HYPO_PO_025",
    "terminology": "사후확률 (Posterior Probability)",
    "terminology_ko": "사후확률",
    "terminology_en": "Posterior Probability",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "데이터를 관찰한 후에 가설이 참일 확률로, 사전확률과 우도(likelihood)를 베이즈 정리로 결합하여 산출한다.",
    "definition_en": "The probability that a hypothesis is true after observing the data, calculated by combining the prior probability and the likelihood using Bayes' theorem.",
    "significance": "연구자가 실제로 알고 싶어 하는 '데이터를 고려할 때 가설이 참일 확률'을 직접 제공한다는 점에서 NHST의 p값보다 직관적이다.",
    "key_researchers": [
      {
        "name_ko": "토머스 베이즈",
        "name_en": "Thomas Bayes",
        "contribution": "사후확률 계산의 수학적 기초를 제시하였다."
      },
      {
        "name_ko": "해럴드 제프리스",
        "name_en": "Harold Jeffreys",
        "contribution": "사후확률 기반 추론을 과학적 가설 비교에 체계적으로 적용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "HYPO_PP_024"
      },
      {
        "name_ko": "베이즈 추론",
        "name_en": "Bayesian Inference",
        "id": "HYPO_BY_023"
      },
      {
        "name_ko": "우도비",
        "name_en": "Likelihood Ratio",
        "id": "HYPO_LR_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사후(事後) = 데이터를 '본 후'의 업데이트된 믿음 → posterior belief",
      "differential": "사후확률은 P(H|D)이고, p값은 P(D|H₀)이다. 조건의 방향이 반대이며, 이 둘을 혼동해서는 안 된다.",
      "key_point": "사후확률 = (사전확률 × 우도) / 증거 → 데이터가 많아질수록 사전확률의 영향이 줄어든다.",
      "common_mistake": "p값을 사후확률로 해석하는 것은 대표적인 오류이다. p값은 P(D|H₀)이지 P(H₀|D)가 아니다."
    }
  },
  {
    "id": "HYPO_LR_026",
    "terminology": "우도비 (Likelihood Ratio)",
    "terminology_ko": "우도비",
    "terminology_en": "Likelihood Ratio",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "두 가설 하에서 관찰된 데이터의 우도(가능도)의 비율로, 데이터가 어느 가설을 더 지지하는지를 나타내는 척도이다.",
    "definition_en": "The ratio of the likelihoods of the observed data under two competing hypotheses, indicating which hypothesis the data supports more strongly.",
    "significance": "베이즈 추론에서 사전확률을 사후확률로 변환하는 핵심 요소이며, 가설 간 상대적 증거 강도를 직접 비교할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "우도(likelihood) 개념을 통계학에 도입하고 최대우도추정법을 개발하였다."
      },
      {
        "name_ko": "해럴드 제프리스",
        "name_en": "Harold Jeffreys",
        "contribution": "우도비에 기반한 가설 비교 방법을 체계화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "베이즈 추론",
        "name_en": "Bayesian Inference",
        "id": "HYPO_BY_023"
      },
      {
        "name_ko": "사전확률",
        "name_en": "Prior Probability",
        "id": "HYPO_PP_024"
      },
      {
        "name_ko": "사후확률",
        "name_en": "Posterior Probability",
        "id": "HYPO_PO_025"
      },
      {
        "name_ko": "베이즈 인자",
        "name_en": "Bayes Factor",
        "id": "HYPO_BF_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "우도비 = L(H₁)/L(H₀) → 데이터가 H₁을 H₀보다 몇 배 더 지지하는가",
      "differential": "우도(likelihood)는 확률과 달리 합이 1이 될 필요가 없으며, 두 가설의 상대적 비교에 사용된다.",
      "key_point": "우도비가 1보다 크면 데이터가 H₁을 더 지지하고, 1보다 작으면 H₀를 더 지지한다.",
      "common_mistake": "우도(likelihood)를 확률(probability)과 동일시하는 것은 오류이다. 우도는 매개변수가 주어졌을 때 데이터의 함수이다."
    }
  },
  {
    "id": "HYPO_BF_027",
    "terminology": "베이즈 인자 (Bayes Factor)",
    "terminology_ko": "베이즈 인자",
    "terminology_en": "Bayes Factor",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "두 경쟁 가설의 주변 우도(marginal likelihood)의 비율로, NHST의 p값을 대체하여 가설 간 상대적 증거 강도를 정량화한다.",
    "definition_en": "The ratio of the marginal likelihoods of two competing hypotheses, quantifying the relative evidence strength between hypotheses as an alternative to the p-value in NHST.",
    "significance": "귀무가설을 '지지하는' 증거도 정량화할 수 있어, NHST에서 불가능한 '효과 없음의 증거'를 제시할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "해럴드 제프리스",
        "name_en": "Harold Jeffreys",
        "contribution": "베이즈 인자 개념을 도입하고 증거 강도 해석 기준을 제시하였다."
      },
      {
        "name_ko": "로버트 카스",
        "name_en": "Robert E. Kass",
        "contribution": "래프터리와 함께 베이즈 인자의 현대적 해석 기준과 활용법을 정리하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "우도비",
        "name_en": "Likelihood Ratio",
        "id": "HYPO_LR_026"
      },
      {
        "name_ko": "베이즈 추론",
        "name_en": "Bayesian Inference",
        "id": "HYPO_BY_023"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BF₁₀ = 10이면 '데이터가 H₁을 H₀보다 10배 더 지지한다'",
      "differential": "p값은 귀무가설만 평가하지만, 베이즈 인자는 두 가설을 동시에 비교하여 상대적 지지도를 제공한다.",
      "key_point": "제프리스 기준: BF > 3(약한 증거), > 10(강한 증거), > 30(매우 강한 증거), > 100(결정적 증거).",
      "common_mistake": "BF가 1에 가까우면 두 가설에 대한 증거가 비슷하다는 의미이지, 분석이 실패한 것이 아니다."
    }
  },
  {
    "id": "HYPO_ER_028",
    "terminology": "오류율 (Error Rate)",
    "terminology_ko": "오류율",
    "terminology_en": "Error Rate",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "통계적 검정에서 잘못된 결론을 내리는 비율로, 제1종 오류율(α)과 제2종 오류율(β)을 포함하는 포괄적 개념이다.",
    "definition_en": "The rate of making incorrect conclusions in statistical testing, encompassing both Type I error rate (α) and Type II error rate (β).",
    "significance": "가설검정의 질을 평가하는 핵심 기준이며, 연구 설계 시 두 오류율의 균형을 고려해야 한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "장기적 오류율 통제의 관점에서 가설검정 이론을 정립하였다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 두 종류 오류의 상충 관계를 분석하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      },
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "HYPO_FW_029"
      }
    ],
    "sub_types": [
      {
        "name": "비교별 오류율 (Per-comparison error rate)",
        "description": "개별 검정 하나에서의 제1종 오류 확률"
      },
      {
        "name": "가족별 오류율 (Familywise error rate)",
        "description": "일련의 검정 전체에서 하나 이상의 제1종 오류를 범할 확률"
      },
      {
        "name": "거짓발견율 (False discovery rate)",
        "description": "기각된 가설 중 거짓 기각의 비율"
      }
    ],
    "quiz_hints": {
      "mnemonic": "오류율 = 틀린 결정의 비율 → α(거짓 양성률) + β(거짓 음성률)",
      "differential": "비교별 오류율은 단일 검정의 오류이고, 가족별 오류율은 여러 검정을 동시에 수행할 때의 전체 오류이다.",
      "key_point": "α를 낮추면 β가 증가하고, β를 낮추면 α가 증가하는 상충 관계(trade-off)가 존재한다.",
      "common_mistake": "여러 검정을 동시에 수행하면 전체 오류율이 α보다 훨씬 높아지므로 다중비교 보정이 필요하다."
    }
  },
  {
    "id": "HYPO_FW_029",
    "terminology": "가족별 오류율 (Familywise Error Rate, FWER)",
    "terminology_ko": "가족별 오류율",
    "terminology_en": "Familywise Error Rate",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "하나의 연구에서 여러 통계 검정을 동시에 수행할 때, 하나 이상의 제1종 오류를 범할 전체 확률이다.",
    "definition_en": "The probability of making at least one Type I error when conducting multiple statistical tests simultaneously within a single study.",
    "significance": "다중비교 문제의 핵심 개념으로, k개 독립 검정 수행 시 FWER = 1 - (1-α)^k로 급격히 증가하므로 보정이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John W. Tukey",
        "contribution": "사후검정(HSD)을 통해 가족별 오류율을 통제하는 방법을 개발하였다."
      },
      {
        "name_ko": "카를로 에밀리오 본페로니",
        "name_en": "Carlo Emilio Bonferroni",
        "contribution": "부등식 원리를 통해 FWER 통제의 가장 보수적인 교정법의 기초를 제공하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "HYPO_BN_030"
      },
      {
        "name_ko": "다중비교 문제",
        "name_en": "Multiple Comparisons Problem",
        "id": "HYPO_MC_031"
      },
      {
        "name_ko": "오류율",
        "name_en": "Error Rate",
        "id": "HYPO_ER_028"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FWER = Family-Wise → 검정 '가족' 전체의 오류율",
      "differential": "FWER은 '하나라도 틀릴 확률'이고, 거짓발견율(FDR)은 '기각 중 틀린 비율'이다. FWER이 더 보수적이다.",
      "key_point": "20개 독립 검정(α = .05) 시 FWER = 1 - (1-.05)²⁰ ≈ .64로, 64% 확률로 최소 1개 거짓 양성이 발생한다.",
      "common_mistake": "분산분석 후 사후검정 없이 여러 t검정을 반복하면 FWER이 통제되지 않아 거짓 양성이 급증한다."
    }
  },
  {
    "id": "HYPO_BN_030",
    "terminology": "본페로니 교정 (Bonferroni Correction)",
    "terminology_ko": "본페로니 교정",
    "terminology_en": "Bonferroni Correction",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "다중비교에서 가족별 오류율(FWER)을 통제하기 위해 유의수준을 검정 횟수로 나누는 가장 단순하고 보수적인 교정 방법이다.",
    "definition_en": "The simplest and most conservative correction method for controlling familywise error rate in multiple comparisons, dividing the significance level by the number of tests.",
    "significance": "다중비교 보정의 가장 기본적인 방법으로, 교정된 유의수준 α' = α/k를 사용하여 전체 FWER을 α 이하로 유지한다.",
    "key_researchers": [
      {
        "name_ko": "카를로 에밀리오 본페로니",
        "name_en": "Carlo Emilio Bonferroni",
        "contribution": "부등식(Bonferroni inequality)을 증명하여 확률 합의 상한을 제시하였다."
      },
      {
        "name_ko": "올리브 진 던",
        "name_en": "Olive Jean Dunn",
        "contribution": "본페로니 부등식을 통계적 다중비교 문제에 적용하는 방법을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "HYPO_FW_029"
      },
      {
        "name_ko": "다중비교 문제",
        "name_en": "Multiple Comparisons Problem",
        "id": "HYPO_MC_031"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "본페로니 = α ÷ 검정 횟수(k) → 3번 검정하면 .05/3 ≈ .017",
      "differential": "본페로니 교정은 가장 보수적이어서 검정력이 크게 감소하고, Holm 방법은 비슷한 FWER 통제를 유지하면서 검정력이 더 높다.",
      "key_point": "검정 횟수가 많아지면 교정이 지나치게 엄격해져 실제 효과도 탐지하지 못하는 문제(제2종 오류 증가)가 있다.",
      "common_mistake": "본페로니 교정이 유일한 다중비교 보정법이라 생각하는 경우가 많지만, Holm, Hochberg, FDR 등 덜 보수적인 대안이 있다."
    }
  },
  {
    "id": "HYPO_MC_031",
    "terminology": "다중비교 문제 (Multiple Comparisons Problem)",
    "terminology_ko": "다중비교 문제",
    "terminology_en": "Multiple Comparisons Problem",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "동일 데이터셋에서 여러 통계 검정을 반복 수행할 때 제1종 오류의 확률이 누적적으로 증가하는 문제이다.",
    "definition_en": "The problem of cumulative increase in Type I error probability when performing multiple statistical tests on the same dataset.",
    "significance": "심리학 연구에서 여러 종속변인이나 집단을 비교할 때 필수적으로 고려해야 하며, 미보정 시 재현 불가능한 거짓 발견이 증가한다.",
    "key_researchers": [
      {
        "name_ko": "존 튜키",
        "name_en": "John W. Tukey",
        "contribution": "다중비교 문제를 체계적으로 분석하고 HSD(Honestly Significant Difference) 검정을 개발하였다."
      },
      {
        "name_ko": "요아브 벤야미니",
        "name_en": "Yoav Benjamini",
        "contribution": "호크버그와 함께 거짓발견율(FDR) 제어 방법을 개발하여 대안적 접근을 제시하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "HYPO_FW_029"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "HYPO_BN_030"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "검정 많이 하면 → 우연히 유의한 결과 발생 확률 급증 → '낚시질(fishing)' 문제",
      "differential": "계획된 비교(planned comparisons)는 사전에 지정하므로 보정이 덜 필요하지만, 사후비교(post-hoc)는 반드시 다중비교 보정이 필요하다.",
      "key_point": "해결 방법: 본페로니 교정, Holm 교정, Tukey HSD, FDR 제어 등이 있으며, 연구 목적에 따라 선택한다.",
      "common_mistake": "탐색적 분석에서 수십 개 검정을 수행한 후 유의한 결과만 보고하면서 다중비교 보정을 하지 않는 것은 연구 부정행위에 가깝다."
    }
  },
  {
    "id": "HYPO_SP_032",
    "terminology": "유의확률 (Significance Probability)",
    "terminology_ko": "유의확률",
    "terminology_en": "Significance Probability",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "관찰된 검정통계량 또는 그보다 극단적인 값이 귀무가설 하에서 나타날 확률로, p값과 동의어로 사용된다.",
    "definition_en": "The probability of obtaining a test statistic as extreme as or more extreme than the observed value under the null hypothesis; used synonymously with p-value.",
    "significance": "통계적 의사결정의 핵심 기준으로, 유의확률이 유의수준보다 작으면 결과가 통계적으로 유의하다고 판단한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "유의확률 개념을 데이터의 증거 강도 평가 도구로 도입하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "검정통계량",
        "name_en": "Test Statistic",
        "id": "HYPO_TS_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "유의확률 = p값의 한국어 표현 → sig. 또는 p로 SPSS 등에서 출력",
      "differential": "유의확률(p값)은 데이터에서 계산되는 관찰된 값이고, 유의수준(α)은 사전에 설정하는 기준값이다.",
      "key_point": "SPSS 등 통계 프로그램에서 'Sig.' 또는 'p'로 표시되며, 이 값이 α보다 작으면 유의하다고 판단한다.",
      "common_mistake": "유의확률이 정확히 .000으로 출력되더라도 실제로는 0이 아니며, p < .001로 보고해야 한다."
    }
  },
  {
    "id": "HYPO_FD_033",
    "terminology": "거짓발견율 (False Discovery Rate, FDR)",
    "terminology_ko": "거짓발견율",
    "terminology_en": "False Discovery Rate",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "기각된 귀무가설 중에서 실제로는 참인 귀무가설의 비율, 즉 유의하다고 판단한 결과 중 거짓 양성의 기대 비율이다.",
    "definition_en": "The expected proportion of rejected null hypotheses that are actually true, i.e., the expected proportion of false positives among all significant results.",
    "significance": "대규모 동시 검정(예: 유전체, 뇌영상)에서 FWER보다 덜 보수적이면서 오류를 효과적으로 통제하는 대안으로 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "요아브 벤야미니",
        "name_en": "Yoav Benjamini",
        "contribution": "호크버그와 함께 BH 절차(Benjamini-Hochberg procedure)를 개발하여 FDR 제어 방법을 제시하였다."
      },
      {
        "name_ko": "이탤 호크버그",
        "name_en": "Yosef Hochberg",
        "contribution": "벤야미니와 함께 FDR 제어의 수학적 기초를 확립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "HYPO_FW_029"
      },
      {
        "name_ko": "다중비교 문제",
        "name_en": "Multiple Comparisons Problem",
        "id": "HYPO_MC_031"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "HYPO_BN_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FDR = 발견한 것 중 '거짓'의 비율 → FWER보다 관대하지만 여전히 통제된 오류",
      "differential": "FWER은 '하나라도 거짓 양성일 확률'을 통제하고, FDR은 '유의한 결과 중 거짓 양성 비율'을 통제한다.",
      "key_point": "BH 절차: p값을 정렬 → 각 p값을 (순위/총 검정 수) × α와 비교 → 가장 큰 유의한 p값까지 기각.",
      "common_mistake": "FDR 제어가 FWER 제어보다 항상 우월한 것은 아니며, 소수의 검정에서는 FWER 제어가 더 적절할 수 있다."
    }
  },
  {
    "id": "HYPO_PA_034",
    "terminology": "검정력 분석 (Power Analysis)",
    "terminology_ko": "검정력 분석",
    "terminology_en": "Power Analysis",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "연구 설계 단계에서 원하는 검정력을 달성하기 위해 필요한 표본크기를 결정하거나, 주어진 조건에서의 검정력을 계산하는 절차이다.",
    "definition_en": "A procedure for determining the sample size needed to achieve a desired level of statistical power, or for calculating the power given specific conditions in the research design.",
    "significance": "연구 자원의 효율적 배분과 제2종 오류 방지를 위한 필수적 사전 절차로, 연구비 신청 시 요구되는 핵심 근거이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "검정력 분석의 방법론과 소프트웨어(G*Power의 기초)를 체계화하고 'Statistical Power Analysis for the Behavioral Sciences'를 저술하였다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어를 개발하여 검정력 분석을 실용적으로 활용할 수 있게 하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      }
    ],
    "sub_types": [
      {
        "name": "사전 검정력 분석 (A priori)",
        "description": "연구 전 필요 표본크기 산출"
      },
      {
        "name": "사후 검정력 분석 (Post hoc)",
        "description": "연구 후 달성된 검정력 계산"
      },
      {
        "name": "민감도 분석 (Sensitivity)",
        "description": "주어진 표본크기로 탐지 가능한 최소 효과크기 산출"
      }
    ],
    "quiz_hints": {
      "mnemonic": "검정력 분석 = 연구 전 '몇 명이 필요한가?' 계산 → α, 효과크기, 검정력 3개로 n 결정",
      "differential": "사전(a priori) 검정력 분석은 연구 설계 시, 사후(post hoc) 검정력 분석은 연구 완료 후 수행하지만, 사후 분석은 비판이 많다.",
      "key_point": "검정력 분석의 4개 매개변수(α, 검정력, 효과크기, n) 중 3개를 알면 나머지 1개를 구할 수 있다.",
      "common_mistake": "사후 검정력 분석(observed power)은 p값과 1:1 대응하므로 새로운 정보를 제공하지 않아 무의미하다는 비판이 있다."
    }
  },
  {
    "id": "HYPO_SS_035",
    "terminology": "통계적 유의성 (Statistical Significance)",
    "terminology_ko": "통계적 유의성",
    "terminology_en": "Statistical Significance",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "관찰된 결과가 우연(표집오차)만으로는 설명하기 어려울 정도로 극단적이어서, 귀무가설을 기각하기에 충분한 증거가 있는 상태를 말한다.",
    "definition_en": "A condition in which the observed results are sufficiently extreme to be unlikely under the null hypothesis, providing enough evidence to reject it.",
    "significance": "연구 결과의 신뢰성을 판단하는 관례적 기준이지만, 실질적 유의성(practical significance)과 구분하여 해석해야 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "통계적 유의성의 개념과 기준을 확립하고 과학 연구에 광범위하게 적용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "실질적 유의성",
        "name_en": "Practical Significance",
        "id": "HYPO_PS_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통계적 유의성 = p < α → '우연이라고 보기 어렵다'는 판단",
      "differential": "통계적 유의성은 효과의 '존재 여부'에 대한 판단이고, 실질적 유의성은 효과의 '크기'와 '중요성'에 대한 판단이다.",
      "key_point": "통계적으로 유의하다고 해서 반드시 실질적으로 중요하거나 의미 있는 것은 아니다.",
      "common_mistake": "'유의하지 않다(p > .05)'를 '효과가 없다'로 해석하는 것은 논리적 오류이다."
    }
  },
  {
    "id": "HYPO_PS_036",
    "terminology": "실질적 유의성 (Practical Significance)",
    "terminology_ko": "실질적 유의성",
    "terminology_en": "Practical Significance",
    "category": "HYPO",
    "category_name": "가설검정 (Hypothesis Testing)",
    "definition": "통계적 유의성과 별개로, 연구 결과가 실제 현장에서 의미 있고 중요한 차이나 효과를 나타내는지를 평가하는 것이다.",
    "definition_en": "An evaluation of whether research findings represent a meaningful and important difference or effect in practical settings, separate from statistical significance.",
    "significance": "효과크기를 통해 평가하며, 표본이 클 때 사소한 차이도 통계적으로 유의할 수 있으므로 연구 결과의 실제 가치를 판단하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기 보고를 통해 통계적 유의성 너머의 실질적 중요성 평가를 강조하였다."
      },
      {
        "name_ko": "커크",
        "name_en": "Roger E. Kirk",
        "contribution": "실질적 유의성과 통계적 유의성의 구분, 효과크기 보고의 중요성을 체계적으로 주장하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 유의성",
        "name_en": "Statistical Significance",
        "id": "HYPO_SS_035"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실질적 유의성 = '현실에서 의미 있는가?' → 통계적 유의성 ≠ 실제 중요성",
      "differential": "통계적 유의성은 p값 기반 이분법적 판단이고, 실질적 유의성은 효과크기와 맥락을 고려한 질적 판단이다.",
      "key_point": "N = 10,000이면 아주 작은 차이(예: d = 0.03)도 p < .05가 될 수 있지만, 실질적 의미는 거의 없다.",
      "common_mistake": "통계적으로 유의한 결과를 자동으로 '중요한 발견'으로 보고하는 것은 실질적 유의성을 고려하지 않은 것이다."
    }
  }
];

TERMS_DATA.TTEST = [
  {
    "id": "TTEST_OS_001",
    "terminology": "일표본 t검정 (One-sample t-test)",
    "terminology_ko": "일표본 t검정",
    "terminology_en": "One-sample t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "하나의 표본 평균이 알려진 모집단 평균(또는 이론적 기대값)과 통계적으로 유의하게 다른지를 검정하는 모수적 방법이다.",
    "definition_en": "A parametric test that determines whether the mean of a single sample is significantly different from a known or hypothesized population mean.",
    "significance": "기준값이나 이론적 기대치와의 비교가 필요한 심리학 연구에서, 표본이 특정 모집단에서 왔는지를 평가하는 기본적 검정이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "'Student'라는 필명으로 소표본에서의 t분포와 t검정을 개발하였다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "t검정의 수학적 기초를 확장하고 자유도 개념을 명확히 하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired-samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "t분포",
        "name_en": "t-distribution",
        "id": "TTEST_TD_009"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일(1)표본 t = 표본 1개 vs 기준값 → t = (X̄ - μ₀) / (s/√n)",
      "differential": "일표본 t검정은 '표본 vs 기준값'이고, 독립표본 t검정은 '표본 vs 표본'이다.",
      "key_point": "검정통계량: t = (X̄ - μ₀) / (s/√n), 자유도: df = n - 1. 모분산이 미지일 때 사용한다.",
      "common_mistake": "모분산을 알고 있으면 t검정이 아닌 z검정을 사용해야 한다. t검정은 표본분산(s²)을 사용할 때 적절하다."
    }
  },
  {
    "id": "TTEST_IT_002",
    "terminology": "독립표본 t검정 (Independent-samples t-test)",
    "terminology_ko": "독립표본 t검정",
    "terminology_en": "Independent-samples t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "서로 독립적인 두 집단의 평균 차이가 통계적으로 유의한지를 검정하는 방법으로, 피험자간 설계에서 사용된다.",
    "definition_en": "A test that determines whether the means of two independent groups are significantly different, used in between-subjects designs.",
    "significance": "실험집단과 통제집단의 비교, 남녀 차이 검증 등 심리학 연구에서 가장 빈번하게 사용되는 기본 검정이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "t검정의 기본 틀을 개발하였으며, 이후 두 표본 비교로 확장되었다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "독립표본 t검정의 수학적 정당성을 확립하고 분산분석과의 관계를 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired-samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "웰치의 t검정",
        "name_en": "Welch's t-test",
        "id": "TTEST_WT_008"
      },
      {
        "name_ko": "피험자간 설계",
        "name_en": "Between-subjects Design",
        "id": "DESIGN_BS_008"
      },
      {
        "name_ko": "합동분산",
        "name_en": "Pooled Variance",
        "id": "TTEST_PV_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립표본 = 서로 다른 사람들 비교 → 실험군 vs 통제군",
      "differential": "독립표본 t검정은 서로 다른 참가자(피험자간)이고, 대응표본 t검정은 같은 참가자가 두 조건 모두 경험(피험자내)한다.",
      "key_point": "t = (X̄₁ - X̄₂) / √(s²p(1/n₁ + 1/n₂)), 자유도: df = n₁ + n₂ - 2. 등분산 가정을 충족해야 한다.",
      "common_mistake": "두 집단의 분산이 크게 다를 때 일반 독립표본 t검정 대신 웰치의 t검정을 사용해야 한다."
    }
  },
  {
    "id": "TTEST_PT_003",
    "terminology": "대응표본 t검정 (Paired-samples t-test)",
    "terminology_ko": "대응표본 t검정",
    "terminology_en": "Paired-samples t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "동일한 참가자에게서 두 번 측정하거나 짝지어진 두 집단의 평균 차이가 통계적으로 유의한지를 검정하는 방법이다.",
    "definition_en": "A test that determines whether the mean difference between two related measurements (same participants or matched pairs) is statistically significant.",
    "significance": "사전-사후 비교, 처치 효과 평가 등 반복측정 설계에서 개인차 변동을 통제하여 더 민감한 검정이 가능하다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "짝지어진 비교(paired comparison)의 효율성을 초기에 인식하고 적용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "대응표본",
        "name_en": "Paired Samples",
        "id": "TTEST_PS_016"
      },
      {
        "name_ko": "피험자내 설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "TTEST_WS_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대응 = 같은 사람, 두 번 측정 → 차이점수(D = X₂ - X₁)로 분석",
      "differential": "대응표본은 차이점수(D)에 대한 일표본 t검정이며, 독립표본은 두 집단 평균을 직접 비교한다.",
      "key_point": "t = D̄ / (sD/√n), 자유도: df = n - 1(쌍의 수 - 1). 개인차를 통제하여 검정력이 높다.",
      "common_mistake": "대응표본 t검정에서 n은 '참가자 수'(쌍의 수)이지, 총 측정치 수(2n)가 아니다."
    }
  },
  {
    "id": "TTEST_DF_004",
    "terminology": "자유도 (Degrees of Freedom)",
    "terminology_ko": "자유도",
    "terminology_en": "Degrees of Freedom",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "통계량 계산에서 자유롭게 변할 수 있는 독립적인 값의 개수로, t분포의 형태와 임계값을 결정하는 핵심 매개변수이다.",
    "definition_en": "The number of independent values that are free to vary in the calculation of a statistic, a key parameter that determines the shape and critical values of the t-distribution.",
    "significance": "표본크기가 작을수록 자유도가 줄어 t분포의 꼬리가 두꺼워지며, 이는 더 보수적인(기각하기 어려운) 검정으로 이어진다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "자유도 개념을 통계학에 체계적으로 도입하고 수학적으로 정의하였다."
      },
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "t분포에서 자유도의 역할을 최초로 인식하고 활용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "t분포",
        "name_en": "t-distribution",
        "id": "TTEST_TD_009"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자유도 = n - 제약 → 일표본: n-1, 독립표본: n₁+n₂-2, 대응: n-1(쌍)",
      "differential": "t검정의 자유도는 검정 유형에 따라 다르고, F검정(ANOVA)은 분자·분모 각각의 자유도가 필요하다.",
      "key_point": "자유도가 클수록(표본이 클수록) t분포는 정규분포에 가까워지고, df ≥ 30이면 거의 유사하다.",
      "common_mistake": "웰치의 t검정에서 자유도는 정수가 아닌 소수로 계산되며(Satterthwaite 근사), n₁+n₂-2보다 작을 수 있다."
    }
  },
  {
    "id": "TTEST_SE_005",
    "terminology": "평균의 표준오차 (Standard Error of the Mean)",
    "terminology_ko": "평균의 표준오차",
    "terminology_en": "Standard Error of the Mean",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "표본평균의 표집분포에서의 표준편차로, 표본평균이 모평균 주위에서 얼마나 변동하는지를 나타내는 측도이다.",
    "definition_en": "The standard deviation of the sampling distribution of the sample mean, measuring how much the sample mean varies around the population mean.",
    "significance": "t검정 공식의 분모에 해당하며, 표본크기가 커질수록 감소하여 더 정밀한 추정과 강력한 검정을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "소표본에서 표준오차 추정의 불확실성을 인식하고 t분포로 이를 보정하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      },
      {
        "name_ko": "표본분포",
        "name_en": "Sampling Distribution",
        "id": "SAMPLE_SD_013"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SE = s / √n → 표준편차를 루트 n으로 나눈다 → n이 크면 SE가 작아진다",
      "differential": "표준편차(SD)는 개별 점수의 변동성이고, 표준오차(SE)는 표본평균의 변동성이다. SE = SD / √n.",
      "key_point": "표본크기를 4배로 늘리면 표준오차는 절반으로 줄어든다(√4 = 2). 정밀도 향상의 수확체감 법칙이 적용된다.",
      "common_mistake": "표준오차와 표준편차를 혼동하는 경우가 많다. 그래프 오차막대(error bar)에 어느 것을 사용했는지 반드시 명시해야 한다."
    }
  },
  {
    "id": "TTEST_CD_006",
    "terminology": "코헨의 d (Cohen's d)",
    "terminology_ko": "코헨의 d",
    "terminology_en": "Cohen's d",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "두 집단의 평균 차이를 합동표준편차로 나누어 표준화한 효과크기 지표로, t검정 결과의 실질적 크기를 나타낸다.",
    "definition_en": "A standardized effect size measure that divides the difference between two group means by the pooled standard deviation, indicating the practical magnitude of t-test results.",
    "significance": "t검정과 함께 반드시 보고해야 하는 효과크기 지표로, 표본크기에 독립적이어서 연구 간 비교와 메타분석에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기 d를 개발하고, 소(0.2)·중(0.5)·대(0.8)의 해석 기준을 제시하였다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "소표본 편향을 보정한 Hedges' g를 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "합동표준편차",
        "name_en": "Pooled Standard Deviation",
        "id": "TTEST_PS_018"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "d = (M₁ - M₂) / sp → 평균 차이를 표준편차 단위로 표현 → d = 1.0이면 1 SD 차이",
      "differential": "Cohen's d는 두 집단 비교, 반복측정의 경우 dz(차이점수 기반) 또는 dav(두 시점 평균 SD 기반)를 사용한다.",
      "key_point": "코헨의 기준: d = 0.2(소), 0.5(중), 0.8(대). 이는 일반적 지침이며, 연구 분야에 따라 달라질 수 있다.",
      "common_mistake": "d의 해석 기준은 맥락에 따라 달라야 한다. 예를 들어 임상 장면에서 d = 0.2도 실질적으로 중요할 수 있다."
    }
  },
  {
    "id": "TTEST_HV_007",
    "terminology": "등분산 가정 (Homogeneity of Variance Assumption)",
    "terminology_ko": "등분산 가정",
    "terminology_en": "Homogeneity of Variance Assumption",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "독립표본 t검정에서 두 집단의 모분산이 동일하다는 가정으로, 위반 시 제1종 오류율이 왜곡될 수 있다.",
    "definition_en": "The assumption in independent-samples t-tests that the population variances of both groups are equal; violation can distort the Type I error rate.",
    "significance": "합동분산을 사용하는 전통적 t검정의 타당성을 결정하는 핵심 가정이며, 위반 시 웰치의 t검정을 대안으로 사용한다.",
    "key_researchers": [
      {
        "name_ko": "하워드 레빈",
        "name_en": "Howard Levene",
        "contribution": "분산의 동질성을 검정하는 레빈 검정(Levene's test)을 개발하였다."
      },
      {
        "name_ko": "모턴 브라운",
        "name_en": "Morton B. Brown",
        "contribution": "포사이스와 함께 레빈 검정의 변형 버전을 개발하여 견고성을 높였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "레빈 검정",
        "name_en": "Levene's Test",
        "id": "TTEST_LV_010"
      },
      {
        "name_ko": "웰치의 t검정",
        "name_en": "Welch's t-test",
        "id": "TTEST_WT_008"
      },
      {
        "name_ko": "합동분산",
        "name_en": "Pooled Variance",
        "id": "TTEST_PV_012"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "등분산 = 두 집단의 분산이 '같다(等)'는 가정 → σ₁² = σ₂²",
      "differential": "등분산 가정은 독립표본 t검정에만 해당하며, 대응표본 t검정에서는 이 가정이 필요하지 않다.",
      "key_point": "두 집단의 분산 비가 2:1 이내이고 표본크기가 비슷하면, 등분산 가정 위반에 비교적 강건하다.",
      "common_mistake": "레빈 검정이 유의하면 등분산 가정이 위반되었다는 것이지, 유의하면 등분산이라는 것이 아니다."
    }
  },
  {
    "id": "TTEST_WT_008",
    "terminology": "웰치의 t검정 (Welch's t-test)",
    "terminology_ko": "웰치의 t검정",
    "terminology_en": "Welch's t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "등분산 가정을 요구하지 않는 독립표본 t검정의 변형으로, 각 집단의 분산을 별도로 추정하고 자유도를 보정한다.",
    "definition_en": "A modification of the independent-samples t-test that does not require the equal variance assumption, estimating each group's variance separately and adjusting the degrees of freedom.",
    "significance": "등분산 가정이 충족되지 않을 때의 대안으로, 현재 많은 연구자가 기본(default) t검정으로 웰치의 검정 사용을 권장한다.",
    "key_researchers": [
      {
        "name_ko": "버나드 웰치",
        "name_en": "Bernard L. Welch",
        "contribution": "이분산 상황에서도 정확한 검정을 제공하는 수정된 t검정 절차를 개발하였다."
      },
      {
        "name_ko": "프랭클린 새터스웨이트",
        "name_en": "Franklin E. Satterthwaite",
        "contribution": "이분산 상황에서의 자유도 근사 공식(Satterthwaite approximation)을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "레빈 검정",
        "name_en": "Levene's Test",
        "id": "TTEST_LV_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "웰치 = 분산이 달라도 OK → 자유도를 소수점으로 보정(Satterthwaite 근사)",
      "differential": "전통적 t검정은 합동분산(pooled)을 사용하지만, 웰치의 t검정은 각 집단의 분산을 개별적으로 사용한다.",
      "key_point": "등분산일 때도 웰치의 검정은 유사한 결과를 제공하므로, 기본값으로 웰치를 사용하라는 권고가 늘고 있다.",
      "common_mistake": "SPSS에서 레빈 검정이 유의하면 '등분산이 가정되지 않은' 행의 결과(웰치)를 보고해야 한다."
    }
  },
  {
    "id": "TTEST_TD_009",
    "terminology": "t분포 (t-distribution)",
    "terminology_ko": "t분포",
    "terminology_en": "t-distribution",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "정규모집단에서 소표본을 추출할 때 표본통계량이 따르는 확률분포로, 정규분포보다 꼬리가 두꺼운 종형 분포이다.",
    "definition_en": "A probability distribution followed by sample statistics drawn from normally distributed populations with small samples, a bell-shaped distribution with heavier tails than the normal distribution.",
    "significance": "모분산이 미지일 때 표준오차 추정의 불확실성을 반영하여, 소표본에서도 정확한 통계적 추론을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "'Student'라는 필명으로 1908년 t분포를 발견하고 논문을 발표하였다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "t분포의 수학적 증명을 완성하고 'Student's t'라는 명칭을 붙였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "t분포 = 정규분포의 '뚱뚱한 꼬리' 버전 → df가 커지면 정규분포에 수렴",
      "differential": "z분포(표준정규)는 모분산이 알려졌을 때, t분포는 모분산이 미지여서 표본분산으로 추정할 때 사용한다.",
      "key_point": "자유도(df)가 유일한 매개변수이며, df → ∞이면 표준정규분포와 동일해진다. df ≥ 30이면 거의 유사하다.",
      "common_mistake": "t분포는 하나가 아니라 자유도에 따라 무한히 많은 분포의 가족(family)이다."
    }
  },
  {
    "id": "TTEST_LV_010",
    "terminology": "레빈 검정 (Levene's Test)",
    "terminology_ko": "레빈 검정",
    "terminology_en": "Levene's Test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "두 개 이상 집단의 분산이 동일한지를 검정하는 방법으로, 각 관측값과 집단 중심값의 절대편차에 대해 분산분석을 수행한다.",
    "definition_en": "A test for equality of variances across two or more groups, performing an ANOVA on the absolute deviations of each observation from its group center.",
    "significance": "독립표본 t검정이나 ANOVA의 등분산 가정을 사전에 검증하는 표준적 방법으로, SPSS 등 주요 통계 프로그램에서 기본 제공된다.",
    "key_researchers": [
      {
        "name_ko": "하워드 레빈",
        "name_en": "Howard Levene",
        "contribution": "분산 동질성 검정을 위한 비모수적 접근의 레빈 검정을 개발하였다."
      },
      {
        "name_ko": "모턴 브라운",
        "name_en": "Morton B. Brown",
        "contribution": "중앙값 기반 변형(Brown-Forsythe 검정)을 개발하여 비정규 분포에서의 견고성을 개선하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "웰치의 t검정",
        "name_en": "Welch's t-test",
        "id": "TTEST_WT_008"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      }
    ],
    "sub_types": [
      {
        "name": "평균 기반 레빈 검정",
        "description": "각 집단의 평균으로부터의 절대편차를 사용 (원래 버전)"
      },
      {
        "name": "중앙값 기반 레빈 검정 (Brown-Forsythe)",
        "description": "중앙값으로부터의 절대편차를 사용, 비정규에 더 강건"
      }
    ],
    "quiz_hints": {
      "mnemonic": "레빈 검정 = 분산 같은지 확인 → p > .05이면 등분산 OK",
      "differential": "레빈 검정에서 유의(p < .05)하면 분산이 다르다는 의미이므로, 웰치 t검정을 사용해야 한다.",
      "key_point": "SPSS 독립표본 t검정 출력에서 레빈 검정 결과가 자동으로 제시되며, 이에 따라 적절한 t값 행을 선택한다.",
      "common_mistake": "레빈 검정 자체도 표본크기에 영향을 받으므로, 대표본에서는 사소한 분산 차이도 유의하게 나타날 수 있다."
    }
  },
  {
    "id": "TTEST_HT_011",
    "terminology": "동질성 검정 (Homogeneity Test)",
    "terminology_ko": "동질성 검정",
    "terminology_en": "Homogeneity Test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "비교하려는 집단들의 특성(분산, 분포 등)이 동질적인지를 확인하는 통계적 검정 절차의 총칭이다.",
    "definition_en": "A general category of statistical tests that check whether the characteristics (variance, distribution, etc.) of groups being compared are homogeneous.",
    "significance": "모수적 검정의 기본 가정을 사전에 검증하는 절차로, 가정 위반 시 대안적 분석 방법의 선택을 안내한다.",
    "key_researchers": [
      {
        "name_ko": "모리스 바틀렛",
        "name_en": "Maurice S. Bartlett",
        "contribution": "바틀렛 검정(Bartlett's test)을 개발하여 정규분포 가정 하의 분산 동질성 검정을 제시하였다."
      },
      {
        "name_ko": "하워드 레빈",
        "name_en": "Howard Levene",
        "contribution": "정규성 가정에 강건한 분산 동질성 검정을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "레빈 검정",
        "name_en": "Levene's Test",
        "id": "TTEST_LV_010"
      },
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      }
    ],
    "sub_types": [
      {
        "name": "분산 동질성 검정",
        "description": "레빈, 바틀렛 검정 등으로 분산의 동질성 확인"
      },
      {
        "name": "분포 동질성 검정",
        "description": "카이제곱 동질성 검정으로 분포 형태의 동질성 확인"
      }
    ],
    "quiz_hints": {
      "mnemonic": "동질성 = 집단들이 '같은 성질'인지 확인 → 분산 동질성이 가장 흔한 사례",
      "differential": "동질성 검정은 '가정이 충족되는가?'를 확인하는 것이고, t검정이나 ANOVA는 '차이가 있는가?'를 확인하는 것이다.",
      "key_point": "등분산 동질성 검정은 예비 분석(preliminary analysis)으로 실시하며, 주요 분석 방법의 선택에 영향을 준다.",
      "common_mistake": "동질성 검정 결과만으로 분석 방법을 기계적으로 선택하는 것보다, 시각적 검토와 함께 종합적으로 판단하는 것이 바람직하다."
    }
  },
  {
    "id": "TTEST_PV_012",
    "terminology": "합동분산 (Pooled Variance)",
    "terminology_ko": "합동분산",
    "terminology_en": "Pooled Variance",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "독립표본 t검정에서 두 집단의 분산을 표본크기에 따라 가중 평균하여 하나의 추정치로 합친 공통 분산 추정치이다.",
    "definition_en": "A weighted average of the variances from two groups in an independent-samples t-test, combining them into a single estimate of the common population variance.",
    "significance": "등분산 가정이 충족될 때, 두 집단의 정보를 결합하여 더 안정적인 모분산 추정치를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "합동 추정의 원리를 통계적 추론에 체계적으로 적용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "합동표준편차",
        "name_en": "Pooled Standard Deviation",
        "id": "TTEST_PS_018"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "합동분산 = 두 집단 분산의 가중 평균 → s²p = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2)",
      "differential": "합동분산은 등분산 가정 하에서 사용하고, 웰치 t검정에서는 각 집단의 분산을 별도로 사용한다.",
      "key_point": "가중치는 각 집단의 자유도(n-1)이므로, 표본크기가 큰 집단의 분산이 더 많이 반영된다.",
      "common_mistake": "두 분산의 단순 평균이 아니라 자유도로 가중한 평균이다. 표본크기가 같을 때만 단순 평균과 같다."
    }
  },
  {
    "id": "TTEST_ES_013",
    "terminology": "t검정의 효과크기 (Effect Size for t-tests)",
    "terminology_ko": "t검정의 효과크기",
    "terminology_en": "Effect Size for t-tests",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정에서 평균 차이의 실질적 크기를 나타내는 표준화 지표로, Cohen's d가 가장 널리 사용된다.",
    "definition_en": "A standardized measure of the practical magnitude of mean differences in t-tests, with Cohen's d being the most widely used indicator.",
    "significance": "APA 출판 매뉴얼에서 통계적 유의성과 함께 효과크기 보고를 의무화하고 있어, t검정 결과 해석에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "행동과학에서의 효과크기 체계를 확립하고, d, r, f 등 다양한 효과크기 지표를 개발하였다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "소표본 편향을 교정한 Hedges' g를 제시하여 메타분석에서의 효과크기 활용을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "TTEST_CD_006"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      }
    ],
    "sub_types": [
      {
        "name": "Cohen's d",
        "description": "독립 두 집단 평균 차이를 합동표준편차로 나눈 값"
      },
      {
        "name": "Hedges' g",
        "description": "Cohen's d에 소표본 편향 보정을 적용한 값"
      },
      {
        "name": "Glass's Δ",
        "description": "통제집단의 표준편차만을 분모로 사용한 효과크기"
      },
      {
        "name": "점이연상관 (r_pb)",
        "description": "이분 변인과 연속 변인 간의 상관으로 표현한 효과크기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "t에서 d 구하기: d = 2t / √df (독립표본), d = t / √n (대응표본)",
      "differential": "Cohen's d는 합동SD 사용, Glass's Δ는 통제집단SD만 사용, Hedges' g는 d에 소표본 보정을 적용한다.",
      "key_point": "효과크기의 95% 신뢰구간도 함께 보고하면, 효과크기 추정의 정밀성을 평가할 수 있다.",
      "common_mistake": "t값이 크다고 반드시 효과크기가 큰 것은 아니다. t값은 표본크기에 영향을 받지만 d는 그렇지 않다."
    }
  },
  {
    "id": "TTEST_MD_014",
    "terminology": "평균차이 (Mean Difference)",
    "terminology_ko": "평균차이",
    "terminology_en": "Mean Difference",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "두 집단 또는 두 조건의 표본평균 간의 차이로, t검정의 분자에 해당하며 검정의 핵심 관심사이다.",
    "definition_en": "The difference between the sample means of two groups or conditions, constituting the numerator of the t-test and the primary focus of the test.",
    "significance": "비표준화된 원래 단위의 효과 크기를 나타내며, 표준화된 효과크기(d)와 함께 보고하면 결과 해석이 풍부해진다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "평균 차이의 통계적 유의성을 소표본에서 평가할 수 있는 방법을 최초로 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균",
        "name_en": "Mean",
        "id": "DESCRIP_MN_001"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "평균차이 = X̄₁ - X̄₂ → t검정의 분자(효과), 분모는 표준오차(오차)",
      "differential": "평균차이는 원점수 단위(예: 5점 차이)이고, Cohen's d는 표준편차 단위(예: 0.5 SD 차이)이다.",
      "key_point": "평균차이의 신뢰구간을 함께 보고하면, 모집단 평균 차이의 가능한 범위를 알 수 있다.",
      "common_mistake": "평균차이만으로는 효과의 크기를 판단할 수 없다. 변동성(표준편차)을 고려해야 한다."
    }
  },
  {
    "id": "TTEST_CI_015",
    "terminology": "평균차이의 신뢰구간 (Confidence Interval for Mean Difference)",
    "terminology_ko": "평균차이의 신뢰구간",
    "terminology_en": "Confidence Interval for Mean Difference",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "두 집단 모평균 차이의 참값이 포함될 것으로 기대되는 범위로, t검정 결과에 추정의 정밀도 정보를 추가한다.",
    "definition_en": "A range within which the true population mean difference is expected to fall, adding precision information to t-test results.",
    "significance": "가설검정의 이분법적 판단을 보완하여, 효과의 크기와 방향에 대한 연속적 정보를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "신뢰구간의 빈도주의적 이론을 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      },
      {
        "name_ko": "평균차이",
        "name_en": "Mean Difference",
        "id": "TTEST_MD_014"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "TTEST_SE_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CI = (X̄₁ - X̄₂) ± t_crit × SE → 평균차이에서 오차범위를 더하고 뺌",
      "differential": "신뢰구간이 0을 포함하면 p > .05(비유의), 0을 포함하지 않으면 p < .05(유의)와 대응한다.",
      "key_point": "95% CI는 양측 α = .05 t검정과, 99% CI는 α = .01 t검정과 대응한다.",
      "common_mistake": "CI의 너비는 표본크기에 영향을 받으므로, 좁은 CI가 항상 더 좋은 연구를 의미하지는 않는다."
    }
  },
  {
    "id": "TTEST_PS_016",
    "terminology": "대응표본 (Paired Samples)",
    "terminology_ko": "대응표본",
    "terminology_en": "Paired Samples",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "동일한 참가자에게 두 번 측정하거나 의미 있는 기준으로 짝지어진 두 관측치의 쌍으로 구성된 표본이다.",
    "definition_en": "A sample consisting of pairs of observations from the same participant measured twice or from meaningfully matched pairs.",
    "significance": "짝지어진 관측치 간의 상관을 활용하여 개인차 변동을 제거함으로써, 독립표본보다 더 민감한 검정이 가능하다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "짝진 비교(paired comparison)의 통계적 효율성을 최초로 인식하고 활용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired-samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "독립표본",
        "name_en": "Independent Samples",
        "id": "TTEST_IS_017"
      },
      {
        "name_ko": "피험자내 설계",
        "name_en": "Within-subjects Design",
        "id": "DESIGN_WS_007"
      }
    ],
    "sub_types": [
      {
        "name": "반복측정 (Repeated measures)",
        "description": "같은 참가자를 두 시점 또는 두 조건에서 측정"
      },
      {
        "name": "짝짓기 (Matched pairs)",
        "description": "주요 변인에서 유사한 참가자를 짝지어 배정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대응 = 짝(pair) → 같은 사람의 전후, 또는 짝지어진 두 사람",
      "differential": "대응표본은 관측치 간 의존성(dependency)이 있고, 독립표본은 관측치 간 독립성(independence)이 있다.",
      "key_point": "대응표본 t검정은 차이점수(D = X₂ - X₁)를 구한 후, 이 차이점수에 대한 일표본 t검정을 수행하는 것이다.",
      "common_mistake": "대응표본에 독립표본 t검정을 적용하면, 개인차를 고려하지 못해 오차가 과대추정되고 검정력이 낮아진다."
    }
  },
  {
    "id": "TTEST_IS_017",
    "terminology": "독립표본 (Independent Samples)",
    "terminology_ko": "독립표본",
    "terminology_en": "Independent Samples",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "한 집단의 관측치가 다른 집단의 관측치와 짝지어지지 않고 서로 독립적으로 수집된 두 개의 표본이다.",
    "definition_en": "Two samples in which the observations in one group are not paired with or related to observations in the other group, collected independently.",
    "significance": "피험자간 설계의 기본 표본 구조로, 무선할당을 통해 집단 간 동질성을 확보하여 인과 추론의 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "무선할당(random assignment)을 통한 독립 집단 비교의 실험적 논리를 확립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "대응표본",
        "name_en": "Paired Samples",
        "id": "TTEST_PS_016"
      },
      {
        "name_ko": "피험자간 설계",
        "name_en": "Between-subjects Design",
        "id": "DESIGN_BS_008"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립 = 서로 관계 없는 다른 사람들 → 실험군(A)과 통제군(B)은 별개",
      "differential": "독립표본은 '다른 사람'이 다른 조건, 대응표본은 '같은 사람'이 두 조건을 경험한다.",
      "key_point": "독립성은 한 집단의 점수가 다른 집단의 점수에 대한 정보를 제공하지 않음을 의미한다.",
      "common_mistake": "표본크기가 다른 두 집단도 독립표본 t검정을 사용할 수 있다. 등표본크기가 필수 조건은 아니다."
    }
  },
  {
    "id": "TTEST_PS_018",
    "terminology": "합동표준편차 (Pooled Standard Deviation)",
    "terminology_ko": "합동표준편차",
    "terminology_en": "Pooled Standard Deviation",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "합동분산의 제곱근으로, Cohen's d의 분모에 사용되어 두 집단의 평균 차이를 표준화하는 데 활용된다.",
    "definition_en": "The square root of the pooled variance, used as the denominator in Cohen's d to standardize the mean difference between two groups.",
    "significance": "효과크기 d 계산의 핵심 구성요소로, 두 집단의 변동성 정보를 하나로 통합한 공통 척도를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "합동표준편차를 효과크기 d의 분모로 사용하는 방법을 표준화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "합동분산",
        "name_en": "Pooled Variance",
        "id": "TTEST_PV_012"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "TTEST_CD_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "sp = √s²p → 합동분산에 루트를 씌운 것 → d = (M₁-M₂)/sp",
      "differential": "합동표준편차는 두 집단 SD의 가중 평균이고, Glass's Δ에서는 통제집단의 SD만 사용한다.",
      "key_point": "sp = √[((n₁-1)s₁² + (n₂-1)s₂²) / (n₁+n₂-2)]. 표본크기가 같으면 두 SD의 제곱평균 근의 제곱근이다.",
      "common_mistake": "합동표준편차는 두 표준편차의 단순 평균이 아니다. 자유도 가중평균이며, 등표본일 때만 단순 평균과 근사한다."
    }
  },
  {
    "id": "TTEST_TV_019",
    "terminology": "t값 (t-value)",
    "terminology_ko": "t값",
    "terminology_en": "t-value",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "표본 데이터로부터 계산된 t검정의 검정통계량으로, 평균 차이를 표준오차로 나누어 표준화한 비율이다.",
    "definition_en": "The test statistic calculated from sample data in a t-test, a ratio of the mean difference divided by its standard error.",
    "significance": "t값의 크기와 부호가 효과의 방향과 강도를 반영하며, 임계 t값 또는 p값과 비교하여 통계적 유의성을 판단한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "t통계량과 그 표집분포를 최초로 도출하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정통계량",
        "name_en": "Test Statistic",
        "id": "HYPO_TS_008"
      },
      {
        "name_ko": "임계 t값",
        "name_en": "Critical t-value",
        "id": "TTEST_CT_020"
      },
      {
        "name_ko": "t분포",
        "name_en": "t-distribution",
        "id": "TTEST_TD_009"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "t = 신호/잡음 = (관찰된 차이) / (우연에 의한 변동) → 비율이 클수록 유의",
      "differential": "t값은 표본크기에 영향을 받지만, 효과크기(d)는 표본크기에 독립적이다. 같은 d라도 n이 크면 t가 커진다.",
      "key_point": "t = (X̄ - μ₀) / SE (일표본), t = (X̄₁ - X̄₂) / SE (독립표본), t = D̄ / SE_D (대응표본).",
      "common_mistake": "t값의 부호는 평균의 대소 관계에 따라 달라지므로, 양측검정에서는 절대값으로 비교한다."
    }
  },
  {
    "id": "TTEST_CT_020",
    "terminology": "임계 t값 (Critical t-value)",
    "terminology_ko": "임계 t값",
    "terminology_en": "Critical t-value",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "주어진 유의수준(α)과 자유도(df)에서 t분포의 기각역 경계를 정의하는 값으로, t분포표에서 찾을 수 있다.",
    "definition_en": "The value from the t-distribution that defines the boundary of the rejection region for a given significance level (α) and degrees of freedom (df).",
    "significance": "전통적 가설검정에서 계산된 t값과 비교하여 기각 여부를 결정하는 기준점 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "t분포표를 최초로 작성하여 임계값 참조를 가능하게 하였다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "다양한 자유도와 유의수준에 대한 상세한 t분포표를 출판하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "t값",
        "name_en": "t-value",
        "id": "TTEST_TV_019"
      },
      {
        "name_ko": "임계값",
        "name_en": "Critical Value",
        "id": "HYPO_CV_009"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "기각역",
        "name_en": "Rejection Region",
        "id": "HYPO_RR_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "임계 t = t분포표에서 찾는 기준값 → |관찰된 t| > 임계 t이면 기각",
      "differential": "임계 t값은 α와 df로 사전에 결정되고, 관찰된 t값은 데이터에서 계산된다.",
      "key_point": "양측검정(α = .05, df = 20)의 임계 t값은 ±2.086이다. 자유도가 클수록 1.96(z)에 가까워진다.",
      "common_mistake": "현대 통계 소프트웨어는 정확한 p값을 제공하므로 임계값 비교보다 p값 보고가 선호되지만, 원리 이해에는 필수이다."
    }
  },
  {
    "id": "TTEST_OT_021",
    "terminology": "단측 t검정 (One-tailed t-test)",
    "terminology_ko": "단측 t검정",
    "terminology_en": "One-tailed t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "대립가설이 특정 방향(크거나 작은)의 평균 차이만을 예측하는 t검정으로, t분포의 한쪽 꼬리에만 기각역을 설정한다.",
    "definition_en": "A t-test in which the alternative hypothesis predicts a specific direction of the mean difference, placing the rejection region in only one tail of the t-distribution.",
    "significance": "이론적으로 강한 방향성 예측이 있을 때 사용하며, 양측 검정보다 더 높은 검정력을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "방향적 검정의 적절한 사용 조건에 대해 논의하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양측 t검정",
        "name_en": "Two-tailed t-test",
        "id": "TTEST_TT_022"
      },
      {
        "name_ko": "단측검정",
        "name_en": "One-tailed Test",
        "id": "HYPO_OT_010"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단측 t = 한쪽만 → H₁: μ₁ > μ₂ 또는 H₁: μ₁ < μ₂",
      "differential": "단측 t검정의 임계값은 양측보다 작으므로(예: α=.05, df=20 → 단측 1.725 vs 양측 2.086), 기각이 더 쉽다.",
      "key_point": "효과가 예측한 반대 방향으로 나타나면, 아무리 큰 t값이라도 유의하다고 결론내릴 수 없다.",
      "common_mistake": "양측 검정에서 유의하지 않은 결과를 단측으로 바꾸어 유의하게 만드는 것은 연구 부정행위이다."
    }
  },
  {
    "id": "TTEST_TT_022",
    "terminology": "양측 t검정 (Two-tailed t-test)",
    "terminology_ko": "양측 t검정",
    "terminology_en": "Two-tailed t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "대립가설이 평균 차이의 방향을 특정하지 않는 t검정으로, t분포의 양쪽 꼬리에 기각역을 설정한다.",
    "definition_en": "A t-test in which the alternative hypothesis does not specify the direction of the mean difference, placing rejection regions in both tails of the t-distribution.",
    "significance": "효과 방향에 대한 확실한 예측이 없을 때 기본적으로 사용하며, 양방향 효과를 모두 탐지할 수 있는 보수적 접근이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "t검정의 원래 공식에서 양방향 차이를 고려하는 틀을 제공하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단측 t검정",
        "name_en": "One-tailed t-test",
        "id": "TTEST_OT_021"
      },
      {
        "name_ko": "양측검정",
        "name_en": "Two-tailed Test",
        "id": "HYPO_TT_011"
      },
      {
        "name_ko": "임계 t값",
        "name_en": "Critical t-value",
        "id": "TTEST_CT_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "양측 t = 양쪽 → H₁: μ₁ ≠ μ₂ → α를 양쪽에 절반씩 배분",
      "differential": "양측 t검정의 p값은 단측 p값의 2배이다. 양측 p = .048이면 단측 p = .024.",
      "key_point": "대부분의 심리학 연구에서 양측 t검정이 기본이며, 단측을 사용할 경우 사전 정당화가 필요하다.",
      "common_mistake": "SPSS는 기본적으로 양측 p값을 보고하므로, 단측 검정을 원할 경우 출력된 p값을 2로 나누어야 한다."
    }
  },
  {
    "id": "TTEST_NA_023",
    "terminology": "정규성 가정 (Normality Assumption)",
    "terminology_ko": "정규성 가정",
    "terminology_en": "Normality Assumption",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정이 타당하기 위해 모집단 분포(또는 표집분포)가 정규분포를 따라야 한다는 가정이다.",
    "definition_en": "The assumption that the population distribution (or the sampling distribution) follows a normal distribution, required for the validity of the t-test.",
    "significance": "소표본에서는 정규성 위반이 검정의 타당성에 큰 영향을 미치지만, 중심극한정리에 의해 대표본에서는 강건하다.",
    "key_researchers": [
      {
        "name_ko": "칼 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "정규분포(가우스 분포)의 수학적 특성을 정립하였다."
      },
      {
        "name_ko": "사무엘 샤피로",
        "name_en": "Samuel S. Shapiro",
        "contribution": "윌크와 함께 정규성 검정(Shapiro-Wilk test)을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "샤피로-윌크 검정",
        "name_en": "Shapiro-Wilk Test",
        "id": "TTEST_SW_024"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "중심극한정리",
        "name_en": "Central Limit Theorem",
        "id": "SAMPLE_CL_015"
      },
      {
        "name_ko": "비모수 대안",
        "name_en": "Nonparametric Alternatives",
        "id": "TTEST_NP_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정규성 = 데이터가 종형 곡선(bell curve)을 따라야 한다는 가정",
      "differential": "정규성 가정은 모집단 분포에 대한 것이지, 표본 데이터 자체가 완벽한 정규분포여야 한다는 것은 아니다.",
      "key_point": "표본크기가 30 이상이면 중심극한정리에 의해 정규성 위반의 영향이 크게 감소한다.",
      "common_mistake": "정규성 검정(Shapiro-Wilk 등)이 유의하다고 해서 반드시 비모수 검정으로 전환해야 하는 것은 아니며, 위반 정도와 표본크기를 종합적으로 고려한다."
    }
  },
  {
    "id": "TTEST_SW_024",
    "terminology": "샤피로-윌크 검정 (Shapiro-Wilk Test)",
    "terminology_ko": "샤피로-윌크 검정",
    "terminology_en": "Shapiro-Wilk Test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "표본 데이터가 정규분포를 따르는지를 검정하는 가장 검정력이 높은 정규성 검정 방법 중 하나이다.",
    "definition_en": "One of the most powerful tests for normality, assessing whether sample data follows a normal distribution.",
    "significance": "t검정이나 ANOVA의 정규성 가정을 검증하는 표준적 방법으로, 소표본(n < 50)에서 특히 권장된다.",
    "key_researchers": [
      {
        "name_ko": "사무엘 샤피로",
        "name_en": "Samuel S. Shapiro",
        "contribution": "윌크와 함께 1965년 W통계량 기반 정규성 검정을 개발하였다."
      },
      {
        "name_ko": "마틴 윌크",
        "name_en": "Martin B. Wilk",
        "contribution": "샤피로와 함께 정규성 검정의 수학적 기초를 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "비모수 대안",
        "name_en": "Nonparametric Alternatives",
        "id": "TTEST_NP_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "샤피로-윌크 = 정규성 검사의 '금본위' → W통계량이 1에 가까울수록 정규",
      "differential": "Shapiro-Wilk은 소표본에서 강력하고, Kolmogorov-Smirnov(K-S)는 대표본에서 사용되나 검정력이 상대적으로 낮다.",
      "key_point": "p > .05이면 정규성 가정이 유지되고, p < .05이면 정규성이 의심된다. 단, 대표본에서는 사소한 비정규성도 유의해질 수 있다.",
      "common_mistake": "Q-Q 도표(Q-Q plot) 등 시각적 방법과 함께 사용하는 것이 권장되며, 검정 결과만으로 판단하는 것은 부족하다."
    }
  },
  {
    "id": "TTEST_IA_025",
    "terminology": "독립성 가정 (Independence Assumption)",
    "terminology_ko": "독립성 가정",
    "terminology_en": "Independence Assumption",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "각 관측치가 다른 관측치에 영향을 미치지 않고 독립적으로 얻어졌다는 가정으로, 모든 t검정의 가장 기본적인 가정이다.",
    "definition_en": "The assumption that each observation is obtained independently of all other observations, the most fundamental assumption for all t-tests.",
    "significance": "독립성 위반은 다른 가정 위반보다 심각한 결과를 초래하며, 제1종 오류율의 심각한 왜곡을 유발할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "무선할당을 통해 독립성을 확보하는 실험 설계의 원리를 확립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본",
        "name_en": "Independent Samples",
        "id": "TTEST_IS_017"
      },
      {
        "name_ko": "무선할당",
        "name_en": "Random Assignment",
        "id": "DESIGN_RA_004"
      },
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립성 = 한 사람의 답이 다른 사람의 답에 영향 없음 → 집단 작업은 위반 가능",
      "differential": "독립성 가정은 t검정의 3대 가정(독립성, 정규성, 등분산) 중 가장 중요하며, 위반 시 가장 심각한 영향을 미친다.",
      "key_point": "연구 설계와 데이터 수집 과정에서 확보해야 하며, 통계적으로 사후 검정하기 어렵다.",
      "common_mistake": "학급 단위 연구에서 개인을 독립 관측치로 취급하면 독립성이 위반되어, 다층 모형(MLM)이 필요할 수 있다."
    }
  },
  {
    "id": "TTEST_NP_026",
    "terminology": "비모수 대안 (Nonparametric Alternatives)",
    "terminology_ko": "비모수 대안",
    "terminology_en": "Nonparametric Alternatives",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정의 모수적 가정(정규성 등)이 충족되지 않을 때 사용하는 분포 무관 검정 방법들의 총칭이다.",
    "definition_en": "Distribution-free test methods used when the parametric assumptions of t-tests (such as normality) are not met.",
    "significance": "순서형 자료, 극단적 비정규 분포, 소표본 등에서 모수 검정의 가정 위반 문제를 해결하는 대안적 접근이다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 윌콕슨",
        "name_en": "Frank Wilcoxon",
        "contribution": "부호순위 검정과 순위합 검정을 개발하여 비모수 검정의 기초를 마련하였다."
      },
      {
        "name_ko": "헨리 맨",
        "name_en": "Henry B. Mann",
        "contribution": "휘트니와 함께 독립 두 집단 비교를 위한 U검정을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "TTEST_WS_027"
      },
      {
        "name_ko": "맨-휘트니 U 검정",
        "name_en": "Mann-Whitney U Test",
        "id": "TTEST_MW_028"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      }
    ],
    "sub_types": [
      {
        "name": "윌콕슨 부호순위 검정",
        "description": "대응표본 t검정의 비모수 대안"
      },
      {
        "name": "맨-휘트니 U 검정",
        "description": "독립표본 t검정의 비모수 대안"
      },
      {
        "name": "윌콕슨 순위합 검정",
        "description": "맨-휘트니 U와 동등한 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비모수 = 모수(parameter) 가정 없이 → 순위(rank)로 변환하여 검정",
      "differential": "모수 검정(t검정)은 평균을 비교하고, 비모수 검정은 중앙값이나 순위를 비교한다.",
      "key_point": "비모수 검정은 가정이 적지만, 모수 검정보다 검정력이 낮아 실제 효과를 놓칠 가능성이 더 크다.",
      "common_mistake": "정규성이 약간 위반되었다고 무조건 비모수를 사용하는 것보다, 표본크기와 위반 정도를 고려하여 판단하는 것이 바람직하다."
    }
  },
  {
    "id": "TTEST_WS_027",
    "terminology": "윌콕슨 부호순위 검정 (Wilcoxon Signed-Rank Test)",
    "terminology_ko": "윌콕슨 부호순위 검정",
    "terminology_en": "Wilcoxon Signed-Rank Test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "대응표본 t검정의 비모수 대안으로, 차이의 부호와 순위를 모두 고려하여 두 관련 조건의 차이를 검정한다.",
    "definition_en": "A nonparametric alternative to the paired-samples t-test that considers both the sign and rank of differences to test for differences between two related conditions.",
    "significance": "대응표본의 차이점수가 정규분포를 따르지 않을 때, 순위 정보를 활용하여 신뢰할 수 있는 검정 결과를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 윌콕슨",
        "name_en": "Frank Wilcoxon",
        "contribution": "1945년 부호순위 검정을 개발하여 비모수 통계학의 기초를 세웠다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired-samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "비모수 대안",
        "name_en": "Nonparametric Alternatives",
        "id": "TTEST_NP_026"
      },
      {
        "name_ko": "맨-휘트니 U 검정",
        "name_en": "Mann-Whitney U Test",
        "id": "TTEST_MW_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "윌콕슨 부호순위 = 대응 t의 비모수 → 차이점수의 '부호(+/-)' + '순위(크기)'",
      "differential": "부호 검정(sign test)은 차이의 방향만 고려하지만, 부호순위 검정은 차이의 크기(순위)도 고려하여 검정력이 더 높다.",
      "key_point": "차이가 0인 쌍은 제외하고, 나머지 차이의 절대값에 순위를 매긴 후 양/음 순위합을 비교한다.",
      "common_mistake": "윌콕슨 부호순위 검정(대응)과 윌콕슨 순위합 검정(독립)을 혼동하지 말아야 한다. 이름이 같은 사람이 만든 서로 다른 검정이다."
    }
  },
  {
    "id": "TTEST_MW_028",
    "terminology": "맨-휘트니 U 검정 (Mann-Whitney U Test)",
    "terminology_ko": "맨-휘트니 U 검정",
    "terminology_en": "Mann-Whitney U Test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "독립표본 t검정의 비모수 대안으로, 두 독립 집단의 순위 분포를 비교하여 집단 간 차이를 검정한다.",
    "definition_en": "A nonparametric alternative to the independent-samples t-test that compares the rank distributions of two independent groups to test for group differences.",
    "significance": "정규성 가정이 심하게 위반되거나 순서형 자료를 분석할 때, 독립표본 t검정 대신 사용하는 대표적인 비모수 검정이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 맨",
        "name_en": "Henry B. Mann",
        "contribution": "휘트니와 함께 1947년 U통계량 기반 독립 두 집단 비교 검정을 개발하였다."
      },
      {
        "name_ko": "도널드 휘트니",
        "name_en": "Donald R. Whitney",
        "contribution": "맨과 함께 U검정의 수학적 특성과 분포를 정립하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent-samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "비모수 대안",
        "name_en": "Nonparametric Alternatives",
        "id": "TTEST_NP_026"
      },
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "TTEST_WS_027"
      },
      {
        "name_ko": "맨-휘트니 U",
        "name_en": "Mann-Whitney U",
        "id": "NONPARA_MWU_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "맨-휘트니 = 독립 t의 비모수 → 두 집단 데이터를 합쳐서 순위 매기고 순위합 비교",
      "differential": "맨-휘트니 U는 독립 두 집단 비교이고, 윌콕슨 부호순위는 대응(짝진) 두 조건 비교이다.",
      "key_point": "U통계량은 한 집단의 각 관측치가 다른 집단의 관측치보다 큰 횟수의 합이다.",
      "common_mistake": "맨-휘트니 검정은 '중앙값의 차이'를 검정하는 것이 아니라, '두 분포의 위치(stochastic dominance)'를 비교하는 것이다."
    }
  },
  {
    "id": "TTEST_SD_029",
    "terminology": "표본크기 결정 (Sample Size Determination)",
    "terminology_ko": "표본크기 결정",
    "terminology_en": "Sample Size Determination",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정에서 원하는 검정력을 달성하기 위해 필요한 최소 표본크기를 사전에 계산하는 절차이다.",
    "definition_en": "A procedure for calculating the minimum sample size needed in advance to achieve a desired level of statistical power in a t-test.",
    "significance": "과소 표본은 검정력 부족으로 실제 효과를 놓치고, 과대 표본은 자원 낭비이므로 적절한 표본크기 계획이 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "검정 유형별 필요 표본크기 산출표를 제시하였다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어를 개발하여 t검정의 표본크기 계산을 실용화하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정력 분석",
        "name_en": "Power Analysis",
        "id": "HYPO_PA_034"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "HYPO_ES_016"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "n 결정 = α + 검정력 + 효과크기 → 3개를 알면 필요 n을 계산 (G*Power 활용)",
      "differential": "사전(a priori) 표본크기 결정은 연구 설계 시 수행하며, 사후(post hoc) 검정력 분석과 목적이 다르다.",
      "key_point": "독립표본 t검정(α=.05, power=.80, d=0.5)에 필요한 집단당 n ≈ 64, 총 N ≈ 128이다.",
      "common_mistake": "필요 표본크기는 검정 유형(독립/대응/일표본)에 따라 다르며, 대응표본 설계는 일반적으로 더 적은 표본이 필요하다."
    }
  },
  {
    "id": "TTEST_PA_030",
    "terminology": "t검정의 검정력 분석 (Power Analysis for t-tests)",
    "terminology_ko": "t검정의 검정력 분석",
    "terminology_en": "Power Analysis for t-tests",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정에서 주어진 유의수준, 효과크기, 표본크기의 조건에서 실제 효과를 탐지할 확률을 산출하는 분석이다.",
    "definition_en": "An analysis that calculates the probability of detecting a real effect in a t-test given specific conditions of significance level, effect size, and sample size.",
    "significance": "연구 계획서 작성과 연구비 신청에 필수적인 절차로, 연구의 과학적 타당성을 사전에 보증하는 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "t검정별 검정력 함수와 표본크기 산출 방법을 체계적으로 정리하였다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power에서 다양한 t검정의 검정력 분석을 구현하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정력 분석",
        "name_en": "Power Analysis",
        "id": "HYPO_PA_034"
      },
      {
        "name_ko": "표본크기 결정",
        "name_en": "Sample Size Determination",
        "id": "TTEST_SD_029"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "TTEST_CD_006"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      }
    ],
    "sub_types": [
      {
        "name": "사전(a priori) 검정력 분석",
        "description": "필요 표본크기 산출 (가장 권장)"
      },
      {
        "name": "사후(post hoc) 검정력 분석",
        "description": "달성된 검정력 계산 (비판 있음)"
      },
      {
        "name": "타협(compromise) 검정력 분석",
        "description": "주어진 n에서 α와 β의 최적 비율 결정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "t검정 검정력 = G*Power에서 → Test family: t-tests → 검정 유형 선택 → 4개 매개변수 입력",
      "differential": "독립표본 t검정은 2개 집단의 n이 필요하고, 대응표본은 1개 집단(쌍의 수)의 n만 필요하다.",
      "key_point": "G*Power에서 Independent means, Paired means, One-sample mean 등 검정 유형을 정확히 선택해야 한다.",
      "common_mistake": "파일럿 연구의 효과크기를 사용한 검정력 분석은 추정이 불안정하므로, 관련 문헌의 효과크기를 참고하는 것이 더 신뢰할 수 있다."
    }
  },
  {
    "id": "TTEST_AS_031",
    "terminology": "t검정의 가정 (Assumptions of t-tests)",
    "terminology_ko": "t검정의 가정",
    "terminology_en": "Assumptions of t-tests",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "t검정이 타당한 결론을 제공하기 위해 충족해야 하는 전제 조건들로, 독립성, 정규성, 등분산성의 세 가지가 핵심이다.",
    "definition_en": "The prerequisites that must be met for t-tests to provide valid conclusions, with independence, normality, and homogeneity of variance being the three key assumptions.",
    "significance": "가정 위반의 정도와 유형에 따라 결과의 신뢰도가 달라지므로, 분석 전 가정 검증은 필수적인 예비 절차이다.",
    "key_researchers": [
      {
        "name_ko": "조지 박스",
        "name_en": "George E. P. Box",
        "contribution": "'모든 모형은 틀리지만, 어떤 모형은 유용하다'는 명언으로 가정의 현실적 역할을 강조하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립성 가정",
        "name_en": "Independence Assumption",
        "id": "TTEST_IA_025"
      },
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      },
      {
        "name_ko": "비모수 대안",
        "name_en": "Nonparametric Alternatives",
        "id": "TTEST_NP_026"
      }
    ],
    "sub_types": [
      {
        "name": "독립성",
        "description": "관측치가 서로 독립적으로 수집됨 (가장 중요, 위반에 취약)"
      },
      {
        "name": "정규성",
        "description": "모집단이 정규분포를 따름 (대표본에서 강건)"
      },
      {
        "name": "등분산성",
        "description": "두 집단의 모분산이 동일함 (독립표본에만 해당)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "t검정 3대 가정 = INH: Independence(독립성), Normality(정규성), Homogeneity(등분산)",
      "differential": "독립성 위반은 가장 심각하고 교정이 어렵지만, 정규성과 등분산 위반은 표본이 크면 영향이 감소한다.",
      "key_point": "가정 확인 순서: ① 독립성(연구 설계 확인) → ② 정규성(Shapiro-Wilk, Q-Q plot) → ③ 등분산(Levene 검정).",
      "common_mistake": "가정을 전혀 확인하지 않거나, 반대로 가정이 '완벽하게' 충족되어야만 t검정을 사용할 수 있다고 생각하는 것 모두 문제이다."
    }
  },
  {
    "id": "TTEST_RP_032",
    "terminology": "t검정 결과 보고 (Reporting t-test Results)",
    "terminology_ko": "t검정 결과 보고",
    "terminology_en": "Reporting t-test Results",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "APA 양식에 따른 t검정 결과의 표준적 보고 형식으로, t값, 자유도, p값, 효과크기, 신뢰구간을 포함한다.",
    "definition_en": "The standardized format for reporting t-test results according to APA style, including the t-value, degrees of freedom, p-value, effect size, and confidence interval.",
    "significance": "연구 결과의 재현 가능성과 투명성을 보장하며, 독자가 결과를 정확히 이해하고 메타분석에 활용할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "APA Publication Manual을 통해 통계 결과 보고의 표준화된 양식을 제정하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "t값",
        "name_en": "t-value",
        "id": "TTEST_TV_019"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "TTEST_CD_006"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "HYPO_CI_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "APA 보고 형식: t(df) = 값, p = 값, d = 값, 95% CI [하한, 상한]",
      "differential": "t(자유도)에서 괄호 안은 자유도이고, F(df₁, df₂)에서 괄호 안은 분자·분모 자유도이다.",
      "key_point": "예시: t(38) = 2.45, p = .019, d = 0.77, 95% CI [0.52, 5.48]. 이탤릭체로 t, p, d를 표기한다.",
      "common_mistake": "효과크기(d)와 신뢰구간 없이 t값과 p값만 보고하는 것은 현재 APA 기준에 부합하지 않는다."
    }
  },
  {
    "id": "TTEST_ZT_033",
    "terminology": "z검정과 t검정의 비교 (z-test vs t-test)",
    "terminology_ko": "z검정과 t검정의 비교",
    "terminology_en": "z-test vs t-test",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "모분산이 알려진 경우 z검정을, 모분산이 미지여서 표본분산으로 추정해야 하는 경우 t검정을 사용하는 선택 기준이다.",
    "definition_en": "The criterion for choosing between z-tests (when population variance is known) and t-tests (when population variance is unknown and must be estimated from sample variance).",
    "significance": "실제 연구에서 모분산이 알려진 경우는 거의 없으므로 t검정이 표준이며, z검정은 주로 통계 원리 교육에서 다루어진다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "모분산이 미지일 때 z검정의 한계를 인식하고 t검정을 개발하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "t분포",
        "name_en": "t-distribution",
        "id": "TTEST_TD_009"
      },
      {
        "name_ko": "표준정규분포",
        "name_en": "Standard Normal Distribution",
        "id": "PROB_SND_002"
      },
      {
        "name_ko": "z점수",
        "name_en": "z-score",
        "id": "DESCRIP_ZS_010"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "σ 알면 → z, σ 모르면(s 사용) → t. 실전에서는 거의 항상 t!",
      "differential": "z검정은 표준정규분포(N(0,1))를, t검정은 t분포(df에 따라 변함)를 참조 분포로 사용한다.",
      "key_point": "표본이 커지면(n > 30) t분포가 z분포에 수렴하므로, 두 검정의 결과가 거의 동일해진다.",
      "common_mistake": "대표본이라도 모분산이 미지이면 원칙적으로 t검정을 사용하는 것이 정확하다."
    }
  },
  {
    "id": "TTEST_DS_034",
    "terminology": "차이점수 (Difference Score)",
    "terminology_ko": "차이점수",
    "terminology_en": "Difference Score",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "대응표본에서 각 쌍의 두 측정값 간 차이(D = X₂ - X₁)를 계산한 값으로, 대응표본 t검정의 분석 단위이다.",
    "definition_en": "The calculated difference between two measurements for each pair in a paired sample (D = X₂ - X₁), serving as the unit of analysis in paired-samples t-tests.",
    "significance": "개인 간 변동을 제거하고 조건 간 변화만을 분리하여, 더 민감한 검정을 가능하게 하는 핵심 변환이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William S. Gosset",
        "contribution": "차이점수를 이용한 짝진 비교의 효율성을 최초로 인식하고 적용하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired-samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "대응표본",
        "name_en": "Paired Samples",
        "id": "TTEST_PS_016"
      },
      {
        "name_ko": "평균차이",
        "name_en": "Mean Difference",
        "id": "TTEST_MD_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "D = 후(X₂) - 전(X₁) → 각 사람의 변화량 → D̄가 0과 다른지 검정",
      "differential": "차이점수는 대응표본의 분석 단위이고, 원점수(raw scores)는 독립표본의 분석 단위이다.",
      "key_point": "대응표본 t검정 = 차이점수(D)에 대한 일표본 t검정 → t = D̄ / (sD/√n).",
      "common_mistake": "차이점수의 분산(sD²)은 두 측정치의 분산과 상관에 의해 결정된다. 상관이 높을수록 sD가 작아져 검정력이 증가한다."
    }
  },
  {
    "id": "TTEST_RB_035",
    "terminology": "강건성 (Robustness)",
    "terminology_ko": "강건성",
    "terminology_en": "Robustness",
    "category": "TTEST",
    "category_name": "t검정 (t-Tests)",
    "definition": "통계적 검정이 기본 가정의 위반에도 불구하고 정확한 제1종 오류율과 검정력을 유지하는 정도를 나타내는 특성이다.",
    "definition_en": "The property of a statistical test to maintain accurate Type I error rates and power despite violations of its underlying assumptions.",
    "significance": "t검정은 정규성과 등분산 가정 위반에 비교적 강건한 것으로 알려져 있어, 현실적으로 완벽한 가정 충족이 어려운 상황에서도 신뢰할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "조지 박스",
        "name_en": "George E. P. Box",
        "contribution": "통계적 검정의 강건성 개념을 체계화하고, t검정과 F검정의 강건성을 연구하였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "t검정의 가정",
        "name_en": "Assumptions of t-tests",
        "id": "TTEST_AS_031"
      },
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "TTEST_NA_023"
      },
      {
        "name_ko": "등분산 가정",
        "name_en": "Homogeneity of Variance",
        "id": "TTEST_HV_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "강건 = robust = 가정이 깨져도 잘 버팀 → t검정은 비교적 '튼튼한' 검정",
      "differential": "t검정은 정규성 위반에 강건하지만, 독립성 위반에는 강건하지 않다. 독립성은 가장 취약한 가정이다.",
      "key_point": "등표본크기일 때 가장 강건하며, 불균등 표본크기 + 이분산 조합이 가장 문제가 된다.",
      "common_mistake": "'강건하다'는 것이 가정을 확인할 필요가 없다는 의미는 아니다. 가정 확인은 항상 필수적이다."
    }
  }
];

TERMS_DATA.ANOVA = [
  {
    "id": "ANOVA_OW_001",
    "terminology": "일원분산분석 (One-Way ANOVA)",
    "terminology_ko": "일원분산분석",
    "terminology_en": "One-Way ANOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "하나의 독립변인(요인)이 세 개 이상의 수준을 가질 때, 각 집단의 평균 차이가 통계적으로 유의한지 검정하는 분석 방법이다.",
    "definition_en": "A statistical method that tests whether the means of three or more groups defined by a single independent variable differ significantly from each other.",
    "significance": "세 집단 이상의 평균 비교에서 다중 t검정의 제1종 오류 증가 문제를 해결하며, 심리학 실험에서 처치 효과를 검증하는 가장 기본적인 방법이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산분석 기법을 개발하고 F분포를 도입하여 농업 실험 자료의 분석 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-Way ANOVA",
        "id": "ANOVA_TW_002"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [
      {
        "name": "독립표본 일원분산분석 (Between-Subjects One-Way ANOVA)",
        "description": "서로 다른 참가자가 각 집단에 배정되는 설계"
      },
      {
        "name": "반복측정 일원분산분석 (Repeated Measures One-Way ANOVA)",
        "description": "동일한 참가자가 모든 조건에 참여하는 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "One-Way = 요인 1개, 수준 3개 이상",
      "differential": "독립표본 t검정은 2집단 비교이고, 일원분산분석은 3집단 이상 비교이다. 둘 다 하나의 독립변인을 다룬다.",
      "key_point": "집단 간 분산과 집단 내 분산의 비율(F비)을 통해 집단 평균 차이의 유의성을 판단한다.",
      "common_mistake": "F검정이 유의하면 모든 집단 간 차이가 유의하다고 해석하는 오류가 있다. 어떤 집단 간 차이인지는 사후검정이 필요하다."
    }
  },
  {
    "id": "ANOVA_TW_002",
    "terminology": "이원분산분석 (Two-Way ANOVA)",
    "terminology_ko": "이원분산분석",
    "terminology_en": "Two-Way ANOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "두 개의 독립변인(요인)이 종속변인에 미치는 주효과와 상호작용효과를 동시에 검정하는 분산분석 방법이다.",
    "definition_en": "An ANOVA method that simultaneously tests the main effects of two independent variables and their interaction effect on a dependent variable.",
    "significance": "심리학 연구에서 두 변인의 독립적 효과뿐 아니라 결합 효과를 밝힐 수 있어, 복합적 현상의 이해에 핵심적인 분석 도구이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "요인설계와 분산분석을 결합하여 다요인 실험의 분석 체계를 정립했다."
      },
      {
        "name_ko": "프랭크 예이츠",
        "name_en": "Frank Yates",
        "contribution": "Fisher와 협력하여 요인설계의 분석 방법을 발전시키고 불균형 설계의 분석법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "ANOVA_IE_010"
      },
      {
        "name_ko": "주효과",
        "name_en": "Main Effect",
        "id": "ANOVA_ME_011"
      },
      {
        "name_ko": "요인설계",
        "name_en": "Factorial Design",
        "id": "DESIGN_FD_010"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [
      {
        "name": "2×2 설계",
        "description": "두 요인이 각각 2수준을 갖는 가장 단순한 이원설계"
      },
      {
        "name": "2×3 설계",
        "description": "한 요인이 2수준, 다른 요인이 3수준인 설계"
      },
      {
        "name": "불균형 이원분산분석 (Unbalanced Two-Way ANOVA)",
        "description": "각 셀의 사례 수가 다른 설계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Two-Way = 요인 2개 → 주효과 2개 + 상호작용 1개 = 총 3개의 F검정",
      "differential": "일원분산분석은 요인 1개만 다루지만, 이원분산분석은 요인 2개와 그 상호작용까지 분석한다.",
      "key_point": "주효과가 유의해도 상호작용이 유의하면 주효과의 해석이 달라질 수 있으므로, 상호작용을 먼저 확인해야 한다.",
      "common_mistake": "상호작용이 유의할 때 주효과만 해석하는 오류가 빈번하다. 상호작용이 있으면 단순주효과 분석이 필요하다."
    }
  },
  {
    "id": "ANOVA_RM_003",
    "terminology": "반복측정 분산분석 (Repeated Measures ANOVA)",
    "terminology_ko": "반복측정 분산분석",
    "terminology_en": "Repeated Measures ANOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "동일한 참가자가 모든 처치 조건에 반복적으로 참여하는 피험자내 설계에서 조건 간 평균 차이를 검정하는 분산분석 방법이다.",
    "definition_en": "An ANOVA method that tests mean differences across conditions in a within-subjects design where the same participants are measured under all treatment conditions.",
    "significance": "개인차 변동을 통제하여 오차 분산을 줄일 수 있어 검정력이 높으며, 종단 연구나 시계열 비교에 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산분석의 기본 틀을 제공하여 반복측정 설계의 분석 기초를 마련했다."
      },
      {
        "name_ko": "사뮤엘 그린하우스",
        "name_en": "Samuel W. Greenhouse",
        "contribution": "구형성 가정 위반 시 자유도를 교정하는 Greenhouse-Geisser 교정법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구형성 가정",
        "name_en": "Sphericity Assumption",
        "id": "ANOVA_SP_028"
      },
      {
        "name_ko": "피험자내 설계",
        "name_en": "Within-Subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "그린하우스-가이서 교정",
        "name_en": "Greenhouse-Geisser Correction",
        "id": "ANOVA_GG_030"
      },
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Repeated = 같은 사람이 반복 측정 → 개인차 통제 → 오차 감소",
      "differential": "독립표본 분산분석은 서로 다른 참가자를 비교하지만, 반복측정은 동일 참가자의 여러 조건을 비교한다.",
      "key_point": "구형성 가정이 충족되어야 하며, 위반 시 Greenhouse-Geisser 또는 Huynh-Feldt 교정을 적용해야 한다.",
      "common_mistake": "반복측정에서 연습효과나 이월효과를 통제하지 않으면 결과가 왜곡될 수 있다는 점을 간과하기 쉽다."
    }
  },
  {
    "id": "ANOVA_FR_004",
    "terminology": "F비 (F-ratio)",
    "terminology_ko": "F비",
    "terminology_en": "F-ratio",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "처치 간 분산(집단 간 평균제곱)을 오차 분산(집단 내 평균제곱)으로 나눈 비율로, 집단 간 차이의 통계적 유의성을 판단하는 검정통계량이다.",
    "definition_en": "The ratio of between-group mean square to within-group mean square, serving as the test statistic for determining the statistical significance of group differences.",
    "significance": "분산분석의 핵심 통계량으로, 처치 효과가 우연에 의한 변동보다 큰지를 정량적으로 평가하는 기준이 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "F분포를 이론적으로 도출하고, 분산의 비를 통한 가설검정 체계를 확립했다."
      },
      {
        "name_ko": "조지 스네데커",
        "name_en": "George W. Snedecor",
        "contribution": "Fisher를 기리기 위해 F분포라 명명하고, 분산분석의 실용적 적용 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균제곱",
        "name_en": "Mean Square",
        "id": "ANOVA_MS_006"
      },
      {
        "name_ko": "처치간 분산",
        "name_en": "Between-Treatments Variance",
        "id": "ANOVA_BT_012"
      },
      {
        "name_ko": "처치내 분산",
        "name_en": "Within-Treatments Variance",
        "id": "ANOVA_WT_013"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "F = MS_between / MS_within, 분자가 크면 F가 커지고 유의해진다",
      "differential": "t값은 두 집단의 평균 차이를 표준오차로 나눈 것이고, F비는 분산의 비율이다. t² = F (2집단일 때).",
      "key_point": "F비가 1에 가까우면 처치 효과가 없고, 1보다 클수록 집단 간 차이가 오차 이상임을 시사한다.",
      "common_mistake": "F비는 항상 양수이므로 방향성을 나타내지 않는다. 어떤 집단이 더 높은지는 F비만으로 알 수 없다."
    }
  },
  {
    "id": "ANOVA_SS_005",
    "terminology": "제곱합 (Sum of Squares)",
    "terminology_ko": "제곱합",
    "terminology_en": "Sum of Squares",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "각 관측값과 평균 간 편차를 제곱하여 합산한 값으로, 분산분석에서 변동의 크기를 측정하는 기본 단위이다.",
    "definition_en": "The sum of squared deviations of each observation from the mean, serving as the fundamental measure of variability in analysis of variance.",
    "significance": "총변동을 집단 간 변동과 집단 내 변동으로 분해하는 분산분석의 핵심 원리를 구현하며, 효과 크기 계산의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "제곱합의 분해(SS_total = SS_between + SS_within)를 분산분석의 기본 원리로 확립했다."
      },
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "최소제곱법의 발전에 기여하여 제곱합 개념의 통계적 활용을 확대했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "평균제곱",
        "name_en": "Mean Square",
        "id": "ANOVA_MS_006"
      },
      {
        "name_ko": "총분산",
        "name_en": "Total Variance",
        "id": "ANOVA_TV_014"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "ANOVA_DF_032"
      }
    ],
    "sub_types": [
      {
        "name": "집단간 제곱합 (SS_between)",
        "description": "각 집단 평균과 전체 평균 간 편차의 제곱합"
      },
      {
        "name": "집단내 제곱합 (SS_within)",
        "description": "각 관측값과 자기 집단 평균 간 편차의 제곱합"
      },
      {
        "name": "총제곱합 (SS_total)",
        "description": "모든 관측값과 전체 평균 간 편차의 제곱합"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SS_total = SS_between + SS_within → 총변동 = 집단간 + 집단내",
      "differential": "제곱합(SS)은 자유도로 나누기 전의 값이고, 평균제곱(MS)은 SS를 자유도로 나눈 값이다.",
      "key_point": "SS_between이 SS_total에서 차지하는 비율이 클수록 독립변인의 설명력이 높다.",
      "common_mistake": "제곱합 자체는 표본 크기에 의존하므로, 효과 크기를 비교하려면 에타제곱 등으로 변환해야 한다."
    }
  },
  {
    "id": "ANOVA_MS_006",
    "terminology": "평균제곱 (Mean Square)",
    "terminology_ko": "평균제곱",
    "terminology_en": "Mean Square",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "제곱합을 해당 자유도로 나눈 값으로, 분산의 추정치이며 F비를 계산하는 데 직접 사용되는 통계량이다.",
    "definition_en": "The sum of squares divided by the corresponding degrees of freedom, serving as a variance estimate and used directly in computing the F-ratio.",
    "significance": "표본 크기의 영향을 보정한 분산 추정치를 제공하여, 집단 간 변동과 집단 내 변동을 공정하게 비교할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "평균제곱을 분산의 불편 추정치로 사용하는 방법을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "ANOVA_SS_005"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "ANOVA_DF_032"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      }
    ],
    "sub_types": [
      {
        "name": "집단간 평균제곱 (MS_between)",
        "description": "SS_between을 집단 간 자유도(k-1)로 나눈 값"
      },
      {
        "name": "집단내 평균제곱 (MS_within)",
        "description": "SS_within을 집단 내 자유도(N-k)로 나눈 값"
      }
    ],
    "quiz_hints": {
      "mnemonic": "MS = SS / df → 제곱합을 자유도로 나눈 것이 평균제곱",
      "differential": "제곱합(SS)은 변동의 총량이고, 평균제곱(MS)은 자유도당 변동량(분산 추정치)이다.",
      "key_point": "F비 = MS_between / MS_within이므로, MS_between이 MS_within보다 클수록 F비가 커진다.",
      "common_mistake": "평균제곱을 산술평균과 혼동하는 경우가 있다. MS는 분산의 추정치이지 평균값이 아니다."
    }
  },
  {
    "id": "ANOVA_PH_007",
    "terminology": "사후검정 (Post Hoc Test)",
    "terminology_ko": "사후검정",
    "terminology_en": "Post Hoc Test",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 전체 F검정이 유의한 후, 어떤 집단 쌍 간의 평균 차이가 유의한지를 구체적으로 밝히기 위해 실시하는 다중비교 절차이다.",
    "definition_en": "A multiple comparison procedure conducted after a significant omnibus F-test to identify which specific pairs of group means differ significantly.",
    "significance": "전체 F검정만으로는 어떤 집단 간에 차이가 있는지 알 수 없으므로, 구체적인 집단 간 비교를 통해 실질적인 연구 질문에 답할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "모든 쌍별 비교를 위한 HSD(Honestly Significant Difference) 검정법을 개발했다."
      },
      {
        "name_ko": "헨리 셰페",
        "name_en": "Henry Scheffé",
        "contribution": "가장 보수적인 사후비교 방법인 Scheffé 검정을 개발하여 임의의 대비 검정을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투키 HSD",
        "name_en": "Tukey HSD",
        "id": "ANOVA_TK_008"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "ANOVA_BF_019"
      },
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "셰페 검정",
        "name_en": "Scheffé Test",
        "id": "ANOVA_SC_018"
      }
    ],
    "sub_types": [
      {
        "name": "쌍별 비교 (Pairwise Comparison)",
        "description": "모든 가능한 두 집단 조합을 비교하는 방법"
      },
      {
        "name": "대비 분석 (Contrast Analysis)",
        "description": "특정 집단 조합에 대한 가중치 기반 비교"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Post Hoc = 사후(事後), F검정 '후에' 실시하는 검정",
      "differential": "사전비교(계획비교)는 연구 전 특정 가설에 기반하고, 사후검정은 F검정 유의 후 탐색적으로 실시한다.",
      "key_point": "사후검정은 가족별 오류율(familywise error rate)을 통제하여 다중비교에서 제1종 오류 증가를 방지한다.",
      "common_mistake": "F검정이 유의하지 않은데 사후검정을 실시하거나, 사후검정 없이 집단 간 차이를 주장하는 오류가 흔하다."
    }
  },
  {
    "id": "ANOVA_TK_008",
    "terminology": "투키 HSD (Tukey's HSD)",
    "terminology_ko": "투키 HSD",
    "terminology_en": "Tukey's HSD",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "모든 가능한 쌍별 평균 비교를 실시하면서 가족별 오류율을 통제하는 사후검정 방법으로, 스튜던트화 범위 분포(q분포)를 사용한다.",
    "definition_en": "A post hoc test that performs all possible pairwise mean comparisons while controlling the familywise error rate, using the studentized range distribution (q-distribution).",
    "significance": "심리학 연구에서 가장 널리 사용되는 사후검정으로, 검정력과 제1종 오류 통제 간의 균형이 우수하다.",
    "key_researchers": [
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "HSD(Honestly Significant Difference) 검정을 개발하여 다중비교 문제의 표준적 해결책을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "ANOVA_BF_019"
      },
      {
        "name_ko": "셰페 검정",
        "name_en": "Scheffé Test",
        "id": "ANOVA_SC_018"
      },
      {
        "name_ko": "뉴먼-쿨스 검정",
        "name_en": "Newman-Keuls Test",
        "id": "ANOVA_NK_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HSD = Honestly Significant Difference, '진정으로 유의한 차이'",
      "differential": "Tukey는 모든 쌍별 비교에 적합하고, Scheffé는 복잡한 대비에 적합하며, Bonferroni는 비교 수가 적을 때 유리하다.",
      "key_point": "각 집단의 표본 크기가 같을 때 가장 적합하며, 불균등할 경우 Tukey-Kramer 변형을 사용한다.",
      "common_mistake": "Tukey HSD를 집단 크기가 매우 불균등한 설계에 그대로 적용하면 검정력이 저하될 수 있다."
    }
  },
  {
    "id": "ANOVA_ET_009",
    "terminology": "에타제곱 (Eta-squared)",
    "terminology_ko": "에타제곱",
    "terminology_en": "Eta-squared",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 독립변인이 종속변인의 총변동 중 설명하는 비율을 나타내는 효과 크기 지표로, SS_between을 SS_total로 나누어 산출한다.",
    "definition_en": "An effect size measure in ANOVA indicating the proportion of total variance in the dependent variable explained by the independent variable, calculated as SS_between divided by SS_total.",
    "significance": "통계적 유의성과 별개로 독립변인의 실질적 영향력을 평가할 수 있게 하여, 연구 결과의 실용적 중요성을 판단하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산의 분해 원리를 확립하여 에타제곱 개념의 기초를 마련했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과 크기의 해석 기준(.01=소, .06=중, .14=대)을 제안하여 에타제곱의 실용적 활용을 촉진했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부분 에타제곱",
        "name_en": "Partial Eta-squared",
        "id": "ANOVA_PE_022"
      },
      {
        "name_ko": "오메가제곱",
        "name_en": "Omega-squared",
        "id": "ANOVA_OM_023"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "η² = SS_between / SS_total → 전체 변동 중 처치가 설명하는 비율",
      "differential": "에타제곱은 표본에 기반한 편향 추정치이고, 오메가제곱은 편향을 교정한 모집단 추정치이다.",
      "key_point": "Cohen의 기준: η² = .01(소), .06(중), .14(대). 표본 크기가 클수록 과대추정 경향이 있다.",
      "common_mistake": "에타제곱이 결정계수(R²)와 동일하다고 단순화하는 경우가 있으나, 다요인 설계에서는 부분 에타제곱을 사용해야 한다."
    }
  },
  {
    "id": "ANOVA_IE_010",
    "terminology": "상호작용효과 (Interaction Effect)",
    "terminology_ko": "상호작용효과",
    "terminology_en": "Interaction Effect",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "한 독립변인의 효과가 다른 독립변인의 수준에 따라 달라지는 현상으로, 두 요인의 결합 효과가 각 주효과의 합과 다를 때 발생한다.",
    "definition_en": "A phenomenon where the effect of one independent variable differs depending on the level of another independent variable, occurring when the combined effect of two factors differs from the sum of their main effects.",
    "significance": "심리 현상의 복합성을 드러내며, 단순한 주효과 해석을 넘어 조건부 효과를 밝힘으로써 이론적 정교화에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "요인설계에서 상호작용 개념을 분산분석 틀 안에서 정의하고 검정 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주효과",
        "name_en": "Main Effect",
        "id": "ANOVA_ME_011"
      },
      {
        "name_ko": "단순주효과",
        "name_en": "Simple Main Effect",
        "id": "ANOVA_SM_034"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-Way ANOVA",
        "id": "ANOVA_TW_002"
      },
      {
        "name_ko": "조절효과",
        "name_en": "Moderation Effect",
        "id": "CORR_MO_026"
      }
    ],
    "sub_types": [
      {
        "name": "서수적 상호작용 (Ordinal Interaction)",
        "description": "두 조건의 선 그래프가 교차하지 않는 상호작용"
      },
      {
        "name": "비서수적 상호작용 (Disordinal Interaction)",
        "description": "두 조건의 선 그래프가 교차하는 상호작용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "그래프에서 선이 평행하지 않으면 상호작용 → 선이 교차하면 비서수적 상호작용",
      "differential": "주효과는 한 요인의 전반적 효과이고, 상호작용은 한 요인의 효과가 다른 요인의 수준에 따라 달라지는 것이다.",
      "key_point": "상호작용이 유의하면 주효과의 해석에 주의해야 하며, 단순주효과 분석을 통해 구체적 패턴을 확인해야 한다.",
      "common_mistake": "상호작용 그래프에서 선이 약간만 비평행해도 상호작용이 있다고 판단하는 오류가 있다. 통계적 유의성을 반드시 확인해야 한다."
    }
  },
  {
    "id": "ANOVA_ME_011",
    "terminology": "주효과 (Main Effect)",
    "terminology_ko": "주효과",
    "terminology_en": "Main Effect",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "다요인 분산분석에서 다른 요인의 수준을 무시하고(평균하여) 한 독립변인이 종속변인에 미치는 전반적인 효과를 말한다.",
    "definition_en": "In a factorial ANOVA, the overall effect of one independent variable on the dependent variable, averaged across the levels of the other factor(s).",
    "significance": "각 독립변인의 독립적 효과를 파악할 수 있게 하여, 다요인 실험에서 변인 간 효과를 체계적으로 분리하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "요인설계에서 주효과와 상호작용을 분리하는 분산분해 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "ANOVA_IE_010"
      },
      {
        "name_ko": "단순주효과",
        "name_en": "Simple Main Effect",
        "id": "ANOVA_SM_034"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-Way ANOVA",
        "id": "ANOVA_TW_002"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Main = 주(主), 다른 변인은 무시하고 해당 변인만의 '주된' 효과",
      "differential": "주효과는 다른 요인을 평균하여 얻은 전반적 효과이고, 단순주효과는 다른 요인의 특정 수준에서의 효과이다.",
      "key_point": "상호작용이 유의할 때 주효과만 해석하면 오도할 수 있으므로 항상 상호작용을 먼저 확인해야 한다.",
      "common_mistake": "주효과가 유의하면 모든 수준에서 그 효과가 동일하다고 가정하는 오류가 있다. 상호작용이 있으면 수준에 따라 달라진다."
    }
  },
  {
    "id": "ANOVA_BT_012",
    "terminology": "처치간 분산 (Between-Treatments Variance)",
    "terminology_ko": "처치간 분산",
    "terminology_en": "Between-Treatments Variance",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "서로 다른 처치 조건(집단)의 평균들이 전체 평균으로부터 얼마나 떨어져 있는지를 나타내는 변동으로, 처치 효과와 표집 오차를 모두 반영한다.",
    "definition_en": "The variability among the treatment condition means around the grand mean, reflecting both treatment effects and sampling error.",
    "significance": "독립변인의 효과를 반영하는 분산 성분으로, 처치내 분산과의 비교를 통해 처치 효과의 유무를 판단하는 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분산의 체계적 분해를 통해 처치간 분산과 오차 분산을 분리하는 방법을 고안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "처치내 분산",
        "name_en": "Within-Treatments Variance",
        "id": "ANOVA_WT_013"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "집단간 변동",
        "name_en": "Between-Group Variability",
        "id": "ANOVA_BG_015"
      },
      {
        "name_ko": "평균제곱",
        "name_en": "Mean Square",
        "id": "ANOVA_MS_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Between = 집단 '사이'의 차이 → 처치 효과 + 오차",
      "differential": "처치간 분산은 처치효과+오차를 포함하지만, 처치내 분산은 오차만 포함한다.",
      "key_point": "처치간 분산이 처치내 분산보다 충분히 크면 처치 효과가 있다고 판단한다(F비 > 1).",
      "common_mistake": "처치간 분산이 순수한 처치 효과만 반영한다고 오해하기 쉽다. 실제로는 오차도 포함되어 있다."
    }
  },
  {
    "id": "ANOVA_WT_013",
    "terminology": "처치내 분산 (Within-Treatments Variance)",
    "terminology_ko": "처치내 분산",
    "terminology_en": "Within-Treatments Variance",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "동일한 처치 조건 내에서 개인 간 점수 차이로 인한 변동으로, 처치 효과와 무관한 순수 오차 변동을 나타낸다.",
    "definition_en": "The variability among individual scores within the same treatment condition, representing pure error variance unrelated to treatment effects.",
    "significance": "F비의 분모로서 기준선 역할을 하며, 이 값이 작을수록 처치 효과를 탐지할 검정력이 높아진다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "오차 분산의 개념을 정의하고 이를 분산분석의 분모항으로 사용하는 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "처치간 분산",
        "name_en": "Between-Treatments Variance",
        "id": "ANOVA_BT_012"
      },
      {
        "name_ko": "오차항",
        "name_en": "Error Term",
        "id": "ANOVA_ER_017"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Within = 집단 '안'의 차이 → 개인차로 인한 순수 오차",
      "differential": "처치간 분산은 처치효과+오차이고, 처치내 분산은 오차만 포함한다. 이 차이가 F검정의 논리적 기초이다.",
      "key_point": "처치내 분산을 줄이는 방법(동질적 표본, 반복측정 설계)은 검정력을 높인다.",
      "common_mistake": "처치내 분산이 0에 가까우면 좋다고 생각하지만, 너무 작으면 일반화 가능성이 제한될 수 있다."
    }
  },
  {
    "id": "ANOVA_TV_014",
    "terminology": "총분산 (Total Variance)",
    "terminology_ko": "총분산",
    "terminology_en": "Total Variance",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "모든 관측값의 전체 평균으로부터의 변동을 합산한 것으로, 집단간 분산과 집단내 분산으로 분해되는 분산분석의 출발점이다.",
    "definition_en": "The total variability of all observations from the grand mean, which is partitioned into between-group and within-group components as the starting point of ANOVA.",
    "significance": "분산의 분해 원리(SS_total = SS_between + SS_within)를 통해 독립변인의 설명력을 정량화하는 기초를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "총분산을 체계적으로 분해하는 분산분석의 핵심 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "ANOVA_SS_005"
      },
      {
        "name_ko": "처치간 분산",
        "name_en": "Between-Treatments Variance",
        "id": "ANOVA_BT_012"
      },
      {
        "name_ko": "처치내 분산",
        "name_en": "Within-Treatments Variance",
        "id": "ANOVA_WT_013"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "ANOVA_ET_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Total = Between + Within → 전체 = 집단간 + 집단내",
      "differential": "총분산은 모든 변동의 합이고, 에타제곱은 총분산 대비 집단간 분산의 비율이다.",
      "key_point": "총분산의 분해는 분산분석의 핵심 원리이며, 이를 통해 독립변인이 설명하는 비율을 계산할 수 있다.",
      "common_mistake": "총분산이 집단간 분산과 집단내 분산의 곱이라고 오해하는 경우가 있다. 올바른 관계는 합(덧셈)이다."
    }
  },
  {
    "id": "ANOVA_BG_015",
    "terminology": "집단간 변동 (Between-Group Variability)",
    "terminology_ko": "집단간 변동",
    "terminology_en": "Between-Group Variability",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "각 집단의 평균이 전체 평균(총평균)으로부터 떨어진 정도를 나타내는 변동으로, 독립변인의 효과를 반영하는 분산 성분이다.",
    "definition_en": "The variability of each group mean from the grand mean, reflecting the variance component attributable to the effect of the independent variable.",
    "significance": "독립변인의 처치가 실제로 집단 간 차이를 만들었는지 판단하는 핵심 근거이며, F비의 분자를 구성한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "집단간 변동과 집단내 변동의 분리를 통한 가설검정 체계를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단내 변동",
        "name_en": "Within-Group Variability",
        "id": "ANOVA_WG_016"
      },
      {
        "name_ko": "처치간 분산",
        "name_en": "Between-Treatments Variance",
        "id": "ANOVA_BT_012"
      },
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "ANOVA_SS_005"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Between-Group = 집단 '사이'의 변동, 처치로 인한 체계적 차이를 반영",
      "differential": "집단간 변동은 처치 효과를 반영하는 체계적 분산이고, 집단내 변동은 개인차에 의한 비체계적 분산이다.",
      "key_point": "집단간 변동이 클수록 독립변인의 효과가 크다는 것을 시사하지만, 집단내 변동과의 비율로 판단해야 한다.",
      "common_mistake": "집단간 변동이 크다고 반드시 유의하다고 할 수 없다. 집단내 변동도 함께 커지면 F비가 작아질 수 있다."
    }
  },
  {
    "id": "ANOVA_WG_016",
    "terminology": "집단내 변동 (Within-Group Variability)",
    "terminology_ko": "집단내 변동",
    "terminology_en": "Within-Group Variability",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "동일 집단에 속한 개인들의 점수가 해당 집단 평균으로부터 벗어난 정도로, 처치와 무관한 개인차 및 측정 오차를 반영한다.",
    "definition_en": "The extent to which individual scores within the same group deviate from the group mean, reflecting individual differences and measurement error unrelated to treatment.",
    "significance": "오차 분산의 추정치를 제공하며, 이 값이 작을수록 처치 효과를 탐지하기 쉬워져 연구의 검정력이 높아진다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "오차 분산 개념을 분산분석 체계에 통합하여 확률적 추론의 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단간 변동",
        "name_en": "Between-Group Variability",
        "id": "ANOVA_BG_015"
      },
      {
        "name_ko": "오차항",
        "name_en": "Error Term",
        "id": "ANOVA_ER_017"
      },
      {
        "name_ko": "처치내 분산",
        "name_en": "Within-Treatments Variance",
        "id": "ANOVA_WT_013"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Within-Group = 같은 집단 '안'에서의 차이 → 개인차 + 측정오차",
      "differential": "집단내 변동은 개인차와 측정오차만 반영하지만, 집단간 변동은 처치효과도 포함한다.",
      "key_point": "실험 통제를 강화하거나 동질적 참가자를 선발하면 집단내 변동을 줄여 검정력을 높일 수 있다.",
      "common_mistake": "집단내 변동을 완전히 제거할 수 있다고 생각하지만, 개인차는 항상 존재하므로 0이 될 수 없다."
    }
  },
  {
    "id": "ANOVA_ER_017",
    "terminology": "오차항 (Error Term)",
    "terminology_ko": "오차항",
    "terminology_en": "Error Term",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 독립변인으로 설명되지 않는 잔차 변동으로, F비의 분모에 해당하며 처치 효과 판단의 기준선을 제공한다.",
    "definition_en": "The residual variability in ANOVA not explained by the independent variable, serving as the denominator of the F-ratio and providing the baseline for judging treatment effects.",
    "significance": "적절한 오차항의 선택은 분산분석의 정확성을 좌우하며, 설계 유형(독립/반복측정/혼합)에 따라 오차항이 달라진다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "적절한 오차항 선택의 원리를 분산분석 이론에 통합했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "처치내 분산",
        "name_en": "Within-Treatments Variance",
        "id": "ANOVA_WT_013"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "평균제곱",
        "name_en": "Mean Square",
        "id": "ANOVA_MS_006"
      },
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_SLR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "오차항 = F비의 분모 → 처치 효과를 판단하는 '기준선'",
      "differential": "독립 설계에서 오차항은 MS_within이지만, 반복측정 설계에서는 피험자×처치 상호작용이 오차항이 된다.",
      "key_point": "혼합설계에서 피험자간 효과와 피험자내 효과는 서로 다른 오차항을 사용한다.",
      "common_mistake": "모든 분산분석에서 MS_within을 오차항으로 사용한다고 가정하는 오류가 있다. 설계에 따라 오차항이 달라진다."
    }
  },
  {
    "id": "ANOVA_SC_018",
    "terminology": "셰페 검정 (Scheffé Test)",
    "terminology_ko": "셰페 검정",
    "terminology_en": "Scheffé Test",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "모든 가능한 선형 대비를 포함한 가장 보수적인 사후검정 방법으로, 제1종 오류를 엄격하게 통제하지만 검정력은 상대적으로 낮다.",
    "definition_en": "The most conservative post hoc method that controls for all possible linear contrasts, strictly controlling Type I error but with relatively lower statistical power.",
    "significance": "사전 계획 없이 다양한 복합 비교를 탐색할 때 안전한 방법이며, 집단 크기가 불균등한 경우에도 적용 가능하다.",
    "key_researchers": [
      {
        "name_ko": "헨리 셰페",
        "name_en": "Henry Scheffé",
        "contribution": "1953년에 임의의 선형 대비에 대한 동시 신뢰구간 방법을 개발하여 사후검정의 이론적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "투키 HSD",
        "name_en": "Tukey HSD",
        "id": "ANOVA_TK_008"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "ANOVA_BF_019"
      },
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Scheffé = 가장 '엄격한(Safe)' 사후검정 → 보수적",
      "differential": "Scheffé는 복합 대비에 적합하고 가장 보수적이며, Tukey는 쌍별 비교에 최적화되어 검정력이 더 높다.",
      "key_point": "쌍별 비교만 필요하면 Tukey가 더 검정력이 높으므로, Scheffé는 복합 대비가 필요할 때 선택한다.",
      "common_mistake": "Scheffé 검정이 항상 최선이라고 생각하지만, 쌍별 비교에서는 불필요하게 보수적이어서 유의한 차이를 놓칠 수 있다."
    }
  },
  {
    "id": "ANOVA_BF_019",
    "terminology": "본페로니 교정 (Bonferroni Correction)",
    "terminology_ko": "본페로니 교정",
    "terminology_en": "Bonferroni Correction",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "다중비교 시 유의수준(α)을 비교 횟수로 나누어 각 개별 검정의 유의수준을 조정함으로써 가족별 오류율을 통제하는 방법이다.",
    "definition_en": "A method that controls the familywise error rate by dividing the significance level (α) by the number of comparisons to adjust the criterion for each individual test.",
    "significance": "간단하고 직관적인 다중비교 교정법으로, 비교 횟수가 적을 때 효율적이며 분산분석 외의 다중검정에도 폭넓게 적용된다.",
    "key_researchers": [
      {
        "name_ko": "카를로 에밀리오 본페로니",
        "name_en": "Carlo Emilio Bonferroni",
        "contribution": "확률의 합집합에 대한 부등식(Bonferroni inequality)을 증명하여 다중비교 교정의 수학적 기초를 제공했다."
      },
      {
        "name_ko": "올리브 진 더넷",
        "name_en": "Olive Jean Dunn",
        "contribution": "Bonferroni 부등식을 다중비교 검정에 적용하는 실용적 방법을 1961년에 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "ANOVA_FW_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "α/c (c=비교 횟수), 3번 비교하면 .05/3 = .017을 기준으로 판단",
      "differential": "Bonferroni는 어떤 검정에도 적용 가능한 일반적 교정법이고, Tukey HSD는 분산분석 사후검정에 특화된 방법이다.",
      "key_point": "비교 횟수가 많아지면 지나치게 보수적이 되어 검정력이 크게 감소하므로, 비교 횟수가 적을 때 적합하다.",
      "common_mistake": "모든 다중비교에 Bonferroni를 적용하면 안전하다고 생각하지만, 비교 횟수가 많으면 과도하게 보수적이다."
    }
  },
  {
    "id": "ANOVA_NK_020",
    "terminology": "뉴먼-쿨스 검정 (Newman-Keuls Test)",
    "terminology_ko": "뉴먼-쿨스 검정",
    "terminology_en": "Newman-Keuls Test",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "평균들을 크기순으로 정렬한 후 순차적으로 범위를 좁혀가며 비교하는 단계적 사후검정 방법으로, Tukey보다 검정력은 높지만 제1종 오류 통제가 덜 엄격하다.",
    "definition_en": "A stepwise post hoc method that orders means by magnitude and compares them sequentially with narrowing ranges, offering higher power than Tukey but less strict Type I error control.",
    "significance": "Tukey와 Scheffé의 중간 수준의 보수성을 가지며, 탐색적 분석에서 집단 차이의 패턴을 발견하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "데니스 뉴먼",
        "name_en": "Dennis Newman",
        "contribution": "1939년에 순차적 범위 검정의 기초가 되는 방법을 제안했다."
      },
      {
        "name_ko": "모리스 쿨스",
        "name_en": "Maurice Keuls",
        "contribution": "1952년에 Newman의 방법을 확장하여 단계적 다중비교 절차를 완성했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투키 HSD",
        "name_en": "Tukey HSD",
        "id": "ANOVA_TK_008"
      },
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "셰페 검정",
        "name_en": "Scheffé Test",
        "id": "ANOVA_SC_018"
      },
      {
        "name_ko": "더넷 검정",
        "name_en": "Dunnett Test",
        "id": "ANOVA_DN_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Newman-Keuls = 순차적(step-down) 범위 검정 → 멀리 떨어진 것부터 비교",
      "differential": "Tukey는 모든 비교에 동일한 임계값을 적용하지만, Newman-Keuls는 범위에 따라 다른 임계값을 사용한다.",
      "key_point": "가족별 오류율을 완전히 통제하지 못하므로, 현대 통계학에서는 Tukey나 Bonferroni가 더 권장된다.",
      "common_mistake": "Newman-Keuls가 검정력이 높다고 무조건 선택하면, 제1종 오류가 유의수준을 초과할 수 있다."
    }
  },
  {
    "id": "ANOVA_DN_021",
    "terminology": "더넷 검정 (Dunnett Test)",
    "terminology_ko": "더넷 검정",
    "terminology_en": "Dunnett Test",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "여러 실험집단의 평균을 하나의 통제집단 평균과만 비교하는 사후검정 방법으로, 통제집단 대비 처치 효과를 효율적으로 평가한다.",
    "definition_en": "A post hoc method that compares each treatment group mean only against a single control group mean, efficiently evaluating treatment effects relative to a control condition.",
    "significance": "통제집단이 있는 실험설계에서 불필요한 실험집단 간 비교를 생략하여 검정력을 높이며, 약물 효과 연구 등에서 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "찰스 더넷",
        "name_en": "Charles W. Dunnett",
        "contribution": "1955년에 다수의 처치를 단일 통제와 비교하는 다중비교 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "투키 HSD",
        "name_en": "Tukey HSD",
        "id": "ANOVA_TK_008"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      }
    ],
    "sub_types": [
      {
        "name": "단측 더넷 검정 (One-sided Dunnett)",
        "description": "처치집단이 통제집단보다 크거나 작은지 한 방향만 검정"
      },
      {
        "name": "양측 더넷 검정 (Two-sided Dunnett)",
        "description": "처치집단이 통제집단과 다른지 양방향으로 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Dunnett = 통제집단 vs. 나머지 → 모든 처치를 '하나의 기준'과 비교",
      "differential": "Tukey는 모든 쌍을 비교하지만, Dunnett은 통제집단과의 비교만 하므로 비교 횟수가 적고 검정력이 높다.",
      "key_point": "k개 처치집단이 있으면 k번의 비교만 실시하므로, k(k-1)/2번 비교하는 Tukey보다 효율적이다.",
      "common_mistake": "모든 실험집단 간 비교가 필요한 상황에서 Dunnett을 사용하면 실험집단 간 차이를 놓치게 된다."
    }
  },
  {
    "id": "ANOVA_PE_022",
    "terminology": "부분 에타제곱 (Partial Eta-squared)",
    "terminology_ko": "부분 에타제곱",
    "terminology_en": "Partial Eta-squared",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "다요인 설계에서 다른 요인의 효과를 제거한 후 특정 요인이 설명하는 분산의 비율로, SS_effect를 (SS_effect + SS_error)로 나누어 산출한다.",
    "definition_en": "The proportion of variance explained by a specific factor after removing the effects of other factors in a factorial design, calculated as SS_effect divided by (SS_effect + SS_error).",
    "significance": "다요인 설계에서 각 요인의 고유한 설명력을 평가할 수 있으며, SPSS 등 통계 소프트웨어에서 기본 효과 크기로 보고된다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과 크기 개념을 체계화하고 부분 에타제곱의 해석 기준을 제시했다."
      },
      {
        "name_ko": "조셉 스티븐스",
        "name_en": "Joseph P. Stevens",
        "contribution": "다변량 분석에서 부분 에타제곱의 적용과 해석 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "ANOVA_ET_009"
      },
      {
        "name_ko": "오메가제곱",
        "name_en": "Omega-squared",
        "id": "ANOVA_OM_023"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부분 η²p = SS_effect / (SS_effect + SS_error) → '부분'이므로 다른 요인의 SS는 제외",
      "differential": "에타제곱은 SS_total을 분모로 사용하지만, 부분 에타제곱은 (SS_effect + SS_error)를 분모로 사용하여 다른 요인의 영향을 제외한다.",
      "key_point": "다요인 설계에서 에타제곱보다 부분 에타제곱이 더 적절하며, SPSS는 기본적으로 부분 에타제곱을 보고한다.",
      "common_mistake": "부분 에타제곱과 에타제곱을 구분하지 않고 혼용하는 경우가 많다. 다요인 설계에서 둘의 값은 다르다."
    }
  },
  {
    "id": "ANOVA_OM_023",
    "terminology": "오메가제곱 (Omega-squared)",
    "terminology_ko": "오메가제곱",
    "terminology_en": "Omega-squared",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "에타제곱의 양의 편향을 교정한 효과 크기 추정치로, 모집단에서 독립변인이 설명하는 분산 비율을 보다 정확하게 추정한다.",
    "definition_en": "A bias-corrected effect size estimate that more accurately estimates the proportion of population variance explained by the independent variable, adjusting for the positive bias of eta-squared.",
    "significance": "표본에 기반한 에타제곱보다 모집단 효과 크기를 정확하게 추정하므로, 연구 결과의 일반화 가능성을 평가하는 데 더 적합하다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 헤이스",
        "name_en": "William L. Hays",
        "contribution": "분산분석에서 오메가제곱의 사용을 권장하며 해석 지침을 제시했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과 크기의 해석 기준을 제안하여 오메가제곱 활용의 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "ANOVA_ET_009"
      },
      {
        "name_ko": "부분 에타제곱",
        "name_en": "Partial Eta-squared",
        "id": "ANOVA_PE_022"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ω² = (SS_between - df_between × MS_within) / (SS_total + MS_within) → 편향 교정",
      "differential": "에타제곱은 표본 효과 크기로 과대추정 경향이 있고, 오메가제곱은 모집단 효과 크기의 불편 추정치에 가깝다.",
      "key_point": "표본이 작을수록 에타제곱과 오메가제곱의 차이가 크므로, 소표본 연구에서는 오메가제곱이 더 권장된다.",
      "common_mistake": "오메가제곱이 음수가 나올 수 있는데, 이 경우 효과 크기를 0으로 보고한다는 점을 모르는 경우가 있다."
    }
  },
  {
    "id": "ANOVA_AC_024",
    "terminology": "공분산분석 (ANCOVA)",
    "terminology_ko": "공분산분석",
    "terminology_en": "ANCOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "하나 이상의 공변인(covariate)의 효과를 통계적으로 통제한 후 집단 간 종속변인 평균 차이를 검정하는 분석 방법으로, ANOVA와 회귀분석을 결합한 것이다.",
    "definition_en": "An analysis method that tests group mean differences on the dependent variable after statistically controlling for one or more covariates, combining ANOVA with regression analysis.",
    "significance": "무선 배정이 불완전하거나 사전 차이가 존재할 때 혼입변인을 통제하여 처치 효과의 내적 타당도를 높일 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "공분산분석의 이론적 기초를 분산분석과 회귀분석의 결합으로 확립했다."
      },
      {
        "name_ko": "거트루드 콕스",
        "name_en": "Gertrude M. Cox",
        "contribution": "실험설계와 공분산분석의 실용적 적용 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ANCOVA = ANOVA + Covariate → 공변인을 통제한 분산분석",
      "differential": "ANOVA는 공변인 없이 집단 평균을 비교하지만, ANCOVA는 공변인의 영향을 통계적으로 제거한 후 비교한다.",
      "key_point": "공변인과 종속변인 간 선형 관계, 회귀 기울기의 동질성 가정이 충족되어야 한다.",
      "common_mistake": "ANCOVA가 무선 배정의 대체물이 될 수 있다고 생각하지만, 사전 집단 차이를 완전히 교정하지 못할 수 있다."
    }
  },
  {
    "id": "ANOVA_FW_025",
    "terminology": "가족별 오류율 (Familywise Error Rate)",
    "terminology_ko": "가족별 오류율",
    "terminology_en": "Familywise Error Rate",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "일련의 다중비교에서 적어도 하나의 제1종 오류를 범할 확률로, 비교 횟수가 증가할수록 높아지며 사후검정의 필요성을 정당화한다.",
    "definition_en": "The probability of committing at least one Type I error across a set of multiple comparisons, which increases with the number of comparisons and justifies the need for post hoc procedures.",
    "significance": "다중비교 시 개별 비교별 유의수준이 아닌 전체 비교 집합의 오류율을 통제해야 하는 이유를 설명하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "가족별 오류율 개념을 체계화하고 이를 통제하는 다중비교 방법을 개발했다."
      },
      {
        "name_ko": "카를로 에밀리오 본페로니",
        "name_en": "Carlo Emilio Bonferroni",
        "contribution": "확률 부등식을 통해 가족별 오류율의 상한을 수학적으로 증명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1종 오류",
        "name_en": "Type I Error",
        "id": "HYPO_T1_003"
      },
      {
        "name_ko": "본페로니 교정",
        "name_en": "Bonferroni Correction",
        "id": "ANOVA_BF_019"
      },
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비교 c회 시 가족별 오류율 ≈ 1-(1-α)^c, 10회 비교면 약 40%",
      "differential": "개별 비교별 오류율(per-comparison error rate)은 각 검정의 α이고, 가족별 오류율은 전체 비교에서 최소 1회 오류 확률이다.",
      "key_point": "3집단 비교 시 3쌍의 t검정을 하면 가족별 오류율이 .05가 아닌 약 .14로 증가한다.",
      "common_mistake": "각 비교에서 α=.05를 적용하면 전체 오류율도 .05라고 오해한다. 비교 횟수에 비례하여 오류율이 증가한다."
    }
  },
  {
    "id": "ANOVA_MV_026",
    "terminology": "다변량 분산분석 (MANOVA)",
    "terminology_ko": "다변량 분산분석",
    "terminology_en": "MANOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "두 개 이상의 종속변인을 동시에 고려하여 집단 간 차이를 검정하는 분산분석의 확장으로, 종속변인 간 상관관계를 반영한다.",
    "definition_en": "An extension of ANOVA that simultaneously tests group differences on two or more dependent variables, accounting for the correlations among dependent variables.",
    "significance": "심리학 연구에서 여러 측정치를 동시에 분석함으로써 제1종 오류 증가를 방지하고, 변인 간 관계를 고려한 총체적 검정이 가능하다.",
    "key_researchers": [
      {
        "name_ko": "새뮤얼 윌크스",
        "name_en": "Samuel S. Wilks",
        "contribution": "다변량 검정의 기초가 되는 Wilks의 람다(Λ) 통계량을 개발했다."
      },
      {
        "name_ko": "케네스 로이",
        "name_en": "S. N. Roy",
        "contribution": "Roy의 최대근 통계량을 개발하여 MANOVA의 검정력을 높이는 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "종속변인",
        "name_en": "Dependent Variable",
        "id": "FOUND_DV_006"
      },
      {
        "name_ko": "상관행렬",
        "name_en": "Correlation Matrix",
        "id": "CORR_CM_017"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      }
    ],
    "sub_types": [
      {
        "name": "일원 MANOVA (One-Way MANOVA)",
        "description": "하나의 독립변인과 여러 종속변인을 분석"
      },
      {
        "name": "이원 MANOVA (Two-Way MANOVA)",
        "description": "두 개의 독립변인과 여러 종속변인을 분석"
      }
    ],
    "quiz_hints": {
      "mnemonic": "MANOVA = Multivariate ANOVA → 종속변인이 Multiple(여러 개)",
      "differential": "ANOVA는 종속변인 1개, MANOVA는 종속변인 2개 이상. MANOVA 후 유의하면 개별 ANOVA로 후속 분석한다.",
      "key_point": "Wilks의 Λ, Pillai의 Trace, Hotelling의 Trace, Roy의 최대근 등 4가지 다변량 검정 통계량이 사용된다.",
      "common_mistake": "종속변인이 여러 개일 때 개별 ANOVA를 반복 실시하면 제1종 오류가 증가하므로, MANOVA를 먼저 실시해야 한다."
    }
  },
  {
    "id": "ANOVA_MX_027",
    "terminology": "혼합 분산분석 (Mixed ANOVA)",
    "terminology_ko": "혼합 분산분석",
    "terminology_en": "Mixed ANOVA",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "피험자간 요인과 피험자내 요인을 동시에 포함하는 분산분석으로, 분할구획 설계(split-plot design)라고도 하며 각 요인의 주효과와 상호작용을 검정한다.",
    "definition_en": "An ANOVA that simultaneously includes both between-subjects and within-subjects factors, also called a split-plot design, testing main effects and interactions of each factor.",
    "significance": "심리학의 사전-사후 통제집단 설계 등에서 집단 차이와 시간 변화를 동시에 분석할 수 있어 폭넓게 활용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "분할구획 설계(split-plot design)를 농업 실험에 도입하여 혼합설계의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복측정 분산분석",
        "name_en": "Repeated Measures ANOVA",
        "id": "ANOVA_RM_003"
      },
      {
        "name_ko": "피험자간 설계",
        "name_en": "Between-Subjects Design",
        "id": "DESIGN_BS_008"
      },
      {
        "name_ko": "피험자내 설계",
        "name_en": "Within-Subjects Design",
        "id": "DESIGN_WS_007"
      },
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "ANOVA_IE_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Mixed = Between + Within → 집단간 요인과 반복측정 요인을 '혼합'",
      "differential": "순수 피험자간 설계는 모든 요인이 집단간, 순수 반복측정은 모든 요인이 집단내이지만, 혼합설계는 두 유형을 결합한다.",
      "key_point": "피험자간 효과와 피험자내 효과는 서로 다른 오차항을 사용하므로, 각각의 F검정이 독립적으로 계산된다.",
      "common_mistake": "혼합설계에서 피험자간 효과와 피험자내 효과의 오차항이 동일하다고 가정하는 오류가 있다."
    }
  },
  {
    "id": "ANOVA_SP_028",
    "terminology": "구형성 가정 (Sphericity Assumption)",
    "terminology_ko": "구형성 가정",
    "terminology_en": "Sphericity Assumption",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "반복측정 분산분석에서 모든 조건 쌍 간 차이 점수의 분산이 동일해야 한다는 가정으로, 위반 시 F검정의 제1종 오류율이 증가한다.",
    "definition_en": "The assumption in repeated measures ANOVA that the variances of difference scores between all pairs of conditions are equal, with violations inflating the Type I error rate of the F-test.",
    "significance": "반복측정 설계에서 가장 중요한 가정이며, 위반 시 적절한 교정 방법을 적용해야 결과의 신뢰성을 확보할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "존 모슬리",
        "name_en": "John W. Mauchly",
        "contribution": "구형성 가정을 검정하는 Mauchly의 구형성 검정(W)을 1940년에 개발했다."
      },
      {
        "name_ko": "사뮤엘 그린하우스",
        "name_en": "Samuel W. Greenhouse",
        "contribution": "구형성 위반 시 자유도를 교정하는 엡실론 교정법을 Geisser와 함께 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복측정 분산분석",
        "name_en": "Repeated Measures ANOVA",
        "id": "ANOVA_RM_003"
      },
      {
        "name_ko": "모슬리 검정",
        "name_en": "Mauchly's Test",
        "id": "ANOVA_MW_029"
      },
      {
        "name_ko": "그린하우스-가이서 교정",
        "name_en": "Greenhouse-Geisser Correction",
        "id": "ANOVA_GG_030"
      },
      {
        "name_ko": "등분산성 가정",
        "name_en": "Homogeneity of Variance",
        "id": "ANOVA_HV_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Sphericity = 구(球)형성 → 차이 점수의 분산이 모두 '동그랗게 같아야' 한다",
      "differential": "등분산성은 집단 간 분산의 동질성이고, 구형성은 조건 쌍 간 차이 점수 분산의 동질성으로 반복측정에만 해당한다.",
      "key_point": "Mauchly 검정으로 확인하며, 위반 시 Greenhouse-Geisser(보수적) 또는 Huynh-Feldt(덜 보수적) 교정을 적용한다.",
      "common_mistake": "구형성과 등분산성을 같은 개념으로 혼동하는 경우가 많다. 구형성은 반복측정 설계에만 적용되는 고유한 가정이다."
    }
  },
  {
    "id": "ANOVA_MW_029",
    "terminology": "모슬리 검정 (Mauchly's Test)",
    "terminology_ko": "모슬리 검정",
    "terminology_en": "Mauchly's Test",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "반복측정 분산분석에서 구형성 가정의 충족 여부를 검정하는 방법으로, 유의하면 구형성 가정이 위반된 것으로 판단한다.",
    "definition_en": "A test that evaluates whether the sphericity assumption is met in repeated measures ANOVA, with a significant result indicating violation of the assumption.",
    "significance": "반복측정 분산분석의 전제조건을 확인하는 필수 절차이며, 결과에 따라 적절한 교정 방법의 적용 여부를 결정한다.",
    "key_researchers": [
      {
        "name_ko": "존 모슬리",
        "name_en": "John W. Mauchly",
        "contribution": "1940년에 구형성 가정을 검정하는 W 통계량을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구형성 가정",
        "name_en": "Sphericity Assumption",
        "id": "ANOVA_SP_028"
      },
      {
        "name_ko": "그린하우스-가이서 교정",
        "name_en": "Greenhouse-Geisser Correction",
        "id": "ANOVA_GG_030"
      },
      {
        "name_ko": "반복측정 분산분석",
        "name_en": "Repeated Measures ANOVA",
        "id": "ANOVA_RM_003"
      },
      {
        "name_ko": "등분산성 가정",
        "name_en": "Homogeneity of Variance",
        "id": "ANOVA_HV_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Mauchly's W → W가 유의하면 구형성 '위반' (Violation)",
      "differential": "Levene 검정은 독립 설계의 등분산성을, Mauchly 검정은 반복측정 설계의 구형성을 검정한다.",
      "key_point": "표본이 크면 사소한 위반에도 유의하고, 작으면 심각한 위반도 감지 못하므로 엡실론 값도 함께 검토한다.",
      "common_mistake": "Mauchly 검정이 유의하지 않으면 구형성이 완벽히 충족된다고 결론짓지만, 검정력 부족일 수 있다."
    }
  },
  {
    "id": "ANOVA_GG_030",
    "terminology": "그린하우스-가이서 교정 (Greenhouse-Geisser Correction)",
    "terminology_ko": "그린하우스-가이서 교정",
    "terminology_en": "Greenhouse-Geisser Correction",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "구형성 가정이 위반되었을 때 엡실론(ε) 계수를 사용하여 자유도를 하향 조정함으로써 F검정의 정확성을 유지하는 교정 방법이다.",
    "definition_en": "A correction method that adjusts degrees of freedom downward using an epsilon (ε) coefficient to maintain the accuracy of the F-test when the sphericity assumption is violated.",
    "significance": "반복측정 분산분석에서 구형성 위반의 영향을 교정하여 제1종 오류율을 적절하게 통제하는 표준적 방법이다.",
    "key_researchers": [
      {
        "name_ko": "사뮤엘 그린하우스",
        "name_en": "Samuel W. Greenhouse",
        "contribution": "Geisser와 함께 1959년에 구형성 위반 시 자유도 교정법을 개발했다."
      },
      {
        "name_ko": "시모어 가이서",
        "name_en": "Seymour Geisser",
        "contribution": "Greenhouse와 공동으로 엡실론 교정계수의 수학적 기초를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구형성 가정",
        "name_en": "Sphericity Assumption",
        "id": "ANOVA_SP_028"
      },
      {
        "name_ko": "모슬리 검정",
        "name_en": "Mauchly's Test",
        "id": "ANOVA_MW_029"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "ANOVA_DF_032"
      },
      {
        "name_ko": "반복측정 분산분석",
        "name_en": "Repeated Measures ANOVA",
        "id": "ANOVA_RM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "G-G 교정: ε가 1이면 구형성 충족, 1보다 작을수록 심한 위반 → 자유도를 ε만큼 줄인다",
      "differential": "Greenhouse-Geisser는 보수적 교정이고, Huynh-Feldt는 덜 보수적인 교정이다. ε > .75이면 Huynh-Feldt를 권장한다.",
      "key_point": "교정된 자유도 = 원래 자유도 × ε. ε의 하한은 1/(k-1)이며, k는 반복측정 수준의 수이다.",
      "common_mistake": "Greenhouse-Geisser가 항상 최선이라고 생각하지만, 지나치게 보수적일 수 있어 Huynh-Feldt와 비교해야 한다."
    }
  },
  {
    "id": "ANOVA_HV_031",
    "terminology": "등분산성 가정 (Homogeneity of Variance Assumption)",
    "terminology_ko": "등분산성 가정",
    "terminology_en": "Homogeneity of Variance Assumption",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 각 집단의 모집단 분산이 동일해야 한다는 가정으로, Levene 검정이나 Bartlett 검정으로 확인하며 위반 시 Welch의 F검정을 사용한다.",
    "definition_en": "The assumption that population variances are equal across all groups in ANOVA, tested by Levene's or Bartlett's test, with Welch's F-test used when violated.",
    "significance": "등분산성이 심하게 위반되면 F검정의 정확성이 저하되므로, 사전 검토를 통해 적절한 분석 방법을 선택해야 한다.",
    "key_researchers": [
      {
        "name_ko": "하워드 레빈",
        "name_en": "Howard Levene",
        "contribution": "정규성에 강건한 등분산성 검정법(Levene's test)을 1960년에 개발했다."
      },
      {
        "name_ko": "버나드 웰치",
        "name_en": "Bernard L. Welch",
        "contribution": "등분산성 위반 시에도 사용 가능한 Welch의 F검정을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규성 가정",
        "name_en": "Normality Assumption",
        "id": "ANOVA_NR_033"
      },
      {
        "name_ko": "구형성 가정",
        "name_en": "Sphericity Assumption",
        "id": "ANOVA_SP_028"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "크루스칼-왈리스 검정",
        "name_en": "Kruskal-Wallis Test",
        "id": "NONPARA_KW_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Homo(같은) + Variance(분산) = 집단들의 분산이 '같다'는 가정",
      "differential": "등분산성은 독립표본 설계에서 집단 간 분산의 동질성이고, 구형성은 반복측정에서 차이점수 분산의 동질성이다.",
      "key_point": "Levene 검정이 유의하면 등분산성 위반이며, Welch의 F검정이나 비모수 대안(Kruskal-Wallis)을 고려한다.",
      "common_mistake": "집단 크기가 동일하면 등분산성 위반에 ANOVA가 강건하다고 하지만, 분산 비가 4:1 이상이면 문제가 될 수 있다."
    }
  },
  {
    "id": "ANOVA_DF_032",
    "terminology": "자유도 (Degrees of Freedom in ANOVA)",
    "terminology_ko": "자유도",
    "terminology_en": "Degrees of Freedom",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 제곱합을 평균제곱으로 변환할 때 사용되는 값으로, 집단간 자유도(k-1)와 집단내 자유도(N-k)로 구분된다.",
    "definition_en": "Values used to convert sums of squares to mean squares in ANOVA, divided into between-group degrees of freedom (k-1) and within-group degrees of freedom (N-k).",
    "significance": "F분포의 형태를 결정하며, 적절한 자유도를 통해 정확한 임계값을 산출하여 가설검정의 정확성을 확보한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "자유도 개념을 F분포와 분산분석 체계에 통합하여 검정의 수학적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제곱합",
        "name_en": "Sum of Squares",
        "id": "ANOVA_SS_005"
      },
      {
        "name_ko": "평균제곱",
        "name_en": "Mean Square",
        "id": "ANOVA_MS_006"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      }
    ],
    "sub_types": [
      {
        "name": "집단간 자유도 (df_between = k-1)",
        "description": "k개 집단의 평균을 추정한 후 남는 자유로운 변동의 수"
      },
      {
        "name": "집단내 자유도 (df_within = N-k)",
        "description": "N명의 전체 참가자에서 k개 집단 평균을 추정한 후 남는 자유도"
      },
      {
        "name": "총자유도 (df_total = N-1)",
        "description": "전체 관측치에서 전체 평균 하나를 추정한 후 남는 자유도"
      }
    ],
    "quiz_hints": {
      "mnemonic": "df_between = k-1, df_within = N-k, df_total = N-1 → 항상 df_total = df_between + df_within",
      "differential": "t검정의 자유도는 n-1 또는 n₁+n₂-2이지만, ANOVA는 분자(k-1)와 분모(N-k) 두 개의 자유도가 필요하다.",
      "key_point": "F(df_between, df_within)로 표기하며, 두 자유도가 F분포의 형태를 결정한다.",
      "common_mistake": "df_between과 df_within의 순서를 혼동하여 F표에서 잘못된 임계값을 찾는 오류가 있다."
    }
  },
  {
    "id": "ANOVA_NR_033",
    "terminology": "정규성 가정 (Normality Assumption in ANOVA)",
    "terminology_ko": "정규성 가정",
    "terminology_en": "Normality Assumption",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "분산분석에서 각 집단의 종속변인 점수가 정규분포를 따라야 한다는 가정으로, 표본이 충분히 크면 중심극한정리에 의해 약간의 위반에 강건하다.",
    "definition_en": "The assumption that dependent variable scores in each group follow a normal distribution in ANOVA, which is robust to mild violations with sufficiently large samples due to the central limit theorem.",
    "significance": "정규성 위반이 심할 경우 F검정의 신뢰성이 저하되므로, Shapiro-Wilk 검정이나 Q-Q 도표로 사전 확인이 권장된다.",
    "key_researchers": [
      {
        "name_ko": "새뮤얼 샤피로",
        "name_en": "Samuel S. Shapiro",
        "contribution": "Wilk와 함께 정규성 검정을 위한 Shapiro-Wilk 검정을 개발했다."
      },
      {
        "name_ko": "마틴 윌크",
        "name_en": "Martin B. Wilk",
        "contribution": "Shapiro와 공동으로 소표본에서도 검정력이 높은 정규성 검정을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "등분산성 가정",
        "name_en": "Homogeneity of Variance",
        "id": "ANOVA_HV_031"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "크루스칼-왈리스 검정",
        "name_en": "Kruskal-Wallis Test",
        "id": "NONPARA_KW_004"
      },
      {
        "name_ko": "구형성 가정",
        "name_en": "Sphericity Assumption",
        "id": "ANOVA_SP_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정규성은 ANOVA의 3대 가정 중 하나(정규성, 등분산성, 독립성)",
      "differential": "정규성은 분포의 형태에 관한 가정이고, 등분산성은 분포의 산포에 관한 가정이다.",
      "key_point": "표본 크기가 각 집단 30명 이상이면 중심극한정리에 의해 정규성 위반에 상당히 강건하다.",
      "common_mistake": "Shapiro-Wilk 검정이 유의하면 무조건 ANOVA를 사용할 수 없다고 판단하지만, 표본이 크면 사소한 편차에도 유의하게 나온다."
    }
  },
  {
    "id": "ANOVA_SM_034",
    "terminology": "단순주효과 (Simple Main Effect)",
    "terminology_ko": "단순주효과",
    "terminology_en": "Simple Main Effect",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "요인설계에서 상호작용이 유의할 때, 한 요인의 특정 수준에서 다른 요인의 효과를 개별적으로 검정하는 후속 분석 방법이다.",
    "definition_en": "A follow-up analysis in factorial designs that tests the effect of one factor at each specific level of the other factor when a significant interaction is found.",
    "significance": "상호작용 효과의 구체적인 패턴을 해석하는 데 필수적이며, 어떤 조건에서 요인의 효과가 나타나는지를 밝힌다.",
    "key_researchers": [
      {
        "name_ko": "로저 커크",
        "name_en": "Roger E. Kirk",
        "contribution": "실험설계 교재에서 단순주효과 분석의 절차와 적절한 오차항 선택 방법을 체계적으로 기술했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "ANOVA_IE_010"
      },
      {
        "name_ko": "주효과",
        "name_en": "Main Effect",
        "id": "ANOVA_ME_011"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-Way ANOVA",
        "id": "ANOVA_TW_002"
      },
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Simple = '단순' → 다른 요인을 고정(특정 수준)하고 한 요인의 효과만 검정",
      "differential": "주효과는 다른 요인을 평균하여 얻은 전반적 효과이고, 단순주효과는 다른 요인의 특정 수준에서의 효과이다.",
      "key_point": "상호작용이 유의할 때만 실시하며, 각 수준에서의 단순주효과를 비교하여 상호작용 패턴을 구체적으로 해석한다.",
      "common_mistake": "상호작용이 유의하지 않은데 단순주효과를 분석하거나, 주효과만으로 상호작용을 해석하려는 오류가 있다."
    }
  },
  {
    "id": "ANOVA_PC_035",
    "terminology": "계획비교 (Planned Comparison)",
    "terminology_ko": "계획비교",
    "terminology_en": "Planned Comparison",
    "category": "ANOVA",
    "category_name": "분산분석 (Analysis of Variance)",
    "definition": "연구 시작 전에 이론이나 선행연구에 기반하여 특정 집단 간 차이를 검정하도록 사전에 계획된 비교로, 사후검정보다 검정력이 높다.",
    "definition_en": "Comparisons planned before data collection based on theory or prior research to test specific group differences, offering higher statistical power than post hoc tests.",
    "significance": "이론 주도적 가설검정이 가능하며, 사후검정의 보수적 교정 없이 더 높은 검정력으로 연구 가설을 직접 검증할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "직교 대비(orthogonal contrasts)의 개념을 도입하여 계획비교의 이론적 기초를 확립했다."
      },
      {
        "name_ko": "도널드 러빈",
        "name_en": "Donald B. Rubin",
        "contribution": "인과추론에서 사전 계획된 비교의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사후검정",
        "name_en": "Post Hoc Test",
        "id": "ANOVA_PH_007"
      },
      {
        "name_ko": "대립가설",
        "name_en": "Alternative Hypothesis",
        "id": "HYPO_AH_002"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      },
      {
        "name_ko": "가족별 오류율",
        "name_en": "Familywise Error Rate",
        "id": "ANOVA_FW_025"
      }
    ],
    "sub_types": [
      {
        "name": "직교 대비 (Orthogonal Contrasts)",
        "description": "비교들이 서로 독립적(직교)인 경우, 최대 k-1개의 독립 비교 가능"
      },
      {
        "name": "비직교 대비 (Non-orthogonal Contrasts)",
        "description": "비교들이 독립적이지 않아 정보가 중복되는 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Planned = 사전 '계획' → 연구 전에 미리 정한 비교 → 사후검정 불필요",
      "differential": "계획비교는 사전에 이론에 기반하여 설정하고, 사후검정은 F검정 유의 후 탐색적으로 실시한다.",
      "key_point": "계획비교는 전체 F검정이 유의하지 않아도 실시할 수 있으며, 직교 대비는 최대 k-1개까지 가능하다.",
      "common_mistake": "데이터를 본 후 사후적으로 설정한 비교를 계획비교라고 주장하는 것은 p-해킹에 해당한다."
    }
  }
];

TERMS_DATA.CORR = [
  {
    "id": "CORR_PR_001",
    "terminology": "피어슨 상관계수 (Pearson Correlation Coefficient)",
    "terminology_ko": "피어슨 상관계수",
    "terminology_en": "Pearson Correlation Coefficient",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 연속변인 간의 선형 관계의 강도와 방향을 -1에서 +1 사이의 값으로 나타내는 가장 대표적인 상관계수이다.",
    "definition_en": "The most widely used correlation coefficient that measures the strength and direction of the linear relationship between two continuous variables, ranging from -1 to +1.",
    "significance": "심리학 연구에서 두 변인 간 관계를 정량화하는 가장 기본적인 통계량으로, 회귀분석과 요인분석 등의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "1895년에 적률상관계수(product-moment correlation)를 공식화하여 상관분석의 수학적 기초를 확립했다."
      },
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "회귀와 상관의 개념을 처음 도입하여 피어슨 상관계수 개발의 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스피어만 상관계수",
        "name_en": "Spearman Correlation",
        "id": "CORR_SR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      },
      {
        "name_ko": "공분산",
        "name_en": "Covariance",
        "id": "CORR_CV_018"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "r = Σ(zx × zy) / (n-1) → 표준화 점수의 교차곱 평균",
      "differential": "피어슨은 등간/비율 척도의 선형 관계를, 스피어만은 서열 척도의 단조 관계를 측정한다.",
      "key_point": "선형 관계만 측정하므로, 비선형 관계가 있어도 r이 0에 가까울 수 있다. 반드시 산점도를 확인해야 한다.",
      "common_mistake": "r = 0이면 두 변인 간 관계가 전혀 없다고 해석하지만, 비선형 관계가 존재할 수 있다."
    }
  },
  {
    "id": "CORR_SR_002",
    "terminology": "스피어만 순위상관계수 (Spearman Rank Correlation)",
    "terminology_ko": "스피어만 순위상관계수",
    "terminology_en": "Spearman Rank Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인의 순위(rank)를 사용하여 단조적 관계의 강도와 방향을 측정하는 비모수 상관계수로, 서열 척도 데이터에 적합하다.",
    "definition_en": "A nonparametric correlation coefficient that measures the strength and direction of a monotonic relationship using ranks of two variables, suitable for ordinal scale data.",
    "significance": "정규성 가정이 충족되지 않거나 서열 척도 데이터일 때 피어슨 상관의 대안으로 널리 사용되며, 이상치에 강건하다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "1904년에 순위상관계수(ρ, rho)를 개발하여 비모수 상관분석의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "켄달의 타우",
        "name_en": "Kendall's Tau",
        "id": "CORR_KT_012"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "비선형 관계",
        "name_en": "Nonlinear Relationship",
        "id": "CORR_NL_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Spearman's ρ(rho) = 순위를 부여한 후 피어슨 상관을 적용한 것",
      "differential": "피어슨은 원점수의 선형 관계를, 스피어만은 순위의 단조 관계를 측정한다. 비선형이지만 단조적이면 스피어만이 적합하다.",
      "key_point": "데이터를 순위로 변환하므로 이상치의 영향이 줄어들며, 정규성 가정이 불필요하다.",
      "common_mistake": "스피어만 상관이 비선형 관계를 모두 감지한다고 오해하지만, 단조적 관계만 측정할 수 있다."
    }
  },
  {
    "id": "CORR_SP_003",
    "terminology": "산점도 (Scatterplot)",
    "terminology_ko": "산점도",
    "terminology_en": "Scatterplot",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 연속변인의 관계를 시각적으로 표현하는 그래프로, 각 관측치를 좌표 평면의 점으로 나타내어 관계의 형태와 강도를 파악할 수 있다.",
    "definition_en": "A graph that visually represents the relationship between two continuous variables by plotting each observation as a point on a coordinate plane, revealing the form and strength of the relationship.",
    "significance": "상관분석 전에 반드시 확인해야 하는 필수 탐색 도구로, 선형/비선형 관계, 이상치, 제한 범위 등의 문제를 시각적으로 진단한다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모와 자녀의 키 관계를 산점도로 시각화하여 회귀와 상관의 개념을 처음 발견했다."
      },
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "탐색적 자료분석(EDA)에서 산점도의 중요성을 강조하고 다양한 시각화 기법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "비선형 관계",
        "name_en": "Nonlinear Relationship",
        "id": "CORR_NL_009"
      },
      {
        "name_ko": "이상치 영향",
        "name_en": "Outlier Effects",
        "id": "CORR_OE_023"
      },
      {
        "name_ko": "제한 범위 효과",
        "name_en": "Restriction of Range",
        "id": "CORR_RR_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Scatter = '흩어진' 점들의 패턴으로 관계를 읽는다",
      "differential": "산점도는 두 변인의 관계를 보여주고, 히스토그램은 한 변인의 분포를 보여준다.",
      "key_point": "상관계수만으로는 관계의 형태를 알 수 없으므로, 반드시 산점도를 먼저 확인하여 선형성, 이상치, 군집 등을 검토해야 한다.",
      "common_mistake": "상관계수가 높으면 산점도를 생략해도 된다고 생각하지만, Anscombe 4중주처럼 동일한 r에서도 패턴이 매우 다를 수 있다."
    }
  },
  {
    "id": "CORR_PB_004",
    "terminology": "점이연상관 (Point-Biserial Correlation)",
    "terminology_ko": "점이연상관",
    "terminology_en": "Point-Biserial Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "하나의 이분변인(0/1)과 하나의 연속변인 간의 상관관계를 측정하는 계수로, 피어슨 상관계수의 특수한 경우에 해당한다.",
    "definition_en": "A correlation coefficient measuring the relationship between one dichotomous variable (0/1) and one continuous variable, representing a special case of the Pearson correlation.",
    "significance": "문항변별도 분석, 성별에 따른 점수 차이 등 이분변인이 포함된 연구 상황에서 효과 크기의 역할도 겸한다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "이분변인을 포함한 상관의 수학적 기초를 마련했다."
      },
      {
        "name_ko": "에드워드 커렌",
        "name_en": "Edward Cureton",
        "contribution": "점이연상관의 통계적 성질과 적용 조건을 체계적으로 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "양이연상관",
        "name_en": "Biserial Correlation",
        "id": "CORR_BS_011"
      },
      {
        "name_ko": "파이계수",
        "name_en": "Phi Coefficient",
        "id": "CORR_PH_013"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Point(점) + Biserial(이연) = 이분변인과 연속변인의 '점' 상관",
      "differential": "점이연상관은 진정한 이분변인(성별)에, 양이연상관은 인위적 이분변인(합격/불합격)에 사용한다.",
      "key_point": "수학적으로 피어슨 상관계수와 동일한 공식을 적용하면 되지만, 한 변인이 0과 1로 코딩된다.",
      "common_mistake": "연속변인을 이분화한 후 점이연상관을 구하면 양이연상관이 아닌 점이연상관을 사용하는 셈이 되어 과소추정된다."
    }
  },
  {
    "id": "CORR_PC_005",
    "terminology": "편상관 (Partial Correlation)",
    "terminology_ko": "편상관",
    "terminology_en": "Partial Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "제3변인의 영향을 양쪽 변인에서 모두 통제한 후 두 변인 간 순수한 상관관계를 측정하는 방법이다.",
    "definition_en": "A method that measures the pure correlation between two variables after controlling for the influence of a third variable on both variables.",
    "significance": "제3변인의 혼입 효과를 제거하여 두 변인 간의 고유한 관계를 파악할 수 있으며, 허위상관을 검증하는 핵심 도구이다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "편상관의 수학적 공식을 도출하여 다변량 상관분석의 기초를 확립했다."
      },
      {
        "name_ko": "유헌 율",
        "name_en": "George Udny Yule",
        "contribution": "편상관과 다중상관의 이론을 발전시켜 회귀분석과의 연결을 강화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반편상관",
        "name_en": "Semi-partial Correlation",
        "id": "CORR_SP2_016"
      },
      {
        "name_ko": "제3변인 문제",
        "name_en": "Third Variable Problem",
        "id": "CORR_TV_024"
      },
      {
        "name_ko": "허위상관",
        "name_en": "Spurious Correlation",
        "id": "CORR_SC_025"
      },
      {
        "name_ko": "공분산분석",
        "name_en": "ANCOVA",
        "id": "ANOVA_AC_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Partial = '부분적' → 제3변인의 영향을 '부분적으로 제거'한 상관",
      "differential": "편상관은 제3변인을 양쪽 변인에서 모두 제거하고, 반편상관은 한쪽 변인에서만 제거한다.",
      "key_point": "편상관이 영상관(0)에 가까우면 원래의 상관이 제3변인에 의한 허위상관일 가능성이 높다.",
      "common_mistake": "편상관을 구하면 인과관계를 확립할 수 있다고 오해하지만, 통제되지 않은 다른 혼입변인이 여전히 존재할 수 있다."
    }
  },
  {
    "id": "CORR_CD_006",
    "terminology": "결정계수 (Coefficient of Determination)",
    "terminology_ko": "결정계수",
    "terminology_en": "Coefficient of Determination",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "상관계수의 제곱(r²)으로, 한 변인의 분산 중 다른 변인에 의해 설명되는 비율을 나타내며 상관의 실질적 의미를 해석하는 데 사용된다.",
    "definition_en": "The square of the correlation coefficient (r²), indicating the proportion of variance in one variable explained by the other, used to interpret the practical significance of a correlation.",
    "significance": "상관계수의 크기만으로는 실질적 중요성을 판단하기 어려우므로, 결정계수를 통해 설명력의 비율로 해석하는 것이 권장된다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "상관계수의 제곱이 공유 분산의 비율임을 수학적으로 증명했다."
      },
      {
        "name_ko": "시월 라이트",
        "name_en": "Sewall Wright",
        "contribution": "경로분석에서 결정계수의 분해와 해석 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-squared",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "공유분산",
        "name_en": "Shared Variance",
        "id": "CORR_SV_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "r² = 결정계수 → r = .50이면 r² = .25, 즉 25%만 설명",
      "differential": "상관계수(r)는 관계의 강도와 방향을, 결정계수(r²)는 설명되는 분산의 비율을 나타낸다.",
      "key_point": "r = .70이면 r² = .49로 약 49%를 설명하지만, r = .30이면 r² = .09로 9%만 설명한다. r의 크기를 과대해석하지 않아야 한다.",
      "common_mistake": "r = .50을 '50% 설명'으로 해석하는 오류가 매우 흔하다. r² = .25이므로 25%만 설명한다."
    }
  },
  {
    "id": "CORR_MC_007",
    "terminology": "다중공선성 (Multicollinearity)",
    "terminology_ko": "다중공선성",
    "terminology_en": "Multicollinearity",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "회귀분석에서 두 개 이상의 예측변인 간 상관이 매우 높아 개별 변인의 고유한 기여를 분리하기 어렵게 되는 문제이다.",
    "definition_en": "A problem in regression analysis where two or more predictor variables are highly correlated, making it difficult to isolate the unique contribution of each variable.",
    "significance": "회귀계수의 표준오차가 팽창하여 불안정해지고, 개별 예측변인의 유의성 검정이 왜곡되므로 다중회귀 분석에서 반드시 점검해야 한다.",
    "key_researchers": [
      {
        "name_ko": "라그나르 프리쉬",
        "name_en": "Ragnar Frisch",
        "contribution": "1934년에 다중공선성 개념을 처음 제안하고 회귀분석에서의 문제점을 지적했다."
      },
      {
        "name_ko": "데이비드 벨슬리",
        "name_en": "David A. Belsley",
        "contribution": "다중공선성 진단을 위한 조건지수(condition index) 등의 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "상관행렬",
        "name_en": "Correlation Matrix",
        "id": "CORR_CM_017"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Multi(다중) + Collinearity(공선성) = 예측변인들이 같은 '선' 위에 있다",
      "differential": "다중공선성은 예측변인 간의 높은 상관 문제이고, 자기상관은 시계열에서 잔차 간의 상관 문제이다.",
      "key_point": "VIF(분산팽창인자) > 10 또는 공차(tolerance) < .10이면 다중공선성이 심각한 것으로 판단한다.",
      "common_mistake": "예측변인 간 상관이 조금만 있어도 다중공선성이라 판단하지만, 실제로는 r > .80 이상일 때 문제가 된다."
    }
  },
  {
    "id": "CORR_CA_008",
    "terminology": "인과관계 (Causal Relationship)",
    "terminology_ko": "인과관계",
    "terminology_en": "Causal Relationship",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "한 변인의 변화가 다른 변인의 변화를 직접적으로 야기하는 관계로, 상관관계와 달리 방향성과 기제의 확인이 필요하다.",
    "definition_en": "A relationship where changes in one variable directly cause changes in another, requiring identification of directionality and mechanism unlike correlation.",
    "significance": "상관은 인과를 함축하지 않는다는 원칙은 심리학 연구방법론의 핵심이며, 인과추론에는 실험설계가 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "존 스튜어트 밀",
        "name_en": "John Stuart Mill",
        "contribution": "인과관계 추론의 3조건(시간적 선행, 공변, 배제)을 체계화했다."
      },
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "내적 타당도 개념을 통해 인과관계 추론의 조건과 위협 요인을 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제3변인 문제",
        "name_en": "Third Variable Problem",
        "id": "CORR_TV_024"
      },
      {
        "name_ko": "허위상관",
        "name_en": "Spurious Correlation",
        "id": "CORR_SC_025"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "매개효과",
        "name_en": "Mediation Effect",
        "id": "CORR_ME_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'상관은 인과가 아니다(Correlation does not imply causation)' = 상관분석의 제1원칙",
      "differential": "상관관계는 두 변인의 공변 패턴이고, 인과관계는 한 변인이 다른 변인을 직접 변화시키는 관계이다.",
      "key_point": "인과추론에는 시간적 선행성, 공변관계, 제3변인 배제의 3가지 조건이 필요하며, 실험설계가 가장 강력한 방법이다.",
      "common_mistake": "높은 상관계수를 인과관계의 증거로 해석하는 오류가 매우 흔하다. 역인과나 제3변인의 가능성을 항상 고려해야 한다."
    }
  },
  {
    "id": "CORR_NL_009",
    "terminology": "비선형 관계 (Nonlinear Relationship)",
    "terminology_ko": "비선형 관계",
    "terminology_en": "Nonlinear Relationship",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인 간의 관계가 직선이 아닌 곡선 형태를 띠는 것으로, 피어슨 상관계수로는 정확하게 포착되지 않는다.",
    "definition_en": "A relationship between two variables that follows a curved rather than straight-line pattern, which is not accurately captured by the Pearson correlation coefficient.",
    "significance": "Yerkes-Dodson 법칙(역U자형) 등 심리학의 많은 현상이 비선형적이므로, 산점도 확인과 적절한 분석 방법 선택이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "로버트 여키스",
        "name_en": "Robert M. Yerkes",
        "contribution": "Dodson과 함께 각성과 수행의 역U자형 관계를 발견하여 비선형 관계의 대표적 예를 제시했다."
      },
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "탐색적 자료분석에서 비선형 패턴의 시각적 진단 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      },
      {
        "name_ko": "스피어만 순위상관",
        "name_en": "Spearman Rank Correlation",
        "id": "CORR_SR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      }
    ],
    "sub_types": [
      {
        "name": "이차 관계 (Quadratic)",
        "description": "U자형 또는 역U자형의 포물선 관계"
      },
      {
        "name": "로그 관계 (Logarithmic)",
        "description": "초기에 급격히 변하다가 점차 완만해지는 관계"
      },
      {
        "name": "지수 관계 (Exponential)",
        "description": "점차 가속되어 변화하는 관계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Non-Linear = 직선(Linear)이 아닌 → r이 낮아도 강한 관계가 있을 수 있다",
      "differential": "선형 관계에서는 피어슨 r이 적합하지만, 비선형에서는 에타(η)나 다항회귀 등이 더 적합하다.",
      "key_point": "피어슨 r = 0이라도 완벽한 비선형 관계(예: 완벽한 U자형)가 존재할 수 있으므로 항상 산점도를 확인한다.",
      "common_mistake": "모든 관계가 선형이라고 가정하고 피어슨 상관만 보고하면 비선형 관계를 완전히 놓칠 수 있다."
    }
  },
  {
    "id": "CORR_AT_010",
    "terminology": "감쇠 보정 (Correction for Attenuation)",
    "terminology_ko": "감쇠 보정",
    "terminology_en": "Correction for Attenuation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "측정의 불완전한 신뢰도로 인해 과소추정된 상관계수를 두 측정도구의 신뢰도를 이용하여 교정하는 공식이다.",
    "definition_en": "A formula that corrects the underestimated correlation coefficient caused by imperfect measurement reliability, using the reliability coefficients of both instruments.",
    "significance": "완벽하게 신뢰로운 측정이 불가능한 심리학 연구에서 구성개념 간 진정한 상관의 크기를 추정할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "1904년에 감쇠 보정 공식을 개발하여 측정오차가 상관을 과소추정하는 문제를 해결했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      },
      {
        "name_ko": "제한 범위 효과",
        "name_en": "Restriction of Range",
        "id": "CORR_RR_022"
      },
      {
        "name_ko": "공유분산",
        "name_en": "Shared Variance",
        "id": "CORR_SV_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "r_corrected = r_xy / √(r_xx × r_yy) → 관찰된 상관을 신뢰도로 나누어 '복원'",
      "differential": "감쇠 보정은 신뢰도에 의한 과소추정을, 제한 범위 교정은 표본 범위 제한에 의한 과소추정을 교정한다.",
      "key_point": "교정된 상관은 1.0을 초과할 수 있는데, 이는 신뢰도 추정의 오류나 가정 위반을 시사한다.",
      "common_mistake": "감쇠 보정된 상관을 실제 관찰 상관처럼 해석하면 안 된다. 이는 이론적 추정치이지 관찰된 값이 아니다."
    }
  },
  {
    "id": "CORR_BS_011",
    "terminology": "양이연상관 (Biserial Correlation)",
    "terminology_ko": "양이연상관",
    "terminology_en": "Biserial Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "본래 연속적인 변인을 인위적으로 이분화한 변인과 다른 연속변인 간의 상관을 추정하는 계수로, 이분화 전 원래의 상관을 복원한다.",
    "definition_en": "A correlation coefficient estimating the relationship between an artificially dichotomized continuous variable and another continuous variable, recovering the original correlation before dichotomization.",
    "significance": "합격/불합격 등 인위적 이분화 상황에서 원래의 연속적 관계를 추정할 수 있어 문항분석과 선발 연구에 활용된다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "이분화된 변인에 대한 상관 추정 방법의 수학적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "점이연상관",
        "name_en": "Point-Biserial Correlation",
        "id": "CORR_PB_004"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "파이계수",
        "name_en": "Phi Coefficient",
        "id": "CORR_PH_013"
      },
      {
        "name_ko": "감쇠 보정",
        "name_en": "Correction for Attenuation",
        "id": "CORR_AT_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Biserial = 이연(二連) → 인위적으로 두 개로 나눈 것의 원래 상관을 복원",
      "differential": "점이연상관은 진정한 이분변인에, 양이연상관은 인위적으로 이분화된 변인에 사용한다.",
      "key_point": "양이연상관은 점이연상관보다 항상 크며, 이론적으로 ±1.0을 초과할 수 있다.",
      "common_mistake": "점이연상관과 양이연상관을 구별하지 않고 사용하면, 진정한 이분변인에서 상관을 과대추정하게 된다."
    }
  },
  {
    "id": "CORR_KT_012",
    "terminology": "켄달의 타우 (Kendall's Tau)",
    "terminology_ko": "켄달의 타우",
    "terminology_en": "Kendall's Tau",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인의 순위 쌍에서 일치 쌍과 불일치 쌍의 비율로 단조적 관계를 측정하는 비모수 상관계수이다.",
    "definition_en": "A nonparametric correlation coefficient that measures monotonic association based on the ratio of concordant to discordant pairs of rankings between two variables.",
    "significance": "스피어만 상관보다 표본 크기가 작을 때 더 정확하며, 동순위가 많은 서열 데이터에서 신뢰할 수 있는 추정치를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "모리스 켄달",
        "name_en": "Maurice G. Kendall",
        "contribution": "1938년에 타우(τ) 계수를 개발하고, 순위상관의 수학적 성질과 검정 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스피어만 순위상관",
        "name_en": "Spearman Rank Correlation",
        "id": "CORR_SR_002"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "비선형 관계",
        "name_en": "Nonlinear Relationship",
        "id": "CORR_NL_009"
      }
    ],
    "sub_types": [
      {
        "name": "타우-a (Tau-a)",
        "description": "동순위를 고려하지 않는 기본 공식"
      },
      {
        "name": "타우-b (Tau-b)",
        "description": "동순위를 보정하며 정방 교차표에 적합"
      },
      {
        "name": "타우-c (Tau-c)",
        "description": "행과 열의 수가 다른 직사각 교차표에 적합"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Kendall's τ = (일치쌍 - 불일치쌍) / 총 쌍수 → 순서 일치의 비율",
      "differential": "스피어만은 순위 차이의 제곱합을, 켄달은 일치/불일치 쌍의 비율을 사용한다. 스피어만이 보통 더 큰 값을 준다.",
      "key_point": "소표본에서 스피어만보다 통계적 성질이 우수하며, 신뢰구간의 추정이 더 정확하다.",
      "common_mistake": "켄달의 타우가 스피어만보다 항상 작다고 단순히 비교하면 안 된다. 두 계수는 다른 척도를 사용한다."
    }
  },
  {
    "id": "CORR_PH_013",
    "terminology": "파이계수 (Phi Coefficient)",
    "terminology_ko": "파이계수",
    "terminology_en": "Phi Coefficient",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 이분변인 간의 상관관계를 측정하는 계수로, 2×2 교차표에서 피어슨 상관계수를 적용한 것과 동일한 결과를 준다.",
    "definition_en": "A correlation coefficient measuring the association between two dichotomous variables, equivalent to applying the Pearson correlation to a 2×2 contingency table.",
    "significance": "문항 간 관련성 분석, 진단 정확도 평가 등 이분변인이 결합된 연구 상황에서 효과 크기로도 활용된다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "교차표에서의 관련성 측정을 위한 수학적 기초를 마련했다."
      },
      {
        "name_ko": "유헌 율",
        "name_en": "George Udny Yule",
        "contribution": "연관계수(coefficient of association)의 개념을 발전시켜 파이계수와 관련된 이론을 구축했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "크래머의 V",
        "name_en": "Cramér's V",
        "id": "CORR_CV2_014"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "점이연상관",
        "name_en": "Point-Biserial Correlation",
        "id": "CORR_PB_004"
      },
      {
        "name_ko": "양이연상관",
        "name_en": "Biserial Correlation",
        "id": "CORR_BS_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "φ(phi) = √(χ²/N) → 2×2 표의 카이제곱을 표본 크기로 나눠서 제곱근",
      "differential": "파이계수는 2×2 교차표 전용이고, 크래머의 V는 더 큰 교차표에도 적용 가능한 일반화 버전이다.",
      "key_point": "φ = 0이면 두 이분변인이 독립적이고, φ = ±1이면 완벽한 관련이 있다.",
      "common_mistake": "파이계수를 3×3 이상의 교차표에 적용하면 최대값이 1에 도달하지 못하므로 크래머의 V를 사용해야 한다."
    }
  },
  {
    "id": "CORR_CV2_014",
    "terminology": "크래머의 V (Cramér's V)",
    "terminology_ko": "크래머의 V",
    "terminology_en": "Cramér's V",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 범주형 변인 간의 관련성 강도를 측정하는 계수로, 2×2보다 큰 교차표에서도 0과 1 사이의 값을 취하도록 파이계수를 일반화한 것이다.",
    "definition_en": "A coefficient measuring the strength of association between two categorical variables, generalizing the phi coefficient to produce values between 0 and 1 for contingency tables larger than 2×2.",
    "significance": "범주형 변인 간의 관련성을 효과 크기로 보고할 때 표준적으로 사용되며, 교차표의 크기에 관계없이 비교 가능한 지표를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "하랄드 크래머",
        "name_en": "Harald Cramér",
        "contribution": "1946년에 카이제곱에 기반한 일반화된 관련성 측도(V)를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "파이계수",
        "name_en": "Phi Coefficient",
        "id": "CORR_PH_013"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "V = √(χ²/(N×(k-1))), k = min(행수, 열수) → 파이의 일반화 버전",
      "differential": "파이계수는 2×2 전용이고 음수 가능, 크래머의 V는 모든 크기의 교차표에 적용 가능하며 항상 0 이상이다.",
      "key_point": "V = 0은 완전 독립, V = 1은 완전 관련. Cohen의 기준: .10(소), .30(중), .50(대).",
      "common_mistake": "크래머의 V를 인과관계의 증거로 해석하거나, 서로 다른 크기의 교차표에서 V값을 단순 비교하는 오류가 있다."
    }
  },
  {
    "id": "CORR_BPC_015",
    "terminology": "부분상관 (Part Correlation)",
    "terminology_ko": "부분상관",
    "terminology_en": "Part Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "제3변인의 영향을 한쪽 변인에서만 제거한 후 두 변인 간의 상관을 구하는 방법으로, 반편상관(semi-partial correlation)이라고도 한다.",
    "definition_en": "A method that computes the correlation between two variables after removing the influence of a third variable from only one of them, also called semi-partial correlation.",
    "significance": "다중회귀에서 각 예측변인의 고유한 기여분(sr²)을 산출하는 데 사용되며, R²의 증가분을 직접 나타낸다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "편상관과 반편상관의 수학적 관계를 정립했다."
      },
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara G. Tabachnick",
        "contribution": "다변량 통계 교재에서 반편상관의 실용적 해석 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Semi-partial = 반(半)편상관 → 한쪽만 통제, sr²이 R²의 증가분",
      "differential": "편상관은 제3변인을 양쪽에서 제거하고, 반편상관은 한쪽에서만 제거한다. 반편상관이 항상 더 작다.",
      "key_point": "sr²(반편상관의 제곱)은 해당 예측변인이 전체 R²에 고유하게 기여하는 분산의 비율을 나타낸다.",
      "common_mistake": "편상관과 반편상관을 혼동하여 R²의 증가분을 잘못 계산하는 경우가 있다."
    }
  },
  {
    "id": "CORR_SP2_016",
    "terminology": "반편상관 (Semi-partial Correlation)",
    "terminology_ko": "반편상관",
    "terminology_en": "Semi-partial Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "하나의 변인에서만 제3변인의 영향을 제거한 후 나머지 변인과의 상관을 구하는 방법으로, 부분상관(part correlation)과 동일한 개념이다.",
    "definition_en": "A method that removes the influence of a third variable from only one variable before computing its correlation with the other, identical to part correlation.",
    "significance": "다중회귀에서 각 예측변인의 독자적 설명력을 R²의 증가분으로 직접 표현할 수 있어, 변인의 상대적 중요성 평가에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara G. Tabachnick",
        "contribution": "다변량 통계분석에서 반편상관의 해석과 보고 방법을 표준화했다."
      },
      {
        "name_ko": "린다 피델",
        "name_en": "Linda S. Fidell",
        "contribution": "Tabachnick과 공저하여 반편상관의 실용적 적용 지침을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "부분상관",
        "name_en": "Part Correlation",
        "id": "CORR_BPC_015"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Semi(반) + Partial(편) = 반편상관 = Part correlation → 한쪽만 편(偏)하게 통제",
      "differential": "편상관(partial)은 양쪽 변인에서 제3변인을 제거, 반편상관(semi-partial)은 한쪽에서만 제거한다.",
      "key_point": "sr² = ΔR²로, 해당 변인이 회귀모형에 추가될 때 R²의 증가분과 정확히 일치한다.",
      "common_mistake": "편상관의 제곱(pr²)을 R²의 증가분으로 해석하는 오류가 있다. R²의 증가분은 sr²이다."
    }
  },
  {
    "id": "CORR_CM_017",
    "terminology": "상관행렬 (Correlation Matrix)",
    "terminology_ko": "상관행렬",
    "terminology_en": "Correlation Matrix",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "여러 변인 간의 모든 쌍별 상관계수를 행렬 형태로 정리한 것으로, 대각선은 항상 1이며 대칭행렬이다.",
    "definition_en": "A matrix organizing all pairwise correlation coefficients among multiple variables, with diagonal elements always equal to 1 and the matrix being symmetric.",
    "significance": "요인분석, 구조방정식 모형 등 다변량 분석의 출발점이며, 변인 간 관계의 전체적 패턴을 한눈에 파악할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "다변량 상관의 행렬 표현 방식을 도입하여 다변량 통계학의 기초를 마련했다."
      },
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "상관행렬의 패턴에서 요인을 추출하는 요인분석을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "공분산",
        "name_en": "Covariance",
        "id": "CORR_CV_018"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "n개 변인이면 n×n 행렬, 대각선=1, 상삼각=하삼각(대칭)",
      "differential": "상관행렬은 표준화된 관계(r)를 담고, 공분산행렬은 비표준화된 관계(cov)를 담는다.",
      "key_point": "상관행렬에서 높은 상관 쌍은 다중공선성의 징후이며, 요인분석에서는 적절한 수준의 상관이 필요하다.",
      "common_mistake": "상관행렬에서 유의한 상관만 강조하고 유의하지 않은 상관의 의미를 무시하는 경향이 있다."
    }
  },
  {
    "id": "CORR_CV_018",
    "terminology": "공분산 (Covariance)",
    "terminology_ko": "공분산",
    "terminology_en": "Covariance",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인이 함께 변동하는 정도를 나타내는 비표준화 측도로, 각 변인의 편차 곱의 평균이며 상관계수 산출의 기초가 된다.",
    "definition_en": "An unstandardized measure of the degree to which two variables vary together, calculated as the average of the products of deviations, serving as the basis for computing the correlation coefficient.",
    "significance": "상관계수의 수학적 기초이며, 포트폴리오 이론과 구조방정식 모형 등에서 변인 간 관계를 표현하는 핵심 통계량이다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "공분산을 표준화하여 상관계수를 도출하는 방법을 수학적으로 정립했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "공분산의 통계적 성질과 추정 방법을 정리하여 분산분석과의 연결을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      },
      {
        "name_ko": "상관행렬",
        "name_en": "Correlation Matrix",
        "id": "CORR_CM_017"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "cov(X,Y) = Σ(X-M_x)(Y-M_y)/(n-1) → 편차의 교차곱 평균",
      "differential": "공분산은 측정 단위에 의존하여 해석이 어렵고, 상관계수는 표준화되어(-1~+1) 해석이 용이하다.",
      "key_point": "r = cov(X,Y) / (SD_x × SD_y)이므로, 상관계수는 공분산을 표준편차로 나눈 표준화 버전이다.",
      "common_mistake": "공분산의 크기로 관계의 강도를 판단하려 하지만, 측정 단위에 따라 달라지므로 직접 비교가 불가능하다."
    }
  },
  {
    "id": "CORR_SV_019",
    "terminology": "공유분산 (Shared Variance)",
    "terminology_ko": "공유분산",
    "terminology_en": "Shared Variance",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인이 공유하는 분산의 비율로, 상관계수의 제곱(r²)으로 표현되며 한 변인의 변동 중 다른 변인으로 설명되는 부분을 의미한다.",
    "definition_en": "The proportion of variance shared between two variables, expressed as the square of the correlation coefficient (r²), representing the portion of variability in one variable explained by the other.",
    "significance": "상관의 실질적 크기를 해석하는 데 핵심적이며, Venn 다이어그램으로 시각화하여 변인 간 중복 설명력을 직관적으로 이해할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "상관의 제곱이 공유분산 비율을 나타냄을 증명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공유분산 = r² → Venn 다이어그램의 겹치는 영역",
      "differential": "공유분산은 두 변인의 겹치는 설명력이고, 고유분산은 각 변인의 독자적 설명력이다.",
      "key_point": "r = .50이면 공유분산은 .25(25%)에 불과하므로, 상관계수의 크기를 과대해석하지 않아야 한다.",
      "common_mistake": "r = .70을 '70% 공유'로 해석하지만 실제 공유분산은 r² = .49(49%)이다."
    }
  },
  {
    "id": "CORR_PO_020",
    "terminology": "양의 상관 (Positive Correlation)",
    "terminology_ko": "양의 상관",
    "terminology_en": "Positive Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "한 변인의 값이 증가할 때 다른 변인의 값도 함께 증가하는 관계로, 상관계수가 0보다 큰 값(r > 0)을 가진다.",
    "definition_en": "A relationship where an increase in one variable is associated with an increase in the other, with the correlation coefficient having a positive value (r > 0).",
    "significance": "심리학에서 자존감과 학업성취, 연습량과 수행 수준 등 많은 변인 쌍이 양의 상관을 보이며, 이론적 예측의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모와 자녀의 키 간 양의 상관을 발견하여 상관 개념의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음의 상관",
        "name_en": "Negative Correlation",
        "id": "CORR_NG_021"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      },
      {
        "name_ko": "공분산",
        "name_en": "Covariance",
        "id": "CORR_CV_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "양(+)의 상관 = 같은 방향으로 변화 → 하나 ↑이면 다른 것도 ↑",
      "differential": "양의 상관은 같은 방향으로 공변하고, 음의 상관은 반대 방향으로 공변한다. 강도는 절대값으로 비교한다.",
      "key_point": "산점도에서 점들이 왼쪽 아래에서 오른쪽 위로 올라가는 패턴을 보인다.",
      "common_mistake": "양의 상관이 항상 좋은 관계를 의미한다고 해석하지만, 가치 판단과 무관한 통계적 개념이다."
    }
  },
  {
    "id": "CORR_NG_021",
    "terminology": "음의 상관 (Negative Correlation)",
    "terminology_ko": "음의 상관",
    "terminology_en": "Negative Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "한 변인의 값이 증가할 때 다른 변인의 값이 감소하는 관계로, 상관계수가 0보다 작은 값(r < 0)을 가진다.",
    "definition_en": "A relationship where an increase in one variable is associated with a decrease in the other, with the correlation coefficient having a negative value (r < 0).",
    "significance": "불안과 수행(역U자형의 하강 부분), 스트레스와 면역 기능 등 심리학의 중요한 관계들이 음의 상관을 보인다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "상관의 방향성 개념을 처음 도입하여 양의 상관과 음의 상관을 구분했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양의 상관",
        "name_en": "Positive Correlation",
        "id": "CORR_PO_020"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      },
      {
        "name_ko": "공분산",
        "name_en": "Covariance",
        "id": "CORR_CV_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "음(-)의 상관 = 반대 방향으로 변화 → 하나 ↑이면 다른 것은 ↓",
      "differential": "음의 상관(-0.8)이 양의 상관(+0.3)보다 관계가 더 강할 수 있다. 강도는 부호가 아닌 절대값으로 판단한다.",
      "key_point": "산점도에서 점들이 왼쪽 위에서 오른쪽 아래로 내려가는 패턴을 보인다.",
      "common_mistake": "음의 상관이 양의 상관보다 약하다고 오해하지만, r = -.90은 r = .50보다 훨씬 강한 관계이다."
    }
  },
  {
    "id": "CORR_RR_022",
    "terminology": "제한 범위 효과 (Restriction of Range)",
    "terminology_ko": "제한 범위 효과",
    "terminology_en": "Restriction of Range",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "한 변인 또는 두 변인의 점수 범위가 인위적으로 제한되어 상관계수가 실제보다 과소추정되는 현상이다.",
    "definition_en": "A phenomenon where the artificial restriction of the score range on one or both variables causes the correlation coefficient to be underestimated compared to its true value.",
    "significance": "선발 연구, 상위 집단 대상 연구 등에서 흔히 발생하며, 상관의 과소추정을 인식하고 교정하는 것이 연구 해석에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "표본 범위 제한이 상관에 미치는 영향에 대한 수학적 분석을 수행했다."
      },
      {
        "name_ko": "리 손다이크",
        "name_en": "Robert L. Thorndike",
        "contribution": "선발 상황에서의 범위 제한 교정 공식을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "감쇠 보정",
        "name_en": "Correction for Attenuation",
        "id": "CORR_AT_010"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      }
    ],
    "sub_types": [
      {
        "name": "직접 범위 제한 (Direct Restriction)",
        "description": "상관에 포함된 변인 자체에 의해 범위가 제한되는 경우"
      },
      {
        "name": "간접 범위 제한 (Indirect Restriction)",
        "description": "제3변인에 의해 간접적으로 범위가 제한되는 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Range(범위)가 Restricted(제한)되면 r이 Reduced(감소)된다 → 3R",
      "differential": "제한 범위는 상관을 과소추정하게 하고, 이상치는 상관을 과대 또는 과소추정하게 한다.",
      "key_point": "예: 전체 지원자의 적성-직무수행 상관은 r=.50이지만, 합격자만 분석하면 r=.20으로 감소할 수 있다.",
      "common_mistake": "상위 집단에서 낮은 상관이 나오면 관계가 없다고 결론짓지만, 범위 제한의 영향일 수 있다."
    }
  },
  {
    "id": "CORR_OE_023",
    "terminology": "이상치 영향 (Outlier Effects on Correlation)",
    "terminology_ko": "이상치 영향",
    "terminology_en": "Outlier Effects on Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "극단적인 값을 가진 소수의 관측치가 상관계수를 크게 왜곡시키는 현상으로, 상관을 과대추정하거나 과소추정하게 할 수 있다.",
    "definition_en": "A phenomenon where a few observations with extreme values substantially distort the correlation coefficient, potentially inflating or deflating it.",
    "significance": "소표본에서 특히 영향이 크며, 산점도를 통한 시각적 검토와 강건한 상관 방법의 사용이 권장된다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 앤스콤",
        "name_en": "Frank Anscombe",
        "contribution": "동일한 상관계수를 가지지만 전혀 다른 패턴을 보이는 Anscombe 4중주(1973)를 고안하여 이상치 확인의 중요성을 입증했다."
      },
      {
        "name_ko": "존 투키",
        "name_en": "John W. Tukey",
        "contribution": "탐색적 자료분석에서 이상치 탐지와 처리 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      },
      {
        "name_ko": "스피어만 순위상관",
        "name_en": "Spearman Rank Correlation",
        "id": "CORR_SR_002"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "제한 범위 효과",
        "name_en": "Restriction of Range",
        "id": "CORR_RR_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Outlier 1개가 r을 .10에서 .80으로 바꿀 수도 있다 → 산점도 필수",
      "differential": "이상치는 상관을 양방향으로 왜곡할 수 있지만, 제한 범위는 주로 상관을 과소추정하게 한다.",
      "key_point": "Anscombe의 4중주는 동일한 r = .82를 가지면서도 선형, 비선형, 이상치, 영향점 등 전혀 다른 패턴을 보여준다.",
      "common_mistake": "이상치를 무조건 제거하면 된다고 생각하지만, 이상치가 실제 현상을 반영할 수 있으므로 신중한 판단이 필요하다."
    }
  },
  {
    "id": "CORR_TV_024",
    "terminology": "제3변인 문제 (Third Variable Problem)",
    "terminology_ko": "제3변인 문제",
    "terminology_en": "Third Variable Problem",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인 간의 관찰된 상관이 실제로는 두 변인 모두에 영향을 미치는 제3의 혼입변인에 의해 발생한 것일 가능성을 가리키는 문제이다.",
    "definition_en": "The possibility that the observed correlation between two variables is actually caused by a third confounding variable that influences both variables.",
    "significance": "상관연구에서 인과관계를 추론할 수 없는 핵심 이유이며, 편상관이나 실험설계를 통해 제3변인의 영향을 통제할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "내적 타당도 위협 요인으로서 제3변인의 역할을 체계적으로 분류했다."
      },
      {
        "name_ko": "토마스 쿡",
        "name_en": "Thomas D. Cook",
        "contribution": "Campbell과 함께 준실험 설계에서 제3변인 통제 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "허위상관",
        "name_en": "Spurious Correlation",
        "id": "CORR_SC_025"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causal Relationship",
        "id": "CORR_CA_008"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "아이스크림 판매와 범죄율의 상관 → 제3변인 = 기온(더운 날씨)",
      "differential": "제3변인 문제는 혼입변인에 의한 허위상관이고, 매개효과는 실제 인과 경로에 개재하는 변인의 영향이다.",
      "key_point": "상관관계에서 인과를 추론하지 못하는 이유 중 하나이며, 편상관으로 제3변인을 통계적으로 통제할 수 있다.",
      "common_mistake": "편상관으로 한두 개의 제3변인을 통제하면 인과관계가 확립된다고 생각하지만, 미확인된 다른 혼입변인이 있을 수 있다."
    }
  },
  {
    "id": "CORR_SC_025",
    "terminology": "허위상관 (Spurious Correlation)",
    "terminology_ko": "허위상관",
    "terminology_en": "Spurious Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인 간에 직접적 관계가 없음에도 제3변인의 영향으로 인해 나타나는 거짓된 상관관계이다.",
    "definition_en": "A false correlation observed between two variables that have no direct relationship, caused by the influence of a third variable.",
    "significance": "연구 결과의 잘못된 해석을 방지하기 위해 반드시 인식해야 하며, 편상관 분석이나 실험설계를 통해 검증할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "허위상관의 수학적 구조를 분석하고 이를 진정한 상관과 구별하는 방법을 제시했다."
      },
      {
        "name_ko": "허버트 사이먼",
        "name_en": "Herbert A. Simon",
        "contribution": "사회과학에서 허위상관과 인과모형의 관계를 분석하여 인과추론의 논리를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제3변인 문제",
        "name_en": "Third Variable Problem",
        "id": "CORR_TV_024"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causal Relationship",
        "id": "CORR_CA_008"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-hacking",
        "id": "ETHICS_PH_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Spurious = 가짜 → 제3변인이 만들어낸 '가짜 상관'",
      "differential": "허위상관은 제3변인으로 인한 인공적 관계이고, 억제변인은 실제 관계를 숨기는 변인이다.",
      "key_point": "제3변인을 통제(편상관)하면 상관이 사라지거나 크게 감소하면 허위상관의 증거가 된다.",
      "common_mistake": "모든 교란 상관이 허위상관이라고 단정하지만, 제3변인이 매개변인인 경우 실제 인과 경로일 수 있다."
    }
  },
  {
    "id": "CORR_MO_026",
    "terminology": "조절효과 (Moderation Effect)",
    "terminology_ko": "조절효과",
    "terminology_en": "Moderation Effect",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "독립변인과 종속변인 간의 관계 강도나 방향이 제3의 조절변인의 수준에 따라 달라지는 현상이다.",
    "definition_en": "A phenomenon where the strength or direction of the relationship between an independent and dependent variable changes depending on the level of a third moderator variable.",
    "significance": "심리학 이론의 경계조건을 밝히며, '언제' 또는 '누구에게' 효과가 나타나는지를 규명하여 이론의 정교화에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "로얼린 바론",
        "name_en": "Reuben M. Baron",
        "contribution": "Kenny와 함께 조절효과와 매개효과를 구분하는 체계적 가이드라인을 1986년에 제안했다."
      },
      {
        "name_ko": "데이비드 케니",
        "name_en": "David A. Kenny",
        "contribution": "Baron과 공동으로 조절변인과 매개변인의 개념적 차이와 분석 방법을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "매개효과",
        "name_en": "Mediation Effect",
        "id": "CORR_ME_027"
      },
      {
        "name_ko": "상호작용효과",
        "name_en": "Interaction Effect",
        "id": "ANOVA_IE_010"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조절(Moderation) = '언제/누구에게' → X→Y 관계의 강도가 M에 따라 달라진다",
      "differential": "조절변인은 X→Y 관계의 강도/방향을 변화시키고, 매개변인은 X→Y 관계의 과정/기제를 설명한다.",
      "key_point": "통계적으로는 독립변인×조절변인의 상호작용항이 유의한지를 위계적 회귀분석으로 검정한다.",
      "common_mistake": "조절효과와 매개효과를 혼동하거나, 상호작용항을 투입하지 않고 하위집단 분석만으로 조절효과를 검증하려는 오류가 있다."
    }
  },
  {
    "id": "CORR_ME_027",
    "terminology": "매개효과 (Mediation Effect)",
    "terminology_ko": "매개효과",
    "terminology_en": "Mediation Effect",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "독립변인이 매개변인을 거쳐 종속변인에 간접적으로 영향을 미치는 과정으로, X→M→Y의 인과 경로를 나타낸다.",
    "definition_en": "A process where the independent variable indirectly affects the dependent variable through an intervening mediator variable, representing the causal path X→M→Y.",
    "significance": "심리학 현상의 '어떻게'와 '왜'를 설명하는 기제를 밝히며, 이론 검증과 개입 전략 수립의 핵심 분석 방법이다.",
    "key_researchers": [
      {
        "name_ko": "로얼린 바론",
        "name_en": "Reuben M. Baron",
        "contribution": "Kenny와 함께 매개분석의 4단계 접근법을 1986년에 제안하여 심리학 매개분석의 표준을 확립했다."
      },
      {
        "name_ko": "앤드루 헤이스",
        "name_en": "Andrew F. Hayes",
        "contribution": "PROCESS 매크로를 개발하여 부트스트래핑 기반 매개효과 검정을 대중화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조절효과",
        "name_en": "Moderation Effect",
        "id": "CORR_MO_026"
      },
      {
        "name_ko": "편상관",
        "name_en": "Partial Correlation",
        "id": "CORR_PC_005"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "인과관계",
        "name_en": "Causal Relationship",
        "id": "CORR_CA_008"
      }
    ],
    "sub_types": [
      {
        "name": "완전매개 (Full Mediation)",
        "description": "매개변인 투입 후 직접효과가 0이 되는 경우"
      },
      {
        "name": "부분매개 (Partial Mediation)",
        "description": "매개변인 투입 후에도 직접효과가 유의하게 남는 경우"
      },
      {
        "name": "다중매개 (Multiple Mediation)",
        "description": "여러 매개변인이 동시에 작동하는 모형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "매개(Mediation) = '어떻게/왜' → X가 M을 변화시키고, M이 Y를 변화시킨다",
      "differential": "매개효과는 X→Y의 과정(기제)을 설명하고, 조절효과는 X→Y 관계의 조건(경계)을 설명한다.",
      "key_point": "현대 방법론에서는 Baron & Kenny 4단계보다 부트스트래핑 기반 간접효과 검정이 권장된다.",
      "common_mistake": "횡단 데이터로 매개효과를 분석하면서 인과관계를 주장하는 오류가 매우 흔하다. 매개분석은 종단 설계가 적합하다."
    }
  },
  {
    "id": "CORR_SU_028",
    "terminology": "억제변인 (Suppressor Variable)",
    "terminology_ko": "억제변인",
    "terminology_en": "Suppressor Variable",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "종속변인과 직접적 상관은 없지만 다른 예측변인의 비관련 분산을 제거하여 예측력을 높이는 변인으로, 투입 시 다른 변인의 회귀계수가 증가한다.",
    "definition_en": "A variable with no direct correlation with the criterion but that improves prediction by removing irrelevant variance from other predictors, causing their regression coefficients to increase when included.",
    "significance": "다중회귀에서 예측력이 예상치 못하게 증가하는 현상의 원인이며, 회귀계수의 부호가 상관의 부호와 반대인 경우를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "폴 호스트",
        "name_en": "Paul Horst",
        "contribution": "1941년에 억제변인의 개념을 처음 제안하고 예측 맥락에서의 역할을 설명했다."
      },
      {
        "name_ko": "데이비드 컨처",
        "name_en": "Daryl Conger",
        "contribution": "억제변인의 유형과 진단 방법을 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      },
      {
        "name_ko": "반편상관",
        "name_en": "Semi-partial Correlation",
        "id": "CORR_SP2_016"
      },
      {
        "name_ko": "허위상관",
        "name_en": "Spurious Correlation",
        "id": "CORR_SC_025"
      }
    ],
    "sub_types": [
      {
        "name": "고전적 억제변인 (Classical Suppressor)",
        "description": "준거와 상관이 0이지만 예측변인과는 상관이 있어 비관련 분산을 제거"
      },
      {
        "name": "부적 억제변인 (Negative Suppressor)",
        "description": "준거와 양의 상관이 있지만 회귀에서 음의 계수를 갖는 경우"
      },
      {
        "name": "상호 억제 (Reciprocal Suppression)",
        "description": "두 예측변인이 서로의 비관련 분산을 제거하여 모두의 계수가 증가"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Suppressor = 억제(抑制) → 다른 변인의 '잡음'을 억제하여 신호를 강화",
      "differential": "매개변인은 인과 경로 내에 있지만, 억제변인은 비관련 분산을 제거하는 통계적 역할을 한다.",
      "key_point": "회귀계수(β)가 영상관(r)보다 크거나 부호가 반대이면 억제효과를 의심해야 한다.",
      "common_mistake": "억제변인의 존재를 인식하지 못하고 직관에 반하는 회귀 결과를 오류로 치부하는 경우가 있다."
    }
  },
  {
    "id": "CORR_CL_029",
    "terminology": "교차지연 상관 (Cross-Lagged Correlation)",
    "terminology_ko": "교차지연 상관",
    "terminology_en": "Cross-Lagged Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인을 두 시점에서 측정하여, 시점 1의 X와 시점 2의 Y 간 상관과 시점 1의 Y와 시점 2의 X 간 상관을 비교함으로써 인과 방향을 추론하는 방법이다.",
    "definition_en": "A method that measures two variables at two time points and compares the cross-correlations (X₁→Y₂ vs. Y₁→X₂) to infer the direction of causality.",
    "significance": "종단 데이터에서 상관연구의 한계를 부분적으로 극복하고, 변인 간 인과 방향에 대한 단서를 제공하는 준실험적 방법이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 캠벨",
        "name_en": "Donald T. Campbell",
        "contribution": "교차지연 패널 설계의 논리와 인과추론에서의 역할을 체계화했다."
      },
      {
        "name_ko": "데이비드 케니",
        "name_en": "David A. Kenny",
        "contribution": "교차지연 패널 모형의 통계적 분석 방법과 한계를 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인과관계",
        "name_en": "Causal Relationship",
        "id": "CORR_CA_008"
      },
      {
        "name_ko": "자기상관",
        "name_en": "Autocorrelation",
        "id": "CORR_AC_030"
      },
      {
        "name_ko": "매개효과",
        "name_en": "Mediation Effect",
        "id": "CORR_ME_027"
      },
      {
        "name_ko": "제3변인 문제",
        "name_en": "Third Variable Problem",
        "id": "CORR_TV_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Cross(교차) + Lagged(지연) = 시간을 두고 교차하여 비교 → 인과 방향 추론",
      "differential": "동시적 상관은 같은 시점의 관계이고, 교차지연 상관은 서로 다른 시점 간의 관계로 시간 순서를 반영한다.",
      "key_point": "X₁→Y₂ 상관이 Y₁→X₂ 상관보다 유의하게 크면 X→Y 인과방향을 시사하지만, 제3변인의 가능성은 배제할 수 없다.",
      "common_mistake": "교차지연 상관만으로 확실한 인과관계를 주장할 수 있다고 생각하지만, 자기회귀 효과와 제3변인을 통제해야 한다."
    }
  },
  {
    "id": "CORR_AC_030",
    "terminology": "자기상관 (Autocorrelation)",
    "terminology_ko": "자기상관",
    "terminology_en": "Autocorrelation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "시계열 데이터에서 한 변인의 현재 값이 자신의 과거 값과 상관을 보이는 현상으로, 회귀분석의 잔차 독립성 가정을 위반한다.",
    "definition_en": "A phenomenon in time series data where a variable's current values are correlated with its own past values, violating the independence assumption of regression residuals.",
    "significance": "종단 연구나 반복측정 데이터에서 흔히 발생하며, 무시하면 표준오차가 과소추정되어 제1종 오류가 증가한다.",
    "key_researchers": [
      {
        "name_ko": "제임스 더빈",
        "name_en": "James Durbin",
        "contribution": "Watson과 함께 잔차의 자기상관을 검정하는 Durbin-Watson 검정을 개발했다."
      },
      {
        "name_ko": "제프리 왓슨",
        "name_en": "Geoffrey S. Watson",
        "contribution": "Durbin과 공동으로 자기상관 검정 통계량의 분포를 도출했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "교차지연 상관",
        "name_en": "Cross-Lagged Correlation",
        "id": "CORR_CL_029"
      },
      {
        "name_ko": "단순선형회귀",
        "name_en": "Simple Linear Regression",
        "id": "REGRESS_SLR_001"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "반복측정 분산분석",
        "name_en": "Repeated Measures ANOVA",
        "id": "ANOVA_RM_003"
      }
    ],
    "sub_types": [
      {
        "name": "양의 자기상관 (Positive Autocorrelation)",
        "description": "인접 시점의 잔차가 같은 부호를 가지는 경향"
      },
      {
        "name": "음의 자기상관 (Negative Autocorrelation)",
        "description": "인접 시점의 잔차가 반대 부호를 가지는 경향"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Auto(자기) + Correlation(상관) = 자기 자신의 과거와의 상관",
      "differential": "자기상관은 같은 변인의 시간 간 상관이고, 교차상관은 서로 다른 변인의 시간 간 상관이다.",
      "key_point": "Durbin-Watson 통계량이 2에 가까우면 자기상관 없음, 0에 가까우면 양의 자기상관, 4에 가까우면 음의 자기상관이다.",
      "common_mistake": "시계열 데이터에서 자기상관을 무시하고 일반 회귀분석을 적용하면 유의성이 과대평가된다."
    }
  },
  {
    "id": "CORR_ZR_031",
    "terminology": "영상관 (Zero Correlation)",
    "terminology_ko": "영상관",
    "terminology_en": "Zero Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "두 변인 간의 선형 관계가 없음을 나타내는 상관계수 값(r ≈ 0)으로, 비선형 관계가 존재할 가능성은 배제하지 않는다.",
    "definition_en": "A correlation coefficient value near zero (r ≈ 0) indicating the absence of a linear relationship, which does not rule out the possibility of a nonlinear relationship.",
    "significance": "영상관의 올바른 해석은 '선형 관계 없음'이지 '관계 없음'이 아니므로, 산점도를 통한 추가 확인이 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "카를 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "상관계수의 범위(-1~+1)를 정의하고 0의 의미를 수학적으로 명확히 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양의 상관",
        "name_en": "Positive Correlation",
        "id": "CORR_PO_020"
      },
      {
        "name_ko": "음의 상관",
        "name_en": "Negative Correlation",
        "id": "CORR_NG_021"
      },
      {
        "name_ko": "비선형 관계",
        "name_en": "Nonlinear Relationship",
        "id": "CORR_NL_009"
      },
      {
        "name_ko": "산점도",
        "name_en": "Scatterplot",
        "id": "CORR_SP_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "r = 0 ≠ 무관계. 완벽한 U자형 관계도 r = 0이 될 수 있다",
      "differential": "영상관은 선형 관계가 없다는 의미이고, 통계적으로 유의하지 않은 상관은 모집단 상관이 0이라는 증거가 부족하다는 의미이다.",
      "key_point": "r = 0이어도 에타(η)나 다항상관 등으로 비선형 관계가 발견될 수 있으므로 항상 산점도를 확인한다.",
      "common_mistake": "r = 0이면 두 변인이 완전히 독립적이라고 결론짓지만, 이는 선형 독립일 뿐 비선형 관계가 존재할 수 있다."
    }
  },
  {
    "id": "CORR_FZ_032",
    "terminology": "피셔 Z 변환 (Fisher's Z Transformation)",
    "terminology_ko": "피셔 Z 변환",
    "terminology_en": "Fisher's Z Transformation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "상관계수 r의 비대칭 분포를 정규분포에 근사시키기 위해 역쌍곡탄젠트 변환을 적용하는 방법으로, 상관계수의 비교와 신뢰구간 산출에 사용된다.",
    "definition_en": "A method that applies the inverse hyperbolic tangent transformation to normalize the skewed distribution of correlation coefficients, used for comparing correlations and computing confidence intervals.",
    "significance": "두 독립 표본의 상관계수를 비교하거나 상관의 신뢰구간을 구할 때 필수적인 변환으로, 메타분석에서도 표준적으로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "1921년에 상관계수의 표집분포 문제를 해결하기 위해 Z 변환을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Z_r = 0.5 × ln[(1+r)/(1-r)] → r을 정규분포로 변환하는 공식",
      "differential": "원래의 r은 표집분포가 비대칭이지만, Z_r은 거의 정규분포를 따르며 분산은 1/(n-3)이다.",
      "key_point": "두 상관계수를 비교할 때 r값을 직접 비교하지 말고, Z 변환 후 z검정으로 비교해야 한다.",
      "common_mistake": "두 표본의 상관계수를 직접 빼서 비교하는 오류가 있다. r의 표집분포가 비대칭이므로 Z 변환이 필요하다."
    }
  },
  {
    "id": "CORR_EC_033",
    "terminology": "생태학적 상관 (Ecological Correlation)",
    "terminology_ko": "생태학적 상관",
    "terminology_en": "Ecological Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "개인이 아닌 집단(지역, 국가 등)의 평균값을 사용하여 계산한 상관으로, 개인 수준의 상관보다 크게 나타나는 경향이 있다.",
    "definition_en": "A correlation computed using group-level averages (regions, nations) rather than individual data, which tends to be larger than the individual-level correlation.",
    "significance": "집단 수준의 상관을 개인 수준으로 일반화하는 생태학적 오류(ecological fallacy)를 이해하는 데 핵심적인 개념이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 로빈슨",
        "name_en": "William S. Robinson",
        "contribution": "1950년에 생태학적 상관과 개인 수준 상관의 차이를 체계적으로 분석하여 생태학적 오류를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "허위상관",
        "name_en": "Spurious Correlation",
        "id": "CORR_SC_025"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "제3변인 문제",
        "name_en": "Third Variable Problem",
        "id": "CORR_TV_024"
      },
      {
        "name_ko": "표본",
        "name_en": "Sample",
        "id": "SAMPLE_SM_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Ecological = 생태학적 → 집단(생태) 수준의 상관 ≠ 개인 수준의 상관",
      "differential": "생태학적 상관은 집단 평균을 사용하고, 개인 수준 상관은 개인 데이터를 사용한다. 전자가 보통 더 크다.",
      "key_point": "국가별 평균 소득과 평균 행복도의 높은 상관을 개인 수준의 소득-행복 관계로 직접 해석할 수 없다.",
      "common_mistake": "집단 수준의 높은 상관을 개인에게 일반화하는 생태학적 오류(ecological fallacy)는 매우 흔한 추론 오류이다."
    }
  },
  {
    "id": "CORR_TS_034",
    "terminology": "상관의 유의성 검정 (Significance Test of Correlation)",
    "terminology_ko": "상관의 유의성 검정",
    "terminology_en": "Significance Test of Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "표본에서 관찰된 상관계수가 모집단 상관이 0이라는 귀무가설 하에서 우연히 발생할 확률을 t분포를 이용하여 검정하는 절차이다.",
    "definition_en": "A procedure that tests whether the observed sample correlation could have occurred by chance under the null hypothesis that the population correlation is zero, using the t-distribution.",
    "significance": "관찰된 상관이 표집 오차에 의한 것인지 진정한 관계를 반영하는지를 통계적으로 판단하는 기본 절차이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "상관계수의 표집분포를 도출하고, t검정을 통한 유의성 검정 방법을 확립했다."
      },
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William Sealy Gosset",
        "contribution": "t분포를 발견하여 소표본에서의 상관 유의성 검정을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "t = r√(n-2) / √(1-r²), df = n-2 → 표본 크기가 클수록 작은 r도 유의",
      "differential": "유의성 검정은 r이 0과 다른지를, 피셔 Z 변환은 두 r이 서로 다른지를 검정한다.",
      "key_point": "표본이 크면 r = .10도 유의할 수 있지만, 실질적 의미(r² = .01)는 거의 없으므로 효과 크기를 함께 보고해야 한다.",
      "common_mistake": "유의한 상관을 곧 큰 상관이나 중요한 상관으로 해석하지만, 표본이 크면 작은 r도 유의할 수 있다."
    }
  },
  {
    "id": "CORR_CT_035",
    "terminology": "상관의 신뢰구간 (Confidence Interval for Correlation)",
    "terminology_ko": "상관의 신뢰구간",
    "terminology_en": "Confidence Interval for Correlation",
    "category": "CORR",
    "category_name": "상관분석 (Correlation Analysis)",
    "definition": "모집단 상관계수(ρ)가 포함될 것으로 추정되는 구간으로, Fisher Z 변환을 이용하여 산출하며 상관의 추정 정밀도를 나타낸다.",
    "definition_en": "An interval estimated to contain the population correlation coefficient (ρ), calculated using Fisher's Z transformation, indicating the precision of the correlation estimate.",
    "significance": "점추정치(r)만으로는 추정의 불확실성을 파악할 수 없으므로, 신뢰구간을 함께 보고하는 것이 APA 보고 지침에서 권장된다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald A. Fisher",
        "contribution": "Z 변환을 통해 상관계수의 신뢰구간 산출 방법을 가능하게 했다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "신뢰구간의 빈도주의적 해석 틀을 확립하여 상관의 구간추정에 적용했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피셔 Z 변환",
        "name_en": "Fisher's Z Transformation",
        "id": "CORR_FZ_032"
      },
      {
        "name_ko": "피어슨 상관계수",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "상관의 유의성 검정",
        "name_en": "Significance Test",
        "id": "CORR_TS_034"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Z_r ± 1.96/√(n-3) → Z 변환 후 구간 산출 → 역변환하여 r 단위로 환원",
      "differential": "유의성 검정은 ρ=0인지를 판단하고, 신뢰구간은 ρ의 가능한 범위를 추정하여 더 풍부한 정보를 제공한다.",
      "key_point": "신뢰구간이 0을 포함하지 않으면 유의한 상관이며, 구간의 폭이 좁을수록 추정이 정밀하다.",
      "common_mistake": "95% 신뢰구간을 '모집단 상관이 이 구간에 있을 확률이 95%'로 해석하지만, 올바른 해석은 반복 표집 시 95%의 구간이 ρ를 포함한다는 것이다."
    }
  }
];

TERMS_DATA.REGRESS = [
  {
    "id": "REGRESS_SLR_001",
    "terminology": "단순선형회귀 (Simple Linear Regression)",
    "terminology_ko": "단순선형회귀",
    "terminology_en": "Simple Linear Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "하나의 독립변인(예측변인)으로 하나의 종속변인(준거변인)을 예측하는 통계적 방법으로, 두 변인 간의 선형적 관계를 직선 방정식으로 모형화한다.",
    "definition_en": "A statistical method that uses a single independent variable (predictor) to predict a single dependent variable (criterion), modeling the linear relationship between two variables as a straight-line equation.",
    "significance": "심리학 연구에서 두 변인 간 인과적 예측 관계를 검증하는 가장 기본적인 방법으로, 상관에서 예측으로 나아가는 분석적 전환점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "평균으로의 회귀 개념을 최초로 발견하고 회귀분석의 기초를 마련했다."
      },
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "골턴의 아이디어를 수학적으로 공식화하여 현대 회귀분석의 통계적 틀을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단순(하나의 예측변인) + 선형(직선) + 회귀(예측)",
      "differential": "단순선형회귀는 예측변인이 1개이고, 다중회귀는 예측변인이 2개 이상이다.",
      "key_point": "Y = a + bX 형태의 직선 방정식으로 표현되며, b는 기울기, a는 절편이다.",
      "common_mistake": "상관이 높다고 반드시 회귀 예측이 정확한 것은 아니며, 인과관계를 의미하지도 않는다."
    }
  },
  {
    "id": "REGRESS_MR_002",
    "terminology": "다중회귀 (Multiple Regression)",
    "terminology_ko": "다중회귀",
    "terminology_en": "Multiple Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "두 개 이상의 독립변인(예측변인)을 동시에 사용하여 하나의 종속변인을 예측하는 회귀분석 방법으로, 각 예측변인의 고유한 기여도를 평가할 수 있다.",
    "definition_en": "A regression method that simultaneously uses two or more independent variables (predictors) to predict a single dependent variable, allowing evaluation of each predictor's unique contribution.",
    "significance": "심리학 현상은 단일 원인으로 설명되기 어려우므로, 다중회귀는 여러 심리적 변인의 상대적 영향력을 비교하고 복합적 예측 모형을 구축하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara Tabachnick",
        "contribution": "Linda Fidell과 함께 다변량 통계의 실용적 안내서를 저술하여 행동과학 연구에서 다중회귀 활용을 대중화했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "다중회귀에서의 효과크기, 검정력 분석, R² 해석 기준을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순선형회귀",
        "name_en": "Simple Linear Regression",
        "id": "REGRESS_SLR_001"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "REGRESS_MC_016"
      },
      {
        "name_ko": "위계적 회귀",
        "name_en": "Hierarchical Regression",
        "id": "REGRESS_HR_010"
      },
      {
        "name_ko": "표준화 회귀계수",
        "name_en": "Standardized Regression Coefficient",
        "id": "REGRESS_BETA_024"
      }
    ],
    "sub_types": [
      {
        "name": "동시입력법 (Enter/Simultaneous)",
        "description": "모든 예측변인을 한꺼번에 투입하는 방법"
      },
      {
        "name": "단계적 회귀 (Stepwise)",
        "description": "통계적 기준에 따라 변인을 자동 선택하는 방법"
      },
      {
        "name": "위계적 회귀 (Hierarchical)",
        "description": "이론적 근거에 따라 단계별로 변인을 투입하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "다중(Multiple) = 예측변인이 여러 개, 종속변인은 하나",
      "differential": "다중회귀는 종속변인이 1개이지만 예측변인이 여러 개이고, 다변량 회귀는 종속변인 자체가 여러 개이다.",
      "key_point": "각 예측변인의 고유 기여도(다른 변인 통제 후)를 평가할 수 있다는 것이 핵심이다.",
      "common_mistake": "예측변인을 많이 넣을수록 좋다고 오해하지만, 다중공선성 문제와 과적합 위험이 증가한다."
    }
  },
  {
    "id": "REGRESS_OLS_003",
    "terminology": "최소제곱법 (Ordinary Least Squares)",
    "terminology_ko": "최소제곱법",
    "terminology_en": "Ordinary Least Squares",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "관찰값과 예측값 간 차이(잔차)의 제곱합을 최소화하는 방식으로 회귀계수를 추정하는 방법으로, 회귀분석의 가장 기본적인 추정법이다.",
    "definition_en": "A method of estimating regression coefficients by minimizing the sum of squared differences (residuals) between observed and predicted values, serving as the most fundamental estimation technique in regression analysis.",
    "significance": "심리학 연구에서 사용되는 대부분의 회귀모형이 OLS에 기반하며, 데이터에 가장 적합한 직선(또는 평면)을 객관적으로 결정하는 수학적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "카를 프리드리히 가우스",
        "name_en": "Carl Friedrich Gauss",
        "contribution": "최소제곱법의 수학적 원리를 독립적으로 개발하고 정규분포와의 관계를 정립했다."
      },
      {
        "name_ko": "아드리앵마리 르장드르",
        "name_en": "Adrien-Marie Legendre",
        "contribution": "1805년 최소제곱법을 최초로 공식 출판하여 통계적 추정법의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "회귀선",
        "name_en": "Regression Line",
        "id": "REGRESS_RL_011"
      },
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "OLS = 잔차²의 합(Sum of Squared Residuals)을 '최소(Least)'로 만드는 방법",
      "differential": "최소제곱법은 잔차의 제곱합을 최소화하지만, 최대우도법(MLE)은 데이터가 관찰될 확률을 최대화한다.",
      "key_point": "잔차의 단순 합이 아닌 '제곱합'을 최소화하는 이유는 양수·음수 잔차가 상쇄되는 것을 방지하기 위함이다.",
      "common_mistake": "OLS가 항상 최선의 추정법이라고 오해하지만, 정규성·등분산성 등 가정이 위반되면 편향된 결과를 산출할 수 있다."
    }
  },
  {
    "id": "REGRESS_RC_004",
    "terminology": "회귀계수 (Regression Coefficient)",
    "terminology_ko": "회귀계수",
    "terminology_en": "Regression Coefficient",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀 방정식에서 독립변인이 한 단위 변화할 때 종속변인의 예측된 변화량을 나타내는 값으로, 변인 간 관계의 방향과 크기를 수량화한다.",
    "definition_en": "A value in a regression equation that represents the predicted change in the dependent variable for a one-unit change in the independent variable, quantifying the direction and magnitude of the relationship between variables.",
    "significance": "심리학 연구에서 특정 예측변인이 결과변인에 미치는 영향의 크기와 방향을 해석하는 핵심 지표로, 이론 검증과 실무적 의사결정의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모-자녀 키 연구에서 회귀 개념을 최초로 도입하며 회귀계수의 기초를 마련했다."
      },
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "회귀계수의 수학적 추정법과 표준오차 공식을 체계적으로 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준화 회귀계수",
        "name_en": "Standardized Regression Coefficient",
        "id": "REGRESS_BETA_024"
      },
      {
        "name_ko": "비표준화 회귀계수",
        "name_en": "Unstandardized Regression Coefficient",
        "id": "REGRESS_B_025"
      },
      {
        "name_ko": "기울기",
        "name_en": "Slope",
        "id": "REGRESS_SL_013"
      },
      {
        "name_ko": "절편",
        "name_en": "Intercept",
        "id": "REGRESS_INT_012"
      }
    ],
    "sub_types": [
      {
        "name": "비표준화 회귀계수 (B)",
        "description": "원래 측정 단위로 표현된 회귀계수"
      },
      {
        "name": "표준화 회귀계수 (β)",
        "description": "표준편차 단위로 변환한 회귀계수로, 변인 간 상대적 비교 가능"
      }
    ],
    "quiz_hints": {
      "mnemonic": "회귀계수 = X가 1 올라가면 Y가 얼마나 변하는가",
      "differential": "비표준화 회귀계수(B)는 원래 단위의 변화량이고, 표준화 회귀계수(β)는 표준편차 단위로 상대적 비교가 가능하다.",
      "key_point": "회귀계수의 부호(+/-)는 관계의 방향을, 절대값은 관계의 크기를 나타낸다.",
      "common_mistake": "회귀계수가 크다고 반드시 중요한 변인이라고 해석하면 안 되며, 측정 단위에 따라 크기가 달라지므로 표준화 계수로 비교해야 한다."
    }
  },
  {
    "id": "REGRESS_RES_005",
    "terminology": "잔차 (Residual)",
    "terminology_ko": "잔차",
    "terminology_en": "Residual",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "관찰된 종속변인의 실제값과 회귀모형에 의해 예측된 값 간의 차이로, 모형이 설명하지 못한 오차를 나타낸다.",
    "definition_en": "The difference between the observed actual value and the predicted value of the dependent variable from the regression model, representing the error unexplained by the model.",
    "significance": "잔차 분석은 회귀모형의 적합도와 가정 충족 여부를 진단하는 핵심 도구로, 심리학 연구의 결과 해석 타당성을 검증하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 앤스콤",
        "name_en": "Frank Anscombe",
        "contribution": "앤스콤의 사분면(Anscombe's quartet)을 통해 잔차 분석과 시각적 진단의 중요성을 입증했다."
      },
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "탐색적 자료 분석(EDA)과 잔차 진단 기법을 발전시켜 잔차 분석의 실용적 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차분석",
        "name_en": "Residual Analysis",
        "id": "REGRESS_RA_015"
      },
      {
        "name_ko": "최소제곱법",
        "name_en": "Ordinary Least Squares",
        "id": "REGRESS_OLS_003"
      },
      {
        "name_ko": "예측값",
        "name_en": "Predicted Value",
        "id": "REGRESS_PV_014"
      },
      {
        "name_ko": "추정의 표준오차",
        "name_en": "Standard Error of Estimate",
        "id": "REGRESS_SEE_007"
      }
    ],
    "sub_types": [
      {
        "name": "원잔차 (Raw Residual)",
        "description": "관찰값과 예측값의 단순 차이"
      },
      {
        "name": "표준화 잔차 (Standardized Residual)",
        "description": "잔차를 표준편차로 나눈 값"
      },
      {
        "name": "스튜던트화 잔차 (Studentized Residual)",
        "description": "각 관찰치의 영향력을 고려하여 조정된 잔차"
      }
    ],
    "quiz_hints": {
      "mnemonic": "잔차 = 실제값(Y) - 예측값(Ŷ), 즉 모형이 '남긴(잔)' 차이",
      "differential": "잔차(residual)는 표본에서 관찰된 오차이고, 오차(error)는 모집단 수준의 이론적 개념이다.",
      "key_point": "잔차의 정규성, 등분산성, 독립성은 회귀분석의 핵심 가정이며, 이를 진단하는 것이 잔차분석이다.",
      "common_mistake": "잔차가 0에 가깝다고 모형이 좋은 것이 아니라, 잔차의 패턴(무선성)을 확인해야 한다."
    }
  },
  {
    "id": "REGRESS_R2_006",
    "terminology": "결정계수 (Coefficient of Determination, R²)",
    "terminology_ko": "결정계수",
    "terminology_en": "Coefficient of Determination",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "종속변인의 전체 변동 중 회귀모형에 의해 설명되는 비율을 나타내는 값으로, 0에서 1 사이의 값을 가지며 모형의 설명력을 나타낸다.",
    "definition_en": "A value representing the proportion of total variance in the dependent variable that is explained by the regression model, ranging from 0 to 1 and indicating the model's explanatory power.",
    "significance": "심리학 연구에서 독립변인이 종속변인을 얼마나 잘 설명하는지를 직관적으로 보여주는 효과크기 지표로, 연구 결과의 실질적 의미를 평가하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "시월 라이트",
        "name_en": "Sewall Wright",
        "contribution": "경로분석을 개발하면서 결정계수의 분해와 해석 방법을 체계화했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "R²의 효과크기 해석 기준(작은 .02, 중간 .13, 큰 .26)을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수정된 R제곱",
        "name_en": "Adjusted R-squared",
        "id": "REGRESS_AR2_027"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "EFFECT_R2_008"
      },
      {
        "name_ko": "F검정",
        "name_en": "F-test",
        "id": "REGRESS_FT_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "R² = 설명된 분산 / 전체 분산, 피어슨 r을 제곱하면 R²",
      "differential": "R²는 모형 전체의 설명력이고, 편상관의 제곱(sr²)은 개별 예측변인의 고유 설명력이다.",
      "key_point": "R² = .25이면 종속변인 분산의 25%를 모형이 설명한다는 뜻이다.",
      "common_mistake": "R²가 높다고 반드시 좋은 모형이 아니며, 예측변인을 추가하면 항상 증가하므로 수정된 R²를 함께 확인해야 한다."
    }
  },
  {
    "id": "REGRESS_SEE_007",
    "terminology": "추정의 표준오차 (Standard Error of Estimate)",
    "terminology_ko": "추정의 표준오차",
    "terminology_en": "Standard Error of Estimate",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀모형의 예측값을 중심으로 실제 관찰값이 흩어져 있는 정도를 나타내는 지표로, 잔차의 표준편차와 유사한 개념이다.",
    "definition_en": "A measure of the spread of observed values around the predicted values of a regression model, conceptually similar to the standard deviation of residuals.",
    "significance": "심리학 연구에서 회귀 예측의 정밀도를 평가하는 기준으로, 값이 작을수록 모형의 예측이 정확함을 의미하여 연구 결과의 신뢰성을 판단하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "회귀분석에서 추정의 표준오차 공식을 발전시키고 예측 정확도 평가 방법을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SEE(S_est) = 회귀선 주변으로 데이터가 얼마나 퍼져있는지를 보는 것",
      "differential": "표준오차(SE)는 표본통계량의 변동성이고, 추정의 표준오차(SEE)는 회귀 예측값 주변의 변동성이다.",
      "key_point": "R²가 1에 가까울수록 추정의 표준오차는 0에 가까워진다.",
      "common_mistake": "추정의 표준오차와 회귀계수의 표준오차를 혼동하는 경우가 많은데, 전자는 모형 전체의 예측 정확도, 후자는 개별 계수의 불확실성이다."
    }
  },
  {
    "id": "REGRESS_LR_008",
    "terminology": "로지스틱 회귀 (Logistic Regression)",
    "terminology_ko": "로지스틱 회귀",
    "terminology_en": "Logistic Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "종속변인이 이분형(예/아니오)이거나 범주형일 때 사용하는 회귀분석 방법으로, 특정 범주에 속할 확률을 로짓 함수를 통해 예측한다.",
    "definition_en": "A regression method used when the dependent variable is dichotomous or categorical, predicting the probability of belonging to a particular category through the logit function.",
    "significance": "심리학에서 진단 여부, 치료 성공/실패, 행동 선택 등 이분형 결과를 예측하는 연구에서 널리 사용되며, 임상 의사결정 모형 구축에 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 콕스",
        "name_en": "David Cox",
        "contribution": "1958년 로지스틱 회귀를 통계적 방법으로 체계화하고 최대우도 추정법을 적용했다."
      },
      {
        "name_ko": "조셉 버크슨",
        "name_en": "Joseph Berkson",
        "contribution": "로짓 함수를 제안하여 로지스틱 회귀의 수학적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순선형회귀",
        "name_en": "Simple Linear Regression",
        "id": "REGRESS_SLR_001"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [
      {
        "name": "이항 로지스틱 회귀 (Binary Logistic Regression)",
        "description": "종속변인이 2개 범주인 경우"
      },
      {
        "name": "다항 로지스틱 회귀 (Multinomial Logistic Regression)",
        "description": "종속변인이 3개 이상 범주인 경우"
      },
      {
        "name": "순서 로지스틱 회귀 (Ordinal Logistic Regression)",
        "description": "종속변인이 순서형 범주인 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "로지스틱 = '예/아니오'를 예측, S자 곡선(시그모이드 함수) 사용",
      "differential": "선형회귀는 연속형 종속변인을 예측하지만, 로지스틱 회귀는 범주형 종속변인의 소속 확률을 예측한다.",
      "key_point": "결과가 확률(0~1)로 산출되며, OLS 대신 최대우도추정법(MLE)으로 계수를 추정한다.",
      "common_mistake": "로지스틱 '회귀'라는 이름이지만, 실제로는 분류(classification) 기법에 더 가깝다."
    }
  },
  {
    "id": "REGRESS_SW_009",
    "terminology": "단계적 회귀 (Stepwise Regression)",
    "terminology_ko": "단계적 회귀",
    "terminology_en": "Stepwise Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "통계적 기준(예: F값, p값)에 따라 예측변인을 자동으로 모형에 추가하거나 제거하면서 최적의 예측변인 조합을 탐색하는 회귀분석 방법이다.",
    "definition_en": "A regression method that automatically adds or removes predictors from the model based on statistical criteria (e.g., F-value, p-value) to find the optimal combination of predictor variables.",
    "significance": "탐색적 연구에서 다수의 잠재적 예측변인 중 유의한 변인을 선별하는 데 활용되나, 이론적 근거 없는 자동 선택의 한계로 확인적 연구에서는 신중하게 사용해야 한다.",
    "key_researchers": [
      {
        "name_ko": "노먼 드레이퍼",
        "name_en": "Norman Draper",
        "contribution": "Harry Smith과 함께 단계적 회귀를 포함한 변인 선택 방법론을 체계적으로 정리했다."
      },
      {
        "name_ko": "프랭크 해럴",
        "name_en": "Frank Harrell",
        "contribution": "단계적 회귀의 과적합 문제와 대안적 방법론을 비판적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위계적 회귀",
        "name_en": "Hierarchical Regression",
        "id": "REGRESS_HR_010"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      }
    ],
    "sub_types": [
      {
        "name": "전진선택법 (Forward Selection)",
        "description": "가장 유의한 변인부터 하나씩 추가"
      },
      {
        "name": "후진제거법 (Backward Elimination)",
        "description": "모든 변인을 넣고 유의하지 않은 변인부터 제거"
      },
      {
        "name": "단계선택법 (Stepwise)",
        "description": "전진선택과 후진제거를 결합한 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "단계적 = 컴퓨터가 '단계별로' 변인을 넣고 빼면서 최적 조합 탐색",
      "differential": "단계적 회귀는 통계적 기준으로 자동 선택하지만, 위계적 회귀는 연구자가 이론적 근거로 투입 순서를 결정한다.",
      "key_point": "탐색적 목적에 유용하지만, 표본에 과적합될 위험이 있어 교차 타당화가 필요하다.",
      "common_mistake": "단계적 회귀로 선택된 모형이 '최적'이라고 오해하지만, 이는 표본 특수적 결과일 수 있다."
    }
  },
  {
    "id": "REGRESS_HR_010",
    "terminology": "위계적 회귀 (Hierarchical Regression)",
    "terminology_ko": "위계적 회귀",
    "terminology_en": "Hierarchical Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "연구자가 이론적 근거에 따라 예측변인을 단계별로 투입하여 각 단계에서 추가되는 설명력(ΔR²)의 유의성을 검증하는 회귀분석 방법이다.",
    "definition_en": "A regression method in which the researcher enters predictors in steps based on theoretical rationale, testing the significance of the additional explanatory power (ΔR²) at each step.",
    "significance": "심리학 연구에서 통제변인을 먼저 투입한 후 관심변인의 고유한 추가 설명력을 검증하는 데 널리 사용되며, 이론 주도적 분석 방법으로 평가된다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "ΔR²를 이용한 위계적 검증 방법과 효과크기 해석 체계를 확립했다."
      },
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara Tabachnick",
        "contribution": "위계적 회귀의 실용적 적용 지침과 단계적 회귀와의 차이점을 명확히 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단계적 회귀",
        "name_en": "Stepwise Regression",
        "id": "REGRESS_SW_009"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "조절회귀",
        "name_en": "Moderated Regression",
        "id": "REGRESS_MOD_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "위계적 = 연구자가 '이론적 순서'에 따라 블록별로 변인을 투입",
      "differential": "위계적 회귀는 연구자의 이론적 판단으로 투입 순서를 결정하고, 단계적 회귀는 통계적 기준으로 자동 결정한다.",
      "key_point": "각 단계에서 ΔR²(R² 변화량)의 유의성을 F변화량 검정으로 확인하는 것이 핵심이다.",
      "common_mistake": "위계적(hierarchical) 회귀와 위계적 선형모형(HLM, 다층모형)을 혼동하는 경우가 많다."
    }
  },
  {
    "id": "REGRESS_RL_011",
    "terminology": "회귀선 (Regression Line)",
    "terminology_ko": "회귀선",
    "terminology_en": "Regression Line",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "산점도에서 데이터의 전반적 경향을 가장 잘 요약하는 직선으로, 최소제곱법에 의해 잔차의 제곱합이 최소가 되도록 적합된 예측선이다.",
    "definition_en": "A straight line in a scatterplot that best summarizes the overall trend of the data, fitted by the least squares method so that the sum of squared residuals is minimized.",
    "significance": "두 변인 간의 관계를 시각적으로 표현하고 예측을 수행하는 기본 도구로, 심리학 연구에서 변인 간 관계의 방향과 강도를 직관적으로 파악하게 해준다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모-자녀 키 연구에서 최초로 회귀직선의 개념을 도입했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "최소제곱법",
        "name_en": "Ordinary Least Squares",
        "id": "REGRESS_OLS_003"
      },
      {
        "name_ko": "기울기",
        "name_en": "Slope",
        "id": "REGRESS_SL_013"
      },
      {
        "name_ko": "절편",
        "name_en": "Intercept",
        "id": "REGRESS_INT_012"
      },
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회귀선 = 산점도 위의 '최적 적합선(best-fit line)'",
      "differential": "회귀선은 방향성(X→Y 예측)이 있지만, 상관에서의 적합선은 방향성이 없다.",
      "key_point": "회귀선은 반드시 평균점(X̄, Ȳ)을 통과한다.",
      "common_mistake": "모든 데이터가 회귀선 위에 있어야 한다고 오해하지만, 대부분의 점은 선에서 벗어나 있으며 그 차이가 잔차이다."
    }
  },
  {
    "id": "REGRESS_INT_012",
    "terminology": "절편 (Intercept)",
    "terminology_ko": "절편",
    "terminology_en": "Intercept",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀 방정식에서 독립변인(X)이 0일 때 종속변인(Y)의 예측값으로, 회귀선이 Y축과 만나는 점이다.",
    "definition_en": "The predicted value of the dependent variable (Y) when the independent variable (X) equals zero in the regression equation, representing the point where the regression line crosses the Y-axis.",
    "significance": "회귀 방정식의 기준점을 제공하며, 독립변인이 0인 상황이 의미 있는 경우(예: 센터링 후) 실질적 해석이 가능하다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "회귀 방정식의 수학적 정식화에서 절편과 기울기의 추정 공식을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기울기",
        "name_en": "Slope",
        "id": "REGRESS_SL_013"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "회귀선",
        "name_en": "Regression Line",
        "id": "REGRESS_RL_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절편(a) = Y축을 '절단'하는 점, Y = a + bX에서 X=0이면 Y=a",
      "differential": "절편은 Y축과 만나는 점(상수)이고, 기울기는 X 변화에 따른 Y 변화의 비율이다.",
      "key_point": "절편의 해석은 X=0이 의미 있는 값일 때만 유효하며, 그렇지 않으면 수학적 기준점에 불과하다.",
      "common_mistake": "절편이 항상 실질적 의미를 가진다고 오해하지만, X가 0이 될 수 없는 경우(예: 나이, 키) 해석에 주의해야 한다."
    }
  },
  {
    "id": "REGRESS_SL_013",
    "terminology": "기울기 (Slope)",
    "terminology_ko": "기울기",
    "terminology_en": "Slope",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀 방정식에서 독립변인(X)이 1단위 증가할 때 종속변인(Y)의 예측된 변화량으로, 회귀선의 경사도를 나타낸다.",
    "definition_en": "The predicted change in the dependent variable (Y) for a one-unit increase in the independent variable (X) in the regression equation, representing the steepness of the regression line.",
    "significance": "심리학 연구에서 변인 간 관계의 방향(정적/부적)과 크기를 직접적으로 보여주는 핵심 지표로, 처치 효과나 예측 관계의 실질적 의미를 해석하는 데 사용된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모-자녀 신장 연구에서 회귀선의 기울기가 1보다 작아지는 '평균으로의 회귀' 현상을 발견했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "절편",
        "name_en": "Intercept",
        "id": "REGRESS_INT_012"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "회귀선",
        "name_en": "Regression Line",
        "id": "REGRESS_RL_011"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기울기(b) = ΔY/ΔX, X가 1 오르면 Y는 b만큼 변한다",
      "differential": "기울기(b)는 원래 측정 단위의 변화량이고, 표준화 기울기(β)는 표준편차 단위의 변화량이다.",
      "key_point": "기울기가 양수이면 정적 관계, 음수이면 부적 관계, 0이면 관계 없음을 의미한다.",
      "common_mistake": "기울기가 크다고 상관이 높은 것이 아니며, 기울기는 측정 단위에 영향을 받지만 상관계수는 단위에 무관하다."
    }
  },
  {
    "id": "REGRESS_PV_014",
    "terminology": "예측값 (Predicted Value)",
    "terminology_ko": "예측값",
    "terminology_en": "Predicted Value",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀 방정식에 독립변인의 값을 대입하여 산출한 종속변인의 추정값으로, Ŷ(Y-hat)으로 표기한다.",
    "definition_en": "The estimated value of the dependent variable obtained by substituting the independent variable's value into the regression equation, denoted as Ŷ (Y-hat).",
    "significance": "회귀분석의 최종 산출물로, 심리학 연구에서 개인의 행동, 수행, 적응 수준 등을 예측하는 데 활용되며, 잔차 계산의 기준점이 된다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "예측(prediction)의 개념을 통계학에 도입하고 회귀를 예측 도구로 활용하는 틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "회귀선",
        "name_en": "Regression Line",
        "id": "REGRESS_RL_011"
      },
      {
        "name_ko": "추정의 표준오차",
        "name_en": "Standard Error of Estimate",
        "id": "REGRESS_SEE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Ŷ = a + bX, 모자(^)가 씌워진 Y는 '추정된' Y",
      "differential": "예측값(Ŷ)은 회귀모형이 산출한 추정치이고, 관찰값(Y)은 실제 측정된 데이터이다.",
      "key_point": "예측값은 항상 회귀선 위에 있으며, 관찰값과의 차이가 잔차이다.",
      "common_mistake": "회귀선 범위 밖의 X값으로 예측(외삽)하면 부정확한 결과가 나올 수 있다는 점을 간과하기 쉽다."
    }
  },
  {
    "id": "REGRESS_RA_015",
    "terminology": "잔차분석 (Residual Analysis)",
    "terminology_ko": "잔차분석",
    "terminology_en": "Residual Analysis",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀모형의 가정(정규성, 등분산성, 독립성, 선형성) 충족 여부를 잔차의 패턴과 분포를 통해 진단하는 분석 방법이다.",
    "definition_en": "An analytical method that diagnoses whether the assumptions of a regression model (normality, homoscedasticity, independence, linearity) are met by examining the patterns and distribution of residuals.",
    "significance": "회귀분석 결과의 타당성은 가정 충족에 달려 있으므로, 잔차분석은 심리학 연구에서 결과 해석의 신뢰성을 보장하는 필수적 검증 절차이다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 앤스콤",
        "name_en": "Frank Anscombe",
        "contribution": "앤스콤의 사분면으로 통계량만으로는 파악할 수 없는 데이터 패턴을 시각적 잔차분석으로 발견할 수 있음을 보여주었다."
      },
      {
        "name_ko": "존 튜키",
        "name_en": "John Tukey",
        "contribution": "잔차 플롯 등 시각적 진단 기법을 발전시켜 잔차분석의 실용적 도구를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "이분산성",
        "name_en": "Heteroscedasticity",
        "id": "REGRESS_HET_032"
      },
      {
        "name_ko": "더빈-왓슨 검정",
        "name_en": "Durbin-Watson Test",
        "id": "REGRESS_DW_017"
      },
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "잔차분석 = 잔차 플롯으로 LINE(선형성, 독립성, 정규성, 등분산성) 확인",
      "differential": "잔차분석은 모형 가정을 사후적으로 진단하는 것이고, 가정 검증은 보다 포괄적으로 사전·사후 점검을 포함한다.",
      "key_point": "잔차 대 예측값 산점도에서 무선적 패턴이 나타나야 가정이 충족된 것이다.",
      "common_mistake": "잔차분석을 생략하고 회귀 결과만 보고하면 왜곡된 결론을 내릴 수 있다."
    }
  },
  {
    "id": "REGRESS_MC_016",
    "terminology": "다중공선성 (Multicollinearity)",
    "terminology_ko": "다중공선성",
    "terminology_en": "Multicollinearity",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "다중회귀에서 두 개 이상의 독립변인 간 상관이 매우 높아 개별 변인의 고유한 효과를 분리하기 어려운 상태로, 회귀계수의 추정을 불안정하게 만든다.",
    "definition_en": "A condition in multiple regression where two or more independent variables are highly correlated, making it difficult to isolate the unique effect of each variable and destabilizing the estimation of regression coefficients.",
    "significance": "심리학 연구에서 유사한 구성개념을 동시에 투입할 때 빈번히 발생하며, 회귀계수의 부호 반전이나 비유의적 결과를 초래하여 이론적 해석을 왜곡할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara Tabachnick",
        "contribution": "다중공선성 진단 기준(VIF, 허용도)과 해결 방안을 실용적으로 체계화했다."
      },
      {
        "name_ko": "데이비드 벨슬리",
        "name_en": "David Belsley",
        "contribution": "조건지수(condition index)를 이용한 다중공선성 진단법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "VIF",
        "name_en": "Variance Inflation Factor",
        "id": "REGRESS_VIF_018"
      },
      {
        "name_ko": "허용도",
        "name_en": "Tolerance",
        "id": "REGRESS_TOL_019"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "CORR_MC_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "다중공선성 = 예측변인끼리 너무 '닮아서' 구별이 안 되는 문제",
      "differential": "다중공선성은 독립변인 간의 문제이고, 이분산성은 잔차의 분산에 관한 문제이다.",
      "key_point": "VIF > 10 또는 허용도 < .10이면 다중공선성이 심각한 것으로 판단한다.",
      "common_mistake": "독립변인 간 상관이 있으면 무조건 다중공선성이라고 오해하지만, 상관이 매우 높을 때(.80 이상)만 문제가 된다."
    }
  },
  {
    "id": "REGRESS_DW_017",
    "terminology": "더빈-왓슨 검정 (Durbin-Watson Test)",
    "terminology_ko": "더빈-왓슨 검정",
    "terminology_en": "Durbin-Watson Test",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀분석에서 잔차의 자기상관(인접 잔차 간의 상관)을 검정하는 방법으로, 검정 통계량은 0에서 4 사이의 값을 가지며 2에 가까울수록 자기상관이 없음을 의미한다.",
    "definition_en": "A test for autocorrelation (correlation between adjacent residuals) in regression analysis, with test statistics ranging from 0 to 4, where values close to 2 indicate no autocorrelation.",
    "significance": "종단 연구나 시계열 데이터를 분석하는 심리학 연구에서 잔차의 독립성 가정이 충족되는지 확인하는 표준적 진단 도구이다.",
    "key_researchers": [
      {
        "name_ko": "제임스 더빈",
        "name_en": "James Durbin",
        "contribution": "Geoffrey Watson과 함께 1950-1951년 잔차의 자기상관 검정법을 개발했다."
      },
      {
        "name_ko": "제프리 왓슨",
        "name_en": "Geoffrey Watson",
        "contribution": "James Durbin과 공동으로 DW 검정 통계량과 임계값 표를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차분석",
        "name_en": "Residual Analysis",
        "id": "REGRESS_RA_015"
      },
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DW ≈ 2면 OK, 0에 가까우면 양의 자기상관, 4에 가까우면 음의 자기상관",
      "differential": "더빈-왓슨 검정은 1차 자기상관만 검출하며, 고차 자기상관은 Breusch-Godfrey 검정을 사용한다.",
      "key_point": "검정 통계량이 2에 가까우면 잔차의 독립성 가정이 충족된 것으로 본다.",
      "common_mistake": "DW 검정은 시계열적 순서가 있는 데이터에서만 의미가 있으며, 횡단 연구에서는 해석에 주의가 필요하다."
    }
  },
  {
    "id": "REGRESS_VIF_018",
    "terminology": "분산팽창인자 (Variance Inflation Factor, VIF)",
    "terminology_ko": "분산팽창인자",
    "terminology_en": "Variance Inflation Factor",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "다중회귀에서 각 독립변인의 회귀계수 분산이 다중공선성으로 인해 얼마나 팽창되었는지를 나타내는 지표로, 허용도의 역수이다.",
    "definition_en": "An indicator in multiple regression showing how much the variance of each independent variable's regression coefficient is inflated due to multicollinearity, calculated as the reciprocal of tolerance.",
    "significance": "다중공선성의 심각도를 정량적으로 평가하는 핵심 진단 지표로, 심리학 연구에서 유사한 구성개념을 동시에 투입할 때 필수적으로 보고해야 하는 통계량이다.",
    "key_researchers": [
      {
        "name_ko": "커트 마르쿠아르트",
        "name_en": "Curt Marquardt",
        "contribution": "다중공선성 문제에 대한 능형 회귀(ridge regression) 해결 방법론과 함께 VIF 개념을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "REGRESS_MC_016"
      },
      {
        "name_ko": "허용도",
        "name_en": "Tolerance",
        "id": "REGRESS_TOL_019"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "VIF = 1/(1-R²ᵢ), 분산이 얼마나 '팽창'했는지를 보여주는 값",
      "differential": "VIF는 허용도의 역수(VIF = 1/Tolerance)이므로 같은 정보를 반대 방향으로 나타낸다.",
      "key_point": "VIF > 10이면 심각한 다중공선성, VIF > 5이면 주의가 필요하다는 기준이 일반적이다.",
      "common_mistake": "VIF가 1이면 다중공선성이 전혀 없다는 뜻이지, 1보다 약간 큰 것은 정상이다."
    }
  },
  {
    "id": "REGRESS_TOL_019",
    "terminology": "허용도 (Tolerance)",
    "terminology_ko": "허용도",
    "terminology_en": "Tolerance",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "다중회귀에서 특정 독립변인의 분산 중 다른 독립변인들에 의해 설명되지 않는 비율로, 1에서 해당 변인의 R²를 뺀 값이다.",
    "definition_en": "The proportion of variance in a specific independent variable that is not explained by other independent variables in multiple regression, calculated as 1 minus the R² of that variable regressed on all other predictors.",
    "significance": "다중공선성 진단에서 VIF와 함께 보고되는 핵심 지표로, 각 예측변인이 가진 고유 정보의 양을 파악하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 벨슬리",
        "name_en": "David Belsley",
        "contribution": "허용도와 조건지수를 결합한 다중공선성 진단 체계를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "VIF",
        "name_en": "Variance Inflation Factor",
        "id": "REGRESS_VIF_018"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "REGRESS_MC_016"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "허용도 = 1 - R²ᵢ, 다른 변인으로 설명 안 되는 '고유한' 비율",
      "differential": "허용도가 0에 가까우면 다중공선성이 심각하고, 1에 가까우면 다중공선성이 없다.",
      "key_point": "허용도 < .10이면 심각한 다중공선성으로 판단하며, VIF의 역수(Tolerance = 1/VIF)이다.",
      "common_mistake": "허용도가 높을수록 좋다고만 생각하기 쉽지만, 이는 다중공선성이 낮다는 것이지 예측력이 좋다는 의미가 아니다."
    }
  },
  {
    "id": "REGRESS_MOD_020",
    "terminology": "조절회귀 (Moderated Regression)",
    "terminology_ko": "조절회귀",
    "terminology_en": "Moderated Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "독립변인과 종속변인 간의 관계가 제3의 변인(조절변인)에 의해 달라지는지를 상호작용항을 포함하여 검증하는 위계적 회귀분석 방법이다.",
    "definition_en": "A hierarchical regression method that tests whether the relationship between the independent and dependent variables varies depending on a third variable (moderator) by including an interaction term.",
    "significance": "심리학에서 '누구에게', '어떤 조건에서' 효과가 다른지를 밝히는 조절효과 검증의 표준적 방법으로, 개인차와 맥락 효과를 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "루벤 바론",
        "name_en": "Reuben Baron",
        "contribution": "David Kenny와 함께 1986년 조절변인과 매개변인의 개념적·통계적 구분을 명확히 한 고전적 논문을 발표했다."
      },
      {
        "name_ko": "앤드류 헤이스",
        "name_en": "Andrew Hayes",
        "contribution": "PROCESS 매크로를 개발하여 조절효과 분석의 실용적 접근을 대중화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "매개회귀",
        "name_en": "Mediated Regression",
        "id": "REGRESS_MED_021"
      },
      {
        "name_ko": "위계적 회귀",
        "name_en": "Hierarchical Regression",
        "id": "REGRESS_HR_010"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      },
      {
        "name_ko": "이원분산분석",
        "name_en": "Two-way ANOVA",
        "id": "ANOVA_TW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조절 = '관계의 강도'가 달라지는 것, X→Y 화살표 위에 M이 영향",
      "differential": "조절효과는 관계의 강도/방향이 달라지는 것이고, 매개효과는 X가 Y에 영향을 미치는 경로(과정)를 밝히는 것이다.",
      "key_point": "상호작용항(X×M)이 유의해야 조절효과가 있으며, 주효과와 상호작용항을 단계별로 투입한다.",
      "common_mistake": "조절변인과 매개변인을 혼동하거나, 상호작용항 투입 시 변인을 센터링하지 않으면 다중공선성이 발생한다."
    }
  },
  {
    "id": "REGRESS_MED_021",
    "terminology": "매개회귀 (Mediated Regression)",
    "terminology_ko": "매개회귀",
    "terminology_en": "Mediated Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "독립변인이 종속변인에 영향을 미치는 과정에서 제3의 변인(매개변인)을 통해 간접적으로 영향을 미치는 경로를 검증하는 회귀분석 방법이다.",
    "definition_en": "A regression method that tests whether the effect of the independent variable on the dependent variable is transmitted indirectly through a third variable (mediator).",
    "significance": "심리학에서 '왜', '어떤 과정을 통해' 효과가 발생하는지를 밝히는 매개 메커니즘 검증의 기본 방법으로, 이론적 모형의 인과적 경로를 실증하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "루벤 바론",
        "name_en": "Reuben Baron",
        "contribution": "David Kenny와 함께 매개변인의 4단계 검증 절차(Baron & Kenny, 1986)를 제안했다."
      },
      {
        "name_ko": "크리스틴 프리처",
        "name_en": "Kristopher Preacher",
        "contribution": "부트스트랩을 활용한 간접효과 검증 방법을 발전시켜 매개분석의 통계적 정확성을 높였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조절회귀",
        "name_en": "Moderated Regression",
        "id": "REGRESS_MOD_020"
      },
      {
        "name_ko": "경로분석",
        "name_en": "Path Analysis",
        "id": "REGRESS_PA_022"
      },
      {
        "name_ko": "구조방정식",
        "name_en": "Structural Equation Modeling",
        "id": "REGRESS_SEM_023"
      },
      {
        "name_ko": "독립변인",
        "name_en": "Independent Variable",
        "id": "FOUND_IV_005"
      }
    ],
    "sub_types": [
      {
        "name": "완전매개 (Full Mediation)",
        "description": "매개변인 투입 시 직접효과가 유의하지 않게 되는 경우"
      },
      {
        "name": "부분매개 (Partial Mediation)",
        "description": "매개변인 투입 후에도 직접효과가 유의한 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "매개 = '중간 과정', X → M → Y 경로로 간접효과를 검증",
      "differential": "매개효과는 X→M→Y 경로(간접효과)를 검증하고, 조절효과는 X→Y 관계가 M에 따라 달라지는지를 검증한다.",
      "key_point": "Baron & Kenny의 4단계 절차보다 부트스트랩 간접효과 검정이 더 정확하고 권장된다.",
      "common_mistake": "Baron & Kenny의 1단계(X→Y 유의)가 반드시 필요하다고 오해하지만, 간접효과가 유의하면 총효과가 비유의적이어도 매개가 성립할 수 있다."
    }
  },
  {
    "id": "REGRESS_PA_022",
    "terminology": "경로분석 (Path Analysis)",
    "terminology_ko": "경로분석",
    "terminology_en": "Path Analysis",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "여러 변인 간의 인과적 관계를 동시에 분석하기 위해 다중 회귀방정식을 연립하여 직접효과와 간접효과를 분해하는 통계적 방법이다.",
    "definition_en": "A statistical method that simultaneously analyzes causal relationships among multiple variables by linking multiple regression equations to decompose direct and indirect effects.",
    "significance": "심리학의 복잡한 인과 모형을 검증하는 도구로, 매개 경로와 직접 경로를 동시에 추정하여 이론적 모형의 타당성을 평가할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "시월 라이트",
        "name_en": "Sewall Wright",
        "contribution": "1920년대 경로분석(path analysis)을 최초로 개발하여 유전학 연구에 적용했다."
      },
      {
        "name_ko": "오티스 더들리 던컨",
        "name_en": "Otis Dudley Duncan",
        "contribution": "사회과학 분야에 경로분석을 도입하여 사회이동 연구에 체계적으로 적용했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조방정식",
        "name_en": "Structural Equation Modeling",
        "id": "REGRESS_SEM_023"
      },
      {
        "name_ko": "매개회귀",
        "name_en": "Mediated Regression",
        "id": "REGRESS_MED_021"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경로(Path) = 변인 간 화살표로 연결된 인과 경로를 분석",
      "differential": "경로분석은 관측변인만 사용하지만, 구조방정식(SEM)은 잠재변인도 포함할 수 있다.",
      "key_point": "직접효과, 간접효과, 총효과를 분해하여 인과적 메커니즘을 검증한다.",
      "common_mistake": "경로분석이 인과관계를 '증명'한다고 오해하지만, 이론적 인과 가정을 검증하는 것이지 인과를 확립하는 것은 아니다."
    }
  },
  {
    "id": "REGRESS_SEM_023",
    "terminology": "구조방정식 모형 (Structural Equation Modeling, SEM)",
    "terminology_ko": "구조방정식 모형",
    "terminology_en": "Structural Equation Modeling",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "관측변인과 잠재변인 간의 인과적 관계를 동시에 분석하는 다변량 통계 기법으로, 측정모형과 구조모형을 통합하여 이론적 모형의 적합도를 검증한다.",
    "definition_en": "A multivariate statistical technique that simultaneously analyzes causal relationships among observed and latent variables, integrating measurement and structural models to test the fit of theoretical models.",
    "significance": "심리학의 복잡한 이론적 모형(잠재변인 포함)을 종합적으로 검증할 수 있는 강력한 도구로, 측정오차를 분리하여 보다 정확한 관계 추정이 가능하다.",
    "key_researchers": [
      {
        "name_ko": "칼 외레스코그",
        "name_en": "Karl Jöreskog",
        "contribution": "LISREL 프로그램을 개발하고 SEM의 수학적 기초와 추정 방법을 확립했다."
      },
      {
        "name_ko": "피터 벤틀러",
        "name_en": "Peter Bentler",
        "contribution": "EQS 프로그램과 적합도 지수(CFI 등)를 개발하여 SEM 방법론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경로분석",
        "name_en": "Path Analysis",
        "id": "REGRESS_PA_022"
      },
      {
        "name_ko": "매개회귀",
        "name_en": "Mediated Regression",
        "id": "REGRESS_MED_021"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [
      {
        "name": "확인적 요인분석 (CFA)",
        "description": "측정모형의 적합도를 검증하는 SEM의 하위 모형"
      },
      {
        "name": "다집단 분석 (Multi-group SEM)",
        "description": "집단 간 모형의 동등성을 검증"
      },
      {
        "name": "잠재성장모형 (Latent Growth Model)",
        "description": "시간에 따른 변화 궤적을 잠재변인으로 모형화"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SEM = 경로분석(구조모형) + 확인적 요인분석(측정모형)의 결합",
      "differential": "SEM은 잠재변인을 포함하여 측정오차를 분리하지만, 경로분석은 관측변인만 사용하므로 측정오차가 포함된다.",
      "key_point": "모형 적합도(χ², CFI, RMSEA, SRMR 등)를 보고하여 전체 모형의 적절성을 평가한다.",
      "common_mistake": "SEM이 인과관계를 '증명'한다고 오해하지만, 이론에 기반한 가설 모형이 데이터에 얼마나 부합하는지를 검증하는 것이다."
    }
  },
  {
    "id": "REGRESS_BETA_024",
    "terminology": "표준화 회귀계수 (Standardized Regression Coefficient, β)",
    "terminology_ko": "표준화 회귀계수",
    "terminology_en": "Standardized Regression Coefficient",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "모든 변인을 z점수로 표준화한 후 산출한 회귀계수로, 독립변인이 1 표준편차 변화할 때 종속변인의 표준편차 단위 변화량을 나타내며 변인 간 상대적 비교가 가능하다.",
    "definition_en": "A regression coefficient calculated after standardizing all variables to z-scores, representing the change in the dependent variable in standard deviation units for a one standard deviation change in the independent variable, enabling relative comparison across predictors.",
    "significance": "측정 단위가 다른 심리학 변인들의 상대적 영향력을 비교할 수 있게 해주어, 어떤 예측변인이 가장 강력한 예측자인지를 판단하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "표준화 계수의 효과크기 해석 기준과 다중회귀에서의 활용 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비표준화 회귀계수",
        "name_en": "Unstandardized Regression Coefficient",
        "id": "REGRESS_B_025"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "β(베타) = 표준화된 세계에서의 기울기, 단위 없이 상대 비교 가능",
      "differential": "β(표준화)는 상대적 중요도 비교에, B(비표준화)는 실질적 변화량 해석에 적합하다.",
      "key_point": "β의 절대값이 클수록 해당 변인의 상대적 영향력이 크며, -1에서 +1 사이의 값을 갖는 경향이 있다.",
      "common_mistake": "β가 1을 초과하면 다중공선성 문제일 수 있으므로 확인이 필요하다."
    }
  },
  {
    "id": "REGRESS_B_025",
    "terminology": "비표준화 회귀계수 (Unstandardized Regression Coefficient, B)",
    "terminology_ko": "비표준화 회귀계수",
    "terminology_en": "Unstandardized Regression Coefficient",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "원래 측정 단위를 그대로 사용하여 산출한 회귀계수로, 독립변인이 원래 단위로 1단위 변화할 때 종속변인의 원래 단위 변화량을 나타낸다.",
    "definition_en": "A regression coefficient calculated using original measurement units, representing the change in the dependent variable in its original units for a one-unit change in the independent variable in its original units.",
    "significance": "실질적 해석이 필요한 응용 연구에서 중요하며, 변인의 실제 단위로 예측치를 산출할 때 사용한다. 집단 간 비교에서는 표준화 계수보다 유리하다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "회귀계수의 추정 공식과 표준오차를 확립하여 비표준화 계수의 수학적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준화 회귀계수",
        "name_en": "Standardized Regression Coefficient",
        "id": "REGRESS_BETA_024"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "기울기",
        "name_en": "Slope",
        "id": "REGRESS_SL_013"
      },
      {
        "name_ko": "절편",
        "name_en": "Intercept",
        "id": "REGRESS_INT_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "B = 원래 단위 그대로, '불안이 1점 올라가면 우울이 B점 올라간다'",
      "differential": "B(비표준화)는 원래 단위의 변화량이라 실질적 해석에, β(표준화)는 단위 없이 상대적 비교에 적합하다.",
      "key_point": "회귀 방정식 Ŷ = a + B₁X₁ + B₂X₂에서 실제 예측값을 산출할 때 사용된다.",
      "common_mistake": "비표준화 계수의 크기만으로 변인의 중요도를 비교하면 안 된다. 측정 단위가 다르면 크기 비교가 무의미하다."
    }
  },
  {
    "id": "REGRESS_PC_026",
    "terminology": "부분상관 (Partial Correlation)",
    "terminology_ko": "부분상관",
    "terminology_en": "Partial Correlation",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "두 변인 간의 상관에서 제3의 변인(통제변인)의 영향을 모두 제거한 후 남는 순수한 상관으로, 두 변인의 잔차 간 상관에 해당한다.",
    "definition_en": "The pure correlation between two variables after removing the influence of a third variable (control variable) from both, equivalent to the correlation between the residuals of the two variables.",
    "significance": "심리학 연구에서 혼입변인을 통계적으로 통제하여 두 변인 간의 고유한 관계를 파악하는 데 필수적이며, 허위 상관을 배제하는 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "부분상관의 수학적 공식을 개발하여 통제변인을 고려한 상관 분석의 기초를 마련했다."
      },
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "부분상관의 유의성 검정 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반편상관",
        "name_en": "Semi-partial Correlation",
        "id": "REGRESS_SPC_030"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부분상관 = 두 변인 모두에서 제3변인 영향을 '빼고' 남은 상관",
      "differential": "부분상관은 두 변인 모두에서 통제변인을 제거하지만, 반편상관은 한 변인에서만 제거한다.",
      "key_point": "부분상관의 제곱은 통제변인 제거 후 남은 분산 중 설명되는 비율을 의미한다.",
      "common_mistake": "부분상관과 반편상관(준부분상관)을 혼동하기 쉬우며, 다중회귀에서의 해석이 다르다."
    }
  },
  {
    "id": "REGRESS_AR2_027",
    "terminology": "수정된 R제곱 (Adjusted R-squared)",
    "terminology_ko": "수정된 R제곱",
    "terminology_en": "Adjusted R-squared",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "R²가 예측변인 수의 증가에 따라 자동으로 증가하는 문제를 보정하기 위해, 표본크기와 예측변인 수를 고려하여 조정한 결정계수이다.",
    "definition_en": "A modified version of R² that adjusts for the number of predictors and sample size, correcting the tendency of R² to increase automatically as more predictors are added to the model.",
    "significance": "다중회귀에서 예측변인 수가 다른 모형을 비교할 때 필수적이며, 과적합 방지를 위한 모형 선택 기준으로 심리학 연구에서 표준적으로 보고된다.",
    "key_researchers": [
      {
        "name_ko": "에즈커 솔로몬",
        "name_en": "Ezekiel Mordecai",
        "contribution": "수정된 결정계수 공식을 최초로 제안하여 모형 과적합 문제에 대한 통계적 보정법을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      },
      {
        "name_ko": "F검정",
        "name_en": "F-test",
        "id": "REGRESS_FT_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수정된 R² = R²에서 '뻥튀기'를 빼준 것, 변인 수와 표본크기를 고려",
      "differential": "R²는 변인 추가 시 항상 증가하지만, 수정된 R²는 불필요한 변인 추가 시 감소할 수 있다.",
      "key_point": "모형 비교 시 R²가 아닌 수정된 R²를 기준으로 해야 과적합을 방지할 수 있다.",
      "common_mistake": "수정된 R²가 음수가 될 수도 있으며, 이는 모형이 매우 부적절함을 의미한다."
    }
  },
  {
    "id": "REGRESS_FT_028",
    "terminology": "F검정 (F-test in Regression)",
    "terminology_ko": "F검정",
    "terminology_en": "F-test in Regression",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀모형 전체의 통계적 유의성을 검증하는 방법으로, 모형에 의해 설명된 분산과 설명되지 않은 분산의 비율(F비)을 이용하여 R²가 0보다 유의하게 큰지를 판단한다.",
    "definition_en": "A method for testing the overall statistical significance of a regression model by comparing the ratio of explained variance to unexplained variance (F-ratio) to determine whether R² is significantly greater than zero.",
    "significance": "회귀모형이 종속변인을 유의하게 예측하는지를 전체적으로 판단하는 1차 검증 단계로, 개별 계수의 유의성 검증에 앞서 반드시 확인해야 한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "F분포와 분산분석(ANOVA)을 개발하여 회귀 모형 검증의 통계적 기초를 확립했다."
      },
      {
        "name_ko": "조지 스네디커",
        "name_en": "George Snedecor",
        "contribution": "Fisher의 이름을 따 F분포를 명명하고 실용적 적용을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "F비",
        "name_en": "F-ratio",
        "id": "ANOVA_FR_004"
      },
      {
        "name_ko": "자유도",
        "name_en": "Degrees of Freedom",
        "id": "TTEST_DF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "F = 회귀분산(MSR) / 잔차분산(MSE), 설명력 대비 오차의 비율",
      "differential": "회귀의 F검정은 모형 전체의 유의성을, t검정은 개별 회귀계수의 유의성을 검증한다.",
      "key_point": "F검정이 유의해야 개별 회귀계수의 해석이 의미 있으며, ANOVA 표로 결과가 제시된다.",
      "common_mistake": "F검정이 유의하더라도 모든 개별 예측변인이 유의하다는 뜻은 아니다."
    }
  },
  {
    "id": "REGRESS_TT_029",
    "terminology": "회귀계수의 t검정 (t-test for Regression Coefficients)",
    "terminology_ko": "회귀계수의 t검정",
    "terminology_en": "t-test for Regression Coefficients",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "다중회귀에서 각 개별 회귀계수가 통계적으로 0과 유의하게 다른지를 검증하는 방법으로, 회귀계수를 그 표준오차로 나눈 t값을 이용한다.",
    "definition_en": "A method in multiple regression for testing whether each individual regression coefficient is significantly different from zero, using the t-value obtained by dividing the regression coefficient by its standard error.",
    "significance": "다중회귀에서 어떤 예측변인이 다른 변인들을 통제한 후에도 종속변인에 고유한 기여를 하는지를 판단하는 핵심 검증 절차이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 고셋",
        "name_en": "William Gosset",
        "contribution": "Student라는 필명으로 t분포를 개발하여 소표본에서의 통계적 검정 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "F검정",
        "name_en": "F-test in Regression",
        "id": "REGRESS_FT_028"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "t = B / SE(B), 회귀계수를 그 표준오차로 나누면 t값",
      "differential": "F검정은 모형 '전체'의 유의성을, t검정은 '개별' 회귀계수의 유의성을 검증한다.",
      "key_point": "t값의 절대값이 클수록(p값이 작을수록) 해당 변인의 고유한 기여가 유의하다.",
      "common_mistake": "t검정이 비유의적이라고 해당 변인이 종속변인과 관계가 없다는 뜻이 아니며, 다른 변인과의 중복 때문일 수 있다."
    }
  },
  {
    "id": "REGRESS_SPC_030",
    "terminology": "반편상관 (Semi-partial Correlation)",
    "terminology_ko": "반편상관",
    "terminology_en": "Semi-partial Correlation",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "한 변인에서만 통제변인의 영향을 제거하고 다른 변인은 원래 값을 유지한 상태에서 산출한 상관으로, 다중회귀에서 개별 변인의 고유 설명력(sr²)을 나타낸다.",
    "definition_en": "A correlation calculated after removing the influence of control variables from only one variable while keeping the other in its original form, representing the unique explanatory power (sr²) of an individual variable in multiple regression.",
    "significance": "다중회귀에서 각 예측변인이 전체 분산 중 고유하게 설명하는 비율을 파악할 수 있어, R²를 개별 변인의 기여분으로 분해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "반편상관을 이용한 효과크기 분석과 다중회귀에서의 분산 분해 방법을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부분상관",
        "name_en": "Partial Correlation",
        "id": "REGRESS_PC_026"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "EFFECT_R2_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반편(semi-partial) = '반만' 편상관, 한쪽 변인에서만 통제변인을 제거",
      "differential": "부분상관은 두 변인 모두에서 통제변인을 제거하지만, 반편상관은 한쪽에서만 제거하여 R² 분해에 직접 사용된다.",
      "key_point": "sr²(반편상관의 제곱)은 전체 R²에서 해당 변인의 고유 기여분을 나타낸다.",
      "common_mistake": "반편상관을 부분상관과 혼동하거나, 반편상관의 제곱합이 R²와 같다고 오해한다(공유 분산이 있으므로 합이 R²보다 작다)."
    }
  },
  {
    "id": "REGRESS_AC_031",
    "terminology": "가정 검증 (Assumption Checking)",
    "terminology_ko": "가정 검증",
    "terminology_en": "Assumption Checking",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀분석의 타당한 적용을 위해 선형성, 정규성, 등분산성, 독립성, 다중공선성 부재 등 기본 가정의 충족 여부를 체계적으로 점검하는 절차이다.",
    "definition_en": "A systematic procedure for verifying whether the basic assumptions of regression analysis—linearity, normality, homoscedasticity, independence, and absence of multicollinearity—are met for valid application.",
    "significance": "가정 위반 시 회귀계수 추정과 검정 결과가 편향되므로, 심리학 연구의 결론 타당성을 보장하기 위해 분석 전후로 반드시 수행해야 하는 필수 절차이다.",
    "key_researchers": [
      {
        "name_ko": "바바라 타바크닉",
        "name_en": "Barbara Tabachnick",
        "contribution": "다변량 통계에서의 가정 검증 절차를 체계적으로 안내하는 교과서를 저술했다."
      },
      {
        "name_ko": "데이비드 하웰",
        "name_en": "David Howell",
        "contribution": "행동과학 통계에서 가정 검증의 중요성과 실용적 방법을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차분석",
        "name_en": "Residual Analysis",
        "id": "REGRESS_RA_015"
      },
      {
        "name_ko": "이분산성",
        "name_en": "Heteroscedasticity",
        "id": "REGRESS_HET_032"
      },
      {
        "name_ko": "다중공선성",
        "name_en": "Multicollinearity",
        "id": "REGRESS_MC_016"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "LINE = Linearity(선형성), Independence(독립성), Normality(정규성), Equal variance(등분산성)",
      "differential": "가정 검증은 분석 전후의 포괄적 점검이고, 잔차분석은 가정 검증의 사후적 진단 방법 중 하나이다.",
      "key_point": "5대 가정: 선형성, 잔차의 정규성, 등분산성, 독립성, 다중공선성 부재를 모두 확인해야 한다.",
      "common_mistake": "가정 검증 없이 회귀분석을 실시하고 결과를 보고하는 것은 결론의 타당성을 위협한다."
    }
  },
  {
    "id": "REGRESS_HET_032",
    "terminology": "이분산성 (Heteroscedasticity)",
    "terminology_ko": "이분산성",
    "terminology_en": "Heteroscedasticity",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "회귀분석에서 잔차의 분산이 독립변인의 값에 따라 일정하지 않고 변하는 현상으로, 등분산성(homoscedasticity) 가정의 위반에 해당한다.",
    "definition_en": "A condition in regression analysis where the variance of residuals is not constant across levels of the independent variable, representing a violation of the homoscedasticity assumption.",
    "significance": "이분산성이 존재하면 회귀계수의 표준오차 추정이 부정확해져 유의성 검정의 신뢰성이 떨어지므로, 심리학 연구에서 반드시 진단하고 교정해야 하는 문제이다.",
    "key_researchers": [
      {
        "name_ko": "할버트 화이트",
        "name_en": "Halbert White",
        "contribution": "이분산성에 강건한(robust) 표준오차 추정법을 개발하여 이분산성 하에서도 유효한 추론을 가능하게 했다."
      },
      {
        "name_ko": "트레버 브로이시",
        "name_en": "Trevor Breusch",
        "contribution": "Adrian Pagan과 함께 이분산성 검정(Breusch-Pagan test)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      },
      {
        "name_ko": "잔차분석",
        "name_en": "Residual Analysis",
        "id": "REGRESS_RA_015"
      },
      {
        "name_ko": "잔차",
        "name_en": "Residual",
        "id": "REGRESS_RES_005"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이분산(Hetero-) = '다른' 분산, 잔차의 퍼짐이 일정하지 않은 나팔 모양",
      "differential": "등분산성(homo-)은 잔차 분산이 일정한 것이고, 이분산성(hetero-)은 일정하지 않은 것이다.",
      "key_point": "잔차 대 예측값 산점도에서 깔때기 모양이 나타나면 이분산성을 의심한다.",
      "common_mistake": "이분산성은 회귀계수 자체를 편향시키지는 않지만, 표준오차를 왜곡하여 유의성 판단을 부정확하게 만든다."
    }
  },
  {
    "id": "REGRESS_RTM_033",
    "terminology": "평균으로의 회귀 (Regression to the Mean)",
    "terminology_ko": "평균으로의 회귀",
    "terminology_en": "Regression to the Mean",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "극단적인 값을 가진 측정치가 재측정 시 평균에 더 가까운 값을 보이는 통계적 현상으로, 측정 오차와 불완전한 상관에 의해 발생한다.",
    "definition_en": "A statistical phenomenon where extreme measurements tend to be closer to the mean upon remeasurement, occurring due to measurement error and imperfect correlation.",
    "significance": "사전-사후 설계의 심리학 연구에서 처치 효과를 과대 또는 과소 추정하게 만들 수 있는 위협 요인으로, 연구 설계와 결과 해석에서 반드시 고려해야 한다.",
    "key_researchers": [
      {
        "name_ko": "프랜시스 골턴",
        "name_en": "Francis Galton",
        "contribution": "부모-자녀 키 연구에서 '평균으로의 회귀' 현상을 최초로 발견하고 명명했으며, 이것이 '회귀분석'이라는 명칭의 기원이 되었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "단순선형회귀",
        "name_en": "Simple Linear Regression",
        "id": "REGRESS_SLR_001"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "골턴의 발견: 키가 큰 부모의 자녀는 부모보다 '평균 쪽으로' 돌아간다",
      "differential": "평균으로의 회귀는 통계적 인공물(artifact)이지 실제 변화가 아니라는 점에서 처치 효과와 구분된다.",
      "key_point": "'회귀(regression)'라는 용어 자체가 골턴의 이 발견에서 유래했다.",
      "common_mistake": "극단적 점수 집단의 평균이 재검사 시 변하면 처치 효과로 오해하기 쉽지만, 평균으로의 회귀 효과일 수 있다."
    }
  },
  {
    "id": "REGRESS_EXT_034",
    "terminology": "외삽 (Extrapolation)",
    "terminology_ko": "외삽",
    "terminology_en": "Extrapolation",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "관찰된 데이터 범위를 벗어난 독립변인 값을 회귀 방정식에 대입하여 예측하는 것으로, 데이터 범위 밖에서는 관계가 달라질 수 있어 부정확한 예측을 초래할 위험이 있다.",
    "definition_en": "Making predictions by substituting independent variable values beyond the observed data range into the regression equation, which risks inaccurate predictions because the relationship may differ outside the data range.",
    "significance": "심리학 연구에서 표본의 범위를 넘어서는 일반화에 대한 주의를 환기시키며, 예측의 한계를 인식하는 데 중요한 개념이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 하웰",
        "name_en": "David Howell",
        "contribution": "행동과학 통계 교과서에서 외삽의 위험성과 회귀 예측의 한계를 명확히 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "예측값",
        "name_en": "Predicted Value",
        "id": "REGRESS_PV_014"
      },
      {
        "name_ko": "회귀선",
        "name_en": "Regression Line",
        "id": "REGRESS_RL_011"
      },
      {
        "name_ko": "추정의 표준오차",
        "name_en": "Standard Error of Estimate",
        "id": "REGRESS_SEE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외삽(Extra-) = 데이터 '바깥'으로 나가서 예측, 위험한 추정",
      "differential": "내삽(interpolation)은 데이터 범위 안에서의 예측이라 비교적 안전하지만, 외삽은 범위 밖이라 불확실성이 크다.",
      "key_point": "회귀선은 관찰된 데이터 범위 내에서만 유효하며, 범위 밖에서는 관계의 형태가 변할 수 있다.",
      "common_mistake": "회귀 방정식이 있으면 어떤 X값이든 대입할 수 있다고 생각하지만, 관찰 범위 밖의 예측은 매우 위험하다."
    }
  },
  {
    "id": "REGRESS_DV_035",
    "terminology": "더미변인 (Dummy Variable)",
    "terminology_ko": "더미변인",
    "terminology_en": "Dummy Variable",
    "category": "REGRESS",
    "category_name": "회귀분석 (Regression Analysis)",
    "definition": "범주형 변인을 회귀분석에 포함시키기 위해 0과 1로 코딩한 이진 변인으로, k개 범주를 가진 변인은 k-1개의 더미변인으로 변환한다.",
    "definition_en": "A binary variable coded as 0 and 1 to include categorical variables in regression analysis, where a variable with k categories is converted into k-1 dummy variables.",
    "significance": "성별, 집단 구분 등 범주형 변인을 회귀모형에 통합할 수 있게 해주어, 심리학 연구에서 집단 차이를 회귀 프레임워크로 검증하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "범주형 변인의 회귀분석 코딩 방법(더미, 효과, 대비 코딩)을 체계적으로 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "회귀계수",
        "name_en": "Regression Coefficient",
        "id": "REGRESS_RC_004"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [
      {
        "name": "더미 코딩 (Dummy Coding)",
        "description": "참조집단을 0으로, 비교집단을 1로 코딩"
      },
      {
        "name": "효과 코딩 (Effect Coding)",
        "description": "참조집단을 -1로, 비교집단을 1로 코딩"
      },
      {
        "name": "대비 코딩 (Contrast Coding)",
        "description": "특정 집단 비교를 위한 가중치 코딩"
      }
    ],
    "quiz_hints": {
      "mnemonic": "더미 = 0과 1로 '가짜(dummy)' 숫자를 부여하여 범주를 표현",
      "differential": "더미 코딩은 참조집단과의 차이를, 효과 코딩은 전체 평균과의 차이를 나타낸다.",
      "key_point": "k개 범주에서 k-1개의 더미변인을 만들어야 하며, 하나를 참조범주로 남긴다.",
      "common_mistake": "k개 범주를 모두 더미변인으로 만들면 완전 다중공선성이 발생한다(더미 변인 함정)."
    }
  }
];

TERMS_DATA.NONPARA = [
  {
    "id": "NONPARA_CHI_001",
    "terminology": "카이제곱 검정 (Chi-Square Test)",
    "terminology_ko": "카이제곱 검정",
    "terminology_en": "Chi-Square Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "범주형 자료에서 관찰빈도와 기대빈도 간의 차이가 통계적으로 유의한지를 검정하는 비모수 통계 방법으로, 적합도 검정과 독립성 검정으로 구분된다.",
    "definition_en": "A nonparametric statistical method that tests whether the difference between observed and expected frequencies in categorical data is statistically significant, divided into goodness-of-fit and independence tests.",
    "significance": "심리학 연구에서 성별, 진단 범주, 응답 유형 등 명목척도 자료를 분석하는 가장 기본적이고 널리 사용되는 비모수 검정법이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "1900년 카이제곱 적합도 검정을 개발하여 범주형 자료의 통계적 분석 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 적합도 검정",
        "name_en": "Chi-Square Goodness-of-Fit Test",
        "id": "NONPARA_GOF_016"
      },
      {
        "name_ko": "카이제곱 독립성 검정",
        "name_en": "Chi-Square Test of Independence",
        "id": "NONPARA_IND_017"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      }
    ],
    "sub_types": [
      {
        "name": "적합도 검정 (Goodness-of-Fit Test)",
        "description": "한 변인의 관찰 분포가 이론적 분포에 적합한지 검정"
      },
      {
        "name": "독립성 검정 (Test of Independence)",
        "description": "두 범주형 변인 간의 관련성(독립성) 검정"
      },
      {
        "name": "동질성 검정 (Test of Homogeneity)",
        "description": "여러 집단의 범주 분포가 동일한지 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "χ² = Σ(관찰 - 기대)² / 기대, 관찰된 것과 기대한 것의 '차이'를 검정",
      "differential": "카이제곱은 빈도(범주형) 자료를 분석하고, t검정이나 ANOVA는 연속형 자료를 분석한다.",
      "key_point": "기대빈도가 5 미만인 셀이 20% 이상이면 카이제곱 검정의 정확성이 떨어지므로 피셔의 정확검정을 사용해야 한다.",
      "common_mistake": "카이제곱 검정은 관련성의 유무만 판단하며, 관련성의 강도나 방향은 별도의 지표(크래머의 V 등)로 확인해야 한다."
    }
  },
  {
    "id": "NONPARA_MWU_002",
    "terminology": "맨-휘트니 U검정 (Mann-Whitney U Test)",
    "terminology_ko": "맨-휘트니 U검정",
    "terminology_en": "Mann-Whitney U Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "두 독립 집단의 순위 분포를 비교하는 비모수 검정법으로, 정규성 가정을 충족하지 못하거나 서열척도 자료일 때 독립표본 t검정의 대안으로 사용된다.",
    "definition_en": "A nonparametric test that compares the rank distributions of two independent groups, used as an alternative to the independent samples t-test when normality assumptions are not met or data are ordinal.",
    "significance": "심리학 연구에서 소표본이거나 비정규 분포 자료에서 두 집단의 차이를 검증할 때 가장 널리 사용되는 비모수 대안이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 맨",
        "name_en": "Henry Mann",
        "contribution": "Donald Whitney와 함께 1947년 두 독립 표본의 순위 기반 검정법(U검정)을 개발했다."
      },
      {
        "name_ko": "도널드 휘트니",
        "name_en": "Donald Whitney",
        "contribution": "Henry Mann과 공동으로 U검정의 수학적 기초와 검정 통계량을 확립했다."
      },
      {
        "name_ko": "프랭크 윌콕슨",
        "name_en": "Frank Wilcoxon",
        "contribution": "1945년 순위합 검정을 독립적으로 개발하여 동일한 검정의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "NONPARA_WSR_003"
      },
      {
        "name_ko": "크루스칼-왈리스 검정",
        "name_en": "Kruskal-Wallis Test",
        "id": "NONPARA_KW_004"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "맨-휘트니 = 독립 2집단 비모수 비교, t검정의 '비모수 쌍둥이'",
      "differential": "맨-휘트니 U검정은 두 '독립' 집단을 비교하고, 윌콕슨 부호순위 검정은 '대응' 표본을 비교한다.",
      "key_point": "원점수 대신 전체를 통합하여 순위를 매긴 후, 각 집단의 순위합을 비교한다.",
      "common_mistake": "맨-휘트니 U검정을 '중앙값 비교'로만 이해하면 안 되며, 실제로는 두 집단의 순위 분포 전체를 비교하는 것이다."
    }
  },
  {
    "id": "NONPARA_WSR_003",
    "terminology": "윌콕슨 부호순위 검정 (Wilcoxon Signed-Rank Test)",
    "terminology_ko": "윌콕슨 부호순위 검정",
    "terminology_en": "Wilcoxon Signed-Rank Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "대응 표본(반복 측정)에서 차이값의 부호와 크기 순위를 모두 고려하여 두 조건 간 차이를 검정하는 비모수 방법으로, 대응표본 t검정의 비모수 대안이다.",
    "definition_en": "A nonparametric method that tests differences between two related conditions by considering both the sign and rank magnitude of difference scores, serving as a nonparametric alternative to the paired samples t-test.",
    "significance": "심리학의 사전-사후 설계나 반복측정 연구에서 정규성 가정이 위반될 때 가장 많이 사용되는 비모수 대안이다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 윌콕슨",
        "name_en": "Frank Wilcoxon",
        "contribution": "1945년 부호순위 검정을 개발하여 대응 표본의 비모수 검정 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "부호 검정",
        "name_en": "Sign Test",
        "id": "NONPARA_ST_011"
      },
      {
        "name_ko": "맨-휘트니 U검정",
        "name_en": "Mann-Whitney U Test",
        "id": "NONPARA_MWU_002"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "윌콕슨 = 대응표본 비모수, 차이값의 '부호(방향)' + '순위(크기)' 모두 사용",
      "differential": "부호 검정은 차이의 방향(부호)만 사용하지만, 윌콕슨 부호순위 검정은 방향과 크기(순위) 모두 사용하여 더 검정력이 높다.",
      "key_point": "차이값이 0인 경우는 제외하고, 나머지 차이값의 절대값에 순위를 매긴 후 양의 순위합과 음의 순위합을 비교한다.",
      "common_mistake": "윌콕슨의 '순위합 검정(rank-sum test)'과 '부호순위 검정(signed-rank test)'을 혼동하는 경우가 많다. 전자는 독립표본, 후자는 대응표본 검정이다."
    }
  },
  {
    "id": "NONPARA_KW_004",
    "terminology": "크루스칼-왈리스 검정 (Kruskal-Wallis Test)",
    "terminology_ko": "크루스칼-왈리스 검정",
    "terminology_en": "Kruskal-Wallis Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "세 개 이상의 독립 집단의 순위 분포를 비교하는 비모수 검정법으로, 일원분산분석(one-way ANOVA)의 비모수 대안이다.",
    "definition_en": "A nonparametric test that compares the rank distributions of three or more independent groups, serving as a nonparametric alternative to one-way ANOVA.",
    "significance": "심리학 연구에서 세 집단 이상의 비교가 필요하지만 정규성이나 등분산성 가정을 충족하지 못할 때, 또는 서열 자료를 분석할 때 표준적으로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 크루스칼",
        "name_en": "William Kruskal",
        "contribution": "W. Allen Wallis와 함께 1952년 다집단 순위 비교 검정법을 개발했다."
      },
      {
        "name_ko": "앨런 왈리스",
        "name_en": "W. Allen Wallis",
        "contribution": "William Kruskal과 공동으로 비모수적 분산분석 대안을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "맨-휘트니 U검정",
        "name_en": "Mann-Whitney U Test",
        "id": "NONPARA_MWU_002"
      },
      {
        "name_ko": "프리드만 검정",
        "name_en": "Friedman Test",
        "id": "NONPARA_FR_005"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "크루스칼-왈리스 = 독립 3집단+ 비모수 비교, ANOVA의 '비모수 버전'",
      "differential": "크루스칼-왈리스는 독립 집단을 비교하고, 프리드만 검정은 반복측정(대응) 설계를 위한 비모수 검정이다.",
      "key_point": "유의한 결과가 나오면 어떤 집단 간에 차이가 있는지 사후검정(예: 맨-휘트니 U + 본페로니 보정)이 필요하다.",
      "common_mistake": "크루스칼-왈리스가 유의하면 모든 집단이 서로 다르다고 오해하지만, ANOVA처럼 사후검정으로 쌍별 비교가 필요하다."
    }
  },
  {
    "id": "NONPARA_FR_005",
    "terminology": "프리드만 검정 (Friedman Test)",
    "terminology_ko": "프리드만 검정",
    "terminology_en": "Friedman Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "세 개 이상의 반복측정(대응) 조건에서 순위를 이용하여 조건 간 차이를 검정하는 비모수 방법으로, 반복측정 분산분석의 비모수 대안이다.",
    "definition_en": "A nonparametric method that tests differences among three or more repeated measures (related) conditions using ranks, serving as a nonparametric alternative to repeated measures ANOVA.",
    "significance": "심리학의 반복측정 설계에서 정규성 가정이 충족되지 않을 때 사용되며, 같은 참가자의 여러 조건을 비교하는 연구에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "밀턴 프리드만",
        "name_en": "Milton Friedman",
        "contribution": "1937년 순위 기반 반복측정 비교 검정법을 개발했으며, 후에 노벨 경제학상을 수상한 경제학자이기도 하다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "크루스칼-왈리스 검정",
        "name_en": "Kruskal-Wallis Test",
        "id": "NONPARA_KW_004"
      },
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "NONPARA_WSR_003"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "코크런 Q검정",
        "name_en": "Cochran's Q Test",
        "id": "NONPARA_CQ_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "프리드만 = 반복측정 3조건+ 비모수, 각 참가자 내에서 순위를 매김",
      "differential": "프리드만은 반복측정(대응) 설계이고, 크루스칼-왈리스는 독립 집단 설계이다. 둘 다 3집단 이상의 비모수 비교이다.",
      "key_point": "각 참가자(행) 내에서 조건별로 순위를 매긴 후, 조건별 순위합을 비교한다.",
      "common_mistake": "프리드만 검정의 개발자 Milton Friedman이 노벨 경제학상 수상자와 동일 인물이라는 점을 모르는 경우가 많다."
    }
  },
  {
    "id": "NONPARA_FE_006",
    "terminology": "피셔의 정확검정 (Fisher's Exact Test)",
    "terminology_ko": "피셔의 정확검정",
    "terminology_en": "Fisher's Exact Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "2×2 분할표에서 표본크기가 작거나 기대빈도가 낮을 때 정확한 확률을 계산하여 두 범주형 변인의 관련성을 검정하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that calculates exact probabilities to test the association between two categorical variables in a 2×2 contingency table when sample size is small or expected frequencies are low.",
    "significance": "소표본 심리학 연구에서 카이제곱 검정의 대안으로 필수적이며, 기대빈도 조건이 충족되지 않을 때 정확한 유의확률을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "1934년 '숙녀의 차 실험(lady tasting tea)'에서 정확검정의 원리를 제시하여 소표본 범주형 분석의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "관찰빈도",
        "name_en": "Observed Frequency",
        "id": "NONPARA_OF_019"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피셔 정확 = 소표본에서 '정확한' 확률 계산, 카이제곱의 보완",
      "differential": "카이제곱은 근사적 검정(대표본)이고, 피셔의 정확검정은 정확한 확률을 직접 계산(소표본)한다.",
      "key_point": "기대빈도가 5 미만인 셀이 있으면 카이제곱 대신 피셔의 정확검정을 사용해야 한다.",
      "common_mistake": "피셔의 정확검정이 2×2 분할표에만 적용된다고 오해하지만, 확장 버전은 더 큰 분할표에도 적용 가능하다."
    }
  },
  {
    "id": "NONPARA_MDT_007",
    "terminology": "중앙값 검정 (Median Test)",
    "terminology_ko": "중앙값 검정",
    "terminology_en": "Median Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "두 개 이상의 독립 집단에서 공통 중앙값보다 위와 아래에 속하는 사례 수를 비교하여 집단 간 중심 경향의 차이를 검정하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that tests differences in central tendency among two or more independent groups by comparing the number of cases above and below a common median.",
    "significance": "개념적으로 단순하여 비모수 검정의 기초적 이해에 도움이 되지만, 검정력이 낮아 실제 연구에서는 맨-휘트니 U나 크루스칼-왈리스가 더 선호된다.",
    "key_researchers": [
      {
        "name_ko": "시드니 시겔",
        "name_en": "Sidney Siegel",
        "contribution": "비모수 통계 교과서에서 중앙값 검정의 절차와 한계를 체계적으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "중앙값",
        "name_en": "Median",
        "id": "DESCRIP_MD_002"
      },
      {
        "name_ko": "맨-휘트니 U검정",
        "name_en": "Mann-Whitney U Test",
        "id": "NONPARA_MWU_002"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "크루스칼-왈리스 검정",
        "name_en": "Kruskal-Wallis Test",
        "id": "NONPARA_KW_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "중앙값 검정 = 전체 중앙값 기준 위/아래 빈도를 카이제곱으로 비교",
      "differential": "중앙값 검정은 중앙값 위/아래의 빈도만 사용하지만, 맨-휘트니는 모든 순위 정보를 활용하여 검정력이 더 높다.",
      "key_point": "순위 정보를 이분화(중앙값 위/아래)하므로 정보 손실이 크고 검정력이 낮다.",
      "common_mistake": "중앙값 검정이 중앙값의 '동일성'을 검정한다고 오해하지만, 실제로는 분포의 위치를 비교하는 것이다."
    }
  },
  {
    "id": "NONPARA_RUN_008",
    "terminology": "런 검정 (Runs Test)",
    "terminology_ko": "런 검정",
    "terminology_en": "Runs Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "이진 데이터 시퀀스에서 연속적으로 동일한 값이 나타나는 구간(런)의 수를 분석하여 자료의 무선성(randomness)을 검정하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that tests the randomness of data by analyzing the number of runs (consecutive sequences of identical values) in a binary data sequence.",
    "significance": "심리학 실험에서 무선 배정의 적절성을 확인하거나, 회귀 잔차의 독립성(무선 패턴)을 검증하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "아브라함 왈드",
        "name_en": "Abraham Wald",
        "contribution": "Jacob Wolfowitz와 함께 런 검정의 수학적 기초와 분포를 확립했다."
      },
      {
        "name_ko": "제이콥 울포위츠",
        "name_en": "Jacob Wolfowitz",
        "contribution": "Abraham Wald와 공동으로 무선성 검정을 위한 런 검정을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "잔차분석",
        "name_en": "Residual Analysis",
        "id": "REGRESS_RA_015"
      },
      {
        "name_ko": "더빈-왓슨 검정",
        "name_en": "Durbin-Watson Test",
        "id": "REGRESS_DW_017"
      },
      {
        "name_ko": "무선화검정",
        "name_en": "Randomization Test",
        "id": "NONPARA_RAND_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "런(run) = 같은 것이 연속으로 나오는 묶음, 런이 너무 많거나 적으면 비무선적",
      "differential": "런 검정은 순서의 무선성을 검정하고, 더빈-왓슨은 잔차 간의 자기상관을 검정한다.",
      "key_point": "런의 수가 기대보다 너무 많으면 체계적 교대, 너무 적으면 군집화 경향을 의미한다.",
      "common_mistake": "런 검정은 이진 데이터에만 직접 적용 가능하며, 연속 자료는 중앙값 기준으로 이분화한 후 사용한다."
    }
  },
  {
    "id": "NONPARA_KS_009",
    "terminology": "콜모고로프-스미르노프 검정 (Kolmogorov-Smirnov Test)",
    "terminology_ko": "콜모고로프-스미르노프 검정",
    "terminology_en": "Kolmogorov-Smirnov Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "표본의 누적분포함수와 이론적 분포(또는 다른 표본)의 누적분포함수 간의 최대 차이를 이용하여 분포의 적합성을 검정하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that tests the goodness of fit of a distribution by using the maximum difference between the cumulative distribution function of the sample and a theoretical distribution (or another sample).",
    "significance": "심리학 연구에서 데이터의 정규성을 검정하는 데 가장 많이 사용되는 방법 중 하나로, 모수 통계 적용의 전제 조건을 확인하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "안드레이 콜모고로프",
        "name_en": "Andrey Kolmogorov",
        "contribution": "1933년 일표본 적합도 검정을 개발하여 분포 비교의 수학적 기초를 확립했다."
      },
      {
        "name_ko": "니콜라이 스미르노프",
        "name_en": "Nikolai Smirnov",
        "contribution": "Kolmogorov의 검정을 이표본 비교로 확장하여 두 분포의 차이를 검정하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      },
      {
        "name_ko": "비모수적 가정",
        "name_en": "Nonparametric Assumptions",
        "id": "NONPARA_NPA_027"
      },
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      },
      {
        "name_ko": "카이제곱 적합도 검정",
        "name_en": "Chi-Square Goodness-of-Fit Test",
        "id": "NONPARA_GOF_016"
      }
    ],
    "sub_types": [
      {
        "name": "일표본 K-S 검정 (One-sample)",
        "description": "표본이 특정 이론적 분포를 따르는지 검정"
      },
      {
        "name": "이표본 K-S 검정 (Two-sample)",
        "description": "두 표본이 동일한 분포를 따르는지 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "K-S 검정 = 누적분포 곡선 간의 '최대 차이(D)'를 검정 통계량으로 사용",
      "differential": "K-S 검정은 분포 전체의 형태를 비교하지만, 샤피로-윌크 검정은 정규성에 특화되어 더 검정력이 높다.",
      "key_point": "검정 통계량 D는 두 누적분포함수 간의 최대 수직 거리이다.",
      "common_mistake": "K-S 검정은 대표본에서 사소한 차이도 유의하게 나올 수 있으며, 정규성 검정 시 샤피로-윌크가 더 권장된다."
    }
  },
  {
    "id": "NONPARA_SR_010",
    "terminology": "스피어만 순위 상관 (Spearman Rank Correlation)",
    "terminology_ko": "스피어만 순위 상관",
    "terminology_en": "Spearman Rank Correlation",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "두 변인의 순위를 이용하여 단조적(monotonic) 관련성의 방향과 강도를 측정하는 비모수 상관계수로, 피어슨 상관의 비모수 대안이다.",
    "definition_en": "A nonparametric correlation coefficient that measures the direction and strength of the monotonic relationship between two variables using their ranks, serving as a nonparametric alternative to Pearson correlation.",
    "significance": "심리학 연구에서 서열 자료이거나 정규성이 보장되지 않을 때 두 변인 간 관계를 파악하는 표준적 비모수 상관 방법이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 스피어만",
        "name_en": "Charles Spearman",
        "contribution": "1904년 순위 상관계수를 개발하였으며, 일반 지능(g-factor) 이론으로도 유명하다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "켄달의 W",
        "name_en": "Kendall's W",
        "id": "NONPARA_KW2_015"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "스피어만 상관",
        "name_en": "Spearman Correlation",
        "id": "CORR_SR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "스피어만 ρ(rho) = 순위로 변환한 후 피어슨 상관을 구한 것과 동일",
      "differential": "피어슨은 '선형' 관계를 측정하고, 스피어만은 '단조적' 관계를 측정한다. 곡선적이지만 단조적인 관계도 포착 가능하다.",
      "key_point": "원점수를 순위로 변환하므로 이상치에 강건하고, 서열 자료에 직접 적용 가능하다.",
      "common_mistake": "스피어만 상관을 순서가 있는 자료에만 사용한다고 오해하지만, 연속 자료에서도 정규성 위반 시 사용 가능하다."
    }
  },
  {
    "id": "NONPARA_ST_011",
    "terminology": "부호 검정 (Sign Test)",
    "terminology_ko": "부호 검정",
    "terminology_en": "Sign Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "대응 표본에서 차이값의 부호(양 또는 음)만을 이용하여 두 조건 간 차이를 검정하는 가장 단순한 비모수 방법이다.",
    "definition_en": "The simplest nonparametric method that tests differences between two paired conditions using only the signs (positive or negative) of the difference scores.",
    "significance": "가정이 거의 없는 가장 보수적인 비모수 검정으로, 자료의 측정 수준이 낮거나 극단적인 가정 위반 시에도 적용 가능하다.",
    "key_researchers": [
      {
        "name_ko": "존 아부스노트",
        "name_en": "John Arbuthnot",
        "contribution": "1710년 남녀 출생비 연구에서 부호 검정의 원리를 최초로 적용한 것으로 알려져 있다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "NONPARA_WSR_003"
      },
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "이항검정",
        "name_en": "Binomial Test",
        "id": "NONPARA_BN_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부호 검정 = 차이의 '부호'만 봄(+인지 -인지), 가장 단순한 비모수",
      "differential": "부호 검정은 차이의 방향만 사용하여 검정력이 낮고, 윌콕슨 부호순위는 방향+크기를 사용하여 검정력이 더 높다.",
      "key_point": "차이값의 크기를 무시하고 양의 차이와 음의 차이의 빈도만 비교하므로 정보 손실이 크다.",
      "common_mistake": "부호 검정은 검정력이 매우 낮으므로, 가능하면 윌콕슨 부호순위 검정을 사용하는 것이 바람직하다."
    }
  },
  {
    "id": "NONPARA_BN_012",
    "terminology": "이항검정 (Binomial Test)",
    "terminology_ko": "이항검정",
    "terminology_en": "Binomial Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "이분형 결과(성공/실패)의 관찰된 비율이 이론적 기대 비율과 유의하게 다른지를 이항분포에 기반하여 검정하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that tests whether the observed proportion of a dichotomous outcome (success/failure) significantly differs from a theoretical expected proportion, based on the binomial distribution.",
    "significance": "심리학에서 선호도, 정답률, 반응 경향 등이 우연 수준과 다른지를 검증하는 기본적 방법으로, 단일 비율의 유의성 검정에 사용된다.",
    "key_researchers": [
      {
        "name_ko": "야코프 베르누이",
        "name_en": "Jacob Bernoulli",
        "contribution": "이항분포의 수학적 기초를 확립하여 이항검정의 이론적 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부호 검정",
        "name_en": "Sign Test",
        "id": "NONPARA_ST_011"
      },
      {
        "name_ko": "카이제곱 적합도 검정",
        "name_en": "Chi-Square Goodness-of-Fit Test",
        "id": "NONPARA_GOF_016"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이항(Bi-nomial) = 2가지 결과, 관찰 비율 vs 기대 비율 비교",
      "differential": "이항검정은 두 범주 중 하나의 비율을 검정하고, 카이제곱 적합도는 여러 범주의 분포를 동시에 검정한다.",
      "key_point": "소표본에서 정확한 확률을 계산하며, 대표본에서는 정규근사를 사용할 수 있다.",
      "common_mistake": "이항검정은 단일 비율 검정이므로, 두 집단 비율 비교에는 카이제곱 또는 z검정을 사용해야 한다."
    }
  },
  {
    "id": "NONPARA_MN_013",
    "terminology": "맥니마 검정 (McNemar Test)",
    "terminology_ko": "맥니마 검정",
    "terminology_en": "McNemar Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "대응 표본(동일 대상 반복측정)에서 이분형 변인의 변화가 유의한지를 검정하는 비모수 방법으로, 사전-사후 범주 변화의 대칭성을 검정한다.",
    "definition_en": "A nonparametric method that tests whether the change in a dichotomous variable is significant in paired samples (repeated measures of the same subjects), testing the symmetry of pre-post categorical changes.",
    "significance": "심리학에서 처치 전후의 성공/실패, 찬성/반대 등 이분형 응답의 변화가 유의한지를 검증하는 데 사용되며, 태도 변화 연구에 특히 유용하다.",
    "key_researchers": [
      {
        "name_ko": "퀸 맥니마",
        "name_en": "Quinn McNemar",
        "contribution": "1947년 대응 표본의 이분형 자료 변화를 검정하는 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "윌콕슨 부호순위 검정",
        "name_en": "Wilcoxon Signed-Rank Test",
        "id": "NONPARA_WSR_003"
      },
      {
        "name_ko": "코크런 Q검정",
        "name_en": "Cochran's Q Test",
        "id": "NONPARA_CQ_014"
      },
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "맥니마 = 대응(사전-사후) + 이분형(예/아니오), 변화한 셀만 분석",
      "differential": "맥니마는 대응 이분형 자료의 변화를, 카이제곱은 독립 표본의 범주 분포를 검정한다.",
      "key_point": "변화가 없는 셀(동의→동의, 불동의→불동의)은 무시하고, 변화한 셀(동의→불동의, 불동의→동의)만 분석한다.",
      "common_mistake": "맥니마 검정에서 분석의 초점은 '불일치 셀'이며, 일치 셀은 검정에 기여하지 않는다."
    }
  },
  {
    "id": "NONPARA_CQ_014",
    "terminology": "코크런 Q검정 (Cochran's Q Test)",
    "terminology_ko": "코크런 Q검정",
    "terminology_en": "Cochran's Q Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "세 개 이상의 반복측정 조건에서 이분형 결과(성공/실패)의 비율이 조건 간에 유의하게 다른지를 검정하는 비모수 방법으로, 맥니마 검정의 확장이다.",
    "definition_en": "A nonparametric method that tests whether the proportions of a dichotomous outcome (success/failure) differ significantly across three or more repeated measures conditions, extending the McNemar test.",
    "significance": "심리학에서 동일 참가자가 여러 조건에서 보인 이분형 반응(정답/오답 등)의 차이를 비교하는 반복측정 설계에 적용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 코크런",
        "name_en": "William Cochran",
        "contribution": "반복측정에서 이분형 결과를 비교하는 Q검정을 개발하여 맥니마 검정을 다조건으로 확장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "맥니마 검정",
        "name_en": "McNemar Test",
        "id": "NONPARA_MN_013"
      },
      {
        "name_ko": "프리드만 검정",
        "name_en": "Friedman Test",
        "id": "NONPARA_FR_005"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "코크런 Q = 맥니마의 확장판, 3조건+ 반복측정 이분형 비교",
      "differential": "맥니마는 2조건 대응 비교이고, 코크런 Q는 3조건 이상의 반복측정 이분형 비교이다.",
      "key_point": "프리드만 검정과 유사하지만, 종속변인이 이분형(0/1)이라는 점이 다르다.",
      "common_mistake": "코크런 Q검정이 유의하면 모든 조건 쌍이 다르다는 뜻이 아니며, 사후검정(맥니마 + 보정)이 필요하다."
    }
  },
  {
    "id": "NONPARA_KW2_015",
    "terminology": "켄달의 일치계수 (Kendall's W, Coefficient of Concordance)",
    "terminology_ko": "켄달의 일치계수",
    "terminology_en": "Kendall's Coefficient of Concordance",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "여러 평정자(또는 반복측정)의 순위 평정이 얼마나 일치하는지를 0에서 1 사이의 값으로 나타내는 비모수 일치도 지표이다.",
    "definition_en": "A nonparametric measure of agreement indicating the degree of concordance among multiple raters' (or repeated measures') rank ratings, ranging from 0 to 1.",
    "significance": "심리학에서 평정자 간 신뢰도, 전문가 합의도, 선호도 일치도 등을 평가하는 데 사용되며, 서열 자료의 일치도 측정에 표준적이다.",
    "key_researchers": [
      {
        "name_ko": "모리스 켄달",
        "name_en": "Maurice Kendall",
        "contribution": "일치계수(W)와 순위상관계수(τ)를 개발하여 비모수 상관 및 일치도 분석의 기초를 확립했다."
      },
      {
        "name_ko": "버나드 배빙턴 스미스",
        "name_en": "Bernard Babington Smith",
        "contribution": "Kendall과 함께 일치계수의 수학적 성질과 적용 방법을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스피어만 순위 상관",
        "name_en": "Spearman Rank Correlation",
        "id": "NONPARA_SR_010"
      },
      {
        "name_ko": "프리드만 검정",
        "name_en": "Friedman Test",
        "id": "NONPARA_FR_005"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "켄달 W = 평정자들의 '합의 정도', 0(불일치)~1(완전 일치)",
      "differential": "스피어만은 두 변인(또는 2명의 평정자) 간 상관이고, 켄달 W는 3명 이상 평정자의 전체 일치도이다.",
      "key_point": "W = 0이면 평정자 간 합의가 없고, W = 1이면 모든 평정자가 동일한 순위를 매긴 것이다.",
      "common_mistake": "켄달의 W(일치계수)와 켄달의 τ(tau, 순위 상관계수)를 혼동하는 경우가 많다."
    }
  },
  {
    "id": "NONPARA_GOF_016",
    "terminology": "카이제곱 적합도 검정 (Chi-Square Goodness-of-Fit Test)",
    "terminology_ko": "카이제곱 적합도 검정",
    "terminology_en": "Chi-Square Goodness-of-Fit Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "한 범주형 변인의 관찰된 빈도 분포가 이론적으로 기대되는 분포와 유의하게 다른지를 검정하는 방법이다.",
    "definition_en": "A method that tests whether the observed frequency distribution of a single categorical variable significantly differs from a theoretically expected distribution.",
    "significance": "심리학 연구에서 응답 분포가 균등한지, 이론적 비율과 일치하는지를 검증하는 기본적 방법으로, 분포 가설을 검정하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "1900년 적합도 검정을 최초로 개발하여 관찰 분포와 이론 분포를 비교하는 통계적 방법의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 독립성 검정",
        "name_en": "Chi-Square Test of Independence",
        "id": "NONPARA_IND_017"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "관찰빈도",
        "name_en": "Observed Frequency",
        "id": "NONPARA_OF_019"
      },
      {
        "name_ko": "콜모고로프-스미르노프 검정",
        "name_en": "Kolmogorov-Smirnov Test",
        "id": "NONPARA_KS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "적합도 = 관찰 분포가 기대 분포에 '적합'한가? 한 변인의 분포만 검정",
      "differential": "적합도 검정은 한 변인의 분포를 검정하고, 독립성 검정은 두 변인 간의 관련성을 검정한다.",
      "key_point": "자유도 = 범주 수(k) - 1이며, 기대빈도 < 5인 범주가 많으면 범주를 합칠 필요가 있다.",
      "common_mistake": "적합도 검정의 기대빈도가 항상 균등 분포라고 오해하지만, 이론에 따른 불균등 기대비율도 설정 가능하다."
    }
  },
  {
    "id": "NONPARA_IND_017",
    "terminology": "카이제곱 독립성 검정 (Chi-Square Test of Independence)",
    "terminology_ko": "카이제곱 독립성 검정",
    "terminology_en": "Chi-Square Test of Independence",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "두 범주형 변인이 서로 독립적인지(관련이 없는지)를 분할표(교차표)의 관찰빈도와 기대빈도를 비교하여 검정하는 방법이다.",
    "definition_en": "A method that tests whether two categorical variables are independent (unrelated) by comparing observed and expected frequencies in a contingency (cross-tabulation) table.",
    "significance": "심리학 연구에서 성별과 선호도, 진단 유형과 처치 결과 등 두 범주형 변인 간 관련성을 검증하는 가장 보편적인 방법이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "카이제곱 검정을 분할표에 적용하여 두 변인의 독립성을 검정하는 방법의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 적합도 검정",
        "name_en": "Chi-Square Goodness-of-Fit Test",
        "id": "NONPARA_GOF_016"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "피셔의 정확검정",
        "name_en": "Fisher's Exact Test",
        "id": "NONPARA_FE_006"
      },
      {
        "name_ko": "연속성 보정",
        "name_en": "Continuity Correction",
        "id": "NONPARA_CC_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "독립성 검정 = 두 변인이 '독립'인지 '관련'인지, 분할표(r×c)로 검정",
      "differential": "적합도 검정은 한 변인의 분포만 보지만, 독립성 검정은 두 변인 간 관련성을 본다.",
      "key_point": "기대빈도 = (행 합계 × 열 합계) / 전체 합계로 계산하며, 자유도 = (행-1)(열-1)이다.",
      "common_mistake": "카이제곱이 유의하면 두 변인이 관련 있다는 것이지, 인과관계를 의미하지는 않는다."
    }
  },
  {
    "id": "NONPARA_EF_018",
    "terminology": "기대빈도 (Expected Frequency)",
    "terminology_ko": "기대빈도",
    "terminology_en": "Expected Frequency",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "귀무가설이 참이라는 가정 하에 각 셀에서 이론적으로 기대되는 빈도로, 카이제곱 검정에서 관찰빈도와 비교하는 기준이 된다.",
    "definition_en": "The theoretically expected frequency in each cell under the assumption that the null hypothesis is true, serving as the baseline for comparison with observed frequencies in chi-square tests.",
    "significance": "카이제곱 검정의 핵심 구성요소로, 기대빈도의 크기는 검정의 정확성을 결정하며, 충분히 크지 않으면 대안적 검정을 사용해야 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "카이제곱 검정 공식에서 기대빈도의 역할과 계산 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰빈도",
        "name_en": "Observed Frequency",
        "id": "NONPARA_OF_019"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "피셔의 정확검정",
        "name_en": "Fisher's Exact Test",
        "id": "NONPARA_FE_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기대빈도 = '귀무가설이 맞다면' 이 정도 빈도가 나올 것이다",
      "differential": "기대빈도는 이론적 계산값이고, 관찰빈도는 실제 수집된 데이터의 빈도이다.",
      "key_point": "독립성 검정에서 기대빈도 = (행합계 × 열합계) / 전체합계, 적합도 검정에서는 이론적 비율 × N이다.",
      "common_mistake": "기대빈도가 5 미만인 셀이 전체의 20% 이상이면 카이제곱 근사가 부정확하므로 피셔 정확검정이나 범주 합병을 고려해야 한다."
    }
  },
  {
    "id": "NONPARA_OF_019",
    "terminology": "관찰빈도 (Observed Frequency)",
    "terminology_ko": "관찰빈도",
    "terminology_en": "Observed Frequency",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "실제 수집된 데이터에서 각 범주 또는 분할표의 각 셀에 해당하는 사례의 실제 빈도수이다.",
    "definition_en": "The actual count of cases falling into each category or each cell of a contingency table in the collected data.",
    "significance": "카이제곱 검정에서 기대빈도와 비교되는 실제 데이터 값으로, 관찰빈도와 기대빈도의 차이가 검정의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "관찰빈도와 기대빈도의 비교를 통한 검정 원리를 카이제곱 검정으로 공식화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "빈도자료",
        "name_en": "Frequency Data",
        "id": "NONPARA_FD_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관찰빈도 = 실제로 '관찰된' 빈도, 데이터에서 직접 세어 얻은 수",
      "differential": "관찰빈도는 실제 데이터에서 얻은 빈도이고, 기대빈도는 귀무가설 하의 이론적 빈도이다.",
      "key_point": "χ² = Σ(O-E)²/E 공식에서 O가 관찰빈도, E가 기대빈도이다.",
      "common_mistake": "관찰빈도는 반드시 정수(자연수)여야 하며, 비율이나 백분율을 빈도 대신 사용하면 안 된다."
    }
  },
  {
    "id": "NONPARA_RK_020",
    "terminology": "순위 (Rank)",
    "terminology_ko": "순위",
    "terminology_en": "Rank",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "원점수를 크기 순서대로 나열하여 부여한 서열 값으로, 비모수 통계에서 원점수 대신 분석의 기본 단위로 사용된다.",
    "definition_en": "An ordinal value assigned by arranging raw scores in order of magnitude, used as the basic unit of analysis in nonparametric statistics instead of raw scores.",
    "significance": "비모수 검정의 핵심 개념으로, 원점수를 순위로 변환함으로써 분포 가정에서 자유로운 분석이 가능하며, 이상치의 영향도 감소시킨다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 윌콕슨",
        "name_en": "Frank Wilcoxon",
        "contribution": "순위 기반 검정법(순위합 검정, 부호순위 검정)을 개발하여 순위를 비모수 분석의 핵심 도구로 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "스피어만 순위 상관",
        "name_en": "Spearman Rank Correlation",
        "id": "NONPARA_SR_010"
      },
      {
        "name_ko": "맨-휘트니 U검정",
        "name_en": "Mann-Whitney U Test",
        "id": "NONPARA_MWU_002"
      },
      {
        "name_ko": "서열자료",
        "name_en": "Ordinal Data",
        "id": "NONPARA_OD_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "순위 = 원점수를 '줄 세워서' 번호를 매긴 것",
      "differential": "순위는 크기의 순서 정보만 보존하고 간격 정보는 잃어버리므로, 정보 손실이 발생할 수 있다.",
      "key_point": "동점(tie)이 있으면 평균 순위를 부여하며, 동점이 많으면 검정력이 감소할 수 있다.",
      "common_mistake": "순위 변환은 간격 정보를 잃으므로, 등간/비율 자료에서 불필요하게 비모수로 전환하면 검정력이 떨어진다."
    }
  },
  {
    "id": "NONPARA_CC_021",
    "terminology": "연속성 보정 (Continuity Correction)",
    "terminology_ko": "연속성 보정",
    "terminology_en": "Continuity Correction",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "이산형 분포(빈도자료)에 연속형 분포(카이제곱, 정규분포)를 근사적으로 적용할 때 발생하는 오차를 보정하기 위해 관찰빈도와 기대빈도의 차이에서 0.5를 빼는 조정이다.",
    "definition_en": "An adjustment that subtracts 0.5 from the absolute difference between observed and expected frequencies to correct for the error when approximating a discrete distribution (frequency data) with a continuous distribution (chi-square, normal).",
    "significance": "소표본이나 2×2 분할표에서 카이제곱 검정의 정확성을 높이는 전통적 보정 방법이나, 현대에는 피셔 정확검정이 더 권장되는 경향이 있다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 예이츠",
        "name_en": "Frank Yates",
        "contribution": "1934년 2×2 분할표에서의 연속성 보정(Yates' correction)을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "피셔의 정확검정",
        "name_en": "Fisher's Exact Test",
        "id": "NONPARA_FE_006"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "예이츠 보정 = |O-E|에서 0.5를 빼서 보수적으로 조정",
      "differential": "연속성 보정은 카이제곱 근사를 보수적으로 만들고, 피셔 정확검정은 정확한 확률을 직접 계산한다.",
      "key_point": "주로 2×2 분할표(자유도=1)에서 적용되며, 더 큰 분할표에서는 일반적으로 불필요하다.",
      "common_mistake": "연속성 보정이 지나치게 보수적이어서 검정력을 떨어뜨릴 수 있다는 비판이 있으며, 피셔 정확검정이 대안으로 선호된다."
    }
  },
  {
    "id": "NONPARA_ES_022",
    "terminology": "비모수 효과크기 (Nonparametric Effect Size)",
    "terminology_ko": "비모수 효과크기",
    "terminology_en": "Nonparametric Effect Size",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "비모수 검정 결과의 실질적 의미를 평가하기 위한 효과크기 지표로, 순위 기반 검정에서는 r = Z/√N, 카이제곱에서는 크래머의 V 등이 사용된다.",
    "definition_en": "Effect size measures for evaluating the practical significance of nonparametric test results, including r = Z/√N for rank-based tests and Cramér's V for chi-square tests.",
    "significance": "유의성 검정만으로는 효과의 실질적 크기를 알 수 없으므로, 비모수 분석에서도 효과크기를 보고하여 연구 결과의 실용적 의미를 평가해야 한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기의 해석 기준과 중요성을 강조하여 모든 통계 분석에서 효과크기 보고의 필요성을 확립했다."
      },
      {
        "name_ko": "하랄트 크래머",
        "name_en": "Harald Cramér",
        "contribution": "범주형 자료의 연관성 강도를 측정하는 크래머의 V(Cramér's V)를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-squared",
        "id": "EFFECT_R2_008"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      }
    ],
    "sub_types": [
      {
        "name": "r = Z/√N",
        "description": "맨-휘트니, 윌콕슨 등 순위 기반 검정의 효과크기"
      },
      {
        "name": "크래머의 V (Cramér's V)",
        "description": "카이제곱 검정의 연관성 강도 지표"
      },
      {
        "name": "파이 계수 (Phi coefficient)",
        "description": "2×2 분할표에서의 연관성 강도"
      },
      {
        "name": "η² (에타제곱)",
        "description": "크루스칼-왈리스 등에서 사용 가능한 효과크기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비모수도 효과크기가 필요하다! 유의하다 ≠ 크다",
      "differential": "모수적 효과크기(Cohen's d, η²)는 원점수 기반이고, 비모수 효과크기(r = Z/√N)는 순위/검정 통계량 기반이다.",
      "key_point": "APA 기준에 따라 비모수 검정에서도 효과크기를 반드시 보고해야 한다.",
      "common_mistake": "비모수 검정에서 효과크기를 보고하지 않는 경우가 많지만, 유의성만으로는 실질적 의미를 판단할 수 없다."
    }
  },
  {
    "id": "NONPARA_BS_023",
    "terminology": "부트스트랩 (Bootstrap)",
    "terminology_ko": "부트스트랩",
    "terminology_en": "Bootstrap",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "원래 표본에서 복원추출을 반복하여 통계량의 표집분포를 경험적으로 추정하는 재표집(resampling) 방법으로, 분포 가정 없이 신뢰구간과 유의성 검정을 수행할 수 있다.",
    "definition_en": "A resampling method that repeatedly draws samples with replacement from the original sample to empirically estimate the sampling distribution of a statistic, enabling confidence intervals and significance tests without distributional assumptions.",
    "significance": "전통적 가정이 충족되지 않는 심리학 데이터에서 강건한 추론을 가능하게 하며, 특히 매개효과 검증 등에서 표준적 방법으로 권장된다.",
    "key_researchers": [
      {
        "name_ko": "브래들리 에프론",
        "name_en": "Bradley Efron",
        "contribution": "1979년 부트스트랩 방법을 개발하여 통계적 추론의 혁명적 전환을 이끌었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선화검정",
        "name_en": "Randomization Test",
        "id": "NONPARA_RAND_024"
      },
      {
        "name_ko": "정확검정",
        "name_en": "Exact Test",
        "id": "NONPARA_ET_025"
      },
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "매개회귀",
        "name_en": "Mediated Regression",
        "id": "REGRESS_MED_021"
      }
    ],
    "sub_types": [
      {
        "name": "비모수적 부트스트랩 (Nonparametric Bootstrap)",
        "description": "원 표본에서 직접 복원추출"
      },
      {
        "name": "모수적 부트스트랩 (Parametric Bootstrap)",
        "description": "추정된 모수를 기반으로 새 표본 생성"
      },
      {
        "name": "편향 보정 부트스트랩 (BCa Bootstrap)",
        "description": "편향과 가속도를 보정한 부트스트랩 신뢰구간"
      }
    ],
    "quiz_hints": {
      "mnemonic": "부트스트랩 = 자기 신발끈을 당겨 스스로 일어나듯, 데이터 자체에서 반복 추출",
      "differential": "부트스트랩은 '복원' 추출이고, 잭나이프(jackknife)는 한 번에 하나씩 '제거'하는 방법이다.",
      "key_point": "1,000~10,000회 반복 추출하여 통계량의 분포를 경험적으로 구성하며, 신뢰구간 산출에 특히 유용하다.",
      "common_mistake": "부트스트랩이 표본크기를 늘려주는 것이 아니라, 같은 표본에서 반복 추출하여 표집분포를 추정하는 것이다."
    }
  },
  {
    "id": "NONPARA_RAND_024",
    "terminology": "무선화검정 (Randomization Test)",
    "terminology_ko": "무선화검정",
    "terminology_en": "Randomization Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "관찰된 데이터의 가능한 모든 순열(또는 무선 배정)을 생성하여 관찰된 검정 통계량이 우연히 발생할 확률을 직접 계산하는 비모수 방법이다.",
    "definition_en": "A nonparametric method that generates all possible permutations (or random assignments) of observed data to directly calculate the probability that the observed test statistic could occur by chance.",
    "significance": "분포 가정에 전혀 의존하지 않는 가장 순수한 비모수 방법으로, 소표본 실험 연구에서 정확한 유의확률을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선화 원리를 실험 설계의 기초로 확립하고, 정확검정의 논리적 토대를 마련했다."
      },
      {
        "name_ko": "에드윈 피트먼",
        "name_en": "Edwin Pitman",
        "contribution": "순열 검정(permutation test)의 수학적 기초를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부트스트랩",
        "name_en": "Bootstrap",
        "id": "NONPARA_BS_023"
      },
      {
        "name_ko": "정확검정",
        "name_en": "Exact Test",
        "id": "NONPARA_ET_025"
      },
      {
        "name_ko": "실험설계",
        "name_en": "Experimental Design",
        "id": "DESIGN_ED_001"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [
      {
        "name": "정확 순열 검정 (Exact Permutation Test)",
        "description": "모든 가능한 순열을 열거하여 검정"
      },
      {
        "name": "몬테카를로 순열 검정 (Monte Carlo Permutation Test)",
        "description": "무선 표집된 순열의 부분집합을 사용한 근사 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "무선화검정 = 데이터 라벨을 무선으로 섞어보며 '우연히 이런 결과가 나올까?' 확인",
      "differential": "무선화검정은 데이터를 섞어 비교하고, 부트스트랩은 복원추출로 표집분포를 추정한다.",
      "key_point": "분포 가정이 전혀 필요 없으며, 유의확률은 관찰값보다 극단적인 순열의 비율이다.",
      "common_mistake": "가능한 순열 수가 매우 많을 때는 정확 계산이 불가능하므로 몬테카를로 근사를 사용해야 한다."
    }
  },
  {
    "id": "NONPARA_ET_025",
    "terminology": "정확검정 (Exact Test)",
    "terminology_ko": "정확검정",
    "terminology_en": "Exact Test",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "근사적 분포(카이제곱, 정규분포 등)에 의존하지 않고, 검정 통계량의 정확한 확률분포를 직접 계산하여 유의확률을 산출하는 통계적 검정 방법의 총칭이다.",
    "definition_en": "A general term for statistical tests that calculate exact p-values by directly computing the exact probability distribution of the test statistic, without relying on approximate distributions (chi-square, normal, etc.).",
    "significance": "소표본이나 희소 자료에서 근사 검정이 부정확할 때 정확한 유의확률을 제공하여, 심리학의 소규모 임상 연구나 사례 연구에서 특히 중요하다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "정확검정의 논리적 기초를 확립하고 피셔의 정확검정을 개발했다."
      },
      {
        "name_ko": "시릴 메타",
        "name_en": "Cyrus Mehta",
        "contribution": "정확검정을 효율적으로 계산하는 알고리즘(네트워크 알고리즘)을 개발하여 실용적 적용을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피셔의 정확검정",
        "name_en": "Fisher's Exact Test",
        "id": "NONPARA_FE_006"
      },
      {
        "name_ko": "무선화검정",
        "name_en": "Randomization Test",
        "id": "NONPARA_RAND_024"
      },
      {
        "name_ko": "부트스트랩",
        "name_en": "Bootstrap",
        "id": "NONPARA_BS_023"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정확검정 = 근사 없이 '정확한' 확률을 직접 계산",
      "differential": "정확검정은 확률을 직접 계산하고, 근사 검정(카이제곱 등)은 이론적 분포에 기반한 근사값을 사용한다.",
      "key_point": "소표본이나 기대빈도가 낮을 때 근사 검정보다 정확하며, 컴퓨터 발달로 실용적 적용이 가능해졌다.",
      "common_mistake": "정확검정은 항상 근사 검정보다 낫다고 오해할 수 있지만, 대표본에서는 근사 검정이 충분히 정확하고 계산이 빠르다."
    }
  },
  {
    "id": "NONPARA_CR_026",
    "terminology": "기각역 (Critical Region)",
    "terminology_ko": "기각역",
    "terminology_en": "Critical Region",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "귀무가설을 기각하는 검정 통계량의 값 범위로, 비모수 검정에서는 모수적 검정과 달리 특수한 임계값 표를 사용하거나 정확 확률을 계산하여 결정한다.",
    "definition_en": "The range of test statistic values that leads to rejection of the null hypothesis; in nonparametric tests, determined using special critical value tables or exact probability calculations rather than standard parametric distributions.",
    "significance": "비모수 검정에서 통계적 의사결정의 기준을 제공하며, 검정마다 고유한 임계값 표가 있어 올바른 표를 참조하는 것이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "에곤 피어슨과 함께 기각역의 개념을 포함한 가설검정 이론을 체계화했다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "Neyman과 공동으로 제1종 오류와 기각역의 관계를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "귀무가설",
        "name_en": "Null Hypothesis",
        "id": "HYPO_NH_001"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기각역 = 이 범위에 들어오면 H₀를 '기각'하는 영역",
      "differential": "비모수 검정의 기각역은 전용 임계값 표에서 확인하고, 모수 검정은 t, F, z 분포 표를 사용한다.",
      "key_point": "유의수준(α)이 기각역의 크기를 결정하며, α가 작을수록 기각역이 좁아진다.",
      "common_mistake": "비모수 검정에서 모수적 임계값 표를 사용하면 잘못된 결론을 내릴 수 있다."
    }
  },
  {
    "id": "NONPARA_NPA_027",
    "terminology": "비모수적 가정 (Nonparametric Assumptions)",
    "terminology_ko": "비모수적 가정",
    "terminology_en": "Nonparametric Assumptions",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "비모수 검정이 정규분포 등 분포 형태에 대한 가정을 하지 않지만, 독립성, 무선 표집, 측정 수준 등 여전히 충족해야 하는 기본 가정들을 말한다.",
    "definition_en": "The basic assumptions that nonparametric tests still require despite not assuming specific distributional forms like normality, including independence, random sampling, and appropriate measurement level.",
    "significance": "비모수 검정이 '가정이 없다'는 흔한 오해를 바로잡고, 적절한 비모수 방법 선택을 위해 측정 수준과 표집 조건을 확인해야 함을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "시드니 시겔",
        "name_en": "Sidney Siegel",
        "contribution": "행동과학을 위한 비모수 통계 교과서에서 비모수 검정의 가정과 적용 조건을 체계적으로 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가정 검증",
        "name_en": "Assumption Checking",
        "id": "REGRESS_AC_031"
      },
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "정규분포",
        "name_en": "Normal Distribution",
        "id": "PROB_ND_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비모수 ≠ 무가정, 분포 가정은 없지만 독립성·표집·측정 수준 가정은 있다",
      "differential": "모수 검정은 분포 형태(정규성, 등분산성)를 가정하지만, 비모수 검정은 분포 가정 없이 독립성과 측정 수준만 가정한다.",
      "key_point": "비모수 검정도 관찰의 독립성, 무선 표집, 적절한 측정 수준을 필요로 한다.",
      "common_mistake": "비모수 검정에 '아무런 가정이 없다'고 오해하는 것이 가장 흔한 실수이다."
    }
  },
  {
    "id": "NONPARA_OD_028",
    "terminology": "서열자료 (Ordinal Data)",
    "terminology_ko": "서열자료",
    "terminology_en": "Ordinal Data",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "대상 간의 순서(크고 작음)는 구분할 수 있지만, 순서 간 간격이 동일하다고 보장할 수 없는 측정 수준의 자료로, 비모수 검정의 주요 적용 대상이다.",
    "definition_en": "Data measured at a level where the order (greater or lesser) among objects can be determined but equal intervals between ranks are not guaranteed, serving as a primary application target for nonparametric tests.",
    "significance": "심리학에서 리커트 척도 응답, 선호도 순위, 증상 심각도 등급 등 서열 자료는 매우 흔하며, 이러한 자료의 적절한 분석을 위해 비모수 방법이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Stevens",
        "contribution": "1946년 측정 수준(명명, 서열, 등간, 비율)의 분류 체계를 확립하여 적절한 통계 방법 선택의 기준을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "서열척도",
        "name_en": "Ordinal Scale",
        "id": "MEASURE_OR_004"
      },
      {
        "name_ko": "명명자료",
        "name_en": "Nominal Data",
        "id": "NONPARA_ND_029"
      },
      {
        "name_ko": "순위",
        "name_en": "Rank",
        "id": "NONPARA_RK_020"
      },
      {
        "name_ko": "비모수적 가정",
        "name_en": "Nonparametric Assumptions",
        "id": "NONPARA_NPA_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "서열 = '순서'만 의미 있음, 1등과 2등의 차이 ≠ 2등과 3등의 차이",
      "differential": "서열자료는 순서는 있지만 간격이 동일하지 않고, 등간자료는 순서와 간격 모두 동일하다.",
      "key_point": "서열자료에 평균 대신 중앙값, 피어슨 대신 스피어만 상관 등 비모수 방법이 적합하다.",
      "common_mistake": "5점 리커트 척도를 등간척도로 간주하고 모수 통계를 적용하는 것은 논쟁의 여지가 있다."
    }
  },
  {
    "id": "NONPARA_ND_029",
    "terminology": "명명자료 (Nominal Data)",
    "terminology_ko": "명명자료",
    "terminology_en": "Nominal Data",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "범주나 이름으로만 구분되며 순서나 크기 비교가 불가능한 가장 낮은 측정 수준의 자료로, 빈도 기반 비모수 검정(카이제곱 등)의 대상이 된다.",
    "definition_en": "Data at the lowest measurement level classified only by category or name with no meaningful order or magnitude comparison, analyzed using frequency-based nonparametric tests such as chi-square.",
    "significance": "심리학에서 성별, 진단 유형, 집단 소속 등 범주형 변인은 매우 흔하며, 이러한 자료에 적합한 통계 방법(카이제곱, 피셔 정확검정 등)의 선택이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 스티븐스",
        "name_en": "Stanley Stevens",
        "contribution": "명명척도를 측정 수준 분류 체계의 가장 기본적 수준으로 정의했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "명명척도",
        "name_en": "Nominal Scale",
        "id": "MEASURE_NM_003"
      },
      {
        "name_ko": "서열자료",
        "name_en": "Ordinal Data",
        "id": "NONPARA_OD_028"
      },
      {
        "name_ko": "빈도자료",
        "name_en": "Frequency Data",
        "id": "NONPARA_FD_030"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "명명 = '이름표'만 붙이는 것, 숫자 코딩(1=남, 2=여)은 라벨일 뿐",
      "differential": "명명자료는 범주 구분만 가능하고, 서열자료는 순서 비교까지 가능하다.",
      "key_point": "명명자료에 적용 가능한 통계: 최빈값, 빈도, 카이제곱, 피셔 정확검정 등이다.",
      "common_mistake": "명명자료에 숫자를 부여(예: 남=1, 여=2)했다고 산술 연산이 가능하다고 오해하면 안 된다."
    }
  },
  {
    "id": "NONPARA_FD_030",
    "terminology": "빈도자료 (Frequency Data)",
    "terminology_ko": "빈도자료",
    "terminology_en": "Frequency Data",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "각 범주에 해당하는 사례의 수(빈도)로 표현된 자료로, 카이제곱 검정 등 범주형 비모수 검정의 기본 입력 자료이다.",
    "definition_en": "Data expressed as the count (frequency) of cases falling into each category, serving as the basic input data for categorical nonparametric tests such as chi-square.",
    "significance": "심리학 설문 조사, 임상 분류, 행동 관찰 연구 등에서 빈도자료는 매우 흔하며, 적절한 비모수 분석 방법의 선택이 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "빈도자료를 분석하는 카이제곱 검정을 개발하여 범주형 자료 분석의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰빈도",
        "name_en": "Observed Frequency",
        "id": "NONPARA_OF_019"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "명명자료",
        "name_en": "Nominal Data",
        "id": "NONPARA_ND_029"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "빈도자료 = '몇 명인지' 세는 것, 범주별 사례 수가 데이터",
      "differential": "빈도자료는 사례 수(count)이고, 비율자료는 빈도를 전체로 나눈 값(proportion)이다.",
      "key_point": "카이제곱 검정에 입력하는 것은 비율이 아니라 빈도(원수)이어야 한다.",
      "common_mistake": "비율이나 백분율을 빈도 대신 카이제곱 공식에 넣으면 결과가 왜곡된다."
    }
  },
  {
    "id": "NONPARA_PA_031",
    "terminology": "모수적 대안 (Parametric Alternative)",
    "terminology_ko": "모수적 대안",
    "terminology_en": "Parametric Alternative",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "비모수 검정에 대응하는 모수적 검정법으로, 정규성 등 분포 가정이 충족될 때 비모수 검정보다 더 높은 검정력을 제공한다.",
    "definition_en": "The parametric counterpart of a nonparametric test, providing higher statistical power than the nonparametric test when distributional assumptions such as normality are met.",
    "significance": "적절한 검정법 선택을 위해 모수적 대안과 비모수 검정의 대응 관계를 이해하는 것이 중요하며, 가정 충족 시 모수 검정이 더 효율적이다.",
    "key_researchers": [
      {
        "name_ko": "시드니 시겔",
        "name_en": "Sidney Siegel",
        "contribution": "비모수 검정과 모수적 대안의 대응 관계를 체계적으로 정리한 교과서를 저술했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "대응표본 t검정",
        "name_en": "Paired Samples t-test",
        "id": "TTEST_PT_003"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [
      {
        "name": "맨-휘트니 ↔ 독립표본 t검정",
        "description": "독립 2집단 비교"
      },
      {
        "name": "윌콕슨 부호순위 ↔ 대응표본 t검정",
        "description": "대응 2집단 비교"
      },
      {
        "name": "크루스칼-왈리스 ↔ 일원분산분석",
        "description": "독립 3집단+ 비교"
      },
      {
        "name": "프리드만 ↔ 반복측정 분산분석",
        "description": "대응 3조건+ 비교"
      },
      {
        "name": "스피어만 ↔ 피어슨 상관",
        "description": "두 변인 간 상관"
      }
    ],
    "quiz_hints": {
      "mnemonic": "모수적 대안 = 가정이 충족되면 쓸 수 있는 '더 강력한 원래 검정'",
      "differential": "모수 검정은 분포 가정 충족 시 검정력이 높고, 비모수 검정은 가정 불충족 시 더 타당한 결과를 제공한다.",
      "key_point": "비모수 검정의 검정력 효율성(Power Efficiency)은 보통 모수 대안의 90~95% 수준이다.",
      "common_mistake": "가정이 충족되는데도 비모수 검정을 사용하면 불필요하게 검정력을 낭비하게 된다."
    }
  },
  {
    "id": "NONPARA_CT_032",
    "terminology": "분할표 (Contingency Table)",
    "terminology_ko": "분할표",
    "terminology_en": "Contingency Table",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "두 개 이상의 범주형 변인의 교차 빈도를 행과 열로 정리한 표로, 카이제곱 독립성 검정의 기본 자료 형태이다.",
    "definition_en": "A table organizing the cross-classified frequencies of two or more categorical variables into rows and columns, serving as the basic data format for chi-square tests of independence.",
    "significance": "심리학 연구에서 범주형 변인 간 관계를 시각적으로 파악하고 통계적으로 검증하는 출발점으로, 빈도 기반 분석의 기본 도구이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "분할표와 카이제곱 검정의 결합을 통해 범주형 자료 분석의 체계를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "카이제곱 독립성 검정",
        "name_en": "Chi-Square Test of Independence",
        "id": "NONPARA_IND_017"
      },
      {
        "name_ko": "기대빈도",
        "name_en": "Expected Frequency",
        "id": "NONPARA_EF_018"
      },
      {
        "name_ko": "관찰빈도",
        "name_en": "Observed Frequency",
        "id": "NONPARA_OF_019"
      },
      {
        "name_ko": "피셔의 정확검정",
        "name_en": "Fisher's Exact Test",
        "id": "NONPARA_FE_006"
      }
    ],
    "sub_types": [
      {
        "name": "2×2 분할표",
        "description": "각 변인이 2개 범주인 가장 단순한 형태"
      },
      {
        "name": "r×c 분할표",
        "description": "행이 r개, 열이 c개 범주인 일반적 형태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "분할표 = 두 범주형 변인을 '격자'로 교차하여 빈도를 정리한 표",
      "differential": "분할표(contingency table)는 빈도를 정리한 것이고, 상관표(correlation matrix)는 상관계수를 정리한 것이다.",
      "key_point": "자유도 = (행 수 - 1)(열 수 - 1)이며, 주변 합계(marginal totals)를 이용하여 기대빈도를 계산한다.",
      "common_mistake": "분할표에 빈도가 아닌 비율을 넣고 카이제곱을 계산하면 결과가 왜곡된다."
    }
  },
  {
    "id": "NONPARA_CV_033",
    "terminology": "크래머의 V (Cramér's V)",
    "terminology_ko": "크래머의 V",
    "terminology_en": "Cramér's V",
    "category": "NONPARA",
    "category_name": "비모수 통계 (Nonparametric Statistics)",
    "definition": "카이제곱 통계량을 표본크기와 분할표 크기로 표준화하여 0에서 1 사이의 값으로 두 범주형 변인 간 연관성의 강도를 나타내는 효과크기 지표이다.",
    "definition_en": "An effect size measure that standardizes the chi-square statistic by sample size and table dimensions to indicate the strength of association between two categorical variables, ranging from 0 to 1.",
    "significance": "카이제곱 검정의 유의성만으로는 관련성의 강도를 알 수 없으므로, 크래머의 V는 범주형 변인 간 연관성의 실질적 크기를 보고하는 표준 지표이다.",
    "key_researchers": [
      {
        "name_ko": "하랄트 크래머",
        "name_en": "Harald Cramér",
        "contribution": "카이제곱 기반 연관성 측도를 개발하여 범주형 변인의 효과크기 측정 방법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비모수 효과크기",
        "name_en": "Nonparametric Effect Size",
        "id": "NONPARA_ES_022"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "카이제곱 독립성 검정",
        "name_en": "Chi-Square Test of Independence",
        "id": "NONPARA_IND_017"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "V = √(χ²/N × min(r-1, c-1)), 0이면 무관련, 1이면 완전 연관",
      "differential": "파이(φ)는 2×2 분할표 전용이고, 크래머의 V는 어떤 크기의 분할표에도 적용 가능하다.",
      "key_point": "Cohen의 해석 기준(자유도에 따라 다름): 작은 효과 .10, 중간 효과 .30, 큰 효과 .50(df*=1 기준).",
      "common_mistake": "크래머의 V가 .50이라고 50%의 관련성이라고 해석하면 안 되며, 효과크기 기준표에 따라 해석해야 한다."
    }
  }
];

TERMS_DATA.EFFECT = [
  {
    "id": "EFFECT_CD_001",
    "terminology": "코헨의 d (Cohen's d)",
    "terminology_ko": "코헨의 d",
    "terminology_en": "Cohen's d",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "두 집단의 평균 차이를 합동표준편차(pooled standard deviation)로 나누어 표준화한 효과크기 지표로, 집단 간 차이의 실질적 크기를 나타낸다.",
    "definition_en": "A standardized effect size measure that expresses the difference between two group means divided by the pooled standard deviation, indicating the practical magnitude of group differences.",
    "significance": "심리학 연구에서 가장 널리 사용되는 효과크기 지표로, p값만으로는 알 수 없는 차이의 실질적 크기를 전달하여 연구 결과의 실용적 해석을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기 개념을 체계화하고 d = 0.2(작은), 0.5(중간), 0.8(큰) 기준을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "헤지스의 g",
        "name_en": "Hedges' g",
        "id": "EFFECT_HG_002"
      },
      {
        "name_ko": "글래스의 델타",
        "name_en": "Glass's Delta",
        "id": "EFFECT_GD_003"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      },
      {
        "name_ko": "표준편차",
        "name_en": "Standard Deviation",
        "id": "DESCRIP_SD_007"
      }
    ],
    "sub_types": [
      {
        "name": "작은 효과 (Small Effect, d = 0.2)",
        "description": "집단 간 차이가 작아서 육안으로 식별하기 어려운 수준"
      },
      {
        "name": "중간 효과 (Medium Effect, d = 0.5)",
        "description": "집단 간 차이가 주의 깊게 관찰하면 알아볼 수 있는 수준"
      },
      {
        "name": "큰 효과 (Large Effect, d = 0.8)",
        "description": "집단 간 차이가 명백하게 눈에 띄는 수준"
      }
    ],
    "quiz_hints": {
      "mnemonic": "d = (M₁ - M₂) / SD_pooled → '두 평균의 Difference를 SD로 나눈다'",
      "differential": "코헨의 d는 합동표준편차를 사용하지만, 글래스의 델타는 통제집단의 표준편차만 사용한다.",
      "key_point": "d = 0.2(작은), 0.5(중간), 0.8(큰)이라는 코헨의 기준은 편의적 지침일 뿐, 연구 맥락에 따라 해석해야 한다.",
      "common_mistake": "코헨의 d가 항상 0~1 사이라고 오해하는 것. 실제로는 음수도 가능하고 1을 초과할 수도 있다."
    }
  },
  {
    "id": "EFFECT_HG_002",
    "terminology": "헤지스의 g (Hedges' g)",
    "terminology_ko": "헤지스의 g",
    "terminology_en": "Hedges' g",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "코헨의 d에 소표본 편향 보정을 적용한 효과크기 지표로, 표본크기가 작을 때 d가 효과크기를 과대추정하는 문제를 교정한다.",
    "definition_en": "An effect size measure that applies a small-sample bias correction to Cohen's d, correcting for the overestimation of effect size that occurs with small samples.",
    "significance": "메타분석에서 소표본 연구들을 통합할 때 편향을 줄이는 표준 효과크기 지표로, 특히 표본크기가 20 미만인 연구에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "소표본 편향 보정 공식을 개발하고 메타분석 방법론을 체계화했다."
      },
      {
        "name_ko": "잉그램 올킨",
        "name_en": "Ingram Olkin",
        "contribution": "Hedges와 함께 메타분석의 통계적 기초를 정립한 공저자이다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Hedges' g = Cohen's d × 보정계수 J → 'g는 d의 업그레이드 버전'",
      "differential": "헤지스의 g는 코헨의 d에 보정계수 J를 곱한 것으로, 표본크기가 클수록 d와 g의 차이는 무시할 수준이 된다.",
      "key_point": "보정계수 J = 1 - 3/(4df - 1)로, 표본크기가 작을수록 보정 효과가 크다.",
      "common_mistake": "헤지스의 g가 코헨의 d보다 항상 더 좋은 지표라고 일반화하는 것. 대표본에서는 차이가 거의 없다."
    }
  },
  {
    "id": "EFFECT_GD_003",
    "terminology": "글래스의 델타 (Glass's Delta)",
    "terminology_ko": "글래스의 델타",
    "terminology_en": "Glass's Delta",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "두 집단의 평균 차이를 통제집단의 표준편차로만 나누어 산출하는 효과크기 지표로, 실험 처치가 통제집단 대비 얼마나 효과적인지를 나타낸다.",
    "definition_en": "An effect size measure computed by dividing the mean difference between two groups by the standard deviation of the control group only, indicating how effective the treatment is relative to the control condition.",
    "significance": "실험 처치가 집단의 변산성을 변화시킬 수 있는 경우 합동표준편차 대신 통제집단의 표준편차를 사용함으로써 더 정확한 효과크기 추정을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "진 글래스",
        "name_en": "Gene V. Glass",
        "contribution": "1976년 '메타분석'이라는 용어를 창안하고, 통제집단 SD 기준 효과크기를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "헤지스의 g",
        "name_en": "Hedges' g",
        "id": "EFFECT_HG_002"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Glass's Δ = (M_실험 - M_통제) / SD_통제 → '통제집단의 눈으로 본 차이'",
      "differential": "글래스의 델타는 통제집단 SD만 사용하고, 코헨의 d는 두 집단의 합동 SD를 사용한다.",
      "key_point": "처치가 분산에 영향을 미칠 때(예: 실험집단 분산 증가) 합동 SD보다 통제집단 SD가 더 적절한 기준이 된다.",
      "common_mistake": "글래스의 델타에서 실험집단의 SD를 분모로 사용하는 것. 반드시 통제집단의 SD를 사용해야 한다."
    }
  },
  {
    "id": "EFFECT_ES_004",
    "terminology": "효과크기 (Effect Size)",
    "terminology_ko": "효과크기",
    "terminology_en": "Effect Size",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "연구에서 발견된 관계나 차이의 실질적 크기를 정량적으로 나타내는 지표로, 통계적 유의성과 별개로 결과의 실용적 중요성을 평가하는 데 사용된다.",
    "definition_en": "A quantitative measure indicating the practical magnitude of a relationship or difference found in research, used to evaluate the practical importance of results independently of statistical significance.",
    "significance": "p값은 표본크기에 민감하여 사소한 효과도 유의하게 만들 수 있지만, 효과크기는 표본크기에 독립적이어서 결과의 실질적 의미를 전달하며, APA는 모든 연구에서 효과크기 보고를 권장한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "효과크기의 체계적 분류(작은/중간/큰)와 검정력 분석 방법론을 정립했다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "효과크기 추정의 통계적 속성을 연구하고 메타분석에서의 활용을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-Squared",
        "id": "EFFECT_ET_005"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-Squared",
        "id": "REGRESS_R2_006"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [
      {
        "name": "d 계열 (d-family)",
        "description": "두 집단의 평균 차이를 표준화한 지표 (Cohen's d, Hedges' g, Glass's Δ)"
      },
      {
        "name": "r 계열 (r-family)",
        "description": "두 변인 간 관계의 강도를 나타내는 지표 (r, r², η², ω²)"
      },
      {
        "name": "승산비 계열 (Odds ratio family)",
        "description": "범주형 결과의 상대적 가능성을 나타내는 지표 (OR, RR, NNT)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Effect Size = 'So What?' 지표 → 통계적으로 유의해도 실질적으로 의미 있는지 답하는 것",
      "differential": "효과크기는 결과의 '크기'를, p값은 결과가 우연인지 '확률'을 나타낸다. 둘 다 보고해야 완전한 해석이 가능하다.",
      "key_point": "APA 제6판 이후 모든 통계 분석에서 효과크기 보고를 의무화하여, p값만 보고하는 것은 불충분하다.",
      "common_mistake": "효과크기가 크면 반드시 통계적으로 유의하다고 생각하는 것. 표본이 매우 작으면 큰 효과크기도 유의하지 않을 수 있다."
    }
  },
  {
    "id": "EFFECT_ET_005",
    "terminology": "에타제곱 (Eta-Squared)",
    "terminology_ko": "에타제곱",
    "terminology_en": "Eta-Squared",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "분산분석(ANOVA)에서 종속변인의 전체 분산 중 독립변인에 의해 설명되는 비율을 나타내는 효과크기 지표로, η² = SS_between / SS_total로 계산된다.",
    "definition_en": "An effect size measure in ANOVA indicating the proportion of total variance in the dependent variable that is accounted for by the independent variable, calculated as η² = SS_between / SS_total.",
    "significance": "분산분석 결과의 실질적 의미를 평가하는 핵심 지표로, F값과 p값만으로는 알 수 없는 독립변인의 설명력을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "분산분석을 개발하여 에타제곱 개념의 토대를 마련했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "η² = .01(작은), .06(중간), .14(큰) 해석 기준을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부분 에타제곱",
        "name_en": "Partial Eta-Squared",
        "id": "EFFECT_PE_006"
      },
      {
        "name_ko": "오메가제곱",
        "name_en": "Omega-Squared",
        "id": "EFFECT_OM_007"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "η² = SS_between / SS_total → '전체 파이 중 설명되는 조각의 비율'",
      "differential": "에타제곱은 전체 SS 대비 비율이고, 부분 에타제곱은 해당 효과 SS + 오차 SS 대비 비율이다.",
      "key_point": "η² = .01(작은), .06(중간), .14(큰)이 코헨의 해석 기준이다.",
      "common_mistake": "에타제곱이 모집단 효과크기의 편향 없는 추정치라고 생각하는 것. 실제로는 과대추정 경향이 있어 오메가제곱이 더 정확하다."
    }
  },
  {
    "id": "EFFECT_PE_006",
    "terminology": "부분 에타제곱 (Partial Eta-Squared)",
    "terminology_ko": "부분 에타제곱",
    "terminology_en": "Partial Eta-Squared",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "요인설계 분산분석에서 특정 요인이 설명하는 분산의 비율을 해당 요인의 SS와 오차 SS의 합에 대해 산출한 효과크기로, η²_p = SS_effect / (SS_effect + SS_error)로 계산된다.",
    "definition_en": "An effect size measure in factorial ANOVA indicating the proportion of variance explained by a specific factor relative to the sum of that factor's SS and error SS, calculated as η²_p = SS_effect / (SS_effect + SS_error).",
    "significance": "다요인 설계에서 다른 요인의 효과를 통제한 후 특정 요인의 고유 설명력을 파악할 수 있어, SPSS 등 통계 소프트웨어에서 기본으로 보고되는 효과크기이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "부분 효과크기 개념의 기초를 마련한 효과크기 분류 체계를 정립했다."
      },
      {
        "name_ko": "마크 오예르만",
        "name_en": "Mark Olejnik",
        "contribution": "부분 에타제곱과 에타제곱의 차이 및 적절한 사용 조건을 명확히 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-Squared",
        "id": "EFFECT_ET_005"
      },
      {
        "name_ko": "오메가제곱",
        "name_en": "Omega-Squared",
        "id": "EFFECT_OM_007"
      },
      {
        "name_ko": "일원분산분석",
        "name_en": "One-Way ANOVA",
        "id": "ANOVA_OW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Partial = '부분적으로 본다' → 다른 요인은 빼고 해당 요인만의 설명력",
      "differential": "에타제곱은 SS_total을 분모로 사용하지만, 부분 에타제곱은 SS_effect + SS_error를 분모로 사용하여 다른 요인의 SS를 제외한다.",
      "key_point": "일원 ANOVA에서는 에타제곱과 부분 에타제곱이 동일하지만, 요인설계에서는 부분 에타제곱이 항상 더 크다.",
      "common_mistake": "부분 에타제곱을 에타제곱과 동일시하는 것. 다요인 설계에서 부분 에타제곱은 에타제곱보다 항상 크다."
    }
  },
  {
    "id": "EFFECT_OM_007",
    "terminology": "오메가제곱 (Omega-Squared)",
    "terminology_ko": "오메가제곱",
    "terminology_en": "Omega-Squared",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "분산분석에서 독립변인이 설명하는 모집단 분산 비율의 비편향 추정치로, 에타제곱의 과대추정 문제를 보정한 효과크기 지표이다.",
    "definition_en": "An unbiased estimator of the proportion of population variance explained by the independent variable in ANOVA, correcting for the overestimation bias inherent in eta-squared.",
    "significance": "에타제곱보다 보수적이고 정확한 모집단 효과크기 추정을 제공하여, 연구 결과의 일반화 가능성을 더 현실적으로 평가할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 헤이스",
        "name_en": "William L. Hays",
        "contribution": "분산분석에서 오메가제곱을 모집단 효과크기의 비편향 추정치로 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-Squared",
        "id": "EFFECT_ET_005"
      },
      {
        "name_ko": "부분 에타제곱",
        "name_en": "Partial Eta-Squared",
        "id": "EFFECT_PE_006"
      },
      {
        "name_ko": "분산",
        "name_en": "Variance",
        "id": "DESCRIP_VAR_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ω² = (SS_between - df_between × MS_error) / (SS_total + MS_error) → '오차를 빼서 보정'",
      "differential": "오메가제곱은 에타제곱의 비편향 보정 버전으로, 에타제곱보다 항상 작은 값을 산출한다.",
      "key_point": "에타제곱이 표본의 효과크기를 과대추정하는 문제를 오차항(MS_error)으로 보정한 것이다.",
      "common_mistake": "오메가제곱이 에타제곱보다 '더 나은' 지표라고만 생각하고, 실제로 SPSS 등에서 기본 보고되지 않는다는 점을 간과하는 것."
    }
  },
  {
    "id": "EFFECT_R2_008",
    "terminology": "R제곱 (R-Squared)",
    "terminology_ko": "R제곱",
    "terminology_en": "R-Squared",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "회귀분석에서 예측변인(들)이 결과변인의 전체 분산 중 설명하는 비율을 나타내는 결정계수로, 모형의 설명력을 0에서 1 사이의 값으로 표현한다.",
    "definition_en": "The coefficient of determination in regression analysis indicating the proportion of total variance in the outcome variable explained by the predictor(s), expressed as a value between 0 and 1.",
    "significance": "회귀모형의 적합도와 예측력을 직관적으로 보여주는 핵심 효과크기 지표로, 심리학 연구에서 변인 간 관계의 실질적 크기를 평가하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "시월 라이트",
        "name_en": "Sewall Wright",
        "contribution": "경로분석과 결정계수의 이론적 기초를 발전시켰다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "R² = .01(작은), .09(중간), .25(큰) 해석 기준을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "결정계수",
        "name_en": "Coefficient of Determination",
        "id": "CORR_CD_006"
      },
      {
        "name_ko": "다중회귀",
        "name_en": "Multiple Regression",
        "id": "REGRESS_MR_002"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-Squared",
        "id": "EFFECT_ET_005"
      }
    ],
    "sub_types": [
      {
        "name": "R² (결정계수)",
        "description": "예측변인이 설명하는 분산 비율의 표본 추정치"
      },
      {
        "name": "조정된 R² (Adjusted R²)",
        "description": "예측변인 수에 대한 벌점을 적용하여 과대추정을 보정한 결정계수"
      }
    ],
    "quiz_hints": {
      "mnemonic": "R² = r × r → 상관계수를 제곱하면 설명되는 분산 비율이 된다",
      "differential": "R²는 설명된 분산의 비율이고, r은 관계의 방향과 강도를 나타낸다. R² = .25는 r = .50에 해당한다.",
      "key_point": "R² = .01(작은), .09(중간), .25(큰)이 코헨의 해석 기준이며, 예측변인을 추가하면 항상 증가하므로 조정된 R²가 더 정확하다.",
      "common_mistake": "R²가 높으면 인과관계가 있다고 해석하는 것. R²는 설명력만 나타내며 인과성을 증명하지 않는다."
    }
  },
  {
    "id": "EFFECT_MA_009",
    "terminology": "메타분석 (Meta-Analysis)",
    "terminology_ko": "메타분석",
    "terminology_en": "Meta-Analysis",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "동일한 연구 주제에 대한 다수의 독립적 연구 결과를 통계적으로 통합하여 전체적인 효과크기를 산출하는 양적 연구 종합 방법이다.",
    "definition_en": "A quantitative method of synthesizing results from multiple independent studies on the same topic to calculate an overall effect size through statistical integration.",
    "significance": "개별 연구의 한계를 극복하고 축적된 근거의 전체적 경향을 파악할 수 있게 하며, 심리학에서 이론 검증과 근거기반 실무의 핵심 방법론이다.",
    "key_researchers": [
      {
        "name_ko": "진 글래스",
        "name_en": "Gene V. Glass",
        "contribution": "1976년 '메타분석'이라는 용어를 최초로 사용하고 심리치료 효과에 대한 최초의 대규모 메타분석을 수행했다."
      },
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "메타분석의 통계적 방법론을 체계화하고, 효과크기의 분산 추정 방법을 개발했다."
      },
      {
        "name_ko": "잉그램 올킨",
        "name_en": "Ingram Olkin",
        "contribution": "Hedges와 함께 『Statistical Methods for Meta-Analysis』를 공저하여 메타분석의 수리적 기초를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "숲그림",
        "name_en": "Forest Plot",
        "id": "EFFECT_FP_023"
      },
      {
        "name_ko": "고정효과 모형",
        "name_en": "Fixed-Effect Model",
        "id": "EFFECT_FE_029"
      },
      {
        "name_ko": "무선효과 모형",
        "name_en": "Random-Effects Model",
        "id": "EFFECT_RE_030"
      },
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      }
    ],
    "sub_types": [
      {
        "name": "고정효과 메타분석 (Fixed-Effect Meta-Analysis)",
        "description": "모든 연구가 동일한 모집단 효과크기를 추정한다고 가정"
      },
      {
        "name": "무선효과 메타분석 (Random-Effects Meta-Analysis)",
        "description": "연구 간 진정한 효과크기의 변산을 허용"
      },
      {
        "name": "개별 참여자 데이터 메타분석 (IPD Meta-Analysis)",
        "description": "원시 데이터를 수집하여 통합 분석"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Meta(초월) + Analysis(분석) = '분석의 분석', 연구들을 모아 다시 분석",
      "differential": "메타분석은 통계적 통합을 수행하는 양적 방법이고, 체계적 문헌고찰(systematic review)은 질적 평가를 포함하는 더 포괄적 과정이다.",
      "key_point": "효과크기를 공통 척도로 변환하여 서로 다른 연구 결과를 비교 가능하게 만드는 것이 핵심이다.",
      "common_mistake": "메타분석에 포함된 개별 연구의 질이 낮으면 결과도 신뢰할 수 없다는 'garbage in, garbage out' 문제를 간과하기 쉽다."
    }
  },
  {
    "id": "EFFECT_OR_010",
    "terminology": "오즈비 (Odds Ratio)",
    "terminology_ko": "오즈비",
    "terminology_en": "Odds Ratio",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "두 집단에서 특정 사건이 발생할 오즈(odds)의 비율로, 처치집단의 오즈를 통제집단의 오즈로 나누어 산출하며, 범주형 자료에서의 효과크기를 나타낸다.",
    "definition_en": "The ratio of the odds of an event occurring in one group to the odds in another group, computed by dividing the treatment group's odds by the control group's odds, representing effect size for categorical data.",
    "significance": "임상 연구와 역학 연구에서 위험 요인과 결과 변인 간의 관련성 강도를 표현하는 핵심 지표로, 로지스틱 회귀분석의 기본 효과크기이다.",
    "key_researchers": [
      {
        "name_ko": "제롬 콘필드",
        "name_en": "Jerome Cornfield",
        "contribution": "오즈비를 역학 연구에서 상대위험도의 근사치로 사용할 수 있음을 증명했다."
      },
      {
        "name_ko": "데이비드 콕스",
        "name_en": "David Cox",
        "contribution": "로지스틱 회귀모형을 발전시켜 오즈비의 통계적 추론 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상대위험도",
        "name_en": "Relative Risk",
        "id": "EFFECT_RR_011"
      },
      {
        "name_ko": "절대위험도",
        "name_en": "Absolute Risk Reduction",
        "id": "EFFECT_AR_012"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "크래머의 V",
        "name_en": "Cramér's V",
        "id": "EFFECT_CV_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "OR = (a/b) / (c/d) → 2×2 교차표에서 대각선 곱의 비 = ad/bc",
      "differential": "오즈비는 오즈(확률/(1-확률))의 비율이고, 상대위험도는 확률 자체의 비율이다. 사건이 드물면 두 값이 비슷하다.",
      "key_point": "OR = 1이면 차이 없음, OR > 1이면 처치군 위험 증가, OR < 1이면 처치군 위험 감소를 의미한다.",
      "common_mistake": "오즈비를 확률의 비율(상대위험도)과 혼동하는 것. 오즈비 2.0은 '확률이 2배'가 아니라 '오즈가 2배'이다."
    }
  },
  {
    "id": "EFFECT_RR_011",
    "terminology": "상대위험도 (Relative Risk)",
    "terminology_ko": "상대위험도",
    "terminology_en": "Relative Risk",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "실험집단에서 사건이 발생할 확률을 통제집단에서 사건이 발생할 확률로 나눈 비율로, 처치가 사건 발생 가능성을 얼마나 변화시키는지를 나타낸다.",
    "definition_en": "The ratio of the probability of an event occurring in the treatment group to the probability in the control group, indicating how much the treatment changes the likelihood of the event.",
    "significance": "임상 시험과 코호트 연구에서 처치 효과를 직관적으로 전달하는 데 사용되며, 오즈비보다 해석이 용이하여 실무적 의사결정에 자주 활용된다.",
    "key_researchers": [
      {
        "name_ko": "오스틴 브래드포드 힐",
        "name_en": "Austin Bradford Hill",
        "contribution": "역학 연구에서 인과관계 추론의 기준을 정립하고, 상대위험도의 활용을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "오즈비",
        "name_en": "Odds Ratio",
        "id": "EFFECT_OR_010"
      },
      {
        "name_ko": "절대위험도",
        "name_en": "Absolute Risk Reduction",
        "id": "EFFECT_AR_012"
      },
      {
        "name_ko": "NNT",
        "name_en": "Number Needed to Treat",
        "id": "EFFECT_NT_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "RR = P(사건|처치) / P(사건|통제) → '두 확률의 비율'",
      "differential": "상대위험도는 두 확률의 비율이고, 오즈비는 두 오즈의 비율이다. 사건 발생률이 낮을수록 둘의 차이가 작아진다.",
      "key_point": "RR = 1이면 차이 없음, RR < 1이면 처치군이 위험 감소, RR > 1이면 처치군이 위험 증가를 의미한다.",
      "common_mistake": "상대위험도와 절대위험도를 혼동하는 것. RR = 2.0이더라도 기저율이 0.1%이면 절대 차이는 매우 작다."
    }
  },
  {
    "id": "EFFECT_AR_012",
    "terminology": "절대위험도 감소 (Absolute Risk Reduction)",
    "terminology_ko": "절대위험도 감소",
    "terminology_en": "Absolute Risk Reduction",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "통제집단의 사건 발생률에서 실험집단의 사건 발생률을 뺀 차이로, 처치에 의한 사건 발생 확률의 실제 감소량을 나타내는 효과크기이다.",
    "definition_en": "The difference between the event rate in the control group and the event rate in the treatment group, representing the actual reduction in event probability attributable to the treatment.",
    "significance": "상대위험도만으로는 알 수 없는 실질적 이득의 크기를 제공하여, 임상적 의사결정과 비용-효과 분석에 필수적인 정보를 전달한다.",
    "key_researchers": [
      {
        "name_ko": "더글러스 알트만",
        "name_en": "Douglas G. Altman",
        "contribution": "임상 시험 보고에서 절대위험도 감소와 NNT의 중요성을 강조하고 CONSORT 성명의 개발을 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상대위험도",
        "name_en": "Relative Risk",
        "id": "EFFECT_RR_011"
      },
      {
        "name_ko": "NNT",
        "name_en": "Number Needed to Treat",
        "id": "EFFECT_NT_013"
      },
      {
        "name_ko": "오즈비",
        "name_en": "Odds Ratio",
        "id": "EFFECT_OR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ARR = P(통제) - P(처치) → '기저율에서 처치율을 빼면 절대 감소량'",
      "differential": "ARR은 확률의 차이(절대값)이고, RR은 확률의 비율(상대값)이다. 기저율에 따라 같은 RR이라도 ARR은 크게 달라진다.",
      "key_point": "NNT = 1/ARR이므로, ARR이 클수록 NNT가 작아져 처치 효율이 높다.",
      "common_mistake": "상대위험도 50% 감소를 절대위험도 50% 감소로 해석하는 것. 기저율이 2%인 경우 50% 상대 감소는 1%의 절대 감소에 불과하다."
    }
  },
  {
    "id": "EFFECT_NT_013",
    "terminology": "NNT (Number Needed to Treat)",
    "terminology_ko": "NNT",
    "terminology_en": "Number Needed to Treat",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "한 명의 추가적인 긍정적 결과를 얻기 위해 처치해야 하는 환자 수로, 절대위험도 감소(ARR)의 역수(1/ARR)로 계산되는 임상적 효과크기 지표이다.",
    "definition_en": "The number of patients who need to be treated to achieve one additional positive outcome, calculated as the reciprocal of the absolute risk reduction (1/ARR), serving as a clinically meaningful effect size measure.",
    "significance": "처치 효과를 가장 직관적으로 전달하는 지표로, 임상가와 환자가 치료의 실용적 가치를 이해하고 의사결정을 내리는 데 핵심적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "앤드루 래드",
        "name_en": "Andreas Laupacis",
        "contribution": "1988년 NNT 개념을 최초로 제안하여 임상 시험 결과의 해석을 혁신했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "절대위험도 감소",
        "name_en": "Absolute Risk Reduction",
        "id": "EFFECT_AR_012"
      },
      {
        "name_ko": "상대위험도",
        "name_en": "Relative Risk",
        "id": "EFFECT_RR_011"
      },
      {
        "name_ko": "오즈비",
        "name_en": "Odds Ratio",
        "id": "EFFECT_OR_010"
      }
    ],
    "sub_types": [
      {
        "name": "NNT (Number Needed to Treat)",
        "description": "이득을 위한 처치 필요 수 (NNT가 작을수록 효과적)"
      },
      {
        "name": "NNH (Number Needed to Harm)",
        "description": "한 명의 부작용을 유발하는 처치 수 (NNH가 클수록 안전)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "NNT = 1/ARR → 'ARR이 10%면 NNT = 10, 즉 10명 치료하면 1명 추가 호전'",
      "differential": "NNT는 절대적 효과(몇 명을 치료해야 하는가)를, NNH는 부작용(몇 명을 치료하면 1명 해가 되는가)을 나타낸다.",
      "key_point": "NNT = 1이 이론적 최대 효과(모든 환자 호전)이고, NNT가 클수록 처치 효율이 낮다.",
      "common_mistake": "NNT를 해석할 때 대상 집단과 기간을 무시하는 것. NNT = 10은 '어떤 모집단에서 어떤 기간 동안'인지에 따라 의미가 달라진다."
    }
  },
  {
    "id": "EFFECT_CV_014",
    "terminology": "크래머의 V (Cramér's V)",
    "terminology_ko": "크래머의 V",
    "terminology_en": "Cramér's V",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "카이제곱 통계량을 표본크기와 교차표의 최소 차원으로 보정하여 0에서 1 사이의 값으로 표준화한 범주형 변인 간 연관성의 효과크기 지표이다.",
    "definition_en": "An effect size measure for the association between categorical variables, standardized to range from 0 to 1 by correcting the chi-square statistic for sample size and the minimum dimension of the contingency table.",
    "significance": "카이제곱 검정의 결과를 보완하여 범주형 변인 간 관계의 실질적 강도를 평가할 수 있으며, 교차표 크기에 관계없이 비교 가능한 효과크기를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "하랄드 크래머",
        "name_en": "Harald Cramér",
        "contribution": "카이제곱 기반 연관성 측도를 표준화하여 Cramér's V를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "파이계수",
        "name_en": "Phi Coefficient",
        "id": "EFFECT_PH_015"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "오즈비",
        "name_en": "Odds Ratio",
        "id": "EFFECT_OR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "V = √(χ²/(N × (k-1))) → '카이제곱을 N과 차원으로 나눠 표준화'",
      "differential": "크래머의 V는 모든 크기의 교차표에 적용 가능하지만, 파이계수는 2×2 교차표에서만 사용한다.",
      "key_point": "V = .10(작은), .30(중간), .50(큰)이 일반적 해석 기준이며, 범위는 항상 0~1이다.",
      "common_mistake": "크래머의 V를 2×2가 아닌 교차표에서 파이계수와 동일시하는 것. 2×2에서만 두 값이 같다."
    }
  },
  {
    "id": "EFFECT_PH_015",
    "terminology": "파이계수 (Phi Coefficient)",
    "terminology_ko": "파이계수",
    "terminology_en": "Phi Coefficient",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "2×2 교차표에서 두 이분 변인 간 연관성의 강도와 방향을 나타내는 상관계수로, φ = √(χ²/N)으로 계산되며 -1에서 +1 사이의 값을 가진다.",
    "definition_en": "A correlation coefficient for the association between two dichotomous variables in a 2×2 contingency table, calculated as φ = √(χ²/N) and ranging from -1 to +1.",
    "significance": "2×2 교차표에서의 효과크기를 피어슨 상관계수와 동일한 척도로 표현하여, 범주형 자료와 연속형 자료의 효과크기 비교를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "카이제곱 검정과 상관계수를 개발하여 파이계수의 수학적 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "크래머의 V",
        "name_en": "Cramér's V",
        "id": "EFFECT_CV_014"
      },
      {
        "name_ko": "카이제곱 검정",
        "name_en": "Chi-Square Test",
        "id": "NONPARA_CHI_001"
      },
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "포인트 이연상관",
        "name_en": "Point-Biserial Correlation",
        "id": "EFFECT_PB_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "φ(파이) = √(χ²/N) → '카이제곱을 N으로 나누고 루트'",
      "differential": "파이계수는 2×2 전용이고 방향(+/-)이 있지만, 크래머의 V는 모든 크기의 교차표에 적용되고 항상 양수이다.",
      "key_point": "2×2 교차표에서 φ = Cramér's V이며, 피어슨 r과 동일한 해석이 가능하다.",
      "common_mistake": "파이계수를 3×3 이상의 교차표에 적용하려는 것. 이 경우 크래머의 V를 사용해야 한다."
    }
  },
  {
    "id": "EFFECT_PB_016",
    "terminology": "포인트 이연상관 (Point-Biserial Correlation)",
    "terminology_ko": "포인트 이연상관",
    "terminology_en": "Point-Biserial Correlation",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "하나의 이분 변인과 하나의 연속 변인 간의 상관관계를 나타내는 계수로, 피어슨 상관계수의 특수한 경우이며 독립표본 t검정의 효과크기로도 사용된다.",
    "definition_en": "A correlation coefficient between one dichotomous variable and one continuous variable, a special case of the Pearson correlation that also serves as an effect size measure for independent samples t-tests.",
    "significance": "t검정 결과를 상관계수 형태의 효과크기로 변환할 수 있게 하여, 서로 다른 분석 방법의 결과를 공통 척도로 비교하는 데 유용하다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "상관계수의 일반 이론을 개발하여 포인트 이연상관의 수학적 기초를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피어슨 상관",
        "name_en": "Pearson Correlation",
        "id": "CORR_PR_001"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "파이계수",
        "name_en": "Phi Coefficient",
        "id": "EFFECT_PH_015"
      },
      {
        "name_ko": "독립표본 t검정",
        "name_en": "Independent Samples t-test",
        "id": "TTEST_IT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Point(점, 이분) + Biserial(이연) → 이분 변인과 연속 변인의 상관",
      "differential": "포인트 이연상관은 자연적 이분 변인(남/여)에, 이연상관(biserial correlation)은 인위적으로 이분화된 연속 변인에 사용한다.",
      "key_point": "r_pb = d / √(d² + 4)로 코헨의 d에서 변환 가능하며, t검정과 상관분석의 효과크기를 연결하는 다리 역할을 한다.",
      "common_mistake": "포인트 이연상관과 이연상관(biserial correlation)을 혼동하는 것. 후자는 연속 변인을 인위적으로 이분화한 경우에 사용한다."
    }
  },
  {
    "id": "EFFECT_WR_017",
    "terminology": "위험비 (Hazard Ratio)",
    "terminology_ko": "위험비",
    "terminology_en": "Hazard Ratio",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "생존분석에서 두 집단의 위험 함수(hazard function) 비율로, 시간 경과에 따른 사건 발생률의 상대적 차이를 나타내는 효과크기 지표이다.",
    "definition_en": "The ratio of hazard functions between two groups in survival analysis, indicating the relative difference in event rates over time as an effect size measure.",
    "significance": "시간 의존적 사건(치료 종결, 재발 등)의 분석에서 처치 효과를 정량화하며, 종단 연구와 임상 시험에서 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 콕스",
        "name_en": "David Cox",
        "contribution": "1972년 비례위험 모형(Cox proportional hazards model)을 개발하여 위험비 추정의 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상대위험도",
        "name_en": "Relative Risk",
        "id": "EFFECT_RR_011"
      },
      {
        "name_ko": "오즈비",
        "name_en": "Odds Ratio",
        "id": "EFFECT_OR_010"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HR = hazard_처치 / hazard_통제 → '시간에 따른 사건 발생 속도의 비'",
      "differential": "위험비는 시간 경과를 고려한 순간적 위험률의 비이고, 상대위험도는 특정 시점에서의 확률 비이다.",
      "key_point": "HR = 1이면 차이 없음, HR < 1이면 처치군이 사건 발생률 감소, HR > 1이면 증가를 의미한다.",
      "common_mistake": "위험비를 상대위험도와 동일시하는 것. 위험비는 시간 의존적 개념이고, 비례위험 가정이 필요하다."
    }
  },
  {
    "id": "EFFECT_EI_018",
    "terminology": "효과크기 해석 기준 (Effect Size Benchmarks)",
    "terminology_ko": "효과크기 해석 기준",
    "terminology_en": "Effect Size Benchmarks",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "효과크기의 실질적 의미를 판단하기 위해 코헨이 제안한 편의적 기준(작은/중간/큰 효과)으로, d, r, η² 등 각 지표별로 구체적인 수치 기준이 있다.",
    "definition_en": "Conventional benchmarks proposed by Cohen for judging the practical significance of effect sizes (small/medium/large), with specific numerical criteria for each index such as d, r, and η².",
    "significance": "연구자들이 효과크기의 크기를 직관적으로 판단할 수 있는 공통 기준을 제공하지만, 연구 맥락과 분야에 따라 유연하게 적용해야 한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "『Statistical Power Analysis for the Behavioral Sciences』에서 작은/중간/큰 효과의 기준치를 체계적으로 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "에타제곱",
        "name_en": "Eta-Squared",
        "id": "EFFECT_ET_005"
      },
      {
        "name_ko": "R제곱",
        "name_en": "R-Squared",
        "id": "EFFECT_R2_008"
      }
    ],
    "sub_types": [
      {
        "name": "d 기준: 0.2/0.5/0.8",
        "description": "코헨의 d에 대한 작은/중간/큰 효과 기준"
      },
      {
        "name": "r 기준: .10/.30/.50",
        "description": "상관계수에 대한 작은/중간/큰 효과 기준"
      },
      {
        "name": "η² 기준: .01/.06/.14",
        "description": "에타제곱에 대한 작은/중간/큰 효과 기준"
      },
      {
        "name": "R² 기준: .02/.13/.26",
        "description": "R제곱에 대한 작은/중간/큰 효과 기준"
      }
    ],
    "quiz_hints": {
      "mnemonic": "d = 2-5-8, r = 1-3-5, η² = 1-6-14 → '각 지표별 작은-중간-큰 숫자 세트'",
      "differential": "코헨의 기준은 '편의적 지침'일 뿐 절대적 규칙이 아니다. 연구 맥락에서 작은 효과도 매우 중요할 수 있다.",
      "key_point": "d = 0.2(작은), 0.5(중간), 0.8(큰); r = .10(작은), .30(중간), .50(큰); η² = .01(작은), .06(중간), .14(큰)이 코헨의 기준이다.",
      "common_mistake": "코헨의 기준을 기계적으로 적용하는 것. 코헨 자신도 이 기준이 맥락을 무시한 임의적 편의에 불과하다고 경고했다."
    }
  },
  {
    "id": "EFFECT_CI_019",
    "terminology": "신뢰구간 (Confidence Interval)",
    "terminology_ko": "신뢰구간",
    "terminology_en": "Confidence Interval",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "모집단 모수의 참값이 포함될 것으로 기대되는 값의 범위로, 점추정치의 정밀성과 불확실성을 구간으로 표현하며, 보통 95% 신뢰수준을 사용한다.",
    "definition_en": "A range of values within which the true population parameter is expected to fall, expressing the precision and uncertainty of a point estimate, typically at a 95% confidence level.",
    "significance": "효과크기의 점추정치만으로는 알 수 없는 추정의 정밀도를 제공하며, APA는 모든 통계 분석에서 효과크기와 함께 신뢰구간을 보고할 것을 권장한다.",
    "key_researchers": [
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "1937년 신뢰구간의 수리적 이론을 정립하여 구간 추정의 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "표준오차",
        "name_en": "Standard Error",
        "id": "SAMPLE_SE_014"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [
      {
        "name": "95% 신뢰구간",
        "description": "동일한 방법으로 반복 표집하면 95%의 구간이 모수를 포함"
      },
      {
        "name": "99% 신뢰구간",
        "description": "더 넓은 구간으로 모수 포함 확률을 높인 구간"
      }
    ],
    "quiz_hints": {
      "mnemonic": "CI = 점추정치 ± (임계값 × 표준오차) → '추정치 주변의 불확실성 범위'",
      "differential": "신뢰구간은 모수가 '이 범위 안에 있다'는 것이 아니라, '이 방법으로 반복하면 95%의 구간이 모수를 포함한다'는 의미이다.",
      "key_point": "95% CI가 0(차이) 또는 1(비율)을 포함하지 않으면 통계적으로 유의한 것이며, p < .05와 동일한 결론을 준다.",
      "common_mistake": "'모수가 95% 확률로 이 구간 안에 있다'고 해석하는 것. 모수는 고정값이고, 95%는 구간 생성 절차의 신뢰도를 의미한다."
    }
  },
  {
    "id": "EFFECT_SP_020",
    "terminology": "통계적 검정력 (Statistical Power)",
    "terminology_ko": "통계적 검정력",
    "terminology_en": "Statistical Power",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "모집단에 실제로 효과가 존재할 때 귀무가설을 올바르게 기각할 확률(1 - β)로, 제2종 오류를 범하지 않을 확률을 나타낸다.",
    "definition_en": "The probability of correctly rejecting the null hypothesis when an effect truly exists in the population (1 - β), representing the probability of avoiding a Type II error.",
    "significance": "연구가 실제 효과를 탐지할 수 있는 능력을 나타내며, 검정력이 낮은 연구는 실제 효과를 놓칠 위험이 높아 자원 낭비와 잘못된 결론의 원인이 된다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "행동과학 연구에서 검정력 분석의 중요성을 역설하고, 검정력 분석 방법론을 체계화했다."
      },
      {
        "name_ko": "예지 네이만",
        "name_en": "Jerzy Neyman",
        "contribution": "에곤 피어슨과 함께 가설검정 이론에서 검정력 개념을 공식화했다."
      },
      {
        "name_ko": "에곤 피어슨",
        "name_en": "Egon Pearson",
        "contribution": "네이만과 함께 제1종/제2종 오류와 검정력의 수학적 프레임워크를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "표본크기 결정",
        "name_en": "Sample Size Determination",
        "id": "EFFECT_SD_021"
      },
      {
        "name_ko": "유의수준",
        "name_en": "Significance Level",
        "id": "HYPO_AL_006"
      },
      {
        "name_ko": "검정력",
        "name_en": "Statistical Power",
        "id": "HYPO_PW_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Power = 1 - β → '효과가 있을 때 찾아내는 힘', 보통 .80 이상을 목표로 한다",
      "differential": "검정력은 '실제 효과를 탐지하는 능력'이고, 유의수준(α)은 '거짓 양성을 허용하는 기준'이다. 둘 다 가설검정의 오류를 통제한다.",
      "key_point": "검정력은 표본크기, 효과크기, 유의수준, 검정방향(단측/양측)의 4가지 요인에 의해 결정된다.",
      "common_mistake": "검정력이 높으면 연구 결과가 반드시 옳다고 생각하는 것. 높은 검정력은 효과를 '탐지할 확률'이 높다는 것이지, 결과의 정확성을 보장하지 않는다."
    }
  },
  {
    "id": "EFFECT_SD_021",
    "terminology": "표본크기 결정 (Sample Size Determination)",
    "terminology_ko": "표본크기 결정",
    "terminology_en": "Sample Size Determination",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "연구에서 목표 검정력을 달성하기 위해 필요한 최소 표본크기를 산출하는 과정으로, 효과크기, 유의수준, 검정력, 검정 유형을 고려하여 계산한다.",
    "definition_en": "The process of calculating the minimum sample size needed to achieve a target statistical power, considering effect size, significance level, power, and type of test.",
    "significance": "적절한 표본크기는 연구의 검정력을 보장하고 자원의 효율적 사용을 가능하게 하며, IRB 심의와 연구비 신청에서 필수적으로 요구되는 절차이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "다양한 통계 검정에 대한 표본크기 산출 공식과 표를 체계적으로 제시했다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어를 개발하여 검정력 분석과 표본크기 결정을 대중화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "사전 검정력 분석",
        "name_en": "A Priori Power Analysis",
        "id": "EFFECT_AP_031"
      },
      {
        "name_ko": "표본크기",
        "name_en": "Sample Size",
        "id": "SAMPLE_SZ_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "N = f(α, power, ES, test) → '네 가지 재료로 필요한 표본수 레시피를 만든다'",
      "differential": "표본크기 결정은 연구 전에 수행하는 '사전 분석'이고, 사후 검정력 분석은 이미 수행된 연구의 검정력을 평가하는 것이다.",
      "key_point": "G*Power 소프트웨어로 쉽게 산출 가능하며, 효과크기가 작을수록, 검정력이 높을수록 더 큰 표본이 필요하다.",
      "common_mistake": "효과크기를 과대추정하여 필요 표본크기를 과소 산출하는 것. 보수적인 효과크기 추정이 중요하다."
    }
  },
  {
    "id": "EFFECT_PA_022",
    "terminology": "검정력 분석 (Power Analysis)",
    "terminology_ko": "검정력 분석",
    "terminology_en": "Power Analysis",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "통계적 검정력, 효과크기, 표본크기, 유의수준 간의 관계를 분석하여 연구 설계의 적절성을 평가하거나 필요한 표본크기를 결정하는 절차이다.",
    "definition_en": "A procedure that analyzes the relationships among statistical power, effect size, sample size, and significance level to evaluate research design adequacy or determine required sample size.",
    "significance": "연구 계획 단계에서 적절한 표본크기를 결정하고, 완료된 연구에서 결과의 신뢰성을 평가하는 핵심 도구로, 연구 자원의 효율적 활용을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "1969년 『Statistical Power Analysis for the Behavioral Sciences』를 출판하여 검정력 분석을 행동과학에 도입했다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어를 개발하여 검정력 분석의 접근성을 높였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      },
      {
        "name_ko": "사전 검정력 분석",
        "name_en": "A Priori Power Analysis",
        "id": "EFFECT_AP_031"
      },
      {
        "name_ko": "사후 검정력 분석",
        "name_en": "Post Hoc Power Analysis",
        "id": "EFFECT_PH_032"
      },
      {
        "name_ko": "표본크기 결정",
        "name_en": "Sample Size Determination",
        "id": "EFFECT_SD_021"
      }
    ],
    "sub_types": [
      {
        "name": "사전 검정력 분석 (A Priori)",
        "description": "연구 전 필요한 표본크기를 결정하기 위한 분석"
      },
      {
        "name": "사후 검정력 분석 (Post Hoc)",
        "description": "연구 후 실제 달성된 검정력을 평가하는 분석"
      },
      {
        "name": "민감도 분석 (Sensitivity)",
        "description": "주어진 표본크기에서 탐지 가능한 최소 효과크기를 결정"
      },
      {
        "name": "기준 분석 (Criterion)",
        "description": "주어진 표본크기와 효과크기에서 최적의 유의수준을 결정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "검정력 분석의 4요소: α(유의수준) × ES(효과크기) × N(표본) × Power(검정력) → 3개를 알면 1개를 구한다",
      "differential": "검정력 분석은 4요소 중 하나를 구하는 절차이고, 표본크기 결정은 검정력 분석의 한 유형(사전 분석)이다.",
      "key_point": "G*Power가 가장 널리 사용되는 무료 소프트웨어이며, 사전/사후/민감도/기준의 4가지 유형을 지원한다.",
      "common_mistake": "사후 검정력 분석이 비유의적 결과를 해석하는 데 유용하다고 생각하는 것. 사후 검정력은 p값의 단순 변환이라는 비판이 있다."
    }
  },
  {
    "id": "EFFECT_FP_023",
    "terminology": "숲그림 (Forest Plot)",
    "terminology_ko": "숲그림",
    "terminology_en": "Forest Plot",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 각 개별 연구의 효과크기와 신뢰구간을 수평선으로 표시하고, 통합 효과크기를 다이아몬드로 표현하는 시각적 요약 그래프이다.",
    "definition_en": "A graphical summary in meta-analysis that displays each study's effect size and confidence interval as horizontal lines, with the combined effect size represented as a diamond.",
    "significance": "메타분석 결과를 한눈에 파악할 수 있게 하며, 개별 연구 간의 일관성과 이질성, 통합 효과크기의 정밀도를 시각적으로 전달한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 페토",
        "name_en": "Richard Peto",
        "contribution": "임상 시험의 메타분석에서 숲그림의 초기 형태를 개발했다."
      },
      {
        "name_ko": "마이크 클라크",
        "name_en": "Mike Clarke",
        "contribution": "코크런 연합에서 숲그림의 표준화와 보급을 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      },
      {
        "name_ko": "이질성",
        "name_en": "Heterogeneity",
        "id": "EFFECT_HT_024"
      },
      {
        "name_ko": "깔때기 도표",
        "name_en": "Funnel Plot",
        "id": "EFFECT_FU_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Forest(숲) → 많은 나무(개별 연구)가 모여 숲(통합 결과)을 이루는 그림",
      "differential": "숲그림은 각 연구의 효과크기와 통합 결과를 보여주고, 깔때기 도표는 출판편향을 시각적으로 평가한다.",
      "key_point": "수직 기준선(보통 0 또는 1)을 가로지르지 않는 신뢰구간은 통계적으로 유의하며, 다이아몬드의 너비가 좁을수록 통합 추정의 정밀도가 높다.",
      "common_mistake": "숲그림에서 개별 연구의 점 크기가 효과크기의 크기를 나타낸다고 생각하는 것. 점 크기는 보통 가중치(표본크기의 역)를 반영한다."
    }
  },
  {
    "id": "EFFECT_HT_024",
    "terminology": "이질성 (Heterogeneity)",
    "terminology_ko": "이질성",
    "terminology_en": "Heterogeneity",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에 포함된 연구들의 효과크기가 우연(표집 오차)만으로 설명할 수 없을 정도로 서로 다른 정도를 나타내는 개념이다.",
    "definition_en": "The degree to which effect sizes across studies in a meta-analysis differ beyond what would be expected from sampling error alone.",
    "significance": "이질성이 높으면 단일 통합 효과크기의 의미가 제한되므로, 조절변인 분석이나 하위집단 분석을 통해 이질성의 원인을 탐색해야 한다.",
    "key_researchers": [
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "메타분석에서 이질성을 검정하는 Q 통계량의 분포를 연구했다."
      },
      {
        "name_ko": "줄리안 히긴스",
        "name_en": "Julian P. T. Higgins",
        "contribution": "이질성의 정도를 나타내는 I² 통계량을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "I² 통계량",
        "name_en": "I-Squared Statistic",
        "id": "EFFECT_I2_025"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "무선효과 모형",
        "name_en": "Random-Effects Model",
        "id": "EFFECT_RE_030"
      },
      {
        "name_ko": "민감도 분석",
        "name_en": "Sensitivity Analysis",
        "id": "EFFECT_SA_028"
      }
    ],
    "sub_types": [
      {
        "name": "통계적 이질성 (Statistical Heterogeneity)",
        "description": "효과크기의 변산이 표집오차 이상인 경우"
      },
      {
        "name": "방법론적 이질성 (Methodological Heterogeneity)",
        "description": "연구 설계와 방법의 차이에서 비롯되는 이질성"
      },
      {
        "name": "임상적 이질성 (Clinical Heterogeneity)",
        "description": "대상자, 처치, 결과변인의 차이에서 비롯되는 이질성"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Heterogeneity = hetero(다른) + geneity(종류) → '연구 결과들이 서로 다른 종류'",
      "differential": "이질성은 연구 간 효과크기의 '불일치'를 나타내고, 출판편향은 연구의 '선택적 보고'를 나타낸다. 둘 다 메타분석의 타당성을 위협한다.",
      "key_point": "Q 검정(이질성 유무)과 I²(이질성 정도)로 평가하며, I² > 75%이면 이질성이 상당히 높다.",
      "common_mistake": "이질성이 높으면 메타분석을 수행할 수 없다고 생각하는 것. 무선효과 모형이나 조절변인 분석으로 대처할 수 있다."
    }
  },
  {
    "id": "EFFECT_I2_025",
    "terminology": "I² 통계량 (I-Squared Statistic)",
    "terminology_ko": "I² 통계량",
    "terminology_en": "I-Squared Statistic",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 관찰된 효과크기의 전체 변산 중 진정한 이질성(연구 간 차이)이 차지하는 비율을 백분율로 나타내는 지표로, 0%에서 100% 사이의 값을 가진다.",
    "definition_en": "A metric indicating the percentage of total variability in observed effect sizes attributable to true heterogeneity rather than sampling error, ranging from 0% to 100%.",
    "significance": "Cochran의 Q 검정이 표본크기에 민감한 반면, I²는 연구 수에 비교적 독립적이어서 이질성의 '정도'를 보다 안정적으로 평가할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "줄리안 히긴스",
        "name_en": "Julian P. T. Higgins",
        "contribution": "I² = (Q - df)/Q × 100%를 제안하여 이질성의 정량적 평가 방법을 혁신했다."
      },
      {
        "name_ko": "사이먼 톰프슨",
        "name_en": "Simon G. Thompson",
        "contribution": "Higgins와 함께 I² 통계량의 이론적 속성과 해석 기준을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이질성",
        "name_en": "Heterogeneity",
        "id": "EFFECT_HT_024"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "고정효과 모형",
        "name_en": "Fixed-Effect Model",
        "id": "EFFECT_FE_029"
      },
      {
        "name_ko": "무선효과 모형",
        "name_en": "Random-Effects Model",
        "id": "EFFECT_RE_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "I² = (Q - df)/Q × 100% → '전체 변산에서 표집오차를 빼면 진짜 이질성 비율'",
      "differential": "Q 검정은 이질성의 '유무'를 검정하고, I²는 이질성의 '정도'를 나타낸다. Q는 연구 수에 민감하지만 I²는 비교적 안정적이다.",
      "key_point": "I² = 25%(낮음), 50%(중간), 75%(높음)가 Higgins의 해석 기준이다.",
      "common_mistake": "I²가 0%이면 모든 연구의 효과크기가 동일하다고 해석하는 것. 0%는 관찰된 변산이 표집오차로 설명 가능하다는 뜻이다."
    }
  },
  {
    "id": "EFFECT_FU_026",
    "terminology": "깔때기 도표 (Funnel Plot)",
    "terminology_ko": "깔때기 도표",
    "terminology_en": "Funnel Plot",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 각 연구의 효과크기를 x축, 정밀도(또는 표본크기)를 y축에 배치하여 출판편향의 존재를 시각적으로 평가하는 산점도이다.",
    "definition_en": "A scatter plot in meta-analysis with each study's effect size on the x-axis and precision (or sample size) on the y-axis, used to visually assess the presence of publication bias.",
    "significance": "출판편향이 없으면 대칭적인 역삼각형(깔때기) 모양이 나타나며, 비대칭은 출판편향의 존재를 시사하여 메타분석 결과의 신뢰성을 평가하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "리처드 라이트",
        "name_en": "Richard J. Light",
        "contribution": "1984년 깔때기 도표를 메타분석에서 출판편향 평가 도구로 제안했다."
      },
      {
        "name_ko": "데이비드 필러머",
        "name_en": "David B. Pillemer",
        "contribution": "Light와 함께 메타분석의 시각적 평가 방법을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "EFFECT_PB_027"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "숲그림",
        "name_en": "Forest Plot",
        "id": "EFFECT_FP_023"
      },
      {
        "name_ko": "민감도 분석",
        "name_en": "Sensitivity Analysis",
        "id": "EFFECT_SA_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Funnel(깔때기) → 대칭 깔때기 모양이면 편향 없음, 비대칭이면 편향 의심",
      "differential": "깔때기 도표는 출판편향의 '시각적' 평가이고, Egger 검정은 비대칭성의 '통계적' 검정이다.",
      "key_point": "비대칭의 원인은 출판편향 외에도 연구 간 이질성, 방법론적 차이 등이 있으므로 다른 방법과 병행해야 한다.",
      "common_mistake": "깔때기 도표의 비대칭이 반드시 출판편향을 의미한다고 단정하는 것. 소규모 연구 효과(small-study effects) 등 다른 원인도 가능하다."
    }
  },
  {
    "id": "EFFECT_PB_027",
    "terminology": "출판편향 (Publication Bias)",
    "terminology_ko": "출판편향",
    "terminology_en": "Publication Bias",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "통계적으로 유의한 결과를 보고한 연구가 비유의적 결과를 보고한 연구보다 출판될 가능성이 높은 체계적 편향으로, 메타분석의 통합 효과크기를 과대추정하게 만든다.",
    "definition_en": "A systematic bias where studies reporting statistically significant results are more likely to be published than those with non-significant findings, leading to overestimation of combined effect sizes in meta-analysis.",
    "significance": "출판편향은 과학 문헌의 전체적 증거 기반을 왜곡하며, 메타분석 결과의 타당성을 위협하는 가장 심각한 문제 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "1979년 '파일서랍 문제(file drawer problem)'를 명명하여 출판편향의 심각성을 경고했다."
      },
      {
        "name_ko": "콜린 비그",
        "name_en": "Colin B. Begg",
        "contribution": "깔때기 도표의 비대칭을 통계적으로 검정하는 Begg's rank correlation test를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "깔때기 도표",
        "name_en": "Funnel Plot",
        "id": "EFFECT_FU_026"
      },
      {
        "name_ko": "파일서랍 문제",
        "name_en": "File Drawer Problem",
        "id": "ETHICS_FD_025"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Publication Bias = 유의한 결과만 출판 → '가로등 아래서만 열쇠를 찾는 격'",
      "differential": "출판편향은 연구 결과에 따른 '출판 여부'의 편향이고, 선택적 보고는 단일 연구 내에서 '결과 선별'의 편향이다.",
      "key_point": "Trim-and-fill, Egger's test, fail-safe N 등으로 평가하며, 사전등록이 근본적 대안이다.",
      "common_mistake": "출판편향은 연구자의 의도적 행위라고 생각하는 것. 학술지의 선호와 검토 과정에서도 발생하는 체계적 문제이다."
    }
  },
  {
    "id": "EFFECT_SA_028",
    "terminology": "민감도 분석 (Sensitivity Analysis)",
    "terminology_ko": "민감도 분석",
    "terminology_en": "Sensitivity Analysis",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 특정 연구를 제외하거나 분석 조건을 변경했을 때 통합 효과크기가 얼마나 변하는지를 평가하여 결과의 강건성(robustness)을 검증하는 분석이다.",
    "definition_en": "An analysis in meta-analysis that evaluates how much the combined effect size changes when specific studies are excluded or analytical conditions are altered, verifying the robustness of the results.",
    "significance": "메타분석 결과가 특정 연구나 분석 결정에 과도하게 의존하지 않는지를 확인하여, 결과의 안정성과 신뢰성에 대한 증거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "메타분석 방법론에서 민감도 분석의 체계적 절차를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "이질성",
        "name_en": "Heterogeneity",
        "id": "EFFECT_HT_024"
      },
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "EFFECT_PB_027"
      }
    ],
    "sub_types": [
      {
        "name": "제거법 (Leave-one-out)",
        "description": "한 번에 하나의 연구를 제외하고 통합 효과크기 재산출"
      },
      {
        "name": "하위집단 분석 (Subgroup Analysis)",
        "description": "특정 기준으로 연구를 나누어 각 하위집단의 효과크기 비교"
      },
      {
        "name": "조절변인 분석 (Moderator Analysis)",
        "description": "이질성의 원인이 되는 조절변인을 메타회귀로 검정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Sensitivity = '민감하게 반응하는가?' → 조건을 바꿔도 결과가 안정적인지 확인",
      "differential": "민감도 분석은 결과의 '강건성'을 검증하고, 이질성 분석은 연구 간 '불일치의 원인'을 탐색한다.",
      "key_point": "하나의 연구를 제외했을 때 통합 효과크기가 크게 변하면, 그 연구가 결과에 과도한 영향을 미치고 있다는 신호이다.",
      "common_mistake": "민감도 분석에서 결과가 변하면 메타분석이 실패했다고 해석하는 것. 어떤 조건에서 변하는지가 중요한 정보이다."
    }
  },
  {
    "id": "EFFECT_FE_029",
    "terminology": "고정효과 모형 (Fixed-Effect Model)",
    "terminology_ko": "고정효과 모형",
    "terminology_en": "Fixed-Effect Model",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 모든 연구가 동일한 모집단 효과크기를 추정한다고 가정하는 통합 모형으로, 연구 간 변산은 표집오차에만 기인한다고 본다.",
    "definition_en": "A meta-analytic model assuming all studies estimate the same population effect size, attributing between-study variability solely to sampling error.",
    "significance": "동질적인 연구들을 통합할 때 정밀한 추정을 제공하지만, 연구 간 진정한 이질성이 있을 경우 신뢰구간을 과소추정하여 잘못된 결론을 유도할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "래리 헤지스",
        "name_en": "Larry V. Hedges",
        "contribution": "고정효과 메타분석의 수리적 기초를 체계화하고 가중평균 방법을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무선효과 모형",
        "name_en": "Random-Effects Model",
        "id": "EFFECT_RE_030"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      },
      {
        "name_ko": "이질성",
        "name_en": "Heterogeneity",
        "id": "EFFECT_HT_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Fixed = '고정된 하나의 진짜 효과' → 모든 연구가 같은 모집단에서 온다고 가정",
      "differential": "고정효과 모형은 진짜 효과크기가 하나라고 가정하고, 무선효과 모형은 연구마다 다를 수 있다고 가정한다.",
      "key_point": "가중치가 연구 내 분산(1/SE²)에만 기반하므로, 대표본 연구에 높은 가중치를 부여한다.",
      "common_mistake": "이질성이 있을 때 고정효과 모형을 사용하는 것. I²가 높으면 무선효과 모형이 더 적절하다."
    }
  },
  {
    "id": "EFFECT_RE_030",
    "terminology": "무선효과 모형 (Random-Effects Model)",
    "terminology_ko": "무선효과 모형",
    "terminology_en": "Random-Effects Model",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 각 연구의 진정한 효과크기가 공통 분포에서 무선적으로 추출된 것으로 가정하는 모형으로, 연구 간 분산(τ²)을 추가로 추정한다.",
    "definition_en": "A meta-analytic model assuming each study's true effect size is randomly drawn from a distribution, additionally estimating between-study variance (τ²).",
    "significance": "심리학 연구처럼 대상자, 설계, 맥락이 다양한 연구들을 통합할 때 보다 현실적인 가정을 반영하며, 이질성을 고려한 보수적인 추론을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "레베카 데시몬리안",
        "name_en": "Rebecca DerSimonian",
        "contribution": "DerSimonian-Laird 추정법을 개발하여 무선효과 메타분석의 표준 방법을 정립했다."
      },
      {
        "name_ko": "닌 레어드",
        "name_en": "Nan Laird",
        "contribution": "DerSimonian과 함께 τ² 추정의 모멘트법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고정효과 모형",
        "name_en": "Fixed-Effect Model",
        "id": "EFFECT_FE_029"
      },
      {
        "name_ko": "이질성",
        "name_en": "Heterogeneity",
        "id": "EFFECT_HT_024"
      },
      {
        "name_ko": "I² 통계량",
        "name_en": "I-Squared Statistic",
        "id": "EFFECT_I2_025"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Random = '무선적으로 다양한 효과' → 각 연구의 진짜 효과가 분포에서 추출",
      "differential": "무선효과 모형은 연구 간 분산(τ²)을 추가로 추정하여 신뢰구간이 고정효과 모형보다 넓다.",
      "key_point": "가중치 = 1/(연구 내 분산 + τ²)이므로, 소규모 연구에도 상대적으로 높은 가중치가 부여된다.",
      "common_mistake": "무선효과 모형이 항상 고정효과 모형보다 '좋다'고 생각하는 것. 이질성이 없으면 두 모형의 결과는 동일하다."
    }
  },
  {
    "id": "EFFECT_AP_031",
    "terminology": "사전 검정력 분석 (A Priori Power Analysis)",
    "terminology_ko": "사전 검정력 분석",
    "terminology_en": "A Priori Power Analysis",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "연구 수행 전에 목표 검정력(보통 .80)을 달성하기 위해 필요한 최소 표본크기를 예상 효과크기와 유의수준에 기반하여 산출하는 분석이다.",
    "definition_en": "An analysis conducted before data collection to calculate the minimum sample size needed to achieve a target power level (typically .80) based on expected effect size and significance level.",
    "significance": "연구 자원의 효율적 배분과 윤리적 연구 수행의 기반이 되며, 학위논문 계획서와 연구비 신청에서 필수적으로 요구되는 절차이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "다양한 통계 검정별 표본크기 산출표를 제공하여 사전 검정력 분석을 실용화했다."
      },
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어에서 사전 분석(a priori) 기능을 구현하여 접근성을 높였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정력 분석",
        "name_en": "Power Analysis",
        "id": "EFFECT_PA_022"
      },
      {
        "name_ko": "사후 검정력 분석",
        "name_en": "Post Hoc Power Analysis",
        "id": "EFFECT_PH_032"
      },
      {
        "name_ko": "표본크기 결정",
        "name_en": "Sample Size Determination",
        "id": "EFFECT_SD_021"
      },
      {
        "name_ko": "통계적 검정력",
        "name_en": "Statistical Power",
        "id": "EFFECT_SP_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "A Priori(사전에) → '연구하기 전에' 필요한 N을 미리 계산",
      "differential": "사전 분석은 연구 전 필요 N을 산출하고, 사후 분석은 연구 후 달성된 검정력을 계산한다.",
      "key_point": "예상 효과크기는 선행연구나 파일럿 연구에서 얻으며, 보수적으로 추정하는 것이 바람직하다.",
      "common_mistake": "사전 검정력 분석에서 큰 효과크기를 가정하여 필요 표본크기를 낮추는 '낙관적 설계'를 하는 것."
    }
  },
  {
    "id": "EFFECT_PH_032",
    "terminology": "사후 검정력 분석 (Post Hoc Power Analysis)",
    "terminology_ko": "사후 검정력 분석",
    "terminology_en": "Post Hoc Power Analysis",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "이미 수행된 연구의 표본크기와 관찰된 효과크기를 이용하여 해당 연구가 달성한 통계적 검정력을 사후적으로 계산하는 분석이다.",
    "definition_en": "An analysis that retrospectively calculates the statistical power achieved by a completed study using its sample size and observed effect size.",
    "significance": "비유의적 결과가 낮은 검정력 때문인지를 평가하는 데 사용되지만, 관찰된 효과크기에 기반하므로 p값의 단순 변환에 불과하다는 비판이 있다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "행동과학 연구의 검정력이 전반적으로 낮다는 사실을 사후 검정력 분석으로 밝혔다."
      },
      {
        "name_ko": "존 호인빌",
        "name_en": "John M. Hoenig",
        "contribution": "관찰된 검정력(observed power)의 무용성을 논증하여 사후 검정력 분석의 한계를 지적했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전 검정력 분석",
        "name_en": "A Priori Power Analysis",
        "id": "EFFECT_AP_031"
      },
      {
        "name_ko": "검정력 분석",
        "name_en": "Power Analysis",
        "id": "EFFECT_PA_022"
      },
      {
        "name_ko": "제2종 오류",
        "name_en": "Type II Error",
        "id": "HYPO_T2_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Post Hoc(사후에) → '연구를 마친 후에' 검정력이 얼마였는지 되돌아보는 것",
      "differential": "사전 분석은 '앞으로의 연구'를 위해, 사후 분석은 '이미 한 연구'를 평가하기 위해 수행한다.",
      "key_point": "관찰된 효과크기를 사용하면 p < .05일 때 검정력이 항상 높고, p > .05일 때 항상 낮아지므로 정보 가치가 제한적이다.",
      "common_mistake": "비유의적 결과에 대해 사후 검정력이 낮으니 '효과가 없다고 결론내릴 수 없다'고 주장하는 것. 신뢰구간이 더 유익한 정보를 제공한다."
    }
  },
  {
    "id": "EFFECT_GP_033",
    "terminology": "G*Power (G*Power Software)",
    "terminology_ko": "G*Power",
    "terminology_en": "G*Power Software",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "검정력 분석과 표본크기 결정을 위한 무료 통계 소프트웨어로, t검정, ANOVA, 상관, 회귀 등 다양한 통계 검정에 대한 사전/사후/민감도/기준 분석을 지원한다.",
    "definition_en": "A free statistical software for power analysis and sample size determination, supporting a priori, post hoc, sensitivity, and criterion analyses for various statistical tests including t-tests, ANOVA, correlation, and regression.",
    "significance": "검정력 분석의 접근성을 혁명적으로 높여, 복잡한 수식이나 표를 참조하지 않고도 연구자가 직접 필요 표본크기를 산출할 수 있게 하였다.",
    "key_researchers": [
      {
        "name_ko": "프란츠 파울",
        "name_en": "Franz Faul",
        "contribution": "G*Power 소프트웨어의 주 개발자로, 버전 1(1992)부터 3.1(2009)까지 지속적으로 발전시켰다."
      },
      {
        "name_ko": "에드가 에르덴펠더",
        "name_en": "Edgar Erdfelder",
        "contribution": "G*Power의 공동 개발자로, 인지심리학적 관점에서 검정력 분석의 중요성을 강조했다."
      },
      {
        "name_ko": "악셀 부흐너",
        "name_en": "Axel Buchner",
        "contribution": "G*Power의 공동 개발자로, 다양한 통계 검정에 대한 검정력 알고리즘을 구현했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "검정력 분석",
        "name_en": "Power Analysis",
        "id": "EFFECT_PA_022"
      },
      {
        "name_ko": "사전 검정력 분석",
        "name_en": "A Priori Power Analysis",
        "id": "EFFECT_AP_031"
      },
      {
        "name_ko": "표본크기 결정",
        "name_en": "Sample Size Determination",
        "id": "EFFECT_SD_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "G*Power = General Power → '범용 검정력 분석 도구'",
      "differential": "G*Power는 빈도주의적 검정력 분석 도구이고, JASP/R의 BayesFactor는 베이즈적 증거 강도를 평가한다.",
      "key_point": "5가지 분석 유형(사전/사후/민감도/기준/타협)을 제공하며, 입력에 3개를 넣으면 나머지 1개를 산출한다.",
      "common_mistake": "G*Power의 결과를 절대적으로 신뢰하는 것. 입력한 효과크기 추정치의 정확성에 결과가 전적으로 의존한다."
    }
  },
  {
    "id": "EFFECT_CL_034",
    "terminology": "공통언어 효과크기 (Common Language Effect Size)",
    "terminology_ko": "공통언어 효과크기",
    "terminology_en": "Common Language Effect Size",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "두 집단에서 각각 한 명을 무선적으로 뽑았을 때, 처치집단의 점수가 통제집단의 점수보다 높을 확률로 효과크기를 표현하는 직관적 지표이다.",
    "definition_en": "An intuitive effect size measure expressing the probability that a randomly selected individual from the treatment group will score higher than a randomly selected individual from the control group.",
    "significance": "비전문가도 이해할 수 있는 확률적 표현으로 효과크기를 전달하여, 연구 결과의 소통과 의사결정에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "케네스 맥그로",
        "name_en": "Kenneth O. McGraw",
        "contribution": "1992년 공통언어 효과크기(CL)를 제안하여 효과크기의 직관적 해석 방법을 개발했다."
      },
      {
        "name_ko": "S. P. 웡",
        "name_en": "S. P. Wong",
        "contribution": "McGraw와 함께 CL 지표를 공식화하고 다양한 효과크기와의 변환 공식을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코헨의 d",
        "name_en": "Cohen's d",
        "id": "EFFECT_CD_001"
      },
      {
        "name_ko": "효과크기 해석 기준",
        "name_en": "Effect Size Benchmarks",
        "id": "EFFECT_EI_018"
      },
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CL = '보통 사람 말로 설명하는 효과크기' → d를 확률(%)로 변환",
      "differential": "CL은 확률(0~1)로, Cohen's d는 표준편차 단위로 효과크기를 표현한다. d = 0.8일 때 CL ≈ .71이다.",
      "key_point": "CL = .50이면 효과 없음(동전 던지기), CL = 1.0이면 완전한 분리(처치군이 항상 높음)를 의미한다.",
      "common_mistake": "공통언어 효과크기가 '처치군의 x%가 좋아진다'는 의미라고 해석하는 것. 실제로는 무선 쌍의 비교 확률이다."
    }
  },
  {
    "id": "EFFECT_FSN_035",
    "terminology": "안전계수 N (Fail-Safe N)",
    "terminology_ko": "안전계수 N",
    "terminology_en": "Fail-Safe N",
    "category": "EFFECT",
    "category_name": "효과크기와 검정력 (Effect Size & Statistical Power)",
    "definition": "메타분석에서 통합 효과크기를 비유의적으로 만들기 위해 필요한 비유의적 연구의 수를 계산하여 출판편향의 영향을 평가하는 지표이다.",
    "definition_en": "A metric in meta-analysis that calculates the number of non-significant studies needed to reduce the combined effect size to non-significance, evaluating the impact of publication bias.",
    "significance": "출판편향이 메타분석 결론을 뒤집으려면 얼마나 많은 미출판 연구가 필요한지를 보여주어, 결과의 강건성을 직관적으로 평가할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "1979년 파일서랍 문제에 대응하여 Fail-Safe N 개념을 최초로 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "EFFECT_PB_027"
      },
      {
        "name_ko": "깔때기 도표",
        "name_en": "Funnel Plot",
        "id": "EFFECT_FU_026"
      },
      {
        "name_ko": "메타분석",
        "name_en": "Meta-Analysis",
        "id": "EFFECT_MA_009"
      }
    ],
    "sub_types": [
      {
        "name": "Rosenthal의 Fail-Safe N",
        "description": "통합 p값을 비유의적으로 만드는 데 필요한 연구 수"
      },
      {
        "name": "Orwin의 Fail-Safe N",
        "description": "통합 효과크기를 특정 기준 이하로 만드는 데 필요한 연구 수"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Fail-Safe N = '안전 금고의 N' → 이만큼의 미출판 연구가 숨어 있어야 결론이 뒤집힘",
      "differential": "Fail-Safe N은 출판편향의 '수량적' 평가이고, 깔때기 도표는 '시각적' 평가이다.",
      "key_point": "Fail-Safe N이 포함된 연구 수의 5k + 10보다 크면 출판편향의 위협이 낮다고 판단한다 (Rosenthal 기준).",
      "common_mistake": "Fail-Safe N이 크면 출판편향이 '없다'고 단정하는 것. 이 지표는 편향의 부재가 아니라 영향의 심각도를 평가한다."
    }
  }
];

TERMS_DATA.ETHICS = [
  {
    "id": "ETHICS_RE_001",
    "terminology": "연구윤리 (Research Ethics)",
    "terminology_ko": "연구윤리",
    "terminology_en": "Research Ethics",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구 수행 과정에서 참여자의 권리와 복지를 보호하고, 과학적 진실성을 유지하기 위해 준수해야 하는 도덕적 원칙과 규범의 체계이다.",
    "definition_en": "A system of moral principles and standards that must be followed during research to protect the rights and welfare of participants and maintain scientific integrity.",
    "significance": "연구의 사회적 신뢰를 확보하고, 참여자에 대한 부당한 위해를 방지하며, 과학적 지식의 정확성과 신뢰성을 보장하는 근본적 토대이다.",
    "key_researchers": [
      {
        "name_ko": "톰 뷰챔프",
        "name_en": "Tom L. Beauchamp",
        "contribution": "벨몬트 보고서의 주 저자로, 연구윤리의 3대 원칙(존중, 선행, 정의)을 체계화했다."
      },
      {
        "name_ko": "제임스 칠드러스",
        "name_en": "James F. Childress",
        "contribution": "Beauchamp와 함께 생명윤리의 4원칙(자율성 존중, 선행, 악행금지, 정의)을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      },
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "APA 윤리강령",
        "name_en": "APA Ethics Code",
        "id": "ETHICS_AE_003"
      }
    ],
    "sub_types": [
      {
        "name": "참여자 보호 윤리",
        "description": "사전동의, 비밀보장, 최소 위험 등 연구 참여자의 권리를 보호하는 원칙"
      },
      {
        "name": "과학적 진실성 윤리",
        "description": "데이터 위조/변조/표절 금지, 정확한 보고 등 연구 과정의 정직성"
      },
      {
        "name": "사회적 책임 윤리",
        "description": "연구 결과의 공정한 활용과 사회적 영향에 대한 책임"
      }
    ],
    "quiz_hints": {
      "mnemonic": "연구윤리의 3축: 참여자 보호 + 과학적 진실성 + 사회적 책임",
      "differential": "연구윤리는 연구 수행 전반의 도덕적 원칙이고, IRB는 이 원칙을 실행하기 위한 제도적 심의 기구이다.",
      "key_point": "벨몬트 보고서의 3원칙(인간 존중, 선행, 정의)이 현대 연구윤리의 기본 프레임워크이다.",
      "common_mistake": "연구윤리를 참여자 보호에만 한정하는 것. 데이터의 정직한 수집, 분석, 보고도 핵심 영역이다."
    }
  },
  {
    "id": "ETHICS_BM_002",
    "terminology": "벨몬트 보고서 (Belmont Report)",
    "terminology_ko": "벨몬트 보고서",
    "terminology_en": "Belmont Report",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "1979년 미국 국가위원회가 발표한 인간 대상 연구의 윤리적 원칙과 지침으로, 인간 존중(respect for persons), 선행(beneficence), 정의(justice)의 3대 원칙을 제시한다.",
    "definition_en": "A 1979 report by the U.S. National Commission outlining ethical principles and guidelines for human subjects research, establishing three core principles: respect for persons, beneficence, and justice.",
    "significance": "터스키기 매독 연구 등의 윤리적 스캔들 이후 제정되어, 현대 인간 대상 연구윤리의 기본 틀을 확립하고 IRB 시스템의 법적 근거를 제공했다.",
    "key_researchers": [
      {
        "name_ko": "톰 뷰챔프",
        "name_en": "Tom L. Beauchamp",
        "contribution": "벨몬트 보고서의 주 저자로, 3대 윤리 원칙의 구체적 내용과 적용 방법을 기술했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뉘른베르크 강령",
        "name_en": "Nuremberg Code",
        "id": "ETHICS_NC_030"
      },
      {
        "name_ko": "헬싱키 선언",
        "name_en": "Declaration of Helsinki",
        "id": "ETHICS_DH_031"
      },
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      }
    ],
    "sub_types": [
      {
        "name": "인간 존중 (Respect for Persons)",
        "description": "자율적 결정 능력이 있는 개인의 자율성을 존중하고, 취약한 대상자를 보호"
      },
      {
        "name": "선행 (Beneficence)",
        "description": "해악을 최소화하고 이득을 극대화하여 참여자의 복지를 보장"
      },
      {
        "name": "정의 (Justice)",
        "description": "연구의 부담과 혜택을 공정하게 분배"
      }
    ],
    "quiz_hints": {
      "mnemonic": "벨몬트의 3원칙: 존중(Respect) + 선행(Beneficence) + 정의(Justice) → 'RBJ'",
      "differential": "벨몬트 보고서는 미국의 연구윤리 원칙이고, 헬싱키 선언은 세계의사회(WMA)의 국제적 의학연구 윤리 지침이다.",
      "key_point": "터스키기 매독 연구(1932-1972)의 윤리 위반이 직접적 계기가 되었으며, 미국 연방법(Common Rule)의 기초가 되었다.",
      "common_mistake": "벨몬트 보고서가 법률이라고 생각하는 것. 윤리적 원칙을 제시한 지침이며, 이를 기반으로 연방 규정이 별도로 제정되었다."
    }
  },
  {
    "id": "ETHICS_AE_003",
    "terminology": "APA 윤리강령 (APA Ethics Code)",
    "terminology_ko": "APA 윤리강령",
    "terminology_en": "APA Ethics Code",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "미국심리학회(APA)가 제정한 심리학자의 직업적 행동 기준으로, 연구 수행, 치료, 교육, 평가 등 전문 활동에서의 윤리적 원칙과 구체적 행동 규범을 규정한다.",
    "definition_en": "Professional conduct standards established by the American Psychological Association governing ethical principles and specific behavioral standards for psychologists in research, therapy, teaching, and assessment.",
    "significance": "심리학 연구와 실무에서의 윤리적 행동의 기준을 제공하며, 위반 시 학회 차원의 제재가 가능한 구속력 있는 전문 윤리 규범이다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "1953년 첫 윤리강령 제정 이후 지속적으로 개정하여 현재 2017년 개정판을 사용한다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연구윤리",
        "name_en": "Research Ethics",
        "id": "ETHICS_RE_001"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_008"
      },
      {
        "name_ko": "디브리핑",
        "name_en": "Debriefing",
        "id": "ETHICS_DB_006"
      }
    ],
    "sub_types": [
      {
        "name": "일반 원칙 (General Principles)",
        "description": "선행과 비악행, 충실성과 책임, 진실성, 정의, 인권 존중의 5가지 열망적 원칙"
      },
      {
        "name": "윤리 기준 (Ethical Standards)",
        "description": "연구, 치료, 평가 등 구체적 상황에서의 행동 규범 (10개 영역, 강제적)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "APA 5원칙: Beneficence, Fidelity, Integrity, Justice, Respect → 'BFIJR'",
      "differential": "APA 윤리강령은 심리학 전문가를 위한 직업 윤리이고, 벨몬트 보고서는 인간 대상 연구 전반의 기본 원칙이다.",
      "key_point": "일반 원칙(aspirational)은 이상적 지향이고, 윤리 기준(enforceable)은 위반 시 제재가 가능한 구체적 규범이다.",
      "common_mistake": "APA 윤리강령이 법률과 동일한 효력이 있다고 생각하는 것. 학회 내부 규범이며, 법적 효력은 관할권의 법률에 따른다."
    }
  },
  {
    "id": "ETHICS_IR_004",
    "terminology": "IRB (Institutional Review Board)",
    "terminology_ko": "IRB",
    "terminology_en": "Institutional Review Board",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "대학이나 연구기관에 설치된 연구윤리 심의위원회로, 인간 대상 연구의 윤리적 적절성을 사전에 검토하고 승인하는 독립적 기구이다.",
    "definition_en": "An independent committee established at universities and research institutions to review and approve the ethical appropriateness of human subjects research before it is conducted.",
    "significance": "연구 참여자의 권리와 복지를 보호하는 제도적 안전장치이며, 연구비 지원과 학술지 출판의 필수 요건으로 연구의 윤리적 품질을 보장한다.",
    "key_researchers": [
      {
        "name_ko": "헨리 비처",
        "name_en": "Henry K. Beecher",
        "contribution": "1966년 비윤리적 인간 실험 22건을 폭로하여 IRB 제도 도입의 계기를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "연구참여자 보호",
        "name_en": "Protection of Human Subjects",
        "id": "ETHICS_PP_029"
      },
      {
        "name_ko": "연구윤리",
        "name_en": "Research Ethics",
        "id": "ETHICS_RE_001"
      }
    ],
    "sub_types": [
      {
        "name": "면제 심의 (Exempt Review)",
        "description": "최소 위험 이하의 연구로 전체 심의가 면제되는 경우"
      },
      {
        "name": "신속 심의 (Expedited Review)",
        "description": "최소 위험 연구로 위원장 또는 지정 위원의 신속 검토"
      },
      {
        "name": "전체 심의 (Full Board Review)",
        "description": "최소 위험 이상의 연구로 전체 위원회 합의가 필요한 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "IRB = Institutional(기관) Review(심의) Board(위원회) → '기관 윤리 심의 위원회'",
      "differential": "IRB는 연구 개시 전 윤리성을 '사전' 심의하는 기구이고, 연구부정행위 조사위원회는 부정행위를 '사후' 조사하는 기구이다.",
      "key_point": "최소 5인 이상으로 구성하며, 비과학자 1인과 기관 외부인 1인을 반드시 포함해야 한다.",
      "common_mistake": "IRB 승인이 연구의 과학적 질까지 보장한다고 생각하는 것. IRB는 윤리적 적절성만 심의한다."
    }
  },
  {
    "id": "ETHICS_IC_005",
    "terminology": "사전동의 (Informed Consent)",
    "terminology_ko": "사전동의",
    "terminology_en": "Informed Consent",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구 참여자에게 연구의 목적, 절차, 위험, 이득, 철회 권리 등을 충분히 설명하고, 이를 이해한 후 자발적으로 참여에 동의하는 과정이다.",
    "definition_en": "The process of fully informing research participants about the study's purpose, procedures, risks, benefits, and right to withdraw, and obtaining their voluntary agreement to participate after understanding this information.",
    "significance": "연구 참여자의 자율성을 존중하는 가장 기본적인 윤리적 보장 장치로, 벨몬트 보고서의 '인간 존중' 원칙을 실현하는 핵심 절차이다.",
    "key_researchers": [
      {
        "name_ko": "루스 페이든",
        "name_en": "Ruth R. Faden",
        "contribution": "사전동의의 철학적 기초와 실천적 요건에 관한 이론을 체계화했다."
      },
      {
        "name_ko": "톰 뷰챔프",
        "name_en": "Tom L. Beauchamp",
        "contribution": "Faden과 함께 사전동의의 자율성 기반 이론을 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      },
      {
        "name_ko": "디브리핑",
        "name_en": "Debriefing",
        "id": "ETHICS_DB_006"
      },
      {
        "name_ko": "기만연구",
        "name_en": "Deception Research",
        "id": "ETHICS_DC_010"
      },
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      }
    ],
    "sub_types": [
      {
        "name": "서면 동의 (Written Consent)",
        "description": "동의서에 서명하는 가장 일반적인 형태"
      },
      {
        "name": "구두 동의 (Oral Consent)",
        "description": "서명이 참여자를 식별하는 유일한 수단일 때 사용"
      },
      {
        "name": "온라인 동의 (Online Consent)",
        "description": "웹 기반 연구에서 클릭으로 동의하는 형태"
      },
      {
        "name": "대리 동의 (Proxy Consent)",
        "description": "미성년자나 인지 능력이 제한된 대상자의 법적 대리인이 동의"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사전동의의 4요소: 정보 제공 + 이해 + 자발성 + 능력 → '알고, 이해하고, 자유롭게, 판단 능력이 있어야'",
      "differential": "사전동의는 연구 '시작 전'에 정보를 제공하는 것이고, 디브리핑은 연구 '종료 후'에 기만 등의 정보를 알려주는 것이다.",
      "key_point": "참여자는 언제든 이유 없이 철회할 수 있으며, 철회로 인한 불이익이 없어야 한다.",
      "common_mistake": "동의서에 서명만 받으면 사전동의가 완료되었다고 생각하는 것. 참여자가 내용을 실제로 이해했는지가 핵심이다."
    }
  },
  {
    "id": "ETHICS_DB_006",
    "terminology": "디브리핑 (Debriefing)",
    "terminology_ko": "디브리핑",
    "terminology_en": "Debriefing",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구 참여 종료 후 참여자에게 연구의 진정한 목적, 절차, 기만의 사용 여부 등을 설명하고, 참여로 인한 부정적 영향을 해소하는 과정이다.",
    "definition_en": "The process after research participation of explaining the true purpose, procedures, and any use of deception to participants, and addressing any negative effects of participation.",
    "significance": "기만이 사용된 연구에서 참여자의 심리적 회복을 돕고, 연구에 대한 부정적 경험을 완화하여 참여자의 존엄성을 보호한다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 밀그램",
        "name_en": "Stanley Milgram",
        "contribution": "복종 실험에서의 강한 기만 사용이 디브리핑의 중요성을 부각시키는 계기가 되었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "기만연구",
        "name_en": "Deception Research",
        "id": "ETHICS_DC_010"
      },
      {
        "name_ko": "연구참여자 보호",
        "name_en": "Protection of Human Subjects",
        "id": "ETHICS_PP_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Debriefing = De(해제) + Briefing(설명) → '기만의 해제 + 진실 설명'",
      "differential": "디브리핑은 연구 '후'에 진실을 알려주는 것이고, 사전동의는 연구 '전'에 정보를 제공하는 것이다.",
      "key_point": "기만을 사용한 연구에서는 가능한 한 빠르게 디브리핑을 실시하고, 참여자가 데이터 사용을 철회할 수 있어야 한다.",
      "common_mistake": "디브리핑이 기만연구에서만 필요하다고 생각하는 것. 기만이 없더라도 연구 결과와 의의를 설명하는 것이 좋은 관행이다."
    }
  },
  {
    "id": "ETHICS_PR_007",
    "terminology": "사전등록 (Preregistration)",
    "terminology_ko": "사전등록",
    "terminology_en": "Preregistration",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "데이터 수집 전에 연구의 가설, 설계, 분석 계획을 공개 저장소에 등록하여, 사후적인 가설 변경이나 선택적 분석을 방지하는 투명성 실천이다.",
    "definition_en": "The practice of registering hypotheses, study design, and analysis plans in a public repository before data collection, preventing post hoc hypothesis modification and selective analysis.",
    "significance": "p-해킹, HARKing, 선택적 보고 등 의심스러운 연구관행을 방지하고, 확인적 연구와 탐색적 분석을 명확히 구분하는 핵심 투명성 도구이다.",
    "key_researchers": [
      {
        "name_ko": "브라이언 노섹",
        "name_en": "Brian Nosek",
        "contribution": "Open Science Framework(OSF)를 설립하여 사전등록 인프라를 구축하고, 오픈 사이언스 운동을 주도했다."
      },
      {
        "name_ko": "크리스 챔버스",
        "name_en": "Chris Chambers",
        "contribution": "Registered Reports 형식을 개발하여 사전등록을 학술 출판 과정에 통합했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "오픈 사이언스",
        "name_en": "Open Science",
        "id": "ETHICS_OS_020"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "HARKing",
        "name_en": "HARKing",
        "id": "ETHICS_HK_024"
      },
      {
        "name_ko": "사전분석계획",
        "name_en": "Pre-Analysis Plan",
        "id": "ETHICS_PA_023"
      }
    ],
    "sub_types": [
      {
        "name": "표준 사전등록 (Standard Preregistration)",
        "description": "OSF 등에 연구 계획을 등록하고 타임스탬프를 부여"
      },
      {
        "name": "등록보고서 (Registered Reports)",
        "description": "데이터 수집 전 연구 계획을 동료심사하여 조건부 수락을 받는 형식"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Pre(사전) + Registration(등록) → '데이터 수집 전에 계획을 미리 공개 등록'",
      "differential": "사전등록은 연구 계획의 '공개 등록'이고, 사전분석계획은 분석 방법의 '구체적 명세'이다. 사전등록이 더 포괄적이다.",
      "key_point": "OSF(osf.io)와 AsPredicted가 대표적 사전등록 플랫폼이며, ClinicalTrials.gov는 임상시험 전용이다.",
      "common_mistake": "사전등록이 탐색적 분석을 금지한다고 생각하는 것. 사전등록된 분석과 탐색적 분석을 명확히 구분하면 된다."
    }
  },
  {
    "id": "ETHICS_CF_008",
    "terminology": "비밀보장 (Confidentiality)",
    "terminology_ko": "비밀보장",
    "terminology_en": "Confidentiality",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구 과정에서 수집된 참여자의 개인정보와 반응 데이터를 연구 목적 외에 노출하지 않도록 보호하는 윤리적 의무이다.",
    "definition_en": "The ethical obligation to protect participants' personal information and response data collected during research from disclosure beyond the research purpose.",
    "significance": "참여자의 사생활을 보호하고 연구 참여에 대한 심리적 안전감을 제공하여, 솔직한 응답과 자발적 참여를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "윤리강령 제4조에서 비밀보장의 구체적 기준과 예외 사항을 규정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "익명성",
        "name_en": "Anonymity",
        "id": "ETHICS_AN_009"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "데이터 공유",
        "name_en": "Data Sharing",
        "id": "ETHICS_DS_022"
      },
      {
        "name_ko": "연구참여자 보호",
        "name_en": "Protection of Human Subjects",
        "id": "ETHICS_PP_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Confidentiality = '비밀은 지키되, 연구자는 누구인지 안다' → 익명성과 구분",
      "differential": "비밀보장은 연구자가 참여자를 식별할 수 있지만 정보를 공개하지 않는 것이고, 익명성은 연구자도 참여자를 식별할 수 없는 것이다.",
      "key_point": "참여자의 자해/타해 위험이 있을 때 등 비밀보장의 법적 예외 상황이 존재하며, 이를 사전동의 시 고지해야 한다.",
      "common_mistake": "비밀보장과 익명성을 동일시하는 것. 비밀보장 연구에서 연구자는 참여자 신원을 알고 있다."
    }
  },
  {
    "id": "ETHICS_AN_009",
    "terminology": "익명성 (Anonymity)",
    "terminology_ko": "익명성",
    "terminology_en": "Anonymity",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구자를 포함하여 누구도 특정 데이터가 어떤 참여자의 것인지 식별할 수 없도록 보장하는 데이터 수집 및 관리 방식이다.",
    "definition_en": "A method of data collection and management ensuring that no one, including the researchers, can identify which data belongs to which participant.",
    "significance": "민감한 주제에 대한 솔직한 응답을 극대화하고, 사회적 바람직성 편향을 줄이며, 참여자의 사생활을 가장 강력하게 보호한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "익명성과 비밀보장의 구분을 명확히 하고, 연구 상황별 적용 지침을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_008"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "데이터 공유",
        "name_en": "Data Sharing",
        "id": "ETHICS_DS_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Anonymity = Anonymous(무명) → 연구자조차 누구의 데이터인지 모르는 완전한 무명",
      "differential": "익명성은 연구자도 참여자를 식별할 수 없고, 비밀보장은 연구자는 식별할 수 있지만 외부에 공개하지 않는 것이다.",
      "key_point": "종단 연구나 실험 연구에서는 동일 참여자의 데이터를 연결해야 하므로 완전한 익명성이 불가능한 경우가 많다.",
      "common_mistake": "온라인 설문에서 이름을 수집하지 않으면 자동으로 익명이 보장된다고 생각하는 것. IP 주소 등으로 식별 가능할 수 있다."
    }
  },
  {
    "id": "ETHICS_DC_010",
    "terminology": "기만연구 (Deception Research)",
    "terminology_ko": "기만연구",
    "terminology_en": "Deception Research",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구의 진정한 목적이나 절차에 대해 참여자에게 의도적으로 불완전하거나 거짓된 정보를 제공하는 연구 방법으로, 참여자의 자연스러운 행동을 관찰하기 위해 사용된다.",
    "definition_en": "A research method that intentionally provides participants with incomplete or false information about the true purpose or procedures, used to observe natural behavior unaffected by demand characteristics.",
    "significance": "사회심리학 등에서 요구특성을 통제하기 위해 필수적이지만, 참여자의 자율성과 신뢰를 침해할 수 있어 엄격한 윤리적 정당화와 사후 디브리핑이 요구된다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 밀그램",
        "name_en": "Stanley Milgram",
        "contribution": "복종 실험(1963)에서 극단적 기만을 사용하여, 기만연구의 윤리적 논쟁을 촉발시켰다."
      },
      {
        "name_ko": "솔로몬 애쉬",
        "name_en": "Solomon Asch",
        "contribution": "동조 실험(1951)에서 연합(confederate)을 사용한 기만 패러다임을 개척했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "디브리핑",
        "name_en": "Debriefing",
        "id": "ETHICS_DB_006"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      }
    ],
    "sub_types": [
      {
        "name": "적극적 기만 (Active Deception)",
        "description": "참여자에게 거짓 정보를 적극적으로 제공하는 기만"
      },
      {
        "name": "소극적 기만 (Passive Deception/Omission)",
        "description": "연구의 일부 정보를 생략하여 불완전한 정보를 제공하는 기만"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기만연구의 3조건: ① 대안 없음 ② 심각한 해 없음 ③ 즉시 디브리핑",
      "differential": "적극적 기만은 거짓 정보를 제공하는 것이고, 소극적 기만은 정보를 생략하는 것이다. 적극적 기만이 윤리적으로 더 문제된다.",
      "key_point": "APA 윤리강령은 기만 없이 연구를 수행할 수 없을 때만 허용하며, 참여자에게 심각한 고통을 주는 기만은 금지한다.",
      "common_mistake": "기만연구가 무조건 비윤리적이라고 생각하는 것. IRB 승인과 적절한 디브리핑이 있으면 정당화될 수 있다."
    }
  },
  {
    "id": "ETHICS_PH_011",
    "terminology": "p-해킹 (p-Hacking)",
    "terminology_ko": "p-해킹",
    "terminology_en": "p-Hacking",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "통계적으로 유의한 결과(p < .05)를 얻기 위해 데이터를 다양한 방식으로 분석하거나, 이상치를 선택적으로 제거하거나, 표본을 추가하는 등의 부적절한 분석 관행이다.",
    "definition_en": "The inappropriate practice of analyzing data in various ways, selectively removing outliers, or adding participants to achieve statistically significant results (p < .05).",
    "significance": "거짓 양성 비율을 인위적으로 높여 재현 불가능한 연구 결과를 양산하며, 심리학 재현성 위기의 핵심 원인 중 하나로 지목된다.",
    "key_researchers": [
      {
        "name_ko": "조지프 시먼스",
        "name_en": "Joseph P. Simmons",
        "contribution": "2011년 'False-positive psychology' 논문에서 p-해킹의 구체적 방법과 심각성을 체계적으로 입증했다."
      },
      {
        "name_ko": "유리 시먼손",
        "name_en": "Uri Simonsohn",
        "contribution": "p-curve 분석을 개발하여 출판된 연구에서 p-해킹의 증거를 탐지하는 방법을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연구자 자유도",
        "name_en": "Researcher Degrees of Freedom",
        "id": "ETHICS_RF_027"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "재현성 위기",
        "name_en": "Replication Crisis",
        "id": "ETHICS_RC_014"
      },
      {
        "name_ko": "QRP",
        "name_en": "Questionable Research Practices",
        "id": "ETHICS_QR_028"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [
      {
        "name": "선택적 분석 (Selective Analysis)",
        "description": "여러 분석 방법 중 유의한 결과만 보고"
      },
      {
        "name": "선택적 이상치 제거",
        "description": "유의한 결과를 위해 이상치를 선택적으로 제거"
      },
      {
        "name": "선택적 표본 추가",
        "description": "유의할 때까지 데이터를 추가 수집"
      },
      {
        "name": "선택적 종속변인 보고",
        "description": "여러 종속변인 중 유의한 것만 보고"
      }
    ],
    "quiz_hints": {
      "mnemonic": "p-Hacking = p < .05를 '해킹'하듯 억지로 만드는 것 → '통계적 유의성 조작'",
      "differential": "p-해킹은 데이터를 다양하게 '분석'하여 유의성을 얻는 것이고, 데이터 위조는 데이터 자체를 '조작'하는 것이다.",
      "key_point": "Simmons 등(2011)은 유연한 분석만으로도 거짓 양성률이 명목 5%에서 60% 이상으로 증가할 수 있음을 보여주었다.",
      "common_mistake": "p-해킹이 의도적인 사기라고만 생각하는 것. 대부분은 연구자가 의식하지 못한 채 '합리적 분석 결정'으로 발생한다."
    }
  },
  {
    "id": "ETHICS_PB_012",
    "terminology": "출판편향 (Publication Bias)",
    "terminology_ko": "출판편향",
    "terminology_en": "Publication Bias",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "통계적으로 유의한 결과나 긍정적인 결과를 보고한 연구가 비유의적/부정적 결과의 연구보다 출판될 가능성이 체계적으로 높은 현상이다.",
    "definition_en": "The systematic phenomenon where studies reporting statistically significant or positive results have a higher probability of being published than those with non-significant or negative results.",
    "significance": "과학 문헌이 효과의 존재와 크기를 과대추정하게 만들어 메타분석 결과를 왜곡하고, 비효과적인 치료법이 효과적으로 보이게 하는 심각한 문제를 초래한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "1979년 '파일서랍 문제'를 명명하여 출판편향의 심각성을 학계에 경고했다."
      },
      {
        "name_ko": "케이 딕커신",
        "name_en": "Kay Dickersin",
        "contribution": "출판편향의 실증적 증거를 체계적으로 수집하고, 임상시험 등록의 필요성을 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "파일서랍 문제",
        "name_en": "File Drawer Problem",
        "id": "ETHICS_FD_025"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "선택적 보고",
        "name_en": "Selective Reporting",
        "id": "ETHICS_SR_026"
      },
      {
        "name_ko": "깔때기 도표",
        "name_en": "Funnel Plot",
        "id": "EFFECT_FU_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Publication Bias = '출판 편식' → 유의한 결과만 골라 출판하는 편식 현상",
      "differential": "출판편향은 학술지 수준에서 유의한 연구를 선호하는 것이고, 선택적 보고는 연구자 수준에서 유의한 결과만 보고하는 것이다.",
      "key_point": "사전등록, 등록보고서(Registered Reports), 결과 무관 심사(results-blind review)가 대안이다.",
      "common_mistake": "출판편향이 연구자의 의도적 선택만으로 발생한다고 생각하는 것. 심사자와 편집자의 편향, 연구자의 자기검열도 원인이다."
    }
  },
  {
    "id": "ETHICS_RM_013",
    "terminology": "연구부정행위 (Research Misconduct)",
    "terminology_ko": "연구부정행위",
    "terminology_en": "Research Misconduct",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "과학 연구에서 위조(fabrication), 변조(falsification), 표절(plagiarism)을 포함하는 의도적이고 심각한 윤리 위반 행위로, 과학적 기록의 무결성을 훼손한다.",
    "definition_en": "Intentional and serious ethical violations in scientific research including fabrication, falsification, and plagiarism (FFP), which compromise the integrity of the scientific record.",
    "significance": "과학에 대한 공공의 신뢰를 근본적으로 훼손하고, 잘못된 연구 결과에 기반한 정책과 실무가 실제 피해를 초래할 수 있어 엄격한 예방과 제재가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "미국 연구진실성국",
        "name_en": "U.S. Office of Research Integrity",
        "contribution": "연구부정행위의 정의(FFP)를 공식화하고, 조사 및 제재 절차를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위조",
        "name_en": "Fabrication",
        "id": "ETHICS_FA_015"
      },
      {
        "name_ko": "변조",
        "name_en": "Falsification",
        "id": "ETHICS_FL_016"
      },
      {
        "name_ko": "표절",
        "name_en": "Plagiarism",
        "id": "ETHICS_PL_017"
      },
      {
        "name_ko": "QRP",
        "name_en": "Questionable Research Practices",
        "id": "ETHICS_QR_028"
      }
    ],
    "sub_types": [
      {
        "name": "위조 (Fabrication)",
        "description": "존재하지 않는 데이터나 결과를 만들어내는 행위"
      },
      {
        "name": "변조 (Falsification)",
        "description": "연구 자료, 장비, 과정을 조작하거나 데이터를 변경하는 행위"
      },
      {
        "name": "표절 (Plagiarism)",
        "description": "타인의 아이디어, 과정, 결과, 문장을 적절한 인용 없이 사용하는 행위"
      }
    ],
    "quiz_hints": {
      "mnemonic": "FFP = Fabrication(위조) + Falsification(변조) + Plagiarism(표절) → 연구부정행위의 3대 범주",
      "differential": "연구부정행위(FFP)는 의도적이고 심각한 위반이고, QRP(의심스러운 연구관행)는 '회색지대'의 부적절한 관행이다.",
      "key_point": "미국 연방 정의에서 '성실한 오류(honest error)'와 '견해의 차이(differences of opinion)'는 부정행위에서 제외된다.",
      "common_mistake": "연구부정행위를 데이터 위조에만 한정하는 것. 표절과 변조도 동등하게 심각한 부정행위이다."
    }
  },
  {
    "id": "ETHICS_RC_014",
    "terminology": "재현성 위기 (Replication Crisis)",
    "terminology_ko": "재현성 위기",
    "terminology_en": "Replication Crisis",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "심리학을 포함한 여러 과학 분야에서 주요 연구 결과를 독립적으로 재현하는 데 반복적으로 실패하는 현상으로, 출판된 연구의 신뢰성에 대한 근본적 의문을 제기했다.",
    "definition_en": "A phenomenon across multiple scientific fields including psychology where independent attempts to replicate key findings repeatedly fail, raising fundamental questions about the reliability of published research.",
    "significance": "심리학의 과학적 기반에 대한 근본적 성찰을 촉발하고, 사전등록, 오픈 사이언스, 대규모 재현 프로젝트 등 연구 관행의 전면적 개혁을 이끌었다.",
    "key_researchers": [
      {
        "name_ko": "브라이언 노섹",
        "name_en": "Brian Nosek",
        "contribution": "Reproducibility Project: Psychology(2015)를 주도하여 100개 연구 중 36%만 재현됨을 보고했다."
      },
      {
        "name_ko": "존 이오아니디스",
        "name_en": "John P. A. Ioannidis",
        "contribution": "2005년 'Why Most Published Research Findings Are False' 논문으로 재현성 위기를 예견했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "ETHICS_PB_012"
      },
      {
        "name_ko": "오픈 사이언스",
        "name_en": "Open Science",
        "id": "ETHICS_OS_020"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Replication Crisis = '재현 실패의 위기' → 100개 연구 중 36개만 재현(Nosek, 2015)",
      "differential": "재현성(replicability)은 동일 방법으로 같은 결과를 얻는 것이고, 재생산성(reproducibility)은 동일 데이터로 같은 분석 결과를 얻는 것이다.",
      "key_point": "Open Science Collaboration(2015) 결과: 원래 유의한 100개 연구 중 재현 시 36%만 유의했으며, 평균 효과크기도 절반으로 감소했다.",
      "common_mistake": "재현 실패가 원래 연구가 '틀렸다'는 증거라고 단정하는 것. 재현 연구의 검정력 부족, 표본 차이 등 다른 원인도 가능하다."
    }
  },
  {
    "id": "ETHICS_FA_015",
    "terminology": "위조 (Fabrication)",
    "terminology_ko": "위조",
    "terminology_en": "Fabrication",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "실제로 수행하지 않은 실험이나 관찰의 데이터, 결과, 기록을 존재하지 않는데 만들어내는 가장 심각한 형태의 연구부정행위이다.",
    "definition_en": "The most serious form of research misconduct involving the creation of data, results, or records from experiments or observations that were never conducted.",
    "significance": "과학적 기록에 허위 정보를 유입시켜 후속 연구와 실무에 직접적 피해를 줄 수 있으며, 발각 시 논문 철회, 연구비 반환, 직위 해임 등 가장 무거운 제재를 받는다.",
    "key_researchers": [
      {
        "name_ko": "디데릭 스타펠",
        "name_en": "Diederik Stapel",
        "contribution": "사회심리학에서 대규모 데이터 위조 사건(2011)의 당사자로, 58편의 논문이 철회되었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변조",
        "name_en": "Falsification",
        "id": "ETHICS_FL_016"
      },
      {
        "name_ko": "연구부정행위",
        "name_en": "Research Misconduct",
        "id": "ETHICS_RM_013"
      },
      {
        "name_ko": "표절",
        "name_en": "Plagiarism",
        "id": "ETHICS_PL_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Fabrication = Fabricate(만들어내다) → '없는 데이터를 만들어낸다'",
      "differential": "위조는 존재하지 않는 데이터를 '만들어내는' 것이고, 변조는 실제 데이터를 '바꾸는' 것이다.",
      "key_point": "Stapel 사건(2011), Hwang 사건(2005) 등이 대표적이며, 동료의 비정상적 데이터 패턴 보고가 발각의 주요 경로이다.",
      "common_mistake": "위조는 극소수 악의적 연구자만의 문제라고 생각하는 것. 조직적 압력과 인센티브 구조가 위조를 유발할 수 있다."
    }
  },
  {
    "id": "ETHICS_FL_016",
    "terminology": "변조 (Falsification)",
    "terminology_ko": "변조",
    "terminology_en": "Falsification",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "실제로 수집한 연구 자료, 장비, 과정을 조작하거나, 데이터를 변경 또는 생략하여 연구 기록이 정확히 반영되지 않도록 하는 부정행위이다.",
    "definition_en": "Misconduct involving the manipulation of research materials, equipment, or processes, or changing or omitting data so that research records do not accurately reflect the actual findings.",
    "significance": "위조보다 탐지가 어려워 과학적 기록을 은밀하게 오염시키며, 이상치 제거, 그래프 조작 등 비교적 '가벼운' 형태도 심각한 윤리 위반에 해당한다.",
    "key_researchers": [
      {
        "name_ko": "미국 연구진실성국",
        "name_en": "U.S. Office of Research Integrity",
        "contribution": "변조의 구체적 유형과 판단 기준을 연방 규정에 명시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위조",
        "name_en": "Fabrication",
        "id": "ETHICS_FA_015"
      },
      {
        "name_ko": "연구부정행위",
        "name_en": "Research Misconduct",
        "id": "ETHICS_RM_013"
      },
      {
        "name_ko": "선택적 보고",
        "name_en": "Selective Reporting",
        "id": "ETHICS_SR_026"
      }
    ],
    "sub_types": [
      {
        "name": "데이터 변조",
        "description": "수치를 변경하거나 불리한 데이터 포인트를 제거"
      },
      {
        "name": "이미지 조작",
        "description": "실험 이미지를 편집하거나 합성하여 결과를 왜곡"
      },
      {
        "name": "선택적 데이터 생략",
        "description": "가설을 지지하지 않는 데이터를 의도적으로 보고에서 제외"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Falsification = False(거짓) + ification → '진짜 데이터를 거짓으로 바꾸는 것'",
      "differential": "변조는 실제 데이터를 '변경'하는 것이고, 위조는 존재하지 않는 데이터를 '창조'하는 것이다.",
      "key_point": "불리한 데이터 포인트를 정당한 통계적 근거 없이 제거하는 것도 변조에 해당할 수 있다.",
      "common_mistake": "'이상치 제거'를 정당한 분석 절차라고 자동으로 가정하는 것. 사전에 정해진 기준 없이 결과에 따라 이상치를 제거하면 변조가 될 수 있다."
    }
  },
  {
    "id": "ETHICS_PL_017",
    "terminology": "표절 (Plagiarism)",
    "terminology_ko": "표절",
    "terminology_en": "Plagiarism",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "타인의 아이디어, 과정, 결과, 표현을 적절한 출처 표시 없이 자신의 것처럼 사용하는 행위로, 자기 표절(self-plagiarism)도 포함된다.",
    "definition_en": "The act of using another person's ideas, processes, results, or expressions without proper attribution, presenting them as one's own work, including self-plagiarism.",
    "significance": "학문적 정직성의 기본을 훼손하고 원저자의 지적 재산권을 침해하며, 학위 취소, 논문 철회, 직위 해임 등의 심각한 제재를 초래한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "APA 출판 매뉴얼에서 올바른 인용 방법과 표절의 범위를 구체적으로 규정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위조",
        "name_en": "Fabrication",
        "id": "ETHICS_FA_015"
      },
      {
        "name_ko": "변조",
        "name_en": "Falsification",
        "id": "ETHICS_FL_016"
      },
      {
        "name_ko": "연구부정행위",
        "name_en": "Research Misconduct",
        "id": "ETHICS_RM_013"
      },
      {
        "name_ko": "APA 보고 양식",
        "name_en": "APA Reporting Style",
        "id": "ETHICS_AP_018"
      }
    ],
    "sub_types": [
      {
        "name": "직접 표절 (Direct Plagiarism)",
        "description": "타인의 문장을 인용 없이 그대로 복사"
      },
      {
        "name": "패러프레이즈 표절 (Paraphrase Plagiarism)",
        "description": "출처 없이 내용을 바꿔 쓴 것"
      },
      {
        "name": "자기 표절 (Self-Plagiarism)",
        "description": "자신의 이전 출판물을 새 저작으로 재사용"
      },
      {
        "name": "아이디어 표절 (Idea Plagiarism)",
        "description": "출처 없이 타인의 독창적 아이디어를 사용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Plagiarism = '남의 것을 내 것처럼' → 인용 표시의 부재가 핵심",
      "differential": "표절은 타인의 아이디어/표현을 '도용'하는 것이고, 위조는 데이터를 '만들어내는' 것이다. 둘 다 연구부정행위이다.",
      "key_point": "자기 표절(이전 출판물 재사용)도 부정행위에 해당하며, 이중 출판(duplicate publication)과도 관련된다.",
      "common_mistake": "패러프레이즈하면(바꿔 쓰면) 인용하지 않아도 된다고 생각하는 것. 아이디어의 출처는 항상 밝혀야 한다."
    }
  },
  {
    "id": "ETHICS_AP_018",
    "terminology": "APA 보고 양식 (APA Reporting Style)",
    "terminology_ko": "APA 보고 양식",
    "terminology_en": "APA Reporting Style",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "미국심리학회(APA) 출판 매뉴얼에 규정된 연구 결과의 표준 보고 형식으로, 효과크기, 신뢰구간, 정확한 p값, 검정통계량 등을 반드시 보고하도록 요구한다.",
    "definition_en": "The standard reporting format specified in the APA Publication Manual requiring the reporting of effect sizes, confidence intervals, exact p-values, and test statistics in research results.",
    "significance": "연구 결과의 투명성과 재현가능성을 보장하고, 메타분석에 필요한 정보를 제공하며, 전 세계 심리학 학술지의 표준 보고 형식으로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "1929년 첫 출판 매뉴얼 이후 7차 개정(2020)까지 보고 기준을 지속적으로 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      },
      {
        "name_ko": "CONSORT",
        "name_en": "CONSORT Statement",
        "id": "ETHICS_CS_019"
      },
      {
        "name_ko": "효과보고 의무",
        "name_en": "Effect Size Reporting Mandate",
        "id": "ETHICS_ER_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "APA 보고 필수: 검정통계량 + df + p값 + 효과크기 + CI → 'T-d-p-ES-CI'",
      "differential": "APA 양식은 심리학의 일반 보고 기준이고, CONSORT/STROBE는 특정 연구설계(RCT/관찰연구)의 보고 지침이다.",
      "key_point": "APA 7판(2020)은 p값을 정확하게 보고하고(예: p = .032), 효과크기와 95% CI를 반드시 포함할 것을 요구한다.",
      "common_mistake": "'p < .05'만 보고하면 충분하다고 생각하는 것. APA는 정확한 p값, 효과크기, 신뢰구간을 모두 요구한다."
    }
  },
  {
    "id": "ETHICS_CS_019",
    "terminology": "CONSORT 성명 (CONSORT Statement)",
    "terminology_ko": "CONSORT 성명",
    "terminology_en": "CONSORT Statement",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "무작위 대조 시험(RCT)의 투명하고 완전한 보고를 위한 국제 지침으로, 체크리스트 25개 항목과 참여자 흐름도(flow diagram)를 포함한다.",
    "definition_en": "An international guideline for transparent and complete reporting of randomized controlled trials, including a 25-item checklist and a participant flow diagram.",
    "significance": "RCT 보고의 질을 표준화하여 연구 결과의 평가 가능성과 재현성을 높이며, 500개 이상의 학술지가 투고 조건으로 채택하고 있다.",
    "key_researchers": [
      {
        "name_ko": "더글러스 알트만",
        "name_en": "Douglas G. Altman",
        "contribution": "CONSORT 성명의 주 개발자로, RCT 보고 기준의 국제 표준화를 주도했다."
      },
      {
        "name_ko": "데이비드 모허",
        "name_en": "David Moher",
        "contribution": "CONSORT 2010 개정판의 주도적 역할을 수행하고, 보고 지침의 체계적 발전에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "STROBE",
        "name_en": "STROBE Statement",
        "id": "ETHICS_ST_033"
      },
      {
        "name_ko": "APA 보고 양식",
        "name_en": "APA Reporting Style",
        "id": "ETHICS_AP_018"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CONSORT = Consolidated Standards of Reporting Trials → '시험 보고의 통합 기준'",
      "differential": "CONSORT는 RCT(실험 연구) 보고 지침이고, STROBE는 관찰 연구(코호트, 사례-대조, 단면) 보고 지침이다.",
      "key_point": "참여자 흐름도(flow diagram)가 핵심으로, 모집→배정→추적→분석의 각 단계에서의 참여자 수를 명시해야 한다.",
      "common_mistake": "CONSORT가 연구 '수행' 방법을 규정한다고 생각하는 것. CONSORT는 연구 '보고' 방법에 대한 지침이다."
    }
  },
  {
    "id": "ETHICS_OS_020",
    "terminology": "오픈 사이언스 (Open Science)",
    "terminology_ko": "오픈 사이언스",
    "terminology_en": "Open Science",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구의 전 과정(가설, 데이터, 분석코드, 결과, 출판물)을 공개적이고 투명하게 공유하여 과학의 재현성, 접근성, 협력을 증진시키는 운동이다.",
    "definition_en": "A movement to share all aspects of the research process (hypotheses, data, analysis code, results, publications) openly and transparently to promote scientific reproducibility, accessibility, and collaboration.",
    "significance": "재현성 위기에 대한 근본적 대응으로, 연구의 투명성과 접근성을 높여 과학적 자기교정 기능을 강화하고, 공공 자금으로 수행된 연구의 사회 환원을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "브라이언 노섹",
        "name_en": "Brian Nosek",
        "contribution": "Center for Open Science를 설립하고 OSF 플랫폼을 구축하여 오픈 사이언스 인프라를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "데이터 공유",
        "name_en": "Data Sharing",
        "id": "ETHICS_DS_022"
      },
      {
        "name_ko": "재현성 위기",
        "name_en": "Replication Crisis",
        "id": "ETHICS_RC_014"
      },
      {
        "name_ko": "반복검증",
        "name_en": "Replication",
        "id": "FOUND_RP_031"
      }
    ],
    "sub_types": [
      {
        "name": "오픈 데이터 (Open Data)",
        "description": "연구 데이터를 공개 저장소에 공유"
      },
      {
        "name": "오픈 코드 (Open Code)",
        "description": "분석 스크립트와 소프트웨어를 공개"
      },
      {
        "name": "오픈 액세스 (Open Access)",
        "description": "출판물을 무료로 접근 가능하게 공개"
      },
      {
        "name": "오픈 자료 (Open Materials)",
        "description": "실험 자극, 측정 도구 등을 공개"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Open Science의 4가지 Open: Data + Code + Access + Materials → 'DCAM'",
      "differential": "오픈 사이언스는 연구 과정 전체의 투명성 운동이고, 사전등록은 가설과 분석 계획의 사전 공개라는 구체적 실천이다.",
      "key_point": "OSF(Open Science Framework), GitHub, Zenodo 등이 대표적 플랫폼이며, 뱃지 시스템으로 실천을 인센티브화한다.",
      "common_mistake": "오픈 사이언스가 모든 데이터를 무조건 공개하는 것이라고 생각하는 것. 참여자 프라이버시와 비밀보장은 여전히 우선한다."
    }
  },
  {
    "id": "ETHICS_IC_021",
    "terminology": "이해충돌 (Conflict of Interest)",
    "terminology_ko": "이해충돌",
    "terminology_en": "Conflict of Interest",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구자의 재정적, 개인적, 직업적 이해관계가 연구의 객관적 수행이나 보고에 부당한 영향을 미칠 수 있는 상황이다.",
    "definition_en": "A situation where a researcher's financial, personal, or professional interests may unduly influence the objective conduct or reporting of research.",
    "significance": "연구 결과의 편향 가능성을 투명하게 공개하여, 독자가 결과를 비판적으로 평가할 수 있게 하며, 학술지 투고 시 의무적으로 공시해야 한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "윤리강령에서 이해충돌의 공시 의무와 관리 방법을 규정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "연구윤리",
        "name_en": "Research Ethics",
        "id": "ETHICS_RE_001"
      },
      {
        "name_ko": "APA 윤리강령",
        "name_en": "APA Ethics Code",
        "id": "ETHICS_AE_003"
      },
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "ETHICS_PB_012"
      }
    ],
    "sub_types": [
      {
        "name": "재정적 이해충돌",
        "description": "연구 결과에 따라 재정적 이득이 달라지는 경우 (예: 제약회사 후원)"
      },
      {
        "name": "비재정적 이해충돌",
        "description": "학문적 경쟁, 개인적 관계, 이념적 동기 등"
      }
    ],
    "quiz_hints": {
      "mnemonic": "COI = Conflict of Interest → '이익의 충돌' → 연구 객관성 vs. 개인 이익",
      "differential": "이해충돌은 편향의 '가능성'이지 실제 편향의 '증거'가 아니다. 공시(disclosure)만으로 충분한지, 회피가 필요한지 판단해야 한다.",
      "key_point": "APA, ICMJE 등 모든 주요 학술 기관이 이해충돌 공시를 의무화하고 있다.",
      "common_mistake": "이해충돌이 있으면 연구가 자동으로 편향되었다고 결론짓는 것. 공시는 투명성을 위한 것이지 연구의 무효를 의미하지 않는다."
    }
  },
  {
    "id": "ETHICS_DS_022",
    "terminology": "데이터 공유 (Data Sharing)",
    "terminology_ko": "데이터 공유",
    "terminology_en": "Data Sharing",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구에서 수집한 원시 데이터와 분석 코드를 다른 연구자가 접근하고 재분석할 수 있도록 공개 저장소에 공유하는 실천이다.",
    "definition_en": "The practice of making raw data and analysis code from research accessible to other researchers through public repositories for verification and reanalysis.",
    "significance": "연구의 재현성과 투명성을 높이고, 데이터의 2차 활용을 통한 과학적 발견을 촉진하며, 공공 자금 연구의 사회 환원 의무를 이행한다.",
    "key_researchers": [
      {
        "name_ko": "브라이언 노섹",
        "name_en": "Brian Nosek",
        "contribution": "OSF를 통해 데이터 공유 인프라를 제공하고, 데이터 공유를 오픈 사이언스의 핵심 실천으로 추진했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "오픈 사이언스",
        "name_en": "Open Science",
        "id": "ETHICS_OS_020"
      },
      {
        "name_ko": "재현성 위기",
        "name_en": "Replication Crisis",
        "id": "ETHICS_RC_014"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_008"
      },
      {
        "name_ko": "익명성",
        "name_en": "Anonymity",
        "id": "ETHICS_AN_009"
      }
    ],
    "sub_types": [
      {
        "name": "완전 공개 (Full Open Data)",
        "description": "비식별화된 데이터를 누구나 접근 가능하게 공개"
      },
      {
        "name": "요청 공유 (Data Available on Request)",
        "description": "합리적 요청 시 연구자에게 직접 제공"
      },
      {
        "name": "제한 접근 (Restricted Access)",
        "description": "특정 조건(IRB 승인 등) 하에서만 접근 허용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Data Sharing = '내 데이터를 남도 볼 수 있게' → 투명성과 검증 가능성의 핵심",
      "differential": "데이터 공유는 원시 데이터의 공개이고, 사전등록은 연구 계획의 공개이다. 둘 다 투명성을 위한 실천이다.",
      "key_point": "FAIR 원칙(Findable, Accessible, Interoperable, Reusable)이 데이터 공유의 국제 표준이다.",
      "common_mistake": "데이터 공유가 참여자 프라이버시를 침해한다고 무조건 거부하는 것. 비식별화와 접근 제한으로 양립이 가능하다."
    }
  },
  {
    "id": "ETHICS_PA_023",
    "terminology": "사전분석계획 (Pre-Analysis Plan)",
    "terminology_ko": "사전분석계획",
    "terminology_en": "Pre-Analysis Plan",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "데이터 수집 전에 분석에 사용할 통계적 방법, 변인 정의, 이상치 처리 기준, 모형 명세 등을 구체적으로 기술한 계획 문서이다.",
    "definition_en": "A document specifying the statistical methods, variable definitions, outlier handling criteria, and model specifications to be used in analysis, written before data collection.",
    "significance": "연구자 자유도를 최소화하고 확인적 분석과 탐색적 분석을 명확히 구분하여, p-해킹과 HARKing을 구조적으로 방지한다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 미겔",
        "name_en": "Edward Miguel",
        "contribution": "경제학에서 사전분석계획의 도입을 주도하고, 개발경제학 연구에서의 효과를 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "연구자 자유도",
        "name_en": "Researcher Degrees of Freedom",
        "id": "ETHICS_RF_027"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Pre-Analysis Plan = '분석 레시피를 미리 작성' → 데이터를 보기 전에 분석 방법을 고정",
      "differential": "사전분석계획은 분석 방법의 '구체적 명세'이고, 사전등록은 가설과 설계를 포함한 '전체 연구 계획'의 공개이다.",
      "key_point": "변인 정의, 이상치 기준, 공변인 선택, 다중비교 보정 방법 등을 사전에 명시해야 한다.",
      "common_mistake": "사전분석계획이 있으면 어떤 탐색적 분석도 할 수 없다고 생각하는 것. 계획된 분석과 탐색적 분석을 구분하여 보고하면 된다."
    }
  },
  {
    "id": "ETHICS_HK_024",
    "terminology": "HARKing (Hypothesizing After Results are Known)",
    "terminology_ko": "HARKing",
    "terminology_en": "HARKing",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "데이터 분석 결과를 확인한 후에 마치 사전에 예측했던 것처럼 가설을 수정하거나 새로 만들어 보고하는 의심스러운 연구관행이다.",
    "definition_en": "A questionable research practice of modifying or creating hypotheses after examining data analysis results, presenting them as if they were predicted a priori.",
    "significance": "탐색적 결과를 확인적 결과로 포장하여 거짓 양성 비율을 높이고, 연구의 사전 예측력에 대한 과장된 인상을 만들어 과학적 자기교정을 방해한다.",
    "key_researchers": [
      {
        "name_ko": "노버트 케르",
        "name_en": "Norbert L. Kerr",
        "contribution": "1998년 HARKing이라는 용어를 창안하고 이 관행의 유형과 문제점을 체계적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "QRP",
        "name_en": "Questionable Research Practices",
        "id": "ETHICS_QR_028"
      },
      {
        "name_ko": "가설",
        "name_en": "Hypothesis",
        "id": "FOUND_HY_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HARKing = 결과를 보고 '아, 내가 원래 이걸 예측했지' → '사후 예언'",
      "differential": "HARKing은 사후 가설을 사전 가설로 위장하는 것이고, 탐색적 분석은 사후 분석임을 명시하는 정직한 관행이다.",
      "key_point": "사전등록이 가장 효과적인 방지책이며, 확인적 분석과 탐색적 분석을 논문에서 명확히 구분해야 한다.",
      "common_mistake": "모든 사후 가설 생성이 HARKing이라고 생각하는 것. 문제는 사후 가설을 사전 가설인 것처럼 보고하는 것이다."
    }
  },
  {
    "id": "ETHICS_FD_025",
    "terminology": "파일서랍 문제 (File Drawer Problem)",
    "terminology_ko": "파일서랍 문제",
    "terminology_en": "File Drawer Problem",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "통계적으로 비유의적인 결과를 얻은 연구가 출판되지 않고 연구자의 파일서랍에 방치되는 현상으로, 출판편향의 핵심 메커니즘이다.",
    "definition_en": "The phenomenon where studies with statistically non-significant results remain unpublished in researchers' file drawers, representing the core mechanism of publication bias.",
    "significance": "출판된 문헌이 실제 증거의 편향된 표본에 불과함을 경고하며, 메타분석 결과의 과대추정 문제와 사전등록의 필요성을 부각시켰다.",
    "key_researchers": [
      {
        "name_ko": "로버트 로젠탈",
        "name_en": "Robert Rosenthal",
        "contribution": "1979년 '파일서랍 문제'라는 용어를 창안하고, Fail-Safe N으로 이 문제의 심각도를 평가하는 방법을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "ETHICS_PB_012"
      },
      {
        "name_ko": "안전계수 N",
        "name_en": "Fail-Safe N",
        "id": "EFFECT_FSN_035"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "선택적 보고",
        "name_en": "Selective Reporting",
        "id": "ETHICS_SR_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "File Drawer = '서랍 속에 잠자는 연구들' → 비유의적 결과가 세상에 나오지 못함",
      "differential": "파일서랍 문제는 연구 전체가 미출판되는 것이고, 선택적 보고는 단일 연구 내 일부 결과만 보고하는 것이다.",
      "key_point": "등록보고서(Registered Reports)는 데이터 수집 전 심사를 통해 파일서랍 문제를 구조적으로 해결한다.",
      "common_mistake": "파일서랍 문제가 연구자의 게으름 때문이라고 생각하는 것. 학술지의 유의한 결과 선호가 구조적 원인이다."
    }
  },
  {
    "id": "ETHICS_SR_026",
    "terminology": "선택적 보고 (Selective Reporting)",
    "terminology_ko": "선택적 보고",
    "terminology_en": "Selective Reporting",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구에서 측정한 여러 결과 중 통계적으로 유의한 결과만 선별적으로 보고하고, 비유의적 결과는 누락하는 부적절한 보고 관행이다.",
    "definition_en": "The inappropriate reporting practice of selectively reporting only statistically significant results from multiple measured outcomes while omitting non-significant findings.",
    "significance": "단일 연구 수준에서 결과를 왜곡하여 효과의 존재와 크기에 대한 편향된 인상을 만들며, 메타분석의 정확성에도 부정적 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "존 이오아니디스",
        "name_en": "John P. A. Ioannidis",
        "contribution": "선택적 보고가 연구 결과의 신뢰성을 체계적으로 저해하는 메커니즘을 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "파일서랍 문제",
        "name_en": "File Drawer Problem",
        "id": "ETHICS_FD_025"
      },
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      },
      {
        "name_ko": "출판편향",
        "name_en": "Publication Bias",
        "id": "ETHICS_PB_012"
      }
    ],
    "sub_types": [
      {
        "name": "결과변인 선택적 보고",
        "description": "유의한 종속변인만 보고하고 나머지는 생략"
      },
      {
        "name": "분석 방법 선택적 보고",
        "description": "유의한 결과를 내는 분석 방법만 보고"
      },
      {
        "name": "하위집단 선택적 보고",
        "description": "유의한 하위집단 결과만 보고"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Selective Reporting = '체리 피킹(cherry picking)' → 좋아 보이는 결과만 골라 보고",
      "differential": "선택적 보고는 단일 연구 내 결과의 선별이고, 파일서랍 문제는 연구 전체의 미출판이다.",
      "key_point": "사전등록에서 1차 결과변인과 분석 방법을 미리 명시하면 선택적 보고를 방지할 수 있다.",
      "common_mistake": "비유의적 결과를 보고할 가치가 없다고 생각하는 것. 비유의적 결과도 과학적으로 중요한 정보이다."
    }
  },
  {
    "id": "ETHICS_RF_027",
    "terminology": "연구자 자유도 (Researcher Degrees of Freedom)",
    "terminology_ko": "연구자 자유도",
    "terminology_en": "Researcher Degrees of Freedom",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "연구 과정에서 연구자가 데이터 수집 중단 시점, 이상치 처리, 변인 선택, 분석 방법 등을 자의적으로 결정할 수 있는 유연성의 정도를 나타내는 개념이다.",
    "definition_en": "The degree of flexibility researchers have in making arbitrary decisions during research, including when to stop data collection, how to handle outliers, which variables to include, and which analyses to run.",
    "significance": "연구자 자유도가 높을수록 p-해킹의 가능성이 증가하여, 사전등록과 사전분석계획을 통해 이를 제한하는 것이 재현성 향상의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "조지프 시먼스",
        "name_en": "Joseph P. Simmons",
        "contribution": "2011년 'False-positive psychology'에서 연구자 자유도가 거짓 양성률을 급격히 높일 수 있음을 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "사전분석계획",
        "name_en": "Pre-Analysis Plan",
        "id": "ETHICS_PA_023"
      },
      {
        "name_ko": "QRP",
        "name_en": "Questionable Research Practices",
        "id": "ETHICS_QR_028"
      },
      {
        "name_ko": "사전등록",
        "name_en": "Preregistration",
        "id": "ETHICS_PR_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Researcher DF = '연구자의 선택지 수' → 선택지가 많을수록 유의한 결과를 찾을 확률 증가",
      "differential": "통계적 자유도(df)는 데이터의 독립 정보량이고, 연구자 자유도는 분석 결정의 유연성이다. 전혀 다른 개념이다.",
      "key_point": "Simmons 등(2011)은 4가지 연구자 자유도(종속변인 선택, 표본크기 결정, 공변인 포함, 조건 배제)만으로도 거짓 양성률이 61%까지 상승할 수 있음을 보여주었다.",
      "common_mistake": "연구자 자유도를 의도적 부정행위와 동일시하는 것. 대부분 연구자가 인식하지 못한 채 유연한 결정을 내리는 것이다."
    }
  },
  {
    "id": "ETHICS_QR_028",
    "terminology": "QRP (Questionable Research Practices)",
    "terminology_ko": "QRP",
    "terminology_en": "Questionable Research Practices",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "명백한 연구부정행위(FFP)에는 해당하지 않지만 연구의 신뢰성과 재현성을 저해하는 회색지대의 관행으로, p-해킹, HARKing, 선택적 보고 등이 포함된다.",
    "definition_en": "Gray-area practices that do not constitute clear research misconduct (FFP) but undermine research reliability and reproducibility, including p-hacking, HARKing, and selective reporting.",
    "significance": "명시적 부정행위보다 훨씬 빈번하게 발생하여 과학적 증거 기반을 체계적으로 오염시키며, 재현성 위기의 주된 원인으로 지목된다.",
    "key_researchers": [
      {
        "name_ko": "레슬리 존",
        "name_en": "Leslie K. John",
        "contribution": "2012년 심리학자 대상 설문에서 QRP의 높은 빈도를 실증적으로 보고했다(예: HARKing 35%, 선택적 보고 67%)."
      },
      {
        "name_ko": "조지프 시먼스",
        "name_en": "Joseph P. Simmons",
        "contribution": "QRP의 통계적 영향을 시뮬레이션으로 입증하고, '21-word solution(사전등록 약속)'을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "p-해킹",
        "name_en": "p-Hacking",
        "id": "ETHICS_PH_011"
      },
      {
        "name_ko": "HARKing",
        "name_en": "HARKing",
        "id": "ETHICS_HK_024"
      },
      {
        "name_ko": "선택적 보고",
        "name_en": "Selective Reporting",
        "id": "ETHICS_SR_026"
      },
      {
        "name_ko": "연구부정행위",
        "name_en": "Research Misconduct",
        "id": "ETHICS_RM_013"
      }
    ],
    "sub_types": [
      {
        "name": "p-해킹",
        "description": "유의한 결과를 위해 다양한 분석을 시도"
      },
      {
        "name": "HARKing",
        "description": "사후 가설을 사전 가설로 위장"
      },
      {
        "name": "선택적 보고",
        "description": "유의한 결과만 보고"
      },
      {
        "name": "선택적 이상치 제거",
        "description": "결과에 따라 이상치를 자의적으로 제거"
      },
      {
        "name": "선택적 표본 중단",
        "description": "유의해지면 데이터 수집 중단"
      }
    ],
    "quiz_hints": {
      "mnemonic": "QRP = '회색지대 관행' → 사기(FFP)는 아니지만 과학을 오염시키는 나쁜 습관들",
      "differential": "QRP는 의도성이 불분명한 '회색지대'의 관행이고, FFP(위조/변조/표절)는 명백한 '의도적' 부정행위이다.",
      "key_point": "John 등(2012)의 설문에서 심리학자의 58%가 최소 1개 QRP를 시인했으며, 가장 흔한 것은 선택적 보고(67%)였다.",
      "common_mistake": "QRP가 '가벼운 위반'이라 심각하지 않다고 생각하는 것. 빈번한 QRP의 누적 효과가 FFP보다 과학에 더 큰 해를 끼친다."
    }
  },
  {
    "id": "ETHICS_PP_029",
    "terminology": "연구참여자 보호 (Protection of Human Subjects)",
    "terminology_ko": "연구참여자 보호",
    "terminology_en": "Protection of Human Subjects",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "인간 대상 연구에서 참여자의 신체적, 심리적, 사회적 안녕을 보호하기 위한 윤리적 원칙과 제도적 장치의 총체로, IRB 심의, 사전동의, 위험-이득 평가를 포함한다.",
    "definition_en": "The totality of ethical principles and institutional mechanisms designed to protect the physical, psychological, and social well-being of participants in human subjects research, including IRB review, informed consent, and risk-benefit assessment.",
    "significance": "터스키기 매독 실험, 나치 인체실험 등의 역사적 비극이 참여자 보호의 필요성을 절실히 보여주었으며, 모든 인간 대상 연구의 기본적 윤리 요건이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 비처",
        "name_en": "Henry K. Beecher",
        "contribution": "1966년 비윤리적 연구 사례 22건을 폭로하여 연구참여자 보호 제도의 도입을 촉진했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      },
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      },
      {
        "name_ko": "디브리핑",
        "name_en": "Debriefing",
        "id": "ETHICS_DB_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "참여자 보호의 3요소: 사전동의 + 위험최소화 + 비밀보장 → '알리고, 보호하고, 지킨다'",
      "differential": "참여자 보호는 연구 '수행 과정'에서의 윤리이고, 연구 보고 윤리는 결과 '발표 과정'에서의 윤리이다.",
      "key_point": "취약 집단(아동, 수감자, 인지장애인)은 추가적 보호가 필요하며, 대리동의 등 별도 절차가 적용된다.",
      "common_mistake": "설문 연구는 참여자에게 위험이 없다고 가정하는 것. 민감한 질문은 심리적 불편감을 유발할 수 있다."
    }
  },
  {
    "id": "ETHICS_NC_030",
    "terminology": "뉘른베르크 강령 (Nuremberg Code)",
    "terminology_ko": "뉘른베르크 강령",
    "terminology_en": "Nuremberg Code",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "1947년 뉘른베르크 전범 재판에서 나치 인체실험에 대한 판결과 함께 공포된 인간 대상 연구의 10가지 윤리 원칙으로, 자발적 동의를 최우선 원칙으로 제시한다.",
    "definition_en": "Ten ethical principles for human experimentation proclaimed in 1947 following the Nuremberg trials of Nazi war crimes, establishing voluntary consent as the paramount requirement.",
    "significance": "현대 연구윤리의 역사적 출발점으로, 인간 대상 연구에서의 자발적 동의 원칙을 최초로 국제적으로 선언하여 이후 모든 윤리 지침의 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "앤드루 아이비",
        "name_en": "Andrew C. Ivy",
        "contribution": "뉘른베르크 재판에서 미국 의학 자문관으로 활동하며, 연구윤리 원칙 수립에 기여했다."
      },
      {
        "name_ko": "레오 알렉산더",
        "name_en": "Leo Alexander",
        "contribution": "뉘른베르크 강령의 10개 원칙 초안을 작성한 핵심 인물이다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "헬싱키 선언",
        "name_en": "Declaration of Helsinki",
        "id": "ETHICS_DH_031"
      },
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "뉘른베르크 = 나치 → 인체실험의 비극 → 자발적 동의가 '제1원칙'",
      "differential": "뉘른베르크 강령은 1947년 최초의 국제 연구윤리 지침이고, 헬싱키 선언은 1964년 WMA가 이를 발전시킨 의학연구 윤리 선언이다.",
      "key_point": "10가지 원칙 중 제1원칙인 '자발적 동의는 절대적으로 필수적이다'가 가장 핵심이다.",
      "common_mistake": "뉘른베르크 강령이 국제법으로 법적 구속력이 있다고 생각하는 것. 윤리적 지침이며 직접적 법적 효력은 제한적이다."
    }
  },
  {
    "id": "ETHICS_DH_031",
    "terminology": "헬싱키 선언 (Declaration of Helsinki)",
    "terminology_ko": "헬싱키 선언",
    "terminology_en": "Declaration of Helsinki",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "세계의사회(WMA)가 1964년에 채택한 인간 대상 의학연구의 윤리적 원칙으로, 뉘른베르크 강령을 발전시켜 IRB 심의, 취약 집단 보호 등을 추가로 규정한다.",
    "definition_en": "Ethical principles for medical research involving human subjects adopted by the World Medical Association in 1964, extending the Nuremberg Code with requirements for IRB review and protection of vulnerable populations.",
    "significance": "국제적으로 가장 널리 인정되는 의학연구 윤리 선언으로, FDA를 포함한 각국 규제기관의 연구윤리 기준에 직접적 영향을 미치고 있다.",
    "key_researchers": [
      {
        "name_ko": "세계의사회",
        "name_en": "World Medical Association",
        "contribution": "1964년 헬싱키에서 최초 채택 후 여러 차례 개정(최근 2013년)하여 현대 의학연구윤리의 국제 표준을 유지하고 있다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뉘른베르크 강령",
        "name_en": "Nuremberg Code",
        "id": "ETHICS_NC_030"
      },
      {
        "name_ko": "벨몬트 보고서",
        "name_en": "Belmont Report",
        "id": "ETHICS_BM_002"
      },
      {
        "name_ko": "IRB",
        "name_en": "Institutional Review Board",
        "id": "ETHICS_IR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "헬싱키(핀란드) = WMA → 뉘른베르크 강령의 발전판, 의학연구 윤리의 국제 표준",
      "differential": "뉘른베르크 강령은 자발적 동의에 집중하고, 헬싱키 선언은 윤리위원회 심의, 위험-이득 평가, 취약 집단 보호까지 포괄한다.",
      "key_point": "참여자의 이익이 과학과 사회의 이익보다 항상 우선한다는 원칙이 핵심이다.",
      "common_mistake": "헬싱키 선언이 한 번 제정된 후 변하지 않았다고 생각하는 것. 1964년 이후 여러 차례 개정되어 현대적 요구를 반영하고 있다."
    }
  },
  {
    "id": "ETHICS_ER_032",
    "terminology": "효과보고 의무 (Effect Size Reporting Mandate)",
    "terminology_ko": "효과보고 의무",
    "terminology_en": "Effect Size Reporting Mandate",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "APA를 비롯한 학술기관이 모든 통계 분석에서 효과크기와 신뢰구간을 의무적으로 보고하도록 요구하는 출판 정책이다.",
    "definition_en": "A publication policy by APA and other scholarly institutions requiring mandatory reporting of effect sizes and confidence intervals in all statistical analyses.",
    "significance": "p값 중심의 이분법적 해석(유의/비유의)을 넘어 결과의 실질적 크기와 정밀도를 투명하게 전달하여, 연구의 해석과 메타분석적 통합을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회 출판위원회",
        "name_en": "APA Publications and Communications Board",
        "contribution": "APA Publication Manual 5판(2001)부터 효과크기 보고를 강력 권장하고, 6판(2010)에서 의무화했다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "1994년 'The earth is round (p < .05)' 논문에서 p값 중심 관행을 비판하고 효과크기 보고의 필요성을 역설했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "효과크기",
        "name_en": "Effect Size",
        "id": "EFFECT_ES_004"
      },
      {
        "name_ko": "신뢰구간",
        "name_en": "Confidence Interval",
        "id": "EFFECT_CI_019"
      },
      {
        "name_ko": "APA 보고 양식",
        "name_en": "APA Reporting Style",
        "id": "ETHICS_AP_018"
      },
      {
        "name_ko": "p값",
        "name_en": "p-value",
        "id": "HYPO_PV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "APA 6판 이후: p값만으로는 불충분, 반드시 ES + CI를 함께 보고",
      "differential": "효과보고 의무는 개별 연구에서의 보고 기준이고, 메타분석은 여러 연구의 효과크기를 통합하는 분석 방법이다.",
      "key_point": "Cohen(1994)의 유명한 제목 'The earth is round (p < .05)'은 p값의 이분법적 사용에 대한 통렬한 비판이다.",
      "common_mistake": "효과크기를 보고하기만 하면 충분하다고 생각하는 것. 효과크기의 신뢰구간도 함께 보고해야 추정의 정밀도를 평가할 수 있다."
    }
  },
  {
    "id": "ETHICS_ST_033",
    "terminology": "STROBE 성명 (STROBE Statement)",
    "terminology_ko": "STROBE 성명",
    "terminology_en": "STROBE Statement",
    "category": "ETHICS",
    "category_name": "연구윤리와 보고 (Research Ethics & Reporting)",
    "definition": "관찰 역학 연구(코호트, 사례-대조, 단면 연구)의 보고 품질을 향상시키기 위한 국제 지침으로, 22개 항목의 체크리스트를 제공한다.",
    "definition_en": "An international guideline for improving the reporting quality of observational epidemiological studies (cohort, case-control, cross-sectional), providing a 22-item checklist.",
    "significance": "관찰 연구는 RCT와 달리 표준화된 보고 형식이 부족했으나, STROBE가 투명하고 완전한 보고를 위한 합의된 기준을 제공하여 연구 평가를 용이하게 한다.",
    "key_researchers": [
      {
        "name_ko": "에릭 폰 엘름",
        "name_en": "Erik von Elm",
        "contribution": "STROBE 성명의 주도적 개발자로, 관찰 연구 보고의 국제 표준화를 추진했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "CONSORT 성명",
        "name_en": "CONSORT Statement",
        "id": "ETHICS_CS_019"
      },
      {
        "name_ko": "APA 보고 양식",
        "name_en": "APA Reporting Style",
        "id": "ETHICS_AP_018"
      },
      {
        "name_ko": "내적 타당도",
        "name_en": "Internal Validity",
        "id": "DESIGN_IV_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "STROBE = Strengthening the Reporting of Observational Studies in Epidemiology → '관찰 연구 보고 강화'",
      "differential": "STROBE는 관찰 연구(코호트, 사례-대조, 단면) 보고 지침이고, CONSORT는 실험 연구(RCT) 보고 지침이다.",
      "key_point": "22개 항목 체크리스트가 핵심이며, 연구설계 유형(코호트/사례-대조/단면)에 따라 일부 항목이 다르다.",
      "common_mistake": "STROBE가 연구 수행 방법을 규정한다고 생각하는 것. CONSORT와 마찬가지로 연구 '보고' 방법에 대한 지침이다."
    }
  }
];
