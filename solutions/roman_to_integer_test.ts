
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import romanToInt from "./roman_to_integer.ts";

Deno.test("13. Roman to Integer", () => {
  assertStrictEquals(romanToInt("VI"), 6);
  assertStrictEquals(romanToInt("IV"), 4);
  assertStrictEquals(romanToInt("III"), 3);
  assertStrictEquals(romanToInt("IIII"), 4);
  assertStrictEquals(romanToInt("XIII"), 13);
  assertStrictEquals(romanToInt("MDCLXVI"), 1666);
  assertStrictEquals(romanToInt("MCDCXLXIV"), 1554);
  assertStrictEquals(romanToInt("CMCDXCXLIXIV"), 1443);
});
