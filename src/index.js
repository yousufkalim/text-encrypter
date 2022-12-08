import alphabet from './utils/alphabet.js';

const encrypt = (plainText, shift = 1, ignoreSpecialChars = true) => {
  let cipherArr = [];
  let cipherLetter;

  plainText.split('').map((letter) => {
    if (ignoreSpecialChars) {
      letter = alphabet.includes(letter.toLowerCase()) ? letter : ' ';
    }
    let code = letter.charCodeAt(letter);
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

const decrypt = (cipherText, shift = 1, ignoreSpecialChars = true) => {
  let plainArr = [];
  let plainLetter;

  cipherText.split('').map((cipher) => {
    if (ignoreSpecialChars) {
      cipher = alphabet.includes(cipher.toLowerCase()) ? cipher : ' ';
    }
    let code = cipher.charCodeAt(cipher);
    if (cipher === ' ') {
      return plainArr.push(cipher);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      let diff = code - 65 - shift;
      if (diff >= 0) {
        plainLetter = String.fromCharCode((diff % 26) + 65);
      } else {
        plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
      }
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      let diff = code - 97 - shift;
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
