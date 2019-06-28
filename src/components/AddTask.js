import React, {Component} from 'react';

import './css/AddTask.css';
import TMButton from './TMButton';
import AddTaskSection from './AddTaskSection';

class AddTask extends Component {
    constructor() {
        super();

        this.state = {isAddTaskSectionOpen: false, addedClassName: ''};
    }

    openSection = () => {
        this.setState({isAddTaskSectionOpen: true, addedClassName: 'add-task-section-open'});
    };

    closeSection = () => {
        this.setState({isAddTaskSectionOpen: false, addedClassName: ''});
    };

    render() {
        return (
            <div className={`add-task-container center ${this.state.addedClassName}`}>
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