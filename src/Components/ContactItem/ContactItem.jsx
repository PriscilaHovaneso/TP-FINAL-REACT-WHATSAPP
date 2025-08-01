import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
  return (
     <Link to={`/contact/${contact.id}/messages`}className="contact-item">   
      <h2>{contact.name}</h2>
      <img src= {contact.avatar} alt={contact.name}className="avatar" width={100} />
      <span className="contact-lastConnection">Ayer{contact.lastConnection}</span>
      <span className="contact-connectionStatus">Desconectado {contact.connectionStatus}</span>

    </Link>
  );
};



export default ContactItem;


