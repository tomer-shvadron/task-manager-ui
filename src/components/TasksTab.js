import React, {Component} from 'react';
import {Tab} from 'react-bootstrap';

import './css/TasksTab.css'
import NoTasks from './NoTasks';
import TaskList from './TaskList';
import SearchField from './SearchField';

class TasksTab extends Component {
    constructor(props) {
        super(props);

        this.state = {currentTab: 'undone'};
    }

    render() {
        return (
            <Tab className="tasks-tab" eventKey={this.props.eventKey} title={this.props.title}>
                <SearchField filterList={this.props.filterList}/>
                {
                    this.props.tasks.length > 0
                        ? <TaskList tasks={this.props.tasks} removeTask={this.props.removeTask}/>
                        : <NoTasks/>
                }
            </Tab>
        );
    }
}

export default TasksTab;