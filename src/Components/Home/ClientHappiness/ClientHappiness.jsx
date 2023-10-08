import { Carousel, IconButton } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import SectionHead from '../../ReusableUI/SectionHead';

const ClientHappiness = () => {
  const [clientHappinessApi, setClientHappinessApi] = useState([]);
  useEffect(() => {
    fetch('/client_happiness.json')
      .then((res) => res.json())
      .then((clientHappinessApi) => setClientHappinessApi(clientHappinessApi));
  }, []);
  return (
    <div className='mx-auto max-w-screen-2xl px-4 my-20'>
      <SectionHead
        title='Client Happiness'
        subTitle='Elevating Events, Exceeding Expectations: Hear What Our Satisfied Clients Have to Say About Their Unforgettable Experiences with Us.'
      />
      <div
        data-aos='flip-up'
        className='bg-[url("https://i.postimg.cc/SsGJQQ1v/client-comment-bg-dark.jpg")] bg-no-repeat bg-cover h-96 rounded'
      >
        <Carousel
          className='rounded'
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant='text'
              color='white'
              size='lg'
              onClick={handlePrev}
              className='!absolute bg-[#00000050] hover:bg-[#00000090] top-2/4 left-4 -translate-y-2/4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant='text'
              color='white'
              size='lg'
              onClick={handleNext}
              className='!absolute bg-[#00000050] hover:bg-[#00000090] top-2/4 !right-4 -translate-y-2/4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </IconButton>
          )}
        >
          {clientHappinessApi?.map((review, index) => (
            <div key={index} className='relative h-full'>
              <div className='text absolute flex flex-col gap-5 items-center w-full sm:w-96 bg-none sm:bg-[#00000050] backdrop-blur-0 sm:backdrop-blur-sm px-5 py-5 rounded-lg top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] group'>
                <img
                  src={review.image}
                  alt='client image'
                  className='w-32 rounded-full transition group-hover:scale-105'
                />
                <h1 className='text-3xl text-white'>{review.name}</h1>
                <p className='text-center text-white'>{review.review}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientHappiness;
