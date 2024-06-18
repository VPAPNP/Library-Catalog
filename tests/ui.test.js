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
test("Verify register user register a new user", async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    await page.click('#guest > a:nth-child(2)');
    const email = page.locator('#email');
    const password = page.locator('#password');
    const repeatPassword = page.locator('#repeat-pass');

    await email.fill('vasil1@abv.bg');
    await password.fill('VaskoJivkov123');
    await repeatPassword.fill('VaskoJivkov123');
    await page.click('#register-form > fieldset > input');

    await page.waitForURL(appUrl + 'catalog');

    expect(page.url()).toBe(appUrl + 'catalog');



    
   });

test("Verify login user login", async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    await page.click('#guest > a');
    const email = page.locator('#email');
    const password = page.locator('#password');
    await email.fill('vasil1@abv.bg');
    await password.fill('VaskoJivkov123');
    await page.click('#login-form > fieldset > input');
    await page.waitForURL(appUrl + 'catalog');
});   