import React, {Component} from 'react';

import './TasksHeader.css';
import AddTask from '../TaskList/AddTask/AddTask';

class TasksHeader extends Component {
    render() {
        return (
            <div className="tasks-header">
                <h1>Tasks</h1>

                <AddTask updateTasks={this.props.updateTasks} setLoading={this.props.setLoading}/>
            </div>
        );
    }
}

export default TasksHeader;