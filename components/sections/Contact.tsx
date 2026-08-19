import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Symbol } from "../brand/Symbol";
import type { SiteContent } from "@/content/types";

export function Contact({ content }: { content: SiteContent }) {
  const s = content.contact;

  return (
    <Section id="contact" tone="navy" grid>
      <Reveal>
        <div className="border-b border-white/15 pb-16">
          <Symbol
            compact
            className="h-9 w-auto"
            primary="#326BEE"
            secondary="#8FB0F8"
          />
          <p className="font-display mt-8 text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.2] font-extrabold tracking-[-0.03em] text-balance text-white">
            {s.statement}
          </p>
          <div className="mt-10 grid max-w-3xl gap-4">
            {s.closing.map((line) => (
              <p
                key={line}
                className="text-[15px] leading-[1.8] text-pretty text-white/70"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="pt-16">
        <SectionHeading
          num={s.num}
          kicker={s.kicker}
          title={s.title}
          tone="dark"
        />

        <ul className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
          {s.channels.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <div className="bg-navy h-full py-8 md:px-7 md:first:pl-0">
                <h3 className="text-lg font-bold tracking-[-0.02em] text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-pretty text-white/70">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="text-blue-soft mt-10 text-sm">{s.contactNote}</p>
        </Reveal>
      </div>
    </Section>
  );
}
