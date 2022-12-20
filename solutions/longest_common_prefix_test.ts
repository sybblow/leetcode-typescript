
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestCommonPrefix from "./longest_common_prefix.ts";

Deno.test("14. Longest Common Prefix", () => {
  assertStrictEquals(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assertStrictEquals(longestCommonPrefix(["dog", "racecar", "car"]), "");
  assertStrictEquals(longestCommonPrefix(["aca", "cba"]), "");
  assertStrictEquals(longestCommonPrefix([""]), "");
  assertStrictEquals(longestCommonPrefix(["a"]), "a");
  assertStrictEquals(longestCommonPrefix(["a", "b"]), "");
});
