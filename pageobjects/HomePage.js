exports.HomePage = class HomePage {

    constructor(page)
    {

        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.loginButton2 = page.locator('#login-button2');

    }

    async login(username,password)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await console.log("Login button is visible:");
        await this.loginButton.click();
    }
    

}
