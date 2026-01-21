# Calculator API Reference

This document provides detailed documentation for the `calculator` module functions.

## `add(a, b)`

Adds two numbers.

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `a` | `number` | First number |
| `b` | `number` | Second number |

### Returns

- `number`: Sum of `a` and `b`.

### Throws

- `TypeError`: If inputs are not numbers.

### Example

```javascript
const calculator = require('./calculator');
const sum = calculator.add(2, 3); // returns 5
```

---

## `subtract(a, b)`

Subtracts two numbers.

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `a` | `number` | First number |
| `b` | `number` | Second number |

### Returns

- `number`: Difference of `a` and `b`.

### Throws

- `TypeError`: If inputs are not numbers.

### Example

```javascript
const calculator = require('./calculator');
const diff = calculator.subtract(5, 3); // returns 2
```

---

## `multiply(a, b)`

Multiplies two numbers.

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `a` | `number` | First number |
| `b` | `number` | Second number |

### Returns

- `number`: Product of `a` and `b`.

### Throws

- `TypeError`: If inputs are not numbers.

### Example

```javascript
const calculator = require('./calculator');
const product = calculator.multiply(2, 3); // returns 6
```

---

## `divide(a, b)`

Divides two numbers.

### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `a` | `number` | Dividend |
| `b` | `number` | Divisor |

### Returns

- `number`: Quotient of `a` and `b`.

### Throws

- `Error`: If `b` is zero.
- `TypeError`: If inputs are not numbers.

### Example

```javascript
const calculator = require('./calculator');
const quotient = calculator.divide(6, 2); // returns 3
```
