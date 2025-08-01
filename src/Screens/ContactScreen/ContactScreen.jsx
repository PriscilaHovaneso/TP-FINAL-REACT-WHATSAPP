import React, { useState} from 'react';
import ContactList from  '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';
import { getContactById } from '../../Services/contactService'

const contacts =[
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

  const [contactsState, setContactsState] = useState(contacts);
    
  return (
        <div>
            <ContactList contacts={contactsState} />
        </div>
    );
};

export default ContactScreen;