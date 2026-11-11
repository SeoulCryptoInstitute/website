/**
 * 빌드 산출물(out/) 점검 — `npm run build` 뒤에 `npm run test:out`으로 돌린다.
 *
 * 미리보기 빌드는 basePath와 사이트 주소를 넘겨서 확인한다:
 *   NEXT_PUBLIC_BASE_PATH=/website-preview NEXT_PUBLIC_SITE_URL=https://seoulcryptoinstitute.github.io/website-preview npm run build
 *   BASE_PATH=/website-preview SITE=https://seoulcryptoinstitute.github.io/website-preview npm run test:out
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { PRESS_EVENTS } from "../content/press.ts";

const B = process.env.BASE_PATH ?? "";
const SITE = process.env.SITE ?? "https://seoulcrypto.institute";
const OUT = "out";
const LOCALES = ["ko", "en"] as const;
const PAGES = ["", "/membership", "/media", "/contact"] as const;
const PERSONAL = /010-|\+82 ?10|gmail\.com|naver\.com|takeital|hannah315/;

const pageFile = (l: string, p: string) => join(OUT, p ? `${l}${p}.html` : `${l}.html`);
const read = (f: string) => readFileSync(f, "utf8");

function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith(".html") ? [p] : [];
  });
}

test("all pages are exported", () => {
  for (const l of LOCALES)
    for (const p of PAGES) assert.ok(existsSync(pageFile(l, p)), pageFile(l, p));
});

test("every root-relative href and src carries the base path", { skip: !B && "BASE_PATH not set" }, () => {
  for (const f of htmlFiles(OUT)) {
    for (const [, url] of read(f).matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
      if (url.startsWith("//")) continue;
      assert.ok(url.startsWith(`${B}/`), `${f}: ${url}`);
    }
  }
});

test("each page has its own canonical and hreflang", () => {
  for (const l of LOCALES)
    for (const p of PAGES) {
      const html = read(pageFile(l, p));
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      assert.equal(canonical, `${SITE}/${l}${p}`, pageFile(l, p));
      for (const alt of LOCALES) {
        const href = html.match(new RegExp(`<link rel="alternate" hrefLang="${alt}" href="([^"]+)"`))?.[1];
        assert.equal(href, `${SITE}/${alt}${p}`, `${pageFile(l, p)} hreflang ${alt}`);
      }
    }
});

test("language switch keeps the page", () => {
  assert.ok(read(pageFile("ko", "/media")).includes(`href="${B}/en/media"`));
});

test("fellows link points at the home section", () => {
  assert.ok(read(pageFile("ko", "/media")).includes(`href="${B}/ko#people"`));
});

test("no personal contact details", () => {
  for (const f of htmlFiles(OUT)) assert.doesNotMatch(read(f), PERSONAL, f);
});

test("press links are all present", () => {
  const html = read(pageFile("ko", "/media"));
  const urls = PRESS_EVENTS.flatMap((ev) =>
    ev.items.flatMap((i) => [i.url, ...(i.reprints ?? []).map((r) => r.url)]),
  );
  assert.equal(urls.length, 30);
  for (const u of urls) assert.ok(html.includes(`href="${u.replaceAll("&", "&amp;")}"`), u);
});

test("the large contact email breaks only after the @", () => {
  // 좁은 폰에서 "contact@seoulcrypto.institu / te"처럼 단어 중간에서 끊기면 안 된다.
  for (const l of LOCALES)
    for (const p of ["/contact", "/membership"]) {
      const html = read(pageFile(l, p));
      const big = [...html.matchAll(/<a[^>]*href="mailto:[^"]*"[^>]*>[^]*?<\/a>/g)]
        .map((m) => m[0])
        .filter((a) => a.includes("text-[clamp"));
      assert.equal(big.length, 1, `${pageFile(l, p)}: one large email link`);
      assert.ok(big[0].includes("contact@<wbr/>seoulcrypto.institute"), `${pageFile(l, p)}: break point after @`);
      assert.ok(!big[0].includes("break-all"), `${pageFile(l, p)}: no break-all`);
    }
});

test("sitemap lists eight pages", () => {
  const xml = read(join(OUT, "sitemap.xml"));
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.deepEqual(
    locs.sort(),
    LOCALES.flatMap((l) => PAGES.map((p) => `${SITE}/${l}${p}`)).sort(),
  );
});
