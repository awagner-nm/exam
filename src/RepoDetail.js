import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const RepoDetail = () => {

    return (

    <div className="App">
    	<div className='headerDiv'>
	        <h1 className='headerTxt'>Github viewer</h1>
	        <button className='homeBtn'>Home</button>
    	</div>
    	<div className='wrapper'>
        <h4>{this.props.repoObj.name} details</h4>

		<table className="table">
		    <thead>
		        <tr>
		            <th width="100">Stars</th>
		            <th width="100">Forks</th>
		            <th width="400">Primary Language</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td>{this.props.repoObj.stargazers_count}</td>
		            <td>{this.props.repoObj.forks}</td>
		            <td>{this.props.repoObj.language}</td>
		        </tr>
		    </tbody>
			</table>
		</div>
    </div>
    );
}

export default RepoDetail;