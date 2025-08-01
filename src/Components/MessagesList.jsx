import React from "react";
import Message from "./Message/Message";

const MessagesList = ({messages, deleteMessageById}) => {
  if(messages.length === 0) {
    return <span>No hay mensajes</span>
  }
  
  const lista_mensajes = messages.map((message) =>(
       <Message
        key={message.id}
        emisor={message.emisor}
        hora={message.hora}
        id={message.id}
        texto={message.texto||message.text}
        status={message.status}

        deleteMessageById={deleteMessageById}
        />
  ));
    
  
  return (
    <div>
      
      {lista_mensajes}
    </div>
  )

}


export  {MessagesList};


