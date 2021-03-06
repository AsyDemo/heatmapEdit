module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    clean: ['dist'],

    copy: {
      dist_js: {
        expand: true,
        cwd: 'src',
        src: ['**/*.ts', '**/*.d.ts', '!**/*.js'],
        dest: 'dist'
      },
      dist_html: {
        expand: true,
        flatten: true,
        cwd: 'partials',
        src: ['*.html'],
        dest: 'dist/partials/'
      },
      dist_img: {
        expand: true,
        flatten: true,
        cwd: 'img',
        src: ['*.*'],
        dest: 'dist/img/'
      },
      dist_statics: {
        expand: true,
        flatten: true,
        src: ['plugin.json', 'README.md'],
        dest: 'dist/'
      },
      externals: {
        cwd: 'src',
        expand: true,
        src: ['**/libs/*'],
        dest: 'dist'
      }
    },

    typescript: {
      build: {
        src: ['dist/*.ts', '!**/*.d.ts'],
        dest: 'dist',
        options: {
          module: 'system',
          target: 'es5',
          rootDir: 'dist/',
          declaration: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          sourceMap: true,
          noImplicitAny: false,
        }
      }
    },

    watch: {
      files: ['src/*.ts', 'partials/*.html', 'img/*.*', 'plugin.json', 'README.md'],
      tasks: ['default'],
      options: {
        debounceDelay: 250,
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-systemjs', 'transform-es2015-for-of'],
      },
      dist: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js', '**/*.*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      },
    },

  });

  grunt.registerTask('default', [
    'clean',
    'copy:dist_js',
    'copy:externals',
    'babel',
    'typescript:build',
    'copy:dist_html',
    'copy:dist_img',
    'copy:dist_statics'
  ]);
};