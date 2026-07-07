import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

test.describe('Playwright Practice - Locators', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  // getByRole() Locators Tests
  test.describe('getByRole() Locators', () => {
    test('should locate primary button by role', async () => {
      const primaryButton = page.getByRole('button', { name: /primary action/i });
      await expect(primaryButton).toBeVisible();
    });

    test('should locate toggle button by role', async () => {
      const toggleButton = page.getByRole('button', { name: /toggle button/i });
      await expect(toggleButton).toBeVisible();
    });

    test('should locate form input fields by role', async () => {
      const usernameInput = page.getByRole('textbox', { name: /username/i });
      await expect(usernameInput).toBeVisible();
    });

    test('should locate alert by role', async () => {
      const alert = page.getByRole('alert');
      await expect(alert).toContainText('important alert');
    });
  });

  // getByText() Locators Tests
  test.describe('getByText() Locators', () => {
    test('should locate text content in paragraph', async () => {
      const importantText = page.getByText(/important text/i);
      await expect(importantText).toBeVisible();
    });

    test('should locate link by text content', async () => {
      const link = page.getByText('List item 2 with link');
      await expect(link).toBeVisible();
    });

    test('should locate submit button by text', async () => {
      const submitBtn = page.getByText('Submit Form');
      await expect(submitBtn).toBeVisible();
    });

    test('should locate unique text identifier', async () => {
      const uniqueText = page.getByText('Unique text identifier');
      await expect(uniqueText).toBeVisible();
    });
  });

  // getByLabel() Locators Tests
  test.describe('getByLabel() Locators', () => {
    test('should locate email input by label', async () => {
      const emailInput = page.getByLabel('Email Address');
      await expect(emailInput).toBeVisible();
    });

    test('should locate password input by label', async () => {
      const passwordInput = page.getByLabel('Password');
      await expect(passwordInput).toBeVisible();
    });

    test('should locate age input by label', async () => {
      const ageInput = page.getByLabel(/Your Age/i);
      await expect(ageInput).toBeVisible();
    });

    test('should fill email field using label', async () => {
      const emailInput = page.getByLabel('Email Address');
      await emailInput.fill('test@example.com');
      await expect(emailInput).toHaveValue('test@example.com');
    });
  });

  // getByPlaceholder() Locators Tests
  test.describe('getByPlaceholder() Locators', () => {
    test('should locate search input by placeholder', async () => {
      const searchInput = page.getByPlaceholder('Search');
      await expect(searchInput).toBeVisible();
    });

    test('should type in search input', async () => {
      const searchInput = page.getByPlaceholder('Search');
      await searchInput.fill('Playwright');
      await expect(searchInput).toHaveValue('Playwright');
    });
  });

  // getByAltText() Locators Tests
  test.describe('getByAltText() Locators', () => {
    test('should locate image by alt text', async () => {
      const image = page.getByAltText(/logo/i);
      await expect(image).toBeVisible();
    });

    test('should verify alt text image source', async () => {
      const image = page.getByAltText(/playwright/i);
      await expect(image).toHaveAttribute('src', /playwright-logo/);
    });
  });

  // getByTitle() Locators Tests
  test.describe('getByTitle() Locators', () => {
    test('should locate element by title attribute', async () => {
      const titleElement = page.getByTitle(/Home/i);
      await expect(titleElement).toBeVisible();
    });

    test('should locate tooltip element', async () => {
      const tooltip = page.getByTitle(/tooltip/i);
      await expect(tooltip).toBeVisible();
    });
  });

  // getByTestId() Locators Tests
  test.describe('getByTestId() Locators', () => {
    test('should locate user profile by test id', async () => {
      const userProfile = page.getByTestId('user-profile');
      await expect(userProfile).toBeVisible();
    });

    test('should locate product items by test id', async () => {
      const products = page.locator('[data-testid="product"]');
      const count = await products.count();
      expect(count).toBeGreaterThan(0);
    });

    test('should verify product pricing', async () => {
      const productA = page.getByTestId('product-a');
      await expect(productA).toContainText('$19.99');
    });
  });
});

test.describe('Playwright Practice - File Operations', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.describe('Upload Files', () => {
    test('should locate single file upload button', async () => {
      const uploadButton = page.getByText('Upload Single File');
      await expect(uploadButton).toBeVisible();
    });

    test('should locate multiple file upload button', async () => {
      const uploadButton = page.getByText('Upload Multiple Files');
      await expect(uploadButton).toBeVisible();
    });

    test('should verify file input exists', async () => {
      const fileInput = page.locator('input[type="file"]');
      const count = await fileInput.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });
  });
});

