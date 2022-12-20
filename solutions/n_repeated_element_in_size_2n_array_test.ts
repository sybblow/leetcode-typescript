
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import repeatedNTimes from "./n_repeated_element_in_size_2n_array.ts";

Deno.test("961. N-Repeated Element in Size 2N Array", () => {
  assertStrictEquals(repeatedNTimes([1, 2, 3, 3]), 3);
  assertStrictEquals(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
  assertStrictEquals(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
  assertStrictEquals(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5);
});
