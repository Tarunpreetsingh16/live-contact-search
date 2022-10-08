import React from 'react';
import SearchBox from './components/SearchBox';
import './style.css'

const MainScreenPage = () => {
    return (
        <div className='mainScreenPage'>
            <div className='mainContentContainer'>
                <SearchBox />
            </div>
        </div>
    )
}

export default MainScreenPage
