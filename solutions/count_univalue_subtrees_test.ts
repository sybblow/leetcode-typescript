
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import countUnivalSubtrees from "./count_univalue_subtrees.ts";

Deno.test("250. Count Univalue Subtrees", () => {
  assertStrictEquals(
    countUnivalSubtrees(createBinaryTreeNode([5, 1, 5, 5, 5, null, 5])),
    4
  );
  assertStrictEquals(
    countUnivalSubtrees(createBinaryTreeNode([1, 4, 3, 4, 4, 5, 6])),
    5
  );
  assertStrictEquals(countUnivalSubtrees(createBinaryTreeNode([])), 0);
});
