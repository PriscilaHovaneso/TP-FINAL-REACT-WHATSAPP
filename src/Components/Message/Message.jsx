import React, { useState } from 'react';


const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
  const [message_selected, setMessageSelected] = useState(false);

  const handleChangeMessageSelected = (e) => {
    e.preventDefault();
    setMessageSelected(true);
  };

  return (
    <div
      className={"message-container " + (message_selected ? "selected" : "")}
      onContextMenu={handleChangeMessageSelected}
    >
      <p className="message-text">{texto}</p>
      <span className="message-time">{hora}</span>
      {message_selected && (
        <button
          className="delete-button" onClick={() => deleteMessageById(id)}>Eliminar</button>
      )}
    </div>
  )
}

export default Message

