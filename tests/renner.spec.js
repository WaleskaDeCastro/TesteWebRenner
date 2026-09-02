import { test, expect } from '@playwright/test';

test('Fluxo de busca, compra e carrinho - Renner', async ({ page }) => {
  await page.goto('https://www.lojasrenner.com.br/');

  // Busca
  await page
    .getByRole('textbox', { name: 'Buscar produtos por texto ou foto' })
    .fill('blusa feminina');

  await page
    .getByRole('textbox', { name: 'Buscar produtos por texto ou foto' })
    .press('Enter');

  await expect(page.locator('body'))
    .toContainText('Busca por blusa feminina - Renner');

  // Produto
  // Produto
  await page.getByText('Blusa Assimétrica em Malha com Gola Alta').first().click();
  await expect(page.locator('body'))
    .toContainText('Blusa Assimétrica em Malha com Gola Alta');

  await expect(page.locator('[id="__next"]'))
    .toContainText('R$ 119,90');

  await expect(page.locator('[id="__next"]'))
    .toContainText('Descrição');

  // Tamanho
  await page.locator('span').filter({ hasText: /^M$/ }).click();

  // Adicionar à sacola
  await page.getByRole('button', { name: 'Buy Button' }).click();

  // Carrinho
  await page
  .getByRole('link', { name: 'Acesso ao carrinho de compras' })
  .click();

   await expect(page.locator('#titleQuantityOfItems'))
  .toContainText('MINHA SACOLA (1)');

  await expect(page.locator('body'))
  .toContainText('Blusa Assimétrica em Malha com Gola Alta');

  await expect(page.locator('body'))
  .toContainText('quantidade');

  await expect(page.locator('body'))
  .toContainText('R$ 119,90');
});