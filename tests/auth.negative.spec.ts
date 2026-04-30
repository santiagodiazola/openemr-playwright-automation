import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Security: Should block access with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Setup
  await page.goto('/openemr/interface/login/login.php?site=default');

  // 2. Action
  await loginPage.login('admin', 'incorrect_password_123');

 // 3. Verification
const errorAlert = page.getByText('Invalid username or password');

await expect(errorAlert).toBeVisible();
});