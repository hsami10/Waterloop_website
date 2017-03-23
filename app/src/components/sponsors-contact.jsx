import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl, ControlLabel, FormGroup, HelpBlock, Checkbox } from 'react-bootstrap';

export class Sponsors extends React.Component {
    render() {
        return (
            <Grid fluid>
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

let currentTerm = 'Winter 17\'';

export class Contact extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="contBackgrnd">
                    <NavBar />
                </Row>
                <Row id="contTitleRow">
                    <h1 id="contTitle">CONTACT</h1>
                </Row>
                <Row id="contContent">
                    <Row>
                        <h2>CONTACT US</h2>
                        <h4>Please complete the form below</h4><br />
                    </Row>
                    <Row>
                        <form>
                            <ControlLabel>Name *</ControlLabel>
                            <Form inline>
                                <FormGroup controlId="fmNameFirst">
                                    <FormControl type="text" />
                                    <HelpBlock>First Name</HelpBlock>
                                </FormGroup>
                                {' '}
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
                    <br />
                    <Row>
                        <h2>JOIN THE TEAM</h2>
                        <h4>Interested in joining the team? Get in touch below!</h4><br />
                    </Row>

                    <Row>
                        <form>
                            <ControlLabel>Name *</ControlLabel>
                            <Form inline>
                                <FormGroup>
                                    <FormControl type="text" />
                                    <HelpBlock>First Name</HelpBlock>
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <FormControl type="text" />
                                    <HelpBlock>Last Name</HelpBlock>
                                </FormGroup>
                            </Form>

                            <FormGroup>
                                <ControlLabel>Email Address *</ControlLabel>
                                <FormControl type="email" />
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Resume *</ControlLabel>
                                <HelpBlock>Attach a link to your resume</HelpBlock>
                                <FormControl type="text" />
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Interests *</ControlLabel>
                                <HelpBlock>Which teams would you be interested in joining?</HelpBlock>
                                <Checkbox>Sponsorship</Checkbox>
                                <Checkbox>Media</Checkbox>
                                <Checkbox>Marketing</Checkbox>
                                <Checkbox>Logistics</Checkbox>
                                <Checkbox>Finance</Checkbox>
                                <Checkbox>Web</Checkbox>
                                <Checkbox>Levitation</Checkbox>
                                <Checkbox>Braking</Checkbox>
                                <Checkbox>Shell</Checkbox>
                                <Checkbox>Frame</Checkbox>
                                <Checkbox>Lateral</Checkbox>
                                <Checkbox>Software</Checkbox>
                                <Checkbox>Electrical</Checkbox>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Term *</ControlLabel>
                                <HelpBlock>Which term are you available?</HelpBlock>
                                <FormControl componentClass="select" placeholder={currentTerm}>
                                    <option>{currentTerm}</option>
                                    <option>Summer 17'</option>
                                    <option>Fall 17'</option>
                                    <option>Winter 18'</option>
                                </FormControl>
                            </FormGroup>

                            <Button className="fmSubmit">SUBMIT</Button>
                        </form>
                    </Row>
                </Row>
            </Grid>
        );
    }
}