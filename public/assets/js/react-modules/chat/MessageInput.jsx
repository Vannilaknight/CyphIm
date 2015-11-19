import React from 'react';

class MessageInput extends React.Component {
    render() {
        return (
            <div className="message-input">
                <form action="javascript:void(0);">
                    <textarea name="message-input" id="chatMessageInput" className="mdl-shadow--2dp"></textarea>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                            onClick={this.props.sendMessage.bind(null, 'Hi')}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default MessageInput;