
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import sumNumbers from "./sum_root_to_leaf_numbers.ts";

Deno.test("129. Sum Root to Leaf Numbers", () => {
  assertStrictEquals(sumNumbers(createBinaryTreeNode([1, 2, 3])), 25);
  assertStrictEquals(sumNumbers(createBinaryTreeNode([4, 9, 0, 5, 1])), 1026);
  assertStrictEquals(sumNumbers(createBinaryTreeNode([0, 1])), 1);
  assertStrictEquals(sumNumbers(createBinaryTreeNode([])), 0);
});
