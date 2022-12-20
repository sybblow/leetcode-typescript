
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import numIslands from "./number_of_islands.ts";

Deno.test("200. Number of Islands", () => {
  assertStrictEquals(
    numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ]),
    1
  );
  assertStrictEquals(
    numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ]),
    3
  );
});
