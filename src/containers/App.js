import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import { robots } from "../robots";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardArray robots={robots} />
        </header>
      </div>
    );
  }
}

export default App;
