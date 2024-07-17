import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from "../components/SearchBox";

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (!this.state.robots.length) ? <h1>Loading</h1> :
    (
      <div className="App tc">
        <header className="App-header">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardArray robots={filteredRobots} />
        </header>
      </div>
    );
  }

}

export default App;
