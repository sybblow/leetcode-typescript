
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import decodeString from "./decode_string.ts";

Deno.test("394. Decode String", () => {
  assertStrictEquals(decodeString("3[a]2[bc]"), "aaabcbc");
  assertStrictEquals(decodeString("3[a2[c]]"), "accaccacc");
  assertStrictEquals(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
  assertStrictEquals(
    decodeString("a2[b3[c4[d]e]]f3[g]h"),
    "abcddddecddddecddddebcddddecddddecddddefgggh"
  );
});
