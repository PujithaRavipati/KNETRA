import assert from "node:assert/strict";
import { test } from "node:test";
import { estimateLeak, parseLeak } from "./leak.ts";

test("estimate: 10 missed/day at ₹1,500 and 3 hours/day at ₹150", () => {
  // 10 × 26 × 0.2 × 1500 = 78,000; 3 × 26 × 150 = 11,700
  assert.deepEqual(estimateLeak({ missed: 10, value: 1500, hours: 3, rate: 150 }), {
    fromMissed: 78000,
    fromHours: 11700,
    total: 89700,
  });
});

test("parse: empty, invalid and valid input", () => {
  assert.equal(parseLeak({ missed: "", value: "1", hours: "1", rate: "1" }), "empty");
  assert.equal(parseLeak({ missed: "-2", value: "1", hours: "1", rate: "1" }), "invalid");
  assert.equal(parseLeak({ missed: "1.5", value: "1", hours: "1", rate: "1" }), "invalid");
  assert.equal(parseLeak({ missed: "abc", value: "1", hours: "1", rate: "1" }), "invalid");
  assert.deepEqual(parseLeak({ missed: " 0 ", value: "0", hours: "0", rate: "0" }), { fromMissed: 0, fromHours: 0, total: 0 });
});
