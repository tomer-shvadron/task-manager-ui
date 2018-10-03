import React, {Component} from 'react';

import './Tasks.css'
import NoTasks from './NoTasks/NoTasks';
import TaskList from './TaskList/TaskList';
import TasksHeader from './TasksHeader/TasksHeader';
import TasksService from '../../services/TasksService';
import LoadingIndication from '../LoadingIndication/LoadingIndication';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {tasks: [], loading: true};
    }

    componentDidMount() {
        TasksService.getAllTasks().then(tasks => {
            this.setState({allTasks: tasks.data, tasks: tasks.data, loading: false});
        });
    }

    addTask = task => {
        TasksService.addTask(task).then(results => {
            this.setState({tasks: results.data});
        });
    };

    removeTask = id => {
        TasksService.removeTask(id);
        var updatedTasks = this.state.tasks.filter(task => task._id.$oid !== id);

        this.setState({tasks: updatedTasks});
    };

    filterList = e => {
        if (e.target.value.length === 0) {
            this.setState({tasks: this.state.allTasks});
            return;
        }

        var filteredTasks = this.state.allTasks
            .filter(task => task.description.toLowerCase().search(e.target.value.toLowerCase()) !== -1);

        this.setState({tasks: filteredTasks});
    };

    render() {
        return this.state.loading
            ? <LoadingIndication isLoading={this.state.loading}/>
            : (
                <div className="tasks">
                    <TasksHeader addTask={this.addTask}/>
                    {
                        this.state.allTasks.length > 0
                            ? <TaskList tasks={this.state.tasks} filterList={this.filterList}
                                        removeTask={this.removeTask} updateDescription={this.updateDescription}/>
                            : <NoTasks/>
                    }
                </div>
            );
    }
}

export default Tasks;