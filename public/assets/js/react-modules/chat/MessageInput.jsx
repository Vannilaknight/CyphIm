import React from 'react';

class MessageInput extends React.Component {
    packageMessage(next) {
        var message = this.refs.textBox.value;
        this.refs.textBox.value = "";
        next(message);
    }
    render() {
        return (
            <div className="message-input">
                <form action="javascript:void(0);">
                    <textarea ref="textBox" name="message-input" id="chatMessageInput" className="mdl-shadow--2dp"></textarea>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                            onClick={this.packageMessage.bind(this, this.props.sendMessage)}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default MessageInput;