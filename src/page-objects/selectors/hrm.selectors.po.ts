/**
 * Class for HRM selectors
 */
export class HRMSelectors {
   
    //HRM Login page selectors
    static username = 'input[name="username"]';
    static password = 'input[name="password"]'
    static loginBtn = 'button[type="submit"]';
    static companyLogo = 'h5.oxd-text.oxd-text--h5.orangehrm-login-title';
    static errorMessage = 'p.oxd-text.oxd-text--p.oxd-alert-content-text';
    static PageTitle = 'div[class="oxd-topbar-header-title"]';

    //HRM Dashboard page selectors
    static userMenu = 'p[class="oxd-userdropdown-name"]';
    static logOutBtn = 'a[href="/web/index.php/auth/logout"]';
    
}