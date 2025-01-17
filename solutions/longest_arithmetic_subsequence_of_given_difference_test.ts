
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestSubsequence from "./longest_arithmetic_subsequence_of_given_difference.ts";

Deno.test("1218. Longest Arithmetic Subsequence of Given Difference", () => {
  assertStrictEquals(longestSubsequence([1, 2, 3, 4], 1), 4);
  assertStrictEquals(longestSubsequence([1, 3, 5, 7], 1), 1);
  assertStrictEquals(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2), 4);
  assertStrictEquals(longestSubsequence([1], 1), 1);
});
