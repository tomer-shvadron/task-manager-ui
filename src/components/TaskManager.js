import React, {Component} from 'react';

import './css/TaskManager.css';
import Header from './Header';
import Content from './Content';

class TaskManager extends Component {
    render() {
        return (
            <div className="task-manager">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default TaskManager;