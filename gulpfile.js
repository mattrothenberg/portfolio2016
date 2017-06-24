var gulp = require('gulp')
var uncss = require('gulp-uncss')
var shell = require('gulp-shell')

gulp.task('uncss', ['build'], function() {
  return gulp.src([
      'build/stylesheets/site.css',
    ])
    .pipe(uncss({
      html: [
        'build/**/*.html'
      ],
      ignore: [/^.pswp(.*)/g]
    }))
    .pipe(gulp.dest('build/stylesheets', {overwrite: true}))
})

gulp.task('build', shell.task('middleman build'))
gulp.task('deploy', ['uncss'], shell.task('echo "done"'))
