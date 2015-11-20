/**
 * Created by Neal yingtonB on 11/17/2015.
 */
(function (homeController){
    homeController.init = function(app){
        app.get('/', function(req, res){
            res.render('./Home/index.html');
        })
    }
})(module.exports)