const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

// Compile SCSS from static/assets/scss/ to a single static/assets/css/style.css
gulp.task('sass', function() {
  return gulp.src('static/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('static/assets/css'));
});

// Watch SCSS files for changes
gulp.task('watch', function() {
  gulp.watch('static/assets/scss/**/*.scss', gulp.series('sass'));
});

// Default task: just compile SCSS and watch
gulp.task('default', gulp.series('sass', 'watch'));