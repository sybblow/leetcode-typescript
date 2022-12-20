
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isAnagram from "./valid_anagram.ts";

Deno.test("242. Valid Anagram", () => {
  assertStrictEquals(isAnagram("anagram", "nagaram"), true);
  assertStrictEquals(isAnagram("car", "rat"), false);
  assertStrictEquals(isAnagram("a", "aa"), false);
});
