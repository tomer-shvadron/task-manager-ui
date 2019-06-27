import React, {Component} from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';

import './SearchField.css';

class SearchField extends Component {
    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="search-field" className="search-field">
                        <FormControl type="text" placeholder="Search" onChange={this.props.filterList}/>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default SearchField;
