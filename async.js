import CryptoJS from "crypto-js";

export const encryptMessage = (message, key, callback) => {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
};

export const encryptMessagePromise = (message, key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
};

const message = {
  name: "Goni",
  age: 25,
  password: 12345,
};

const secretKey = "secret@";

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
  console.log(encryptedMessage);
});

encryptMessagePromise(JSON.stringify(message), secretKey).then((encryptedMessage)=> console.log(encryptedMessage))