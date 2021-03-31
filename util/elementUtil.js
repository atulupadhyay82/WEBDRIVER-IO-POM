/**
 * Having generic functions which webdriverIO going to perform
 */

class ElementUtil{

    /**
     * Will wait for element to appear on the UI , then click once appears.
     * @param {} element 
     */
    doClick(element){
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element,value){
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(
            () => browser.getTitle() === pageTitle,
            {
                timeout: 10000,
                timeoutMsg: 'title is not displayed after 10s'
            }
        );
        return browser.getTitle();
    }

    /**
     * It will return boolean
     */
    doIsDisplayed(element){
        element.waitForDisplayed();
        return element.isDisplayed();

    }

}

module.exports = new ElementUtil();