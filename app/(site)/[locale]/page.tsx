import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { KoreaNow } from "@/components/sections/KoreaNow";
import { Vision } from "@/components/sections/Vision";
import { Agenda } from "@/components/sections/Agenda";
import { Work } from "@/components/sections/Work";
import { Roadmap } from "@/components/sections/Roadmap";
import { People } from "@/components/sections/People";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  return (
    <>
      <Header content={content} locale={locale} />
      <main>
        <Hero content={content} />
        <WhyNow content={content} />
        <KoreaNow content={content} />
        <Vision content={content} />
        <Agenda content={content} />
        <Work content={content} />
        <Roadmap content={content} />
        <People content={content} />
        <Insights content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} locale={locale} />
    </>
  );
}
