import React, { Component } from 'react'
import './App.css';
import GridLayout from 'react-grid-layout';
import { Card, Grid} from 'semantic-ui-react';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return ( 
      <div className="whole-app">
        <Header/>
        <Body/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="App-header"><h2>SUED WATCHES</h2></div>
    )
  }
}

class Body extends React.Component {
  render() {
    return(
      <div className="App-body"><h1>WATCHES</h1></div>
    )
  }
}

export default App;