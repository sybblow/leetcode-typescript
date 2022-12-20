
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import searchMatrix from "./search_a2d_matrix2.ts";

Deno.test("240. Search a 2D Matrix II", () => {
  assertStrictEquals(
    searchMatrix(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ],
      5
    ),
    true
  );
  assertStrictEquals(
    searchMatrix(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ],
      20
    ),
    false
  );
});
