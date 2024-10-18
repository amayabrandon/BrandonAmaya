import PDFParser from 'pdf2json';
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //1. Acceder a la página del Banco Caja Social.
  await page.goto('https://www.bancocajasocial.com/');
  //2. Navegar a la sección de Empresas.
  await page.getByRole('link', { name: 'Empresas' }).click();
  //3. Ir a la opción de Productos.
  await page.locator('svg').first().click();
 //4. Seleccionar Pago y Recaudos y luego Recaudos.
  await page.locator('#nav-wrapper div').filter({ hasText: 'Pagos y Recaudos' }).nth(2).click();
  await page.getByRole('link', { name: 'Recaudo', exact: true }).click();
 //5. Localizar la sección de Contenidos Relacionados 
  await page.getByRole('link', { name: 'Contenidos relacionados' }).click();
 //6. Abrir el documento de Reglamento de Recaudos.
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Enlace Contrato Marco Cash' }).click();
  const page1 = await page1Promise;

  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pages = await context.pages();

});




