import React, {Component} from 'react';

import './AddTaskSection.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TMButton from '../../../../TMButton/TMButton';

class AddTaskSection extends Component {
    constructor(props) {
        super(props);

        this.state = {description: '', descriptionInputClassName: ''};
    }

    updateDescription = newDescription => {
        this.setState({description: newDescription, descriptionInputClassName: ''});
    };

    saveNewTask = () => {
        if (this.state.description.length > 0) {
            this.props.add({description: this.state.description}, this.props.close);
        } else {
            this.setState({descriptionInputClassName: 'bad-description'});
        }
    };

    render() {
        return (
            <div className="add-task-section">
                <AddTaskForm description={this.state.description}
                             updateDescription={this.updateDescription}
                             descriptionInputClassName={this.state.descriptionInputClassName}/>

                <TMButton csName="save-task-button" onClick={this.saveNewTask} glyph="ok"/>

                <TMButton csName="close-add-task-section-button" onClick={this.props.close} glyph="remove"/>
            </div>
        );
    }
}

export default AddTaskSection;