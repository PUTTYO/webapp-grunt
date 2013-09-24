module.exports = function(grunt) {
  // ここに追加
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          //hostname: 'localhost'
          hostname: '10.10.10.168',
          livereload: true
        }
      }
    },

    regarde: {
      /*fred: {
        file : 'publicHtml/*.html',
        tasks: ['livereload'],
        
        file : 'publicHtml/js/*.js',
        tasks: ['livereload']
      }
      */
        js: {
          files: '**/*.js',
          tasks: ['jshint'],
          spawn: true
        },
        css: {
          files: '**/*.scss',
          events: true
        }
    },

    cssmin: {
      compress: {
        files: {
          './min.css': ['css/base.css', 'css/style.css']
        }
      }
    },

    watch: {

      html: {
        options: {
          livereload: true
        },
        files: 'publicHtml/*.html',
        tasks: [''],
      },

      js: {
        options: {
          livereload: true
        },
        files: 'publicHtml/**/*.js',
        tasks: [''],
      },

      test: {
        options: {
          livereload: true
        },
        files: ['css/*.css'],
        tasks: ['cssmin'],
      },
    },
  });

  //loadNpmTaskを変更
  var taskName;
  for (taskName in pkg.devDependencies) {
      if (taskName.substring(0, 6) == 'grunt-') {
        grunt.loadNpmTasks(taskName);
      }
  }
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-watch');

  // 追記
 grunt.registerTask('default', ['connect', 'cssmin', 'watch']);
};
