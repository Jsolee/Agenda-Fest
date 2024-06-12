import React, { useState, useEffect } from 'react';
import CalendarView from './components/CalendarView';
import EventDetails from './components/EventDetails';
import ThemeToggle from './components/ThemeToggle';
import { getEvents } from './services/dataService';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="App">
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <h1>Agenda Fest</h1>
      <CalendarView events={events} onSelectEvent={setSelectedEvents} />
      <EventDetails event={selectedEvents} />
    </div>
  );
};

export default App;
