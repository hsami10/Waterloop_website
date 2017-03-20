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
let placeholder = 'http://placehold.it/200x200';
let members = [
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
    {
        name: "Luca Wilmer",
        title: "Structures Lead",
        image: placeholder
    },
];

//Main class to create the whole team page
export default class Team extends React.Component {
    render() {
        return (
            <Grid>
                <Row id="teamBackground">
                    <NavBar />
                    <div>
                        <h1 id="ourTeamTitle">OUR TEAM</h1>
                    </div>
                </Row>
                <Row id="captainRow">
                    <Item name="Jake Malliaros" title="Team Captain" image="http://placehold.it/200x200" id="captainJake" />
                </Row>
                <Row id="membersWrapper">
                    <CreateItems />
                </Row>
            </Grid>
        );
    }
}

//CreateItems calls the Item component on each member in the array members.
class CreateItems extends React.Component {
    render() {
        let renderMembers = members.map(function (member, i) {
            return (
                <Item name={member.name} title={member.title} image={member.image} />
            );
        });

        return (
            <div>
                {renderMembers}
            </div>
        );
    }
}

//Item finally creates a Bootstrap Thumbnail based on the props it receives.
class Item extends React.Component {
    render() {
        if (this.props.id) {
            return (
                <Col lg={3} md={4} id={this.props.id}>
                    <Thumbnail src={this.props.image} alt="200x200">
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.title}</h4>
                    </Thumbnail>
                </Col>
            );
        }

        return (
            <Col lg={3} md={4}>
                <Thumbnail src={this.props.image} alt="200x200">
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.title}</h4>
                </Thumbnail>
            </Col>
        );
    }
}