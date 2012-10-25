module.exports = function(grunt) {

  // Load grunt-contrib, which contains requirejs
  grunt.loadNpmTasks('grunt-contrib');


  // Example Grunt multi task
  grunt.registerMultiTask('dummy', 'Do something', function () {
    console.log("Hello world");
    console.log(this.target);
    console.log(this.data);
  });


  // Configuration of the tasks we use
  grunt.initConfig({
    // Config for the dummy task, to show how it works
    dummy: { test: [ 1, 2, 4, 8, 16 ] }

    // JSHint configuration
    // see here for explanation: http://www.jshint.com/options/
  , jshint: {
      options: { browser: true
               , curly: true
               , devel: true
               , debug: true
               , eqeqeq: true
               , expr: true
               , forin: true
               , immed: true
               , latedef: true
               , laxcomma: true
               , newcap: true
               , noarg: true
               , onevar: true
               , trailing: true
               , undef: true
               }
    , globals: { // needed for requireJS
                 define: true
               , require: true
               , requirejs: true
               , has: true
               , module: true
               // needed for accessing env variables in gruntfile
               , process: true
               }
    }

    // The lint task will run JSHint and report any errors
    // You can change the options for this task, by reading this:
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md
  , lint: { requireConfig: ['assets/js/config.requirejs.js']
          }

    // requireJS config
    // https://github.com/gruntjs/grunt-contrib
    // pretty much the same as with requireJS without grunt
  , requirejs: { clientjs: { options: { optimize: 'none'
                                      , preserveLicenseComments: false
                                      , inlineText: true
                                      //, mainConfigFile: 'assets/js/config.requirejs.js'
                                      , namespace: 'starterkit'
                                      , name: 'vendor/require/almond'
                                      , include: ['modules/main']
                                      , out: '../dist/clientjs.js'
                                      }
                           }
               }

  });

  grunt.registerTask('default', 'requirejs:clientjs');

};
