import React from 'react';

class ChatUser extends React.Component {
    render() {
        return (
            <tr onClick={this.props.selectUser.bind(null, this.props.username)}>
                <td className="mdl-data-table__cell--non-numeric">{this.props.username}</td>
                <td><i className="fa fa-check-circle is-online"></i></td>
            </tr>
        );
    }
}

export default ChatUser;