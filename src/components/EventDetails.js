import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './EventDetails.css';

const EventDetails = ({ events }) => {
  if (!events || events.length === 0) {
    return <div className="event-details">Selecciona un dia per veure els events.</div>;
  }

  // Sort events by rating in descending order
  const sortedEvents = [...events].sort((a, b) => b.rating - a.rating);

  return (
    <div className="event-details">
      {sortedEvents.map((event, index) => (
        <div key={index}>
          <h2>{event.title}</h2>
          <p><strong>Data:</strong> {new Date(event.start).toLocaleDateString()}</p>
          <p><strong>Ubicació:</strong> {event.location}</p>
          <p><strong>Descripció:</strong> {event.description}</p>
          <p><strong>Puntuació:</strong></p>
          <div className="rating-container">
            <Rating name="half-rating-read" value={event.rating} precision={0.5} readOnly />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;