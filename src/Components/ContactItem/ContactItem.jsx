import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
  return (
     <Link to={`/contact/${contact.id}/messages`}className="contact-item"> 
      <img src= {contact.avatar} alt={`${contact.name}'s avatar`}className="avatar" width={100} /> 
      <h2>{contact.name}</h2>
      <span class="contact-lastConnection">Ayer{contact.lastConnection}</span>
      <span class="contact-connectionStatus">Desconectado {contact.connectionStatus}</span>

    </Link>
  );
};



export default ContactItem;


``