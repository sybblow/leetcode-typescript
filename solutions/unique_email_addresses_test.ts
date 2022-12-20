
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import numUniqueEmails from "./unique_email_addresses.ts";

Deno.test("929. Unique Email Addresses", () => {
  assertStrictEquals(
    numUniqueEmails([
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com"
    ]),
    2
  );
  assertStrictEquals(
    numUniqueEmails([
      "testemail@leetcode.com",
      "testemail1@leetcode.com",
      "testemail+david@lee.tcode.com"
    ]),
    3
  );
});
