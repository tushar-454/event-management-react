import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { aos, name, _id, image, price, long_description } = service;
  return (
    <>
      <div
        data-aos={aos}
        className={`relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition hover:scale-105 hover:shadow-lg`}
      >
        <div className='relative mx-4 -mt-6 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
          <img src={image} alt={name} />
        </div>
        <div className='p-6'>
          <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {name}
          </h5>
          <h5 className='mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {price}
          </h5>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
            {`${long_description.slice(0, 100)} ...`}
          </p>
        </div>
        <div className='p-6 pt-0'>
          <Link to={`/service/${_id}`}>
            <button
              className='select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-light='true'
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
