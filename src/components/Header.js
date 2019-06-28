import React, {Component} from 'react';

import './css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="task-manager-header center">
                <h1 className="task-manager-title">Task Manager</h1>
            </div>
        );
    }
}

export default Header;