import type { PageKey } from "../lib/routes";

export type Locale = "ko" | "en";

export type Cta = { label: string; href: string };

/** 상단 메뉴 항목. hash가 있으면 그 페이지 안의 섹션으로 간다(예: home#people). */
export type NavItem = { page: PageKey; hash?: string; label: string };

export type Member = {
  slug: string;
  name: string;
  /** SCI 안의 직책(대표, 부대표, 사무총장). 이름 위에 작게 붙는다. */
  position?: string;
  /** 소속과 직함. bio 첫머리에 다시 쓰지 않는다. */
  role: string;
  bio: string;
};

export type AgendaGroup = { id: string; label: string; sub: string };

export type AgendaItem = {
  group: string;
  title: string;
  body: string;
};

/** 하위 페이지의 <title>과 description. */
export type PageMeta = { title: string; description: string };

export type ContactPage = {
  kicker: string;
  title: string;
  lead: string;
  emailLabel: string;
  topicsTitle: string;
  topics: {
    title: string;
    body: string;
    link?: { label: string; page: PageKey };
  }[];
};

/** 사원가입·후원 페이지. 문구 출처는 sci-docs 가입안내 v1.2, 후원안내 v1.6. */
export type Membership = {
  kicker: string;
  title: string;
  lead: string;
  jump: { join: string; support: string };
  join: {
    title: string;
    lead: string;
    head: [string, string, string];
    types: { name: string; target: string; fee: string }[];
    feeNote: string;
    benefitsTitle: string;
    benefits: string[];
    stepsTitle: string;
    steps: { title: string; body: string }[];
    /** 온라인 신청(구글 폼). 국문에만 있다. */
    apply: { label: string; url: string } | null;
    pdfLabel: string;
    pdf: string;
  };
  support: {
    title: string;
    lead: string;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    /** [유형, 주요 차이, 연간 후원액] — 금액은 사원 표처럼 오른쪽 열 */
    head: [string, string, string];
    tiers: { name: string; amount: string; highlight: string }[];
    commonNote: string;
    /** 미화 후원 안내. 환율 기준일은 아직 정해지지 않아 적지 않는다. */
    usdNote: string;
    pdfLabel: string;
    pdf: string;
  };
  inquiryLabel: string;
};

/** 언론보도·활동 페이지의 문구. 기사 데이터는 content/press.ts에 있다. */
export type MediaPage = {
  kicker: string;
  title: string;
  lead: string;
  /** "{n}개 매체 보도" — {n}에 매체 수가 들어간다. SiteContent는 클라이언트 컴포넌트로도 넘어가므로 함수 대신 문자열로 둔다. */
  coverageLabel: string;
  sameStoryLabel: string;
  photosLabel: string;
  /** 영문 페이지에서 한국어 기사 제목 옆에 붙는 표시. 국문은 null. */
  koreanTag: string | null;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    localeLabel: string;
    altLocaleLabel: string;
  };
  nav: {
    items: NavItem[];
    cta: string;
    menu: string;
    close: string;
  };
  announce: { text: string; cta: string; href: string } | null;
  hero: {
    eyebrow: string;
    titleLines: string[];
    definition: string;
    lead: string;
    primary: Cta;
    secondary: Cta;
  };
  whyNow: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  korea: {
    num: string;
    kicker: string;
    title: string;
    potentialLabel: string;
    stats: { value: string; unit: string; label: string }[];
    riskLabel: string;
    riskTitle: string;
    risks: { title: string; body: string }[];
  };
  vision: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    compare: { tag: string; name: string; focus: string; body: string }[];
    note: string;
    pillars: { id: string; title: string; sub: string; body: string }[];
  };
  agenda: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    groups: AgendaGroup[];
    items: AgendaItem[];
    spotlight: {
      tag: string;
      title: string;
      sub: string;
      rows: { label: string; body: string }[];
    };
  };
  work: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    valuesLabel: string;
    values: { title: string; sub: string; body: string }[];
    councilsLabel: string;
    councils: { name: string; scope: string; tasks: string[] }[];
    frameworkLabel: string;
    frameworkLead: string;
    framework: { title: string; items: string[] }[];
  };
  roadmap: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    phases: { label: string; name: string; period: string; items: string[] }[];
  };
  people: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    note: string;
    members: Member[];
    /** 연구위원 아래 따로 묶는 고문 소제목. */
    advisorsTitle: string;
    advisors: Member[];
  };
  insights: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    comingSoon: string;
    /** href가 있으면 카드 전체가 그 파일(새 창)로 연결된다. */
    items: {
      tag: string;
      title: string;
      body: string;
      status: string;
      href?: string;
    }[];
  };
  contact: {
    num: string;
    kicker: string;
    title: string;
    statement: string;
    closing: string[];
    channels: { title: string; body: string }[];
    /** 공개 이메일 앞에 붙는 말 (예: "문의") */
    inquiryLabel: string;
  };
  pages: Record<Exclude<PageKey, "home">, PageMeta>;
  contactPage: ContactPage;
  membership: Membership;
  media: MediaPage;
  footer: {
    tagline: string;
    addressLabel: string;
    address: string[];
    contactLabel: string;
    copyright: string;
  };
};
