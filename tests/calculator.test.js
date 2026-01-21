const calculator = require('../src/calculator');

describe('Calculator Module', () => {
  // Add Function Tests
  describe('add function', () => {
    test('should correctly add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should correctly add a positive and a negative number', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should correctly add two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should handle zero correctly', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should handle floating point numbers', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle large numbers', () => {
       const largeNumber = 1e15;
       expect(calculator.add(largeNumber, 1)).toBe(1000000000000001);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.add('2', 3)).toThrow('Inputs must be numbers');
      expect(() => calculator.add(2, '3')).toThrow('Inputs must be numbers');
      expect(() => calculator.add(null, 3)).toThrow('Inputs must be numbers');
      expect(() => calculator.add(2, undefined)).toThrow('Inputs must be numbers');
    });
  });

  // Subtract Function Tests
  describe('subtract function', () => {
    test('should correctly subtract two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should correctly subtract a positive number from a negative number', () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });

    test('should correctly subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero correctly', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should handle large numbers', () => {
       const largeNumber = 1e15;
       expect(calculator.subtract(largeNumber, 1)).toBe(999999999999999);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.subtract('5', 3)).toThrow('Inputs must be numbers');
      expect(() => calculator.subtract(5, '3')).toThrow('Inputs must be numbers');
    });
  });

  // Multiply Function Tests
  describe('multiply function', () => {
    test('should correctly multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should correctly multiply a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('should correctly multiply two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('should handle multiplication by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('should handle large numbers', () => {
        expect(calculator.multiply(10000, 10000)).toBe(100000000);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.multiply('2', 3)).toThrow('Inputs must be numbers');
      expect(() => calculator.multiply(2, '3')).toThrow('Inputs must be numbers');
    });
  });

  // Divide Function Tests
  describe('divide function', () => {
    test('should correctly divide two positive numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('should correctly divide with negative numbers', () => {
      expect(calculator.divide(-6, 2)).toBe(-3);
      expect(calculator.divide(6, -2)).toBe(-3);
      expect(calculator.divide(-6, -2)).toBe(3);
    });

    test('should handle division resulting in floating point numbers', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle division of zero', () => {
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should handle large numbers', () => {
        expect(calculator.divide(1e10, 2)).toBe(5e9);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.divide('6', 2)).toThrow('Inputs must be numbers');
      expect(() => calculator.divide(6, '2')).toThrow('Inputs must be numbers');
    });
  });
});
