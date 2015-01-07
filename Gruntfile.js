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
        files: ['js/**/*.js', '!js/concat.js'],
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
        src: ['js/main.js', 'js/hamburg.js'],
        dest: 'js/concat.js'
      }
    },
    copy: {
      apache: {
        src: 'bower_components/apache-server-configs/dist/.htaccess',
        dest: '.htaccess'
      },
      jekyllAssets: {
        src: 'img/**/*',
        dest: 'jekyll/'
      },
      jekyllCss: {
        expand: true,
        cwd: 'css',
        src: '**',
        dest: 'jekyll/css/',
        flatten: false,
        filter: 'isFile'
      },
      jQuery: {
        src: 'bower_components/jquery/dist/jquery.min.js',
        dest: 'js/jquery.min.js'
      },
      jQueryWaypoints: {
        src: 'bower_components/jquery-waypoints/waypoints.min.js',
        dest: 'js/waypoint.min.js'
      },
      jekyllJS: {
        expand: true,
        cwd: 'js/',
        src: "**",
        dest: 'jekyll/js/',
        flatten: true,
        filter: 'isFile'
      },
      jekyllFonts: {
        src: 'fonts/',
        dest: 'jekyll/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('serve-watch', ['connect', 'sass', 'watch']);
  grunt.registerTask('prepJekyll', ['copy:jekyllAssets', 'copy:jekyllCss', 'copy:jekyllJS']);

};
