import { test, expect } from '../fixtures/page-fixtures';

test('User should login and retrieve patient list', async ({ loginPage, patientPage }) => {
  // 1. Setup
  await loginPage.goto();
  await loginPage.login('physician', 'physician');
  await loginPage.waitForUrlPattern('**/interface/main/tabs/main.php**');

  // 2. Action
  await patientPage.goToPatientFinder();
  await patientPage.searchAndGetPatientList();

  // 3. Verification
  await expect(patientPage.getPatientByName(/Belford/i).first()).toBeVisible();
});