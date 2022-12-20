
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import checkPerfectNumber from "./perfect_number.ts";

Deno.test("507. Perfect Number", () => {
  assertStrictEquals(checkPerfectNumber(28), true);
  assertStrictEquals(checkPerfectNumber(27), false);
  assertStrictEquals(checkPerfectNumber(6), true);
  assertStrictEquals(checkPerfectNumber(1), false);
  assertStrictEquals(checkPerfectNumber(0), false);
});
