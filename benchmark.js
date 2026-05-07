const calculator = require('./src/calculator');

function runBenchmark() {
  const iterations = 100000;

  // Warm-up phase
  for (let i = 0; i < 1000; i++) {
    calculator.add(1, 1);
    calculator.subtract(2, 1);
    calculator.multiply(2, 2);
    calculator.divide(4, 2);
  }

  // Measurement phase
  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) {
    calculator.add(i, 2);
    calculator.subtract(i, 2);
    calculator.multiply(i, 2);
    // don't divide by zero! i starts at 0, divide by 2 is fine
    calculator.divide(i, 2);
  }
  const end = process.hrtime.bigint();

  const elapsedMs = Number(end - start) / 1000000;
  console.error(`Time taken for ${iterations} iterations: ${elapsedMs} ms`);
}

runBenchmark();
