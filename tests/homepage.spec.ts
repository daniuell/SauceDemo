import { Locator, expect } from '@playwright/test';
import test from '../fixtures/basePage.fixtures'


test.describe('Test cases based on excel file', () => {

  test.beforeEach(async ({ page, }) => {
    await page.goto('');
    await page.waitForLoadState();
  });

  test('TC_001 | .', async ({ basePage }) => {

  });
});