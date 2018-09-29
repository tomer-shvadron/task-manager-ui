import React, {Component} from 'react';

import './TaskList.css';
import Task from './Task/Task';

class TaskList extends Component {
    render() {
        var tasks = this.props.tasks.map(task =>
            <Task task={task} key={`task-${task._id.$oid}`} removeTask={this.props.removeTask}/>
        );

        return (
            <div className="task-list">
                {tasks}
            </div>
        );
    }
}

export default TaskList;