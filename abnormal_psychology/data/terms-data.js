const TERMS_DATA = {};

TERMS_DATA.FOUND = [
  {
    "id": "FOUND_ABN_001",
    "terminology": "이상행동 (Abnormal Behavior)",
    "terminology_ko": "이상행동",
    "terminology_en": "Abnormal Behavior",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "통계적 규준에서 벗어나거나, 개인에게 심리적 고통을 유발하거나, 적응적 기능을 손상시키는 행동 및 심리적 패턴을 말하며, 단일 기준이 아닌 복합적 기준으로 판단한다.",
    "definition_en": "Behavioral or psychological patterns that deviate from statistical norms, cause personal distress, or impair adaptive functioning, typically judged by multiple criteria rather than a single standard.",
    "significance": "이상심리학의 핵심 연구 대상으로, 정상과 이상의 경계를 정의하는 것은 진단과 치료의 출발점이 된다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 로젠한",
        "name_en": "David Rosenhan",
        "contribution": "1973년 '정상인의 정신병원 입원' 연구를 통해 이상행동 판별의 주관성과 진단 체계의 문제점을 드러냈다."
      },
      {
        "name_ko": "제롬 웨이크필드",
        "name_en": "Jerome Wakefield",
        "contribution": "유해한 기능장애(harmful dysfunction) 개념을 제안하여 이상행동의 정의에 진화적 기능과 사회적 가치를 통합했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "통계적 일탈",
        "name_en": "Statistical Deviance",
        "id": "FOUND_STD_002"
      },
      {
        "name_ko": "주관적 고통",
        "name_en": "Subjective Distress",
        "id": "FOUND_DIS_003"
      },
      {
        "name_ko": "기능 손상",
        "name_en": "Functional Impairment",
        "id": "FOUND_FUN_004"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이상행동의 4D: Deviance(일탈), Distress(고통), Dysfunction(기능장애), Danger(위험)",
      "differential": "이상행동은 단일 기준이 아닌 여러 기준(4D)의 복합적 판단이며, 일탈만으로 이상으로 분류하지 않는다.",
      "key_point": "어떤 하나의 기준만으로 이상을 정의할 수 없으며, 문화적 맥락이 반드시 고려되어야 한다.",
      "common_mistake": "통계적으로 드문 행동을 곧바로 이상행동으로 간주하는 오류 — 예: 천재적 지능은 통계적으로 드물지만 이상이 아니다."
    }
  },
  {
    "id": "FOUND_STD_002",
    "terminology": "통계적 일탈 (Statistical Deviance)",
    "terminology_ko": "통계적 일탈",
    "terminology_en": "Statistical Deviance",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "정상 분포 곡선에서 평균으로부터 크게 벗어난 행동이나 특성을 비정상으로 간주하는 기준으로, 빈도가 극히 낮은 행동을 이상으로 분류한다.",
    "definition_en": "A criterion for defining abnormality based on the extent to which behavior deviates from the statistical average, classifying extremely rare behaviors as abnormal.",
    "significance": "이상행동 정의의 가장 기본적인 기준 중 하나이나, 단독으로는 이상의 충분한 정의가 될 수 없다는 한계가 있다.",
    "key_researchers": [
      {
        "name_ko": "아돌프 케틀레",
        "name_en": "Adolphe Quetelet",
        "contribution": "통계적 방법을 사회과학에 적용한 선구자로, '평균인(average man)' 개념을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      },
      {
        "name_ko": "주관적 고통",
        "name_en": "Subjective Distress",
        "id": "FOUND_DIS_003"
      },
      {
        "name_ko": "사회적 일탈",
        "name_en": "Social Deviance",
        "id": "FOUND_SOC_005"
      },
      {
        "name_ko": "유병률",
        "name_en": "Prevalence",
        "id": "FOUND_PRV_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정규분포에서 ±2 표준편차 밖 = 통계적 일탈",
      "differential": "통계적 일탈은 빈도 기준이고, 사회적 일탈은 규범 위반 기준이다.",
      "key_point": "IQ가 매우 높은 것도 통계적으로 드물지만 이상이 아니므로, 이 기준만으로는 불충분하다.",
      "common_mistake": "통계적으로 드문 모든 행동이 병적이라고 판단하는 오류를 범하기 쉽다."
    }
  },
  {
    "id": "FOUND_DIS_003",
    "terminology": "주관적 고통 (Subjective Distress)",
    "terminology_ko": "주관적 고통",
    "terminology_en": "Subjective Distress",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "개인이 자신의 심리적 상태나 행동에 대해 경험하는 불편감, 불안, 우울 등의 주관적 고통이 이상행동 판별의 중요한 기준이 된다.",
    "definition_en": "Personal suffering or discomfort experienced by an individual regarding their own psychological state or behavior, serving as an important criterion for identifying abnormality.",
    "significance": "본인의 고통 경험을 중시한다는 점에서 개인 중심적 기준이며, 임상 장면에서 도움을 구하는 주요 동기가 된다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심치료에서 개인의 주관적 경험과 고통을 치료의 핵심으로 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      },
      {
        "name_ko": "기능 손상",
        "name_en": "Functional Impairment",
        "id": "FOUND_FUN_004"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Distress = 본인이 느끼는 '고통'이 핵심",
      "differential": "주관적 고통은 본인의 경험이지만, 반사회적 성격장애처럼 고통 없이도 이상일 수 있다.",
      "key_point": "자기 인식이 없는 경우(예: 조증 삽화) 주관적 고통을 느끼지 못할 수 있어 이 기준만으로는 불충분하다.",
      "common_mistake": "모든 정신장애에서 주관적 고통이 동반된다고 가정하는 오류 — 조증이나 반사회적 성격장애에서는 고통을 느끼지 않는다."
    }
  },
  {
    "id": "FOUND_FUN_004",
    "terminology": "기능 손상 (Functional Impairment)",
    "terminology_ko": "기능 손상",
    "terminology_en": "Functional Impairment",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "일상생활, 직업, 대인관계 등에서의 적응적 기능이 현저히 저하된 상태로, 이상행동 판별의 가장 실용적인 기준 중 하나이다.",
    "definition_en": "A significant decline in adaptive functioning in daily life, occupational roles, or interpersonal relationships, considered one of the most practical criteria for identifying abnormality.",
    "significance": "DSM-5에서 임상적 유의성의 핵심 기준으로, 단순한 증상 유무가 아닌 실질적 기능 수준을 평가하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "제롬 웨이크필드",
        "name_en": "Jerome Wakefield",
        "contribution": "유해한 기능장애 모델에서 기능 손상을 이상행동 정의의 필수 요소로 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      },
      {
        "name_ko": "주관적 고통",
        "name_en": "Subjective Distress",
        "id": "FOUND_DIS_003"
      },
      {
        "name_ko": "임상적 유의성",
        "name_en": "Clinical Significance",
        "id": "ASSESS_CLI_010"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Dysfunction = 일상·직업·관계에서 '기능'이 안 된다",
      "differential": "기능 손상은 객관적 관찰이 가능하여 통계적 일탈이나 주관적 고통보다 측정이 용이하다.",
      "key_point": "DSM-5에서 거의 모든 진단에 '임상적으로 유의한 고통이나 기능 손상'을 요구한다.",
      "common_mistake": "기능 손상의 정도가 문화나 환경에 따라 다르게 평가될 수 있다는 점을 간과한다."
    }
  },
  {
    "id": "FOUND_SOC_005",
    "terminology": "사회적 일탈 (Social Deviance)",
    "terminology_ko": "사회적 일탈",
    "terminology_en": "Social Deviance",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "특정 문화나 사회의 규범, 도덕적 기준, 관습에서 벗어나는 행동을 이상으로 간주하는 기준으로, 문화 상대적 특성을 지닌다.",
    "definition_en": "A criterion defining abnormality as behavior that violates the norms, moral standards, or conventions of a particular culture or society, inherently culture-relative in nature.",
    "significance": "이상행동의 문화적 맥락을 강조하며, 문화 간 차이를 고려한 진단의 필요성을 제기한다.",
    "key_researchers": [
      {
        "name_ko": "토머스 사스",
        "name_en": "Thomas Szasz",
        "contribution": "정신질환은 사회적 통제 수단으로 사용되는 '신화'라고 비판하며 사회적 일탈 기준의 문제를 지적했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      },
      {
        "name_ko": "통계적 일탈",
        "name_en": "Statistical Deviance",
        "id": "FOUND_STD_002"
      },
      {
        "name_ko": "사회문화적 모형",
        "name_en": "Sociocultural Model",
        "id": "FOUND_SCM_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회적 일탈 = 그 사회의 '규범'을 기준으로 판단",
      "differential": "통계적 일탈은 빈도가 드문 것이고, 사회적 일탈은 규범 위반이다. 둘은 반드시 일치하지 않는다.",
      "key_point": "동성애가 과거 DSM에 포함되었다가 삭제된 것은 사회적 일탈 기준의 문화 상대성을 보여주는 대표 사례이다.",
      "common_mistake": "사회적 규범 위반을 곧바로 정신장애로 간주하는 오류 — 정치적 반체제 활동은 사회적 일탈이나 정신장애가 아니다."
    }
  },
  {
    "id": "FOUND_TRP_006",
    "terminology": "트레피네이션 (Trephination)",
    "terminology_ko": "트레피네이션",
    "terminology_en": "Trephination",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "선사시대에 두개골에 구멍을 뚫어 악령을 빠져나가게 하려 했던 원시적 치료법으로, 이상행동에 대한 초자연적 설명의 대표적 사례이다.",
    "definition_en": "A prehistoric practice of drilling holes in the skull to allow evil spirits to escape, representing the earliest known supernatural explanation for abnormal behavior.",
    "significance": "이상행동에 대한 가장 오래된 치료 시도로, 초자연적 원인론의 역사적 기원을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "폴 브로카",
        "name_en": "Paul Broca",
        "contribution": "19세기에 트레피네이션된 두개골을 연구하여 선사시대 수술의 증거를 과학적으로 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀신론",
        "name_en": "Demonology",
        "id": "FOUND_DEM_007"
      },
      {
        "name_ko": "히포크라테스",
        "name_en": "Hippocrates",
        "id": "FOUND_HIP_008"
      },
      {
        "name_ko": "도덕치료",
        "name_en": "Moral Treatment",
        "id": "FOUND_MOR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Trephination = 두개골에 '구멍(Tre-hole)' 뚫기",
      "differential": "트레피네이션은 초자연적 원인론에 기반한 치료이고, 히포크라테스의 체액론은 자연적 원인론에 기반한 치료이다.",
      "key_point": "석기시대 두개골에서 발견되며, 일부는 치유 흔적이 있어 환자가 생존했음을 보여준다.",
      "common_mistake": "트레피네이션을 단순히 야만적 행위로만 보는 것 — 실제로는 당시의 이해 수준에 기반한 체계적 치료 시도였다."
    }
  },
  {
    "id": "FOUND_DEM_007",
    "terminology": "귀신론 (Demonology)",
    "terminology_ko": "귀신론",
    "terminology_en": "Demonology",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "이상행동의 원인을 악령이나 초자연적 존재의 빙의로 설명하는 관점으로, 고대와 중세에 지배적이었으며 엑소시즘이나 마녀사냥으로 이어졌다.",
    "definition_en": "The view that abnormal behavior is caused by possession by evil spirits or supernatural beings, dominant in ancient and medieval times, leading to exorcism and witch hunts.",
    "significance": "이상행동에 대한 초자연적 설명의 대표적 형태로, 과학적 접근 이전의 역사적 배경을 이해하는 데 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "하인리히 크라머",
        "name_en": "Heinrich Kramer",
        "contribution": "1487년 『마녀의 망치(Malleus Maleficarum)』를 저술하여 마녀 식별과 처벌 지침을 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "트레피네이션",
        "name_en": "Trephination",
        "id": "FOUND_TRP_006"
      },
      {
        "name_ko": "히포크라테스",
        "name_en": "Hippocrates",
        "id": "FOUND_HIP_008"
      },
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Demonology = Demon(악마) + ology(학문) = 악마가 원인이라는 관점",
      "differential": "귀신론은 초자연적 원인론이고, 체액론은 자연적(생물학적) 원인론이다.",
      "key_point": "중세 마녀사냥은 귀신론에 기반한 것으로, 정신장애를 가진 많은 사람들이 마녀로 몰려 처형당했다.",
      "common_mistake": "중세 전체가 귀신론만 지배했다고 보는 것은 과장이며, 수도원에서는 인도적 보호도 이루어졌다."
    }
  },
  {
    "id": "FOUND_HIP_008",
    "terminology": "히포크라테스의 체액론 (Hippocrates' Humoral Theory)",
    "terminology_ko": "히포크라테스의 체액론",
    "terminology_en": "Hippocrates' Humoral Theory",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "히포크라테스가 이상행동의 원인을 네 가지 체액(혈액, 점액, 황담즙, 흑담즙)의 불균형으로 설명한 이론으로, 정신장애에 대한 최초의 자연적·의학적 설명이다.",
    "definition_en": "Hippocrates' theory that abnormal behavior results from imbalances in four bodily humors (blood, phlegm, yellow bile, black bile), representing the first naturalistic and medical explanation of mental disorders.",
    "significance": "이상행동을 초자연적 현상이 아닌 신체적 원인으로 설명한 최초의 시도로, 생물의학적 모형의 기원이 된다.",
    "key_researchers": [
      {
        "name_ko": "히포크라테스",
        "name_en": "Hippocrates",
        "contribution": "기원전 460년경 정신장애를 뇌의 질병으로 보고, 체액 불균형이 원인이라는 자연주의적 설명을 최초로 제시했다."
      },
      {
        "name_ko": "갈레노스",
        "name_en": "Galen",
        "contribution": "히포크라테스의 체액론을 발전시켜 기질(temperament) 이론으로 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "귀신론",
        "name_en": "Demonology",
        "id": "FOUND_DEM_007"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "트레피네이션",
        "name_en": "Trephination",
        "id": "FOUND_TRP_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "4체액: 혈액(다혈질)·점액(점액질)·황담즙(담즙질)·흑담즙(우울질)",
      "differential": "체액론은 신체적 불균형을 강조하는 자연적 원인론이고, 귀신론은 초자연적 원인론이다.",
      "key_point": "히포크라테스는 정신장애를 뇌의 질병으로 본 최초의 인물이며, 이는 현대 생물의학적 모형의 기원이다.",
      "common_mistake": "체액론을 단순히 비과학적 이론으로 치부하는 것 — 당시로서는 매우 혁명적인 자연주의적 접근이었다."
    }
  },
  {
    "id": "FOUND_ASY_009",
    "terminology": "수용소 (Asylum)",
    "terminology_ko": "수용소",
    "terminology_en": "Asylum",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "16~18세기에 정신장애인을 사회로부터 격리하여 수용한 시설로, 열악한 환경과 비인간적 처우가 특징이었으며 치료보다는 격리 목적이 강했다.",
    "definition_en": "Institutions from the 16th to 18th centuries that confined people with mental disorders, characterized by deplorable conditions and inhumane treatment, serving primarily as places of confinement rather than treatment.",
    "significance": "정신장애인 처우의 어두운 역사를 대표하며, 이후 도덕치료 운동과 정신건강 개혁의 계기가 되었다.",
    "key_researchers": [
      {
        "name_ko": "필리프 피넬",
        "name_en": "Philippe Pinel",
        "contribution": "1793년 파리 비세트르 수용소에서 정신장애인의 쇠사슬을 풀어주고 인도적 처우를 시작한 개혁가이다."
      },
      {
        "name_ko": "윌리엄 튜크",
        "name_en": "William Tuke",
        "contribution": "1796년 영국 요크 퇴정소(York Retreat)를 설립하여 도덕치료의 모범을 보였다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도덕치료",
        "name_en": "Moral Treatment",
        "id": "FOUND_MOR_010"
      },
      {
        "name_ko": "정신위생운동",
        "name_en": "Mental Hygiene Movement",
        "id": "FOUND_MHM_021"
      },
      {
        "name_ko": "탈시설화",
        "name_en": "Deinstitutionalization",
        "id": "FOUND_DEI_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Asylum = 피난처라는 원래 의미와 달리, 실제로는 감옥 같은 격리 시설",
      "differential": "수용소는 격리 중심이었고, 도덕치료는 인도적 처우와 치료를 강조했다.",
      "key_point": "대표적 수용소로 런던의 베들레헴 병원(Bedlam)이 있으며, 여기서 'bedlam(혼란)'이라는 단어가 유래했다.",
      "common_mistake": "수용소가 모두 비인간적이었다고 일반화하는 것 — 일부 시설은 보호 기능도 수행했다."
    }
  },
  {
    "id": "FOUND_MOR_010",
    "terminology": "도덕치료 (Moral Treatment)",
    "terminology_ko": "도덕치료",
    "terminology_en": "Moral Treatment",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "18세기 말~19세기 초에 등장한 인도주의적 치료 운동으로, 정신장애인에게 존엄한 처우, 신선한 공기, 작업 활동, 사회적 교류를 제공하여 회복을 도모했다.",
    "definition_en": "A humanitarian treatment movement from the late 18th to early 19th century that advocated dignified care, fresh air, meaningful activities, and social interaction for people with mental disorders.",
    "significance": "정신장애인에 대한 인도적 처우의 시작으로, 현대 지역사회 정신건강 운동의 사상적 기원이 된다.",
    "key_researchers": [
      {
        "name_ko": "필리프 피넬",
        "name_en": "Philippe Pinel",
        "contribution": "프랑스에서 정신장애인의 쇠사슬을 제거하고 인도적 치료를 시작한 도덕치료의 창시자이다."
      },
      {
        "name_ko": "도로시아 딕스",
        "name_en": "Dorothea Dix",
        "contribution": "미국에서 정신장애인의 열악한 처우를 조사하고 입법 운동을 통해 32개 주립 정신병원 설립에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용소",
        "name_en": "Asylum",
        "id": "FOUND_ASY_009"
      },
      {
        "name_ko": "정신위생운동",
        "name_en": "Mental Hygiene Movement",
        "id": "FOUND_MHM_021"
      },
      {
        "name_ko": "인본주의적 모형",
        "name_en": "Humanistic Model",
        "id": "FOUND_HUM_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도덕치료의 핵심 인물: 피넬(프랑스), 튜크(영국), 딕스(미국)",
      "differential": "도덕치료는 환경과 활동을 통한 치료이고, 생물의학적 치료는 약물이나 신체적 개입을 통한 치료이다.",
      "key_point": "피넬이 비세트르 수용소에서 환자의 쇠사슬을 풀어준 장면은 이상심리학 역사의 상징적 사건이다.",
      "common_mistake": "'도덕'이라는 단어에서 윤리적 교화를 의미한다고 오해하기 쉬우나, 실제로는 심리적·사회적 환경 개선을 의미한다."
    }
  },
  {
    "id": "FOUND_BIO_011",
    "terminology": "생물의학적 모형 (Biomedical Model)",
    "terminology_ko": "생물의학적 모형",
    "terminology_en": "Biomedical Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "정신장애를 뇌의 구조적·기능적 이상, 신경전달물질 불균형, 유전적 요인 등 생물학적 원인으로 설명하는 모형으로, 약물치료를 주된 치료법으로 제안한다.",
    "definition_en": "A model that explains mental disorders in terms of biological causes such as brain abnormalities, neurotransmitter imbalances, and genetic factors, proposing pharmacotherapy as the primary treatment.",
    "significance": "정신장애의 생물학적 기반을 밝히는 데 기여했으며, 향정신성 약물의 개발과 신경과학 발전의 토대가 되었다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "정신장애를 체계적으로 분류하고 생물학적 원인론을 주장하여 현대 정신의학 분류 체계의 기초를 놓았다."
      },
      {
        "name_ko": "아르비드 칼슨",
        "name_en": "Arvid Carlsson",
        "contribution": "도파민의 신경전달물질 기능을 발견하여 조현병의 도파민 가설에 핵심적 기여를 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "히포크라테스의 체액론",
        "name_en": "Hippocrates' Humoral Theory",
        "id": "FOUND_HIP_008"
      },
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "FOUND_NTR_023"
      },
      {
        "name_ko": "정신분석 모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_012"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Bio(생물) + Medical(의학) = 뇌와 몸의 문제로 정신장애를 설명",
      "differential": "생물의학적 모형은 신체적 원인에 초점, 정신분석 모형은 무의식적 갈등에 초점을 둔다.",
      "key_point": "환원주의적 한계가 있으며, 심리적·사회적 요인을 간과할 수 있다는 비판을 받는다.",
      "common_mistake": "생물의학적 모형이 정신장애를 단순히 '뇌의 화학적 불균형'으로만 설명한다고 단순화하는 오류."
    }
  },
  {
    "id": "FOUND_PSA_012",
    "terminology": "정신분석 모형 (Psychoanalytic Model)",
    "terminology_ko": "정신분석 모형",
    "terminology_en": "Psychoanalytic Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "프로이트에 의해 창시된 모형으로, 정신장애를 무의식적 갈등, 초기 아동기 경험, 방어기제의 부적응적 사용에서 비롯된 것으로 설명한다.",
    "definition_en": "A model founded by Freud that explains mental disorders as arising from unconscious conflicts, early childhood experiences, and maladaptive use of defense mechanisms.",
    "significance": "무의식의 역할과 아동기 경험의 중요성을 부각시켰으며, 심리치료의 기초를 확립한 최초의 포괄적 심리학 이론이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "정신분석학을 창시하고 무의식, 자아구조(원초아·자아·초자아), 심리성적 발달 단계를 제안했다."
      },
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "자아 방어기제를 체계적으로 분류하여 정신분석적 이론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "인본주의적 모형",
        "name_en": "Humanistic Model",
        "id": "FOUND_HUM_015"
      },
      {
        "name_ko": "방어기제",
        "name_en": "Defense Mechanisms",
        "id": "FOUND_DEF_024"
      },
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정신분석 3요소: 무의식 + 아동기 경험 + 방어기제",
      "differential": "정신분석은 무의식적 갈등에, 행동주의는 학습된 행동에, 인지모형은 사고패턴에 초점을 둔다.",
      "key_point": "과학적 검증이 어렵다는 비판을 받지만, 치료적 관계와 무의식의 중요성은 현대 심리치료에도 영향을 미친다.",
      "common_mistake": "정신분석이 모든 것을 성적 욕구로 환원한다는 오해 — 프로이트 이후 대상관계, 자기심리학 등 다양하게 발전했다."
    }
  },
  {
    "id": "FOUND_BEH_013",
    "terminology": "행동주의 모형 (Behavioral Model)",
    "terminology_ko": "행동주의 모형",
    "terminology_en": "Behavioral Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "이상행동을 학습의 원리(고전적 조건형성, 조작적 조건형성, 모델링)에 의해 습득된 부적응적 행동으로 설명하며, 새로운 적응 행동의 학습을 통해 치료가 가능하다고 본다.",
    "definition_en": "A model explaining abnormal behavior as maladaptive behaviors acquired through learning principles (classical conditioning, operant conditioning, modeling), treatable by learning new adaptive behaviors.",
    "significance": "관찰 가능한 행동에 초점을 맞춰 과학적 검증이 가능한 치료법을 개발했으며, 행동치료의 이론적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "행동주의의 창시자로, 리틀 앨버트 실험을 통해 공포가 조건형성될 수 있음을 보여주었다."
      },
      {
        "name_ko": "버러스 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "조작적 조건형성의 원리를 체계화하고 행동수정 기법의 이론적 기초를 제공했다."
      },
      {
        "name_ko": "앨버트 반두라",
        "name_en": "Albert Bandura",
        "contribution": "관찰학습(모델링)을 통해 행동이 습득될 수 있음을 보보 인형 실험으로 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "ANXIETY_SYD_018"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_019"
      },
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "행동주의 = 이상행동도 '학습'된 것이고, '새로운 학습'으로 고칠 수 있다",
      "differential": "행동주의는 외현적 행동 변화에, 인지모형은 내적 사고 변화에 초점을 둔다.",
      "key_point": "왓슨의 리틀 앨버트 실험은 공포증이 고전적 조건형성으로 학습될 수 있음을 보여준 고전적 사례이다.",
      "common_mistake": "행동주의가 내적 과정을 완전히 무시한다고 보는 것 — 반두라의 사회학습이론은 인지 과정도 포함한다."
    }
  },
  {
    "id": "FOUND_COG_014",
    "terminology": "인지 모형 (Cognitive Model)",
    "terminology_ko": "인지 모형",
    "terminology_en": "Cognitive Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "이상행동의 원인을 비합리적 신념, 인지적 왜곡, 역기능적 사고 패턴에서 찾으며, 사고 방식의 변화를 통해 정서와 행동의 개선이 가능하다고 보는 모형이다.",
    "definition_en": "A model that attributes abnormal behavior to irrational beliefs, cognitive distortions, and dysfunctional thinking patterns, proposing that changing thought patterns can improve emotions and behavior.",
    "significance": "인지행동치료(CBT)의 이론적 기반으로, 현대 임상심리학에서 가장 널리 사용되는 치료적 접근의 토대가 된다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지치료를 개발하고, 우울증의 인지삼제(자기·세상·미래에 대한 부정적 사고)를 제안했다."
      },
      {
        "name_ko": "앨버트 엘리스",
        "name_en": "Albert Ellis",
        "contribution": "합리적 정서행동치료(REBT)를 개발하고 비합리적 신념의 역할을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동주의 모형",
        "name_en": "Behavioral Model",
        "id": "FOUND_BEH_013"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "FOUND_CDI_025"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지모형 = ABC: Activating event → Belief → Consequence",
      "differential": "인지모형은 사고(thinking) 변화에 초점, 행동모형은 행동(behavior) 변화에 초점을 둔다.",
      "key_point": "상황 자체가 아니라 상황에 대한 '해석(인지)'이 정서와 행동을 결정한다는 것이 핵심이다.",
      "common_mistake": "인지모형이 감정을 무시한다고 오해하는 것 — 사고를 변화시켜 감정과 행동을 모두 개선하는 것이 목표이다."
    }
  },
  {
    "id": "FOUND_HUM_015",
    "terminology": "인본주의적 모형 (Humanistic Model)",
    "terminology_ko": "인본주의적 모형",
    "terminology_en": "Humanistic Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "이상행동을 자기실현 경향성의 차단, 조건부 가치의 내면화, 자기 개념과 경험 간의 불일치에서 비롯된 것으로 설명하며, 무조건적 긍정적 존중을 핵심 치료 요인으로 본다.",
    "definition_en": "A model explaining abnormal behavior as resulting from blocked self-actualization, internalized conditions of worth, and incongruence between self-concept and experience, emphasizing unconditional positive regard as a key therapeutic factor.",
    "significance": "인간의 성장 잠재력과 주관적 경험을 존중하는 관점으로, 내담자 중심 치료와 실존주의 치료의 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "인간중심치료를 개발하고 무조건적 긍정적 존중, 공감, 진정성을 핵심 치료 조건으로 제시했다."
      },
      {
        "name_ko": "에이브러햄 매슬로",
        "name_en": "Abraham Maslow",
        "contribution": "욕구위계이론과 자기실현 개념을 제안하여 인본주의 심리학의 이론적 틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신분석 모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_012"
      },
      {
        "name_ko": "도덕치료",
        "name_en": "Moral Treatment",
        "id": "FOUND_MOR_010"
      },
      {
        "name_ko": "생물심리사회적 모형",
        "name_en": "Biopsychosocial Model",
        "id": "FOUND_BPS_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인본주의 핵심: 자기실현 차단 → 불일치 → 이상행동",
      "differential": "인본주의는 성장과 자기실현에, 정신분석은 무의식적 갈등에 초점을 둔다.",
      "key_point": "이상행동을 '질병'이 아닌 '성장의 차단'으로 보는 관점이 핵심적 차이이다.",
      "common_mistake": "인본주의를 비과학적이라고 전적으로 치부하는 것 — 치료 관계의 중요성은 경험적으로 지지되고 있다."
    }
  },
  {
    "id": "FOUND_SCM_016",
    "terminology": "사회문화적 모형 (Sociocultural Model)",
    "terminology_ko": "사회문화적 모형",
    "terminology_en": "Sociocultural Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "이상행동의 원인과 표현이 사회적 환경, 문화적 가치, 빈곤, 차별, 가족 구조 등 사회문화적 요인에 의해 크게 영향받는다고 보는 모형이다.",
    "definition_en": "A model emphasizing that the causes and expressions of abnormal behavior are significantly influenced by sociocultural factors such as social environment, cultural values, poverty, discrimination, and family structure.",
    "significance": "정신장애의 문화적 다양성을 인식하게 했으며, 문화에 민감한 진단과 치료의 필요성을 제기했다.",
    "key_researchers": [
      {
        "name_ko": "토머스 사스",
        "name_en": "Thomas Szasz",
        "contribution": "정신질환이 사회적 구성물이라고 주장하며, 정신의학의 사회적 통제 기능을 비판했다."
      },
      {
        "name_ko": "어빙 고프먼",
        "name_en": "Erving Goffman",
        "contribution": "총체적 기관(total institution)과 낙인(stigma) 개념을 통해 정신병원의 사회적 기능을 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회적 일탈",
        "name_en": "Social Deviance",
        "id": "FOUND_SOC_005"
      },
      {
        "name_ko": "생물심리사회적 모형",
        "name_en": "Biopsychosocial Model",
        "id": "FOUND_BPS_017"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회문화적 = 사회(가난·차별) + 문화(가치·규범)의 영향",
      "differential": "사회문화적 모형은 외부 환경 요인을, 인지모형은 개인의 내적 사고 과정을 강조한다.",
      "key_point": "같은 장애라도 문화에 따라 증상 표현, 도움 추구 행동, 치료 반응이 다를 수 있다.",
      "common_mistake": "사회문화적 모형이 개인적 요인을 완전히 무시한다고 보는 것 — 환경적 맥락의 중요성을 강조할 뿐이다."
    }
  },
  {
    "id": "FOUND_BPS_017",
    "terminology": "생물심리사회적 모형 (Biopsychosocial Model)",
    "terminology_ko": "생물심리사회적 모형",
    "terminology_en": "Biopsychosocial Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "정신장애를 생물학적, 심리적, 사회적 요인의 복합적 상호작용으로 설명하는 통합적 모형으로, 단일 원인론의 한계를 극복하고자 제안되었다.",
    "definition_en": "An integrative model that explains mental disorders as the result of complex interactions among biological, psychological, and social factors, proposed to overcome the limitations of single-cause models.",
    "significance": "현대 이상심리학의 주류 패러다임으로, 다양한 요인의 상호작용을 인정함으로써 포괄적 이해와 다학제적 치료를 가능케 한다.",
    "key_researchers": [
      {
        "name_ko": "조지 엥겔",
        "name_en": "George Engel",
        "contribution": "1977년 생물심리사회적 모형을 공식 제안하여, 순수 생의학적 모형의 한계를 지적하고 통합적 접근을 주장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "사회문화적 모형",
        "name_en": "Sociocultural Model",
        "id": "FOUND_SCM_016"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BPS = Bio(생물) + Psycho(심리) + Social(사회)의 통합",
      "differential": "생물심리사회적 모형은 여러 요인의 '상호작용'을 강조하며, 단일 모형(생물/심리/사회)은 각각 하나의 측면만 강조한다.",
      "key_point": "George Engel이 1977년에 제안했으며, 현대 정신건강 분야의 가장 널리 수용되는 프레임워크이다.",
      "common_mistake": "세 가지 요인을 단순히 나열하는 것과 상호작용을 이해하는 것은 다르다 — 핵심은 요인 간의 역동적 상호작용이다."
    }
  },
  {
    "id": "FOUND_DSM_018",
    "terminology": "취약성-스트레스 모형 (Diathesis-Stress Model)",
    "terminology_ko": "취약성-스트레스 모형",
    "terminology_en": "Diathesis-Stress Model",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "개인의 생물학적·심리적 취약성(소인)과 환경적 스트레스 요인이 상호작용하여 정신장애가 발생한다는 모형으로, 취약성이 높을수록 적은 스트레스에도 장애가 발현된다.",
    "definition_en": "A model proposing that mental disorders result from the interaction between an individual's biological or psychological vulnerability (diathesis) and environmental stressors, with greater vulnerability requiring less stress to trigger disorder onset.",
    "significance": "정신장애의 발병 메커니즘을 설명하는 핵심 이론으로, 예방과 조기 개입의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "조지프 주빈",
        "name_en": "Joseph Zubin",
        "contribution": "1977년 취약성-스트레스 모형을 조현병에 적용하여, 생물학적 소인과 스트레스의 상호작용을 체계화했다."
      },
      {
        "name_ko": "보니 스프링",
        "name_en": "Bonnie Spring",
        "contribution": "주빈과 함께 취약성-스트레스 모형을 정립하고 조현병의 발병 기전 연구에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생물심리사회적 모형",
        "name_en": "Biopsychosocial Model",
        "id": "FOUND_BPS_017"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "FOUND_RES_026"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      },
      {
        "name_ko": "HPA축",
        "name_en": "HPA Axis",
        "id": "ANXIETY_HPA_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Diathesis(소인/취약성) + Stress(스트레스) = 발병 조건 충족",
      "differential": "취약성-스트레스 모형은 '어떤 조건에서' 장애가 발생하는지, 생물심리사회적 모형은 '어떤 요인들이' 관여하는지를 설명한다.",
      "key_point": "같은 스트레스를 겪어도 모든 사람이 발병하지 않는 이유를 설명하는 핵심 모형이다.",
      "common_mistake": "취약성을 유전적 요인으로만 한정하는 오류 — 심리적 취약성(예: 인지적 편향)도 포함된다."
    }
  },
  {
    "id": "FOUND_CST_019",
    "terminology": "사례연구 (Case Study)",
    "terminology_ko": "사례연구",
    "terminology_en": "Case Study",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "개인이나 소수의 사례를 심층적으로 관찰하고 기술하는 연구방법으로, 풍부한 질적 자료를 제공하지만 일반화에 한계가 있다.",
    "definition_en": "A research method involving in-depth observation and description of an individual or small number of cases, providing rich qualitative data but limited in generalizability.",
    "significance": "이상심리학의 가장 오래된 연구방법으로, 드문 장애의 이해와 가설 생성에 특히 유용하다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "안나 O, 리틀 한스 등 유명한 사례연구를 통해 정신분석 이론을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "FOUND_COR_020"
      },
      {
        "name_ko": "실험연구",
        "name_en": "Experimental Study",
        "id": "FOUND_EXP_028"
      },
      {
        "name_ko": "해리성정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사례연구 = 한 사람을 '깊이' 파기",
      "differential": "사례연구는 깊이(depth)에 강하고 일반화(generalization)에 약하며, 실험연구는 그 반대이다.",
      "key_point": "내적 타당도와 외적 타당도 모두 제한적이지만, 가설 생성과 희귀 사례 연구에 매우 유용하다.",
      "common_mistake": "사례연구에서 인과관계를 추론하는 오류 — 사례연구는 기술과 가설 생성에 적합하지 인과 추론에는 부적합하다."
    }
  },
  {
    "id": "FOUND_COR_020",
    "terminology": "상관연구 (Correlational Study)",
    "terminology_ko": "상관연구",
    "terminology_en": "Correlational Study",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "두 개 이상의 변인 간의 관련성과 그 방향 및 강도를 측정하는 연구방법으로, 인과관계를 증명할 수는 없지만 변인 간의 관계 패턴을 파악할 수 있다.",
    "definition_en": "A research method measuring the relationship between two or more variables in terms of direction and strength, unable to prove causation but useful for identifying relationship patterns among variables.",
    "significance": "윤리적 이유로 실험이 불가능한 이상심리학 주제에서 중요한 연구 도구이며, 위험 요인 탐색에 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "칼 피어슨",
        "name_en": "Karl Pearson",
        "contribution": "피어슨 상관계수를 개발하여 변인 간 관계의 정량적 측정을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "FOUND_CST_019"
      },
      {
        "name_ko": "실험연구",
        "name_en": "Experimental Study",
        "id": "FOUND_EXP_028"
      },
      {
        "name_ko": "역학연구",
        "name_en": "Epidemiological Study",
        "id": "FOUND_EPI_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "상관 ≠ 인과: Correlation does not imply Causation",
      "differential": "상관연구는 관계의 방향과 강도를 측정하고, 실험연구는 인과관계를 검증한다.",
      "key_point": "상관연구의 핵심 한계는 제3변인(third variable) 문제와 방향성(directionality) 문제이다.",
      "common_mistake": "상관관계에서 인과관계를 추론하는 대표적 오류 — 예: 우울과 음주의 상관이 음주가 우울을 유발한다는 의미는 아니다."
    }
  },
  {
    "id": "FOUND_MHM_021",
    "terminology": "정신위생운동 (Mental Hygiene Movement)",
    "terminology_ko": "정신위생운동",
    "terminology_en": "Mental Hygiene Movement",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "20세기 초 클리포드 비어스의 활동을 계기로 시작된 정신건강 개혁운동으로, 정신장애의 예방, 환자의 인권 보호, 치료 환경 개선을 목표로 했다.",
    "definition_en": "A mental health reform movement initiated in the early 20th century by Clifford Beers, aimed at preventing mental disorders, protecting patients' rights, and improving treatment conditions.",
    "significance": "현대 지역사회 정신건강 서비스와 정신건강법의 기초가 되었으며, 예방의 중요성을 강조했다.",
    "key_researchers": [
      {
        "name_ko": "클리포드 비어스",
        "name_en": "Clifford Beers",
        "contribution": "1908년 자신의 정신병원 입원 경험을 기록한 『자기 자신을 찾은 마음(A Mind That Found Itself)』을 출판하여 정신위생운동을 촉발했다."
      },
      {
        "name_ko": "도로시아 딕스",
        "name_en": "Dorothea Dix",
        "contribution": "정신위생운동 이전에 미국 각 주의 정신장애인 수용 시설 개혁과 설립을 위해 투쟁했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도덕치료",
        "name_en": "Moral Treatment",
        "id": "FOUND_MOR_010"
      },
      {
        "name_ko": "수용소",
        "name_en": "Asylum",
        "id": "FOUND_ASY_009"
      },
      {
        "name_ko": "탈시설화",
        "name_en": "Deinstitutionalization",
        "id": "FOUND_DEI_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "클리포드 비어스(Beers) = 정신위생운동의 시작점",
      "differential": "도덕치료는 18~19세기 치료 환경 개혁이고, 정신위생운동은 20세기 초 예방과 인권 중심의 사회운동이다.",
      "key_point": "비어스는 정신병원에서의 가혹한 경험을 직접 기록하여 사회적 관심을 환기한 당사자 운동의 선구자이다.",
      "common_mistake": "정신위생운동을 도덕치료와 혼동하는 것 — 시대와 초점(치료 vs. 예방·인권)이 다르다."
    }
  },
  {
    "id": "FOUND_DEI_022",
    "terminology": "탈시설화 (Deinstitutionalization)",
    "terminology_ko": "탈시설화",
    "terminology_en": "Deinstitutionalization",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "1960년대 이후 대형 정신병원을 폐쇄하거나 축소하고 정신장애인을 지역사회로 복귀시킨 정책으로, 항정신병 약물의 개발과 인권운동이 계기가 되었다.",
    "definition_en": "A policy movement since the 1960s to close or downsize large psychiatric hospitals and reintegrate people with mental disorders into the community, spurred by antipsychotic medications and civil rights movements.",
    "significance": "지역사회 정신건강 서비스의 확대를 촉진했으나, 충분한 대안 서비스 없이 진행되어 노숙 문제 등 새로운 과제를 발생시켰다.",
    "key_researchers": [
      {
        "name_ko": "존 F. 케네디",
        "name_en": "John F. Kennedy",
        "contribution": "1963년 지역사회 정신건강센터법에 서명하여 미국 탈시설화 정책의 제도적 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "수용소",
        "name_en": "Asylum",
        "id": "FOUND_ASY_009"
      },
      {
        "name_ko": "정신위생운동",
        "name_en": "Mental Hygiene Movement",
        "id": "FOUND_MHM_021"
      },
      {
        "name_ko": "도덕치료",
        "name_en": "Moral Treatment",
        "id": "FOUND_MOR_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "De(탈) + institution(시설) = 시설에서 '벗어남'",
      "differential": "탈시설화는 '시설에서 지역사회로'의 이동이고, 도덕치료는 '시설 내 환경 개선'이다.",
      "key_point": "항정신병 약물(클로르프로마진)의 개발이 탈시설화를 기술적으로 가능하게 한 핵심 요인이다.",
      "common_mistake": "탈시설화가 완전히 성공적이었다고 보는 오류 — 지역사회 서비스 부족으로 회전문 현상과 노숙 문제가 발생했다."
    }
  },
  {
    "id": "FOUND_NTR_023",
    "terminology": "신경전달물질 (Neurotransmitter)",
    "terminology_ko": "신경전달물질",
    "terminology_en": "Neurotransmitter",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "시냅스를 통해 신경세포 간 화학적 신호를 전달하는 물질로, 세로토닌, 도파민, 노르에피네프린, GABA 등의 불균형이 다양한 정신장애와 관련된다.",
    "definition_en": "Chemical substances that transmit signals between neurons across synapses; imbalances in neurotransmitters such as serotonin, dopamine, norepinephrine, and GABA are associated with various mental disorders.",
    "significance": "정신장애의 생물학적 기반을 이해하는 핵심 개념으로, 향정신성 약물 개발의 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "줄리어스 액셀로드",
        "name_en": "Julius Axelrod",
        "contribution": "카테콜아민(노르에피네프린) 대사 연구로 노벨상을 수상하여 신경전달물질의 작용 기전 이해에 기여했다."
      },
      {
        "name_ko": "아르비드 칼슨",
        "name_en": "Arvid Carlsson",
        "contribution": "도파민의 신경전달 기능을 발견하여 조현병과 파킨슨병의 이해에 핵심적 기여를 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "ANXIETY_SSR_021"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "주요 신경전달물질: 세로토닌(기분), 도파민(보상), 노르에피네프린(각성), GABA(억제)",
      "differential": "신경전달물질은 시냅스 수준의 화학 신호이고, 호르몬은 혈류를 통한 내분비 신호이다.",
      "key_point": "세로토닌 부족은 우울증, 도파민 과잉은 조현병, GABA 부족은 불안장애와 관련된다.",
      "common_mistake": "정신장애가 단순한 '화학물질 불균형'으로만 설명된다고 단순화하는 것 — 신경전달물질은 복잡한 회로의 일부이다."
    }
  },
  {
    "id": "FOUND_DEF_024",
    "terminology": "방어기제 (Defense Mechanisms)",
    "terminology_ko": "방어기제",
    "terminology_en": "Defense Mechanisms",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "자아가 불안으로부터 자신을 보호하기 위해 무의식적으로 사용하는 심리적 전략으로, 억압, 투사, 합리화, 부인, 반동형성, 승화 등이 있으며 과도한 사용은 부적응을 초래한다.",
    "definition_en": "Unconscious psychological strategies used by the ego to protect itself from anxiety, including repression, projection, rationalization, denial, reaction formation, and sublimation; excessive use leads to maladaptation.",
    "significance": "정신분석적 이상심리학의 핵심 개념으로, 신경증적 증상의 형성과 유지를 설명하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "안나 프로이트",
        "name_en": "Anna Freud",
        "contribution": "1936년 『자아와 방어기제(The Ego and the Mechanisms of Defence)』에서 방어기제를 체계적으로 분류했다."
      },
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "방어기제 개념을 최초로 도입하고 억압을 가장 기본적인 방어기제로 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정신분석 모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_012"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "FOUND_CDI_025"
      },
      {
        "name_ko": "주관적 고통",
        "name_en": "Subjective Distress",
        "id": "FOUND_DIS_003"
      }
    ],
    "sub_types": [
      {
        "name": "억압 (Repression)",
        "description": "위협적인 생각이나 기억을 의식에서 무의식으로 밀어내는 가장 기본적 방어기제"
      },
      {
        "name": "투사 (Projection)",
        "description": "자신의 수용할 수 없는 충동이나 감정을 다른 사람에게 귀인하는 방어기제"
      },
      {
        "name": "합리화 (Rationalization)",
        "description": "위협적인 행동이나 감정에 대해 그럴듯한 이유를 만들어 정당화하는 방어기제"
      },
      {
        "name": "승화 (Sublimation)",
        "description": "수용 불가능한 충동을 사회적으로 가치 있는 활동으로 전환하는 성숙한 방어기제"
      }
    ],
    "quiz_hints": {
      "mnemonic": "방어기제 = 자아(ego)의 '방패': 무의식적으로 불안에서 보호",
      "differential": "방어기제는 무의식적 전략이고, 대처(coping)는 의식적 전략이다.",
      "key_point": "방어기제 자체는 정상적이며, 과도하거나 미성숙한 방어기제의 사용이 부적응을 초래한다.",
      "common_mistake": "모든 방어기제가 부적응적이라고 보는 오류 — 승화는 건강한 적응에 기여하는 성숙한 방어기제이다."
    }
  },
  {
    "id": "FOUND_CDI_025",
    "terminology": "인지적 왜곡 (Cognitive Distortions)",
    "terminology_ko": "인지적 왜곡",
    "terminology_en": "Cognitive Distortions",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "현실을 체계적으로 부정확하게 해석하는 사고 패턴으로, 흑백사고, 과잉일반화, 파국화, 개인화 등이 있으며 우울과 불안 등 정서장애의 유지에 핵심적 역할을 한다.",
    "definition_en": "Systematic patterns of inaccurate interpretation of reality, including all-or-nothing thinking, overgeneralization, catastrophizing, and personalization, playing a central role in maintaining emotional disorders such as depression and anxiety.",
    "significance": "인지행동치료에서 핵심적으로 다루는 치료 표적으로, 인지 재구성의 직접적 대상이 된다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지적 왜곡의 개념을 체계화하고, 이를 우울증 및 불안장애의 핵심 유지 기제로 설명했다."
      },
      {
        "name_ko": "데이비드 번스",
        "name_en": "David Burns",
        "contribution": "벡의 인지적 왜곡을 대중적으로 정리하여 10가지 인지적 왜곡 목록을 보급했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [
      {
        "name": "흑백사고 (All-or-Nothing Thinking)",
        "description": "상황을 양 극단으로만 보는 사고, 중간이 없는 이분법적 판단"
      },
      {
        "name": "과잉일반화 (Overgeneralization)",
        "description": "한두 번의 경험을 근거로 광범위한 결론을 내리는 사고"
      },
      {
        "name": "파국화 (Catastrophizing)",
        "description": "최악의 결과만을 예상하고 그 가능성을 과대평가하는 사고"
      },
      {
        "name": "개인화 (Personalization)",
        "description": "외부 사건의 원인을 자신에게 돌리는 사고"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지적 왜곡 = 현실을 '비뚤어진 렌즈'로 보는 것",
      "differential": "인지적 왜곡은 인지모형의 개념이고, 방어기제는 정신분석 모형의 개념이다. 전자는 사고 오류, 후자는 무의식적 전략이다.",
      "key_point": "자동적 사고에 내재된 체계적 오류이며, 인지 재구성을 통해 수정 가능하다.",
      "common_mistake": "인지적 왜곡을 '거짓말'이나 '고의적 왜곡'으로 보는 것 — 당사자는 이를 사실로 인식한다."
    }
  },
  {
    "id": "FOUND_RES_026",
    "terminology": "회복탄력성 (Resilience)",
    "terminology_ko": "회복탄력성",
    "terminology_en": "Resilience",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "심각한 역경이나 스트레스에도 불구하고 적응적 기능을 유지하거나 빠르게 회복하는 능력으로, 보호 요인과 긍정적 적응 과정을 포함한다.",
    "definition_en": "The ability to maintain adaptive functioning or recover quickly despite significant adversity or stress, encompassing protective factors and positive adaptation processes.",
    "significance": "취약성-스트레스 모형에서 발병을 완충하는 보호 요인으로, 정신장애의 예방과 긍정심리학의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "에미 워너",
        "name_en": "Emmy Werner",
        "contribution": "카우아이 종단연구를 통해 고위험 아동의 회복탄력성 요인을 최초로 체계적으로 규명했다."
      },
      {
        "name_ko": "앤 매스턴",
        "name_en": "Ann Masten",
        "contribution": "회복탄력성을 '평범한 마법(ordinary magic)'으로 개념화하여 보편적 적응 과정임을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "생물심리사회적 모형",
        "name_en": "Biopsychosocial Model",
        "id": "FOUND_BPS_017"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Resilience = 쓰러져도 다시 일어나는 '오뚝이'",
      "differential": "회복탄력성은 역경 후의 긍정적 적응이고, 외상 후 성장(PTG)은 역경을 계기로 이전보다 발전하는 것이다.",
      "key_point": "회복탄력성은 고정된 특성이 아니라 학습과 환경에 의해 증진될 수 있는 역동적 과정이다.",
      "common_mistake": "회복탄력성을 스트레스에 영향받지 않는 것으로 오해하는 것 — 실제로는 영향을 받되 적응적으로 회복하는 과정이다."
    }
  },
  {
    "id": "FOUND_PRV_027",
    "terminology": "유병률 (Prevalence)",
    "terminology_ko": "유병률",
    "terminology_en": "Prevalence",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "특정 시점 또는 기간에 전체 인구 중 특정 장애를 가진 사람의 비율로, 시점유병률과 기간유병률(평생유병률 포함)로 구분된다.",
    "definition_en": "The proportion of a population that has a specific disorder at a particular point or period in time, classified into point prevalence and period prevalence (including lifetime prevalence).",
    "significance": "정신장애의 규모를 파악하고 공중보건 정책 수립의 근거를 제공하는 핵심 역학 지표이다.",
    "key_researchers": [
      {
        "name_ko": "존 스노",
        "name_en": "John Snow",
        "contribution": "현대 역학의 아버지로, 체계적인 질병 발생률 조사 방법론의 기초를 마련했다."
      },
      {
        "name_ko": "로널드 케슬러",
        "name_en": "Ronald Kessler",
        "contribution": "미국 전국공존이환조사(NCS)를 주도하여 정신장애의 유병률 데이터를 대규모로 수집했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발생률",
        "name_en": "Incidence",
        "id": "FOUND_INC_030"
      },
      {
        "name_ko": "역학연구",
        "name_en": "Epidemiological Study",
        "id": "FOUND_EPI_029"
      },
      {
        "name_ko": "통계적 일탈",
        "name_en": "Statistical Deviance",
        "id": "FOUND_STD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "유병률 = 현재 '갖고 있는' 사람의 비율 (전체 사진 한 컷)",
      "differential": "유병률은 특정 시점/기간의 전체 환자 비율이고, 발생률은 일정 기간 새로 발생한 환자 비율이다.",
      "key_point": "만성 질환은 유병률이 높고 발생률이 낮을 수 있고, 급성 질환은 그 반대일 수 있다.",
      "common_mistake": "유병률과 발생률을 혼동하는 것 — 유병률은 기존+신규 사례 모두 포함, 발생률은 신규 사례만 포함."
    }
  },
  {
    "id": "FOUND_EXP_028",
    "terminology": "실험연구 (Experimental Study)",
    "terminology_ko": "실험연구",
    "terminology_en": "Experimental Study",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "독립변인을 조작하고 종속변인의 변화를 측정하며, 외생변인을 통제하여 인과관계를 검증하는 연구방법으로, 무선할당이 핵심 요소이다.",
    "definition_en": "A research method that manipulates independent variables, measures changes in dependent variables, and controls extraneous variables to test causal relationships, with random assignment as a key element.",
    "significance": "인과관계를 입증할 수 있는 유일한 연구방법으로, 치료 효과성 검증(RCT)의 기본 설계이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피셔",
        "name_en": "Ronald Fisher",
        "contribution": "무선할당과 실험설계의 통계적 원리를 체계화하여 현대 실험연구 방법론의 기초를 놓았다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "FOUND_COR_020"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "FOUND_CST_019"
      },
      {
        "name_ko": "역학연구",
        "name_en": "Epidemiological Study",
        "id": "FOUND_EPI_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실험의 3요소: 조작(manipulation) + 통제(control) + 무선할당(randomization)",
      "differential": "실험연구는 인과관계를 밝힐 수 있지만, 윤리적 이유로 이상심리학에서 적용에 한계가 있다.",
      "key_point": "이상심리학에서 병인(etiology) 연구에 직접 실험이 어려운 경우 유사실험설계를 사용한다.",
      "common_mistake": "통제 집단 없이 치료 효과를 주장하는 오류 — 무선할당 통제집단이 있어야 내적 타당도가 확보된다."
    }
  },
  {
    "id": "FOUND_EPI_029",
    "terminology": "역학연구 (Epidemiological Study)",
    "terminology_ko": "역학연구",
    "terminology_en": "Epidemiological Study",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "인구 집단에서 정신장애의 분포, 빈도, 위험 요인, 보호 요인을 조사하는 연구방법으로, 유병률과 발생률 산출 및 공중보건 정책 수립에 활용된다.",
    "definition_en": "A research method investigating the distribution, frequency, risk factors, and protective factors of mental disorders in populations, used to calculate prevalence and incidence and inform public health policy.",
    "significance": "정신장애의 거시적 패턴을 파악하고 고위험 집단을 식별하여 예방 전략 수립의 과학적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 케슬러",
        "name_en": "Ronald Kessler",
        "contribution": "미국 전국공존이환조사(NCS)를 통해 정신장애의 유병률과 공존이환 패턴을 대규모로 밝혀냈다."
      },
      {
        "name_ko": "리 로빈스",
        "name_en": "Lee Robins",
        "contribution": "역학적 수집지역 연구(ECA)를 주도하여 미국 정신장애 역학연구의 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유병률",
        "name_en": "Prevalence",
        "id": "FOUND_PRV_027"
      },
      {
        "name_ko": "발생률",
        "name_en": "Incidence",
        "id": "FOUND_INC_030"
      },
      {
        "name_ko": "상관연구",
        "name_en": "Correlational Study",
        "id": "FOUND_COR_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "역학(Epidemiology) = epi(위에) + demos(사람들) = 인구 집단 위에서 바라보는 관점",
      "differential": "역학연구는 인구 집단 수준의 분포를, 사례연구는 개인 수준의 심층 이해를 목표로 한다.",
      "key_point": "NCS(National Comorbidity Survey)와 ECA(Epidemiologic Catchment Area) 연구가 대표적 정신장애 역학연구이다.",
      "common_mistake": "역학연구가 인과관계를 입증할 수 있다고 보는 오류 — 대부분 상관적 자료만 제공한다."
    }
  },
  {
    "id": "FOUND_INC_030",
    "terminology": "발생률 (Incidence)",
    "terminology_ko": "발생률",
    "terminology_en": "Incidence",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "일정 기간 동안 특정 인구 집단에서 새롭게 발생한 정신장애 사례의 비율로, 장애의 발생 위험을 추정하는 데 사용된다.",
    "definition_en": "The proportion of new cases of a mental disorder that develop in a specific population during a defined period, used to estimate the risk of developing the disorder.",
    "significance": "예방 프로그램의 효과 평가와 위험 요인 변화의 모니터링에 핵심적인 역학 지표이다.",
    "key_researchers": [
      {
        "name_ko": "로널드 케슬러",
        "name_en": "Ronald Kessler",
        "contribution": "NCS 연구를 통해 정신장애의 발생 시기와 새로운 사례 발생 패턴을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유병률",
        "name_en": "Prevalence",
        "id": "FOUND_PRV_027"
      },
      {
        "name_ko": "역학연구",
        "name_en": "Epidemiological Study",
        "id": "FOUND_EPI_029"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "발생률 = '새로' 생긴 사례만 세기 (이전 환자 제외)",
      "differential": "발생률은 '새로운' 사례만 포함하고, 유병률은 '기존+새로운' 사례 모두 포함한다.",
      "key_point": "발생률이 일정한데 유병률이 증가하면, 이환 기간(duration)이 길어졌음을 의미한다.",
      "common_mistake": "발생률과 유병률을 구분하지 못하는 것 — 발생률 = 신규, 유병률 = 전체."
    }
  },
  {
    "id": "FOUND_ETH_031",
    "terminology": "사전동의 (Informed Consent)",
    "terminology_ko": "사전동의",
    "terminology_en": "Informed Consent",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "연구 참여자나 내담자에게 절차, 위험, 이점, 대안 등을 충분히 설명한 후 자발적 동의를 받는 윤리 원칙으로, 자율성 존중의 핵심이다.",
    "definition_en": "An ethical principle requiring that research participants or clients receive adequate information about procedures, risks, benefits, and alternatives before providing voluntary consent, fundamental to respecting autonomy.",
    "significance": "임상심리학 연구와 실천의 가장 기본적인 윤리적 요구사항으로, 참여자의 권리 보호와 전문가 책임의 근간이 된다.",
    "key_researchers": [
      {
        "name_ko": "톰 뷰캐넌",
        "name_en": "Tom Beauchamp",
        "contribution": "벨몬트 보고서와 생명의료윤리 4원칙(자율성 존중, 선행, 악행금지, 정의)을 정립하여 사전동의의 윤리적 기초를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "FOUND_CON_032"
      },
      {
        "name_ko": "치료 거부권",
        "name_en": "Right to Refuse Treatment",
        "id": "FOUND_RRT_033"
      },
      {
        "name_ko": "사례연구",
        "name_en": "Case Study",
        "id": "FOUND_CST_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Informed(충분히 알린) + Consent(동의) = 알고서 동의하기",
      "differential": "사전동의는 자발적 의사결정이고, 치료 거부권은 이미 시작된 치료를 중단할 권리이다.",
      "key_point": "능력(competence), 정보(information), 자발성(voluntariness)의 3요소가 갖추어져야 유효한 사전동의이다.",
      "common_mistake": "동의서에 서명만 받으면 충분하다고 보는 것 — 이해 가능한 설명과 자발적 참여가 핵심이다."
    }
  },
  {
    "id": "FOUND_CON_032",
    "terminology": "비밀보장 (Confidentiality)",
    "terminology_ko": "비밀보장",
    "terminology_en": "Confidentiality",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "치료 과정에서 내담자가 공개한 개인정보를 치료자가 무단으로 외부에 공개하지 않을 의무로, 치료적 신뢰관계의 필수 조건이다.",
    "definition_en": "The therapist's obligation not to disclose a client's personal information shared during treatment without authorization, an essential condition for a trustworthy therapeutic relationship.",
    "significance": "내담자가 안심하고 자신의 문제를 개방할 수 있는 치료 환경을 보장하는 근본적 윤리 원칙이다.",
    "key_researchers": [
      {
        "name_ko": "미국심리학회",
        "name_en": "American Psychological Association",
        "contribution": "APA 윤리강령에서 비밀보장의 원칙과 예외 조건(타해 위험 등)을 명시하여 실천 기준을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "FOUND_ETH_031"
      },
      {
        "name_ko": "치료 거부권",
        "name_en": "Right to Refuse Treatment",
        "id": "FOUND_RRT_033"
      },
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비밀보장의 예외: 자해/타해 위험, 아동학대 신고 의무, 법원 명령",
      "differential": "비밀보장은 치료자의 의무이고, 특권적 의사소통(privileged communication)은 법적 보호이다.",
      "key_point": "타라소프 판례(Tarasoff case)에서 타해 위험 시 비밀보장의 예외인 '경고 의무'가 확립되었다.",
      "common_mistake": "비밀보장이 절대적이라고 이해하는 것 — 타해 위험, 아동학대 의무 신고 등의 법적 예외가 있다."
    }
  },
  {
    "id": "FOUND_RRT_033",
    "terminology": "치료 거부권 (Right to Refuse Treatment)",
    "terminology_ko": "치료 거부권",
    "terminology_en": "Right to Refuse Treatment",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "정신장애 환자가 자신에게 시행되는 치료(특히 약물치료나 전기경련치료)를 거부할 수 있는 법적 권리로, 자율성 존중의 원칙에 기반한다.",
    "definition_en": "The legal right of a person with a mental disorder to refuse treatment (particularly medication or electroconvulsive therapy), grounded in the principle of respect for autonomy.",
    "significance": "비자발적 입원 환자의 인권 보호에 핵심적이며, 치료 효과와 환자 자율성 간의 윤리적 균형 문제를 제기한다.",
    "key_researchers": [
      {
        "name_ko": "브루스 엔니스",
        "name_en": "Bruce Ennis",
        "contribution": "정신장애인의 시민권 운동을 이끌며 비자발적 입원과 치료 강제의 법적 한계를 확립하는 데 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사전동의",
        "name_en": "Informed Consent",
        "id": "FOUND_ETH_031"
      },
      {
        "name_ko": "비밀보장",
        "name_en": "Confidentiality",
        "id": "FOUND_CON_032"
      },
      {
        "name_ko": "탈시설화",
        "name_en": "Deinstitutionalization",
        "id": "FOUND_DEI_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "치료 거부권 = 환자의 '자율성(autonomy)' 보장",
      "differential": "치료 거부권은 치료를 '거절'할 권리이고, 사전동의는 치료에 '동의'하기 전 정보를 받을 권리이다.",
      "key_point": "비자발적 입원 환자도 원칙적으로 치료 거부권이 있으며, 강제 치료는 엄격한 법적 절차를 거쳐야 한다.",
      "common_mistake": "비자발적 입원이 곧 치료 동의를 의미한다고 보는 오류 — 입원과 치료 동의는 별개의 법적 문제이다."
    }
  },
  {
    "id": "FOUND_GEN_034",
    "terminology": "유전적 소인 (Genetic Predisposition)",
    "terminology_ko": "유전적 소인",
    "terminology_en": "Genetic Predisposition",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "특정 정신장애에 걸릴 가능성을 높이는 유전적 요인으로, 장애 자체가 유전되는 것이 아니라 취약성이 유전되며 환경과의 상호작용을 통해 발현된다.",
    "definition_en": "Genetic factors that increase the likelihood of developing a particular mental disorder, where vulnerability rather than the disorder itself is inherited and expressed through interaction with environmental factors.",
    "significance": "쌍생아 연구와 입양 연구를 통해 정신장애의 유전적 기여도를 밝히는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "어빙 고트스만",
        "name_en": "Irving Gottesman",
        "contribution": "조현병의 쌍생아 연구를 통해 유전적 기여도를 입증하고 다유전자 역치 모형을 제안했다."
      },
      {
        "name_ko": "케네스 켄들러",
        "name_en": "Kenneth Kendler",
        "contribution": "쌍생아 등록부를 활용하여 다양한 정신장애의 유전적·환경적 기여도를 분리 추정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "유전적 소인 = 유전되는 것은 '장애'가 아니라 '취약성'",
      "differential": "유전적 소인은 가능성(취약성)의 유전이고, 단일 유전자 질환은 결정적 유전이다. 대부분 정신장애는 다유전자적이다.",
      "key_point": "일란성 쌍생아의 일치율이 100%가 아닌 것은 환경 요인의 중요성을 보여준다.",
      "common_mistake": "유전적 소인이 있으면 반드시 발병한다고 보는 유전결정론적 오류 — 환경과의 상호작용이 필수적이다."
    }
  },
  {
    "id": "FOUND_EPI_035",
    "terminology": "후성유전학 (Epigenetics)",
    "terminology_ko": "후성유전학",
    "terminology_en": "Epigenetics",
    "category": "FOUND",
    "category_name": "이상심리학 기초와 모형 (Foundations and Models)",
    "definition": "DNA 서열 자체의 변화 없이 환경 요인에 의해 유전자 발현이 조절되는 기전을 연구하는 학문으로, 스트레스 경험이 유전자 발현에 영향을 미쳐 정신장애 취약성을 변화시킬 수 있음을 보여준다.",
    "definition_en": "The study of mechanisms by which gene expression is regulated by environmental factors without changes to the DNA sequence itself, demonstrating that stress experiences can alter gene expression and modify vulnerability to mental disorders.",
    "significance": "유전과 환경의 상호작용을 분자 수준에서 설명하며, 취약성-스트레스 모형에 생물학적 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "마이클 미니",
        "name_en": "Michael Meaney",
        "contribution": "쥐 어미의 양육행동이 새끼의 스트레스 반응 유전자(GR)의 메틸화에 영향을 미침을 발견했다."
      },
      {
        "name_ko": "모셰 시지프",
        "name_en": "Moshe Szyf",
        "contribution": "미니와 협력하여 초기 환경이 후성유전적 변화를 통해 행동에 지속적 영향을 미치는 기전을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "유전적 소인",
        "name_en": "Genetic Predisposition",
        "id": "FOUND_GEN_034"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "후성유전 = DNA는 그대로, '스위치(on/off)'만 바뀜",
      "differential": "후성유전학은 유전자 '발현' 변화이고, 돌연변이는 유전자 '서열' 변화이다.",
      "key_point": "후성유전적 변화는 세대 간 전달될 수 있어, 부모의 스트레스 경험이 자녀에게 영향을 미칠 수 있다.",
      "common_mistake": "후성유전적 변화를 유전자 변이로 혼동하는 것 — DNA 서열 변화 없이 발현만 조절된다."
    }
  }
];

TERMS_DATA.ASSESS = [
  {
    "id": "ASSESS_DSM_001",
    "terminology": "DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th Edition)",
    "terminology_ko": "DSM-5",
    "terminology_en": "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "미국정신의학회(APA)가 발행한 정신장애의 진단 및 통계 편람 제5판으로, 정신장애를 범주적으로 분류하고 각 장애의 진단기준을 제시하는 공식 분류 체계이다.",
    "definition_en": "The fifth edition of the Diagnostic and Statistical Manual of Mental Disorders published by the American Psychiatric Association, providing categorical classification and diagnostic criteria for mental disorders.",
    "significance": "북미를 중심으로 전 세계 임상, 연구, 보험 체계에서 사용되는 정신장애 진단의 표준 참조 체계이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 쿠퍼",
        "name_en": "David Kupfer",
        "contribution": "DSM-5 개정위원회 위원장으로서 차원적 접근의 통합과 다축 체계 폐지를 주도했다."
      },
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "DSM-III의 주편집자로서 조작적 진단기준을 도입하여 현대 DSM 체계의 기틀을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ICD-11",
        "name_en": "ICD-11",
        "id": "ASSESS_ICD_002"
      },
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      },
      {
        "name_ko": "진단적 타당도",
        "name_en": "Diagnostic Validity",
        "id": "ASSESS_VAL_004"
      },
      {
        "name_ko": "감별진단",
        "name_en": "Differential Diagnosis",
        "id": "ASSESS_DIF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DSM-5: 2013년 출판, APA 발행, 다축 체계 폐지, 차원적 평가 도입",
      "differential": "DSM-5는 미국정신의학회 발행이고, ICD-11은 세계보건기구(WHO) 발행이다. DSM은 주로 북미, ICD는 국제적으로 사용된다.",
      "key_point": "DSM-5에서 다축 체계가 폐지되고, 자폐스펙트럼장애로 통합, 성별불쾌감 신설 등 주요 변화가 있었다.",
      "common_mistake": "DSM-5를 'DSM-V'로 표기하는 오류 — 아라비아 숫자 5를 사용한다(향후 5.1, 5.2 등 점진적 개정을 위해)."
    }
  },
  {
    "id": "ASSESS_ICD_002",
    "terminology": "ICD-11 (International Classification of Diseases, 11th Revision)",
    "terminology_ko": "ICD-11",
    "terminology_en": "International Classification of Diseases, 11th Revision",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "세계보건기구(WHO)가 발행한 국제질병분류 제11차 개정판으로, 정신장애를 포함한 모든 질병의 국제적 분류 및 코딩 체계이며, 2022년부터 공식 시행되었다.",
    "definition_en": "The 11th revision of the International Classification of Diseases published by the World Health Organization, serving as the global classification and coding system for all diseases including mental disorders, officially implemented since 2022.",
    "significance": "전 세계적으로 통용되는 질병 분류 체계로, 국제적 소통, 역학 통계, 건강 정책 수립의 공통 언어 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "제프리 리드",
        "name_en": "Geoffrey Reed",
        "contribution": "ICD-11 정신 및 행동장애 분류 개정의 기술 자문관으로서 임상적 유용성 향상을 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      },
      {
        "name_ko": "공병",
        "name_en": "Comorbidity",
        "id": "ASSESS_COM_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ICD = WHO 발행, 전 세계 공용; DSM = APA 발행, 주로 북미",
      "differential": "ICD-11은 모든 질병을 분류하며 정신장애는 한 부분이고, DSM-5는 정신장애만 전문적으로 다룬다.",
      "key_point": "ICD-11은 복합PTSD, 장기간 비탄장애 등 DSM-5에 없는 진단범주를 포함한다.",
      "common_mistake": "ICD와 DSM이 완전히 동일하다고 보는 것 — 상당 부분 일치하지만 세부 진단기준에 차이가 있다."
    }
  },
  {
    "id": "ASSESS_REL_003",
    "terminology": "진단적 신뢰도 (Diagnostic Reliability)",
    "terminology_ko": "진단적 신뢰도",
    "terminology_en": "Diagnostic Reliability",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "동일한 환자를 서로 다른 임상가가 평가했을 때 같은 진단을 내리는 일관성의 정도로, 특히 평가자 간 신뢰도(inter-rater reliability)가 중요한 지표이다.",
    "definition_en": "The degree of consistency in diagnosis when the same patient is evaluated by different clinicians, with inter-rater reliability being a particularly important indicator.",
    "significance": "진단 체계의 과학적 가치를 좌우하는 기본 요건으로, 신뢰도 없이는 타당도도 보장될 수 없다.",
    "key_researchers": [
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "DSM-III에 조작적 진단기준을 도입하여 진단 신뢰도를 획기적으로 향상시켰다."
      },
      {
        "name_ko": "제이콥 코헨",
        "name_en": "Jacob Cohen",
        "contribution": "카파 계수(Cohen's kappa)를 개발하여 진단 신뢰도의 정량적 평가를 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "진단적 타당도",
        "name_en": "Diagnostic Validity",
        "id": "ASSESS_VAL_004"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "구조화 면담",
        "name_en": "Structured Interview",
        "id": "ASSESS_STR_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "신뢰도(Reliability) = 일관성(Consistency) = 같은 결과가 반복되는가?",
      "differential": "신뢰도는 측정의 '일관성'이고, 타당도는 측정의 '정확성'이다. 신뢰도는 타당도의 필요조건이지만 충분조건은 아니다.",
      "key_point": "카파 계수(Cohen's kappa)로 측정하며, .70 이상이면 양호한 신뢰도로 간주한다.",
      "common_mistake": "신뢰도가 높으면 자동으로 타당도도 높다고 보는 오류 — 일관되게 틀릴 수도 있다."
    }
  },
  {
    "id": "ASSESS_VAL_004",
    "terminology": "진단적 타당도 (Diagnostic Validity)",
    "terminology_ko": "진단적 타당도",
    "terminology_en": "Diagnostic Validity",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "진단 체계가 실제로 의미 있는 정신장애를 정확하게 구분하고 있는지의 정도로, 내용 타당도, 준거 타당도, 구성 타당도 등으로 평가된다.",
    "definition_en": "The degree to which a diagnostic system accurately identifies and distinguishes meaningful mental disorders, evaluated through content validity, criterion validity, and construct validity.",
    "significance": "진단이 실제 임상적 실체를 반영하는지를 결정하며, 치료 선택과 예후 예측의 정확성에 직결된다.",
    "key_researchers": [
      {
        "name_ko": "엘리 로빈스",
        "name_en": "Eli Robins",
        "contribution": "진단적 타당도를 검증하기 위한 5가지 기준(임상 기술, 실험실 소견, 감별진단, 추적 연구, 가족 연구)을 제안했다."
      },
      {
        "name_ko": "사무엘 구즈",
        "name_en": "Samuel Guze",
        "contribution": "로빈스와 함께 정신의학 진단의 타당도 검증 방법론을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "감별진단",
        "name_en": "Differential Diagnosis",
        "id": "ASSESS_DIF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "타당도(Validity) = 정확성 = 측정하려는 것을 실제로 측정하는가?",
      "differential": "신뢰도는 '같은 결과가 반복'되는지, 타당도는 '맞는 것을 측정'하는지의 문제이다.",
      "key_point": "Robins와 Guze의 5가지 타당도 검증 기준은 정신의학 진단 연구의 금본위(gold standard)이다.",
      "common_mistake": "높은 신뢰도가 곧 높은 타당도를 의미한다고 보는 것 — 신뢰도는 필요조건이지 충분조건이 아니다."
    }
  },
  {
    "id": "ASSESS_INT_005",
    "terminology": "임상 면담 (Clinical Interview)",
    "terminology_ko": "임상 면담",
    "terminology_en": "Clinical Interview",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "임상가가 내담자와 직접 대면하여 현재 증상, 병력, 개인사, 가족력 등을 체계적으로 수집하는 평가 방법으로, 임상 평가의 가장 기본적이고 핵심적인 도구이다.",
    "definition_en": "An assessment method in which a clinician systematically gathers information about current symptoms, history, personal background, and family history through direct interaction with the client, serving as the most fundamental tool in clinical evaluation.",
    "significance": "모든 임상 평가의 출발점으로, 라포(rapport) 형성과 임상적 관찰을 동시에 수행하는 필수 과정이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "내담자 중심 면담 기법을 개발하여 면담에서의 공감적 경청과 비지시적 접근의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조화 면담",
        "name_en": "Structured Interview",
        "id": "ASSESS_STR_006"
      },
      {
        "name_ko": "정신상태검사",
        "name_en": "Mental Status Examination",
        "id": "ASSESS_MSE_008"
      },
      {
        "name_ko": "비구조화 면담",
        "name_en": "Unstructured Interview",
        "id": "ASSESS_UNS_007"
      }
    ],
    "sub_types": [
      {
        "name": "구조화 면담 (Structured Interview)",
        "description": "표준화된 질문과 순서를 따르는 면담 형식"
      },
      {
        "name": "반구조화 면담 (Semi-Structured Interview)",
        "description": "기본 구조를 따르되 유연한 추가 질문이 가능한 형식"
      },
      {
        "name": "비구조화 면담 (Unstructured Interview)",
        "description": "정해진 형식 없이 자유롭게 진행되는 면담"
      }
    ],
    "quiz_hints": {
      "mnemonic": "면담의 핵심: 라포(rapport) + 정보 수집 + 임상 관찰",
      "differential": "구조화 면담은 신뢰도가 높고, 비구조화 면담은 유연성이 높다.",
      "key_point": "면담은 단순한 질문-응답이 아니라 행동 관찰, 정서 평가, 치료 관계 형성을 동시에 수행하는 복합 과정이다.",
      "common_mistake": "면담을 일상 대화와 동일시하는 것 — 임상 면담은 목적 지향적이고 체계적인 전문 활동이다."
    }
  },
  {
    "id": "ASSESS_STR_006",
    "terminology": "구조화 면담 (Structured Interview)",
    "terminology_ko": "구조화 면담",
    "terminology_en": "Structured Interview",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "표준화된 질문 목록, 순서, 채점 기준을 따르는 면담 형식으로, 평가자 간 신뢰도를 극대화하기 위해 개발되었으며, SCID와 MINI가 대표적이다.",
    "definition_en": "An interview format following standardized questions, sequence, and scoring criteria, developed to maximize inter-rater reliability, with the SCID and MINI being representative examples.",
    "significance": "진단의 일관성과 신뢰도를 높이는 핵심 도구로, 연구 장면에서 표준적 진단 절차로 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "마이클 퍼스트",
        "name_en": "Michael First",
        "contribution": "DSM-5에 기반한 구조화 임상 면담(SCID-5)을 개발하여 표준화된 진단 절차를 확립했다."
      },
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "최초의 SCID를 개발하여 구조화 면담의 개념을 정신의학에 정착시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      },
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "구조화 면담 대표 도구: SCID(Structured Clinical Interview for DSM), MINI(Mini International Neuropsychiatric Interview)",
      "differential": "구조화 면담은 질문이 고정되어 있고, 반구조화 면담은 기본 구조 위에 추가 탐색이 가능하다.",
      "key_point": "연구 장면에서 진단의 표준화를 위해 필수적이며, 임상 장면에서도 활용이 확대되고 있다.",
      "common_mistake": "구조화 면담이 항상 비구조화 면담보다 우월하다고 보는 것 — 목적에 따라 적합한 형식이 다르다."
    }
  },
  {
    "id": "ASSESS_UNS_007",
    "terminology": "비구조화 면담 (Unstructured Interview)",
    "terminology_ko": "비구조화 면담",
    "terminology_en": "Unstructured Interview",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "정해진 질문 형식이나 순서 없이 임상가의 판단에 따라 자유롭게 진행되는 면담으로, 유연성이 높지만 평가자 간 신뢰도가 낮을 수 있다.",
    "definition_en": "An interview conducted freely according to the clinician's judgment without predetermined questions or sequence, offering high flexibility but potentially lower inter-rater reliability.",
    "significance": "내담자의 고유한 문제를 깊이 탐색할 수 있어 사례 개념화와 치료 계획에 유용하지만, 연구 장면에서는 제한적이다.",
    "key_researchers": [
      {
        "name_ko": "칼 로저스",
        "name_en": "Carl Rogers",
        "contribution": "비지시적 면담 접근을 발전시켜, 내담자 주도의 자유로운 탐색을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      },
      {
        "name_ko": "구조화 면담",
        "name_en": "Structured Interview",
        "id": "ASSESS_STR_006"
      },
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비구조화 = 자유롭게 흘러감(free-flowing), 유연하지만 일관성 부족",
      "differential": "비구조화 면담은 유연성이 강점이고, 구조화 면담은 신뢰도가 강점이다.",
      "key_point": "임상가의 전문성과 경험에 크게 의존하므로, 숙련된 임상가에게 더 유용하다.",
      "common_mistake": "비구조화 면담이 체계가 없다고 보는 것 — 경험 있는 임상가는 암묵적 구조를 따른다."
    }
  },
  {
    "id": "ASSESS_MSE_008",
    "terminology": "정신상태검사 (Mental Status Examination)",
    "terminology_ko": "정신상태검사",
    "terminology_en": "Mental Status Examination",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "면담 시점에서 내담자의 외모, 행동, 언어, 사고과정, 사고내용, 지각, 인지기능, 정동, 기분, 판단력, 병식 등을 체계적으로 관찰하고 평가하는 검사이다.",
    "definition_en": "A systematic assessment of a client's appearance, behavior, speech, thought process, thought content, perception, cognitive function, affect, mood, judgment, and insight at the time of interview.",
    "significance": "현재 정신 상태의 '스냅샷'을 제공하며, 정신과적 평가의 필수 구성요소로 모든 임상 기록에 포함된다.",
    "key_researchers": [
      {
        "name_ko": "칼 야스퍼스",
        "name_en": "Karl Jaspers",
        "contribution": "정신병리학의 현상학적 기술 방법을 체계화하여 정신상태검사의 이론적 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "감별진단",
        "name_en": "Differential Diagnosis",
        "id": "ASSESS_DIF_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MSE 주요 항목: 외모, 행동, 언어, 사고(과정·내용), 지각, 인지, 정동/기분, 판단력, 병식",
      "differential": "MSE는 현재 시점의 정신상태 관찰이고, 임상 면담은 병력 전체를 포괄하는 정보 수집이다.",
      "key_point": "MSE는 신체검사에서의 이학적 검사(physical examination)에 해당하는 정신과적 평가이다.",
      "common_mistake": "MSE를 심리검사(psychological testing)와 혼동하는 것 — MSE는 관찰에 기반한 검사이고, 심리검사는 표준화된 도구를 사용한다."
    }
  },
  {
    "id": "ASSESS_MMP_009",
    "terminology": "MMPI-2 (미네소타 다면적 인성검사)",
    "terminology_ko": "MMPI-2",
    "terminology_en": "Minnesota Multiphasic Personality Inventory-2",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "567개 문항의 자기보고식 성격검사로, 10개 임상척도와 다수의 타당도척도를 포함하며, 세계에서 가장 널리 사용되는 객관적 성격검사이다.",
    "definition_en": "A self-report personality inventory with 567 items, including 10 clinical scales and multiple validity scales, the most widely used objective personality test in the world.",
    "significance": "경험적으로 구성된 임상척도를 통해 정신병리의 다면적 평가가 가능하며, 방대한 연구 데이터가 축적되어 있다.",
    "key_researchers": [
      {
        "name_ko": "스타크 해서웨이",
        "name_en": "Starke Hathaway",
        "contribution": "1940년대 MMPI를 최초로 개발하여 경험적 준거집단 방법을 심리검사에 적용했다."
      },
      {
        "name_ko": "존 맥킨리",
        "name_en": "J. Charnley McKinley",
        "contribution": "해서웨이와 함께 MMPI의 임상척도를 구성하고 표준화 작업을 수행했다."
      },
      {
        "name_ko": "제임스 부처",
        "name_en": "James Butcher",
        "contribution": "MMPI-2 개정판을 주도하여 규준을 업데이트하고 현대 인구에 맞게 재표준화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "MMPI-2-RF",
        "name_en": "MMPI-2-RF",
        "id": "ASSESS_MRF_010"
      },
      {
        "name_ko": "로샤흐 검사",
        "name_en": "Rorschach Test",
        "id": "ASSESS_ROR_014"
      },
      {
        "name_ko": "진단적 타당도",
        "name_en": "Diagnostic Validity",
        "id": "ASSESS_VAL_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MMPI-2: 567문항, 10개 임상척도(Hs·D·Hy·Pd·Mf·Pa·Pt·Sc·Ma·Si), 타당도척도(L·F·K)",
      "differential": "MMPI-2는 567문항의 전체판이고, MMPI-2-RF는 338문항의 재구성판으로 더 간결하고 이론적으로 정리되었다.",
      "key_point": "경험적 접근(empirical keying)으로 구성되어, 문항 내용이 아닌 준거집단의 반응 패턴에 기반한다.",
      "common_mistake": "개별 척도 점수만으로 진단하는 것 — MMPI-2는 프로파일 패턴(code type)으로 해석해야 한다."
    }
  },
  {
    "id": "ASSESS_MRF_010",
    "terminology": "MMPI-2-RF (MMPI-2 재구성판)",
    "terminology_ko": "MMPI-2-RF",
    "terminology_en": "MMPI-2 Restructured Form",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "MMPI-2의 338개 문항으로 재구성된 검사로, 재구성 임상척도(RC)를 중심으로 보다 이론적이고 심리측정적으로 정교한 구조를 가진다.",
    "definition_en": "A restructured version of the MMPI-2 with 338 items, centered on Restructured Clinical (RC) scales with a more theoretically and psychometrically refined structure.",
    "significance": "MMPI-2의 척도 간 과도한 상관 문제를 해결하고, 보다 명확한 임상적 해석을 가능하게 했다.",
    "key_researchers": [
      {
        "name_ko": "아우케 텔레겐",
        "name_en": "Auke Tellegen",
        "contribution": "재구성 임상척도(RC scales)의 개발을 주도하여 MMPI-2의 구조적 문제를 해결했다."
      },
      {
        "name_ko": "욘 벤포라스",
        "name_en": "Yossef Ben-Porath",
        "contribution": "텔레겐과 함께 MMPI-2-RF를 개발하고 표준화하여 현대적 성격평가 도구로 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "진단적 타당도",
        "name_en": "Diagnostic Validity",
        "id": "ASSESS_VAL_004"
      },
      {
        "name_ko": "임상적 유의성",
        "name_en": "Clinical Significance",
        "id": "ASSESS_CLI_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "RF = Restructured Form, 338문항, RC척도 중심",
      "differential": "MMPI-2는 경험적 접근의 전통적 척도이고, MMPI-2-RF는 이론 기반 재구성 척도이다.",
      "key_point": "RC척도는 기존 임상척도에서 공통 요인(의기소침, demoralization)을 분리하여 척도 간 변별력을 높였다.",
      "common_mistake": "MMPI-2-RF를 단순히 MMPI-2의 단축형으로 보는 것 — 구조적으로 완전히 재설계된 검사이다."
    }
  },
  {
    "id": "ASSESS_DIF_011",
    "terminology": "감별진단 (Differential Diagnosis)",
    "terminology_ko": "감별진단",
    "terminology_en": "Differential Diagnosis",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "유사한 증상을 보이는 여러 정신장애 중에서 내담자의 증상에 가장 적합한 진단을 확인하기 위해 체계적으로 가능한 진단을 비교하고 배제하는 과정이다.",
    "definition_en": "A systematic process of comparing and eliminating possible diagnoses to identify the most appropriate diagnosis for a client's symptoms among several mental disorders with similar presentations.",
    "significance": "정확한 진단과 적절한 치료 선택의 핵심 과정으로, 임상적 추론의 가장 중요한 기술 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "정신장애의 체계적 분류를 통해 감별진단의 개념적 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공병",
        "name_en": "Comorbidity",
        "id": "ASSESS_COM_012"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "정신상태검사",
        "name_en": "Mental Status Examination",
        "id": "ASSESS_MSE_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감별진단 = 여러 가능한 진단 중 '소거법'으로 좁혀나가기",
      "differential": "감별진단은 여러 진단을 비교하여 하나를 확정하는 것이고, 공병은 여러 진단이 동시에 존재하는 것이다.",
      "key_point": "공황장애 vs. 갑상선기능항진증, 우울증 vs. 갑상선기능저하증 등 신체질환을 먼저 배제하는 것이 감별진단의 첫 단계이다.",
      "common_mistake": "가장 먼저 떠오르는 진단으로 성급하게 결정하는 확증편향(confirmation bias)의 오류."
    }
  },
  {
    "id": "ASSESS_COM_012",
    "terminology": "공병 (Comorbidity)",
    "terminology_ko": "공병",
    "terminology_en": "Comorbidity",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "한 개인에게 두 가지 이상의 정신장애가 동시에 존재하는 상태로, 정신장애에서 매우 흔하며 치료 계획과 예후에 중요한 영향을 미친다.",
    "definition_en": "The co-occurrence of two or more mental disorders in the same individual, very common in mental health and significantly affecting treatment planning and prognosis.",
    "significance": "정신장애 간의 관계를 이해하고 통합적 치료 계획을 수립하는 데 핵심적이며, 현행 진단 체계의 한계를 드러내기도 한다.",
    "key_researchers": [
      {
        "name_ko": "알빈 파인스타인",
        "name_en": "Alvan Feinstein",
        "contribution": "1970년 공존이환(comorbidity)의 개념을 최초로 제안하여 다중 질환의 동시 존재에 대한 체계적 연구를 촉발했다."
      },
      {
        "name_ko": "로널드 케슬러",
        "name_en": "Ronald Kessler",
        "contribution": "NCS 연구에서 정신장애의 높은 공병률을 발견하여 공병 연구의 중요성을 부각시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감별진단",
        "name_en": "Differential Diagnosis",
        "id": "ASSESS_DIF_011"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공병(Comorbidity) = Co(함께) + Morbidity(질병) = 질병이 '함께' 있음",
      "differential": "공병은 두 가지 장애가 '동시 존재'하는 것이고, 감별진단은 유사 증상의 장애 중 '하나를 결정'하는 것이다.",
      "key_point": "우울장애와 불안장애의 공병률이 약 50~60%로 매우 높으며, 이는 두 장애의 공통 기저 기제를 시사한다.",
      "common_mistake": "공병을 단순히 두 진단의 합으로 보는 것 — 공병은 독립적 치료가 아닌 통합적 접근이 필요하다."
    }
  },
  {
    "id": "ASSESS_BDI_013",
    "terminology": "벡 우울 척도 (Beck Depression Inventory)",
    "terminology_ko": "벡 우울 척도",
    "terminology_en": "Beck Depression Inventory",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "아론 벡이 개발한 21문항의 자기보고식 우울증 선별 도구로, 우울 증상의 심각도를 인지, 정서, 신체 영역에서 측정하며, BDI-II가 현재 표준판이다.",
    "definition_en": "A 21-item self-report screening tool for depression developed by Aaron Beck, measuring severity of depressive symptoms across cognitive, affective, and somatic domains, with the BDI-II being the current standard version.",
    "significance": "가장 널리 사용되는 우울증 자기보고 척도로, 임상과 연구에서 우울 증상의 선별과 경과 추적에 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "1961년 BDI를 최초 개발하고, 1996년 DSM-IV에 맞춰 BDI-II로 개정했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벡 불안 척도",
        "name_en": "Beck Anxiety Inventory",
        "id": "ASSESS_BAI_014"
      },
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BDI-II: 21문항, 0~63점, 0~13정상, 14~19경도, 20~28중등도, 29~63중증",
      "differential": "BDI는 우울 증상 선별이고, MMPI-2의 D척도(2번 척도)는 우울 성격 특성까지 평가한다.",
      "key_point": "자기보고식이므로 진단 도구가 아닌 선별(screening) 및 심각도 측정 도구이다.",
      "common_mistake": "BDI 점수만으로 우울증을 진단할 수 있다고 보는 것 — 진단은 임상 면담을 통해 이루어져야 한다."
    }
  },
  {
    "id": "ASSESS_BAI_014",
    "terminology": "벡 불안 척도 (Beck Anxiety Inventory)",
    "terminology_ko": "벡 불안 척도",
    "terminology_en": "Beck Anxiety Inventory",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "아론 벡이 개발한 21문항의 자기보고식 불안 측정 도구로, 특히 불안의 신체적 증상에 초점을 맞추어 우울과 불안을 변별하는 데 유용하다.",
    "definition_en": "A 21-item self-report anxiety measure developed by Aaron Beck, particularly focused on somatic symptoms of anxiety, useful for discriminating between anxiety and depression.",
    "significance": "불안 증상의 심각도를 간편하게 측정할 수 있어 임상과 연구에서 광범위하게 사용되는 표준 도구이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "1988년 BAI를 개발하여 우울과 불안을 변별할 수 있는 불안 특이적 측정 도구를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벡 우울 척도",
        "name_en": "Beck Depression Inventory",
        "id": "ASSESS_BDI_013"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "GAD-7",
        "name_en": "GAD-7",
        "id": "ANXIETY_G7_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BAI: 21문항, 0~63점, 신체적 불안 증상에 초점",
      "differential": "BAI는 불안의 신체적 증상에 초점을 맞추고, GAD-7은 범불안장애의 인지적·심리적 증상에 초점을 맞춘다.",
      "key_point": "BAI는 우울과 불안이 높은 상관을 보이는 문제를 해결하기 위해 신체적 불안에 초점을 맞추어 개발되었다.",
      "common_mistake": "BAI가 모든 유형의 불안을 균등하게 측정한다고 보는 것 — 신체적 증상 위주로 인지적 불안은 충분히 반영하지 못한다."
    }
  },
  {
    "id": "ASSESS_ROR_015",
    "terminology": "로샤흐 잉크반점 검사 (Rorschach Inkblot Test)",
    "terminology_ko": "로샤흐 잉크반점 검사",
    "terminology_en": "Rorschach Inkblot Test",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "10장의 대칭적 잉크반점 카드에 대한 자유 반응을 분석하여 성격 구조, 사고과정, 정서 조절, 대인관계 특성 등을 평가하는 투사적 검사이다.",
    "definition_en": "A projective test analyzing free responses to 10 symmetrical inkblot cards to assess personality structure, thought processes, emotional regulation, and interpersonal characteristics.",
    "significance": "가장 오래되고 널리 연구된 투사적 검사로, Exner의 종합체계를 통해 과학적 채점과 해석이 가능해졌다.",
    "key_researchers": [
      {
        "name_ko": "헤르만 로샤흐",
        "name_en": "Hermann Rorschach",
        "contribution": "1921년 잉크반점 검사를 개발하여 지각 과정을 통한 성격 평가의 새로운 방법론을 제시했다."
      },
      {
        "name_ko": "존 엑스너",
        "name_en": "John Exner",
        "contribution": "종합체계(Comprehensive System)를 개발하여 로샤흐 검사의 채점과 해석을 표준화하고 과학적 기반을 강화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "TAT",
        "name_en": "Thematic Apperception Test",
        "id": "ASSESS_TAT_016"
      },
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "정신분석 모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "로샤흐 = 잉크얼룩에서 '무엇이 보이는가?' → 투사적 검사의 대명사",
      "differential": "로샤흐는 비구조화된 자극(잉크반점)에 대한 반응을 분석하고, MMPI는 구조화된 질문에 대한 자기보고를 분석한다.",
      "key_point": "Exner의 종합체계(CS)와 후속 R-PAS(Rorschach Performance Assessment System)를 통해 객관적 채점이 가능하다.",
      "common_mistake": "로샤흐 반응의 '내용'만으로 해석하는 것 — 실제로는 반응의 위치, 결정인, 형태질, 내용 등을 종합적으로 채점한다."
    }
  },
  {
    "id": "ASSESS_TAT_016",
    "terminology": "주제통각검사 (Thematic Apperception Test, TAT)",
    "terminology_ko": "주제통각검사",
    "terminology_en": "Thematic Apperception Test",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "모호한 사회적 장면이 그려진 카드를 보여주고 이야기를 만들어 내도록 하는 투사적 검사로, 내재된 욕구, 갈등, 대인관계 패턴을 탐색한다.",
    "definition_en": "A projective test presenting cards with ambiguous social scenes and asking the examinee to create stories, used to explore underlying needs, conflicts, and interpersonal patterns.",
    "significance": "내담자의 주관적 세계와 대인관계 역동을 이해하는 데 유용한 투사적 검사의 대표적 도구이다.",
    "key_researchers": [
      {
        "name_ko": "헨리 머레이",
        "name_en": "Henry Murray",
        "contribution": "1935년 TAT를 개발하여 욕구-압력(need-press) 이론에 기반한 성격 평가 도구를 제시했다."
      },
      {
        "name_ko": "크리스티나 모건",
        "name_en": "Christiana Morgan",
        "contribution": "머레이와 함께 TAT의 자극 카드를 설계하고 검사 절차를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "로샤흐 검사",
        "name_en": "Rorschach Test",
        "id": "ASSESS_ROR_015"
      },
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "정신분석 모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "TAT = 그림 보고 '이야기 만들기' → 투사된 욕구와 갈등 분석",
      "differential": "TAT는 구조화된 사회적 장면을 사용하고, 로샤흐는 비구조화된 잉크반점을 사용한다.",
      "key_point": "Murray의 욕구-압력(need-press) 이론에 기반하여 개인의 주요 욕구와 환경적 압력을 파악한다.",
      "common_mistake": "TAT의 '투사' 해석을 과도하게 적용하는 것 — 이야기 내용이 직접적으로 내담자의 실제 경험을 반영하지 않을 수 있다."
    }
  },
  {
    "id": "ASSESS_WAI_017",
    "terminology": "웩슬러 성인지능검사 (Wechsler Adult Intelligence Scale, WAIS)",
    "terminology_ko": "웩슬러 성인지능검사",
    "terminology_en": "Wechsler Adult Intelligence Scale",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "개인의 지적 기능을 종합적으로 평가하는 개별 시행 지능검사로, 전체 IQ, 언어이해, 지각추론, 작업기억, 처리속도 지표를 산출하며, WAIS-IV가 현재 표준판이다.",
    "definition_en": "An individually administered intelligence test providing comprehensive assessment of intellectual functioning, yielding Full-Scale IQ, Verbal Comprehension, Perceptual Reasoning, Working Memory, and Processing Speed indices, with WAIS-IV as the current standard edition.",
    "significance": "임상 장면에서 지적장애 진단, 신경심리 평가, 인지기능 저하 평가에 필수적인 표준 지능검사이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 웩슬러",
        "name_en": "David Wechsler",
        "contribution": "1939년 Wechsler-Bellevue 지능검사를 개발하고, 이를 WAIS로 발전시켜 개별 시행 지능검사의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경심리검사",
        "name_en": "Neuropsychological Testing",
        "id": "ASSESS_NPS_020"
      },
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "WAIS-IV 4개 지표: VCI(언어이해), PRI(지각추론), WMI(작업기억), PSI(처리속도)",
      "differential": "WAIS는 성인용이고, WISC는 아동용(6~16세), WPPSI는 유아용(2.5~7세)이다.",
      "key_point": "전체 IQ뿐만 아니라 지표 간 차이(scatter)가 임상적으로 중요한 정보를 제공한다.",
      "common_mistake": "전체 IQ 점수만으로 지적 능력을 판단하는 것 — 지표별 프로파일 분석이 임상적으로 더 중요하다."
    }
  },
  {
    "id": "ASSESS_SCL_018",
    "terminology": "간이정신진단검사 (SCL-90-R)",
    "terminology_ko": "간이정신진단검사",
    "terminology_en": "Symptom Checklist-90-Revised",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "90개 문항으로 9개 증상 차원(신체화, 강박, 대인민감성, 우울, 불안, 적대감, 공포불안, 편집증, 정신병적 경향)을 측정하는 자기보고식 다차원 정신건강 선별 도구이다.",
    "definition_en": "A 90-item self-report multidimensional mental health screening tool measuring nine symptom dimensions: somatization, obsessive-compulsive, interpersonal sensitivity, depression, anxiety, hostility, phobic anxiety, paranoid ideation, and psychoticism.",
    "significance": "광범위한 정신병리를 빠르게 선별할 수 있어 임상과 연구에서 초기 평가 도구로 광범위하게 사용된다.",
    "key_researchers": [
      {
        "name_ko": "레너드 데로가티스",
        "name_en": "Leonard Derogatis",
        "contribution": "SCL-90-R을 개발하여 다차원적 정신건강 선별의 표준 도구를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "벡 우울 척도",
        "name_en": "Beck Depression Inventory",
        "id": "ASSESS_BDI_013"
      },
      {
        "name_ko": "벡 불안 척도",
        "name_en": "Beck Anxiety Inventory",
        "id": "ASSESS_BAI_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SCL-90-R: 90문항, 9개 증상차원, GSI(전반적 심각도 지표) 핵심",
      "differential": "SCL-90-R은 다차원적 선별이고, BDI는 우울만, BAI는 불안만 측정하는 단일차원 도구이다.",
      "key_point": "GSI(Global Severity Index), PST(Positive Symptom Total), PSDI(Positive Symptom Distress Index)의 3가지 전반적 지표가 특히 유용하다.",
      "common_mistake": "SCL-90-R을 진단 도구로 사용하는 것 — 선별(screening)과 증상 심각도 측정이 목적이다."
    }
  },
  {
    "id": "ASSESS_CLI_019",
    "terminology": "임상적 유의성 (Clinical Significance)",
    "terminology_ko": "임상적 유의성",
    "terminology_en": "Clinical Significance",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "증상이 개인의 사회적, 직업적, 또는 다른 중요한 기능 영역에서 임상적으로 의미 있는 고통이나 손상을 초래하는 정도로, DSM-5 진단의 필수 기준이다.",
    "definition_en": "The extent to which symptoms cause clinically meaningful distress or impairment in social, occupational, or other important areas of functioning, a required criterion for DSM-5 diagnoses.",
    "significance": "정상적 고통과 정신장애를 구분하는 문턱 역할을 하며, 과잉진단을 방지하는 핵심 기준이다.",
    "key_researchers": [
      {
        "name_ko": "제롬 웨이크필드",
        "name_en": "Jerome Wakefield",
        "contribution": "유해한 기능장애 분석을 통해 임상적 유의성의 개념적 기초를 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "기능 손상",
        "name_en": "Functional Impairment",
        "id": "FOUND_FUN_004"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "정상과 이상의 연속선",
        "name_en": "Normal-Abnormal Continuum",
        "id": "ASSESS_CON_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "임상적 유의성 = '증상이 삶에 실질적 영향을 미치는가?'",
      "differential": "통계적 유의성은 연구 결과의 확률적 의미이고, 임상적 유의성은 증상의 실제 영향력이다.",
      "key_point": "DSM-5 진단기준의 마지막에 거의 항상 '임상적으로 유의한 고통이나 기능 손상'을 요구한다.",
      "common_mistake": "증상이 존재한다는 것만으로 진단을 내리는 것 — 임상적 유의성(고통/기능손상)이 충족되어야 한다."
    }
  },
  {
    "id": "ASSESS_NPS_020",
    "terminology": "신경심리검사 (Neuropsychological Testing)",
    "terminology_ko": "신경심리검사",
    "terminology_en": "Neuropsychological Testing",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "뇌 기능과 관련된 인지 능력(주의, 기억, 실행기능, 언어, 시공간 능력 등)을 체계적으로 평가하는 검사 배터리로, 뇌손상이나 신경인지장애의 평가에 필수적이다.",
    "definition_en": "A battery of tests systematically assessing cognitive abilities related to brain function (attention, memory, executive function, language, visuospatial abilities), essential for evaluating brain damage and neurocognitive disorders.",
    "significance": "뇌-행동 관계를 정량적으로 평가하여 신경학적 진단, 치료 계획, 재활 목표 설정에 핵심적 정보를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "알렉산더 루리아",
        "name_en": "Alexander Luria",
        "contribution": "뇌 기능의 체계적 분석 모형을 제안하여 신경심리평가의 이론적 기반을 마련했다."
      },
      {
        "name_ko": "랠프 레이탄",
        "name_en": "Ralph Reitan",
        "contribution": "홀스테드-레이탄 신경심리검사 배터리(HRNB)를 발전시켜 뇌손상의 정량적 평가를 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "WAIS",
        "name_en": "WAIS",
        "id": "ASSESS_WAI_017"
      },
      {
        "name_ko": "신경영상",
        "name_en": "Neuroimaging",
        "id": "ASSESS_NIM_022"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_004"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "신경심리검사 = 뇌의 '소프트웨어(인지기능)'를 검사, 신경영상 = 뇌의 '하드웨어(구조/활동)'를 검사",
      "differential": "신경심리검사는 행동적 수행을 통해 뇌기능을 추론하고, 신경영상은 뇌의 구조/기능을 직접 관찰한다.",
      "key_point": "개별 검사 점수보다 검사 간 패턴(프로파일)이 진단적으로 더 중요하다.",
      "common_mistake": "신경심리검사가 뇌의 특정 부위를 정밀하게 '위치 측정'할 수 있다고 보는 것 — 기능적 영역을 평가하는 것이다."
    }
  },
  {
    "id": "ASSESS_CON_021",
    "terminology": "정상과 이상의 연속선 (Normal-Abnormal Continuum)",
    "terminology_ko": "정상과 이상의 연속선",
    "terminology_en": "Normal-Abnormal Continuum",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "정상과 이상이 질적으로 구분되는 별개의 범주가 아니라, 양적으로 연속되는 스펙트럼 위에 존재한다는 관점으로, 차원적(dimensional) 접근의 기반이 된다.",
    "definition_en": "The perspective that normality and abnormality are not qualitatively distinct categories but exist on a quantitative spectrum, forming the basis for dimensional approaches to classification.",
    "significance": "범주적 진단의 한계를 보완하며, DSM-5에서 차원적 평가 요소가 도입되는 이론적 근거가 되었다.",
    "key_researchers": [
      {
        "name_ko": "토머스 위디거",
        "name_en": "Thomas Widiger",
        "contribution": "성격장애의 차원적 분류를 주장하고, 범주적 접근의 한계를 체계적으로 비판했다."
      },
      {
        "name_ko": "로버트 크루거",
        "name_en": "Robert Krueger",
        "contribution": "정신병리의 위계적 분류 모형(HiTOP)을 제안하여 차원적 분류 체계의 발전에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "임상적 유의성",
        "name_en": "Clinical Significance",
        "id": "ASSESS_CLI_019"
      },
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "연속선 = 정상과 이상 사이에 명확한 '경계선'이 없다는 관점",
      "differential": "범주적(categorical) 접근은 '있다/없다'로 구분하고, 차원적(dimensional) 접근은 '정도'로 측정한다.",
      "key_point": "HiTOP(Hierarchical Taxonomy of Psychopathology)은 정신병리를 차원적으로 재분류하려는 대표적 시도이다.",
      "common_mistake": "모든 정신장애가 연속선상에 있다고 단정하는 것 — 일부 장애(예: 자폐스펙트럼)는 범주적 요소도 존재한다."
    }
  },
  {
    "id": "ASSESS_NIM_022",
    "terminology": "신경영상 (Neuroimaging)",
    "terminology_ko": "신경영상",
    "terminology_en": "Neuroimaging",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "뇌의 구조나 기능을 시각화하는 기술로, CT, MRI는 구조적 영상을, fMRI와 PET는 기능적 영상을 제공하여 정신장애의 신경생물학적 기반 연구에 활용된다.",
    "definition_en": "Technologies for visualizing brain structure or function, with CT and MRI providing structural images and fMRI and PET providing functional images, used in studying the neurobiological basis of mental disorders.",
    "significance": "정신장애의 뇌 기반 연구를 혁신적으로 발전시켰으며, 조현병, 우울증, 불안장애 등의 신경학적 이해에 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "마커스 레이클",
        "name_en": "Marcus Raichle",
        "contribution": "fMRI의 BOLD 신호를 활용한 뇌 기능 영상법의 기초를 확립하고 기본 모드 네트워크를 발견했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경심리검사",
        "name_en": "Neuropsychological Testing",
        "id": "ASSESS_NPS_020"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_011"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      }
    ],
    "sub_types": [
      {
        "name": "CT (Computed Tomography)",
        "description": "X선을 이용한 뇌 구조 단층 촬영"
      },
      {
        "name": "MRI (Magnetic Resonance Imaging)",
        "description": "자기장을 이용한 고해상도 뇌 구조 영상"
      },
      {
        "name": "fMRI (Functional MRI)",
        "description": "혈류 변화(BOLD 신호)를 통해 뇌 활성화를 실시간 측정"
      },
      {
        "name": "PET (Positron Emission Tomography)",
        "description": "방사성 추적자를 이용한 뇌 대사 및 신경전달물질 활동 영상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "구조: CT·MRI(뇌의 '사진') / 기능: fMRI·PET(뇌의 '동영상')",
      "differential": "구조적 영상(CT/MRI)은 해부학적 이상을, 기능적 영상(fMRI/PET)은 활동 패턴의 이상을 확인한다.",
      "key_point": "임상 진단보다는 주로 연구 도구로 사용되며, 개인 수준의 진단에는 아직 한계가 있다.",
      "common_mistake": "fMRI 영상이 실시간 뇌 활동을 직접 보여준다고 생각하는 것 — 실제로는 혈류 변화의 간접 측정이다."
    }
  },
  {
    "id": "ASSESS_BEH_023",
    "terminology": "행동 평가 (Behavioral Assessment)",
    "terminology_ko": "행동 평가",
    "terminology_en": "Behavioral Assessment",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "문제 행동의 빈도, 기간, 강도, 선행조건, 결과를 체계적으로 관찰하고 기록하는 평가 방법으로, 기능분석(functional analysis)을 통해 행동의 유지 요인을 파악한다.",
    "definition_en": "An assessment method that systematically observes and records the frequency, duration, intensity, antecedents, and consequences of problem behaviors, using functional analysis to identify maintaining factors.",
    "significance": "행동치료의 계획 수립과 효과 평가에 필수적이며, 행동의 환경적 맥락을 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "버러스 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "행동의 기능적 분석(ABC 분석)의 이론적 기초를 제공하여 행동 평가의 패러다임을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동주의 모형",
        "name_en": "Behavioral Model",
        "id": "FOUND_BEH_013"
      },
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ABC 분석: Antecedent(선행사건) → Behavior(행동) → Consequence(결과)",
      "differential": "행동 평가는 관찰 가능한 행동에 초점을 맞추고, 심리검사는 내적 특성(성격, 지능)을 측정한다.",
      "key_point": "자기감시(self-monitoring), 직접 관찰, 행동 일지(diary) 등 다양한 방법이 활용된다.",
      "common_mistake": "행동 평가가 단순히 '행동을 세는 것'이라고 보는 것 — 선행사건과 결과의 기능적 관계 분석이 핵심이다."
    }
  },
  {
    "id": "ASSESS_DSH_024",
    "terminology": "DSM 분류 체계의 역사 (History of DSM Classification)",
    "terminology_ko": "DSM 분류 체계의 역사",
    "terminology_en": "History of DSM Classification",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "1952년 DSM-I에서 시작하여 DSM-5(2013)까지 발전한 정신장애 분류 체계의 변천사로, 특히 DSM-III(1980)의 조작적 진단기준 도입이 획기적 전환점이었다.",
    "definition_en": "The evolution of mental disorder classification from DSM-I (1952) to DSM-5 (2013), with the introduction of operational diagnostic criteria in DSM-III (1980) marking a revolutionary turning point.",
    "significance": "진단 체계의 발전 과정을 이해하면 현재 체계의 강점과 한계, 향후 발전 방향을 파악할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "DSM-III의 주편집자로서 조작적 진단기준과 다축 체계를 도입하여 정신의학 진단의 패러다임을 바꾸었다."
      },
      {
        "name_ko": "앨런 프랜시스",
        "name_en": "Allen Frances",
        "contribution": "DSM-IV의 주편집자로서 실증적 근거에 기반한 진단기준 개정을 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "ICD-11",
        "name_en": "ICD-11",
        "id": "ASSESS_ICD_002"
      },
      {
        "name_ko": "진단적 신뢰도",
        "name_en": "Diagnostic Reliability",
        "id": "ASSESS_REL_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DSM 주요 전환점: DSM-I(1952, 정신역동) → DSM-III(1980, 조작적 기준) → DSM-5(2013, 다축 폐지)",
      "differential": "DSM-III 이전은 기술적·정신역동적 접근이었고, DSM-III 이후는 조작적·증거 기반 접근으로 전환되었다.",
      "key_point": "DSM-III의 조작적 진단기준 도입이 '구약-신약' 수준의 패러다임 전환이었다.",
      "common_mistake": "DSM이 처음부터 과학적이었다고 보는 것 — DSM-I, II는 정신분석적 영향이 강했고, III에서야 경험적 접근이 시작되었다."
    }
  },
  {
    "id": "ASSESS_MUL_025",
    "terminology": "다축 체계 (Multiaxial System)",
    "terminology_ko": "다축 체계",
    "terminology_en": "Multiaxial System",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "DSM-III에서 DSM-IV-TR까지 사용된 5축 진단 체계로, 임상장애(축I), 성격장애·지적장애(축II), 일반의학적 상태(축III), 심리사회적 문제(축IV), 전반적 기능(축V)을 포함한다.",
    "definition_en": "A five-axis diagnostic system used from DSM-III to DSM-IV-TR, including clinical disorders (Axis I), personality/intellectual disorders (Axis II), general medical conditions (Axis III), psychosocial problems (Axis IV), and global functioning (Axis V).",
    "significance": "환자를 다차원적으로 이해하려는 시도였으나, DSM-5에서 폐지되고 단일축 체계로 전환되었다.",
    "key_researchers": [
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "DSM-III에 다축 체계를 도입하여 정신장애의 다차원적 평가 프레임워크를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "DSM 분류 체계의 역사",
        "name_en": "History of DSM Classification",
        "id": "ASSESS_DSH_024"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      }
    ],
    "sub_types": [
      {
        "name": "축I: 임상장애 (Clinical Disorders)",
        "description": "주요 정신장애 (우울, 불안, 조현병 등)"
      },
      {
        "name": "축II: 성격장애·지적장애",
        "description": "장기적이고 안정적인 패턴의 장애"
      },
      {
        "name": "축III: 일반의학적 상태",
        "description": "정신장애와 관련된 신체질환"
      },
      {
        "name": "축IV: 심리사회적 환경적 문제",
        "description": "스트레스 요인, 사회적 지지 등"
      },
      {
        "name": "축V: 전반적 기능 평가(GAF)",
        "description": "1~100점으로 전반적 기능 수준 평정"
      }
    ],
    "quiz_hints": {
      "mnemonic": "다축 5개: I(임상)·II(성격/지적)·III(의학)·IV(심리사회)·V(기능=GAF)",
      "differential": "다축 체계는 DSM-III~IV-TR에서 사용되었고, DSM-5에서는 단일축으로 통합되었다.",
      "key_point": "DSM-5에서 다축 체계가 폐지된 이유는 축 간 경계의 인위성과 실제 임상에서의 활용도 저하이다.",
      "common_mistake": "DSM-5에서도 다축 체계를 사용한다고 보는 것 — DSM-5에서는 폐지되었다."
    }
  },
  {
    "id": "ASSESS_LAB_026",
    "terminology": "낙인 (Stigma)",
    "terminology_ko": "낙인",
    "terminology_en": "Stigma",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "정신장애 진단을 받은 개인에게 부여되는 부정적 사회적 표지(label)와 이로 인한 차별, 편견, 사회적 배제로, 진단의 의도치 않은 부정적 결과이다.",
    "definition_en": "Negative social labels, discrimination, prejudice, and social exclusion directed at individuals diagnosed with mental disorders, an unintended negative consequence of diagnosis.",
    "significance": "진단 체계의 중요한 부작용으로, 도움 추구 행동을 억제하고 회복을 방해하는 사회적 장벽이 된다.",
    "key_researchers": [
      {
        "name_ko": "어빙 고프먼",
        "name_en": "Erving Goffman",
        "contribution": "1963년 『스티그마(Stigma)』를 출판하여 사회적 낙인의 개념과 역동을 체계적으로 분석했다."
      },
      {
        "name_ko": "데이비드 로젠한",
        "name_en": "David Rosenhan",
        "contribution": "1973년 '정신병원에서 정상인 되기' 연구로 진단적 낙인의 지속적 효과를 실증적으로 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회적 일탈",
        "name_en": "Social Deviance",
        "id": "FOUND_SOC_005"
      },
      {
        "name_ko": "사회문화적 모형",
        "name_en": "Sociocultural Model",
        "id": "FOUND_SCM_016"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "낙인 = 진단 '꼬리표'가 사람 전체를 규정하는 것",
      "differential": "공적 낙인(public stigma)은 사회가 부여하는 편견이고, 자기 낙인(self-stigma)은 환자 자신이 내면화한 부정적 평가이다.",
      "key_point": "로젠한 연구에서 가짜 환자가 퇴원 후에도 '관해 중 조현병'으로 기록된 것은 진단 낙인의 지속성을 보여준다.",
      "common_mistake": "낙인이 진단 자체만의 문제라고 보는 것 — 미디어, 문화적 태도, 법적 차별 등 다층적 요인이 관여한다."
    }
  },
  {
    "id": "ASSESS_SSI_027",
    "terminology": "반구조화 면담 (Semi-Structured Interview)",
    "terminology_ko": "반구조화 면담",
    "terminology_en": "Semi-Structured Interview",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "기본적인 질문 구조와 핵심 주제가 정해져 있으나, 임상가가 내담자의 반응에 따라 추가 탐색 질문을 유연하게 할 수 있는 면담 형식이다.",
    "definition_en": "An interview format with a basic question structure and core topics predetermined, but allowing the clinician to flexibly ask additional probing questions based on the client's responses.",
    "significance": "구조화 면담의 신뢰도와 비구조화 면담의 유연성을 절충한 형태로, 임상 장면에서 가장 많이 사용되는 면담 형식이다.",
    "key_researchers": [
      {
        "name_ko": "마이클 퍼스트",
        "name_en": "Michael First",
        "contribution": "SCID의 반구조화 형식을 발전시켜 임상 실무에 적합한 진단 면담 도구를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구조화 면담",
        "name_en": "Structured Interview",
        "id": "ASSESS_STR_006"
      },
      {
        "name_ko": "비구조화 면담",
        "name_en": "Unstructured Interview",
        "id": "ASSESS_UNS_007"
      },
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반구조화 = 반(半, semi)은 절반, 구조+유연의 중간",
      "differential": "반구조화 면담은 구조화와 비구조화의 장점을 결합하여 신뢰도와 유연성을 모두 확보한다.",
      "key_point": "SCID(Structured Clinical Interview for DSM)가 실제로는 반구조화 형식으로, 임상적 판단의 여지를 남겨둔다.",
      "common_mistake": "반구조화 면담을 구조화 면담과 동일시하는 것 — 임상가의 추가 탐색이 가능하다는 점에서 다르다."
    }
  },
  {
    "id": "ASSESS_FMR_028",
    "terminology": "기능적 자기공명영상 (fMRI)",
    "terminology_ko": "기능적 자기공명영상",
    "terminology_en": "Functional Magnetic Resonance Imaging",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "뇌의 신경활동에 따른 혈류 변화(BOLD 신호)를 측정하여 특정 인지 과제나 정서 처리 시 활성화되는 뇌 영역을 시각화하는 비침습적 신경영상 기법이다.",
    "definition_en": "A non-invasive neuroimaging technique that measures blood flow changes (BOLD signal) associated with neural activity, visualizing brain regions activated during specific cognitive tasks or emotional processing.",
    "significance": "이상심리학 연구에서 정신장애와 관련된 뇌 기능의 변화를 탐색하는 가장 널리 사용되는 기능적 영상 기법이다.",
    "key_researchers": [
      {
        "name_ko": "세이지 오가와",
        "name_en": "Seiji Ogawa",
        "contribution": "1990년 BOLD(Blood-Oxygen-Level-Dependent) 신호를 발견하여 fMRI의 원리를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경영상",
        "name_en": "Neuroimaging",
        "id": "ASSESS_NIM_022"
      },
      {
        "name_ko": "PET",
        "name_en": "PET",
        "id": "ASSESS_PET_029"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "fMRI의 f = functional(기능적), BOLD = Blood-Oxygen-Level-Dependent",
      "differential": "fMRI는 혈류 변화로 뇌 활동을 간접 측정하고, PET는 방사성 추적자로 대사 활동을 측정한다. fMRI는 방사선 노출이 없다.",
      "key_point": "BOLD 신호는 신경활동의 직접 측정이 아니라, 혈류 변화를 통한 간접 측정이다.",
      "common_mistake": "fMRI 영상의 색깔 있는 부분이 '활성화된 뇌'를 직접 보여준다고 생각하는 것 — 통계적 차이를 시각화한 것이다."
    }
  },
  {
    "id": "ASSESS_PET_029",
    "terminology": "양전자방출단층촬영 (PET)",
    "terminology_ko": "양전자방출단층촬영",
    "terminology_en": "Positron Emission Tomography",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "방사성 동위원소가 표지된 추적자를 주입하여 뇌의 대사 활동, 혈류, 신경전달물질 수용체 분포 등을 영상화하는 기능적 신경영상 기법이다.",
    "definition_en": "A functional neuroimaging technique that images brain metabolic activity, blood flow, and neurotransmitter receptor distribution by injecting radiolabeled tracers.",
    "significance": "신경전달물질 수용체의 분포와 밀도를 직접 측정할 수 있어, 약물 작용 기전 연구에 특히 유용하다.",
    "key_researchers": [
      {
        "name_ko": "마이클 터펜코프",
        "name_en": "Michael Ter-Pogossian",
        "contribution": "1975년 최초의 PET 스캐너를 개발하여 뇌 대사 활동의 비침습적 영상화를 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경영상",
        "name_en": "Neuroimaging",
        "id": "ASSESS_NIM_022"
      },
      {
        "name_ko": "fMRI",
        "name_en": "fMRI",
        "id": "ASSESS_FMR_028"
      },
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "FOUND_NTR_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PET = 방사성 추적자 주입 → 양전자 방출 → 뇌 대사 영상화",
      "differential": "PET는 방사성 물질을 사용하므로 침습적이고, fMRI는 자기장만 사용하여 비침습적이다.",
      "key_point": "도파민 수용체 밀도 측정을 통해 조현병의 도파민 가설을 검증하는 데 핵심적으로 활용되었다.",
      "common_mistake": "PET와 fMRI가 동일한 정보를 제공한다고 보는 것 — PET는 대사·수용체 영상에, fMRI는 혈류 기반 활동 영상에 강점이 있다."
    }
  },
  {
    "id": "ASSESS_CTR_030",
    "terminology": "CT 촬영 (Computed Tomography)",
    "terminology_ko": "CT 촬영",
    "terminology_en": "Computed Tomography",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "X선을 여러 각도에서 투과시켜 컴퓨터로 뇌의 단층 구조 영상을 재구성하는 기법으로, 뇌종양, 뇌출혈 등 구조적 이상을 빠르게 확인할 수 있다.",
    "definition_en": "A technique reconstructing cross-sectional brain images by computer processing X-rays from multiple angles, allowing rapid identification of structural abnormalities such as brain tumors and hemorrhages.",
    "significance": "최초의 뇌 영상 기술로, 정신장애의 구조적 뇌 이상을 비침습적으로 탐색하는 데 선구적 역할을 했다.",
    "key_researchers": [
      {
        "name_ko": "고드프리 하운스필드",
        "name_en": "Godfrey Hounsfield",
        "contribution": "1971년 CT 스캐너를 발명하여 뇌의 비침습적 구조 영상화를 최초로 가능하게 했다(1979년 노벨상 수상)."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경영상",
        "name_en": "Neuroimaging",
        "id": "ASSESS_NIM_022"
      },
      {
        "name_ko": "fMRI",
        "name_en": "fMRI",
        "id": "ASSESS_FMR_028"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CT = X선 + 컴퓨터 = 뇌 구조의 '빠른 사진'",
      "differential": "CT는 빠르고 비용이 낮지만 해상도가 낮고, MRI는 느리고 비용이 높지만 연조직 해상도가 훨씬 높다.",
      "key_point": "조현병 환자에서 뇌실 확장이 CT로 처음 확인되어, 정신장애의 구조적 뇌 이상 연구의 시작점이 되었다.",
      "common_mistake": "CT가 뇌 기능(활동)을 보여준다고 생각하는 것 — CT는 구조적 영상만 제공한다."
    }
  },
  {
    "id": "ASSESS_PSY_031",
    "terminology": "심리검사 (Psychological Testing)",
    "terminology_ko": "심리검사",
    "terminology_en": "Psychological Testing",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "표준화된 절차와 규준에 기반하여 개인의 심리적 특성(성격, 지능, 정서상태, 인지기능 등)을 객관적으로 측정하는 체계적 도구의 총칭이다.",
    "definition_en": "A general term for systematic instruments that objectively measure psychological characteristics (personality, intelligence, emotional states, cognitive functions) based on standardized procedures and norms.",
    "significance": "임상 평가에서 면담을 보완하는 핵심 도구로, 객관적이고 양적인 정보를 제공하여 진단과 치료 계획에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "제임스 매킨 캐텔",
        "name_en": "James McKeen Cattell",
        "contribution": "'정신검사(mental test)'라는 용어를 처음 사용하고 개인차 측정의 과학적 방법론을 개척했다."
      },
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "최초의 지능검사를 개발하여 표준화된 심리검사의 시대를 열었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "MMPI-2",
        "name_en": "MMPI-2",
        "id": "ASSESS_MMP_009"
      },
      {
        "name_ko": "WAIS",
        "name_en": "WAIS",
        "id": "ASSESS_WAI_017"
      },
      {
        "name_ko": "로샤흐 검사",
        "name_en": "Rorschach Test",
        "id": "ASSESS_ROR_015"
      },
      {
        "name_ko": "임상 면담",
        "name_en": "Clinical Interview",
        "id": "ASSESS_INT_005"
      }
    ],
    "sub_types": [
      {
        "name": "객관적 검사 (Objective Test)",
        "description": "MMPI-2처럼 표준화된 질문에 대한 선택형 응답"
      },
      {
        "name": "투사적 검사 (Projective Test)",
        "description": "로샤흐, TAT처럼 모호한 자극에 대한 자유 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "심리검사 = 표준화(standardization) + 규준(norms) + 신뢰도(reliability) + 타당도(validity)",
      "differential": "객관적 검사는 채점이 표준화되어 있고, 투사적 검사는 해석에 임상적 판단이 필요하다.",
      "key_point": "좋은 심리검사는 표준화, 규준, 신뢰도, 타당도의 4가지 기본 요건을 갖추어야 한다.",
      "common_mistake": "온라인 자가 심리검사를 전문 심리검사와 동일시하는 것 — 전문 검사는 훈련된 전문가가 시행·해석해야 한다."
    }
  },
  {
    "id": "ASSESS_RAT_032",
    "terminology": "평정척도 (Rating Scale)",
    "terminology_ko": "평정척도",
    "terminology_en": "Rating Scale",
    "category": "ASSESS",
    "category_name": "평가와 진단분류 (Assessment and Classification)",
    "definition": "특정 행동이나 증상의 심각도, 빈도, 정도를 수량적으로 평정하기 위해 사용하는 측정 도구로, 자기보고형과 임상가 평정형이 있다.",
    "definition_en": "A measurement instrument used to quantitatively rate the severity, frequency, or degree of specific behaviors or symptoms, available in self-report and clinician-rated formats.",
    "significance": "증상의 변화를 수량적으로 추적할 수 있어 치료 효과 평가와 연구에서 핵심적 측정 도구이다.",
    "key_researchers": [
      {
        "name_ko": "막스 해밀턴",
        "name_en": "Max Hamilton",
        "contribution": "해밀턴 우울 평정척도(HAM-D)와 해밀턴 불안 평정척도(HAM-A)를 개발하여 임상가 평정 도구의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벡 우울 척도",
        "name_en": "Beck Depression Inventory",
        "id": "ASSESS_BDI_013"
      },
      {
        "name_ko": "벡 불안 척도",
        "name_en": "Beck Anxiety Inventory",
        "id": "ASSESS_BAI_014"
      },
      {
        "name_ko": "행동 평가",
        "name_en": "Behavioral Assessment",
        "id": "ASSESS_BEH_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "평정척도 유형: 자기보고(BDI, BAI) vs. 임상가 평정(HAM-D, HAM-A)",
      "differential": "자기보고 척도는 내담자가 직접 작성하고, 임상가 평정 척도는 전문가가 면담을 통해 평정한다.",
      "key_point": "임상가 평정 척도(HAM-D 등)는 임상시험에서 1차 결과 측정으로 자주 사용된다.",
      "common_mistake": "평정척도 점수만으로 진단을 내리는 것 — 평정척도는 선별과 심각도 측정이 목적이다."
    }
  }
];

TERMS_DATA.ANXIETY = [
  {
    "id": "ANXIETY_GAD_001",
    "terminology": "범불안장애 (Generalized Anxiety Disorder)",
    "terminology_ko": "범불안장애",
    "terminology_en": "Generalized Anxiety Disorder",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "다양한 상황과 활동에 대해 과도하고 통제하기 어려운 걱정이 최소 6개월 이상 지속되며, 근육 긴장, 피로, 집중 곤란, 수면 장애 등의 신체 증상이 동반되는 장애이다.",
    "definition_en": "A disorder characterized by excessive, uncontrollable worry about various situations and activities lasting at least 6 months, accompanied by physical symptoms such as muscle tension, fatigue, difficulty concentrating, and sleep disturbance.",
    "significance": "불안장애 중 가장 만성적이고 광범위한 걱정을 특징으로 하며, 다른 불안장애 및 우울장애와의 높은 공병률을 보인다.",
    "key_researchers": [
      {
        "name_ko": "톰 보르코벡",
        "name_en": "Tom Borkovec",
        "contribution": "GAD의 걱정을 인지적 회피로 개념화하고, 걱정이 정서적 처리를 방해한다는 회피이론을 제안했다."
      },
      {
        "name_ko": "미셸 뒤가",
        "name_en": "Michel Dugas",
        "contribution": "불확실성에 대한 인내력 부족(IU)이 GAD의 핵심 취약성 요인임을 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "불안 민감성",
        "name_en": "Anxiety Sensitivity",
        "id": "ANXIETY_ASE_015"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "GAD-7",
        "name_en": "GAD-7",
        "id": "ANXIETY_G7_027"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "GAD = '만성 걱정병': 특정 대상 없이 '이것저것' 모두 걱정",
      "differential": "GAD는 다양한 주제에 대한 만성적 걱정이고, 사회불안장애는 사회적 상황에 한정된 불안이며, 특정공포증은 특정 대상에 한정된다.",
      "key_point": "핵심 특징은 '통제 불가능한 걱정'이며, 6개월 이상의 기간 기준이 있다.",
      "common_mistake": "일상적 걱정과 GAD를 혼동하는 것 — GAD의 걱정은 과도하고 통제 불가능하며 기능 손상을 초래한다."
    }
  },
  {
    "id": "ANXIETY_PAN_002",
    "terminology": "공황장애 (Panic Disorder)",
    "terminology_ko": "공황장애",
    "terminology_en": "Panic Disorder",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "반복적이고 예기치 않은 공황발작이 발생하며, 추가 발작에 대한 지속적 걱정이나 발작과 관련된 행동 변화(회피 등)가 최소 1개월 이상 지속되는 장애이다.",
    "definition_en": "A disorder characterized by recurrent, unexpected panic attacks followed by at least one month of persistent worry about additional attacks or significant behavioral changes related to the attacks.",
    "significance": "불안장애 중 가장 급성이고 극적인 증상을 보이며, 광장공포증과 흔히 동반되어 심각한 기능 제한을 초래할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "도널드 클라인",
        "name_en": "Donald Klein",
        "contribution": "공황장애를 범불안과 구분되는 독립적 질환으로 규명하고, 이미프라민의 항공황 효과를 발견했다."
      },
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "공황장애의 인지모형을 제안하여 신체감각의 파국적 오해석이 공황을 유발함을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황발작",
        "name_en": "Panic Attack",
        "id": "ANXIETY_PAT_003"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ANXIETY_AGO_006"
      },
      {
        "name_ko": "Clark의 공황 인지모형",
        "name_en": "Clark's Cognitive Model of Panic",
        "id": "ANXIETY_CLK_016"
      },
      {
        "name_ko": "예기불안",
        "name_en": "Anticipatory Anxiety",
        "id": "ANXIETY_ANT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공황장애 = 예기치 않은 공황발작 + 발작에 대한 걱정/행동 변화(1개월+)",
      "differential": "공황장애는 '예기치 않은' 공황발작이 핵심이고, 사회불안이나 특정공포증에서의 공황은 '특정 상황에 의해 촉발'된다.",
      "key_point": "공황발작 자체는 여러 장애에서 나타날 수 있지만, 공황'장애'는 예기치 않은 발작이 반복되어야 한다.",
      "common_mistake": "공황발작이 있으면 모두 공황장애라고 진단하는 것 — 공황발작은 다양한 장애에서 나타날 수 있다."
    }
  },
  {
    "id": "ANXIETY_PAT_003",
    "terminology": "공황발작 (Panic Attack)",
    "terminology_ko": "공황발작",
    "terminology_en": "Panic Attack",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "갑작스럽게 시작되어 수분 내에 절정에 이르는 극심한 공포나 불편감의 삽화로, 심장 박동 증가, 발한, 호흡 곤란, 가슴 통증, 어지러움, 죽음에 대한 공포 등 최소 4가지 이상의 증상이 동반된다.",
    "definition_en": "An episode of sudden, intense fear or discomfort that peaks within minutes, accompanied by at least four symptoms including heart pounding, sweating, shortness of breath, chest pain, dizziness, and fear of dying.",
    "significance": "DSM-5에서 독립적 진단이 아닌 '지정자(specifier)'로 분류되며, 공황장애 이외의 여러 정신장애에서도 나타날 수 있다.",
    "key_researchers": [
      {
        "name_ko": "도널드 클라인",
        "name_en": "Donald Klein",
        "contribution": "자발적 공황발작을 별개의 임상 현상으로 식별하고, 질식 경보 가설(suffocation alarm hypothesis)을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "ANXIETY_FFF_024"
      },
      {
        "name_ko": "Clark의 공황 인지모형",
        "name_en": "Clark's Cognitive Model of Panic",
        "id": "ANXIETY_CLK_016"
      },
      {
        "name_ko": "불안 민감성",
        "name_en": "Anxiety Sensitivity",
        "id": "ANXIETY_ASE_015"
      }
    ],
    "sub_types": [
      {
        "name": "예기치 않은 공황발작 (Unexpected)",
        "description": "명확한 촉발 요인 없이 갑자기 발생하는 공황발작"
      },
      {
        "name": "예기된 공황발작 (Expected)",
        "description": "특정 공포 대상이나 상황에 의해 촉발되는 공황발작"
      }
    ],
    "quiz_hints": {
      "mnemonic": "공황발작 13가지 증상: 심계항진, 발한, 떨림, 호흡곤란, 질식감, 흉통, 오심, 어지러움, 비현실감, 통제상실 공포, 죽음 공포, 감각이상, 한열감",
      "differential": "공황발작은 '증상 삽화'이고, 공황장애는 '진단명'이다. 공황발작 자체는 진단이 아니다.",
      "key_point": "갑작스러운 시작과 수분 내 절정이 핵심이며, 13가지 증상 중 4가지 이상이 필요하다.",
      "common_mistake": "공황발작이 심장마비와 같다고 생각하는 것 — 신체적으로 위험하지 않지만 주관적으로는 극심한 공포를 경험한다."
    }
  },
  {
    "id": "ANXIETY_SOC_004",
    "terminology": "사회불안장애 (Social Anxiety Disorder)",
    "terminology_ko": "사회불안장애",
    "terminology_en": "Social Anxiety Disorder",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "타인에게 부정적으로 평가받는 것에 대한 현저한 공포나 불안으로, 사회적 상황이나 수행 상황을 회피하거나 극심한 불안 속에서 견디며, 이러한 패턴이 6개월 이상 지속된다.",
    "definition_en": "Marked fear or anxiety about being negatively evaluated by others, leading to avoidance or endurance of social or performance situations with intense anxiety, persisting for at least 6 months.",
    "significance": "가장 흔한 불안장애 중 하나로, 대인관계와 직업적 기능에 심각한 영향을 미치며 만성적 경과를 보인다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "사회불안장애의 인지모형을 제안하여 자기 초점적 주의와 안전행동의 역할을 설명했다."
      },
      {
        "name_ko": "리처드 하이머그",
        "name_en": "Richard Heimberg",
        "contribution": "사회불안장애의 집단 인지행동치료 프로토콜을 개발하여 근거 기반 치료를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "안전행동",
        "name_en": "Safety Behaviors",
        "id": "ANXIETY_SAF_022"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      },
      {
        "name_ko": "회피성 성격장애",
        "name_en": "Avoidant Personality Disorder",
        "id": "PERSON_APD_002"
      }
    ],
    "sub_types": [
      {
        "name": "수행형 (Performance Only)",
        "description": "발표, 공연 등 수행 상황에 한정된 사회불안"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사회불안 = 타인의 '부정적 평가'에 대한 공포가 핵심",
      "differential": "사회불안장애는 '부정적 평가에 대한 공포'가 핵심이고, 회피성 성격장애는 '거절에 대한 민감성'과 더 광범위한 회피 패턴이 특징이다.",
      "key_point": "DSM-5에서 '수행형(performance only)' 지정자가 추가되어, 발표 불안만 있는 경우를 구분한다.",
      "common_mistake": "수줍음(shyness)과 사회불안장애를 동일시하는 것 — 사회불안장애는 임상적으로 유의한 기능 손상을 초래한다."
    }
  },
  {
    "id": "ANXIETY_SPH_005",
    "terminology": "특정공포증 (Specific Phobia)",
    "terminology_ko": "특정공포증",
    "terminology_en": "Specific Phobia",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "특정 대상이나 상황(동물, 높이, 주사, 피, 비행 등)에 대해 현실적 위험에 비해 과도한 공포와 불안을 경험하며, 이를 적극적으로 회피하는 장애이다.",
    "definition_en": "A disorder involving excessive fear and anxiety about a specific object or situation (animals, heights, injections, blood, flying) disproportionate to actual danger, with active avoidance of the feared stimulus.",
    "significance": "가장 흔한 불안장애이지만 도움을 구하는 비율이 가장 낮으며, 공포 조건화 모형의 핵심 연구 대상이다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "리틀 앨버트 실험을 통해 공포가 고전적 조건형성으로 학습될 수 있음을 최초로 입증했다."
      },
      {
        "name_ko": "수전 미넥카",
        "name_en": "Susan Mineka",
        "contribution": "공포의 관찰학습과 준비성(preparedness) 이론을 통해 특정 공포가 진화적으로 준비된 것임을 보여주었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      },
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "ANXIETY_SYD_018"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_019"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      }
    ],
    "sub_types": [
      {
        "name": "동물형 (Animal Type)",
        "description": "동물이나 곤충에 대한 공포"
      },
      {
        "name": "자연환경형 (Natural Environment Type)",
        "description": "높이, 폭풍, 물에 대한 공포"
      },
      {
        "name": "혈액-주사-부상형 (Blood-Injection-Injury Type)",
        "description": "피, 주사, 의료 시술에 대한 공포"
      },
      {
        "name": "상황형 (Situational Type)",
        "description": "비행기, 엘리베이터, 밀폐공간에 대한 공포"
      },
      {
        "name": "기타형 (Other Type)",
        "description": "구토, 질식, 소리 등에 대한 공포"
      }
    ],
    "quiz_hints": {
      "mnemonic": "특정공포증 5가지 유형: 동물, 자연환경, 혈액-주사, 상황, 기타",
      "differential": "특정공포증은 특정 대상에 한정된 공포이고, 광장공포증은 탈출 곤란한 상황에 대한 공포이다.",
      "key_point": "혈액-주사-부상형은 다른 공포증과 달리 혈관미주신경성 실신(vasovagal syncope) 반응을 보이는 특이성이 있다.",
      "common_mistake": "일상적 불안(예: 거미를 싫어하는 것)과 특정공포증을 혼동하는 것 — 공포증은 과도하고 비합리적이며 기능 손상을 초래한다."
    }
  },
  {
    "id": "ANXIETY_AGO_006",
    "terminology": "광장공포증 (Agoraphobia)",
    "terminology_ko": "광장공포증",
    "terminology_en": "Agoraphobia",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "대중교통, 넓은 공간, 밀폐된 공간, 줄서기, 혼자 외출하기 등 도움을 받기 어렵거나 탈출이 곤란한 상황에 대한 현저한 공포와 회피를 특징으로 하는 장애이다.",
    "definition_en": "A disorder characterized by marked fear and avoidance of situations where help may be unavailable or escape may be difficult, such as public transportation, open spaces, enclosed places, standing in lines, or being outside alone.",
    "significance": "DSM-5에서 공황장애와 독립적인 진단으로 분리되었으며, 가장 심각한 기능 제한을 초래하는 불안장애 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "칼 웨스트팔",
        "name_en": "Carl Westphal",
        "contribution": "1871년 광장공포증(Agoraphobia)이라는 용어를 처음 사용하고 그 임상 양상을 기술했다."
      },
      {
        "name_ko": "데이비드 바를로",
        "name_en": "David H. Barlow",
        "contribution": "광장공포증의 발달에서 공황과 회피의 관계를 정교화하고 통합적 치료 프로토콜을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_019"
      },
      {
        "name_ko": "안전행동",
        "name_en": "Safety Behaviors",
        "id": "ANXIETY_SAF_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Agora(광장) + Phobia(공포) = 넓은 곳의 공포가 아닌 '탈출 곤란한 상황'의 공포",
      "differential": "광장공포증은 '탈출/도움 곤란' 상황의 회피이고, 사회불안장애는 '부정적 평가' 상황의 회피이다.",
      "key_point": "DSM-5에서 공황장애와 별도의 진단으로 분리되었으며, 공황 없이도 광장공포증이 진단될 수 있다.",
      "common_mistake": "광장공포증을 단순히 '넓은 공간에 대한 공포'로 이해하는 것 — 핵심은 탈출이 곤란한 다양한 상황에 대한 공포이다."
    }
  },
  {
    "id": "ANXIETY_SEP_007",
    "terminology": "분리불안장애 (Separation Anxiety Disorder)",
    "terminology_ko": "분리불안장애",
    "terminology_en": "Separation Anxiety Disorder",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "애착 대상과의 분리에 대한 발달 수준에 비해 과도하고 부적절한 공포와 불안을 특징으로 하며, 아동기뿐만 아니라 성인기에도 발생할 수 있는 장애이다.",
    "definition_en": "A disorder characterized by excessive and developmentally inappropriate fear and anxiety about separation from attachment figures, occurring in both childhood and adulthood.",
    "significance": "DSM-5에서 아동기 장애에서 불안장애 장으로 이동하여 성인 분리불안도 공식 진단이 가능해졌다.",
    "key_researchers": [
      {
        "name_ko": "존 볼비",
        "name_en": "John Bowlby",
        "contribution": "애착이론을 통해 분리불안의 발달적 기원과 안전 기지(secure base) 개념을 제시했다."
      },
      {
        "name_ko": "메리 에인스워스",
        "name_en": "Mary Ainsworth",
        "contribution": "낯선 상황 실험으로 애착 유형을 분류하고 불안정 애착과 분리불안의 관계를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ANXIETY_AGO_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "분리불안 = 애착 대상과 '떨어지면' 과도한 불안 (아동+성인 모두 가능)",
      "differential": "분리불안장애는 '애착 대상과의 분리'에 대한 불안이고, 범불안장애는 '다양한 주제'에 대한 걱정이다.",
      "key_point": "DSM-5에서 성인 분리불안장애가 공식 인정되었으며, 아동의 기간 기준은 4주, 성인은 6개월이다.",
      "common_mistake": "분리불안을 아동에게만 국한시키는 것 — DSM-5에서는 성인 분리불안장애도 진단할 수 있다."
    }
  },
  {
    "id": "ANXIETY_MUT_008",
    "terminology": "선택적 함묵증 (Selective Mutism)",
    "terminology_ko": "선택적 함묵증",
    "terminology_en": "Selective Mutism",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "말할 수 있는 능력이 있음에도 불구하고, 특정 사회적 상황(주로 학교)에서 일관되게 말하지 못하는 장애로, 사회불안과 높은 관련성을 보인다.",
    "definition_en": "A disorder in which a child consistently fails to speak in specific social situations (typically school) despite having the ability to speak, showing high association with social anxiety.",
    "significance": "DSM-5에서 불안장애 범주에 포함되어, 불안의 극단적 표현형으로서의 성격이 인정되었다.",
    "key_researchers": [
      {
        "name_ko": "마게 쿰프리스",
        "name_en": "Maggie Kumpulainen",
        "contribution": "선택적 함묵증과 사회불안장애의 관계를 연구하여 불안 기반 개입의 근거를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SOC_004"
      },
      {
        "name_ko": "분리불안장애",
        "name_en": "Separation Anxiety Disorder",
        "id": "ANXIETY_SEP_007"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "선택적 함묵 = 집에서는 말하지만 학교에서는 '선택적으로' 말하지 못함",
      "differential": "선택적 함묵증은 특정 상황에서만 말하지 못하는 것이고, 언어장애는 모든 상황에서 언어 능력이 부족한 것이다.",
      "key_point": "불안이 핵심 기제이므로, 말을 강요하는 것이 아니라 불안을 줄이는 접근이 효과적이다.",
      "common_mistake": "선택적 함묵증을 '의도적 거부'나 '반항'으로 해석하는 것 — 불안에 의한 행동 억제이다."
    }
  },
  {
    "id": "ANXIETY_BEC_009",
    "terminology": "불안의 인지모형 (Beck's Cognitive Model of Anxiety)",
    "terminology_ko": "불안의 인지모형",
    "terminology_en": "Beck's Cognitive Model of Anxiety",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "벡의 인지이론에 기반하여, 위협에 대한 과대평가와 대처 능력의 과소평가라는 인지적 편향이 불안의 핵심 유지 기제라고 설명하는 모형이다.",
    "definition_en": "A model based on Beck's cognitive theory explaining that cognitive biases involving overestimation of threat and underestimation of coping ability are core maintaining mechanisms of anxiety.",
    "significance": "인지행동치료에서 불안장애를 치료하는 핵심 이론적 틀로, 인지 재구성의 직접적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "불안장애에서 위협 과대평가, 대처능력 과소평가, 자동적 사고의 역할을 체계화했다."
      },
      {
        "name_ko": "게리 에머리",
        "name_en": "Gary Emery",
        "contribution": "벡과 함께 불안장애의 인지치료를 체계적으로 정립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "FOUND_CDI_025"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "Clark의 공황 인지모형",
        "name_en": "Clark's Cognitive Model of Panic",
        "id": "ANXIETY_CLK_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "벡의 불안 공식: 위협 과대평가 ÷ 대처능력 과소평가 = 불안",
      "differential": "벡의 인지모형은 위협 평가에 초점을 맞추고, Barlow의 모형은 정서 조절과 통제감에 초점을 맞춘다.",
      "key_point": "위험(danger)의 과대평가와 자원(resource)의 과소평가라는 이중 인지 편향이 핵심이다.",
      "common_mistake": "불안의 인지모형이 실제 위협을 무시한다고 생각하는 것 — 위협에 대한 '비합리적/과도한' 평가를 다루는 것이다."
    }
  },
  {
    "id": "ANXIETY_LRN_010",
    "terminology": "불안의 학습모형 (Learning Model of Anxiety)",
    "terminology_ko": "불안의 학습모형",
    "terminology_en": "Learning Model of Anxiety",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "고전적 조건형성으로 공포가 습득되고, 조작적 조건형성(부적 강화)에 의해 회피행동이 유지된다는 모워의 이요인이론에 기반한 불안장애 설명 모형이다.",
    "definition_en": "A model explaining anxiety disorders based on Mowrer's two-factor theory: fear is acquired through classical conditioning and avoidance behavior is maintained through operant conditioning (negative reinforcement).",
    "significance": "노출치료의 이론적 기반이 되며, 공포증의 발생과 유지 기제를 학습 원리로 설명하는 핵심 모형이다.",
    "key_researchers": [
      {
        "name_ko": "오빌 모워",
        "name_en": "O. Hobart Mowrer",
        "contribution": "이요인이론(two-factor theory)을 제안하여 공포의 습득(고전적 조건형성)과 유지(조작적 조건형성)를 통합적으로 설명했다."
      },
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "리틀 앨버트 실험에서 공포의 고전적 조건형성을 실험적으로 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동주의 모형",
        "name_en": "Behavioral Model",
        "id": "FOUND_BEH_013"
      },
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이요인: 1요인=고전적 조건형성(공포 습득) + 2요인=조작적 조건형성(회피 유지)",
      "differential": "학습모형은 외부 경험에 의한 공포 습득을, 인지모형은 내적 사고에 의한 불안 유지를 강조한다.",
      "key_point": "회피가 불안을 일시적으로 줄여주지만(부적 강화), 장기적으로 공포를 유지·강화한다.",
      "common_mistake": "모든 공포증이 직접 경험(조건형성)으로만 생긴다고 보는 것 — 관찰학습이나 정보 전달로도 공포가 형성될 수 있다."
    }
  },
  {
    "id": "ANXIETY_TVB_011",
    "terminology": "Barlow의 삼중취약성모형 (Barlow's Triple Vulnerability Model)",
    "terminology_ko": "Barlow의 삼중취약성모형",
    "terminology_en": "Barlow's Triple Vulnerability Model",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "불안장애의 발생을 세 가지 취약성의 상호작용으로 설명하는 모형으로, 일반적 생물학적 취약성, 일반적 심리적 취약성(통제감 부족), 특정 심리적 취약성(특정 학습 경험)을 포함한다.",
    "definition_en": "A model explaining the development of anxiety disorders through the interaction of three vulnerabilities: generalized biological vulnerability, generalized psychological vulnerability (diminished sense of control), and specific psychological vulnerability (specific learning experiences).",
    "significance": "불안장애의 발병에 생물학적, 심리적, 학습적 요인을 통합적으로 설명하여, 취약성-스트레스 모형의 구체적 적용이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 바를로",
        "name_en": "David H. Barlow",
        "contribution": "삼중취약성모형을 제안하여 불안장애의 발병 기전을 생물·심리·학습의 세 수준에서 통합적으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "불안 민감성",
        "name_en": "Anxiety Sensitivity",
        "id": "ANXIETY_ASE_015"
      },
      {
        "name_ko": "유전적 소인",
        "name_en": "Genetic Predisposition",
        "id": "FOUND_GEN_034"
      },
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "3중 취약성: (1)생물학적(유전) + (2)심리적(통제감↓) + (3)특정 학습(조건형성 경험)",
      "differential": "삼중취약성모형은 '왜 불안장애가 생기는가'를 설명하고, 인지모형은 '어떻게 불안이 유지되는가'를 설명한다.",
      "key_point": "세 번째 취약성(특정 학습 경험)이 어떤 불안장애가 발생하는지를 결정한다(예: 뱀 공포 vs. 사회불안).",
      "common_mistake": "세 가지 취약성 중 하나만으로 불안장애가 발생한다고 보는 것 — 세 가지의 '상호작용'이 필요하다."
    }
  },
  {
    "id": "ANXIETY_FRC_012",
    "terminology": "불안의 생리적 증상 (Physiological Symptoms of Anxiety)",
    "terminology_ko": "불안의 생리적 증상",
    "terminology_en": "Physiological Symptoms of Anxiety",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "불안 반응에 동반되는 자율신경계 활성화 증상으로, 심박 증가, 발한, 근육 긴장, 호흡 곤란, 소화 불량, 떨림, 어지러움 등이 있으며, 투쟁-도피 반응의 일부이다.",
    "definition_en": "Autonomic nervous system activation symptoms accompanying anxiety responses, including increased heart rate, sweating, muscle tension, shortness of breath, digestive issues, trembling, and dizziness, as part of the fight-or-flight response.",
    "significance": "불안의 신체적 표현을 이해하면 심신 관계를 파악하고, 이완 기법 등 신체 기반 치료의 근거를 마련할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐넌",
        "name_en": "Walter Cannon",
        "contribution": "투쟁-도피 반응을 처음 기술하여 불안의 생리적 기제의 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "ANXIETY_FFF_024"
      },
      {
        "name_ko": "HPA축",
        "name_en": "HPA Axis",
        "id": "ANXIETY_HPA_025"
      },
      {
        "name_ko": "이완훈련",
        "name_en": "Relaxation Training",
        "id": "ANXIETY_REL_030"
      },
      {
        "name_ko": "공황발작",
        "name_en": "Panic Attack",
        "id": "ANXIETY_PAT_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불안의 신체 증상 = 자율신경계(교감신경)의 '과활성화'",
      "differential": "불안의 생리적 증상은 정상적인 스트레스 반응의 과잉이지, 신체 질환과는 다르다(감별진단 필요).",
      "key_point": "공황발작에서는 이러한 생리적 증상이 극단적으로 나타나 심장마비로 오인되기도 한다.",
      "common_mistake": "불안의 신체 증상을 신체 질환의 증거로 해석하는 것 — 이것이 공황장애의 악순환을 유지하는 핵심 오류이다."
    }
  },
  {
    "id": "ANXIETY_SSR_013",
    "terminology": "선택적 세로토닌 재흡수 억제제 (SSRI)",
    "terminology_ko": "선택적 세로토닌 재흡수 억제제",
    "terminology_en": "Selective Serotonin Reuptake Inhibitor",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "시냅스에서 세로토닌의 재흡수를 선택적으로 차단하여 세로토닌 수준을 증가시키는 항우울제 계열의 약물로, 불안장애의 일차 약물치료로 권고된다.",
    "definition_en": "A class of antidepressant medications that selectively block serotonin reuptake at synapses to increase serotonin levels, recommended as first-line pharmacotherapy for anxiety disorders.",
    "significance": "불안장애와 우울장애 모두에 효과적인 일차 약물치료로, 벤조디아제핀보다 의존성 위험이 낮다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 웡",
        "name_en": "David Wong",
        "contribution": "최초의 SSRI인 플루옥세틴(프로작)을 개발하여 정신약물학에 혁명을 일으켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "벤조디아제핀",
        "name_en": "Benzodiazepine",
        "id": "ANXIETY_BZD_014"
      },
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "FOUND_NTR_023"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SSRI = Selective(선택적) Serotonin(세로토닌) Reuptake(재흡수) Inhibitor(억제제)",
      "differential": "SSRI는 세로토닌에 선택적이고, SNRI는 세로토닌과 노르에피네프린 모두에 작용한다.",
      "key_point": "효과 발현에 2~4주가 걸리며, 초기에 불안이 일시적으로 악화될 수 있다.",
      "common_mistake": "SSRI가 즉각적 효과를 나타낸다고 기대하는 것 — 치료 효과가 나타나기까지 수주가 필요하다."
    }
  },
  {
    "id": "ANXIETY_BZD_014",
    "terminology": "벤조디아제핀 (Benzodiazepine)",
    "terminology_ko": "벤조디아제핀",
    "terminology_en": "Benzodiazepine",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "GABA 수용체에 작용하여 억제성 신경전달을 증진시키는 항불안약으로, 빠른 효과를 보이지만 의존성, 내성, 금단 증상의 위험이 있어 단기 사용이 권고된다.",
    "definition_en": "An anxiolytic medication that enhances inhibitory neurotransmission by acting on GABA receptors, providing rapid effects but carrying risks of dependence, tolerance, and withdrawal symptoms, recommended for short-term use only.",
    "significance": "즉각적 불안 감소 효과가 있어 급성 불안 관리에 유용하지만, 장기 사용 시 의존성 문제로 신중한 처방이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "레오 스턴바흐",
        "name_en": "Leo Sternbach",
        "contribution": "1955년 최초의 벤조디아제핀인 클로르디아제폭사이드(Librium)를 합성하여 현대 항불안 약물의 시대를 열었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "ANXIETY_SSR_013"
      },
      {
        "name_ko": "신경전달물질",
        "name_en": "Neurotransmitter",
        "id": "FOUND_NTR_023"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_003"
      },
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "벤조디아제핀 = GABA 증진 → 빠른 효과 but 의존성 위험",
      "differential": "벤조디아제핀은 즉각적이지만 의존성 위험이 있고, SSRI는 느리지만 의존성이 낮다.",
      "key_point": "대표적 약물: 디아제팜(Valium), 알프라졸람(Xanax), 로라제팜(Ativan), 클로나제팜(Klonopin).",
      "common_mistake": "벤조디아제핀을 불안장애의 장기 치료로 사용하는 것 — 단기 사용이나 SSRI 효과 발현 대기 시 일시적 사용이 적절하다."
    }
  },
  {
    "id": "ANXIETY_ASE_015",
    "terminology": "불안 민감성 (Anxiety Sensitivity)",
    "terminology_ko": "불안 민감성",
    "terminology_en": "Anxiety Sensitivity",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "불안 관련 신체감각(심장 두근거림, 어지러움 등)이 해로운 결과를 초래할 것이라는 두려움으로, '불안에 대한 불안(fear of anxiety)'이라고도 하며 공황장애의 주요 위험 요인이다.",
    "definition_en": "The fear that anxiety-related bodily sensations (heart pounding, dizziness) will lead to harmful consequences, also known as 'fear of anxiety,' a major risk factor for panic disorder.",
    "significance": "공황장애 발병의 인지적 취약성 요인으로, 불안 민감성이 높을수록 신체감각에 대한 파국적 해석이 증가한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 레이스",
        "name_en": "Steven Reiss",
        "contribution": "불안 민감성 개념을 처음 제안하고, 불안 민감성 지표(ASI)를 개발하여 측정 가능하게 했다."
      },
      {
        "name_ko": "리처드 맥낼리",
        "name_en": "Richard McNally",
        "contribution": "불안 민감성과 공황장애의 관계를 실험적으로 규명하여 인지적 취약성 연구를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "Clark의 공황 인지모형",
        "name_en": "Clark's Cognitive Model of Panic",
        "id": "ANXIETY_CLK_016"
      },
      {
        "name_ko": "Barlow의 삼중취약성모형",
        "name_en": "Barlow's Triple Vulnerability Model",
        "id": "ANXIETY_TVB_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "불안 민감성 = '불안의 불안': 심장이 뛰면 → '심장마비인가?' → 더 불안 → 악순환",
      "differential": "불안 민감성은 불안 '증상'에 대한 두려움이고, 특성 불안은 전반적인 불안 '성향'이다.",
      "key_point": "불안 민감성은 공황장애뿐만 아니라 PTSD, 물질사용장애 등 다양한 장애의 위험 요인이기도 하다.",
      "common_mistake": "불안 민감성과 특성 불안을 동일시하는 것 — 불안 민감성은 불안의 '결과'를 두려워하는 것이고, 특성 불안은 전반적 불안 수준이다."
    }
  },
  {
    "id": "ANXIETY_CLK_016",
    "terminology": "Clark의 공황 인지모형 (Clark's Cognitive Model of Panic)",
    "terminology_ko": "Clark의 공황 인지모형",
    "terminology_en": "Clark's Cognitive Model of Panic",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "정상적인 신체감각을 임박한 재앙(심장마비, 미치는 것 등)으로 파국적으로 오해석하면 불안이 증가하고, 이것이 다시 신체감각을 증폭시키는 악순환이 공황발작을 유발한다는 모형이다.",
    "definition_en": "A model proposing that catastrophic misinterpretation of normal bodily sensations as signs of imminent catastrophe (heart attack, going insane) increases anxiety, which amplifies physical sensations in a vicious cycle that triggers panic attacks.",
    "significance": "공황장애의 인지적 기제를 설명하는 가장 영향력 있는 모형으로, 인지치료의 직접적 이론적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "1986년 공황장애의 인지모형을 발표하여 신체감각의 파국적 오해석이 공황의 핵심 기제임을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "공황발작",
        "name_en": "Panic Attack",
        "id": "ANXIETY_PAT_003"
      },
      {
        "name_ko": "불안 민감성",
        "name_en": "Anxiety Sensitivity",
        "id": "ANXIETY_ASE_015"
      },
      {
        "name_ko": "안전행동",
        "name_en": "Safety Behaviors",
        "id": "ANXIETY_SAF_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Clark 모형의 악순환: 신체감각 → 파국적 오해석 → 불안 증가 → 신체감각 증폭 → 공황",
      "differential": "Clark 모형은 신체감각의 '파국적 오해석'에 초점을 맞추고, Barlow 모형은 '통제감 상실'에 초점을 맞춘다.",
      "key_point": "치료의 핵심은 신체감각의 파국적 해석을 현실적 해석으로 수정하는 인지 재구성이다.",
      "common_mistake": "Clark 모형이 공황의 생물학적 요인을 완전히 무시한다고 보는 것 — 신체감각은 실제로 존재하며, 이에 대한 '해석'이 핵심이다."
    }
  },
  {
    "id": "ANXIETY_EXP_017",
    "terminology": "노출치료 (Exposure Therapy)",
    "terminology_ko": "노출치료",
    "terminology_en": "Exposure Therapy",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "공포나 불안을 유발하는 자극에 안전한 환경에서 반복적으로 노출시켜 공포 반응을 감소시키는 행동치료 기법으로, 습관화와 소거 학습이 핵심 기제이다.",
    "definition_en": "A behavioral therapy technique that reduces fear responses through repeated, safe exposure to anxiety-provoking stimuli, with habituation and extinction learning as core mechanisms.",
    "significance": "불안장애의 가장 효과적인 근거 기반 치료법으로, 모든 불안장애에 대한 치료의 핵심 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "정서처리이론을 제안하여 노출치료의 기제를 공포구조(fear structure)의 수정으로 설명했다."
      },
      {
        "name_ko": "미셸 크라스크",
        "name_en": "Michelle Craske",
        "contribution": "억제학습 모형을 제안하여 노출치료에서 습관화보다 새로운 학습의 중요성을 강조했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "ANXIETY_SYD_018"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "불안의 학습모형",
        "name_en": "Learning Model of Anxiety",
        "id": "ANXIETY_LRN_010"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "체내감각 노출 (Interoceptive Exposure)",
        "description": "의도적으로 신체감각을 유발하여 공황 증상에 대한 공포를 감소시키는 기법"
      },
      {
        "name": "실제 노출 (In Vivo Exposure)",
        "description": "실제 공포 상황이나 대상에 직접 노출하는 기법"
      },
      {
        "name": "상상 노출 (Imaginal Exposure)",
        "description": "상상 속에서 공포 장면을 생생하게 떠올리는 기법"
      },
      {
        "name": "가상현실 노출 (Virtual Reality Exposure)",
        "description": "가상현실 기술을 이용한 노출 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "노출치료 유형: In Vivo(실제), Imaginal(상상), Interoceptive(체내감각), VR(가상현실)",
      "differential": "노출치료는 직접 대면(단번에 또는 점진적)이고, 체계적 둔감화는 이완과 점진적 노출의 결합이다.",
      "key_point": "최신 이론(억제학습 모형)에서는 공포가 '소거'되는 것이 아니라 새로운 안전 학습이 추가되는 것이라고 본다.",
      "common_mistake": "노출치료가 단순히 '공포 자극에 무조건 노출'시키는 것이라고 보는 것 — 체계적이고 치료적인 맥락에서 이루어진다."
    }
  },
  {
    "id": "ANXIETY_SYD_018",
    "terminology": "체계적 둔감화 (Systematic Desensitization)",
    "terminology_ko": "체계적 둔감화",
    "terminology_en": "Systematic Desensitization",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "이완 훈련과 공포 자극의 점진적 노출을 결합한 행동치료 기법으로, 불안 위계를 구성하여 낮은 단계부터 이완 상태에서 노출하며, 상호억제 원리에 기반한다.",
    "definition_en": "A behavioral therapy technique combining relaxation training with gradual exposure to feared stimuli, constructing an anxiety hierarchy and exposing from the lowest level while relaxed, based on the principle of reciprocal inhibition.",
    "significance": "최초의 체계적인 행동치료 기법으로, 노출 기반 치료의 기원이며 현대 불안 치료의 기반을 마련했다.",
    "key_researchers": [
      {
        "name_ko": "조셉 울프",
        "name_en": "Joseph Wolpe",
        "contribution": "1958년 상호억제 원리에 기반하여 체계적 둔감화를 개발하고, 불안장애의 행동치료 시대를 열었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_017"
      },
      {
        "name_ko": "이완훈련",
        "name_en": "Relaxation Training",
        "id": "ANXIETY_REL_030"
      },
      {
        "name_ko": "행동주의 모형",
        "name_en": "Behavioral Model",
        "id": "FOUND_BEH_013"
      },
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ANXIETY_SPH_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체계적 둔감화 3단계: (1)이완훈련 → (2)불안 위계 구성 → (3)점진적 노출+이완",
      "differential": "체계적 둔감화는 이완과 노출을 결합하고, 홍수법(flooding)은 이완 없이 최고 강도의 자극에 바로 노출한다.",
      "key_point": "상호억제(reciprocal inhibition): 이완과 불안은 동시에 존재할 수 없다는 원리에 기반한다.",
      "common_mistake": "체계적 둔감화가 현대에는 사용되지 않는다고 보는 것 — 여전히 특정 상황에서 효과적으로 사용된다."
    }
  },
  {
    "id": "ANXIETY_EXP_019",
    "terminology": "노출 및 반응방지 (Exposure and Response Prevention, ERP)",
    "terminology_ko": "노출 및 반응방지",
    "terminology_en": "Exposure and Response Prevention",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "강박장애의 핵심 치료법으로, 강박사고를 유발하는 자극에 노출시키면서 강박행동(의식)의 수행을 의도적으로 방지하여 불안의 자연 소멸을 경험하게 하는 기법이다.",
    "definition_en": "A core treatment for OCD that exposes patients to stimuli triggering obsessive thoughts while intentionally preventing compulsive rituals, allowing natural anxiety reduction to occur.",
    "significance": "강박장애에 대한 가장 효과적인 심리치료로, 노출치료의 특수한 적용 형태이다.",
    "key_researchers": [
      {
        "name_ko": "빅터 마이어",
        "name_en": "Victor Meyer",
        "contribution": "1966년 노출 및 반응방지를 강박장애 치료에 최초로 적용하여 행동치료의 효과를 입증했다."
      },
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "ERP를 체계화하고 정서처리이론으로 기제를 설명하여 강박장애 치료의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_017"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ERP = Exposure(노출) + Response Prevention(반응방지) = 강박 자극에 노출하되 의식 수행을 막기",
      "differential": "일반 노출치료는 회피행동 감소에 초점, ERP는 '강박행동(의식)' 방지에 특화된 기법이다.",
      "key_point": "핵심은 강박행동을 하지 않아도 불안이 자연적으로 감소한다는 것을 체험하게 하는 것이다.",
      "common_mistake": "ERP에서 모든 강박행동을 처음부터 완전히 차단해야 한다고 보는 것 — 점진적 접근이 일반적이다."
    }
  },
  {
    "id": "ANXIETY_CBT_020",
    "terminology": "인지행동치료 (Cognitive-Behavioral Therapy, CBT)",
    "terminology_ko": "인지행동치료",
    "terminology_en": "Cognitive-Behavioral Therapy",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "비합리적 사고와 부적응적 행동 패턴을 동시에 다루는 구조화된 단기 심리치료로, 인지 재구성과 행동 기법(노출, 행동 실험)을 통합하여 불안 증상을 감소시킨다.",
    "definition_en": "A structured, short-term psychotherapy addressing both irrational thoughts and maladaptive behavior patterns, integrating cognitive restructuring and behavioral techniques (exposure, behavioral experiments) to reduce anxiety symptoms.",
    "significance": "불안장애에 대해 가장 광범위한 경험적 근거를 가진 심리치료로, 약물치료와 동등하거나 우월한 효과를 보인다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron T. Beck",
        "contribution": "인지치료를 개발하여 인지행동치료의 인지적 구성요소의 기반을 마련했다."
      },
      {
        "name_ko": "데이비드 바를로",
        "name_en": "David H. Barlow",
        "contribution": "불안장애에 대한 통합적 CBT 프로토콜(Unified Protocol)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지 모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_014"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_017"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions",
        "id": "FOUND_CDI_025"
      },
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "ANXIETY_SSR_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CBT = Cognitive(인지 재구성) + Behavioral(행동 변화) + Therapy(구조화된 치료)",
      "differential": "CBT는 현재의 사고와 행동에 초점을 맞추고, 정신분석은 과거 무의식에, 인본주의는 자기실현에 초점을 맞춘다.",
      "key_point": "보통 12~20회기의 구조화된 단기 치료이며, 가정과제(homework)가 핵심 구성요소이다.",
      "common_mistake": "CBT가 '긍정적으로 생각하기'라고 단순화하는 것 — 실제로는 비합리적 사고를 현실적 사고로 교정하는 것이다."
    }
  },
  {
    "id": "ANXIETY_SAF_022",
    "terminology": "안전행동 (Safety Behaviors)",
    "terminology_ko": "안전행동",
    "terminology_en": "Safety Behaviors",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "두려운 결과를 예방하기 위해 불안 상황에서 수행하는 미묘한 회피적 행동으로, 단기적으로 불안을 줄이지만 장기적으로 공포 신념을 유지시키는 역할을 한다.",
    "definition_en": "Subtle avoidant behaviors performed in anxiety-provoking situations to prevent feared outcomes, reducing anxiety in the short term but maintaining fear beliefs in the long term.",
    "significance": "인지행동치료에서 핵심적으로 다루는 유지 요인으로, 안전행동의 중단이 치료 효과를 극대화한다.",
    "key_researchers": [
      {
        "name_ko": "폴 살코프스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "안전행동 개념을 정립하고, 이것이 공포 신념의 반증 기회를 차단하여 불안을 유지시킴을 설명했다."
      },
      {
        "name_ko": "데이비드 클라크",
        "name_en": "David M. Clark",
        "contribution": "사회불안장애와 공황장애에서 안전행동의 역할을 실험적으로 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SOC_004"
      },
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "안전행동 예시: 발표 중 메모를 꽉 쥐기, 출구 가까이 앉기, 항상 약 가지고 다니기",
      "differential": "안전행동은 상황 '내'에서의 미묘한 회피이고, 회피행동은 상황 '자체'를 피하는 것이다.",
      "key_point": "안전행동이 없어도 두려운 결과가 발생하지 않는다는 경험이 치료적 변화의 핵심이다.",
      "common_mistake": "안전행동이 효과적인 대처전략이라고 보는 것 — 단기적으로 안심을 주지만 장기적으로 불안을 유지·강화한다."
    }
  },
  {
    "id": "ANXIETY_ANT_023",
    "terminology": "예기불안 (Anticipatory Anxiety)",
    "terminology_ko": "예기불안",
    "terminology_en": "Anticipatory Anxiety",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "두려운 상황이나 사건이 발생하기 전에 경험하는 불안으로, '불안에 대한 불안'의 형태를 취하며 공황장애, 사회불안, 광장공포증의 회피행동을 촉진한다.",
    "definition_en": "Anxiety experienced before a feared situation or event occurs, taking the form of 'anxiety about anxiety' and promoting avoidance behavior in panic disorder, social anxiety, and agoraphobia.",
    "significance": "불안 악순환의 핵심 연결고리로, 예기불안이 회피행동을 유발하고 이것이 다시 불안을 강화하는 악순환을 형성한다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 바를로",
        "name_en": "David H. Barlow",
        "contribution": "예기불안이 공황장애의 유지에서 핵심적 역할을 한다는 모형을 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PAN_002"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "ANXIETY_AVO_029"
      },
      {
        "name_ko": "안전행동",
        "name_en": "Safety Behaviors",
        "id": "ANXIETY_SAF_022"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "예기불안 = 아직 일어나지 않은 일에 대한 '미리 걱정하기'",
      "differential": "예기불안은 미래의 특정 상황에 대한 불안이고, 범불안은 다양한 주제에 대한 만성적 걱정이다.",
      "key_point": "공황장애에서 다음 발작에 대한 예기불안이 일상 기능을 심각하게 제한하는 주요 요인이다.",
      "common_mistake": "예기불안을 단순한 걱정으로 치부하는 것 — 예기불안은 회피행동의 직접적 원인이 되어 기능을 크게 제한한다."
    }
  },
  {
    "id": "ANXIETY_FFF_024",
    "terminology": "투쟁-도피 반응 (Fight-or-Flight Response)",
    "terminology_ko": "투쟁-도피 반응",
    "terminology_en": "Fight-or-Flight Response",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "위협을 감지했을 때 교감신경계가 활성화되어 심박 증가, 혈류 재분배, 호흡 촉진, 근육 긴장 등 신체를 전투나 도피에 대비시키는 진화적 생존 반응이다.",
    "definition_en": "An evolutionary survival response in which the sympathetic nervous system activates upon detecting threat, increasing heart rate, redistributing blood flow, accelerating breathing, and tensing muscles to prepare for fighting or fleeing.",
    "significance": "불안의 생리적 기반을 이해하는 핵심 개념으로, 불안장애에서 이 반응이 부적절하게 활성화되는 것으로 설명된다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐넌",
        "name_en": "Walter Cannon",
        "contribution": "1915년 투쟁-도피 반응의 개념을 최초로 제안하여 스트레스에 대한 신체적 반응의 기초를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "HPA축",
        "name_en": "HPA Axis",
        "id": "ANXIETY_HPA_025"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      },
      {
        "name_ko": "공황발작",
        "name_en": "Panic Attack",
        "id": "ANXIETY_PAT_003"
      },
      {
        "name_ko": "불안의 생리적 증상",
        "name_en": "Physiological Symptoms of Anxiety",
        "id": "ANXIETY_FRC_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Fight(싸우기) or Flight(도망가기) = 위협 시 교감신경 '전투모드' 가동",
      "differential": "투쟁-도피 반응은 급성 위협 대비이고, HPA축 반응은 지속적 스트레스에 대한 느린 호르몬 반응이다.",
      "key_point": "공황발작은 실제 위협 없이 투쟁-도피 반응이 '오발동(false alarm)'하는 것으로 이해할 수 있다.",
      "common_mistake": "투쟁-도피 반응 자체가 병적이라고 보는 것 — 이것은 정상적 생존 기제이며, 부적절한 활성화가 문제이다."
    }
  },
  {
    "id": "ANXIETY_HPA_025",
    "terminology": "HPA축 (Hypothalamic-Pituitary-Adrenal Axis)",
    "terminology_ko": "HPA축",
    "terminology_en": "Hypothalamic-Pituitary-Adrenal Axis",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "시상하부-뇌하수체-부신으로 이어지는 스트레스 반응 체계로, CRH → ACTH → 코르티솔의 연쇄를 통해 스트레스에 대한 장기적 신체 반응을 조절한다.",
    "definition_en": "The hypothalamic-pituitary-adrenal stress response system that regulates long-term bodily responses to stress through the cascade of CRH → ACTH → cortisol.",
    "significance": "만성 스트레스와 불안장애의 생물학적 기반으로, HPA축의 조절 이상이 다양한 정신장애와 관련된다.",
    "key_researchers": [
      {
        "name_ko": "한스 셀리에",
        "name_en": "Hans Selye",
        "contribution": "일반적응증후군(GAS)을 제안하여 스트레스에 대한 신체의 체계적 반응을 최초로 개념화했다."
      },
      {
        "name_ko": "브루스 맥이웬",
        "name_en": "Bruce McEwen",
        "contribution": "알로스타틱 부하(allostatic load) 개념을 제안하여 만성 스트레스의 누적 효과를 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "ANXIETY_FFF_024"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSM_018"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HPA축 연쇄: H(시상하부→CRH) → P(뇌하수체→ACTH) → A(부신→코르티솔)",
      "differential": "투쟁-도피(교감신경)는 초 단위의 빠른 반응이고, HPA축은 분~시간 단위의 느린 호르몬 반응이다.",
      "key_point": "만성 스트레스로 HPA축이 과활성화되면 코르티솔이 지속적으로 상승하여 면역기능 저하, 해마 손상 등이 발생한다.",
      "common_mistake": "HPA축이 불안의 유일한 생물학적 기제라고 보는 것 — 편도체, 세로토닌 등 다른 기제도 중요하다."
    }
  },
  {
    "id": "ANXIETY_AMY_026",
    "terminology": "편도체의 역할 (Role of the Amygdala)",
    "terminology_ko": "편도체의 역할",
    "terminology_en": "Role of the Amygdala",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "측두엽 내 아몬드 모양의 구조물로, 공포 자극의 감지, 공포 학습, 공포 기억의 저장에 핵심적인 역할을 하며, 불안장애에서 과활성화되는 것으로 밝혀졌다.",
    "definition_en": "An almond-shaped structure within the temporal lobe that plays a central role in detecting fear stimuli, fear learning, and storing fear memories, found to be hyperactive in anxiety disorders.",
    "significance": "공포 처리의 신경학적 허브로서, 불안장애의 신경생물학적 이해에 핵심적이며 노출치료의 기제와도 관련된다.",
    "key_researchers": [
      {
        "name_ko": "조지프 르두",
        "name_en": "Joseph LeDoux",
        "contribution": "공포 조건화에서 편도체의 역할을 밝히고, '낮은 도로(low road)'와 '높은 도로(high road)' 공포 처리 경로를 제안했다."
      },
      {
        "name_ko": "마이클 데이비스",
        "name_en": "Michael Davis",
        "contribution": "편도체가 공포 학습과 소거에서 하는 역할을 동물 모델을 통해 체계적으로 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "ANXIETY_FFF_024"
      },
      {
        "name_ko": "HPA축",
        "name_en": "HPA Axis",
        "id": "ANXIETY_HPA_025"
      },
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      },
      {
        "name_ko": "신경영상",
        "name_en": "Neuroimaging",
        "id": "ASSESS_NIM_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편도체 = 뇌의 '경보 시스템': 위험 신호 감지 → 공포 반응 촉발",
      "differential": "편도체는 공포의 '빠른 탐지'를, 전전두엽은 공포의 '조절과 억제'를 담당한다.",
      "key_point": "LeDoux의 두 경로: 감각→편도체(fast/low road, 즉각 반응) vs. 감각→피질→편도체(slow/high road, 정교한 평가).",
      "common_mistake": "편도체가 공포'만' 담당한다고 보는 것 — 보상, 사회적 정보 처리 등 다른 정서 기능에도 관여한다."
    }
  },
  {
    "id": "ANXIETY_G7_027",
    "terminology": "GAD-7 (범불안장애 7문항 척도)",
    "terminology_ko": "GAD-7",
    "terminology_en": "Generalized Anxiety Disorder 7-item Scale",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "7개 문항으로 지난 2주간의 불안 증상 심각도를 측정하는 간편한 자기보고식 선별 도구로, 일차 진료와 연구에서 널리 사용된다.",
    "definition_en": "A brief 7-item self-report screening tool measuring anxiety symptom severity over the past two weeks, widely used in primary care and research settings.",
    "significance": "간결하면서도 양호한 심리측정적 속성을 가져 일차 진료에서의 불안 선별에 가장 널리 사용되는 도구이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "2006년 GAD-7을 개발하여 일차 진료에서 사용할 수 있는 간편하고 타당한 불안 선별 도구를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "벡 불안 척도",
        "name_en": "Beck Anxiety Inventory",
        "id": "ASSESS_BAI_014"
      },
      {
        "name_ko": "PHQ-9",
        "name_en": "PHQ-9",
        "id": "ASSESS_BDI_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "GAD-7: 7문항, 0~21점, 절단점 10점으로 불안 선별",
      "differential": "GAD-7은 불안의 인지적·심리적 증상 위주이고, BAI는 불안의 신체적 증상 위주이다.",
      "key_point": "0~4점 최소, 5~9점 경도, 10~14점 중등도, 15~21점 중증으로 분류한다.",
      "common_mistake": "GAD-7이 범불안장애만 선별한다고 보는 것 — 사회불안장애, 공황장애 등 다른 불안장애도 선별 가능하다."
    }
  },
  {
    "id": "ANXIETY_FRC_028",
    "terminology": "공포 조건화 (Fear Conditioning)",
    "terminology_ko": "공포 조건화",
    "terminology_en": "Fear Conditioning",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "중성 자극이 공포를 유발하는 자극과 반복적으로 짝지어져, 중성 자극만으로도 공포 반응이 유발되게 되는 고전적 조건형성의 한 유형이다.",
    "definition_en": "A type of classical conditioning in which a neutral stimulus becomes paired with a fear-inducing stimulus, eventually eliciting a fear response to the neutral stimulus alone.",
    "significance": "공포증과 불안장애의 발생 기제를 설명하는 핵심 실험 패러다임이며, 노출치료의 소거 학습 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "존 왓슨",
        "name_en": "John B. Watson",
        "contribution": "리틀 앨버트 실험에서 공포 조건화를 인간에게 최초로 입증하여 공포증의 학습적 기원을 보여주었다."
      },
      {
        "name_ko": "조지프 르두",
        "name_en": "Joseph LeDoux",
        "contribution": "편도체가 공포 조건화의 핵심 신경 기반임을 밝혀 공포의 신경과학적 이해를 혁신했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "불안의 학습모형",
        "name_en": "Learning Model of Anxiety",
        "id": "ANXIETY_LRN_010"
      },
      {
        "name_ko": "편도체",
        "name_en": "Amygdala",
        "id": "ANXIETY_AMY_026"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_017"
      },
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ANXIETY_SPH_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "리틀 앨버트: 흰쥐(CS) + 큰 소리(US) → 흰쥐만 보아도 공포(CR)",
      "differential": "공포 조건화는 공포의 '습득' 과정이고, 소거(extinction)는 조건화된 공포의 '감소' 과정이다.",
      "key_point": "소거된 공포가 자발적 회복, 갱신 효과 등으로 재출현할 수 있어, 완전한 '삭제'가 아닌 '새로운 학습'이다.",
      "common_mistake": "공포 조건화가 모든 공포의 유일한 원인이라고 보는 것 — 준비성, 관찰학습, 정보 전달도 공포 습득의 경로이다."
    }
  },
  {
    "id": "ANXIETY_AVO_029",
    "terminology": "회피행동 (Avoidance Behavior)",
    "terminology_ko": "회피행동",
    "terminology_en": "Avoidance Behavior",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "불안이나 공포를 유발하는 상황, 장소, 활동을 적극적으로 피하는 행동으로, 부적 강화에 의해 유지되며 불안장애의 핵심 유지 기제이다.",
    "definition_en": "The active avoidance of situations, places, or activities that trigger anxiety or fear, maintained by negative reinforcement and serving as a core maintaining mechanism of anxiety disorders.",
    "significance": "단기적으로 불안을 줄여주지만 장기적으로 공포를 유지·강화하는 역설적 기제로, 치료의 핵심 표적이다.",
    "key_researchers": [
      {
        "name_ko": "오빌 모워",
        "name_en": "O. Hobart Mowrer",
        "contribution": "이요인이론에서 회피가 부적 강화에 의해 유지됨을 설명하여 회피행동의 기제를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "안전행동",
        "name_en": "Safety Behaviors",
        "id": "ANXIETY_SAF_022"
      },
      {
        "name_ko": "노출치료",
        "name_en": "Exposure Therapy",
        "id": "ANXIETY_EXP_017"
      },
      {
        "name_ko": "불안의 학습모형",
        "name_en": "Learning Model of Anxiety",
        "id": "ANXIETY_LRN_010"
      },
      {
        "name_ko": "광장공포증",
        "name_en": "Agoraphobia",
        "id": "ANXIETY_AGO_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회피의 역설: 피하면 불안이 줄지만(부적 강화), 공포는 오히려 강화된다",
      "differential": "회피행동은 불안 상황을 '완전히 피하는' 것이고, 안전행동은 상황에 참여하면서 '미묘하게 피하는' 것이다.",
      "key_point": "노출치료의 핵심 원리는 회피를 중단하고 공포 자극에 직면하여 소거 학습을 촉진하는 것이다.",
      "common_mistake": "회피를 효과적인 대처전략으로 보는 것 — 회피는 불안을 줄이는 것이 아니라 공포의 범위를 점점 확대시킨다."
    }
  },
  {
    "id": "ANXIETY_REL_030",
    "terminology": "이완훈련 (Relaxation Training)",
    "terminology_ko": "이완훈련",
    "terminology_en": "Relaxation Training",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "점진적 근육이완법, 복식호흡, 자율훈련법 등을 통해 자율신경계의 이완 반응을 유도하는 기법으로, 불안의 신체적 증상을 감소시키는 데 효과적이다.",
    "definition_en": "Techniques such as progressive muscle relaxation, diaphragmatic breathing, and autogenic training that induce a relaxation response in the autonomic nervous system, effective in reducing physical symptoms of anxiety.",
    "significance": "체계적 둔감화의 필수 구성요소이며, 독립적인 스트레스 관리 기법으로도 널리 사용된다.",
    "key_researchers": [
      {
        "name_ko": "에드먼드 제이콥슨",
        "name_en": "Edmund Jacobson",
        "contribution": "1920년대 점진적 근육이완법(PMR)을 개발하여 근육 이완을 통한 불안 감소의 기초를 마련했다."
      },
      {
        "name_ko": "허버트 벤슨",
        "name_en": "Herbert Benson",
        "contribution": "이완 반응(relaxation response) 개념을 제안하여 이완의 생리적 기제를 과학적으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체계적 둔감화",
        "name_en": "Systematic Desensitization",
        "id": "ANXIETY_SYD_018"
      },
      {
        "name_ko": "투쟁-도피 반응",
        "name_en": "Fight-or-Flight Response",
        "id": "ANXIETY_FFF_024"
      },
      {
        "name_ko": "불안의 생리적 증상",
        "name_en": "Physiological Symptoms of Anxiety",
        "id": "ANXIETY_FRC_012"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      }
    ],
    "sub_types": [
      {
        "name": "점진적 근육이완법 (PMR)",
        "description": "근육군을 순서대로 긴장-이완하여 전체 이완을 유도하는 기법"
      },
      {
        "name": "복식호흡 (Diaphragmatic Breathing)",
        "description": "횡격막을 이용한 느리고 깊은 호흡으로 부교감신경을 활성화하는 기법"
      },
      {
        "name": "자율훈련법 (Autogenic Training)",
        "description": "자기암시를 통해 무거움, 따뜻함 등의 이완 감각을 유도하는 기법"
      }
    ],
    "quiz_hints": {
      "mnemonic": "이완훈련 = 교감신경(흥분) ↓, 부교감신경(이완) ↑ = '브레이크' 작동",
      "differential": "이완훈련은 신체적 이완에 초점을 맞추고, 인지 재구성은 사고 변화에 초점을 맞춘다.",
      "key_point": "점진적 근육이완법(PMR)이 가장 널리 사용되며, 16개 근육군에서 4~7개 근육군으로 점차 축소하여 연습한다.",
      "common_mistake": "이완훈련이 노출치료를 대체할 수 있다고 보는 것 — 이완은 보조 기법이며 공포 감소의 핵심은 노출이다."
    }
  },
  {
    "id": "ANXIETY_PRE_031",
    "terminology": "준비성 이론 (Preparedness Theory)",
    "terminology_ko": "준비성 이론",
    "terminology_en": "Preparedness Theory",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "진화적으로 생존에 위협이 되었던 자극(뱀, 높이, 밀폐공간 등)에 대해 공포가 더 쉽게 학습되고 소거가 어렵다는 이론으로, 공포증의 비무작위적 분포를 설명한다.",
    "definition_en": "A theory proposing that fear is more easily learned and harder to extinguish for stimuli that posed evolutionary survival threats (snakes, heights, enclosed spaces), explaining the non-random distribution of phobias.",
    "significance": "공포증이 특정 대상(뱀, 거미, 높이)에 편중되는 현상을 설명하며, 학습이론과 진화심리학을 연결하는 다리 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "1971년 준비성 개념을 공포와 공포증에 적용하여, 진화적 준비가 공포 학습에 미치는 영향을 이론화했다."
      },
      {
        "name_ko": "아르네 외만",
        "name_en": "Arne Öhman",
        "contribution": "진화적으로 관련된 자극(뱀, 거미)에 대한 공포 조건화가 더 빠르고 소거가 어려움을 실험적으로 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "공포 조건화",
        "name_en": "Fear Conditioning",
        "id": "ANXIETY_FRC_028"
      },
      {
        "name_ko": "특정공포증",
        "name_en": "Specific Phobia",
        "id": "ANXIETY_SPH_005"
      },
      {
        "name_ko": "불안의 학습모형",
        "name_en": "Learning Model of Anxiety",
        "id": "ANXIETY_LRN_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "준비성 = 진화적 위험 자극(뱀·거미·높이)에 대해 공포가 '준비'되어 있다",
      "differential": "준비성 이론은 '무엇을' 두려워하는지(내용), 학습모형은 '어떻게' 공포가 형성되는지(과정)를 설명한다.",
      "key_point": "현대에 흔한 위험(자동차, 전기)보다 진화적 위험(뱀, 높이)에 대한 공포증이 더 흔한 이유를 설명한다.",
      "common_mistake": "준비성이 공포를 '결정'한다고 보는 것 — 준비성은 공포 학습의 '용이성'을 높이는 것이지, 공포를 불가피하게 만드는 것은 아니다."
    }
  },
  {
    "id": "ANXIETY_IU_032",
    "terminology": "불확실성에 대한 인내력 부족 (Intolerance of Uncertainty)",
    "terminology_ko": "불확실성에 대한 인내력 부족",
    "terminology_en": "Intolerance of Uncertainty",
    "category": "ANXIETY",
    "category_name": "불안장애 (Anxiety Disorders)",
    "definition": "불확실한 상황이나 결과에 대해 과도하게 위협적으로 반응하는 인지적 경향으로, 범불안장애의 핵심 인지적 취약성 요인으로 규명되었다.",
    "definition_en": "A cognitive tendency to respond excessively to uncertain situations or outcomes as threatening, identified as a core cognitive vulnerability factor for generalized anxiety disorder.",
    "significance": "범불안장애의 만성적 걱정을 설명하는 핵심 개념으로, 걱정을 통해 불확실성을 감소시키려는 비효과적 시도로 이해된다.",
    "key_researchers": [
      {
        "name_ko": "미셸 뒤가",
        "name_en": "Michel Dugas",
        "contribution": "불확실성에 대한 인내력 부족이 GAD의 핵심 취약성임을 밝히고, 이를 표적으로 하는 치료 프로토콜을 개발했다."
      },
      {
        "name_ko": "마크 프리스턴",
        "name_en": "Mark Freeston",
        "contribution": "불확실성에 대한 인내력 부족 척도(IUS)를 개발하여 이 구성개념의 측정을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      },
      {
        "name_ko": "인지행동치료",
        "name_en": "Cognitive-Behavioral Therapy",
        "id": "ANXIETY_CBT_020"
      },
      {
        "name_ko": "불안의 인지모형",
        "name_en": "Beck's Cognitive Model of Anxiety",
        "id": "ANXIETY_BEC_009"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "IU = '모르는 것을 못 참는' 성향 → 끊임없이 걱정으로 확인하려 함",
      "differential": "불확실성에 대한 인내력 부족은 '불확실한 미래'에 대한 것이고, 불안 민감성은 '불안 증상 자체'에 대한 것이다.",
      "key_point": "IU가 높은 사람은 불확실성 자체를 위협으로 인식하여, 확률이 낮은 부정적 결과도 크게 걱정한다.",
      "common_mistake": "걱정이 불확실성을 실제로 감소시킨다고 보는 것 — 걱정은 불확실성을 줄이지 못하며 오히려 불안을 강화한다."
    }
  }
];

TERMS_DATA.OBSESS = [
  {
    "id": "OBSESS_OCD_001",
    "terminology": "강박장애 (Obsessive-Compulsive Disorder)",
    "terminology_ko": "강박장애",
    "terminology_en": "Obsessive-Compulsive Disorder",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "반복적이고 원치 않는 강박사고와 이를 줄이기 위한 반복적 강박행동이 특징인 정신장애로, 일상생활에 심각한 고통과 기능 저하를 초래한다.",
    "definition_en": "A mental disorder characterized by recurrent, unwanted obsessions and repetitive compulsions performed to reduce distress, causing significant impairment in daily functioning.",
    "significance": "불안장애에서 분리되어 DSM-5에서 독립 범주로 재분류된 대표적 장애로, 신경생물학적 기반이 가장 잘 규명된 정신장애 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 라포포트",
        "name_en": "Judith Rapoport",
        "contribution": "OCD의 신경생물학적 기반 연구 및 대중적 인식 확산에 기여"
      },
      {
        "name_ko": "폴 살코프스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "OCD의 인지모형 개발, 침습적 사고의 잘못된 평가가 핵심이라고 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [
      {
        "name": "오염형",
        "description": "오염에 대한 강박사고와 세척/청소 강박행동"
      },
      {
        "name": "확인형",
        "description": "해를 끼칠 수 있다는 강박사고와 반복적 확인 행동"
      },
      {
        "name": "대칭/정렬형",
        "description": "대칭이나 정확성에 대한 욕구와 정렬/정리 행동"
      },
      {
        "name": "금기사고형",
        "description": "공격적, 성적, 종교적 침습사고와 정신적 의례행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "OCD = Obsessions(사고) + Compulsions(행동)의 악순환",
      "differential": "범불안장애는 현실적 걱정이 중심이나, 강박장애는 비합리적 침습사고와 의례적 행동이 핵심이다",
      "key_point": "DSM-5에서 불안장애 범주에서 분리되어 독립 범주(강박 및 관련 장애)로 재분류되었다",
      "common_mistake": "강박장애를 단순히 깔끔한 성격이나 완벽주의와 혼동하는 것은 오류이다. OCD는 자아이질적이며 심각한 고통을 수반한다"
    }
  },
  {
    "id": "OBSESS_OBS_002",
    "terminology": "강박사고 (Obsessions)",
    "terminology_ko": "강박사고",
    "terminology_en": "Obsessions",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "개인의 의지와 무관하게 반복적으로 떠오르는 원치 않는 침습적 사고, 심상 또는 충동으로, 현저한 불안이나 고통을 유발한다.",
    "definition_en": "Recurrent, unwanted intrusive thoughts, images, or urges that arise involuntarily and cause marked anxiety or distress to the individual.",
    "significance": "강박장애의 핵심 구성 요소로서, 인지적 접근에서는 이러한 사고에 대한 잘못된 해석이 장애를 유지시키는 핵심 기제로 본다.",
    "key_researchers": [
      {
        "name_ko": "폴 살코프스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "침습적 사고 자체가 아니라 그에 대한 과도한 책임감 해석이 OCD를 유발한다고 제안"
      },
      {
        "name_ko": "스탠리 라크만",
        "name_en": "Stanley Rachman",
        "contribution": "정상인도 침습적 사고를 경험하며, OCD 환자는 이를 더 위협적으로 평가한다는 것을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "침습적 사고",
        "name_en": "Intrusive Thoughts",
        "id": "OBSESS_INT_007"
      },
      {
        "name_ko": "사고-행동 융합",
        "name_en": "Thought-Action Fusion",
        "id": "OBSESS_TAF_008"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "",
      "differential": "걱정(worry)은 언어적이고 미래지향적이나, 강박사고는 침습적이고 자아이질적인 심상이나 충동을 포함한다",
      "key_point": "정상인의 약 80~90%도 침습적 사고를 경험하지만, OCD 환자는 이를 과도하게 의미 부여한다",
      "common_mistake": "강박사고를 단순한 걱정이나 불안과 동일시하는 것은 오류이다. 강박사고는 자아이질적이며 특유의 침습성을 가진다"
    }
  },
  {
    "id": "OBSESS_COM_003",
    "terminology": "강박행동 (Compulsions)",
    "terminology_ko": "강박행동",
    "terminology_en": "Compulsions",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "강박사고로 인한 불안을 줄이거나 두려운 상황을 예방하기 위해 수행하는 반복적인 행동이나 정신적 행위로, 실제로는 과도하거나 비합리적이다.",
    "definition_en": "Repetitive behaviors or mental acts performed to reduce anxiety caused by obsessions or to prevent a dreaded situation, which are excessive or unrealistic in nature.",
    "significance": "강박행동은 단기적으로 불안을 감소시키지만 장기적으로 강박 순환을 유지·강화하는 역할을 하며, 이것이 ERP 치료의 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "빅터 마이어",
        "name_en": "Victor Meyer",
        "contribution": "강박행동에 대한 반응방지 기법을 최초로 개발하여 행동치료의 기초를 마련"
      },
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "노출 및 반응방지(ERP)의 체계적 프로토콜을 개발하고 효과를 실증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      },
      {
        "name_ko": "정신적 강박행동",
        "name_en": "Mental Compulsions",
        "id": "OBSESS_MEN_025"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "OBSESS_AVO_026"
      }
    ],
    "sub_types": [
      {
        "name": "세척/청소",
        "description": "반복적 손씻기, 소독, 청소 등"
      },
      {
        "name": "확인",
        "description": "문단속, 가스밸브, 전원 등 반복 확인"
      },
      {
        "name": "정렬/정리",
        "description": "대칭이나 특정 순서로 물건 배열"
      },
      {
        "name": "정신적 의례",
        "description": "숫자 세기, 기도, 특정 단어 반복 등 내적 행위"
      }
    ],
    "quiz_hints": {
      "mnemonic": "강박행동 = 불안의 '소화기'처럼 보이지만 실제로는 불을 키우는 '부채'",
      "differential": "습관이나 의례행동은 대개 즐거움을 주지만, 강박행동은 불안 감소가 목적이며 자발적 즐거움이 없다",
      "key_point": "강박행동은 외현적 행동뿐 아니라 숫자 세기, 기도 등 정신적 행위도 포함한다",
      "common_mistake": "강박행동을 반드시 눈에 보이는 행동으로만 한정하는 것은 오류이다. 정신적 강박행동도 존재한다"
    }
  },
  {
    "id": "OBSESS_CON_004",
    "terminology": "오염공포 (Contamination Fear)",
    "terminology_ko": "오염공포",
    "terminology_en": "Contamination Fear",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "세균, 질병, 화학물질, 혹은 추상적인 '오염'에 대한 과도하고 비합리적인 두려움으로, 반복적 세척이나 회피 행동으로 이어진다.",
    "definition_en": "An excessive and irrational fear of germs, disease, chemicals, or abstract contamination, leading to repetitive washing or avoidance behaviors.",
    "significance": "가장 흔한 강박사고 유형 중 하나로, 진화심리학적 관점에서 질병회피 기제의 과활성화로 설명되며 문화적 차이도 관찰된다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 라크만",
        "name_en": "Stanley Rachman",
        "contribution": "정신적 오염 개념을 제안하여 물리적 접촉 없이도 오염감을 느낄 수 있음을 입증"
      },
      {
        "name_ko": "폴 로진",
        "name_en": "Paul Rozin",
        "contribution": "혐오감과 오염 인지의 심리학적 기제 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "회피행동",
        "name_en": "Avoidance Behavior",
        "id": "OBSESS_AVO_026"
      }
    ],
    "sub_types": [
      {
        "name": "물리적 오염",
        "description": "세균, 바이러스, 화학물질 등 실체적 오염원에 대한 두려움"
      },
      {
        "name": "정신적 오염",
        "description": "물리적 접촉 없이 '더럽혀진' 느낌, 대인관계 위반과 관련"
      }
    ],
    "quiz_hints": {
      "mnemonic": "",
      "differential": "건강염려증(질병불안장애)은 이미 질병에 걸렸다는 두려움이 중심이나, 오염공포는 오염원에 노출되는 것 자체가 핵심이다",
      "key_point": "물리적 접촉 없이도 경험하는 '정신적 오염(mental contamination)' 개념이 중요하다",
      "common_mistake": "오염공포를 단순한 결벽증으로 치부하는 것은 오류이다. 정신적 오염까지 포함하는 복합적 현상이다"
    }
  },
  {
    "id": "OBSESS_CHK_005",
    "terminology": "확인강박 (Checking Compulsions)",
    "terminology_ko": "확인강박",
    "terminology_en": "Checking Compulsions",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "해를 끼치거나 실수를 했을 수 있다는 의심으로 인해 문단속, 가스밸브, 전기제품 등을 반복적으로 확인하는 강박행동이다.",
    "definition_en": "Repetitive checking behaviors such as locks, stoves, and appliances, driven by doubt about having caused harm or made an error.",
    "significance": "오염형과 함께 가장 흔한 강박행동 유형이며, 기억에 대한 불신과 병적 의심이 핵심 기제로 작용한다.",
    "key_researchers": [
      {
        "name_ko": "마르셀 반 덴 하우트",
        "name_en": "Marcel van den Hout",
        "contribution": "반복 확인이 오히려 기억 불신을 증가시킨다는 역설적 효과를 발견"
      },
      {
        "name_ko": "아담 라도마스키",
        "name_en": "Adam Radomsky",
        "contribution": "확인강박에서 기억 정확도와 기억 확신의 괴리를 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "책임감 과대평가",
        "name_en": "Inflated Responsibility",
        "id": "OBSESS_RES_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "확인하면 할수록 기억이 흐려진다 → 확인의 역설",
      "differential": "범불안장애의 반복적 걱정은 다양한 주제를 넘나드나, 확인강박은 특정 상황(문단속 등)에 고착된다",
      "key_point": "반복 확인이 기억에 대한 확신을 오히려 감소시키는 역설적 효과가 핵심이다",
      "common_mistake": "확인강박을 단순한 조심성이나 꼼꼼함으로 오해하면 안 된다. 병적 의심과 기억 불신이 핵심 기제이다"
    }
  },
  {
    "id": "OBSESS_SYM_006",
    "terminology": "대칭/정렬 강박 (Symmetry/Ordering Obsessions)",
    "terminology_ko": "대칭/정렬 강박",
    "terminology_en": "Symmetry/Ordering Obsessions",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "사물이 대칭적이거나 특정한 순서·배열로 되어 있어야 한다는 강렬한 욕구를 느끼며, 그렇지 않으면 극심한 불편감을 경험하는 강박 유형이다.",
    "definition_en": "An intense need for things to be symmetrical or in a specific order or arrangement, with extreme discomfort when they are not aligned properly.",
    "significance": "전형적인 불안 기반이 아닌 '불완전감(not just right experience)'이 동기인 독특한 OCD 하위유형으로, 다른 유형과 기제가 다를 수 있다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 서마펠트",
        "name_en": "David Summerfeldt",
        "contribution": "불완전감(incompleteness)이 대칭/정렬 강박의 핵심 동기임을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "불완전감",
        "name_en": "Incompleteness",
        "id": "OBSESS_INC_024"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대칭강박의 동기 = 불안이 아닌 '불완전감(NJR: Not Just Right)'",
      "differential": "확인강박은 해를 방지하려는 '불안'이 동기이나, 대칭강박은 '안 맞는 느낌(불완전감)'이 주된 동기이다",
      "key_point": "불안보다 불완전감(not just right experience)이 핵심 동기인 독특한 OCD 하위유형이다",
      "common_mistake": "대칭강박을 단순히 미적 선호나 성격 특성으로 치부하면 안 된다. 이에 따른 고통과 기능 저하가 진단의 핵심이다"
    }
  },
  {
    "id": "OBSESS_INT_007",
    "terminology": "침습적 사고 (Intrusive Thoughts)",
    "terminology_ko": "침습적 사고",
    "terminology_en": "Intrusive Thoughts",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "개인의 의지와 무관하게 갑자기 의식에 침투하는 원치 않는 사고, 심상 또는 충동으로, 일반인에게도 보편적으로 나타나는 정상적 인지 현상이다.",
    "definition_en": "Unwanted thoughts, images, or urges that involuntarily intrude into consciousness, a universal cognitive phenomenon experienced by the general population as well.",
    "significance": "정상인의 80~90%가 경험하는 보편적 현상이라는 발견은 OCD 인지이론의 핵심 기반이 되었으며, 사고의 내용이 아닌 해석이 병리의 관건임을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 라크만",
        "name_en": "Stanley Rachman",
        "contribution": "정상인도 OCD 환자와 유사한 침습적 사고를 경험함을 최초로 실증적으로 입증"
      },
      {
        "name_ko": "크리스틴 퍼던",
        "name_en": "Christine Purdon",
        "contribution": "침습적 사고의 평가와 통제 시도가 역설적으로 사고를 강화함을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "사고-행동 융합",
        "name_en": "Thought-Action Fusion",
        "id": "OBSESS_TAF_008"
      },
      {
        "name_ko": "사고억제의 역설",
        "name_en": "Thought Suppression Paradox",
        "id": "OBSESS_SUP_022"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "침습적 사고 = 모든 사람에게 나타나는 '정신적 팝업 광고'",
      "differential": "강박사고는 침습적 사고에 대한 병적 해석과 반복이 추가된 것이며, 침습적 사고 자체는 정상적 현상이다",
      "key_point": "침습적 사고의 내용(content)이 아닌 그에 대한 해석(appraisal)이 정상과 병리를 구분한다",
      "common_mistake": "침습적 사고를 경험하는 것 자체가 비정상이라고 판단하는 것은 오류이다. 대부분의 사람이 경험한다"
    }
  },
  {
    "id": "OBSESS_TAF_008",
    "terminology": "사고-행동 융합 (Thought-Action Fusion)",
    "terminology_ko": "사고-행동 융합",
    "terminology_en": "Thought-Action Fusion",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "나쁜 일을 생각하는 것이 실제로 나쁜 일이 일어날 가능성을 높이거나(가능성 TAF), 나쁜 일을 생각하는 것 자체가 도덕적으로 나쁜 행위와 동등하다고(도덕성 TAF) 믿는 인지적 편향이다.",
    "definition_en": "A cognitive bias involving beliefs that thinking about a bad event increases its likelihood (likelihood TAF) or that thinking about something bad is morally equivalent to actually doing it (moral TAF).",
    "significance": "OCD의 인지모형에서 침습적 사고를 위협적으로 평가하게 만드는 핵심 인지적 편향으로, 치료에서 핵심적 개입 대상이다.",
    "key_researchers": [
      {
        "name_ko": "스탠리 라크만",
        "name_en": "Stanley Rachman",
        "contribution": "사고-행동 융합 개념을 최초로 체계화하고 측정도구를 개발"
      },
      {
        "name_ko": "다니엘 새소나",
        "name_en": "Danielle Shafran",
        "contribution": "사고-행동 융합의 두 하위유형(가능성/도덕성)을 구분하고 실증 연구 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "침습적 사고",
        "name_en": "Intrusive Thoughts",
        "id": "OBSESS_INT_007"
      },
      {
        "name_ko": "책임감 과대평가",
        "name_en": "Inflated Responsibility",
        "id": "OBSESS_RES_021"
      },
      {
        "name_ko": "마법적 사고",
        "name_en": "Magical Thinking",
        "id": "OBSESS_MAG_023"
      }
    ],
    "sub_types": [
      {
        "name": "가능성 TAF",
        "description": "나쁜 생각이 실제 사건의 가능성을 높인다는 믿음"
      },
      {
        "name": "도덕성 TAF",
        "description": "나쁜 생각 자체가 행동만큼 도덕적으로 나쁘다는 믿음"
      }
    ],
    "quiz_hints": {
      "mnemonic": "TAF = Thought(생각) = Action(행동)이라는 잘못된 등식",
      "differential": "마법적 사고는 사고가 물리적 세계에 영향을 준다는 일반적 믿음이나, TAF는 구체적으로 가능성과 도덕성 차원에서 사고와 행동을 동일시한다",
      "key_point": "가능성 TAF(생각하면 일어난다)와 도덕성 TAF(생각만으로 도덕적 위반)의 두 하위유형이 있다",
      "common_mistake": "TAF를 모든 인지적 편향의 총칭으로 사용하면 안 된다. 사고와 행동의 동일시라는 특정 편향에만 해당한다"
    }
  },
  {
    "id": "OBSESS_BDD_009",
    "terminology": "신체변형장애 (Body Dysmorphic Disorder)",
    "terminology_ko": "신체변형장애",
    "terminology_en": "Body Dysmorphic Disorder",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "타인에게는 관찰되지 않거나 미미한 외모 결함에 대해 과도하게 몰두하며, 반복적 확인이나 위장 행동을 동반하는 장애이다.",
    "definition_en": "A disorder involving excessive preoccupation with perceived flaws in physical appearance that are not observable or appear minor to others, accompanied by repetitive checking or camouflaging behaviors.",
    "significance": "OCD와 유사한 인지행동적 기제를 공유하여 DSM-5에서 강박 관련 장애로 분류되었으며, 성형수술 의존 등 심각한 기능 저하를 초래한다.",
    "key_researchers": [
      {
        "name_ko": "캐서린 필립스",
        "name_en": "Katharine Phillips",
        "contribution": "BDD의 체계적 진단 기준과 치료 프로토콜을 개발한 선구적 연구자"
      },
      {
        "name_ko": "데이비드 베일",
        "name_en": "David Veale",
        "contribution": "BDD의 인지행동모형을 개발하고 CBT 기반 치료 효과를 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "근육변형장애",
        "name_en": "Muscle Dysmorphia",
        "id": "OBSESS_MDD_010"
      },
      {
        "name_ko": "신경성식욕부진",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_AN_001"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SAD_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BDD = Body(외모) Dysmorphic(왜곡된) Disorder → 거울 속 왜곡",
      "differential": "신경성식욕부진은 체중/체형 전반에 몰두하나, BDD는 특정 신체 부위의 미세한 결함에 몰두한다",
      "key_point": "지각된 결함이 타인에게는 관찰되지 않거나 미미하다는 점이 핵심 진단 기준이다",
      "common_mistake": "BDD를 단순한 외모 불만족이나 허영심으로 오해하면 안 된다. 심각한 고통과 기능 저하를 수반하는 정신장애이다"
    }
  },
  {
    "id": "OBSESS_MDD_010",
    "terminology": "근육변형장애 (Muscle Dysmorphia)",
    "terminology_ko": "근육변형장애",
    "terminology_en": "Muscle Dysmorphia",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 체격이 충분히 크거나 근육질이 아니라고 인식하여 과도한 운동, 식이 제한, 스테로이드 사용 등에 몰두하는 신체변형장애의 하위유형이다.",
    "definition_en": "A subtype of body dysmorphic disorder involving a preoccupation that one's body build is insufficiently large or muscular, leading to excessive exercise, dietary restriction, and steroid use.",
    "significance": "주로 남성에서 나타나는 BDD의 하위유형으로, 스테로이드 남용과 관련된 공중보건 문제와 연결되며 남성의 신체 이미지 문제를 조명한다.",
    "key_researchers": [
      {
        "name_ko": "해리슨 포프",
        "name_en": "Harrison Pope",
        "contribution": "근육변형장애를 최초로 '역 신경성식욕부진(reverse anorexia)'으로 명명하고 체계적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체변형장애",
        "name_en": "Body Dysmorphic Disorder",
        "id": "OBSESS_BDD_009"
      },
      {
        "name_ko": "신경성식욕부진",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_AN_001"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "근육변형 = '역방향 식욕부진(reverse anorexia)' → 충분히 크지 않다는 왜곡",
      "differential": "신경성식욕부진은 체중이 너무 많다고 느끼나, 근육변형장애는 체격이 충분히 크지 않다고 느끼는 정반대 방향의 왜곡이다",
      "key_point": "주로 남성에게서 나타나며, 최초에는 '역 신경성식욕부진(reverse anorexia)'으로 명명되었다",
      "common_mistake": "근육변형장애를 단순한 운동 열정이나 보디빌딩 취미와 혼동하면 안 된다. 임상적 고통과 기능 손상이 동반된다"
    }
  },
  {
    "id": "OBSESS_HOA_011",
    "terminology": "저장장애 (Hoarding Disorder)",
    "terminology_ko": "저장장애",
    "terminology_en": "Hoarding Disorder",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "소유물을 버리거나 분리하는 것에 지속적인 어려움을 느끼며, 과도한 물건 축적으로 생활공간이 사용 불가능해지는 장애이다.",
    "definition_en": "A disorder characterized by persistent difficulty discarding or parting with possessions, resulting in excessive accumulation that renders living spaces unusable.",
    "significance": "DSM-5에서 OCD의 하위유형이 아닌 독립 진단으로 분류되었으며, 노인 인구에서 공중보건 및 안전 문제와 직결된다.",
    "key_researchers": [
      {
        "name_ko": "랜디 프로스트",
        "name_en": "Randy Frost",
        "contribution": "저장행동의 인지행동모형을 개발하고 저장장애를 독립 진단으로 확립하는 데 기여"
      },
      {
        "name_ko": "게일 스테케티",
        "name_en": "Gail Steketee",
        "contribution": "저장장애의 CBT 치료 프로토콜을 개발하고 효과를 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "과도한 획득 동반",
        "description": "불필요한 물건을 지나치게 구매하거나 수집하는 행동이 동반됨"
      },
      {
        "name": "과도한 획득 비동반",
        "description": "새로운 물건을 획득하지는 않으나 기존 물건을 버리지 못함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "저장장애: 버리기 어려움 + 과도 축적 + 생활공간 마비의 3요소",
      "differential": "OCD의 저장행동은 자아이질적이고 다른 강박증상을 동반하나, 저장장애는 자아동조적이며 물건에 정서적 애착을 느낀다",
      "key_point": "DSM-5에서 OCD의 하위유형이 아닌 독립 진단으로 분류되었다. 치료 반응이 OCD와 다르기 때문이다",
      "common_mistake": "저장장애를 단순한 게으름이나 정리 능력 부족으로 치부하면 안 된다. 의사결정과 정서조절의 어려움이 핵심이다"
    }
  },
  {
    "id": "OBSESS_TTM_012",
    "terminology": "발모장애 (Trichotillomania)",
    "terminology_ko": "발모장애",
    "terminology_en": "Trichotillomania",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 머리카락이나 체모를 반복적으로 뽑는 행동을 보이며, 이를 멈추려는 시도가 반복적으로 실패하여 눈에 띄는 탈모가 발생하는 장애이다.",
    "definition_en": "A disorder involving repetitive pulling out of one's own hair, resulting in noticeable hair loss despite repeated attempts to decrease or stop the behavior.",
    "significance": "신체초점반복행동(BFRB)의 대표적 장애로, 습관적이고 자동적인 행동과 의도적이고 집중적인 행동이 공존하며 각각 다른 치료 전략이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "더글러스 우즈",
        "name_en": "Douglas Woods",
        "contribution": "습관역전훈련(HRT)의 발모장애 적용을 체계화하고 치료 효과를 검증"
      },
      {
        "name_ko": "마틴 프랭클린",
        "name_en": "Martin Franklin",
        "contribution": "발모장애의 행동치료 효과에 대한 대규모 임상시험을 주도"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피부뜯기장애",
        "name_en": "Excoriation Disorder",
        "id": "OBSESS_EXC_013"
      },
      {
        "name_ko": "습관역전훈련",
        "name_en": "Habit Reversal Training",
        "id": "OBSESS_HRT_027"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [
      {
        "name": "자동적 유형",
        "description": "무의식적으로, 다른 활동 중에 자동적으로 머리를 뽑는 유형"
      },
      {
        "name": "집중적 유형",
        "description": "긴장이나 충동을 의식적으로 느끼고 이에 반응하여 뽑는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Tricho(머리카락) + till(뽑다) + mania(충동) = 머리카락 뽑기 충동",
      "differential": "강박장애는 불안 감소 목적의 의례적 행동이나, 발모장애는 쾌감이나 긴장 해소가 목적인 충동적 행동이다",
      "key_point": "자동적 유형(무의식적)과 집중적 유형(의식적 충동)으로 구분되며, 치료 접근이 다르다",
      "common_mistake": "발모장애를 자해행동으로 분류하면 안 된다. 자해와는 목적과 기제가 다른 신체초점반복행동이다"
    }
  },
  {
    "id": "OBSESS_EXC_013",
    "terminology": "피부뜯기장애 (Excoriation Disorder)",
    "terminology_ko": "피부뜯기장애",
    "terminology_en": "Excoriation Disorder",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 피부를 반복적으로 뜯거나 긁어 피부 손상을 유발하며, 이 행동을 줄이거나 멈추려는 시도가 반복적으로 실패하는 장애이다.",
    "definition_en": "A disorder involving repetitive picking at one's own skin, resulting in skin lesions, despite repeated attempts to decrease or stop the behavior.",
    "significance": "발모장애와 함께 신체초점반복행동(BFRB)으로 분류되며, DSM-5에서 처음으로 독립 진단으로 공식 인정되었다.",
    "key_researchers": [
      {
        "name_ko": "존 그랜트",
        "name_en": "Jon Grant",
        "contribution": "피부뜯기장애의 약물치료(NAC 등)와 행동치료 효과를 체계적으로 연구"
      },
      {
        "name_ko": "낸시 케너",
        "name_en": "Nancy Keuthen",
        "contribution": "피부뜯기장애의 평가도구 개발 및 인지행동치료 프로토콜 표준화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발모장애",
        "name_en": "Trichotillomania",
        "id": "OBSESS_TTM_012"
      },
      {
        "name_ko": "습관역전훈련",
        "name_en": "Habit Reversal Training",
        "id": "OBSESS_HRT_027"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [
      {
        "name": "자동적 유형",
        "description": "다른 활동 중 무의식적으로 피부를 뜯는 유형"
      },
      {
        "name": "집중적 유형",
        "description": "피부 불완전함을 인식하고 의도적으로 뜯는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Excoriation = Ex(벗기다) + cor(피부) → 피부를 반복적으로 벗기는 장애",
      "differential": "비자살적 자해는 정서적 고통 경감이 목적이나, 피부뜯기장애는 충동적/습관적 행동으로 자해 의도가 없다",
      "key_point": "DSM-5에서 처음으로 독립 진단으로 인정되었으며, 발모장애와 함께 BFRB(신체초점반복행동)로 분류된다",
      "common_mistake": "피부뜯기장애를 고의적 자해행동과 혼동하면 안 된다. 동기와 기제가 근본적으로 다르다"
    }
  },
  {
    "id": "OBSESS_ORS_014",
    "terminology": "후각참조증후군 (Olfactory Reference Syndrome)",
    "terminology_ko": "후각참조증후군",
    "terminology_en": "Olfactory Reference Syndrome",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 몸에서 불쾌하거나 역겨운 냄새가 나고 있다고 지속적으로 몰두하지만, 실제로 타인이 감지할 수 없는 냄새에 대한 과도한 염려이다.",
    "definition_en": "A persistent preoccupation with the belief that one emits a foul or unpleasant body odor that is not actually perceived by others, leading to significant distress.",
    "significance": "DSM-5에서 '기타 강박 관련 장애'에 포함된 비교적 새로운 진단으로, BDD와 유사한 인지행동 기제를 공유한다.",
    "key_researchers": [
      {
        "name_ko": "캐서린 필립스",
        "name_en": "Katharine Phillips",
        "contribution": "후각참조증후군의 진단 기준 체계화 및 BDD와의 유사성 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체변형장애",
        "name_en": "Body Dysmorphic Disorder",
        "id": "OBSESS_BDD_009"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SAD_003"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ORS = 보이지 않는 냄새에 대한 BDD의 '후각 버전'",
      "differential": "BDD는 시각적 외모 결함에 몰두하나, 후각참조증후군은 후각적 결함(체취)에 몰두한다. 기제는 유사하다",
      "key_point": "타인이 감지할 수 없는 냄새에 대한 과도한 몰두이며, BDD와 유사한 인지행동 기제를 공유한다",
      "common_mistake": "후각참조증후군을 망상장애로 분류하면 안 된다. 통찰력 수준이 다양하며 강박 관련 장애에 속한다"
    }
  },
  {
    "id": "OBSESS_ERP_015",
    "terminology": "노출 및 반응방지 (Exposure and Response Prevention)",
    "terminology_ko": "노출 및 반응방지",
    "terminology_en": "Exposure and Response Prevention",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "강박사고를 유발하는 자극에 의도적으로 노출시키면서 강박행동을 하지 않도록 차단하여, 불안이 자연적으로 소거되도록 하는 행동치료 기법이다.",
    "definition_en": "A behavioral therapy technique that deliberately exposes the patient to obsession-triggering stimuli while preventing compulsive responses, allowing anxiety to naturally extinguish.",
    "significance": "OCD 치료에서 가장 강력한 근거를 가진 심리치료법으로, SSRI와 동등하거나 우수한 효과를 보이며 1급 권고 치료이다.",
    "key_researchers": [
      {
        "name_ko": "빅터 마이어",
        "name_en": "Victor Meyer",
        "contribution": "OCD에 대한 반응방지 기법을 최초로 개발하고 적용(1966)"
      },
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "ERP의 체계적 매뉴얼화와 대규모 효과 연구를 통해 표준 치료법으로 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "Y-BOCS",
        "name_en": "Y-BOCS",
        "id": "OBSESS_YBO_016"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ERP = Exposure(노출) + Response(반응) Prevention(방지) → 두려움에 직면하되 의례는 금지",
      "differential": "체계적 둔감화는 이완과 함께 점진적으로 노출하나, ERP는 이완 없이 불안을 직접 경험하며 반응방지가 핵심이다",
      "key_point": "OCD 치료에서 가장 강력한 근거 기반 심리치료법이며, SSRI와 동등하거나 우수한 효과를 보인다",
      "common_mistake": "ERP를 단순한 노출치료와 동일시하면 안 된다. '반응방지' 요소가 ERP를 다른 노출치료와 구분하는 핵심이다"
    }
  },
  {
    "id": "OBSESS_YBO_016",
    "terminology": "예일-브라운 강박 척도 (Yale-Brown Obsessive Compulsive Scale)",
    "terminology_ko": "예일-브라운 강박 척도",
    "terminology_en": "Yale-Brown Obsessive Compulsive Scale",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "강박사고와 강박행동의 심각도를 시간소요, 고통, 간섭, 저항, 통제의 5개 차원에서 평가하는 반구조화 면담 척도이다.",
    "definition_en": "A semi-structured interview scale assessing the severity of obsessions and compulsions across five dimensions: time occupied, distress, interference, resistance, and control.",
    "significance": "OCD 연구와 임상에서 가장 널리 사용되는 표준 평가도구로, 치료 효과 측정의 금본위(gold standard)이다.",
    "key_researchers": [
      {
        "name_ko": "웨인 굿맨",
        "name_en": "Wayne Goodman",
        "contribution": "Y-BOCS를 개발하여 OCD 심각도의 표준 측정도구로 확립"
      },
      {
        "name_ko": "로렌스 프라이스",
        "name_en": "Lawrence Price",
        "contribution": "Y-BOCS의 심리측정적 속성을 검증하고 신뢰도·타당도를 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Y-BOCS: Yale + Brown 대학 공동 개발, 5개 차원 × 2(사고+행동) = 10문항",
      "differential": "OCI-R(강박 목록)은 자기보고식이나, Y-BOCS는 면담 기반 평가로 더 정확한 심각도 측정이 가능하다",
      "key_point": "OCD 심각도 측정의 금본위(gold standard)로, 강박사고와 강박행동 각각 5개 차원으로 평가한다",
      "common_mistake": "Y-BOCS가 강박의 내용(유형)을 평가하는 도구로 오해하면 안 된다. 심각도를 측정하는 도구이다"
    }
  },
  {
    "id": "OBSESS_EDY_017",
    "terminology": "자아이질적 (Ego-Dystonic)",
    "terminology_ko": "자아이질적",
    "terminology_en": "Ego-Dystonic",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 사고, 충동, 행동이 자기 자신의 가치관이나 자아 정체성과 일치하지 않는다고 느끼는 상태로, 이로 인해 고통을 경험한다.",
    "definition_en": "A state in which one's thoughts, urges, or behaviors are felt to be inconsistent with one's values or sense of self, causing distress as a result.",
    "significance": "강박사고가 자아이질적이라는 특성은 OCD를 정신증이나 성격장애의 고정된 신념과 구별하는 핵심 특징이며, 치료 동기 유발의 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "자아이질적(ego-dystonic)과 자아동조적(ego-syntonic) 개념을 최초로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아동조적",
        "name_en": "Ego-Syntonic",
        "id": "OBSESS_ESY_018"
      },
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Dys(이상) + tonic(긴장) = 자아와 '안 맞는' 불편함",
      "differential": "자아동조적(ego-syntonic) 증상은 자기 가치관과 일치하여 고통이 적으나, 자아이질적 증상은 자아와 불일치하여 고통이 크다",
      "key_point": "OCD 환자의 강박사고는 자아이질적이어서 스스로 비합리적임을 인식하며 고통받는다. 이것이 망상과의 핵심 차이이다",
      "common_mistake": "자아이질적이라는 것이 항상 완전한 통찰력을 의미하지는 않는다. OCD에서도 통찰력의 정도는 다양하다"
    }
  },
  {
    "id": "OBSESS_ESY_018",
    "terminology": "자아동조적 (Ego-Syntonic)",
    "terminology_ko": "자아동조적",
    "terminology_en": "Ego-Syntonic",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 사고, 행동, 가치관이 자아 정체성과 일치한다고 느끼는 상태로, 이러한 증상에 대한 고통이 상대적으로 적다.",
    "definition_en": "A state in which one's thoughts, behaviors, and values are felt to be consistent with one's sense of self, resulting in relatively less distress about the symptoms.",
    "significance": "저장장애, 성격장애 등 자아동조적 장애는 환자의 치료 동기가 낮아 치료가 어렵다는 임상적 함의를 가진다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "자아동조적 개념을 성격장애와 관련하여 최초로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자아이질적",
        "name_en": "Ego-Dystonic",
        "id": "OBSESS_EDY_017"
      },
      {
        "name_ko": "저장장애",
        "name_en": "Hoarding Disorder",
        "id": "OBSESS_HOA_011"
      },
      {
        "name_ko": "경계선성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Syn(같은) + tonic = 자아와 '맞는' 편안함",
      "differential": "OCD의 강박사고는 자아이질적(고통 큼, 치료 동기 높음)이나, 저장장애의 저장행동은 자아동조적(고통 적음, 치료 동기 낮음)이다",
      "key_point": "자아동조적 증상을 가진 환자는 자신의 행동을 문제로 인식하지 않아 치료 동기가 낮다는 임상적 함의가 중요하다",
      "common_mistake": "자아동조적 증상이 치료가 불필요함을 의미한다고 오해하면 안 된다. 당사자는 고통이 적어도 기능 저하는 심각할 수 있다"
    }
  },
  {
    "id": "OBSESS_SER_019",
    "terminology": "세로토닌 가설 (Serotonin Hypothesis)",
    "terminology_ko": "세로토닌 가설",
    "terminology_en": "Serotonin Hypothesis",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "강박장애가 뇌의 세로토닌 체계 이상, 특히 세로토닌 기능 저하와 관련된다는 신경생물학적 가설로, SSRI 치료 효과의 이론적 근거이다.",
    "definition_en": "A neurobiological hypothesis proposing that OCD is related to dysregulation of the brain's serotonin system, particularly serotonin hypofunction, providing the theoretical basis for SSRI treatment.",
    "significance": "SSRI가 OCD에 효과적이라는 임상적 관찰이 세로토닌 가설을 지지하며, 다른 불안장애보다 더 높은 용량의 SSRI가 필요하다는 점이 특징적이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 라포포트",
        "name_en": "Judith Rapoport",
        "contribution": "클로미프라민(세로토닌 재흡수 억제제)이 OCD에 효과적임을 입증하여 세로토닌 가설의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "OBSESS_SSR_020"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_002"
      },
      {
        "name_ko": "CSTC 신경회로",
        "name_en": "CSTC Circuit",
        "id": "OBSESS_CST_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "OCD + 세로토닌: SSRI가 들으니 세로토닌이 관련 → 역추론의 대표 사례",
      "differential": "우울증의 모노아민 가설은 세로토닌·노르에피네프린·도파민을 모두 포함하나, OCD의 세로토닌 가설은 세로토닌에 더 특이적이다",
      "key_point": "OCD 치료에는 우울증보다 더 높은 용량의 SSRI가 필요하며, 효과 발현까지 8~12주가 소요된다",
      "common_mistake": "세로토닌 가설이 OCD의 유일한 생물학적 설명이라고 생각하면 안 된다. 글루타메이트, 도파민 등 다른 신경전달물질도 관여한다"
    }
  },
  {
    "id": "OBSESS_SSR_020",
    "terminology": "선택적 세로토닌 재흡수 억제제 (SSRI)",
    "terminology_ko": "선택적 세로토닌 재흡수 억제제",
    "terminology_en": "Selective Serotonin Reuptake Inhibitor",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "시냅스 간극에서 세로토닌의 재흡수를 선택적으로 차단하여 세로토닌 활성을 증가시키는 항우울제 계열로, OCD의 1차 약물치료로 사용된다.",
    "definition_en": "A class of antidepressants that selectively block serotonin reuptake in the synaptic cleft, increasing serotonin activity, used as the first-line pharmacological treatment for OCD.",
    "significance": "OCD 약물치료의 1차 선택약으로, ERP와 병행 시 최상의 치료 효과를 보이며 OCD 세로토닌 가설의 핵심 근거이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 웡",
        "name_en": "David Wong",
        "contribution": "최초의 SSRI인 플루옥세틴(프로작)을 개발"
      },
      {
        "name_ko": "마이클 제니케",
        "name_en": "Michael Jenike",
        "contribution": "OCD에 대한 SSRI 치료의 체계적 임상 연구를 주도"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세로토닌 가설",
        "name_en": "Serotonin Hypothesis",
        "id": "OBSESS_SER_019"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [
      {
        "name": "플루옥세틴",
        "description": "최초의 SSRI, OCD 치료에 40~80mg 사용"
      },
      {
        "name": "플루복사민",
        "description": "OCD 치료를 위해 처음 승인된 SSRI"
      },
      {
        "name": "설트랄린",
        "description": "OCD 치료에 널리 사용되는 SSRI"
      },
      {
        "name": "파록세틴",
        "description": "OCD 치료에 사용되나 중단 증후군이 상대적으로 큼"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SSRI = Serotonin(세로토닌) Selective(선택적) Reuptake(재흡수) Inhibitor(억제) → 세로토닌만 콕 집어 막기",
      "differential": "삼환계 항우울제(클로미프라민)도 OCD에 효과적이나 부작용이 많아, SSRI가 1차 선택약이다",
      "key_point": "OCD에서는 우울증 치료보다 더 높은 용량이 필요하며(예: 플루옥세틴 60~80mg), 효과 발현까지 8~12주 소요된다",
      "common_mistake": "SSRI가 즉각적 효과를 보인다고 기대하면 안 된다. OCD 치료에서는 최소 8~12주의 적정 용량 투여가 필요하다"
    }
  },
  {
    "id": "OBSESS_RES_021",
    "terminology": "책임감 과대평가 (Inflated Responsibility)",
    "terminology_ko": "책임감 과대평가",
    "terminology_en": "Inflated Responsibility",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신이 해를 끼치거나 예방하는 데 결정적 영향력을 가지고 있다고 과도하게 믿으며, 이에 따른 과도한 책임감을 느끼는 인지적 편향이다.",
    "definition_en": "A cognitive bias involving an exaggerated belief that one has pivotal power to cause or prevent harm, accompanied by an excessive sense of responsibility.",
    "significance": "Salkovskis의 OCD 인지모형에서 핵심적 인지 요인으로, 침습적 사고를 강박사고로 전환시키는 핵심 기제이다.",
    "key_researchers": [
      {
        "name_ko": "폴 살코프스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "과도한 책임감이 OCD의 핵심 인지 요인이라는 이론을 제안하고 검증"
      },
      {
        "name_ko": "OCCWG",
        "name_en": "Obsessive Compulsive Cognitions Working Group",
        "contribution": "책임감 과대평가를 OCD 관련 6대 인지 영역 중 하나로 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사고-행동 융합",
        "name_en": "Thought-Action Fusion",
        "id": "OBSESS_TAF_008"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      },
      {
        "name_ko": "확인강박",
        "name_en": "Checking Compulsions",
        "id": "OBSESS_CHK_005"
      },
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "책임감 과대평가 = '내가 막지 않으면 끔찍한 일이 일어날 것'이라는 과도한 믿음",
      "differential": "죄책감은 정서 반응이나, 책임감 과대평가는 자신의 영향력에 대한 인지적 믿음이다",
      "key_point": "Salkovskis 모형에서 침습적 사고를 강박사고로 전환시키는 핵심 인지 매개 변인이다",
      "common_mistake": "책임감 과대평가를 단순한 성실성이나 양심적 태도와 혼동하면 안 된다. 비합리적 수준의 과도한 책임 귀인이다"
    }
  },
  {
    "id": "OBSESS_SUP_022",
    "terminology": "사고억제의 역설 (Thought Suppression Paradox)",
    "terminology_ko": "사고억제의 역설",
    "terminology_en": "Thought Suppression Paradox",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "특정 사고를 의도적으로 억제하려고 할수록 그 사고가 더 자주, 더 강하게 떠오르는 역설적 현상으로, 흰 곰 실험으로 잘 알려져 있다.",
    "definition_en": "A paradoxical phenomenon in which deliberate attempts to suppress a specific thought lead to an increase in the frequency and intensity of that thought, famously demonstrated by the white bear experiment.",
    "significance": "OCD에서 강박사고를 통제하려는 시도가 오히려 증상을 악화시키는 기제를 설명하며, 수용 기반 치료의 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 웨그너",
        "name_en": "Daniel Wegner",
        "contribution": "'흰 곰 실험'을 통해 사고억제의 역설적 효과를 실증적으로 입증(1987)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "침습적 사고",
        "name_en": "Intrusive Thoughts",
        "id": "OBSESS_INT_007"
      },
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "흰 곰 실험: '흰 곰을 생각하지 마세요' → 더 많이 생각하게 됨",
      "differential": "반추(rumination)는 부정적 사고에 수동적으로 몰두하는 것이나, 사고억제는 사고를 능동적으로 밀어내려는 시도이다",
      "key_point": "Wegner의 '아이러닉 프로세스 이론'에 따르면 억제 시도 시 모니터링 과정이 역설적으로 표적 사고를 활성화시킨다",
      "common_mistake": "사고억제가 효과적인 대처 전략이라고 오해하면 안 된다. 오히려 침습적 사고의 빈도를 증가시키는 역효과를 낳는다"
    }
  },
  {
    "id": "OBSESS_MAG_023",
    "terminology": "마법적 사고 (Magical Thinking)",
    "terminology_ko": "마법적 사고",
    "terminology_en": "Magical Thinking",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 사고, 말, 행동이 인과적 연결 없이 외부 사건에 영향을 미칠 수 있다고 믿는 비합리적 인지 패턴으로, OCD의 의례적 행동을 유지시키는 기제이다.",
    "definition_en": "An irrational cognitive pattern involving the belief that one's thoughts, words, or actions can influence external events without a causal connection, maintaining ritualistic behaviors in OCD.",
    "significance": "OCD 환자의 의례행동(예: 특정 숫자 세기, 특정 말 반복)을 유지시키는 핵심 인지 기제이며, 사고-행동 융합과 밀접하게 관련된다.",
    "key_researchers": [
      {
        "name_ko": "에밀리 프로니노",
        "name_en": "Emily Pronin",
        "contribution": "마법적 사고의 실험적 유발과 그 인지 기제를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사고-행동 융합",
        "name_en": "Thought-Action Fusion",
        "id": "OBSESS_TAF_008"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "정신적 강박행동",
        "name_en": "Mental Compulsions",
        "id": "OBSESS_MEN_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마법적 사고 = '불길한 숫자를 피하면 나쁜 일이 안 일어날 것' 같은 비합리적 믿음",
      "differential": "사고-행동 융합은 사고=행동이라는 등식이나, 마법적 사고는 사고→외부사건이라는 인과적 영향력 믿음이다",
      "key_point": "정상 발달에서도 아동기에 나타나는 보편적 현상이지만, OCD에서는 성인기에도 지속되어 의례행동을 유지시킨다",
      "common_mistake": "마법적 사고를 정신증적 망상과 동일시하면 안 된다. OCD에서의 마법적 사고는 대개 비합리적임을 인식하면서도 벗어나지 못하는 것이다"
    }
  },
  {
    "id": "OBSESS_INC_024",
    "terminology": "불완전감 (Incompleteness / Not Just Right Experience)",
    "terminology_ko": "불완전감",
    "terminology_en": "Incompleteness",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "무언가가 '딱 맞지 않는' 내적 불편감이나 긴장감으로, 불안과는 구별되는 감각이며 대칭/정렬/반복 강박의 핵심 동기가 된다.",
    "definition_en": "An inner sense of discomfort or tension that something is 'not just right,' distinct from anxiety, serving as the core motivator for symmetry, ordering, and repeating compulsions.",
    "significance": "불안 기반이 아닌 불완전감 기반 OCD 하위유형의 존재는 OCD가 단순한 불안장애가 아님을 뒷받침하는 중요한 근거이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 서마펠트",
        "name_en": "David Summerfeldt",
        "contribution": "불완전감이 불안과 구별되는 OCD의 독립적 동기 차원임을 제안"
      },
      {
        "name_ko": "로라 서머펠드",
        "name_en": "Laura Summerfeldt",
        "contribution": "불완전감과 해를 회피하려는 동기가 OCD의 두 가지 독립적 핵심 차원임을 실증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대칭/정렬 강박",
        "name_en": "Symmetry/Ordering Obsessions",
        "id": "OBSESS_SYM_006"
      },
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "NJR(Not Just Right) = '뭔가 안 맞는 느낌' → 불안이 아닌 불편감",
      "differential": "불안은 미래의 위협에 대한 정서 반응이나, 불완전감은 현재 상태가 '안 맞다'는 감각적 불편감이다",
      "key_point": "불안과 구별되는 독립적 동기 차원으로, OCD가 불안장애에서 분리된 근거 중 하나이다",
      "common_mistake": "불완전감을 불안의 하위유형으로 간주하면 안 된다. 질적으로 다른 내적 경험이다"
    }
  },
  {
    "id": "OBSESS_MEN_025",
    "terminology": "정신적 강박행동 (Mental Compulsions)",
    "terminology_ko": "정신적 강박행동",
    "terminology_en": "Mental Compulsions",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "외적으로 관찰할 수 없는 내적 정신 활동으로 수행되는 강박행동으로, 숫자 세기, 기도, 특정 단어 반복, 심상 대체 등이 포함된다.",
    "definition_en": "Compulsions performed as internal mental activities that are not externally observable, including counting, praying, repeating words, or replacing images in one's mind.",
    "significance": "외현적 행동이 없어 진단에서 간과되기 쉬우나 실제로 매우 흔하며, ERP 치료에서도 정신적 강박행동의 반응방지가 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "정신적 강박행동을 ERP 치료 프로토콜에 체계적으로 포함시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "마법적 사고",
        "name_en": "Magical Thinking",
        "id": "OBSESS_MAG_023"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      }
    ],
    "sub_types": [
      {
        "name": "숫자 세기",
        "description": "불안을 줄이기 위해 마음속으로 특정 숫자를 세는 행동"
      },
      {
        "name": "기도",
        "description": "나쁜 일을 방지하기 위해 마음속으로 기도를 반복"
      },
      {
        "name": "심상 대체",
        "description": "부정적 심상을 긍정적 심상으로 의도적으로 교체"
      },
      {
        "name": "정신적 확인",
        "description": "과거 행동을 마음속으로 반복 점검"
      }
    ],
    "quiz_hints": {
      "mnemonic": "보이지 않는 강박행동 = 머릿속에서 수행하는 의례(숫자 세기, 기도, 심상 교체 등)",
      "differential": "강박사고는 원치 않게 침입하는 것이나, 정신적 강박행동은 불안을 줄이기 위해 의도적으로 수행하는 것이다",
      "key_point": "외현적 행동이 없어 '순수 강박사고(Pure O)'로 오해될 수 있으나, 실제로는 정신적 강박행동이 동반된다",
      "common_mistake": "정신적 강박행동을 강박사고와 혼동하면 안 된다. 강박사고는 침입적이고, 정신적 강박행동은 의도적인 중화 시도이다"
    }
  },
  {
    "id": "OBSESS_AVO_026",
    "terminology": "회피행동 (Avoidance Behavior)",
    "terminology_ko": "회피행동",
    "terminology_en": "Avoidance Behavior",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "강박사고를 유발하는 상황, 장소, 대상, 사람 등을 의도적으로 피하는 행동으로, 강박행동과 함께 OCD를 유지시키는 핵심 기제이다.",
    "definition_en": "Deliberate avoidance of situations, places, objects, or people that trigger obsessions, serving as a key mechanism that maintains OCD alongside compulsions.",
    "significance": "회피행동은 ERP에서 핵심 치료 대상이며, 회피를 통한 불안 감소가 OCD 순환을 유지시키는 부적 강화로 작용한다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "OCD에서 회피행동의 역할을 체계적으로 기술하고 ERP 프로토콜에 포함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박행동",
        "name_en": "Compulsions",
        "id": "OBSESS_COM_003"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회피 = 강박사고 트리거를 피하는 '보이지 않는 강박행동'",
      "differential": "사회불안장애의 회피는 사회적 평가에 대한 두려움이 동기이나, OCD의 회피는 강박사고 촉발 방지가 동기이다",
      "key_point": "회피행동은 강박행동과 마찬가지로 부적 강화를 통해 OCD 순환을 유지시키며, ERP에서 핵심 치료 대상이다",
      "common_mistake": "회피행동을 강박행동과 별개의 현상으로 간주하면 안 된다. 기능적으로는 강박행동과 동일한 역할을 한다"
    }
  },
  {
    "id": "OBSESS_HRT_027",
    "terminology": "습관역전훈련 (Habit Reversal Training)",
    "terminology_ko": "습관역전훈련",
    "terminology_en": "Habit Reversal Training",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "문제적 습관행동을 인식하고 이를 양립 불가능한 대체 반응으로 교체하는 행동치료 기법으로, 발모장애와 피부뜯기장애의 1차 치료법이다.",
    "definition_en": "A behavioral therapy technique that involves recognizing problematic habitual behaviors and replacing them with incompatible competing responses, the first-line treatment for trichotillomania and excoriation disorder.",
    "significance": "발모장애와 피부뜯기장애에서 가장 강력한 근거를 가진 심리치료법으로, 자각훈련과 대체반응훈련이 핵심 요소이다.",
    "key_researchers": [
      {
        "name_ko": "네이선 아즈린",
        "name_en": "Nathan Azrin",
        "contribution": "습관역전훈련을 최초로 개발(1973)하여 다양한 습관장애에 적용"
      },
      {
        "name_ko": "더글러스 우즈",
        "name_en": "Douglas Woods",
        "contribution": "HRT의 발모장애 적용을 현대화하고 대규모 효과 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발모장애",
        "name_en": "Trichotillomania",
        "id": "OBSESS_TTM_012"
      },
      {
        "name_ko": "피부뜯기장애",
        "name_en": "Excoriation Disorder",
        "id": "OBSESS_EXC_013"
      },
      {
        "name_ko": "노출 및 반응방지",
        "name_en": "Exposure and Response Prevention",
        "id": "OBSESS_ERP_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HRT 3단계: 자각(인식) → 대체반응(주먹 쥐기 등) → 사회적 지지(격려)",
      "differential": "ERP는 불안 소거가 목표이나, HRT는 습관적 행동 패턴의 대체가 목표이다",
      "key_point": "자각훈련(awareness training)과 대체반응훈련(competing response training)이 핵심 2대 요소이다",
      "common_mistake": "HRT를 OCD의 치료법으로 혼동하면 안 된다. HRT는 발모장애·피부뜯기장애 등 BFRB에 주로 사용된다"
    }
  },
  {
    "id": "OBSESS_SAL_028",
    "terminology": "Salkovskis의 인지모형 (Salkovskis' Cognitive Model)",
    "terminology_ko": "Salkovskis의 인지모형",
    "terminology_en": "Salkovskis' Cognitive Model",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "침습적 사고 자체가 아니라 그에 대한 과도한 책임감 해석이 강박사고를 유발하고 유지시킨다는 OCD의 대표적 인지 이론이다.",
    "definition_en": "A prominent cognitive theory of OCD proposing that it is not intrusive thoughts themselves but their appraisal as indicating excessive personal responsibility that generates and maintains obsessions.",
    "significance": "OCD의 인지행동치료(CBT)의 이론적 기반을 제공하였으며, 침습적 사고의 정상성과 그에 대한 해석의 병리성을 구분한 획기적 이론이다.",
    "key_researchers": [
      {
        "name_ko": "폴 살코프스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "1985년 OCD의 인지모형을 제안하여 인지적 평가가 핵심임을 이론화"
      },
      {
        "name_ko": "스탠리 라크만",
        "name_en": "Stanley Rachman",
        "contribution": "Salkovskis 이론의 기초가 된 침습적 사고의 보편성 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "책임감 과대평가",
        "name_en": "Inflated Responsibility",
        "id": "OBSESS_RES_021"
      },
      {
        "name_ko": "침습적 사고",
        "name_en": "Intrusive Thoughts",
        "id": "OBSESS_INT_007"
      },
      {
        "name_ko": "사고-행동 융합",
        "name_en": "Thought-Action Fusion",
        "id": "OBSESS_TAF_008"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Salkovskis 공식: 침습적 사고 + 과도한 책임감 해석 = 강박사고 → 중화행동",
      "differential": "Beck의 인지모형은 우울증의 부정적 삼제에 초점을 맞추나, Salkovskis 모형은 OCD의 책임감 과대평가에 초점을 맞춘다",
      "key_point": "침습적 사고는 누구나 경험하는 정상 현상이며, 이를 병리적으로 만드는 것은 과도한 책임감 귀인이라는 점이 핵심이다",
      "common_mistake": "침습적 사고의 내용이 OCD의 원인이라고 생각하면 안 된다. 내용이 아닌 해석(appraisal)이 핵심이다"
    }
  },
  {
    "id": "OBSESS_CST_029",
    "terminology": "피질-선조체-시상-피질 회로 (CSTC Circuit)",
    "terminology_ko": "피질-선조체-시상-피질 회로",
    "terminology_en": "Cortico-Striato-Thalamo-Cortical Circuit",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "안와전두피질, 미상핵, 시상을 연결하는 신경 루프로, OCD에서 이 회로의 과활성화가 반복적 사고와 행동의 신경학적 기반으로 간주된다.",
    "definition_en": "A neural loop connecting the orbitofrontal cortex, caudate nucleus, and thalamus, whose hyperactivity in OCD is considered the neurological basis for repetitive thoughts and behaviors.",
    "significance": "OCD의 신경생물학적 모형의 핵심으로, 신경영상 연구와 신경외과적 치료(DBS 등)의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "루이스 백스터",
        "name_en": "Lewis Baxter",
        "contribution": "PET 연구를 통해 OCD에서 CSTC 회로의 과활성화를 최초로 입증"
      },
      {
        "name_ko": "제프리 슈왈츠",
        "name_en": "Jeffrey Schwartz",
        "contribution": "인지행동치료가 CSTC 회로 활동을 정상화시킴을 신경영상으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세로토닌 가설",
        "name_en": "Serotonin Hypothesis",
        "id": "OBSESS_SER_019"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CSTC = Cortex(피질) → Striatum(선조체) → Thalamus(시상) → Cortex(피질) 순환 루프",
      "differential": "공황장애는 편도체 과활성화가 핵심이나, OCD는 CSTC 회로(안와전두피질-미상핵-시상)의 과활성화가 핵심이다",
      "key_point": "성공적인 CBT 후에도 CSTC 회로의 활동이 정상화된다는 연구 결과가 있어, 심리치료의 신경학적 효과를 보여준다",
      "common_mistake": "CSTC 회로 이상이 OCD의 유일한 원인이라고 단정하면 안 된다. 다중 요인 모형의 한 요소이다"
    }
  },
  {
    "id": "OBSESS_BFR_030",
    "terminology": "신체초점반복행동 (Body-Focused Repetitive Behaviors)",
    "terminology_ko": "신체초점반복행동",
    "terminology_en": "Body-Focused Repetitive Behaviors",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "자신의 신체 일부를 반복적으로 손상시키는 행동 패턴의 총칭으로, 발모장애와 피부뜯기장애가 대표적이며 손톱 물어뜯기 등도 포함된다.",
    "definition_en": "A collective term for repetitive behavioral patterns that involve damaging parts of one's own body, with trichotillomania and excoriation disorder as primary examples, also including nail biting.",
    "significance": "DSM-5에서 강박 관련 장애로 분류되며, OCD와 구별되는 고유한 치료 접근(HRT)이 필요한 행동군이다.",
    "key_researchers": [
      {
        "name_ko": "더글러스 우즈",
        "name_en": "Douglas Woods",
        "contribution": "BFRB 개념을 체계화하고 습관역전훈련(HRT) 기반 치료 프로토콜을 확립"
      },
      {
        "name_ko": "마이클 톨린",
        "name_en": "Michael Twohig",
        "contribution": "BFRB에 대한 수용전념치료(ACT) 적용을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "발모장애",
        "name_en": "Trichotillomania",
        "id": "OBSESS_TTM_012"
      },
      {
        "name_ko": "피부뜯기장애",
        "name_en": "Excoriation Disorder",
        "id": "OBSESS_EXC_013"
      },
      {
        "name_ko": "습관역전훈련",
        "name_en": "Habit Reversal Training",
        "id": "OBSESS_HRT_027"
      }
    ],
    "sub_types": [
      {
        "name": "발모장애",
        "description": "머리카락이나 체모를 반복적으로 뽑는 행동"
      },
      {
        "name": "피부뜯기장애",
        "description": "피부를 반복적으로 뜯거나 긁는 행동"
      },
      {
        "name": "손톱 물어뜯기",
        "description": "손톱을 반복적으로 물어뜯는 행동(임상적 수준)"
      },
      {
        "name": "입술 깨물기",
        "description": "입술을 반복적으로 깨무는 행동(임상적 수준)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "BFRB = Body(신체) Focused(초점) Repetitive(반복) Behavior(행동) → 신체를 대상으로 한 반복행동군",
      "differential": "OCD의 강박행동은 강박사고에 의해 촉발되나, BFRB는 강박사고 없이 감각적 만족이나 긴장 해소가 동기이다",
      "key_point": "ERP가 아닌 HRT(습관역전훈련)가 1차 치료법이라는 점에서 OCD와 치료 접근이 다르다",
      "common_mistake": "BFRB를 자해행동으로 분류하면 안 된다. 자해와는 동기와 기능이 근본적으로 다르다"
    }
  },
  {
    "id": "OBSESS_INS_031",
    "terminology": "통찰력 명시자 (Insight Specifier)",
    "terminology_ko": "통찰력 명시자",
    "terminology_en": "Insight Specifier",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "DSM-5에서 OCD 진단 시 환자가 자신의 강박적 신념이 사실이 아닐 수 있다는 인식 정도를 3단계로 구분하는 명시자이다.",
    "definition_en": "A DSM-5 specifier for OCD diagnosis that classifies the degree to which patients recognize their obsessive beliefs may not be true, in three levels of insight.",
    "significance": "통찰력 수준에 따라 치료 반응과 예후가 달라지며, 통찰력이 낮을수록(확신이 높을수록) 치료 반응이 좋지 않다.",
    "key_researchers": [
      {
        "name_ko": "제인 에이센",
        "name_en": "Jane Eisen",
        "contribution": "OCD에서 통찰력의 스펙트럼적 특성을 연구하고 BABS(Brown Assessment of Beliefs Scale)를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "자아이질적",
        "name_en": "Ego-Dystonic",
        "id": "OBSESS_EDY_017"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "양호한 통찰력",
        "description": "OCD 신념이 확실히 또는 아마도 사실이 아니라고 인식"
      },
      {
        "name": "불량한 통찰력",
        "description": "OCD 신념이 아마도 사실이라고 생각"
      },
      {
        "name": "통찰력 없음/망상적 신념",
        "description": "OCD 신념이 확실히 사실이라고 확신"
      }
    ],
    "quiz_hints": {
      "mnemonic": "통찰력 3단계: 좋음(아닐 수도) → 나쁨(아마 맞을) → 없음(확실히 맞다)",
      "differential": "망상장애는 신념이 일관되게 확고하나, OCD의 통찰력은 상황에 따라 변동할 수 있다",
      "key_point": "통찰력이 낮을수록 치료 반응이 좋지 않으며, 망상적 수준의 확신을 보일 수 있다는 점이 DSM-5에서 명시되었다",
      "common_mistake": "OCD 환자가 항상 자신의 비합리성을 인식한다고 가정하면 안 된다. 통찰력 없는 OCD도 존재한다"
    }
  },
  {
    "id": "OBSESS_TIC_032",
    "terminology": "틱 관련 명시자 (Tic-Related Specifier)",
    "terminology_ko": "틱 관련 명시자",
    "terminology_en": "Tic-Related Specifier",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "OCD 환자가 현재 또는 과거에 틱장애를 동반하는 경우에 적용하는 DSM-5 명시자로, 치료 접근과 예후에 영향을 미친다.",
    "definition_en": "A DSM-5 specifier applied when an OCD patient has a current or past history of a tic disorder, influencing treatment approach and prognosis.",
    "significance": "틱 관련 OCD는 남성에서 더 흔하고, 발병 연령이 더 이르며, 도파민 관여가 더 크고, 항정신병 약물 병합이 더 효과적인 독특한 하위유형이다.",
    "key_researchers": [
      {
        "name_ko": "제임스 레크만",
        "name_en": "James Leckman",
        "contribution": "OCD와 뚜렛장애의 유전적·신경생물학적 관련성을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "CSTC 신경회로",
        "name_en": "CSTC Circuit",
        "id": "OBSESS_CST_029"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "틱+OCD: 남성↑, 발병↓(어림), 도파민↑, 항정신병약물 병합 효과↑",
      "differential": "일반 OCD는 세로토닌 기능이상이 핵심이나, 틱 관련 OCD는 도파민계 관여가 추가되어 항정신병 약물 병합이 효과적이다",
      "key_point": "틱 관련 OCD는 SSRI 단독보다 항정신병 약물(항도파민제) 병합이 더 효과적인 독특한 약물 반응 패턴을 보인다",
      "common_mistake": "틱과 강박행동을 동일시하면 안 된다. 틱은 불수의적 운동이고 강박행동은 불안 감소를 위한 의도적 행위이다"
    }
  },
  {
    "id": "OBSESS_PUR_033",
    "terminology": "순수 강박사고형 (Primarily Obsessional OCD)",
    "terminology_ko": "순수 강박사고형",
    "terminology_en": "Primarily Obsessional OCD",
    "category": "OBSESS",
    "category_name": "강박 및 관련 장애 (OCD and Related Disorders)",
    "definition": "외현적 강박행동이 두드러지지 않고 강박사고가 주된 증상인 OCD 유형으로, 실제로는 정신적 강박행동이 동반되는 경우가 대부분이다.",
    "definition_en": "An OCD presentation where obsessions are predominant without prominent overt compulsions, though mental compulsions are typically present in most cases.",
    "significance": "외현적 행동이 없어 'Pure O'로 불리기도 하나, 이는 오해의 소지가 있으며 실제로는 정신적 강박행동의 존재를 인식하는 것이 치료에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "리 베어",
        "name_en": "Lee Baer",
        "contribution": "순수 강박사고형 OCD의 임상적 특성과 치료적 함의를 체계적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "강박사고",
        "name_en": "Obsessions",
        "id": "OBSESS_OBS_002"
      },
      {
        "name_ko": "정신적 강박행동",
        "name_en": "Mental Compulsions",
        "id": "OBSESS_MEN_025"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [
      {
        "name": "공격적 강박사고",
        "description": "타인을 해치는 것에 대한 침습적 사고"
      },
      {
        "name": "성적 강박사고",
        "description": "원치 않는 성적 심상이나 충동"
      },
      {
        "name": "종교적 강박사고",
        "description": "신성모독이나 죄에 대한 침습적 사고"
      },
      {
        "name": "실존적 강박사고",
        "description": "존재, 의식, 현실에 대한 반복적 의문"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Pure O는 사실 'Pure(순수)' 하지 않다 → 보이지 않는 정신적 강박행동이 항상 존재한다",
      "differential": "범불안장애는 현실적 걱정이 다양한 주제로 이동하나, 순수 강박사고형은 특정 주제의 침습적 사고가 반복적으로 고착된다",
      "key_point": "'Pure O'라는 용어는 오해의 소지가 있으며, 대부분 정신적 강박행동(숫자 세기, 확인 등)이 동반된다",
      "common_mistake": "순수 강박사고형에 강박행동이 없다고 오해하면 안 된다. 눈에 보이지 않는 정신적 강박행동이 거의 항상 존재한다"
    }
  }
];

TERMS_DATA.TRAUMA = [
  {
    "id": "TRAUMA_PTS_001",
    "terminology": "외상 후 스트레스장애 (Post-Traumatic Stress Disorder)",
    "terminology_ko": "외상 후 스트레스장애",
    "terminology_en": "Post-Traumatic Stress Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "실제 또는 위협적인 죽음, 심각한 부상, 성폭력에 노출된 후 침습적 재경험, 회피, 인지와 기분의 부정적 변화, 과각성이 1개월 이상 지속되는 장애이다.",
    "definition_en": "A disorder following exposure to actual or threatened death, serious injury, or sexual violence, characterized by intrusive re-experiencing, avoidance, negative alterations in cognition and mood, and hyperarousal lasting more than one month.",
    "significance": "DSM-5에서 불안장애 범주에서 분리되어 외상 관련 장애의 독립 범주로 재분류되었으며, 전쟁·재난·폭력 피해자의 정신건강에서 핵심 진단이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 허먼",
        "name_en": "Judith Herman",
        "contribution": "외상의 심리적 영향에 관한 기념비적 저서 'Trauma and Recovery'를 통해 복합 PTSD 개념을 제안"
      },
      {
        "name_ko": "베셀 반 데어 콜크",
        "name_en": "Bessel van der Kolk",
        "contribution": "외상의 신체적 기억 저장 기제와 신체 기반 치료의 중요성을 강조"
      },
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "PTSD의 정서처리이론과 지속노출치료(PE) 프로토콜을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "급성 스트레스장애",
        "name_en": "Acute Stress Disorder",
        "id": "TRAUMA_ASD_002"
      },
      {
        "name_ko": "복합 PTSD",
        "name_en": "Complex PTSD",
        "id": "TRAUMA_CPT_006"
      },
      {
        "name_ko": "지속노출치료",
        "name_en": "Prolonged Exposure",
        "id": "TRAUMA_PET_020"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [
      {
        "name": "해리 하위유형",
        "description": "이인증이나 비현실감이 두드러지게 동반되는 유형"
      },
      {
        "name": "지연 발현형",
        "description": "외상 사건 후 6개월 이상 경과 후에 진단 기준을 충족하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PTSD 4대 증상군: 침습(Intrusion) + 회피(Avoidance) + 인지·기분변화(Cognition) + 과각성(Arousal) = IACA",
      "differential": "급성 스트레스장애는 3일~1개월 지속되나, PTSD는 1개월 이상 지속될 때 진단한다",
      "key_point": "DSM-5에서 불안장애에서 분리되어 독립 범주로 재분류되었으며, 4개 증상군(침습·회피·인지기분변화·과각성)으로 확장되었다",
      "common_mistake": "PTSD가 전쟁 참전용사에게만 발생한다고 오해하면 안 된다. 성폭력, 사고, 자연재해 등 다양한 외상에서 발생한다"
    }
  },
  {
    "id": "TRAUMA_ASD_002",
    "terminology": "급성 스트레스장애 (Acute Stress Disorder)",
    "terminology_ko": "급성 스트레스장애",
    "terminology_en": "Acute Stress Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건 후 3일에서 1개월 사이에 침습적 증상, 부정적 기분, 해리, 회피, 과각성 증상이 나타나는 장애이다.",
    "definition_en": "A disorder occurring between 3 days and 1 month after a traumatic event, characterized by intrusion symptoms, negative mood, dissociation, avoidance, and arousal symptoms.",
    "significance": "PTSD로의 진행을 예측하는 조기 지표로서 중요하며, 조기 개입의 필요성을 판단하는 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "리처드 브라이언트",
        "name_en": "Richard Bryant",
        "contribution": "급성 스트레스장애의 진단 타당성과 PTSD 예측력을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "위기 개입",
        "name_en": "Crisis Intervention",
        "id": "TRAUMA_CRI_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ASD = Acute(급성, 3일~1개월) vs PTSD = Post(후, 1개월 이후)",
      "differential": "PTSD는 외상 후 1개월 이상 지속될 때 진단하나, ASD는 3일~1개월 사이의 급성기 반응이다",
      "key_point": "ASD 진단 시 해리 증상이 포함되어 있으며, ASD 환자의 약 50%가 이후 PTSD로 진행한다",
      "common_mistake": "ASD가 반드시 PTSD로 진행한다고 오해하면 안 된다. 약 50%만 PTSD로 진행하며 나머지는 자연 회복된다"
    }
  },
  {
    "id": "TRAUMA_ADJ_003",
    "terminology": "적응장애 (Adjustment Disorder)",
    "terminology_ko": "적응장애",
    "terminology_en": "Adjustment Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "확인 가능한 스트레스 요인에 대한 반응으로 정서적 또는 행동적 증상이 발생하되, 다른 특정 정신장애의 진단 기준을 충족하지 않는 상태이다.",
    "definition_en": "Emotional or behavioral symptoms developing in response to an identifiable stressor that do not meet the criteria for another specific mental disorder.",
    "significance": "임상적으로 가장 흔하게 진단되는 장애 중 하나이며, 다른 특정 진단에 해당하지 않는 스트레스 반응의 '잔여' 진단으로서의 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "제프리 스트레인",
        "name_en": "Jeffrey Strain",
        "contribution": "적응장애의 진단 신뢰도와 타당도를 체계적으로 연구하고 진단 기준 개선을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [
      {
        "name": "우울 기분 동반",
        "description": "우울감, 눈물, 절망감이 주된 증상"
      },
      {
        "name": "불안 동반",
        "description": "초조함, 걱정, 신경과민이 주된 증상"
      },
      {
        "name": "혼합 불안과 우울 기분 동반",
        "description": "우울감과 불안이 모두 두드러짐"
      },
      {
        "name": "품행 장해 동반",
        "description": "행동 문제가 주된 증상(규칙 위반 등)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "적응장애 = 스트레스원 확인 가능 + 증상은 다른 진단 기준 미충족 + 6개월 이내 발생",
      "differential": "주요우울장애는 스트레스원 없이도 진단 가능하나, 적응장애는 반드시 확인 가능한 스트레스원이 있어야 한다",
      "key_point": "스트레스 요인 발생 후 3개월 이내에 증상이 시작되며, 스트레스 요인 종료 후 6개월 이내에 해소되어야 한다",
      "common_mistake": "적응장애를 경미한 문제로 과소평가하면 안 된다. 자살 위험이 있으며 적절한 개입이 필요하다"
    }
  },
  {
    "id": "TRAUMA_RAD_004",
    "terminology": "반응성 애착장애 (Reactive Attachment Disorder)",
    "terminology_ko": "반응성 애착장애",
    "terminology_en": "Reactive Attachment Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "초기 양육 환경에서의 심각한 방임이나 학대로 인해 양육자에 대한 애착 형성이 억제되어, 사회적 상호작용에서 일관된 정서적 위축을 보이는 장애이다.",
    "definition_en": "A disorder resulting from severe neglect or abuse in early caregiving, characterized by inhibited attachment formation and consistent emotional withdrawal in social interactions.",
    "significance": "초기 아동기의 불충분한 양육이 애착 발달에 미치는 심각한 영향을 보여주며, DSM-5에서 외상 관련 장애로 재분류되었다.",
    "key_researchers": [
      {
        "name_ko": "찰스 제네",
        "name_en": "Charles Zeanah",
        "contribution": "반응성 애착장애의 진단 기준 정립과 평가 도구 개발에 핵심적으로 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "탈억제 사회적 유대감 장애",
        "name_en": "Disinhibited Social Engagement Disorder",
        "id": "TRAUMA_DSE_005"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "RAD = 억제형(위축) → 양육자에게 다가가지 않음 (DSED와 반대)",
      "differential": "탈억제 사회적 유대감 장애(DSED)는 낯선 사람에게도 무분별하게 접근하나, RAD는 양육자에게도 위축되고 접근하지 않는다",
      "key_point": "5세 이전에 발생해야 하며, 충분한 양육을 받을 수 있는 환경이 제공되면 개선될 수 있다",
      "common_mistake": "RAD를 자폐스펙트럼장애와 혼동하면 안 된다. RAD는 부적절한 양육 환경이 원인이며, 적절한 양육 환경에서 개선된다"
    }
  },
  {
    "id": "TRAUMA_DSE_005",
    "terminology": "탈억제 사회적 유대감 장애 (Disinhibited Social Engagement Disorder)",
    "terminology_ko": "탈억제 사회적 유대감 장애",
    "terminology_en": "Disinhibited Social Engagement Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "초기 양육 환경의 심각한 결핍으로 인해 낯선 성인에게 무분별하게 접근하고 과도한 친밀감을 보이는 등 탈억제된 사회적 행동 패턴을 보이는 장애이다.",
    "definition_en": "A disorder resulting from severe early caregiving deficiency, characterized by disinhibited social behavior patterns including indiscriminate approach to unfamiliar adults and excessive familiarity.",
    "significance": "시설 양육 아동 연구에서 확인된 독특한 애착 문제로, RAD와 달리 적절한 양육 환경이 제공되어도 지속될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "찰스 제네",
        "name_en": "Charles Zeanah",
        "contribution": "DSED의 RAD와의 차별적 특성과 예후 차이를 체계적으로 규명"
      },
      {
        "name_ko": "마이클 러터",
        "name_en": "Michael Rutter",
        "contribution": "루마니아 고아원 연구를 통해 시설 양육이 애착 발달에 미치는 영향을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반응성 애착장애",
        "name_en": "Reactive Attachment Disorder",
        "id": "TRAUMA_RAD_004"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DSED = 탈억제형(무분별) → 낯선 사람에게도 쉽게 다가감 (RAD와 반대)",
      "differential": "RAD는 억제형으로 사회적 위축을 보이나, DSED는 탈억제형으로 낯선 사람에게도 무분별하게 접근한다",
      "key_point": "RAD와 달리 적절한 양육 환경이 제공되어도 증상이 지속될 수 있어 예후가 다르다",
      "common_mistake": "DSED를 단순히 사교적인 성격이나 ADHD의 충동성으로 오해하면 안 된다. 초기 양육 결핍이라는 특정 원인이 있다"
    }
  },
  {
    "id": "TRAUMA_CPT_006",
    "terminology": "복합 PTSD (Complex PTSD)",
    "terminology_ko": "복합 PTSD",
    "terminology_en": "Complex PTSD",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "반복적이고 장기적인 대인관계 외상(아동학대, 가정폭력 등)에 노출된 후 PTSD 증상에 더해 정서조절 곤란, 부정적 자기개념, 관계 장해가 추가로 나타나는 상태이다.",
    "definition_en": "A condition following repeated and prolonged interpersonal trauma (child abuse, domestic violence) featuring PTSD symptoms plus emotional dysregulation, negative self-concept, and relational disturbance.",
    "significance": "ICD-11에 공식 진단으로 포함되었으며, 단순 PTSD와 구별되는 치료 접근(단계적 치료)이 필요한 독립적 진단 개체이다.",
    "key_researchers": [
      {
        "name_ko": "주디스 허먼",
        "name_en": "Judith Herman",
        "contribution": "복합 PTSD 개념을 최초로 제안(1992)하여 만성적·반복적 외상의 독특한 영향을 이론화"
      },
      {
        "name_ko": "마릴렌 클루아트레",
        "name_en": "Marylene Cloitre",
        "contribution": "복합 PTSD의 단계적 치료(STAIR/NT) 프로토콜을 개발하고 효과를 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "대인관계 외상",
        "name_en": "Interpersonal Trauma",
        "id": "TRAUMA_IPT_033"
      },
      {
        "name_ko": "경계선성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "복합 PTSD = PTSD + DSO(자기조직화 장해: 정서조절↓, 자기개념↓, 관계↓)",
      "differential": "경계선성격장애와 증상이 중첩되나, 복합 PTSD는 명확한 외상 이력과 관련되며 정체성 혼란보다 부정적 자기개념이 핵심이다",
      "key_point": "ICD-11에는 공식 진단으로 포함되었으나, DSM-5에는 아직 독립 진단으로 포함되지 않았다",
      "common_mistake": "복합 PTSD를 단순히 심각한 PTSD로 간주하면 안 된다. 자기조직화 장해(DSO)라는 질적으로 다른 증상 차원이 추가된다"
    }
  },
  {
    "id": "TRAUMA_PGD_007",
    "terminology": "지속애도장애 (Prolonged Grief Disorder)",
    "terminology_ko": "지속애도장애",
    "terminology_en": "Prolonged Grief Disorder",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "가까운 사람의 사망 후 강렬한 그리움, 몰두, 정서적 고통이 비정상적으로 오랜 기간 지속되어 일상 기능에 심각한 장해를 초래하는 상태이다.",
    "definition_en": "A condition in which intense yearning, preoccupation, and emotional distress following the death of a close person persist for an abnormally prolonged period, causing significant functional impairment.",
    "significance": "DSM-5-TR에서 새로 추가된 진단으로, 정상 애도와 병적 애도의 경계를 구분하는 임상적 기준을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "홀리 프리거슨",
        "name_en": "Holly Prigerson",
        "contribution": "지속애도장애의 진단 기준을 최초로 개발하고 실증적으로 검증"
      },
      {
        "name_ko": "캐서린 쉬어",
        "name_en": "Katherine Shear",
        "contribution": "복잡한 애도에 대한 전문 심리치료(Complicated Grief Treatment)를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "적응장애",
        "name_en": "Adjustment Disorder",
        "id": "TRAUMA_ADJ_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PGD 핵심: 강렬한 그리움 + 사별 후 12개월(성인) 또는 6개월(아동) 이상 지속",
      "differential": "주요우울장애는 광범위한 흥미 상실과 무가치감이 핵심이나, 지속애도장애는 고인에 대한 강렬한 그리움과 몰두가 핵심이다",
      "key_point": "DSM-5-TR에서 새로 추가된 진단으로, 성인은 사별 후 12개월, 아동은 6개월 이상 지속 시 진단한다",
      "common_mistake": "정상적인 애도 반응을 지속애도장애로 병리화하면 안 된다. 기간과 기능 손상 정도가 진단의 핵심이다"
    }
  },
  {
    "id": "TRAUMA_INR_008",
    "terminology": "침습적 재경험 (Intrusive Re-experiencing)",
    "terminology_ko": "침습적 재경험",
    "terminology_en": "Intrusive Re-experiencing",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건이 원치 않게 반복적으로 기억, 꿈, 플래시백 등의 형태로 재경험되며, 외상 관련 단서에 대해 심리적·생리적 반응이 유발되는 PTSD의 핵심 증상군이다.",
    "definition_en": "A core PTSD symptom cluster in which the traumatic event is involuntarily re-experienced through recurrent memories, dreams, flashbacks, with psychological and physiological reactions to trauma-related cues.",
    "significance": "PTSD의 4대 증상군 중 가장 특이적인 증상으로, 외상 기억의 부적절한 저장과 인출 기제를 반영한다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "침습적 재경험이 외상 기억의 부적절한 정서 처리를 반영한다는 이론을 제안"
      },
      {
        "name_ko": "아닉 에일러스",
        "name_en": "Anke Ehlers",
        "contribution": "침습적 기억의 인지적 기제와 지각적 점화(perceptual priming)의 역할을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "플래시백",
        "name_en": "Flashback",
        "id": "TRAUMA_FLB_009"
      },
      {
        "name_ko": "외상 기억",
        "name_en": "Trauma Memory",
        "id": "TRAUMA_TME_015"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "침습적 기억",
        "description": "외상 사건에 대한 원치 않는 반복적 기억"
      },
      {
        "name": "외상 관련 악몽",
        "description": "외상 내용이 반복되는 괴로운 꿈"
      },
      {
        "name": "플래시백",
        "description": "외상이 현재 일어나고 있는 것처럼 느끼는 해리적 반응"
      },
      {
        "name": "심리적·생리적 반응",
        "description": "외상 단서에 대한 강렬한 심리적 고통과 생리적 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "재경험의 4가지 형태: 기억(Memory), 악몽(Nightmare), 플래시백(Flashback), 단서반응(Cue reaction) = MNFC",
      "differential": "강박사고는 비합리적 침습적 사고이나, 침습적 재경험은 실제 경험한 외상 사건의 기억이 침입하는 것이다",
      "key_point": "침습적 재경험은 외상 기억이 맥락 정보 없이 감각적·정서적으로 저장된 결과로 설명된다",
      "common_mistake": "침습적 재경험을 단순한 불쾌한 기억으로 축소하면 안 된다. 플래시백에서는 외상이 현재 일어나는 것처럼 생생하게 경험된다"
    }
  },
  {
    "id": "TRAUMA_FLB_009",
    "terminology": "플래시백 (Flashback)",
    "terminology_ko": "플래시백",
    "terminology_en": "Flashback",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건이 현재 다시 일어나고 있는 것처럼 행동하거나 느끼는 해리적 반응으로, 감각적 생생함과 현실감을 동반한다.",
    "definition_en": "A dissociative reaction in which the person feels or acts as if the traumatic event is recurring in the present, accompanied by sensory vividness and a sense of reality.",
    "significance": "PTSD의 가장 극적이고 특이적인 증상으로, 외상 기억이 시간적 맥락 없이 현재의 지각으로 경험되는 기억 처리 이상을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "아닉 에일러스",
        "name_en": "Anke Ehlers",
        "contribution": "플래시백의 인지 기제로서 '현재 위협감(sense of current threat)'과 지각적 기억의 역할을 규명"
      },
      {
        "name_ko": "에밀리 홈즈",
        "name_en": "Emily Holmes",
        "contribution": "플래시백의 실험적 유발과 예방에 관한 연구로 시공간 과제(테트리스)의 효과를 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "침습적 재경험",
        "name_en": "Intrusive Re-experiencing",
        "id": "TRAUMA_INR_008"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "외상 기억",
        "name_en": "Trauma Memory",
        "id": "TRAUMA_TME_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "플래시백 = 과거의 외상이 현재의 '생방송'처럼 재생되는 해리적 경험",
      "differential": "침습적 기억은 과거 사건으로 인식하면서 떠올리는 것이나, 플래시백은 현재 일어나고 있다고 느끼는 해리적 상태이다",
      "key_point": "현재 일어나고 있다는 시간감각의 상실이 핵심이며, 해리적 반응의 일종으로 분류된다",
      "common_mistake": "플래시백을 단순히 생생한 기억으로 축소하면 안 된다. 시간감각을 잃고 외상이 현재 재발하는 것으로 경험하는 해리 현상이다"
    }
  },
  {
    "id": "TRAUMA_NTM_010",
    "terminology": "악몽 (Trauma-Related Nightmares)",
    "terminology_ko": "외상 관련 악몽",
    "terminology_en": "Trauma-Related Nightmares",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건의 내용이 반복적으로 꿈에 나타나거나 외상과 관련된 정서가 꿈에 반영되어 각성 후 강한 고통을 유발하는 수면 장해이다.",
    "definition_en": "A sleep disturbance in which the content of the traumatic event repeatedly appears in dreams or trauma-related affect is reflected in dreams, causing significant distress upon awakening.",
    "significance": "PTSD 환자의 약 70%가 경험하는 매우 흔한 증상으로, 수면 질 저하를 통해 전반적 증상 악화에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "배리 크라코",
        "name_en": "Barry Krakow",
        "contribution": "악몽에 대한 심상시연치료(IRT: Imagery Rehearsal Therapy)를 개발하여 PTSD 악몽 치료에 혁신을 가져옴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "침습적 재경험",
        "name_en": "Intrusive Re-experiencing",
        "id": "TRAUMA_INR_008"
      },
      {
        "name_ko": "과각성",
        "name_en": "Hyperarousal",
        "id": "TRAUMA_HYP_013"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외상 악몽의 치료: IRT(심상시연치료) = 깨어 있을 때 악몽의 내용을 새 시나리오로 바꿔 시연",
      "differential": "일반적 악몽은 내용이 다양하나, 외상 관련 악몽은 특정 외상 사건의 내용이 반복적으로 재현된다",
      "key_point": "PTSD 환자의 약 70%가 경험하며, 심상시연치료(IRT)가 효과적인 전문 치료법이다",
      "common_mistake": "외상 악몽을 단순한 수면 문제로 치부하면 안 된다. PTSD의 핵심 침습 증상이며 전문적 치료가 필요하다"
    }
  },
  {
    "id": "TRAUMA_AVO_011",
    "terminology": "회피 (Avoidance in PTSD)",
    "terminology_ko": "회피",
    "terminology_en": "Avoidance in PTSD",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건과 관련된 기억, 생각, 감정, 장소, 사람, 활동 등을 의도적으로 피하려는 지속적인 노력으로, PTSD의 두 번째 증상군이다.",
    "definition_en": "Persistent efforts to deliberately avoid memories, thoughts, feelings, places, people, and activities associated with the traumatic event, constituting the second symptom cluster of PTSD.",
    "significance": "회피는 단기적으로 불안을 감소시키지만 장기적으로 외상 기억의 처리를 방해하여 PTSD를 유지시키며, 노출치료의 핵심 치료 대상이다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "회피가 외상 기억의 정서적 처리를 방해하여 PTSD를 유지시킨다는 정서처리이론을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "정서적 마비",
        "name_en": "Emotional Numbing",
        "id": "TRAUMA_NUM_012"
      },
      {
        "name_ko": "지속노출치료",
        "name_en": "Prolonged Exposure",
        "id": "TRAUMA_PET_020"
      }
    ],
    "sub_types": [
      {
        "name": "내적 회피",
        "description": "외상 관련 기억, 생각, 감정을 피하려는 노력"
      },
      {
        "name": "외적 회피",
        "description": "외상과 관련된 사람, 장소, 대화, 활동, 상황을 피하는 행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PTSD 회피 = 내적(기억·생각·감정) + 외적(사람·장소·활동)의 이중 회피",
      "differential": "회피성 성격장애는 광범위한 사회적 회피이나, PTSD의 회피는 외상 관련 자극에 특이적이다",
      "key_point": "DSM-5에서 PTSD의 회피는 독립적 증상군(B군)으로, 내적 회피와 외적 회피 중 최소 1개 이상이 필요하다",
      "common_mistake": "회피를 자발적 선택으로 간주하면 안 된다. 외상 생존자에게는 자동적이고 압도적인 반응이다"
    }
  },
  {
    "id": "TRAUMA_NUM_012",
    "terminology": "정서적 마비 (Emotional Numbing)",
    "terminology_ko": "정서적 마비",
    "terminology_en": "Emotional Numbing",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "긍정적 정서를 경험하기 어렵고, 타인과의 정서적 연결이 차단되며, 세상이나 미래에 대한 관심과 기대가 현저히 감소하는 PTSD의 인지·기분 변화 증상이다.",
    "definition_en": "A PTSD symptom involving difficulty experiencing positive emotions, disconnection from others, and markedly diminished interest and expectations about the world and future.",
    "significance": "PTSD의 '인지와 기분의 부정적 변화' 증상군의 핵심 요소로, 대인관계 기능 저하와 삶의 질 감소에 가장 직접적으로 기여한다.",
    "key_researchers": [
      {
        "name_ko": "테렌스 킨",
        "name_en": "Terence Keane",
        "contribution": "정서적 마비가 PTSD의 회피와는 구별되는 독립적 차원임을 요인분석으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "회피",
        "name_en": "Avoidance in PTSD",
        "id": "TRAUMA_AVO_011"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정서적 마비 = 감정의 '마취' → 고통도 줄지만 기쁨도 느끼지 못함",
      "differential": "우울증의 무쾌감증(anhedonia)은 광범위한 흥미 상실이나, PTSD의 정서적 마비는 외상 이후 대인관계와 정서적 연결의 차단이 핵심이다",
      "key_point": "DSM-5에서 PTSD의 '인지와 기분의 부정적 변화(D군)'에 포함되며, 이전 DSM-IV의 회피 군에서 분리되었다",
      "common_mistake": "정서적 마비를 우울증으로만 설명하면 안 된다. PTSD 특유의 외상 후 정서적 단절 현상이다"
    }
  },
  {
    "id": "TRAUMA_HYP_013",
    "terminology": "과각성 (Hyperarousal)",
    "terminology_ko": "과각성",
    "terminology_en": "Hyperarousal",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 후 자율신경계가 지속적으로 과활성화되어 수면 장해, 과민성, 집중 곤란, 과도한 경계, 놀람반응 등이 나타나는 PTSD의 네 번째 증상군이다.",
    "definition_en": "The fourth PTSD symptom cluster involving persistent autonomic hyperactivation manifested as sleep disturbance, irritability, concentration difficulty, hypervigilance, and exaggerated startle response.",
    "significance": "외상 후 위협 탐지 시스템이 지속적으로 활성화된 상태를 반영하며, 신체 건강 문제(심혈관계 등)와의 연관성이 주목된다.",
    "key_researchers": [
      {
        "name_ko": "레이첼 예후다",
        "name_en": "Rachel Yehuda",
        "contribution": "PTSD에서 HPA축 이상과 코르티솔 반응의 변화를 통한 과각성 기제를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "놀람반응",
        "name_en": "Startle Response",
        "id": "TRAUMA_STR_014"
      },
      {
        "name_ko": "투쟁-도피-동결 반응",
        "name_en": "Fight-Flight-Freeze Response",
        "id": "TRAUMA_FFF_031"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과각성 5대 증상: 수면↓, 과민성↑, 집중↓, 경계↑, 놀람↑ = SICHE",
      "differential": "범불안장애의 과각성은 광범위한 걱정에 의한 것이나, PTSD의 과각성은 외상 사건 이후 시작된 위협 감지 시스템의 과활성화이다",
      "key_point": "DSM-5에서 과각성(E군)에 무모한/자기파괴적 행동이 새로운 증상으로 추가되었다",
      "common_mistake": "과각성을 단순히 불안이 많은 상태로 축소하면 안 된다. 위협 탐지 시스템의 지속적 과활성화라는 신경생물학적 기반이 있다"
    }
  },
  {
    "id": "TRAUMA_STR_014",
    "terminology": "놀람반응 (Exaggerated Startle Response)",
    "terminology_ko": "놀람반응",
    "terminology_en": "Exaggerated Startle Response",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "예기치 않은 소리나 움직임 등의 자극에 대해 과도하고 지속적인 놀람 반응을 보이는 것으로, PTSD 과각성 증상군의 하나이다.",
    "definition_en": "An excessive and persistent startle reaction to unexpected stimuli such as sounds or movements, one of the hyperarousal symptoms in PTSD.",
    "significance": "편도체 과활성화와 전전두엽 억제 감소를 반영하는 신경생물학적 지표로, PTSD의 생물학적 기반을 보여주는 객관적 측정 가능한 증상이다.",
    "key_researchers": [
      {
        "name_ko": "스콧 오르",
        "name_en": "Scott Orr",
        "contribution": "PTSD에서 놀람반응의 과도한 크기와 습관화 저하를 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과각성",
        "name_en": "Hyperarousal",
        "id": "TRAUMA_HYP_013"
      },
      {
        "name_ko": "투쟁-도피-동결 반응",
        "name_en": "Fight-Flight-Freeze Response",
        "id": "TRAUMA_FFF_031"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "놀람반응 = 위험 경보 시스템의 '감도'가 너무 높게 설정된 상태",
      "differential": "정상적 놀람반응은 빠르게 습관화되나, PTSD에서는 습관화가 지연되어 반복 자극에도 과도한 반응이 지속된다",
      "key_point": "PTSD에서는 놀람반응의 습관화(habituation)가 저하되어, 반복적 자극에도 반응이 감소하지 않는다",
      "common_mistake": "놀람반응을 단순한 겁이 많은 성격으로 치부하면 안 된다. 신경생물학적 변화를 반영하는 PTSD 증상이다"
    }
  },
  {
    "id": "TRAUMA_TME_015",
    "terminology": "외상 기억 (Trauma Memory)",
    "terminology_ko": "외상 기억",
    "terminology_en": "Trauma Memory",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건에 대한 기억이 맥락 정보 없이 감각적·정서적 요소 위주로 단편적으로 저장되어, 시간순서 없이 현재 경험처럼 침습적으로 인출되는 기억 현상이다.",
    "definition_en": "A memory phenomenon in which traumatic event memories are fragmentarily stored with sensory-emotional elements without contextual information, intrusively retrieved as present experiences without temporal order.",
    "significance": "PTSD의 침습적 재경험을 설명하는 핵심 기억 이론으로, 노출치료의 목표가 외상 기억을 맥락화하고 통합하는 것임을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "아닉 에일러스",
        "name_en": "Anke Ehlers",
        "contribution": "외상 기억의 부적절한 맥락화(poor contextualization)가 침습적 재경험의 핵심 기제라는 인지모형을 제안"
      },
      {
        "name_ko": "크리스 브루인",
        "name_en": "Chris Brewin",
        "contribution": "이중표상이론(dual representation theory)을 통해 외상 기억의 두 가지 시스템을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "침습적 재경험",
        "name_en": "Intrusive Re-experiencing",
        "id": "TRAUMA_INR_008"
      },
      {
        "name_ko": "플래시백",
        "name_en": "Flashback",
        "id": "TRAUMA_FLB_009"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "해리성 기억상실",
        "name_en": "Dissociative Amnesia",
        "id": "SOMDIS_DAM_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외상 기억 = 편집 안 된 '날것의 영상' → 시간·장소 태그 없이 감각 그대로 저장",
      "differential": "일반 자전적 기억은 시간적 맥락과 함께 서술적으로 인출되나, 외상 기억은 맥락 없이 감각적으로 침입한다",
      "key_point": "치료의 핵심은 단편적 감각 기억을 시간적 맥락이 있는 서술적 기억(narrative memory)으로 통합하는 것이다",
      "common_mistake": "외상 기억이 항상 완전히 억압된다고 생각하면 안 된다. 오히려 침습적으로 과도하게 활성화되는 것이 핵심 문제이다"
    }
  },
  {
    "id": "TRAUMA_DIS_016",
    "terminology": "해리 (Dissociation)",
    "terminology_ko": "해리",
    "terminology_en": "Dissociation",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "의식, 기억, 정체감, 감정, 지각, 행동, 신체 표상의 정상적 통합이 붕괴되거나 불연속되는 경험으로, 외상에 대한 방어 기제로 작용한다.",
    "definition_en": "An experience of disruption or discontinuity in the normal integration of consciousness, memory, identity, emotion, perception, behavior, and body representation, functioning as a defense against trauma.",
    "significance": "PTSD의 해리 하위유형 인정은 외상 반응의 다양성을 보여주며, 해리 수준에 따라 치료 접근(안정화 우선)이 달라진다.",
    "key_researchers": [
      {
        "name_ko": "베셀 반 데어 콜크",
        "name_en": "Bessel van der Kolk",
        "contribution": "외상 후 해리 반응의 신경생물학적 기제와 신체적 영향을 체계적으로 연구"
      },
      {
        "name_ko": "온노 반 데어 하트",
        "name_en": "Onno van der Hart",
        "contribution": "구조적 해리 이론을 통해 외상 관련 해리의 체계적 분류를 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이인증",
        "name_en": "Depersonalization",
        "id": "TRAUMA_DEP_017"
      },
      {
        "name_ko": "비현실감",
        "name_en": "Derealization",
        "id": "TRAUMA_DER_018"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_004"
      },
      {
        "name_ko": "플래시백",
        "name_en": "Flashback",
        "id": "TRAUMA_FLB_009"
      }
    ],
    "sub_types": [
      {
        "name": "이인증",
        "description": "자기 자신에서 분리된 느낌, 관찰자가 된 느낌"
      },
      {
        "name": "비현실감",
        "description": "주변 환경이 비현실적이거나 꿈 같은 느낌"
      },
      {
        "name": "해리성 기억상실",
        "description": "외상 사건에 대한 중요한 측면을 기억하지 못함"
      },
      {
        "name": "정체감 해리",
        "description": "자기 정체감의 분리나 변화를 경험"
      }
    ],
    "quiz_hints": {
      "mnemonic": "해리 = 압도적 외상에 대한 '정신적 비상구' → 의식의 통합이 깨짐",
      "differential": "불안은 위협에 대한 과활성화 반응이나, 해리는 위협에 대한 비활성화(shutdown) 반응이다",
      "key_point": "DSM-5에서 PTSD의 해리 하위유형(이인증/비현실감)이 공식적으로 인정되었다",
      "common_mistake": "해리를 꾀병이나 연기로 오해하면 안 된다. 외상에 대한 불수의적 신경생물학적 방어 반응이다"
    }
  },
  {
    "id": "TRAUMA_DEP_017",
    "terminology": "이인증 (Depersonalization)",
    "terminology_ko": "이인증",
    "terminology_en": "Depersonalization",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "자기 자신의 사고, 감정, 감각, 신체로부터 분리되거나 외부 관찰자가 된 것처럼 느끼는 해리적 경험이다.",
    "definition_en": "A dissociative experience of feeling detached from one's own thoughts, feelings, sensations, or body, as if being an outside observer of oneself.",
    "significance": "PTSD 해리 하위유형의 두 가지 핵심 증상 중 하나로, 과활성화(과각성)와 대비되는 비활성화 반응을 나타낸다.",
    "key_researchers": [
      {
        "name_ko": "루스 라니어스",
        "name_en": "Ruth Lanius",
        "contribution": "PTSD 해리 하위유형에서 이인증의 신경생물학적 기반(전전두엽 과활성화)을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비현실감",
        "name_en": "Derealization",
        "id": "TRAUMA_DER_018"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이인증 = De(분리) + Person(자기) + alization → 자기 자신에서 분리된 느낌",
      "differential": "이인증은 자기 자신에서 분리된 느낌이고, 비현실감은 외부 세계에서 분리된 느낌이다",
      "key_point": "현실검증력은 유지된다. 즉, '분리된 것 같다'고 느끼면서도 실제로 분리되지 않았음을 인식한다",
      "common_mistake": "이인증을 정신증적 증상으로 오해하면 안 된다. 현실검증력이 유지되는 해리적 경험이다"
    }
  },
  {
    "id": "TRAUMA_DER_018",
    "terminology": "비현실감 (Derealization)",
    "terminology_ko": "비현실감",
    "terminology_en": "Derealization",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "주변 환경이 비현실적이거나 꿈 같거나, 왜곡되거나, 멀리 떨어져 있는 것처럼 느끼는 해리적 경험이다.",
    "definition_en": "A dissociative experience in which surroundings feel unreal, dreamlike, distorted, or distant, as if separated from the external world.",
    "significance": "이인증과 함께 PTSD 해리 하위유형의 핵심 증상이며, 압도적 외상에 대한 과억제(over-modulation) 반응을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "루스 라니어스",
        "name_en": "Ruth Lanius",
        "contribution": "비현실감이 정서 과억제(overmodulation)의 산물임을 신경영상 연구로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이인증",
        "name_en": "Depersonalization",
        "id": "TRAUMA_DEP_017"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "비현실감 = De(분리) + Real(현실) + ization → 현실 세계에서 분리된 느낌",
      "differential": "이인증이 '내가 나 같지 않다'이면, 비현실감은 '세상이 진짜 같지 않다'이다",
      "key_point": "과각성(과활성화)과 대비되는 비활성화(shutdown) 반응으로, PTSD 해리 하위유형에서 관찰된다",
      "common_mistake": "비현실감을 정신증의 현실왜곡과 혼동하면 안 된다. 비현실감에서는 '세상이 비현실적으로 느껴진다'는 주관적 경험이며 현실검증력은 유지된다"
    }
  },
  {
    "id": "TRAUMA_EMD_019",
    "terminology": "안구운동 민감소실 및 재처리 (EMDR)",
    "terminology_ko": "안구운동 민감소실 및 재처리",
    "terminology_en": "Eye Movement Desensitization and Reprocessing",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 기억을 떠올리면서 치료자의 손가락을 따라 눈을 좌우로 움직이는 양측성 자극을 통해 외상 기억의 재처리를 촉진하는 심리치료법이다.",
    "definition_en": "A psychotherapy that facilitates reprocessing of trauma memories through bilateral stimulation, typically side-to-side eye movements following the therapist's finger, while recalling traumatic memories.",
    "significance": "PTSD 치료에서 노출치료와 동등한 효과를 보이는 근거 기반 치료법으로, WHO와 APA 모두 1차 치료로 권고하고 있다.",
    "key_researchers": [
      {
        "name_ko": "프랜신 샤피로",
        "name_en": "Francine Shapiro",
        "contribution": "EMDR을 최초로 개발(1987)하고 8단계 프로토콜을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 기억",
        "name_en": "Trauma Memory",
        "id": "TRAUMA_TME_015"
      },
      {
        "name_ko": "지속노출치료",
        "name_en": "Prolonged Exposure",
        "id": "TRAUMA_PET_020"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "EMDR 8단계: 병력→준비→평가→민감소실→주입→신체검색→종결→재평가",
      "differential": "지속노출치료(PE)는 외상 기억에 대한 장시간 노출이 핵심이나, EMDR은 양측성 자극을 통한 기억 재처리가 핵심이다",
      "key_point": "안구운동이라는 양측성 자극의 작용 기제에 대해서는 논쟁이 있으나, 전체 치료 패키지의 효과는 충분히 입증되었다",
      "common_mistake": "EMDR의 효과가 안구운동에만 기인한다고 단정하면 안 된다. 노출, 인지 재구조화 등 다중 요소가 작용한다"
    }
  },
  {
    "id": "TRAUMA_PET_020",
    "terminology": "지속노출치료 (Prolonged Exposure)",
    "terminology_ko": "지속노출치료",
    "terminology_en": "Prolonged Exposure",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 기억에 대한 상상적 노출(imaginal exposure)과 회피하던 상황에 대한 실제 노출(in vivo exposure)을 체계적으로 반복하여 외상 기억의 정서적 처리를 촉진하는 치료법이다.",
    "definition_en": "A therapy that systematically facilitates emotional processing of trauma memories through repeated imaginal exposure to the trauma memory and in vivo exposure to avoided situations.",
    "significance": "PTSD 치료에서 가장 강력한 경험적 근거를 가진 심리치료법으로, Foa의 정서처리이론에 기반한다.",
    "key_researchers": [
      {
        "name_ko": "에드나 포아",
        "name_en": "Edna Foa",
        "contribution": "지속노출치료(PE)의 프로토콜을 개발하고 대규모 효과 연구를 수행"
      },
      {
        "name_ko": "바바라 로스바움",
        "name_en": "Barbara Rothbaum",
        "contribution": "PE의 효과를 다양한 외상 유형과 문화에서 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 기억",
        "name_en": "Trauma Memory",
        "id": "TRAUMA_TME_015"
      },
      {
        "name_ko": "회피",
        "name_en": "Avoidance in PTSD",
        "id": "TRAUMA_AVO_011"
      },
      {
        "name_ko": "EMDR",
        "name_en": "EMDR",
        "id": "TRAUMA_EMD_019"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PE의 2대 요소: 상상 노출(외상 기억 반복 회상) + 실제 노출(회피 상황 직면)",
      "differential": "인지처리치료(CPT)는 외상 관련 인지 왜곡의 수정에 초점을 맞추나, PE는 외상 기억에 대한 직접적 노출과 정서 처리에 초점을 맞춘다",
      "key_point": "Foa의 정서처리이론에 기반하며, 치료 중 외상 기억의 '습관화'와 '정서적 처리'가 핵심 치료 기제이다",
      "common_mistake": "지속노출치료가 환자를 재외상화시킨다고 오해하면 안 된다. 안전한 치료 환경에서 체계적으로 진행된다"
    }
  },
  {
    "id": "TRAUMA_CPR_021",
    "terminology": "인지처리치료 (Cognitive Processing Therapy)",
    "terminology_ko": "인지처리치료",
    "terminology_en": "Cognitive Processing Therapy",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 경험에 대한 인지적 왜곡(고착점)을 확인하고 소크라테스식 질문을 통해 수정하여, 외상 관련 신념의 변화를 촉진하는 인지행동치료법이다.",
    "definition_en": "A cognitive-behavioral therapy that identifies cognitive distortions (stuck points) about the traumatic experience and modifies them through Socratic questioning to promote change in trauma-related beliefs.",
    "significance": "PE와 함께 PTSD 치료의 양대 근거 기반 치료법으로, 인지적 접근을 선호하는 환자에게 대안을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "패트리샤 레식",
        "name_en": "Patricia Resick",
        "contribution": "인지처리치료(CPT)를 개발하고 성폭력 생존자를 대상으로 효과를 최초로 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지속노출치료",
        "name_en": "Prolonged Exposure",
        "id": "TRAUMA_PET_020"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CPT의 핵심 = '고착점(stuck points)' 찾기 → 소크라테스식 질문으로 인지 수정",
      "differential": "PE는 외상 기억에 대한 직접 노출이 핵심이나, CPT는 외상 관련 인지 왜곡(고착점)의 수정이 핵심이다",
      "key_point": "안전, 신뢰, 통제, 존중, 친밀감의 5개 주제에서 나타나는 인지 왜곡(고착점)을 다룬다",
      "common_mistake": "CPT를 일반적 인지치료와 동일시하면 안 된다. 외상 특화된 인지적 접근으로 고착점 개념이 고유하다"
    }
  },
  {
    "id": "TRAUMA_TFC_022",
    "terminology": "외상초점 인지행동치료 (Trauma-Focused CBT)",
    "terminology_ko": "외상초점 인지행동치료",
    "terminology_en": "Trauma-Focused Cognitive Behavioral Therapy",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상을 경험한 아동·청소년과 그 보호자를 대상으로 개발된 근거 기반 인지행동치료로, 심리교육, 이완, 정서조절, 인지처리, 외상 서술을 포함한다.",
    "definition_en": "An evidence-based cognitive-behavioral therapy designed for children and adolescents who have experienced trauma and their caregivers, including psychoeducation, relaxation, emotion regulation, cognitive processing, and trauma narrative.",
    "significance": "아동 외상 치료에서 가장 강력한 경험적 근거를 가진 치료법으로, 보호자의 적극적 참여가 포함된다는 특징이 있다.",
    "key_researchers": [
      {
        "name_ko": "주디스 코헨",
        "name_en": "Judith Cohen",
        "contribution": "아동·청소년을 위한 외상초점 CBT(TF-CBT)를 개발하고 다수의 RCT를 통해 효과를 입증"
      },
      {
        "name_ko": "앤소니 마나리노",
        "name_en": "Anthony Mannarino",
        "contribution": "TF-CBT의 공동 개발자로서 아동 성학대 외상 치료에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지처리치료",
        "name_en": "Cognitive Processing Therapy",
        "id": "TRAUMA_CPR_021"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "TF-CBT의 PRACTICE: 심리교육, 이완, 정서표현, 인지대처, 외상서술, 실제 통합, 부모 공동, 안전 향상",
      "differential": "성인 대상 PE/CPT와 달리, TF-CBT는 보호자의 치료 참여와 아동 발달 수준에 맞춘 개입이 핵심이다",
      "key_point": "아동 외상 치료의 금본위(gold standard)로, 보호자가 치료의 적극적 참여자가 된다",
      "common_mistake": "아동에게 성인 대상 외상 치료(PE, CPT)를 그대로 적용해도 된다고 생각하면 안 된다. 아동에게는 TF-CBT가 1차 선택이다"
    }
  },
  {
    "id": "TRAUMA_DEB_023",
    "terminology": "심리적 디브리핑 (Psychological Debriefing)",
    "terminology_ko": "심리적 디브리핑",
    "terminology_en": "Psychological Debriefing",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상 사건 직후 생존자들에게 사건에 대해 상세히 이야기하고 정서를 표현하도록 촉진하는 단회기 위기 개입 기법이다.",
    "definition_en": "A single-session crisis intervention technique that encourages trauma survivors to talk in detail about the event and express their emotions shortly after the traumatic experience.",
    "significance": "한때 널리 시행되었으나 PTSD 예방 효과가 없고 오히려 해로울 수 있다는 연구 결과가 축적되어, 현재는 권장되지 않는 대표적 사례이다.",
    "key_researchers": [
      {
        "name_ko": "제프리 미첼",
        "name_en": "Jeffrey Mitchell",
        "contribution": "위기사건 스트레스 디브리핑(CISD) 모델을 개발하여 초기 위기 개입의 체계를 마련"
      },
      {
        "name_ko": "사이먼 웨셀리",
        "name_en": "Simon Wessely",
        "contribution": "심리적 디브리핑의 비효과성과 잠재적 유해성에 대한 메타분석을 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "위기 개입",
        "name_en": "Crisis Intervention",
        "id": "TRAUMA_CRI_024"
      },
      {
        "name_ko": "급성 스트레스장애",
        "name_en": "Acute Stress Disorder",
        "id": "TRAUMA_ASD_002"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "디브리핑 = '좋은 의도, 나쁜 결과' → 증거 기반 실천의 중요성을 보여주는 사례",
      "differential": "심리적 응급처치(PFA)는 안전·안정·연결에 초점을 맞추나, 디브리핑은 외상 경험의 상세한 재술에 초점을 맞추어 역효과를 낸다",
      "key_point": "PTSD 예방에 효과가 없으며 오히려 해로울 수 있어 현재 대부분의 가이드라인에서 권장하지 않는다",
      "common_mistake": "외상 직후에 사건을 상세히 이야기하는 것이 항상 도움이 된다고 생각하면 안 된다. 시기상조의 노출은 해로울 수 있다"
    }
  },
  {
    "id": "TRAUMA_CRI_024",
    "terminology": "위기 개입 (Crisis Intervention)",
    "terminology_ko": "위기 개입",
    "terminology_en": "Crisis Intervention",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "외상이나 위기 상황 직후 즉각적인 심리적 안정화, 안전 확보, 기본 욕구 충족, 사회적 연결을 제공하여 급성기 고통을 경감시키는 단기 개입이다.",
    "definition_en": "A short-term intervention immediately following trauma or crisis that provides psychological stabilization, safety, basic needs, and social connection to reduce acute distress.",
    "significance": "심리적 응급처치(PFA)로 대표되는 현대적 위기 개입은 디브리핑의 실패에서 교훈을 얻어 안정화와 연결에 초점을 맞춘다.",
    "key_researchers": [
      {
        "name_ko": "패트리샤 왓슨",
        "name_en": "Patricia Watson",
        "contribution": "심리적 응급처치(PFA) 프로토콜의 개발과 보급에 핵심적으로 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "심리적 디브리핑",
        "name_en": "Psychological Debriefing",
        "id": "TRAUMA_DEB_023"
      },
      {
        "name_ko": "급성 스트레스장애",
        "name_en": "Acute Stress Disorder",
        "id": "TRAUMA_ASD_002"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "TRAUMA_RES_029"
      }
    ],
    "sub_types": [
      {
        "name": "심리적 응급처치(PFA)",
        "description": "안전, 진정, 효능감, 연결, 희망의 5대 원칙에 기반한 위기 개입"
      },
      {
        "name": "위기 상담",
        "description": "위기 상황에서 단기적 문제 해결과 정서적 지지를 제공"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PFA 5대 원칙: 안전(Safety), 진정(Calming), 효능감(Efficacy), 연결(Connection), 희망(Hope) = SCECH",
      "differential": "디브리핑은 외상 재술을 촉진하나, PFA는 안정화와 기본 욕구 충족에 초점을 맞춘다",
      "key_point": "심리적 응급처치(PFA)는 외상 경험의 상세한 재술을 강요하지 않고 안전·안정·연결에 초점을 맞춘다",
      "common_mistake": "위기 개입에서 외상 경험을 상세히 탐색하려고 하면 안 된다. 급성기에는 안정화가 우선이다"
    }
  },
  {
    "id": "TRAUMA_MOR_025",
    "terminology": "도덕적 손상 (Moral Injury)",
    "terminology_ko": "도덕적 손상",
    "terminology_en": "Moral Injury",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "자신이 깊이 가지고 있는 도덕적 신념이나 윤리적 기준을 위반하는 사건을 목격, 저지르거나 방지하지 못한 경험으로 인한 심리적 고통이다.",
    "definition_en": "Psychological distress resulting from witnessing, perpetrating, or failing to prevent events that violate one's deeply held moral beliefs or ethical standards.",
    "significance": "전통적 PTSD 모형(공포 기반)으로 설명되지 않는 외상 후 수치심, 죄책감, 분노의 원인을 설명하는 비교적 새로운 개념이다.",
    "key_researchers": [
      {
        "name_ko": "조너선 셰이",
        "name_en": "Jonathan Shay",
        "contribution": "도덕적 손상 개념을 전쟁 참전용사 맥락에서 최초로 제안"
      },
      {
        "name_ko": "브렛 리츠",
        "name_en": "Brett Litz",
        "contribution": "도덕적 손상의 개념적 모형과 측정 도구를 개발하여 실증적 연구의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "이차적 외상 스트레스",
        "name_en": "Secondary Traumatic Stress",
        "id": "TRAUMA_STS_026"
      },
      {
        "name_ko": "복합 PTSD",
        "name_en": "Complex PTSD",
        "id": "TRAUMA_CPT_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도덕적 손상 = '공포'가 아닌 '수치심·죄책감'이 핵심 정서인 외상",
      "differential": "전통적 PTSD는 생명 위협에 대한 공포가 핵심이나, 도덕적 손상은 도덕적 위반에 대한 수치심과 죄책감이 핵심이다",
      "key_point": "공포 기반 외상과 달리 수치심과 죄책감이 핵심 정서이며, 공포 소거 기반 치료(PE)만으로는 충분하지 않을 수 있다",
      "common_mistake": "도덕적 손상을 PTSD와 동일시하면 안 된다. 공포가 아닌 도덕적 정서(수치심, 죄책감)가 중심이라는 점에서 구별된다"
    }
  },
  {
    "id": "TRAUMA_STS_026",
    "terminology": "이차적 외상 스트레스 (Secondary Traumatic Stress)",
    "terminology_ko": "이차적 외상 스트레스",
    "terminology_en": "Secondary Traumatic Stress",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "직접 외상을 경험하지 않았으나 외상 생존자를 돌보거나 그들의 이야기를 듣는 과정에서 PTSD와 유사한 증상이 발생하는 현상이다.",
    "definition_en": "A phenomenon in which PTSD-like symptoms develop in individuals who did not directly experience trauma but were exposed to it through caring for or hearing the stories of trauma survivors.",
    "significance": "정신건강 전문가, 응급구조사, 간호사 등 도움 제공자의 직업적 위험 요인으로, 전문가의 자기돌봄과 슈퍼비전의 중요성을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "찰스 피글리",
        "name_en": "Charles Figley",
        "contribution": "'동정 피로(compassion fatigue)' 개념을 제안하고 이차적 외상의 체계적 연구를 개척"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "세대간 외상",
        "name_en": "Intergenerational Trauma",
        "id": "TRAUMA_IGT_027"
      },
      {
        "name_ko": "도덕적 손상",
        "name_en": "Moral Injury",
        "id": "TRAUMA_MOR_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이차적 외상 = '공감의 비용' → 타인의 외상에 공감하다가 자신도 외상화됨",
      "differential": "소진(burnout)은 만성적 업무 스트레스에 의한 전반적 탈진이나, 이차적 외상 스트레스는 타인의 외상 노출로 인한 PTSD 유사 증상이다",
      "key_point": "DSM-5에서 PTSD 진단 기준 A(외상 노출)에 '직업적 노출'이 포함되어 간접 외상의 영향이 공식 인정되었다",
      "common_mistake": "이차적 외상 스트레스를 단순한 직업적 스트레스나 소진과 동일시하면 안 된다. PTSD와 유사한 특이적 증상 프로필을 보인다"
    }
  },
  {
    "id": "TRAUMA_IGT_027",
    "terminology": "세대간 외상 (Intergenerational Trauma)",
    "terminology_ko": "세대간 외상",
    "terminology_en": "Intergenerational Trauma",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "부모나 조부모가 경험한 외상의 심리적·생물학적 영향이 직접 외상을 경험하지 않은 후속 세대에게 전달되는 현상이다.",
    "definition_en": "A phenomenon in which the psychological and biological effects of trauma experienced by parents or grandparents are transmitted to subsequent generations who did not directly experience the trauma.",
    "significance": "후성유전학적 기제(코르티솔 반응의 세대간 전달)와 양육 행동을 통한 외상의 세대간 전달은 외상의 장기적·사회적 영향을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "레이첼 예후다",
        "name_en": "Rachel Yehuda",
        "contribution": "홀로코스트 생존자의 자녀에서 HPA축 변화를 발견하여 후성유전적 외상 전달의 근거를 제공"
      },
      {
        "name_ko": "마리아 옐로 호스 브레이브 하트",
        "name_en": "Maria Yellow Horse Brave Heart",
        "contribution": "원주민 공동체에서의 역사적 외상(historical trauma) 개념을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      },
      {
        "name_ko": "이차적 외상 스트레스",
        "name_en": "Secondary Traumatic Stress",
        "id": "TRAUMA_STS_026"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "세대간 외상 전달 경로: 후성유전(코르티솔 변화) + 양육행동(불안정 애착) + 가족 내러티브",
      "differential": "이차적 외상 스트레스는 타인의 외상 이야기에 노출되어 발생하나, 세대간 외상은 부모의 외상이 생물학적·행동적으로 자녀에게 전달된다",
      "key_point": "후성유전학적 기제(DNA 메틸화 등)를 통해 외상의 생물학적 영향이 세대를 넘어 전달될 수 있다",
      "common_mistake": "세대간 외상을 단순히 '외상 이야기를 듣고 자란 것'으로 축소하면 안 된다. 후성유전적 변화를 포함하는 생물학적 경로가 있다"
    }
  },
  {
    "id": "TRAUMA_ACE_028",
    "terminology": "역경적 아동기 경험 (Adverse Childhood Experiences)",
    "terminology_ko": "역경적 아동기 경험",
    "terminology_en": "Adverse Childhood Experiences",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "아동기에 경험한 학대, 방임, 가정 내 역기능(부모의 약물남용, 정신질환, 이혼, 가정폭력 등)을 포괄하는 부정적 경험으로, 누적될수록 성인기 건강 문제가 증가한다.",
    "definition_en": "Negative experiences in childhood encompassing abuse, neglect, and household dysfunction (parental substance abuse, mental illness, divorce, domestic violence), with cumulative exposure increasing adult health problems.",
    "significance": "ACE 점수가 높을수록 성인기 정신·신체 건강 문제, 사회적 문제의 위험이 용량-반응적으로 증가한다는 대규모 역학 연구의 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "빈센트 펠리티",
        "name_en": "Vincent Felitti",
        "contribution": "ACE 연구를 최초로 설계하고 수행하여 아동기 역경과 성인 건강의 관계를 입증"
      },
      {
        "name_ko": "로버트 안다",
        "name_en": "Robert Anda",
        "contribution": "CDC와 협력하여 대규모 ACE 연구를 수행하고 공중보건적 함의를 도출"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "세대간 외상",
        "name_en": "Intergenerational Trauma",
        "id": "TRAUMA_IGT_027"
      },
      {
        "name_ko": "복합 PTSD",
        "name_en": "Complex PTSD",
        "id": "TRAUMA_CPT_006"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "TRAUMA_RES_029"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [
      {
        "name": "학대",
        "description": "신체적, 정서적, 성적 학대"
      },
      {
        "name": "방임",
        "description": "신체적, 정서적 방임"
      },
      {
        "name": "가정 역기능",
        "description": "부모 약물남용, 정신질환, 가정폭력, 이혼, 수감"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ACE 10문항: 학대 3(신체·정서·성) + 방임 2(신체·정서) + 가정역기능 5",
      "differential": "외상은 특정 사건을 가리키나, ACE는 아동기 부정적 경험의 누적적 영향을 측정하는 역학적 개념이다",
      "key_point": "ACE 점수와 성인기 건강 문제 사이에는 용량-반응(dose-response) 관계가 있다. ACE 4점 이상은 위험이 크게 증가한다",
      "common_mistake": "ACE 점수가 높다고 반드시 정신장애가 발생한다고 단정하면 안 된다. 보호 요인과 회복탄력성이 결과를 조절한다"
    }
  },
  {
    "id": "TRAUMA_RES_029",
    "terminology": "회복탄력성 (Resilience)",
    "terminology_ko": "회복탄력성",
    "terminology_en": "Resilience",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "심각한 역경, 외상, 위협에 직면하여도 긍정적 적응을 유지하거나 빠르게 회복하는 역동적 과정이며, 고정된 특성이 아닌 발달 가능한 능력이다.",
    "definition_en": "A dynamic process of maintaining positive adaptation or recovering quickly in the face of significant adversity, trauma, or threat, a developable capacity rather than a fixed trait.",
    "significance": "외상 경험 후 대부분의 사람이 PTSD가 아닌 회복 경로를 따른다는 연구 결과는 강점 기반 접근과 예방적 개입의 중요성을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "조지 보나노",
        "name_en": "George Bonanno",
        "contribution": "외상 후 회복탄력성이 가장 흔한 반응 경로임을 대규모 종단 연구로 입증"
      },
      {
        "name_ko": "앤 매스턴",
        "name_en": "Ann Masten",
        "contribution": "'평범한 마법(ordinary magic)' 개념을 통해 회복탄력성이 특별한 능력이 아닌 보편적 적응 과정임을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 성장",
        "name_en": "Post-Traumatic Growth",
        "id": "TRAUMA_PTG_030"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회복탄력성 = '고무공'처럼 튀어오르는 능력 → 고정 특성이 아닌 발달 가능한 과정",
      "differential": "외상 후 성장은 외상 이전 수준을 넘어서는 긍정적 변화이나, 회복탄력성은 외상 이전 기능 수준으로의 빠른 복귀이다",
      "key_point": "외상 경험 후 가장 흔한 경로는 PTSD가 아닌 회복탄력성(약 65%)이라는 점이 중요하다",
      "common_mistake": "회복탄력성을 특별한 소수만 가진 고유한 능력으로 간주하면 안 된다. Masten은 이를 '평범한 마법'이라 표현했다"
    }
  },
  {
    "id": "TRAUMA_PTG_030",
    "terminology": "외상 후 성장 (Post-Traumatic Growth)",
    "terminology_ko": "외상 후 성장",
    "terminology_en": "Post-Traumatic Growth",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "매우 도전적인 삶의 위기와의 투쟁을 통해 외상 이전 수준을 넘어서는 긍정적 심리적 변화를 경험하는 현상이다.",
    "definition_en": "A phenomenon of positive psychological change experienced as a result of the struggle with highly challenging life crises, exceeding pre-trauma levels of functioning.",
    "significance": "외상의 긍정적 결과 가능성을 조명하여 병리 중심 관점을 보완하며, 의미 만들기(meaning-making)의 치료적 중요성을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 테데스키",
        "name_en": "Richard Tedeschi",
        "contribution": "외상 후 성장 개념을 최초로 체계화하고 측정도구(PTGI)를 개발"
      },
      {
        "name_ko": "로렌스 칼훈",
        "name_en": "Lawrence Calhoun",
        "contribution": "외상 후 성장의 이론적 모형을 공동 개발하고 5개 성장 영역을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "TRAUMA_RES_029"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      }
    ],
    "sub_types": [
      {
        "name": "대인관계 향상",
        "description": "타인과의 관계가 더 깊어지고 친밀해짐"
      },
      {
        "name": "새로운 가능성 발견",
        "description": "삶에서 새로운 경로나 기회를 발견"
      },
      {
        "name": "개인적 강점 인식",
        "description": "자신의 강점과 능력에 대한 새로운 인식"
      },
      {
        "name": "영적 변화",
        "description": "실존적·영적 의미의 깊어짐"
      },
      {
        "name": "삶에 대한 감사",
        "description": "삶의 가치와 의미에 대한 깊어진 감사"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PTG 5대 영역: 관계(Relating), 가능성(Opportunities), 강점(Strength), 영성(Spiritual), 감사(Appreciation) = ROSSA",
      "differential": "회복탄력성은 외상 이전 수준으로의 복귀이나, 외상 후 성장은 외상 이전보다 더 높은 수준의 심리적 기능을 달성하는 것이다",
      "key_point": "PTG는 외상의 고통 자체가 아닌, 고통과의 '투쟁(struggle)' 과정에서 발생한다",
      "common_mistake": "외상 후 성장을 PTSD의 부재로 간주하면 안 된다. PTSD 증상과 성장이 공존할 수 있다"
    }
  },
  {
    "id": "TRAUMA_FFF_031",
    "terminology": "투쟁-도피-동결 반응 (Fight-Flight-Freeze Response)",
    "terminology_ko": "투쟁-도피-동결 반응",
    "terminology_en": "Fight-Flight-Freeze Response",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "위협에 직면했을 때 활성화되는 자율신경계의 생존 반응으로, 맞서 싸우거나(투쟁), 도망치거나(도피), 얼어붙는(동결) 세 가지 패턴으로 나타난다.",
    "definition_en": "An autonomic nervous system survival response activated when facing threat, manifesting in three patterns: confronting the threat (fight), escaping (flight), or immobilizing (freeze).",
    "significance": "PTSD의 과각성 증상과 해리 반응을 이해하는 진화적 기반을 제공하며, 외상 반응이 의지적 선택이 아닌 생존 본능임을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "월터 캐넌",
        "name_en": "Walter Cannon",
        "contribution": "투쟁-도피(fight-flight) 반응을 최초로 기술하여 스트레스 생리학의 기초를 마련"
      },
      {
        "name_ko": "스티븐 포지스",
        "name_en": "Stephen Porges",
        "contribution": "다미주신경이론(polyvagal theory)을 통해 동결 반응의 신경생물학적 기제를 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "과각성",
        "name_en": "Hyperarousal",
        "id": "TRAUMA_HYP_013"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociation",
        "id": "TRAUMA_DIS_016"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "투쟁(Fight)",
        "description": "위협에 맞서 공격적으로 대응하는 교감신경 활성화 반응"
      },
      {
        "name": "도피(Flight)",
        "description": "위협으로부터 도망치는 교감신경 활성화 반응"
      },
      {
        "name": "동결(Freeze)",
        "description": "움직이지 못하고 얼어붙는 배쪽 미주신경 반응"
      },
      {
        "name": "복종(Fawn)",
        "description": "위협에 순응하고 상대를 달래는 사회적 생존 반응"
      }
    ],
    "quiz_hints": {
      "mnemonic": "3F+1F: Fight(싸우기), Flight(도망치기), Freeze(얼어붙기) + Fawn(순응하기)",
      "differential": "투쟁/도피는 교감신경 과활성화(과각성)이나, 동결은 부교감신경(배쪽미주신경)의 비활성화(해리)이다",
      "key_point": "동결(freeze) 반응은 의지적 선택이 아닌 불수의적 신경반응이며, 이것이 외상 생존자의 자기비난을 이해하는 데 중요하다",
      "common_mistake": "동결 반응을 겁쟁이의 선택으로 오해하면 안 된다. 불수의적 신경생물학적 생존 반응이다"
    }
  },
  {
    "id": "TRAUMA_NAT_032",
    "terminology": "자연재해 외상 (Natural Disaster Trauma)",
    "terminology_ko": "자연재해 외상",
    "terminology_en": "Natural Disaster Trauma",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "지진, 홍수, 태풍, 산불 등 자연재해로 인한 심리적 외상으로, 지역사회 전체가 영향을 받으며 물리적 파괴와 상실이 동반된다.",
    "definition_en": "Psychological trauma resulting from natural disasters such as earthquakes, floods, hurricanes, and wildfires, affecting entire communities with accompanying physical destruction and loss.",
    "significance": "대규모 집단 외상의 대표적 유형으로, 개인치료뿐 아니라 지역사회 기반 개입과 공중보건적 접근이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "수잔 노렌-호크세마",
        "name_en": "Susan Nolen-Hoeksema",
        "contribution": "자연재해 이후 반추가 심리적 적응에 미치는 부정적 영향을 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "회복탄력성",
        "name_en": "Resilience",
        "id": "TRAUMA_RES_029"
      },
      {
        "name_ko": "위기 개입",
        "name_en": "Crisis Intervention",
        "id": "TRAUMA_CRI_024"
      },
      {
        "name_ko": "대인관계 외상",
        "name_en": "Interpersonal Trauma",
        "id": "TRAUMA_IPT_033"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자연재해 외상의 특징: 집단적 + 물리적 파괴 + 비의도적(가해자 없음)",
      "differential": "대인관계 외상은 인간에 의한 의도적 가해로 신뢰 훼손이 핵심이나, 자연재해 외상은 가해자가 없어 대인 신뢰 훼손이 덜하다",
      "key_point": "자연재해 외상은 대인관계 외상보다 PTSD 발생률이 상대적으로 낮고 회복이 빠른 경향이 있다",
      "common_mistake": "자연재해 외상이 대인관계 외상보다 항상 덜 심각하다고 단정하면 안 된다. 개인차가 크며 심각한 PTSD로 이어질 수 있다"
    }
  },
  {
    "id": "TRAUMA_IPT_033",
    "terminology": "대인관계 외상 (Interpersonal Trauma)",
    "terminology_ko": "대인관계 외상",
    "terminology_en": "Interpersonal Trauma",
    "category": "TRAUMA",
    "category_name": "외상 및 스트레스 관련 장애 (Trauma and Stressor-Related Disorders)",
    "definition": "성폭력, 아동학대, 가정폭력, 전쟁범죄 등 다른 인간에 의해 의도적으로 가해진 외상으로, 대인 신뢰의 근본적 훼손을 수반한다.",
    "definition_en": "Trauma intentionally inflicted by another human being, such as sexual assault, child abuse, domestic violence, and war crimes, involving fundamental betrayal of interpersonal trust.",
    "significance": "자연재해 외상보다 PTSD 발생률이 높고 복합 PTSD로 이어질 가능성이 크며, 인간에 대한 기본적 신뢰 훼손이 치료의 핵심 과제가 된다.",
    "key_researchers": [
      {
        "name_ko": "제니퍼 프레이드",
        "name_en": "Jennifer Freyd",
        "contribution": "배반 외상이론(betrayal trauma theory)을 제안하여 가해자와의 관계가 외상 반응에 미치는 영향을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "복합 PTSD",
        "name_en": "Complex PTSD",
        "id": "TRAUMA_CPT_006"
      },
      {
        "name_ko": "자연재해 외상",
        "name_en": "Natural Disaster Trauma",
        "id": "TRAUMA_NAT_032"
      },
      {
        "name_ko": "역경적 아동기 경험",
        "name_en": "Adverse Childhood Experiences",
        "id": "TRAUMA_ACE_028"
      },
      {
        "name_ko": "외상 후 스트레스장애",
        "name_en": "Post-Traumatic Stress Disorder",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "성폭력",
        "description": "강간, 성추행 등 성적 가해"
      },
      {
        "name": "아동학대",
        "description": "신체적, 정서적, 성적 학대 및 방임"
      },
      {
        "name": "가정폭력",
        "description": "친밀한 파트너에 의한 반복적 폭력"
      },
      {
        "name": "전쟁/고문",
        "description": "전쟁, 테러, 고문 등 조직적 폭력"
      }
    ],
    "quiz_hints": {
      "mnemonic": "대인관계 외상 = 인간에 의한 외상 → '배반(betrayal)'이 핵심 상처",
      "differential": "자연재해 외상은 가해자가 없어 신뢰 훼손이 적으나, 대인관계 외상은 인간에 대한 기본적 신뢰가 훼손된다",
      "key_point": "대인관계 외상은 자연재해보다 PTSD 발생률이 높고 복합 PTSD로 이어질 가능성이 더 크다",
      "common_mistake": "모든 외상을 동일하게 취급하면 안 된다. 대인관계 외상은 신뢰 훼손이라는 고유한 치료 과제를 가진다"
    }
  }
];

TERMS_DATA.MOOD = [
  {
    "id": "MOOD_MDD_001",
    "terminology": "주요우울장애 (Major Depressive Disorder)",
    "terminology_ko": "주요우울장애",
    "terminology_en": "Major Depressive Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울한 기분이나 흥미·쾌락의 상실이 2주 이상 지속되며, 수면, 식욕, 에너지, 집중력, 자존감의 변화를 동반하여 일상 기능에 심각한 장해를 초래하는 장애이다.",
    "definition_en": "A disorder characterized by depressed mood or loss of interest/pleasure lasting at least two weeks, accompanied by changes in sleep, appetite, energy, concentration, and self-esteem, causing significant functional impairment.",
    "significance": "전 세계적으로 장애 원인 1위인 가장 흔한 정신장애로, 자살의 주요 위험 요인이며 신체 건강 문제와도 밀접하게 관련된다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "우울증의 인지모형(인지삼제)을 개발하고 인지치료를 창시하여 우울증 치료에 혁명을 가져옴"
      },
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "학습된 무력감 모형을 통해 우울증의 행동적·인지적 기제를 설명"
      },
      {
        "name_ko": "피터 르윈손",
        "name_en": "Peter Lewinsohn",
        "contribution": "우울증의 행동모형을 개발하여 긍정적 강화의 감소가 우울의 핵심임을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      },
      {
        "name_ko": "학습된 무력감",
        "name_en": "Learned Helplessness",
        "id": "MOOD_LHE_015"
      },
      {
        "name_ko": "지속성 우울장애",
        "name_en": "Persistent Depressive Disorder",
        "id": "MOOD_PDD_004"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      }
    ],
    "sub_types": [
      {
        "name": "불안성 고통 동반",
        "description": "현저한 불안 증상이 동반되는 유형"
      },
      {
        "name": "혼합 양상 동반",
        "description": "조증이나 경조증의 일부 증상이 동반"
      },
      {
        "name": "멜랑콜리아 양상",
        "description": "현저한 무쾌감증, 정신운동 변화, 조기각성 등"
      },
      {
        "name": "비전형적 양상",
        "description": "기분반응성, 과수면, 과식, 납 같은 마비감"
      },
      {
        "name": "정신병적 양상 동반",
        "description": "망상이나 환각이 동반되는 심각한 형태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "MDD 9대 증상 = SIG E CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide + 우울 기분",
      "differential": "지속성 우울장애는 2년 이상의 만성 우울이나, MDD는 2주 이상의 삽화적 우울로 증상이 더 심각하다",
      "key_point": "진단에 핵심 증상(우울 기분 또는 흥미 상실) 중 최소 1개를 포함하여 총 5개 이상의 증상이 2주 이상 필요하다",
      "common_mistake": "단순한 슬픔이나 일시적 우울감을 MDD로 진단하면 안 된다. 기간, 증상 수, 기능 저하의 세 가지 기준을 모두 충족해야 한다"
    }
  },
  {
    "id": "MOOD_BP1_002",
    "terminology": "제1형 양극성장애 (Bipolar I Disorder)",
    "terminology_ko": "제1형 양극성장애",
    "terminology_en": "Bipolar I Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "최소 1회 이상의 조증 삽화(7일 이상 지속되는 비정상적으로 고양되거나 과민한 기분과 활력 증가)가 있는 양극성장애로, 우울 삽화가 동반될 수 있다.",
    "definition_en": "A bipolar disorder with at least one manic episode (abnormally elevated or irritable mood with increased energy lasting 7+ days), which may be accompanied by depressive episodes.",
    "significance": "기분장애 중 가장 심각한 유형으로, 조증 삽화 동안의 판단력 저하로 심각한 사회적·직업적 손상을 초래하며 높은 자살 위험을 동반한다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "조울정신병(manic-depressive insanity) 개념을 확립하여 양극성장애의 현대적 이해의 기초를 마련"
      },
      {
        "name_ko": "프레더릭 굿윈",
        "name_en": "Frederick Goodwin",
        "contribution": "양극성장애의 포괄적 교과서를 저술하고 리튬 치료의 임상적 확립에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조증 삽화",
        "name_en": "Manic Episode",
        "id": "MOOD_MAN_006"
      },
      {
        "name_ko": "제2형 양극성장애",
        "name_en": "Bipolar II Disorder",
        "id": "MOOD_BP2_003"
      },
      {
        "name_ko": "리튬",
        "name_en": "Lithium",
        "id": "MOOD_LIT_025"
      },
      {
        "name_ko": "조현정동장애",
        "name_en": "Schizoaffective Disorder",
        "id": "SCHIZO_SAF_002"
      }
    ],
    "sub_types": [
      {
        "name": "급속순환형",
        "description": "1년에 4회 이상의 기분 삽화를 경험하는 유형"
      },
      {
        "name": "혼합 양상 동반",
        "description": "조증과 우울 증상이 동시에 나타나는 양상"
      },
      {
        "name": "정신병적 양상 동반",
        "description": "조증 또는 우울 삽화에서 망상이나 환각이 동반"
      }
    ],
    "quiz_hints": {
      "mnemonic": "Bipolar I = 조증(Mania)이 '1'번 이상 → I = manic(조증이 필수)",
      "differential": "Bipolar I은 완전한 조증 삽화(7일+)가 필수이나, Bipolar II는 경조증(4일+)만 나타나고 완전한 조증은 없다",
      "key_point": "진단에 조증 삽화가 필수이며, 우울 삽화는 흔히 동반되지만 진단에 필수적이지는 않다",
      "common_mistake": "양극성장애를 단순히 기분이 오르내리는 것으로 이해하면 안 된다. 조증은 7일 이상의 명확한 기분 삽화를 의미한다"
    }
  },
  {
    "id": "MOOD_BP2_003",
    "terminology": "제2형 양극성장애 (Bipolar II Disorder)",
    "terminology_ko": "제2형 양극성장애",
    "terminology_en": "Bipolar II Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "최소 1회 이상의 경조증 삽화(4일 이상)와 최소 1회 이상의 주요우울 삽화가 있되, 완전한 조증 삽화는 경험하지 않는 양극성장애이다.",
    "definition_en": "A bipolar disorder with at least one hypomanic episode (4+ days) and at least one major depressive episode, without ever experiencing a full manic episode.",
    "significance": "우울 삽화가 주된 임상상이어서 단극성 우울증으로 오진되기 쉬우며, 항우울제 단독 사용 시 경조증 전환 위험이 있다.",
    "key_researchers": [
      {
        "name_ko": "하기오프 아키스칼",
        "name_en": "Hagop Akiskal",
        "contribution": "양극성 스펙트럼 개념을 확장하고 Bipolar II의 독립적 진단적 타당성을 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "경조증 삽화",
        "name_en": "Hypomanic Episode",
        "id": "MOOD_HYP_007"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "순환감정장애",
        "name_en": "Cyclothymic Disorder",
        "id": "MOOD_CYC_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Bipolar II = 경조증(Hypo) + 우울(Depression) → II = hypo(경조증, 조증 미만)",
      "differential": "Bipolar I은 완전한 조증이 있으나, Bipolar II는 경조증(입원 불필요, 기능 손상 경미)까지만 있고 우울이 주된 임상상이다",
      "key_point": "주된 고통은 우울 삽화에서 오며, 경조증은 본인이 인식하지 못할 수 있어 병력 청취가 중요하다",
      "common_mistake": "Bipolar II를 Bipolar I의 경미한 형태로 간주하면 안 된다. 우울의 만성성과 기능 저하가 심각할 수 있다"
    }
  },
  {
    "id": "MOOD_PDD_004",
    "terminology": "지속성 우울장애 (Persistent Depressive Disorder)",
    "terminology_ko": "지속성 우울장애",
    "terminology_en": "Persistent Depressive Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "성인에서 최소 2년(아동·청소년은 1년) 이상 우울한 기분이 대부분의 날 지속되며, 수면·식욕·에너지·자존감·집중력·절망감 중 2가지 이상의 증상이 동반되는 만성 우울장애이다.",
    "definition_en": "A chronic depressive disorder with depressed mood on most days for at least 2 years (1 year for children/adolescents), accompanied by two or more symptoms including sleep, appetite, energy, self-esteem, concentration, and hopelessness changes.",
    "significance": "DSM-5에서 기존의 기분저하장애(dysthymia)와 만성 주요우울장애를 통합한 진단으로, 만성 우울의 높은 유병률과 기능 저하를 반영한다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 클라인",
        "name_en": "Daniel Klein",
        "contribution": "기분저하장애(dysthymia)의 장기 경과와 MDD와의 관계를 종단적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "순환감정장애",
        "name_en": "Cyclothymic Disorder",
        "id": "MOOD_CYC_005"
      },
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      }
    ],
    "sub_types": [
      {
        "name": "순수 기분저하증후군",
        "description": "MDD 기준을 충족한 적이 없는 만성적 경미한 우울"
      },
      {
        "name": "지속적 주요우울 삽화 동반",
        "description": "MDD 기준을 지속적으로 충족하는 만성 우울"
      },
      {
        "name": "간헐적 주요우울 삽화 동반",
        "description": "MDD 삽화가 간헐적으로 나타나며 그 사이에도 경미한 우울 지속"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PDD = Persistent(지속) → 2년 이상 만성 우울 (구 기분저하장애 + 만성 MDD의 통합)",
      "differential": "MDD는 삽화적(2주+)이고 증상이 심각하나, PDD는 만성적(2년+)이고 증상이 상대적으로 경미하지만 오래 지속된다",
      "key_point": "DSM-5에서 기분저하장애(dysthymia)와 만성 MDD를 통합한 진단이며, 이중우울증(double depression)도 이 진단에 포함된다",
      "common_mistake": "PDD가 MDD보다 항상 경미하다고 가정하면 안 된다. 만성성으로 인한 누적적 기능 저하가 심각할 수 있다"
    }
  },
  {
    "id": "MOOD_CYC_005",
    "terminology": "순환감정장애 (Cyclothymic Disorder)",
    "terminology_ko": "순환감정장애",
    "terminology_en": "Cyclothymic Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "최소 2년간 경조증 수준의 기분 고양과 우울증 수준의 기분 저하가 반복적으로 나타나되, 양극성장애나 주요우울장애의 진단 기준을 완전히 충족하지는 않는 만성 기분장애이다.",
    "definition_en": "A chronic mood disorder with alternating periods of hypomanic-level mood elevation and depressive-level mood decline over at least 2 years, without fully meeting criteria for bipolar disorder or major depressive disorder.",
    "significance": "양극성 스펙트럼의 경미한 형태로, 제1형 또는 제2형 양극성장애로 진행할 위험이 있어 장기적 모니터링이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "하기오프 아키스칼",
        "name_en": "Hagop Akiskal",
        "contribution": "순환감정장애를 양극성 스펙트럼의 일부로 개념화하고 장기 경과를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제2형 양극성장애",
        "name_en": "Bipolar II Disorder",
        "id": "MOOD_BP2_003"
      },
      {
        "name_ko": "지속성 우울장애",
        "name_en": "Persistent Depressive Disorder",
        "id": "MOOD_PDD_004"
      },
      {
        "name_ko": "경조증 삽화",
        "name_en": "Hypomanic Episode",
        "id": "MOOD_HYP_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "순환감정 = Cyclo(순환) + thymia(기분) → 기분이 순환적으로 오르내림 (2년+, 역치 미만)",
      "differential": "Bipolar II는 완전한 주요우울 삽화와 경조증 삽화가 있으나, 순환감정장애는 두 가지 모두 진단 역치 미만이다",
      "key_point": "약 15~50%가 이후 양극성장애(I형 또는 II형)로 진행할 수 있어 장기 추적이 필요하다",
      "common_mistake": "순환감정장애를 단순한 기분 변동으로 과소평가하면 안 된다. 만성적 기능 저하와 양극성장애로의 진행 위험이 있다"
    }
  },
  {
    "id": "MOOD_MAN_006",
    "terminology": "조증 삽화 (Manic Episode)",
    "terminology_ko": "조증 삽화",
    "terminology_en": "Manic Episode",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "비정상적으로 고양되거나, 팽창적이거나, 과민한 기분과 활력 증가가 최소 7일(또는 입원이 필요한 기간) 지속되며, 과대감, 수면욕구 감소, 다변, 사고비약, 주의산만, 목표지향적 활동 증가, 무분별한 행동이 나타나는 기분 삽화이다.",
    "definition_en": "A mood episode with abnormally elevated, expansive, or irritable mood and increased energy lasting at least 7 days (or any duration if hospitalization is needed), featuring grandiosity, decreased need for sleep, pressured speech, flight of ideas, distractibility, increased goal-directed activity, and reckless behavior.",
    "significance": "제1형 양극성장애의 진단에 필수적인 핵심 삽화로, 심각한 판단력 손상과 정신병적 증상을 동반할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "조증의 체계적 기술과 분류를 통해 현대 양극성장애 진단의 기초를 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "경조증 삽화",
        "name_en": "Hypomanic Episode",
        "id": "MOOD_HYP_007"
      },
      {
        "name_ko": "혼합 삽화",
        "name_en": "Mixed Features",
        "id": "MOOD_MIX_008"
      },
      {
        "name_ko": "리튬",
        "name_en": "Lithium",
        "id": "MOOD_LIT_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조증 증상 = DIG FAST: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity↑, Sleep↓, Talkativeness",
      "differential": "경조증은 4일 이상 지속되고 기능 손상이 경미하나, 조증은 7일 이상 지속되며 심각한 기능 손상이나 입원이 필요하다",
      "key_point": "기분 고양뿐 아니라 '활력(energy) 증가'가 DSM-5에서 핵심 기준으로 추가되었다",
      "common_mistake": "조증을 단순히 기분이 좋은 상태로 오해하면 안 된다. 과민한 조증도 있으며 심각한 판단력 손상을 동반한다"
    }
  },
  {
    "id": "MOOD_HYP_007",
    "terminology": "경조증 삽화 (Hypomanic Episode)",
    "terminology_ko": "경조증 삽화",
    "terminology_en": "Hypomanic Episode",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "조증과 유사한 증상이 최소 4일 이상 지속되나, 입원이 필요할 만큼 심각하지 않고 정신병적 양상이 없으며 사회적·직업적 기능에 현저한 손상을 초래하지 않는 기분 삽화이다.",
    "definition_en": "A mood episode with symptoms similar to mania lasting at least 4 days, but not severe enough to require hospitalization, without psychotic features, and not causing marked impairment in social or occupational functioning.",
    "significance": "제2형 양극성장애 진단의 핵심이며, 본인이 자각하지 못하여 진단이 어렵고 우울증으로 오진되는 주된 원인이다.",
    "key_researchers": [
      {
        "name_ko": "줄스 앵스트",
        "name_en": "Jules Angst",
        "contribution": "경조증의 역학과 Bipolar II의 독립적 진단 타당성에 대한 장기 종단 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조증 삽화",
        "name_en": "Manic Episode",
        "id": "MOOD_MAN_006"
      },
      {
        "name_ko": "제2형 양극성장애",
        "name_en": "Bipolar II Disorder",
        "id": "MOOD_BP2_003"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경조증 = Hypo(아래) + Mania → 조증 '미만'의 고양된 기분 (4일+, 입원 불필요)",
      "differential": "조증은 7일+, 기능 손상 심각, 정신병적 양상 가능하나, 경조증은 4일+, 기능 손상 경미, 정신병적 양상 없음",
      "key_point": "경조증 기간에 환자는 오히려 생산적이고 기분이 좋다고 느껴 스스로 보고하지 않으므로, 주변인의 관찰이 진단에 중요하다",
      "common_mistake": "경조증을 정상적인 기분 좋은 상태와 혼동하면 안 된다. 평소와 명확히 다른 기능 변화가 관찰되어야 한다"
    }
  },
  {
    "id": "MOOD_MIX_008",
    "terminology": "혼합 양상 (Mixed Features)",
    "terminology_ko": "혼합 양상",
    "terminology_en": "Mixed Features",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울 삽화 기간에 조증/경조증 증상이 동시에 나타나거나, 조증/경조증 삽화 기간에 우울 증상이 동시에 나타나는 양상 명시자이다.",
    "definition_en": "A specifier indicating simultaneous presence of manic/hypomanic symptoms during a depressive episode, or depressive symptoms during a manic/hypomanic episode.",
    "significance": "혼합 양상은 자살 위험이 특히 높고 치료가 복잡하며, DSM-5에서 기존의 '혼합 삽화'를 대체하는 차원적 명시자로 도입되었다.",
    "key_researchers": [
      {
        "name_ko": "수잔 맥엘로이",
        "name_en": "Susan McElroy",
        "contribution": "혼합 양상의 임상적 중요성과 치료적 함의를 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조증 삽화",
        "name_en": "Manic Episode",
        "id": "MOOD_MAN_006"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "혼합 양상 = 우울 + 조증의 '칵테일' → 에너지는 높은데 기분은 절망적 → 자살 위험 최고",
      "differential": "DSM-IV의 '혼합 삽화'는 조증+우울이 동시에 완전히 충족되어야 했으나, DSM-5의 '혼합 양상'은 반대극의 일부 증상만 있어도 적용된다",
      "key_point": "혼합 양상 동반 시 자살 위험이 특히 높으며, 항우울제 단독 사용은 금기이고 기분안정제가 우선이다",
      "common_mistake": "혼합 양상을 기분이 빠르게 교대하는 것(급속순환)과 혼동하면 안 된다. 혼합은 동시에 양극의 증상이 공존하는 것이다"
    }
  },
  {
    "id": "MOOD_SAD_009",
    "terminology": "계절성 우울 (Seasonal Pattern / Seasonal Affective Disorder)",
    "terminology_ko": "계절성 우울",
    "terminology_en": "Seasonal Affective Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "특정 계절(주로 가을~겨울)에 반복적으로 우울 삽화가 시작되고 다른 계절(주로 봄~여름)에 완화되는 패턴을 보이는 우울장애의 계절성 양상 명시자이다.",
    "definition_en": "A seasonal pattern specifier for depressive disorder characterized by recurrent depressive episodes starting in a specific season (typically fall/winter) and remitting in another season (typically spring/summer).",
    "significance": "일조량 감소와 멜라토닌·세로토닌 조절 이상이 기전으로, 광치료(light therapy)라는 독특한 치료법의 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "노먼 로젠탈",
        "name_en": "Norman Rosenthal",
        "contribution": "계절성 정동장애(SAD)를 최초로 기술하고 광치료의 효과를 입증(1984)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "모노아민 가설",
        "name_en": "Monoamine Hypothesis",
        "id": "MOOD_MON_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SAD = Seasonal(계절) Affective(정동) Disorder → 겨울 우울 + 비전형적 증상(과수면, 과식, 탄수화물 갈구)",
      "differential": "비계절성 MDD는 계절과 무관하게 발생하나, SAD는 특정 계절(주로 겨울)에 반복적으로 발생하고 그 외 계절에 완화된다",
      "key_point": "과수면, 과식, 탄수화물 갈구 등 비전형적 우울 증상이 흔하며, 광치료(10,000 lux, 아침 30분)가 1차 치료이다",
      "common_mistake": "겨울에 기분이 약간 가라앉는 것을 모두 SAD로 진단하면 안 된다. MDD 진단 기준을 충족해야 한다"
    }
  },
  {
    "id": "MOOD_PPD_010",
    "terminology": "산후우울증 (Postpartum Depression)",
    "terminology_ko": "산후우울증",
    "terminology_en": "Postpartum Depression",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "출산 전후(DSM-5에서는 임신 중 또는 출산 후 4주 이내)에 시작되는 주요우울 삽화로, 영아에 대한 양가감정, 불안, 돌봄 능력 저하 등이 특징적이다.",
    "definition_en": "A major depressive episode with onset during pregnancy or within 4 weeks of delivery (DSM-5 peripartum specifier), characterized by ambivalence toward the infant, anxiety, and impaired caregiving ability.",
    "significance": "산모의 약 10~15%에서 발생하며, 모자 관계와 영아 발달에 심각한 영향을 미칠 수 있어 조기 선별과 개입이 중요하다.",
    "key_researchers": [
      {
        "name_ko": "마이클 오하라",
        "name_en": "Michael O'Hara",
        "contribution": "산후우울증의 역학, 위험 요인, 치료에 관한 체계적 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "모노아민 가설",
        "name_en": "Monoamine Hypothesis",
        "id": "MOOD_MON_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "산후우울증 ≠ 산후우울감(baby blues): blues는 80%에서 나타나는 일시적 현상(2주 이내 소실)",
      "differential": "산후우울감(baby blues)은 2주 이내 자연 소실되는 경미한 기분 변화이나, 산후우울증은 MDD 기준을 충족하는 심각한 장애이다",
      "key_point": "DSM-5에서 '주산기 발병(peripartum onset)' 명시자로, 임신 중 시작되는 경우도 포함한다",
      "common_mistake": "산후우울증을 산후우울감(baby blues)과 동일시하면 안 된다. 산후우울증은 전문적 치료가 필요한 임상적 장애이다"
    }
  },
  {
    "id": "MOOD_PMD_011",
    "terminology": "월경전 불쾌감장애 (Premenstrual Dysphoric Disorder)",
    "terminology_ko": "월경전 불쾌감장애",
    "terminology_en": "Premenstrual Dysphoric Disorder",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "월경 주기의 황체기(월경 시작 1주 전)에 정서적 불안정, 과민, 우울, 불안 등의 심각한 증상이 반복적으로 나타나고 월경 시작 후 며칠 내에 완화되는 장애이다.",
    "definition_en": "A disorder with recurrent severe symptoms of emotional lability, irritability, depression, and anxiety during the luteal phase of the menstrual cycle (1 week before menses), remitting within a few days after menses onset.",
    "significance": "DSM-5에서 우울장애 범주에 새로 추가된 진단으로, 호르몬 변화에 대한 신경전달물질 반응의 개인차를 반영한다.",
    "key_researchers": [
      {
        "name_ko": "진 엔디콧",
        "name_en": "Jean Endicott",
        "contribution": "PMDD의 진단 기준과 평가도구를 개발하여 독립 진단으로서의 타당성을 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "MOOD_SSR_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PMDD = 월경 전 1주, 매달 반복, 월경 후 소실 → '달력이 예측하는 우울'",
      "differential": "일반적 월경전증후군(PMS)은 신체 증상이 주이고 경미하나, PMDD는 정서 증상이 주이며 기능 손상이 심각하다",
      "key_point": "DSM-5에서 우울장애 범주에 새로 추가되었으며, SSRI가 효과적인 1차 치료이다(지속적 또는 황체기 간헐적 투여)",
      "common_mistake": "PMDD를 단순한 PMS의 심한 형태로 간주하면 안 된다. 독립적인 정신장애로 전문적 치료가 필요하다"
    }
  },
  {
    "id": "MOOD_SUI_012",
    "terminology": "자살 (Suicide)",
    "terminology_ko": "자살",
    "terminology_en": "Suicide",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "자기 자신의 죽음을 의도하고 실행하여 사망에 이르는 행위로, 기분장애는 자살의 가장 강력한 정신의학적 위험 요인이다.",
    "definition_en": "An act of intentionally causing one's own death, with mood disorders being the strongest psychiatric risk factor for suicide.",
    "significance": "전 세계적으로 주요 사망 원인 중 하나이며, 기분장애(특히 MDD와 양극성장애)에서 자살 위험 평가와 예방이 치료의 핵심 과제이다.",
    "key_researchers": [
      {
        "name_ko": "에드윈 슈나이드만",
        "name_en": "Edwin Shneidman",
        "contribution": "자살학(suicidology)의 창시자로, '정신적 고통(psychache)' 개념을 제안"
      },
      {
        "name_ko": "토머스 조이너",
        "name_en": "Thomas Joiner",
        "contribution": "대인관계 이론(IPTS)을 통해 자살의 3요인(좌절된 소속감, 짐이 됨, 획득된 능력)을 제안"
      },
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "절망감(hopelessness)이 자살의 핵심 인지적 예측 인자임을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자살사고",
        "name_en": "Suicidal Ideation",
        "id": "MOOD_SID_013"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "경계선성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Joiner의 자살 3요인: 좌절된 소속감(Thwarted Belonging) + 짐이 됨(Burdensomeness) + 획득된 자살 능력(Acquired Capability)",
      "differential": "비자살적 자해(NSSI)는 죽음의 의도 없이 정서 조절 목적으로 자해하나, 자살은 죽음의 의도가 있다는 점에서 구별된다",
      "key_point": "절망감(hopelessness)이 우울 심각도보다 자살의 더 강력한 예측 인자이며, 치료 계획 회복 시기에도 자살 위험이 높다",
      "common_mistake": "우울이 심해질 때만 자살 위험이 높다고 생각하면 안 된다. 회복 초기 에너지가 증가하는 시기에도 위험이 높다"
    }
  },
  {
    "id": "MOOD_SID_013",
    "terminology": "자살사고 (Suicidal Ideation)",
    "terminology_ko": "자살사고",
    "terminology_en": "Suicidal Ideation",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "자살에 대한 생각이나 구상으로, 막연한 죽음에 대한 소망부터 구체적인 계획 수립까지 연속선 위에 존재한다.",
    "definition_en": "Thoughts or contemplation about suicide, existing on a continuum from vague wishes for death to concrete planning.",
    "significance": "자살 위험 평가의 핵심 지표이며, 수동적 자살사고(죽었으면 좋겠다)에서 능동적 자살사고(구체적 방법 구상)로의 진행이 위험 수준을 결정한다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "자살사고 척도(SSI: Scale for Suicide Ideation)를 개발하여 자살사고의 체계적 평가를 가능하게 함"
      },
      {
        "name_ko": "매튜 녹",
        "name_en": "Matthew Nock",
        "contribution": "자살사고에서 자살행동으로의 전환 기제를 연구하고 새로운 평가 방법(암묵적 연합 검사)을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      },
      {
        "name_ko": "자살시도",
        "name_en": "Suicide Attempt",
        "id": "MOOD_SAT_014"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [
      {
        "name": "수동적 자살사고",
        "description": "'죽었으면 좋겠다', '잠들어 안 깨었으면' 등 막연한 죽음 소망"
      },
      {
        "name": "능동적 자살사고",
        "description": "구체적인 자살 방법, 시기, 장소에 대한 계획을 구상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "자살사고의 연속선: 수동적(죽고 싶다) → 능동적(구체적 계획) → 의도(실행할 것) → 시도",
      "differential": "수동적 자살사고는 죽음에 대한 막연한 소망이나, 능동적 자살사고는 구체적 방법과 계획을 수반하여 위험이 훨씬 높다",
      "key_point": "자살사고의 빈도, 강도, 기간, 구체성, 통제감을 종합적으로 평가해야 위험 수준을 판단할 수 있다",
      "common_mistake": "자살사고에 대해 직접 질문하면 자살을 촉진한다는 것은 잘못된 통념이다. 직접 질문이 오히려 도움이 된다"
    }
  },
  {
    "id": "MOOD_SAT_014",
    "terminology": "자살시도 (Suicide Attempt)",
    "terminology_ko": "자살시도",
    "terminology_en": "Suicide Attempt",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "죽으려는 의도를 가지고 자기 자신을 해치는 행동을 실행한 것으로, 치명적이지 않더라도 죽음의 의도가 있었다면 자살시도로 분류한다.",
    "definition_en": "Self-injurious behavior carried out with the intent to die, classified as a suicide attempt even if not lethal as long as the intent to die was present.",
    "significance": "과거 자살시도력은 미래 자살의 가장 강력한 예측 인자이며, 시도 후 첫 3개월이 재시도 위험이 가장 높은 기간이다.",
    "key_researchers": [
      {
        "name_ko": "키이스 호턴",
        "name_en": "Keith Hawton",
        "contribution": "자살시도의 역학과 사후 관리(aftercare)의 효과에 대한 체계적 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      },
      {
        "name_ko": "자살사고",
        "name_en": "Suicidal Ideation",
        "id": "MOOD_SID_013"
      },
      {
        "name_ko": "자해",
        "name_en": "Non-Suicidal Self-Injury",
        "id": "MOOD_NSS_033"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자살시도의 핵심 구분 기준 = '죽으려는 의도'의 유무",
      "differential": "비자살적 자해(NSSI)는 죽음의 의도 없이 정서 조절 목적으로 자해하나, 자살시도는 죽음의 의도가 명확히 존재한다",
      "key_point": "과거 자살시도력이 미래 자살의 가장 강력한 단일 예측 인자이며, 시도 후 첫 3개월이 재시도 위험이 가장 높다",
      "common_mistake": "치명적이지 않은 자살시도를 '관심 끌기'로 축소하면 안 된다. 치명성이 낮더라도 죽음의 의도가 있었다면 심각하게 다루어야 한다"
    }
  },
  {
    "id": "MOOD_LHE_015",
    "terminology": "학습된 무력감 (Learned Helplessness)",
    "terminology_ko": "학습된 무력감",
    "terminology_en": "Learned Helplessness",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "통제 불가능한 부정적 경험에 반복적으로 노출된 후, 실제로 통제할 수 있는 상황에서도 노력을 포기하고 수동적으로 되는 심리적 상태이며, 우울증의 행동모형이다.",
    "definition_en": "A psychological state in which repeated exposure to uncontrollable negative experiences leads to passive resignation even in controllable situations, serving as a behavioral model of depression.",
    "significance": "동물 실험에서 출발하여 우울증의 인지행동적 설명을 제공하였으며, 이후 귀인 이론으로 발전하여 인지치료의 이론적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "마틴 셀리그만",
        "name_en": "Martin Seligman",
        "contribution": "개 실험을 통해 학습된 무력감을 최초로 발견하고 이를 우울증 모형으로 제안(1967)"
      },
      {
        "name_ko": "린 에이브럼슨",
        "name_en": "Lyn Abramson",
        "contribution": "학습된 무력감에 귀인 이론을 통합한 개정 모형(hopelessness theory)을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "학습된 무력감: 통제 불가 경험 → '아무것도 소용없다' → 포기 → 우울",
      "differential": "무동기(amotivation)는 다양한 원인의 동기 결여이나, 학습된 무력감은 통제 불가능 경험으로 인한 특정 인지 과정이다",
      "key_point": "원래 모형은 비인간 동물에서 관찰되었으나, 인간에 적용 시 귀인 양식(내적, 안정적, 전반적)이 핵심 매개변수로 추가되었다",
      "common_mistake": "학습된 무력감을 단순한 게으름이나 의지 부족으로 치부하면 안 된다. 통제 불가능 경험에 의해 학습된 인지적 상태이다"
    }
  },
  {
    "id": "MOOD_BCT_016",
    "terminology": "Beck의 인지삼제 (Beck's Cognitive Triad)",
    "terminology_ko": "Beck의 인지삼제",
    "terminology_en": "Beck's Cognitive Triad",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울증 환자가 자기 자신, 세상, 미래에 대해 체계적으로 부정적 관점을 가진다는 Beck의 인지이론의 핵심 개념이다.",
    "definition_en": "A core concept of Beck's cognitive theory proposing that depressed individuals hold systematically negative views about themselves, the world, and the future.",
    "significance": "우울증의 인지치료(CT)의 이론적 기반이며, 부정적 인지 삼제의 수정이 인지치료의 핵심 목표이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "인지삼제(자기, 세상, 미래에 대한 부정적 관점)를 우울증의 핵심 인지 구조로 제안(1967)"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부정적 자동사고",
        "name_en": "Negative Automatic Thoughts",
        "id": "MOOD_NAT_017"
      },
      {
        "name_ko": "역기능적 태도",
        "name_en": "Dysfunctional Attitudes",
        "id": "MOOD_DYA_018"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "MOOD_COT_023"
      },
      {
        "name_ko": "학습된 무력감",
        "name_en": "Learned Helplessness",
        "id": "MOOD_LHE_015"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [
      {
        "name": "자기에 대한 부정적 관점",
        "description": "'나는 무능하다', '나는 가치 없다'"
      },
      {
        "name": "세상에 대한 부정적 관점",
        "description": "'세상은 적대적이다', '아무도 도와주지 않는다'"
      },
      {
        "name": "미래에 대한 부정적 관점",
        "description": "'상황은 절대 나아지지 않을 것이다', '미래는 절망적이다'"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지삼제 = 3가지 부정: 나(Self) = 무능 + 세상(World) = 적대 + 미래(Future) = 절망 = SWF",
      "differential": "학습된 무력감은 통제 불가능 경험에서 비롯된 수동성이나, 인지삼제는 자기·세상·미래에 대한 체계적 부정적 인지 구조이다",
      "key_point": "인지삼제 중 '미래에 대한 부정적 관점(절망감)'이 자살의 가장 강력한 인지적 예측 인자이다",
      "common_mistake": "인지삼제를 일시적 부정적 생각과 동일시하면 안 된다. 우울증에서 작동하는 안정적인 인지 구조(스키마)를 반영한다"
    }
  },
  {
    "id": "MOOD_NAT_017",
    "terminology": "부정적 자동사고 (Negative Automatic Thoughts)",
    "terminology_ko": "부정적 자동사고",
    "terminology_en": "Negative Automatic Thoughts",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "특정 상황에서 비자발적으로, 신속하게 떠오르는 부정적이고 왜곡된 사고로, 우울한 기분과 행동에 직접적으로 영향을 미치는 인지적 산물이다.",
    "definition_en": "Negative and distorted thoughts that arise involuntarily and rapidly in specific situations, directly influencing depressed mood and behavior as cognitive products.",
    "significance": "Beck의 인지치료에서 가장 먼저 확인하고 수정하는 대상으로, 인지적 재구조화의 핵심 치료 표적이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "자동사고 개념을 최초로 제안하고 이를 인지치료의 핵심 개입 대상으로 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      },
      {
        "name_ko": "역기능적 태도",
        "name_en": "Dysfunctional Attitudes",
        "id": "MOOD_DYA_018"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "MOOD_COT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자동사고 = 마음의 '자동 자막' → 상황에서 즉각적으로 뜨는 부정적 해석",
      "differential": "역기능적 태도(핵심 신념)는 깊은 수준의 안정적 스키마이나, 자동사고는 그 스키마에서 생성되는 표면적·상황적 인지 산물이다",
      "key_point": "자동사고는 역기능적 태도(핵심 신념)에서 생성되는 표면적 인지이며, 인지치료에서 가장 먼저 다루는 대상이다",
      "common_mistake": "자동사고를 의도적 사고와 혼동하면 안 된다. 비자발적이고 빠르게 나타나며 당사자는 타당하다고 느끼는 것이 특징이다"
    }
  },
  {
    "id": "MOOD_DYA_018",
    "terminology": "역기능적 태도 (Dysfunctional Attitudes)",
    "terminology_ko": "역기능적 태도",
    "terminology_en": "Dysfunctional Attitudes",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "자기가치를 타인의 인정이나 완벽한 수행에 조건부로 연결하는 비적응적이고 경직된 핵심 신념으로, 우울 취약성의 인지적 기반이다.",
    "definition_en": "Maladaptive and rigid core beliefs that conditionally link self-worth to others' approval or perfect performance, serving as the cognitive basis for depression vulnerability.",
    "significance": "Beck의 인지모형에서 자동사고를 생성하는 깊은 수준의 스키마(핵심 신념)이며, 인지치료의 장기적 재발 방지 목표이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "역기능적 태도 개념을 제안하고 역기능적 태도 척도(DAS)를 개발"
      },
      {
        "name_ko": "앤 와이스만",
        "name_en": "Arlene Weissman",
        "contribution": "역기능적 태도 척도(DAS)를 Beck과 공동 개발하여 인지적 취약성 측정을 가능하게 함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부정적 자동사고",
        "name_en": "Negative Automatic Thoughts",
        "id": "MOOD_NAT_017"
      },
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [
      {
        "name": "인정 추구",
        "description": "'사랑받지 못하면 가치가 없다'는 식의 타인 인정 의존"
      },
      {
        "name": "완벽주의",
        "description": "'완벽하지 않으면 실패한 것이다'는 식의 경직된 수행 기준"
      }
    ],
    "quiz_hints": {
      "mnemonic": "역기능적 태도 = 조건부 자기가치의 '숨겨진 규칙' → '~하지 않으면 나는 ~이다'",
      "differential": "자동사고는 상황에서 즉각적으로 떠오르는 표면적 인지이나, 역기능적 태도는 그 자동사고를 생성하는 깊은 핵심 신념이다",
      "key_point": "우울 삽화가 아닌 시기에도 잠재적으로 존재하며, 스트레스에 의해 활성화되어 우울을 촉발하는 '인지적 취약성'이다",
      "common_mistake": "역기능적 태도가 우울 삽화 동안에만 존재한다고 생각하면 안 된다. 관해기에도 잠재적으로 존재하여 재발 위험을 높인다"
    }
  },
  {
    "id": "MOOD_RUM_019",
    "terminology": "반추 (Rumination)",
    "terminology_ko": "반추",
    "terminology_en": "Rumination",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "자신의 우울한 기분, 그 원인, 결과에 대해 반복적이고 수동적으로 몰두하는 사고 양식으로, 우울의 지속과 악화에 기여한다.",
    "definition_en": "A repetitive and passive thinking style of dwelling on one's depressed mood, its causes, and consequences, contributing to the persistence and worsening of depression.",
    "significance": "우울증의 유지와 재발에 기여하는 핵심 인지과정이며, 여성의 더 높은 우울증 유병률을 설명하는 한 요인으로 제안되었다.",
    "key_researchers": [
      {
        "name_ko": "수잔 노렌-호크세마",
        "name_en": "Susan Nolen-Hoeksema",
        "contribution": "반추적 반응양식 이론을 제안하고 반추가 우울을 유지·악화시키는 기제를 입증"
      },
      {
        "name_ko": "에드 왓킨스",
        "name_en": "Ed Watkins",
        "contribution": "반추의 하위유형(추상적 vs 구체적)을 구분하고 반추초점 CBT를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "부정적 자동사고",
        "name_en": "Negative Automatic Thoughts",
        "id": "MOOD_NAT_017"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "MOOD_COT_023"
      }
    ],
    "sub_types": [
      {
        "name": "성찰(Reflection)",
        "description": "문제 해결을 위한 적응적 자기성찰"
      },
      {
        "name": "침잠(Brooding)",
        "description": "기분과 상황에 대한 수동적이고 비판적 몰두, 부적응적"
      }
    ],
    "quiz_hints": {
      "mnemonic": "반추 = 소가 되새김하듯 부정적 생각을 끝없이 '되씹는' 사고 패턴",
      "differential": "걱정(worry)은 미래의 잠재적 위협에 초점을 맞추나, 반추는 과거 경험과 현재 기분의 원인에 초점을 맞춘다",
      "key_point": "반추 중 '침잠(brooding)' 하위유형이 부적응적이며, '성찰(reflection)'은 상대적으로 적응적일 수 있다",
      "common_mistake": "반추를 생산적인 자기성찰과 동일시하면 안 된다. 반추는 수동적이고 해결에 이르지 못하는 반복적 몰두이다"
    }
  },
  {
    "id": "MOOD_LEW_020",
    "terminology": "Lewinsohn의 행동모형 (Lewinsohn's Behavioral Model)",
    "terminology_ko": "Lewinsohn의 행동모형",
    "terminology_en": "Lewinsohn's Behavioral Model",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울증이 긍정적 강화를 제공하는 활동이나 경험의 감소와, 혐오적 경험의 증가로 인해 발생하고 유지된다는 행동적 설명 모형이다.",
    "definition_en": "A behavioral model explaining that depression develops and is maintained by a decrease in activities or experiences that provide positive reinforcement and an increase in aversive experiences.",
    "significance": "행동활성화(BA) 치료의 직접적 이론적 기반이며, 우울증에서 활동 감소와 사회적 철수의 악순환을 설명한다.",
    "key_researchers": [
      {
        "name_ko": "피터 르윈손",
        "name_en": "Peter Lewinsohn",
        "contribution": "우울증의 행동모형을 최초로 체계화하고 쾌적한 사건 목록(PES)을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "행동활성화",
        "name_en": "Behavioral Activation",
        "id": "MOOD_BAC_022"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "학습된 무력감",
        "name_en": "Learned Helplessness",
        "id": "MOOD_LHE_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Lewinsohn 공식: 긍정 강화↓ + 혐오 경험↑ → 활동↓ → 강화↓↓ → 우울의 악순환",
      "differential": "Beck의 인지모형은 부정적 인지(사고)가 우울의 원인이라 보나, Lewinsohn의 행동모형은 긍정 강화의 감소(행동)가 원인이라 본다",
      "key_point": "우울 → 활동감소 → 긍정강화 감소 → 더 심한 우울의 악순환이 핵심이며, 이 순환을 끊는 것이 행동활성화의 목표이다",
      "common_mistake": "우울한 기분이 먼저 좋아져야 활동이 증가한다고 생각하면 안 된다. 행동모형은 활동 증가가 먼저이고 기분 개선이 따라온다고 본다"
    }
  },
  {
    "id": "MOOD_BAC_022",
    "terminology": "행동활성화 (Behavioral Activation)",
    "terminology_ko": "행동활성화",
    "terminology_en": "Behavioral Activation",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울증 환자가 회피하는 활동에 체계적으로 참여하게 하여 긍정적 강화를 증가시키고 회피 패턴을 깨뜨리는 근거 기반 행동치료이다.",
    "definition_en": "An evidence-based behavioral therapy that systematically engages depressed patients in avoided activities to increase positive reinforcement and break avoidance patterns.",
    "significance": "인지치료와 동등한 효과를 보이면서도 시행이 간편하여, 중등도~중증 우울증의 1차 근거 기반 치료법으로 확립되었다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 마텔",
        "name_en": "Christopher Martell",
        "contribution": "현대적 행동활성화(BA) 치료 매뉴얼을 개발하고 대규모 RCT를 통해 효과를 입증"
      },
      {
        "name_ko": "닐 자코프슨",
        "name_en": "Neil Jacobson",
        "contribution": "인지치료의 행동 요소만으로도 전체 인지치료와 동등한 효과가 있음을 발견하여 BA의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Lewinsohn의 행동모형",
        "name_en": "Lewinsohn's Behavioral Model",
        "id": "MOOD_LEW_020"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "MOOD_COT_023"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BA의 핵심 원리: 기분을 기다리지 말고 행동부터 → 'Outside-In(밖에서 안으로)' 접근",
      "differential": "인지치료는 부정적 사고의 수정이 핵심이나, 행동활성화는 활동 증가와 회피 감소가 핵심이다",
      "key_point": "Jacobson 등의 연구에서 BA가 완전한 인지치료와 동등한 효과를 보여, 독립적 치료법으로 확립되었다",
      "common_mistake": "'기분이 좋아지면 활동하겠다'는 환자의 접근을 그대로 수용하면 안 된다. BA는 '활동이 기분을 바꾼다'는 원리에 기반한다"
    }
  },
  {
    "id": "MOOD_COT_023",
    "terminology": "인지치료 (Cognitive Therapy for Depression)",
    "terminology_ko": "인지치료",
    "terminology_en": "Cognitive Therapy for Depression",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "Beck의 인지모형에 기반하여 우울증 환자의 부정적 자동사고와 역기능적 태도를 체계적으로 확인하고 수정하는 구조화된 심리치료이다.",
    "definition_en": "A structured psychotherapy based on Beck's cognitive model that systematically identifies and modifies negative automatic thoughts and dysfunctional attitudes in depressed patients.",
    "significance": "우울증 심리치료의 금본위(gold standard)로, 약물치료와 동등한 효과를 보이며 재발 방지에서는 약물보다 우수하다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "우울증의 인지치료를 창시하고 치료 매뉴얼을 개발(1979)"
      },
      {
        "name_ko": "스티븐 홀론",
        "name_en": "Steven Hollon",
        "contribution": "인지치료의 약물치료 대비 재발 방지 효과의 우수성을 대규모 연구로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Beck의 인지삼제",
        "name_en": "Beck's Cognitive Triad",
        "id": "MOOD_BCT_016"
      },
      {
        "name_ko": "부정적 자동사고",
        "name_en": "Negative Automatic Thoughts",
        "id": "MOOD_NAT_017"
      },
      {
        "name_ko": "행동활성화",
        "name_en": "Behavioral Activation",
        "id": "MOOD_BAC_022"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Beck의 인지치료: 자동사고 포착 → 증거 검토 → 대안적 해석 → 핵심 신념 수정",
      "differential": "행동활성화는 활동 증가가 핵심이나, 인지치료는 부정적 사고 패턴의 수정이 핵심이다",
      "key_point": "약물치료와 동등한 급성기 효과를 보이면서 치료 종료 후 재발 방지에서는 약물치료보다 우수하다",
      "common_mistake": "인지치료를 단순한 긍정적 사고로의 전환으로 오해하면 안 된다. 체계적 증거 검토를 통한 현실적 사고로의 수정이다"
    }
  },
  {
    "id": "MOOD_SSR_024",
    "terminology": "SSRI (선택적 세로토닌 재흡수 억제제)",
    "terminology_ko": "선택적 세로토닌 재흡수 억제제",
    "terminology_en": "Selective Serotonin Reuptake Inhibitor",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "시냅스 간극에서 세로토닌의 재흡수를 선택적으로 차단하여 세로토닌 활성을 증가시키는 항우울제 계열로, 우울증과 불안장애의 1차 약물치료이다.",
    "definition_en": "A class of antidepressants that selectively block serotonin reuptake in the synaptic cleft to increase serotonin activity, the first-line pharmacological treatment for depression and anxiety disorders.",
    "significance": "삼환계 항우울제에 비해 부작용이 적어 우울증 약물치료의 1차 선택약이 되었으며, 가장 널리 처방되는 항우울제이다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 웡",
        "name_en": "David Wong",
        "contribution": "최초의 SSRI인 플루옥세틴(프로작)을 개발"
      },
      {
        "name_ko": "클라우스 보겔",
        "name_en": "Klaus Bøgesø",
        "contribution": "시탈로프람(가장 선택적인 SSRI 중 하나)을 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "모노아민 가설",
        "name_en": "Monoamine Hypothesis",
        "id": "MOOD_MON_028"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "인지치료",
        "name_en": "Cognitive Therapy",
        "id": "MOOD_COT_023"
      }
    ],
    "sub_types": [
      {
        "name": "플루옥세틴(Prozac)",
        "description": "최초의 SSRI, 반감기가 길어 중단 증후군이 적음"
      },
      {
        "name": "설트랄린(Zoloft)",
        "description": "가장 널리 처방되는 SSRI 중 하나"
      },
      {
        "name": "에스시탈로프람(Lexapro)",
        "description": "가장 선택적인 SSRI로 부작용이 상대적으로 적음"
      },
      {
        "name": "파록세틴(Paxil)",
        "description": "효과적이나 중단 증후군이 상대적으로 큼"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SSRI: Serotonin(세로토닌) Selective(선택적) Reuptake(재흡수) Inhibitor(억제) → 세로토닌만 골라 막기",
      "differential": "SNRI는 세로토닌과 노르에피네프린 모두를 차단하나, SSRI는 세로토닌에만 선택적으로 작용한다",
      "key_point": "효과 발현까지 2~4주가 소요되며, 양극성장애 환자에게 기분안정제 없이 단독 사용 시 조증 전환 위험이 있다",
      "common_mistake": "SSRI가 즉각적으로 효과를 발휘한다고 기대하면 안 된다. 최소 2~4주의 적정 용량 투여가 필요하다"
    }
  },
  {
    "id": "MOOD_LIT_025",
    "terminology": "리튬 (Lithium)",
    "terminology_ko": "리튬",
    "terminology_en": "Lithium",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "양극성장애의 조증과 우울 삽화 모두에 효과적인 기분안정제로, 자살 예방 효과가 유일하게 입증된 정신약물이다.",
    "definition_en": "A mood stabilizer effective for both manic and depressive episodes of bipolar disorder, the only psychiatric medication with proven suicide-preventive effects.",
    "significance": "양극성장애 치료의 금본위(gold standard)로 70년 이상 사용되어 왔으며, 자살 예방 효과라는 독특한 특성을 가진 유일한 약물이다.",
    "key_researchers": [
      {
        "name_ko": "존 케이드",
        "name_en": "John Cade",
        "contribution": "리튬의 항조증 효과를 최초로 발견(1949)하여 정신약물학 역사의 이정표를 세움"
      },
      {
        "name_ko": "무겐스 쇼우",
        "name_en": "Mogens Schou",
        "contribution": "리튬의 양극성장애 치료 효과를 대규모 임상시험으로 확립하고 유지치료의 중요성을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "기분안정제",
        "name_en": "Mood Stabilizers",
        "id": "MOOD_MST_026"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "리튬: 양극성의 '금본위' + 자살 예방의 '유일한 약물' + 좁은 치료 범위 → 혈중 농도 모니터링 필수",
      "differential": "발프로산은 급속순환형에 더 효과적일 수 있으나, 리튬은 전형적 양극성장애(특히 조증)와 자살 예방에서 가장 강력한 근거를 가진다",
      "key_point": "치료 범위가 좁아(0.6~1.2 mEq/L) 정기적 혈중 농도 모니터링이 필수이며, 자살 예방 효과가 유일하게 입증된 정신약물이다",
      "common_mistake": "리튬의 좁은 치료 범위를 간과하면 안 된다. 독성 위험이 있어 정기적 혈중 농도 및 갑상선·신장 기능 검사가 필수이다"
    }
  },
  {
    "id": "MOOD_MST_026",
    "terminology": "기분안정제 (Mood Stabilizers)",
    "terminology_ko": "기분안정제",
    "terminology_en": "Mood Stabilizers",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "양극성장애에서 조증과 우울 삽화를 치료하고 기분의 극단적 변동을 예방하는 데 사용되는 약물군으로, 리튬과 항경련제(발프로산, 라모트리진, 카바마제핀)가 대표적이다.",
    "definition_en": "A class of medications used in bipolar disorder to treat manic and depressive episodes and prevent extreme mood fluctuations, with lithium and anticonvulsants (valproate, lamotrigine, carbamazepine) as primary agents.",
    "significance": "양극성장애 치료의 기본 약물이며, 항우울제 단독 사용의 위험(조증 전환)을 방지하는 필수적 역할을 한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 포스트",
        "name_en": "Robert Post",
        "contribution": "카바마제핀의 양극성장애 치료 효과를 발견하고 킨들링(kindling) 모형을 통해 기분 삽화의 반복 기제를 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "리튬",
        "name_en": "Lithium",
        "id": "MOOD_LIT_025"
      },
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "래피드 사이클링",
        "name_en": "Rapid Cycling",
        "id": "MOOD_RAP_031"
      }
    ],
    "sub_types": [
      {
        "name": "리튬",
        "description": "양극성장애의 금본위, 조증과 우울 모두에 효과적"
      },
      {
        "name": "발프로산(Valproate)",
        "description": "급성 조증에 효과적, 급속순환형에 유용할 수 있음"
      },
      {
        "name": "라모트리진(Lamotrigine)",
        "description": "양극성 우울에 특히 효과적, 조증 예방 효과는 제한적"
      },
      {
        "name": "카바마제핀(Carbamazepine)",
        "description": "리튬 불응 조증에 대안으로 사용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기분안정제 4대 약물: Lithium, Valproate, Lamotrigine, Carbamazepine = LVLC",
      "differential": "항우울제는 우울만 치료하고 조증 전환 위험이 있으나, 기분안정제는 조증과 우울 모두를 안정시키고 기분 변동을 예방한다",
      "key_point": "라모트리진은 양극성 우울에 특히 효과적이나 스티븐스-존슨 증후군 위험이 있어 서서히 증량해야 한다",
      "common_mistake": "양극성장애에 항우울제를 기분안정제 없이 단독 사용하면 안 된다. 조증 전환이나 급속순환을 유발할 수 있다"
    }
  },
  {
    "id": "MOOD_ECT_027",
    "terminology": "전기경련요법 (Electroconvulsive Therapy)",
    "terminology_ko": "전기경련요법",
    "terminology_en": "Electroconvulsive Therapy",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "마취 하에 두피를 통해 전기 자극을 가하여 통제된 뇌 발작을 유도함으로써 중증 우울증, 긴장증, 치료저항성 우울증 등을 치료하는 생물학적 치료법이다.",
    "definition_en": "A biological treatment that induces controlled brain seizures through electrical stimulation applied to the scalp under anesthesia, treating severe depression, catatonia, and treatment-resistant depression.",
    "significance": "치료저항성 중증 우울증과 자살 위험이 임박한 경우 가장 빠르고 효과적인 치료법으로, 약물이나 심리치료에 반응하지 않는 환자의 마지막 보루이다.",
    "key_researchers": [
      {
        "name_ko": "우고 첼레티",
        "name_en": "Ugo Cerletti",
        "contribution": "전기경련요법을 최초로 정신과 치료에 적용(1938)"
      },
      {
        "name_ko": "맥스 핑크",
        "name_en": "Max Fink",
        "contribution": "현대적 ECT의 안전한 시행 프로토콜을 확립하고 효과에 대한 체계적 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경두개자기자극",
        "name_en": "Transcranial Magnetic Stimulation",
        "id": "MOOD_TMS_032"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      }
    ],
    "sub_types": [
      {
        "name": "양측성(Bilateral)",
        "description": "양쪽 관자놀이에 전극을 배치, 효과가 더 크지만 인지 부작용도 더 큼"
      },
      {
        "name": "편측성(Unilateral)",
        "description": "비우세 반구에만 전극을 배치, 인지 부작용이 적음"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ECT: 치료저항성 우울, 급성 자살 위험, 긴장증 → '마지막 보루'이자 '가장 빠른 효과'",
      "differential": "TMS는 비침습적이고 마취가 불필요하나, ECT는 전신마취하에 시행되며 중증 사례에서 더 강력한 효과를 보인다",
      "key_point": "현대 ECT는 전신마취와 근이완제 하에 시행되어 안전하며, 치료저항성 우울증에서 60~80%의 높은 반응률을 보인다",
      "common_mistake": "ECT를 야만적이거나 위험한 치료로 오해하면 안 된다. 현대 ECT는 안전하며 중증 우울증의 가장 효과적인 치료이다"
    }
  },
  {
    "id": "MOOD_MON_028",
    "terminology": "모노아민 가설 (Monoamine Hypothesis)",
    "terminology_ko": "모노아민 가설",
    "terminology_en": "Monoamine Hypothesis",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "우울증이 뇌의 모노아민 신경전달물질(세로토닌, 노르에피네프린, 도파민)의 기능 저하와 관련된다는 신경생물학적 가설이다.",
    "definition_en": "A neurobiological hypothesis proposing that depression is related to decreased function of monoamine neurotransmitters (serotonin, norepinephrine, dopamine) in the brain.",
    "significance": "항우울제 개발의 이론적 기반이 되었으나, 항우울제 효과의 지연, 낮은 치료 반응률 등으로 인해 현재는 과도하게 단순화된 모형으로 평가된다.",
    "key_researchers": [
      {
        "name_ko": "조지프 실드크라우트",
        "name_en": "Joseph Schildkraut",
        "contribution": "우울증의 카테콜아민(노르에피네프린) 가설을 최초로 제안(1965)"
      },
      {
        "name_ko": "알렉 코펜",
        "name_en": "Alec Coppen",
        "contribution": "세로토닌의 우울증 관여를 강조하는 인돌아민 가설을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "SSRI",
        "name_en": "SSRI",
        "id": "MOOD_SSR_024"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "HPA축 이상",
        "name_en": "HPA Axis Dysregulation",
        "id": "MOOD_HPA_030"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "모노아민 3총사: Serotonin(기분), Norepinephrine(에너지), Dopamine(쾌락) → 모두 저하 = 우울",
      "differential": "세로토닌 가설(OCD)은 세로토닌에 특이적이나, 모노아민 가설은 세로토닌·노르에피네프린·도파민 세 가지를 모두 포함한다",
      "key_point": "항우울제는 즉각적으로 모노아민을 증가시키지만 임상 효과는 2~4주 후에 나타나므로, 단순한 모노아민 부족이 우울의 전부가 아니다",
      "common_mistake": "모노아민 가설이 우울증의 완전한 설명이라고 생각하면 안 된다. 신경가소성, 신경염증, HPA축 등 다른 기제도 관여한다"
    }
  },
  {
    "id": "MOOD_COR_029",
    "terminology": "코르티솔과 우울 (Cortisol and Depression)",
    "terminology_ko": "코르티솔과 우울",
    "terminology_en": "Cortisol and Depression",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "스트레스 호르몬인 코르티솔의 만성적 과분비가 우울증과 관련되며, HPA축의 과활성화와 피드백 억제 실패가 그 기전으로 제안된다.",
    "definition_en": "Chronic hypersecretion of the stress hormone cortisol is associated with depression, with HPA axis hyperactivation and failed feedback inhibition proposed as the underlying mechanism.",
    "significance": "우울증의 생물학적 기반을 이해하는 핵심 경로로, 덱사메타손 억제 검사(DST)는 초기 우울증 생물학적 지표 연구의 출발점이었다.",
    "key_researchers": [
      {
        "name_ko": "레이첼 예후다",
        "name_en": "Rachel Yehuda",
        "contribution": "스트레스 호르몬과 정신장애의 관계를 광범위하게 연구하여 코르티솔 반응의 진단별 차이를 규명"
      },
      {
        "name_ko": "버나드 캐럴",
        "name_en": "Bernard Carroll",
        "contribution": "덱사메타손 억제 검사(DST)를 우울증 생물학적 지표로 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "HPA축 이상",
        "name_en": "HPA Axis Dysregulation",
        "id": "MOOD_HPA_030"
      },
      {
        "name_ko": "모노아민 가설",
        "name_en": "Monoamine Hypothesis",
        "id": "MOOD_MON_028"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "코르티솔과 우울: 스트레스 → HPA축 과활성 → 코르티솔↑ → 해마 손상 → 우울 + 기억↓",
      "differential": "PTSD에서는 코르티솔이 오히려 낮은(과민성 HPA축) 반면, 우울증에서는 코르티솔이 높은(과활성 HPA축) 경향이 있다",
      "key_point": "만성적 코르티솔 과분비는 해마 신경세포를 손상시켜 기억 기능 저하와 우울의 유지에 기여한다",
      "common_mistake": "코르티솔 상승이 우울증에만 특이적이라고 생각하면 안 된다. 다양한 스트레스 관련 상태에서 나타날 수 있다"
    }
  },
  {
    "id": "MOOD_HPA_030",
    "terminology": "HPA축 이상 (HPA Axis Dysregulation)",
    "terminology_ko": "HPA축 이상",
    "terminology_en": "HPA Axis Dysregulation",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "시상하부-뇌하수체-부신(HPA) 축의 조절 이상으로 코르티솔의 과분비와 일주기 리듬의 변화가 나타나며, 우울증의 신경내분비적 기반으로 간주된다.",
    "definition_en": "Dysregulation of the hypothalamic-pituitary-adrenal (HPA) axis resulting in cortisol hypersecretion and altered circadian rhythm, considered the neuroendocrine basis of depression.",
    "significance": "우울증 환자의 약 50%에서 HPA축 과활성화가 관찰되며, 이는 모노아민 가설을 보완하는 스트레스-기반 생물학적 모형의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "찰스 네메로프",
        "name_en": "Charles Nemeroff",
        "contribution": "아동기 외상이 HPA축의 영구적 변화를 초래하여 성인기 우울 취약성을 높인다는 것을 입증"
      },
      {
        "name_ko": "플로리안 홀스보어",
        "name_en": "Florian Holsboer",
        "contribution": "HPA축 이상이 우울증의 핵심 생물학적 기제임을 제안하고 CRH 수용체 길항제를 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코르티솔과 우울",
        "name_en": "Cortisol and Depression",
        "id": "MOOD_COR_029"
      },
      {
        "name_ko": "모노아민 가설",
        "name_en": "Monoamine Hypothesis",
        "id": "MOOD_MON_028"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Diathesis-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "HPA축: Hypothalamus(CRH) → Pituitary(ACTH) → Adrenal(Cortisol) → 피드백 실패 = 우울",
      "differential": "쿠싱증후군은 코르티솔의 뚜렷한 과분비와 신체 증상이 나타나나, 우울증의 HPA축 이상은 미묘한 조절 이상이다",
      "key_point": "아동기 외상은 HPA축의 영구적 변화를 초래하여 성인기 우울증에 대한 생물학적 취약성을 증가시킨다",
      "common_mistake": "HPA축 이상을 우울증의 유일한 생물학적 원인으로 간주하면 안 된다. 모노아민, 신경가소성 등 다양한 경로가 관여한다"
    }
  },
  {
    "id": "MOOD_RAP_031",
    "terminology": "래피드 사이클링 (Rapid Cycling)",
    "terminology_ko": "래피드 사이클링",
    "terminology_en": "Rapid Cycling",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "12개월 내에 4회 이상의 기분 삽화(조증, 경조증, 우울)를 경험하는 양극성장애의 경과 명시자로, 치료 저항성이 높다.",
    "definition_en": "A course specifier for bipolar disorder involving four or more mood episodes (manic, hypomanic, depressive) within a 12-month period, associated with higher treatment resistance.",
    "significance": "양극성장애 환자의 약 10~20%에서 나타나며, 리튬 반응이 상대적으로 낮고 갑상선 기능 저하 및 항우울제 사용과 관련될 수 있다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 던너",
        "name_en": "David Dunner",
        "contribution": "래피드 사이클링 개념을 최초로 정의하고 이 경과 유형의 임상적 특성을 체계적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "제1형 양극성장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BP1_002"
      },
      {
        "name_ko": "기분안정제",
        "name_en": "Mood Stabilizers",
        "id": "MOOD_MST_026"
      },
      {
        "name_ko": "리튬",
        "name_en": "Lithium",
        "id": "MOOD_LIT_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "래피드 사이클링 = 1년에 4회+ 기분 삽화 → '회전목마'처럼 빠르게 순환",
      "differential": "혼합 양상은 동시에 조증+우울 증상이 공존하나, 래피드 사이클링은 삽화가 빠르게 교대하는 것이다",
      "key_point": "리튬 단독 반응이 낮아 발프로산 등 대안 기분안정제가 선호되며, 항우울제 사용이 래피드 사이클링을 유발할 수 있다",
      "common_mistake": "하루 내에 기분이 변동하는 것을 래피드 사이클링으로 오해하면 안 된다. 각 삽화는 최소 진단 기간을 충족해야 한다"
    }
  },
  {
    "id": "MOOD_TMS_032",
    "terminology": "경두개자기자극 (Transcranial Magnetic Stimulation)",
    "terminology_ko": "경두개자기자극",
    "terminology_en": "Transcranial Magnetic Stimulation",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "두피 위에 코일을 배치하여 자기장을 통해 특정 뇌 영역(주로 좌측 배외측전전두피질)의 신경 활동을 조절하는 비침습적 뇌자극 치료법이다.",
    "definition_en": "A non-invasive brain stimulation treatment that modulates neural activity in specific brain regions (typically the left dorsolateral prefrontal cortex) through magnetic fields generated by a coil placed on the scalp.",
    "significance": "ECT와 달리 마취가 불필요하고 인지 부작용이 적어, 치료저항성 우울증의 대안적 생물학적 치료법으로 자리잡고 있다.",
    "key_researchers": [
      {
        "name_ko": "마크 조지",
        "name_en": "Mark George",
        "contribution": "TMS의 우울증 치료 적용을 개척하고 FDA 승인을 위한 임상시험을 주도"
      },
      {
        "name_ko": "앨바로 파스쿠알-레오네",
        "name_en": "Alvaro Pascual-Leone",
        "contribution": "TMS의 신경과학적 원리와 다양한 정신과적 적용을 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전기경련요법",
        "name_en": "Electroconvulsive Therapy",
        "id": "MOOD_ECT_027"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [
      {
        "name": "반복적 TMS (rTMS)",
        "description": "좌측 DLPFC에 고빈도 자극을 반복 시행"
      },
      {
        "name": "세타버스트자극 (TBS)",
        "description": "더 짧은 시간에 효과적인 자극을 제공하는 새로운 프로토콜"
      },
      {
        "name": "딥 TMS",
        "description": "더 깊은 뇌 구조까지 자극할 수 있는 H코일 사용"
      }
    ],
    "quiz_hints": {
      "mnemonic": "TMS = Transcranial(두개를 통한) Magnetic(자기) Stimulation(자극) → 마취 없이 뇌를 자극",
      "differential": "ECT는 전신마취 하에 뇌 발작을 유도하나, TMS는 비침습적이고 마취 불필요하며 인지 부작용이 적다",
      "key_point": "주로 좌측 배외측전전두피질(DLPFC)에 고빈도 자극을 가하며, 4~6주간 매일 시행한다",
      "common_mistake": "TMS가 ECT를 완전히 대체할 수 있다고 생각하면 안 된다. 중증이나 긴급한 사례에서는 여전히 ECT가 더 효과적이다"
    }
  },
  {
    "id": "MOOD_NSS_033",
    "terminology": "비자살적 자해 (Non-Suicidal Self-Injury)",
    "terminology_ko": "비자살적 자해",
    "terminology_en": "Non-Suicidal Self-Injury",
    "category": "MOOD",
    "category_name": "우울장애와 양극성 장애 (Mood Disorders)",
    "definition": "죽으려는 의도 없이 의도적으로 자신의 신체 조직을 손상시키는 행동으로, 주로 부정적 정서의 조절이나 자기처벌을 목적으로 한다.",
    "definition_en": "Deliberate damage to one's own body tissue without intent to die, primarily aimed at regulating negative emotions or self-punishment.",
    "significance": "DSM-5에서 '추가 연구가 필요한 진단적 상태'로 포함되었으며, 자살 위험의 독립적 예측 인자이지만 자살시도와는 구별되어야 한다.",
    "key_researchers": [
      {
        "name_ko": "매튜 녹",
        "name_en": "Matthew Nock",
        "contribution": "NSSI의 기능(정서 조절, 자기처벌 등)을 체계적으로 분류하고 네 가지 기능 모형을 제안"
      },
      {
        "name_ko": "메리 케이 닉슨",
        "name_en": "Mary Kay Nixon",
        "contribution": "청소년 NSSI의 치료적 접근과 임상 평가 방법을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자살시도",
        "name_en": "Suicide Attempt",
        "id": "MOOD_SAT_014"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_012"
      },
      {
        "name_ko": "경계선성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [
      {
        "name": "베기(Cutting)",
        "description": "피부를 베거나 긋는 행위"
      },
      {
        "name": "태우기(Burning)",
        "description": "피부를 태우는 행위"
      },
      {
        "name": "때리기(Hitting)",
        "description": "자신의 신체를 때리거나 부딪치는 행위"
      },
      {
        "name": "긁기(Scratching)",
        "description": "피부를 깊게 긁어 손상을 주는 행위"
      }
    ],
    "quiz_hints": {
      "mnemonic": "NSSI의 4기능 모형: 부정적 강화(정서 경감) + 긍정적 강화(느낌 회복) + 사회적 부적 강화(회피) + 사회적 긍정 강화(관심)",
      "differential": "자살시도는 죽음의 의도가 있으나, NSSI는 죽으려는 의도 없이 정서 조절이 주목적이다. 그러나 NSSI는 미래 자살의 위험 요인이다",
      "key_point": "NSSI는 자살시도와 구별되지만, NSSI 이력이 있는 사람은 미래 자살 위험이 높아 신중한 평가가 필요하다",
      "common_mistake": "NSSI를 단순한 '관심 끌기'로 치부하면 안 된다. 심각한 정서적 고통의 표현이며 전문적 개입이 필요하다"
    }
  }
];

TERMS_DATA.SCHIZO = [
  {
    "id": "SCHIZO_SCZ_001",
    "terminology": "조현병 (Schizophrenia)",
    "terminology_ko": "조현병",
    "terminology_en": "Schizophrenia",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "양성증상(망상, 환각, 와해된 언어 및 행동)과 음성증상(무감동, 무의욕 등)을 특징으로 하는 만성 정신병적 장애로, 사회적·직업적 기능의 현저한 저하를 동반한다.",
    "definition_en": "A chronic psychotic disorder characterized by positive symptoms (delusions, hallucinations, disorganized speech and behavior) and negative symptoms (avolition, flat affect), accompanied by significant decline in social and occupational functioning.",
    "significance": "정신병리학의 핵심 장애로, 이상심리학 연구와 정신건강 서비스 체계 발전의 중심축이 되어 왔다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "조기치매(dementia praecox) 개념을 체계화하여 조현병 분류의 기초를 마련"
      },
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "조현병(schizophrenia) 용어를 최초 도입하고 4A 증상(연상이완, 정동둔마, 양가감정, 자폐증) 제시"
      },
      {
        "name_ko": "쿠르트 슈나이더",
        "name_en": "Kurt Schneider",
        "contribution": "1급 증상(사고전파, 사고삽입 등)을 제시하여 조현병의 진단 기준에 영향"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현정동장애",
        "name_en": "Schizoaffective Disorder",
        "id": "SCHIZO_SAD_002"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "편집형(과거 아형)",
        "description": "망상과 환각이 두드러지는 유형 (DSM-5에서 아형 폐지)"
      },
      {
        "name": "혼란형(과거 아형)",
        "description": "와해된 언어와 행동이 두드러지는 유형"
      },
      {
        "name": "긴장형(과거 아형)",
        "description": "긴장증적 행동이 두드러지는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "조현병의 '조현'은 '현악기의 줄을 고르다'로 정신의 조율이 어긋난 상태를 비유",
      "differential": "조현정동장애와 달리 기분삽화가 전체 경과의 소수 기간에만 나타남",
      "key_point": "진단을 위해 6개월 이상 증상 지속이 필요하며, 그 중 최소 1개월은 활성기 증상",
      "common_mistake": "다중인격장애(해리성 정체감 장애)와 혼동하는 경우가 많으나 전혀 다른 장애"
    }
  },
  {
    "id": "SCHIZO_SAD_002",
    "terminology": "조현정동장애 (Schizoaffective Disorder)",
    "terminology_ko": "조현정동장애",
    "terminology_en": "Schizoaffective Disorder",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병의 정신병적 증상과 주요 기분삽화(우울 또는 조증)가 동시에 나타나며, 기분삽화 없이도 최소 2주간 망상이나 환각이 지속되는 장애이다.",
    "definition_en": "A disorder featuring concurrent psychotic symptoms of schizophrenia and major mood episodes (depressive or manic), with delusions or hallucinations persisting for at least 2 weeks in the absence of mood episodes.",
    "significance": "조현병과 기분장애의 경계에 위치하여 정신질환 분류 체계의 차원적 관점 필요성을 시사하는 중요한 장애이다.",
    "key_researchers": [
      {
        "name_ko": "제이콥 카사닌",
        "name_en": "Jacob Kasanin",
        "contribution": "1933년 조현정동 정신병(schizoaffective psychosis) 개념을 최초로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "양극성 I형 장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BPI_002"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      }
    ],
    "sub_types": [
      {
        "name": "양극성형",
        "description": "경과 중 조증 삽화가 포함되는 유형"
      },
      {
        "name": "우울형",
        "description": "조증 삽화 없이 주요우울삽화만 나타나는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "조현(정신병)+정동(기분)=조현정동, 두 가지가 동시에 나타남",
      "differential": "조현병은 기분삽화가 짧고 부차적, 기분장애+정신병적 양상은 기분삽화 기간에만 정신병적 증상 출현",
      "key_point": "기분삽화 없이 최소 2주간 정신병적 증상이 단독 지속되어야 진단 가능",
      "common_mistake": "정신병적 양상이 있는 기분장애와 혼동하기 쉬우나, 기분삽화 부재 시 정신병적 증상 지속 여부가 감별 핵심"
    }
  },
  {
    "id": "SCHIZO_SFD_003",
    "terminology": "조현양상장애 (Schizophreniform Disorder)",
    "terminology_ko": "조현양상장애",
    "terminology_en": "Schizophreniform Disorder",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병과 동일한 증상(망상, 환각, 와해된 언어 등)을 보이지만 전체 증상 기간이 1개월 이상 6개월 미만인 장애로, 사회적·직업적 기능 저하가 필수 요건이 아니다.",
    "definition_en": "A disorder featuring the same symptoms as schizophrenia (delusions, hallucinations, disorganized speech) but with total duration of 1 to 6 months, and decline in social or occupational functioning is not required.",
    "significance": "조현병 진단의 시간 기준 차이를 보여주며, 단기 정신병적 삽화의 예후 연구에 중요한 참조점이 된다.",
    "key_researchers": [
      {
        "name_ko": "가브리엘 랑펠트",
        "name_en": "Gabriel Langfeldt",
        "contribution": "조현양상 정신병 개념을 도입하여 예후가 좋은 급성 정신병과 만성 조현병을 구분"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "단기 정신병적 장애",
        "name_en": "Brief Psychotic Disorder",
        "id": "SCHIZO_BPD_004"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조현'양상'(form) = 조현병의 '모양'만 갖춘 것, 기간이 짧음",
      "differential": "조현병은 6개월 이상, 조현양상장애는 1~6개월, 단기 정신병적 장애는 1일~1개월",
      "key_point": "6개월이 지나도 증상이 지속되면 조현병으로 진단이 변경됨",
      "common_mistake": "기간 기준만 다를 뿐 증상 자체는 조현병과 동일하다는 점을 간과하기 쉬움"
    }
  },
  {
    "id": "SCHIZO_BPD_004",
    "terminology": "단기 정신병적 장애 (Brief Psychotic Disorder)",
    "terminology_ko": "단기 정신병적 장애",
    "terminology_en": "Brief Psychotic Disorder",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "망상, 환각, 와해된 언어 또는 와해된 행동 중 하나 이상이 최소 1일 이상 1개월 미만 지속된 후 완전히 회복되는 급성 정신병적 장애이다.",
    "definition_en": "An acute psychotic disorder in which at least one symptom—delusions, hallucinations, disorganized speech, or grossly disorganized behavior—lasts at least 1 day but less than 1 month, followed by full recovery.",
    "significance": "스트레스에 대한 급성 정신병적 반응을 이해하는 데 중요하며, 조현병 스펙트럼의 경증 단기 표현형으로 간주된다.",
    "key_researchers": [
      {
        "name_ko": "칼 야스퍼스",
        "name_en": "Karl Jaspers",
        "contribution": "반응성 정신병(reactive psychosis) 개념을 기술하여 스트레스-유발 급성 정신병의 이해에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현양상장애",
        "name_en": "Schizophreniform Disorder",
        "id": "SCHIZO_SFD_003"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "현저한 스트레스 인자 동반",
        "description": "명확한 심리사회적 스트레스에 반응하여 발생"
      },
      {
        "name": "현저한 스트레스 인자 비동반",
        "description": "뚜렷한 스트레스 요인 없이 발생"
      },
      {
        "name": "산후 발병",
        "description": "출산 후 4주 이내에 발병"
      }
    ],
    "quiz_hints": {
      "mnemonic": "'단기'(brief) = 1일~1개월, 가장 짧은 정신병적 장애",
      "differential": "조현양상장애(1~6개월)와 달리 1개월 미만이며 완전 회복이 특징",
      "key_point": "완전한 병전 기능 수준으로 회복되어야 하며, 1개월 넘으면 진단 재고 필요",
      "common_mistake": "산후 정신병이 별도 장애가 아니라 단기 정신병적 장애의 세부 유형임을 모르는 경우 많음"
    }
  },
  {
    "id": "SCHIZO_DEL_005",
    "terminology": "망상장애 (Delusional Disorder)",
    "terminology_ko": "망상장애",
    "terminology_en": "Delusional Disorder",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "하나 이상의 망상이 최소 1개월 이상 지속되지만 조현병의 다른 증상(환각, 와해된 언어/행동, 음성증상)은 두드러지지 않으며, 망상 외 영역의 기능은 비교적 보존되는 장애이다.",
    "definition_en": "A disorder characterized by one or more delusions lasting at least 1 month without prominent hallucinations, disorganized speech or behavior, or negative symptoms, with relatively preserved functioning outside the delusional theme.",
    "significance": "정신병적 증상이 있으나 전반적 기능이 보존되는 사례를 통해 망상의 특이성과 정신병 스펙트럼의 다양성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "에밀 크레펠린",
        "name_en": "Emil Kraepelin",
        "contribution": "편집증(paranoia) 개념을 체계화하여 현대 망상장애 분류의 기초를 마련"
      },
      {
        "name_ko": "카를 야스퍼스",
        "name_en": "Karl Jaspers",
        "contribution": "일차적 망상과 이차적 망상의 구분을 통해 망상의 현상학적 분석에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "과대망상",
        "name_en": "Grandiose Delusion",
        "id": "SCHIZO_GDL_013"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "색정형",
        "description": "특정 대상이 자신을 사랑한다는 망상"
      },
      {
        "name": "과대형",
        "description": "과장된 가치, 권력, 지식, 정체성에 대한 망상"
      },
      {
        "name": "질투형",
        "description": "배우자나 연인의 부정에 대한 망상"
      },
      {
        "name": "피해형",
        "description": "자신이 해를 입고 있다는 망상 (가장 흔한 유형)"
      },
      {
        "name": "신체형",
        "description": "신체 기능이나 감각에 관한 망상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "망상'만' 있는 장애 — 환각이나 와해 증상은 거의 없음",
      "differential": "조현병과 달리 기능 수준이 비교적 유지되고 환각·음성증상이 두드러지지 않음",
      "key_point": "망상이 비기괴한(non-bizarre) 경우가 전형적이며, 현실에서 일어날 수 있는 내용",
      "common_mistake": "피해형이 가장 흔한 유형인데 과대형이 가장 흔하다고 오해하는 경우가 있음"
    }
  },
  {
    "id": "SCHIZO_APS_006",
    "terminology": "약화된 정신병 증후군 (Attenuated Psychosis Syndrome)",
    "terminology_ko": "약화된 정신병 증후군",
    "terminology_en": "Attenuated Psychosis Syndrome",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "정신병적 증상(망상, 환각, 와해된 언어)이 약화된 형태로 존재하나 현실 검증력은 유지되며, 최근 1년 내 시작되거나 악화된 상태로, 정신병으로의 전환 위험이 높은 전구적 상태이다.",
    "definition_en": "A condition with attenuated forms of psychotic symptoms (delusions, hallucinations, disorganized speech) with intact reality testing, onset or worsening within the past year, representing a high-risk prodromal state for psychosis conversion.",
    "significance": "정신병의 조기 발견과 예방적 개입의 가능성을 열어 조현병 연구의 새로운 패러다임을 제시한다.",
    "key_researchers": [
      {
        "name_ko": "앨리슨 영",
        "name_en": "Alison Yung",
        "contribution": "초고위험(ultra-high risk) 기준을 개발하여 정신병 전환 예측 연구를 선도"
      },
      {
        "name_ko": "패트릭 맥고리",
        "name_en": "Patrick McGorry",
        "contribution": "조기 정신병 개입(early intervention) 모형을 개발하고 임상 단계 모형(clinical staging) 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "전구기",
        "name_en": "Prodromal Phase",
        "id": "SCHIZO_PRO_030"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Vulnerability-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'약화된(attenuated)' = 정신병 증상이 있지만 약한 형태, 현실 검증력 유지",
      "differential": "조현병은 현실 검증력 상실, 약화된 정신병 증후군은 현실 검증력 유지",
      "key_point": "DSM-5 섹션 III에 추가 연구가 필요한 진단으로 포함되어 있음",
      "common_mistake": "이미 확립된 공식 진단으로 오해하지만 아직 '추가 연구 필요' 범주에 있음"
    }
  },
  {
    "id": "SCHIZO_POS_007",
    "terminology": "양성증상 (Positive Symptoms)",
    "terminology_ko": "양성증상",
    "terminology_en": "Positive Symptoms",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "정상적인 경험에 '추가'되는 병리적 증상으로, 망상, 환각, 와해된 사고(언어), 와해된 행동 등이 포함되며, 현실과의 접촉 상실을 나타낸다.",
    "definition_en": "Pathological symptoms 'added' to normal experience, including delusions, hallucinations, disorganized thinking (speech), and disorganized behavior, indicating a loss of contact with reality.",
    "significance": "조현병의 급성기 주요 표적이 되며, 항정신병 약물에 비교적 잘 반응하여 치료 계획 수립의 핵심 지표가 된다.",
    "key_researchers": [
      {
        "name_ko": "낸시 안드레아센",
        "name_en": "Nancy Andreasen",
        "contribution": "양성-음성 증상 이분법을 체계화하고 양성 및 음성 증상 척도(SAPS/SANS) 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "환청",
        "name_en": "Auditory Hallucination",
        "id": "SCHIZO_AHL_009"
      },
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [
      {
        "name": "망상",
        "description": "잘못된 믿음이 현실 증거에도 불구하고 유지됨"
      },
      {
        "name": "환각",
        "description": "외부 자극 없이 감각 경험이 발생"
      },
      {
        "name": "와해된 사고/언어",
        "description": "논리적 연결이 깨진 사고 과정"
      },
      {
        "name": "와해된 행동",
        "description": "목표지향적이지 않은 기이한 행동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "'양성(positive)' = 정상에 '더해진(+)' 증상, 좋다는 뜻이 아님",
      "differential": "음성증상은 정상 기능의 '감소/소실', 양성증상은 비정상적 경험의 '추가'",
      "key_point": "항정신병 약물(특히 정형 항정신병 약물)에 상대적으로 잘 반응",
      "common_mistake": "'양성'을 '좋은'으로 해석하는 오류 — 실제로는 비정상적 경험이 추가된다는 의미"
    }
  },
  {
    "id": "SCHIZO_NEG_008",
    "terminology": "음성증상 (Negative Symptoms)",
    "terminology_ko": "음성증상",
    "terminology_en": "Negative Symptoms",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "정상적으로 존재해야 할 기능이 감소하거나 소실된 증상으로, 정동둔마(무감동), 무의욕, 무쾌감, 빈곤한 언어, 사회적 위축 등이 포함된다.",
    "definition_en": "Symptoms reflecting a reduction or loss of normally present functions, including flat affect (apathy), avolition, anhedonia, alogia, and social withdrawal.",
    "significance": "장기적 기능 수준과 예후에 양성증상보다 더 큰 영향을 미치며, 기존 약물 치료에 잘 반응하지 않아 치료적 도전 과제이다.",
    "key_researchers": [
      {
        "name_ko": "낸시 안드레아센",
        "name_en": "Nancy Andreasen",
        "contribution": "음성증상 평가척도(SANS)를 개발하고 양성-음성 증상 구분을 정립"
      },
      {
        "name_ko": "팀 크로",
        "name_en": "Tim Crow",
        "contribution": "제I형(양성증상 우세, 도파민 이상)과 제II형(음성증상 우세, 구조적 뇌이상) 조현병 분류 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "무감동",
        "name_en": "Flat Affect",
        "id": "SCHIZO_FLA_015"
      },
      {
        "name_ko": "무의욕",
        "name_en": "Avolition",
        "id": "SCHIZO_AVO_016"
      },
      {
        "name_ko": "비정형 항정신병 약물",
        "name_en": "Atypical Antipsychotics",
        "id": "SCHIZO_AAP_026"
      }
    ],
    "sub_types": [
      {
        "name": "정동둔마/무감동",
        "description": "감정 표현이 현저히 감소"
      },
      {
        "name": "무의욕(avolition)",
        "description": "목표지향적 활동을 시작·유지하는 능력 감소"
      },
      {
        "name": "무쾌감(anhedonia)",
        "description": "즐거움을 경험하는 능력 감소"
      },
      {
        "name": "빈곤한 언어(alogia)",
        "description": "발화량이나 내용이 현저히 감소"
      },
      {
        "name": "사회적 위축",
        "description": "대인관계 및 사회활동 참여 감소"
      }
    ],
    "quiz_hints": {
      "mnemonic": "5A: Affect flat(정동둔마), Avolition(무의욕), Anhedonia(무쾌감), Alogia(빈곤한 언어), Asociality(사회적 위축)",
      "differential": "우울증의 무쾌감·무의욕과 유사하지만, 조현병의 음성증상은 일차적이며 기분삽화와 독립적으로 존재",
      "key_point": "기존 항정신병 약물에 잘 반응하지 않아 기능적 회복의 주요 장벽",
      "common_mistake": "약물 부작용(이차적 음성증상)과 질병 자체의 음성증상(일차적)을 구분하지 못하는 오류"
    }
  },
  {
    "id": "SCHIZO_AHL_009",
    "terminology": "환청 (Auditory Hallucination)",
    "terminology_ko": "환청",
    "terminology_en": "Auditory Hallucination",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "외부 청각 자극이 없는데 소리나 목소리를 지각하는 경험으로, 조현병에서 가장 흔한 환각 유형이며, 특히 지시적 환청이나 대화하는 목소리가 특징적이다.",
    "definition_en": "The perception of sounds or voices without external auditory stimuli, the most common type of hallucination in schizophrenia, often characterized by command hallucinations or conversing voices.",
    "significance": "조현병의 가장 흔한 양성증상으로 진단의 핵심 단서이며, 환청의 신경기전 연구는 의식과 자기감 이해에 중요한 기여를 한다.",
    "key_researchers": [
      {
        "name_ko": "랄프 호프만",
        "name_en": "Ralph Hoffman",
        "contribution": "내부 언어(inner speech)의 외부 귀인 이론을 통해 환청의 인지적 기제를 설명"
      },
      {
        "name_ko": "쿠르트 슈나이더",
        "name_en": "Kurt Schneider",
        "contribution": "1급 증상으로서의 환청(대화하는 목소리, 행동에 대해 논평하는 목소리) 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "환시",
        "name_en": "Visual Hallucination",
        "id": "SCHIZO_VHL_010"
      },
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      }
    ],
    "sub_types": [
      {
        "name": "지시적 환청",
        "description": "특정 행동을 하라고 명령하는 목소리"
      },
      {
        "name": "논평적 환청",
        "description": "환자의 행동이나 생각에 대해 평가하는 목소리"
      },
      {
        "name": "대화적 환청",
        "description": "두 개 이상의 목소리가 서로 대화하는 형태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "조현병 환각의 70%가 환청 — '귀로 듣는 환각'이 가장 흔함",
      "differential": "환시(시각)는 기질적/신경학적 원인, 환청(청각)은 조현병에서 더 흔함",
      "key_point": "내부 언어(inner speech)를 외부 출처로 잘못 귀인하는 것이 핵심 기제로 제안됨",
      "common_mistake": "모든 환청이 조현병을 의미하지 않음 — 건강한 인구의 5~15%도 환청 경험 가능"
    }
  },
  {
    "id": "SCHIZO_VHL_010",
    "terminology": "환시 (Visual Hallucination)",
    "terminology_ko": "환시",
    "terminology_en": "Visual Hallucination",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "외부 시각 자극이 없는데 사물, 사람, 빛, 형태 등을 시각적으로 지각하는 경험으로, 조현병보다 기질적 원인(약물, 신경질환)에서 더 흔하게 나타난다.",
    "definition_en": "The visual perception of objects, people, lights, or patterns without external visual stimuli, more commonly associated with organic causes (substances, neurological disorders) than schizophrenia.",
    "significance": "환시의 존재는 기질적 원인(섬망, 물질중독, 신경퇴행)을 시사하는 중요한 감별진단 단서가 된다.",
    "key_researchers": [
      {
        "name_ko": "장 에티엔 에스키롤",
        "name_en": "Jean-Étienne Esquirol",
        "contribution": "환각(hallucination)과 착각(illusion)의 개념적 구분을 최초로 명확히 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "환청",
        "name_en": "Auditory Hallucination",
        "id": "SCHIZO_AHL_009"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "환시 = 눈으로 보는 환각, 기질적 원인을 먼저 의심",
      "differential": "환청은 조현병에서 가장 흔하지만, 환시가 두드러지면 기질적/신경학적 원인 감별 필요",
      "key_point": "루이체 치매, 섬망, 물질중독에서 환시가 특히 흔하게 나타남",
      "common_mistake": "조현병에서 환시가 가장 흔한 환각이라고 오해 — 실제로는 환청이 가장 흔함"
    }
  },
  {
    "id": "SCHIZO_DLN_011",
    "terminology": "망상 (Delusion)",
    "terminology_ko": "망상",
    "terminology_en": "Delusion",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "외부 현실 증거와 모순됨에도 불구하고 확고하게 유지되는 잘못된 믿음으로, 문화적·종교적 맥락으로 설명되지 않으며, 정신병적 장애의 핵심 증상이다.",
    "definition_en": "A fixed false belief maintained despite contradictory external evidence and not explained by cultural or religious context, representing a core symptom of psychotic disorders.",
    "significance": "정신병적 상태의 가장 특징적 증상 중 하나로, 현실 검증력 손상의 정도를 평가하는 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "카를 야스퍼스",
        "name_en": "Karl Jaspers",
        "contribution": "일차적 망상(이해불가능)과 이차적 망상(심리적으로 이해가능)의 구분을 정립"
      },
      {
        "name_ko": "필리파 가레티",
        "name_en": "Philippa Garety",
        "contribution": "망상 형성의 인지적 모형(성급한 결론 편향, 귀인 편향)을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "과대망상",
        "name_en": "Grandiose Delusion",
        "id": "SCHIZO_GDL_013"
      },
      {
        "name_ko": "관계망상",
        "name_en": "Delusion of Reference",
        "id": "SCHIZO_RDL_014"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      }
    ],
    "sub_types": [
      {
        "name": "피해망상",
        "description": "타인이 자신을 해치려 한다는 믿음"
      },
      {
        "name": "과대망상",
        "description": "자신이 특별한 능력이나 지위를 가졌다는 믿음"
      },
      {
        "name": "관계망상",
        "description": "무관한 사건이 자신과 특별한 관련이 있다는 믿음"
      },
      {
        "name": "사고삽입/사고탈취/사고전파",
        "description": "슈나이더 1급 증상에 해당하는 사고 관련 망상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "망상의 3요소: (1)확고한 믿음, (2)증거에 반하여 유지, (3)문화적으로 설명 불가",
      "differential": "과대평가적 사고(overvalued idea)는 어느 정도 현실적 근거가 있으나 망상은 현실 근거가 전혀 없음",
      "key_point": "기괴한(bizarre) 망상은 조현병에 특징적이나, 비기괴한 망상은 망상장애에서도 나타남",
      "common_mistake": "강한 종교적·문화적 신념을 망상으로 오진하는 경우 — 문화적 맥락 고려 필수"
    }
  },
  {
    "id": "SCHIZO_PDL_012",
    "terminology": "피해망상 (Persecutory Delusion)",
    "terminology_ko": "피해망상",
    "terminology_en": "Persecutory Delusion",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "타인이나 조직이 자신을 감시하거나, 해치거나, 속이거나, 음모를 꾸미고 있다는 잘못된 확고한 믿음으로, 모든 정신병적 장애에서 가장 흔하게 나타나는 망상 유형이다.",
    "definition_en": "A fixed false belief that one is being watched, harmed, deceived, or conspired against by others or organizations, the most common type of delusion across all psychotic disorders.",
    "significance": "가장 빈도가 높은 망상 유형으로 환자의 공포, 회피행동, 폭력 위험 등 임상 관리에서 중요한 함의를 가진다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 프리먼",
        "name_en": "Daniel Freeman",
        "contribution": "피해망상의 인지적 모형을 개발하고 가상현실 기반 치료 연구를 선도"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "망상",
        "name_en": "Delusion",
        "id": "SCHIZO_DLN_011"
      },
      {
        "name_ko": "과대망상",
        "name_en": "Grandiose Delusion",
        "id": "SCHIZO_GDL_013"
      },
      {
        "name_ko": "망상장애",
        "name_en": "Delusional Disorder",
        "id": "SCHIZO_DEL_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "피해(被害) = 해를 입는다는 믿음, 가장 흔한 망상 유형",
      "differential": "사회불안장애의 부정적 평가 두려움과 달리, 피해망상은 적극적인 해(harm)에 대한 확신",
      "key_point": "모든 정신병적 장애에서 가장 흔한 망상 유형 (조현병, 망상장애 모두에서)",
      "common_mistake": "피해망상이 있으면 반드시 조현병이라고 단정하는 오류 — 다양한 장애에서 나타남"
    }
  },
  {
    "id": "SCHIZO_GDL_013",
    "terminology": "과대망상 (Grandiose Delusion)",
    "terminology_ko": "과대망상",
    "terminology_en": "Grandiose Delusion",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "자신이 특별한 능력, 부, 명성, 지위, 정체성을 가지고 있다는 과장되고 잘못된 확고한 믿음으로, 조현병뿐 아니라 조증 삽화에서도 흔하게 나타난다.",
    "definition_en": "A fixed false belief of possessing exceptional abilities, wealth, fame, status, or identity, commonly seen not only in schizophrenia but also in manic episodes.",
    "significance": "조증과 정신병적 장애를 감별하는 데 중요한 증상이며, 환자의 치료 동기와 병식에 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "조현병의 다양한 망상 유형을 체계적으로 기술한 초기 학자"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "망상",
        "name_en": "Delusion",
        "id": "SCHIZO_DLN_011"
      },
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "양극성 I형 장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BPI_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과대(誇大) = 자신을 과장되게 크게 보는 망상",
      "differential": "자기애성 성격장애의 과대성은 인정·찬사 욕구, 과대망상은 현실과 동떨어진 확고한 믿음",
      "key_point": "조증에서의 과대망상은 기분 상승과 함께 나타나고, 조현병에서는 기분과 무관하게 나타남",
      "common_mistake": "과대망상과 자기애적 과대성(narcissistic grandiosity)을 같은 것으로 혼동"
    }
  },
  {
    "id": "SCHIZO_RDL_014",
    "terminology": "관계망상 (Delusion of Reference)",
    "terminology_ko": "관계망상",
    "terminology_en": "Delusion of Reference",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "TV 뉴스, 타인의 대화, 노래 가사 등 주변의 무관한 사건이나 자극이 자신에게 특별한 의미를 가지거나 자신을 겨냥한 것이라는 잘못된 확고한 믿음이다.",
    "definition_en": "A fixed false belief that unrelated events or stimuli in the environment—such as TV broadcasts, others' conversations, or song lyrics—have special personal meaning or are directed at oneself.",
    "significance": "자기중심적 해석 편향의 극단적 형태로서 정신병적 사고의 핵심 특성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "쿠르트 슈나이더",
        "name_en": "Kurt Schneider",
        "contribution": "1급 증상 체계에서 관계망상과 관련 경험(사고전파 등)의 진단적 중요성을 강조"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "망상",
        "name_en": "Delusion",
        "id": "SCHIZO_DLN_011"
      },
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'관계(reference)' = 무관한 사건이 나와 '관계'있다고 확신",
      "differential": "관계사고(idea of reference)는 의심 수준, 관계망상은 확고한 확신 수준",
      "key_point": "조현형 성격장애의 관계사고와 달리, 관계망상은 확신의 강도가 높고 현실 검증력 상실",
      "common_mistake": "관계사고(idea of reference)와 관계망상(delusion of reference)을 구분하지 못하는 오류"
    }
  },
  {
    "id": "SCHIZO_FLA_015",
    "terminology": "정동둔마 (Flat Affect)",
    "terminology_ko": "정동둔마",
    "terminology_en": "Flat Affect",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "얼굴 표정, 목소리 톤, 제스처 등 감정 표현이 현저히 감소하거나 거의 없는 상태로, 조현병의 대표적 음성증상이다.",
    "definition_en": "A marked reduction or near absence of emotional expression in facial expressions, vocal tone, and gestures, representing a hallmark negative symptom of schizophrenia.",
    "significance": "환자의 사회적 상호작용과 대인관계에 심각한 영향을 미치며, 치료 저항성이 높아 재활에 주요 장벽이 된다.",
    "key_researchers": [
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "정동장해(affective disturbance)를 조현병의 기본 증상(4A 중 하나)으로 규정"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "무의욕",
        "name_en": "Avolition",
        "id": "SCHIZO_AVO_016"
      },
      {
        "name_ko": "무쾌감",
        "name_en": "Anhedonia",
        "id": "SCHIZO_ANH_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "정동'둔마' = 감정 표현이 '둔해진(blunted/flat)' 상태",
      "differential": "우울증의 슬픔과 달리 정동둔마는 감정 경험 자체보다 감정 '표현'이 감소",
      "key_point": "감정을 느끼지 못하는 것이 아니라 표현하지 못하는 것일 수 있음 (내적 경험은 유지될 수 있음)",
      "common_mistake": "정동둔마를 감정 경험의 부재로 오해 — 실제로는 표현의 부재이며 내적 감정은 있을 수 있음"
    }
  },
  {
    "id": "SCHIZO_AVO_016",
    "terminology": "무의욕 (Avolition)",
    "terminology_ko": "무의욕",
    "terminology_en": "Avolition",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "목표지향적 활동을 시작하거나 유지하는 의지와 동기가 현저히 감소한 상태로, 개인위생, 직업활동, 사회적 참여 등 일상생활 전반에 영향을 미치는 음성증상이다.",
    "definition_en": "A marked decrease in will and motivation to initiate or sustain goal-directed activities, affecting daily living including personal hygiene, occupational activities, and social participation, as a negative symptom.",
    "significance": "사회적·직업적 기능 저하의 주요 원인이며, 조현병 환자의 장기적 삶의 질을 결정하는 핵심 증상이다.",
    "key_researchers": [
      {
        "name_ko": "낸시 안드레아센",
        "name_en": "Nancy Andreasen",
        "contribution": "음성증상 평가 척도(SANS)에서 무의욕-무관심을 핵심 차원으로 포함"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "정동둔마",
        "name_en": "Flat Affect",
        "id": "SCHIZO_FLA_015"
      },
      {
        "name_ko": "무쾌감",
        "name_en": "Anhedonia",
        "id": "SCHIZO_ANH_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "A(없음)+volition(의지) = 의지가 없는 상태",
      "differential": "우울증의 무기력은 슬픔·절망과 동반되나, 무의욕은 기분과 독립적으로 나타남",
      "key_point": "게으름이 아닌 신경생물학적 기반의 동기체계 손상으로 이해해야 함",
      "common_mistake": "환자의 의지 부족을 '게으름'이나 '태만'으로 오해하는 것"
    }
  },
  {
    "id": "SCHIZO_ANH_017",
    "terminology": "무쾌감 (Anhedonia)",
    "terminology_ko": "무쾌감",
    "terminology_en": "Anhedonia",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "이전에 즐거움을 느꼈던 활동이나 경험에서 더 이상 쾌감을 느끼지 못하는 상태로, 조현병의 음성증상이자 우울장애의 핵심 증상이기도 하다.",
    "definition_en": "The inability to experience pleasure from activities or experiences that were previously enjoyable, a negative symptom of schizophrenia and also a core symptom of depressive disorders.",
    "significance": "다양한 정신장애에서 공통적으로 나타나는 범진단적 증상으로, 보상 체계의 기능 이상을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "폴 메엘",
        "name_en": "Paul Meehl",
        "contribution": "무쾌감을 조현형(schizotypy)의 핵심 특성으로 제안하고 유전적 취약성 모형에 통합"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "무의욕",
        "name_en": "Avolition",
        "id": "SCHIZO_AVO_016"
      }
    ],
    "sub_types": [
      {
        "name": "소비적 무쾌감",
        "description": "현재 경험 중 즐거움을 느끼지 못함"
      },
      {
        "name": "기대적 무쾌감",
        "description": "미래 활동에 대한 기대 즐거움을 느끼지 못함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "An(없음)+hedonia(쾌감) = 쾌감이 없는 상태",
      "differential": "우울증의 무쾌감은 슬픔과 동반, 조현병의 무쾌감은 기분 증상과 독립적",
      "key_point": "조현병에서는 기대적 무쾌감이 특히 두드러지며, 소비적 쾌감은 비교적 보존될 수 있음",
      "common_mistake": "모든 즐거움의 상실로 오해하나 조현병에서는 기대적 무쾌감이 더 핵심적"
    }
  },
  {
    "id": "SCHIZO_TFD_018",
    "terminology": "사고의 비약 및 지리멸렬 (Disorganized Thinking)",
    "terminology_ko": "사고의 비약 및 지리멸렬",
    "terminology_en": "Disorganized Thinking",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "사고 과정의 논리적 연결이 느슨해지거나 완전히 단절되어, 대화가 주제에서 벗어나거나(탈선), 관련 없는 내용이 뒤섞이거나(지리멸렬), 이해할 수 없는 언어(신어증)를 사용하는 와해된 사고 양상이다.",
    "definition_en": "A disrupted thought process in which logical connections become loose or completely severed, manifesting as tangential speech (derailment), incoherence, or incomprehensible language (neologisms).",
    "significance": "언어를 통해 관찰 가능한 사고장애로서 정신병적 상태의 중증도를 평가하는 주요 임상 지표이다.",
    "key_researchers": [
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "연상이완(loosening of associations)을 조현병의 기본 증상(4A 중 하나)으로 규정"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "와해된 행동",
        "name_en": "Disorganized Behavior",
        "id": "SCHIZO_DSB_023"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "탈선(derailment)",
        "description": "화제가 점진적으로 원래 주제에서 벗어남"
      },
      {
        "name": "지리멸렬(incoherence)",
        "description": "문장 내 단어들 간 논리적 연결 없음 (word salad)"
      },
      {
        "name": "신어증(neologism)",
        "description": "존재하지 않는 새로운 단어를 만들어 사용"
      },
      {
        "name": "우원증(circumstantiality)",
        "description": "불필요한 세부사항을 거쳐 결국 본 주제로 돌아옴"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사고가 '와해'되면 말로 나타남 — 와해된 사고는 와해된 언어로 관찰",
      "differential": "조증의 사고비약(flight of ideas)은 빠르지만 연결이 있음, 조현병의 지리멸렬은 연결 자체가 없음",
      "key_point": "DSM-5에서는 와해된 언어(speech)를 통해 와해된 사고(thought)를 추론한다고 명시",
      "common_mistake": "사고비약(flight of ideas)과 연상이완(loosening of associations)을 같은 것으로 혼동"
    }
  },
  {
    "id": "SCHIZO_DOP_019",
    "terminology": "도파민 가설 (Dopamine Hypothesis)",
    "terminology_ko": "도파민 가설",
    "terminology_en": "Dopamine Hypothesis",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병의 양성증상이 중변연계(mesolimbic) 도파민 경로의 과활성과 관련되고, 음성증상 및 인지 결손은 중피질(mesocortical) 도파민 경로의 저활성과 관련된다는 신경화학적 가설이다.",
    "definition_en": "A neurochemical hypothesis proposing that positive symptoms of schizophrenia relate to hyperactivity in the mesolimbic dopamine pathway, while negative symptoms and cognitive deficits relate to hypoactivity in the mesocortical dopamine pathway.",
    "significance": "항정신병 약물 개발의 이론적 기초가 되었으며, 조현병의 생물학적 이해에 가장 오래되고 영향력 있는 모형이다.",
    "key_researchers": [
      {
        "name_ko": "아르비드 칼슨",
        "name_en": "Arvid Carlsson",
        "contribution": "도파민 신경전달물질 발견과 항정신병 약물의 도파민 차단 기제를 규명 (노벨상 수상)"
      },
      {
        "name_ko": "솔로몬 스나이더",
        "name_en": "Solomon Snyder",
        "contribution": "D2 도파민 수용체 결합과 항정신병 효과의 상관관계를 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "글루타메이트 가설",
        "name_en": "Glutamate Hypothesis",
        "id": "SCHIZO_GLU_020"
      },
      {
        "name_ko": "정형 항정신병 약물",
        "name_en": "Typical Antipsychotics",
        "id": "SCHIZO_TAP_025"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도파민 '과다'=양성증상, 도파민 '부족'=음성증상 (경로가 다름)",
      "differential": "글루타메이트 가설은 NMDA 수용체 저기능을 강조하여 음성증상과 인지결손을 더 잘 설명",
      "key_point": "원래 단순한 '도파민 과다' 가설에서 경로별 과다/부족의 수정된 가설로 발전",
      "common_mistake": "단순히 도파민이 많다고만 이해하는 것 — 중변연계와 중피질계의 방향이 반대"
    }
  },
  {
    "id": "SCHIZO_GLU_020",
    "terminology": "글루타메이트 가설 (Glutamate Hypothesis)",
    "terminology_ko": "글루타메이트 가설",
    "terminology_en": "Glutamate Hypothesis",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병이 NMDA형 글루타메이트 수용체의 저기능(hypofunction)과 관련되며, 이것이 양성증상뿐 아니라 음성증상과 인지 결손까지 설명할 수 있다는 신경화학적 가설이다.",
    "definition_en": "A neurochemical hypothesis proposing that schizophrenia involves hypofunction of NMDA-type glutamate receptors, capable of explaining positive symptoms as well as negative symptoms and cognitive deficits.",
    "significance": "도파민 가설의 한계를 보완하며, 특히 음성증상과 인지 결손의 기제를 설명하는 새로운 치료 타깃을 제시한다.",
    "key_researchers": [
      {
        "name_ko": "대니얼 자벨",
        "name_en": "Daniel Javitt",
        "contribution": "PCP/케타민 연구를 통해 NMDA 수용체 저기능 모형을 체계화"
      },
      {
        "name_ko": "조셉 코일",
        "name_en": "Joseph Coyle",
        "contribution": "글루타메이트-도파민 상호작용 모형을 발전시켜 통합적 이해 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "인지적 결손",
        "name_en": "Cognitive Deficits",
        "id": "SCHIZO_COG_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PCP·케타민(NMDA 차단)이 조현병과 유사한 전 범위 증상을 유발 → 글루타메이트 가설의 근거",
      "differential": "도파민 가설이 양성증상 위주라면, 글루타메이트 가설은 음성증상과 인지결손까지 포괄",
      "key_point": "NMDA 수용체 저기능 → 글루타메이트 신호 감소 → 간접적으로 도파민 조절 이상 초래",
      "common_mistake": "도파민 가설과 경쟁적이라고 보지만, 실제로는 상호보완적 관계"
    }
  },
  {
    "id": "SCHIZO_VEN_021",
    "terminology": "뇌실 확대 (Ventricular Enlargement)",
    "terminology_ko": "뇌실 확대",
    "terminology_en": "Ventricular Enlargement",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병 환자의 뇌에서 측뇌실과 제3뇌실의 크기가 정상인에 비해 유의하게 확대된 소견으로, 뇌 조직(특히 회백질)의 감소를 시사하는 구조적 뇌 이상이다.",
    "definition_en": "A structural brain abnormality in schizophrenia in which the lateral and third ventricles are significantly enlarged compared to normal controls, suggesting a reduction in brain tissue, particularly gray matter.",
    "significance": "조현병의 신경발달적 기원을 지지하는 가장 일관되게 보고된 뇌영상 소견이다.",
    "key_researchers": [
      {
        "name_ko": "이브 존스톤",
        "name_en": "Eve Johnstone",
        "contribution": "1976년 CT를 이용해 조현병 환자의 뇌실 확대를 최초로 체계적으로 보고"
      },
      {
        "name_ko": "다니엘 와인버거",
        "name_en": "Daniel Weinberger",
        "contribution": "뇌실 확대와 전두엽 기능 저하를 연결하는 신경발달 모형 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전두엽 기능 저하",
        "name_en": "Hypofrontality",
        "id": "SCHIZO_HYP_022"
      },
      {
        "name_ko": "인지적 결손",
        "name_en": "Cognitive Deficits",
        "id": "SCHIZO_COG_024"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "뇌실이 '넓어졌다' = 주변 뇌 조직이 '줄어들었다'",
      "differential": "알츠하이머의 뇌 위축은 진행성·퇴행성, 조현병의 뇌실 확대는 발병 초기부터 존재(신경발달적)",
      "key_point": "조현병에서 가장 일관되게 보고되는 뇌영상 소견이나, 진단 특이적이지는 않음",
      "common_mistake": "뇌실 확대가 조현병에만 특이한 것으로 오해 — 다른 장애나 정상 노화에서도 나타남"
    }
  },
  {
    "id": "SCHIZO_HYP_022",
    "terminology": "전두엽 기능 저하 (Hypofrontality)",
    "terminology_ko": "전두엽 기능 저하",
    "terminology_en": "Hypofrontality",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병 환자에서 전두엽(특히 배외측 전전두피질)의 활성이 감소되어, 실행기능, 작업기억, 계획 능력 등 고위 인지기능의 저하와 음성증상에 기여하는 뇌기능적 이상이다.",
    "definition_en": "Reduced activation of the frontal lobe (especially the dorsolateral prefrontal cortex) in schizophrenia, contributing to deficits in executive function, working memory, planning, and negative symptoms.",
    "significance": "음성증상과 인지 결손의 신경 기반을 설명하며, 중피질 도파민 경로의 저기능과 연결되는 핵심 소견이다.",
    "key_researchers": [
      {
        "name_ko": "다니엘 와인버거",
        "name_en": "Daniel Weinberger",
        "contribution": "위스콘신 카드분류검사 수행 중 전두엽 저활성을 fMRI/PET으로 입증"
      },
      {
        "name_ko": "패트리샤 골드먼-라킥",
        "name_en": "Patricia Goldman-Rakic",
        "contribution": "전전두엽 피질의 작업기억 기능과 도파민의 역할을 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "뇌실 확대",
        "name_en": "Ventricular Enlargement",
        "id": "SCHIZO_VEN_021"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "인지적 결손",
        "name_en": "Cognitive Deficits",
        "id": "SCHIZO_COG_024"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Hypo(저하)+frontality(전두엽) = 전두엽이 덜 활성화",
      "differential": "ADHD도 전두엽 기능 저하가 있으나 주로 주의력·충동성에 국한, 조현병은 전반적 실행기능 저하",
      "key_point": "중피질(mesocortical) 도파민 경로의 저활성과 관련되며 음성증상의 신경 기반",
      "common_mistake": "전두엽 손상과 동일시하는 오류 — 기능적 저활성이지 구조적 손상만을 의미하지 않음"
    }
  },
  {
    "id": "SCHIZO_DSB_023",
    "terminology": "와해된 행동 (Disorganized Behavior)",
    "terminology_ko": "와해된 행동",
    "terminology_en": "Disorganized Behavior",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "목표지향적이지 않고 기이하거나 부적절한 행동 패턴으로, 부적절한 감정 반응, 예측할 수 없는 흥분, 엉뚱한 복장 등이 포함되며 일상생활 수행을 심각하게 저해한다.",
    "definition_en": "Non-goal-directed, bizarre, or inappropriate behavioral patterns including inappropriate emotional reactions, unpredictable agitation, and eccentric dress, severely impairing daily functioning.",
    "significance": "양성증상의 행동적 표현으로서 환자의 사회적 적응과 독립생활 능력을 직접적으로 저해하는 증상이다.",
    "key_researchers": [
      {
        "name_ko": "오이겐 블로일러",
        "name_en": "Eugen Bleuler",
        "contribution": "조현병의 자폐적 행동(autism)을 기본 증상(4A)으로 기술하며 행동 와해를 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "사고의 비약 및 지리멸렬",
        "name_en": "Disorganized Thinking",
        "id": "SCHIZO_TFD_018"
      },
      {
        "name_ko": "긴장증",
        "name_en": "Catatonia",
        "id": "SCHIZO_CAT_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "와해(disorganized) = 조직화되지 않은 — 행동이 목적 없이 흩어짐",
      "differential": "조증의 과활동은 목표지향적(비록 비현실적이더라도), 와해된 행동은 목표 자체가 없음",
      "key_point": "부적절한 감정 표현(예: 장례식에서 웃음)도 와해된 행동에 포함됨",
      "common_mistake": "단순한 기이함과 구분 — 임상적 와해는 일상생활 기능을 실질적으로 저해해야 함"
    }
  },
  {
    "id": "SCHIZO_COG_024",
    "terminology": "인지적 결손 (Cognitive Deficits)",
    "terminology_ko": "인지적 결손",
    "terminology_en": "Cognitive Deficits",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병에서 흔히 나타나는 주의력, 작업기억, 실행기능, 처리속도, 사회인지 등의 전반적인 인지기능 저하로, 양성/음성증상과 독립적인 세 번째 증상 차원으로 간주된다.",
    "definition_en": "Broad cognitive impairments common in schizophrenia—including attention, working memory, executive function, processing speed, and social cognition—considered a third symptom dimension independent of positive and negative symptoms.",
    "significance": "기능적 회복과 사회적 적응의 가장 강력한 예측인자이며, 양성증상 관해 후에도 지속되어 장기적 재활의 주요 표적이다.",
    "key_researchers": [
      {
        "name_ko": "마이클 그린",
        "name_en": "Michael Green",
        "contribution": "인지 결손이 기능적 결과(functional outcome)의 가장 중요한 예측인자임을 체계적으로 입증"
      },
      {
        "name_ko": "테리 골드버그",
        "name_en": "Terry Goldberg",
        "contribution": "조현병의 전두엽 실행기능 결손을 신경심리학적으로 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전두엽 기능 저하",
        "name_en": "Hypofrontality",
        "id": "SCHIZO_HYP_022"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "글루타메이트 가설",
        "name_en": "Glutamate Hypothesis",
        "id": "SCHIZO_GLU_020"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      }
    ],
    "sub_types": [
      {
        "name": "주의력 결손",
        "description": "선택적·지속적 주의력 저하"
      },
      {
        "name": "작업기억 결손",
        "description": "정보를 일시적으로 유지·조작하는 능력 저하"
      },
      {
        "name": "실행기능 결손",
        "description": "계획, 유연한 사고, 의사결정 능력 저하"
      },
      {
        "name": "사회인지 결손",
        "description": "타인의 의도·감정을 파악하는 능력 저하"
      }
    ],
    "quiz_hints": {
      "mnemonic": "조현병의 3차원: 양성증상 + 음성증상 + 인지 결손",
      "differential": "ADHD의 주의력 결손은 과활성/충동성 동반, 조현병의 인지 결손은 전반적·광범위",
      "key_point": "기능적 회복(직업, 대인관계)의 가장 강력한 예측인자 — 양성증상보다 중요",
      "common_mistake": "양성증상이 사라지면 완전히 회복된다고 오해 — 인지 결손은 관해 후에도 지속"
    }
  },
  {
    "id": "SCHIZO_TAP_025",
    "terminology": "정형 항정신병 약물 (Typical Antipsychotics)",
    "terminology_ko": "정형 항정신병 약물",
    "terminology_en": "Typical Antipsychotics",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "D2 도파민 수용체를 주로 차단하여 양성증상을 완화하는 1세대 항정신병 약물로, 클로르프로마진, 할로페리돌 등이 대표적이며, 추체외로 부작용과 지연성 운동이상증의 위험이 있다.",
    "definition_en": "First-generation antipsychotics that primarily block D2 dopamine receptors to alleviate positive symptoms, including chlorpromazine and haloperidol, with risks of extrapyramidal side effects and tardive dyskinesia.",
    "significance": "최초의 효과적인 조현병 치료제로서 정신의학 역사에 혁명적 전환을 가져왔고, 탈원화 운동의 약물적 기반이 되었다.",
    "key_researchers": [
      {
        "name_ko": "장 들레",
        "name_en": "Jean Delay",
        "contribution": "1952년 클로르프로마진의 항정신병 효과를 최초로 보고"
      },
      {
        "name_ko": "피에르 드니커",
        "name_en": "Pierre Deniker",
        "contribution": "클로르프로마진의 임상 적용을 체계화하여 정신약물학의 기초를 마련"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "비정형 항정신병 약물",
        "name_en": "Atypical Antipsychotics",
        "id": "SCHIZO_AAP_026"
      },
      {
        "name_ko": "양성증상",
        "name_en": "Positive Symptoms",
        "id": "SCHIZO_POS_007"
      },
      {
        "name_ko": "탈원화",
        "name_en": "Deinstitutionalization",
        "id": "SCHIZO_DEI_031"
      }
    ],
    "sub_types": [
      {
        "name": "클로르프로마진(Thorazine)",
        "description": "최초의 항정신병 약물 (저역가)"
      },
      {
        "name": "할로페리돌(Haldol)",
        "description": "가장 널리 사용된 고역가 정형 항정신병 약물"
      }
    ],
    "quiz_hints": {
      "mnemonic": "정형(typical) = 1세대, 전통적, D2 차단 중심",
      "differential": "비정형(2세대)은 D2+세로토닌 차단, 정형(1세대)은 D2 차단 중심",
      "key_point": "양성증상에 효과적이나 음성증상에는 거의 효과 없고, EPS(추체외로 증상) 부작용 위험 높음",
      "common_mistake": "정형과 비정형 모두 음성증상에 효과적이라는 오해 — 정형은 양성증상 위주"
    }
  },
  {
    "id": "SCHIZO_AAP_026",
    "terminology": "비정형 항정신병 약물 (Atypical Antipsychotics)",
    "terminology_ko": "비정형 항정신병 약물",
    "terminology_en": "Atypical Antipsychotics",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "D2 도파민 수용체와 5-HT2A 세로토닌 수용체를 함께 차단하는 2세대 항정신병 약물로, 리스페리돈, 올란자핀 등이 대표적이며, 추체외로 부작용은 적으나 대사증후군 위험이 있다.",
    "definition_en": "Second-generation antipsychotics that block both D2 dopamine and 5-HT2A serotonin receptors, including risperidone and olanzapine, with fewer extrapyramidal side effects but metabolic syndrome risks.",
    "significance": "정형 약물의 부작용을 줄이고 음성증상에 대한 부분적 효과를 제공하여 현재 조현병 1차 치료제로 사용된다.",
    "key_researchers": [
      {
        "name_ko": "허버트 멜처",
        "name_en": "Herbert Meltzer",
        "contribution": "비정형 항정신병 약물의 세로토닌-도파민 이중 차단 기제를 이론화"
      },
      {
        "name_ko": "존 케인",
        "name_en": "John Kane",
        "contribution": "클로자핀의 치료저항성 조현병에 대한 우월한 효과를 대규모 임상시험으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정형 항정신병 약물",
        "name_en": "Typical Antipsychotics",
        "id": "SCHIZO_TAP_025"
      },
      {
        "name_ko": "클로자핀",
        "name_en": "Clozapine",
        "id": "SCHIZO_CLZ_027"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      }
    ],
    "sub_types": [
      {
        "name": "리스페리돈(Risperdal)",
        "description": "가장 널리 사용되는 비정형 약물 중 하나"
      },
      {
        "name": "올란자핀(Zyprexa)",
        "description": "효과적이나 체중증가·대사증후군 위험"
      },
      {
        "name": "아리피프라졸(Abilify)",
        "description": "D2 부분 효현제로 부작용 프로필이 상대적으로 양호"
      }
    ],
    "quiz_hints": {
      "mnemonic": "비정형(atypical) = 2세대, D2+5-HT2A 이중 차단",
      "differential": "정형(EPS 많음, 대사부작용 적음) vs 비정형(EPS 적음, 대사부작용 많음)",
      "key_point": "현재 대부분의 치료 가이드라인에서 1차 선택약으로 권고됨",
      "common_mistake": "비정형이 정형보다 '전체적으로 우월하다'는 오해 — CATIE 연구에서 효능 차이는 작았음"
    }
  },
  {
    "id": "SCHIZO_CLZ_027",
    "terminology": "클로자핀 (Clozapine)",
    "terminology_ko": "클로자핀",
    "terminology_en": "Clozapine",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "치료저항성 조현병에 유일하게 승인된 항정신병 약물로, 다수용체 차단 기제를 가지며, 무과립구증(agranulocytosis)의 위험 때문에 정기적 혈액검사가 필수적이다.",
    "definition_en": "The only antipsychotic approved for treatment-resistant schizophrenia, with a multi-receptor blocking mechanism, requiring regular blood monitoring due to the risk of agranulocytosis.",
    "significance": "치료저항성 조현병에 대한 유일한 근거기반 약물이며, 자살 위험 감소 효과도 입증된 독보적 약물이다.",
    "key_researchers": [
      {
        "name_ko": "존 케인",
        "name_en": "John Kane",
        "contribution": "1988년 클로자핀이 치료저항성 조현병에 유의하게 우월함을 입증한 획기적 연구"
      },
      {
        "name_ko": "허버트 멜처",
        "name_en": "Herbert Meltzer",
        "contribution": "클로자핀의 자살 위험 감소 효과(InterSePT 연구)를 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "비정형 항정신병 약물",
        "name_en": "Atypical Antipsychotics",
        "id": "SCHIZO_AAP_026"
      },
      {
        "name_ko": "정형 항정신병 약물",
        "name_en": "Typical Antipsychotics",
        "id": "SCHIZO_TAP_025"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "'클로자핀 = 최후의 보루' — 2가지 이상 약물 실패 후 사용하는 치료저항성 약물",
      "differential": "다른 비정형 약물과 달리 클로자핀은 치료저항성 조현병에 '유일하게' 효과 입증",
      "key_point": "무과립구증(약 1%) 위험 때문에 정기적 혈액검사(ANC 모니터링)가 필수",
      "common_mistake": "모든 비정형 약물이 클로자핀만큼 효과적이라는 오해 — 클로자핀은 독보적 위치"
    }
  },
  {
    "id": "SCHIZO_SST_028",
    "terminology": "사회기술훈련 (Social Skills Training)",
    "terminology_ko": "사회기술훈련",
    "terminology_en": "Social Skills Training",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병 환자의 대인관계 기술, 의사소통 능력, 일상생활 기술을 체계적으로 교육하는 행동적 재활 프로그램으로, 역할연기, 모델링, 피드백 등을 활용한다.",
    "definition_en": "A behavioral rehabilitation program that systematically teaches interpersonal skills, communication abilities, and daily living skills to patients with schizophrenia, utilizing role-playing, modeling, and feedback.",
    "significance": "약물 치료로 해결되지 않는 사회적 기능 결손을 보완하는 핵심 심리사회적 개입이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 리버만",
        "name_en": "Robert Liberman",
        "contribution": "UCLA 사회기술훈련 모듈을 개발하여 조현병 재활의 표준 프로그램으로 확립"
      },
      {
        "name_ko": "앨런 벨락",
        "name_en": "Alan Bellack",
        "contribution": "사회기술훈련의 효과를 체계적으로 연구하고 인지재활과의 통합 모형 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "음성증상",
        "name_en": "Negative Symptoms",
        "id": "SCHIZO_NEG_008"
      },
      {
        "name_ko": "인지적 결손",
        "name_en": "Cognitive Deficits",
        "id": "SCHIZO_COG_024"
      },
      {
        "name_ko": "지역사회 정신건강",
        "name_en": "Community Mental Health",
        "id": "SCHIZO_CMH_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SST = Social Skills Training, 역할연기+모델링+피드백의 3단계",
      "differential": "인지재활(cognitive remediation)은 인지기능 자체를 훈련, SST는 사회적 행동 기술을 훈련",
      "key_point": "약물 치료와 병행할 때 가장 효과적이며, 기술의 일반화가 핵심 과제",
      "common_mistake": "사회기술훈련만으로 충분하다고 생각하는 오류 — 약물치료 기반 위에 보조적 개입"
    }
  },
  {
    "id": "SCHIZO_CAT_029",
    "terminology": "긴장증 (Catatonia)",
    "terminology_ko": "긴장증",
    "terminology_en": "Catatonia",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "운동 활동의 현저한 이상을 특징으로 하는 증후군으로, 긴장증적 혼미(무반응), 밀납 가변성, 거부증, 자세 유지, 상동증, 반향언어·반향행동, 과도한 운동 흥분 등이 포함된다.",
    "definition_en": "A syndrome of marked motor abnormalities including catatonic stupor (unresponsiveness), waxy flexibility, negativism, posturing, stereotypy, echolalia/echopraxia, and excessive motor agitation.",
    "significance": "DSM-5에서 독립적 명시자(specifier)로 분류되어, 조현병뿐 아니라 기분장애, 의학적 상태 등 다양한 원인에서 나타남이 인정되었다.",
    "key_researchers": [
      {
        "name_ko": "칼 루드비히 칼바움",
        "name_en": "Karl Ludwig Kahlbaum",
        "contribution": "1874년 긴장증(catatonia)을 독립 질환으로 최초 기술"
      },
      {
        "name_ko": "막스 핑크",
        "name_en": "Max Fink",
        "contribution": "현대 긴장증 연구를 부활시키고 벤조디아제핀/ECT 치료 근거를 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "와해된 행동",
        "name_en": "Disorganized Behavior",
        "id": "SCHIZO_DSB_023"
      },
      {
        "name_ko": "양극성 I형 장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BPI_002"
      }
    ],
    "sub_types": [
      {
        "name": "긴장증적 혼미",
        "description": "환경에 대한 반응이 없는 무반응 상태"
      },
      {
        "name": "밀납 가변성",
        "description": "외부에서 취해준 자세를 유지하는 상태"
      },
      {
        "name": "긴장증적 흥분",
        "description": "목적 없는 과도한 운동 활동"
      }
    ],
    "quiz_hints": {
      "mnemonic": "긴장증의 양극단: 혼미(움직임 없음) ↔ 흥분(과도한 움직임)",
      "differential": "조현병의 와해된 행동과 달리, 긴장증은 운동 영역의 특이적 증후군",
      "key_point": "DSM-5에서 조현병만의 증상이 아닌 범진단적 명시자로 변경됨 — 기분장애에서도 나타남",
      "common_mistake": "긴장증이 조현병에만 나타난다는 오해 — 양극성장애, 우울장애, 의학적 상태에서도 발생"
    }
  },
  {
    "id": "SCHIZO_PRO_030",
    "terminology": "전구기 (Prodromal Phase)",
    "terminology_ko": "전구기",
    "terminology_en": "Prodromal Phase",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병의 활성기 증상이 본격적으로 나타나기 전에 사회적 위축, 기능 저하, 이상한 생각, 감정 변화 등 비특이적 증상이 점진적으로 나타나는 초기 단계이다.",
    "definition_en": "An early phase preceding the active symptoms of schizophrenia, characterized by gradual onset of nonspecific symptoms such as social withdrawal, functional decline, odd thoughts, and emotional changes.",
    "significance": "조기 발견과 예방적 개입의 기회를 제공하며, 정신병 전환을 지연하거나 예방할 수 있는 시기로 주목받는다.",
    "key_researchers": [
      {
        "name_ko": "하인즈 하프너",
        "name_en": "Heinz Häfner",
        "contribution": "ABC 조현병 연구를 통해 전구기의 평균 기간(약 5년)과 특성을 체계적으로 규명"
      },
      {
        "name_ko": "패트릭 맥고리",
        "name_en": "Patrick McGorry",
        "contribution": "전구기 청소년의 조기 개입 프로그램(EPPIC) 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "약화된 정신병 증후군",
        "name_en": "Attenuated Psychosis Syndrome",
        "id": "SCHIZO_APS_006"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Vulnerability-Stress Model",
        "id": "FOUND_DSV_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "전구(prodrome) = '앞서 달리는' = 본격적 증상 전에 먼저 나타나는 징후",
      "differential": "약화된 정신병 증후군은 약한 양성증상 존재, 전구기는 비특이적 기능저하가 주요 특징",
      "key_point": "평균 전구기 기간은 약 5년이며, 이 시기의 조기 개입이 예후를 개선할 수 있음",
      "common_mistake": "전구기 증상이 있으면 반드시 조현병으로 발전한다고 단정하는 오류 — 전환율은 약 30%"
    }
  },
  {
    "id": "SCHIZO_DEI_031",
    "terminology": "탈원화 (Deinstitutionalization)",
    "terminology_ko": "탈원화",
    "terminology_en": "Deinstitutionalization",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "만성 정신질환자를 대규모 정신병원에서 퇴원시켜 지역사회 기반 서비스로 전환하는 정책으로, 1950~60년대 항정신병 약물 개발과 인권 운동에 의해 촉진되었다.",
    "definition_en": "A policy of discharging chronic psychiatric patients from large mental institutions to community-based services, catalyzed by antipsychotic medication development and human rights movements in the 1950s-60s.",
    "significance": "정신건강 서비스 체계의 패러다임 전환을 가져왔으나, 지역사회 자원 부족으로 홈리스, 수감 등 새로운 문제를 야기하기도 했다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 그롭",
        "name_en": "Gerald Grob",
        "contribution": "미국 정신건강 정책사에서 탈원화의 역사적 과정과 결과를 체계적으로 분석"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "정형 항정신병 약물",
        "name_en": "Typical Antipsychotics",
        "id": "SCHIZO_TAP_025"
      },
      {
        "name_ko": "지역사회 정신건강",
        "name_en": "Community Mental Health",
        "id": "SCHIZO_CMH_032"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "SCHIZO_SST_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "탈(脫)원화 = 정신병원(원)에서 '벗어나는(탈)' 정책",
      "differential": "지역사회 정신건강은 서비스 '제공' 모형, 탈원화는 대형 병원 '퇴원' 정책",
      "key_point": "약물 개발 + 인권운동이 동시에 작용한 결과이며, 지역사회 자원 부족으로 '노숙자화' 문제 발생",
      "common_mistake": "탈원화가 완전한 성공이었다는 오해 — 충분한 지역사회 지원 없이는 새로운 문제를 만듦"
    }
  },
  {
    "id": "SCHIZO_CMH_032",
    "terminology": "지역사회 정신건강 (Community Mental Health)",
    "terminology_ko": "지역사회 정신건강",
    "terminology_en": "Community Mental Health",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "만성 정신질환자가 지역사회에서 거주하며 외래 치료, 주거 지원, 직업 재활, 사례관리 등 포괄적 서비스를 받는 정신건강 서비스 전달 모형이다.",
    "definition_en": "A mental health service delivery model in which chronic psychiatric patients live in the community while receiving comprehensive services including outpatient treatment, housing support, vocational rehabilitation, and case management.",
    "significance": "탈원화 이후의 핵심 서비스 모형으로, 정신질환자의 인권과 삶의 질 향상을 지향하는 현대 정신건강 정책의 기반이다.",
    "key_researchers": [
      {
        "name_ko": "레오나드 스테인",
        "name_en": "Leonard Stein",
        "contribution": "적극적 지역사회 치료팀(ACT) 모형을 개발하여 중증 정신질환자의 지역사회 관리 표준 확립"
      },
      {
        "name_ko": "메리 앤 테스트",
        "name_en": "Mary Ann Test",
        "contribution": "스테인과 함께 ACT 모형을 개발하고 그 효과를 실증적으로 검증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "탈원화",
        "name_en": "Deinstitutionalization",
        "id": "SCHIZO_DEI_031"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "SCHIZO_SST_028"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "적극적 지역사회 치료팀(ACT)",
        "description": "다학제팀이 환자를 직접 방문하여 포괄적 서비스 제공"
      },
      {
        "name": "지원고용(Supported Employment)",
        "description": "경쟁적 고용 환경에서 직업 코치 지원"
      },
      {
        "name": "지원주거(Supported Housing)",
        "description": "독립 주거에서 필요한 지원 서비스 제공"
      }
    ],
    "quiz_hints": {
      "mnemonic": "CMH = Community Mental Health, 탈원화 이후의 '대안'",
      "differential": "입원 치료는 급성기 안정화, 지역사회 정신건강은 만성기 유지·재활 목적",
      "key_point": "ACT(적극적 지역사회 치료팀)가 가장 효과적인 서비스 전달 모형으로 입증됨",
      "common_mistake": "지역사회 정신건강이 입원 치료를 완전히 대체한다고 오해 — 급성기에는 여전히 입원 필요"
    }
  },
  {
    "id": "SCHIZO_EXE_033",
    "terminology": "감정표현 (Expressed Emotion, EE)",
    "terminology_ko": "감정표현",
    "terminology_en": "Expressed Emotion",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "가족 구성원이 환자에 대해 보이는 비판, 적대감, 감정적 과잉관여의 정도로, 높은 EE를 보이는 가정환경이 조현병의 재발률을 유의하게 높인다는 것이 반복적으로 입증되었다.",
    "definition_en": "The degree of criticism, hostility, and emotional overinvolvement expressed by family members toward the patient, with high EE family environments consistently shown to significantly increase schizophrenia relapse rates.",
    "significance": "조현병의 경과에 미치는 가족 환경의 영향을 실증적으로 보여주며, 가족 심리교육 개입의 이론적 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "줄리안 리프",
        "name_en": "Julian Leff",
        "contribution": "감정표현(EE) 연구를 선도하고 가족 개입 프로그램의 재발 방지 효과를 입증"
      },
      {
        "name_ko": "크리스틴 본",
        "name_en": "Christine Vaughn",
        "contribution": "리프와 함께 높은 EE와 조현병 재발률의 관계를 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Vulnerability-Stress Model",
        "id": "FOUND_DSV_008"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "SCHIZO_SST_028"
      }
    ],
    "sub_types": [
      {
        "name": "비판(criticism)",
        "description": "환자의 행동이나 특성에 대한 부정적 평가"
      },
      {
        "name": "적대감(hostility)",
        "description": "환자 자체에 대한 부정적 태도"
      },
      {
        "name": "감정적 과잉관여(EOI)",
        "description": "과도한 보호, 자기희생, 감정적 몰입"
      }
    ],
    "quiz_hints": {
      "mnemonic": "EE의 3요소: 비판(Criticism), 적대감(Hostility), 과잉관여(EOI)",
      "differential": "가족의 '걱정'과 '감정적 과잉관여'는 다름 — EOI는 환자의 자율성을 침해하는 수준",
      "key_point": "높은 EE 가정의 재발률이 낮은 EE 가정보다 약 2배 이상 높음",
      "common_mistake": "EE가 조현병의 '원인'이라고 오해 — 원인이 아니라 재발의 '촉진 요인'"
    }
  },
  {
    "id": "SCHIZO_VSM_034",
    "terminology": "취약성-스트레스 모형 (Vulnerability-Stress Model)",
    "terminology_ko": "취약성-스트레스 모형",
    "terminology_en": "Vulnerability-Stress Model",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "유전적·생물학적 취약성을 가진 개인이 환경적 스트레스(생활 사건, 가족 갈등, 물질 사용 등)에 노출될 때 조현병이 발병한다는 통합적 모형으로, 소인-스트레스 모형이라고도 한다.",
    "definition_en": "An integrative model proposing that schizophrenia develops when individuals with genetic/biological vulnerability are exposed to environmental stressors (life events, family conflict, substance use), also known as the diathesis-stress model.",
    "significance": "생물학적 요인과 심리사회적 요인을 통합하여 조현병의 발병을 설명하는 가장 널리 수용되는 모형이다.",
    "key_researchers": [
      {
        "name_ko": "조지프 주빈",
        "name_en": "Joseph Zubin",
        "contribution": "1977년 조현병의 취약성-스트레스 모형을 최초로 체계적으로 제안"
      },
      {
        "name_ko": "보니 스프링",
        "name_en": "Bonnie Spring",
        "contribution": "주빈과 함께 취약성-스트레스 모형을 정교화하고 실증적 검증 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Vulnerability-Stress Model",
        "id": "FOUND_DSV_008"
      },
      {
        "name_ko": "감정표현",
        "name_en": "Expressed Emotion",
        "id": "SCHIZO_EXE_033"
      },
      {
        "name_ko": "전구기",
        "name_en": "Prodromal Phase",
        "id": "SCHIZO_PRO_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "취약성(diathesis, 소인) + 스트레스(stress) = 발병, 둘 다 필요",
      "differential": "순수 생물학적 모형은 유전만 강조, 취약성-스트레스 모형은 환경의 촉발 역할을 통합",
      "key_point": "취약성이 높으면 적은 스트레스로도 발병, 취약성이 낮으면 큰 스트레스에도 버틸 수 있음",
      "common_mistake": "취약성이 있으면 반드시 발병한다고 오해 — 스트레스 없이는 발병하지 않을 수 있음"
    }
  },
  {
    "id": "SCHIZO_AGE_035",
    "terminology": "발병 연령 차이 (Age of Onset Differences)",
    "terminology_ko": "발병 연령 차이",
    "terminology_en": "Age of Onset Differences",
    "category": "SCHIZO",
    "category_name": "조현병 스펙트럼 장애 (Schizophrenia Spectrum)",
    "definition": "조현병은 남성에서 평균 18~25세, 여성에서 평균 25~35세에 발병하는 경향이 있으며, 여성은 폐경기 전후에 두 번째 발병 피크가 있는 것으로 알려져 있다.",
    "definition_en": "Schizophrenia tends to onset at ages 18-25 in males and 25-35 in females, with females showing a second peak around menopause, reflecting gender-related differences in onset patterns.",
    "significance": "성별에 따른 발병 시기 차이는 에스트로겐의 보호 효과 가설과 신경발달적 성차를 이해하는 데 중요한 근거가 된다.",
    "key_researchers": [
      {
        "name_ko": "하인즈 하프너",
        "name_en": "Heinz Häfner",
        "contribution": "ABC 조현병 연구를 통해 성별에 따른 발병 연령 차이를 대규모로 입증"
      },
      {
        "name_ko": "메리 실트",
        "name_en": "Mary Seeman",
        "contribution": "에스트로겐 보호 가설을 제안하여 여성의 늦은 발병 연령을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "전구기",
        "name_en": "Prodromal Phase",
        "id": "SCHIZO_PRO_030"
      },
      {
        "name_ko": "취약성-스트레스 모형",
        "name_en": "Vulnerability-Stress Model",
        "id": "SCHIZO_VSM_034"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "남자 '일찍'(18~25세), 여자 '늦게'(25~35세), 여성은 폐경기에 2차 피크",
      "differential": "양극성장애는 남녀 발병 연령 차이가 적은 반면, 조현병은 약 3~5년 차이",
      "key_point": "여성의 늦은 발병은 에스트로겐의 도파민 조절 효과(보호 효과)로 설명됨",
      "common_mistake": "조현병이 주로 10대에 발병한다는 오해 — 가장 흔한 발병 시기는 후기 청소년~초기 성인기"
    }
  }
];

TERMS_DATA.PERSON = [
  {
    "id": "PERSON_GEN_001",
    "terminology": "성격장애 일반 기준 (General Personality Disorder Criteria)",
    "terminology_ko": "성격장애 일반 기준",
    "terminology_en": "General Personality Disorder Criteria",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "내적 경험과 행동의 지속적 패턴이 개인이 속한 문화적 기대에서 현저히 벗어나며, 인지, 정동, 대인관계 기능, 충동 조절 중 2개 이상의 영역에서 나타나고 광범위하고 경직된 양상이다.",
    "definition_en": "An enduring pattern of inner experience and behavior that deviates markedly from cultural expectations, manifested in two or more areas of cognition, affectivity, interpersonal functioning, and impulse control, and is pervasive and inflexible.",
    "significance": "10개 성격장애 모두에 공통으로 적용되는 상위 진단 기준으로, 성격장애 진단의 출발점이자 핵심 개념적 틀을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "성격장애의 분류 체계와 이론적 모형을 정교화하여 DSM 성격장애 체계의 기초를 마련"
      },
      {
        "name_ko": "토머스 위디거",
        "name_en": "Thomas Widiger",
        "contribution": "성격장애의 범주적 모형과 차원적 모형의 비교 연구를 통해 분류 체계 개선에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "대안적 DSM-5 모형",
        "name_en": "Alternative DSM-5 Model",
        "id": "PERSON_AMP_004"
      },
      {
        "name_ko": "자아동조적",
        "name_en": "Ego-Syntonic",
        "id": "PERSON_EGO_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성격장애 4영역: 인지(Cognition), 정동(Affectivity), 대인관계(Interpersonal), 충동(Impulse) — CAII",
      "differential": "임상 장애(Axis I)는 삽화적, 성격장애는 지속적·광범위한 패턴",
      "key_point": "청소년기 또는 초기 성인기부터 시작되며, 시간이 지나도 안정적으로 지속됨",
      "common_mistake": "일시적 스트레스 반응이나 발달 단계의 정상적 변화를 성격장애로 오진하는 경우"
    }
  },
  {
    "id": "PERSON_CLA_002",
    "terminology": "A군 성격장애 (Cluster A Personality Disorders)",
    "terminology_ko": "A군 성격장애",
    "terminology_en": "Cluster A Personality Disorders",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "기이하고 괴상한(odd/eccentric) 행동 양상을 특징으로 하는 성격장애 군집으로, 편집성, 조현성, 조현형 성격장애가 포함되며, 조현병 스펙트럼과 유전적 관련성이 있다.",
    "definition_en": "A cluster of personality disorders characterized by odd or eccentric behaviors, including paranoid, schizoid, and schizotypal personality disorders, with genetic links to the schizophrenia spectrum.",
    "significance": "조현병 스펙트럼과의 유전적·현상학적 연관성을 보여주며, 정신병적 장애의 경증 표현형으로 이해할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "성격장애의 군집 분류 체계를 이론적으로 정교화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "편집성 성격장애",
        "name_en": "Paranoid Personality Disorder",
        "id": "PERSON_PPD_005"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "편집성 성격장애",
        "description": "타인의 동기를 불신하고 의심하는 패턴"
      },
      {
        "name": "조현성 성격장애",
        "description": "사회적 관계에 무관심하고 감정 표현이 제한"
      },
      {
        "name": "조현형 성격장애",
        "description": "기이한 사고·행동과 대인관계 결함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "A군 = 'Awkward'(기이한) — 편집(Paranoid), 조현(Schizoid), 조현형(Schizotypal)",
      "differential": "B군(극적·감정적)과 C군(불안·두려움)과 달리 A군은 '기이하고 괴상한' 특성",
      "key_point": "조현병 환자의 가족에서 A군 성격장애 유병률이 높아 유전적 관련성 시사",
      "common_mistake": "A군 성격장애를 조현병과 동일시하는 오류 — 현실 검증력은 대체로 유지됨"
    }
  },
  {
    "id": "PERSON_CLB_003",
    "terminology": "B군 성격장애 (Cluster B Personality Disorders)",
    "terminology_ko": "B군 성격장애",
    "terminology_en": "Cluster B Personality Disorders",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "극적이고 감정적이며 변덕스러운(dramatic/erratic) 행동 양상을 특징으로 하는 성격장애 군집으로, 반사회적, 경계선, 히스트리오닉, 자기애성 성격장애가 포함된다.",
    "definition_en": "A cluster of personality disorders characterized by dramatic, emotional, and erratic behaviors, including antisocial, borderline, histrionic, and narcissistic personality disorders.",
    "significance": "임상에서 가장 자주 접하고 가장 많은 대인관계 문제를 야기하는 군집으로, 치료적 도전이 크다.",
    "key_researchers": [
      {
        "name_ko": "오토 컨버그",
        "name_en": "Otto Kernberg",
        "contribution": "경계선 인격 구조(borderline personality organization) 개념을 정립하여 B군 장애 이해의 정신역동적 기초를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "id": "PERSON_CLA_002"
      },
      {
        "name_ko": "C군 성격장애",
        "name_en": "Cluster C Personality Disorders",
        "id": "PERSON_CLC_018"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_009"
      }
    ],
    "sub_types": [
      {
        "name": "반사회적 성격장애",
        "description": "타인의 권리를 무시하고 위반하는 패턴"
      },
      {
        "name": "경계선 성격장애",
        "description": "불안정한 대인관계, 자기상, 정동 및 충동성"
      },
      {
        "name": "히스트리오닉 성격장애",
        "description": "과도한 감정 표현과 관심 추구"
      },
      {
        "name": "자기애성 성격장애",
        "description": "과대성, 찬사 욕구, 공감 부족"
      }
    ],
    "quiz_hints": {
      "mnemonic": "B군 = 'Bad boys and drama'(극적·감정적) — 반사회, 경계선, 히스트리오닉, 자기애",
      "differential": "A군(기이), B군(극적·감정적), C군(불안·두려움)으로 구분",
      "key_point": "B군은 타인에게 미치는 영향이 크고, 치료 중 역전이(countertransference) 문제가 빈번",
      "common_mistake": "B군 성격장애 환자들의 행동을 '의도적 조작'으로만 해석하는 오류"
    }
  },
  {
    "id": "PERSON_AMP_004",
    "terminology": "대안적 DSM-5 모형 (Alternative DSM-5 Model for Personality Disorders, AMPD)",
    "terminology_ko": "대안적 DSM-5 모형",
    "terminology_en": "Alternative DSM-5 Model for Personality Disorders",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "기존 범주적 성격장애 모형의 한계를 보완하기 위해 DSM-5 섹션 III에 포함된 차원적 모형으로, 성격 기능 수준(기준 A)과 병리적 성격 특성(기준 B, 5개 영역)을 평가한다.",
    "definition_en": "A dimensional model included in DSM-5 Section III to complement limitations of the categorical model, assessing level of personality functioning (Criterion A) and pathological personality traits (Criterion B, 5 domains).",
    "significance": "범주적 분류의 한계(동일 진단 내 이질성, 진단 간 높은 동반이환)를 극복하기 위한 차원적 접근의 대표적 시도이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 크루거",
        "name_en": "Robert Krueger",
        "contribution": "성격 병리의 차원적 모형과 5개 특성 영역(부정적 정동성 등)을 체계화"
      },
      {
        "name_ko": "토머스 위디거",
        "name_en": "Thomas Widiger",
        "contribution": "FFM(5요인 모형)과 성격장애의 관계를 연구하여 차원적 분류의 이론적 근거 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격장애 일반 기준",
        "name_en": "General Personality Disorder Criteria",
        "id": "PERSON_GEN_001"
      },
      {
        "name_ko": "성격 특성 차원",
        "name_en": "Personality Trait Dimensions",
        "id": "PERSON_PTD_025"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "기준 A: 성격 기능 수준",
        "description": "자기(정체성, 자기지향성)와 대인관계(공감, 친밀감)의 손상 정도"
      },
      {
        "name": "기준 B: 병리적 성격 특성",
        "description": "부정적 정동성, 이탈성, 적대성, 탈억제, 정신병질의 5영역"
      }
    ],
    "quiz_hints": {
      "mnemonic": "AMPD의 기준 A(기능 수준) + 기준 B(특성 5영역: 부정적정동, 이탈, 적대, 탈억제, 정신병질)",
      "differential": "기존 모형(범주적: 있다/없다)과 달리 AMPD(차원적: 정도의 차이)로 평가",
      "key_point": "DSM-5 섹션 III에 '추가 연구 필요'로 포함되어 있으며, ICD-11은 이미 차원적 모형 채택",
      "common_mistake": "AMPD가 이미 DSM-5의 공식 진단 체계를 대체했다고 오해 — 아직 '대안 모형' 수준"
    }
  },
  {
    "id": "PERSON_PPD_005",
    "terminology": "편집성 성격장애 (Paranoid Personality Disorder)",
    "terminology_ko": "편집성 성격장애",
    "terminology_en": "Paranoid Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "타인의 동기를 악의적인 것으로 해석하는 광범위한 불신과 의심의 패턴으로, 배우자의 부정 의심, 원한 지속, 충성심 의심, 숨겨진 의미 읽기 등이 특징적이다.",
    "definition_en": "A pervasive pattern of distrust and suspiciousness interpreting others' motives as malevolent, characterized by suspicion of spousal infidelity, grudge-holding, questioning loyalty, and reading hidden meanings.",
    "significance": "대인관계에서의 불신이 자기충족적 예언으로 작용하여 고립을 심화시키는 악순환 기제를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "편집성 성격의 능동적-독립적 대처 스타일을 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "id": "PERSON_CLA_002"
      },
      {
        "name_ko": "피해망상",
        "name_en": "Persecutory Delusion",
        "id": "SCHIZO_PDL_012"
      },
      {
        "name_ko": "조현형 성격장애",
        "name_en": "Schizotypal Personality Disorder",
        "id": "PERSON_STP_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "편집성 = '편집증(paranoia)' 수준의 의심, 그러나 망상 수준은 아님",
      "differential": "망상장애(피해형)는 체계적 망상, 편집성 성격장애는 광범위한 불신·의심 패턴",
      "key_point": "타인의 충성심을 끊임없이 시험하고, 배신의 증거를 찾으며, 원한을 오래 지속함",
      "common_mistake": "조현병의 피해망상과 혼동 — 편집성 성격장애는 현실 검증력이 유지됨"
    }
  },
  {
    "id": "PERSON_SZD_006",
    "terminology": "조현성 성격장애 (Schizoid Personality Disorder)",
    "terminology_ko": "조현성 성격장애",
    "terminology_en": "Schizoid Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "사회적 관계에 대한 욕구가 전반적으로 결여되어 있으며, 감정 표현의 범위가 제한되고, 친밀한 관계를 원하지 않고 혼자 하는 활동을 선호하는 지속적 패턴이다.",
    "definition_en": "A pervasive pattern of detachment from social relationships with a restricted range of emotional expression, preferring solitary activities and lacking desire for close relationships.",
    "significance": "사회적 무관심과 감정적 냉담의 극단적 형태를 보여주며, 내향성의 병리적 수준을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "로널드 페어베언",
        "name_en": "Ronald Fairbairn",
        "contribution": "조현성(schizoid) 성격 구조를 대상관계 이론적 관점에서 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "id": "PERSON_CLA_002"
      },
      {
        "name_ko": "조현형 성격장애",
        "name_en": "Schizotypal Personality Disorder",
        "id": "PERSON_STP_007"
      },
      {
        "name_ko": "회피성 성격장애",
        "name_en": "Avoidant Personality Disorder",
        "id": "PERSON_AVD_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조현'성' = 관계 '무관심' — 사회적 관계를 원하지 않음",
      "differential": "회피성은 관계를 '원하지만 두려워함', 조현성은 관계를 '원하지 않음'",
      "key_point": "감정적 냉담과 사회적 무관심이 핵심이며, 칭찬이나 비판에도 무관심",
      "common_mistake": "회피성 성격장애와 혼동 — 핵심 차이는 관계에 대한 '욕구' 유무"
    }
  },
  {
    "id": "PERSON_STP_007",
    "terminology": "조현형 성격장애 (Schizotypal Personality Disorder)",
    "terminology_ko": "조현형 성격장애",
    "terminology_en": "Schizotypal Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "기이한 사고(마술적 사고, 관계사고), 지각 왜곡, 괴상한 행동과 외모, 그리고 심한 사회적 불편감과 대인관계 결함을 특징으로 하는 성격장애로, 조현병 스펙트럼에 포함된다.",
    "definition_en": "A personality disorder characterized by odd thinking (magical thinking, ideas of reference), perceptual distortions, eccentric behavior and appearance, and severe social discomfort with interpersonal deficits, included in the schizophrenia spectrum.",
    "significance": "조현병 스펙트럼의 경증 표현형으로, 조현병의 유전적 기반과 정신병 발병 위험을 연구하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "래리 시버",
        "name_en": "Larry Siever",
        "contribution": "조현형 성격장애를 조현병 스펙트럼 장애의 일부로 위치시키는 실증적 연구를 수행"
      },
      {
        "name_ko": "폴 메엘",
        "name_en": "Paul Meehl",
        "contribution": "조현형(schizotypy) 개념을 제안하고 조현병 취약성의 연속체적 관점을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "id": "PERSON_CLA_002"
      },
      {
        "name_ko": "조현성 성격장애",
        "name_en": "Schizoid Personality Disorder",
        "id": "PERSON_SZD_006"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      },
      {
        "name_ko": "관계망상",
        "name_en": "Delusion of Reference",
        "id": "SCHIZO_RDL_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조현'형' = 조현병의 '형태(type)'를 닮은 성격 — 기이한 사고+행동+외모",
      "differential": "조현성은 사회적 무관심만, 조현형은 인지·지각 왜곡까지 동반",
      "key_point": "ICD-11에서는 성격장애가 아닌 조현병 스펙트럼 장애로 분류",
      "common_mistake": "조현성(schizoid)과 조현형(schizotypal)을 혼동 — 조현형만 인지/지각 왜곡이 있음"
    }
  },
  {
    "id": "PERSON_SPY_008",
    "terminology": "사이코패시 (Psychopathy)",
    "terminology_ko": "사이코패시",
    "terminology_en": "Psychopathy",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "대인관계에서의 교활함, 과대한 자기가치감, 병리적 거짓말, 감정적 냉담, 공감과 죄책감의 결여, 충동적·무책임한 생활방식을 특징으로 하는 성격 구성개념으로, DSM 공식 진단은 아니다.",
    "definition_en": "A personality construct characterized by interpersonal manipulation, grandiose self-worth, pathological lying, emotional callousness, deficient empathy and guilt, and impulsive/irresponsible lifestyle, not an official DSM diagnosis.",
    "significance": "범죄심리학과 법정심리학의 핵심 개념으로, 폭력 재범 위험 평가에 가장 강력한 예측인자 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "로버트 헤어",
        "name_en": "Robert Hare",
        "contribution": "사이코패시 체크리스트(PCL-R)를 개발하여 사이코패시 평가의 표준 도구로 확립"
      },
      {
        "name_ko": "허비 클레클리",
        "name_en": "Hervey Cleckley",
        "contribution": "'정신적 건강의 가면(The Mask of Sanity)'에서 사이코패시의 16가지 핵심 특성을 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_009"
      },
      {
        "name_ko": "PCL-R",
        "name_en": "PCL-R",
        "id": "PERSON_PCL_015"
      },
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      }
    ],
    "sub_types": [
      {
        "name": "1요인(대인관계/정동)",
        "description": "교활함, 과대성, 냉담, 공감 부족"
      },
      {
        "name": "2요인(생활방식/반사회적)",
        "description": "충동성, 무책임, 행동 문제, 반사회적 행위"
      }
    ],
    "quiz_hints": {
      "mnemonic": "사이코패시 = 공감 없이 조작하는 사람, PCL-R로 측정",
      "differential": "반사회적 성격장애(APD)는 행동 기준 중심, 사이코패시는 성격 특성 중심",
      "key_point": "APD 진단 받은 사람 중 일부만 사이코패시 기준 충족, 사이코패시가 더 좁은 개념",
      "common_mistake": "반사회적 성격장애와 사이코패시를 동일시하는 오류 — APD는 더 넓은 범주"
    }
  },
  {
    "id": "PERSON_APD_009",
    "terminology": "반사회적 성격장애 (Antisocial Personality Disorder)",
    "terminology_ko": "반사회적 성격장애",
    "terminology_en": "Antisocial Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "타인의 권리를 무시하고 침해하는 광범위한 패턴으로, 법규 위반, 속임수, 충동성, 공격성, 무책임함, 양심의 가책 결여가 특징이며, 15세 이전 품행장애의 증거가 필수적이다.",
    "definition_en": "A pervasive pattern of disregard for and violation of the rights of others, featuring law-breaking, deceitfulness, impulsivity, aggressiveness, irresponsibility, and lack of remorse, requiring evidence of conduct disorder before age 15.",
    "significance": "법의학적 맥락에서 가장 중요한 성격장애로, 범죄 재발과 치료 저항성과 관련이 깊다.",
    "key_researchers": [
      {
        "name_ko": "리 로빈스",
        "name_en": "Lee Robins",
        "contribution": "아동기 품행장애가 성인기 반사회적 성격장애로 이어지는 발달 경로를 종단연구로 입증"
      },
      {
        "name_ko": "로버트 헤어",
        "name_en": "Robert Hare",
        "contribution": "반사회적 성격장애와 사이코패시의 관계를 규명하고 감별 기준을 제시"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "사이코패시",
        "name_en": "Psychopathy",
        "id": "PERSON_SPY_008"
      },
      {
        "name_ko": "PCL-R",
        "name_en": "PCL-R",
        "id": "PERSON_PCL_015"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "APD 진단 조건: 18세 이상 + 15세 이전 품행장애 증거 필수",
      "differential": "사이코패시는 성격 특성(공감 부족, 냉담) 중심, APD는 행동(법규 위반, 공격성) 중심",
      "key_point": "18세 이상이어야 진단 가능하며, 15세 이전 품행장애 병력이 반드시 있어야 함",
      "common_mistake": "연쇄살인범=반사회적 성격장애라는 도식적 이해 — 대부분은 범죄자가 아님"
    }
  },
  {
    "id": "PERSON_BPD_010",
    "terminology": "경계선 성격장애 (Borderline Personality Disorder)",
    "terminology_ko": "경계선 성격장애",
    "terminology_en": "Borderline Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "대인관계, 자기상, 정동의 불안정성과 현저한 충동성이 광범위하게 나타나는 패턴으로, 유기불안, 반복적 자해, 만성적 공허감, 부적절한 분노, 일시적 해리 증상이 특징적이다.",
    "definition_en": "A pervasive pattern of instability in interpersonal relationships, self-image, and affect with marked impulsivity, featuring abandonment fears, recurrent self-harm, chronic emptiness, inappropriate anger, and transient dissociative symptoms.",
    "significance": "성격장애 중 가장 많이 연구되고 근거기반 치료(DBT, MBT 등)가 개발된 장애로, 자해·자살 위험이 높아 임상적으로 매우 중요하다.",
    "key_researchers": [
      {
        "name_ko": "오토 컨버그",
        "name_en": "Otto Kernberg",
        "contribution": "경계선 인격 구조(borderline personality organization) 개념과 전이초점치료(TFP) 개발"
      },
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha Linehan",
        "contribution": "변증법적 행동치료(DBT)를 개발하여 경계선 성격장애의 근거기반 치료를 확립"
      },
      {
        "name_ko": "존 건더슨",
        "name_en": "John Gunderson",
        "contribution": "경계선 성격장애의 진단 기준과 임상적 특성을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_006"
      },
      {
        "name_ko": "해리성 정체감 장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_004"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BPD 9기준 키워드: 유기불안, 불안정한관계, 정체감장해, 충동성, 자해, 정동불안정, 공허감, 분노, 해리",
      "differential": "양극성장애의 기분변동은 일~주 단위, BPD의 정동불안정은 시간~일 단위로 빠르게 변화",
      "key_point": "자살시도율 약 75%, 자살사망률 약 10%로 자살 위험이 매우 높은 장애",
      "common_mistake": "BPD의 감정 변화를 양극성장애와 혼동 — BPD는 대인관계 맥락에서 급변, 양극성은 자발적 순환"
    }
  },
  {
    "id": "PERSON_HPD_011",
    "terminology": "히스트리오닉 성격장애 (Histrionic Personality Disorder)",
    "terminology_ko": "히스트리오닉 성격장애",
    "terminology_en": "Histrionic Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "과도한 감정 표현과 주의를 끌려는 광범위한 패턴으로, 자신이 관심의 중심이 되지 못하면 불편해하며, 피상적이고 빠르게 변하는 감정, 유혹적 행동, 인상주의적 언어가 특징적이다.",
    "definition_en": "A pervasive pattern of excessive emotionality and attention-seeking, featuring discomfort when not the center of attention, superficial and rapidly shifting emotions, seductive behavior, and impressionistic speech.",
    "significance": "과도한 감정표현과 관계의 피상성이 대인관계 문제를 야기하며, 신체화 증상과의 관련성이 역사적으로 중요하다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "히스트리오닉 성격의 능동적-의존적 패턴을 이론적으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "자기애성 성격장애",
        "name_en": "Narcissistic Personality Disorder",
        "id": "PERSON_NPD_012"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "히스트리오닉 = '무대 위의 배우' — 항상 관심의 중심에 서고 싶어함",
      "differential": "자기애성은 '찬사·존경' 욕구, 히스트리오닉은 '관심·주목' 욕구가 핵심",
      "key_point": "감정이 진정성 있어 보이지만 실제로는 피상적이고 빠르게 변화함",
      "common_mistake": "히스트리오닉 성격장애를 외향적 성격의 극단으로만 보는 오류 — 기능 손상이 핵심"
    }
  },
  {
    "id": "PERSON_NPD_012",
    "terminology": "자기애성 성격장애 (Narcissistic Personality Disorder)",
    "terminology_ko": "자기애성 성격장애",
    "terminology_en": "Narcissistic Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "과대성(공상 또는 행동), 찬사에 대한 욕구, 공감의 결여가 광범위하게 나타나는 패턴으로, 특별한 대우 기대, 대인관계 착취, 특권의식, 질투가 특징적이다.",
    "definition_en": "A pervasive pattern of grandiosity (in fantasy or behavior), need for admiration, and lack of empathy, featuring expectations of special treatment, interpersonal exploitation, entitlement, and envy.",
    "significance": "과대적 자기(grandiose self)와 취약한 자기(vulnerable self)의 이중 구조를 통해 자기(self) 심리학의 핵심 개념을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "하인즈 코헛",
        "name_en": "Heinz Kohut",
        "contribution": "자기심리학(self psychology)을 창시하여 자기애적 성격의 발달과 치료에 대한 이해를 혁신"
      },
      {
        "name_ko": "오토 컨버그",
        "name_en": "Otto Kernberg",
        "contribution": "자기애적 성격의 대상관계 이론적 이해와 전이초점치료(TFP)를 통한 치료 접근 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "자기애적 취약성/과대성",
        "name_en": "Narcissistic Vulnerability/Grandiosity",
        "id": "PERSON_NVG_013"
      },
      {
        "name_ko": "히스트리오닉 성격장애",
        "name_en": "Histrionic Personality Disorder",
        "id": "PERSON_HPD_011"
      },
      {
        "name_ko": "과대망상",
        "name_en": "Grandiose Delusion",
        "id": "SCHIZO_GDL_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "나르시시즘의 3요소: 과대성(Grandiosity), 찬사욕구(Admiration need), 공감결여(Empathy deficit) — GAE",
      "differential": "과대망상(조현병)은 현실과 괴리된 확고한 믿음, 자기애성은 과장된 자기평가 수준",
      "key_point": "DSM의 과대적(overt) 자기애만 기술하나, 취약적(covert) 자기애도 임상적으로 중요",
      "common_mistake": "자기애성 성격장애를 단순히 '자만심이 강한 사람'으로 이해하는 것"
    }
  },
  {
    "id": "PERSON_NVG_013",
    "terminology": "자기애적 취약성/과대성 (Narcissistic Vulnerability/Grandiosity)",
    "terminology_ko": "자기애적 취약성/과대성",
    "terminology_en": "Narcissistic Vulnerability/Grandiosity",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "자기애의 두 가지 핵심 차원으로, 과대적 자기애(grandiose narcissism)는 자신감·착취적 태도가 두드러지고, 취약적 자기애(vulnerable narcissism)는 수치심·과민성·방어적 태도가 두드러진다.",
    "definition_en": "Two core dimensions of narcissism: grandiose narcissism features confidence and exploitativeness, while vulnerable narcissism features shame, hypersensitivity, and defensiveness.",
    "significance": "DSM의 단일한 자기애 모형을 넘어 자기애의 이질성을 보여주며, 임상적 다양성과 치료 접근의 차별화를 위한 중요한 구분이다.",
    "key_researchers": [
      {
        "name_ko": "아론 핀커스",
        "name_en": "Aaron Pincus",
        "contribution": "과대적-취약적 자기애의 이중 구조를 실증적으로 연구하고 병리적 자기애 척도(PNI) 개발"
      },
      {
        "name_ko": "하인즈 코헛",
        "name_en": "Heinz Kohut",
        "contribution": "자기애적 취약성의 발달적 기원(자기대상 실패)을 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기애성 성격장애",
        "name_en": "Narcissistic Personality Disorder",
        "id": "PERSON_NPD_012"
      },
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      }
    ],
    "sub_types": [
      {
        "name": "과대적 자기애(Grandiose)",
        "description": "착취적, 자신감, 주의 추구, 특권의식이 두드러짐"
      },
      {
        "name": "취약적 자기애(Vulnerable)",
        "description": "수치심, 과민성, 회피, 방어적 과대성이 두드러짐"
      }
    ],
    "quiz_hints": {
      "mnemonic": "과대적 = '겉으로 강한' 자기애, 취약적 = '속으로 약한' 자기애",
      "differential": "과대적 자기애는 외현적(overt), 취약적 자기애는 내현적(covert)으로도 불림",
      "key_point": "같은 사람이 상황에 따라 과대적↔취약적 상태를 오가는 진동(oscillation)이 가능",
      "common_mistake": "DSM이 과대적 특성만 기술하므로 취약적 자기애가 존재하지 않는다고 오해"
    }
  },
  {
    "id": "PERSON_EMU_014",
    "terminology": "불안정한 대인관계 (Unstable Interpersonal Relationships)",
    "terminology_ko": "불안정한 대인관계",
    "terminology_en": "Unstable Interpersonal Relationships",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "이상화(idealization)와 평가절하(devaluation) 사이를 극단적으로 오가는 불안정한 대인관계 패턴으로, 경계선 성격장애의 핵심 특징이며 분열(splitting) 방어기제와 관련된다.",
    "definition_en": "An unstable interpersonal pattern marked by extreme oscillation between idealization and devaluation, a core feature of borderline personality disorder related to the splitting defense mechanism.",
    "significance": "이상화-평가절하의 극단적 전환은 치료 관계에서도 나타나며, 치료자의 역전이 관리에 핵심적 과제가 된다.",
    "key_researchers": [
      {
        "name_ko": "오토 컨버그",
        "name_en": "Otto Kernberg",
        "contribution": "분열(splitting)을 경계선 인격 구조의 핵심 방어기제로 규정하고 대인관계 불안정성을 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      },
      {
        "name_ko": "스키마 치료",
        "name_en": "Schema Therapy",
        "id": "PERSON_SCT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이상화↔평가절하 = '완벽한 사람'↔'최악의 사람', 중간이 없음",
      "differential": "의존성 성격장애의 관계 불안정은 '매달림', 경계선은 '이상화-평가절하 진동'",
      "key_point": "분열(splitting) 방어기제가 근본 기제 — 대상을 전적으로 좋거나 전적으로 나쁘게 봄",
      "common_mistake": "단순한 '관계 갈등'과 혼동 — 경계선의 불안정성은 극단적이고 빠른 전환이 특징"
    }
  },
  {
    "id": "PERSON_PCL_015",
    "terminology": "PCL-R (사이코패시 체크리스트 수정판)",
    "terminology_ko": "PCL-R",
    "terminology_en": "Psychopathy Checklist-Revised",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "반구조화 면접과 기록 검토를 통해 사이코패시를 평가하는 20항목 임상 평가 도구로, 각 항목을 0~2점으로 평정하며, 총점 30점(40점 만점) 이상을 사이코패시 기준으로 사용한다.",
    "definition_en": "A 20-item clinical rating instrument assessing psychopathy through semi-structured interview and file review, with each item rated 0-2 and a total score of 30 (out of 40) used as the psychopathy threshold.",
    "significance": "사이코패시 연구와 법의학적 위험 평가의 골드 스탠다드 도구로, 폭력 재범 예측에 가장 높은 타당도를 보인다.",
    "key_researchers": [
      {
        "name_ko": "로버트 헤어",
        "name_en": "Robert Hare",
        "contribution": "PCL 및 PCL-R을 개발하여 사이코패시 측정의 표준 도구를 확립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사이코패시",
        "name_en": "Psychopathy",
        "id": "PERSON_SPY_008"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_009"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      }
    ],
    "sub_types": [
      {
        "name": "요인 1: 대인관계/정동",
        "description": "교활함, 과대한 자기가치감, 피상적 매력, 공감 결여"
      },
      {
        "name": "요인 2: 생활방식/반사회적",
        "description": "충동성, 무책임, 기생적 생활, 초기 행동 문제"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PCL-R = Psychopathy Checklist-Revised, 20항목, 0~2점, 총 40점 만점",
      "differential": "MMPI 같은 자기보고식과 달리 PCL-R은 면접+기록검토 기반 임상가 평정 도구",
      "key_point": "미국 기준 30점(유럽은 25점)이 사이코패시 절단점으로 사용됨",
      "common_mistake": "자기보고식 검사로 오해 — PCL-R은 반드시 훈련된 전문가의 면접 평정 필요"
    }
  },
  {
    "id": "PERSON_IMP_016",
    "terminology": "충동성 (Impulsivity)",
    "terminology_ko": "충동성",
    "terminology_en": "Impulsivity",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "행동의 결과를 충분히 고려하지 않고 즉각적으로 행동하는 경향으로, 경계선 성격장애에서 자해, 물질 남용, 과식, 무모한 운전, 충동 소비 등 다양한 형태로 나타난다.",
    "definition_en": "A tendency to act immediately without adequate consideration of consequences, manifesting in borderline personality disorder as self-harm, substance abuse, binge eating, reckless driving, and impulsive spending.",
    "significance": "경계선 성격장애와 반사회적 성격장애를 관통하는 범진단적 특성으로, 세로토닌 기능 저하와 전두엽 억제 기능 결함과 관련된다.",
    "key_researchers": [
      {
        "name_ko": "어니스트 바렛",
        "name_en": "Ernest Barratt",
        "contribution": "충동성의 다차원적 구조를 제안하고 바렛 충동성 척도(BIS)를 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_009"
      },
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_003"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      }
    ],
    "sub_types": [
      {
        "name": "운동 충동성",
        "description": "생각 없이 행동하는 경향"
      },
      {
        "name": "주의 충동성",
        "description": "인지적 불안정성과 주의 집중 곤란"
      },
      {
        "name": "비계획 충동성",
        "description": "미래를 계획하지 못하는 경향"
      }
    ],
    "quiz_hints": {
      "mnemonic": "충동성 = '먼저 행동, 나중에 생각' (Act first, think later)",
      "differential": "조증의 충동성은 기분 고양과 동반, 성격장애의 충동성은 기분과 독립적으로 지속",
      "key_point": "세로토닌 기능 저하 및 전전두엽 억제 기능 결함과 관련된 생물학적 기반이 있음",
      "common_mistake": "충동성을 단순히 '성격'의 문제로만 보는 것 — 신경생물학적 기반이 있는 특성"
    }
  },
  {
    "id": "PERSON_SHR_017",
    "terminology": "자해 행동 (Self-Harm Behavior)",
    "terminology_ko": "자해 행동",
    "terminology_en": "Self-Harm Behavior",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "자살 의도 없이 고의적으로 자신의 신체에 손상을 입히는 행동으로, 손목 긋기, 화상, 타박 등이 포함되며, 경계선 성격장애에서 감정 조절의 수단으로 자주 나타난다.",
    "definition_en": "Deliberate self-inflicted bodily damage without suicidal intent, including cutting, burning, and bruising, frequently occurring in borderline personality disorder as a means of emotional regulation.",
    "significance": "비자살적 자해(NSSI)는 감정 조절의 부적응적 전략으로 이해되며, 자살 위험의 예측인자이기도 하다.",
    "key_researchers": [
      {
        "name_ko": "매슈 녹",
        "name_en": "Matthew Nock",
        "contribution": "비자살적 자해(NSSI)의 기능적 모형(자동강화, 사회강화)을 체계화"
      },
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha Linehan",
        "contribution": "자해를 감정 조절 부전의 표현으로 개념화하고 DBT를 통한 치료 접근 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "자살",
        "name_en": "Suicide",
        "id": "MOOD_SUI_006"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      }
    ],
    "sub_types": [
      {
        "name": "자동강화(intrapersonal)",
        "description": "불쾌한 감정을 감소시키기 위한 자해"
      },
      {
        "name": "사회강화(interpersonal)",
        "description": "타인의 관심·도움을 얻기 위한 자해"
      }
    ],
    "quiz_hints": {
      "mnemonic": "NSSI(Non-Suicidal Self-Injury) = 자살 의도 '없는' 자기 손상",
      "differential": "자살시도는 죽으려는 의도, NSSI는 감정 조절·고통 경감이 목적",
      "key_point": "단기적으로 부정적 감정을 감소시키는 기능(부적 강화)이 있어 반복됨",
      "common_mistake": "모든 자해를 자살시도로 간주하거나, 반대로 '관심 끌기'로 경시하는 오류"
    }
  },
  {
    "id": "PERSON_CLC_018",
    "terminology": "C군 성격장애 (Cluster C Personality Disorders)",
    "terminology_ko": "C군 성격장애",
    "terminology_en": "Cluster C Personality Disorders",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "불안하고 두려운(anxious/fearful) 행동 양상을 특징으로 하는 성격장애 군집으로, 회피성, 의존성, 강박성 성격장애가 포함되며, 불안장애와의 동반이환율이 높다.",
    "definition_en": "A cluster of personality disorders characterized by anxious or fearful behaviors, including avoidant, dependent, and obsessive-compulsive personality disorders, with high comorbidity rates with anxiety disorders.",
    "significance": "불안이 핵심 정서로 작용하며, 불안장애와의 경계가 모호하여 범주적 분류의 한계를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "C군 성격장애의 회피적·순응적·강박적 대처 스타일을 이론적으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "A군 성격장애",
        "name_en": "Cluster A Personality Disorders",
        "id": "PERSON_CLA_002"
      },
      {
        "name_ko": "B군 성격장애",
        "name_en": "Cluster B Personality Disorders",
        "id": "PERSON_CLB_003"
      },
      {
        "name_ko": "회피성 성격장애",
        "name_en": "Avoidant Personality Disorder",
        "id": "PERSON_AVD_019"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [
      {
        "name": "회피성 성격장애",
        "description": "사회적 억제, 부적절감, 부정적 평가에 대한 과민"
      },
      {
        "name": "의존성 성격장애",
        "description": "돌봄 받으려는 과도한 욕구에서 비롯된 복종적 행동"
      },
      {
        "name": "강박성 성격장애",
        "description": "질서, 완벽주의, 통제에 대한 과도한 집착"
      }
    ],
    "quiz_hints": {
      "mnemonic": "C군 = 'Cowardly'(두려운) — 회피(Avoidant), 의존(Dependent), 강박(Obsessive-Compulsive)",
      "differential": "A군(기이), B군(극적), C군(불안·두려움)으로 구분",
      "key_point": "C군은 불안장애와 가장 많이 동반이환되며, 특히 회피성-사회불안장애 관계가 밀접",
      "common_mistake": "C군 성격장애를 단순한 불안장애로 오해 — 성격의 지속적 패턴이라는 점이 다름"
    }
  },
  {
    "id": "PERSON_AVD_019",
    "terminology": "회피성 성격장애 (Avoidant Personality Disorder)",
    "terminology_ko": "회피성 성격장애",
    "terminology_en": "Avoidant Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "사회적 억제, 부적절감, 부정적 평가에 대한 과민성의 광범위한 패턴으로, 거부당할 확신이 없으면 관계를 맺지 않으려 하며, 비판이나 수치에 대한 두려움으로 새로운 활동을 회피한다.",
    "definition_en": "A pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation, avoiding relationships unless certain of acceptance and shunning new activities due to fear of criticism or shame.",
    "significance": "사회불안장애와의 연속선 상에 위치한다는 논쟁이 있으며, 성격장애와 임상 장애의 경계를 연구하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "회피성 성격장애를 1969년 최초로 기술하고 DSM-III 편입에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "C군 성격장애",
        "name_en": "Cluster C Personality Disorders",
        "id": "PERSON_CLC_018"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SAD_003"
      },
      {
        "name_ko": "조현성 성격장애",
        "name_en": "Schizoid Personality Disorder",
        "id": "PERSON_SZD_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "회피성 = 관계를 '원하지만 두려워서 피하는' 성격",
      "differential": "조현성은 관계를 '원하지 않음', 회피성은 관계를 '원하지만 두려워함'",
      "key_point": "사회불안장애의 심한 형태인지 별개 장애인지 논쟁이 지속 중",
      "common_mistake": "사회불안장애와 완전히 동일시하는 오류 — 회피성은 자기상(부적절감)이 더 핵심"
    }
  },
  {
    "id": "PERSON_DPD_020",
    "terminology": "의존성 성격장애 (Dependent Personality Disorder)",
    "terminology_ko": "의존성 성격장애",
    "terminology_en": "Dependent Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "돌봄을 받으려는 과도한 욕구에서 비롯되는 복종적이고 매달리는 행동의 광범위한 패턴으로, 의사결정을 타인에게 위임하고, 불일치 표현을 못하며, 분리불안이 현저하다.",
    "definition_en": "A pervasive pattern of submissive and clinging behavior stemming from an excessive need to be taken care of, featuring delegation of decisions, inability to express disagreement, and marked separation anxiety.",
    "significance": "건강하지 않은 대인관계 의존의 극단적 형태를 보여주며, 학대적 관계에서 벗어나지 못하는 기제를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "로버트 보넬리",
        "name_en": "Robert Bornstein",
        "contribution": "의존성 성격의 인지·동기적 구성요소를 연구하고 건강한 의존과 병리적 의존의 구분을 제안"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "C군 성격장애",
        "name_en": "Cluster C Personality Disorders",
        "id": "PERSON_CLC_018"
      },
      {
        "name_ko": "회피성 성격장애",
        "name_en": "Avoidant Personality Disorder",
        "id": "PERSON_AVD_019"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "의존성 = '혼자서는 아무것도 못 하는' 느낌, 타인에게 매달림",
      "differential": "경계선의 유기불안은 분노·자해와 함께, 의존성의 분리불안은 복종·순응과 함께 나타남",
      "key_point": "관계가 끝나면 즉시 다른 보호자적 관계를 찾는 것이 특징적",
      "common_mistake": "의존적 성격을 문화적 요인(집단주의 문화)과 구분하지 못하는 오류"
    }
  },
  {
    "id": "PERSON_OCP_021",
    "terminology": "강박성 성격장애 (Obsessive-Compulsive Personality Disorder)",
    "terminology_ko": "강박성 성격장애",
    "terminology_en": "Obsessive-Compulsive Personality Disorder",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "질서, 완벽주의, 정신적·대인관계적 통제에 대한 과도한 집착의 광범위한 패턴으로, 유연성·개방성·효율성이 희생되며, 세부사항에 몰두하고 과업 완성에 어려움을 겪는다.",
    "definition_en": "A pervasive pattern of preoccupation with orderliness, perfectionism, and mental/interpersonal control at the expense of flexibility, openness, and efficiency, with excessive focus on details and difficulty completing tasks.",
    "significance": "완벽주의의 병리적 형태를 보여주며, 직업 기능은 유지되지만 대인관계와 삶의 질이 심각하게 저하되는 역설을 나타낸다.",
    "key_researchers": [
      {
        "name_ko": "시어도어 밀런",
        "name_en": "Theodore Millon",
        "contribution": "강박성 성격의 순응적-통제적 대처 스타일을 이론적으로 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "C군 성격장애",
        "name_en": "Cluster C Personality Disorders",
        "id": "PERSON_CLC_018"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "회피성 성격장애",
        "name_en": "Avoidant Personality Disorder",
        "id": "PERSON_AVD_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "OCPD vs OCD: OCPD는 '성격', OCD는 '불안장애' — 전혀 다른 장애",
      "differential": "OCD는 침투적 강박사고+의례행동(자아이질적), OCPD는 완벽주의+통제(자아동조적)",
      "key_point": "OCPD는 자기 성격이 문제라고 인식하지 못하는 자아동조적(ego-syntonic) 특성",
      "common_mistake": "강박성 성격장애(OCPD)와 강박장애(OCD)를 같은 것으로 혼동하는 오류"
    }
  },
  {
    "id": "PERSON_DBT_022",
    "terminology": "변증법적 행동치료 (Dialectical Behavior Therapy, DBT)",
    "terminology_ko": "변증법적 행동치료",
    "terminology_en": "Dialectical Behavior Therapy",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "경계선 성격장애를 위해 개발된 근거기반 심리치료로, 수용(acceptance)과 변화(change)의 변증법적 균형을 핵심으로 하며, 마음챙김, 감정조절, 대인관계 효율성, 고통감내의 4가지 기술 모듈을 포함한다.",
    "definition_en": "An evidence-based psychotherapy developed for borderline personality disorder, centered on the dialectical balance of acceptance and change, incorporating four skill modules: mindfulness, emotion regulation, interpersonal effectiveness, and distress tolerance.",
    "significance": "경계선 성격장애에 대한 최초의 근거기반 치료로, 자해·자살시도 감소에 강력한 효과가 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "마샤 리네한",
        "name_en": "Marsha Linehan",
        "contribution": "변증법적 행동치료(DBT)를 개발하고 경계선 성격장애 치료의 효과를 RCT로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "자해 행동",
        "name_en": "Self-Harm Behavior",
        "id": "PERSON_SHR_017"
      },
      {
        "name_ko": "스키마 치료",
        "name_en": "Schema Therapy",
        "id": "PERSON_SCT_023"
      },
      {
        "name_ko": "멘탈라이제이션 기반 치료",
        "name_en": "Mentalization-Based Treatment",
        "id": "PERSON_MBT_024"
      }
    ],
    "sub_types": [
      {
        "name": "마음챙김(Mindfulness)",
        "description": "현재 순간에 비판단적으로 주의를 기울이는 기술"
      },
      {
        "name": "감정조절(Emotion Regulation)",
        "description": "감정을 인식하고 적응적으로 조절하는 기술"
      },
      {
        "name": "대인관계 효율성(Interpersonal Effectiveness)",
        "description": "관계에서 자기주장하고 존중받는 기술"
      },
      {
        "name": "고통감내(Distress Tolerance)",
        "description": "위기 순간에 행동하지 않고 버티는 기술"
      }
    ],
    "quiz_hints": {
      "mnemonic": "DBT의 4모듈: 마(마음챙김)+감(감정조절)+대(대인관계)+고(고통감내)",
      "differential": "CBT는 인지 재구조화 중심, DBT는 수용(acceptance)과 변화의 균형이 핵심",
      "key_point": "개인치료 + 집단기술훈련 + 전화코칭 + 치료자 자문팀의 4가지 요소로 구성",
      "common_mistake": "DBT를 단순히 CBT의 변형으로 오해 — 변증법적 철학과 수용 강조가 핵심 차이"
    }
  },
  {
    "id": "PERSON_SCT_023",
    "terminology": "스키마 치료 (Schema Therapy)",
    "terminology_ko": "스키마 치료",
    "terminology_en": "Schema Therapy",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "초기 부적응 도식(EMS)을 수정하는 것을 목표로 하는 통합적 치료 접근으로, 인지행동치료, 애착이론, 게슈탈트 기법, 정신역동적 요소를 결합하여 성격장애를 치료한다.",
    "definition_en": "An integrative therapeutic approach aimed at modifying early maladaptive schemas (EMS), combining cognitive-behavioral therapy, attachment theory, gestalt techniques, and psychodynamic elements to treat personality disorders.",
    "significance": "경계선 성격장애에 대한 효과가 RCT로 입증되었으며, 어린 시절 경험과 성인기 성격병리의 연결을 체계적으로 다룬다.",
    "key_researchers": [
      {
        "name_ko": "제프리 영",
        "name_en": "Jeffrey Young",
        "contribution": "스키마 치료를 개발하고 18개 초기 부적응 도식(EMS)과 도식 모드(schema modes) 개념을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "초기부적응도식",
        "name_en": "Early Maladaptive Schemas",
        "id": "PERSON_EMS_026"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "도식/핵심신념",
        "name_en": "Schema/Core Belief",
        "id": "PERSON_SCB_027"
      }
    ],
    "sub_types": [
      {
        "name": "인지적 기법",
        "description": "도식에 도전하고 증거를 검토하는 인지 재구조화"
      },
      {
        "name": "경험적 기법",
        "description": "의자기법, 심상 재각본화 등 정서적 체험 기법"
      },
      {
        "name": "행동 패턴 끊기",
        "description": "도식 유지 행동을 변화시키는 행동 실험"
      },
      {
        "name": "치료적 관계",
        "description": "제한적 재양육(limited reparenting)을 통한 교정적 정서 경험"
      }
    ],
    "quiz_hints": {
      "mnemonic": "스키마 치료의 3기법: 인지(Cognitive) + 경험(Experiential) + 행동(Behavioral) + 관계(Relationship)",
      "differential": "CBT가 현재의 자동적 사고에 초점이라면, 스키마 치료는 어린 시절 형성된 깊은 도식에 초점",
      "key_point": "제한적 재양육(limited reparenting) — 치료자가 환자의 충족되지 못한 핵심 욕구를 부분적으로 충족",
      "common_mistake": "스키마 치료를 단순 CBT로 이해하는 오류 — 정서적·관계적 요소가 핵심적"
    }
  },
  {
    "id": "PERSON_MBT_024",
    "terminology": "멘탈라이제이션 기반 치료 (Mentalization-Based Treatment, MBT)",
    "terminology_ko": "멘탈라이제이션 기반 치료",
    "terminology_en": "Mentalization-Based Treatment",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "자신과 타인의 행동을 정신상태(생각, 감정, 욕구, 의도)의 관점에서 이해하는 능력(멘탈라이제이션)을 향상시키는 것을 목표로 하는 정신역동적 치료로, 경계선 성격장애에 효과적이다.",
    "definition_en": "A psychodynamic treatment aimed at enhancing the ability to understand one's own and others' behavior in terms of mental states (thoughts, feelings, desires, intentions)—mentalization—effective for borderline personality disorder.",
    "significance": "애착이론과 정신분석의 통합적 관점에서 경계선 성격장애의 핵심 결함(멘탈라이제이션 실패)을 직접 다루는 치료 접근이다.",
    "key_researchers": [
      {
        "name_ko": "피터 포나기",
        "name_en": "Peter Fonagy",
        "contribution": "멘탈라이제이션 개념을 정립하고 MBT를 개발, 경계선 성격장애 치료 효과를 RCT로 입증"
      },
      {
        "name_ko": "앤서니 베이트먼",
        "name_en": "Anthony Bateman",
        "contribution": "포나기와 함께 MBT의 임상 매뉴얼을 개발하고 치료 효과 연구를 수행"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      },
      {
        "name_ko": "불안정한 대인관계",
        "name_en": "Unstable Interpersonal Relationships",
        "id": "PERSON_EMU_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "멘탈라이제이션 = '마음 읽기(mind-reading)' 능력 — 자신과 타인의 마음 상태 이해",
      "differential": "DBT는 기술 훈련 중심, MBT는 치료 관계 내에서 멘탈라이제이션 향상 중심",
      "key_point": "경계선 환자의 정서적 각성이 높아지면 멘탈라이제이션 능력이 급격히 저하됨",
      "common_mistake": "멘탈라이제이션을 단순한 공감과 동일시 — 공감보다 넓은 개념(자기 이해 포함)"
    }
  },
  {
    "id": "PERSON_PTD_025",
    "terminology": "성격 특성 차원 (Personality Trait Dimensions)",
    "terminology_ko": "성격 특성 차원",
    "terminology_en": "Personality Trait Dimensions",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "성격을 몇 가지 기본 차원(특성)의 연속체적 조합으로 이해하는 접근으로, 5요인 모형(FFM: 신경증적 경향, 외향성, 개방성, 우호성, 성실성)이 가장 널리 사용되며, AMPD의 기초가 된다.",
    "definition_en": "An approach understanding personality as a combination of continuous basic dimensions (traits), with the Five-Factor Model (FFM: neuroticism, extraversion, openness, agreeableness, conscientiousness) being most widely used and foundational to the AMPD.",
    "significance": "범주적 진단의 한계를 극복하고 정상-병리 연속체를 설명할 수 있는 차원적 성격 모형의 기초이다.",
    "key_researchers": [
      {
        "name_ko": "폴 코스타",
        "name_en": "Paul Costa",
        "contribution": "로버트 매크레이와 함께 5요인 모형(FFM)을 정교화하고 NEO-PI-R을 개발"
      },
      {
        "name_ko": "로버트 매크레이",
        "name_en": "Robert McCrae",
        "contribution": "코스타와 함께 5요인 모형의 보편성과 안정성을 다문화 연구로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대안적 DSM-5 모형",
        "name_en": "Alternative DSM-5 Model",
        "id": "PERSON_AMP_004"
      },
      {
        "name_ko": "성격의 차원 모형",
        "name_en": "Dimensional Model of Personality",
        "id": "PERSON_DIM_030"
      },
      {
        "name_ko": "기질과 성격",
        "name_en": "Temperament and Character",
        "id": "PERSON_TAC_029"
      }
    ],
    "sub_types": [
      {
        "name": "신경증적 경향(Neuroticism)",
        "description": "부정적 정서 경험 경향성"
      },
      {
        "name": "외향성(Extraversion)",
        "description": "사회적 활동성과 긍정 정서 경향"
      },
      {
        "name": "개방성(Openness)",
        "description": "새로운 경험과 사고에 대한 수용성"
      },
      {
        "name": "우호성(Agreeableness)",
        "description": "타인에 대한 협조성과 신뢰"
      },
      {
        "name": "성실성(Conscientiousness)",
        "description": "조직화, 목표지향성, 자기통제"
      }
    ],
    "quiz_hints": {
      "mnemonic": "FFM 5요인: OCEAN = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
      "differential": "범주적 모형(있다/없다)과 달리 차원적 모형은 정도의 차이(연속체)로 평가",
      "key_point": "성격장애는 FFM 5요인의 극단적 변이로 설명 가능 (예: BPD = 높은 신경증+낮은 우호성)",
      "common_mistake": "5요인이 성격장애를 완전히 설명한다고 오해 — 상호작용과 기능 수준도 고려 필요"
    }
  },
  {
    "id": "PERSON_EMS_026",
    "terminology": "초기부적응도식 (Early Maladaptive Schemas, EMS)",
    "terminology_ko": "초기부적응도식",
    "terminology_en": "Early Maladaptive Schemas",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "어린 시절 핵심 정서 욕구가 충족되지 못한 경험에서 형성된 자기와 세상에 대한 부적응적 인지·정서적 패턴으로, 5개 영역, 18개 도식으로 구성되며 성인기 성격병리의 기반이 된다.",
    "definition_en": "Maladaptive cognitive-emotional patterns about self and world formed from unmet core emotional needs in childhood, organized into 5 domains and 18 schemas, underlying adult personality pathology.",
    "significance": "어린 시절 경험과 성인기 성격장애를 연결하는 핵심 구성개념으로, 스키마 치료의 이론적 기초이다.",
    "key_researchers": [
      {
        "name_ko": "제프리 영",
        "name_en": "Jeffrey Young",
        "contribution": "18개 초기 부적응 도식과 5개 영역(단절/거부, 자율성 손상, 한계 손상, 타인지향, 과잉경계)을 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "스키마 치료",
        "name_en": "Schema Therapy",
        "id": "PERSON_SCT_023"
      },
      {
        "name_ko": "도식/핵심신념",
        "name_en": "Schema/Core Belief",
        "id": "PERSON_SCB_027"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      }
    ],
    "sub_types": [
      {
        "name": "단절/거부 영역",
        "description": "유기, 불신/학대, 정서적 결핍, 결함/수치심, 사회적 고립 도식"
      },
      {
        "name": "자율성/수행 손상 영역",
        "description": "의존/무능, 취약성, 융합/미발달된 자기, 실패 도식"
      },
      {
        "name": "한계 손상 영역",
        "description": "특권의식/과대성, 부족한 자기통제 도식"
      },
      {
        "name": "타인지향 영역",
        "description": "복종, 자기희생, 인정추구 도식"
      },
      {
        "name": "과잉경계/억제 영역",
        "description": "부정/비관, 감정억제, 엄격한 기준, 처벌 도식"
      }
    ],
    "quiz_hints": {
      "mnemonic": "EMS 5영역: 단거(단절/거부), 자손(자율성 손상), 한손(한계 손상), 타지(타인지향), 과억(과잉경계)",
      "differential": "자동적 사고(표층)와 달리 초기부적응도식은 가장 깊은 수준의 인지 구조(심층)",
      "key_point": "Young의 YSQ(Young Schema Questionnaire)로 측정하며, 성격장애 환자에서 특정 도식이 활성화됨",
      "common_mistake": "도식을 단순한 '생각'으로 오해 — 인지+정서+신체감각+기억이 결합된 복합 구조"
    }
  },
  {
    "id": "PERSON_SCB_027",
    "terminology": "도식/핵심신념 (Schema/Core Belief)",
    "terminology_ko": "도식/핵심신념",
    "terminology_en": "Schema/Core Belief",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "자기, 타인, 세상에 대한 가장 근본적이고 깊은 수준의 인지적 구조로, 정보 처리와 해석을 안내하며, 성격장애에서는 부적응적 도식이 경직되고 자기영속적으로 작용한다.",
    "definition_en": "The most fundamental and deep-level cognitive structures about self, others, and the world that guide information processing and interpretation, operating as rigid and self-perpetuating maladaptive schemas in personality disorders.",
    "significance": "인지치료와 스키마 치료에서 치료의 궁극적 표적이 되는 인지 구조로, 성격장애의 지속성을 설명하는 핵심 개념이다.",
    "key_researchers": [
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "핵심신념(core belief) 개념을 인지치료 이론의 중심에 배치하고 성격장애의 인지적 이해를 제안"
      },
      {
        "name_ko": "제프리 영",
        "name_en": "Jeffrey Young",
        "contribution": "벡의 핵심신념 개념을 확장하여 18개 초기부적응도식(EMS)으로 체계화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "초기부적응도식",
        "name_en": "Early Maladaptive Schemas",
        "id": "PERSON_EMS_026"
      },
      {
        "name_ko": "스키마 치료",
        "name_en": "Schema Therapy",
        "id": "PERSON_SCT_023"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      }
    ],
    "sub_types": [
      {
        "name": "자기에 대한 핵심신념",
        "description": "예: '나는 결함이 있다', '나는 무능하다'"
      },
      {
        "name": "타인에 대한 핵심신념",
        "description": "예: '타인은 위험하다', '타인은 나를 버릴 것이다'"
      },
      {
        "name": "세상에 대한 핵심신념",
        "description": "예: '세상은 위험하다', '세상은 불공평하다'"
      }
    ],
    "quiz_hints": {
      "mnemonic": "인지의 3수준: 자동적 사고(표층) → 중간신념(규칙/가정) → 핵심신념/도식(심층)",
      "differential": "자동적 사고는 상황적이고 변화 가능, 핵심신념/도식은 안정적이고 변화 저항적",
      "key_point": "성격장애의 핵심신념은 '자아동조적'이어서 환자 자신이 문제로 인식하기 어려움",
      "common_mistake": "핵심신념을 '사실'로 취급하는 오류 — 초기 경험에서 형성된 '해석 틀'이지 객관적 사실이 아님"
    }
  },
  {
    "id": "PERSON_CEF_028",
    "terminology": "만성적 공허감 (Chronic Emptiness)",
    "terminology_ko": "만성적 공허감",
    "terminology_en": "Chronic Emptiness",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "지속적이고 만연한 내적 공허함, 무의미감, 존재의 텅 빈 느낌으로, 경계선 성격장애의 핵심 증상 중 하나이며, 자극추구 행동이나 자해의 동기가 되기도 한다.",
    "definition_en": "A persistent and pervasive sense of inner emptiness, meaninglessness, and existential void, a core symptom of borderline personality disorder that may motivate stimulus-seeking behavior or self-harm.",
    "significance": "정동 불안정이나 충동성보다 안정적으로 지속되는 특성으로, 경계선 성격장애의 가장 본질적인 경험으로 간주되기도 한다.",
    "key_researchers": [
      {
        "name_ko": "존 건더슨",
        "name_en": "John Gunderson",
        "contribution": "만성적 공허감을 경계선 성격장애의 핵심 특성으로 규정하고 진단 기준에 포함시킴"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "자해 행동",
        "name_en": "Self-Harm Behavior",
        "id": "PERSON_SHR_017"
      },
      {
        "name_ko": "충동성",
        "name_en": "Impulsivity",
        "id": "PERSON_IMP_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "공허감 = '마음에 구멍이 난 느낌' — 채워도 채워도 채워지지 않는 빈 느낌",
      "differential": "우울증의 슬픔은 감정이 '있는' 상태, 공허감은 감정 자체가 '없는' 느낌",
      "key_point": "자극추구(물질, 성관계, 자해 등)가 공허감을 일시적으로 완화하려는 시도일 수 있음",
      "common_mistake": "공허감을 우울감과 동일시 — 공허감은 슬픔보다는 '아무것도 느끼지 못함'에 가까움"
    }
  },
  {
    "id": "PERSON_TAC_029",
    "terminology": "기질과 성격 (Temperament and Character)",
    "terminology_ko": "기질과 성격",
    "terminology_en": "Temperament and Character",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "클로닌저의 심리생물학적 성격 모형으로, 기질(유전적·자동적: 자극추구, 위험회피, 보상의존, 인내력)과 성격(환경적·의식적: 자기지향성, 협조성, 자기초월)의 7차원으로 성격을 설명한다.",
    "definition_en": "Cloninger's psychobiological personality model explaining personality through 7 dimensions: temperament (genetic/automatic: novelty seeking, harm avoidance, reward dependence, persistence) and character (environmental/conscious: self-directedness, cooperativeness, self-transcendence).",
    "significance": "생물학적 기질과 환경적 성격의 구분을 통해 성격장애의 기질적 기반과 발달적 경로를 통합적으로 이해할 수 있게 한다.",
    "key_researchers": [
      {
        "name_ko": "로버트 클로닌저",
        "name_en": "C. Robert Cloninger",
        "contribution": "기질 및 성격 검사(TCI)를 개발하고 7차원 심리생물학적 성격 모형을 정립"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격 특성 차원",
        "name_en": "Personality Trait Dimensions",
        "id": "PERSON_PTD_025"
      },
      {
        "name_ko": "성격의 차원 모형",
        "name_en": "Dimensional Model of Personality",
        "id": "PERSON_DIM_030"
      },
      {
        "name_ko": "성격장애 일반 기준",
        "name_en": "General Personality Disorder Criteria",
        "id": "PERSON_GEN_001"
      }
    ],
    "sub_types": [
      {
        "name": "자극추구(Novelty Seeking)",
        "description": "새로운 자극에 대한 흥분과 탐색 경향 (기질)"
      },
      {
        "name": "위험회피(Harm Avoidance)",
        "description": "위험 신호에 대한 억제 반응 경향 (기질)"
      },
      {
        "name": "자기지향성(Self-Directedness)",
        "description": "자기 결정과 목표지향 능력 (성격)"
      },
      {
        "name": "협조성(Cooperativeness)",
        "description": "타인과의 공감 및 협력 능력 (성격)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "기질(T) 4차원: 자극추구, 위험회피, 보상의존, 인내력 / 성격(C) 3차원: 자기지향, 협조, 자기초월",
      "differential": "FFM(5요인)은 기질-성격 구분 없이 특성을 나열, TCI는 생물학적 기질과 환경적 성격을 구분",
      "key_point": "성격장애 환자는 낮은 자기지향성+낮은 협조성이 공통적 (성격 차원의 미성숙)",
      "common_mistake": "기질을 '바꿀 수 없는 것'으로, 성격을 '쉽게 바꿀 수 있는 것'으로 이분법적으로 보는 오류"
    }
  },
  {
    "id": "PERSON_DIM_030",
    "terminology": "성격의 차원 모형 (Dimensional Model of Personality)",
    "terminology_ko": "성격의 차원 모형",
    "terminology_en": "Dimensional Model of Personality",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "성격장애를 정상 성격 특성의 극단적 변이로 보는 관점으로, 범주적 분류(있다/없다) 대신 연속적 차원에서 정도의 차이로 성격 병리를 이해하며, ICD-11이 이 모형을 공식 채택하였다.",
    "definition_en": "A perspective viewing personality disorders as extreme variants of normal personality traits, understanding personality pathology as a matter of degree on continuous dimensions rather than categorical classification, officially adopted by ICD-11.",
    "significance": "범주적 진단의 한계(높은 동반이환, 진단 내 이질성, 역치 효과)를 극복하는 패러다임 전환을 대표한다.",
    "key_researchers": [
      {
        "name_ko": "토머스 위디거",
        "name_en": "Thomas Widiger",
        "contribution": "FFM 기반 성격장애의 차원적 이해를 체계적으로 연구하고 옹호"
      },
      {
        "name_ko": "리 안나 클라크",
        "name_en": "Lee Anna Clark",
        "contribution": "SNAP(Schedule for Nonadaptive and Adaptive Personality)을 개발하여 차원적 성격 평가를 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대안적 DSM-5 모형",
        "name_en": "Alternative DSM-5 Model",
        "id": "PERSON_AMP_004"
      },
      {
        "name_ko": "성격 특성 차원",
        "name_en": "Personality Trait Dimensions",
        "id": "PERSON_PTD_025"
      },
      {
        "name_ko": "기질과 성격",
        "name_en": "Temperament and Character",
        "id": "PERSON_TAC_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "차원(dimensional) = 연속체(스펙트럼) vs 범주(categorical) = 있다/없다",
      "differential": "범주 모형은 '정상 vs 장애' 구분, 차원 모형은 '정도의 차이'로 접근",
      "key_point": "ICD-11은 이미 차원적 모형으로 전환 — 성격장애를 경도/중등도/중증으로 평가",
      "common_mistake": "차원적 모형이 범주 모형을 '완전히 대체'한다고 오해 — DSM-5는 아직 범주 모형 유지"
    }
  },
  {
    "id": "PERSON_EDI_031",
    "terminology": "정서 불안정 (Affective Instability)",
    "terminology_ko": "정서 불안정",
    "terminology_en": "Affective Instability",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "기분이 수 시간~수일 단위로 극적이고 빠르게 변화하는 패턴으로, 주로 대인관계 맥락에서 촉발되며, 경계선 성격장애의 핵심 특징 중 하나이다.",
    "definition_en": "A pattern of dramatic and rapid mood fluctuations within hours to days, typically triggered by interpersonal contexts, representing a core feature of borderline personality disorder.",
    "significance": "양극성장애의 기분변동과 감별이 중요하며, 감정 조절 치료의 핵심 표적이 된다.",
    "key_researchers": [
      {
        "name_ko": "하비 코니그스버그",
        "name_en": "Harvey Koenigsberg",
        "contribution": "경계선 성격장애의 정서 불안정을 실시간 생태학적 순간평가(EMA)로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_010"
      },
      {
        "name_ko": "양극성 I형 장애",
        "name_en": "Bipolar I Disorder",
        "id": "MOOD_BPI_002"
      },
      {
        "name_ko": "변증법적 행동치료",
        "name_en": "Dialectical Behavior Therapy",
        "id": "PERSON_DBT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BPD의 정서 = '감정 롤러코스터' — 시간~일 단위의 빠른 기분 변화",
      "differential": "양극성장애의 기분 순환은 일~주 단위이고 자율적, BPD의 정서 불안정은 시간 단위이고 대인관계 촉발",
      "key_point": "기분의 기저선이 불쾌(dysphoria)인 경우가 많고, 긍정 정서보다 부정 정서 쪽으로 편향",
      "common_mistake": "BPD의 정서 불안정을 양극성장애로 오진하는 경우가 매우 흔함"
    }
  },
  {
    "id": "PERSON_EGO_032",
    "terminology": "자아동조적 (Ego-Syntonic)",
    "terminology_ko": "자아동조적",
    "terminology_en": "Ego-Syntonic",
    "category": "PERSON",
    "category_name": "성격장애 (Personality Disorders)",
    "definition": "자신의 생각, 감정, 행동 패턴이 자기 자신의 가치관·정체성과 조화롭다고 느끼는 상태로, 성격장애의 핵심 특성이며 치료 동기와 병식의 주요 장벽이 된다.",
    "definition_en": "A state in which one's thoughts, feelings, and behavioral patterns are experienced as consistent with one's own values and identity, a core feature of personality disorders that serves as a major barrier to treatment motivation and insight.",
    "significance": "성격장애 환자가 자신의 문제를 인식하지 못하는 이유를 설명하며, 자아이질적(ego-dystonic) 임상장애와의 핵심 차이를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "자아동조적(ego-syntonic)과 자아이질적(ego-dystonic) 개념을 최초로 구분하여 기술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성격장애 일반 기준",
        "name_en": "General Personality Disorder Criteria",
        "id": "PERSON_GEN_001"
      },
      {
        "name_ko": "강박성 성격장애",
        "name_en": "Obsessive-Compulsive Personality Disorder",
        "id": "PERSON_OCP_021"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자아동조(ego-syntonic) = '나답다'고 느낌, 자아이질(ego-dystonic) = '내가 아닌 것 같다'고 느낌",
      "differential": "OCD(자아이질적: 강박사고가 괴롭다) vs OCPD(자아동조적: 완벽주의가 당연하다)",
      "key_point": "자아동조적 특성 때문에 성격장애 환자는 자발적으로 치료를 찾지 않는 경향이 있음",
      "common_mistake": "자아동조적이면 치료 불가능하다고 오해 — 어려울 뿐이지 불가능하지 않음"
    }
  }
];

TERMS_DATA.SUBST = [
  {
    "id": "SUBST_SUD_001",
    "terminology": "물질사용장애 (Substance Use Disorder)",
    "terminology_ko": "물질사용장애",
    "terminology_en": "Substance Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질 사용으로 인한 임상적으로 유의한 손상이나 고통을 초래하는 문제적 패턴으로, DSM-5에서 11개 진단 기준 중 2개 이상 충족 시 진단하며 경도(2~3), 중등도(4~5), 중증(6+)으로 분류한다.",
    "definition_en": "A problematic pattern of substance use leading to clinically significant impairment or distress, diagnosed when 2+ of 11 DSM-5 criteria are met, classified as mild (2-3), moderate (4-5), or severe (6+).",
    "significance": "DSM-5에서 이전의 '남용'과 '의존' 구분을 통합한 새로운 진단 체계로, 중독의 연속체적 관점을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "조지 코브",
        "name_en": "George Koob",
        "contribution": "물질사용장애의 3단계 순환 모형(폭식/중독→금단/부정적 정동→집착/예측)을 제안"
      },
      {
        "name_ko": "노라 볼코우",
        "name_en": "Nora Volkow",
        "contribution": "NIDA 소장으로서 중독을 뇌질환으로 재개념화하고 신경영상 연구를 선도"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "경도(Mild)",
        "description": "11개 기준 중 2~3개 충족"
      },
      {
        "name": "중등도(Moderate)",
        "description": "11개 기준 중 4~5개 충족"
      },
      {
        "name": "중증(Severe)",
        "description": "11개 기준 중 6개 이상 충족"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SUD 11기준: 통제상실(4) + 사회적 손상(3) + 위험사용(2) + 약리학(2: 내성, 금단)",
      "differential": "DSM-IV의 남용(1+기준)과 의존(3+기준) 구분이 DSM-5에서 통합됨",
      "key_point": "갈망(craving)이 DSM-5에서 새로 추가된 기준이며, 법적 문제는 삭제됨",
      "common_mistake": "내성과 금단이 있어야만 진단 가능하다는 오해 — 내성·금단 없이도 2개 기준 충족 시 진단 가능"
    }
  },
  {
    "id": "SUBST_ALC_002",
    "terminology": "알코올 사용장애 (Alcohol Use Disorder)",
    "terminology_ko": "알코올 사용장애",
    "terminology_en": "Alcohol Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "알코올 사용의 문제적 패턴으로 임상적으로 유의한 손상이나 고통을 초래하며, 통제 상실, 갈망, 내성, 금단 등의 증상이 나타나는 가장 흔한 물질사용장애이다.",
    "definition_en": "A problematic pattern of alcohol use causing clinically significant impairment or distress, featuring loss of control, craving, tolerance, and withdrawal, the most prevalent substance use disorder.",
    "significance": "전 세계적으로 가장 높은 유병률을 보이는 물질사용장애로, 간경변, 뇌손상, 태아알코올스펙트럼장애 등 다양한 신체적·사회적 합병증을 야기한다.",
    "key_researchers": [
      {
        "name_ko": "엘빈 모튼 젤리넥",
        "name_en": "E. Morton Jellinek",
        "contribution": "알코올리즘의 질병 모형을 정립하고 음주 문제의 단계 모형(알파~엡실론형)을 제안"
      },
      {
        "name_ko": "조지 베일런트",
        "name_en": "George Vaillant",
        "contribution": "알코올 사용장애의 장기 종단 연구를 통해 자연 경과와 예후 인자를 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      },
      {
        "name_ko": "태아알코올스펙트럼장애",
        "name_en": "Fetal Alcohol Spectrum Disorder",
        "id": "SUBST_FAS_029"
      },
      {
        "name_ko": "이중진단",
        "name_en": "Dual Diagnosis",
        "id": "SUBST_DUL_028"
      },
      {
        "name_ko": "12단계 프로그램",
        "name_en": "12-Step Program",
        "id": "SUBST_TSP_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "알코올 금단의 심각한 합병증: 진전섬망(delirium tremens, DTs) — 치료하지 않으면 사망 가능",
      "differential": "사회적 음주와 알코올 사용장애의 구분은 '통제 상실'과 '기능 손상' 유무가 핵심",
      "key_point": "GABA 수용체를 활성화(억제 증가)하고 글루타메이트 수용체를 차단(흥분 감소)하는 기제",
      "common_mistake": "매일 마셔야만 알코올 사용장애라는 오해 — 간헐적 폭음(binge drinking)도 해당될 수 있음"
    }
  },
  {
    "id": "SUBST_OPI_003",
    "terminology": "오피오이드 사용장애 (Opioid Use Disorder)",
    "terminology_ko": "오피오이드 사용장애",
    "terminology_en": "Opioid Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "오피오이드(헤로인, 모르핀, 옥시코돈, 펜타닐 등)의 문제적 사용 패턴으로, 강력한 신체적 의존과 금단 증상을 특징으로 하며, 과다복용에 의한 호흡억제로 사망 위험이 높다.",
    "definition_en": "A problematic pattern of opioid use (heroin, morphine, oxycodone, fentanyl), characterized by strong physical dependence and withdrawal, with high mortality risk from respiratory depression due to overdose.",
    "significance": "미국의 오피오이드 위기(opioid crisis)를 통해 처방약 남용의 위험과 공중보건적 대응의 중요성이 부각되었다.",
    "key_researchers": [
      {
        "name_ko": "노라 볼코우",
        "name_en": "Nora Volkow",
        "contribution": "오피오이드 위기의 신경과학적 기반과 정책적 대응의 필요성을 강조"
      },
      {
        "name_ko": "빈센트 돌",
        "name_en": "Vincent Dole",
        "contribution": "메타돈 유지 치료(methadone maintenance treatment)를 개발하여 오피오이드 의존의 약물치료를 개척"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "약물보조치료",
        "name_en": "Medication-Assisted Treatment",
        "id": "SUBST_MAT_025"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      }
    ],
    "sub_types": [
      {
        "name": "헤로인(Heroin)",
        "description": "불법 오피오이드, 정맥주사·흡입으로 사용"
      },
      {
        "name": "처방 오피오이드",
        "description": "옥시코돈, 하이드로코돈 등 통증관리 약물의 남용"
      },
      {
        "name": "펜타닐(Fentanyl)",
        "description": "합성 오피오이드, 모르핀보다 50~100배 강력, 과량 사망의 주요 원인"
      }
    ],
    "quiz_hints": {
      "mnemonic": "오피오이드 3대 위험: (1)호흡억제, (2)빠른 내성 발달, (3)극심한 금단 증상",
      "differential": "알코올 금단은 과흥분(발작), 오피오이드 금단은 독감 유사 증상(구토, 설사, 근육통, 불안)",
      "key_point": "날록손(Narcan)이 오피오이드 과량 시 응급 해독제로 사용됨",
      "common_mistake": "처방 오피오이드는 안전하다는 오해 — 처방약도 남용하면 의존과 사망 위험 동일"
    }
  },
  {
    "id": "SUBST_CAN_004",
    "terminology": "대마 사용장애 (Cannabis Use Disorder)",
    "terminology_ko": "대마 사용장애",
    "terminology_en": "Cannabis Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "대마(마리화나)의 문제적 사용 패턴으로, THC(테트라히드로칸나비놀)가 주요 향정신 성분이며, 동기 감소, 인지 저하, 청소년기 사용 시 정신병 위험 증가가 우려된다.",
    "definition_en": "A problematic pattern of cannabis (marijuana) use, with THC (tetrahydrocannabinol) as the primary psychoactive component, associated with amotivation, cognitive impairment, and increased psychosis risk with adolescent use.",
    "significance": "전 세계적으로 가장 많이 사용되는 불법 물질이며, 합법화 추세에도 불구하고 청소년 뇌 발달에 미치는 영향이 우려된다.",
    "key_researchers": [
      {
        "name_ko": "라파엘 메슐람",
        "name_en": "Raphael Mechoulam",
        "contribution": "THC를 분리·구조 결정하고 내인성 카나비노이드(안안다마이드) 발견에 기여"
      },
      {
        "name_ko": "로빈 머레이",
        "name_en": "Robin Murray",
        "contribution": "대마 사용과 정신병 발병 위험의 연관성을 역학 연구로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "게이트웨이 가설",
        "name_en": "Gateway Hypothesis",
        "id": "SUBST_GWH_020"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "대마의 주성분 THC = Tetrahydrocannabinol, 내인성 카나비노이드 시스템에 작용",
      "differential": "알코올은 GABA 작용, 대마는 CB1 카나비노이드 수용체 작용 — 기제가 다름",
      "key_point": "청소년기 대마 사용은 조현병 발병 위험을 2~4배 높이는 것으로 보고됨",
      "common_mistake": "'자연 식물이므로 안전하다'는 오해 — 고농도 THC 제품의 정신병 위험이 특히 높음"
    }
  },
  {
    "id": "SUBST_STI_005",
    "terminology": "각성제 사용장애 (Stimulant Use Disorder)",
    "terminology_ko": "각성제 사용장애",
    "terminology_en": "Stimulant Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "코카인, 암페타민, 메스암페타민 등 각성제의 문제적 사용 패턴으로, 도파민 방출을 급격히 증가시켜 강렬한 쾌감과 에너지 증가를 유발하지만, 심혈관 합병증과 정신병적 증상의 위험이 있다.",
    "definition_en": "A problematic pattern of stimulant use (cocaine, amphetamine, methamphetamine) that rapidly increases dopamine release causing intense euphoria and energy, with risks of cardiovascular complications and psychotic symptoms.",
    "significance": "도파민 보상 체계를 직접 자극하여 가장 강력한 심리적 의존을 유발하며, 중독의 신경생물학적 기제를 이해하는 핵심 모형이다.",
    "key_researchers": [
      {
        "name_ko": "로이 와이즈",
        "name_en": "Roy Wise",
        "contribution": "도파민 쾌락 가설(dopamine pleasure hypothesis)을 제안하여 각성제 보상 기제를 설명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "코카인",
        "name_en": "Cocaine",
        "id": "SUBST_COC_006"
      },
      {
        "name_ko": "암페타민",
        "name_en": "Amphetamine",
        "id": "SUBST_AMP_007"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [
      {
        "name": "코카인형",
        "description": "도파민 재흡수 차단, 짧은 반감기로 반복 사용"
      },
      {
        "name": "암페타민형",
        "description": "도파민 방출 촉진, 긴 지속시간"
      }
    ],
    "quiz_hints": {
      "mnemonic": "각성제 = 도파민 '폭탄' — 보상회로를 직접·강력하게 자극",
      "differential": "코카인은 도파민 '재흡수 차단', 암페타민은 도파민 '방출 촉진' — 기제가 다름",
      "key_point": "강렬한 심리적 의존(갈망)이 핵심이며, 신체적 금단보다 심리적 금단이 두드러짐",
      "common_mistake": "각성제에 신체적 금단이 없다고 오해 — 피로, 과식, 과수면 등 금단 증상 존재"
    }
  },
  {
    "id": "SUBST_COC_006",
    "terminology": "코카인 (Cocaine)",
    "terminology_ko": "코카인",
    "terminology_en": "Cocaine",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "코카나무 잎에서 추출하는 강력한 각성제로, 시냅스에서 도파민, 노르에피네프린, 세로토닌의 재흡수를 차단하여 강렬한 쾌감과 각성을 유발하지만, 심장마비와 뇌졸중의 위험이 있다.",
    "definition_en": "A powerful stimulant extracted from coca leaves that blocks synaptic reuptake of dopamine, norepinephrine, and serotonin, producing intense euphoria and alertness but risking heart attack and stroke.",
    "significance": "도파민 재흡수 억제 기제의 발견을 통해 중독의 신경화학적 이해에 획기적 기여를 하였다.",
    "key_researchers": [
      {
        "name_ko": "마이클 쿠하르",
        "name_en": "Michael Kuhar",
        "contribution": "코카인의 도파민 수송체(DAT) 결합 기제를 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "각성제 사용장애",
        "name_en": "Stimulant Use Disorder",
        "id": "SUBST_STI_005"
      },
      {
        "name_ko": "암페타민",
        "name_en": "Amphetamine",
        "id": "SUBST_AMP_007"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "복측피개영역",
        "name_en": "Ventral Tegmental Area",
        "id": "SUBST_VTA_018"
      }
    ],
    "sub_types": [
      {
        "name": "코카인 분말(Powder)",
        "description": "비강 흡입이 일반적, 작용 시작 3~5분"
      },
      {
        "name": "크랙(Crack)",
        "description": "흡연형, 작용 시작 8~10초로 매우 빠름, 의존성 매우 높음"
      }
    ],
    "quiz_hints": {
      "mnemonic": "코카인 = 도파민 '재흡수 차단제(reuptake blocker)' — 시냅스 내 도파민 농도 증가",
      "differential": "암페타민은 도파민 '방출 촉진', 코카인은 도파민 '재흡수 차단' — 기제 차이",
      "key_point": "크랙(crack) 형태가 가장 빠르게 작용하고 가장 의존성이 높음",
      "common_mistake": "코카인에 신체적 의존이 없다는 오해 — 심한 피로, 우울, 과수면 등 금단 증상 존재"
    }
  },
  {
    "id": "SUBST_AMP_007",
    "terminology": "암페타민 (Amphetamine)",
    "terminology_ko": "암페타민",
    "terminology_en": "Amphetamine",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "도파민과 노르에피네프린의 방출을 촉진하는 합성 각성제로, 메스암페타민(필로폰)이 가장 강력한 형태이며, 장기 사용 시 정신병적 증상(편집증, 환각)을 유발할 수 있다.",
    "definition_en": "A synthetic stimulant that promotes release of dopamine and norepinephrine, with methamphetamine being its most potent form, capable of inducing psychotic symptoms (paranoia, hallucinations) with chronic use.",
    "significance": "암페타민 유발 정신병이 도파민 가설의 초기 근거가 되었으며, ADHD 치료제로도 사용되어 용량과 맥락의 중요성을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "아르비드 칼슨",
        "name_en": "Arvid Carlsson",
        "contribution": "암페타민의 도파민 방출 촉진 기제를 발견하여 도파민 가설의 근거를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "각성제 사용장애",
        "name_en": "Stimulant Use Disorder",
        "id": "SUBST_STI_005"
      },
      {
        "name_ko": "코카인",
        "name_en": "Cocaine",
        "id": "SUBST_COC_006"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      }
    ],
    "sub_types": [
      {
        "name": "암페타민(Amphetamine)",
        "description": "ADHD 치료제(Adderall)로도 사용되는 각성제"
      },
      {
        "name": "메스암페타민(Methamphetamine)",
        "description": "더 강력한 형태, 불법 약물로 남용 (필로폰)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "암페타민 = 도파민 '방출 촉진제(releaser)' — 코카인의 '재흡수 차단'과 기제 다름",
      "differential": "코카인(반감기 ~1시간) vs 메스암페타민(반감기 ~12시간) — 지속시간 차이 큼",
      "key_point": "장기 고용량 사용 시 '암페타민 정신병' — 조현병과 유사한 편집증, 환각 유발",
      "common_mistake": "ADHD 치료용 암페타민과 남용을 동일시 — 치료 용량과 남용 용량·경로가 다름"
    }
  },
  {
    "id": "SUBST_SED_008",
    "terminology": "진정제/수면제/항불안제 사용장애 (Sedative, Hypnotic, Anxiolytic Use Disorder)",
    "terminology_ko": "진정제/수면제/항불안제 사용장애",
    "terminology_en": "Sedative, Hypnotic, Anxiolytic Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "벤조디아제핀(디아제팜, 알프라졸람 등), 바르비투레이트 등 CNS 억제제의 문제적 사용 패턴으로, GABA 수용체를 활성화하여 진정·불안 감소 효과를 내며, 알코올과 교차내성이 있다.",
    "definition_en": "A problematic pattern of using CNS depressants such as benzodiazepines (diazepam, alprazolam) and barbiturates, which activate GABA receptors for sedation and anxiety reduction, with cross-tolerance to alcohol.",
    "significance": "처방약 남용의 대표적 사례로, 알코올과의 교차내성 및 병용 시 치명적 호흡억제의 위험이 있다.",
    "key_researchers": [
      {
        "name_ko": "레오 스턴바흐",
        "name_en": "Leo Sternbach",
        "contribution": "최초의 벤조디아제핀(클로르디아제폭사이드, Librium)을 합성하여 항불안제 시대를 개막"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      },
      {
        "name_ko": "교차내성",
        "name_en": "Cross-Tolerance",
        "id": "SUBST_CRT_013"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [
      {
        "name": "벤조디아제핀",
        "description": "디아제팜, 알프라졸람, 로라제팜 등 현대 항불안제"
      },
      {
        "name": "바르비투레이트",
        "description": "페노바르비탈 등 구세대 진정제, 과량 치사율 높음"
      }
    ],
    "quiz_hints": {
      "mnemonic": "진정제·수면제·항불안제 = 모두 GABA 수용체를 활성화하는 CNS 억제제",
      "differential": "오피오이드는 뮤(μ) 수용체, 진정제는 GABA 수용체 — 작용 수용체가 다름",
      "key_point": "알코올과 교차내성이 있어 병용 시 치명적이며, 금단 시 발작 위험이 있음",
      "common_mistake": "의사가 처방했으므로 안전하다는 오해 — 장기 사용 시 의존 발생 위험 높음"
    }
  },
  {
    "id": "SUBST_HAL_009",
    "terminology": "환각제 (Hallucinogens)",
    "terminology_ko": "환각제",
    "terminology_en": "Hallucinogens",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "지각, 사고, 감정의 현저한 변화를 유발하는 물질 집단으로, LSD, 실로시빈, 메스칼린 등 고전적 환각제(세로토닌 작용)와 PCP, 케타민 등 해리성 환각제(글루타메이트 작용)를 포함한다.",
    "definition_en": "A group of substances producing marked alterations in perception, thought, and emotion, including classic hallucinogens (LSD, psilocybin, mescaline; serotonergic) and dissociative hallucinogens (PCP, ketamine; glutamatergic).",
    "significance": "의식과 지각의 신경기제를 연구하는 도구이며, 최근 실로시빈의 치료적 잠재력(우울증, PTSD)이 재조명되고 있다.",
    "key_researchers": [
      {
        "name_ko": "알버트 호프만",
        "name_en": "Albert Hofmann",
        "contribution": "LSD(리세르그산 디에틸아미드)를 합성하고 그 환각 효과를 발견"
      },
      {
        "name_ko": "롤랜드 그리피스",
        "name_en": "Roland Griffiths",
        "contribution": "실로시빈의 치료적 잠재력(말기 환자 불안, 우울증)을 현대 임상시험으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "글루타메이트 가설",
        "name_en": "Glutamate Hypothesis",
        "id": "SCHIZO_GLU_020"
      },
      {
        "name_ko": "환시",
        "name_en": "Visual Hallucination",
        "id": "SCHIZO_VHL_010"
      }
    ],
    "sub_types": [
      {
        "name": "고전적 환각제",
        "description": "LSD, 실로시빈, 메스칼린 — 5-HT2A 세로토닌 수용체 작용"
      },
      {
        "name": "해리성 환각제",
        "description": "PCP, 케타민 — NMDA 글루타메이트 수용체 차단"
      },
      {
        "name": "MDMA(엑스터시)",
        "description": "세로토닌 방출 촉진, 공감 증가 효과 — 별도 범주로 분류되기도 함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "고전적 환각제 = 세로토닌(5-HT2A), 해리성 환각제 = 글루타메이트(NMDA 차단)",
      "differential": "고전적 환각제는 주로 시각 왜곡, 해리성 환각제는 해리·이인증이 더 두드러짐",
      "key_point": "대부분 신체적 의존(내성·금단)을 거의 유발하지 않으나 심리적 위험(bad trip)은 존재",
      "common_mistake": "모든 환각제가 같은 기제로 작용한다는 오해 — 세로토닌계와 글루타메이트계로 나뉨"
    }
  },
  {
    "id": "SUBST_TOL_010",
    "terminology": "내성 (Tolerance)",
    "terminology_ko": "내성",
    "terminology_en": "Tolerance",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "동일한 효과를 얻기 위해 점점 더 많은 양의 물질이 필요하거나, 동일한 양의 물질로는 이전과 같은 효과를 얻지 못하는 현상으로, 신경적응(neuroadaptation)의 결과이다.",
    "definition_en": "A phenomenon where increasingly larger amounts of a substance are needed for the same effect, or the same amount produces diminished effect, resulting from neuroadaptation.",
    "significance": "물질 의존의 핵심 지표 중 하나이며, 수용체 하향조절(downregulation) 등 신경적응 기제를 반영한다.",
    "key_researchers": [
      {
        "name_ko": "하워드 시겔",
        "name_en": "Howard Siegel",
        "contribution": "조건화된 내성(conditioned tolerance)과 환경 단서의 역할을 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      },
      {
        "name_ko": "교차내성",
        "name_en": "Cross-Tolerance",
        "id": "SUBST_CRT_013"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "약물역동학적 내성",
        "description": "약물 대사가 빨라져 혈중 농도가 낮아짐"
      },
      {
        "name": "약물역학적 내성",
        "description": "수용체가 둔감해져 같은 농도에 반응이 감소"
      },
      {
        "name": "행동 내성",
        "description": "약물 효과 하에서 기능 수행을 학습함"
      },
      {
        "name": "조건화된 내성",
        "description": "약물 사용 환경 단서가 보상 반응을 약화시킴"
      }
    ],
    "quiz_hints": {
      "mnemonic": "내성 = '더 많이 필요' 또는 '같은 양으로 효과 감소'",
      "differential": "내성은 '더 많이 필요', 금단은 '없으면 고통' — 둘 다 신경적응의 표현",
      "key_point": "내성 발달은 물질에 따라 다른 속도 — 오피오이드는 빠르고, 알코올은 상대적으로 느림",
      "common_mistake": "내성이 있으면 물질이 안전하다는 오해 — 내성은 과량 사용과 사망 위험을 높임"
    }
  },
  {
    "id": "SUBST_WDR_011",
    "terminology": "금단 (Withdrawal)",
    "terminology_ko": "금단",
    "terminology_en": "Withdrawal",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "장기간 사용하던 물질을 중단하거나 감량할 때 나타나는 물질 특이적 신체적·심리적 증상 군으로, 대체로 해당 물질의 효과와 반대되는 반동(rebound) 현상이 나타난다.",
    "definition_en": "A cluster of substance-specific physical and psychological symptoms occurring upon cessation or reduction of prolonged substance use, generally manifesting as rebound effects opposite to the substance's acute effects.",
    "significance": "물질 의존의 핵심 생리적 지표이며, 알코올·벤조디아제핀 금단은 치명적일 수 있어 의료적 관리가 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "조지 코브",
        "name_en": "George Koob",
        "contribution": "금단의 부정적 정동 상태(negative affect)가 중독 순환의 핵심 동력임을 이론화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      },
      {
        "name_ko": "해독",
        "name_en": "Detoxification",
        "id": "SUBST_DET_026"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "알코올 금단",
        "description": "떨림, 발한, 불안, 발작, 진전섬망(DTs) — 치명적 가능"
      },
      {
        "name": "오피오이드 금단",
        "description": "근육통, 구토, 설사, 불안, 동공확대 — 불쾌하지만 보통 비치명적"
      },
      {
        "name": "벤조디아제핀 금단",
        "description": "불안, 불면, 발작 — 알코올 금단과 유사, 치명적 가능"
      },
      {
        "name": "각성제 금단",
        "description": "피로, 우울, 과식, 과수면 — '충돌(crash)' 상태"
      }
    ],
    "quiz_hints": {
      "mnemonic": "금단 = 물질 효과의 '반대' — 억제제(알코올) 중단 시 과흥분(발작), 각성제 중단 시 피로",
      "differential": "치명적 금단: 알코올, 벤조디아제핀 (발작 위험) / 비치명적 금단: 오피오이드, 각성제",
      "key_point": "알코올·벤조 금단은 의료 응급상황이 될 수 있어 반드시 의학적 관리 필요",
      "common_mistake": "오피오이드 금단이 가장 위험하다는 오해 — 실제로는 알코올·벤조 금단이 더 치명적"
    }
  },
  {
    "id": "SUBST_CRV_012",
    "terminology": "갈망 (Craving)",
    "terminology_ko": "갈망",
    "terminology_en": "Craving",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질을 사용하고자 하는 강렬하고 참기 어려운 욕구 또는 충동으로, DSM-5에서 물질사용장애의 새로운 진단 기준으로 추가되었으며, 재발의 가장 강력한 예측인자 중 하나이다.",
    "definition_en": "An intense and difficult-to-resist desire or urge to use a substance, added as a new diagnostic criterion in DSM-5, and one of the strongest predictors of relapse.",
    "significance": "주관적 경험으로서의 갈망이 DSM-5에 공식 포함됨으로써 중독의 심리적 차원이 강조되었다.",
    "key_researchers": [
      {
        "name_ko": "안토니오 구디아니",
        "name_en": "Antonio Verdejo-García",
        "contribution": "갈망의 인지적·정서적 기제와 전전두엽 조절 실패와의 관계를 연구"
      },
      {
        "name_ko": "안나 로즈 칠드레스",
        "name_en": "Anna Rose Childress",
        "contribution": "약물 단서(cue)에 의한 갈망의 신경기전을 뇌영상 연구로 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "재발방지모형",
        "name_en": "Relapse Prevention Model",
        "id": "SUBST_RPM_024"
      },
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "갈망 = DSM-5에서 '새로 추가된' 기준, 재발의 가장 강력한 예측인자",
      "differential": "금단은 물질 부재 시 나타나는 생리적 증상, 갈망은 물질 사용 욕구라는 주관적 경험",
      "key_point": "약물 관련 단서(사람, 장소, 도구)에 의해 촉발되는 '단서-유발 갈망(cue-induced craving)'이 핵심",
      "common_mistake": "갈망이 순수한 의지력으로 통제 가능하다는 오해 — 신경생물학적 기반이 있는 강력한 충동"
    }
  },
  {
    "id": "SUBST_CRT_013",
    "terminology": "교차내성 (Cross-Tolerance)",
    "terminology_ko": "교차내성",
    "terminology_en": "Cross-Tolerance",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "한 물질에 대한 내성이 약리학적으로 유사한 다른 물질에 대한 내성으로 전이되는 현상으로, 알코올-벤조디아제핀, 헤로인-모르핀 등 같은 수용체 계열 물질 간에 나타난다.",
    "definition_en": "A phenomenon where tolerance to one substance transfers to another pharmacologically similar substance, occurring between substances acting on the same receptor system, such as alcohol-benzodiazepines or heroin-morphine.",
    "significance": "물질 간 상호작용과 대체 사용의 위험성을 이해하는 데 중요하며, 치료적 대체(메타돈)의 원리이기도 하다.",
    "key_researchers": [
      {
        "name_ko": "해롤드 칼란트",
        "name_en": "Harold Kalant",
        "contribution": "알코올과 벤조디아제핀의 교차내성과 교차의존의 기제를 체계적으로 연구"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      },
      {
        "name_ko": "진정제 사용장애",
        "name_en": "Sedative Use Disorder",
        "id": "SUBST_SED_008"
      },
      {
        "name_ko": "약물보조치료",
        "name_en": "Medication-Assisted Treatment",
        "id": "SUBST_MAT_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "교차내성 = '한 물질의 내성이 다른 물질로 건너감(cross-over)'",
      "differential": "교차내성(다른 물질에 내성 전이) vs 교차의존(다른 물질로 금단 예방 가능)",
      "key_point": "알코올 금단 시 벤조디아제핀을 투여하는 것이 교차내성/교차의존의 치료적 활용",
      "common_mistake": "교차내성이 모든 약물 간에 나타난다고 오해 — 같은 수용체 계열에서만 발생"
    }
  },
  {
    "id": "SUBST_NIC_014",
    "terminology": "담배/니코틴 사용장애 (Tobacco/Nicotine Use Disorder)",
    "terminology_ko": "담배/니코틴 사용장애",
    "terminology_en": "Tobacco/Nicotine Use Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "담배(니코틴)의 문제적 사용 패턴으로, 니코틴이 뇌의 니코틴성 아세틸콜린 수용체에 작용하여 도파민 방출을 촉진하며, 빠른 내성 발달과 강력한 금단 증상이 특징적이다.",
    "definition_en": "A problematic pattern of tobacco (nicotine) use, where nicotine acts on nicotinic acetylcholine receptors to promote dopamine release, characterized by rapid tolerance development and strong withdrawal symptoms.",
    "significance": "전 세계적으로 예방 가능한 사망의 최대 원인이며, 물질 중 가장 높은 의존 발생률을 보인다.",
    "key_researchers": [
      {
        "name_ko": "닐 베노위츠",
        "name_en": "Neal Benowitz",
        "contribution": "니코틴 약물역학 연구를 통해 니코틴 의존의 생물학적 기제와 금연 치료 전략을 발전"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "동기강화상담",
        "name_en": "Motivational Interviewing",
        "id": "SUBST_MIA_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "니코틴 = 니코틴성 아세틸콜린 수용체(nAChR) 작용 → 도파민 간접 방출",
      "differential": "각성제는 도파민을 직접 방출/차단, 니코틴은 아세틸콜린 수용체를 통해 간접적으로 도파민 방출",
      "key_point": "물질 중 의존 발생률이 가장 높으며(사용자의 약 32%가 의존), 금연 성공률은 매우 낮음",
      "common_mistake": "니코틴 자체가 암을 유발한다는 오해 — 암을 유발하는 것은 타르 등 담배의 다른 성분"
    }
  },
  {
    "id": "SUBST_GMB_015",
    "terminology": "도박장애 (Gambling Disorder)",
    "terminology_ko": "도박장애",
    "terminology_en": "Gambling Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "반복적이고 문제적인 도박 행동으로 임상적으로 유의한 고통이나 손상을 초래하며, DSM-5에서 물질 관련 장애와 같은 장에 '행동중독(behavioral addiction)'으로 유일하게 포함된 비물질 장애이다.",
    "definition_en": "Persistent and problematic gambling behavior causing clinically significant distress or impairment, the only non-substance disorder included as a 'behavioral addiction' alongside substance-related disorders in DSM-5.",
    "significance": "물질 없이도 보상회로를 활성화하여 중독이 발생할 수 있음을 입증하는 핵심 사례로, 행동중독 개념의 타당성을 지지한다.",
    "key_researchers": [
      {
        "name_ko": "존 그랜트",
        "name_en": "Jon Grant",
        "contribution": "도박장애의 신경생물학적 기반과 약물치료 가능성을 연구"
      },
      {
        "name_ko": "마크 포텐자",
        "name_en": "Marc Potenza",
        "contribution": "도박장애의 뇌영상 연구를 통해 물질중독과의 신경생물학적 유사성을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인터넷 게임 장애",
        "name_en": "Internet Gaming Disorder",
        "id": "SUBST_IGD_016"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "충동성",
        "name_en": "Impulsivity",
        "id": "PERSON_IMP_016"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도박장애 = DSM-5의 '유일한' 공식 행동중독",
      "differential": "물질사용장애는 외부 물질에 의한 중독, 도박장애는 행동 자체에 의한 중독",
      "key_point": "물질중독과 동일한 보상회로(중변연계 도파민) 활성 패턴을 보이는 것이 분류의 근거",
      "common_mistake": "도박장애를 단순한 '의지력 부족'으로 치부 — 물질중독과 유사한 뇌 기전이 관여"
    }
  },
  {
    "id": "SUBST_IGD_016",
    "terminology": "인터넷 게임 장애 (Internet Gaming Disorder)",
    "terminology_ko": "인터넷 게임 장애",
    "terminology_en": "Internet Gaming Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "지속적이고 반복적인 인터넷 게임 사용으로 인해 통제 상실, 다른 활동에 대한 흥미 상실, 부정적 결과에도 불구한 지속 사용 등이 나타나는 상태로, DSM-5 섹션 III에 추가 연구 필요 상태로 포함되었다.",
    "definition_en": "A condition involving persistent and recurrent internet gaming use leading to loss of control, diminished interest in other activities, and continued use despite negative consequences, included in DSM-5 Section III as requiring further study.",
    "significance": "디지털 시대의 새로운 행동중독 가능성을 제기하며, 특히 청소년 인구에서의 공중보건적 우려가 크다.",
    "key_researchers": [
      {
        "name_ko": "블라디미르 포제냐크",
        "name_en": "Vladimir Poznyak",
        "contribution": "WHO ICD-11에 게임장애(gaming disorder)를 공식 진단으로 포함시키는 작업을 주도"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도박장애",
        "name_en": "Gambling Disorder",
        "id": "SUBST_GMB_015"
      },
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "충동성",
        "name_en": "Impulsivity",
        "id": "PERSON_IMP_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "IGD = Internet Gaming Disorder, DSM-5 '섹션 III'(추가 연구 필요), ICD-11에는 공식 포함",
      "differential": "도박장애(DSM-5 공식 진단)와 달리 인터넷 게임 장애는 아직 '추가 연구 필요' 상태",
      "key_point": "ICD-11에서는 이미 gaming disorder로 공식 포함되어 DSM과 차이",
      "common_mistake": "이미 DSM-5 공식 진단이라는 오해 — 아직 섹션 III의 '추가 연구 필요' 범주"
    }
  },
  {
    "id": "SUBST_RWC_017",
    "terminology": "보상회로 (Reward Circuit)",
    "terminology_ko": "보상회로",
    "terminology_en": "Reward Circuit",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "복측피개영역(VTA)에서 측좌핵(NAc)과 전전두엽으로 이어지는 중변연계/중피질 도파민 경로로, 쾌감과 동기의 신경 기반이며, 모든 남용 물질이 이 회로의 도파민 신호를 증가시킨다.",
    "definition_en": "The mesolimbic/mesocortical dopamine pathway from ventral tegmental area (VTA) to nucleus accumbens (NAc) and prefrontal cortex, the neural basis of pleasure and motivation, with all drugs of abuse increasing dopamine signaling in this circuit.",
    "significance": "모든 중독 물질의 공통 신경 경로로, 중독의 신경생물학적 통합 모형의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "제임스 올즈",
        "name_en": "James Olds",
        "contribution": "1954년 뇌 자극 보상(brain stimulation reward) 실험으로 뇌 내 보상 시스템의 존재를 최초 입증"
      },
      {
        "name_ko": "볼프람 슐츠",
        "name_en": "Wolfram Schultz",
        "contribution": "도파민 뉴런의 보상 예측 오류(reward prediction error) 신호를 발견"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "복측피개영역",
        "name_en": "Ventral Tegmental Area",
        "id": "SUBST_VTA_018"
      },
      {
        "name_ko": "측좌핵",
        "name_en": "Nucleus Accumbens",
        "id": "SUBST_NAC_019"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "보상회로 = VTA → NAc(측좌핵) → PFC(전전두엽), 도파민이 매개",
      "differential": "자연 보상(음식, 성)은 적응적 도파민 신호, 약물 보상은 비정상적으로 강력한 도파민 신호",
      "key_point": "약물은 자연 보상보다 2~10배 강한 도파민 방출을 유발하여 뇌를 '하이재킹'함",
      "common_mistake": "도파민이 '쾌감' 자체라는 오해 — 도파민은 '원함(wanting)'이지 '좋아함(liking)'이 아님"
    }
  },
  {
    "id": "SUBST_VTA_018",
    "terminology": "복측피개영역 (Ventral Tegmental Area, VTA)",
    "terminology_ko": "복측피개영역",
    "terminology_en": "Ventral Tegmental Area",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "중뇌에 위치한 도파민 뉴런의 주요 기원지로, 측좌핵과 전전두엽으로 도파민을 투사하여 보상, 동기, 학습을 매개하며, 모든 남용 물질의 작용 표적이 되는 핵심 뇌 구조이다.",
    "definition_en": "A major origin of dopamine neurons in the midbrain that projects dopamine to the nucleus accumbens and prefrontal cortex, mediating reward, motivation, and learning, and a key brain structure targeted by all drugs of abuse.",
    "significance": "보상회로의 시작점으로서 중독의 신경해부학적 이해의 핵심 구조이며, 약물 작용 기제 연구의 주요 표적이다.",
    "key_researchers": [
      {
        "name_ko": "로이 와이즈",
        "name_en": "Roy Wise",
        "contribution": "VTA 도파민 뉴런이 보상의 신경 기반임을 체계적으로 연구"
      },
      {
        "name_ko": "제임스 올즈",
        "name_en": "James Olds",
        "contribution": "뇌 자극 보상 실험을 통해 VTA를 포함한 보상 영역을 최초로 확인"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "측좌핵",
        "name_en": "Nucleus Accumbens",
        "id": "SUBST_NAC_019"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "VTA = 보상회로의 '출발점', 도파민 뉴런의 고향",
      "differential": "흑질(substantia nigra)의 도파민은 운동 조절, VTA의 도파민은 보상·동기 담당",
      "key_point": "VTA에서 측좌핵으로의 투사 = 중변연계 경로(mesolimbic pathway) = 보상의 핵심 경로",
      "common_mistake": "VTA가 쾌감의 유일한 뇌 영역이라는 오해 — 보상 네트워크의 일부일 뿐"
    }
  },
  {
    "id": "SUBST_NAC_019",
    "terminology": "측좌핵 (Nucleus Accumbens, NAc)",
    "terminology_ko": "측좌핵",
    "terminology_en": "Nucleus Accumbens",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "복측 선조체에 위치한 뇌 구조로, VTA로부터 도파민 투사를 받아 보상의 쾌감과 동기를 처리하는 핵심 영역이며, 남용 물질에 의해 도파민 방출이 비정상적으로 증가하는 주요 표적이다.",
    "definition_en": "A brain structure in the ventral striatum receiving dopamine projections from VTA, processing reward pleasure and motivation, the primary target where drugs of abuse abnormally increase dopamine release.",
    "significance": "보상과 동기 처리의 핵심 허브로, 중독에서의 도파민 과잉 방출의 직접적 표적이며 갈망의 신경 기반이다.",
    "key_researchers": [
      {
        "name_ko": "테리 로빈슨",
        "name_en": "Terry Robinson",
        "contribution": "측좌핵의 도파민 감작(sensitization)이 '원함(wanting)'의 신경 기반임을 제안 (인센티브 현저성 이론)"
      },
      {
        "name_ko": "켄트 베리지",
        "name_en": "Kent Berridge",
        "contribution": "로빈슨과 함께 '원함(wanting)'과 '좋아함(liking)'의 신경 해부학적 분리를 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "복측피개영역",
        "name_en": "Ventral Tegmental Area",
        "id": "SUBST_VTA_018"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      }
    ],
    "sub_types": [
      {
        "name": "핵심부(Core)",
        "description": "조건화된 강화와 운동 출력에 관여"
      },
      {
        "name": "껍질부(Shell)",
        "description": "새로운 보상의 즉각적 쾌감 처리에 관여"
      }
    ],
    "quiz_hints": {
      "mnemonic": "NAc = 보상회로의 '목적지', 쾌감의 허브",
      "differential": "VTA는 도파민의 '출발지', NAc은 도파민의 '도착지'이자 보상 처리의 핵심",
      "key_point": "코카인은 NAc에서 도파민 재흡수를 직접 차단하여 도파민 농도를 급격히 높임",
      "common_mistake": "측좌핵이 쾌감만 담당한다는 오해 — '원함(wanting)'과 동기 부여에도 핵심적 역할"
    }
  },
  {
    "id": "SUBST_GWH_020",
    "terminology": "게이트웨이 가설 (Gateway Hypothesis)",
    "terminology_ko": "게이트웨이 가설",
    "terminology_en": "Gateway Hypothesis",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "담배, 알코올, 대마 등 '합법적' 또는 '경미한' 물질의 사용이 이후 코카인, 헤로인 등 '강한' 불법 물질 사용으로 진행되는 관문(gateway) 역할을 한다는 가설이다.",
    "definition_en": "A hypothesis proposing that use of 'legal' or 'milder' substances such as tobacco, alcohol, and cannabis serves as a gateway leading to subsequent use of 'harder' illegal substances like cocaine and heroin.",
    "significance": "약물 사용의 발달적 순서를 설명하는 영향력 있는 가설이나, 인과관계가 아닌 상관관계일 수 있다는 비판도 존재한다.",
    "key_researchers": [
      {
        "name_ko": "데니스 칸델",
        "name_en": "Denise Kandel",
        "contribution": "약물 사용의 단계적 진행 모형을 종단연구로 제안하여 게이트웨이 가설의 실증적 근거를 제공"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "대마 사용장애",
        "name_en": "Cannabis Use Disorder",
        "id": "SUBST_CAN_004"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      },
      {
        "name_ko": "담배/니코틴 사용장애",
        "name_en": "Tobacco/Nicotine Use Disorder",
        "id": "SUBST_NIC_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "게이트웨이 = '관문' — 약한 물질이 강한 물질로의 '문'을 열어줌",
      "differential": "공통 원인 모형(common liability model)은 게이트웨이 효과가 아닌 공통된 유전·환경 요인을 강조",
      "key_point": "순서적 진행 패턴은 관찰되나, '경미한 물질 → 반드시 강한 물질' 인과관계는 입증되지 않음",
      "common_mistake": "대마를 피우면 반드시 헤로인을 하게 된다는 식의 결정론적 해석"
    }
  },
  {
    "id": "SUBST_MIA_021",
    "terminology": "동기강화상담 (Motivational Interviewing, MI)",
    "terminology_ko": "동기강화상담",
    "terminology_en": "Motivational Interviewing",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "내담자 중심적이고 지시적인 상담 방법으로, 양가감정(ambivalence)을 탐색하고 해결하여 행동 변화에 대한 내적 동기를 강화하는 것을 목표로 하며, 물질사용장애 치료에 효과적이다.",
    "definition_en": "A client-centered, directive counseling method that explores and resolves ambivalence to enhance intrinsic motivation for behavioral change, effective in treating substance use disorders.",
    "significance": "저항을 최소화하고 내적 동기를 이끌어내는 비대결적 접근으로, 물질사용장애를 포함한 다양한 건강 행동 변화에 널리 적용된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 밀러",
        "name_en": "William R. Miller",
        "contribution": "동기강화상담(MI)을 개발하고 알코올 사용장애 치료에 대한 효과를 입증"
      },
      {
        "name_ko": "스티브 롤닉",
        "name_en": "Stephen Rollnick",
        "contribution": "밀러와 함께 MI의 원리와 기법을 체계화하고 건강 행동 변화 영역으로 확장"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "재발방지모형",
        "name_en": "Relapse Prevention Model",
        "id": "SUBST_RPM_024"
      },
      {
        "name_ko": "12단계 프로그램",
        "name_en": "12-Step Program",
        "id": "SUBST_TSP_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MI의 4원리: RULE = Resist(교정반사 억제), Understand(공감), Listen(반영적 경청), Empower(역량 강화)",
      "differential": "CBT는 인지 재구조화, MI는 양가감정 탐색과 내적 동기 강화가 핵심",
      "key_point": "변화에 대한 내담자 자신의 '변화대화(change talk)'를 이끌어내는 것이 핵심 기법",
      "common_mistake": "MI가 단순한 '공감적 경청'이라는 오해 — 방향성 있는(directive) 상담으로 전략적 기법이 필요"
    }
  },
  {
    "id": "SUBST_TSP_022",
    "terminology": "12단계 프로그램 (12-Step Program)",
    "terminology_ko": "12단계 프로그램",
    "terminology_en": "12-Step Program",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "알코올 중독자 모임(AA)에서 시작된 자조(self-help) 회복 프로그램으로, 무력감 인정, 더 큰 힘(higher power)에 대한 의지, 도덕적 점검, 보상 등 12개 단계를 통한 영적·행동적 회복을 추구한다.",
    "definition_en": "A self-help recovery program originating from Alcoholics Anonymous (AA), pursuing spiritual and behavioral recovery through 12 steps including admitting powerlessness, reliance on a higher power, moral inventory, and amends.",
    "significance": "전 세계적으로 가장 널리 이용되는 중독 회복 프로그램이며, 동료 지지(peer support)의 치료적 가치를 입증한다.",
    "key_researchers": [
      {
        "name_ko": "빌 윌슨",
        "name_en": "Bill Wilson",
        "contribution": "알코올 중독자 모임(AA)을 공동 창립하고 12단계 회복 프로그램의 원리를 정립"
      },
      {
        "name_ko": "밥 스미스",
        "name_en": "Bob Smith",
        "contribution": "윌슨과 함께 AA를 공동 창립한 의사로, 의학적 관점과 영적 회복의 통합에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      },
      {
        "name_ko": "절주 vs 단주",
        "name_en": "Moderation vs Abstinence",
        "id": "SUBST_MVA_027"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "AA(Alcoholics Anonymous)",
        "description": "알코올 중독 회복 모임"
      },
      {
        "name": "NA(Narcotics Anonymous)",
        "description": "약물 중독 회복 모임"
      },
      {
        "name": "GA(Gamblers Anonymous)",
        "description": "도박 중독 회복 모임"
      }
    ],
    "quiz_hints": {
      "mnemonic": "12단계의 핵심: (1)무력감 인정 → (2)더 큰 힘 의지 → (4)도덕적 점검 → (8~9)보상 → (12)나눔",
      "differential": "전문 치료(CBT, MI)는 증거기반 심리치료, 12단계는 자조·동료지지 기반 회복 프로그램",
      "key_point": "완전한 단주(abstinence)를 목표로 하며, '절주(controlled drinking)'는 인정하지 않음",
      "common_mistake": "12단계 프로그램이 종교적이라는 오해 — '영적(spiritual)'이지 특정 종교를 강요하지 않음"
    }
  },
  {
    "id": "SUBST_CBT_023",
    "terminology": "인지행동치료 (Cognitive-Behavioral Therapy for Substance Use)",
    "terminology_ko": "인지행동치료",
    "terminology_en": "Cognitive-Behavioral Therapy for Substance Use",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질사용장애에 적용되는 인지행동치료로, 물질 사용과 관련된 역기능적 사고와 행동 패턴을 수정하고, 대처 기술을 훈련하며, 고위험 상황을 관리하는 능력을 강화한다.",
    "definition_en": "Cognitive-behavioral therapy applied to substance use disorders that modifies dysfunctional thought and behavior patterns related to substance use, trains coping skills, and enhances high-risk situation management.",
    "significance": "물질사용장애에 대한 가장 넓은 근거 기반을 가진 심리치료로, 재발방지모형과 결합하여 장기적 회복을 지원한다.",
    "key_researchers": [
      {
        "name_ko": "캐슬린 캐롤",
        "name_en": "Kathleen Carroll",
        "contribution": "코카인 사용장애에 대한 CBT 매뉴얼을 개발하고 RCT를 통한 효과를 입증"
      },
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "물질 남용에 대한 인지치료 모형을 제안하고 관련 치료 매뉴얼을 저술"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "재발방지모형",
        "name_en": "Relapse Prevention Model",
        "id": "SUBST_RPM_024"
      },
      {
        "name_ko": "동기강화상담",
        "name_en": "Motivational Interviewing",
        "id": "SUBST_MIA_021"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "기능분석",
        "description": "물질 사용의 선행요인, 행동, 결과를 분석"
      },
      {
        "name": "대처기술훈련",
        "description": "고위험 상황에서 물질 대신 사용할 적응적 전략 학습"
      },
      {
        "name": "인지 재구조화",
        "description": "물질 사용을 허용하는 사고(permissive thoughts)에 도전"
      }
    ],
    "quiz_hints": {
      "mnemonic": "중독 CBT의 3요소: 기능분석 + 대처기술훈련 + 인지재구조화",
      "differential": "MI는 동기 형성 단계, CBT는 실제 행동 변화와 기술 습득 단계",
      "key_point": "허용적 인지('한 잔 정도는 괜찮아')에 대한 인지 재구조화가 핵심",
      "common_mistake": "CBT만으로 충분하다는 오해 — MI, 약물치료, 사회적 지지와 병행이 가장 효과적"
    }
  },
  {
    "id": "SUBST_RPM_024",
    "terminology": "재발방지모형 (Relapse Prevention Model)",
    "terminology_ko": "재발방지모형",
    "terminology_en": "Relapse Prevention Model",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "중독 재발을 고위험 상황, 대처 반응 부재, 자기효능감 저하, 금욕위반효과(abstinence violation effect)의 연쇄로 설명하는 인지행동적 모형으로, 재발을 예방하고 관리하는 구체적 전략을 제공한다.",
    "definition_en": "A cognitive-behavioral model explaining addiction relapse as a chain of high-risk situations, inadequate coping, decreased self-efficacy, and the abstinence violation effect, providing specific strategies for relapse prevention and management.",
    "significance": "재발을 실패가 아닌 학습 기회로 재개념화하여 중독 치료의 패러다임을 전환하였다.",
    "key_researchers": [
      {
        "name_ko": "앨런 말랫",
        "name_en": "G. Alan Marlatt",
        "contribution": "재발방지모형(RP)을 개발하고 금욕위반효과(AVE) 개념을 제시하여 중독 치료를 혁신"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지행동치료",
        "name_en": "CBT for Substance Use",
        "id": "SUBST_CBT_023"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재발 연쇄: 고위험 상황 → 대처 실패 → 자기효능감↓ → 일회 사용(lapse) → AVE → 재발(relapse)",
      "differential": "12단계(단주 실패=재발)와 달리 RP모형은 일회성 실수(lapse)와 완전 재발(relapse)을 구분",
      "key_point": "금욕위반효과(AVE): '한 번 마셨으니 끝장이다'라는 전부-아니면-전무 사고가 재발을 가속화",
      "common_mistake": "재발이 치료 실패를 의미한다고 생각 — RP 모형에서는 재발이 학습과 성장의 기회"
    }
  },
  {
    "id": "SUBST_MAT_025",
    "terminology": "약물보조치료 (Medication-Assisted Treatment, MAT)",
    "terminology_ko": "약물보조치료",
    "terminology_en": "Medication-Assisted Treatment",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "약물(메타돈, 부프레노르핀, 날트렉손 등)을 심리사회적 치료와 병행하여 물질사용장애를 치료하는 통합적 접근으로, 갈망 감소, 금단 방지, 재발 예방 효과가 입증되었다.",
    "definition_en": "An integrated approach combining medications (methadone, buprenorphine, naltrexone) with psychosocial treatment for substance use disorders, with demonstrated effects on craving reduction, withdrawal prevention, and relapse prevention.",
    "significance": "오피오이드 사용장애 치료의 금본위(gold standard)이며, 사망률을 유의하게 감소시키는 근거기반 치료이다.",
    "key_researchers": [
      {
        "name_ko": "빈센트 돌",
        "name_en": "Vincent Dole",
        "contribution": "메타돈 유지 치료(MMT)를 개발하여 오피오이드 의존의 약물 치료 시대를 개척"
      },
      {
        "name_ko": "마리 니스원더",
        "name_en": "Marie Nyswander",
        "contribution": "돌과 함께 메타돈 유지 치료의 효과를 최초로 체계적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "오피오이드 사용장애",
        "name_en": "Opioid Use Disorder",
        "id": "SUBST_OPI_003"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      },
      {
        "name_ko": "해독",
        "name_en": "Detoxification",
        "id": "SUBST_DET_026"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      }
    ],
    "sub_types": [
      {
        "name": "메타돈(Methadone)",
        "description": "장시간 작용 오피오이드 효현제, 금단 예방과 갈망 감소"
      },
      {
        "name": "부프레노르핀(Buprenorphine)",
        "description": "부분 효현제, 메타돈보다 과량 위험 낮음"
      },
      {
        "name": "날트렉손(Naltrexone)",
        "description": "오피오이드 길항제, 알코올 의존에도 사용"
      },
      {
        "name": "디설피람(Disulfiram)",
        "description": "알코올 대사를 차단하여 음주 시 불쾌 반응 유발 (혐오요법)"
      },
      {
        "name": "아캄프로세이트(Acamprosate)",
        "description": "글루타메이트 조절, 알코올 갈망 감소"
      }
    ],
    "quiz_hints": {
      "mnemonic": "오피오이드 MAT: 메타돈(효현제)+부프레노르핀(부분효현제)+날트렉손(길항제)",
      "differential": "메타돈(완전효현, 의존 유지)과 날트렉손(길항, 차단)은 정반대 기제",
      "key_point": "MAT + 심리사회적 치료의 병행이 가장 효과적이며, 약물만 단독 사용은 권장되지 않음",
      "common_mistake": "'약물로 약물 치료'하는 것이 '중독 대체'라는 오해 — MAT는 근거기반 치료"
    }
  },
  {
    "id": "SUBST_DET_026",
    "terminology": "해독 (Detoxification)",
    "terminology_ko": "해독",
    "terminology_en": "Detoxification",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질 사용을 안전하게 중단하면서 금단 증상을 의학적으로 관리하는 과정으로, 치료의 시작 단계이지 치료 자체는 아니며, 알코올과 벤조디아제핀 해독은 생명을 위협하는 금단을 예방하기 위해 의료적 관리가 필수적이다.",
    "definition_en": "The process of safely discontinuing substance use while medically managing withdrawal symptoms, the beginning stage of treatment but not treatment itself, with medical supervision essential for alcohol and benzodiazepine detox to prevent life-threatening withdrawal.",
    "significance": "안전한 금단 관리를 통해 이후 본격적 치료(심리치료, MAT)에 참여할 수 있는 기반을 마련하는 필수적 첫 단계이다.",
    "key_researchers": [
      {
        "name_ko": "제롬 제피",
        "name_en": "Jerome Jaffe",
        "contribution": "미국 최초의 마약 정책 책임자로서 해독과 메타돈 치료의 체계적 도입에 기여"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      },
      {
        "name_ko": "약물보조치료",
        "name_en": "Medication-Assisted Treatment",
        "id": "SUBST_MAT_025"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      }
    ],
    "sub_types": [
      {
        "name": "의학적 해독(Medical Detox)",
        "description": "입원 또는 외래에서 약물을 이용한 금단 관리"
      },
      {
        "name": "사회적 해독(Social Detox)",
        "description": "약물 없이 지지적 환경에서 금단 관리 (경증에 적합)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "해독 = 치료의 '입구(gate)'이지 '출구(goal)'가 아님",
      "differential": "해독은 신체적 안정화, 재활은 심리사회적 회복 — 해독만으로는 재발 방지 불가",
      "key_point": "해독 후 지속적 치료 없이 방치하면 재발률이 매우 높음",
      "common_mistake": "해독만 하면 치료가 끝났다는 오해 — 해독은 시작일 뿐, 이후 장기 치료가 필수"
    }
  },
  {
    "id": "SUBST_MVA_027",
    "terminology": "절주 vs 단주 (Moderation vs Abstinence)",
    "terminology_ko": "절주 vs 단주",
    "terminology_en": "Moderation vs Abstinence",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "중독 회복의 목표를 완전한 물질 중단(단주/abstinence)으로 할 것인지, 통제된 사용(절주/moderation)으로 할 것인지에 대한 논쟁으로, 전통적 접근(AA)은 단주를, 일부 근거기반 접근은 절주를 대안으로 제시한다.",
    "definition_en": "A debate on whether addiction recovery should aim for complete substance cessation (abstinence) or controlled use (moderation), with traditional approaches (AA) advocating abstinence while some evidence-based approaches offer moderation as an alternative.",
    "significance": "중독 치료의 목표 설정에 관한 근본적 논쟁으로, 환자의 동기와 치료 참여에 중요한 함의를 가진다.",
    "key_researchers": [
      {
        "name_ko": "마크 소벨",
        "name_en": "Mark Sobell",
        "contribution": "통제 음주(controlled drinking)가 일부 알코올 문제 환자에게 가능한 목표임을 연구"
      },
      {
        "name_ko": "린다 소벨",
        "name_en": "Linda Sobell",
        "contribution": "마크 소벨과 함께 행동적 자기통제 훈련(BSCT) 프로그램 개발"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "12단계 프로그램",
        "name_en": "12-Step Program",
        "id": "SUBST_TSP_022"
      },
      {
        "name_ko": "동기강화상담",
        "name_en": "Motivational Interviewing",
        "id": "SUBST_MIA_021"
      },
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "단주(abstinence) = '한 잔도 안 됨' vs 절주(moderation) = '통제된 양만'",
      "differential": "AA/12단계는 무조건 단주, 행동적 접근은 경증에서 절주 가능성 인정",
      "key_point": "중증 알코올 사용장애에는 단주가 권장되나, 경증에는 절주도 현실적 목표가 될 수 있음",
      "common_mistake": "절주가 모든 알코올 문제에 적용 가능하다는 오해 — 중증에서는 단주가 적절"
    }
  },
  {
    "id": "SUBST_DUL_028",
    "terminology": "이중진단/공병 (Dual Diagnosis/Comorbidity)",
    "terminology_ko": "이중진단/공병",
    "terminology_en": "Dual Diagnosis/Comorbidity",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질사용장애와 다른 정신장애(우울증, 불안장애, PTSD, 조현병 등)가 동시에 존재하는 상태로, 각 장애가 서로를 악화시키며 통합적 치료가 필수적이다.",
    "definition_en": "The co-occurrence of a substance use disorder with another mental disorder (depression, anxiety, PTSD, schizophrenia), where each disorder worsens the other, requiring integrated treatment.",
    "significance": "물질사용장애 환자의 약 50%가 다른 정신장애를 동반하며, 통합 치료 없이는 양쪽 모두의 예후가 불량하다.",
    "key_researchers": [
      {
        "name_ko": "대럴 레지에",
        "name_en": "Darrel Regier",
        "contribution": "ECA 연구(Epidemiologic Catchment Area)를 통해 물질사용-정신장애 동반이환율을 대규모로 규명"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "자기치료(Self-Medication)",
        "description": "정신장애 증상 완화를 위해 물질을 사용하는 경우"
      },
      {
        "name": "물질유발성(Substance-Induced)",
        "description": "물질 사용이 정신장애 증상을 유발하는 경우"
      },
      {
        "name": "공통 원인(Common Cause)",
        "description": "유전·환경 요인이 두 장애 모두의 원인인 경우"
      }
    ],
    "quiz_hints": {
      "mnemonic": "이중진단 = 물질 + 정신 = 두 가지 진단이 동시에",
      "differential": "물질유발성 정신장애(물질이 원인)와 독립적 정신장애+물질사용장애(공존)를 구분 필요",
      "key_point": "순차적 치료(한 장애 먼저)보다 통합적 치료(두 장애 동시에)가 더 효과적",
      "common_mistake": "물질 문제를 먼저 해결한 후 정신장애를 치료해야 한다는 오해 — 통합적 동시 치료가 권장"
    }
  },
  {
    "id": "SUBST_FAS_029",
    "terminology": "태아알코올스펙트럼장애 (Fetal Alcohol Spectrum Disorder, FASD)",
    "terminology_ko": "태아알코올스펙트럼장애",
    "terminology_en": "Fetal Alcohol Spectrum Disorder",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "임신 중 알코올 노출로 인한 선천적 장애의 스펙트럼으로, 특징적 안면 이형(짧은 안검열, 평탄한 인중, 얇은 상순), 성장 지연, 중추신경계 이상(지적 장애, ADHD, 학습장애)을 포함한다.",
    "definition_en": "A spectrum of congenital disorders caused by prenatal alcohol exposure, including characteristic facial dysmorphology (short palpebral fissures, smooth philtrum, thin upper lip), growth retardation, and CNS abnormalities (intellectual disability, ADHD, learning disabilities).",
    "significance": "완전히 예방 가능한(100% preventable) 선천적 지적 장애의 주요 원인으로, 임신 중 음주의 위험성을 알리는 공중보건적 중요성이 크다.",
    "key_researchers": [
      {
        "name_ko": "케네스 존스",
        "name_en": "Kenneth Jones",
        "contribution": "1973년 태아알코올증후군(FAS)을 최초로 공식 기술하고 명명"
      },
      {
        "name_ko": "데이비드 스미스",
        "name_en": "David Smith",
        "contribution": "존스와 함께 FAS의 특징적 안면 이형과 발달 이상을 체계적으로 보고"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알코올 사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_002"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "태아알코올증후군(FAS)",
        "description": "가장 심한 형태 — 안면이형+성장지연+CNS 이상 모두 존재"
      },
      {
        "name": "부분 FAS(pFAS)",
        "description": "일부 안면 특징과 CNS 이상"
      },
      {
        "name": "알코올 관련 신경발달장애(ARND)",
        "description": "안면 이형 없이 CNS/행동 이상만 존재"
      }
    ],
    "quiz_hints": {
      "mnemonic": "FASD의 3대 특징: 안면이형(Face) + 성장지연(Growth) + 뇌손상(Brain) = FGB",
      "differential": "다른 유전 증후군(다운증후군, 윌리엄스증후군)과의 안면 특징 감별이 필요",
      "key_point": "임신 중 '안전한 음주량'은 없으며, 100% 예방 가능한 장애",
      "common_mistake": "'소량의 음주는 안전하다'는 오해 — 안전한 최소 음주량은 확립되지 않았음"
    }
  },
  {
    "id": "SUBST_SID_030",
    "terminology": "물질유발성 장애 (Substance-Induced Disorders)",
    "terminology_ko": "물질유발성 장애",
    "terminology_en": "Substance-Induced Disorders",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질의 중독(intoxication) 또는 금단(withdrawal) 중에 나타나는 정신과적 증상(정신병, 우울, 불안 등)으로, 독립적 정신장애와 감별이 필요하며, 물질 중단 후 보통 1개월 내에 소실된다.",
    "definition_en": "Psychiatric symptoms (psychosis, depression, anxiety) occurring during substance intoxication or withdrawal, requiring differentiation from independent mental disorders, and typically resolving within one month of substance cessation.",
    "significance": "물질이 정신증상을 직접 유발할 수 있음을 보여주며, 정확한 진단을 위해 물질 사용력의 철저한 평가가 필수적임을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "마이클 퍼스트",
        "name_en": "Michael First",
        "contribution": "DSM 체계에서 물질유발성 장애와 독립적 정신장애의 감별 기준을 정교화"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      },
      {
        "name_ko": "이중진단",
        "name_en": "Dual Diagnosis",
        "id": "SUBST_DUL_028"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCZ_001"
      }
    ],
    "sub_types": [
      {
        "name": "물질유발 정신병적 장애",
        "description": "코카인, 암페타민, 대마 등에 의한 환각·망상"
      },
      {
        "name": "물질유발 우울장애",
        "description": "알코올, 각성제 금단 시의 우울 증상"
      },
      {
        "name": "물질유발 불안장애",
        "description": "카페인, 각성제, 대마 등에 의한 불안 증상"
      },
      {
        "name": "물질중독 섬망",
        "description": "물질 중독 시 나타나는 의식 변화와 인지 장해"
      }
    ],
    "quiz_hints": {
      "mnemonic": "물질유발 = 물질이 '원인', 물질 중단 후 보통 1개월 내 소실",
      "differential": "독립적 정신장애는 물질 중단 후에도 지속, 물질유발성 장애는 1개월 내 소실",
      "key_point": "시간적 관계가 감별의 핵심 — 물질 사용 시작 전부터 증상이 있었는지가 중요",
      "common_mistake": "물질유발 정신병을 조현병으로 오진하는 오류 — 약물 선별검사와 시간적 관계 확인 필수"
    }
  },
  {
    "id": "SUBST_PHR_031",
    "terminology": "약물의 약리학적 작용 (Pharmacological Actions of Drugs)",
    "terminology_ko": "약물의 약리학적 작용",
    "terminology_en": "Pharmacological Actions of Drugs",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "남용 물질이 뇌의 신경전달물질 체계에 미치는 약리학적 효과로, 도파민(보상), GABA(억제), 글루타메이트(흥분), 세로토닌(기분), 오피오이드(통증/쾌감) 수용체 등에 대한 효현(agonist), 길항(antagonist), 재흡수 차단, 방출 촉진 등의 기제를 포함한다.",
    "definition_en": "The pharmacological effects of abused substances on brain neurotransmitter systems, including agonist, antagonist, reuptake inhibition, and release facilitation mechanisms on dopamine (reward), GABA (inhibition), glutamate (excitation), serotonin (mood), and opioid (pain/pleasure) receptors.",
    "significance": "각 물질의 작용 기제를 이해하면 중독의 신경생물학, 치료 약물의 기제, 교차내성과 약물 상호작용을 통합적으로 이해할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "솔로몬 스나이더",
        "name_en": "Solomon Snyder",
        "contribution": "오피오이드 수용체를 최초로 확인하고 신경전달물질 수용체 연구의 기초를 마련"
      },
      {
        "name_ko": "캔더스 퍼트",
        "name_en": "Candace Pert",
        "contribution": "스나이더와 함께 오피오이드 수용체의 존재를 실험적으로 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_010"
      },
      {
        "name_ko": "교차내성",
        "name_en": "Cross-Tolerance",
        "id": "SUBST_CRT_013"
      },
      {
        "name_ko": "도파민 가설",
        "name_en": "Dopamine Hypothesis",
        "id": "SCHIZO_DOP_019"
      }
    ],
    "sub_types": [
      {
        "name": "효현제(Agonist)",
        "description": "수용체에 결합하여 자연 신경전달물질의 효과를 모방"
      },
      {
        "name": "길항제(Antagonist)",
        "description": "수용체에 결합하나 효과를 차단 (예: 날트렉손)"
      },
      {
        "name": "재흡수 억제제",
        "description": "시냅스에서 신경전달물질의 재흡수를 차단 (예: 코카인)"
      },
      {
        "name": "방출 촉진제",
        "description": "시냅스 전 뉴런에서 신경전달물질 방출을 증가 (예: 암페타민)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "주요 약물-수용체 대응: 알코올=GABA↑, 코카인=DA재흡수↓, 암페타민=DA방출↑, 오피오이드=μ수용체, 대마=CB1, 니코틴=nAChR",
      "differential": "효현제(활성화)와 길항제(차단)는 정반대 작용 — 헤로인(효현)과 날트렉손(길항)이 예시",
      "key_point": "모든 남용 물질의 최종 공통 경로(final common pathway)는 보상회로의 도파민 증가",
      "common_mistake": "각 물질이 완전히 다른 기제로 작용한다고 오해 — 최종 경로는 도파민 보상회로로 수렴"
    }
  },
  {
    "id": "SUBST_RNF_032",
    "terminology": "강화와 중독 (Reinforcement and Addiction)",
    "terminology_ko": "강화와 중독",
    "terminology_en": "Reinforcement and Addiction",
    "category": "SUBST",
    "category_name": "물질관련 및 중독 장애 (Substance and Addictive Disorders)",
    "definition": "물질 사용이 정적 강화(쾌감 획득)와 부적 강화(불쾌 제거)를 통해 반복·유지되는 학습 기제로, 중독의 초기에는 정적 강화가, 만성기에는 금단 회피를 위한 부적 강화가 주요 동력이 된다.",
    "definition_en": "A learning mechanism where substance use is repeated and maintained through positive reinforcement (pleasure acquisition) and negative reinforcement (distress removal), with positive reinforcement dominant early and negative reinforcement (withdrawal avoidance) dominant in chronic addiction.",
    "significance": "행동주의적 관점에서 중독의 발달과 유지를 설명하며, 코브의 3단계 순환 모형의 이론적 기반이 된다.",
    "key_researchers": [
      {
        "name_ko": "조지 코브",
        "name_en": "George Koob",
        "contribution": "정적 강화에서 부적 강화로의 전환이 중독의 만성화 핵심 기제임을 이론화"
      },
      {
        "name_ko": "로이 와이즈",
        "name_en": "Roy Wise",
        "contribution": "약물의 정적 강화 효과가 도파민 보상계를 통해 매개됨을 입증"
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상회로",
        "name_en": "Reward Circuit",
        "id": "SUBST_RWC_017"
      },
      {
        "name_ko": "갈망",
        "name_en": "Craving",
        "id": "SUBST_CRV_012"
      },
      {
        "name_ko": "금단",
        "name_en": "Withdrawal",
        "id": "SUBST_WDR_011"
      },
      {
        "name_ko": "물질사용장애",
        "name_en": "Substance Use Disorder",
        "id": "SUBST_SUD_001"
      }
    ],
    "sub_types": [
      {
        "name": "정적 강화(Positive Reinforcement)",
        "description": "쾌감·흥분 획득으로 물질 사용이 증가"
      },
      {
        "name": "부적 강화(Negative Reinforcement)",
        "description": "금단·불쾌감 제거로 물질 사용이 증가"
      }
    ],
    "quiz_hints": {
      "mnemonic": "초기 = 정적 강화(쾌감 추구), 만성기 = 부적 강화(고통 회피), 전환이 핵심",
      "differential": "정적 강화는 '좋은 것을 추가', 부적 강화는 '나쁜 것을 제거' — 처벌이 아님",
      "key_point": "중독이 진행될수록 쾌감은 감소하고 금단 회피(부적 강화)가 주된 사용 동기가 됨",
      "common_mistake": "부적 강화를 '처벌'로 오해 — 부적 강화는 불쾌한 자극의 '제거'로 행동을 증가시킴"
    }
  }
];

TERMS_DATA.SOMDIS = [
  {
    "id": "SOMDIS_SSD_001",
    "terminology": "신체증상장애 (Somatic Symptom Disorder)",
    "terminology_ko": "신체증상장애",
    "terminology_en": "Somatic Symptom Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "하나 이상의 고통스러운 신체 증상이 존재하며, 그 증상에 대한 과도한 사고, 감정, 행동이 동반되어 일상 기능에 심각한 지장을 초래하는 장애로, DSM-5에서 기존 신체화장애를 대체한 진단이다.",
    "definition_en": "A disorder characterized by one or more distressing somatic symptoms accompanied by excessive thoughts, feelings, or behaviors related to those symptoms, causing significant disruption to daily functioning. It replaced somatization disorder in DSM-5.",
    "significance": "의학적으로 설명되지 않는 신체 증상에 대한 심리학적 이해의 핵심 진단으로, 심신 상호작용과 의료 이용 패턴 연구에 중요한 위치를 차지한다.",
    "key_researchers": [
      {
        "name_ko": "아서 바스키",
        "name_en": "Arthur Barsky",
        "contribution": "신체감각 증폭(somatosensory amplification) 개념을 제안하여 신체증상장애의 인지적 메커니즘을 설명했다."
      },
      {
        "name_ko": "로버트 켈너",
        "name_en": "Robert Kellner",
        "contribution": "신체화와 건강염려증의 체계적 연구를 수행하고 치료적 접근법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "질병불안장애",
        "name_en": "Illness Anxiety Disorder",
        "id": "SOMDIS_IAD_002"
      },
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "알렉시서미아",
        "name_en": "Alexithymia",
        "id": "SOMDIS_ALX_015"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "통증이 우세한 경우",
        "description": "신체 증상이 주로 통증으로 나타나는 양상"
      },
      {
        "name": "지속적 경우",
        "description": "증상이 6개월 이상 지속되는 양상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "SSD = Somatic(신체) + Symptom(증상) + Disorder(장애) — 증상 자체보다 '증상에 대한 과도한 반응'이 핵심",
      "differential": "신체증상장애는 실제 신체 증상이 있고 그에 대한 과도한 반응이 특징인 반면, 질병불안장애는 신체 증상이 경미하거나 없는데도 심각한 질병에 대한 불안이 핵심이다.",
      "key_point": "DSM-5에서 '의학적으로 설명 불가능'이라는 기준을 제거하고, 증상에 대한 과도한 심리적 반응을 진단의 핵심으로 전환했다.",
      "common_mistake": "신체증상장애 환자가 꾀병을 부린다고 오해하지만, 이들의 고통은 진실하며 의도적으로 증상을 만들어내는 것이 아니다."
    }
  },
  {
    "id": "SOMDIS_IAD_002",
    "terminology": "질병불안장애 (Illness Anxiety Disorder)",
    "terminology_ko": "질병불안장애",
    "terminology_en": "Illness Anxiety Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "심각한 질병에 걸렸거나 걸릴 것이라는 과도한 불안과 걱정이 지속되며, 신체 증상이 경미하거나 존재하지 않음에도 건강에 대한 과도한 집착과 행동을 보이는 장애이다.",
    "definition_en": "A disorder characterized by persistent excessive anxiety and preoccupation about having or acquiring a serious illness, despite minimal or absent somatic symptoms, accompanied by excessive health-related behaviors.",
    "significance": "기존의 건강염려증(hypochondriasis) 개념을 재구성한 진단으로, 건강 불안의 인지-행동적 모형 발전에 기여했다.",
    "key_researchers": [
      {
        "name_ko": "힐러리 와렉",
        "name_en": "Hilary Warwick",
        "contribution": "건강 불안의 인지행동 모형을 개발하고 CBT 치료 프로토콜을 체계화했다."
      },
      {
        "name_ko": "폴 살코브스키스",
        "name_en": "Paul Salkovskis",
        "contribution": "건강 불안에서 안전추구행동과 재확인추구의 역할을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "히포콘드리아시스",
        "name_en": "Hypochondriasis",
        "id": "SOMDIS_HYP_017"
      },
      {
        "name_ko": "범불안장애",
        "name_en": "Generalized Anxiety Disorder",
        "id": "ANXIETY_GAD_001"
      }
    ],
    "sub_types": [
      {
        "name": "의료추구형",
        "description": "빈번하게 의료기관을 방문하고 검사를 받으려는 유형"
      },
      {
        "name": "의료회피형",
        "description": "두려움으로 인해 의료기관 방문을 피하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "IAD = Illness(질병) + Anxiety(불안) + Disorder(장애) — '증상 없는 질병 공포'",
      "differential": "질병불안장애는 신체 증상이 거의 없는데 질병 자체에 대한 불안이 핵심이고, 신체증상장애는 실제 신체 증상이 있고 그에 대한 과도한 반응이 핵심이다.",
      "key_point": "DSM-5에서 건강염려증(hypochondriasis)을 폐지하고 질병불안장애와 신체증상장애로 재분류했다.",
      "common_mistake": "질병불안장애를 단순한 '걱정'으로 가볍게 여기지만, 심각한 기능 손상과 의료 자원 과다 이용을 초래할 수 있다."
    }
  },
  {
    "id": "SOMDIS_CVD_003",
    "terminology": "전환장애 (Conversion Disorder)",
    "terminology_ko": "전환장애",
    "terminology_en": "Conversion Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "수의적 운동 또는 감각 기능에 영향을 미치는 하나 이상의 증상이 신경학적 또는 기타 의학적 질환과 부합하지 않으며, 심리적 갈등이나 스트레스와 관련된 기능적 신경학적 증상장애이다.",
    "definition_en": "A disorder involving one or more symptoms affecting voluntary motor or sensory function that are incompatible with recognized neurological or medical conditions, also known as Functional Neurological Symptom Disorder.",
    "significance": "프로이트의 히스테리 연구에서 시작된 역사적 진단으로, 심리적 갈등이 신체 증상으로 전환되는 과정에 대한 이해를 발전시켰다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "히스테리(전환장애)를 무의식적 갈등의 신체적 표현으로 해석하고 '전환(conversion)' 용어를 만들었다."
      },
      {
        "name_ko": "장 마르탱 샤르코",
        "name_en": "Jean-Martin Charcot",
        "contribution": "살페트리에르 병원에서 히스테리의 체계적 임상 연구를 수행하고 최면과의 관계를 연구했다."
      },
      {
        "name_ko": "조지프 브로이어",
        "name_en": "Josef Breuer",
        "contribution": "안나 O 사례를 통해 카타르시스 기법을 개발하고 히스테리의 심리학적 치료를 개척했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "라벨 무관심",
        "name_en": "La Belle Indifférence",
        "id": "SOMDIS_LBI_012"
      },
      {
        "name_ko": "심인성 비간질 발작",
        "name_en": "Psychogenic Non-Epileptic Seizures",
        "id": "SOMDIS_PNS_020"
      },
      {
        "name_ko": "일차적 이득",
        "name_en": "Primary Gain",
        "id": "SOMDIS_PGN_014"
      },
      {
        "name_ko": "정신분석모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_003"
      }
    ],
    "sub_types": [
      {
        "name": "운동 증상형",
        "description": "마비, 근력 약화, 비정상적 운동 등"
      },
      {
        "name": "감각 증상형",
        "description": "시력 상실, 청력 상실, 감각 이상 등"
      },
      {
        "name": "발작형",
        "description": "심인성 비간질 발작"
      },
      {
        "name": "혼합형",
        "description": "운동, 감각, 발작 증상이 복합적으로 나타남"
      }
    ],
    "quiz_hints": {
      "mnemonic": "전환(Conversion) = 심리적 갈등 → 신체 증상으로 '전환' — 프로이트가 명명",
      "differential": "전환장애는 신경학적 증상(마비, 시력상실 등)이 의학적 소견과 불일치하는 것이 특징이고, 신체증상장애는 실제 신체 증상에 대한 과도한 심리적 반응이 특징이다.",
      "key_point": "DSM-5에서 '기능적 신경학적 증상장애(Functional Neurological Symptom Disorder)'로 부제를 추가하여 심리적 원인을 전제하지 않는 방향으로 변화했다.",
      "common_mistake": "전환장애 환자가 의도적으로 증상을 만든다고 생각하지만, 꾀병(malingering)과 달리 증상은 무의식적으로 발생한다."
    }
  },
  {
    "id": "SOMDIS_FCD_004",
    "terminology": "인위성장애 (Factitious Disorder)",
    "terminology_ko": "인위성장애",
    "terminology_en": "Factitious Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "명백한 외적 보상 없이 환자 역할을 하려는 동기에서 의도적으로 신체적 또는 심리적 증상을 만들어내거나 가장하는 장애로, 이전에 뮌하우젠 증후군으로 알려져 있었다.",
    "definition_en": "A disorder in which an individual intentionally produces or feigns physical or psychological symptoms, motivated by the desire to assume the sick role rather than by external rewards, formerly known as Munchausen syndrome.",
    "significance": "의도적 기만과 질병 행동의 경계에 위치한 독특한 진단으로, 환자 역할에 대한 심리적 동기와 의료 체계 내 기만적 행동의 이해에 중요하다.",
    "key_researchers": [
      {
        "name_ko": "리처드 애셔",
        "name_en": "Richard Asher",
        "contribution": "1951년 뮌하우젠 증후군(Munchausen syndrome)을 최초로 기술하여 인위성장애의 개념적 기틀을 마련했다."
      },
      {
        "name_ko": "마크 펠드먼",
        "name_en": "Marc Feldman",
        "contribution": "인위성장애와 인터넷 기반 뮌하우젠(Munchausen by Internet)에 대한 포괄적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "타인에게 부과된 인위성장애",
        "name_en": "Factitious Disorder Imposed on Another",
        "id": "SOMDIS_FCA_005"
      },
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      },
      {
        "name_ko": "환자역할",
        "name_en": "Sick Role",
        "id": "SOMDIS_SRL_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인위성(Factitious) = '만들어낸(fabricated)' 증상 — 외적 보상 없이 환자 역할 자체가 목적",
      "differential": "인위성장애는 환자 역할 자체가 동기인 반면, 꾀병(malingering)은 금전적·법적 이득 등 외적 보상이 동기이다.",
      "key_point": "DSM-5에서는 인위성장애를 신체증상 관련 장애 범주에 포함시키며, 의도적 증상 생성이 핵심 특징이다.",
      "common_mistake": "인위성장애를 꾀병과 혼동하지만, 인위성장애의 동기는 외적 보상이 아닌 환자 역할 수행 자체에 있다."
    }
  },
  {
    "id": "SOMDIS_FCA_005",
    "terminology": "타인에게 부과된 인위성장애 (Factitious Disorder Imposed on Another)",
    "terminology_ko": "타인에게 부과된 인위성장애",
    "terminology_en": "Factitious Disorder Imposed on Another",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "돌보는 사람이 의도적으로 다른 사람(주로 자녀)에게 신체적 또는 심리적 증상을 유발하거나 가장하여 대리인을 통한 환자 역할을 수행하는 장애로, 이전에 대리 뮌하우젠 증후군으로 불렸다.",
    "definition_en": "A disorder in which a caregiver intentionally produces or feigns physical or psychological symptoms in another person (typically a child), performing the sick role through a proxy, formerly known as Munchausen syndrome by proxy.",
    "significance": "아동 학대의 특수한 형태로서 법적·윤리적 함의가 크며, 의료 체계 내에서 발견과 개입이 어려운 독특한 형태의 학대이다.",
    "key_researchers": [
      {
        "name_ko": "로이 메도우",
        "name_en": "Roy Meadow",
        "contribution": "1977년 대리 뮌하우젠 증후군(Munchausen syndrome by proxy)을 최초로 기술하여 이 장애의 임상적 인식을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인위성장애",
        "name_en": "Factitious Disorder",
        "id": "SOMDIS_FCD_004"
      },
      {
        "name_ko": "의도적 증상 생성",
        "name_en": "Intentional Symptom Production",
        "id": "SOMDIS_ISP_021"
      },
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FDIA = Factitious Disorder Imposed on Another — '대리(by proxy)' 뮌하우젠, 가해자는 돌보는 사람",
      "differential": "인위성장애는 자기 자신에게 증상을 만들어내지만, 타인에게 부과된 인위성장애는 다른 사람(주로 자녀)에게 증상을 유발한다.",
      "key_point": "DSM-5에서 진단은 가해자(돌보는 사람)에게 부여되며, 피해자가 아닌 가해자가 진단의 대상이다.",
      "common_mistake": "이 진단이 피해자에게 부여된다고 오해하지만, 실제로는 증상을 유발하는 가해자(돌보는 사람)에게 부여된다."
    }
  },
  {
    "id": "SOMDIS_MAL_006",
    "terminology": "꾀병 (Malingering)",
    "terminology_ko": "꾀병",
    "terminology_en": "Malingering",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "금전적 보상, 병역 회피, 법적 책임 면제 등 명확한 외적 동기에 의해 의도적으로 신체적 또는 심리적 증상을 가장하거나 과장하는 행위로, 정신장애가 아닌 V코드(임상적 주의가 필요한 상태)로 분류된다.",
    "definition_en": "The intentional production or feigning of physical or psychological symptoms motivated by clear external incentives such as financial compensation, avoidance of military service, or legal liability exemption, classified as a V-code rather than a mental disorder.",
    "significance": "법의심리학과 임상 평가에서 중요한 개념으로, 증상 타당도 평가와 진위 감별의 필요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "리처드 로저스",
        "name_en": "Richard Rogers",
        "contribution": "꾀병 탐지를 위한 구조화된 면접도구(SIRS)를 개발하여 체계적 평가 방법론을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인위성장애",
        "name_en": "Factitious Disorder",
        "id": "SOMDIS_FCD_004"
      },
      {
        "name_ko": "증상타당도검사",
        "name_en": "Symptom Validity Test",
        "id": "SOMDIS_SVT_028"
      },
      {
        "name_ko": "이차적 이득",
        "name_en": "Secondary Gain",
        "id": "SOMDIS_SGN_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "꾀병 = '외적 보상'이 동기 — 돈, 회피, 면제 등 실질적 이득 추구",
      "differential": "꾀병은 외적 보상(돈, 법적 면제)이 동기이고, 인위성장애는 환자 역할 자체가 동기이며, 전환장애는 무의식적 과정이다.",
      "key_point": "꾀병은 정신장애가 아닌 V코드로 분류되며, 의도적이고 외적 동기가 있다는 점이 다른 신체증상 관련 장애와 구별된다.",
      "common_mistake": "꾀병을 정신장애로 분류하는 오류를 범하기 쉽지만, DSM-5에서는 정신장애가 아닌 '임상적 주의가 필요한 상태'로 분류한다."
    }
  },
  {
    "id": "SOMDIS_PFM_007",
    "terminology": "심리적 요인이 의학적 상태에 영향 (Psychological Factors Affecting Other Medical Conditions)",
    "terminology_ko": "심리적 요인이 의학적 상태에 영향",
    "terminology_en": "Psychological Factors Affecting Other Medical Conditions",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "진단받은 의학적 상태가 존재하며, 심리적 또는 행동적 요인이 그 의학적 상태의 경과, 치료, 위험 요인에 부정적 영향을 미치는 경우를 지칭하는 진단이다.",
    "definition_en": "A diagnosis applied when a medical condition is present and psychological or behavioral factors adversely affect the course, treatment, or risk factors of that medical condition.",
    "significance": "심신의학(psychosomatic medicine)의 핵심 개념으로, 심리적 요인이 실제 의학적 질환에 미치는 영향을 공식 진단으로 인정한다.",
    "key_researchers": [
      {
        "name_ko": "프란츠 알렉산더",
        "name_en": "Franz Alexander",
        "contribution": "심신의학의 선구자로서 특정 심리적 갈등이 특정 신체 질환과 연결된다는 특이성 가설을 제안했다."
      },
      {
        "name_ko": "조지 엥겔",
        "name_en": "George Engel",
        "contribution": "생물심리사회 모형을 제안하여 질병에서 심리적·사회적 요인의 역할을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "생물의학적 모형",
        "name_en": "Biomedical Model",
        "id": "FOUND_BIO_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PFAOMC = 심리적 요인 → 의학적 상태 악화 — '마음이 몸에 영향'의 공식 진단",
      "differential": "이 진단은 실제 의학적 질환이 존재하고 심리적 요인이 이를 악화시키는 경우이고, 신체증상장애는 증상에 대한 과도한 심리적 반응이 문제이다.",
      "key_point": "실제 의학적 상태가 반드시 존재해야 하며, 심리적 요인이 그 상태의 발생이 아닌 경과나 치료에 영향을 미친다는 점이 핵심이다.",
      "common_mistake": "모든 심신 관련 문제를 이 진단으로 분류하는 오류가 있으나, 의학적 상태가 확인되어야 하며 심리적 요인의 부정적 영향이 입증되어야 한다."
    }
  },
  {
    "id": "SOMDIS_DID_008",
    "terminology": "해리성 정체감장애 (Dissociative Identity Disorder)",
    "terminology_ko": "해리성 정체감장애",
    "terminology_en": "Dissociative Identity Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "두 개 이상의 구별되는 인격 상태(정체감)가 존재하며, 각 정체감이 행동, 의식, 기억, 지각, 인지, 감각-운동 기능의 통제를 번갈아 맡고, 일상적 사건에 대한 반복적 기억 공백이 동반되는 장애이다.",
    "definition_en": "A disorder characterized by the presence of two or more distinct personality states (identities) that alternately take control of behavior, consciousness, memory, perception, cognition, and sensory-motor functioning, accompanied by recurrent gaps in recall of everyday events.",
    "significance": "이상심리학에서 가장 논쟁적인 진단 중 하나로, 외상과 해리의 관계, 기억의 본질, 의식의 통합에 대한 중요한 이론적·임상적 논의를 촉발한다.",
    "key_researchers": [
      {
        "name_ko": "코넬리아 윌버",
        "name_en": "Cornelia Wilbur",
        "contribution": "시빌(Sybil) 사례의 치료자로서 다중인격장애에 대한 대중적·임상적 관심을 촉발했다."
      },
      {
        "name_ko": "리처드 클러프트",
        "name_en": "Richard Kluft",
        "contribution": "DID의 진단 기준과 치료 프로토콜을 체계화하고 자연사적 연구를 수행했다."
      },
      {
        "name_ko": "엘리자베스 호웰",
        "name_en": "Elizabeth Howell",
        "contribution": "관계적 해리 이론을 발전시켜 DID의 외상-해리 모형을 확장했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 기억상실",
        "name_en": "Dissociative Amnesia",
        "id": "SOMDIS_DAM_009"
      },
      {
        "name_ko": "해리의 연속체",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      },
      {
        "name_ko": "외상-해리 모형",
        "name_en": "Trauma-Dissociation Model",
        "id": "SOMDIS_TDM_024"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DID = Dissociative Identity Disorder — 과거 '다중인격장애(MPD)'에서 명칭 변경, '해리된 정체감'이 핵심",
      "differential": "DID는 두 개 이상의 구별되는 정체감이 교대로 나타나는 반면, 해리성 기억상실은 정체감 교대 없이 기억 공백만 나타난다.",
      "key_point": "DID의 존재 자체가 논쟁적이며, 외상-해리 모형(실제 외상의 결과)과 사회인지모형(사회적 역할 학습의 결과) 간 대립이 있다.",
      "common_mistake": "DID를 조현병과 혼동하는 경우가 많으나, 조현병은 인격 분열이 아닌 현실 접촉의 상실이 특징이다."
    }
  },
  {
    "id": "SOMDIS_DAM_009",
    "terminology": "해리성 기억상실 (Dissociative Amnesia)",
    "terminology_ko": "해리성 기억상실",
    "terminology_en": "Dissociative Amnesia",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "신경학적 또는 의학적 원인 없이 중요한 자전적 정보, 특히 외상적이거나 스트레스가 심한 사건에 대한 기억을 회상하지 못하는 장애로, 통상적인 망각으로 설명할 수 없는 수준의 기억 상실이다.",
    "definition_en": "A disorder characterized by an inability to recall important autobiographical information, typically of a traumatic or stressful nature, that is not attributable to neurological or medical conditions and is too extensive to be explained by ordinary forgetfulness.",
    "significance": "기억과 의식의 해리적 분리를 보여주는 핵심 진단으로, 외상 기억의 처리와 회복에 대한 이론적 논쟁의 중심에 있다.",
    "key_researchers": [
      {
        "name_ko": "피에르 자네",
        "name_en": "Pierre Janet",
        "contribution": "해리(dissociation) 개념을 최초로 체계화하고, 외상 경험이 의식에서 분리되는 과정을 이론화했다."
      },
      {
        "name_ko": "대니얼 섀터",
        "name_en": "Daniel Schacter",
        "contribution": "기억의 7가지 죄(Seven Sins of Memory)를 통해 해리성 기억상실의 인지적 메커니즘을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 둔주",
        "name_en": "Dissociative Fugue",
        "id": "SOMDIS_DFG_010"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      }
    ],
    "sub_types": [
      {
        "name": "국소적 기억상실",
        "description": "특정 기간의 사건을 기억하지 못함"
      },
      {
        "name": "선택적 기억상실",
        "description": "특정 기간 중 일부 사건만 기억하지 못함"
      },
      {
        "name": "전반적 기억상실",
        "description": "전체 생애 기억을 상실"
      },
      {
        "name": "체계적 기억상실",
        "description": "특정 범주의 정보만 기억하지 못함"
      },
      {
        "name": "연속적 기억상실",
        "description": "특정 시점 이후의 새로운 사건을 기억하지 못함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "해리성 기억상실 = 외상 관련 기억의 '차단' — 뇌 손상 없이 발생하는 심인성 기억 상실",
      "differential": "해리성 기억상실은 심리적 원인에 의한 기억 상실이고, 기질성 기억상실은 뇌 손상이나 신경학적 원인에 의한 것이다.",
      "key_point": "주로 외상적 사건과 관련된 자전적 기억이 선택적으로 상실되며, 절차적 기억이나 일반 지식은 보존된다.",
      "common_mistake": "해리성 기억상실과 일반적인 망각을 혼동하지만, 해리성 기억상실은 중요한 개인 정보의 광범위한 상실을 특징으로 한다."
    }
  },
  {
    "id": "SOMDIS_DFG_010",
    "terminology": "해리성 둔주 (Dissociative Fugue)",
    "terminology_ko": "해리성 둔주",
    "terminology_en": "Dissociative Fugue",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "갑자기 집이나 직장에서 예기치 않게 떠나며 자신의 과거 일부 또는 전부를 회상하지 못하고, 때로 새로운 정체감을 형성하기도 하는 해리성 기억상실의 특수한 형태이다.",
    "definition_en": "A specific form of dissociative amnesia involving sudden, unexpected travel away from home or work with inability to recall some or all of one's past, sometimes accompanied by assumption of a new identity.",
    "significance": "해리 현상의 극단적 형태로서, 정체감과 기억의 통합이 완전히 붕괴될 수 있음을 보여주는 극적인 임상 사례이다.",
    "key_researchers": [
      {
        "name_ko": "피에르 자네",
        "name_en": "Pierre Janet",
        "contribution": "해리 현상의 체계적 분류에서 둔주를 독립적 현상으로 기술한 초기 연구자이다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 기억상실",
        "name_en": "Dissociative Amnesia",
        "id": "SOMDIS_DAM_009"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "해리의 연속체",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "둔주(Fugue) = 라틴어 fuga(도주) — 기억 상실 + 갑작스러운 여행/이동",
      "differential": "해리성 둔주는 기억 상실과 함께 물리적 이동(여행)이 동반되는 반면, 단순 해리성 기억상실은 이동 없이 기억 공백만 나타난다.",
      "key_point": "DSM-5에서 독립 진단이 아닌 해리성 기억상실의 하위 명시자(specifier)로 변경되었다.",
      "common_mistake": "해리성 둔주를 의도적인 가출이나 도주와 혼동하지만, 둔주 상태에서는 의식적 계획 없이 자동적으로 이동한다."
    }
  },
  {
    "id": "SOMDIS_DPD_011",
    "terminology": "이인증/비현실감 장애 (Depersonalization/Derealization Disorder)",
    "terminology_ko": "이인증/비현실감 장애",
    "terminology_en": "Depersonalization/Derealization Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "자신의 정신 과정이나 신체에서 분리되어 외부 관찰자처럼 느끼는 이인증, 또는 주변 환경이 비현실적이거나 꿈속 같이 느껴지는 비현실감이 지속적이거나 반복적으로 경험되는 장애이다.",
    "definition_en": "A disorder characterized by persistent or recurrent experiences of depersonalization (feeling detached from one's mental processes or body as if an outside observer) or derealization (feeling that surroundings are unreal or dreamlike).",
    "significance": "해리 현상 중 가장 흔한 형태로, 정상적 해리 경험과 병적 해리의 경계를 이해하는 데 중요한 진단이다.",
    "key_researchers": [
      {
        "name_ko": "모린 시에라",
        "name_en": "Mauricio Sierra",
        "contribution": "이인증의 신경생물학적 모형을 제안하고 체계적 임상 연구를 수행했다."
      },
      {
        "name_ko": "도퓨 시멘",
        "name_en": "Daphne Simeon",
        "contribution": "이인증 장애의 역학, 신경생물학, 치료에 대한 포괄적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리의 연속체",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "공황장애",
        "name_en": "Panic Disorder",
        "id": "ANXIETY_PD_002"
      }
    ],
    "sub_types": [
      {
        "name": "이인증 우세형",
        "description": "자신에게서 분리된 느낌이 주된 증상"
      },
      {
        "name": "비현실감 우세형",
        "description": "주변 환경이 비현실적으로 느껴지는 것이 주된 증상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "이인증 = 자신으로부터 분리(de-person), 비현실감 = 현실로부터 분리(de-real)",
      "differential": "이인증/비현실감 장애에서는 현실검증력이 유지되어 '비현실적이라는 것을 안다'는 점에서 정신병적 장애와 구별된다.",
      "key_point": "이인증/비현실감 경험 자체는 일반 인구의 50%까지 보고될 정도로 흔하지만, 장애로 진단되려면 지속적이고 심각한 고통이나 기능 손상이 있어야 한다.",
      "common_mistake": "이인증을 정신병적 증상으로 오해하지만, 이 장애에서는 현실검증력이 유지된다."
    }
  },
  {
    "id": "SOMDIS_LBI_012",
    "terminology": "라벨 무관심 (La Belle Indifférence)",
    "terminology_ko": "라벨 무관심",
    "terminology_en": "La Belle Indifférence",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "심각한 신체적 증상(예: 마비, 시력 상실)에도 불구하고 이에 대해 부적절할 정도로 무관심하거나 태연한 태도를 보이는 현상으로, 전통적으로 전환장애와 연관되어 기술되었다.",
    "definition_en": "A phenomenon in which an individual shows an inappropriate lack of concern or indifference toward serious physical symptoms such as paralysis or blindness, traditionally associated with conversion disorder.",
    "significance": "전환장애의 고전적 특징으로 기술되어 왔으나, 진단적 특이성에 대한 논쟁이 있어 임상적 판단에 주의가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "히스테리 환자의 증상에 대한 무관심을 일차적 이득과 연결하여 해석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "일차적 이득",
        "name_en": "Primary Gain",
        "id": "SOMDIS_PGN_014"
      },
      {
        "name_ko": "이차적 이득",
        "name_en": "Secondary Gain",
        "id": "SOMDIS_SGN_013"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "La Belle Indifférence = '아름다운 무관심' — 심각한 증상에 대해 놀라울 정도로 태연함",
      "differential": "라벨 무관심은 전환장애에서 보이는 증상에 대한 무관심이고, 무감동(apathy)은 정서적 반응 전반의 감소이다.",
      "key_point": "전통적으로 전환장애의 특징으로 여겨졌으나, 연구에 따르면 실제 신경학적 질환 환자에서도 관찰되어 진단적 특이성이 낮다.",
      "common_mistake": "라벨 무관심이 전환장애의 필수 증상이라고 생각하지만, 모든 전환장애 환자에서 나타나는 것은 아니며 진단 기준에 포함되지 않는다."
    }
  },
  {
    "id": "SOMDIS_SGN_013",
    "terminology": "이차적 이득 (Secondary Gain)",
    "terminology_ko": "이차적 이득",
    "terminology_en": "Secondary Gain",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "질병이나 증상을 통해 얻게 되는 외적 이득으로, 타인의 관심과 동정, 책임 회피, 경제적 보상 등이 포함되며, 증상 유지에 기여할 수 있는 강화 요인이다.",
    "definition_en": "External benefits obtained through illness or symptoms, including attention and sympathy from others, avoidance of responsibilities, and financial compensation, serving as reinforcing factors that may contribute to symptom maintenance.",
    "significance": "증상의 발생이 아닌 유지와 악화를 설명하는 핵심 개념으로, 치료 계획 수립과 꾀병 감별에 중요한 고려 사항이다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "일차적 이득과 이차적 이득의 개념을 구분하여 히스테리 증상의 동기적 측면을 분석했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "일차적 이득",
        "name_en": "Primary Gain",
        "id": "SOMDIS_PGN_014"
      },
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      },
      {
        "name_ko": "환자역할",
        "name_en": "Sick Role",
        "id": "SOMDIS_SRL_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이차적 이득 = '외부'에서 오는 보상 — 관심, 동정, 보상금, 책임 면제",
      "differential": "일차적 이득은 내적 갈등 해소(무의식적)이고, 이차적 이득은 외적 보상(관심, 보상금 등)이다.",
      "key_point": "이차적 이득은 의식적일 수도 무의식적일 수도 있으며, 증상의 원인이 아닌 유지 요인으로 작용한다.",
      "common_mistake": "이차적 이득이 있다고 해서 꾀병이라고 단정하는 오류를 범하기 쉽지만, 이차적 이득은 진짜 질병에서도 나타날 수 있다."
    }
  },
  {
    "id": "SOMDIS_PGN_014",
    "terminology": "일차적 이득 (Primary Gain)",
    "terminology_ko": "일차적 이득",
    "terminology_en": "Primary Gain",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "심리적 갈등이나 불안이 신체 증상으로 전환됨으로써 내적 고통이 감소되는 무의식적 과정으로, 정신분석 이론에서 전환장애의 발생 기제를 설명하는 핵심 개념이다.",
    "definition_en": "An unconscious process in which internal distress is reduced through the conversion of psychological conflict or anxiety into somatic symptoms, serving as a key concept in psychoanalytic theory to explain the development of conversion disorder.",
    "significance": "정신분석적 관점에서 증상 형성의 동기적 측면을 설명하며, 신체 증상의 심리적 기능에 대한 이해를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "지그문트 프로이트",
        "name_en": "Sigmund Freud",
        "contribution": "히스테리에서 무의식적 갈등이 신체 증상으로 전환되어 불안이 감소되는 과정을 일차적 이득으로 개념화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이차적 이득",
        "name_en": "Secondary Gain",
        "id": "SOMDIS_SGN_013"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "정신분석모형",
        "name_en": "Psychoanalytic Model",
        "id": "FOUND_PSA_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일차적 이득 = '내부'의 갈등 해소 — 불안한 마음 → 신체 증상으로 전환 → 불안 감소",
      "differential": "일차적 이득은 무의식적 내적 갈등 해소이고, 이차적 이득은 외적 보상(관심, 동정)이다.",
      "key_point": "일차적 이득은 완전히 무의식적 과정이며, 의도적 증상 생성(꾀병, 인위성장애)과는 근본적으로 다르다.",
      "common_mistake": "일차적 이득을 의식적인 동기로 오해하지만, 이는 전적으로 무의식적 수준에서 작동하는 과정이다."
    }
  },
  {
    "id": "SOMDIS_ALX_015",
    "terminology": "알렉시서미아 (Alexithymia)",
    "terminology_ko": "알렉시서미아",
    "terminology_en": "Alexithymia",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "자신의 감정을 인식하고 언어로 표현하는 능력이 현저히 부족한 상태로, 정서적 경험과 신체 감각을 구분하기 어려워하며, 이러한 특성이 신체화 증상과 밀접하게 관련된다.",
    "definition_en": "A state characterized by marked difficulty in identifying and verbally expressing one's emotions, with trouble distinguishing emotional experiences from bodily sensations, closely related to somatization symptoms.",
    "significance": "감정 처리 능력의 결핍이 신체 증상으로의 전환과 관련되는 메커니즘을 이해하는 데 핵심적인 구성개념이다.",
    "key_researchers": [
      {
        "name_ko": "피터 시프네오스",
        "name_en": "Peter Sifneos",
        "contribution": "1972년 알렉시서미아(alexithymia) 용어를 최초로 만들고, 감정 인식 및 표현 장애를 체계적으로 기술했다."
      },
      {
        "name_ko": "그레임 테일러",
        "name_en": "Graeme Taylor",
        "contribution": "토론토 알렉시서미아 척도(TAS-20)를 개발하여 알렉시서미아의 표준적 측정 도구를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "심리적 요인이 의학적 상태에 영향",
        "name_en": "Psychological Factors Affecting Other Medical Conditions",
        "id": "SOMDIS_PFM_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Alexithymia = a(없다) + lexis(말) + thymos(감정) — '감정에 대한 말이 없는' 상태",
      "differential": "알렉시서미아는 감정 인식·표현의 어려움이고, 감정둔마(flat affect)는 감정 표현의 감소이며, 무쾌감증(anhedonia)은 즐거움 경험의 상실이다.",
      "key_point": "알렉시서미아는 독립적 진단이 아니라 성격 특질로서, 여러 정신장애와 신체 질환에서 공통적으로 관찰되는 취약 요인이다.",
      "common_mistake": "알렉시서미아를 감정이 없는 상태로 오해하지만, 실제로는 감정을 경험하되 이를 인식하고 표현하는 데 어려움이 있는 것이다."
    }
  },
  {
    "id": "SOMDIS_SOM_016",
    "terminology": "신체화 (Somatization)",
    "terminology_ko": "신체화",
    "terminology_en": "Somatization",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "심리적 고통이나 갈등이 신체적 증상으로 표현되는 과정으로, 의학적으로 충분히 설명되지 않는 다양한 신체 증상을 반복적으로 호소하는 경향을 포괄하는 광범위한 개념이다.",
    "definition_en": "The process by which psychological distress or conflict is expressed through physical symptoms, encompassing a broad tendency to repeatedly present various somatic symptoms that are not fully explained medically.",
    "significance": "심리적 고통의 신체적 표현이라는 심신 상호작용의 핵심 메커니즘으로, 문화적 맥락에서 정서 표현의 대안적 경로를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "즈비그니에프 리피도스키",
        "name_en": "Zbigniew Lipowski",
        "contribution": "신체화의 현대적 정의를 제안하고 심리적 고통의 신체적 표현으로서의 신체화 개념을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "알렉시서미아",
        "name_en": "Alexithymia",
        "id": "SOMDIS_ALX_015"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "신체화 = 마음의 고통 → 몸의 증상으로 전환 — soma(신체)로의 변환",
      "differential": "신체화는 심리적 고통이 신체 증상으로 나타나는 일반적 과정이고, 신체증상장애는 이를 충족하는 구체적 DSM-5 진단이다.",
      "key_point": "신체화는 특히 감정 표현이 문화적으로 억압된 사회에서 더 흔하게 관찰되며, 문화적 맥락을 고려한 이해가 필요하다.",
      "common_mistake": "신체화를 의도적인 것으로 오해하지만, 이는 무의식적 과정으로 환자가 진정으로 고통스러운 신체 증상을 경험한다."
    }
  },
  {
    "id": "SOMDIS_HYP_017",
    "terminology": "히포콘드리아시스 (Hypochondriasis)",
    "terminology_ko": "히포콘드리아시스",
    "terminology_en": "Hypochondriasis",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "DSM-IV에서 사용되던 진단으로, 심각한 질병에 대한 과도한 두려움과 집착이 의학적 확인에도 불구하고 지속되는 상태였으며, DSM-5에서 신체증상장애와 질병불안장애로 재분류되었다.",
    "definition_en": "A DSM-IV diagnosis characterized by excessive fear and preoccupation with having a serious illness that persists despite medical reassurance, reclassified into Somatic Symptom Disorder and Illness Anxiety Disorder in DSM-5.",
    "significance": "건강 불안 연구의 역사적 출발점으로, 현대 진단 체계의 변화(DSM-IV → DSM-5)를 이해하는 데 필수적인 개념이다.",
    "key_researchers": [
      {
        "name_ko": "아서 바스키",
        "name_en": "Arthur Barsky",
        "contribution": "히포콘드리아시스의 인지적 메커니즘을 연구하고 신체감각 증폭 이론을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "질병불안장애",
        "name_en": "Illness Anxiety Disorder",
        "id": "SOMDIS_IAD_002"
      },
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Hypochondriasis = hypo(아래) + chondria(갈비뼈) — 고대에 갈비뼈 아래 내장이 질병의 원천이라 믿었던 데서 유래",
      "differential": "히포콘드리아시스는 DSM-IV 진단으로, DSM-5에서 질병불안장애(증상 없이 질병 불안)와 신체증상장애(증상 + 과도한 반응)로 나뉘었다.",
      "key_point": "히포콘드리아시스 환자의 약 75%는 DSM-5에서 신체증상장애로, 25%는 질병불안장애로 재분류된다.",
      "common_mistake": "히포콘드리아시스가 여전히 현행 DSM-5 진단이라고 생각하는 오류가 있다."
    }
  },
  {
    "id": "SOMDIS_BRQ_018",
    "terminology": "브리케 증후군 (Briquet's Syndrome)",
    "terminology_ko": "브리케 증후군",
    "terminology_en": "Briquet's Syndrome",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "다양한 신체 기관에 걸쳐 여러 가지 설명되지 않는 신체 증상을 만성적으로 호소하는 상태의 역사적 명칭으로, DSM-III에서 신체화장애(somatization disorder)로 공식화되었고, 이후 DSM-5에서 신체증상장애로 대체되었다.",
    "definition_en": "A historical term for the chronic presentation of multiple unexplained somatic symptoms across various organ systems, formalized as Somatization Disorder in DSM-III and later replaced by Somatic Symptom Disorder in DSM-5.",
    "significance": "신체증상 관련 장애의 진단적 발전 과정을 보여주는 역사적 개념으로, 히스테리에서 현대 진단까지의 변천을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "폴 브리케",
        "name_en": "Paul Briquet",
        "contribution": "1859년 430명의 히스테리 환자에 대한 체계적 임상 연구를 수행하여 히스테리의 의학적 기술을 확립했다."
      },
      {
        "name_ko": "사무엘 거즈",
        "name_en": "Samuel Guze",
        "contribution": "세인트루이스 학파의 일원으로 브리케 증후군의 진단 기준을 체계화하고 신뢰도 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "히포콘드리아시스",
        "name_en": "Hypochondriasis",
        "id": "SOMDIS_HYP_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "브리케 = 프랑스 의사 Paul Briquet — 히스테리의 체계적 연구 → 신체화장애 → 신체증상장애로 진화",
      "differential": "브리케 증후군(신체화장애)은 다양한 신체 계통에 걸친 만성적 다중 증상이 특징이고, 전환장애는 특정 신경학적 증상(마비 등)에 국한된다.",
      "key_point": "역사적 용어로서, 히스테리 → 브리케 증후군 → 신체화장애(DSM-III) → 신체증상장애(DSM-5)의 진단적 변천을 보여준다.",
      "common_mistake": "브리케 증후군이 현행 진단이라고 착각하지만, 이미 DSM-5에서 신체증상장애로 대체되었다."
    }
  },
  {
    "id": "SOMDIS_MPI_019",
    "terminology": "대중 심인성 질환 (Mass Psychogenic Illness)",
    "terminology_ko": "대중 심인성 질환",
    "terminology_en": "Mass Psychogenic Illness",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "환경적 독소나 감염원 없이 집단 내에서 유사한 신체 증상(두통, 어지러움, 메스꺼움 등)이 급속히 전파되는 현상으로, 집단 히스테리라고도 불리며 사회적 전염과 암시 가능성이 관여한다.",
    "definition_en": "A phenomenon in which similar physical symptoms (headache, dizziness, nausea, etc.) spread rapidly through a group without identifiable environmental toxins or infectious agents, also called mass hysteria, involving social contagion and suggestibility.",
    "significance": "사회적 전염과 암시가 신체 증상을 유발할 수 있음을 보여주는 현상으로, 집단 심리와 신체화의 접점을 연구하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "사이먼 웨슬리",
        "name_en": "Simon Wessely",
        "contribution": "대중 심인성 질환의 역학과 사회적 메커니즘에 대한 체계적 검토를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "야인증",
        "name_en": "Nocebo Effect",
        "id": "SOMDIS_NCB_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MPI = Mass(대중) + Psychogenic(심인성) + Illness(질환) — '집단 히스테리'의 현대적 용어",
      "differential": "대중 심인성 질환은 실제 독소나 감염원 없이 심리적·사회적 전염으로 확산되는 반면, 실제 감염병은 병원체가 확인된다.",
      "key_point": "스트레스 상황에서 더 흔하며, 밀폐된 환경(학교, 공장)에서 주로 발생하고, 여성에서 더 빈번하게 보고된다.",
      "common_mistake": "대중 심인성 질환의 증상을 가짜로 취급하지만, 당사자들이 경험하는 증상은 실제로 고통스럽다."
    }
  },
  {
    "id": "SOMDIS_PNS_020",
    "terminology": "심인성 비간질 발작 (Psychogenic Non-Epileptic Seizures)",
    "terminology_ko": "심인성 비간질 발작",
    "terminology_en": "Psychogenic Non-Epileptic Seizures",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "간질 발작과 유사한 행동적 발현을 보이지만, 뇌파(EEG)에서 간질 활동이 관찰되지 않는 삽화로, 전환장애의 발작형 하위 유형으로 분류되며 심리적 요인에 의해 발생한다.",
    "definition_en": "Episodes resembling epileptic seizures in behavioral manifestation but without epileptic activity on EEG, classified as the seizure subtype of conversion disorder and caused by psychological factors.",
    "significance": "간질과의 감별진단이 중요한 임상적 과제이며, 불필요한 항경련제 투여를 방지하고 적절한 심리 치료로 연결하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "마크 라이팅",
        "name_en": "Markus Reuber",
        "contribution": "심인성 비간질 발작의 진단, 기제, 치료에 대한 포괄적 연구를 수행하고 임상 지침을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "라벨 무관심",
        "name_en": "La Belle Indifférence",
        "id": "SOMDIS_LBI_012"
      },
      {
        "name_ko": "해리",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "PNES = Psychogenic Non-Epileptic Seizures — '간질 아닌 발작', EEG 정상이 감별 핵심",
      "differential": "PNES는 뇌파(EEG)에서 간질 활동이 없고, 눈감김·점진적 시작·좌우 비대칭 운동 등의 임상적 단서가 있으며, 진짜 간질은 EEG 이상과 발작 후 혼돈이 특징이다.",
      "key_point": "비디오-EEG 모니터링이 감별 진단의 골드 스탠다드이며, 약 20-30%의 간질 환자에서 PNES가 공존할 수 있다.",
      "common_mistake": "PNES를 꾀병으로 단정하지만, 대부분의 PNES 환자는 의도적으로 증상을 만들어내는 것이 아니다."
    }
  },
  {
    "id": "SOMDIS_ISP_021",
    "terminology": "의도적 증상 생성 (Intentional Symptom Production)",
    "terminology_ko": "의도적 증상 생성",
    "terminology_en": "Intentional Symptom Production",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "개인이 의식적으로 신체적 또는 심리적 증상을 만들어내거나 과장하는 행위로, 인위성장애(환자 역할 동기)와 꾀병(외적 보상 동기)을 포괄하는 상위 개념이다.",
    "definition_en": "The conscious act of producing or exaggerating physical or psychological symptoms, an overarching concept encompassing both factitious disorder (motivated by sick role) and malingering (motivated by external rewards).",
    "significance": "의도적 기만과 비의도적 증상 표현을 구분하는 핵심 축으로, 임상 평가에서 증상의 진위를 판단하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "리처드 로저스",
        "name_en": "Richard Rogers",
        "contribution": "의도적 증상 생성의 감별진단 모형과 평가 도구를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인위성장애",
        "name_en": "Factitious Disorder",
        "id": "SOMDIS_FCD_004"
      },
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      },
      {
        "name_ko": "증상타당도검사",
        "name_en": "Symptom Validity Test",
        "id": "SOMDIS_SVT_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "의도적 증상 생성 = 꾀병 + 인위성장애 — 둘 다 '의식적'으로 증상을 만듦, 동기만 다름",
      "differential": "의도적 증상 생성(인위성장애, 꾀병)은 의식적 과정이고, 전환장애나 신체증상장애는 무의식적 과정이다.",
      "key_point": "의도적 증상 생성의 감별에서 핵심은 동기 판별이며, 환자 역할 자체가 목적(인위성장애)인지 외적 보상이 목적(꾀병)인지를 구분해야 한다.",
      "common_mistake": "모든 의학적으로 설명 불가능한 증상을 의도적 증상 생성으로 여기는 오류가 있으나, 대부분은 무의식적 과정이다."
    }
  },
  {
    "id": "SOMDIS_DCN_022",
    "terminology": "해리의 연속체 (Dissociative Continuum)",
    "terminology_ko": "해리의 연속체",
    "terminology_en": "Dissociative Continuum",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "해리 경험이 일상적 백일몽이나 몰입과 같은 정상적 수준에서부터 해리성 기억상실, 이인증, 해리성 정체감장애와 같은 병리적 수준까지 연속선상에 분포한다는 개념적 틀이다.",
    "definition_en": "A conceptual framework proposing that dissociative experiences exist on a continuum ranging from normal levels such as everyday daydreaming and absorption to pathological levels such as dissociative amnesia, depersonalization, and dissociative identity disorder.",
    "significance": "정상과 병리적 해리의 관계를 이해하는 이론적 틀로, 해리 현상의 보편성과 특이성을 동시에 설명한다.",
    "key_researchers": [
      {
        "name_ko": "에브 칼슨",
        "name_en": "Eve Carlson",
        "contribution": "해리 경험 척도(DES)를 개발하여 해리의 연속체를 실증적으로 측정하는 도구를 제공했다."
      },
      {
        "name_ko": "프랭크 퍼트넘",
        "name_en": "Frank Putnam",
        "contribution": "아동기 외상과 해리의 관계를 연구하고 해리의 발달적 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "이인증/비현실감 장애",
        "name_en": "Depersonalization/Derealization Disorder",
        "id": "SOMDIS_DPD_011"
      },
      {
        "name_ko": "해리성 기억상실",
        "name_en": "Dissociative Amnesia",
        "id": "SOMDIS_DAM_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "해리 연속체: 백일몽(정상) → 이인증 → 기억상실 → DID(병리) — 정도의 차이",
      "differential": "연속체 모형은 해리가 정상-병리 사이의 차원적 현상이라고 보는 반면, 유형론적 관점은 병리적 해리가 질적으로 다른 현상이라고 본다.",
      "key_point": "해리 경험 척도(DES)로 측정하며, 일반 인구에서도 상당한 수준의 해리 경험이 보고되어 연속체 모형을 지지한다.",
      "common_mistake": "모든 해리 경험이 병리적이라고 오해하지만, 백일몽이나 몰입 같은 정상적 해리 경험은 누구나 한다."
    }
  },
  {
    "id": "SOMDIS_SHM_023",
    "terminology": "자기최면모형 (Self-Hypnosis Model)",
    "terminology_ko": "자기최면모형",
    "terminology_en": "Self-Hypnosis Model",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "해리 증상이 높은 최면 감수성을 가진 개인이 스트레스 상황에서 자발적으로 최면과 유사한 상태에 들어감으로써 발생한다는 이론적 모형이다.",
    "definition_en": "A theoretical model proposing that dissociative symptoms arise when highly hypnotizable individuals spontaneously enter hypnosis-like states during stressful situations.",
    "significance": "해리와 최면의 관계를 설명하는 핵심 이론으로, 전환장애와 해리장애의 기제 이해에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "어니스트 힐가드",
        "name_en": "Ernest Hilgard",
        "contribution": "신해리 이론(neo-dissociation theory)을 제안하여 최면과 해리의 관계를 체계적으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리의 연속체",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "자기최면모형 = 높은 최면 감수성 + 스트레스 → 자발적 최면 상태 → 해리 증상",
      "differential": "자기최면모형은 해리를 최면적 과정으로 보는 반면, 외상-해리 모형은 외상에 대한 방어적 반응으로 본다.",
      "key_point": "해리장애 환자들이 일반 인구보다 최면 감수성이 높다는 연구 결과가 이 모형을 지지한다.",
      "common_mistake": "자기최면모형이 해리를 의도적 행위로 설명한다고 오해하지만, 자기최면은 자발적이고 무의식적인 과정이다."
    }
  },
  {
    "id": "SOMDIS_TDM_024",
    "terminology": "외상-해리 모형 (Trauma-Dissociation Model)",
    "terminology_ko": "외상-해리 모형",
    "terminology_en": "Trauma-Dissociation Model",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "해리장애가 아동기 심각한 외상(특히 반복적 학대)에 대한 방어적 반응으로 발생한다는 이론적 모형으로, 외상의 고통을 의식으로부터 차단하기 위해 해리가 사용된다고 본다.",
    "definition_en": "A theoretical model proposing that dissociative disorders develop as a defensive response to severe childhood trauma (especially repeated abuse), with dissociation used to block the pain of trauma from consciousness.",
    "significance": "해리장애의 병인론에서 가장 영향력 있는 모형으로, 외상 치료와 해리 증상 관리의 이론적 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 퍼트넘",
        "name_en": "Frank Putnam",
        "contribution": "아동기 외상과 해리의 관계에 대한 종단 연구를 수행하고 발달적 해리 모형을 제안했다."
      },
      {
        "name_ko": "베셀 반 데어 콜크",
        "name_en": "Bessel van der Kolk",
        "contribution": "외상이 뇌와 신체에 미치는 영향을 연구하고 외상-해리 연결의 신경생물학적 근거를 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "사회인지모형",
        "name_en": "Sociocognitive Model",
        "id": "SOMDIS_SCM_025"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "PTSD",
        "name_en": "PTSD",
        "id": "TRAUMA_PTS_001"
      },
      {
        "name_ko": "복합PTSD",
        "name_en": "Complex PTSD",
        "id": "TRAUMA_CPT_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "외상-해리 모형: 아동기 외상 → 방어적 해리 → 해리장애 발전",
      "differential": "외상-해리 모형은 DID가 실제 외상의 결과라고 보는 반면, 사회인지모형은 DID가 사회적 학습과 암시의 산물이라고 본다.",
      "key_point": "DID 환자의 높은 아동기 외상 보고율이 이 모형을 지지하지만, 회상 편향의 가능성도 고려해야 한다.",
      "common_mistake": "외상-해리 모형이 모든 외상 경험자가 해리장애를 발전시킨다고 주장하는 것으로 오해하지만, 외상은 필요조건이지 충분조건이 아니다."
    }
  },
  {
    "id": "SOMDIS_SCM_025",
    "terminology": "사회인지모형 (Sociocognitive Model)",
    "terminology_ko": "사회인지모형",
    "terminology_en": "Sociocognitive Model",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "해리성 정체감장애(DID)가 외상의 산물이 아니라, 사회적 기대, 치료자의 암시, 미디어 노출, 역할 수행 등에 의해 형성되는 사회문화적 현상이라는 비판적 이론 모형이다.",
    "definition_en": "A critical theoretical model proposing that Dissociative Identity Disorder is not a product of trauma but a sociocultural phenomenon shaped by social expectations, therapist suggestion, media exposure, and role enactment.",
    "significance": "DID에 대한 가장 영향력 있는 대안 이론으로, 암시 가능성과 의원성 효과에 대한 중요한 경고를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "니콜라스 스패노스",
        "name_en": "Nicholas Spanos",
        "contribution": "DID가 사회적 역할 수행의 결과라는 사회인지적 관점을 제안하고 실험적 증거를 제시했다."
      },
      {
        "name_ko": "스콧 릴리엔펠드",
        "name_en": "Scott Lilienfeld",
        "contribution": "DID 진단의 과학적 근거를 비판적으로 검토하고 사회인지모형의 경험적 지지를 정리했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "외상-해리 모형",
        "name_en": "Trauma-Dissociation Model",
        "id": "SOMDIS_TDM_024"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회인지모형: 미디어 + 치료자 암시 + 사회적 기대 → DID '형성' — 외상이 아닌 사회적 맥락이 원인",
      "differential": "사회인지모형은 DID가 사회적으로 구성된다고 보고, 외상-해리 모형은 실제 외상에 대한 방어적 반응이라고 본다.",
      "key_point": "DID 진단율이 북미에 편중되어 있고, 미디어 노출 후 급증한 역학적 패턴이 이 모형을 지지하는 근거로 제시된다.",
      "common_mistake": "사회인지모형이 DID 환자의 고통이 가짜라고 주장하는 것으로 오해하지만, 이 모형은 증상 형성 과정의 메커니즘에 대한 대안적 설명이다."
    }
  },
  {
    "id": "SOMDIS_GNS_026",
    "terminology": "간서증후군 (Ganser Syndrome)",
    "terminology_ko": "간서증후군",
    "terminology_en": "Ganser Syndrome",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "근사 답변(approximate answers 또는 Vorbeireden)을 특징으로 하는 희귀한 해리 상태로, 간단한 질문에 대해 거의 맞지만 정확하지 않은 답변을 하며, 의식의 흐릿함, 환각, 신체 전환 증상이 동반될 수 있다.",
    "definition_en": "A rare dissociative state characterized by approximate answers (Vorbeireden), where individuals give nearly correct but inaccurate responses to simple questions, potentially accompanied by clouding of consciousness, hallucinations, and somatic conversion symptoms.",
    "significance": "해리와 꾀병의 경계에 위치한 논쟁적 진단으로, 법의학적 맥락에서 특히 중요하게 다루어진다.",
    "key_researchers": [
      {
        "name_ko": "지그베르트 간서",
        "name_en": "Sigbert Ganser",
        "contribution": "1898년 수감자들에서 관찰된 근사 답변 현상을 최초로 기술하여 이 증후군의 명칭이 되었다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리성 기억상실",
        "name_en": "Dissociative Amnesia",
        "id": "SOMDIS_DAM_009"
      },
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      },
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "간서 = 근사 답변 — '2+2=?' → '5'라고 답함 (틀리지만 근접, 질문을 이해하고 있음)",
      "differential": "간서증후군은 근사 답변이 특징이고, 꾀병은 의도적 기만이며, 해리성 기억상실은 기억 공백이 특징이다.",
      "key_point": "수감자나 법적 상황에서 주로 보고되며, 진정한 해리 상태인지 꾀병인지의 감별이 임상적 과제이다.",
      "common_mistake": "간서증후군을 단순한 꾀병으로 치부하지만, 많은 사례에서 진정한 해리 상태의 특성이 관찰된다."
    }
  },
  {
    "id": "SOMDIS_BII_027",
    "terminology": "신체 완전성 정체감 장애 (Body Integrity Identity Disorder)",
    "terminology_ko": "신체 완전성 정체감 장애",
    "terminology_en": "Body Integrity Identity Disorder",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "건강한 사지나 신체 부위가 자신의 신체 이미지와 불일치한다고 느끼며, 해당 부위의 절단을 강렬하게 원하는 드문 상태로, ICD-11에서 새롭게 분류된 진단이다.",
    "definition_en": "A rare condition in which a healthy limb or body part is perceived as incongruent with one's body image, accompanied by an intense desire for amputation of that body part, newly classified in ICD-11.",
    "significance": "신체 이미지와 정체감의 관계를 극단적으로 보여주는 상태로, 신체 표상의 신경학적 기반에 대한 연구를 촉진한다.",
    "key_researchers": [
      {
        "name_ko": "피터 브루거",
        "name_en": "Peter Brugger",
        "contribution": "신체 완전성 정체감 장애의 신경학적 기반을 연구하고 대뇌 우반구 두정엽의 역할을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "전환장애",
        "name_en": "Conversion Disorder",
        "id": "SOMDIS_CVD_003"
      },
      {
        "name_ko": "신체변형장애",
        "name_en": "Body Dysmorphic Disorder",
        "id": "OBSESS_BDD_002"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BIID = Body Integrity Identity Disorder — '내 몸의 이 부분은 내 것이 아니다'는 느낌",
      "differential": "BIID는 건강한 사지를 제거하고 싶은 욕구인 반면, 신체변형장애(BDD)는 지각된 외모 결함에 대한 집착이다.",
      "key_point": "ICD-11에서 공식 진단으로 포함되었으며, 두정엽의 신체 표상 이상이 관여하는 것으로 제안된다.",
      "common_mistake": "BIID를 정신병적 망상이나 자해 행위로 분류하는 오류가 있으나, 이는 신체 이미지-정체감 불일치의 독특한 장애이다."
    }
  },
  {
    "id": "SOMDIS_SVT_028",
    "terminology": "증상타당도검사 (Symptom Validity Test)",
    "terminology_ko": "증상타당도검사",
    "terminology_en": "Symptom Validity Test",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "보고된 증상이나 인지적 손상의 진위를 평가하기 위해 설계된 심리평가 도구로, 우연 수준 이하의 수행이 의도적 증상 과장이나 꾀병을 시사하는 지표로 활용된다.",
    "definition_en": "A psychological assessment tool designed to evaluate the authenticity of reported symptoms or cognitive impairment, where below-chance performance serves as an indicator of intentional symptom exaggeration or malingering.",
    "significance": "법의학적 평가와 장애 판정에서 증상의 진위를 객관적으로 판단하는 핵심 도구로, 근거 기반 평가의 중요한 구성요소이다.",
    "key_researchers": [
      {
        "name_ko": "제리 스위트",
        "name_en": "Jerry Sweet",
        "contribution": "신경심리학적 평가에서 증상 타당도 검사의 활용과 해석 기준을 체계화했다."
      },
      {
        "name_ko": "폴 그린",
        "name_en": "Paul Green",
        "contribution": "Word Memory Test(WMT) 등 대표적인 증상 타당도 검사를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "꾀병",
        "name_en": "Malingering",
        "id": "SOMDIS_MAL_006"
      },
      {
        "name_ko": "의도적 증상 생성",
        "name_en": "Intentional Symptom Production",
        "id": "SOMDIS_ISP_021"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SVT: 우연 수준(50%) '이하' 수행 → 의도적 오답 시사 — 진짜 손상이면 최소 우연 수준은 맞힘",
      "differential": "증상타당도검사는 증상 진위 판별 도구이고, 일반 심리검사는 능력이나 성격 측정 도구이다.",
      "key_point": "강제 선택 형식에서 우연 수준(50%) 이하의 수행은 정답을 알면서 의도적으로 틀린 답을 선택했음을 강하게 시사한다.",
      "common_mistake": "SVT에서 낮은 점수가 자동으로 꾀병을 확정한다고 오해하지만, 종합적 임상 판단의 일부로 사용해야 한다."
    }
  },
  {
    "id": "SOMDIS_NCB_029",
    "terminology": "노시보 효과 (Nocebo Effect)",
    "terminology_ko": "노시보 효과",
    "terminology_en": "Nocebo Effect",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "비활성 물질이나 처치임에도 부정적 기대나 부정적 암시로 인해 실제 부작용이나 증상 악화가 발생하는 현상으로, 위약 효과(placebo effect)의 반대 개념이다.",
    "definition_en": "A phenomenon in which negative expectations or suggestions cause actual adverse effects or symptom worsening despite receiving an inert substance or treatment, the opposite of the placebo effect.",
    "significance": "기대와 암시가 신체 증상을 유발할 수 있음을 보여주는 현상으로, 신체증상장애의 발생 기제와 의료 커뮤니케이션의 중요성을 시사한다.",
    "key_researchers": [
      {
        "name_ko": "파브리치오 베네데티",
        "name_en": "Fabrizio Benedetti",
        "contribution": "노시보 효과의 신경생물학적 메커니즘을 연구하고 콜레시스토키닌(CCK)의 역할을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체화",
        "name_en": "Somatization",
        "id": "SOMDIS_SOM_016"
      },
      {
        "name_ko": "대중 심인성 질환",
        "name_en": "Mass Psychogenic Illness",
        "id": "SOMDIS_MPI_019"
      },
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Nocebo = '해를 끼칠 것이다(I shall harm)' — Placebo(기쁘게 할 것이다)의 반대",
      "differential": "노시보 효과는 부정적 기대 → 부정적 결과이고, 플라시보 효과는 긍정적 기대 → 긍정적 결과이다.",
      "key_point": "노시보 효과는 콜레시스토키닌(CCK)과 HPA 축 활성화가 관여하며, 실제 신체적 변화를 초래할 수 있다.",
      "common_mistake": "노시보 효과를 단순한 심리적 착각으로 여기지만, 실제 생리적 변화(통증 증가, 면역 변화 등)가 동반된다."
    }
  },
  {
    "id": "SOMDIS_SRL_030",
    "terminology": "환자역할 (Sick Role)",
    "terminology_ko": "환자역할",
    "terminology_en": "Sick Role",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "탈콧 파슨스가 제안한 사회학적 개념으로, 아픈 사람이 사회적으로 인정받는 특정 권리(일상 의무 면제)와 의무(치료 추구)를 부여받는 사회적 역할이며, 인위성장애의 동기적 기반이 된다.",
    "definition_en": "A sociological concept proposed by Talcott Parsons in which a sick person is socially granted certain rights (exemption from daily obligations) and duties (seeking treatment), serving as the motivational basis for factitious disorder.",
    "significance": "질병 행동의 사회적 차원을 이해하는 핵심 개념으로, 인위성장애와 의료 이용 패턴의 이론적 배경을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "탈콧 파슨스",
        "name_en": "Talcott Parsons",
        "contribution": "1951년 환자역할(sick role) 개념을 제안하여 질병의 사회학적 분석 틀을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인위성장애",
        "name_en": "Factitious Disorder",
        "id": "SOMDIS_FCD_004"
      },
      {
        "name_ko": "이차적 이득",
        "name_en": "Secondary Gain",
        "id": "SOMDIS_SGN_013"
      },
      {
        "name_ko": "일차적 이득",
        "name_en": "Primary Gain",
        "id": "SOMDIS_PGN_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "환자역할 = 파슨스의 4가지: 권리(의무 면제, 비난 면제) + 의무(치료 추구, 회복 노력)",
      "differential": "환자역할은 사회적으로 인정되는 정당한 역할이고, 인위성장애는 이 역할을 의도적으로 획득하려는 병리적 행동이다.",
      "key_point": "파슨스의 환자역할은 4가지 요소로 구성된다: (1) 일상 의무 면제, (2) 질병에 대한 비난 면제, (3) 회복을 위해 노력할 의무, (4) 전문적 도움을 구할 의무.",
      "common_mistake": "환자역할을 단순히 아픈 것과 동일시하지만, 이는 권리와 의무를 포함하는 사회적으로 구조화된 역할이다."
    }
  },
  {
    "id": "SOMDIS_SSA_031",
    "terminology": "신체감각 증폭 (Somatosensory Amplification)",
    "terminology_ko": "신체감각 증폭",
    "terminology_en": "Somatosensory Amplification",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "정상적인 신체 감각을 비정상적으로 강하고 해로우며 고통스러운 것으로 경험하는 경향으로, 신체증상장애와 질병불안장애의 인지적 메커니즘으로 제안된 개념이다.",
    "definition_en": "A tendency to experience normal bodily sensations as abnormally intense, harmful, and distressing, proposed as a cognitive mechanism underlying somatic symptom disorder and illness anxiety disorder.",
    "significance": "신체증상 관련 장애의 인지적 취약 요인을 설명하는 핵심 개념으로, 인지행동치료의 치료 표적이 된다.",
    "key_researchers": [
      {
        "name_ko": "아서 바스키",
        "name_en": "Arthur Barsky",
        "contribution": "신체감각 증폭(somatosensory amplification) 개념을 최초로 제안하고 SSAS 척도를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신체증상장애",
        "name_en": "Somatic Symptom Disorder",
        "id": "SOMDIS_SSD_001"
      },
      {
        "name_ko": "질병불안장애",
        "name_en": "Illness Anxiety Disorder",
        "id": "SOMDIS_IAD_002"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "신체감각 증폭 = 정상 감각의 '볼륨 업' — 작은 신체 신호를 크게 증폭하여 해석",
      "differential": "신체감각 증폭은 감각 자체의 과대 지각이고, 파국화(catastrophizing)는 감각에 대한 최악의 해석이다. 둘 다 신체증상장애에 기여한다.",
      "key_point": "주의 집중 → 신체 감각 탐지 증가 → 불안 → 추가 주의 집중의 악순환이 핵심 메커니즘이다.",
      "common_mistake": "신체감각 증폭을 의도적 과장으로 오해하지만, 이는 자동적이고 무의식적인 인지 과정이다."
    }
  },
  {
    "id": "SOMDIS_DES_032",
    "terminology": "해리 경험 척도 (Dissociative Experiences Scale)",
    "terminology_ko": "해리 경험 척도",
    "terminology_en": "Dissociative Experiences Scale",
    "category": "SOMDIS",
    "category_name": "신체증상 및 해리장애 (Somatic and Dissociative Disorders)",
    "definition": "해리 경험의 빈도와 강도를 측정하는 28문항의 자기보고식 척도로, 해리성 정체감장애를 포함한 해리장애의 선별과 연구에 가장 널리 사용되는 표준화된 측정 도구이다.",
    "definition_en": "A 28-item self-report scale measuring the frequency and intensity of dissociative experiences, the most widely used standardized measurement tool for screening and research on dissociative disorders including Dissociative Identity Disorder.",
    "significance": "해리 현상의 정량적 측정을 가능하게 한 핵심 도구로, 해리의 연속체 모형의 실증적 검증에 기여했다.",
    "key_researchers": [
      {
        "name_ko": "에브 칼슨",
        "name_en": "Eve Carlson",
        "contribution": "DES를 공동 개발하여 해리 경험의 표준적 측정 도구를 제공했다."
      },
      {
        "name_ko": "프랭크 퍼트넘",
        "name_en": "Frank Putnam",
        "contribution": "DES를 공동 개발하고 다양한 임상 집단에서의 타당도를 검증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "해리의 연속체",
        "name_en": "Dissociative Continuum",
        "id": "SOMDIS_DCN_022"
      },
      {
        "name_ko": "해리성 정체감장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_008"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DES = Dissociative Experiences Scale — 28문항, 0~100% 척도, 해리장애 선별의 표준",
      "differential": "DES는 해리 경험 전반을 측정하는 자기보고 척도이고, SCID-D는 해리장애를 진단하는 구조화된 면접 도구이다.",
      "key_point": "DES 점수 30점 이상이 해리장애의 임상적 절단점으로 제안되며, DID 환자는 평균 40~50점 범위를 보인다.",
      "common_mistake": "DES 점수만으로 해리장애를 진단할 수 있다고 오해하지만, DES는 선별 도구이며 진단은 임상적 면접을 통해 이루어진다."
    }
  }
];

TERMS_DATA.EATING = [
  {
    "id": "EATING_ANN_001",
    "terminology": "신경성 식욕부진증 (Anorexia Nervosa)",
    "terminology_ko": "신경성 식욕부진증",
    "terminology_en": "Anorexia Nervosa",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "에너지 섭취의 제한으로 유의미하게 낮은 체중을 초래하며, 체중 증가에 대한 극심한 두려움과 체형·체중에 대한 왜곡된 지각이 특징인 섭식장애로, 정신장애 중 가장 높은 사망률을 보인다.",
    "definition_en": "An eating disorder characterized by restriction of energy intake leading to significantly low body weight, intense fear of weight gain, and distorted perception of body shape and weight, with the highest mortality rate among psychiatric disorders.",
    "significance": "정신장애 중 가장 높은 사망률을 보이는 심각한 장애로, 생물심리사회적 요인의 복합적 상호작용과 문화적 영향을 연구하는 핵심 진단이다.",
    "key_researchers": [
      {
        "name_ko": "힐데 브루흐",
        "name_en": "Hilde Bruch",
        "contribution": "신경성 식욕부진증에서 내부감각 인식 장애와 자율성 결핍을 핵심 특성으로 기술하여 심리학적 이해의 기틀을 마련했다."
      },
      {
        "name_ko": "아서 크리스프",
        "name_en": "Arthur Crisp",
        "contribution": "신경성 식욕부진증을 사춘기 발달에 대한 회피로 개념화하는 정신생물학적 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      },
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "무월경",
        "name_en": "Amenorrhea",
        "id": "EATING_AMN_020"
      },
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      }
    ],
    "sub_types": [
      {
        "name": "제한형",
        "description": "폭식이나 제거 행동 없이 식이 제한만으로 체중을 감소시키는 유형"
      },
      {
        "name": "폭식-제거형",
        "description": "제한과 함께 폭식 삽화 또는 제거 행동(구토, 하제 등)이 동반되는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "AN = Anorexia(식욕부진) + Nervosa(신경성) — 그러나 실제로는 식욕이 없는 것이 아니라 먹기를 거부하는 것",
      "differential": "신경성 식욕부진증은 유의미하게 낮은 체중이 핵심인 반면, 신경성 폭식증은 정상 체중 범위에서 폭식-제거 순환이 특징이다.",
      "key_point": "DSM-5에서 무월경 기준이 삭제되었고, BMI 기반 심각도 명시자(경도: BMI≥17, 극심: BMI<15)가 추가되었다.",
      "common_mistake": "신경성 식욕부진증에서 실제로 식욕이 없다고 오해하지만, 대부분의 환자는 식욕을 느끼면서도 의도적으로 섭취를 제한한다."
    }
  },
  {
    "id": "EATING_BUL_002",
    "terminology": "신경성 폭식증 (Bulimia Nervosa)",
    "terminology_ko": "신경성 폭식증",
    "terminology_en": "Bulimia Nervosa",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "반복적인 폭식 삽화와 체중 증가를 방지하기 위한 부적절한 보상행동(자가 유도 구토, 하제 남용, 과도한 운동 등)이 특징인 섭식장애로, 체중은 보통 정상 범위이다.",
    "definition_en": "An eating disorder characterized by recurrent episodes of binge eating followed by inappropriate compensatory behaviors (self-induced vomiting, laxative misuse, excessive exercise, etc.) to prevent weight gain, with body weight typically in the normal range.",
    "significance": "폭식과 제거의 순환 패턴을 이해하는 핵심 진단으로, 감정 조절 곤란과 충동성의 역할을 연구하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 러셀",
        "name_en": "Gerald Russell",
        "contribution": "1979년 신경성 폭식증을 독립 진단으로 최초 기술하여 섭식장애 분류 체계를 확장했다."
      },
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "신경성 폭식증에 대한 CBT 치료 프로토콜을 개발하고 초진단적 모형을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "폭식장애",
        "name_en": "Binge Eating Disorder",
        "id": "EATING_BED_003"
      },
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      },
      {
        "name_ko": "러셀 징후",
        "name_en": "Russell's Sign",
        "id": "EATING_RSS_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BN = Bulimia(폭식) + Nervosa(신경성) — '폭식 → 제거'의 반복 순환이 핵심",
      "differential": "신경성 폭식증은 정상 체중에서 폭식-보상행동 순환이 특징이고, 신경성 식욕부진증 폭식-제거형은 유의미하게 낮은 체중이 동반된다.",
      "key_point": "DSM-5에서 최소 주 1회, 3개월 이상의 폭식-보상행동 빈도 기준으로 변경되었다(DSM-IV는 주 2회).",
      "common_mistake": "신경성 폭식증 환자가 모두 구토를 한다고 오해하지만, 하제 남용, 과도한 운동, 단식 등 다양한 보상행동이 있다."
    }
  },
  {
    "id": "EATING_BED_003",
    "terminology": "폭식장애 (Binge Eating Disorder)",
    "terminology_ko": "폭식장애",
    "terminology_en": "Binge Eating Disorder",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "반복적인 폭식 삽화가 특징이지만 신경성 폭식증과 달리 보상행동(구토, 하제 사용 등)이 동반되지 않는 섭식장애로, 폭식 후 현저한 고통과 수치심을 경험하며 비만과 높은 공존율을 보인다.",
    "definition_en": "An eating disorder characterized by recurrent binge eating episodes without the compensatory behaviors seen in bulimia nervosa, accompanied by marked distress and shame after bingeing, with high comorbidity with obesity.",
    "significance": "DSM-5에서 독립 진단으로 승격된 가장 흔한 섭식장애로, 비만과 정서적 섭식의 관계를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "알버트 스턴커드",
        "name_en": "Albert Stunkard",
        "contribution": "1959년 폭식 삽화를 비만 환자에서 최초로 기술하고 폭식장애 개념의 토대를 마련했다."
      },
      {
        "name_ko": "로버트 스피처",
        "name_en": "Robert Spitzer",
        "contribution": "폭식장애의 진단 기준을 체계화하여 DSM 포함을 위한 연구적 토대를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      },
      {
        "name_ko": "폭식 삽화",
        "name_en": "Binge Episode",
        "id": "EATING_BNG_017"
      },
      {
        "name_ko": "체중 낙인",
        "name_en": "Weight Stigma",
        "id": "EATING_WST_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BED = Binge Eating Disorder — '폭식만 있고 보상행동 없음' → 신경성 폭식증과의 핵심 차이",
      "differential": "폭식장애는 보상행동이 없고, 신경성 폭식증은 폭식 후 구토·하제 등 보상행동이 동반된다.",
      "key_point": "DSM-5에서 '달리 명시되지 않는 섭식장애(EDNOS)'에서 독립 진단으로 승격되었으며, 가장 유병률이 높은 섭식장애이다.",
      "common_mistake": "폭식장애를 단순한 과식과 혼동하지만, 폭식장애의 폭식 삽화는 통제 상실감과 현저한 고통이 동반된다."
    }
  },
  {
    "id": "EATING_ARF_004",
    "terminology": "회피적/제한적 음식섭취장애 (Avoidant/Restrictive Food Intake Disorder)",
    "terminology_ko": "회피적/제한적 음식섭취장애",
    "terminology_en": "Avoidant/Restrictive Food Intake Disorder",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "음식의 감각적 특성에 대한 혐오, 먹는 것의 불쾌한 결과에 대한 두려움, 또는 음식에 대한 관심 부족으로 인해 적절한 영양을 섭취하지 못하지만, 체형이나 체중에 대한 왜곡은 없는 섭식장애이다.",
    "definition_en": "An eating disorder characterized by failure to meet appropriate nutritional needs due to aversion to sensory characteristics of food, fear of aversive consequences of eating, or apparent lack of interest in food, without body shape or weight distortion.",
    "significance": "DSM-5에서 새롭게 도입된 진단으로, 체중·체형 관련이 없는 섭식 문제를 포괄하여 섭식장애의 범위를 확장했다.",
    "key_researchers": [
      {
        "name_ko": "레이첼 브라이언트-워",
        "name_en": "Rachel Bryant-Waugh",
        "contribution": "아동기 섭식 장애의 분류를 체계화하고 ARFID 진단 개념의 발전에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "이식증",
        "name_en": "Pica",
        "id": "EATING_PCA_005"
      },
      {
        "name_ko": "반추장애",
        "name_en": "Rumination Disorder",
        "id": "EATING_RUM_006"
      }
    ],
    "sub_types": [
      {
        "name": "감각 회피형",
        "description": "음식의 질감, 맛, 냄새 등 감각적 특성에 민감하여 특정 음식을 거부"
      },
      {
        "name": "결과 공포형",
        "description": "먹은 후 구토, 질식 등의 부정적 결과에 대한 두려움"
      },
      {
        "name": "관심 결핍형",
        "description": "음식이나 먹는 행위 자체에 대한 관심이 부족"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ARFID = Avoidant/Restrictive Food Intake Disorder — '체중·체형 걱정 없이' 음식을 피하거나 제한",
      "differential": "ARFID는 체형·체중 왜곡이 없는 반면, 신경성 식욕부진증은 체형·체중에 대한 왜곡된 지각이 핵심이다.",
      "key_point": "아동과 성인 모두에서 진단 가능하며, 체중 문제가 아닌 영양 결핍이나 심리사회적 기능 저하가 핵심 손상이다.",
      "common_mistake": "ARFID를 단순한 편식과 혼동하지만, ARFID는 유의미한 영양 결핍이나 체중 감소를 초래하는 수준이어야 한다."
    }
  },
  {
    "id": "EATING_PCA_005",
    "terminology": "이식증 (Pica)",
    "terminology_ko": "이식증",
    "terminology_en": "Pica",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "영양적 가치가 없는 비식품 물질(흙, 종이, 얼음, 머리카락 등)을 1개월 이상 지속적으로 섭취하는 섭식장애로, 발달 수준에 비해 부적절하며 문화적 관행으로 설명되지 않아야 한다.",
    "definition_en": "An eating disorder involving persistent ingestion of non-nutritive, non-food substances (dirt, paper, ice, hair, etc.) for at least one month, inappropriate for the developmental level and not attributable to cultural practices.",
    "significance": "영양 결핍(특히 철분)과의 관련성, 지적장애 및 발달장애에서의 높은 유병률을 통해 섭식 행동의 다양한 병리를 보여준다.",
    "key_researchers": [
      {
        "name_ko": "로자린 스미스",
        "name_en": "Rosalind Smith",
        "contribution": "이식증의 역학과 영양 결핍과의 관계에 대한 체계적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "반추장애",
        "name_en": "Rumination Disorder",
        "id": "EATING_RUM_006"
      },
      {
        "name_ko": "회피적/제한적 음식섭취장애",
        "name_en": "ARFID",
        "id": "EATING_ARF_004"
      },
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "NEURO_IDD_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Pica = 까치(magpie)의 라틴어에서 유래 — 까치가 아무거나 먹는 습성에 비유",
      "differential": "이식증은 비식품 물질의 섭취이고, ARFID는 음식 자체를 회피/제한하는 것이다.",
      "key_point": "임신, 철분 결핍, 지적장애에서 유병률이 높으며, 납 중독 등 신체적 합병증의 위험이 있다.",
      "common_mistake": "이식증을 아동기에만 나타나는 장애로 오해하지만, 성인에서도 발생하며 특히 임산부에서 흔하다."
    }
  },
  {
    "id": "EATING_RUM_006",
    "terminology": "반추장애 (Rumination Disorder)",
    "terminology_ko": "반추장애",
    "terminology_en": "Rumination Disorder",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭취한 음식을 반복적으로 역류시켜 다시 씹거나 삼키거나 뱉어내는 행동이 1개월 이상 지속되는 장애로, 위장관 질환이나 다른 섭식장애로 설명되지 않아야 한다.",
    "definition_en": "A disorder characterized by repeated regurgitation of food over at least one month, with the food being re-chewed, re-swallowed, or spit out, not attributable to gastrointestinal conditions or other eating disorders.",
    "significance": "영아기부터 성인기까지 다양한 연령에서 나타나는 독특한 섭식 행동 장애로, 행동적 치료 접근의 효과가 입증되어 있다.",
    "key_researchers": [
      {
        "name_ko": "리처드 프레더릭스",
        "name_en": "Richard Fredericks",
        "contribution": "성인 반추장애의 진단과 행동 치료에 대한 임상 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "이식증",
        "name_en": "Pica",
        "id": "EATING_PCA_005"
      },
      {
        "name_ko": "회피적/제한적 음식섭취장애",
        "name_en": "ARFID",
        "id": "EATING_ARF_004"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "반추(Rumination) = 되새김질 — 소가 음식을 다시 씹듯 역류시켜 재처리",
      "differential": "반추장애는 비자발적·습관적 역류이고, 신경성 폭식증의 구토는 체중 조절을 위한 의도적 보상행동이다.",
      "key_point": "DSM-5에서 섭식장애 범주에 포함되며, 횡경막 호흡 훈련(diaphragmatic breathing training)이 효과적인 행동적 치료이다.",
      "common_mistake": "반추장애를 위식도역류질환(GERD)과 혼동하지만, 반추장애의 역류는 비자발적이면서도 학습된 행동적 요소가 있다."
    }
  },
  {
    "id": "EATING_NES_007",
    "terminology": "야식증후군 (Night Eating Syndrome)",
    "terminology_ko": "야식증후군",
    "terminology_en": "Night Eating Syndrome",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "저녁 식사 이후 과도한 음식 섭취(하루 총 칼로리의 25% 이상)와/또는 야간 각성 시 식사를 하는 반복적 패턴으로, 아침 식욕 부진이 동반되며 수면-각성 및 섭식 리듬의 불일치가 특징이다.",
    "definition_en": "A recurrent pattern of excessive food consumption after the evening meal (over 25% of total daily calories) and/or eating upon nocturnal awakenings, accompanied by morning anorexia and characterized by misalignment of sleep-wake and eating rhythms.",
    "significance": "섭식과 수면-각성 리듬의 관계를 보여주는 독특한 증후군으로, 비만과 수면장애의 교차점에서 연구된다.",
    "key_researchers": [
      {
        "name_ko": "알버트 스턴커드",
        "name_en": "Albert Stunkard",
        "contribution": "1955년 야식증후군을 최초로 기술하고 비만과의 관련성을 연구했다."
      },
      {
        "name_ko": "켈리 앨리슨",
        "name_en": "Kelly Allison",
        "contribution": "야식증후군의 진단 기준을 체계화하고 일주기 리듬과의 관계를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "폭식장애",
        "name_en": "Binge Eating Disorder",
        "id": "EATING_BED_003"
      },
      {
        "name_ko": "설정점 이론",
        "name_en": "Set Point Theory",
        "id": "EATING_SPT_019"
      },
      {
        "name_ko": "체질량지수",
        "name_en": "BMI",
        "id": "EATING_BMI_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "NES = Night(야간) + Eating(섭식) + Syndrome(증후군) — 밤에 먹고, 아침엔 안 먹는 패턴",
      "differential": "야식증후군은 저녁 이후 과식과 야간 각성 섭식이 특징이고, 수면관련 섭식장애(SRED)는 수면 중 무의식적 섭식이다.",
      "key_point": "DSM-5에서 독립 진단이 아닌 '달리 명시된 섭식장애'로 분류되며, 멜라토닌과 렙틴 리듬의 지연이 관여한다.",
      "common_mistake": "야식증후군을 단순한 습관으로 여기지만, 일주기 리듬 장애와 관련된 생물학적 기반이 있는 임상적 상태이다."
    }
  },
  {
    "id": "EATING_ORT_008",
    "terminology": "오르토렉시아 (Orthorexia Nervosa)",
    "terminology_ko": "오르토렉시아",
    "terminology_en": "Orthorexia Nervosa",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "'건강한' 음식에 대한 병적인 집착으로, 음식의 순수성, 품질, 구성에 대해 과도하게 엄격한 규칙을 적용하여 사회적 기능과 영양 상태에 심각한 영향을 미치는 제안된 섭식 관련 상태이다.",
    "definition_en": "A proposed eating-related condition characterized by pathological obsession with 'healthy' food, applying excessively rigid rules about food purity, quality, and composition, significantly affecting social functioning and nutritional status.",
    "significance": "현대 건강 문화와 섭식 병리의 접점을 보여주는 새로운 개념으로, 공식 진단은 아니지만 임상적 관심이 증가하고 있다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 브래트먼",
        "name_en": "Steven Bratman",
        "contribution": "1997년 오르토렉시아(orthorexia nervosa) 개념을 최초로 제안하고 명명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "완벽주의와 섭식장애",
        "name_en": "Perfectionism and Eating Disorders",
        "id": "EATING_PFC_033"
      },
      {
        "name_ko": "강박장애",
        "name_en": "OCD",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Orthorexia = ortho(올바른) + orexis(식욕) — '올바른 식사'에 대한 병적 집착",
      "differential": "오르토렉시아는 음식의 '질'에 집착하는 반면, 신경성 식욕부진증은 음식의 '양'과 체중에 집착한다.",
      "key_point": "현재 DSM-5나 ICD-11의 공식 진단은 아니지만, ARFID 또는 강박장애의 틀에서 이해할 수 있다.",
      "common_mistake": "건강한 식습관과 오르토렉시아를 혼동하지만, 오르토렉시아는 식이 규칙이 사회적 기능과 영양 상태를 해칠 정도로 극단적이다."
    }
  },
  {
    "id": "EATING_BDS_009",
    "terminology": "체형 불만족 (Body Dissatisfaction)",
    "terminology_ko": "체형 불만족",
    "terminology_en": "Body Dissatisfaction",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "자신의 체형, 체중, 외모에 대한 부정적 주관적 평가로, 이상적 체형과 현재 체형 간의 차이에 대한 불만족이며, 섭식장애 발생의 가장 강력한 예측 인자 중 하나이다.",
    "definition_en": "A negative subjective evaluation of one's body shape, weight, and appearance, reflecting dissatisfaction with the discrepancy between ideal and actual body image, and one of the strongest predictors of eating disorder development.",
    "significance": "섭식장애의 핵심 위험 요인이자 유지 요인으로, 예방 프로그램의 주요 개입 표적이다.",
    "key_researchers": [
      {
        "name_ko": "에릭 스타이스",
        "name_en": "Eric Stice",
        "contribution": "체형 불만족이 섭식장애의 핵심 위험 요인임을 종단 연구로 입증하고 이중 경로 모형을 제안했다."
      },
      {
        "name_ko": "토머스 캐시",
        "name_en": "Thomas Cash",
        "contribution": "신체 이미지의 다차원적 평가 도구를 개발하고 인지행동적 신체 이미지 치료를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마른 이상",
        "name_en": "Thin Ideal",
        "id": "EATING_THN_010"
      },
      {
        "name_ko": "객체화 이론",
        "name_en": "Objectification Theory",
        "id": "EATING_OBJ_025"
      },
      {
        "name_ko": "섭식장애의 사회문화적 모형",
        "name_en": "Sociocultural Model of Eating Disorders",
        "id": "EATING_SCM_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체형 불만족 = 이상적 체형 - 현재 체형 → 차이가 클수록 불만족 증가",
      "differential": "체형 불만족은 정도의 차이가 있는 차원적 개념이고, 신체변형장애(BDD)는 지각된 결함에 대한 병리적 집착이다.",
      "key_point": "체형 불만족은 섭식장애의 이중 경로 모형에서 다이어트 경로와 부정적 정서 경로 모두를 매개하는 핵심 변인이다.",
      "common_mistake": "체형 불만족이 여성에게만 해당한다고 오해하지만, 남성에서도 근육질 이상(muscular ideal)에 대한 불만족이 증가하고 있다."
    }
  },
  {
    "id": "EATING_THN_010",
    "terminology": "마른 이상 (Thin Ideal)",
    "terminology_ko": "마른 이상",
    "terminology_en": "Thin Ideal",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "사회문화적으로 구성된 이상적 여성 체형으로서의 마른 몸에 대한 내면화된 기준으로, 미디어와 또래 집단을 통해 전달되며 체형 불만족과 섭식 병리의 핵심 위험 요인이다.",
    "definition_en": "An internalized standard of the thin body as the culturally constructed ideal female body shape, transmitted through media and peer groups, serving as a core risk factor for body dissatisfaction and eating pathology.",
    "significance": "섭식장애의 사회문화적 모형에서 핵심 개념으로, 미디어 리터러시와 예방 프로그램의 중요한 개입 표적이다.",
    "key_researchers": [
      {
        "name_ko": "에릭 스타이스",
        "name_en": "Eric Stice",
        "contribution": "마른 이상 내면화가 섭식 병리로 이어지는 경로를 실증적으로 밝히고 예방 프로그램(Body Project)을 개발했다."
      },
      {
        "name_ko": "앤 베커",
        "name_en": "Anne Becker",
        "contribution": "피지에서의 연구를 통해 서구 미디어 노출이 마른 이상 내면화와 섭식 병리에 미치는 영향을 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "날씬함 추구",
        "name_en": "Drive for Thinness",
        "id": "EATING_DFT_011"
      },
      {
        "name_ko": "섭식장애의 사회문화적 모형",
        "name_en": "Sociocultural Model of Eating Disorders",
        "id": "EATING_SCM_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마른 이상 = 미디어가 전달하는 '이상적 마른 몸' → 내면화 → 체형 불만족 → 섭식 병리",
      "differential": "마른 이상은 사회문화적으로 구성된 외적 기준이고, 체형 불만족은 그 기준과 자신의 비교에서 오는 내적 평가이다.",
      "key_point": "마른 이상의 내면화(internalization)가 핵심이며, 단순 인식이 아닌 개인적 기준으로 수용하는 과정이 섭식 병리의 위험을 높인다.",
      "common_mistake": "마른 이상이 모든 문화에서 동일하다고 오해하지만, 이상적 체형은 문화와 시대에 따라 상당히 다르다."
    }
  },
  {
    "id": "EATING_DFT_011",
    "terminology": "날씬함 추구 (Drive for Thinness)",
    "terminology_ko": "날씬함 추구",
    "terminology_en": "Drive for Thinness",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "더 날씬해지고자 하는 강렬한 욕구와 동기로, 체중 감소에 대한 과도한 집착, 다이어트 행동, 체중 증가에 대한 두려움으로 나타나며, 섭식장애 검사(EDI)의 핵심 하위 척도이다.",
    "definition_en": "An intense desire and motivation to become thinner, manifested as excessive preoccupation with weight loss, dieting behavior, and fear of weight gain, a core subscale of the Eating Disorder Inventory (EDI).",
    "significance": "섭식장애의 핵심 심리적 특성을 측정하는 중요한 구성개념으로, 조기 발견과 예방의 표적이 된다.",
    "key_researchers": [
      {
        "name_ko": "데이비드 가너",
        "name_en": "David Garner",
        "contribution": "섭식장애 검사(EDI)를 개발하여 날씬함 추구를 포함한 섭식 병리의 다차원적 측정을 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마른 이상",
        "name_en": "Thin Ideal",
        "id": "EATING_THN_010"
      },
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "극단적 식이제한",
        "name_en": "Extreme Dietary Restriction",
        "id": "EATING_EDR_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "날씬함 추구 = EDI의 DT(Drive for Thinness) 척도 — 다이어트 집착 + 체중 공포 + 마름 욕구",
      "differential": "날씬함 추구는 능동적 동기(더 마르고 싶다)이고, 체형 불만족은 현 상태에 대한 부정적 평가(지금 체형이 싫다)이다.",
      "key_point": "날씬함 추구 점수가 높은 것은 섭식장애의 강력한 예측 인자이며, EDI-3의 핵심 하위 척도이다.",
      "common_mistake": "날씬함 추구를 건강한 체중 관리 동기와 혼동하지만, 병적 수준의 날씬함 추구는 건강을 해칠 정도의 극단적 행동으로 이어진다."
    }
  },
  {
    "id": "EATING_CMP_012",
    "terminology": "보상행동 (Compensatory Behavior)",
    "terminology_ko": "보상행동",
    "terminology_en": "Compensatory Behavior",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭취한 음식의 칼로리 효과를 상쇄하기 위해 수행되는 부적절한 행동으로, 자가 유도 구토, 하제·이뇨제 남용, 과도한 운동, 단식 등이 포함되며 신경성 폭식증의 핵심 특징이다.",
    "definition_en": "Inappropriate behaviors performed to counteract the caloric effects of food consumed, including self-induced vomiting, laxative and diuretic misuse, excessive exercise, and fasting, a core feature of bulimia nervosa.",
    "significance": "섭식장애에서 폭식과 연결되는 악순환의 핵심 요소로, 심각한 의학적 합병증을 초래할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "보상행동의 유지 기제를 인지행동 모형으로 체계화하고 효과적인 치료 프로토콜을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구토",
        "name_en": "Purging",
        "id": "EATING_PRG_013"
      },
      {
        "name_ko": "하제 남용",
        "name_en": "Laxative Abuse",
        "id": "EATING_LAX_014"
      },
      {
        "name_ko": "과도한 운동",
        "name_en": "Excessive Exercise",
        "id": "EATING_EXE_015"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      }
    ],
    "sub_types": [
      {
        "name": "제거형 보상행동",
        "description": "구토, 하제, 이뇨제 사용 등"
      },
      {
        "name": "비제거형 보상행동",
        "description": "과도한 운동, 단식 등"
      }
    ],
    "quiz_hints": {
      "mnemonic": "보상행동 = 폭식의 '대가 치르기' — 제거형(구토, 하제) + 비제거형(운동, 단식)",
      "differential": "보상행동은 폭식 후 체중 증가를 방지하려는 행동이고, 제한적 섭식은 폭식 없이 지속적으로 칼로리를 줄이는 것이다.",
      "key_point": "보상행동은 실제로 칼로리 상쇄에 비효과적이지만(하제는 영양분 흡수 후 작용), 환자는 효과적이라고 믿어 행동을 유지한다.",
      "common_mistake": "하제 사용이 체중 감소에 효과적이라고 오해하지만, 하제는 대장에서 수분만 배출하며 칼로리는 소장에서 이미 흡수된다."
    }
  },
  {
    "id": "EATING_PRG_013",
    "terminology": "구토 (Purging)",
    "terminology_ko": "구토",
    "terminology_en": "Purging",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭취한 음식을 제거하기 위해 자가 유도하는 구토 행동으로, 신경성 폭식증과 신경성 식욕부진증 폭식-제거형에서 가장 흔한 보상행동이며, 식도 손상, 전해질 불균형 등 심각한 의학적 합병증을 초래한다.",
    "definition_en": "Self-induced vomiting behavior to eliminate consumed food, the most common compensatory behavior in bulimia nervosa and anorexia nervosa binge-purge type, causing serious medical complications including esophageal damage and electrolyte imbalance.",
    "significance": "섭식장애의 가장 위험한 보상행동 중 하나로, 심장 부정맥, 식도 파열, 치아 침식 등 생명을 위협하는 합병증과 관련된다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 러셀",
        "name_en": "Gerald Russell",
        "contribution": "구토를 포함한 제거 행동의 임상적 특성과 의학적 합병증을 체계적으로 기술했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      },
      {
        "name_ko": "러셀 징후",
        "name_en": "Russell's Sign",
        "id": "EATING_RSS_021"
      },
      {
        "name_ko": "이하선 비대",
        "name_en": "Parotid Gland Enlargement",
        "id": "EATING_PRT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Purging = 자가 유도 구토 — 전해질(K+) 불균형 → 심장 부정맥이 가장 위험한 합병증",
      "differential": "자가 유도 구토(purging)는 의도적 보상행동이고, 반추장애는 비의도적·습관적 역류이다.",
      "key_point": "반복적 구토는 저칼륨혈증을 초래하여 심장 부정맥의 위험을 높이며, 이것이 섭식장애의 주요 사망 원인 중 하나이다.",
      "common_mistake": "구토가 체중 감소에 효과적이라고 오해하지만, 실제로는 칼로리의 상당 부분이 이미 흡수된 후 구토가 이루어진다."
    }
  },
  {
    "id": "EATING_LAX_014",
    "terminology": "하제 남용 (Laxative Abuse)",
    "terminology_ko": "하제 남용",
    "terminology_en": "Laxative Abuse",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "체중 조절 목적으로 완하제를 과도하게 또는 부적절하게 사용하는 행동으로, 탈수, 전해질 불균형, 대장 기능 저하 등의 심각한 의학적 합병증을 초래할 수 있는 보상행동이다.",
    "definition_en": "Excessive or inappropriate use of laxatives for weight control purposes, a compensatory behavior that can cause serious medical complications including dehydration, electrolyte imbalance, and colon dysfunction.",
    "significance": "섭식장애에서 흔히 관찰되는 보상행동으로, 의학적 합병증의 심각성과 중독적 사용 패턴에 대한 임상적 주의가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "제임스 미첼",
        "name_en": "James Mitchell",
        "contribution": "하제 남용의 의학적 합병증과 섭식장애에서의 역할에 대한 체계적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      },
      {
        "name_ko": "구토",
        "name_en": "Purging",
        "id": "EATING_PRG_013"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "하제 남용: 대장에서 수분 배출 → 일시적 체중 감소(수분 손실) → 칼로리 감소 효과 없음",
      "differential": "하제 남용은 체중 조절 목적의 완하제 과다 사용이고, 의학적 변비 치료를 위한 적절한 하제 사용과 구별된다.",
      "key_point": "하제는 소장에서 이미 흡수된 칼로리에 영향을 미치지 못하므로 실제 체중 감소 효과가 없으며, '대장 관성(cathartic colon)' 발생 위험이 있다.",
      "common_mistake": "하제가 음식의 칼로리 흡수를 방지한다고 오해하지만, 영양 흡수는 소장에서 이루어지므로 하제는 칼로리 제거에 무효하다."
    }
  },
  {
    "id": "EATING_EXE_015",
    "terminology": "과도한 운동 (Excessive Exercise)",
    "terminology_ko": "과도한 운동",
    "terminology_en": "Excessive Exercise",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "체중 조절이나 폭식 보상을 목적으로 부상이나 질병에도 불구하고 수행되는 강박적이고 과도한 운동 행동으로, 운동을 하지 못하면 극심한 불안이나 죄책감을 경험하는 것이 특징이다.",
    "definition_en": "Compulsive and excessive exercise behavior performed for weight control or binge compensation despite injury or illness, characterized by extreme anxiety or guilt when unable to exercise.",
    "significance": "비제거형 보상행동의 대표적 형태로, 겉으로는 건강한 행동처럼 보여 발견이 어렵다는 임상적 특성이 있다.",
    "key_researchers": [
      {
        "name_ko": "캐롤라인 데이비스",
        "name_en": "Caroline Davis",
        "contribution": "강박적 운동과 섭식장애의 관계를 연구하고, 운동 의존(exercise dependence) 개념을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      },
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "완벽주의와 섭식장애",
        "name_en": "Perfectionism and Eating Disorders",
        "id": "EATING_PFC_033"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "과도한 운동 = 비제거형 보상행동 — 부상·질병에도 운동 중단 불가, 운동 못하면 극심한 불안",
      "differential": "과도한 운동은 체중 조절/불안 감소를 위한 강박적 행동이고, 건강한 운동은 즐거움과 건강 증진을 위한 자발적 활동이다.",
      "key_point": "과도한 운동의 핵심은 양(시간)이 아니라 질(강박성, 유연성 결여, 운동 중단 시 고통)이다.",
      "common_mistake": "운동량이 많으면 과도한 운동이라고 단정하지만, 핵심은 운동의 동기, 강박성, 유연성 결여 여부이다."
    }
  },
  {
    "id": "EATING_EDR_016",
    "terminology": "극단적 식이제한 (Extreme Dietary Restriction)",
    "terminology_ko": "극단적 식이제한",
    "terminology_en": "Extreme Dietary Restriction",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "신체적 필요를 심각하게 밑도는 수준으로 음식 섭취를 엄격하게 제한하는 행동으로, 특정 음식군의 완전한 배제, 극도로 낮은 칼로리 섭취, 장시간 단식 등을 포함한다.",
    "definition_en": "Behavior of rigidly restricting food intake to levels severely below physical needs, including complete elimination of food groups, extremely low calorie intake, and prolonged fasting.",
    "significance": "섭식장애에서 폭식의 주요 선행 요인으로, 제한-폭식 순환의 시작점이 되며, 신체적·인지적 기능 저하를 초래한다.",
    "key_researchers": [
      {
        "name_ko": "앤셀 키스",
        "name_en": "Ancel Keys",
        "contribution": "미네소타 기아 실험(1944-45)을 통해 식이 제한이 신체적·심리적 기능에 미치는 심각한 영향을 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "폭식 삽화",
        "name_en": "Binge Episode",
        "id": "EATING_BNG_017"
      },
      {
        "name_ko": "설정점 이론",
        "name_en": "Set Point Theory",
        "id": "EATING_SPT_019"
      },
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "극단적 식이제한 → 배고픔 증가 → 폭식 → 죄책감 → 다시 제한 = 악순환",
      "differential": "극단적 식이제한은 부적절하게 낮은 칼로리 섭취이고, 건강한 식단 관리는 적절한 영양소를 포함한 균형 잡힌 식사이다.",
      "key_point": "미네소타 기아 실험에서 정상인도 극심한 칼로리 제한 시 음식 집착, 폭식, 정서 불안정 등 섭식장애 유사 증상을 보였다.",
      "common_mistake": "엄격한 다이어트가 장기적으로 효과적이라고 오해하지만, 극단적 식이제한은 대사 저하와 반동적 폭식을 유발한다."
    }
  },
  {
    "id": "EATING_BNG_017",
    "terminology": "폭식 삽화 (Binge Episode)",
    "terminology_ko": "폭식 삽화",
    "terminology_en": "Binge Episode",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "일정한 시간 내(보통 2시간 이내)에 대부분의 사람이 같은 상황에서 먹을 양보다 확연히 많은 양의 음식을 섭취하면서, 먹는 행위에 대한 통제 상실감을 경험하는 삽화이다.",
    "definition_en": "An episode of eating a definitively larger amount of food than most people would consume under similar circumstances within a discrete period (usually within 2 hours), accompanied by a sense of loss of control over eating.",
    "significance": "신경성 폭식증과 폭식장애의 진단적 핵심 요소로, 통제 상실감의 존재가 단순 과식과 구분하는 핵심 기준이다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "폭식 삽화의 인지행동적 모형을 개발하고 촉발 요인과 유지 기제를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      },
      {
        "name_ko": "폭식장애",
        "name_en": "Binge Eating Disorder",
        "id": "EATING_BED_003"
      },
      {
        "name_ko": "보상행동",
        "name_en": "Compensatory Behavior",
        "id": "EATING_CMP_012"
      }
    ],
    "sub_types": [
      {
        "name": "객관적 폭식",
        "description": "객관적으로 과도한 양의 음식을 섭취하면서 통제 상실감 경험"
      },
      {
        "name": "주관적 폭식",
        "description": "객관적 양은 과도하지 않지만 통제 상실감을 경험"
      }
    ],
    "quiz_hints": {
      "mnemonic": "폭식 삽화 = '과도한 양' + '통제 상실감' — 두 가지 모두 충족해야 진단 기준 부합",
      "differential": "폭식 삽화는 통제 상실감이 동반된 과식이고, 단순 과식(overeating)은 통제 상실감 없이 많이 먹는 것이다.",
      "key_point": "통제 상실감(sense of loss of control)이 핵심 진단 요소이며, 양만으로는 폭식과 과식을 구별할 수 없다.",
      "common_mistake": "많이 먹으면 모두 폭식이라고 생각하지만, 통제 상실감 없이 자발적으로 많이 먹는 것은 폭식이 아니다."
    }
  },
  {
    "id": "EATING_BMI_018",
    "terminology": "체질량지수 (Body Mass Index)",
    "terminology_ko": "체질량지수",
    "terminology_en": "Body Mass Index",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "체중(kg)을 신장(m)의 제곱으로 나눈 값으로, 체중 상태를 분류하는 데 사용되는 지표이며, DSM-5에서 신경성 식욕부진증의 심각도를 명시하는 기준으로 활용된다.",
    "definition_en": "A measure calculated by dividing weight (kg) by height (m) squared, used to classify weight status and employed in DSM-5 to specify the severity of anorexia nervosa.",
    "significance": "신경성 식욕부진증의 심각도 평가와 의학적 위험 판단에 사용되는 핵심 지표이다.",
    "key_researchers": [
      {
        "name_ko": "아돌프 케틀레",
        "name_en": "Adolphe Quetelet",
        "contribution": "19세기에 체중과 신장의 관계를 수학적으로 정의한 케틀레 지수를 개발하여 BMI의 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "설정점 이론",
        "name_en": "Set Point Theory",
        "id": "EATING_SPT_019"
      },
      {
        "name_ko": "체중 낙인",
        "name_en": "Weight Stigma",
        "id": "EATING_WST_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "BMI = kg/m² — 저체중<18.5, 정상 18.5-24.9, 과체중 25-29.9, 비만≥30",
      "differential": "BMI는 체중 대비 키의 비율 지표이고, 체지방률은 실제 지방의 비율을 측정하는 것으로 더 정확하다.",
      "key_point": "DSM-5 AN 심각도: 경도 BMI≥17, 중등도 16-16.99, 고도 15-15.99, 극심 BMI<15.",
      "common_mistake": "BMI가 건강 상태의 완전한 지표라고 오해하지만, BMI는 근육량, 체지방 분포, 인종적 차이를 반영하지 못한다."
    }
  },
  {
    "id": "EATING_SPT_019",
    "terminology": "설정점 이론 (Set Point Theory)",
    "terminology_ko": "설정점 이론",
    "terminology_en": "Set Point Theory",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "각 개인의 체중이 생물학적으로 결정된 특정 범위(설정점) 주위에서 유지되려는 항상성 기제가 작동한다는 이론으로, 다이어트 후 체중 회복 현상과 대사 적응을 설명한다.",
    "definition_en": "A theory proposing that each individual's weight is maintained around a biologically determined range (set point) through homeostatic mechanisms, explaining post-diet weight regain and metabolic adaptation.",
    "significance": "극단적 식이제한의 장기적 비효과성을 설명하고, 자연 체중에 대한 수용의 중요성을 강조하는 이론적 기반이다.",
    "key_researchers": [
      {
        "name_ko": "리처드 니스벳",
        "name_en": "Richard Nisbett",
        "contribution": "1972년 설정점 이론을 비만 연구에 적용하여 생물학적 체중 조절 기제를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "극단적 식이제한",
        "name_en": "Extreme Dietary Restriction",
        "id": "EATING_EDR_016"
      },
      {
        "name_ko": "체질량지수",
        "name_en": "BMI",
        "id": "EATING_BMI_018"
      },
      {
        "name_ko": "직관적 식사",
        "name_en": "Intuitive Eating",
        "id": "EATING_ITE_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "설정점 = 체온 조절처럼 체중도 '항상성'으로 유지 — 다이어트해도 원래 체중으로 돌아가려는 힘",
      "differential": "설정점 이론은 체중이 생물학적으로 고정된 범위를 가진다고 보고, 정착점(settling point) 이론은 환경과 행동에 따라 유동적이라고 본다.",
      "key_point": "다이어트 시 대사율 감소, 식욕 호르몬(그렐린) 증가 등 체중 회복을 촉진하는 보상적 생리 반응이 설정점 이론을 지지한다.",
      "common_mistake": "설정점이 절대 변할 수 없다고 오해하지만, 장기적 생활 습관 변화와 환경적 요인에 의해 점진적 변화가 가능하다."
    }
  },
  {
    "id": "EATING_AMN_020",
    "terminology": "무월경 (Amenorrhea)",
    "terminology_ko": "무월경",
    "terminology_en": "Amenorrhea",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "월경의 부재로, 기능적 시상하부성 무월경(FHA)은 극심한 에너지 부족, 과도한 운동, 스트레스 등에 의해 시상하부-뇌하수체-성선축이 억제되어 발생하며, 섭식장애의 중요한 의학적 결과이다.",
    "definition_en": "Absence of menstruation; functional hypothalamic amenorrhea (FHA) occurs when the hypothalamic-pituitary-gonadal axis is suppressed due to severe energy deficit, excessive exercise, or stress, representing an important medical consequence of eating disorders.",
    "significance": "섭식장애의 심각한 의학적 합병증으로, 골밀도 감소와 불임의 위험을 증가시키며, 영양 회복의 중요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "미셸 워런",
        "name_en": "Michelle Warren",
        "contribution": "기능적 시상하부성 무월경과 섭식장애의 관계를 연구하고 골밀도에 미치는 영향을 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "극단적 식이제한",
        "name_en": "Extreme Dietary Restriction",
        "id": "EATING_EDR_016"
      },
      {
        "name_ko": "재급식 증후군",
        "name_en": "Refeeding Syndrome",
        "id": "EATING_RFS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "무월경 = 에너지 부족 → 시상하부 억제 → GnRH 감소 → FSH/LH 감소 → 월경 중단",
      "differential": "기능적 무월경은 에너지 부족에 의한 가역적 상태이고, 기질적 무월경은 구조적 이상(자궁, 난소)에 의한 것이다.",
      "key_point": "DSM-5에서 무월경은 더 이상 신경성 식욕부진증의 필수 진단 기준이 아니지만, 중요한 의학적 결과로 평가된다.",
      "common_mistake": "무월경이 DSM-5에서도 여전히 신경성 식욕부진증의 필수 기준이라고 착각하지만, DSM-5에서 이 기준은 삭제되었다."
    }
  },
  {
    "id": "EATING_RSS_021",
    "terminology": "러셀 징후 (Russell's Sign)",
    "terminology_ko": "러셀 징후",
    "terminology_en": "Russell's Sign",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "반복적인 자가 유도 구토로 인해 손등(특히 관절 부위)에 형성되는 굳은살, 흉터, 또는 피부 변색으로, 구토 시 치아에 손이 닿아 발생하며 신경성 폭식증의 신체적 징후이다.",
    "definition_en": "Calluses, scarring, or skin discoloration on the back of the hand (especially over the knuckles) caused by repeated self-induced vomiting, where the hand contacts the teeth, a physical sign of bulimia nervosa.",
    "significance": "자가 유도 구토의 신체적 증거로서, 섭식장애의 임상적 발견과 선별에 중요한 진찰 소견이다.",
    "key_researchers": [
      {
        "name_ko": "제럴드 러셀",
        "name_en": "Gerald Russell",
        "contribution": "이 신체적 징후를 처음으로 기술하여 자가 유도 구토의 객관적 지표로 활용하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "구토",
        "name_en": "Purging",
        "id": "EATING_PRG_013"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      },
      {
        "name_ko": "이하선 비대",
        "name_en": "Parotid Gland Enlargement",
        "id": "EATING_PRT_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "러셀 징후 = 손등 굳은살 — 구토 유도 시 윗니가 손등을 반복적으로 마찰",
      "differential": "러셀 징후는 자가 유도 구토의 신체적 증거이고, 이하선 비대는 반복적 구토로 인한 침샘 팽창이다.",
      "key_point": "경험이 많은 환자는 도구나 다른 방법으로 구토를 유도하여 러셀 징후가 없을 수 있으므로, 징후의 부재가 구토 부재를 의미하지 않는다.",
      "common_mistake": "러셀 징후가 모든 구토 환자에서 나타난다고 오해하지만, 손을 사용하지 않는 경우에는 관찰되지 않는다."
    }
  },
  {
    "id": "EATING_PRT_022",
    "terminology": "이하선 비대 (Parotid Gland Enlargement)",
    "terminology_ko": "이하선 비대",
    "terminology_en": "Parotid Gland Enlargement",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "반복적인 구토로 인해 이하선(귀밑샘)이 비대해지는 현상으로, 얼굴이 부어 보이는 '다람쥐 뺨' 외관을 초래하며, 신경성 폭식증의 신체적 징후 중 하나이다.",
    "definition_en": "Enlargement of the parotid glands due to repeated vomiting, causing a puffy 'chipmunk cheek' appearance, one of the physical signs of bulimia nervosa.",
    "significance": "반복적 구토의 의학적 합병증이자 임상적 발견의 단서로, 섭식장애의 신체적 영향을 보여주는 대표적 징후이다.",
    "key_researchers": [
      {
        "name_ko": "제임스 미첼",
        "name_en": "James Mitchell",
        "contribution": "섭식장애의 의학적 합병증을 체계적으로 연구하여 이하선 비대의 기전과 임상적 의의를 밝혔다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "러셀 징후",
        "name_en": "Russell's Sign",
        "id": "EATING_RSS_021"
      },
      {
        "name_ko": "구토",
        "name_en": "Purging",
        "id": "EATING_PRG_013"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "이하선 비대 = '다람쥐 뺨' — 반복 구토 → 침샘 과자극 → 이하선 팽창",
      "differential": "이하선 비대는 구토에 의한 것이고, 볼거리(유행성 이하선염)는 바이러스 감염에 의한 것이다.",
      "key_point": "이하선 비대는 구토 중단 후 수주~수개월에 걸쳐 서서히 개선되며, 아밀라아제 수치 상승이 동반될 수 있다.",
      "common_mistake": "이하선 비대가 영구적이라고 오해하지만, 구토 행동을 중단하면 대부분 가역적으로 회복된다."
    }
  },
  {
    "id": "EATING_CDT_023",
    "terminology": "인지적 왜곡 (Cognitive Distortions in Eating Disorders)",
    "terminology_ko": "인지적 왜곡",
    "terminology_en": "Cognitive Distortions in Eating Disorders",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭식장애에서 나타나는 특유의 비합리적 사고 패턴으로, 흑백사고(음식을 '좋은/나쁜'으로 이분법적 분류), 파국화, 감정적 추론, 선택적 추상화 등이 체형·체중·음식에 대해 집중적으로 나타난다.",
    "definition_en": "Characteristic irrational thinking patterns in eating disorders, including dichotomous thinking (categorizing food as 'good/bad'), catastrophizing, emotional reasoning, and selective abstraction, focused on body shape, weight, and food.",
    "significance": "섭식장애의 인지행동치료에서 핵심 치료 표적으로, 인지적 재구조화의 대상이 되는 유지 요인이다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "섭식장애에서의 인지적 왜곡을 체계화하고 이를 표적으로 한 CBT-E를 개발했다."
      },
      {
        "name_ko": "아론 벡",
        "name_en": "Aaron Beck",
        "contribution": "인지적 왜곡의 일반 이론을 제안하여 섭식장애를 포함한 다양한 정신장애의 인지적 모형 기반을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Fairburn의 초진단적 모형",
        "name_en": "Fairburn's Transdiagnostic Model",
        "id": "EATING_FTM_034"
      },
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "인지모형",
        "name_en": "Cognitive Model",
        "id": "FOUND_COG_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "섭식장애의 인지적 왜곡: 흑백사고('금지 음식 먹으면 끝장'), 파국화, 감정적 추론('뚱뚱하다고 느끼니까 뚱뚱한 거야')",
      "differential": "섭식장애의 인지적 왜곡은 체형·체중·음식에 특화된 사고 오류이고, 우울증의 인지적 왜곡은 자기·세상·미래에 대한 부정적 사고이다.",
      "key_point": "흑백사고(dichotomous thinking)가 섭식장애에서 특히 핵심적이며, '규칙 위반 효과(abstinence violation effect)'를 통해 폭식을 촉발한다.",
      "common_mistake": "인지적 왜곡을 인식하면 바로 교정된다고 오해하지만, 깊이 자동화된 사고 패턴이므로 체계적인 인지 재구조화가 필요하다."
    }
  },
  {
    "id": "EATING_SCM_024",
    "terminology": "섭식장애의 사회문화적 모형 (Sociocultural Model of Eating Disorders)",
    "terminology_ko": "섭식장애의 사회문화적 모형",
    "terminology_en": "Sociocultural Model of Eating Disorders",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭식장애의 발생과 유지에 사회문화적 요인, 특히 미디어, 또래 집단, 가족 환경이 전달하는 마른 이상과 외모 중시 가치관이 핵심적 역할을 한다는 이론적 틀이다.",
    "definition_en": "A theoretical framework proposing that sociocultural factors, particularly the thin ideal and appearance-oriented values transmitted through media, peer groups, and family environment, play a central role in the development and maintenance of eating disorders.",
    "significance": "섭식장애의 문화적 편재성과 유병률의 문화 간 차이를 설명하는 핵심 이론으로, 예방 프로그램의 이론적 기반을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "앤 베커",
        "name_en": "Anne Becker",
        "contribution": "피지 연구를 통해 서구 미디어 도입이 섭식 병리 증가와 관련됨을 실증적으로 입증했다."
      },
      {
        "name_ko": "에릭 스타이스",
        "name_en": "Eric Stice",
        "contribution": "사회문화적 요인이 섭식 병리로 이어지는 매개 경로(이중 경로 모형)를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마른 이상",
        "name_en": "Thin Ideal",
        "id": "EATING_THN_010"
      },
      {
        "name_ko": "객체화 이론",
        "name_en": "Objectification Theory",
        "id": "EATING_OBJ_025"
      },
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사회문화적 모형: 미디어 + 또래 + 가족 → 마른 이상 내면화 → 체형 불만족 → 섭식장애",
      "differential": "사회문화적 모형은 외적 환경 요인을 강조하고, 생물학적 모형은 유전과 신경화학적 요인을 강조한다.",
      "key_point": "피지 연구(Becker, 2004): TV 도입 3년 후 구토 행동이 0%에서 11.3%로 증가하여 미디어의 영향을 극적으로 보여주었다.",
      "common_mistake": "사회문화적 요인만으로 섭식장애를 설명할 수 있다고 오해하지만, 같은 문화적 압력에 노출된 모든 사람이 발병하지 않으므로 개인적 취약성도 중요하다."
    }
  },
  {
    "id": "EATING_OBJ_025",
    "terminology": "객체화 이론 (Objectification Theory)",
    "terminology_ko": "객체화 이론",
    "terminology_en": "Objectification Theory",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "여성의 몸이 사회적으로 대상화되는 경험이 자기-객체화(자신의 외모를 외부 관찰자의 시선으로 모니터링)를 유발하고, 이것이 수치심, 불안, 체형 불만족, 섭식 병리로 이어진다는 페미니스트 이론이다.",
    "definition_en": "A feminist theory proposing that the social objectification of women's bodies leads to self-objectification (monitoring one's appearance from an external observer's perspective), which in turn produces shame, anxiety, body dissatisfaction, and eating pathology.",
    "significance": "섭식장애의 성별 차이를 설명하는 핵심 이론으로, 성차별적 사회구조와 심리적 건강의 관계를 밝힌다.",
    "key_researchers": [
      {
        "name_ko": "바바라 프레더릭슨",
        "name_en": "Barbara Fredrickson",
        "contribution": "1997년 객체화 이론을 제안하여 여성의 신체 경험과 섭식 병리의 관계를 이론화했다."
      },
      {
        "name_ko": "토미-앤 로버츠",
        "name_en": "Tomi-Ann Roberts",
        "contribution": "객체화 이론을 공동으로 개발하고 자기-객체화의 실험적 검증을 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "마른 이상",
        "name_en": "Thin Ideal",
        "id": "EATING_THN_010"
      },
      {
        "name_ko": "섭식장애의 사회문화적 모형",
        "name_en": "Sociocultural Model of Eating Disorders",
        "id": "EATING_SCM_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "객체화 이론: 사회적 객체화 → 자기-객체화(내면화) → 신체 수치심 → 섭식 병리",
      "differential": "객체화 이론은 사회적 대상화 경험이 자기-감시를 유발한다고 보고, 사회문화적 모형은 미디어의 이상적 체형 전달에 초점을 맞춘다.",
      "key_point": "자기-객체화(self-objectification)는 '나를 어떻게 보이는가'의 관점에서 자신을 모니터링하는 것으로, 수치심과 섭식 병리의 핵심 매개변인이다.",
      "common_mistake": "객체화 이론이 여성에게만 적용된다고 오해하지만, 남성에서도 자기-객체화와 관련된 신체 이미지 문제가 보고되고 있다."
    }
  },
  {
    "id": "EATING_FBT_026",
    "terminology": "가족기반치료 (Family-Based Treatment)",
    "terminology_ko": "가족기반치료",
    "terminology_en": "Family-Based Treatment",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "청소년 신경성 식욕부진증의 가장 효과적인 근거 기반 치료로, 부모가 자녀의 식사를 적극적으로 관리하는 역할을 맡으며, 3단계(체중 회복 → 통제 이양 → 정체성 확립)로 구성된 Maudsley 접근법이다.",
    "definition_en": "The most effective evidence-based treatment for adolescent anorexia nervosa, in which parents take an active role in managing their child's eating, structured in three phases (weight restoration → transfer of control → identity establishment), known as the Maudsley approach.",
    "significance": "청소년 신경성 식욕부진증에서 가장 강력한 근거를 가진 치료법으로, 가족을 치료의 자원으로 활용하는 패러다임 전환을 이끌었다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 더",
        "name_en": "Christopher Dare",
        "contribution": "Maudsley 병원에서 가족기반치료 접근법을 최초로 개발했다."
      },
      {
        "name_ko": "제임스 록",
        "name_en": "James Lock",
        "contribution": "가족기반치료 매뉴얼을 체계화하고 무작위 통제 시험을 통해 효과를 입증했다."
      },
      {
        "name_ko": "다니엘 르 그레인지",
        "name_en": "Daniel Le Grange",
        "contribution": "가족기반치료를 신경성 폭식증에 적용하고 치료 매뉴얼을 공동 집필했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "섭식장애의 CBT",
        "name_en": "CBT for Eating Disorders",
        "id": "EATING_CBT_027"
      },
      {
        "name_ko": "재급식 증후군",
        "name_en": "Refeeding Syndrome",
        "id": "EATING_RFS_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FBT = 3단계: (1) 부모 주도 재급식 → (2) 통제 청소년에게 이양 → (3) 정상 발달 과제 회복",
      "differential": "가족기반치료는 부모가 섭식을 직접 관리하는 반면, 개인 CBT는 환자 자신의 인지-행동 변화에 초점을 맞춘다.",
      "key_point": "FBT는 가족을 비난하지 않고('agnostic' 접근) 가족을 치료의 핵심 자원으로 활용하며, 청소년 AN에서 60-70%의 관해율을 보인다.",
      "common_mistake": "FBT가 가족의 잘못을 전제한다고 오해하지만, 이 접근은 의도적으로 비난을 배제하고 가족을 치료 동맹으로 본다."
    }
  },
  {
    "id": "EATING_CBT_027",
    "terminology": "섭식장애의 CBT (CBT for Eating Disorders)",
    "terminology_ko": "섭식장애의 CBT",
    "terminology_en": "CBT for Eating Disorders",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭식장애의 핵심 유지 요인인 체형·체중의 과대 평가, 극단적 식이 규칙, 인지적 왜곡을 체계적으로 변화시키는 구조화된 인지행동치료로, Fairburn의 CBT-E(Enhanced)가 대표적이다.",
    "definition_en": "A structured cognitive-behavioral therapy systematically targeting core maintaining factors of eating disorders including overvaluation of shape and weight, extreme dietary rules, and cognitive distortions, with Fairburn's CBT-E (Enhanced) as the leading protocol.",
    "significance": "신경성 폭식증에서 가장 강력한 근거를 가진 심리치료이며, 초진단적 적용이 가능한 통합적 치료 모형이다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "CBT-BN을 개발하고 이를 CBT-E(Enhanced)로 확장하여 모든 섭식장애에 적용 가능한 초진단적 치료를 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions in Eating Disorders",
        "id": "EATING_CDT_023"
      },
      {
        "name_ko": "Fairburn의 초진단적 모형",
        "name_en": "Fairburn's Transdiagnostic Model",
        "id": "EATING_FTM_034"
      },
      {
        "name_ko": "가족기반치료",
        "name_en": "Family-Based Treatment",
        "id": "EATING_FBT_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CBT-E = Enhanced CBT — 4단계: (1) 자기관찰 시작 (2) 유지요인 평가 (3) 핵심 변화 (4) 재발 방지",
      "differential": "CBT-E는 인지-행동적 유지 요인을 표적으로 하고, IPT는 대인관계 문제를 표적으로 하며, FBT는 가족의 재급식 역할을 활용한다.",
      "key_point": "CBT-E는 모든 섭식장애 진단에 적용 가능한 초진단적(transdiagnostic) 치료로, 신경성 폭식증에서 40-50%의 관해율을 보인다.",
      "common_mistake": "CBT가 섭식장애의 모든 하위 유형에 동일하게 효과적이라고 오해하지만, 청소년 AN에서는 FBT가 더 효과적이다."
    }
  },
  {
    "id": "EATING_IPT_028",
    "terminology": "대인관계치료 (Interpersonal Psychotherapy for Eating Disorders)",
    "terminology_ko": "대인관계치료",
    "terminology_en": "Interpersonal Psychotherapy for Eating Disorders",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "섭식장애의 발생 및 유지와 관련된 대인관계 문제(역할 전환, 역할 갈등, 대인관계 결핍, 애도)에 초점을 맞추어 대인관계 기능을 개선함으로써 섭식 병리를 감소시키는 구조화된 심리치료이다.",
    "definition_en": "A structured psychotherapy that reduces eating pathology by improving interpersonal functioning, focusing on interpersonal problems (role transitions, role disputes, interpersonal deficits, grief) related to the development and maintenance of eating disorders.",
    "significance": "섭식 행동을 직접 다루지 않으면서도 효과적인 대안적 치료로, CBT에 반응하지 않는 환자에게 적용할 수 있다.",
    "key_researchers": [
      {
        "name_ko": "데니스 윌플리",
        "name_en": "Denise Wilfley",
        "contribution": "폭식장애에 대한 IPT의 효과를 무작위 통제 시험으로 입증하고 섭식장애 특화 IPT 프로토콜을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "섭식장애의 CBT",
        "name_en": "CBT for Eating Disorders",
        "id": "EATING_CBT_027"
      },
      {
        "name_ko": "폭식장애",
        "name_en": "Binge Eating Disorder",
        "id": "EATING_BED_003"
      },
      {
        "name_ko": "신경성 폭식증",
        "name_en": "Bulimia Nervosa",
        "id": "EATING_BUL_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "IPT-ED: 4가지 대인관계 문제 영역 — 애도, 역할갈등, 역할전환, 대인관계 결핍",
      "differential": "IPT는 대인관계 문제에 초점을 맞추고 섭식 행동을 직접 다루지 않는 반면, CBT는 섭식 행동과 인지적 왜곡을 직접 표적으로 한다.",
      "key_point": "IPT는 CBT보다 초기 효과는 느리지만, 장기 추적에서 유사한 결과를 보이며 특히 폭식장애에서 효과적이다.",
      "common_mistake": "IPT가 섭식 행동을 다루지 않으므로 효과가 없다고 오해하지만, 대인관계 개선이 부정적 정서 감소를 통해 간접적으로 섭식 행동을 개선한다."
    }
  },
  {
    "id": "EATING_RFS_029",
    "terminology": "재급식 증후군 (Refeeding Syndrome)",
    "terminology_ko": "재급식 증후군",
    "terminology_en": "Refeeding Syndrome",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "장기간의 심각한 영양 결핍 후 급격한 영양 재공급 시 발생하는 잠재적으로 치명적인 대사 합병증으로, 저인산혈증, 전해질 불균형, 체액 이동, 심장 부전 등이 특징이다.",
    "definition_en": "A potentially fatal metabolic complication occurring during rapid nutritional rehabilitation after prolonged severe malnutrition, characterized by hypophosphatemia, electrolyte imbalances, fluid shifts, and cardiac failure.",
    "significance": "신경성 식욕부진증 치료의 가장 위험한 의학적 합병증으로, 영양 재공급의 신중한 프로토콜이 필수적임을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "앤셀 키스",
        "name_en": "Ancel Keys",
        "contribution": "미네소타 기아 실험에서 재급식 과정의 위험성을 처음으로 관찰하여 재급식 증후군의 이해에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      },
      {
        "name_ko": "무월경",
        "name_en": "Amenorrhea",
        "id": "EATING_AMN_020"
      },
      {
        "name_ko": "가족기반치료",
        "name_en": "Family-Based Treatment",
        "id": "EATING_FBT_026"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "재급식 증후군: 기아 → 급격한 재급식 → 인슐린 급증 → 세포 내 인산 이동 → 저인산혈증 → 심부전 위험",
      "differential": "재급식 증후군은 영양 재공급 시 발생하는 대사 합병증이고, 기아 상태의 합병증(서맥, 저혈압 등)은 영양 부족 자체의 결과이다.",
      "key_point": "저인산혈증(hypophosphatemia)이 핵심 문제이며, 'start low, go slow(낮게 시작하여 천천히 증가)' 원칙에 따라 칼로리를 점진적으로 늘려야 한다.",
      "common_mistake": "굶은 환자에게 빠르게 많은 음식을 제공하는 것이 좋다고 오해하지만, 급격한 재급식은 생명을 위협하는 대사 합병증을 유발할 수 있다."
    }
  },
  {
    "id": "EATING_WST_030",
    "terminology": "체중 낙인 (Weight Stigma)",
    "terminology_ko": "체중 낙인",
    "terminology_en": "Weight Stigma",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "체중이나 체형을 근거로 개인에게 부여되는 부정적 태도, 편견, 차별로, 과체중이나 비만인 사람에 대한 사회적 비난과 불이익을 포함하며, 섭식 병리와 정신건강 악화에 기여한다.",
    "definition_en": "Negative attitudes, prejudice, and discrimination directed at individuals based on their weight or body size, including social blame and disadvantage toward overweight or obese persons, contributing to eating pathology and mental health deterioration.",
    "significance": "사회적 편견이 건강 행동과 정신건강에 미치는 부정적 영향을 보여주며, 건강 중심 접근(HAES)의 이론적 배경이 된다.",
    "key_researchers": [
      {
        "name_ko": "레베카 풀",
        "name_en": "Rebecca Puhl",
        "contribution": "체중 낙인의 실태와 건강에 미치는 영향을 체계적으로 연구하고 반편견 개입을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      },
      {
        "name_ko": "폭식장애",
        "name_en": "Binge Eating Disorder",
        "id": "EATING_BED_003"
      },
      {
        "name_ko": "직관적 식사",
        "name_en": "Intuitive Eating",
        "id": "EATING_ITE_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "체중 낙인 = '뚱뚱한 것은 게으르고 의지력이 없어서' — 이런 편견이 오히려 건강을 해침",
      "differential": "체중 낙인은 사회적 편견과 차별이고, 체형 불만족은 자신의 체형에 대한 주관적 부정적 평가이다.",
      "key_point": "체중 낙인은 스트레스 반응, 폭식 증가, 운동 회피, 의료 이용 기피를 유발하여 건강을 악화시키는 역설적 효과를 나타낸다.",
      "common_mistake": "체중 낙인이 비만인의 체중 감량 동기를 높인다고 오해하지만, 실제로는 정서적 섭식 증가와 운동 회피를 촉진한다."
    }
  },
  {
    "id": "EATING_ITE_031",
    "terminology": "직관적 식사 (Intuitive Eating)",
    "terminology_ko": "직관적 식사",
    "terminology_en": "Intuitive Eating",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "배고픔과 포만감이라는 내부 신호에 따라 식사하고, 음식에 대한 도덕적 판단을 배제하며, 신체의 자연스러운 요구를 존중하는 비다이어트 접근법으로, 섭식장애 회복과 건강한 식사 관계 형성에 활용된다.",
    "definition_en": "A non-diet approach to eating based on internal hunger and satiety cues, removing moral judgments about food and respecting the body's natural needs, used in eating disorder recovery and developing a healthy relationship with food.",
    "significance": "다이어트 문화에 대한 대안으로서, 섭식장애 예방과 회복에서 신체 신호에 대한 재연결의 중요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "에블린 트리볼",
        "name_en": "Evelyn Tribole",
        "contribution": "1995년 직관적 식사(Intuitive Eating) 프레임워크를 공동 개발하고 10가지 원칙을 체계화했다."
      },
      {
        "name_ko": "엘리스 레쉬",
        "name_en": "Elyse Resch",
        "contribution": "직관적 식사를 공동 개발하고 임상 적용을 확대했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "설정점 이론",
        "name_en": "Set Point Theory",
        "id": "EATING_SPT_019"
      },
      {
        "name_ko": "체중 낙인",
        "name_en": "Weight Stigma",
        "id": "EATING_WST_030"
      },
      {
        "name_ko": "극단적 식이제한",
        "name_en": "Extreme Dietary Restriction",
        "id": "EATING_EDR_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "직관적 식사 10원칙의 핵심: 다이어트 멘탈리티 거부, 배고픔 존중, 음식과 화해, 만족감 발견",
      "differential": "직관적 식사는 내부 신호에 따른 자율적 식사이고, 식이제한은 외부 규칙(칼로리, 금지 음식)에 따른 통제적 식사이다.",
      "key_point": "직관적 식사는 체중 감량을 목표로 하지 않으며, 연구에서 개선된 심리적 건강, 섭식 병리 감소, 신체 만족도 증가와 관련된다.",
      "common_mistake": "직관적 식사를 '먹고 싶은 대로 아무거나 먹는 것'으로 오해하지만, 신체 신호에 대한 주의 깊은 경청과 자기 돌봄을 포함하는 체계적 접근이다."
    }
  },
  {
    "id": "EATING_PAM_032",
    "terminology": "프로아나/프로미아 운동 (Pro-Ana/Pro-Mia Movement)",
    "terminology_ko": "프로아나/프로미아 운동",
    "terminology_en": "Pro-Ana/Pro-Mia Movement",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "인터넷 커뮤니티를 중심으로 신경성 식욕부진증(pro-ana)이나 신경성 폭식증(pro-mia)을 질병이 아닌 생활 방식으로 옹호하고, 극단적 다이어트 방법과 제거 기법을 공유하는 온라인 운동이다.",
    "definition_en": "An online movement centered on internet communities that advocates anorexia nervosa (pro-ana) or bulimia nervosa (pro-mia) as lifestyle choices rather than disorders, sharing extreme dieting methods and purging techniques.",
    "significance": "인터넷 시대의 섭식장애 전파 경로를 보여주며, 온라인 환경에서의 유해 콘텐츠 규제와 디지털 리터러시의 필요성을 제기한다.",
    "key_researchers": [
      {
        "name_ko": "스테파니 바드비",
        "name_en": "Stephanie Bardone-Cone",
        "contribution": "프로아나 웹사이트 노출이 체형 불만족과 부정적 정서에 미치는 영향을 실험적으로 입증했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마른 이상",
        "name_en": "Thin Ideal",
        "id": "EATING_THN_010"
      },
      {
        "name_ko": "섭식장애의 사회문화적 모형",
        "name_en": "Sociocultural Model of Eating Disorders",
        "id": "EATING_SCM_024"
      },
      {
        "name_ko": "체형 불만족",
        "name_en": "Body Dissatisfaction",
        "id": "EATING_BDS_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Pro-ana = pro(지지) + ana(anorexia) — 섭식장애를 '라이프스타일'로 미화하는 위험한 온라인 운동",
      "differential": "프로아나 커뮤니티는 섭식장애를 옹호하고, 회복 지향 커뮤니티는 치료와 회복을 지원한다.",
      "key_point": "프로아나 웹사이트 노출은 체형 불만족, 다이어트 의도, 부정적 정서를 증가시키며, 특히 취약한 개인에게 위험하다.",
      "common_mistake": "프로아나 커뮤니티가 단순한 지지 그룹이라고 오해하지만, 이들은 섭식장애 행동을 적극적으로 촉진하고 치료를 방해한다."
    }
  },
  {
    "id": "EATING_PFC_033",
    "terminology": "완벽주의와 섭식장애 (Perfectionism and Eating Disorders)",
    "terminology_ko": "완벽주의와 섭식장애",
    "terminology_en": "Perfectionism and Eating Disorders",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "완벽주의 성향, 특히 자기-지향적 완벽주의와 사회적으로 부과된 완벽주의가 섭식장애의 발생, 유지, 치료 저항의 핵심 성격 위험 요인으로 작용하는 관계를 설명하는 개념이다.",
    "definition_en": "A concept explaining how perfectionism, particularly self-oriented and socially prescribed perfectionism, serves as a core personality risk factor for the development, maintenance, and treatment resistance of eating disorders.",
    "significance": "섭식장애의 성격적 취약 요인으로서, Fairburn의 초진단적 모형에서 4가지 핵심 유지 요인 중 하나로 포함된다.",
    "key_researchers": [
      {
        "name_ko": "안나 바르도네-콘",
        "name_en": "Anna Bardone-Cone",
        "contribution": "완벽주의와 섭식장애의 관계에 대한 메타분석적 연구를 수행했다."
      },
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "완벽주의를 섭식장애의 초진단적 유지 요인 중 하나로 포함시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "Fairburn의 초진단적 모형",
        "name_en": "Fairburn's Transdiagnostic Model",
        "id": "EATING_FTM_034"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions in Eating Disorders",
        "id": "EATING_CDT_023"
      },
      {
        "name_ko": "신경성 식욕부진증",
        "name_en": "Anorexia Nervosa",
        "id": "EATING_ANN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "완벽주의 → '완벽한 체형' 추구 → 극단적 제한 → 실패 시 자기비난 → 폭식/악화",
      "differential": "임상적 완벽주의는 자기가치가 성취에 의존하고 기준 미달 시 극심한 고통을 경험하는 반면, 건강한 높은 기준은 유연하고 실패에 적응적이다.",
      "key_point": "완벽주의는 섭식장애의 위험 요인이자 유지 요인이며, 치료 후에도 지속되어 재발 위험을 높이는 잔여 특성이다.",
      "common_mistake": "완벽주의가 섭식장애 회복 후 자연히 사라진다고 오해하지만, 완벽주의는 독립적으로 치료해야 하는 지속적 성격 특성이다."
    }
  },
  {
    "id": "EATING_FTM_034",
    "terminology": "Fairburn의 초진단적 모형 (Fairburn's Transdiagnostic Model)",
    "terminology_ko": "Fairburn의 초진단적 모형",
    "terminology_en": "Fairburn's Transdiagnostic Model",
    "category": "EATING",
    "category_name": "섭식장애 (Eating Disorders)",
    "definition": "모든 섭식장애가 공통된 핵심 병리('체형과 체중에 의한 자기 평가의 과대 결정')를 공유하며, 임상적 완벽주의, 핵심 낮은 자존감, 정서 조절 곤란, 대인관계 어려움이 유지 요인으로 작용한다는 통합적 이론 모형이다.",
    "definition_en": "An integrative theoretical model proposing that all eating disorders share a common core pathology ('over-evaluation of shape, weight, and their control') maintained by clinical perfectionism, core low self-esteem, mood intolerance, and interpersonal difficulties.",
    "significance": "섭식장애 진단 간 경계의 인위성을 극복하고 통합적 치료(CBT-E)의 이론적 기반을 제공하는 혁신적 모형이다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 페어번",
        "name_en": "Christopher Fairburn",
        "contribution": "2003년 초진단적 모형을 제안하고 이를 기반으로 CBT-E를 개발하여 섭식장애 치료의 패러다임을 변화시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "섭식장애의 CBT",
        "name_en": "CBT for Eating Disorders",
        "id": "EATING_CBT_027"
      },
      {
        "name_ko": "완벽주의와 섭식장애",
        "name_en": "Perfectionism and Eating Disorders",
        "id": "EATING_PFC_033"
      },
      {
        "name_ko": "인지적 왜곡",
        "name_en": "Cognitive Distortions in Eating Disorders",
        "id": "EATING_CDT_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Fairburn 초진단적 모형의 4가지 유지 요인: (1)완벽주의 (2)낮은 자존감 (3)정서조절곤란 (4)대인관계 어려움",
      "differential": "초진단적 모형은 AN, BN, BED의 공통 핵심 병리를 강조하는 반면, 전통적 접근은 각 진단의 독특한 특성을 강조한다.",
      "key_point": "핵심 병리는 '체형과 체중 및 그 통제에 의한 자기 평가의 과대 결정'이며, 이것이 모든 섭식장애에 공통된다.",
      "common_mistake": "초진단적 모형이 섭식장애 간의 차이를 무시한다고 오해하지만, 공통 병리를 인정하면서도 개별적 표현의 차이를 설명한다."
    }
  }
];

TERMS_DATA.SEXUAL = [
  {
    "id": "SEXUAL_SRC_001",
    "terminology": "성반응주기 (Sexual Response Cycle)",
    "terminology_ko": "성반응주기",
    "terminology_en": "Sexual Response Cycle",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성적 흥분에서 해소까지의 생리적·심리적 반응 과정으로, Masters와 Johnson이 제안한 4단계 모형(흥분기-고조기-절정기-해소기)이 대표적이며, 성기능장애 이해의 기본 틀이 된다.",
    "definition_en": "The physiological and psychological process from sexual arousal to resolution, with the four-phase model (excitement-plateau-orgasm-resolution) proposed by Masters and Johnson serving as the foundational framework for understanding sexual dysfunctions.",
    "significance": "성기능장애의 진단과 분류의 기본 틀로, 각 단계에서의 기능 이상이 특정 성기능장애와 연결된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "Virginia Johnson과 함께 성반응의 생리학적 연구를 수행하고 4단계 성반응주기 모형을 제안했다."
      },
      {
        "name_ko": "버지니아 존슨",
        "name_en": "Virginia Johnson",
        "contribution": "William Masters와 함께 인간 성반응에 대한 실험실 연구를 수행하고 성치료 기법을 개발했다."
      },
      {
        "name_ko": "헬렌 카플란",
        "name_en": "Helen Singer Kaplan",
        "contribution": "성반응주기에 욕구(desire) 단계를 추가하여 3단계 모형(욕구-흥분-절정)을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "남성 발기장애",
        "name_en": "Erectile Disorder",
        "id": "SEXUAL_ERD_002"
      },
      {
        "name_ko": "여성 성적 관심/흥분장애",
        "name_en": "Female Sexual Interest/Arousal Disorder",
        "id": "SEXUAL_FSA_003"
      }
    ],
    "sub_types": [
      {
        "name": "흥분기(Excitement)",
        "description": "성적 자극에 대한 초기 생리적 반응(혈관 충혈, 근긴장 증가)"
      },
      {
        "name": "고조기(Plateau)",
        "description": "흥분이 최고조에 이르기 직전의 고조된 상태"
      },
      {
        "name": "절정기(Orgasm)",
        "description": "성적 쾌감의 최고점, 근육 수축과 긴장 해소"
      },
      {
        "name": "해소기(Resolution)",
        "description": "신체가 비흥분 상태로 돌아가는 단계"
      }
    ],
    "quiz_hints": {
      "mnemonic": "성반응주기 4단계: 흥분(E) → 고조(P) → 절정(O) → 해소(R) — Kaplan은 욕구(D)를 추가",
      "differential": "Masters & Johnson 모형은 4단계(흥분-고조-절정-해소)이고, Kaplan 모형은 3단계(욕구-흥분-절정)이다.",
      "key_point": "DSM-5의 성기능장애 분류는 주로 Kaplan의 3단계(욕구-흥분-절정)에 기반하여 각 단계의 장애를 구분한다.",
      "common_mistake": "성반응주기가 모든 사람에게 동일하게 적용된다고 오해하지만, 개인차가 크며 특히 여성의 성반응은 선형적이지 않을 수 있다."
    }
  },
  {
    "id": "SEXUAL_ERD_002",
    "terminology": "남성 발기장애 (Erectile Disorder)",
    "terminology_ko": "남성 발기장애",
    "terminology_en": "Erectile Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성행위 시 발기를 획득하거나 유지하는 데 현저한 어려움이 반복적으로 나타나는 성기능장애로, 최소 6개월 이상 지속되어야 하며, 심리적 요인과 의학적 요인이 모두 관여할 수 있다.",
    "definition_en": "A sexual dysfunction characterized by recurrent marked difficulty obtaining or maintaining an erection during sexual activity, lasting at least 6 months, with both psychological and medical factors potentially involved.",
    "significance": "가장 흔한 남성 성기능장애 중 하나로, 수행 불안과 생물학적 요인의 상호작용을 이해하는 핵심 진단이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "성기능장애의 심리적 치료를 개척하고 발기장애에서 수행 불안의 역할을 규명했다."
      },
      {
        "name_ko": "레이먼드 로젠",
        "name_en": "Raymond Rosen",
        "contribution": "발기기능 국제지수(IIEF)를 개발하여 발기장애의 표준적 평가를 가능하게 했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "남성 성욕감퇴장애",
        "name_en": "Male Hypoactive Sexual Desire Disorder",
        "id": "SEXUAL_MHD_008"
      }
    ],
    "sub_types": [
      {
        "name": "평생형",
        "description": "첫 성경험부터 지속적으로 존재"
      },
      {
        "name": "후천형",
        "description": "정상 기능 이후에 발생"
      },
      {
        "name": "전반형",
        "description": "모든 상황에서 나타남"
      },
      {
        "name": "상황형",
        "description": "특정 상황에서만 나타남"
      }
    ],
    "quiz_hints": {
      "mnemonic": "발기장애: 수행 불안 → 자기관찰(spectatoring) → 흥분 억제 → 발기 실패 → 불안 강화의 악순환",
      "differential": "발기장애는 흥분기(발기) 문제이고, 조기 사정은 절정기 조절 문제이며, 지연 사정은 절정 도달 지연 문제이다.",
      "key_point": "야간 발기(NPT) 검사를 통해 심인성과 기질성을 감별할 수 있다. 야간 발기가 정상이면 심인성 가능성이 높다.",
      "common_mistake": "발기장애가 모두 심리적 원인이라고 오해하지만, 혈관 질환, 당뇨, 약물 부작용 등 의학적 원인이 40-50%를 차지한다."
    }
  },
  {
    "id": "SEXUAL_FSA_003",
    "terminology": "여성 성적 관심/흥분장애 (Female Sexual Interest/Arousal Disorder)",
    "terminology_ko": "여성 성적 관심/흥분장애",
    "terminology_en": "Female Sexual Interest/Arousal Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성적 관심이나 흥분이 현저하게 감소하거나 부재하여, 성적 환상·사고 결여, 성적 활동의 시작·수용 감소, 성적 쾌감·흥분 감소 중 3가지 이상이 최소 6개월 지속되는 장애이다.",
    "definition_en": "A disorder characterized by markedly diminished or absent sexual interest or arousal, with at least three of the following persisting for at least 6 months: absent sexual fantasies/thoughts, reduced initiation/receptivity to sexual activity, or reduced sexual pleasure/excitement.",
    "significance": "DSM-5에서 여성 성욕감퇴장애와 여성 흥분장애를 통합한 진단으로, 여성 성반응의 복잡성을 반영한 변화이다.",
    "key_researchers": [
      {
        "name_ko": "로지마리 바손",
        "name_en": "Rosemary Basson",
        "contribution": "여성의 순환적 성반응 모형을 제안하여 여성 성적 관심의 비선형적 특성을 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "여성 극치감장애",
        "name_en": "Female Orgasmic Disorder",
        "id": "SEXUAL_FOD_006"
      },
      {
        "name_ko": "성교통증/삽입장애",
        "name_en": "Genito-Pelvic Pain/Penetration Disorder",
        "id": "SEXUAL_GPP_007"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FSIAD = DSM-IV의 HSDD(성욕감퇴) + FSAD(흥분장애) 통합 — 여성에서 욕구와 흥분이 분리 불가하기 때문",
      "differential": "여성 성적 관심/흥분장애는 성적 관심·흥분의 감소이고, 여성 극치감장애는 흥분은 가능하나 절정 도달에 어려움이 있는 것이다.",
      "key_point": "DSM-5에서 여성의 성욕(desire)과 흥분(arousal)이 밀접하게 연결되어 있다는 Basson의 순환적 모형을 반영하여 통합 진단이 만들어졌다.",
      "common_mistake": "여성의 성적 관심이 남성처럼 자발적이어야 한다고 오해하지만, 많은 여성에서 성적 관심은 관계적 맥락에서 반응적으로 나타난다."
    }
  },
  {
    "id": "SEXUAL_DEJ_004",
    "terminology": "지연 사정 (Delayed Ejaculation)",
    "terminology_ko": "지연 사정",
    "terminology_en": "Delayed Ejaculation",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "파트너와의 성행위 중 사정의 현저한 지연이나 드물게 또는 전혀 사정하지 못하는 상태가 최소 6개월 이상 반복적으로 나타나며 임상적 고통을 유발하는 성기능장애이다.",
    "definition_en": "A sexual dysfunction characterized by marked delay in or infrequent or absence of ejaculation during partnered sexual activity, recurring for at least 6 months and causing clinically significant distress.",
    "significance": "가장 덜 연구된 남성 성기능장애로, 심리적 요인과 신경학적 요인의 복합적 상호작용을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "마르셀 발트하세스",
        "name_en": "Marcel Waldinger",
        "contribution": "사정 장애의 신경생물학적 이론을 발전시키고 체계적인 분류 기준을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "조기 사정",
        "name_en": "Premature Ejaculation",
        "id": "SEXUAL_PEJ_005"
      },
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "남성 발기장애",
        "name_en": "Erectile Disorder",
        "id": "SEXUAL_ERD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "지연 사정 = 절정기 도달 지연 — '너무 오래 걸리거나 전혀 안 됨'이 핵심",
      "differential": "지연 사정은 사정까지 과도하게 긴 시간이 걸리는 것이고, 조기 사정은 원하는 것보다 너무 빨리 사정하는 것이다.",
      "key_point": "SSRI 항우울제의 부작용으로 흔히 나타나며, 이 부작용을 역이용하여 조기 사정 치료에 SSRI를 사용하기도 한다.",
      "common_mistake": "지연 사정이 남성의 성적 능력이 뛰어나다는 의미로 오해하지만, 이는 고통과 관계 문제를 유발하는 성기능장애이다."
    }
  },
  {
    "id": "SEXUAL_PEJ_005",
    "terminology": "조기 사정 (Premature Ejaculation)",
    "terminology_ko": "조기 사정",
    "terminology_en": "Premature Ejaculation",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "질 삽입 약 1분 이내에 원치 않는 사정이 반복적으로 발생하며, 사정 시점을 조절할 수 없고 부정적 결과(고통, 좌절, 성행위 회피)를 초래하는 성기능장애이다.",
    "definition_en": "A sexual dysfunction characterized by recurrent ejaculation occurring within approximately 1 minute of vaginal penetration, with inability to delay ejaculation and negative consequences including distress, frustration, and avoidance of sexual activity.",
    "significance": "가장 흔한 남성 성기능장애로, 세로토닌 신경전달 체계의 역할을 포함한 생물심리사회적 이해가 발전하고 있다.",
    "key_researchers": [
      {
        "name_ko": "마르셀 발트하세스",
        "name_en": "Marcel Waldinger",
        "contribution": "조기 사정의 신경생물학적 이론(세로토닌 가설)을 제안하고 사정잠복시간(IELT) 연구를 수행했다."
      },
      {
        "name_ko": "제임스 세만즈",
        "name_en": "James Semans",
        "contribution": "조기 사정의 행동 치료 기법(정지-시작 기법)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지연 사정",
        "name_en": "Delayed Ejaculation",
        "id": "SEXUAL_DEJ_004"
      },
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "인지행동적 성치료",
        "name_en": "Cognitive-Behavioral Sex Therapy",
        "id": "SEXUAL_CBS_031"
      }
    ],
    "sub_types": [
      {
        "name": "평생형",
        "description": "첫 성경험부터 지속적으로 존재"
      },
      {
        "name": "후천형",
        "description": "정상 사정 후 발생"
      }
    ],
    "quiz_hints": {
      "mnemonic": "PE: 삽입 ~1분 이내 사정 + 조절 불능 + 고통 — 가장 흔한 남성 성기능장애",
      "differential": "조기 사정은 사정이 너무 빠른 것(절정 타이밍 문제)이고, 발기장애는 발기를 유지하지 못하는 것(흥분 문제)이다.",
      "key_point": "치료 접근: 행동 기법(정지-시작법, 압착법) + 약물(SSRI, 국소 마취제) + 인지치료의 통합이 효과적이다.",
      "common_mistake": "조기 사정이 단순히 경험 부족 때문이라고 오해하지만, 세로토닌 체계의 생물학적 기반이 있는 경우가 많다."
    }
  },
  {
    "id": "SEXUAL_FOD_006",
    "terminology": "여성 극치감장애 (Female Orgasmic Disorder)",
    "terminology_ko": "여성 극치감장애",
    "terminology_en": "Female Orgasmic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "충분한 성적 흥분에도 불구하고 극치감(오르가즘)의 현저한 지연, 빈도 감소, 강도 감소, 또는 부재가 최소 6개월 이상 반복적으로 나타나며 임상적 고통을 유발하는 성기능장애이다.",
    "definition_en": "A sexual dysfunction characterized by marked delay in, infrequency of, reduced intensity of, or absence of orgasm despite adequate sexual stimulation, recurring for at least 6 months and causing clinically significant distress.",
    "significance": "여성 성건강의 핵심 이슈로, 성교육과 성적 자기탐색의 중요성을 강조하는 진단이다.",
    "key_researchers": [
      {
        "name_ko": "줄리아 헤이먼",
        "name_en": "Julia Heiman",
        "contribution": "여성 성적 흥분과 극치감의 심리생리학적 연구를 수행하여 여성 극치감장애의 이해를 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "여성 성적 관심/흥분장애",
        "name_en": "Female Sexual Interest/Arousal Disorder",
        "id": "SEXUAL_FSA_003"
      },
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "FOD = 충분한 흥분에도 극치감 도달 실패 — 흥분기는 정상, 절정기에 문제",
      "differential": "여성 극치감장애는 흥분은 가능하나 절정에 도달하지 못하는 것이고, 여성 성적 관심/흥분장애는 성적 관심·흥분 자체가 결여된 것이다.",
      "key_point": "약 10-15%의 여성이 어떤 상황에서도 극치감을 경험하지 못하며, 직접 지시 자위 훈련(directed masturbation)이 가장 효과적인 치료이다.",
      "common_mistake": "모든 여성이 성교를 통해 극치감에 도달해야 한다고 오해하지만, 약 70%의 여성은 삽입 성교만으로는 극치감에 도달하지 못한다."
    }
  },
  {
    "id": "SEXUAL_GPP_007",
    "terminology": "성교통증/삽입장애 (Genito-Pelvic Pain/Penetration Disorder)",
    "terminology_ko": "성교통증/삽입장애",
    "terminology_en": "Genito-Pelvic Pain/Penetration Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "질 삽입이나 성교 시 반복적으로 현저한 통증, 두려움, 또는 골반저근 긴장이 나타나는 장애로, DSM-5에서 성교통증(dyspareunia)과 질경련(vaginismus)을 통합한 진단이다.",
    "definition_en": "A disorder characterized by recurrent marked pain, fear, or pelvic floor muscle tension during vaginal intercourse or penetration, combining the DSM-IV diagnoses of dyspareunia and vaginismus in DSM-5.",
    "significance": "성교통증과 질경련의 임상적 중복을 인정한 통합 진단으로, 통증-두려움-회피의 악순환 모형에 대한 이해를 발전시켰다.",
    "key_researchers": [
      {
        "name_ko": "소피 버그롱",
        "name_en": "Sophie Bergeron",
        "contribution": "성교통증의 통증-두려움-회피 모형을 발전시키고 다학제적 치료 접근을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "여성 성적 관심/흥분장애",
        "name_en": "Female Sexual Interest/Arousal Disorder",
        "id": "SEXUAL_FSA_003"
      },
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "인지행동적 성치료",
        "name_en": "Cognitive-Behavioral Sex Therapy",
        "id": "SEXUAL_CBS_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "GPPPD = 성교통(Dyspareunia) + 질경련(Vaginismus) 통합 — 통증-두려움-긴장-회피의 악순환",
      "differential": "GPPPD는 삽입 시 통증·두려움·긴장이 핵심이고, 여성 성적 관심/흥분장애는 성적 관심이나 흥분의 감소가 핵심이다.",
      "key_point": "DSM-5에서 성교통증과 질경련이 통합된 이유는 두 장애가 임상적으로 구분이 어렵고 통증-두려움-회피라는 공통 기제를 공유하기 때문이다.",
      "common_mistake": "성교통증이 모두 심리적 원인이라고 오해하지만, 외음부 전정통(vulvodynia) 등 의학적 원인이 동반되는 경우가 흔하다."
    }
  },
  {
    "id": "SEXUAL_MHD_008",
    "terminology": "남성 성욕감퇴장애 (Male Hypoactive Sexual Desire Disorder)",
    "terminology_ko": "남성 성욕감퇴장애",
    "terminology_en": "Male Hypoactive Sexual Desire Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성적 환상, 사고, 성적 활동에 대한 욕구가 지속적으로 또는 반복적으로 결핍되거나 부재하여 임상적 고통을 유발하는 남성 성기능장애로, 최소 6개월 이상 지속되어야 한다.",
    "definition_en": "A male sexual dysfunction characterized by persistently or recurrently deficient or absent sexual fantasies, thoughts, and desire for sexual activity causing clinically significant distress, lasting at least 6 months.",
    "significance": "DSM-5에서 남성에게만 적용되는 독립 진단으로, 테스토스테론 수치와 심리적 요인의 상호작용을 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "헬렌 카플란",
        "name_en": "Helen Singer Kaplan",
        "contribution": "성욕(desire) 단계를 성반응주기에 추가하여 성욕감퇴장애의 개념적 토대를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "남성 발기장애",
        "name_en": "Erectile Disorder",
        "id": "SEXUAL_ERD_002"
      },
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "호르몬 치료",
        "name_en": "Hormonal Treatment",
        "id": "SEXUAL_HRM_030"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "MHSDD = 남성 + 성욕 감소 — 성적 환상·사고·욕구의 결핍이 핵심",
      "differential": "남성 성욕감퇴장애는 욕구 자체가 없는 것이고, 발기장애는 욕구는 있으나 발기가 안 되는 것이다.",
      "key_point": "DSM-5에서 남녀 성욕감퇴를 분리하여 남성에만 MHSDD를 적용하고, 여성은 FSIAD로 통합한 이유는 남녀 성욕의 질적 차이를 반영한 것이다.",
      "common_mistake": "성욕 감퇴가 반드시 호르몬 문제라고 단정하지만, 우울증, 관계 갈등, 약물 부작용 등 다양한 심리사회적 요인이 관여한다."
    }
  },
  {
    "id": "SEXUAL_VOY_009",
    "terminology": "관음장애 (Voyeuristic Disorder)",
    "terminology_ko": "관음장애",
    "terminology_en": "Voyeuristic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "동의하지 않은 타인이 옷을 벗거나 성행위를 하는 것을 관찰하여 반복적이고 강렬한 성적 흥분을 경험하며, 이러한 충동에 따라 행동하거나 이로 인해 임상적 고통이나 기능 손상이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from observing unsuspecting persons who are undressing or engaging in sexual activity, with the individual acting on these urges or experiencing clinically significant distress or functional impairment.",
    "significance": "가장 흔한 변태성욕 중 하나로, 동의의 부재와 타인의 사생활 침해라는 법적·윤리적 문제를 포함한다.",
    "key_researchers": [
      {
        "name_ko": "커트 프런드",
        "name_en": "Kurt Freund",
        "contribution": "변태성욕의 구성과 분류에 대한 기본적 연구를 수행하고 음경 체적 측정법(phallometry)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "노출장애",
        "name_en": "Exhibitionistic Disorder",
        "id": "SEXUAL_EXH_010"
      },
      {
        "name_ko": "마찰도착장애",
        "name_en": "Frotteuristic Disorder",
        "id": "SEXUAL_FRT_011"
      },
      {
        "name_ko": "소아성애장애",
        "name_en": "Pedophilic Disorder",
        "id": "SEXUAL_PED_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "관음장애: voyeur(관찰자) — 동의 없이 타인의 은밀한 행동을 관찰하여 성적 흥분",
      "differential": "관음장애는 동의 없이 타인을 '관찰'하는 것이고, 노출장애는 동의 없이 자신의 성기를 '노출'하는 것이다.",
      "key_point": "DSM-5에서 변태성욕(paraphilia)과 변태성욕장애(paraphilic disorder)를 구분하여, 성적 공상만으로는 장애 진단을 하지 않고 행동화나 고통이 있어야 한다.",
      "common_mistake": "포르노그래피 시청을 관음장애와 혼동하지만, 관음장애는 동의하지 않은 실제 타인의 관찰이 핵심이다."
    }
  },
  {
    "id": "SEXUAL_EXH_010",
    "terminology": "노출장애 (Exhibitionistic Disorder)",
    "terminology_ko": "노출장애",
    "terminology_en": "Exhibitionistic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "동의하지 않은 타인에게 자신의 성기를 노출함으로써 반복적이고 강렬한 성적 흥분을 경험하며, 이러한 충동에 따라 행동하거나 이로 인해 임상적 고통이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from exposing one's genitals to unsuspecting persons, with the individual acting on these urges or experiencing clinically significant distress.",
    "significance": "법적 성범죄와 직결되는 변태성욕장애로, 성범죄 위험 평가와 예방에 중요한 진단이다.",
    "key_researchers": [
      {
        "name_ko": "론 랭지뱅",
        "name_en": "Ron Langevin",
        "contribution": "노출장애를 포함한 변태성욕의 다차원적 평가와 치료에 대한 포괄적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "마찰도착장애",
        "name_en": "Frotteuristic Disorder",
        "id": "SEXUAL_FRT_011"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "노출장애: exhibitionist(노출광) — 동의 없이 성기 노출 → 상대의 놀라는 반응에서 성적 흥분",
      "differential": "노출장애는 자신의 성기를 동의 없이 노출하는 것이고, 관음장애는 타인의 은밀한 행동을 동의 없이 관찰하는 것이다.",
      "key_point": "노출장애에서 성적 흥분의 핵심은 대상의 놀라거나 충격받는 반응이며, 실제 성적 접촉을 목표로 하지 않는 경우가 많다.",
      "common_mistake": "노출장애자가 반드시 다른 성범죄로 발전한다고 단정하지만, 대부분의 노출장애자는 비접촉 범죄에 머문다."
    }
  },
  {
    "id": "SEXUAL_FRT_011",
    "terminology": "마찰도착장애 (Frotteuristic Disorder)",
    "terminology_ko": "마찰도착장애",
    "terminology_en": "Frotteuristic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "동의하지 않은 타인에게 자신의 몸(특히 성기)을 접촉하거나 문지르는 것에서 반복적이고 강렬한 성적 흥분을 경험하는 변태성욕장애로, 주로 혼잡한 공공장소에서 발생한다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from touching or rubbing one's body (especially genitals) against an unsuspecting person, typically occurring in crowded public places.",
    "significance": "공공장소에서의 성범죄와 관련되며, 피해자의 심리적 영향과 법적 대응의 필요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "커트 프런드",
        "name_en": "Kurt Freund",
        "contribution": "마찰도착을 포함한 구애장애(courtship disorder) 이론을 제안하여 관련 변태성욕의 통합적 이해를 시도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "노출장애",
        "name_en": "Exhibitionistic Disorder",
        "id": "SEXUAL_EXH_010"
      },
      {
        "name_ko": "충동성과 공격성",
        "name_en": "Impulsivity and Aggression",
        "id": "SEXUAL_IMP_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마찰도착(Frotteurism): frotteur(문지르는 사람) — 혼잡한 장소에서 동의 없이 접촉/마찰",
      "differential": "마찰도착장애는 동의 없는 접촉/마찰이 핵심이고, 성적 마조히즘/사디즘은 합의된 또는 비합의된 상황에서의 통증/굴욕이 핵심이다.",
      "key_point": "Freund의 구애장애 이론에 따르면, 관음-노출-마찰도착-가학적 강간은 정상 구애 순서의 왜곡된 형태이다.",
      "common_mistake": "마찰도착이 사소한 일탈로 취급되기 쉽지만, 피해자에게 심각한 심리적 영향을 미치는 성범죄이다."
    }
  },
  {
    "id": "SEXUAL_SMZ_012",
    "terminology": "성적 마조히즘장애 (Sexual Masochism Disorder)",
    "terminology_ko": "성적 마조히즘장애",
    "terminology_en": "Sexual Masochism Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "굴욕, 구속, 고통 경험으로부터 반복적이고 강렬한 성적 흥분을 느끼며, 이로 인해 임상적 고통이나 기능 손상이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from being humiliated, bound, or made to suffer, causing clinically significant distress or functional impairment.",
    "significance": "변태성욕의 진단에서 정상적 성적 다양성과 병리의 경계를 구분하는 중요한 논의를 촉발한다.",
    "key_researchers": [
      {
        "name_ko": "리하르트 폰 크라프트에빙",
        "name_en": "Richard von Krafft-Ebing",
        "contribution": "『성의 정신병리학(Psychopathia Sexualis, 1886)』에서 마조히즘을 포함한 성적 일탈을 최초로 체계적으로 분류했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성적 사디즘장애",
        "name_en": "Sexual Sadism Disorder",
        "id": "SEXUAL_SSD_013"
      },
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "충동성과 공격성",
        "name_en": "Impulsivity and Aggression",
        "id": "SEXUAL_IMP_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마조히즘 = 소설가 자허마조흐(Sacher-Masoch)에서 유래 — 고통받는 것에서 성적 흥분",
      "differential": "성적 마조히즘은 자신이 고통·굴욕을 받는 것이고, 성적 사디즘은 타인에게 고통·굴욕을 가하는 것이다.",
      "key_point": "DSM-5는 변태성욕(paraphilia)과 변태성욕장애(disorder)를 구분하여, 합의된 BDSM 자체는 장애가 아니며 고통이나 기능 손상이 있을 때만 진단한다.",
      "common_mistake": "합의된 BDSM 활동을 자동으로 성적 마조히즘장애로 진단하는 오류가 있으나, 장애 진단에는 임상적 고통이 필수이다."
    }
  },
  {
    "id": "SEXUAL_SSD_013",
    "terminology": "성적 사디즘장애 (Sexual Sadism Disorder)",
    "terminology_ko": "성적 사디즘장애",
    "terminology_en": "Sexual Sadism Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "타인에게 신체적·심리적 고통을 가함으로써 반복적이고 강렬한 성적 흥분을 경험하며, 동의하지 않은 타인에게 이를 행사하거나 이로 인해 임상적 고통이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from inflicting physical or psychological suffering on another person, enacted upon a non-consenting person or causing clinically significant distress.",
    "significance": "성범죄 및 성폭력과 밀접하게 관련되는 변태성욕장애로, 위험성 평가와 법의학적 평가에서 중요하다.",
    "key_researchers": [
      {
        "name_ko": "리하르트 폰 크라프트에빙",
        "name_en": "Richard von Krafft-Ebing",
        "contribution": "사디즘 용어를 마르키 드 사드의 이름에서 가져와 성적 일탈 분류에 포함시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성적 마조히즘장애",
        "name_en": "Sexual Masochism Disorder",
        "id": "SEXUAL_SMZ_012"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "충동성과 공격성",
        "name_en": "Impulsivity and Aggression",
        "id": "SEXUAL_IMP_032"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사디즘 = 마르키 드 사드(Marquis de Sade)에서 유래 — 타인에게 고통을 가하는 것에서 성적 흥분",
      "differential": "성적 사디즘은 타인에게 고통을 가하여 흥분하는 것이고, 성적 마조히즘은 자신이 고통을 받아 흥분하는 것이다.",
      "key_point": "비동의 대상에게 가학적 행동을 실행하면 행동화 기준으로 장애가 진단되며, 이는 법적 성범죄에 해당한다.",
      "common_mistake": "성적 사디즘장애자가 모두 성범죄자라고 단정하지만, 합의된 관계 내에서의 가학적 행위는 동의가 있을 때 범죄가 아니다."
    }
  },
  {
    "id": "SEXUAL_FTD_014",
    "terminology": "물품성도착장애 (Fetishistic Disorder)",
    "terminology_ko": "물품성도착장애",
    "terminology_en": "Fetishistic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "비생식 신체 부위나 무생물 대상(신발, 속옷 등)에 대한 반복적이고 강렬한 성적 흥분이 있으며, 이로 인해 임상적 고통이나 사회적·직업적 기능 손상이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from nonliving objects or non-genital body parts, causing clinically significant distress or impairment in social or occupational functioning.",
    "significance": "성적 흥분의 학습 과정과 조건형성의 역할을 이해하는 데 중요한 진단이다.",
    "key_researchers": [
      {
        "name_ko": "앨프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "1887년 '페티시즘(fetishism)' 용어를 성적 맥락에서 최초로 사용하고 학습 이론적 설명을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "복장도착장애",
        "name_en": "Transvestic Disorder",
        "id": "SEXUAL_TVD_016"
      },
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "인지행동적 성치료",
        "name_en": "Cognitive-Behavioral Sex Therapy",
        "id": "SEXUAL_CBS_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "물품성도착: 특정 물건(신발, 속옷) 또는 비생식기 부위(발)에 성적 흥분 — 고전적 조건형성 설명",
      "differential": "물품성도착장애는 무생물이나 비생식기 부위에 대한 성적 흥분이고, 복장도착장애는 이성의 의복을 착용하는 것에 대한 성적 흥분이다.",
      "key_point": "물품성도착의 발생은 고전적 조건형성으로 설명되며, 초기 성적 경험에서 특정 대상과 성적 흥분이 연합된 결과로 본다.",
      "common_mistake": "모든 페티시가 병리적이라고 오해하지만, 기능 손상이나 고통이 없으면 변태성욕(paraphilia)이지 장애(disorder)가 아니다."
    }
  },
  {
    "id": "SEXUAL_PED_015",
    "terminology": "소아성애장애 (Pedophilic Disorder)",
    "terminology_ko": "소아성애장애",
    "terminology_en": "Pedophilic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "사춘기 전 아동(일반적으로 13세 이하)에 대한 반복적이고 강렬한 성적 흥분이 최소 6개월 이상 지속되며, 이에 따라 행동하거나 대인관계 어려움을 초래하는 변태성욕장애로, 가해자는 최소 16세 이상이고 대상보다 5세 이상 연장이어야 한다.",
    "definition_en": "A paraphilic disorder characterized by recurrent, intense sexual arousal to prepubescent children (generally age 13 or younger) for at least 6 months, acted upon or causing interpersonal difficulty, with the perpetrator being at least 16 years old and 5 years older than the target.",
    "significance": "아동 성학대의 핵심 위험 요인으로, 아동 보호와 성범죄 예방 정책의 과학적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "제임스 캔터",
        "name_en": "James Cantor",
        "contribution": "소아성애의 신경발달적 기원을 연구하고 뇌 영상 연구를 통해 백질 구조 이상을 발견했다."
      },
      {
        "name_ko": "커트 프런드",
        "name_en": "Kurt Freund",
        "contribution": "음경 체적 측정법(phallometry)을 이용하여 소아성애의 객관적 평가 방법을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "호르몬 치료",
        "name_en": "Hormonal Treatment",
        "id": "SEXUAL_HRM_030"
      }
    ],
    "sub_types": [
      {
        "name": "배타적 유형",
        "description": "아동에게만 성적으로 끌리는 유형"
      },
      {
        "name": "비배타적 유형",
        "description": "아동과 성인 모두에게 성적으로 끌리는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "소아성애 진단 기준: (1) 사춘기 전 아동 대상 (2) 6개월+ (3) 16세+ (4) 대상보다 5세+",
      "differential": "소아성애장애는 사춘기 전 아동에 대한 지속적 성적 끌림이고, 아동 성학대는 법적 행위 개념으로 소아성애가 아닌 사람도 범할 수 있다.",
      "key_point": "소아성애(pedophilia)와 아동 성학대(child sexual abuse)는 다른 개념이다. 모든 성학대자가 소아성애자는 아니며, 모든 소아성애자가 성학대를 저지르지는 않는다.",
      "common_mistake": "소아성애자와 아동 성학대범을 동일시하지만, 상당수의 아동 성학대는 소아성애가 아닌 상황적 요인(접근성, 반사회성)에 의해 발생한다."
    }
  },
  {
    "id": "SEXUAL_TVD_016",
    "terminology": "복장도착장애 (Transvestic Disorder)",
    "terminology_ko": "복장도착장애",
    "terminology_en": "Transvestic Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "이성의 의복을 착용(cross-dressing)하는 것에서 반복적이고 강렬한 성적 흥분을 경험하며, 이로 인해 임상적 고통이나 사회적·직업적 기능 손상이 초래되는 변태성욕장애이다.",
    "definition_en": "A paraphilic disorder involving recurrent, intense sexual arousal from cross-dressing, causing clinically significant distress or impairment in social or occupational functioning.",
    "significance": "성적 흥분과 성별 정체성의 관계를 이해하는 데 중요하며, 성별불쾌감과의 감별이 필요한 진단이다.",
    "key_researchers": [
      {
        "name_ko": "레이 블랜차드",
        "name_en": "Ray Blanchard",
        "contribution": "복장도착과 자기여성애(autogynephilia) 개념을 제안하여 성적 흥분과 성별 정체성의 관계를 이론화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "물품성도착장애",
        "name_en": "Fetishistic Disorder",
        "id": "SEXUAL_FTD_014"
      },
      {
        "name_ko": "성별불쾌감",
        "name_en": "Gender Dysphoria",
        "id": "SEXUAL_GDY_017"
      },
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "복장도착: cross-dressing → 성적 흥분 — 성별 정체성이 아닌 '성적 흥분'이 핵심",
      "differential": "복장도착장애는 이성 의복 착용에서 성적 흥분을 얻는 것이고, 성별불쾌감은 타고난 성별에 대한 불일치감이다.",
      "key_point": "DSM-5에서 복장도착장애는 이성애 남성에게 주로 적용되며, 성별불쾌감과 물품성도착 명시자를 동반할 수 있다.",
      "common_mistake": "복장도착을 성별불쾌감이나 트랜스젠더 정체성과 혼동하지만, 복장도착장애의 핵심은 이성 의복 착용에 의한 '성적 흥분'이다."
    }
  },
  {
    "id": "SEXUAL_GDY_017",
    "terminology": "성별불쾌감 (Gender Dysphoria)",
    "terminology_ko": "성별불쾌감",
    "terminology_en": "Gender Dysphoria",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "경험하거나 표현하는 성별과 지정 성별 사이의 현저한 불일치가 최소 6개월 이상 지속되며, 이로 인해 임상적으로 유의미한 고통이나 사회적·직업적 기능 손상이 동반되는 상태이다.",
    "definition_en": "A condition characterized by marked incongruence between experienced or expressed gender and assigned gender lasting at least 6 months, accompanied by clinically significant distress or impairment in social or occupational functioning.",
    "significance": "DSM-5에서 성정체감장애(GID)를 대체한 진단으로, 비병리화(depathologization) 움직임과 트랜스젠더 건강 서비스 접근의 핵심이다.",
    "key_researchers": [
      {
        "name_ko": "해리 벤저민",
        "name_en": "Harry Benjamin",
        "contribution": "트랜스섹슈얼리즘 개념을 정립하고 호르몬 치료의 선구적 역할을 하여 성별 전환 의료의 기틀을 마련했다."
      },
      {
        "name_ko": "켄 주커",
        "name_en": "Kenneth Zucker",
        "contribution": "아동·청소년 성별불쾌감의 진단과 평가에 대한 포괄적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "복장도착장애",
        "name_en": "Transvestic Disorder",
        "id": "SEXUAL_TVD_016"
      },
      {
        "name_ko": "호르몬 치료",
        "name_en": "Hormonal Treatment",
        "id": "SEXUAL_HRM_030"
      },
      {
        "name_ko": "성적 지남력",
        "name_en": "Sexual Orientation",
        "id": "SEXUAL_SOR_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성별불쾌감 = '내가 느끼는 성별 ≠ 지정 성별' + 고통/기능손상",
      "differential": "성별불쾌감은 성별 정체성과 지정 성별의 불일치에 대한 고통이고, 복장도착장애는 이성 의복 착용에 의한 성적 흥분이다.",
      "key_point": "DSM-5에서 '성정체감장애(GID)'에서 '성별불쾌감(Gender Dysphoria)'으로 명칭이 변경되어 비병리화 방향으로 전환했다.",
      "common_mistake": "성별불쾌감과 성적 지남력(동성애 등)을 혼동하지만, 성별 정체성(gender identity)과 성적 지남력(sexual orientation)은 독립된 차원이다."
    }
  },
  {
    "id": "SEXUAL_IED_018",
    "terminology": "간헐적 폭발장애 (Intermittent Explosive Disorder)",
    "terminology_ko": "간헐적 폭발장애",
    "terminology_en": "Intermittent Explosive Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "촉발 상황에 비해 심각하게 불균형한 공격적 충동 폭발이 반복적으로 나타나는 충동조절장애로, 언어적·물리적 공격이 갑자기 발생하고 빠르게 소진되며, 행동 후 후회나 당혹감을 경험한다.",
    "definition_en": "An impulse-control disorder characterized by recurrent outbursts of aggressive impulses grossly out of proportion to the provocation, with sudden verbal or physical aggression that rapidly dissipates, followed by regret or embarrassment.",
    "significance": "충동적 공격성의 핵심 진단으로, 세로토닌 체계 이상과 전두엽-변연계 회로의 역할을 연구하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "에밀 코카로",
        "name_en": "Emil Coccaro",
        "contribution": "간헐적 폭발장애의 진단 기준을 체계화하고 세로토닌 기능 저하와 충동적 공격성의 관계를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "품행장애",
        "name_en": "Conduct Disorder",
        "id": "SEXUAL_CDR_022"
      },
      {
        "name_ko": "적대적 반항장애",
        "name_en": "Oppositional Defiant Disorder",
        "id": "SEXUAL_ODD_021"
      },
      {
        "name_ko": "충동성과 공격성",
        "name_en": "Impulsivity and Aggression",
        "id": "SEXUAL_IMP_032"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "IED = '감정 폭탄' — 사소한 촉발 → 과도한 폭발 → 빠른 소진 → 후회",
      "differential": "IED는 삽화적이고 반응적인 충동적 공격이고, 반사회적 성격장애의 공격성은 계획적·도구적인 경우가 많다.",
      "key_point": "DSM-5에서 공격 빈도 기준이 추가되어, 언어적 공격은 주 2회×3개월 또는 물리적 공격은 12개월 내 3회 이상으로 명시되었다.",
      "common_mistake": "IED를 단순한 '화 조절 문제'로 가볍게 여기지만, 세로토닌 기능 저하와 전전두엽-편도체 연결 이상이 관여하는 신경생물학적 기반이 있다."
    }
  },
  {
    "id": "SEXUAL_KLP_019",
    "terminology": "도벽증 (Kleptomania)",
    "terminology_ko": "도벽증",
    "terminology_en": "Kleptomania",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "개인적으로 필요하지 않거나 금전적 가치가 없는 물건을 훔치려는 충동에 반복적으로 저항하지 못하는 충동조절장애로, 절도 직전의 긴장 고조와 절도 시의 쾌감·안도감이 특징이다.",
    "definition_en": "An impulse-control disorder characterized by recurrent failure to resist urges to steal objects not needed for personal use or monetary value, with rising tension before the theft and pleasure or relief at the time of committing it.",
    "significance": "충동조절장애의 대표적 유형으로, 충동-행동-보상 순환과 행동 중독 모형의 이해에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "존 그랜트",
        "name_en": "Jon Grant",
        "contribution": "도벽증의 역학, 신경생물학, 약물 치료에 대한 체계적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "방화증",
        "name_en": "Pyromania",
        "id": "SEXUAL_PYR_020"
      },
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_018"
      },
      {
        "name_ko": "강박장애",
        "name_en": "OCD",
        "id": "OBSESS_OCD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "도벽증 3단계: 긴장 고조 → 절도 행위(쾌감/안도) → 죄책감/수치심",
      "differential": "도벽증은 불필요한 물건을 충동적으로 훔치는 것이고, 일반 절도는 물건이 필요하거나 금전적 이득을 위한 것이다.",
      "key_point": "도벽증 환자가 훔치는 물건은 대개 필요 없고 가치가 낮으며, 쉽게 구매할 수 있는 것이다. 핵심은 물건이 아닌 충동-긴장-해소의 순환이다.",
      "common_mistake": "도벽증을 단순한 절도 습관으로 치부하지만, 충동 조절의 실패이며 기분장애와 높은 공존율을 보인다."
    }
  },
  {
    "id": "SEXUAL_PYR_020",
    "terminology": "방화증 (Pyromania)",
    "terminology_ko": "방화증",
    "terminology_en": "Pyromania",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "의도적이고 계획적인 방화를 반복적으로 저지르는 충동조절장애로, 불에 대한 매혹과 호기심, 방화 전 긴장 또는 정서적 각성, 방화 시 쾌감·안도감이 특징이며, 금전적·정치적·복수 동기가 없어야 한다.",
    "definition_en": "An impulse-control disorder involving deliberate and purposeful fire setting on more than one occasion, characterized by fascination with fire, tension or emotional arousal before the act, and pleasure or relief when setting fires, without monetary, political, or revenge motives.",
    "significance": "매우 드문 순수 충동조절장애로, 불에 대한 매혹과 충동 조절 실패의 관계를 이해하는 데 중요하다.",
    "key_researchers": [
      {
        "name_ko": "제프리 건",
        "name_en": "Jeffrey Geller",
        "contribution": "방화 행동의 분류 체계와 방화증의 진단 기준에 대한 체계적 검토를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "도벽증",
        "name_en": "Kleptomania",
        "id": "SEXUAL_KLP_019"
      },
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_018"
      },
      {
        "name_ko": "품행장애",
        "name_en": "Conduct Disorder",
        "id": "SEXUAL_CDR_022"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "방화증: 불에 대한 매혹 + 충동 조절 실패 — 금전·복수·정치적 동기 '없음'이 필수",
      "differential": "방화증은 충동적·쾌감 추구적 방화이고, 반사회적 방화는 의도적·도구적 목적(보험금, 복수)이 있는 방화이다.",
      "key_point": "실제 방화증 진단은 매우 드물며, 대부분의 방화범은 방화증이 아닌 다른 동기(반사회성, 복수, 보험 사기 등)에 의한 것이다.",
      "common_mistake": "모든 방화범이 방화증이라고 오해하지만, 순수한 방화증은 전체 방화 사건의 극소수에 불과하다."
    }
  },
  {
    "id": "SEXUAL_ODD_021",
    "terminology": "적대적 반항장애 (Oppositional Defiant Disorder)",
    "terminology_ko": "적대적 반항장애",
    "terminology_en": "Oppositional Defiant Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "최소 6개월 이상 분노/과민한 기분, 논쟁적/반항적 행동, 보복심의 패턴이 지속되며, 권위적 인물에 대한 반복적인 반항과 적대적 행동으로 사회적·학업적 기능에 유의미한 손상을 초래하는 파괴적 행동장애이다.",
    "definition_en": "A disruptive behavior disorder characterized by a persistent pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness for at least 6 months, with repeated defiance and hostile behavior toward authority figures causing significant social or academic impairment.",
    "significance": "품행장애와 반사회적 성격장애로의 발달적 경로의 전구체로 연구되며, 조기 개입의 중요성을 강조한다.",
    "key_researchers": [
      {
        "name_ko": "러셀 바클리",
        "name_en": "Russell Barkley",
        "contribution": "ODD와 ADHD의 관계를 연구하고 발달적 경로에서 ODD의 위치를 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "품행장애",
        "name_en": "Conduct Disorder",
        "id": "SEXUAL_CDR_022"
      },
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_018"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ODD의 3가지 차원: (1) 분노/과민 기분 (2) 논쟁적/반항적 행동 (3) 보복심",
      "differential": "ODD는 반항과 적대적 기분이 핵심이고 심각한 규칙 위반은 없는 반면, 품행장애는 타인의 권리를 침해하는 심각한 규칙 위반이 특징이다.",
      "key_point": "ODD의 분노/과민 기분 차원은 우울·불안으로, 반항적 행동 차원은 품행장애·반사회성으로 발전할 위험이 있다.",
      "common_mistake": "ODD를 정상적인 반항기와 혼동하지만, ODD는 발달적으로 부적절한 수준의 지속적 패턴이며 기능 손상을 초래한다."
    }
  },
  {
    "id": "SEXUAL_CDR_022",
    "terminology": "품행장애 (Conduct Disorder)",
    "terminology_ko": "품행장애",
    "terminology_en": "Conduct Disorder",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "타인의 기본적 권리를 침해하거나 연령에 적합한 사회적 규범·규칙을 반복적으로 위반하는 지속적 행동 패턴으로, 사람과 동물에 대한 공격, 재산 파괴, 사기/절도, 심각한 규칙 위반이 포함된다.",
    "definition_en": "A persistent pattern of behavior violating others' basic rights or age-appropriate social norms and rules, including aggression toward people and animals, destruction of property, deceit/theft, and serious rule violations.",
    "significance": "성인기 반사회적 성격장애의 가장 강력한 예측 인자로, 발달정신병리학적 관점에서 조기 개입의 핵심 대상이다.",
    "key_researchers": [
      {
        "name_ko": "테리 모핏",
        "name_en": "Terrie Moffitt",
        "contribution": "품행 문제의 두 가지 발달 경로(생애지속형 vs. 청소년기한정형)를 제안한 발달적 분류법을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "적대적 반항장애",
        "name_en": "Oppositional Defiant Disorder",
        "id": "SEXUAL_ODD_021"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_018"
      },
      {
        "name_ko": "충동성과 공격성",
        "name_en": "Impulsivity and Aggression",
        "id": "SEXUAL_IMP_032"
      }
    ],
    "sub_types": [
      {
        "name": "아동기 발현형",
        "description": "10세 이전에 최소 1가지 증상 발현 — 더 심각하고 지속적"
      },
      {
        "name": "청소년기 발현형",
        "description": "10세 이전 증상 없음 — 예후가 상대적으로 양호"
      }
    ],
    "quiz_hints": {
      "mnemonic": "품행장애 4범주: (1) 사람·동물 공격 (2) 재산 파괴 (3) 사기·절도 (4) 규칙 위반 — 15가지 기준 중 3개+",
      "differential": "품행장애는 타인의 권리 침해와 심각한 규칙 위반이 핵심이고, ODD는 적대적 기분과 반항이 핵심이며 권리 침해는 없다.",
      "key_point": "DSM-5에서 '제한된 친사회적 정서(limited prosocial emotions)' 명시자가 추가되어, 냉담-무정서 특성(CU traits)이 있는 고위험 하위집단을 식별한다.",
      "common_mistake": "모든 품행장애 아동이 반사회적 성인이 된다고 단정하지만, Moffitt에 따르면 청소년기한정형은 성인기에 대부분 자연 소멸된다."
    }
  },
  {
    "id": "SEXUAL_CUT_023",
    "terminology": "냉담-무정서 특성 (Callous-Unemotional Traits)",
    "terminology_ko": "냉담-무정서 특성",
    "terminology_en": "Callous-Unemotional Traits",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "타인의 감정에 대한 공감 부족, 죄책감이나 양심의 가책 결여, 정서적 냉담함, 수행에 대한 무관심을 포함하는 성격 특성군으로, 품행장애의 더 심각하고 지속적인 형태와 관련된다.",
    "definition_en": "A cluster of personality traits including lack of empathy for others' feelings, absence of guilt or remorse, emotional callousness, and unconcern about performance, associated with more severe and persistent forms of conduct disorder.",
    "significance": "DSM-5에서 품행장애의 '제한된 친사회적 정서' 명시자의 기반이 되는 개념으로, 사이코패시의 발달적 전구체로 연구된다.",
    "key_researchers": [
      {
        "name_ko": "폴 프릭",
        "name_en": "Paul Frick",
        "contribution": "아동기 냉담-무정서 특성의 개념을 체계화하고 품행장애의 하위유형 분류에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "품행장애",
        "name_en": "Conduct Disorder",
        "id": "SEXUAL_CDR_022"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "경계선 성격장애",
        "name_en": "Borderline Personality Disorder",
        "id": "PERSON_BPD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CU 특성: Callous(냉담) + Unemotional(무정서) — 공감 부족, 죄책감 부재, 정서적 냉담",
      "differential": "CU 특성은 공감과 죄책감의 결핍이 핵심이고, 일반 품행장애는 반드시 공감 결핍을 포함하지 않는다.",
      "key_point": "CU 특성이 높은 품행장애 아동은 위험 신호에 대한 반응성이 낮고, 처벌 기반 훈육보다 보상 기반 접근이 더 효과적이다.",
      "common_mistake": "CU 특성이 변화 불가능하다고 단정하지만, 조기 개입(따뜻한 양육, 보상 중심 접근)으로 개선될 수 있다."
    }
  },
  {
    "id": "SEXUAL_SXE_024",
    "terminology": "성교육 (Sex Education)",
    "terminology_ko": "성교육",
    "terminology_en": "Sex Education",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "인간의 성에 대한 포괄적인 교육으로, 생식 건강, 성적 동의, 성적 다양성, 관계 기술, 안전한 성행위 등을 포함하며, 성기능장애와 성관련 문제의 예방에 기여하는 심리교육적 접근이다.",
    "definition_en": "Comprehensive education about human sexuality including reproductive health, sexual consent, sexual diversity, relationship skills, and safe sexual practices, serving as a psychoeducational approach contributing to prevention of sexual dysfunctions and sex-related problems.",
    "significance": "성기능장애의 예방과 치료에서 정확한 성 지식 제공이 핵심적 역할을 하며, 포괄적 성교육이 성 건강 향상에 기여한다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "과학적 성 연구에 기반한 성교육의 필요성을 대중에게 알렸다."
      },
      {
        "name_ko": "메리 칼데론",
        "name_en": "Mary Calderone",
        "contribution": "미국 SIECUS(성교육·정보 위원회)를 설립하여 포괄적 성교육 운동을 선도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성반응주기",
        "name_en": "Sexual Response Cycle",
        "id": "SEXUAL_SRC_001"
      },
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "성적 지남력",
        "name_en": "Sexual Orientation",
        "id": "SEXUAL_SOR_029"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "포괄적 성교육 = 생식 건강 + 동의 + 다양성 + 관계 기술 + 안전 — '금욕 전용' 교육의 대안",
      "differential": "포괄적 성교육은 다양한 주제를 과학적으로 다루는 반면, 금욕 전용 교육은 결혼 전 성관계 자제만을 강조한다.",
      "key_point": "연구에 따르면 포괄적 성교육이 금욕 전용 교육보다 성관련 위험 행동 감소와 성 건강 향상에 더 효과적이다.",
      "common_mistake": "성교육이 성적 행동을 조장한다고 오해하지만, 연구는 오히려 성교육이 안전한 성행위를 촉진하고 위험 행동을 감소시킨다는 것을 보여준다."
    }
  },
  {
    "id": "SEXUAL_STH_025",
    "terminology": "성치료 (Sex Therapy)",
    "terminology_ko": "성치료",
    "terminology_en": "Sex Therapy",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성기능장애의 치료를 위한 전문화된 심리치료 접근으로, 성교육, 행동 기법(감각집중훈련), 인지 재구조화, 의사소통 훈련 등을 통합하여 성적 문제를 해결하는 구조화된 치료이다.",
    "definition_en": "A specialized psychotherapeutic approach for treating sexual dysfunctions, integrating sex education, behavioral techniques (sensate focus), cognitive restructuring, and communication training in a structured treatment format.",
    "significance": "Masters와 Johnson이 개척한 성기능장애 치료의 핵심 분야로, 생물심리사회적 접근의 통합적 적용을 보여준다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "Virginia Johnson과 함께 현대 성치료를 개척하고 감각집중훈련을 핵심 기법으로 발전시켰다."
      },
      {
        "name_ko": "헬렌 카플란",
        "name_en": "Helen Singer Kaplan",
        "contribution": "정신역동적 접근과 행동 기법을 통합한 성치료 모형을 발전시켰다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "인지행동적 성치료",
        "name_en": "Cognitive-Behavioral Sex Therapy",
        "id": "SEXUAL_CBS_031"
      },
      {
        "name_ko": "성교육",
        "name_en": "Sex Education",
        "id": "SEXUAL_SXE_024"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "성치료 = Masters & Johnson의 유산 — 감각집중 + 성교육 + 의사소통 + 인지재구조화",
      "differential": "성치료는 성기능장애에 특화된 치료이고, 일반 심리치료는 성적 문제를 직접 다루지 않을 수 있다.",
      "key_point": "현대 성치료는 약물치료(PDE5 억제제 등)와 심리치료의 통합적 접근을 지향한다.",
      "common_mistake": "성치료가 성적 대리인과의 행위를 포함한다고 오해하지만, 현대 근거 기반 성치료는 교육과 심리치료 기법에 기반한다."
    }
  },
  {
    "id": "SEXUAL_PAR_026",
    "terminology": "변태성욕 (Paraphilia)",
    "terminology_ko": "변태성욕",
    "terminology_en": "Paraphilia",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "비전형적인 대상, 상황, 행동, 또는 개인에 대한 강렬하고 지속적인 성적 관심으로, 그 자체로는 정신장애가 아니며 개인의 고통이나 타인에 대한 해가 동반될 때만 변태성욕장애로 진단된다.",
    "definition_en": "An intense and persistent sexual interest in atypical objects, situations, activities, or individuals, which is not a mental disorder in itself and is diagnosed as a paraphilic disorder only when accompanied by personal distress or harm to others.",
    "significance": "DSM-5에서 변태성욕(paraphilia)과 변태성욕장애(paraphilic disorder)를 구분하여 정상적 성적 다양성과 병리의 경계를 재정립했다.",
    "key_researchers": [
      {
        "name_ko": "존 머니",
        "name_en": "John Money",
        "contribution": "변태성욕(paraphilia) 용어를 현대적 맥락에서 재정립하고 성적 일탈의 체계적 분류를 시도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "관음장애",
        "name_en": "Voyeuristic Disorder",
        "id": "SEXUAL_VOY_009"
      },
      {
        "name_ko": "물품성도착장애",
        "name_en": "Fetishistic Disorder",
        "id": "SEXUAL_FTD_014"
      },
      {
        "name_ko": "소아성애장애",
        "name_en": "Pedophilic Disorder",
        "id": "SEXUAL_PED_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Paraphilia(변태성욕) ≠ Paraphilic Disorder(변태성욕장애) — 고통이나 해가 있어야 '장애'",
      "differential": "변태성욕은 비전형적 성적 관심 자체이고, 변태성욕장애는 그 관심이 고통이나 타인 해를 초래할 때의 진단이다.",
      "key_point": "DSM-5의 핵심적 변화로, 비전형적 성적 관심만으로는 장애가 아니며, 고통·기능 손상·타인 해 중 하나가 있어야 장애로 진단한다.",
      "common_mistake": "비전형적 성적 관심이 있으면 자동으로 정신장애라고 오해하지만, DSM-5는 고통이나 해가 없는 변태성욕은 장애로 분류하지 않는다."
    }
  },
  {
    "id": "SEXUAL_SPT_027",
    "terminology": "자기관찰 (Spectatoring)",
    "terminology_ko": "자기관찰",
    "terminology_en": "Spectatoring",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성행위 중 자신의 성적 수행을 마치 외부 관찰자처럼 평가적으로 모니터링하는 인지 과정으로, 성적 흥분을 방해하고 수행 불안을 유발하여 성기능장애를 유지시키는 핵심 메커니즘이다.",
    "definition_en": "A cognitive process of evaluatively monitoring one's own sexual performance as if an outside observer during sexual activity, interfering with arousal and generating performance anxiety, a key mechanism maintaining sexual dysfunction.",
    "significance": "Masters와 Johnson이 규명한 성기능장애의 핵심 유지 기제로, 감각집중훈련의 치료 표적이 된다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "자기관찰(spectatoring) 개념을 최초로 기술하여 수행 불안-성기능장애의 악순환 모형을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "남성 발기장애",
        "name_en": "Erectile Disorder",
        "id": "SEXUAL_ERD_002"
      },
      {
        "name_ko": "인지행동적 성치료",
        "name_en": "Cognitive-Behavioral Sex Therapy",
        "id": "SEXUAL_CBS_031"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "Spectatoring = 성행위 중 '관중석에 앉아 자신을 평가' — 쾌감 대신 평가 → 불안 → 기능장애",
      "differential": "자기관찰은 성행위 중 자신의 수행을 모니터링하는 것이고, 관음장애는 타인의 은밀한 행위를 관찰하는 것이다.",
      "key_point": "자기관찰은 주의를 성적 감각에서 수행 평가로 전환하여 흥분을 방해하며, 감각집중훈련은 주의를 다시 감각으로 되돌리는 것이 목표이다.",
      "common_mistake": "자기관찰이 의식적 선택이라고 오해하지만, 이는 자동적이고 습관적인 인지 패턴이다."
    }
  },
  {
    "id": "SEXUAL_SNF_028",
    "terminology": "감각집중훈련 (Sensate Focus)",
    "terminology_ko": "감각집중훈련",
    "terminology_en": "Sensate Focus",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "Masters와 Johnson이 개발한 성치료 핵심 기법으로, 성적 수행 압박 없이 신체적 감각에 주의를 집중하는 점진적 접촉 훈련을 통해 수행 불안과 자기관찰을 감소시키고 성적 쾌감을 회복하는 행동 기법이다.",
    "definition_en": "A core sex therapy technique developed by Masters and Johnson involving gradual physical touching exercises focused on bodily sensations without sexual performance pressure, reducing performance anxiety and spectatoring while restoring sexual pleasure.",
    "significance": "거의 모든 성기능장애 치료에 적용되는 기본 기법으로, 자기관찰을 감소시키고 감각적 인식을 증진시키는 가장 널리 사용되는 행동 치료이다.",
    "key_researchers": [
      {
        "name_ko": "윌리엄 매스터스",
        "name_en": "William Masters",
        "contribution": "Virginia Johnson과 함께 감각집중훈련을 개발하여 성치료의 표준적 기법으로 확립했다."
      },
      {
        "name_ko": "버지니아 존슨",
        "name_en": "Virginia Johnson",
        "contribution": "감각집중훈련의 단계별 프로토콜을 공동 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자기관찰",
        "name_en": "Spectatoring",
        "id": "SEXUAL_SPT_027"
      },
      {
        "name_ko": "성치료",
        "name_en": "Sex Therapy",
        "id": "SEXUAL_STH_025"
      },
      {
        "name_ko": "남성 발기장애",
        "name_en": "Erectile Disorder",
        "id": "SEXUAL_ERD_002"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "감각집중훈련 단계: (1) 비성적 접촉 → (2) 성기 포함 접촉(성교 금지) → (3) 점진적 성교 도입",
      "differential": "감각집중훈련은 감각에 집중하여 수행 불안을 줄이는 기법이고, 체계적 둔감화는 불안 위계에 따라 점진적으로 노출하는 기법이다.",
      "key_point": "핵심 원칙은 '성교 금지(ban on intercourse)' 지시로 수행 압박을 제거하고, 감각적 쾌감 자체에 주의를 집중하게 하는 것이다.",
      "common_mistake": "감각집중훈련이 단순히 전희(foreplay)와 같다고 오해하지만, 이는 성적 수행 목표를 제거하고 감각 인식에 초점을 맞추는 치료적 기법이다."
    }
  },
  {
    "id": "SEXUAL_SOR_029",
    "terminology": "성적 지남력 (Sexual Orientation)",
    "terminology_ko": "성적 지남력",
    "terminology_en": "Sexual Orientation",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "특정 성별의 사람에 대한 지속적인 성적·정서적 끌림의 패턴으로, 이성애, 동성애, 양성애 등의 스펙트럼을 포함하며, 생물학적·환경적 요인의 복합적 상호작용에 의해 결정된다.",
    "definition_en": "A persistent pattern of sexual and emotional attraction toward persons of a particular gender, existing on a spectrum including heterosexuality, homosexuality, and bisexuality, determined by complex interactions of biological and environmental factors.",
    "significance": "동성애가 1973년 DSM에서 삭제된 역사적 사건은 정신장애 분류의 가치판단적 측면에 대한 중요한 논의를 촉발했다.",
    "key_researchers": [
      {
        "name_ko": "앨프리드 킨지",
        "name_en": "Alfred Kinsey",
        "contribution": "킨지 보고서(1948, 1953)를 통해 성적 지남력의 연속성(0-6 척도)을 제안하고 성행동의 다양성을 실증적으로 밝혔다."
      },
      {
        "name_ko": "에블린 후커",
        "name_en": "Evelyn Hooker",
        "contribution": "동성애 남성과 이성애 남성의 심리적 적응에 차이가 없음을 입증하여 동성애 비병리화의 과학적 근거를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "성별불쾌감",
        "name_en": "Gender Dysphoria",
        "id": "SEXUAL_GDY_017"
      },
      {
        "name_ko": "성교육",
        "name_en": "Sex Education",
        "id": "SEXUAL_SXE_024"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "킨지 척도: 0(완전 이성애)~6(완전 동성애) — 성적 지남력은 이분법이 아닌 연속체",
      "differential": "성적 지남력(sexual orientation)은 끌림의 방향이고, 성별 정체성(gender identity)은 자신이 경험하는 성별이며, 이 둘은 독립적 차원이다.",
      "key_point": "1973년 APA가 DSM-II에서 동성애를 삭제한 것은 과학적 증거에 기반한 결정으로, 정신장애 분류의 역사적 전환점이다.",
      "common_mistake": "성적 지남력이 선택이나 학습의 결과라고 오해하지만, 연구는 유전적·호르몬적·신경발달적 요인의 복합적 역할을 지지한다."
    }
  },
  {
    "id": "SEXUAL_HRM_030",
    "terminology": "호르몬 치료 (Hormonal Treatment)",
    "terminology_ko": "호르몬 치료",
    "terminology_en": "Hormonal Treatment",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성관련 장애에서 호르몬 수준을 조절하여 증상을 치료하는 약물학적 접근으로, 테스토스테론 보충(성기능장애), 항안드로겐 약물(변태성욕장애), 성별 확인 호르몬 치료(성별불쾌감) 등이 포함된다.",
    "definition_en": "A pharmacological approach to treating sex-related disorders by modulating hormone levels, including testosterone supplementation (sexual dysfunctions), anti-androgen medications (paraphilic disorders), and gender-affirming hormone therapy (gender dysphoria).",
    "significance": "성관련 장애의 생물학적 치료에서 핵심적 역할을 하며, 특히 성범죄자의 화학적 거세에 대한 윤리적 논쟁을 촉발한다.",
    "key_researchers": [
      {
        "name_ko": "존 브래드포드",
        "name_en": "John Bradford",
        "contribution": "변태성욕장애에 대한 항안드로겐 치료의 효과와 프로토콜에 대한 체계적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "남성 성욕감퇴장애",
        "name_en": "Male Hypoactive Sexual Desire Disorder",
        "id": "SEXUAL_MHD_008"
      },
      {
        "name_ko": "소아성애장애",
        "name_en": "Pedophilic Disorder",
        "id": "SEXUAL_PED_015"
      },
      {
        "name_ko": "성별불쾌감",
        "name_en": "Gender Dysphoria",
        "id": "SEXUAL_GDY_017"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "호르몬 치료 3가지 맥락: (1) 성기능장애→테스토스테론 보충 (2) 변태성욕→항안드로겐 (3) 성별불쾌감→성별 확인 호르몬",
      "differential": "호르몬 치료는 내분비적 조절이고, 성치료는 심리행동적 접근이며, 둘은 보완적으로 사용될 수 있다.",
      "key_point": "항안드로겐 약물(MPA, CPA, GnRH 작용제)은 성범죄 재범 감소에 효과적이나, 윤리적 쟁점(자율성, 동의)이 동반된다.",
      "common_mistake": "호르몬 치료가 성적 일탈을 '치유'한다고 오해하지만, 약물 중단 시 효과가 소실되므로 심리사회적 치료와의 병행이 필수적이다."
    }
  },
  {
    "id": "SEXUAL_CBS_031",
    "terminology": "인지행동적 성치료 (Cognitive-Behavioral Sex Therapy)",
    "terminology_ko": "인지행동적 성치료",
    "terminology_en": "Cognitive-Behavioral Sex Therapy",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "성기능장애의 유지 요인인 역기능적 성적 신념, 수행 불안, 자기관찰 등의 인지적 요인과 행동적 회피 패턴을 통합적으로 다루는 구조화된 심리치료 접근이다.",
    "definition_en": "A structured psychotherapeutic approach that integrates cognitive factors (dysfunctional sexual beliefs, performance anxiety, spectatoring) and behavioral avoidance patterns maintaining sexual dysfunctions.",
    "significance": "현대 성치료의 주류 접근으로, 인지적 왜곡 수정과 행동 기법(감각집중, 노출)을 통합하여 효과를 극대화한다.",
    "key_researchers": [
      {
        "name_ko": "크리스토퍼 맥케이브",
        "name_en": "Marita McCabe",
        "contribution": "성기능장애에 대한 인지행동적 접근의 효과를 체계적으로 연구하고 치료 매뉴얼을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "감각집중훈련",
        "name_en": "Sensate Focus",
        "id": "SEXUAL_SNF_028"
      },
      {
        "name_ko": "자기관찰",
        "name_en": "Spectatoring",
        "id": "SEXUAL_SPT_027"
      },
      {
        "name_ko": "성치료",
        "name_en": "Sex Therapy",
        "id": "SEXUAL_STH_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "CBT 성치료 = 인지(역기능적 성적 신념 수정) + 행동(감각집중, 단계적 노출) + 교육(성교육)",
      "differential": "인지행동적 성치료는 현재의 유지 요인에 초점을 맞추고, 정신역동적 성치료는 무의식적 갈등과 과거 경험을 탐색한다.",
      "key_point": "성적 신화(sexual myths)와 역기능적 신념의 수정이 핵심 구성요소이며, '반드시 삽입 성교가 있어야 한다' 등의 비합리적 신념을 다룬다.",
      "common_mistake": "성치료가 단순한 기술 훈련이라고 오해하지만, CBT 성치료는 깊은 인지적 변화와 관계 패턴의 재구성을 포함한다."
    }
  },
  {
    "id": "SEXUAL_IMP_032",
    "terminology": "충동성과 공격성 (Impulsivity and Aggression)",
    "terminology_ko": "충동성과 공격성",
    "terminology_en": "Impulsivity and Aggression",
    "category": "SEXUAL",
    "category_name": "성관련 및 충동조절 장애 (Sexual and Impulse-Control Disorders)",
    "definition": "결과를 고려하지 않고 즉각적으로 행동하는 충동성과, 타인이나 대상에 대해 의도적으로 해를 가하는 공격성의 연관으로, 충동조절장애의 핵심 구성요소이며 세로토닌 기능 저하와 밀접하게 관련된다.",
    "definition_en": "The association between impulsivity (acting immediately without considering consequences) and aggression (intentionally causing harm to others or objects), a core component of impulse-control disorders closely linked to serotonergic dysfunction.",
    "significance": "충동조절장애의 공통적 기저 메커니즘으로, 약물치료(SSRI)와 심리사회적 치료의 표적이 되는 핵심 차원이다.",
    "key_researchers": [
      {
        "name_ko": "에밀 코카로",
        "name_en": "Emil Coccaro",
        "contribution": "충동적 공격성의 세로토닌 가설을 체계화하고 약물학적 치료 접근을 개발했다."
      },
      {
        "name_ko": "어니스트 바렛",
        "name_en": "Ernest Barratt",
        "contribution": "충동성의 다차원적 측정 도구(BIS-11)를 개발하여 충동성 연구의 표준을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "간헐적 폭발장애",
        "name_en": "Intermittent Explosive Disorder",
        "id": "SEXUAL_IED_018"
      },
      {
        "name_ko": "품행장애",
        "name_en": "Conduct Disorder",
        "id": "SEXUAL_CDR_022"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "내성",
        "name_en": "Tolerance",
        "id": "SUBST_TOL_003"
      }
    ],
    "sub_types": [
      {
        "name": "충동적 공격성",
        "description": "도발에 대한 반응적이고 통제 불능한 공격"
      },
      {
        "name": "도구적 공격성",
        "description": "목적 달성을 위한 계획적이고 의도적인 공격"
      }
    ],
    "quiz_hints": {
      "mnemonic": "충동적 공격 = '뜨거운(hot)' 공격(반응적), 도구적 공격 = '차가운(cold)' 공격(계획적)",
      "differential": "충동적 공격성은 세로토닌 기능 저하와 관련되고, 도구적 공격성은 사이코패시적 특성과 더 관련된다.",
      "key_point": "세로토닌 기능 저하 → 전전두엽 억제 기능 감소 → 편도체 과활성 → 충동적 공격 폭발의 신경생물학적 경로가 규명되어 있다.",
      "common_mistake": "모든 공격성이 충동적이라고 오해하지만, 도구적(계획적) 공격성은 충동 조절과 무관하게 발생한다."
    }
  }
];

TERMS_DATA.NEURO = [
  {
    "id": "NEURO_ADH_001",
    "terminology": "주의력결핍 과잉행동장애 (Attention-Deficit/Hyperactivity Disorder)",
    "terminology_ko": "주의력결핍 과잉행동장애",
    "terminology_en": "Attention-Deficit/Hyperactivity Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "부주의, 과잉행동, 충동성의 지속적 패턴이 기능이나 발달을 저해하며, 12세 이전에 여러 증상이 나타나고 두 가지 이상의 환경에서 관찰되는 신경발달장애이다.",
    "definition_en": "A neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning or development, with several symptoms present before age 12 and observable in two or more settings.",
    "significance": "아동기에 가장 흔히 진단되는 신경발달장애로, 학업·직업·대인관계 전반에 걸쳐 장기적 기능 손상을 초래하며 성인기까지 지속되는 경우가 많다.",
    "key_researchers": [
      {
        "name_ko": "러셀 바클리",
        "name_en": "Russell Barkley",
        "contribution": "ADHD를 행동억제와 실행기능 결손의 장애로 개념화한 통합 모형을 제안했다."
      },
      {
        "name_ko": "버지니아 더글러스",
        "name_en": "Virginia Douglas",
        "contribution": "ADHD의 핵심 결함이 주의력 지속과 충동 억제에 있음을 실증적으로 규명했다."
      },
      {
        "name_ko": "키스 코너스",
        "name_en": "C. Keith Conners",
        "contribution": "ADHD 평가를 위한 Conners 평정척도를 개발하여 진단과 치료 효과 평가에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "적대적 반항장애",
        "name_en": "Oppositional Defiant Disorder",
        "id": "NEURO_ODD_035"
      },
      {
        "name_ko": "특정학습장애",
        "name_en": "Specific Learning Disorder",
        "id": "NEURO_SLD_005"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "복합형 (Combined Presentation)",
        "description": "부주의와 과잉행동-충동 기준을 모두 충족하는 유형"
      },
      {
        "name": "부주의 우세형 (Predominantly Inattentive)",
        "description": "부주의 기준은 충족하나 과잉행동-충동 기준은 충족하지 않는 유형"
      },
      {
        "name": "과잉행동-충동 우세형 (Predominantly Hyperactive-Impulsive)",
        "description": "과잉행동-충동 기준은 충족하나 부주의 기준은 충족하지 않는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ADHD 3대 증상: 부주의(Inattention), 과잉행동(Hyperactivity), 충동성(Impulsivity)",
      "differential": "ADHD 부주의 우세형은 조용히 멍한 아이로 보여 과잉행동 없이도 진단 가능하며, 불안장애의 집중 곤란과 달리 걱정이 아닌 주의 조절 자체의 결함이다.",
      "key_point": "12세 이전 발현과 두 가지 이상 환경(가정·학교 등)에서의 증상 확인이 진단의 필수 조건이다.",
      "common_mistake": "ADHD를 아동기에만 해당하는 장애로 생각하는 것 — 약 60%의 사례가 성인기까지 지속된다."
    }
  },
  {
    "id": "NEURO_ASD_002",
    "terminology": "자폐스펙트럼장애 (Autism Spectrum Disorder)",
    "terminology_ko": "자폐스펙트럼장애",
    "terminology_en": "Autism Spectrum Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "사회적 의사소통과 상호작용의 지속적 결함, 그리고 제한적이고 반복적인 행동·관심·활동 패턴을 핵심 특징으로 하는 신경발달장애로, 증상의 심각도에 따라 스펙트럼으로 분류된다.",
    "definition_en": "A neurodevelopmental disorder characterized by persistent deficits in social communication and interaction, along with restricted and repetitive patterns of behavior, interests, or activities, classified on a spectrum according to severity.",
    "significance": "DSM-5에서 자폐성장애, 아스퍼거장애, PDD-NOS를 하나의 스펙트럼으로 통합하여 진단 패러다임의 전환을 이끌었으며, 신경다양성 관점의 핵심 대상이다.",
    "key_researchers": [
      {
        "name_ko": "레오 카너",
        "name_en": "Leo Kanner",
        "contribution": "1943년 '초기 유아 자폐증(early infantile autism)'을 최초로 기술하여 자폐증 연구의 시작점을 마련했다."
      },
      {
        "name_ko": "한스 아스퍼거",
        "name_en": "Hans Asperger",
        "contribution": "1944년 언어 발달이 보존된 자폐적 특성을 가진 아동들을 기술하여 아스퍼거 증후군의 기초를 마련했다."
      },
      {
        "name_ko": "사이먼 바런코언",
        "name_en": "Simon Baron-Cohen",
        "contribution": "마음이론 결핍 가설과 극단적 남성뇌 이론을 제안하여 ASD의 인지적 기제를 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "마음이론",
        "name_en": "Theory of Mind",
        "id": "NEURO_TOM_011"
      },
      {
        "name_ko": "중앙응집력",
        "name_en": "Central Coherence",
        "id": "NEURO_CCH_012"
      },
      {
        "name_ko": "응용행동분석",
        "name_en": "Applied Behavior Analysis",
        "id": "NEURO_ABA_013"
      },
      {
        "name_ko": "사회적 의사소통장애",
        "name_en": "Social Communication Disorder",
        "id": "NEURO_SCD_009"
      },
      {
        "name_ko": "사반트증후군",
        "name_en": "Savant Syndrome",
        "id": "NEURO_SVT_014"
      }
    ],
    "sub_types": [
      {
        "name": "1수준 - 지원 필요 (Level 1)",
        "description": "지원 없이도 어느 정도 기능 가능하나 사회적 의사소통에 눈에 띄는 어려움"
      },
      {
        "name": "2수준 - 상당한 지원 필요 (Level 2)",
        "description": "언어적·비언어적 의사소통에 현저한 결함, 제한된 관심사에 대한 강한 집착"
      },
      {
        "name": "3수준 - 매우 상당한 지원 필요 (Level 3)",
        "description": "심각한 의사소통 결함과 극도로 제한된 행동 패턴"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ASD 2대 영역: (1) 사회적 의사소통·상호작용 결함, (2) 제한적·반복적 행동",
      "differential": "ASD는 사회적 의사소통 결함과 제한적·반복적 행동이 모두 있어야 하고, 사회적 의사소통장애(SCD)는 제한적·반복적 행동 없이 의사소통 결함만 존재한다.",
      "key_point": "DSM-5에서 3개의 하위 수준(지원 필요도)으로 심각도를 구분하며, 이전의 아스퍼거장애는 별도 진단이 아닌 ASD Level 1에 해당한다.",
      "common_mistake": "자폐증이 '감정이 없는' 상태라고 오해하는 것 — 감정 경험 자체는 존재하나 표현과 사회적 소통 방식이 다를 뿐이다."
    }
  },
  {
    "id": "NEURO_IDD_003",
    "terminology": "지적장애 (Intellectual Disability)",
    "terminology_ko": "지적장애",
    "terminology_en": "Intellectual Disability",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "발달기에 시작되며 지적 기능(추론, 문제해결, 학습 등)과 적응 기능(개념적·사회적·실용적 영역)의 결함을 모두 포함하는 장애로, IQ 약 70 이하와 적응행동 결함이 동시에 요구된다.",
    "definition_en": "A disorder originating during the developmental period that includes deficits in both intellectual functioning (reasoning, problem-solving, learning) and adaptive functioning (conceptual, social, practical domains), requiring both IQ approximately 70 or below and adaptive behavior deficits.",
    "significance": "DSM-5에서 '정신지체(mental retardation)'라는 명칭을 대체하여 낙인을 줄이고, 심각도 분류를 IQ 점수 대신 적응 기능 수준으로 전환했다.",
    "key_researchers": [
      {
        "name_ko": "알프레드 비네",
        "name_en": "Alfred Binet",
        "contribution": "최초의 지능검사를 개발하여 지적 기능 수준의 객관적 평가 기반을 마련했다."
      },
      {
        "name_ko": "에드거 돌",
        "name_en": "Edgar Doll",
        "contribution": "적응행동의 개념을 체계화하고 바인랜드 사회성숙도검사를 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "특정학습장애",
        "name_en": "Specific Learning Disorder",
        "id": "NEURO_SLD_005"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      }
    ],
    "sub_types": [
      {
        "name": "경도 (Mild)",
        "description": "적응 기능의 개념적 영역에서 어려움, 독립생활 가능 (IQ 50~70 범위)"
      },
      {
        "name": "중등도 (Moderate)",
        "description": "학업 기술 습득이 초등 수준에 머무름, 지도 하에 일상생활 가능 (IQ 35~50 범위)"
      },
      {
        "name": "중도 (Severe)",
        "description": "개념적 기술 매우 제한적, 모든 활동에 지원 필요 (IQ 20~35 범위)"
      },
      {
        "name": "최중도 (Profound)",
        "description": "감각운동 기능 위주, 전반적 일상생활에 24시간 지원 필요 (IQ 20 이하)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "지적장애 진단 = '지적 기능(IQ)' + '적응 기능' 두 가지 모두 결함이어야 한다.",
      "differential": "지적장애는 발달기(18세 이전) 발현이 필수이고, 주요 신경인지장애(치매)는 이전에 획득한 인지 기능이 퇴행하는 것이다.",
      "key_point": "DSM-5에서는 심각도를 IQ 점수가 아닌 적응 기능(개념적·사회적·실용적) 수준으로 결정한다.",
      "common_mistake": "IQ 70 이하이면 무조건 지적장애라고 생각하는 것 — 적응 기능 결함이 반드시 동반되어야 진단이 가능하다."
    }
  },
  {
    "id": "NEURO_GDD_004",
    "terminology": "전반적 발달지연 (Global Developmental Delay)",
    "terminology_ko": "전반적 발달지연",
    "terminology_en": "Global Developmental Delay",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "5세 미만의 아동에서 여러 지적 기능 영역의 발달이 기대 수준에 미치지 못하며, 표준화된 검사를 통한 정확한 임상적 심각도 평가가 어려운 경우에 사용하는 진단이다.",
    "definition_en": "A diagnosis used for children under age 5 who fail to meet expected developmental milestones in several areas of intellectual functioning, when clinical severity cannot be reliably assessed through standardized testing.",
    "significance": "5세 미만 아동에서 지적장애 진단의 한계를 인정하고 조기 발견과 중재를 촉진하기 위한 임시 진단 범주로서 의의가 있다.",
    "key_researchers": [
      {
        "name_ko": "아널드 게셀",
        "name_en": "Arnold Gesell",
        "contribution": "영유아 발달의 규범적 이정표를 체계화하여 발달지연의 평가 기준을 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "NEURO_IDD_003"
      },
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "조기중재",
        "name_en": "Early Intervention",
        "id": "NEURO_EIN_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "GDD = 5세 '미만' 아동 전용 임시 진단, 5세 이후에는 지적장애로 재평가",
      "differential": "전반적 발달지연은 5세 미만 아동에게만 적용되는 임시 진단이고, 지적장애는 표준화 검사로 확인된 확정 진단이다.",
      "key_point": "표준화된 지능검사의 신뢰도가 낮은 영유아기에 한시적으로 사용하며, 이후 재평가가 필수적이다.",
      "common_mistake": "전반적 발달지연을 지적장애와 동일시하는 것 — GDD는 임시 진단이며 추후 정상 발달로 회복될 수도 있다."
    }
  },
  {
    "id": "NEURO_SLD_005",
    "terminology": "특정학습장애 (Specific Learning Disorder)",
    "terminology_ko": "특정학습장애",
    "terminology_en": "Specific Learning Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "전반적 지능은 정상 범위임에도 읽기, 쓰기, 수학 중 하나 이상의 학업 기술 습득과 사용에 지속적인 어려움을 보이는 신경발달장애로, 적절한 교육 기회 제공에도 불구하고 최소 6개월 이상 지속된다.",
    "definition_en": "A neurodevelopmental disorder involving persistent difficulties in learning and using academic skills in reading, writing, or mathematics despite normal intelligence, lasting at least 6 months despite provision of appropriate educational interventions.",
    "significance": "지능과 학업 성취 간 불일치를 보이는 대표적 장애로, 교육심리학과 이상심리학의 교차 영역에서 중요하게 다루어진다.",
    "key_researchers": [
      {
        "name_ko": "새뮤얼 커크",
        "name_en": "Samuel Kirk",
        "contribution": "학습장애(learning disabilities) 용어를 최초로 도입하고 개념을 정의했다."
      },
      {
        "name_ko": "샐리 셰이위츠",
        "name_en": "Sally Shaywitz",
        "contribution": "난독증의 신경영상 연구를 통해 좌반구 읽기 회로의 기능 이상을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "NEURO_IDD_003"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "심리검사",
        "name_en": "Psychological Testing",
        "id": "ASSESS_PST_005"
      }
    ],
    "sub_types": [
      {
        "name": "읽기 장애 (With Impairment in Reading)",
        "description": "단어 읽기 정확성, 읽기 속도·유창성, 읽기 이해에 어려움 (난독증)"
      },
      {
        "name": "쓰기 장애 (With Impairment in Written Expression)",
        "description": "철자, 문법·구두법, 글쓰기의 명확성이나 조직화에 어려움"
      },
      {
        "name": "수학 장애 (With Impairment in Mathematics)",
        "description": "수 감각, 수학적 사실 기억, 계산, 수학적 추론에 어려움 (난산증)"
      }
    ],
    "quiz_hints": {
      "mnemonic": "특정학습장애 3대 영역: 읽기(난독증), 쓰기(난서증), 수학(난산증)",
      "differential": "특정학습장애는 전반적 지능이 정상인데 특정 학업 영역에서만 어려움을 보이고, 지적장애는 전반적 지적·적응 기능의 결함이다.",
      "key_point": "DSM-5에서는 기존의 읽기장애·수학장애·쓰기장애를 하나의 진단(특정학습장애)으로 통합하고 지정자로 세분화했다.",
      "common_mistake": "학습장애를 '공부를 안 하는 것'이나 '게으름'으로 오해하는 것 — 신경생물학적 기반의 정보처리 결함이다."
    }
  },
  {
    "id": "NEURO_LNG_006",
    "terminology": "언어장애 (Language Disorder)",
    "terminology_ko": "언어장애",
    "terminology_en": "Language Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "언어의 습득과 사용에 있어 지속적인 어려움이 있으며, 어휘 제한, 문장 구조의 결함, 담화 능력의 손상 등이 발달 초기부터 나타나 의사소통과 학업 기능에 영향을 미치는 장애이다.",
    "definition_en": "A disorder characterized by persistent difficulties in the acquisition and use of language, including reduced vocabulary, limited sentence structure, and impaired discourse, beginning in early development and affecting communication and academic functioning.",
    "significance": "의사소통장애의 대표적 유형으로, 조기 발견과 언어치료를 통한 중재가 장기 예후에 결정적 영향을 미친다.",
    "key_researchers": [
      {
        "name_ko": "로렌스 레너드",
        "name_en": "Laurence Leonard",
        "contribution": "특정언어손상(SLI)의 언어학적 특성과 원인론을 체계적으로 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "말소리장애",
        "name_en": "Speech Sound Disorder",
        "id": "NEURO_SSD_007"
      },
      {
        "name_ko": "사회적 의사소통장애",
        "name_en": "Social Communication Disorder",
        "id": "NEURO_SCD_009"
      },
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "조기중재",
        "name_en": "Early Intervention",
        "id": "NEURO_EIN_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "언어장애 = 어휘 + 문법 + 담화의 3중 어려움, '말소리'가 아닌 '언어 체계' 전반의 문제",
      "differential": "언어장애는 언어의 형식·내용·사용 전반의 결함이고, 말소리장애는 발음(조음)에 한정된 어려움이다.",
      "key_point": "DSM-5에서 기존의 표현성 언어장애와 혼합형 수용-표현성 언어장애를 하나로 통합했다.",
      "common_mistake": "언어 발달이 느린 아동 모두를 언어장애로 진단하는 것 — 일부는 '늦된 말(late talker)'로 자연 회복된다."
    }
  },
  {
    "id": "NEURO_SSD_007",
    "terminology": "말소리장애 (Speech Sound Disorder)",
    "terminology_ko": "말소리장애",
    "terminology_en": "Speech Sound Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "말소리의 산출에 지속적인 어려움이 있어 말의 명료성이 저하되고 언어적 의사소통이 방해받는 장애로, 구조적·신경학적 원인이 아닌 발달적 기원을 가진다.",
    "definition_en": "A disorder involving persistent difficulties with speech sound production that reduce speech intelligibility and interfere with verbal communication, of developmental origin rather than due to structural or neurological causes.",
    "significance": "아동기 의사소통장애 중 가장 흔한 유형으로, 학령기 읽기 발달과의 관련성이 연구적으로 주목받고 있다.",
    "key_researchers": [
      {
        "name_ko": "바바라 도드",
        "name_en": "Barbara Dodd",
        "contribution": "말소리장애의 하위 유형을 분류하고 차별적 중재 전략을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "언어장애",
        "name_en": "Language Disorder",
        "id": "NEURO_LNG_006"
      },
      {
        "name_ko": "아동기발화유창성장애",
        "name_en": "Childhood-Onset Fluency Disorder",
        "id": "NEURO_STT_008"
      },
      {
        "name_ko": "특정학습장애",
        "name_en": "Specific Learning Disorder",
        "id": "NEURO_SLD_005"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "말소리장애 = '조음(발음)' 문제, 언어장애 = '언어 체계' 문제로 구분",
      "differential": "말소리장애는 발음의 정확성 문제이고, 언어장애는 어휘·문법·담화 등 언어 체계 전반의 문제이다.",
      "key_point": "구개열 등 구조적 원인이나 뇌성마비 등 신경학적 원인에 의한 말소리 문제는 이 진단에 해당하지 않는다.",
      "common_mistake": "어린 아동의 정상적 발음 미숙을 말소리장애로 오진하는 것 — 연령 규준에 비해 유의하게 지체되어야 한다."
    }
  },
  {
    "id": "NEURO_STT_008",
    "terminology": "아동기발화유창성장애 (Childhood-Onset Fluency Disorder)",
    "terminology_ko": "아동기발화유창성장애",
    "terminology_en": "Childhood-Onset Fluency Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "말의 정상적 유창성과 시간적 패턴이 방해받으며, 소리나 음절의 반복, 연장, 막힘, 우회, 과도한 긴장 등이 빈번하게 나타나는 장애로, 일반적으로 말더듬(stuttering)으로 알려져 있다.",
    "definition_en": "A disorder involving disturbances in the normal fluency and time patterning of speech, characterized by frequent repetitions or prolongations of sounds or syllables, broken words, blocks, circumlocutions, and excess physical tension, commonly known as stuttering.",
    "significance": "발달성 말더듬은 학령기 아동의 약 5%에서 나타나며, 사회불안과 의사소통 회피를 초래할 수 있어 심리적 중재가 중요하다.",
    "key_researchers": [
      {
        "name_ko": "웬델 존슨",
        "name_en": "Wendell Johnson",
        "contribution": "말더듬의 진단기인적 이론(diagnosogenic theory)을 제안하여 환경적 요인의 역할을 강조했다."
      },
      {
        "name_ko": "올리버 블러드스타인",
        "name_en": "Oliver Bloodstein",
        "contribution": "말더듬의 발달 단계를 체계화하고 예방적 접근의 중요성을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "말소리장애",
        "name_en": "Speech Sound Disorder",
        "id": "NEURO_SSD_007"
      },
      {
        "name_ko": "사회불안장애",
        "name_en": "Social Anxiety Disorder",
        "id": "ANXIETY_SOC_004"
      },
      {
        "name_ko": "언어장애",
        "name_en": "Language Disorder",
        "id": "NEURO_LNG_006"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "말더듬 = 유창성(fluency) 문제, 반복·연장·막힘이 핵심 증상",
      "differential": "아동기발화유창성장애는 발달기에 시작되는 말더듬이고, 성인기에 뇌손상 등으로 발생하는 것은 신경학적 유창성 장애로 구분한다.",
      "key_point": "대부분 2~7세 사이에 시작되며, 약 75~80%는 자연 회복되지만 나머지는 만성화될 수 있다.",
      "common_mistake": "말더듬이 불안이나 긴장 때문에 생긴다고 생각하는 것 — 신경생물학적 기반이 있으며, 불안은 결과이지 원인이 아니다."
    }
  },
  {
    "id": "NEURO_SCD_009",
    "terminology": "사회적 의사소통장애 (Social (Pragmatic) Communication Disorder)",
    "terminology_ko": "사회적 의사소통장애",
    "terminology_en": "Social (Pragmatic) Communication Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "언어의 사회적 사용(화용론)에 지속적인 어려움이 있어 인사하기, 대화 주고받기, 상황에 맞는 의사소통 스타일 조절, 비유적 표현 이해 등에 결함을 보이는 장애이다.",
    "definition_en": "A disorder characterized by persistent difficulties in the social use of verbal and nonverbal communication, including deficits in greeting, turn-taking, adapting communication style to context, and understanding nonliteral language.",
    "significance": "DSM-5에서 신설된 진단으로, ASD와의 감별이 중요하며 제한적·반복적 행동이 없는 사회적 의사소통 결함을 별도로 분류한 점에서 의의가 있다.",
    "key_researchers": [
      {
        "name_ko": "캐서린 아담스",
        "name_en": "Catherine Adams",
        "contribution": "화용적 언어장애(PLI)의 특성을 체계적으로 연구하고 중재 프로그램을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "언어장애",
        "name_en": "Language Disorder",
        "id": "NEURO_LNG_006"
      },
      {
        "name_ko": "마음이론",
        "name_en": "Theory of Mind",
        "id": "NEURO_TOM_011"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "NEURO_SST_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SCD = ASD에서 '제한적·반복적 행동' 빼기, 화용론(pragmatics)만 문제",
      "differential": "ASD는 사회적 의사소통 결함 + 제한적·반복적 행동이 모두 필요하고, SCD는 사회적 의사소통 결함만 존재하며 제한적·반복적 행동은 없다.",
      "key_point": "DSM-5에서 신설된 진단이며, ASD 진단이 먼저 배제된 후에만 진단할 수 있다.",
      "common_mistake": "SCD를 경미한 자폐로 오해하는 것 — ASD와 질적으로 다른 별도 진단이며, ASD와 동시에 진단할 수 없다."
    }
  },
  {
    "id": "NEURO_EFD_010",
    "terminology": "실행기능 결손 (Executive Function Deficit)",
    "terminology_ko": "실행기능 결손",
    "terminology_en": "Executive Function Deficit",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "계획, 작업기억, 주의 전환, 억제 통제, 인지적 유연성 등 목표지향적 행동을 조절하는 고차원 인지 과정의 결함으로, ADHD, ASD, 지적장애 등 다양한 신경발달장애의 핵심 기제로 작용한다.",
    "definition_en": "Deficits in higher-order cognitive processes that regulate goal-directed behavior, including planning, working memory, attention shifting, inhibitory control, and cognitive flexibility, serving as a core mechanism in various neurodevelopmental disorders such as ADHD, ASD, and intellectual disability.",
    "significance": "여러 신경발달장애에 공통적으로 나타나는 횡단적 인지 결함으로, 진단 간 공유되는 신경인지적 기제를 이해하는 데 핵심적이다.",
    "key_researchers": [
      {
        "name_ko": "러셀 바클리",
        "name_en": "Russell Barkley",
        "contribution": "ADHD를 행동억제의 결함에 기반한 실행기능 장애로 개념화한 모형을 제안했다."
      },
      {
        "name_ko": "아델 다이아몬드",
        "name_en": "Adele Diamond",
        "contribution": "실행기능의 핵심 요소(억제, 작업기억, 인지유연성)를 규명하고 발달적 경로를 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      },
      {
        "name_ko": "전두측두엽 치매",
        "name_en": "Frontotemporal Dementia",
        "id": "NEURO_FTD_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "실행기능 3대 핵심: 억제(Stop) + 작업기억(Hold) + 인지유연성(Shift) = SHS",
      "differential": "실행기능 결손은 독립 진단이 아닌 여러 장애에 걸쳐 나타나는 인지적 기제이며, ADHD는 특히 억제 통제 결함이 두드러진다.",
      "key_point": "전두엽, 특히 전전두피질(PFC)의 발달 및 기능과 밀접하게 관련되어 있다.",
      "common_mistake": "실행기능 결손을 단순한 '의지력 부족'으로 오해하는 것 — 신경생물학적 기반의 인지 조절 장애이다."
    }
  },
  {
    "id": "NEURO_TOM_011",
    "terminology": "마음이론 (Theory of Mind)",
    "terminology_ko": "마음이론",
    "terminology_en": "Theory of Mind",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "타인의 믿음, 의도, 욕구, 감정 등 정신 상태를 이해하고 추론하는 인지적 능력으로, 자폐스펙트럼장애에서 이 능력의 결핍이 사회적 상호작용 어려움의 핵심 기제로 제안된다.",
    "definition_en": "The cognitive ability to understand and infer others' mental states including beliefs, intentions, desires, and emotions, proposed as a core mechanism underlying social interaction difficulties in autism spectrum disorder.",
    "significance": "자폐스펙트럼장애의 사회적 결함을 설명하는 가장 영향력 있는 인지 이론으로, 틀린 믿음 과제를 통해 실증적으로 검증되어 왔다.",
    "key_researchers": [
      {
        "name_ko": "사이먼 바런코언",
        "name_en": "Simon Baron-Cohen",
        "contribution": "ASD 아동이 틀린 믿음 과제에 실패함을 보여 마음맹(mindblindness) 가설을 제안했다."
      },
      {
        "name_ko": "데이비드 프리맥",
        "name_en": "David Premack",
        "contribution": "마음이론 개념을 최초로 도입하고 침팬지의 마음 읽기 능력을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "중앙응집력",
        "name_en": "Central Coherence",
        "id": "NEURO_CCH_012"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "사회적 의사소통장애",
        "name_en": "Social Communication Disorder",
        "id": "NEURO_SCD_009"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "마음이론 = 타인의 마음을 읽는 능력, Sally-Anne 과제가 대표적 검증 도구",
      "differential": "마음이론은 타인의 정신 상태를 추론하는 인지 능력이고, 공감은 타인의 감정을 함께 느끼는 정서적 반응으로 서로 다른 구성개념이다.",
      "key_point": "전형적 발달 아동은 4~5세에 틀린 믿음 과제를 통과하지만, ASD 아동은 이 연령에서 일관되게 실패한다.",
      "common_mistake": "마음이론 결핍이 ASD에만 특이적이라고 생각하는 것 — 조현병 등 다른 장애에서도 마음이론 결함이 관찰된다."
    }
  },
  {
    "id": "NEURO_CCH_012",
    "terminology": "중앙응집력 (Central Coherence)",
    "terminology_ko": "중앙응집력",
    "terminology_en": "Central Coherence",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "정보를 전체적 맥락과 의미에 통합하여 처리하는 인지적 경향성으로, 자폐스펙트럼장애에서는 이 능력이 약해 세부 사항에 과도하게 집중하고 전체적 맥락을 놓치는 약한 중앙응집력이 나타난다.",
    "definition_en": "The cognitive tendency to integrate information into overall context and meaning; in autism spectrum disorder, weak central coherence leads to excessive focus on details while missing the broader context.",
    "significance": "ASD의 비사회적 인지 특성(세부 집중, 패턴 인식 강점)을 설명하는 이론으로, 마음이론 가설을 보완한다.",
    "key_researchers": [
      {
        "name_ko": "우타 프리스",
        "name_en": "Uta Frith",
        "contribution": "약한 중앙응집력 이론을 제안하여 ASD의 인지적 특성을 세부 지향적 처리 양식으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "마음이론",
        "name_en": "Theory of Mind",
        "id": "NEURO_TOM_011"
      },
      {
        "name_ko": "사반트증후군",
        "name_en": "Savant Syndrome",
        "id": "NEURO_SVT_014"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "중앙응집력 약함 = 나무는 잘 보지만 숲을 못 본다, 세부 지향적 처리",
      "differential": "약한 중앙응집력은 정보 통합의 인지적 양식 차이이고, 마음이론 결핍은 사회적 인지의 결함으로 서로 다른 영역을 설명한다.",
      "key_point": "약한 중앙응집력은 결함이 아닌 인지적 양식의 차이로 볼 수 있으며, 세부 주의력 과제에서 오히려 우수한 수행을 보인다.",
      "common_mistake": "약한 중앙응집력을 반드시 부정적 결함으로만 보는 것 — 세부 패턴 인식 등에서 강점이 될 수 있다."
    }
  },
  {
    "id": "NEURO_ABA_013",
    "terminology": "응용행동분석 (Applied Behavior Analysis)",
    "terminology_ko": "응용행동분석",
    "terminology_en": "Applied Behavior Analysis",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "행동주의 학습 원리를 체계적으로 적용하여 사회적으로 의미 있는 행동을 증가시키고 문제 행동을 감소시키는 중재 접근으로, 자폐스펙트럼장애의 가장 대표적인 근거 기반 치료법이다.",
    "definition_en": "A systematic intervention approach applying behavioral learning principles to increase socially significant behaviors and decrease problem behaviors, recognized as the most established evidence-based treatment for autism spectrum disorder.",
    "significance": "ASD 조기 중재의 표준적 치료법으로, 40시간 이상의 집중적 조기 행동 중재가 장기적 발달 성과를 유의하게 개선한다는 근거가 축적되어 있다.",
    "key_researchers": [
      {
        "name_ko": "올레 이바르 로바스",
        "name_en": "O. Ivar Lovaas",
        "contribution": "자폐 아동을 대상으로 한 집중적 조기 행동 중재(EIBI) 프로그램을 개발하여 ABA 치료의 효과를 실증했다."
      },
      {
        "name_ko": "버러스 스키너",
        "name_en": "B. F. Skinner",
        "contribution": "조작적 조건형성 이론으로 ABA의 이론적 기초를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "조기중재",
        "name_en": "Early Intervention",
        "id": "NEURO_EIN_015"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "NEURO_SST_016"
      }
    ],
    "sub_types": [
      {
        "name": "이산시행훈련 (Discrete Trial Training, DTT)",
        "description": "구조화된 환경에서 자극-반응-결과의 개별 시행을 반복하는 방법"
      },
      {
        "name": "자연적 환경 교수 (Natural Environment Teaching, NET)",
        "description": "일상 환경에서 아동의 동기를 활용한 교수 방법"
      },
      {
        "name": "중심축반응훈련 (Pivotal Response Training, PRT)",
        "description": "동기, 자기관리 등 핵심 영역을 표적으로 한 자연적 중재"
      }
    ],
    "quiz_hints": {
      "mnemonic": "ABA = 행동의 ABC(선행자극-행동-결과)를 분석하고 체계적으로 중재하는 접근",
      "differential": "ABA는 행동주의 원리에 기반한 포괄적 중재 체계이고, 사회기술훈련은 사회적 기술에 초점을 맞춘 특정 중재 프로그램이다.",
      "key_point": "Lovaas 연구에서 주당 40시간 이상의 집중적 조기 중재가 IQ와 적응행동의 유의한 향상을 가져왔다.",
      "common_mistake": "ABA를 단순한 반복 훈련으로 오해하는 것 — 현대 ABA는 자연적 환경, 아동 주도적 학습을 강조하는 다양한 기법을 포함한다."
    }
  },
  {
    "id": "NEURO_SVT_014",
    "terminology": "사반트증후군 (Savant Syndrome)",
    "terminology_ko": "사반트증후군",
    "terminology_en": "Savant Syndrome",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "전반적 지적 기능이나 적응 기능에 제한이 있음에도 음악, 미술, 수학, 달력 계산, 기억 등 특정 영역에서 비범한 재능이나 능력을 보이는 현상으로, 자폐스펙트럼장애와 높은 연관성을 가진다.",
    "definition_en": "A phenomenon in which individuals with overall intellectual or adaptive limitations demonstrate extraordinary talent or ability in specific domains such as music, art, mathematics, calendar calculation, or memory, often associated with autism spectrum disorder.",
    "significance": "지능과 재능의 관계, 뇌의 보상적 기능에 대한 이해를 확장하며, ASD의 강점 기반 관점을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "대럴드 트레퍼트",
        "name_en": "Darold Treffert",
        "contribution": "사반트증후군에 대한 가장 포괄적인 임상 연구를 수행하고 분류 체계를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "중앙응집력",
        "name_en": "Central Coherence",
        "id": "NEURO_CCH_012"
      },
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "NEURO_IDD_003"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "사반트 = 전반적 약점 속의 섬처럼 돌출된 특별한 재능(islands of genius)",
      "differential": "사반트증후군은 장애가 있음에도 특정 영역의 비범한 재능을 보이는 것이고, 영재성(giftedness)은 전반적 높은 지적 능력을 의미한다.",
      "key_point": "사반트의 약 50%가 ASD를 가지고 있으며, ASD 인구의 약 10%가 사반트 능력을 보인다.",
      "common_mistake": "모든 자폐인이 사반트 능력을 가지고 있다고 오해하는 것 — 사반트는 ASD의 소수에서만 나타나는 현상이다."
    }
  },
  {
    "id": "NEURO_EIN_015",
    "terminology": "조기중재 (Early Intervention)",
    "terminology_ko": "조기중재",
    "terminology_en": "Early Intervention",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "신경발달장애가 있거나 위험이 있는 영유아 및 아동에게 가능한 이른 시기에 체계적인 교육적, 치료적 서비스를 제공하여 발달 잠재력을 최대화하고 이차적 문제를 예방하는 접근이다.",
    "definition_en": "A systematic approach providing educational and therapeutic services as early as possible to infants and children with or at risk for neurodevelopmental disorders, aiming to maximize developmental potential and prevent secondary problems.",
    "significance": "뇌의 가소성이 높은 초기 발달기에 중재를 시작할수록 치료 효과가 크다는 신경과학적 근거에 기반한 핵심 원칙이다.",
    "key_researchers": [
      {
        "name_ko": "잭 쇼코프",
        "name_en": "Jack Shonkoff",
        "contribution": "초기 경험이 뇌 발달에 미치는 영향을 연구하여 조기 중재의 신경과학적 근거를 제공했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "응용행동분석",
        "name_en": "Applied Behavior Analysis",
        "id": "NEURO_ABA_013"
      },
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "전반적 발달지연",
        "name_en": "Global Developmental Delay",
        "id": "NEURO_GDD_004"
      },
      {
        "name_ko": "사회기술훈련",
        "name_en": "Social Skills Training",
        "id": "NEURO_SST_016"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "조기중재 = The earlier, the better, 뇌 가소성이 높을 때 최대 효과",
      "differential": "조기중재는 발달 초기에 시작하는 포괄적 서비스 체계이고, ABA는 그 안에서 사용되는 구체적 중재 방법론 중 하나이다.",
      "key_point": "3세 이전 시작이 가장 효과적이며, 가족 참여와 다학제적 접근이 핵심 요소이다.",
      "common_mistake": "조기중재를 특정 치료법으로 생각하는 것 — 여러 전문 분야(언어, 작업, 행동 치료 등)를 포괄하는 서비스 체계이다."
    }
  },
  {
    "id": "NEURO_SST_016",
    "terminology": "사회기술훈련 (Social Skills Training)",
    "terminology_ko": "사회기술훈련",
    "terminology_en": "Social Skills Training",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "대인관계에 필요한 사회적 기술(눈 맞춤, 대화 기술, 감정 인식, 갈등 해결 등)을 체계적으로 가르치는 구조화된 중재 프로그램으로, ASD, ADHD 등 신경발달장애 아동과 청소년에게 널리 적용된다.",
    "definition_en": "A structured intervention program that systematically teaches social skills needed for interpersonal relationships (eye contact, conversation skills, emotion recognition, conflict resolution), widely applied to children and adolescents with neurodevelopmental disorders such as ASD and ADHD.",
    "significance": "신경발달장애에서 사회적 기능 향상을 위한 핵심 중재로, 또래 관계와 사회 적응에 직접적 효과를 보인다.",
    "key_researchers": [
      {
        "name_ko": "프랭크 그레셤",
        "name_en": "Frank Gresham",
        "contribution": "사회적 기술 결함의 유형을 분류하고 체계적 사회기술훈련 모형을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "응용행동분석",
        "name_en": "Applied Behavior Analysis",
        "id": "NEURO_ABA_013"
      },
      {
        "name_ko": "조기중재",
        "name_en": "Early Intervention",
        "id": "NEURO_EIN_015"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "SST = 모델링 + 역할극 + 피드백 + 일반화의 4단계 학습",
      "differential": "사회기술훈련은 사회적 행동 기술에 초점을 맞추고, 사회적 의사소통장애 치료는 화용론적 언어 사용에 초점을 맞춘다.",
      "key_point": "기술 습득 결함(모르는 것)과 수행 결함(알지만 못하는 것)을 구분하여 차별적 중재를 적용해야 한다.",
      "common_mistake": "교실에서의 기술 습득이 자연 환경으로 자동 일반화된다고 가정하는 것 — 일반화를 위한 체계적 계획이 필수적이다."
    }
  },
  {
    "id": "NEURO_TIC_017",
    "terminology": "뚜렛장애 (Tourette's Disorder)",
    "terminology_ko": "뚜렛장애",
    "terminology_en": "Tourette's Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "다수의 운동 틱과 하나 이상의 음성 틱이 1년 이상 지속되는 신경발달장애로, 18세 이전에 발현하며 틱의 빈도와 강도는 시간에 따라 변동한다.",
    "definition_en": "A neurodevelopmental disorder in which multiple motor tics and at least one vocal tic persist for more than one year, with onset before age 18, and tic frequency and intensity fluctuating over time.",
    "significance": "틱장애의 가장 심각한 형태로, ADHD 및 강박장애와의 높은 공병률이 기저핵 회로의 공유 병리를 시사한다.",
    "key_researchers": [
      {
        "name_ko": "조르주 질 드 라 뚜렛",
        "name_en": "Georges Gilles de la Tourette",
        "contribution": "1885년 운동 틱과 음성 틱이 결합된 증후군을 최초로 체계적으로 기술했다."
      },
      {
        "name_ko": "제임스 레크만",
        "name_en": "James Leckman",
        "contribution": "뚜렛장애의 신경생물학적 기전과 발달적 경과를 규명하고 치료 가이드라인을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "강박장애",
        "name_en": "Obsessive-Compulsive Disorder",
        "id": "OBSESS_OCD_001"
      },
      {
        "name_ko": "상동운동장애",
        "name_en": "Stereotypic Movement Disorder",
        "id": "NEURO_SMD_019"
      },
      {
        "name_ko": "발달성협응장애",
        "name_en": "Developmental Coordination Disorder",
        "id": "NEURO_DCD_018"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "뚜렛 = 운동 틱 + 음성 틱 + 1년 이상, 세 조건 모두 충족 필요",
      "differential": "뚜렛장애는 운동+음성 틱 모두 필요하고, 지속성(만성) 운동 또는 음성 틱 장애는 둘 중 하나만 있다.",
      "key_point": "대부분 10~12세에 틱이 최고조에 달하고 청소년기~성인 초기에 상당수 호전되며, 음성 틱은 반드시 욕설(coprolalia)이 아니다.",
      "common_mistake": "뚜렛장애 환자 모두가 욕설 틱(coprolalia)을 보인다고 생각하는 것 — 실제 욕설 틱은 10~15%에서만 나타난다."
    }
  },
  {
    "id": "NEURO_DCD_018",
    "terminology": "발달성협응장애 (Developmental Coordination Disorder)",
    "terminology_ko": "발달성협응장애",
    "terminology_en": "Developmental Coordination Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "협응 운동 기술의 습득과 수행이 생활연령과 기술 학습 기회에 비해 현저하게 낮으며, 이로 인해 학업, 일상생활 활동, 놀이 등에 지속적으로 영향을 미치는 운동 장애이다.",
    "definition_en": "A motor disorder in which the acquisition and performance of coordinated motor skills are substantially below expected for chronological age and opportunity for skill learning, persistently affecting academic achievement, daily living activities, and play.",
    "significance": "학령기 아동의 5~6%에서 나타나는 흔한 발달 장애이나, 인지 및 행동 장애에 비해 간과되기 쉽다.",
    "key_researchers": [
      {
        "name_ko": "셰릴 미슐나",
        "name_en": "Cheryl Missiuna",
        "contribution": "발달성협응장애의 조기 식별과 학교 기반 중재 전략을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "특정학습장애",
        "name_en": "Specific Learning Disorder",
        "id": "NEURO_SLD_005"
      },
      {
        "name_ko": "상동운동장애",
        "name_en": "Stereotypic Movement Disorder",
        "id": "NEURO_SMD_019"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "DCD = 몸이 서투른 아이(clumsy child syndrome), 운동 협응의 발달적 어려움",
      "differential": "DCD는 운동 협응의 발달적 결함이고, 상동운동장애는 반복적이고 비기능적 운동 패턴이며, 틱장애는 갑작스럽고 빠른 반복 운동이다.",
      "key_point": "뇌성마비 등 신경학적 질환이나 시각 장애로 설명되지 않아야 하며, ADHD와 50% 이상 공병한다.",
      "common_mistake": "단순히 운동을 못하는 아이로 치부하는 것 — 글씨 쓰기, 단추 채우기 등 일상생활 전반에 영향을 미치는 장애이다."
    }
  },
  {
    "id": "NEURO_SMD_019",
    "terminology": "상동운동장애 (Stereotypic Movement Disorder)",
    "terminology_ko": "상동운동장애",
    "terminology_en": "Stereotypic Movement Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "손 흔들기, 몸 흔들기, 머리 박기, 자해 행동 등 반복적이고 명백히 무목적적인 운동 행동이 발달 초기에 나타나며, 일상 활동을 방해하거나 신체적 손상을 초래할 수 있는 장애이다.",
    "definition_en": "A disorder characterized by repetitive, apparently purposeless motor behaviors such as hand flapping, body rocking, head banging, and self-injurious behavior, beginning in early development and potentially interfering with daily activities or causing physical injury.",
    "significance": "지적장애와 자폐스펙트럼장애에서 빈번하게 동반되며, 자해 행동이 포함될 경우 긴급한 중재가 필요하다.",
    "key_researchers": [
      {
        "name_ko": "마크 루이스",
        "name_en": "Mark Lewis",
        "contribution": "상동행동의 신경생물학적 기전을 연구하여 기저핵-피질 회로의 역할을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "자폐스펙트럼장애",
        "name_en": "Autism Spectrum Disorder",
        "id": "NEURO_ASD_002"
      },
      {
        "name_ko": "지적장애",
        "name_en": "Intellectual Disability",
        "id": "NEURO_IDD_003"
      },
      {
        "name_ko": "뚜렛장애",
        "name_en": "Tourette's Disorder",
        "id": "NEURO_TIC_017"
      }
    ],
    "sub_types": [
      {
        "name": "자해 행동 동반 (With Self-injurious Behavior)",
        "description": "머리 박기, 물어뜯기 등 신체 손상을 초래하는 행동 포함"
      },
      {
        "name": "자해 행동 비동반 (Without Self-injurious Behavior)",
        "description": "신체 손상을 초래하지 않는 반복 운동만 포함"
      }
    ],
    "quiz_hints": {
      "mnemonic": "상동운동 = 반복적이고 무목적적 운동(흔들기, 두드리기), 틱과 달리 리듬적이고 지속적",
      "differential": "상동운동은 리듬적이고 지속적인 패턴이고, 틱은 갑작스럽고 빠르고 반복적이지만 비리듬적이다.",
      "key_point": "자해 행동 동반 여부를 반드시 지정해야 하며, ASD의 제한적이고 반복적 행동과 동시 진단이 가능하다.",
      "common_mistake": "ASD의 반복적 행동과 상동운동장애를 동일시하는 것 — 상동운동장애는 별도 진단이며 ASD와 함께 진단할 수 있다."
    }
  },
  {
    "id": "NEURO_DEL_020",
    "terminology": "섬망 (Delirium)",
    "terminology_ko": "섬망",
    "terminology_en": "Delirium",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "주의력과 의식의 장해가 급성으로 발현하여 짧은 기간에 걸쳐 변동하며, 인지 기능(기억, 지남력, 언어, 지각 등)의 추가적 결함이 동반되는 신경인지 상태로, 기저 의학적 원인이 존재한다.",
    "definition_en": "A neurocognitive condition characterized by acute onset of disturbances in attention and awareness that fluctuate over a short period, with additional cognitive deficits (memory, orientation, language, perception), caused by an underlying medical condition.",
    "significance": "입원 노인 환자의 30%까지 나타나는 흔한 의학적 응급으로, 치매와의 감별 진단이 매우 중요하며 기저 원인의 신속한 치료가 필수적이다.",
    "key_researchers": [
      {
        "name_ko": "샤론 이누예",
        "name_en": "Sharon Inouye",
        "contribution": "섬망의 위험 요인과 예방 전략에 대한 체계적 연구를 수행하고, 혼동평가법(CAM)을 개발했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "일몰현상",
        "name_en": "Sundowning",
        "id": "NEURO_SUN_031"
      }
    ],
    "sub_types": [
      {
        "name": "과활동형 (Hyperactive)",
        "description": "초조, 불안, 환각, 망상, 공격적 행동이 두드러지는 유형"
      },
      {
        "name": "저활동형 (Hypoactive)",
        "description": "무기력, 졸림, 반응 저하가 두드러지는 유형 (간과되기 쉬움)"
      },
      {
        "name": "혼합형 (Mixed)",
        "description": "과활동과 저활동 증상이 교대로 나타나는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "섬망 = 급성 발현 + 의식/주의력 변동 + 의학적 원인, 치매와의 3가지 감별점",
      "differential": "섬망은 급성으로 발현하고 의식 수준이 변동하며 가역적이고, 치매(주요 신경인지장애)는 서서히 발현하고 의식이 유지되며 대부분 비가역적이다.",
      "key_point": "저활동형 섬망은 우울증이나 피로로 오인되기 쉬워 간과될 위험이 높으며, 사망률도 더 높다.",
      "common_mistake": "섬망을 치매로 오진하거나, 노인의 혼란 상태를 정상 노화로 간주하는 것 — 섬망은 의학적 응급이다."
    }
  },
  {
    "id": "NEURO_MND_021",
    "terminology": "주요 신경인지장애 (Major Neurocognitive Disorder)",
    "terminology_ko": "주요 신경인지장애",
    "terminology_en": "Major Neurocognitive Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "이전 수행 수준에서 하나 이상의 인지 영역(복합적 주의, 실행기능, 학습과 기억, 언어, 지각-운동, 사회인지)에서 유의한 인지적 저하가 있으며, 이러한 결함이 일상 활동의 독립적 수행을 방해하는 장애이다.",
    "definition_en": "A disorder involving significant cognitive decline from a previous level of performance in one or more cognitive domains (complex attention, executive function, learning and memory, language, perceptual-motor, social cognition), with deficits interfering with independence in everyday activities.",
    "significance": "DSM-5에서 '치매(dementia)' 용어를 대체하여 낙인을 줄이고, 인지적 저하의 원인과 심각도를 체계적으로 분류하는 틀을 제공한다.",
    "key_researchers": [
      {
        "name_ko": "알로이스 알츠하이머",
        "name_en": "Alois Alzheimer",
        "contribution": "1906년 치매 환자의 뇌에서 노인성 반점과 신경섬유매듭을 최초로 보고하여 신경퇴행성 치매 연구를 개척했다."
      },
      {
        "name_ko": "로널드 피터슨",
        "name_en": "Ronald Petersen",
        "contribution": "경도인지장애(MCI) 개념을 체계화하여 정상 노화와 치매 사이의 전이 단계를 정의했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "경도 신경인지장애",
        "name_en": "Mild Neurocognitive Disorder",
        "id": "NEURO_MiND_022"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "섬망",
        "name_en": "Delirium",
        "id": "NEURO_DEL_020"
      },
      {
        "name_ko": "DSM-5",
        "name_en": "DSM-5",
        "id": "ASSESS_DSM_001"
      },
      {
        "name_ko": "인지적 예비력",
        "name_en": "Cognitive Reserve",
        "id": "NEURO_CRV_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "주요 NCD 진단 = 유의한 인지 저하 + 독립적 일상 활동 방해, 6개 인지 영역 중 1개 이상",
      "differential": "주요 신경인지장애는 일상생활 독립성이 손상되고, 경도 신경인지장애는 인지 저하는 있으나 독립적 일상활동이 보존된다.",
      "key_point": "DSM-5에서 6개 인지 영역(복합적 주의, 실행기능, 학습과 기억, 언어, 지각-운동, 사회인지)을 명시하고, 원인별 지정자를 사용한다.",
      "common_mistake": "주요 신경인지장애를 정상 노화에 의한 인지 저하와 혼동하는 것 — 정상 노화는 일상생활 기능에 유의한 영향을 미치지 않는다."
    }
  },
  {
    "id": "NEURO_MiND_022",
    "terminology": "경도 신경인지장애 (Mild Neurocognitive Disorder)",
    "terminology_ko": "경도 신경인지장애",
    "terminology_en": "Mild Neurocognitive Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "이전 수행 수준에서 하나 이상의 인지 영역에서 경미한 인지적 저하가 있으나, 보상 전략을 사용하면 일상 활동의 독립적 수행이 가능한 상태로, 경도인지장애(MCI) 개념과 대응된다.",
    "definition_en": "A condition involving modest cognitive decline from a previous level of performance in one or more cognitive domains, but with preserved independence in everyday activities using compensatory strategies, corresponding to the concept of mild cognitive impairment (MCI).",
    "significance": "정상 노화와 주요 신경인지장애(치매) 사이의 전이 단계로, 조기 발견과 예방적 중재의 기회를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "로널드 피터슨",
        "name_en": "Ronald Petersen",
        "contribution": "경도인지장애(MCI)의 진단 기준을 수립하고 치매로의 전환율을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "인지적 예비력",
        "name_en": "Cognitive Reserve",
        "id": "NEURO_CRV_036"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "경도 NCD = '약간의' 인지 저하 + 독립적 일상생활 '보존', 치매의 전 단계",
      "differential": "경도 신경인지장애는 일상생활 독립성이 보존되고, 주요 신경인지장애(치매)는 독립적 일상활동이 손상된다.",
      "key_point": "경도 NCD를 가진 사람의 약 10~15%가 매년 주요 NCD(치매)로 전환되지만, 일부는 안정적으로 유지되거나 호전되기도 한다.",
      "common_mistake": "경도 신경인지장애가 반드시 치매로 진행한다고 단정하는 것 — 안정 유지나 호전 가능성도 있다."
    }
  },
  {
    "id": "NEURO_ALZ_023",
    "terminology": "알츠하이머병 (Alzheimer's Disease)",
    "terminology_ko": "알츠하이머병",
    "terminology_en": "Alzheimer's Disease",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "기억력 저하를 초기 증상으로 하여 점진적으로 인지 기능 전반이 퇴행하는 가장 흔한 신경퇴행성 질환으로, 뇌 내 아밀로이드 반점(amyloid plaques)과 신경섬유매듭(neurofibrillary tangles)의 축적이 특징적 병리 소견이다.",
    "definition_en": "The most common neurodegenerative disease, initially presenting with memory decline and progressing to global cognitive deterioration, characterized by accumulation of amyloid plaques and neurofibrillary tangles in the brain.",
    "significance": "전체 치매의 60~80%를 차지하는 가장 흔한 원인으로, 고령화 사회에서 가장 심각한 공중보건 과제 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "알로이스 알츠하이머",
        "name_en": "Alois Alzheimer",
        "contribution": "1906년 최초의 알츠하이머병 환자(Auguste Deter)의 뇌에서 특징적 병리 소견을 발견하고 보고했다."
      },
      {
        "name_ko": "존 하디",
        "name_en": "John Hardy",
        "contribution": "아밀로이드 연쇄 가설(amyloid cascade hypothesis)을 제안하여 알츠하이머병의 병리 기전 이해에 기여했다."
      },
      {
        "name_ko": "헨리 브라크",
        "name_en": "Heiko Braak",
        "contribution": "타우 병리의 단계적 확산 경로(Braak staging)를 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      },
      {
        "name_ko": "바이오마커",
        "name_en": "Biomarkers",
        "id": "NEURO_BIO_029"
      },
      {
        "name_ko": "신경섬유매듭",
        "name_en": "Neurofibrillary Tangles",
        "id": "NEURO_NFT_030"
      },
      {
        "name_ko": "콜린에스테라제 억제제",
        "name_en": "Cholinesterase Inhibitors",
        "id": "NEURO_CHI_033"
      },
      {
        "name_ko": "돌봄자 부담",
        "name_en": "Caregiver Burden",
        "id": "NEURO_CGB_040"
      }
    ],
    "sub_types": [
      {
        "name": "조기발병형 (Early-Onset)",
        "description": "65세 이전에 발병하며 유전적 요인이 강하고 진행이 빠른 경향"
      },
      {
        "name": "후기발병형 (Late-Onset)",
        "description": "65세 이후에 발병하며 가장 흔한 유형, APOE4 유전자가 위험 요인"
      }
    ],
    "quiz_hints": {
      "mnemonic": "알츠하이머 2대 병리: A(아밀로이드 반점) + T(타우 신경섬유매듭) = AT 모형",
      "differential": "알츠하이머병은 기억 장해가 초기 증상이고 점진적으로 진행하며, 전두측두엽 치매는 성격 변화와 행동 탈억제가 초기 증상이다.",
      "key_point": "확정 진단은 사후 부검으로만 가능하나, 바이오마커(아밀로이드 PET, CSF 타우)로 생전 진단의 정확도가 크게 향상되었다.",
      "common_mistake": "알츠하이머병을 단순한 건망증이나 정상 노화로 간주하는 것 — 진행성 신경퇴행성 질환이다."
    }
  },
  {
    "id": "NEURO_VaD_024",
    "terminology": "혈관성 치매 (Vascular Dementia)",
    "terminology_ko": "혈관성 치매",
    "terminology_en": "Vascular Dementia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "뇌혈관 질환(뇌졸중, 소혈관 질환 등)으로 인한 뇌 손상이 원인이 되어 인지 기능이 저하되는 신경인지장애로, 알츠하이머병 다음으로 흔한 치매 원인이다.",
    "definition_en": "A neurocognitive disorder caused by cerebrovascular disease (stroke, small vessel disease) leading to brain damage and cognitive decline, the second most common cause of dementia after Alzheimer's disease.",
    "significance": "예방 가능한 치매 원인 중 가장 대표적이며, 고혈압, 당뇨, 고지혈증 등 혈관 위험 요인의 관리가 치매 예방에 직결된다.",
    "key_researchers": [
      {
        "name_ko": "블라디미르 하친스키",
        "name_en": "Vladimir Hachinski",
        "contribution": "허혈점수(Hachinski Ischemic Score)를 개발하여 혈관성 치매와 알츠하이머병의 감별에 기여했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      }
    ],
    "sub_types": [
      {
        "name": "다발성 경색 치매 (Multi-Infarct Dementia)",
        "description": "여러 차례의 뇌졸중으로 인해 발생하는 유형"
      },
      {
        "name": "소혈관 질환 치매 (Small Vessel Disease Dementia)",
        "description": "뇌 소혈관의 만성적 손상으로 인해 발생하는 유형"
      },
      {
        "name": "전략적 경색 치매 (Strategic Infarct Dementia)",
        "description": "인지 기능에 중요한 단일 부위의 경색으로 발생하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "혈관성 치매 = 뇌혈관 문제가 원인, '계단식' 악화가 특징적 경과",
      "differential": "혈관성 치매는 급격한 발병이나 계단식 악화를 보이고, 알츠하이머병은 서서히 점진적으로 악화된다.",
      "key_point": "혈관 위험 요인(고혈압, 당뇨 등)의 적극적 관리가 예방의 핵심이며, 신경영상에서 뇌혈관 병변이 확인되어야 한다.",
      "common_mistake": "혈관성 치매와 알츠하이머병이 항상 독립적이라고 생각하는 것 — 두 병리가 혼합된 혼합형 치매가 매우 흔하다."
    }
  },
  {
    "id": "NEURO_FTD_025",
    "terminology": "전두측두엽 치매 (Frontotemporal Dementia)",
    "terminology_ko": "전두측두엽 치매",
    "terminology_en": "Frontotemporal Dementia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "전두엽과 측두엽의 점진적 퇴행을 특징으로 하며, 성격 변화, 행동 탈억제, 무감동, 언어 장애 등이 초기 증상으로 나타나는 신경퇴행성 치매로, 65세 이전 발병이 상대적으로 흔하다.",
    "definition_en": "A neurodegenerative dementia characterized by progressive degeneration of the frontal and temporal lobes, with early symptoms including personality changes, behavioral disinhibition, apathy, and language impairment, with relatively common onset before age 65.",
    "significance": "65세 미만 조기 발병 치매의 주요 원인 중 하나로, 초기에 정신과적 장애(성격장애, 우울증 등)로 오진되기 쉬워 감별 진단의 중요성이 높다.",
    "key_researchers": [
      {
        "name_ko": "아널드 픽",
        "name_en": "Arnold Pick",
        "contribution": "1892년 전두-측두엽 위축과 관련된 치매(픽병)를 최초로 기술했다."
      },
      {
        "name_ko": "데이비드 닐리",
        "name_en": "David Neary",
        "contribution": "전두측두엽 치매의 현대적 진단 기준을 체계화했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "실어증",
        "name_en": "Aphasia",
        "id": "NEURO_APH_028"
      }
    ],
    "sub_types": [
      {
        "name": "행동변이형 (Behavioral Variant, bvFTD)",
        "description": "성격 변화, 행동 탈억제, 무감동, 공감 능력 상실이 초기 증상"
      },
      {
        "name": "의미변이형 원발성 진행성 실어증 (Semantic Variant PPA)",
        "description": "단어 의미 이해의 진행적 상실이 특징"
      },
      {
        "name": "비유창/무문법형 원발성 진행성 실어증 (Nonfluent/Agrammatic PPA)",
        "description": "말하기의 노력성 증가와 문법 오류가 특징"
      }
    ],
    "quiz_hints": {
      "mnemonic": "FTD = 전두엽(성격/행동) + 측두엽(언어), 기억은 비교적 보존",
      "differential": "FTD는 성격 변화와 행동 탈억제가 초기 증상이고 기억은 상대적 보존, 알츠하이머병은 기억 저하가 초기 증상이다.",
      "key_point": "65세 이전 발병이 흔하며, 행동변이형은 성격장애나 정신과적 장애로 오진되기 쉽다.",
      "common_mistake": "모든 치매가 기억 저하로 시작한다고 가정하는 것 — FTD는 성격과 행동 변화로 시작되는 경우가 많다."
    }
  },
  {
    "id": "NEURO_LBD_026",
    "terminology": "루이소체 치매 (Dementia with Lewy Bodies)",
    "terminology_ko": "루이소체 치매",
    "terminology_en": "Dementia with Lewy Bodies",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "뇌 피질에 루이소체(알파-시누클레인 단백질 응집체)가 축적되어 발생하는 신경퇴행성 치매로, 인지 기능의 변동, 반복적인 구체적 시각환각, 파킨슨 증상이 핵심 임상 특징이다.",
    "definition_en": "A neurodegenerative dementia caused by accumulation of Lewy bodies (alpha-synuclein protein aggregates) in the cerebral cortex, with core clinical features including fluctuating cognition, recurrent detailed visual hallucinations, and parkinsonism.",
    "significance": "알츠하이머병, 혈관성 치매 다음으로 흔한 치매 원인으로, 항정신병 약물에 대한 심각한 과민 반응으로 인해 정확한 진단이 환자 안전에 직결된다.",
    "key_researchers": [
      {
        "name_ko": "고사카 겐지",
        "name_en": "Kenji Kosaka",
        "contribution": "루이소체를 가진 미만성 치매의 임상-병리학적 특성을 체계적으로 기술했다."
      },
      {
        "name_ko": "이언 맥키스",
        "name_en": "Ian McKeith",
        "contribution": "루이소체 치매의 국제 합의 진단 기준을 개발하고 개정을 주도했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "파킨슨병 치매",
        "name_en": "Parkinson's Disease Dementia",
        "id": "NEURO_PDD_027"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "조현병",
        "name_en": "Schizophrenia",
        "id": "SCHIZO_SCH_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "루이소체 치매 3대 핵심: 인지 변동(Fluctuation) + 시각환각(Visual Hallucination) + 파킨슨증(Parkinsonism) = FVP",
      "differential": "루이소체 치매는 인지 증상이 먼저 나타나고 파킨슨 증상이 동반되며, 파킨슨병 치매는 파킨슨 운동 증상이 1년 이상 먼저 나타난 후 치매가 발생한다.",
      "key_point": "항정신병 약물(특히 전형적 항정신병 약물)에 대한 심각한 과민 반응이 나타날 수 있어 처방 시 극히 주의해야 한다.",
      "common_mistake": "루이소체 치매의 시각환각을 조현병의 환각과 동일시하는 것 — 루이소체 치매의 환각은 구체적이고 선명하며 주로 사람이나 동물이 보인다."
    }
  },
  {
    "id": "NEURO_PDD_027",
    "terminology": "파킨슨병 치매 (Parkinson's Disease Dementia)",
    "terminology_ko": "파킨슨병 치매",
    "terminology_en": "Parkinson's Disease Dementia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "파킨슨병 진단 후 운동 증상이 확립된 상태에서 점진적으로 인지 기능 저하가 발생하는 신경인지장애로, 실행기능, 주의력, 시공간 기능의 결함이 두드러진다.",
    "definition_en": "A neurocognitive disorder in which cognitive decline develops gradually after established motor symptoms of Parkinson's disease, with prominent deficits in executive function, attention, and visuospatial abilities.",
    "significance": "파킨슨병 환자의 약 80%가 장기적으로 치매를 발달시키며, 루이소체 치매와의 관계에서 루이소체 질환이라는 연속적 스펙트럼 개념을 뒷받침한다.",
    "key_researchers": [
      {
        "name_ko": "마르티아 에밀레",
        "name_en": "Murat Emre",
        "contribution": "파킨슨병 치매의 진단 기준을 확립하고 치료 가이드라인을 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "루이소체 치매",
        "name_en": "Dementia with Lewy Bodies",
        "id": "NEURO_LBD_026"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "파킨슨병 치매 = 먼저 떨리고(운동), 나중에 잊는다(인지), 1년 규칙",
      "differential": "파킨슨병 치매는 운동 증상이 1년 이상 먼저 나타난 후 치매가 발생하고, 루이소체 치매는 인지 증상과 운동 증상이 거의 동시에 또는 인지가 먼저 나타난다.",
      "key_point": "진단의 핵심은 '1년 규칙'로, 파킨슨 운동 증상 발병 후 최소 1년이 지난 뒤 치매가 나타나야 파킨슨병 치매로 진단한다.",
      "common_mistake": "파킨슨병이 단순히 운동 장애라고만 생각하는 것 — 인지 저하, 우울, 수면 장애 등 비운동 증상도 매우 중요하다."
    }
  },
  {
    "id": "NEURO_APH_028",
    "terminology": "실어증 (Aphasia)",
    "terminology_ko": "실어증",
    "terminology_en": "Aphasia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "뇌 손상으로 인해 이전에 습득한 언어 능력이 손상되는 장애로, 말하기(표현), 이해(수용), 읽기, 쓰기 등 언어 기능의 다양한 측면이 영향받을 수 있다.",
    "definition_en": "A disorder in which previously acquired language abilities are impaired due to brain damage, affecting various aspects of language function including speaking (expression), comprehension (reception), reading, and writing.",
    "significance": "신경인지장애에서 언어 영역의 결함을 나타내는 핵심 증상으로, 뇌졸중과 치매의 주요 인지 증상이다.",
    "key_researchers": [
      {
        "name_ko": "폴 브로카",
        "name_en": "Paul Broca",
        "contribution": "1861년 좌반구 전두엽 손상과 표현성 실어증의 관계를 발견하여 언어의 뇌 편재화를 확립했다."
      },
      {
        "name_ko": "카를 베르니케",
        "name_en": "Carl Wernicke",
        "contribution": "좌반구 측두엽 손상과 수용성 실어증의 관계를 발견했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실인증",
        "name_en": "Agnosia",
        "id": "NEURO_AGN_037"
      },
      {
        "name_ko": "실행증",
        "name_en": "Apraxia",
        "id": "NEURO_APX_038"
      },
      {
        "name_ko": "전두측두엽 치매",
        "name_en": "Frontotemporal Dementia",
        "id": "NEURO_FTD_025"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      }
    ],
    "sub_types": [
      {
        "name": "브로카 실어증 (Broca's Aphasia)",
        "description": "말하기가 비유창하고 노력적이나 언어 이해는 비교적 보존"
      },
      {
        "name": "베르니케 실어증 (Wernicke's Aphasia)",
        "description": "유창하게 말하지만 의미 없는 말이 많고 이해력이 심하게 손상"
      }
    ],
    "quiz_hints": {
      "mnemonic": "브로카 = 표현(Broken speech), 베르니케 = 이해(Words don't make sense)",
      "differential": "실어증은 뇌 손상 후 이전 언어 능력의 상실이고, 언어장애(신경발달)는 발달기부터 언어 습득 자체의 결함이다.",
      "key_point": "브로카 실어증은 전두엽 손상으로 말하기 어려우나 이해 가능, 베르니케 실어증은 측두엽 손상으로 유창하게 말하지만 이해 불가능.",
      "common_mistake": "실어증을 구음장애(dysarthria)와 혼동하는 것 — 실어증은 언어 체계의 장애이고, 구음장애는 말 산출 근육의 장애이다."
    }
  },
  {
    "id": "NEURO_BIO_029",
    "terminology": "바이오마커 (Biomarkers in Neurocognitive Disorders)",
    "terminology_ko": "바이오마커",
    "terminology_en": "Biomarkers in Neurocognitive Disorders",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "신경인지장애의 기저 병리를 객관적으로 측정할 수 있는 생물학적 지표로, 아밀로이드 베타, 타우 단백질, 신경퇴행 지표 등이 대표적이며, 뇌척수액 검사, PET 영상, 혈액 검사 등으로 측정된다.",
    "definition_en": "Biological indicators that can objectively measure underlying pathology of neurocognitive disorders, including amyloid beta, tau protein, and neurodegeneration markers, measured through cerebrospinal fluid analysis, PET imaging, and blood tests.",
    "significance": "알츠하이머병의 생전 진단 정확도를 획기적으로 높였으며, A/T/N(아밀로이드/타우/신경퇴행) 분류 체계로 진단 패러다임이 전환되고 있다.",
    "key_researchers": [
      {
        "name_ko": "클리포드 잭",
        "name_en": "Clifford Jack",
        "contribution": "알츠하이머병의 A/T/N 바이오마커 분류 체계를 제안하여 진단 연구의 표준 프레임워크를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "신경섬유매듭",
        "name_en": "Neurofibrillary Tangles",
        "id": "NEURO_NFT_030"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "A/T/N = Amyloid(아밀로이드) / Tau(타우) / Neurodegeneration(신경퇴행), 3축 분류",
      "differential": "바이오마커는 병리의 객관적 측정치이고, 인지 검사는 증상의 주관적/행동적 평가 — 두 가지가 일치하지 않을 수도 있다.",
      "key_point": "아밀로이드 PET에서 양성이라도 인지 증상이 없을 수 있으며(전임상 단계), 바이오마커와 임상 증상을 통합적으로 평가해야 한다.",
      "common_mistake": "바이오마커 양성이 곧 치매 진단을 의미한다고 생각하는 것 — 전임상 단계에서도 바이오마커 양성이 나타날 수 있다."
    }
  },
  {
    "id": "NEURO_NFT_030",
    "terminology": "신경섬유매듭 (Neurofibrillary Tangles)",
    "terminology_ko": "신경섬유매듭",
    "terminology_en": "Neurofibrillary Tangles",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "과인산화된 타우 단백질이 신경세포 내부에 비정상적으로 응집되어 형성된 섬유성 구조물로, 알츠하이머병의 특징적 신경병리학적 소견이며 신경세포의 기능 장애와 사멸을 초래한다.",
    "definition_en": "Fibrous structures formed by abnormal intracellular aggregation of hyperphosphorylated tau protein in neurons, a characteristic neuropathological finding of Alzheimer's disease that causes neuronal dysfunction and death.",
    "significance": "아밀로이드 반점과 함께 알츠하이머병의 2대 병리학적 특징으로, 타우 병리의 확산 경로가 임상 증상의 진행과 밀접하게 대응된다.",
    "key_researchers": [
      {
        "name_ko": "헨리 브라크",
        "name_en": "Heiko Braak",
        "contribution": "타우 병리의 단계적 확산 경로를 6단계로 체계화한 Braak staging을 확립했다."
      },
      {
        "name_ko": "미셸 고더트",
        "name_en": "Michel Goedert",
        "contribution": "타우 단백질의 과인산화와 응집 기전을 분자 수준에서 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "바이오마커",
        "name_en": "Biomarkers",
        "id": "NEURO_BIO_029"
      },
      {
        "name_ko": "전두측두엽 치매",
        "name_en": "Frontotemporal Dementia",
        "id": "NEURO_FTD_025"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "신경섬유매듭 = 타우(Tau)의 '꼬임', 세포 '안쪽'의 병리 (아밀로이드 반점은 '바깥')",
      "differential": "신경섬유매듭은 세포 내 타우 응집이고, 아밀로이드 반점(노인성 반점)은 세포 외 아밀로이드 베타 축적이다.",
      "key_point": "Braak staging에 따라 타우 병리는 내후각피질에서 시작하여 해마, 신피질로 순차적으로 확산되며 이 경로가 증상 진행과 대응된다.",
      "common_mistake": "신경섬유매듭이 알츠하이머병에만 나타난다고 생각하는 것 — 전두측두엽 치매 등 다른 타우병증에서도 나타난다."
    }
  },
  {
    "id": "NEURO_SUN_031",
    "terminology": "일몰현상 (Sundowning)",
    "terminology_ko": "일몰현상",
    "terminology_en": "Sundowning",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "치매 환자에서 늦은 오후나 저녁 시간에 혼란, 초조, 불안, 공격성, 배회 등의 행동 증상이 악화되는 현상으로, 일주기 리듬의 교란과 관련된 것으로 추정된다.",
    "definition_en": "A phenomenon in dementia patients where behavioral symptoms such as confusion, agitation, anxiety, aggression, and wandering worsen in the late afternoon or evening, thought to be related to disruption of circadian rhythms.",
    "significance": "치매 환자와 돌봄자 모두에게 큰 부담을 주는 행동 증상으로, 시설 입소의 주요 원인 중 하나이다.",
    "key_researchers": [
      {
        "name_ko": "로테 로클린",
        "name_en": "Ladislav Volicer",
        "contribution": "일몰현상의 임상적 특성과 관리 전략에 대한 체계적 연구를 수행했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "배회",
        "name_en": "Wandering",
        "id": "NEURO_WAN_032"
      },
      {
        "name_ko": "섬망",
        "name_en": "Delirium",
        "id": "NEURO_DEL_020"
      },
      {
        "name_ko": "돌봄자 부담",
        "name_en": "Caregiver Burden",
        "id": "NEURO_CGB_040"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "일몰현상 = 해가 지면(Sundown) 증상이 악화, 일주기 리듬 교란과 관련",
      "differential": "일몰현상은 하루 중 특정 시간대(오후~저녁)에 규칙적으로 악화되는 패턴이고, 섬망은 시간대와 무관하게 의식 수준이 변동한다.",
      "key_point": "밝은 조명 유지, 규칙적 활동 일정, 오후 카페인 제한 등 비약물적 환경 관리가 일차적 중재이다.",
      "common_mistake": "일몰현상을 단순히 환자의 성격 변화로 간주하는 것 — 신경생물학적 기반이 있는 증상으로 체계적 관리가 필요하다."
    }
  },
  {
    "id": "NEURO_WAN_032",
    "terminology": "배회 (Wandering)",
    "terminology_ko": "배회",
    "terminology_en": "Wandering",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "치매 환자가 목적 없이 반복적으로 돌아다니거나, 집이나 시설을 벗어나 길을 잃는 행동으로, 지남력 상실과 공간 기억의 결함이 주요 원인이며 안전 위험을 초래한다.",
    "definition_en": "Repetitive, apparently purposeless locomotion in dementia patients, including leaving home or facility and becoming lost, primarily caused by disorientation and spatial memory deficits, posing significant safety risks.",
    "significance": "치매의 행동심리증상(BPSD) 중 안전 위협이 가장 높은 증상으로, 실종과 사고 위험을 관리하기 위한 체계적 대책이 필요하다.",
    "key_researchers": [
      {
        "name_ko": "도나 엘가자",
        "name_en": "Donna Algase",
        "contribution": "배회 행동의 유형을 분류하고 욕구기반모형(NDB)을 제안하여 배회의 원인을 체계적으로 설명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "일몰현상",
        "name_en": "Sundowning",
        "id": "NEURO_SUN_031"
      },
      {
        "name_ko": "돌봄자 부담",
        "name_en": "Caregiver Burden",
        "id": "NEURO_CGB_040"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "배회 = 치매 환자의 '떠돌기', 지남력 상실 + 공간 기억 결함이 원인",
      "differential": "배회는 인지적 결함(지남력 상실)에 기인한 반복적 이동이고, 초조(agitation)는 목적 없는 신체적 불안정 상태이다.",
      "key_point": "배회는 충족되지 않은 욕구(배고픔, 불편감, 지루함 등)의 표현일 수 있으므로 원인 탐색이 중재의 첫 단계이다.",
      "common_mistake": "배회를 단순히 물리적으로 제한하려는 것 — 신체적 구속은 초조와 낙상 위험을 오히려 증가시킬 수 있다."
    }
  },
  {
    "id": "NEURO_CHI_033",
    "terminology": "콜린에스테라제 억제제 (Cholinesterase Inhibitors)",
    "terminology_ko": "콜린에스테라제 억제제",
    "terminology_en": "Cholinesterase Inhibitors",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "아세틸콜린의 분해를 억제하여 시냅스에서의 아세틸콜린 농도를 증가시키는 약물로, 알츠하이머병의 경도~중등도 단계에서 인지 기능 저하를 일시적으로 지연시키는 일차 치료제이다.",
    "definition_en": "Medications that inhibit the breakdown of acetylcholine to increase its synaptic concentration, used as first-line treatment to temporarily slow cognitive decline in mild to moderate stages of Alzheimer's disease.",
    "significance": "알츠하이머병에서 콜린성 가설에 기반한 최초의 승인 약물군으로, 근본적 치료는 아니지만 증상 개선과 진행 지연에 유의한 효과가 입증되었다.",
    "key_researchers": [
      {
        "name_ko": "피터 데이비스",
        "name_en": "Peter Davies",
        "contribution": "알츠하이머병에서 콜린성 결핍을 발견하여 콜린성 가설의 기초를 마련했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "메만틴",
        "name_en": "Memantine",
        "id": "NEURO_MEM_034"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [
      {
        "name": "도네페질 (Donepezil/Aricept)",
        "description": "경도~중증 알츠하이머병에 사용되는 가장 널리 처방되는 콜린에스테라제 억제제"
      },
      {
        "name": "리바스티그민 (Rivastigmine/Exelon)",
        "description": "경구 및 패치 제형이 있으며 루이소체 치매에도 사용"
      },
      {
        "name": "갈란타민 (Galantamine/Razadyne)",
        "description": "콜린에스테라제 억제와 니코틴 수용체 조절의 이중 기전"
      }
    ],
    "quiz_hints": {
      "mnemonic": "콜린에스테라제 억제제 = 아세틸콜린 분해 '억제' -> 콜린 '증가' -> 인지 기능 '개선'",
      "differential": "콜린에스테라제 억제제는 경도~중등도 단계의 일차 약물이고, 메만틴은 중등도~중증 단계에서 사용되며, 두 약물을 병용할 수 있다.",
      "key_point": "질병의 근본적 진행을 멈추지는 못하며, 6~12개월간 인지 저하를 지연시키는 증상적 치료에 해당한다.",
      "common_mistake": "콜린에스테라제 억제제가 알츠하이머병을 치료한다고 생각하는 것 — 질병 진행을 일시적으로 지연시킬 뿐 근본적 치료가 아니다."
    }
  },
  {
    "id": "NEURO_MEM_034",
    "terminology": "메만틴 (Memantine)",
    "terminology_ko": "메만틴",
    "terminology_en": "Memantine",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "NMDA 수용체의 비경쟁적 길항제로, 과도한 글루타메이트 자극에 의한 흥분독성으로부터 신경세포를 보호하며, 알츠하이머병의 중등도~중증 단계에서 인지 기능과 일상생활 기능의 저하를 지연시킨다.",
    "definition_en": "A non-competitive NMDA receptor antagonist that protects neurons from excitotoxicity caused by excessive glutamate stimulation, slowing decline in cognitive and daily living functions in moderate to severe stages of Alzheimer's disease.",
    "significance": "콜린에스테라제 억제제와 다른 기전으로 작용하여 병용 치료가 가능하며, 중증 단계에서도 효과가 있는 유일한 승인 약물이다.",
    "key_researchers": [
      {
        "name_ko": "크리스 파슨스",
        "name_en": "Chris Parsons",
        "contribution": "메만틴의 NMDA 수용체 길항 기전과 신경보호 작용을 규명했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "콜린에스테라제 억제제",
        "name_en": "Cholinesterase Inhibitors",
        "id": "NEURO_CHI_033"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "메만틴 = NMDA 길항제, 글루타메이트 흥분독성 '차단', 중등도~중증용",
      "differential": "메만틴은 NMDA 수용체 길항(글루타메이트 계열)이고, 콜린에스테라제 억제제는 아세틸콜린 분해 억제(콜린 계열)로 기전이 완전히 다르다.",
      "key_point": "콜린에스테라제 억제제와 병용하여 사용할 수 있으며, 병용 시 단독 사용보다 추가적 효과가 보고되었다.",
      "common_mistake": "메만틴을 경도 단계에서도 동일하게 효과적이라고 생각하는 것 — 주로 중등도~중증 단계에서 효과가 입증되었다."
    }
  },
  {
    "id": "NEURO_ODD_035",
    "terminology": "적대적 반항장애 (Oppositional Defiant Disorder)",
    "terminology_ko": "적대적 반항장애",
    "terminology_en": "Oppositional Defiant Disorder",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "분노/과민한 기분, 논쟁적/반항적 행동, 보복성의 패턴이 최소 6개월 이상 지속되며, 권위적 인물(부모, 교사 등)에 대한 지속적 거부와 적대적 행동을 보이는 파괴적 행동 장애이다.",
    "definition_en": "A disruptive behavior disorder characterized by a pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness lasting at least 6 months, with persistent refusal and hostile behavior toward authority figures such as parents and teachers.",
    "significance": "ADHD와 가장 높은 공병률을 보이는 장애로, 조기에 중재하지 않으면 품행장애와 반사회적 성격장애로 발전할 위험이 있다.",
    "key_researchers": [
      {
        "name_ko": "러셀 바클리",
        "name_en": "Russell Barkley",
        "contribution": "ADHD와 ODD의 공병 관계와 가족 상호작용 패턴의 역할을 연구했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "ADHD",
        "name_en": "ADHD",
        "id": "NEURO_ADH_001"
      },
      {
        "name_ko": "반사회적 성격장애",
        "name_en": "Antisocial Personality Disorder",
        "id": "PERSON_APD_002"
      },
      {
        "name_ko": "이상행동",
        "name_en": "Abnormal Behavior",
        "id": "FOUND_ABN_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "ODD 3대 증상 군집: (1) 분노/과민성, (2) 논쟁/반항, (3) 보복성",
      "differential": "적대적 반항장애는 규칙 위반이나 타인의 권리 침해가 없고, 품행장애(CD)는 타인의 권리를 심각하게 침해하는 행동(폭력, 절도 등)을 포함한다.",
      "key_point": "ADHD 아동의 약 40~60%가 ODD를 동반하며, ODD의 분노/과민성 차원은 이후 불안과 우울 장애를 예측한다.",
      "common_mistake": "정상적인 반항 행동과 ODD를 구분하지 못하는 것 — ODD는 빈도, 강도, 지속기간이 발달 수준에 비해 현저하게 과도해야 한다."
    }
  },
  {
    "id": "NEURO_CRV_036",
    "terminology": "인지적 예비력 (Cognitive Reserve)",
    "terminology_ko": "인지적 예비력",
    "terminology_en": "Cognitive Reserve",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "교육, 직업적 성취, 사회적 활동, 인지적 자극 등 평생의 경험이 축적되어 뇌 병리에 대한 내성을 높이고, 동일한 수준의 뇌 손상에도 인지 기능을 더 잘 유지할 수 있게 하는 능력이다.",
    "definition_en": "The capacity built through lifetime experiences such as education, occupational attainment, social activities, and cognitive stimulation that increases tolerance to brain pathology, enabling better maintenance of cognitive function despite equivalent levels of brain damage.",
    "significance": "동일한 알츠하이머 병리를 가진 사람들 간 인지 기능 차이를 설명하며, 치매 예방을 위한 생활양식 중재의 이론적 근거를 제공한다.",
    "key_researchers": [
      {
        "name_ko": "야코프 스턴",
        "name_en": "Yaakov Stern",
        "contribution": "인지적 예비력 개념을 체계화하고, 교육과 직업적 성취가 치매 위험을 감소시킨다는 역학적 근거를 제시했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "경도 신경인지장애",
        "name_en": "Mild Neurocognitive Disorder",
        "id": "NEURO_MiND_022"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "인지적 예비력 = 뇌의 '저축', 교육과 활동으로 쌓아둔 인지적 '여유분'",
      "differential": "인지적 예비력은 경험에 의한 기능적 보상 능력이고, 뇌 예비력(brain reserve)은 뇌의 물리적 크기나 시냅스 밀도 등 구조적 측면이다.",
      "key_point": "높은 인지적 예비력은 치매 발병을 지연시키지만, 일단 발병하면 진행이 더 빠를 수 있다(예비력 소진 후 급격한 저하).",
      "common_mistake": "인지적 예비력이 높으면 치매에 걸리지 않는다고 생각하는 것 — 발병을 지연시킬 뿐 완전히 예방하지는 못한다."
    }
  },
  {
    "id": "NEURO_AGN_037",
    "terminology": "실인증 (Agnosia)",
    "terminology_ko": "실인증",
    "terminology_en": "Agnosia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "감각 기능 자체는 정상임에도 이전에 알고 있던 대상, 사람, 소리 등을 인식하지 못하는 장애로, 뇌의 특정 영역 손상에 의해 발생하며 시각, 청각, 촉각 등 다양한 감각 양식에서 나타날 수 있다.",
    "definition_en": "A disorder in which previously familiar objects, people, or sounds cannot be recognized despite intact sensory function, caused by damage to specific brain regions and potentially affecting various sensory modalities including visual, auditory, and tactile.",
    "significance": "지각-운동 인지 영역의 결함을 반영하는 핵심 신경인지 증상으로, 치매의 진행 단계 평가에 중요한 임상 지표이다.",
    "key_researchers": [
      {
        "name_ko": "하인리히 리사우어",
        "name_en": "Heinrich Lissauer",
        "contribution": "시각 실인증을 통각적(apperceptive) 실인증과 연합적(associative) 실인증으로 구분하는 분류 체계를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실어증",
        "name_en": "Aphasia",
        "id": "NEURO_APH_028"
      },
      {
        "name_ko": "실행증",
        "name_en": "Apraxia",
        "id": "NEURO_APX_038"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [
      {
        "name": "시각 실인증 (Visual Agnosia)",
        "description": "시각적으로 대상을 인식하지 못하나 촉각으로는 인식 가능"
      },
      {
        "name": "안면 실인증 (Prosopagnosia)",
        "description": "얼굴을 인식하지 못하는 유형"
      },
      {
        "name": "청각 실인증 (Auditory Agnosia)",
        "description": "소리를 인식하지 못하는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실인증(a-gnosis) = 인식(gnosis)이 안 됨(a-), 보이지만 무엇인지 모름",
      "differential": "실인증은 감각은 정상인데 인식이 안 되는 것이고, 감각 장애(시력 저하 등)는 감각 자체의 문제이다.",
      "key_point": "한 감각 양식에서 인식 못하는 대상을 다른 감각 양식(예: 촉각)으로는 인식할 수 있다는 점이 진단의 핵심이다.",
      "common_mistake": "실인증을 기억 장애와 혼동하는 것 — 실인증은 지각적 인식의 결함이지 기억의 상실이 아니다."
    }
  },
  {
    "id": "NEURO_APX_038",
    "terminology": "실행증 (Apraxia)",
    "terminology_ko": "실행증",
    "terminology_en": "Apraxia",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "근력, 감각, 운동 협응 능력이 정상임에도 이전에 학습한 목적적 동작(옷 입기, 도구 사용 등)을 수행하지 못하는 장애로, 운동 계획과 프로그래밍의 결함에 기인한다.",
    "definition_en": "A disorder in which previously learned purposeful movements (dressing, tool use) cannot be performed despite intact strength, sensation, and motor coordination, caused by deficits in motor planning and programming.",
    "significance": "치매 환자의 일상생활 독립성 상실에 직접적으로 기여하는 인지 증상으로, 실인증, 실어증과 함께 신경인지장애의 3대 '실(失)' 증상을 구성한다.",
    "key_researchers": [
      {
        "name_ko": "후고 리프만",
        "name_en": "Hugo Liepmann",
        "contribution": "실행증의 개념을 정립하고 관념운동 실행증과 관념 실행증을 구분하는 분류 체계를 제안했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "실인증",
        "name_en": "Agnosia",
        "id": "NEURO_AGN_037"
      },
      {
        "name_ko": "실어증",
        "name_en": "Aphasia",
        "id": "NEURO_APH_028"
      },
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "주요 신경인지장애",
        "name_en": "Major Neurocognitive Disorder",
        "id": "NEURO_MND_021"
      }
    ],
    "sub_types": [
      {
        "name": "관념운동 실행증 (Ideomotor Apraxia)",
        "description": "지시에 따라 동작을 수행하지 못하나 자동적으로는 수행 가능"
      },
      {
        "name": "관념 실행증 (Ideational Apraxia)",
        "description": "복잡한 연속 동작의 순서를 계획하고 실행하지 못함"
      },
      {
        "name": "구성 실행증 (Constructional Apraxia)",
        "description": "그리기, 조립하기 등 공간 구성 과제 수행의 어려움"
      }
    ],
    "quiz_hints": {
      "mnemonic": "실행증(a-praxis) = 실행(praxis)이 안 됨(a-), 할 줄 알지만 몸이 안 따름",
      "differential": "실행증은 운동 계획/프로그래밍의 결함이고, 마비(paralysis)는 운동 신경 자체의 손상이며, 운동실조(ataxia)는 소뇌 기능의 장애이다.",
      "key_point": "지시에 의한 수행은 못하지만 동일한 동작을 자동적 상황에서는 수행할 수 있는 해리 현상이 관념운동 실행증의 특징이다.",
      "common_mistake": "실행증을 단순한 운동 장애로 생각하는 것 — 근력과 운동 능력은 정상이며, 운동 '계획'의 인지적 결함이다."
    }
  },
  {
    "id": "NEURO_CON_039",
    "terminology": "작화증 (Confabulation)",
    "terminology_ko": "작화증",
    "terminology_en": "Confabulation",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "기억의 공백을 의식적 의도 없이 거짓 정보로 채우는 현상으로, 환자 자신은 만들어낸 기억을 진실로 믿으며, 코르사코프 증후군, 전두엽 손상, 치매 등에서 관찰된다.",
    "definition_en": "A phenomenon of unintentionally filling memory gaps with false information, where the patient genuinely believes the fabricated memories to be true, observed in Korsakoff syndrome, frontal lobe damage, and dementia.",
    "significance": "의도적 거짓말과 구별되는 신경인지적 현상으로, 기억 인출과 자기 모니터링 기능의 결함을 반영한다.",
    "key_researchers": [
      {
        "name_ko": "세르게이 코르사코프",
        "name_en": "Sergei Korsakoff",
        "contribution": "알코올성 기억장애에서 작화증을 체계적으로 기술하여 코르사코프 증후군을 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "알코올사용장애",
        "name_en": "Alcohol Use Disorder",
        "id": "SUBST_ALC_001"
      },
      {
        "name_ko": "실행기능 결손",
        "name_en": "Executive Function Deficit",
        "id": "NEURO_EFD_010"
      },
      {
        "name_ko": "해리성 정체감 장애",
        "name_en": "Dissociative Identity Disorder",
        "id": "SOMDIS_DID_004"
      }
    ],
    "sub_types": [
      {
        "name": "자발적 작화 (Spontaneous Confabulation)",
        "description": "질문 없이도 자발적으로 거짓 기억을 진술하는 유형"
      },
      {
        "name": "유발성 작화 (Provoked Confabulation)",
        "description": "기억 검사 등 직접적 질문에 대한 반응으로 나타나는 유형"
      }
    ],
    "quiz_hints": {
      "mnemonic": "작화증 = 기억의 빈칸을 '지어내서 채우기', 거짓말이 아닌 '진심으로 믿는 거짓 기억'",
      "differential": "작화증은 의도 없이 무의식적으로 기억을 만들어내는 것이고, 거짓말(malingering)은 의도적으로 허위 정보를 제공하는 것이다.",
      "key_point": "전두엽의 자기 모니터링(source monitoring) 기능 결함이 핵심 기전으로, 기억 인출 시 출처를 확인하지 못하여 발생한다.",
      "common_mistake": "작화증을 의도적인 거짓말이나 꾀병으로 오해하는 것 — 환자는 자신이 만들어낸 기억을 진실로 확신한다."
    }
  },
  {
    "id": "NEURO_CGB_040",
    "terminology": "돌봄자 부담 (Caregiver Burden)",
    "terminology_ko": "돌봄자 부담",
    "terminology_en": "Caregiver Burden",
    "category": "NEURO",
    "category_name": "신경발달 및 신경인지장애 (Neurodevelopmental and Neurocognitive Disorders)",
    "definition": "치매 등 신경인지장애 환자를 돌보는 가족이나 돌봄 제공자가 경험하는 신체적, 정서적, 사회적, 경제적 부담의 총체로, 돌봄자 자신의 건강과 삶의 질에 심각한 영향을 미친다.",
    "definition_en": "The totality of physical, emotional, social, and financial burdens experienced by family members or care providers caring for patients with neurocognitive disorders such as dementia, significantly affecting the caregiver's own health and quality of life.",
    "significance": "치매 환자의 행동심리증상(배회, 초조, 일몰현상 등)이 돌봄자 부담의 주요 원인이며, 돌봄자의 우울과 소진은 환자 돌봄의 질을 저하시키는 악순환을 초래한다.",
    "key_researchers": [
      {
        "name_ko": "스티븐 잿릿",
        "name_en": "Steven Zarit",
        "contribution": "돌봄자 부담 면접(Zarit Burden Interview)을 개발하여 돌봄자 부담의 표준화된 측정 도구를 확립했다."
      }
    ],
    "related_concepts": [
      {
        "name_ko": "알츠하이머병",
        "name_en": "Alzheimer's Disease",
        "id": "NEURO_ALZ_023"
      },
      {
        "name_ko": "일몰현상",
        "name_en": "Sundowning",
        "id": "NEURO_SUN_031"
      },
      {
        "name_ko": "배회",
        "name_en": "Wandering",
        "id": "NEURO_WAN_032"
      },
      {
        "name_ko": "주요우울장애",
        "name_en": "Major Depressive Disorder",
        "id": "MOOD_MDD_001"
      }
    ],
    "sub_types": [],
    "quiz_hints": {
      "mnemonic": "돌봄자 부담 = 환자만이 아닌 '돌보는 사람'도 돌봄이 필요하다",
      "differential": "돌봄자 부담은 돌봄 상황에서 발생하는 포괄적 스트레스이고, 공감 피로(compassion fatigue)는 전문 돌봄 제공자의 이차적 외상 반응이다.",
      "key_point": "행동심리증상(BPSD)이 인지 증상보다 돌봄자 부담에 더 큰 영향을 미치며, 돌봄자 지원 프로그램이 환자의 시설 입소를 지연시킨다.",
      "common_mistake": "치매 환자의 치료에만 집중하고 돌봄자의 심리적 건강을 간과하는 것 — 돌봄자 지원이 환자 돌봄의 질에 직접적으로 영향을 미친다."
    }
  }
];
