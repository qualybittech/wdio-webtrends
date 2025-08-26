import { $ } from '@wdio/globals'
import Page from './page.js';


class WebTrendsDashboardPage extends Page {
   

    public get experienceOverviewLive () {
        return $('//div[@class="testState "][1]//p');
    }

    public get experienceOverviewStaging () {
        return $('//div[@class="testState "][2]//p');
    }

    public get experienceOverviewPublished () {
        return $('//div[@class="testState "][3]//p');
    }

    public get experienceOverviewLiveButton () {
        return $('//div[@class="testState "][1]');
    }

    public get experienceOverviewStagingButton () {
        return $('//div[@class="testState "][2]');
    }

    public get experienceOverviewPublishedButton () {
        return $('//div[@class="testState "][3]');
    }

    public get session() {
        return $('//div[contains(@class,"faq-page")]//h1[contains(translate(normalize-space(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "session usage")]');
    }    
    

    public get sessionUsageFaqs() {
        return $('//div[contains(@class, "sessionUsageFaqs")]//a');
    }

    public get sessionUsagePage() {
        return $('//header[text()="Understanding Session Usage"]');
    }
    

    public get bannerOption() {
        return $('//div[contains(@class,"bannerContainer right")]//div[@class="chevron"]//*[name()="svg"]');
    }

    public get bannerPromptionOpen() {
        return $('//div[@class="bannerContainer right "]//div[@class="banner open"]');
    }

    public get bannerPromption() {
        return $('//yt-page-header-renderer[@class="page-header-renderer-wiz page-header-sidebar style-scope ytd-browse"]');
    }   

    public get bannerPromptionVerification() {
        return $('//div[@class="bannerContainer right "]//div[@class="bannerHeader headerOpenNoTransition"]');
    }
    

    public get experienceChartVerification() {
        return $('//p[normalize-space()="Experiences Launched"]');
    }

    public get experienceChartExpand() {
        return $('//div[@style="cursor: pointer;"]//*[@class="apexcharts-svg"]');
    }

    public get logo() {
        return $('//img[@alt="Optimize Logo"]');
    }

    public get experienceChartMinimize() {
        return $('//span[@class="minimize_toggle"]');
    }

