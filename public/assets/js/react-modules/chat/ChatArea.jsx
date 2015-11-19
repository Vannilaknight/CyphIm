import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import MessageInput from './MessageInput.jsx';

class ChatArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sentMsgs: [],
            receivedMsgs: []
        };
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(message) {
        var sentMsgs = this.state.sentMsgs;
        sentMsgs.push(
            <ChatMessage message={message} isMe={true}/>
        );

        this.setState({sentMsgs: sentMsgs});
    }
    render() {
        return (
            <div className="chat-area">
                <div className="chat-history mdl-shadow--2dp">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <span className="mdl-layout-title">Chatting with: {this.props.connectedUser}</span>
                        </div>
                    </header>
                    <div className="messages">
                        {this.state.sentMsgs}
                    </div>
                </div>
                <MessageInput sendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default ChatArea;