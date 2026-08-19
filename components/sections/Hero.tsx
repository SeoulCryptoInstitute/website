import { Symbol } from "../brand/Symbol";
import { Cta } from "../ui/Cta";
import type { SiteContent } from "@/content/types";

export function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;

  return (
    <section className="bg-navy relative isolate overflow-hidden text-white">
      {/* Modern Grid 텍스처 */}
      <div
        className="grid-texture absolute inset-0 text-white/40 opacity-30"
        aria-hidden
      />
      {/* The Vector Core — 화면 오른쪽에서 잘려나가는 대형 심볼 */}
      <div
        className="pointer-events-none absolute top-1/2 -right-[18%] w-[78%] -translate-y-1/2 opacity-[0.16] sm:-right-[10%] sm:w-[62%] lg:right-[-4%] lg:w-[52%]"
        aria-hidden
      >
        <Symbol primary="#326BEE" secondary="#8FB0F8" className="w-full" />
      </div>
      <div
        className="from-navy via-navy/70 absolute inset-0 bg-gradient-to-r to-transparent"
        aria-hidden
      />

      <div className="container-sci relative flex min-h-[100svh] flex-col justify-center pt-32 pb-20 sm:pt-36">
        <p className="text-blue-soft text-xs font-semibold tracking-[0.24em] uppercase">
          {hero.eyebrow}
        </p>

        <h1 className="font-display mt-8 text-[clamp(2.6rem,7.4vw,5.5rem)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="block">
              {i === hero.titleLines.length - 1 ? (
                <span className="text-blue-soft">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-[1.7] text-pretty text-white/85 sm:text-xl">
          {hero.definition}
        </p>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-pretty text-white/55">
          {hero.lead}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Cta href={hero.primary.href} variant="solid">
            {hero.primary.label}
          </Cta>
          <Cta href={hero.secondary.href} variant="ghostDark">
            {hero.secondary.label}
          </Cta>
        </div>
      </div>
    </section>
  );
}
