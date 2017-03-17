import React from 'react';

//BOOTSTRAP IMPORTS

export default class Home extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <NavBar onClick={this.handlePageChange.bind(this)} />
            </div>
        );
    }
}

