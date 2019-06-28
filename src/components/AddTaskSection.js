import React, {Component} from 'react';

import './css/AddTaskSection.css';

import TMButton from './TMButton';
import AddTaskForm from './AddTaskForm';
import TasksService from '../services/TasksService';

class AddTaskSection extends Component {
    constructor(props) {
        super(props);

        this.state = {description: '', descriptionInputClassName: ''};
    }

    updateDescription = newDescription => {
        this.setState({description: newDescription, descriptionInputClassName: ''});
    };

    saveNewTask = () => {
        this.state.description.length > 0
            ? this.addTaskAndCloseSection()
            : this.setState({descriptionInputClassName: 'bad-description'});
    };

    addTaskAndCloseSection = () => {
        let task = TasksService.createNewTask(this.state.description);

        this.props.addTask(task);
        this.props.closeSection();
    };

    render() {
        return (
            <div className="add-task-section">
                <AddTaskForm description={this.state.description}
                             updateDescription={this.updateDescription}
                             descriptionInputClassName={this.state.descriptionInputClassName}/>

                <div className="center">
                    <TMButton onClick={this.saveNewTask} glyph="ok"/>

                    <TMButton onClick={this.props.closeSection} glyph="remove"/>
                </div>
            </div>
        );
    }
}

export default AddTaskSection;