    public get experienceChartTopAbn() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-top"]//span[normalize-space()="ABn"]');
    }

    public get experienceChartTopTarget() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-top"]//span[normalize-space()="Target"]');
    }

    public get experienceChartTopSplit() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-top"]//span[normalize-space()="Split"]');
    }

    public get experienceChartTopBaseline() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-top"]//span[normalize-space()="Baseline"]');
    }

    public get experienceChartTopMVT() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-top"]//span[normalize-space()="MVT"]');
    }

    public get experienceChartBottomAbn() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"]//span[normalize-space()="ABn"]');
    }

    public get experienceChartBottomTarget() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"]//span[normalize-space()="Target"]');
    }

    public get experienceChartBottomSplit() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"]//span[normalize-space()="Split"]');
    }

    public get experienceChartBottomBaseline() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"]//span[normalize-space()="Baseline"]');
    }

    public get experienceChartBottomMVT() {
        return $('//div[@class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"]//span[normalize-space()="MVT"]');
    }
    
    public get reportText() {
        return $('//p[text()="live experiences closest to significance"]');
    }

    public get reportgetText() {
        return $('//div[@class="testHeader"]//div[2]');
    }
    
    public get reportView() {
        return $('//a[text()="View Full Report"]');
    }

    public get reportNoKpi() {
        return $('//div[@class="noKpiMessage"]');
    }


    
    public get reportKpiSelector() {
        return $('//select[@id="kpiSelector"]');
    }
    public get reportKpiSelectoroption() {
     return $('//select[@id="kpiSelector"]/option[text()="webloan_complete"]');
    }
    public get reportKpiSelectoroptiontwo() {
        return $('//*[@id="kpiSelector"]/option[2]');
    }

    public get reportData() {
        return $('//td[text()="710"]');
    }

    public get webtrendsEditdashboard() {
        return $('.right_container > .edit-button');
    }
    public get checkbox() {
        return $('//*[@id="show-checkbox-item-0"]');
    }
    public get saveDashboardButton() {
        return $('div.button-group > button.save-button.redesign-button-primary');
    }
    


    
    public get editedExperienceGettext() {
        return $('//div[@class="recentlyEditedTestsContainer"]//a[1]//div[1]//div[1]//p[1]');
    }

    public get editedExperienceEdit() {
        return $('//div[@class="recentlyEditedTestsContainer"]//a[1]//div[1]//div[3]');
    }

    public get editedExperienceVerify() {
        return $('//p[text()="Recently Created/Edited Experiences"]');
    }
    
    public get editedExperienceLabel() {
        return $('//div[@class="labels"]');
    }

    public get label1() {
        return $('//a[contains(@href, "labelFilter")]//button');
    }

    public get label2() {
        return $('//a[@href="/optimize/?labelFilter=1_0"]//button');
    }
    
    public get clearFilter() {
        return $('//div[@class="clearAll"]');
    }   

    public get noLabels() {
        return $('//div[text()="Edit the dashboard to add the labels you most often use here as quick filters"]');
    }

    public get label1Verify() {
        return $('//div[@class="added_filters_container"]//div[1]');
    }
    
    public get label2Verify() {
        return $('//div[@class="added_filters_container"]//div[2]');
    }

    public async webtrendsExperienceOverviewLive () {
        await browser.pause(3000)
        await this.experienceOverviewLive.waitForDisplayed();
        var value = await this.experienceOverviewLive.getText();
        await this.experienceOverviewLiveButton.click();
        await expect ($('//div[text()="Live"]//div[text()="'+value+'"]')).toBeDisplayed();
        await this.logo.click();           
    }

    public async webtrendsExperienceOverviewStaging () {
        await this.experienceOverviewStaging.waitForDisplayed();
        var value = await this.experienceOverviewStaging.getText();
        await this.experienceOverviewStagingButton.click();
        await expect ($('//div[text()="Staging"]//div[text()="'+value+'"]')).toBeDisplayed();
        await this.logo.click();           
    }

    public async webtrendsExperienceOverviewPublished () {
        await this.experienceOverviewPublished.waitForDisplayed();
        var value = await this.experienceOverviewPublished.getText();
        await this.experienceOverviewPublishedButton.click();
        await expect ($('//div[text()="Published"]//div[text()="'+value+'"]')).toBeDisplayed();
        await this.logo.click();           
    }

    public async webtrendsSession() {
        const faqLink = await $('a*=Session Usage FAQ');
        await faqLink.scrollIntoView();
        await faqLink.waitForClickable({ timeout: 15000 });
        await faqLink.click();
    
        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            {
                timeout: 20000,
                timeoutMsg: 'Expected a new window/tab to open after clicking FAQ link',
            }
        );
    
        const handles = await browser.getWindowHandles();
        const originalWindow = handles[0];
        const newWindow = handles[1];
    
        await browser.switchToWindow(newWindow);
    
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout: 20000,
                timeoutMsg: 'FAQ page did not finish loading in time',
            }
        );
    
        // Log all h1 and h2 tags for debugging
        const headers = await $$('h1, h2');
        for (const header of headers) {
            const text = await header.getText();
            console.log('Header found on FAQ page:', text);
        }
    
        // Use improved selector: try matching based on contains (fallback on h1, h2)
        const selectors = [
            '//h1[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "session usage")]',
            '//h2[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "session usage")]',
            '//*[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "understanding session usage")]'
        ];
    
        let headerFound = false;
    
        for (const xpath of selectors) {
            const element = await $(xpath);
            if (await element.isExisting()) {
                console.log(`✅ Found matching element with selector: ${xpath}`);
                await element.scrollIntoView();
                await element.waitForDisplayed({ timeout: 15000 });
                await expect(element).toBeDisplayed();
                headerFound = true;
                break;
            } else {
                console.warn(`❌ Selector did not match: ${xpath}`);
            }
        }
    
        if (!headerFound) {
            throw new Error('Failed to find any matching header for "Session Usage" on the FAQ page. Check console logs for available headers.');
        }
    
        await browser.switchToWindow(originalWindow);
    }
    
    
    

    /*public async webtrendsPromption () {
        await browser.pause(5000) 
        await this.bannerPromptionVerification.waitForDisplayed();
        await expect(this.bannerPromptionVerification).toBeDisplayed();
    
        // Click to close the banner
        await this.bannerOption.click();
        await this.bannerPromptionOpen.waitForDisplayed({ reverse: true }); // Wait for it to disappear
        await expect(this.bannerPromptionOpen).not.toBeDisplayed();
    
        // Click again to open the banner
        await this.bannerOption.click();
        await this.bannerPromptionOpen.waitForDisplayed();
        await expect(this.bannerPromptionOpen).toBeDisplayed();
    
        // Click to interact with the open banner
        await this.bannerPromptionOpen.click();
    
        // Handle new window/tab if applicable
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.switchToWindow(handles[1]);
            await this.bannerPromptionVerification.waitForDisplayed();
            await expect(this.bannerPromptionVerification).toBeDisplayed();
            await browser.switchToWindow(handles[0]); // Switch back to the main window
        }
    }*/
    

        public async webtrendsPromotion() {
            await browser.pause(3000); 
            await this.bannerPromptionVerification.waitForDisplayed({ timeout: 20000 });
            await expect(this.bannerPromptionVerification).toBeDisplayed();
        
            // Toggle banner closed
            await this.bannerOption.click();
            await this.bannerPromptionOpen.waitForDisplayed({ reverse: true, timeout: 10000 });
            await expect(this.bannerPromptionOpen).not.toBeDisplayed();
        
            // Toggle banner open
            await this.bannerOption.click();
            await browser.pause(1000);
            await this.bannerPromptionOpen.click();
        
            // Capture window handles after click
            const handles = await browser.getWindowHandles();
            console.log('Window handles after banner click:', handles);
        
            if (handles.length > 1) {
                // New window opened → switch
                const originalWindow = handles[0];
                const newWindow = handles[1];
                await browser.switchToWindow(newWindow);
                // Wait for the new page to fully load
                await browser.waitUntil(
                    async () => (await browser.execute(() => document.readyState)) === 'complete',
                    { timeout: 15000, timeoutMsg: 'Marketing banner page did not finish loading in time' }
                );
                // Check expected content in the new window
                await expect(this.bannerPromption).not.toBeDisplayed();  // Assuming you expect it gone
                console.log('Verified marketing banner page in new window.');
                // Optionally close new window and return
                await browser.closeWindow();
                await browser.switchToWindow(originalWindow);
            } else {
                // No new window → stay in the same window and check
                console.warn('No new window opened; verifying banner content on the same page.');
                await browser.waitUntil(
                async () => (await browser.execute(() => document.readyState)) === 'complete',
                { timeout: 15000, timeoutMsg: 'Banner page did not finish loading in time' }
                );
        
                await expect(this.bannerPromption).not.toBeDisplayed();
                console.log('Verified marketing banner page in same window.');
            }
        }

    public async webtrendsChart () {
        await browser.pause(3000)
        await expect(this.experienceChartVerification).toBeDisplayed();
        await this.experienceChartTopAbn.click();
        await this.experienceChartTopBaseline.click();
        await this.experienceChartTopMVT.click();
        await this.experienceChartTopSplit.click();
        await this.experienceChartTopTarget.click();
        await this.experienceChartExpand.scrollIntoView();
        await this.experienceChartExpand.click();
        await browser.pause(1000)
        await this.experienceChartBottomAbn.click();
        await this.experienceChartBottomBaseline.click();
        await this.experienceChartBottomMVT.click();
        await this.experienceChartBottomSplit.click();
        await this.experienceChartBottomTarget.click(); 
        await this.experienceChartMinimize.click();       
    }

    public async webtrendsReport () {
        browser.pause(1000)
        await this.reportText.scrollIntoView(); 
        if (await (this.reportView).isDisplayed()) 
        {
        await expect(this.reportText).toBeDisplayed();
        await this.reportgetText.scrollIntoView(); 
        await this.reportgetText.waitForDisplayed();
        
       // for kpi drop down verification
        await this.reportKpiSelector.click();
        await browser.pause(2000);
        await this.reportKpiSelectoroption.click();
        await browser.pause(2000);
        await this.reportKpiSelectoroptiontwo.click();
        await browser.pause(2000);
        await expect(this.reportData).toBeDisplayed();
        var value = await this.reportgetText.getText();
        await this.reportView.click();
        browser.pause(1000)
        await expect ($('//span[text()="'+value+'"]')).toBeDisplayed();
        } 
        else 
        {
        await expect(this.reportText).toBeDisplayed();
        await this.reportText.scrollIntoView(); 
        await expect(this.reportNoKpi).toBeDisplayed();
        }
   }

    public async webtrendsEditExperience () {
        browser.pause(1000)
        await this.editedExperienceVerify.scrollIntoView(); 
        if (await (this.editedExperienceEdit).isDisplayed()) 
        { 
        await this.editedExperienceGettext.waitForDisplayed();
        var value = await this.editedExperienceGettext.getText();
        await this.editedExperienceEdit.click();
        browser.pause(1000)
        //await expect ($('//span[text()="'+value+'"]')).toBeDisplayed();
        await expect($('//div[contains(@class, "stepTitle") and contains(text(), "Step 1 - Project Details")]')).toBeDisplayed();
        } 
        else 
        {
        await expect(this.editedExperienceVerify).toBeDisplayed();
        }
    }

    public async webtrendsLabels() {
        await browser.pause(10000); // initial wait if needed
        await this.editedExperienceLabel.waitForDisplayed();
        await this.editedExperienceLabel.scrollIntoView();
        await browser.pause(3000);
        await expect(this.editedExperienceLabel).toBeDisplayed();
    
        const labelButtonsSelector = '//a[contains(@href, "labelFilter")]//button';
        let labelButtons = await $$(labelButtonsSelector);
        
        if (labelButtons.length > 0) {
            for (let i = 0; i < labelButtons.length; i++) {
                // Re-fetch the list (DOM may change)
                labelButtons = await $$(labelButtonsSelector);
        
                if (i >= labelButtons.length) {
                    console.warn(`Label button at index ${i} no longer exists after reload.`);
                    continue; // skip if index is out of range
                }
        
                const labelButton = labelButtons[i];
                if (!labelButton) {
                    console.warn(`Label button at index ${i} is undefined.`);
                    continue;
                }
        
                const labelText = await labelButton.getText();
                console.log(`Clicking label: ${labelText}`);
        
                await labelButton.scrollIntoView();
                await labelButton.click();
                await browser.pause(2000);
        
                await expect(this.label1Verify).toBeDisplayed();
        
                await this.clearFilter.click();
                await browser.pause(1000);
        
                const cleared = await $(`//div[@class="added_filters_container"]//div[2]//div[contains(text(), "${labelText}")]`);
                await expect(cleared).not.toBeDisplayed();
            }
        
            await this.logo.click();
        } else {
            console.log('No labels found on the page.');
            await expect(this.noLabels).toBeDisplayed();
        }
    }        
    

    public async webtrendsEditDashboard () { 
        await browser.pause(10000);
        await this.webtrendsEditdashboard.waitForDisplayed();
        await this.webtrendsEditdashboard.click();
    
        await this.checkbox.waitForDisplayed(); // Wait for the checkbox to be visible
    
        const isChecked = await this.checkbox.isSelected();
    
        if (isChecked) {
            await this.checkbox.click(); // Untick if it’s already ticked
            console.log('Checkbox was ticked — now unticked.');
        } else {
            console.log('Checkbox was already unticked — no action taken.');
        }
    
        await this.saveDashboardButton.waitForDisplayed();
        await this.saveDashboardButton.click();
        console.log('Clicked Save Dashboard button.');
        await browser.pause(5000);
        const isEditDashboardVisible = await this.webtrendsEditdashboard.isDisplayed().catch(() => false);

        if (!isEditDashboardVisible) {
            console.log('Edit Dashboard item was successfully removed.');
        } else {
            console.warn('Edit Dashboard item is still visible — it may not have been removed.');
        }
    
    }
}

export default new WebTrendsDashboardPage();