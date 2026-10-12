import{test}from"@playwright/test";
test('launch browser',async({page})=>{await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('[id="username"]').fill('democsr')
    await page.locator('[id="password"]').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('[id="createLeadForm_companyName"]').fill('ZZZ')
    await page.locator('[id="createLeadForm_firstName"]').fill('XXX')
    await page.locator('[id="createLeadForm_lastName"]').fill('YYY')
    await page.locator('[id="createLeadForm_personalTitle"]').fill('AAA')
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('BBB')
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('1000000')
    await page.locator('[id="createLeadForm_departmentName"]').fill('1234')
    await page.locator('[id="createLeadForm_dataSourceId"]').selectOption({ label: 'Cold Call' })
    let ddvalue= page.locator('[id="createLeadForm_dataSourceId"] > option')
      let ddCount = await ddvalue.count()
    console.log(ddCount);
    for (let index = 0; index < ddCount; index++) {
        
        console.log(await ddvalue.nth(index).innerText());
        
    }
    await page.locator(' input[class="smallSubmit"]').click()
    await page.waitForTimeout(5000)
})