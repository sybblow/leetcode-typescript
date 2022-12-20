
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import majorityElement from "./majority_element.ts";

Deno.test("169. Majority Element", () => {
  assertStrictEquals(majorityElement([3, 2, 3]), 3);
  assertStrictEquals(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
});
