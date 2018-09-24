import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './Content.css'
import Tasks from '../Tasks/Tasks';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/" component={Tasks}/>
            </div>
        );
    }
}

export default Content;