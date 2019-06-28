import React, {Component} from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';

import './css/SearchField.css';

class SearchField extends Component {
    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="search-field" className="search-field">
                        <FormControl type="text" placeholder="Search Tasks" onChange={this.props.filterList}/>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default SearchField;