import { Page, Locator, FrameLocator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PatientPage extends BasePage {
  readonly searchResultsFrame: FrameLocator;

constructor(page: Page) {
    super(page);
    this.searchResultsFrame = page.frameLocator('iframe[src*="patient_select.php"]');
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

// Inside PatientPage.ts
getPatientByName(name: string | RegExp): Locator {
  return this.searchResultsFrame.getByText(name);
}
}