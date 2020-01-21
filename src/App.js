import React, {Component} from 'react';

import './App.css';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box-component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}))
  }
  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }
  render(){
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
          <h1>Robots Rolodex</h1>
          <SearchBox 
            placeholder="Search Robots"
            handleChange={this.handleChange}>
          </SearchBox>
          <CardList robots={filteredRobots}> </CardList>
      </div>
    );
  }
  
}

export default App;
