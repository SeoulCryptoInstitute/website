import { Fragment } from "react";
import { Section } from "../ui/Section";
import { OUTLETS, PRESS_EVENTS, type PressEvent } from "@/content/press";
import type { Locale, SiteContent } from "@/content/types";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (locale === "ko") return `${y}. ${m}. ${d}.`;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** 원 기사와 재게재를 모두 센 매체 수. */
function outletCount(ev: PressEvent): number {
  return new Set(
    ev.items.flatMap((i) => [i.outlet, ...(i.reprints ?? []).map((r) => r.outlet)]),
  ).size;
}

/** 언론보도·활동 페이지 본문 — 행사 하나가 묶음 하나 (spec §4.4). */
export function PressEvents({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const m = content.media;
  const outlet = (id: string) => OUTLETS[id][locale];

  return (
    <Section tone="light">
      <div className="grid gap-16">
        {PRESS_EVENTS.map((ev) => {
          const articles = ev.items.filter((i) => i.kind === "article");
          const photos = ev.items.filter((i) => i.kind === "photo");

          return (
            <article
              key={ev.id}
              className="border-line overflow-hidden rounded-lg border"
            >
              <header className="bg-paper border-line border-b px-6 py-7 sm:px-8">
                <p className="text-blue text-xs font-bold tracking-[0.12em] tabular-nums">
                  <time dateTime={ev.date}>{formatDate(ev.date, locale)}</time>
                </p>
                <h2 className="text-navy mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-bold tracking-[-0.025em]">
                  {ev.title[locale]}
                  <span className="bg-navy rounded-full px-3 py-1 text-[12px] font-semibold tracking-normal text-white">
                    {m.coverageLabel.replace("{n}", String(outletCount(ev)))}
                  </span>
                </h2>
                <p className="text-slate mt-3 max-w-3xl text-[15px] leading-[1.7] text-pretty">
                  {ev.summary[locale]}
                </p>
              </header>

              <ul>
                {articles.map((a) => (
                  <li
                    key={a.url}
                    className="border-line grid gap-1 border-b px-6 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-8"
                  >
                    <span className="text-navy text-[14px] font-bold">
                      {outlet(a.outlet)}
                    </span>
                    <div>
                      <a
                        href={a.url}
                        {...EXTERNAL}
                        lang="ko"
                        className="text-ink hover:text-blue text-[15px] leading-[1.6] transition-colors"
                      >
                        {a.title}
                        <span className="text-slate" aria-hidden>
                          {" "}
                          ↗
                        </span>
                      </a>
                      {m.koreanTag ? (
                        <span className="border-line text-slate ml-2 rounded border px-1.5 py-px text-[11px] font-semibold whitespace-nowrap">
                          {m.koreanTag}
                        </span>
                      ) : null}
                      {a.reprints ? (
                        <p className="text-slate mt-1 text-[13px]">
                          {m.sameStoryLabel}:{" "}
                          {a.reprints.map((r, i) => (
                            <Fragment key={r.url}>
                              {i > 0 ? " · " : null}
                              <a
                                href={r.url}
                                {...EXTERNAL}
                                className="hover:text-blue underline decoration-current/30 underline-offset-2"
                              >
                                {outlet(r.outlet)}
                              </a>
                            </Fragment>
                          ))}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>

              {photos.length ? (
                <p className="text-slate px-6 py-5 text-[14px] leading-[1.8] sm:px-8">
                  <span className="text-navy font-bold">{m.photosLabel}</span>
                  {photos.map((p) => (
                    <Fragment key={p.url}>
                      {" · "}
                      <a
                        href={p.url}
                        {...EXTERNAL}
                        title={p.title}
                        className="hover:text-blue underline decoration-current/30 underline-offset-2"
                      >
                        {outlet(p.outlet)}
                      </a>
                    </Fragment>
                  ))}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
