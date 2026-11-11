"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { asset } from "@/lib/site";
import type { Member, SiteContent } from "@/content/types";

/** 이름 앞에 SCI 직책을 작게 붙인다(v1.2 표기). 좁으면 직책이 이름 위로 넘어간다. */
function NameLine({ member, className }: { member: Member; className: string }) {
  return (
    <span className={`flex flex-wrap items-baseline gap-x-1.5 ${className}`}>
      {member.position ? (
        <span className="text-blue text-[12px] font-semibold tracking-normal">
          {member.position}
        </span>
      ) : null}
      <span>{member.name}</span>
    </span>
  );
}

function MemberGrid({
  members,
  onOpen,
  heading: Heading,
}: {
  members: Member[];
  onOpen: (m: Member) => void;
  heading: "h3" | "h4";
}) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {members.map((m, i) => (
        <Reveal as="li" key={m.slug} delay={Math.min(i, 9) * 45}>
          <button
            type="button"
            onClick={() => onOpen(m)}
            className="group w-full cursor-pointer text-left"
          >
            <div className="bg-paper relative aspect-4/5 overflow-hidden rounded-sm">
              <Image
                src={asset(`/people/${m.slug}.jpg`)}
                alt={m.name}
                fill
                sizes="(min-width:1280px) 18vw, (min-width:1024px) 22vw, (min-width:640px) 30vw, 44vw"
                className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                className="from-navy/45 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
            </div>
            <Heading className="mt-4">
              <NameLine
                member={m}
                className="text-navy group-hover:text-blue text-[16px] font-bold tracking-[-0.02em] transition-colors"
              />
            </Heading>
            <p className="text-slate mt-1 text-[13px] leading-[1.5] text-pretty">
              {m.role}
            </p>
          </button>
        </Reveal>
      ))}
    </ul>
  );
}

export function People({ content }: { content: SiteContent }) {
  const s = content.people;
  const [open, setOpen] = useState<Member | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section id="people" tone="light">
      <SectionHeading
        num={s.num}
        kicker={s.kicker}
        title={s.title}
        lead={s.lead}
      />

      <p className="text-slate mt-6 text-[13px]">{s.note}</p>

      <MemberGrid members={s.members} onOpen={setOpen} heading="h3" />

      <h3 className="text-navy border-line mt-20 border-t pt-10 text-lg font-bold tracking-[-0.02em]">
        {s.advisorsTitle}
      </h3>
      <MemberGrid members={s.advisors} onOpen={setOpen} heading="h4" />

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.name}
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          <button
            type="button"
            aria-label="close"
            onClick={() => setOpen(null)}
            className="bg-navy-ink/70 absolute inset-0 backdrop-blur-sm"
          />
          <div className="relative max-h-[86dvh] w-full max-w-3xl overflow-y-auto rounded-t-xl bg-white p-7 shadow-2xl sm:rounded-xl sm:p-10">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="close"
              className="text-slate hover:text-navy absolute top-5 right-5 transition-colors"
            >
              <svg viewBox="0 0 16 16" className="size-4 stroke-current">
                <path d="M3 3l10 10M13 3L3 13" strokeWidth="1.6" />
              </svg>
            </button>

            <div className="grid gap-7 sm:grid-cols-[10rem_1fr] sm:gap-9">
              <div className="bg-paper relative aspect-4/5 w-32 overflow-hidden rounded-sm sm:w-full">
                <Image
                  src={asset(`/people/${open.slug}.jpg`)}
                  alt={open.name}
                  fill
                  sizes="160px"
                  className="object-cover object-top grayscale"
                />
              </div>
              <div>
                <h3>
                  <NameLine
                    member={open}
                    className="text-navy text-2xl font-bold tracking-[-0.025em]"
                  />
                </h3>
                <p className="text-blue mt-1.5 text-[14px] font-semibold">
                  {open.role}
                </p>
                <p className="text-slate mt-6 text-[15px] leading-[1.8] text-pretty">
                  {open.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
