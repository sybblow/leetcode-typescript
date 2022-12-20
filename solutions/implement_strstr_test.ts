
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import strStr from "./implement_strstr.ts";

Deno.test("28. Implement strStr()", () => {
  assertStrictEquals(strStr("hello", "ll"), 2);
  assertStrictEquals(strStr("aaaaa", "bba"), -1);
  assertStrictEquals(strStr("llooll", "ll"), 0);
  assertStrictEquals(strStr("llooll", "ool"), 2);
  assertStrictEquals(strStr("hello", ""), 0);
  assertStrictEquals(strStr("", "a"), -1);
  assertStrictEquals(strStr("", ""), 0);
  assertStrictEquals(strStr("aaa", "aaaa"), -1);
  assertStrictEquals(strStr("hello", "lo"), 3);
});
