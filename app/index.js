var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

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
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar />
                    </div>
                </div>
            );
        } else if (state.page === 'sponsors-page') {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <NavBar />
                    </div>
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