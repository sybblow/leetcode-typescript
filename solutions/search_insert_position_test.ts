
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import searchInsert from "./search_insert_position.ts";

Deno.test("35. Search Insert Position", () => {
  assertStrictEquals(searchInsert([1, 3, 5, 6], 5), 2);
  assertStrictEquals(searchInsert([1, 3, 5, 6], 2), 1);
  assertStrictEquals(searchInsert([1, 3, 5, 6], 7), 4);
  assertStrictEquals(searchInsert([1, 3, 5, 6], 0), 0);
});
