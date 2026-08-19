import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

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
            <article
              className={`flex h-full flex-col rounded-lg p-8 ${
                i === 0 ? "bg-navy text-white" : "border-line border bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`text-[11px] font-bold tracking-[0.14em] uppercase ${
                    i === 0 ? "text-blue-soft" : "text-blue"
                  }`}
                >
                  {item.tag}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    i === 0 ? "bg-white/15 text-white" : "bg-paper text-slate"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3
                className={`mt-6 text-xl leading-[1.35] font-bold tracking-[-0.025em] text-balance ${
                  i === 0 ? "text-white" : "text-navy"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-4 text-[15px] leading-[1.7] text-pretty ${
                  i === 0 ? "text-white/70" : "text-slate"
                }`}
              >
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
