/**
 * Created by elegrottaglie on 31/08/17.
 */

var util = require('util'),
    events = require('events');

var CustomReporter = function(options) {
    console.log('Special Report:');

    this.on('start', function() {
            console.log('start all the tests');
        });

    this.on('test:start', function() {
        console.log('test:start');
    });

    this.on('test:end', function() {
        console.log('test:end');
    });

    this.on('test:pass', function() {
        console.log('test:pass');
    });

    this.on('test:fail', function() {
        console.log('test:fail');
    });

    this.on('test:pending', function() {
        console.log('test:pending');
    });

    this.on('end', function() {
            console.log('end all the tests. Thanks!');
        });
};

CustomReporter.reporterName = 'CustomReporter';

util.inherits(CustomReporter, events.EventEmitter);

exports = module.exports = CustomReporter;