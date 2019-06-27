import React, {Component} from 'react';

import './TasksHeader.css';
import AddTask from './AddTask/AddTask';

class TasksHeader extends Component {
    render() {
        return (
            <div className="tasks-header">
                <h1 className="tasks-text">Tasks</h1>

                <AddTask addTask={this.props.addTask}/>
            </div>
        );
    }
}

export default TasksHeader;