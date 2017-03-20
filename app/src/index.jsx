import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx'
import Team from './components/team.jsx'
import Goose1 from './components/goose1.jsx';
//BOOTSTRAP IMPORTS

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
            return <Home onPageChange={this.handlePageChange.bind(this)}/>;
        } else if (state.page === 'sponsors-page') {
            return (
                <div className="container-fluid">
                    <NavBar />
                </div>
            );
        } else if (state.page === 'flock-page') {
            return (
                <div className="container-fluid">
                        <NavBar />
                </div>
            );
        } else if (state.page === 'team-page') {
            return <Team />;
        } else if (state.page === 'contact-page') {
            return (
                <div className="container-fluid">
                        <NavBar />
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));