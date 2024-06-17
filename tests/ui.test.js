const {test, expect} = require('@playwright/test');
const appUrl = "http://localhost:3000/";
test('Verifi All books link is visible', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');

    const isVisible = await allBooksLink.isVisible();

    expect(isVisible).toBeTruthy();
    
});
test('Verifi Login btn link is visible', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const loginBtn = await page.$('a[href="/login"]');

    const isVisible = await loginBtn.isVisible();

    expect(isVisible).toBeTruthy();
    
});
test('Verifi Register btn link is visible', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerBtn = await page.$('a[href="/register"]');

    const isVisible = await registerBtn.isVisible();

    expect(isVisible).toBeTruthy();
    
});
test("Verify register text link", async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerText = await page.$('a[href="/register"]');

    const text = await registerText.innerText();

    expect(text).toBe("Register");
    
});
test("Verify valid user can login", async ({page}) => {
    await page.goto("http://localhost:3000/login");
    await page.waitForURL("http://localhost:3000/login");
    const emailInput = await page.$("#email");
    const passwordInput = await page.$("#password");
    await emailInput.fill('vasil@abv.bg');
    await passwordInput.fill("123456");
    // const loginButton = await page.waitForSelector('#guest > a:nth-child(1)');
    // await loginButton.click();
    
     const loginBtn = await page.locator('xpath=//*[@id="login-form"]/fieldset/input');
     await loginBtn.click();
     const logoutBtn = await page.$('#logoutBtn');
     const logoutBtnText = await logoutBtn.innerText();
     expect(logoutBtnText).toBe("Logout");
    
}); 
