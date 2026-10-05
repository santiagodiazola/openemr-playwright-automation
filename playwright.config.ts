import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only to catch flaky tests */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI to avoid resource contention */
  workers: process.env.CI ? 1 : undefined,
  
  /* Output clean console list + HTML report */
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  
  /* Shared settings for all projects */
  use: {
    /* Fallback to public demo if BASE_URL environment variable is not set */
    baseURL: process.env.BASE_URL || 'https://demo.openemr.io/',
    
    /* Record trace on first retry for debugging */
    trace: 'on-first-retry',
    
    /* Capture screenshot only on failure */
    screenshot: 'only-on-failure',
    
    /* Retain video on failure */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment for cross-browser testing when needed:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});