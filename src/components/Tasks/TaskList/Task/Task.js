import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

import './Task.css';
import TMButton from '../../../TMButton/TMButton';
import TasksService from '../../../../services/TasksService';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {id: props.task._id.$oid, description: props.task.description, isDone: props.task.isDone};
    }

    onChange = () => {
        var newDone = !this.state.isDone;

        this.setState({isDone: newDone});
        TasksService.updateTask({id: this.state.id, isDone: newDone, description: this.state.description});
    };

    removeTask = () => {
        this.props.removeTask(this.state.id);
    };

    render() {
        return (
            <tr>
                <td>
                    <Checkbox className="center" checked={this.state.isDone} onChange={this.onChange}/>
                </td>
                <td className="task-description">
                    {this.props.task.description}
                </td>
                <td className="remove-task">
                    <TMButton onClick={this.removeTask} glyph="remove"/>
                </td>
            </tr>
        );
    }
}

export default Task;