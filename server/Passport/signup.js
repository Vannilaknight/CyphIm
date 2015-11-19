/**
 * Created by Neal yingtonB on 11/16/2015.
 */
var LocalStrategy = require('passport-local');
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
var passport = require('passport');

var mongoose = require('mongoose');

module.exports = function(){
    passport.use('signup', new LocalStrategy({
      passReqToCallback : true
    }, function(req, username, password, done){
        findOrCreateUser = function(){

            mongoose.model('User').findOne({'username':username}, function(err, user){
                if(err){
                    return done(err);
                }
                if(user){
                    return done(null, false, req.flash('message', 'Username already exists'));
                }else{
                    var newUser = new User();

                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.email = req.param('email');
                    newUser.firstName = req.param('firstName');
                    newUser.lastName = req.param('lastName');

                    newUser.save(function(err){
                        if(err){
                            throw err;
                        }

                        return done(null, newUser);
                    });
                }
            });
        };
        process.nextTick(findOrCreateUser);
    }));

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}