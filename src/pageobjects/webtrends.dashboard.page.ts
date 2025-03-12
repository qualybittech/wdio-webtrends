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
        return $('//p[normalize-space()="session usage"]');
    }

    public get sessionUsageFaqs() {
        return $('//div[contains(@class,"sessionUsageFaqs")]//span[1]');
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
        return $('//a[@href="/optimize/?labelFilter=0_0"]//button');
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

    public async webtrendsSession () {
        await browser.pause(1000) 
        await this.session.waitForDisplayed();
        await expect (this.session).toBeDisplayed();
        await this.sessionUsageFaqs.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1])
        await browser.pause(3000) 
        await expect(this.sessionUsagePage).toBeDisplayed();
        await browser.switchToWindow(handles[0])
    }

    public async webtrendsPromption () {
        await browser.pause(3000) 
        await this.bannerPromptionVerification.waitForDisplayed();
        await expect(this.bannerPromptionVerification).toBeDisplayed();
        await this.bannerOption.click();
        await expect(this.bannerPromptionOpen).not.toBeDisplayed();
        await this.bannerOption.click();
        await browser.pause(1000) 
        await this.bannerPromptionOpen.click();
        /*const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1])
        await browser.pause(5000)
        await expect(this.bannerPromption).toBeDisplayed();
        await browser.switchToWindow(handles[0])*/
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
        await expect ($('//span[text()="Details summary"]')).toBeDisplayed();
        } 
        else 
        {
        await expect(this.editedExperienceVerify).toBeDisplayed();
        }
    }

    public async webtrendsLabels () {
        await browser.pause(10000) 
        await this.editedExperienceLabel.waitForDisplayed();
        await this.editedExperienceLabel.scrollIntoView();
        await browser.pause(3000)
        await expect(this.editedExperienceLabel).toBeDisplayed();
        if (await (this.label1).isDisplayed()) 
            {
                var value = await this.label1.getText();
                const result = "Labels: "+value
                await this.label1.click();
                browser.pause(1000)
                await expect (this.label1Verify).toBeDisplayed();
                await this.logo.click();
                var value2 = await this.label1.getText();
                await this.label2.scrollIntoView();
                await this.label2.click();
                browser.pause(1000)
                await expect (this.label2Verify).toBeDisplayed();
                await this.clearFilter.click();
                browser.pause(1000)
                await expect ($('//div[@class="added_filters_container"]//div[2]//div[normalize-space()="Labels: ${value2}"]')).not.toBeDisplayed()

            }
        else
            {
                await expect(this.noLabels).toBeDisplayed();
            }
    }
}

export default new WebTrendsDashboardPage();