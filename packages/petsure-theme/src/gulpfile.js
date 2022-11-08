var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var cssmin          = require('gulp-cssmin');
var rename          = require('gulp-rename');


gulp.task('sass', function () {
    return gulp.src(['assets/new-theme/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/new-theme/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass-root', function () {
    return gulp.src(['assets/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/extracss'))
        .pipe(browserSync.stream());
});
gulp.task('serve',gulp.series(['sass','sass-root'], function () {
    browserSync.init({
        open: 'external',
        host: 'www.staysure.local',
        proxy: 'http://www.staysure.local'
    });
    gulp.watch(['assets/new-theme/sass/**/*.scss'], gulp.parallel(['sass']));
    gulp.watch(['assets/sass/**/*.scss'], gulp.parallel(['sass-root']));
    gulp.watch("**/*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(['serve']));