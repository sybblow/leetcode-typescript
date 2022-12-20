
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findLHS from "./longest_harmonious_subsequence.ts";

Deno.test("594. Longest Harmonious Subsequence", () => {
  assertStrictEquals(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5);
  assertStrictEquals(findLHS([1, 3, 2, 3, 4, 2, 2, 4]), 5);
  assertStrictEquals(findLHS([5, 4, 3, 2, 1]), 2);
  assertStrictEquals(findLHS([1, 1, 1, 1]), 0);
  assertStrictEquals(findLHS([2, 1]), 2);
  assertStrictEquals(findLHS([1, 3]), 0);
  assertStrictEquals(findLHS([0]), 0);
  assertStrictEquals(findLHS([]), 0);
});
