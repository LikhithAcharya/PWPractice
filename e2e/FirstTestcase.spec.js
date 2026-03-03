import { test } from '@playwright/test';
import { HomePage } from "../pageobjects/HomePage";
import { SecondPage } from '../pageobjects/SecondPage';


test( 'First PW test', async ({ page }) => {
    const homePage = new HomePage(page);
    const secondPage = new SecondPage(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await homePage.login('tomsmith', 'SuperSecretPassword!');
    await secondPage.checkUsedCheckbox();
});  
