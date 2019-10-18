const BasePage = require('./base_page');

class DownloadSearchPage extends BasePage {
    constructor() {
        super();
    }

    async DownloadPage() {
        const isDisplayed = await this.findByCss('.iM4Rv').isDisplayed(); 
        return expect(isDisplayed).to.be.true;
    }
}

module.exports = DownloadSearchPage;