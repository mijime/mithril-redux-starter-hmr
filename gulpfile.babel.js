import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import watchify from 'watchify';
import del from 'del';

import {createBrowserify, bundler} from './gulpfile.d/browserify';

const $ = gulpLoadPlugins();

gulp.task('default', ['browserify', 'jade']);

gulp.task('watch', ['jade'], () => {
  const b = createBrowserify({
    entries: ['src/renderer/index.js'],
  });
  const w = watchify(b.plugin(['browserify-hmr']));
  const bundle = bundler(w);

  w.on('update', bundle);
  w.on('log', $.util.log);
  bundle()
    .pipe(gulp.dest('lib/renderer'));

  gulp.watch(['src/**/*.jade'], ['jade']);
  require('vorlon');
});

gulp.task('browserify', [], () => {
  const b = createBrowserify({
    entries: ['src/renderer/index.js'],
  });
  const bundle = bundler(b);
  bundle()
    .pipe(gulp.dest('lib/renderer'));
});

gulp.task('jade', [], () => {
  gulp.src('src/**/*.jade')
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', [], () => {
  del(['lib', '*.log']);
});
