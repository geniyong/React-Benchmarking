import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Stuff from "../Stuff";
import Contact from "../Contact";
import AutoPlaySlider from "../AutoPlaySlider";
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
      <AutoPlaySlider />
    );
  }
}