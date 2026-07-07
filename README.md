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

Tests are located in the `tests/` directory. Current example:

- `tests/example.spec.ts`

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
