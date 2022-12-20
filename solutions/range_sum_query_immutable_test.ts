
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import NumArray from "./range_sum_query_immutable.ts";

Deno.test("303. Range Sum Query - Immutable", () => {
  assertStrictEquals(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 2), 1);
  assertStrictEquals(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(2, 5), -1);
  assertStrictEquals(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 5), -3);
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 8),
    4830
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(4, 5),
    6383
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(9, 11),
    -15886
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(2, 11),
    -5095
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 12),
    -15759
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(9, 12),
    -20589
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(2, 5),
    11228
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 9),
    -1149
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(5, 9),
    -9683
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 1),
    -5961
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(12, 12),
    -4703
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(6, 7),
    -6688
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(5, 8),
    -3704
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(1, 1),
    2300
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(6, 7),
    -6688
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(10, 11),
    -9907
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(11, 12),
    -9319
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(7, 8),
    -1851
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(4, 11),
    -9940
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(8, 9),
    272
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(4, 11),
    -9940
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(2, 9),
    4812
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(2, 6),
    12642
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(11, 12),
    -9319
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(5, 8),
    -3704
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(11, 11),
    -4616
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(1, 9),
    7112
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(12, 12),
    -4703
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(10, 10),
    -5291
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(4, 7),
    -305
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(12, 12),
    -4703
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(8, 10),
    -5019
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(7, 9),
    -7830
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(4, 7),
    -305
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 7),
    -1421
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(8, 9),
    272
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(10, 12),
    -14610
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 9),
    -1149
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(10, 12),
    -14610
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(7, 12),
    -22440
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(9, 9),
    -5979
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(0, 12),
    -15759
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(1, 3),
    7145
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(8, 8),
    6251
  );
  assertStrictEquals(
    new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]).sumRange(7, 10),
    -13121
  );
});
