import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class Goose2 extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="g2Backgrnd">
                    <NavBar />
                </Row>
                <Row id="g2TitleRow">
                    <h1 id="g2Title">CONCEPT: GOOSE II</h1>
                </Row>
                <Row id="g2Content">
                    <Row>
                        <p style={{textAlign:"center"}}>This page will be coming soon!</p>
                    </Row>
                </Row>
            </Grid>
        );
    }
}