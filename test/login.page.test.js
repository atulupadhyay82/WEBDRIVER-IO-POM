const { assert } = require("chai");
const loginPage= require("../pages/login.page")
const configData= require("../config")
const constant= require("../constant")

describe("login page feature test", () => {
    this.retries(2)
    it('verify login page title', () => {
        browser.url('./');
        browser.maximizeWindow();
        const title=loginPage.getPageTitle();
        console.log("login page title is "+title);
        assert.equal(constant.LOGIN_PAGE_TITLE,title,'title is not found');
    }),
    it('verify sign up link', () => {
        assert.equal(true, loginPage.isSignUpLinkExist(),'Sign up link is not present');
    }),
    it('verify login', () => {
        loginPage.doLogin(configData.username,configData.password);
        //assert.equal(true, loginPage.isSignUpLinkExist(),'Sign up link is not present');
    })



})

   
