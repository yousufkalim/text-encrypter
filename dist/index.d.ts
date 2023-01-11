declare const encrypt: (plainText: string, shift?: number, ignoreSpecialChars?: boolean) => string;
declare const decrypt: (cipherText: string, shift?: number, ignoreSpecialChars?: boolean) => string;
export { encrypt, decrypt };
