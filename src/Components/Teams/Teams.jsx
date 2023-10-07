import { useLoaderData } from 'react-router-dom';
import SectionHead from '../ReusableUI/SectionHead';
import Team from './Team';
const Teams = () => {
  const teams = useLoaderData();
  return (
    <div>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <SectionHead
            title='Our team'
            subTitle='Meet the Heart and Soul Behind Your Events: Our Dedicated Team of
          Event Professionals Committed to Turning Your Visions Into
          Reality.'
          />
          <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {teams?.map((team, index) => (
              <Team key={index} team={team} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
