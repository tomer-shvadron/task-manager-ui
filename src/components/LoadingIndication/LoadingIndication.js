import React, {Component} from 'react';

import './LoadingIndication.css';

class LoadingIndication extends Component {
    render() {
        if (!this.props.isLoading) {
            return null;
        }

        return (
            <div className="loading-indication"/>
        );
    }
}

export default LoadingIndication;