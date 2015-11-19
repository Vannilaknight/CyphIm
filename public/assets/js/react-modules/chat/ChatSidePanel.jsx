import React from 'react';

class ChatSidePanel extends React.Component {
    render() {
        return (
            <div className="chat-side-panel">
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">User</th>
                        <th>Online</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Mike Shinoda</td>
                        <td><i className="fa fa-check-circle is-online"></i></td>
                    </tr>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Jan Michael Vincent</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Yeezus</td>
                        <td><i className="fa fa-check-circle is-online"></i></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChatSidePanel;