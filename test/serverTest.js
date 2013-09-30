/*jshint indent:4 */

var requirejs = require('../lib/r.js'),
    assert = require("assert"),
    http = require('http');


// define the base url to avoid paths relative errors
requirejs.config({
    baseUrl: __dirname + "/../",
    deps: [
        "eventEmitter"
    ]
});



/**
 * Server Tests
 */
describe('Server Tests', function() {
    var server;

    before(function (callback) {
        // before all, initialize the server
        requirejs(['server'], function(Server) {
            server = new Server();
            server.start();

            // the server has started, tests can be launched
            callback();
        });
    });

    describe('Server initialization', function() {
        it('returned object should be an node\'s Server instance', function() {
            assert.equal(server.httpServer instanceof http.Server, true);
        });

        it('by default, server runs on port 8888', function() {
            assert.equal(server.port, 8888);
        });
    });
});



/**
 * Map Tests
 */
describe('Map Tests', function() {

});