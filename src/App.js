import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';

import SideNav, { Toggle, NavItem as SideNavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// MyComponents
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar/>
          <SideNav style={{marginTop: "51px"}} onSelect={(selected) => { console.log("Other SieNavItem Selected")}}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <SideNavItem eventKey="home" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#";}}>
                    <NavIcon>
                    <IconContext.Provider value={{ size:"25px", style: { verticalAlign: 'middle' }}}>
                      <FaHome />
                    </IconContext.Provider>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </SideNavItem>
                <SideNavItem eventKey="stuff" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#/stuff";}}>
                    <NavIcon>
                        Stuff
                    </NavIcon>
                    <NavText>
                        Stuff
                    </NavText>
                </SideNavItem>
                <SideNavItem eventKey="contact" onSelect={(eventKey, event) => {console.log(eventKey); console.log(event); window.location.href="/#/contact";}}>
                    <NavIcon>
                        Contact
                    </NavIcon>
                    <NavText>
                        Contact
                    </NavText>
                </SideNavItem>
            </SideNav.Nav>
          </SideNav>
          <div className="content" style={{marginLeft:"63px"}}>
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
