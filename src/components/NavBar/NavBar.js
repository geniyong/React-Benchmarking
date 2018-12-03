import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Stuff from "../Stuff";
import Contact from "../Contact";
import { Nav, NavDropdown, MenuItem, Navbar, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "default"
    };
  }
  render() {
    return (
      <Navbar style={{background:"none", borderRadius:"0px", marginBottom: "0px"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">TECHARI</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem eventKey={2}>
            <NavLink to="/stuff">Stuff</NavLink>
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}