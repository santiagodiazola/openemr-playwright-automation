import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    // Leverage user-facing or semantic locators where available
    this.usernameInput = page.locator('#authUser');
    this.passwordInput = page.locator('#clearPass');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.navigateTo('/openemr/interface/login/login.php?site=default');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}