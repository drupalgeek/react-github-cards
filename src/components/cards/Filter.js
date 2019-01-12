import React, { Component } from 'react';
import axios from 'axios';

class Filter extends Component {
    state = {
        userName:""
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event: Form Submit', this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`).
        then(res => {
            this.props.onSubmit(res.data);
            this.setState({userName:""})
            }
        )
    }
    render () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="Github Username" value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value}) }></input>
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

export default Filter;