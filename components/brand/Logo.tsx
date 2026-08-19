import { Symbol } from "./Symbol";

type Tone = "light" | "dark";

const TONES: Record<
  Tone,
  { primary: string; secondary: string; sci: string; sub: string }
> = {
  // 밝은 바탕
  light: {
    primary: "var(--color-navy)",
    secondary: "var(--color-blue)",
    sci: "text-navy",
    sub: "text-ink",
  },
  // 네이비 바탕
  dark: {
    primary: "var(--color-blue)",
    secondary: "#8FB0F8",
    sci: "text-white",
    sub: "text-blue-soft",
  },
};

/**
 * 심볼 + 워드마크 락업. 브랜드 가이드 p.10~11 기준.
 * 워드마크는 원본 .ai 확보 전까지 웹폰트(Archivo/Pretendard)로 근사한다.
 */
export function Logo({
  tone = "light",
  compact = false,
  className = "",
}: {
  tone?: Tone;
  compact?: boolean;
  className?: string;
}) {
  const t = TONES[tone];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Symbol
        className="h-[1em] w-auto shrink-0"
        primary={t.primary}
        secondary={t.secondary}
        title="Seoul Crypto Institute"
      />
      <span
        className={`font-display text-[1.32em] leading-none font-black tracking-[-0.02em] ${t.sci}`}
      >
        SCI
      </span>
      {compact ? null : (
        <span
          className={`text-[0.62em] leading-[1.12] font-semibold tracking-[-0.01em] ${t.sub}`}
        >
          Seoul Crypto
          <br />
          Institute
        </span>
      )}
    </span>
  );
}
