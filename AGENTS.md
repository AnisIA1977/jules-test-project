# Jules Agent Configuration

## Project Context

This is a test project designed to demonstrate Google Jules capabilities.

### Technology Stack
- **Runtime**: Node.js (v16+)
- **Testing Framework**: Jest
- **Linter**: ESLint
- **Language**: JavaScript

### Architecture Notes

#### `src/` Directory
- `calculator.js` - Core arithmetic operations
- Functions are well-documented with JSDoc comments

#### `tests/` Directory
- Unit tests for all calculator functions
- Each test file matches source file name: `calculator.test.js`

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

### Commands Jules Will Need

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Start the application
npm start
