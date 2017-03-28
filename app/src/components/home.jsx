import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

//navbar component
//FirstFace: main picture comp
//MidFace: 'beyond science fiction - watch university video' component
//EndFace: 'what is Waterloop' comp

let images = '/app/bin/Images/'; //all images stored here

export default class Home extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="homeBackgrnd">
                    <NavBar onPageChange={this.props.onPageChange} />
                </Row>
                <FirstFace />
                <MidFace />
                <EndFace />
            </Grid>
        );
    }
}

class FirstFace extends React.Component {
    render() {
        return (
            <Row>
                <Button bsSize="lg" id="g2LrnMore" className="homeFirstFace">
                    Goose II - Learn More
                </Button>
                <br />
                <div className="homeFirstFace">
                    <img src={images + 'arrow-down.png'} alt="Arrow_down" height="40" width="40" />
                </div>
            </Row>
        );
    }
}

class MidFace extends React.Component {
    render() {
        return (
            <Row>
                <Col id="homeMidFace" xs={8} xsOffset={2}>
                    <div className="homeTitles">BEYOND SCIENCE FICTION</div>
                    <br />
                    <div className="watchVidPrompts">Watch the University Video <span>&rarr;</span></div>
                    <br />
                    <div>
                        <img src="http://placehold.it/950x450" alt="palceholder" />
                    </div>
                </Col>
            </Row>
        );
    }
}

class EndFace extends React.Component {
    render() {
        return (
            <Row>
                <Col id="alignRtBlock" xs={8} xsOffset={2}>
                    <div className="homeTitles">WHAT IS WATERLOOP?</div>
                    <br />
                    <div className="watchVidPrompts" style={{ marginBottom: '20px' }}><span>&larr;</span> Watch the Video</div>
                    <div>
                        <img src={images + "flock-imgs/train-side.jpg"} alt="placeholder" />
                    </div>
                </Col>
            </Row>
        );
    }
}



ReactDOM.render(<Home />, document.getElementById('root'));