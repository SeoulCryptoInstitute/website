import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "SCI · Seoul Crypto Institute — Korea's Leap to a Global Crypto Hub",
    description:
      "The Seoul Crypto Institute (SCI) is the intellectual and practical center of gravity for Korea's emergence as a leading jurisdiction in digital assets and the financial order to come. Not a think tank — an action tank.",
    localeLabel: "EN",
    altLocaleLabel: "KR",
  },

  nav: {
    items: [
      { id: "why-now", label: "Why Now" },
      { id: "korea", label: "Korea" },
      { id: "vision", label: "Vision" },
      { id: "agenda", label: "Agenda" },
      { id: "work", label: "How We Work" },
      { id: "roadmap", label: "Roadmap" },
      { id: "people", label: "People" },
      { id: "insights", label: "Insights" },
    ],
    cta: "Get in touch",
    menu: "Open menu",
    close: "Close menu",
  },

  announce: {
    text: "Crypto Hub Vision Paper 1.0 — coming soon",
    cta: "Details",
    href: "#insights",
  },

  hero: {
    eyebrow: "Seoul Crypto Institute",
    titleLines: ["Korea's Leap", "to a Global", "Crypto Hub"],
    definition:
      "SCI is the intellectual and practical center of gravity for Korea's emergence as a leading jurisdiction in digital assets and the financial order to come.",
    lead: "We are launching not as another think tank, but as an action tank driving the crypto transformation of Korean finance.",
    primary: { label: "Vision Paper 1.0", href: "#insights" },
    secondary: { label: "Work with SCI", href: "#contact" },
  },

  whyNow: {
    num: "01",
    kicker: "Why Now",
    title: "A turning point in the narrative of assets and finance",
    lead: "We stand at the moment when the way value is created and distributed is being rewritten.",
    items: [
      {
        title: "The redefinition of assets",
        body: "From land in the agricultural revolution, to equities in the industrial revolution, to intellectual property in the information revolution — digital protocols are now the medium through which value is created and distributed.",
      },
      {
        title: "A crypto order re-centered on the United States",
        body: "The second Trump administration has set out to make the United States the crypto capital of the planet, framing crypto as both an instrument of dollar primacy and an engine of financial innovation. The approval of crypto ETFs has opened an institutional highway for capital to flow into digital assets at scale.",
      },
      {
        title: "Korea's choice",
        body: "Will Korea be a follower carried along by this current, or an architect that shapes it?",
      },
    ],
  },

  korea: {
    num: "02",
    kicker: "Korea Now",
    title: "A uniquely dynamic market and a Galápagos risk",
    potentialLabel: "Potential — a powerful growth engine",
    stats: [
      {
        value: "10M",
        unit: "+",
        label:
          "Retail investors, led by digitally native investors in their twenties and thirties.",
      },
      {
        value: "20",
        unit: "%",
        label: "Of the economically active population.",
      },
      {
        value: "KOSDAQ",
        unit: "exceeded",
        label:
          "Daily trading volume exceeding that of the KOSDAQ, with genuine influence on global digital asset price formation.",
      },
    ],
    riskLabel: "Risk — regulatory uncertainty and Galápagos isolation",
    riskTitle: "Yet this liquidity is not connected to the world.",
    risks: [
      {
        title: "An isolated currency",
        body: "Limited international convertibility of the won confines Korea to a local market.",
      },
      {
        title: "Passive policy and opaque rules",
        body: "Shadow regulation — informal administrative guidance — combined with hesitant policymaking has driven a digital exodus of innovative firms.",
      },
      {
        title: "The Galápagos effect",
        body: "The kimchi premium: a market that overheats internally while remaining cut off from global liquidity.",
      },
    ],
  },

  vision: {
    num: "03",
    kicker: "Vision",
    title: "Korea as the G2 Crypto Hub",
    lead: "Beyond physical territory: a trusted regulatory platform that connects global capital and projects to Seoul.",
    compare: [
      {
        tag: "G1",
        name: "United States",
        focus: "Trading & Custody",
        body: "A hub centered on trading and custody, anchored in dollar primacy.",
      },
      {
        tag: "G2",
        name: "Korea",
        focus: "Issuance & Innovation",
        body: "A hub for issuance and innovation, built on dynamic technology and adaptive regulation.",
      },
    ],
    note: "The core strategy is differentiation, not imitation.",
    pillars: [
      {
        id: "issuance",
        title: "Issuance Hub",
        sub: "Where builders begin",
        body: "Make Korea where the world's crypto builders begin — crypto special zones, legal personality for protocols, and tokenization of all assets.",
      },
      {
        id: "liquidity",
        title: "Liquidity & Transformation",
        sub: "Claiming the future of finance",
        body: "A won stablecoin and the crypto transformation of financial institutions and corporates.",
      },
      {
        id: "global",
        title: "Global Connection",
        sub: "Seoul as the meeting point",
        body: "A jurisdiction-neutral regulatory platform connecting the world's capital and innovative projects to Seoul.",
      },
    ],
  },

  agenda: {
    num: "04",
    kicker: "Policy Agenda",
    title: "What we intend to change",
    lead: "Under three strategic pillars, SCI designs and drives concrete legislative and administrative agendas.",
    groups: [
      { id: "all", label: "All", sub: "All" },
      { id: "issuance", label: "Issuance Hub", sub: "Issuance" },
      {
        id: "liquidity",
        label: "Liquidity & Transformation",
        sub: "Liquidity",
      },
      { id: "global", label: "Global Connection", sub: "Global" },
    ],
    items: [
      {
        group: "issuance",
        title: "Industry promotion and crypto special zones",
        body: "A Korean crypto valley built on negative-list regulation and tax incentives.",
      },
      {
        group: "issuance",
        title: "Legal personality for protocols",
        body: "Research on a protocol LLC framework allowing DAOs and network organizations to contract and raise capital lawfully.",
      },
      {
        group: "issuance",
        title: "Tokenization of all assets (RWA)",
        body: "Legal and regulatory groundwork for on-chain issuance and trading of K-content, real estate, IP, currency, equities and more.",
      },
      {
        group: "liquidity",
        title: "A won stablecoin (Digital KRW)",
        body: "A Digital KRW fully backed by bank deposits, laying the groundwork for internationalization of the won and for DeFi sovereignty.",
      },
      {
        group: "liquidity",
        title: "DAPB — Digital Asset Prime Brokerage",
        body: "Allowing securities firms and banks to act as prime brokers, offering custody, lending and execution to institutions in one place.",
      },
      {
        group: "liquidity",
        title: "Bringing market making into the open",
        body: "A licensing regime for legitimate liquidity providers, clearly distinguished from market manipulation.",
      },
      {
        group: "liquidity",
        title: "Spot ETFs and indices",
        body: "Index products and ETFs extending beyond bitcoin to a wider range of innovative assets.",
      },
      {
        group: "liquidity",
        title: "Crypto transformation of financial institutions",
        body: "A regulatory foundation for Korean financial institutions to enter crypto markets and expand into global crypto finance.",
      },
      {
        group: "liquidity",
        title: "Crypto transformation of corporates",
        body: "A practical roadmap for Korean companies to execute their own crypto transformation.",
      },
      {
        group: "global",
        title: "A jurisdiction-neutral crypto platform",
        body: "A legal framework that channels global liquidity into Korea through domestic depth, accommodative rules and special zones.",
      },
      {
        group: "global",
        title: "Global firms entering Korea",
        body: "A clear regulatory environment that draws global crypto firms and services into the Korean market.",
      },
      {
        group: "global",
        title: "Alignment with international standards",
        body: "Continuous review of alignment with international standards through former regulators and global networks.",
      },
    ],
    spotlight: {
      tag: "Spotlight",
      title: "Omnibus Custody Accounts",
      sub: "ICSA — a technical key to unlocking a closed won",
      rows: [
        {
          label: "Problem",
          body: "Domestic firms and foreign investors face real difficulty opening local accounts and repatriating investment proceeds — a structural barrier to global capital inflows.",
        },
        {
          label: "Solution",
          body: "Allow indirect foreign access through omnibus accounts held in the name of a global custodian.",
        },
        {
          label: "Effect",
          body: "Global crypto capital can tap Korean market liquidity while remaining ring-fenced from the domestic real economy, drawing international funds into Korea.",
        },
      ],
    },
  },

  work: {
    num: "05",
    kicker: "How We Work",
    title: "A hybrid action tank: theory, practice and policy in one place",
    lead: "SCI is not simply a research institute. It is a coalition built to execute.",
    valuesLabel: "Core Values",
    values: [
      {
        title: "Practicality",
        sub: "실천성",
        body: "A coalition that goes beyond research to create change.",
      },
      {
        title: "Expertise",
        sub: "전문성",
        body: "A hybrid body of experts from academia, the legal profession, industry and former regulators abroad.",
      },
      {
        title: "Pioneering",
        sub: "선구자 정신",
        body: "Opening a new path — regulation without borders — instead of prohibition and control.",
      },
    ],
    councilsLabel: "Three Councils",
    councils: [
      {
        name: "Research Council",
        scope: "Academia · Legal profession",
        tasks: ["Rigorous legal analysis", "Drafting of legislative proposals"],
      },
      {
        name: "Industry Council",
        scope: "Industry",
        tasks: [
          "Domestic and global exchanges, financial institutions, IT and Web3 companies",
          "Identifying obstacles on the ground and running proof-of-concept projects",
        ],
      },
      {
        name: "Global Advisory Council",
        scope: "International",
        tasks: [
          "Former senior regulators, global project foundations, overseas VCs, industry associations and think tanks",
          "Reviewing alignment with international standards and connecting Korea to global networks",
        ],
      },
    ],
    frameworkLabel: "Framework",
    frameworkLead:
      "Within Korea's distinctive regulatory environment, SCI is building a practical framework for optimal legislative and administrative reform.",
    framework: [
      {
        title:
          "Creating the conditions for better crypto and financial regulation",
        items: [
          "Continuous monitoring of, and feedback on, executive-branch crypto and financial policy",
          "Proposing crypto and financial policy models aligned with Korea's economic growth",
          "Establishing regular channels among government, the National Assembly, industry and academia",
        ],
      },
      {
        title: "Cross-border crypto regulation grounded in Korean jurisdiction",
        items: [
          "Research on the industrial effects of cross-border crypto regulation",
          "Research on crypto special zone models and crypto investment market structure",
          "A long-term roadmap for administrative and legislative reform",
        ],
      },
    ],
  },

  roadmap: {
    num: "06",
    kicker: "Roadmap",
    title: "A three-phase strategy to make the vision real",
    lead: "Institutions are built on schedules, not declarations.",
    phases: [
      {
        label: "Phase 1",
        name: "Laying the foundation",
        period: "~18 months",
        items: [
          "Founding of SCI and public release of the Crypto Hub Vision Paper 1.0",
          "Legislative push for digital asset hub and special zone laws",
          "Opening channels of communication with government",
        ],
      },
      {
        label: "Phase 2",
        name: "Institutional breakthrough",
        period: "1–3 years",
        items: [
          "Launch of an ICSA (omnibus crypto account) regulatory sandbox pilot — global custodians with Korean banks",
          "Hosting the Seoul Global Digital Asset Summit",
        ],
      },
      {
        label: "Phase 3",
        name: "Completing the hub",
        period: "3–5 years",
        items: [
          "Direct access for foreign institutional investors — full implementation of ICSA",
          "Becoming Asia's leading market for new asset issuance",
        ],
      },
    ],
  },

  people: {
    num: "07",
    kicker: "People",
    title: "SCI Research Fellows",
    lead: "Experts from academia, law, finance, industry and media, brought together as a single coalition built to execute.",
    note: "Listed in Korean alphabetical order",
    members: [
      {
        slug: "kang-hyoung-goo",
        name: "Hyoung-Goo Kang",
        role: "Professor, Hanyang University School of Business",
        bio: "He previously worked on the quantitative strategy team at Lehman Brothers' Asia headquarters and at Accenture, and is an entrepreneur who founded and exited Handa Partners, a machine-learning-based fintech company. A professor in Hanyang University's Department of Computational Finance, he has served as an advisory member to Korea's financial supervisory authorities (FSS/FSC), as an advisor to the Democratic Party's Digital Asset Task Force, and as president of the Korean Financial Management Association (2024).",
      },
      {
        slug: "kim-joon-hyun",
        name: "Joon-Hyun Kim",
        role: "CEO, AIBIX Lab",
        bio: "He has served as Executive Vice President for Communications at JTBC, Senior Vice President of Communications at Hanssem, and as a reporter at JoongAng Ilbo and JTBC. While at JTBC he ran a crypto project. He is currently president of the full-service PR agency PRLearn, with a particular interest in identifying crypto projects and companies, and CEO of AIBIX Lab, which operates the AIBIX Score, an index of brands' AI competitiveness.",
      },
      {
        slug: "park-moon-koo",
        name: "Moon-Koo Park",
        role: "Deputy CEO, Caspian Group",
        bio: "After studying international economics and completing graduate work in business, he began his career as a trade specialist, advising on strengthening the global competitiveness of Korean industry. He has since focused on creating new sources of growth by applying behavioral science to two forces reshaping industry: the geoeconomically driven restructuring of global value chains, and the shift toward AI-led digital innovation. His recent work includes designing development roadmaps for resource-rich and manufacturing-underdeveloped economies, and industrial ecosystem design aimed at revitalizing regional economies.",
      },
      {
        slug: "park-jong-baek",
        name: "Jong-Baek Park",
        role: "Partner, Bae, Kim & Lee LLC",
        bio: "Since 2016 he has advised on blockchain projects, digital assets, security tokens, DeFi and DAOs, and has presented and moderated at dozens of blockchain seminars and conferences in Korea and abroad. He has served on the Financial Services Commission's public–private joint task force and the National Assembly's legislative drafting task force, and has carried out legislative research commissioned by the Ministry of Science and ICT. He also advises on open-source software compliance and is a member of the Free Software Foundation Europe.",
      },
      {
        slug: "baek-kwang-won",
        name: "Kwang-Won Baek",
        role: "CEO, KW.Strategy",
        bio: "He began as an individual crypto trader in 2016 and founded KW.Strategy, through which he trades digital assets. Investing his own capital, he makes direct investments in crypto and in startups across a number of countries, and acts as an LP in venture capital funds. He also founded and operates Formulalabs in Korea.",
      },
      {
        slug: "oh-hyunok",
        name: "Hyunok Oh",
        role: "Professor, College of Engineering, Hanyang University",
        bio: "Founder of the startup zkrypto, working on blockchain infrastructure, privacy-preserving technologies and the applied services built on them. He developed a blockchain-based zero-knowledge-proof electronic voting system and operates the online voting service used by Korea's National Election Commission. His research interests include blockchain-based financial services and privacy-preserving blockchain services, and he serves as chair of Korea's zero-knowledge proof research society.",
      },
      {
        slug: "yoo-minho",
        name: "Minho Yoo",
        role: "Chief Strategy Officer, IoTrust",
        bio: "After working as an embedded security developer, he co-founded IoTrust in 2017. He leads strategy for D'CENT, a wallet for individuals, and WEPIN, a wallet for enterprises, and has spent a decade focused on blockchain wallets and nothing else. He takes real pleasure in understanding technology, and runs Blpas, a study group devoted to digging into blockchain, in order to learn and share with others.",
      },
      {
        slug: "lee-seok-jun",
        name: "Seok-Jun Lee",
        role: "Judge",
        bio: "A specialist in financial law and virtual asset law, he has worked on financial and virtual asset rulings at the Supreme Court of Korea. He has lectured repeatedly on virtual asset rulings and related legal questions at the Judicial Research and Training Institute, the Seoul Southern District Court and other judicial institutions. After serving as a judicial research officer in the commercial division of the Supreme Court, he is currently a Presiding Judge at the Suncheon Branch of the Gwangju District Court.",
      },
      {
        slug: "lee-jongsub",
        name: "Jongsub Lee",
        role: "Professor, Seoul National University Business School",
        bio: "He has published extensively in the world's leading finance journals, including the Journal of Finance, and is recognized internationally as an authority on digital finance, banking and fintech. He has served on the Financial Services Commission's public–private virtual asset task force and as a fiscal policy advisor to the Ministry of Economy and Finance. He is the Korea representative of the Global Blockchain Business Council (GBBC) and a core member of the Crypto and Blockchain Economics Research (CBER) Forum.",
      },
      {
        slug: "lee-junhaeng",
        name: "Junhaeng Lee",
        role: "CEO, Brightmount",
        bio: "As founder and CEO of Streami, one of Korea's first-generation blockchain startups (2015), he grew GOPAX into one of the country's five largest won-market exchanges. Following customer losses arising from the collapse of FTX, he committed his personal assets and sold the business to Binance in 2023 on the condition that customers be made whole. He has served as vice chairman and head of the blockchain division of the Korea Fintech Industry Association, and led the founding of the Global Blockchain Policy Council (GBPC), SCI's predecessor.",
      },
      {
        slug: "jang-joong-hyuk",
        name: "Joong-Hyuk Jang",
        role: "Director, Blockchain Economy Research Institute",
        bio: "A consultant in IT and telecommunications, he has built his career as a specialist in the convergence of IT, telecom and media. Together with blockchain and finance experts in Korea and abroad, he co-founded Atomrigs Lab, Korea's first company specializing in multi-party secure computation for blockchain, where he served as chief crypto economist. He now runs the Blockchain Economy Research Institute, Korea's only private research institute dedicated to the crypto economy.",
      },
      {
        slug: "jin-changho",
        name: "Changho Jin",
        role: "Head of Corporate Strategy and Deputy CEO, EnCore",
        bio: "For 19 years he worked at global consulting firms (Accenture, EY, BCG) as a digital and technology consultant and partner. Over the past six years he led blockchain consulting engagements for more than 50 companies and public institutions, including CBDC advisory work for the Bank of Korea and blockchain and Web3 new-business strategy projects for a number of major Korean corporates. He currently leads business development for blockchain, AI and data-driven solutions at SK Group.",
      },
      {
        slug: "choi-ki-eok",
        name: "Ki-Eok Choi",
        role: "President, Hans Economy",
        bio: "He has served as president and editor-in-chief of Yonhap Infomax, and has published more than ten books on financial markets, covering foreign exchange and fixed income among other subjects. While at Yonhap Infomax he signed an MOU with Korea University to establish a crypto ratings company, set up a blockchain division, pursued external partnerships and organized conferences. He also acquired and launched a cable television channel specializing in crypto and blockchain.",
      },
      {
        slug: "philip-gant",
        name: "Philip Gant",
        role: "Research Director, Regulatory Ecosystems Group",
        bio: "He is also an Associate of the Harvard University Asia Center. He previously served as Executive Director, APAC Policy and Partnerships at the Global Blockchain Business Council (GBBC), and as a Postdoctoral Associate at Yale University. Trained as a legal historian of East Asia, he did his undergraduate work at Yale and his Ph.D. at Harvard, living in Korea, China and Japan along the way.",
      },
      {
        slug: "hong-junki",
        name: "Junki Hong",
        role: "CEO, VOGO Fund Labs",
        bio: "He worked in New York and Hong Kong as a capital markets and derivatives specialist, and served as country head of Korea for UBS Group and as head of Korea and Asia for Cumberland DRW, the global digital asset trading firm. He has advised on policy for the Office of the President and the Ministry of Economy and Finance, and now leads VOGO Fund Labs, part of VOGO Asset Management, which researches and develops asset management techniques using AI and blockchain. He holds bachelor's and master's degrees in engineering and an MBA from MIT.",
      },
    ],
  },

  insights: {
    num: "08",
    kicker: "Insights",
    title: "Research and publications",
    lead: "SCI's research and policy proposals are published as open documents.",
    comingSoon: "Coming soon",
    items: [
      {
        tag: "White Paper",
        title: "Crypto Hub Vision Paper 1.0",
        body: "SCI's first public document, setting out the strategy and legislative agenda for Korea's emergence as a G2 crypto hub.",
        status: "Coming soon",
      },
      {
        tag: "Policy Brief",
        title: "Introducing Omnibus Custody Accounts (ICSA)",
        body: "On the structure of indirect foreign access through custodian-held omnibus accounts, and the path to implementation.",
        status: "In preparation",
      },
      {
        tag: "Research",
        title: "Legal personality for protocols (Protocol LLC)",
        body: "Examining models of legal personality that allow DAOs and network organizations to contract and raise capital lawfully.",
        status: "In preparation",
      },
    ],
  },

  contact: {
    num: "09",
    kicker: "Join SCI",
    title: "We are looking for people to design this with us",
    statement: "A crypto G2 Korea, embracing the world through crypto",
    closing: [
      "We will work to ensure that prohibition, control and opaque shadow regulation no longer stand in the way of innovation.",
      "Carrying a new banner — regulation without borders — SCI will clear the path for the world's innovators and capital to gather in Seoul.",
      "Until the day Korea beats at the heart of the global digital economy, SCI will lead from the front and give it everything we have.",
    ],
    channels: [
      {
        title: "Policy & research",
        body: "Proposals for joint research and policy dialogue with government, the National Assembly and academia.",
      },
      {
        title: "Industry participation",
        body: "Industry Council membership and proof-of-concept enquiries from exchanges, financial institutions and IT/Web3 companies.",
      },
      {
        title: "Media",
        body: "Interviews, contributed articles and requests for materials.",
      },
    ],
    contactNote:
      "Contact channels are being set up. Details will be published here as soon as they are available.",
  },

  footer: {
    tagline:
      "Intellect for Digital Sovereignty, Action for the Future of Finance",
    addressLabel: "Address",
    address: [
      "3rd Floor, Seoul Building, 100 Seosomun-ro",
      "Jung-gu, Seoul, Korea",
    ],
    contactLabel: "Contact",
    contactPending: "To be announced",
    copyright: "Seoul Crypto Institute",
  },
};
