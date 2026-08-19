export type Locale = "ko" | "en";

export type Cta = { label: string; href: string };

export type NavItem = { id: string; label: string };

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
    contactNote: string;
  };
  footer: {
    tagline: string;
    addressLabel: string;
    address: string[];
    contactLabel: string;
    contactPending: string;
    copyright: string;
  };
};
