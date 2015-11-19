/**
 * Created by Neal yingtonB on 11/17/2015.
 */
(function (controllers){
    var homeController = require('./HomeController');
    var loginController = require('./LoginController');
    var messageController = require('./MessageController');
    controllers.init = function (app){
        homeController.init(app);
        loginController.init(app);
        messageController.init(app);
    }
})(module.exports);