
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import mySqrt from "./sqrtx.ts";

Deno.test("69. Sqrt(x)", () => {
  assertStrictEquals(mySqrt(16), 4);
  assertStrictEquals(mySqrt(17), 4);
  assertStrictEquals(mySqrt(15), 3);
  assertStrictEquals(mySqrt(8), 2);
  assertStrictEquals(mySqrt(1), 1);
  assertStrictEquals(mySqrt(0), 0);
  assertStrictEquals(mySqrt(Number.MAX_SAFE_INTEGER), 94906265);
});
