import React from 'react';
import ReactDOM from 'react-dom';

import TaskManager from './TaskManager';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TaskManager />, div);
    ReactDOM.unmountComponentAtNode(div);
});