# OpenEMR Healthcare Automation Suite

## 📑 Executive Summary
This project focuses on automating core workflows within OpenEMR, a legacy electronic medical record system. The primary goal was to solve the technical hurdles posed by the application’s extensive use of iframes, ensuring that automated tests remain stable and maintainable.

## 🛠 Technical Stack
Language: TypeScript
Framework: Playwright
Architecture: Page Object Model (POM)
Locators: frameLocator, getByText, Regex

## 📊 Test Coverage
**Functional**: Core success paths for login and navigation.
**Security**: Validation of unauthorized login attempts (auth.negative.spec.ts).
**Stability**: Handling of empty credential states to verify application error messaging.

## 🔎 Project Highlights & Solutions
**Piercing Iframes**: Successfully navigated OpenEMR’s legacy architecture using frameLocator to interact with hidden clinical modules.
**Scalable Architecture**: Utilized POM to separate selectors from test logic, ensuring high maintainability.
**Security Validation**: Built dedicated suites for Negative Testing to ensure robust handling of unauthorized access.

## 📁 Project Structure
.
├── evidence/            # Execution screenshots and video tracers
├── page-objects/        # POM classes (LoginPage.ts, PatientPage.ts)
├── tests/               # Functional, Security, and Edge Case suites
├── playwright.config.ts # Framework configuration
└── tsconfig.json        # TypeScript configuration

## 🧪 How to Run
Install Dependencies:
npm install
Execute All Tests:
npx playwright test
View HTML Report:
npx playwright show-report

## 📁 Project Artifacts

Test Suite	Status	Artifacts
**Functional Success**	Passed	Screenshot • Video
**Security/Negative**	Passed	Screenshot • Video
**Empty State**	        Passed	Screenshot • Video

Execution Report
Proof of a stable, 100% pass rate across the specialized test suite.

Trace Viewer Debugging
I utilize the Playwright Trace Viewer as my primary diagnostic tool. This allows for a frame-by-frame post-mortem analysis of the automation lifecycle, which is essential for debugging complex iframe interactions in healthcare environments.

## Technical Performance Notes

Optimization: Configured specifically for Chromium to maximize execution speed and resource efficiency on mobile workstations.
CI/CD: Includes GitHub Actions workflows for automated pipeline readiness.