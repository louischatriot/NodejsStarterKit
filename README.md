Nodejs Starter Kit
================

Bundle of modules and config files for nodejs that enable you to launch a website/webapp/API running on nodejs right away. I use this for all my side projects, when I don't want to spend a few days on architecture.

# Installing
1) `git clone` wherever you want.  
2) `npm install`.  
2bis) Only if you're want rich client-side JS - `npm install -g grunt`. This will install [grunt](http://gruntjs.com/) globally on your machine, so that you can use the already-configured [requirejs](http://requirejs.org/) build to manage your JS modules. More info on requireJS [here](http://requirejs.org/).  
3) You're set!  


# Server-side
* Nodejs with Express as the web framework. It is already configured the way I like it in `server.js`, with one dummy route.
* A sample config file `lib/config.js` to be able to use 3 environments (test, dev, prod).
* hogan as rendering engine, wrapped in a 'customHogan' module that enables the use of partials and layouts with Express (not possible with hogan or consolidate).
* underscore as we always need it :)
* mocha and chai for testing, plus a dummy test. All tests can be run with `make test`.
* async for flow control. Especially great for long tests that would make for some callback hell.
* Nothing for databases, but you can easily use one for example MongoDB with Mongoose is pretty nice.


# Client-side
* A basic gruntfile that lints, compiles with requirejs and uglify all client-side javascript in a single, minified file
