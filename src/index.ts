/**
 * Index file for the package
 * @author Yousuf Kalim
 */
import alphabet from './utils/alphabet';

/**
 * Encrypts a given plain text using the Caesar Cipher
 * @param plainText {string} - The plain text to be encrypted
 * @param shift {number} - The number of shifts to be applied to the plain text
 * @param ignoreSpecialChars {boolean} - Whether to ignore special characters or not
 * @returns {string} - The encrypted cipher text
 */
const encrypt = (plainText: string, shift = 1, ignoreSpecialChars = true): string => {
  const cipherArr: string[] = [];
  let cipherLetter: string;

  plainText.split('').map((letter) => {
    if (ignoreSpecialChars) {
      letter = alphabet.includes(letter.toLowerCase()) ? letter : ' ';
    }
    const code: number = letter.charCodeAt(0);
    if (letter === ' ') {
      return cipherArr.push(letter);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return cipherArr.push(cipherLetter);
  });
  return cipherArr.join('');
};

/**
 * Decrypts a given cipher text using the Caesar Cipher
 * @param cipherText {string} - The cipher text to be decrypted
 * @param shift {number} - The number of shifts to be applied to the cipher text
 * @param ignoreSpecialChars {boolean} - Whether to ignore special characters or not
 * @returns {string} - The decrypted plain text
 */
const decrypt = (cipherText: string, shift = 1, ignoreSpecialChars = true): string => {
  const plainArr: string[] = [];
  let plainLetter: string;

  cipherText.split('').map((cipher) => {
    if (ignoreSpecialChars) {
      cipher = alphabet.includes(cipher.toLowerCase()) ? cipher : ' ';
    }
    const code: number = cipher.charCodeAt(0);
    if (cipher === ' ') {
      return plainArr.push(cipher);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      const diff = code - 65 - shift;
      if (diff >= 0) {
        plainLetter = String.fromCharCode((diff % 26) + 65);
      } else {
        plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
      }
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      const diff = code - 97 - shift;
      if (diff >= 0) {
        plainLetter = String.fromCharCode((diff % 26) + 97);
      } else {
        plainLetter = String.fromCharCode(((26 + diff) % 26) + 97);
      }
    }
    return plainArr.push(plainLetter);
  });
  return plainArr.join('');
};

export { encrypt, decrypt };
