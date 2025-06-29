import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { validUsers, userListPassword, lockedOutUsers } from '../data/userList'
import { cfg } from '../helpers/cfg'

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await loginPage.goto();

    })

    test.afterEach(async ({ page }) => {
        await page.goto(cfg.baseURL)
    })
    for (const username of validUsers) {
        test(`Login with  valid user: ${username}`, async () => {
            await loginPage.loginSuccessful(username, userListPassword)
        
        })
    }
    for (const username of lockedOutUsers) {
        test(`Login with locked out user: ${username}`, async () => {
            await loginPage.login(username, userListPassword)
            await loginPage.loginErrorVisible('Epic sadface: Sorry, this user has been locked out.')
            await loginPage.loginErrorClose();
        })
    }
    test('Forced failed login', async () => {
        await loginPage.login('invalid_user', 'invalid_password')
        await loginPage.loginErrorVisible()
        await loginPage.loginErrorClose();
    })
})

