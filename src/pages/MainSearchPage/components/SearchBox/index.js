import React from 'react';
import SearchBar from '../../../../components/SearchBar';
import './style.css'

const SearchBox = () => {
    return (
        <div className='searchBoxContainer'>
            <h3>Search Contact</h3>
            <div className='searchBarContainer'>
                <SearchBar />
            </div>
        </div>
    )
}

export default SearchBox
