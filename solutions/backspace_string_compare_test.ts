
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import backspaceCompare from "./backspace_string_compare.ts";

Deno.test("844. Backspace String Compare", () => {
  assertStrictEquals(backspaceCompare("ab#c", "ad#c"), true);
  assertStrictEquals(backspaceCompare("ab##", "c#d#"), true);
  assertStrictEquals(backspaceCompare("a##c", "#a#c"), true);
  assertStrictEquals(backspaceCompare("a#c", "b"), false);
});
