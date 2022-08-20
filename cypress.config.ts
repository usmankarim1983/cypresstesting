import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1024,
  defaultCommandTimeout: 80000,
  requestTimeout: 80000,
  responseTimeout: 75000,
  pageLoadTimeout: 20000,
  video: false,
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://demo.automationtesting.in/',
  },
})
