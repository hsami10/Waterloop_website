import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class GooseX extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="g2Backgrnd">
                    <NavBar />
                </Row>
                <Row id="g2TitleRow">
                    <h1 id="g2Title">FUTURE: GOOSE X</h1>
                </Row>
                <Row id="g2Content">
                    <Row>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <Image src='http://placehold.it/900x600' responsive/>
                        <h2>EXTERIOR DESIGN</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <Image src='http://placehold.it/900x600' responsive/>
                        <h2>INTERIOR DESIGN</h2>
                        <Image src='http://placehold.it/900x600' responsive/>
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