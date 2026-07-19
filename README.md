# Unit Testing Project

## Overview

This repository contains a set of JavaScript utilities and accompanying unit tests that demonstrate various testing techniques using **Vitest or Jest**. The project showcases asynchronous functions, custom hooks, data validation, and simple transformation utilities, all organized with clear modular structure.

## Prerequisites

- **Node.js** (>= 24)
- **Yarn** (or npm) for package management

## Installation

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/goni715/unit-testing
cd unit-testing

# Install dependencies
yarn install   # or `npm install`
```

## Project Structure

```
unit-testing/
├─ __mocks__/                # Mock implementations for testing
├─ async.js                  # Example async functions
├─ async.test.js             # Tests for async.js
├─ hooks.js                  # Simple custom hook implementations
├─ hooks.test.js             # Tests for hooks.js
├─ main.js                   # Core application logic
├─ main.test.js              # Tests for main.js
├─ mockSpies/                # Helpers for spying on functions
├─ transformToNumber.js       # Utility to convert values to numbers
├─ transformToNumber.test.js  # Tests for transformToNumber.js
├─ validation.js             # Data validation utilities
├─ validation.test.js        # Tests for validation.js
├─ package.json              # Project metadata and scripts
├─ yarn.lock                 # Yarn lockfile
└─ README.md                 # Project documentation (this file)
```

## Scripts

The `package.json` defines the following useful scripts:

- `yarn test` – Runs all Vitest or Jest tests in watch mode.

You can run a script with:

```bash
yarn <script-name>
```

## Running Tests

Execute the test suite with:

```bash
yarn test
```

For a single test file:

```bash
yarn test async.test.js
```

The tests cover:
- Asynchronous behavior (`async.js`)
- Hook logic (`hooks.js`)
- Core functions (`main.js`)
- Number transformation (`transformToNumber.js`)
- Validation utilities (`validation.js`)


