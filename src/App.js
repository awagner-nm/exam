import React, { Component } from 'react';
import Search from './Search.js';
import UserResult from './UserResult.js';
import RepoDetail from './RepoDetail.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import index from './index.js';

import './app.css';

class App extends Component {
    state = {
        repos: [],
        userName: '',
        repoDetailObj: {},
        detailRepo: false
    }

    handleSearch = (repos, userName) => {
        this.setState({
            repos: repos,
            userName: userName
        })

    }

    handleDetailRepo = (repoObj) => {
    	this.setState({
            repoDetailObj: repoObj,
            detailRepo: true
        })
    }

  render() {

	let body;

	if(this.state.detailRepo){
		body = (
			<RepoDetail repoObj={this.state.repoDetailObj} />
		)
	}

	else{
		body = (
		        <div className='wrapper'>
			        <Search handleSearch={this.handleSearch} />
			        <UserResult user={this.state.userName} 
			        			repos={this.state.repos} 
			        			detailRepoClick={this.handleDetailRepo} />        
			       
		    	</div>
		)
	}

	return (
		
		<Router>
	      <div className="App">
	      <div className="headerDiv">
	        <h1 className='headerTxt'>Github viewer</h1>
	       	<Link className="button" to='/'>Home</Link>
	       	<Route exact path='/' component={index} />
	        </div>
			{body}
	      </div>
	      </Router>
	    );
	}
}

export default App;


