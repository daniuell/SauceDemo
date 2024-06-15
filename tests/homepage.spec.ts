import { Locator, expect } from '@playwright/test';
import test from '../fixtures/basePage.fixtures'
import { CorrectUser } from '../testData/testData';
import { newPageHandle } from '../tools/utils';
import { FooterUrls } from '../enums/footerUrls';
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
  test('TC_002 | The user is not able to log in with incorrect credentials', async ({ loginPage, page }) => {

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

    expect(await Promise.all(elementsVisibility.map(async (locator) => await expect(locator).toBeInViewport())));

  });
  test('TC_004 | As a user, I can open the side menu after clicking on "="  and options: "All items","About","Logout","Reset App State" are displayed', async ({ loginPage, homePage, page, headerComponent, sideMenuViews }) => {

    const elementsVisibility: Locator[] = headerComponent.headerLocators;

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await headerComponent.sideMenuButton.click();

    expect(await Promise.all(elementsVisibility.map(async (locator) => await expect(locator).toBeInViewport())));
  });
  test('TC_005 | As a user, I can click shopping card icon', async ({ loginPage, homePage, page, headerComponent }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await headerComponent.shoppingCart.click();

    await expect(page).toHaveURL(/cart/);
  });
  test('TC_006 | As a user, I can logout from my account', async ({ loginPage, homePage, page, sideMenuViews }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    await sideMenuViews.logoutFromPage();

    await expect(page).toHaveURL('');
  });
  test('TC_007 | As a user, I can see footer elements like: social media icons, site description', async ({ loginPage, homePage, page, footerComponent }) => {

    const elementsVisibility: Locator[] = footerComponent.footerLocators;

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    expect(await Promise.all(elementsVisibility.map(async (locator) => await expect(locator).toBeInViewport())));
  });
  test('TC_008 | As a user, I want to be redirected to the relevant url by clicking icon', async ({ loginPage, homePage, page, footerComponent }) => {
    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    await expect(homePage.productTitle.first()).toBeInViewport();
    await expect(page).toHaveURL(/inventory/);

    //Open first page
    await footerComponent.facebook.click();

    const newPageFirst = await newPageHandle(page);

    await expect(newPageFirst).toHaveURL(FooterUrls.Facebook);

    await newPageFirst.close();

    //Open second page
    await footerComponent.linkedin.click();

    const newPageSecond = await newPageHandle(page);

    await expect(newPageSecond).toHaveURL(FooterUrls.Linkedin);

    await newPageSecond.close();

    //Open third page
    await footerComponent.twitter.click();

    const newPageThird = await newPageHandle(page);

    await expect(newPageThird).toHaveURL(FooterUrls.Twitter);

    await newPageThird.close();
  });
  test('As a user, I want to see available products to purchase', async ({ loginPage, homePage }) => {

    await loginPage.loginAsUser(CorrectUser.login, CorrectUser.password);

    const countProducts = await homePage.product.count();

    expect(countProducts).toBeLessThanOrEqual(6);
  });
});