/**
 * Created by elegrottaglie on 31/08/17.
 */

var assert = require('assert');

describe('Second Test', function () {

    beforeEach(function () {

        browser.url('/');
    });
    it('Search', function () {

        browser.setValue('.ds-input', 'customreporter');
        browser.waitForVisible('.algolia-docsearch-suggestion--text');
        browser.click('.algolia-docsearch-suggestion--text');
        assert.equal(browser.getText('#Custom-Reporter'), 'CUSTOM REPORTER');
        //expect jasmine verification
        expect(browser.getUrl()).toContain('reporter');

    });
});