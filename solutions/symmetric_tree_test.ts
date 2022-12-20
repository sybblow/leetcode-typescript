
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import isSymmetric from "./symmetric_tree.ts";

Deno.test("101. Symmetric Tree", () => {
  assertStrictEquals(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, 4, 4, 3])),
    true
  );
  assertStrictEquals(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, 3, null])),
    false
  );
  assertStrictEquals(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, null, 3])),
    true
  );
  assertStrictEquals(isSymmetric(createBinaryTreeNode([])), true);
});
