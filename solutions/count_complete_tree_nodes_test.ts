
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import countNodes from "./count_complete_tree_nodes.ts";

Deno.test("222. Count Complete Tree Nodes", () => {
  assertStrictEquals(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6])), 6);
  assertStrictEquals(countNodes(createBinaryTreeNode([])), 0);
  assertStrictEquals(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6, 7, 8])), 8);
  assertStrictEquals(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6, 7])), 7);
});
