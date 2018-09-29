import React, {Component} from 'react';

import './AddTask.css';
import TMButton from '../../../TMButton/TMButton';
import AddTaskSection from './AddTaskSection/AddTaskSection';

class AddTask extends Component {
    constructor() {
        super();

        this.state = {isAddTaskSectionOpen: false};
    }

    openSection = () => {
        this.setState({isAddTaskSectionOpen: true});
    };

    closeSection = () => {
        this.setState({isAddTaskSectionOpen: false});
    };

    render() {
        return (
            <div className="add-task-container">
                {
                    this.state.isAddTaskSectionOpen
                        ? <AddTaskSection addTask={this.props.addTask} closeSection={this.closeSection}/>
                        : <TMButton csName="add-task-button" onClick={this.openSection} glyph="plus" text="Add"/>
                }
            </div>
        );
    }
}

export default AddTask;