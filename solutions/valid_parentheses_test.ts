
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isValid from "./valid_parentheses.ts";

Deno.test("20. Valid Parentheses", () => {
  assertStrictEquals(isValid("()"), true);
  assertStrictEquals(isValid("()[]{}"), true);
  assertStrictEquals(isValid("(]"), false);
  assertStrictEquals(isValid("([)]"), false);
  assertStrictEquals(isValid("{[]}"), true);
  assertStrictEquals(isValid("["), false);
  assertStrictEquals(isValid("[{"), false);
});
