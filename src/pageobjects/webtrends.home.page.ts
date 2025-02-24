import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebTrendsHomePage extends Page {
    public loggedInUserInitial() {
        return $('//div[@class="user-initial"]');
    }

    public loggedInUser(username: string) {
        return $('//p[contains(text(),"'+username+'")]');
    }

    public get dashboard() {
        return $('//p[contains(text(),"Dashboard")]');
    }
    
    public get createMenu() {
        return $('//a[contains(text(),"Create")]');
    }

    public get createWebpage() {
        return $('//h3[contains(text(),"Web page")]');
    }

    public get experiencesMenu() {
        return $('//a[contains(text(),"Experiences")]');
    }
    
    public get experiencesWebpage() {
        return $('//p[contains(text(),"Experiences")]');
    }

    public get configureMenu() {
        return $('//span[contains(text(),"Configure")]');
    }
    public get assetsMenu() {
        return $('//a[contains(text(),"Assets")]');
    }

    public get assetsPage() {
        return $('//h1[contains(text(),"Asset Manager")]');
    }
    
    public get locationsMenu() {
        return $('//a[contains(text(),"Locations")]');
    }

    public get locationsPage() {
        return $('//h1[contains(text(),"Location Manager")]');
    }

    public get segmentsMenu() {
        return $('//a[contains(text(),"Segments")]');
    }

    public get segmentsPage() {
        return $('//h1[contains(text(),"Segment Builder")]');
    }

    public get sitesMenu() {
        return $('//a[contains(text(),"Sites")]');
    }

    public get sitesPage() {
        return $('//h1[contains(text(),"Site Manager")]');
    }

    public get setupIntegrationSubMenu() {
        return $('//span[contains(text(),"Setup & Integrations")]');
    }
    
    public get taggingGuideMenu() {
        return $('//a[contains(text(),"Tagging Guide")]');
    }

    public get taggingGuidePage() {
        return $('//h2[contains(text(),"Tagging your website with Webtrends Optimize")]');
    }

    public get accountKpiMenu() {
        return $('//a[contains(text(),"Set Account KPI")]');
    }
    public get accountKpiPage() {
        return $('//p[contains(text(),"Account Wide KPI")]');
    }
    public get kpiCloseButton() {
        return $('//div[@class="close_button"]');
    }
    public get manageLabelsMenu() {
        return $('//a[contains(text(),"Manage Labels")]');
    }
    public get manageLabelsPage() {
        return $('//span[contains(text(),"Manage Labels")]');
    }
    public get tagConfigurationMenu() {
        return $('//a[contains(text(),"Tag Configuration")]');
    }
    public get tagConfigurationPage() {
        return $('//h1[contains(text(),"Tag Configuration")]');
    }  
    public get integrationsMenu() {
        return $('//a[contains(text(),"Integrations")]');
    }
    public get integrationsPage() {
        return $('//h1[contains(text(),"Manage Integrations")]');
    }
    public get automatedTrackingMenu() {
        return $('//a[contains(text(),"Automated Tracking")]');
    }
    public get automatedTrackingPage() {
        return $('//p[contains(text(),"Automated Tracking")]');
    }
    public get logOut() {
        return $('//a[@href="/wam/api/logout"]');
    }

    public get help() {
        return $('//a[@class="navbar-help"]');
    }

    public get helpVerification() {
        return $('//h1[text()="Welcome to the Webtrends Optimize help centre"]');
    }

    public async navigateToMenu(menuname: string){
        return $('//button[contains(text(),"'+menuname+'")]').click();
    }

    public get dashboardheading() {
        return $('//p[@class="dashboard_heading"]');
    }

    public get logo() {
        return $('//img[@alt="Optimize Logo"]');
    }

    public get dashboardOption() {
        return $('//ul[@class="navbar-links"]//a[@href="/optimize/dashboard"]');
    }

    public get CreateOption() {
        return $('//a[normalize-space()="Create"]');
    }

    public AccountName(Account: string) {
        return $('//p[text()="'+Account+'"]');
    }

    public SelectDropDownAccount(Account: string) {
        return $('//a[text()="'+Account+'"]');
    }

    public get DropDownAccountInput() {
        return $('//div[@class="client-search"]//input');
    }

    public get AccountDropDown() {
        return $('//div[@class="client-dropdown  "]');
    }
  
    public async webtrendsLogout(){
        await this.loggedInUserInitial().click();
        await browser.pause(2000);
        await this.logOut.click();
        await browser.reloadSession();
    }

    public async verifyDashboardDisplayed(){
        await browser.pause(4000);
        await expect(this.dashboard).toBeDisplayed();
    }
    public async NavigateCreateMenuAndVerify(){
        await this.createMenu.click();
        await browser.pause(1000);
        //await expect(this.createWebpage).toBeDisplayed();
    }
    public async navigateExperiencesMenuAndVerify(){
        await this.experiencesMenu.click();
        await browser.pause(1000);
        await expect(this.experiencesWebpage).toBeDisplayed();
    }

    public async navigateConfigureMenusAndVerify(){
        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.assetsMenu.click();
        await browser.pause(1000);
        await expect(this.assetsPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.locationsMenu.click();
        await browser.pause(1000);
        await expect(this.locationsPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await this.segmentsMenu.click();
        await browser.pause(1000);
        await expect(this.segmentsPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await this.sitesMenu.click();
        await browser.pause(1000);
        await expect(this.sitesPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.taggingGuideMenu.click();
        await browser.pause(1000);
        await expect(this.taggingGuidePage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.accountKpiMenu.click();
        await browser.pause(1000);
        await this.accountKpiPage.click();
        await expect(this.accountKpiPage).toBeDisplayed();
        await this.kpiCloseButton.click();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.manageLabelsMenu.click();
        await browser.pause(1000);
        await expect(this.manageLabelsPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.tagConfigurationMenu.click();
        await browser.pause(1000);
        await expect(this.tagConfigurationPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.integrationsMenu.click();
        await browser.pause(1000);
        await expect(this.integrationsPage).toBeDisplayed();

        await this.configureMenu.moveTo();
        await browser.pause(1000);
        await this.setupIntegrationSubMenu.moveTo();
        await this.automatedTrackingMenu.click();
        await browser.pause(1000);
        await expect(this.automatedTrackingPage).toBeDisplayed();
    }

    public async navigateWebtrendsHelpVerify(){
        await this.help.click();
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        await expect(this.helpVerification).toBeDisplayed();

    }

    public async navigateWebtrendsLogoVerify(){
        await this.CreateOption.click();
        await this.logo.click();
        await expect(this.dashboardheading).toBeDisplayed();
    }

    public async navigateWebtrendsDashboardVerify(){
        await this.CreateOption.click();
        await this.dashboardOption.click();
        await expect(this.dashboardheading).toBeDisplayed();
    }

    public async switchAccount(account: string){
        await this.AccountDropDown.click();
        await this.DropDownAccountInput.setValue(account);
        await this.SelectDropDownAccount(account).click();
        await expect(this.AccountName(account)).toBeDisplayed();
    }

}

export default new WebTrendsHomePage();