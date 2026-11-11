import Link from "next/link";
import { Section } from "../ui/Section";
import { ContactEmail } from "../ui/ContactEmail";
import { CONTACT_EMAIL } from "@/lib/site";
import { pagePath } from "@/lib/routes";
import type { Locale, SiteContent } from "@/content/types";

/** CONTACT 페이지 본문 — 이메일 하나와 받는 문의 종류. */
export function ContactDetails({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const s = content.contactPage;

  return (
    <Section tone="light">
      <p className="text-blue text-xs font-semibold tracking-[0.18em] uppercase">
        {s.emailLabel}
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-display text-navy hover:text-blue mt-4 inline-block text-[clamp(1.5rem,4.6vw,3.25rem)] leading-[1.15] font-extrabold tracking-[-0.03em] [overflow-wrap:anywhere] transition-colors"
      >
        <ContactEmail />
      </a>

      <h2 className="text-navy mt-20 text-xl font-bold tracking-[-0.02em]">
        {s.topicsTitle}
      </h2>
      <ul className="border-line mt-6 grid border-t md:grid-cols-3">
        {s.topics.map((t) => (
          <li
            key={t.title}
            className="border-line border-b py-7 md:border-b-0 md:px-7 md:first:pl-0 md:[&+li]:border-l"
          >
            <h3 className="text-navy text-lg font-bold tracking-[-0.02em]">
              {t.title}
            </h3>
            <p className="text-slate mt-3 text-[15px] leading-[1.7] text-pretty">
              {t.body}
            </p>
            {t.link ? (
              <Link
                href={pagePath(locale, t.link.page)}
                className="text-blue mt-4 inline-block text-sm font-semibold underline decoration-blue/30 underline-offset-4 hover:decoration-blue"
              >
                {t.link.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
