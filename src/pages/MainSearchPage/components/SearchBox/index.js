import React from 'react';
import SearchBar from '../../../../components/SearchBar';
import './style.css'

const SearchBox = ({searchKeywordChanged}) => {
    return (
        <div className='searchBoxContainer'>
            <h3>Search Contact</h3>
            <div className='searchBarContainer'>
                <SearchBar textChanged={searchKeywordChanged} />
            </div>
        </div>
    )
}

export default SearchBox
