import React from 'react';
import ReactDOM from 'react-dom';
import ChatArea from './ChatArea.jsx';
import ChatSidePanel from './ChatSidePanel.jsx';

class ChatPage extends React.Component {
    render() {
        return (
            <div className="chat-page">
                <ChatSidePanel />
                <ChatArea />
            </div>
        );
    }
}

ReactDOM.render(<ChatPage />, document.getElementById('container'));