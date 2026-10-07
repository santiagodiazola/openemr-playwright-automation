import { APIRequestContext, expect } from '@playwright/test';
import { PatientData } from '../data/patient-builder';

export class PatientClient {
  constructor(private request: APIRequestContext) {}

  async createPatientViaApi(patient: PatientData, token?: string) {
    const response = await this.request.post('/openemr/apis/default/api/patient', {
      headers: {
        'Authorization': `Bearer ${token || ''}`,
        'Content-Type': 'application/json',
      },
      data: {
        fname: patient.firstName,
        lname: patient.lastName,
        DOB: patient.dob,
        sex: patient.sex,
      },
    });

    return response;
  }
}