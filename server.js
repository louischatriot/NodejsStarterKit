var express = require('express')
  , http = require('http')
  , app
  , config = require('./lib/config')
  , h4e = require('h4e')
  , middleware = require('./lib/middleware')
  , routes = require('./lib/routes')
  ;


app = express();

// Used for HTML templating
app.engine('mustache', customHogan.render); // Assign Hogan engine to .mustache files
app.set('view engine', 'mustache'); // Set mustache as the default extension
app.set('views', config.templatesDir);

// Trust the nginx proxy
app.enable('trust proxy');

/**
 * Middlewares
 *
 */

app.use(express.bodyParser());
app.use(express.cookieParser());   // Parse cookie data and use redis to store session data
app.use(app.router);               // Map routes
app.use(middleware.handleErrors);  // Use middleware to handle errors


// Sample route
app.get('/', routes.getHome)





/**
 * Last wall of defense. If an exception makes its way to the top, the service shouldn't
 * stop if it is run in production, but log a fatal error and send an email to us.
 * Of course, this piece of code should NEVER have to be called
 *
 */
app.configure('production', function () {
  // The process needs to keep on running
  process.on('uncaughtException', function(err) {
    console.log('An uncaught exception was thrown', err);
  });
});


/*
 * Compile all templates and partials, connect to database, then start server
 */
app.launchServer = function (cb) {
  var callback = cb ? cb : function () {}
    , self = this;

  customHogan.readAndCompileTemplates('website', function () {
    self.apiServer = http.createServer(self);   // Let's not call it 'server' we never know if express will want to use this variable!

    // Handle any connection error gracefully
    self.apiServer.on('error', function () {
      console.log("An error occured while launching the server, probably a server is already running on the same port!");
      process.exit(1);
    });

    // Begin to listen. If the callback gets called, it means the server was successfully launched
    self.apiServer.listen.apply(self.apiServer, [config.svPort, function() {
      console.log('Server %s launched in %s environment, on port %s', self.name, config.env, config.svPort);
      callback();
    }]);
  });
}


/*
 * Stop the server and then close the connection to the database
 * No new connections will be accepted but existing ones will be served before closing
 */
app.stopServer = function (cb) {
  var callback = cb ? cb : function () {}
    , self = this;

  self.apiServer.close(function () {
    self.db.closeDatabaseConnection(function () {
      bunyan.info('Server was stopped and connection to the database closed');
      callback();
    });
  });
}


/*
 * If we executed this module directly, launch the server.
 * If not, let the module which required server.js launch it.
 */
if (module.parent === null) { // Code to execute only when running as main
  app.launchServer();
}


/*
 * If SIGINT is received (from Ctrl+C or from Upstart), gracefully stop the server then exit the process
 * FOR NOW: commented out because browsers use hanging connections so every shutdown actually takes a few seconds (~5) if a browser connected to the server
 *          which makes for a way too long restart
 */
//process.on('SIGINT', function () {
  //app.stopServer(function () {
    //bunyan.info('Exiting process');
    //process.exit(0);
  //});
//});



// exports
module.exports = app;

