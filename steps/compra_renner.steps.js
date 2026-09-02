const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber');

const { chromium } = require('@playwright/test');
const { RennerPage } = require('../pages/rennerPage');

let browser;
let page;
let renner;

Given('que estou na página inicial da Renner', async function () {
  browser = await chromium.launch({
    headless: false
  });

  page = await browser.newPage();

  renner = new RennerPage(page);

  await renner.acessarPagina();
});

When('busco o produto {string}', async function (produto) {
  await renner.buscarProduto(produto);
});

When('clico no produto {string}', async function (produto) {
  await renner.selecionarProduto(produto);
});

When('seleciono o tamanho {string}', async function (tamanho) {
  await renner.selecionarTamanho(tamanho);
});

When('adiciono o produto ao carrinho', async function () {
  await renner.adicionarAoCarrinho();
});

Then('o carrinho deve conter os produtos:', async function (dataTable) {
  await renner.abrirCarrinho();

  await renner.validarQuantidade(2);

  const produtos = dataTable.hashes();

  for (const produto of produtos) {
    await renner.validarProduto(produto.produto);
    await renner.validarPreco(produto.preco);
  }

  await browser.close();
});