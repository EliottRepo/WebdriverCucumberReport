import { generate } from 'cucumber-html-reporter';
import fs from 'fs';
import path from 'path';

// Define the directory and report paths
const jsonDir = './reports/json';
const htmlDir = './reports/html';
const htmlFilePath = path.join(htmlDir, 'cucumber_report.html');

// Ensure the html directory exists
if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir, { recursive: true });
}

// Options for the report
const options = {
    theme: 'bootstrap',
    jsonDir: jsonDir, // Directory where JSON reports are stored
    output: htmlFilePath, // Path where the HTML report should be generated
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

// Generate the report
generate(options);
