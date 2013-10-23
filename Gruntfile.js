module.exports = function(grunt) {

  // Project Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['assets/sass/partials/**.scss', 'assets/sass/modules/**.scss'],
        tasks: 'sass:dev'
      }
    },

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
      tasks: ['watch:sass', 'jekyll:dev'],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default Task
  grunt.registerTask('default', ['concurrent'])

};