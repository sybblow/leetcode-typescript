
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findLongestChain from "./maximum_length_of_pair_chain.ts";

Deno.test("646. Maximum Length of Pair Chain", () => {
  assertStrictEquals(findLongestChain([[1, 2], [2, 3], [3, 4]]), 2);
  assertStrictEquals(findLongestChain([[3, 4], [2, 3], [1, 2]]), 2);
  assertStrictEquals(findLongestChain([[1, 2]]), 1);
});
