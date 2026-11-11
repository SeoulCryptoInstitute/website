import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { MembershipGuide } from "@/components/sections/MembershipGuide";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "membership", getContent(locale).pages.membership);
}

export default async function MembershipPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const s = content.membership;

  return (
    <>
      <Header content={content} locale={locale} page="membership" />
      <main>
        <PageHeader kicker={s.kicker} title={s.title} lead={s.lead} />
        <MembershipGuide content={content} />
      </main>
      <Footer content={content} locale={locale} page="membership" />
    </>
  );
}
