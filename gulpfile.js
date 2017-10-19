const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const babili = require('gulp-babili');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const livereload = require('gulp-livereload');

gulp.task('sass', (cb) => {
  pump([
    gulp.src('src/styles.sass'),
  	sass(),
  	cleanCss(),
  	gulp.dest('dist'),
    livereload()
  ], cb);
});

gulp.task('js', () => {
  gulp.src('src/scripts.js')
  .pipe(gulp.dest('dist'))
  .pipe(livereload())
});

gulp.task('js-prod', (cb) => {
	pump([
        gulp.src('src/scripts.js'),
        babili(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('pug', () => {
	gulp.src('src/index.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'))
  .pipe(livereload())
});

gulp.task('image-min', () => {
	gulp.src('src/images/**')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
  .pipe(livereload())
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('src/styles.sass', ['sass']);
  gulp.watch('src/scripts.js', ['js']);
  gulp.watch('src/index.pug', ['pug']);
  gulp.watch('src/images/**', ['image-min']);
});

gulp.task('default', ['sass', 'pug', 'image-min', 'watch', 'js']);
gulp.task('prod', ['default', 'js-prod']);
