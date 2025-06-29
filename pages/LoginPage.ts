import { Page, expect } from "@playwright/test";
import { cfg } from '../helpers/cfg'


export class LoginPage {
    waitForURL(arg0: string, arg1: { timeout: number; }) {
        throw new Error('Method not implemented.');
    }
    usernameInput;
    passwordInput;
    loginButton;

    errorMessageContainer;
    errorMessageText;
    errorCloseButton;
    inputErrorIcon;


    constructor(private page: Page) {
        this.usernameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.errorMessageContainer = page.locator('div.error-message-container.error')
        this.errorMessageText = this.errorMessageContainer.locator('[data-test="error"]');
        this.errorCloseButton = this.errorMessageContainer.locator('[data-test="error-button"]');
    }

    async goto() { await this.page.goto(cfg.baseURL) }

    async loginSuccessful(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password)

        await Promise.all([
            this.page.waitForURL('**/inventory.html', { timeout: 70000 }),
            this.loginButton.click()
        ])
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click();
    }
    async loginErrorVisible(expectedMessage?: string) {
        if (expectedMessage) {
            const errorTextLocator = this.page.getByText(expectedMessage);
            await expect(errorTextLocator).toBeVisible({ timeout: 70000 });
            await expect(this.errorMessageText).toHaveText(expectedMessage);
        } else {
            await expect(this.errorMessageText).toBeVisible();
        }
        await expect(this.errorCloseButton).toBeVisible();
    }
    async loginErrorClose() {
        await expect(this.errorCloseButton).toBeVisible();
        await this.errorCloseButton.click();
        await expect(this.errorMessageContainer).toBeHidden();
    }
}