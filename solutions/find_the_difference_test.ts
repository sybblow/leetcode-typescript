
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findTheDifference from "./find_the_difference.ts";

Deno.test("389. Find the Difference", () => {
  assertStrictEquals(findTheDifference("abcd", "abcde"), "e");
  assertStrictEquals(findTheDifference("abcdd", "abdcdd"), "d");
});
