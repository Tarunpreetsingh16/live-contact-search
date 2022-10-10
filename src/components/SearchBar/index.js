import React from 'react';
import './style.css'

const SearchBar = ({textChanged}) => {
    return (
        <div className='searchBarContainer'>
            <input
                className='searchBar'
                type='text'
                placeholder='Type name, skills, or any attibute...'
                onChange={event => textChanged(event.target.value)}/>
        </div>
    )
}

export default SearchBar
