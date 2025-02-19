import { $ } from '@wdio/globals'
import Page from './page.js';

class WebTrendsAccountPage extends Page {
    public loggedInUserInitial() {
        return $('//div[@class="user-initial"]');
    }

    public MyAccount() {
        return $('//span[normalize-space()="My Account"]');
    }

    public MyAccountUser() {
        return $('//a[@href="https://app.dev-webtrends-optimize.com/optimize/account/users"]');
    }

    public MyAccountAuditTrail() {
        return $('//a[normalize-space()="Audit Trail"]');
    }

    public MyAccountOverView() {
        return $('//a[@href="https://app.dev-webtrends-optimize.com/optimize/account/overview"]');
    }

    public MyAccountRoles() {
        return $('//a[@href="https://app.dev-webtrends-optimize.com/optimize/account/roles"]');
    }

    public MyAccountUserVerification() {
        return $('//button[@title="NEW USER"]');
    }

    public MyAccountAuditTrailVerification() {
        return $('//h1[normalize-space()="Audit Trail"]');
    }

    public MyAccountOverViewVerification() {
        return $('//p[normalize-space()="Account Overview"]');
    }

    public MyAccountRolesVerification() {
        return $('//h1[normalize-space()="Account Roles"]');
    }

    public async User(){
        await this.loggedInUserInitial().click();
        await browser.pause(1000)      
        await this.MyAccount().click();
        await this.MyAccountUser().click();
        await expect(this.MyAccountUserVerification()).toBeDisplayed();
    }

    public async AuditTrail() {
        await this.loggedInUserInitial().click();
        await this.MyAccount().click();
        await this.MyAccountAuditTrail().click();
        await expect(this.MyAccountAuditTrailVerification()).toBeDisplayed();
    }

    public async OverView() {
        await this.loggedInUserInitial().click();
        await this.MyAccount().click();
        await this.MyAccountOverView().click();
        await expect(this.MyAccountOverViewVerification()).toBeDisplayed();
    }

    public async Roles() {
        await this.loggedInUserInitial().click();
        await this.MyAccount().click();
        await this.MyAccountRoles().click();
        await expect(this.MyAccountRolesVerification()).toBeDisplayed();
    }
}

export default new WebTrendsAccountPage();