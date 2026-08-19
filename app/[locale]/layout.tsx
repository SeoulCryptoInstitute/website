import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getContent, isLocale, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

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
          width: 1200,
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
    <html lang={locale === "ko" ? "ko" : "en"}>
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
