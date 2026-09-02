const { chromium } = require('@playwright/test');

async function abrir_browser() {
    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
}

async function fechar_browser() {
    if (this.browser) {
        await this.browser.close();
    }
}

module.exports = {
    abrir_browser,
    fechar_browser
};