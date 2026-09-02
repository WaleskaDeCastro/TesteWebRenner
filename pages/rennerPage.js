const { expect } = require('@playwright/test');
class RennerPage {
  constructor(page) {
    this.page = page;

    this.campoBusca = page.getByRole('textbox', {
      name: 'Buscar produtos por texto ou foto'
    });

    this.botaoAdicionar = page.getByRole('button', {
  name: 'Buy Button'
});
    this.botaoCarrinho = page.getByRole('link', {
      name: 'Acesso ao carrinho de compras'
    });

    this.quantidadeCarrinho = page.locator('#titleQuantityOfItems');
  }

  async acessarPagina() {
    await this.page.goto('https://www.lojasrenner.com.br/');
  }

  async buscarProduto(produto) {
  await this.campoBusca.fill(produto);
  await this.campoBusca.press('Enter');

  await this.page.waitForURL(/\/b\?Ntt=/);
  await this.page.waitForLoadState('domcontentloaded');
}

  async selecionarProduto(produto) {
  const produtoCard = this.page
    .locator('a.ProductBox_productBox__juRuk')
    .filter({ hasText: produto })
    .first();

  await produtoCard.scrollIntoViewIfNeeded();
  await produtoCard.click();

  await this.page.waitForURL(/\/p\//);
}

  async selecionarTamanho(tamanho) {
  const tamanhoElemento = this.page
    .locator('.ProductAttributes_attributeContent__vNPJr span')
    .filter({ hasText: tamanho })
    .first();

  await tamanhoElemento.waitFor({ state: 'visible' });
  await tamanhoElemento.click();
}

  async adicionarAoCarrinho() {
    await this.botaoAdicionar.click();
  }

  async abrirCarrinho() {
    await this.botaoCarrinho.click();
  }

  async validarQuantidade(quantidade) {
  await expect(this.quantidadeCarrinho).toContainText(
    `MINHA SACOLA (${quantidade})`
  );
  }

  async validarProduto(produto) {
  await expect(this.page.locator('body')).toContainText(produto);
}

  async validarPreco(preco) {
  await expect(this.page.locator('body')).toContainText(preco);
}
}

module.exports = { RennerPage };