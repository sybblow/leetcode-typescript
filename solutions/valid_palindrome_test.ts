
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isPalindrome from "./valid_palindrome.ts";

Deno.test("125. Valid Palindrome", () => {
  assertStrictEquals(isPalindrome("A man, a plan, a canal: Panama"), true);
  assertStrictEquals(isPalindrome("race a car"), false);
  assertStrictEquals(isPalindrome(""), true);
  assertStrictEquals(isPalindrome("0P"), false);
});
