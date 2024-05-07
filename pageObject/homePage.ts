import { Page } from "playwright";

export default class HomePage {

  product = this.page.locator('[data-test="inventory-item"]')
  productTitle = this.page.locator('[class="inventory_item_name "]');
  productDescription = this.page.locator('[class="inventory_item_desc"]');
  productPrice = this.page.locator('[class="inventory_item_price"]');
  productAddToCartButton = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');

  constructor(private page: Page) {
    page = page;
  };
};