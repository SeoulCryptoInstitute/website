import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { asset } from "@/lib/site";
import type { SiteContent } from "@/content/types";

type Item = SiteContent["insights"]["items"][number];

/** 첫 카드는 navy로 강조한다. href가 있는 카드는 카드 전체가 파일 링크(새 창)다. */
function Card({ item, featured }: { item: Item; featured: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg p-8 ${
        featured ? "bg-navy text-white" : "border-line border bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`text-[11px] font-bold tracking-[0.14em] uppercase ${
            featured ? "text-blue-soft" : "text-blue"
          }`}
        >
          {item.tag}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
            featured ? "bg-white/15 text-white" : "bg-paper text-slate"
          } ${item.href ? "group-hover:bg-blue group-hover:text-white" : ""}`}
        >
          {item.status}
          {item.href ? <span aria-hidden> ↗</span> : null}
        </span>
      </div>

      <h3
        className={`mt-6 text-xl leading-[1.35] font-bold tracking-[-0.025em] text-balance ${
          featured ? "text-white" : "text-navy"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`mt-4 text-[15px] leading-[1.7] text-pretty ${
          featured ? "text-white/70" : "text-slate"
        }`}
      >
        {item.body}
      </p>
    </article>
  );
}

export function Insights({ content }: { content: SiteContent }) {
  const s = content.insights;

  return (
    <Section id="insights" tone="paper">
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {s.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90}>
            {item.href ? (
              <a
                href={asset(item.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <Card item={item} featured={i === 0} />
              </a>
            ) : (
              <Card item={item} featured={i === 0} />
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
