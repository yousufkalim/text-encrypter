# Text Encrypter

This is very small and lightweight library that is capable to encrypt and decrypt the text using caesar cipher mechanism.

## Installation

Install text-encrypter with npm/yarn

```bash
  npm install text-encrypter // npm
  yarn add text-encrypter // yarn
```

## Usage/Examples

#### Import

```javascript
import { encrypt, decrypt } from 'text-encrypter'; // ES6
const { encrypt, decrypt } = require('text-encrypter'); // CommonJS
```

#### Data

```javascript
const value = 'Hello World';
const shift = 3; // Default is 1
const ignoreSpecialCharacters = false; // Default is true
```

#### Usage

```javascript
// Encrypt
let encryptedText = encrypt(value, shift, ignoreSpecialCharacters);

// Decrypt
let decryptedText = decrypt(value, shift, ignoreSpecialCharacters);
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

## Author

**text-encrypter** © [Yousuf](https://github.com/yousufkalim)  
Authored and maintained by Yousuf Kalim.

> GitHub [@yousufkalim](https://github.com/yousufkalim) · LinkedIn [@yousufkalim](https://www.linkedin.com/in/yousufkalim/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
