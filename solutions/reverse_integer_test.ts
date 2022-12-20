
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import reverse from "./reverse_integer.ts";

Deno.test("7. Reverse Integer", () => {
  assertStrictEquals(reverse(123), 321);
  assertStrictEquals(reverse(-123), -321);
  assertStrictEquals(reverse(-12), -21);
  assertStrictEquals(reverse(120), 21);
  assertStrictEquals(reverse(1563847412), 0);
});
