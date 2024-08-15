import { Page } from "playwright";

export default class ShoppingCart {

  itemTitle = this.page.locator('[data-test="inventory-item-name"]');
  itemDescription = this.page.locator('[data-test="inventory-item-desc"]');

  constructor(private page: Page) {
    this.page = page;
  };

};