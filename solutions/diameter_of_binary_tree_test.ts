
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import diameterOfBinaryTree from "./diameter_of_binary_tree.ts";

Deno.test("543. Diameter of Binary Tree", () => {
  assertStrictEquals(
    diameterOfBinaryTree(createBinaryTreeNode([1, 2, 3, 4, 5])),
    3
  );
  assertStrictEquals(diameterOfBinaryTree(createBinaryTreeNode([1])), 0);
  assertStrictEquals(diameterOfBinaryTree(createBinaryTreeNode([])), 0);
  assertStrictEquals(
    diameterOfBinaryTree(
      createBinaryTreeNode([
        4,
        -7,
        -3,
        null,
        null,
        -9,
        -3,
        9,
        -7,
        -4,
        null,
        6,
        null,
        -6,
        -6,
        null,
        null,
        0,
        6,
        5,
        null,
        9,
        null,
        null,
        -1,
        -4,
        null,
        null,
        null,
        -2
      ])
    ),
    8
  );
});
