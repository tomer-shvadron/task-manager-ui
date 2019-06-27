import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import './TasksTable.css';
import Task from './Task/Task';

class TasksTable extends Component {
    render() {
        return (
            <div className="center">
                <Table condensed responsive className="tasks-table">
                    <tbody>
                    {
                        this.props.tasks.map(task => (
                            <Task task={task} key={`task-${task._id.$oid}`} removeTask={this.props.removeTask}
                                  updateDescription={this.props.updateDescription}/>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TasksTable;