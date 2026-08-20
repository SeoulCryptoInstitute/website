import type { Metadata } from "next";
import { DEFAULT_LOCALE, getContent } from "@/lib/i18n";
import { asset, SITE_URL } from "@/lib/site";

/**
 * `/` -> `/ko`.
 *
 * 정적 export에는 next.config의 redirects()가 동작하지 않으므로(서버가 없다)
 * meta refresh로 넘긴다. JS 없이도 동작한다.
 *
 * 크롤러는 meta refresh를 따라가지 않기 때문에, 도메인만 붙여넣어 공유했을 때
 * 카드가 비지 않도록 OG 태그를 여기서도 내보낸다.
 */
const TARGET = asset(`/${DEFAULT_LOCALE}`);

export function generateMetadata(): Metadata {
  const content = getContent(DEFAULT_LOCALE);

  return {
    title: content.meta.title,
    description: content.meta.description,
    metadataBase: new URL(SITE_URL),
    // 리다이렉트 스텁이 /ko와 따로 색인될 이유가 없다. 링크는 따라가게 둔다.
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      siteName: "Seoul Crypto Institute",
      title: content.meta.title,
      description: content.meta.description,
      locale: "ko_KR",
      url: "/",
      images: [
        {
          url: `/og-${DEFAULT_LOCALE}.png`,
          width: 1290,
          height: 630,
          alt: "Seoul Crypto Institute",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [`/og-${DEFAULT_LOCALE}.png`],
    },
  };
}

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(TARGET)} + location.search + location.hash)`,
        }}
      />
      <p>
        <a href={TARGET} style={{ color: "inherit" }}>
          Seoul Crypto Institute
        </a>
      </p>
    </>
  );
}
