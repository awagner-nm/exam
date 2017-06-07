import React from 'react';


const RepoDetail = () => {

    return (

    <div className="App">
    	<div className='headerDiv'>
	        <h1 className='headerTxt'>Github viewer</h1>
	        <button className='homeBtn'>Home</button>
    	</div>
    	<div className='wrapper'>
        <h4>repo name details</h4>

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
		            <td>32</td>
		            <td>6</td>
		            <td>JavaScript</td>
		        </tr>
		    </tbody>
			</table>
		</div>
    </div>
    );
}

export default RepoDetail;