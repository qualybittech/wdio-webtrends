import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import WebTrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import WebTrendsHomePage from '../pageobjects/webtrends.home.page.js';
import webtrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import webtrendsForgetpasswordPage from '../pageobjects/webtrends.forgetpassword.page.js';
import webtrendsVerificationPage from '../pageobjects/webtrends.verification.page.js';

Given('I am on the webtrends website home page', async () => {
    await WebTrendsLoginPage.appLaunch('/');
    await browser.maximizeWindow();
});

When(/^I login with webtrends (.*), (.*), (.*)/, async (email, password,type) => {
    await WebTrendsLoginPage.webtrendsLogin(email, password,type);
});

When('I click on "Sign in with SSO"', async () => {
    await WebTrendsLoginPage.clickSSOButton();
});


Then(/^I should see username logged in (.*)/, async (username) => {
    await expect(WebTrendsHomePage.loggedInUser(username)).toBeExisting();
});

Then('Logout from application',async() =>{
    await WebTrendsHomePage.webtrendsLogout();
})

Then('I should not be able to login',async() =>{
    await expect(webtrendsLoginPage.invalidLoginErrorMsg()).toBeExisting();
})

Then(/^I Navigate to (.*)/,async(menuname) =>{
    await WebTrendsHomePage.navigateToMenu(menuname);
})

Then(/^I check for forgetpassword (.*)/,async(email) =>{
    await webtrendsForgetpasswordPage.webtrendsForgetPassword(email);
})

When('I click on the Forgot password link', async () => {
    await WebTrendsLoginPage.clickForgotPasswordLink();
});

When(/^I will enter my email address (.*)$/, async (email) => {
    await WebTrendsLoginPage.enterEmailaddress(email);
});

When('I will click on the Request reset link', async () => {
    await WebTrendsLoginPage.clickRequestresetLink();
});

Then('I should see a confirmation message for the reset link', async () => {
    await WebTrendsLoginPage.VerifyforgotPasswordDisplayed();
});


Then('I check dashboard page contents', async () => {
    await WebTrendsHomePage.VerifyDashboardDisplayed();
});

Then('I click create menu and verify', async () => {
    await WebTrendsHomePage.NavigateCreateMenuAndVerify();
});

Then('I click experiences menu and verify', async () => {
    await WebTrendsHomePage.NavigateExperiencesMenuAndVerify();
});

Then('I click configure menu page and verify', async () => {
    await WebTrendsHomePage.NavigateConfigureMenusAndVerify();
});

Then('I should see the verification code', async () => {
    await webtrendsVerificationPage.webtrendsVerificationCode();
});