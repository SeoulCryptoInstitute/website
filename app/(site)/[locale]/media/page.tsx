import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { PressEvents } from "@/components/sections/PressEvents";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "media", getContent(locale).pages.media);
}

export default async function MediaPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const s = content.media;

  return (
    <>
      <Header content={content} locale={locale} page="media" />
      <main>
        <PageHeader kicker={s.kicker} title={s.title} lead={s.lead} />
        <PressEvents content={content} locale={locale} />
      </main>
      <Footer content={content} locale={locale} page="media" />
    </>
  );
}
