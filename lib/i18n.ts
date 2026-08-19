import { ko } from "@/content/ko";
import { en } from "@/content/en";
import type { Locale, SiteContent } from "@/content/types";

export const LOCALES: Locale[] = ["ko", "en"];
export const DEFAULT_LOCALE: Locale = "ko";

const DICT: Record<Locale, SiteContent> = { ko, en };

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function getContent(locale: Locale): SiteContent {
  return DICT[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ko" ? "en" : "ko";
}

export type { Locale, SiteContent };
