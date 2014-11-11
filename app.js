#!/usr/bin/env node

var express = require('express');
var port = process.argv[2] || 8080;
var ip = process.argv[3] || '127.0.0.1';
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
  res.render('index', { title: 'A test app', node_version: process.version });
});

app.listen(port, ip, function () {
  console.log('nodejs ' + process.version + ' server listening on ' + ip + ':' + port);
});
