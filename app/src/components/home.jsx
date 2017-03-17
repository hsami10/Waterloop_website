import React from 'react';
import NavBar from './components/navbar.jsx';
//BOOTSTRAP IMPORTS
import {Grid, Row, Col} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

//navbar component
//FirstFace: main picture comp
//MidFace: 'beyond science fiction - watch university video' component
//EndFace: 'what is Waterloop' comp

export default class Home extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <NavBar />
                <FirstFace />
                <MidFace />
                <EndFace />
            </div>
        );
    }
}

class FirstFace extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1}>
                        <Row>
                            
                        </Row>
                        <Button bsStyle="Primary" bsSize="lg">

                        </Button>
                        <br />
                        <div>
                            <img src="../../bin/Images/arrow-down.png" alt="Arrow_down" height="50" width="50"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class MidFace extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1}>
                        <div>BEYOND SCIENCE FICTION</div>
                        <br />
                        <div>Watch the University Video <span>&rarr;</span></div>
                        <br />
                        <div>
                            <img src="../../bin/Images/arrow-down.png" alt="arrow"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class EndFace extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1}>
                        <div>WHAT IS WATERLOOP?</div>
                        <br />
                        <div>Watch the Video <span>&rarr;</span></div>
                        <div>
                            <img src="../../bin/Images/arrow-down.png" alt="arrow"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}