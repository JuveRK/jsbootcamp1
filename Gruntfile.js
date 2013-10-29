//gruntfile for jsbootcamp1 project

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    	files: {
    		src: ['app.js']
    	}
    },
    copy: {
    	main: {
    		files: [
    			{expand: true, cwd: 'bower_components/jquery/', src: ['jquery.js'], dest: 'public/'},
			]
    	}
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'copy']);

};