import React, { Component } from 'react';
import Search from './Search.js'
import UserResult from './UserResult.js'

//import RepoDetail from './RepoDetail.js'
// <RepoDetail />
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github viewer</h1>
        <div className='wrapper'>
	        <Search />
	        <UserResult />        
	       
	    </div>
      </div>
    );
  }
}

export default App;


