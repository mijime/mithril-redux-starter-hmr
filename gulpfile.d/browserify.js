import browserify from 'browserify';
import babelify from 'babelify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';

export function createBrowserify (options) {
  return browserify({
    ...options,
    debug: true,
    verbose: true,
  }).transform(babelify);
}

export function bundler (b) {
  return function bundle () {
    return b.bundle()
      .on('error', (e) => {
        console.log(e.message, '\n' + e.codeFrame);
      })
      .pipe(vinylSourceStream('bundle.js'))
      .pipe(vinylBuffer());
  }
}
