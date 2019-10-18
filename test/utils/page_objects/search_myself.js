const BasePage = require('./base_page');
var webDriver = require('selenium-webdriver');
By = webDriver.By;


class SearchMyself extends BasePage {
    constructor() {
        super();
        this.myName = browser.findElement(by.css('.iM4Rv'));
        this.btnSearch = browser.findElement(by.css('._1Xhsi'));
    }

    SearchClick() {
        this.myName.sendKeys("Aliaksei Bohdan")
        .then(() => {
            return this.btnSearch.click();
        })
    }

    clickToMe() {
        return this.findByLinkText('Aliaksei Bohdan').click();
    }
}

module.exports = SearchMyself;