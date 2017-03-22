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
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/gX-extDesign.jpg'} responsive/>
                        <h2>EXTERIOR DESIGN</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/gX-intDesign.jpg'} responsive/>
                        <h2>INTERIOR DESIGN</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                </Row>
            </Grid>
        );
    }
}