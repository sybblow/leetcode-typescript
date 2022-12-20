
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { createLinkedListNode } from "../data_structures/linked_list.ts";
import isPalindrome from "./palindrome_linked_list.ts";

Deno.test("234. Palindrome Linked List", () => {
  assertStrictEquals(isPalindrome(createLinkedListNode([1, 2])), false);
  assertStrictEquals(isPalindrome(createLinkedListNode([1, 2, 2, 1])), true);
  assertStrictEquals(
    isPalindrome(createLinkedListNode([1, 2, 1, 3, 1, 2, 1])),
    true
  );
  assertStrictEquals(
    isPalindrome(createLinkedListNode([1, 2, 1, 3, 1, 3, 1])),
    false
  );
});
