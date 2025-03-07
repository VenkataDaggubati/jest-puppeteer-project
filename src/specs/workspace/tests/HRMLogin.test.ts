import { describe, expect, jest, test } from '@jest/globals';
import ENV_CONFIG from '../../../env.config';
import { Page } from 'puppeteer';
import { HrmLogin } from '../../../page-objects/workspace_pages/hrmPage.po';
import { HRMSelectors } from "../../../page-objects/selectors/hrm.selectors.po";
import { delay } from '../../../utils/delay.utils';

const hrmHome: HrmLogin = new HrmLogin();

const username = ENV_CONFIG.credentials.userName;
const password = ENV_CONFIG.credentials.usersPassword;
const hrmUrl = ENV_CONFIG.hrm.hrmUrl;
const invaidUsername = ENV_CONFIG.credentials.invaidUsername;
const invalidPassword = ENV_CONFIG.credentials.invalidPassword
const timeout = 90000;

let page: Page;
jest.retryTimes(3, { logErrorsBeforeRetry: true });

describe("HRM app Login ", () => {
   
    beforeAll(async () => {
        page = await globalThis.__BROWSER_GLOBAL__.newPage();
    });

    test("Login with valid credentials",async () => {
        await hrmHome.loginToHrmHomePage(page, hrmUrl, username, password);
        expect(await page.$eval(HRMSelectors.PageTitle, el => el.textContent.trim())).toBe('Dashboard');
        
       },timeout);

    test("Logout HRM site",async () => {
        await hrmHome.signOut(page);
    
        
       },timeout);

       test("Login with Invalid credentials",async () => {
        await hrmHome.loginToHrmHomePage(page, hrmUrl, invaidUsername, invalidPassword);
        await delay(3000);
        await page.waitForSelector(HRMSelectors.errorMessage, { visible: true });
        expect(await page.$eval(HRMSelectors.errorMessage, el => el.textContent.trim())).toBe('Invalid credentials');
       },timeout); 
       
       test("Login with Valid username & Invalid password",async () => {
        await hrmHome.loginToHrmHomePage(page, hrmUrl, username, invalidPassword);
        await delay(3000);
        await page.waitForSelector(HRMSelectors.errorMessage, { visible: true });
        expect(await page.$eval(HRMSelectors.errorMessage, el => el.textContent.trim())).toBe('Invalid credentials');
       },timeout); 
       
       test("Login with Invalid username & valid password",async () => {
        await hrmHome.loginToHrmHomePage(page, hrmUrl, invaidUsername, password);
        await delay(3000);
        await page.waitForSelector(HRMSelectors.errorMessage, { visible: true });
        expect(await page.$eval(HRMSelectors.errorMessage, el => el.textContent.trim())).toBe('Invalid credentials');
       },timeout); 
       
afterAll(async () => {
await page.close();
})

});
