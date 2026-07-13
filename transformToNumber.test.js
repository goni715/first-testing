import { expect, test } from "vitest";
import { transformToNumber } from "./transformToNumber";

test("should return a number if a numeric string is provided", () => {
  const stringNumberValue = "7";
  const result = transformToNumber(stringNumberValue);

  expect(result).toBeTypeOf("number");
  // expect(result).not.toBeTypeOf("string");
  expect(isNaN(result)).not.toBe(true);
});
