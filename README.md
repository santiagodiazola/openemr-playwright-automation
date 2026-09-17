# **OpenEMR Playwright Automation Framework**

**Project Goal:** To automate core workflows and validate security boundaries within OpenEMR (an open-source Electronic Medical Record system), successfully overcoming legacy architectural challenges like nested iframes.

![OpenEMR Success Case](./evidence/auth.spec.gif)

---

## **📑 Executive Summary**
This project focuses on automating core workflows within OpenEMR. The primary goal was to solve the technical hurdles posed by the application’s extensive use of iframes, ensuring that automated tests remain stable, maintainable, and reliable across functional and security suites.

---

## **🛠️ Technical Stack**
* **Language:** TypeScript
* **Framework:** Playwright
* **Architecture:** Page Object Model (POM)
* **Locators:** `frameLocator`, `getByText`, Regex matching

---

## **📊 Test Coverage**
* **Functional:** Core success paths for login and navigation.
* **Security:** Validation of unauthorized login attempts (`auth.negative.spec.ts`).
* **Stability:** Handling of empty credential states to verify application error messaging.

---

## **🔎 Project Highlights & Solutions**
* **Piercing Iframes:** Successfully navigated OpenEMR’s legacy architecture using `frameLocator` to interact with hidden clinical modules.
* **Scalable Architecture:** Utilized POM to separate selectors from test logic, ensuring high maintainability.
* **Security Validation:** Built dedicated suites for Negative Testing to ensure robust handling of unauthorized access.

---

## **📁 Project Artifacts & Test Status**

| Test Suite | Status | Artifacts |
| :--- | :---: | :--- |
| **Functional Success** | Passed ✅ | [Screenshot](./evidence/auth.spec.png) • [Video](./evidence/auth.spec.mp4) |
| **Security / Negative** | Passed ✅ | [Screenshot](./evidence/auth.negative.spec.png) • [Video](./evidence/auth.negative.spec.mp4) |
| **Empty State** | Passed ✅ | [Screenshot](./evidence/empty.spec.png) • [Video](./evidence/empty.spec.mp4) |




* **Trace Viewer Debugging:** Playwright Trace Viewer is utilized as the primary diagnostic tool, allowing for a frame-by-frame post-mortem analysis of the automation lifecycle—essential for debugging complex iframe interactions in healthcare environments.

---

## **⚙️ Technical Performance Notes**
* **Optimization:** Configured specifically for Chromium to maximize execution speed and resource efficiency.
* **CI/CD:** Includes GitHub Actions workflows for automated pipeline readiness.

---

## **▶️ How to Run This Suite Locally**

Follow these steps to run the test suite on your machine:

1. **Install Dependencies:**
   npm install

2. **Execute All Tests:**
   npx playwright test

3. **View HTML Report:**
   npx playwright show-report


