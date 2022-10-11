import React, { useEffect, useState } from 'react';
import Tile from '../../components/Tile';
import ContactCard from './components/ContactCard';
import SearchBox from './components/SearchBox';
import './style.css'
import { Contacts, searchContacts }from '../../controllers/ContactsBrain';

const MainScreenPage = () => {

    const [contacts, setContacts] = useState(Contacts)
    const [updatedKeyword, setUpdatedKeyword] = useState('')

    useEffect(() => {
        if (updatedKeyword === '') {
            setContacts(Contacts)
        } else {
            setContacts(searchContacts(updatedKeyword))
        }
    }, [updatedKeyword])

    return (
        <div className='mainContentContainer containerWidth'>
            <SearchBox searchKeywordChanged={setUpdatedKeyword}/>
            <div id='contactList'>
                {
                    contacts.map((contact) =>
                        <div className='contactContainer'  key={contact.email}>
                            <Tile>
                                <ContactCard contact={contact} />
                            </Tile>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MainScreenPage
