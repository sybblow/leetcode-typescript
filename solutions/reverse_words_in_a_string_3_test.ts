
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import reverseWords from "./reverse_words_in_a_string_3.ts";

Deno.test("557. Reverse Words in a String III", () => {
  assertStrictEquals(
    reverseWords("Let's take LeetCode contest"),
    "s'teL ekat edoCteeL tsetnoc"
  );
});
