
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import search from "./search_in_rotated_sorted_array.ts";

Deno.test("33. Search in Rotated Sorted Array", () => {
  assertStrictEquals(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
  assertStrictEquals(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
  assertStrictEquals(search([4, 5, 6, 7, 0, 1, 2], 4), 0);
  assertStrictEquals(search([3, 1], 3), 0);
  assertStrictEquals(search([7, 8, 1, 2, 3, 4, 5, 6], 2), 3);
});
