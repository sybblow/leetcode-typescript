
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import findCircleNum from "./friend_circles.ts";

Deno.test("547. Friend Circles", () => {
  assertStrictEquals(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]), 2);
  assertStrictEquals(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]), 1);
  assertStrictEquals(
    findCircleNum([
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 0, 1, 1]
    ]),
    2
  );
  assertStrictEquals(
    findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]),
    1
  );
});
