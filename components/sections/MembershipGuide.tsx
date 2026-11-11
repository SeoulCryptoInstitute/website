import { Section } from "../ui/Section";
import { Cta } from "../ui/Cta";
import { ContactEmail } from "../ui/ContactEmail";
import { CONTACT_EMAIL } from "@/lib/site";
import type { SiteContent } from "@/content/types";

/**
 * 표 하나. 데스크톱에서는 표로, 좁은 화면에서는 행마다 카드처럼 세로로 쌓인다.
 * 첫 열은 행 이름(굵게), 마지막 열은 금액처럼 강조할 값이다.
 */
function GuideTable({
  head,
  rows,
  cols,
}: {
  head: [string, string, string];
  rows: [string, string, string][];
  cols: string;
}) {
  return (
    <table className="mt-8 w-full border-collapse text-left text-[15px]">
      <thead className="max-md:hidden">
        <tr className={`border-navy grid border-b-2 ${cols}`}>
          {head.map((h) => (
            <th
              key={h}
              scope="col"
              className="text-navy px-4 py-3 text-[13px] font-bold first:pl-0"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-md:border-navy max-md:block max-md:border-t-2">
        {rows.map(([name, middle, value]) => (
          <tr
            key={name}
            className={`border-line border-b max-md:block max-md:py-5 md:grid ${cols}`}
          >
            <th
              scope="row"
              className="text-navy px-4 py-4 font-bold first:pl-0 max-md:block max-md:p-0"
            >
              {name}
            </th>
            <td className="text-slate px-4 py-4 leading-[1.7] text-pretty max-md:block max-md:p-0 max-md:pt-2">
              {middle}
            </td>
            <td className="text-ink px-4 py-4 font-semibold max-md:block max-md:p-0 max-md:pt-2">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BlockTitle({ id, title, lead }: { id: string; title: string; lead: string }) {
  return (
    <header id={id} className="max-w-3xl scroll-mt-24">
      <h2 className="text-navy text-3xl leading-[1.18] font-bold tracking-[-0.025em] sm:text-4xl">
        {title}
      </h2>
      <p className="text-slate mt-5 text-base leading-[1.75] text-pretty sm:text-lg">
        {lead}
      </p>
    </header>
  );
}

const SUBTITLE = "text-navy text-lg font-bold tracking-[-0.02em]";

/** 사원가입·후원 페이지 본문 (spec §4.2 "핵심 안내" 안). */
export function MembershipGuide({ content }: { content: SiteContent }) {
  const { join, support, jump, inquiryLabel } = content.membership;

  return (
    <>
      <Section tone="light">
        <nav className="flex flex-wrap gap-2" aria-label={content.membership.title}>
          {[
            ["#join", jump.join],
            ["#support", jump.support],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="border-line text-navy hover:border-blue hover:text-blue rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-14">
          <BlockTitle id="join" title={join.title} lead={join.lead} />

          <GuideTable
            head={join.head}
            rows={join.types.map((t) => [t.name, t.target, t.fee])}
            cols="md:grid-cols-[11rem_1fr_9rem]"
          />
          <p className="text-slate mt-4 text-[13px]">※ {join.feeNote}</p>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className={SUBTITLE}>{join.benefitsTitle}</h3>
              <ul className="mt-5 grid gap-3">
                {join.benefits.map((b) => (
                  <li key={b} className="text-ink flex gap-3 text-[15px] leading-[1.7]">
                    <span className="bg-blue mt-[0.6rem] size-1.5 shrink-0 rounded-full" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={SUBTITLE}>{join.stepsTitle}</h3>
              <ol className="mt-5 grid gap-3 sm:grid-cols-3">
                {join.steps.map((step, i) => (
                  <li key={step.title} className="bg-paper rounded-lg p-5">
                    <p className="text-blue text-xs font-bold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-navy mt-2 font-bold">{step.title}</p>
                    <p className="text-slate mt-2 text-[14px] leading-[1.65] text-pretty">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {join.apply ? (
              <Cta href={join.apply.url} variant="primary">
                {join.apply.label}
              </Cta>
            ) : null}
            <Cta href={join.pdf} variant="ghostLight">
              {join.pdfLabel}
            </Cta>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <BlockTitle id="support" title={support.title} lead={support.lead} />

        <h3 className={`${SUBTITLE} mt-14`}>{support.principlesTitle}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {support.principles.map((p) => (
            <li key={p.title} className="border-line rounded-lg border bg-white p-5">
              <p className="text-navy font-bold">{p.title}</p>
              <p className="text-slate mt-2 text-[14px] leading-[1.65] text-pretty">
                {p.body}
              </p>
            </li>
          ))}
        </ul>

        <GuideTable
          head={support.head}
          rows={support.tiers.map((t) => [t.name, t.highlight, t.amount])}
          cols="md:grid-cols-[13rem_1fr_10rem]"
        />
        <p className="text-slate mt-4 text-[14px] leading-[1.7] text-pretty">
          {support.commonNote}
        </p>
        <p className="text-slate mt-1 text-[13px]">※ {support.usdNote}</p>

        <div className="mt-12">
          <Cta href={support.pdf} variant="ghostLight">
            {support.pdfLabel}
          </Cta>
        </div>
      </Section>

      <Section tone="light" className="py-16! sm:py-20!">
        <p className="text-blue text-xs font-semibold tracking-[0.18em] uppercase">
          {inquiryLabel}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-display text-navy hover:text-blue mt-3 inline-block text-[clamp(1.4rem,3.6vw,2.25rem)] font-extrabold tracking-[-0.03em] [overflow-wrap:anywhere] transition-colors"
        >
          <ContactEmail />
        </a>
      </Section>
    </>
  );
}
