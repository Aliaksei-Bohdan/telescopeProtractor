exports.config = {
    
    // restartBrowserBetweenTests: true,
    // directConnect: true,
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/*.js'],
    capabilities: {'browserName': 'chrome'},
    // multiCapabilities: [
    //     {'browserName': 'chrome'},
    //     {'browserName': 'firefox'}]
    mochaOpts: {
        reporter: 'mochawesome',
        timeout: 70000
    },
    onPrepare: function() {
        const chai = require('chai');
        global.expect = chai.expect;
    }
}