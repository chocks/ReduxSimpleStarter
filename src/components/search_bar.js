import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        //onChange is a normal browser event.
        //instead of calling this.onInputChange, we can also write

        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // or handleInputChange, EventHandler
    //event object describes the context of the event
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


// new instance can be instantiated as 
// new SearchBar

export default SearchBar;