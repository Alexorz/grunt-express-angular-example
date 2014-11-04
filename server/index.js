/**
 *      Express Server
 */
// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
//
// app.use(function staticsPlaceholder(req, res, next) {
//   return next();
// });
//
// exports = module.exports = app;


/**
 *      Express & Socket Server
 */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Socket server
var imageStream = io
    .of('/image-stream')
    .on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });
    });

exports = module.exports = server;

// marker for `grunt-express` to inject static folder/contents
server.use = function(){
    app.use.apply(app, arguments);
};
app.use(function staticsPlaceholder(req, res, next) {
  return next();
});
