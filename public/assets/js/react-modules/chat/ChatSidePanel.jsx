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

        for(var user in users) {
            userComponents.push(
                <ChatUser username={users[user]}/>
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