/**
 * Created by Neal Byington on 11/16/2015.
 */
var port = 3000;
var express = require('express');
var flash = require('connect-flash');
var app = express();
//app.use(flash());
//
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
//
//var cookieParser = require('cookie-parser');
//app.use(cookieParser);
//
//var passport = require('passport');
//var sessions = require('express-session');
//app.use(sessions({secret: "secretKey"}));
//app.use(passport.initialize());
//app.use(passport.session());
//var initPassport = require('./Passport/init.js');
//initPassport();

var controllers = require('./server/controllers');
controllers.init(app);

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname+"/Views");
var engines = require("consolidate");
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.listen(port);
console.log("listening on port: "+port)