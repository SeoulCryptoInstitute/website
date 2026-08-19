import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Symbol } from "../brand/Symbol";
import type { SiteContent } from "@/content/types";

export function Vision({ content }: { content: SiteContent }) {
  const s = content.vision;

  return (
    <Section id="vision" tone="navy" grid>
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
        tone="dark"
      />

      {/* G1 / G2 대비 */}
      <div className="mt-16 grid gap-px overflow-hidden rounded-lg bg-white/15 md:grid-cols-2">
        {s.compare.map((c, i) => (
          <Reveal key={c.tag} delay={i * 100}>
            <div
              className={`h-full p-8 sm:p-10 ${
                i === 0 ? "bg-navy-deep" : "bg-blue"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl leading-none font-extrabold tracking-[-0.03em] text-white/35">
                  {c.tag}
                </span>
                <span className="text-lg font-bold text-white">{c.name}</span>
              </div>
              <p
                className={`mt-6 text-2xl font-bold tracking-[-0.02em] ${
                  i === 0 ? "text-blue-soft" : "text-white"
                }`}
              >
                {c.focus}
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-pretty text-white/75">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 flex items-center gap-3 text-sm text-white/50">
          <Symbol
            compact
            className="h-3.5 w-auto"
            primary="#6D97F5"
            secondary="#8FB0F8"
          />
          {s.note}
        </p>
      </Reveal>

      {/* 3대 전략축 */}
      <ul className="mt-20 grid gap-8 md:grid-cols-3 md:gap-6">
        {s.pillars.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 90}>
            <div className="h-full border-t border-white/20 pt-7">
              <Symbol
                compact
                className="h-5 w-auto"
                primary="#326BEE"
                secondary="#8FB0F8"
              />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-white">
                {p.title}
              </h3>
              <p className="text-blue-soft mt-1 text-[13px] font-semibold tracking-[0.06em] uppercase">
                {p.sub}
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-pretty text-white/70">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
