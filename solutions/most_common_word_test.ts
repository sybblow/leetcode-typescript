
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import mostCommonWord from "./most_common_word.ts";

Deno.test("819. Most Common Word", () => {
  assertStrictEquals(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
      "hit"
    ]),
    "ball"
  );
  assertStrictEquals(
    mostCommonWord(
      "Bob hit a ball, the hit BALL flew far after it was hit.",
      []
    ),
    "hit"
  );
  assertStrictEquals(mostCommonWord("Bob", []), "bob");
  assertStrictEquals(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]), "b");
});
