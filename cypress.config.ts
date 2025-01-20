import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Update with your app's base URL
    setupNodeEvents(on, config) {
      // Add event listeners for E2E here if needed
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Test file pattern
    supportFile: "cypress/support/e2e.ts", // Support file
  },
});
