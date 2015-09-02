import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import watchify from 'watchify';
import del from 'del';

import {createBrowserify, bundler} from './gulpfile.d/browserify';

const $ = gulpLoadPlugins();

gulp.task('default', ['browserify', 'jade', 'yaml']);

gulp.task('watch', ['default'], () => {
  const b = createBrowserify({
    entries: ['src/renderer/index.js'],
  });
  const w = watchify(b.plugin(['browserify-hmr']));
  const bundle = bundler(w);

  w.on('update', bundle);
  w.on('log', $.util.log);
  bundle()
    .pipe(gulp.dest('app/renderer'));

  gulp.watch(['src/**/*.jade'], ['jade']);
  gulp.watch(['src/**/*.yml', 'src/**/*.yaml'], ['yaml']);
  require('vorlon');
});

gulp.task('browserify', [], () => {
  const b = createBrowserify({
    entries: ['src/renderer/index.js'],
  });
  const bundle = bundler(b);
  bundle()
    .pipe(gulp.dest('app/renderer'));
});

gulp.task('jade', [], () => {
  gulp.src('src/**/*.jade')
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('app'));
});

gulp.task('yaml', [], () => {
  gulp.src(['src/**/*.yml', 'src/**/*.yaml'])
    .pipe($.yaml({space: 2}))
    .pipe(gulp.dest('app'));
});

gulp.task('clean', [], () => {
  del(['app', '*.log']);
});
