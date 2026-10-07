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

  async goToNewPatientForm(): Promise<void> {
    await this.goToPatientFinder();
  }

  async createPatient(fname: string, lname: string, dob: string, sex: 'Male' | 'Female'): Promise<void> {
    // Handle persistent alert dialogs (e.g., Clinical Reminders)
    this.page.on('dialog', async (dialog) => {
      await dialog.accept().catch(() => {});
    });

    const frame = this.patientFinderFrame;

    // Fill primary creation form
    const fnameInput = frame.locator('#form_fname');
    await fnameInput.waitFor({ state: 'visible', timeout: 15000 });
    await fnameInput.fill(fname);

    await frame.locator('#form_lname').fill(lname);
    await frame.locator('#form_DOB').fill(dob);
    await frame.locator('#form_sex').selectOption({ label: sex });

    await frame.locator('#create').click();

    // Handle modal confirmation frame
    const modalFrame = this.page.frameLocator('iframe#modalframe');
    const confirmBtn = modalFrame.locator('button#confirmCreate');
    await confirmBtn.waitFor({ state: 'visible', timeout: 10000 });
    await confirmBtn.click();
  }

  async searchAndGetPatientList(): Promise<void> {
    const searchBtn = this.patientFinderFrame.locator('button#search');
    await searchBtn.waitFor({ state: 'visible', timeout: 5000 });
    await searchBtn.click();
  }

  getResultsContainer(): Locator {
    return this.searchResultsFrame.locator('table#SearchResults, table.table, #pt_table').first();
  }

  getPatientByName(name: string | RegExp): Locator {
    return this.searchResultsFrame.getByText(name);
  }

  getActivePatientTitle(): Locator {
    return this.page.locator('#attendantData .ptName, a.ptName span').first();
  }
}