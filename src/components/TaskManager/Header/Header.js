import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="task-manager-header">
                <h1 className="task-manager-title">Task Manager</h1>
            </div>
        );
    }
}

export default Header;