import { test, expect } from '../fixtures/page-fixtures';

test.describe('Negative Authentication Tests', () => {
  test('Should block access with invalid password', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('admin', 'incorrect_password_123');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});