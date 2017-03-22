import React from 'react';
//BOOTSTRAP IMPORTS
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class NavBar extends React.Component {

    render() {
        return (
            <Navbar inverse fixedTop collapseOnSelect id="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a onSele id="navbar-brand">
                            <Image alt="WATERLOOP" src={images + 'team-logo.png'} responsive />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse id="navbar-items">
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">Sponsors</NavItem>
                        <NavDropdown eventKey={3} title="Flock" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Goose I</MenuItem>
                            <MenuItem eventKey={3.2}>Goose II</MenuItem>
                            <MenuItem divider></MenuItem>
                            <MenuItem eventKey={3.3}>Goose X</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={1} href="/app/src/components/team.jsx">Team</NavItem>
                        <NavItem eventKey={2} href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
