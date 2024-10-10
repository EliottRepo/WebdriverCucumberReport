import { $ } from '@wdio/globals'
import Page from './page.js';
import Utils from '../helpers/utils.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#signInName'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $("button[type='submit']"); }
    get btnRemindMeLater() { return $("p[id='remindLater']"); }
    get btnSignIn() { return $("//a[contains(text(),'Sign In')]"); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await Utils.waitForDisplayed(this.inputUsername);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    // Method to click Sign In button
    async clickBtnSignIn() {
        // await Utils.waitForClickable(this.btnSignIn);
        await this.btnSignIn.click();
    }

    // Method to click Remind Me Later button
    async clickBtnRemindMeLater() {
        await this.btnRemindMeLater.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open();
    }

}

export default new LoginPage();
