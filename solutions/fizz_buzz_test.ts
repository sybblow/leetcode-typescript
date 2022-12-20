
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import fizzBuzz from "./fizz_buzz.ts";

Deno.test("412. Fizz Buzz", () => {
  assertEquals(fizzBuzz(1), ["1"]);
  assertEquals(fizzBuzz(3), ["1", "2", "Fizz"]);
  assertEquals(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
  assertEquals(fizzBuzz(20), [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
    "16",
    "17",
    "Fizz",
    "19",
    "Buzz"
  ]);
});
