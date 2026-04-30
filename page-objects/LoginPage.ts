import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

constructor(page: Page) {
  this.page = page;
  // Use IDs for the official demo - Placeholder "admin" is not on this site
  this.usernameInput = page.locator('#authUser'); 
  this.passwordInput = page.locator('#clearPass');
  this.loginButton = page.locator('#login-button');
}

  async goto() {
    await this.page.goto('https://demo.openemr.io/openemr');
  }

async login(user: string, pass: string) {
  await this.page.fill('#authUser', user);
  await this.page.fill('#clearPass', pass);
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'networkidle' }),
    this.page.click('#login-button')
  ]);
}
}