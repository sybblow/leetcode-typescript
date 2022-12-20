
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import moveZeroes from "./move_zeroes.ts";

Deno.test("283. Move Zeroes", () => {
  const values = [0, 1, 0, 3, 12];

  moveZeroes(values);

  assertEquals(values, [1, 3, 12, 0, 0]);
});
