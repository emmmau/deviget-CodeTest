/**
 * Created by elegrottaglie on 31/08/17.
 */

exports.config = {

    specs: [
        './e2e/**/*.js'
    ],

    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporter: 'dot',

    jasmineNodeOpts: {

        showColors: true,
        defaultTimeoutInterval: 10000,
    },
};