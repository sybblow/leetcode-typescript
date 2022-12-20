
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import removeVowels from "./remove_vowels_from_a_string.ts";

Deno.test("1119. Remove Vowels from a String", () => {
  assertEquals(
    removeVowels("leetcodeisacommunityforcoders"),
    "ltcdscmmntyfrcdrs"
  );
  assertEquals(removeVowels("aeiou"), "");
});
