
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createLinkedListNode } from "../data_structures/linked_list.ts";
import mergeTwoLists from "./merge_two_lists.ts";

Deno.test("21. Merge Two Sorted Lists", () => {
  assertEquals(
    mergeTwoLists(
      createLinkedListNode([1, 2, 4]),
      createLinkedListNode([1, 3, 4])
    ),
    createLinkedListNode([1, 1, 2, 3, 4, 4])
  );
  assertEquals(
    mergeTwoLists(createLinkedListNode([]), createLinkedListNode([])),
    createLinkedListNode([])
  );
});
