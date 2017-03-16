import React from 'react';

var styles = {
    padding: '100px',
    color: 'white',
    backgroundColor: 'darkcyan'
};

export default class NavBar extends React.Component {
    render() {
        let text = 'sponsors-page';
        return (
            <div>
                <a style={styles} onClick={this.props.onClick(text)}>Sponsors</a>
                <a style={styles}>Flock</a>
                <a style={styles}>Home</a>
                <a style={styles}>Team</a>
                <a style={styles}>Contact</a>
            </div>
        );
    }
}
