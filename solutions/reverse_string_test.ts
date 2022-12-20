
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import reverseString from "./reverse_string.ts";

Deno.test("344. Reverse String", () => {
  const chars1 = ["h", "e", "l", "l", "o"];

  reverseString(chars1);

  assertEquals(chars1, ["o", "l", "l", "e", "h"]);

  const chars2 = ["H", "a", "n", "n", "a", "h"];

  reverseString(chars2);

  assertEquals(chars2, ["h", "a", "n", "n", "a", "H"]);
});
