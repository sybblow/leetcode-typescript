
import {
  assertEquals,
  assertStrictEquals
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createBinaryTreeNode } from "./binary_tree.ts";

Deno.test("createBinaryTreeNode() returns a BinaryTreeNode", () => {
  assertEquals(createBinaryTreeNode([1, 2, 3]), {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  });
  assertEquals(createBinaryTreeNode([1, null, 2, 3]), {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: null
    }
  });
  assertEquals(createBinaryTreeNode([5, 4, 7, 3, null, 2, null, -1, null, 9]), {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 3,
        left: {
          val: -1,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      val: 7,
      left: {
        val: 2,
        left: {
          val: 9,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    }
  });
  assertEquals(createBinaryTreeNode([1, 2, 3]), {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  });
  assertEquals(createBinaryTreeNode([1, 2, 3]), {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  });
});

Deno.test("createBinaryTreeNode() returns null when the given array is empty", () => {
  assertStrictEquals(createBinaryTreeNode([]), null);
});
