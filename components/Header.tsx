"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./brand/Logo";
import { pagePath, type PageKey } from "@/lib/routes";
import type { Locale, SiteContent } from "@/content/types";

export function Header({
  content,
  locale,
  page,
}: {
  content: SiteContent;
  locale: Locale;
  /** 지금 페이지. 메뉴 강조와 언어 전환(상대 언어의 같은 페이지)에 쓴다. */
  page: PageKey;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { nav, announce, meta } = content;
  const alt: Locale = locale === "ko" ? "en" : "ko";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {announce && !dismissed ? (
        <div className="bg-blue text-white">
          <div className="container-sci flex items-center justify-center gap-4 py-2 text-[13px]">
            <a href={announce.href} className="group flex items-center gap-2">
              <span className="font-medium">{announce.text}</span>
              <span className="underline decoration-white/40 underline-offset-4 group-hover:decoration-white">
                {announce.cta}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="close"
              className="absolute right-4 text-white/70 transition-colors hover:text-white sm:right-8"
            >
              <svg viewBox="0 0 16 16" className="size-3.5 stroke-current">
                <path d="M3 3l10 10M13 3L3 13" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <header
        className={`transition-colors duration-500 ${
          scrolled || open
            ? "bg-navy/95 border-b border-white/10 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-sci flex h-16 items-center justify-between gap-6">
          <Link href={`/${locale}`} aria-label="Seoul Crypto Institute">
            <Logo tone="dark" className="text-[15px]" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.items.map((item) => {
              const current = item.page === page && !item.hash;
              return (
                <Link
                  key={item.label}
                  href={pagePath(locale, item.page, item.hash)}
                  aria-current={current ? "page" : undefined}
                  className={`text-[13px] font-medium transition-colors hover:text-white ${
                    current ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={pagePath(alt, page)}
              className="rounded-full border border-white/25 px-3 py-1.5 text-[12px] font-semibold tracking-wide text-white/80 transition-colors hover:border-white hover:text-white"
              aria-label={`Switch to ${meta.altLocaleLabel}`}
            >
              {meta.altLocaleLabel}
            </Link>

            <Link
              href={pagePath(locale, "contact")}
              aria-current={page === "contact" ? "page" : undefined}
              className="hidden rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold tracking-wide text-navy transition-colors hover:bg-blue hover:text-white sm:inline-block"
            >
              {nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? nav.close : nav.menu}
              aria-expanded={open}
              className="flex size-9 items-center justify-center text-white lg:hidden"
            >
              <svg viewBox="0 0 20 20" className="size-5 stroke-current">
                {open ? (
                  <path d="M4 4l12 12M16 4L4 16" strokeWidth="1.6" />
                ) : (
                  <path d="M2 6h16M2 13h16" strokeWidth="1.6" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="bg-navy h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden">
          <nav className="container-sci grid gap-1 py-8">
            {nav.items.map((item) => (
              <Link
                key={item.label}
                href={pagePath(locale, item.page, item.hash)}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-xl font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={pagePath(locale, "contact")}
              onClick={() => setOpen(false)}
              className="text-blue-soft mt-6 py-4 text-xl font-semibold"
            >
              {nav.cta}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
