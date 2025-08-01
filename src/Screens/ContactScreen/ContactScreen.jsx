import React, { useState} from 'react';
import ContactList from  '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';
import { getContactById } from '../../Services/contactService'
import {Search, MessageSquareMore} from 'lucide-react'
import './ContactScreen.css'
import {FaSearch} from 'react-icons/fa'

const staticContacts =[
    {
        id: 1,
        name: 'Harry',
        description: 'jugando quidditch',
        avatar: 'https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest/scale-to-width-down/1000?cb=20160903184919',
        lastConnection: '17:36',
        connectionStatus: 'offline'
    },

    {
        id: 2,
        name: 'Ron',
        description: 'Tengo hambre',
        avatar: 'https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest/scale-to-width-down/1000?cb=20160903184919',
        lastConnection: '17:36',
        connectionStatus: 'offline'
    }

];



const ContactScreen = () => {
    const contacts =  getContactList()

  const [contactsState, setContactsState] = useState(staticContacts);
    
  return (
        <div className="contact-screen">
         <div className="contact-list-container">   
        <div className="contact-header">
            <h2 className="contact-title">WhatsApp</h2>
            <div className ="search-bar">
                <span className="search-icon"><FaSearch/></span>
                <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" className="search-input"/>
            </div>
            <div className="contact-icons"><MessageSquareMore className="icon"/>
            </div>
            <div className="contact-list"></div>
            </div>
       
            <ContactList contacts={contactsState} />
        </div>
        </div>
    );
};

export default ContactScreen;