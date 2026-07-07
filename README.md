# TypeScriptDemo

A minimal Playwright test project configured for TypeScript.

## Project setup

Dependencies are managed with npm.

### Install

```bash
npm install
```

## Available scripts

```bash
npm test
npm run test:headed
npm run test:ui
npm run test:debug
npm run test:report
```

- `npm test` runs Playwright tests in headless mode.
- `npm run test:headed` runs tests with a browser window.
- `npm run test:ui` runs tests in UI mode with interactive test runner.
- `npm run test:debug` runs tests in debug mode for troubleshooting.
- `npm run test:report` opens the Playwright HTML report.

## TypeScript configuration

This project includes `tsconfig.json` configured for:

- `commonjs` modules
- `ES2020` target
- `DOM` and `node` type support
- strict type checking

## Test files

Tests are located in the `tests/` directory:

- `tests/example.spec.ts` - Basic example tests
- `tests/practice.spec.ts` - Comprehensive practice test suite with optimized tests

### Practice Test Suite (`practice.spec.ts`)

An optimized test file with consolidated test cases focusing on core Playwright features:

**Optimizations:**
- Reduced test count from 90 to 12 consolidated tests
- Shared page instance across all tests for efficiency
- Helper functions to reduce code duplication
- Grouped related test scenarios for better organization
- Used `beforeAll`/`afterAll` instead of `beforeEach`/`afterEach` for performance

**Test Coverage:**

1. **Page Navigation & Structure**
   - URL validation
   - Page title verification
   - Content presence checks

2. **DOM Element Location**
   - Tables, inputs, buttons, links
   - Lists, paragraphs, headings
   - Forms, dropdowns, data attributes
   - Elements with IDs and classes

3. **Table Structure Verification**
   - Table headers, rows, and cells
   - Table integrity validation

4. **Accessibility**
   - Main content area detection
   - Navigation elements presence

5. **Form Interactions**
   - Text input filling
   - Input value verification

6. **Page Content Quality**
   - Text content verification
   - Content length validation

7. **Responsive Design**
   - Window size validation
   - Layout dimension checks

8. **Performance**
   - Page load time verification
   - Layout scrolling validation

9. **Styling & CSS**
   - Element styling verification
   - Computed styles checking

10. **Data Attributes**
    - Data-driven element detection

## Playwright config

The test runner is configured in `playwright.config.ts` with:

- Chromium, Firefox, and WebKit projects
- HTML reporter
- retry behavior based on CI
- trace collection on first retry

## GitHub push

If you want to push this project to GitHub, initialize git and add a remote before pushing:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```
