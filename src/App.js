import React, { Component } from 'react';
import Search from './Search.js';
import UserResult from './UserResult.js';
import RepoDetail from './RepoDetail.js';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

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

    }

    handleHomeBtnClick = () => {
    	this.setState({
    		repos: [],
        	userName: ''
    	})
    }

  	render() {


	return (
		
		<Router>
	      <div className="App">

			<Route exact path="/" render={(props) => { 
				return(
					<div>
			        <h1 className='headerTxt'>Github viewer</h1>
			        <div className='wrapper'>

				      	<div>
						  	<Search handleSearch={this.handleSearch} />
						    <UserResult user={this.state.userName} 
						        		repos={this.state.repos} 
						        		detailRepoClick={this.handleDetailRepo} />  
					    </div>
				    </div>
				    </div>
				)      
            }} />

            <Route path="/repo/:repoID" render={(props) => {
                const repoDetails = this.state.repos.find(currRepo => currRepo.id.toString() === props.match.params.repoID)

                if (repoDetails === undefined) {
                    return <Redirect to="/" />
                }

	            return(
	            	<div>
					<div className='headerDiv'>
						<h1 className='headerTxt'>Github viewer</h1>
						<div className='spacerDiv'></div>
						<Link onClick={this.handleHomeBtnClick} 
								className="button" to='/'>Home</Link>
					</div>	            	
	            	<RepoDetail {...props} repoObj={repoDetails} />
	            	</div>
	            	)
				    	
 			}} />

			
			</div>
	      </Router>
	    );
	}
}

export default App;


