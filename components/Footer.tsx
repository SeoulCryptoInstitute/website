import Link from "next/link";
import { Logo } from "./brand/Logo";
import { CONTACT_EMAIL } from "@/lib/site";
import { pagePath, type PageKey } from "@/lib/routes";
import type { Locale, SiteContent } from "@/content/types";

export function Footer({
  content,
  locale,
  page,
}: {
  content: SiteContent;
  locale: Locale;
  page: PageKey;
}) {
  const f = content.footer;
  const alt: Locale = locale === "ko" ? "en" : "ko";
  const year = 2026;

  return (
    <footer className="bg-navy-ink text-white/60">
      <div className="container-sci py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo tone="dark" className="text-[17px]" />
            <p className="text-blue-soft mt-6 max-w-sm text-[14px] leading-[1.7] text-pretty">
              {f.tagline}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-white/40 uppercase">
              {f.addressLabel}
            </p>
            <address className="mt-4 text-[14px] leading-[1.7] not-italic">
              {f.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-white/40 uppercase">
              {f.contactLabel}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-[14px] text-white/80 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href={pagePath(alt, page)}
              className="mt-6 block w-fit text-[13px] font-semibold text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
            >
              {content.meta.altLocaleLabel}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {f.copyright}
          </p>
          <p>Seoul, Korea</p>
        </div>
      </div>
    </footer>
  );
}
