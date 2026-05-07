const calculator = require('./src/calculator');

function benchmark(fn, name, iterations) {
  // Warmup - but let's suppress console.log during warmup to avoid too much spam if we want
  const originalLog = console.log;
  console.log = () => {};
  for (let i = 0; i < 1000; i++) {
    fn();
  }
  console.log = originalLog;

  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = process.hrtime.bigint();

  const elapsedMs = Number(end - start) / 1000000;
  // Use stderr so we can easily redirect stdout to /dev/null
  console.error(`${name} - ${iterations} iterations: ${elapsedMs.toFixed(3)} ms`);
  return elapsedMs;
}

const iter = 100000;
benchmark(() => calculator.add(10, 5), 'add', iter);
benchmark(() => calculator.subtract(10, 5), 'subtract', iter);
benchmark(() => calculator.multiply(10, 5), 'multiply', iter);
benchmark(() => calculator.divide(10, 5), 'divide', iter);
