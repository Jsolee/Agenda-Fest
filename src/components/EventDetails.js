import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event }) => {
  if (!event || event.length === 0) {
    return <div className="event-details">Selecciona un evento para ver los detalles.</div>;
  }

  return (
    <div className="event-details">
      {event.map((evt, index) => (
        <div key={index}>
          <h2>{evt.title}</h2>
          <p><strong>Data:</strong> {new Date(evt.start).toLocaleDateString()}</p>
          <p><strong>Ubicació:</strong> {evt.location}</p>
          <p><strong>Descripció:</strong> {evt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
