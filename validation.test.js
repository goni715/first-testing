import { describe, expect, it, test } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  test("should validate a correct email address", () => {
    const email = "example@gmail.com";
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  test("should throw an error if an invalid email is passed", () => {
    const email = "goni";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  test("should throw an error if an empty string is passed", () => {
    const email = " ";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow("Invalid Email Address");
  });

  test("should throw an error if an undefined email is passed", () => {
    const resultFn = () => validateEmail(undefined);
    expect(resultFn).toThrow();
  });
});

//test for validateArrayNotEmpty
describe("validateArrayNotEmpty()", () => {
  test("should validate a non-empty array", () => {
    const array = [2, 5];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).not.toThrow();
  });

  it("should throw an error for an empty error", () => {
    const resultFn = () => validateArrayNotEmpty([]);
    expect(resultFn).toThrow(`Array can't be empty`);
  });

  it("should throw an error for a non-array input", () => {
    const resultFn = () => validateArrayNotEmpty("hh");
    expect(resultFn).toThrow(`Array can't be empty`);
  });

  it("should throw an error for an undefined input", () => {
    expect(() => validateArrayNotEmpty(undefined)).toThrow(
      `Array can't be empty`,
    );
  });
});
