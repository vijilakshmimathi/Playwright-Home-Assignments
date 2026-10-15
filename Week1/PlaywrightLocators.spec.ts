import test, { expect } from "@playwright/test";
test('Playwright Locators Test', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.getByLabel('Password').fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'CRM/SFA' }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator('[id="createLeadForm_companyName"]').fill('TestLeaf');
    await page.locator('[id="createLeadForm_firstName"]').fill('Viji');
    await page.locator('[id="createLeadForm_lastName"]').fill('Mathi');
    await page.locator('[id="createLeadForm_personalTitle"]').fill('AAA')
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('BBB')
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('1000000')
    await page.locator('[id="createLeadForm_departmentName"]').fill('1234')
    await page.getByRole('button', { name: 'Create Lead' }).click();
    await page.waitForTimeout(5000);
});