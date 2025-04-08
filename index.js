function checkParameters(a, b, allowZeroDivisor = true) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (a === Infinity || b === Infinity || a === -Infinity || b === -Infinity) {
    throw new RangeError('Arguments must be finite numbers');
  }
  if (!allowZeroDivisor && b === 0) {
    throw new RangeError('Division by zero is not allowed');
  }
}

function sum(a, b) {
  checkParameters(a, b);
  return a + b;
}

function subtract(a, b) {
  checkParameters(a, b);
  return a - b;
}

function multiply(a, b) {
  checkParameters(a, b);
  return a * b;
}

function divide(a, b) {
  checkParameters(a, b, false);
  return a / b;
}

module.exports = { sum, subtract, multiply, divide };
