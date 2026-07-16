import { expect, it, test } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJS from "crypto-js";


it("It should encrypt a message", async () => {
  const message = "Osman Goni";
  const secretKey = "589595";

  const encrptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, () => {
      resolve(message);
    });
  });

  expect(encrptedData).toBeDefined();
});

//async promise
it("should alse pass", async () => {
  const message = "Osman Goni";
  const secretKey = "589595";

  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

// I will get encrypted data & then I will decrypt it. will check whether it is correct or not
test("should encrypt the message correctly", async () => {
  const message = "Osman Goni";
  const secretKey = "589595";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  expect(encryptedData).toBeTypeOf("string");
  expect(encryptedData).not.toBe(message);

  // Decrypt and verify
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  expect(decryptedData).toBe(message);
});
