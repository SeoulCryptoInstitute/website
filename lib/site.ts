/**
 * 배포 위치에 따라 달라지는 값들.
 *
 * GitHub Actions의 `actions/configure-pages`가 내보내는 값을 그대로 주입한다.
 * - 프로젝트 페이지(https://<org>.github.io/website)  → BASE_PATH "/website"
 * - 커스텀 도메인(https://seoulcrypto.institute)      → BASE_PATH ""
 *
 * 커스텀 도메인을 붙이면 액션이 알아서 빈 문자열을 넘기므로 코드는 그대로 둔다.
 * 클라이언트 번들에도 인라인되어야 하므로 NEXT_PUBLIC_ 접두사가 필요하다.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://seoulcrypto.institute";

/** public/ 자산 경로에 basePath를 붙인다. next/image와 raw <img>는 자동 처리되지 않는다. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
