import { useLoaderData, useParams } from 'react-router-dom';

const ServicesDetails = () => {
  const { serviceName } = useParams();
  const servicesApi = useLoaderData();
  const service = servicesApi.filter((service) => service.path === serviceName);
  const { name, image, price, long_description } = service[0];
  return (
    <div className='mx-auto max-w-screen-2xl my-20 space-y-5'>
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
    </div>
  );
};

export default ServicesDetails;
