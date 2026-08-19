import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

export function WhyNow({ content }: { content: SiteContent }) {
  const s = content.whyNow;

  return (
    <Section id="why-now" tone="light">
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
      />

      <ol className="border-line mt-16 grid gap-px border-t md:grid-cols-3">
        {s.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90}>
            <div className="border-line h-full border-b pt-8 pb-10 md:border-r md:pr-8 md:last:border-r-0">
              <span className="text-blue text-xs font-semibold tracking-[0.18em] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-navy mt-4 text-xl font-bold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="text-slate mt-4 text-[15px] leading-[1.75] text-pretty">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
