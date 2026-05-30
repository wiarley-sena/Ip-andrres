import { test, expect } from '@playwright/test';

test('Busca IP e captura screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('input[placeholder="Digite seu IP"]', '8.8.8.8');
  await page.evaluate(() => {
    const i = document.querySelector('input[placeholder="Digite seu IP"]');
    if (i) i.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.click('.container-input button');
  await page.waitForResponse(
    (r) => r.url().includes('/api/ip') && r.url().includes('ip=8.8.8.8') && r.status() === 200,
    { timeout: 10000 }
  );
  await page.waitForSelector('.leaflet-marker-icon', { timeout: 8000 });
  await page.waitForTimeout(3000); // Espera adicional para garantir que o mapa esteja totalmente renderizado
  await page.screenshot({ path: 'mcps/screenshots/ip-8.8.8.8.png', fullPage: true });
});
