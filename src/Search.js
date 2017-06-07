import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
const axios = require('axios');

const getReposByUsername = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            return(response.data);
        })
        ;

        // .catch((err) => {
        //     console.log(err);
        // });
}

class Search extends Component{
    state = {
        searchName: '',
        searchDisabled: true,
        searchClass: 'large-12 columns',
        errorMsg: ''
    }

    handleChange = (event) => {
    	let searchDis = this.state.searchDisabled;

		if(event.target.value.length<1){
			searchDis = true;
		}
		else{
			searchDis = false;
		}

        this.setState({
            searchName: event.target.value, 
            searchDisabled: searchDis
        });
    }

    handleClick = () => {
        getReposByUsername(this.state.searchName)
        	.then((repos) => {
        		this.setState({
        			searchClass: 'large-12 columns',
        			errorMsg: ''
        		})
        		this.props.handleSearch(repos, this.state.searchName)
        	})
        	.catch(() => {
        		this.setState({
        			searchClass: 'large-12 columns error',
        			errorMsg: 'Unknown username!'
        		});
        	});
    }

	render(){
	    return (
		    <div className='searchBox'>
		        <div className="row">
			        <div className={this.state.searchClass}>
			        	
			        	<label>Search repositories by username</label>
			            <input type="text" 
			            		placeholder="username" 
			            		value={this.state.searchName}
                    			onChange={this.handleChange}/>
			            <small className="error">{this.state.errorMsg}</small>
			            <button className="button expand" 
			            		disabled={this.state.searchDisabled}
			            		onClick={ this.handleClick }
			            		>Search</button>
			        </div>
		    	</div>
	      	</div>
	    );
	}
}

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired
};

export default Search;