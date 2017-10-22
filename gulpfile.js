const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const babili = require('gulp-babili');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const livereload = require('gulp-livereload');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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
  return browserify('src/scripts.js')
    .bundle()
    .pipe(source('src/scripts.js'))
    .pipe(buffer())
    .pipe(gulp.dest('docs'))
    .pipe(livereload());
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
