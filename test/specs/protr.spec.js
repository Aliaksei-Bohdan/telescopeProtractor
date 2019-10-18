const HomePage = require('../utils/page_objects/home_page');
const logger = require('../config/logger.config');
const DownloadSearchPage = require('../utils/page_objects/download_page');
const SearchMyself = require('../utils/page_objects/search_myself');
const ColorScroll = require('../utils/page_objects/color_scroll');

describe('Working with telescope', function() {
    homePage = new HomePage();

    before(async () => {
        // browser.ignoreSynchronization = true;
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        return homePage.visit('https://telescope.epam.com');
    });

    it('Search a main frame and push a message', async () => {
        return homePage.FindFrame();
    });

    it('should check that Home page is fully loaded', async() => {
        downloadPage = new DownloadSearchPage();
        return downloadPage.DownloadPage();
    });

    it('should search myself and click to me', async () => {
        searchMyself = new SearchMyself();
        return await searchMyself.SearchClick();
    });

    it('should click to my link', async () => {
        return await searchMyself.clickToMe();
    });

    it('should change color for my head of unit', async () => {
        colorScroll = new ColorScroll();
        await colorScroll.someScroll();
        return await colorScroll.changeColor();
    });

    // it('Check a title on the page', function() {
    //     let myTitle = homePage.checkPageTitle('Aliaksei Bohdan');
    //     return expect(myTitle).to.be.true; 
    // });
})