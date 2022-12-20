
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import numberOfDays from "./number_of_days_in_a_month.ts";

Deno.test("1118. Number of Days in a Month", () => {
  assertStrictEquals(numberOfDays(1992, 7), 31);
  assertStrictEquals(numberOfDays(2000, 2), 29);
  assertStrictEquals(numberOfDays(1900, 2), 28);
});
