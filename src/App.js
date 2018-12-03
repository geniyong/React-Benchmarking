import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <SideNav onSelect={(selected) => { console.log("Other SieNavItem Selected")}}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#";}}>
                    <NavIcon>
                    <IconContext.Provider value={{ size:"25px", style: { verticalAlign: 'middle' }}}>
                      <FaHome />
                    </IconContext.Provider>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="stuff" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#/stuff";}}>
                    <NavIcon>
                        Stuff
                    </NavIcon>
                    <NavText>
                        Stuff
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#/contact";}}>
                    <NavIcon>
                        Contact
                    </NavIcon>
                    <NavText>
                        Contact
                    </NavText>
                </NavItem>
            </SideNav.Nav>
          </SideNav>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content" style={{marginLeft:"50px"}}>
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>      
    );
  }
}

export default App;
