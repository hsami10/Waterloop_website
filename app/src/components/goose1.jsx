import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';

export default class Goose1 extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="goose1backgrnd">
                    <NavBar />
                </Row>
                <Row>
                    <h1>INITIAL PROTOTYPE: GOOSE I</h1>
                </Row>
                <Row>
                    <h2>SPECIFICATIONS</h2>
                    <p>Lorem ipsum dolor sit amet, mei dicunt recusabo temporibus ei, mel deseruisse sententiae 
                        incorrupte no. Ut nonumes deserunt nec, duo ea causae utroque partiendo, ne ius graece 
                        veritus. Quot unum efficiantur ex eum. Meis summo repudiare ius te, cu ignota doctus 
                        consetetur duo. Cu per labores eligendi neglegentur, eam in denique suscipit convenire.</p>
                </Row>
            </Grid>
        );
    }
}