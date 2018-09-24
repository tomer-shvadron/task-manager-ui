import React, {Component} from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import './AddTaskForm.css';

class AddTaskForm extends Component {
    handleTaskDescriptionChange = e => {
        this.props.updateDescription(e.target.value);
    };

    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="formTaskDescription">
                        <ControlLabel>
                            Task Description
                        </ControlLabel>
                        <FormControl type="text"
                                     value={this.props.description}
                                     placeholder="Enter task's description"
                                     onChange={this.handleTaskDescriptionChange}
                                     className={this.props.descriptionInputClassName}/>
                        <FormControl.Feedback/>
                        {
                            this.props.descriptionInputClassName === 'bad-description' && (
                                <div>Please enter at least 1 character.</div>
                            )
                        }
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default AddTaskForm;