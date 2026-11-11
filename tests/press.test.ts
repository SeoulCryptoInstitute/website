import { test } from "node:test";
import assert from "node:assert/strict";
import { PRESS_EVENTS, OUTLETS } from "../content/press.ts";

test("launch seminar coverage matches the clipping", () => {
  const [ev] = PRESS_EVENTS;
  assert.equal(PRESS_EVENTS.length, 1);
  assert.equal(ev.date, "2026-10-28");
  const articles = ev.items.filter((i) => i.kind === "article");
  const photos = ev.items.filter((i) => i.kind === "photo");
  const reprints = ev.items.flatMap((i) => i.reprints ?? []);
  assert.equal(articles.length, 18);
  assert.equal(photos.length, 5);
  assert.equal(reprints.length, 7);
  const urls = [...ev.items.map((i) => i.url), ...reprints.map((r) => r.url)];
  assert.equal(new Set(urls).size, 30);
  assert.ok(urls.every((u) => !/utm_/.test(u)));
  const outlets = new Set([...ev.items.map((i) => i.outlet), ...reprints.map((r) => r.outlet)]);
  assert.equal(outlets.size, 23);
  for (const o of outlets) assert.ok(OUTLETS[o]?.ko && OUTLETS[o]?.en, o);
  assert.deepEqual(
    photos.map((p) => OUTLETS[p.outlet].ko),
    ["서울경제", "헤럴드경제", "뉴스1", "뉴시스", "전자신문"],
  );
  assert.equal(ev.items.find((i) => i.url.endsWith("25473793"))?.date, "2026-10-29");
});
