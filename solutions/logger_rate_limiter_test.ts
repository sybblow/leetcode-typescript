
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import Logger from "./logger_rate_limiter.ts";

Deno.test("359. Logger Rate Limiter", () => {
  const logger = new Logger();

  assertStrictEquals(logger.shouldPrintMessage(1, "foo"), true);
  assertStrictEquals(logger.shouldPrintMessage(2, "bar"), true);
  assertStrictEquals(logger.shouldPrintMessage(3, "foo"), false);
  assertStrictEquals(logger.shouldPrintMessage(8, "bar"), false);
  assertStrictEquals(logger.shouldPrintMessage(10, "foo"), false);
  assertStrictEquals(logger.shouldPrintMessage(11, "foo"), true);
});
