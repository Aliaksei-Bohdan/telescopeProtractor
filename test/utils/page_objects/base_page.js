const logger = require('../../config/logger.config');
// const browser = require('protractor');

class BasePage {
    constructor() {
    }

    visit(theUrl) {
        logger.info(`Opening URL is "${theUrl}"`);
        return browser.get(theUrl);
    }

    async checkPageTitle(pageTitle) {
        const title = await this.getPageTitle();
        logger.info(`title = "${title}" and got title "${pageTitle}"`);
        return title === pageTitle;
    }

    getPageTitle() {
        return browser.getTitle();
    }

    findByCss(el) {
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(element(by.css(el)));
        browser.wait(condition,15000);
        return browser.findElement(by.css(el));
    }

    findByXpath(el) {
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(element(by.xpath(el)));
        browser.wait(condition,15000);
        return browser.findElement(by.xpath(el));
    }

    findByLinkText(el) {
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(element(by.linkText(el)));
        browser.wait(condition,15000);
        return browser.findElement(by.linkText(el));
    }

    async redLineWithJS(el) {
        var bg;
        const col = await el.getCssValue("color")
        bg = col;
        
        await browser.executeScript("arguments[0].style.color = '" + "red" + "'", el)
        await browser.sleep(3000);
        logger.info(`What is background now: "${bg}"`);
        logger.log('debug',"test message for debug logger");
        await browser.executeScript("arguments[0].style.color = '" + bg + "'", el);
        await browser.sleep(1000);
    }
}

module.exports = BasePage;
