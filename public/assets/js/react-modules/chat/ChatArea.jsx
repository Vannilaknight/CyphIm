import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import MessageInput from './MessageInput.jsx';
import Encryption from '../../encryption';

class ChatArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sentMessages: [],
            receivedMessages: [],
            encryptor: new Encryption()
        };
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            sentMessages: newProps.connectedUser.sentMessages,
            receivedMessages: newProps.connectedUser.receivedMessages
        });
    }
    sendMessage(message) {
        var sentMessages = this.state.sentMessages;

        message = this.state.encryptor.encrypt(message);
        var decryptedMessage = this.state.encryptor.decrypt(message);

        sentMessages.push(
            <ChatMessage key={sentMessages.length - 1} message={message} isMe={true}/>
        );

        sentMessages.push(
            <ChatMessage message={decryptedMessage} isMe={false} />
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