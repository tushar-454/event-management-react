import PropTypes from 'prop-types';

const Plan = ({ singlePlan }) => {
  const { id, aos, plan_name, plan_description, plan_price, plan_features } =
    singlePlan;
  return (
    <div
      data-aos={aos}
      className={`w-full flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition ${
        id === 2 && 'scale-110 shadow-2xl'
      } hover:scale-105 shadow-xl`}
    >
      <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
        {plan_name}
      </h5>
      <div className='flex items-baseline text-gray-900 dark:text-white'>
        <span className='text-5xl font-extrabold tracking-tight'>
          {plan_price}
        </span>
        <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
          /event
        </span>
      </div>
      <p className='mt-5'>{plan_description}</p>
      <ul role='list' className='space-y-5 my-7 grow'>
        {plan_features?.map((feature, index) => (
          <li key={index} className='flex space-x-3'>
            <svg
              className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
            </svg>
            <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        type='button'
        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
      >
        Choose plan
      </button>
    </div>
  );
};

Plan.propTypes = {
  singlePlan: PropTypes.object.isRequired,
};

export default Plan;
