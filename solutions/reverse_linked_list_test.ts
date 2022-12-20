
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createLinkedListNode } from "../data_structures/linked_list.ts";
import reverseList from "./reverse_linked_list.ts";

Deno.test("206. Reverse Linked List", () => {
  assertEquals(
    reverseList(createLinkedListNode([0, 1])),
    createLinkedListNode([1, 0])
  );
  assertEquals(
    reverseList(createLinkedListNode([0, 1, 2, 3])),
    createLinkedListNode([3, 2, 1, 0])
  );
  assertEquals(
    reverseList(createLinkedListNode([0])),
    createLinkedListNode([0])
  );
  assertEquals(reverseList(createLinkedListNode([])), createLinkedListNode([]));
});
