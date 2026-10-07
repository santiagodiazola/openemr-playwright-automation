export interface PatientData {
  firstName: string;
  lastName: string;
  dob: string;
  sex: 'Male' | 'Female';
}

export function generatePatientData(overrides?: Partial<PatientData>): PatientData {
  const timestamp = Date.now();
  return {
    firstName: `TestFname_${timestamp}`,
    lastName: `TestLname_${timestamp}`,
    dob: '1990-01-15',
    sex: 'Male',
    ...overrides,
  };
}