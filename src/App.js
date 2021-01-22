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
        <Card1 />
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

class Card1 extends React.Component {
  render() {
    return (
      <div>
        <Card className="card1">
          <Card.Content>
            <Card.Header><h4>Watch goes here</h4></Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default App;