import type { ReactNode } from "react";

/** 화살표 배지 — 브랜드 가이드 목업의 pill 버튼 패턴. */
function ArrowBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current">
        <path
          d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

const VARIANTS = {
  // 네이비 배경 위 흰색 pill
  solid:
    "bg-white text-navy hover:bg-blue hover:text-white [&_.badge]:bg-navy [&_.badge]:text-white hover:[&_.badge]:bg-white hover:[&_.badge]:text-blue",
  // 밝은 배경 위 파란 pill
  primary:
    "bg-blue text-white hover:bg-navy [&_.badge]:bg-white/15 [&_.badge]:text-white",
  // 테두리형
  ghostDark:
    "border border-white/30 text-white hover:border-white hover:bg-white/10 [&_.badge]:bg-white/10 [&_.badge]:text-white",
  ghostLight:
    "border border-line text-navy hover:border-navy hover:bg-navy hover:text-white [&_.badge]:bg-navy/5 [&_.badge]:text-navy hover:[&_.badge]:bg-white/15 hover:[&_.badge]:text-white",
} as const;

export function Cta({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-sm font-semibold transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
    >
      {children}
      <ArrowBadge className="badge" />
    </a>
  );
}
