import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

//bg stands for blog below
export class Blog extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="bgBackgrnd">
                    <NavBar />
                </Row>

                <Row id="bgTitleRow">
                    <h1 id="bgTitle">THE JOURNEY TO CALIFORNIA</h1>
                </Row>

                <Row id="bgContent">
                    
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
