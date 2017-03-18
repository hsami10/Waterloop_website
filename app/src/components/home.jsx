import React from 'react';
import NavBar from './navbar.jsx';
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

let images = '/app/bin/Images/'; //all images stored here

class FirstFace extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1}>
                        <div>
                            <img src="http://placehold.it/850x450"/>
                        </div>
                        <Button bsStyle="primary" bsSize="lg">
                            Goose II - Learn More
                        </Button>
                        <br />
                        <div>
                            <img src={images + 'arrow-down.png'} alt="Arrow_down" height="50" width="50"/>
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
                            <img src="http://placehold.it/350x150" alt="palceholder"/>
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
                            <img src="http://placehold.it/350x150" alt="placeholder"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}