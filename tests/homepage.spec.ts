import { Locator, expect } from '@playwright/test';
import test from '../fixtures/basePage.fixtures'
import { CorrectUser } from '../testData/testData';

test.describe('Test cases based on excel file', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.waitForLoadState();
  });

  test('TC_001 | The user is able to log in with correct credentials', async ({ loginPage, homePage, page }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

  });
  test('TC_002 | The user is not able to log in with incorrect credentials', async ({ loginPage, homePage, page }) => {

    await loginPage.loginAsUser(CorrectUser.login, 'dasds');

    await expect(loginPage.validationError).toBeInViewport();
    await expect(page).not.toHaveURL(/inventory/);
    await expect(page).toHaveURL('');
  });
  test('TC_003 | As a user, I can see header elements like: Side menu, header title, shopping cart icon', async ({ loginPage, homePage, page, headerComponent }) => {

    const elementsVisibility: Locator[] = headerComponent.headerLocators;

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    expect(await Promise.all(elementsVisibility.map(async (locator) => expect(locator).toBeInViewport())));

  });
  test('TC_004 | As a user, I can open the side menu after clicking on "="  and options: "All items","About","Logout","Reset App State" are displayed', async ({ loginPage, homePage, page, headerComponent, sideMenuViews }) => {

    const elementsVisibility: Locator[] = headerComponent.headerLocators;

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await headerComponent.sideMenuButton.click();

    expect(Promise.all(elementsVisibility.map(async (locator) => expect(locator).toBeInViewport())));
  });
  test('TC_005 | As a user, I can click shopping card icon', async ({ loginPage, homePage, page, headerComponent }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await headerComponent.shoppingCart.click();

    await expect(page).toHaveURL(/cart/);
  });
  test('TC_006 | As a user, I can logout from my account', async ({ loginPage, homePage, page, headerComponent, sideMenuViews }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await sideMenuViews.logoutFromPage();

    await expect(page).toHaveURL('');
  });
});