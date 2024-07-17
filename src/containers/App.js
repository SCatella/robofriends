import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div className="App tc">
        <header className="App-header">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardArray robots={filteredRobots} />
        </header>
      </div>
    );
  }
}

export default App;
