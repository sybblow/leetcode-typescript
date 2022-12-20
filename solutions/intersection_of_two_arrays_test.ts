
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import intersection from "./intersection_of_two_arrays.ts";

Deno.test("349. Intersection of Two Arrays", () => {
  assertEquals(intersection([1, 2, 2, 1], [2, 2]), [2]);
  assertEquals(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
});
