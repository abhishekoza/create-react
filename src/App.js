import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    console.log(this.props);
    var eventsHTML = [];
    for(var i = 0; i < this.props.events.length; i++) {
      eventsHTML.push(
        <div>{this.props.events[i].name}</div> 
      )
    }
    return <div>{eventsHTML}</div>;
  }
}

export default App;
