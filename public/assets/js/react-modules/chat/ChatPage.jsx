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
    }
    connectToUser(username) {
        var users = this.state.users;
        var connectedUser = users[users.indexOf(username)];

        this.setState({connectedUser: connectedUser});
    }
    render() {
        return (
            <div className="chat-page">
                <ChatSidePanel users={this.state.users} />
                <ChatArea connectedUser={this.state.connectedUser} />
            </div>
        );
    }
}

ReactDOM.render(<ChatPage />, document.getElementById('container'));