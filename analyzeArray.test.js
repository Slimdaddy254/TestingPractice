// analyzeArray.test.js
const analyzeArray = require('./analyzeArray');  // Assuming it's exported

test('analyzes an array of numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('handles empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0
  });
});
