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
      <div className="App-header">
        <h4>SUED WATCHES</h4>
      </div>
    )
  }
}

class Card1 extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Card className="card1">
                <Card.Content>
                  <Card.Header><h4>Watch 1</h4></Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="card1">
                <Card.Content>
                  <Card.Header><h4>Watch 2</h4></Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    )
  }
}

export default App;