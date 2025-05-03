# JavaScript Notes

## Introduction
- JavaScript is a versatile, high-level programming language.
- It is primarily used for web development to create interactive and dynamic web pages.
- JavaScript can run on both the client-side (browser) and server-side (Node.js).

## Key Features
- **Lightweight**: Designed for easy integration with HTML and CSS.
- **Dynamic Typing**: Variables can hold different data types.
- **Event-Driven**: Handles user interactions like clicks, keypresses, etc.
- **Prototype-Based**: Supports object-oriented programming through prototypes.

## Data Types
1. **Primitive Types**:
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol (ES6)
    - BigInt (ES11)
2. **Non-Primitive Types**:
    - Object
    - Array
    - Function

## Variables
- Declared using `var`, `let`, or `const`.
- `let` and `const` are block-scoped (introduced in ES6).
- Example:
  ```javascript
  let name = "John";
  const age = 25;
  var isActive = true;
  ```

## Functions
- Functions are reusable blocks of code.
- Syntax:
  ```javascript
  function greet(name) {
     return `Hello, ${name}!`;
  }
  ```
- Arrow Functions (ES6):
  ```javascript
  const add = (a, b) => a + b;
  ```

## DOM Manipulation
- JavaScript can interact with the Document Object Model (DOM) to update HTML and CSS dynamically.
- Example:
  ```javascript
  document.getElementById("demo").innerHTML = "Hello World!";
  ```

## ES6+ Features
- Template Literals
- Destructuring
- Spread and Rest Operators
- Promises and Async/Await
- Modules (import/export)

## Common Use Cases
- Form validation
- Animations
- Fetching data from APIs
- Building single-page applications (SPAs)

## Tools and Frameworks
- Libraries: jQuery, Lodash
- Frameworks: React, Angular, Vue.js
- Runtime: Node.js

## Best Practices
- Use `let` and `const` instead of `var`.
- Write modular and reusable code.
- Avoid global variables.
- Use strict mode (`'use strict';`) to catch common errors.
