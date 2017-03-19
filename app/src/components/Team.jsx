import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

/*
- make a div that contains the navbar and the OUR TEAM div
- then Jake's Captain div
- then a div containing all the team members:
- use array of objects, each containing name, title and image url. 
- map through the array. Inside function, call the Item component which renders a box for each member
- the Item component renders a Bootstrap Divider Thumbnail for each person
*/

let images = '/app/bin/Images/'; //all images stored here
let members = [
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: "http://placehold.it/270x270"
    },
    {

    }
];

export default class Team extends React.Component {
    render() {


        return (
            <Grid>
                <Row id="teamBackground">
                    <NavBar />
                    <h1 id="ourTeamTitle">OUR TEAM</h1>
                </Row>
                <Row>
                    <Item name="Jake Malliaros" title="Team Captain"></Item>
                </Row>
                <Row>

                </Row>
            </Grid>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <Thumbnail src="http://placehold.it/270x270" alt="270x270">
                <h3>{this.props.name}</h3>
                <h4>{this.props.title}</h4>
            </Thumbnail>
        );
    }
}