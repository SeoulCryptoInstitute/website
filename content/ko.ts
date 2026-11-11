import type { SiteContent } from "./types";

export const ko: SiteContent = {
  meta: {
    title:
      "SCI · Seoul Crypto Institute — 대한민국, 글로벌 크립토 허브로의 도약",
    description:
      "Seoul Crypto Institute(SCI)는 대한민국이 디지털 자산과 금융 질서의 주도국가로 도약하기 위한 지적·실천적 구심점입니다. 씽크탱크를 넘어선 액션탱크.",
    localeLabel: "KR",
    altLocaleLabel: "EN",
  },

  nav: {
    items: [
      { page: "home", label: "SCI 소개" },
      { page: "home", hash: "people", label: "연구위원" },
      { page: "membership", label: "사원가입·후원" },
      { page: "media", label: "언론보도·활동" },
    ],
    cta: "CONTACT",
    menu: "메뉴 열기",
    close: "메뉴 닫기",
  },

  // 공지줄. 다음 공지가 생기면 { text, cta, href }를 넣는다.
  announce: null,

  hero: {
    eyebrow: "Seoul Crypto Institute",
    titleLines: ["대한민국,", "글로벌 크립토", "허브로의 도약"],
    definition:
      "SCI는 대한민국이 디지털 자산과 금융 질서의 주도국가로 도약하기 위한 지적·실천적 구심점입니다.",
    lead: "우리는 ‘씽크탱크(Think Tank)’를 넘어, 대한민국 금융의 크립토 트랜스포메이션을 이끄는 ‘액션탱크(Action Tank)’로 출범합니다.",
    primary: { label: "SCI 소개서", href: "/files/sci-introduction-ko.pdf" },
    secondary: { label: "SCI와 함께하기", href: "#contact" },
  },

  whyNow: {
    num: "01",
    kicker: "Why Now",
    title: "지금, 자산과 금융의 거대한 ‘서사의 전환점’",
    lead: "우리는 가치가 만들어지고 분배되는 방식이 다시 쓰이는 시점에 서 있습니다.",
    items: [
      {
        title: "자산(Asset)의 재정의",
        body: "농업혁명의 토지, 산업혁명의 주식, 정보혁명의 IP를 아울러, 이제 ‘디지털 프로토콜’이 새로이 가치를 창출하고 분배하는 시대입니다.",
      },
      {
        title: "미국 중심의 크립토 질서 재편",
        body: "‘트럼프 2.0’ 행정부는 글로벌 크립토 수도를 지향하며 크립토를 달러 패권의 도구이자 금융의 혁신으로 선언했습니다. 크립토 ETF 승인은 수십조 달러가 기존 금융시장으로 흐르는 ‘제도적 고속도로’를 개통했습니다.",
      },
      {
        title: "대한민국의 선택",
        body: "이 흐름에 휩쓸려가는 ‘추격자(Follower)’가 될 것인가, 아니면 새로운 흐름을 주도하는 ‘설계자(Leader)’가 될 것인가?",
      },
    ],
  },

  korea: {
    num: "02",
    kicker: "Korea Now",
    title: "세계적 역동시장과 갈라파고스의 위기가 공존한다",
    potentialLabel: "Potential — 강력한 성장엔진",
    stats: [
      {
        value: "1,000만",
        unit: "명 이상",
        label: "개인투자자 기반. 디지털 네이티브 2030 세대가 주도합니다.",
      },
      {
        value: "20",
        unit: "%",
        label: "경제활동인구 대비 투자자 비중.",
      },
      {
        value: "KOSDAQ",
        unit: "상회",
        label:
          "코스닥을 넘어서는 일일 거래량. 글로벌 디지털자산 가격 형성에 영향력을 보유합니다.",
      },
    ],
    riskLabel: "Risk — 불명확한 규제와 갈라파고스화",
    riskTitle: "그러나 이 유동성은 세계와 연결되어 있지 않습니다.",
    risks: [
      {
        title: "원화의 고립",
        body: "국제 통용성 부재로 인한 ‘로컬 마켓’의 한계.",
      },
      {
        title: "소극적 정책과 불명확한 규제",
        body: "그림자 규제와 소극적인 정책·입법으로 혁신 기업의 ‘디지털 엑소더스’가 발생하고 있습니다.",
      },
      {
        title: "갈라파고스화",
        body: "글로벌 유동성과 단절된 채 내부에서만 과열되는 ‘김치 프리미엄’ 현상.",
      },
    ],
  },

  vision: {
    num: "03",
    kicker: "Vision",
    title: "대한민국을 G2 Crypto Hub로",
    lead: "물리적 영토를 넘어, 신뢰할 수 있는 ‘규제 플랫폼’을 제공하여 전 세계의 자본과 프로젝트를 서울로 연결합니다.",
    compare: [
      {
        tag: "G1",
        name: "미국",
        focus: "Trading & Custody",
        body: "달러 패권을 기반으로 한 ‘유통과 수탁’ 중심의 허브.",
      },
      {
        tag: "G2",
        name: "대한민국",
        focus: "Issuance & Innovation",
        body: "역동적 IT와 유연한 규제를 기반으로 한 ‘발행과 혁신’ 중심의 허브.",
      },
    ],
    note: "핵심 전략은 경쟁이 아니라 차별화입니다.",
    pillars: [
      {
        id: "issuance",
        title: "발행 허브",
        sub: "Issuance Hub",
        body: "전 세계 크립토 혁신가가 대한민국에서 시작하게 합니다. 크립토 특구, 프로토콜 법인격, 모든 자산의 토큰화.",
      },
      {
        id: "liquidity",
        title: "유동성 및 전환",
        sub: "Liquidity & Transformation",
        body: "원화 스테이블코인 도입과 금융·기업의 크립토 트랜스포메이션으로 금융의 미래를 선점합니다.",
      },
      {
        id: "global",
        title: "글로벌 연결",
        sub: "Global Connection",
        body: "전 세계의 자본과 혁신 프로젝트를 서울로 연결하는 관할 중립적 규제 플랫폼을 제공합니다.",
      },
    ],
  },

  agenda: {
    num: "04",
    kicker: "Policy Agenda",
    title: "무엇을 바꿀 것인가",
    lead: "SCI는 세 개의 전략축 아래 구체적인 입법·행정 어젠다를 설계하고 추진합니다.",
    groups: [
      { id: "all", label: "전체", sub: "All" },
      { id: "issuance", label: "발행 허브", sub: "Issuance Hub" },
      {
        id: "liquidity",
        label: "유동성 및 전환",
        sub: "Liquidity & Transformation",
      },
      { id: "global", label: "글로벌 연결", sub: "Global Connection" },
    ],
    items: [
      {
        group: "issuance",
        title: "디지털 자산 산업 장려와 크립토 특구 조성",
        body: "네거티브 규제 적용과 세제 혜택을 통해 ‘한국형 크립토 밸리’를 구축합니다.",
      },
      {
        group: "issuance",
        title: "프로토콜 법인격 제도화",
        body: "DAO 및 네트워크 조직이 합법적으로 계약하고 자금을 조달할 수 있는 ‘프로토콜 LLC’ 도입을 연구합니다.",
      },
      {
        group: "issuance",
        title: "모든 자산의 토큰화 (RWA)",
        body: "K-콘텐츠, 부동산, IP, 화폐, 주식 등 모든 자산의 온체인 발행과 유통을 위한 법적·제도적 정비를 추진합니다.",
      },
      {
        group: "liquidity",
        title: "원화 스테이블코인 (Digital KRW)",
        body: "은행 예치금 100% 담보 기반의 Digital KRW로 원화 국제화의 기반을 만들고 DeFi 주권을 확보합니다.",
      },
      {
        group: "liquidity",
        title: "DAPB — 디지털 자산 프라임 브로커리지",
        body: "증권사·은행 등 프라임 브로커가 기관에게 수탁, 대차, 매매를 원스톱으로 제공할 수 있도록 제도화합니다.",
      },
      {
        group: "liquidity",
        title: "마켓 메이킹(MM) 양성화",
        body: "시세 조종과 명확히 구별되는 합법적 유동성 공급자 라이선스를 도입합니다.",
      },
      {
        group: "liquidity",
        title: "현물 ETF 및 인덱스",
        body: "비트코인을 넘어 다양한 혁신 자산의 지수화 상품 개발과 ETF를 허용합니다.",
      },
      {
        group: "liquidity",
        title: "금융기관의 크립토 트랜스포메이션",
        body: "국내 금융기관의 크립토 시장 진입과 글로벌 크립토 금융 사업 진출을 위한 제도화 기반을 마련합니다.",
      },
      {
        group: "liquidity",
        title: "기업의 크립토 트랜스포메이션",
        body: "국내 기업이 크립토 전환을 실행할 수 있는 구체적 로드맵을 제시합니다.",
      },
      {
        group: "global",
        title: "관할 중립적 크립토 플랫폼",
        body: "국내 유동성과 수용적 제도화, 특구를 통해 글로벌 크립토 시장의 유동성을 유입시키는 관할 중립 플랫폼을 설계합니다.",
      },
      {
        group: "global",
        title: "글로벌 크립토 기업의 한국 진입",
        body: "명확한 규제환경을 통해 글로벌 크립토 기업과 서비스의 한국 시장 진입을 활성화합니다.",
      },
      {
        group: "global",
        title: "국제 표준 정합성",
        body: "해외 규제기관 출신 전문가와 글로벌 네트워크를 통해 국제 표준과의 정합성을 지속적으로 검토합니다.",
      },
    ],
    spotlight: {
      tag: "Spotlight",
      title: "통합 커스터디 기반 특별 계좌",
      sub: "ICSA — 닫힌 원화의 빗장을 여는 기술적 해법",
      rows: [
        {
          label: "문제",
          body: "국내기업 및 외국인의 국내 계좌 개설과 금융 수익 반출이 어렵습니다. 글로벌 자금 유입의 구조적 장벽입니다.",
        },
        {
          label: "해법",
          body: "글로벌 수탁기관(Custodian) 명의의 통합 계좌(Omnibus Account)를 통해 외국인의 간접 진입을 허용합니다.",
        },
        {
          label: "효과",
          body: "글로벌 크립토 투자자금이 국내 시장의 유동성을 활용하면서도 국내 실물 경제에 대한 영향은 격리되어, 글로벌 자금을 한국으로 유치합니다.",
        },
      ],
    },
  },

  work: {
    num: "05",
    kicker: "How We Work",
    title: "이론과 실무, 정책이 융합된 Hybrid Action Tank",
    lead: "SCI는 단순한 연구소가 아닙니다. 변화를 만들어내는 실행 공동체입니다.",
    valuesLabel: "Core Values",
    values: [
      {
        title: "실천성",
        sub: "Practicality",
        body: "단순한 연구를 넘어 변화를 만들어내는 실행 공동체를 지향합니다.",
      },
      {
        title: "전문성",
        sub: "Expertise",
        body: "학계·법조계·산업계 및 해외 관료 출신의 전문가 하이브리드 조직입니다.",
      },
      {
        title: "선구자 정신",
        sub: "Pioneering",
        body: "‘금지’와 ‘통제’ 대신 ‘국경 없는 제도화’라는 새로운 길을 개척합니다.",
      },
    ],
    councilsLabel: "Three Councils",
    councils: [
      {
        name: "Research Council",
        scope: "학계 · 법조계",
        tasks: ["정교한 법리 해석", "입법 초안(Drafting) 작성"],
      },
      {
        name: "Industry Council",
        scope: "산업계",
        tasks: [
          "국내와 글로벌 거래소, 금융사, IT, Web3 기업",
          "현장의 애로사항 발굴 및 실증 사업(PoC) 추진",
        ],
      },
      {
        name: "Global Advisory Council",
        scope: "해외",
        tasks: [
          "전직 주요 규제기관 전문가, 글로벌 프로젝트 재단, 해외 VC, 협회, 씽크탱크",
          "국제 표준 정합성 검토 및 글로벌 네트워크 연결",
        ],
      },
    ],
    frameworkLabel: "Framework",
    frameworkLead:
      "SCI는 한국의 특수한 규제 환경 내에서 최적의 입법적·행정적 제도화를 위한 실행 프레임워크를 구축합니다.",
    framework: [
      {
        title: "크립토 및 금융 Regulation 개선을 위한 환경 조성",
        items: [
          "행정부의 크립토 및 금융 정책에 대한 지속적 모니터링과 피드백",
          "대한민국 경제 성장에 부합하는 크립토 및 금융 정책 모델 제시",
          "정례화된 정부·국회·산업계·학계의 소통 채널 구축",
        ],
      },
      {
        title: "한국 관할에 근거를 둔 탈국경적 크립토 제도화",
        items: [
          "탈국경적 크립토 제도화의 산업적 효과에 대한 연구",
          "크립토 특구 모델과 크립토 투자 시장 구조에 대한 연구",
          "행정적·입법적 제도화를 위한 장기 로드맵 구축",
        ],
      },
    ],
  },

  roadmap: {
    num: "06",
    kicker: "Roadmap",
    title: "비전을 현실로 만드는 3단계 실행 전략",
    lead: "제도는 선언이 아니라 일정으로 만들어집니다.",
    phases: [
      {
        label: "Phase 1",
        name: "기반 조성",
        period: "~18개월",
        items: [
          "SCI 창립 및 ‘크립토 허브 비전 백서 1.0’ 대국민 발표",
          "디지털 자산 허브를 위한 법·규제특구법 입법 추진",
          "대정부 소통 채널 가동",
        ],
      },
      {
        label: "Phase 2",
        name: "제도 돌파",
        period: "1~3년",
        items: [
          "ICSA(크립토 통합 계좌) 샌드박스 시범 사업 착수 — 글로벌 수탁사·국내 은행",
          "서울 ‘글로벌 디지털 자산 서밋’ 개최",
        ],
      },
      {
        label: "Phase 3",
        name: "허브 완성",
        period: "3~5년",
        items: [
          "외국인 기관 투자자의 국내 직접 진입 허용 — ICSA 전면 시행",
          "아시아 최고의 ‘신규 자산 발행(Issuance)’ 시장 등극",
        ],
      },
    ],
  },

  people: {
    num: "07",
    kicker: "People",
    title: "SCI 연구위원",
    lead: "학계, 법조계, 금융, 산업, 미디어에서 각자의 자리를 지켜온 전문가들이 하나의 실행 공동체로 모였습니다.",
    note: "가나다 순",
    members: [
      {
        slug: "kang-hyoung-goo",
        name: "강형구",
        position: "부대표",
        role: "한양대학교 경영대학 교수",
        bio: "리먼브러더스 아시아본부 퀀트전략팀과 액센츄어에서 근무했고, 머신러닝 기반 핀테크 기업 한다파트너스를 창업해 매각했습니다. 한양대 컴퓨테이셔널파이낸스 공학과 교수로 재직하며 금융감독원 자문위원, 국회 디지털자산TF 자문위원, 한국재무관리학회 회장(2024년)을 역임했습니다.",
      },
      {
        slug: "kim-joon-hyun",
        name: "김준현",
        position: "사무총장",
        role: "AIBIX lab 대표",
        bio: "JTBC 커뮤니케이션 총괄 부사장, 한샘 커뮤니케이션실 전무, 중앙일보·JTBC 기자를 지냈습니다. JTBC 재직 중 크립토 프로젝트를 진행했고, 현재 종합홍보대행사 사장이자 브랜드의 AI 경쟁력을 지수화한 AIBIX Score를 운영하는 AIBIX lab 대표로 있습니다.",
      },
      {
        slug: "park-moon-koo",
        name: "박문구",
        role: "Caspian Group 부대표",
        bio: "국제경제학과 경영대학원을 마친 뒤 통상전문가로서 한국 산업의 글로벌 경쟁력 강화를 자문했습니다. 지경학적 유인에 따른 글로벌 산업 밸류체인 재편과 AI 디지털 혁신에 행동과학을 융합한 신성장동력 창출에 매진하며, 자원부국과 제조 저개발국의 발전 로드맵을 설계합니다.",
      },
      {
        slug: "park-jong-baek",
        name: "박종백",
        position: "대표",
        role: "법무법인(유) 태평양 파트너변호사",
        bio: "2016년부터 블록체인 프로젝트와 디지털자산, 증권형 토큰, DeFi, DAO 법률자문을 수행해 왔습니다. 금융위 민관합동TF, 국회 법안작성TF, 과기부 법안용역에 참여했으며 Global Blockchain Convergence와 Free Software Foundation Europe 회원입니다.",
      },
      {
        slug: "baek-kwang-won",
        name: "백광원",
        role: "KW.Strategy 대표",
        bio: "2016년 암호화폐 분야의 개인 트레이더로 시작하여 KW.Strategy를 설립해 암호화폐 트레이딩을 하고 있으며, 자기자본 투자 형태로 암호화폐 및 다국가의 스타트업 직접투자와 벤처캐피탈의 LP를 하고 있습니다. 또한 한국에서 Formulalabs를 설립해 운영하고 있습니다.",
      },
      {
        slug: "ahn-soo-hyun",
        name: "안수현",
        role: "한국외국어대 법학전문대학원 교수",
        bio: "금융감독원 분쟁조정위원·제재심의위원·금융감독자문위원·블록체인 자문위원, 금융위원회 금융발전심의위원, 한국은행 CBDC 법률자문위원으로 활동해왔습니다. 현재 디지털자산보호재단 비상임이사, 금융감독원 옴부즈만, 금융위원회 금융중심지추진위원으로 활동하는 등 금융소비자보호와 디지털금융, 금융정책·산업분야에서 폭넓은 자문활동을 하고 있습니다.",
      },
      {
        slug: "oh-hyunok",
        name: "오현옥",
        role: "한양대학교 공과대학 교수",
        bio: "블록체인 기반 기술과 프라이버시 보장 기술을 개발하는 지크립토를 설립했습니다. 블록체인 기반 영지식증명 전자투표 시스템을 개발해 중앙선관위 온라인 투표 서비스를 운영하고 있으며, 영지식증명 연구학회 학회장을 맡고 있습니다.",
      },
      {
        slug: "yoo-minho",
        name: "유민호",
        role: "아이오트러스트 최고전략책임자(CSO)",
        bio: "임베디드 보안 개발자로 활동하다 2017년 아이오트러스트를 공동 창업했습니다. 개인용 지갑 디센트와 기업용 지갑 디센트 엔터프라이즈의 전략을 총괄하며 10년째 블록체인 지갑 분야에 집중하고 있고, 스터디 모임 '블파스'를 운영합니다.",
      },
      {
        slug: "lee-seok-jun",
        name: "이석준",
        role: "광주지방법원 순천지원 부장판사",
        bio: "금융법 및 가상자산법 분야를 전문으로 대법원 내에서 금융·가상자산 관련 판결 연구를 수행했습니다. 사법연수원과 서울남부지법 등에서 가상자산 관련 법적 쟁점을 주제로 여러 차례 강의했으며, 대법원 상사조 재판연구관을 거쳤습니다.",
      },
      {
        slug: "lee-junhaeng",
        name: "이준행",
        role: "Brightmount 대표",
        bio: "2015년 1세대 블록체인 스타트업 스트리미를 창업해 고팍스를 국내 5대 원화마켓 거래소로 성장시켰습니다. FTX 사태로 발생한 고객 피해에 개인 사재를 출연했고 2023년 고객 전액 상환을 전제로 매각했습니다. SCI의 전신인 글로벌 블록체인 정책협의회 설립을 주도했습니다.",
      },
      {
        slug: "lee-hyo-jin",
        name: "이효진",
        role: "고려대 정보보호대학원 겸임교수",
        bio: "정보통신부, 국무총리실 경제조정실장 등 30년 이상의 공직경험으로 디지털자산 규제와 블록체인기술·산업정책 전반에 대해 전문성과 이해가 높습니다. 국무총리실에서 주로 경제·금융, ICT·AI 분야 국가정책의 조정·총괄업무를 담당했습니다. 2021년에는 금융위, 과기정통부 등과 '범정부 가상자산거래관리방안'을 수립하고, 가상자산사업자 신고제 집행 등으로 제도정착에 기여했습니다.",
      },
      {
        slug: "jang-joong-hyuk",
        name: "장중혁",
        position: "부대표",
        role: "블록체인경제연구소 소장",
        bio: "IT·텔레콤·미디어 융합 산업 분야의 컨설턴트로 활동해 왔습니다. 한국 최초의 블록체인 다자간 보안 컴퓨팅 전문기업 아톰릭스랩을 공동 설립해 수석 크립토 이코노미스트로 활동했고, 현재 국내 유일의 민간 크립토 이코노미 연구소를 설립해 운영하고 있습니다.",
      },
      {
        slug: "jin-changho",
        name: "진창호",
        role: "엔코아 경영전략본부장 · 부대표",
        bio: "액센츄어, EY, BCG에서 19년간 디지털·테크 컨설턴트와 파트너로 일했습니다. 50여 개 기업·기관의 블록체인 컨설팅을 총괄했고 한국은행 CBDC 컨설팅 PM을 맡았으며, 현재 SK그룹에서 AI·데이터·블록체인 솔루션 사업 개발을 이끌고 있습니다.",
      },
      {
        slug: "choi-ki-eok",
        name: "최기억",
        role: "한스경제 사장",
        bio: "연합인포맥스 사장과 편집국장을 역임했고 외환·채권 등 금융시장 관련 저서를 10여 권 출간했습니다. 재직 중 크립토 평가회사 설립을 위한 고려대학교와의 MOU 체결, 블록체인 부서 설치, 컨퍼런스 개최를 추진했고 크립토 특화 케이블 채널을 출범시켰습니다.",
      },
      {
        slug: "choi-chul",
        name: "최철",
        role: "한국외국어대 법학전문대학원 교수 · 영국변호사",
        bio: "지식재산금융(IP Finance) 분야 전문가로서 국가지식재산위원회, 지식재산처, 유엔 세계지식재산기구(WIPO), KIPnet, IPFF 등 국내외 관련 기관의 정책연구 및 프로젝트에 참여해 왔습니다. 한국외대에서 20년간 지적재산권법과 국제금융법을 강의하였으며, 학교 재직 전에는 영국변호사로서 Allen & Overy 런던 본사에서 국제금융업무를 수행했습니다.",
      },
      {
        slug: "philip-gant",
        name: "필립 갠트",
        role: "Regulatory Ecosystems Group Research Director",
        bio: "하버드 대학교 아시아센터 Associate입니다. 이전에는 Global Blockchain Business Council(GBBC) APAC 총괄과 예일 대학교 박사후 연구원을 지냈습니다. 동아시아 법사학자로 훈련받았으며 예일 대학교 학사와 하버드 대학교 박사 학위를 받았습니다.",
      },
      {
        slug: "hong-junki",
        name: "홍준기",
        position: "부대표",
        role: "보고펀드랩스 대표",
        bio: "뉴욕과 홍콩에서 자본시장 및 파생상품 전문가로 활동했고 UBS그룹 한국 총괄대표, Cumberland DRW 한국·아시아 대표를 역임했습니다. 청와대와 기획재정부의 경제 정책 자문을 수행했으며, 현재 AI·블록체인을 활용한 자산운용 기법을 연구하는 보고펀드랩스를 이끌고 있습니다.",
      },
    ],
    advisorsTitle: "SCI 고문",
    advisors: [
      {
        slug: "oh-se-hyun",
        name: "오세현",
        role: "서울대 공학전문대학원 객원교수",
        bio: "KT 전무와 SK텔레콤 부사장을 지냈으며, 국가과학기술자문회의 심의위원, 오픈 블록체인 DID협회장을 역임했습니다. 한국공학한림원 정회원으로 기술경영정책분과위 소속으로 활동하면서 서울대 객원교수를 맡고 있습니다.",
      },
      {
        slug: "yesha-yadav",
        name: "Yesha Yadav",
        role: "밴더빌트 로스쿨 교수",
        bio: "금융시장 규제, 증권 규제, 기업 파산법을 연구하며 시장 구조와 디지털 자산을 중점적으로 다루고 있습니다. 미국 국채시장 규제에 관한 연구로 밴더빌트 대학교 총장 연구상(Chancellor Research Award)을 받았습니다. CFTC(미 상품선물거래위원회) 기술자문위원회 위원으로서 분산원장기술 소위원회 부위원장을 지냈으며, 디지털 달러 프로젝트(Digital Dollar Project) 자문위원회 위원으로 활동하고 있습니다. 밴더빌트 대학교에서 미국 블록체인협회(Blockchain Association)와 함께 제1회 디지털 자산 및 신기술 정책 서밋을 공동 주최했습니다.",
      },
    ],
  },

  insights: {
    num: "08",
    kicker: "Insights",
    title: "연구와 발간물",
    lead: "SCI의 연구 성과와 정책 제안은 공개 문서로 발간됩니다.",
    comingSoon: "곧 공개",
    items: [
      {
        tag: "Introduction",
        title: "SCI 소개서",
        body: "SCI가 왜 지금 필요한지, 무엇을 연구하고 제안하는지, 어떻게 운영되고 누가 함께하는지를 담은 공식 소개서입니다(v1.2).",
        status: "PDF 다운로드",
        href: "/files/sci-introduction-ko.pdf",
      },
      {
        tag: "Policy Brief",
        title: "통합 커스터디 기반 특별 계좌(ICSA) 도입 방안",
        body: "글로벌 수탁기관 명의의 통합 계좌를 통한 외국인 간접 진입 구조와 제도화 경로를 다룹니다.",
        status: "준비 중",
      },
      {
        tag: "Research",
        title: "프로토콜 법인격(Protocol LLC) 도입 연구",
        body: "DAO 및 네트워크 조직이 합법적으로 계약하고 자금을 조달할 수 있는 법인격 모델을 검토합니다.",
        status: "준비 중",
      },
    ],
  },

  contact: {
    num: "09",
    kicker: "Join SCI",
    title: "함께 설계할 분을 찾습니다",
    statement: "크립토로 세계를 품는 크립토 G2 대한민국",
    closing: [
      "우리는 더 이상 ‘금지’와 ‘통제’, 불명확한 그림자 규제가 혁신을 가로막지 않도록 노력할 것입니다.",
      "SCI는 ‘국경 없는 제도화’라는 새로운 창을 들고, 전 세계의 혁신가와 자본이 서울로 모여드는 길을 닦겠습니다.",
      "대한민국이 글로벌 디지털 경제의 심장부로 뛰는 그날까지, SCI가 가장 앞장서서, 가장 치열하게 움직이겠습니다.",
    ],
    channels: [
      {
        title: "정책 · 연구 협력",
        body: "정부, 국회, 학계와의 공동 연구 및 정책 논의를 제안해주세요.",
      },
      {
        title: "산업 참여",
        body: "거래소, 금융사, IT·Web3 기업의 Industry Council 참여와 실증 사업(PoC) 문의.",
      },
      {
        title: "미디어",
        body: "인터뷰, 기고, 자료 요청 등 언론 관련 문의.",
      },
    ],
    inquiryLabel: "문의",
  },

  pages: {
    membership: {
      title: "사원가입·후원 — SCI · Seoul Crypto Institute",
      description:
        "SCI 개인·법인 사원 가입과 후원 안내입니다. 연회비와 혜택, 가입 절차, 후원 유형과 원칙을 확인하고 안내서를 내려받을 수 있습니다.",
    },
    media: {
      title: "언론보도·활동 — SCI · Seoul Crypto Institute",
      description:
        "SCI의 활동과 언론보도를 모았습니다. 2026년 10월 창립 세미나 보도부터 정리했습니다.",
    },
    contact: {
      title: "CONTACT — SCI · Seoul Crypto Institute",
      description:
        "언론·취재, 사원가입·후원, 연구 협력 문의는 contact@seoulcrypto.institute로 보내 주세요.",
    },
  },

  contactPage: {
    kicker: "Contact",
    title: "SCI에 문의하기",
    lead: "모든 문의는 이메일 하나로 받습니다. 내용을 적어 보내 주시면 확인 후 답변드리겠습니다.",
    emailLabel: "이메일",
    topicsTitle: "이런 문의를 받습니다",
    topics: [
      {
        title: "언론·취재",
        body: "인터뷰, 기고, 자료 요청 등 언론 관련 문의",
      },
      {
        title: "사원가입·후원",
        body: "개인·법인 사원 가입과 후원에 관한 문의",
        link: { label: "사원가입·후원 안내 보기", page: "membership" },
      },
      {
        title: "연구 협력·강연·기타",
        body: "공동 연구와 정책 협력, 강연 요청, 그 밖의 문의",
      },
    ],
  },

  membership: {
    kicker: "Join & Support",
    title: "사원가입·후원",
    lead: "SCI의 연구와 정책 제안에 함께해 주세요. 사원으로 가입하거나 후원자로 SCI를 지원할 수 있습니다.",
    jump: { join: "사원가입", support: "후원" },
    join: {
      title: "사원가입",
      lead: "SCI의 사원은 개인 사원과 법인 사원으로 구성됩니다. 모든 사원은 사원총회에서 의결권을 갖는 정식 구성원입니다.",
      head: ["구분", "대상", "연회비"],
      types: [
        {
          name: "개인 사원",
          target:
            "SCI의 취지에 동조하고 사원으로서 활동하며 SCI를 후원하고자 하는 개인",
          fee: "연 20만 원",
        },
        {
          name: "법인 사원",
          target:
            "국내 기업과 한국 시장에 진출한 해외 기업. 제조·무역·금융·증권·콘텐츠·K-컬처·거래소·블록체인 기술 기업 등 현행 제도의 제약을 사업 현장에서 직접 체감하는 법인",
          fee: "연 100만 원",
        },
      ],
      feeNote: "회비는 가입 승인 후 별도로 안내드립니다.",
      benefitsTitle: "사원 혜택",
      benefits: [
        "SCI가 발간하는 뉴스레터와 연구보고서 우선 열람",
        "SCI가 주최하는 세미나·콘퍼런스·워크숍 우선 참석",
        "최고 의결기구인 사원총회 참석과 의결권 행사",
      ],
      stepsTitle: "가입 절차",
      steps: [
        {
          title: "가입 신청",
          body: "온라인 신청서를 작성하거나, 안내서의 별지 신청서를 작성해 이메일로 보냅니다.",
        },
        {
          title: "검토·승인",
          body: "SCI가 신청 내용을 검토해 승인 여부를 알려드립니다. 법인 사원의 가입은 이사회가 승인합니다.",
        },
        {
          title: "회비 납부",
          body: "가입이 승인되면 회비 납부 방법을 안내드립니다.",
        },
      ],
      apply: {
        label: "온라인 신청",
        url: "https://forms.gle/dxWTD6JrnAE9BV5J7",
      },
      pdfLabel: "안내서·신청서 PDF",
      pdf: "/files/sci-membership-guide-ko.pdf",
    },
    support: {
      title: "후원",
      lead: "SCI는 연구, 교육, 정책 제안, 법령 개선 제안 등의 활동을 위해 SCI의 취지에 동의하는 후원자로부터 후원금을 받습니다. 사원 여부와 관계없이 개인이나 법인 누구나 후원자가 될 수 있습니다.",
      principlesTitle: "후원 원칙",
      principles: [
        {
          title: "조건부 후원 금지",
          body: "후원금은 SCI의 특정 활동을 조건으로 받지 않습니다.",
        },
        {
          title: "수탁 연구와의 구분",
          body: "특정 연구 과제를 지정한 지원은 후원금이 아닌 수탁 연구로 따로 협의하며, 연구 독립성 원칙이 같이 적용됩니다.",
        },
        {
          title: "연구 독립성",
          body: "후원자는 연구·교육 주제를 제안할 수 있으나, 연구의 결론과 정책 권고의 내용에는 관여하지 않습니다.",
        },
        {
          title: "후원 한도",
          body: "한 후원자의 후원액은 매년 말 기준으로 그해 전체 후원액의 30%를 넘을 수 없습니다.",
        },
        {
          title: "재원 공개",
          body: "SCI는 연간 보고서를 통해 재원의 구성과 주요 후원 규모를 공개합니다.",
        },
      ],
      head: ["후원자 유형", "주요 차이", "연간 후원액"],
      tiers: [
        {
          name: "Platinum Supporter",
          amount: "연 3억 원",
          highlight:
            "연구·교육·세미나와 정책·법안 주제 제안, 협의회 신설 제안, 3개 협의회 운영위원회",
        },
        {
          name: "Gold Supporter",
          amount: "연 1억 원",
          highlight:
            "연구·교육·세미나 주제 제안(연 1회), 2개 협의회 운영위원회",
        },
        {
          name: "Silver Supporter",
          amount: "연 3,000만 원",
          highlight: "1개 협의회 논의 참여",
        },
      ],
      commonNote:
        "세 유형 모두 SCI 주최 교육·세미나 우선 참석, 정부·국회·산업계·학계 비공개 행사 초청, 연구 리포트 사전 수령과 규제동향 리포트, 협의회 주제 건의와 브리핑을 받습니다.",
      usdNote: "미화(USD)로는 원화 후원액에 상응하는 금액으로 후원할 수 있습니다.",
      pdfLabel: "후원 안내서 PDF",
      pdf: "/files/sci-sponsorship-guide-ko.pdf",
    },
    inquiryLabel: "가입·후원 문의",
  },

  media: {
    kicker: "News & Activities",
    title: "언론보도·활동",
    lead: "SCI의 활동과 그에 대한 언론보도를 행사별로 모았습니다.",
    coverageLabel: "{n}개 매체 보도",
    sameStoryLabel: "같은 기사",
    photosLabel: "사진 보도",
    koreanTag: null,
  },

  footer: {
    tagline: "디지털 주권을 설계하는 지성, 금융의 미래를 깨우는 실천",
    addressLabel: "주소",
    address: ["서울특별시 중구 서소문로 100", "Seoul Building 3F"],
    contactLabel: "문의",
    copyright: "Seoul Crypto Institute",
  },
};
