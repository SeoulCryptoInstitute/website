import { test } from "node:test";
import assert from "node:assert/strict";
import { ko } from "../content/ko.ts";
import { en } from "../content/en.ts";

const PERSONAL = /010-|\+82 ?10|gmail\.com|naver\.com|takeital|hannah315/;

test("nav has four items and a CONTACT button", () => {
  for (const c of [ko, en]) {
    assert.deepEqual(
      c.nav.items.map((i) => [i.page, i.hash ?? null]),
      [
        ["home", null],
        ["home", "people"],
        ["membership", null],
        ["media", null],
      ],
    );
    assert.equal(c.nav.cta, "CONTACT");
  }
  assert.deepEqual(
    ko.nav.items.map((i) => i.label),
    ["SCI 소개", "연구위원", "사원가입·후원", "언론보도·활동"],
  );
});

test("announce bar is off", () => {
  assert.equal(ko.announce, null);
  assert.equal(en.announce, null);
});

test("no personal contact details in content", () => {
  assert.doesNotMatch(JSON.stringify([ko, en]), PERSONAL);
});

test("contact page lists three topics and links membership", () => {
  for (const c of [ko, en]) {
    assert.equal(c.contactPage.topics.length, 3);
    assert.equal(c.contactPage.topics[1].link?.page, "membership");
    for (const p of ["membership", "media", "contact"] as const)
      assert.ok(c.pages[p].title && c.pages[p].description, p);
  }
});
