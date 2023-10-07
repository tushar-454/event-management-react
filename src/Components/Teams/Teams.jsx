import { useLoaderData } from 'react-router-dom';
import Team from './Team';

const Teams = () => {
  const teams = useLoaderData();
  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
            <h2 className='mb-4 text-6xl tracking-tight font-extrabold text-gray-900'>
              Our team
            </h2>
            <p className='font-light text-gray-700 sm:text-xl'>
              Meet the Heart and Soul Behind Your Events: Our Dedicated Team of
              Event Professionals Committed to Turning Your Visions Into
              Reality.
            </p>
          </div>
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
