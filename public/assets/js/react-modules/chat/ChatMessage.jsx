import React from 'react';

class ChatMessage extends React.Component {
    render() {
        var messageType = (this.props.isMe) ? 'me' : 'other-user';

        return (
            <div className={messageType}>{this.props.message}</div>
        );
    }
}

export default ChatMessage;