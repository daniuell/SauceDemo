import { Page } from "playwright";

export default class LoginPage {

  username = this.page.getByPlaceholder('Username');
  password = this.page.getByPlaceholder('Password');
  loginButton = this.page.locator('[id="login-button"]');
  validationError = this.page.locator('[class="error-message-container error"]');

  constructor(private page: Page) {
    this.page = page;
  };
  async loginAsUser(username: string, password: string) {

    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  };
};