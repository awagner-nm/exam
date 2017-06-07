import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './app.css';

class UserResult extends Component{
    state={
      filter: ''
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        });
    }

  render(){

    //if user selected a filter, filter the repos then map them to elements
    let filteredRepos = this.props.repos;

    if(this.state.filter !== ''){

      filteredRepos = this.props.repos.filter((repoObj) => {
        if(repoObj.language === this.state.filter){
          return true;
        }else{
          return false;
        }
      })    
    }

    const repos = filteredRepos.map((repoObj) => {
            return (
              <tr key={repoObj.id}><td onClick={()=> this.props.detailRepoClick(repoObj)}>
              {repoObj.name}</td></tr>
            )
    })


    if(this.props.user.length > 0){

      return (
          <div className='userResults'>
            <h2>{this.props.user}'s repositories</h2>
            <h4>Fiter repos by primary language</h4>

            <select onChange={this.handleChange}>
            <option value="All">All</option>
    		    <option value="JavaScript">JavaScript</option>
    		    <option value="HTML">HTML</option>
    		    <option value="Ruby">Ruby</option>
    		    </select>
          <div>
          
          <table className="table">
          <thead>
            <tr>
                <th width="100">Name</th>
            </tr>
          </thead>
          <tbody>
            {repos}        
          </tbody>
          </table>
          </div>
          </div>
        );
    }
    else{
      return(<div></div>);
    }
  }
}

UserResult.propTypes = {
  repos: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
};

export default UserResult;