var requirejs = require('./lib/r.js'),
    config = require('./init.js').config;

// must inspect routes before require's config
// and pass to require all the routes deps !
var deps = config.getDependencies();

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,
    deps: deps
});

// starting server
requirejs(['server'],function(Server) {
	// start server
	console.log("Starting server...");
    var server = new Server();
	server.start();
});