module.exports = function(grunt) {

  grunt.initConfig({
    // Task configuration.
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '_scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }],
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['js/**/*.js', '!concat.js'],
        tasks: ['concat'],
        options: {
         livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8001,
          base: 'www-root'
        }
      }
    },
    concat: {
      js: {
        src: ['js/hamburg.js', 'js/main.js'],
        dest: 'js/concat.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('serve-watch', ['connect', 'sass', 'watch'])

};
