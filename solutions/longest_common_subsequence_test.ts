
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestCommonSubsequence from "./longest_common_subsequence.ts";

Deno.test("1143. Longest Common Subsequence", () => {
  assertStrictEquals(longestCommonSubsequence("abcde", "ace"), 3);
  assertStrictEquals(longestCommonSubsequence("abc", "abc"), 3);
  assertStrictEquals(longestCommonSubsequence("abc", "def"), 0);
});
