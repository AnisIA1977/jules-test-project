# Jules Agent Configuration

## Project Context

This is a test project designed to demonstrate Google Jules capabilities.

### Technology Stack
- **Runtime**: Node.js (v16+)
- **Testing Framework**: Jest
- **Linter**: ESLint
- **Language**: JavaScript

### Documentation

- **[API Reference](docs/API.md)**: Detailed documentation of calculator functions (parameters, returns, examples).
- **[User Guide](docs/GUIDE.md)**: Instructions on installation, setup, usage, and testing.

### Quick Start

#### Installation

```bash
npm install
```

#### Running Tests

```bash
npm test
```

### Module Overview

The `src/calculator.js` module provides the following functions:

- `add(a, b)`: Adds two numbers.
- `subtract(a, b)`: Subtracts `b` from `a`.
- `multiply(a, b)`: Multiplies two numbers.
- `divide(a, b)`: Divides `a` by `b`.

See [docs/API.md](docs/API.md) for more details.

### Development Workflow

1. **Make changes** in `src/` directory
2. **Write tests** in `tests/` directory with `test.js` suffix
3. **Run tests** with `npm test`
4. **Lint code** with `npm run lint`

### Conventions

- Use **JSDoc** comments for all functions
- Keep functions **pure** (no side effects)
- Test **happy path** and **edge cases**
- Use **descriptive variable names**

### Known Limitations

- No external API calls
- No database operations
- Simple arithmetic only (for now)
