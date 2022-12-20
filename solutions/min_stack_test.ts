
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import MinStack from "./min_stack.ts";

Deno.test("155. Min Stack", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assertStrictEquals(minStack.getMin(), -3);
  minStack.pop();
  assertStrictEquals(minStack.top(), 0);
  assertStrictEquals(minStack.getMin(), -2);
});
