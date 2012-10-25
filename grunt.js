module.exports = function(grunt) {

  grunt.initConfig({
    dosth: { default: {} }
  });

  grunt.registerMultiTask('dosth', 'Do something', function () {
    console.log("Hello world");
  });

  grunt.registerTask('default', 'dosth:default');

};
