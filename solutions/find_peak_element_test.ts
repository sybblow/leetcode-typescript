
import {
  assert,
  assertStrictEquals
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findPeakElement from "./find_peak_element.ts";

Deno.test("162. Find Peak Element", () => {
  assertStrictEquals(findPeakElement([1, 2, 3, 1]), 2);
  assert([1, 5].includes(findPeakElement([1, 2, 1, 3, 5, 6, 4])));
  assertStrictEquals(findPeakElement([2, 1]), 0);
  assertStrictEquals(findPeakElement([1]), 0);
});
