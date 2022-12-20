
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import maxSubArray from "./maximum_subarray.ts";

Deno.test("53. Maximum Subarray", () => {
  assertStrictEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  assertStrictEquals(maxSubArray([-3, -2, -5, -1, -4, -1]), -1);
});
