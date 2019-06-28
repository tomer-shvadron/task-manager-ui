import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

import './css/TMButton.css';

class TMButton extends Component {
    render() {
        return (
            <div>
                <Button className={this.props.csName} onClick={this.props.onClick}>
                    <Glyphicon glyph={this.props.glyph}/>{ this.props.text && (' ' + this.props.text)}
                </Button>
            </div>
        );
    }
}


export default TMButton;