const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { abrir_browser, fechar_browser } = require('./base');

setDefaultTimeout(60000);

Before(async function () {
    await abrir_browser.call(this);
});

After(async function () {
    await fechar_browser.call(this);
});