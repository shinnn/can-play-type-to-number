'use strict';

var exec = require('child_process').exec;

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var mergeStream = require('merge-stream');
var rimraf = require('rimraf');
var stylish = require('jshint-stylish');
var toCamelCase = require('to-camel-case');

var pkg = require('./package.json');
var bower = require('./bower.json');

var funName = toCamelCase(pkg.name);

var banner = [
  '/*!',
  ' * <%= pkg.name %>.js | MIT (c) Shinnosuke Watanabe',
  ' * <%= pkg.homepage %>',
  '*/\n'
].join('\n');

var testReporter = 'spec';

gulp.task('lint', function() {
  gulp.src(['*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
  gulp.src('*.json')
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('clean', rimraf.bind(null, 'dist'));

gulp.task('build', ['lint', 'clean'], function() {
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

gulp.task('test', ['build'], function(cb) {
  var cmd = 'node test.js';
  if (!process.env.APPVEYOR) {
    cmd += ' | node ./node_modules/.bin/tap-' + testReporter;
  }

  exec(cmd, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', function() {
  testReporter = 'dot';
  gulp.watch(['{,src/}*.js'], ['test']);
  gulp.watch(['*.json', '.jshintrc'], ['lint']);
});

gulp.task('default', ['test', 'watch']);
