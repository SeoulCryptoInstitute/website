import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

export function Roadmap({ content }: { content: SiteContent }) {
  const s = content.roadmap;

  return (
    <Section id="roadmap" tone="navy" grid>
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
        tone="dark"
      />

      <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {s.phases.map((p, i) => (
          <Reveal as="li" key={p.label} delay={i * 110}>
            <div className="relative h-full">
              {/* 진행선 */}
              <div className="flex items-center gap-3" aria-hidden>
                <span className="bg-blue size-2.5 rounded-full" />
                <span className="h-px flex-1 bg-white/20" />
              </div>

              <p className="text-blue-soft mt-6 text-xs font-semibold tracking-[0.18em] uppercase">
                {p.label} · {p.period}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-white">
                {p.name}
              </h3>
              <ul className="mt-6 grid gap-4">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.7] text-pretty text-white/75"
                  >
                    <span
                      className="bg-blue mt-2.5 size-1 shrink-0 rounded-full"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
