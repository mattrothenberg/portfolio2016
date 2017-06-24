var gulp = require('gulp')
var uncss = require('gulp-uncss')
var shell = require('gulp-shell')
var critical = require('critical')

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

gulp.task('critical', function (cb) {
  critical.generate({
      inline: true,
      base: 'build/',
      src: 'index.html',
      dest: 'build/index.html',
      minify: true,
      width: 1440,
      height: 1000
  })
})

gulp.task('build', shell.task('middleman build'))
gulp.task('deploy', ['uncss'], shell.task('echo "done"'))
