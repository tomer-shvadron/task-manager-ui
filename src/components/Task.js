import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

import './css/Task.css';
import TMButton from './TMButton';
import TaskDescription from './TaskDescription';
import TasksService from '../services/TasksService';
import EditTaskDescription from './EditTaskDescription';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.task._id,
            description: props.task.description,
            isDone: props.task.isDone,
            isEditing: false
        };
    }

    changeTaskStatus = () => {
        let newDone = !this.state.isDone;

        this.setState({isDone: newDone});
        TasksService.updateTask({id: this.state.id, isDone: newDone, description: this.state.description});
    };

    updateDescription = e => {
        let newDescription = e.target.value;

        this.setState({description: newDescription});
        TasksService.updateTask({id: this.state.id, isDone: this.state.isDone, description: newDescription});
    };

    changeTaskDescriptionEditStatus = () => {
        let currentEditingStatus = this.state.isEditing;
        this.setState({isEditing: !currentEditingStatus});
    };

    removeTask = () => {
        this.props.removeTask(this.state.id);
    };

    render() {
        return (
            <tr>
                <td>
                    <Checkbox className="center" checked={this.state.isDone} onChange={this.changeTaskStatus}/>
                </td>
                <td className="task-description">
                    {
                        this.state.isEditing
                            ? <EditTaskDescription description={this.state.description}
                                                   onChange={this.updateDescription}/>
                            : <TaskDescription description={this.state.description}
                                               onDoubleClick={this.changeTaskDescriptionEditStatus}/>
                    }
                </td>
                <td className="remove-task">
                    <TMButton onClick={this.removeTask} glyph="remove"/>
                </td>
            </tr>
        );
    }
}

export default Task;