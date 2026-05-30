const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'mcps/playwright',
  timeout: 30000,
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ],
  reporter: [['list']]
});
