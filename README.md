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
npm run test:report
```

- `npm test` runs Playwright tests in headless mode.
- `npm run test:headed` runs tests with a browser window.
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
- `tests/practice.spec.ts` - Comprehensive practice test suite with 85+ test cases

### Practice Test Suite (`practice.spec.ts`)

A comprehensive test file covering various Playwright testing scenarios from [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/p/playwrightpractice.html):

**Test Categories:**

1. **Locator Strategies**
   - `getByRole()` - Testing by button, toggle, form input, alert roles
   - `getByText()` - Locating elements by text content
   - `getByLabel()` - Finding labeled form inputs
   - `getByPlaceholder()` - Locating by placeholder text
   - `getByAltText()` - Finding images by alt text
   - `getByTitle()` - Locating by title attributes
   - `getByTestId()` - Using test IDs for locating elements

2. **File Operations**
   - Single and multiple file uploads
   - File input handling

3. **Web Tables**
   - Static table header verification
   - Table data extraction and validation
   - Pagination handling
   - Row and cell counting

4. **Interactive Elements**
   - Tab switching and navigation
   - Dynamic button interactions
   - Alert handling (accept, dismiss, prompt)
   - Mouse hover actions
   - Double-click operations
   - Drag-and-drop functionality
   - Slider interactions
   - SVG element selection
   - Dropdown/select element handling

5. **Links and Navigation**
   - Mobile and laptop labels
   - Link validation
   - Broken link detection with HTTP status codes
   - Navigation link verification

6. **Additional Features**
   - Page title verification
   - URL validation
   - Form filling and submission
   - Dynamic element detection

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
