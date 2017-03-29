import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Blog extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <NavBar />
                </Row>
            </Grid>
        );
    }
}

export class Press extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <NavBar />
                </Row>
            </Grid>
        );
    }
}
