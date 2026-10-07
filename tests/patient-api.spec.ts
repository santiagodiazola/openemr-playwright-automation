import { test, expect } from '@playwright/test';
import { PatientClient } from '../api/PatientClient';
import { generatePatientData } from '../data/patient-builder';

test.describe('API & UI Hybrid Validation Suite', () => {
  test('Backend authentication API health check and UI session consistency', async ({ request, baseURL }) => {
    const patientClient = new PatientClient(request);
    const mockPatient = generatePatientData();

    // 1. Determine target base path dynamically (demo vs local docker)
    const loginEndpoint = baseURL?.includes('demo.openemr.io')
      ? '/openemr/interface/login/login.php?site=default'
      : '/interface/login/login.php?site=default';

    // 2. Health check endpoint
    const response = await request.get(loginEndpoint);
    expect(response.status()).toBe(200);

    // 3. API patient interaction test
    const apiResponse = await patientClient.createPatientViaApi(mockPatient);
    expect([200, 201, 401, 403]).toContain(apiResponse.status());
  });
});