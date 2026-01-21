# Calculator Module User Guide

## Purpose and Usage

The **Simple Calculator Module** provides basic arithmetic operations for demonstration and educational purposes. It is designed to be:
- **Simple**: Easy to understand and integrate.
- **Robust**: Includes input validation and error handling.
- **Testable**: Comes with comprehensive unit tests.

### Usage

To use the calculator module in your project:

1.  **Require the module**:
    ```javascript
    const calculator = require('./path/to/src/calculator');
    ```

2.  **Call the functions**:
    Use `add`, `subtract`, `multiply`, or `divide` as needed.

    ```javascript
    try {
      const result = calculator.divide(10, 2);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
    ```

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure Node.js (v16 or higher recommended) is installed.
- **npm**: Node Package Manager (usually comes with Node.js).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd jules-test-project
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    This will install `jest` (for testing) and `eslint` (for linting).

## Running Tests

The project uses [Jest](https://jestjs.io/) for unit testing.

1.  **Run all tests**:
    ```bash
    npm test
    ```
    This command will execute all test files in the `tests/` directory.

2.  **Run linting**:
    ```bash
    npm run lint
    ```
    This ensures code quality and adherence to style guidelines.

### Test Coverage

The tests cover:
- **Happy Paths**: Standard integer and floating-point operations.
- **Edge Cases**: Zero, negative numbers, large numbers.
- **Error Handling**: Division by zero and invalid input types.
