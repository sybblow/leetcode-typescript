
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import minCostToMoveChips from "./play_with_chips.ts";

Deno.test("1217. Play with Chips", () => {
  assertStrictEquals(minCostToMoveChips([1, 2, 3]), 1);
  assertStrictEquals(minCostToMoveChips([2, 2, 2, 3, 3]), 2);
  assertStrictEquals(minCostToMoveChips([1, 2, 3, 4, 5, 6, 7, 8, 9]), 4);
});
