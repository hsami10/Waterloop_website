import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Sponsors extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="spBackgrnd">
                    <NavBar />
                </Row>
                <Row id="spTitleRow">
                    <h1 id="spTitle">SPONSORS</h1>
                </Row>
                <Row id="spContent">
                    <h4>Want to sponsor us? Email us at sponsorship@teamwaterloop.ca!</h4>
                    <Button id="spPackageBtn">OUR SPONSORSHIP PACKAGE</Button>
                </Row>
            </Grid>
        );
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="contBackgrnd">
                    <NavBar />
                </Row>
                <Row id="contTitleRow">
                    <h1 id="contTitle">CONTACT</h1>
                </Row>
                <Row id="contContent">
                    <Row>
                        <h2>CONTACT US</h2>
                        <h4>Please complete the form below</h4>
                    </Row>
                    <Row>
                        
                    </Row>
                </Row>
            </Grid>
        );
    }
}