import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Stuff from "../Stuff";
import Contact from "../Contact";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "default"
    };
  }
  render() {
    return (
      <div>
        HOME Page
      </div>
    );
  }
}