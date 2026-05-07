const calculator = require('./src/calculator');

function benchmark() {
  // Warm-up phase
  for (let i = 0; i < 1000; i++) {
    calculator.add(1, 1);
    calculator.subtract(2, 1);
    calculator.multiply(2, 2);
    try { calculator.divide(4, 2); } catch (e) {}
  }

  const iterations = 100000;

  const start = process.hrtime.bigint();

  for (let i = 0; i < iterations; i++) {
    calculator.add(1, 1);
    calculator.subtract(2, 1);
    calculator.multiply(2, 2);
    calculator.divide(4, 2);
  }

  const end = process.hrtime.bigint();
  const timeTakenMs = Number(end - start) / 1e6;

  console.log(`Time taken for ${iterations} iterations: ${timeTakenMs} ms`);
}

benchmark();
