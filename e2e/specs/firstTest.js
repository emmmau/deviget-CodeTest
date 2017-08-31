/**
 * Created by elegrottaglie on 31/08/17.
 */

var assert = require('assert');

describe('First Test', function () {

    beforeEach(function () {

        browser.url('/');
    });
    it('Get title', function () {
        var title = browser.getTitle();
        console.log('Title is: ' + title);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        assert.equal(browser.getText('a.button.getstarted'), 'GET STARTED');
        browser.click('a.button.getstarted');
        //assert verification
        assert.equal(browser.getText('#Developer-Guide'), 'DEVELOPER GUIDE');
    });
});