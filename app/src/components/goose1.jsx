import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class Goose1 extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="g1Backgrnd">
                    <NavBar onPageCh={this.props.onPageChange} />
                </Row>
                <Row id="g1TitleRow">
                    <h1 id="g1Title">INITIAL PROTOTYPE: <br />GOOSE I</h1>
                </Row>
                <Row id="g1Content">
                    <Row>
                        <h2>SPECIFICATIONS</h2>
                        <p>This is the Hyperloop pod that we are building. The GOOSE I is our half-scale, functional 
                            prototype vehicle pod. Fabrication for the pod is already underway and the funding from 
                            our Kickstarter will be used to complete its construction. This pod is entered in the SpaceX 
                            Hyperloop Pod Competition to perform full systems tests on SpaceX’s one mile long test track at 
                            high-speeds and in a vacuum. <br /><br /> The prototype is about 0.8m  (32") wide, 2.5m (8') long, 0.9m (36") 
                            tall, around 250 kg in weight, and will travel at 550km/h (150m/s).</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/shell.jpg'} responsive />
                        <h2>POD SHELL</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/levitation.png'} responsive />
                        <h2>LEVITATION SYSTEM</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <h2>BRAKING</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                        <Image src={images + 'flock-imgs/eddy-brake.png'} responsive />
                        <h3>EDDY CURRENT BRAKING</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus.</p>
                        <Image src={images + 'flock-imgs/friction-brake.png'} responsive />
                        <h3>FRICTION BRAKING</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/lateral.png'} responsive />
                        <h2>LATERAL CONTROL</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/drive-train.png'} responsive />
                        <h2>DRIVE TRAIN</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/elec-embedded.jpg'} responsive />
                        <h2>ELECTRICAL AND EMBEDDED SYSTEMS</h2>
                        <h3>ELECTRICAL</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                        <h3>EMBEDDED</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.
                        sententiae incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius
                        graece.</p>
                    </Row>
                </Row>
            </Grid>
        );
    }
}