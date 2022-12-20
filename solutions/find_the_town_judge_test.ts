
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findJudge from "./find_the_town_judge.ts";

Deno.test("997. Find the Town Judge", () => {
  assertStrictEquals(findJudge(2, [[1, 2]]), 2);
  assertStrictEquals(findJudge(3, [[1, 3], [2, 3]]), 3);
  assertStrictEquals(findJudge(3, [[1, 3], [2, 3], [3, 1]]), -1);
  assertStrictEquals(findJudge(3, [[1, 2], [2, 3]]), -1);
  assertStrictEquals(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]), 3);
  assertStrictEquals(findJudge(1, []), 1);
});
