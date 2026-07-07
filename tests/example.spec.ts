import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('has a Get started link with a docs URL', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', /getting-started/);
});

test('docs introduction page renders a heading', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page.getByRole('heading', { name: /Introduction/i })).toBeVisible();
});

test('homepage shows the Docs navigation item', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});

test('search page link opens Playwright search docs', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const docsLink = page.getByRole('link', { name: 'Docs' });
  await expect(docsLink).toHaveAttribute('href', /docs/);
});
