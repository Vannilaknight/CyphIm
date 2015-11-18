/**
 * Created by Neal yingtonB on 11/16/2015.
 */
var passport = require('passport');
var User = require('../models/user');


module.exports = function(){
    passport.serializeUser(function(user, done){
       done(null, user._id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });
}