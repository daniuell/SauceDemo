import { test as baseTest } from '@playwright/test';
import BasePage from "../pageObject/basePage";
import LoginPage from '../pageObject/loginPage';
import HomePage from '../pageObject/homePage';


const test = baseTest.extend<{

  basePage: BasePage;
  loginPage: LoginPage;
  homePage: HomePage;

}>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
});

export default test