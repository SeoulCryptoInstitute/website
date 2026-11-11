import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
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

test("introduction PDF is linked from hero and insights", () => {
  for (const [c, l] of [
    [ko, "ko"],
    [en, "en"],
  ] as const) {
    assert.equal(c.hero.primary.href, `/files/sci-introduction-${l}.pdf`);
    assert.equal(c.insights.items[0].href, `/files/sci-introduction-${l}.pdf`);
  }
  for (const f of ["introduction", "membership-guide", "sponsorship-guide"])
    for (const l of ["ko", "en"])
      assert.ok(existsSync(`public/files/sci-${f}-${l}.pdf`), `${f}-${l}`);
});

test("membership page carries fees, tiers and the KR-only online form", () => {
  assert.equal(ko.membership.join.apply?.url, "https://forms.gle/dxWTD6JrnAE9BV5J7");
  assert.equal(en.membership.join.apply, null);
  assert.deepEqual(ko.membership.join.types.map((t) => t.fee), ["연 20만 원", "연 100만 원"]);
  assert.deepEqual(en.membership.join.types.map((t) => t.fee), ["USD 200", "USD 1,000"]);
  assert.deepEqual(
    ko.membership.support.tiers.map((t) => t.amount),
    ["연 3억 원", "연 1억 원", "연 3,000만 원"],
  );
  assert.equal(ko.membership.support.principles.length, 5);
  // GuideTable은 행을 [이름, 가운데, 오른쪽 값] 순서로 그린다 — 금액 머리글은 오른쪽 열이어야 한다
  assert.equal(ko.membership.support.head[2], "연간 후원액");
  assert.equal(en.membership.support.head[2], "Annual contribution");
  assert.equal(ko.membership.join.head[2], "연회비");
  assert.equal(ko.membership.join.steps.length, 3);
  for (const [c, l] of [
    [ko, "ko"],
    [en, "en"],
  ] as const) {
    assert.equal(c.membership.join.pdf, `/files/sci-membership-guide-${l}.pdf`);
    assert.equal(c.membership.support.pdf, `/files/sci-sponsorship-guide-${l}.pdf`);
    assert.doesNotMatch(JSON.stringify(c.membership), /환율|exchange rate|invoice|납입 시점/i);
  }
});

test("fellows and advisers follow introduction v1.2", () => {
  assert.deepEqual(
    ko.people.members.map((m) => m.name),
    ["강형구", "김준현", "박문구", "박종백", "백광원", "안수현", "오현옥", "유민호", "이석준",
      "이준행", "이효진", "장중혁", "진창호", "최기억", "최철", "필립 갠트", "홍준기"],
  );
  assert.deepEqual(ko.people.advisors.map((m) => m.name), ["오세현", "Yesha Yadav"]);
  assert.deepEqual(en.people.members.map((m) => m.slug), ko.people.members.map((m) => m.slug));
  assert.deepEqual(en.people.advisors.map((m) => m.slug), ko.people.advisors.map((m) => m.slug));
  const enNames = en.people.members.map((m) => m.name);
  for (const n of ["Joong-Hyuk Chang", "Jun-Ki Hong", "Hyun-Ok Oh", "Min-Ho Yoo", "Chang-Ho Jin",
    "Soo-Hyun Ahn", "Hyo-Jin Lee", "Chul Choi"])
    assert.ok(enNames.includes(n), n);
  const pos = Object.fromEntries(
    ko.people.members.filter((m) => m.position).map((m) => [m.name, m.position]),
  );
  assert.deepEqual(pos, { 강형구: "부대표", 김준현: "사무총장", 박종백: "대표", 장중혁: "부대표", 홍준기: "부대표" });
  for (const m of [...ko.people.members, ...ko.people.advisors])
    assert.ok(existsSync(`public/people/${m.slug}.jpg`), m.slug);
  assert.ok(!existsSync("public/people/lee-jongsub.jpg"));
  for (const m of [...ko.people.members, ...en.people.members, ...ko.people.advisors, ...en.people.advisors])
    assert.ok(!m.bio.startsWith(m.role), m.slug);
});
