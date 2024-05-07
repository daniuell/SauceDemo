import { Locator, expect } from '@playwright/test';
import test from '../fixtures/basePage.fixtures'
import { CorrectUser } from '../testData/testData';

test.describe('Test cases based on excel file', () => {

  test.beforeEach(async ({ page, }) => {
    await page.goto('');
    await page.waitForLoadState();
  });

  test('TC_001 | The user is able to log in with correct credentials .', async ({ loginPage, homePage, page }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);
    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

  });
  test('TC_002 | The user is not able to log in with incorrect credentials .', async ({ loginPage, homePage, page }) => {

    await loginPage.loginAsUser(CorrectUser.login, 'dasds');
    await expect(loginPage.validationError).toBeInViewport();
    await expect(page).not.toHaveURL(/inventory/);
    await expect(page).toHaveURL('');
  });

});