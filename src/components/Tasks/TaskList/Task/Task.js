import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

import './Task.css';
import TasksService from '../../../../services/TasksService';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {isDone: props.task.isDone, description: props.task.description};
    }

    onChange = () => {
        var newDone = !this.state.isDone;

        this.setState({isDone: newDone});
        TasksService.updateTask({id: this.props.task._id.$oid, isDone: newDone, description: this.state.description});
    };

    render() {
        return (
            <div className="task">
                <Checkbox checked={this.state.isDone} onChange={this.onChange}>
                    {this.state.description}
                </Checkbox>
            </div>
        );
    }
}

export default Task;