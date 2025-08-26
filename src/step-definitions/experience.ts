import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import WebTrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import WebTrendsHomePage from '../pageobjects/webtrends.home.page.js';
import webtrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import webtrendsForgetpasswordPage from '../pageobjects/webtrends.forgetpassword.page.js';
import webtrendsVerificationPage from '../pageobjects/webtrends.verification.page.js';
import webtrendsMyaccountPage from '../pageobjects/webtrends.myaccount.page.js';
import webtrendsDashboardPage from '../pageobjects/webtrends.dashboard.page.js';
import ExperiencePage from '../pageobjects/webtrends.experience.page.js';






Given('I am on the dashboard page', async () => {
    await browser.pause(1000); // assume you're already logged in
});

When('I click the Experiences tab', async () => {
    await ExperiencePage.openExperiencesPage();
});

Then('I should see the Experiences page', async () => {
    await ExperiencePage.verifyExperiencesPage();
});



When('I click the Live tab', async () => {
    await ExperiencePage.clickStatusTab('Live');
});

Then('I should see the Live tab selected', async () => {
    await ExperiencePage.verifyStatusTabSelected('Live');
});

Then('all visible tests should have status Live', async () => {
    await ExperiencePage.verifyAllStatusesMatch('Live');
});


When(/^I check the "(.*)" tab and its statuses$/, async (tabName) => {
    await ExperiencePage.checkTabAndStatuses(tabName);
});


When(/^I click the "(.*)" tab$/, async (tabName: string) => {
    await ExperiencePage.clickStatusTab(tabName);
});

Then(/^I should see tests with all statuses displayed$/, async () => {
    await ExperiencePage.verifyAllStatusesDisplayed(); // You’ll need to define this method in your page object
});
