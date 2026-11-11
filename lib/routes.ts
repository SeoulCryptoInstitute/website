import type { Locale } from "../content/types";

// 사이트의 페이지 목록. sitemap, 헤더 메뉴, 언어 전환이 모두 이 목록을 쓴다.
// 이 파일은 node:test가 그대로 읽으므로 런타임 import를 두지 않는다.
export const PAGES = ["home", "membership", "media", "contact"] as const;
export type PageKey = (typeof PAGES)[number];

/**
 * "/ko", "/ko#people", "/en/membership" — basePath는 붙이지 않는다.
 * next/link에는 그대로 넘기고, 일반 <a>에는 asset()으로 감싼다.
 */
export function pagePath(locale: Locale, page: PageKey, hash?: string): string {
  const path = page === "home" ? `/${locale}` : `/${locale}/${page}`;
  return hash ? `${path}#${hash}` : path;
}
