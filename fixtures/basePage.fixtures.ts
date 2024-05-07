import { test as baseTest } from '@playwright/test';
import BasePage from "../pageObject/basePage";


const test = baseTest.extend<{

  basePage: BasePage;

}>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page))
  },

});

export default test