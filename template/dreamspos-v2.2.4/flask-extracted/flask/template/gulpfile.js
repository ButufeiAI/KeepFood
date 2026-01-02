const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Paths
const paths = {
    scss: 'static/assets/scss/**/*.scss',
    scssMain: 'static/assets/scss/main.scss',
    css: 'static/assets/css',
};

// Compile only normal CSS (style.css)
function compileDevCSS() {
    return src(paths.scssMain)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(rename('style.css'))
        .pipe(dest(paths.css));
}

// Compile both normal and minified CSS (for production)
async function compileBuildCSS() {
    // Normal CSS
    await src(paths.scssMain)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(rename('style.css'))
        .pipe(dest(paths.css));

    // Minified CSS
    return src(paths.scssMain)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(rename('style.min.css'))
        .pipe(dest(paths.css));
}

// Watch for SCSS changes (only updates style.css)
function watchFiles() {
    watch(paths.scss, compileDevCSS);
}

// Export tasks
exports.dev = compileDevCSS;
exports.build = compileBuildCSS;
exports.watch = series(compileDevCSS, watchFiles);
exports.default = compileDevCSS;
