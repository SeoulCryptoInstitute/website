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
      { page: "home", label: "About SCI" },
      { page: "home", hash: "people", label: "Fellows" },
      { page: "membership", label: "Join & Support" },
      { page: "media", label: "News & Activities" },
    ],
    cta: "CONTACT",
    menu: "Open menu",
    close: "Close menu",
  },

  // 공지줄. 다음 공지가 생기면 { text, cta, href }를 넣는다.
  announce: null,

  hero: {
    eyebrow: "Seoul Crypto Institute",
    titleLines: ["Korea's Leap", "to a Global", "Crypto Hub"],
    definition:
      "SCI is the intellectual and practical center of gravity for Korea's emergence as a leading jurisdiction in digital assets and the financial order to come.",
    lead: "We are launching not as another think tank, but as an action tank driving the crypto transformation of Korean finance.",
    primary: { label: "SCI Introduction", href: "/files/sci-introduction-en.pdf" },
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
        position: "Vice President",
        role: "Professor, Hanyang University School of Business",
        bio: "Previously with the quantitative strategy team of Lehman Brothers Asia and with Accenture. Founded and exited Handa Partners, a machine learning–based fintech company. Professor in the Department of Computational Finance and Financial Engineering at Hanyang University; has served as an advisory member to the Financial Supervisory Service, as an adviser to a National Assembly digital asset task force, and as president of the Korean Financial Management Association (2024).",
      },
      {
        slug: "kim-joon-hyun",
        name: "Joon-Hyun Kim",
        position: "Secretary General",
        role: "Chief Executive Officer, AIBIX Lab",
        bio: "Formerly executive vice president for communications at JTBC, executive director of communications at Hanssem, and a reporter with the JoongAng Ilbo and JTBC. Led a digital asset project while at JTBC. Currently president of a public relations agency and chief executive of AIBIX Lab, which operates AIBIX Score, an index of brand competitiveness in artificial intelligence.",
      },
      {
        slug: "park-moon-koo",
        name: "Moon-Koo Park",
        role: "Deputy President, Caspian Group",
        bio: "Studied international economics and business administration, and advised on strengthening the international competitiveness of Korean industry as a trade specialist. His work addresses the creation of new growth capacity by combining behavioral science with the geoeconomically driven reconfiguration of global industrial value chains and with AI-led digital innovation. Designs development roadmaps for resource-rich economies and for economies with underdeveloped manufacturing.",
      },
      {
        slug: "park-jong-baek",
        name: "Jong-Baek Park",
        position: "President",
        role: "Partner, Bae, Kim & Lee LLC",
        bio: "Has advised on distributed ledger projects, digital assets, security tokens, decentralized finance, and decentralized autonomous organizations since 2016. Has participated in the Financial Services Commission’s public–private task force, a National Assembly legislative drafting task force, and commissioned legislative research for the Ministry of Science and ICT. Member of Global Blockchain Convergence and of Free Software Foundation Europe.",
      },
      {
        slug: "baek-kwang-won",
        name: "Kwang-Won Baek",
        role: "CEO, KW.Strategy",
        bio: "Began as an individual crypto trader in 2016 and founded KW.Strategy, through which he trades digital assets. Makes direct investments of his own capital in crypto and in startups across a number of countries, and acts as an LP in venture capital funds. Also founded and operates Formulalabs in Korea.",
      },
      {
        slug: "ahn-soo-hyun",
        name: "Soo-Hyun Ahn",
        role: "Professor, Hankuk University of Foreign Studies Law School",
        bio: "Has served on the dispute mediation, sanctions review, supervisory advisory, and blockchain advisory committees of the Financial Supervisory Service; on the Financial Development Review Committee of the Financial Services Commission; and as a legal adviser to the Bank of Korea on central bank digital currency. Currently a non-executive director of the Digital Asset Protection Foundation, an ombudsman of the Financial Supervisory Service, and a member of the Financial Hub Promotion Committee of the Financial Services Commission, advising widely on financial consumer protection, digital finance, and financial policy and industry.",
      },
      {
        slug: "oh-hyunok",
        name: "Hyun-Ok Oh",
        role: "Professor, Hanyang University College of Engineering",
        bio: "Founder of Zkrypto, which develops distributed ledger and privacy-preserving technologies. Developed a distributed ledger–based electronic voting system using zero-knowledge proofs and operates the online voting service used by the National Election Commission. President of the Korean research society on zero-knowledge proofs.",
      },
      {
        slug: "yoo-minho",
        name: "Min-Ho Yoo",
        role: "Chief Strategy Officer, IoTrust",
        bio: "Began his career as an embedded security developer and co-founded IoTrust in 2017. Leads strategy for DCENT, a consumer wallet, and DCENT Enterprise, an enterprise wallet, having worked in digital asset wallets for a decade. Runs a study group on distributed ledger technology.",
      },
      {
        slug: "lee-seok-jun",
        name: "Seok-Jun Lee",
        role: "Presiding Judge, Suncheon Branch, Gwangju District Court",
        bio: "Specializes in financial law and the law of digital assets, and conducted research on judgments in these fields at the Supreme Court. Has lectured on legal questions concerning digital assets at the Judicial Research and Training Institute, the Seoul Southern District Court, and elsewhere. Formerly a judicial research officer in the commercial division of the Supreme Court.",
      },
      {
        slug: "lee-junhaeng",
        name: "Junhaeng Lee",
        role: "Chief Executive Officer, Brightmount",
        bio: "Founder of Streami, established in 2015 among the first generation of distributed ledger companies in Korea, which he built into GOPAX, one of the five principal won-denominated digital asset exchanges. Following the collapse of FTX, he committed personal assets to compensating affected customers and sold the business in 2023 on terms providing for their full repayment. Led the establishment of the Global Blockchain Policy Council, the predecessor of SCI.",
      },
      {
        slug: "lee-hyo-jin",
        name: "Hyo-Jin Lee",
        role: "Adjunct Professor, Korea University Graduate School of Information Security",
        bio: "Brings more than thirty years of public service, including at the Ministry of Information and Communication and as head of the Economic Coordination Office at the Office of the Prime Minister, together with broad expertise in digital asset regulation and in distributed ledger technology and industrial policy. At the Office of the Prime Minister, coordinated national policy on the economy and finance and on information and communications technology and artificial intelligence. In 2021, worked with the Financial Services Commission, the Ministry of Science and ICT, and other bodies to formulate the government-wide plan for the management of digital asset trading, and helped establish the regime through implementation of the reporting system for virtual asset service providers.",
      },
      {
        slug: "jang-joong-hyuk",
        name: "Joong-Hyuk Chang",
        position: "Vice President",
        role: "Director, Blockchain Economy Research Institute",
        bio: "Has worked as a consultant in the convergence of information technology, telecommunications, and media. Co-founded Atomrigs Lab, the first Korean company specializing in secure multi-party computation for distributed ledgers, where he served as chief crypto-economist. Founded and directs the only private research institute in Korea dedicated to crypto-economics.",
      },
      {
        slug: "jin-changho",
        name: "Chang-Ho Jin",
        role: "Deputy President and Head of Management Strategy, EnCore",
        bio: "Worked for nineteen years as a digital and technology consultant and partner at Accenture, EY, and BCG. Led distributed ledger consulting engagements for some fifty companies and institutions and served as project manager for the Bank of Korea’s central bank digital currency consulting engagement. Currently leads development of artificial intelligence, data, and distributed ledger solutions at SK Group.",
      },
      {
        slug: "choi-ki-eok",
        name: "Ki-Eok Choi",
        role: "President, Hans Economy",
        bio: "Formerly president and chief editor of Yonhap Infomax. Author of some ten books on foreign exchange, fixed income, and financial markets. While at Yonhap Infomax, pursued a memorandum of understanding with Korea University toward the establishment of a digital asset rating company, established a distributed ledger division, and organized conferences, and launched a cable television channel specializing in digital assets.",
      },
      {
        slug: "choi-chul",
        name: "Chul Choi",
        role: "Professor, Hankuk University of Foreign Studies Law School; Solicitor (England and Wales)",
        bio: "Specializes in intellectual property finance and has taken part in policy research and projects for the Presidential Council on Intellectual Property, the Ministry of Intellectual Property, the World Intellectual Property Organization (WIPO), KIPnet, IPFF, and other institutions in Korea and abroad. Has taught intellectual property law and international finance law at Hankuk University of Foreign Studies for twenty years; before joining the university, practiced international finance as a solicitor at the London head office of Allen & Overy.",
      },
      {
        slug: "philip-gant",
        name: "Philip Gant",
        role: "Research Director, Regulatory Ecosystems Group",
        bio: "Associate of the Asia Center at Harvard University. Previously head of APAC for the Global Blockchain Business Council and a postdoctoral fellow at Yale University. Trained as a legal historian of East Asia; holds a bachelor’s degree from Yale University and a doctorate from Harvard University.",
      },
      {
        slug: "hong-junki",
        name: "Jun-Ki Hong",
        position: "Vice President",
        role: "Chief Executive Officer, VOGO Fund Labs",
        bio: "Worked in capital markets and derivatives in New York and Hong Kong, and served as country head for Korea at UBS Group and as head of Korea and Asia for Cumberland DRW. Has advised on economic policy for the Office of the President and the Ministry of Economy and Finance. Currently leads VOGO Fund Labs, which researches asset management techniques using artificial intelligence and distributed ledger technology.",
      },
    ],
    advisorsTitle: "SCI Advisers",
    advisors: [
      {
        slug: "oh-se-hyun",
        name: "Se-Hyun Oh",
        role: "Visiting Professor, Seoul National University Graduate School of Engineering Practice",
        bio: "Formerly a senior vice president at KT and an executive vice president at SK Telecom. Has served on the deliberative committee of the Presidential Advisory Council on Science and Technology and as president of the Open Blockchain and DID Association. A regular member of the National Academy of Engineering of Korea, active in its technology management and policy division.",
      },
      {
        slug: "yesha-yadav",
        name: "Yesha Yadav",
        role: "Professor, Vanderbilt Law School",
        bio: "Specializes in financial market regulation, securities regulation, and corporate bankruptcy, with a focus on market structure and digital assets; her research on US Treasury market regulation won Vanderbilt University’s Chancellor Research Award. Has served on the Technology Advisory Committee of the Commodity Futures Trading Commission (CFTC), including as vice-chair of its Distributed Ledger Technology Subcommittee, and sits on the Board of Advisors of the Digital Dollar Project. At Vanderbilt, co-organized with the Blockchain Association the inaugural Digital Assets and Emerging Technology Policy Summit.",
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
        tag: "Introduction",
        title: "SCI Introduction",
        body: "SCI's official introduction: why it is needed now, what it researches and proposes, how it works and who is involved (v1.2).",
        status: "Download PDF",
        href: "/files/sci-introduction-en.pdf",
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
    inquiryLabel: "Contact",
  },

  pages: {
    membership: {
      title: "Join & Support — SCI · Seoul Crypto Institute",
      description:
        "How to join SCI as an individual or corporate member, or support its work: fees, benefits, the application process, supporter tiers and principles, with downloadable guides.",
    },
    media: {
      title: "News & Activities — SCI · Seoul Crypto Institute",
      description:
        "SCI's activities and press coverage, starting with the October 2026 launch seminar.",
    },
    contact: {
      title: "Contact — SCI · Seoul Crypto Institute",
      description:
        "Press, membership, sponsorship and research enquiries: contact@seoulcrypto.institute.",
    },
  },

  contactPage: {
    kicker: "Contact",
    title: "Contact SCI",
    lead: "We take every enquiry at a single address. Write to us and we will get back to you.",
    emailLabel: "Email",
    topicsTitle: "What to write to us about",
    topics: [
      {
        title: "Press & media",
        body: "Interviews, contributed articles and requests for materials.",
      },
      {
        title: "Membership & support",
        body: "Individual and corporate membership, and supporting SCI.",
        link: { label: "See how to join", page: "membership" },
      },
      {
        title: "Research, talks & other",
        body: "Joint research, policy collaboration, speaking requests and anything else.",
      },
    ],
  },

  membership: {
    kicker: "Join & Support",
    title: "Join & Support SCI",
    lead: "Take part in SCI's research and policy work, as a member or as a supporter.",
    jump: { join: "Membership", support: "Support" },
    join: {
      title: "Membership",
      lead: "SCI has Individual and Corporate Members. Both are full members with voting rights in the General Assembly.",
      head: ["Category", "Eligibility", "Annual fee"],
      types: [
        {
          name: "Individual Member",
          target:
            "Individuals who share SCI's purpose and wish to take part in and support it as members",
          fee: "USD 200",
        },
        {
          name: "Corporate Member",
          target:
            "Korean and foreign companies operating in the Korean market, in fields such as manufacturing, trade, finance, securities, content and culture, exchanges and blockchain technology, that face the constraints of current rules directly in their operations",
          fee: "USD 1,000",
        },
      ],
      feeNote: "SCI provides payment details once the application is approved.",
      benefitsTitle: "Member benefits",
      benefits: [
        "Priority access to SCI newsletters and research reports",
        "Priority admission to SCI seminars, conferences and workshops",
        "Attendance and a vote at the General Assembly, SCI's supreme deliberative body",
      ],
      stepsTitle: "Becoming a member",
      steps: [
        {
          title: "Application",
          body: "Fill in the application form in the guide, scan or photograph it, and email it to SCI.",
        },
        {
          title: "Review and approval",
          body: "SCI reviews the application and informs the applicant of its decision. The Board of Directors approves Corporate Members.",
        },
        {
          title: "Payment of fees",
          body: "Upon approval, SCI sends membership fee payment instructions.",
        },
      ],
      apply: null,
      pdfLabel: "Guide and application form (PDF)",
      pdf: "/files/sci-membership-guide-en.pdf",
    },
    support: {
      title: "Support",
      lead: "SCI welcomes contributions from those who share its purpose, to support its research, education, and policy, regulatory and legislative proposals. Any individual or organization may become a supporter; SCI membership is not required.",
      principlesTitle: "Principles",
      principles: [
        {
          title: "Unrestricted contributions",
          body: "Contributions may not be tied to any specific SCI activity.",
        },
        {
          title: "Commissioned research",
          body: "Funding tied to a specific research project is arranged separately as commissioned research, under the same principle of research independence.",
        },
        {
          title: "Research independence",
          body: "Supporters may propose research and education topics but take no part in determining research conclusions or SCI's policy recommendations.",
        },
        {
          title: "Contribution cap",
          body: "No single supporter may account for more than 30 percent of SCI's total contributions in any year, measured at year-end.",
        },
        {
          title: "Funding disclosure",
          body: "SCI discloses the composition of its funding and the scale of principal contributions in its annual report.",
        },
      ],
      head: ["Tier", "What sets it apart", "Annual contribution"],
      tiers: [
        {
          name: "Platinum Supporter",
          amount: "KRW 300 million",
          highlight:
            "Proposes research, education, seminar, and policy or legislative topics, and new Industry Councils; seats on 3 council steering committees",
        },
        {
          name: "Gold Supporter",
          amount: "KRW 100 million",
          highlight:
            "Proposes a research, education or seminar topic once a year; seats on 2 council steering committees",
        },
        {
          name: "Silver Supporter",
          amount: "KRW 30 million",
          highlight: "Takes part in the deliberations of 1 Industry Council",
        },
      ],
      commonNote:
        "All tiers receive priority admission to SCI programs and seminars, invitations to closed-door meetings, early access to research reports and regulatory updates, and briefings from the Industry Councils.",
      usdNote: "Contributions may also be made in the USD equivalent.",
      pdfLabel: "Sponsorship guide (PDF)",
      pdf: "/files/sci-sponsorship-guide-en.pdf",
    },
    inquiryLabel: "Membership and support enquiries",
  },

  media: {
    kicker: "News & Activities",
    title: "News & Activities",
    lead: "SCI's activities and the press coverage of each, grouped by event. The articles are in Korean.",
    coverageLabel: "Covered by {n} outlets",
    sameStoryLabel: "Also in",
    photosLabel: "Photo coverage",
    koreanTag: "Korean",
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
    copyright: "Seoul Crypto Institute",
  },
};
