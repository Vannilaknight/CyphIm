import React from 'react';
import ReactDOM from 'react-dom';
import ChatArea from './ChatArea.jsx';
import ChatSidePanel from './ChatSidePanel.jsx';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                'Jan Michael Vincent',
                'Mike Shinoda'
            ],
            connectedUser: ''
        };

        this.connectToUser = this.connectToUser.bind(this);
    }
    connectToUser(username) {
        var users = this.state.users;
        var connectedUser = users[users.indexOf(username)];

        this.setState({connectedUser: connectedUser});
        this.refs.chatArea.clearChatLog();
    }
    render() {
        return (
            <div className="chat-page">
                <ChatSidePanel users={this.state.users} connectToUser={this.connectToUser} />
                <ChatArea ref="chatArea" connectedUser={this.state.connectedUser} />
            </div>
        );
    }
}

ReactDOM.render(<ChatPage />, document.getElementById('container'));