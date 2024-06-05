import { Page } from 'playwright';

export async function newPageHandle(page: Page): Promise<Page> {

  const [newPage] = await Promise.all([
    await page.waitForEvent('popup'),
    await page.setViewportSize({ width: 1920, height: 1000 }),
    await page.waitForLoadState('load'),
  ]);
  return newPage;
}