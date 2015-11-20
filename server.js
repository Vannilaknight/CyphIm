/**
 * Created by Neal Byington on 11/16/2015.
 */
var port = 3000;
var express = require('express');
var flash = require('connect-flash');

var app = express();
app.use(flash());

var mongoose = require('mongoose');
var dbConfig = require('./server/dbConfig');
mongoose.connect(dbConfig.url);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//var cookieParser = require('cookie-parser');
//app.use(cookieParser);

var passport = require('passport');
var sessions = require('express-session');
app.use(sessions({secret: "secretKey"}));
app.use(passport.initialize());
app.use(passport.session());
var initPassport = require('./server/Passport/init.js');
initPassport();

var controllers = require('./server/controllers');
controllers.init(app);

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname+"/Views");
var engines = require("consolidate");
app.engine('html', engines.mustache);
app.set('view engine', 'html');

var server = require('http').createServer(app);
var socketIO = require('socket.io')();
var io = socketIO.listen(server);
var sockets = [];

var usernames = {};
var numUsers = 0;

io.on('connection', function(socket) {
    var addUser = false;  
    // when the client emits 'new message', this listens and executes
      socket.on('new message', function (data) {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
          username: socket.username,
          message: data
        });
      });

      // when the client emits 'add user', this listens and executes
      socket.on('add user', function (username) {
        // we store the username in the socket session for this client
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
          numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
          username: socket.username,
          numUsers: numUsers
        });
      });

      // when the user disconnects.. perform this
      socket.on('disconnect', function () {
        // remove the username from global usernames list
        if (addedUser) {
          delete usernames[socket.username];
          --numUsers;

          // echo globally that this client has left
          socket.broadcast.emit('user left', {
            username: socket.username,
            numUsers: numUsers
          });
        }
      });
});


server.listen(port);
console.log("listening on port: "+port)