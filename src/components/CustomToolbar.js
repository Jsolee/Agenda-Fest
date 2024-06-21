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

  const currentMonthYear = toolbar.date.toLocaleString('ca-ES', { month: 'long', year: 'numeric' });

  return (
    <>
      <h2 className="toolbar-month">{currentMonthYear}</h2>
      <div className="toolbar-container">
        <div className="toolbar-side">
          <button className="toolbar-button" onClick={goToBack}>Anterior</button>
        </div>
        <div className="toolbar-middle">
          <button className="toolbar-button" onClick={goToToday}>Actual</button>
        </div>
        <div className="toolbar-side right">
          <button className="toolbar-button" onClick={goToNext}>Següent</button>
        </div>
      </div>
    </>
  );
};

export default CustomToolbar;