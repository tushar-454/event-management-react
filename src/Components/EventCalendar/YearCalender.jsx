import BCalendar from 'rc-year-calendar';
import { useState } from 'react';
import ACalendar from 'react-awesome-calendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  {
    id: 1,
    color: '#fd3153',
    from: '2021-05-02T18:00:00+00:00',
    to: '2021-05-05T19:00:00+00:00',
    title: 'This is an event',
  },
  {
    id: 2,
    color: '#1ccb9e',
    from: '2021-05-01T13:00:00+00:00',
    to: '2021-05-05T14:00:00+00:00',
    title: 'This is another event',
  },
  {
    id: 3,
    color: '#3694DF',
    from: '2021-05-05T13:00:00+00:00',
    to: '2021-05-05T20:00:00+00:00',
    title: 'This is also another event',
  },
];

export default function YearCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='App flex flex-col gap-5 items-center'>
      <Calendar onChange={onChange} value={value} defaultView='month' />
      <ACalendar events={events} />
      <BCalendar />
    </div>
  );
}
