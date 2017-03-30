import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Team from './components/team.jsx';
import Goose1 from './components/goose1.jsx';
import Goose2 from './components/goose2.jsx';
import GooseX from './components/gooseX.jsx';
import { Sponsors } from './components/sponsors-contact.jsx';
import { Contact } from './components/sponsors-contact.jsx';
import Blog from './components/blog.jsx';
import Press from './components/press.jsx';
//BOOTSTRAP IMPORTS

let images = '/app/bin/Images/'; //all images stored here

//This component is pretty useless. I had plans for it first.
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'blog-page'
        }
    }

    render() {
        const state = this.state;
        if (state.page === 'home-page') {
            return (
                <Home />
            );
        } else if (state.page === 'sponsors-page') {
            return (
                <Sponsors />
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
                <GooseX />
            );
        } else if (state.page === 'team-page') {
            return (
                <Team />
            );
        } else if (state.page === 'contact-page') {
            return (
                <Contact />
            );
        } else if (state.page === 'blog-page') {
            return (
                <Blog />
            );
        } else if (state.page === 'press-page') {
            return (
                <Press />
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));