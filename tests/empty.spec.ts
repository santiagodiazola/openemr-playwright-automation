import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Validation: Should show error when fields are left empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/openemr/interface/login/login.php?site=default');

  // Action
  await page.click('#login-button'); 

  // Verification
  const errorAlert = page.getByText('Invalid username or password');
  await expect(errorAlert).toBeVisible();
});