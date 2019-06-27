import React, {Component} from 'react';

import './TaskList.css';
import TasksTable from './TasksTable/TasksTable';
import SearchField from './SearchField/SearchField';

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