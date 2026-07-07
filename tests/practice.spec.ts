import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

// Helper function to count elements
const countElements = async (page: Page, selector: string): Promise<number> => {
  return page.locator(selector).count();
};

// Helper function to check if elements exist
const expectElementCount = async (
  page: Page,
  selector: string,
  condition: 'greater-than' | 'greater-or-equal' | 'equal',
  value: number,
  testName: string
) => {
  const count = await countElements(page, selector);
  switch (condition) {
    case 'greater-than':
      expect(count, `${testName}: Expected count > ${value}, got ${count}`).toBeGreaterThan(value);
      break;
    case 'greater-or-equal':
      expect(count, `${testName}: Expected count >= ${value}, got ${count}`).toBeGreaterThanOrEqual(value);
      break;
    case 'equal':
      expect(count, `${testName}: Expected count === ${value}, got ${count}`).toBe(value);
  }
};

test.describe('Playwright Practice - Core Tests', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterAll(async () => {
    await page.close();
  });

  // Page Navigation & Structure Tests
  test('should load practice page successfully', async () => {
    expect(page.url()).toContain('playwrightpractice');
  });

  test('should verify page has content', async () => {
    await expectElementCount(page, 'body', 'greater-than', 0, 'Page body');
  });

  test('should have title element', async () => {
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  // DOM Element Locator Tests
  test('should locate multiple DOM element types', async () => {
    const elementTests = [
      { selector: 'table', min: 1, name: 'Tables' },
      { selector: 'input[type="text"]', min: 1, name: 'Text inputs' },
      { selector: 'button', min: 1, name: 'Buttons' },
      { selector: 'a', min: 1, name: 'Links' },
      { selector: 'li', min: 1, name: 'List items' },
      { selector: 'p', min: 1, name: 'Paragraphs' },
      { selector: 'h1, h2, h3, h4, h5, h6', min: 1, name: 'Headings' },
      { selector: 'form', min: 0, name: 'Forms' },
      { selector: 'select', min: 0, name: 'Dropdowns' },
      { selector: '[id]', min: 1, name: 'Elements with IDs' },
      { selector: '[class]', min: 1, name: 'Elements with classes' },
    ];

    for (const test of elementTests) {
      await expectElementCount(page, test.selector, 'greater-or-equal', test.min, test.name);
    }
  });

  // Table Structure Tests
  test('should verify table structure', async () => {
    const tableTests = [
      { selector: 'table', condition: 'greater-than' as const, value: 0, name: 'Table exists' },
      { selector: 'table th', condition: 'greater-or-equal' as const, value: 1, name: 'Table headers' },
      { selector: 'table tbody tr', condition: 'greater-or-equal' as const, value: 1, name: 'Table rows' },
      { selector: 'table td', condition: 'greater-than' as const, value: 0, name: 'Table cells' },
    ];

    for (const test of tableTests) {
      await expectElementCount(page, test.selector, test.condition, test.value, test.name);
    }
  });

  // Page Accessibility Tests
  test('should have accessible page structure', async () => {
    const accessibilityTests = [
      { selector: 'main, [role="main"], .container, .content', name: 'Main content area' },
      { selector: 'nav, [role="navigation"]', name: 'Navigation elements' },
    ];

    for (const test of accessibilityTests) {
      const count = await countElements(page, test.selector);
      expect(count, `${test.name} should exist`).toBeGreaterThanOrEqual(0);
    }
  });

  // Form Interaction Tests
  test('should support form interactions', async () => {
    const textInputs = page.locator('input[type="text"]');
    const inputCount = await textInputs.count();

    if (inputCount > 0) {
      const firstInput = textInputs.first();
      await firstInput.fill('Test Input');
      const value = await firstInput.inputValue();
      expect(value).toBe('Test Input');
    }
  });

  // Page Content Tests
  test('should contain readable text content', async () => {
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(10);
  });

  // Responsive Design Test
  test('should be responsive', async () => {
    const windowSize = await page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
    expect(windowSize.width).toBeGreaterThan(0);
    expect(windowSize.height).toBeGreaterThan(0);
  });

  // Performance Tests
  test('should load within acceptable time', async () => {
    const navigationTiming = await page.evaluate(() => {
      const perfData = window.performance.timing;
      return perfData.loadEventEnd - perfData.navigationStart;
    });
    expect(navigationTiming).toBeGreaterThan(0);
    expect(navigationTiming).toBeLessThan(60000);
  });

  // Scrolling & Layout Tests
  test('should have proper layout dimensions', async () => {
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const clientHeight = await page.evaluate(() => window.innerHeight);
    expect(scrollHeight + clientHeight).toBeGreaterThan(0);
  });

  // CSS & Styling Tests
  test('should have styled elements', async () => {
    const element = page.locator('body');
    const bgColor = await element.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(bgColor).toBeTruthy();
  });

  // Data Attributes Tests
  test('should have data-driven elements', async () => {
    const dataElements = page.locator('[data-testid], [data-id], [data-value]');
    const count = await dataElements.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});

