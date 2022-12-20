
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findMin from "./find_minimum_in_rotated_sorted_array.ts";

Deno.test("153. Find Minimum in Rotated Sorted Array", () => {
  assertStrictEquals(findMin([3, 4, 5, 1, 2]), 1);
  assertStrictEquals(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
  assertStrictEquals(findMin([3, 1, 2]), 1);
  assertStrictEquals(findMin([1, 2, 3, 4, 5, 6]), 1);
  assertStrictEquals(findMin([2, 1]), 1);
  assertStrictEquals(findMin([1]), 1);
});
