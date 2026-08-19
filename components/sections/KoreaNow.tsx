import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

export function KoreaNow({ content }: { content: SiteContent }) {
  const s = content.korea;

  return (
    <Section id="korea" tone="paper">
      <SectionHeading num={s.num} kicker={s.kicker} title={s.title} />

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* Potential */}
        <div>
          <p className="text-navy border-navy/15 border-b pb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            {s.potentialLabel}
          </p>
          <dl className="mt-10 grid gap-10">
            {s.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="font-display text-navy flex shrink-0 items-baseline gap-1.5 text-[2.6rem] leading-none font-extrabold tracking-[-0.03em] sm:min-w-[9.5rem] sm:text-5xl">
                    {stat.value}
                    <span className="text-blue text-base font-bold tracking-normal">
                      {stat.unit}
                    </span>
                  </dt>
                  <dd className="text-slate text-[15px] leading-[1.7] text-pretty">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Risk */}
        <Reveal>
          <div className="bg-navy relative overflow-hidden rounded-lg p-9 text-white sm:p-11">
            <div
              className="grid-texture absolute inset-0 text-white/50 opacity-25"
              aria-hidden
            />
            <div className="relative">
              <p className="text-blue-soft border-b border-white/15 pb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                {s.riskLabel}
              </p>
              <p className="mt-8 text-xl leading-[1.5] font-bold tracking-[-0.02em] text-balance">
                {s.riskTitle}
              </p>
              <ul className="mt-8 grid gap-7">
                {s.risks.map((risk) => (
                  <li key={risk.title}>
                    <h3 className="text-blue-soft text-[15px] font-semibold">
                      {risk.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-pretty text-white/70">
                      {risk.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
