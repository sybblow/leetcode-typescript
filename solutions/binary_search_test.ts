
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import search from "./binary_search.ts";

Deno.test("704. Binary Search", () => {
  assertStrictEquals(search([-1, 0, 3, 5, 9, 12], 9), 4);
  assertStrictEquals(search([-1, 0, 3, 5, 9, 12], 13), -1);
});
