// caesarCipher.test.js
const caesarCipher = require('./caesarCipher').default;  // Assuming the function is exported

test('shifts letters by 3 positions', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves the letter case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves non-alphabetical characters unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('wraps around the alphabet when shifting', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('z', 1)).toBe('a');
});

test('handles negative shifts', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('handles large shift values', () => {
  expect(caesarCipher('abc', 26)).toBe('abc'); // Same string, shift of 26 (full alphabet rotation)
  expect(caesarCipher('abc', 27)).toBe('bcd'); // One step after full rotation
});
