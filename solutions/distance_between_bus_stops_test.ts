
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import distanceBetweenBusStops from "./distance_between_bus_stops.ts";

Deno.test("1184. Distance Between Bus Stops", () => {
  assertStrictEquals(distanceBetweenBusStops([1, 2, 3, 4], 0, 1), 1);
  assertStrictEquals(distanceBetweenBusStops([1, 2, 3, 4], 0, 2), 3);
  assertStrictEquals(distanceBetweenBusStops([1, 2, 3, 4], 0, 3), 4);
});
