import React, { Component } from 'react';
import logo from './logo.svg';
import { Label } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    
    var eventsHTML = [];
    for(var i = 0; i < this.props.events.length; i++) {
      eventsHTML.push(
        <div><Label>{this.props.events[i].name}</Label></div> 
      )
    }
    return <div>{eventsHTML}</div>;
  }
}

export default App;
