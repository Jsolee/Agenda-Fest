import React from 'react';
import './EventDetails.css';

const EventDetails = ({ events }) => {
  if (!events || events.length === 0) {
    return <div className="event-details">Selecciona un día para ver los eventos.</div>;
  }

  return (
    <div className="event-details">
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.title}</h2>
          <p><strong>Data:</strong> {new Date(event.start).toLocaleDateString()}</p>
          <p><strong>Ubicació:</strong> {event.location}</p>
          <p><strong>Descripció:</strong> {event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;