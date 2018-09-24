import React, {Component} from 'react';

import './NoTasks.css';

class NoTasks extends Component {
    render() {
        return (
            <div className="no-carts">
                <h3>There are no tasks to show. Add one now!</h3>
            </div>
        );
    }
}

export default NoTasks;