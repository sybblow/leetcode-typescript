
import {
  assert,
  assertStrictEquals
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestPalindrome from "./longest_palindromic_substring.ts";

Deno.test("5. Longest Palindromic Substring", () => {
  assert(["bab", "aba"].includes(longestPalindrome("babad")));
  assertStrictEquals(longestPalindrome("cbbd"), "bb");
});
