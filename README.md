# WebdriverIO BGE Test Automation Project

## Overview

This is an end-to-end (E2E) test automation framework for the **BGE project** using **WebdriverIO** and **Cucumber**. The purpose of this project is to automate testing for the BGE website's key functionalities and ensure quality and reliability through automated scripts.

The framework utilizes **Cucumber** for writing feature files in Gherkin syntax, providing a clear and concise way to describe test scenarios in plain language. The test automation is run using **WebdriverIO** with support for **Chrome** and **Microsoft Edge** browsers.

## Project Structure

The project is organized as follows:

```
├── UI_Tests
│   ├── data
│   │   └── users.json                 # Test data such as user credentials
│   ├── features
│   │   └── login.feature              # Feature files written in Gherkin syntax
│   ├── helpers
│   │   ├── generate-cucumber-html-report.js # Script to generate HTML report
│   │   └── utils.js                   # Utility functions used across the framework
│   ├── pageobjects
│   │   ├── login.page.js              # Page Object for the login page
│   │   ├── page.js                    # Base Page Object
│   │   └── secure.page.js             # Page Object for the secure area
│   ├── step-definitions
│   │   └── steps.js                   # Step definitions corresponding to Gherkin steps
├── reports
│   ├── json                           # JSON reports generated from tests
│   └── html                           # HTML reports generated using cucumber-html-reporter
├── wdio.conf.js                        # WebdriverIO configuration file
├── package.json                        # Project dependencies and scripts
├── package-lock.json                   # Dependency lock file
└── README.txt                          # Project README file
```

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd WebdriverIO-bge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running Tests

To run the automated tests, use the following command:

```bash
npm run tests
```

This will execute the tests as defined in the feature files located in the `UI_Tests/features` directory.

## Running Tests by Tags

To run the automated tests, use:

```bash
npm run tag --tag=@sampletag
```

This will execute the tests as defined in the feature files located in the `UI_Tests/features` directory.
## Generating Reports

The framework generates JSON reports using the **wdio-cucumberjs-json-reporter**. After running the tests, you can generate an HTML report by executing:

```bash
npm run report
```

This will generate a `cucumber_report.html` file in the `reports/html` directory.

### Report Cleanup

Before running new tests, the project automatically deletes previous report files using the `onPrepare` hook in `wdio.conf.js`. This ensures that the report directories are clean before new test runs.

## Configuration

- **Browser Configuration**: The WebdriverIO configuration (`wdio.conf.js`) allows running tests on **Chrome** and optionally on **Microsoft Edge**. You can modify the `capabilities` section to add more browsers.
- **Log Level**: The logging level is set to `'info'` to provide detailed output. You can change it based on your requirements.

## Project Scripts

- **Run Tests**:
  ```bash
  npm run wdio
  ```

- **Generate Report**:
  ```bash
  npm run report
  ```

- **Clean Reports (Optional)**:
  ```bash
  npm run clean-reports
  ```
  Use this if you want to manually clear the reports before running new tests.

## Dependencies

- **WebdriverIO**: A JavaScript framework for browser automation.
- **Cucumber**: For writing feature files in Gherkin syntax.
- **Cucumber HTML Reporter**: To generate pretty HTML reports for test results.

## Troubleshooting

- **No Reports Generated**: Ensure the paths specified for JSON and HTML reports in `wdio.conf.js` and `generate-cucumber-html-report.js` are correct.
- **ChromeDriver Issues**: Ensure that your Chrome browser version matches the installed ChromeDriver version.

## Future Improvements

- **Add More Browsers**: Extend the configuration to include additional browsers like **Firefox** or **Safari**.
- **CI Integration**: Integrate the project with **Azure DevOps** or another CI/CD tool to automate the test runs.

## License

This project is licensed under the **MIT License**.

## Contact

For questions or suggestions, feel free to reach out to the development team.
