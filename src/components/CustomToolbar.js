// CustomToolbar.js
import React from 'react';
import { Navigate } from 'react-big-calendar';

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
        <button style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={goToBack}>Anterior</button>
        <button style={{ margin: '1px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={goToToday}>Actual</button>
        <button style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={goToNext}>Següent</button>
      </div>
      <div>
        <h2>{currentMonthYear}</h2>
      </div>
      <div>
        <button style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={goToCalendar}>Calendari</button>
        <button style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={goToAgenda}>Agenda</button>
      </div>
    </div>
  );
};

export default CustomToolbar;