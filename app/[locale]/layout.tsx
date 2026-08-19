import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getContent, isLocale, LOCALES } from "@/lib/i18n";
import { IS_TEMPORARY_HOST, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    metadataBase: new URL(SITE_URL),
    // 임시 github.io 주소가 먼저 색인되면 도메인 전환 후 정리가 번거롭다.
    robots: IS_TEMPORARY_HOST ? { index: false, follow: false } : undefined,
    alternates: {
      canonical: `/${locale}`,
      languages: { ko: "/ko", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: "Seoul Crypto Institute",
      title: content.meta.title,
      description: content.meta.description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      url: `/${locale}`,
      images: [
        {
          url: `/og-${locale}.png`,
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
      images: [`/og-${locale}.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    // globals.css의 `scroll-behavior: smooth`를 Next가 라우트 전환 동안만
    // 끌 수 있게 알려준다. 없으면 전환 시 스크롤이 문서 맨 아래로 튄다.
    <html lang={locale === "ko" ? "ko" : "en"} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* App Router에는 pages/_document이 없다 — 이 링크는 모든 라우트에 적용된다 */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&display=swap"
        />
        <meta name="theme-color" content="#0E2593" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
