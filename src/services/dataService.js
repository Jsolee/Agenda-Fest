// src/services/dataService.js
import eventsData from '../data/events.json';

export const getEvents = () => {
  return eventsData.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end)
  }));
};
