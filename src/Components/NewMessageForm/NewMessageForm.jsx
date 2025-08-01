import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handldeSubmitSendMessageForm = (event) => {
       event.preventDefault();
       let new_message_text = event.target.message.value;
       
       const nuevoMensaje = {
        id: Date.now(),
        text: new_message_text,
        emisor: 'YO',
        hora: new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
        status:'enviado'
       };
       
       addNewMessage(nuevoMensaje);
       event.target.message.value = '';

  };

    return (
        <form onSubmit= {handldeSubmitSendMessageForm}>
            <div>
                <label htmlFor="message">Mensaje...</label>
                <input 
                type= 'text' 
                placeholder='Mensaje...' 
                id='message' 
                name='message' 
                required />
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    );
};

export default NewMessageForm   
    


