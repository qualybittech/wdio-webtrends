import { $ } from '@wdio/globals'
import Page from './page.js';

class WebTrendsVerificationPage extends Page {
   

    public get verificationCode () {
        return $('//label[text()="Verification Code"]');
    }
    
    public async webtrendsVerificationCode () {

            await expect(this.verificationCode).toBeDisplayed();
    }

}

export default new WebTrendsVerificationPage();