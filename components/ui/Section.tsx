import type { ReactNode } from "react";

const TONE = {
  light: "bg-white text-ink",
  paper: "bg-paper text-ink",
  navy: "bg-navy text-white",
  deep: "bg-navy-deep text-white",
} as const;

export function Section({
  id,
  tone = "light",
  children,
  className = "",
  grid = false,
}: {
  id?: string;
  tone?: keyof typeof TONE;
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden py-24 sm:py-28 lg:py-36 ${TONE[tone]} ${className}`}
    >
      {grid ? (
        <div
          className="grid-texture pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
        />
      ) : null}
      <div className="container-sci relative">{children}</div>
    </section>
  );
}
