import { Page } from "playwright";

export default class ShoppingCart {

  itemTitle = this.page.locator('[data-test="inventory-item-name"]');
  itemDescription = this.page.locator('[data-test="inventory-item-desc"]');
  itemRemove = this.page.locator('[class="btn btn_secondary btn_small cart_button"]');

  constructor(private page: Page) {
    this.page = page;
  };

};