'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var mergeStream = require('merge-stream');
var rimraf = require('rimraf');
var toCamelCase = require('to-camel-case');
var stylish = require('jshint-stylish');

var pkg = require('./package.json');
var bower = require('./bower.json');

var funName = toCamelCase(pkg.name);

var banner = [
  '/*!',
  ' * <%= pkg.name %>.js | MIT (c) Shinnosuke Watanabe',
  ' * <%= pkg.homepage %>',
  '*/\n'
].join('\n');

var mochaReporter = 'spec';

gulp.task('lint', function() {
  gulp.src(['*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
  gulp.src('*.json')
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('clean:dist', rimraf.bind(null, 'dist'));

gulp.task('clean:tmp', rimraf.bind(null, 'tmp'));

gulp.task('build:dist', ['clean:dist'], function() {
  return mergeStream(
    gulp.src(['src/*.js'])
      .pipe($.header(banner + '!function(global) {\n', {pkg: pkg}))
      .pipe($.footer('\nglobal.<%= funName %> = <%= funName %>;\n}(this);\n', {
        funName: funName
      }))
      .pipe($.rename(bower.main))
      .pipe(gulp.dest('')),
    gulp.src(['src/*.js'])
      .pipe($.header(banner, {pkg: pkg}))
      .pipe($.footer('\nmodule.exports = <%= funName %>;\n', {funName: funName}))
      .pipe($.rename(pkg.main))
      .pipe(gulp.dest('')),
    gulp.src(['src/*.js'])
      .pipe($.wrapAmd({exports: funName}))
      .pipe($.header(banner, {pkg: pkg}))
      .pipe($.rename(bower.main))
      .pipe($.rename({suffix: '-amd'}))
      .pipe(gulp.dest(''))
  );
});

gulp.task('build:test', ['clean:tmp'], function() {
  return gulp.src(['test.js'])
    .pipe($.esnext())
    .pipe(gulp.dest('tmp'));
});

gulp.task('build', ['lint', 'build:dist', 'build:test']);

gulp.task('test', ['build'], function() {
  gulp.src(['tmp/test.js'], {read: false})
    .pipe($.mocha({reporter: mochaReporter}));
});

gulp.task('watch', function() {
  mochaReporter = 'dot';
  gulp.watch(['{,src/}*.js'], ['test']);
  gulp.watch(['*.json', '.jshintrc'], ['lint']);
});

gulp.task('default', ['test', 'watch']);
