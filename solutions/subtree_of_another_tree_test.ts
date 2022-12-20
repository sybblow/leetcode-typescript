
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import isSubtree from "./subtree_of_another_tree.ts";

Deno.test("572. Subtree of Another Tree", () => {
  assertStrictEquals(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2]),
      createBinaryTreeNode([4, 1, 2])
    ),
    true
  );
  assertStrictEquals(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2, null, null, null, null, 0]),
      createBinaryTreeNode([4, 1, 2])
    ),
    false
  );
  assertStrictEquals(
    isSubtree(
      createBinaryTreeNode([
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        2
      ]),
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    true
  );
});
