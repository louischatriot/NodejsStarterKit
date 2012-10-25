NodejsStarterKit
================

Starter kit I use on my side projects to create websites/api with nodejs and express. I like this stack and am used to it so I use it for quick projects needing an API, a website or both.

# Server-side includes
* Nodejs with Express as the web framework. It is already configured the way I like it in `server.js`, with one dummy route.
* A sample config file `lib/config.js` to be able to use 3 environments (test, dev, prod).
* hogan as rendering engine, wrapped in a 'customHogan' module that enables the use of partials and layouts with Express (not possible with hogan or consolidate).
* underscore as we always need it :)
* mocha and chai for testing, plus a dummy test. All tests can be run with `make test`.


# Client-side-includes
