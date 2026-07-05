import { it, expect, test } from "vitest";
import { add } from "./main";

it("Should return the correct sum if an array of number is provided", () => {
  //Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cv) => acc + cv);

  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});

it("It Should return NaN if at least one invalid number is provided", () => {
  //Arrange
  const numbers = [1, "gg", 3];

  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBeNaN();
});

test("It Should return correct sum if an array of numeric string is provided", () => {
  //Arrange
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, cv) => Number(acc) + Number(cv));

  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});
