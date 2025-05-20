const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //video: true,
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "e2e/**/*.cy.{js,jsx,ts,tsx}"], // Add this line
  },
});