import React, {Component} from 'react';

import './css/TaskList.css';
import TasksTable from './TasksTable';

class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                <TasksTable tasks={this.props.tasks} removeTask={this.props.removeTask}/>
            </div>
        );
    }
}

export default TaskList;