
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestMountain from "./longest_mountain_in_array.ts";

Deno.test("845. Longest Mountain in Array", () => {
  assertStrictEquals(longestMountain([2, 1, 4, 7, 3, 2, 5]), 5);
  assertStrictEquals(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 11);
  assertStrictEquals(longestMountain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0);
  assertStrictEquals(longestMountain([1, 1, 0, 0, 1, 0]), 3);
  assertStrictEquals(longestMountain([2, 3, 3, 2, 0, 2]), 0);
});
