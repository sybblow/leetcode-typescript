
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import licenseKeyFormatting from "./license_key_formatting.ts";

Deno.test("482. License Key Formatting", () => {
  assertStrictEquals(licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W");
  assertStrictEquals(licenseKeyFormatting("2-5g-3-J", 2), "2-5G-3J");
});
