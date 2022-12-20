
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import maxDepth from "./maximum_depth_of_binary_tree.ts";

Deno.test("104. Maximum Depth of Binary Tree", () => {
  assertStrictEquals(
    maxDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])),
    3
  );
  assertStrictEquals(maxDepth(createBinaryTreeNode([])), 0);
});
