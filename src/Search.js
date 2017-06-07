import React from 'react';

const Search = () => {
    return (
	    <div className='searchBox'>
	        <div className="row">
		        <div className="large-12 columns error">
		        	
		        	<label>Search repositories by username</label>
		            <input type="text" placeholder="username" />
		            <small className="error">This is an error message</small>
		            <button className="button expand disabled">Search</button>
		        </div>
	    	</div>
      	</div>
    );
}

export default Search;