import SectionHead from '../ReusableUI/SectionHead';
import Calender from './Calender';
import YearCalender from './YearCalender';
const EventCalendar = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <SectionHead
          title='Event Calender'
          subTitle='Stay Informed and Plan Ahead: Explore Our Event Calendar to Discover Exciting Upcoming Events and Stay Connected with Us.'
        />
        <div className='grid gap-10 justify-center content-center'>
          <div className='hidden lg:block'>
            <Calender />
          </div>
          <div>
            <YearCalender />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
