import { $ } from '@wdio/globals';
import Page from './page.js';
import fs from 'fs';
import path from 'path';

class ExperiencePage extends Page {
    public get experiencesTab() {
        return $('a*=Experiences'); // safer match by text
    }

    public get experiencesPageHeader() {
        return $('//div[@class="titleContainer"]/p');
    }

    public async openExperiencesPage() {
        await this.experiencesTab.waitForDisplayed({ timeout: 20000 });
        await this.experiencesTab.click();
    }

    public async verifyExperiencesPage() {
        const pageHeader = await $('//div[@class="titleContainer"]/p');
        await pageHeader.waitForExist({ timeout: 15000 });
        await pageHeader.waitForDisplayed({ timeout: 15000 });
        const headerText = await pageHeader.getText();
        expect(headerText).toContain('Experiences');
    }



    public async clickStatusTab(tabName: string) {
        const allTabs = await $$('//div[contains(@class,"filter_heading")]/div');
        for (const tab of allTabs) {
            const text = await tab.getText();
            if (text.toLowerCase().includes(tabName.toLowerCase())) {
                await tab.scrollIntoView();
                await tab.waitForDisplayed({ timeout: 10000 });
                await tab.waitForClickable({ timeout: 10000 });
                await tab.click();
                await browser.pause(1000);
                return;
            }
        }
        throw new Error(`Unable to find and click tab with name "${tabName}"`);
    }

    public async verifyStatusTabSelected(tabName: string) {
        const allTabs = await $$('//div[contains(@class,"filter_heading")]/div');
        for (const tab of allTabs) {
            const text = await tab.getText();
            const classes = await tab.getAttribute('class');
            if (text.toLowerCase().includes(tabName.toLowerCase())) {
                expect(classes).toContain('selected');
                return;
            }
        }
        throw new Error(`Tab with name "${tabName}" not found.`);
    }

    public get statusCells() {
        return $$('//td[contains(@class,"statusColumn")]/div/button/span');
    }

    public async verifyAllStatusesMatch(expectedStatus: string) {
        const statusCells = await this.statusCells;
        for (const cell of statusCells) {
            const status = await cell.getText();
            expect(status.toLowerCase()).toContain(expectedStatus.toLowerCase());
        }
    }

    public async checkTabAndStatuses(tabName: string) {
        console.log(`Checking tab: ${tabName}`);
        await this.clickStatusTab(tabName);
        await this.verifyStatusTabSelected(tabName);
        await this.verifyAllStatusesMatch(tabName);
    
        // Ensure the screenshots directory exists
        const screenshotsDir = path.resolve('./screenshots');
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true });
        }
    
        await browser.saveScreenshot(`${screenshotsDir}/status-check-${tabName}.png`);
    }

    public async checkAllTabsStatus() {
        const tabs = ['Live', 'Paused', 'Staging', 'Pending', 'Published', 'Archived'];
        for (const tab of tabs) {
            await this.checkTabAndStatuses(tab);
        }
    }

    public async verifyAllStatusesDisplayed() {
    const statuses = await this.statusCells;
    expect(statuses.length).toBeGreaterThan(0);

    const foundStatuses = new Set<string>();

    for (const cell of statuses) {
        const text = (await cell.getText()).toLowerCase();
        foundStatuses.add(text);
      }

    console.log('Found statuses:', [...foundStatuses]);

    const expectedStatuses = ['live', 'paused', 'staging', 'pending', 'published', 'archived'];

    for (const status of expectedStatuses) {
        expect([...foundStatuses]).toContain(status);
      }
    }
    
    
}

export default new ExperiencePage();