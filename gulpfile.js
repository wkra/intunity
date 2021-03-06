var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var htmlReaplce = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');
var del = require('del');
var sequence = require('run-sequence');

var config = {
  dist: 'dist/',
  src: 'src/',
  // in
  cssin: 'src/css/**/*.css',
  //jsin: 'src/js/**/*.js',
  jsin: 'src/js/*.js',
  imgin: 'src/img/**/*.{jpg,jpeg,png,gif}',
  htmlin: 'src/*.html',
  scssin: 'src/scss/**/*.scss',
  svgin: 'src/svg/**/*.svg',
  fontsin: 'src/fonts/**/*.*',
  datain: 'src/data/**/*.*',
  // out
  cssout: 'dist/css/',
  jsout: 'dist/js/',
  imgout: 'dist/img/',
  htmlout: 'dist/',
  scssout: 'src/css/',
  svgout: 'dist/svg/',
  fontsout: 'dist/fonts/',
  dataout: 'dist/data/',
  // names
  cssoutname: 'style.css',
  jsoutname: 'script.js',
  cssreplaceout: 'css/style.css',
  jsreplaceout: 'js/script.js',
   // copy files
   copyfiles: ['src/favicon.ico', 'src/tile.png', 'src/tile-wide.png', 'src/404.html', 'src/.htaccess', 'src/browserconfig.xml', 'src/crossdomain.xml'],
};

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: config.src
  });

  gulp.watch([config.htmlin, config.jsin], ['reload']);
  gulp.watch(config.scssin, ['sass']);
});

gulp.task('sass', function() {
  return gulp.src(config.scssin)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    /*.pipe(sourcemaps.write())*/
    .pipe(gulp.dest(config.scssout))
    .pipe(browserSync.stream());
});

gulp.task('css', function() {
  return gulp.src(config.cssin)
    .pipe(concat(config.cssoutname))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.cssout));
});

gulp.task('js', function() {
  return gulp.src(config.jsin)
    .pipe(concat(config.jsoutname))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsout));
});

gulp.task('img', function() {
  return gulp.src(config.imgin)
    .pipe(changed(config.imgout))
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgout));
});

gulp.task('svg', function() {
  return gulp.src(config.svgin)
    .pipe(changed(config.svgout))
    .pipe(gulp.dest(config.svgout));
});

gulp.task('html', function() {
  return gulp.src(config.htmlin)
    .pipe(htmlReaplce({
      'css': config.cssreplaceout,
      'js': config.jsreplaceout
    }))
    .pipe(htmlMin({
      sortAttributes: true,
      sortClassName: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(config.dist))
});

gulp.task('copyfiles', function(){
    return gulp.src(config.copyfiles)
        .pipe(gulp.dest(config.dist));
});

gulp.task('copyvendor', function(){
    return gulp.src('src/js/vendor/*.js')
        .pipe(gulp.dest('dist/js/vendor'));
});
gulp.task('copyparallax', function(){
    return gulp.src('src/js/parallax/*.js')
        .pipe(gulp.dest('dist/js/parallax'));
});

gulp.task('fonts', function(){
    return gulp.src(config.fontsin)
        .pipe(gulp.dest(config.fontsout));
});
gulp.task('data', function(){
    return gulp.src(config.datain)
        .pipe(gulp.dest(config.dataout));
});

gulp.task('clean', function() {
  return del([config.dist]);
});

gulp.task('build', function() {
  sequence('clean', ['html', 'js', 'css', 'img', 'svg', 'copyfiles', 'copyvendor', 'copyparallax', 'fonts', 'data']);
});

gulp.task('default', ['serve']);
