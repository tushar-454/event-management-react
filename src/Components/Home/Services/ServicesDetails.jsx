import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServicesDetails = () => {
  const { serviceName } = useParams();
  const servicesApi = useLoaderData();
  const service = servicesApi.filter((service) => service.path === serviceName);
  const { name, image, price, long_description } = service[0];
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-2xl px-5 my-20 space-y-5'>
        <div className='w-full'>
          <img src={image} alt={name} className='rounded-lg shadow-lg' />
        </div>
        <div className='w-full'>
          <h1 className='text-5xl font-extrabold'>{name}</h1>
        </div>
        <div className='w-full'>
          <h1 className='text-4xl font-semibold'>{price}</h1>
        </div>
        <div className='w-full'>
          <p className='text-lg'>{long_description}</p>
        </div>
        <div className='flex items-center'>
          <Link to={'/team'} state={''}>
            <button
              type='button'
              className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-5 py-3 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Explore Our Teams
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
