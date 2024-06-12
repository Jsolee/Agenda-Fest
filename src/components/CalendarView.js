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
    if (Calendar.views === 'month' && eventsOnDate.length > 2) {
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
      start: new Date(event.start),
      end: new Date(event.end),
      allDay: false,
    }));
  });

  const handleSelectEvent = (event) => {
    if (event.events) {
      onSelectEvent(event.events);
    } else {
      onSelectEvent([event]);
    }
  };

  const handleShowMore = (date) => {
    const eventsOnDate = groupedEvents[date];
    if (eventsOnDate.length > 2) {
      onSelectEvent(eventsOnDate);
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
      //
      selectable
      //
      views={['month', 'agenda']}
      defaultView="month"
      messages={{
        agenda: 'Agenda',
        month: 'Mes',
        day: 'Dia',
        date: 'Data',
        time: 'Hora',
        event: 'Event',
        noEventsInRange: 'No hay eventos en este rango.',
        showMore: (total) => `+ Ver más (${total})`,
      }}
      components={{
        agenda: {
          event: ({ event }) => (
            <span>
              {event.title} {event.events ? `(${event.events.length} eventos)` : ''}
            </span>
          ),
          header: ({ date, events }) => (
            <thead>
              <tr>
                <th className="rbc-header">Data</th>
                <th className="rbc-header">Hora</th>
                <th className="rbc-header">Event</th>
              </tr>
            </thead>
          ),
          dateCellWrapper: ({ children, value }) => {
            const eventsOnDate = groupedEvents[moment(value).startOf('day').toDate().toISOString()];
            return (
              <div onClick={() => handleShowMore(moment(value).startOf('day').toDate().toISOString())}>
                {children}
              </div>
            );
          },
        },
      }}
    />
  );
};

export default CalendarView;