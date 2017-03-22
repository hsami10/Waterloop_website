import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl, ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap';

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
                        <form>
                            <Form inline>
                                <FormGroup controlId="fmNameFirst">
                                    <ControlLabel>Name *</ControlLabel>
                                    <FormControl type="text" />
                                    <HelpBlock>First Name</HelpBlock>
                                </FormGroup>
                                <FormGroup controlId="fmNameLast">
                                    <FormControl type="text" />
                                    <HelpBlock>Last Name</HelpBlock>
                                </FormGroup>
                            </Form>

                            <FormGroup controlId="fmEmail">
                                <ControlLabel>Email Address *</ControlLabel>
                                <FormControl type="email" />
                            </FormGroup>

                            <FormGroup controlId="fmSubject">
                                <ControlLabel>Subject *</ControlLabel>
                                <FormControl type="text" />
                            </FormGroup>

                            <FormGroup controlId="fmMessage">
                                <ControlLabel>Message *</ControlLabel>
                                <FormControl componentClass="textarea" />
                            </FormGroup>

                            <Button className="fmSubmit">SUBMIT</Button>
                        </form>
                    </Row>
                </Row>
            </Grid>
        );
    }
}