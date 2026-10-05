import { test, expect } from '../fixtures/page-fixtures';

test.describe('Negative Authentication Tests', () => {
  test('Validation: Should show error when fields are left empty', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});