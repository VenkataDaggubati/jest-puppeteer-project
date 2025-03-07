module.exports = {
  globalSetup: './puppeteer_local_global_setup.js',
  globalTeardown: './puppeteer_teardown.js',
  testEnvironment: './puppeteer_local_environment.js',
  preset: "jest-puppeteer",
  preset: "ts-jest",
  testRegex: "(/tests/.*|(\\.|/)(test))\\.ts$", // Set your test file location
  testTimeout: 60000,
  
  verbose: true,
  roots: ['./'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'User Profile Integration Tests',
        outputDirectory: './src/reports/puppeteer/junit',
        outputName: `tests_results_local.xml`,
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './src/reports/puppeteer/html',
        filename: `tests_results_local.html`,
        openReport: false,
      },
    ],
  ],
}



