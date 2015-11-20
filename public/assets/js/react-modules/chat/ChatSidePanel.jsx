import React from 'react';
import ChatUser from './ChatUser.jsx';

class ChatSidePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userComponents: []
        };

        this.buildUserComponents = this.buildUserComponents.bind(this);
    }
    componentDidMount() {
        this.buildUserComponents(this.props.users);
    }
    buildUserComponents(users) {
        var userComponents = [];

        for(var i in users) {
            var username = users[i].username;
            userComponents.push(
                <ChatUser key={i} username={username} selectUser={this.props.connectToUser.bind(null, username)}/>
            );
        }

        this.setState({userComponents: userComponents});
    }
    render() {
        return (
            <div className="chat-side-panel">
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">User</th>
                        <th>Online</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.userComponents}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChatSidePanel;