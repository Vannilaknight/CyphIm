/**
 * Created by Neal yingtonB on 11/17/2015.
 */
(function (controllers){
    var homeController = require('./HomeController');
    controllers.init = function (app){
        homeController.init(app);
    }
})(module.exports);