/**
 * Simple Calculator Module
 * 
 * Provides basic arithmetic operations for demonstration purposes.
 * This module is intentionally simple for Jules to work with.
 *
 * @module calculator
 */

/**
 * Validates that inputs are numbers
 * @param {number} a - First input
 * @param {number} b - Second input
 * @throws {TypeError} If inputs are not numbers
 * @private
 */
function validateInputs(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
}

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @throws {TypeError} If inputs are not numbers
 * @example
 * const calculator = require('./calculator');
 * const sum = calculator.add(2, 3); // returns 5
 */
function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  validateInputs(a, b);
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 * @throws {TypeError} If inputs are not numbers
 * @example
 * const calculator = require('./calculator');
 * const diff = calculator.subtract(5, 3); // returns 2
 */
function subtract(a, b) {
  console.log(`Subtracting ${b} from ${a}`);
  validateInputs(a, b);
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 * @throws {TypeError} If inputs are not numbers
 * @example
 * const calculator = require('./calculator');
 * const product = calculator.multiply(2, 3); // returns 6
 */
function multiply(a, b) {
  console.log(`Multiplying ${a} and ${b}`);
  validateInputs(a, b);
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If b is zero
 * @throws {TypeError} If inputs are not numbers
 * @example
 * const calculator = require('./calculator');
 * const quotient = calculator.divide(6, 2); // returns 3
 */
function divide(a, b) {
  console.log(`Dividing ${a} by ${b}`);
  validateInputs(a, b);
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
