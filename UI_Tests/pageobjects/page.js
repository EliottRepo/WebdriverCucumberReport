import { browser } from '@wdio/globals';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`${process.env.BASE_URL}/${path}`);
    }

    openBge() {
        return browser.url(process.env.BGE_URL);
    }
}
