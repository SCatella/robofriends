import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RoboFriends</h1>
          <SearchBox />
          <CardArray robots={robots} />
        </header>
      </div>
    );
  }
}

export default App;
