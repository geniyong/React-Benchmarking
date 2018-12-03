import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Stuff from "../Stuff";
import Contact from "../Contact";
import SwipeableViews from 'react-swipeable-views';


const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "default"
    };
  }
  render() {
    let reactSwipeEl;
    return (
      <div>
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
    </SwipeableViews>
      </div>

    );
  }
}