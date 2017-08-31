/**
 * Created by elegrottaglie on 31/08/17.
 */

'use strict';

describe('First Test', function() {

    beforeEach(function () {

        browser.url('/');
    });
    it('Get title', function() {
        var title = browser.getTitle();
        console.log('Title is: ' + title);
    });

});