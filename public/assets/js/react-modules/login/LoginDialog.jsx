import React from 'react';

class LoginDialog extends React.Component {
    render() {
        return (
            <div className="loginDialog">
                <h1>Sign In</h1>
                <form>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="nameInput" />
                        <label className="mdl-textfield__label" for="nameInput">John Dough</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="emailInput" />
                        <label className="mdl-textfield__label" for="emailInput">john.dough@email.com</label>
                    </div>
                    <br />
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginDialog;