
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import firstUniqChar from "./first_unique_character_in_a_string.ts";

Deno.test("387. First Unique Character in a String", () => {
  assertStrictEquals(firstUniqChar("leetcode"), 0);
  assertStrictEquals(firstUniqChar("loveleetcode"), 2);
  assertStrictEquals(firstUniqChar("leetcodeleetcode"), -1);
  assertStrictEquals(firstUniqChar("theleetcode"), 1);
  assertStrictEquals(firstUniqChar("j"), 0);
  assertStrictEquals(firstUniqChar(""), -1);
});
