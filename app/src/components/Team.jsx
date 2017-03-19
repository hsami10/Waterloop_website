import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import {Grid, Row, Col} from 'react-bootstrap';

/*
- make a div that contains the navbar and the OUR TEAM div
- then Jake's Captain div
- then a div containing all the team members:
- use array of objects, each containing name, title and image url. 
- map through the array. Inside function, call the Item component which renders a box for each member
- the Item component renders a Bootstrap Divider Thumbnail for each person
*/

let images = '/app/bin/Images/'; //all images stored here

export default class Team extends React.Component {
    render() {
        <div class="container-fluid">
            <div id="teamBackground">
                <NavBar />
                <h1 id="ourTeamTitle">OUR TEAM</h1>
            </div>
        </div>
    }
}