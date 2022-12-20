
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isHappy from "./happy_number.ts";

Deno.test("202. Happy Number", () => {
  assertStrictEquals(isHappy(19), true);
  assertStrictEquals(isHappy(18), false);
});
