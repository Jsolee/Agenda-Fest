// src/components/EventDetails.js
import React from 'react';

const EventDetails = ({ event }) => {
  if (!event) {
    return <div>Selecciona una festa per veure els detalls.</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Data:</strong> {event.start.toLocaleDateString()}</p>
      <p><strong>Ubicació:</strong> {event.location}</p>
      <p><strong>Descripció:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetails;
