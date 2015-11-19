import React from 'react';
import ReactDOM from 'react-dom';
import LoginDialog from './LoginDialog.jsx';

class LoginPage extends React.Component {
    render() {
        return (
            <LoginDialog />
        );
    }
}

ReactDOM.render(<LoginPage />, document.getElementById('container'));