import React, {Component} from 'react';

import './css/Tasks.css'
import TasksHeader from './TasksHeader';
import TasksContainer from './TasksContainer';
import LoadingIndication from './LoadingIndication';

import TasksService from '../services/TasksService';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {undoneTasks: [], doneTasks: [], loading: true};
    }

    componentDidMount() {
        TasksService.getAllTasks().then(results => {
            this.setState({undoneTasks: results.data.undone, doneTasks: results.data.done, loading: false});
        });
    }

    addTask = task => {
        TasksService.addTask(task).then(results => {
            this.setState({undoneTasks: results.data.undone});
        });
    };

    removeTask = id => {
        TasksService.removeTask(id);

        let updatedDoneTasks = this.state.doneTasks.filter(task => task._id.$oid !== id);
        let updatedUndoneTasks = this.state.undoneTasks.filter(task => task._id.$oid !== id);

        this.setState({doneTasks: updatedDoneTasks, undoneTasks: updatedUndoneTasks});
    };

    render() {
        return this.state.loading
            ? <LoadingIndication isLoading={this.state.loading}/>
            : (
                <div className="tasks">
                    <TasksHeader addTask={this.addTask}/>
                    <TasksContainer undoneTasks={this.state.undoneTasks} doneTasks={this.state.doneTasks}
                                    removeTask={this.removeTask}/>
                </div>
            );
    }
}

export default Tasks;