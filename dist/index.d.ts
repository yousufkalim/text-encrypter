/**
 * Encrypts a given plain text using the Caesar Cipher
 * @param plainText {string} - The plain text to be encrypted
 * @param shift {number} - The number of shifts to be applied to the plain text
 * @param ignoreSpecialChars {boolean} - Whether to ignore special characters or not
 * @returns {string} - The encrypted cipher text
 */
declare const encrypt: (plainText: string, shift?: number, ignoreSpecialChars?: boolean) => string;
/**
 * Decrypts a given cipher text using the Caesar Cipher
 * @param cipherText {string} - The cipher text to be decrypted
 * @param shift {number} - The number of shifts to be applied to the cipher text
 * @param ignoreSpecialChars {boolean} - Whether to ignore special characters or not
 * @returns {string} - The decrypted plain text
 */
declare const decrypt: (cipherText: string, shift?: number, ignoreSpecialChars?: boolean) => string;
export { encrypt, decrypt };
