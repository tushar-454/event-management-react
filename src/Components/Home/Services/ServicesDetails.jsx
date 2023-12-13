import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import useAxios from '../../../Hook/useAxios';
import Toast from '../../../Utils/Toast/Toast';

const ServicesDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const date = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ['singleService'],
    queryFn: async () => {
      const res = await axios.get(`/services/${id}`);
      return res.data;
    },
  });
  const { name, image, price, long_description } = isLoading || data;
  const handleServicesBooked = () => {
    const serviceDate = date.current.value;
    if (!serviceDate) {
      return Toast('Enter your sevice date.', 'warning');
    }
    if (new Date(serviceDate).getTime() < new Date().getTime()) {
      return Toast(
        "You can't take any services on the back of the day today",
        'error'
      );
    }
    axios
      .post('/booking', {
        bookedSevices: data,
        email: user.email,
        date: serviceDate,
        status: 'Pending',
      })
      .then((res) => {
        if (res.data.insertedId) {
          Toast('Service added successfull', 'success');
          setShowModal(false);
        } else {
          Toast('There was an error.', 'error');
        }
      });
  };

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
          <button
            type='button'
            onClick={() => setShowModal(true)}
            className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-5 py-3 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          >
            Add to cart
          </button>
        </div>
      </div>
      {showModal && (
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='w-full sm:w-[400px] border p-8 rounded-xl bg-white relative shadow-2xl'>
            <span
              onClick={() => setShowModal(false)}
              className='absolute top-1 right-4 text-2xl font-black cursor-pointer'
            >
              x
            </span>
            <label htmlFor='' className='text-xl block font-semibold my-3'>
              Enter your service date
            </label>
            <input
              type='date'
              ref={date}
              className='w-full border outline-none p-3 rounded-md'
            />
            <button
              onClick={handleServicesBooked}
              className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-5 py-3 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-md my-4'
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDetails;
