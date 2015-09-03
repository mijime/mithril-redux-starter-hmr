require('babel-core/register')({
  stage: 0,
  plugins: [ 'mjsx' ],
});

var path = require('path');
var server = require('./src/server');

new server({
  port: 3000,
  path: path.resolve(__dirname, 'app/renderer'),
});
