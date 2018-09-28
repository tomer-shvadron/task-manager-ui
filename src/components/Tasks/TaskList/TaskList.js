import React, {Component} from 'react';

import './TaskList.css';
import Task from './Task/Task';

class TaskList extends Component {
    render() {
        var tasks = this.props.tasks.map((task, index) => <Task task={task} key={`task-${index}`}
                                                                removeTask={this.props.removeTask}/>);

        return (
            <div className="task-list">
                {tasks}
            </div>
        );
    }
}

export default TaskList;