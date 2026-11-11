import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { PAGES, pagePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * /sitemap.xml — 빌드 시 정적 파일로 나온다.
 *
 * 로케일 × 페이지(PAGES)를 싣는다. `/`는 canonical이 `/ko`라 따로 색인될 페이지가 아니다.
 * hreflang은 각 페이지의 <link rel="alternate">(layout의 alternates.languages)와
 * 같게 맞춘다 — 둘이 어긋나면 검색엔진이 둘 다 무시할 수 있다.
 *
 * lastModified는 넣지 않는다. 빌드 시각을 넣으면 내용이 안 바뀐 배포에서도 매번
 * 갱신된 것처럼 보이고, 그런 값은 검색엔진이 신뢰하지 않게 된다.
 */

// output: "export"에서는 메타데이터 라우트도 정적임을 명시해야 빌드된다.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) => {
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, absoluteUrl(pagePath(locale, page))]),
    );
    return LOCALES.map((locale) => ({
      url: absoluteUrl(pagePath(locale, page)),
      alternates: { languages },
    }));
  });
}
