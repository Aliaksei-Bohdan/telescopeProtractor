const BasePage = require('./base_page');

class HomePage extends BasePage {
    constructor() {
        super();
    }

    async FindFrame() {
        await browser.switchTo().frame(this.findByXpath("//iframe[@id='duo_iframe']"))
        return browser.findElement(by.css('.positive:nth-child(3)')).click();
    }
}

module.exports = HomePage;