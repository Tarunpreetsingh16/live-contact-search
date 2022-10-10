import React, { useState } from 'react';
import Tile from '../../components/Tile';
import ContactCard from './components/ContactCard';
import SearchBox from './components/SearchBox';
import './style.css'
import Contacts from '../../controllers/ContactsBrain';

const MainScreenPage = () => {

    const [contacts, setContacts] = useState(Contacts)

    return (
        <div className='mainContentContainer containerWidth'>
            <SearchBox />
            <div id='contactList'>
                {
                    Object.keys(contacts).map((contactKey) =>
                        <div className='contactContainer'  key={contactKey}>
                            <Tile>
                                <ContactCard contact={contacts[contactKey]} />
                            </Tile>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MainScreenPage
