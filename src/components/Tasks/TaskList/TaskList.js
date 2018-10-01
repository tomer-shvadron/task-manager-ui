import React, {Component} from 'react';

import './TaskList.css';
import Task from './Task/Task';
import SearchField from './SearchField/SearchField';

class TaskList extends Component {
    render() {
        var tasks = this.props.tasks.map(task =>
            <Task task={task} key={`task-${task._id.$oid}`} removeTask={this.props.removeTask}/>
        );

        return (
            <div className="task-list">
                <SearchField filterList={this.props.filterList}/>
                <div>
                    {tasks}
                </div>
            </div>
        );
    }
}

export default TaskList;