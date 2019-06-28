import React, {Component} from 'react';

import './css/TaskList.css';
import TasksTable from './TasksTable';
import SearchField from './SearchField';

class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                <SearchField filterList={this.props.filterList}/>
                <TasksTable tasks={this.props.tasks} removeTask={this.props.removeTask}
                            updateDescription={this.props.updateDescription}/>
            </div>
        );
    }
}

export default TaskList;