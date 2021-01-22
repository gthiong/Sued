import React, { Component } from 'react'
import './App.css';
import GridLayout from 'react-grid-layout';
import { Card, Grid} from 'semantic-ui-react';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return ( 
      <div>
        <Header/>
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


export default App;