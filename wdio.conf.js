/**
 * Created by elegrottaglie on 31/08/17.
 */

exports.config = {

    specs: [
        './e2e/specs/*.js'
    ],

    maxInstances: 2,

    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome'
    }],
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporter: 'dot',
    services: ['selenium-standalone'],

    jasmineNodeOpts: {

        showColors: true,
        defaultTimeoutInterval: 10000,
    },
};