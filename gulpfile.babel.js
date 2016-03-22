import gulp from 'gulp'
import del from 'del'
import babel from 'gulp-babel'

const scripts = ['**/*']
const distPath = ['./dist']

// Remove all compiled scripts
gulp.task('clean', cb => del([distPath], { dot: true }))

// Default task
gulp.task('default', ['clean'], () => {

  gulp
    .src(scripts)
    .pipe(babel(scripts))
    .pipe(gulp.dest(distPath));
})
