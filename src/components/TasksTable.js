import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import './css/TasksTable.css';
import Task from './Task';

class TasksTable extends Component {
    render() {
        return (
            <div className="center">
                <Table condensed responsive className="tasks-table">
                    <tbody>
                    {
                        this.props.tasks.map(task => (
                            <Task task={task} key={`task-${task._id}`} removeTask={this.props.removeTask}/>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TasksTable;