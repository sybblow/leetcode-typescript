
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import subsets from "./subsets.ts";

Deno.test("78. Subsets", () => {
  assertEquals(
    subsets([1, 2, 3]).sort(),
    [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []].sort()
  );
});
