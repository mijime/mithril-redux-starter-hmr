import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import watchify from 'watchify';
import del from 'del';
import path from 'path';

import {createBrowserify, bundler} from './gulpfile.d/browserify';

const $ = gulpLoadPlugins();

gulp.task('default', ['js', 'html', 'json', 'png', 'css']);

gulp.task('watch', ['js:watch', 'html', 'json', 'png', 'css'], () => {

  gulp.watch(['src/**/*.png'], ['png']);
  gulp.watch(['src/**/*.css'], ['css']);
  gulp.watch(['src/**/*.jade'], ['html']);
  gulp.watch(['src/**/*.yml', 'src/**/*.yaml'], ['json']);

  return gulp
    .src(path.resolve(__dirname, 'app/renderer'))
    .pipe($.webserver());
});

gulp.task('js:watch', [], () => {
  const b = createBrowserify({
    entries: [ 'src/renderer/index.js', ],
  });
  const w = watchify(b.plugin(['browserify-hmr']));
  const bundle = bundler(w);

  w.on('update', bundle);
  w.on('log', $.util.log);

  return bundle()
    .pipe(gulp.dest('app/renderer'));
});

gulp.task('js', [], () => {
  const b = createBrowserify({
    entries: [ 'src/renderer/index.js', ],
  });
  const bundle = bundler(b);

  return bundle()
    .pipe(gulp.dest('app/renderer'));
});

gulp.task('html', [], () => {
  return gulp
    .src('src/**/*.jade')
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('app'));
});

gulp.task('css', [], () => {
  return gulp
    .src('src/**/*.css')
    .pipe($.cssnext())
    .pipe($.sourcemaps.init())
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('app'));
});

gulp.task('json', [], () => {
  return gulp
    .src(['src/**/*.yml', 'src/**/*.yaml'])
    .pipe($.yaml({space: 2}))
    .pipe(gulp.dest('app'));
});

gulp.task('png', [], () => {
  return gulp
    .src(['src/**/*.png'])
    .pipe($.imagemin())
    .pipe(gulp.dest('app'));
});

gulp.task('clean', [], () => {
  return del(['app', '**/*.log']);
});
