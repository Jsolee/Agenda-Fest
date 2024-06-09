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
  const customEventPropGetter = (event) => {
    const backgroundColor = event.color || '#0077b6';
    return { style: { backgroundColor } };
  };

  const customDayPropGetter = (date) => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return {
        className: 'current-day-highlight',
      };
    }
    return {};
  };

  const groupedEvents = events.reduce((acc, event) => {
    const date = moment(event.start).startOf('day').toDate();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const newEvents = Object.keys(groupedEvents).flatMap((date) => {
    const eventsOnDate = groupedEvents[date];
    if (eventsOnDate.length > 2) {
      return {
        title: `${eventsOnDate.length} eventos`,
        start: new Date(date),
        end: new Date(date),
        allDay: true,
        events: eventsOnDate,
      };
    }
    return eventsOnDate.map(event => ({
      ...event,
      start: new Date(date),
      end: new Date(date),
      allDay: true,
    }));
  });

  const handleSelectEvent = (event) => {
    if (event.events) {
      onSelectEvent(event.events);
    } else {
      onSelectEvent([event]);
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={newEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={handleSelectEvent}
      eventPropGetter={customEventPropGetter}
      dayPropGetter={customDayPropGetter}
      views={['month', 'agenda']}
      defaultView="month"
      messages={{
        agenda: 'Agenda',
        month: 'Mes',
        day: 'Día',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango.',
        showMore: (total) => `+ Ver más (${total})`,
      }}
    />
  );
};

export default CalendarView;