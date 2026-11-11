import { test } from "node:test";
import assert from "node:assert/strict";
import { pagePath, PAGES } from "../lib/routes.ts";

test("pagePath builds locale paths", () => {
  assert.equal(pagePath("ko", "home"), "/ko");
  assert.equal(pagePath("ko", "home", "people"), "/ko#people");
  assert.equal(pagePath("en", "membership"), "/en/membership");
  assert.equal(pagePath("en", "contact"), "/en/contact");
  assert.deepEqual([...PAGES], ["home", "membership", "media", "contact"]);
});
