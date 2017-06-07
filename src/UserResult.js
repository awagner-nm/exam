import React from 'react';
import RepoResult from './RepoResult.js'
import './app.css';

const UserResult = () => {
    return (
      <div className='userResults'>
        <h2>USERNAME's repositories</h2>
        <h4>Fiter repos by primary language</h4>

        <select>
		    <option value="JavaScript">JavaScript</option>
		    <option value="HTML">HTML</option>
		    <option value="Ruby">Ruby</option>
		</select>

        <RepoResult />
      </div>
    );
}

export default UserResult;