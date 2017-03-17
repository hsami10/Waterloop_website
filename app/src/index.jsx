import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar.jsx';

//BOOTSTRAP IMPORTS
import {Button, ButtonToolbar} from 'react-bootstrap';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 'home-page'
        } 
    }

    handlePageChange(name) {
        this.setState({page: name});
    }

    render() {
        const state = this.state;
        if (state.page === 'home-page') {
            return <Home />;
        } else if (state.page === 'sponsors-page') {
            return (
                <div class="container-fluid">
                    <NavBar />
                </div>
            );
        } else if (state.page === 'flock-page') {
            return (
                <div class="container-fluid">
                        <NavBar />
                </div>
            );
        } else if (state.page === 'team-page') {
            return (
                <div class="container-fluid">
                        <NavBar />
                </div>
            );
        } else if (state.page === 'contact-page') {
            return (
                <div class="container-fluid">
                        <NavBar />
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));