
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import floodFill from "./flood_fill.ts";

Deno.test("733. Flood Fill", () => {
  assertEquals(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
  ]);
  assertEquals(
    floodFill(
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0]
      ],
      3,
      3,
      255
    ),
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 1, 255, 255, 255],
      [0, 1, 255, 255, 255],
      [0, 1, 255, 255, 255]
    ]
  );
  assertEquals(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1), [
    [0, 0, 0],
    [0, 1, 1]
  ]);
});
