import { Page } from "playwright";

export default class HomePage {

  product = this.page.locator('[data-test="inventory-item"]')
  productTitle = this.page.locator('[class="inventory_item_name "]');
  productDescription = this.page.locator('[class="inventory_item_desc"]');
  productPrice = this.page.locator('[class="inventory_item_price"]');
  productAddToCartButton = this.page.locator('//button[contains(@data-test,"add-to-cart")]');
  productSortMenu = this.page.locator('[data-test="product-sort-container"]');

  constructor(private page: Page) {
    this.page = page;
  };
};