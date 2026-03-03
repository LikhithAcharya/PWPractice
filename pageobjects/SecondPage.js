exports.SecondPage = class SecondPage {

    constructor(page)
    {
        this.page = page;
        this.list = page.locator('#checkboxes');
        this.usedCheckbox = page.locator('#checkboxes input').nth(0);
        this.unusedCheckbox = page.locator('#checkboxes input').nth(1);
    }

    async checkUsedCheckbox(){

        await this.usedCheckbox.check();
        await this.unusedCheckbox.uncheck();
    }
}