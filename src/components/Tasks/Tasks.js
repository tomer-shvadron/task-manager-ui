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
            this.setState({tasks: tasks.data, loading: false})
        });
    }

    updateTasks = allTasks => {
        this.setState({tasks: allTasks});
    };

    setLoading = isLoading => {
        this.setState({loading: isLoading});
    };

    render() {
        return this.state.loading
            ? <LoadingIndication isLoading={this.state.loading}/>
            : (
                <div className="tasks">
                    <TasksHeader updateTasks={this.updateTasks} setLoading={this.setLoading}/>
                    {
                        this.state.tasks.length > 0
                            ? <TaskList tasks={this.state.tasks}/>
                            : <NoTasks/>
                    }
                </div>
            );
    }
}

export default Tasks;