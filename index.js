require('babel-core/register')({
  stage: 0,
});

var Server = require('./src/server');
new Server();
