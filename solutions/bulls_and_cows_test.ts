
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import getHint from "./bulls_and_cows.ts";

Deno.test("299. Bulls and Cows", () => {
  assertStrictEquals(getHint("456", "11"), "0A0B")
  assertStrictEquals(getHint("1807", "7810"), "1A3B");
  assertStrictEquals(getHint("1123", "0111"), "1A1B");
  assertStrictEquals(getHint("1234", "5678"), "0A0B");
  assertStrictEquals(getHint("1234", "1234"), "4A0B");
  assertStrictEquals(getHint("1234", "4123"), "0A4B");
  assertStrictEquals(getHint("1122", "0001"), "0A1B");
  assertStrictEquals(getHint("11", "10"), "1A0B");
});
