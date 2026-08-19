"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { SiteContent } from "@/content/types";

export function Agenda({ content }: { content: SiteContent }) {
  const s = content.agenda;
  const [active, setActive] = useState("all");
  const items =
    active === "all" ? s.items : s.items.filter((i) => i.group === active);

  return (
    <Section id="agenda" tone="light">
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
      />

      {/* 이슈 필터 */}
      <div className="mt-12 flex flex-wrap gap-2">
        {s.groups.map((g) => {
          const on = g.id === active;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                on
                  ? "border-navy bg-navy text-white"
                  : "border-line text-slate hover:border-navy hover:text-navy"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      <ul className="border-line mt-10 grid gap-px border-t sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={Math.min(i, 5) * 60}>
            <article className="border-line hover:bg-paper h-full border-b py-8 pr-0 pl-0 transition-colors duration-300 sm:pr-8 sm:pl-8 sm:odd:pl-0 sm:even:border-l lg:pr-9 lg:pl-9 lg:odd:pl-9 lg:even:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:nth-child(3n+1)]:pl-0">
              <p className="text-blue text-[11px] font-semibold tracking-[0.14em] uppercase">
                {s.groups.find((g) => g.id === item.group)?.sub}
              </p>
              <h3 className="text-navy mt-3 text-[17px] leading-[1.4] font-bold tracking-[-0.02em] text-balance">
                {item.title}
              </h3>
              <p className="text-slate mt-3 text-[14.5px] leading-[1.7] text-pretty">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>

      {/* Spotlight — ICSA */}
      <Reveal>
        <div className="bg-navy relative mt-20 overflow-hidden rounded-lg p-9 text-white sm:p-12 lg:p-16">
          <div
            className="grid-texture absolute inset-0 text-white/50 opacity-25"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
            <div>
              <p className="text-blue-soft text-xs font-semibold tracking-[0.18em] uppercase">
                {s.spotlight.tag}
              </p>
              <h3 className="mt-5 text-2xl leading-[1.25] font-bold tracking-[-0.025em] text-balance sm:text-3xl">
                {s.spotlight.title}
              </h3>
              <p className="text-blue-soft mt-4 text-[15px] leading-[1.6] text-pretty">
                {s.spotlight.sub}
              </p>
            </div>

            <dl className="grid gap-px bg-white/15">
              {s.spotlight.rows.map((row) => (
                <div
                  key={row.label}
                  className="bg-navy grid gap-2 py-5 sm:grid-cols-[6rem_1fr] sm:gap-6"
                >
                  <dt className="text-blue text-[13px] font-bold tracking-[0.1em] uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] leading-[1.7] text-pretty text-white/80">
                    {row.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
