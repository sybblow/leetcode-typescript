
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import climbStairs from "./climbing_stairs.ts";

Deno.test("70. Climbing Stairs", () => {
  assertStrictEquals(climbStairs(1), 1);
  assertStrictEquals(climbStairs(2), 2);
  assertStrictEquals(climbStairs(3), 3);
  assertStrictEquals(climbStairs(4), 5);
  assertStrictEquals(climbStairs(32), 3524578);
});
