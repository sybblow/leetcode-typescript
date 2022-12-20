
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import uniquePaths from "./unique_paths.ts";

Deno.test("62. Unique Paths", () => {
  assertStrictEquals(uniquePaths(3, 2), 3);
  assertStrictEquals(uniquePaths(7, 3), 28);
});
