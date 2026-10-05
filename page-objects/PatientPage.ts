import { Page, Locator, FrameLocator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PatientPage extends BasePage {
  readonly searchResultsFrame: FrameLocator;
  readonly patientFinderFrame: FrameLocator;

  constructor(page: Page) {
    super(page);
    this.searchResultsFrame = page.frameLocator('iframe[src*="patient_select.php"]');
    this.patientFinderFrame = page.frameLocator('iframe[name="pat"]');
  }

  async goToPatientFinder(): Promise<void> {
    const patientMenu = this.page.getByText('Patient', { exact: true }).first();
    await patientMenu.click();

    const subMenu = this.page.locator('a, li').filter({ hasText: /New\/Search/i }).first();
    await subMenu.waitFor({ state: 'visible', timeout: 5000 });
    await subMenu.click();
  }

  async searchAndGetPatientList(): Promise<void> {
    const searchBtn = this.patientFinderFrame.locator('button#search');
    await searchBtn.waitFor({ state: 'visible', timeout: 5000 });
    await searchBtn.click();
  }

  // Locator targeting the patient search results table container or row
  getResultsContainer(): Locator {
    return this.searchResultsFrame.locator('table#SearchResults, table.table, #pt_table').first();
  }

  getPatientByName(name: string | RegExp): Locator {
    return this.searchResultsFrame.getByText(name);
  }
}