import React, { Component, useState } from 'react'
import './App.css';
import GridLayout from 'react-grid-layout';
import { Card, Grid, Button} from 'semantic-ui-react';
import { render } from '@testing-library/react';
import DatePicker from 'react-date-picker';

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
        <Date_Picker />
      </div>
    )
  }
}

class Card1 extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row container columns={2}>
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

function Date_Picker() {
  const[value, onChange] = useState(new Date());

  return (
    <div >
      <Button className="date_picker">
        Today: 
      <DatePicker
        onChange={onChange}
        value={value}
        clearIcon={null}
        format="MMM dd"
        monthAriaLabel="Month"
      />
      </Button>
    </div>
  );
}

export default App;