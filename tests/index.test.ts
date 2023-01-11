import { expect, test } from '@jest/globals';
import { encrypt, decrypt } from '../src';

test('Check if plaintext to ciphertext conversion works', () => {
  const value = 'hackerrank';
  expect(encrypt(value, 5)).toEqual('mfhpjwwfsp');
});

test('Check if ciphertext to plaintext conversion works', () => {
  const value = 'mfhpjwwfsp';
  expect(decrypt(value, 5)).toEqual('hackerrank');
});
