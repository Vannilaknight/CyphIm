/**
 * Created by Neal yingtonB on 11/18/2015.
 */
(function(messageController){
    messageController.init = function(app){
        app.get('/createChat', function(){
            //create chat rooms
        });
        app.post('/createChat', function(){
            //redirect to chat room
        })


        app.get('/chat', function(req, res){
            res.render('./Chat/ChatRoom');
        });
        app.post('/chat', function(req, res){
            //handle messages
        });
    }
})(module.exports)