
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import canPartition from "./partition_equal_subset_sum.ts";

Deno.test("416. Partition Equal Subset Sum", () => {
  assertStrictEquals(canPartition([1, 5, 11, 5]), true);
  assertStrictEquals(canPartition([1, 2, 3, 5]), false);
  assertStrictEquals(canPartition([8, 6, 3, 4, 5]), true);
});
