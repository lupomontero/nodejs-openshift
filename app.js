#!/usr/bin/env node
var
  express = require('express'),
  port = process.argv[2] || 8080,
  ip = process.argv[3] || '127.0.0.1',
  app = express();

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res, next) {
  res.render('index', { title: 'A test app', node_version: process.version });
});

app.listen(port, ip);
console.log('nodejs ' + process.version + ' server listening on ' + ip + ':' + port);
