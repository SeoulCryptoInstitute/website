import { Reveal } from "./Reveal";

/**
 * 브랜드 가이드 목업의 `02 The A Team` 패턴 — 넘버 + 키커 + 룰 라인.
 */
export function SectionHeading({
  num,
  kicker,
  title,
  lead,
  tone = "light",
  align = "left",
}: {
  num: string;
  kicker: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "wide";
}) {
  const dark = tone === "dark";

  return (
    <header className={align === "wide" ? "" : "max-w-4xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-4 text-xs font-semibold tracking-[0.18em] uppercase ${
            dark ? "text-blue-soft" : "text-blue"
          }`}
        >
          <span className="tabular-nums">{num}</span>
          <span
            className={`h-px w-8 ${dark ? "bg-blue-soft/50" : "bg-blue/40"}`}
            aria-hidden
          />
          <span>{kicker}</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2
          className={`mt-6 text-3xl leading-[1.18] font-bold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={120}>
          <p
            className={`mt-5 max-w-2xl text-base leading-[1.75] text-pretty sm:text-lg ${
              dark ? "text-blue-soft" : "text-slate"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
