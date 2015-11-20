import React from 'react';
import ReactDOM from 'react-dom';
import ChatArea from './ChatArea.jsx';
import ChatSidePanel from './ChatSidePanel.jsx';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    username: 'Jan Michael Vincent',
                    receivedMessages: [],
                    sentMessages: []
                },
                {
                    username: 'Mike Shinoda',
                    receivedMessages: [],
                    sentMessages: []
                }
            ],
            connectedUser: 'Nobody'
        };

        this.connectToUser = this.connectToUser.bind(this);
        this.addSentMessage = this.addSentMessage.bind(this);
    }
    connectToUser(username) {
        var users = this.state.users;
        var connectedUser = null;

        for(var i in users) {
            if(users[i].username === username) {
                connectedUser = users[i];
            }
        }

        this.setState({connectedUser: connectedUser});
    }
    addSentMessage(message) {
        var connectedUser = this.state.connectedUser;
        connectedUser.sentMessages.push(message);

        this.setState({connectedUser: connectedUser});
    }
    render() {
        return (
            <div className="chat-page">
                <ChatSidePanel users={this.state.users} connectToUser={this.connectToUser} />
                <ChatArea ref="chatArea" connectedUser={this.state.connectedUser} addSentMessage={this.addSentMessage} />
            </div>
        );
    }
}

ReactDOM.render(<ChatPage />, document.getElementById('container'));