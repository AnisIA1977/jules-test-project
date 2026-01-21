/**
 * Main Application Entry Point
 * 
 * Simple demo showing how to use the calculator module
 */

const { add, subtract, multiply, divide } = require('./calculator');

console.log('🧮 Calculator Demo\n');

console.log('Examples:');
console.log(`add(10, 5) = ${add(10, 5)}`);
console.log(`subtract(10, 5) = ${subtract(10, 5)}`);
console.log(`multiply(10, 5) = ${multiply(10, 5)}`);
console.log(`divide(10, 5) = ${divide(10, 5)}`);

console.log('\nEdge cases:');
console.log(`add(-5, 5) = ${add(-5, 5)}`);
console.log(`multiply(0, 100) = ${multiply(0, 100)}`);
console.log(`divide(1, 3) = ${divide(1, 3)}`);

console.log('\nTry "npm test" to run the unit tests!');
