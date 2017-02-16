import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


var events;
axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=77Gl6sQD0OidlQZiDwykOl4Fl6MpHF1i')
  .then(function (response) {
    events = response.data._embedded.events;
    ReactDOM.render(
      <App events={events}/>,
      document.getElementById('root')
    );

  })
  .catch(function (error) {
    console.log(error);
  });


