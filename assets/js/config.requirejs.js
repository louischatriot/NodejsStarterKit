requirejs.config({
    paths: { jquery: 'vendor/jquery/jquery-1.7.2'
           , underscore: 'vendor/underscore/1.3.3-amdjs/underscore'
           , backbone: 'vendor/backbone/0.9.2-amdjs/backbone'
           , Mustache: 'vendor/mustache/mustache-wrap'
           , bootstrap: 'vendor/bootstrap/bootstrap'

           // requireJS plugins
           , text: 'vendor/require/require-text'
           , domReady: 'vendor/require/domReady'

           // helper paths
           , views: 'app/views'
           , templates: 'templates'
           }
  , shim: { bootstrap: ['jquery']
          , datepicker: ['jquery']
          }
  , baseUrl: '../src'
});
