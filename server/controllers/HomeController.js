/**
 * Created by Neal yingtonB on 11/17/2015.
 */
(function (homeController){
    homeController.init = function(app){
        console.log('init Home controller')
        app.get('/', function(req, res){
            console.log("looking for home")
            res.render('./Home/index.html');
        })
    }
})(module.exports)