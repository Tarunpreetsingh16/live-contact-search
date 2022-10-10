import React from 'react';
import './style.css';

const Tile = ({children}) => {
    return (
        <div className='tileContainer'>
            {children}
        </div>
    )
}

export default Tile
