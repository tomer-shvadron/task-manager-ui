import React, {Component} from 'react';

import './AddTask.css';
import TMButton from '../../../TMButton/TMButton';
import TasksService from '../../../../services/TasksService';
import AddTaskSection from './AddTaskSection/AddTaskSection';

class AddTask extends Component {
    constructor() {
        super();

        this.state = {isAddTaskSectionOpen: false};
    }

    openAddTaskSection = () => {
        this.setState({isAddTaskSectionOpen: true})
    };

    closeAddTaskSection = () => {
        this.setState({isAddTaskSectionOpen: false})
    };

    addTask = (description, callback) => {
        this.props.setLoading(true);

        return TasksService.addTask(description).then(results => {
            this.props.updateTasks(results.data);
            this.props.setLoading(false);
            callback();
        });
    };

    render() {
        return (
            <div className="add-task-container">
                {
                    this.state.isAddTaskSectionOpen
                        ? <AddTaskSection add={this.addTask} close={this.closeAddTaskSection}/>
                        : <TMButton csName="add-task-button" onClick={this.openAddTaskSection} glyph="plus" text="Add"/>
                }
            </div>
        );
    }
}

export default AddTask;