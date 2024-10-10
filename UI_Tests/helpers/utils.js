import { $ } from '@wdio/globals';

class Utils {
    async waitForVisible(selector, timeout = 10000) {
        const element = $(selector);
        await element.waitForDisplayed({ timeout });
    }

    async waitForClickable(selector, timeout = 10000) {
        const element = $(selector);
        await element.waitForClickable({ timeout });
    }

    async waitForDisplayed(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
    }
    // You can add more utility methods as needed
}

export default new Utils();
