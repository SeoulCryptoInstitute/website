import type { Metadata } from "next";
import { pagePath, type PageKey } from "@/lib/routes";
import type { Locale, PageMeta } from "@/content/types";

/**
 * 하위 페이지(사원가입·후원, 언론보도·활동, CONTACT)의 메타데이터.
 *
 * 레이아웃의 메타데이터와는 얕게 병합된다. 그래서 alternates·openGraph·twitter는
 * 여기서 통째로 다시 적는다(안 적으면 canonical이 레이아웃의 `/ko`로 남는다).
 * robots는 적지 않는다 — 임시 호스트의 noindex를 레이아웃에서 그대로 물려받아야 한다.
 */
export function pageMetadata(
  locale: Locale,
  page: Exclude<PageKey, "home">,
  meta: PageMeta,
): Metadata {
  const url = pagePath(locale, page);
  const image = `/og-${locale}.png`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: { ko: pagePath("ko", page), en: pagePath("en", page) },
    },
    openGraph: {
      type: "website",
      siteName: "Seoul Crypto Institute",
      title: meta.title,
      description: meta.description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      url,
      images: [
        { url: image, width: 1290, height: 630, alt: "Seoul Crypto Institute" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image],
    },
  };
}
