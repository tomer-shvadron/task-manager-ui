import React, {Component} from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';

import './EditTaskDescription.css';

class EditTaskDescription extends Component {
    render() {
        return (
            <form>
                <FormGroup controlId="edit-task-description" className="edit-task-description">
                    <FormControl type="text" value={this.props.description} onChange={this.props.onChange}/>
                </FormGroup>
            </form>
        );
    }
}

export default EditTaskDescription;