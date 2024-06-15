import { Page } from "playwright";

export default class FooterComponent {

  socials = this.page.locator('//footer/ul[@class="social"]');
  twitter = this.page.locator('//footer//li[@class="social_twitter"]');
  facebook = this.page.locator('//footer//li[@class="social_facebook"]');
  linkedin = this.page.locator('//footer//li[@class="social_linkedin"]');
  copyrightDescription = this.page.locator('//footer/div[@class="footer_copy"]');

  footerLocators = [this.socials, this.twitter, this.facebook, this.linkedin, this.copyrightDescription];

  constructor(private page: Page) {
    this.page = page;
  };
};