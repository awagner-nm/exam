import React, { Component } from 'react';
import Search from './Search.js'
import UserResult from './UserResult.js'


import './app.css';

class App extends Component {
    state = {
        repos: [],
        userName: ''
    }

    handleSearch = (repos, userName) => {
        this.setState({
            repos: repos,
            userName: userName
        })

        console.log(repos);
    }



  render() {
    return (
      <div className="App">
        <h1>Github viewer</h1>
        <div className='wrapper'>
	        <Search handleSearch={this.handleSearch} />
	        <UserResult user={this.state.userName} repos={this.state.repos} />        
	       
	    </div>
      </div>
    );
  }
}

export default App;


