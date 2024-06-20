// CustomToolbar.js
import React from 'react';
import { Navigate } from 'react-big-calendar';
import './CustomToolbar.css'

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    toolbar.onNavigate(Navigate.NEXT);
  };

  const goToToday = () => {
    toolbar.onNavigate(Navigate.TODAY);
  };

  const goToAgenda = () => {
    toolbar.onView('agenda');
  };

  const goToCalendar = () => {
    toolbar.onView('month');
  };

  const currentMonthYear = toolbar.date.toLocaleString('ca-ES', { month: 'long', year: 'numeric' });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px' }}>
      <div>
        <button className="toolbar-button" onClick={goToBack}>Anterior</button>
        <button className="toolbar-button" onClick={goToToday}>Actual</button>
        <button className="toolbar-button" onClick={goToNext}>Següent</button>
      </div>
      <div>
        <h2>{currentMonthYear}</h2>
      </div>
      <div>
        <button className="toolbar-button" onClick={goToCalendar}>Calendari</button>
        <button className="toolbar-button" onClick={goToAgenda}>Agenda</button>
      </div>
    </div>
  );
};

export default CustomToolbar;