test.describe('Playwright Practice - Web Tables', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.describe('Static Web Table', () => {
    test('should verify table headers exist', async () => {
      const headers = page.locator('table th');
      const count = await headers.count();
      expect(count).toBeGreaterThan(0);
    });

    test('should locate book name in table', async () => {
      const bookCell = page.getByText('Learn Selenium');
      await expect(bookCell).toBeVisible();
    });

    test('should find author in table', async () => {
      const authorCell = page.getByText('Amit');
      await expect(authorCell).toBeVisible();
    });

    test('should verify Selenium book price', async () => {
      const row = page.locator('table tr:has-text("Learn Selenium")');
      await expect(row).toContainText('300');
    });

    test('should count total rows in static table', async () => {
      const rows = page.locator('table tbody tr');
      const count = await rows.count();
      expect(count).toBe(6);
    });
  });

  test.describe('Pagination Web Table', () => {
    test('should verify pagination table exists', async () => {
      const table = page.locator('table').nth(2);
      await expect(table).toBeVisible();
    });

    test('should locate first page button', async () => {
      const pageButton = page.getByRole('button', { name: '1' });
      await expect(pageButton).toBeVisible();
    });

    test('should verify pagination controls', async () => {
      const paginationButtons = page.locator('button', { hasText: /\d/ });
      const count = await paginationButtons.count();
      expect(count).toBeGreaterThan(0);
    });
  });
});

