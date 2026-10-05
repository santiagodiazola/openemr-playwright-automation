import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { PatientPage } from '../page-objects/PatientPage';

// Declare the types of your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  patientPage: PatientPage;
};

// Extend the base test object with custom fixtures
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Instantiate LoginPage and provide it to the test
    await use(new LoginPage(page));
  },

  patientPage: async ({ page }, use) => {
    // Instantiate PatientPage and provide it to the test
    await use(new PatientPage(page));
  },
});

export { expect } from '@playwright/test';