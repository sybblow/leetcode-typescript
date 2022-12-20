
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isAlienSorted from "./verifying_an_alien_dictionary.ts";

Deno.test("953. Verifying an Alien Dictionary", () => {
  assertStrictEquals(
    isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"),
    true
  );
  assertStrictEquals(
    isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
    false
  );
  assertStrictEquals(
    isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"),
    false
  );
});
