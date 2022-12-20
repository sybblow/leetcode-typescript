
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import preorderTraversal from "./binary_tree_preorder_traversal.ts";

Deno.test("144. Binary Tree Preorder Traversal", () => {
  assertEquals(preorderTraversal(createBinaryTreeNode([1, null, 2, 3])), [
    1,
    2,
    3
  ]);
  assertEquals(preorderTraversal(createBinaryTreeNode([4, 4, 5, 1, 2])), [
    4,
    4,
    1,
    2,
    5
  ]);
  assertEquals(
    preorderTraversal(
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    [1, 1, 1, 1, 1, 1, 2]
  );
  assertEquals(preorderTraversal(createBinaryTreeNode([1])), [1]);
  assertEquals(preorderTraversal(createBinaryTreeNode([])), []);
});
