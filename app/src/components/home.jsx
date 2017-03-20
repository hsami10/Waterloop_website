import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import {Grid, Row, Col} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

//navbar component
//FirstFace: main picture comp
//MidFace: 'beyond science fiction - watch university video' component
//EndFace: 'what is Waterloop' comp

let images = '/app/bin/Images/'; //all images stored here

export default class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar onPageChange={this.props.onPageChange}/>
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
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1} id="homeFirstFace">
                        <div id="homeFirstFace-image" className="homeFirstFace">
                            <img src="http://placehold.it/950x520"/>
                        </div>
                        <Button bsSize="lg" id="goose2LrnMore-btn" className="homeFirstFace">
                            Goose II - Learn More
                        </Button>
                        <br />
                        <div className="homeFirstFace">
                            <img src={images + 'arrow-down.png'} alt="Arrow_down" height="40" width="40"/>
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
                    <Col md={10} lg={10} mdOffset={1} lgOffset={1} id="homeMidFace">
                        <div className="homeTitles">BEYOND SCIENCE FICTION</div>
                        <br />
                        <div className="watchVidPrompts">Watch the University Video <span>&rarr;</span></div>
                        <br />
                        <div>
                            <img src="http://placehold.it/650x450" alt="palceholder"/>
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
                        <div className="homeTitles">WHAT IS WATERLOOP?</div>
                        <br />
                        <div className="watchVidPrompts" style={{marginBottom:'20px'}}>Watch the Video <span>&rarr;</span></div>
                        <div>
                            <img src="http://placehold.it/650x450" alt="placeholder"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}