const elementUtil= require("../util/elementUtil")
const constant= require("../constant")

class LoginPage{

    /**
     * Locators for this page
     */
    get userName(){ return $('#username')};
    get password(){ return $('#password')};
    get loginBtn(){ return $('#loginBtn')};
    get signUpLink(){ return $('=Sign up')};

    //Page actions
    getPageTitle(){
        return elementUtil.doGetPageTitle(constant.LOGIN_PAGE_TITLE);
    }

    isSignUpLinkExist(){
         return elementUtil.doIsDisplayed(this.signUpLink); 
    }

    doLogin(emailID,pwd){
        elementUtil.doSetValue(this.userName,emailID);
        elementUtil.doSetValue(this.password, pwd);
        elementUtil.doClick(this.loginBtn);
    }
}

module.exports =new LoginPage();