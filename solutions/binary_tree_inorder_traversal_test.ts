
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import inorderTraversal from "./binary_tree_inorder_traversal.ts";

Deno.test("94. Binary Tree Inorder Traversal", () => {
  assertEquals(inorderTraversal(createBinaryTreeNode([1, null, 2, 3])), [
    1,
    3,
    2
  ]);
  assertEquals(inorderTraversal(createBinaryTreeNode([4, 4, 5, 1, 2])), [
    1,
    4,
    2,
    4,
    5
  ]);
  assertEquals(
    inorderTraversal(
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    [1, 1, 1, 1, 1, 2, 1]
  );
  assertEquals(inorderTraversal(createBinaryTreeNode([1])), [1]);
  assertEquals(inorderTraversal(createBinaryTreeNode([])), []);
});
