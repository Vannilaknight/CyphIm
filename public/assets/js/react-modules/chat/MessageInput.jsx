import React from 'react';

class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.packageMessage = this.packageMessage.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyDown);
    }
    packageMessage(next) {
        var message = this.refs.textBox.value;

        if(message && message.trim() != '') {
            this.refs.textBox.value = "";
            next(message);
        }
    }
    handleKeyDown(e) {
    var ENTER = 13;
        if( e.keyCode == ENTER ) {
            this.packageMessage(this.props.sendMessage);
        }
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