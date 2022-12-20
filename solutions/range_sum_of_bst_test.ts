
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import rangeSumBST from "./range_sum_of_bst.ts";

Deno.test("938. Range Sum of BST", () => {
  assertStrictEquals(
    rangeSumBST(createBinaryTreeNode([10, 5, 15, 3, 7, null, 18]), 7, 15),
    32
  );
  assertStrictEquals(
    rangeSumBST(
      createBinaryTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]),
      6,
      10
    ),
    23
  );
  assertStrictEquals(
    rangeSumBST(
      createBinaryTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]),
      4,
      12
    ),
    28
  );
  assertStrictEquals(rangeSumBST(createBinaryTreeNode([1]), 1, 1), 1);
  assertStrictEquals(rangeSumBST(createBinaryTreeNode([]), 1, 1), 0);
});
