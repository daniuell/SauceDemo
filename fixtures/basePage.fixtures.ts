import { test as baseTest } from '@playwright/test';
import BasePage from "../pageObject/pages/basePage";
import LoginPage from '../pageObject/pages/loginPage';
import HomePage from '../pageObject/pages/homePage';
import HeaderComponent from '../pageObject/components/headerComponent';
import SideMenuViews from '../pageObject/views/sideMenuViews';
import FooterComponent from '../pageObject/components/footerComponent';

const test = baseTest.extend<{

  //Pages
  basePage: BasePage;
  loginPage: LoginPage;
  homePage: HomePage;

  //Components
  headerComponent: HeaderComponent;
  footerComponent: FooterComponent;

  //Views
  sideMenuViews: SideMenuViews;
}>({
  //Pages
  basePage: async ({ page }, use) => {
    await use(new BasePage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },

  //Components
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page))
  },
  footerComponent: async ({ page }, use) => {
    await use(new FooterComponent(page))
  },

  //Views
  sideMenuViews: async ({ page }, use) => {
    await use(new SideMenuViews(page))
  },
});

export default test