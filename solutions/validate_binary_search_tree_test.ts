
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import isValidBST from "./validate_binary_search_tree.ts";

Deno.test("98. Validate Binary Search Tree", () => {
  assertStrictEquals(isValidBST(createBinaryTreeNode([2, 1, 3])), true);
  assertStrictEquals(
    isValidBST(createBinaryTreeNode([5, 1, 4, null, null, 3, 6])),
    false
  );
  assertStrictEquals(isValidBST(createBinaryTreeNode([1, 1])), false);
  assertStrictEquals(isValidBST(createBinaryTreeNode([])), true);
});
