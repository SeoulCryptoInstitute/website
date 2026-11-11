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
