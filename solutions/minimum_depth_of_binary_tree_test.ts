
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import minDepth from "./minimum_depth_of_binary_tree.ts";

Deno.test("111. Minimum Depth of Binary Tree", () => {
  assertStrictEquals(
    minDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])),
    2
  );
  assertStrictEquals(minDepth(createBinaryTreeNode([1, 2])), 2);
  assertStrictEquals(minDepth(createBinaryTreeNode([1, null, 2, null, 2])), 3);
  assertStrictEquals(minDepth(createBinaryTreeNode([1])), 1);
  assertStrictEquals(minDepth(createBinaryTreeNode([])), 0);
});
