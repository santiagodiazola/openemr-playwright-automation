import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { PatientPage } from '../page-objects/PatientPage';

test('User should login and retrieve patient list', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const patientPage = new PatientPage(page);

  // 1. Setup
  await page.goto('/openemr/interface/login/login.php?site=default');
  await loginPage.login('physician', 'physician');
  await page.waitForURL('**/interface/main/tabs/main.php**');

  // 2. Action
  await patientPage.goToPatientFinder();
  
  await patientPage.searchAndGetPatientList(); 

 // 3. Verification
const searchResultsFrame = page.frameLocator('iframe[src*="patient_select.php"]');

const patientName = searchResultsFrame.getByText(/Belford/i);

await expect(patientName.first()).toBeVisible();
});