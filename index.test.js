const { sum, substract } = require('./index.js');

test('sum of 1 and 2 to be equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('2 minus 1 to be equal to 1', () => {
  expect(substract(2, 1)).toBe(1);
});

test('string + string', () => {
  expect(() => sum("string" + "string").toThrow('input should be numbers only'));
});