test.describe('Playwright Practice - Interactive Elements', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.describe('Tabs', () => {
    test('should locate tab elements', async () => {
      const tabs = page.locator('a[role="tab"]');
      const count = await tabs.count();
      expect(count).toBeGreaterThan(0);
    });

    test('should click on first tab', async () => {
      const firstTab = page.locator('a[role="tab"]').first();
      await firstTab.click();
      await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('Dynamic Button', () => {
    test('should locate dynamic button', async () => {
      const dynamicBtn = page.getByRole('button', { name: /START/i });
      await expect(dynamicBtn).toBeVisible();
    });

    test('should click dynamic button', async () => {
      const dynamicBtn = page.getByRole('button', { name: /START/i });
      await dynamicBtn.click();
    });
  });

  test.describe('Alerts & Popups', () => {
    test('should verify simple alert button exists', async () => {
      const alertBtn = page.getByText('Simple Alert');
      await expect(alertBtn).toBeVisible();
    });

    test('should verify confirmation alert button exists', async () => {
      const confirmBtn = page.getByText('Confirmation Alert');
      await expect(confirmBtn).toBeVisible();
    });

    test('should verify prompt alert button exists', async () => {
      const promptBtn = page.getByText('Prompt Alert');
      await expect(promptBtn).toBeVisible();
    });

    test('should verify new tab button exists', async () => {
      const newTabBtn = page.getByText('New Tab');
      await expect(newTabBtn).toBeVisible();
    });

    test('should verify popup window button exists', async () => {
      const popupBtn = page.getByText('Popup Windows');
      await expect(popupBtn).toBeVisible();
    });
  });

  test.describe('Mouse Hover', () => {
    test('should locate hover button', async () => {
      const hoverBtn = page.getByText('Point Me');
      await expect(hoverBtn).toBeVisible();
    });

    test('should hover over button element', async () => {
      const hoverBtn = page.getByText('Point Me');
      await hoverBtn.hover();
    });
  });

  test.describe('Double Click', () => {
    test('should locate first field for double click', async () => {
      const field1 = page.locator('input[value="Hello World!"]');
      await expect(field1).toBeVisible();
    });

    test('should locate second field', async () => {
      const field2 = page.locator('input').filter({ hasText: 'Copy Text' });
      await expect(field2).toBeVisible();
    });

    test('should verify double click button exists', async () => {
      const doubleClickBtn = page.getByRole('button').filter({ hasText: /double|click/i }).first();
      await expect(doubleClickBtn).toBeVisible();
    });
  });

  test.describe('Drag and Drop', () => {
    test('should locate draggable element', async () => {
      const draggable = page.getByText('Drag me to my target');
      await expect(draggable).toBeVisible();
    });

    test('should locate drop target', async () => {
      const dropTarget = page.getByText('Drop here');
      await expect(dropTarget).toBeVisible();
    });

    test('should perform drag and drop', async () => {
      const draggable = page.getByText('Drag me to my target');
      const dropTarget = page.getByText('Drop here');
      await draggable.dragTo(dropTarget);
    });
  });

  test.describe('Slider', () => {
    test('should locate price range slider', async () => {
      const slider = page.locator('input[type="range"]');
      const count = await slider.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });

    test('should verify price range text', async () => {
      const priceText = page.getByText(/Price range/i);
      await expect(priceText).toBeVisible();
    });
  });

  test.describe('SVG Elements', () => {
    test('should locate SVG elements', async () => {
      const svgElements = page.locator('svg');
      const count = await svgElements.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Scrolling Dropdown', () => {
    test('should locate dropdown elements', async () => {
      const dropdowns = page.locator('select');
      const count = await dropdowns.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });
  });
});

test.describe('Playwright Practice - Links and Labels', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.describe('Labels', () => {
    test('should locate mobile labels', async () => {
      const samsungLabel = page.getByText('Samsung');
      await expect(samsungLabel).toBeVisible();
    });

    test('should locate Real Me label', async () => {
      const realMeLabel = page.getByText('Real Me');
      await expect(realMeLabel).toBeVisible();
    });

    test('should locate Moto label', async () => {
      const motoLabel = page.getByText('Moto');
      await expect(motoLabel).toBeVisible();
    });
  });

  test.describe('Links', () => {
    test('should locate Apple link', async () => {
      const appleLink = page.getByRole('link', { name: /Apple/i });
      await expect(appleLink).toBeVisible();
    });

    test('should verify Apple link URL', async () => {
      const appleLink = page.getByRole('link', { name: /Apple/i });
      await expect(appleLink).toHaveAttribute('href', 'https://www.apple.com/');
    });

    test('should locate Lenovo link', async () => {
      const lenovoLink = page.getByRole('link', { name: /Lenovo/i });
      await expect(lenovoLink).toBeVisible();
    });

    test('should verify Lenovo link URL', async () => {
      const lenovoLink = page.getByRole('link', { name: /Lenovo/i });
      await expect(lenovoLink).toHaveAttribute('href', 'https://www.lenovo.com/');
    });

    test('should locate Dell link', async () => {
      const dellLink = page.getByRole('link', { name: /Dell/i });
      await expect(dellLink).toBeVisible();
    });

    test('should verify Dell link URL', async () => {
      const dellLink = page.getByRole('link', { name: /Dell/i });
      await expect(dellLink).toHaveAttribute('href', 'https://www.dell.com/');
    });
  });

  test.describe('Broken Links', () => {
    test('should locate error 400 link', async () => {
      const errorLink = page.getByText('Errorcode 400');
      await expect(errorLink).toBeVisible();
    });

    test('should locate error 401 link', async () => {
      const errorLink = page.getByText('Errorcode 401');
      await expect(errorLink).toBeVisible();
    });

    test('should locate error 403 link', async () => {
      const errorLink = page.getByText('Errorcode 403');
      await expect(errorLink).toBeVisible();
    });

    test('should locate error 404 link', async () => {
      const errorLink = page.getByText('Errorcode 404');
      await expect(errorLink).toBeVisible();
    });

    test('should locate error 500 link', async () => {
      const errorLink = page.getByText('Errorcode 500');
      await expect(errorLink).toBeVisible();
    });

    test('should verify broken link attributes', async () => {
      const brokenLink = page.getByText('Errorcode 404');
      const href = await brokenLink.getAttribute('href');
      expect(href).toContain('deadlinkcity');
    });
  });
});

test.describe('Playwright Practice - Additional Features', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('should scroll to top link', async () => {
    const topLink = page.getByText(/↑ Top/);
    await expect(topLink).toBeVisible();
  });

  test('should locate home navigation link', async () => {
    const homeLink = page.getByRole('link', { name: /^Home$/i });
    const count = await homeLink.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should locate products link', async () => {
    const productsLink = page.getByRole('link', { name: /Products/i });
    const count = await productsLink.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should locate contact link', async () => {
    const contactLink = page.getByRole('link', { name: /Contact/i });
    const count = await contactLink.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should verify page title', async () => {
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should verify page URL', async () => {
    expect(page.url()).toContain('playwrightpractice');
  });
});
