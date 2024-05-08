import { Page } from "playwright";
import HeaderComponent from "../components/headerComponent";

export default class SideMenuViews extends HeaderComponent {

  //Menu
  allItems = this.page.locator('[data-test="inventory-sidebar-link"]');
  about = this.page.locator('[data-test="about-sidebar-link"]')
  logout = this.page.locator('[data-test="logout-sidebar-link"]')
  resetAppState = this.page.locator('[data-test="reset-sidebar-link"]')

  constructor(page: Page) {
    super(page);
  };

  async logoutFromPage() {
    await this.sideMenuButton.click();
    await this.logout.click();
  };
};