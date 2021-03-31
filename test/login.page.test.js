const { assert } = require("chai");
const loginPage= require("../pages/login.page")
const configData= require("../config")
const constant= require("../constant")

/**
 * If you want to use Mocha features via this you need to use unbound functions not arrow functions, 
 * as documented: https://mochajs.org/#arrow-functions
 */
describe("login page feature test", function(){
    this.retries(2);
    it('verify login page title', function() {
        browser.url('./');
        browser.maximizeWindow();
        const title=loginPage.getPageTitle();
        console.log("login page title is "+title);
        assert.equal(constant.LOGIN_PAGE_TITLE,title,'title is not found');
    }),
    it.only('verify sign up link', function() {
        browser.url('./');
        assert.equal(true, loginPage.isSignUpLinkExist(),'Sign up link is not present');
    }),
    it('verify login', function() {
        loginPage.doLogin(configData.username,configData.password);
        //assert.equal(true, loginPage.isSignUpLinkExist(),'Sign up link is not present');
    })



})

   
