import React, {Component} from 'react';

import './Tasks.css'
import TasksHeader from './TasksHeader/TasksHeader';
import TasksContainer from './TasksContainer/TasksContainer';
import TasksService from '../../services/TasksService';
import LoadingIndication from '../LoadingIndication/LoadingIndication';

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

        var updatedDoneTasks = this.state.doneTasks.filter(task => task._id.$oid !== id);
        var updatedUndoneTasks = this.state.undoneTasks.filter(task => task._id.$oid !== id);

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