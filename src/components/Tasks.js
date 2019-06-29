import React, {Component} from 'react';
import {connect} from 'react-redux';

import './css/Tasks.css'
import * as taskActions from '../actions/taskActions';
import TasksHeader from './TasksHeader';
import TasksContainer from './TasksContainer';
import LoadingIndication from './LoadingIndication';

import TasksService from '../services/TasksService';

class Tasks extends Component {
    state = {};

    componentDidMount() {
        // TasksService.getAllTasks().then(results => {
        //     this.setState({undoneTasks: results.data.undone, doneTasks: results.data.done, isLoading: false});
        // });
    }

    addTask = task => {
        TasksService.addTask(task).then(results => {
            this.setState({undoneTasks: results.data.undone});
        });
    };

    removeTask = id => {
        TasksService.removeTask(id);

        let doneTasks = this.state.doneTasks.filter(task => task._id.$oid !== id);
        let undoneTasks = this.state.undoneTasks.filter(task => task._id.$oid !== id);

        this.setState({doneTasks, undoneTasks});
    };

    render() {
        console.log('this.state', this.state);
        return this.state.isLoading
            ? <LoadingIndication isLoading={this.state.isLoading}/>
            : (
                <div className="tasks">
                    <TasksHeader addTask={this.addTask}/>
                    {/*<TasksContainer undoneTasks={this.state.undoneTasks} doneTasks={this.state.doneTasks}*/}
                                    {/*removeTask={this.removeTask}/>*/}
                </div>
            );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        undoneTasks: state.undoneTasks
    };
}

const mapDispatchToProps = {
    createTask: taskActions.createTask,
    removeTask: taskActions.removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);