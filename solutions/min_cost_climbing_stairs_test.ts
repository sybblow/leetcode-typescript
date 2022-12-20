
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import minCostClimbingStairs from "./min_cost_climbing_stairs.ts";

Deno.test("746. Min Cost Climbing Stairs", () => {
  assertStrictEquals(minCostClimbingStairs([10, 15, 20]), 15);
  assertStrictEquals(
    minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]),
    6
  );
});
