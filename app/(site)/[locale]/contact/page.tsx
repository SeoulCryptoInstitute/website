import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ContactDetails } from "@/components/sections/ContactDetails";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "contact", getContent(locale).pages.contact);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const s = content.contactPage;

  return (
    <>
      <Header content={content} locale={locale} page="contact" />
      <main>
        <PageHeader kicker={s.kicker} title={s.title} lead={s.lead} />
        <ContactDetails content={content} locale={locale} />
      </main>
      <Footer content={content} locale={locale} page="contact" />
    </>
  );
}
