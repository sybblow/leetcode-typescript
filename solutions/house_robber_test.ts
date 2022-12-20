
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import rob from "./house_robber.ts";

Deno.test("198. House Robber", () => {
  assertStrictEquals(rob([1, 2, 3, 1]), 4);
  assertStrictEquals(rob([2, 7, 9, 3, 1]), 12);
  assertStrictEquals(rob([2, 4, 9, 3, 1, 5]), 16);
});
