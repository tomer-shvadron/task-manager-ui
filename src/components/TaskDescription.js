import React, {Component} from 'react';

import './css/TaskDescription.css';

class TaskDescription extends Component {
    render() {
        return (
            <span onDoubleClick={this.props.onDoubleClick}>
                {this.props.description}
            </span>
        );
    }
}

export default TaskDescription;