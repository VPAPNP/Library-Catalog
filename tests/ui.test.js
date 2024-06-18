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
test("Verify valid user can register", async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForURL(appUrl);

    const registerButton = await page.waitForSelector('#guest > a:nth-child(2)', { state: 'visible' });
    await registerButton.click();

    const emailInput = await page.waitForSelector('#email', { state: 'visible' });
    expect(emailInput).toBeTruthy();
    await emailInput.fill('vasil@abv.bg');

    const passwordInput = await page.waitForSelector('#password', { state: 'visible' });
    expect(passwordInput).toBeTruthy();
    await passwordInput.fill('1234');

    const repeatPasswordInput = await page.waitForSelector('#repeat-pass', { state: 'visible' });
    expect(repeatPasswordInput).toBeTruthy();
    await repeatPasswordInput.fill('1234');

    const registerBtn = await page.waitForSelector('#register-form > fieldset > input', { state: 'visible' });
    await registerBtn.click();

    await page.waitForURL(appUrl + 'catalog');
    const logoutBtn = await page.waitForSelector('#logoutBtn');
    const isVisible = await logoutBtn.isVisible();
    expect(isVisible).toBeTruthy();



    
    
});
// test("Verify valid user can login", async ({ page }) => {
//     await page.goto(appUrl);
//     await page.waitForURL(appUrl);

//     const loginButton = await page.waitForSelector('#guest > a:nth-child(1)', { state: 'visible' });
//     await loginButton.click();

//     const emailInput = await page.waitForSelector('#email', { state: 'visible' });
//     expect(emailInput).toBeTruthy();
//     await emailInput.fill('vasil@abv.bg');
//     const passwordInput = await page.waitForSelector('#password', { state: 'visible' });
//     expect(passwordInput).toBeTruthy();
//     await passwordInput.fill('1234');
//     const logoutBtn = await page.waitForSelector('#logoutBtn');
//     const isVisible = await logoutBtn.isVisible();
//     expect(isVisible).toBeTruthy();

// });   