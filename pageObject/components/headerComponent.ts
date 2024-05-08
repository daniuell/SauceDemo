import { Page } from "playwright";

export default class HeaderComponent {

  //header
  header = this.page.locator('[class="header_label"]');
  sideMenuButton = this.page.getByRole('button', { name: "Open Menu" });
  shoppingCart = this.page.locator('[id="shopping_cart_container"]');

  headerLocators = [this.header, this.sideMenuButton, this.shoppingCart];

  constructor(public page: Page) {
    this.page = page;
  };

}