import * as CryptoJS from "crypto-js";

const key = 'secret-system-key';

export const encrypt = (value) => {
  const encrypted = CryptoJS.AES.encrypt(value, key).toString();
  return encrypted;
};

export const decrypt = (value) => {
  const bytes = CryptoJS.AES.decrypt(value, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};