
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isPalindrome from "./palidrome_number.ts";

Deno.test("9. Palindrome Number", () => {
  assertStrictEquals(isPalindrome(121), true);
  assertStrictEquals(isPalindrome(-121), false);
  assertStrictEquals(isPalindrome(5), true);
  assertStrictEquals(isPalindrome(0), true);
  assertStrictEquals(isPalindrome(10), false);
  assertStrictEquals(isPalindrome(101), true);
  assertStrictEquals(isPalindrome(1010), false);
});
