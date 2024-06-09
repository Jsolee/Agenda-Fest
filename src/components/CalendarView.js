// src/components/CalendarView.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarView.css';

const localizer = momentLocalizer(moment);

moment.updateLocale('en', {
  week: {
    dow: 1, // Monday is the first day of the week.
  },
});

const CalendarView = ({ events, onSelectEvent }) => {
  const dayPropGetter = (date) => {
    if (moment(date).isSame(moment(), 'day')) {
      return {
        className: 'current-day-highlight',
      };
    }
    return {};
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        views={['month', 'agenda']}
        defaultView="month"
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default CalendarView;
