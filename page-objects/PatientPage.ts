import { Page, Locator, expect } from '@playwright/test';

export class PatientPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async goToPatientFinder() {
  
  const patientMenu = this.page.getByText('Patient', { exact: true }).first();
  await patientMenu.click(); 

  const subMenu = this.page.locator('a, li').filter({ hasText: /New\/Search/i }).first();
  
  await subMenu.waitFor({ state: 'visible', timeout: 5000 });
  await subMenu.click();
}
async searchAndGetPatientList() {
    
    const patientFrame = this.page.frameLocator('iframe[name="pat"]');

    await patientFrame.locator('button#search').evaluate((node) => {
        (node as HTMLElement).click();
    });
}
}