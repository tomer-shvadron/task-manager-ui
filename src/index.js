import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import TaskManager from './components/TaskManager/TaskManager';
import registerServiceWorker from './registerServiceWorker';

var taskManagerApp = (
    <BrowserRouter>
        <TaskManager />
    </BrowserRouter>
);

ReactDOM.render(taskManagerApp, document.getElementById('root'));
registerServiceWorker();