import React, { Component } from 'react';
import Card from '../components/Card';
import {robots} from "../robots";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        </header>
      </div>
    );
  }
}

export default App;
