OpenEMR Healthcare Automation Suite
### Project Overview
This project focuses on automating core workflows within OpenEMR, a legacy electronic medical record system. The primary goal was to solve the technical hurdles posed by the application’s extensive use of iframes, ensuring that automated tests remain stable and maintainable.

### Key Solutions
Iframe Navigation: Implemented frameLocator to interact with nested clinical modules where standard selectors typically fail.

Page Object Model (POM): Organized the suite using LoginPage.ts and PatientPage.ts to separate UI selectors from test logic.

Resilient Locators: Used a combination of getByText and Regex to ensure locators remain functional even if minor text changes occur in the UI.

### Test Coverage
Functional: Core success paths for login and navigation.

Security: Validation of unauthorized login attempts (auth.negative.spec.ts).

Stability: Handling of empty credential states to verify application error messaging.