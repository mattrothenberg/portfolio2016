const gulp       = require('gulp'); // core gulp
const uncss      = require('gulp-uncss'); // removes unused css
const csso       = require('gulp-csso'); // minify css
const gzip       = require('gulp-gzip'); // gzip compression
const critical   = require('critical'); // gzip compression
const imagemin = require('gulp-imagemin');

gulp.task('critical', function(cb) {
  return critical.generate({
      inline: true,
      base: 'build/',
      src: 'index.html',
      dest: 'build/index.html',
      width: 1300,
      height: 600
  })

  cb()
})

gulp.task('uncss', ['critical'], function() {
  return gulp.src('build/stylesheets/**/*.css')
    .pipe(uncss({
        html: ['build/**/*.html'],
        ignore: [/active/]
    }))
    .pipe(csso())
    .pipe(gulp.dest('./build/stylesheets'))
    .pipe(gzip())
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('zipjs', function() {
  return gulp.src('build/javascripts/site.js')
    .pipe(gzip())
    .pipe(gulp.dest('./build/javascripts'))
})

gulp.task('smush', function() {
  return gulp.src('build/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
})

gulp.task('build', ['critical', 'uncss', 'zipjs', 'smush']);