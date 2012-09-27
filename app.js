var
  express = require('express'),
  port = process.argv[1] || process.env.OPENSHIFT_INTERNAL_PORT || 8080,
  ip = process.argv[2] || process.env.OPENSHIFT_INTERNAL_IP || '127.0.0.1',
  app = express();

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
});

app.listen(port, ip);
