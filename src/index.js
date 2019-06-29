import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';

import './index.css';
import configureStore from './configureStore';
import TaskManager from './components/TaskManager';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

let taskManagerApp = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <TaskManager />
        </BrowserRouter>
    </ReduxProvider>
);

ReactDOM.render(taskManagerApp, document.getElementById('root'));
registerServiceWorker();