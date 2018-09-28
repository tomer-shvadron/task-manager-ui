import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

import './Task.css';
import TasksService from '../../../../services/TasksService';
import TMButton from "../../../TMButton/TMButton";

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
            <div className="task">
                <Checkbox checked={this.state.isDone} onChange={this.onChange}>
                    {this.state.description}
                </Checkbox>
                <TMButton csName="remove-task" onClick={this.removeTask} glyph="remove"/>
            </div>
        );
    }
}

export default Task;