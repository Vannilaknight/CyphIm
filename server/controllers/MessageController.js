/**
 * Created by Neal yingtonB on 11/18/2015.
 */
(function(messageController){
    messageController.init = function(app){
        app.get('/message', function(req, res){
            //render message board
        });
        app.post('/message', function(req, res){
            //handle messages
        });
    }
})(module.exports)