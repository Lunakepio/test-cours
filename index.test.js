const { sum, subtract, multiply, divide } = require('./index.js');

test('sum of 1 and 2 to be equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of -1 and -2 to be equal to -3', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('sum of 0 and 0 to be equal to 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sum with non-number arguments to throw TypeError', () => {
  expect(() => sum('a', 2)).toThrow('Both arguments must be numbers');
  expect(() => sum(1, 'b')).toThrow('Both arguments must be numbers');
  expect(() => sum('a', 'b')).toThrow('Both arguments must be numbers');
});

test('sum with Infinity arguments to throw RangeError', () => {
  expect(() => sum(Infinity, 2)).toThrow('Arguments must be finite numbers');
  expect(() => sum(1, Infinity)).toThrow('Arguments must be finite numbers');
  expect(() => sum(Infinity, Infinity)).toThrow('Arguments must be finite numbers');
});


test('2 minus 1 to be equal to 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('-2 minus -1 to be equal to -1', () => {
  expect(subtract(-2, -1)).toBe(-1);
});

test('0 minus 0 to be equal to 0', () => {
  expect(subtract(0, 0)).toBe(0);
});

test('subtract with non-number arguments to throw TypeError', () => {
  expect(() => subtract('a', 2)).toThrow('Both arguments must be numbers');
  expect(() => subtract(1, 'b')).toThrow('Both arguments must be numbers');
  expect(() => subtract('a', 'b')).toThrow('Both arguments must be numbers');
});

test('subtract with Infinity arguments to throw RangeError', () => {
  expect(() => subtract(Infinity, 2)).toThrow('Arguments must be finite numbers');
  expect(() => subtract(1, Infinity)).toThrow('Arguments must be finite numbers');
  expect(() => subtract(Infinity, Infinity)).toThrow('Arguments must be finite numbers');
});


test('2 multiplied by 3 to be equal to 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('-2 multiplied by -3 to be equal to 6', () => {
  expect(multiply(-2, -3)).toBe(6);
});

test('0 multiplied by 0 to be equal to 0', () => {
  expect(multiply(0, 0)).toBe(0);
});

test('multiply with non-number arguments to throw TypeError', () => {
  expect(() => multiply('a', 2)).toThrow('Both arguments must be numbers');
  expect(() => multiply(1, 'b')).toThrow('Both arguments must be numbers');
  expect(() => multiply('a', 'b')).toThrow('Both arguments must be numbers');
});

test('multiply with Infinity arguments to throw RangeError', () => {
  expect(() => multiply(Infinity, 2)).toThrow('Arguments must be finite numbers');
  expect(() => multiply(1, Infinity)).toThrow('Arguments must be finite numbers');
  expect(() => multiply(Infinity, Infinity)).toThrow('Arguments must be finite numbers');
});


test('6 divided by 3 to be equal to 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('-6 divided by -3 to be equal to 2', () => {
  expect(divide(-6, -3)).toBe(2);
});

test('0 divided by 1 to be equal to 0', () => {
  expect(divide(0, 1)).toBe(0);
});

test('divide with non-number arguments to throw TypeError', () => {
  expect(() => divide('a', 2)).toThrow('Both arguments must be numbers');
  expect(() => divide(1, 'b')).toThrow('Both arguments must be numbers');
  expect(() => divide('a', 'b')).toThrow('Both arguments must be numbers');
});

test('divide with Infinity arguments to throw RangeError', () => {
  expect(() => divide(Infinity, 2)).toThrow('Arguments must be finite numbers');
  expect(() => divide(1, Infinity)).toThrow('Arguments must be finite numbers');
  expect(() => divide(Infinity, Infinity)).toThrow('Arguments must be finite numbers');
});

test('divide by zero to throw RangeError', () => {
  expect(() => divide(1, 0)).toThrow('Division by zero is not allowed');
});
