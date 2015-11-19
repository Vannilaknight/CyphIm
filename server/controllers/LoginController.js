/**
 * Created by Neal yingtonB on 11/18/2015.
 */
var passport = require('passport');

(function (LoginController){
    LoginController.init = function(app){
        app.get('/login', function(req, res){
            res.render('./Login/login');
        });
        app.post('/login', passport.authenticate('login', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));

        app.get('/register', function(req, res){
            res.render('./Login/register');
        });
        app.post('/register', passport.authenticate('signup', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));

        app.get('logout', function(req, res){
           //logout user
        });
    }
})(module.exports);