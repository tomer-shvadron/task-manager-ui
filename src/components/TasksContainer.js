import React, {Component} from 'react';
import {Tabs} from 'react-bootstrap';

import './css/TasksContainer.css'
import TasksTab from './TasksTab';

class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {filteredDoneTasks: props.doneTasks, filteredUndoneTasks: props.undoneTasks, currentTab: 'undone'};
    }

    filterDoneList = e => {
        if (e.target.value.length === 0) {
            this.setState({filteredDoneTasks: this.props.doneTasks});
            return;
        }

        let filteredDoneTasks = this.props.doneTasks
            .filter(task => task.description.toLowerCase().search(e.target.value.toLowerCase()) !== -1);

        this.setState({filteredDoneTasks: filteredDoneTasks});
    };

    filterUndoneList = e => {
        if (e.target.value.length === 0) {
            this.setState({filteredUndoneTasks: this.props.undoneTasks});
            return;
        }

        let filteredUndoneTasks = this.props.undoneTasks
            .filter(task => task.description.toLowerCase().search(e.target.value.toLowerCase()) !== -1);

        this.setState({filteredUndoneTasks: filteredUndoneTasks});
    };

    render() {
        return (
            <Tabs id="tasks-container" className="tasks-container" activeKey={this.state.currentTab}
                  onSelect={newTab => this.setState({currentTab: newTab})}>
                <TasksTab eventKey="undone" title="Tasks" tasks={this.state.filteredUndoneTasks}
                         filterList={this.filterUndoneList} removeTask={this.props.removeTask}
                         updateDescription={this.updateDescription}/>

                <TasksTab eventKey="done" title="Done" tasks={this.state.filteredDoneTasks}
                         filterList={this.filterDoneList} removeTask={this.props.removeTask}
                         updateDescription={this.updateDescription}/>
            </Tabs>
        );
    }
}

export default TasksContainer;