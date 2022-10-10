import React from 'react';
import Pill from '../../../../components/Pill';
import './style.css';

const ContactCard = ({contact}) => {
    return (
        <div className='contactCardContainer'>
            <div className='contactImgContainer'>   
                <img 
                    src={contact.imageSrc}
                    alt={`${contact.name} portrait`}
                    className='contactImg' />
            </div>
            <div className='details'>
                <div className='contactDetails'>
                    <h3>{contact.name}</h3>
                    <h4>{contact.phoneNumber}</h4>
                    <h4>{contact.email}</h4>
                    <h4>{contact.expertise}</h4>
                </div>
                <div className='skillsContainer'>
                    <h4>Skills</h4>
                    <div className='skills'>
                        {
                            contact.skills?.map((skill, index) =>
                                <div className='skill' key={index} >
                                    <Pill>
                                        <h5>{skill}</h5>
                                    </Pill>
                                </div>
                            )
                        }
                    </div>
                </div>
                </div>
        </div>
    )
}

export default ContactCard
