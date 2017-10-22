const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
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
    prefix(),
  	cleanCss(),
  	gulp.dest('docs'),
    livereload()
  ], cb);
});

gulp.task('js', () => {
  gulp.src('src/scripts.js')
  .pipe(gulp.dest('docs'))
  .pipe(livereload())
});

gulp.task('js-prod', (cb) => {
	pump([
      gulp.src('src/scripts.js'),
      babili(),
      gulp.dest('docs'),
    ], cb);
});

gulp.task('pug', (cb) => {
  pump([
    gulp.src('src/index.pug'),
  	pug(),
  	gulp.dest('docs'),
    livereload(),
  ], cb);
});

gulp.task('image-min', () => {
	gulp.src('src/images/**')
	.pipe(imagemin())
	.pipe(gulp.dest('docs/images'))
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
