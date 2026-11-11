import type { PageKey } from "../lib/routes";

export type Locale = "ko" | "en";

export type Cta = { label: string; href: string };

/** 상단 메뉴 항목. hash가 있으면 그 페이지 안의 섹션으로 간다(예: home#people). */
export type NavItem = { page: PageKey; hash?: string; label: string };

export type Member = {
  slug: string;
  name: string;
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
  };
  insights: {
    num: string;
    kicker: string;
    title: string;
    lead: string;
    comingSoon: string;
    items: { tag: string; title: string; body: string; status: string }[];
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
  footer: {
    tagline: string;
    addressLabel: string;
    address: string[];
    contactLabel: string;
    copyright: string;
  };
};
