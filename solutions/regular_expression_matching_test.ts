
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isMatch from "./regular_expression_matching.ts";

Deno.test("10. Regular Expression Matching", () => {
  assertStrictEquals(isMatch("aa", "a"), false);
  assertStrictEquals(isMatch("aa", "a*"), true);
  assertStrictEquals(isMatch("ab", ".*"), true);
  assertStrictEquals(isMatch("aab", "c*a*b"), true);
  assertStrictEquals(isMatch("mississippi", "mis*is*p*."), false);
  assertStrictEquals(isMatch("ab", ".*c"), false);
  assertStrictEquals(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*b"), true);
  assertStrictEquals(isMatch("ab", ".*.."), true);
});
