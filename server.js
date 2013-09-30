/**
 * Define Server class
 */

define(['http', 'router'], function(http, router) {

    var Server = function(port) {
        this.port = port || 8888;
        this.httpServer = null;
    };

    Server.prototype = {
        start: function() {
            this.httpServer = http.createServer(function (request, response) {
                router.resolve(request, response);
            }).listen(this.port);
        }
    };

    return Server;
});