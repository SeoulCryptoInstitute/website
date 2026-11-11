/**
 * 하위 페이지 맨 위 제목 띠.
 *
 * 헤더는 스크롤 전에 투명하고 글자가 흰색이라, 맨 위가 navy여야 메뉴가 읽힌다.
 * 메인 Hero와 같은 배경(navy + 그리드 텍스처)을 쓰되 높이만 낮다.
 */
export function PageHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-navy relative isolate overflow-hidden text-white">
      <div
        className="grid-texture absolute inset-0 text-white/40 opacity-30"
        aria-hidden
      />
      <div className="container-sci relative pt-36 pb-16 sm:pt-40 sm:pb-20">
        <p className="text-blue-soft text-xs font-semibold tracking-[0.24em] uppercase">
          {kicker}
        </p>
        <h1 className="mt-6 text-3xl leading-[1.15] font-bold tracking-[-0.025em] text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-pretty text-white/70 sm:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
