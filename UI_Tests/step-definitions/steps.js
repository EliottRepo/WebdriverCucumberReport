import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import users from '../data/users.json';  // Import the JSON file


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

When(/^User clicks in Sign In button$/, async () => {
    await LoginPage.clickBtnSignIn();
});

Given(/^User am on the (\w+) page$/, async (page) => {
    await LoginPage.open();  // Adjust based on your implementation
});

When(/^User login with (.+) credentials and click Continue button$/, async (userType) => {
    const { username, password } = users[userType]; // Get the user from the JSON file
    
    // Print the username and password to the console
    console.log(`Logging in with username: ${username} and password: ${password}`);

    await LoginPage.login(username, password);
});

Then(/^User should see a flash message saying (.+)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^User clicks Remind me later button$/, async () => {
    await LoginPage.clickBtnRemindMeLater();
});