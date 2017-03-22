import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class Goose2 extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="g2Backgrnd">
                    <NavBar />
                </Row>
                <Row id="g2TitleRow">
                    <h1 id="g2Title">CONCEPT: GOOSE II</h1>
                </Row>
                <Row id="g2Content">
                    <Row>
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