import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { PatientPage } from '../page-objects/PatientPage';

type MyFixtures = {
  loginPage: LoginPage;
  patientPage: PatientPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  patientPage: async ({ page }, use) => {
    await use(new PatientPage(page));
  },
});

export { expect } from '@playwright/test';