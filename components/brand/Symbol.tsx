const PATH =
  "M51.795 29.356 L49.031 26.592 L46.566 24.127 L43.768 21.329 C42.297 19.858 40.357 19.122 38.417 19.122 L0 19.122 L0 24.167 L30.228 24.167 L45.389 24.167 L29.926 39.63 L26.745 42.811 L30.313 46.378 L33.493 43.198 L48.957 27.734 L48.957 42.895 L48.957 44.469 L54.002 44.469 L54.002 34.707 C54.002 32.767 53.267 30.828 51.795 29.356Z";

/**
 * The Vector Core — 브랜드 가이드 p.9 심볼.
 * 원본 PDF의 벡터 좌표를 그대로 옮긴 것으로, 하나의 경로와 그 180° 회전본으로 구성된다.
 */
export function Symbol({
  className,
  primary = "var(--color-navy)",
  secondary = "var(--color-blue)",
  title,
  /** 팔을 잘라낸 정사각 아이콘 형태 — 불릿·배지 등 작은 크기에 사용 */
  compact = false,
}: {
  className?: string;
  primary?: string;
  secondary?: string;
  title?: string;
  compact?: boolean;
}) {
  return (
    <svg
      viewBox={compact ? "26.811 0 46.378 46.378" : "0 0 100 46.378"}
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path fill={primary} d={PATH} />
      <path fill={secondary} transform="rotate(180 50 23.189)" d={PATH} />
    </svg>
  );
}
