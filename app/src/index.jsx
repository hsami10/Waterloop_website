import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx'
import Team from './components/team.jsx'
//BOOTSTRAP IMPORTS

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 'team-page'
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
            return <Team />;
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