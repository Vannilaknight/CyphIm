var express = require('express'),
    app = express(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./backup-server/config/config')[env];

require('./backup-server/config/express')(app, config);

require('./backup-server/config/routes')(app);

app.listen(config.port);
console.log('The server is up and running on port: ' + config.port);