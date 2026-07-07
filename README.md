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
- `tests/practice.spec.ts` - Comprehensive practice test suite covering core Playwright features

### Practice Test Suite (`practice.spec.ts`)

A practical test file with 30+ test cases covering essential Playwright features:

**Test Categories:**

1. **Page Navigation & Structure**
   - Page load verification
   - URL validation
   - Content presence checks

2. **Form & Input Handling**
   - Text input location and interaction
   - Search functionality
   - Input value verification

3. **Button & Link Interaction**
   - Button location and clicking
   - Link verification
   - Link count validation

4. **Table Testing**
   - Static table structure
   - Table headers and cells
   - Row and cell content verification

5. **Element Locators**
   - Headings, paragraphs, lists
   - Elements with data attributes
   - Elements with IDs and classes

6. **Accessibility Features**
   - Main content areas
   - Navigation elements
   - ARIA role detection

7. **Interaction Testing**
   - Text input and filling
   - Button clicking
   - Link navigation

8. **Performance & Styling**
   - Page load timing
   - Element styling verification
   - Responsive design testing

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
