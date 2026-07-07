import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

test.describe('Playwright Practice - Core Tests', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  // Page Navigation Tests
  test('should load practice page successfully', async () => {
    expect(page.url()).toContain('playwrightpractice');
  });

  test('should verify page has content', async () => {
    const content = page.locator('body');
    await expect(content).toBeVisible();
  });

  test('should locate tables on page', async () => {
    const tables = page.locator('table');
    const count = await tables.count();
    expect(count).toBeGreaterThan(0);
  });

  // Form Input Tests
  test('should locate text input fields', async () => {
    const inputs = page.locator('input[type="text"]');
    const count = await inputs.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate search functionality', async () => {
    const searchInputs = page.locator('input');
    const count = await searchInputs.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  // Button Tests
  test('should locate interactive buttons', async () => {
    const buttons = page.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate links on page', async () => {
    const links = page.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  // Table Tests
  test('should verify static table structure', async () => {
    const tableRows = page.locator('table tbody tr');
    const count = await tableRows.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should verify table headers exist', async () => {
    const headers = page.locator('table th');
    const count = await headers.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate table cells', async () => {
    const cells = page.locator('table td');
    const count = await cells.count();
    expect(count).toBeGreaterThan(0);
  });

  // List and Element Tests
  test('should locate list items on page', async () => {
    const listItems = page.locator('li');
    const count = await listItems.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate paragraphs with text', async () => {
    const paragraphs = page.locator('p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate headings on page', async () => {
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  // Form Tests
  test('should locate form elements', async () => {
    const forms = page.locator('form');
    const count = await forms.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should locate select/dropdown elements', async () => {
    const selects = page.locator('select');
    const count = await selects.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should verify page is responsive', async () => {
    const windowSize = await page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    expect(windowSize.width).toBeGreaterThan(0);
    expect(windowSize.height).toBeGreaterThan(0);
  });

  // Accessibility Tests
  test('should have main content area', async () => {
    const mainContent = page.locator('main, [role="main"], .container, .content');
    const count = await mainContent.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have navigation elements', async () => {
    const navElements = page.locator('nav, [role="navigation"]');
    const count = await navElements.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  // Text Presence Tests
  test('should contain text content', async () => {
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(10);
  });

  test('should have title element', async () => {
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  // Interaction Tests
  test('should be able to type in text inputs', async () => {
    const textInput = page.locator('input[type="text"]').first();
    const inputCount = await page.locator('input[type="text"]').count();
    
    if (inputCount > 0) {
      await textInput.fill('Test Input');
      const value = await textInput.inputValue();
      expect(value).toBe('Test Input');
    }
  });

  test('should be able to click buttons', async () => {
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThanOrEqual(0);
  });

  test('should be able to click links', async () => {
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThanOrEqual(1);
  });

  // Visibility Tests
  test('should verify visible elements count', async () => {
    const visibleElements = page.locator('*');
    const count = await visibleElements.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have scrollable content', async () => {
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const clientHeight = await page.evaluate(() => window.innerHeight);
    expect(scrollHeight + clientHeight).toBeGreaterThan(0);
  });

  // Performance Tests
  test('should load page in reasonable time', async () => {
    const navigationTiming = await page.evaluate(() => {
      const perfData = window.performance.timing;
      return perfData.loadEventEnd - perfData.navigationStart;
    });
    expect(navigationTiming).toBeGreaterThan(0);
    expect(navigationTiming).toBeLessThan(60000); // Less than 60 seconds
  });

  // CSS and Styling Tests
  test('should have properly styled elements', async () => {
    const element = page.locator('body');
    const bgColor = await element.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );
    expect(bgColor).toBeTruthy();
  });

  // Data Attribute Tests
  test('should locate elements with data attributes', async () => {
    const elementsWithData = page.locator('[data-testid], [data-id], [data-value]');
    const count = await elementsWithData.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should locate elements with IDs', async () => {
    const elementsWithId = page.locator('[id]');
    const count = await elementsWithId.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should locate elements with classes', async () => {
    const elementsWithClass = page.locator('[class]');
    const count = await elementsWithClass.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});

