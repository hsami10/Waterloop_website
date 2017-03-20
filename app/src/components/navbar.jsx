import React from 'react';
//BOOTSTRAP IMPORTS
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';

export default class NavBar extends React.Component {
    handleSelect(pageName) {
        this.props.onPageChange(pageName + '-page');
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect id="navbar">
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse id="navbar-items">
                    <Nav>
                        <NavItem eventKey={2} href="#">Sponsors</NavItem>
                        <NavDropdown eventKey={3} title="Flock" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Goose I</MenuItem>
                            <MenuItem eventKey={3.2}>Goose II</MenuItem>
                            <MenuItem divider></MenuItem>
                            <MenuItem eventKey={3.3}>Goose X</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand>
                        <a href="#" id="navbar-brand">WATERLOOP</a>
                    </Navbar.Brand>
                    <Nav onSelect={this.handleSelect('team')}>
                        <NavItem eventKey={1} href="#" >Team</NavItem>
                        <NavItem eventKey={2} href="#" >Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
