import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import countVowelPermutation from "./count_vowels_permutation.ts";

Deno.test("1220. Count Vowels Permutation", () => {
  assertStrictEquals(countVowelPermutation(1), 5);
  assertStrictEquals(countVowelPermutation(2), 10);
  assertStrictEquals(countVowelPermutation(5), 68);
  assertStrictEquals(countVowelPermutation(144), 18208803);
  assertStrictEquals(countVowelPermutation(2000), 793084836);
  assertStrictEquals(countVowelPermutation(0), 1);
});
