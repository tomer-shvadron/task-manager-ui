import React, {Component} from 'react';

import './TaskManager.css';
import Header from './Header/Header';
import Content from '../Content/Content';

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