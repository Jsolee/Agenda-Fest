import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

moment.updateLocale('en', {
  week: {
    dow: 1, // Monday is the first day of the week.
  },
});

const CalendarView = ({ events, onSelectEvent }) => {
  const handleSelectEvent = (event) => {
    const date = moment(event.start).startOf('day').toDate();
    const eventsOnDate = events.filter(e => moment(e.start).isSame(date, 'day'));
    onSelectEvent(eventsOnDate || []);
  };

  const handleSelectSlot = (slotInfo) => {
    const date = moment(slotInfo.start).startOf('day').toDate();
    const eventsOnDate = events.filter(event => moment(event.start).isSame(date, 'day'));
    onSelectEvent(eventsOnDate || []);
  };

  const dayPropGetter = (date) => {
    if (moment().isSame(date, 'day')) {
      return {
        className: 'current-day-highlight',
      };
    }
    return {};
  };

  return (
    <div className="calendar-view">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default CalendarView;