import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import MessageInput from './MessageInput.jsx';

class ChatArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sentMessages: [],
            receivedMessages: []
        };
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            sentMessages: this.props.connectedUser.sentMessages,
            receivedMessages: this.props.connectedUser.receivedMessages
        });
    }
    sendMessage(message) {
        var sentMessages = this.state.sentMessages;
        sentMessages.push(
            <ChatMessage key={sentMessages.length - 1} message={message} isMe={true}/>
        );

        this.setState({sentMessages: sentMessages});
        this.props.addSentMessage.bind(null, message);
    }
    render() {
        return (
            <div className="chat-area">
                <div className="chat-history mdl-shadow--2dp">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <span className="mdl-layout-title">Chatting with: {this.props.connectedUser.username}</span>
                        </div>
                    </header>
                    <div className="messages">
                        {this.state.sentMessages}
                    </div>
                </div>
                <MessageInput sendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default ChatArea;