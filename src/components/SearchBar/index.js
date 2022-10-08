import React from 'react';
import './style.css'

const SearchBar = () => {
    return (
        <div className='searchBarContainer'>
            <input className='searchBar' type='text' placeholder='Type name, skills, or any attibute...'/>
        </div>
    )
}

export default SearchBar
