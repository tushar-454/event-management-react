import { useState } from 'react';
import SectionHead from '../ReusableUI/SectionHead';
import Calender from './Calender';
const EventCalendar = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <SectionHead
          title='Event Calender'
          subTitle='Stay Informed and Plan Ahead: Explore Our Event Calendar to Discover Exciting Upcoming Events and Stay Connected with Us.'
        />
        <div className='grid justify-center content-center'>
          <div className='flex flex-col gap-2 my-10 text-3xl font-semibold'>
            Today : {date.getDate()} - {date.getMonth() + 1} -{' '}
            {date.getFullYear()}
            <span className='text-lg'>
              Hover booked item for event name and time
            </span>
          </div>
          <Calender />
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
