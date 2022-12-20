
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import isStrobogrammatic from "./strobogrammatic_number.ts";

Deno.test("246. Strobogrammatic Number", () => {
  assertStrictEquals(isStrobogrammatic("69"), true);
  assertStrictEquals(isStrobogrammatic("818"), true);
  assertStrictEquals(isStrobogrammatic("962"), false);
  assertStrictEquals(isStrobogrammatic("1818"), false);
  assertStrictEquals(isStrobogrammatic("0"), true);
  assertStrictEquals(isStrobogrammatic("6"), false);
  assertStrictEquals(isStrobogrammatic(""), true);
});
