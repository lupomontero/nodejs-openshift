var
  express = require('express'),
  app = express();

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
});

app.listen(process.env.OPENSHIFT_INTERNAL_PORT, process.env.OPENSHIFT_INTERNAL_IP);
