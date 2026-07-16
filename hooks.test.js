import { beforeEach, expect, it, test } from "vitest";
import { User } from "./hooks";

const email = "goni@gmail.com";
let user;

beforeEach(() => {
  user = new User(email);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

test("should update the email", () => {
  const newEmail = "evan@gmail.com";

  user.updateEmail(newEmail);

  expect(user.email).toBe(newEmail);
});

it("should clear the email", () => {
  user.clearEmail("");

  expect(user.email).toBe("");
});

test("should store the provided email value", () => {
  expect(user.email).toBe(email);
});
