import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

export function Work({ content }: { content: SiteContent }) {
  const s = content.work;

  return (
    <Section id="work" tone="paper">
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
      />

      {/* Core Values */}
      <div className="mt-16">
        <p className="text-slate text-xs font-semibold tracking-[0.18em] uppercase">
          {s.valuesLabel}
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {s.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 80}>
              <div className="border-line h-full rounded-lg border bg-white p-7">
                <h3 className="text-navy text-lg font-bold tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-blue mt-1 text-[13px] font-semibold tracking-[0.06em] uppercase">
                  {v.sub}
                </p>
                <p className="text-slate mt-4 text-[14.5px] leading-[1.7] text-pretty">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Councils */}
      <div className="mt-20">
        <p className="text-slate text-xs font-semibold tracking-[0.18em] uppercase">
          {s.councilsLabel}
        </p>
        <ul className="border-line mt-6 grid gap-px border-t md:grid-cols-3">
          {s.councils.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 80}>
              <div className="border-line h-full border-b pt-8 pb-9 md:border-r md:pr-8 md:last:border-r-0">
                <h3 className="text-navy text-xl font-bold tracking-[-0.02em]">
                  {c.name}
                </h3>
                <p className="text-blue mt-1.5 text-[13px] font-semibold">
                  {c.scope}
                </p>
                <ul className="mt-5 grid gap-3">
                  {c.tasks.map((t) => (
                    <li
                      key={t}
                      className="text-slate flex gap-3 text-[14.5px] leading-[1.7] text-pretty"
                    >
                      <span
                        className="bg-blue mt-2.5 size-1 shrink-0 rounded-full"
                        aria-hidden
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Framework */}
      <div className="mt-20">
        <p className="text-slate text-xs font-semibold tracking-[0.18em] uppercase">
          {s.frameworkLabel}
        </p>
        <p className="text-navy mt-5 max-w-3xl text-lg leading-[1.6] font-semibold tracking-[-0.02em] text-pretty">
          {s.frameworkLead}
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {s.framework.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="border-line h-full rounded-lg border bg-white p-8">
                <h3 className="text-navy text-[17px] leading-[1.45] font-bold tracking-[-0.02em] text-balance">
                  {f.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {f.items.map((t) => (
                    <li
                      key={t}
                      className="text-slate flex gap-3 text-[14.5px] leading-[1.7] text-pretty"
                    >
                      <span
                        className="bg-blue mt-2.5 size-1 shrink-0 rounded-full"
                        aria-hidden
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
