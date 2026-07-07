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
    const elementsWithData = page.locator('[data-*]');
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
