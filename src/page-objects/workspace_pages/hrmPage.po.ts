
import { Page } from "puppeteer";
import ENV_CONFIG from "../../env.config";

import { HRMSelectors } from "../selectors/hrm.selectors.po";





const hrmUrl = ENV_CONFIG.hrm.hrmUrl as string;


export class HrmLogin {

    /**
     * Login to Causeway One
     * @param page instance of the Puppeteer page
     * @param url Causeway One url including the application internal path
     * @param username user email
     * @param password user password
     */

  

    async loginToHrmHomePage(page: Page, url: string, username: string, password: string) {
        try {
            await page.goto(url);
           expect(await page.$eval(HRMSelectors.companyLogo, el => el.textContent.trim())).toBe("Login");
            await page.waitForSelector(HRMSelectors.username, { visible: true });
            await page.type(HRMSelectors.username, username);       
            await page.waitForSelector(HRMSelectors.password, { visible: true });
            await page.type(HRMSelectors.password, password);
            await page.click(HRMSelectors.loginBtn);
        } catch (error) {
            console.error('Error while logging in to HRM Page', error);
            
            
        };
        
    };

   
    /**
     * Sign out from HRM App
     */
    async signOut(page: Page) {
        try {
            await page.waitForSelector(HRMSelectors.userMenu, { visible: true });
            await page.click(HRMSelectors.userMenu);
            await page.waitForSelector(HRMSelectors.logOutBtn, { visible: true });
            await page.click(HRMSelectors.logOutBtn);
            await page.waitForSelector(HRMSelectors.companyLogo, { visible: true });
        } catch (error) {
            console.error('Error while signing out from HRM Dashboard', error);
        };
    };

}