import { test, expect } from '../fixtures/page-fixtures';

test.describe('Patient Search Workflow', () => {
  test('User should log in and retrieve patient list from frame', async ({ loginPage, patientPage }) => {
    const user = process.env.TEST_USER || 'physician';
    const pass = process.env.TEST_PASS || 'physician';

    // 1. Setup & Login
    await loginPage.goto();
    await loginPage.login(user, pass);
    await loginPage.waitForUrlPattern(/main\.php/);

    // 2. Action
    await patientPage.goToPatientFinder();
    await patientPage.searchAndGetPatientList();

    // 3. Verification: Verify search result frame content loaded
    const frameBody = patientPage.searchResultsFrame.locator('body');
    await expect(frameBody).toBeVisible({ timeout: 10000 });
  });
});
