import React from 'react';
import './style.css'

const Pill = ({children}) => {
    return (
        <div className='pillContentContainer'>
            {children}
        </div>
    )
}

export default Pill
