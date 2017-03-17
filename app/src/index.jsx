import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar.jsx';

//BOOTSTRAP
import {Button, ButtonToolbar} from 'react-bootstrap';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 'sponsors-page'
        } 
    }

    handlePageChange(name) {
        this.setState({page: name});
    }

    render() {
        const state = this.state;
        if (state.page === 'home-page') {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar onClick={this.handlePageChange.bind(this)}/>
                    </div>
                </div>
            );
        } else if (state.page === 'sponsors-page') {
            return (
                <div class="container-fluid">
                    <NavBar />
                </div>
            );
        } else if (state.page === 'flock-page') {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar />
                    </div>
                </div>
            );
        } else if (state.page === 'team-page') {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar />
                    </div>
                </div>
            );
        } else if (state.page === 'contact-page') {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar />
                    </div>
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));