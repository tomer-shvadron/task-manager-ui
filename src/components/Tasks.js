import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './css/Tasks.css'
import TasksHeader from './TasksHeader';
import TasksContainer from './TasksContainer';
import TasksService from '../services/TasksService';
import LoadingIndication from './LoadingIndication';
import * as taskActions from '../actions/taskActions';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {undoneTasks: [], doneTasks: [], isLoading: true};
    }

    componentDidMount() {
        TasksService.getAllTasks().then(results => {
            let undoneTasks = results.data.filter(task => task.isDone === false);
            let doneTasks = results.data.filter(task => task.isDone === true);

            this.setState({undoneTasks, doneTasks, isLoading: false});
        });
    }

    addTask = task => {
        TasksService.addTask(task).then(results => {
            this.setState({undoneTasks: results.data.undone});
        });
    };

    removeTask = id => {
        TasksService.removeTask(id);

        let doneTasks = this.state.doneTasks.filter(task => task._id !== id);
        let undoneTasks = this.state.undoneTasks.filter(task => task._id !== id);

        this.setState({doneTasks, undoneTasks});
    };

    render() {
        return this.state.isLoading
            ? <LoadingIndication isLoading={this.state.isLoading}/>
            : (
                <div className="tasks">
                    <TasksHeader addTask={this.addTask}/>
                    <TasksContainer undoneTasks={this.state.undoneTasks} doneTasks={this.state.doneTasks}
                                    removeTask={this.removeTask}/>
                </div>
            );
    }
}

Tasks.propTypes = {
    doneTasks: PropTypes.array.isRequired,
    undoneTasks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

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

const TasksView = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksView;