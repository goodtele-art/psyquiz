const TERMS_DATA = {};

TERMS_DATA.FOUND = [
  {
    "id": "FOUND_CF_001",
    "terminology": "상담 (Counseling)",
    "terminology_ko": "상담",
    "terminology_en": "Counseling",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "전문적 훈련을 받은 상담자가 도움을 필요로 하는 내담자와의 관계에서 내담자의 성장과 문제 해결을 돕는 심리적 조력 과정이다.",
    "definition_en": "A professional helping process in which a trained counselor assists a client in personal growth and problem resolution through a therapeutic relationship.",
    "significance": "심리적 조력의 핵심 활동으로, 상담학의 정체성과 전문성을 정의하는 기본 개념이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "상담을 독립적 전문 영역으로 확립하고 내담자 중심 접근을 제시"
      },
      {
        "name_ko": "프랭크 파슨스",
        "name_en": "Frank Parsons",
        "contribution": "직업상담 운동의 창시자로 상담의 제도화에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리치료",
        "name_en": "Psychotherapy",
        "id": "FOUND_PT_002"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      },
      {
        "name_ko": "인간중심상담",
        "name_en": "Person-Centered Counseling",
        "id": "PERSON_PC_001"
      }
    ],
    "sub_types": [
      {
        "name": "개인상담",
        "description": "일대일로 진행되는 상담"
      },
      {
        "name": "집단상담",
        "description": "여러 내담자가 함께 참여하는 상담"
      },
      {
        "name": "가족상담",
        "description": "가족 구성원이 함께 참여하는 상담"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상담 = 전문적 관계 + 성장 + 문제해결",
      "differential": "심리치료는 심층적 성격 변화에 초점, 상담은 성장과 적응에 초점을 둔다",
      "key_point": "전문적 훈련을 받은 상담자와 내담자 간의 조력 관계가 핵심",
      "common_mistake": "상담을 단순한 조언이나 충고로 오해하는 경우가 많으나, 전문적 기술이 필요한 심리적 조력 과정이다"
    }
  },
  {
    "id": "FOUND_PT_002",
    "terminology": "심리치료 (Psychotherapy)",
    "terminology_ko": "심리치료",
    "terminology_en": "Psychotherapy",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "심리적 장애나 정서적 어려움을 겪는 개인에게 체계적인 심리학적 방법을 적용하여 증상 완화와 성격 변화를 목표로 하는 전문적 치료 과정이다.",
    "definition_en": "A professional treatment process that applies systematic psychological methods to individuals with psychological disorders or emotional difficulties, aiming at symptom relief and personality change.",
    "significance": "상담과 밀접하게 관련되면서도 구별되는 개념으로, 보다 심층적인 성격 구조의 변화를 추구한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석을 통해 현대 심리치료의 기반을 확립"
      },
      {
        "name_ko": "제롬 프랭크",
        "name_en": "Jerome Frank",
        "contribution": "심리치료의 공통 요인을 체계적으로 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담",
        "name_en": "Counseling",
        "id": "FOUND_CF_001"
      },
      {
        "name_ko": "공통요인",
        "name_en": "Common Factors",
        "id": "FOUND_CMF_010"
      },
      {
        "name_ko": "정신역동 상담",
        "name_en": "Psychodynamic Therapy",
        "id": "PSYCHOD_PD_001"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "CBT_CT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심리치료 = 심층적 성격 변화 + 증상 완화",
      "differential": "상담은 정상적 발달과 적응에 초점, 심리치료는 병리와 심층적 성격 변화에 초점",
      "key_point": "체계적인 심리학적 방법을 적용한다는 점에서 일반적 대화와 구별됨",
      "common_mistake": "상담과 심리치료를 완전히 동일시하거나 완전히 별개로 보는 것 모두 부정확하다"
    }
  },
  {
    "id": "FOUND_TR_003",
    "terminology": "상담관계 (Therapeutic Relationship)",
    "terminology_ko": "상담관계",
    "terminology_en": "Therapeutic Relationship",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자와 내담자 사이에 형성되는 전문적이고 치료적인 인간관계로, 상담 성과의 가장 중요한 예측 변인으로 알려져 있다.",
    "definition_en": "A professional and therapeutic human relationship formed between counselor and client, known as the most important predictor of counseling outcomes.",
    "significance": "모든 상담 이론에서 치료적 변화의 핵심 기제로 인정되며, 이론적 지향과 무관하게 상담 효과를 결정짓는 공통 요인이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "치료적 관계의 필요충분조건(공감, 무조건적 긍정적 존중, 일치성)을 제시"
      },
      {
        "name_ko": "에드워드 보딘",
        "name_en": "Edward Bordin",
        "contribution": "작업동맹 개념을 범이론적으로 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      },
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EM_003"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상담관계 = 상담 성과의 최고 예측 변인",
      "differential": "작업동맹은 상담관계의 구조화된 하위 개념으로, 목표합의, 과제합의, 정서적 유대를 포함",
      "key_point": "어떤 이론적 지향이든 상담관계의 질이 성과를 좌우한다",
      "common_mistake": "상담관계를 단순한 친밀함으로 오해하나, 전문적 경계가 있는 치료적 관계이다"
    }
  },
  {
    "id": "FOUND_WA_004",
    "terminology": "작업동맹 (Working Alliance)",
    "terminology_ko": "작업동맹",
    "terminology_en": "Working Alliance",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자와 내담자가 상담 목표에 대한 합의, 과제에 대한 합의, 정서적 유대를 형성하는 협력적 관계로, Bordin이 제안한 범이론적 개념이다.",
    "definition_en": "A collaborative relationship between counselor and client involving agreement on goals, agreement on tasks, and emotional bond, a pantheoretical concept proposed by Bordin.",
    "significance": "이론적 지향에 관계없이 모든 상담에 적용 가능한 범이론적 개념으로, 상담 효과 연구의 핵심 변인이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 보딘",
        "name_en": "Edward Bordin",
        "contribution": "작업동맹의 3요소 모델(목표, 과제, 유대)을 제안"
      },
      {
        "name_ko": "아담 호바스",
        "name_en": "Adam Horvath",
        "contribution": "작업동맹 측정도구(WAI) 개발 및 상담 성과와의 관계 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "공통요인",
        "name_en": "Common Factors",
        "id": "FOUND_CMF_010"
      }
    ],
    "sub_types": [
      {
        "name": "목표 합의",
        "description": "상담에서 달성하고자 하는 목표에 대한 상호 합의"
      },
      {
        "name": "과제 합의",
        "description": "목표 달성을 위한 활동과 방법에 대한 합의"
      },
      {
        "name": "정서적 유대",
        "description": "상호 신뢰, 존중, 돌봄에 기반한 관계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "작업동맹 3요소: 목-과-유 (목표, 과제, 유대)",
      "differential": "상담관계는 넓은 개념, 작업동맹은 목표·과제·유대의 3요소로 구조화된 하위 개념",
      "key_point": "Bordin이 제안한 범이론적 개념으로 목표합의, 과제합의, 정서적 유대의 3요소로 구성",
      "common_mistake": "작업동맹을 단순히 좋은 관계로만 이해하나, 목표와 과제에 대한 합의가 핵심이다"
    }
  },
  {
    "id": "FOUND_TA_005",
    "terminology": "치료적 태도 (Therapeutic Attitude)",
    "terminology_ko": "치료적 태도",
    "terminology_en": "Therapeutic Attitude",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 내담자를 대할 때 갖추어야 할 전문적 자세와 마음가짐으로, 공감, 존중, 진정성 등이 핵심 요소이다.",
    "definition_en": "The professional stance and mindset a counselor should maintain when working with clients, with empathy, respect, and genuineness as core elements.",
    "significance": "상담의 효과를 좌우하는 기본 조건으로, Rogers가 제시한 핵심 조건과 밀접하게 관련된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "공감, 무조건적 긍정적 존중, 일치성의 3가지 핵심 조건 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EM_003"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "치료적 태도 = 공감 + 존중 + 진정성",
      "differential": "상담기법은 '무엇을 하는가', 치료적 태도는 '어떤 자세로 하는가'에 관한 것",
      "key_point": "Rogers의 핵심 조건(공감, 무조건적 긍정적 존중, 일치성)이 대표적",
      "common_mistake": "치료적 태도를 기법으로 혼동하나, 이는 상담자의 존재 방식에 관한 것이다"
    }
  },
  {
    "id": "FOUND_CT_006",
    "terminology": "상담이론 (Counseling Theory)",
    "terminology_ko": "상담이론",
    "terminology_en": "Counseling Theory",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "인간의 심리적 문제와 변화 과정을 설명하고 상담 실제를 안내하는 체계적인 이론적 틀로, 인간관, 핵심개념, 상담기법, 상담과정을 포함한다.",
    "definition_en": "A systematic theoretical framework that explains human psychological problems and change processes, guiding counseling practice through views of human nature, core concepts, techniques, and processes.",
    "significance": "상담자의 사례 개념화와 개입 전략의 기초가 되며, 다양한 이론적 지향이 상담 실제를 풍요롭게 한다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "주요 상담 이론들을 통합적으로 정리한 교과서 저술"
      },
      {
        "name_ko": "노안영",
        "name_en": "Ahn-Young Roh",
        "contribution": "한국 상담학에서 상담이론의 체계적 소개와 교육에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "FOUND_CC_013"
      },
      {
        "name_ko": "인간관",
        "name_en": "View of Human Nature",
        "id": "FOUND_VH_007"
      }
    ],
    "sub_types": [
      {
        "name": "정신역동적 접근",
        "description": "무의식과 초기 경험을 강조하는 이론군"
      },
      {
        "name": "인본주의적 접근",
        "description": "인간의 자기실현 경향성을 강조하는 이론군"
      },
      {
        "name": "인지행동적 접근",
        "description": "사고와 행동의 변화를 강조하는 이론군"
      },
      {
        "name": "포스트모던 접근",
        "description": "사회적 구성과 내러티브를 강조하는 이론군"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상담이론 4요소: 인간관, 핵심개념, 상담기법, 상담과정",
      "differential": "상담이론은 포괄적 틀, 상담기법은 구체적 개입 방법을 의미",
      "key_point": "인간관, 핵심개념, 상담기법, 상담과정을 포함하는 체계적 틀",
      "common_mistake": "하나의 이론만 옳다고 보는 것은 편협한 관점이며, 각 이론은 인간의 다른 측면을 조명한다"
    }
  },
  {
    "id": "FOUND_VH_007",
    "terminology": "인간관 (View of Human Nature)",
    "terminology_ko": "인간관",
    "terminology_en": "View of Human Nature",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "각 상담 이론이 전제하는 인간 본성에 대한 기본 가정으로, 결정론 대 자유의지, 선천성 대 후천성, 합리성 대 비합리성 등의 차원에서 이론마다 다르다.",
    "definition_en": "The fundamental assumptions about human nature underlying each counseling theory, varying across dimensions such as determinism vs. free will, nature vs. nurture, and rationality vs. irrationality.",
    "significance": "상담자의 인간관은 내담자를 바라보는 시각과 개입 방향을 결정하는 가장 근본적인 요인이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "결정론적·비합리적 인간관 (무의식에 의해 지배)"
      },
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "긍정적·성장지향적 인간관 (자기실현경향성)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "자기실현경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "FOUND_SAT_008"
      },
      {
        "name_ko": "결정론",
        "name_en": "Determinism",
        "id": "FOUND_DT_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인간관의 3대 축: 결정론-자유의지, 선천-후천, 합리-비합리",
      "differential": "정신분석은 결정론적 인간관, 실존주의는 자유의지 강조, 행동주의는 환경결정론",
      "key_point": "각 이론의 인간관이 상담 목표와 기법을 결정짓는 출발점",
      "common_mistake": "인간관을 단순히 낙관적/비관적으로만 구분하나, 여러 차원이 복합적으로 작용한다"
    }
  },
  {
    "id": "FOUND_SAT_008",
    "terminology": "자기실현경향성 (Self-Actualizing Tendency)",
    "terminology_ko": "자기실현경향성",
    "terminology_en": "Self-Actualizing Tendency",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "모든 인간에게 내재된 자신의 잠재력을 실현하고 성장하려는 기본적 동기로, 인본주의 상담의 핵심 전제이다.",
    "definition_en": "An inherent motivation in all humans to realize their potential and grow, serving as a core premise of humanistic counseling approaches.",
    "significance": "인본주의 상담의 이론적 토대로, 상담자의 역할이 지시가 아닌 촉진임을 정당화한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "실현경향성(actualizing tendency)을 인간의 유일한 동기로 제시"
      },
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "자기실현(self-actualization)을 욕구위계의 최상위에 배치"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간관",
        "name_en": "View of Human Nature",
        "id": "FOUND_VH_007"
      },
      {
        "name_ko": "인간중심상담",
        "name_en": "Person-Centered Counseling",
        "id": "PERSON_PC_001"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기실현경향성 = 모든 인간의 내재적 성장 동기",
      "differential": "Maslow의 자기실현은 욕구위계 최상위, Rogers의 실현경향성은 유일한 기본 동기",
      "key_point": "Rogers는 이를 인간의 유일한 동기로 보았으며, 이것이 인본주의 상담의 철학적 기초",
      "common_mistake": "자기실현을 단순한 성취욕으로 혼동하나, 전인적 성장과 잠재력 발현을 의미한다"
    }
  },
  {
    "id": "FOUND_DT_009",
    "terminology": "결정론 (Determinism)",
    "terminology_ko": "결정론",
    "terminology_en": "Determinism",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "인간의 행동과 심리가 과거 경험, 무의식적 충동, 환경 등 외적·내적 요인에 의해 결정된다는 철학적 입장으로, 정신분석과 행동주의의 기본 전제이다.",
    "definition_en": "A philosophical position that human behavior and psychology are determined by external and internal factors such as past experiences, unconscious drives, and environment, foundational to psychoanalysis and behaviorism.",
    "significance": "상담이론의 인간관을 이해하는 핵심 축으로, 자유의지 강조 이론과 대비되는 기본 전제이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "심리적 결정론(psychic determinism): 모든 심리 현상에는 원인이 있다"
      },
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "환경 결정론: 행동은 강화 역사에 의해 결정됨"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간관",
        "name_en": "View of Human Nature",
        "id": "FOUND_VH_007"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "정신역동 상담",
        "name_en": "Psychodynamic Therapy",
        "id": "PSYCHOD_PD_001"
      },
      {
        "name_ko": "행동주의 상담",
        "name_en": "Behavior Therapy",
        "id": "BEHAV_BT_001"
      }
    ],
    "sub_types": [
      {
        "name": "심리적 결정론",
        "description": "무의식적 욕구와 초기 경험이 행동을 결정 (Freud)"
      },
      {
        "name": "환경적 결정론",
        "description": "외적 환경과 강화가 행동을 결정 (Skinner)"
      },
      {
        "name": "상호적 결정론",
        "description": "개인, 행동, 환경이 상호 영향 (Bandura)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "결정론: 과거/환경/무의식이 현재를 결정",
      "differential": "결정론은 정신분석·행동주의, 자유의지는 실존주의·인본주의의 입장",
      "key_point": "Freud의 심리적 결정론과 Skinner의 환경적 결정론이 대표적",
      "common_mistake": "결정론을 운명론과 동일시하나, 상담에서는 과거의 영향을 이해하여 변화를 도모하는 데 활용한다"
    }
  },
  {
    "id": "FOUND_CMF_010",
    "terminology": "공통요인 (Common Factors)",
    "terminology_ko": "공통요인",
    "terminology_en": "Common Factors",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "다양한 상담 이론과 접근에서 공통적으로 발견되는 치료적 변화 요인으로, 치료적 관계, 기대와 희망, 정서적 각성 등이 포함된다.",
    "definition_en": "Therapeutic change factors commonly found across various counseling theories and approaches, including the therapeutic relationship, expectation and hope, and emotional arousal.",
    "significance": "어떤 특정 이론이나 기법보다 공통요인이 상담 성과의 더 큰 비중을 차지한다는 연구 결과는 상담학의 패러다임을 변화시켰다.",
    "key_researchers": [
      {
        "name_ko": "제롬 프랭크",
        "name_en": "Jerome Frank",
        "contribution": "모든 심리치료에 공통되는 요인(치유적 맥락, 치료적 관계, 이론적 근거, 치료 절차)을 분석"
      },
      {
        "name_ko": "마이클 램버트",
        "name_en": "Michael Lambert",
        "contribution": "상담 성과의 변량 분석: 외적 요인 40%, 관계 30%, 기대 15%, 기법 15%"
      },
      {
        "name_ko": "브루스 왐폴드",
        "name_en": "Bruce Wampold",
        "contribution": "맥락 모형을 통해 공통요인 접근의 경험적 근거 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      }
    ],
    "sub_types": [
      {
        "name": "치료적 관계",
        "description": "상담자와 내담자 간의 신뢰 관계 (성과의 약 30%)"
      },
      {
        "name": "기대와 희망",
        "description": "치료에 대한 내담자의 긍정적 기대 (성과의 약 15%)"
      },
      {
        "name": "외적 요인",
        "description": "내담자의 자원, 환경 변화 등 (성과의 약 40%)"
      },
      {
        "name": "기법 요인",
        "description": "특정 상담 기법의 기여 (성과의 약 15%)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Lambert의 성과 비율: 외40-관30-기대15-기법15",
      "differential": "공통요인 접근은 이론 간 공유 요소를 강조, 특수요인 접근은 특정 기법의 효과를 강조",
      "key_point": "Lambert에 따르면 기법보다 관계(30%)와 외적 요인(40%)이 성과에 더 큰 기여",
      "common_mistake": "공통요인이 기법이 불필요하다는 의미는 아니며, 기법도 15%의 독립적 기여를 한다"
    }
  },
  {
    "id": "FOUND_IA_011",
    "terminology": "통합적 접근 (Integrative Approach)",
    "terminology_ko": "통합적 접근",
    "terminology_en": "Integrative Approach",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "하나의 이론에만 의존하지 않고 다양한 상담 이론과 기법을 체계적으로 결합하여 내담자에게 최적의 상담을 제공하려는 접근이다.",
    "definition_en": "An approach that systematically combines various counseling theories and techniques rather than relying on a single theory to provide optimal counseling for clients.",
    "significance": "현대 상담에서 가장 많은 상담자들이 채택하는 접근으로, 내담자 맞춤형 개입의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "아놀드 라자루스",
        "name_en": "Arnold Lazarus",
        "contribution": "다중양식치료(multimodal therapy)를 통한 기술적 절충주의 제시"
      },
      {
        "name_ko": "제임스 프로차스카",
        "name_en": "James Prochaska",
        "contribution": "변화 단계 모형을 통한 범이론적 접근 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공통요인",
        "name_en": "Common Factors",
        "id": "FOUND_CMF_010"
      },
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "FOUND_CC_013"
      }
    ],
    "sub_types": [
      {
        "name": "기술적 절충주의",
        "description": "이론에 구애받지 않고 효과적인 기법을 선택적으로 사용"
      },
      {
        "name": "이론적 통합",
        "description": "두 개 이상의 이론을 하나의 새로운 체계로 통합"
      },
      {
        "name": "공통요인 접근",
        "description": "이론 간 공통되는 치료적 요인에 초점"
      },
      {
        "name": "동화적 통합",
        "description": "하나의 주요 이론을 기반으로 다른 이론의 기법을 흡수"
      }
    ],
    "quiz_hints": {
      "mnemonic": "통합 4유형: 기절-이통-공통-동화 (기술적 절충, 이론적 통합, 공통요인, 동화적 통합)",
      "differential": "절충주의는 기법 중심 선택, 통합적 접근은 이론적 일관성을 추구한다는 차이",
      "key_point": "기술적 절충주의, 이론적 통합, 공통요인 접근, 동화적 통합의 4가지 유형이 있다",
      "common_mistake": "통합적 접근을 이것저것 무작위로 사용하는 것으로 오해하나, 체계적이고 일관된 틀이 필요하다"
    }
  },
  {
    "id": "FOUND_EC_012",
    "terminology": "절충주의 (Eclecticism)",
    "terminology_ko": "절충주의",
    "terminology_en": "Eclecticism",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "특정 이론에 고정되지 않고 여러 이론의 기법 중 내담자에게 가장 효과적인 것을 선택적으로 활용하는 실용적 접근이다.",
    "definition_en": "A pragmatic approach that selectively utilizes the most effective techniques from various theories without being fixed to a particular theoretical orientation.",
    "significance": "실무 상담자들이 가장 많이 채택하는 접근 방식으로, 다양한 내담자 문제에 유연하게 대응할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "아놀드 라자루스",
        "name_en": "Arnold Lazarus",
        "contribution": "기술적 절충주의와 BASIC-ID 다중양식 평가 체계 개발"
      },
      {
        "name_ko": "존 노크로스",
        "name_en": "John Norcross",
        "contribution": "상담 통합과 절충의 경험적 근거 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      },
      {
        "name_ko": "공통요인",
        "name_en": "Common Factors",
        "id": "FOUND_CMF_010"
      },
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "절충주의 = 효과적 기법의 실용적 선택",
      "differential": "절충주의는 기법 중심의 선택적 활용, 통합적 접근은 이론적 틀의 체계적 결합을 추구",
      "key_point": "Lazarus의 기술적 절충주의(technical eclecticism)가 대표적",
      "common_mistake": "절충주의를 무원칙한 혼합으로 오해하나, 경험적 근거에 기반한 체계적 선택이다"
    }
  },
  {
    "id": "FOUND_CC_013",
    "terminology": "사례개념화 (Case Conceptualization)",
    "terminology_ko": "사례개념화",
    "terminology_en": "Case Conceptualization",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자의 문제를 특정 상담 이론적 틀에 기반하여 체계적으로 이해하고, 문제의 원인, 유지 요인, 치료 방향을 설정하는 과정이다.",
    "definition_en": "A systematic process of understanding a client's problems based on a specific theoretical framework, identifying causes, maintaining factors, and establishing treatment directions.",
    "significance": "상담 계획 수립의 기초가 되며, 이론과 실제를 연결하는 핵심 역량이다.",
    "key_researchers": [
      {
        "name_ko": "트레이시 이얼스",
        "name_en": "Tracy Eells",
        "contribution": "사례개념화의 체계적 모형과 훈련 방법 연구"
      },
      {
        "name_ko": "재클린 퍼슨스",
        "name_en": "Jacqueline Persons",
        "contribution": "인지행동치료 기반 사례개념화 모형 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "FOUND_CP_014"
      },
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사례개념화 = 이론적 렌즈로 내담자 문제를 체계적으로 조망",
      "differential": "진단은 분류 체계에 따른 명명, 사례개념화는 이론에 기반한 개별적 이해",
      "key_point": "이론적 틀에 기반하여 문제의 원인, 유지요인, 치료방향을 설정하는 과정",
      "common_mistake": "사례개념화를 단순한 진단명 부여로 혼동하나, 개별 내담자에 대한 깊이 있는 이해를 요구한다"
    }
  },
  {
    "id": "FOUND_CP_014",
    "terminology": "상담과정 (Counseling Process)",
    "terminology_ko": "상담과정",
    "terminology_en": "Counseling Process",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담의 시작부터 종결까지의 전체적인 흐름으로, 일반적으로 초기(관계형성), 중기(탐색과 작업), 후기(종결과 평가) 단계로 구분된다.",
    "definition_en": "The overall flow from the beginning to the end of counseling, generally divided into initial (relationship building), middle (exploration and working), and final (termination and evaluation) stages.",
    "significance": "상담의 구조화를 위한 기본 틀로, 각 단계에 적합한 상담자 역할과 과제를 안내한다.",
    "key_researchers": [
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담과정의 3단계 모형(탐색-통찰-실행) 제시"
      },
      {
        "name_ko": "제럴드 이건",
        "name_en": "Gerard Egan",
        "contribution": "숙련된 조력자 모형의 3단계(현재 이야기-선호 이야기-실행) 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "FOUND_CC_013"
      },
      {
        "name_ko": "종결",
        "name_en": "Termination",
        "id": "FOUND_TM_015"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      }
    ],
    "sub_types": [
      {
        "name": "초기 단계",
        "description": "관계형성, 문제 탐색, 목표 설정"
      },
      {
        "name": "중기 단계",
        "description": "심층 탐색, 통찰, 변화 작업"
      },
      {
        "name": "후기 단계",
        "description": "종결 준비, 성과 평가, 추수 상담"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상담과정 3단계: 초(관계)-중(작업)-후(종결)",
      "differential": "Hill의 모형은 탐색-통찰-실행, Egan의 모형은 현재이야기-선호이야기-실행",
      "key_point": "초기(관계형성), 중기(탐색과 작업), 후기(종결과 평가)의 3단계 구조",
      "common_mistake": "상담과정을 기계적으로 따르는 것이 아니라, 내담자에 따라 유연하게 적용해야 한다"
    }
  },
  {
    "id": "FOUND_TM_015",
    "terminology": "종결 (Termination)",
    "terminology_ko": "종결",
    "terminology_en": "Termination",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담 목표가 달성되었거나 상담을 더 이상 지속하기 어려운 경우 상담을 마무리하는 과정으로, 성과 요약, 재발 방지, 독립적 기능 강화를 포함한다.",
    "definition_en": "The process of concluding counseling when goals have been achieved or continuation is no longer feasible, including summarizing outcomes, relapse prevention, and strengthening independent functioning.",
    "significance": "적절한 종결은 상담 성과를 공고히 하고 내담자의 자율성을 촉진하며, 조기 종결은 새로운 상실 경험이 될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "앨런 마라트",
        "name_en": "Alan Marlatt",
        "contribution": "재발 방지 모형을 통해 종결 후 유지 전략 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "FOUND_CP_014"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      }
    ],
    "sub_types": [
      {
        "name": "계획된 종결",
        "description": "상담 목표 달성 후 합의에 의한 종결"
      },
      {
        "name": "조기 종결",
        "description": "내담자 또는 상담자에 의한 예상치 못한 종결"
      },
      {
        "name": "강제 종결",
        "description": "외부 요인(보험, 전근 등)에 의한 종결"
      }
    ],
    "quiz_hints": {
      "mnemonic": "종결 3과제: 성과요약 + 재발방지 + 독립기능강화",
      "differential": "계획된 종결은 목표 달성 후, 조기 종결은 목표 달성 전에 이루어지는 종결",
      "key_point": "성과 요약, 재발 방지, 독립적 기능 강화가 종결의 핵심 과제",
      "common_mistake": "종결을 단순히 상담을 그만두는 것으로 보나, 체계적인 마무리 과정이 필요하다"
    }
  },
  {
    "id": "FOUND_RS_016",
    "terminology": "저항 (Resistance)",
    "terminology_ko": "저항",
    "terminology_en": "Resistance",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자가 상담 과정에서 변화에 대해 보이는 의식적 또는 무의식적 반대 행동으로, 상담 진행을 방해하는 듯 보이나 치료적으로 의미 있는 자료가 될 수 있다.",
    "definition_en": "Conscious or unconscious oppositional behaviors shown by clients toward change in counseling, which appear to hinder progress but can serve as therapeutically meaningful material.",
    "significance": "모든 상담 이론에서 중요하게 다루는 현상으로, 저항의 의미를 어떻게 이해하느냐가 이론마다 다르다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "저항을 무의식적 방어로 개념화하고 분석의 대상으로 삼음"
      },
      {
        "name_ko": "윌리엄 밀러",
        "name_en": "William Miller",
        "contribution": "동기강화상담에서 저항을 관계적 현상으로 재개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "저항 = 변화에 대한 내담자의 (무)의식적 반대",
      "differential": "정신분석에서 저항은 무의식적 방어, 동기강화상담에서는 관계적 불협화음으로 이해",
      "key_point": "저항은 방해가 아니라 치료적으로 중요한 정보를 제공하는 현상",
      "common_mistake": "저항을 단순히 비협조로 보나, 내담자의 심리적 안전을 위한 자기보호 기제일 수 있다"
    }
  },
  {
    "id": "FOUND_IN_017",
    "terminology": "통찰 (Insight)",
    "terminology_ko": "통찰",
    "terminology_en": "Insight",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자가 자신의 감정, 사고, 행동 패턴과 그 원인에 대해 새롭게 인식하고 이해하게 되는 심리적 경험으로, 많은 상담 이론에서 변화의 핵심 기제로 본다.",
    "definition_en": "A psychological experience in which the client gains new awareness and understanding of their emotional, cognitive, and behavioral patterns and their causes, viewed as a key mechanism of change in many counseling theories.",
    "significance": "정신역동적, 인본주의적 상담에서 치료적 변화의 중심 기제로, 통찰이 행동 변화로 이어지는 과정이 상담의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "무의식을 의식화하는 과정으로서의 통찰 강조"
      },
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담과정에서 통찰의 역할과 유형을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기이해",
        "name_en": "Self-Understanding",
        "id": "FOUND_SU_018"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PSYCHOD_IT_008"
      },
      {
        "name_ko": "알아차림",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "FOUND_CP_014"
      }
    ],
    "sub_types": [
      {
        "name": "지적 통찰",
        "description": "인지적 수준에서의 이해 (정보적)"
      },
      {
        "name": "정서적 통찰",
        "description": "감정을 동반한 깊은 수준의 이해 (변화적)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "통찰 = 아하! 새로운 자기 인식",
      "differential": "지적 통찰은 머리로만 아는 것, 정서적 통찰은 가슴으로 느끼며 아는 것",
      "key_point": "정서적 통찰이 진정한 변화를 이끄는 핵심이며, 지적 통찰만으로는 부족하다",
      "common_mistake": "통찰이 즉각적인 행동 변화를 보장하지는 않으며, 통찰 후 실행 단계가 필요하다"
    }
  },
  {
    "id": "FOUND_SU_018",
    "terminology": "자기이해 (Self-Understanding)",
    "terminology_ko": "자기이해",
    "terminology_en": "Self-Understanding",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "자신의 감정, 욕구, 동기, 행동 패턴, 대인관계 양식 등에 대해 깊이 있게 파악하는 것으로, 상담의 보편적 목표 중 하나이다.",
    "definition_en": "A deep understanding of one's emotions, needs, motivations, behavioral patterns, and interpersonal styles, serving as a universal goal across counseling approaches.",
    "significance": "모든 상담 접근에서 추구하는 기본 목표로, 자기이해가 선행되어야 의미 있는 변화가 가능하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "자기 경험에 대한 개방적 이해를 통한 성장 강조"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "자기이해를 실존적 자각과 연결하여 치료적 의미 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      },
      {
        "name_ko": "알아차림",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "자기탐색",
        "name_en": "Self-Exploration",
        "id": "FOUND_SE_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기이해 = 나 자신을 아는 것 → 변화의 출발",
      "differential": "통찰은 순간적 깨달음, 자기이해는 지속적이고 포괄적인 자기 인식",
      "key_point": "상담의 보편적 목표이며, 감정·욕구·동기·행동패턴·대인관계 양식을 포괄",
      "common_mistake": "자기이해를 자기비판과 혼동하나, 비판단적 수용 속에서 이루어져야 한다"
    }
  },
  {
    "id": "FOUND_SE_019",
    "terminology": "자기탐색 (Self-Exploration)",
    "terminology_ko": "자기탐색",
    "terminology_en": "Self-Exploration",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자가 자신의 내면세계를 능동적으로 탐구하는 과정으로, 감정, 사고, 가치관, 경험 등을 깊이 있게 살펴보는 상담 활동이다.",
    "definition_en": "An active process in which the client explores their inner world, examining emotions, thoughts, values, and experiences in depth during counseling.",
    "significance": "상담 초기부터 중기에 걸쳐 이루어지는 핵심 활동으로, 자기이해와 통찰의 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담과정의 탐색 단계를 체계화하고 자기탐색 촉진 기술 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기이해",
        "name_en": "Self-Understanding",
        "id": "FOUND_SU_018"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      },
      {
        "name_ko": "경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_002"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기탐색 = 내면세계의 능동적 탐구",
      "differential": "자기탐색은 과정(탐구 활동), 자기이해는 결과(깊은 인식 상태)",
      "key_point": "내담자의 능동적 참여가 핵심이며, 상담자는 이를 촉진하는 역할",
      "common_mistake": "상담자가 주도적으로 분석해주는 것이 아니라 내담자의 자발적 탐색이 중요하다"
    }
  },
  {
    "id": "FOUND_CT_020",
    "terminology": "카타르시스 (Catharsis)",
    "terminology_ko": "카타르시스",
    "terminology_en": "Catharsis",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "억압되었거나 억눌린 감정을 언어적·비언어적으로 표현하고 방출함으로써 심리적 정화와 안도감을 경험하는 치료적 현상이다.",
    "definition_en": "A therapeutic phenomenon in which suppressed emotions are expressed and released verbally or nonverbally, resulting in psychological purification and relief.",
    "significance": "정서적 해소 경험은 그 자체로 치료적이며, 더 깊은 탐색과 통찰을 위한 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "요제프 브로이어",
        "name_en": "Josef Breuer",
        "contribution": "히스테리 환자의 감정 정화(카타르시스)를 통한 치료 발견"
      },
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "브로이어와 함께 카타르시스 방법을 초기 정신분석에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      },
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_002"
      },
      {
        "name_ko": "자기탐색",
        "name_en": "Self-Exploration",
        "id": "FOUND_SE_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "카타르시스 = 감정의 정화와 방출 → 안도감",
      "differential": "카타르시스는 감정의 방출 경험, 통찰은 인지적 이해 경험",
      "key_point": "Breuer와 Freud가 히스테리 치료에서 발견한 감정 정화 현상",
      "common_mistake": "카타르시스만으로 충분한 치료가 되지 않으며, 통찰과 행동 변화가 뒤따라야 한다"
    }
  },
  {
    "id": "FOUND_EM_021",
    "terminology": "공감 (Empathy)",
    "terminology_ko": "공감",
    "terminology_en": "Empathy",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 내담자의 내적 준거 틀에 들어가 그의 감정과 경험을 마치 자신의 것처럼 이해하되, '마치 ~인 것처럼(as if)'의 조건을 잃지 않는 것이다.",
    "definition_en": "The counselor's ability to enter the client's internal frame of reference and understand their feelings and experiences as if they were one's own, while maintaining the 'as if' condition.",
    "significance": "Rogers가 제시한 상담의 핵심 조건 중 하나로, 모든 이론에서 인정하는 가장 중요한 상담자 자질이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "공감적 이해를 상담의 필요충분조건 중 하나로 제시"
      },
      {
        "name_ko": "하인츠 코헛",
        "name_en": "Heinz Kohut",
        "contribution": "자기심리학에서 공감을 치료의 핵심 도구로 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EM_003"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "치료적 태도",
        "name_en": "Therapeutic Attitude",
        "id": "FOUND_TA_005"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RF_003"
      }
    ],
    "sub_types": [
      {
        "name": "일차적 공감",
        "description": "내담자가 표현한 감정과 의미를 반영하는 기본 공감"
      },
      {
        "name": "심화 공감",
        "description": "내담자가 아직 자각하지 못한 감정이나 의미까지 전달하는 공감"
      }
    ],
    "quiz_hints": {
      "mnemonic": "공감 = 'as if' (마치 ~인 것처럼) 조건 유지하며 이해",
      "differential": "동정(sympathy)은 감정의 동일시, 공감(empathy)은 이해하되 구별을 유지",
      "key_point": "Rogers의 'as if' 조건이 핵심: 내담자의 경험을 이해하되 자기를 잃지 않는 것",
      "common_mistake": "공감을 동의나 동정과 혼동하나, 공감은 내담자의 관점에서 이해하는 것이다"
    }
  },
  {
    "id": "FOUND_GN_022",
    "terminology": "진정성 (Genuineness)",
    "terminology_ko": "진정성",
    "terminology_en": "Genuineness",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 전문적 가면 뒤에 숨지 않고 자신의 감정과 태도를 솔직하고 투명하게 표현하는 것으로, Rogers의 일치성(congruence)과 동의어로 사용된다.",
    "definition_en": "The counselor's honest and transparent expression of feelings and attitudes without hiding behind a professional facade, used synonymously with Rogers' concept of congruence.",
    "significance": "상담자의 진정성은 내담자의 신뢰를 형성하고 상담관계의 깊이를 결정하는 핵심 조건이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "일치성(congruence)을 상담의 필요충분조건 중 가장 기본적인 것으로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      },
      {
        "name_ko": "치료적 태도",
        "name_en": "Therapeutic Attitude",
        "id": "FOUND_TA_005"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "진정성 = 가면 벗기 = 일치성(congruence)",
      "differential": "진정성은 상담자의 존재 방식, 자기개방은 진정성을 표현하는 구체적 기법",
      "key_point": "Rogers는 일치성을 3가지 핵심 조건 중 가장 기본적인 것으로 보았다",
      "common_mistake": "진정성을 모든 감정을 여과 없이 표현하는 것으로 오해하나, 치료적 판단 하에 선택적으로 표현"
    }
  },
  {
    "id": "FOUND_SD_023",
    "terminology": "자기개방 (Self-Disclosure)",
    "terminology_ko": "자기개방",
    "terminology_en": "Self-Disclosure",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 자신의 개인적 경험, 감정, 반응 등을 내담자에게 의도적으로 공유하는 상담 기법으로, 내담자의 자기개방을 촉진하고 관계를 강화할 수 있다.",
    "definition_en": "A counseling technique in which the counselor intentionally shares personal experiences, feelings, or reactions with the client to facilitate client self-disclosure and strengthen the relationship.",
    "significance": "적절한 자기개방은 상담관계를 깊게 하고 내담자에게 모델을 제공하나, 부적절한 사용은 역치료적 효과를 낳는다.",
    "key_researchers": [
      {
        "name_ko": "시드니 주라드",
        "name_en": "Sidney Jourard",
        "contribution": "자기개방의 상호성(dyadic effect)을 연구하여 치료적 자기개방의 근거 마련"
      },
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담자 자기개방의 유형과 효과를 실증적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "진정성",
        "name_en": "Genuineness",
        "id": "FOUND_GN_022"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_001"
      }
    ],
    "sub_types": [
      {
        "name": "자기관여적 진술",
        "description": "상담 과정에서 내담자에 대한 상담자의 즉각적 반응 공유"
      },
      {
        "name": "자기개방적 진술",
        "description": "상담자의 과거 경험이나 유사 경험 공유"
      }
    ],
    "quiz_hints": {
      "mnemonic": "자기개방 = 상담자의 의도적 자기 공유 → 관계 강화",
      "differential": "자기관여적 진술은 '지금-여기' 반응, 자기개방적 진술은 과거 경험 공유",
      "key_point": "치료적 목적이 분명할 때만 사용하며, 내담자에게 초점이 유지되어야 한다",
      "common_mistake": "상담자의 자기개방이 내담자의 시간을 뺏거나 주제를 벗어나게 해서는 안 된다"
    }
  },
  {
    "id": "FOUND_CF_024",
    "terminology": "직면 (Confrontation)",
    "terminology_ko": "직면",
    "terminology_en": "Confrontation",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자가 인식하지 못하거나 회피하는 모순, 불일치, 왜곡을 상담자가 지적하여 자각을 촉진하는 상담 기법이다.",
    "definition_en": "A counseling technique in which the counselor points out contradictions, discrepancies, or distortions that the client is unaware of or avoiding to promote awareness.",
    "significance": "상담의 중기 이후에 특히 유용하며, 충분한 라포가 형성된 후에 사용해야 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 이건",
        "name_en": "Gerard Egan",
        "contribution": "직면을 도전(challenging)으로 재개념화하고 숙련된 조력 모형에 포함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "직면 = 모순·불일치·왜곡을 지적 → 자각 촉진",
      "differential": "직면은 불일치를 지적, 해석은 무의식적 의미를 설명하는 것",
      "key_point": "충분한 라포 형성 후에만 효과적이며, 공격이 아닌 돌봄에서 출발해야 한다",
      "common_mistake": "직면을 공격이나 비난으로 오해하나, 내담자의 성장을 위한 돌봄의 표현이다"
    }
  },
  {
    "id": "FOUND_EB_025",
    "terminology": "근거기반실제 (Evidence-Based Practice)",
    "terminology_ko": "근거기반실제",
    "terminology_en": "Evidence-Based Practice",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "최선의 연구 근거, 임상 전문성, 내담자 특성과 선호를 통합하여 상담 의사결정을 내리는 접근으로, 현대 상담의 핵심 패러다임이다.",
    "definition_en": "An approach to counseling decision-making that integrates the best available research evidence, clinical expertise, and client characteristics and preferences, a core paradigm of modern counseling.",
    "significance": "상담의 과학적 기반을 강화하고 상담자의 책무성을 높이는 현대 상담학의 핵심 원리이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 새킷",
        "name_en": "David Sackett",
        "contribution": "의학에서 근거기반의학(EBM) 개념을 확립, 이후 상담에 적용됨"
      },
      {
        "name_ko": "브루스 왐폴드",
        "name_en": "Bruce Wampold",
        "contribution": "상담 효과 연구를 통해 근거기반실제의 새로운 패러다임 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공통요인",
        "name_en": "Common Factors",
        "id": "FOUND_CMF_010"
      },
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      },
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "EBP 3요소: 연구근거 + 임상전문성 + 내담자특성",
      "differential": "경험적으로 지지된 치료(EST)는 특정 기법의 효과에 초점, EBP는 3요소의 통합적 의사결정",
      "key_point": "연구 근거, 임상 전문성, 내담자 특성/선호의 3가지를 통합하는 의사결정",
      "common_mistake": "EBP를 매뉴얼화된 치료만 사용하는 것으로 오해하나, 임상 전문성과 내담자 요인도 동등하게 중요"
    }
  },
  {
    "id": "FOUND_MC_026",
    "terminology": "다문화 상담 (Multicultural Counseling)",
    "terminology_ko": "다문화 상담",
    "terminology_en": "Multicultural Counseling",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "내담자의 문화적 배경(인종, 민족, 성별, 성적지향, 종교, 사회경제적 지위 등)을 상담 과정에서 핵심적으로 고려하는 접근으로, 상담의 '제4세력'으로 불린다.",
    "definition_en": "An approach that centrally considers the client's cultural background (race, ethnicity, gender, sexual orientation, religion, socioeconomic status) in counseling, called the 'fourth force' in counseling.",
    "significance": "모든 상담이 문화적 맥락에서 이루어진다는 인식을 확산시키며, 상담의 보편성과 문화적 특수성의 균형을 추구한다.",
    "key_researchers": [
      {
        "name_ko": "데럴드 윙 수",
        "name_en": "Derald Wing Sue",
        "contribution": "다문화상담역량 모형(인식, 지식, 기술) 개발"
      },
      {
        "name_ko": "폴 페더슨",
        "name_en": "Paul Pedersen",
        "contribution": "다문화상담을 상담의 제4세력으로 명명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_002"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "FOUND_EM_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "다문화상담 = 상담의 제4세력 (1정신분석, 2행동, 3인본주의 이후)",
      "differential": "문화적 감수성은 태도, 다문화상담역량은 인식·지식·기술을 포괄하는 체계적 능력",
      "key_point": "Sue의 다문화상담역량 3요소: 인식(awareness), 지식(knowledge), 기술(skills)",
      "common_mistake": "다문화를 인종/민족에만 한정하나, 성별, 성적지향, 종교, SES 등 모든 문화적 차원을 포함"
    }
  },
  {
    "id": "FOUND_ET_027",
    "terminology": "상담윤리 (Counseling Ethics)",
    "terminology_ko": "상담윤리",
    "terminology_en": "Counseling Ethics",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 전문적 활동에서 준수해야 할 도덕적 원칙과 행동 기준으로, 자율성 존중, 선행, 무해, 정의, 충실의 5대 원칙을 포함한다.",
    "definition_en": "Moral principles and behavioral standards that counselors must follow in professional practice, including the five principles of autonomy, beneficence, nonmaleficence, justice, and fidelity.",
    "significance": "내담자 보호와 전문직 신뢰 유지의 기반으로, 상담자의 모든 전문적 활동을 안내하는 기본 틀이다.",
    "key_researchers": [
      {
        "name_ko": "키치너",
        "name_en": "Karen Kitchener",
        "contribution": "상담윤리의 5대 도덕 원칙(자율성, 선행, 무해, 정의, 충실) 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_001"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_002"
      },
      {
        "name_ko": "이중관계",
        "name_en": "Dual Relationship",
        "id": "FOUND_DR_028"
      }
    ],
    "sub_types": [
      {
        "name": "자율성(Autonomy)",
        "description": "내담자의 자기결정권 존중"
      },
      {
        "name": "선행(Beneficence)",
        "description": "내담자의 복지 증진을 위해 행동"
      },
      {
        "name": "무해(Nonmaleficence)",
        "description": "내담자에게 해를 끼치지 않음"
      },
      {
        "name": "정의(Justice)",
        "description": "공정하고 평등한 대우"
      },
      {
        "name": "충실(Fidelity)",
        "description": "신뢰와 약속 준수"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상담윤리 5원칙: 자-선-무-정-충 (자율성, 선행, 무해, 정의, 충실)",
      "differential": "윤리 원칙은 추상적 지침, 윤리 강령은 구체적 행동 규범",
      "key_point": "Kitchener의 5대 원칙: 자율성, 선행, 무해, 정의, 충실",
      "common_mistake": "윤리 원칙 간 충돌 시(예: 비밀보장 vs 해 방지) 어떤 원칙이 우선하는지 판단이 필요하다"
    }
  },
  {
    "id": "FOUND_DR_028",
    "terminology": "이중관계 (Dual Relationship)",
    "terminology_ko": "이중관계",
    "terminology_en": "Dual Relationship",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 내담자와 상담관계 외에 다른 관계(친구, 사업, 연인 등)를 동시에 맺는 것으로, 착취 가능성 때문에 윤리적으로 금지되거나 주의가 필요한 관계이다.",
    "definition_en": "A situation where the counselor simultaneously holds another relationship (friend, business, romantic, etc.) with the client beyond the counseling relationship, ethically prohibited or requiring caution due to exploitation potential.",
    "significance": "상담 윤리의 핵심 쟁점으로, 내담자 착취 방지와 전문적 경계 유지에 관한 기본 원칙이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "이중관계의 윤리적 쟁점을 체계적으로 정리하고 교육에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "FOUND_ET_027"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_002"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이중관계 = 상담관계 + 다른 관계 = 윤리적 위반 위험",
      "differential": "이중관계는 동시에 두 관계를 맺는 것, 경계 위반은 관계 범위를 넘는 부적절한 행동",
      "key_point": "상담관계 외 다른 관계를 동시에 맺는 것으로, 착취 가능성 때문에 금지/주의가 필요",
      "common_mistake": "모든 이중관계가 동일하게 해로운 것은 아니며, 농촌 등 소규모 공동체에서는 불가피할 수 있다"
    }
  },
  {
    "id": "FOUND_PD_029",
    "terminology": "상담자 발달 (Counselor Development)",
    "terminology_ko": "상담자 발달",
    "terminology_en": "Counselor Development",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담자가 초보에서 숙련 단계로 성장해가는 과정으로, 이론적 지식, 기술적 역량, 자기인식, 전문적 정체성이 점진적으로 발달한다.",
    "definition_en": "The process by which counselors grow from novice to expert levels, progressively developing theoretical knowledge, technical competence, self-awareness, and professional identity.",
    "significance": "상담 교육과 수퍼비전의 이론적 기초를 제공하며, 발달 수준에 맞는 교육과 지원의 중요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "칼 스톨텐버그",
        "name_en": "Cal Stoltenberg",
        "contribution": "통합발달모형(IDM)을 제시하여 상담자 발달 3수준 체계화"
      },
      {
        "name_ko": "마이클 로니스탓",
        "name_en": "Michael Ronnestad",
        "contribution": "상담자 발달의 장기적 과정에 대한 질적 연구 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "FOUND_SV_030"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "FOUND_ET_027"
      },
      {
        "name_ko": "자기이해",
        "name_en": "Self-Understanding",
        "id": "FOUND_SU_018"
      }
    ],
    "sub_types": [
      {
        "name": "수준 1 (초보)",
        "description": "의존적, 불안 높음, 자기 초점적, 모방적 기법 사용"
      },
      {
        "name": "수준 2 (중급)",
        "description": "의존-자율 갈등, 혼란, 내담자에 과몰입"
      },
      {
        "name": "수준 3 (숙련)",
        "description": "자율적, 통합적, 유연한 기법 사용, 안정된 전문적 정체성"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Stoltenberg IDM 3수준: 초보(의존)-중급(갈등)-숙련(자율)",
      "differential": "상담자 발달은 전체적 성장 과정, 수퍼비전은 그 성장을 돕는 교육적 관계",
      "key_point": "Stoltenberg의 IDM: 동기, 자율성, 자기·타인 인식의 3차원에서 3수준 발달",
      "common_mistake": "발달 수준은 경력 연수와 반드시 일치하지 않으며, 개인차가 크다"
    }
  },
  {
    "id": "FOUND_SV_030",
    "terminology": "수퍼비전 (Supervision)",
    "terminology_ko": "수퍼비전",
    "terminology_en": "Supervision",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "경험 있는 전문 상담자가 수련 중인 상담자에게 상담 사례에 대한 지도, 피드백, 지지를 제공하는 교육적·평가적 과정이다.",
    "definition_en": "An educational and evaluative process in which an experienced professional counselor provides guidance, feedback, and support regarding counseling cases to a trainee counselor.",
    "significance": "상담자 발달의 핵심 기제이며, 내담자 복지를 보호하는 문지기(gatekeeping) 역할을 수행한다.",
    "key_researchers": [
      {
        "name_ko": "버나드",
        "name_en": "Janine Bernard",
        "contribution": "변별 모형(discrimination model): 교사·상담자·자문가 역할을 상황에 따라 전환"
      },
      {
        "name_ko": "칼 스톨텐버그",
        "name_en": "Cal Stoltenberg",
        "contribution": "IDM 기반 발달적 수퍼비전 모형 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담자 발달",
        "name_en": "Counselor Development",
        "id": "FOUND_PD_029"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "FOUND_ET_027"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "FOUND_WA_004"
      }
    ],
    "sub_types": [
      {
        "name": "개인 수퍼비전",
        "description": "수퍼바이저와 수퍼바이지의 1:1 지도"
      },
      {
        "name": "집단 수퍼비전",
        "description": "여러 수퍼바이지가 함께 참여하는 지도"
      },
      {
        "name": "동료 수퍼비전",
        "description": "비슷한 경력의 상담자 간 상호 피드백"
      }
    ],
    "quiz_hints": {
      "mnemonic": "수퍼비전의 3기능: 교육(normative) + 지지(restorative) + 관리(formative)",
      "differential": "수퍼비전은 교육적·평가적 관계, 상담은 치료적 관계라는 점에서 구분",
      "key_point": "Bernard의 변별모형: 수퍼바이저가 교사·상담자·자문가 역할을 상황에 따라 전환",
      "common_mistake": "수퍼비전을 상담과 혼동하나, 수퍼비전의 일차적 목적은 내담자 복지 보호이다"
    }
  },
  {
    "id": "FOUND_HF_031",
    "terminology": "상담의 4대 세력 (Four Forces of Counseling)",
    "terminology_ko": "상담의 4대 세력",
    "terminology_en": "Four Forces of Counseling",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "상담심리학의 역사적 발전을 4가지 주요 흐름으로 정리한 것으로, 제1세력 정신분석, 제2세력 행동주의, 제3세력 인본주의, 제4세력 다문화상담으로 구분된다.",
    "definition_en": "A historical framework organizing the development of counseling psychology into four major movements: psychoanalysis (1st), behaviorism (2nd), humanism (3rd), and multicultural counseling (4th).",
    "significance": "상담 이론의 역사적 발전 맥락을 이해하는 기본 틀로, 각 세력이 등장한 시대적 배경과 기여를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "인본주의 심리학을 '제3세력'으로 명명"
      },
      {
        "name_ko": "폴 페더슨",
        "name_en": "Paul Pedersen",
        "contribution": "다문화상담을 '제4세력'으로 명명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "정신역동 상담",
        "name_en": "Psychodynamic Therapy",
        "id": "PSYCHOD_PD_001"
      },
      {
        "name_ko": "다문화 상담",
        "name_en": "Multicultural Counseling",
        "id": "FOUND_MC_026"
      },
      {
        "name_ko": "행동주의 상담",
        "name_en": "Behavior Therapy",
        "id": "BEHAV_BT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "4대 세력: 정(1)-행(2)-인(3)-다(4) (정신분석-행동-인본-다문화)",
      "differential": "제3세력(인본주의)은 인간의 성장과 잠재력 강조, 제4세력(다문화)은 문화적 맥락 강조",
      "key_point": "1정신분석 → 2행동주의 → 3인본주의 → 4다문화상담의 역사적 흐름",
      "common_mistake": "제4세력을 포스트모던이나 신경과학으로 오해하나, 다문화상담이 공식적인 제4세력이다"
    }
  },
  {
    "id": "FOUND_WT_032",
    "terminology": "변화 단계 모형 (Stages of Change Model)",
    "terminology_ko": "변화 단계 모형",
    "terminology_en": "Stages of Change Model",
    "category": "FOUND",
    "category_name": "상담의 기초 (Foundations of Counseling)",
    "definition": "Prochaska와 DiClemente가 제안한 범이론적 변화 모형으로, 전숙고-숙고-준비-실행-유지의 5단계를 통해 인간의 행동 변화 과정을 설명한다.",
    "definition_en": "A transtheoretical model of change proposed by Prochaska and DiClemente, explaining the process of behavioral change through five stages: precontemplation, contemplation, preparation, action, and maintenance.",
    "significance": "내담자의 변화 준비도에 맞춘 개입을 가능하게 하여, 범이론적 접근의 대표적 모형이다.",
    "key_researchers": [
      {
        "name_ko": "제임스 프로차스카",
        "name_en": "James Prochaska",
        "contribution": "변화 단계 모형(범이론적 모형) 개발"
      },
      {
        "name_ko": "카를로 디클레멘테",
        "name_en": "Carlo DiClemente",
        "contribution": "Prochaska와 함께 변화 단계 모형 공동 개발 및 중독 분야 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통합적 접근",
        "name_en": "Integrative Approach",
        "id": "FOUND_IA_011"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      },
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "FOUND_CP_014"
      }
    ],
    "sub_types": [
      {
        "name": "전숙고 단계",
        "description": "문제를 인식하지 못하거나 변화 의지가 없는 단계"
      },
      {
        "name": "숙고 단계",
        "description": "문제를 인식하나 양가감정이 있는 단계"
      },
      {
        "name": "준비 단계",
        "description": "변화를 위한 구체적 계획을 세우는 단계"
      },
      {
        "name": "실행 단계",
        "description": "실제 행동 변화를 시도하는 단계"
      },
      {
        "name": "유지 단계",
        "description": "변화를 지속하고 재발을 방지하는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "변화 5단계: 전-숙-준-실-유 (전숙고, 숙고, 준비, 실행, 유지)",
      "differential": "전숙고는 문제 비인식, 숙고는 양가감정, 준비는 계획 수립 단계",
      "key_point": "Prochaska & DiClemente의 5단계: 전숙고-숙고-준비-실행-유지",
      "common_mistake": "변화가 반드시 순차적으로 진행되지 않으며, 퇴행과 순환이 정상적이다"
    }
  }
];

TERMS_DATA.PSYCHOD = [
  {
    "id": "PSYCHOD_PD_001",
    "terminology": "정신역동 상담 (Psychodynamic Therapy)",
    "terminology_ko": "정신역동 상담",
    "terminology_en": "Psychodynamic Therapy",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "무의식적 갈등과 초기 경험이 현재 행동에 미치는 영향을 탐색하여 통찰과 성격 변화를 추구하는 상담 접근의 총칭이다.",
    "definition_en": "An umbrella term for counseling approaches that explore the influence of unconscious conflicts and early experiences on current behavior, seeking insight and personality change.",
    "significance": "상담의 제1세력으로 현대 상담이론의 출발점이며, 무의식 개념을 상담에 도입한 최초의 체계적 접근이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석의 창시자로 무의식, 자유연상, 꿈 분석 등 핵심 개념과 기법 개발"
      },
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "분석심리학 창시, 집단무의식과 원형 개념 제시"
      },
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "개인심리학 창시, 열등감과 사회적 관심 개념 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "상담이론",
        "name_en": "Counseling Theory",
        "id": "FOUND_CT_006"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      }
    ],
    "sub_types": [
      {
        "name": "고전적 정신분석",
        "description": "Freud의 원래 이론과 기법 체계"
      },
      {
        "name": "개인심리학",
        "description": "Adler의 사회적 관심과 열등감 중심 접근"
      },
      {
        "name": "분석심리학",
        "description": "Jung의 집단무의식과 개성화 중심 접근"
      },
      {
        "name": "대상관계이론",
        "description": "초기 대상관계가 성격 형성에 미치는 영향 강조"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정신역동 = 무의식 + 초기경험 → 현재행동",
      "differential": "인본주의는 의식적 경험과 성장을 강조하나, 정신역동은 무의식적 갈등을 강조",
      "key_point": "무의식적 갈등과 초기 경험이 현재 행동에 미치는 영향을 탐색하는 것이 핵심",
      "common_mistake": "정신역동을 Freud의 정신분석에만 한정하나, Adler, Jung, 대상관계이론 등을 모두 포함하는 넓은 개념이다"
    }
  },
  {
    "id": "PSYCHOD_UC_002",
    "terminology": "무의식 (Unconscious)",
    "terminology_ko": "무의식",
    "terminology_en": "Unconscious",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "의식의 표면 아래에 존재하는 억압된 기억, 욕구, 충동의 영역으로, Freud에 따르면 인간 행동의 대부분을 결정하는 정신의 가장 큰 부분이다.",
    "definition_en": "The realm of repressed memories, desires, and impulses existing beneath conscious awareness, which according to Freud constitutes the largest part of the psyche determining most human behavior.",
    "significance": "Freud가 발견한 무의식 개념은 인간 이해의 혁명적 전환을 가져왔으며, 정신역동 상담의 핵심 전제이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "의식-전의식-무의식의 지형학적 모형을 통해 무의식 개념 체계화"
      },
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "개인무의식 너머 집단무의식의 존재를 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신역동 상담",
        "name_en": "Psychodynamic Therapy",
        "id": "PSYCHOD_PD_001"
      },
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "id": "PSYCHOD_CU_028"
      }
    ],
    "sub_types": [
      {
        "name": "의식",
        "description": "현재 자각하고 있는 정신 내용"
      },
      {
        "name": "전의식",
        "description": "주의를 기울이면 의식할 수 있는 내용"
      },
      {
        "name": "무의식",
        "description": "억압되어 쉽게 의식화할 수 없는 내용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "빙산의 비유: 수면 위(의식) < 수면 바로 아래(전의식) < 깊은 물속(무의식)",
      "differential": "전의식은 노력하면 의식화 가능, 무의식은 억압되어 쉽게 접근 불가",
      "key_point": "Freud의 지형학적 모형에서 무의식은 정신의 가장 큰 부분이며 행동의 주된 결정 요인",
      "common_mistake": "무의식을 단순히 '모르는 것'으로 오해하나, 능동적으로 억압된 내용을 포함한다"
    }
  },
  {
    "id": "PSYCHOD_PS_003",
    "terminology": "성격구조: 원초아, 자아, 초자아 (Personality Structure: Id, Ego, Superego)",
    "terminology_ko": "성격구조: 원초아, 자아, 초자아",
    "terminology_en": "Personality Structure: Id, Ego, Superego",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Freud의 구조적 모형으로, 원초아(쾌락원리), 자아(현실원리), 초자아(도덕원리)의 세 구조가 상호작용하여 성격을 형성한다.",
    "definition_en": "Freud's structural model in which three structures—id (pleasure principle), ego (reality principle), and superego (morality principle)—interact to form personality.",
    "significance": "인간 내면의 갈등을 체계적으로 설명하는 틀로, 심리적 증상을 세 구조 간 갈등으로 이해할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "1923년 구조적 모형(원초아-자아-초자아)을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PSYCHOD_AX_004"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "심리성적 발달",
        "name_en": "Psychosexual Development",
        "id": "PSYCHOD_PSD_007"
      }
    ],
    "sub_types": [
      {
        "name": "원초아(Id)",
        "description": "본능적 욕구와 충동의 저장소, 쾌락원리에 따라 즉각적 만족 추구"
      },
      {
        "name": "자아(Ego)",
        "description": "현실원리에 따라 원초아와 초자아를 중재하는 합리적 구조"
      },
      {
        "name": "초자아(Superego)",
        "description": "내면화된 도덕 기준과 양심, 자아이상을 포함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "원(쾌락)-자(현실)-초(도덕): 원초아는 원하고, 자아는 조절하고, 초자아는 판단한다",
      "differential": "원초아는 쾌락원리, 자아는 현실원리, 초자아는 도덕원리에 따라 작동",
      "key_point": "자아가 원초아와 초자아 사이를 중재하며, 이 갈등이 심리적 증상의 원인이 될 수 있다",
      "common_mistake": "초자아를 단순히 양심으로만 이해하나, 자아이상(ego ideal)도 포함한다"
    }
  },
  {
    "id": "PSYCHOD_AX_004",
    "terminology": "불안 (Anxiety)",
    "terminology_ko": "불안",
    "terminology_en": "Anxiety",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Freud의 이론에서 자아가 위협에 직면할 때 경험하는 불쾌한 정서 상태로, 현실적 불안, 신경증적 불안, 도덕적 불안의 3가지 유형이 있다.",
    "definition_en": "In Freud's theory, an unpleasant emotional state experienced when the ego faces threat, classified into three types: realistic anxiety, neurotic anxiety, and moral anxiety.",
    "significance": "방어기제 작동의 신호 역할을 하며, 정신역동적 관점에서 심리적 증상 형성의 핵심 기제이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "불안의 3유형(현실적, 신경증적, 도덕적)을 구분하고 방어기제와의 관계 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      }
    ],
    "sub_types": [
      {
        "name": "현실적 불안",
        "description": "외부 세계의 실제 위험에 대한 반응"
      },
      {
        "name": "신경증적 불안",
        "description": "원초아의 충동이 의식에 침입할 것에 대한 두려움"
      },
      {
        "name": "도덕적 불안",
        "description": "초자아의 도덕적 기준을 위반한 것에 대한 죄책감"
      }
    ],
    "quiz_hints": {
      "mnemonic": "불안 3유형: 현(외부위협)-신(원초아)-도(초자아)",
      "differential": "현실적 불안은 외부 위협, 신경증적 불안은 내적 충동, 도덕적 불안은 양심 관련",
      "key_point": "불안은 자아에 대한 위협 신호이며, 방어기제를 발동시키는 기제",
      "common_mistake": "신경증적 불안을 현실적 불안과 혼동하나, 신경증적 불안은 내적 충동에 대한 두려움이다"
    }
  },
  {
    "id": "PSYCHOD_TF_005",
    "terminology": "전이 (Transference)",
    "terminology_ko": "전이",
    "terminology_en": "Transference",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "내담자가 과거 중요한 인물(주로 부모)에게 느꼈던 감정, 태도, 기대를 상담자에게 무의식적으로 투사하는 현상으로, 정신분석 치료의 핵심 기제이다.",
    "definition_en": "The phenomenon in which the client unconsciously projects feelings, attitudes, and expectations originally directed toward significant past figures (usually parents) onto the counselor, a core mechanism of psychoanalytic treatment.",
    "significance": "전이 분석은 내담자의 무의식적 관계 패턴을 이해하고 수정하는 핵심 치료 도구이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "전이 개념을 발견하고 치료적 도구로 활용"
      },
      {
        "name_ko": "하인츠 코헛",
        "name_en": "Heinz Kohut",
        "contribution": "자기대상 전이(이상화, 거울, 쌍둥이 전이) 개념 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "PSYCHOD_CTF_009"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PSYCHOD_IT_008"
      },
      {
        "name_ko": "대상관계",
        "name_en": "Object Relations",
        "id": "PSYCHOD_OR_023"
      }
    ],
    "sub_types": [
      {
        "name": "긍정적 전이",
        "description": "상담자에게 사랑, 존경 등 긍정적 감정을 투사"
      },
      {
        "name": "부정적 전이",
        "description": "상담자에게 분노, 적대감 등 부정적 감정을 투사"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전이 = 과거 인물에 대한 감정을 상담자에게 투사",
      "differential": "전이는 내담자→상담자, 역전이는 상담자→내담자 방향의 무의식적 반응",
      "key_point": "과거 중요 인물에 대한 감정을 상담자에게 무의식적으로 투사하는 것",
      "common_mistake": "전이를 단순한 호감/비호감으로 보나, 과거 관계 패턴의 무의식적 반복이다"
    }
  },
  {
    "id": "PSYCHOD_DM_006",
    "terminology": "방어기제 (Defense Mechanisms)",
    "terminology_ko": "방어기제",
    "terminology_en": "Defense Mechanisms",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "자아가 불안으로부터 자신을 보호하기 위해 무의식적으로 사용하는 심리적 전략으로, 현실을 왜곡하거나 부정하는 방식으로 작동한다.",
    "definition_en": "Unconscious psychological strategies used by the ego to protect itself from anxiety, operating by distorting or denying reality.",
    "significance": "내담자의 심리적 기능 수준을 평가하는 핵심 지표이며, 방어기제의 이해는 사례개념화의 중요한 요소이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "억압을 비롯한 주요 방어기제 개념 도입"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "방어기제를 체계적으로 분류하고 정리 (《자아와 방어기제》, 1936)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PSYCHOD_AX_004"
      },
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      },
      {
        "name_ko": "억압",
        "name_en": "Repression",
        "id": "PSYCHOD_RP_010"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      }
    ],
    "sub_types": [
      {
        "name": "원시적 방어",
        "description": "분열, 투사적 동일시, 부정 등 (경계선 수준)"
      },
      {
        "name": "신경증적 방어",
        "description": "억압, 반동형성, 전치, 합리화 등"
      },
      {
        "name": "성숙한 방어",
        "description": "승화, 유머, 이타주의 등"
      }
    ],
    "quiz_hints": {
      "mnemonic": "방어기제 = 자아의 불안 방패, Anna Freud가 체계화",
      "differential": "원시적 방어는 현실 왜곡이 크고(경계선 수준), 성숙한 방어는 적응적(정상 수준)",
      "key_point": "Anna Freud가 체계화했으며, 자아가 불안으로부터 자신을 보호하는 무의식적 전략",
      "common_mistake": "방어기제를 모두 병리적으로 보나, 승화 등 성숙한 방어는 적응적이고 건강한 기능이다"
    }
  },
  {
    "id": "PSYCHOD_PSD_007",
    "terminology": "심리성적 발달 단계 (Psychosexual Development Stages)",
    "terminology_ko": "심리성적 발달 단계",
    "terminology_en": "Psychosexual Development Stages",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Freud가 제안한 성격 발달 이론으로, 리비도의 집중 부위에 따라 구강기-항문기-남근기-잠복기-생식기의 5단계를 거치며, 각 단계의 고착이 성격 특성을 결정한다.",
    "definition_en": "Freud's personality development theory in which development proceeds through five stages—oral, anal, phallic, latency, genital—based on libido concentration areas, with fixation at each stage determining personality traits.",
    "significance": "초기 경험이 성격 형성에 결정적 영향을 미친다는 정신분석의 핵심 전제를 설명하는 발달 모형이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "심리성적 발달 5단계 이론 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      },
      {
        "name_ko": "오이디푸스 콤플렉스",
        "name_en": "Oedipus Complex",
        "id": "PSYCHOD_OC_011"
      },
      {
        "name_ko": "고착",
        "name_en": "Fixation",
        "id": "PSYCHOD_FX_012"
      }
    ],
    "sub_types": [
      {
        "name": "구강기 (0-1세)",
        "description": "구강 활동을 통한 쾌감, 의존성과 관련"
      },
      {
        "name": "항문기 (1-3세)",
        "description": "배변 훈련과 관련, 통제와 질서감 형성"
      },
      {
        "name": "남근기 (3-6세)",
        "description": "오이디푸스 콤플렉스, 성역할 동일시"
      },
      {
        "name": "잠복기 (6-12세)",
        "description": "성적 에너지가 잠재, 학업과 또래관계에 집중"
      },
      {
        "name": "생식기 (12세~)",
        "description": "성적 에너지가 이성관계로 향함, 성숙한 사랑"
      }
    ],
    "quiz_hints": {
      "mnemonic": "구-항-남-잠-생 (구강기, 항문기, 남근기, 잠복기, 생식기)",
      "differential": "Erikson의 심리사회적 발달은 전 생애 8단계, Freud의 심리성적 발달은 아동기 중심 5단계",
      "key_point": "리비도 집중 부위에 따른 5단계: 구강기-항문기-남근기-잠복기-생식기",
      "common_mistake": "성적(sexual)을 좁은 의미의 성행위로 이해하나, Freud에게 성적 에너지는 삶의 전반적 쾌감을 의미"
    }
  },
  {
    "id": "PSYCHOD_IT_008",
    "terminology": "해석 (Interpretation)",
    "terminology_ko": "해석",
    "terminology_en": "Interpretation",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "내담자의 행동, 감정, 꿈, 자유연상 등에 담긴 무의식적 의미를 상담자가 설명하여 내담자의 통찰을 촉진하는 정신분석의 핵심 기법이다.",
    "definition_en": "A core psychoanalytic technique in which the counselor explains the unconscious meanings embedded in the client's behavior, emotions, dreams, and free associations to facilitate insight.",
    "significance": "정신분석 치료의 가장 중요한 기법으로, 무의식을 의식화하는 핵심 수단이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "해석을 정신분석의 핵심 기법으로 확립"
      },
      {
        "name_ko": "제임스 스트레이치",
        "name_en": "James Strachey",
        "contribution": "전이 해석(mutative interpretation)의 치료적 힘을 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "자유연상",
        "name_en": "Free Association",
        "id": "PSYCHOD_FA_013"
      },
      {
        "name_ko": "꿈 분석",
        "name_en": "Dream Analysis",
        "id": "PSYCHOD_DA_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "해석 = 무의식적 의미를 설명 → 통찰 촉진",
      "differential": "반영은 내담자 감정을 되돌려주는 것, 해석은 무의식적 의미를 설명하는 것",
      "key_point": "정신분석의 핵심 기법으로, 시기적으로 적절하고 내담자가 받아들일 준비가 되었을 때 제공",
      "common_mistake": "성급한 해석은 저항을 증가시키므로, 내담자의 준비도를 고려해야 한다"
    }
  },
  {
    "id": "PSYCHOD_CTF_009",
    "terminology": "역전이 (Countertransference)",
    "terminology_ko": "역전이",
    "terminology_en": "Countertransference",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "상담자가 내담자에 대해 느끼는 무의식적 정서적 반응으로, 상담자 자신의 미해결 갈등이 투사되는 것이며, 현대적으로는 치료적 정보로도 활용된다.",
    "definition_en": "The counselor's unconscious emotional reactions toward the client, projecting the counselor's own unresolved conflicts, now also utilized as therapeutic information in modern practice.",
    "significance": "역전이 인식은 상담자의 자기성찰 역량의 핵심이며, 적절히 활용하면 내담자 이해의 중요한 도구가 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "역전이를 상담의 장애물로 최초 개념화"
      },
      {
        "name_ko": "파울라 하이만",
        "name_en": "Paula Heimann",
        "contribution": "역전이를 내담자 이해의 치료적 도구로 재개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "FOUND_SV_030"
      },
      {
        "name_ko": "투사적 동일시",
        "name_en": "Projective Identification",
        "id": "PSYCHOD_PI_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역전이 = 상담자의 무의식적 반응 (전이의 반대 방향)",
      "differential": "전이는 내담자→상담자, 역전이는 상담자→내담자 방향",
      "key_point": "현대적 관점에서 역전이는 장애물이 아닌 내담자 이해의 중요한 정보원",
      "common_mistake": "역전이를 항상 부정적으로 보나, Heimann 이후 치료적 도구로도 활용한다"
    }
  },
  {
    "id": "PSYCHOD_RP_010",
    "terminology": "억압 (Repression)",
    "terminology_ko": "억압",
    "terminology_en": "Repression",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "위협적이거나 고통스러운 생각, 감정, 기억을 무의식 속으로 밀어내어 의식에서 차단하는 가장 기본적인 방어기제이다.",
    "definition_en": "The most fundamental defense mechanism that pushes threatening or painful thoughts, feelings, and memories into the unconscious, blocking them from conscious awareness.",
    "significance": "Freud가 가장 기본적인 방어기제로 간주했으며, 다른 모든 방어기제의 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "억압을 가장 기본적인 방어기제로 제시하고 신경증의 원인으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "억압 = 고통스러운 내용을 무의식 깊숙이 밀어넣기",
      "differential": "억압은 무의식적(자동적), 억제(suppression)는 의식적(의도적) 차단",
      "key_point": "가장 기본적인 방어기제로, 다른 모든 방어기제의 토대가 된다",
      "common_mistake": "억압(repression)과 억제(suppression)를 혼동하나, 억압은 무의식적, 억제는 의식적 과정이다"
    }
  },
  {
    "id": "PSYCHOD_OC_011",
    "terminology": "오이디푸스 콤플렉스 (Oedipus Complex)",
    "terminology_ko": "오이디푸스 콤플렉스",
    "terminology_en": "Oedipus Complex",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "남근기(3-6세)에 이성 부모에 대한 성적 욕구와 동성 부모에 대한 경쟁심이 나타나는 현상으로, 이 갈등의 해결이 성역할 동일시와 초자아 형성에 결정적이다.",
    "definition_en": "A phenomenon during the phallic stage (ages 3-6) involving sexual desire toward the opposite-sex parent and rivalry with the same-sex parent, whose resolution is critical for gender role identification and superego formation.",
    "significance": "Freud 이론의 핵심 개념으로, 성격 형성과 초자아 발달의 기제를 설명하나, 가장 많은 비판을 받은 개념이기도 하다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "남근기의 핵심 갈등으로 오이디푸스 콤플렉스 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달",
        "name_en": "Psychosexual Development",
        "id": "PSYCHOD_PSD_007"
      },
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      },
      {
        "name_ko": "고착",
        "name_en": "Fixation",
        "id": "PSYCHOD_FX_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "오이디푸스 = 이성 부모 사랑 + 동성 부모 경쟁 → 동일시로 해결",
      "differential": "오이디푸스(남아: 어머니 사랑), 엘렉트라(여아: 아버지 사랑, Jung이 명명)",
      "key_point": "남근기의 핵심 갈등이며, 해결을 통해 초자아 형성과 성역할 동일시가 이루어짐",
      "common_mistake": "엘렉트라 콤플렉스를 Freud가 제안한 것으로 오해하나, 이는 Jung이 명명한 것이다"
    }
  },
  {
    "id": "PSYCHOD_FX_012",
    "terminology": "고착 (Fixation)",
    "terminology_ko": "고착",
    "terminology_en": "Fixation",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "심리성적 발달의 특정 단계에서 과잉충족이나 좌절로 인해 리비도가 고정되어, 해당 단계의 특성이 성인 성격에 지속적으로 나타나는 현상이다.",
    "definition_en": "A phenomenon where libido becomes fixed at a particular psychosexual stage due to overindulgence or frustration, causing characteristics of that stage to persistently manifest in adult personality.",
    "significance": "성인의 성격 특성과 심리적 문제를 발달적 관점에서 이해하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "심리성적 발달 단계의 고착 개념 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리성적 발달",
        "name_en": "Psychosexual Development",
        "id": "PSYCHOD_PSD_007"
      },
      {
        "name_ko": "퇴행",
        "name_en": "Regression",
        "id": "PSYCHOD_RG_015"
      },
      {
        "name_ko": "성격구조",
        "name_en": "Personality Structure",
        "id": "PSYCHOD_PS_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "고착 = 발달 단계에 리비도가 고정 → 성인 성격에 영향",
      "differential": "고착은 특정 단계에 머무는 것, 퇴행은 이전 단계로 되돌아가는 것",
      "key_point": "과잉충족 또는 좌절이 원인이며, 해당 단계의 특성이 성인기에 지속됨",
      "common_mistake": "고착을 단순히 '집착'으로 이해하나, 특정 발달 단계에 리비도가 고정되는 정신분석적 개념이다"
    }
  },
  {
    "id": "PSYCHOD_FA_013",
    "terminology": "자유연상 (Free Association)",
    "terminology_ko": "자유연상",
    "terminology_en": "Free Association",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "내담자가 검열이나 판단 없이 마음에 떠오르는 모든 생각, 감정, 이미지를 자유롭게 말하는 정신분석의 기본 기법으로, 무의식적 내용을 접근하는 통로이다.",
    "definition_en": "A fundamental psychoanalytic technique in which the client freely verbalizes all thoughts, feelings, and images that come to mind without censorship or judgment, serving as a pathway to unconscious content.",
    "significance": "Freud가 최면 대신 도입한 핵심 기법으로, 정신분석의 기본 규칙(fundamental rule)이라 불린다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "최면을 대체하여 자유연상을 정신분석의 기본 기법으로 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PSYCHOD_IT_008"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      },
      {
        "name_ko": "꿈 분석",
        "name_en": "Dream Analysis",
        "id": "PSYCHOD_DA_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자유연상 = 검열 없이 마음에 떠오르는 대로 말하기",
      "differential": "자유연상은 무의식 접근 기법, 꿈 분석은 무의식의 왕도(royal road)",
      "key_point": "정신분석의 기본 규칙(fundamental rule)으로, Freud가 최면 대신 도입",
      "common_mistake": "자유연상이 쉬워 보이지만, 내담자의 저항으로 인해 실제로는 매우 어렵다"
    }
  },
  {
    "id": "PSYCHOD_DA_014",
    "terminology": "꿈 분석 (Dream Analysis)",
    "terminology_ko": "꿈 분석",
    "terminology_en": "Dream Analysis",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "꿈의 현재 내용(manifest content)에서 잠재 내용(latent content)을 분석하여 무의식적 욕구와 갈등을 탐색하는 기법으로, Freud는 꿈을 '무의식으로 가는 왕도'라 하였다.",
    "definition_en": "A technique that analyzes latent content from the manifest content of dreams to explore unconscious desires and conflicts; Freud called dreams 'the royal road to the unconscious.'",
    "significance": "무의식을 탐색하는 가장 직접적인 방법 중 하나로, 정신분석뿐 아니라 Jung의 분석심리학에서도 핵심 기법이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "《꿈의 해석》(1900)에서 꿈 분석 방법론을 체계화"
      },
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "꿈을 보상적 기능으로 해석하는 접근 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유연상",
        "name_en": "Free Association",
        "id": "PSYCHOD_FA_013"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PSYCHOD_IT_008"
      },
      {
        "name_ko": "상징",
        "name_en": "Symbol",
        "id": "PSYCHOD_SB_030"
      }
    ],
    "sub_types": [
      {
        "name": "현재 내용(Manifest Content)",
        "description": "꿈에서 실제로 기억되는 내용"
      },
      {
        "name": "잠재 내용(Latent Content)",
        "description": "꿈 뒤에 숨겨진 무의식적 의미"
      }
    ],
    "quiz_hints": {
      "mnemonic": "꿈 = 무의식으로 가는 왕도(royal road), 현재 내용 → 잠재 내용",
      "differential": "Freud의 꿈 분석은 소원충족, Jung의 꿈 분석은 보상적 기능을 강조",
      "key_point": "Freud: '꿈은 무의식으로 가는 왕도', 현재 내용에서 잠재 내용을 분석",
      "common_mistake": "꿈의 의미를 보편적 상징 사전으로 해석하려 하나, 개인적 연상이 더 중요하다"
    }
  },
  {
    "id": "PSYCHOD_RG_015",
    "terminology": "퇴행 (Regression)",
    "terminology_ko": "퇴행",
    "terminology_en": "Regression",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "스트레스나 갈등 상황에서 이전 발달 단계의 행동 양식으로 되돌아가는 방어기제로, 일시적일 수도 있고 지속적일 수도 있다.",
    "definition_en": "A defense mechanism involving a return to behavioral patterns of an earlier developmental stage in response to stress or conflict, which can be temporary or persistent.",
    "significance": "상담 장면에서 내담자의 퇴행을 이해하는 것은 스트레스 대처 방식과 고착 지점을 파악하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "퇴행을 고착 지점으로의 회귀로 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고착",
        "name_en": "Fixation",
        "id": "PSYCHOD_FX_012"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "심리성적 발달",
        "name_en": "Psychosexual Development",
        "id": "PSYCHOD_PSD_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "퇴행 = 스트레스 시 이전 단계로 되돌아감",
      "differential": "고착은 특정 단계에 고정된 것, 퇴행은 이미 지난 단계로 돌아가는 것",
      "key_point": "고착 지점으로의 회귀이며, 스트레스 대처 방식으로 나타남",
      "common_mistake": "퇴행을 항상 병리적으로 보나, 일시적 퇴행은 정상적 스트레스 반응일 수 있다"
    }
  },
  {
    "id": "PSYCHOD_SL_016",
    "terminology": "승화 (Sublimation)",
    "terminology_ko": "승화",
    "terminology_en": "Sublimation",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "사회적으로 용납되지 않는 충동이나 욕구를 사회적으로 가치 있는 활동(예술, 운동, 학문 등)으로 전환하는 가장 성숙한 방어기제이다.",
    "definition_en": "The most mature defense mechanism that transforms socially unacceptable impulses into socially valuable activities such as art, sports, or academics.",
    "significance": "Freud가 문명과 문화의 발전을 설명하는 데 사용한 개념으로, 적응적 방어기제의 대표적 예이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "승화를 가장 성숙한 방어기제로 제시하고 문화적 성취의 기반으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "억압",
        "name_en": "Repression",
        "id": "PSYCHOD_RP_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "승화 = 나쁜 충동 → 좋은 활동으로 변환 (가장 성숙한 방어)",
      "differential": "반동형성은 반대 행동으로 전환, 승화는 사회적으로 가치 있는 활동으로 전환",
      "key_point": "가장 성숙하고 적응적인 방어기제로, 사회적으로 용납되지 않는 충동을 가치 있는 활동으로 전환",
      "common_mistake": "승화를 억압과 혼동하나, 억압은 충동을 차단하고 승화는 충동을 변환한다"
    }
  },
  {
    "id": "PSYCHOD_PJ_017",
    "terminology": "투사 (Projection)",
    "terminology_ko": "투사",
    "terminology_en": "Projection",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "자신이 받아들이기 어려운 감정, 욕구, 특성을 타인에게 있는 것으로 귀속시키는 방어기제이다.",
    "definition_en": "A defense mechanism that attributes one's own unacceptable feelings, desires, or characteristics to others.",
    "significance": "대인관계 갈등의 무의식적 원인을 이해하는 핵심 개념이며, 투사적 동일시와 구별되는 기본 방어기제이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "투사를 편집증적 사고의 핵심 기제로 설명"
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "투사를 방어기제의 하나로 체계적 분류"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      },
      {
        "name_ko": "투사적 동일시",
        "name_en": "Projective Identification",
        "id": "PSYCHOD_PI_026"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "투사 = 내 것을 남의 것으로 돌림",
      "differential": "투사는 귀속만 하는 것, 투사적 동일시는 상대방도 실제로 그렇게 느끼게 만드는 것",
      "key_point": "자신의 받아들이기 어려운 감정이나 특성을 타인에게 귀속시키는 것",
      "common_mistake": "투사와 투사적 동일시를 혼동하나, 투사적 동일시는 대상에게 실제 영향을 미친다"
    }
  },
  {
    "id": "PSYCHOD_IP_018",
    "terminology": "개인심리학 (Individual Psychology)",
    "terminology_ko": "개인심리학",
    "terminology_en": "Individual Psychology",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Alfred Adler가 창시한 상담 접근으로, 인간을 사회적 존재로 보며 열등감, 우월성 추구, 사회적 관심, 생활양식을 핵심 개념으로 한다.",
    "definition_en": "A counseling approach founded by Alfred Adler that views humans as social beings, with inferiority feelings, striving for superiority, social interest, and lifestyle as core concepts.",
    "significance": "Freud의 생물학적 결정론을 넘어 사회적 맥락과 주관적 경험을 강조한 최초의 정신역동 분파이다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "개인심리학 창시, 열등감-우월성 추구 역동과 사회적 관심 개념 제시"
      },
      {
        "name_ko": "루돌프 드라이커스",
        "name_en": "Rudolf Dreikurs",
        "contribution": "Adler 이론을 교육과 아동상담에 적용하여 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "열등감",
        "name_en": "Inferiority Feelings",
        "id": "PSYCHOD_IF_019"
      },
      {
        "name_ko": "사회적 관심",
        "name_en": "Social Interest",
        "id": "PSYCHOD_SI_020"
      },
      {
        "name_ko": "생활양식",
        "name_en": "Lifestyle",
        "id": "PSYCHOD_LS_021"
      },
      {
        "name_ko": "정신역동 상담",
        "name_en": "Psychodynamic Therapy",
        "id": "PSYCHOD_PD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Adler 핵심 4개: 열등감, 우월성 추구, 사회적 관심, 생활양식",
      "differential": "Freud는 성적 충동 강조, Adler는 사회적 관심과 열등감 극복을 강조",
      "key_point": "인간을 분할 불가능한 전체적·사회적 존재로 보며, 열등감과 사회적 관심이 핵심",
      "common_mistake": "개인심리학의 '개인'을 개인주의로 오해하나, '분할할 수 없는 전체'를 의미한다"
    }
  },
  {
    "id": "PSYCHOD_IF_019",
    "terminology": "열등감 (Inferiority Feelings)",
    "terminology_ko": "열등감",
    "terminology_en": "Inferiority Feelings",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "모든 인간이 보편적으로 경험하는 부족함과 불완전함의 감정으로, Adler에 따르면 이는 성장과 발전의 동기가 되지만 과도하면 열등감 콤플렉스로 발전한다.",
    "definition_en": "Universal feelings of inadequacy and incompleteness experienced by all humans; according to Adler, these motivate growth and development but can develop into an inferiority complex when excessive.",
    "significance": "Adler 이론의 출발점으로, 열등감이 건강하게 극복되면 성장의 동력이 되고, 과보상되면 우월감 콤플렉스가 된다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "열등감을 인간의 보편적 경험이자 성장 동기로 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "우월성 추구",
        "name_en": "Striving for Superiority",
        "id": "PSYCHOD_SS_022"
      },
      {
        "name_ko": "사회적 관심",
        "name_en": "Social Interest",
        "id": "PSYCHOD_SI_020"
      }
    ],
    "sub_types": [
      {
        "name": "열등감 콤플렉스",
        "description": "열등감에 압도되어 삶의 과제를 회피하는 상태"
      },
      {
        "name": "우월감 콤플렉스",
        "description": "열등감을 과보상하여 과장된 우월감을 보이는 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "열등감 = 보편적 경험 → 성장 동기(건강) vs 콤플렉스(병리)",
      "differential": "열등감은 보편적이고 동기부여적, 열등감 콤플렉스는 삶을 마비시키는 병리적 상태",
      "key_point": "모든 인간의 보편적 경험이며, 건강하게 극복하면 성장의 동력",
      "common_mistake": "열등감을 항상 부정적으로 보나, Adler는 이를 성장의 원동력으로 보았다"
    }
  },
  {
    "id": "PSYCHOD_SI_020",
    "terminology": "사회적 관심 (Social Interest)",
    "terminology_ko": "사회적 관심",
    "terminology_en": "Social Interest",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "인간에게 선천적으로 내재된 공동체에 대한 관심과 기여 의지로, Adler가 정신건강의 가장 중요한 척도로 본 개념이다. 독일어 Gemeinschaftsgefühl.",
    "definition_en": "An innate capacity for community feeling and willingness to contribute, which Adler considered the most important measure of mental health. German: Gemeinschaftsgefühl.",
    "significance": "Adler 이론에서 정신건강의 핵심 지표이며, 상담의 궁극적 목표는 사회적 관심의 발달이다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "사회적 관심(Gemeinschaftsgefühl)을 정신건강의 핵심 척도로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "열등감",
        "name_en": "Inferiority Feelings",
        "id": "PSYCHOD_IF_019"
      },
      {
        "name_ko": "생활양식",
        "name_en": "Lifestyle",
        "id": "PSYCHOD_LS_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회적 관심 = Gemeinschaftsgefühl = 정신건강의 바로미터",
      "differential": "사회적 관심은 공동체 기여 의지, 우월성 추구는 개인적 완성 동기",
      "key_point": "Adler에게 정신건강의 가장 중요한 척도이며, 독일어 Gemeinschaftsgefühl로 표현",
      "common_mistake": "사회적 관심을 단순한 사교성으로 오해하나, 인류 공동체에 대한 관심과 기여 의지이다"
    }
  },
  {
    "id": "PSYCHOD_LS_021",
    "terminology": "생활양식 (Lifestyle)",
    "terminology_ko": "생활양식",
    "terminology_en": "Lifestyle",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "개인이 4-5세경에 형성하는 삶의 기본 목표, 신념, 행동 패턴의 총체로, Adler에 따르면 이후의 모든 지각과 행동을 조직하는 인지적 틀이다.",
    "definition_en": "The totality of an individual's basic life goals, beliefs, and behavioral patterns formed around ages 4-5, which according to Adler organizes all subsequent perception and behavior as a cognitive framework.",
    "significance": "Adler 상담에서 생활양식의 평가와 수정이 치료의 핵심이며, 초기 기억 분석이 생활양식 파악의 주요 도구이다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "생활양식 개념을 창안하여 성격의 총체적 패턴으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "초기 기억",
        "name_en": "Early Recollections",
        "id": "PSYCHOD_ER_033"
      },
      {
        "name_ko": "사회적 관심",
        "name_en": "Social Interest",
        "id": "PSYCHOD_SI_020"
      },
      {
        "name_ko": "열등감",
        "name_en": "Inferiority Feelings",
        "id": "PSYCHOD_IF_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "생활양식 = 4-5세경 형성된 삶의 청사진",
      "differential": "생활양식은 전체적 삶의 패턴, 도식(schema)은 특정 영역의 인지 구조",
      "key_point": "4-5세경에 형성되며, 모든 지각과 행동을 조직하는 인지적 틀",
      "common_mistake": "생활양식을 일상적 습관으로 오해하나, Adler에게는 삶 전체를 조직하는 총체적 패턴이다"
    }
  },
  {
    "id": "PSYCHOD_SS_022",
    "terminology": "우월성 추구 (Striving for Superiority)",
    "terminology_ko": "우월성 추구",
    "terminology_en": "Striving for Superiority",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "열등감을 극복하고 완전함과 유능함을 향해 나아가려는 인간의 기본적 동기로, Adler가 제시한 삶의 근본적 추진력이다.",
    "definition_en": "The fundamental human motivation to overcome inferiority and move toward completeness and competence, the basic driving force of life proposed by Adler.",
    "significance": "Freud의 성적 충동(리비도)을 대체하는 Adler의 핵심 동기 개념으로, 긍정적 방향이면 성장, 부정적 방향이면 신경증이 된다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "우월성 추구를 인간의 기본 동기로 제시, 후에 완전 추구(striving for perfection)로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "열등감",
        "name_en": "Inferiority Feelings",
        "id": "PSYCHOD_IF_019"
      },
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "사회적 관심",
        "name_en": "Social Interest",
        "id": "PSYCHOD_SI_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "우월성 추구 = 열등감 극복 → 완전함을 향한 동기",
      "differential": "우월성 추구 + 사회적 관심 = 건강한 성장, 우월성 추구 - 사회적 관심 = 신경증",
      "key_point": "타인보다 뛰어나려는 것이 아니라 자기 자신의 완전함을 향한 추구",
      "common_mistake": "우월성을 타인에 대한 지배로 오해하나, 자기 완성과 유능함을 향한 동기이다"
    }
  },
  {
    "id": "PSYCHOD_OR_023",
    "terminology": "대상관계이론 (Object Relations Theory)",
    "terminology_ko": "대상관계이론",
    "terminology_en": "Object Relations Theory",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "생후 초기의 주양육자(대상)와의 관계 경험이 내면화되어 내적 대상관계를 형성하고, 이것이 이후 모든 대인관계와 성격 발달의 기초가 된다는 이론이다.",
    "definition_en": "A theory positing that early relational experiences with primary caregivers (objects) become internalized as internal object relations, forming the foundation for all subsequent interpersonal relationships and personality development.",
    "significance": "Freud의 충동이론에서 관계이론으로의 패러다임 전환을 이끌었으며, 경계선 성격장애 등의 이해에 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "멜라니 클라인",
        "name_en": "Melanie Klein",
        "contribution": "영아의 내적 대상관계와 분열-편집자리, 우울자리 개념 제시"
      },
      {
        "name_ko": "도널드 위니캇",
        "name_en": "Donald Winnicott",
        "contribution": "충분히 좋은 어머니, 과도기 대상, 참자기/거짓자기 개념 제시"
      },
      {
        "name_ko": "마가렛 말러",
        "name_en": "Margaret Mahler",
        "contribution": "분리-개별화 과정 이론 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_005"
      },
      {
        "name_ko": "분리-개별화",
        "name_en": "Separation-Individuation",
        "id": "PSYCHOD_SEP_025"
      },
      {
        "name_ko": "투사적 동일시",
        "name_en": "Projective Identification",
        "id": "PSYCHOD_PI_026"
      },
      {
        "name_ko": "충분히 좋은 어머니",
        "name_en": "Good Enough Mother",
        "id": "PSYCHOD_GEM_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대상관계 = 초기 양육자와의 관계 → 내면화 → 이후 관계의 틀",
      "differential": "Freud는 충동(drive) 중심, 대상관계이론은 관계(relation) 중심",
      "key_point": "초기 대상과의 관계가 내면화되어 이후 모든 대인관계의 원형이 됨",
      "common_mistake": "'대상'을 물건으로 오해하나, 정신분석에서 대상(object)은 관계의 상대방(주로 양육자)을 의미한다"
    }
  },
  {
    "id": "PSYCHOD_GEM_024",
    "terminology": "충분히 좋은 어머니 (Good Enough Mother)",
    "terminology_ko": "충분히 좋은 어머니",
    "terminology_en": "Good Enough Mother",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Winnicott이 제안한 개념으로, 완벽하지 않지만 아이의 욕구에 충분히 반응하는 양육자를 의미하며, 적절한 좌절을 통해 아이의 독립적 자기 발달을 촉진한다.",
    "definition_en": "A concept proposed by Winnicott referring to a caregiver who is not perfect but responds adequately to the child's needs, facilitating independent self-development through appropriate frustration.",
    "significance": "완벽한 양육이 아닌 '충분히 좋은' 양육이 건강한 발달의 조건임을 강조하여, 양육에 대한 현실적 관점을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "도널드 위니캇",
        "name_en": "Donald Winnicott",
        "contribution": "충분히 좋은 어머니 개념을 통해 양육의 현실적 기준 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대상관계이론",
        "name_en": "Object Relations Theory",
        "id": "PSYCHOD_OR_023"
      },
      {
        "name_ko": "과도기 대상",
        "name_en": "Transitional Object",
        "id": "PSYCHOD_TO_027"
      },
      {
        "name_ko": "분리-개별화",
        "name_en": "Separation-Individuation",
        "id": "PSYCHOD_SEP_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "충분히 좋은 어머니 = 완벽하지 않아도 OK → 적절한 좌절이 성장 촉진",
      "differential": "안전 애착의 조건과 유사하나, 충분히 좋은 어머니는 Winnicott의 대상관계 개념",
      "key_point": "Winnicott: 완벽한 양육이 아닌 '충분히 좋은' 양육이 건강한 발달의 조건",
      "common_mistake": "충분히 좋은 어머니를 '그저 그런 어머니'로 오해하나, 적절한 반응성과 점진적 탈이상화를 의미한다"
    }
  },
  {
    "id": "PSYCHOD_SEP_025",
    "terminology": "분리-개별화 (Separation-Individuation)",
    "terminology_ko": "분리-개별화",
    "terminology_en": "Separation-Individuation",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Mahler가 제안한 영아 발달 과정으로, 어머니와의 공생 상태에서 점차 분리되어 독립적 자기감을 형성해가는 과정이다. 정상적 자폐-공생-분리개별화의 단계를 거친다.",
    "definition_en": "An infant developmental process proposed by Mahler describing the gradual separation from symbiotic union with the mother toward forming an independent sense of self, progressing through normal autism, symbiosis, and separation-individuation phases.",
    "significance": "경계선 성격장애의 발달적 기원을 설명하는 핵심 이론으로, 재접근 위기(rapprochement crisis)의 해결이 특히 중요하다.",
    "key_researchers": [
      {
        "name_ko": "마가렛 말러",
        "name_en": "Margaret Mahler",
        "contribution": "분리-개별화 과정의 하위단계(분화, 연습, 재접근, 대상항상성)를 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대상관계이론",
        "name_en": "Object Relations Theory",
        "id": "PSYCHOD_OR_023"
      },
      {
        "name_ko": "충분히 좋은 어머니",
        "name_en": "Good Enough Mother",
        "id": "PSYCHOD_GEM_024"
      },
      {
        "name_ko": "투사적 동일시",
        "name_en": "Projective Identification",
        "id": "PSYCHOD_PI_026"
      }
    ],
    "sub_types": [
      {
        "name": "분화 하위단계",
        "description": "어머니와 자기의 구분이 시작되는 시기"
      },
      {
        "name": "연습 하위단계",
        "description": "이동 능력 발달로 탐색하며 전능감을 경험"
      },
      {
        "name": "재접근 하위단계",
        "description": "독립과 의존 사이의 양가감정, 재접근 위기"
      },
      {
        "name": "대상항상성",
        "description": "어머니의 좋고 나쁜 면을 통합하는 능력 형성"
      }
    ],
    "quiz_hints": {
      "mnemonic": "분리-개별화 4하위단계: 분-연-재-대 (분화, 연습, 재접근, 대상항상성)",
      "differential": "Mahler의 분리-개별화는 영아기 발달, Bowen의 자기분화는 가족체계 개념",
      "key_point": "Mahler: 공생에서 독립으로, 재접근 위기의 해결이 경계선 성격과 관련",
      "common_mistake": "정상적 자폐 단계를 자폐스펙트럼장애와 혼동하나, Mahler의 개념은 발달적 단계를 의미한다"
    }
  },
  {
    "id": "PSYCHOD_PI_026",
    "terminology": "투사적 동일시 (Projective Identification)",
    "terminology_ko": "투사적 동일시",
    "terminology_en": "Projective Identification",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "자신의 용납할 수 없는 감정이나 자기 부분을 타인에게 투사하고, 투사받은 상대방이 실제로 그 감정을 경험하거나 그에 맞게 행동하도록 무의식적으로 압력을 가하는 원시적 방어기제이다.",
    "definition_en": "A primitive defense mechanism in which one projects unacceptable feelings or parts of the self onto another person and unconsciously pressures the recipient to actually experience those feelings or behave accordingly.",
    "significance": "Klein이 제안한 핵심 개념으로, 경계선 성격장애와 상담에서의 역전이를 이해하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "멜라니 클라인",
        "name_en": "Melanie Klein",
        "contribution": "투사적 동일시 개념을 최초로 제안 (1946)"
      },
      {
        "name_ko": "윌프레드 비온",
        "name_en": "Wilfred Bion",
        "contribution": "투사적 동일시를 대인관계적 소통 기제로 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "PSYCHOD_PJ_017"
      },
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "PSYCHOD_CTF_009"
      },
      {
        "name_ko": "대상관계이론",
        "name_en": "Object Relations Theory",
        "id": "PSYCHOD_OR_023"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DM_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "투사적 동일시 = 투사 + 상대방을 실제로 그렇게 만듦",
      "differential": "투사는 귀속만, 투사적 동일시는 상대방에게 실제 영향을 미침",
      "key_point": "Klein이 제안, 투사받은 사람이 실제로 투사된 감정을 경험하게 되는 것이 핵심",
      "common_mistake": "단순 투사와 혼동하나, 투사적 동일시는 대인관계적 과정이 포함된다"
    }
  },
  {
    "id": "PSYCHOD_TO_027",
    "terminology": "과도기 대상 (Transitional Object)",
    "terminology_ko": "과도기 대상",
    "terminology_en": "Transitional Object",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Winnicott이 제안한 개념으로, 영아가 어머니와의 분리를 견디기 위해 사용하는 물건(담요, 인형 등)으로, 주관적 세계와 객관적 현실 사이의 중간 영역에 존재한다.",
    "definition_en": "A concept proposed by Winnicott referring to objects (blankets, dolls, etc.) used by infants to tolerate separation from the mother, existing in an intermediate area between subjective world and objective reality.",
    "significance": "내적 세계와 외적 현실 사이의 중간 영역(transitional space)을 설명하며, 이 개념은 창조성과 문화 현상의 이해로 확장된다.",
    "key_researchers": [
      {
        "name_ko": "도널드 위니캇",
        "name_en": "Donald Winnicott",
        "contribution": "과도기 대상과 과도기 현상(transitional phenomena) 개념 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "충분히 좋은 어머니",
        "name_en": "Good Enough Mother",
        "id": "PSYCHOD_GEM_024"
      },
      {
        "name_ko": "대상관계이론",
        "name_en": "Object Relations Theory",
        "id": "PSYCHOD_OR_023"
      },
      {
        "name_ko": "분리-개별화",
        "name_en": "Separation-Individuation",
        "id": "PSYCHOD_SEP_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과도기 대상 = 담요/인형 = 엄마 대신 안전 제공",
      "differential": "과도기 대상은 분리 대처용 물건, 자기대상은 Kohut의 자기 응집성을 위한 관계적 기능",
      "key_point": "Winnicott: 주관적 세계와 객관적 현실 사이의 중간 영역에 존재하는 대상",
      "common_mistake": "과도기 대상에 대한 집착을 병리적으로 볼 필요 없으며, 정상 발달 과정이다"
    }
  },
  {
    "id": "PSYCHOD_CU_028",
    "terminology": "집단무의식 (Collective Unconscious)",
    "terminology_ko": "집단무의식",
    "terminology_en": "Collective Unconscious",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 개념으로, 개인의 경험과 무관하게 인류 전체에 공유되는 무의식의 가장 깊은 층으로, 원형(archetype)이 저장되어 있다.",
    "definition_en": "A concept proposed by Jung referring to the deepest layer of the unconscious shared by all humanity regardless of individual experience, containing archetypes.",
    "significance": "Freud의 개인 무의식을 넘어 인류 보편적 무의식을 제안함으로써 신화, 종교, 문화적 상징의 심리학적 이해를 가능하게 했다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "집단무의식과 원형 개념을 제안하여 분석심리학의 기반 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "상징",
        "name_en": "Symbol",
        "id": "PSYCHOD_SB_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단무의식 = 인류 공통의 무의식 + 원형이 저장된 곳",
      "differential": "개인무의식은 개인적 억압 내용, 집단무의식은 인류 보편적 원형을 포함",
      "key_point": "Jung: 개인 경험과 무관하게 인류에 보편적으로 공유되는 무의식의 가장 깊은 층",
      "common_mistake": "집단무의식을 사회적 학습으로 형성된 것으로 오해하나, 유전적으로 전승되는 심적 구조이다"
    }
  },
  {
    "id": "PSYCHOD_AT_029",
    "terminology": "원형 (Archetype)",
    "terminology_ko": "원형",
    "terminology_en": "Archetype",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 집단무의식의 구성 요소로, 인류에 보편적으로 존재하는 원초적 이미지와 행동 패턴의 틀이다. 페르소나, 그림자, 아니마/아니무스, 자기(Self) 등이 대표적이다.",
    "definition_en": "Components of the collective unconscious proposed by Jung, representing universal primordial images and behavioral pattern templates. Key archetypes include persona, shadow, anima/animus, and Self.",
    "significance": "꿈, 신화, 종교에 반복적으로 나타나는 보편적 패턴을 설명하며, 분석심리학적 상담의 핵심 분석 대상이다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "원형 개념을 체계화하고 주요 원형(페르소나, 그림자, 아니마/아니무스, 자기)을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "id": "PSYCHOD_CU_028"
      },
      {
        "name_ko": "페르소나",
        "name_en": "Persona",
        "id": "PSYCHOD_PR_031"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "상징",
        "name_en": "Symbol",
        "id": "PSYCHOD_SB_030"
      }
    ],
    "sub_types": [
      {
        "name": "페르소나(Persona)",
        "description": "사회적 가면, 외부에 보이는 자아"
      },
      {
        "name": "그림자(Shadow)",
        "description": "억압된 어두운 측면, 인정하지 않는 자기 부분"
      },
      {
        "name": "아니마/아니무스",
        "description": "남성 안의 여성성(아니마) / 여성 안의 남성성(아니무스)"
      },
      {
        "name": "자기(Self)",
        "description": "성격의 중심이자 전체성, 개성화의 목표"
      }
    ],
    "quiz_hints": {
      "mnemonic": "원형 4대: 페-그-아-자 (페르소나, 그림자, 아니마/아니무스, 자기)",
      "differential": "원형은 보편적 패턴의 틀, 콤플렉스는 원형에 개인적 경험이 결합된 감정 덩어리",
      "key_point": "Jung의 4대 원형: 페르소나(사회적 가면), 그림자(어두운 면), 아니마/아니무스(이성적 요소), 자기(전체성)",
      "common_mistake": "원형을 구체적 이미지로 오해하나, 원형 자체는 형태 없는 경향성이며 이미지는 그 표현이다"
    }
  },
  {
    "id": "PSYCHOD_SB_030",
    "terminology": "상징 (Symbol)",
    "terminology_ko": "상징",
    "terminology_en": "Symbol",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung에게 상징은 의식과 무의식을 연결하는 매개체로, 알려진 것 이상의 의미를 담고 있으며, 꿈, 신화, 예술 등에서 나타나 개성화 과정을 촉진한다.",
    "definition_en": "For Jung, symbols are mediators connecting consciousness and the unconscious, carrying meanings beyond what is known, appearing in dreams, myths, and art to facilitate the individuation process.",
    "significance": "분석심리학에서 상징의 해석은 무의식을 이해하고 개성화를 촉진하는 핵심 도구이다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "상징을 단순한 기호와 구별하고 무의식과 의식의 연결 매개로 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "꿈 분석",
        "name_en": "Dream Analysis",
        "id": "PSYCHOD_DA_014"
      },
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "id": "PSYCHOD_CU_028"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상징 = 알려진 것 이상의 의미를 담은 매개체",
      "differential": "Freud에게 꿈 상징은 위장(억압된 소원), Jung에게는 무의식의 창조적 표현",
      "key_point": "Jung: 상징은 기호(sign)와 달리 아직 완전히 알려지지 않은 것을 표현",
      "common_mistake": "상징을 고정된 의미의 기호로 보나, Jung에게 상징은 의미가 열려 있는 살아있는 매개이다"
    }
  },
  {
    "id": "PSYCHOD_PR_031",
    "terminology": "페르소나 (Persona)",
    "terminology_ko": "페르소나",
    "terminology_en": "Persona",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 원형의 하나로, 사회적 기대에 맞추어 외부에 보여주는 공적 자아, 즉 사회적 가면을 의미하며, 과도한 동일시는 참된 자기를 상실하게 한다.",
    "definition_en": "An archetype proposed by Jung referring to the public self or social mask presented to meet social expectations; excessive identification with it leads to loss of the true self.",
    "significance": "사회 적응에 필요하지만, 페르소나에 과도하게 동일시하면 자기소외가 발생하므로 그림자와의 균형이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "페르소나를 사회적 적응의 원형으로 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "그림자",
        "name_en": "Shadow",
        "id": "PSYCHOD_SH_035"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "페르소나 = 사회적 가면 (라틴어 persona = 배우의 가면)",
      "differential": "페르소나는 외부에 보이는 면, 그림자는 숨기는 어두운 면",
      "key_point": "사회적 적응에 필요하지만, 과도한 동일시는 참된 자기 상실을 초래",
      "common_mistake": "페르소나를 허위나 위선으로만 보나, 사회적 적응에 필수적인 건강한 기능이다"
    }
  },
  {
    "id": "PSYCHOD_IND_032",
    "terminology": "개성화 (Individuation)",
    "terminology_ko": "개성화",
    "terminology_en": "Individuation",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 분석심리학의 궁극적 목표로, 의식과 무의식을 통합하여 자기(Self)를 실현하는 전인적 성격 발달 과정이다.",
    "definition_en": "The ultimate goal of Jung's analytical psychology, a holistic personality development process of integrating consciousness and the unconscious to realize the Self.",
    "significance": "분석심리학적 상담의 궁극적 목표이며, 주로 인생의 후반기에 본격적으로 이루어지는 과정이다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "개성화를 성격 발달의 궁극적 목표로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "id": "PSYCHOD_CU_028"
      },
      {
        "name_ko": "페르소나",
        "name_en": "Persona",
        "id": "PSYCHOD_PR_031"
      },
      {
        "name_ko": "자기실현경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "FOUND_SAT_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "개성화 = 의식 + 무의식 통합 → 자기(Self) 실현",
      "differential": "Rogers의 자기실현은 유기체적 성장, Jung의 개성화는 의식-무의식의 통합",
      "key_point": "의식과 무의식을 통합하여 자기(Self)를 실현하는 과정, 주로 인생 후반기에 본격화",
      "common_mistake": "개성화를 개인주의(individualism)와 혼동하나, 개성화는 전체성의 실현이다"
    }
  },
  {
    "id": "PSYCHOD_ER_033",
    "terminology": "초기 기억 (Early Recollections)",
    "terminology_ko": "초기 기억",
    "terminology_en": "Early Recollections",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Adler 상담에서 내담자의 생활양식을 파악하기 위해 탐색하는 어린 시절의 가장 초기 기억으로, 현재의 삶에 대한 주관적 의미와 핵심 신념을 반영한다.",
    "definition_en": "The earliest childhood memories explored in Adlerian counseling to understand the client's lifestyle, reflecting subjective meanings and core beliefs about current life.",
    "significance": "Adler 상담의 핵심 평가 도구로, 초기 기억의 분석을 통해 내담자의 생활양식과 핵심 신념을 파악한다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "초기 기억을 생활양식 평가의 핵심 도구로 활용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생활양식",
        "name_en": "Lifestyle",
        "id": "PSYCHOD_LS_021"
      },
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "FOUND_CC_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "초기 기억 = 생활양식의 창문 (Adler 상담의 핵심 평가 도구)",
      "differential": "Freud의 자유연상은 무의식 탐색, Adler의 초기 기억은 생활양식 파악",
      "key_point": "Adler: 초기 기억은 객관적 사실이 아닌 현재의 생활양식을 반영하는 주관적 구성",
      "common_mistake": "초기 기억의 정확성이 중요한 것이 아니라, 어떤 기억을 선택했는지가 중요하다"
    }
  },
  {
    "id": "PSYCHOD_BC_034",
    "terminology": "출생순위 (Birth Order)",
    "terminology_ko": "출생순위",
    "terminology_en": "Birth Order",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Adler가 강조한 개념으로, 가족 내 출생 순서(첫째, 둘째, 막내, 외동)에 따라 서로 다른 심리적 위치와 성격 특성이 형성된다는 이론이다.",
    "definition_en": "A concept emphasized by Adler that different psychological positions and personality characteristics develop based on birth order (firstborn, second, youngest, only child) within the family.",
    "significance": "가족 역동과 개인 성격을 이해하는 Adler 상담의 핵심 평가 영역이다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 아들러",
        "name_en": "Alfred Adler",
        "contribution": "출생순위가 성격 형성에 미치는 영향을 체계적으로 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개인심리학",
        "name_en": "Individual Psychology",
        "id": "PSYCHOD_IP_018"
      },
      {
        "name_ko": "생활양식",
        "name_en": "Lifestyle",
        "id": "PSYCHOD_LS_021"
      },
      {
        "name_ko": "가족체계이론",
        "name_en": "Family Systems Theory",
        "id": "FAMILY_ST_001"
      }
    ],
    "sub_types": [
      {
        "name": "첫째",
        "description": "책임감, 완벽주의, 보수적, 왕좌에서 밀려나는 경험"
      },
      {
        "name": "둘째/중간",
        "description": "경쟁적, 중재자 역할, 앞선 형제를 따라잡으려는 동기"
      },
      {
        "name": "막내",
        "description": "응석받이, 사교적, 과잉보호 위험"
      },
      {
        "name": "외동",
        "description": "성인과 함께 성장, 주목받기 원함, 의존적이거나 독립적"
      }
    ],
    "quiz_hints": {
      "mnemonic": "출생순위: 첫째(책임감) 중간(경쟁) 막내(사교적) 외동(주목)",
      "differential": "출생순위는 심리적 위치(psychological position)이며, 실제 순서와 다를 수 있음",
      "key_point": "Adler: 실제 순서보다 가족 내 심리적 위치가 더 중요",
      "common_mistake": "출생순위를 결정론적으로 적용하나, Adler는 심리적 위치와 주관적 해석을 강조했다"
    }
  },
  {
    "id": "PSYCHOD_SH_035",
    "terminology": "그림자 (Shadow)",
    "terminology_ko": "그림자",
    "terminology_en": "Shadow",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 원형의 하나로, 개인이 인정하지 않거나 억압한 성격의 어두운 측면으로, 의식적 자아가 받아들이기 거부하는 특성들이 저장되어 있다.",
    "definition_en": "An archetype proposed by Jung representing the dark side of personality that the individual does not acknowledge or has repressed, storing characteristics that the conscious ego refuses to accept.",
    "significance": "그림자의 통합은 개성화의 첫 단계로, 자신의 어두운 면을 직면하고 수용하는 것이 심리적 성숙의 조건이다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "그림자를 개성화의 첫 번째 과제로 제시하고 투사 기제와 연결"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "페르소나",
        "name_en": "Persona",
        "id": "PSYCHOD_PR_031"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "PSYCHOD_PJ_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "그림자 = 인정하지 않는 나의 어두운 면 (개성화의 첫 과제)",
      "differential": "그림자는 개인적 억압된 면, 원초아(id)는 본능적 충동의 저장소",
      "key_point": "그림자 통합은 개성화의 첫 단계이며, 투사를 통해 타인에게 드러난다",
      "common_mistake": "그림자를 순수한 악으로만 보나, 억압된 긍정적 잠재력도 포함할 수 있다"
    }
  },
  {
    "id": "PSYCHOD_AA_036",
    "terminology": "아니마와 아니무스 (Anima and Animus)",
    "terminology_ko": "아니마와 아니무스",
    "terminology_en": "Anima and Animus",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 원형으로, 아니마는 남성의 무의식 속 여성적 측면, 아니무스는 여성의 무의식 속 남성적 측면을 나타내며, 이성과의 관계와 창조성에 영향을 미친다.",
    "definition_en": "Archetypes proposed by Jung where anima represents the feminine aspect in the male unconscious and animus represents the masculine aspect in the female unconscious, influencing relationships with the opposite sex and creativity.",
    "significance": "성격의 양성적 통합을 추구하는 개성화 과정의 중요한 과제이며, 이성 관계의 무의식적 역동을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "아니마/아니무스 원형을 제안하고 이성 관계와 개성화에서의 역할 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "그림자",
        "name_en": "Shadow",
        "id": "PSYCHOD_SH_035"
      },
      {
        "name_ko": "집단무의식",
        "name_en": "Collective Unconscious",
        "id": "PSYCHOD_CU_028"
      }
    ],
    "sub_types": [
      {
        "name": "아니마(Anima)",
        "description": "남성 무의식 속의 여성적 원형"
      },
      {
        "name": "아니무스(Animus)",
        "description": "여성 무의식 속의 남성적 원형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "아니마 = 남성 안의 여성성, 아니무스 = 여성 안의 남성성",
      "differential": "아니마/아니무스는 내적 이성성, 페르소나는 사회적 가면",
      "key_point": "남성 안의 여성성(아니마), 여성 안의 남성성(아니무스)으로 이성 관계의 투사에 영향",
      "common_mistake": "현대적 관점에서 성별 이분법적 해석은 비판받으며, 양성적 특질의 통합으로 재해석된다"
    }
  },
  {
    "id": "PSYCHOD_CX_037",
    "terminology": "콤플렉스 (Complex)",
    "terminology_ko": "콤플렉스",
    "terminology_en": "Complex",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 개념으로, 원형을 핵으로 하여 개인적 경험과 감정이 결합된 무의식적 감정 덩어리로, 특정 상황에서 자동적으로 활성화되어 행동에 영향을 미친다.",
    "definition_en": "A concept proposed by Jung referring to an unconscious emotional cluster formed around an archetypal core combined with personal experiences and feelings, automatically activated in specific situations to influence behavior.",
    "significance": "Jung의 단어연상검사(word association test)를 통해 발견되었으며, 무의식의 존재를 실증적으로 입증하는 데 기여했다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "단어연상검사를 통해 콤플렉스의 존재를 실증적으로 발견하고 개념화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      },
      {
        "name_ko": "그림자",
        "name_en": "Shadow",
        "id": "PSYCHOD_SH_035"
      },
      {
        "name_ko": "오이디푸스 콤플렉스",
        "name_en": "Oedipus Complex",
        "id": "PSYCHOD_OC_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "콤플렉스 = 원형(핵) + 개인적 경험·감정 = 감정 덩어리",
      "differential": "원형은 보편적 틀, 콤플렉스는 원형 + 개인적 경험이 결합된 것",
      "key_point": "Jung이 단어연상검사로 발견, 원형을 핵으로 개인적 경험이 결합된 무의식적 감정 복합체",
      "common_mistake": "일상에서 콤플렉스를 '열등감'과 동의어로 사용하나, 원래는 감정으로 충전된 무의식적 관념의 복합체이다"
    }
  },
  {
    "id": "PSYCHOD_PT_038",
    "terminology": "심리유형론 (Psychological Types)",
    "terminology_ko": "심리유형론",
    "terminology_en": "Psychological Types",
    "category": "PSYCHOD",
    "category_name": "정신역동 상담 (Psychodynamic Therapy)",
    "definition": "Jung이 제안한 성격 유형 이론으로, 태도(외향-내향)와 기능(사고-감정-감각-직관)의 조합으로 개인의 심리적 유형을 분류한다. MBTI의 이론적 기초가 되었다.",
    "definition_en": "A personality type theory proposed by Jung classifying psychological types through combinations of attitudes (extraversion-introversion) and functions (thinking-feeling-sensing-intuition), forming the theoretical basis of the MBTI.",
    "significance": "개인차를 이해하는 체계적 틀을 제공하며, MBTI 등 널리 사용되는 성격 검사의 이론적 토대이다.",
    "key_researchers": [
      {
        "name_ko": "칼 융",
        "name_en": "Carl Jung",
        "contribution": "《심리유형》(1921)에서 외향-내향 태도와 4가지 심리기능 제시"
      },
      {
        "name_ko": "이사벨 마이어스",
        "name_en": "Isabel Myers",
        "contribution": "Jung의 유형론을 기반으로 MBTI 검사 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개성화",
        "name_en": "Individuation",
        "id": "PSYCHOD_IND_032"
      },
      {
        "name_ko": "원형",
        "name_en": "Archetype",
        "id": "PSYCHOD_AT_029"
      },
      {
        "name_ko": "인간관",
        "name_en": "View of Human Nature",
        "id": "FOUND_VH_007"
      }
    ],
    "sub_types": [
      {
        "name": "외향(Extraversion)",
        "description": "에너지가 외부 세계로 향하는 태도"
      },
      {
        "name": "내향(Introversion)",
        "description": "에너지가 내면 세계로 향하는 태도"
      },
      {
        "name": "사고(Thinking)",
        "description": "논리와 객관적 기준으로 판단"
      },
      {
        "name": "감정(Feeling)",
        "description": "가치와 개인적 기준으로 판단"
      },
      {
        "name": "감각(Sensing)",
        "description": "오감을 통한 구체적 정보 수집"
      },
      {
        "name": "직관(Intuition)",
        "description": "가능성과 패턴을 통한 정보 수집"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Jung 유형: 태도(외-내) × 기능(사-감정-감각-직) = 8유형",
      "differential": "Jung의 심리유형은 역동적 발달 개념, MBTI는 이를 정적 분류로 단순화한 것",
      "key_point": "2가지 태도(외향-내향) × 4가지 기능(사고-감정-감각-직관)의 조합",
      "common_mistake": "MBTI를 Jung의 원래 이론과 동일시하나, MBTI는 Jung 유형론의 단순화된 적용이다"
    }
  }
];

TERMS_DATA.EXIST = [
  {
    "id": "EXIST_ET_001",
    "terminology": "실존주의 상담 (Existential Therapy)",
    "terminology_ko": "실존주의 상담",
    "terminology_en": "Existential Therapy",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "인간 존재의 근본적 조건(죽음, 자유, 고립, 무의미)을 직면하고 수용하는 과정을 통해 진정한 삶을 추구하도록 돕는 철학적 상담 접근이다.",
    "definition_en": "A philosophical counseling approach that helps clients pursue authentic living through confronting and accepting fundamental conditions of human existence: death, freedom, isolation, and meaninglessness.",
    "significance": "구체적 기법보다 인간 존재의 본질에 대한 철학적 탐구를 강조하며, 다른 상담이론의 철학적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "실존주의 심리치료의 체계화, 4가지 궁극적 관심사 제시"
      },
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "실존주의 심리학을 미국에 소개하고 불안의 실존적 의미 분석"
      },
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "의미치료(logotherapy) 창시, 삶의 의미 추구 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "인간중심상담",
        "name_en": "Person-Centered Counseling",
        "id": "PERSON_PC_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존주의 4대 주제: 죽-자-고-무 (죽음, 자유, 고립, 무의미)",
      "differential": "정신역동은 과거 경험/무의식 강조, 실존주의는 현재 존재의 조건과 선택을 강조",
      "key_point": "Yalom의 4가지 궁극적 관심사: 죽음, 자유, 실존적 고립, 무의미",
      "common_mistake": "실존주의를 비관적 철학으로 오해하나, 진정한 삶의 추구를 돕는 긍정적 접근이다"
    }
  },
  {
    "id": "EXIST_UC_002",
    "terminology": "궁극적 관심사 (Ultimate Concerns)",
    "terminology_ko": "궁극적 관심사",
    "terminology_en": "Ultimate Concerns",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Yalom이 제시한 인간 존재의 4가지 근본적 주제로, 죽음, 자유(와 책임), 실존적 고립, 무의미가 포함되며, 이들과의 갈등이 심리적 고통의 근원이 된다.",
    "definition_en": "Four fundamental themes of human existence proposed by Yalom—death, freedom (and responsibility), existential isolation, and meaninglessness—whose conflicts become the root of psychological suffering.",
    "significance": "실존주의 상담의 이론적 핵심으로, 심리적 문제를 실존적 관점에서 재구성하는 틀을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "《실존주의 심리치료》에서 4가지 궁극적 관심사를 체계적으로 정리"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      },
      {
        "name_ko": "죽음 자각",
        "name_en": "Death Awareness",
        "id": "EXIST_DA_004"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "실존적 고립",
        "name_en": "Existential Isolation",
        "id": "EXIST_EI_007"
      },
      {
        "name_ko": "무의미",
        "name_en": "Meaninglessness",
        "id": "EXIST_ML_009"
      }
    ],
    "sub_types": [
      {
        "name": "죽음",
        "description": "유한한 존재로서의 불가피한 종결"
      },
      {
        "name": "자유",
        "description": "선택의 자유와 그에 따르는 책임"
      },
      {
        "name": "실존적 고립",
        "description": "근본적으로 혼자인 존재 조건"
      },
      {
        "name": "무의미",
        "description": "삶에 내재된 의미의 부재"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Yalom의 4대 궁극적 관심사: 죽-자-고-무",
      "differential": "궁극적 관심사는 모든 인간의 보편적 조건, 개인적 문제는 이 조건에 대한 반응",
      "key_point": "Yalom: 죽음, 자유, 실존적 고립, 무의미의 4가지가 인간 존재의 근본적 갈등",
      "common_mistake": "궁극적 관심사를 우울증이나 불안장애와 동일시하나, 이는 모든 인간의 보편적 실존 조건이다"
    }
  },
  {
    "id": "EXIST_FR_003",
    "terminology": "자유와 책임 (Freedom and Responsibility)",
    "terminology_ko": "자유와 책임",
    "terminology_en": "Freedom and Responsibility",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "인간은 자신의 삶을 선택할 자유가 있으며, 그 선택에 대한 전적인 책임을 져야 한다는 실존주의의 핵심 명제로, Sartre의 '실존은 본질에 앞선다'에 근거한다.",
    "definition_en": "The existential core proposition that humans have the freedom to choose their lives and must bear full responsibility for those choices, based on Sartre's 'existence precedes essence.'",
    "significance": "결정론적 인간관에 대한 대안으로, 내담자가 자신의 삶에 대한 주체성을 회복하도록 돕는 실존주의 상담의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "장 폴 사르트르",
        "name_en": "Jean-Paul Sartre",
        "contribution": "'실존은 본질에 앞선다': 인간은 스스로 자신을 만들어가는 존재"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "자유와 책임을 궁극적 관심사로 체계화하고 상담에 적용"
      },
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "자유와 운명의 역설적 관계를 탐구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "결정론",
        "name_en": "Determinism",
        "id": "FOUND_DT_009"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자유 = 선택 가능 + 책임 필수 (Sartre: 실존이 본질에 앞선다)",
      "differential": "정신분석의 결정론은 과거에 의해 결정됨, 실존주의는 현재의 자유로운 선택을 강조",
      "key_point": "Sartre: '실존은 본질에 앞선다' — 인간은 먼저 존재하고, 스스로 자신을 만들어간다",
      "common_mistake": "자유를 무한한 가능성으로 이상화하나, 자유에는 불안과 책임이 동반된다"
    }
  },
  {
    "id": "EXIST_DA_004",
    "terminology": "죽음 자각 (Death Awareness)",
    "terminology_ko": "죽음 자각",
    "terminology_en": "Death Awareness",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "자신의 유한성과 필연적 죽음을 인식하는 것으로, 실존주의에서는 죽음 자각이 삶에 긴박감과 의미를 부여하여 진정한 삶을 살도록 촉진한다고 본다.",
    "definition_en": "The awareness of one's finitude and inevitable death, which existentialism holds adds urgency and meaning to life, promoting authentic living.",
    "significance": "Yalom의 궁극적 관심사 중 가장 기본적인 것으로, 죽음 자각은 변화의 강력한 촉매가 될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 하이데거",
        "name_en": "Martin Heidegger",
        "contribution": "'죽음을 향한 존재(being-toward-death)' 개념으로 죽음 자각의 철학적 기반 제공"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "죽음 자각을 치료적 변화의 촉매로 활용하는 임상적 접근 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "죽음 자각 = 유한성 인식 → 삶의 긴박감과 의미 부여",
      "differential": "죽음 불안은 죽음에 대한 두려움, 죽음 자각은 유한성을 통한 삶의 각성",
      "key_point": "Heidegger: '죽음을 향한 존재', Yalom: 죽음 자각이 삶의 변화 촉매",
      "common_mistake": "죽음 자각을 공포와 동일시하나, 건강한 죽음 자각은 삶을 더 의미 있게 만든다"
    }
  },
  {
    "id": "EXIST_EA_005",
    "terminology": "실존적 불안 (Existential Anxiety)",
    "terminology_ko": "실존적 불안",
    "terminology_en": "Existential Anxiety",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "인간 존재의 근본적 조건(죽음, 자유, 고립, 무의미)을 직면할 때 경험하는 불가피한 불안으로, 신경증적 불안과 달리 제거 대상이 아닌 삶의 자연스러운 부분이다.",
    "definition_en": "The inevitable anxiety experienced when confronting fundamental conditions of human existence (death, freedom, isolation, meaninglessness), a natural part of life rather than something to be eliminated, unlike neurotic anxiety.",
    "significance": "정상적 불안(실존적 불안)과 신경증적 불안을 구별하는 것이 실존주의 상담의 핵심이며, 정상적 불안은 성장의 동기가 된다.",
    "key_researchers": [
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "정상적 불안과 신경증적 불안을 구분하고 불안의 긍정적 기능 강조"
      },
      {
        "name_ko": "쇠렌 키르케고르",
        "name_en": "Søren Kierkegaard",
        "contribution": "불안(Angst)을 자유의 현기증으로 설명한 실존주의 선구자"
      },
      {
        "name_ko": "폴 틸리히",
        "name_en": "Paul Tillich",
        "contribution": "《존재의 용기》에서 불안의 3유형(죽음, 무의미, 정죄) 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "존재의 용기",
        "name_en": "Courage to Be",
        "id": "EXIST_CB_013"
      },
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PSYCHOD_AX_004"
      }
    ],
    "sub_types": [
      {
        "name": "정상적 불안",
        "description": "실존적 조건에 대한 적절한 반응, 성장의 동기"
      },
      {
        "name": "신경증적 불안",
        "description": "정상적 불안을 회피할 때 발생하는 부적응적 불안"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실존적 불안 = 자유의 현기증 (Kierkegaard) = 정상적 삶의 조건",
      "differential": "실존적 불안은 삶의 자연스러운 부분이고 성장의 동기, 신경증적 불안은 실존적 불안의 회피 결과",
      "key_point": "May: 정상적 불안은 제거 대상이 아니라 직면하고 수용해야 할 삶의 조건",
      "common_mistake": "모든 불안을 병리적으로 보고 제거하려 하나, 실존적 불안은 인간 성장의 필수 조건이다"
    }
  },
  {
    "id": "EXIST_AU_006",
    "terminology": "진정성 (Authenticity)",
    "terminology_ko": "진정성",
    "terminology_en": "Authenticity",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "자신의 실존적 조건을 직면하고 수용하며, 타인의 기대나 사회적 압력이 아닌 자기 자신의 가치와 선택에 따라 사는 존재 방식이다.",
    "definition_en": "A mode of being in which one confronts and accepts existential conditions and lives according to one's own values and choices rather than others' expectations or social pressures.",
    "significance": "실존주의 상담의 궁극적 목표이며, Heidegger의 '본래적 존재(eigentlich)'에 기반한 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 하이데거",
        "name_en": "Martin Heidegger",
        "contribution": "본래적 존재(Eigentlichkeit)와 비본래적 존재의 구분 제시"
      },
      {
        "name_ko": "장 폴 사르트르",
        "name_en": "Jean-Paul Sartre",
        "contribution": "자기기만(bad faith)의 개념을 통해 비진정성의 기제 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "자기기만",
        "name_en": "Bad Faith",
        "id": "EXIST_BF_014"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "진정성 = 자기 자신답게 살기 (Heidegger의 본래적 존재)",
      "differential": "Rogers의 일치성은 자기경험과 자기개념의 일치, 실존주의 진정성은 실존적 조건의 직면과 자기선택",
      "key_point": "Heidegger: 본래적 존재(eigentlich) vs 비본래적 존재, Sartre: 자기기만(bad faith) 극복",
      "common_mistake": "진정성을 단순히 솔직함으로 이해하나, 실존적 조건을 직면하며 자기 선택에 따라 사는 것이다"
    }
  },
  {
    "id": "EXIST_EI_007",
    "terminology": "실존적 고립 (Existential Isolation)",
    "terminology_ko": "실존적 고립",
    "terminology_en": "Existential Isolation",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "아무리 친밀한 관계를 맺어도 근본적으로 각자의 세계에 홀로 존재할 수밖에 없다는 인간 존재의 불가피한 조건으로, 대인관계적 고립이나 내면적 고립과 구별된다.",
    "definition_en": "The inevitable condition of human existence that one fundamentally exists alone in one's own world regardless of intimate relationships, distinguished from interpersonal isolation and intrapersonal isolation.",
    "significance": "진정한 친밀감은 실존적 고립을 인정한 위에서만 가능하며, 고립을 부정하면 역설적으로 관계가 왜곡된다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "실존적 고립을 대인관계적·내면적 고립과 구별하여 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "만남",
        "name_en": "Encounter",
        "id": "EXIST_EN_008"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      }
    ],
    "sub_types": [
      {
        "name": "대인관계적 고립",
        "description": "타인과의 관계 부족으로 인한 외로움"
      },
      {
        "name": "내면적 고립",
        "description": "자기 자신의 일부를 차단하여 느끼는 소외"
      },
      {
        "name": "실존적 고립",
        "description": "근본적으로 혼자인 존재 조건"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실존적 고립 = 근본적 홀로 존재 (관계와 무관한 존재론적 조건)",
      "differential": "대인관계적 고립은 관계 부족, 실존적 고립은 관계가 있어도 근본적으로 혼자",
      "key_point": "Yalom: 실존적 고립은 관계가 아닌 존재의 조건이며, 이를 인정해야 진정한 관계가 가능",
      "common_mistake": "실존적 고립을 외로움과 동일시하나, 이는 존재론적 조건이며 관계로 해소되지 않는다"
    }
  },
  {
    "id": "EXIST_EN_008",
    "terminology": "만남 (Encounter)",
    "terminology_ko": "만남",
    "terminology_en": "Encounter",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "실존주의 상담에서 상담자와 내담자가 인간 대 인간으로 진정하게 만나는 것으로, 기법이나 역할을 넘어 존재 자체로 함께하는 관계를 의미한다.",
    "definition_en": "In existential therapy, an authentic meeting between counselor and client as person to person, a relationship of being together that transcends techniques and roles.",
    "significance": "실존주의 상담에서 치료적 관계의 본질로, 만남 자체가 치유의 기제가 된다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 부버",
        "name_en": "Martin Buber",
        "contribution": "나-너(I-Thou) 관계를 통해 진정한 만남의 철학적 기반 제시"
      },
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "만남(encounter)을 실존주의 상담의 핵심 치료 요인으로 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "나-너 관계",
        "name_en": "I-Thou Relationship",
        "id": "EXIST_IT_015"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "실존적 고립",
        "name_en": "Existential Isolation",
        "id": "EXIST_EI_007"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "만남 = 인간 대 인간의 진정한 접촉 (기법을 넘어선 존재의 만남)",
      "differential": "만남은 존재론적 접촉, 작업동맹은 목표·과제·유대의 구조화된 협력 관계",
      "key_point": "Buber의 나-너 관계에 기반한 진정한 만남이 실존주의 상담의 핵심 치유 요인",
      "common_mistake": "만남을 단순한 대면으로 이해하나, 역할과 기법을 넘어 존재로 함께하는 것이다"
    }
  },
  {
    "id": "EXIST_ML_009",
    "terminology": "무의미 (Meaninglessness)",
    "terminology_ko": "무의미",
    "terminology_en": "Meaninglessness",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "삶에 미리 주어진 의미가 없다는 실존적 인식으로, Yalom의 궁극적 관심사 중 하나이다. 의미가 없다는 것은 의미를 스스로 창조해야 한다는 도전을 의미한다.",
    "definition_en": "The existential recognition that life has no pre-given meaning, one of Yalom's ultimate concerns. The absence of inherent meaning implies the challenge of creating meaning for oneself.",
    "significance": "삶의 의미 상실은 실존적 위기와 공허감의 원인이 되며, 의미 창조가 실존주의 상담의 핵심 과제이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "무의미를 궁극적 관심사로 체계화하고 의미 창조의 치료적 접근 개발"
      },
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "실존적 공허와 의미에의 의지를 통한 의미치료 체계 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "실존적 공허",
        "name_en": "Existential Vacuum",
        "id": "EXIST_EV_012"
      },
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무의미 = 삶에 미리 주어진 의미 없음 → 의미를 스스로 창조해야",
      "differential": "무의미는 실존적 조건(의미가 없다), 의미치료는 그에 대한 치료적 응답(의미를 찾는다)",
      "key_point": "삶에 미리 주어진 의미가 없기에, 각자가 의미를 창조하는 것이 실존적 과제",
      "common_mistake": "무의미를 허무주의로 동일시하나, 실존주의에서 무의미는 의미 창조의 출발점이다"
    }
  },
  {
    "id": "EXIST_MN_010",
    "terminology": "삶의 의미 (Meaning of Life)",
    "terminology_ko": "삶의 의미",
    "terminology_en": "Meaning of Life",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "개인이 자신의 삶에서 발견하거나 창조하는 목적과 가치로, Frankl에 따르면 의미에의 의지(will to meaning)가 인간의 가장 근본적인 동기이다.",
    "definition_en": "The purpose and values that individuals discover or create in their lives; according to Frankl, the will to meaning is the most fundamental human motivation.",
    "significance": "Frankl은 의미 추구를 인간의 일차적 동기로 보았으며, 의미의 발견이 극한 상황에서도 생존과 회복의 핵심이라고 강조했다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "의미에의 의지(will to meaning)를 인간의 일차적 동기로 제시"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "삶의 의미를 궁극적 관심사와 연결하여 치료적으로 탐구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의미",
        "name_en": "Meaninglessness",
        "id": "EXIST_ML_009"
      },
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "실존적 공허",
        "name_en": "Existential Vacuum",
        "id": "EXIST_EV_012"
      },
      {
        "name_ko": "자기실현경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "FOUND_SAT_008"
      }
    ],
    "sub_types": [
      {
        "name": "창조적 가치",
        "description": "일이나 활동을 통해 세상에 기여함으로써 의미 발견"
      },
      {
        "name": "경험적 가치",
        "description": "사랑, 자연, 예술 등을 경험함으로써 의미 발견"
      },
      {
        "name": "태도적 가치",
        "description": "고통에 대한 태도를 통해 의미 발견 (불가피한 고통에서)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Frankl의 의미 3원천: 창조(행동)-경험(수용)-태도(고통에 대한 자세)",
      "differential": "의미에의 의지(Frankl)는 의미 추구, 쾌락에의 의지(Freud)는 쾌락 추구, 힘에의 의지(Nietzsche)는 권력 추구",
      "key_point": "Frankl: 의미에의 의지가 인간의 일차적 동기, 3가지 가치(창조적, 경험적, 태도적)를 통해 의미 발견",
      "common_mistake": "의미를 인생의 거창한 목적으로만 생각하나, 일상의 작은 경험에서도 의미를 발견할 수 있다"
    }
  },
  {
    "id": "EXIST_LT_011",
    "terminology": "의미치료 (Logotherapy)",
    "terminology_ko": "의미치료",
    "terminology_en": "Logotherapy",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 창시한 실존분석 기반의 심리치료로, 삶의 의미 발견을 통해 심리적 고통을 극복하도록 돕는 접근이다. 그리스어 logos(의미)에서 유래한다.",
    "definition_en": "A psychotherapy based on existential analysis founded by Frankl that helps overcome psychological suffering through discovering meaning in life, derived from Greek logos (meaning).",
    "significance": "Frankl 자신의 홀로코스트 생존 경험에 기반한 이론으로, 극한 상황에서도 의미를 발견할 수 있다는 강력한 메시지를 전달한다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "의미치료를 창시하고 《죽음의 수용소에서》를 통해 이론의 실제적 기반 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "실존적 공허",
        "name_en": "Existential Vacuum",
        "id": "EXIST_EV_012"
      },
      {
        "name_ko": "역설적 의도",
        "name_en": "Paradoxical Intention",
        "id": "EXIST_PI_016"
      },
      {
        "name_ko": "탈숙고",
        "name_en": "Dereflection",
        "id": "EXIST_DR_017"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Logotherapy = logos(의미) + therapy(치료) = 의미를 통한 치유",
      "differential": "정신분석은 쾌락에의 의지, 개인심리학은 힘에의 의지, 의미치료는 의미에의 의지를 핵심 동기로 봄",
      "key_point": "Frankl: logos(의미)를 통한 치료, 홀로코스트 경험에서 '의미를 가진 삶은 견딜 수 있다'는 것을 발견",
      "common_mistake": "의미치료를 단순히 긍정적 사고로 오해하나, 고통 속에서도 의미를 찾는 깊은 실존적 과정이다"
    }
  },
  {
    "id": "EXIST_EV_012",
    "terminology": "실존적 공허 (Existential Vacuum)",
    "terminology_ko": "실존적 공허",
    "terminology_en": "Existential Vacuum",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 명명한 현대인의 보편적 상태로, 삶의 의미와 목적을 상실하여 공허함과 권태를 경험하는 실존적 위기이다.",
    "definition_en": "A universal condition of modern life named by Frankl, an existential crisis of experiencing emptiness and boredom from losing meaning and purpose in life.",
    "significance": "우울, 중독, 공격성 등 현대 사회 문제의 근원으로 Frankl이 진단한 실존적 상태이다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "실존적 공허를 현대인의 핵심 문제로 진단하고 의미치료의 치료 대상으로 설정"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무의미",
        "name_en": "Meaninglessness",
        "id": "EXIST_ML_009"
      },
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 공허 = 의미 상실 → 공허감 + 권태 (현대인의 보편적 위기)",
      "differential": "실존적 공허는 의미 부재의 상태, 우울증은 기분장애의 임상적 진단",
      "key_point": "Frankl: 현대인의 보편적 문제로, 의미 상실이 다양한 심리적 증상의 근원",
      "common_mistake": "실존적 공허를 임상적 우울증과 동일시하나, 이는 실존적 상태이지 정신과적 진단이 아니다"
    }
  },
  {
    "id": "EXIST_CB_013",
    "terminology": "존재의 용기 (Courage to Be)",
    "terminology_ko": "존재의 용기",
    "terminology_en": "Courage to Be",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Tillich가 제안한 개념으로, 비존재(죽음, 무의미, 정죄)의 불안에도 불구하고 자기 자신으로 존재하는 용기, 즉 불안을 수용하며 살아가는 힘이다.",
    "definition_en": "A concept proposed by Tillich referring to the courage to be oneself despite the anxiety of nonbeing (death, meaninglessness, condemnation)—the power to live while accepting anxiety.",
    "significance": "불안의 제거가 아닌 불안의 수용과 직면이 실존주의 상담의 목표임을 명확히 한 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "폴 틸리히",
        "name_en": "Paul Tillich",
        "contribution": "《존재의 용기》(1952)에서 불안에도 불구하고 자기를 긍정하는 용기 개념 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "존재의 용기 = 불안에도 불구하고 나 자신으로 존재하는 힘",
      "differential": "존재의 용기는 불안의 수용, 방어기제는 불안의 회피",
      "key_point": "Tillich: 비존재의 불안(죽음, 무의미, 정죄)에도 불구하고 자기를 긍정하는 용기",
      "common_mistake": "용기를 두려움의 부재로 오해하나, 두려움이 있음에도 불구하고 행동하는 것이 진정한 용기이다"
    }
  },
  {
    "id": "EXIST_BF_014",
    "terminology": "자기기만 (Bad Faith)",
    "terminology_ko": "자기기만",
    "terminology_en": "Bad Faith",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Sartre가 제시한 개념으로, 자신의 자유와 선택 가능성을 부정하고 외부 요인이나 고정된 본질에 의해 결정되었다고 스스로를 속이는 비진정한 존재 방식이다.",
    "definition_en": "A concept presented by Sartre referring to the inauthentic mode of being in which one denies one's freedom and possibility of choice, deceiving oneself that one is determined by external factors or fixed essence.",
    "significance": "실존주의 상담에서 내담자의 회피와 책임 전가를 이해하는 핵심 개념으로, 자기기만의 극복이 진정성 회복의 조건이다.",
    "key_researchers": [
      {
        "name_ko": "장 폴 사르트르",
        "name_en": "Jean-Paul Sartre",
        "contribution": "《존재와 무》에서 자기기만(mauvaise foi) 개념을 체계적으로 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "FOUND_RS_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기기만(bad faith) = '나는 어쩔 수 없어'라며 자유를 부정하는 것",
      "differential": "자기기만은 자유의 부정(실존주의), 방어기제는 불안의 무의식적 회피(정신분석)",
      "key_point": "Sartre: 자신의 자유를 부정하고 결정론적 핑계 뒤에 숨는 비진정한 존재 방식",
      "common_mistake": "자기기만을 의식적 거짓말과 혼동하나, 자기 자신에게 하는 무의식적 기만이다"
    }
  },
  {
    "id": "EXIST_IT_015",
    "terminology": "나-너 관계 (I-Thou Relationship)",
    "terminology_ko": "나-너 관계",
    "terminology_en": "I-Thou Relationship",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Buber가 제시한 대화철학의 핵심 개념으로, 상대방을 도구나 대상이 아닌 전인적 존재로 만나는 진정한 관계이며, 나-그것(I-It) 관계와 대비된다.",
    "definition_en": "A core concept of Buber's dialogical philosophy referring to a genuine relationship of meeting the other as a whole being rather than as a tool or object, contrasted with the I-It relationship.",
    "significance": "실존주의 상담에서 상담관계의 이상적 모형이며, 게슈탈트 상담과 인간중심상담에도 깊은 영향을 미쳤다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 부버",
        "name_en": "Martin Buber",
        "contribution": "《나와 너》(1923)에서 나-너/나-그것 관계의 철학적 틀 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "만남",
        "name_en": "Encounter",
        "id": "EXIST_EN_008"
      },
      {
        "name_ko": "상담관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "FOUND_EM_021"
      },
      {
        "name_ko": "게슈탈트상담",
        "name_en": "Gestalt Therapy",
        "id": "GESTALT_GT_001"
      }
    ],
    "sub_types": [
      {
        "name": "나-너(I-Thou)",
        "description": "상대를 전인적 존재로 만나는 진정한 관계"
      },
      {
        "name": "나-그것(I-It)",
        "description": "상대를 대상이나 도구로 대하는 비인격적 관계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "나-너 = 전인적 만남, 나-그것 = 도구적 대상화 (Buber)",
      "differential": "나-너 관계는 전인적 만남, 작업동맹은 목표 지향적 협력 관계",
      "key_point": "Buber: 나-너 관계에서 '사이(between)'의 공간이 진정한 대화와 만남의 장",
      "common_mistake": "나-그것 관계를 항상 나쁜 것으로 보나, 일상에서 불가피하며 나-너와 나-그것의 리듬이 필요하다"
    }
  },
  {
    "id": "EXIST_PI_016",
    "terminology": "역설적 의도 (Paradoxical Intention)",
    "terminology_ko": "역설적 의도",
    "terminology_en": "Paradoxical Intention",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 개발한 의미치료의 기법으로, 내담자가 두려워하는 증상을 의도적으로 과장하여 바라도록 하여 예기불안의 악순환을 끊는 역설적 개입이다.",
    "definition_en": "A logotherapy technique developed by Frankl in which the client deliberately exaggerates and wishes for the feared symptom, breaking the vicious cycle of anticipatory anxiety through paradoxical intervention.",
    "significance": "증상에 대한 태도 변화를 통해 치료하는 독창적 기법으로, 이후 역설적 심리치료 발전의 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "역설적 의도를 의미치료의 핵심 기법으로 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "탈숙고",
        "name_en": "Dereflection",
        "id": "EXIST_DR_017"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역설적 의도 = 두려운 것을 일부러 바라기 → 불안의 악순환 끊기",
      "differential": "역설적 의도는 증상을 의도적으로 과장, 체계적 둔감화는 단계적 이완",
      "key_point": "Frankl: 예기불안의 악순환을 끊기 위해 두려워하는 증상을 의도적으로 과장하여 바라게 함",
      "common_mistake": "역설적 의도를 단순한 반어법으로 이해하나, 유머를 활용한 태도 변화가 핵심이다"
    }
  },
  {
    "id": "EXIST_DR_017",
    "terminology": "탈숙고 (Dereflection)",
    "terminology_ko": "탈숙고",
    "terminology_en": "Dereflection",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 개발한 의미치료의 기법으로, 과도한 자기관찰(과잉숙고)에서 벗어나 자기 바깥의 의미 있는 대상이나 활동에 주의를 돌리게 하는 개입이다.",
    "definition_en": "A logotherapy technique developed by Frankl that redirects attention away from excessive self-observation (hyperreflection) toward meaningful objects or activities outside the self.",
    "significance": "과잉숙고가 증상을 악화시키는 경우에 효과적이며, 수행불안이나 불면증 등에 적용된다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "탈숙고를 과잉숙고(hyperreflection)의 치료 기법으로 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "역설적 의도",
        "name_en": "Paradoxical Intention",
        "id": "EXIST_PI_016"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "탈숙고 = 자기에게서 주의를 돌려 의미 있는 것에 집중",
      "differential": "역설적 의도는 두려운 것을 바라기, 탈숙고는 자기관찰에서 주의를 돌리기",
      "key_point": "Frankl: 과도한 자기관찰(과잉숙고)에서 벗어나 자기 바깥의 의미에 주의를 돌림",
      "common_mistake": "탈숙고를 단순한 주의분산으로 보나, 의미 있는 대상에 주의를 돌리는 의도적 과정이다"
    }
  },
  {
    "id": "EXIST_TW_018",
    "terminology": "세계 내 존재 (Being-in-the-World)",
    "terminology_ko": "세계 내 존재",
    "terminology_en": "Being-in-the-World",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Heidegger의 핵심 개념(Dasein의 In-der-Welt-sein)으로, 인간은 세계와 분리된 존재가 아니라 항상 세계 속에서 세계와 관계하며 존재한다는 실존적 구조이다.",
    "definition_en": "Heidegger's core concept (In-der-Welt-sein of Dasein) that humans are not beings separate from the world but always exist in and in relation to the world as an existential structure.",
    "significance": "주체와 객체의 이분법을 극복하는 실존주의 존재론의 근본 개념으로, 현상학적 상담의 철학적 기반이다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 하이데거",
        "name_en": "Martin Heidegger",
        "contribution": "《존재와 시간》(1927)에서 세계 내 존재(In-der-Welt-sein) 개념 제시"
      },
      {
        "name_ko": "루트비히 빈스방어",
        "name_en": "Ludwig Binswanger",
        "contribution": "Heidegger의 세계 내 존재를 현존재분석(Daseinsanalyse)에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "현상학",
        "name_en": "Phenomenology",
        "id": "EXIST_PH_019"
      },
      {
        "name_ko": "세 가지 세계",
        "name_en": "Three Modes of World",
        "id": "EXIST_TM_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "세계 내 존재 = 인간은 항상 세계 속에서 세계와 관계하며 존재",
      "differential": "Freud의 정신내적 모형은 개인 내부에 초점, 세계 내 존재는 세계와의 관계에 초점",
      "key_point": "Heidegger: 인간(Dasein)은 세계와 분리 불가능하며, 항상 세계 속에서 존재한다",
      "common_mistake": "세계 내 존재를 단순히 '세상에 살고 있다'로 해석하나, 존재론적 구조를 의미한다"
    }
  },
  {
    "id": "EXIST_PH_019",
    "terminology": "현상학 (Phenomenology)",
    "terminology_ko": "현상학",
    "terminology_en": "Phenomenology",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Husserl이 창시한 철학적 방법론으로, 선입견을 배제하고(판단중지, epoché) 체험되는 그대로의 현상을 기술하는 접근이다. 실존주의 상담의 철학적 방법론적 기반이다.",
    "definition_en": "A philosophical methodology founded by Husserl that describes phenomena as experienced by suspending preconceptions (epoché), serving as the philosophical and methodological foundation of existential therapy.",
    "significance": "내담자의 주관적 경험을 있는 그대로 이해하려는 상담 태도의 철학적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "에드문트 후설",
        "name_en": "Edmund Husserl",
        "contribution": "현상학적 방법론(판단중지, 지향성 개념) 창시"
      },
      {
        "name_ko": "마르틴 하이데거",
        "name_en": "Martin Heidegger",
        "contribution": "현상학을 존재론에 적용하여 실존적 현상학으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세계 내 존재",
        "name_en": "Being-in-the-World",
        "id": "EXIST_TW_018"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "FOUND_EM_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "현상학 = 판단중지(epoché) + 있는 그대로의 경험 기술",
      "differential": "현상학은 경험 그 자체를 기술, 해석학은 경험의 의미를 해석",
      "key_point": "Husserl의 판단중지(epoché): 선입견을 괄호 치고 현상을 있는 그대로 기술",
      "common_mistake": "현상학을 단순한 주관적 관점으로 오해하나, 체계적인 철학적 방법론이다"
    }
  },
  {
    "id": "EXIST_TM_020",
    "terminology": "세 가지 세계 (Three Modes of World)",
    "terminology_ko": "세 가지 세계",
    "terminology_en": "Three Modes of World",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Binswanger와 Boss가 구분한 인간 존재의 3가지 차원으로, 주위세계(Umwelt, 자연/생물학적), 공동세계(Mitwelt, 대인관계), 고유세계(Eigenwelt, 자기 자신과의 관계)이다.",
    "definition_en": "Three dimensions of human existence distinguished by Binswanger and Boss: Umwelt (natural/biological world), Mitwelt (interpersonal world), and Eigenwelt (world of self-relationship).",
    "significance": "인간 존재를 다차원적으로 이해하는 틀로, 내담자의 문제를 3가지 세계의 관점에서 포괄적으로 평가할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "루트비히 빈스방어",
        "name_en": "Ludwig Binswanger",
        "contribution": "현존재분석에서 세 가지 세계 개념 체계화"
      },
      {
        "name_ko": "메다르트 보스",
        "name_en": "Medard Boss",
        "contribution": "Heidegger의 존재론을 심리치료에 직접 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세계 내 존재",
        "name_en": "Being-in-the-World",
        "id": "EXIST_TW_018"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      },
      {
        "name_ko": "실존적 고립",
        "name_en": "Existential Isolation",
        "id": "EXIST_EI_007"
      }
    ],
    "sub_types": [
      {
        "name": "주위세계(Umwelt)",
        "description": "물리적·생물학적 세계, 신체와 환경과의 관계"
      },
      {
        "name": "공동세계(Mitwelt)",
        "description": "타인과의 관계, 대인관계의 세계"
      },
      {
        "name": "고유세계(Eigenwelt)",
        "description": "자기 자신과의 관계, 자기인식과 자기이해의 세계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "3세계: 움(Umwelt, 자연)-밋(Mitwelt, 타인)-아이(Eigenwelt, 자기)",
      "differential": "주위세계는 생물학적 존재, 공동세계는 사회적 존재, 고유세계는 자기 관계적 존재",
      "key_point": "Umwelt(자연세계), Mitwelt(대인세계), Eigenwelt(자기세계)의 3차원",
      "common_mistake": "세 세계를 분리된 것으로 보나, 하나의 존재가 동시에 경험하는 세 가지 차원이다"
    }
  },
  {
    "id": "EXIST_DG_021",
    "terminology": "실존적 죄책감 (Existential Guilt)",
    "terminology_ko": "실존적 죄책감",
    "terminology_en": "Existential Guilt",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "자신의 잠재력을 실현하지 못하거나 진정한 삶을 살지 못할 때 경험하는 존재론적 죄책감으로, 신경증적 죄책감과 구별되는 정상적이고 건설적인 감정이다.",
    "definition_en": "An ontological guilt experienced when failing to realize one's potential or live authentically, a normal and constructive emotion distinguished from neurotic guilt.",
    "significance": "실존적 죄책감은 자기실현의 동기가 될 수 있으며, 이를 무시하면 신경증적 증상으로 발전할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "실존적 죄책감을 3가지 세계(Umwelt, Mitwelt, Eigenwelt)와 연결"
      },
      {
        "name_ko": "마르틴 부버",
        "name_en": "Martin Buber",
        "contribution": "진정한 죄책감과 거짓 죄책감의 구분 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "세 가지 세계",
        "name_en": "Three Modes of World",
        "id": "EXIST_TM_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 죄책감 = 진정한 삶을 살지 못한 것에 대한 자각",
      "differential": "실존적 죄책감은 잠재력 미실현에 대한 건설적 반응, 신경증적 죄책감은 비합리적 자기비난",
      "key_point": "May: 3세계 각각에서 발생 — 자연 파괴(Umwelt), 타인 관계 왜곡(Mitwelt), 자기 부정(Eigenwelt)",
      "common_mistake": "모든 죄책감을 병리적으로 보나, 실존적 죄책감은 성장의 동기가 되는 건강한 감정이다"
    }
  },
  {
    "id": "EXIST_WP_022",
    "terminology": "의지와 소원 (Will and Wish)",
    "terminology_ko": "의지와 소원",
    "terminology_en": "Will and Wish",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "May가 제시한 개념으로, 소원(wish)은 변화에 대한 바람이고 의지(will)는 소원을 실현하기 위한 행동적 결단이며, 상담의 과정은 소원에서 의지로의 전환을 돕는 것이다.",
    "definition_en": "Concepts presented by May where wish represents the desire for change and will represents the behavioral commitment to realize that wish, with the counseling process helping the transition from wish to will.",
    "significance": "통찰만으로는 변화가 일어나지 않으며, 의지적 결단이 필요하다는 실존주의적 변화 모형을 제시한다.",
    "key_researchers": [
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "《사랑과 의지》(Love and Will)에서 의지와 소원의 관계 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "FOUND_IN_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소원(바람) → 의지(결단) → 행동(변화) : May의 변화 경로",
      "differential": "소원은 수동적 바람, 의지는 능동적 결단과 행동",
      "key_point": "May: 상담은 소원(wish)에서 의지(will)로의 전환, 즉 바람에서 결단으로의 이행을 돕는 과정",
      "common_mistake": "의지를 단순한 의지력(willpower)으로 오해하나, 존재의 깊이에서 나오는 결단을 의미한다"
    }
  },
  {
    "id": "EXIST_DM_023",
    "terminology": "데이먼 (Daimonic)",
    "terminology_ko": "데이먼",
    "terminology_en": "Daimonic",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "May가 제시한 개념으로, 인간을 사로잡을 수 있는 강력한 자연적 힘(성, 분노, 권력에의 의지 등)으로, 통합되면 창조성이 되고 억압되면 파괴적이 된다.",
    "definition_en": "A concept by May referring to powerful natural forces (sex, anger, will to power) that can possess a person, becoming creative when integrated and destructive when repressed.",
    "significance": "선과 악의 이분법을 넘어 인간의 파괴적 충동도 창조적으로 통합할 수 있다는 실존주의적 인간관을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "롤로 메이",
        "name_en": "Rollo May",
        "contribution": "《사랑과 의지》에서 데이먼 개념을 현대 실존주의 심리학에 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "그림자",
        "name_en": "Shadow",
        "id": "PSYCHOD_SH_035"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "데이먼 = 강력한 자연적 힘, 통합=창조, 억압=파괴",
      "differential": "Freud의 리비도는 성적 충동, May의 데이먼은 성, 분노, 권력 등을 포괄하는 넓은 힘",
      "key_point": "May: 데이먼은 선도 악도 아닌 강력한 힘, 통합하면 창조적, 억압하면 파괴적",
      "common_mistake": "데이먼(daimonic)을 악마(demonic)와 혼동하나, 데이먼은 선악 이전의 자연적 힘이다"
    }
  },
  {
    "id": "EXIST_FL_024",
    "terminology": "던져진 존재 (Thrownness)",
    "terminology_ko": "던져진 존재",
    "terminology_en": "Thrownness",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Heidegger의 개념(Geworfenheit)으로, 인간이 자신의 선택 없이 특정 시대, 장소, 가족, 신체 조건에 이미 던져져 있다는 실존적 사실이다.",
    "definition_en": "Heidegger's concept (Geworfenheit) referring to the existential fact that humans find themselves already thrown into a specific era, place, family, and bodily condition without their choice.",
    "significance": "자유와 선택의 한계를 인정하는 실존주의적 개념으로, 인간은 던져진 조건 위에서 자기를 투기(project)한다.",
    "key_researchers": [
      {
        "name_ko": "마르틴 하이데거",
        "name_en": "Martin Heidegger",
        "contribution": "던져진 존재(Geworfenheit) 개념을 통해 실존의 비선택적 측면 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세계 내 존재",
        "name_en": "Being-in-the-World",
        "id": "EXIST_TW_018"
      },
      {
        "name_ko": "자유와 책임",
        "name_en": "Freedom and Responsibility",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "던져진 존재 = 내가 선택하지 않은 조건(시대, 장소, 가족)에 이미 놓여있음",
      "differential": "던져진 존재는 주어진 조건(사실성), 투기(project)는 미래를 향한 자유로운 선택",
      "key_point": "Heidegger: 인간은 선택 없이 던져졌지만, 던져진 조건 위에서 자기를 투기(기획)할 수 있다",
      "common_mistake": "던져진 존재를 운명론과 동일시하나, 던져진 조건 위에서의 선택이 실존주의의 핵심이다"
    }
  },
  {
    "id": "EXIST_EC_025",
    "terminology": "실존적 위기 (Existential Crisis)",
    "terminology_ko": "실존적 위기",
    "terminology_en": "Existential Crisis",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "죽음, 상실, 전환점 등을 계기로 삶의 의미, 정체성, 가치관에 대한 근본적 의문이 촉발되는 심리적 위기 상태로, 성장의 기회이기도 하다.",
    "definition_en": "A psychological crisis state triggered by death, loss, or life transitions that provokes fundamental questions about meaning, identity, and values, also serving as an opportunity for growth.",
    "significance": "실존주의 상담에서 위기는 단순한 문제가 아니라 삶을 재구성하고 진정성을 회복할 수 있는 전환점으로 본다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "경계상황(죽음, 상실 등)이 궁극적 관심사에 대한 자각을 촉진한다고 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "죽음 자각",
        "name_en": "Death Awareness",
        "id": "EXIST_DA_004"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "실존적 불안",
        "name_en": "Existential Anxiety",
        "id": "EXIST_EA_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 위기 = 경계상황 → 근본적 질문 촉발 → 성장의 기회",
      "differential": "실존적 위기는 삶의 의미에 대한 근본적 질문, 심리적 위기는 특정 사건에 대한 적응 곤란",
      "key_point": "Yalom: 경계상황(boundary situation)이 궁극적 관심사에 대한 자각을 촉진하여 변화의 촉매가 됨",
      "common_mistake": "실존적 위기를 병리적 상태로만 보나, 삶을 재구성하는 성장의 기회이기도 하다"
    }
  },
  {
    "id": "EXIST_RR_026",
    "terminology": "관계의 기반 (Relational Groundedness)",
    "terminology_ko": "관계의 기반",
    "terminology_en": "Relational Groundedness",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "실존적 고립을 인정하면서도 타인과 진정한 연결을 추구하는 능력으로, 의존이 아닌 자립적 존재로서 관계를 맺는 성숙한 방식이다.",
    "definition_en": "The ability to pursue genuine connection with others while acknowledging existential isolation, a mature way of relating as an independent being rather than through dependency.",
    "significance": "실존적 고립의 수용이 역설적으로 더 깊고 진정한 관계를 가능하게 한다는 실존주의의 핵심 통찰이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "실존적 고립의 인정이 진정한 관계의 조건임을 임상적으로 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존적 고립",
        "name_en": "Existential Isolation",
        "id": "EXIST_EI_007"
      },
      {
        "name_ko": "만남",
        "name_en": "Encounter",
        "id": "EXIST_EN_008"
      },
      {
        "name_ko": "나-너 관계",
        "name_en": "I-Thou Relationship",
        "id": "EXIST_IT_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "고립 인정 → 역설적으로 → 더 깊은 관계 가능",
      "differential": "의존적 관계는 고립 회피, 관계의 기반은 고립 수용 후 자립적으로 관계 맺기",
      "key_point": "실존적 고립을 인정한 위에서 맺는 관계가 진정으로 깊고 의미 있다",
      "common_mistake": "실존적 고립을 인정하면 관계가 어려워진다고 오해하나, 오히려 더 진정한 관계가 가능해진다"
    }
  },
  {
    "id": "EXIST_RM_027",
    "terminology": "파문 효과 (Ripple Effect)",
    "terminology_ko": "파문 효과",
    "terminology_en": "Ripple Effect",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Yalom이 죽음 불안에 대한 대처 방안으로 제시한 개념으로, 자신의 삶이 타인에게 미치는 영향이 자신의 죽음 이후에도 계속된다는 인식이 죽음 불안을 완화한다.",
    "definition_en": "A concept presented by Yalom as a coping mechanism for death anxiety, where recognizing that one's life impacts others and continues beyond one's death alleviates death anxiety.",
    "significance": "죽음의 공포에 직접 맞서기 어려울 때, 삶의 영향력이 지속된다는 인식이 위안이 되는 실존적 대처 전략이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "파문 효과를 죽음 불안의 건강한 대처 방안으로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "죽음 자각",
        "name_en": "Death Awareness",
        "id": "EXIST_DA_004"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "파문 효과 = 내 삶의 영향이 죽음 이후에도 물결처럼 퍼져나감",
      "differential": "파문 효과는 타인에 대한 영향의 지속, 의미치료는 삶 속에서 의미를 발견하는 것",
      "key_point": "Yalom: 자신의 삶이 타인에게 미친 긍정적 영향이 죽음 이후에도 계속된다는 인식",
      "common_mistake": "파문 효과를 유명해지는 것과 혼동하나, 일상적 관계에서의 작은 영향력도 포함한다"
    }
  },
  {
    "id": "EXIST_BS_028",
    "terminology": "경계상황 (Boundary Situation)",
    "terminology_ko": "경계상황",
    "terminology_en": "Boundary Situation",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Jaspers가 제안한 개념으로, 죽음, 고통, 투쟁, 죄책감 등 인간이 피할 수 없는 극한적 상황으로, 이를 직면할 때 실존적 자각과 변화가 촉진된다.",
    "definition_en": "A concept proposed by Jaspers referring to unavoidable extreme situations such as death, suffering, struggle, and guilt, whose confrontation facilitates existential awareness and change.",
    "significance": "경계상황의 직면이 존재의 깊이를 자각하게 하는 계기가 되며, Yalom은 이를 '각성 경험'으로 활용한다.",
    "key_researchers": [
      {
        "name_ko": "카를 야스퍼스",
        "name_en": "Karl Jaspers",
        "contribution": "경계상황(Grenzsituation) 개념을 통해 실존적 자각의 조건 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실존적 위기",
        "name_en": "Existential Crisis",
        "id": "EXIST_EC_025"
      },
      {
        "name_ko": "죽음 자각",
        "name_en": "Death Awareness",
        "id": "EXIST_DA_004"
      },
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경계상황 = 피할 수 없는 극한 상황(죽음, 고통, 투쟁, 죄) → 실존적 각성",
      "differential": "경계상황은 Jaspers의 철학적 개념, 실존적 위기는 임상적 상태",
      "key_point": "Jaspers: 죽음, 고통, 투쟁, 죄책감 등 피할 수 없는 상황이 존재의 깊이를 드러냄",
      "common_mistake": "경계상황을 단순한 위기로 보나, 존재의 근본적 조건에 대한 자각의 계기이다"
    }
  },
  {
    "id": "EXIST_SC_029",
    "terminology": "자기초월 (Self-Transcendence)",
    "terminology_ko": "자기초월",
    "terminology_en": "Self-Transcendence",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 강조한 인간의 근본적 능력으로, 자기 자신을 넘어 타인, 대의, 의미 있는 가치를 향해 나아가는 것이며, 이를 통해 자기실현이 부수적으로 달성된다.",
    "definition_en": "A fundamental human capacity emphasized by Frankl to go beyond oneself toward others, causes, and meaningful values, through which self-actualization is achieved as a byproduct.",
    "significance": "Frankl은 자기실현을 직접 추구하면 달성되지 않으며, 자기초월의 부산물로만 달성된다고 보았다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "자기초월을 인간 존재의 본질적 특성으로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "자기실현경향성",
        "name_en": "Self-Actualizing Tendency",
        "id": "FOUND_SAT_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기초월 = 자기를 넘어서 의미를 향해 → 자기실현은 그 부산물",
      "differential": "자기실현은 자기 잠재력 실현(Maslow), 자기초월은 자기를 넘어 의미에 헌신(Frankl)",
      "key_point": "Frankl: 자기실현은 직접 추구할 수 없고, 자기초월의 부산물로만 달성된다",
      "common_mistake": "자기초월을 자기희생과 동일시하나, 의미 있는 대상에 자발적으로 헌신하는 것이다"
    }
  },
  {
    "id": "EXIST_OB_030",
    "terminology": "존재 양식 (Modes of Being)",
    "terminology_ko": "존재 양식",
    "terminology_en": "Modes of Being",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Emmy van Deurzen이 체계화한 실존주의 상담의 탐색 영역으로, 물리적·사회적·심리적·영적 차원에서 내담자의 존재 방식을 탐구하는 틀이다.",
    "definition_en": "Areas of exploration in existential therapy systematized by Emmy van Deurzen, a framework for exploring the client's way of being across physical, social, psychological, and spiritual dimensions.",
    "significance": "현대 실존주의 상담의 실제적 구조를 제공하며, 내담자의 세계를 다차원적으로 탐색할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "에미 반 더젠",
        "name_en": "Emmy van Deurzen",
        "contribution": "실존주의 상담의 4차원 존재 양식을 체계화하고 실제적 적용 모형 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세 가지 세계",
        "name_en": "Three Modes of World",
        "id": "EXIST_TM_020"
      },
      {
        "name_ko": "세계 내 존재",
        "name_en": "Being-in-the-World",
        "id": "EXIST_TW_018"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_ET_001"
      }
    ],
    "sub_types": [
      {
        "name": "물리적 차원",
        "description": "신체, 건강, 환경과의 관계"
      },
      {
        "name": "사회적 차원",
        "description": "타인, 문화, 사회와의 관계"
      },
      {
        "name": "심리적 차원",
        "description": "자기 자신, 정체성, 내면세계와의 관계"
      },
      {
        "name": "영적 차원",
        "description": "가치, 의미, 이상, 세계관과의 관계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "존재 4차원: 물(물리)-사(사회)-심(심리)-영(영적)",
      "differential": "세 가지 세계(Binswanger)는 3차원, 존재 양식(van Deurzen)은 영적 차원을 추가한 4차원",
      "key_point": "van Deurzen: 물리적, 사회적, 심리적, 영적 4차원에서 존재 방식 탐구",
      "common_mistake": "영적 차원을 종교적 차원으로만 이해하나, 가치관, 의미, 세계관 전반을 포함한다"
    }
  },
  {
    "id": "EXIST_WM_031",
    "terminology": "의미에의 의지 (Will to Meaning)",
    "terminology_ko": "의미에의 의지",
    "terminology_en": "Will to Meaning",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "Frankl이 인간의 일차적 동기로 제시한 개념으로, 삶에서 의미를 발견하고 실현하려는 근본적 추진력이다. Freud의 쾌락에의 의지, Adler의 힘에의 의지와 대비된다.",
    "definition_en": "The concept presented by Frankl as the primary human motivation, the fundamental drive to discover and realize meaning in life, contrasted with Freud's will to pleasure and Adler's will to power.",
    "significance": "의미치료의 이론적 핵심으로, 인간의 일차적 동기가 쾌락이나 권력이 아닌 의미 추구라는 새로운 동기 이론을 제시했다.",
    "key_researchers": [
      {
        "name_ko": "빅토르 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "의미에의 의지를 인간의 일차적 동기로 제시하고 의미치료의 이론적 토대 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의미치료",
        "name_en": "Logotherapy",
        "id": "EXIST_LT_011"
      },
      {
        "name_ko": "삶의 의미",
        "name_en": "Meaning of Life",
        "id": "EXIST_MN_010"
      },
      {
        "name_ko": "실존적 공허",
        "name_en": "Existential Vacuum",
        "id": "EXIST_EV_012"
      },
      {
        "name_ko": "우월성 추구",
        "name_en": "Striving for Superiority",
        "id": "PSYCHOD_SS_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "3가지 의지: Freud(쾌락) vs Adler(힘) vs Frankl(의미)",
      "differential": "쾌락에의 의지(Freud): 쾌락 추구, 힘에의 의지(Adler): 우월성 추구, 의미에의 의지(Frankl): 의미 추구",
      "key_point": "Frankl: 인간의 일차적 동기는 쾌락이나 권력이 아닌 의미의 발견과 실현",
      "common_mistake": "의미에의 의지가 좌절되면 쾌락이나 권력에의 의지가 보상적으로 강해진다"
    }
  },
  {
    "id": "EXIST_SA_032",
    "terminology": "실존적 자각 (Existential Awareness)",
    "terminology_ko": "실존적 자각",
    "terminology_en": "Existential Awareness",
    "category": "EXIST",
    "category_name": "실존주의 상담 (Existential Therapy)",
    "definition": "인간 존재의 근본적 조건(유한성, 자유, 고립, 의미 부재)에 대한 깊은 인식으로, 실존주의 상담에서 치료적 변화의 출발점이 된다.",
    "definition_en": "A deep recognition of the fundamental conditions of human existence (finitude, freedom, isolation, absence of meaning), serving as the starting point of therapeutic change in existential therapy.",
    "significance": "실존적 자각이 일어날 때 내담자는 삶을 새로운 관점에서 바라보게 되며, 진정한 변화의 동기가 형성된다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "경계상황을 통한 실존적 자각의 촉진을 치료적 전략으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "궁극적 관심사",
        "name_en": "Ultimate Concerns",
        "id": "EXIST_UC_002"
      },
      {
        "name_ko": "경계상황",
        "name_en": "Boundary Situation",
        "id": "EXIST_BS_028"
      },
      {
        "name_ko": "죽음 자각",
        "name_en": "Death Awareness",
        "id": "EXIST_DA_004"
      },
      {
        "name_ko": "실존적 위기",
        "name_en": "Existential Crisis",
        "id": "EXIST_EC_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 자각 = 존재 조건의 깊은 인식 → 변화의 출발점",
      "differential": "통찰은 개인적 패턴의 인식, 실존적 자각은 존재 조건 자체의 인식",
      "key_point": "경계상황(죽음, 상실 등)을 통해 촉진되며, 진정한 삶으로의 전환을 이끈다",
      "common_mistake": "실존적 자각을 지적 이해로 충분하다고 보나, 전존재적 경험이 필요하다"
    }
  }
];

TERMS_DATA.PERSON = [
  {
    "id": "PERSON_PC_001",
    "terminology": "인간중심 상담 (Person-Centered Therapy)",
    "terminology_ko": "인간중심 상담",
    "terminology_en": "Person-Centered Therapy",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "칼 로저스가 개발한 인본주의적 상담 접근으로, 내담자의 자기실현 경향성을 신뢰하고 상담자의 태도적 조건을 통해 내담자의 성장을 촉진하는 비지시적 치료법이다.",
    "definition_en": "A humanistic counseling approach developed by Carl Rogers that trusts the client's actualizing tendency and facilitates growth through the therapist's attitudinal conditions in a non-directive manner.",
    "significance": "상담의 관계적 측면을 강조하며, 모든 상담 이론의 공통 요인으로서 치료적 관계의 중요성을 확립하는 데 핵심적 역할을 했다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심 상담의 창시자로서 핵심 조건과 자기실현 경향성 개념을 제시"
      },
      {
        "name_ko": "나탈리 로저스",
        "name_en": "Natalie Rogers",
        "contribution": "표현예술치료를 인간중심 접근에 통합"
      },
      {
        "name_ko": "브라이언 소른",
        "name_en": "Brian Thorne",
        "contribution": "현대 인간중심 상담의 발전과 영성적 측면 탐구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기실현 경향성",
        "name_en": "Actualizing Tendency",
        "id": "PERSON_AT_002"
      },
      {
        "name_ko": "충분히 기능하는 사람",
        "name_en": "Fully Functioning Person",
        "id": "PERSON_FF_003"
      },
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "상담",
        "name_en": "Counseling",
        "id": "FOUND_CF_001"
      }
    ],
    "sub_types": [
      {
        "name": "비지시적 상담기 (1940s)",
        "description": "내담자의 감정 반영에 초점을 맞춘 초기 단계"
      },
      {
        "name": "내담자중심 상담기 (1950s)",
        "description": "내담자의 내적 준거틀을 강조한 중기 단계"
      },
      {
        "name": "인간중심 상담기 (1960s~)",
        "description": "상담 이외의 영역으로 확장된 후기 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "로저스의 3대 핵심 조건: 공감, 무조건적 긍정적 존중, 진정성",
      "differential": "정신분석과 달리 과거보다 현재의 경험과 관계를 강조하며, 해석보다 반영을 사용한다",
      "key_point": "상담자의 태도가 기법보다 중요하다는 관점이 핵심이다",
      "common_mistake": "비지시적이라고 해서 상담자가 아무것도 하지 않는 것이 아니라, 적극적으로 공감하고 존중하는 태도를 유지한다"
    }
  },
  {
    "id": "PERSON_AT_002",
    "terminology": "자기실현 경향성 (Actualizing Tendency)",
    "terminology_ko": "자기실현 경향성",
    "terminology_en": "Actualizing Tendency",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "모든 유기체에 내재된 성장, 발전, 잠재력 실현을 향한 근본적인 동기적 힘으로, 인간중심 상담의 이론적 토대가 되는 핵심 개념이다.",
    "definition_en": "A fundamental motivational force inherent in all organisms toward growth, development, and fulfillment of potential, serving as the theoretical foundation of person-centered therapy.",
    "significance": "인간의 본성을 긍정적으로 보는 인본주의 심리학의 핵심 가정으로, 내담자가 스스로 성장할 수 있다는 상담의 철학적 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "실현 경향성을 유기체의 유일한 동기적 힘으로 개념화"
      },
      {
        "name_ko": "커트 골드스타인",
        "name_en": "Kurt Goldstein",
        "contribution": "자기실현 개념을 최초로 체계화하여 로저스에게 영향"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 상담",
        "name_en": "Person-Centered Therapy",
        "id": "PERSON_PC_001"
      },
      {
        "name_ko": "충분히 기능하는 사람",
        "name_en": "Fully Functioning Person",
        "id": "PERSON_FF_003"
      },
      {
        "name_ko": "유기체적 가치화 과정",
        "name_en": "Organismic Valuing Process",
        "id": "PERSON_OV_005"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감자씨를 어두운 곳에 두어도 싹이 나는 것처럼, 인간도 어떤 환경에서든 성장하려는 경향이 있다",
      "differential": "매슬로우의 자기실현(self-actualization)은 욕구위계의 최상위이지만, 로저스의 실현 경향성은 유일한 동기적 힘이다",
      "key_point": "실현 경향성은 학습되는 것이 아니라 유기체에 내재된 것이다",
      "common_mistake": "자기실현 경향성은 매슬로우가 아닌 로저스의 핵심 개념이며, 두 개념의 의미가 다르다"
    }
  },
  {
    "id": "PERSON_FF_003",
    "terminology": "충분히 기능하는 사람 (Fully Functioning Person)",
    "terminology_ko": "충분히 기능하는 사람",
    "terminology_en": "Fully Functioning Person",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "실현 경향성이 최대한 발휘되어 경험에 개방적이고, 실존적으로 살며, 자신의 유기체적 경험을 신뢰하는 이상적인 심리적 건강 상태에 있는 사람을 의미한다.",
    "definition_en": "A person in an ideal state of psychological health where the actualizing tendency is fully expressed, characterized by openness to experience, existential living, and trust in one's organismic experience.",
    "significance": "인간중심 상담이 지향하는 상담 목표이자 심리적 건강의 모델로서, 상담의 방향성을 제시한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "충분히 기능하는 사람의 5가지 특성을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기실현 경향성",
        "name_en": "Actualizing Tendency",
        "id": "PERSON_AT_002"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "충분히 기능하는 사람의 5특성: 경험 개방성, 실존적 삶, 유기체적 신뢰, 자유 경험, 창조성",
      "differential": "매슬로우의 자기실현인과 유사하나, 로저스는 도달점이 아닌 과정으로서 강조했다",
      "key_point": "완벽한 상태가 아니라 지속적으로 성장하는 과정에 있는 사람을 뜻한다",
      "common_mistake": "충분히 기능하는 사람은 고정된 목표가 아니라 끊임없이 변화하는 과정적 개념이다"
    }
  },
  {
    "id": "PERSON_CC_004",
    "terminology": "핵심 조건 (Core Conditions)",
    "terminology_ko": "핵심 조건",
    "terminology_en": "Core Conditions",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "로저스가 제시한 치료적 변화를 위한 필요충분조건으로, 공감적 이해, 무조건적 긍정적 존중, 일치성(진정성)의 세 가지 상담자 태도를 핵심으로 포함하는 6가지 조건을 말한다.",
    "definition_en": "The necessary and sufficient conditions for therapeutic change proposed by Rogers, with three core therapist attitudes: empathic understanding, unconditional positive regard, and congruence (genuineness), as part of six total conditions.",
    "significance": "상담에서 기법보다 관계적 태도가 중요하다는 혁명적 관점을 확립하여, 모든 상담 접근의 공통 요인 연구에 기초를 제공했다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "1957년 논문에서 치료적 성격 변화의 필요충분조건 6가지 제시"
      },
      {
        "name_ko": "로버트 카크허프",
        "name_en": "Robert Carkhuff",
        "contribution": "핵심 조건의 수준을 측정하는 척도를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      }
    ],
    "sub_types": [
      {
        "name": "상담자 조건",
        "description": "일치성, 무조건적 긍정적 존중, 공감적 이해의 3가지 태도"
      },
      {
        "name": "관계 조건",
        "description": "심리적 접촉, 내담자의 불일치, 내담자의 지각을 포함한 전체 6조건"
      }
    ],
    "quiz_hints": {
      "mnemonic": "핵심 조건 3가지: 공(공감), 무(무조건적 긍정적 존중), 일(일치성)",
      "differential": "정신분석의 치료적 동맹과 달리, 핵심 조건은 그 자체로 치료적 변화의 충분조건이라고 본다",
      "key_point": "로저스는 이 조건들이 '필요충분조건'이라고 주장했으나, 현대 연구에서는 '필요조건'으로 보는 경향이 있다",
      "common_mistake": "핵심 조건은 3가지(공감, 존중, 일치성)이지만, 로저스가 제시한 전체 조건은 6가지이다"
    }
  },
  {
    "id": "PERSON_OV_005",
    "terminology": "유기체적 가치화 과정 (Organismic Valuing Process)",
    "terminology_ko": "유기체적 가치화 과정",
    "terminology_en": "Organismic Valuing Process",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "유기체가 경험을 자기실현에 도움이 되는지 여부에 따라 긍정적 또는 부정적으로 평가하는 내적인 가치 판단 과정으로, 외부 가치 조건에 의해 왜곡될 수 있다.",
    "definition_en": "An internal valuing process by which the organism evaluates experiences as positive or negative based on whether they promote or hinder self-actualization, which can be distorted by external conditions of worth.",
    "significance": "내담자가 자신의 내적 경험을 신뢰할 수 있도록 돕는 상담의 근거를 제공하며, 가치 조건과의 대비를 통해 부적응의 원인을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "유기체적 가치화 과정의 개념을 성격이론에 통합"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기실현 경향성",
        "name_en": "Actualizing Tendency",
        "id": "PERSON_AT_002"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "어린아이가 배고프면 울고, 배부르면 웃는 것이 유기체적 가치화 과정의 원초적 형태이다",
      "differential": "외부에서 주입된 가치 조건(conditions of worth)과 대비되는 내적 평가 과정이다",
      "key_point": "건강한 성격 발달은 유기체적 가치화 과정이 자유롭게 작동할 때 이루어진다",
      "common_mistake": "유기체적 가치화 과정은 의식적 판단이 아니라 유기체 수준의 본능적 평가 과정이다"
    }
  },
  {
    "id": "PERSON_SC_006",
    "terminology": "자기개념 (Self-Concept)",
    "terminology_ko": "자기개념",
    "terminology_en": "Self-Concept",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "개인이 자기 자신에 대해 가지고 있는 조직화된 지각과 믿음의 총체로, 경험과 타인의 평가에 의해 형성되며 행동과 경험의 해석에 영향을 미친다.",
    "definition_en": "The organized set of perceptions and beliefs an individual holds about oneself, formed through experience and others' evaluations, influencing behavior and interpretation of experience.",
    "significance": "자기개념과 실제 경험 간의 불일치가 심리적 부적응의 핵심 원인이라는 로저스 성격이론의 중심 구성개념이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "자기개념을 성격이론의 중심에 놓고 일치/불일치 이론을 체계화"
      },
      {
        "name_ko": "빅터 레이미",
        "name_en": "Victor Raimy",
        "contribution": "자기개념의 변화가 상담의 핵심 과정임을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상적 자기",
        "name_en": "Ideal Self",
        "id": "PERSON_IS_012"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      }
    ],
    "sub_types": [
      {
        "name": "현실적 자기 (Real Self)",
        "description": "현재 자신이 어떤 사람인지에 대한 지각"
      },
      {
        "name": "이상적 자기 (Ideal Self)",
        "description": "되고 싶은 자신의 모습에 대한 지각"
      }
    ],
    "quiz_hints": {
      "mnemonic": "'나는 ~한 사람이다'라는 자기에 대한 종합적 믿음의 체계",
      "differential": "정신분석의 자아(ego)가 구조적 개념인 반면, 자기개념은 현상학적이고 경험적인 개념이다",
      "key_point": "자기개념은 고정불변이 아니라 경험을 통해 변화할 수 있는 유동적 구조이다",
      "common_mistake": "자기개념은 자존감(self-esteem)과 다른 개념으로, 자존감은 자기개념의 평가적 측면에 해당한다"
    }
  },
  {
    "id": "PERSON_OE_007",
    "terminology": "경험에 대한 개방성 (Openness to Experience)",
    "terminology_ko": "경험에 대한 개방성",
    "terminology_en": "Openness to Experience",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자신의 내적 경험과 감정을 왜곡이나 부인 없이 있는 그대로 자각하고 수용할 수 있는 능력으로, 충분히 기능하는 사람의 핵심 특성이다.",
    "definition_en": "The ability to perceive and accept one's internal experiences and feelings without distortion or denial, a core characteristic of the fully functioning person.",
    "significance": "방어적 태도의 반대 개념으로서 심리적 건강의 지표이며, 상담을 통해 달성하고자 하는 주요 목표 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "충분히 기능하는 사람의 첫 번째 특성으로 경험 개방성을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "충분히 기능하는 사람",
        "name_en": "Fully Functioning Person",
        "id": "PERSON_FF_003"
      },
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감정 필터 없이 모든 경험을 있는 그대로 받아들이는 열린 마음 상태",
      "differential": "Big Five 성격 특성의 '경험 개방성'과 유사하지만, 로저스는 이를 성격 특성이 아닌 기능적 상태로 보았다",
      "key_point": "경험에 대한 개방성은 방어 기제의 감소와 직접적으로 관련된다",
      "common_mistake": "경험에 대한 개방성은 모든 경험을 좋아한다는 의미가 아니라, 고통스러운 경험도 왜곡 없이 자각한다는 뜻이다"
    }
  },
  {
    "id": "PERSON_CG_008",
    "terminology": "일치성 (Congruence)",
    "terminology_ko": "일치성",
    "terminology_en": "Congruence",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 상담 관계에서 진실되고 통합된 상태로 존재하는 것으로, 내적 경험과 외적 표현이 일치하는 태도를 의미하며, 핵심 조건의 하나이자 가장 기본이 되는 조건이다.",
    "definition_en": "The state of being genuine and integrated in the therapeutic relationship, where the therapist's inner experience and outer expression are consistent, considered the most fundamental of the core conditions.",
    "significance": "상담자의 진정성이 내담자와의 신뢰 관계 형성에 필수적이며, 다른 핵심 조건(공감, 존중)이 진정으로 전달되기 위한 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "일치성을 핵심 조건 중 가장 기본적인 것으로 규정"
      },
      {
        "name_ko": "제럴드 리버만",
        "name_en": "Gerald Lietaer",
        "contribution": "일치성의 내적 측면(자기 자각)과 외적 측면(투명성)을 구분"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      }
    ],
    "sub_types": [
      {
        "name": "내적 일치성",
        "description": "상담자 자신의 경험을 왜곡 없이 자각하는 것"
      },
      {
        "name": "외적 일치성 (투명성)",
        "description": "내적 경험을 적절히 표현하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "일치성 = 진정성(genuineness) = 진솔함 = 가면을 벗은 상태",
      "differential": "실존주의의 진정성(authenticity)과 유사하나, 로저스의 일치성은 특히 상담 관계 안에서의 태도를 강조한다",
      "key_point": "일치성은 상담자가 느끼는 모든 것을 말해야 한다는 의미가 아니라, 가식적이지 않다는 의미이다",
      "common_mistake": "일치성은 상담자의 모든 감정을 내담자에게 솔직히 털어놓는 것이 아니라, 내적으로 진실된 상태를 유지하는 것이다"
    }
  },
  {
    "id": "PERSON_EU_009",
    "terminology": "공감적 이해 (Empathic Understanding)",
    "terminology_ko": "공감적 이해",
    "terminology_en": "Empathic Understanding",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자의 내적 준거틀에 들어가 내담자의 세계를 마치 자신의 것처럼 느끼되, '마치(as if)' 조건을 잃지 않으면서 이해하는 과정이다.",
    "definition_en": "The process by which the therapist enters the client's internal frame of reference and understands the client's world as if it were their own, without losing the 'as if' quality.",
    "significance": "내담자가 이해받고 수용받는 경험을 하게 하여 자기탐색을 촉진하며, 상담 효과 연구에서 가장 일관되게 지지되는 공통 요인이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "공감적 이해를 핵심 조건의 하나로 체계화"
      },
      {
        "name_ko": "로버트 엘리엇",
        "name_en": "Robert Elliott",
        "contribution": "공감의 치료적 효과에 대한 메타분석 연구 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PERSON_RF_015"
      },
      {
        "name_ko": "내적 준거틀",
        "name_en": "Internal Frame of Reference",
        "id": "PERSON_IFR_016"
      },
      {
        "name_ko": "경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_002"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RF_003"
      }
    ],
    "sub_types": [
      {
        "name": "일차적 공감",
        "description": "내담자가 명시적으로 표현한 감정과 의미를 반영하는 기본적 공감"
      },
      {
        "name": "심층적 공감",
        "description": "내담자가 미처 자각하지 못한 감정이나 의미까지 포착하여 전달하는 공감"
      }
    ],
    "quiz_hints": {
      "mnemonic": "공감 = '마치(as if)' 내담자인 것처럼 느끼되, 나를 잃지 않는 것",
      "differential": "동감(sympathy)은 자신의 감정으로 함께 느끼는 것이지만, 공감(empathy)은 상대의 입장에서 이해하는 것이다",
      "key_point": "'as if' 조건이 공감과 동일시(identification)를 구분하는 핵심이다",
      "common_mistake": "공감은 동의(agreement)가 아니며, 내담자의 경험을 이해한다고 해서 그것에 동의해야 하는 것은 아니다"
    }
  },
  {
    "id": "PERSON_UPR_010",
    "terminology": "무조건적 긍정적 존중 (Unconditional Positive Regard)",
    "terminology_ko": "무조건적 긍정적 존중",
    "terminology_en": "Unconditional Positive Regard",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자를 평가나 조건 없이 한 인간으로서 존중하고 수용하는 태도로, 내담자의 감정, 사고, 행동에 대해 비판단적으로 따뜻하게 대하는 핵심 조건이다.",
    "definition_en": "The therapist's attitude of respecting and accepting the client as a person without evaluation or conditions, warmly and non-judgmentally regarding the client's feelings, thoughts, and behaviors.",
    "significance": "내담자가 가치 조건에서 벗어나 자신을 있는 그대로 수용할 수 있게 하는 치료적 환경을 조성하며, 자기개념의 변화를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "무조건적 긍정적 존중을 핵심 조건으로 제시"
      },
      {
        "name_ko": "스탠디시 스탠달",
        "name_en": "Standish Standal",
        "contribution": "'무조건적 긍정적 존중'이라는 용어를 최초로 사용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      },
      {
        "name_ko": "긍정적 존중의 욕구",
        "name_en": "Need for Positive Regard",
        "id": "PERSON_NPR_017"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "PERSON_AC_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "UPR = 무조건(Unconditional) + 긍정적(Positive) + 존중(Regard) = 조건 없이 따뜻하게",
      "differential": "무조건적 긍정적 존중은 내담자의 '행동'을 승인하는 것이 아니라 '인간'을 존중하는 것이다",
      "key_point": "무조건적이란 상담자의 존중이 내담자의 특정 행동에 의존하지 않음을 의미한다",
      "common_mistake": "무조건적 긍정적 존중은 내담자의 모든 행동에 동의하거나 허용하는 것이 아니라, 인간으로서의 가치를 인정하는 것이다"
    }
  },
  {
    "id": "PERSON_CW_011",
    "terminology": "가치 조건 (Conditions of Worth)",
    "terminology_ko": "가치 조건",
    "terminology_en": "Conditions of Worth",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "중요한 타인으로부터 사랑과 인정을 받기 위해 내면화한 조건적 기준으로, 유기체적 경험을 왜곡하거나 부인하게 만들어 불일치를 초래하는 부적응의 핵심 원인이다.",
    "definition_en": "Internalized conditional standards adopted to gain love and approval from significant others, which cause incongruence by leading to distortion or denial of organismic experience.",
    "significance": "로저스 성격이론에서 심리적 부적응의 핵심 원인으로, 상담 과정에서 해체되어야 할 주요 대상이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "가치 조건의 형성 과정과 부적응과의 관계를 이론화"
      },
      {
        "name_ko": "스탠디시 스탠달",
        "name_en": "Standish Standal",
        "contribution": "가치 조건(conditions of worth) 개념을 최초 도입"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "유기체적 가치화 과정",
        "name_en": "Organismic Valuing Process",
        "id": "PERSON_OV_005"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'~해야만 사랑받을 수 있다'는 조건적 메시지가 내면화된 것",
      "differential": "정신분석의 초자아(superego)와 유사한 기능을 하지만, 로저스는 이를 구조가 아닌 학습된 조건으로 본다",
      "key_point": "가치 조건은 주로 양육 과정에서 조건적 긍정적 존중을 받으면서 형성된다",
      "common_mistake": "가치 조건은 부모가 의도적으로 만드는 것이 아니라, 조건적 사랑의 자연스러운 결과로 형성된다"
    }
  },
  {
    "id": "PERSON_IS_012",
    "terminology": "이상적 자기 (Ideal Self)",
    "terminology_ko": "이상적 자기",
    "terminology_en": "Ideal Self",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "개인이 되고 싶어 하는 자기의 모습으로, 자기개념의 한 측면이며, 실제 자기와의 격차가 클수록 심리적 불편감과 부적응이 증가한다.",
    "definition_en": "The image of the person one wishes to become, an aspect of the self-concept; a large discrepancy between ideal self and real self leads to increased psychological distress and maladjustment.",
    "significance": "자기개념의 구조를 이해하는 데 중요하며, 현실적 자기와의 불일치 정도가 심리적 적응의 지표로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "이상적 자기와 현실적 자기 간의 불일치를 부적응의 지표로 제시"
      },
      {
        "name_ko": "윌리엄 스테판슨",
        "name_en": "William Stephenson",
        "contribution": "Q-분류법을 개발하여 자기개념과 이상적 자기의 측정을 가능하게 함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이상적 자기 = '나는 이런 사람이 되어야 한다'는 내면화된 기대",
      "differential": "프로이트의 자아이상(ego ideal)과 유사하나, 로저스는 이를 무의식적 구조가 아닌 현상학적 경험으로 본다",
      "key_point": "상담을 통해 이상적 자기가 현실적 자기에 가까워지는 것이 치료적 변화의 지표이다",
      "common_mistake": "이상적 자기가 없어지는 것이 목표가 아니라, 현실적이고 달성 가능한 수준으로 조정되는 것이 목표이다"
    }
  },
  {
    "id": "PERSON_IC_013",
    "terminology": "불일치 (Incongruence)",
    "terminology_ko": "불일치",
    "terminology_en": "Incongruence",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념과 실제 유기체적 경험 사이의 괴리 상태로, 심리적 부적응과 불안의 근본 원인이며, 방어적 반응(왜곡, 부인)을 유발하는 핵심 개념이다.",
    "definition_en": "A state of discrepancy between self-concept and actual organismic experience, the fundamental cause of psychological maladjustment and anxiety, triggering defensive responses such as distortion and denial.",
    "significance": "로저스 성격이론에서 모든 심리적 문제의 근본 원인으로 규정되며, 상담의 목표는 이 불일치를 감소시키는 것이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "불일치를 심리적 부적응의 중심 개념으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      },
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PERSON_AX_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기개념(나는 ~하다) ≠ 실제 경험(실제로는 ~하다) → 불일치 → 불안",
      "differential": "인지부조화(cognitive dissonance)는 두 인지 간의 불일치이지만, 로저스의 불일치는 자기개념과 경험 간의 괴리이다",
      "key_point": "불일치 자체가 직접 자각되지 않으며, 불안이라는 형태로 간접적으로 경험된다",
      "common_mistake": "불일치는 의식적 갈등이 아니라, 자각 이전에 유기체 수준에서 감지되는 것이다"
    }
  },
  {
    "id": "PERSON_DF_014",
    "terminology": "방어 (Defensiveness)",
    "terminology_ko": "방어",
    "terminology_en": "Defensiveness",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념을 위협하는 경험으로부터 자기를 보호하기 위해 경험을 왜곡하거나 부인하는 과정으로, 불일치 상태에서 자기개념의 일관성을 유지하려는 반응이다.",
    "definition_en": "The process of distorting or denying experiences that threaten the self-concept, a response to maintain consistency of the self-concept in a state of incongruence.",
    "significance": "부적응적 행동의 기제를 설명하며, 상담에서 방어가 감소하는 것이 치료적 변화의 지표가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "방어를 왜곡과 부인의 두 가지 형태로 구분하여 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "왜곡",
        "name_en": "Distortion",
        "id": "PERSON_DT_020"
      },
      {
        "name_ko": "부인",
        "name_en": "Denial",
        "id": "PERSON_DN_021"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DF_005"
      }
    ],
    "sub_types": [
      {
        "name": "왜곡 (Distortion)",
        "description": "경험을 자기개념에 맞게 변형하여 자각하는 것"
      },
      {
        "name": "부인 (Denial)",
        "description": "자기개념을 위협하는 경험을 의식에서 차단하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "방어 = 자기개념의 경호원: 위협적인 경험은 왜곡(변형 입장)하거나 부인(출입 금지)한다",
      "differential": "프로이트의 방어기제가 다양한 무의식적 전략인 반면, 로저스는 왜곡과 부인 두 가지만 제시했다",
      "key_point": "방어는 자기개념을 보호하지만, 장기적으로 불일치를 유지시켜 부적응을 심화시킨다",
      "common_mistake": "로저스의 방어 개념은 프로이트의 방어기제와 용어는 유사하지만 이론적 맥락이 다르다"
    }
  },
  {
    "id": "PERSON_RF_015",
    "terminology": "반영 (Reflection)",
    "terminology_ko": "반영",
    "terminology_en": "Reflection",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자의 감정과 의미를 정확히 포착하여 자신의 언어로 되돌려주는 기법으로, 인간중심 상담의 대표적 의사소통 방법이며 공감적 이해를 전달하는 핵심 수단이다.",
    "definition_en": "A technique where the therapist accurately captures and mirrors back the client's feelings and meanings in the therapist's own words, the hallmark communication method and primary means of conveying empathic understanding.",
    "significance": "공감적 이해를 구체적으로 전달하는 방법으로, 내담자의 자기탐색과 자기이해를 촉진하는 핵심 상담 기법이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "감정 반영을 인간중심 상담의 핵심 기법으로 발전"
      },
      {
        "name_ko": "로버트 카크허프",
        "name_en": "Robert Carkhuff",
        "contribution": "반영의 수준을 체계적으로 분류한 도움 기술 모델을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      },
      {
        "name_ko": "내적 준거틀",
        "name_en": "Internal Frame of Reference",
        "id": "PERSON_IFR_016"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RF_003"
      }
    ],
    "sub_types": [
      {
        "name": "감정 반영 (Reflection of Feeling)",
        "description": "내담자의 감정을 포착하여 되돌려주는 것"
      },
      {
        "name": "의미 반영 (Reflection of Meaning)",
        "description": "내담자 경험의 개인적 의미를 반영하는 것"
      },
      {
        "name": "경험 반영 (Reflection of Experience)",
        "description": "내담자의 전체적 경험 양상을 반영하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "반영 = 거울: 내담자의 감정과 의미를 거울처럼 비추어 보여주기",
      "differential": "해석(interpretation)은 상담자의 관점에서 의미를 부여하지만, 반영은 내담자의 관점을 그대로 되돌려준다",
      "key_point": "반영은 단순한 앵무새식 반복(parroting)이 아니라, 내담자 경험의 핵심을 포착하여 전달하는 것이다",
      "common_mistake": "반영을 단순히 내담자의 말을 따라 하는 것으로 오해해서는 안 되며, 감정과 의미의 본질을 담아야 한다"
    }
  },
  {
    "id": "PERSON_IFR_016",
    "terminology": "내적 준거틀 (Internal Frame of Reference)",
    "terminology_ko": "내적 준거틀",
    "terminology_en": "Internal Frame of Reference",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "개인이 세계를 경험하고 해석하는 주관적인 관점과 의미 체계로, 인간중심 상담에서 상담자가 공감을 위해 들어가야 하는 내담자의 현상학적 세계를 가리킨다.",
    "definition_en": "The subjective perspective and meaning system through which an individual experiences and interprets the world; in person-centered therapy, the client's phenomenological world that the therapist must enter for empathic understanding.",
    "significance": "현상학적 접근의 핵심 개념으로, 외부 관찰자의 관점이 아닌 내담자의 주관적 세계 이해를 상담의 기본 자세로 확립했다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "내적 준거틀의 중요성을 강조하며 현상학적 상담 접근을 정립"
      },
      {
        "name_ko": "아서 콤스",
        "name_en": "Arthur Combs",
        "contribution": "지각 심리학의 관점에서 내적 준거틀 개념을 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      },
      {
        "name_ko": "현상학적 장",
        "name_en": "Phenomenal Field",
        "id": "PERSON_PF_022"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PERSON_RF_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내적 준거틀 = 내담자가 세상을 보는 고유한 안경(렌즈)",
      "differential": "외적 준거틀(external frame of reference)은 관찰자나 진단자의 관점이고, 내적 준거틀은 당사자의 관점이다",
      "key_point": "인간중심 상담에서 상담자는 외적 준거틀(진단, 해석)이 아닌 내적 준거틀에서 내담자를 이해해야 한다",
      "common_mistake": "내적 준거틀에 들어간다고 해서 상담자의 객관성을 완전히 포기하는 것은 아니다"
    }
  },
  {
    "id": "PERSON_NPR_017",
    "terminology": "긍정적 존중의 욕구 (Need for Positive Regard)",
    "terminology_ko": "긍정적 존중의 욕구",
    "terminology_en": "Need for Positive Regard",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "타인으로부터 사랑, 인정, 수용을 받고 싶어 하는 보편적이고 강력한 인간 욕구로, 이 욕구가 조건적으로 충족될 때 가치 조건이 형성된다.",
    "definition_en": "A universal and powerful human need for love, approval, and acceptance from others; when this need is met conditionally, conditions of worth are formed.",
    "significance": "가치 조건 형성의 기제를 설명하며, 인간이 왜 자기 경험을 왜곡하면서까지 타인의 기대에 부응하려 하는지를 이해하게 한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "긍정적 존중의 욕구를 인간의 기본 욕구로 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      },
      {
        "name_ko": "긍정적 자기존중의 욕구",
        "name_en": "Need for Positive Self-Regard",
        "id": "PERSON_NPSR_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "누구나 '사랑받고 싶다' → 이 욕구에 조건이 붙으면 → 가치 조건 형성",
      "differential": "매슬로우의 소속·애정 욕구와 유사하나, 로저스는 이것이 가치 조건 형성의 메커니즘이라는 점을 강조한다",
      "key_point": "긍정적 존중의 욕구 자체는 정상적이나, 조건적으로만 충족될 때 문제가 된다",
      "common_mistake": "긍정적 존중의 욕구는 병리적인 것이 아니라 보편적인 인간 욕구이다"
    }
  },
  {
    "id": "PERSON_AC_018",
    "terminology": "수용 (Acceptance)",
    "terminology_ko": "수용",
    "terminology_en": "Acceptance",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자의 모든 경험과 감정을 판단 없이 있는 그대로 받아들이는 태도로, 무조건적 긍정적 존중의 핵심 구성 요소이다.",
    "definition_en": "The therapist's attitude of receiving all of the client's experiences and feelings without judgment, a core component of unconditional positive regard.",
    "significance": "내담자가 안전한 환경에서 자기탐색을 할 수 있도록 하며, 자기수용으로 이어지는 치료적 과정의 출발점이 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "수용을 무조건적 긍정적 존중의 핵심으로 강조"
      },
      {
        "name_ko": "유진 젠들린",
        "name_en": "Eugene Gendlin",
        "contribution": "수용적 태도와 체험과정의 관계를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "비판단적 태도",
        "name_en": "Non-judgmental Attitude",
        "id": "PERSON_NJ_024"
      },
      {
        "name_ko": "자기수용",
        "name_en": "Self-Acceptance",
        "id": "PERSON_SA_025"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "Acceptance and Commitment Therapy",
        "id": "THIRDW_ACT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수용 = 있는 그대로 받아들이기(O) ≠ 모든 행동에 동의하기(X)",
      "differential": "ACT의 수용은 내적 경험을 기꺼이 경험하는 것이지만, 로저스의 수용은 상담자가 내담자를 받아들이는 태도이다",
      "key_point": "수용은 변화의 역설을 포함한다: 있는 그대로 수용될 때 비로소 변화가 일어난다",
      "common_mistake": "수용은 내담자의 모든 행동을 허용하는 것이 아니라, 내담자의 경험을 비판단적으로 받아들이는 것이다"
    }
  },
  {
    "id": "PERSON_AX_019",
    "terminology": "불안 (Anxiety in Person-Centered Theory)",
    "terminology_ko": "불안",
    "terminology_en": "Anxiety in Person-Centered Theory",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념과 유기체적 경험 사이의 불일치가 의식 수준 아래에서 감지될 때 경험하는 긴장 상태로, 위협에 대한 유기체의 반응이다.",
    "definition_en": "A state of tension experienced when incongruence between self-concept and organismic experience is subceived (perceived below consciousness), representing the organism's response to threat.",
    "significance": "정신분석의 불안과 다른 현상학적 관점에서의 불안을 설명하며, 방어적 행동의 동기를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "불안을 불일치의 결과로 설명하는 현상학적 불안 이론을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "하위지각",
        "name_en": "Subception",
        "id": "PERSON_SB_026"
      },
      {
        "name_ko": "위협",
        "name_en": "Threat",
        "id": "PERSON_TH_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불일치 감지 → 불안 발생 → 방어 작동 → 왜곡/부인",
      "differential": "프로이트의 불안은 이드의 충동에서 비롯되지만, 로저스의 불안은 자기개념과 경험의 불일치에서 비롯된다",
      "key_point": "불안은 불일치가 의식화되기 전에 하위지각 수준에서 감지된다",
      "common_mistake": "로저스의 불안은 불안장애와 같은 임상적 불안이 아니라, 불일치에 따른 현상학적 경험이다"
    }
  },
  {
    "id": "PERSON_DT_020",
    "terminology": "왜곡 (Distortion)",
    "terminology_ko": "왜곡",
    "terminology_en": "Distortion",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념을 위협하는 경험을 자기개념에 부합하도록 변형하여 자각하는 방어의 한 형태로, 경험의 의미를 재구성하여 자기개념의 일관성을 유지한다.",
    "definition_en": "A form of defense in which threatening experiences are reshaped to be consistent with the self-concept, reconstructing the meaning of experience to maintain self-concept consistency.",
    "significance": "부적응적 자기개념이 유지되는 기제를 설명하며, 상담에서 왜곡된 경험이 정확히 자각되는 것이 치료적 변화의 과정이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "왜곡을 방어의 두 가지 형태 중 하나로 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "부인",
        "name_en": "Denial",
        "id": "PERSON_DN_021"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "왜곡 = 경험의 모양을 바꿔서 자기개념의 틀에 끼워 맞추기",
      "differential": "부인이 경험 자체를 의식에서 차단하는 것이라면, 왜곡은 경험을 변형하여 허용하는 것이다",
      "key_point": "왜곡된 경험은 의식에 들어오지만, 본래의 의미와 다르게 지각된다",
      "common_mistake": "왜곡은 의도적인 거짓말이 아니라, 무의식적 수준에서 일어나는 자동적 과정이다"
    }
  },
  {
    "id": "PERSON_DN_021",
    "terminology": "부인 (Denial)",
    "terminology_ko": "부인",
    "terminology_en": "Denial",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념을 위협하는 경험이 의식에 들어오지 못하도록 차단하는 방어의 한 형태로, 경험 자체가 의식화되는 것을 거부한다.",
    "definition_en": "A form of defense that blocks threatening experiences from entering consciousness, refusing the symbolization of the experience itself.",
    "significance": "왜곡보다 극단적인 방어 형태로, 자기개념과 경험의 괴리가 매우 클 때 작동하며 심각한 부적응으로 이어질 수 있다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "부인을 방어의 두 가지 형태 중 하나로 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "왜곡",
        "name_en": "Distortion",
        "id": "PERSON_DT_020"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "부인 = 경험의 출입 금지: 의식의 문을 닫아버림",
      "differential": "프로이트의 억압(repression)과 유사하나, 로저스의 부인은 자기개념 보호라는 특정 기제에 초점을 맞춘다",
      "key_point": "부인된 경험은 의식에 전혀 나타나지 않으므로, 당사자는 그 경험이 존재하는지 조차 모른다",
      "common_mistake": "부인은 의식적 거부가 아니라, 경험이 상징화 자체가 되지 않는 무의식적 과정이다"
    }
  },
  {
    "id": "PERSON_PF_022",
    "terminology": "현상학적 장 (Phenomenal Field)",
    "terminology_ko": "현상학적 장",
    "terminology_en": "Phenomenal Field",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "개인이 주관적으로 경험하는 모든 것의 총체로, 의식적 경험과 잠재적으로 의식화될 수 있는 경험을 포함하며, 각 개인에게 고유한 주관적 현실을 구성한다.",
    "definition_en": "The totality of all that is subjectively experienced by an individual, including conscious experience and experiences potentially available to awareness, constituting a unique subjective reality for each person.",
    "significance": "인간 행동이 객관적 현실이 아닌 주관적 현실에 의해 결정된다는 현상학적 관점의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "현상학적 장 개념을 성격이론에 도입"
      },
      {
        "name_ko": "도날드 스니그",
        "name_en": "Donald Snygg",
        "contribution": "아서 콤스와 함께 현상학적 심리학의 체계를 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내적 준거틀",
        "name_en": "Internal Frame of Reference",
        "id": "PERSON_IFR_016"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "주관적 경험",
        "name_en": "Subjective Experience",
        "id": "PERSON_SE_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "현상학적 장 = 내가 경험하는 모든 것의 세계 = 나의 주관적 우주",
      "differential": "행동주의의 '환경'이 객관적 자극을 의미한다면, 현상학적 장은 개인이 지각하는 주관적 세계를 의미한다",
      "key_point": "같은 객관적 상황이라도 각 개인의 현상학적 장은 다를 수 있다",
      "common_mistake": "현상학적 장은 의식적 경험만이 아니라, 잠재적으로 의식화될 수 있는 경험까지 포함한다"
    }
  },
  {
    "id": "PERSON_NPSR_023",
    "terminology": "긍정적 자기존중의 욕구 (Need for Positive Self-Regard)",
    "terminology_ko": "긍정적 자기존중의 욕구",
    "terminology_en": "Need for Positive Self-Regard",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기 자신에 대해 긍정적으로 느끼고 싶어 하는 내면화된 욕구로, 긍정적 존중의 욕구로부터 파생되어 자기개념의 유지와 보호에 영향을 미친다.",
    "definition_en": "An internalized need to feel positively about oneself, derived from the need for positive regard, influencing the maintenance and protection of the self-concept.",
    "significance": "외부의 긍정적 존중 없이도 자기 스스로에 대해 긍정적으로 느끼고자 하는 동기를 설명하며, 가치 조건의 내면화 과정을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "긍정적 자기존중 욕구를 긍정적 존중 욕구의 파생으로 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "긍정적 존중의 욕구",
        "name_en": "Need for Positive Regard",
        "id": "PERSON_NPR_017"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "타인에게 인정받고 싶은 욕구(긍정적 존중) → 내면화 → 스스로에게 인정받고 싶은 욕구(긍정적 자기존중)",
      "differential": "긍정적 존중의 욕구는 타인으로부터의 수용에 관한 것이고, 긍정적 자기존중의 욕구는 자기 자신으로부터의 수용에 관한 것이다",
      "key_point": "가치 조건이 내면화되면 타인이 없어도 스스로 자기를 조건적으로 평가하게 된다",
      "common_mistake": "긍정적 자기존중의 욕구는 건강한 자존감과 다르며, 가치 조건에 의해 왜곡될 수 있다"
    }
  },
  {
    "id": "PERSON_NJ_024",
    "terminology": "비판단적 태도 (Non-judgmental Attitude)",
    "terminology_ko": "비판단적 태도",
    "terminology_en": "Non-judgmental Attitude",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자의 경험, 감정, 행동에 대해 좋고 나쁨의 평가를 유보하고 있는 그대로 받아들이는 태도로, 무조건적 긍정적 존중을 실천하는 구체적 방법이다.",
    "definition_en": "The therapist's attitude of suspending evaluative judgments about the client's experiences, feelings, and behaviors, accepting them as they are, a concrete way of practicing unconditional positive regard.",
    "significance": "내담자가 자기탐색을 위한 안전한 환경을 느낄 수 있게 하며, 상담 관계에서 신뢰를 형성하는 기본 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "비판단적 태도를 무조건적 긍정적 존중의 핵심 요소로 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "PERSON_AC_018"
      },
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비판단 = 옳고 그름의 잣대를 내려놓고 이해하기",
      "differential": "비판단적 태도는 가치 중립이 아니라, 내담자의 경험에 대한 평가를 유보하는 것이다",
      "key_point": "상담자가 비판단적이어야 내담자도 자신을 비판단적으로 볼 수 있게 된다",
      "common_mistake": "비판단적 태도는 상담자 자신의 가치관이 없다는 의미가 아니라, 내담자에게 자신의 가치관을 강요하지 않는 것이다"
    }
  },
  {
    "id": "PERSON_SA_025",
    "terminology": "자기수용 (Self-Acceptance)",
    "terminology_ko": "자기수용",
    "terminology_en": "Self-Acceptance",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자신의 강점과 약점, 긍정적이고 부정적인 측면을 모두 인정하고 받아들이는 것으로, 상담의 주요 성과이자 심리적 건강의 핵심 요소이다.",
    "definition_en": "Acknowledging and accepting both one's strengths and weaknesses, positive and negative aspects; a major outcome of counseling and a core element of psychological health.",
    "significance": "상담 과정에서 상담자의 무조건적 긍정적 존중이 내담자의 자기수용으로 전환되는 것이 핵심적 치료 메커니즘이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "자기수용을 상담의 핵심 성과로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "PERSON_AC_018"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_010"
      },
      {
        "name_ko": "자기개념",
        "name_en": "Self-Concept",
        "id": "PERSON_SC_006"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무조건적 긍정적 존중(상담자→내담자) → 내면화 → 자기수용(내담자→자기 자신)",
      "differential": "자기존중감(self-esteem)은 자기에 대한 평가적 판단이지만, 자기수용은 평가 없이 있는 그대로 받아들이는 것이다",
      "key_point": "자기수용은 자기 만족이 아니라, 자기의 불완전함을 인정하면서도 자기를 가치 있게 여기는 것이다",
      "common_mistake": "자기수용은 자기 변화의 포기가 아니라, 변화의 전제 조건이다"
    }
  },
  {
    "id": "PERSON_SB_026",
    "terminology": "하위지각 (Subception)",
    "terminology_ko": "하위지각",
    "terminology_en": "Subception",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념을 위협하는 경험이 완전히 의식화되기 전에 유기체 수준에서 감지되는 과정으로, 방어 반응을 촉발하는 역치 이하의 지각이다.",
    "definition_en": "The process by which experiences threatening to the self-concept are detected at the organismic level before fully entering awareness, a subthreshold perception that triggers defensive responses.",
    "significance": "의식적 자각 없이도 위협을 감지하고 방어할 수 있는 기제를 설명하며, 불안의 발생 원리를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "하위지각 개념을 통해 의식 이전 수준의 위협 감지 과정을 설명"
      },
      {
        "name_ko": "맥클래리",
        "name_en": "Robert McCleary",
        "contribution": "하위지각의 실험적 증거를 제시한 초기 연구 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PERSON_AX_019"
      },
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      },
      {
        "name_ko": "위협",
        "name_en": "Threat",
        "id": "PERSON_TH_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "하위지각 = 의식의 문지기: 위험 감지 시 방어 경보를 울린다",
      "differential": "프로이트의 전의식(preconscious)과 유사하나, 하위지각은 특히 위협 감지라는 기능에 초점을 둔다",
      "key_point": "하위지각은 불안이 왜 구체적 원인 없이 발생하는 것처럼 느껴지는지를 설명한다",
      "common_mistake": "하위지각은 초감각적 지각(ESP)이 아니라, 역치 이하의 정상적 지각 과정이다"
    }
  },
  {
    "id": "PERSON_TH_027",
    "terminology": "위협 (Threat)",
    "terminology_ko": "위협",
    "terminology_en": "Threat",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "자기개념과 일치하지 않는 경험이 자각될 가능성이 있을 때 유기체가 하위지각 수준에서 감지하는 것으로, 불안과 방어를 유발하는 상황을 의미한다.",
    "definition_en": "What the organism detects at the subception level when an experience inconsistent with the self-concept has the potential to be perceived, a situation that triggers anxiety and defense.",
    "significance": "불일치 경험이 어떻게 불안과 방어로 이어지는지의 연결고리를 설명하는 중간 개념이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "위협을 불일치-불안-방어의 연쇄 과정에서 핵심 개념으로 위치시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "하위지각",
        "name_en": "Subception",
        "id": "PERSON_SB_026"
      },
      {
        "name_ko": "불안",
        "name_en": "Anxiety",
        "id": "PERSON_AX_019"
      },
      {
        "name_ko": "방어",
        "name_en": "Defensiveness",
        "id": "PERSON_DF_014"
      },
      {
        "name_ko": "불일치",
        "name_en": "Incongruence",
        "id": "PERSON_IC_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불일치 경험 → 하위지각으로 감지(위협) → 불안 → 방어(왜곡/부인)",
      "differential": "일반적 의미의 위협과 달리, 로저스의 위협은 자기개념의 일관성에 대한 위협을 뜻한다",
      "key_point": "위협은 외부 사건 자체가 아니라, 그 사건이 자기개념과 불일치할 때만 발생한다",
      "common_mistake": "위협은 물리적 위험이 아니라 심리적 자기개념에 대한 위협을 의미한다"
    }
  },
  {
    "id": "PERSON_SE_028",
    "terminology": "주관적 경험 (Subjective Experience)",
    "terminology_ko": "주관적 경험",
    "terminology_en": "Subjective Experience",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "개인이 내적으로 지각하고 해석하는 경험의 총체로, 인간중심 상담에서는 객관적 사실보다 내담자가 주관적으로 경험하는 현실이 행동을 결정한다고 본다.",
    "definition_en": "The totality of what an individual internally perceives and interprets; in person-centered therapy, subjective reality rather than objective facts is seen as determining behavior.",
    "significance": "행동의 결정 요인을 주관적 경험에 두는 현상학적 접근의 핵심 가정으로, 상담에서 내담자의 관점을 존중하는 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "주관적 경험의 중요성을 강조하는 현상학적 접근을 상담에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "현상학적 장",
        "name_en": "Phenomenal Field",
        "id": "PERSON_PF_022"
      },
      {
        "name_ko": "내적 준거틀",
        "name_en": "Internal Frame of Reference",
        "id": "PERSON_IFR_016"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "같은 비가 와도 누군가에겐 축복, 누군가에겐 재앙 = 주관적 경험의 차이",
      "differential": "행동주의는 관찰 가능한 행동에 초점을 맞추지만, 인간중심 상담은 내담자의 주관적 경험에 초점을 맞춘다",
      "key_point": "상담에서 중요한 것은 '무엇이 일어났는가'가 아니라 '내담자가 무엇을 경험했는가'이다",
      "common_mistake": "주관적 경험을 중시한다고 해서 객관적 현실을 무시하는 것은 아니다"
    }
  },
  {
    "id": "PERSON_ND_029",
    "terminology": "비지시적 상담 (Non-Directive Counseling)",
    "terminology_ko": "비지시적 상담",
    "terminology_en": "Non-Directive Counseling",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "상담자가 내담자에게 조언, 해석, 지시를 제공하지 않고 내담자 스스로 자기탐색과 문제해결을 할 수 있도록 촉진하는 상담 방식으로, 인간중심 상담의 초기 명칭이다.",
    "definition_en": "A counseling approach where the therapist refrains from giving advice, interpretations, or directions, instead facilitating the client's self-exploration and problem-solving; the original name for person-centered therapy.",
    "significance": "상담에서 상담자의 전문가적 권위보다 내담자의 자기결정권을 존중하는 패러다임 전환을 이끌었다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "1942년 저서에서 비지시적 상담의 원리와 기법을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 상담",
        "name_en": "Person-Centered Therapy",
        "id": "PERSON_PC_001"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PERSON_RF_015"
      },
      {
        "name_ko": "공감적 이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EU_009"
      },
      {
        "name_ko": "자기실현 경향성",
        "name_en": "Actualizing Tendency",
        "id": "PERSON_AT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비지시적 = 상담자가 길을 알려주지 않고, 내담자가 스스로 길을 찾도록 함께 걷기",
      "differential": "지시적 상담이 상담자 주도적이라면, 비지시적 상담은 내담자 주도적이다",
      "key_point": "비지시적은 상담의 방향을 내담자가 결정한다는 의미이지, 상담자가 수동적이라는 의미가 아니다",
      "common_mistake": "비지시적 상담에서도 상담자는 적극적으로 경청, 반영, 공감한다"
    }
  },
  {
    "id": "PERSON_EL_030",
    "terminology": "실존적 삶 (Existential Living)",
    "terminology_ko": "실존적 삶",
    "terminology_en": "Existential Living",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "과거나 미래에 얽매이지 않고 현재 순간에 충실하게 살아가는 것으로, 충분히 기능하는 사람의 핵심 특성 중 하나이며 매 순간 새롭게 경험에 개방되는 삶의 방식이다.",
    "definition_en": "Living fully in the present moment without being bound by past or future, a core characteristic of the fully functioning person, a way of living that is open to each moment of experience anew.",
    "significance": "충분히 기능하는 사람의 특성으로서 심리적 건강의 지표이며, 실존주의 철학과의 접점을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "실존적 삶을 충분히 기능하는 사람의 핵심 특성으로 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "충분히 기능하는 사람",
        "name_en": "Fully Functioning Person",
        "id": "PERSON_FF_003"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      },
      {
        "name_ko": "자유",
        "name_en": "Freedom",
        "id": "EXIST_FR_003"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 삶 = '지금 여기(here and now)'에 충실한 삶 = 매 순간이 새로운 경험",
      "differential": "게슈탈트의 '지금 여기'가 치료 기법적 원리인 반면, 로저스의 실존적 삶은 심리적 건강의 특성이다",
      "key_point": "실존적 삶은 고정된 자기개념에 매이지 않고, 매 순간 경험에 따라 유연하게 변화하는 것이다",
      "common_mistake": "실존적 삶은 미래 계획을 세우지 않는다는 의미가 아니라, 과거와 미래에 대한 집착 없이 현재를 충분히 경험한다는 뜻이다"
    }
  },
  {
    "id": "PERSON_PC_031",
    "terminology": "심리적 접촉 (Psychological Contact)",
    "terminology_ko": "심리적 접촉",
    "terminology_en": "Psychological Contact",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "두 사람이 서로의 존재를 지각하고 상호 영향을 주고받는 최소한의 관계 상태로, 로저스가 제시한 치료적 변화의 6가지 조건 중 첫 번째 조건이다.",
    "definition_en": "A minimal relational state where two persons perceive each other's presence and mutually influence one another, the first of Rogers' six conditions for therapeutic personality change.",
    "significance": "모든 치료적 관계의 전제 조건으로, 상담이 시작되기 위한 가장 기본적인 요건을 규정한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "심리적 접촉을 치료적 변화의 첫 번째 필요조건으로 제시"
      },
      {
        "name_ko": "게리 프라우티",
        "name_en": "Garry Prouty",
        "contribution": "사전치료(pre-therapy)를 개발하여 접촉이 어려운 내담자와의 작업 방법을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심리적 접촉 = 상담의 전원 버튼: 이것이 켜져야 상담이 시작된다",
      "differential": "라포(rapport)가 긍정적 관계의 질을 의미한다면, 심리적 접촉은 관계 존재의 최소 조건이다",
      "key_point": "로저스의 6조건 중 첫 번째이며, 나머지 5조건이 의미를 갖기 위한 전제이다",
      "common_mistake": "심리적 접촉은 물리적 접촉이 아니라, 두 사람이 서로의 경험적 장에 차이를 만드는 것이다"
    }
  },
  {
    "id": "PERSON_EX_032",
    "terminology": "체험과정 (Experiencing)",
    "terminology_ko": "체험과정",
    "terminology_en": "Experiencing",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "유기체 내부에서 진행되는 감각적, 내장적, 생리적 흐름으로, 개인이 직접적으로 느끼는 순간순간의 내적 경험 과정이며 상담에서 치료적 변화의 핵심 요소이다.",
    "definition_en": "The ongoing sensory, visceral, and physiological flow within the organism, the moment-to-moment process of internal experience directly felt by the individual, a core element of therapeutic change in counseling.",
    "significance": "체험과정의 수준(체험과정 척도)이 상담 성과를 예측하는 중요한 변인으로 밝혀졌으며, 포커싱 기법의 이론적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "유진 젠들린",
        "name_en": "Eugene Gendlin",
        "contribution": "체험과정 이론을 발전시키고 포커싱 기법을 개발"
      },
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "상담에서의 체험 과정의 중요성을 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "포커싱",
        "name_en": "Focusing",
        "id": "PERSON_FC_033"
      },
      {
        "name_ko": "유기체적 가치화 과정",
        "name_en": "Organismic Valuing Process",
        "id": "PERSON_OV_005"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체험과정 = 몸이 느끼는 감각적 흐름을 의식적으로 주의를 기울이는 것",
      "differential": "인지적 자기이해와 달리, 체험과정은 신체적·감각적 수준의 내적 경험에 초점을 맞춘다",
      "key_point": "상담에서 내담자의 체험과정 수준이 높을수록 상담 성과가 좋다",
      "common_mistake": "체험과정은 단순한 감정 표현이 아니라, 신체적으로 느껴지는 내적 경험의 흐름이다"
    }
  },
  {
    "id": "PERSON_FC_033",
    "terminology": "포커싱 (Focusing)",
    "terminology_ko": "포커싱",
    "terminology_en": "Focusing",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "유진 젠들린이 개발한 심리치료적 기법으로, 신체에서 느껴지는 막연한 감각(felt sense)에 주의를 기울여 그 의미를 점차 명료화하는 체험적 과정이다.",
    "definition_en": "A psychotherapeutic technique developed by Eugene Gendlin that involves attending to a vague bodily sensation (felt sense) and gradually clarifying its meaning through an experiential process.",
    "significance": "체험과정 연구에서 출발한 구체적 기법으로, 인간중심 접근의 체험적 측면을 실천 가능한 방법론으로 발전시켰다.",
    "key_researchers": [
      {
        "name_ko": "유진 젠들린",
        "name_en": "Eugene Gendlin",
        "contribution": "포커싱의 6단계를 체계화하고 체험과정 이론을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체험과정",
        "name_en": "Experiencing",
        "id": "PERSON_EX_032"
      },
      {
        "name_ko": "체감",
        "name_en": "Felt Sense",
        "id": "PERSON_FS_034"
      },
      {
        "name_ko": "경험에 대한 개방성",
        "name_en": "Openness to Experience",
        "id": "PERSON_OE_007"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "포커싱 6단계: 공간 만들기 → 체감 → 손잡이 → 공명 → 질문 → 수용",
      "differential": "명상이 생각을 비우는 것이라면, 포커싱은 신체 감각에 주의를 기울여 의미를 찾는 것이다",
      "key_point": "포커싱의 핵심은 체감(felt sense)이라는 아직 언어화되지 않은 신체적 앎에 접근하는 것이다",
      "common_mistake": "포커싱은 단순한 이완 기법이 아니라, 의미 발견을 위한 체험적 탐색 과정이다"
    }
  },
  {
    "id": "PERSON_FS_034",
    "terminology": "체감 (Felt Sense)",
    "terminology_ko": "체감",
    "terminology_en": "Felt Sense",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "특정 상황이나 문제에 대해 신체에서 느껴지는 막연하고 복합적인 감각으로, 아직 언어화되지 않았지만 의미를 담고 있는 신체적 앎의 형태이다.",
    "definition_en": "A vague and complex sensation felt in the body regarding a specific situation or problem, a form of bodily knowing that carries meaning but has not yet been articulated in language.",
    "significance": "포커싱 기법의 핵심 개념으로, 언어 이전의 신체적 지혜에 접근하는 독특한 치료적 경로를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "유진 젠들린",
        "name_en": "Eugene Gendlin",
        "contribution": "체감 개념을 정의하고 이에 접근하는 포커싱 기법을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "포커싱",
        "name_en": "Focusing",
        "id": "PERSON_FC_033"
      },
      {
        "name_ko": "체험과정",
        "name_en": "Experiencing",
        "id": "PERSON_EX_032"
      },
      {
        "name_ko": "유기체적 가치화 과정",
        "name_en": "Organismic Valuing Process",
        "id": "PERSON_OV_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체감 = 뭔가 마음에 걸리는데 뭔지 정확히 말할 수 없는 '그 느낌'",
      "differential": "감정(emotion)이 명확하게 분류 가능한 것이라면, 체감은 아직 명확해지기 전의 복합적 신체 감각이다",
      "key_point": "체감은 처음에는 막연하지만, 주의를 기울이면 점차 명료해지면서 의미가 드러난다",
      "common_mistake": "체감은 단순한 신체 감각(두통, 복통 등)이 아니라, 의미를 담고 있는 전체적 신체 경험이다"
    }
  },
  {
    "id": "PERSON_EM_035",
    "terminology": "만남집단 (Encounter Group)",
    "terminology_ko": "만남집단",
    "terminology_en": "Encounter Group",
    "category": "PERSON",
    "category_name": "인간중심 상담 (Person-Centered Therapy)",
    "definition": "칼 로저스가 발전시킨 집단 경험 형태로, 참여자들이 진솔한 대인관계를 통해 자기성장과 자기이해를 도모하는 비구조화된 소집단 활동이다.",
    "definition_en": "A form of group experience developed by Carl Rogers, an unstructured small group activity where participants pursue self-growth and self-understanding through genuine interpersonal relationships.",
    "significance": "인간중심 접근을 개인 상담을 넘어 집단 과정으로 확장한 대표적 사례로, 1960~70년대 인간 잠재력 운동에 큰 영향을 미쳤다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "만남집단의 원리와 과정을 체계화하고 평화 프로젝트에 적용"
      },
      {
        "name_ko": "윌 슈츠",
        "name_en": "Will Schutz",
        "contribution": "만남집단의 방법론적 발전에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인간중심 상담",
        "name_en": "Person-Centered Therapy",
        "id": "PERSON_PC_001"
      },
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      },
      {
        "name_ko": "집단상담",
        "name_en": "Group Counseling",
        "id": "GROUP_GC_001"
      },
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "만남집단 = 가면을 벗고 진솔하게 만나는 집단 = 인간 대 인간의 만남",
      "differential": "치료집단이 병리 치료를 목표로 하는 반면, 만남집단은 정상인의 성장과 자기실현을 목표로 한다",
      "key_point": "만남집단에서는 리더(촉진자)가 전문가가 아닌 참여자의 한 사람으로 기능한다",
      "common_mistake": "만남집단은 감수성 훈련(sensitivity training)과 유사하지만, 로저스의 만남집단은 보다 개인의 성장에 초점을 둔다"
    }
  }
];

TERMS_DATA.GESTALT = [
  {
    "id": "GESTALT_GT_001",
    "terminology": "게슈탈트 상담 (Gestalt Therapy)",
    "terminology_ko": "게슈탈트 상담",
    "terminology_en": "Gestalt Therapy",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "프리츠 펄스가 창시한 체험적·실존적 상담 접근으로, '지금 여기'의 자각과 접촉을 강조하며, 미해결 과제의 완결과 통합적 자기 경험을 통해 성장을 촉진하는 치료법이다.",
    "definition_en": "An experiential and existential counseling approach founded by Fritz Perls that emphasizes awareness and contact in the 'here and now,' facilitating growth through completion of unfinished business and integrated self-experience.",
    "significance": "체험적 상담의 대표적 접근으로, 내담자가 직접적 경험을 통해 자각을 확대하고 실존적 책임을 수용하도록 돕는 독창적 방법론을 제시했다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "게슈탈트 상담의 창시자로서 이론과 주요 기법을 개발"
      },
      {
        "name_ko": "로라 펄스",
        "name_en": "Laura Perls",
        "contribution": "게슈탈트 상담의 공동 창시자로서 관계적 측면을 발전"
      },
      {
        "name_ko": "폴 굿맨",
        "name_en": "Paul Goodman",
        "contribution": "게슈탈트 상담의 이론적 체계를 공동 저술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "지금 여기",
        "name_en": "Here and Now",
        "id": "GESTALT_HN_003"
      },
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      },
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "실존주의 상담",
        "name_en": "Existential Therapy",
        "id": "EXIST_EX_001"
      }
    ],
    "sub_types": [
      {
        "name": "고전적 게슈탈트",
        "description": "프리츠 펄스의 대결적·극적 스타일을 따르는 접근"
      },
      {
        "name": "관계적 게슈탈트",
        "description": "상담자-내담자 관계를 중시하는 현대적 접근"
      }
    ],
    "quiz_hints": {
      "mnemonic": "게슈탈트(Gestalt) = '전체, 형태' → 전체적 자각과 통합을 지향하는 상담",
      "differential": "인간중심 상담이 상담자의 태도를 강조하는 반면, 게슈탈트는 내담자의 자각과 체험을 강조한다",
      "key_point": "게슈탈트 상담의 목표는 '왜(why)'를 찾는 것이 아니라 '어떻게(how)'와 '무엇(what)'을 자각하는 것이다",
      "common_mistake": "게슈탈트 상담은 게슈탈트 심리학(지각 심리학)과는 다른 독립적인 상담 접근이다"
    }
  },
  {
    "id": "GESTALT_AW_002",
    "terminology": "자각 (Awareness)",
    "terminology_ko": "자각",
    "terminology_en": "Awareness",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "지금 이 순간 자신의 감각, 감정, 사고, 행동, 신체 반응을 왜곡 없이 알아차리는 것으로, 게슈탈트 상담에서 모든 변화의 출발점이자 그 자체로 치유적 힘을 가진 핵심 개념이다.",
    "definition_en": "The undistorted noticing of one's sensations, feelings, thoughts, behaviors, and bodily reactions in the present moment, the starting point of all change in Gestalt therapy and itself a curative force.",
    "significance": "게슈탈트 상담의 가장 핵심적인 개념으로, 자각 자체가 치료적이라는 관점은 이 접근의 독창적 기여이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "자각을 게슈탈트 상담의 핵심 원리로 정립"
      },
      {
        "name_ko": "클라우디오 나란호",
        "name_en": "Claudio Naranjo",
        "contribution": "자각의 세 영역(내적, 외적, 중간)을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지금 여기",
        "name_en": "Here and Now",
        "id": "GESTALT_HN_003"
      },
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "자각의 연속체",
        "name_en": "Continuum of Awareness",
        "id": "GESTALT_CA_006"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_003"
      }
    ],
    "sub_types": [
      {
        "name": "내적 자각 (Inner Zone)",
        "description": "감정, 신체 감각, 근육 긴장 등 내부 경험의 자각"
      },
      {
        "name": "외적 자각 (Outer Zone)",
        "description": "감각을 통해 지각하는 외부 세계의 자각"
      },
      {
        "name": "중간 자각 (Middle Zone)",
        "description": "사고, 판단, 해석, 상상 등 정신 활동의 자각"
      }
    ],
    "quiz_hints": {
      "mnemonic": "자각의 3영역: 내(감정/신체) + 외(감각) + 중간(사고) = 전체적 자각",
      "differential": "인간중심의 '경험에 대한 개방성'이 수동적 수용이라면, 게슈탈트의 자각은 적극적 알아차림이다",
      "key_point": "자각 그 자체가 치료적이다(Awareness per se is curative) - 게슈탈트의 핵심 명제",
      "common_mistake": "자각은 단순한 지적 이해(insight)가 아니라, 감각·감정·행동을 포함한 전체적 알아차림이다"
    }
  },
  {
    "id": "GESTALT_HN_003",
    "terminology": "지금 여기 (Here and Now)",
    "terminology_ko": "지금 여기",
    "terminology_en": "Here and Now",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "현재 순간의 경험에 초점을 맞추는 게슈탈트 상담의 핵심 원리로, 과거 경험이나 미래 계획보다 지금 이 순간에 무엇을 느끼고 경험하는지를 탐색하도록 안내한다.",
    "definition_en": "A core principle of Gestalt therapy focusing on present-moment experience, guiding exploration of what one feels and experiences right now rather than past experiences or future plans.",
    "significance": "과거 지향적인 정신분석과 대비되는 게슈탈트 상담의 독창적 관점으로, 변화가 현재에서만 일어날 수 있다는 철학적 입장을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "'지금 여기'를 게슈탈트 상담의 중심 원리로 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "현재화 기법",
        "name_en": "Presentification",
        "id": "GESTALT_PR_007"
      },
      {
        "name_ko": "실존적 삶",
        "name_en": "Existential Living",
        "id": "PERSON_EL_030"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "펄스: 'Nothing exists except the here and now' (지금 여기 외에는 아무것도 존재하지 않는다)",
      "differential": "정신분석이 과거를 분석하고 인지치료가 미래 결과를 예측한다면, 게슈탈트는 현재 경험에 초점을 맞춘다",
      "key_point": "과거 사건도 '지금 여기'에서 재경험할 때만 치료적 가치가 있다",
      "common_mistake": "'지금 여기'는 과거를 무시하는 것이 아니라, 과거 경험을 현재 순간에 가져와 다루는 것이다"
    }
  },
  {
    "id": "GESTALT_UB_004",
    "terminology": "미해결 과제 (Unfinished Business)",
    "terminology_ko": "미해결 과제",
    "terminology_en": "Unfinished Business",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "과거에 충분히 표현되거나 해결되지 못한 감정, 욕구, 경험이 현재까지 영향을 미치는 것으로, 완결되지 못한 게슈탈트로서 지속적으로 자각을 요구하며 현재의 기능을 방해한다.",
    "definition_en": "Emotions, needs, and experiences from the past that were not fully expressed or resolved, continuing to affect the present as incomplete gestalts that persistently demand awareness and interfere with current functioning.",
    "significance": "게슈탈트 상담에서 심리적 문제의 주요 원인으로 보며, 미해결 감정의 완결이 상담의 핵심 과제이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "미해결 과제 개념을 게슈탈트 심리학의 미완성 효과와 연결하여 이론화"
      },
      {
        "name_ko": "블루마 자이가르닉",
        "name_en": "Bluma Zeigarnik",
        "contribution": "미완성 과제의 기억 효과(자이가르닉 효과)를 실험적으로 증명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "GESTALT_FG_008"
      },
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "빈 의자 기법",
        "name_en": "Empty Chair Technique",
        "id": "GESTALT_EC_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "미해결 과제 = 닫히지 않은 서랍: 계속 의식을 끌어당기며 주의를 분산시킨다",
      "differential": "정신분석의 억압된 내용은 무의식에 묻히지만, 게슈탈트의 미해결 과제는 끊임없이 전경으로 올라오려 한다",
      "key_point": "미해결 과제의 핵심은 '억압된 감정'이며, 특히 분노, 슬픔, 죄책감, 원망이 대표적이다",
      "common_mistake": "미해결 과제는 과거 사건 자체가 아니라, 그 사건에서 충분히 표현되지 못한 '감정'을 의미한다"
    }
  },
  {
    "id": "GESTALT_CT_005",
    "terminology": "접촉 (Contact)",
    "terminology_ko": "접촉",
    "terminology_en": "Contact",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "유기체가 환경과 만나는 경계에서 일어나는 상호작용으로, 자기와 타자를 구분하면서도 연결하는 건강한 관계 경험의 핵심이자, 성장과 변화가 일어나는 지점이다.",
    "definition_en": "The interaction occurring at the boundary where the organism meets the environment, the core of healthy relational experience that both differentiates and connects self and other, the point where growth and change occur.",
    "significance": "게슈탈트 상담에서 건강한 접촉은 심리적 건강의 지표이며, 접촉의 장애가 심리적 문제의 원인이라고 본다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "접촉을 유기체-환경 상호작용의 핵심으로 이론화"
      },
      {
        "name_ko": "폴 굿맨",
        "name_en": "Paul Goodman",
        "contribution": "접촉 이론의 체계적 정교화에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계",
        "name_en": "Contact Boundary",
        "id": "GESTALT_CB_011"
      },
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "접촉 철수 주기",
        "name_en": "Contact-Withdrawal Cycle",
        "id": "GESTALT_CWC_012"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "접촉 = 유기체와 환경이 만나는 경계면에서의 생생한 상호작용",
      "differential": "일상적 의미의 접촉(physical contact)이 아니라, 자기와 환경 간의 심리적 상호작용을 의미한다",
      "key_point": "건강한 접촉은 자기와 타자의 구분을 유지하면서 연결하는 것이다",
      "common_mistake": "접촉은 항상 좋은 것이 아니며, 건강한 접촉과 함께 건강한 철수도 필요하다"
    }
  },
  {
    "id": "GESTALT_CA_006",
    "terminology": "자각의 연속체 (Continuum of Awareness)",
    "terminology_ko": "자각의 연속체",
    "terminology_en": "Continuum of Awareness",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "순간순간 변화하는 자신의 경험을 끊김 없이 계속 알아차리는 것으로, 게슈탈트 상담에서 사용하는 기본적인 자각 훈련 방법이자 치료적 도구이다.",
    "definition_en": "The continuous, uninterrupted noticing of one's changing experience from moment to moment, a basic awareness training method and therapeutic tool used in Gestalt therapy.",
    "significance": "내담자가 자각을 회피하지 않고 지속적으로 유지하도록 돕는 게슈탈트 상담의 기본 기법으로, 자각 확대의 출발점이 된다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "자각의 연속체를 게슈탈트 상담의 기본 훈련으로 도입"
      },
      {
        "name_ko": "클라우디오 나란호",
        "name_en": "Claudio Naranjo",
        "contribution": "자각의 연속체 실습 방법을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "지금 여기",
        "name_en": "Here and Now",
        "id": "GESTALT_HN_003"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'지금 나는 ~을 알아차리고 있다'를 계속 반복하며 자각의 흐름을 따라가기",
      "differential": "자유연상이 떠오르는 생각을 따라가는 것이라면, 자각의 연속체는 현재의 감각·감정·사고를 알아차리는 것이다",
      "key_point": "자각의 연속체에서 끊기는 지점이 바로 자각 회피 또는 접촉 방해가 일어나는 지점이다",
      "common_mistake": "자각의 연속체는 생각의 연속이 아니라, 전체적 경험(감각, 감정, 사고, 행동)의 연속적 알아차림이다"
    }
  },
  {
    "id": "GESTALT_PR_007",
    "terminology": "현재화 기법 (Presentification)",
    "terminology_ko": "현재화 기법",
    "terminology_en": "Presentification",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "과거의 경험이나 상상을 현재 시제로 전환하여 '지금 여기'에서 재경험하도록 하는 기법으로, 과거 이야기를 현재형으로 말하거나 장면을 재연하게 하는 방식이다.",
    "definition_en": "A technique that converts past experiences or fantasies into the present tense for re-experiencing in the 'here and now,' such as having clients narrate past stories in the present tense or re-enact scenes.",
    "significance": "과거 경험에 대한 지적 분석을 넘어 현재 순간의 체험적 자각으로 전환시키는 게슈탈트 상담의 핵심 전략이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "현재화 기법을 게슈탈트 상담의 기본 전략으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지금 여기",
        "name_en": "Here and Now",
        "id": "GESTALT_HN_003"
      },
      {
        "name_ko": "빈 의자 기법",
        "name_en": "Empty Chair Technique",
        "id": "GESTALT_EC_010"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'그때 ~했어요' → '지금 ~하고 있어요'로 시제 전환 = 현재화",
      "differential": "정신분석의 과거 회상이 과거형으로 이루어지는 반면, 게슈탈트의 현재화는 현재형으로 재경험하게 한다",
      "key_point": "현재화를 통해 과거 감정이 현재에 생생하게 다시 느껴져야 미해결 과제가 해결될 수 있다",
      "common_mistake": "현재화는 단순히 동사 시제를 바꾸는 것이 아니라, 과거 경험을 지금 이 순간에 실제로 다시 경험하게 하는 것이다"
    }
  },
  {
    "id": "GESTALT_FG_008",
    "terminology": "전경과 배경 (Figure and Ground)",
    "terminology_ko": "전경과 배경",
    "terminology_en": "Figure and Ground",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "게슈탈트 심리학에서 차용한 개념으로, 현재 가장 두드러진 욕구나 관심이 전경(figure)이 되고 나머지는 배경(ground)으로 물러나는 지각의 조직 원리를 심리적 과정에 적용한 것이다.",
    "definition_en": "A concept borrowed from Gestalt psychology, applying the perceptual organization principle to psychological processes where the most prominent need or interest becomes the figure while the rest recedes into the ground.",
    "significance": "건강한 기능은 전경과 배경이 자유롭게 교체되는 것이며, 이 과정이 경직되면 심리적 문제가 발생한다는 게슈탈트 상담의 핵심 이론이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "게슈탈트 심리학의 전경/배경 원리를 심리치료에 적용"
      },
      {
        "name_ko": "쿠르트 코프카",
        "name_en": "Kurt Koffka",
        "contribution": "게슈탈트 심리학에서 전경/배경 개념의 이론적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      },
      {
        "name_ko": "게슈탈트 형성과 해체",
        "name_en": "Gestalt Formation and Destruction",
        "id": "GESTALT_GFD_013"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "배고프면 음식(전경) vs 풍경(배경), 먹고 나면 음식(배경) vs 다른 욕구(전경)",
      "differential": "게슈탈트 심리학의 시지각적 전경/배경과 달리, 게슈탈트 상담에서는 심리적 욕구와 감정에 적용한다",
      "key_point": "미해결 과제는 완결되지 못해 전경에 고착된 게슈탈트로, 새로운 경험의 전경 형성을 방해한다",
      "common_mistake": "전경/배경은 고정된 것이 아니라 욕구 충족에 따라 끊임없이 변화하는 역동적 과정이다"
    }
  },
  {
    "id": "GESTALT_CBD_009",
    "terminology": "접촉 경계 혼란 (Contact Boundary Disturbances)",
    "terminology_ko": "접촉 경계 혼란",
    "terminology_en": "Contact Boundary Disturbances",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "유기체와 환경 사이의 경계에서 건강한 접촉이 방해받는 다섯 가지 기제로, 내사, 투사, 융합, 반전, 편향이 포함되며 심리적 부적응의 원인이 된다.",
    "definition_en": "Five mechanisms that disturb healthy contact at the boundary between organism and environment, including introjection, projection, confluence, retroflection, and deflection, causing psychological maladjustment.",
    "significance": "게슈탈트 상담에서 심리적 문제의 원인을 설명하는 핵심 이론으로, 각 혼란 유형에 따른 상담 전략이 달라진다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "접촉 경계 혼란의 유형을 체계화"
      },
      {
        "name_ko": "어빙 폴스터",
        "name_en": "Erving Polster",
        "contribution": "접촉 경계 혼란의 임상적 적용을 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "접촉 경계",
        "name_en": "Contact Boundary",
        "id": "GESTALT_CB_011"
      },
      {
        "name_ko": "내사",
        "name_en": "Introjection",
        "id": "GESTALT_IJ_014"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "GESTALT_PJ_015"
      },
      {
        "name_ko": "융합",
        "name_en": "Confluence",
        "id": "GESTALT_CF_016"
      }
    ],
    "sub_types": [
      {
        "name": "내사 (Introjection)",
        "description": "외부의 것을 소화하지 않고 그대로 삼키는 것"
      },
      {
        "name": "투사 (Projection)",
        "description": "자신의 것을 타인에게 돌리는 것"
      },
      {
        "name": "융합 (Confluence)",
        "description": "자기와 환경의 경계가 모호해지는 것"
      },
      {
        "name": "반전 (Retroflection)",
        "description": "환경에 할 것을 자기에게 돌리는 것"
      },
      {
        "name": "편향 (Deflection)",
        "description": "직접적 접촉을 회피하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "접촉 경계 혼란 5가지: 내(내사), 투(투사), 융(융합), 반(반전), 편(편향)",
      "differential": "정신분석의 방어기제가 무의식적 자아 보호인 반면, 접촉 경계 혼란은 유기체-환경 상호작용의 장애이다",
      "key_point": "각 접촉 경계 혼란은 적절한 수준에서는 정상적이며, 과도하거나 경직될 때만 병리적이다",
      "common_mistake": "접촉 경계 혼란이 항상 병리적인 것은 아니며, 상황에 따라 적응적으로 사용될 수 있다"
    }
  },
  {
    "id": "GESTALT_EC_010",
    "terminology": "빈 의자 기법 (Empty Chair Technique)",
    "terminology_ko": "빈 의자 기법",
    "terminology_en": "Empty Chair Technique",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "빈 의자에 대화 상대(부재한 타인, 자기의 한 측면 등)가 앉아 있다고 상상하고 직접 대화하는 체험적 기법으로, 미해결 감정을 표현하고 통합을 촉진하는 대표적 게슈탈트 기법이다.",
    "definition_en": "An experiential technique where the client imagines a dialogue partner (absent other, aspect of self, etc.) sitting in an empty chair and engages in direct conversation, facilitating expression of unresolved feelings and promoting integration.",
    "significance": "게슈탈트 상담의 가장 대표적이고 널리 알려진 기법으로, 감정 처리 연구에서 그 효과가 실증적으로 지지되고 있다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "빈 의자 기법을 게슈탈트 상담의 핵심 기법으로 발전"
      },
      {
        "name_ko": "레슬리 그린버그",
        "name_en": "Leslie Greenberg",
        "contribution": "빈 의자 기법의 과정 연구와 감정초점치료에서의 체계적 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      },
      {
        "name_ko": "현재화 기법",
        "name_en": "Presentification",
        "id": "GESTALT_PR_007"
      },
      {
        "name_ko": "두 의자 기법",
        "name_en": "Two-Chair Technique",
        "id": "GESTALT_TC_017"
      },
      {
        "name_ko": "직면",
        "name_en": "Confrontation",
        "id": "PROCESS_CF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "빈 의자 = 대화하고 싶은 사람(또는 자기 일부)을 눈앞에 불러오기",
      "differential": "두 의자 기법이 자기 내면의 갈등을 다루는 것이라면, 빈 의자 기법은 주로 타인과의 미해결 관계를 다룬다",
      "key_point": "빈 의자 기법의 핵심은 단순히 말하는 것이 아니라, 감정을 충분히 경험하고 표현하는 것이다",
      "common_mistake": "빈 의자에 앉은 상대를 비난하는 것이 목적이 아니라, 미해결 감정을 처리하고 통합하는 것이 목적이다"
    }
  },
  {
    "id": "GESTALT_CB_011",
    "terminology": "접촉 경계 (Contact Boundary)",
    "terminology_ko": "접촉 경계",
    "terminology_en": "Contact Boundary",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "유기체(자기)와 환경(타자) 사이에 존재하는 심리적 경계로, 자기와 비자기를 구분하면서 동시에 만나는 지점이며, 모든 심리적 사건이 일어나는 장소이다.",
    "definition_en": "The psychological boundary between the organism (self) and the environment (other), the point that both differentiates and connects self and non-self, where all psychological events occur.",
    "significance": "게슈탈트 상담에서 건강한 성격은 유연한 접촉 경계를 가진 것이며, 경계의 경직이나 혼란이 부적응을 초래한다고 본다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "접촉 경계를 유기체-환경 상호작용의 핵심 개념으로 정립"
      },
      {
        "name_ko": "폴 굿맨",
        "name_en": "Paul Goodman",
        "contribution": "접촉 경계 이론의 철학적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "자기조절",
        "name_en": "Self-Regulation",
        "id": "GESTALT_SR_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "접촉 경계 = 피부 같은 것: 안과 밖을 구분하면서도 교류하게 하는 면",
      "differential": "물리적 경계(피부)가 아닌 심리적 경계를 의미하며, 유연하게 변화할 수 있어야 건강하다",
      "key_point": "접촉 경계가 너무 경직되면 고립, 너무 느슨하면 자기 상실이 된다",
      "common_mistake": "접촉 경계는 자기와 환경을 분리시키는 벽이 아니라, 만남이 일어나는 장소이다"
    }
  },
  {
    "id": "GESTALT_CWC_012",
    "terminology": "접촉-철수 주기 (Contact-Withdrawal Cycle)",
    "terminology_ko": "접촉-철수 주기",
    "terminology_en": "Contact-Withdrawal Cycle",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "유기체가 욕구를 자각하고 환경과 접촉하여 욕구를 충족한 후 접촉에서 철수하는 자연스러운 순환 과정으로, 이 과정이 방해받으면 미해결 과제가 형성된다.",
    "definition_en": "The natural cyclical process where the organism becomes aware of a need, contacts the environment to satisfy it, and then withdraws from contact; disruption of this process creates unfinished business.",
    "significance": "건강한 자기조절의 기본 리듬을 설명하며, 이 주기의 어느 단계에서 방해가 일어나는지를 파악하는 것이 상담의 진단적 도구가 된다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "접촉-철수 주기를 유기체 자기조절의 기본 모델로 제시"
      },
      {
        "name_ko": "조셉 징커",
        "name_en": "Joseph Zinker",
        "contribution": "접촉-철수 주기의 단계를 보다 세분화하여 경험의 주기(cycle of experience)로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      },
      {
        "name_ko": "게슈탈트 형성과 해체",
        "name_en": "Gestalt Formation and Destruction",
        "id": "GESTALT_GFD_013"
      },
      {
        "name_ko": "자기조절",
        "name_en": "Self-Regulation",
        "id": "GESTALT_SR_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감각 → 자각 → 에너지 동원 → 행동 → 접촉 → 충족 → 철수의 순환",
      "differential": "매슬로우의 욕구위계가 욕구의 내용을 다룬다면, 접촉-철수 주기는 욕구 충족의 과정을 다룬다",
      "key_point": "건강한 사람은 이 주기를 자유롭게 순환하지만, 신경증적 사람은 특정 단계에서 반복적으로 막힌다",
      "common_mistake": "철수는 회피가 아니라 욕구 충족 후의 자연스러운 이완 과정이다"
    }
  },
  {
    "id": "GESTALT_GFD_013",
    "terminology": "게슈탈트 형성과 해체 (Gestalt Formation and Destruction)",
    "terminology_ko": "게슈탈트 형성과 해체",
    "terminology_en": "Gestalt Formation and Destruction",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "우세한 욕구가 전경(게슈탈트)으로 형성되고, 충족된 후 배경으로 물러나(해체)면서 새로운 게슈탈트가 형성되는 연속적 과정으로, 건강한 심리적 기능의 기본 메커니즘이다.",
    "definition_en": "The continuous process where a dominant need forms as a figure (gestalt), is satisfied and then recedes into the ground (destruction), allowing a new gestalt to form; the fundamental mechanism of healthy psychological functioning.",
    "significance": "건강한 심리적 기능과 부적응의 차이를 게슈탈트의 자유로운 형성/해체 여부로 설명하는 핵심 이론이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "게슈탈트 형성과 해체의 역동을 치료적 개념으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "GESTALT_FG_008"
      },
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      },
      {
        "name_ko": "접촉-철수 주기",
        "name_en": "Contact-Withdrawal Cycle",
        "id": "GESTALT_CWC_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "욕구 부상(형성) → 충족(완결) → 소멸(해체) → 새로운 욕구 부상 = 건강한 순환",
      "differential": "정신분석의 카텍시스/반카텍시스와 유사하게 에너지의 흐름을 다루지만, 게슈탈트는 의식적 자각에 초점을 둔다",
      "key_point": "미해결 과제는 해체되지 못한 게슈탈트로, 새로운 게슈탈트 형성을 방해한다",
      "common_mistake": "게슈탈트의 '해체'는 파괴가 아니라 완결과 이완의 자연스러운 과정이다"
    }
  },
  {
    "id": "GESTALT_IJ_014",
    "terminology": "내사 (Introjection)",
    "terminology_ko": "내사",
    "terminology_en": "Introjection",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "외부의 가치, 신념, 규칙 등을 비판적으로 소화하지 않고 통째로 삼키는 접촉 경계 혼란으로, '~해야 한다'는 형태의 내면화된 메시지로 나타나며 진정한 자기와의 괴리를 유발한다.",
    "definition_en": "A contact boundary disturbance of swallowing external values, beliefs, and rules without critical digestion, manifesting as internalized 'should' messages and creating a gap from the authentic self.",
    "significance": "가치 조건의 내면화와 유사한 기제를 설명하며, 게슈탈트 상담에서 '누구의 목소리인가?'를 탐색하는 작업의 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "내사를 접촉 경계 혼란의 한 유형으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "GESTALT_PJ_015"
      },
      {
        "name_ko": "톱독과 언더독",
        "name_en": "Topdog and Underdog",
        "id": "GESTALT_TU_019"
      },
      {
        "name_ko": "가치 조건",
        "name_en": "Conditions of Worth",
        "id": "PERSON_CW_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내사 = 음식을 씹지 않고 통째로 삼킨 것 → 소화 불량(부적응)",
      "differential": "건강한 동화(assimilation)는 외부 정보를 자기 것으로 소화하지만, 내사는 소화 없이 통째로 삼키는 것이다",
      "key_point": "내사된 것은 '나의 것'이 아니라 '남의 것'이므로, 이를 자각하고 '씹어서' 소화하거나 뱉어내야 한다",
      "common_mistake": "내사는 학습과 다르다. 학습은 비판적 소화를 거치지만, 내사는 무비판적 수용이다"
    }
  },
  {
    "id": "GESTALT_PJ_015",
    "terminology": "투사 (Projection)",
    "terminology_ko": "투사",
    "terminology_en": "Projection",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "자신의 감정, 욕구, 특성을 인정하지 못하고 타인이나 환경에 돌리는 접촉 경계 혼란으로, 자기 경험의 주인으로서의 책임을 회피하는 기제이다.",
    "definition_en": "A contact boundary disturbance of attributing one's own feelings, needs, and characteristics to others or the environment, a mechanism of avoiding responsibility as the owner of one's experience.",
    "significance": "자기 경험의 소유와 책임을 다루는 게슈탈트 상담에서, 투사의 자각과 재소유가 치료적 변화의 중요한 과정이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "투사를 접촉 경계 혼란의 한 유형으로 체계화하고 자기 소유(ownership)와 연결"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "내사",
        "name_en": "Introjection",
        "id": "GESTALT_IJ_014"
      },
      {
        "name_ko": "책임",
        "name_en": "Responsibility",
        "id": "GESTALT_RS_020"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DF_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "투사 = 내 것을 남에게 던지기: '내가 화난 게 아니라 저 사람이 화가 났어'",
      "differential": "정신분석의 투사는 무의식적 방어기제이지만, 게슈탈트의 투사는 접촉 경계에서의 자기-환경 혼동이다",
      "key_point": "투사를 다룰 때는 '그 사람이 ~한다'를 '내가 ~한다'로 전환하여 재소유하도록 돕는다",
      "common_mistake": "투사는 내사의 반대가 아니라, 내사와 함께 작동하는 경우가 많다(내사된 기준으로 자기를 판단 → 수용 못함 → 투사)"
    }
  },
  {
    "id": "GESTALT_CF_016",
    "terminology": "융합 (Confluence)",
    "terminology_ko": "융합",
    "terminology_en": "Confluence",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "자기와 타인(환경) 사이의 경계가 모호해져 구분이 사라지는 접촉 경계 혼란으로, 갈등을 회피하기 위해 차이를 인식하지 못하거나 억압하는 상태이다.",
    "definition_en": "A contact boundary disturbance where the boundary between self and other (environment) becomes blurred and distinction disappears, a state of failing to recognize or suppressing differences to avoid conflict.",
    "significance": "관계에서의 자기 상실과 의존 문제를 설명하며, 건강한 관계는 접촉과 분리가 자유로운 것임을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "융합을 접촉 경계 혼란의 한 유형으로 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "접촉 경계",
        "name_en": "Contact Boundary",
        "id": "GESTALT_CB_011"
      },
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "융합 = 두 물감이 섞여 경계가 사라진 상태: '우리'만 있고 '나'가 없는 관계",
      "differential": "공감이 타인의 경험을 이해하면서 자기를 유지하는 것이라면, 융합은 자기와 타인의 구분 자체가 사라지는 것이다",
      "key_point": "융합 상태에서는 진정한 접촉이 불가능하다. 접촉은 서로 다른 두 존재가 만나는 것이기 때문이다",
      "common_mistake": "융합은 친밀감이 아니라, 자기와 타인의 차이를 지워버린 상태이다"
    }
  },
  {
    "id": "GESTALT_TC_017",
    "terminology": "두 의자 기법 (Two-Chair Technique)",
    "terminology_ko": "두 의자 기법",
    "terminology_en": "Two-Chair Technique",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "내면의 상반된 두 부분(예: 톱독과 언더독) 사이의 대화를 두 의자를 번갈아 앉으며 진행하는 기법으로, 내적 갈등의 자각과 통합을 촉진한다.",
    "definition_en": "A technique where the client alternates between two chairs to conduct a dialogue between opposing inner parts (e.g., topdog and underdog), facilitating awareness and integration of internal conflicts.",
    "significance": "내적 갈등을 체험적으로 다루는 효과적 기법으로, 감정초점치료(EFT)에서도 핵심 기법으로 채택되어 실증적 지지를 받고 있다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "두 의자 기법을 내적 갈등 해결의 핵심 기법으로 발전"
      },
      {
        "name_ko": "레슬리 그린버그",
        "name_en": "Leslie Greenberg",
        "contribution": "두 의자 기법의 과정 연구와 감정초점치료에서의 체계적 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "빈 의자 기법",
        "name_en": "Empty Chair Technique",
        "id": "GESTALT_EC_010"
      },
      {
        "name_ko": "톱독과 언더독",
        "name_en": "Topdog and Underdog",
        "id": "GESTALT_TU_019"
      },
      {
        "name_ko": "양극성",
        "name_en": "Polarities",
        "id": "GESTALT_PL_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "두 의자 = 내면의 두 목소리가 직접 대면하여 대화하는 것",
      "differential": "빈 의자가 타인과의 미해결 관계를 다루는 것이라면, 두 의자는 자기 내면의 분열된 부분 간 대화이다",
      "key_point": "두 의자 기법의 목표는 한쪽이 이기는 것이 아니라, 양측이 통합되는 것이다",
      "common_mistake": "두 의자 기법에서 상담자가 한쪽 편을 들어서는 안 되며, 양쪽 모두의 자각과 표현을 촉진해야 한다"
    }
  },
  {
    "id": "GESTALT_SR_018",
    "terminology": "자기조절 (Self-Regulation)",
    "terminology_ko": "자기조절",
    "terminology_en": "Self-Regulation",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "유기체가 내적 균형을 유지하기 위해 스스로 욕구를 감지하고 충족하는 자연적 과정으로, 게슈탈트 상담에서는 유기체적 자기조절을 신뢰하고 외부 통제보다 내적 조절을 강조한다.",
    "definition_en": "The natural process by which the organism detects and fulfills its own needs to maintain internal balance; Gestalt therapy trusts organismic self-regulation and emphasizes internal regulation over external control.",
    "significance": "인간중심 상담의 자기실현 경향성과 유사한 게슈탈트의 기본 가정으로, 상담이 내담자의 자기조절 능력을 회복시키는 것을 목표로 한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "유기체적 자기조절을 게슈탈트 상담의 기본 가정으로 확립"
      },
      {
        "name_ko": "쿠르트 골드스타인",
        "name_en": "Kurt Goldstein",
        "contribution": "유기체적 자기조절의 개념적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉-철수 주기",
        "name_en": "Contact-Withdrawal Cycle",
        "id": "GESTALT_CWC_012"
      },
      {
        "name_ko": "자기실현 경향성",
        "name_en": "Actualizing Tendency",
        "id": "PERSON_AT_002"
      },
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "GESTALT_FG_008"
      }
    ],
    "sub_types": [
      {
        "name": "유기체적 자기조절",
        "description": "유기체의 자연스러운 욕구 충족 과정을 따르는 조절"
      },
      {
        "name": "의도적 자기조절",
        "description": "외부 기준이나 규칙에 따라 행동을 통제하는 조절"
      }
    ],
    "quiz_hints": {
      "mnemonic": "유기체적 자기조절 = 몸이 알아서 하게 두기 vs 의도적 자기조절 = 머리로 통제하기",
      "differential": "CBT의 자기조절이 인지적 통제를 강조하는 반면, 게슈탈트의 자기조절은 유기체적 지혜를 신뢰한다",
      "key_point": "게슈탈트 상담은 유기체적 자기조절을 회복시키는 것이 목표이지, 의도적 통제를 강화하는 것이 아니다",
      "common_mistake": "자기조절은 자기통제와 다르다. 자기통제는 외부 기준에 맞추는 것이지만, 자기조절은 내적 지혜를 따르는 것이다"
    }
  },
  {
    "id": "GESTALT_TU_019",
    "terminology": "톱독과 언더독 (Topdog and Underdog)",
    "terminology_ko": "톱독과 언더독",
    "terminology_en": "Topdog and Underdog",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "성격 내부의 상반된 두 측면으로, 톱독은 '~해야 한다'고 명령하는 권위적 부분이고 언더독은 '하지만 ~할 수 없다'고 저항하는 부분으로, 이 둘의 갈등이 내적 교착 상태를 유발한다.",
    "definition_en": "Two opposing aspects within personality: the topdog is the authoritative part that commands 'you should,' while the underdog is the resistant part that responds 'but I can't,' their conflict creating internal impasse.",
    "significance": "내적 갈등의 구조를 이해하는 게슈탈트의 독특한 개념으로, 두 의자 기법의 이론적 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "톱독과 언더독의 개념을 통해 내적 갈등의 역동을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "두 의자 기법",
        "name_en": "Two-Chair Technique",
        "id": "GESTALT_TC_017"
      },
      {
        "name_ko": "양극성",
        "name_en": "Polarities",
        "id": "GESTALT_PL_021"
      },
      {
        "name_ko": "내사",
        "name_en": "Introjection",
        "id": "GESTALT_IJ_014"
      },
      {
        "name_ko": "교착 상태",
        "name_en": "Impasse",
        "id": "GESTALT_IM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "톱독 = 부모/초자아의 목소리('해야 해!'), 언더독 = 저항/회피의 목소리('못 해...')",
      "differential": "프로이트의 초자아-이드 갈등과 유사하나, 펄스는 이를 의식적 자각의 대상으로 보고 대화를 통한 통합을 추구한다",
      "key_point": "펄스는 톱독과 언더독의 대결에서 항상 언더독이 이긴다고 보았다(수동적 저항의 힘)",
      "common_mistake": "톱독이 항상 나쁜 것이 아니며, 문제는 둘의 분열과 갈등이지 어느 한쪽의 존재가 아니다"
    }
  },
  {
    "id": "GESTALT_RS_020",
    "terminology": "책임 (Responsibility)",
    "terminology_ko": "책임",
    "terminology_en": "Responsibility",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "자신의 감정, 사고, 행동의 주인으로서 그에 대한 소유권을 갖는 것으로, 게슈탈트 상담에서는 'response-ability(반응할 수 있는 능력)'라는 원래 의미로 이해한다.",
    "definition_en": "Taking ownership of one's feelings, thoughts, and actions; in Gestalt therapy, understood in its original sense as 'response-ability'—the ability to respond.",
    "significance": "내담자가 자기 경험과 행동의 주체임을 인식하게 하는 것이 게슈탈트 상담의 핵심 목표 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "책임을 반응 능력(response-ability)으로 재해석하여 상담의 핵심 가치로 정립"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "실존적 책임 개념을 체계적으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "GESTALT_PJ_015"
      },
      {
        "name_ko": "자유",
        "name_en": "Freedom",
        "id": "EXIST_FR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "책임 = response + ability = 상황에 반응할 수 있는 능력 = 선택의 주체가 되기",
      "differential": "도덕적 의무로서의 책임이 아니라, 자기 경험의 소유자로서의 능력을 의미한다",
      "key_point": "게슈탈트 상담에서는 '나는 ~할 수 없다'를 '나는 ~하지 않기로 선택한다'로 전환하도록 돕는다",
      "common_mistake": "게슈탈트의 책임은 비난이나 죄책감과 무관하며, 자기 경험의 소유권을 갖는 것이다"
    }
  },
  {
    "id": "GESTALT_PL_021",
    "terminology": "양극성 (Polarities)",
    "terminology_ko": "양극성",
    "terminology_en": "Polarities",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "성격 내에 존재하는 상반된 특성이나 경향의 쌍으로(예: 강함/약함, 독립/의존), 한쪽을 부인하면 내적 분열이 생기며 양극의 통합이 성장의 핵심이다.",
    "definition_en": "Pairs of opposing characteristics or tendencies within personality (e.g., strength/weakness, independence/dependence); denying one pole creates internal splitting, and integration of both poles is central to growth.",
    "significance": "게슈탈트 상담에서 내적 갈등의 본질을 양극적 분열로 이해하며, 통합적 자기 경험을 상담의 핵심 목표로 삼는다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "양극성 개념을 게슈탈트 상담의 핵심 이론으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "톱독과 언더독",
        "name_en": "Topdog and Underdog",
        "id": "GESTALT_TU_019"
      },
      {
        "name_ko": "두 의자 기법",
        "name_en": "Two-Chair Technique",
        "id": "GESTALT_TC_017"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "양극 = 동전의 양면: 한쪽만 보면 전체를 놓친다. 양쪽 모두를 자각하고 통합해야 한다",
      "differential": "융의 그림자(shadow) 개념과 유사하나, 게슈탈트는 무의식적 통합이 아닌 의식적 자각과 대화를 통한 통합을 추구한다",
      "key_point": "양극성의 통합은 한쪽을 선택하는 것이 아니라, 양쪽 모두를 수용하고 통합하는 것이다",
      "common_mistake": "양극의 통합은 중간 지점을 찾는 타협이 아니라, 양극 모두를 온전히 경험하고 수용하는 것이다"
    }
  },
  {
    "id": "GESTALT_IM_022",
    "terminology": "교착 상태 (Impasse)",
    "terminology_ko": "교착 상태",
    "terminology_en": "Impasse",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "내적 갈등의 양극이 팽팽하게 대치하여 앞으로 나아가지도 뒤로 물러나지도 못하는 막힌 상태로, 펄스가 제시한 신경증적 성격의 다섯 층 중 하나이다.",
    "definition_en": "A stuck state where opposing poles of an internal conflict are deadlocked, unable to move forward or backward; one of the five layers of neurotic personality proposed by Perls.",
    "significance": "상담에서 교착 상태를 통과하는 것이 진정한 변화의 시작이며, 이 지점에서 내담자가 외부 지지 대신 자기 지지를 발견하게 된다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "교착 상태를 신경증 층의 핵심 개념으로 제시하고 이를 통과하는 것이 치료의 핵심이라고 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경증의 다섯 층",
        "name_en": "Five Layers of Neurosis",
        "id": "GESTALT_FLN_023"
      },
      {
        "name_ko": "톱독과 언더독",
        "name_en": "Topdog and Underdog",
        "id": "GESTALT_TU_019"
      },
      {
        "name_ko": "양극성",
        "name_en": "Polarities",
        "id": "GESTALT_PL_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교착 상태 = 막다른 골목: 톱독과 언더독이 팽팽히 맞서 꼼짝 못하는 상태",
      "differential": "정신분석의 저항(resistance)이 무의식적 회피라면, 게슈탈트의 교착은 의식적으로 경험되는 막힘이다",
      "key_point": "교착 상태를 회피하지 않고 머무르면서 충분히 경험하는 것이 돌파의 열쇠이다",
      "common_mistake": "교착 상태는 상담의 실패가 아니라, 진정한 변화가 일어나기 직전의 중요한 치료적 순간이다"
    }
  },
  {
    "id": "GESTALT_FLN_023",
    "terminology": "신경증의 다섯 층 (Five Layers of Neurosis)",
    "terminology_ko": "신경증의 다섯 층",
    "terminology_en": "Five Layers of Neurosis",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "펄스가 제시한 성격의 다섯 가지 층으로, 가식층(phony), 공포층(phobic), 교착층(impasse), 내파층(implosive), 폭발층(explosive) 순서로 벗겨져 진정한 자기에 도달한다.",
    "definition_en": "Five personality layers proposed by Perls: phony, phobic, impasse, implosive, and explosive layers that are peeled away in sequence to reach the authentic self.",
    "significance": "게슈탈트 상담에서 성격 변화의 과정을 단계적으로 설명하는 독특한 모델로, 상담 과정의 로드맵 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "신경증의 다섯 층 모델을 통해 성격 변화의 과정을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "교착 상태",
        "name_en": "Impasse",
        "id": "GESTALT_IM_022"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      }
    ],
    "sub_types": [
      {
        "name": "가식층 (Phony Layer)",
        "description": "사회적 역할과 게임을 하며 진정한 자기를 숨기는 층"
      },
      {
        "name": "공포층 (Phobic Layer)",
        "description": "진정한 자기를 드러내는 것에 대한 두려움의 층"
      },
      {
        "name": "교착층 (Impasse Layer)",
        "description": "변화도 퇴행도 할 수 없는 막힌 층"
      },
      {
        "name": "내파층 (Implosive Layer)",
        "description": "억눌린 에너지가 내부로 향하여 마비와 죽음 같은 느낌을 경험하는 층"
      },
      {
        "name": "폭발층 (Explosive Layer)",
        "description": "억압된 에너지가 터져 나오며 진정한 자기를 만나는 층"
      }
    ],
    "quiz_hints": {
      "mnemonic": "가(가식)→공(공포)→교(교착)→내(내파)→폭(폭발) = 양파를 까듯 층층이 벗기기",
      "differential": "정신분석의 성격 구조(원초아/자아/초자아)가 수평적 구분이라면, 신경증의 다섯 층은 수직적(깊이) 구분이다",
      "key_point": "폭발층을 통과해야 비로소 진정한 감정과 자기를 만나게 되며, 이것이 치료적 변화의 핵심이다",
      "common_mistake": "폭발층의 '폭발'은 파괴적 행동이 아니라, 억눌린 에너지의 해방과 진정한 감정의 표출이다"
    }
  },
  {
    "id": "GESTALT_RF_024",
    "terminology": "반전 (Retroflection)",
    "terminology_ko": "반전",
    "terminology_en": "Retroflection",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "환경(타인)에게 향해야 할 에너지나 행동을 자기 자신에게 돌리는 접촉 경계 혼란으로, 환경에 대한 표현을 억제하고 대신 자기에게 행하는 것이다.",
    "definition_en": "A contact boundary disturbance of turning energy or action meant for the environment (others) back onto oneself, inhibiting expression toward the environment and instead doing to oneself what one wants to do to others.",
    "significance": "자해, 자기비난, 심인성 증상 등의 기제를 설명하며, 상담에서 억압된 에너지의 방향을 재전환하는 것이 치료적 과제이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "반전을 접촉 경계 혼란의 한 유형으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "GESTALT_PJ_015"
      },
      {
        "name_ko": "미해결 과제",
        "name_en": "Unfinished Business",
        "id": "GESTALT_UB_004"
      }
    ],
    "sub_types": [
      {
        "name": "능동적 반전",
        "description": "타인에게 하고 싶은 것을 자기에게 하는 것 (예: 타인을 때리고 싶은데 자기를 때림)"
      },
      {
        "name": "수동적 반전",
        "description": "타인에게 받고 싶은 것을 자기에게 제공하는 것 (예: 위로받고 싶은데 자기를 위로함)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "반전 = U턴: 바깥으로 나가야 할 에너지가 돌아서 자기에게 향함",
      "differential": "투사가 '내 것을 남에게 돌리기'라면, 반전은 '남에게 할 것을 나에게 하기'이다",
      "key_point": "반전의 치료는 자기에게 향한 에너지의 원래 방향(대상)을 자각하고 표현하게 하는 것이다",
      "common_mistake": "모든 자기관리가 반전인 것은 아니며, 환경 표현을 억제한 결과로 자기에게 돌리는 경우만 반전이다"
    }
  },
  {
    "id": "GESTALT_DL_025",
    "terminology": "편향 (Deflection)",
    "terminology_ko": "편향",
    "terminology_en": "Deflection",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "직접적인 접촉의 강도를 약화시키거나 회피하는 접촉 경계 혼란으로, 유머, 추상화, 주제 전환, 일반화 등을 통해 감정적 접촉을 피하는 것이다.",
    "definition_en": "A contact boundary disturbance that weakens or avoids the intensity of direct contact through humor, abstraction, topic changes, generalizations, and other means of avoiding emotional contact.",
    "significance": "상담 장면에서 내담자가 정서적으로 중요한 주제를 회피하는 양상을 이해하고 다루는 데 중요한 개념이다.",
    "key_researchers": [
      {
        "name_ko": "어빙 폴스터",
        "name_en": "Erving Polster",
        "contribution": "편향을 접촉 경계 혼란의 한 유형으로 추가 분류"
      },
      {
        "name_ko": "미리엄 폴스터",
        "name_en": "Miriam Polster",
        "contribution": "편향의 임상적 양상과 치료적 개입을 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계 혼란",
        "name_en": "Contact Boundary Disturbances",
        "id": "GESTALT_CBD_009"
      },
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편향 = 감정의 방탄조끼: 직접적인 감정 접촉이 와닿지 않게 빗겨나가게 함",
      "differential": "다른 접촉 경계 혼란이 접촉의 내용을 변형하는 것이라면, 편향은 접촉의 강도를 약화시킨다",
      "key_point": "편향의 예: 슬픈 이야기를 할 때 웃기, 구체적 감정 대신 일반론을 말하기, 주제를 갑자기 바꾸기",
      "common_mistake": "모든 유머가 편향인 것은 아니며, 감정 접촉을 회피하기 위한 유머만 편향에 해당한다"
    }
  },
  {
    "id": "GESTALT_EXP_026",
    "terminology": "실험 (Experiment)",
    "terminology_ko": "실험",
    "terminology_en": "Experiment",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "상담 장면에서 내담자에게 새로운 행동이나 경험을 직접 시도해 보도록 제안하는 게슈탈트 상담의 핵심 방법론으로, 단순한 이해를 넘어 체험적 학습을 촉진한다.",
    "definition_en": "A core methodology of Gestalt therapy in which the therapist proposes that the client directly try new behaviors or experiences in the counseling setting, promoting experiential learning beyond mere understanding.",
    "significance": "게슈탈트 상담의 '이야기하기보다 해보기' 원칙을 구현하는 핵심 전략으로, 자각과 변화를 촉진하는 주요 수단이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "실험을 게슈탈트 상담의 핵심 방법론으로 발전"
      },
      {
        "name_ko": "조셉 징커",
        "name_en": "Joseph Zinker",
        "contribution": "'창조적 과정으로서의 게슈탈트 상담'에서 실험의 체계적 설계 방법을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "빈 의자 기법",
        "name_en": "Empty Chair Technique",
        "id": "GESTALT_EC_010"
      },
      {
        "name_ko": "두 의자 기법",
        "name_en": "Two-Chair Technique",
        "id": "GESTALT_TC_017"
      },
      {
        "name_ko": "과장하기",
        "name_en": "Exaggeration",
        "id": "GESTALT_EG_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실험 = '한번 해보세요': 말로 설명하지 않고 직접 경험하게 하기",
      "differential": "행동치료의 행동 실험이 가설 검증을 위한 것이라면, 게슈탈트 실험은 자각 확대를 위한 것이다",
      "key_point": "실험은 미리 계획된 처방이 아니라, 상담 과정에서 즉흥적으로 생성되는 것이 이상적이다",
      "common_mistake": "게슈탈트 실험은 성공/실패가 없으며, 무슨 결과가 나오든 자각의 재료가 된다"
    }
  },
  {
    "id": "GESTALT_EG_027",
    "terminology": "과장하기 (Exaggeration)",
    "terminology_ko": "과장하기",
    "terminology_en": "Exaggeration",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "내담자의 말, 몸짓, 감정 표현 등을 의도적으로 크게 과장하여 반복하도록 하는 기법으로, 미처 자각하지 못한 의미나 감정을 명확히 드러나게 한다.",
    "definition_en": "A technique of intentionally having the client exaggerate and repeat their words, gestures, or emotional expressions to make previously unnoticed meanings or feelings clearly apparent.",
    "significance": "미세한 비언어적 단서를 자각의 수준으로 끌어올리는 효과적 기법으로, 신체와 감정의 연결을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "과장하기를 게슈탈트 상담의 주요 기법으로 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실험",
        "name_en": "Experiment",
        "id": "GESTALT_EXP_026"
      },
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "신체 자각",
        "name_en": "Body Awareness",
        "id": "GESTALT_BA_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과장하기 = 확대경: 작은 것을 크게 만들어 자세히 볼 수 있게 하기",
      "differential": "행동 리허설이 새로운 행동을 연습하는 것이라면, 과장하기는 기존 행동을 증폭하여 자각하게 하는 것이다",
      "key_point": "특히 비언어적 행동(주먹 쥐기, 다리 떨기 등)을 과장하면 그 안에 담긴 감정이 드러난다",
      "common_mistake": "과장하기의 목적은 내담자를 당황하게 하는 것이 아니라, 자각을 높이는 것이다"
    }
  },
  {
    "id": "GESTALT_BA_028",
    "terminology": "신체 자각 (Body Awareness)",
    "terminology_ko": "신체 자각",
    "terminology_en": "Body Awareness",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "자신의 신체 감각, 자세, 움직임, 긴장 등을 알아차리는 것으로, 게슈탈트 상담에서 신체는 감정과 경험의 중요한 표현 경로로 간주된다.",
    "definition_en": "Noticing one's bodily sensations, posture, movements, and tensions; in Gestalt therapy, the body is considered an important channel for expressing emotions and experiences.",
    "significance": "언어로 표현되지 않는 감정이 신체를 통해 드러나므로, 신체 자각은 전체적 자각의 필수적 구성 요소이다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "신체 표현을 상담에서 다루는 핵심 요소로 강조"
      },
      {
        "name_ko": "로라 펄스",
        "name_en": "Laura Perls",
        "contribution": "신체 작업과 접촉에 관한 게슈탈트적 접근을 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자각",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "과장하기",
        "name_en": "Exaggeration",
        "id": "GESTALT_EG_027"
      },
      {
        "name_ko": "체감",
        "name_en": "Felt Sense",
        "id": "PERSON_FS_034"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "말은 거짓말을 할 수 있지만, 몸은 진실을 말한다 → 신체 자각의 중요성",
      "differential": "인지적 자각이 생각을 알아차리는 것이라면, 신체 자각은 몸의 메시지를 알아차리는 것이다",
      "key_point": "게슈탈트 상담자는 내담자의 말뿐만 아니라 자세, 호흡, 표정, 제스처 등 신체 표현에도 주의를 기울인다",
      "common_mistake": "신체 자각은 이완 훈련이 아니라, 몸이 무엇을 표현하고 있는지를 알아차리는 것이다"
    }
  },
  {
    "id": "GESTALT_DR_029",
    "terminology": "꿈 작업 (Dream Work)",
    "terminology_ko": "꿈 작업",
    "terminology_en": "Dream Work",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "게슈탈트 상담에서 꿈의 각 요소를 자기의 투사된 부분으로 보고, 꿈의 각 인물이나 사물이 되어 현재 시제로 이야기하며 체험하는 독특한 꿈 해석 방법이다.",
    "definition_en": "A unique dream interpretation method in Gestalt therapy that views each element of a dream as a projected part of the self, having the client become each person or object in the dream and narrate in the present tense.",
    "significance": "정신분석의 꿈 해석과 달리 체험적·현재적 접근을 취하며, 꿈을 통해 부인되거나 소외된 자기 부분을 재통합하는 것을 목표로 한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "게슈탈트적 꿈 작업 방법을 발전시켜 '꿈은 실존에 이르는 왕도'라고 명명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투사",
        "name_en": "Projection",
        "id": "GESTALT_PJ_015"
      },
      {
        "name_ko": "양극성",
        "name_en": "Polarities",
        "id": "GESTALT_PL_021"
      },
      {
        "name_ko": "현재화 기법",
        "name_en": "Presentification",
        "id": "GESTALT_PR_007"
      },
      {
        "name_ko": "무의식",
        "name_en": "Unconscious",
        "id": "PSYCHOD_UC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "펄스: '꿈은 무의식에 이르는 왕도가 아니라, 실존에 이르는 왕도이다'",
      "differential": "프로이트가 꿈을 무의식의 상징으로 해석한 반면, 펄스는 꿈의 모든 요소를 자기의 투사로 보고 체험하게 한다",
      "key_point": "꿈 속의 모든 사람, 사물, 장소는 자기 성격의 일부이며, 각각이 되어보는 것이 핵심이다",
      "common_mistake": "게슈탈트 꿈 작업에서는 꿈을 분석하거나 해석하지 않고, 꿈의 요소를 직접 '살아보는' 것이 핵심이다"
    }
  },
  {
    "id": "GESTALT_IT_030",
    "terminology": "나-너 관계 (I-Thou Relationship)",
    "terminology_ko": "나-너 관계",
    "terminology_en": "I-Thou Relationship",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "마틴 부버의 대화 철학에서 차용한 개념으로, 상대를 수단이 아닌 온전한 존재로 만나는 진정한 관계를 의미하며, 게슈탈트 상담에서 이상적인 상담자-내담자 관계의 모델이다.",
    "definition_en": "A concept borrowed from Martin Buber's dialogical philosophy, referring to an authentic relationship of encountering the other as a whole being rather than as a means, the ideal model for the therapist-client relationship in Gestalt therapy.",
    "significance": "게슈탈트 상담의 관계적 측면을 강조하며, 기법보다 진정한 만남이 치료적이라는 대화적 관점의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "마틴 부버",
        "name_en": "Martin Buber",
        "contribution": "나-너(I-Thou)와 나-그것(I-It)의 관계 양식을 철학적으로 구분"
      },
      {
        "name_ko": "로라 펄스",
        "name_en": "Laura Perls",
        "contribution": "부버의 대화 철학을 게슈탈트 상담의 관계적 기초로 통합"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "대화적 관계",
        "name_en": "Dialogical Relationship",
        "id": "GESTALT_DG_031"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "진정성",
        "name_en": "Authenticity",
        "id": "EXIST_AU_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "나-너(I-Thou) = 온전한 만남 vs 나-그것(I-It) = 도구적 관계",
      "differential": "로저스의 핵심 조건이 상담자의 일방적 태도를 강조한다면, 나-너 관계는 상호적 만남을 강조한다",
      "key_point": "나-너 관계는 상담자도 자신을 숨기지 않고 진정한 존재로 만남에 참여하는 것을 요구한다",
      "common_mistake": "나-너 관계가 항상 유지되는 것은 아니며, 순간적으로 경험되는 만남의 질을 의미한다"
    }
  },
  {
    "id": "GESTALT_DG_031",
    "terminology": "대화적 관계 (Dialogical Relationship)",
    "terminology_ko": "대화적 관계",
    "terminology_en": "Dialogical Relationship",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "상담자와 내담자가 나-너 관계의 정신으로 서로를 온전히 존중하며 진정한 만남을 이루는 관계 양식으로, 현대 관계적 게슈탈트 상담의 핵심 원리이다.",
    "definition_en": "A relational mode in which therapist and client fully respect each other in the spirit of the I-Thou relationship and achieve genuine encounter, a core principle of contemporary relational Gestalt therapy.",
    "significance": "초기 게슈탈트의 대결적 스타일에서 벗어나 관계 중심의 현대 게슈탈트 상담으로 발전하는 데 핵심적 역할을 했다.",
    "key_researchers": [
      {
        "name_ko": "게리 요텐스",
        "name_en": "Gary Yontef",
        "contribution": "대화적 관계를 현대 게슈탈트 상담의 중심 원리로 정립"
      },
      {
        "name_ko": "린 제이콥스",
        "name_en": "Lynne Jacobs",
        "contribution": "대화적 게슈탈트 상담의 이론적 발전에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "나-너 관계",
        "name_en": "I-Thou Relationship",
        "id": "GESTALT_IT_030"
      },
      {
        "name_ko": "접촉",
        "name_en": "Contact",
        "id": "GESTALT_CT_005"
      },
      {
        "name_ko": "현존",
        "name_en": "Presence",
        "id": "GESTALT_PS_032"
      },
      {
        "name_ko": "핵심 조건",
        "name_en": "Core Conditions",
        "id": "PERSON_CC_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대화적 관계의 4요소: 포함(inclusion), 현존(presence), 비착취적 삶(lived), 헌신적 대화(committed dialogue)",
      "differential": "전이 관계가 과거 관계의 반복이라면, 대화적 관계는 현재 순간의 진정한 만남이다",
      "key_point": "대화적 관계에서 상담자는 전문가가 아닌 동등한 인간으로서 내담자와 만난다",
      "common_mistake": "대화적 관계는 일상적 대화가 아니라, 치료적 목적을 가진 진정한 만남의 관계이다"
    }
  },
  {
    "id": "GESTALT_PS_032",
    "terminology": "현존 (Presence)",
    "terminology_ko": "현존",
    "terminology_en": "Presence",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "상담자가 상담 관계에서 온전히 '지금 여기'에 존재하며, 자신의 경험에 개방적이고 내담자에게 진정으로 관여하는 상태를 의미하는 대화적 관계의 핵심 요소이다.",
    "definition_en": "A core element of the dialogical relationship where the therapist fully exists in the 'here and now' of the counseling relationship, open to their own experience and genuinely engaged with the client.",
    "significance": "상담자의 현존이 내담자의 자각과 접촉을 촉진하며, 대화적 게슈탈트 상담에서 가장 중요한 치료적 자세이다.",
    "key_researchers": [
      {
        "name_ko": "게리 요텐스",
        "name_en": "Gary Yontef",
        "contribution": "현존을 대화적 관계의 핵심 요소로 강조"
      },
      {
        "name_ko": "마틴 부버",
        "name_en": "Martin Buber",
        "contribution": "현존의 철학적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대화적 관계",
        "name_en": "Dialogical Relationship",
        "id": "GESTALT_DG_031"
      },
      {
        "name_ko": "지금 여기",
        "name_en": "Here and Now",
        "id": "GESTALT_HN_003"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "현존 = 상담자가 머리(이론)가 아닌 온 존재로 내담자와 함께 있는 것",
      "differential": "로저스의 일치성(congruence)이 진실된 태도라면, 게슈탈트의 현존은 지금 이 순간에 온전히 존재하는 것이다",
      "key_point": "현존하는 상담자는 기법 적용에 집착하지 않고, 순간순간의 만남에 충실하게 반응한다",
      "common_mistake": "현존은 상담자가 가만히 앉아 있는 것이 아니라, 적극적으로 '지금 여기'에 참여하는 것이다"
    }
  },
  {
    "id": "GESTALT_PG_033",
    "terminology": "게슈탈트 기도문 (Gestalt Prayer)",
    "terminology_ko": "게슈탈트 기도문",
    "terminology_en": "Gestalt Prayer",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "펄스가 작성한 짧은 문구로, 개인의 독립성과 자기 책임을 강조하며 '나는 나의 일을 하고, 당신은 당신의 일을 한다'는 내용을 담고 있어 게슈탈트 철학을 상징적으로 표현한다.",
    "definition_en": "A short passage written by Perls emphasizing individual independence and self-responsibility, stating 'I do my thing and you do your thing,' symbolically expressing the Gestalt philosophy.",
    "significance": "게슈탈트 상담의 철학과 가치를 대중적으로 알리는 데 기여했으며, 개인의 자율성과 경계의 중요성을 상징적으로 전달한다.",
    "key_researchers": [
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "1969년에 게슈탈트 기도문을 발표"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "책임",
        "name_en": "Responsibility",
        "id": "GESTALT_RS_020"
      },
      {
        "name_ko": "접촉 경계",
        "name_en": "Contact Boundary",
        "id": "GESTALT_CB_011"
      },
      {
        "name_ko": "융합",
        "name_en": "Confluence",
        "id": "GESTALT_CF_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'나는 나의 일을 하고, 당신은 당신의 일을 합니다. 나는 당신의 기대에 맞추어 살기 위해 이 세상에 있는 것이 아닙니다'",
      "differential": "게슈탈트 기도문은 개인주의적으로 비판받기도 하지만, 본래 의도는 건강한 경계와 책임을 강조하는 것이다",
      "key_point": "게슈탈트 기도문은 타인에 대한 무관심이 아니라, 건강한 독립성과 자기 책임의 선언이다",
      "common_mistake": "게슈탈트 기도문을 이기주의적 선언으로 오해해서는 안 되며, 융합에 대한 대안으로서의 건강한 경계를 표현한 것이다"
    }
  },
  {
    "id": "GESTALT_HL_034",
    "terminology": "전체론 (Holism)",
    "terminology_ko": "전체론",
    "terminology_en": "Holism",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "인간을 신체, 감정, 사고, 행동, 영성 등이 통합된 전체적 존재로 보는 관점으로, 게슈탈트 상담의 근본적인 철학적 기초이며 부분이 아닌 전체로서의 이해를 강조한다.",
    "definition_en": "The perspective of viewing humans as integrated whole beings encompassing body, emotion, thought, behavior, and spirit; the fundamental philosophical foundation of Gestalt therapy emphasizing understanding of the whole rather than parts.",
    "significance": "인간을 분리된 부분으로 분석하는 환원주의적 접근을 거부하고, 전체적 이해를 추구하는 게슈탈트 상담의 철학적 기반이다.",
    "key_researchers": [
      {
        "name_ko": "얀 스무츠",
        "name_en": "Jan Smuts",
        "contribution": "전체론(holism) 개념을 철학적으로 체계화"
      },
      {
        "name_ko": "쿠르트 골드스타인",
        "name_en": "Kurt Goldstein",
        "contribution": "유기체 전체론을 심리학에 도입하여 게슈탈트 상담에 영향"
      },
      {
        "name_ko": "프리츠 펄스",
        "name_en": "Fritz Perls",
        "contribution": "전체론을 게슈탈트 상담의 핵심 원리로 통합"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "게슈탈트 상담",
        "name_en": "Gestalt Therapy",
        "id": "GESTALT_GT_001"
      },
      {
        "name_ko": "전경과 배경",
        "name_en": "Figure and Ground",
        "id": "GESTALT_FG_008"
      },
      {
        "name_ko": "신체 자각",
        "name_en": "Body Awareness",
        "id": "GESTALT_BA_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "전체는 부분의 합보다 크다 = 게슈탈트의 핵심 원리",
      "differential": "환원주의가 전체를 부분으로 분해하여 이해하려는 것이라면, 전체론은 전체적 맥락에서 이해하려는 것이다",
      "key_point": "게슈탈트 상담에서 인간은 신체-정서-인지-행동이 분리될 수 없는 통합된 전체이다",
      "common_mistake": "전체론은 부분을 무시하는 것이 아니라, 부분을 전체의 맥락 안에서 이해하는 것이다"
    }
  },
  {
    "id": "GESTALT_FD_035",
    "terminology": "장 이론 (Field Theory)",
    "terminology_ko": "장 이론",
    "terminology_en": "Field Theory",
    "category": "GESTALT",
    "category_name": "게슈탈트 상담 (Gestalt Therapy)",
    "definition": "개인과 환경을 분리된 실체가 아닌 하나의 통합된 장(field)으로 보는 이론적 관점으로, 쿠르트 레빈의 장 이론에 기초하여 행동이 유기체-환경 장 전체에 의해 결정된다고 본다.",
    "definition_en": "A theoretical perspective viewing the individual and environment not as separate entities but as one integrated field, based on Kurt Lewin's field theory, where behavior is determined by the total organism-environment field.",
    "significance": "개인의 문제를 개인 내부에서만 찾지 않고 유기체-환경의 상호작용 맥락에서 이해하는 게슈탈트 상담의 이론적 기초이다.",
    "key_researchers": [
      {
        "name_ko": "쿠르트 레빈",
        "name_en": "Kurt Lewin",
        "contribution": "장 이론을 사회심리학에서 체계화하여 게슈탈트 상담에 영향"
      },
      {
        "name_ko": "말콤 파렛",
        "name_en": "Malcolm Parlett",
        "contribution": "장 이론을 현대 게슈탈트 상담에서 재해석하고 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "접촉 경계",
        "name_en": "Contact Boundary",
        "id": "GESTALT_CB_011"
      },
      {
        "name_ko": "전체론",
        "name_en": "Holism",
        "id": "GESTALT_HL_034"
      },
      {
        "name_ko": "현상학적 장",
        "name_en": "Phenomenal Field",
        "id": "PERSON_PF_022"
      },
      {
        "name_ko": "가족체계이론",
        "name_en": "Family Systems Theory",
        "id": "FAMILY_ST_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "장 이론 = 물고기를 이해하려면 물(환경)을 함께 봐야 한다",
      "differential": "개인심리학이 개인 내부에 원인을 찾는다면, 장 이론은 개인-환경의 상호작용에서 원인을 찾는다",
      "key_point": "행동은 B = f(P, E)로, 개인(Person)과 환경(Environment)의 함수이다 (레빈의 공식)",
      "common_mistake": "장 이론은 환경 결정론이 아니라, 개인과 환경의 동적 상호작용을 강조하는 것이다"
    }
  }
];

TERMS_DATA.BEHAV = [
  {
    "id": "BEHAV_BT_001",
    "terminology": "행동주의 상담 (Behavior Therapy)",
    "terminology_ko": "행동주의 상담",
    "terminology_en": "Behavior Therapy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "학습 이론에 기반하여 관찰 가능한 행동의 변화에 초점을 맞추는 상담 접근으로, 부적응 행동은 학습된 것이므로 새로운 학습을 통해 변화시킬 수 있다는 원리에 기초한다.",
    "definition_en": "A counseling approach based on learning theory that focuses on changing observable behavior, grounded in the principle that maladaptive behaviors are learned and can be changed through new learning.",
    "significance": "상담의 과학화에 기여하며, 구체적이고 측정 가능한 목표 설정과 증거 기반 실천의 전통을 확립한 주요 상담 접근이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "체계적 둔감화를 개발하여 행동치료의 임상적 적용을 확립"
      },
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "조작적 조건형성 이론으로 행동치료의 이론적 기초를 제공"
      },
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "사회학습이론으로 행동치료의 범위를 인지적 영역까지 확장"
      },
      {
        "name_ko": "한스 아이젠크",
        "name_en": "Hans Eysenck",
        "contribution": "행동치료의 과학적 근거를 주장하고 정신분석에 대한 비판을 제기"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "CBT_CT_001"
      }
    ],
    "sub_types": [
      {
        "name": "고전적 행동치료",
        "description": "고전적 조건형성에 기반한 기법 (체계적 둔감화, 혐오치료 등)"
      },
      {
        "name": "조작적 행동치료",
        "description": "조작적 조건형성에 기반한 기법 (강화, 토큰 이코노미 등)"
      },
      {
        "name": "사회학습 기반 치료",
        "description": "관찰학습과 모델링에 기반한 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "행동치료의 3대 학습 원리: 고전적 조건형성, 조작적 조건형성, 사회학습",
      "differential": "정신분석이 무의식적 갈등을 다루고, 인간중심이 관계적 태도를 강조하는 반면, 행동치료는 관찰 가능한 행동의 직접적 변화에 초점을 둔다",
      "key_point": "행동치료의 핵심 가정: 모든 행동(적응적, 부적응적)은 학습의 결과이며, 새로운 학습으로 변화 가능하다",
      "common_mistake": "현대 행동치료는 단순히 겉으로 드러나는 행동만 다루는 것이 아니라, 인지적·정서적 측면도 포함한다"
    }
  },
  {
    "id": "BEHAV_CC_002",
    "terminology": "고전적 조건형성 (Classical Conditioning)",
    "terminology_ko": "고전적 조건형성",
    "terminology_en": "Classical Conditioning",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "파블로프가 발견한 학습 원리로, 중성 자극이 무조건 자극과 반복적으로 짝지어져 결국 중성 자극만으로도 조건 반응을 유발하게 되는 연합 학습 과정이다.",
    "definition_en": "A learning principle discovered by Pavlov where a neutral stimulus, through repeated pairing with an unconditioned stimulus, eventually elicits a conditioned response on its own.",
    "significance": "불안, 공포, 회피 행동 등 정서적 반응의 학습 기제를 설명하며, 체계적 둔감화와 노출 치료의 이론적 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "개의 침분비 실험으로 고전적 조건형성을 발견"
      },
      {
        "name_ko": "존 왓슨",
        "name_en": "John Watson",
        "contribution": "알버트 실험으로 정서적 반응의 조건형성을 증명"
      },
      {
        "name_ko": "메리 커버 존스",
        "name_en": "Mary Cover Jones",
        "contribution": "조건형성된 공포의 제거(탈조건화) 방법을 최초로 시연"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      },
      {
        "name_ko": "자극 일반화",
        "name_en": "Stimulus Generalization",
        "id": "BEHAV_SG_007"
      },
      {
        "name_ko": "역조건형성",
        "name_en": "Counterconditioning",
        "id": "BEHAV_RC_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "파블로프의 개: 종소리(CS) + 음식(UCS) → 종소리만 들어도 침(CR)이 나온다",
      "differential": "고전적 조건형성은 자극-반응 연합(수동적)이고, 조작적 조건형성은 행동-결과 연합(능동적)이다",
      "key_point": "불안장애의 많은 형태가 고전적 조건형성으로 학습되며, 역조건형성으로 치료할 수 있다",
      "common_mistake": "고전적 조건형성은 단순한 반사 학습이 아니라, 정서적 반응, 태도, 선호도 등 광범위한 학습에 관여한다"
    }
  },
  {
    "id": "BEHAV_OC_003",
    "terminology": "조작적 조건형성 (Operant Conditioning)",
    "terminology_ko": "조작적 조건형성",
    "terminology_en": "Operant Conditioning",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "스키너가 체계화한 학습 원리로, 행동의 결과(강화 또는 처벌)에 의해 행동의 빈도가 증가하거나 감소하는 학습 과정이며, 행동 수정의 핵심 이론이다.",
    "definition_en": "A learning principle systematized by Skinner where the frequency of behavior increases or decreases based on its consequences (reinforcement or punishment), the core theory of behavior modification.",
    "significance": "행동 수정 프로그램, 토큰 경제, 행동 계약 등 다양한 상담 기법의 이론적 기초를 제공하며, 실제 행동 변화에 가장 직접적으로 적용되는 학습 원리이다.",
    "key_researchers": [
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "조작적 조건형성을 체계적으로 연구하고 행동분석학을 확립"
      },
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "효과의 법칙으로 조작적 조건형성의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "BEHAV_PN_010"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      },
      {
        "name_ko": "행동 수정",
        "name_en": "Behavior Modification",
        "id": "BEHAV_BM_011"
      },
      {
        "name_ko": "토큰 경제",
        "name_en": "Token Economy",
        "id": "BEHAV_TE_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조작적 = 유기체가 환경을 '조작'하여 결과를 얻음 → 결과가 좋으면 반복, 나쁘면 중단",
      "differential": "고전적 조건형성이 자극에 대한 반사적 반응이라면, 조작적 조건형성은 자발적 행동에 대한 결과의 영향이다",
      "key_point": "스키너 상자 실험: 레버 누르기(행동) → 먹이(강화) → 레버 누르기 빈도 증가",
      "common_mistake": "부적 강화(negative reinforcement)는 처벌이 아니라, 혐오 자극의 제거를 통한 행동 증가이다"
    }
  },
  {
    "id": "BEHAV_SL_004",
    "terminology": "사회학습이론 (Social Learning Theory)",
    "terminology_ko": "사회학습이론",
    "terminology_en": "Social Learning Theory",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "반두라가 제안한 학습 이론으로, 직접 경험뿐 아니라 타인의 행동과 그 결과를 관찰함으로써 학습이 이루어진다고 보며, 인지적 과정의 역할을 강조한다.",
    "definition_en": "A learning theory proposed by Bandura stating that learning occurs not only through direct experience but also through observing others' behavior and its consequences, emphasizing the role of cognitive processes.",
    "significance": "행동주의를 인지적 영역으로 확장하여 인지행동치료의 기초를 마련했으며, 모델링 기법의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "사회학습이론을 정립하고 보보 인형 실험으로 관찰학습을 실증"
      },
      {
        "name_ko": "줄리안 로터",
        "name_en": "Julian Rotter",
        "contribution": "사회학습이론에서 기대와 강화가치의 역할을 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "BEHAV_OL_014"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "BEHAV_SE_015"
      },
      {
        "name_ko": "대리학습",
        "name_en": "Vicarious Learning",
        "id": "BEHAV_VL_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반두라의 보보 인형 실험: 성인이 인형을 때리는 것을 본 아이들이 똑같이 모방",
      "differential": "고전적·조작적 조건형성이 직접 경험에 의한 학습이라면, 사회학습은 관찰에 의한 간접 학습도 포함한다",
      "key_point": "관찰학습의 4단계: 주의(attention) → 보존(retention) → 재생(reproduction) → 동기(motivation)",
      "common_mistake": "사회학습이론은 단순한 모방이 아니라, 인지적 매개 과정(기대, 판단)을 포함한다"
    }
  },
  {
    "id": "BEHAV_SD_005",
    "terminology": "체계적 둔감화 (Systematic Desensitization)",
    "terminology_ko": "체계적 둔감화",
    "terminology_en": "Systematic Desensitization",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "월프가 개발한 불안 치료 기법으로, 이완 훈련 후 불안을 유발하는 자극을 약한 것부터 강한 것까지 단계적으로 노출하면서 이완 반응으로 불안 반응을 대체하는 역조건형성 기법이다.",
    "definition_en": "An anxiety treatment technique developed by Wolpe based on counterconditioning, involving relaxation training followed by gradual exposure to anxiety-provoking stimuli from weakest to strongest, replacing the anxiety response with relaxation.",
    "significance": "행동치료의 대표적 성공 사례로, 불안장애 치료에서 그 효과가 광범위하게 실증되었으며 현대 노출치료의 기초가 되었다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "상호억제 원리에 기반하여 체계적 둔감화를 개발"
      },
      {
        "name_ko": "메리 커버 존스",
        "name_en": "Mary Cover Jones",
        "contribution": "아동의 공포 탈조건화 실험으로 체계적 둔감화의 선구적 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역조건형성",
        "name_en": "Counterconditioning",
        "id": "BEHAV_RC_008"
      },
      {
        "name_ko": "상호억제",
        "name_en": "Reciprocal Inhibition",
        "id": "BEHAV_RI_017"
      },
      {
        "name_ko": "이완 훈련",
        "name_en": "Relaxation Training",
        "id": "BEHAV_RT_018"
      },
      {
        "name_ko": "불안 위계",
        "name_en": "Anxiety Hierarchy",
        "id": "BEHAV_AH_019"
      },
      {
        "name_ko": "노출 치료",
        "name_en": "Exposure Therapy",
        "id": "BEHAV_ET_020"
      }
    ],
    "sub_types": [
      {
        "name": "상상적 둔감화",
        "description": "불안 장면을 상상으로 노출하는 방법"
      },
      {
        "name": "실제적 둔감화 (in vivo)",
        "description": "불안 자극에 실제로 노출하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "체계적 둔감화 3단계: ①이완 훈련 → ②불안 위계 작성 → ③위계에 따른 점진적 노출+이완",
      "differential": "홍수법(flooding)이 가장 강한 불안 자극에 한꺼번에 노출하는 것이라면, 체계적 둔감화는 약한 것부터 점진적으로 노출한다",
      "key_point": "핵심 원리는 상호억제: 이완과 불안은 동시에 존재할 수 없으므로, 이완이 불안을 억제한다",
      "common_mistake": "체계적 둔감화에서 이완 훈련이 선행되어야 하며, 단순한 노출만으로는 둔감화가 아니다"
    }
  },
  {
    "id": "BEHAV_EX_006",
    "terminology": "소거 (Extinction)",
    "terminology_ko": "소거",
    "terminology_en": "Extinction",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "조건형성된 반응이 더 이상 강화되지 않아 점차 약화되고 사라지는 과정으로, 고전적 조건형성에서는 CS만 제시되고 조작적 조건형성에서는 강화가 중단될 때 발생한다.",
    "definition_en": "The process by which a conditioned response gradually weakens and disappears when no longer reinforced; occurs in classical conditioning when only the CS is presented and in operant conditioning when reinforcement is discontinued.",
    "significance": "부적응 행동의 제거에 활용되는 핵심 원리로, 노출 치료와 행동 수정의 이론적 기초가 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "고전적 조건형성에서 소거 현상을 최초로 발견"
      },
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "조작적 조건형성에서 소거의 원리를 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "노출 치료",
        "name_en": "Exposure Therapy",
        "id": "BEHAV_ET_020"
      },
      {
        "name_ko": "자발적 회복",
        "name_en": "Spontaneous Recovery",
        "id": "BEHAV_SR_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소거 = 강화의 중단 → 행동의 점진적 감소 → 결국 사라짐",
      "differential": "처벌이 행동 후 혐오 결과를 주는 것이라면, 소거는 행동 후 아무 결과도 주지 않는 것이다",
      "key_point": "소거 초기에는 행동이 오히려 일시적으로 증가하는 '소거 폭발(extinction burst)'이 나타날 수 있다",
      "common_mistake": "소거는 망각이 아니며, 자발적 회복(spontaneous recovery)을 통해 소거된 행동이 다시 나타날 수 있다"
    }
  },
  {
    "id": "BEHAV_SG_007",
    "terminology": "자극 일반화 (Stimulus Generalization)",
    "terminology_ko": "자극 일반화",
    "terminology_en": "Stimulus Generalization",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "조건형성된 반응이 원래의 조건 자극과 유사한 다른 자극에도 나타나는 현상으로, 특정 대상에 대한 공포가 유사한 대상으로 확산되는 기제를 설명한다.",
    "definition_en": "The phenomenon where a conditioned response occurs to stimuli similar to the original conditioned stimulus, explaining how fear of a specific object spreads to similar objects.",
    "significance": "한 자극에서 형성된 불안이 유사한 자극들로 확산되는 공포 확산의 기제를 설명하며, 범불안장애 등의 이해에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John Watson",
        "contribution": "알버트 실험에서 자극 일반화를 정서적 반응에 적용"
      },
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "자극 일반화 현상을 최초로 발견하고 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      },
      {
        "name_ko": "자극 변별",
        "name_en": "Stimulus Discrimination",
        "id": "BEHAV_SDI_022"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "왓슨의 알버트: 흰 쥐 공포 → 토끼, 솜털, 산타 수염에도 공포 = 자극 일반화",
      "differential": "자극 일반화가 유사 자극으로의 확산이라면, 자극 변별은 자극 간 차이를 구분하는 것이다",
      "key_point": "자극 일반화는 적응적 기능(위험한 것과 유사한 것도 피하기)을 하지만, 과도하면 부적응적이 된다",
      "common_mistake": "자극 일반화는 의도적 연상이 아니라, 자동적으로 일어나는 학습 과정이다"
    }
  },
  {
    "id": "BEHAV_RC_008",
    "terminology": "역조건형성 (Counterconditioning)",
    "terminology_ko": "역조건형성",
    "terminology_en": "Counterconditioning",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "기존의 조건형성된 반응(예: 불안)을 양립할 수 없는 새로운 반응(예: 이완)으로 대체하는 학습 과정으로, 체계적 둔감화의 핵심 원리이다.",
    "definition_en": "A learning process that replaces an existing conditioned response (e.g., anxiety) with a new incompatible response (e.g., relaxation), the core principle of systematic desensitization.",
    "significance": "부적응적 조건 반응을 적응적 반응으로 대체하는 행동치료의 기본 전략으로, 불안 치료의 이론적 기초이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "역조건형성 원리를 임상에 체계적으로 적용"
      },
      {
        "name_ko": "메리 커버 존스",
        "name_en": "Mary Cover Jones",
        "contribution": "아동의 공포에 역조건형성을 최초로 적용하여 성공적으로 치료"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "상호억제",
        "name_en": "Reciprocal Inhibition",
        "id": "BEHAV_RI_017"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역조건형성 = 불안과 양립 불가능한 반응(이완)으로 불안을 덮어쓰기",
      "differential": "소거는 강화 없이 반응을 약화시키는 것이고, 역조건형성은 반대 반응으로 기존 반응을 대체하는 것이다",
      "key_point": "역조건형성의 핵심은 기존 반응과 양립할 수 없는(incompatible) 새로운 반응을 연결하는 것이다",
      "common_mistake": "역조건형성은 기존 학습을 지우는 것이 아니라, 새로운 학습으로 기존 학습을 억제하는 것이다"
    }
  },
  {
    "id": "BEHAV_RF_009",
    "terminology": "강화 (Reinforcement)",
    "terminology_ko": "강화",
    "terminology_en": "Reinforcement",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "행동 후에 제공되는 결과가 그 행동의 빈도를 증가시키는 과정으로, 정적 강화(쾌적한 자극 제공)와 부적 강화(혐오 자극 제거)로 구분된다.",
    "definition_en": "The process by which a consequence following a behavior increases the frequency of that behavior, divided into positive reinforcement (providing a pleasant stimulus) and negative reinforcement (removing an aversive stimulus).",
    "significance": "행동치료에서 적응적 행동을 증가시키는 가장 기본적이고 효과적인 원리로, 모든 행동 수정 프로그램의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "강화의 원리를 체계적으로 연구하고 강화 계획을 분류"
      },
      {
        "name_ko": "에드워드 손다이크",
        "name_en": "Edward Thorndike",
        "contribution": "효과의 법칙으로 강화의 개념적 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "처벌",
        "name_en": "Punishment",
        "id": "BEHAV_PN_010"
      },
      {
        "name_ko": "강화 계획",
        "name_en": "Reinforcement Schedule",
        "id": "BEHAV_RS_023"
      },
      {
        "name_ko": "토큰 경제",
        "name_en": "Token Economy",
        "id": "BEHAV_TE_012"
      }
    ],
    "sub_types": [
      {
        "name": "정적 강화 (Positive Reinforcement)",
        "description": "행동 후 쾌적한 자극을 제공하여 행동을 증가시킴"
      },
      {
        "name": "부적 강화 (Negative Reinforcement)",
        "description": "행동 후 혐오 자극을 제거하여 행동을 증가시킴"
      }
    ],
    "quiz_hints": {
      "mnemonic": "강화 = 행동 빈도 ↑ (정적: +좋은 것 제공, 부적: -나쁜 것 제거)",
      "differential": "강화(행동 증가)와 처벌(행동 감소)을 구분하고, 정적(+추가)과 부적(-제거)을 구분해야 한다",
      "key_point": "부적 강화는 처벌이 아니다. 부적 강화는 행동을 증가시키고, 처벌은 행동을 감소시킨다",
      "common_mistake": "가장 흔한 실수는 부적 강화를 처벌과 혼동하는 것이다. '부적'은 제거를 의미하지 부정적 결과를 의미하지 않는다"
    }
  },
  {
    "id": "BEHAV_PN_010",
    "terminology": "처벌 (Punishment)",
    "terminology_ko": "처벌",
    "terminology_en": "Punishment",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "행동 후에 제공되는 결과가 그 행동의 빈도를 감소시키는 과정으로, 정적 처벌(혐오 자극 제공)과 부적 처벌(쾌적 자극 제거)로 구분된다.",
    "definition_en": "The process by which a consequence following a behavior decreases the frequency of that behavior, divided into positive punishment (presenting an aversive stimulus) and negative punishment (removing a pleasant stimulus).",
    "significance": "행동의 감소에 사용되지만, 행동치료에서는 처벌보다 강화를 우선적으로 사용하는 것이 윤리적으로 권장된다.",
    "key_researchers": [
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "처벌의 효과와 한계를 연구하고 강화의 우선적 사용을 권장"
      },
      {
        "name_ko": "나단 아즈린",
        "name_en": "Nathan Azrin",
        "contribution": "처벌의 효과적 적용 조건을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "혐오치료",
        "name_en": "Aversion Therapy",
        "id": "BEHAV_AV_024"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      }
    ],
    "sub_types": [
      {
        "name": "정적 처벌 (Positive Punishment)",
        "description": "행동 후 혐오 자극을 제시하여 행동을 감소시킴"
      },
      {
        "name": "부적 처벌 (Negative Punishment)",
        "description": "행동 후 쾌적 자극을 제거하여 행동을 감소시킴 (예: 타임아웃)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "처벌 = 행동 빈도 ↓ (정적: +나쁜 것 추가, 부적: -좋은 것 제거)",
      "differential": "부적 강화(혐오 자극 제거→행동 증가)와 정적 처벌(혐오 자극 제공→행동 감소)을 혼동하지 않도록 주의",
      "key_point": "처벌은 단기적으로 효과적이나, 장기적으로는 공포, 회피, 공격성 등의 부작용이 있을 수 있다",
      "common_mistake": "행동치료에서 처벌은 최후의 수단이며, 가능하면 강화를 통한 행동 변화를 우선한다"
    }
  },
  {
    "id": "BEHAV_BM_011",
    "terminology": "행동 수정 (Behavior Modification)",
    "terminology_ko": "행동 수정",
    "terminology_en": "Behavior Modification",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "조작적 조건형성의 원리를 체계적으로 적용하여 특정 행동을 변화시키는 절차와 기법의 총칭으로, 목표 행동의 정의, 기저선 측정, 개입, 평가의 과정을 따른다.",
    "definition_en": "A collective term for procedures and techniques that systematically apply operant conditioning principles to change specific behaviors, following the process of defining target behavior, measuring baseline, intervention, and evaluation.",
    "significance": "행동치료의 실천적 방법론으로, 교육, 임상, 조직 등 다양한 분야에서 행동 변화를 위해 활용된다.",
    "key_researchers": [
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "행동 수정의 이론적 기초인 조작적 조건형성을 체계화"
      },
      {
        "name_ko": "테오도르 에일런",
        "name_en": "Teodoro Ayllon",
        "contribution": "정신병원에서의 행동 수정 프로그램(토큰 경제)을 최초로 실시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "토큰 경제",
        "name_en": "Token Economy",
        "id": "BEHAV_TE_012"
      },
      {
        "name_ko": "행동 계약",
        "name_en": "Behavioral Contract",
        "id": "BEHAV_BC_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 수정의 4단계: 목표 행동 정의 → 기저선 측정 → 개입(강화/소거) → 효과 평가",
      "differential": "행동치료(behavior therapy)가 넓은 의미의 접근이라면, 행동 수정(behavior modification)은 조작적 원리 적용에 초점을 맞춘 실천 방법론이다",
      "key_point": "행동 수정에서 목표 행동은 관찰 가능하고 측정 가능해야 한다",
      "common_mistake": "행동 수정은 단순한 상벌 체계가 아니라, 체계적인 분석과 계획에 기반한 과학적 접근이다"
    }
  },
  {
    "id": "BEHAV_TE_012",
    "terminology": "토큰 경제 (Token Economy)",
    "terminology_ko": "토큰 경제",
    "terminology_en": "Token Economy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "적응적 행동을 할 때 토큰(점수, 스티커 등)을 제공하고, 토큰을 모아 원하는 보상(후비 강화물)과 교환할 수 있게 하는 체계적 강화 프로그램이다.",
    "definition_en": "A systematic reinforcement program providing tokens (points, stickers, etc.) for adaptive behaviors, which can be accumulated and exchanged for desired rewards (backup reinforcers).",
    "significance": "학교, 병원, 교정시설 등 집단 환경에서 행동 수정을 효과적으로 적용하는 대표적 프로그램이다.",
    "key_researchers": [
      {
        "name_ko": "테오도르 에일런",
        "name_en": "Teodoro Ayllon",
        "contribution": "나단 아즈린과 함께 정신병원에서 토큰 경제 프로그램을 최초로 개발 적용"
      },
      {
        "name_ko": "나단 아즈린",
        "name_en": "Nathan Azrin",
        "contribution": "에일런과 함께 토큰 경제의 체계를 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "행동 수정",
        "name_en": "Behavior Modification",
        "id": "BEHAV_BM_011"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "토큰 경제 = 미니 경제 시스템: 좋은 행동 → 토큰 획득 → 토큰으로 보상 구매",
      "differential": "단순 보상과 달리, 토큰 경제는 토큰이라는 조건 강화물과 후비 강화물의 교환 체계를 갖춘다",
      "key_point": "토큰은 그 자체로 가치가 있는 것이 아니라, 후비 강화물과 교환할 수 있기에 가치를 갖는 '조건 강화물'이다",
      "common_mistake": "토큰 경제는 영구적으로 유지하는 것이 아니라, 점차 자연적 강화로 전환하는 것이 궁극적 목표이다"
    }
  },
  {
    "id": "BEHAV_MD_013",
    "terminology": "모델링 (Modeling)",
    "terminology_ko": "모델링",
    "terminology_en": "Modeling",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "타인(모델)의 행동을 관찰하고 모방함으로써 새로운 행동을 학습하는 기법으로, 사회학습이론에 기초하며 새로운 기술 습득이나 공포 감소에 활용된다.",
    "definition_en": "A technique of learning new behaviors by observing and imitating another person's (model's) behavior, based on social learning theory and used for acquiring new skills or reducing fear.",
    "significance": "직접 경험 없이도 행동 변화를 이끌어낼 수 있는 효율적 기법으로, 사회기술 훈련과 불안 치료에 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "모델링의 이론적 기초인 관찰학습 원리를 정립"
      },
      {
        "name_ko": "메이첸바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "인지적 모델링 기법을 개발하여 자기교시 훈련에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "BEHAV_OL_014"
      },
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "BEHAV_SE_015"
      },
      {
        "name_ko": "사회기술 훈련",
        "name_en": "Social Skills Training",
        "id": "BEHAV_SST_026"
      }
    ],
    "sub_types": [
      {
        "name": "실제 모델링 (Live Modeling)",
        "description": "실제 모델이 직접 시연하는 것"
      },
      {
        "name": "상징적 모델링 (Symbolic Modeling)",
        "description": "영상, 책 등의 매체를 통한 간접 모델링"
      },
      {
        "name": "참여 모델링 (Participant Modeling)",
        "description": "모델 관찰 후 직접 참여하여 실천하는 것"
      },
      {
        "name": "인지적 모델링 (Cognitive Modeling)",
        "description": "모델이 사고 과정을 소리 내어 말하며 시연하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "모델링 = '보고 따라 하기': 모델의 행동 관찰 → 모방 → 내면화",
      "differential": "역할 연기(role playing)가 직접 해보는 것이라면, 모델링은 먼저 관찰하고 나서 해보는 것이다",
      "key_point": "효과적 모델링의 조건: 모델과의 유사성, 모델의 위상, 관찰자의 자기효능감",
      "common_mistake": "모델링은 단순 모방이 아니라, 관찰자가 모델의 행동을 인지적으로 처리한 후 자기 것으로 만드는 과정이다"
    }
  },
  {
    "id": "BEHAV_OL_014",
    "terminology": "관찰학습 (Observational Learning)",
    "terminology_ko": "관찰학습",
    "terminology_en": "Observational Learning",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "타인의 행동과 그 결과를 관찰함으로써 직접 경험 없이 새로운 행동을 습득하는 학습 형태로, 주의, 보존, 재생, 동기화의 네 가지 과정을 포함한다.",
    "definition_en": "A form of learning in which new behaviors are acquired by observing others' behavior and its consequences without direct experience, involving four processes: attention, retention, reproduction, and motivation.",
    "significance": "직접 경험에 의한 학습만을 인정하던 전통 행동주의를 확장하여, 인간 학습의 사회적·인지적 측면을 행동 이론에 통합했다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "관찰학습의 네 가지 과정을 체계화하고 보보 인형 실험으로 실증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "대리학습",
        "name_en": "Vicarious Learning",
        "id": "BEHAV_VL_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관찰학습의 4과정: 주(주의) → 보(보존) → 재(재생) → 동(동기화)",
      "differential": "고전적 조건형성이 자극-반응 연합이고 조작적 조건형성이 행동-결과 연합이라면, 관찰학습은 타인의 행동-결과 관찰에 의한 학습이다",
      "key_point": "관찰학습에서 학습(acquisition)과 수행(performance)은 구분된다. 학습했더라도 동기가 없으면 수행하지 않을 수 있다",
      "common_mistake": "관찰학습은 단순 모방과 다르며, 인지적 처리(주의, 기억, 판단)가 필수적으로 관여한다"
    }
  },
  {
    "id": "BEHAV_SE_015",
    "terminology": "자기효능감 (Self-Efficacy)",
    "terminology_ko": "자기효능감",
    "terminology_en": "Self-Efficacy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "특정 과제를 성공적으로 수행할 수 있다는 자신의 능력에 대한 신념으로, 행동 변화의 동기와 지속성에 핵심적 역할을 하며 상담 성과의 중요한 예측 변인이다.",
    "definition_en": "One's belief in their ability to successfully perform a specific task, playing a central role in motivation and persistence of behavior change and serving as an important predictor of counseling outcomes.",
    "significance": "행동 변화에서 인지적 요인의 중요성을 보여주며, 모든 상담 접근에서 내담자의 자기효능감 향상이 중요한 치료 목표가 된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감 개념을 제안하고 4가지 원천을 밝힘"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "결과 기대",
        "name_en": "Outcome Expectancy",
        "id": "BEHAV_OE_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감의 4가지 원천: ①성공 경험 ②대리 경험 ③언어적 설득 ④생리적 상태",
      "differential": "자존감(self-esteem)이 자기 가치에 대한 전반적 평가라면, 자기효능감은 특정 과제 수행 능력에 대한 신념이다",
      "key_point": "자기효능감의 가장 강력한 원천은 실제 '성공 경험(mastery experience)'이다",
      "common_mistake": "자기효능감은 실제 능력이 아니라 능력에 대한 '신념'이며, 실제 능력과 반드시 일치하지 않을 수 있다"
    }
  },
  {
    "id": "BEHAV_VL_016",
    "terminology": "대리학습 (Vicarious Learning)",
    "terminology_ko": "대리학습",
    "terminology_en": "Vicarious Learning",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "타인이 행동한 결과를 관찰함으로써 간접적으로 행동의 결과를 경험하고 학습하는 과정으로, 대리 강화와 대리 처벌을 통해 행동이 변화된다.",
    "definition_en": "The process of indirectly experiencing and learning about behavioral consequences by observing the outcomes of others' actions, with behavior changing through vicarious reinforcement and vicarious punishment.",
    "significance": "직접 경험하지 않고도 행동을 학습할 수 있는 메커니즘을 설명하며, 집단 상담에서 다른 구성원의 경험을 통한 학습의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "대리학습의 원리를 실험적으로 증명하고 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관찰학습",
        "name_en": "Observational Learning",
        "id": "BEHAV_OL_014"
      },
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      }
    ],
    "sub_types": [
      {
        "name": "대리 강화 (Vicarious Reinforcement)",
        "description": "모델이 보상받는 것을 관찰하여 동일 행동이 증가"
      },
      {
        "name": "대리 처벌 (Vicarious Punishment)",
        "description": "모델이 처벌받는 것을 관찰하여 동일 행동이 감소"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대리학습 = '남의 경험에서 배우기': 타인이 칭찬받으면 따라 하고, 벌 받으면 하지 않기",
      "differential": "직접 강화가 자신이 경험하는 결과라면, 대리 강화는 타인이 경험하는 결과를 관찰하는 것이다",
      "key_point": "대리학습은 특히 위험한 행동의 결과를 안전하게 배울 수 있게 해준다",
      "common_mistake": "대리학습은 단순히 보기만 하는 것이 아니라, 관찰한 결과를 인지적으로 처리하는 과정이 포함된다"
    }
  },
  {
    "id": "BEHAV_RI_017",
    "terminology": "상호억제 (Reciprocal Inhibition)",
    "terminology_ko": "상호억제",
    "terminology_en": "Reciprocal Inhibition",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "양립할 수 없는 두 반응이 동시에 존재할 수 없다는 원리로, 불안과 이완이 동시에 일어날 수 없으므로 이완 반응을 유도하면 불안이 억제된다는 체계적 둔감화의 핵심 원리이다.",
    "definition_en": "The principle that two incompatible responses cannot coexist simultaneously; since anxiety and relaxation cannot occur at the same time, inducing relaxation inhibits anxiety—the core principle of systematic desensitization.",
    "significance": "체계적 둔감화의 이론적 기초로, 이 원리에 기반하여 역조건형성이 작동하는 메커니즘을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "상호억제 원리를 불안 치료에 적용하여 체계적 둔감화를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "역조건형성",
        "name_en": "Counterconditioning",
        "id": "BEHAV_RC_008"
      },
      {
        "name_ko": "이완 훈련",
        "name_en": "Relaxation Training",
        "id": "BEHAV_RT_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상호억제 = 이완과 불안은 동시에 존재할 수 없다 → 이완으로 불안을 밀어내기",
      "differential": "소거는 불안 반응이 자연적으로 약화되는 것이지만, 상호억제는 반대 반응으로 적극적으로 억제하는 것이다",
      "key_point": "상호억제가 작동하려면 불안을 압도할 수 있는 충분히 강한 길항 반응(이완)이 필요하다",
      "common_mistake": "상호억제는 의지로 불안을 억누르는 것이 아니라, 생리적으로 양립 불가능한 반응을 유도하는 것이다"
    }
  },
  {
    "id": "BEHAV_RT_018",
    "terminology": "이완 훈련 (Relaxation Training)",
    "terminology_ko": "이완 훈련",
    "terminology_en": "Relaxation Training",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "신체의 긴장을 의도적으로 풀어 이완 상태를 유도하는 훈련으로, 점진적 근육 이완법이 가장 대표적이며 체계적 둔감화의 필수 전 단계이다.",
    "definition_en": "Training to intentionally release bodily tension to induce a state of relaxation, with progressive muscle relaxation being the most representative method and an essential prerequisite for systematic desensitization.",
    "significance": "체계적 둔감화의 선행 조건이자 스트레스 관리의 기본 기법으로, 다양한 상담 접근에서 보조적으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "에드먼드 제이콥슨",
        "name_en": "Edmund Jacobson",
        "contribution": "점진적 근육 이완법(PMR)을 개발"
      },
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "제이콥슨의 이완법을 간소화하여 체계적 둔감화에 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "상호억제",
        "name_en": "Reciprocal Inhibition",
        "id": "BEHAV_RI_017"
      },
      {
        "name_ko": "스트레스 면역 훈련",
        "name_en": "Stress Inoculation Training",
        "id": "BEHAV_SIT_028"
      }
    ],
    "sub_types": [
      {
        "name": "점진적 근육 이완법 (PMR)",
        "description": "근육 그룹을 차례로 긴장시켰다 이완하는 방법"
      },
      {
        "name": "호흡 이완법",
        "description": "깊고 느린 복식호흡을 통한 이완"
      },
      {
        "name": "자율 훈련법 (Autogenic Training)",
        "description": "자기암시를 통해 이완을 유도하는 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PMR: 손→팔→어깨→얼굴→몸통→다리 순으로 '긴장(5초) → 이완(15초)' 반복",
      "differential": "명상이 마음을 고요하게 하는 것이라면, 이완 훈련은 신체의 긴장을 직접적으로 풀어주는 것이다",
      "key_point": "이완 훈련은 기술이므로 반복 연습을 통해 숙달해야 상담 장면에서 효과적으로 사용할 수 있다",
      "common_mistake": "이완 훈련은 단순히 쉬는 것이 아니라, 의도적이고 체계적인 근육 이완 기술이다"
    }
  },
  {
    "id": "BEHAV_AH_019",
    "terminology": "불안 위계 (Anxiety Hierarchy)",
    "terminology_ko": "불안 위계",
    "terminology_en": "Anxiety Hierarchy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "체계적 둔감화에서 불안을 유발하는 상황들을 불안 강도에 따라 가장 약한 것부터 가장 강한 것까지 순서대로 배열한 목록으로, 주관적 불편감 단위(SUD)로 측정된다.",
    "definition_en": "A list of anxiety-provoking situations arranged in order from least to most anxiety-inducing in systematic desensitization, measured by Subjective Units of Disturbance (SUD).",
    "significance": "체계적 둔감화의 핵심 구성 요소로, 노출의 순서와 속도를 결정하는 치료적 로드맵 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "불안 위계와 SUD 척도를 체계적 둔감화의 핵심 도구로 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "노출 치료",
        "name_en": "Exposure Therapy",
        "id": "BEHAV_ET_020"
      },
      {
        "name_ko": "이완 훈련",
        "name_en": "Relaxation Training",
        "id": "BEHAV_RT_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불안 위계 = 불안의 사다리: SUD 0(불안 없음)에서 100(최대 불안)까지 10~15개 상황 배열",
      "differential": "단순 목록이 아니라, 각 항목의 불안 수준이 SUD로 정량화되어야 하는 체계적 도구이다",
      "key_point": "불안 위계의 각 단계 간 불안 차이가 비교적 균등해야 점진적 노출이 효과적이다",
      "common_mistake": "불안 위계는 상담자가 아닌 내담자의 주관적 경험에 기초하여 내담자와 함께 작성해야 한다"
    }
  },
  {
    "id": "BEHAV_ET_020",
    "terminology": "노출 치료 (Exposure Therapy)",
    "terminology_ko": "노출 치료",
    "terminology_en": "Exposure Therapy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "불안이나 공포를 유발하는 자극에 체계적으로 노출시켜 습관화와 소거를 통해 불안 반응을 감소시키는 행동치료 기법의 총칭이다.",
    "definition_en": "A collective term for behavior therapy techniques that systematically expose clients to anxiety or fear-provoking stimuli to reduce anxiety responses through habituation and extinction.",
    "significance": "불안장애, PTSD, 강박장애 등의 치료에서 가장 강력한 증거 기반을 가진 치료 기법으로, 현대 행동치료의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "점진적 노출(체계적 둔감화)을 개발"
      },
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "PTSD와 강박장애에 대한 노출 및 반응방지 기법을 발전"
      },
      {
        "name_ko": "토마스 스탬플",
        "name_en": "Thomas Stampfl",
        "contribution": "내파법(implosive therapy)을 개발하여 상상적 홍수법을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "홍수법",
        "name_en": "Flooding",
        "id": "BEHAV_FL_029"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      },
      {
        "name_ko": "불안 위계",
        "name_en": "Anxiety Hierarchy",
        "id": "BEHAV_AH_019"
      }
    ],
    "sub_types": [
      {
        "name": "실제 노출 (In vivo exposure)",
        "description": "실제 불안 자극에 직접 노출"
      },
      {
        "name": "상상 노출 (Imaginal exposure)",
        "description": "불안 상황을 상상으로 노출"
      },
      {
        "name": "가상현실 노출 (VR exposure)",
        "description": "가상현실 기술을 활용한 노출"
      },
      {
        "name": "내면 감각 노출 (Interoceptive exposure)",
        "description": "공황과 관련된 신체 감각에 노출"
      }
    ],
    "quiz_hints": {
      "mnemonic": "노출 치료 = 불안 자극에 피하지 않고 맞서기 → 습관화 → 불안 감소",
      "differential": "체계적 둔감화는 이완과 결합한 점진적 노출이지만, 순수 노출 치료는 이완 없이 불안 자극에 직접 노출한다",
      "key_point": "노출 치료의 핵심 원리: 불안은 피하면 유지되고, 직면하면 감소한다",
      "common_mistake": "노출 치료는 단순히 무서운 것을 경험하게 하는 것이 아니라, 치료적 맥락에서 체계적으로 계획된 노출이다"
    }
  },
  {
    "id": "BEHAV_SR_021",
    "terminology": "자발적 회복 (Spontaneous Recovery)",
    "terminology_ko": "자발적 회복",
    "terminology_en": "Spontaneous Recovery",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "소거된 조건 반응이 일정 시간이 지난 후 다시 나타나는 현상으로, 소거가 원래 학습을 완전히 제거하는 것이 아님을 보여주며, 치료 후 재발의 가능성을 설명한다.",
    "definition_en": "The phenomenon where an extinguished conditioned response reappears after a passage of time, demonstrating that extinction does not completely erase original learning and explaining the possibility of relapse after treatment.",
    "significance": "치료적 변화 이후의 재발 가능성을 이해하고, 재발 방지 전략의 필요성을 강조하는 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "자발적 회복 현상을 최초로 발견하고 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      },
      {
        "name_ko": "재발 방지",
        "name_en": "Relapse Prevention",
        "id": "BEHAV_RP_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자발적 회복 = 사라졌다고 생각한 행동이 시간이 지나면 다시 돌아올 수 있다",
      "differential": "재학습(relearning)은 다시 조건형성이 일어나는 것이고, 자발적 회복은 추가 학습 없이 자연적으로 반응이 되돌아오는 것이다",
      "key_point": "자발적 회복은 원래 학습이 소거에 의해 완전히 제거되지 않음을 의미한다",
      "common_mistake": "자발적 회복은 치료의 실패가 아니라 학습의 자연적 현상이며, 반복적 소거를 통해 점차 약화된다"
    }
  },
  {
    "id": "BEHAV_SDI_022",
    "terminology": "자극 변별 (Stimulus Discrimination)",
    "terminology_ko": "자극 변별",
    "terminology_en": "Stimulus Discrimination",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "유사한 자극들 사이의 차이를 구분하여 특정 자극에만 조건 반응을 보이는 학습 과정으로, 자극 일반화의 반대 과정이며 적응적 행동에 필수적이다.",
    "definition_en": "A learning process of distinguishing differences between similar stimuli and showing conditioned responses only to specific stimuli, the opposite of stimulus generalization and essential for adaptive behavior.",
    "significance": "과도한 자극 일반화로 인한 부적응(범불안 등)을 교정하고, 적절한 상황에서 적절한 반응을 하도록 돕는 상담의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "이반 파블로프",
        "name_en": "Ivan Pavlov",
        "contribution": "자극 변별 훈련의 원리를 최초로 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자극 일반화",
        "name_en": "Stimulus Generalization",
        "id": "BEHAV_SG_007"
      },
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자극 변별 = 이것과 저것은 다르다는 것을 구분하기 → 적절한 자극에만 반응하기",
      "differential": "일반화가 유사 자극으로의 확산이라면, 변별은 자극 간 차이를 구분하는 것이다",
      "key_point": "건강한 적응은 적절한 일반화와 변별의 균형에 달려 있다",
      "common_mistake": "변별이 과도하면 지나치게 제한적으로 반응하고, 일반화가 과도하면 부적절하게 광범위하게 반응한다"
    }
  },
  {
    "id": "BEHAV_RS_023",
    "terminology": "강화 계획 (Reinforcement Schedule)",
    "terminology_ko": "강화 계획",
    "terminology_en": "Reinforcement Schedule",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "강화가 제공되는 시기와 빈도의 규칙을 말하며, 연속 강화와 간헐 강화(고정비율, 변동비율, 고정간격, 변동간격)로 구분되어 행동의 학습 속도와 소거 저항에 영향을 미친다.",
    "definition_en": "Rules governing when and how often reinforcement is delivered, divided into continuous and intermittent reinforcement (fixed-ratio, variable-ratio, fixed-interval, variable-interval), affecting learning speed and resistance to extinction.",
    "significance": "행동 수정에서 강화의 효과를 최적화하는 전략을 설계하는 데 필수적이며, 행동의 유지와 소거에 대한 이해를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "B.F. 스키너",
        "name_en": "B.F. Skinner",
        "contribution": "강화 계획의 유형과 각 유형의 행동적 효과를 체계적으로 연구"
      },
      {
        "name_ko": "찰스 페스터",
        "name_en": "Charles Ferster",
        "contribution": "스키너와 함께 강화 계획에 관한 포괄적 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_003"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      }
    ],
    "sub_types": [
      {
        "name": "연속 강화 (CRF)",
        "description": "매 행동에 강화를 제공 (학습 초기에 효과적)"
      },
      {
        "name": "고정비율 (FR)",
        "description": "일정 횟수의 행동 후 강화 (예: 10개 생산 시마다 보너스)"
      },
      {
        "name": "변동비율 (VR)",
        "description": "평균적 횟수 후 강화 (예: 슬롯머신)"
      },
      {
        "name": "고정간격 (FI)",
        "description": "일정 시간 후 첫 행동에 강화 (예: 월급)"
      },
      {
        "name": "변동간격 (VI)",
        "description": "평균적 시간 후 첫 행동에 강화 (예: 낚시)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "소거 저항: VR > VI > FR > FI > 연속 (변동비율이 가장 강함 = 도박의 원리)",
      "differential": "비율 강화는 행동 횟수 기반이고, 간격 강화는 시간 기반이다. '고정'은 일정하고 '변동'은 불규칙하다",
      "key_point": "학습 초기에는 연속 강화가, 행동 유지에는 간헐 강화(특히 변동비율)가 효과적이다",
      "common_mistake": "변동비율 강화가 소거 저항이 가장 높은 이유는 '다음에는 될지 모른다'는 기대가 유지되기 때문이다"
    }
  },
  {
    "id": "BEHAV_AV_024",
    "terminology": "혐오치료 (Aversion Therapy)",
    "terminology_ko": "혐오치료",
    "terminology_en": "Aversion Therapy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "바람직하지 않은 행동이나 자극에 혐오 자극(구토제, 전기 충격 등)을 짝지어 제시함으로써 해당 행동에 대한 부정적 반응을 조건형성하는 기법이다.",
    "definition_en": "A technique that pairs undesirable behaviors or stimuli with aversive stimuli (emetics, electric shock, etc.) to condition a negative response to those behaviors.",
    "significance": "알코올 의존, 흡연 등 습관적 행동의 치료에 사용되어 왔으나, 윤리적 문제로 인해 현대에는 사용이 크게 제한되고 있다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "혐오치료의 이론적 기초를 조건형성 원리로 설명"
      },
      {
        "name_ko": "레이몬드",
        "name_en": "M.J. Raymond",
        "contribution": "알코올 의존 치료에 혐오치료를 적용한 초기 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고전적 조건형성",
        "name_en": "Classical Conditioning",
        "id": "BEHAV_CC_002"
      },
      {
        "name_ko": "역조건형성",
        "name_en": "Counterconditioning",
        "id": "BEHAV_RC_008"
      },
      {
        "name_ko": "내현적 감작",
        "name_en": "Covert Sensitization",
        "id": "BEHAV_CS_031"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_001"
      }
    ],
    "sub_types": [
      {
        "name": "화학적 혐오치료",
        "description": "구토제 등 약물을 사용한 혐오 유발"
      },
      {
        "name": "전기적 혐오치료",
        "description": "약한 전기 충격을 사용한 혐오 유발"
      },
      {
        "name": "내현적 감작",
        "description": "상상으로 혐오 장면을 연결하는 인지적 방법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "혐오치료 = 좋아하는 것 + 싫어하는 것 짝짓기 → 좋아하는 것도 싫어지게 만들기",
      "differential": "체계적 둔감화가 불안을 이완으로 대체하는 것이라면, 혐오치료는 쾌락을 혐오로 대체하는 것이다",
      "key_point": "현대 상담에서 혐오치료는 윤리적 문제로 제한적으로만 사용되며, 사전동의가 필수이다",
      "common_mistake": "혐오치료의 효과는 단기적이며, 치료 환경과 실제 환경의 차이로 인해 일반화가 어려울 수 있다"
    }
  },
  {
    "id": "BEHAV_BC_025",
    "terminology": "행동 계약 (Behavioral Contract)",
    "terminology_ko": "행동 계약",
    "terminology_en": "Behavioral Contract",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "상담자와 내담자(또는 관련 당사자들) 사이에서 목표 행동, 강화 조건, 결과 등을 명문화한 서면 합의로, 행동 변화에 대한 구체적 기대와 책임을 명확히 한다.",
    "definition_en": "A written agreement between the therapist and client (or relevant parties) that specifies target behaviors, reinforcement conditions, and consequences, clarifying specific expectations and responsibilities for behavior change.",
    "significance": "행동 변화의 동기를 높이고 책임감을 강화하는 실용적 도구로, 특히 아동·청소년 상담과 부부/가족 상담에서 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "로이드 홈",
        "name_en": "Lloyd Homme",
        "contribution": "행동 계약의 초기 형태를 교육 장면에서 개발"
      },
      {
        "name_ko": "리처드 스튜어트",
        "name_en": "Richard Stuart",
        "contribution": "부부 상담에서 행동 계약을 체계적으로 적용"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "행동 수정",
        "name_en": "Behavior Modification",
        "id": "BEHAV_BM_011"
      },
      {
        "name_ko": "자기관리",
        "name_en": "Self-Management",
        "id": "BEHAV_SM_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 계약 = 명문화된 약속: 누가, 무엇을, 언제, 어떤 결과로",
      "differential": "구두 합의보다 서면 계약이 행동 변화의 동기와 구속력을 높인다",
      "key_point": "행동 계약은 양 당사자가 동의해야 하며, 목표는 구체적이고 달성 가능해야 한다",
      "common_mistake": "행동 계약은 일방적 통제 도구가 아니라, 상호 합의에 기반한 협력적 도구이다"
    }
  },
  {
    "id": "BEHAV_SST_026",
    "terminology": "사회기술 훈련 (Social Skills Training)",
    "terminology_ko": "사회기술 훈련",
    "terminology_en": "Social Skills Training",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "대인관계에서 필요한 사회적 기술(자기주장, 대화, 감정 표현 등)을 모델링, 역할 연기, 피드백, 강화 등을 통해 체계적으로 가르치는 행동치료 프로그램이다.",
    "definition_en": "A behavior therapy program that systematically teaches social skills needed for interpersonal relationships (assertiveness, conversation, emotional expression, etc.) through modeling, role playing, feedback, and reinforcement.",
    "significance": "사회적 상호작용에 어려움을 겪는 내담자들의 대인관계 능력을 구체적으로 향상시키는 증거 기반 프로그램이다.",
    "key_researchers": [
      {
        "name_ko": "앨런 골드스타인",
        "name_en": "Arnold Goldstein",
        "contribution": "구조화된 학습 접근으로 사회기술 훈련 프로그램을 체계화"
      },
      {
        "name_ko": "로버트 리버만",
        "name_en": "Robert Liberman",
        "contribution": "정신장애 환자를 위한 사회기술 훈련 모듈을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "자기주장 훈련",
        "name_en": "Assertiveness Training",
        "id": "BEHAV_AT_033"
      },
      {
        "name_ko": "행동 리허설",
        "name_en": "Behavioral Rehearsal",
        "id": "BEHAV_BR_034"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회기술 훈련의 4단계: 교육(설명) → 모델링(시범) → 역할연기(연습) → 피드백(강화)",
      "differential": "인간중심 상담이 공감적 관계를 통한 자연적 성장을 추구한다면, 사회기술 훈련은 구체적 기술을 직접 가르친다",
      "key_point": "효과적인 사회기술 훈련은 실제 상황에서의 일반화를 위한 과제(숙제)를 포함해야 한다",
      "common_mistake": "사회기술 훈련은 단순히 예절을 가르치는 것이 아니라, 구체적 행동 기술을 체계적으로 훈련하는 것이다"
    }
  },
  {
    "id": "BEHAV_OE_027",
    "terminology": "결과 기대 (Outcome Expectancy)",
    "terminology_ko": "결과 기대",
    "terminology_en": "Outcome Expectancy",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "특정 행동이 특정 결과를 가져올 것이라는 예측으로, 자기효능감과 함께 행동 변화를 결정하는 인지적 요인이며 행동의 동기에 영향을 미친다.",
    "definition_en": "The prediction that a specific behavior will lead to a specific outcome, a cognitive factor that, along with self-efficacy, determines behavior change and influences behavioral motivation.",
    "significance": "행동 변화에서 인지적 기대의 역할을 강조하며, 자기효능감과 함께 행동 동기의 인지적 측면을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감과 결과 기대를 구분하여 행동 변화의 인지적 매개 과정을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "BEHAV_SE_015"
      },
      {
        "name_ko": "사회학습이론",
        "name_en": "Social Learning Theory",
        "id": "BEHAV_SL_004"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "CBT_CT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감: '내가 할 수 있을까?' vs 결과 기대: '하면 어떤 결과가 올까?'",
      "differential": "자기효능감은 수행 능력에 대한 신념이고, 결과 기대는 행동 결과에 대한 예측이다",
      "key_point": "자기효능감이 높아도 결과 기대가 낮으면 행동하지 않을 수 있다(예: 능력은 있지만 보상이 없을 때)",
      "common_mistake": "결과 기대와 자기효능감은 독립적 개념이며, 둘 다 행동 변화에 영향을 미친다"
    }
  },
  {
    "id": "BEHAV_SIT_028",
    "terminology": "스트레스 면역 훈련 (Stress Inoculation Training)",
    "terminology_ko": "스트레스 면역 훈련",
    "terminology_en": "Stress Inoculation Training",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "메이첸바움이 개발한 인지행동적 스트레스 관리 프로그램으로, 스트레스에 대한 교육, 대처 기술 습득, 점진적 노출 연습의 3단계를 통해 스트레스 저항력을 향상시킨다.",
    "definition_en": "A cognitive-behavioral stress management program developed by Meichenbaum, improving stress resistance through three phases: education about stress, coping skills acquisition, and graduated exposure practice.",
    "significance": "예방적 관점에서 스트레스 대처 능력을 체계적으로 훈련하는 대표적 프로그램으로, 불안, 분노, 통증 관리에 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 메이첸바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "스트레스 면역 훈련의 3단계 모델을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이완 훈련",
        "name_en": "Relaxation Training",
        "id": "BEHAV_RT_018"
      },
      {
        "name_ko": "자기교시 훈련",
        "name_en": "Self-Instructional Training",
        "id": "BEHAV_SIN_035"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "노출 치료",
        "name_en": "Exposure Therapy",
        "id": "BEHAV_ET_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "스트레스 면역 훈련 3단계: ①교육(개념화) → ②기술 습득(대처 연습) → ③적용(실전 노출)",
      "differential": "이완 훈련이 신체적 긴장 감소에 초점을 맞추는 반면, 스트레스 면역 훈련은 인지적 대처와 행동적 기술을 모두 포함한다",
      "key_point": "면역이라는 용어처럼, 작은 스트레스에 대한 대처 성공 경험이 큰 스트레스에 대한 저항력을 높인다",
      "common_mistake": "스트레스 면역 훈련은 스트레스를 제거하는 것이 아니라, 스트레스에 효과적으로 대처하는 능력을 키우는 것이다"
    }
  },
  {
    "id": "BEHAV_FL_029",
    "terminology": "홍수법 (Flooding)",
    "terminology_ko": "홍수법",
    "terminology_en": "Flooding",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "불안이나 공포를 유발하는 자극에 강도 높게 그리고 지속적으로 노출시켜, 불안 반응이 자연스럽게 감소(습관화)할 때까지 유지하는 노출 기반 기법이다.",
    "definition_en": "An exposure-based technique that exposes the client to anxiety or fear-provoking stimuli at high intensity and sustained duration until the anxiety response naturally decreases (habituation).",
    "significance": "체계적 둔감화보다 빠른 효과를 기대할 수 있지만, 높은 불안을 유발하므로 적용 시 주의와 내담자 동의가 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "토마스 스탬플",
        "name_en": "Thomas Stampfl",
        "contribution": "내파법(implosive therapy)을 개발하여 상상적 홍수법의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "노출 치료",
        "name_en": "Exposure Therapy",
        "id": "BEHAV_ET_020"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_005"
      },
      {
        "name_ko": "소거",
        "name_en": "Extinction",
        "id": "BEHAV_EX_006"
      }
    ],
    "sub_types": [
      {
        "name": "실제 홍수법 (In vivo flooding)",
        "description": "실제 불안 자극에 직접 노출"
      },
      {
        "name": "상상적 홍수법/내파법 (Implosive therapy)",
        "description": "불안 장면을 상상으로 강하게 노출"
      }
    ],
    "quiz_hints": {
      "mnemonic": "홍수법 = 가장 무서운 것에 한꺼번에 몰입 → 불안이 정점을 찍고 → 자연스럽게 감소",
      "differential": "체계적 둔감화가 약한 불안부터 점진적으로 접근하는 반면, 홍수법은 강한 불안에 바로 노출한다",
      "key_point": "홍수법의 핵심: 불안이 충분히 감소할 때까지 노출을 중단하면 안 된다. 조기 종료는 역효과를 낳는다",
      "common_mistake": "불안이 감소하기 전에 노출을 중단하면 감작(sensitization)이 일어나 오히려 불안이 강화될 수 있다"
    }
  },
  {
    "id": "BEHAV_RP_030",
    "terminology": "재발 방지 (Relapse Prevention)",
    "terminology_ko": "재발 방지",
    "terminology_en": "Relapse Prevention",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "상담을 통해 달성한 행동 변화가 치료 종결 후에도 유지되도록 돕는 인지행동적 전략으로, 고위험 상황 인식, 대처 기술, 자기효능감 강화 등을 포함한다.",
    "definition_en": "Cognitive-behavioral strategies to help maintain behavior changes achieved through counseling after treatment ends, including recognition of high-risk situations, coping skills, and self-efficacy enhancement.",
    "significance": "행동 변화의 유지와 일반화를 보장하는 치료의 최종 단계로, 특히 중독 치료에서 핵심적인 구성 요소이다.",
    "key_researchers": [
      {
        "name_ko": "앨런 말랫",
        "name_en": "G. Alan Marlatt",
        "contribution": "알코올 의존에서 재발 방지 모델을 개발하고 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "BEHAV_SE_015"
      },
      {
        "name_ko": "자발적 회복",
        "name_en": "Spontaneous Recovery",
        "id": "BEHAV_SR_021"
      },
      {
        "name_ko": "자기관리",
        "name_en": "Self-Management",
        "id": "BEHAV_SM_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재발 방지의 핵심: 고위험 상황 파악 → 대처 기술 준비 → 실패해도 포기하지 않기",
      "differential": "상담의 종결이 끝이 아니라, 재발 방지를 위한 후속 전략이 치료의 필수적 부분이다",
      "key_point": "일시적 실패(lapse)와 완전한 재발(relapse)을 구분하며, 일시적 실패를 학습의 기회로 활용한다",
      "common_mistake": "한 번의 실수(lapse)가 곧 완전한 재발(relapse)을 의미하지 않는다(절제 위반 효과를 경계)"
    }
  },
  {
    "id": "BEHAV_CS_031",
    "terminology": "내현적 감작 (Covert Sensitization)",
    "terminology_ko": "내현적 감작",
    "terminology_en": "Covert Sensitization",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "실제 혐오 자극 대신 상상으로 혐오스러운 장면을 떠올려 바람직하지 않은 행동과 연결하는 인지적 혐오치료 기법으로, 윤리적으로 보다 수용 가능한 대안이다.",
    "definition_en": "A cognitive aversion therapy technique that links undesirable behaviors with imagined aversive scenes rather than actual aversive stimuli, an ethically more acceptable alternative.",
    "significance": "전통적 혐오치료의 윤리적 문제를 완화하면서도 역조건형성의 원리를 적용할 수 있는 대안적 기법이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 코틀라",
        "name_en": "Joseph Cautela",
        "contribution": "내현적 감작 기법을 개발하고 내현적 조건형성 이론을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "혐오치료",
        "name_en": "Aversion Therapy",
        "id": "BEHAV_AV_024"
      },
      {
        "name_ko": "역조건형성",
        "name_en": "Counterconditioning",
        "id": "BEHAV_RC_008"
      },
      {
        "name_ko": "내현적 강화",
        "name_en": "Covert Reinforcement",
        "id": "BEHAV_CR_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내현적 = 마음속에서(covert): 실제가 아닌 상상으로 혐오 장면을 연결하기",
      "differential": "외현적 혐오치료가 실제 자극을 사용한다면, 내현적 감작은 상상만을 사용하므로 덜 침습적이다",
      "key_point": "내현적 감작의 효과는 내담자의 상상력과 동기에 크게 의존한다",
      "common_mistake": "내현적 감작이 상상이라고 해서 효과가 없는 것이 아니며, 이미지의 생생함이 효과를 좌우한다"
    }
  },
  {
    "id": "BEHAV_SM_032",
    "terminology": "자기관리 (Self-Management)",
    "terminology_ko": "자기관리",
    "terminology_en": "Self-Management",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "내담자가 상담자의 도움 없이 스스로 자신의 행동을 관찰, 평가, 강화하여 변화시키는 기법의 총칭으로, 자기감찰, 자기강화, 자극통제 등을 포함한다.",
    "definition_en": "A collective term for techniques where clients independently observe, evaluate, and reinforce their own behavior changes without the therapist's help, including self-monitoring, self-reinforcement, and stimulus control.",
    "significance": "상담의 궁극적 목표인 내담자의 자율적 행동 변화 능력을 구축하며, 상담 종결 후 변화 유지에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "프레드 칸퍼",
        "name_en": "Frederick Kanfer",
        "contribution": "자기관리의 3단계 모델(자기감찰, 자기평가, 자기강화)을 제시"
      },
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기조절과 자기효능감 개념으로 자기관리의 이론적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기효능감",
        "name_en": "Self-Efficacy",
        "id": "BEHAV_SE_015"
      },
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "행동 계약",
        "name_en": "Behavioral Contract",
        "id": "BEHAV_BC_025"
      },
      {
        "name_ko": "재발 방지",
        "name_en": "Relapse Prevention",
        "id": "BEHAV_RP_030"
      }
    ],
    "sub_types": [
      {
        "name": "자기감찰 (Self-Monitoring)",
        "description": "자신의 행동을 관찰하고 기록하는 것"
      },
      {
        "name": "자기강화 (Self-Reinforcement)",
        "description": "목표 행동 수행 시 스스로에게 보상을 주는 것"
      },
      {
        "name": "자극통제 (Stimulus Control)",
        "description": "행동을 유발하는 환경적 자극을 조절하는 것"
      }
    ],
    "quiz_hints": {
      "mnemonic": "자기관리 3단계: 감찰(관찰) → 평가(비교) → 강화(보상) = 칸퍼의 모델",
      "differential": "행동 수정이 외부(상담자)에 의한 행동 변화라면, 자기관리는 내담자 스스로의 행동 변화이다",
      "key_point": "자기관리의 첫 번째 단계인 자기감찰만으로도 행동 변화가 시작될 수 있다(반응성 효과)",
      "common_mistake": "자기관리는 의지력에 의존하는 것이 아니라, 체계적인 행동적 전략을 자기 자신에게 적용하는 것이다"
    }
  },
  {
    "id": "BEHAV_AT_033",
    "terminology": "자기주장 훈련 (Assertiveness Training)",
    "terminology_ko": "자기주장 훈련",
    "terminology_en": "Assertiveness Training",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "자신의 권리, 감정, 의견을 타인의 권리를 침해하지 않으면서 적절하게 표현하는 기술을 훈련하는 행동치료 기법으로, 수동적 행동과 공격적 행동의 중간 지점인 주장적 행동을 목표로 한다.",
    "definition_en": "A behavior therapy technique training the skill of appropriately expressing one's rights, feelings, and opinions without violating others' rights, targeting assertive behavior as the middle ground between passive and aggressive behavior.",
    "significance": "대인관계에서의 효과적 의사소통 능력을 향상시키며, 사회불안, 자존감 저하, 관계 갈등 등의 문제에 널리 적용된다.",
    "key_researchers": [
      {
        "name_ko": "조셉 월프",
        "name_en": "Joseph Wolpe",
        "contribution": "자기주장 훈련을 불안 치료의 맥락에서 최초로 제안"
      },
      {
        "name_ko": "앤드류 살터",
        "name_en": "Andrew Salter",
        "contribution": "조건반사요법에서 자기주장의 중요성을 강조"
      },
      {
        "name_ko": "로버트 알버티",
        "name_en": "Robert Alberti",
        "contribution": "자기주장 훈련의 체계적 매뉴얼을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회기술 훈련",
        "name_en": "Social Skills Training",
        "id": "BEHAV_SST_026"
      },
      {
        "name_ko": "행동 리허설",
        "name_en": "Behavioral Rehearsal",
        "id": "BEHAV_BR_034"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 유형: 수동적(남의 권리만) ↔ 주장적(양쪽 권리) ↔ 공격적(내 권리만)",
      "differential": "공격성(aggression)이 타인의 권리를 침해하는 것이라면, 자기주장(assertion)은 자타 모두의 권리를 존중하는 것이다",
      "key_point": "자기주장 훈련은 '나 전달법(I-message)'을 핵심 기술로 포함한다",
      "common_mistake": "자기주장은 항상 자기 뜻을 관철시키는 것이 아니라, 자기의 입장을 적절히 표현하는 것이다"
    }
  },
  {
    "id": "BEHAV_BR_034",
    "terminology": "행동 리허설 (Behavioral Rehearsal)",
    "terminology_ko": "행동 리허설",
    "terminology_en": "Behavioral Rehearsal",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "실제 상황에서 사용할 행동을 상담 장면에서 미리 연습하는 기법으로, 역할 연기(role playing)를 통해 새로운 행동을 안전하게 시험하고 피드백을 받는다.",
    "definition_en": "A technique of practicing behaviors to be used in real situations beforehand in the counseling setting, safely testing new behaviors through role playing and receiving feedback.",
    "significance": "학습한 기술을 실제 상황에 적용하기 전에 연습할 수 있는 기회를 제공하여, 행동 변화의 일반화를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "앨런 라자루스",
        "name_en": "Arnold Lazarus",
        "contribution": "행동 리허설을 상담 기법으로 체계화하고 다중양식치료에 통합"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "자기주장 훈련",
        "name_en": "Assertiveness Training",
        "id": "BEHAV_AT_033"
      },
      {
        "name_ko": "사회기술 훈련",
        "name_en": "Social Skills Training",
        "id": "BEHAV_SST_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 리허설 = 무대 리허설: 실제 공연(실생활) 전에 안전한 연습실(상담실)에서 미리 연습",
      "differential": "상상적 시연이 머릿속으로 연습하는 것이라면, 행동 리허설은 실제로 행동하며 연습하는 것이다",
      "key_point": "행동 리허설 후 구체적 피드백과 코칭이 필수적이며, 반복 연습을 통해 숙달을 추구한다",
      "common_mistake": "행동 리허설은 한 번으로 끝나는 것이 아니라, 피드백을 반영하여 여러 차례 반복해야 효과적이다"
    }
  },
  {
    "id": "BEHAV_SIN_035",
    "terminology": "자기교시 훈련 (Self-Instructional Training)",
    "terminology_ko": "자기교시 훈련",
    "terminology_en": "Self-Instructional Training",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "메이첸바움이 개발한 인지행동적 기법으로, 과제 수행 시 자기 자신에게 말하는 내적 언어(self-talk)를 변화시켜 행동을 조절하는 훈련이다.",
    "definition_en": "A cognitive-behavioral technique developed by Meichenbaum that regulates behavior by changing the internal language (self-talk) one uses when performing tasks.",
    "significance": "비고츠키의 내적 언어 이론에 기초하며, 특히 아동의 충동성, 주의력 문제, 과제 수행 향상에 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 메이첸바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "자기교시 훈련을 개발하고 인지적 행동 수정의 체계를 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스트레스 면역 훈련",
        "name_en": "Stress Inoculation Training",
        "id": "BEHAV_SIT_028"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MD_013"
      },
      {
        "name_ko": "자기관리",
        "name_en": "Self-Management",
        "id": "BEHAV_SM_032"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기교시 5단계: 인지적 모델링 → 외현적 안내 → 외현적 자기교시 → 소리 줄여 자기교시 → 내현적 자기교시",
      "differential": "벡의 인지치료가 비합리적 사고를 논박하는 것이라면, 자기교시는 적응적 자기대화를 직접 훈련하는 것이다",
      "key_point": "자기교시 훈련의 핵심은 부적응적 자기대화를 적응적 자기대화로 체계적으로 대체하는 것이다",
      "common_mistake": "자기교시는 단순한 긍정적 확언(affirmation)이 아니라, 과제 수행을 안내하는 구체적이고 실용적인 자기 지시이다"
    }
  },
  {
    "id": "BEHAV_CR_036",
    "terminology": "내현적 강화 (Covert Reinforcement)",
    "terminology_ko": "내현적 강화",
    "terminology_en": "Covert Reinforcement",
    "category": "BEHAV",
    "category_name": "행동주의 상담 (Behavior Therapy)",
    "definition": "바람직한 행동을 상상한 직후에 즐거운 장면을 상상하여 내면적으로 강화하는 기법으로, 코틀라가 개발한 내현적 조건형성 기법 중 하나이다.",
    "definition_en": "A technique of internally reinforcing desired behavior by imagining a pleasant scene immediately after imagining the desired behavior, one of the covert conditioning techniques developed by Cautela.",
    "significance": "외현적 강화가 어려운 상황에서 상상을 통해 행동 변화를 촉진하는 유용한 대안적 기법이다.",
    "key_researchers": [
      {
        "name_ko": "조셉 코틀라",
        "name_en": "Joseph Cautela",
        "contribution": "내현적 강화를 포함한 일련의 내현적 조건형성 기법을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강화",
        "name_en": "Reinforcement",
        "id": "BEHAV_RF_009"
      },
      {
        "name_ko": "내현적 감작",
        "name_en": "Covert Sensitization",
        "id": "BEHAV_CS_031"
      },
      {
        "name_ko": "자기관리",
        "name_en": "Self-Management",
        "id": "BEHAV_SM_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "내현적 강화 = 마음속 보상: 바람직한 행동 상상 + 즐거운 장면 상상 = 내적 강화",
      "differential": "외현적 강화는 실제 보상을 제공하지만, 내현적 강화는 상상 속 보상을 사용한다",
      "key_point": "내현적 강화의 효과는 상상의 생생함과 즐거운 장면의 개인적 의미에 의존한다",
      "common_mistake": "내현적 강화는 단순한 공상이 아니라, 조건형성 원리에 기반한 체계적 절차이다"
    }
  }
];

TERMS_DATA.REALITY = [
  {
    "id": "REALITY_RT_001",
    "terminology": "현실치료 (Reality Therapy)",
    "terminology_ko": "현실치료",
    "terminology_en": "Reality Therapy",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "William Glasser가 개발한 상담 접근법으로, 내담자가 현재 행동을 평가하고 보다 효과적인 선택을 통해 기본 욕구를 충족시킬 수 있도록 돕는 상담 이론이다.",
    "definition_en": "A counseling approach developed by William Glasser that helps clients evaluate their current behavior and make more effective choices to satisfy their basic needs.",
    "significance": "내담자의 현재 행동과 선택에 초점을 맞추어 변화를 이끌어내는 실용적 상담 모델로, 학교상담과 교정상담에서 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "현실치료와 선택이론의 창시자"
      },
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "WDEP 체계의 개발 및 현실치료의 체계적 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "글래서 = 현실 = 선택 = 책임",
      "differential": "정신분석이 과거에 초점을 맞추는 반면, 현실치료는 현재 행동과 선택에 집중한다.",
      "key_point": "현실치료는 진단이나 정신질환 개념을 거부하고, 내담자의 선택과 책임을 강조한다.",
      "common_mistake": "현실치료를 단순한 행동수정으로 오해하기 쉬우나, 핵심은 내적 욕구 충족을 위한 자기 평가이다."
    }
  },
  {
    "id": "REALITY_CT_002",
    "terminology": "선택이론 (Choice Theory)",
    "terminology_ko": "선택이론",
    "terminology_en": "Choice Theory",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Glasser가 제안한 이론으로, 모든 행동은 내적 동기에 의해 선택된 것이며, 인간은 5가지 기본 욕구를 충족시키기 위해 행동을 선택한다고 본다.",
    "definition_en": "A theory proposed by Glasser stating that all behavior is internally motivated and chosen, and humans choose behaviors to satisfy five basic needs.",
    "significance": "외부 통제 심리학을 거부하고, 인간의 자율적 선택과 내적 동기를 강조하는 현실치료의 이론적 토대이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "통제이론에서 선택이론으로 명칭을 변경하고 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "선택이론: '모든 행동은 나의 선택이다'",
      "differential": "행동주의가 외부 자극에 의한 반응을 강조하는 반면, 선택이론은 내적 욕구에 의한 선택을 강조한다.",
      "key_point": "1996년 통제이론(Control Theory)에서 선택이론(Choice Theory)으로 명칭을 변경하였다.",
      "common_mistake": "선택이론을 William Powers의 지각통제이론(PCT)과 혼동하지 말 것. Glasser가 Powers의 이론에서 영감을 받았으나 별개의 이론이다."
    }
  },
  {
    "id": "REALITY_WD_003",
    "terminology": "WDEP 체계 (WDEP System)",
    "terminology_ko": "WDEP 체계",
    "terminology_en": "WDEP System",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Robert Wubbolding이 체계화한 현실치료의 실천 모델로, 바람(Wants), 행동(Doing), 평가(Evaluation), 계획(Planning)의 4단계로 구성된다.",
    "definition_en": "A practical model of Reality Therapy systematized by Robert Wubbolding, consisting of four stages: Wants, Doing, Evaluation, and Planning.",
    "significance": "현실치료의 상담 과정을 구조화하여 상담자가 체계적으로 개입할 수 있는 실용적 틀을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "WDEP 체계를 개발하여 현실치료를 체계적으로 적용할 수 있게 함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      },
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      }
    ],
    "sub_types": [
      {
        "name": "W (Wants)",
        "description": "내담자의 바람, 욕구, 지각 탐색"
      },
      {
        "name": "D (Doing/Direction)",
        "description": "현재 행동과 방향 탐색"
      },
      {
        "name": "E (Evaluation)",
        "description": "행동의 효과성에 대한 자기평가"
      },
      {
        "name": "P (Planning)",
        "description": "새로운 행동 계획 수립"
      }
    ],
    "quiz_hints": {
      "mnemonic": "W(원하는 것) → D(하고 있는 것) → E(평가) → P(계획)",
      "differential": "WDEP는 상담 기법이 아닌 상담 과정의 틀이며, 각 단계가 순환적으로 작동한다.",
      "key_point": "E(평가) 단계가 가장 핵심적이며, 내담자 스스로 자신의 행동을 평가하도록 하는 것이 현실치료의 핵심이다.",
      "common_mistake": "WDEP를 반드시 순서대로 진행해야 한다고 오해하기 쉬우나, 실제로는 유연하게 순환적으로 사용한다."
    }
  },
  {
    "id": "REALITY_BN_004",
    "terminology": "기본 욕구 (Basic Needs)",
    "terminology_ko": "기본 욕구",
    "terminology_en": "Basic Needs",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Glasser가 제안한 인간의 5가지 선천적 욕구로, 생존, 사랑과 소속, 힘(권력), 자유, 즐거움으로 구성된다.",
    "definition_en": "Five innate human needs proposed by Glasser: survival, love and belonging, power, freedom, and fun.",
    "significance": "모든 인간 행동의 동기를 설명하는 선택이론의 핵심 개념으로, 욕구 충족 여부가 심리적 건강의 기준이 된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "5가지 기본 욕구 체계 제안"
      },
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "욕구위계이론으로 인간 욕구 연구의 기초를 마련함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "사랑과 소속의 욕구",
        "name_en": "Love and Belonging Need",
        "id": "REALITY_LB_010"
      }
    ],
    "sub_types": [
      {
        "name": "생존 (Survival)",
        "description": "신체적 안전과 건강 유지에 대한 욕구"
      },
      {
        "name": "사랑과 소속 (Love & Belonging)",
        "description": "타인과의 친밀한 관계와 소속감에 대한 욕구"
      },
      {
        "name": "힘/권력 (Power)",
        "description": "성취, 인정, 자존감에 대한 욕구"
      },
      {
        "name": "자유 (Freedom)",
        "description": "자율성과 독립에 대한 욕구"
      },
      {
        "name": "즐거움 (Fun)",
        "description": "놀이, 학습, 유머에 대한 욕구"
      }
    ],
    "quiz_hints": {
      "mnemonic": "생(생존)-사(사랑)-힘-자(자유)-즐(즐거움) = '생사 힘으로 자유롭게 즐기자'",
      "differential": "Maslow의 욕구위계와 달리 Glasser의 5가지 욕구는 위계적이지 않고 동등하게 중요하다.",
      "key_point": "사랑과 소속의 욕구가 가장 중요하며, 대부분의 심리적 문제는 관계 욕구의 좌절에서 비롯된다고 본다.",
      "common_mistake": "Maslow의 5단계 욕구위계와 Glasser의 5가지 기본 욕구를 혼동하지 말 것. 구성 내용과 위계성 여부가 다르다."
    }
  },
  {
    "id": "REALITY_TB_005",
    "terminology": "전행동 (Total Behavior)",
    "terminology_ko": "전행동",
    "terminology_en": "Total Behavior",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "선택이론에서 모든 행동은 활동하기, 생각하기, 느끼기, 신체반응의 4가지 구성요소가 동시에 작동하는 전체적 과정으로 본다.",
    "definition_en": "In Choice Theory, all behavior is a total package consisting of four inseparable components: acting, thinking, feeling, and physiology, which operate simultaneously.",
    "significance": "행동을 전체적으로 이해하게 하며, 비교적 통제하기 쉬운 활동하기와 생각하기를 변화시켜 간접적으로 감정과 신체반응을 변화시킬 수 있음을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "전행동 개념을 통해 행동의 4가지 구성요소를 통합적으로 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      }
    ],
    "sub_types": [
      {
        "name": "활동하기 (Acting)",
        "description": "신체적 움직임과 행위"
      },
      {
        "name": "생각하기 (Thinking)",
        "description": "인지적 과정과 사고"
      },
      {
        "name": "느끼기 (Feeling)",
        "description": "감정과 정서적 반응"
      },
      {
        "name": "신체반응 (Physiology)",
        "description": "생리적 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전행동 = 자동차의 네 바퀴: 앞바퀴(활동+생각)가 뒷바퀴(감정+신체)를 이끈다",
      "differential": "인지치료가 생각의 변화를 통해 감정을 바꾸려는 반면, 전행동 개념은 활동과 생각 모두를 직접 변화 가능한 요소로 본다.",
      "key_point": "앞바퀴(활동하기, 생각하기)는 직접 통제 가능하고, 뒷바퀴(느끼기, 신체반응)는 간접적으로만 변화 가능하다.",
      "common_mistake": "전행동에서 4가지 요소가 독립적으로 작동한다고 오해하기 쉬우나, 항상 동시에 함께 작동한다."
    }
  },
  {
    "id": "REALITY_EC_006",
    "terminology": "외부 통제 심리학 (External Control Psychology)",
    "terminology_ko": "외부 통제 심리학",
    "terminology_en": "External Control Psychology",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "타인의 행동을 외부에서 통제할 수 있다고 믿는 관점으로, Glasser가 현실치료에서 강력히 반대하며 인간관계 파괴의 주요 원인으로 지목한다.",
    "definition_en": "The belief that one can control others' behavior from outside, which Glasser strongly opposes in Reality Therapy, identifying it as a primary cause of relationship destruction.",
    "significance": "현실치료는 외부 통제 심리학을 관계 문제의 근본 원인으로 보며, 이를 선택이론으로 대체할 것을 주장한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "외부 통제 심리학의 해로움을 지적하고 선택이론을 대안으로 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "치명적 습관",
        "name_en": "Deadly Habits",
        "id": "REALITY_DH_011"
      },
      {
        "name_ko": "돌봄 습관",
        "name_en": "Caring Habits",
        "id": "REALITY_CH_012"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외부 통제 = '나는 너를 바꿀 수 있다'는 잘못된 믿음",
      "differential": "선택이론은 '자기만 통제 가능'하다고 보며, 외부 통제 심리학은 '타인을 통제 가능'하다고 본다.",
      "key_point": "비난, 불평, 위협, 처벌, 보상으로 통제 등 7가지 치명적 습관이 외부 통제의 전형적 표현이다.",
      "common_mistake": "외부 통제 심리학이 특정 이론을 지칭하는 것이 아니라, 일상적으로 사람들이 취하는 관계 태도를 가리킨다."
    }
  },
  {
    "id": "REALITY_SE_007",
    "terminology": "자기평가 (Self-Evaluation)",
    "terminology_ko": "자기평가",
    "terminology_en": "Self-Evaluation",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "내담자가 자신의 현재 행동이 원하는 것을 얻는 데 효과적인지를 스스로 판단하는 과정으로, WDEP의 E(평가) 단계의 핵심이다.",
    "definition_en": "The process in which clients judge for themselves whether their current behavior is effective in getting what they want, forming the core of the E (Evaluation) stage in WDEP.",
    "significance": "상담자가 판단을 내리는 것이 아니라 내담자 스스로 자기 행동을 평가하도록 하여 내적 동기를 유발하는 현실치료의 가장 중요한 기법이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "자기평가를 현실치료의 핵심 과정으로 정립함"
      },
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "자기평가 질문 기법을 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      },
      {
        "name_ko": "직면",
        "name_en": "Confrontation",
        "id": "PROCESS_CF_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기평가 = '지금 하고 있는 것이 당신이 원하는 것을 얻는 데 도움이 되나요?'",
      "differential": "인지치료의 소크라테스식 질문과 유사하나, 자기평가는 사고의 합리성이 아닌 행동의 효과성을 평가한다.",
      "key_point": "상담자가 내담자에게 답을 주지 않고, 내담자가 스스로 자신의 행동을 평가하게 하는 것이 핵심이다.",
      "common_mistake": "자기평가를 상담자가 내담자의 행동을 평가해 주는 것으로 오해하면 안 된다. 주체는 반드시 내담자이다."
    }
  },
  {
    "id": "REALITY_AP_008",
    "terminology": "행동 계획 (Action Plan)",
    "terminology_ko": "행동 계획",
    "terminology_en": "Action Plan",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "WDEP의 P(계획) 단계에서 내담자가 수립하는 구체적이고 실현 가능한 행동 변화 계획으로, SAMIC3 기준을 충족해야 한다.",
    "definition_en": "A specific, achievable behavior change plan developed by the client in the P (Planning) stage of WDEP, which should meet SAMIC3 criteria.",
    "significance": "내담자가 자기평가 후 실제로 변화를 실행할 수 있도록 구체적인 행동 단위로 전환하는 현실치료의 실천적 핵심 단계이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "SAMIC3 기준을 포함한 효과적 계획 수립 지침 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      },
      {
        "name_ko": "SAMIC3",
        "name_en": "SAMIC3",
        "id": "REALITY_SM_013"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "좋은 계획 = 단순(Simple), 달성 가능(Attainable), 측정 가능(Measurable), 즉각적(Immediate), 일관적(Consistent)",
      "differential": "행동치료의 행동 계약과 유사하나, 현실치료에서는 내담자의 자기평가에 기반한 자발적 계획을 강조한다.",
      "key_point": "계획은 '하지 않겠다'가 아닌 '하겠다'의 긍정적 형태여야 하며, 타인이 아닌 자신이 통제할 수 있는 행동이어야 한다.",
      "common_mistake": "계획 수립 시 상담자가 계획을 제안하는 것이 아니라, 내담자가 스스로 계획을 세우도록 돕는 것이다."
    }
  },
  {
    "id": "REALITY_QW_009",
    "terminology": "좋은 세계 (Quality World)",
    "terminology_ko": "좋은 세계",
    "terminology_en": "Quality World",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "개인이 자신의 기본 욕구를 충족시켜 줄 것이라 믿는 사람, 사물, 신념 등의 이상적 심상들이 저장된 내면의 그림 세계이다.",
    "definition_en": "An inner picture world containing ideal images of people, things, and beliefs that an individual believes will satisfy their basic needs.",
    "significance": "인간 행동의 방향을 결정하는 내적 참조 체계로, 현실 세계와 좋은 세계 간의 불일치가 행동 변화의 동기가 된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "좋은 세계 개념을 선택이론의 핵심 구성요소로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "지각된 세계",
        "name_en": "Perceived World",
        "id": "REALITY_PW_014"
      },
      {
        "name_ko": "비교 장소",
        "name_en": "Comparing Place",
        "id": "REALITY_CP_015"
      }
    ],
    "sub_types": [
      {
        "name": "좋은 세계의 사람들",
        "description": "욕구 충족과 연관된 중요한 인물들"
      },
      {
        "name": "좋은 세계의 사물/경험",
        "description": "즐거움, 성취감을 주는 것들"
      },
      {
        "name": "좋은 세계의 신념/가치",
        "description": "개인이 소중히 여기는 믿음과 가치관"
      }
    ],
    "quiz_hints": {
      "mnemonic": "좋은 세계 = 내 마음속 이상적인 앨범 (원하는 사진들의 모음)",
      "differential": "프로이트의 초자아(사회적 규범)와 달리, 좋은 세계는 개인적 욕구 충족의 이미지이다.",
      "key_point": "좋은 세계의 그림은 고정적이지 않고, 경험에 따라 지속적으로 업데이트된다.",
      "common_mistake": "좋은 세계가 현실적으로 달성 가능한 것만 포함한다고 오해하면 안 된다. 비현실적 이미지도 포함될 수 있다."
    }
  },
  {
    "id": "REALITY_LB_010",
    "terminology": "사랑과 소속의 욕구 (Love and Belonging Need)",
    "terminology_ko": "사랑과 소속의 욕구",
    "terminology_en": "Love and Belonging Need",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "5가지 기본 욕구 중 가장 중요한 욕구로, 타인과의 친밀한 관계, 소속감, 사랑을 주고받는 것에 대한 욕구이다.",
    "definition_en": "The most important of the five basic needs, involving the need for intimate relationships with others, belonging, and giving and receiving love.",
    "significance": "Glasser는 대부분의 심리적 문제가 이 욕구의 좌절에서 비롯된다고 보았으며, 상담관계 자체가 이 욕구 충족의 시작이 된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "사랑과 소속 욕구를 5가지 기본 욕구의 핵심으로 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "돌봄 습관",
        "name_en": "Caring Habits",
        "id": "REALITY_CH_012"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사소(사랑+소속) = 가장 '사소'하지 않은 욕구",
      "differential": "Maslow의 소속 욕구가 위계의 3단계인 반면, Glasser의 사랑과 소속 욕구는 위계 없이 가장 핵심적 욕구이다.",
      "key_point": "Glasser는 행복한 삶의 열쇠가 만족스러운 인간관계에 있다고 보았다.",
      "common_mistake": "사랑과 소속 욕구를 단순히 연인 관계로만 한정하면 안 된다. 가족, 친구, 동료 등 모든 관계를 포함한다."
    }
  },
  {
    "id": "REALITY_DH_011",
    "terminology": "치명적 습관 (Deadly Habits)",
    "terminology_ko": "치명적 습관",
    "terminology_en": "Deadly Habits",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "외부 통제 심리학에 기반한 7가지 관계 파괴적 행동으로, 비난하기, 불평하기, 위협하기, 처벌하기, 잔소리하기, 매수하기, 비판하기를 포함한다.",
    "definition_en": "Seven relationship-destroying behaviors based on external control psychology: criticizing, blaming, complaining, nagging, threatening, punishing, and bribing.",
    "significance": "인간관계를 파괴하는 외부 통제적 의사소통 패턴을 구체적으로 명시하여, 돌봄 습관으로의 전환을 유도한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "7가지 치명적 습관을 규명하고 대안적 돌봄 습관을 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      },
      {
        "name_ko": "돌봄 습관",
        "name_en": "Caring Habits",
        "id": "REALITY_CH_012"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "사랑과 소속의 욕구",
        "name_en": "Love and Belonging Need",
        "id": "REALITY_LB_010"
      }
    ],
    "sub_types": [
      {
        "name": "비난하기 (Blaming)",
        "description": "타인의 잘못을 지적하고 책임을 전가함"
      },
      {
        "name": "불평하기 (Complaining)",
        "description": "불만을 반복적으로 표현함"
      },
      {
        "name": "위협하기 (Threatening)",
        "description": "부정적 결과를 경고하여 행동을 강요함"
      },
      {
        "name": "처벌하기 (Punishing)",
        "description": "벌을 가하여 행동을 억제함"
      },
      {
        "name": "잔소리하기 (Nagging)",
        "description": "같은 요구를 반복적으로 되풀이함"
      },
      {
        "name": "매수하기 (Bribing)",
        "description": "보상을 제공하여 행동을 조종함"
      },
      {
        "name": "비판하기 (Criticizing)",
        "description": "타인의 행동이나 성격을 부정적으로 평가함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "치명적 7가지: 비(비난)-불(불평)-위(위협)-처(처벌)-잔(잔소리)-매(매수)-비(비판)",
      "differential": "치명적 습관은 외부 통제의 구체적 행동 표현이며, 돌봄 습관은 선택이론에 기반한 대안적 행동이다.",
      "key_point": "이 7가지 습관은 모두 타인을 통제하려는 시도이며, 관계를 파괴하는 공통점이 있다.",
      "common_mistake": "처벌과 비판을 혼동하기 쉽다. 처벌은 행동적 제재이고, 비판은 언어적 부정 평가이다."
    }
  },
  {
    "id": "REALITY_CH_012",
    "terminology": "돌봄 습관 (Caring Habits)",
    "terminology_ko": "돌봄 습관",
    "terminology_en": "Caring Habits",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "선택이론에 기반한 7가지 관계 촉진적 행동으로, 경청하기, 지지하기, 격려하기, 존중하기, 신뢰하기, 수용하기, 차이 협상하기를 포함한다.",
    "definition_en": "Seven relationship-building behaviors based on Choice Theory: listening, supporting, encouraging, respecting, trusting, accepting, and negotiating differences.",
    "significance": "치명적 습관을 대체하여 건강한 인간관계를 구축하는 구체적 행동 지침을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "치명적 습관의 대안으로 7가지 돌봄 습관을 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치명적 습관",
        "name_en": "Deadly Habits",
        "id": "REALITY_DH_011"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "사랑과 소속의 욕구",
        "name_en": "Love and Belonging Need",
        "id": "REALITY_LB_010"
      },
      {
        "name_ko": "경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_002"
      }
    ],
    "sub_types": [
      {
        "name": "경청하기 (Listening)",
        "description": "상대방의 말에 주의를 기울이고 이해하려 노력함"
      },
      {
        "name": "지지하기 (Supporting)",
        "description": "상대방의 노력과 시도를 격려하고 지원함"
      },
      {
        "name": "격려하기 (Encouraging)",
        "description": "상대방에게 용기와 자신감을 불어넣음"
      },
      {
        "name": "존중하기 (Respecting)",
        "description": "상대방의 가치와 선택을 인정함"
      },
      {
        "name": "신뢰하기 (Trusting)",
        "description": "상대방을 믿고 자율성을 인정함"
      },
      {
        "name": "수용하기 (Accepting)",
        "description": "상대방을 있는 그대로 받아들임"
      },
      {
        "name": "차이 협상하기 (Negotiating Differences)",
        "description": "의견 차이를 대화로 해결함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "돌봄 7가지: 경(경청)-지(지지)-격(격려)-존(존중)-신(신뢰)-수(수용)-차(차이 협상)",
      "differential": "Rogers의 핵심 조건(공감, 무조건적 존중, 진실성)과 유사하나, 돌봄 습관은 일상관계에서의 구체적 행동 목록이다.",
      "key_point": "치명적 습관을 멈추는 것만으로는 부족하고, 돌봄 습관으로 적극적으로 대체해야 관계가 개선된다.",
      "common_mistake": "돌봄 습관이 상담 장면에서만 사용된다고 오해하면 안 된다. 모든 인간관계에 적용되는 원칙이다."
    }
  },
  {
    "id": "REALITY_SM_013",
    "terminology": "SAMIC3 (SAMIC3)",
    "terminology_ko": "SAMIC3",
    "terminology_en": "SAMIC3",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "효과적인 행동 계획이 갖추어야 할 기준으로, 단순하고(Simple), 달성 가능하고(Attainable), 측정 가능하고(Measurable), 즉각적이고(Immediate), 일관적이며(Consistent), 통제 가능하고(Controlled), 헌신적이고(Committed), 지속적(Continuous)이어야 한다.",
    "definition_en": "Criteria for effective action plans: Simple, Attainable, Measurable, Immediate, Consistent, Controlled by the planner, Committed to, and Continuous.",
    "significance": "현실치료의 계획 수립 단계에서 구체적이고 실현 가능한 계획을 세울 수 있도록 돕는 실용적 점검 기준이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "SAMIC3 기준을 개발하여 현실치료의 계획 단계를 구체화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      },
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SAMIC3 = S(단순) + A(달성) + M(측정) + I(즉각) + C(일관) + C(통제) + C(헌신) = 3개의 C",
      "differential": "SMART 목표 설정과 유사하나, SAMIC3는 현실치료 고유의 기준으로 헌신(Committed)과 지속(Continuous)을 추가로 강조한다.",
      "key_point": "계획은 반드시 내담자 자신이 통제할 수 있는(Controlled) 행동이어야 한다.",
      "common_mistake": "SAMIC3의 3개의 C를 혼동하기 쉽다: Consistent(일관), Controlled(통제 가능), Committed(헌신)."
    }
  },
  {
    "id": "REALITY_PW_014",
    "terminology": "지각된 세계 (Perceived World)",
    "terminology_ko": "지각된 세계",
    "terminology_en": "Perceived World",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "개인이 감각기관을 통해 받아들이고 자신의 지식과 가치관에 따라 해석한 주관적 현실 세계를 말한다.",
    "definition_en": "The subjective reality world that individuals perceive through their senses and interpret according to their knowledge and values.",
    "significance": "사람마다 같은 상황을 다르게 지각하며, 좋은 세계와의 비교를 통해 행동이 생성된다는 선택이론의 기제를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "선택이론에서 지각 체계의 역할을 설명함"
      },
      {
        "name_ko": "윌리엄 파워스",
        "name_en": "William Powers",
        "contribution": "지각통제이론(PCT)에서 지각의 역할에 대한 이론적 기초를 제공함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "비교 장소",
        "name_en": "Comparing Place",
        "id": "REALITY_CP_015"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "지각된 세계 = 내가 '보는' 세상 (객관적 세상이 아님)",
      "differential": "인지치료의 '자동적 사고'가 사건의 해석이라면, 지각된 세계는 전체 현실에 대한 주관적 인식 체계이다.",
      "key_point": "지각된 세계와 좋은 세계 간의 차이가 클수록 행동 변화의 동기가 강해진다.",
      "common_mistake": "지각된 세계가 '왜곡된' 인식을 의미하는 것이 아니라, 모든 사람의 인식이 '주관적'이라는 점을 강조하는 개념이다."
    }
  },
  {
    "id": "REALITY_CP_015",
    "terminology": "비교 장소 (Comparing Place)",
    "terminology_ko": "비교 장소",
    "terminology_en": "Comparing Place",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "지각된 세계와 좋은 세계를 비교하는 내적 체계로, 두 세계 간의 불일치가 감지되면 행동을 생성하여 일치시키려는 동기가 발생한다.",
    "definition_en": "An internal system that compares the perceived world with the quality world; when discrepancy is detected, it generates motivation to produce behavior to align them.",
    "significance": "인간 행동의 생성 기제를 설명하는 핵심 개념으로, 욕구 좌절 시 행동이 생성되는 과정을 이해하게 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "비교 장소를 선택이론의 행동 생성 기제로 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "지각된 세계",
        "name_en": "Perceived World",
        "id": "REALITY_PW_014"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비교 장소 = 좋은 세계(이상)와 지각된 세계(현실)의 차이를 감지하는 '저울'",
      "differential": "인지부조화 이론의 불일치와 달리, 비교 장소에서의 불일치는 구체적 행동 생성으로 직접 이어진다.",
      "key_point": "불일치 신호가 작을수록 안정적이며, 클수록 더 강력한 행동(때로는 부적응적)을 생성한다.",
      "common_mistake": "비교 장소를 의식적 사고 과정으로 한정하면 안 된다. 대부분 무의식적으로 작동하는 체계이다."
    }
  },
  {
    "id": "REALITY_ID_016",
    "terminology": "정체성 (Identity)",
    "terminology_ko": "정체성",
    "terminology_en": "Identity",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료 초기 이론에서 강조된 개념으로, 성공적 정체성과 실패 정체성으로 구분되며, 기본 욕구 충족 여부에 따라 형성된다.",
    "definition_en": "An early concept in Reality Therapy dividing identity into success identity and failure identity, formed based on whether basic needs are satisfied.",
    "significance": "내담자의 자아개념과 행동 패턴을 이해하는 틀을 제공하며, 현실치료의 궁극적 목표가 성공적 정체성 형성임을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "성공 정체성과 실패 정체성 개념을 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      }
    ],
    "sub_types": [
      {
        "name": "성공 정체성 (Success Identity)",
        "description": "기본 욕구가 충족되어 '나는 할 수 있다'는 자아상"
      },
      {
        "name": "실패 정체성 (Failure Identity)",
        "description": "기본 욕구가 좌절되어 '나는 할 수 없다'는 자아상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정체성 = 성공(+) vs 실패(-) → 욕구 충족 여부에 달려있다",
      "differential": "Erikson의 정체성 개념이 발달단계별 과업인 반면, Glasser의 정체성은 욕구 충족 경험의 누적 결과이다.",
      "key_point": "현실치료의 목표는 내담자가 실패 정체성에서 성공 정체성으로 전환하도록 돕는 것이다.",
      "common_mistake": "정체성이 고정적이라고 오해하면 안 된다. 새로운 선택과 행동을 통해 언제든 변화 가능하다."
    }
  },
  {
    "id": "REALITY_RE_017",
    "terminology": "책임 (Responsibility)",
    "terminology_ko": "책임",
    "terminology_en": "Responsibility",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "타인의 욕구 충족을 방해하지 않으면서 자신의 욕구를 충족시키는 능력으로, 현실치료에서 심리적 건강의 핵심 지표이다.",
    "definition_en": "The ability to fulfill one's own needs without preventing others from fulfilling theirs, a key indicator of psychological health in Reality Therapy.",
    "significance": "현실치료는 정신건강을 '책임 있는 행동'으로 정의하며, 상담의 목표는 내담자가 더 책임감 있는 선택을 하도록 돕는 것이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "책임 개념을 정신건강의 핵심으로 정의함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "책임 = 내 욕구 충족 + 남의 욕구 방해 안 함",
      "differential": "실존주의의 '실존적 책임'이 삶의 의미 창조에 대한 것이라면, Glasser의 '책임'은 욕구 충족 방식에 대한 것이다.",
      "key_point": "Glasser는 정신질환이라는 개념을 거부하고, 무책임한 행동으로 재정의한다.",
      "common_mistake": "책임을 '의무 이행'으로만 해석하면 안 된다. 자신과 타인의 욕구를 동시에 존중하는 균형이 핵심이다."
    }
  },
  {
    "id": "REALITY_NE_018",
    "terminology": "욕구 강도 프로파일 (Need-Strength Profile)",
    "terminology_ko": "욕구 강도 프로파일",
    "terminology_en": "Need-Strength Profile",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "개인마다 5가지 기본 욕구의 상대적 강도가 다르며, 이 욕구 강도의 개인차를 도식화한 것으로 성격의 유전적 기초를 설명한다.",
    "definition_en": "A profile showing that each person has different relative strengths of the five basic needs, explaining the genetic basis of personality.",
    "significance": "욕구 강도의 개인차를 인정함으로써 사람 간 갈등의 원인을 이해하고, 맞춤형 상담 전략을 수립할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "욕구 강도의 개인차 개념을 선택이론에 통합함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "욕구 프로파일 = 5가지 욕구의 '지문'처럼 개인마다 고유하다",
      "differential": "성격 특성 이론이 행동 특성으로 성격을 설명하는 반면, 욕구 강도 프로파일은 욕구의 생물학적 강도로 설명한다.",
      "key_point": "욕구 강도는 유전적으로 결정되며 변하지 않지만, 충족 방법(행동)은 선택 가능하다.",
      "common_mistake": "욕구 강도 프로파일이 변경 가능하다고 오해하면 안 된다. 욕구 강도 자체는 선천적이며 바뀌지 않는다."
    }
  },
  {
    "id": "REALITY_BS_019",
    "terminology": "행동 체계 (Behavioral System)",
    "terminology_ko": "행동 체계",
    "terminology_en": "Behavioral System",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "선택이론에서 인간이 자신의 욕구를 충족시키기 위해 사용하는 행동 레퍼토리 전체를 말하며, 조직화된 행동과 재조직화 행동으로 구분된다.",
    "definition_en": "In Choice Theory, the entire repertoire of behaviors used to satisfy needs, divided into organized behaviors and reorganizing behaviors.",
    "significance": "인간이 욕구 충족을 위해 기존 행동(조직화)을 시도하고, 실패하면 새로운 행동(재조직화)을 창출하는 과정을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "행동 체계 개념을 통해 창의적 행동 생성 과정을 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "재조직화",
        "name_en": "Reorganization",
        "id": "REALITY_RO_020"
      }
    ],
    "sub_types": [
      {
        "name": "조직화된 행동 (Organized Behaviors)",
        "description": "이미 학습되어 저장된 행동 레퍼토리"
      },
      {
        "name": "재조직화 행동 (Reorganizing Behaviors)",
        "description": "기존 행동이 효과적이지 않을 때 새롭게 생성되는 행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "행동 체계 = 행동의 '창고'에서 기존 것을 꺼내거나 새것을 만듦",
      "differential": "행동주의의 행동 레퍼토리가 강화 이력에 의해 결정되는 반면, 행동 체계는 욕구 충족을 위한 능동적 선택의 결과이다.",
      "key_point": "재조직화 과정에서 창의적이지만 때로는 비효과적인 행동(증상)이 생성될 수 있다.",
      "common_mistake": "행동 체계가 고정적이라고 오해하면 안 된다. 새로운 행동은 언제든 창출(재조직화)될 수 있다."
    }
  },
  {
    "id": "REALITY_RO_020",
    "terminology": "재조직화 (Reorganization)",
    "terminology_ko": "재조직화",
    "terminology_en": "Reorganization",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "기존의 조직화된 행동이 욕구를 충족시키지 못할 때, 새로운 행동을 창출하려는 시도로, 긍정적 변화뿐 아니라 증상도 이 과정에서 발생할 수 있다.",
    "definition_en": "An attempt to create new behaviors when existing organized behaviors fail to satisfy needs; both positive changes and symptoms can emerge from this process.",
    "significance": "심리적 증상을 병리가 아닌 욕구 충족을 위한 최선의 시도로 재해석할 수 있게 하며, 보다 효과적인 재조직화를 돕는 것이 상담의 역할이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "재조직화 개념을 통해 증상을 욕구 충족 시도로 이해하는 관점 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동 체계",
        "name_en": "Behavioral System",
        "id": "REALITY_BS_019"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재조직화 = 기존 방법이 안 될 때 '새로운 방법 찾기' (좋든 나쁘든)",
      "differential": "정신분석에서 증상을 무의식적 갈등의 표현으로 보는 반면, 현실치료에서는 욕구 충족을 위한 재조직화 시도로 본다.",
      "key_point": "우울이나 불안도 재조직화의 결과이며, 더 효과적인 행동을 선택하도록 돕는 것이 치료이다.",
      "common_mistake": "재조직화가 항상 긍정적 결과를 낳는다고 오해하면 안 된다. 비효과적인 행동(증상)도 재조직화의 산물이다."
    }
  },
  {
    "id": "REALITY_DC_021",
    "terminology": "우울행동 (Depressing)",
    "terminology_ko": "우울행동",
    "terminology_en": "Depressing",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Glasser는 '우울증'이라는 명사 대신 '우울행동(depressing)'이라는 동사형을 사용하여, 우울이 내담자가 선택한 전행동의 일부임을 강조한다.",
    "definition_en": "Glasser uses the verb form 'depressing' instead of the noun 'depression' to emphasize that depression is part of a total behavior chosen by the client.",
    "significance": "정신질환 진단 대신 행동의 선택으로 재개념화함으로써, 내담자에게 변화의 가능성과 책임감을 부여한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "정신질환 명칭을 동사형으로 변환하여 선택의 관점을 강조함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "재조직화",
        "name_en": "Reorganization",
        "id": "REALITY_RO_020"
      },
      {
        "name_ko": "책임",
        "name_en": "Responsibility",
        "id": "REALITY_RE_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "우울증(명사) → 우울행동(동사) = '나는 우울을 선택하고 있다'",
      "differential": "의학 모델이 우울증을 '앓고 있는 질병'으로 보는 반면, 현실치료는 '선택하고 있는 행동'으로 본다.",
      "key_point": "'나는 우울하다'가 아니라 '나는 우울행동을 선택하고 있다'로 재정의하여 변화 가능성을 열어준다.",
      "common_mistake": "이 관점이 우울을 겪는 사람을 비난하는 것이 아님을 이해해야 한다. 최선의 선택이지만 더 나은 선택이 가능하다는 의미이다."
    }
  },
  {
    "id": "REALITY_AG_022",
    "terminology": "분노행동 (Angering)",
    "terminology_ko": "분노행동",
    "terminology_en": "Angering",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료에서 분노를 명사가 아닌 동사형(angering)으로 표현하여, 분노가 욕구 충족을 위해 선택된 전행동의 한 요소임을 나타낸다.",
    "definition_en": "In Reality Therapy, anger is expressed as a verb form (angering) to indicate that anger is a component of total behavior chosen to satisfy needs.",
    "significance": "분노를 통제 불능의 감정이 아닌 선택된 행동으로 보아, 내담자가 더 효과적인 대안을 선택할 수 있음을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "분노를 포함한 모든 감정을 선택된 전행동으로 재개념화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      },
      {
        "name_ko": "우울행동",
        "name_en": "Depressing",
        "id": "REALITY_DC_021"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "분노행동(angering) = '나는 분노를 선택하고 있다'",
      "differential": "정신분석에서 분노를 억압된 충동의 표현으로 보는 반면, 현실치료에서는 힘의 욕구 충족을 위한 선택된 행동으로 본다.",
      "key_point": "분노행동은 종종 힘(power)의 욕구를 충족시키려는 시도이다.",
      "common_mistake": "분노행동이 의식적 선택만을 의미하는 것이 아니다. 습관적으로 선택되는 행동도 포함된다."
    }
  },
  {
    "id": "REALITY_ER_023",
    "terminology": "상담 환경 조성 (Building the Environment)",
    "terminology_ko": "상담 환경 조성",
    "terminology_en": "Building the Environment",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료에서 WDEP 적용 이전에 따뜻하고 신뢰로운 상담관계를 구축하는 선행 단계로, 내담자와의 관여(involvement)를 형성하는 과정이다.",
    "definition_en": "The preliminary stage in Reality Therapy of building a warm, trusting counseling relationship and establishing involvement before applying WDEP.",
    "significance": "효과적인 WDEP 적용의 전제조건으로, 상담자가 내담자의 좋은 세계에 들어갈 수 있는 관계 기반을 마련한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "상담 환경 조성을 WDEP의 전제조건으로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "돌봄 습관",
        "name_en": "Caring Habits",
        "id": "REALITY_CH_012"
      },
      {
        "name_ko": "라포",
        "name_en": "Rapport",
        "id": "PROCESS_RA_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "환경 조성 = WDEP 전에 반드시 해야 할 '관계 세팅'",
      "differential": "Rogers의 치료적 조건이 그 자체로 치료적인 반면, 현실치료의 환경 조성은 WDEP 적용을 위한 준비 단계이다.",
      "key_point": "내담자가 상담자를 자신의 좋은 세계에 포함시킬 때 비로소 WDEP가 효과적으로 작동한다.",
      "common_mistake": "환경 조성을 일회적 사건으로 보면 안 된다. 상담 전 과정에 걸쳐 지속적으로 유지해야 하는 과정이다."
    }
  },
  {
    "id": "REALITY_IV_024",
    "terminology": "관여 (Involvement)",
    "terminology_ko": "관여",
    "terminology_en": "Involvement",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료 초기 이론에서 강조한 상담관계의 질적 수준으로, 상담자가 내담자에게 진정으로 관심을 기울이며 함께하는 관계를 의미한다.",
    "definition_en": "A quality of the counseling relationship emphasized in early Reality Therapy, meaning the counselor genuinely cares about and is present with the client.",
    "significance": "상담 효과의 기반이 되는 치료적 관계의 질을 결정하며, 내담자의 변화 동기를 촉진하는 핵심 요인이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "관여를 현실치료의 기본 관계 요소로 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담 환경 조성",
        "name_en": "Building the Environment",
        "id": "REALITY_ER_023"
      },
      {
        "name_ko": "사랑과 소속의 욕구",
        "name_en": "Love and Belonging Need",
        "id": "REALITY_LB_010"
      },
      {
        "name_ko": "돌봄 습관",
        "name_en": "Caring Habits",
        "id": "REALITY_CH_012"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관여 = 상담자가 내담자의 삶에 '진심으로 참여'하는 것",
      "differential": "Rogers의 무조건적 긍정적 존중이 수용적 태도라면, Glasser의 관여는 능동적 참여와 관심을 강조한다.",
      "key_point": "상담자가 내담자의 좋은 세계에 포함되려면 진정한 관여가 필수적이다.",
      "common_mistake": "관여를 단순한 친밀감으로 해석하면 안 된다. 전문적 경계 안에서의 진심 어린 돌봄을 의미한다."
    }
  },
  {
    "id": "REALITY_NP_025",
    "terminology": "처벌 금지 원칙 (No Punishment Principle)",
    "terminology_ko": "처벌 금지 원칙",
    "terminology_en": "No Punishment Principle",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료에서 상담자는 내담자의 행동에 대해 처벌이나 비난을 하지 않으며, 자연적 결과를 통해 스스로 배우게 하는 원칙이다.",
    "definition_en": "A principle in Reality Therapy where the counselor does not punish or blame the client's behavior, allowing the client to learn through natural consequences.",
    "significance": "외부 통제를 배제하고 내담자의 자율적 자기평가를 촉진하는 현실치료의 핵심적 상담자 태도이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "처벌이 관계를 파괴하고 행동 변화에 비효과적임을 주장함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      },
      {
        "name_ko": "치명적 습관",
        "name_en": "Deadly Habits",
        "id": "REALITY_DH_011"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      },
      {
        "name_ko": "책임",
        "name_en": "Responsibility",
        "id": "REALITY_RE_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "처벌 금지 = '벌 주지 않고 스스로 깨닫게 한다'",
      "differential": "행동치료에서 처벌이 행동 감소의 도구인 반면, 현실치료는 처벌 자체를 관계 파괴 요인으로 배제한다.",
      "key_point": "처벌 대신 내담자가 자신의 행동 결과를 스스로 경험하고 평가하게 하는 것이 원칙이다.",
      "common_mistake": "처벌 금지가 행동의 결과를 무시하는 것이 아니다. 자연적 결과는 수용하되, 인위적 처벌을 가하지 않는 것이다."
    }
  },
  {
    "id": "REALITY_NE_026",
    "terminology": "변명 불수용 (No Excuses)",
    "terminology_ko": "변명 불수용",
    "terminology_en": "No Excuses",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현실치료에서 내담자의 계획 미이행에 대한 변명을 받아들이지 않되, 비난하지 않고 새로운 계획을 수립하도록 격려하는 원칙이다.",
    "definition_en": "A Reality Therapy principle of not accepting excuses for plan non-compliance, while not blaming the client and encouraging development of a new plan.",
    "significance": "내담자에게 변화에 대한 책임감을 유지하게 하면서도, 실패를 비난하지 않아 자기평가와 재계획을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "변명 불수용을 현실치료의 핵심 원칙으로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      },
      {
        "name_ko": "책임",
        "name_en": "Responsibility",
        "id": "REALITY_RE_017"
      },
      {
        "name_ko": "처벌 금지 원칙",
        "name_en": "No Punishment Principle",
        "id": "REALITY_NP_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변명 불수용 = 변명 X, 비난 X → 새로운 계획 O",
      "differential": "처벌 금지가 상담자의 반응에 관한 것이라면, 변명 불수용은 내담자의 회피 시도에 대한 상담자의 입장이다.",
      "key_point": "계획이 실패하면 비난하지 않고, 왜 안 되었는지 자기평가 후 새로운 계획을 세우도록 돕는다.",
      "common_mistake": "변명 불수용이 내담자에게 냉정하게 대하는 것을 의미하지 않는다. 따뜻하되 단호하게 새 계획으로 전환한다."
    }
  },
  {
    "id": "REALITY_NG_027",
    "terminology": "포기 금지 (Never Give Up)",
    "terminology_ko": "포기 금지",
    "terminology_en": "Never Give Up",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "상담자가 내담자의 변화 가능성을 결코 포기하지 않으며, 내담자가 실패하더라도 지속적으로 새로운 계획을 세우도록 돕는 현실치료의 원칙이다.",
    "definition_en": "A Reality Therapy principle where the counselor never gives up on the client's potential for change, continuously helping develop new plans despite setbacks.",
    "significance": "상담자의 지속적 관여와 인내가 내담자에게 희망을 전달하며, 치료적 관계의 신뢰성을 높인다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "상담자의 인내와 지속적 관여를 핵심 원칙으로 강조함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변명 불수용",
        "name_en": "No Excuses",
        "id": "REALITY_NE_026"
      },
      {
        "name_ko": "관여",
        "name_en": "Involvement",
        "id": "REALITY_IV_024"
      },
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      },
      {
        "name_ko": "상담 환경 조성",
        "name_en": "Building the Environment",
        "id": "REALITY_ER_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "포기 금지 = '안 되면 다시, 또 다시'",
      "differential": "다른 상담 이론에서 저항을 다루는 것과 달리, 현실치료는 저항 개념 자체를 인정하지 않고 포기 금지로 대응한다.",
      "key_point": "내담자가 계획에 실패해도 상담자는 결코 포기하지 않고, 새로운 계획 수립을 반복적으로 돕는다.",
      "common_mistake": "포기 금지가 같은 계획을 고집하는 것이 아니다. 계획은 유연하게 변경하되, 변화에 대한 기대는 포기하지 않는다."
    }
  },
  {
    "id": "REALITY_GS_028",
    "terminology": "글래서 품질학교 (Glasser Quality School)",
    "terminology_ko": "글래서 품질학교",
    "terminology_en": "Glasser Quality School",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Glasser가 선택이론과 현실치료의 원리를 학교 교육에 적용한 모델로, 강압적 교육을 배제하고 학생의 내적 동기를 존중하는 학교 운영 체계이다.",
    "definition_en": "A model applying Choice Theory and Reality Therapy principles to school education, eliminating coercive education and respecting students' intrinsic motivation.",
    "significance": "현실치료의 원리를 교육 현장에 체계적으로 적용한 사례로, 학교상담에서 현실치료의 실천적 활용을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "선택이론에 기반한 품질학교 모델을 개발하고 실천함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "품질학교 = 처벌·보상 없이 내적 동기로 학습하는 학교",
      "differential": "행동주의적 학급관리가 외적 강화를 사용하는 반면, 품질학교는 내적 동기와 관계에 기반한 학습을 추구한다.",
      "key_point": "시험과 등급 대신 자기평가, 강제 대신 선택, 경쟁 대신 협력을 강조한다.",
      "common_mistake": "품질학교가 학업 기준을 낮추는 것이 아니다. 오히려 자기평가를 통해 높은 품질의 학습을 추구한다."
    }
  },
  {
    "id": "REALITY_CT_029",
    "terminology": "통제이론 (Control Theory)",
    "terminology_ko": "통제이론",
    "terminology_en": "Control Theory",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "Glasser가 1996년 이전에 사용한 현실치료의 이론적 기반 명칭으로, William Powers의 지각통제이론에서 영감을 받았으며, 이후 선택이론으로 명칭이 변경되었다.",
    "definition_en": "The former theoretical name for Reality Therapy's foundation used by Glasser before 1996, inspired by William Powers' Perceptual Control Theory, later renamed to Choice Theory.",
    "significance": "현실치료의 이론적 발전 과정을 이해하는 데 중요하며, '통제'라는 용어가 오해를 낳아 '선택'으로 변경된 배경을 알 수 있다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "통제이론을 현실치료에 도입하고 이후 선택이론으로 발전시킴"
      },
      {
        "name_ko": "윌리엄 파워스",
        "name_en": "William Powers",
        "contribution": "지각통제이론(PCT)을 개발하여 Glasser에게 이론적 영감을 제공함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "현실치료",
        "name_en": "Reality Therapy",
        "id": "REALITY_RT_001"
      },
      {
        "name_ko": "지각된 세계",
        "name_en": "Perceived World",
        "id": "REALITY_PW_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통제이론(1985) → 선택이론(1998): '통제'보다 '선택'이 핵심 메시지에 부합",
      "differential": "Powers의 지각통제이론(PCT)은 공학적·과학적 이론인 반면, Glasser의 통제이론/선택이론은 인간관계와 상담에 초점을 맞춘다.",
      "key_point": "1998년 《Choice Theory》 출판을 기점으로 공식적으로 '선택이론'으로 명칭을 변경했다.",
      "common_mistake": "'통제이론'이라는 이름 때문에 외부 통제를 주장하는 이론으로 오해할 수 있으나, 실제로는 자기 통제(선택)를 강조한다."
    }
  },
  {
    "id": "REALITY_WQ_030",
    "terminology": "바람 탐색 (Exploring Wants)",
    "terminology_ko": "바람 탐색",
    "terminology_en": "Exploring Wants",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "WDEP의 W 단계에서 내담자가 진정으로 원하는 것, 좋은 세계의 그림, 기본 욕구 충족 수준을 탐색하는 과정이다.",
    "definition_en": "The process of exploring what the client truly wants, their quality world pictures, and the level of basic need satisfaction in the W stage of WDEP.",
    "significance": "내담자의 행동 방향을 이해하고, 현재 행동이 원하는 것을 얻는 데 효과적인지 평가하기 위한 기초 정보를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 우볼딩",
        "name_en": "Robert Wubbolding",
        "contribution": "바람 탐색의 구체적 질문 기법과 절차를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "WDEP 체계",
        "name_en": "WDEP System",
        "id": "REALITY_WD_003"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "W = Wants = '당신은 무엇을 원합니까?'",
      "differential": "정신분석의 욕구 탐색이 무의식적 욕구에 초점을 맞추는 반면, 바람 탐색은 내담자가 의식적으로 원하는 것을 다룬다.",
      "key_point": "'상담에서 무엇을 원하는가?', '삶에서 무엇을 원하는가?', '관계에서 무엇을 원하는가?' 등 다층적으로 탐색한다.",
      "common_mistake": "바람 탐색이 단순히 '원하는 것 말해보세요'에 그치면 안 된다. 구체적이고 현실적인 바람으로 구체화해야 한다."
    }
  },
  {
    "id": "REALITY_PD_031",
    "terminology": "지각된 세계와 좋은 세계의 불일치 (Perceived World-Quality World Discrepancy)",
    "terminology_ko": "지각된 세계와 좋은 세계의 불일치",
    "terminology_en": "Perceived World-Quality World Discrepancy",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "현재 자신이 경험하는 세계(지각된 세계)와 자신이 원하는 이상적 세계(좋은 세계) 사이의 차이로, 이 불일치가 행동 생성의 동기가 된다.",
    "definition_en": "The gap between what one currently experiences (perceived world) and what one desires (quality world), which serves as the motivation for behavior generation.",
    "significance": "상담에서 내담자의 불일치를 인식하게 하고, 이를 줄이기 위한 보다 효과적인 행동을 선택하도록 돕는 치료적 레버리지이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "두 세계 간 불일치를 행동 동기의 핵심 기제로 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지각된 세계",
        "name_en": "Perceived World",
        "id": "REALITY_PW_014"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      },
      {
        "name_ko": "비교 장소",
        "name_en": "Comparing Place",
        "id": "REALITY_CP_015"
      },
      {
        "name_ko": "전행동",
        "name_en": "Total Behavior",
        "id": "REALITY_TB_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불일치 = 이상(좋은 세계) - 현실(지각된 세계) = 행동의 연료",
      "differential": "인지치료의 인지 왜곡이 사고의 오류를 다루는 반면, 이 불일치는 욕구와 현실 간의 갭을 다룬다.",
      "key_point": "불일치가 전혀 없으면 행동 동기가 없고, 너무 크면 포기하거나 부적응적 행동이 나타날 수 있다.",
      "common_mistake": "불일치를 항상 부정적으로만 보면 안 된다. 적절한 불일치는 성장과 변화의 동력이 된다."
    }
  },
  {
    "id": "REALITY_FN_032",
    "terminology": "자유의 욕구 (Freedom Need)",
    "terminology_ko": "자유의 욕구",
    "terminology_en": "Freedom Need",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "5가지 기본 욕구 중 하나로, 자율성, 독립성, 선택의 자유에 대한 욕구이며, 이 욕구가 강한 사람은 통제나 제약에 저항하는 경향이 있다.",
    "definition_en": "One of the five basic needs involving autonomy, independence, and freedom of choice; people with a strong freedom need tend to resist control and restrictions.",
    "significance": "자유 욕구가 강한 내담자에 대한 상담 전략을 수립하는 데 중요하며, 상담 과정에서 자율성을 보장하는 것이 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "자유를 5가지 기본 욕구의 하나로 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "욕구 강도 프로파일",
        "name_en": "Need-Strength Profile",
        "id": "REALITY_NE_018"
      },
      {
        "name_ko": "선택이론",
        "name_en": "Choice Theory",
        "id": "REALITY_CT_002"
      },
      {
        "name_ko": "외부 통제 심리학",
        "name_en": "External Control Psychology",
        "id": "REALITY_EC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자유 욕구 = '나를 통제하지 마라, 내가 선택하겠다'",
      "differential": "실존주의의 자유가 실존적 선택과 책임의 철학적 개념인 반면, Glasser의 자유 욕구는 선천적 생물학적 욕구이다.",
      "key_point": "자유 욕구가 강한 사람이 사랑/소속 욕구가 강한 사람과 관계할 때 갈등이 발생하기 쉽다.",
      "common_mistake": "자유 욕구가 '규칙을 무시해도 된다'는 의미가 아니다. 책임 있는 자율성을 의미한다."
    }
  },
  {
    "id": "REALITY_PW_033",
    "terminology": "힘의 욕구 (Power Need)",
    "terminology_ko": "힘의 욕구",
    "terminology_en": "Power Need",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "5가지 기본 욕구 중 하나로, 성취, 능력, 인정, 자존감에 대한 욕구이며, 건강하게 충족되면 유능감으로, 좌절되면 공격성으로 나타날 수 있다.",
    "definition_en": "One of the five basic needs involving achievement, competence, recognition, and self-esteem; when healthily met it manifests as competence, when frustrated it can manifest as aggression.",
    "significance": "학교 문제, 비행, 공격적 행동 등을 이해하는 데 핵심적이며, 건강한 힘의 충족 방법을 찾도록 돕는 것이 상담의 과제이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "힘의 욕구를 기본 욕구로 제시하고 교육 현장에서의 충족 방법을 탐색함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "욕구 강도 프로파일",
        "name_en": "Need-Strength Profile",
        "id": "REALITY_NE_018"
      },
      {
        "name_ko": "분노행동",
        "name_en": "Angering",
        "id": "REALITY_AG_022"
      },
      {
        "name_ko": "성공 정체성",
        "name_en": "Success Identity",
        "id": "REALITY_ID_016"
      }
    ],
    "sub_types": [
      {
        "name": "내적 힘 (Inner Power)",
        "description": "자기 효능감, 유능감, 자기통제력"
      },
      {
        "name": "외적 힘 (External Power)",
        "description": "타인에 대한 영향력, 인정, 지위"
      }
    ],
    "quiz_hints": {
      "mnemonic": "힘의 욕구 = 성취 + 인정 + 자존감 (건강하면 유능, 좌절되면 공격)",
      "differential": "Adler의 권력 추구(열등감 보상)와 유사하나, Glasser의 힘 욕구는 보상적이 아닌 선천적 욕구이다.",
      "key_point": "힘의 욕구는 '타인 지배'가 아닌 '자기 유능감'으로 충족하는 것이 건강한 방법이다.",
      "common_mistake": "힘의 욕구를 부정적으로만 보면 안 된다. 성취감, 자존감의 기반이 되는 건강한 욕구이다."
    }
  },
  {
    "id": "REALITY_FU_034",
    "terminology": "즐거움의 욕구 (Fun Need)",
    "terminology_ko": "즐거움의 욕구",
    "terminology_en": "Fun Need",
    "category": "REALITY",
    "category_name": "현실치료 (Reality Therapy)",
    "definition": "5가지 기본 욕구 중 하나로, 놀이, 유머, 학습, 창의적 활동에 대한 욕구이며, Glasser는 즐거움이 학습의 유전적 보상이라고 보았다.",
    "definition_en": "One of the five basic needs involving play, humor, learning, and creative activities; Glasser viewed fun as the genetic reward for learning.",
    "significance": "교육과 상담 장면에서 학습과 변화가 즐거운 경험이 될 수 있도록 하는 것의 중요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 글래서",
        "name_en": "William Glasser",
        "contribution": "즐거움을 기본 욕구의 하나로 제시하고 학습과의 관계를 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기본 욕구",
        "name_en": "Basic Needs",
        "id": "REALITY_BN_004"
      },
      {
        "name_ko": "글래서 품질학교",
        "name_en": "Glasser Quality School",
        "id": "REALITY_GS_028"
      },
      {
        "name_ko": "좋은 세계",
        "name_en": "Quality World",
        "id": "REALITY_QW_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "즐거움 = 학습의 유전적 보상 (재미있어야 배운다)",
      "differential": "쾌락주의의 쾌락 추구와 달리, Glasser의 즐거움은 학습과 성장에 연결된 건강한 욕구이다.",
      "key_point": "즐거움 없는 학습은 효과적이지 않으며, 이것이 품질학교에서 즐거운 학습을 강조하는 이유이다.",
      "common_mistake": "즐거움 욕구를 단순한 오락 추구로 해석하면 안 된다. 학습, 창의성, 발견의 기쁨도 포함된다."
    }
  }
];

TERMS_DATA.CBT = [
  {
    "id": "CBT_CT_001",
    "terminology": "인지행동치료 (Cognitive Behavior Therapy)",
    "terminology_ko": "인지행동치료",
    "terminology_en": "Cognitive Behavior Therapy",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "인지적 왜곡과 역기능적 사고가 정서와 행동 문제를 유발한다고 보고, 인지 재구조화와 행동 기법을 통해 변화를 추구하는 상담 접근이다.",
    "definition_en": "A counseling approach that views cognitive distortions and dysfunctional thinking as causes of emotional and behavioral problems, seeking change through cognitive restructuring and behavioral techniques.",
    "significance": "우울, 불안 등 다양한 심리 문제에 대한 경험적 효과가 가장 많이 검증된 근거기반 상담 접근이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지치료의 창시자로 인지 모델을 개발함"
      },
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "합리적 정서행동치료(REBT)의 창시자"
      },
      {
        "name_ko": "도널드 마이켄바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "인지행동수정과 자기교시훈련 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      },
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "행동주의상담",
        "name_en": "Behavioral Counseling",
        "id": "BEHAV_BT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CBT = 생각(C)을 바꾸면 행동(B)이 바뀌고 치료(T)된다",
      "differential": "정신분석이 무의식적 갈등에 초점을 맞추는 반면, CBT는 현재의 의식적 사고 패턴에 집중한다.",
      "key_point": "구조화된 단기 치료 모델로, 치료 회기 수가 정해져 있고 숙제를 활용한다.",
      "common_mistake": "CBT를 단순히 '긍정적으로 생각하기'로 오해하면 안 된다. 체계적인 인지 재구조화 과정이다."
    }
  },
  {
    "id": "CBT_CM_002",
    "terminology": "인지 모델 (Cognitive Model)",
    "terminology_ko": "인지 모델",
    "terminology_en": "Cognitive Model",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Beck이 제안한 모델로, 상황 자체가 아니라 상황에 대한 해석(자동적 사고)이 감정과 행동을 결정한다는 인지치료의 핵심 원리이다.",
    "definition_en": "Beck's model proposing that it is not the situation itself but one's interpretation (automatic thoughts) of the situation that determines emotions and behaviors.",
    "significance": "상담에서 내담자의 사고를 변화시킴으로써 정서와 행동을 변화시킬 수 있다는 치료적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지 모델을 체계화하고 우울증 치료에 적용함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "중간 신념",
        "name_en": "Intermediate Beliefs",
        "id": "CBT_IB_005"
      },
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "인지적 개념화",
        "name_en": "Cognitive Conceptualization",
        "id": "CBT_CC_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상황 → 자동적 사고 → 감정/행동/신체반응",
      "differential": "Ellis의 ABC 모델이 신념(B)을 강조하는 반면, Beck의 인지 모델은 자동적 사고의 3층 구조를 강조한다.",
      "key_point": "같은 상황에서도 서로 다른 사고를 하면 다른 감정과 행동이 나타난다는 것이 핵심이다.",
      "common_mistake": "인지 모델에서 '사고가 감정을 결정한다'는 것이 감정을 무시하라는 뜻이 아니다."
    }
  },
  {
    "id": "CBT_AT_003",
    "terminology": "자동적 사고 (Automatic Thoughts)",
    "terminology_ko": "자동적 사고",
    "terminology_en": "Automatic Thoughts",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "특정 상황에서 자발적으로 빠르게 떠오르는 사고나 심상으로, 의식의 주변부에 존재하며 감정과 행동에 직접 영향을 미친다.",
    "definition_en": "Thoughts or images that arise spontaneously and quickly in specific situations, existing at the periphery of consciousness and directly influencing emotions and behaviors.",
    "significance": "인지치료에서 가장 먼저 다루는 인지 수준으로, 자동적 사고를 인식하고 평가하는 것이 치료의 출발점이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "자동적 사고 개념을 발견하고 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      },
      {
        "name_ko": "사고 기록지",
        "name_en": "Thought Record",
        "id": "CBT_TR_011"
      },
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자동적 사고 = 머릿속에 '자동으로' 떠오르는 빠른 생각",
      "differential": "핵심 신념이 근본적이고 안정적인 인지인 반면, 자동적 사고는 상황 특정적이고 변동적이다.",
      "key_point": "자동적 사고는 반드시 왜곡된 것은 아니며, 현실적일 수도 있다. 정확성을 검증하는 것이 중요하다.",
      "common_mistake": "자동적 사고를 모두 비합리적이라고 단정하면 안 된다. 타당한 자동적 사고도 존재한다."
    }
  },
  {
    "id": "CBT_CD_004",
    "terminology": "인지적 왜곡 (Cognitive Distortions)",
    "terminology_ko": "인지적 왜곡",
    "terminology_en": "Cognitive Distortions",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "현실을 체계적으로 잘못 해석하는 사고의 오류 패턴으로, 흑백논리, 과일반화, 재앙화, 개인화 등 다양한 유형이 있다.",
    "definition_en": "Systematic errors in thinking that misinterpret reality, including various types such as all-or-nothing thinking, overgeneralization, catastrophizing, and personalization.",
    "significance": "내담자의 부정적 정서를 유발하는 사고 패턴을 구체적으로 식별하고 수정하기 위한 체계적 분류 도구이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지적 왜곡의 주요 유형을 규명함"
      },
      {
        "name_ko": "데이비드 번스",
        "name_en": "David Burns",
        "contribution": "인지적 왜곡의 10가지 유형을 대중적으로 보급함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_019"
      }
    ],
    "sub_types": [
      {
        "name": "흑백논리 (All-or-Nothing Thinking)",
        "description": "극단적 이분법으로 사고함"
      },
      {
        "name": "과일반화 (Overgeneralization)",
        "description": "한 사건을 모든 상황에 일반화함"
      },
      {
        "name": "정신적 여과 (Mental Filtering)",
        "description": "부정적 측면만 선택적으로 주목함"
      },
      {
        "name": "재앙화 (Catastrophizing)",
        "description": "최악의 결과를 예상함"
      },
      {
        "name": "개인화 (Personalization)",
        "description": "외부 사건을 자신의 탓으로 돌림"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지왜곡 = 현실을 보는 '색안경' (다양한 색의 렌즈가 있다)",
      "differential": "Ellis의 비합리적 신념이 당위적 요구에 초점을 맞추는 반면, Beck의 인지왜곡은 정보처리 오류에 초점을 맞춘다.",
      "key_point": "Burns가 정리한 10가지 유형이 가장 널리 알려져 있으며, 시험에서 자주 출제된다.",
      "common_mistake": "인지적 왜곡과 인지적 취약성(핵심 신념)을 혼동하면 안 된다. 왜곡은 사고의 오류 패턴이다."
    }
  },
  {
    "id": "CBT_IB_005",
    "terminology": "중간 신념 (Intermediate Beliefs)",
    "terminology_ko": "중간 신념",
    "terminology_en": "Intermediate Beliefs",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "핵심 신념과 자동적 사고 사이에 위치하는 인지 수준으로, 규칙, 태도, 가정의 형태로 표현되며 자동적 사고를 생성하는 틀이 된다.",
    "definition_en": "A cognitive level between core beliefs and automatic thoughts, expressed as rules, attitudes, and assumptions that serve as frameworks generating automatic thoughts.",
    "significance": "핵심 신념이 구체적 상황에서 어떻게 자동적 사고로 변환되는지를 매개하는 인지 구조를 이해하게 한다.",
    "key_researchers": [
      {
        "name_ko": "주디스 벡",
        "name_en": "Judith S. Beck",
        "contribution": "중간 신념의 3가지 형태(규칙, 태도, 가정)를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "인지적 개념화",
        "name_en": "Cognitive Conceptualization",
        "id": "CBT_CC_007"
      },
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      }
    ],
    "sub_types": [
      {
        "name": "규칙 (Rules)",
        "description": "'~해야 한다' 형태의 당위적 기준"
      },
      {
        "name": "태도 (Attitudes)",
        "description": "'~은 끔찍하다' 형태의 평가적 판단"
      },
      {
        "name": "가정 (Assumptions)",
        "description": "'만약 ~하면, ~할 것이다' 형태의 조건적 신념"
      }
    ],
    "quiz_hints": {
      "mnemonic": "중간 신념 = 핵심 신념의 '번역기' (핵심→중간→자동적 사고)",
      "differential": "핵심 신념이 '나는 무능하다'와 같은 절대적 진술인 반면, 중간 신념은 '완벽하지 않으면 실패다'와 같은 조건적 진술이다.",
      "key_point": "중간 신념은 규칙(~해야), 태도(~은 나쁘다), 가정(만약~하면) 3가지 형태로 나타난다.",
      "common_mistake": "중간 신념을 자동적 사고와 혼동하면 안 된다. 중간 신념은 더 일반적이고 상황 비특정적이다."
    }
  },
  {
    "id": "CBT_CB_006",
    "terminology": "핵심 신념 (Core Beliefs)",
    "terminology_ko": "핵심 신념",
    "terminology_en": "Core Beliefs",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "자신, 타인, 세상에 대한 가장 근본적이고 깊은 수준의 신념으로, 어린 시절 경험을 통해 형성되며 모든 인지 처리의 기저에 있다.",
    "definition_en": "The most fundamental and deep-level beliefs about self, others, and the world, formed through childhood experiences and underlying all cognitive processing.",
    "significance": "인지치료의 궁극적 목표는 역기능적 핵심 신념을 수정하는 것이며, 이를 통해 근본적이고 지속적인 변화를 달성한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "핵심 신념(스키마)의 개념을 인지치료에 도입함"
      },
      {
        "name_ko": "주디스 벡",
        "name_en": "Judith S. Beck",
        "contribution": "핵심 신념의 3가지 범주를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 도식",
        "name_en": "Schema",
        "id": "CBT_SC_008"
      },
      {
        "name_ko": "중간 신념",
        "name_en": "Intermediate Beliefs",
        "id": "CBT_IB_005"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "인지적 개념화",
        "name_en": "Cognitive Conceptualization",
        "id": "CBT_CC_007"
      }
    ],
    "sub_types": [
      {
        "name": "무능감 (Helplessness)",
        "description": "'나는 무능하다/약하다/실패자다'"
      },
      {
        "name": "사랑받지 못함 (Unlovability)",
        "description": "'나는 사랑받을 자격이 없다'"
      },
      {
        "name": "무가치함 (Worthlessness)",
        "description": "'나는 가치가 없다/나쁜 사람이다'"
      }
    ],
    "quiz_hints": {
      "mnemonic": "핵심 신념 3범주: 무능(Helpless)-사랑불능(Unlovable)-무가치(Worthless)",
      "differential": "자동적 사고가 상황 특정적인 반면, 핵심 신념은 상황을 초월하여 일관되게 작용한다.",
      "key_point": "핵심 신념은 자기 확인적이며, 일치하는 정보는 받아들이고 불일치하는 정보는 무시하는 경향이 있다.",
      "common_mistake": "핵심 신념이 쉽게 변할 수 있다고 오해하면 안 된다. 치료 후기에 서서히 다루어야 할 깊은 수준의 인지이다."
    }
  },
  {
    "id": "CBT_CC_007",
    "terminology": "인지적 개념화 (Cognitive Conceptualization)",
    "terminology_ko": "인지적 개념화",
    "terminology_en": "Cognitive Conceptualization",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "내담자의 핵심 신념, 중간 신념, 자동적 사고 간의 관계를 도식화하여 내담자의 인지 구조를 체계적으로 이해하는 과정이다.",
    "definition_en": "The process of systematically understanding the client's cognitive structure by diagramming the relationships among core beliefs, intermediate beliefs, and automatic thoughts.",
    "significance": "사례에 대한 인지적 이해를 통합하여 치료 계획을 수립하고, 개입의 초점을 정하는 인지치료의 핵심 임상 기술이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 벡",
        "name_en": "Judith S. Beck",
        "contribution": "인지적 개념화 다이어그램(CCD)을 개발하고 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "중간 신념",
        "name_en": "Intermediate Beliefs",
        "id": "CBT_IB_005"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지적 개념화 = 내담자의 인지 구조를 보여주는 '설계도'",
      "differential": "정신분석의 사례 공식화가 무의식적 역동에 초점을 맞추는 반면, 인지적 개념화는 인지 구조에 초점을 맞춘다.",
      "key_point": "J. Beck의 인지적 개념화 다이어그램(CCD)은 핵심 신념에서 자동적 사고까지의 하향식 도식이다.",
      "common_mistake": "인지적 개념화를 일회적으로 완성하는 것으로 오해하면 안 된다. 치료 과정에서 지속적으로 수정된다."
    }
  },
  {
    "id": "CBT_SC_008",
    "terminology": "인지 도식 (Schema)",
    "terminology_ko": "인지 도식",
    "terminology_en": "Schema",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "과거 경험을 통해 형성된 인지적 구조로, 새로운 정보를 해석하고 조직하는 틀 역할을 하며, 핵심 신념과 밀접하게 관련된다.",
    "definition_en": "Cognitive structures formed through past experiences that serve as frameworks for interpreting and organizing new information, closely related to core beliefs.",
    "significance": "정보 처리의 편향을 설명하며, 부적응적 도식의 수정이 인지치료의 근본적 목표가 된다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지 도식 개념을 인지치료에 도입함"
      },
      {
        "name_ko": "제프리 영",
        "name_en": "Jeffrey Young",
        "contribution": "초기 부적응 도식 개념을 발전시켜 심리도식치료를 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      },
      {
        "name_ko": "인지적 개념화",
        "name_en": "Cognitive Conceptualization",
        "id": "CBT_CC_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도식 = 경험의 '틀' (모든 정보를 이 틀로 걸러서 본다)",
      "differential": "Piaget의 도식이 인지 발달의 구조인 반면, Beck의 도식은 심리병리를 유발하는 인지적 취약성이다.",
      "key_point": "Beck은 도식(schema)과 핵심 신념(core belief)을 거의 동의어로 사용하지만, Young은 도식을 더 넓은 개념으로 확장했다.",
      "common_mistake": "도식을 의식적으로 접근 가능한 것으로 오해하면 안 된다. 대부분 비의식적으로 작동한다."
    }
  },
  {
    "id": "CBT_CT_009",
    "terminology": "인지삼제 (Cognitive Triad)",
    "terminology_ko": "인지삼제",
    "terminology_en": "Cognitive Triad",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Beck의 우울증 인지 모델에서 자기, 세상, 미래에 대한 부정적 관점이 동시에 나타나는 3가지 인지 패턴이다.",
    "definition_en": "In Beck's cognitive model of depression, three cognitive patterns involving simultaneous negative views of self, the world, and the future.",
    "significance": "우울증의 인지적 핵심을 체계적으로 설명하며, 치료에서 각 요소를 구분하여 다룰 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "우울증의 인지삼제를 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      },
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      }
    ],
    "sub_types": [
      {
        "name": "자기에 대한 부정적 관점",
        "description": "'나는 무능하고 부족하다'"
      },
      {
        "name": "세상에 대한 부정적 관점",
        "description": "'세상은 불공평하고 적대적이다'"
      },
      {
        "name": "미래에 대한 부정적 관점",
        "description": "'미래는 절망적이다'"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지삼제 = 나(자기)-세상-미래 모두 부정적 = 우울의 3종 세트",
      "differential": "학습된 무기력이 통제 불가능성에 초점을 맞추는 반면, 인지삼제는 3영역의 동시적 부정적 해석에 초점을 맞춘다.",
      "key_point": "우울증 환자는 자기, 세상, 미래 모두에 대해 부정적이며, 이것이 우울증의 인지적 핵심이다.",
      "common_mistake": "인지삼제가 우울증에만 적용된다고 오해할 수 있으나, Beck은 이후 불안 등 다른 장애에도 인지 모델을 확장했다."
    }
  },
  {
    "id": "CBT_CR_010",
    "terminology": "인지 재구조화 (Cognitive Restructuring)",
    "terminology_ko": "인지 재구조화",
    "terminology_en": "Cognitive Restructuring",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "역기능적 사고를 인식하고, 증거를 검토하며, 보다 균형 잡히고 적응적인 사고로 대체하는 인지치료의 핵심 기법이다.",
    "definition_en": "A core CBT technique of identifying dysfunctional thoughts, examining evidence, and replacing them with more balanced and adaptive thoughts.",
    "significance": "인지치료의 가장 대표적인 치료 기법으로, 사고 변화를 통해 정서적 고통을 감소시키는 직접적 개입이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지 재구조화 기법의 기초를 마련함"
      },
      {
        "name_ko": "주디스 벡",
        "name_en": "Judith S. Beck",
        "contribution": "인지 재구조화의 구체적 절차를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      },
      {
        "name_ko": "사고 기록지",
        "name_en": "Thought Record",
        "id": "CBT_TR_011"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지 재구조화 = 생각의 '리모델링' (부정적 → 균형적)",
      "differential": "REBT의 논박이 비합리적 신념을 직접 도전하는 반면, Beck의 인지 재구조화는 증거 검토를 통해 부드럽게 수정한다.",
      "key_point": "부정적 사고를 긍정적 사고로 바꾸는 것이 아니라, 증거에 기반한 균형 잡힌 사고로 변환하는 것이다.",
      "common_mistake": "인지 재구조화를 단순한 '긍정적 사고'로 오해하면 안 된다. 증거 기반의 현실적 사고 변화이다."
    }
  },
  {
    "id": "CBT_TR_011",
    "terminology": "사고 기록지 (Thought Record)",
    "terminology_ko": "사고 기록지",
    "terminology_en": "Thought Record",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "상황, 자동적 사고, 감정, 증거, 대안적 사고 등을 체계적으로 기록하여 인지 재구조화를 실천하는 구조화된 기록 양식이다.",
    "definition_en": "A structured recording form for systematically documenting situations, automatic thoughts, emotions, evidence, and alternative thoughts to practice cognitive restructuring.",
    "significance": "인지 재구조화를 실생활에서 체계적으로 연습할 수 있는 핵심 도구이며, CBT 숙제의 대표적 형태이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "역기능적 사고 기록지(DTR)의 원형을 개발함"
      },
      {
        "name_ko": "크리스틴 파데스키",
        "name_en": "Christine Padesky",
        "contribution": "사고 기록지를 7열 형태로 발전시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "숙제",
        "name_en": "Homework",
        "id": "CBT_HW_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사고 기록지 = 상황→생각→감정→증거→대안 = '생각 일기'",
      "differential": "일반 일기가 자유로운 서술인 반면, 사고 기록지는 구조화된 인지 분석 도구이다.",
      "key_point": "'지지 증거'와 '반박 증거'를 모두 기록하여 균형 잡힌 대안적 사고를 도출하는 것이 핵심이다.",
      "common_mistake": "사고 기록지를 단순히 부정적 생각을 나열하는 도구로 사용하면 안 된다. 증거 검토와 대안 도출까지 완료해야 한다."
    }
  },
  {
    "id": "CBT_SQ_012",
    "terminology": "소크라테스식 질문 (Socratic Questioning)",
    "terminology_ko": "소크라테스식 질문",
    "terminology_en": "Socratic Questioning",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "내담자가 자신의 사고를 스스로 검토하고 재평가하도록 안내하는 질문 기법으로, 직접적인 반박 대신 발견의 과정을 촉진한다.",
    "definition_en": "A questioning technique guiding clients to examine and re-evaluate their own thinking, promoting a process of discovery rather than direct confrontation.",
    "significance": "내담자의 자율적 사고 검토를 촉진하여 인지 변화의 내적 동기를 높이는 인지치료의 핵심 치료적 소통 방식이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "소크라테스식 질문법을 인지치료의 핵심 기법으로 도입함"
      },
      {
        "name_ko": "크리스틴 파데스키",
        "name_en": "Christine Padesky",
        "contribution": "안내된 발견(guided discovery)으로서의 소크라테스식 질문을 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "안내된 발견",
        "name_en": "Guided Discovery",
        "id": "CBT_GD_013"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "자기평가",
        "name_en": "Self-Evaluation",
        "id": "REALITY_SE_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소크라테스 = '너 자신을 알라' → 질문으로 스스로 깨닫게 하기",
      "differential": "REBT의 논박이 적극적·직접적으로 신념에 도전하는 반면, 소크라테스식 질문은 간접적·탐구적으로 사고를 검토하게 한다.",
      "key_point": "'그 생각의 증거는?', '다른 가능한 해석은?', '최악/최선/가장 현실적 결과는?' 등의 질문을 사용한다.",
      "common_mistake": "소크라테스식 질문을 단순한 질문 나열로 오해하면 안 된다. 내담자의 반응에 따라 유연하게 이어지는 대화 과정이다."
    }
  },
  {
    "id": "CBT_GD_013",
    "terminology": "안내된 발견 (Guided Discovery)",
    "terminology_ko": "안내된 발견",
    "terminology_en": "Guided Discovery",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "소크라테스식 질문을 통해 내담자가 스스로 자신의 사고 패턴을 발견하고 새로운 관점에 도달하도록 안내하는 인지치료의 협력적 과정이다.",
    "definition_en": "A collaborative CBT process of guiding clients through Socratic questioning to discover their own thinking patterns and arrive at new perspectives.",
    "significance": "상담자가 답을 제공하는 것이 아니라 내담자가 스스로 발견하게 하여, 인지 변화의 지속성과 자기효능감을 높인다.",
    "key_researchers": [
      {
        "name_ko": "크리스틴 파데스키",
        "name_en": "Christine Padesky",
        "contribution": "안내된 발견을 인지치료의 핵심 치료적 태도로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      },
      {
        "name_ko": "협력적 경험주의",
        "name_en": "Collaborative Empiricism",
        "id": "CBT_CE_014"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안내된 발견 = 상담자는 '가이드', 내담자가 '탐험가'",
      "differential": "REBT의 논박이 상담자 주도적인 반면, 안내된 발견은 내담자 주도의 탐색 과정이다.",
      "key_point": "상담자가 이미 답을 알고 있더라도, 내담자가 스스로 발견하도록 질문으로 안내하는 것이 핵심이다.",
      "common_mistake": "안내된 발견이 내담자를 특정 결론으로 유도하는 것이 아니라, 열린 탐색을 촉진하는 것이다."
    }
  },
  {
    "id": "CBT_CE_014",
    "terminology": "협력적 경험주의 (Collaborative Empiricism)",
    "terminology_ko": "협력적 경험주의",
    "terminology_en": "Collaborative Empiricism",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "상담자와 내담자가 팀을 이루어 내담자의 사고를 가설로 설정하고, 증거를 함께 검토하여 사고의 타당성을 검증하는 인지치료의 치료적 관계 모델이다.",
    "definition_en": "A CBT therapeutic relationship model where counselor and client work as a team, treating the client's thoughts as hypotheses and jointly examining evidence to test their validity.",
    "significance": "상담자와 내담자의 수평적 협력 관계를 강조하며, 경험적 증거 기반의 사고 검증을 통해 인지 변화를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "협력적 경험주의를 인지치료의 기본 치료 태도로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "안내된 발견",
        "name_en": "Guided Discovery",
        "id": "CBT_GD_013"
      },
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      },
      {
        "name_ko": "행동 실험",
        "name_en": "Behavioral Experiments",
        "id": "CBT_BE_016"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "협력적 경험주의 = 상담자+내담자가 '과학자 팀'이 되어 생각을 검증",
      "differential": "Rogers의 치료적 관계가 무조건적 수용을 강조하는 반면, 협력적 경험주의는 증거 기반의 공동 탐구를 강조한다.",
      "key_point": "내담자의 사고를 '사실'이 아닌 '검증 가능한 가설'로 다루는 것이 핵심 원칙이다.",
      "common_mistake": "협력적 경험주의가 상담자가 내담자에게 동의하는 것을 의미하지 않는다. 증거를 함께 검토하는 과정이다."
    }
  },
  {
    "id": "CBT_HW_015",
    "terminology": "숙제 (Homework)",
    "terminology_ko": "숙제",
    "terminology_en": "Homework",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "상담 회기 사이에 내담자가 실생활에서 수행하는 과제로, 사고 기록, 행동 실험, 활동 계획 등을 포함하며 치료 효과를 극대화한다.",
    "definition_en": "Assignments performed by clients between sessions in real life, including thought records, behavioral experiments, and activity planning, maximizing therapeutic effectiveness.",
    "significance": "상담실에서의 학습을 실생활로 일반화하고, 치료적 변화를 가속화하는 CBT의 핵심 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "숙제를 인지치료의 필수 요소로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사고 기록지",
        "name_en": "Thought Record",
        "id": "CBT_TR_011"
      },
      {
        "name_ko": "행동 실험",
        "name_en": "Behavioral Experiments",
        "id": "CBT_BE_016"
      },
      {
        "name_ko": "활동 계획",
        "name_en": "Activity Scheduling",
        "id": "CBT_AS_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CBT 숙제 = 상담실 밖에서의 '실전 연습'",
      "differential": "다른 상담 접근의 숙제가 선택적인 반면, CBT에서 숙제는 치료의 필수적 부분이다.",
      "key_point": "숙제는 상담자가 일방적으로 부여하는 것이 아니라 내담자와 협력하여 설계하는 것이 원칙이다.",
      "common_mistake": "숙제를 수행하지 않는 것을 '저항'으로만 해석하면 안 된다. 과제의 적절성과 내담자의 준비도를 검토해야 한다."
    }
  },
  {
    "id": "CBT_BE_016",
    "terminology": "행동 실험 (Behavioral Experiments)",
    "terminology_ko": "행동 실험",
    "terminology_en": "Behavioral Experiments",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "내담자의 역기능적 신념을 검증하기 위해 설계된 실제 행동 과제로, 신념의 예측과 실제 결과를 비교하여 인지 변화를 촉진한다.",
    "definition_en": "Real-life behavioral tasks designed to test dysfunctional beliefs, promoting cognitive change by comparing belief predictions with actual outcomes.",
    "significance": "말로만 하는 인지 작업의 한계를 보완하여, 경험적 증거를 통한 강력한 인지 변화를 이끌어낸다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "행동 실험을 인지치료의 핵심 기법으로 도입함"
      },
      {
        "name_ko": "앤 허클리",
        "name_en": "Ann Hackmann",
        "contribution": "행동 실험의 설계와 실행 절차를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "협력적 경험주의",
        "name_en": "Collaborative Empiricism",
        "id": "CBT_CE_014"
      },
      {
        "name_ko": "숙제",
        "name_en": "Homework",
        "id": "CBT_HW_015"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "BEHAV_SD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 실험 = 생각을 '실험'으로 검증 (예측 vs 실제 결과 비교)",
      "differential": "노출 치료가 불안 감소를 목표로 하는 반면, 행동 실험은 신념의 검증을 목표로 한다.",
      "key_point": "실험 전 예측을 명확히 하고, 실험 후 결과와 비교하여 신념을 수정하는 과정이 핵심이다.",
      "common_mistake": "행동 실험의 목적이 '성공 경험'이 아닌 '신념 검증'임을 기억해야 한다. 예측이 맞더라도 유용한 학습이 된다."
    }
  },
  {
    "id": "CBT_AS_017",
    "terminology": "활동 계획 (Activity Scheduling)",
    "terminology_ko": "활동 계획",
    "terminology_en": "Activity Scheduling",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "우울증 치료에서 내담자가 즐거움과 성취감을 주는 활동을 체계적으로 계획하고 실행하도록 돕는 행동 활성화 기법이다.",
    "definition_en": "A behavioral activation technique in depression treatment that helps clients systematically plan and execute activities providing pleasure and mastery.",
    "significance": "우울증의 무기력과 회피를 극복하고, 행동 변화를 통해 인지와 정서의 변화를 촉진하는 초기 개입 전략이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "활동 계획을 우울증 인지치료의 초기 기법으로 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "숙제",
        "name_en": "Homework",
        "id": "CBT_HW_015"
      },
      {
        "name_ko": "행동 활성화",
        "name_en": "Behavioral Activation",
        "id": "CBT_BA_035"
      },
      {
        "name_ko": "인지삼제",
        "name_en": "Cognitive Triad",
        "id": "CBT_CT_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "활동 계획 = 즐거움(P) + 성취감(M)을 주는 활동을 '시간표'에 넣기",
      "differential": "현실치료의 행동 계획이 욕구 충족에 초점을 맞추는 반면, 활동 계획은 즐거움과 성취감 회복에 초점을 맞춘다.",
      "key_point": "각 활동에 대해 즐거움(Pleasure)과 숙달감(Mastery)을 0~10점으로 평정하는 것이 특징이다.",
      "common_mistake": "활동 계획이 단순히 '바쁘게 지내기'가 아니라, 전략적으로 보상적 활동을 배치하는 것임을 이해해야 한다."
    }
  },
  {
    "id": "CBT_RE_018",
    "terminology": "합리적 정서행동치료 (Rational Emotive Behavior Therapy, REBT)",
    "terminology_ko": "합리적 정서행동치료",
    "terminology_en": "Rational Emotive Behavior Therapy",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Albert Ellis가 개발한 상담 접근으로, 비합리적 신념이 정서적 장애의 원인이며 이를 논박하여 합리적 신념으로 대체하는 것을 목표로 한다.",
    "definition_en": "A counseling approach developed by Albert Ellis positing that irrational beliefs cause emotional disturbance, aiming to dispute them and replace with rational beliefs.",
    "significance": "인지행동치료의 선구적 접근으로, ABC 모델과 논박 기법을 통해 인지 변화의 치료적 가치를 최초로 체계화했다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "REBT(초기명 RET)를 창시하고 ABC 모델을 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ABC 모델",
        "name_en": "ABC Model",
        "id": "CBT_ABC_019"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "REBT = Ellis = ABC + 논박(D) = 비합리적 신념 깨부수기",
      "differential": "Beck의 인지치료가 소크라테스식 질문으로 부드럽게 접근하는 반면, REBT는 비합리적 신념을 적극적으로 논박한다.",
      "key_point": "초기 명칭은 합리적 치료(RT, 1955), 이후 합리적 정서치료(RET), 최종적으로 REBT(1993)로 변경되었다.",
      "common_mistake": "REBT가 감정을 무시한다고 오해하면 안 된다. 건강한 부정적 감정과 불건강한 부정적 감정을 구별한다."
    }
  },
  {
    "id": "CBT_ABC_019",
    "terminology": "ABC 모델 (ABC Model)",
    "terminology_ko": "ABC 모델",
    "terminology_en": "ABC Model",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis의 REBT 핵심 이론으로, 선행사건(A)이 아닌 신념(B)이 결과(C: 정서/행동)를 결정한다는 모델이며, 논박(D)과 효과(E)로 확장된다.",
    "definition_en": "Ellis's core REBT theory stating that beliefs (B), not activating events (A), determine consequences (C: emotions/behaviors), extended by disputing (D) and effects (E).",
    "significance": "사건과 감정 사이에 신념이 매개한다는 인지적 관점의 기본 틀을 제공하며, REBT 상담의 전 과정을 구조화한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "ABC(DE) 모델을 개발하여 REBT의 이론적 기반을 마련함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "인지 모델",
        "name_en": "Cognitive Model",
        "id": "CBT_CM_002"
      }
    ],
    "sub_types": [
      {
        "name": "A (Activating Event)",
        "description": "촉발 사건 또는 선행 사건"
      },
      {
        "name": "B (Belief)",
        "description": "사건에 대한 신념 체계 (합리적/비합리적)"
      },
      {
        "name": "C (Consequence)",
        "description": "정서적·행동적 결과"
      },
      {
        "name": "D (Disputing)",
        "description": "비합리적 신념에 대한 논박"
      },
      {
        "name": "E (Effect)",
        "description": "논박 후 새로운 효과적 철학/정서"
      }
    ],
    "quiz_hints": {
      "mnemonic": "A(사건) → B(신념) → C(결과) → D(논박) → E(효과): 'A가 C를 만든다고? 아니, B가 만든다!'",
      "differential": "Beck의 인지 모델(상황→자동적 사고→감정)과 유사하나, ABC 모델은 신념의 합리성/비합리성을 더 강조한다.",
      "key_point": "핵심 메시지는 'A가 C를 유발하는 것이 아니라, B가 C를 유발한다'는 것이다.",
      "common_mistake": "A→C의 직접적 인과를 가정하는 것이 일상적 오류이며, REBT는 B의 매개 역할을 강조한다."
    }
  },
  {
    "id": "CBT_IB_020",
    "terminology": "비합리적 신념 (Irrational Beliefs)",
    "terminology_ko": "비합리적 신념",
    "terminology_en": "Irrational Beliefs",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis가 규명한 정서적 혼란을 유발하는 비논리적이고 현실과 일치하지 않는 신념으로, 당위적 요구(musturbation)가 핵심 특징이다.",
    "definition_en": "Illogical beliefs inconsistent with reality identified by Ellis that cause emotional disturbance, characterized by absolute demands (musturbation).",
    "significance": "정서적 문제의 인지적 근원을 구체적으로 식별하고, 논박의 표적을 명확히 하는 REBT의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "비합리적 신념의 주요 유형과 특성을 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ABC 모델",
        "name_en": "ABC Model",
        "id": "CBT_ABC_019"
      },
      {
        "name_ko": "당위적 사고",
        "name_en": "Musturbation",
        "id": "CBT_MU_021"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "합리적 신념",
        "name_en": "Rational Beliefs",
        "id": "CBT_RB_023"
      }
    ],
    "sub_types": [
      {
        "name": "자기에 대한 당위",
        "description": "'나는 반드시 ~해야 한다' (자기비하로 이어짐)"
      },
      {
        "name": "타인에 대한 당위",
        "description": "'타인은 반드시 ~해야 한다' (분노로 이어짐)"
      },
      {
        "name": "세상에 대한 당위",
        "description": "'세상은 반드시 ~해야 한다' (좌절 인내력 저하로 이어짐)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비합리적 신념의 3가지 당위: 나-해야(자기비하), 너-해야(분노), 세상-해야(좌절)",
      "differential": "Beck의 인지왜곡이 정보처리 오류인 반면, Ellis의 비합리적 신념은 절대적 당위적 요구이다.",
      "key_point": "Ellis는 모든 비합리적 신념의 핵심에 '당위적 요구(must)'가 있다고 보았다.",
      "common_mistake": "비합리적 신념을 단순히 '부정적 생각'으로 보면 안 된다. 핵심은 '~해야 한다'는 절대적 요구이다."
    }
  },
  {
    "id": "CBT_MU_021",
    "terminology": "당위적 사고 (Musturbation)",
    "terminology_ko": "당위적 사고",
    "terminology_en": "Musturbation",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis가 명명한 비합리적 신념의 핵심 형태로, '~해야 한다(must)'는 절대적이고 경직된 요구를 자기, 타인, 세상에 부과하는 사고 패턴이다.",
    "definition_en": "The core form of irrational beliefs named by Ellis, a thinking pattern of imposing absolute, rigid demands ('must') on self, others, and the world.",
    "significance": "모든 비합리적 신념의 근본 형태로, 이 당위적 요구를 선호적 바람으로 전환하는 것이 REBT의 핵심 치료 목표이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "당위적 사고(musturbation)를 정서장애의 핵심 원인으로 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "합리적 신념",
        "name_en": "Rational Beliefs",
        "id": "CBT_RB_023"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "좌절 인내력 저하",
        "name_en": "Low Frustration Tolerance",
        "id": "CBT_LF_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Musturbation = must + 자위(masturbation)의 언어유희 = 'must'로 자기를 괴롭히기",
      "differential": "Beck의 '~해야 한다'(should statement)가 인지왜곡의 하나인 반면, Ellis의 musturbation은 모든 비합리적 신념의 근본이다.",
      "key_point": "must를 preference(선호)로 바꾸는 것: '반드시 ~해야 한다' → '~하면 좋겠지만, 반드시 그럴 필요는 없다'",
      "common_mistake": "당위적 사고가 모든 '해야' 표현을 포함하는 것이 아니다. 절대적·경직된 요구만 해당된다."
    }
  },
  {
    "id": "CBT_DI_022",
    "terminology": "논박 (Disputing)",
    "terminology_ko": "논박",
    "terminology_en": "Disputing",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "REBT의 핵심 기법으로, 내담자의 비합리적 신념에 적극적으로 도전하고 질문하여 논리적·경험적·실용적 근거를 검토하는 과정이다.",
    "definition_en": "A core REBT technique of actively challenging and questioning clients' irrational beliefs by examining logical, empirical, and pragmatic evidence.",
    "significance": "비합리적 신념을 합리적 신념으로 전환하는 REBT의 가장 핵심적인 치료 기법이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "논박 기법을 REBT의 핵심 개입으로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "ABC 모델",
        "name_en": "ABC Model",
        "id": "CBT_ABC_019"
      },
      {
        "name_ko": "합리적 신념",
        "name_en": "Rational Beliefs",
        "id": "CBT_RB_023"
      },
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      }
    ],
    "sub_types": [
      {
        "name": "논리적 논박 (Logical Disputing)",
        "description": "'그 생각이 논리적인가?' 논리적 모순 지적"
      },
      {
        "name": "경험적 논박 (Empirical Disputing)",
        "description": "'그 증거가 있는가?' 경험적 근거 검토"
      },
      {
        "name": "실용적 논박 (Pragmatic Disputing)",
        "description": "'그렇게 생각하면 도움이 되는가?' 실용적 결과 평가"
      }
    ],
    "quiz_hints": {
      "mnemonic": "논박 3가지: 논리적(말이 되나?), 경험적(증거가 있나?), 실용적(도움이 되나?)",
      "differential": "Beck의 소크라테스식 질문이 부드러운 탐색인 반면, Ellis의 논박은 적극적이고 직접적인 도전이다.",
      "key_point": "D(Disputing)는 ABC 모델의 네 번째 단계로, 비합리적 신념을 직접 도전하는 치료적 개입이다.",
      "common_mistake": "논박이 내담자를 공격하는 것이 아니라, 비합리적 '신념'을 도전하는 것임을 구분해야 한다."
    }
  },
  {
    "id": "CBT_RB_023",
    "terminology": "합리적 신념 (Rational Beliefs)",
    "terminology_ko": "합리적 신념",
    "terminology_en": "Rational Beliefs",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "현실에 기반하고, 논리적이며, 목표 달성에 도움이 되는 유연한 신념으로, 선호와 바람의 형태로 표현된다.",
    "definition_en": "Flexible beliefs that are reality-based, logical, and helpful for goal attainment, expressed as preferences and wishes rather than absolute demands.",
    "significance": "비합리적 신념의 대안으로, REBT의 치료 목표는 비합리적 신념을 합리적 신념으로 대체하는 것이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "합리적 신념의 특성과 기준을 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "ABC 모델",
        "name_en": "ABC Model",
        "id": "CBT_ABC_019"
      },
      {
        "name_ko": "효과적 새 철학",
        "name_en": "Effective New Philosophy",
        "id": "CBT_EN_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "합리적 신념 = '~하면 좋겠다(prefer)' (vs 비합리적 = '반드시 ~해야 한다(must)')",
      "differential": "합리적 신념은 부정적 감정이 없는 것이 아니라, 건강한 부정적 감정(슬픔, 걱정 등)을 느끼게 한다.",
      "key_point": "합리적 신념의 핵심은 유연성(flexibility)이며, 현실을 있는 그대로 수용하면서 선호를 표현한다.",
      "common_mistake": "합리적 신념이 '아무것도 신경 쓰지 않는 것'을 의미하지 않는다. 강한 바람을 갖되 절대적 요구를 하지 않는 것이다."
    }
  },
  {
    "id": "CBT_LF_024",
    "terminology": "낮은 좌절 인내력 (Low Frustration Tolerance)",
    "terminology_ko": "낮은 좌절 인내력",
    "terminology_en": "Low Frustration Tolerance",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "불편하거나 힘든 상황을 견딜 수 없다고 믿는 비합리적 신념으로, '이것을 참을 수 없다(I can't stand it)'는 사고로 나타난다.",
    "definition_en": "An irrational belief that one cannot bear uncomfortable or difficult situations, manifested in thinking 'I can't stand it.'",
    "significance": "회피 행동, 미루기, 중독 등 다양한 행동 문제의 인지적 기반으로, REBT에서 중요하게 다루는 비합리적 신념 유형이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "낮은 좌절 인내력을 비합리적 신념의 주요 파생물로 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "당위적 사고",
        "name_en": "Musturbation",
        "id": "CBT_MU_021"
      },
      {
        "name_ko": "재앙화",
        "name_en": "Catastrophizing/Awfulizing",
        "id": "CBT_AW_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "LFT = 'I can't stand it!' = '못 참겠어!'",
      "differential": "재앙화가 '끔찍하다'는 사건 평가인 반면, 낮은 좌절 인내력은 '참을 수 없다'는 자기 능력 평가이다.",
      "key_point": "치료적 대안은 '불편하지만 참을 수 있다(I don't like it, but I can stand it)'는 높은 좌절 인내력(HFT)이다.",
      "common_mistake": "낮은 좌절 인내력이 실제 능력 부족이 아니라 '참을 수 없다'는 믿음의 문제임을 이해해야 한다."
    }
  },
  {
    "id": "CBT_EN_025",
    "terminology": "효과적 새 철학 (Effective New Philosophy)",
    "terminology_ko": "효과적 새 철학",
    "terminology_en": "Effective New Philosophy",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "ABCDE 모델의 E 단계로, 논박을 통해 비합리적 신념이 합리적 신념으로 대체된 후 형성되는 새로운 인지적·정서적·행동적 효과이다.",
    "definition_en": "The E stage of the ABCDE model, representing new cognitive, emotional, and behavioral effects formed after irrational beliefs are replaced with rational beliefs through disputing.",
    "significance": "REBT의 궁극적 치료 결과를 나타내며, 건강한 부정적 감정과 적응적 행동의 출현을 포함한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "ABCDE 모델의 E(효과) 단계를 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ABC 모델",
        "name_en": "ABC Model",
        "id": "CBT_ABC_019"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "합리적 신념",
        "name_en": "Rational Beliefs",
        "id": "CBT_RB_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "E = Effect = 논박(D) 후의 '새로운 효과' (건강한 감정 + 적응적 행동)",
      "differential": "Beck의 대안적 사고가 특정 상황에 대한 것인 반면, REBT의 새 철학은 삶 전반에 대한 관점 전환이다.",
      "key_point": "E의 결과로 불건강한 부정적 감정(불안)이 건강한 부정적 감정(걱정)으로 전환된다.",
      "common_mistake": "효과적 새 철학이 '긍정적 감정만 느끼기'가 아니라 '건강한 부정적 감정을 느끼기'임을 이해해야 한다."
    }
  },
  {
    "id": "CBT_AW_026",
    "terminology": "파국화/끔찍화 (Awfulizing/Catastrophizing)",
    "terminology_ko": "파국화",
    "terminology_en": "Awfulizing",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis의 REBT에서 부정적 사건을 '끔찍하다, 최악이다'로 극단적으로 평가하는 비합리적 신념의 파생물이다.",
    "definition_en": "In Ellis's REBT, a derivative of irrational beliefs involving extreme evaluation of negative events as 'awful' or 'the worst possible thing.'",
    "significance": "당위적 사고에서 파생되는 핵심 비합리적 신념 유형으로, 불안과 공포의 인지적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "파국화를 비합리적 신념의 주요 파생물로 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "당위적 사고",
        "name_en": "Musturbation",
        "id": "CBT_MU_021"
      },
      {
        "name_ko": "낮은 좌절 인내력",
        "name_en": "Low Frustration Tolerance",
        "id": "CBT_LF_024"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "파국화 = '이건 끔찍해! 세상이 끝났어!' (100% 나쁜 것은 없다)",
      "differential": "Beck의 재앙화(catastrophizing)와 유사하나, Ellis의 awfulizing은 사건을 '100% 이상 나쁜 것'으로 평가하는 것을 뜻한다.",
      "key_point": "치료적 대안: '나쁜 일이지만 끔찍한 것은 아니다. 불편하지만 세상의 끝은 아니다.'",
      "common_mistake": "파국화와 현실적 위험 평가를 구분해야 한다. 실제 위험이 큰 상황에서의 걱정은 파국화가 아니다."
    }
  },
  {
    "id": "CBT_UA_027",
    "terminology": "무조건적 자기수용 (Unconditional Self-Acceptance, USA)",
    "terminology_ko": "무조건적 자기수용",
    "terminology_en": "Unconditional Self-Acceptance",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis가 강조한 REBT의 핵심 철학으로, 행동의 좋고 나쁨은 평가하되 인간의 전체적 가치를 평가하지 않고 자신을 있는 그대로 수용하는 것이다.",
    "definition_en": "A core REBT philosophy emphasized by Ellis, accepting oneself as-is without rating one's total worth, while evaluating behaviors as good or bad.",
    "significance": "자기비하의 근본적 대안으로, 조건부 자존감이 아닌 무조건적 자기수용을 통해 심리적 건강을 추구한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "자존감(self-esteem) 대신 무조건적 자기수용(USA) 개념을 제안함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      },
      {
        "name_ko": "무조건적 타인수용",
        "name_en": "Unconditional Other-Acceptance",
        "id": "CBT_UO_028"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "USA = 행동은 평가하되 '나' 전체를 평가하지 않기",
      "differential": "Rogers의 무조건적 긍정적 존중이 타인에 의한 수용인 반면, Ellis의 USA는 자기 자신에 의한 수용이다.",
      "key_point": "Ellis는 '자존감(self-esteem)'이라는 개념 자체가 자기 평가를 전제하므로 해로울 수 있다고 보았다.",
      "common_mistake": "무조건적 자기수용이 '아무것이나 해도 괜찮다'는 의미가 아니다. 행동의 결과는 책임지되, 인간적 가치를 등급화하지 않는 것이다."
    }
  },
  {
    "id": "CBT_UO_028",
    "terminology": "무조건적 타인수용 (Unconditional Other-Acceptance, UOA)",
    "terminology_ko": "무조건적 타인수용",
    "terminology_en": "Unconditional Other-Acceptance",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "타인의 행동을 평가하되 그 사람 전체를 평가하지 않고, 타인을 실수할 수 있는 불완전한 인간으로 수용하는 REBT의 철학이다.",
    "definition_en": "An REBT philosophy of evaluating others' behaviors while not rating the whole person, accepting others as fallible human beings who can make mistakes.",
    "significance": "분노와 대인관계 문제의 근본적 해결을 위한 REBT의 핵심 철학적 태도이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "무조건적 타인수용을 REBT의 3가지 수용 철학 중 하나로 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무조건적 자기수용",
        "name_en": "Unconditional Self-Acceptance",
        "id": "CBT_UA_027"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "UOA = 타인의 행동은 나쁠 수 있지만, 타인 전체가 나쁜 것은 아니다",
      "differential": "무조건적 자기수용이 자기 자신에 대한 것이라면, 무조건적 타인수용은 타인에 대한 비평가적 태도이다.",
      "key_point": "'그 사람은 나쁜 사람이다'가 아닌 '그 사람의 그 행동은 바람직하지 않다'로 구분하는 것이 핵심이다.",
      "common_mistake": "무조건적 타인수용이 타인의 나쁜 행동을 용납하는 것이 아니다. 행동에 대해서는 분명히 평가한다."
    }
  },
  {
    "id": "CBT_SH_029",
    "terminology": "수치심 공격 훈련 (Shame-Attacking Exercises)",
    "terminology_ko": "수치심 공격 훈련",
    "terminology_en": "Shame-Attacking Exercises",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis가 개발한 REBT 기법으로, 의도적으로 수치스러운 행동을 수행하면서 자신이 파국적 결과 없이 수치심을 견딜 수 있음을 경험하게 한다.",
    "definition_en": "An REBT technique developed by Ellis where clients intentionally perform shame-inducing behaviors to experience that they can tolerate shame without catastrophic consequences.",
    "significance": "수치심에 대한 비합리적 신념을 경험적으로 논박하는 행동적 기법으로, REBT의 독특한 치료 도구이다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "수치심 공격 훈련을 개발하고 REBT의 행동적 기법으로 활용함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      },
      {
        "name_ko": "논박",
        "name_en": "Disputing",
        "id": "CBT_DI_022"
      },
      {
        "name_ko": "행동 실험",
        "name_en": "Behavioral Experiments",
        "id": "CBT_BE_016"
      },
      {
        "name_ko": "무조건적 자기수용",
        "name_en": "Unconditional Self-Acceptance",
        "id": "CBT_UA_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수치심 공격 = 일부러 창피한 짓을 해보고 '세상이 끝나지 않음'을 확인",
      "differential": "행동 실험이 신념 검증을 목적으로 하는 반면, 수치심 공격은 수치심에 대한 인내력 향상이 주목적이다.",
      "key_point": "핵심은 수치스러운 행동 자체가 아니라, 수치심을 견디면서도 자기를 수용할 수 있다는 경험이다.",
      "common_mistake": "수치심 공격 훈련이 비윤리적이거나 타인에게 해를 끼치는 행동을 하는 것이 아니다. 무해하지만 사회적으로 어색한 행동을 사용한다."
    }
  },
  {
    "id": "CBT_HC_030",
    "terminology": "건강한 부정적 감정 (Healthy Negative Emotions)",
    "terminology_ko": "건강한 부정적 감정",
    "terminology_en": "Healthy Negative Emotions",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "REBT에서 합리적 신념에서 비롯되는 적절한 수준의 부정적 감정으로, 걱정(concern), 슬픔(sadness), 후회(regret) 등이 해당된다.",
    "definition_en": "In REBT, appropriate negative emotions arising from rational beliefs, including concern, sadness, and regret.",
    "significance": "REBT의 목표가 부정적 감정의 제거가 아니라 불건강한 부정적 감정을 건강한 부정적 감정으로 전환하는 것임을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "건강한 부정적 감정과 불건강한 부정적 감정의 구별을 제시함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "합리적 신념",
        "name_en": "Rational Beliefs",
        "id": "CBT_RB_023"
      },
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "효과적 새 철학",
        "name_en": "Effective New Philosophy",
        "id": "CBT_EN_025"
      }
    ],
    "sub_types": [
      {
        "name": "걱정 (Concern)",
        "description": "불안의 건강한 대안 - 위험을 인식하되 과장하지 않음"
      },
      {
        "name": "슬픔 (Sadness)",
        "description": "우울의 건강한 대안 - 상실을 인정하되 절망하지 않음"
      },
      {
        "name": "후회 (Regret)",
        "description": "죄책감의 건강한 대안 - 실수를 인정하되 자기비하하지 않음"
      },
      {
        "name": "짜증 (Annoyance)",
        "description": "분노의 건강한 대안 - 불만을 느끼되 타인을 비하하지 않음"
      }
    ],
    "quiz_hints": {
      "mnemonic": "건강 vs 불건강: 걱정 vs 불안, 슬픔 vs 우울, 후회 vs 죄책감, 짜증 vs 분노",
      "differential": "일반 상담에서 부정적 감정 자체를 문제로 보는 경향이 있으나, REBT는 건강한 부정적 감정은 자연스럽고 기능적이라고 본다.",
      "key_point": "REBT의 치료 목표는 모든 부정적 감정의 제거가 아니라, 불건강한 것을 건강한 것으로 전환하는 것이다.",
      "common_mistake": "건강한 부정적 감정을 '약한 감정'으로 오해하면 안 된다. 강도가 강할 수 있지만 적응적이다."
    }
  },
  {
    "id": "CBT_DT_031",
    "terminology": "하향 화살표 기법 (Downward Arrow Technique)",
    "terminology_ko": "하향 화살표 기법",
    "terminology_en": "Downward Arrow Technique",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "'그것이 사실이라면 어떤 의미인가?'를 반복적으로 질문하여 자동적 사고에서 중간 신념, 핵심 신념까지 점진적으로 접근하는 인지치료 기법이다.",
    "definition_en": "A cognitive therapy technique of repeatedly asking 'If that were true, what would it mean?' to progressively access intermediate and core beliefs from automatic thoughts.",
    "significance": "표면적 자동적 사고 아래 숨어 있는 깊은 수준의 인지 구조를 파악하기 위한 핵심적 사정 기법이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "하향 화살표 기법의 기초를 마련함"
      },
      {
        "name_ko": "데이비드 번스",
        "name_en": "David Burns",
        "contribution": "하향 화살표 기법을 대중적으로 보급함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      },
      {
        "name_ko": "핵심 신념",
        "name_en": "Core Beliefs",
        "id": "CBT_CB_006"
      },
      {
        "name_ko": "중간 신념",
        "name_en": "Intermediate Beliefs",
        "id": "CBT_IB_005"
      },
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "하향 화살표 ↓ = '그래서 그게 뭔데?' 반복 → 핵심까지 파고들기",
      "differential": "소크라테스식 질문이 사고의 타당성을 검토하는 반면, 하향 화살표는 사고의 깊은 의미를 탐색한다.",
      "key_point": "'그것이 사실이라면 당신에게 어떤 의미인가?' '그래서 어떻다는 것인가?'를 반복하여 핵심에 도달한다.",
      "common_mistake": "하향 화살표 기법을 사용할 때 내담자의 감정 반응에 주의를 기울여야 한다. 핵심 신념에 접근하면 강한 감정이 유발될 수 있다."
    }
  },
  {
    "id": "CBT_RP_032",
    "terminology": "재귀인 (Reattribution)",
    "terminology_ko": "재귀인",
    "terminology_en": "Reattribution",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "내담자가 사건의 원인을 과도하게 자신에게 귀인하는 경향을 수정하여, 보다 균형 잡힌 원인 귀인을 할 수 있도록 돕는 인지 기법이다.",
    "definition_en": "A cognitive technique that helps clients modify the tendency to over-attribute causes of events to themselves, developing more balanced causal attributions.",
    "significance": "개인화, 자기비난 등의 인지왜곡을 교정하여 과도한 죄책감과 자기비하를 감소시키는 효과적인 인지 개입이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "재귀인 기법을 인지치료에 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재귀인 = 원인 파이 차트 그리기 (내 탓만 하지 말고 다른 요인도 고려)",
      "differential": "인지 재구조화가 사고의 내용을 수정하는 반면, 재귀인은 원인 귀인 방식을 수정한다.",
      "key_point": "'파이 차트' 기법으로 다양한 원인 요소의 기여도를 시각적으로 배분하는 것이 대표적이다.",
      "common_mistake": "재귀인이 내담자의 책임을 완전히 면제하는 것이 아니라, 다양한 요인을 균형 있게 고려하게 하는 것이다."
    }
  },
  {
    "id": "CBT_SM_033",
    "terminology": "자기교시훈련 (Self-Instructional Training)",
    "terminology_ko": "자기교시훈련",
    "terminology_en": "Self-Instructional Training",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Meichenbaum이 개발한 인지행동 기법으로, 내적 대화(자기 교시)를 변화시켜 스트레스 상황에서 보다 적응적으로 대처하도록 훈련하는 방법이다.",
    "definition_en": "A CBT technique developed by Meichenbaum that trains clients to change their internal dialogue (self-instructions) to cope more adaptively in stressful situations.",
    "significance": "Vygotsky의 내적 언어 개념에 기반하여, 자기 대화를 통한 행동 조절의 치료적 가치를 체계화했다.",
    "key_researchers": [
      {
        "name_ko": "도널드 마이켄바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "자기교시훈련을 개발하고 인지행동수정(CBM) 접근을 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "스트레스 면역 훈련",
        "name_en": "Stress Inoculation Training",
        "id": "CBT_SI_034"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기교시 = 스스로에게 '이렇게 해' 하고 말하기 (내적 코치)",
      "differential": "Beck의 인지치료가 사고의 내용을 수정하는 반면, 자기교시훈련은 자기 대화의 과정을 직접 변화시킨다.",
      "key_point": "5단계: 인지적 모델링 → 외현적 안내 → 외현적 자기 안내 → 소리 줄이기 → 내현적 자기교시",
      "common_mistake": "자기교시훈련을 단순한 '긍정적 혼잣말'로 오해하면 안 된다. 체계적인 단계적 훈련 과정이다."
    }
  },
  {
    "id": "CBT_SI_034",
    "terminology": "스트레스 면역 훈련 (Stress Inoculation Training, SIT)",
    "terminology_ko": "스트레스 면역 훈련",
    "terminology_en": "Stress Inoculation Training",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Meichenbaum이 개발한 3단계 인지행동 스트레스 관리 프로그램으로, 개념화, 기술 습득 및 연습, 적용 및 추수지도로 구성된다.",
    "definition_en": "A three-phase CBT stress management program developed by Meichenbaum, consisting of conceptualization, skills acquisition and rehearsal, and application and follow-through.",
    "significance": "스트레스에 대한 면역력을 체계적으로 키우는 예방적 접근으로, 의학적 면역 개념을 심리치료에 적용한 독창적 모델이다.",
    "key_researchers": [
      {
        "name_ko": "도널드 마이켄바움",
        "name_en": "Donald Meichenbaum",
        "contribution": "스트레스 면역 훈련을 개발하고 PTSD 등에 적용함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기교시훈련",
        "name_en": "Self-Instructional Training",
        "id": "CBT_SM_033"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      }
    ],
    "sub_types": [
      {
        "name": "1단계: 개념화",
        "description": "스트레스에 대한 교육과 인지 모델 이해"
      },
      {
        "name": "2단계: 기술 습득",
        "description": "이완, 인지 재구조화, 문제해결 기술 훈련"
      },
      {
        "name": "3단계: 적용",
        "description": "점진적으로 실제 스트레스 상황에 기술 적용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SIT = 스트레스 '백신' 맞기 (약한 스트레스로 면역력 키우기)",
      "differential": "체계적 둔감화가 불안 위계에 따른 점진적 노출인 반면, SIT는 인지적 대처 기술까지 포함하는 포괄적 프로그램이다.",
      "key_point": "의학의 예방접종처럼, 작은 스트레스에 대처하는 연습으로 큰 스트레스에 대한 면역력을 키운다.",
      "common_mistake": "SIT가 스트레스를 완전히 제거하는 것이 아니라, 스트레스에 효과적으로 대처하는 능력을 키우는 것이다."
    }
  },
  {
    "id": "CBT_BA_035",
    "terminology": "행동 활성화 (Behavioral Activation)",
    "terminology_ko": "행동 활성화",
    "terminology_en": "Behavioral Activation",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "우울증 치료에서 활동 수준을 증가시키고 회피 행동을 감소시켜, 긍정적 강화를 받는 경험을 늘리는 행동적 개입 전략이다.",
    "definition_en": "A behavioral intervention strategy in depression treatment that increases activity levels and decreases avoidance, enhancing experiences of positive reinforcement.",
    "significance": "인지 변화 없이도 행동 변화만으로 우울증을 효과적으로 치료할 수 있음을 보여주며, 독립적인 치료 프로토콜로도 사용된다.",
    "key_researchers": [
      {
        "name_ko": "닐 자코브슨",
        "name_en": "Neil Jacobson",
        "contribution": "행동 활성화를 독립적 우울증 치료법으로 발전시킴"
      },
      {
        "name_ko": "크리스토퍼 마텔",
        "name_en": "Christopher Martell",
        "contribution": "행동 활성화 치료 프로토콜을 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "활동 계획",
        "name_en": "Activity Scheduling",
        "id": "CBT_AS_017"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "숙제",
        "name_en": "Homework",
        "id": "CBT_HW_015"
      },
      {
        "name_ko": "조작적 조건형성",
        "name_en": "Operant Conditioning",
        "id": "BEHAV_OC_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동 활성화 = '일단 움직여!' (행동이 먼저, 동기는 나중에)",
      "differential": "인지치료가 사고 변화를 통해 행동을 바꾸는 반면, 행동 활성화는 행동 변화 자체에 직접 초점을 맞춘다.",
      "key_point": "'밖에서 안으로(outside-in)' 접근: 동기가 생겨서 행동하는 것이 아니라, 행동하면서 동기가 생긴다.",
      "common_mistake": "행동 활성화를 단순히 '바쁘게 지내기'로 오해하면 안 된다. 가치와 목표에 맞는 전략적 활동 증가이다."
    }
  },
  {
    "id": "CBT_DP_036",
    "terminology": "탈파국화 (Decatastrophizing)",
    "terminology_ko": "탈파국화",
    "terminology_en": "Decatastrophizing",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "'최악의 경우 어떤 일이 일어날 수 있는가?', '그것이 정말 일어나면 어떻게 대처할 수 있는가?'를 질문하여 재앙적 사고를 현실적으로 재평가하는 기법이다.",
    "definition_en": "A technique of realistically re-evaluating catastrophic thinking by asking 'What is the worst that could happen?' and 'How could you cope if it did happen?'",
    "significance": "불안장애 치료에서 재앙적 사고를 현실적으로 검토하여 불안을 감소시키는 핵심적 인지 기법이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "탈파국화 질문 기법을 인지치료에 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "CBT_CD_004"
      },
      {
        "name_ko": "파국화",
        "name_en": "Awfulizing",
        "id": "CBT_AW_026"
      },
      {
        "name_ko": "소크라테스식 질문",
        "name_en": "Socratic Questioning",
        "id": "CBT_SQ_012"
      },
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "탈파국화 = '최악이 뭔데? 그래서? 그래도 살 수 있지?'",
      "differential": "파국화가 최악을 상상하는 왜곡이라면, 탈파국화는 최악을 현실적으로 검토하는 기법이다.",
      "key_point": "3가지 질문: 최악의 경우는? 최선의 경우는? 가장 현실적인 경우는?",
      "common_mistake": "탈파국화가 '걱정하지 마'라고 안심시키는 것이 아니라, 체계적으로 최악의 결과를 검토하게 하는 것이다."
    }
  },
  {
    "id": "CBT_EL_037",
    "terminology": "엘리스의 11가지 비합리적 신념 (Ellis's 11 Irrational Beliefs)",
    "terminology_ko": "엘리스의 11가지 비합리적 신념",
    "terminology_en": "Ellis's 11 Irrational Beliefs",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "Ellis가 초기에 제시한 정서적 혼란을 유발하는 대표적인 11가지 비합리적 신념 목록으로, 이후 3가지 핵심 당위적 요구로 통합되었다.",
    "definition_en": "Ellis's original list of 11 representative irrational beliefs causing emotional disturbance, later consolidated into three core absolutistic demands.",
    "significance": "REBT의 초기 이론적 기반을 형성하며, 비합리적 신념의 구체적 내용을 이해하는 교육적 도구로 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "11가지 비합리적 신념을 최초로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비합리적 신념",
        "name_en": "Irrational Beliefs",
        "id": "CBT_IB_020"
      },
      {
        "name_ko": "당위적 사고",
        "name_en": "Musturbation",
        "id": "CBT_MU_021"
      },
      {
        "name_ko": "합리적 정서행동치료",
        "name_en": "REBT",
        "id": "CBT_RE_018"
      }
    ],
    "sub_types": [
      {
        "name": "신념1: 사랑과 인정의 욕구",
        "description": "모든 중요한 사람에게 사랑받아야 한다"
      },
      {
        "name": "신념2: 유능성 요구",
        "description": "완벽하게 유능해야 한다"
      },
      {
        "name": "신념3: 악한 사람 비난",
        "description": "나쁜 사람은 비난받아야 한다"
      }
    ],
    "quiz_hints": {
      "mnemonic": "11가지 → 3가지 핵심 당위: 나-해야, 너-해야, 세상-해야로 통합",
      "differential": "초기 11가지 신념이 구체적 내용 중심이라면, 이후 3가지 당위적 요구는 구조적 핵심에 초점을 맞춘다.",
      "key_point": "이후 Ellis는 11가지를 3가지 핵심 당위(자기, 타인, 세상에 대한 must)로 통합하였다.",
      "common_mistake": "11가지를 모두 외우는 것보다 3가지 핵심 당위를 이해하는 것이 REBT의 핵심을 파악하는 데 더 중요하다."
    }
  },
  {
    "id": "CBT_SE_038",
    "terminology": "자기효능감 (Self-Efficacy)",
    "terminology_ko": "자기효능감",
    "terminology_en": "Self-Efficacy",
    "category": "CBT",
    "category_name": "인지행동 상담 (Cognitive Behavior Therapy)",
    "definition": "특정 상황에서 요구되는 행동을 성공적으로 수행할 수 있다는 개인의 신념으로, Bandura의 사회학습이론에서 유래하여 CBT에서 중요한 변인이다.",
    "definition_en": "An individual's belief in their ability to successfully perform required behaviors in specific situations, originating from Bandura's social learning theory and important in CBT.",
    "significance": "행동 변화의 핵심 매개 변인으로, CBT에서 치료 목표의 달성과 유지에 결정적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "자기효능감 개념을 사회학습이론에서 제안하고 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "행동 실험",
        "name_en": "Behavioral Experiments",
        "id": "CBT_BE_016"
      },
      {
        "name_ko": "행동 활성화",
        "name_en": "Behavioral Activation",
        "id": "CBT_BA_035"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기효능감 = '나는 할 수 있다'는 구체적 상황에서의 믿음 (Bandura)",
      "differential": "자존감(self-esteem)이 자기 가치에 대한 전반적 평가인 반면, 자기효능감은 특정 과제 수행에 대한 신념이다.",
      "key_point": "4가지 출처: 성취 경험(가장 강력), 대리 경험, 언어적 설득, 생리적/정서적 상태.",
      "common_mistake": "자기효능감을 자존감과 혼동하면 안 된다. 자기효능감은 과제 특정적이고, 자존감은 전반적이다."
    }
  }
];

TERMS_DATA.THIRDW = [
  {
    "id": "THIRDW_TW_001",
    "terminology": "3세대 인지행동상담 (Third-Wave CBT)",
    "terminology_ko": "3세대 인지행동상담",
    "terminology_en": "Third-Wave CBT",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "전통적 CBT의 인지 변화 전략 대신, 사고와의 관계 변화(수용, 마음챙김, 탈융합)를 강조하는 인지행동치료의 최신 흐름이다.",
    "definition_en": "The latest wave of CBT emphasizing changing one's relationship with thoughts (acceptance, mindfulness, defusion) rather than changing thought content.",
    "significance": "사고의 내용을 바꾸려는 전통적 CBT의 한계를 보완하며, 수용과 마음챙김을 치료적 도구로 통합한 패러다임 전환이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "수용전념치료(ACT)를 개발하고 3세대 CBT 개념을 제안함"
      },
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "변증법적행동치료(DBT)를 개발함"
      },
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "마음챙김 기반 스트레스 감소(MBSR)를 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "마음챙김 기반 스트레스 감소",
        "name_en": "MBSR",
        "id": "THIRDW_MB_022"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "1세대=행동, 2세대=인지+행동, 3세대=수용+마음챙김+행동",
      "differential": "2세대 CBT가 사고 내용의 변화를 추구하는 반면, 3세대는 사고와의 관계 변화를 추구한다.",
      "key_point": "핵심 차이: '생각을 바꾸자' → '생각을 있는 그대로 관찰하고 수용하자'",
      "common_mistake": "3세대가 2세대를 대체하는 것이 아니라 보완하는 것이다. 전통적 CBT 기법도 여전히 사용된다."
    }
  },
  {
    "id": "THIRDW_AC_002",
    "terminology": "수용전념치료 (Acceptance and Commitment Therapy, ACT)",
    "terminology_ko": "수용전념치료",
    "terminology_en": "Acceptance and Commitment Therapy",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "Hayes가 개발한 3세대 CBT 접근으로, 심리적 유연성을 핵심 목표로 하며 수용, 인지적 탈융합, 현재 순간 접촉, 가치, 전념적 행동 등 6가지 핵심 과정을 포함한다.",
    "definition_en": "A third-wave CBT approach developed by Hayes targeting psychological flexibility through six core processes: acceptance, cognitive defusion, present moment contact, self as context, values, and committed action.",
    "significance": "관계 구성 이론(RFT)에 기반한 과학적 토대를 갖추고, 수용과 행동 변화를 통합한 혁신적 치료 모델이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "ACT와 관계 구성 이론(RFT)을 개발함"
      },
      {
        "name_ko": "커크 스트로살",
        "name_en": "Kirk Strosahl",
        "contribution": "ACT의 임상 프로토콜 개발에 기여함"
      },
      {
        "name_ko": "켈리 윌슨",
        "name_en": "Kelly Wilson",
        "contribution": "ACT의 가치 작업을 발전시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "인지적 탈융합",
        "name_en": "Cognitive Defusion",
        "id": "THIRDW_CD_005"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      },
      {
        "name_ko": "가치",
        "name_en": "Values",
        "id": "THIRDW_VA_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ACT = Accept(수용) + Choose(선택) + Take action(행동) = '있는 그대로 받아들이고, 가치를 향해 행동하라'",
      "differential": "전통적 CBT가 부정적 사고를 변화시키려는 반면, ACT는 사고를 바꾸려 하지 않고 수용하면서 가치 기반 행동에 초점을 둔다.",
      "key_point": "6가지 핵심 과정이 '헥사플렉스(Hexaflex)' 모형으로 시각화된다.",
      "common_mistake": "ACT를 '체념' 또는 '포기'로 오해하면 안 된다. 수용은 적극적 자세이며, 전념적 행동이 반드시 수반된다."
    }
  },
  {
    "id": "THIRDW_PF_003",
    "terminology": "심리적 유연성 (Psychological Flexibility)",
    "terminology_ko": "심리적 유연성",
    "terminology_en": "Psychological Flexibility",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "현재 순간에 완전히 접촉하면서, 상황이 요구하는 바에 따라 행동을 변화시키거나 유지하며, 자신이 선택한 가치에 따라 행동하는 능력이다.",
    "definition_en": "The ability to be fully in contact with the present moment while changing or persisting in behavior as the situation demands, acting in accordance with chosen values.",
    "significance": "ACT의 궁극적 치료 목표이며, 6가지 핵심 과정의 통합적 결과로 나타나는 심리적 건강의 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "심리적 유연성을 ACT의 중심 목표로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "심리적 경직성",
        "name_en": "Psychological Inflexibility",
        "id": "THIRDW_PI_011"
      },
      {
        "name_ko": "가치",
        "name_en": "Values",
        "id": "THIRDW_VA_009"
      },
      {
        "name_ko": "전념적 행동",
        "name_en": "Committed Action",
        "id": "THIRDW_CA_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심리적 유연성 = 대나무처럼 '유연하게 휘면서도 부러지지 않는' 마음",
      "differential": "전통적 CBT의 목표가 인지적 왜곡의 교정인 반면, ACT의 목표는 심리적 유연성의 증진이다.",
      "key_point": "심리적 유연성은 단일 능력이 아니라 6가지 핵심 과정의 상호작용에서 나타나는 통합적 기능이다.",
      "common_mistake": "유연성이 '의지가 약하다'거나 '원칙이 없다'는 뜻이 아니라, 상황에 맞게 적응하면서 가치를 지키는 것이다."
    }
  },
  {
    "id": "THIRDW_AP_004",
    "terminology": "수용 (Acceptance)",
    "terminology_ko": "수용",
    "terminology_en": "Acceptance",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정 중 하나로, 내적 경험(사고, 감정, 신체감각)을 통제하거나 회피하려 하지 않고 있는 그대로 기꺼이 경험하는 적극적 자세이다.",
    "definition_en": "One of ACT's six core processes, an active stance of willingly experiencing internal experiences (thoughts, emotions, sensations) without trying to control or avoid them.",
    "significance": "경험 회피의 대안으로, 내적 경험과의 불필요한 싸움을 중단하고 에너지를 가치 기반 행동에 투자할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "수용을 경험 회피의 대안적 과정으로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경험 회피",
        "name_en": "Experiential Avoidance",
        "id": "THIRDW_EA_006"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "기꺼이 하기",
        "name_en": "Willingness",
        "id": "THIRDW_WI_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "수용 = '환영하지 않아도 되지만, 문을 열어두는 것'",
      "differential": "Rogers의 무조건적 긍정적 존중이 상담자가 내담자를 수용하는 것이라면, ACT의 수용은 내담자가 자신의 내적 경험을 수용하는 것이다.",
      "key_point": "수용은 체념이나 좋아하기가 아니라, 불필요한 통제 시도를 중단하는 적극적 선택이다.",
      "common_mistake": "수용을 '참기' '견디기'로 오해하면 안 된다. 경험을 있는 그대로 열린 자세로 맞이하는 것이다."
    }
  },
  {
    "id": "THIRDW_CD_005",
    "terminology": "인지적 탈융합 (Cognitive Defusion)",
    "terminology_ko": "인지적 탈융합",
    "terminology_en": "Cognitive Defusion",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정 중 하나로, 사고를 현실 자체로 받아들이는 것(인지적 융합)에서 벗어나 사고를 단지 사고로 관찰하는 과정이다.",
    "definition_en": "One of ACT's six core processes, the process of stepping back from thoughts being taken as reality (cognitive fusion) to observing thoughts as merely thoughts.",
    "significance": "사고의 내용을 바꾸지 않고도 사고의 영향력을 줄일 수 있는 ACT의 혁신적 기법으로, 전통적 인지 재구조화의 대안이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "인지적 탈융합 개념과 다양한 탈융합 기법을 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지적 융합",
        "name_en": "Cognitive Fusion",
        "id": "THIRDW_CF_008"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "탈융합 = '나는 실패자다' → '나는 내가 실패자라는 생각을 하고 있다'",
      "differential": "인지 재구조화가 사고의 내용을 변화시키려는 반면, 탈융합은 사고와의 관계를 변화시킨다.",
      "key_point": "대표 기법: '나는 ~라는 생각을 하고 있다', 사고를 노래로 부르기, 사고를 구름에 띄워보내기 등",
      "common_mistake": "탈융합이 사고를 무시하거나 억제하는 것이 아니다. 사고를 관찰하되 사고에 지배당하지 않는 것이다."
    }
  },
  {
    "id": "THIRDW_EA_006",
    "terminology": "경험 회피 (Experiential Avoidance)",
    "terminology_ko": "경험 회피",
    "terminology_en": "Experiential Avoidance",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "불쾌한 내적 경험(사고, 감정, 신체감각, 기억)을 피하거나 통제하려는 시도로, ACT에서 다양한 심리적 문제의 공통 원인으로 본다.",
    "definition_en": "Attempts to avoid or control unpleasant internal experiences (thoughts, emotions, sensations, memories), viewed in ACT as a common cause of various psychological problems.",
    "significance": "ACT의 핵심 병리 개념으로, 경험 회피가 역설적으로 고통을 증가시키며 삶의 질을 저하시킨다는 것을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "경험 회피를 범진단적 병리 과정으로 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      },
      {
        "name_ko": "심리적 경직성",
        "name_en": "Psychological Inflexibility",
        "id": "THIRDW_PI_011"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경험 회피 = 불쾌한 감정에서 '도망치려' 할수록 더 쫓아온다 (늪에 빠진 것처럼)",
      "differential": "행동주의의 회피 행동이 외부 자극에 대한 것이라면, 경험 회피는 내적 경험에 대한 것이다.",
      "key_point": "경험 회피의 역설: 통제하려 할수록 내적 경험의 빈도, 강도, 고통이 오히려 증가한다.",
      "common_mistake": "경험 회피가 항상 의식적인 과정이 아니다. 자동적이고 습관적인 패턴으로 나타나기도 한다."
    }
  },
  {
    "id": "THIRDW_WI_007",
    "terminology": "기꺼이 하기 (Willingness)",
    "terminology_ko": "기꺼이 하기",
    "terminology_en": "Willingness",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT에서 불쾌한 내적 경험이 나타나더라도 이를 기꺼이 경험하며, 가치에 따른 행동을 지속하려는 적극적 자세이다.",
    "definition_en": "An active stance in ACT of being willing to experience unpleasant internal experiences while continuing value-guided behavior.",
    "significance": "경험 회피의 직접적 대안으로, 내적 경험의 통제를 포기하고 삶의 방향에 에너지를 집중하게 한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "기꺼이 하기를 수용의 핵심 태도로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      },
      {
        "name_ko": "경험 회피",
        "name_en": "Experiential Avoidance",
        "id": "THIRDW_EA_006"
      },
      {
        "name_ko": "가치",
        "name_en": "Values",
        "id": "THIRDW_VA_009"
      },
      {
        "name_ko": "전념적 행동",
        "name_en": "Committed Action",
        "id": "THIRDW_CA_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기꺼이 하기 = '불편해도 괜찮아, 중요한 것을 위해 나아가겠어'",
      "differential": "인내(tolerance)가 '참고 견디기'라면, 기꺼이 하기(willingness)는 '열린 마음으로 맞이하기'이다.",
      "key_point": "기꺼이 하기는 전부(all-or-nothing)이다. '조금만 기꺼이'는 존재하지 않는다.",
      "common_mistake": "기꺼이 하기가 불쾌한 경험을 '좋아하기'를 의미하지 않는다. 좋아하지 않아도 경험에 열린 자세를 취하는 것이다."
    }
  },
  {
    "id": "THIRDW_CF_008",
    "terminology": "인지적 융합 (Cognitive Fusion)",
    "terminology_ko": "인지적 융합",
    "terminology_en": "Cognitive Fusion",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "사고의 내용을 현실 자체와 동일시하여, 사고에 의해 행동이 과도하게 지배되는 상태이다.",
    "definition_en": "A state of identifying the content of thoughts with reality itself, resulting in behavior being excessively dominated by thoughts.",
    "significance": "ACT에서 심리적 경직성의 핵심 요인으로, 탈융합을 통해 사고의 문자적 영향력을 줄이는 것이 치료 과제이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "인지적 융합을 심리적 경직성의 핵심 요인으로 규명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지적 탈융합",
        "name_en": "Cognitive Defusion",
        "id": "THIRDW_CD_005"
      },
      {
        "name_ko": "심리적 경직성",
        "name_en": "Psychological Inflexibility",
        "id": "THIRDW_PI_011"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지적 융합 = 생각에 '달라붙어' 있는 상태 (생각 = 현실로 착각)",
      "differential": "Beck의 인지왜곡이 사고 내용의 오류인 반면, 인지적 융합은 사고와의 관계 문제이다.",
      "key_point": "'나는 실패자다'라는 생각에 융합되면, 이 생각을 사실로 받아들이고 그에 따라 행동한다.",
      "common_mistake": "인지적 융합이 항상 부정적 사고에만 해당하는 것이 아니다. 긍정적 사고에도 융합될 수 있다."
    }
  },
  {
    "id": "THIRDW_VA_009",
    "terminology": "가치 (Values)",
    "terminology_ko": "가치",
    "terminology_en": "Values",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT에서 개인이 자유롭게 선택한 삶의 방향으로, 목표와 달리 결코 완전히 달성되지 않으며 행동의 지속적 나침반 역할을 한다.",
    "definition_en": "In ACT, freely chosen life directions that, unlike goals, are never fully achieved and serve as a continuous compass for behavior.",
    "significance": "고통 속에서도 의미 있는 행동을 지속할 동기를 제공하며, ACT에서 전념적 행동의 방향을 결정하는 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "켈리 윌슨",
        "name_en": "Kelly Wilson",
        "contribution": "ACT에서 가치 작업의 이론과 실천을 발전시킴"
      },
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "가치를 ACT의 6가지 핵심 과정 중 하나로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전념적 행동",
        "name_en": "Committed Action",
        "id": "THIRDW_CA_010"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가치 = 나침반 (방향은 있지만 도착지는 없다) vs 목표 = 목적지",
      "differential": "목표(goal)가 달성 가능한 결과물인 반면, 가치(values)는 지속적으로 추구하는 삶의 방향이다.",
      "key_point": "'좋은 부모가 되기'는 가치이고, '매일 30분 아이와 놀아주기'는 그 가치에 따른 목표이다.",
      "common_mistake": "가치를 '도덕적 의무'나 '사회적 기대'로 혼동하면 안 된다. ACT의 가치는 자유롭게 선택한 개인적 방향이다."
    }
  },
  {
    "id": "THIRDW_CA_010",
    "terminology": "전념적 행동 (Committed Action)",
    "terminology_ko": "전념적 행동",
    "terminology_en": "Committed Action",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정 중 하나로, 자신이 선택한 가치에 따라 구체적인 행동 패턴을 실행하고, 장애물을 만나더라도 지속적으로 행동하는 것이다.",
    "definition_en": "One of ACT's six core processes, executing specific behavior patterns in accordance with chosen values and persisting despite encountering obstacles.",
    "significance": "ACT가 단순한 수용에 그치지 않고, 가치 있는 삶을 향한 적극적 행동 변화를 포함함을 보여주는 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "전념적 행동을 ACT의 핵심 과정으로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가치",
        "name_en": "Values",
        "id": "THIRDW_VA_009"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "행동 계획",
        "name_en": "Action Plan",
        "id": "REALITY_AP_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "전념적 행동 = 가치라는 나침반을 따라 '한 걸음씩' 실제로 걷기",
      "differential": "현실치료의 행동 계획이 욕구 충족에 초점인 반면, 전념적 행동은 가치 실현에 초점을 맞춘다.",
      "key_point": "불편한 내적 경험이 있더라도 가치에 따른 행동을 중단하지 않는 것이 핵심이다.",
      "common_mistake": "전념적 행동이 완벽한 실행을 요구하는 것이 아니다. 넘어져도 다시 일어나 가치 방향으로 걸어가는 과정이다."
    }
  },
  {
    "id": "THIRDW_PI_011",
    "terminology": "심리적 경직성 (Psychological Inflexibility)",
    "terminology_ko": "심리적 경직성",
    "terminology_en": "Psychological Inflexibility",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT에서 정의하는 심리적 병리의 핵심으로, 인지적 융합과 경험 회피로 인해 가치에 따른 유연한 행동이 불가능한 상태이다.",
    "definition_en": "The core of psychopathology in ACT, a state where cognitive fusion and experiential avoidance make flexible value-guided behavior impossible.",
    "significance": "ACT의 범진단적 병리 모델로, 다양한 심리 장애의 공통 기제를 심리적 경직성으로 설명한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "심리적 경직성을 범진단적 병리 과정으로 제안함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "인지적 융합",
        "name_en": "Cognitive Fusion",
        "id": "THIRDW_CF_008"
      },
      {
        "name_ko": "경험 회피",
        "name_en": "Experiential Avoidance",
        "id": "THIRDW_EA_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심리적 경직성 = 심리적 유연성의 반대 = 생각에 갇혀 움직이지 못하는 상태",
      "differential": "DSM의 진단적 분류가 증상 기반인 반면, ACT의 심리적 경직성은 과정 기반의 범진단적 모델이다.",
      "key_point": "6가지 경직성 과정: 경험회피, 인지융합, 과거/미래집착, 개념화된자기, 가치불명확, 행동무력",
      "common_mistake": "심리적 경직성이 성격 특성이 아니라 변화 가능한 기능적 과정이라는 점을 이해해야 한다."
    }
  },
  {
    "id": "THIRDW_DB_012",
    "terminology": "변증법적행동치료 (Dialectical Behavior Therapy, DBT)",
    "terminology_ko": "변증법적행동치료",
    "terminology_en": "Dialectical Behavior Therapy",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "Linehan이 경계선 성격장애 치료를 위해 개발한 접근으로, 수용과 변화의 변증법적 균형을 핵심 원리로 하며 4가지 기술 모듈로 구성된다.",
    "definition_en": "An approach developed by Linehan for treating borderline personality disorder, with dialectical balance of acceptance and change as its core principle, consisting of four skill modules.",
    "significance": "만성적 자살 행동과 자해를 효과적으로 다루는 최초의 경험적으로 검증된 치료법이며, 다양한 정서조절 문제에 확대 적용된다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "DBT를 개발하고 경계선 성격장애 치료에서의 효과를 입증함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법",
        "name_en": "Dialectics",
        "id": "THIRDW_DL_013"
      },
      {
        "name_ko": "마음챙김 기술",
        "name_en": "Mindfulness Skills",
        "id": "THIRDW_MS_015"
      },
      {
        "name_ko": "정서조절 기술",
        "name_en": "Emotion Regulation Skills",
        "id": "THIRDW_ER_016"
      },
      {
        "name_ko": "고통감내 기술",
        "name_en": "Distress Tolerance Skills",
        "id": "THIRDW_DT_017"
      }
    ],
    "sub_types": [
      {
        "name": "개인 치료",
        "description": "주 1회 개인 상담, 치료 위계에 따른 문제 해결"
      },
      {
        "name": "기술훈련 그룹",
        "description": "주 1회 그룹, 4가지 기술 모듈 학습"
      },
      {
        "name": "전화 코칭",
        "description": "위기 시 전화 상담, 기술 적용 안내"
      },
      {
        "name": "상담팀 자문",
        "description": "치료자를 위한 자문 팀 미팅"
      }
    ],
    "quiz_hints": {
      "mnemonic": "DBT 4요소: 개인치료 + 기술훈련 그룹 + 전화코칭 + 상담팀 자문",
      "differential": "전통적 CBT가 인지 변화를 강조하는 반면, DBT는 수용과 변화의 변증법적 균형을 강조한다.",
      "key_point": "핵심 변증법: '당신은 지금 있는 그대로 괜찮다 AND 변화가 필요하다' (수용 + 변화)",
      "common_mistake": "DBT를 경계선 성격장애에만 적용된다고 생각하면 안 된다. 정서조절 문제, 섭식장애, 물질남용 등에도 적용된다."
    }
  },
  {
    "id": "THIRDW_DL_013",
    "terminology": "변증법 (Dialectics)",
    "terminology_ko": "변증법",
    "terminology_en": "Dialectics",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "대립되는 두 가지 진실(정과 반)을 통합하여 새로운 진실(합)에 도달하는 과정으로, DBT에서 수용과 변화의 균형을 이루는 철학적 기반이다.",
    "definition_en": "The process of integrating two opposing truths (thesis and antithesis) to reach a new truth (synthesis), the philosophical foundation of balancing acceptance and change in DBT.",
    "significance": "흑백논리적 사고에 빠지기 쉬운 내담자에게 'AND' 사고(양극 통합)를 가르치는 DBT의 핵심 원리이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "변증법적 철학을 심리치료에 통합함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "타당화",
        "name_en": "Validation",
        "id": "THIRDW_VD_014"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "변증법 = 정(thesis) + 반(antithesis) = 합(synthesis) = 'AND' 사고",
      "differential": "이분법적 사고가 'OR'(이것 또는 저것)인 반면, 변증법적 사고는 'AND'(이것 그리고 저것)이다.",
      "key_point": "DBT의 핵심 변증법: '수용 AND 변화', '그대로 괜찮다 AND 더 나아질 수 있다'",
      "common_mistake": "변증법이 타협이나 중간 지점을 찾는 것이 아니라, 양극을 동시에 인정하는 새로운 통합을 추구하는 것이다."
    }
  },
  {
    "id": "THIRDW_VD_014",
    "terminology": "타당화 (Validation)",
    "terminology_ko": "타당화",
    "terminology_en": "Validation",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT에서 내담자의 경험, 감정, 사고가 현재 맥락에서 이해 가능하고 타당함을 인정하고 전달하는 치료적 기술이다.",
    "definition_en": "A DBT therapeutic skill of recognizing and communicating that the client's experiences, emotions, and thoughts are understandable and valid in the current context.",
    "significance": "수용 전략의 핵심으로, 변화를 요구하기 전에 내담자의 현재 경험을 인정함으로써 치료 관계와 변화 동기를 강화한다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "타당화의 6단계를 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "변증법",
        "name_en": "Dialectics",
        "id": "THIRDW_DL_013"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      }
    ],
    "sub_types": [
      {
        "name": "1단계: 경청",
        "description": "주의 깊게 듣기"
      },
      {
        "name": "2단계: 정확한 반영",
        "description": "내담자의 말을 정확히 반영"
      },
      {
        "name": "3단계: 말하지 않은 것 읽기",
        "description": "비언어적 단서와 맥락 이해"
      },
      {
        "name": "4단계: 원인에 의한 타당화",
        "description": "과거 경험에 비추어 이해 가능함을 전달"
      },
      {
        "name": "5단계: 현재 맥락에서의 타당화",
        "description": "현재 상황에서 합리적임을 인정"
      },
      {
        "name": "6단계: 급진적 진정성",
        "description": "내담자를 동등한 인간으로 대함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "타당화 6단계: 듣기→반영→읽기→과거이해→현재인정→진정성",
      "differential": "공감이 감정을 이해하고 느끼는 것이라면, 타당화는 그 감정이 '타당하다'고 명시적으로 인정하는 것이다.",
      "key_point": "타당화가 동의를 의미하지 않는다. 내담자의 경험이 이해 가능함을 인정하는 것이다.",
      "common_mistake": "타당화를 단순히 '맞아요, 힘들었겠네요'로 한정하면 안 된다. 6단계의 깊이 있는 기술이다."
    }
  },
  {
    "id": "THIRDW_MS_015",
    "terminology": "마음챙김 기술 (Mindfulness Skills)",
    "terminology_ko": "마음챙김 기술",
    "terminology_en": "Mindfulness Skills",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 4가지 기술 모듈 중 핵심 기술로, 현재 순간에 판단 없이 주의를 기울이는 능력을 체계적으로 훈련하며, What 기술과 How 기술로 구분된다.",
    "definition_en": "The core skill module among DBT's four skill modules, systematically training the ability to pay attention to the present moment without judgment, divided into What skills and How skills.",
    "significance": "다른 세 가지 기술 모듈(정서조절, 고통감내, 대인관계효율성)의 기반이 되는 핵심 기술이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "마음챙김을 DBT의 핵심 기술 모듈로 통합함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      },
      {
        "name_ko": "지혜로운 마음",
        "name_en": "Wise Mind",
        "id": "THIRDW_WM_018"
      }
    ],
    "sub_types": [
      {
        "name": "What 기술: 관찰하기",
        "description": "경험을 있는 그대로 알아차림"
      },
      {
        "name": "What 기술: 묘사하기",
        "description": "경험을 언어로 기술함"
      },
      {
        "name": "What 기술: 참여하기",
        "description": "활동에 온전히 몰입함"
      },
      {
        "name": "How 기술: 비판단적으로",
        "description": "판단 없이 관찰함"
      },
      {
        "name": "How 기술: 한 가지씩",
        "description": "한 번에 한 가지에 집중"
      },
      {
        "name": "How 기술: 효과적으로",
        "description": "목표 달성에 초점을 맞춤"
      }
    ],
    "quiz_hints": {
      "mnemonic": "What(무엇을): 관찰-묘사-참여 / How(어떻게): 비판단-한가지씩-효과적으로",
      "differential": "ACT의 마음챙김이 현재 순간 접촉에 초점인 반면, DBT의 마음챙김은 구체적 기술 훈련으로 구조화되어 있다.",
      "key_point": "마음챙김은 DBT의 다른 모든 기술(정서조절, 고통감내, 대인관계)의 기초가 되는 핵심 기술이다.",
      "common_mistake": "마음챙김을 명상과 동일시하면 안 된다. DBT에서는 일상 활동에서의 마음챙김 실천을 강조한다."
    }
  },
  {
    "id": "THIRDW_ER_016",
    "terminology": "정서조절 기술 (Emotion Regulation Skills)",
    "terminology_ko": "정서조절 기술",
    "terminology_en": "Emotion Regulation Skills",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 4가지 기술 모듈 중 하나로, 정서를 이해하고, 부정적 정서의 취약성을 줄이며, 정서적 고통을 줄이기 위한 체계적 기술이다.",
    "definition_en": "One of DBT's four skill modules for understanding emotions, reducing vulnerability to negative emotions, and decreasing emotional suffering.",
    "significance": "정서조절 곤란이 핵심 문제인 내담자에게 구체적인 정서 관리 도구를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "정서조절 기술 모듈을 개발하고 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "마음챙김 기술",
        "name_en": "Mindfulness Skills",
        "id": "THIRDW_MS_015"
      },
      {
        "name_ko": "반대행동",
        "name_en": "Opposite Action",
        "id": "THIRDW_OA_019"
      }
    ],
    "sub_types": [
      {
        "name": "정서 이해하기",
        "description": "정서의 기능과 구성요소 학습"
      },
      {
        "name": "ABC PLEASE",
        "description": "긍정 경험 축적과 신체 건강 관리"
      },
      {
        "name": "반대행동",
        "description": "정서 충동과 반대되는 행동 실행"
      },
      {
        "name": "문제해결",
        "description": "정서를 유발하는 문제의 직접적 해결"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정서조절 = 이해하기 + 취약성 줄이기(ABC PLEASE) + 반대행동 + 문제해결",
      "differential": "CBT의 인지 재구조화가 사고 변화로 정서를 바꾸려는 반면, DBT 정서조절은 다양한 경로(행동, 신체, 인지)를 활용한다.",
      "key_point": "PLEASE 기술: 신체질환 치료, 균형 식사, 물질 회피, 수면, 운동 = 정서적 취약성 감소의 기반",
      "common_mistake": "정서조절이 감정을 억제하는 것이 아니라, 원치 않는 감정을 줄이고 원하는 감정을 늘리는 것이다."
    }
  },
  {
    "id": "THIRDW_DT_017",
    "terminology": "고통감내 기술 (Distress Tolerance Skills)",
    "terminology_ko": "고통감내 기술",
    "terminology_en": "Distress Tolerance Skills",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 4가지 기술 모듈 중 하나로, 위기 상황에서 상황을 더 악화시키지 않고 고통을 견딜 수 있게 하는 단기적 대처 기술이다.",
    "definition_en": "One of DBT's four skill modules providing short-term coping skills to tolerate distress in crisis situations without making things worse.",
    "significance": "자해, 자살 시도 등 위기 행동의 대안적 대처를 제공하며, DBT의 수용 전략의 핵심 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "고통감내 기술 모듈을 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "TIPP 기술",
        "name_en": "TIPP Skills",
        "id": "THIRDW_TP_020"
      },
      {
        "name_ko": "급진적 수용",
        "name_en": "Radical Acceptance",
        "id": "THIRDW_RA_021"
      }
    ],
    "sub_types": [
      {
        "name": "위기 생존 기술",
        "description": "TIPP, 주의분산(ACCEPTS), 자기위안, 장단점 비교"
      },
      {
        "name": "현실 수용 기술",
        "description": "급진적 수용, 기꺼이 하기, 반쪽 미소"
      }
    ],
    "quiz_hints": {
      "mnemonic": "고통감내 = 위기 생존(TIPP, ACCEPTS) + 현실 수용(급진적 수용)",
      "differential": "정서조절 기술이 장기적 정서 관리인 반면, 고통감내 기술은 단기적 위기 대처에 초점을 맞춘다.",
      "key_point": "핵심 목표: '상황을 더 악화시키지 않기' (자해나 충동적 행동 대신 다른 방법으로 위기를 넘기기)",
      "common_mistake": "고통감내가 고통을 없애는 것이 아니라, 고통을 악화시키지 않고 견디는 것임을 이해해야 한다."
    }
  },
  {
    "id": "THIRDW_WM_018",
    "terminology": "지혜로운 마음 (Wise Mind)",
    "terminology_ko": "지혜로운 마음",
    "terminology_en": "Wise Mind",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT에서 감정적 마음(Emotion Mind)과 이성적 마음(Reasonable Mind)을 통합한 상태로, 직관과 논리가 균형을 이루는 최적의 의사결정 상태이다.",
    "definition_en": "In DBT, a state integrating Emotion Mind and Reasonable Mind, an optimal decision-making state where intuition and logic are balanced.",
    "significance": "DBT 마음챙김 기술의 궁극적 목표이며, 감정과 이성의 변증법적 통합을 구체적으로 보여주는 개념이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "지혜로운 마음 개념을 DBT에 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음챙김 기술",
        "name_en": "Mindfulness Skills",
        "id": "THIRDW_MS_015"
      },
      {
        "name_ko": "변증법",
        "name_en": "Dialectics",
        "id": "THIRDW_DL_013"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      }
    ],
    "sub_types": [
      {
        "name": "감정적 마음 (Emotion Mind)",
        "description": "감정에 의해 지배되는 사고 상태"
      },
      {
        "name": "이성적 마음 (Reasonable Mind)",
        "description": "논리와 이성에만 의존하는 사고 상태"
      },
      {
        "name": "지혜로운 마음 (Wise Mind)",
        "description": "감정과 이성의 통합 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "지혜로운 마음 = 감정(뜨거운) + 이성(차가운) = 따뜻한 지혜",
      "differential": "CBT가 이성적 마음을 강조하는 경향이 있다면, DBT는 감정과 이성의 통합인 지혜로운 마음을 추구한다.",
      "key_point": "지혜로운 마음은 두 마음의 중간이 아니라, 두 마음이 겹치는 통합 영역이다.",
      "common_mistake": "지혜로운 마음이 항상 이성적인 결정을 의미하는 것이 아니다. 직관과 감정적 지혜도 포함된다."
    }
  },
  {
    "id": "THIRDW_OA_019",
    "terminology": "반대행동 (Opposite Action)",
    "terminology_ko": "반대행동",
    "terminology_en": "Opposite Action",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 정서조절 기술로, 감정의 행동 충동과 반대되는 행동을 의도적으로 수행하여 원치 않는 감정의 강도를 줄이는 기법이다.",
    "definition_en": "A DBT emotion regulation skill of intentionally performing behaviors opposite to emotional urges to reduce the intensity of unwanted emotions.",
    "significance": "감정이 상황에 부적합할 때, 감정을 직접 변화시키기 어려우므로 행동을 통해 간접적으로 감정을 변화시키는 실용적 기법이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "반대행동을 DBT의 핵심 정서조절 기법으로 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정서조절 기술",
        "name_en": "Emotion Regulation Skills",
        "id": "THIRDW_ER_016"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "행동 활성화",
        "name_en": "Behavioral Activation",
        "id": "CBT_BA_035"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반대행동: 두려우면→접근, 슬프면→활동, 화나면→회피/친절, 수치스러우면→반복",
      "differential": "노출 치료가 불안 감소를 위한 반복적 접근인 반면, 반대행동은 모든 감정에 적용되는 범정서적 기법이다.",
      "key_point": "반대행동은 감정이 상황에 '부적합'할 때만 사용한다. 적합한 감정은 그대로 경험해야 한다.",
      "common_mistake": "반대행동이 감정을 억압하는 것이 아니다. 감정은 인정하되, 행동 충동과 반대되는 행동을 선택하는 것이다."
    }
  },
  {
    "id": "THIRDW_TP_020",
    "terminology": "TIPP 기술 (TIPP Skills)",
    "terminology_ko": "TIPP 기술",
    "terminology_en": "TIPP Skills",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 위기 생존 기술로, 극도의 정서적 각성 상태를 빠르게 낮추기 위한 신체 기반 기법의 약어이다: 온도(Temperature), 격렬한 운동(Intense exercise), 박빙 호흡(Paced breathing), 대근육 이완(Progressive relaxation).",
    "definition_en": "DBT crisis survival skills using body-based techniques to quickly lower extreme emotional arousal: Temperature, Intense exercise, Paced breathing, and Progressive (paired muscle) relaxation.",
    "significance": "위기 상황에서 즉각적으로 신체의 각성 수준을 낮출 수 있는 가장 빠른 DBT 기법이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "TIPP 기술을 DBT 위기 생존 기술로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고통감내 기술",
        "name_en": "Distress Tolerance Skills",
        "id": "THIRDW_DT_017"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      }
    ],
    "sub_types": [
      {
        "name": "T (Temperature)",
        "description": "찬물에 얼굴 담그기 등으로 다이빙 반사 유발"
      },
      {
        "name": "I (Intense Exercise)",
        "description": "짧은 격렬한 운동으로 각성 수준 조절"
      },
      {
        "name": "P (Paced Breathing)",
        "description": "느린 호흡으로 부교감신경 활성화"
      },
      {
        "name": "P (Progressive Relaxation)",
        "description": "근육 긴장과 이완 반복"
      }
    ],
    "quiz_hints": {
      "mnemonic": "TIPP = 차가운 물(T) + 격렬 운동(I) + 느린 호흡(P) + 근육 이완(P)",
      "differential": "마음챙김이 주의의 방향 전환인 반면, TIPP는 신체 생리를 직접 변화시키는 방법이다.",
      "key_point": "T(온도)의 다이빙 반사가 가장 빠르게 심박수를 낮출 수 있다. 찬물에 얼굴을 30초간 담그면 된다.",
      "common_mistake": "TIPP는 장기적 해결이 아닌 위기 순간의 응급 대처 기술이다. 위기가 지나면 다른 기술로 전환해야 한다."
    }
  },
  {
    "id": "THIRDW_RA_021",
    "terminology": "급진적 수용 (Radical Acceptance)",
    "terminology_ko": "급진적 수용",
    "terminology_en": "Radical Acceptance",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 고통감내 기술로, 변화시킬 수 없는 현실을 있는 그대로 완전히 수용하는 것으로, 고통에 저항함으로써 발생하는 추가적 고통을 감소시킨다.",
    "definition_en": "A DBT distress tolerance skill of completely accepting unchangeable reality as it is, reducing the additional suffering caused by resisting pain.",
    "significance": "'고통 = 통증 + 저항'이라는 공식에서 저항을 줄여 추가적 고통(suffering)을 감소시키는 DBT의 핵심 수용 기술이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "급진적 수용을 DBT의 핵심 수용 기술로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고통감내 기술",
        "name_en": "Distress Tolerance Skills",
        "id": "THIRDW_DT_017"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "기꺼이 하기",
        "name_en": "Willingness",
        "id": "THIRDW_WI_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "급진적 수용: 고통(suffering) = 통증(pain) x 저항(resistance) → 저항 줄이기",
      "differential": "일반적 수용이 부분적일 수 있는 반면, 급진적 수용은 마음, 몸, 영혼으로 완전히 수용하는 것이다.",
      "key_point": "급진적 수용은 찬성(approval)이 아니다. 현실이 이러하다는 사실을 인정하는 것이지 현실이 옳다고 보는 것이 아니다.",
      "common_mistake": "급진적 수용이 변화를 포기하는 것이 아니다. 바꿀 수 없는 것을 수용하고, 바꿀 수 있는 것을 변화시킨다."
    }
  },
  {
    "id": "THIRDW_MB_022",
    "terminology": "마음챙김 기반 스트레스 감소 (Mindfulness-Based Stress Reduction, MBSR)",
    "terminology_ko": "마음챙김 기반 스트레스 감소",
    "terminology_en": "Mindfulness-Based Stress Reduction",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "Kabat-Zinn이 개발한 8주 구조화된 프로그램으로, 마음챙김 명상을 체계적으로 훈련하여 스트레스, 통증, 질병에 대한 대처 능력을 향상시킨다.",
    "definition_en": "An 8-week structured program developed by Kabat-Zinn that systematically trains mindfulness meditation to improve coping with stress, pain, and illness.",
    "significance": "마음챙김을 의료 현장에 최초로 체계적으로 도입하여, 심리치료에서 마음챙김 운동의 기반을 마련한 선구적 프로그램이다.",
    "key_researchers": [
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "MBSR을 개발하고 마음챙김의 서구 의료 적용을 개척함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      },
      {
        "name_ko": "바디스캔",
        "name_en": "Body Scan",
        "id": "THIRDW_BS_026"
      },
      {
        "name_ko": "마음챙김 기반 인지치료",
        "name_en": "MBCT",
        "id": "THIRDW_MC_027"
      },
      {
        "name_ko": "3세대 인지행동상담",
        "name_en": "Third-Wave CBT",
        "id": "THIRDW_TW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MBSR = 8주 프로그램 + Kabat-Zinn + 스트레스 감소 + 마음챙김 명상",
      "differential": "MBCT가 우울증 재발 방지에 초점인 반면, MBSR은 스트레스와 만성 통증 관리에 초점을 맞춘다.",
      "key_point": "8주 프로그램: 주 1회 2.5시간 수업 + 매일 45분 가정 연습 + 6주차 하루 종일 침묵 수련",
      "common_mistake": "MBSR이 종교적 명상 프로그램이 아니다. 세속적이고 과학적인 접근으로 설계되었다."
    }
  },
  {
    "id": "THIRDW_MF_023",
    "terminology": "마음챙김 (Mindfulness)",
    "terminology_ko": "마음챙김",
    "terminology_en": "Mindfulness",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "현재 순간의 경험에 의도적으로, 판단 없이 주의를 기울이는 것으로, 3세대 CBT의 다양한 접근에서 공통적으로 활용되는 핵심 개념이다.",
    "definition_en": "Intentionally paying attention to present-moment experience without judgment, a core concept commonly used across various third-wave CBT approaches.",
    "significance": "ACT, DBT, MBSR, MBCT 등 3세대 인지행동치료의 공통 기반이 되는 핵심 치료적 과정이다.",
    "key_researchers": [
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "마음챙김의 조작적 정의를 제시하고 서구 의학에 도입함"
      },
      {
        "name_ko": "마크 윌리엄스",
        "name_en": "Mark Williams",
        "contribution": "마음챙김을 인지치료에 통합함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음챙김 기반 스트레스 감소",
        "name_en": "MBSR",
        "id": "THIRDW_MB_022"
      },
      {
        "name_ko": "마음챙김 기술",
        "name_en": "Mindfulness Skills",
        "id": "THIRDW_MS_015"
      },
      {
        "name_ko": "현재 순간 접촉",
        "name_en": "Present Moment Contact",
        "id": "THIRDW_PM_024"
      },
      {
        "name_ko": "3세대 인지행동상담",
        "name_en": "Third-Wave CBT",
        "id": "THIRDW_TW_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마음챙김 = 의도적으로 + 현재 순간에 + 판단 없이 + 주의 기울이기 (Kabat-Zinn의 정의)",
      "differential": "이완 훈련이 긴장 감소를 목표로 하는 반면, 마음챙김은 현재 경험(긴장 포함)을 있는 그대로 관찰하는 것이다.",
      "key_point": "마음챙김의 3가지 핵심 요소: 의도(intention), 주의(attention), 태도(attitude: 비판단, 호기심, 친절)",
      "common_mistake": "마음챙김이 '마음을 비우는 것'이 아니다. 마음에 떠오르는 것을 판단 없이 관찰하는 것이다."
    }
  },
  {
    "id": "THIRDW_PM_024",
    "terminology": "현재 순간 접촉 (Present Moment Contact)",
    "terminology_ko": "현재 순간 접촉",
    "terminology_en": "Present Moment Contact",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정 중 하나로, 과거의 후회나 미래의 걱정에 빠지지 않고 '지금 여기'의 경험에 완전히 접촉하는 것이다.",
    "definition_en": "One of ACT's six core processes, fully contacting the 'here and now' experience without getting caught up in past regrets or future worries.",
    "significance": "과거/미래에 대한 반추와 걱정을 줄이고, 현재 맥락에서 효과적인 행동을 가능하게 하는 마음챙김의 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "현재 순간 접촉을 ACT의 핵심 과정으로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "현재 순간 접촉 = '지금 여기' (Now & Here)",
      "differential": "게슈탈트의 '지금-여기'가 과거 미해결 감정의 현재적 자각인 반면, ACT의 현재 순간 접촉은 경험과의 유연한 접촉이다.",
      "key_point": "과거나 미래에 대한 생각 자체가 문제가 아니라, 그것에 '빠져서' 현재를 놓치는 것이 문제이다.",
      "common_mistake": "현재 순간 접촉이 과거를 절대 생각하지 않는 것을 의미하지 않는다. 현재 시점에서 유연하게 주의를 조절하는 것이다."
    }
  },
  {
    "id": "THIRDW_SC_025",
    "terminology": "맥락으로서의 자기 (Self-as-Context)",
    "terminology_ko": "맥락으로서의 자기",
    "terminology_en": "Self-as-Context",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정 중 하나로, 사고와 감정의 내용(개념화된 자기)과 동일시하지 않고, 경험을 관찰하는 맥락으로서의 자기를 인식하는 것이다.",
    "definition_en": "One of ACT's six core processes, recognizing the self as the context that observes experiences rather than identifying with the content of thoughts and emotions (conceptualized self).",
    "significance": "자기 개념에 대한 융합에서 벗어나, 관찰자로서의 자기를 발견함으로써 심리적 유연성을 높인다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "맥락으로서의 자기 개념을 ACT에 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "인지적 탈융합",
        "name_en": "Cognitive Defusion",
        "id": "THIRDW_CD_005"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      }
    ],
    "sub_types": [
      {
        "name": "개념화된 자기 (Self-as-Content)",
        "description": "나에 대한 이야기, 자기 서술적 정체성"
      },
      {
        "name": "과정으로서의 자기 (Self-as-Process)",
        "description": "현재 진행 중인 자기 경험"
      },
      {
        "name": "맥락으로서의 자기 (Self-as-Context)",
        "description": "경험을 관찰하는 초월적 자기"
      }
    ],
    "quiz_hints": {
      "mnemonic": "맥락으로서의 자기 = '하늘' (날씨는 변하지만 하늘은 항상 있다)",
      "differential": "자존감이 자기에 대한 평가(내용)에 초점인 반면, 맥락으로서의 자기는 평가를 관찰하는 관점에 초점이다.",
      "key_point": "'나는 실패자다'(개념화된 자기) vs '나는 실패자라는 생각을 관찰하고 있다'(맥락으로서의 자기)",
      "common_mistake": "맥락으로서의 자기가 '자기 상실'이나 '무아'를 의미하지 않는다. 더 넓은 자기 관점을 발견하는 것이다."
    }
  },
  {
    "id": "THIRDW_BS_026",
    "terminology": "바디스캔 (Body Scan)",
    "terminology_ko": "바디스캔",
    "terminology_en": "Body Scan",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "MBSR의 핵심 명상 기법으로, 신체의 각 부위에 순차적으로 주의를 기울이며 신체 감각을 판단 없이 관찰하는 마음챙김 연습이다.",
    "definition_en": "A core MBSR meditation technique of sequentially directing attention to each body part and observing body sensations without judgment.",
    "significance": "신체 감각에 대한 마음챙김 능력을 키우고, 신체와 마음의 연결을 인식하게 하는 기초적 명상 연습이다.",
    "key_researchers": [
      {
        "name_ko": "존 카밧진",
        "name_en": "Jon Kabat-Zinn",
        "contribution": "바디스캔을 MBSR 프로그램의 핵심 연습으로 포함시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음챙김 기반 스트레스 감소",
        "name_en": "MBSR",
        "id": "THIRDW_MB_022"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "바디스캔 = 발끝부터 머리까지 '스캔'하듯 주의 이동",
      "differential": "점진적 근육 이완(PMR)이 근육의 긴장-이완을 반복하는 반면, 바디스캔은 감각을 관찰만 하고 변화시키려 하지 않는다.",
      "key_point": "목적은 이완이 아니라 '있는 그대로의 신체 감각 관찰'이다. 이완은 부수적 효과일 뿐이다.",
      "common_mistake": "바디스캔을 이완 기법으로 오해하면 안 된다. 불편한 감각도 판단 없이 관찰하는 것이 핵심이다."
    }
  },
  {
    "id": "THIRDW_MC_027",
    "terminology": "마음챙김 기반 인지치료 (Mindfulness-Based Cognitive Therapy, MBCT)",
    "terminology_ko": "마음챙김 기반 인지치료",
    "terminology_en": "Mindfulness-Based Cognitive Therapy",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "MBSR의 마음챙김 훈련과 인지치료의 요소를 결합한 8주 프로그램으로, 주로 우울증 재발 방지를 위해 개발되었다.",
    "definition_en": "An 8-week program combining MBSR mindfulness training with cognitive therapy elements, primarily developed to prevent depression relapse.",
    "significance": "마음챙김과 인지치료를 통합하여 우울증 재발 방지에 대한 강력한 경험적 근거를 확보한 치료 프로그램이다.",
    "key_researchers": [
      {
        "name_ko": "진델 시걸",
        "name_en": "Zindel Segal",
        "contribution": "MBCT를 공동 개발함"
      },
      {
        "name_ko": "마크 윌리엄스",
        "name_en": "Mark Williams",
        "contribution": "MBCT를 공동 개발함"
      },
      {
        "name_ko": "존 티스데일",
        "name_en": "John Teasdale",
        "contribution": "MBCT를 공동 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음챙김 기반 스트레스 감소",
        "name_en": "MBSR",
        "id": "THIRDW_MB_022"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "마음챙김",
        "name_en": "Mindfulness",
        "id": "THIRDW_MF_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MBCT = MBSR(마음챙김) + CBT(인지치료) = 우울증 재발 방지",
      "differential": "MBSR이 스트레스/통증에 초점인 반면, MBCT는 우울증 재발 방지에 초점을 맞춘다.",
      "key_point": "3회 이상 우울 삽화를 경험한 환자에게 재발 방지 효과가 약물치료와 동등한 수준으로 검증되었다.",
      "common_mistake": "MBCT가 급성 우울증 치료가 아닌 재발 방지를 위한 프로그램임을 구분해야 한다."
    }
  },
  {
    "id": "THIRDW_HX_028",
    "terminology": "헥사플렉스 (Hexaflex)",
    "terminology_ko": "헥사플렉스",
    "terminology_en": "Hexaflex",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT의 6가지 핵심 과정을 시각적으로 표현한 육각형 모형으로, 수용, 탈융합, 현재 순간, 맥락으로서의 자기, 가치, 전념적 행동이 상호 연결된다.",
    "definition_en": "A hexagonal model visually representing ACT's six core processes interconnected: acceptance, defusion, present moment, self-as-context, values, and committed action.",
    "significance": "ACT의 치료 과정을 한눈에 파악할 수 있게 하며, 각 과정이 독립적이지 않고 상호 연결되어 있음을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "헥사플렉스 모형을 ACT의 핵심 도식으로 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "심리적 유연성",
        "name_en": "Psychological Flexibility",
        "id": "THIRDW_PF_003"
      },
      {
        "name_ko": "심리적 경직성",
        "name_en": "Psychological Inflexibility",
        "id": "THIRDW_PI_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "헥사플렉스 = 6각형 중심에 '심리적 유연성' (6과정이 둘러쌈)",
      "differential": "Beck의 인지적 개념화가 하향식 도식이라면, 헥사플렉스는 순환적·상호작용적 모형이다.",
      "key_point": "왼쪽 3과정(수용, 탈융합, 현재순간)은 마음챙김/수용, 오른쪽 3과정(가치, 전념행동, 맥락자기)은 전념/행동 변화이다.",
      "common_mistake": "6가지 과정이 순서가 있는 것이 아니라, 내담자의 필요에 따라 유연하게 다룬다."
    }
  },
  {
    "id": "THIRDW_RF_029",
    "terminology": "관계 구성 이론 (Relational Frame Theory, RFT)",
    "terminology_ko": "관계 구성 이론",
    "terminology_en": "Relational Frame Theory",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "Hayes가 제안한 인간 언어와 인지의 기본 이론으로, 인간이 자의적으로 관계를 구성하는 능력이 언어적 고통의 원인이 되며, ACT의 이론적 토대이다.",
    "definition_en": "A basic theory of human language and cognition proposed by Hayes, stating that the human ability to arbitrarily construct relations causes verbal suffering, serving as ACT's theoretical foundation.",
    "significance": "ACT의 과학적 기반을 제공하며, 왜 인간이 언어적 존재로서 고통을 피할 수 없는지를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "관계 구성 이론을 개발하고 ACT의 이론적 기반으로 정립함"
      },
      {
        "name_ko": "더뮷 반스홈즈",
        "name_en": "Dermot Barnes-Holmes",
        "contribution": "RFT의 실험적 연구를 주도함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      },
      {
        "name_ko": "인지적 융합",
        "name_en": "Cognitive Fusion",
        "id": "THIRDW_CF_008"
      },
      {
        "name_ko": "인지적 탈융합",
        "name_en": "Cognitive Defusion",
        "id": "THIRDW_CD_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "RFT = 언어가 만드는 관계망 때문에 인간은 '생각으로 고통받는' 유일한 존재",
      "differential": "Skinner의 언어행동이 직접적 강화 이력으로 언어를 설명하는 반면, RFT는 자의적 관계 구성 능력으로 설명한다.",
      "key_point": "인간은 직접 경험하지 않은 것에도 언어를 통해 고통을 느낄 수 있다 (예: '실패'라는 단어만으로 고통)",
      "common_mistake": "RFT를 이해하지 않아도 ACT를 적용할 수 있지만, RFT를 이해하면 ACT의 기법이 '왜' 작동하는지 깊이 이해할 수 있다."
    }
  },
  {
    "id": "THIRDW_IE_030",
    "terminology": "대인관계효율성 기술 (Interpersonal Effectiveness Skills)",
    "terminology_ko": "대인관계효율성 기술",
    "terminology_en": "Interpersonal Effectiveness Skills",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 4가지 기술 모듈 중 하나로, 자기 존중을 유지하면서 대인관계에서 원하는 것을 효과적으로 요청하거나 거절하는 기술이다.",
    "definition_en": "One of DBT's four skill modules for effectively asking for what you want or saying no in relationships while maintaining self-respect.",
    "significance": "대인관계 문제가 정서조절 곤란과 밀접하게 연결된 BPD 내담자에게 구체적인 관계 기술을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "대인관계효율성 기술 모듈을 개발함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "DEAR MAN",
        "name_en": "DEAR MAN",
        "id": "THIRDW_DM_031"
      },
      {
        "name_ko": "마음챙김 기술",
        "name_en": "Mindfulness Skills",
        "id": "THIRDW_MS_015"
      }
    ],
    "sub_types": [
      {
        "name": "DEAR MAN",
        "description": "목표 효율성 - 원하는 것을 얻는 기술"
      },
      {
        "name": "GIVE",
        "description": "관계 효율성 - 관계를 유지하는 기술"
      },
      {
        "name": "FAST",
        "description": "자기존중 효율성 - 자존감을 지키는 기술"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대인관계 3가지: DEAR MAN(목표), GIVE(관계), FAST(자기존중)",
      "differential": "일반 사회기술훈련이 행동 레퍼토리 확대에 초점인 반면, DBT 대인관계 기술은 변증법적 균형을 강조한다.",
      "key_point": "세 가지 효율성 간의 균형이 중요: 원하는 것을 얻으면서(DEAR MAN) 관계도 유지하고(GIVE) 자존감도 지킨다(FAST).",
      "common_mistake": "대인관계효율성이 항상 자기 주장을 하는 것만을 의미하지 않는다. 때로는 양보하는 것이 효과적일 수 있다."
    }
  },
  {
    "id": "THIRDW_DM_031",
    "terminology": "DEAR MAN (DEAR MAN)",
    "terminology_ko": "DEAR MAN",
    "terminology_en": "DEAR MAN",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 대인관계효율성 기술에서 목표를 달성하기 위한 의사소통 기법의 약어로, 묘사(Describe), 표현(Express), 주장(Assert), 강화(Reinforce), 마음챙김(Mindful), 자신감(Appear confident), 협상(Negotiate)이다.",
    "definition_en": "An acronym for DBT interpersonal effectiveness communication technique: Describe, Express, Assert, Reinforce, (be) Mindful, Appear confident, Negotiate.",
    "significance": "원하는 것을 얻기 위한 체계적이고 구체적인 의사소통 단계를 제공하여, 대인관계 효율성을 크게 향상시킨다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "DEAR MAN 기술을 DBT에 도입함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대인관계효율성 기술",
        "name_en": "Interpersonal Effectiveness Skills",
        "id": "THIRDW_IE_030"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      }
    ],
    "sub_types": [
      {
        "name": "D (Describe)",
        "description": "상황을 객관적으로 묘사"
      },
      {
        "name": "E (Express)",
        "description": "감정과 의견을 표현"
      },
      {
        "name": "A (Assert)",
        "description": "원하는 것을 명확히 주장"
      },
      {
        "name": "R (Reinforce)",
        "description": "상대방이 응해줄 때의 이점 설명"
      },
      {
        "name": "M (Mindful)",
        "description": "주제에서 벗어나지 않고 집중"
      },
      {
        "name": "A (Appear confident)",
        "description": "자신감 있는 태도 유지"
      },
      {
        "name": "N (Negotiate)",
        "description": "대안적 해결책 제시 및 협상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "DEAR MAN = D(묘사)-E(표현)-A(주장)-R(강화)-M(마음챙김)-A(자신감)-N(협상)",
      "differential": "일반적 자기주장 훈련이 주장 행동에 초점인 반면, DEAR MAN은 협상과 마음챙김까지 포함하는 종합적 기술이다.",
      "key_point": "DEAR은 '무엇을 말할 것인가'이고, MAN은 '어떻게 말할 것인가'에 해당한다.",
      "common_mistake": "DEAR MAN이 공격적으로 주장하는 것이 아니라, 존중하면서도 효과적으로 요청하는 것이다."
    }
  },
  {
    "id": "THIRDW_CC_032",
    "terminology": "창조적 절망 (Creative Hopelessness)",
    "terminology_ko": "창조적 절망",
    "terminology_en": "Creative Hopelessness",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "ACT 초기 단계에서 내담자가 지금까지 사용해 온 통제 전략이 효과가 없었음을 직면하게 하여, 새로운 접근(수용)에 대한 개방성을 만드는 과정이다.",
    "definition_en": "An early ACT stage where clients confront the ineffectiveness of their previous control strategies, creating openness to a new approach (acceptance).",
    "significance": "경험 회피 전략의 비효과성을 인식하게 하여, 수용이라는 대안적 전략에 대한 동기를 형성하는 ACT의 핵심 치료 과정이다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 헤이즈",
        "name_en": "Steven C. Hayes",
        "contribution": "창조적 절망을 ACT의 초기 치료 과정으로 정립함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경험 회피",
        "name_en": "Experiential Avoidance",
        "id": "THIRDW_EA_006"
      },
      {
        "name_ko": "수용",
        "name_en": "Acceptance",
        "id": "THIRDW_AP_004"
      },
      {
        "name_ko": "수용전념치료",
        "name_en": "ACT",
        "id": "THIRDW_AC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "창조적 절망 = '기존 방법이 안 된다'는 인정 → '새로운 방법'으로의 문 열기",
      "differential": "일반적 절망이 포기인 반면, 창조적 절망은 통제 전략에 대한 절망이며 새로운 가능성의 시작이다.",
      "key_point": "'절망'이 부정적이지 않다. 효과 없는 통제 전략에 대한 절망이 수용이라는 대안을 열어준다.",
      "common_mistake": "창조적 절망이 내담자를 절망하게 만드는 것이 아니라, 기존 전략의 한계를 자연스럽게 인식하게 하는 것이다."
    }
  },
  {
    "id": "THIRDW_AC_033",
    "terminology": "ACCEPTS (ACCEPTS)",
    "terminology_ko": "ACCEPTS",
    "terminology_en": "ACCEPTS",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "DBT의 고통감내 위기 생존 기술 중 주의분산 기법의 약어로, 활동(Activities), 기여(Contributing), 비교(Comparisons), 감정(Emotions), 밀어내기(Pushing away), 생각(Thoughts), 감각(Sensations)이다.",
    "definition_en": "An acronym for DBT distress tolerance distraction techniques: Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, and Sensations.",
    "significance": "위기 상황에서 고통스러운 자극으로부터 주의를 전환하여 충동적 행동을 방지하는 구체적 기법 목록이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "ACCEPTS 기술을 DBT 위기 생존 기술로 체계화함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "고통감내 기술",
        "name_en": "Distress Tolerance Skills",
        "id": "THIRDW_DT_017"
      },
      {
        "name_ko": "TIPP 기술",
        "name_en": "TIPP Skills",
        "id": "THIRDW_TP_020"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      }
    ],
    "sub_types": [
      {
        "name": "A (Activities)",
        "description": "주의를 돌릴 수 있는 활동에 참여"
      },
      {
        "name": "C (Contributing)",
        "description": "타인을 돕는 행동으로 관점 전환"
      },
      {
        "name": "C (Comparisons)",
        "description": "더 어려운 상황과 비교하여 관점 전환"
      },
      {
        "name": "E (Emotions)",
        "description": "다른 감정을 유발하는 활동"
      },
      {
        "name": "P (Pushing away)",
        "description": "고통스러운 상황을 일시적으로 밀어내기"
      },
      {
        "name": "T (Thoughts)",
        "description": "다른 생각으로 마음 채우기"
      },
      {
        "name": "S (Sensations)",
        "description": "강한 감각 자극으로 주의 전환"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ACCEPTS = 활동-기여-비교-감정-밀어내기-생각-감각 (7가지 주의분산)",
      "differential": "TIPP가 신체 생리를 직접 변화시키는 반면, ACCEPTS는 주의를 다른 곳으로 전환하는 인지적 전략이다.",
      "key_point": "ACCEPTS는 장기 해결이 아닌 위기 순간의 일시적 주의분산 도구이다.",
      "common_mistake": "주의분산이 회피와 같다고 오해하면 안 된다. 위기 순간에 전략적으로 사용하는 단기적 대처 기술이다."
    }
  },
  {
    "id": "THIRDW_BI_034",
    "terminology": "생물사회이론 (Biosocial Theory)",
    "terminology_ko": "생물사회이론",
    "terminology_en": "Biosocial Theory",
    "category": "THIRDW",
    "category_name": "3세대 인지행동상담 (Third-Wave CBT)",
    "definition": "Linehan의 DBT에서 경계선 성격장애(BPD)의 발달을 설명하는 이론으로, 생물학적 정서적 취약성과 무효화 환경의 상호작용이 정서조절 곤란을 초래한다고 본다.",
    "definition_en": "Linehan's DBT theory explaining BPD development as the interaction between biological emotional vulnerability and an invalidating environment causing emotion regulation difficulties.",
    "significance": "BPD를 비난이 아닌 이해의 관점에서 설명하며, 생물학적 요인과 환경적 요인의 상호작용을 강조하는 통합적 모델이다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha M. Linehan",
        "contribution": "생물사회이론을 개발하여 BPD의 발달 기제를 설명함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "변증법적행동치료",
        "name_en": "DBT",
        "id": "THIRDW_DB_012"
      },
      {
        "name_ko": "타당화",
        "name_en": "Validation",
        "id": "THIRDW_VD_014"
      },
      {
        "name_ko": "정서조절 기술",
        "name_en": "Emotion Regulation Skills",
        "id": "THIRDW_ER_016"
      }
    ],
    "sub_types": [
      {
        "name": "정서적 취약성",
        "description": "높은 감수성, 강한 반응성, 느린 회복"
      },
      {
        "name": "무효화 환경",
        "description": "감정 표현을 무시, 처벌, 경시하는 환경"
      }
    ],
    "quiz_hints": {
      "mnemonic": "생물사회이론 = 생물학적 취약성 x 무효화 환경 = 정서조절 곤란(BPD)",
      "differential": "정신분석이 초기 대상관계로 BPD를 설명하는 반면, 생물사회이론은 정서적 취약성과 환경의 상호작용으로 설명한다.",
      "key_point": "정서적 취약성의 3요소: 높은 감수성(낮은 역치), 강한 반응성(큰 진폭), 느린 회복(긴 지속).",
      "common_mistake": "생물사회이론이 BPD를 환경 탓으로만 돌리는 것이 아니다. 생물학적 요인과 환경적 요인의 '상호작용'을 강조한다."
    }
  }
];

TERMS_DATA.FAMILY = [
  {
    "id": "FAMILY_FT_001",
    "terminology": "가족치료 (Family Therapy)",
    "terminology_ko": "가족치료",
    "terminology_en": "Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "개인의 문제를 가족 체계의 맥락에서 이해하고, 가족 구성원 간의 상호작용 패턴을 변화시킴으로써 문제를 해결하고자 하는 치료적 접근이다. 가족을 하나의 체계로 보고 체계 내 관계와 역동을 치료의 대상으로 삼는다.",
    "definition_en": "A therapeutic approach that understands individual problems within the context of the family system and seeks to resolve issues by changing interaction patterns among family members. It views the family as a system and targets relationships and dynamics within that system for treatment.",
    "significance": "개인의 증상을 관계적 맥락에서 재정의함으로써 심리치료의 패러다임을 개인에서 체계로 확장한 혁신적 접근이며, 현대 상담의 핵심 영역이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "가족체계이론을 개발하여 다세대 전수 과정과 자기분화 개념을 정립하였다"
      },
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "구조적 가족치료를 창시하여 가족 구조와 경계선 개념을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족체계",
        "name_en": "Family System",
        "id": "FAMILY_FS_002"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      },
      {
        "name_ko": "상담",
        "name_en": "Counseling",
        "id": "FOUND_CF_001"
      }
    ],
    "sub_types": [
      "구조적 가족치료",
      "전략적 가족치료",
      "다세대 가족치료",
      "경험적 가족치료",
      "해결중심 가족치료"
    ],
    "quiz_hints": {
      "mnemonic": "가족치료 = 개인이 아닌 '가족 체계' 전체를 치료 대상으로 본다",
      "differential": "개인상담은 개인 내면에 초점을 두지만, 가족치료는 가족 구성원 간 상호작용 패턴에 초점을 둔다",
      "key_point": "가족을 하나의 체계(system)로 보고, 개인의 문제는 체계의 역기능적 패턴에서 비롯된다고 본다",
      "common_mistake": "가족치료를 단순히 '가족 구성원 모두가 참여하는 상담'으로 오해하기 쉬우나, 핵심은 체계적 관점에서의 관계 변화이다"
    }
  },
  {
    "id": "FAMILY_FS_002",
    "terminology": "가족체계 (Family System)",
    "terminology_ko": "가족체계",
    "terminology_en": "Family System",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족을 상호의존적인 구성원들로 이루어진 하나의 유기적 체계로 보는 관점으로, 한 구성원의 변화가 전체 체계에 영향을 미치며 체계는 항상성을 유지하려는 경향이 있다고 본다.",
    "definition_en": "A perspective that views the family as an organic system composed of interdependent members, where changes in one member affect the entire system and the system tends to maintain homeostasis.",
    "significance": "일반체계이론을 가족에 적용한 것으로, 모든 가족치료 접근의 기본 전제이며 순환적 인과론의 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "루드비히 폰 베르탈란피",
        "name_en": "Ludwig von Bertalanffy",
        "contribution": "일반체계이론을 제안하여 가족체계 관점의 이론적 토대를 마련하였다"
      },
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "가족을 정서적 체계로 개념화하고 8가지 연동 개념을 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      },
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "FAMILY_HO_004"
      },
      {
        "name_ko": "순환적 인과론",
        "name_en": "Circular Causality",
        "id": "FAMILY_CC_015"
      },
      {
        "name_ko": "하위체계",
        "name_en": "Subsystem",
        "id": "FAMILY_SS_008"
      }
    ],
    "sub_types": [
      "개방체계",
      "폐쇄체계"
    ],
    "quiz_hints": {
      "mnemonic": "가족체계 = 모빌(mobile)처럼 한 부분이 움직이면 전체가 흔들린다",
      "differential": "개인주의적 관점은 문제의 원인을 개인 내부에서 찾지만, 체계적 관점은 관계 패턴에서 찾는다",
      "key_point": "전체는 부분의 합 이상이며, 한 구성원의 변화는 전체 체계에 파급 효과를 미친다",
      "common_mistake": "가족체계를 단순히 '가족 구성원의 집합'으로 이해하면 안 되며, 구성원 간 상호작용과 관계 패턴이 핵심이다"
    }
  },
  {
    "id": "FAMILY_MG_003",
    "terminology": "다세대 가족치료 (Multigenerational Family Therapy)",
    "terminology_ko": "다세대 가족치료",
    "terminology_en": "Multigenerational Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "보웬이 개발한 가족치료 접근으로, 현재 가족의 문제가 여러 세대에 걸쳐 전수된 정서적 패턴과 미분화에서 비롯된다고 보며, 자기분화를 핵심 치료 목표로 삼는다.",
    "definition_en": "A family therapy approach developed by Bowen that views current family problems as originating from emotional patterns and undifferentiation transmitted across multiple generations, with differentiation of self as the core therapeutic goal.",
    "significance": "가족 문제를 세대 간 전수의 관점에서 이해하는 독특한 시각을 제공하며, 가계도 활용과 자기분화 개념은 현대 가족치료의 핵심 도구이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "가족체계이론의 8가지 연동 개념(자기분화, 삼각관계 등)을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      },
      {
        "name_ko": "가계도",
        "name_en": "Genogram",
        "id": "FAMILY_GN_011"
      },
      {
        "name_ko": "다세대 전수 과정",
        "name_en": "Multigenerational Transmission Process",
        "id": "FAMILY_MT_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "다세대 = '대를 이어' 전해지는 정서적 패턴을 추적한다",
      "differential": "구조적 가족치료가 현재 가족의 구조에 초점을 두는 반면, 다세대 치료는 세대 간 전수된 패턴에 초점을 둔다",
      "key_point": "핵심 목표는 자기분화(differentiation of self) 수준을 높이는 것이다",
      "common_mistake": "보웬의 다세대 치료를 단순한 가족 역사 탐색으로 오해하기 쉬우나, 핵심은 정서적 과정의 세대 간 전수를 이해하고 자기분화를 증진하는 것이다"
    }
  },
  {
    "id": "FAMILY_HO_004",
    "terminology": "항상성 (Homeostasis)",
    "terminology_ko": "항상성",
    "terminology_en": "Homeostasis",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족체계가 현재의 균형 상태를 유지하려는 경향으로, 변화에 대한 저항의 기제로 작용한다. 역기능적 패턴도 항상성에 의해 유지될 수 있어 치료적 변화를 어렵게 만들 수 있다.",
    "definition_en": "The tendency of a family system to maintain its current state of equilibrium, functioning as a mechanism of resistance to change. Even dysfunctional patterns can be maintained through homeostasis, making therapeutic change difficult.",
    "significance": "가족이 왜 역기능적 패턴을 반복하는지를 설명하는 핵심 개념으로, 가족치료에서 변화와 저항을 이해하는 기본 틀이다.",
    "key_researchers": [
      {
        "name_ko": "돈 잭슨",
        "name_en": "Don Jackson",
        "contribution": "가족 항상성 개념을 가족치료에 최초로 적용하여 가족 규칙과 균형의 역할을 설명하였다"
      },
      {
        "name_ko": "월터 캐논",
        "name_en": "Walter Cannon",
        "contribution": "생리학에서 항상성 개념을 처음 제안하여 이후 체계이론에 적용되는 토대를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족체계",
        "name_en": "Family System",
        "id": "FAMILY_FS_002"
      },
      {
        "name_ko": "피드백 순환",
        "name_en": "Feedback Loop",
        "id": "FAMILY_FL_016"
      },
      {
        "name_ko": "순환적 인과론",
        "name_en": "Circular Causality",
        "id": "FAMILY_CC_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "항상성 = '항상' 같은 상태를 유지하려는 체계의 속성",
      "differential": "변형생성(morphogenesis)은 체계의 변화와 성장을, 항상성은 안정과 유지를 강조한다",
      "key_point": "역기능적 패턴도 항상성에 의해 유지되므로, 치료자는 체계의 항상성을 이해하고 도전해야 한다",
      "common_mistake": "항상성을 항상 긍정적인 것으로 오해하기 쉬우나, 역기능적 패턴의 유지에도 기여한다"
    }
  },
  {
    "id": "FAMILY_SF_005",
    "terminology": "구조적 가족치료 (Structural Family Therapy)",
    "terminology_ko": "구조적 가족치료",
    "terminology_en": "Structural Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "미누친이 개발한 가족치료 모델로, 가족의 조직 구조(하위체계, 경계선, 위계)를 평가하고 재구조화함으로써 가족 기능을 개선하고자 한다. 가족의 현재 상호작용 패턴을 직접 관찰하고 변화시키는 능동적 접근이다.",
    "definition_en": "A family therapy model developed by Minuchin that assesses and restructures the organizational structure of the family (subsystems, boundaries, hierarchy) to improve family functioning. It is an active approach that directly observes and modifies current interaction patterns.",
    "significance": "가족의 구조적 측면을 체계적으로 개념화한 최초의 모델로, 경계선과 하위체계 개념은 모든 가족치료 접근에서 널리 활용된다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "구조적 가족치료를 창시하고 경계선, 하위체계, 합류 등 핵심 개념을 정립하였다"
      },
      {
        "name_ko": "찰스 피시먼",
        "name_en": "Charles Fishman",
        "contribution": "미누친과 함께 구조적 가족치료의 기법을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "하위체계",
        "name_en": "Subsystem",
        "id": "FAMILY_SS_008"
      },
      {
        "name_ko": "합류",
        "name_en": "Joining",
        "id": "FAMILY_JN_017"
      },
      {
        "name_ko": "재구조화",
        "name_en": "Restructuring",
        "id": "FAMILY_RS_018"
      },
      {
        "name_ko": "실연",
        "name_en": "Enactment",
        "id": "FAMILY_EN_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구조적 = 가족의 '구조(뼈대)'를 바꿔서 기능을 개선한다",
      "differential": "전략적 가족치료는 문제 해결에 초점을 두지만, 구조적 가족치료는 가족의 조직적 구조 자체를 변화시키는 데 초점을 둔다",
      "key_point": "핵심 개념은 하위체계, 경계선, 위계이며, 치료 목표는 가족 구조의 재구조화이다",
      "common_mistake": "구조적 가족치료를 단순히 가족 구조를 분석만 하는 것으로 오해하기 쉬우나, 치료 장면에서 실연(enactment)을 통해 적극적으로 구조를 변화시키는 접근이다"
    }
  },
  {
    "id": "FAMILY_BD_006",
    "terminology": "경계선 (Boundary)",
    "terminology_ko": "경계선",
    "terminology_en": "Boundary",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 체계 내에서 하위체계 간 또는 가족과 외부 환경 간의 심리적 구분선으로, 구성원 간의 접촉과 정보 교환의 정도를 조절하는 규칙이다. 경계선은 명확한 것이 건강하며, 경직되거나 밀착된 경계선은 역기능을 초래한다.",
    "definition_en": "Psychological demarcation lines within the family system between subsystems or between the family and external environment that regulate the degree of contact and information exchange among members. Clear boundaries are healthy, while rigid or enmeshed boundaries lead to dysfunction.",
    "significance": "구조적 가족치료의 핵심 개념으로, 가족 기능의 건강성을 평가하는 가장 중요한 지표 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "경계선 개념을 체계화하고 명확한-밀착된-경직된 경계선의 연속체를 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "밀착",
        "name_en": "Enmeshment",
        "id": "FAMILY_EM_007"
      },
      {
        "name_ko": "유리",
        "name_en": "Disengagement",
        "id": "FAMILY_DG_020"
      },
      {
        "name_ko": "하위체계",
        "name_en": "Subsystem",
        "id": "FAMILY_SS_008"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      }
    ],
    "sub_types": [
      "명확한 경계선",
      "밀착된 경계선",
      "경직된 경계선"
    ],
    "quiz_hints": {
      "mnemonic": "경계선 = 가족 구성원 사이의 '울타리' - 너무 높으면 유리, 너무 낮으면 밀착",
      "differential": "밀착된 경계선은 과도한 개입과 자율성 부족을, 경직된 경계선은 정서적 단절과 무관심을 초래한다",
      "key_point": "건강한 가족은 명확한(clear) 경계선을 가지며, 이는 적절한 자율성과 친밀감의 균형을 의미한다",
      "common_mistake": "경계선을 물리적 거리로 오해하기 쉬우나, 심리적·정서적 구분선을 의미한다"
    }
  },
  {
    "id": "FAMILY_EM_007",
    "terminology": "밀착 (Enmeshment)",
    "terminology_ko": "밀착",
    "terminology_en": "Enmeshment",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 구성원 간의 경계선이 지나치게 모호하여 개인의 자율성과 독립성이 억제되고, 구성원 간에 과도한 정서적 개입과 반응성이 나타나는 관계 패턴이다.",
    "definition_en": "A relational pattern in which boundaries between family members are excessively diffuse, suppressing individual autonomy and independence, resulting in excessive emotional involvement and reactivity among members.",
    "significance": "가족의 역기능적 구조를 진단하는 핵심 개념으로, 특히 심신 장애 가족이나 거식증 가족에서 흔히 관찰되는 패턴이다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "밀착 개념을 제시하고 심신 장애 가족 연구에서 밀착의 역기능적 효과를 실증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "유리",
        "name_en": "Disengagement",
        "id": "FAMILY_DG_020"
      },
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "밀착 = '밀(密)착' 너무 가까이 붙어서 개인이 사라진다",
      "differential": "밀착은 경계선이 모호하여 과잉 개입되는 것이고, 유리(disengagement)는 경계선이 경직되어 정서적으로 단절되는 것이다",
      "key_point": "밀착된 가족에서는 한 구성원의 감정 변화가 즉각적으로 다른 구성원에게 전파된다",
      "common_mistake": "밀착을 단순히 '가까운 관계'나 '친밀감'으로 오해하기 쉬우나, 개인의 자율성이 억제되는 역기능적 패턴이다"
    }
  },
  {
    "id": "FAMILY_SS_008",
    "terminology": "하위체계 (Subsystem)",
    "terminology_ko": "하위체계",
    "terminology_en": "Subsystem",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 체계 내에서 특정 기능을 수행하는 소단위로, 부부 하위체계, 부모 하위체계, 형제 하위체계 등이 있다. 각 하위체계는 고유한 기능과 경계선을 갖는다.",
    "definition_en": "Smaller units within the family system that perform specific functions, including the spousal subsystem, parental subsystem, and sibling subsystem. Each subsystem has its own unique functions and boundaries.",
    "significance": "가족 구조를 분석하는 기본 단위로, 하위체계 간 경계선의 적절성이 가족 기능의 건강성을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "가족 하위체계의 유형과 기능을 체계적으로 분류하고 임상적 중요성을 규명하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족체계",
        "name_en": "Family System",
        "id": "FAMILY_FS_002"
      },
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "위계",
        "name_en": "Hierarchy",
        "id": "FAMILY_HI_021"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      }
    ],
    "sub_types": [
      "부부 하위체계",
      "부모 하위체계",
      "형제 하위체계"
    ],
    "quiz_hints": {
      "mnemonic": "하위체계 = 가족이라는 큰 체계 안의 '작은 팀들' (부부팀, 부모팀, 형제팀)",
      "differential": "부부 하위체계는 파트너 간 친밀감과 지지 기능을, 부모 하위체계는 자녀 양육과 훈육 기능을 담당한다",
      "key_point": "건강한 가족에서는 각 하위체계가 명확한 경계선으로 구분되면서도 적절히 소통한다",
      "common_mistake": "부부 하위체계와 부모 하위체계를 동일시하기 쉬우나, 같은 두 사람이라도 기능이 다른 별개의 하위체계이다"
    }
  },
  {
    "id": "FAMILY_DS_009",
    "terminology": "자기분화 (Differentiation of Self)",
    "terminology_ko": "자기분화",
    "terminology_en": "Differentiation of Self",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "보웬 이론의 핵심 개념으로, 사고와 감정을 구분할 수 있는 개인 내적 능력과 친밀감과 자율성을 동시에 유지할 수 있는 대인관계적 능력을 의미한다. 분화 수준이 높을수록 정서적 반응성이 낮고 스트레스 상황에서 합리적으로 기능할 수 있다.",
    "definition_en": "A core concept in Bowen theory referring to both the intrapsychic ability to distinguish between thinking and feeling, and the interpersonal ability to maintain both intimacy and autonomy simultaneously. Higher levels of differentiation are associated with lower emotional reactivity and better rational functioning under stress.",
    "significance": "보웬 가족치료의 궁극적 치료 목표이며, 개인의 심리적 건강과 관계 역량을 동시에 설명하는 통합적 개념이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "자기분화 개념을 개발하고 분화 척도(0-100)를 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      },
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      },
      {
        "name_ko": "정서적 단절",
        "name_en": "Emotional Cutoff",
        "id": "FAMILY_EC_013"
      },
      {
        "name_ko": "밀착",
        "name_en": "Enmeshment",
        "id": "FAMILY_EM_007"
      },
      {
        "name_ko": "융합",
        "name_en": "Fusion",
        "id": "FAMILY_FU_014"
      }
    ],
    "sub_types": [
      "개인 내적 분화 (사고와 감정의 분리)",
      "대인관계적 분화 (자율성과 친밀감의 균형)"
    ],
    "quiz_hints": {
      "mnemonic": "자기분화 = '나'를 잃지 않으면서 '우리'와 함께할 수 있는 능력",
      "differential": "자기분화가 낮으면 융합(fusion)이나 정서적 단절(emotional cutoff)로 나타나고, 높으면 친밀감과 자율성의 균형을 유지한다",
      "key_point": "분화는 두 차원이 있다: 사고-감정 분리(내적 차원), 자율성-친밀감 균형(대인관계 차원)",
      "common_mistake": "자기분화를 정서적 냉담함이나 관계 단절로 오해하기 쉬우나, 오히려 감정을 인식하면서도 사고적으로 기능하는 능력이다"
    }
  },
  {
    "id": "FAMILY_TR_010",
    "terminology": "삼각관계 (Triangulation)",
    "terminology_ko": "삼각관계",
    "terminology_en": "Triangulation",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "두 사람 간의 불안이 높아질 때 제3자를 관계에 끌어들여 긴장을 분산시키는 과정이다. 보웬 이론에서 가장 기본적인 관계 단위로, 분화 수준이 낮을수록 삼각관계가 빈번하게 형성된다.",
    "definition_en": "The process of drawing a third person into a two-person relationship to diffuse tension when anxiety between the two increases. In Bowen theory, it is the most basic relational unit, and triangulation occurs more frequently at lower levels of differentiation.",
    "significance": "가족 내 긴장과 갈등이 어떻게 유지되고 확산되는지를 설명하는 핵심 메커니즘으로, 치료에서 탈삼각화를 통해 건강한 이자관계를 회복할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "삼각관계 개념을 체계화하고 가족 관계 역동의 핵심 단위로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      },
      {
        "name_ko": "탈삼각화",
        "name_en": "Detriangulation",
        "id": "FAMILY_DT_022"
      },
      {
        "name_ko": "융합",
        "name_en": "Fusion",
        "id": "FAMILY_FU_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "삼각관계 = 둘이 불안하면 셋째를 끌어들여 '삼각형'을 만든다",
      "differential": "연합(coalition)은 제3자에 대항하여 두 사람이 동맹을 맺는 것이고, 삼각관계는 이자관계의 불안을 완화하기 위해 제3자를 끌어들이는 것이다",
      "key_point": "삼각관계는 일시적으로 불안을 감소시키지만, 근본적인 갈등 해결을 방해한다",
      "common_mistake": "삼각관계를 단순히 '세 사람의 관계'로 이해하기 쉬우나, 불안 관리를 위한 역동적 과정이다"
    }
  },
  {
    "id": "FAMILY_GN_011",
    "terminology": "가계도 (Genogram)",
    "terminology_ko": "가계도",
    "terminology_en": "Genogram",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "최소 3세대에 걸친 가족의 구조, 관계 패턴, 주요 사건을 도식화한 가족 지도로, 세대 간 반복되는 패턴과 정서적 과정을 시각적으로 파악할 수 있게 해주는 평가 도구이다.",
    "definition_en": "A family map that diagrams family structure, relationship patterns, and significant events across at least three generations, serving as an assessment tool that visually reveals intergenerational repeating patterns and emotional processes.",
    "significance": "다세대 가족치료의 핵심 평가 도구로, 현재 가족 문제의 세대 간 뿌리를 탐색하고 가족과 함께 패턴을 인식하는 데 활용된다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "다세대 전수 과정을 평가하기 위한 가계도 활용을 처음 체계화하였다"
      },
      {
        "name_ko": "모니카 맥골드릭",
        "name_en": "Monica McGoldrick",
        "contribution": "가계도의 표준화된 기호 체계와 활용법을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      },
      {
        "name_ko": "다세대 전수 과정",
        "name_en": "Multigenerational Transmission Process",
        "id": "FAMILY_MT_012"
      },
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가계도 = 가족의 '족보'에 관계 패턴까지 그려 넣은 지도",
      "differential": "가족계보도(family tree)는 혈연관계만 표시하지만, 가계도(genogram)는 관계 패턴, 정서적 역동까지 포함한다",
      "key_point": "최소 3세대를 포함해야 하며, 구조적 정보와 함께 관계 패턴과 주요 사건을 기록한다",
      "common_mistake": "가계도를 단순한 가족 구조도로 오해하기 쉬우나, 관계의 질과 정서적 패턴까지 포함하는 종합적 평가 도구이다"
    }
  },
  {
    "id": "FAMILY_MT_012",
    "terminology": "다세대 전수 과정 (Multigenerational Transmission Process)",
    "terminology_ko": "다세대 전수 과정",
    "terminology_en": "Multigenerational Transmission Process",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족의 정서적 패턴, 분화 수준, 관계 방식이 여러 세대에 걸쳐 전달되는 과정으로, 분화 수준이 낮은 부모의 자녀는 더 낮은 분화 수준을 보이는 경향이 있다.",
    "definition_en": "The process by which emotional patterns, levels of differentiation, and relational styles are transmitted across multiple generations, with children of less differentiated parents tending to show even lower levels of differentiation.",
    "significance": "현재 가족 문제의 세대 간 뿌리를 이해하는 데 필수적이며, 왜 특정 가족에서 세대를 넘어 유사한 문제가 반복되는지를 설명한다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "다세대 전수 과정을 보웬 이론의 8가지 연동 개념 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "가계도",
        "name_en": "Genogram",
        "id": "FAMILY_GN_011"
      },
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      },
      {
        "name_ko": "핵가족 정서체계",
        "name_en": "Nuclear Family Emotional System",
        "id": "FAMILY_NF_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "다세대 전수 = 분화 수준이 대를 이어 '전수'되는 것",
      "differential": "가족 투사 과정이 한 세대 내에서 일어나는 과정이라면, 다세대 전수 과정은 여러 세대에 걸쳐 일어나는 과정이다",
      "key_point": "분화 수준이 낮은 부모로부터 가장 많은 투사를 받은 자녀가 더 낮은 분화 수준을 보인다",
      "common_mistake": "다세대 전수를 유전적 전달로 오해하기 쉬우나, 정서적 과정과 관계 패턴의 전수이다"
    }
  },
  {
    "id": "FAMILY_EC_013",
    "terminology": "정서적 단절 (Emotional Cutoff)",
    "terminology_ko": "정서적 단절",
    "terminology_en": "Emotional Cutoff",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "원가족과의 미해결된 정서적 융합을 다루기 위해 물리적 또는 심리적으로 거리를 두는 방식이다. 겉보기에는 독립적으로 보이지만 실제로는 분화되지 않은 상태를 반영한다.",
    "definition_en": "A way of managing unresolved emotional fusion with one's family of origin by creating physical or psychological distance. Although it may appear independent on the surface, it actually reflects an undifferentiated state.",
    "significance": "분화와 독립의 차이를 이해하는 데 핵심적인 개념으로, 원가족과의 건강한 관계 재정립의 필요성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "정서적 단절을 미분화의 한 표현으로 개념화하고 8가지 연동 개념에 포함시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "융합",
        "name_en": "Fusion",
        "id": "FAMILY_FU_014"
      },
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정서적 단절 = '도망'으로 얻은 거짓 독립 - 진짜 분화가 아니다",
      "differential": "자기분화는 관계를 유지하면서 자율성을 확보하는 것이고, 정서적 단절은 관계를 끊어서 불안을 회피하는 것이다",
      "key_point": "물리적 거리가 정서적 분화를 의미하지 않으며, 단절된 관계는 새로운 관계에서 재현될 수 있다",
      "common_mistake": "정서적 단절을 건강한 독립으로 오해하기 쉬우나, 미해결된 융합의 다른 표현이다"
    }
  },
  {
    "id": "FAMILY_FU_014",
    "terminology": "융합 (Fusion)",
    "terminology_ko": "융합",
    "terminology_en": "Fusion",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "두 사람 사이에서 정서적 경계가 소실되어 서로의 사고와 감정이 구분되지 않는 상태로, 자기분화의 반대 극단이다. 융합된 관계에서는 상대의 감정에 자동적으로 반응하며 독립적 사고가 어렵다.",
    "definition_en": "A state in which emotional boundaries between two people dissolve so that their thoughts and feelings become indistinguishable, representing the opposite extreme of differentiation of self. In fused relationships, there is automatic reactivity to the other's emotions and difficulty with independent thinking.",
    "significance": "자기분화의 개념을 이해하는 핵심 대비 개념으로, 역기능적 관계 패턴의 근본 원인을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "융합과 분화를 연속선 위의 양 극단으로 개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "밀착",
        "name_en": "Enmeshment",
        "id": "FAMILY_EM_007"
      },
      {
        "name_ko": "정서적 단절",
        "name_en": "Emotional Cutoff",
        "id": "FAMILY_EC_013"
      },
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "융합 = 두 사람이 '녹아서' 하나가 된 상태 - 나와 너의 구분이 없다",
      "differential": "밀착(enmeshment)은 구조적 가족치료의 개념이고, 융합(fusion)은 보웬 이론의 개념이지만 유사한 현상을 설명한다",
      "key_point": "융합은 자기분화의 반대 개념으로, 감정과 사고가 분리되지 않고 타인의 감정에 자동적으로 반응하는 상태이다",
      "common_mistake": "융합을 긍정적인 '하나됨'으로 오해하기 쉬우나, 개인의 자율적 기능을 방해하는 역기능적 패턴이다"
    }
  },
  {
    "id": "FAMILY_CC_015",
    "terminology": "순환적 인과론 (Circular Causality)",
    "terminology_ko": "순환적 인과론",
    "terminology_en": "Circular Causality",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 내 문제의 원인을 하나의 선형적 원인-결과가 아닌, 구성원 간의 상호작용이 순환적으로 영향을 주고받는 과정으로 이해하는 관점이다. A가 B에게 영향을 미치고 동시에 B도 A에게 영향을 미친다.",
    "definition_en": "A perspective that understands causes of family problems not as linear cause-and-effect but as a circular process in which members' interactions mutually influence each other. A influences B while simultaneously B influences A.",
    "significance": "선형적 인과론(누가 원인인가)에서 벗어나 체계적 사고로 전환하는 가족치료의 기본 인식론이다.",
    "key_researchers": [
      {
        "name_ko": "그레고리 베이트슨",
        "name_en": "Gregory Bateson",
        "contribution": "의사소통이론과 사이버네틱스를 가족 연구에 적용하여 순환적 인과론의 토대를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "가족체계",
        "name_en": "Family System",
        "id": "FAMILY_FS_002"
      },
      {
        "name_ko": "피드백 순환",
        "name_en": "Feedback Loop",
        "id": "FAMILY_FL_016"
      },
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "FAMILY_HO_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "순환적 인과 = '닭이 먼저냐 달걀이 먼저냐' - 원인과 결과가 순환한다",
      "differential": "선형적 인과론은 A→B처럼 원인이 결과를 일으킨다고 보지만, 순환적 인과론은 A↔B처럼 상호 영향을 주고받는다고 본다",
      "key_point": "가족 문제에서 '누가 원인인가'를 묻는 대신 '어떤 상호작용 패턴이 문제를 유지하는가'를 묻는다",
      "common_mistake": "순환적 인과론을 '아무도 책임이 없다'는 의미로 오해하기 쉬우나, 상호적 영향을 인식하는 관점이다"
    }
  },
  {
    "id": "FAMILY_FL_016",
    "terminology": "피드백 순환 (Feedback Loop)",
    "terminology_ko": "피드백 순환",
    "terminology_en": "Feedback Loop",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "체계 내에서 출력이 다시 입력으로 되돌아가 체계의 작동에 영향을 미치는 순환 과정으로, 부적 피드백(안정 유지)과 정적 피드백(변화 촉진)이 있다.",
    "definition_en": "A circular process in which the output of a system feeds back as input to affect the system's operation, including negative feedback (maintaining stability) and positive feedback (promoting change).",
    "significance": "가족 체계가 어떻게 안정을 유지하거나 변화하는지를 설명하는 사이버네틱스의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "노버트 위너",
        "name_en": "Norbert Wiener",
        "contribution": "사이버네틱스에서 피드백 개념을 체계화하여 체계이론의 토대를 마련하였다"
      },
      {
        "name_ko": "그레고리 베이트슨",
        "name_en": "Gregory Bateson",
        "contribution": "피드백 개념을 인간 의사소통과 가족 체계에 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "항상성",
        "name_en": "Homeostasis",
        "id": "FAMILY_HO_004"
      },
      {
        "name_ko": "순환적 인과론",
        "name_en": "Circular Causality",
        "id": "FAMILY_CC_015"
      },
      {
        "name_ko": "가족체계",
        "name_en": "Family System",
        "id": "FAMILY_FS_002"
      }
    ],
    "sub_types": [
      "부적 피드백 (Negative Feedback)",
      "정적 피드백 (Positive Feedback)"
    ],
    "quiz_hints": {
      "mnemonic": "피드백 순환 = 체계의 '되먹임' - 결과가 원인으로 돌아간다",
      "differential": "부적 피드백은 체계를 원래 상태로 되돌리고(항상성), 정적 피드백은 변화를 증폭시킨다",
      "key_point": "부적(negative)은 '나쁜 것'이 아니라 '편차를 줄이는 것'을, 정적(positive)은 '좋은 것'이 아니라 '편차를 증폭하는 것'을 의미한다",
      "common_mistake": "부적 피드백과 정적 피드백을 '나쁜/좋은' 피드백으로 오해하기 쉬우나, 안정/변화 기능을 의미한다"
    }
  },
  {
    "id": "FAMILY_JN_017",
    "terminology": "합류 (Joining)",
    "terminology_ko": "합류",
    "terminology_en": "Joining",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "구조적 가족치료에서 치료자가 가족 체계에 참여하여 가족과 치료적 동맹을 형성하는 과정이다. 치료자는 가족의 문화와 스타일에 맞추면서도 치료적 리더십을 유지한다.",
    "definition_en": "The process in structural family therapy by which the therapist enters the family system and forms a therapeutic alliance with the family. The therapist adapts to the family's culture and style while maintaining therapeutic leadership.",
    "significance": "구조적 가족치료의 첫 번째이자 가장 중요한 치료 과정으로, 합류 없이는 재구조화가 불가능하다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "합류 기법을 구조적 가족치료의 핵심 치료 과정으로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "재구조화",
        "name_en": "Restructuring",
        "id": "FAMILY_RS_018"
      },
      {
        "name_ko": "실연",
        "name_en": "Enactment",
        "id": "FAMILY_EN_019"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [
      "유지(maintenance)",
      "추적(tracking)",
      "모방(mimesis)"
    ],
    "quiz_hints": {
      "mnemonic": "합류 = 치료자가 가족이라는 '강물'에 합류하여 함께 흐르는 것",
      "differential": "합류는 가족 체계에 참여하는 것이고, 재구조화는 가족 구조를 변화시키는 것이다. 합류가 먼저, 재구조화가 나중이다",
      "key_point": "치료자는 가족에 합류하면서도 치료적 위치를 유지해야 하며, 과도한 합류는 치료적 객관성을 잃게 한다",
      "common_mistake": "합류를 단순히 '라포 형성'으로만 이해하기 쉬우나, 가족 체계에 실제로 참여하여 내부에서 변화를 이끄는 적극적 과정이다"
    }
  },
  {
    "id": "FAMILY_RS_018",
    "terminology": "재구조화 (Restructuring)",
    "terminology_ko": "재구조화",
    "terminology_en": "Restructuring",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "구조적 가족치료의 핵심 치료 전략으로, 역기능적인 가족 구조(경계선, 위계, 동맹)를 변화시켜 보다 적응적인 가족 조직으로 재편하는 과정이다.",
    "definition_en": "The core therapeutic strategy in structural family therapy that modifies dysfunctional family structures (boundaries, hierarchy, alliances) to reorganize the family into a more adaptive configuration.",
    "significance": "구조적 가족치료의 궁극적 치료 목표이며, 가족의 조직적 변화를 통해 개인 증상의 완화를 추구하는 핵심 전략이다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "재구조화 기법을 개발하고 체계적으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "합류",
        "name_en": "Joining",
        "id": "FAMILY_JN_017"
      },
      {
        "name_ko": "실연",
        "name_en": "Enactment",
        "id": "FAMILY_EN_019"
      },
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      }
    ],
    "sub_types": [
      "경계선 만들기",
      "균형 깨뜨리기",
      "보완성에 도전하기"
    ],
    "quiz_hints": {
      "mnemonic": "재구조화 = 가족이라는 '건물'의 뼈대를 다시 세우는 것",
      "differential": "합류(joining)는 가족 체계에 참여하는 과정이고, 재구조화(restructuring)는 가족 구조를 실제로 변화시키는 과정이다",
      "key_point": "재구조화는 합류가 선행되어야 하며, 경계선 조정, 위계 재정립, 동맹 변화 등의 기법을 포함한다",
      "common_mistake": "재구조화를 가족에게 '올바른 구조'를 가르치는 것으로 오해하기 쉬우나, 치료 장면에서 실연을 통해 새로운 상호작용을 경험하게 하는 것이다"
    }
  },
  {
    "id": "FAMILY_EN_019",
    "terminology": "실연 (Enactment)",
    "terminology_ko": "실연",
    "terminology_en": "Enactment",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "구조적 가족치료에서 치료자가 가족 구성원들에게 치료 장면에서 실제로 상호작용하도록 요청하여 가족의 상호작용 패턴을 직접 관찰하고 개입하는 기법이다.",
    "definition_en": "A technique in structural family therapy in which the therapist asks family members to interact with each other during the session to directly observe and intervene in the family's interaction patterns.",
    "significance": "가족의 실제 상호작용 패턴을 치료실에서 재현하여 관찰하고 즉각적으로 변화시킬 수 있는 강력한 치료 도구이다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "실연 기법을 구조적 가족치료의 핵심 기법으로 개발하고 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "재구조화",
        "name_en": "Restructuring",
        "id": "FAMILY_RS_018"
      },
      {
        "name_ko": "합류",
        "name_en": "Joining",
        "id": "FAMILY_JN_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실연 = 가족이 치료실에서 평소 패턴을 '실제로 연기'하는 것",
      "differential": "가족 조각(family sculpting)은 관계를 신체적으로 표현하는 것이고, 실연(enactment)은 실제 상호작용을 재현하는 것이다",
      "key_point": "치료자는 가족에 대해 '이야기하는 것'이 아니라 가족이 직접 '보여주도록' 요청한다",
      "common_mistake": "실연을 역할극(role play)과 혼동하기 쉬우나, 실연은 실제 가족 구성원 간의 실제 상호작용이다"
    }
  },
  {
    "id": "FAMILY_DG_020",
    "terminology": "유리 (Disengagement)",
    "terminology_ko": "유리",
    "terminology_en": "Disengagement",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 구성원 간의 경계선이 지나치게 경직되어 정서적 교류와 지지가 부족하고, 구성원들이 서로에 대해 무관심하거나 단절된 관계 패턴이다. 밀착의 반대 극단이다.",
    "definition_en": "A relational pattern in which boundaries between family members are excessively rigid, resulting in lack of emotional exchange and support, with members being indifferent to or disconnected from each other. It is the opposite extreme of enmeshment.",
    "significance": "밀착과 함께 가족 경계선의 역기능적 극단을 대표하며, 구성원의 고립감과 소속감 부족을 초래한다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "유리 개념을 밀착과 대비하여 경계선 연속체의 한 극단으로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "밀착",
        "name_en": "Enmeshment",
        "id": "FAMILY_EM_007"
      },
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "유리 = '유리(遊離)' 떨어져서 따로 노는 가족",
      "differential": "밀착은 경계선이 지나치게 모호한 것이고, 유리는 경계선이 지나치게 경직된 것이다",
      "key_point": "유리된 가족에서는 한 구성원에게 위기가 생겨도 다른 구성원이 반응하지 않을 수 있다",
      "common_mistake": "유리를 건강한 독립으로 오해하기 쉬우나, 필요한 정서적 지지와 연결이 부재한 역기능적 패턴이다"
    }
  },
  {
    "id": "FAMILY_HI_021",
    "terminology": "위계 (Hierarchy)",
    "terminology_ko": "위계",
    "terminology_en": "Hierarchy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 체계 내에서 권력과 책임의 분배 구조로, 건강한 가족에서는 부모가 자녀보다 상위 위계에 위치하여 적절한 권위와 보호를 제공한다.",
    "definition_en": "The distribution structure of power and responsibility within the family system, where in healthy families parents occupy a higher position than children, providing appropriate authority and protection.",
    "significance": "구조적 가족치료에서 가족 기능을 평가하는 핵심 차원으로, 위계의 역전이나 혼란은 많은 가족 문제의 원인이 된다.",
    "key_researchers": [
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "가족 위계의 중요성을 구조적 가족치료의 핵심 평가 요소로 정립하였다"
      },
      {
        "name_ko": "제이 헤일리",
        "name_en": "Jay Haley",
        "contribution": "가족 내 권력 구조와 위계의 역할을 전략적 관점에서 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "하위체계",
        "name_en": "Subsystem",
        "id": "FAMILY_SS_008"
      },
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "부모화",
        "name_en": "Parentification",
        "id": "FAMILY_PF_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "위계 = 가족 안의 '계급 구조' - 부모가 위, 자녀가 아래",
      "differential": "위계는 가족 내 권력 분배의 구조적 측면이고, 동맹(alliance)은 가족 내 정서적 연합의 관계적 측면이다",
      "key_point": "건강한 가족에서 부모는 명확한 위계를 유지하면서도 자녀에게 적절한 자율성을 허용한다",
      "common_mistake": "위계를 권위주의적 지배로 오해하기 쉬우나, 적절한 위계는 안전과 보호를 제공하는 기능적 구조이다"
    }
  },
  {
    "id": "FAMILY_DT_022",
    "terminology": "탈삼각화 (Detriangulation)",
    "terminology_ko": "탈삼각화",
    "terminology_en": "Detriangulation",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "삼각관계에서 빠져나와 불안에도 불구하고 직접적인 이자관계를 유지하는 과정으로, 보웬 치료에서 자기분화를 증진시키는 핵심 치료 과정이다.",
    "definition_en": "The process of extricating oneself from a triangle and maintaining direct two-person relationships despite anxiety, serving as a core therapeutic process in Bowen therapy for promoting differentiation of self.",
    "significance": "삼각관계의 역기능적 패턴을 해소하고 건강한 이자관계를 회복하는 보웬 치료의 핵심 목표이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "탈삼각화를 자기분화 증진의 핵심 치료적 과정으로 개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      },
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "다세대 가족치료",
        "name_en": "Multigenerational Family Therapy",
        "id": "FAMILY_MG_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "탈삼각화 = 삼각형에서 '탈출'하여 1:1 관계를 유지한다",
      "differential": "삼각관계는 불안을 회피하기 위해 제3자를 끌어들이는 것이고, 탈삼각화는 불안을 감당하면서 직접적 관계를 유지하는 것이다",
      "key_point": "탈삼각화의 핵심은 불안을 회피하지 않고 이자관계 내에서 직접 다루는 것이다",
      "common_mistake": "탈삼각화를 제3자와의 관계를 끊는 것으로 오해하기 쉬우나, 모든 관계를 유지하면서 삼각화 패턴만 변화시키는 것이다"
    }
  },
  {
    "id": "FAMILY_NF_023",
    "terminology": "핵가족 정서체계 (Nuclear Family Emotional System)",
    "terminology_ko": "핵가족 정서체계",
    "terminology_en": "Nuclear Family Emotional System",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "보웬 이론의 개념으로, 핵가족 내에서 미분화로 인한 불안이 표현되는 네 가지 패턴을 설명한다: 부부 갈등, 한 배우자의 역기능, 자녀에 대한 투사, 정서적 거리두기이다.",
    "definition_en": "A Bowen theory concept describing four patterns through which anxiety from undifferentiation is expressed within the nuclear family: marital conflict, dysfunction in one spouse, projection onto a child, and emotional distancing.",
    "significance": "미분화된 가족에서 불안이 어떻게 구체적 증상으로 나타나는지를 설명하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "핵가족 정서체계를 8가지 연동 개념 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "가족투사과정",
        "name_en": "Family Projection Process",
        "id": "FAMILY_FP_025"
      },
      {
        "name_ko": "다세대 전수 과정",
        "name_en": "Multigenerational Transmission Process",
        "id": "FAMILY_MT_012"
      },
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      }
    ],
    "sub_types": [
      "부부 갈등",
      "한 배우자의 역기능",
      "자녀에 대한 투사",
      "정서적 거리두기"
    ],
    "quiz_hints": {
      "mnemonic": "핵가족 정서체계의 4가지 패턴 = 부부 싸움, 한쪽 아픔, 자녀에 떠넘김, 거리두기",
      "differential": "가족투사과정은 자녀에 대한 투사에 특화된 개념이고, 핵가족 정서체계는 4가지 패턴을 모두 포함하는 상위 개념이다",
      "key_point": "네 가지 패턴 모두 미분화(융합)에서 비롯된 불안을 관리하는 방식이다",
      "common_mistake": "네 가지 패턴이 독립적으로 나타난다고 오해하기 쉬우나, 한 가족 내에서 복합적으로 작용할 수 있다"
    }
  },
  {
    "id": "FAMILY_PF_024",
    "terminology": "부모화 (Parentification)",
    "terminology_ko": "부모화",
    "terminology_en": "Parentification",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "자녀가 가족 내에서 부모의 역할을 대신 수행하는 역기능적 가족 구조로, 자녀가 동생을 돌보거나 부모의 정서적 필요를 충족시키는 역할을 맡게 된다. 세대 간 위계의 역전을 나타낸다.",
    "definition_en": "A dysfunctional family structure in which a child assumes parental roles within the family, such as caring for siblings or meeting the emotional needs of parents. It represents a reversal of generational hierarchy.",
    "significance": "세대 간 경계선 침범의 대표적 사례로, 자녀의 발달과 정서적 건강에 부정적 영향을 미치는 가족 역기능 패턴이다.",
    "key_researchers": [
      {
        "name_ko": "이반 보스조르메니-너지",
        "name_en": "Ivan Boszormenyi-Nagy",
        "contribution": "맥락적 가족치료에서 부모화 개념을 체계적으로 발전시키고 세대 간 공정성의 관점에서 분석하였다"
      },
      {
        "name_ko": "살바도르 미누친",
        "name_en": "Salvador Minuchin",
        "contribution": "구조적 관점에서 부모화를 위계 역전의 문제로 개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위계",
        "name_en": "Hierarchy",
        "id": "FAMILY_HI_021"
      },
      {
        "name_ko": "경계선",
        "name_en": "Boundary",
        "id": "FAMILY_BD_006"
      },
      {
        "name_ko": "하위체계",
        "name_en": "Subsystem",
        "id": "FAMILY_SS_008"
      }
    ],
    "sub_types": [
      "도구적 부모화 (가사, 동생 돌봄 등)",
      "정서적 부모화 (부모의 정서적 필요 충족)"
    ],
    "quiz_hints": {
      "mnemonic": "부모화 = 자녀가 '부모 되기' - 어린이가 어른 역할을 한다",
      "differential": "정서적 부모화는 부모의 감정적 필요를 충족시키는 것이고, 도구적 부모화는 가사나 돌봄 등 실질적 역할을 수행하는 것이다",
      "key_point": "부모화는 세대 간 위계의 역전으로, 자녀의 정상적 발달 과업을 방해한다",
      "common_mistake": "가정에서 자녀에게 적절한 책임을 부여하는 것과 부모화를 혼동하기 쉬우나, 부모화는 발달 수준에 부적절한 과도한 역할 부여이다"
    }
  },
  {
    "id": "FAMILY_FP_025",
    "terminology": "가족투사과정 (Family Projection Process)",
    "terminology_ko": "가족투사과정",
    "terminology_en": "Family Projection Process",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "보웬 이론의 개념으로, 부모가 자신의 미분화와 불안을 특정 자녀에게 투사하여 그 자녀의 분화 수준을 낮추는 과정이다. 투사를 가장 많이 받은 자녀가 가장 낮은 분화 수준을 보인다.",
    "definition_en": "A Bowen theory concept describing the process by which parents project their undifferentiation and anxiety onto a specific child, lowering that child's level of differentiation. The child who receives the most projection shows the lowest level of differentiation.",
    "significance": "특정 자녀에게 증상이 집중되는 현상을 설명하며, 다세대 전수 과정의 한 세대 내 메커니즘이다.",
    "key_researchers": [
      {
        "name_ko": "머레이 보웬",
        "name_en": "Murray Bowen",
        "contribution": "가족투사과정을 8가지 연동 개념 중 하나로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기분화",
        "name_en": "Differentiation of Self",
        "id": "FAMILY_DS_009"
      },
      {
        "name_ko": "핵가족 정서체계",
        "name_en": "Nuclear Family Emotional System",
        "id": "FAMILY_NF_023"
      },
      {
        "name_ko": "다세대 전수 과정",
        "name_en": "Multigenerational Transmission Process",
        "id": "FAMILY_MT_012"
      },
      {
        "name_ko": "삼각관계",
        "name_en": "Triangulation",
        "id": "FAMILY_TR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가족투사 = 부모의 불안을 자녀에게 '투사(쏘아보내기)'하는 과정",
      "differential": "삼각관계는 불안 관리를 위해 제3자를 끌어들이는 과정이고, 가족투사는 부모의 미분화를 특정 자녀에게 전달하는 과정이다",
      "key_point": "투사 대상이 되는 자녀는 가장 의존적이거나 취약한 자녀인 경우가 많다",
      "common_mistake": "가족투사를 의식적 행동으로 오해하기 쉬우나, 대부분 무의식적으로 일어나는 자동적 정서 과정이다"
    }
  },
  {
    "id": "FAMILY_ST_026",
    "terminology": "전략적 가족치료 (Strategic Family Therapy)",
    "terminology_ko": "전략적 가족치료",
    "terminology_en": "Strategic Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "헤일리와 마다네스가 발전시킨 가족치료 모델로, 치료자가 가족의 문제 해결을 위한 구체적인 전략과 지시를 설계하여 가족의 상호작용 패턴을 변화시키는 접근이다. 문제의 원인보다 해결에 초점을 둔다.",
    "definition_en": "A family therapy model developed by Haley and Madanes in which the therapist designs specific strategies and directives to change the family's interaction patterns for problem resolution. It focuses on solutions rather than causes of problems.",
    "significance": "문제 해결 중심의 실용적 접근으로, 단기 치료의 효율성과 치료자의 적극적 역할을 강조한 혁신적 모델이다.",
    "key_researchers": [
      {
        "name_ko": "제이 헤일리",
        "name_en": "Jay Haley",
        "contribution": "전략적 가족치료를 체계화하고 지시적 기법과 역설적 개입을 개발하였다"
      },
      {
        "name_ko": "클로에 마다네스",
        "name_en": "Cloe Madanes",
        "contribution": "전략적 가족치료에 가장(pretend) 기법을 도입하고 이론을 발전시켰다"
      },
      {
        "name_ko": "밀턴 에릭슨",
        "name_en": "Milton Erickson",
        "contribution": "전략적 치료의 이론적 영감을 제공하고 역설적 기법의 기초를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역설적 개입",
        "name_en": "Paradoxical Intervention",
        "id": "FAMILY_PI_027"
      },
      {
        "name_ko": "지시",
        "name_en": "Directive",
        "id": "FAMILY_DR_028"
      },
      {
        "name_ko": "구조적 가족치료",
        "name_en": "Structural Family Therapy",
        "id": "FAMILY_SF_005"
      },
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      }
    ],
    "sub_types": [
      "MRI 모델",
      "헤일리/마다네스 모델",
      "밀란 모델"
    ],
    "quiz_hints": {
      "mnemonic": "전략적 = 치료자가 '전략(작전)'을 세워서 문제를 해결한다",
      "differential": "구조적 가족치료는 가족의 구조를 변화시키는 데 초점을 두지만, 전략적 가족치료는 문제 해결을 위한 구체적 전략 설계에 초점을 둔다",
      "key_point": "치료자가 주도적으로 전략을 설계하며, 역설적 개입과 지시적 기법이 특징적이다",
      "common_mistake": "전략적 가족치료를 단순히 '계획적인 치료'로 오해하기 쉬우나, 특정 이론적 전통에 기반한 독립적 치료 모델이다"
    }
  },
  {
    "id": "FAMILY_PI_027",
    "terminology": "역설적 개입 (Paradoxical Intervention)",
    "terminology_ko": "역설적 개입",
    "terminology_en": "Paradoxical Intervention",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "증상이나 문제 행동을 의도적으로 처방하거나 강화하도록 지시하여, 내담자가 증상에 대한 통제력을 경험하고 결과적으로 증상이 감소하도록 하는 치료 기법이다.",
    "definition_en": "A therapeutic technique that deliberately prescribes or reinforces symptoms or problem behaviors, enabling the client to experience control over the symptoms and consequently leading to symptom reduction.",
    "significance": "저항이 강한 가족에게 효과적인 기법으로, 변화에 대한 저항을 치료적으로 활용하는 창의적 접근이다.",
    "key_researchers": [
      {
        "name_ko": "제이 헤일리",
        "name_en": "Jay Haley",
        "contribution": "역설적 개입을 전략적 가족치료의 핵심 기법으로 체계화하였다"
      },
      {
        "name_ko": "마라 셀비니 팔라쫄리",
        "name_en": "Mara Selvini Palazzoli",
        "contribution": "밀란 팀에서 역설적 처방을 가족치료에 적극 활용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전략적 가족치료",
        "name_en": "Strategic Family Therapy",
        "id": "FAMILY_ST_026"
      },
      {
        "name_ko": "증상 처방",
        "name_en": "Symptom Prescription",
        "id": "FAMILY_SP_029"
      },
      {
        "name_ko": "지시",
        "name_en": "Directive",
        "id": "FAMILY_DR_028"
      }
    ],
    "sub_types": [
      "증상 처방",
      "억제",
      "위치 재정립"
    ],
    "quiz_hints": {
      "mnemonic": "역설적 개입 = '이상하게도' 문제를 더 하라고 하면 문제가 줄어든다",
      "differential": "직접적 지시는 변화를 직접 요구하지만, 역설적 개입은 역설적으로 증상을 유지하도록 지시하여 간접적으로 변화를 유도한다",
      "key_point": "증상을 의도적으로 통제하게 함으로써 자발적 증상에 대한 통제감을 경험하게 한다",
      "common_mistake": "역설적 개입을 단순한 반어법이나 장난으로 오해하기 쉬우나, 신중하게 설계된 치료적 전략이다"
    }
  },
  {
    "id": "FAMILY_DR_028",
    "terminology": "지시 (Directive)",
    "terminology_ko": "지시",
    "terminology_en": "Directive",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "전략적 가족치료에서 치료자가 가족에게 회기 중이나 회기 사이에 수행할 과제나 행동을 구체적으로 지시하는 기법이다. 직접적 지시와 역설적 지시로 나뉜다.",
    "definition_en": "A technique in strategic family therapy in which the therapist specifically instructs the family to perform tasks or behaviors during or between sessions. It is divided into direct directives and paradoxical directives.",
    "significance": "전략적 가족치료에서 치료자의 적극적 역할을 대표하는 기법으로, 가족의 행동 패턴을 직접 변화시키는 핵심 도구이다.",
    "key_researchers": [
      {
        "name_ko": "제이 헤일리",
        "name_en": "Jay Haley",
        "contribution": "지시적 기법을 전략적 가족치료의 핵심 도구로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전략적 가족치료",
        "name_en": "Strategic Family Therapy",
        "id": "FAMILY_ST_026"
      },
      {
        "name_ko": "역설적 개입",
        "name_en": "Paradoxical Intervention",
        "id": "FAMILY_PI_027"
      },
      {
        "name_ko": "과제 부여",
        "name_en": "Homework Assignment",
        "id": "PROCESS_HA_030"
      }
    ],
    "sub_types": [
      "직접적 지시",
      "역설적 지시",
      "은유적 지시"
    ],
    "quiz_hints": {
      "mnemonic": "지시 = 치료자가 가족에게 '이것을 하라'고 구체적으로 알려주는 것",
      "differential": "비지시적 접근(인간중심)은 내담자의 자기결정을 강조하지만, 지시적 접근(전략적)은 치료자가 변화 전략을 설계하고 지시한다",
      "key_point": "좋은 지시는 구체적이고, 실행 가능하며, 가족의 문제 패턴을 변화시킬 수 있도록 설계되어야 한다",
      "common_mistake": "지시를 단순한 '조언'으로 오해하기 쉬우나, 가족의 상호작용 패턴을 변화시키기 위해 전략적으로 설계된 과제이다"
    }
  },
  {
    "id": "FAMILY_SP_029",
    "terminology": "증상 처방 (Symptom Prescription)",
    "terminology_ko": "증상 처방",
    "terminology_en": "Symptom Prescription",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "역설적 개입의 대표적 기법으로, 내담자에게 증상 행동을 의도적으로 수행하도록 처방하여 증상에 대한 자발성을 제거하고 통제감을 갖게 하는 방법이다.",
    "definition_en": "A representative paradoxical technique that prescribes the client to deliberately perform symptomatic behavior, thereby removing the spontaneity of the symptom and giving the client a sense of control.",
    "significance": "자발적으로 나타나는 증상을 의도적 행동으로 전환시켜 증상의 역기능적 기능을 약화시키는 효과적인 기법이다.",
    "key_researchers": [
      {
        "name_ko": "빅터 프랭클",
        "name_en": "Viktor Frankl",
        "contribution": "역설적 지향(paradoxical intention) 기법을 처음 제안하여 증상 처방의 기초를 마련하였다"
      },
      {
        "name_ko": "제이 헤일리",
        "name_en": "Jay Haley",
        "contribution": "증상 처방을 가족치료의 전략적 기법으로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역설적 개입",
        "name_en": "Paradoxical Intervention",
        "id": "FAMILY_PI_027"
      },
      {
        "name_ko": "전략적 가족치료",
        "name_en": "Strategic Family Therapy",
        "id": "FAMILY_ST_026"
      },
      {
        "name_ko": "지시",
        "name_en": "Directive",
        "id": "FAMILY_DR_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "증상 처방 = 의사가 '병을 더 앓으라'고 처방하는 역설",
      "differential": "행동치료의 노출은 불안에 직면하게 하여 소거시키는 것이고, 증상 처방은 증상의 자발성을 제거하여 통제감을 갖게 하는 것이다",
      "key_point": "증상이 자발적일 때 역기능적이지만, 의도적으로 수행하면 통제 가능한 행동이 된다",
      "common_mistake": "증상 처방이 모든 증상에 적용 가능하다고 오해하기 쉬우나, 자해나 폭력적 증상에는 절대 사용해서는 안 된다"
    }
  },
  {
    "id": "FAMILY_EF_030",
    "terminology": "경험적 가족치료 (Experiential Family Therapy)",
    "terminology_ko": "경험적 가족치료",
    "terminology_en": "Experiential Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "사티어와 위태커가 대표하는 가족치료 접근으로, 가족 구성원의 정서적 경험과 자기 성장을 강조한다. 현재 순간의 감정 체험과 진정한 자기표현을 통해 가족 관계의 변화를 추구한다.",
    "definition_en": "A family therapy approach represented by Satir and Whitaker that emphasizes emotional experience and personal growth of family members. It seeks change in family relationships through present-moment emotional experiencing and authentic self-expression.",
    "significance": "인본주의적 가치를 가족치료에 적용한 접근으로, 가족 구성원의 자존감과 의사소통 능력 향상을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "버지니아 사티어",
        "name_en": "Virginia Satir",
        "contribution": "의사소통 유형과 자존감 개념을 가족치료에 도입하고 경험적 접근을 체계화하였다"
      },
      {
        "name_ko": "칼 위태커",
        "name_en": "Carl Whitaker",
        "contribution": "상징적-경험적 가족치료를 개발하여 치료적 자발성과 창의성을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "의사소통 유형",
        "name_en": "Communication Stances",
        "id": "FAMILY_CS_031"
      },
      {
        "name_ko": "가족조각",
        "name_en": "Family Sculpting",
        "id": "FAMILY_FSC_032"
      },
      {
        "name_ko": "인간중심상담",
        "name_en": "Person-Centered Counseling",
        "id": "PERSON_PC_001"
      },
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      }
    ],
    "sub_types": [
      "사티어 모델",
      "상징적-경험적 모델 (위태커)"
    ],
    "quiz_hints": {
      "mnemonic": "경험적 = 머리(이론)보다 가슴(경험)으로 가족을 치료한다",
      "differential": "구조적 가족치료는 가족의 조직적 구조에, 경험적 가족치료는 구성원의 정서적 경험에 초점을 둔다",
      "key_point": "치료의 핵심은 가족 구성원이 진정한 감정을 표현하고 성장하는 경험을 하는 것이다",
      "common_mistake": "경험적 가족치료를 체계적이지 않은 것으로 오해하기 쉬우나, 사티어 모델은 의사소통 유형과 자존감에 대한 체계적 이론을 갖고 있다"
    }
  },
  {
    "id": "FAMILY_CS_031",
    "terminology": "의사소통 유형 (Communication Stances)",
    "terminology_ko": "의사소통 유형",
    "terminology_en": "Communication Stances",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "사티어가 제시한 스트레스 상황에서 사람들이 보이는 네 가지 역기능적 의사소통 유형으로, 회유형, 비난형, 초이성형, 산만형이 있으며, 건강한 유형은 일치형이다.",
    "definition_en": "Four dysfunctional communication patterns identified by Satir that people display under stress: placating, blaming, super-reasonable, and irrelevant, with the congruent stance being the healthy pattern.",
    "significance": "사티어 모델의 핵심 개념으로, 가족 내 역기능적 의사소통 패턴을 진단하고 일치적 의사소통으로의 변화를 도모하는 기본 틀이다.",
    "key_researchers": [
      {
        "name_ko": "버지니아 사티어",
        "name_en": "Virginia Satir",
        "contribution": "다섯 가지 의사소통 유형(회유형, 비난형, 초이성형, 산만형, 일치형)을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경험적 가족치료",
        "name_en": "Experiential Family Therapy",
        "id": "FAMILY_EF_030"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      },
      {
        "name_ko": "가족조각",
        "name_en": "Family Sculpting",
        "id": "FAMILY_FSC_032"
      }
    ],
    "sub_types": [
      "회유형 (Placating)",
      "비난형 (Blaming)",
      "초이성형 (Super-reasonable)",
      "산만형 (Irrelevant)",
      "일치형 (Congruent)"
    ],
    "quiz_hints": {
      "mnemonic": "회비초산일 = 회유, 비난, 초이성, 산만은 역기능, 일치가 건강",
      "differential": "회유형은 자기를 무시하고 타인에 맞추고, 비난형은 타인을 무시하고 자기를 주장하며, 초이성형은 자기와 타인 모두 무시하고 상황에만 초점을 둔다",
      "key_point": "일치형만이 자기, 타인, 상황을 모두 고려하는 건강한 의사소통이다",
      "common_mistake": "의사소통 유형을 고정된 성격 특성으로 오해하기 쉬우나, 스트레스 상황에서의 대처 방식이며 변화 가능하다"
    }
  },
  {
    "id": "FAMILY_FSC_032",
    "terminology": "가족조각 (Family Sculpting)",
    "terminology_ko": "가족조각",
    "terminology_en": "Family Sculpting",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "가족 구성원들의 관계와 정서적 역동을 공간적 배치와 신체적 자세로 표현하는 경험적 기법으로, 사티어가 체계화하였다. 가족이 느끼는 관계의 질을 비언어적으로 시각화한다.",
    "definition_en": "An experiential technique systematized by Satir that expresses family members' relationships and emotional dynamics through spatial positioning and body postures, providing a nonverbal visualization of the perceived quality of relationships.",
    "significance": "언어로 표현하기 어려운 가족 관계의 정서적 측면을 시각적으로 표현하여 가족 구성원의 통찰을 촉진하는 강력한 도구이다.",
    "key_researchers": [
      {
        "name_ko": "버지니아 사티어",
        "name_en": "Virginia Satir",
        "contribution": "가족조각 기법을 가족치료의 경험적 도구로 체계화하였다"
      },
      {
        "name_ko": "데이비드 카프",
        "name_en": "David Kantor",
        "contribution": "가족조각의 초기 형태를 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경험적 가족치료",
        "name_en": "Experiential Family Therapy",
        "id": "FAMILY_EF_030"
      },
      {
        "name_ko": "의사소통 유형",
        "name_en": "Communication Stances",
        "id": "FAMILY_CS_031"
      },
      {
        "name_ko": "실연",
        "name_en": "Enactment",
        "id": "FAMILY_EN_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가족조각 = 가족 관계를 '조각상'처럼 몸으로 표현한다",
      "differential": "실연(enactment)은 가족이 실제 상호작용을 재현하는 것이고, 가족조각은 관계를 공간적·신체적으로 상징화하는 것이다",
      "key_point": "비언어적 표현을 통해 가족 구성원이 평소 인식하지 못했던 관계 역동을 체험적으로 인식하게 한다",
      "common_mistake": "가족조각을 단순한 '게임'이나 '활동'으로 오해하기 쉬우나, 심층적인 정서적 경험과 통찰을 유도하는 치료적 기법이다"
    }
  },
  {
    "id": "FAMILY_SFF_033",
    "terminology": "해결중심 가족치료 (Solution-Focused Family Therapy)",
    "terminology_ko": "해결중심 가족치료",
    "terminology_en": "Solution-Focused Family Therapy",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "문제의 원인 탐색보다 해결책 구축에 초점을 두는 단기 가족치료 접근으로, 가족의 강점과 자원을 활용하여 원하는 변화를 만들어간다. 기적질문, 예외질문, 척도질문 등이 핵심 기법이다.",
    "definition_en": "A brief family therapy approach that focuses on constructing solutions rather than exploring problem causes, utilizing the family's strengths and resources to create desired change. Miracle questions, exception questions, and scaling questions are core techniques.",
    "significance": "문제 중심 패러다임에서 해결 중심 패러다임으로의 전환을 대표하며, 단기적이고 효율적인 치료를 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "스티브 드 셰이저",
        "name_en": "Steve de Shazer",
        "contribution": "해결중심 단기치료(SFBT)를 개발하고 기적질문 등 핵심 기법을 창안하였다"
      },
      {
        "name_ko": "인수 킴 버그",
        "name_en": "Insoo Kim Berg",
        "contribution": "해결중심 접근을 가족치료와 다양한 임상 상황에 적용하고 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기적질문",
        "name_en": "Miracle Question",
        "id": "FAMILY_MQ_034"
      },
      {
        "name_ko": "예외질문",
        "name_en": "Exception Question",
        "id": "FAMILY_EQ_035"
      },
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "해결중심 = 문제 대신 '해결'에 집중하는 가족치료",
      "differential": "정신역동적 접근은 문제의 원인을 탐색하지만, 해결중심 접근은 해결책을 직접 구축한다",
      "key_point": "기본 가정: '문제에 대해 알 필요 없이 해결책을 구축할 수 있다'",
      "common_mistake": "해결중심 치료를 단순히 '긍정적으로 생각하기'로 오해하기 쉬우나, 체계적인 질문 기법과 과제를 활용하는 구조화된 접근이다"
    }
  },
  {
    "id": "FAMILY_MQ_034",
    "terminology": "기적질문 (Miracle Question)",
    "terminology_ko": "기적질문",
    "terminology_en": "Miracle Question",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "해결중심 치료의 핵심 기법으로, '오늘 밤 잠자는 동안 기적이 일어나 문제가 해결되었다면 내일 아침 어떻게 알 수 있을까?'라는 질문을 통해 내담자가 원하는 미래를 구체적으로 그려보게 하는 기법이다.",
    "definition_en": "A core technique in solution-focused therapy that asks 'If a miracle happened while you slept tonight and your problem was solved, how would you know tomorrow morning?' to help clients concretely envision their desired future.",
    "significance": "문제 중심 사고에서 벗어나 해결 지향적 사고로 전환하는 강력한 도구로, 치료 목표를 구체화하는 데 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "스티브 드 셰이저",
        "name_en": "Steve de Shazer",
        "contribution": "기적질문을 해결중심 치료의 핵심 기법으로 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해결중심 가족치료",
        "name_en": "Solution-Focused Family Therapy",
        "id": "FAMILY_SFF_033"
      },
      {
        "name_ko": "예외질문",
        "name_en": "Exception Question",
        "id": "FAMILY_EQ_035"
      },
      {
        "name_ko": "척도질문",
        "name_en": "Scaling Question",
        "id": "FAMILY_SQ_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "기적질문 = '기적이 일어나면 내일 아침 뭐가 달라질까?'",
      "differential": "예외질문은 이미 일어난 해결의 순간에 초점을 두지만, 기적질문은 아직 일어나지 않은 이상적 미래에 초점을 둔다",
      "key_point": "기적질문의 목적은 내담자가 원하는 변화를 구체적이고 행동적인 용어로 기술하게 하는 것이다",
      "common_mistake": "기적질문을 비현실적 희망을 조장하는 것으로 오해하기 쉬우나, 구체적이고 실현 가능한 목표를 설정하기 위한 도구이다"
    }
  },
  {
    "id": "FAMILY_EQ_035",
    "terminology": "예외질문 (Exception Question)",
    "terminology_ko": "예외질문",
    "terminology_en": "Exception Question",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "해결중심 치료의 핵심 기법으로, 문제가 일어나지 않았거나 덜 심했던 예외적 상황을 탐색하여 이미 존재하는 해결책과 강점을 발견하도록 돕는 질문이다.",
    "definition_en": "A core technique in solution-focused therapy that explores exceptional situations when the problem did not occur or was less severe, helping to discover already existing solutions and strengths.",
    "significance": "문제가 '항상' 존재하는 것이 아님을 인식하게 하여 내담자의 자기효능감을 높이고 변화 가능성을 확인하게 한다.",
    "key_researchers": [
      {
        "name_ko": "스티브 드 셰이저",
        "name_en": "Steve de Shazer",
        "contribution": "예외질문을 해결중심 치료의 핵심 기법으로 개발하였다"
      },
      {
        "name_ko": "인수 킴 버그",
        "name_en": "Insoo Kim Berg",
        "contribution": "예외질문의 임상적 활용을 확장하고 다양한 내담자 집단에 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해결중심 가족치료",
        "name_en": "Solution-Focused Family Therapy",
        "id": "FAMILY_SFF_033"
      },
      {
        "name_ko": "기적질문",
        "name_en": "Miracle Question",
        "id": "FAMILY_MQ_034"
      },
      {
        "name_ko": "척도질문",
        "name_en": "Scaling Question",
        "id": "FAMILY_SQ_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "예외질문 = '문제가 없었던 때는 언제?'를 찾아 해결의 실마리를 발견한다",
      "differential": "기적질문은 이상적 미래를 상상하게 하지만, 예외질문은 이미 일어난 성공 경험을 탐색한다",
      "key_point": "예외 상황에서 내담자가 무엇을 다르게 했는지를 구체적으로 탐색하여 해결 행동을 확대한다",
      "common_mistake": "예외를 단순한 '우연'으로 치부하기 쉬우나, 예외 속에 내담자의 강점과 해결 자원이 있다"
    }
  },
  {
    "id": "FAMILY_SQ_036",
    "terminology": "척도질문 (Scaling Question)",
    "terminology_ko": "척도질문",
    "terminology_en": "Scaling Question",
    "category": "FAMILY",
    "category_name": "가족상담 (Family Therapy)",
    "definition": "해결중심 치료에서 문제의 심각도, 변화에 대한 동기, 진전 정도 등을 0~10점 척도로 평가하게 하여 변화를 구체적이고 측정 가능하게 만드는 질문 기법이다.",
    "definition_en": "A questioning technique in solution-focused therapy that has clients rate problem severity, motivation for change, progress, etc., on a 0-10 scale, making change concrete and measurable.",
    "significance": "추상적인 변화를 구체적 수치로 표현하게 하여 작은 진전을 인식하고 다음 단계를 설정하는 데 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "인수 킴 버그",
        "name_en": "Insoo Kim Berg",
        "contribution": "척도질문의 다양한 활용법을 개발하고 임상적 유용성을 확립하였다"
      },
      {
        "name_ko": "스티브 드 셰이저",
        "name_en": "Steve de Shazer",
        "contribution": "척도질문을 해결중심 치료의 핵심 도구로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해결중심 가족치료",
        "name_en": "Solution-Focused Family Therapy",
        "id": "FAMILY_SFF_033"
      },
      {
        "name_ko": "기적질문",
        "name_en": "Miracle Question",
        "id": "FAMILY_MQ_034"
      },
      {
        "name_ko": "예외질문",
        "name_en": "Exception Question",
        "id": "FAMILY_EQ_035"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "척도질문 = '0점에서 10점 사이 지금 몇 점?'으로 변화를 수치화한다",
      "differential": "기적질문과 예외질문이 질적 탐색이라면, 척도질문은 양적 평가로 변화를 측정한다",
      "key_point": "현재 점수보다 1점 높아지려면 무엇이 달라져야 하는지를 탐색하여 작은 변화를 촉진한다",
      "common_mistake": "척도질문을 단순한 자기평가 도구로 오해하기 쉬우나, 변화 동기 탐색과 목표 설정의 치료적 도구이다"
    }
  }
];

TERMS_DATA.GROUP = [
  {
    "id": "GROUP_GC_001",
    "terminology": "집단상담 (Group Counseling)",
    "terminology_ko": "집단상담",
    "terminology_en": "Group Counseling",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "전문 상담자의 촉진 하에 소수의 구성원(보통 6~12명)이 모여 상호작용을 통해 자기 이해를 증진하고 문제를 해결하며 성장을 도모하는 상담 형태이다. 집단 역동을 치료적으로 활용한다.",
    "definition_en": "A form of counseling in which a small number of members (typically 6-12) meet under the facilitation of a professional counselor, promoting self-understanding, problem-solving, and growth through interaction. It therapeutically utilizes group dynamics.",
    "significance": "개인상담으로는 얻기 어려운 대인관계 학습, 보편성 경험, 사회적 지지 등 독특한 치료적 이점을 제공하며, 비용 효율적인 치료 방법이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단치료의 치료적 요인 11가지를 체계화하고 현대 집단치료의 이론적 기초를 확립하였다"
      },
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "집단상담의 이론과 실제를 통합적으로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단역동",
        "name_en": "Group Dynamics",
        "id": "GROUP_GD_002"
      },
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "상담",
        "name_en": "Counseling",
        "id": "FOUND_CF_001"
      }
    ],
    "sub_types": [
      "상담집단",
      "치료집단",
      "성장집단",
      "과업집단",
      "심리교육집단"
    ],
    "quiz_hints": {
      "mnemonic": "집단상담 = 여러 사람이 '함께' 성장하는 상담",
      "differential": "개인상담은 1:1 관계에서의 자기탐색에 초점을 두지만, 집단상담은 구성원 간 상호작용과 집단 역동을 치료적으로 활용한다",
      "key_point": "집단상담의 독특한 강점은 보편성 경험, 대인관계 학습, 이타주의 경험 등 집단에서만 가능한 치료적 요인이다",
      "common_mistake": "집단상담을 여러 명에게 동시에 개인상담을 하는 것으로 오해하기 쉬우나, 구성원 간 상호작용 자체가 치료의 핵심이다"
    }
  },
  {
    "id": "GROUP_GD_002",
    "terminology": "집단역동 (Group Dynamics)",
    "terminology_ko": "집단역동",
    "terminology_en": "Group Dynamics",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 구성원 간에 작용하는 힘의 상호작용으로, 집단의 행동, 의사결정, 규범 형성, 갈등 등에 영향을 미치는 과정을 총칭한다. 집단상담에서 치료적 변화의 핵심 매개체이다.",
    "definition_en": "The interaction of forces operating among group members that affect group behavior, decision-making, norm formation, conflicts, and other processes. It serves as a core mediator of therapeutic change in group counseling.",
    "significance": "집단상담의 효과를 이해하고 활용하기 위한 필수적 개념으로, 리더는 집단역동을 관찰하고 촉진할 수 있어야 한다.",
    "key_researchers": [
      {
        "name_ko": "쿠르트 레빈",
        "name_en": "Kurt Lewin",
        "contribution": "집단역동 개념을 처음 제안하고 '장 이론(field theory)'을 적용하여 체계화하였다"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단역동을 임상적 치료 장면에 적용하는 방법을 체계적으로 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단상담",
        "name_en": "Group Counseling",
        "id": "GROUP_GC_001"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "집단규범",
        "name_en": "Group Norms",
        "id": "GROUP_GN_005"
      },
      {
        "name_ko": "집단과정",
        "name_en": "Group Process",
        "id": "GROUP_GP_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단역동 = 집단 안에서 '움직이는 힘(dynamics)'의 상호작용",
      "differential": "집단과정(group process)은 집단이 시간에 따라 발전하는 과정이고, 집단역동은 구성원 간 힘의 상호작용 자체이다",
      "key_point": "집단역동은 관찰 가능한 현상(발언 패턴, 하위집단 형성 등)과 잠재적 과정(무의식적 역할 분담 등)을 모두 포함한다",
      "common_mistake": "집단역동을 집단 내 갈등으로만 이해하기 쉬우나, 응집력, 규범, 역할 분담 등 모든 상호작용적 힘을 포함한다"
    }
  },
  {
    "id": "GROUP_TF_003",
    "terminology": "치료적 요인 (Therapeutic Factors)",
    "terminology_ko": "치료적 요인",
    "terminology_en": "Therapeutic Factors",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "얄롬이 제시한 집단치료에서 변화를 촉진하는 11가지 핵심 요인으로, 보편성, 이타주의, 희망 고취, 정보 제공, 교정적 재경험, 사회화 기술 발달, 모방 행동, 대인관계 학습, 집단응집력, 카타르시스, 실존적 요인을 포함한다.",
    "definition_en": "Eleven core factors identified by Yalom that facilitate change in group therapy, including universality, altruism, instillation of hope, imparting information, corrective recapitulation, development of socializing techniques, imitative behavior, interpersonal learning, group cohesion, catharsis, and existential factors.",
    "significance": "집단치료가 왜 효과적인지를 설명하는 가장 영향력 있는 이론적 틀로, 집단 리더가 치료적 요인을 의도적으로 촉진하는 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단치료의 11가지 치료적 요인을 체계화하고 실증적 연구의 토대를 마련하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보편성",
        "name_en": "Universality",
        "id": "GROUP_UN_007"
      },
      {
        "name_ko": "이타주의",
        "name_en": "Altruism",
        "id": "GROUP_AL_008"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "카타르시스",
        "name_en": "Catharsis",
        "id": "GROUP_CA_009"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      }
    ],
    "sub_types": [
      "보편성",
      "이타주의",
      "희망 고취",
      "정보 제공",
      "교정적 가족 재경험",
      "사회화 기술 발달",
      "모방 행동",
      "대인관계 학습",
      "집단응집력",
      "카타르시스",
      "실존적 요인"
    ],
    "quiz_hints": {
      "mnemonic": "얄롬의 11가지 요인: 보이희정교사모대집카실(보편성, 이타주의, 희망, 정보, 교정적, 사회화, 모방, 대인관계, 집단응집, 카타르시스, 실존)",
      "differential": "치료적 요인은 집단에서만 나타나는 요인(보편성, 이타주의 등)과 개인상담에서도 나타나는 요인(카타르시스 등)을 모두 포함한다",
      "key_point": "얄롬은 11가지 치료적 요인을 제시했으며, 이들은 독립적으로 작용하기보다 상호 연관되어 작용한다",
      "common_mistake": "11가지 요인의 중요도가 모든 집단에서 동일하다고 오해하기 쉬우나, 집단의 유형과 발달 단계에 따라 상대적 중요도가 달라진다"
    }
  },
  {
    "id": "GROUP_CO_004",
    "terminology": "집단응집력 (Group Cohesion)",
    "terminology_ko": "집단응집력",
    "terminology_en": "Group Cohesion",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 구성원들이 서로와 집단 전체에 대해 느끼는 매력, 소속감, 유대감의 정도로, 집단치료에서 개인상담의 치료적 관계에 해당하는 핵심 요인이다.",
    "definition_en": "The degree of attraction, belonging, and bonding that group members feel toward each other and the group as a whole, functioning as the group therapy equivalent of the therapeutic relationship in individual counseling.",
    "significance": "얄롬이 가장 중요한 치료적 요인 중 하나로 꼽았으며, 높은 응집력은 다른 치료적 요인의 활성화를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단응집력을 집단치료의 핵심 치료적 요인으로 강조하고 그 중요성을 실증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "집단역동",
        "name_en": "Group Dynamics",
        "id": "GROUP_GD_002"
      },
      {
        "name_ko": "집단규범",
        "name_en": "Group Norms",
        "id": "GROUP_GN_005"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단응집력 = 집단의 '접착력' - 구성원을 붙잡아 두는 힘",
      "differential": "집단응집력은 개인상담에서의 치료적 동맹에 해당하며, 개인-상담자 관계가 아닌 집단 전체에 대한 소속감이다",
      "key_point": "높은 응집력은 자기개방, 피드백 수용, 위험 감수를 촉진하여 다른 치료적 요인의 활성화를 돕는다",
      "common_mistake": "응집력이 높으면 항상 좋다고 오해하기 쉬우나, 과도한 응집력은 집단 사고(groupthink)나 개인 차이 억압으로 이어질 수 있다"
    }
  },
  {
    "id": "GROUP_GN_005",
    "terminology": "집단규범 (Group Norms)",
    "terminology_ko": "집단규범",
    "terminology_en": "Group Norms",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 구성원의 행동을 안내하는 명시적·묵시적 규칙과 기대로, 무엇이 허용되고 허용되지 않는지를 규정한다. 치료적 규범(자기개방, 직접적 소통 등)의 형성이 집단 리더의 핵심 과업이다.",
    "definition_en": "Explicit and implicit rules and expectations that guide member behavior within the group, defining what is and is not acceptable. Establishing therapeutic norms (self-disclosure, direct communication, etc.) is a core task of the group leader.",
    "significance": "집단의 치료적 분위기를 결정하는 핵심 요소로, 초기에 적절한 규범이 형성되어야 집단이 효과적으로 기능할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "치료적 집단규범의 형성이 집단 리더의 핵심 과업임을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단역동",
        "name_en": "Group Dynamics",
        "id": "GROUP_GD_002"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "집단과정",
        "name_en": "Group Process",
        "id": "GROUP_GP_006"
      }
    ],
    "sub_types": [
      "명시적 규범",
      "묵시적 규범"
    ],
    "quiz_hints": {
      "mnemonic": "집단규범 = 집단의 '불문율' - 어떻게 행동해야 하는지에 대한 암묵적 합의",
      "differential": "규칙(rules)은 리더가 명시적으로 제시하지만, 규범(norms)은 상호작용을 통해 자연스럽게 형성되는 기대를 포함한다",
      "key_point": "리더는 집단 초기에 치료적 규범(자기개방, 지금-여기 초점, 직접 소통 등)의 형성을 적극 촉진해야 한다",
      "common_mistake": "규범이 집단 시작 시 정해지고 고정된다고 오해하기 쉬우나, 규범은 집단 발달 과정에서 계속 변화한다"
    }
  },
  {
    "id": "GROUP_GP_006",
    "terminology": "집단과정 (Group Process)",
    "terminology_ko": "집단과정",
    "terminology_en": "Group Process",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단이 시간에 따라 발달하고 변화하는 전체적인 흐름으로, 구성원 간의 상호작용 패턴, 역할 분담, 규범 변화, 갈등과 해결 등 집단에서 일어나는 모든 것을 포함한다.",
    "definition_en": "The overall flow of development and change in the group over time, encompassing interaction patterns among members, role distribution, norm changes, conflict and resolution, and everything that occurs in the group.",
    "significance": "집단의 내용(content)만이 아닌 과정(process)에 주의를 기울이는 것이 집단 리더의 핵심 역량이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단과정에 대한 관심을 지금-여기(here-and-now) 초점과 연결하여 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단역동",
        "name_en": "Group Dynamics",
        "id": "GROUP_GD_002"
      },
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      },
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단과정 = '무엇'을 말하느냐(내용)가 아니라 '어떻게' 상호작용하느냐(과정)",
      "differential": "집단 내용(content)은 '무엇이 논의되느냐'이고, 집단 과정(process)은 '어떻게 상호작용하느냐'이다",
      "key_point": "리더는 내용과 과정 모두에 주의를 기울이되, 특히 과정에 대한 관찰과 개입이 집단치료의 핵심이다",
      "common_mistake": "집단과정을 단순히 '집단의 진행 순서'로 오해하기 쉬우나, 구성원 간 상호작용의 역동적 흐름을 의미한다"
    }
  },
  {
    "id": "GROUP_UN_007",
    "terminology": "보편성 (Universality)",
    "terminology_ko": "보편성",
    "terminology_en": "Universality",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 경험을 통해 자신만 고통받고 있는 것이 아니라 다른 사람들도 유사한 문제와 감정을 경험하고 있음을 깨닫게 되는 치료적 요인이다. '나만 그런 게 아니구나'라는 인식이 고립감을 감소시킨다.",
    "definition_en": "A therapeutic factor through which group members realize they are not alone in their suffering and that others experience similar problems and feelings. The recognition that 'I am not the only one' reduces feelings of isolation.",
    "significance": "집단치료의 가장 기본적이고 강력한 치료적 요인 중 하나로, 특히 집단 초기 단계에서 구성원의 고립감을 해소하고 희망을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "보편성을 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "희망 고취",
        "name_en": "Instillation of Hope",
        "id": "GROUP_IH_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "보편성 = '나만 그런 게 아니다' - 고통의 보편적 경험을 확인한다",
      "differential": "보편성은 '다른 사람도 비슷한 문제를 겪는다'는 인식이고, 카타르시스는 감정을 표현하고 해방감을 경험하는 것이다",
      "key_point": "개인상담에서는 경험하기 어려운, 집단에서만 가능한 독특한 치료적 요인이다",
      "common_mistake": "보편성을 단순히 '위안'으로 오해하기 쉬우나, 고립감 해소와 자기수용 촉진의 치료적 효과가 있다"
    }
  },
  {
    "id": "GROUP_AL_008",
    "terminology": "이타주의 (Altruism)",
    "terminology_ko": "이타주의",
    "terminology_en": "Altruism",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 다른 구성원을 돕는 경험이 돕는 사람에게도 치료적 효과를 가져오는 요인이다. 도움을 주는 경험은 자기 가치감을 높이고 자기중심적 몰두에서 벗어나게 한다.",
    "definition_en": "A factor in which the experience of helping other group members brings therapeutic benefits to the helper as well. The experience of giving help enhances self-worth and shifts focus from self-centered preoccupation.",
    "significance": "집단에서만 가능한 독특한 치료적 요인으로, 내담자가 도움을 받는 역할에서 벗어나 도움을 주는 경험을 통해 자기 가치감을 회복한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "이타주의를 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "보편성",
        "name_en": "Universality",
        "id": "GROUP_UN_007"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이타주의 = 남을 도우면 '나'도 치유된다",
      "differential": "이타주의는 다른 구성원을 돕는 경험의 치료적 효과이고, 대인관계 학습은 관계 패턴을 인식하고 변화시키는 것이다",
      "key_point": "도움을 주는 사람이 도움을 받는 사람만큼 또는 더 많은 치료적 이점을 얻을 수 있다",
      "common_mistake": "이타주의를 단순히 '착한 행동'으로 오해하기 쉬우나, 자기 가치감 회복이라는 치료적 의미가 핵심이다"
    }
  },
  {
    "id": "GROUP_CA_009",
    "terminology": "카타르시스 (Catharsis)",
    "terminology_ko": "카타르시스",
    "terminology_en": "Catharsis",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 강렬한 감정을 표현하고 해방감을 경험하는 치료적 요인이다. 안전한 집단 환경에서 억압된 감정을 표현하고 다른 구성원의 수용을 경험하는 것이 치유적 효과를 가져온다.",
    "definition_en": "A therapeutic factor of expressing intense emotions and experiencing release within the group. Expressing suppressed feelings in a safe group environment and experiencing acceptance from other members brings healing effects.",
    "significance": "감정 표현 자체가 치료적이지만, 얄롬은 카타르시스만으로는 불충분하며 인지적 이해와 결합되어야 한다고 강조한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "카타르시스를 집단치료의 치료적 요인으로 정립하되, 인지적 이해와의 결합의 필요성을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "카타르시스 = 감정의 '분출과 정화' - 울고 나면 시원해지는 경험",
      "differential": "카타르시스는 감정 표현 자체의 해방감이고, 대인관계 학습은 관계 패턴에 대한 인식과 변화이다",
      "key_point": "얄롬에 따르면 카타르시스는 필요하지만 충분하지 않으며, 인지적 이해(대인관계 학습)와 결합되어야 지속적 변화로 이어진다",
      "common_mistake": "카타르시스만으로 충분한 치료적 효과를 얻을 수 있다고 오해하기 쉬우나, 인지적 처리와 결합되어야 한다"
    }
  },
  {
    "id": "GROUP_IL_010",
    "terminology": "대인관계 학습 (Interpersonal Learning)",
    "terminology_ko": "대인관계 학습",
    "terminology_en": "Interpersonal Learning",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내 상호작용을 통해 자신의 대인관계 패턴을 인식하고 새로운 관계 방식을 시도하며 피드백을 받아 대인관계 능력을 향상시키는 치료적 요인이다. 얄롬이 가장 중요한 치료적 요인으로 간주하였다.",
    "definition_en": "A therapeutic factor of recognizing one's interpersonal patterns, trying new relational styles, and receiving feedback through group interactions to improve interpersonal skills. Yalom considered this the most important therapeutic factor.",
    "significance": "얄롬이 집단치료의 가장 핵심적인 치료적 요인으로 본 것으로, 집단이 사회적 마이크로코즘으로 기능하여 현실 대인관계의 축소판이 된다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "대인관계 학습을 집단치료의 핵심 치료적 요인으로 개념화하고 교정적 정서 경험과 연결하였다"
      },
      {
        "name_ko": "해리 스택 설리번",
        "name_en": "Harry Stack Sullivan",
        "contribution": "대인관계이론을 통해 정신병리가 대인관계적 맥락에서 발생한다는 관점을 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      },
      {
        "name_ko": "사회적 마이크로코즘",
        "name_en": "Social Microcosm",
        "id": "GROUP_SM_020"
      },
      {
        "name_ko": "교정적 정서 경험",
        "name_en": "Corrective Emotional Experience",
        "id": "GROUP_CE_021"
      }
    ],
    "sub_types": [
      "대인관계 학습-입력 (피드백 받기)",
      "대인관계 학습-출력 (새로운 행동 시도)"
    ],
    "quiz_hints": {
      "mnemonic": "대인관계 학습 = 집단이라는 '거울'을 통해 나의 관계 패턴을 보고 바꾼다",
      "differential": "보편성은 '나만 그런 게 아니다'를 깨닫는 것이고, 대인관계 학습은 '나의 관계 패턴이 어떤지'를 배우고 변화시키는 것이다",
      "key_point": "집단은 사회적 마이크로코즘으로, 구성원의 외부 대인관계 패턴이 집단 내에서 재현되므로 직접 관찰하고 개입할 수 있다",
      "common_mistake": "대인관계 학습을 단순한 '사회성 훈련'으로 오해하기 쉬우나, 깊은 수준의 관계 패턴 인식과 교정적 정서 경험을 포함한다"
    }
  },
  {
    "id": "GROUP_HN_011",
    "terminology": "지금-여기 (Here-and-Now)",
    "terminology_ko": "지금-여기",
    "terminology_en": "Here-and-Now",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 회기에서 현재 순간에 집단 내에서 일어나고 있는 상호작용, 감정, 반응에 초점을 맞추는 것으로, 과거나 외부 사건이 아닌 지금 이 자리에서의 경험을 탐색한다. 얄롬이 집단치료의 핵심 원리로 강조하였다.",
    "definition_en": "Focusing on the interactions, feelings, and reactions occurring in the present moment within the group session, exploring experiences in the here-and-now rather than past or external events. Yalom emphasized this as a core principle of group therapy.",
    "significance": "집단치료의 가장 중요한 작업 원리로, 과거 이야기가 아닌 현재의 대인관계적 상호작용에 초점을 맞춤으로써 실질적 변화를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "지금-여기 초점을 집단치료의 핵심 치료 원리로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "집단과정",
        "name_en": "Group Process",
        "id": "GROUP_GP_006"
      },
      {
        "name_ko": "알아차림",
        "name_en": "Awareness",
        "id": "GESTALT_AW_002"
      },
      {
        "name_ko": "과정 조명",
        "name_en": "Process Illumination",
        "id": "GROUP_PI_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "지금-여기 = '지금 이 순간, 여기 이 집단에서' 무엇이 일어나고 있는가에 초점",
      "differential": "지금-여기는 현재 순간의 집단 내 경험에 초점을 두지만, 과정 조명(process illumination)은 지금-여기의 경험을 의미 있게 해석하는 것이다",
      "key_point": "얄롬은 지금-여기가 경험적 요소(체험)와 조명적 요소(이해)로 구성된다고 보았다",
      "common_mistake": "지금-여기를 과거 이야기를 완전히 금지하는 것으로 오해하기 쉬우나, 과거 경험을 현재의 집단 관계와 연결하는 것이 핵심이다"
    }
  },
  {
    "id": "GROUP_SD_012",
    "terminology": "집단발달단계 (Stages of Group Development)",
    "terminology_ko": "집단발달단계",
    "terminology_en": "Stages of Group Development",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단이 시간에 따라 거치는 일련의 발달 과정으로, 일반적으로 형성기, 과도기, 작업기, 종결기의 4단계를 거친다. 각 단계마다 고유한 과제와 특성이 있으며 리더의 역할도 달라진다.",
    "definition_en": "A series of developmental phases that a group goes through over time, generally comprising four stages: forming, transition, working, and termination. Each stage has unique tasks and characteristics, and the leader's role changes accordingly.",
    "significance": "집단 리더가 현재 집단이 어느 단계에 있는지 파악하고 그에 적합한 개입을 선택하는 데 필수적인 개념틀이다.",
    "key_researchers": [
      {
        "name_ko": "브루스 터크만",
        "name_en": "Bruce Tuckman",
        "contribution": "형성기-혼란기-규범기-성취기-해산기의 5단계 집단발달 모델을 제안하였다"
      },
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "상담집단의 발달 단계를 초기, 과도기, 작업, 최종(종결)의 4단계로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "초기 단계",
        "name_en": "Initial Stage",
        "id": "GROUP_IS_013"
      },
      {
        "name_ko": "과도기 단계",
        "name_en": "Transition Stage",
        "id": "GROUP_TS_014"
      },
      {
        "name_ko": "작업 단계",
        "name_en": "Working Stage",
        "id": "GROUP_WS_015"
      },
      {
        "name_ko": "종결 단계",
        "name_en": "Termination Stage",
        "id": "GROUP_TM_016"
      }
    ],
    "sub_types": [
      "초기 단계 (형성기)",
      "과도기 단계 (혼란기)",
      "작업 단계 (규범기/성취기)",
      "종결 단계 (해산기)"
    ],
    "quiz_hints": {
      "mnemonic": "집단발달 = 초과작종(초기→과도기→작업→종결) / 터크만: 형혼규성해(Forming→Storming→Norming→Performing→Adjourning)",
      "differential": "터크만의 5단계(Forming-Storming-Norming-Performing-Adjourning)와 코리의 4단계(초기-과도기-작업-종결)는 유사하지만 분류가 다르다",
      "key_point": "각 단계에서 리더의 역할이 다르며, 단계에 맞지 않는 개입은 역효과를 낼 수 있다",
      "common_mistake": "발달 단계가 항상 순차적으로 진행된다고 오해하기 쉬우나, 집단은 이전 단계로 회귀하거나 단계를 오갈 수 있다"
    }
  },
  {
    "id": "GROUP_IS_013",
    "terminology": "초기 단계 (Initial Stage)",
    "terminology_ko": "초기 단계",
    "terminology_en": "Initial Stage",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 발달의 첫 단계로, 구성원들이 서로를 탐색하고 집단에 대한 신뢰를 형성하며 규범을 설정하는 시기이다. 불안과 의존이 높으며, 리더에 대한 기대가 크다.",
    "definition_en": "The first stage of group development where members explore each other, build trust in the group, and establish norms. Anxiety and dependence are high, with significant expectations placed on the leader.",
    "significance": "집단의 치료적 분위기와 규범이 형성되는 결정적 시기로, 이 단계에서의 리더 개입이 이후 집단 발달에 큰 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "초기 단계의 특성과 리더 과업을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "과도기 단계",
        "name_en": "Transition Stage",
        "id": "GROUP_TS_014"
      },
      {
        "name_ko": "집단규범",
        "name_en": "Group Norms",
        "id": "GROUP_GN_005"
      },
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "초기 단계 = '탐색과 불안' - 서로를 살피고 안전한지 확인하는 시기",
      "differential": "초기 단계는 탐색과 신뢰 형성이 과제이고, 과도기 단계는 갈등과 저항이 나타나는 시기이다",
      "key_point": "리더의 핵심 과업은 안전한 분위기 조성, 규범 설정, 구성원의 불안 다루기이다",
      "common_mistake": "초기 단계에서 깊은 자기개방을 강요하는 것은 부적절하며, 점진적 신뢰 형성이 필요하다"
    }
  },
  {
    "id": "GROUP_TS_014",
    "terminology": "과도기 단계 (Transition Stage)",
    "terminology_ko": "과도기 단계",
    "terminology_en": "Transition Stage",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 발달의 두 번째 단계로, 구성원 간의 갈등, 리더에 대한 도전, 저항, 방어가 나타나는 시기이다. 권력과 통제를 둘러싼 투쟁이 특징적이며, 이를 건설적으로 해결하면 작업 단계로 진입한다.",
    "definition_en": "The second stage of group development characterized by conflict between members, challenges to the leader, resistance, and defensiveness. Power and control struggles are characteristic, and constructive resolution leads to the working stage.",
    "significance": "집단 성장의 필수적인 통과 과정으로, 갈등을 회피하지 않고 건설적으로 다루는 것이 작업 단계 진입의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "과도기 단계의 갈등 특성과 리더의 대처 방안을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "초기 단계",
        "name_en": "Initial Stage",
        "id": "GROUP_IS_013"
      },
      {
        "name_ko": "작업 단계",
        "name_en": "Working Stage",
        "id": "GROUP_WS_015"
      },
      {
        "name_ko": "저항",
        "name_en": "Resistance",
        "id": "GROUP_RE_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과도기 = '폭풍(Storming)' - 갈등과 도전이 분출되는 시기",
      "differential": "초기 단계의 불안은 '이 집단이 안전한가?'이고, 과도기의 갈등은 '누가 통제하는가?'에 관한 것이다",
      "key_point": "리더는 갈등을 회피하거나 억누르지 말고, 집단이 갈등을 건설적으로 다루도록 촉진해야 한다",
      "common_mistake": "과도기의 갈등을 집단의 실패로 오해하기 쉬우나, 건강한 집단 발달의 필수적 과정이다"
    }
  },
  {
    "id": "GROUP_WS_015",
    "terminology": "작업 단계 (Working Stage)",
    "terminology_ko": "작업 단계",
    "terminology_en": "Working Stage",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 발달의 세 번째 단계로, 높은 응집력과 상호 신뢰를 바탕으로 깊은 자기탐색, 직면, 행동 변화가 활발히 이루어지는 가장 생산적인 시기이다.",
    "definition_en": "The third stage of group development, the most productive period where deep self-exploration, confrontation, and behavioral change actively occur based on high cohesion and mutual trust.",
    "significance": "집단치료의 핵심적 치료 작업이 이루어지는 단계로, 대인관계 학습과 교정적 정서 경험이 가장 활발히 일어난다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "작업 단계의 특성과 리더의 촉진 기술을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "과도기 단계",
        "name_en": "Transition Stage",
        "id": "GROUP_TS_014"
      },
      {
        "name_ko": "종결 단계",
        "name_en": "Termination Stage",
        "id": "GROUP_TM_016"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "작업 단계 = '일하는 집단' - 본격적인 치료적 작업이 이루어지는 시기",
      "differential": "과도기 단계는 갈등과 저항이 특징이고, 작업 단계는 높은 응집력과 깊은 자기탐색이 특징이다",
      "key_point": "이 단계에서 리더는 촉진자로서 구성원의 자기탐색과 상호 피드백을 격려한다",
      "common_mistake": "작업 단계에 도달하면 리더의 역할이 필요 없다고 오해하기 쉬우나, 깊은 수준의 작업을 촉진하고 지지하는 리더의 역할이 여전히 중요하다"
    }
  },
  {
    "id": "GROUP_TM_016",
    "terminology": "종결 단계 (Termination Stage)",
    "terminology_ko": "종결 단계",
    "terminology_en": "Termination Stage",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 발달의 마지막 단계로, 집단 경험을 정리하고 학습한 것을 통합하며 이별을 준비하는 시기이다. 분리 불안, 미해결 감정의 처리, 일상으로의 전이 계획이 핵심 과업이다.",
    "definition_en": "The final stage of group development where the group experience is consolidated, learning is integrated, and separation is prepared for. Separation anxiety, processing unresolved feelings, and planning for transfer to daily life are core tasks.",
    "significance": "집단 경험의 성과를 공고히 하고 일상에서의 적용을 준비하는 중요한 단계로, 적절한 종결이 치료 효과의 지속에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "종결 단계의 과업과 리더의 역할을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "작업 단계",
        "name_en": "Working Stage",
        "id": "GROUP_WS_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "종결 단계 = '마무리와 이별' - 배운 것을 정리하고 떠날 준비를 한다",
      "differential": "종결은 단순히 '끝'이 아니라 학습을 통합하고 일상 적용을 계획하는 적극적 과정이다",
      "key_point": "미해결 감정을 다루고, 집단에서 배운 것을 일상에서 어떻게 적용할지 구체적으로 계획한다",
      "common_mistake": "종결을 서둘러 진행하면 구성원이 충분히 정리하지 못하고, 너무 늦게 시작하면 이별에 대한 감정을 다룰 시간이 부족하다"
    }
  },
  {
    "id": "GROUP_GL_017",
    "terminology": "집단리더십 (Group Leadership)",
    "terminology_ko": "집단리더십",
    "terminology_en": "Group Leadership",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단상담에서 리더가 집단을 촉진하고 이끄는 역량으로, 집단과정의 관찰, 치료적 분위기 조성, 갈등 관리, 개입 시기 판단 등을 포함한다. 리더의 스타일과 기술이 집단의 효과에 결정적 영향을 미친다.",
    "definition_en": "The competency of a leader to facilitate and guide the group in group counseling, including observing group process, creating a therapeutic atmosphere, managing conflict, and timing interventions. The leader's style and skills have a decisive impact on group effectiveness.",
    "significance": "효과적인 집단리더십은 집단상담의 성과를 결정하는 핵심 요인으로, 체계적인 훈련과 수퍼비전이 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단 리더의 핵심 과업으로 집단 창조와 유지, 문화 형성, 지금-여기 활성화를 제시하였다"
      },
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "집단 리더의 자질, 기술, 윤리적 책임을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단상담",
        "name_en": "Group Counseling",
        "id": "GROUP_GC_001"
      },
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "공동리더십",
        "name_en": "Co-Leadership",
        "id": "GROUP_CL_018"
      }
    ],
    "sub_types": [
      "지시적 리더십",
      "촉진적 리더십",
      "위임적 리더십"
    ],
    "quiz_hints": {
      "mnemonic": "집단리더십 = '지휘자'처럼 집단의 흐름을 읽고 이끄는 능력",
      "differential": "개인상담에서 상담자는 1:1 관계를 관리하지만, 집단 리더는 다중 관계와 집단 전체의 역동을 동시에 관리해야 한다",
      "key_point": "효과적인 집단 리더는 개별 구성원에 대한 관심과 집단 전체에 대한 관심을 균형 있게 유지한다",
      "common_mistake": "집단 리더를 단순히 '진행자'로 오해하기 쉬우나, 치료적 환경 조성과 역동 촉진이 핵심 역할이다"
    }
  },
  {
    "id": "GROUP_CL_018",
    "terminology": "공동리더십 (Co-Leadership)",
    "terminology_ko": "공동리더십",
    "terminology_en": "Co-Leadership",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "두 명의 리더가 함께 집단을 이끄는 형태로, 상호 보완적 역할 분담, 다양한 관점 제공, 리더 간 관계의 모델링 등의 장점이 있다.",
    "definition_en": "A format in which two leaders co-facilitate the group, offering advantages such as complementary role distribution, diverse perspectives, and modeling of the relationship between leaders.",
    "significance": "훈련생의 수퍼비전과 전문성 발달에 효과적이며, 복잡한 집단 역동을 보다 효과적으로 관리할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "공동리더십의 장단점과 효과적 운영 방법을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단리더십",
        "name_en": "Group Leadership",
        "id": "GROUP_GL_017"
      },
      {
        "name_ko": "집단상담",
        "name_en": "Group Counseling",
        "id": "GROUP_GC_001"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공동리더십 = 두 사람이 '함께' 집단을 이끄는 팀워크",
      "differential": "단독 리더십은 일관성이 장점이고, 공동리더십은 다양성과 상호보완이 장점이지만 리더 간 갈등 가능성이 있다",
      "key_point": "공동리더 간의 관계가 집단에 직접적 영향을 미치므로, 리더 간 개방적 소통과 협력이 필수적이다",
      "common_mistake": "공동리더 중 한 명이 주도하고 다른 한 명이 보조하는 것을 공동리더십으로 오해하기 쉬우나, 진정한 공동리더십은 동등한 파트너십이다"
    }
  },
  {
    "id": "GROUP_IH_019",
    "terminology": "희망 고취 (Instillation of Hope)",
    "terminology_ko": "희망 고취",
    "terminology_en": "Instillation of Hope",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 다른 구성원의 변화와 성장을 목격함으로써 자신도 변화할 수 있다는 희망을 갖게 되는 치료적 요인이다. 특히 집단 초기에 치료에 대한 긍정적 기대를 형성하는 데 중요하다.",
    "definition_en": "A therapeutic factor in which witnessing the change and growth of other group members instills hope that one can also change. It is particularly important in forming positive treatment expectations in the early stages of the group.",
    "significance": "치료적 희망은 집단 참여 동기를 유지하고 중도 탈락을 방지하는 핵심 요인이며, 자기충족적 예언으로 작용할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "희망 고취를 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "보편성",
        "name_en": "Universality",
        "id": "GROUP_UN_007"
      },
      {
        "name_ko": "모방 행동",
        "name_en": "Imitative Behavior",
        "id": "GROUP_IB_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "희망 고취 = '저 사람이 나아졌으니 나도 나아질 수 있다'는 희망",
      "differential": "보편성은 '나만 그런 게 아니다'를 깨닫는 것이고, 희망 고취는 '나도 변할 수 있다'를 믿게 되는 것이다",
      "key_point": "특히 집단 초기에 중요하며, 리더는 의도적으로 긍정적 기대와 희망을 촉진해야 한다",
      "common_mistake": "희망 고취를 비현실적 낙관론으로 오해하기 쉬우나, 다른 구성원의 실제 변화를 통한 현실적 희망이다"
    }
  },
  {
    "id": "GROUP_SM_020",
    "terminology": "사회적 마이크로코즘 (Social Microcosm)",
    "terminology_ko": "사회적 마이크로코즘",
    "terminology_en": "Social Microcosm",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단이 외부 사회의 축소판으로 기능하여, 구성원이 일상에서 보이는 대인관계 패턴이 집단 내에서도 자연스럽게 재현되는 현상이다. 이를 통해 치료자와 구성원이 직접 관찰하고 개입할 수 있다.",
    "definition_en": "The phenomenon in which the group functions as a microcosm of the larger social world, where members' everyday interpersonal patterns naturally replicate within the group, allowing the therapist and members to directly observe and intervene.",
    "significance": "대인관계 학습의 이론적 근거로, 집단에서의 행동이 외부 세계에서의 행동을 반영하므로 집단 내 변화가 일상의 변화로 전이된다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단을 사회적 마이크로코즘으로 개념화하고 대인관계 학습의 토대로 삼았다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      },
      {
        "name_ko": "집단역동",
        "name_en": "Group Dynamics",
        "id": "GROUP_GD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회적 마이크로코즘 = 집단은 '사회의 축소판' - 밖에서의 패턴이 안에서 재현된다",
      "differential": "사회적 마이크로코즘은 집단이 사회의 축소판이라는 개념이고, 대인관계 학습은 그 축소판에서 실제로 패턴을 바꾸는 과정이다",
      "key_point": "구성원이 집단 내에서 보이는 행동 패턴은 외부 세계에서의 대인관계 패턴을 그대로 반영한다",
      "common_mistake": "집단을 인위적 환경으로 보고 집단 내 행동이 실제와 다르다고 오해하기 쉬우나, 충분한 시간이 지나면 자연스러운 패턴이 재현된다"
    }
  },
  {
    "id": "GROUP_CE_021",
    "terminology": "교정적 정서 경험 (Corrective Emotional Experience)",
    "terminology_ko": "교정적 정서 경험",
    "terminology_en": "Corrective Emotional Experience",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "과거의 부정적 관계 경험에서 비롯된 부적응적 패턴을 집단 내에서 새로운 긍정적 관계 경험으로 교정하는 것이다. 집단은 과거의 왜곡된 관계 경험을 다시 경험하고 다르게 반응받을 수 있는 안전한 공간을 제공한다.",
    "definition_en": "The correction of maladaptive patterns originating from past negative relational experiences through new positive relational experiences within the group. The group provides a safe space to re-experience and receive different responses to previously distorted relational experiences.",
    "significance": "집단치료에서 변화가 일어나는 핵심 메커니즘으로, 인지적 이해를 넘어 정서적 수준에서의 교정을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "프란츠 알렉산더",
        "name_en": "Franz Alexander",
        "contribution": "교정적 정서 경험 개념을 처음 제안하였다"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "교정적 정서 경험을 집단치료의 핵심 변화 메커니즘으로 적용하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "교정적 가족 재경험",
        "name_en": "Corrective Recapitulation of Primary Family",
        "id": "GROUP_CR_025"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교정적 정서 경험 = 과거에 '상처받은 경험'을 집단에서 '다르게 경험'하여 교정한다",
      "differential": "인지적 통찰은 '이해'를 통한 변화이고, 교정적 정서 경험은 '느낌'의 변화를 통한 교정이다",
      "key_point": "단순히 과거를 이야기하는 것이 아니라, 집단 내에서 실제로 새로운 정서적 반응을 경험하는 것이 핵심이다",
      "common_mistake": "교정적 정서 경험을 단순히 '좋은 경험을 하는 것'으로 오해하기 쉬우나, 과거의 특정한 부정적 패턴이 새로운 반응으로 교정되는 구체적 과정이다"
    }
  },
  {
    "id": "GROUP_PI_022",
    "terminology": "과정 조명 (Process Illumination)",
    "terminology_ko": "과정 조명",
    "terminology_en": "Process Illumination",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "얄롬이 제시한 개념으로, 지금-여기에서 일어난 경험을 한 걸음 물러서서 의미 있게 해석하고 이해하는 반성적 과정이다. 경험 자체와 그 경험에 대한 성찰이라는 두 단계로 이루어진다.",
    "definition_en": "A concept proposed by Yalom referring to the reflective process of stepping back to meaningfully interpret and understand experiences that occurred in the here-and-now. It consists of two steps: the experience itself and reflection on that experience.",
    "significance": "지금-여기의 경험을 치료적 학습으로 전환하는 핵심 과정으로, 경험만으로는 불충분하고 조명(이해)이 결합되어야 변화로 이어진다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "과정 조명을 지금-여기의 두 번째 단계(조명적 루프)로 개념화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "집단과정",
        "name_en": "Group Process",
        "id": "GROUP_GP_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과정 조명 = '조명(빛)'을 비춰 집단 과정의 의미를 밝힌다",
      "differential": "지금-여기의 경험적 요소는 '체험'이고, 과정 조명은 그 체험을 '이해'하는 반성적 요소이다",
      "key_point": "얄롬은 지금-여기가 경험적 루프(체험)와 조명적 루프(이해)로 구성되며, 둘 다 필요하다고 강조하였다",
      "common_mistake": "과정 조명을 리더의 해석으로만 이해하기 쉬우나, 구성원들도 서로의 과정에 대해 조명을 비출 수 있다"
    }
  },
  {
    "id": "GROUP_RE_023",
    "terminology": "저항 (Resistance in Groups)",
    "terminology_ko": "저항",
    "terminology_en": "Resistance in Groups",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 내에서 구성원이 의식적 또는 무의식적으로 자기탐색, 자기개방, 변화를 회피하는 행동으로, 침묵, 지각, 결석, 지성화, 다른 구성원 공격 등 다양한 형태로 나타난다.",
    "definition_en": "Conscious or unconscious behavior by which group members avoid self-exploration, self-disclosure, and change, manifesting in various forms such as silence, tardiness, absence, intellectualization, and attacking other members.",
    "significance": "집단 과도기 단계의 핵심 현상으로, 저항을 치료적으로 다루는 것이 집단의 성장과 작업 단계 진입에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "집단에서의 저항 유형과 치료적 대처 방안을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과도기 단계",
        "name_en": "Transition Stage",
        "id": "GROUP_TS_014"
      },
      {
        "name_ko": "집단발달단계",
        "name_en": "Stages of Group Development",
        "id": "GROUP_SD_012"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "PSYCHOD_DF_005"
      }
    ],
    "sub_types": [
      "개인 저항",
      "집단 저항"
    ],
    "quiz_hints": {
      "mnemonic": "저항 = 변화에 대한 '브레이크' - 의식적·무의식적으로 치료 과정을 방해한다",
      "differential": "개인 저항은 특정 구성원의 행동이고, 집단 저항은 집단 전체가 작업을 회피하는 현상이다",
      "key_point": "저항은 제거해야 할 장애물이 아니라 탐색해야 할 치료적 소재이며, 그 이면에 불안과 두려움이 있다",
      "common_mistake": "저항하는 구성원을 '비협조적'으로 낙인찍기 쉬우나, 저항은 자기보호의 자연스러운 반응이다"
    }
  },
  {
    "id": "GROUP_IB_024",
    "terminology": "모방 행동 (Imitative Behavior)",
    "terminology_ko": "모방 행동",
    "terminology_en": "Imitative Behavior",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 구성원이 리더나 다른 구성원의 행동, 태도, 대처 방식을 관찰하고 모방함으로써 새로운 행동을 학습하는 치료적 요인이다.",
    "definition_en": "A therapeutic factor in which group members learn new behaviors by observing and imitating the behaviors, attitudes, and coping strategies of the leader or other members.",
    "significance": "사회학습이론의 원리를 집단 맥락에 적용한 것으로, 특히 집단 초기에 다른 구성원의 자기개방 행동을 모방하여 참여하게 되는 중요한 요인이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "모방 행동을 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      },
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "관찰학습과 모델링 이론으로 모방 행동의 이론적 기초를 제공하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "모델링",
        "name_en": "Modeling",
        "id": "BEHAV_MO_005"
      },
      {
        "name_ko": "희망 고취",
        "name_en": "Instillation of Hope",
        "id": "GROUP_IH_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모방 행동 = '따라하기 학습' - 다른 구성원의 좋은 모습을 보고 배운다",
      "differential": "모방 행동은 다른 사람의 행동을 관찰하고 모방하는 것이고, 대인관계 학습은 자신의 관계 패턴을 인식하고 변화시키는 것이다",
      "key_point": "집단 리더의 행동이 모방의 중요한 모델이 되므로, 리더는 자신이 원하는 집단 행동을 직접 시범 보여야 한다",
      "common_mistake": "모방 행동을 '피상적인 흉내내기'로 오해하기 쉬우나, 새로운 행동을 시도하는 초기 단계로서 의미가 있다"
    }
  },
  {
    "id": "GROUP_CR_025",
    "terminology": "교정적 가족 재경험 (Corrective Recapitulation of Primary Family Group)",
    "terminology_ko": "교정적 가족 재경험",
    "terminology_en": "Corrective Recapitulation of Primary Family Group",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단이 원가족의 역동을 재현하는 장이 되어, 구성원이 원가족에서의 미해결 갈등을 재경험하고 교정할 수 있는 기회를 제공하는 치료적 요인이다. 리더는 부모 역할, 구성원은 형제 역할을 상징적으로 대표한다.",
    "definition_en": "A therapeutic factor in which the group becomes a setting that recapitulates primary family dynamics, providing members opportunities to re-experience and correct unresolved conflicts from their family of origin. The leader symbolically represents parental roles, and members represent sibling roles.",
    "significance": "원가족에서의 미해결 이슈가 집단에서 재현되고 교정될 수 있다는 것은 집단치료의 독특한 강점이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "교정적 가족 재경험을 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "교정적 정서 경험",
        "name_en": "Corrective Emotional Experience",
        "id": "GROUP_CE_021"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_003"
      },
      {
        "name_ko": "가족치료",
        "name_en": "Family Therapy",
        "id": "FAMILY_FT_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교정적 가족 재경험 = 집단에서 '원가족 드라마'를 다시 상연하고 다른 결말을 경험한다",
      "differential": "교정적 정서 경험은 전반적인 관계 경험의 교정이고, 교정적 가족 재경험은 특히 원가족 역동의 재현과 교정에 초점을 둔다",
      "key_point": "구성원은 무의식적으로 리더에게 부모 역할을, 다른 구성원에게 형제 역할을 투사하며 원가족 역동을 재현한다",
      "common_mistake": "이 요인을 의도적인 가족 역할극으로 오해하기 쉬우나, 자연스럽게 재현되는 무의식적 과정이다"
    }
  },
  {
    "id": "GROUP_SDI_026",
    "terminology": "자기개방 (Self-Disclosure in Groups)",
    "terminology_ko": "자기개방",
    "terminology_en": "Self-Disclosure in Groups",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 구성원이 자신의 감정, 생각, 경험, 반응을 집단에 공유하는 것으로, 집단 치료 과정의 핵심이다. 적절한 자기개방은 친밀감과 응집력을 높이지만, 시기와 수준이 적절해야 한다.",
    "definition_en": "The sharing of one's feelings, thoughts, experiences, and reactions with the group, which is central to the group therapeutic process. Appropriate self-disclosure increases intimacy and cohesion, but timing and level must be suitable.",
    "significance": "집단에서의 자기개방은 보편성 경험, 대인관계 학습, 카타르시스 등 다양한 치료적 요인을 활성화하는 핵심 매개체이다.",
    "key_researchers": [
      {
        "name_ko": "시드니 저라드",
        "name_en": "Sidney Jourard",
        "contribution": "자기개방의 상호성 원리를 제안하고 자기개방이 정신건강에 미치는 긍정적 영향을 연구하였다"
      },
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단에서의 자기개방의 치료적 가치와 적절한 수준을 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단응집력",
        "name_en": "Group Cohesion",
        "id": "GROUP_CO_004"
      },
      {
        "name_ko": "보편성",
        "name_en": "Universality",
        "id": "GROUP_UN_007"
      },
      {
        "name_ko": "카타르시스",
        "name_en": "Catharsis",
        "id": "GROUP_CA_009"
      },
      {
        "name_ko": "피드백",
        "name_en": "Feedback",
        "id": "GROUP_FB_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기개방 = 마음의 '문을 여는' 것 - 집단 치료의 연료",
      "differential": "자기개방은 자신에 대한 정보를 나누는 것이고, 피드백은 다른 구성원에 대한 반응을 나누는 것이다",
      "key_point": "자기개방은 '조하리의 창'의 비밀 영역을 좁히고 개방 영역을 넓히는 과정이다",
      "common_mistake": "많은 자기개방이 항상 좋다고 오해하기 쉬우나, 집단 발달 단계에 맞지 않는 과도한 자기개방은 역효과를 낼 수 있다"
    }
  },
  {
    "id": "GROUP_FB_027",
    "terminology": "피드백 (Feedback in Groups)",
    "terminology_ko": "피드백",
    "terminology_en": "Feedback in Groups",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 구성원이 다른 구성원의 행동, 태도, 영향에 대한 자신의 반응과 관찰을 솔직하게 전달하는 것이다. 효과적인 피드백은 구체적이고, 행동에 초점을 두며, 배려와 함께 전달되어야 한다.",
    "definition_en": "The honest communication of one's reactions and observations about another member's behavior, attitudes, and impact. Effective feedback should be specific, behavior-focused, and delivered with care.",
    "significance": "대인관계 학습의 핵심 도구로, 구성원이 자신의 대인관계적 영향을 인식하고 변화시키는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단에서의 피드백이 대인관계 학습의 핵심 메커니즘임을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "자기개방",
        "name_en": "Self-Disclosure in Groups",
        "id": "GROUP_SDI_026"
      },
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      }
    ],
    "sub_types": [
      "긍정적 피드백",
      "교정적 피드백"
    ],
    "quiz_hints": {
      "mnemonic": "피드백 = 집단이라는 '거울' - 다른 사람이 보는 나를 알게 해준다",
      "differential": "자기개방은 자기 자신에 대한 정보를 공유하는 것이고, 피드백은 상대방에 대한 반응을 전달하는 것이다",
      "key_point": "효과적인 피드백은 '당신은 ~ 사람이다'(판단)가 아니라 '당신이 ~할 때 나는 ~을 느낀다'(영향)로 전달한다",
      "common_mistake": "피드백을 조언이나 비판으로 오해하기 쉬우나, 상대의 행동이 자신에게 미치는 영향을 솔직하게 전달하는 것이다"
    }
  },
  {
    "id": "GROUP_SC_028",
    "terminology": "집단선별 (Group Screening)",
    "terminology_ko": "집단선별",
    "terminology_en": "Group Screening",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단에 적합한 구성원을 선별하기 위한 사전 면접 과정으로, 집단의 목적에 부합하는지, 집단에 참여할 준비가 되었는지, 집단에서 이탈할 가능성이 있는지 등을 평가한다.",
    "definition_en": "A pre-interview process for selecting appropriate group members, evaluating whether they fit the group's purpose, are ready for group participation, and are at risk of dropping out.",
    "significance": "효과적인 집단 구성의 첫 단계로, 적절한 선별이 집단의 성공에 결정적 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단 구성원 선별의 원칙과 배제 기준을 체계적으로 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "집단상담",
        "name_en": "Group Counseling",
        "id": "GROUP_GC_001"
      },
      {
        "name_ko": "집단리더십",
        "name_en": "Group Leadership",
        "id": "GROUP_GL_017"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "집단선별 = 집단에 '적합한 사람'을 골라내는 사전 면접",
      "differential": "집단선별은 집단 시작 전의 개인 면접이고, 집단 구성(composition)은 선별된 구성원을 어떻게 조합하는가의 문제이다",
      "key_point": "얄롬은 '누가 집단에 이로운가'보다 '누가 집단에서 이탈하거나 해로울 수 있는가'에 초점을 둔 배제 기준을 강조하였다",
      "common_mistake": "선별 면접을 단순한 행정 절차로 오해하기 쉬우나, 구성원과 집단의 적합성을 평가하고 기대를 조율하는 치료적 과정이다"
    }
  },
  {
    "id": "GROUP_EX_029",
    "terminology": "실존적 요인 (Existential Factors)",
    "terminology_ko": "실존적 요인",
    "terminology_en": "Existential Factors",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 경험을 통해 인생의 근본적 한계(죽음, 고독, 자유, 무의미)를 인식하고 수용하며, 그럼에도 불구하고 삶에 대한 책임을 받아들이게 되는 치료적 요인이다.",
    "definition_en": "A therapeutic factor through which group members recognize and accept fundamental life limitations (death, isolation, freedom, meaninglessness) and nevertheless take responsibility for their lives.",
    "significance": "집단 치료의 깊은 수준에서 작용하는 요인으로, 실존적 자각이 삶의 의미와 진정성에 대한 성찰을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "실존적 요인을 집단치료의 11가지 치료적 요인 중 하나로 정립하고 실존적 심리치료와 연결하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "실존주의상담",
        "name_en": "Existential Counseling",
        "id": "EXIST_EX_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실존적 요인 = 집단에서 '삶의 근본 질문'과 마주하는 경험",
      "differential": "보편성은 '나만 이런 문제를 겪는 게 아니다'는 인식이고, 실존적 요인은 '삶의 한계는 누구나 직면한다'는 인식이다",
      "key_point": "삶의 궁극적 한계를 인식하면서도 자신의 삶에 대한 책임과 선택을 수용하는 것이 핵심이다",
      "common_mistake": "실존적 요인을 비관적이거나 우울한 주제로 오해하기 쉬우나, 삶의 한계 수용이 오히려 진정한 자유와 의미를 가져온다"
    }
  },
  {
    "id": "GROUP_TC_030",
    "terminology": "집단전이 (Transference in Groups)",
    "terminology_ko": "집단전이",
    "terminology_en": "Transference in Groups",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 구성원이 리더나 다른 구성원에게 과거의 중요한 인물(부모, 형제 등)에 대한 감정, 기대, 반응 패턴을 투사하는 현상이다. 집단에서는 여러 대상에 대한 다중 전이가 발생할 수 있다.",
    "definition_en": "The phenomenon in which group members project feelings, expectations, and reaction patterns from past significant figures (parents, siblings, etc.) onto the leader or other members. Multiple transferences toward various targets can occur in groups.",
    "significance": "집단에서의 다중 전이는 다양한 관계 패턴을 동시에 탐색할 수 있는 독특한 치료적 기회를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "집단에서의 전이 현상이 대인관계 학습의 소재가 됨을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_003"
      },
      {
        "name_ko": "교정적 가족 재경험",
        "name_en": "Corrective Recapitulation of Primary Family",
        "id": "GROUP_CR_025"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "사회적 마이크로코즘",
        "name_en": "Social Microcosm",
        "id": "GROUP_SM_020"
      }
    ],
    "sub_types": [
      "리더 전이",
      "구성원 간 전이"
    ],
    "quiz_hints": {
      "mnemonic": "집단전이 = 과거의 '관계 패턴'이 집단 안에서 되살아나는 것",
      "differential": "개인치료에서는 상담자에 대한 전이만 가능하지만, 집단에서는 리더와 다른 구성원에 대한 다중 전이가 가능하다",
      "key_point": "집단에서의 다중 전이는 다양한 관계 패턴(부모, 형제, 권위자 등)을 동시에 탐색할 수 있는 장점이 있다",
      "common_mistake": "집단에서의 모든 감정적 반응을 전이로 해석하는 오류를 범하기 쉬우나, 현실적 반응과 전이적 반응을 구별해야 한다"
    }
  },
  {
    "id": "GROUP_SO_031",
    "terminology": "사회화 기술 발달 (Development of Socializing Techniques)",
    "terminology_ko": "사회화 기술 발달",
    "terminology_en": "Development of Socializing Techniques",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "집단 경험을 통해 기본적인 사회적 기술(경청, 공감적 반응, 갈등 해결, 적절한 자기표현 등)을 학습하고 연습하는 치료적 요인이다.",
    "definition_en": "A therapeutic factor of learning and practicing basic social skills (listening, empathic responding, conflict resolution, appropriate self-expression, etc.) through group experience.",
    "significance": "특히 사회적 기술이 부족한 구성원에게 중요한 요인으로, 집단이 안전한 연습 장이 되어 대인관계 기술을 향상시킨다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "사회화 기술 발달을 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "대인관계 학습",
        "name_en": "Interpersonal Learning",
        "id": "GROUP_IL_010"
      },
      {
        "name_ko": "모방 행동",
        "name_en": "Imitative Behavior",
        "id": "GROUP_IB_024"
      },
      {
        "name_ko": "피드백",
        "name_en": "Feedback",
        "id": "GROUP_FB_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회화 기술 발달 = 집단에서 '사회생활 기술'을 배우고 연습한다",
      "differential": "사회화 기술 발달은 기본 사회적 기술의 학습이고, 대인관계 학습은 더 깊은 수준의 관계 패턴 인식과 변화이다",
      "key_point": "집단은 안전한 환경에서 새로운 사회적 기술을 시도하고 피드백을 받을 수 있는 '연습 무대'이다",
      "common_mistake": "사회화 기술 발달을 단순한 '예절 교육'으로 오해하기 쉬우나, 진정한 대인관계적 소통 능력의 발달을 의미한다"
    }
  },
  {
    "id": "GROUP_IP_032",
    "terminology": "정보 제공 (Imparting Information)",
    "terminology_ko": "정보 제공",
    "terminology_en": "Imparting Information",
    "category": "GROUP",
    "category_name": "집단상담 (Group Counseling)",
    "definition": "리더가 심리교육적 정보를 제공하거나 구성원 간에 유용한 정보와 조언을 교환하는 치료적 요인이다. 질병에 대한 이해, 대처 전략, 자원 정보 등이 포함된다.",
    "definition_en": "A therapeutic factor involving the leader providing psychoeducational information or members exchanging useful information and advice. It includes understanding of conditions, coping strategies, and resource information.",
    "significance": "특히 심리교육 집단이나 구조화된 집단에서 중요한 요인으로, 정확한 정보가 불안 감소와 자기관리 능력 향상에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "어빈 얄롬",
        "name_en": "Irvin Yalom",
        "contribution": "정보 제공을 집단치료의 11가지 치료적 요인 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "치료적 요인",
        "name_en": "Therapeutic Factors",
        "id": "GROUP_TF_003"
      },
      {
        "name_ko": "이타주의",
        "name_en": "Altruism",
        "id": "GROUP_AL_008"
      }
    ],
    "sub_types": [
      "리더의 심리교육",
      "구성원 간 정보 교환"
    ],
    "quiz_hints": {
      "mnemonic": "정보 제공 = 집단에서 '아는 것'을 나누고 배운다",
      "differential": "정보 제공은 지식과 조언의 교환이고, 이타주의는 정서적 지지를 제공하는 것이다",
      "key_point": "직접적인 조언보다 리더의 심리교육적 정보 제공이 더 효과적이며, 구성원 간 조언은 때로 문제 해결을 방해할 수 있다",
      "common_mistake": "정보 제공이 집단치료의 가장 중요한 요인이라고 오해하기 쉬우나, 얄롬은 이를 상대적으로 덜 중요한 요인으로 보았다"
    }
  }
];

TERMS_DATA.PROCESS = [
  {
    "id": "PROCESS_CP_001",
    "terminology": "상담과정 (Counseling Process)",
    "terminology_ko": "상담과정",
    "terminology_en": "Counseling Process",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담이 시작되어 종결될 때까지 거치는 일련의 단계적 과정으로, 일반적으로 관계 형성, 문제 탐색, 목표 설정, 개입, 종결의 단계를 포함한다. 각 단계마다 적절한 상담 기술과 전략이 요구된다.",
    "definition_en": "The sequential stages from the beginning to the termination of counseling, generally including relationship building, problem exploration, goal setting, intervention, and termination. Each stage requires appropriate counseling skills and strategies.",
    "significance": "상담의 효과적 진행을 위한 체계적 틀을 제공하며, 상담자가 현재 어느 단계에 있는지 인식하고 적절한 개입을 선택하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담과정을 탐색-통찰-실행의 3단계 모델로 체계화하였다"
      },
      {
        "name_ko": "제럴드 에건",
        "name_en": "Gerard Egan",
        "contribution": "숙련된 조력자 모델(Skilled Helper Model)을 통해 상담과정의 3단계를 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관계형성",
        "name_en": "Rapport Building",
        "id": "PROCESS_RB_002"
      },
      {
        "name_ko": "상담목표",
        "name_en": "Counseling Goals",
        "id": "PROCESS_CG_003"
      },
      {
        "name_ko": "종결",
        "name_en": "Termination",
        "id": "PROCESS_TN_004"
      },
      {
        "name_ko": "상담",
        "name_en": "Counseling",
        "id": "FOUND_CF_001"
      }
    ],
    "sub_types": [
      "초기 단계 (관계 형성, 문제 탐색)",
      "중기 단계 (통찰, 목표 설정, 개입)",
      "종결 단계 (평가, 종결, 추수상담)"
    ],
    "quiz_hints": {
      "mnemonic": "상담과정 = 관-탐-목-개-종 (관계형성→탐색→목표설정→개입→종결)",
      "differential": "힐의 모델은 탐색-통찰-실행 3단계, 에건의 모델은 현재 상황-선호 상황-실행 전략 3단계로 구분한다",
      "key_point": "상담과정은 선형적으로만 진행되지 않으며, 필요에 따라 이전 단계로 돌아갈 수 있다",
      "common_mistake": "상담과정을 경직된 순서로 오해하기 쉬우나, 유연하게 적용해야 하며 내담자의 필요에 맞춰 조정해야 한다"
    }
  },
  {
    "id": "PROCESS_RB_002",
    "terminology": "관계형성 (Rapport Building)",
    "terminology_ko": "관계형성",
    "terminology_en": "Rapport Building",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담 초기에 상담자와 내담자 간의 신뢰와 안전감을 형성하는 과정으로, 효과적인 상담의 기초가 된다. 공감, 존중, 진솔함을 통해 내담자가 자유롭게 자기를 탐색할 수 있는 관계를 만든다.",
    "definition_en": "The process of establishing trust and a sense of safety between counselor and client in the early stages of counseling, forming the foundation for effective counseling. It creates a relationship through empathy, respect, and genuineness in which the client can freely explore themselves.",
    "significance": "모든 상담 접근에서 치료 효과의 핵심 요인으로 인정되며, 관계 형성 없이는 어떤 기법도 효과적으로 적용될 수 없다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "무조건적 긍정적 존중, 공감적 이해, 일치성을 치료적 관계의 핵심 조건으로 제시하였다"
      },
      {
        "name_ko": "에드워드 보딘",
        "name_en": "Edward Bordin",
        "contribution": "작업동맹(working alliance) 개념을 통해 치료적 관계의 구성 요소를 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "PROCESS_WA_005"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관계형성 = 상담의 '토대 놓기' - 집을 지으려면 먼저 기초를 다져야 한다",
      "differential": "관계형성은 상담 초기의 신뢰 구축 과정이고, 작업동맹은 상담 전체에 걸친 협력적 관계의 질이다",
      "key_point": "로저스의 핵심 조건(무조건적 긍정적 존중, 공감적 이해, 일치성)이 관계 형성의 기본이다",
      "common_mistake": "관계형성을 단순한 '친해지기'로 오해하기 쉬우나, 전문적이고 치료적인 관계 구축을 의미한다"
    }
  },
  {
    "id": "PROCESS_CG_003",
    "terminology": "상담목표 (Counseling Goals)",
    "terminology_ko": "상담목표",
    "terminology_en": "Counseling Goals",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담을 통해 달성하고자 하는 구체적인 변화의 방향으로, 상담자와 내담자가 합의하여 설정한다. 명확하고 구체적이며 측정 가능한 목표가 상담의 효과를 높인다.",
    "definition_en": "The specific direction of change to be achieved through counseling, established collaboratively between counselor and client. Clear, specific, and measurable goals enhance counseling effectiveness.",
    "significance": "상담의 방향과 진전을 평가하는 기준이 되며, 상담자와 내담자 간의 합의된 목표가 작업동맹의 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 보딘",
        "name_en": "Edward Bordin",
        "contribution": "목표 합의(goal agreement)를 작업동맹의 세 가지 구성 요소 중 하나로 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "PROCESS_WA_005"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "PROCESS_CC_007"
      }
    ],
    "sub_types": [
      "과정 목표",
      "결과 목표",
      "단기 목표",
      "장기 목표"
    ],
    "quiz_hints": {
      "mnemonic": "상담목표 = 상담의 '목적지' - 어디로 갈지 정해야 길을 찾을 수 있다",
      "differential": "과정 목표는 상담 내에서의 변화(예: 감정 인식 향상)이고, 결과 목표는 상담 외부에서의 변화(예: 직장에서의 적응 향상)이다",
      "key_point": "효과적인 상담 목표는 구체적(Specific), 측정가능(Measurable), 달성가능(Achievable), 관련성(Relevant), 시간제한(Time-bound)의 SMART 기준을 충족한다",
      "common_mistake": "상담자가 일방적으로 목표를 설정하는 것으로 오해하기 쉬우나, 상담자와 내담자의 합의가 필수적이다"
    }
  },
  {
    "id": "PROCESS_TN_004",
    "terminology": "종결 (Termination)",
    "terminology_ko": "종결",
    "terminology_en": "Termination",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담 관계를 마무리하는 과정으로, 상담 성과의 평가, 학습한 내용의 통합, 미래 대처 계획 수립, 분리 감정 처리를 포함한다. 적절한 종결은 상담 효과의 지속에 중요하다.",
    "definition_en": "The process of ending the counseling relationship, including evaluation of counseling outcomes, integration of learned content, future coping plans, and processing separation feelings. Appropriate termination is important for sustaining counseling effects.",
    "significance": "상담의 마지막 단계로서 성과를 공고히 하고 독립적 기능을 촉진하는 중요한 과정이며, 부적절한 종결은 치료 효과를 약화시킬 수 있다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "상담 종결의 유형과 적절한 종결 과정을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      },
      {
        "name_ko": "의뢰",
        "name_en": "Referral",
        "id": "PROCESS_RF_008"
      },
      {
        "name_ko": "추수상담",
        "name_en": "Follow-Up",
        "id": "PROCESS_FU_009"
      }
    ],
    "sub_types": [
      "계획된 종결",
      "조기 종결 (내담자 주도)",
      "상담자 주도 종결",
      "강제 종결"
    ],
    "quiz_hints": {
      "mnemonic": "종결 = 상담의 '졸업식' - 배운 것을 정리하고 독립할 준비를 한다",
      "differential": "조기 종결은 내담자가 상담 목표 달성 전에 상담을 중단하는 것이고, 계획된 종결은 목표 달성에 따른 자연스러운 마무리이다",
      "key_point": "종결 과정에서는 성과 평가, 학습 통합, 재발 방지 계획, 분리 감정 처리가 핵심 과업이다",
      "common_mistake": "종결을 단순히 '상담을 끝내는 것'으로 오해하기 쉬우나, 적극적인 치료적 과정이며 충분한 시간을 두고 준비해야 한다"
    }
  },
  {
    "id": "PROCESS_WA_005",
    "terminology": "작업동맹 (Working Alliance)",
    "terminology_ko": "작업동맹",
    "terminology_en": "Working Alliance",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "보딘이 제안한 개념으로, 상담자와 내담자 간의 협력적 치료 관계를 의미한다. 목표 합의(goals), 과제 합의(tasks), 정서적 유대(bond)의 세 가지 구성 요소로 이루어진다.",
    "definition_en": "A concept proposed by Bordin referring to the collaborative therapeutic relationship between counselor and client, consisting of three components: agreement on goals, agreement on tasks, and emotional bond.",
    "significance": "이론적 지향과 관계없이 상담 효과를 예측하는 가장 강력한 요인으로, 모든 상담 접근에서 중요하게 다뤄진다.",
    "key_researchers": [
      {
        "name_ko": "에드워드 보딘",
        "name_en": "Edward Bordin",
        "contribution": "범이론적 작업동맹 개념을 제안하고 세 가지 구성 요소(목표, 과제, 유대)를 정립하였다"
      },
      {
        "name_ko": "아담 호바스",
        "name_en": "Adam Horvath",
        "contribution": "작업동맹과 상담 성과 간의 관계를 메타분석으로 실증하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관계형성",
        "name_en": "Rapport Building",
        "id": "PROCESS_RB_002"
      },
      {
        "name_ko": "상담목표",
        "name_en": "Counseling Goals",
        "id": "PROCESS_CG_003"
      },
      {
        "name_ko": "치료적 관계",
        "name_en": "Therapeutic Relationship",
        "id": "FOUND_TR_003"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "작업동맹의 3요소 = 목과유(목표 합의, 과제 합의, 유대)",
      "differential": "전이는 과거 관계의 투사인 반면, 작업동맹은 현실적이고 협력적인 치료 관계이다",
      "key_point": "보딘의 세 요소(목표·과제·유대) 중 하나라도 약하면 작업동맹이 손상되며, 이를 수리하는 것도 치료적 과제이다",
      "common_mistake": "작업동맹을 단순히 '친밀한 관계'로 오해하기 쉬우나, 목표와 과제에 대한 합의라는 과업적 측면이 핵심이다"
    }
  },
  {
    "id": "PROCESS_EM_006",
    "terminology": "공감 (Empathy)",
    "terminology_ko": "공감",
    "terminology_en": "Empathy",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 내담자의 내적 경험과 감정을 마치 자신의 것처럼 이해하면서도 '마치 ~처럼(as if)'이라는 조건을 잃지 않는 것이다. 내담자의 주관적 세계에 들어가 그의 감정과 의미를 정확하게 이해하고 이를 전달하는 능력이다.",
    "definition_en": "The counselor's understanding of the client's internal experience and feelings as if they were one's own while maintaining the 'as if' condition. It is the ability to enter the client's subjective world, accurately understand their feelings and meanings, and communicate this understanding.",
    "significance": "로저스가 제시한 치료적 관계의 핵심 조건 중 하나로, 모든 상담 접근에서 가장 중요한 상담자 자질이자 기술이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "공감적 이해를 치료적 관계의 핵심 조건으로 제시하고 체계화하였다"
      },
      {
        "name_ko": "로버트 카코프",
        "name_en": "Robert Carkhuff",
        "contribution": "공감의 수준을 5단계로 구분하는 공감 척도를 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관계형성",
        "name_en": "Rapport Building",
        "id": "PROCESS_RB_002"
      },
      {
        "name_ko": "공감적이해",
        "name_en": "Empathic Understanding",
        "id": "PERSON_EM_003"
      },
      {
        "name_ko": "감정반영",
        "name_en": "Reflection of Feeling",
        "id": "PROCESS_RFL_011"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [
      "일차적 공감 (Primary Empathy)",
      "심화된 공감 (Advanced Empathy)"
    ],
    "quiz_hints": {
      "mnemonic": "공감 = 상대의 구두를 신고 걸어보되, 내 발인 것을 잊지 않는 것",
      "differential": "동정(sympathy)은 상대를 불쌍히 여기는 것이고, 공감(empathy)은 상대의 입장에서 이해하는 것이다",
      "key_point": "공감의 'as if' 조건이 중요하다 - 내담자의 감정에 동화되면 공감이 아니라 감정적 전염이 된다",
      "common_mistake": "공감을 '동의'나 '찬성'으로 오해하기 쉬우나, 내담자의 경험을 이해하는 것이지 그 행동이나 관점에 동의하는 것이 아니다"
    }
  },
  {
    "id": "PROCESS_CC_007",
    "terminology": "사례개념화 (Case Conceptualization)",
    "terminology_ko": "사례개념화",
    "terminology_en": "Case Conceptualization",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 호소문제, 발달력, 성격, 대인관계 패턴, 강점과 약점을 체계적으로 이해하고 이론적 틀에 기반하여 문제의 원인과 유지 요인을 설명하며, 이에 따른 치료 계획을 수립하는 과정이다.",
    "definition_en": "The process of systematically understanding the client's presenting problems, developmental history, personality, interpersonal patterns, strengths and weaknesses, explaining the causes and maintaining factors of problems based on a theoretical framework, and developing a treatment plan accordingly.",
    "significance": "효과적인 상담의 핵심 역량으로, 내담자에 대한 체계적 이해를 바탕으로 적절한 개입 전략을 선택하고 상담의 방향을 안내한다.",
    "key_researchers": [
      {
        "name_ko": "트레이시 이얼스",
        "name_en": "Tracy Eells",
        "contribution": "사례개념화의 체계적 방법론과 신뢰도 연구를 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      },
      {
        "name_ko": "상담목표",
        "name_en": "Counseling Goals",
        "id": "PROCESS_CG_003"
      },
      {
        "name_ko": "접수면접",
        "name_en": "Intake Interview",
        "id": "PROCESS_II_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사례개념화 = 내담자라는 '퍼즐'의 조각을 맞추어 전체 그림을 완성하는 것",
      "differential": "진단은 증상에 따라 분류하는 것이고, 사례개념화는 그 증상의 원인, 유지 요인, 개인적 맥락을 이론에 기반하여 설명하는 것이다",
      "key_point": "사례개념화는 특정 이론적 지향에 따라 달라지며, 같은 내담자도 이론에 따라 다르게 개념화될 수 있다",
      "common_mistake": "사례개념화를 일회성 과정으로 오해하기 쉬우나, 상담 진행에 따라 계속 수정되고 발전하는 역동적 과정이다"
    }
  },
  {
    "id": "PROCESS_RF_008",
    "terminology": "의뢰 (Referral)",
    "terminology_ko": "의뢰",
    "terminology_en": "Referral",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 필요가 현재 상담자의 역량이나 전문 영역을 벗어날 때, 보다 적합한 전문가나 기관에 내담자를 연결하는 과정이다. 윤리적이고 전문적인 실천의 핵심 요소이다.",
    "definition_en": "The process of connecting clients to more appropriate professionals or agencies when their needs exceed the current counselor's competence or specialty area. It is a core element of ethical and professional practice.",
    "significance": "상담자의 역량 한계를 인식하고 내담자에게 최선의 서비스를 제공하기 위한 윤리적 의무이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "의뢰의 윤리적 원칙과 절차를 상담윤리의 맥락에서 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종결",
        "name_en": "Termination",
        "id": "PROCESS_TN_004"
      },
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "의뢰 = 내 역량 밖의 내담자를 '적합한 전문가'에게 연결하는 것",
      "differential": "종결은 상담 관계를 마무리하는 것이고, 의뢰는 다른 전문가에게 연결하는 것이다. 의뢰 시에도 적절한 종결 과정이 필요하다",
      "key_point": "의뢰는 상담자의 한계를 인정하는 전문적 판단이며, 내담자의 복지를 최우선으로 하는 윤리적 행위이다",
      "common_mistake": "의뢰를 '내담자를 포기하는 것'으로 오해하기 쉬우나, 내담자에게 더 적합한 도움을 제공하기 위한 전문적 결정이다"
    }
  },
  {
    "id": "PROCESS_FU_009",
    "terminology": "추수상담 (Follow-Up)",
    "terminology_ko": "추수상담",
    "terminology_en": "Follow-Up",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담 종결 후 일정 기간이 지난 뒤 내담자의 적응 상태와 상담 성과의 유지 여부를 확인하는 과정이다. 필요 시 추가 상담이나 의뢰를 제공한다.",
    "definition_en": "The process of checking the client's adjustment status and maintenance of counseling outcomes after a period following termination. Additional counseling or referral is provided as needed.",
    "significance": "상담 효과의 지속성을 평가하고 재발을 방지하는 중요한 과정으로, 상담의 전체적 효과성을 높인다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "추수상담의 중요성과 실천 방법을 상담과정의 필수 요소로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "종결",
        "name_en": "Termination",
        "id": "PROCESS_TN_004"
      },
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "추수상담 = 농사의 '추수(수확)' - 상담이라는 씨앗이 잘 자라고 있는지 확인한다",
      "differential": "종결은 상담을 마무리하는 과정이고, 추수상담은 종결 후에 성과를 확인하는 과정이다",
      "key_point": "추수상담은 종결의 일부가 아닌, 종결 이후의 독립적 과정이다",
      "common_mistake": "추수상담을 불필요하거나 선택적으로 오해하기 쉬우나, 상담 효과의 유지와 재발 방지를 위해 중요하다"
    }
  },
  {
    "id": "PROCESS_AL_010",
    "terminology": "적극적 경청 (Active Listening)",
    "terminology_ko": "적극적 경청",
    "terminology_en": "Active Listening",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 언어적·비언어적 메시지에 온전히 주의를 기울이고, 이해한 바를 반영하여 전달하는 상담의 기본 기술이다. 단순히 듣는 것이 아니라 내담자의 경험 세계에 적극적으로 참여하는 것이다.",
    "definition_en": "A fundamental counseling skill of fully attending to the client's verbal and nonverbal messages and reflecting one's understanding back. It involves not merely hearing but actively engaging with the client's experiential world.",
    "significance": "모든 상담 기법의 토대가 되는 가장 기본적인 상담 기술로, 경청 없이는 효과적인 상담이 불가능하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "경청을 인간중심상담의 핵심 실천으로 강조하였다"
      },
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "미시상담기술(Microcounseling Skills) 모델에서 경청 기술을 체계적으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RE_012"
      },
      {
        "name_ko": "관심기울이기",
        "name_en": "Attending",
        "id": "PROCESS_AT_013"
      },
      {
        "name_ko": "감정반영",
        "name_en": "Reflection of Feeling",
        "id": "PROCESS_RFL_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "적극적 경청 = '귀'뿐 아니라 '눈, 마음, 몸 전체'로 듣는 것",
      "differential": "수동적 듣기는 단순히 소리를 듣는 것이고, 적극적 경청은 이해한 바를 반영하여 전달하는 능동적 과정이다",
      "key_point": "적극적 경청은 언어적 내용뿐만 아니라 비언어적 메시지, 말 이면의 감정까지 포착하는 것이다",
      "common_mistake": "경청을 단순히 '조용히 듣기'로 오해하기 쉬우나, 이해한 바를 적극적으로 확인하고 전달하는 것이 핵심이다"
    }
  },
  {
    "id": "PROCESS_RFL_011",
    "terminology": "감정반영 (Reflection of Feeling)",
    "terminology_ko": "감정반영",
    "terminology_en": "Reflection of Feeling",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 표현하거나 경험하고 있는 감정을 상담자가 정확하게 포착하여 되돌려 주는 기법으로, 내담자가 자신의 감정을 인식하고 탐색하도록 돕는다.",
    "definition_en": "A technique in which the counselor accurately captures and reflects back the emotions the client is expressing or experiencing, helping the client recognize and explore their feelings.",
    "significance": "공감적 이해를 실천하는 가장 핵심적인 기법으로, 내담자의 정서적 경험을 타당화하고 심화된 자기탐색을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "감정반영을 인간중심상담의 핵심 기법으로 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RE_012"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      },
      {
        "name_ko": "바꾸어말하기",
        "name_en": "Paraphrasing",
        "id": "PROCESS_PP_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감정반영 = 내담자의 '감정 거울' - 느끼는 것을 비추어 돌려준다",
      "differential": "바꾸어말하기(paraphrasing)는 내용을 재진술하는 것이고, 감정반영(reflection of feeling)은 감정을 포착하여 돌려주는 것이다",
      "key_point": "감정반영은 '~라고 느끼시는군요', '~한 감정이 드시나 봅니다' 형식으로 내담자의 감정을 정확히 포착하여 전달한다",
      "common_mistake": "감정반영을 단순히 '기분이 어떠세요?'라고 묻는 것으로 오해하기 쉬우나, 내담자가 표현하는 감정을 정확히 포착하여 되돌려 주는 것이다"
    }
  },
  {
    "id": "PROCESS_RE_012",
    "terminology": "반영 (Reflection)",
    "terminology_ko": "반영",
    "terminology_en": "Reflection",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 말한 내용이나 감정을 상담자가 자신의 언어로 되돌려 주는 기법의 총칭으로, 내용반영(바꾸어말하기)과 감정반영을 포함한다. 내담자가 자기 경험을 외부에서 다시 듣고 탐색하도록 돕는다.",
    "definition_en": "A general term for techniques in which the counselor reflects back the content or feelings of what the client has said in one's own words, including paraphrasing and reflection of feeling. It helps clients re-hear and explore their own experience from an external perspective.",
    "significance": "인간중심상담에서 유래한 핵심 기법으로, 경청과 공감을 실천하는 가장 기본적인 상담 반응이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "반영을 인간중심상담의 핵심 실천 기법으로 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감정반영",
        "name_en": "Reflection of Feeling",
        "id": "PROCESS_RFL_011"
      },
      {
        "name_ko": "바꾸어말하기",
        "name_en": "Paraphrasing",
        "id": "PROCESS_PP_014"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [
      "내용반영 (바꾸어말하기)",
      "감정반영",
      "의미반영"
    ],
    "quiz_hints": {
      "mnemonic": "반영 = 상담자가 '거울'이 되어 내담자의 말을 비추어 돌려준다",
      "differential": "내용반영은 말의 핵심 내용을 재진술하고, 감정반영은 감정을 포착하여 전달하며, 의미반영은 내담자의 가치와 의미를 반영한다",
      "key_point": "반영은 단순한 앵무새식 반복이 아니라, 내담자의 경험의 핵심을 포착하여 자신의 언어로 전달하는 것이다",
      "common_mistake": "반영을 내담자의 말을 그대로 되풀이하는 것으로 오해하기 쉬우나, 핵심을 포착하여 재구성하는 것이다"
    }
  },
  {
    "id": "PROCESS_AT_013",
    "terminology": "관심기울이기 (Attending)",
    "terminology_ko": "관심기울이기",
    "terminology_en": "Attending",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 비언어적 행동(눈 맞춤, 몸 자세, 고개 끄덕임, 목소리 톤 등)을 통해 내담자에게 온전한 주의를 기울이고 있음을 전달하는 기본적 상담 행동이다.",
    "definition_en": "Basic counseling behavior in which the counselor communicates full attention to the client through nonverbal behaviors such as eye contact, body posture, head nodding, and voice tone.",
    "significance": "모든 상담 기술의 기초가 되는 비언어적 의사소통 기술로, 내담자가 존중받고 있음을 느끼게 하는 첫 번째 조건이다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "관심기울이기 행동의 구성 요소를 SOLER 모델로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      },
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관심기울이기 = SOLER (Squarely, Open, Lean, Eye contact, Relaxed)",
      "differential": "관심기울이기는 비언어적 주의 전달이고, 적극적 경청은 언어적 반응을 포함하는 보다 포괄적 기술이다",
      "key_point": "이건(Egan)의 SOLER 모델: 정면으로(Squarely), 열린 자세(Open), 약간 기울이기(Lean), 눈 맞춤(Eye contact), 편안하게(Relaxed)",
      "common_mistake": "관심기울이기를 단순한 '예의'로 오해하기 쉬우나, 치료적 관계의 기초를 형성하는 전문적 기술이다"
    }
  },
  {
    "id": "PROCESS_PP_014",
    "terminology": "바꾸어말하기 (Paraphrasing)",
    "terminology_ko": "바꾸어말하기",
    "terminology_en": "Paraphrasing",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 말한 내용의 핵심을 상담자가 자신의 언어로 간결하게 재진술하는 기법으로, 상담자가 내담자의 이야기를 정확히 이해하고 있음을 확인한다.",
    "definition_en": "A technique in which the counselor concisely restates the essence of what the client said in one's own words, confirming that the counselor accurately understands the client's narrative.",
    "significance": "경청과 이해를 확인하는 기본 기법으로, 내담자에게 이해받고 있다는 경험을 제공하고 자기탐색을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "바꾸어말하기를 미시상담기술의 핵심 기법으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RE_012"
      },
      {
        "name_ko": "감정반영",
        "name_en": "Reflection of Feeling",
        "id": "PROCESS_RFL_011"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      },
      {
        "name_ko": "요약",
        "name_en": "Summarization",
        "id": "PROCESS_SM_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "바꾸어말하기 = 내담자의 말을 '다른 말로 바꾸어' 핵심을 되돌려 준다",
      "differential": "바꾸어말하기는 내용의 핵심을 재진술하는 것이고, 감정반영은 감정을 포착하여 전달하는 것이다",
      "key_point": "효과적인 바꾸어말하기는 내담자의 말을 그대로 반복하는 것이 아니라, 핵심을 포착하여 간결하게 재구성하는 것이다",
      "common_mistake": "바꾸어말하기를 단순한 반복으로 오해하기 쉬우나, 내용의 핵심을 이해하고 재구성하는 인지적 과정이 필요하다"
    }
  },
  {
    "id": "PROCESS_SM_015",
    "terminology": "요약 (Summarization)",
    "terminology_ko": "요약",
    "terminology_en": "Summarization",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담 회기 중 또는 여러 회기에 걸쳐 내담자가 표현한 주요 내용, 감정, 주제를 종합하여 정리해 주는 기법이다. 산만한 내용을 조직화하고 상담의 방향을 잡는 데 도움을 준다.",
    "definition_en": "A technique of synthesizing and organizing the main content, feelings, and themes expressed by the client during or across multiple sessions. It helps organize scattered content and set the direction of counseling.",
    "significance": "상담의 흐름을 정리하고 핵심 주제를 부각시키는 기법으로, 회기 시작, 전환, 종결 시에 특히 유용하다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "요약을 미시상담기술의 핵심 기법으로 분류하고 활용법을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "바꾸어말하기",
        "name_en": "Paraphrasing",
        "id": "PROCESS_PP_014"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RE_012"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "요약 = 여러 이야기의 '줄거리'를 한 번에 정리해 준다",
      "differential": "바꾸어말하기는 한 발언의 핵심을 재진술하지만, 요약은 여러 발언의 주제를 종합하여 정리한다",
      "key_point": "회기 초반(지난 회기 정리), 중간(주제 전환), 종반(회기 마무리)에 전략적으로 활용한다",
      "common_mistake": "요약을 모든 이야기를 다 반복하는 것으로 오해하기 쉬우나, 핵심 주제와 패턴을 선별하여 정리하는 것이다"
    }
  },
  {
    "id": "PROCESS_QS_016",
    "terminology": "질문기법 (Questioning Techniques)",
    "terminology_ko": "질문기법",
    "terminology_en": "Questioning Techniques",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 자기탐색, 정보 수집, 통찰 촉진을 위해 상담자가 사용하는 다양한 질문 유형으로, 개방형 질문과 폐쇄형 질문이 기본이다. 적절한 질문은 탐색을 촉진하지만, 과도한 질문은 심문이 될 수 있다.",
    "definition_en": "Various types of questions used by counselors to facilitate client self-exploration, gather information, and promote insight, with open-ended and closed-ended questions being fundamental. Appropriate questions facilitate exploration, but excessive questioning can feel like interrogation.",
    "significance": "상담의 핵심 기법 중 하나로, 질문의 유형과 시기에 따라 상담의 방향과 깊이가 결정된다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "질문기법을 미시상담기술의 핵심 요소로 분류하고 개방형·폐쇄형 질문의 활용법을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "개방형 질문",
        "name_en": "Open-Ended Questions",
        "id": "PROCESS_OQ_017"
      },
      {
        "name_ko": "폐쇄형 질문",
        "name_en": "Closed-Ended Questions",
        "id": "PROCESS_CQ_018"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [
      "개방형 질문",
      "폐쇄형 질문",
      "순환적 질문",
      "소크라테스식 질문"
    ],
    "quiz_hints": {
      "mnemonic": "질문기법 = 상담의 '열쇠' - 적절한 질문이 내담자의 마음 문을 연다",
      "differential": "개방형 질문은 탐색을 확장하고, 폐쇄형 질문은 특정 정보를 확인한다",
      "key_point": "질문은 도구이지 목적이 아니며, 내담자의 자기탐색을 촉진하기 위해 전략적으로 사용해야 한다",
      "common_mistake": "질문을 많이 할수록 좋은 상담이라고 오해하기 쉬우나, 과도한 질문은 내담자를 수동적으로 만들고 탐색을 방해할 수 있다"
    }
  },
  {
    "id": "PROCESS_OQ_017",
    "terminology": "개방형 질문 (Open-Ended Questions)",
    "terminology_ko": "개방형 질문",
    "terminology_en": "Open-Ended Questions",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 자유롭게 자신의 경험, 감정, 생각을 탐색하고 표현할 수 있도록 하는 질문 유형으로, '예/아니오'로 답할 수 없는 질문이다. '어떻게', '무엇', '어떤' 등으로 시작한다.",
    "definition_en": "A type of question that allows clients to freely explore and express their experiences, feelings, and thoughts, which cannot be answered with 'yes/no.' They typically begin with 'how,' 'what,' or 'which.'",
    "significance": "내담자의 자기탐색과 표현을 확장하는 핵심 기법으로, 상담 초기부터 적극적으로 활용된다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "개방형 질문의 유형과 효과적 활용법을 미시상담기술 모델에서 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "질문기법",
        "name_en": "Questioning Techniques",
        "id": "PROCESS_QS_016"
      },
      {
        "name_ko": "폐쇄형 질문",
        "name_en": "Closed-Ended Questions",
        "id": "PROCESS_CQ_018"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "개방형 = '열린 문' - 내담자가 자유롭게 드나들 수 있는 넓은 질문",
      "differential": "개방형 질문은 탐색을 확장하고('어떻게 느끼세요?'), 폐쇄형 질문은 특정 사실을 확인한다('그때 화가 나셨나요?')",
      "key_point": "상담에서는 일반적으로 개방형 질문이 폐쇄형 질문보다 선호되며, 내담자의 자기탐색을 촉진한다",
      "common_mistake": "'왜?'로 시작하는 질문을 개방형으로 오해하기 쉬우나, '왜' 질문은 방어를 유발할 수 있어 주의가 필요하다"
    }
  },
  {
    "id": "PROCESS_CQ_018",
    "terminology": "폐쇄형 질문 (Closed-Ended Questions)",
    "terminology_ko": "폐쇄형 질문",
    "terminology_en": "Closed-Ended Questions",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 '예/아니오' 또는 짧은 대답으로 응답할 수 있는 질문 유형으로, 특정 정보를 확인하거나 초점을 좁히는 데 유용하다.",
    "definition_en": "A type of question that can be answered with 'yes/no' or brief responses, useful for confirming specific information or narrowing focus.",
    "significance": "특정 사실 확인이나 위기 평가 시 필요하지만, 과도하게 사용하면 상담이 심문처럼 느껴질 수 있다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "폐쇄형 질문의 적절한 활용 상황과 주의점을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "질문기법",
        "name_en": "Questioning Techniques",
        "id": "PROCESS_QS_016"
      },
      {
        "name_ko": "개방형 질문",
        "name_en": "Open-Ended Questions",
        "id": "PROCESS_OQ_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "폐쇄형 = '닫힌 문' - 예/아니오로만 통과할 수 있는 좁은 질문",
      "differential": "개방형 질문이 탐색을 확장한다면, 폐쇄형 질문은 초점을 좁히고 사실을 확인한다",
      "key_point": "위기 상황(자살 위험 평가 등)에서는 폐쇄형 질문이 필요하다",
      "common_mistake": "폐쇄형 질문이 항상 나쁘다고 오해하기 쉬우나, 적절한 상황에서는 효율적인 정보 수집 도구이다"
    }
  },
  {
    "id": "PROCESS_CF_019",
    "terminology": "직면 (Confrontation)",
    "terminology_ko": "직면",
    "terminology_en": "Confrontation",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 말과 행동, 감정과 행동, 자기지각과 타인지각 등 사이의 불일치나 모순을 부드럽지만 직접적으로 지적하여 내담자의 자기인식을 높이는 기법이다.",
    "definition_en": "A technique that gently but directly points out discrepancies or contradictions in the client's words and actions, feelings and behaviors, or self-perception and others' perception, to increase the client's self-awareness.",
    "significance": "내담자가 회피하고 있는 불일치를 인식하도록 도와 통찰과 변화를 촉진하는 강력한 기법이지만, 충분한 관계 형성 후에 사용해야 한다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 에건",
        "name_en": "Gerard Egan",
        "contribution": "직면을 심화된 공감의 한 형태로 개념화하고 효과적 활용법을 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심화된 공감",
        "name_en": "Advanced Empathy",
        "id": "PROCESS_AE_020"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PROCESS_IN_021"
      },
      {
        "name_ko": "관계형성",
        "name_en": "Rapport Building",
        "id": "PROCESS_RB_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "직면 = 내담자의 '모순'에 부드러운 '거울'을 비추는 것",
      "differential": "직면은 불일치를 지적하는 것이고, 해석은 행동이나 경험의 숨겨진 의미를 설명하는 것이다",
      "key_point": "직면은 공격이나 비난이 아니며, 충분한 관계가 형성된 후에 배려와 공감을 바탕으로 전달해야 한다",
      "common_mistake": "직면을 '따끔하게 지적하기'로 오해하기 쉬우나, 배려와 관심을 바탕으로 불일치를 인식하도록 돕는 것이다"
    }
  },
  {
    "id": "PROCESS_AE_020",
    "terminology": "심화된 공감 (Advanced Empathy)",
    "terminology_ko": "심화된 공감",
    "terminology_en": "Advanced Empathy",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 명시적으로 표현한 것 너머에 있는 암묵적 감정, 숨겨진 의미, 미처 인식하지 못한 주제를 포착하여 전달하는 깊은 수준의 공감이다. 일차적 공감을 넘어 내담자의 자기인식을 확장한다.",
    "definition_en": "A deep level of empathy that captures and communicates implicit feelings, hidden meanings, and unrecognized themes beyond what the client has explicitly expressed. It expands the client's self-awareness beyond primary empathy.",
    "significance": "상담 중기 이후에 사용되는 고급 기술로, 내담자의 통찰을 촉진하고 자기이해를 심화시키는 핵심 기법이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 에건",
        "name_en": "Gerard Egan",
        "contribution": "심화된 공감을 상담의 고급 기술로 개념화하고 일차적 공감과 구분하였다"
      },
      {
        "name_ko": "로버트 카코프",
        "name_en": "Robert Carkhuff",
        "contribution": "공감의 수준을 체계적으로 분류하여 심화된 공감의 위치를 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공감",
        "name_en": "Empathy",
        "id": "PROCESS_EM_006"
      },
      {
        "name_ko": "직면",
        "name_en": "Confrontation",
        "id": "PROCESS_CF_019"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PROCESS_IN_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "심화된 공감 = '수면 아래' 숨겨진 감정과 의미를 건져 올린다",
      "differential": "일차적 공감은 내담자가 표현한 감정을 반영하고, 심화된 공감은 표현되지 않은 암묵적 감정과 의미를 포착한다",
      "key_point": "심화된 공감은 충분한 관계가 형성된 후에 사용해야 하며, 내담자가 받아들일 준비가 되었는지 확인해야 한다",
      "common_mistake": "심화된 공감을 상담자의 주관적 추측으로 오해하기 쉬우나, 내담자의 단서에 기반한 정확한 포착이다"
    }
  },
  {
    "id": "PROCESS_IN_021",
    "terminology": "해석 (Interpretation)",
    "terminology_ko": "해석",
    "terminology_en": "Interpretation",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 행동, 감정, 사고 패턴에 대해 상담자가 이론적 틀에 기반하여 숨겨진 의미나 연결을 제시하는 기법이다. 내담자가 인식하지 못하는 무의식적 동기, 방어, 패턴을 밝혀준다.",
    "definition_en": "A technique in which the counselor presents hidden meanings or connections regarding the client's behavior, feelings, and thought patterns based on a theoretical framework. It reveals unconscious motivations, defenses, and patterns that the client does not recognize.",
    "significance": "정신역동적 상담의 핵심 기법이지만, 다양한 이론적 지향에서 활용되며 내담자의 통찰을 촉진하는 강력한 도구이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "해석을 정신분석의 핵심 기법으로 확립하였다"
      },
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "해석의 효과와 적절한 사용 시기를 실증적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "직면",
        "name_en": "Confrontation",
        "id": "PROCESS_CF_019"
      },
      {
        "name_ko": "심화된 공감",
        "name_en": "Advanced Empathy",
        "id": "PROCESS_AE_020"
      },
      {
        "name_ko": "정신분석",
        "name_en": "Psychoanalysis",
        "id": "PSYCHOD_PA_001"
      },
      {
        "name_ko": "통찰",
        "name_en": "Insight",
        "id": "PROCESS_IS_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "해석 = 내담자의 행동 '이면의 의미'를 이론적 렌즈로 읽어준다",
      "differential": "직면은 불일치를 지적하는 것이고, 해석은 행동이나 패턴의 숨겨진 의미를 설명하는 것이다",
      "key_point": "효과적인 해석은 내담자가 거의 인식할 수 있는 수준(근접발달영역)에서 제시되어야 한다",
      "common_mistake": "해석을 상담자의 일방적 설명으로 오해하기 쉬우나, 내담자와 함께 탐색하며 잠정적으로 제시하는 것이 효과적이다"
    }
  },
  {
    "id": "PROCESS_IS_022",
    "terminology": "통찰 (Insight)",
    "terminology_ko": "통찰",
    "terminology_en": "Insight",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 자신의 감정, 사고, 행동 패턴과 그 원인에 대해 새로운 이해와 인식에 도달하는 것이다. 상담 과정에서 탐색과 반영을 통해 자기 이해가 깊어지는 핵심 치료적 경험이다.",
    "definition_en": "The client reaching new understanding and awareness regarding their feelings, thought patterns, behavioral patterns, and their causes. It is a core therapeutic experience of deepening self-understanding through exploration and reflection in counseling.",
    "significance": "많은 상담 접근에서 변화의 핵심 메커니즘으로, 통찰은 자기인식의 확장을 통해 새로운 행동의 기초를 마련한다.",
    "key_researchers": [
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "탐색-통찰-실행 모델에서 통찰을 상담과정의 핵심 단계로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PROCESS_IN_021"
      },
      {
        "name_ko": "심화된 공감",
        "name_en": "Advanced Empathy",
        "id": "PROCESS_AE_020"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      }
    ],
    "sub_types": [
      "지적 통찰 (Intellectual Insight)",
      "정서적 통찰 (Emotional Insight)"
    ],
    "quiz_hints": {
      "mnemonic": "통찰 = '아하!' 순간 - 자기 자신에 대한 새로운 이해가 번쩍이는 것",
      "differential": "지적 통찰은 인지적 수준의 이해이고, 정서적 통찰은 감정적 수준에서 체험되는 이해로 더 깊은 변화를 가져온다",
      "key_point": "통찰만으로는 행동 변화가 보장되지 않으며, 통찰이 실행(action)으로 이어져야 완전한 변화가 된다",
      "common_mistake": "통찰을 상담의 최종 목표로 오해하기 쉬우나, 통찰은 변화의 시작이며 행동 실천으로 이어져야 한다"
    }
  },
  {
    "id": "PROCESS_SA_023",
    "terminology": "자기인식 (Self-Awareness)",
    "terminology_ko": "자기인식",
    "terminology_en": "Self-Awareness",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 자신의 감정, 가치관, 편견, 반응 패턴, 한계를 인식하는 것으로, 효과적인 상담 실천의 필수 조건이다. 상담자의 자기인식이 부족하면 역전이에 의해 상담이 왜곡될 수 있다.",
    "definition_en": "The counselor's awareness of one's own feelings, values, biases, reaction patterns, and limitations, which is a prerequisite for effective counseling practice. Lack of counselor self-awareness can distort counseling through countertransference.",
    "significance": "상담자 역량의 기초로, 자기인식 없이는 객관적이고 전문적인 상담 실천이 불가능하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "상담자의 자기일치성(congruence)을 핵심 조건으로 강조하여 자기인식의 중요성을 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      },
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "PROCESS_CT_024"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기인식 = 상담자가 먼저 '자기 자신을 아는 것' - 남을 돕기 전에 나를 안다",
      "differential": "내담자의 자기인식은 상담의 목표이고, 상담자의 자기인식은 상담의 전제 조건이다",
      "key_point": "상담자의 미해결 갈등이 역전이로 나타날 수 있으므로, 지속적인 자기성찰과 수퍼비전이 필요하다",
      "common_mistake": "자기인식을 한 번 달성하면 되는 것으로 오해하기 쉬우나, 지속적으로 발전시켜야 하는 평생의 과제이다"
    }
  },
  {
    "id": "PROCESS_CT_024",
    "terminology": "역전이 (Countertransference)",
    "terminology_ko": "역전이",
    "terminology_en": "Countertransference",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 내담자에 대해 갖는 의식적·무의식적 정서적 반응으로, 상담자 자신의 미해결 갈등이나 과거 경험에서 비롯될 수 있다. 현대적 관점에서는 역전이를 치료적 정보로 활용할 수 있다.",
    "definition_en": "The counselor's conscious and unconscious emotional reactions toward the client, which may stem from the counselor's own unresolved conflicts or past experiences. In the contemporary view, countertransference can be utilized as therapeutic information.",
    "significance": "상담자가 자신의 반응을 인식하고 관리하는 것이 전문적 실천의 핵심이며, 역전이를 치료적으로 활용하면 내담자 이해를 심화시킬 수 있다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "역전이 개념을 최초로 제안하고 치료의 장애물로 보았다"
      },
      {
        "name_ko": "하인리히 라커",
        "name_en": "Heinrich Racker",
        "contribution": "역전이를 치료적 도구로 재개념화하고 일치적·보완적 역전이를 구분하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "전이",
        "name_en": "Transference",
        "id": "PSYCHOD_TF_003"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      }
    ],
    "sub_types": [
      "일치적 역전이 (Concordant Countertransference)",
      "보완적 역전이 (Complementary Countertransference)"
    ],
    "quiz_hints": {
      "mnemonic": "역전이 = 전이의 '역방향' - 상담자가 내담자에게 자신의 감정을 투사한다",
      "differential": "전이는 내담자가 상담자에게 투사하는 것이고, 역전이는 상담자가 내담자에게 반응하는 것이다",
      "key_point": "현대적 관점에서 역전이는 제거해야 할 장애물이 아니라, 인식하고 활용해야 할 치료적 정보이다",
      "common_mistake": "역전이를 항상 부정적인 것으로 오해하기 쉬우나, 인식하고 관리하면 내담자 이해의 중요한 단서가 된다"
    }
  },
  {
    "id": "PROCESS_IM_025",
    "terminology": "즉시성 (Immediacy)",
    "terminology_ko": "즉시성",
    "terminology_en": "Immediacy",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 내담자와의 관계에서 지금 이 순간 일어나고 있는 상호작용, 감정, 역동에 대해 직접적으로 다루는 기법이다. 상담 관계 자체를 탐색의 대상으로 삼는 고급 기술이다.",
    "definition_en": "A technique in which the counselor directly addresses the interactions, feelings, and dynamics occurring in the present moment of the counseling relationship. It is an advanced skill that makes the counseling relationship itself a subject of exploration.",
    "significance": "상담 관계에서의 현재 경험을 치료적 소재로 활용하는 강력한 기법으로, 관계 단절 수리와 전이 작업에 효과적이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 에건",
        "name_en": "Gerard Egan",
        "contribution": "즉시성을 상담의 고급 기술로 개념화하고 활용 방법을 체계화하였다"
      },
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "즉시성의 유형과 효과를 실증적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "PROCESS_WA_005"
      },
      {
        "name_ko": "지금-여기",
        "name_en": "Here-and-Now",
        "id": "GROUP_HN_011"
      },
      {
        "name_ko": "직면",
        "name_en": "Confrontation",
        "id": "PROCESS_CF_019"
      }
    ],
    "sub_types": [
      "전체 관계 즉시성 (Overall Relationship Immediacy)",
      "현재 순간 즉시성 (Here-and-Now Immediacy)"
    ],
    "quiz_hints": {
      "mnemonic": "즉시성 = '지금 우리 사이에' 무슨 일이 일어나고 있는지를 직접 다룬다",
      "differential": "직면은 내담자의 불일치를 지적하는 것이고, 즉시성은 상담 관계에서 현재 일어나고 있는 역동을 다루는 것이다",
      "key_point": "즉시성은 '지금 여기서 당신에 대해 이야기하고 있을 때 나는 ~을 느낍니다'와 같은 형식으로 표현된다",
      "common_mistake": "즉시성을 상담자의 감정 표현으로만 이해하기 쉬우나, 상담 관계의 역동을 탐색하는 치료적 기법이다"
    }
  },
  {
    "id": "PROCESS_SD_026",
    "terminology": "상담자 자기개방 (Counselor Self-Disclosure)",
    "terminology_ko": "상담자 자기개방",
    "terminology_en": "Counselor Self-Disclosure",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 자신의 경험, 감정, 반응을 내담자에게 의도적으로 공유하는 기법으로, 내담자의 보편성 경험, 모델링, 관계 심화 등을 위해 전략적으로 사용한다.",
    "definition_en": "A technique in which the counselor intentionally shares personal experiences, feelings, or reactions with the client, used strategically for the client's universality experience, modeling, and deepening of the relationship.",
    "significance": "적절하게 사용하면 치료적 관계를 심화시키고 내담자의 변화를 촉진하지만, 부적절한 자기개방은 상담의 초점을 흐릴 수 있다.",
    "key_researchers": [
      {
        "name_ko": "클라라 힐",
        "name_en": "Clara Hill",
        "contribution": "상담자 자기개방의 유형, 효과, 적절한 사용 시기를 실증적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "즉시성",
        "name_en": "Immediacy",
        "id": "PROCESS_IM_025"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "PROCESS_WA_005"
      },
      {
        "name_ko": "일치성",
        "name_en": "Congruence",
        "id": "PERSON_CG_004"
      }
    ],
    "sub_types": [
      "자기관여 진술 (Self-involving Statement)",
      "자기노출 진술 (Self-disclosing Statement)"
    ],
    "quiz_hints": {
      "mnemonic": "상담자 자기개방 = 상담자도 '자기 이야기'를 나누되, 내담자를 위해 전략적으로",
      "differential": "자기관여 진술은 내담자에 대한 상담자의 현재 반응('지금 당신 이야기를 들으면서 감동을 받습니다')이고, 자기노출 진술은 상담자의 과거 경험을 나누는 것이다",
      "key_point": "상담자 자기개방은 반드시 내담자의 이익을 위해 사용되어야 하며, 상담자 자신의 필요를 충족하기 위해 사용되면 안 된다",
      "common_mistake": "상담자 자기개방을 자유롭게 자기 이야기를 하는 것으로 오해하기 쉬우나, 내담자의 치료적 이익을 위해 전략적으로 선택하는 것이다"
    }
  },
  {
    "id": "PROCESS_RST_027",
    "terminology": "재진술 (Restatement)",
    "terminology_ko": "재진술",
    "terminology_en": "Restatement",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자가 말한 내용의 핵심 단어나 구절을 거의 그대로 반복하여 내담자의 진술을 확인하고 더 깊은 탐색을 촉진하는 최소한의 상담 기법이다.",
    "definition_en": "A minimal counseling technique of repeating key words or phrases of what the client said almost verbatim to confirm the client's statement and facilitate deeper exploration.",
    "significance": "가장 간단하면서도 효과적인 경청 기법으로, 내담자가 자기 말을 다시 듣고 더 깊이 탐색하도록 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "재진술을 미시상담기술의 기본 기법으로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "바꾸어말하기",
        "name_en": "Paraphrasing",
        "id": "PROCESS_PP_014"
      },
      {
        "name_ko": "반영",
        "name_en": "Reflection",
        "id": "PROCESS_RE_012"
      },
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재진술 = 내담자의 핵심 단어를 '앵무새처럼' 되돌려주되, 전략적으로",
      "differential": "재진술은 핵심 단어를 거의 그대로 반복하고, 바꾸어말하기는 상담자의 언어로 재구성한다",
      "key_point": "재진술은 단순해 보이지만 어떤 단어를 선택하여 반복하느냐에 따라 탐색의 방향이 달라진다",
      "common_mistake": "재진술을 기계적인 반복으로 오해하기 쉬우나, 핵심 단어의 전략적 선택이 중요하다"
    }
  },
  {
    "id": "PROCESS_MR_028",
    "terminology": "최소격려 (Minimal Encouragers)",
    "terminology_ko": "최소격려",
    "terminology_en": "Minimal Encouragers",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담자가 '음', '네', '그래요', '계속하세요' 등의 짧은 반응으로 내담자의 이야기를 경청하고 있음을 전달하고 계속 말하도록 격려하는 기본적 상담 기법이다.",
    "definition_en": "A basic counseling technique using brief responses such as 'mm-hmm,' 'yes,' 'I see,' 'go on' to convey that the counselor is listening and encourage the client to continue speaking.",
    "significance": "가장 기본적인 경청 표현으로, 내담자의 이야기 흐름을 방해하지 않으면서 관심과 이해를 전달한다.",
    "key_researchers": [
      {
        "name_ko": "앨런 아이비",
        "name_en": "Allen Ivey",
        "contribution": "최소격려를 미시상담기술의 기본 요소로 분류하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "적극적 경청",
        "name_en": "Active Listening",
        "id": "PROCESS_AL_010"
      },
      {
        "name_ko": "관심기울이기",
        "name_en": "Attending",
        "id": "PROCESS_AT_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "최소격려 = '음~', '그렇군요' 등 작지만 '힘이 되는' 반응",
      "differential": "최소격려는 짧은 언어적 반응이고, 관심기울이기(attending)는 비언어적 행동(눈 맞춤, 자세 등)이다",
      "key_point": "최소격려는 상담의 흐름을 유지하면서 내담자에게 '계속 이야기해도 좋다'는 메시지를 전달한다",
      "common_mistake": "최소격려를 기계적으로 반복하면 오히려 진심이 느껴지지 않으므로, 자연스럽게 사용해야 한다"
    }
  },
  {
    "id": "PROCESS_RI_029",
    "terminology": "재구성 (Reframing)",
    "terminology_ko": "재구성",
    "terminology_en": "Reframing",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "내담자의 경험이나 상황을 다른 관점에서 바라볼 수 있도록 새로운 의미 틀을 제시하는 기법이다. 문제를 부정적 관점이 아닌 다른 각도에서 보게 함으로써 대처 가능성을 열어준다.",
    "definition_en": "A technique that offers a new frame of meaning to help the client view their experience or situation from a different perspective. By viewing problems from alternative angles rather than a negative perspective, it opens possibilities for coping.",
    "significance": "인지적 재구조화의 기본 기법으로, 다양한 상담 접근에서 활용되며 내담자의 사고 유연성을 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "폴 와츨라윅",
        "name_en": "Paul Watzlawick",
        "contribution": "재구성의 이론적 기초를 의사소통이론의 관점에서 정립하였다"
      },
      {
        "name_ko": "버지니아 사티어",
        "name_en": "Virginia Satir",
        "contribution": "가족치료에서 재구성 기법을 적극적으로 활용하고 발전시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 재구조화",
        "name_en": "Cognitive Restructuring",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "자동적 사고",
        "name_en": "Automatic Thoughts",
        "id": "CBT_AT_002"
      },
      {
        "name_ko": "해석",
        "name_en": "Interpretation",
        "id": "PROCESS_IN_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재구성 = 같은 그림을 다른 '액자(frame)'에 넣으면 다르게 보인다",
      "differential": "해석은 숨겨진 의미를 제시하는 것이고, 재구성은 같은 경험을 다른 관점에서 바라보게 하는 것이다",
      "key_point": "재구성은 사실을 바꾸는 것이 아니라, 사실에 대한 관점(프레임)을 바꾸는 것이다",
      "common_mistake": "재구성을 '긍정적으로만 보기'로 오해하기 쉬우나, 다양한 관점의 가능성을 열어주는 것이지 무조건적 긍정이 아니다"
    }
  },
  {
    "id": "PROCESS_II_030",
    "terminology": "접수면접 (Intake Interview)",
    "terminology_ko": "접수면접",
    "terminology_en": "Intake Interview",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담의 첫 단계에서 내담자의 호소문제, 배경 정보, 상담 기대, 위험 요인 등을 체계적으로 수집하는 초기 면접이다. 사례개념화와 치료 계획의 기초 자료를 마련한다.",
    "definition_en": "An initial interview in the first stage of counseling that systematically collects the client's presenting problems, background information, counseling expectations, and risk factors. It provides foundational data for case conceptualization and treatment planning.",
    "significance": "효과적인 상담의 출발점으로, 정확한 정보 수집이 적절한 사례개념화와 치료 계획을 가능하게 한다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "접수면접의 구성 요소와 절차를 상담과정의 맥락에서 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      },
      {
        "name_ko": "사례개념화",
        "name_en": "Case Conceptualization",
        "id": "PROCESS_CC_007"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      },
      {
        "name_ko": "관계형성",
        "name_en": "Rapport Building",
        "id": "PROCESS_RB_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "접수면접 = 상담의 '입구' - 내담자를 처음 만나 정보를 수집하는 단계",
      "differential": "접수면접은 정보 수집과 적합성 평가가 목적이고, 이후의 상담 회기는 치료적 개입이 목적이다",
      "key_point": "접수면접에서는 호소문제, 과거력, 가족력, 현재 기능 수준, 위험 요인, 상담 기대를 체계적으로 파악한다",
      "common_mistake": "접수면접을 단순한 행정 절차로 오해하기 쉬우나, 관계 형성과 치료적 평가가 동시에 이루어지는 중요한 과정이다"
    }
  },
  {
    "id": "PROCESS_HA_030",
    "terminology": "과제 부여 (Homework Assignment)",
    "terminology_ko": "과제 부여",
    "terminology_en": "Homework Assignment",
    "category": "PROCESS",
    "category_name": "상담과정과 기법 (Counseling Process & Skills)",
    "definition": "상담 회기 간에 내담자가 수행하도록 설계된 치료적 활동으로, 회기 중 학습한 내용을 일상에 적용하고 연습하게 하여 치료 효과를 극대화한다. 인지행동치료에서 특히 강조된다.",
    "definition_en": "Therapeutic activities designed for clients to perform between counseling sessions, maximizing treatment effects by having clients apply and practice what they learned in sessions to daily life. Particularly emphasized in cognitive-behavioral therapy.",
    "significance": "상담 효과의 일상 전이를 촉진하는 핵심 전략으로, 주당 1회의 상담만으로는 충분하지 않은 변화를 지속적 연습으로 강화한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "인지치료에서 과제 부여를 치료의 핵심 요소로 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "CBT_CT_001"
      },
      {
        "name_ko": "지시",
        "name_en": "Directive",
        "id": "FAMILY_DR_028"
      },
      {
        "name_ko": "상담과정",
        "name_en": "Counseling Process",
        "id": "PROCESS_CP_001"
      }
    ],
    "sub_types": [
      "행동 실험",
      "사고 기록지",
      "독서 치료",
      "이완 연습",
      "행동 활성화 과제"
    ],
    "quiz_hints": {
      "mnemonic": "과제 부여 = 상담실 밖에서도 '연습과 적용'을 계속한다",
      "differential": "과제 부여는 상담자가 치료적 목적으로 설계한 구조화된 활동이고, 단순한 조언은 구체적 활동 없이 방향만 제시하는 것이다",
      "key_point": "과제는 내담자와 협력적으로 설계하고, 수행 결과를 다음 회기에서 반드시 검토해야 한다",
      "common_mistake": "과제 불이행을 내담자의 비협조로만 보기 쉬우나, 과제의 적절성, 난이도, 동기 수준을 점검해야 한다"
    }
  }
];

TERMS_DATA.ETHICS = [
  {
    "id": "ETHICS_CE_001",
    "terminology": "상담윤리 (Counseling Ethics)",
    "terminology_ko": "상담윤리",
    "terminology_en": "Counseling Ethics",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 전문적 실천에서 지켜야 할 도덕적 원칙과 행동 기준의 체계로, 내담자의 복지 보호, 전문가로서의 책임, 사회적 의무를 포함한다. 윤리 강령과 법적 규정을 모두 아우른다.",
    "definition_en": "A system of moral principles and behavioral standards that counselors must uphold in professional practice, encompassing client welfare protection, professional responsibility, and social obligations. It covers both ethical codes and legal regulations.",
    "significance": "상담 전문직의 정체성과 신뢰의 기반이며, 내담자를 해로부터 보호하고 전문적 관계의 건전성을 유지하는 핵심 체계이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "상담윤리의 체계적 의사결정 모델을 개발하고 윤리적 실천의 이론적 기초를 정립하였다"
      },
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "상담윤리의 핵심 원칙과 실제적 적용을 통합적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      },
      {
        "name_ko": "다중관계",
        "name_en": "Multiple Relationships",
        "id": "ETHICS_MR_005"
      },
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      }
    ],
    "sub_types": [
      "의무론적 윤리",
      "공리주의적 윤리",
      "덕 윤리",
      "돌봄 윤리"
    ],
    "quiz_hints": {
      "mnemonic": "상담윤리 = 상담의 '나침반' - 전문적 실천의 방향을 안내한다",
      "differential": "윤리(ethics)는 도덕적 원칙과 판단의 체계이고, 법(law)은 국가가 강제하는 행동 규범이다. 윤리적 기준이 법적 기준보다 높을 수 있다",
      "key_point": "상담윤리는 단순한 규칙 준수가 아니라, 윤리적 의사결정 능력과 도덕적 민감성을 요구하는 지속적 과정이다",
      "common_mistake": "법만 지키면 윤리적이라고 오해하기 쉬우나, 합법적이면서도 비윤리적인 행동이 존재할 수 있다"
    }
  },
  {
    "id": "ETHICS_IC_002",
    "terminology": "사전동의 (Informed Consent)",
    "terminology_ko": "사전동의",
    "terminology_en": "Informed Consent",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담을 시작하기 전에 내담자에게 상담의 성격, 목적, 절차, 한계, 비용, 비밀보장의 범위와 한계 등에 대해 충분히 설명하고, 이를 이해한 내담자의 자발적 동의를 얻는 과정이다.",
    "definition_en": "The process of fully explaining the nature, purpose, procedures, limitations, costs, and scope and limits of confidentiality to the client before beginning counseling, and obtaining the client's voluntary agreement based on this understanding.",
    "significance": "내담자의 자율성을 존중하고 자기결정권을 보장하는 핵심 윤리 원칙으로, 상담 관계의 윤리적 토대이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "사전동의의 구성 요소와 윤리적 중요성을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "자율성",
        "name_en": "Autonomy",
        "id": "ETHICS_AU_010"
      },
      {
        "name_ko": "접수면접",
        "name_en": "Intake Interview",
        "id": "PROCESS_II_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사전동의 = 상담 '계약서' - 무엇을 하고, 무엇을 기대하고, 무엇이 한계인지를 미리 알려주고 동의를 받는다",
      "differential": "사전동의는 상담 전의 정보 제공과 동의 과정이고, 비밀보장은 상담 중에 적용되는 정보 보호 원칙이다",
      "key_point": "사전동의는 일회성이 아니라, 상담 과정에서 새로운 상황이 발생할 때마다 갱신되어야 하는 지속적 과정이다",
      "common_mistake": "사전동의를 서류에 서명받는 것으로만 이해하기 쉬우나, 내담자가 충분히 이해하고 자발적으로 동의하는 과정이 핵심이다"
    }
  },
  {
    "id": "ETHICS_CF_003",
    "terminology": "비밀보장 (Confidentiality)",
    "terminology_ko": "비밀보장",
    "terminology_en": "Confidentiality",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담 과정에서 내담자가 공유한 정보를 내담자의 동의 없이 제3자에게 공개하지 않을 상담자의 윤리적 의무이다. 단, 자해·타해 위험, 아동학대, 법원 명령 등 예외적 상황이 존재한다.",
    "definition_en": "The counselor's ethical obligation not to disclose information shared by the client during counseling to third parties without the client's consent. However, exceptions exist for situations such as risk of self-harm or harm to others, child abuse, and court orders.",
    "significance": "내담자가 안전하게 자기를 개방할 수 있는 신뢰의 토대이며, 비밀보장 없이는 효과적인 상담이 불가능하다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "비밀보장의 원칙과 예외 상황을 윤리적·법적 관점에서 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      },
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "특권적 의사소통",
        "name_en": "Privileged Communication",
        "id": "ETHICS_PC_007"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비밀보장 = 상담의 '금고' - 내담자의 이야기를 안전하게 지킨다",
      "differential": "비밀보장(confidentiality)은 윤리적 의무이고, 특권적 의사소통(privileged communication)은 법적 보호이다",
      "key_point": "비밀보장에는 예외가 있으며(자해·타해 위험, 아동학대 등), 이를 사전동의 시 내담자에게 반드시 고지해야 한다",
      "common_mistake": "비밀보장이 절대적이라고 오해하기 쉬우나, 명확한 예외 상황이 존재하며 이를 내담자에게 사전에 고지해야 한다"
    }
  },
  {
    "id": "ETHICS_SC_004",
    "terminology": "역량 범위 (Scope of Competence)",
    "terminology_ko": "역량 범위",
    "terminology_en": "Scope of Competence",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 교육, 훈련, 경험을 통해 갖추고 있는 전문적 능력의 범위로, 상담자는 자신의 역량 범위 내에서만 서비스를 제공해야 한다. 역량 밖의 사례는 의뢰해야 한다.",
    "definition_en": "The range of professional abilities that a counselor possesses through education, training, and experience. Counselors must provide services only within their scope of competence and refer cases outside their competence.",
    "significance": "내담자의 복지를 보호하는 핵심 윤리 원칙으로, 역량 밖의 서비스 제공은 내담자에게 해를 끼칠 수 있다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "역량 범위의 윤리적 중요성과 지속적 전문성 개발의 필요성을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "의뢰",
        "name_en": "Referral",
        "id": "PROCESS_RF_008"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      },
      {
        "name_ko": "선행",
        "name_en": "Beneficence",
        "id": "ETHICS_BN_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역량 범위 = '할 수 있는 것만 한다' - 못하는 건 할 수 있는 사람에게 맡긴다",
      "differential": "역량 범위는 현재 가지고 있는 능력의 한계이고, 전문성 발달은 그 한계를 확장하는 지속적 과정이다",
      "key_point": "역량 범위를 인식하고 역량 밖의 사례를 의뢰하는 것은 약점이 아니라 전문적 책임이다",
      "common_mistake": "모든 내담자를 도울 수 있어야 한다고 오해하기 쉬우나, 역량 밖의 사례를 의뢰하는 것이 윤리적 실천이다"
    }
  },
  {
    "id": "ETHICS_MR_005",
    "terminology": "다중관계 (Multiple Relationships)",
    "terminology_ko": "다중관계",
    "terminology_en": "Multiple Relationships",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 내담자와 전문적 상담 관계 외에 다른 관계(사회적, 경제적, 개인적 등)를 동시에 맺는 것을 말한다. 다중관계는 객관성을 손상시키고 내담자에게 해를 끼칠 위험이 있어 일반적으로 피해야 한다.",
    "definition_en": "When a counselor simultaneously maintains a relationship with a client beyond the professional counseling relationship, such as social, financial, or personal relationships. Multiple relationships generally should be avoided as they can compromise objectivity and risk harm to the client.",
    "significance": "상담의 전문성과 객관성을 보호하는 핵심 윤리 원칙으로, 소규모 지역사회나 특수 환경에서 완전한 회피가 어려울 수 있어 윤리적 판단이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "다중관계의 유형과 윤리적 판단 기준을 체계적으로 기술하였다"
      },
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "다중관계의 위험 요인과 관리 전략을 윤리적 의사결정 모델에 포함시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "경계 위반",
        "name_en": "Boundary Violation",
        "id": "ETHICS_BV_009"
      },
      {
        "name_ko": "착취",
        "name_en": "Exploitation",
        "id": "ETHICS_EX_016"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      }
    ],
    "sub_types": [
      "성적 다중관계",
      "사업적 다중관계",
      "사회적 다중관계",
      "교육적 다중관계"
    ],
    "quiz_hints": {
      "mnemonic": "다중관계 = 상담자가 내담자와 '여러 모자'를 쓰는 것 - 상담자이면서 친구, 사업 파트너 등",
      "differential": "경계 횡단(boundary crossing)은 잠재적으로 유익할 수 있는 일시적 변화이고, 경계 위반(boundary violation)은 해로운 다중관계이다",
      "key_point": "모든 다중관계가 비윤리적인 것은 아니지만, 잠재적 해로움을 신중히 평가하고 내담자 복지를 최우선으로 해야 한다",
      "common_mistake": "소규모 지역사회에서의 불가피한 다중관계를 무조건 비윤리적으로 판단하기 쉬우나, 맥락에 따른 신중한 윤리적 판단이 필요하다"
    }
  },
  {
    "id": "ETHICS_LC_006",
    "terminology": "비밀보장의 한계 (Limits of Confidentiality)",
    "terminology_ko": "비밀보장의 한계",
    "terminology_en": "Limits of Confidentiality",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "비밀보장 원칙이 적용되지 않는 예외적 상황으로, 자해·타해의 심각한 위험, 아동·노인·장애인 학대, 법원 명령, 감염성 질환 등이 포함된다. 사전동의 시 반드시 고지해야 한다.",
    "definition_en": "Exceptional situations where the confidentiality principle does not apply, including serious risk of self-harm or harm to others, abuse of children/elderly/disabled, court orders, and communicable diseases. These must be disclosed during informed consent.",
    "significance": "비밀보장과 타인 보호 의무 사이의 윤리적 딜레마를 해결하는 핵심 지침으로, 상담자의 윤리적 판단이 가장 시험받는 영역이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "비밀보장의 한계 상황과 윤리적 의사결정 과정을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      },
      {
        "name_ko": "경고의 의무",
        "name_en": "Duty to Warn",
        "id": "ETHICS_DW_017"
      },
      {
        "name_ko": "통보의 의무",
        "name_en": "Duty to Report",
        "id": "ETHICS_DR_018"
      }
    ],
    "sub_types": [
      "자해 위험",
      "타해 위험",
      "아동학대 의심",
      "법원 명령",
      "감염성 질환"
    ],
    "quiz_hints": {
      "mnemonic": "비밀보장의 한계 = '생명과 안전'이 비밀보장보다 우선한다",
      "differential": "비밀보장은 일반 원칙이고, 비밀보장의 한계는 그 원칙이 적용되지 않는 예외 상황이다",
      "key_point": "비밀보장의 한계를 사전동의 시 내담자에게 반드시 고지해야 하며, 이를 생략하면 비밀보장 위반보다 더 큰 윤리적 문제가 된다",
      "common_mistake": "비밀보장의 한계 상황에서 즉시 공개해야 한다고 오해하기 쉬우나, 가능한 한 내담자에게 먼저 알리고 함께 대응하는 것이 바람직하다"
    }
  },
  {
    "id": "ETHICS_PC_007",
    "terminology": "특권적 의사소통 (Privileged Communication)",
    "terminology_ko": "특권적 의사소통",
    "terminology_en": "Privileged Communication",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "법적으로 보호되는 의사소통으로, 법원에서 상담 과정의 내용을 증거로 공개하도록 강제할 수 없는 법적 권리이다. 이 권리는 내담자에게 속하며, 내담자만이 이를 포기할 수 있다.",
    "definition_en": "Legally protected communication that prevents courts from compelling disclosure of counseling content as evidence. This right belongs to the client, and only the client can waive it.",
    "significance": "비밀보장의 법적 보호 장치로, 내담자가 법적 절차에서도 상담 내용이 보호받을 수 있게 하는 중요한 법적 권리이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "특권적 의사소통의 법적 근거와 적용 범위를 상담윤리의 맥락에서 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "특권적 의사소통 = '법정의 방패' - 법원도 상담 내용을 강제로 열 수 없다",
      "differential": "비밀보장은 윤리적 의무이고, 특권적 의사소통은 법적 권리이다. 비밀보장은 모든 상담에 적용되지만, 특권적 의사소통은 법에 따라 인정 범위가 다르다",
      "key_point": "특권적 의사소통의 권리는 상담자가 아닌 내담자에게 속하므로, 내담자만이 이를 포기할 수 있다",
      "common_mistake": "특권적 의사소통이 모든 상담에 자동적으로 적용된다고 오해하기 쉬우나, 법률에 따라 인정 범위와 조건이 다르다"
    }
  },
  {
    "id": "ETHICS_SV_008",
    "terminology": "수퍼비전 (Supervision)",
    "terminology_ko": "수퍼비전",
    "terminology_en": "Supervision",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "경험 있는 전문가(수퍼바이저)가 수련 중인 상담자(수퍼바이지)의 전문적 발달을 지도하고 평가하는 과정으로, 내담자의 복지 보호와 상담자의 역량 개발이라는 이중 목적을 갖는다.",
    "definition_en": "The process in which an experienced professional (supervisor) guides and evaluates the professional development of a trainee counselor (supervisee), serving the dual purpose of protecting client welfare and developing the counselor's competence.",
    "significance": "상담자 훈련의 핵심 구성 요소이자 내담자 보호의 안전장치로, 윤리적이고 효과적인 상담 실천을 보장하는 필수 과정이다.",
    "key_researchers": [
      {
        "name_ko": "캐롤 팔콘나드 스콧",
        "name_en": "Janine Bernard",
        "contribution": "수퍼비전의 차별 모델(Discrimination Model)을 개발하여 역할(교사, 상담자, 자문가)에 따른 수퍼비전을 체계화하였다"
      },
      {
        "name_ko": "칼 스톨텐베르그",
        "name_en": "Cal Stoltenberg",
        "contribution": "통합적 발달 모델(IDM)을 통해 수퍼바이지의 발달 수준에 맞는 수퍼비전을 제안하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "공동리더십",
        "name_en": "Co-Leadership",
        "id": "GROUP_CL_018"
      }
    ],
    "sub_types": [
      "개인 수퍼비전",
      "집단 수퍼비전",
      "동료 수퍼비전",
      "실시간 수퍼비전"
    ],
    "quiz_hints": {
      "mnemonic": "수퍼비전 = '슈퍼(Super) + 비전(Vision)' - 경험자의 더 넓은 시야로 수련생을 안내한다",
      "differential": "수퍼비전은 전문적 발달과 내담자 보호를 위한 평가적 관계이고, 자문(consultation)은 동등한 전문가 간의 비평가적 협력이다",
      "key_point": "수퍼바이저는 수퍼바이지의 내담자에 대해 간접적 윤리적·법적 책임을 진다",
      "common_mistake": "수퍼비전을 단순한 사례 논의나 조언으로 오해하기 쉬우나, 평가, 게이트키핑, 전문적 발달 촉진을 포함하는 포괄적 과정이다"
    }
  },
  {
    "id": "ETHICS_BV_009",
    "terminology": "경계 위반 (Boundary Violation)",
    "terminology_ko": "경계 위반",
    "terminology_en": "Boundary Violation",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 전문적 관계의 경계를 넘어 내담자에게 해를 끼치거나 착취하는 행위이다. 성적 관계, 경제적 착취, 사적 이익 추구 등이 포함되며, 전문직의 가장 심각한 윤리 위반에 해당한다.",
    "definition_en": "Actions in which the counselor crosses professional relationship boundaries to harm or exploit the client, including sexual relationships, financial exploitation, and pursuit of personal gain. These constitute the most serious ethical violations of the profession.",
    "significance": "전문적 관계의 건전성을 파괴하고 내담자에게 심각한 해를 끼치는 가장 심각한 윤리 위반으로, 면허 취소의 주요 사유이다.",
    "key_researchers": [
      {
        "name_ko": "케네스 포프",
        "name_en": "Kenneth Pope",
        "contribution": "치료자-내담자 성적 관계의 해로움을 실증적으로 연구하고 경계 윤리를 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "다중관계",
        "name_en": "Multiple Relationships",
        "id": "ETHICS_MR_005"
      },
      {
        "name_ko": "착취",
        "name_en": "Exploitation",
        "id": "ETHICS_EX_016"
      },
      {
        "name_ko": "경계 횡단",
        "name_en": "Boundary Crossing",
        "id": "ETHICS_BC_019"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [
      "성적 경계 위반",
      "경제적 경계 위반",
      "사회적 경계 위반"
    ],
    "quiz_hints": {
      "mnemonic": "경계 위반 = 전문적 관계의 '금지선'을 넘는 것 - 특히 성적 관계가 가장 심각",
      "differential": "경계 횡단(crossing)은 잠재적으로 유익할 수 있는 일시적 변화이고, 경계 위반(violation)은 내담자에게 해를 끼치는 착취적 행위이다",
      "key_point": "내담자와의 성적 관계는 상담 종결 후에도 일정 기간(보통 2~5년) 금지되며, 대부분의 윤리 강령에서 가장 심각한 위반으로 규정한다",
      "common_mistake": "경계 위반이 항상 명백하게 드러난다고 오해하기 쉬우나, 점진적으로 경계가 침식되는 '미끄러운 경사면(slippery slope)' 현상에 주의해야 한다"
    }
  },
  {
    "id": "ETHICS_AU_010",
    "terminology": "자율성 (Autonomy)",
    "terminology_ko": "자율성",
    "terminology_en": "Autonomy",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자가 자신의 삶에 관한 결정을 스스로 내릴 수 있는 권리를 존중하는 윤리 원칙이다. 상담자는 내담자의 자기결정권을 존중하고, 내담자 스스로 선택하고 결정할 수 있도록 지원해야 한다.",
    "definition_en": "The ethical principle of respecting the client's right to make their own decisions about their life. Counselors should respect client self-determination and support clients in making their own choices and decisions.",
    "significance": "키치너(Kitchener)가 제시한 상담윤리의 5대 원칙 중 하나로, 사전동의의 이론적 기반이며 내담자 중심 실천의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "카렌 키치너",
        "name_en": "Karen Kitchener",
        "contribution": "상담윤리의 5대 도덕 원칙(자율성, 선행, 무해, 정의, 충실성)을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      },
      {
        "name_ko": "선행",
        "name_en": "Beneficence",
        "id": "ETHICS_BN_011"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자율성 = '내 인생은 내가 결정한다' - 상담자는 대신 결정하지 않는다",
      "differential": "자율성은 내담자의 자기결정권이고, 온정적 간섭주의(paternalism)는 상담자가 내담자를 위해 결정을 대신하는 것이다",
      "key_point": "자율성 존중은 내담자가 자해·타해 위험이 있을 때 한계에 부딪히며, 이때 선행·무해 원칙과의 균형이 필요하다",
      "common_mistake": "자율성 존중을 내담자의 모든 결정에 동의하는 것으로 오해하기 쉬우나, 자기결정 능력을 갖추도록 돕는 것이 핵심이다"
    }
  },
  {
    "id": "ETHICS_BN_011",
    "terminology": "선행 (Beneficence)",
    "terminology_ko": "선행",
    "terminology_en": "Beneficence",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자의 복지와 이익을 적극적으로 증진하기 위해 행동해야 한다는 윤리 원칙이다. 상담자는 내담자에게 도움이 되는 방향으로 전문적 역량을 발휘해야 한다.",
    "definition_en": "The ethical principle requiring counselors to actively promote the welfare and benefit of clients. Counselors should exercise professional competence in ways that are helpful to clients.",
    "significance": "키치너의 5대 원칙 중 하나로, 상담의 근본 목적인 내담자 복지 증진을 윤리적 의무로 규정한다.",
    "key_researchers": [
      {
        "name_ko": "카렌 키치너",
        "name_en": "Karen Kitchener",
        "contribution": "선행을 상담윤리의 5대 도덕 원칙 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      },
      {
        "name_ko": "자율성",
        "name_en": "Autonomy",
        "id": "ETHICS_AU_010"
      },
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "선행 = '좋은 일을 하라' - 내담자에게 도움이 되도록 적극적으로 행동한다",
      "differential": "선행(beneficence)은 적극적으로 이익을 증진하는 것이고, 무해(nonmaleficence)는 해를 끼치지 않는 것이다. '좋은 일을 하기' vs '나쁜 일을 하지 않기'",
      "key_point": "선행은 단순히 해를 피하는 것(무해)을 넘어, 적극적으로 내담자의 복지를 증진해야 한다는 의무이다",
      "common_mistake": "선행을 내담자의 모든 요구를 충족시키는 것으로 오해하기 쉬우나, 전문적 판단에 기반한 내담자 이익 증진이다"
    }
  },
  {
    "id": "ETHICS_NM_012",
    "terminology": "무해 (Nonmaleficence)",
    "terminology_ko": "무해",
    "terminology_en": "Nonmaleficence",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자에게 해를 끼치지 않아야 한다는 윤리 원칙으로, '우선 해를 끼치지 말라(Primum non nocere)'의 원칙이다. 상담자의 행동이 내담자에게 해가 되지 않도록 주의해야 한다.",
    "definition_en": "The ethical principle of not causing harm to clients, embodied in the maxim 'First, do no harm (Primum non nocere).' Counselors must take care that their actions do not harm clients.",
    "significance": "가장 기본적인 윤리 원칙으로, 다른 모든 원칙에 우선하며 상담자의 일차적 의무이다.",
    "key_researchers": [
      {
        "name_ko": "카렌 키치너",
        "name_en": "Karen Kitchener",
        "contribution": "무해를 상담윤리의 5대 도덕 원칙 중 가장 기본적인 원칙으로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "선행",
        "name_en": "Beneficence",
        "id": "ETHICS_BN_011"
      },
      {
        "name_ko": "경계 위반",
        "name_en": "Boundary Violation",
        "id": "ETHICS_BV_009"
      },
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무해 = '해를 끼치지 말라' - 의료 윤리의 황금률을 상담에 적용",
      "differential": "무해는 해를 끼치지 않는 소극적 의무이고, 선행은 이익을 증진하는 적극적 의무이다",
      "key_point": "무해 원칙은 다른 원칙과 충돌할 때 일반적으로 우선하며, '해를 끼치지 않는 것'이 최소한의 의무이다",
      "common_mistake": "무해를 '아무것도 하지 않는 것'으로 오해하기 쉬우나, 부작위(omission)에 의한 해도 포함한다"
    }
  },
  {
    "id": "ETHICS_JU_013",
    "terminology": "정의 (Justice)",
    "terminology_ko": "정의",
    "terminology_en": "Justice",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "모든 내담자에게 공정하고 공평한 서비스를 제공해야 한다는 윤리 원칙으로, 인종, 성별, 성적 지향, 종교, 사회경제적 지위 등에 의한 차별 없이 평등한 접근을 보장한다.",
    "definition_en": "The ethical principle requiring fair and equitable services for all clients, guaranteeing equal access without discrimination based on race, gender, sexual orientation, religion, socioeconomic status, or other factors.",
    "significance": "키치너의 5대 원칙 중 하나로, 다문화적 역량과 사회정의 실천의 윤리적 기반이다.",
    "key_researchers": [
      {
        "name_ko": "카렌 키치너",
        "name_en": "Karen Kitchener",
        "contribution": "정의를 상담윤리의 5대 도덕 원칙 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "다문화 역량",
        "name_en": "Multicultural Competence",
        "id": "ETHICS_MC_014"
      },
      {
        "name_ko": "자율성",
        "name_en": "Autonomy",
        "id": "ETHICS_AU_010"
      }
    ],
    "sub_types": [
      "분배적 정의",
      "절차적 정의"
    ],
    "quiz_hints": {
      "mnemonic": "정의 = '공정하게' - 모든 내담자에게 차별 없이 공평한 서비스를 제공한다",
      "differential": "정의는 공평한 대우에 관한 원칙이고, 선행은 이익 증진에 관한 원칙이다",
      "key_point": "정의는 동일한 대우(equality)만이 아니라, 개인의 필요에 따른 공평한 대우(equity)를 포함한다",
      "common_mistake": "정의를 모든 내담자에게 동일한 서비스를 제공하는 것으로 오해하기 쉬우나, 개인의 필요에 맞는 공평한 서비스가 핵심이다"
    }
  },
  {
    "id": "ETHICS_MC_014",
    "terminology": "다문화 역량 (Multicultural Competence)",
    "terminology_ko": "다문화 역량",
    "terminology_en": "Multicultural Competence",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 다양한 문화적 배경을 가진 내담자를 효과적으로 상담하기 위해 갖추어야 할 인식, 지식, 기술의 총체이다. 자신의 문화적 편견을 인식하고, 내담자의 문화를 이해하며, 문화적으로 적합한 개입을 사용하는 능력이다.",
    "definition_en": "The totality of awareness, knowledge, and skills that counselors must possess to effectively counsel clients from diverse cultural backgrounds. It includes recognizing one's own cultural biases, understanding clients' cultures, and using culturally appropriate interventions.",
    "significance": "현대 상담에서 윤리적 실천의 필수 요소로, 문화적 차이를 고려하지 않은 상담은 내담자에게 해를 끼칠 수 있다.",
    "key_researchers": [
      {
        "name_ko": "데럴드 수",
        "name_en": "Derald Wing Sue",
        "contribution": "다문화 상담 역량의 3차원 모델(인식, 지식, 기술)을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정의",
        "name_en": "Justice",
        "id": "ETHICS_JU_013"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [
      "인식 (자기 문화적 편견의 자각)",
      "지식 (내담자 문화에 대한 이해)",
      "기술 (문화적으로 적합한 개입)"
    ],
    "quiz_hints": {
      "mnemonic": "다문화 역량의 3요소 = 인지기(인식, 지식, 기술)",
      "differential": "다문화 인식은 자신의 편견을 자각하는 것이고, 다문화 지식은 다른 문화에 대해 배우는 것이며, 다문화 기술은 적합한 개입을 실천하는 것이다",
      "key_point": "다문화 역량은 특정 문화에 대한 전문 지식만이 아니라, 모든 내담자의 문화적 맥락을 존중하는 태도가 기본이다",
      "common_mistake": "다문화 역량을 외국인 내담자에게만 필요한 것으로 오해하기 쉬우나, 성별, 세대, 사회계층 등 모든 문화적 차이에 적용된다"
    }
  },
  {
    "id": "ETHICS_FD_015",
    "terminology": "충실성 (Fidelity)",
    "terminology_ko": "충실성",
    "terminology_en": "Fidelity",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 내담자와의 약속과 신뢰를 지키고 전문적 관계에서 정직하고 성실하게 행동해야 한다는 윤리 원칙이다. 신뢰의 기반 위에 치료적 관계가 형성된다.",
    "definition_en": "The ethical principle that counselors should keep promises and trust with clients and act honestly and faithfully in the professional relationship. The therapeutic relationship is formed on the foundation of trust.",
    "significance": "키치너의 5대 원칙 중 하나로, 상담 관계의 신뢰 기반을 유지하는 핵심 원칙이다.",
    "key_researchers": [
      {
        "name_ko": "카렌 키치너",
        "name_en": "Karen Kitchener",
        "contribution": "충실성을 상담윤리의 5대 도덕 원칙 중 하나로 정립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "작업동맹",
        "name_en": "Working Alliance",
        "id": "PROCESS_WA_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "충실성 = '약속을 지킨다' - 신뢰는 상담 관계의 생명줄이다",
      "differential": "충실성은 약속과 신뢰를 지키는 원칙이고, 선행은 적극적으로 이익을 증진하는 원칙이다",
      "key_point": "충실성은 비밀보장, 사전동의 이행, 약속 시간 준수 등 구체적 행동으로 실천된다",
      "common_mistake": "충실성을 단순한 '정직'으로만 이해하기 쉬우나, 약속 이행, 신뢰 유지, 성실한 태도를 모두 포함하는 포괄적 원칙이다"
    }
  },
  {
    "id": "ETHICS_EX_016",
    "terminology": "착취 (Exploitation)",
    "terminology_ko": "착취",
    "terminology_en": "Exploitation",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 내담자와의 관계에서 발생하는 권력 차이를 이용하여 상담자 자신의 이익(성적, 경제적, 정서적 등)을 추구하는 비윤리적 행위이다.",
    "definition_en": "Unethical behavior in which the counselor uses the power differential inherent in the counseling relationship to pursue personal gain (sexual, financial, emotional, etc.).",
    "significance": "상담 관계의 본질적 권력 불균형을 인식하고 이를 악용하지 않는 것이 상담자의 기본적 윤리적 의무이다.",
    "key_researchers": [
      {
        "name_ko": "케네스 포프",
        "name_en": "Kenneth Pope",
        "contribution": "상담자의 착취적 행동, 특히 성적 착취의 해로움과 예방 방안을 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계 위반",
        "name_en": "Boundary Violation",
        "id": "ETHICS_BV_009"
      },
      {
        "name_ko": "다중관계",
        "name_en": "Multiple Relationships",
        "id": "ETHICS_MR_005"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      }
    ],
    "sub_types": [
      "성적 착취",
      "경제적 착취",
      "정서적 착취"
    ],
    "quiz_hints": {
      "mnemonic": "착취 = 상담자의 '권력'을 자기 이익을 위해 남용하는 것",
      "differential": "경계 위반은 전문적 경계를 넘는 행위의 총칭이고, 착취는 그 중에서 상담자가 자기 이익을 위해 권력을 남용하는 것이다",
      "key_point": "상담 관계에는 본질적으로 권력 불균형이 존재하며, 이 불균형을 인식하고 책임감 있게 관리하는 것이 상담자의 의무이다",
      "common_mistake": "착취가 명백한 악의에서만 발생한다고 오해하기 쉬우나, 상담자가 자신의 정서적 필요를 내담자를 통해 충족하는 미묘한 형태도 착취에 해당할 수 있다"
    }
  },
  {
    "id": "ETHICS_DW_017",
    "terminology": "경고의 의무 (Duty to Warn)",
    "terminology_ko": "경고의 의무",
    "terminology_en": "Duty to Warn",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자가 특정 제3자에게 심각하고 임박한 위험을 가할 가능성이 있을 때, 상담자가 그 제3자에게 위험을 경고해야 하는 법적·윤리적 의무이다. 타라소프 판결에서 확립된 원칙이다.",
    "definition_en": "The legal and ethical obligation of a counselor to warn a specific third party when a client poses a serious and imminent risk of harm to that person. This principle was established by the Tarasoff ruling.",
    "significance": "비밀보장과 타인 보호 의무의 충돌을 다루는 가장 유명한 법적 판례로, 상담 윤리와 법의 교차점을 대표한다.",
    "key_researchers": [
      {
        "name_ko": "캘리포니아 대법원",
        "name_en": "California Supreme Court",
        "contribution": "타라소프 대 캘리포니아 대학 리전트 사건(1976)에서 경고의 의무를 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "보호의 의무",
        "name_en": "Duty to Protect",
        "id": "ETHICS_DP_020"
      },
      {
        "name_ko": "타라소프 판결",
        "name_en": "Tarasoff Decision",
        "id": "ETHICS_TD_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경고의 의무 = 타라소프 판결 - '비밀보장보다 잠재적 피해자의 생명이 우선'",
      "differential": "경고의 의무(duty to warn)는 잠재적 피해자에게 직접 알리는 것이고, 보호의 의무(duty to protect)는 피해를 예방하기 위한 합리적 조치를 취하는 것이다",
      "key_point": "경고의 의무가 적용되려면 위험이 특정인에 대한 것이고, 심각하고 임박해야 한다",
      "common_mistake": "모든 폭력 위험에 경고의 의무가 적용된다고 오해하기 쉬우나, 특정인에 대한 구체적이고 임박한 위험에만 적용된다"
    }
  },
  {
    "id": "ETHICS_DR_018",
    "terminology": "통보의 의무 (Duty to Report)",
    "terminology_ko": "통보의 의무",
    "terminology_en": "Duty to Report",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "아동학대, 노인학대, 장애인학대가 의심될 때 상담자가 관할 기관에 신고해야 하는 법적 의무이다. 대부분의 국가에서 상담자는 의무 신고자(mandated reporter)로 지정되어 있다.",
    "definition_en": "The legal obligation of a counselor to report to relevant authorities when there is suspicion of child abuse, elder abuse, or abuse of persons with disabilities. In most jurisdictions, counselors are designated as mandated reporters.",
    "significance": "취약 집단을 보호하기 위한 법적 의무로, 비밀보장 원칙의 가장 중요한 예외 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "의무 신고의 법적·윤리적 근거와 실천 지침을 체계화하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "경고의 의무",
        "name_en": "Duty to Warn",
        "id": "ETHICS_DW_017"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "통보의 의무 = 학대가 의심되면 '반드시 신고'해야 한다 - 선택이 아닌 법적 의무",
      "differential": "경고의 의무는 잠재적 피해자에게 직접 경고하는 것이고, 통보의 의무는 관할 기관에 신고하는 것이다",
      "key_point": "학대의 '확인'이 아닌 '의심'만으로도 신고 의무가 발생하며, 신고 판단은 상담자의 임상적 판단에 맡겨진다",
      "common_mistake": "학대를 확인한 후에만 신고해야 한다고 오해하기 쉬우나, 합리적 의심만으로도 신고 의무가 발생한다"
    }
  },
  {
    "id": "ETHICS_BC_019",
    "terminology": "경계 횡단 (Boundary Crossing)",
    "terminology_ko": "경계 횡단",
    "terminology_en": "Boundary Crossing",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "전문적 관계의 일반적 경계에서 벗어나지만 내담자에게 해를 끼치지 않으며 오히려 치료적으로 유익할 수 있는 일시적 변화이다. 경계 위반과 구별되며, 맥락에 따라 적절할 수 있다.",
    "definition_en": "A temporary departure from the usual boundaries of the professional relationship that does not harm the client and may even be therapeutically beneficial. Distinguished from boundary violations, it can be appropriate depending on context.",
    "significance": "경계 위반과의 구별이 중요한 개념으로, 맥락에 따라 경계 횡단이 치료적으로 유익할 수 있음을 인정한다.",
    "key_researchers": [
      {
        "name_ko": "아놀드 라자러스",
        "name_en": "Arnold Lazarus",
        "contribution": "경계 횡단과 경계 위반의 구별을 강조하고, 경직된 경계가 오히려 해로울 수 있음을 주장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계 위반",
        "name_en": "Boundary Violation",
        "id": "ETHICS_BV_009"
      },
      {
        "name_ko": "다중관계",
        "name_en": "Multiple Relationships",
        "id": "ETHICS_MR_005"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경계 횡단 = 경계를 '잠시 넘는 것' - 해롭지 않고 도움이 될 수 있다",
      "differential": "경계 횡단은 해를 끼치지 않는 일시적 변화이고, 경계 위반은 내담자에게 해를 끼치는 착취적 행위이다",
      "key_point": "예: 위기 상담에서 내담자를 차로 데려다주는 것은 경계 횡단(상황에 따라 적절), 내담자와 성적 관계를 맺는 것은 경계 위반(항상 부적절)",
      "common_mistake": "모든 경계 이탈을 윤리 위반으로 판단하기 쉬우나, 맥락에 따라 치료적으로 유익한 경계 횡단이 있을 수 있다"
    }
  },
  {
    "id": "ETHICS_DP_020",
    "terminology": "보호의 의무 (Duty to Protect)",
    "terminology_ko": "보호의 의무",
    "terminology_en": "Duty to Protect",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자나 제3자가 심각한 위험에 처해 있을 때, 상담자가 해당 위험을 방지하기 위해 합리적인 조치를 취해야 하는 의무이다. 경고의 의무보다 더 넓은 개념으로, 입원, 경찰 통보 등 다양한 보호 조치를 포함한다.",
    "definition_en": "The obligation of a counselor to take reasonable steps to prevent harm when a client or third party faces serious risk. A broader concept than duty to warn, it includes various protective measures such as hospitalization and police notification.",
    "significance": "경고의 의무의 확장 개념으로, 상담자에게 위험을 경고하는 것을 넘어 실질적인 보호 조치를 취할 책임을 부여한다.",
    "key_researchers": [
      {
        "name_ko": "캘리포니아 대법원",
        "name_en": "California Supreme Court",
        "contribution": "타라소프 II 판결(1976)에서 경고의 의무를 보호의 의무로 확장하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경고의 의무",
        "name_en": "Duty to Warn",
        "id": "ETHICS_DW_017"
      },
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "자살 위기 개입",
        "name_en": "Suicide Crisis Intervention",
        "id": "ETHICS_SI_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "보호의 의무 = '말뿐 아니라 행동'으로 보호해야 한다 - 경고를 넘어 실질적 조치",
      "differential": "경고의 의무는 잠재적 피해자에게 알리는 것이고, 보호의 의무는 합리적인 보호 조치를 실제로 취하는 것이다",
      "key_point": "보호의 의무는 경고뿐 아니라 입원, 경찰 통보, 내담자 보호 등 합리적으로 가능한 모든 조치를 포함한다",
      "common_mistake": "보호의 의무를 경고의 의무와 동일시하기 쉬우나, 보호의 의무가 더 넓은 범위의 행동을 요구한다"
    }
  },
  {
    "id": "ETHICS_TD_021",
    "terminology": "타라소프 판결 (Tarasoff Decision)",
    "terminology_ko": "타라소프 판결",
    "terminology_en": "Tarasoff Decision",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "1976년 캘리포니아 대법원의 판결로, 치료자가 내담자의 위험한 행동으로부터 제3자를 보호할 의무가 있다고 판시한 역사적 판결이다. '개인의 비밀보장은 공공의 안전 앞에 양보해야 한다'는 원칙을 확립하였다.",
    "definition_en": "A 1976 California Supreme Court ruling that established the therapist's duty to protect third parties from dangerous actions by clients. It established the principle that 'the protective privilege ends where the public peril begins.'",
    "significance": "상담윤리와 법의 역사에서 가장 중요한 판례로, 비밀보장의 한계와 보호의 의무에 대한 법적 기준을 확립하였다.",
    "key_researchers": [
      {
        "name_ko": "캘리포니아 대법원",
        "name_en": "California Supreme Court",
        "contribution": "타라소프 대 캘리포니아 대학 리전트 사건에서 보호의 의무를 법적으로 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경고의 의무",
        "name_en": "Duty to Warn",
        "id": "ETHICS_DW_017"
      },
      {
        "name_ko": "보호의 의무",
        "name_en": "Duty to Protect",
        "id": "ETHICS_DP_020"
      },
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "타라소프 = '비밀보장 < 공공안전' - 위험 앞에서 비밀보장은 양보한다",
      "differential": "타라소프 I 판결(1974)은 경고의 의무를, 타라소프 II 판결(1976)은 보호의 의무를 확립하였다",
      "key_point": "핵심 원칙: 보호적 특권(비밀보장)은 공공의 위험이 시작되는 곳에서 끝난다",
      "common_mistake": "타라소프 판결이 모든 지역에 동일하게 적용된다고 오해하기 쉬우나, 주나 국가에 따라 적용 범위가 다르다"
    }
  },
  {
    "id": "ETHICS_SI_022",
    "terminology": "자살 위기 개입 (Suicide Crisis Intervention)",
    "terminology_ko": "자살 위기 개입",
    "terminology_en": "Suicide Crisis Intervention",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "내담자의 자살 위험을 평가하고 즉각적인 안전을 확보하기 위해 취하는 일련의 전문적 조치이다. 자살 위험성 평가, 안전 계획 수립, 필요시 입원 연계 등을 포함한다.",
    "definition_en": "A series of professional measures taken to assess suicide risk and ensure the immediate safety of the client, including suicide risk assessment, safety planning, and hospitalization referral when necessary.",
    "significance": "상담자가 직면하는 가장 심각한 윤리적·법적 상황으로, 적절한 위기 개입 역량은 모든 상담자의 필수 역량이다.",
    "key_researchers": [
      {
        "name_ko": "에드윈 슈나이드먼",
        "name_en": "Edwin Shneidman",
        "contribution": "자살학(suicidology)을 체계화하고 자살 위기 평가와 개입의 기초를 마련하였다"
      },
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha Linehan",
        "contribution": "변증법적 행동치료(DBT)를 통해 자살 행동 관리의 근거 기반 접근을 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보호의 의무",
        "name_en": "Duty to Protect",
        "id": "ETHICS_DP_020"
      },
      {
        "name_ko": "비밀보장의 한계",
        "name_en": "Limits of Confidentiality",
        "id": "ETHICS_LC_006"
      },
      {
        "name_ko": "변증법적행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "THIRDW_DBT_002"
      }
    ],
    "sub_types": [
      "자살 위험성 평가",
      "안전 계획",
      "자살 예방 계약",
      "위기 입원 연계"
    ],
    "quiz_hints": {
      "mnemonic": "자살 위기 개입 = '생명이 최우선' - 비밀보장보다 안전이 먼저",
      "differential": "자살 사고(suicidal ideation)는 자살에 대한 생각이고, 자살 의도(suicidal intent)는 실행할 의지와 계획이 있는 것으로 더 위험하다",
      "key_point": "자살 위험 평가에서는 자살 사고, 계획, 수단, 의도, 보호 요인을 종합적으로 평가해야 한다",
      "common_mistake": "자살에 대해 직접 물어보면 자살을 유발한다고 오해하기 쉬우나, 직접 묻는 것이 오히려 안전하며 연구에 의해 지지된다"
    }
  },
  {
    "id": "ETHICS_ED_023",
    "terminology": "윤리적 의사결정 모델 (Ethical Decision-Making Model)",
    "terminology_ko": "윤리적 의사결정 모델",
    "terminology_en": "Ethical Decision-Making Model",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 윤리적 딜레마에 직면했을 때 체계적으로 사고하고 최선의 결정을 내리기 위한 단계적 과정 모델이다. 문제 인식, 관련 윤리 강령 확인, 법적 요건 검토, 대안 탐색, 결과 평가 등을 포함한다.",
    "definition_en": "A step-by-step process model for counselors to think systematically and make the best decisions when facing ethical dilemmas, including problem identification, review of relevant ethical codes, examination of legal requirements, exploration of alternatives, and evaluation of consequences.",
    "significance": "윤리적 딜레마에 대한 직관적 판단을 넘어 체계적이고 합리적인 의사결정을 가능하게 하는 실천적 도구이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "10단계 윤리적 의사결정 모델을 개발하여 체계적 윤리 판단 과정을 제시하였다"
      },
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "통합적 윤리적 의사결정 모델을 개발하여 다양한 관점의 통합을 강조하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "윤리 강령",
        "name_en": "Code of Ethics",
        "id": "ETHICS_CO_024"
      },
      {
        "name_ko": "윤리적 딜레마",
        "name_en": "Ethical Dilemma",
        "id": "ETHICS_DI_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "윤리적 의사결정 = '느낌'이 아닌 '단계적 사고'로 윤리적 판단을 내린다",
      "differential": "윤리적 의사결정 모델은 판단의 과정을 안내하는 틀이고, 윤리 강령은 판단의 기준이 되는 규범이다",
      "key_point": "여러 모델이 있지만 공통적으로 문제 인식, 윤리 강령 확인, 법적 검토, 대안 탐색, 동료 자문, 결정, 평가 단계를 포함한다",
      "common_mistake": "윤리적 의사결정을 단순히 윤리 강령을 찾아보는 것으로 오해하기 쉬우나, 맥락 분석, 동료 자문, 결과 평가 등 종합적 과정이다"
    }
  },
  {
    "id": "ETHICS_CO_024",
    "terminology": "윤리 강령 (Code of Ethics)",
    "terminology_ko": "윤리 강령",
    "terminology_en": "Code of Ethics",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "전문 학회나 기관이 제정한 상담자의 행동 기준과 윤리적 원칙을 명문화한 규정으로, 전문적 실천의 최소 기준을 제시한다. ACA, APA, 한국상담학회 등 각 학회별로 윤리 강령을 운영한다.",
    "definition_en": "Codified regulations of behavioral standards and ethical principles established by professional associations, presenting minimum standards for professional practice. Organizations such as ACA, APA, and the Korean Counseling Association each maintain their own ethical codes.",
    "significance": "상담 전문직의 정체성을 규정하고 내담자를 보호하는 공식적 규범으로, 윤리 위반 시 제재의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "미국상담학회(ACA)",
        "name_en": "American Counseling Association",
        "contribution": "상담 분야의 대표적 윤리 강령을 제정하고 정기적으로 개정하고 있다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "윤리적 의사결정 모델",
        "name_en": "Ethical Decision-Making Model",
        "id": "ETHICS_ED_023"
      },
      {
        "name_ko": "윤리적 딜레마",
        "name_en": "Ethical Dilemma",
        "id": "ETHICS_DI_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "윤리 강령 = 상담 전문직의 '헌법' - 전문적 실천의 기본 규범",
      "differential": "윤리 강령은 전문 학회가 제정한 규범이고, 법률은 국가가 제정한 규범이다. 윤리 강령은 법보다 높은 기준을 요구할 수 있다",
      "key_point": "윤리 강령은 최소 기준(mandatory ethics)이며, 이상적 실천(aspirational ethics)은 그 이상을 지향한다",
      "common_mistake": "윤리 강령만 따르면 충분하다고 오해하기 쉬우나, 강령이 다루지 못하는 복잡한 상황에서는 윤리적 사고가 추가로 필요하다"
    }
  },
  {
    "id": "ETHICS_DI_025",
    "terminology": "윤리적 딜레마 (Ethical Dilemma)",
    "terminology_ko": "윤리적 딜레마",
    "terminology_en": "Ethical Dilemma",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "두 개 이상의 윤리 원칙이 충돌하여 어떤 선택을 하더라도 일부 윤리 원칙이 침해될 수밖에 없는 상황이다. 비밀보장과 타인 보호, 자율성과 선행 등이 대표적 충돌 사례이다.",
    "definition_en": "A situation in which two or more ethical principles conflict so that any choice inevitably violates some ethical principles. Representative conflicts include confidentiality vs. protection of others, and autonomy vs. beneficence.",
    "significance": "상담 현장에서 흔히 직면하는 현실적 문제로, 윤리적 의사결정 능력이 상담자의 핵심 역량이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "다양한 윤리적 딜레마 사례를 분석하고 의사결정 과정을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "윤리적 의사결정 모델",
        "name_en": "Ethical Decision-Making Model",
        "id": "ETHICS_ED_023"
      },
      {
        "name_ko": "윤리 강령",
        "name_en": "Code of Ethics",
        "id": "ETHICS_CO_024"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "윤리적 딜레마 = '진퇴양난' - 어느 쪽을 선택해도 윤리적 손실이 있다",
      "differential": "윤리적 딜레마는 옳은 것과 옳은 것 사이의 갈등이고, 도덕적 유혹은 옳은 것과 잘못된 것 사이의 선택이다",
      "key_point": "딜레마 해결의 핵심은 '완벽한 답'을 찾는 것이 아니라, 체계적 사고를 통해 '가장 해가 적은 최선의 선택'을 하는 것이다",
      "common_mistake": "윤리적 딜레마에 항상 명확한 정답이 있다고 오해하기 쉬우나, 딜레마의 본질은 정답이 없는 상황에서의 판단이다"
    }
  },
  {
    "id": "ETHICS_RC_026",
    "terminology": "기록 관리 (Record Keeping)",
    "terminology_ko": "기록 관리",
    "terminology_en": "Record Keeping",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담 과정에서의 정보를 체계적으로 문서화하고 안전하게 보관·관리하는 전문적 실천이다. 상담 기록은 치료의 연속성, 법적 보호, 수퍼비전, 연구에 활용된다.",
    "definition_en": "The professional practice of systematically documenting information from the counseling process and securely storing and managing it. Counseling records are used for treatment continuity, legal protection, supervision, and research.",
    "significance": "전문적 실천과 법적 보호의 필수 요소로, 적절한 기록 관리가 상담자의 윤리적·법적 의무이다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "상담 기록 관리의 윤리적·법적 기준을 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "ETHICS_CF_003"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      },
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "ETHICS_IC_002"
      }
    ],
    "sub_types": [
      "과정 기록",
      "진행 노트",
      "치료 계획",
      "심리검사 결과"
    ],
    "quiz_hints": {
      "mnemonic": "기록 관리 = '기록하지 않으면 일어나지 않은 것' - 기록은 상담자의 보호막이기도 하다",
      "differential": "과정 기록은 상담자의 개인 메모이고, 공식 상담 기록은 기관에 보관되는 공식 문서이다",
      "key_point": "기록은 필요한 최소한의 정보만 포함해야 하며, 내담자의 비밀보장을 고려하여 작성해야 한다",
      "common_mistake": "기록을 상담 후 언제든 작성해도 된다고 오해하기 쉬우나, 가능한 한 회기 직후에 작성하는 것이 정확성과 법적 보호에 중요하다"
    }
  },
  {
    "id": "ETHICS_VB_027",
    "terminology": "가치 중립성 (Value Neutrality)",
    "terminology_ko": "가치 중립성",
    "terminology_en": "Value Neutrality",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 자신의 가치관, 신념, 도덕적 판단을 내담자에게 부과하지 않고 내담자의 자기결정을 존중하는 원칙이다. 그러나 완전한 가치 중립은 불가능하므로, 가치의 인식과 관리가 중요하다.",
    "definition_en": "The principle that counselors should not impose their values, beliefs, and moral judgments on clients and should respect client self-determination. However, since complete value neutrality is impossible, awareness and management of values is important.",
    "significance": "상담에서 가치의 역할에 대한 핵심적 윤리적 논쟁으로, 상담자의 가치 인식과 내담자 자율성 존중의 균형이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "무조건적 긍정적 존중을 통한 가치 비부과의 원칙을 확립하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자율성",
        "name_en": "Autonomy",
        "id": "ETHICS_AU_010"
      },
      {
        "name_ko": "다문화 역량",
        "name_en": "Multicultural Competence",
        "id": "ETHICS_MC_014"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "무조건적 긍정적 존중",
        "name_en": "Unconditional Positive Regard",
        "id": "PERSON_UPR_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "가치 중립성 = 상담자의 '가치 안경'을 인식하되, 내담자에게 씌우지 않는다",
      "differential": "가치 중립은 가치를 부과하지 않는 것이고, 가치 자유(value-free)는 가치가 없는 것이다. 상담은 가치 자유가 아니라 가치 인식적이어야 한다",
      "key_point": "완전한 가치 중립은 불가능하므로, 상담자는 자신의 가치를 인식하고 이것이 상담에 미치는 영향을 관리해야 한다",
      "common_mistake": "가치 중립을 '가치가 없는 것'으로 오해하기 쉬우나, 자신의 가치를 인식하면서도 부과하지 않는 것이다"
    }
  },
  {
    "id": "ETHICS_PR_028",
    "terminology": "전문적 정체성 (Professional Identity)",
    "terminology_ko": "전문적 정체성",
    "terminology_en": "Professional Identity",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자로서의 역할, 가치, 철학, 역량에 대한 통합적 자기인식으로, 전문직으로서의 소속감과 사명감을 포함한다. 교육, 수퍼비전, 실습을 통해 발달한다.",
    "definition_en": "An integrated self-awareness of one's role, values, philosophy, and competence as a counselor, including a sense of belonging to and mission within the profession. It develops through education, supervision, and practice.",
    "significance": "효과적인 상담 실천의 토대이며, 상담자의 지속적 전문성 발달의 동기가 된다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "상담자의 전문적 정체성 발달 과정과 구성 요소를 체계적으로 기술하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      },
      {
        "name_ko": "상담윤리",
        "name_en": "Counseling Ethics",
        "id": "ETHICS_CE_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "전문적 정체성 = '나는 상담자이다' - 무엇을 하는 사람이고, 왜 하고, 어떻게 하는지에 대한 통합적 인식",
      "differential": "전문적 정체성은 상담자로서의 자기인식이고, 역할 정체성은 특정 역할(예: 학교상담자, 가족치료사)에 대한 인식이다",
      "key_point": "전문적 정체성은 교육 초기부터 형성되기 시작하며, 수퍼비전과 실천 경험을 통해 계속 발달한다",
      "common_mistake": "전문적 정체성을 자격증 취득으로 완성되는 것으로 오해하기 쉬우나, 경력 전체에 걸쳐 발달하는 평생의 과정이다"
    }
  },
  {
    "id": "ETHICS_CS_029",
    "terminology": "자문 (Consultation)",
    "terminology_ko": "자문",
    "terminology_en": "Consultation",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 윤리적 딜레마나 어려운 사례에 직면했을 때 동료 전문가나 수퍼바이저에게 조언과 관점을 구하는 전문적 실천이다. 자문은 상담자의 판단력을 높이고 내담자 보호를 강화한다.",
    "definition_en": "The professional practice of seeking advice and perspectives from peer professionals or supervisors when a counselor faces ethical dilemmas or difficult cases. Consultation enhances the counselor's judgment and strengthens client protection.",
    "significance": "윤리적 의사결정 과정의 핵심 단계로, 동료 자문을 통해 편향을 방지하고 다양한 관점을 고려할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "엘리자베스 웰펠",
        "name_en": "Elizabeth Welfel",
        "contribution": "동료 자문을 윤리적 의사결정 모델의 핵심 단계로 포함시켰다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수퍼비전",
        "name_en": "Supervision",
        "id": "ETHICS_SV_008"
      },
      {
        "name_ko": "윤리적 의사결정 모델",
        "name_en": "Ethical Decision-Making Model",
        "id": "ETHICS_ED_023"
      },
      {
        "name_ko": "역량 범위",
        "name_en": "Scope of Competence",
        "id": "ETHICS_SC_004"
      }
    ],
    "sub_types": [
      "동료 자문",
      "전문가 자문",
      "법적 자문"
    ],
    "quiz_hints": {
      "mnemonic": "자문 = '혼자 고민하지 말고' 전문가에게 물어보라",
      "differential": "자문(consultation)은 동등한 전문가 간의 비평가적 협력이고, 수퍼비전(supervision)은 평가적 요소를 포함하는 지도 관계이다",
      "key_point": "자문은 윤리적 의사결정에서 상담자의 주관적 편향을 방지하고 다양한 관점을 확보하는 핵심 전략이다",
      "common_mistake": "자문을 능력 부족의 표시로 오해하기 쉬우나, 전문적 책임감과 내담자 보호 의지의 표현이다"
    }
  },
  {
    "id": "ETHICS_BF_030",
    "terminology": "소진 (Burnout)",
    "terminology_ko": "소진",
    "terminology_en": "Burnout",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "장기간의 정서적 부담과 스트레스로 인해 상담자가 경험하는 신체적·정서적·심리적 탈진 상태로, 정서적 소진, 비인격화, 개인적 성취감 감소가 핵심 증상이다.",
    "definition_en": "A state of physical, emotional, and psychological exhaustion experienced by counselors due to prolonged emotional demands and stress, with emotional exhaustion, depersonalization, and reduced personal accomplishment as core symptoms.",
    "significance": "상담자의 소진은 내담자 서비스의 질을 저하시키므로, 자기돌봄은 윤리적 의무이다. 소진된 상담자는 무해 원칙을 위반할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "크리스티나 마슬라크",
        "name_en": "Christina Maslach",
        "contribution": "소진의 3요인 모델(정서적 소진, 비인격화, 개인적 성취감 감소)과 측정 도구(MBI)를 개발하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기돌봄",
        "name_en": "Self-Care",
        "id": "ETHICS_SCR_031"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      },
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "PROCESS_CT_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "소진 = 촛불이 '다 타버린' 것 - 정서적으로 완전히 방전된 상태",
      "differential": "소진(burnout)은 장기적 직무 스트레스로 인한 것이고, 대리외상(vicarious trauma)은 내담자의 외상에 간접 노출되어 생기는 것이다",
      "key_point": "마슬라크의 3요인: 정서적 소진(에너지 고갈), 비인격화(내담자에 대한 냉소), 개인적 성취감 감소(무력감)",
      "common_mistake": "소진을 개인의 약함으로 오해하기 쉬우나, 조직적·환경적 요인도 중요하며 예방적 자기돌봄이 윤리적 의무이다"
    }
  },
  {
    "id": "ETHICS_SCR_031",
    "terminology": "자기돌봄 (Self-Care)",
    "terminology_ko": "자기돌봄",
    "terminology_en": "Self-Care",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 자신의 신체적·정서적·심리적·영적 건강을 유지하기 위해 의도적으로 실천하는 활동이다. 소진을 예방하고 전문적 효과성을 유지하기 위한 윤리적 의무로 인식된다.",
    "definition_en": "Intentional activities counselors practice to maintain their physical, emotional, psychological, and spiritual health. It is recognized as an ethical obligation to prevent burnout and maintain professional effectiveness.",
    "significance": "상담자의 자기돌봄은 단순한 개인적 선택이 아니라, 내담자에게 효과적인 서비스를 제공하기 위한 윤리적 의무이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 코리",
        "name_en": "Gerald Corey",
        "contribution": "상담자 자기돌봄을 윤리적 의무로 강조하고 구체적 실천 전략을 제시하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소진",
        "name_en": "Burnout",
        "id": "ETHICS_BF_030"
      },
      {
        "name_ko": "자기인식",
        "name_en": "Self-Awareness",
        "id": "PROCESS_SA_023"
      },
      {
        "name_ko": "무해",
        "name_en": "Nonmaleficence",
        "id": "ETHICS_NM_012"
      }
    ],
    "sub_types": [
      "신체적 자기돌봄",
      "정서적 자기돌봄",
      "사회적 자기돌봄",
      "영적 자기돌봄",
      "전문적 자기돌봄"
    ],
    "quiz_hints": {
      "mnemonic": "자기돌봄 = '자신의 컵을 먼저 채워야' 남의 컵에 부을 수 있다",
      "differential": "자기돌봄은 소진을 예방하는 적극적 실천이고, 수퍼비전은 전문적 발달과 사례 관리를 위한 지도적 관계이다",
      "key_point": "ACA 윤리 강령은 상담자가 자기돌봄을 통해 전문적 역량을 유지할 윤리적 의무가 있다고 명시한다",
      "common_mistake": "자기돌봄을 이기적이거나 사치스러운 것으로 오해하기 쉬우나, 내담자에게 해를 끼치지 않기 위한 윤리적 의무이다"
    }
  },
  {
    "id": "ETHICS_VT_032",
    "terminology": "대리외상 (Vicarious Trauma)",
    "terminology_ko": "대리외상",
    "terminology_en": "Vicarious Trauma",
    "category": "ETHICS",
    "category_name": "상담윤리 (Counseling Ethics)",
    "definition": "상담자가 외상 경험이 있는 내담자와의 공감적 작업을 통해 간접적으로 외상 반응을 경험하는 현상으로, 세계관의 변화, 대인관계 어려움, 침습적 이미지 등이 나타날 수 있다.",
    "definition_en": "A phenomenon in which counselors indirectly experience trauma responses through empathic work with clients who have experienced trauma, potentially manifesting as worldview changes, interpersonal difficulties, and intrusive imagery.",
    "significance": "외상 전문 상담자의 직업적 위험으로, 이를 인식하고 예방하는 것이 상담자의 전문적 건강과 내담자 서비스 질을 유지하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "로리 안 페를만",
        "name_en": "Laurie Anne Pearlman",
        "contribution": "대리외상 개념을 최초로 제안하고 구성주의적 자기발달이론(CSDT)으로 설명하였다"
      },
      {
        "name_ko": "카렌 사아크비트니",
        "name_en": "Karen Saakvitne",
        "contribution": "대리외상의 영향과 예방 전략을 체계적으로 연구하였다"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "소진",
        "name_en": "Burnout",
        "id": "ETHICS_BF_030"
      },
      {
        "name_ko": "자기돌봄",
        "name_en": "Self-Care",
        "id": "ETHICS_SCR_031"
      },
      {
        "name_ko": "역전이",
        "name_en": "Countertransference",
        "id": "PROCESS_CT_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대리외상 = 내담자의 외상이 상담자에게 '대리(간접) 전달'되는 것",
      "differential": "소진은 직무 스트레스 누적으로 인한 전반적 탈진이고, 대리외상은 외상 내담자와의 공감적 작업으로 인한 특정 외상 반응이다",
      "key_point": "대리외상은 상담자의 세계관(안전감, 신뢰감, 통제감 등)에 변화를 일으키며, 이는 공감 능력의 부산물이다",
      "common_mistake": "대리외상을 단순한 스트레스나 소진으로 오해하기 쉬우나, 세계관의 변화라는 독특한 특성이 있다"
    }
  }
];

