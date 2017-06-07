import React from 'react';
import { PropTypes } from 'prop-types';

const RepoDetail = (props) => {
    return (

    	<div className='wrapper'>
        <h4>{props.repoObj.name} details</h4>

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
		            <td>{props.repoObj.stargazers_count}</td>
		            <td>{props.repoObj.forks}</td>
		            <td>{props.repoObj.language}</td>
		        </tr>
		    </tbody>
			</table>
		</div>
    );
}

RepoDetail.propTypes = {
	repoObj: PropTypes.object.isRequired
};

export default RepoDetail;