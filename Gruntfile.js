module.exports = function(grunt) {

  // Project Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/main.css': 'assets/sass/main.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        src: ['assets/sass/main.scss'],
        dest: 'assets/css/main.css'
      }
    },

    jekyll: {
      dev: {
        options: {
          serve: true,
          watch: true
        }
      }
    },

    concurrent: {
      tasks: ['sass:dev', 'jekyll:dev'],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default Task
  grunt.registerTask('default', ['concurrent'])

};