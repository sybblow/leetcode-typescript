
import {
  assertEquals,
  assertStrictEquals,
  assertThrows
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createLinkedListNode, getNthNode } from "./linked_list.ts";

Deno.test("createLinkedListNode() returns a LinkedListNode by the given array", () => {
  assertEquals(createLinkedListNode([1, 2, 3, 4, 5, 6, 7]), {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 7,
                next: null
              }
            }
          }
        }
      }
    }
  });
  assertEquals(createLinkedListNode([1]), {
    val: 1,
    next: null
  });
});

Deno.test("createLinkedListNode() returns null if the given array is empty", () => {
  assertStrictEquals(createLinkedListNode([]), null);
});

Deno.test("getNthNode(node, n) returns the n-th node", () => {
  assertStrictEquals(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 0).val,
    0
  );
  assertStrictEquals(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 2).val,
    2
  );
  assertStrictEquals(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -1).val,
    5
  );
  assertStrictEquals(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -3).val,
    3
  );
});

Deno.test("getNthNode(node, n) doesn't mutates the given linked list", () => {
  const head = createLinkedListNode([0, 1, 2, 3, 4, 5])!;

  getNthNode(head, 1);
  getNthNode(head, 2);
  getNthNode(head, 3);

  assertStrictEquals(getNthNode(head, 2).val, 2);
});

Deno.test("getNthNode(node, n) throws an Error if the given index is out of bounds", () => {
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 7),
    Error
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -7),
    Error
  );
});

Deno.test("getNthNode(node, n) throws a TypeError if the given index is not an integer", () => {
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 1.1),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, Infinity),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -Infinity),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, NaN),
    TypeError
  );
});
