import React from 'react';
import './EventDetails.css';

const EventDetails = ({ events }) => {
  if (!events || events.length === 0) {
    return <div className="event-details">Selecciona un dia per veure els events.</div>;
  }

  // Function to display stars based on the rating
  const displayRating = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

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
          <p><strong>Puntuació:</strong> {displayRating(event.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;