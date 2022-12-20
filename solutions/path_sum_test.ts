
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import pathSum from "./path_sum.ts";

Deno.test("112. Path Sum", () => {
  assertStrictEquals(
    pathSum(
      createBinaryTreeNode([
        5,
        4,
        8,
        11,
        null,
        13,
        4,
        7,
        2,
        null,
        null,
        null,
        1
      ]),
      22
    ),
    true
  );
  assertStrictEquals(
    pathSum(
      createBinaryTreeNode([
        5,
        4,
        8,
        11,
        null,
        13,
        4,
        7,
        2,
        null,
        null,
        null,
        1
      ]),
      20
    ),
    false
  );
  assertStrictEquals(pathSum(createBinaryTreeNode([]), 0), false);
});
