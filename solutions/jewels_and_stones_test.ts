
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import numJewelsInStones from "./jewels_and_stones.ts";

Deno.test("771. Jewels and Stones", () => {
  assertStrictEquals(numJewelsInStones("aA", "aAAbbbb"), 3);
  assertStrictEquals(numJewelsInStones("z", "ZZ"), 0);
});
