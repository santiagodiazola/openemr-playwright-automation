import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Note: OpenEMR's legacy markup lacks semantic label/role associations for input fields.
    // CSS IDs (#authUser, #clearPass, #login-button) are used as stable locators.
    this.usernameInput = page.locator('#authUser');
    this.passwordInput = page.locator('#clearPass');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.getByText('Invalid username or password');
  }

  async goto(): Promise<void> {
    await this.navigateTo('/openemr/interface/login/login.php?site=default');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}