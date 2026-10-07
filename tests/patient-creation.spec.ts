import { test, expect } from '../fixtures/page-fixtures';

test.describe('Patient Creation E2E Workflow', () => {
  test('User should log in, create a patient, and verify created patient header state', async ({ loginPage, patientPage }) => {
    // 1. Login
    await loginPage.goto();
    await loginPage.login('admin', 'pass');

    // 2. Navigate to "Search or Add Patient" form
    await patientPage.goToNewPatientForm();

    // 3. Generate dynamic patient details
    const uniqueId = Date.now();
    const firstName = `TestFname_${uniqueId}`;
    const lastName = `TestLname_${uniqueId}`;

    // 4. Create Patient
    await patientPage.createPatient(firstName, lastName, '1990-01-15', 'Male');

    // 5. Verify top header updates with created patient details
    const activeHeader = patientPage.getActivePatientTitle();
    await expect(activeHeader).toContainText(`${firstName} ${lastName}`);
  });
});