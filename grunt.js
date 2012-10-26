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

    // Clean dist folder
  , clean: { dist: ['assets/dist'] }

    // Copy all static files
  , copy: { images: { files: { 'assets/dist/': ['assets/img/*'] }
                    }
          , css: { files: { 'assets/dist/': ['assets/css/*'] }
                 }
          }

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
    , globals: { // Needed for requireJS
                 define: true
               , require: true
               , requirejs: true
               , has: true
               , module: true
               // Needed for accessing env variables in gruntfile
               , process: true
               // Needed for tests
               , describe: true
               , it: true
               }
    }

    // The lint task will run JSHint and report any errors
    // You can change the options for this task, by reading this:
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md
  , lint: { requireConfig: ['assets/js/config.requirejs.js']
          , clientCode: ['assets/js/modules/*.js']
          , apiCode: ['./*.js', 'lib/*.js', 'object/*.js', 'routes/*.js', 'test/*.js']
          }

    // requireJS config
    // https://github.com/gruntjs/grunt-contrib
    // pretty much the same as with requireJS without grunt
  , requirejs: { clientjs: { options: { optimize: 'none'
                                      , preserveLicenseComments: false
                                      , inlineText: true
                                      , mainConfigFile: 'assets/js/config.requirejs.js'
                                      , namespace: 'starterkit'
                                      , name: 'vendor/require/almond'
                                      , include: ['modules/main']
                                      , out: 'assets/dist/simulateur.js'
                                      }
                           }
               }

  });



  /*
   * Define our tasks
   */
  grunt.registerTask('js', 'lint requirejs:clientjs');  // JS task lints all the code and create our javascript bundle
  grunt.registerTask('all', 'lint clean js copy');


  // Default task: DO EVERYTHING!
  grunt.registerTask('default', 'all');


};
