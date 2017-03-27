import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class GooseX extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="gXBackgrnd">
                    <NavBar />
                </Row>

                <Row id="gXTitleRow">
                    <h1 id="gXTitle">FUTURE: GOOSE X</h1>
                </Row>

                <Row id="gXContent">
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <p>This is our GOOSE X pod, a conceptual full size Hyperloop vehicle inspired by the
                            prototype we are building. The full size pod will have a capacity of 26 passengers
                            per pod, interior diameter of 2 meters, top speed around 1220 km/h and cost around
                            $500,000 per pod.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Image src={images + 'flock-imgs/gX-extDesign.jpg'} responsive />
                        </Col>
                        <Col md={6}>
                            <h2>EXTERIOR DESIGN</h2>
                            <p>The exterior design of the pod highlights its primary design feature: the geodetic
                            structural frame. The front end of the pod features a funnel like shape which would
                             be used to collect the small amount of low pressure air in front of the train to
                             eliminate air drag and supply air for the compressor which supplies the air castors.
                             The matte black finish departs from contemporary transit imagery and signals in the
                              new era of Hyperloop transit.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdPush={6}>
                            <Image src={images + 'flock-imgs/gX-intDesign.jpg'} responsive />
                        </Col>
                        <Col md={6} mdPull={6}>
                            <h2>INTERIOR DESIGN</h2>
                            <p>Due to cost efficiency, the diameter of the Hyperloop track must be kept as minimal
                            as possible. For this reason, the pod design is kept as small as possible, and the
                            curved geometry, white colour palette, and use of interior features resembling
                            windows creates the illusion of a much bigger space</p>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        );
    }
}