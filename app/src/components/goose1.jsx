import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';

export default class Goose1 extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="g1Backgrnd">
                    <NavBar />
                </Row>
                <Row id="g1TitleRow">
                    <h1 id="g1Title">INITIAL PROTOTYPE: <br />GOOSE I</h1>
                </Row>
                <Row id="g1Content">
                    <Row>
                        <h2>SPECIFICATIONS</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <img src='http://placehold.it/650x650' />
                        <h2>POD SHELL</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                    </Row>
                    <Row>
                        <img src='http://placehold.it/650x650' />
                        <h2>LEVITATION SYSTEM</h2>
                        <img src='http://placehold.it/650x650' />
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
                        <img src='http://placehold.it/650x650' />
                        <h3>EDDY CURRENT BRAKING</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus.</p>
                        <img src='http://placehold.it/650x650' />
                        <h3>FRICTION BRAKING</h3>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                        <img src='http://placehold.it/650x650' />
                    </Row>
                    <Row>
                        <h2>LATERAL CONTROL</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                        <img src='http://placehold.it/650x650' />
                    </Row>
                    <Row>
                        <h2>DRIVE TRAIN</h2>
                        <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece.</p>
                        <img src='http://placehold.it/650x650' />
                    </Row>
                    <Row>
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