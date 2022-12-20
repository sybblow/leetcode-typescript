
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import solution from "./first_bad_version.ts";

Deno.test("278. First Bad Version", () => {
  const findFirstBadVersion = solution(version => version >= 4);

  assertStrictEquals(findFirstBadVersion(5), 4);
  assertStrictEquals(findFirstBadVersion(10), 4);
});
