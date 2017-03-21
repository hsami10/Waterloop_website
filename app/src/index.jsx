import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx'
import Team from './components/team.jsx'
import Goose1 from './components/goose1.jsx';
import Goose2 from './components/goose2.jsx';
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
            return <Home onPageChange={this.handlePageChange.bind(this)}/>;
        } else if (state.page === 'sponsors-page') {
            return (
                <div className="container-fluid">
                    <NavBar />
                </div>
            );
        } else if (state.page === 'goose1-page') {
            return (
                <Goose1 />
            );
        } else if (state.page === 'goose2-page') {
            return (
                <Goose2 />
            );
        } else if (state.page === 'gooseX-page') {
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